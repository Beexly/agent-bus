# docs/arxiv-program/research/2026-09-21/arxiv-deep/0578-stochastic-analysis-of-the-elo-rating.md
## What it is (1-2 sentences)
A research-ledger deep read of arXiv:2212.12015v2 — the first closed-form adaptive-filter theory for the Elo update (treated as SGD on a logistic Bradley–Terry loss), yielding an optimal time-varying K-factor formula, a convergence time constant, and a hard improvement bound. Verdict: ADAPT — replace GSE's heuristic Elo K-factor with the paper's optimal step-size schedule.
## Key metrics/methods (formulas where given, else "not specified")
- Elo as SGD: θ_{k+1} = θ_k + β[y_k − σ(x_kᵀθ_k + η)]x_k (Eq. 9); Bradley–Terry Pr{y_k=1|θ} = σ(x_kᵀθ + η).
- Mean skill: E[θ_{k,m}] = (1 − α1^k)θ*_m, α1 = 1 − 2βh̄/(M−1) (Eq. 33); time constant τ1 ≈ (M−1)/(2βh̄) (Eq. 59).
- MSD: d̄_k = α2^k(d̄_0 − d̄_∞) + d̄_∞, α2 = 1 − 4β(h̄ − βh̄²)/(M−1) (Eq. 47), d̄_∞ = βh̄(M−1)/[2(h̄ − βh̄²)] (Eq. 50); τ2 ≈ (M−1)/[4β(h̄ − βh̄²)] (Eq. 60).
- Bias–variance split (Eqs. 52–53): b̄_k = α1^{2k}d̄_0; ω̄_k = (α2^k − α1^{2k})d̄_0 + (1 − α2^k)d̄_∞.
- Improvement bound (Eqs. 67–69): 0 < β < [(1−1/M)/(2v) + h̄²/h̄]^{−1}; rule of thumb β < 2v.
- Optimal step size (Eq. 71): β_{o,k} ≈ ½[(1−1/M)/(2v) + h̄²/h̄ + 2h̄²(k−1)/(M−1)]^{−1}; for small v, β_{o,k} ≈ v.
- Laplace approximation h̄ = ¼(v+1)^{−1/2}exp(−η²/[4(v+1)]) (Eq. 30); loss lower bound ℓ̄_min (Eq. 55); v_th = 2ln2 ≈ 1.4 separates high/low skill-spread regimes (Eq. 62).
- Key assumptions: random uniform scheduling, static Gaussian true skills θ*∼N(0,vI) within a season, quadratic Taylor approximation of the loss, binary outcomes (no draws, no MOV).
## Data sources named
Italian volleyball SuperLega, 10 seasons 2009/10–2018/19 (pandemic seasons excluded), M=12–15 teams, K=132–210 games/season, regular season only; results scraped from FlashScore (archive.ph mirror cited); experiment code at github.com/dangpzanco/elo-rating. Step sizes tested: β=0.1, β=0.87 (optimal via Eq. 71 at k=K/4), β=2.49 (improvement-bound threshold).
## Findings (numbers and facts, not vibes)
- Theory matches simulated MSD/loss trajectories in transient and steady state across all β values (Fig. 6); β=0.87 (optimal) converges within the season while β=0.1 (FIFA/FIDE scale) does not.
- End-of-season MSD/loss vs β∈(0.01,4) (Fig. 7): model tracks experiment; β beyond the improvement bound inflates both MSD and loss sharply — "such values of β should not be used."
- Per-season SuperLega estimates: η̂ (HFA) 0.06–0.77; v̂ (skill variance) 1.2–3.7 (Table 2).
- With v̂≈1.2–3.7 the optimal β_{o,k}≈0.93–1.09 in natural-logistic units → K_opt ≈ 160–190 Elo points (divide by s′=400/ln10≈173.7) — much larger than the FIFA range β′∈[0.02,0.23]·s′, which under-converges within a season.
- Per-season β_{o,k} for four examined seasons: 0.939, 0.998, 0.93, 1.09.
- Per-season per-team skill trajectories follow the theory's mean curve (Fig. 8).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Principled K-factor scheduling replacing heuristic Elo tuning (OTHER — engine calibration).
- Time constant τ1 defines a preseason burn-in window instead of "30 games" folklore (OTHER — engine calibration).
- Hard cap β<2v flags over-aggressive K values (OTHER — engine calibration).
- Static-θ* and uniform-scheduling assumptions break for the NFL (divisional structure, injuries/trades); R matrix must be recomputed for the NFL schedule (OTHER — caveat).
## Engine-actionable? (yes/no + one-line what)
Yes — add a K-factor scheduler K_k = s′·β_{o,k} (Eq. 71) with offseason-estimated v̂, M=32, k=games played, hard-capped at 2v̂·s′, and use τ1 to flag provisional pre-burn-in ratings; accept if pooled 2015–2025 walk-forward log-loss improves ≥0.001 with a first-6-weeks win.
