# Changelog

## [0.2.0] – unreleased (Branch `v0.2`)

### Added
- **Raum-Liste**: zeigt jeden Trockenraum aus dem Blueprint mit Score-Balken,
  Status-Chip (ok / zu feucht / zu kalt / Schimmel) und Hinweisen
  (Lüften sinnvoll?, Ventilator, Entfeuchter). Der empfohlene Raum ist markiert.
- **Zweisprachig (de/en)** über `hass.language` – Locale-Dateien
  `src/localize/{de,en}.json`, Fallback Englisch. Übersetzt States, Headline,
  `reason_codes`, Status-Chips.
- Neue States `room_ventilate`, `room_dehumidify`, `best_effort`.

### Changed / Breaking
- `show_cellar` → `show_rooms`. Braucht Blueprint **v0.2** (`rooms`-Attribut).
- Headline/Labels kommen aus den Locale-Dateien statt aus `const.ts`.

## [0.1.2] – 2026-09-09

### Changed
- Tagesvorschau-Balken entfernt. Stattdessen drei Score-Ringe:
  **Heute** (groß) · **Morgen** · **Übermorgen** (beide klein, gleich groß).
- Benötigt das neue Blueprint-Attribut `outdoor_score_day_after`
  (ha-laundry-advisor ≥ 9da0ca1).
- Config-Option `show_forecast` entfällt.

## [0.1.1] – 2026-09-09

### Changed
- Score-Ringe (Heute/Morgen) entfernt – die Tagesvorschau-Balken decken das ab.
  Kopf ist jetzt kompakter: Empfehlung + bestes Trockenfenster + Tageslicht.
- Erster Balken der Vorschau ist als „Heute" markiert und hervorgehoben.

## [0.1.0] – 2026-09-09

### Added
- Erste Card-Version (v0.1): Empfehlungs-Header mit Icon/Headline,
  bestes Zeitfenster, Tagesvorschau-Balken,
  Keller-Zeile (rF, Taupunktdifferenz, Lüften-Hinweis, geschätzte
  Wandfeuchte, Schimmel-Badge), Begründungs-Liste.
- Visueller Editor (`ha-form`).
- HACS-Plugin-Setup, Build- und Release-Workflow.
