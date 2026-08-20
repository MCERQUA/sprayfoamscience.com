# Design System — sprayfoamscience.com

Generated via real Google Stitch AI mockups (`stitch-mcp.sh`, raw-HTTP path). Zero quota issues —
all screens generated successfully across two generation passes (an earlier partial pass plus this
one), no hand-authored fallback needed.

- Stitch project: `projects/13711591348440390938` ("Spray Foam Science — site design")
- Design system asset: `assets/4357411961551780577`
- Model: `GEMINI_3_1_PRO`, `deviceType: DESKTOP`

## Palette (strict warm earth tones + natural green — verified hex hues, no purple/pink/blue)

| Role | Name | Hex |
|---|---|---|
| Primary / brand | Amber-bronze | `#A6672E` |
| Secondary | Deep bronze | `#5C3620` |
| Accent | Warm gold | `#C79A4B` |
| Natural accent | Sage green | `#64784A` |
| Background (base) | Warm paper | `#FAF7F1` |
| Background (tinted band) | Warm sand | `#EFE4D4` |
| Text / inverted dark band | Dark bronze-black | `#2E2419` |

## Typography

- Headline: **Space Grotesk** (confident, editorial geometric-sans)
- Body: **Source Serif 4** (serif chosen specifically for long-form article readability — pillar
  pages run 1,400–2,000 words each; this is the only CCA site in the batch using a serif body face,
  keeping it visually distinct from the sans-only pairings on the trade/coaching sites)
- Roundness: `ROUND_TWELVE`

## Motif / image style

Real spray-foam application job-site photography — technicians in PPE actively spraying foam, warm
work-light lighting. Explicitly NOT a chemistry-lab-with-beakers cliche, NOT generic stock corporate
photography. Hero text-over-image scrim held to >=50% opacity per hard rule.

## Section rhythm

No two adjacent sections share a background: warm-paper base <-> sand-tinted band <-> inverted dark
bronze-black band (credibility strip) <-> full-bleed photo band with scrim (hero only).

## Editorial tone (design-system-level, not just content)

Sober, referee-style building science. No fear-mongering visual treatment on failure-mode content
(no red alert styling, no scare iconography) — presented with the same calm editorial treatment as
the rest of the site. No fabricated stats, no star ratings, no named-testimonial cards anywhere in
any generated screen.

## Screens generated (`.stitch-pages/`) — 6 real screens total

| File | Notes |
|---|---|
| `home.html` | Hero, pillar-topic grid, methodology band, inverted credibility strip, featured articles, FAQ, soft final CTA, footer |
| `topic-open-cell-vs-closed-cell.html` | Representative pillar/long-form article template — two-column layout, comparison table, sticky "find an installer" sidebar card, topic FAQ |
| `open-cell-vs-closed-cell-chemistry.html` | Earlier independent generation of the same pillar page — kept as reference, not shipped |
| `about.html` | Editorial-standards page, inverted credentials strip, soft installer-network explanation |
| `blog-template.html` | Shorter-form article template (700–1,000 words), featured image, related-articles band |
| `find-an-installer.html` | The soft secondary-CTA page — installer-network resource, not a hard sales landing page |

## Downstream build note

Screens are art-direction references (structural scaffold per Stitch skill guidance) — the actual
Next.js build applies these as the locked style contract (palette, type pairing, section rhythm,
editorial tone) via Tailwind, not by transplanting the raw HTML.
