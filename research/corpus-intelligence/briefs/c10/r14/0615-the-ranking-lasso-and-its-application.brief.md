# arxiv-program/research/2026-09-21/arxiv-deep/0615-the-ranking-lasso-and-its-application.md
## What it is (1-2 sentences)
Deep read of Masarotto & Varin (2012, Annals of Applied Statistics, arXiv:1301.2954v1): the adaptive ranking lasso — Bradley–Terry with an L1 penalty on all pairwise ability differences that fuses similar teams into identical-ability tiers — cutting cross-validated negative log-likelihood 15–20% vs MLE on NFL 2010–11. Verdict ADOPT — a directly implementable, interpretable upgrade to team-rating fits that produces content-ready tiers as a free byproduct.
## Key metrics/methods (formulas where given, else "not specified")
- BT model: pr(Y_ijr=1) = exp(τh_ijr + μ_i − μ_j)/(1+exp(τh_ijr + μ_i − μ_j)); log-likelihood Eq. 2; home indicator h_ijr ∈ {−1,0,1}; identifiability Σμ_i = 0
- Ranking lasso: argmin{−ℓ(μ,τ) + λ Σ_{i<j} w_ij|μ_i − μ_j|} (Eq. 4), reformulated via θ_ij = μ_i − μ_j as constrained ordinary lasso (generalized fused lasso, no natural order)
- Adaptive weights: w_ij = |μ̂_i^{(mle)} − μ̂_j^{(mle)}|⁻¹ (Eq. 7), ε=10⁻⁴ ridge stabilization for undefeated/winless teams; λ via AIC/BIC; Augmented Lagrangian computation (§3.2)
- Ties extension: cumulative-link BT pr(Y_ijr ≤ y) = exp(δ_y + hτ + μ_i − μ_j)/(1+exp(...)), δ_0 = −δ_1 (used for hockey; irrelevant for NFL)
## Data sources named
NFL regular season 2010–2011 (32 teams; NFL data source not specified beyond the season); NCAA men's hockey 2009–2010 via R package BradleyTerry2's `icehockey` data frame (58 teams, 1,083 matches, 125 ties/11.5%).
## Findings (numbers and facts, not vibes)
- NFL 2010–11 held-out-half NLL (100× random halves; Table 3, mean | median | ≻coin): MLE 139.90 | 137.30 | 0.59; Lasso-AIC 119.10 | 111.70 | 0.60; Lasso-BIC 117.20 | 109.30 | 0.58; Hybrid-AIC 135.20 | 131.90 | 0.60; Hybrid-BIC 131.60 | 127.30 | 0.60
- Claimed: AIC-lasso ≈15% mean / 19% median better than MLE; BIC-lasso ≈16% mean / 20% median; hybrid (lasso groups + MLE refit) only marginally better than MLE — supports adaptive ranking lasso without refitting
- ~60% of matches predicted better than coin toss for all methods
- NFL groupings: New England 14–2 MLE 2.59 → lasso-AIC 1.40 / BIC 1.13; bottom-tier teams (Houston, Tennessee, Seattle, Cincinnati, St. Louis) fuse to shared −0.21 (AIC) / −0.12 (BIC)
- Hockey: τ̂^{(mle)} = 0.402 (se 0.066), δ̂_1^{(mle)} = 0.288 (se 0.024); lasso groups top four (Denver, Miami (Ohio), Wisconsin, Boston College — eventual champion) at identical 0.58 (AIC) / 0.41 (BIC)
- Limitations: random-half CV within one season is not time-ordered (absolute NLLs optimistic; relative ranking stands); single season each; λ by AIC/BIC not CV; no comparison vs Elo/Glicko or plain L2 ridge; n=32 is a small-sample regime where shrinkage trivially helps
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fused-ability tiers as weekly content-ready team tiers for the edge sheet; within-tier games = pass, cross-tier games = edge (bet selection) — OTHER
- Tier-membership changes as a "tier movement" engine feature — OTHER
- Compared to hierarchical-BT shrinkage (paper 0611): lasso fuses teams into data-determined tiers rather than shrinking all toward league mean — OTHER
- Shrinkage helps most at n=32 small-sample (NFL's exact regime) — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — add the adaptive ranking lasso (BT + L1 on pairwise ability differences, λ via BIC, ~60-line cvxpy fit, weekly refit) as a ratings input with tier outputs, subject to the file's walk-forward acceptance gates (beat MLE-BT by ≥0.005 log loss on 2016–2025; beat dynamic Elo by ≥0.002; median ≤2 tier changes/team/season).
