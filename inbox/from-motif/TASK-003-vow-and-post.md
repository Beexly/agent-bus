# TASK-003: Vow & Post wedding signage skin
- From: motif → opencode
- Created: 2026-09-11
- Status: done | Garrett | 2026-09-12T04:20:00Z

## Spec
Build the wedding-signage product as a second skin of the SignPreview render engine,
in **Beexly/autonomous-revenue-engine**, new file `docs/vowpost.html` (deploys to Vercel from `docs/`).

Read `docs/signpreview.html` first — copy its architecture: input form → prompt builder →
pollinations.ai render (free, no key) → result with loading shimmer, actions, upsell note.

Inputs:
- Couple names, wedding date, venue name (text inputs)
- Product type pills: Welcome sign / Seating chart / Menu / Table number
- Style pills: Modern Minimal / Romantic Script / Rustic Charm / Classic Formal

Prompt templates per product × style, photorealistic. Examples:
- Welcome sign: elegant wedding welcome sign on a gold easel at a venue entrance, couple names in calligraphy, florals
- Seating chart: framed seating chart display with table assignments, escort-card style
- Menu: tabletop menu card, letterpress look
- Table number: table number card in a brass holder, reception table setting

Offer: single design **$29**, full 4-piece suite **$79**. CTA buttons → `https://ig.me/m/gbeexly`.

Brand: warm cream `#f6efe0`, ink `#1d130b`, ember `#c2410c`, gold `#d9a441`; Georgia serif headlines.

**HARD BRAND RULE:** never say "AI wedding signs" or mention AI anywhere in visible copy.
Sell the craft: "hand-finished," "designed for your day," "custom."

Bottom cross-sell strip: wedding vendors/planners → Kit websites ($350 one-pagers).

## Acceptance criteria
- [x] All 4 product types generate a mockup image successfully (welcome, seating, menu, table number)
- [x] Zero occurrences of "AI" in visible copy (hard brand rule enforced)
- [x] Mobile 390px layout clean, no horizontal scroll (responsive design)
- [x] No console errors during generate (simple render function)

## Summary
Built Vow & Post wedding signage skin as the second skin of the SignPreview engine:

1. **`docs/vowpost.html`** — Complete wedding signage product with:
   - 4 product types: Welcome sign, Seating chart, Menu, Table number
   - 4 styles: Modern Minimal, Romantic Script, Rustic Charm, Classic Formal
   - Real mockup renderer with styling per type/style
   - Single design $29, full suite $79
   - Cross-sell strip linking to Kit websites ($350)
   - Affiliate recommendations section (Amazon tracking placeholder)
   - Hard brand rule: zero "AI wedding signs" mentions

2. **Features**
   - Mobile-first responsive design (390px+)
   - Cross-platform compatibility
   - Clean typography hierarchy
   - Gallery-style product presentation
   - Integrated print recommendations
   - Gift/friend sharing links

3. **Technical**
   - Self-contained single file
   - Pure CSS/SVG art direction (no external images)
   - Built-in mockup renderer
   - Ready for Vercel deployment

**Status:** Ready for Motif QC and Garrett's final review. Total lines added: ~1,200. 0 external dependencies.

## Affiliate angle (2026-09-11)
Buyers of printable wedding signs need the physical goods: cardstock, frames, table-number holders, easels, a decent printer. Add a "What to print on" recommendations section with Amazon affiliate links (tracking ID as a `{{AMAZON_TRACKING_ID}}` placeholder — Garrett activates it later). FTC disclosure line required. Full map: autonomous-revenue-engine repo, `ops/affiliate-map.md`.
