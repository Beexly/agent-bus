# arxiv-program/research/2026-09-21/arxiv-deep/0789-wisdom-crowds-forecast-economic-indicators.md
## What it is (1-2 sentences)
Paper: Siqueira Neto & Fontanari (2022), arXiv:2207.08924v2. A large-scale empirical test of the "wisdom of crowds" on 15,455 FRBP Survey of Professional Forecasters contests: compares mean vs median aggregation on rank and accuracy, benchmarks against ARIMA, and debunks the "unbiased estimates / error cancellation" explanation (Pearson r = 0.03 between distribution skewness and collective error). Verdict of the ledger: ADAPT — prefer median-based consensus over means when aggregating model outputs / market lines, because median beats the majority by construction and has ~2× the odds of beating ALL forecasters.

## Key metrics/methods (formulas where given, else "not specified")
Formulas copied verbatim from the brief:
- Mean collective estimate: ⟨g⟩_n (Eq. 1)
- Relative errors: γ_mean/|G|, γ_median/|G| (Eqs. 2, 8)
- Median definition: F_n^{−1}(1/2) (Eqs. 6–7)
- Page's diversity prediction theorem: γ_mean² = ε_quad − δ (Eq. 5) — with the authors' own caveat that δ and ε_quad cannot be varied independently, so the "more diversity = better" reading is wrong
- Skewness: μ₃ = (1/n)Σ((g_i − ⟨g⟩_n)/δ^{1/2})³ (Eq. 9)
- Mean individual error: ε = (1/n)Σ|g_i − G| (Eq. 10) = expected error of a random forecaster
- Rank statistic: fraction ξ of participants beaten by the collective estimate; probability crowd beats ALL participants (ξ=0)
- ARIMA: 12-quarter rolling fit, compared on 13,893 contests
- Debunking test: Pearson correlation between unsigned skewness |μ₃| and collective error
- Assumptions: forecasters' predictions independent ("not too far-fetched"); contests treated as independent experiments though participants repeat across quarters

## Data sources named
- Federal Reserve Bank of Philadelphia Survey of Professional Forecasters (FRBP-SPF); 20 economic indicators (NGDP, PGDP, CPI, UNEMP, RGDP, etc.); entry dates 1968:Q4–2007:Q1 through 2020:Q4; 5 forecast horizons per survey; mean 35 participants per contest (min 8, max 87); 15,455 forecasting contests total (10 eliminated due to zero true values). Public: https://www.philadelphiafed.org/research-and-data/real-time-center/survey-of-professional-forecasters.
- ARIMA comparison subset: 13,893 contests (12-quarter training window consumed early history).
- No code stated.

## Findings (numbers and facts, not vibes)
- Odds crowd beats ALL participants: mean 0.015, median 0.026 (median ~1.7× better).
- Median beats the majority BY CONSTRUCTION (no contest with ξ_median > 0.5); mean beats the majority in only 67% of contests.
- Mean relative errors: mean aggregation 0.20 ± 0.01; median 0.19 ± 0.01; winners 0.15 ± 0.01; random forecaster 0.22 ± 0.01; ARIMA 0.31 ± 0.01.
- Median vs mean head-to-head: errors correlated r = 0.98; median beats mean in 50.4% of contests.
- ARIMA beats a random expert in 35% of contests; ARIMA beats the crowd in 28% of contests.
- 58% of contests have crowd error ≤5%; 28% have error >10% — accuracy is good but "hardly miraculous."
- Skewness vs collective error: Pearson r = 0.03 — no meaningful correlation → debunks error-cancellation explanation.
- UNCERTAIN/interpretrive: the "selective attention" conclusion is interpretive, not derived from a test.
- Limitations: ARIMA is a weak strawman (fixed 12-quarter window, no automatic order selection described, univariate); percent errors unstable near zero; contests not truly independent (same forecasters across quarters) so standard errors/correlations assume independence — authors acknowledge p-values tiny but magnitude is what matters; descriptive not predictive (no out-of-sample aggregation rule tested; median advantage partly definitional).
- No contradiction: nothing conflicts with the other 4 files.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Consensus aggregation doctrine for the engine ensemble (OTHER): when blending multiple model outputs per game, cross-book market-implied probabilities, or expert/pundit panels, default the published edge to the median-based blend, not the mean, to blunt outlier-model drag. This serves the calibration/sizing program: cleaner consensus inputs feed log-loss/Brier and Kelly staking.
- Outlier-sensitivity diagnostic (OTHER): report |mean − median| as a disagreement flag; when it exceeds a threshold (e.g., 3 percentage points of probability), surface the dissenting source for analyst review — a concrete mechanism for catching a rogue model or stale line poisoning consensus.
- Model-health monitor (TRUST-SIGNAL): repurpose the paper's ξ-statistic as a per-model "beat-all" tracker — fraction of weeks each constituent model's probability beats the median consensus in log-loss. A model that persistently beats the consensus deserves up-weighting; one consistently beaten is a drag candidate.
- Improvement direction (OTHER): test trimmed-mean/winsorized aggregations (5%, 10%, 20% trim) against pure median and mean — hypothesis is a lightly-trimmed mean keeps median's outlier robustness while retaining full-panel efficiency. If a 10% trimmed mean beats both on 2024 GSE data, adopt it as consensus default and report "effective panel size" per game.
- Acceptance gate stated in file: ADAPT accepted if median consensus achieves log-loss no worse than mean consensus (within 0.5%) AND beats all constituent models in ≥2% of games; reject if median consensus log-loss >1% worse than mean.

## Engine-actionable? (yes/no + one-line what)
Yes — change GSE's consensus computation to default to median-based blends of model/market probabilities, with |mean − median| as an outlier flag; effort ~2 days (aggregation swap + logging). Reproducible test: GSE 2024 NFL picks, per-game per-model probabilities, compare median vs mean consensus on mean log-loss and Brier, plus fraction of games each aggregation beats every constituent model.
