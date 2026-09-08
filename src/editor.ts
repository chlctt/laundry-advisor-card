import { LitElement, html, nothing, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";

import { EDITOR_TAG } from "./const";
import type { LaundryAdvisorCardConfig } from "./types";

const SCHEMA = [
  {
    name: "entity",
    required: true,
    selector: { entity: { domain: "sensor" } },
  },
  { name: "name", selector: { text: {} } },
  {
    type: "grid",
    name: "",
    schema: [
      { name: "show_forecast", selector: { boolean: {} } },
      { name: "show_cellar", selector: { boolean: {} } },
      { name: "show_reasons", selector: { boolean: {} } },
    ],
  },
];

@customElement(EDITOR_TAG)
export class LaundryAdvisorCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: LaundryAdvisorCardConfig;

  public setConfig(config: LaundryAdvisorCardConfig): void {
    this._config = config;
  }

  private _label = (schema: { name: string }): string => {
    const map: Record<string, string> = {
      entity: "Advisor-Sensor",
      name: "Titel (optional)",
      show_forecast: "Tagesvorschau",
      show_cellar: "Keller-Zeile",
      show_reasons: "Begründungen",
    };
    return map[schema.name] ?? schema.name;
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
