# arxiv-program/research/2026-09-21/arxiv-deep/1172-solving-the-forecast-combination-puzzle.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2308.05263 (Frazier et al. 2023, ~28 pp + appendices): theoretical explanation of the "forecast combination puzzle" — optimally weighted combinations failing to beat equal weighting — as an artifact of two-step estimation (fit models, then fit weights), which makes standard accuracy tests have zero local power. Verdict: ADAPT as the methodological constitution of GSE's ensemble-comparison lane.
## Key metrics/methods (formulas where given, else "not specified")
- One-step: θ̂_n = argmin_θ L_n(θ) (joint); two-step: fit γ̃ per model then η̃ conditional. Theorem 4.1: weight-distance δ_T ≍ δ/T^ξ — for ξ∈(1/4,∞], rejection probability of standard test → 0 for all α (no local power).
- Corollary 4.1: null distribution of the two-step loss-difference statistic is generalized chi-squared (no closed form) → standard normal critical values are wrong.
- Two-step-aware test: W_P^{2s}(α) = {P·Δ_P > cv_{(1−α)H}} with cv simulated from B=10,000 draws of ½‖X + (P/R)^{1/2}M̂_{ηγ}Z‖²_{M̂_{ηη}^{−1}} (eq. 10).
- Theorem 4.2: one-step combination asymptotically always (weakly) beats two-step, including equal weights — for ANY strictly proper scoring rule or consistent scoring function.
## Data sources named
Monte Carlo: AR(2) DGPs tuned on 10M draws to target pseudo-true weights η* ∈ {0, 0.25, 0.5, 0.75, 1}, sample sizes to 2000. Empirical: daily log S&P500 returns; linear pool of Gaussian EGARCH(1,1) + t-GARCH(1,1); train 1990–2004 (3,783 trading days), test 2005–2019 (3,772 trading days).
## Findings (numbers and facts, not vibes)
- Standard test size under the null: 0.0000–0.0004 (MSFE and log-loss, all T); two-step-aware test size: 0.020–0.053 (MSFE) / 0.044–0.053 (log-loss) — near nominal.
- Power under a small deviation: standard 0.010–0.012 (MSFE) / 0.0000 (log-loss) vs two-step-aware 0.154/0.304/0.655 (MSFE) and 0.196/0.367/0.687 (log-loss) at T=1000/2000/5000.
- Even with optimal weight far from benchmark (η*=0.25 vs equal weights), standard-test rejection stays below 50% for all sample sizes <1000 (Fig. 1).
- S&P500 out-of-sample p-values: equal vs optimal two-step 0.8251 (cannot reject — the puzzle); equal-two-step vs one-step 5.675e-05; optimal-two-step vs one-step 6.935e-12.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ensemble evaluation methodology — GSE's weighting-scheme comparisons (OGD weights 1169, per-quantile weights 1170) are exactly the two-step comparisons this paper proves untestable with standard tests; a "not significant" DM/White result on ~270 games/season is the predicted artifact, not evidence for equal weighting. Design rule: always optimize weights on the combination loss jointly (one-step) where feasible.
## Engine-actionable? (yes/no + one-line what)
yes — adopt the one-step-over-two-step design rule in every future ensemble proposal and replace standard DM/SPA p-values with the paper's two-step-aware simulated-critical-value test (or report loss differences with no significance claims), with an ‖ŵ_a−ŵ_b‖ vs O(T^{−1/4}) weight-distance bar to kill unresolvable backtest comparisons.
