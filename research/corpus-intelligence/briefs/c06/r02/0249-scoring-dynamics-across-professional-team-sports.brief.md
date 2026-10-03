# arxiv-program/research/2026-09-21/arxiv-deep/0249-scoring-dynamics-across-professional-team-sports.md
## What it is (1-2 sentences)
A full-depth research note on Merritt & Clauset (2013, arXiv:1310.4461v2), the landmark cross-sport study of scoring tempo (Poisson), scoring balance, and outcome predictability in CFB, NFL, NHL, and NBA from 1.28M scoring events, proposing a lead-size-conditioned Markov chain for in-play outcome prediction. The note's verdict is ADAPT: the lead-size-conditioned scoring Markov chain is a portable, team-agnostic in-play NFL win-probability/total model, and its memorylessness finding argues against momentum-based in-game features.
## Key metrics/methods (formulas where given, else "not specified")
- Ideal-competition null: tempo ~ homogeneous Poisson with rate lambda (MLE = events/game / intervals/game); balance ~ fair Bernoulli (c=1/2); point values iid from empirical distribution.
- Balance: MLE bias c-hat = E_r/(E_r+E_b) per game; Pr(leader scores | lead size L) fit by linear least squares (slopes reported, p <= 0.1); Bradley-Terry latent-skill interpretation c = pi_r/(pi_r+pi_b).
- Inter-arrival correlation: C(n) = (sum_k (t_k - <t>)(t_{k+n} - <t>)) / sum_k (t_k - <t>)^2.
- Markov transition: P_{L,L+k} = Pr(r scores | L) * Pr(point value = k); P_{L,L-k} = (1 - Pr(r scores | L)) * Pr(point value = k); prediction = P^n * S_0 summed over L>0 (r wins), L=0 (tie), L<0 (b wins).
- Generative simulation: 2x2 tempo (Bernoulli per-second / Markov empirical gap) x balance (Bernoulli per-game c / Markov lead-size-conditioned); 100,000 simulated games per combo per sport.
- Validation: repeated random 3/4-train / 1/4-test game splits; AUC of winner predictions vs cumulative events; "leader wins" heuristic baseline; small-sample Bovada/SBR moneyline comparison.
## Data sources named
STATS LLC proprietary play-by-play scoring data (copyright 2014) — 1,279,901 scoring events across 40,813 regulation games, overtime excluded. CFB 2000-2009 (14,588 games, 120,827 events); NFL 2000-2009 (2,654 games, 19,476 events); NHL 2000-2009 (11,813 games, 44,989 events); NBA 2002-2010 (11,744 games, 1,080,285 events). Proprietary; nflverse play-by-play (1999+) is the public analogue.
## Findings (numbers and facts, not vibes)
- Tempo MLEs: NFL lambda-hat = 0.00204/s -> 7.34 events/game, 490.2 s/event; CFB 8.28 events/game, 434.8 s/event; NHL 3.81, 943.4 s/event; NBA 91.99, 31.3 s/event.
- Memorylessness: inter-arrival C(n) ~ 0 at all lags in all four sports (slight negative C at small n in CFB/NFL/NHL) — scoring events are memoryless, no momentum in timing.
- Three-phase tempo: early dip, middle stable/Poisson, end-of-period sharp spike (NHL end-game rate exceeds 3x game mean, attributed to pulled goalies).
- Lead-size scoring slopes: CFB +0.005 probability per point of lead, NFL +0.002 per point (CFB effect ~2.5x NFL); NHL positive; NBA negative (restoring force).
- Balance: CFB/NFL/NHL distributions broader than perfect-balance null (CFB > NFL); NBA narrower.
- Simulation: Markov balance reproduces empirical lead-size variance well; Markov tempo adds little over Bernoulli tempo.
- Prediction AUC: CFB/NFL >60% after one scoring event, >80% by three events; NHL ~80% after first event; NBA needs >40 events to exceed 80%. Markov chain beats "leader wins" in all sports; ~10% more accurate than SBR money lines after 20% of events (small non-systematic sample, caveated).
- Limitations: data stale (2000-2009, predates scoring surge); no team conditioning (pooled function = league-average skill shrinkage); overtime excluded; SBR comparison selective.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER (in-play engine): the Poisson-tempo + lead-size-conditioned Bernoulli balance Markov chain is a closed-form in-game WP engine GSE lacks — port as "GSE In-Play WP Baseline v1" with team-conditioned variant using pregame Elo/spread priors.
- COACHING: the three-phase tempo pattern (early dip, end-of-period spikes) quantifies clock-management regimes coaches create — usable for live-total surfaces and end-of-half content.
- TRUST-SIGNAL: the no-momentum result (C(n)~0) corroborates the MOVE-37 rejection of Koopman/DMD momentum (p=0.89) — consistent evidence against momentum features in the in-play stack.
## Engine-actionable? (yes/no + one-line what)
yes — Build the lead-size Markov chain from 2019-2024 nflverse scoring events and adopt if it beats carried-forward pregame market probability by >=0.005 Brier points over scoring events 1-5; add state-conditioned tempo (score diff x clock) for live totals.
