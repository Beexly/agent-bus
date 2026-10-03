# arxiv-program/research/2026-09-21/arxiv-deep/0552-empirical-parameterization-of-the-elo-rating.md
## What it is (1-2 sentences)
Deep-read note on arXiv:2512.18013v1 (Maitra et al. 2026) proposing a data-driven Elo tuning protocol: enumerate candidate experience-based K-factor schedules and game-count cutoffs, compute rating histories under each, and select the configuration maximizing a rating-difference classifier's accuracy/F1.
## Key metrics/methods (formulas where given, else "not specified")
- Expected score (verbatim): E_A = 1/(1 + 10^{(R_B − R_A)/400}) (logistic performance distribution assumption; D=400 deliberately not tuned)
- Update (verbatim): R' = R + K_i(S − E), S ∈ {1, 0} (win/loss; draws not discussed)
- K-function eq. 1 (verbatim): K_i = K_a if n_i ≤ n_{c1}; K_b if n_{c1} < n_i ≤ n_{c2}; K_c if n_i > n_{c2}, n_i = games played
- Fitted K schedule (as tuned): K_i = 60 if n_i ≤ 5; 30 if 5 < n_i ≤ 10; 16 if n_i > 10
- Tuner: logistic regression P(Player 1 wins) = σ(β_0 + β_1 · (R_1 − R_2)); real-data fit: β_0 = −0.0623 (se 0.001), β_1 = 0.0046 (se 9.49e-06), t = 489.545; simulated-data fit: β_0 = −0.1298 (se 0.008), β_1 = 0.0056 (se 2.56e-05), t = 219.460; all p ≈ 0.000 per the paper
- Candidate space: K triples {(60,30,16) [online-chess baseline], (30,30,30) [constant-K control], (30,16,8) [stability], (100,50,25) [responsiveness]} × cutoff pairs {(5,10), ([q10]+1,[q25]+1), ([q25]+1,[q50]+1)} (q_k = game-count distribution percentiles); selection by classification F1/accuracy
## Data sources named
- Simulated: 184,000 games between 7 bots/strategy profiles (3-dice, 2-player Ludo, Wowzy platform rules)
- Real: 320,978 players, 4,640,765 games over 2.5 months in 2024, from Games24x7 (proprietary; early post-release, skill levels unstabilized)
- Cited premise: Hvattum & Arntzen 2010 (rating difference as sufficient statistic for win probability, football)
## Findings (numbers and facts, not vibes)
- Table 1 (real data, logistic-regression F1 by config): (60,30,16)/(5,10): 0.554; (30,30,30)/(5,10): 0.548; (30,16,8)/(5,10): 0.554; (100,50,25)/(5,10): 0.548; quantile cutoffs give 0.548–0.554 across all configs — four configs tie at the top; authors "randomly" pick (60,30,16) with cutoffs (5,10)
- Simulated data with chosen config: F1 = 0.87 (vs 0.554 real)
- Rating distribution on real data (Table 3): min 776, 10% 977, 25% 1028, median 1094, mean 1096, 75% 1162, 90% 1216, max 1452 — near-symmetric, bell-shaped around initial 1000
- Accuracy-vs-rating-difference curve: gaps 0–30 → ~52% accuracy (near random); accuracy and F1 rise monotonically with larger gaps
- Adversarial flags: tuner fit AND evaluated in-sample (data snooping by construction); F1 differences 0.548 vs 0.554 likely within noise; selection among ties "random" is unprincipled; no CV or walk-forward; Ludo is high-luck (external validity asserted via one football citation); game-count K conflates learning with certainty (Glicko RD more principled); real-data noise sources unmodeled
- Verdict: ADAPT (the tuning protocol, not the Ludo numbers)
- Gate: adopt empirically tuned K/config if walk-forward Brier on 2016–2025 improves on convention Elo (K=16, D=400) by ≥ 0.002 AND empirical expected-score map is monotone and within ±3pp of theoretical curve across rating diffs; REJECT otherwise
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (rating-layer program): The tuning *protocol* — grid-search the K-function by maximizing out-of-sample accuracy of a rating-difference classifier — ports directly to GSE's NFL Elo-family ratings (walk-forward on nflverse 2016–2025, proper Brier scoring instead of F1, fixing the paper's in-sample flaw). ~1 day effort.
- OTHER (calibration): The empirical expected-score map (fitted logistic of win on rating difference) replaces the theoretical 400-divisor curve if it wins — a data-learned rating→probability map that composes with paper 0531's isotonic link (parametric fitted alternative vs nonparametric).
- COACHING: UNCERTAIN — the experience-based K bins (game-count decay) are Ludo-specific; the proposed NFL adaptation (rookie-QB starts, coach tenure as K-scheduling bins) is speculative. The sharper hypothesis: K as a function of rating *uncertainty* (Glicko-style RD) adapts faster to regime changes (new QB, coaching change) than game-count decay — this is the improvement experiment, untested.
- TRUST-SIGNAL: UNCERTAIN — accuracy 0.554 barely above chance; the rating system "works" mainly on simulated bots. Empirical tuning of a team's rating update rate is an input to trust modeling (how fast should we update beliefs about a team?), but the paper gives no evidence the tuned K generalizes.
- SCHEME: Not applicable — no game-content features used.
## Engine-actionable? (yes/no + one-line what)
yes — Run the walk-forward Elo K/config tuner on nflverse 1999–2025 (ratings through season t, predict t+1, Brier on 2016–2025), adopting only if it beats convention Elo by ≥0.002 Brier with a monotone empirical win-prob map.
