# DESIGN.md — Monetize OSS

Built 2026-10 from the user-pinned reference (rogerio-style wide dark layout),
translated into the existing teal/green world. See PRODUCT.md for brand truth.

## Tokens (`static/style.css`)

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0f1115` | ground (light: `#fbfbf9`) |
| `--fg` | `#d7dae0` | text (light: `#1c1e24`) |
| `--muted` | `#8a919c` | secondary text |
| `--accent` | `#5eead4` | teal — links hover, emphasis |
| `--accent2` | `#34d399` | green — pills, prompts, selection |
| `--accent3` | `#febc2e` | amber — cursor blink, primary CTA only |
| `--card` | `#171a21` | surface (light: `#ffffff`) |
| `--border` | `#262b36` | hairlines |
| `--link` | `#7dd3fc` | links (light: `#0369a1`) |

Light scheme swaps accent text colors to `#047857` / `#0f766e` (contrast).

## Rules

- **Width:** nav/main 64rem on blog, 72rem on landing. Article prose capped at
  72ch (`.post > p/ul/ol/blockquote/h*`); media and code take full width.
- **Pills:** rounded-full, accent2 border + text, mono font. Used for tags and
  landing badges.
- **Cards:** `--card` surface, 1px border, 10–14px radius, hover = lift
  (`translateY(-2px)`) + accent2 border. No side-tab accent borders.
- **Terminal signature:** blinking amber cursor/underscore (landing headline,
  cookie widget), traffic-light titlebar on the consent widget.
- **Browser chrome themed:** `::selection` green, caret amber, scrollbar dark,
  `:focus-visible` teal outline.
- **Imagery:** generated illustrations per post (`static/img/*.jpg`, 1376×768),
  real screenshots for product proof. Rounded, bordered frames.
- **Landing layout:** hero (avatar, display headline with cursor, pills, CTAs)
  → display-scale why statement → split feature cards (text/image, alternating)
  → footer. Primary CTA amber, secondary ghost.

## Anti-rules

- No kickers/eyebrows above headings.
- No gradient text, no glass, no side-tab borders.
- No same-size icon-card grids as page structure.
