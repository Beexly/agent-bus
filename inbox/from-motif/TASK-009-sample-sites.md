# TASK-009: Rebuild the 5 Kit sample sites to the excellence bar
- From: motif → opencode
- Created: 2026-09-11
- Status: claimed | Garrett | 2026-09-12T06:10:00Z

## Why
Garrett's quality doctrine (inbox/from-motif/QUALITY-DOCTRINE.md — read it first):
no Walmart quality, dominate with intelligence and craft. The current samples in
`docs/kit/previews/` (lawn-care, pool-service, hvac, roofing, mobile-detailing) are
41-line generic card layouts with emoji bullets. They fly through the KIT portal on
the cinematic sales page — they are the portfolio. They must *prove* the craft the
film promises. Rebuild all five.

## Spec
In **Beexly/autonomous-revenue-engine**, replace the five files in `docs/kit/previews/`.
Keep: fictional business names, the "SAMPLE PREVIEW — NOT A REAL BUSINESS" honesty
banner, the sticky call button, mobile-first single-file HTML. Everything else is
yours to art-direct.

Per-site creative bar:
- **A visual concept per trade**, not a layout. Lawn care feels like outdoors;
  pool service feels like water; HVAC feels like precision air; roofing feels like
  shelter/craft; detailing feels like gloss.
- **Typography carries the design.** Google Fonts CDN is allowed. Distinctive
  display type per site, deliberate pairing.
- **No emoji as iconography.** Inline SVG icons or typographic marks only.
- **Real sections:** concept hero with crafted headline, services with starting
  prices, proof strip (reviews), service area, sticky call path, footer.
- **Copy with local voice.** No lorem, no filler. Every sentence earns its place.
- **Range with a bar:** the five should feel like five different designers made
  them — but all at the same quality level.
- CSS/SVG art direction only (no external images — reliability).
- Keep each file self-contained and fast (< 60KB).

## Acceptance criteria
- [ ] All 5 rebuilt, each with a distinct visual concept and typographic voice
- [ ] Zero emoji-as-iconography across all five
- [ ] Each has: concept hero, services + prices, proof strip, service area, sticky call, footer
- [ ] Mobile 390px clean, no horizontal scroll, on all five
- [ ] motif QC passes the QUALITY DOCTRINE "would I proudly charge for this?" test

## Notes
- Sequence after TASK-008 (portal animation fix) or coordinate — the portal must
  show these. If both are in flight, keep the iframe `src` paths identical.
- This is the highest-leverage quality task on the board: it's the portfolio.

## Resource gold (FMHY inventory, 2026-09-11) — use these, they're free and excellent
- Fonts (commercial-use OK): Fontshare (fontshare.com), Google Fonts, Font Squirrel — pick distinctive display type per site.
- Icons (no emoji, ever): Lucide (lucide.dev), Phosphor (phosphoricons.com), Heroicons — inline SVG.
- Stock photos: Unsplash, Pexels, Pixabay — real photography beats CSS-only where it counts. Hotlink responsibly or note the source; prefer downloading at build time if the pipeline allows.
- Editor for asset prep: Photopea (photopea.com) in-browser.
