# arxiv-program/research/2026-09-21/arxiv-deep/0049-relative-advantage-quantifying-performance-in-noisy.md
## What it is (1-2 sentences)
Ledger read of Brown, Scott & Kilduff (2025), arXiv:2504.19612: an axiomatic + SNR-based framework for why relative (difference-based) performance metrics outperform absolute metrics in competitive settings, with simulation evidence and a rugby validation. Verdict ADAPT: a noise-cancellation principle plus a usable diagnostic (the ση/σ_indiv variance ratio) that should govern how GSE engineers differential vs. absolute features.

## Key metrics/methods (formulas where given, else "not specified")
- Measurement model: X_A = μ_A + ε_A + η; X_B = μ_B + ε_B + η, with ε_i ~ N(0, σ_i²), η ~ N(0, σ_η²) shared.
- Relative transformation: R = XA − XB; environmental cancellation: R = (μA−μB) + (εA−εB).
- SNR: SNR_single_abs = (μA−μB)²/(σ_A² + σ_η²); SNR_rel = (μA−μB)²/(σ_A² + σ_B²). Improvement ratio: SNR_rel/SNR_abs = (σ_A² + σ_η²)/(σ_A² + σ_B²); when ση dominates: ≈ 1 + σ_η²/(σ_A² + σ_B²).
- Linked metrics: Separability S = Φ(d/2) (Φ = standard normal CDF); Information content I = 1 − H(S) (H = binary entropy); Mahalanobis distance DM = |μA−μB|/√(σ_A² + σ_B²); d = 2·DM. d_rel/d_abs = √(SNR_rel/SNR_abs).
- Metric-selection guidance: focus on separability S when d < 1; information content I when d > 3 (S saturates, I keeps improving); effect size d has the most linear relationship with SNR improvement.
- ML-relevant insight: a two-feature absolute predictor given both XA and XB implicitly learns relativization — optimal linear weights converge to wA = 1, wB = −1; SNR_twoabs ≈ 4·SNR_rel (pure scaling, same boundary).
- Four axioms for valid relative metrics: invariance to shared effects, ordinal consistency, scaling proportionality, optimality (XA − XB minimizes expected squared error in estimating μA − μB).
- FILE FLAG: Eq. 7's extraction was garbled (factor-of-2 variant for the two-feature case could not be disambiguated); the appendix Eqs. 60–61 form is the authority to use — re-derive from the source PDF before citing two-feature SNR formulas downstream.

## Data sources named
Simulations (synthetic): univariate two-competitor model, parameters |μA−μB| ∈ [0,20], σA,σB ∈ [1,10], ση ∈ [0,100]; 1,000 trials × (2,000 train / 1,000 test) per configuration; linear SVM. Real data: 127 matches from the 2021–2022 United Rugby Championship season; three KPIs (carries over gain line, defenders beaten, tackle completion %) from Scott et al. (2023a) — rugby data not published; MATLAB R2023a simulation code "available in the accompanying code repository" with no URL stated.

## Findings (numbers and facts, not vibes)
- High-noise simulation: accuracy — single absolute 0.735 ± 0.014; two-feature absolute 0.941 ± 0.009; relative 0.943 ± 0.009. AUC — single 0.498 ± 0.02 (≈ chance); two-feature 0.920 ± 0.013; relative 0.920 ± 0.013. Relative beats two-feature in only 51% of accuracy trials / 61% of AUC trials (statistical tie — predicted by theory).
- Boundary config (conditions deliberately violated): single 0.991/0.491; two-feature 0.999/1.000; relative 1.000/1.000 — relative advantage vanishes.
- Parameter landscape: largest gains at moderate |Δμ| (5–20), moderate σ_indiv (2–5); headline up to ~28–28.3% classification-accuracy improvement under high noise.
- Rugby AUC-ROC: carries over gain line 0.619 (home) / 0.738 (both) / 0.782 (relative); defenders beaten 0.642 / 0.744 / 0.771; tackle completion 0.584 / 0.723 / 0.738. Average: +21.3% over single absolute, +5.2% over two-feature absolute.
- Inferred rugby noise ratio σ_ηi/σ_indiv ≈ 0.46 average (0.51 carries, 0.45 defenders beaten, 0.39 tackle %); estimated rugby SNR gain ~8.3-fold; effect sizes d ≈ 1.0–1.5.
- Cross-study convergence (Table 9): SNR improvement at 10× noise — prior literature 4.8–6.5 fold, rugby 8.3 fold, their simulations 5.5 fold; critical noise ratio ση/σ_indiv: 4.3 / 3.8 / 4.5.
- File's adversarial caveat: single-team-absolute is a straw man — the fair comparison (two-feature absolute) is essentially tied with relative, so the honest rugby delta is +5.2%, not the headline +21.3%; rugby sample small (127 matches), no stated train/test split (likely in-sample AUCs); +21% is rugby KPIs vs. a weak baseline, not expected NFL lift.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- For environment-heavy metrics, opponent-relative difference features (EPA margin, net efficiency differentials) dominate absolute team stats; the ση/σ_indiv ratio diagnoses where relativization helps most (OTHER).
- Explicitly engineering the difference is equivalent to what a well-trained two-feature model discovers ((1,−1) weight convergence) but with better data efficiency and robustness (OTHER).
- The paper assumes η hits both teams identically — false in NFL (dome team in wind); team-specific environmental loadings are the stated future-work extension (OTHER).
- NFL is already difference-dominated (scores are differences), so marginal gain over current practice is smaller than the headline — quote the +5.2% honest delta, not +21.3% (TRUST-SIGNAL).

## Engine-actionable? (yes/no + one-line what)
Yes — run a "relativization audit" over GSE's nflverse feature set: estimate the shared-vs-individual variance ratio per team metric via Eq. 12, prioritize opponent-relative difference features where the ratio is high, and mirror the paper's three-way test (absolute vs. two-feature absolute vs. relative) on time-ordered 2024–2025 holdouts with an acceptance gate of ≥0.01 AUC over the honest two-feature baseline on the ση/σ_indiv > 0.4 subset.
