# docs/ops/hermes/BUILD-QUEUE-2026-09-18-ranking.md
## What it is (1-2 sentences)
The 2026-09-18 Hermes build queue diagnosing the board-ordering defect: the public board is ordered partly on a `confidence` score measured to be anti-predictive at the top, and the queue builds a shadow measurement of four candidate orderings plus a founder-flippable switch that stays defaulted to today's behavior.
## Key metrics/methods (formulas where given, else "not specified")
- Blend: `rankingP = 0.7 * trueProb + 0.3 * (confidence/100)` (`ranking-prob.ts`, `independentWeight` 0.7); `rankingScore = Math.round(rankingP * 100)`.
- Calibration finding: confidence ≥80, n=235, claims 0.8663, realizes 0.5191, z = -10.7, Brier 0.3617 vs 0.25 for a constant 0.5 forecast.
- Realized win rate PEAKS at confidence 75–79 (0.6146) and FALLS to 0.4643 at 90–94 — below the 0.5280 of the lowest band.
- Measured inversion on a real slate: confidence 91 carried `expectedClv` +0.0217 (smallest positive edge on the board) while confidence 85 carried +0.2257 (largest) — the top-ranked pick had the worst edge that clears zero.
- Three routes confidence reaches ordering: (1) always at 30% blend weight; (2) entirely when `trueProb` missing/non-finite (`ranking-prob.ts:40`); (3) twice as terminal fallback in `sort-key.ts` (no factor breakdown; neither rankingP nor rankingScore finite).
- Persisted discriminator: `rankingSource` ∈ {`confidence`, `independent_trueProb`, `blend_indep_conf`} (`scoring.ts:706`, `:1300`) with `independentEdge.priced` (`:611`, `:1215`); TOTAL path hardcodes `rankingP = confidence/100` (`scoring.ts:950`, `:966`); rows minted before v5.2.1 carry no `rankingSource`.
- Four candidate orderings: current (fallback chain), edge-first (desc expectedClv; nulls trail as a block), model-minus-market (desc trueProb − marketFairProb), priced-tier-first (two tiers on rankingSource; Tier 1 ordered by expectedClv per founder call 2026-09-18).
## Data sources named
Settled slates via an injected loader (fake loader in tests; founder runs against real DB rows). Code files traced: `packages/prediction-engine/src/ranking-prob.ts`, `apps/web/lib/ranking/sort-key.ts`, `scoring.ts`, `constants.ts`, `adverse-edge-suppression.ts`.
## Findings (numbers and facts, not vibes)
- The two founder-named levers were traced: removing `rankingP` from `sort-key.ts` is a no-op (fallback chain is rankingScore = same number coarsened, then raw confidence); `independentWeight` → 1.0 is a generation change behind a MODEL_VERSION bump, forward-only (already-minted rows keep the 0.7 blend forever).
- Structural root cause: a PRICED row and an UNPRICED row are compared on one scalar, so a confidence-91 row no model ever priced outranks a trueProb-0.62 row one did.
- Founder decision recorded 2026-09-18: within Tier 1 of priced-tier-first, order by EDGE (desc expectedClv), not rankingP.
- Honesty rules for the shadow report: counts beside every rate; no win rate on below-floor samples (return null); pushes excluded from win rates and counted separately; cluster by fixture (fixture contributing several markets) or label figures row-level.
- Safety property: merged and deployed with no founder action, board orders byte-for-byte as today; switch is a named constant defaulting to `current` — no env flag, no MODEL_VERSION bump, no DB touch.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — engine ranking/calibration metrology (not a football-intelligence item); TRUST-SIGNAL — ordering the board on an anti-predictive top-end signal is a customer-facing credibility defect, and the shadow-report-first discipline is the fix process.
## Engine-actionable? (yes/no + one-line what)
yes — priced vs unpriced rows must never share one ordering scalar; the `rankingSource`-tiered, edge-first ordering is the specified remedy.
