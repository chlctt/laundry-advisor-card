import type { LovelaceCardConfig } from "custom-card-helpers";

export interface LaundryAdvisorCardConfig extends LovelaceCardConfig {
  type: string;
  /** The recommendation sensor produced by the ha-laundry-advisor blueprint. */
  entity: string;
  name?: string;
  show_forecast?: boolean;
  show_cellar?: boolean;
  show_reasons?: boolean;
}

export interface ForecastDay {
  date: string;
  score: number;
}

export interface CellarInfo {
  status?: string;
  humidity?: number;
  temperature?: number;
  dewpoint_cellar?: number;
  dewpoint_outdoor?: number;
  abs_h_cellar?: number;
  abs_h_outdoor?: number;
  ventilation_useful?: boolean;
  surface_rh_estimate?: number;
  suitable?: boolean;
  mold_risk?: boolean;
}

export interface AdvisorAttributes {
  headline?: string;
  reasons?: string[];
  outdoor_score?: number;
  outdoor_score_tomorrow?: number;
  daylight_left_h?: number;
  best_window_start_hour?: number | null;
  best_window_end_hour?: number | null;
  forecast_days?: ForecastDay[];
  cellar?: CellarInfo;
}
