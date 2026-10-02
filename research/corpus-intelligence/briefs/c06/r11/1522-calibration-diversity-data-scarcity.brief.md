# arxiv-program/research/2026-09-21/arxiv-deep/1522-calibration-diversity-data-scarcity.md
## What it is (1-2 sentences)
Paper (arXiv:2608.21591): under data scarcity, what drives conformal prediction coverage is the *diversity* of the calibration set (p95−p5 spread of nonconformity scores), not how many rare events it contains — diversity R²=0.85 vs rare-count R²=0.02. A diversity-maximizing calibration selector raised 6-month coverage 67.8%→81.4% where Mondrian, shift-robust, and extreme-value conformal baselines failed.
## Key metrics/methods (formulas where given, else "not specified")
- Selector: argmax over N-subsets of (p95 − p5) of pooled nonconformity scores (|forecast error|); exact, since extreme-tail months provably maximize width.
- Proposition: coverage deficit Δ = G(Q_G(1−α)) − G(Q̂_C(1−α)); coverage fails when the calibration (1−α) quantile falls short of the test distribution's.
- Adaptive Conformal Inference (ACI), α=0.10; 200 random N=254 subsets regressing coverage on support width vs rare-event count.
- Point model: RegressorChain MAE 6.83/5.63/7.73/10.17 (cur/1M/3M/6M horizons).
## Data sources named
FRED: 12 macro indicators (Treasury 1/3/6/10y, CPI, PPI, Industrial Production, Unemployment, Share Price Index, GDP per capita, OECD CLI, Consumer Sentiment); target RECPROUSM156N (smoothed recession probability); 635 train / 65 test months split at Jan 2020. External: Euro area, UK, Germany, Japan, Canada recession series + 7 synthetic scenarios.
## Findings (numbers and facts, not vibes)
- 6M coverage with 0 rare months: 62.7%; with 16 rare months: 67.8% — gradual, no threshold.
- 200 subsets: support width R²=0.85 vs rare-event count R²=0.02 (~50-fold gap); residual rare-count correlation ≈ 0 after diversity matching.
- Selector: 6M coverage 67.8%→81.4% in-sample; interval width 10.6→32.6 points; still short of 90%. Out-of-fold: 84.75%→96.61% but CIs span 90%.
- Q̂_C(0.90)=3.01 vs Q_G(0.90)=27.06 predicted 57.6% coverage, within 5–10 pts of observed.
- Mondrian dropped coverage 67.8%→61.0% even with oracle labels; PID-conformal and GPD-tail fits also failed.
- Five countries: ρ(diversity) 0.45–0.66 (Japan 0.66, Canada 0.65, Euro 0.64, UK 0.57, Germany 0.45) vs ρ(rare) 0.02–0.23.
- Probit reached ~97% coverage with intervals 40–335× wider than target range — vacuous.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: pre-deployment "coverage warning" badge idea — predict coverage deficit from calibration quantile reach before publishing intervals; honest interval labeling on pick cards.
- OTHER: calibration methodology — replace trailing-window calibration sets with diversity-maximizing selection, especially early-season (weeks 1–6) data scarcity.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the diversity selector for conformal/CPIT calibration splits (select N games maximizing p95−p5 of |realized margin − engine spread|), first for early-season calibration; gate: +5 pts 90%-interval coverage vs trailing window with ≤30% width increase.
