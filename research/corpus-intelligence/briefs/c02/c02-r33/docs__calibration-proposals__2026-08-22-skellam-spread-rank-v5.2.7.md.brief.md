# docs/calibration-proposals/2026-08-22-skellam-spread-rank-v5.2.7.md
## What it is (1-2 sentences)
An IMPLEMENTED calibration proposal (v5.2.7, supersedes v5.2.6, author: grok skellam ATS ranking wire, dated 2026-08-22) that prices an independent Skellam cover probability into spread ranking only for Poisson-valid sports (soccer, hockey, baseball).
## Key metrics/methods (formulas where given, else "not specified")
- Method: TeamGameLog rates produce Dixon–Coles (soccer) or Poisson (hockey/baseball) moneyline independents; the same λ plus the posted home spread emits `{ source: "skellam_cover" }` — 2-way cover probabilities with push mass dropped and renormalised (same bridge as dropping draws on moneyline Poisson).
- `scoreSpreadPick` runs the existing v5.2.1 ranking law (`deriveRankingProbability`, independentWeight 0.7, rank on any trueProb) against only `skellam_cover` rows; moneyline ranking ignores `skellam_cover` so ATS cover is never treated as P(win).
- `skellamCoverFairValue` two-way sums to 1; null on bad sport or degenerate λ.
- Heuristic confidence composite is unchanged; Edge SPEAK/LEAN remains the glass-box claim.
- Explicitly NOT NFL: the Stern key-number mixture stays a separate module; basketball/NFL spreads still rank by confidence.
- Flags unchanged: CALIBRATION_ADJUSTMENTS_ENABLED off, CALIBRATION_AUTO_PUBLISH false, PUBLIC_PICKS / FORCE_NO_BET_IF_STALE founder pair untouched.
## Data sources named
- TeamGameLog rates (inputs to Dixon–Coles / Poisson λ).
- Posted home spread (input to skellam_cover emission).
## Findings (numbers and facts, not vibes)
- independentWeight = 0.7 in the v5.2.1 ranking law applied to skellam_cover rows.
- Evidence cited: skellamCoverFairValue two-way sums to 1; spread picks show confidence stable vs no-independent baseline; rankingScore moves when skellam_cover is present; rankingSource is not "confidence"; moneyline picks do not gain an Independent Edge factor from skellam_cover alone.
- Scope: soccer/hockey/baseball spread ranking only; NFL and basketball spread ranking unchanged (confidence-based).
- Status IMPLEMENTED as of 2026-08-22.
- INFERENCE: The file is short (1,873 bytes) and contains no backtest numbers, ATS hit rates, or CLV figures — evidence is stated as invariants/sanity checks, not performance metrics.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: spread-ranking methodology for non-NFL Poisson sports; no QB, coaching, OL, or scheme content.
- TRUST-SIGNAL (minor): the guard that ATS cover probability is never treated as P(win) in moneyline ranking preserves claim integrity.
## Engine-actionable? (yes/no + one-line what)
yes — the Skellam-cover ranking recipe (λ from TeamGameLog → skellam_cover rows → v5.2.1 ranking law at independentWeight 0.7, moneyline exclusion) is the implemented spread-ranking method for soccer/hockey/baseball spreads.
