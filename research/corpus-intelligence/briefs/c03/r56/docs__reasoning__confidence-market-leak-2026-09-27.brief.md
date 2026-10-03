# docs/reasoning/confidence-market-leak-2026-09-27.md
## What it is (1-2 sentences)
A measurement (not a patch) confirming that the engine's published `confidence` number is contaminated by market prices: it moves 7 points when only a market probability changes and the recommended bet is byte-identical, documented as by-design ("market-echo composite for UX continuity" in scoring.ts:1219).

## Key metrics/methods (formulas where given, else "not specified")
- Channel 1: de-vigged spread-side market probability via `removeVig(homeImpliedAvg, awayImpliedAvg)` → `computeEdgeScore`, added into confidence sum at scoring.ts:580-588.
- Channel 2: H2H moneyline `mlFairProbHome = removeVig(avgH, avgA)` → `computeCrossMarketScore` returning ±CROSS_MARKET_AGREE_BONUS (4) / CROSS_MARKET_DISAGREE_PENALTY (3) (constants.ts:79,81), added at scoring.ts:573, 584. Third-order path via `computeUncertaintyPenalty` (game-context.ts:597).
- Isolation test: `packages/prediction-engine/src/__tests__/confidence-market-independence.test.ts` holds entry price, line, book count, teams, selection identical, varies only market probability. Channel 1: marketFairProb 0.5000 → 0.3957 moved confidence 57 → 50; channel 2: H2H agree → oppose moved confidence 61 → 54. 4 tests pass; 3 are `it.fails` guards that flip red if the leak is fixed (green while leak stands), 1 pins magnitude ≥5 points.
- Calibration page gate: `resolveEffectivePerformanceGate().canExposePerformanceStats`, fail-closed on every path; production value NOT_EVALUATED.

## Data sources named
Production code (`packages/prediction-engine/src/scoring.ts`, `game-context.ts`, `constants.ts`, `pick-proof-receipt.ts`, `process-sport.ts`), the test fixture, `apps/web/app/calibration/page.tsx` + `apps/web/lib/calibration/report.ts` (fail-closed gate, PERFORMANCE_STATS_ENABLED default false).

## Findings (numbers and facts, not vibes)
- Published confidence moves 7 points on a byte-identical bet when only market probability changes (57→50 channel 1; 61→54 channel 2).
- The leak is by design and documented in source (`scoring.ts:1219`: "Heuristic confidence stays as the market-echo composite for UX continuity"), so remediation is a labelling problem, not a hotfix.
- `pick-proof-receipt.ts` does not compute confidence — it commits whatever the scorer hands it; contamination enters upstream at scoring.
- Production scorer was deliberately NOT patched (shared hot path, product decision); calibration page remains dark; no win-rate/ROI/units figures were created or published.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Confidence-as-market-echo means any "high-confidence" edge analysis partly measures the book — publish-side confidence must never be used as model-skill evidence. (TRUST-SIGNAL)
- `it.fails` guard pattern: machine-checked invariants that stay green while a known defect stands and flip red on fix. (OTHER)
- Fail-closed calibration gate (`PERFORMANCE_STATS_ENABLED` default false) is the only thing between this and a published claim the market already made. (TRUST-SIGNAL)

## Engine-actionable? (yes/no + one-line what)
Yes — relabel or decontaminate published `confidence` so market price cannot move it without the bet changing; until then, no public win-rate-by-confidence analysis.
