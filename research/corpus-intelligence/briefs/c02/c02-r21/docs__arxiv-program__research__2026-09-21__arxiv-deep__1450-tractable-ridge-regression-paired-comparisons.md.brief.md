# docs/arxiv-program/research/2026-09-21/arxiv-deep/1450-tractable-ridge-regression-paired-comparisons.md
## What it is (1-2 sentences)
Varin & Firth (2024, arXiv:2406.09597) solve the ridge-penalty selection problem for paired-comparison (Bradley-Terry-style) strength models via "pairwise empirical Bayes" (PEB): estimating the penalty λ from pairs of comparisons sharing a common item, so no high-dimensional marginal integration or repeated cross-validation refits are needed. The corpus reader verdict is ADAPT — adopt PEB-ridge as GSE's early-season rating estimator and the closed-form λ̂ as a fast prior-strength initializer.
## Key metrics/methods (formulas where given, else "not specified")
- Penalized likelihood: ℓ_λ(μ) = ℓ(μ) − (λ/2)Σᵢμᵢ²; working prior μ ~ N(0, λ⁻¹I).
- Binary-outcome concordance: τ̂ = (c−d)/(c+d); small-sample adjusted: τ̂ = (c−d)/(c+d+2p).
- Penalty selector closed form: λ̂ = [1 − 2sin(πτ̂/2)]/sin(πτ̂/2).
- Order/tie extension: Thurstone–Mosteller cumulative-probit with order effect δ and tie parameter γ.
- Compared against: MLE, Firth bias-reduced MLE (BRMLE), leave-one-round-out CV ridge.
## Data sources named
- Simulations: 120 scenarios — p ∈ {20, 40, 60} items, λ ∈ {2⁻¹, 2⁰, …, 2⁶}, training fractions {20%, 30%, 40%, 50%, 80%}, 1,000 replications each, order effect δ = 0.2 (≈58% first-item wins); robustness under heavy-tailed true strengths (t₈, t₃).
- Application: 28 English Premier League seasons, 1995–2023, 10,640 matches, 20 teams × 38 match-weeks. Train on first 10/15/20/25/30 weeks, predict remaining matches. Naive baseline: outcome frequencies (46% home win, 25% draw, 29% away win), naive log score 1.06.
- Code/data: https://github.com/crisvarin/peb.
## Findings (numbers and facts, not vibes)
- [SCHEME] PEB was uniformly best among displayed methods in simulations and visually indistinguishable from leave-one-round-out CV ridge — at zero refit cost.
- [SCHEME] MLE could predict worse than the naive baseline in sparse/early data; Firth bias reduction improved on MLE but under-shrank relative to the predictive optimum. Reader proposes a naive-baseline gate: any rating model that cannot beat naive outcome frequencies in sparse data is misfiring.
- [SCHEME] Robust to misspecification: negligible penalty-choice difference under t₈-distributed true strengths; small differences even under t₃.
- [SCHEME] Premier League: BRMLE beat MLE in all 28 seasons and all training sizes; PEB usually beat BRMLE, with the largest gains after only 10–15 weeks of training data (early-season sparse regime).
- [OTHER] Method scoped to static within-season strengths; authors explicitly distinguish from sequential dynamic prediction. Leakage assessment in the file: clean (strict temporal split, synthetic simulations with known truth).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [SCHEME] Early-season team-strength ratings: PEB-ridge keeps all-win/all-loss teams at finite, shrunken ratings instead of ±∞ MLE blowups — direct fit for NFL weeks 1–6.
- [SCHEME] λ-from-concordance closed form as a drop-in prior-strength initializer for any GSE rating lane.
- [TRUST-SIGNAL] Naive-baseline gate: any rating configuration whose sparse-data log-loss exceeds naive outcome frequencies gets rejected automatically in model CI — a concrete QC gate.
- [OTHER] Companion to [1449] (unpenalized LS paired comparisons); complements [1448] (G-Elo) as a principled batch alternative — run both in the rating bake-off.
- [OTHER] Reader's improvement experiment: dynamic PEB where λ_t evolves via random walk or rolling-window re-estimation, tested on 2022–2023 NFL mid-season QB injuries (e.g., post-injury weeks log-loss vs static PEB).
## Engine-actionable? (yes/no + one-line what)
yes — Implement PEB-ridge with the closed-form λ̂ as the weeks 1–6 NFL rating estimator plus the naive-baseline CI gate; run the NFL 2019–2023 early-season replication protocol (train weeks 1–W, W ∈ {4,6,8,10}, predict rest; gate: beat current GSE early-season rating log-loss by ≥0.01 and beat naive baseline by ≥0.05 every season).
