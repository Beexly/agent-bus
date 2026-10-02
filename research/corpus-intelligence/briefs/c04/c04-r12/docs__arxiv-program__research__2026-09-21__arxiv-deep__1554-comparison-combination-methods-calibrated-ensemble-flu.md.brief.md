# docs/arxiv-program/research/2026-09-21/arxiv-deep/1554-comparison-combination-methods-calibrated-ensemble-flu.md
## What it is (1-2 sentences)
Ledger of arXiv:2202.11834 (Wattanachit et al. 2022), comparing six ensemble combination methods on the CDC FluSight seasonal-influenza forecasting operation (27 models, 3 test seasons), focusing on the beta-transformed linear pool (BLP) — a 2-parameter warp that fixes the linear pool's proven overdispersion. Verdict in the ledger: ADAPT — BLP is directly applicable to recalibrating GSE's ensemble predictive distributions, with the paper's honest negatives (beta under-prediction in test, equal-weights failure) as guardrails.
## Key metrics/methods (formulas where given, else "not specified")
- LP: f_LP(y) = Σₘ ωₘ fₘ(y), ωₘ ≥ 0, Σωₘ = 1 (Eq. 1).
- BLP: F_BLP(y) = B_{α,β}(Σₘ ωₘ Fₘ(y)), α,β > 0 (Eq. 2); f_BLP(y) = (Σωₘfₘ(y))·b_{α,β}(ΣωₘFₘ(y)) (Eq. 3). α=β=1 recovers LP; other values sharpen/widen or skew tails. Adds exactly 2 parameters to LP.
- BMCK: F_BMC_K(y) = Σₖ θₖ B_{αₖ,βₖ}(Σₘ ω_{km} Fₘ(y)) (Eq. 4); K=2 selected for all 12 target-season pairs via leave-one-season-out CV with 1-SE rule → BMC2 reported.
- Binned-data likelihood modification (§2.4): log P_{BMC_K,j} = log[F_{BMC_K}(uⱼ) − F_{BMC_K}(ℓⱼ)] expressed via cumulative bin probabilities Σ_{i≤j} P_{m,i}.
- Log score: LogS(f,y*) = log Pᵢ for y* in bin i (truncated at −10 per CDC convention); PIT zᵢ = F(y*), randomized within-bin; calibration = PIT ~ Uniform; Cramér distance ∫(F(x)−G(x))²dx.
## Data sources named
CDC ILINet wILI (weekly % outpatient visits for influenza-like illness, US national + 10 HHS regions, seasons 2010/11–2018/19). FluSight Network forecasts (FluSightNetwork/cdc-flusight-ensemble): 27 models (mechanistic SEIRS/SIRS Kalman filters, BMA, basis regression, delta density, empirical futures/trajectories, DBMplus, KCDE/KDE, SARIMA1/2, GLEAM, dynamic harmonic, ARLR, LSTM, EpiCos, uniform); targets 1–4 week ahead wILI as binned PDFs. Code: https://github.com/NutchaW/forecast_calibration.
## Findings (numbers and facts, not vibes)
- Overall test mean log score (all targets+seasons): BMC2 −3.02 (best) > BLP −3.03 > LP −3.06 > EW-BMC2 −3.13 > EW-BLP −3.13 > EW-LP −3.26.
- By target (test): 1-wk BLP best (−2.57); 2-wk BLP −2.95 ≈ BMC2 −2.95; 3-wk BMC2 −3.19; 4-wk BMC2 −3.34.
- By season: 2016/17 BLP −2.93 (best); 2017/18 BMC2 −3.18; 2018/19 BMC2 −2.92.
- Calibration: BLP/BMC2 most calibrated at 1-wk ahead (lowest Cramér distances); calibration degrades with horizon for all beta methods. Honest negative: beta methods corrected LP overdispersion but introduced systematic under-prediction in test (PIT CDF below diagonal across all values; worse at longer horizons and in the severe 2017/18 season). BMC2 showed mild train/test overfitting gap.
- Equal weights strictly fail: EW variants worse than weighted counterparts on accuracy and calibration, in train and test. BMC2 uses 2× BLP's parameters but only marginally beat it → BLP is the paper's practical recommendation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Distribution-level ensemble calibration: BLP warp as a post-processing layer on GSE's linear-pool consensus (learn weights + (α,β) per market type via MLE on log score over past seasons). New capability vs. GSE's conformal/CQR interval-coverage work — this targets full-distribution PIT calibration of the combined forecast.
- [OTHER] Guardrail for GSE: regularize (α,β) toward (1,1) (shrinkage to LP) and validate on a held-out season — the under-prediction pathology is worse in heavy-tailed/extreme regimes (flu analogue of NFL blowouts). Ledger proposes penalized MLE: log-score − λ·[(α−1)² + (β−1)²] with λ via leave-one-season-out CV.
## Engine-actionable? (yes/no + one-line what)
Yes — implement BLP as a 2-parameter post-processing layer on the existing linear-pool consensus, estimated per market type on historical engine logs (~1 engineer-week); acceptance gate: on the 2025 holdout, BLP improves mean log score over weight-optimized LP by ≥0.02 with no worse Cramér distance and no PIT CDF below diagonal by >0.05.
