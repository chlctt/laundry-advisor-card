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
import { pickLang, t } from "./localize";
import type { AdvisorAttributes, LaundryAdvisorCardConfig, RoomInfo } from "./types";
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
  description: "Where to dry laundry – outside, a room, the dryer, or wait?",
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
    return { entity: "sensor.laundry_advisor", show_rooms: true };
  }

  public setConfig(config: LaundryAdvisorCardConfig): void {
    if (!config || !config.entity) {
      throw new Error("Please set an advisor sensor entity (entity).");
    }
    this._config = { show_rooms: true, show_reasons: true, ...config };
  }

  public getCardSize(): number {
    if (!this._config || !this.hass) return 4;
    const attr = this.hass.states[this._config.entity]?.attributes as AdvisorAttributes | undefined;
    const rooms = this._config.show_rooms === false ? 0 : (attr?.rooms?.length ?? 0);
    return 3 + Math.ceil(rooms / 2);
  }

  private get _lang(): string {
    return pickLang(this.hass);
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    const lang = this._lang;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return html`<ha-card
        ><div class="warn">
          ${t(lang, "ui.entity_not_found", { entity: this._config.entity })}
        </div></ha-card
      >`;
    }

    const rec: Recommendation =
      (stateObj.state as Recommendation) in STATE_META
        ? (stateObj.state as Recommendation)
        : "unknown";
    const meta = STATE_META[rec];
    const attr = stateObj.attributes as AdvisorAttributes;
    const room = attr.recommended_room ?? "";
    // the integration localises `headline` in the HA UI language – use it directly
    const headline = attr.headline ?? "";
    const rooms = Array.isArray(attr.rooms) ? attr.rooms.slice() : [];

    return html`
      <ha-card>
        <div class="header" style=${`--accent:${meta.color}`}>
          <div class="badge"><ha-icon .icon=${meta.icon}></ha-icon></div>
          <div class="headline">
            <div class="title">
              ${this._config.name ?? t(lang, `states.${rec}.label`, { room })}
            </div>
            <div class="sub">${headline}</div>
          </div>
        </div>

        <div class="scores">
          ${this._ring(t(lang, "ui.today"), attr.outdoor_score, "lg")}
          ${this._ring(t(lang, "ui.tomorrow"), attr.outdoor_score_tomorrow, "sm")}
          ${this._ring(t(lang, "ui.day_after"), attr.outdoor_score_day_after, "sm")}
        </div>

        <div class="infobar">
          ${this._window(attr)}
          ${
            attr.daylight_left_h != null
              ? html`<span class="muted"
                  >${t(lang, "ui.daylight_left", { h: attr.daylight_left_h })}</span
                >`
              : nothing
          }
        </div>

        ${this._config.show_rooms && rooms.length ? this._rooms(rooms) : nothing}
        ${
          this._config.show_reasons && attr.reasons?.length
            ? html`<ul class="reasons">
                ${attr.reasons.map((r) => html`<li>${r}</li>`)}
              </ul>`
            : nothing
        }
      </ha-card>
    `;
  }

  private _ring(label: string, score: number | undefined, size: "lg" | "sm"): TemplateResult {
    const has = score != null && !isNaN(Number(score));
    const s = has ? Math.max(0, Math.min(100, Number(score))) : 0;
    const c = has ? scoreColor(s) : "var(--divider-color, #e0e0e0)";
    return html`
      <div class="ring ${size}">
        <div
          class="dial"
          style=${
            has
              ? `background:conic-gradient(${c} ${s}%, var(--divider-color, #e0e0e0) ${s}%)`
              : `background:var(--divider-color, #e0e0e0)`
          }
        >
          <div class="hole"><span>${has ? Math.round(Number(score)) : "–"}</span></div>
        </div>
        <div class="ring-label">${label}</div>
      </div>
    `;
  }

  private _window(attr: AdvisorAttributes): TemplateResult {
    const s = attr.best_window_start_hour;
    const e = attr.best_window_end_hour;
    if (s == null || e == null)
      return html`<span class="muted">${t(this._lang, "ui.no_window")}</span>`;
    return html`<span class="chip">
      <ha-icon icon="mdi:clock-outline"></ha-icon>
      ${t(this._lang, "ui.window", { start: s, end: e })}
    </span>`;
  }

  private _rooms(rooms: RoomInfo[]): TemplateResult {
    const lang = this._lang;
    return html`
      <div class="rooms">
        <div class="rooms-title">${t(lang, "ui.rooms")}</div>
        ${rooms.map((r) => {
          const chipClass = r.status === "ok" ? "ok" : r.status === "mold_risk" ? "danger" : "warn";
          return html`
            <div class="room ${r.recommended ? "recommended" : ""}">
              <div class="room-bar">
                <div
                  class="room-bar-fill"
                  style=${`width:${Math.max(3, Math.min(100, r.score))}%;background:${scoreColor(
                    r.score,
                  )}`}
                ></div>
              </div>
              <div class="room-main">
                <span class="room-name">
                  ${r.recommended ? html`<ha-icon icon="mdi:star" class="star"></ha-icon>` : nothing}
                  ${r.name}
                </span>
                <span class="room-score">${Math.round(r.score)}</span>
                <span class="tag ${chipClass}">${t(lang, `room_status.${r.status}`)}</span>
              </div>
              <div class="room-sub muted">
                ${r.humidity != null ? html`${r.humidity}% rF` : nothing}
                ${r.temperature != null ? html`· ${r.temperature}°C` : nothing}
                ${
                  r.ventilation_useful != null
                    ? html`·
                      ${
                        r.ventilation_useful
                          ? t(lang, "ui.ventilate_hint")
                          : t(lang, "ui.ventilate_useless")
                      }`
                    : nothing
                }
                ${r.has_dehumidifier ? html`· ${t(lang, "ui.has_dehumidifier")}` : nothing}
                ${r.has_fan ? html`· ${t(lang, "ui.has_fan")}` : nothing}
              </div>
            </div>
          `;
        })}
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
    .rooms {
      border-top: 1px solid var(--divider-color, #e0e0e0);
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .rooms-title {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .room {
      display: flex;
      flex-direction: column;
      gap: 3px;
      padding: 6px 8px;
      border-radius: 8px;
    }
    .room.recommended {
      background: color-mix(in srgb, var(--primary-color, #1e88e5) 12%, transparent);
    }
    .room-bar {
      height: 4px;
      border-radius: 2px;
      background: var(--divider-color, #ececec);
      overflow: hidden;
    }
    .room-bar-fill {
      height: 100%;
      border-radius: 2px;
    }
    .room-main {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .room-name {
      font-weight: 600;
      color: var(--primary-text-color);
      display: inline-flex;
      align-items: center;
      gap: 3px;
    }
    .star {
      --mdc-icon-size: 15px;
      color: var(--primary-color, #1e88e5);
    }
    .room-score {
      font-weight: 700;
      color: var(--primary-text-color);
      font-size: 0.9rem;
    }
    .room-sub {
      font-size: 0.78rem;
    }
    .tag {
      margin-left: auto;
      padding: 1px 8px;
      border-radius: 10px;
      font-size: 0.72rem;
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
