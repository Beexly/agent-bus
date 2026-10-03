# arxiv-program/research/2026-09-21/arxiv-deep/1546-predicting-cricket-outcomes-using-bayesian-priors.md
## What it is (1-2 sentences)
Ledger brief of arXiv:2203.10706 (Quazi, Clifford & Datta, 2022): opponent-specific player performance distributions (gamma, fit from matchup history) aggregated by Monte Carlo simulation into team win probabilities, case-studied on the ICC ODI World Cup 2023 and validated out-of-sample on the IPL 2020 season. Verdict ADAPT — the generative-simulation machinery is a portable template for GSE's player-level fantasy-point distributions and DFS lineup simulation; the "Bayesian" label is loose (empirical, not posterior inference).

## Key metrics/methods (formulas where given, else "not specified")
- f(x|α,β) = x^{α−1} e^{−x/β} / Γ(α) (1) — Gamma in scale parametrization; E(X) = αβ, Var(X) = αβ² (as printed).
- α = Average score / β (2); P(X > Highest score) ≤ 0.05 (3) — moment matching plus a tail constraint, framed as Bayesian-flavored empirical parameter estimation.
- β chosen from 50,000 candidates in [0.01, 5000] such that (3) holds.
- SRS: P(S) = 1/C(10,4) for subset selection; stratified SRS applied per stratum: playing XI drawn by strata (CWC: fast bowler, spinner, all-rounder-fast, all-rounder-spinner, batsman, wicket-keeper; IPL adds an overseas-player stratum capped at 4).
- Team score = sum of sampled player scores; 10,000 Monte Carlo replications per matchup; win probability = fraction of replications won.
- Worked example: Kane Williamson vs England — average 54.61, highest 118 → α = 86.68, β = 0.63.
- Coin toss ignored (predictions independent of bat-first/bat-second). Venue conditions handled only by shifting stratum inclusion probabilities (spinners up-weighted in India). No bowling-side modeling — runs conceded not simulated, only batting.

## Data sources named
- Web-scraped espncricinfo: 11,000+ individual ODI innings covering every game among ICC full members, January 1999–June 2020; 195 international players in the CWC case study; per player per opponent: batting average and highest score. Debutants covered via domestic/first-class/reserve/U19 performances.
- IPL: 130+ player profiles across 8 teams, every IPL game 2008–2019 (cricimetric.com).
- Data repo: https://github.com/mquazi/cricket_2020. No modeling code stated.
- Cited methodologically: Christensen et al. 2011 (the philosophical Bayesian framing — no actual posterior inference performed).

## Findings (numbers and facts, not vibes)
- IPL 2020 (genuine out-of-sample, predicted entirely from 2008–2019 data): first three table positions predicted with 100% accuracy, 4 of top 5 correct; title probabilities — Mumbai Indians 73%, Delhi Capitals 27% (actual final: Mumbai beat Delhi); SRH + CSK combined <1% title chance.
- CWC 2023 (prospective, unscored in the paper): India highest semifinal probability, 24% title; Pakistan 47% title conditional on reaching semifinals; South Africa 21%; Australia 8%.
- Head-to-head examples: India 89.1% vs England (actual 59.7% since 1999); Sri Lanka's simulated chances vs India/NZ/Pakistan/SA "extremely low" despite decent historical records.
- No Brier/log-loss reported; no formal benchmarks (qualitative comparison of predicted vs historical head-to-head, Tables 1 vs 2, Figure 2 with 95% CIs).
- UNCERTAIN: validation is effectively n=1 tournament; CWC 2023 predictions never scored in the paper; the 89.1% vs 59.7% India-England gap could be model signal or systematic miscalibration (unresolved without scoring rules).
- Limitations: "Bayesian" is title-only (no posterior inference — parameters from moment/tail matching); batting only (bowling/fielding absent); player independence ignores partnerships/batting order; 5% tail rule and β grid arbitrary; no baseline comparison (Elo, betting odds).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER (DFS lane / simulation program):** The opponent-specific player-distribution + Monte Carlo aggregation pattern is directly portable: per-player fantasy-point distribution (gamma or truncated normal) with parameters fit from opponent-specific history (e.g., WR yards vs coverage-shell-specific CB matchup history — the paper's one-on-one insight like Chahal vs Maxwell maps to WR-vs-CB matchup tables), stratified sampling → lineup construction under salary-cap/positional constraints (strata = QB/RB/WR/TE/DST slots), 10,000+ Monte Carlo replications per slate → distribution of lineup scores and win probability vs field; usable for GPP ownership-adjusted lineup optimization.
- **OTHER (trust-target intake / calibration):** The hard gate is that matchup-specific distributions must beat pooled (non-matchup) distributions on held-out log-likelihood by ≥3% before use — matchup conditioning is only worth it when it provably adds signal. The hierarchical upgrade (genuinely Bayesian with partial pooling across opponents, fit by MCMC in Stan/PyMC) fixes the paper's noisy small-sample point estimates per matchup — NFL matchup samples are even smaller than cricket's.
- **OTHER (calibration/sizing):** Missing proper scoring rules is the cautionary lesson — the engine version must score simulated team-total distributions against actuals (Brier, log-loss) vs an Elo baseline, which the paper never did. Also add the missing "bowling side": opponent defensive strength as a covariate on the gamma mean.
- Existing corpus has Monte Carlo game simulation in various lanes, but opponent-specific player-level distributional modeling (a gamma per player-per-matchup) aggregated to team outcomes is not inventoried — this is novel to the map.

## Engine-actionable? (yes/no + one-line what)
**Yes** — build the opponent-specific hierarchical-gamma player-distribution + 10,000-rep Monte Carlo aggregation core for NFL DFS lineup simulation, with the genuinely-Bayesian (partial pooling, MCMC) upgrade replacing the paper's moment-matching procedure; ADOPT only if matchup-specific hierarchical gamma beats pooled gamma on 2025 held-out log-likelihood by ≥3%. Effort ~1 week core, 2 weeks for the hierarchical upgrade.
