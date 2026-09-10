# Changelog

## [0.3.0] – 2026-09-10

Now tracks the **ha-laundry-advisor integration** (v0.4+); the template blueprint
is gone. Same `sensor.laundry_advisor` attribute contract.

### Changed
- The headline and the reason lines are taken **verbatim** from the integration's
  own `headline` / `reasons` attributes (localised there in the HA UI language),
  instead of the card re-localising `reason_codes`. Fixes empty reason bullets for
  the v0.4 `window_open` / `window_closed` codes and removes cross-repo drift.
- Locale files shrunk to the card's own strings (chip labels, room status, UI):
  `states.*.headline` and the whole `reasons` block are gone.

### Fixed
- Visual editor: `show_rooms` / `show_reasons` toggles now show their effective
  default (`true`) instead of appearing off until touched.

### Added
- `rooms[]` type gains `has_window` / `window_open`.

## [0.2.1] – 2026-09-09

### Fixed
- Time window no longer renders the German word "Uhr" in English (locale key
  `ui.window`).
- `rooms` is checked with `Array.isArray` before `.map` – a non-array attribute
  no longer throws.
- `t()` falls back to an empty string instead of the raw key path when a key is
  missing (blueprint newer than the card).
- `getCardSize()` now scales with the number of rooms.
- Card picker description is in English.

### Added
- New state `room_ok` ("warm & dry enough").

### CI
- Pinned `hacs/action`; `build.yml` runs on `push` only for `main` (PRs still
  covered); release workflow syncs the version before building.

## [0.2.0] – 2026-09-09

### Added
- **Room list**: renders the blueprint's `rooms[]` – one row per room with a
  score bar, status chip (ok / too humid / too cold / mould) and hints
  (airing helps?, fan, dehumidifier). The recommended room is highlighted.
- **Bilingual (en/de)** via `hass.language`, fallback English – locale files
  `src/localize/{en,de}.json`. Translates states, headlines, `reason_codes`,
  status chips, UI labels, editor.
- New states `room_ventilate`, `room_dehumidify`, `best_effort`.

### Changed / Breaking
- `show_cellar` → `show_rooms`. Needs blueprint **v0.2** (`rooms` attribute).
- Labels/headlines come from the locale files instead of `const.ts`.
- English is the primary language.

## [0.1.2] – 2026-09-09

### Changed
- Removed the forecast bar chart. Three score rings instead:
  **Today** (large), **Tomorrow** and **Day after** (small, equal size).
- Needs the new blueprint attribute `outdoor_score_day_after`.
- `show_forecast` option dropped.

## [0.1.1] – 2026-09-09

### Changed
- Removed the Today/Tomorrow score rings (they duplicated the first two forecast
  bars). Compact header instead (recommendation + best drying window + daylight
  left). The first forecast bar is marked "Today" and highlighted.

## [0.1.0] – 2026-09-09

### Added
- First card version: recommendation header with icon/headline, best time
  window, forecast bars, cellar row (humidity, dew-point delta, ventilation
  hint, wall-humidity estimate, mould badge), reason list.
- Visual editor (`ha-form`).
- HACS plugin setup, build and release workflows.
