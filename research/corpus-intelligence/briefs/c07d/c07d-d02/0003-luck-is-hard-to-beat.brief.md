# arxiv-program/research/2026-09-21/arxiv-deep/0003-luck-is-hard-to-beat.md
## What it is (1-2 sentences)
Deep-read ledger entry for arXiv:1706.02447v1 (Aoki, Assunção, Vaz de Melo 2017, "Luck is Hard to Beat: The Difficulty of Sports Prediction"), read from the full PDF on 2026-09-21. It evaluates the paper's skill-coefficient null diagnostic for skill-vs-luck in sports standings plus its NBA roster-feature Bayesian prediction model, with verdict **ADAPT** — take the schedule-preserving random null as an engine diagnostic, reject the NBA roster model.

## Key metrics/methods (formulas where given, else "not specified")
Formulas (copied verbatim from the ledger):

- `φ = (s² − σ²_{2k}) / s²`
  - s² = observed variance of season-end standings scores; σ²_{2k} = expected standings variance under a Monte Carlo null that replays the actual schedule with outcomes drawn from the observed home/tie/away frequencies. φ ranges over (−∞, 1]; φ ≈ 0 means standings variance is fully explained by chance given the schedule; the 95% null interval comes from the 2.5th/97.5th percentiles of the Monte Carlo replicates.
- `Y_k ~ Poisson(N_k · α_{h(k)} / (α_{h(k)} + α_{a(k)}) + ε_k)`
  - NBA Bayesian skill model: Bradley-Terry adapted with a Poisson score likelihood and per-game random effects. h(k), a(k) = home/away team in game k.
- `log α_i = wᵀx_i`
  - Team skill as a linear function of roster features, Gaussian priors on w and ε, Gamma hyperpriors on precisions, Metropolis-Hastings inference (10,000 iterations, 2,000 burn-in, mean acceptance rate 0.395, SD 0.02). Model selection by DIC.

## Data sources named
- BetExplorer (public website, scraped — per the ledger, no longer straightforwardly scrapable under current ToS; treat as reconstructable but not downloadable). Cross-sport standings: 270,713 matches, 1,503 seasons, 198 leagues, 84 countries, January 2007–July 2016.
- Basketball Reference (public). NBA feature data: players, teams, salaries, PER since 2004.
- No code repository, no dataset download published with the paper.
- Downstream/rebuild sources named in the implementation spec: nflverse play-by-play/schedules (NFL regular seasons 2002–2025 for φ port; 2010–2025 for the reproducible test), nflverse + cap data (for any NFL roster-quality modeling).

## Findings (numbers and facts, not vibes)
- Cross-sport corpus: 270,713 matches; 1,503 seasons; 198 leagues; 84 countries; Jan 2007–Jul 2016. Sport breakdown: basketball 42 leagues / 310 seasons; volleyball 51 / 328; handball 25 / 234; soccer 80 / 631.
- Skill-domination classification: basketball — all seasons skill-dominated; volleyball — 99.39% of seasons skill-dominated. Pure-luck-compatible seasons: handball 17.95%, soccer 7.13%.
- Average team-removal fraction to reach the random interval: basketball 50%; volleyball 40%; handball 14%; soccer 19%/20% (both values appear in different passages of the paper — preserved as stated; UNCERTAIN which is authoritative).
- NBA: requires 17–25 of 30 teams removed before standings look random.
- Skill coefficients (φ): NBA φ > 0.95; English Premier League ≈ 0.77; Primera División 0.80; Série A 0.63; Algerian Division 1 2014–15: φ = −1.93 (negative — standings less dispersed than the random null; paper reports it without mechanism).
- Average correlation between estimated NBA skill and regular-season wins: 0.7399 — the ledger flags this as circular (wins are the fitting target), not validation.
- MCMC diagnostics: 10,000 iterations, 2,000 burn-in, mean acceptance rate 0.395, SD 0.02.
- Underdog win probabilities, 2012–2016 mean: P(U) = 0.36; away underdog 0.27; home underdog 0.45; away underdog vs removed elite team 0.19; home underdog vs removed elite team 0.17.
- NBA model features (exact list): conference, top-five salary average, salaries 6–10, salary SD, average PER, team volatility, roster aggregate volatility, inexperience, roster coherence, roster size. Target: per-game score Y_k (Poisson likelihood); prediction horizon single games; skill coefficient horizon full seasons.
- Leakage/limitations flagged in the ledger: (1) φ is excess standings variance, not causal skill — unbalanced schedules, mid-season roster changes, tanking inflate φ; the null pools home/tie/away rates across teams and the season, so team-specific home advantage gets mislabeled as skill. (2) Team-removal is circular/selection-biased — it always terminates, and "50% of basketball teams removed" is a property of the procedure as much as the sport; REJECT any use. (3) NBA model validation is in-sample — no held-out log-loss, Brier, or comparison vs Elo/market odds; DIC is in-sample model selection; a model that can't beat a 2017 Elo on held-out games is not a predictor. (4) Poisson approximation questionable — poor for soccer's low scores; same machinery applied across sports with very different scoring scales. (5) Dated features — NBA salary/PER 2004–2016 predates the supermax era and modern cap dynamics; "roster coherence" and "inexperience" are hand-built features not defined precisely enough to reimplement; nothing ports to the NFL without a full rebuild. (6) Negative φ (−1.93) unexplained — a metric that can go deeply negative without mechanism is hard to trust at face value. (7) Independence assumption — rest days, back-to-backs, travel, within-season momentum all in the error term. (8) Season-length confound — NFL's 17-game season vs NBA's 82 games means φ mechanically looks more luck-like; the paper's cross-sport ranking (basketball most skill-dominated) partly reflects season length, which the paper does not adjust for.
- Verdict: ADAPT the φ null as a GSE regime diagnostic (1–2 days effort for an NFL φ pipeline from nflverse; Monte Carlo trivially parallelizable). REJECT the NBA roster/salary model outright (in-sample, dated, beaten in principle by any held-out-validated Elo). REJECT the team-removal procedure (circular).
- Acceptance gate (verbatim conditions): ADAPT φ if (a) the nflverse pipeline reproduces qualitative behavior — median NFL φ in (0.3, 0.95) with < 10% of seasons falling outside (−0.5, 1.0) — and (b) season-ahead engine log-loss correlates positively with (1 − φ) across 2010–2025 seasons (Spearman ρ > 0.3, p < 0.10), confirming φ measures the engine's irreducible error floor.
- Reproducible test: nflverse, NFL regular seasons 2010–2025, φ per season via schedule-preserving null (10,000 replicates, 95% interval from 2.5th/97.5th percentiles); test whether φ is systematically lower in the 17-game era (2021–2025) than the 16-game era (2010–2020) — metric: mean φ per era with bootstrap CIs. Success criterion: pipeline reproduces sensible φ (0 < φ < 1 for typical seasons) and the era contrast goes in the predicted direction.
- Improvement experiment: (1) replace pooled home/tie/away null with a team-specific null (each team's own historical home/away rates) plus a rest-adjusted null (back-to-back/travel penalties) — the pooled-vs-team-specific φ gap quantifies how much "skill" was really schedule/home-advantage heterogeneity; (2) run φ on point-differential variance rather than win-total variance and compare engine MSE to null-expected MSE — the ratio is a cleaner "skill vs luck" number than φ because it benchmarks GSE against chance rather than standings against chance; if the ratio is near 1, the engine isn't beating the schedule-aware null and modeling effort belongs elsewhere (e.g., in-game markets).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration/sizing program) — This is the core connection. φ measures outcome irreducibility — the floor below which no predictor can go given the schedule — which complements GSE's probability-quality calibration lane (CQR, ECE-by-slice): calibration measures how honest our probabilities are; φ measures how much of the season outcome was knowable at all. The mechanism: use φ as an engine regime indicator for bankroll management — in low-φ seasons the engine's error floor is higher and Kelly stakes should shrink; in high-φ seasons the signal-to-noise justifies more aggression. Gate condition is explicit: Spearman ρ > 0.3 (p < 0.10) between season-ahead engine log-loss and (1 − φ) across 2010–2025.
- OTHER (tracking lane) — The NFL φ pipeline (nflverse schedules + scores, 10,000 Monte Carlo replicates per season, 95% null interval) is a candidate permanent diagnostic: track φ per season and watch for regime shifts, e.g., the 17-game-era contrast test (2021–2025 vs 2010–2020) the ledger proposes with bootstrap CIs.
- OTHER (scheme program) — The underdog probability baselines (away underdog 0.27, home underdog 0.45, vs removed elite 0.19/0.17 for NBA) are league-comparison anchors, not NFL numbers; do not port them, but they suggest computing the analogous NFL schedule-preserving underdog baselines as sanity checks on engine moneyline probabilities.
- No QB-BEHAVIOR, COACHING, OL, or TRUST-SIGNAL connections — the paper has no QB-specific, coaching-tendency, offensive-line, or target-trust content.
- CONTRADICTION / tension note: the paper's headline claim that basketball is the most skill-dominated sport contradicts nothing in GSE directly, but it is confounded by season length (82 vs 17 games) per the ledger — any GSE use of cross-sport φ comparisons must normalize for season length first, or it will mechanically rank NFL as luck-heavy.
- UNCERTAIN: soccer team-removal fraction appears as both 19% and 20% in different passages of the paper; the ledger preserves both rather than adjudicating.
- UNCERTAIN: the mechanism behind Algerian Division 1 2014–15 φ = −1.93 (standings less dispersed than chance) is unaddressed by the paper — possible drawishness, collusion-avoidance, or schedule artifacts; negative φ needs a mechanism before φ is trusted as a standalone metric.

## Engine-actionable? (yes/no + one-line what)
Yes — port the schedule-preserving φ null to the NFL (nflverse, ~1–2 days, trivially parallelizable 10,000-replicate Monte Carlo) and use φ as a regime indicator that scales Kelly stakes by irreducible noise; accept only if season-ahead engine log-loss correlates with (1 − φ) at Spearman ρ > 0.3, p < 0.10.

## Referenced files / papers / datasets
- arXiv:1706.02447v1 — Raquel Y. S. Aoki, Renato Assunção, Pedro O. S. Vaz de Melo (2017), *Luck is Hard to Beat: The Difficulty of Sports Prediction*. URL: https://arxiv.org/abs/1706.02447v1
- "Paper 0004" — referenced in the GSE overlap section as containing an EPL unpredictability discussion (not otherwise identified in this file)
- BetExplorer (cross-sport standings source; reconstructable but not downloadable per current ToS)
- Basketball Reference (NBA players/teams/salaries/PER since 2004)
- nflverse play-by-play/schedules (proposed NFL φ pipeline, 2002–2025; reproducible test 2010–2025)
- nflverse + cap data (proposed alternative for any NFL roster-quality modeling)
