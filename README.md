# Laundry Advisor Card / Wäschewetter-Card

Lovelace-Card zur **[ha-laundry-advisor](https://github.com/chlctt/ha-laundry-advisor)**
Blueprint: zeigt auf einen Blick, ob Wäsche **draußen**, **im Keller** oder
**gar nicht heute** getrocknet werden sollte.

> Status: **MVP / v0.1** – funktioniert, Feinschliff folgt. Screenshot folgt,
> sobald der Blueprint auf einer Instanz läuft.

## Voraussetzung

Der Blueprint **ha-laundry-advisor** muss installiert sein und einen Sensor
liefern (Default `sensor.laundry_advisor`) mit dem Empfehlungs-Zustand als
State und den Detailwerten als Attributen.

## Installation (HACS)

1. HACS → *Frontend* → ⋮ → *Benutzerdefinierte Repositories*
2. Repo `https://github.com/chlctt/laundry-advisor-card`, Kategorie **Lovelace**
3. Installieren, Seite neu laden.

Manuell: `dist/laundry-advisor-card.js` nach `config/www/` kopieren und als
Ressource (`/local/laundry-advisor-card.js`, Typ *JavaScript-Modul*) einbinden.

## Nutzung

```yaml
type: custom:laundry-advisor-card
entity: sensor.laundry_advisor
# optional:
name: Wäschewetter
show_forecast: true
show_cellar: true
show_reasons: true
```

Ein visueller Editor ist vorhanden.

| Option | Default | Beschreibung |
|---|---|---|
| `entity` | – | Advisor-Sensor (Pflicht) |
| `name` | State-Label | Überschrift |
| `show_forecast` | `true` | Tagesvorschau-Balken |
| `show_cellar` | `true` | Keller-Zeile (rF, Taupunktdifferenz, Lüften, Wandfeuchte) |
| `show_reasons` | `true` | Begründungs-Liste |

## Entwicklung

```bash
npm ci
npm run build      # -> dist/laundry-advisor-card.js
npm run watch
```

`dist/` wird committet (HACS lädt daraus) und bei jedem `v*`-Tag als
Release-Asset angehängt.

## Lizenz

MIT – siehe [LICENSE](LICENSE).
