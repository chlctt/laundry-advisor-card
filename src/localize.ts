import type { HomeAssistant } from "custom-card-helpers";
import de from "./localize/de.json";
import en from "./localize/en.json";

const LANGS: Record<string, unknown> = { de, en };

export function pickLang(hass?: HomeAssistant): string {
  const raw =
    (hass?.locale?.language as string | undefined) ||
    (hass as unknown as { language?: string })?.language ||
    "en";
  const code = raw.toLowerCase().split("-")[0];
  return LANGS[code] ? code : "en";
}

function lookup(lang: string, path: string): unknown {
  const walk = (root: unknown): unknown =>
    path.split(".").reduce<unknown>((acc, k) => {
      if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[k];
      return undefined;
    }, root);
  return walk(LANGS[lang]) ?? walk(LANGS.en);
}

export function t(
  lang: string,
  path: string,
  vars?: Record<string, string | number | undefined>,
): string {
  const val = lookup(lang, path);
  // Missing key (blueprint newer than the card): render nothing rather than the
  // raw path.
  if (typeof val !== "string") return "";
  if (!vars) return val;
  return val.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? ""));
}
