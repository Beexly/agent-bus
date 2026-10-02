# arxiv-program/research/2026-09-21/arxiv-deep/0657-random-walk-basketball-scoring.md
## What it is (1-2 sentences)
Deep-ledger read of Gabel & Redner (arXiv:1109.2825, J. Quant. Anal. Sports 2012) showing basketball scoring is a Poisson-like antipersistent random walk with a small linear restoring force (leaders coast, trailers press). Not a prediction paper — but its three-component decomposition methodology ports to an NFL in-game scoring model, a genuine gap in GSE's corpus.

## Key metrics/methods (formulas where given, else "not specified")
- Scoring rate temporally homogeneous Poisson-like; inter-score intervals exponential; lag correlations C(n) < 0.03 (nearly memoryless).
- Antipersistence: same team scores next with q = 0.348; streak-length distribution Q(s) = q[w_1 Q(s−1) + w_2 Q(s−2) + w_3 Q(s−3) + w_4 Q(s−4)] matches data — streaks are pure randomness, no hot hand.
- Restoring force: P(team with lead L scores next) = S(L) = 1/2 − 0.0022L (least-squares fit), Ornstein-Uhlenbeck-type.
- Score-difference variance σ² = 2Dt, D_fit = 0.0363 pts²/sec vs D_ap = 0.0383 from theory D_ap = (ℓ²/(2τ))·(q/(1−q)).
- Full model: P_A = I_A − 0.152r − 0.0022Δ; P_B = I_B + 0.152r + 0.0022Δ (r = ±1 by who scored last); intrinsic strengths Bradley-Terry I_A = X_A/(X_A+X_B); team strengths ~ Gaussian(μ_X=1, σ²_X=0.0083), fit by χ² matching of 4 observables.
- Péclet number Pe = v²t/(2D) ≈ 0.55 — strength bias small vs stochastic fluctuations.

## Data sources named
Play-by-play from all 6,087 NBA games, 2006/07–2009/10 (incl. playoffs), regulation only; 20 seasons of win/loss records. Original sources basketballvalue.com and shrpsports.com are defunct/changed; reproducible from modern play-by-play. No code.

## Findings (numbers and facts, not vibes)
- q = 0.348 (same-team-scores-next); 2.0894 pts/play; 94.78 scoring plays/game.
- Restoring coefficient: −0.0022 per point of lead.
- D_fit = 0.0363 vs D_ap = 0.0383 (theory) — close agreement.
- σ²_X = 0.0083 → ~2/3 of teams within 1 ± 0.09 intrinsic strength.
- Winning team had better season record with probability 0.6777.
- Pe ≈ 0.55.
- End-of-game anomaly: last 2.5 min, score-diff distribution spikes at Δ=0 (ties more frequent — urgency/fouling).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: in-game / live modeling methodology — antipersistence is structural in football via kickoffs (expect q < 0.5 in NFL); the lead-dependent restoring force (prevent defense / garbage-time dynamics in NFL) is an estimable term currently absent from GSE's live models.
- TRUST-SIGNAL: the NFL Péclet number (strength-induced bias vs observed margin variance) is a principled ceiling diagnostic for how much any pregame rating can explain — honest calibration-expectation framing.
- COACHING: restoring-force coefficient captures late-game strategic behavior (urgency/fouling analogues = hurry-up/prevent); end-of-game anomaly has an NFL analogue (kneel-downs compressing scoring).

## Engine-actionable? (yes/no + one-line what)
Yes — estimate NFL analogues from nflverse play-by-play 2015–2024 (scoring-event rate, antipersistence q_NFL, restoring coefficient via P(next score | lead) logistic), then build the three-component live model P(next score by A) = I_A − c_1·r − c_2·Δ; accept if restoring coefficient is significant (p<0.01) with expected sign and Q1/Q2/Q3 live win-probability log-loss improves ≥0.01 over a naive pregame-only baseline.
