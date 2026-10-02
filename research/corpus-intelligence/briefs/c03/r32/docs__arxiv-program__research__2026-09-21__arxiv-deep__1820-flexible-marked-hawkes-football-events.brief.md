# docs/arxiv-program/research/2026-09-21/arxiv-deep/1820-flexible-marked-hawkes-football-events.md
## What it is (1-2 sentences)
Full-text ledger read of Narayanan, Kosmidis & Dellaportas (arXiv 2103.04647v3) — a Bayesian marked spatio-temporal Hawkes-style point process for football event sequences that decouples mark excitation (what happens next) from event timing (when), validated on 2013/14 English Premier League touch-ball data. Verdict: ADAPT — a blueprint for live in-play NFL event-sequence modeling, must be re-fit to an NFL event schema.
## Key metrics/methods (formulas where given, else "not specified")
- Decoupled likelihood: L(Ftn | ζ,θ) = Πᵢ g(ti | Fti−1; ζ) f(mi | ti, Fti−1; θ) {1 − G(T | Ftn; ζ)}.
- Mark PMF from marked Hawkes intensity: f(mi | ti, Fti−1; θ) = [δmi + Σ_{tj<ti} α∗ e^{−β(ti−tj)} γ_{mj→mi}] / [1 + Σ_{tj<ti} α∗ e^{−β(ti−tj)}], α∗ = εβ/µ.
- Four mark models: Sβ (scalar decay), Vβ (mark-specific decay), Mβ (mark-pair × zone-specific decay), MβA (Mβ + team-ability ωcm in baseline-category logits). Times: mark-conditional Gamma inter-arrivals; locations: first-order Markov chain over 3 pitch zones.
- Evaluation: held-out log pointwise predictive density (lpdᶜ); ROC AUC for "≥1 Home Shot in next 30 s"; Stan NUTS (4 chains, 500 post-warmup, R̂ < 1.1).
## Data sources named
- Stratagem Technologies Ltd: all touch-ball events from 2013/14 EPL (20 teams, 380 games); 500,000+ events across 22 raw event types; prepared schema = 30 composite marks, 3 pitch zones; training 27,660 events (first 20 games), test 5 subsequent games. Code public at github.com/ForeStats/flexible-msttp-football; StatsBomb 2020/21 open data as free-data port target.
## Findings (numbers and facts, not vibes)
- Test lpdᶜ best→worst: Mβ (W=5, N=100) −21,342.57 → FOMC −21,898.31 → MSTHP −35,469.50; every excitation model beats both baselines; zone×pair-specific Mβ wins despite ~1k parameters.
- Excitation dominates: 95% HPD for exp(α) = (451.35, 642.54) — prior events carry ~500× the weight of background in the mark PMF.
- Decay discrimination: β_{Home Out Corner → Home Pass S|3} = (1.34, 2.36) vs. β_{Home Out Corner → Home Shot|3} = (0.16, 0.44) — corner→shot excitation persists longer.
- Ripley K̂(t)−2t = −1.4 to −0.9 (slightly under-dispersed vs. Poisson); MLE-fitted Hawkes ε̂ = 0.0035 ≈ 0 — the Hawkes collapses to Poisson, motivating the decoupling.
- Shot prediction AUC: MβA simulator 0.67 vs. MA-5 0.48, MA-10 0.49, MA-15 0.50; beats MA-10 in 11 of 15 Arsenal–Tottenham intervals containing an observed Home Shot.
- Home advantage lives in conversion/ability parameters, not background (constrained symmetric-background MβA test lpdᶜ −21,589.28 beats full MβA −21,599.81); Man Utd #1 in home pass-ability, drops sharply away.
- Ability ranking on 20/380 games: Man City cumulative passing #1 … West Ham #20, tracking the actual 2013/14 final table.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Mark excitation (prior plays change what happens next, ~500× background weight) maps to NFL play-sequencing/script tendencies (SCHEME).
- Team-ability parameters ωcm per event type = per-team strength rankings by play type — analogous to team offensive/defensive situational ability (COACHING).
- Home/away conversion asymmetry (not background asymmetry) is a TRUST-SIGNAL candidate for home-field modeling: separate situational conversion from base rates (TRUST-SIGNAL).
- Branching-structure recovery (which prior event "caused" the current one) gives a narrative + prop-marketing tool ("last 3 plays made a TD 2.4× more likely") (OTHER).
- Real-time forward simulation of P(turnover/TD/next-pass | history) feeds in-play pricing/CLV engines (OTHER).
## Engine-actionable? (yes/no + one-line what)
Yes — adapt the decoupled marks/times Hawkes framework to an NFL event schema (down/play-type/zone composite marks) for live in-play next-event prediction, team-ability extraction, and drive-continuation probabilities.
