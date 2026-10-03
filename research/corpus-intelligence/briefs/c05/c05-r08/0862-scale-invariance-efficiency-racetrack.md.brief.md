# arxiv-program/research/2026-09-21/arxiv-deep/0862-scale-invariance-efficiency-racetrack.md

## What it is (1-2 sentences)
Paper ledger for arXiv:0911.3249 (Mori & Hisakado 2009) on how efficiency emerges NON-MONOTONICALLY in a parimutuel racetrack market as betting progresses (concentration → dispersion → re-concentration). Verdict: ADAPT — the AR/EAR/DL(x) time-resolved efficiency diagnostic is portable to NFL line-movement phases from open to close.

## Key metrics/methods (formulas where given, else "not specified")
- Win bet fraction from odds: x_{i,k}^r = 0.788/(O_{i,k}^r − 0.1) (eq. 1), renormalized
- Scale invariance: ROC curve (x₀(s), x₁(s)); fit x₁ = a·x₀^α in small-x₀ region (eq. 8); double scaling limit gives exact x₁ = x₀^α over full range (eq. 22)
- Efficiency: Lorenz curve L(x) (eq. 9); expected Lorenz EL(x) (eq. 11); AR = (∫L − 1/2)/[(1/2)(1 − N₁/N)] (eq. 10); EAR analog (eq. 12); AR = EAR is necessary-but-not-sufficient efficiency condition; DL′(x) sign tells over/under-estimation by rank
- Pólya urn voting model: vote prob P_{i,t}^μ = X_{i,t}^μ/Z_t (eq. 13), Z_t = N₁s₁ + N₀s₀ + t (eq. 14); beta-binomial vote counts (eq. 15); thermodynamic limit gamma (eq. 17); x₁ ~ x₀^α with α = s₁/s₀ (eq. 21)

## Data sources named
- JRA 2008 win-bet time series: 3,542 races → 3,250 used (final pool 10⁵ ≤ V_r ≤ 10⁶); N=47,273 horses, N₁=3,251 winners, K=285,269 announcements
- Full-sample replication: JRA 1986–2006, 71,549 races, N₁=71,650, N₀=829,716
- Almost half of all votes arrive in the last 10 minutes

## Findings (numbers and facts, not vibes)
- ROC fits: t₀: α=1.03 (diagonal, no information); t₃: α=1.77 over 0.03 ≤ x₀ ≤ 0.3; 1986–2006: α=1.81 over 0.003 ≤ x₀ ≤ 0.3 — scale-invariance exponent stable across decades
- AR rises monotonically, saturating at t₂; EAR starts ≈0.9 (extreme concentration), falls to minimum at t₂, rises after; AR=EAR at t₁ AND at t₃ — efficiency attained twice with an inefficient interval between
- DL(x) anatomy: t₁ — top 10% overestimated, next 10% underestimated; t₂ — popular 30% underestimated, 70% unpopular overestimated (favorite-longshot bias state, max AR−EAR gap); t₃ — near-efficient, top 20% mildly overestimated
- 1986–2006: degree of inefficiency very small; top 0.4% underestimated, next 10% overestimated (contrary to simple favorite-longshot bias)
- Companion paper 1006.4884 (ledger 0863) extends with independent/herding voter decomposition

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- NFL line-movement efficiency phases: compute AR/EAR analogs at normalized open→close buckets using ticket%/handle% splits — OTHER
- AR≈EAR crossing timestamps as the optimal "read" of the market for GSE market-implied ratings; interior-crossing vs close CLV test — OTHER
- α-exponent monitoring (de-vigged implied probabilities vs outcomes, rolling windows) as a favorite-longshot-bias regime-change flag — TRUST-SIGNAL
- Informs CLV/beat-the-close/steam timing: CLV at different window points captures different information regimes — OTHER

## Engine-actionable? (yes/no + one-line what)
yes — rebuild AR/EAR/DL(x) on NFL spread/total open→close line history and gate on finding ≥1 interior AR≈EAR crossing (non-monotonic efficiency path); if monotonic, the transfer fails.
