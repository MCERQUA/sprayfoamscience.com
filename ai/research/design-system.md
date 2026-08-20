# Design System — sprayfoamscience.com

Generated via real Google Stitch AI mockups (`stitch-mcp.sh`, raw-HTTP path). Zero quota issues.
Two independent Stitch project runs happened during this build (a background research/build pass
and a separate direct pass), both producing real, valid warm-earth-tone design systems in the same
family. The design tokens actually applied in `src/app/globals.css` are from the first run below;
the second run's screens are kept in `.stitch-pages/` as additional reference material — no
hand-authored fallback was needed at any point.

- Stitch project (applied): `projects/16665604758758016080`, design system `assets/9904468954651768784`
- Stitch project (reference only): `projects/13711591348440390938`, design system `assets/4357411961551780577`
- Model: `GEMINI_3_1_PRO`, `deviceType: DESKTOP`

## Palette (strict warm earth tones + natural green — verified hex hues, no purple/pink/blue)
Values below are what's actually live in `src/app/globals.css`.

| Role | Name | Hex |
|---|---|---|
| Primary / brand | Rust/terracotta | `#A85A2E` |
| Secondary | Bronze | `#8C6239` |
| Accent | Warm gold | `#C79A4B` |
| Natural accent | Sage green | `#64784A` |
| Background (base) | Warm paper | `#FAF7F1` |
| Background (tinted band) | Warm sand | `#EFE4D4` |
| Text / inverted dark band | Dark clay | `#2E2419` / `#5C3620` |

## Typography

- Headline: **Space Grotesk** (confident, editorial geometric-sans)
- Body: **Source Serif 4** (serif chosen specifically for long-form article readability — pillar
  pages run roughly 1,000–1,400 words each; this is the only CCA site in the batch using a serif
  body face, keeping it visually distinct from the sans-only pairings on the trade/coaching sites)
- Roundness: `ROUND_TWELVE`

## Motif / image style

Real spray-foam application job-site photography — technicians in PPE actively spraying foam, warm
work-light lighting. Explicitly NOT a chemistry-lab-with-beakers cliche, NOT generic stock corporate
photography. Hero text-over-image scrim held to >=50% opacity per hard rule (verified in the live
`Hero.tsx` component: `from-ink/90 via-ink/70 to-ink/50`).

## Section rhythm

No two adjacent sections share a background: warm-paper base <-> sand-tinted band <-> inverted dark
clay band (credibility strip) <-> full-bleed photo band with scrim (hero only).

## Editorial tone (design-system-level, not just content)

Sober, referee-style building science. No fear-mongering visual treatment on failure-mode content
(no red alert styling, no scare iconography). No fabricated stats, no star ratings, no
named-testimonial cards anywhere in any generated screen or in the shipped site.

## Screens generated (`.stitch-pages/`) — 6 real screens total across both runs

| File | Notes |
|---|---|
| `home.html` | Hero, pillar-topic grid, methodology band, inverted credibility strip, featured articles, FAQ, soft final CTA, footer. One card overlay gradient (`from-white/90 to-white/40`) was found decaying below the 50% scrim floor during QA and corrected to `/60` — this file is a static reference only, not shipped, but fixed for consistency since `pre-deploy-content-check.sh` scans it. |
| `find-an-installer.html` | The soft secondary-CTA page — installer-network resource, not a hard sales landing page |
| `topic-open-cell-vs-closed-cell.html` / `open-cell-vs-closed-cell-chemistry.html` | Two independent generations of the representative pillar/long-form article template (two-column layout, comparison table, sticky "find an installer" sidebar card, topic FAQ) — both kept as reference |
| `about.html` | Editorial-standards page, inverted credentials strip, soft installer-network explanation |
| `blog-template.html` | Shorter-form article template, featured image, related-articles band |

## Downstream build note

Screens are art-direction references (structural scaffold per Stitch skill guidance) — the actual
Next.js build applies these as the locked style contract (palette, type pairing, section rhythm,
editorial tone) via Tailwind, not by transplanting the raw HTML.
