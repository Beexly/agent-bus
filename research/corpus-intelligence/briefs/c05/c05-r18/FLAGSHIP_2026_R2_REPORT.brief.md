# docs/design/FLAGSHIP_2026_R2_REPORT.md
## What it is (1-2 sentences)
The progress report for the "Flagship 2026 Revision R2" website rebuild — a concision-first redesign ("the data is the intelligence — layout, aesthetic, and restraint carry the authority") shipped in response to the owner's blunt verdict that the site was "too convoluted," with six surfaces rebuilt and all gates green on branch `claude/blissful-hamilton-d7edx1`.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas; grading is 1–5 re-scored vs Phase-0 baseline). Home went ~14 blocks → 6; nav 1→5 doors (Proof its own door at `/calibration`); Players 11 subtabs → one lab with grouped lenses; cold-open cut from a slow 15.6s doctrine intro to a ~3.6s hype montage (`home-hero-cosmos.mp4`) ending on "We detect. You decide."
## Data sources named
None external. Internal: `MontageEntrance`, `home-hero-cosmos.mp4`, Nova persona + `buildBroadcast()` script engine, `.design-sync/entry.tsx` bundle; the 4-door Signal Map uses one live real-sourced number per door.
## Findings (numbers and facts, not vibes)
- Shipped as separate commits R2-1 through R2-6: one hype cold-open; home concision; nav condensed + Proof relocated; The Beat → cinematic broadcast (Nova lower-third, teleprompter, segment rundown, no paid generation); Nova explainer guide on every page ("How this page works · 0:40" pill, code-native, zero spend, no autoplay); Players one lab, lenses grouped (Usage · Advanced · Status & market).
- The fabricated HUD stats ("TRUST SCORE 96.4%") were removed from the intro; every number derives from a real loader with honest fallbacks.
- `/calibration` ("The Proof Room · Galaxy Calibration") consolidates calibration, CLV, trust ledger, proof of record, accountability, CLV tracker; proof redirects intentionally NOT done (would destroy the detailed proof surfaces).
- Final verification all green: typecheck PASS, lint PASS (eslint --max-warnings=0), tests PASS (398 files · 5,558 tests), build PASS (191 routes), trust-gate PASS (928 files · no banned/tout phrases).
- Deferred (hard stop respected, needs owner approval): Higgsfield video generation for real Nova broadcast/intro/explainer video; deeper subtraction of Board/House/Pricing surfaces.
- Nova stays a stylized mark (never a photoreal face); synthetic-presenter disclosure always on screen.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Removed fabricated HUD stats; every public number from real loaders; the Proof Room (/calibration) consolidates calibration/CLV/ledger receipts; trust-gate lint bans tout phrases across 928 files; synthetic-presenter disclosure always on.
- OTHER: UX/IA redesign work (nav, pages, components) — no sports intelligence content.
## Engine-actionable? (yes/no + one-line what)
No — a website design progress report; nothing here feeds engine features, metrics, or calibration.
