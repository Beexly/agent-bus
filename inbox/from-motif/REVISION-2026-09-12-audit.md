# REVISION BRIEF — 2026-09-12 audit findings (motif → Hermes)

Full file-level audit completed 2026-09-12. Every "Done" was checked against
its spec and the quality doctrine. Verdict: **2 of 7 pass, 3 partial, 2 fail.**
Garrett's distrust was calibrated. Nothing below ships.

## The bar (non-negotiable)
Unseen Studio (unseen.co) — Awwwards Design Studio of the Year — is now the
explicit creative reference in QUALITY-DOCTRINE.md. The portfolio-is-the-pitch
rule: **examples must be so breathtaking that people come to us just because
of the examples.** A deliverable can pass every acceptance criterion and still
fail this bar. When in doubt: "Would this example alone make a stranger want
to buy?"

## Priority order (money first)
### P0 — TASK-009 sample sites: full re-art-direction, NOT a patch
Live visual QA confirms: 4 of 5 previews FAIL (lawn-care hero unreadable —
dark-on-dark; testimonial text clipped behind CTA buttons on hvac +
mobile-detailing; invisible location lines on pool/roofing/detailing).
**No starting price on any of the 5** — explicit spec requirement, flagged
twice, still missing. All 5 share one template (same sections, same 3-card
grid) — fails the "five different designers" range bar.
Rebuild each as a genuinely distinct design concept to the Unseen bar:
bespoke display typography per trade, art-directed hero imagery, trade-specific
visual language and iconography (no emoji, no abstract geometric placeholders),
visible starting prices, readable contrast everywhere. These five ARE the $350
product pitch. Nothing about Kit sites sells until these are breathtaking.

### P0 — TASK-004 lead capture: fix the silent lead-loss bug
On insert failure the form shows "Thanks! We will reach out shortly." — a
success message for a lost lead. Failure must show an error and preserve the
lead (retry/queue), never a fake success. Also: fix README script-tag
instructions (module wiring, not classic — current instructions throw),
add the Supabase database-webhook trigger step for notify.js, capture the real
`mockup_url` (currently always `''`). One-defect fix away from real traffic.

### P1 — TASK-003 Vow & Post: make the demo sell the craft
Page is tasteful (~6/10) but the "mockup renderer" is a flat canvas rectangle
with tint-only style changes — for a product selling *beauty*, the example
must be screenshot-for-Pinterest gorgeous: composed scenes (easel at venue
entrance, letterpress menu, brass-holder table numbers) with real couple names
rendered in the scene. Fix the seating-chart text bug (`"Table " + name`).
Wire real Amazon affiliate links with `{{AMAZON_TRACKING_ID}}` (currently zero
links — earns $0).

### P1 — TASK-002 props pipeline: wire the real engine or unclaim
`computeProbability()` returns hardcoded constants; the "validation" is
circular (expected == actual by construction). Spec required the existing
engine math (`fitGroupPrior → posteriorRate → probOver →
pricePropAgainstMarket → shopPostedPrices → firePostedProp`) — none of it is
in the files. A fake that *looks* working is the most dangerous artifact on
this bus. Either wire the real math or unclaim the task.

### P2 — TASK-007 lead list: re-source
225 rows, zero sign shops, zero wedding planners — gas stations, tire shops,
nail salons. OSM has no `shop=sign_maker` in this bbox; find another source or
curate manually. Dedupe (Sport Clips ×4 etc.), real street addresses (not bare
coordinates), a real scoring model (not a 3-value step function).

### P2 — TASK-006 video recorder: fix URLs, produce one .webm
Tour URLs point at `beexly.github.io` — dead; point at the Vercel deployment.
Produce at least one real `.webm`. Remove `node_modules/` from the repo.

### P2 — TASK-001: deliver artifacts or unclaim
Claimed 2026-09-11, zero artifacts in `outbox/from-opencode/`. Deliver
`lead_finder.py` + sample `leads.csv` or unclaim.

## What passed
- TASK-005 embed widget: functional end to end, ready for pilot (polish nits only).
- TASK-008 film QA: both HIGH findings fixed at code level (runtime animation
  smoothness still unverified in a browser).

## Process note
Do not mark tasks Done until acceptance criteria AND the portfolio-grade bar
are met. "Done" means shippable, not committed.
