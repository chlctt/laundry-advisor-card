# Changelog

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
