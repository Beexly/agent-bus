# docs/arxiv-program/research/2026-09-21/arxiv-deep/0603-understanding-and-pushing-the-limits-of.md
## What it is (1-2 sentences)
Shows Elo is stochastic gradient (SG) on maximum likelihood under a logistic model, reverse-engineers Elo's implicit draw model (the s_i=1/2 convention = SG-ML under Φ_H=Φ², Φ_D=2Φ(1−Φ)), and proposes κ-Elo (Davidson 1970) where κ tunes modeled draw frequency (κ=0 = binary Elo, κ=2 = classical Elo's implicit model). For the NFL (ties ≈0.5%) the draw machinery collapses — the portable product is the canonical SG-ML binary Elo with correct prediction semantics and scale-invariant parameterization.

## Key metrics/methods (formulas where given, else "not specified")
- Binary model: Pr{i⋗j|θᵢ,θⱼ} = Φ(θᵢ−θⱼ), Φ(v) = 1/(1+10^{−v/σ}) (FIFA σ=600, FIDE σ=400)
- Elo = SG-ML: θ̂_{n+1,i} = θ̂_{n,i} + K[s_i − Φ(Δ_i)], s_i ∈ {1, ½, 0}
- Prop. 1 implicit draw model: Φ_H(v)=Φ²(v), Φ_A(v)=Φ²(−v), Φ_D(v)=2Φ(v)Φ(−v) — the "expected score" E[s_i]=Φ(Δ) (eq. 45) is NOT the win probability; using it as such is the paper's central identified confusion
- κ-Elo: Φ_κ(v) = 10^{0.5v/σ}/(10^{0.5v/σ}+10^{−0.5v/σ}+κ); update θ̂_{n+1,i} = θ̂_{n,i} + K[s_i − F_κ(Δ_i)], F_κ(v) = (10^{v/2}+κ/2)/(10^{v/2}+10^{−v/2}+κ)
- Frequency calibration: p̄_D ≈ κ/(2+κ); κ̄ ≈ 2p̄_D/(1−p̄_D). EPL p̄_D≈0.25 → κ̄≈0.7; classical κ=2 implicitly assumes p̄_D≈0.5 — false everywhere
- HFA as level shift: Φ^{hfa}_·(v) = Φ_·(v+ησ), η≥0 (experiments η=0.3); scale invariance via K = K̃σ (σ=600, K̃=0.125)
- Prediction semantics: Pr(win)=Φ²(Δ), Pr(draw)=2Φ(Δ)Φ(−Δ) under the classical implicit model

## Data sources named
EPL 2009/10–2018/19 results + Bet365 odds from football-data.co.uk (M=20, N=380/season); avg draw frequency ≈0.25. Online chronological, prequential log-score on second-half games; Bet365 no-vig implied probabilities as baseline. No code stated; algorithm is ~5 lines.

## Findings (numbers and facts, not vibes)
- Conservative κ=1 wins: within noise of frequency-matched κ=0.7 across seasons with tighter pseudo-credibility intervals (paper's recommendation).
- Explicit κ=2 prediction is poor; the mismatched "classical Elo estimate + κ̌=1 prediction" trick is nearly as good as κ=1 — explaining why legacy Elo works despite the wrong implicit model.
- 2013–14 (p̄_D=0.17): κ=0.7 → LS̄=0.93 (0.17,1.86); κ=1 → 0.96; Elo+κ̌ → 0.95; Bet365 → 0.91.
- Table I (10 seasons, η=0.3): κ=0.7 vs κ=1 vs Elo+κ̌ near-identical (e.g., 2017–18: 0.99/0.99/0.99; Bet365 0.97) — "no dramatic change in performance should be expected": the gain is principled correctness, not predictive leaps.
- NFL translation (from file): p̄_tie ≈ 0.005 → κ̄ ≈ 0.01 ≈ 0 — the entire draw apparatus collapses to binary Elo.
- Limitations (from file): half-season burn-in arbitrary; SG tracking theory unsolved; never beats Bet365; no MOV handling; static HFA; κ≥1 sanity constraint forces misspecification for p̄_D < 1/3.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: canonical GSE Elo spec — binary κ=0, proper Φ(Δ) win probabilities (not "expected score" per eq. 45 warning), K=K̃σ scale-invariant steps, ησ HFA shift; ~1-day effort.
- TRUST-SIGNAL: INFERENCE — binned calibration curve (Φ(Δ) vs observed win rate, flat within 95% CIs) is the honest-confidence gate for any Elo-derived pick probability shown to the public.
- OTHER: Elo-vs-market diagnostic — deviations between Φ(Δ) and market-implied probabilities flag games where GSE's signal stack disagrees with the market.

## Engine-actionable? (yes/no + one-line what)
Yes — implement canonical binary Elo (κ=0) on nflverse 2020–2025 with tuned K̃ (≈0.06–0.125) and η (≈0.1–0.3): adopt as GSE's standard online rater if 2023–2025 holdout log-loss ≤ naive Elo AND calibration shows no bin with |observed−predicted|>5% at n≥50; plus the adaptive-K̃_t improvement experiment (heavy-tail-aware SG step after upsets, K̃_t capped at 3K̃_0).
