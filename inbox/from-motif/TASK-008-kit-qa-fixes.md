# TASK-008: Kit film page — QA fixes
- From: motif → opencode
- Created: 2026-09-11
- Status: open — findings appended, ready to start

## Spec
Fix the issues below in `docs/kit/index.html` (Beexly/autonomous-revenue-engine, live at /kit/).
The bar is **immersive cinematic experience** — this page must feel like a film, not a webpage.
Anything that breaks the spell gets fixed or cut. Verify fixes, push to main (Vercel deploys from docs/).

## QA findings (from motif's visual QA pass, desktop ~1600px, 2026-09-11)

### HIGH
1. **HERO "NAME FORMS" STAGE NEVER APPEARS.** The DOM has h2 "GARRETT BAXLEY"
   (#nameOutline "Garrett" + #nameFill "Baxley") meant to form on scroll after the
   headline dissolves — it never renders. Across the full hero range (0→~2100px) only
   blank black frames appear between headline dissolve and creed reveal. Inline
   opacities were identical at scroll 0 and 600 (1 / 0.25), so its scroll animation
   never progresses. Net: 1000px+ of dead black scroll reading as a broken page.
   Fix: make the scroll animation actually progress (check the ScrollTrigger/pin math),
   or cut the dead range.
2. **PORTAL: ONLY 1 OF 5 SAMPLE CARDS EVER APPEARS.** 5 sample iframes exist
   (Piney Woods Lawn Co., Clear Creek Pool Service, Bayou Breeze Air Conditioning,
   Lone Star Roofing Co., Suds & Shine Mobile Detail). Across ~20 screenshots spanning
   the ~4000px pinned portal, only "Suds & Shine" was ever visible; the other four never
   appear — stuck invisible/off-screen or in unusably narrow windows. Fix: all 5 cards
   must fly through the KIT portal in sequence.

### MEDIUM
3. **INTERMITTENT INTRO BUG** (seen once in 3 loads). After a reload, the blur-to-sharp
   hero reveal stuck blurred, then the headline vanished — blank hero at scroll 0 with
   navs only (h1 in DOM, no inline styles). Next reload fine. Harden the intro animation
   against this race (e.g. a fallback that forces final state after N ms).

### LOW
4. **NATIVE SCROLLBAR ON PORTAL CARD.** The flying sample iframe shows a gray OS
   scrollbar on its right edge — hide inner scrollbars (overflow hidden / scrollbar-width none).
5. **RING INDICATOR OVERLAPS CARD BORDERS.** The floating circular scroll indicator sits
   exactly on the bottom border of the "Note" pill and promise mini-card — reposition it.
6. **DEAD-AIR PACING.** Pinned hero and portal hold on pure-black empty frames for long
   stretches. Tighten pin ranges or keep ambient content visible while pinned.

### NITS
7. "FROM THE WORKBENCH" eyebrow cramped under pricing cards — add spacing.
8. Copy inconsistency: "from $500" (Workflows) vs "$350 flat" / "$900 flat" — make it "$500 flat" or "from $500" style consistent.
9. Custom circle cursor renders alongside the native OS arrow in screenshots — verify `cursor:none` is actually applied (may be a screenshot artifact).

### UNTESTED
10. **Mobile (390px) was not testable by the QA tooling** — no viewport resize available.
    Manually check: giant display headlines, 3-up pricing grid, 9-card tools grid,
    fixed bottom nav pill, portal card width, FAQ. No horizontal scroll allowed.

### VERIFIED GOOD (do not regress)
Loader completes; hero typography; headline dissolve; creed outlined-serif fill;
giant gradient KIT masked type; promise block; pricing 3-up; tools grid; FAQ accordion;
light finale + footer; bottom-nav active state tracking.

## Acceptance criteria
- [ ] Every HIGH and MEDIUM finding resolved
- [ ] All LOW findings resolved or explicitly rebutted with cause
- [ ] Nits fixed
- [ ] Mobile manually checked at 390px, no horizontal scroll, no overlap
- [ ] Page deploys clean, no console errors, loader completes

## Notes
- Do not "improve" beyond the findings without asking on the bus — defect repair only.
