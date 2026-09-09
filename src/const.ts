export const CARD_VERSION = "0.2.1";
export const CARD_TAG = "laundry-advisor-card";
export const EDITOR_TAG = "laundry-advisor-card-editor";

export type Recommendation =
  | "hang_outside_now"
  | "hang_outside_later"
  | "outside_marginal"
  | "wait_for_tomorrow"
  | "defer_wash"
  | "room_ok"
  | "room_ventilate"
  | "room_dehumidify"
  | "dryer_recommended"
  | "best_effort"
  | "mold_risk"
  | "unknown";

interface StateMeta {
  icon: string;
  color: string;
}

/** Icon + accent colour per recommendation state. Labels/headlines come from
 *  the locale files. */
export const STATE_META: Record<Recommendation, StateMeta> = {
  hang_outside_now: { icon: "mdi:weather-sunny", color: "#43a047" },
  hang_outside_later: { icon: "mdi:weather-sunset", color: "#7cb342" },
  outside_marginal: { icon: "mdi:weather-partly-cloudy", color: "#c0ca33" },
  wait_for_tomorrow: { icon: "mdi:timer-sand", color: "#1e88e5" },
  defer_wash: { icon: "mdi:washing-machine-off", color: "#3949ab" },
  room_ok: { icon: "mdi:tshirt-crew", color: "#43a047" },
  room_ventilate: { icon: "mdi:window-open-variant", color: "#fb8c00" },
  room_dehumidify: { icon: "mdi:air-humidifier", color: "#f4511e" },
  dryer_recommended: { icon: "mdi:tumble-dryer", color: "#8e24aa" },
  best_effort: { icon: "mdi:home-alert", color: "#e64a19" },
  mold_risk: { icon: "mdi:alert", color: "#e53935" },
  unknown: { icon: "mdi:help-circle-outline", color: "#9e9e9e" },
};

export function scoreColor(score: number): string {
  if (score >= 70) return "#43a047";
  if (score >= 45) return "#c0ca33";
  return "#fb8c00";
}
