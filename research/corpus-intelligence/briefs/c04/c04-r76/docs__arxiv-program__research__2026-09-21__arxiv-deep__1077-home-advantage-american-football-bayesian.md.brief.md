# docs/arxiv-program/research/2026-09-21/arxiv-deep/1077-home-advantage-american-football-bayesian.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2401.16392 (Benz, Bliss [NFL], Lopez [NFL]): a uniform Bayesian paired-comparison estimate of home advantage across NFL, four NCAA divisions, and all 50 states of high school football over 2004–2023 (2020 excluded), ~1.28M games, with full probabilistic time-trend inference. Verdict ADAPT: a direct blueprint for GSE's home-edge adjustment — replace the static ~3-point constant with a strength-adjusted, replay-era-aware posterior estimate.
## Key metrics/methods (formulas where given, else "not specified")
- Outcome: Y_ijkt ~ N(μ_ijkt, σ_k²) (score differential ≈ normal, citing Glickman & Stern)
- Model 1 (constant HA): μ_ijkt = θ_ikt − θ_jkt + α_k
- Model 2 (linear HA): μ_ijkt = θ_ikt − θ_jkt + β_0k + β_1k(t − t_0); P(β_1k < 0) = posterior probability of decline
- Model 3 (time-varying HA): μ_ijkt = θ_ikt − θ_jkt + γ_kt
- Priors: θ_ikt ~ N(0, ζ_k²); ζ_k, σ_k ~ HalfNormal(0, 5²); α_k ~ N(0, η_k²); β_0k, β_1k ~ N(0, λ²) with half-normal variance priors
- Model comparison: ELPD via loo() in R; 4-SE rule-of-thumb for significance; 4 chains × 2000 iterations, 500 burn-in, R-hat ≈ 1
- Supplementary Model 2H: β_1k ~ N(β_1*, λ_1²) hierarchical shared trend (over-shrinks when sample sizes differ wildly)
## Data sources named
NFL: 5,395 games / 640 team-seasons (internal NFL database; public equivalents nflfastR/nflverse). NCAA (FBS, FCS, DII, DIII): 64,345 games / 12,377 team-seasons scraped from MasseyRatings.com. High school: 1,283,531 games / 247,402 team-seasons from MaxPreps (coach-entered), in-state games only, team-seasons with ≥7 games kept 92% of teams. Team-strength estimates correlate 0.92 with MasseyRatings public ratings. Public code: https://github.com/ThompsonJamesBliss/comprehensive_survey_american_football_home_adv. (NFL authorship; replay challenge-success rate 31%→58% over sample; distance-vs-HA R²=0.016.)
## Findings (numbers and facts, not vibes)
2023 home advantage: FCS 2.49, FBS 2.39, DIII 2.37, DII 1.86 points/game; NFL 1.73 (95% CI 1.07, 2.39) — well under the folklore 3 points. HA is declining in NFL/top college: FBS β̂_1 ≈ −0.097 points/year (~1 point per decade), P(decline)=1.000; NFL β̂_1 = −0.032 points/year, P(decline)=0.857 (NFL HA down ~0.65 points over 20 years). High-school HA flat or rising (38 of 50 states positive β̂_1). Attributed drivers: replay review expansion (NFL challenge success 31%→58%; NCAA adopted replay 2004–2006; high school prohibited until 2019) and improved travel. Crucial methodological point: unadjusted empirical home-vs-away differentials are severely biased upward vs team-strength-adjusted estimates (gaps often >3 points), because better teams host more home games. Model comparison (NFL): Model 2 ΔELPD = 0 (best), Model 1 −1.31 (SE 1.75), Model 3 −4.93 (SE 4.83). Model 2H caution: all-50-state fit over-shrinks; large states (TX/CA/PA/OH, ~27% of games) dominate.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: strength-adjustment discipline — raw home win-rate differentials are contaminated by scheduling asymmetry (empirical/model gap >3 points in some leagues); any home-edge feature must be strength-adjusted
- OTHER: Bayesian HA module with linear drift as engine's live home-field term; P(β_1<0) as offseason re-baseline trigger (P(decline)>0.9 → re-baseline); replay-era indicator / officiating-crew home-bias features for the calibration layer
- OTHER: draw/pricing discipline for college lanes — cupcake-buying inflates raw home splits
## Engine-actionable? (yes/no + one-line what)
yes — Add a Bayesian paired-comparison HA module (nflverse score differentials, season-specific team strengths, linear HA drift) refit on a rolling window; feed posterior-mean HA instead of static 3; ADAPT gate: Stan refit reproduces 2023 NFL HA inside (1.07, 2.39).
