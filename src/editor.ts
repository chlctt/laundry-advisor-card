import { LitElement, html, nothing, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";

import { EDITOR_TAG } from "./const";
import { pickLang } from "./localize";
import type { LaundryAdvisorCardConfig } from "./types";

const SCHEMA = [
  { name: "entity", required: true, selector: { entity: { domain: "sensor" } } },
  { name: "name", selector: { text: {} } },
  {
    type: "grid",
    schema: [
      { name: "show_rooms", selector: { boolean: {} } },
      { name: "show_reasons", selector: { boolean: {} } },
    ],
  },
];

const LABELS: Record<string, Record<string, string>> = {
  de: {
    entity: "Advisor-Sensor",
    name: "Titel (optional)",
    show_rooms: "Raum-Liste",
    show_reasons: "Begründungen",
  },
  en: {
    entity: "Advisor sensor",
    name: "Title (optional)",
    show_rooms: "Room list",
    show_reasons: "Reasons",
  },
};

@customElement(EDITOR_TAG)
export class LaundryAdvisorCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: LaundryAdvisorCardConfig;

  public setConfig(config: LaundryAdvisorCardConfig): void {
    this._config = config;
  }

  private _label = (schema: { name: string }): string => {
    const lang = pickLang(this.hass);
    return (LABELS[lang] ?? LABELS.en)[schema.name] ?? schema.name;
  };

  protected render(): TemplateResult | typeof nothing {
    if (!this.hass || !this._config) return nothing;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${this._label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    const config = ev.detail.value as LaundryAdvisorCardConfig;
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config }, bubbles: true, composed: true }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "laundry-advisor-card-editor": LaundryAdvisorCardEditor;
  }
}
