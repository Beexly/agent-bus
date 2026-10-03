# arxiv-program/research/2026-09-21/arxiv-deep/0625-predicting-under-brier-game-expert.md
## What it is (1-2 sentences)
Deep-read ledger of Vovk & Zhdanov (arXiv:0710.0485v2, ICML 2008) on the Strong Aggregating Algorithm (SAA) under Brier loss: a theoretically regret-bounded way to combine expert probability forecasts online, tested on soccer and tennis bookmaker odds. Verdict recorded as ADAPT — port the aggregation rule as GSE's ensemble combiner.
## Key metrics/methods (formulas where given, else "not specified")
- Multiclass Brier loss: λ(ω, γ) = Σ_o (γ{o} − δ_ω{o})², where ω is the realized outcome, γ the predicted distribution, δ the Kronecker delta. (Paper equation, reproduced in file.)
- Regret guarantee: L_N ≤ min_k L_N^k + ln K — learner's cumulative Brier loss at most the best expert's plus ln K.
- Optimal mixability learning rate for the Brier game: η = 1.
- Method: maintain weights over experts updated multiplicatively with exp(−η·loss); each round's aggregate = the Brier-mixable generalized prediction over weight-weighted expert predictions (paper §3 construction). File's proposed GSE adaptation: weights w_k ∝ exp(−η·cumulative Brier loss_k), η = 1, updated online per slate, plus a "market expert" (consensus odds) in the expert pool.
- Proposed improvement experiment: discounted SAA — weight experts by exponentially decayed recent Brier loss instead of full-history cumulative loss (INFERENCE: file proposes it as an experiment; known discounted variants of the ln K bound exist per file).
## Data sources named
- Paper's data: 6,473 soccer matches (2005/06–2007/08, 8 bookmakers as experts), 10,087 tennis matches (2004–2007, 4 bookmakers); implied probabilities from normalized inverse odds. Access stated at http://vovk.net/ICML2008 (vintage 2008, availability not re-verified — per file).
- Proposed GSE test data: 2023–2024 NFL seasons — per-game probability vectors from each GSE sub-expert + consensus market odds (Odds API), realized outcomes.
## Findings (numbers and facts, not vibes)
- The paper reports the regret bound is "reasonably tight" for football and "particularly tight" for tennis — realized cumulative loss sits close to best-expert loss + ln K, tennis nearer the bound. (Qualitative as stated in paper; exact loss curves in full text §5.)
- No accuracy/ROI numbers — the contribution is the guarantee and its empirical tightness.
- Limitations recorded: bookmakers as experts are highly correlated (copy each other's lines), so best-expert-in-hindsight is a weak competitor; SAA inherits shared miscalibration of all experts; Brier loss is symmetric — gives no special protection in the tails where betting edges live; online protocol assumes immediate outcome revelation (frays for futures/correlated slates); 2005–2008 data predates modern market microstructure.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Regret bound L_N ≤ min_k L_N^k + ln K with η=1 → OTHER (ensemble theory: a published, regret-bounded combiner for GSE's sub-experts — extends the repo's cept/ ensemble lane; TRUST-SIGNAL-adjacent since it certifies the aggregate vs the best sub-model in hindsight). INFERENCE: file itself frames it as filling a gap in GSE's ensemble theory lane.
- "Bound reasonably tight (football) / particularly tight (tennis)" → TRUST-SIGNAL (empirical tightness of the guarantee on real bookmaker data).
- Expert correlation caveat (bookmakers copy lines; guarantee only competes with best expert, inherits shared bias) → TRUST-SIGNAL (honest calibration of what the certificate does and does not promise).
- Proposed discounted-SAA experiment (decay weights so aggregation follows the currently-hot expert across regime changes) → OTHER (methodological; INFERENCE: untested proposal, not a paper result).
## Engine-actionable? (yes/no + one-line what)
yes — implement SAA (η=1 exponential weights over sub-expert + market-consensus probability vectors, updated online per slate) as the ensemble combiner, gated on 2024 NFL chronological run satisfying the bound and beating simple average by ≥0.002 mean Brier.
