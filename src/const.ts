export const CARD_VERSION = "0.1.1";
export const CARD_TAG = "laundry-advisor-card";
export const EDITOR_TAG = "laundry-advisor-card-editor";

export type Recommendation =
  | "hang_outside_now"
  | "hang_outside_later"
  | "outside_marginal"
  | "wait_for_tomorrow"
  | "defer_wash"
  | "cellar_ok"
  | "cellar_dehumidifier"
  | "dryer_recommended"
  | "mold_risk"
  | "unknown";

interface StateMeta {
  icon: string;
  color: string;
  label: string;
}

/** Presentation per recommendation state. Colors reference HA theme vars where
 *  sensible, with a concrete fallback. */
export const STATE_META: Record<Recommendation, StateMeta> = {
  hang_outside_now: { icon: "mdi:weather-sunny", color: "#43a047", label: "Raus damit" },
  hang_outside_later: { icon: "mdi:weather-sunset", color: "#7cb342", label: "Heute später" },
  outside_marginal: { icon: "mdi:weather-partly-cloudy", color: "#c0ca33", label: "Draußen, beobachten" },
  wait_for_tomorrow: { icon: "mdi:timer-sand", color: "#1e88e5", label: "Auf den Ständer" },
  defer_wash: { icon: "mdi:washing-machine-off", color: "#3949ab", label: "Waschen verschieben" },
  cellar_ok: { icon: "mdi:home-floor-b", color: "#fb8c00", label: "Keller (lüften)" },
  cellar_dehumidifier: { icon: "mdi:air-humidifier", color: "#f4511e", label: "Keller (Entfeuchter)" },
  dryer_recommended: { icon: "mdi:tumble-dryer", color: "#8e24aa", label: "Trockner" },
  mold_risk: { icon: "mdi:alert", color: "#e53935", label: "Schimmelgefahr" },
  unknown: { icon: "mdi:help-circle-outline", color: "#9e9e9e", label: "Unbekannt" },
};

export function scoreColor(score: number): string {
  if (score >= 70) return "#43a047";
  if (score >= 45) return "#c0ca33";
  return "#fb8c00";
}
