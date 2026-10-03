# docs/calibration-proposals/2026-09-04-totals-tiebreak-strict.md
## What it is (1-2 sentences)
A PROPOSED calibration change to the totals consensus logic in `packages/prediction-engine/src/scoring.ts`: equal-juice books currently fabricate OVER consensus (verified: 6,868/6,868 OVER on the 1999–2025 replay corpus); the proposal adds an opt-in strict mode where non-discriminating books abstain and exact 50/50 splits publish nothing.
## Key metrics/methods (formulas where given, else "not specified")
- Legacy side selection: `overIsChosen = (overFavored / pricedTotals) >= 0.5` where a book is OVER-favored iff `overPrice <= underPrice` — standard -110/-110 quotes always vote OVER.
- Strict mode: only books with `overPrice !== underPrice` vote; exact 50/50 vote → NO pick. Opt-in via `context.totalsTiebreak: "strict"` on GameContextInput.
- Replay evidence (3 completed seasons, 816 games each mode): legacy published 816/816 picks (816 OVER, 100.0%), win rate 0.5068 (411–400), 5 pushes, mean confidence 67; strict published 0 picks (no real juice in replay corpus), n/a win rate.
- SPREAD path sibling found in re-audit: `scoreSpreadPick` counts book as HOME vote only when `spread < 0`, so a spread===0 pick'em board is counted as AWAY votes — phantom SPREAD pick published (probed empirically: 6 synthetic books at spread 0 → 1 pick, line 0, confidence 59 ≥ MIN_PUBLISH_CONFIDENCE 50, consensusPct 1.0). nflverse pick'em games carry spreadLine null → live-path only.
- Spread 50/50 split already safe: consensus 0.5 < CONSENSUS_MIN_PCT 0.55 publishes nothing.
## Data sources named
Replay corpus 1999–2025 via `buildHistoricalOddsInput` (STD_VIG_PRICE); pinned test `packages/prediction-engine/src/__tests__/totals-consensus-tiebreak.test.ts`. No live bookmaker sources named in the proposal.
## Findings (numbers and facts, not vibes)
- A symmetric -110/-110 board reads as UNANIMOUS OVER consensus (consensusPct = 1.0) and the customer-facing reasoning claims "backed by 100% of bookmakers" for a coin flip.
- Legacy replay win rate 0.5068 (411-400) with mean published confidence 67 — the "over-confidenced coin flip" shape.
- Strict-mode test suite: 5 new tests (incl. A/B flag-behavior test), green; legacy pinned tests unchanged and green; 4 historical-replay test files green with plumbing change.
- Recommendation: adopt strict as DEFAULT at next scheduled model version bump (requires owner decision per FROZEN.md model-freeze contract); opt-in flag enables gated A/B before flip.
- FROZEN.md contract: flipping the default changes published picks → needs MODEL_VERSION decision by owner.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Equal-juice consensus fabrication inflating "backed by 100% of bookmakers" → TRUST-SIGNAL
- 0.5068 replay win rate at mean confidence 67 (overconfidence on coin flips) → TRUST-SIGNAL
- Strict abstain/no-publish rule as consensus-integrity mechanic → OTHER (engine calibration process)
## Engine-actionable? (yes/no + one-line what)
yes — Adopt strict tie-break as default (only discriminating books vote; 50/50 → no pick) and port the same rule to the spread path for pick'em boards at the next model version bump.
