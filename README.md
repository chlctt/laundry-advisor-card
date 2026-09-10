# Laundry Advisor Card

Lovelace card for the **[ha-laundry-advisor](https://github.com/chlctt/ha-laundry-advisor)**
integration: shows at a glance whether laundry should dry **outside**, in an
**indoor room**, in the **tumble dryer**, or whether to **wait**.

> Needs **ha-laundry-advisor ≥ v0.4** (the custom integration) for the `room_ok`
> state and the window/door hints. The card localises the headline and reason
> lines in the viewer's HA language.

## Requirement

The **ha-laundry-advisor** integration must be installed and provide
`sensor.laundry_advisor` – the recommendation as its state, the details as
attributes.

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

**Language:** the headline and reason lines come already localised from the
integration (HA UI language). The card's own labels (chips, "Rooms", …) follow
`hass.language` (en/de), fallback English.

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
