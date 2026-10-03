# arxiv-program/research/2026-09-21/arxiv-deep/0821-kelly-criterion-portfolio-optimization-decoupled-problem.md
## What it is (1-2 sentences)
Paper: Zachariah Peterson (2017, v2), arXiv:1710.00431 (15 pages). Derives "decoupled" vs "coupled" Kelly return functions and combines the decoupled return with a Markowitz variance risk term via risk parameter P ∈ [0,1], solved with differential evolution on 10 stocks. Verdict: ADAPT — the decoupled-vs-coupled distinction is the transferable idea: the full joint (coupled) multi-bet Kelly problem needs an N-dimensional integral (cost T^N), while the decoupled form needs only N one-dimensional integrals (cost NT); for GSE's weekly slate of simultaneous picks, the decoupled approximation with a shared risk penalty is the tractable path to multi-pick Kelly staking.

## Key metrics/methods (formulas where given, else "not specified")
Formulas copied verbatim from the brief:
- Derivation: split wealth into N fractions f_i; per-asset Kelly growth ∏(1+f_i X_{i,j}) → exp(nE[ln(1+f_i X_i)]) asymptotically (Eq. 9).
- Decoupled return: R_avg = Σ_{i=1}^N f_i·exp(E[ln(1+f_i X_i)]) − 1 (Eq. 10). Each term needs only the marginal p(X_i) → cost NT.
- Coupled return: R_c = exp(E[ln(1+ΣF_i X_i)]) − 1 (Eq. 11). Requires N-dimensional integral over joint distribution p(X) → cost T^N.
- Decoupled Kelly model (Eq. 17): max_f P·Σf_i(exp(E[ln(1+f_i X_i)])−1) − (1−P)·Σ(f_i⁴M_ii + 2Σ_{j>i}f_i²f_j²M_ij), s.t. Σf_i² = 1, K_min ≤ f_i² ≤ K_max (cardinality bounds); wealth fraction in asset i is f_i².
- MV benchmark (Eq. 16): max P·ΣF_iE[r_i] − (1−P)·Σ(F_i²M_ii + 2ΣF_iF_jM_ij), ΣF_i=1.
- Risk term: Var[R] = Σ(f_i⁴M_ii + 2Σ_{j>i}f_i²f_j²M_ij) (Eq. 14).
- GBM: X_i(t+Δt) = exp((μ_i−σ_i²/2)Δt + σ_i√Δt·y) − 1 (Eq. 19); μ_i = ln(1+Avg[R]), σ_i = (ln(Var[R]e^{−2μ_i}+1))^{1/2} (Eq. 20).
- Solver: differential evolution (DE/rand/1/bin, C=0.75, scaled F, N(0,0.01) noise, 30-second reset timer; typical runs ~100 s on a 2.4 GHz dual-core).
- Validation: Monte Carlo with 10⁴ samples per asset comparing return-to-risk ratios of DE portfolios vs objective-function predictions.
- Assumptions (stated): per-asset returns i.i.d. across periods (path-independent); joint distribution p(X) known (fitted GBM); Kelly asymptotics (n→∞, Samuelson 1971 caveat noted); nonzero probability of total loss required for f_i to be true wealth fractions (else Kelly returns leverage factors >1 — Rotando & Thorpe's F=1.69 example cited).

## Data sources named
- 10 stocks from a major exchange (data from Zaheer & Pant 2016 — not redistributed here), monthly returns; Table 1: sample means Avg[R] (0.0995–0.4405), GBM-calibrated drifts μ_i = ln(1+Avg[R]) and volatilities σ_i (0.1991–0.4398), plus first-to-second moment ratios; Table 2: 10×10 sample covariance matrix.
- No code (references Storn & Price 1997 C code).

## Findings (numbers and facts, not vibes)
- MV model: DE converges to the same portfolio at all P — heavily concentrated on stock X₁₀ (weight ≈ 0.55, the highest drift-to-vol ratio), all others at the 0.05 lower bound (Table 3).
- Decoupled Kelly (Table 4): matches the MV portfolio at P=0.3 and P=0.5 (X₁₀ ≈ 0.55/0.53); at P=0.1 gives a more diversified, lower-return/lower-risk portfolio (X₅=0.1438, X₁₀=0.4339); converges slowly at P=0.7; mis-converges at P=0.9 (lower return AND higher risk — author flags possible local-maximum trap).
- Monte Carlo return-to-risk ratios (Figure 3) confirm the objective functions' predictions track the simulated ratios, including the P=0.9 anomaly.
- DE convergence: ~1,000s of iterations, ~100 s per run; slower for the Kelly model than MV.
- Limitations: single 10-stock dataset, no out-of-sample test — the "similar to MV" finding may be dataset-specific (both models pile onto the highest-Sharpe stock); mis-convergence at P=0.9 with no fix; DE hyperparameters hand-set; GBM/lognormal assumption contradicts the paper's own "no distribution" motivation; monthly Δt arbitrary; the decoupled form ignores cross-asset dependence in the *return* term (only the risk term has M_ij) — for correlated bets this is a real approximation error the paper doesn't quantify vs the coupled form; Kelly fractions can exceed 1 (leverage-factor issue — cardinality bounds paper over it); asymptotic (n→∞) justification, sports slates are finite.
- Referenced ledgers: 0813, 0816, 0819, 0820 all touch Kelly/sizing (this paper's distinct contribution vs them: the computational decomposition NT vs T^N, which none of the others address); 0819 (MPC) and 0820 (RCK vector extension) are the slate-staking designs to compare against; 0818's CED trigger as a drawdown-state input.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Slate staking — the tractable multi-pick Kelly (OTHER, serves the calibration/sizing program): for each week's slate of K picks, compute per-pick decoupled Kelly terms f_k·exp(E[ln(1+f_k X_k)])−1 from engine win prob and decimal odds (binary outcomes — closed form, no integral needed), plus a shared risk penalty (1−P)·ΣΣf_k f_j Cov(X_k,X_j) using empirical same-slate outcome covariance; maximize over stake fractions with Σf_k ≤ max_exposure, 0 ≤ f_k ≤ cap. Exactly Eq. 17 with binary X_k — cheaper than joint coupled optimization, richer than independent per-pick Kelly.
- Quantify the approximation (OTHER): on small slates (2–4 picks), solve the exact coupled problem (Eq. 11, low-dimensional integral via quadrature) and measure the allocation/growth gap vs decoupled — if the gap is small, decoupled is certified for large slates. This directly addresses the paper's unquantified approximation error for correlated bets (e.g., same-game or correlated-total picks).
- Adaptive risk parameter (OTHER): the paper's fixed P is the analog of 0820's fixed λ — test a drawdown-state-dependent P (link to 0818's CED trigger) so the slate staker de-risks automatically in drawdown.
- Acceptance gate: ADAPT if decoupled slate Kelly beats independent capped Kelly on 2025-holdout log-growth with comparable or better drawdown; else the coupling genuinely doesn't matter for GSE slates and per-pick Kelly stands.

## Engine-actionable? (yes/no + one-line what)
Yes — implement "decoupled slate Kelly": binary closed-form per-pick Kelly terms plus shared covariance risk penalty, optimized per weekly slate; compare against 0819 MPC and 0820 RCK slate variants; effort ~3 days (binary closed forms + covariance + optimizer + backtest). Reproducible test: GSE picks DB grouped by weekly slate, engine probs, closing odds; walk-forward 2024→2025, each week solve decoupled Kelly (tune P on 2024) vs (a) independent capped Kelly, (b) 0819 MPC variant if implemented; metric: log-bankroll growth, max drawdown; baseline: independent capped Kelly.
