# arxiv-program/research/2026-09-21/arxiv-deep/0653-player-kernel-team-strengths.md
## What it is (1-2 sentences)
A Gaussian-process classification framework that learns team strength via a "player kernel" relating matches through shared players (k(z,z′) = σ²z^Tz′) instead of rating teams, tested on national-team soccer matches that borrow strength from abundant club matches (Maystre, Kristof, González Ferrer, Grossglauser, 2016, arXiv:1609.01176). Ledger verdict: ADAPT — relating NFL games through shared personnel transfers to high-roster-turnover reality: early-season games, backup-QB starts, and preseason can borrow strength from other games sharing personnel.
## Key metrics/methods (formulas where given, else "not specified")
- Zermelo/Bradley-Terry as GP classification: P(u≻v) = 1/(1+exp[−(s_u−s_v)]) = 1/(1+exp(−s^T x)), s ~ N(0,σ²I) → f(x) = s^T x is a GP with k(x,x′) = σ²x^Tx′.
- Player kernel: lineup vector z ∈ R^P, z_p = +1 (winner's lineup), −1 (loser's), 0 else; k(z,z′) = σ²z^Tz′. Equivalent to a linear model with one skill parameter per player; the dual/match-space view avoids estimating P skills (P > N in all datasets).
- Draws via Rao-Kupper: P(u≻v) = 1/(1+exp[f(x)−α]), P(draw) = (e^{2α}−1)P(u≻v)P(v≻u).
- Metric: average log loss −(1/T)Σ [1{y_i=W}log p_i^W + 1{y_i=D}log p_i^D + 1{y_i=L}log p_i^L].
- Inference: GPy, Laplace/EP-style GP classification; 1 min (2008) to 17 min (2016) runtime.
- NFL adaptation proposed: z_p = snap share (signed by outcome) → k(z,z′) = σ²z^Tz′; multiply by time-decay k_time(d,d′) = exp(−|d−d′|/τ) (the authors' flagged future work).
## Data sources named
National-team matches (official + friendlies) and top European club competitions from 2006-07-01. Euro 2008: N=4,390 training matches, P=7,875 players, T=31 test; Euro 2012: N=15,594, P=21,735, T=31; Euro 2016: N=24,887, P=33,157, T=51. Lineups: starting XIs announced pre-match; home indicator feature. Baselines: Elo-rating Rao-Kupper (eloratings.net), average of 3 bookmakers' odds, uniform random. Club data ~15× more abundant than national-team data.
## Findings (numbers and facts, not vibes)
- Euro 2008: PlayerKern 0.969 vs Elo 0.910 vs Odds 0.979 vs Random 1.099 (log loss).
- Euro 2012: PlayerKern 0.939 vs Elo 1.003 vs Odds 0.953 vs Random 1.099.
- Euro 2016: PlayerKern 1.067 vs Elo 1.102 vs Odds 1.020 vs Random 1.099.
- Competitive with betting odds in 2008/2012; slightly worse in 2016 (a less predictable tournament overall). More CONSISTENT than Elo across tournaments (Elo: 0.910 → 1.003 → 1.102) — the uncertainty quantification pays off.
- Kernel heatmap: national-team matches show non-zero covariance with club matches of all competitions — the transfer channel is real.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Personnel-aware ratings for backup-QB / injury spots (relate a backup's starts through his own shared personnel, not the team label): QB-BEHAVIOR
- Early-season cold-start ratings via prior-season games sharing retained personnel: OTHER
- Coaching-change teams rated through retained players, not franchise label: COACHING
- Uncertainty-quantified strength distributions feeding pick-confidence and Kelly sizing: TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL player-kernel GP (snap-share-signed lineup vectors × exponential time decay) on nflverse 2015+ as a personnel-aware rating overlay; ADOPT if it beats team ratings by ≥0.02 log-loss in Weeks 1–4 or by ≥0.03 on backup-QB-start subsets (medium effort).
