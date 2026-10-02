# docs/arxiv-program/research/2026-09-21/arxiv-deep/0578-stochastic-analysis-of-the-elo-rating.md

## What it is (1-2 sentences)
Deep-read ledger of arXiv:2212.12015v2 (Zanco, Szczecinski, Kuhn, Seara 2022/2023) treating the Elo update as stochastic gradient descent on a logistic loss and deriving, via adaptive-filter theory, closed-form skill-evolution, mean-square-deviation, and loss trajectories plus principled design rules for the step size β. Verdict: ADAPT — the first closed-form theory for Elo's K-factor; GSE should replace heuristic K choices with Eq. 71's optimal step size. Validated on 10 seasons of real league data.

## Key metrics/methods (formulas where given, else "not specified")
- Elo = SGD: θ_{k+1} = θ_k + β[y_k − σ(x_kᵀθ_k + η)]x_k (Eq. 9), on BT model Pr{y_k=1|θ} = σ(x_kᵀθ + η).
- Mean skill (Eq. 33): E[θ_{k,m}] = (1−α1^k)θ*_m, α1 = 1 − 2βh̄/(M−1); time constant τ1 ≈ (M−1)/(2βh̄) (Eq. 59).
- MSD (Eq. 48): d̄_k = α2^k(d̄_0 − d̄_∞) + d̄_∞, α2 = 1 − 4β(h̄ − βh̄²)/(M−1) (Eq. 47), d̄_∞ = βh̄(M−1)/[2(h̄ − βh̄²)] (Eq. 50); τ2 ≈ (M−1)/[4β(h̄ − βh̄²)] (Eq. 60).
- Bias–variance split (Eqs. 52–53): b̄_k = α1^{2k}d̄_0, ω̄_k = (α2^k − α1^{2k})d̄_0 + (1 − α2^k)d̄_∞.
- Improvement-over-initialization bound (Eqs. 67–69): 0 < β < [(1−1/M)/(2v) + h̄²/h̄]^{−1}, rule of thumb β < 2v.
- Optimal step size (Eq. 71): β_{o,k} ≈ ½[(1−1/M)/(2v) + h̄²/h̄ + 2h̄²(k−1)/(M−1)]^{−1}; for small v, β_{o,k} ≈ v.
- Loss: ℓ̄_k ≈ ℓ̄_min + ℓ̄_ex,k, ℓ̄_ex,k = h̄ d̄_k/(M−1) (Eqs. 55–57); v_th = 2ln2 ≈ 1.4 separates high/low skill-spread regimes (Eq. 62).
- Laplace approximation: h̄ = ¼(v+1)^{−1/2}exp(−η²/[4(v+1)]) (Eq. 30).

## Data sources named
- Theory: round-robin, M teams, true skills θ* ∼ N(0, vI). Real data: Italian volleyball SuperLega, 10 seasons 2009/10–2018/19 (pandemic seasons excluded), M=12–15 teams, K=132–210 games/season, regular season only; η̂ (HFA) 0.06–0.77, v̂ 1.2–3.7 per season (Table 2); results scraped from FlashScore (archive.ph mirror). Experiment code: https://github.com/dangpzanco/elo-rating.

## Findings (numbers and facts, not vibes)
- With v̂ ≈ 1.2–3.7 the optimal β_{o,k} ≈ 0.93–1.09 (natural-logistic units); dividing by s′ = 400/ln10 ≈ 173.7 gives K_opt ≈ 160–190 Elo points — much larger than the FIFA/FIDE range, which under-converges within a season.
- Theory matches simulated MSD/loss in transient and steady state across all tested β values (Fig. 6); β=0.87 (optimal) converges within the season while β=0.1 (FIFA/FIDE scale) does not.
- End-of-season MSD/loss vs β (Fig. 7): model tracks experiment over β ∈ (0.01, 4); β beyond the improvement bound inflates MSD and loss sharply — "such values of β should not be used."
- Per-season per-team skill trajectories follow the theory's mean curve (Fig. 8); per-season β_{o,k} ∈ {0.939, 0.998, 0.93, 1.09} for the four displayed seasons.
- Step sizes tested: β=0.1 (FIFA/FIDE range), β=0.87 (optimal via Eq. 71 at k=K/4, averaged over seasons), β=2.49 (improvement-bound threshold via Eq. 67).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Closed-form optimal K-factor (Eq. 71): large early, decaying as games accumulate — direct extension of GSE's existing Elo core whose K is currently heuristic: OTHER.
- Convergence time constant τ1 to set preseason burn-in (ratings provisional before k ≈ 3τ1 games) instead of folklore "30 games": TRUST-SIGNAL.
- Hard cap β < 2v flags over-aggressive K values: TRUST-SIGNAL.
- Combined with paper 0576 (luck-capped link): 2×2 improvement experiment — orthogonal weaknesses (step-size dynamics vs tail calibration): OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — add a K-factor scheduler to the engine's Elo module: K_k = s′·β_{o,k} from Eq. 71 with v̂ estimated each offseason from prior-season rating spread, hard cap K_k < 2v̂·s′ (Eq. 69), and τ1-derived provisional flags; adoption gate: beats fixed-K Elo on pooled 2015–2025 log-loss by ≥0.001 AND wins the first-6-weeks split.
