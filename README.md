# Laundry Advisor Card

Lovelace card for the **[ha-laundry-advisor](https://github.com/chlctt/ha-laundry-advisor)**
blueprint: shows at a glance whether laundry should dry **outside**, in an
**indoor room**, in the **tumble dryer**, or whether to **wait**.

> Status: **v0.2**. Needs blueprint v0.2. Bilingual (en/de) via `hass.language`,
> fallback English.

## Requirement

The **ha-laundry-advisor** blueprint (v0.2) must be installed and produce a
sensor (default `sensor.laundry_advisor`) with the recommendation as its state
and the details as attributes.

## Installation (HACS)

1. HACS → ⋮ → *Custom repositories*
2. Repo `https://github.com/chlctt/laundry-advisor-card`, category **Dashboard**
3. Download, reload the page.

Manual: copy `dist/laundry-advisor-card.js` to `config/www/` and add it as a
resource (`/local/laundry-advisor-card.js`, type *JavaScript module*).

## Usage

```yaml
type: custom:laundry-advisor-card
entity: sensor.laundry_advisor
# optional:
name: Laundry
show_rooms: true
show_reasons: true
```

A visual editor is available.

| Option | Default | Description |
|---|---|---|
| `entity` | – | advisor sensor (required) |
| `name` | state label | heading |
| `show_rooms` | `true` | room list (score, status, airing/fan/dehumidifier) |
| `show_reasons` | `true` | reason list |

Layout: three score rings (**Today** large, **Tomorrow** + **Day after** small),
best drying window, then the room list with the recommended room highlighted.

**Language:** taken from `hass.language` (en/de), fallback English – independent
of the blueprint's `language` input.

## Development

```bash
npm ci
npm run build      # -> dist/laundry-advisor-card.js
npm run watch
```

`dist/` is committed (HACS loads from it) and attached as a release asset on
every `v*` tag.

## Licence

MIT – see [LICENSE](LICENSE).
