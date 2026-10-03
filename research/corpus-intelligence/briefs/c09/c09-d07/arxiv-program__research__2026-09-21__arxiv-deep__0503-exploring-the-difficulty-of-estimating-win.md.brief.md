# arxiv-program/research/2026-09-21/arxiv-deep/0503-exploring-the-difficulty-of-estimating-win.md
## What it is (1-2 sentences)
A simulation study (Brill, Yurko, Wyner, 2024, arXiv:2406.16171v5) diagnosing why nominal confidence intervals for win-probability (WP) models undercover, using a "random-walk football" simulator with known ground-truth WP to benchmark i.i.d., cluster, randomized-cluster, and fractional randomized-cluster bootstrap schemes. The worker ledger marked it ADOPT — game-clustered bootstrap/validation with explicitly reported interval coverage belongs in GSE's WP pipeline immediately.
## Key metrics/methods (formulas where given, else "not specified")
- Simulator: random-walk football with T = 56 plays per game, L = 4 (state-space granularity as stated); K = number of correlated plays retained per game (swept); M = 100 simulation replicates; independent test sets G = 10,000 games with K = 1; historical-mimic setting G = 4,101 games, T = 56, K = T.
- Estimator: XGBoost on (time, field position, score differential) → final win indicator.
- Bootstrap variants (B = 101 resamples, nominal 90% intervals): standard (i.i.d. play resampling), cluster (resample whole games), randomized cluster (resample random subsets of plays within games), fractional randomized cluster (keep each play with probability φ ∈ {1, 0.75, 0.5, 0.35}).
- Metric: empirical coverage of nominal 90% bootstrap intervals + mean interval width; conditional coverage binned by true WP.
## Data sources named
- Fully simulated (no real NFL data in the estimation experiments).
- Code: https://github.com/snoopryan123/fourth_down, folder `1_simulation/sim_v3` (as stated in the paper).
## Findings (numbers and facts, not vibes)
- Effective sample size (plays → independent-play equivalents): 4,101 games → 2,291 (56%); 2,050 games → 645 (31%); 8,202 games → 6,911 (84%).
- Nominal 90% bootstrap intervals (coverage ± SE, width ± SE): Standard: coverage 0.60 ± 0.01, width 0.027 ± 0.0005; Cluster: 0.71 ± 0.01, width 0.036 ± 0.0004; Randomized cluster: 0.76 ± 0.01, width 0.042 ± 0.0003.
- Fractional randomized-cluster: φ=1: 0.76 ± 0.01, width 0.042 ± 0.0003; φ=0.75: 0.80 ± 0.01, width 0.047 ± 0.0003; φ=0.5: 0.85 ± 0.01, width 0.055 ± 0.0004; φ=0.35: 0.90 ± 0.01, width 0.063 ± 0.0004.
- Paper's own caveat: even φ = 0.35 achieves only ~85% conditional coverage near WP 0.3 and 0.7 — the tails remain hard; the φ = 0.35 "solution" buys coverage with 2.3× width inflation vs standard (0.063 vs 0.027).
- Limitations: simulator is a toy (real NFL play correlation — drives, game script, personnel — is richer); only three state variables; B = 101 is small for tail-quantile estimation; true real-world WP is unobservable, so no numeric φ transfers to real data.
- Improvement experiment proposed in the file: hierarchical bootstrap — resample drives within resampled games (two-level clustering), comparing drive-nested vs game-only clustering on the coverage/width frontier.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — win-probability model uncertainty quantification / calibration methodology. Directly operationalizes the research map's "cluster uncertainty themes" alongside GSE's existing calibration stack (CQR, grouping loss, temperature scaling, LRD/ECE). No QB/coaching/OL/trust/scheme content.
## Engine-actionable? (yes/no + one-line what)
yes — replace any play-level i.i.d. bootstrap/subsampling in GSE's WP calibration with game-clustered resampling, implement φ as a tuning knob selected on nflverse 2020–2024 by empirical coverage vs width (do NOT hard-code φ = 0.35), surface WP point estimate ± cluster-bootstrap interval wherever probabilities ship, and publish the effective-sample-size ratio diagnostic in the model card.
