# docs/arxiv-program/research/2026-09-21/arxiv-deep/0437-competing-process-hazard-function-models-for.md
## What it is (1-2 sentences)
Deep-read ledger of Thomas, Ventura, Jensen & Ma (2012/2013), *Competing Process Hazard Function Models for Player Ratings in Ice Hockey* (arXiv:1208.0799v2): models each team's scoring as its own semi-Markov competing process with player-modulated hazards, yielding separate offensive/defensive player ratings (MESH = ω_p − δ_p) via hierarchical Laplace-Gaussian Bayes or penalized Lasso. Verdict: ADAPT — the competing-process framing ports to NFL drive outcomes (TD/FG/punt/turnover as competing risks); the NHL data and 60-processor-hour MCMC are not directly reusable.

## Key metrics/methods (formulas where given, else "not specified")
- Competing Cox processes: h(X,t) = h_0(t)·h_1(X) with flat baseline h_0(t) = 1; scoring rates λ^h = exp(r^h + Σ_p(X_p^h ω_p + X_p^a δ_p)); λ^a = exp(r^a + Σ_p(X_p^a ω_p + X_p^h δ_p))
- (ω_p, δ_p) = offensive/defensive contribution of player p (zero = average); likelihood = product of censored competing-risk likelihoods via survival functions S_h, S_a
- Laplace-Gaussian prior pdf: f(x|λ,σ²) ∝ exp(−σ²λ²/2 − λ|x| − x²/(2σ²)); partial pooling by position; Gibbs/Metropolis MCMC in R+C++ (60 processor-hours for 200k outcomes × 2600 covariates)
- Penalized MLE path: Lasso λ=8 chosen out-of-sample; pair-interaction selection λ_pair=8.5 (247 nonzero of 2000 pair params, 221 unique pairs)
- MESH = ω_p − δ_p; net goals G_net = [(exp(r_base+ω_p)−exp(r_base)) − (exp(r_base−δ_p)−exp(r_base))] × T_total,p with r_base = −7.3; rating 0.1 ≈ 0.3 goals/game differential
- DIC in/out-of-sample for prior-family comparison; posterior adequacy via simulating withheld seasons

## Data sources named
NHL shift-level data 2007-08 through 2011-12, full-strength (5v5 + goalie) only: 10,935 away goals / 1,301,799 no-goal changes / 11,981 home goals (98.27% of 1,324,715 events non-goals); shift reconstruction per Macdonald (2011); no public code link stated; supplementary ratings tables referenced but not verified present

## Findings (numbers and facts, not vibes)
- Out-of-sample doubled negative log-likelihood: Score < Team < Player models in all five seasons (e.g., total 76416 / 76397 / 76087)
- Home-ice advantage confirmed every season; scoring rates elevated (both teams) when game not tied
- Only 37 of 1,592 players have 95% CIs excluding zero for net MESH (36 positive, 1 negative — Stephane Veilleux); top: Datsyuk 0.463 (39.5% P(best center)), Crosby 0.388, H. Sedin 0.355; goalie Lundqvist 0.186; best defenseman Chara 0.077 with CI crossing zero
- Offense/defense estimates ~uncorrelated; forwards carry offensive variability; skater defensive variability << offensive (goalie absorbs defense); centers affect defense more than defensemen do
- Pair chemistry: best Boyes–McClement +0.393; worst Kovalchuk–White −0.545 (wiped out their positive individuals); Crosby–Malkin −0.283 (defensive liability together); adding pairs flips #1 from Datsyuk to Crosby
- Per-team MVP/LVP via Lasso cascade (e.g., 2011-12: Eberle EDM +0.407; Carter NJ −0.338)
- Limitations: 60 processor-hour MCMC; player ability constant over five seasons (no aging); flat baseline hazard discards within-shift dynamics; power plays excluded; team effects dropped from grand model (goalie collinearity); faceoff-specialist zone-start confounding; pair selection has no uncertainty quantification
- NFL transfer: continuous-time hazard framing is less natural for football's discrete structure, but the competing-processes idea maps to drive outcomes; ledger 0436 (Gramacy et al., fast L1 logistic) is the direct predecessor/comparator

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Competing-risk drive-outcome model (TD/FG/punt/turnover) with separate offensive (ω) and defensive (δ) player ratings — genuine alternative to nflWAR's wins-based attribution — OTHER
- Offense/defense-separated ratings directly address props questions ("which WRs beat man coverage" vs "which corners suppress") — TRUST-SIGNAL
- Pair-chemistry interactions (QB-WR, CB-WR) beyond individual ratings via penalized pair selection — COACHING, SCHEME
- Discrete-time competing risks per play + down/distance/field position as the "puck location" baseline-hazard analogue — avoids the 60-hour MCMC — OTHER
- Honest uncertainty ("mostly can't tell": only 37/1592 significant) as calibration discipline — TRUST-SIGNAL

## Engine-actionable? (yes/no + one-line what)
Yes — build NFL competing-outcome player ratings: penalized multinomial logistic on drive outcomes with 22 player-presence indicators + team-season unpenalized, elastic-net penalty tuned out-of-sample, QB-WR/CB-WR pair interactions via the penalized pair path; adopt if player-level model beats team-only baseline on 2024–2025 drive-outcome holdout log-likelihood with ≥20 stable-sign player effects (or 5 pair interactions).
