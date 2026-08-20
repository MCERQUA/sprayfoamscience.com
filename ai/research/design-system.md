# Design System — sprayfoamscience.com

Generated via real Google Stitch AI mockups (`stitch-mcp.sh`, raw-HTTP path). Zero quota issues — all 4 screens generated on the first attempt, no hand-authored fallback needed.

- Stitch project: `projects/16665604758758016080` ("Spray Foam Science — site design")
- Design system asset: `assets/9904468954651768784`
- Model: `GEMINI_3_1_PRO`, `deviceType: DESKTOP`

## Palette (strict warm earth tones + natural green — verified hex hues, no purple/pink/blue)

| Role | Name | Hex |
|---|---|---|
| Primary / brand | Rust / Terracotta | `#A85A2E` |
| Dark inverted-band | Deep Clay | `#5C3620` |
| Accent | Gold | `#C79A4B` |
| Secondary | Bronze | `#8C6239` |
| Natural accent | Sage Green | `#64784A` |
| Background (base) | Warm off-white | `#FAF7F1` |
| Background (tinted band) | Warm sand | `#EFE4D4` |
| Text | Charcoal | `#2E2419` |

## Typography

- Headline: **Space Grotesk** (confident, technical/editorial — not a marketing-sales feel)
- Body: **Work Sans** (clean, readable)
- Roundness: `ROUND_TWELVE`

## Motif / image style

Technical building-science authority — NOT a contractor sales page, NOT a chemistry-lab cliché (no
beakers/lab coats). Real spray foam application job-site photography + diagram/cross-section-style
illustration of wall assemblies as the visual language. Hero text-over-image scrim held to >=50%
opacity per hard rule.

## Section rhythm

No two adjacent sections share a background: white/off-white base <-> sand-tinted band <-> inverted
dark clay-brown band (credibility strip / editorial-independence statement / final CTA) <-> full-bleed
photo band with scrim.

## Trust framing

Technical accuracy + Contractors Choice Agency's real 20+ year former-contractor backing.
Explicitly NO fabricated citations, statistics, or customer quotes anywhere on this site.

## Screens generated (`.stitch-pages/`)

| File | Stitch title | Notes |
|---|---|---|
| `home.html` | Spray Foam Science Home | Hero, credibility strip, 6-topic pillar grid, why-this-matters band, featured-article teasers, inverted editorial-independence band, FAQ, final CTA, footer |
| `open-cell-vs-closed-cell-chemistry.html` | Open Cell vs Closed Cell Chemistry — Topic Detail | Representative topic-page template — two-column technical layout, comparison sidebar, related topics, inverted band, CTA |
| `about.html` | About & Credibility | Editorial standards, CCA backing, topic coverage overview |
| `find-an-installer.html` | Find a Certified Insured Installer | Soft-conversion contact/form page — informational, not aggressive sales |

## Exact prompts used

Preserved verbatim in `ai/research/stitch-prompts.md`.

## Downstream build note

Screens are art-direction references (structural scaffold per Stitch skill guidance) — the actual
Next.js build applies these as the locked style contract (palette, type pairing, section rhythm,
motif) via Tailwind, not by transplanting the raw HTML.
