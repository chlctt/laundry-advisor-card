import { LitElement, html, css, nothing, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";

import {
  CARD_TAG,
  CARD_VERSION,
  EDITOR_TAG,
  STATE_META,
  scoreColor,
  type Recommendation,
} from "./const";
import type { AdvisorAttributes, LaundryAdvisorCardConfig } from "./types";
import "./editor";

/* eslint-disable no-console */
console.info(
  `%c LAUNDRY-ADVISOR-CARD %c ${CARD_VERSION} `,
  "color:white;background:#1e88e5;font-weight:700",
  "color:#1e88e5;background:#eee",
);
/* eslint-enable no-console */

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: CARD_TAG,
  name: "Laundry Advisor Card",
  description: "Wäschewetter – draußen, Keller oder warten?",
  preview: true,
  documentationURL: "https://github.com/chlctt/laundry-advisor-card",
});

@customElement(CARD_TAG)
export class LaundryAdvisorCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: LaundryAdvisorCardConfig;

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement(EDITOR_TAG) as unknown as LovelaceCardEditor;
  }

  public static getStubConfig(): Partial<LaundryAdvisorCardConfig> {
    return { entity: "sensor.laundry_advisor", show_cellar: true };
  }

  public setConfig(config: LaundryAdvisorCardConfig): void {
    if (!config || !config.entity) {
      throw new Error("Bitte eine Advisor-Sensor-Entität angeben (entity).");
    }
    this._config = {
      show_cellar: true,
      show_reasons: true,
      ...config,
    };
  }

  public getCardSize(): number {
    return 3;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return html`<ha-card
        ><div class="warn">Entität ${this._config.entity} nicht gefunden.</div></ha-card
      >`;
    }

    const rec = (stateObj.state as Recommendation) in STATE_META
      ? (stateObj.state as Recommendation)
      : "unknown";
    const meta = STATE_META[rec];
    const attr = stateObj.attributes as AdvisorAttributes;
    const today = attr.outdoor_score;
    const tomorrow = attr.outdoor_score_tomorrow;
    const dayAfter = attr.outdoor_score_day_after;

    return html`
      <ha-card>
        <div class="header" style=${`--accent:${meta.color}`}>
          <div class="badge"><ha-icon .icon=${meta.icon}></ha-icon></div>
          <div class="headline">
            <div class="title">${this._config.name ?? meta.label}</div>
            <div class="sub">${attr.headline ?? ""}</div>
          </div>
        </div>

        <div class="scores">
          ${this._ring("Heute", today, "lg")}
          ${this._ring("Morgen", tomorrow, "sm")}
          ${this._ring("Übermorgen", dayAfter, "sm")}
        </div>

        <div class="infobar">
          ${this._renderWindow(attr)}
          ${attr.daylight_left_h != null
            ? html`<span class="muted">${attr.daylight_left_h} h Tageslicht übrig</span>`
            : nothing}
        </div>

        ${this._config.show_cellar && attr.cellar ? this._renderCellar(attr.cellar) : nothing}
        ${this._config.show_reasons && attr.reasons?.length
          ? html`<ul class="reasons">
              ${attr.reasons.map((r) => html`<li>${r}</li>`)}
            </ul>`
          : nothing}
      </ha-card>
    `;
  }

  private _ring(label: string, score: number | undefined, size: "lg" | "sm"): TemplateResult {
    if (score == null || isNaN(Number(score))) {
      return html`
        <div class="ring ${size}">
          <div class="dial" style="background:var(--divider-color, #e0e0e0)">
            <div class="hole"><span>–</span></div>
          </div>
          <div class="ring-label">${label}</div>
        </div>
      `;
    }
    const s = Math.max(0, Math.min(100, Number(score)));
    const c = scoreColor(s);
    return html`
      <div class="ring ${size}">
        <div
          class="dial"
          style=${`background:conic-gradient(${c} ${s}%, var(--divider-color, #e0e0e0) ${s}%)`}
        >
          <div class="hole"><span>${Math.round(Number(score))}</span></div>
        </div>
        <div class="ring-label">${label}</div>
      </div>
    `;
  }

  private _renderWindow(attr: AdvisorAttributes): TemplateResult {
    const s = attr.best_window_start_hour;
    const e = attr.best_window_end_hour;
    if (s == null || e == null) return html`<span class="muted">Kein Trockenfenster heute</span>`;
    return html`<span class="chip">
      <ha-icon icon="mdi:clock-outline"></ha-icon> ${s}–${e} Uhr
    </span>`;
  }

  private _renderCellar(c: NonNullable<AdvisorAttributes["cellar"]>): TemplateResult {
    const dd =
      c.dewpoint_outdoor != null && c.dewpoint_cellar != null
        ? (c.dewpoint_outdoor - c.dewpoint_cellar).toFixed(1)
        : null;
    return html`
      <div class="cellar">
        <div class="cellar-row">
          <ha-icon icon="mdi:home-floor-b"></ha-icon>
          <span>Keller</span>
          ${c.humidity != null ? html`<b>${c.humidity}%</b>` : nothing}
          ${c.temperature != null ? html`<span class="muted">${c.temperature}°C</span>` : nothing}
          ${c.mold_risk
            ? html`<span class="tag danger">Schimmel</span>`
            : c.suitable
              ? html`<span class="tag ok">nutzbar</span>`
              : html`<span class="tag warn">ungünstig</span>`}
        </div>
        <div class="cellar-row muted small">
          ${dd != null
            ? html`Taupunkt außen ${dd} K ${Number(dd) < 0 ? "unter" : "über"} Keller ·`
            : nothing}
          Lüften: ${c.ventilation_useful ? "sinnvoll" : "bringt nichts"}
          ${c.surface_rh_estimate != null ? html`· Wand ~${c.surface_rh_estimate}%` : nothing}
        </div>
      </div>
    `;
  }

  static styles = css`
    ha-card {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .warn {
      color: var(--error-color, #db4437);
    }
    .header {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .badge {
      flex: 0 0 auto;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: color-mix(in srgb, var(--accent) 18%, transparent);
      color: var(--accent);
    }
    .badge ha-icon {
      --mdc-icon-size: 26px;
    }
    .headline .title {
      font-weight: 600;
      font-size: 1.05rem;
      color: var(--primary-text-color);
    }
    .headline .sub {
      font-size: 0.9rem;
      color: var(--secondary-text-color);
    }
    .scores {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }
    .ring {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    .dial {
      border-radius: 50%;
      display: grid;
      place-items: center;
    }
    .ring.lg .dial {
      width: 78px;
      height: 78px;
    }
    .ring.sm .dial {
      width: 56px;
      height: 56px;
    }
    .hole {
      width: 72%;
      height: 72%;
      border-radius: 50%;
      background: var(--card-background-color, #fff);
      display: grid;
      place-items: center;
    }
    .hole span {
      font-weight: 700;
      color: var(--primary-text-color);
    }
    .ring.lg .hole span {
      font-size: 1.15rem;
    }
    .ring.sm .hole span {
      font-size: 0.85rem;
    }
    .ring-label {
      font-size: 0.75rem;
      color: var(--secondary-text-color);
    }
    .infobar {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      border-radius: 14px;
      background: var(--secondary-background-color, #f1f1f1);
      color: var(--primary-text-color);
      font-size: 0.85rem;
    }
    .chip ha-icon {
      --mdc-icon-size: 16px;
    }
    .muted {
      color: var(--secondary-text-color);
      font-size: 0.85rem;
    }
    .small {
      font-size: 0.8rem;
    }
    .cellar {
      border-top: 1px solid var(--divider-color, #e0e0e0);
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .cellar-row {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .cellar-row ha-icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
    }
    .tag {
      margin-left: auto;
      padding: 1px 8px;
      border-radius: 10px;
      font-size: 0.75rem;
    }
    .tag.ok {
      background: #43a04722;
      color: #2e7d32;
    }
    .tag.warn {
      background: #fb8c0022;
      color: #ef6c00;
    }
    .tag.danger {
      background: #e5393522;
      color: #c62828;
    }
    .reasons {
      margin: 0;
      padding-left: 18px;
      color: var(--secondary-text-color);
      font-size: 0.82rem;
    }
    .reasons li {
      margin: 2px 0;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "laundry-advisor-card": LaundryAdvisorCard;
  }
}
