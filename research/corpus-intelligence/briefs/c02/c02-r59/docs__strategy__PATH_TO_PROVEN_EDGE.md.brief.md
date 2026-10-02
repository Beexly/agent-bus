# docs/strategy/PATH_TO_PROVEN_EDGE.md
## What it is (1-2 sentences)
The strategic + operational charter (Parts I and II, last updated 2026-06-22) that replaces the "path to 70% win rate" framing with Closing Line Value (CLV) and EV as the north-star metrics, and specifies the CLV grading pipeline, phase roadmap, and measurement discipline for the `research/proven-edge` workstream.
## Key metrics/methods (formulas where given, else "not specified")
- North-star metric: mean CLV and beat-close rate over canonical, settled picks, segmented by market (spread/total in points, moneyline in probability — never averaged across units). Literal CLV formula not given in the file ("pure CLV math" lives in `packages/prediction-engine/src/clv.ts` but the formula is not quoted) — formulas: not specified.
- Guardrail metric: CLV coverage = the share of settled, played picks that actually received a CLV record at close; beat-close rate only trustworthy at ~100% coverage, otherwise labeled partial.
- Calibration: isotonic/Platt recalibration of display probabilities from realized outcomes, gated by calibration health; reconciliation via ROI and Brier calibration over the settled sample.
- Devig'd true probability vs. model probability; realized cover rate conditioned on CLV sign (Phase 2).
## Data sources named
None named as providers — references internal modules only: `packages/ingestion-pipeline/src/process-sport.ts`, `Odds` model in `schema.prisma`, `packages/prediction-engine/src/clv-capture.ts`, `packages/prediction-engine/src/clv.ts`, `packages/ingestion-pipeline/src/settle-sport.ts`, `apps/web/lib/performance/public-clv-policy.ts`, `apps/web/app/admin/clv/page.tsx`, `apps/web/lib/tracker/clv.ts`, `apps/web/lib/performance/clv-coverage.ts`. Notes: never redistribute raw live odds (key-gated, legally reviewed).
## Findings (numbers and facts, not vibes)
- Strategic claim: a sustained 70% ATS win rate does not exist for anyone; best professional operations live at 53–55% ATS; 57% sustained is legendary. [TRUST-SIGNAL]
- Closing line is the most accurate public prediction on Earth because it aggregates every sharp bettor, syndicate, model, and the books' own quants; books limit accounts based on CLV. [TRUST-SIGNAL]
- A 55% ATS bettor and a break-even one are statistically indistinguishable across a few hundred picks — win rate is mostly variance over any honest sample. [TRUST-SIGNAL]
- Edge concentrates where the money isn't watching: smaller/less-covered markets, player props before they sharpen, live/in-game spots, slow-moving/stale lines, narrow model edges proven out-of-sample. [OTHER]
- Keep the honest "70%": calibrated 70% confidence picks; the edge is the rare spot where honest 70% meets a market price implying 65% — the gap is the whole game. [TRUST-SIGNAL]
- Brand claim: "We prove, in the open, that we beat the closing line — and we find edge in the markets the giants ignore." [TRUST-SIGNAL]
- CLV grading pipeline status table: all 8 stages wired (lock line/price at pick creation immutable; timestamped odds history; closing snapshot at/before kickoff; pure CLV math; settlement grading; public gate; admin dashboard; personal bet tracker). [OTHER]
- Phase 1 gap: surfaces only counted picks that received a CLV grade; nothing measured picks that settled without one — unmeasured coverage hole biases the north-star upward. [TRUST-SIGNAL]
- Phase roadmap: (1) CLV as measured invariant with nightly coverage probe + forward pre-close odds capture; (2) map market inefficiency by sport/market/line-movement/day-of-week/book/time-to-kickoff; (3) out-of-sample validation with champion/challenger promotion only on OOS CLV past a sample floor; (4) continuous self-learning with drift monitoring, alert and fall back rather than silently degrade. [OTHER]
- Measurement discipline: out-of-sample or it didn't happen; coverage gates credibility; freeze before result (lock line captured at pick creation, never overwritten); no fabricated data; units stay separate; negative results are published. [TRUST-SIGNAL]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (covered inline above): [TRUST-SIGNAL] ×7, [OTHER] ×3
## Engine-actionable? (yes/no + one-line what)
Yes — CLV as the engine's edge metric (lock line at pick creation, grade beat-close rate, coverage-gate credibility, OOS-only edge claims) is directly actionable for the prediction engine's evaluation layer.
