import type { LovelaceCardConfig } from "custom-card-helpers";

export interface LaundryAdvisorCardConfig extends LovelaceCardConfig {
  type: string;
  /** `sensor.laundry_advisor` from the ha-laundry-advisor integration. */
  entity: string;
  name?: string;
  show_rooms?: boolean;
  show_reasons?: boolean;
}

export interface ForecastDay {
  date: string;
  score: number;
}

export interface RoomInfo {
  name: string;
  score: number;
  status: "ok" | "too_humid" | "too_cold" | "mold_risk";
  temperature?: number;
  humidity?: number;
  dewpoint?: number;
  vpd?: number;
  ventilation_useful?: boolean;
  has_window?: boolean;
  window_open?: boolean | null;
  has_fan?: boolean;
  has_dehumidifier?: boolean;
  suitable?: boolean;
  mold_risk?: boolean;
  recommended?: boolean;
}

export interface ReasonCode {
  code: string;
  s?: number | string;
  t?: number | string;
  d?: number | string;
  n?: string;
  rh?: number | string;
}

export interface AdvisorAttributes {
  /** Localised one-liner from the integration (HA UI language). */
  headline?: string;
  /** Localised reason lines from the integration. */
  reasons?: string[];
  /** Language-neutral reason codes (kept for consumers that localise themselves). */
  reason_codes?: ReasonCode[];
  recommended_room?: string | null;
  recommended_fan?: string | null;
  recommended_dehumidifier?: string | null;
  outdoor_score?: number;
  outdoor_score_tomorrow?: number;
  outdoor_score_day_after?: number;
  daylight_left_h?: number;
  best_window_start_hour?: number | null;
  best_window_end_hour?: number | null;
  forecast_days?: ForecastDay[];
  rooms?: RoomInfo[];
}
