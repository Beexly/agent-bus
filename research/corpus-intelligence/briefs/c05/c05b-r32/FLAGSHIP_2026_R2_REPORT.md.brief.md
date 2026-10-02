# design/FLAGSHIP_2026_R2_REPORT.md
## What it is (1-2 sentences)
The R2 progress report for the 2026 flagship site redesign (branch `claude/blissful-hamilton-d7edx1` off `design/2026-flagship`) — a concision-first rebuild of six owner-called-out surfaces (cold-open, home, nav, The Beat, players, explainers) with all gates green.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified (design deliverable, no formulas). Verification numbers: typecheck PASS (all workspaces), lint PASS (eslint --max-warnings=0), tests PASS (398 files · 5,558 tests), build PASS (191 routes, only a pre-existing require-in-the-middle dep warning), trust-gate PASS (928 files · no banned/tout phrases).
- Surface re-scores (1–5) vs Phase-0 baseline: Home 3/2/3 → 4/4/5; The Beat 3/3/3 → 5/4/4; Nav 1→5 doors; Proof (`/calibration`) scattered 5 routes → one branded hub.

## Data sources named
- Internal: existing Nova persona + `buildBroadcast()` script engine; `MontageEntrance` component; real motion bed asset `home-hero-cosmos.mp4`; every number on home's Signal Map derives from a real loader with honest fallbacks.

## Findings (numbers and facts, not vibes)
- Six shipped changes: R2-1 one ~3.6s hype cold-open (retired slow 15.6s doctrine intro; removed fabricated "TRUST SCORE 96.4%" HUD stat; once per session, reduced-motion → instant, one Skip); R2-2 home cut ~14 blocks → 6; R2-3 nav condensed + Proof extracted to its own door at `/calibration` ("The Proof Room · Galaxy Calibration" gathering calibration, CLV, trust ledger, proof of record, accountability, CLV tracker); R2-4 The Beat → cinematic broadcast with graded impact feed preserved as "The Signal Ledger"; R2-5 Nova explainer pill auto-mounted site-wide (bottom-left "How this page works · 0:40"); R2-6 Players collapsed 11 tabs → one lab with grouped lens rail.
- Proof redirects intentionally NOT done (`/performance /clv /ledger /accountability /track` kept) to avoid destroying detailed proof surfaces — "never weaken the proof/calibration gates."
- Deferred (hard stop, needs owner approval): Higgsfield-generated Nova video; deeper subtraction of Board/House/Pricing.
- Accessibility invariants enforced by test: reduced-motion fallback, no-autoplay, keyboard-reachable controls, opt-in guides.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Proof as its own door: calibration, CLV, trust ledger, proof of record, accountability, CLV tracker at `/calibration` — TRUST-SIGNAL
- trust-gate lint (928 files, no banned/tout phrases) + guard tests for broadcast/explainer/nav-route integrity — TRUST-SIGNAL
- Removable of fabricated "TRUST SCORE 96.4%" stat — TRUST-SIGNAL
- The Signal Ledger (graded impact feed) — OTHER
- All remaining IA/visual items — OTHER

## Engine-actionable? (yes/no + one-line what)
No — a shipped site-design report; the one engine-adjacent fact is the `/calibration` Proof hub and trust-gate enforcement, which belong to public-surface policy, not the model.
