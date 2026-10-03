# arxiv-program/research/2026-09-21/arxiv-deep/1687-bunting-ghost-runner-causal.md
## What it is (1-2 sentences)
An observational causal study (Cummiskey, Villanti, Crofford, arXiv:2404.06587) using inverse-propensity weighting to estimate whether bunting (vs swinging away) raises the home team's win odds in tied extra innings with the ghost runner — testing if the 74%-vs-57% raw gap is real or confounded. Verdict: ADAPT as an IPW template for NFL "conventional wisdom vs data" strategy questions (fair catches, kneel-downs).
## Key metrics/methods (formulas where given, else "not specified")
- Estimand: causal odds ratio θ_BUNT = {E(Y1)/(1−E(Y1))} / {E(Y0)/(1−E(Y0))}; crude OR = same form on observed groups.
- IPW pseudo-population: treated weighted by 1/π̂(X), control by 1/(1−π̂(X)); propensity trimmed to [0.1, 0.9]; doubly-robust-flavored (outcome model also includes covariates).
- Propensity model: logistic P(bunt) on batter OPS, sac-bunt rate/100 PA, pitcher ERA.
- Assumptions: consistency (hand-audited 60 PAs pitch-by-pitch — "very few" strategy switches), exchangeability conditional on {OPS, sac rate, pitcher ERA}, positivity via trimming.
## Data sources named
Retrosheet play-by-play (via baseballr R package + Chadwick tools): first PAs of home half of tied extra-inning MLB games, 2021–2022; batter/pitcher yearly stats from the Lahman database. Public. No code stated.
## Findings (numbers and facts, not vibes)
- Raw win rates: bunt → 74% won; swing away → 57%; crude OR = 2.13 (95% CI 1.13–4.30).
- IPW-adjusted OR = 1.86 (95% CI 1.07–3.27) — bunting still significantly better after adjustment, though attenuated.
- Confounder pattern: bunters had more bunt experience; non-bunters were better hitters (higher OPS); pitcher ERA did not differ by decision.
- Bunt rate was only 21% of such PAs despite the edge; typical team gains ~2 wins/season — "worth millions in player salary."
- Context: >90% of extra-inning games end within the first 2 extra innings; <8% reach the 12th.
- Limitations: bunting skill unmeasured (key confounder); small sample (2 seasons, rare situation); no unmeasured-confounding sensitivity analysis; trimming drops the most deterministic cases so the estimand is effectively the marginal-decision effect.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: the IPW structure (propensity on player/team quality + trimmed marginal situations + consistency audit) ports directly to NFL coaching-strategy questions (fourth-down goes, punt vs go, overtime possession choices).
- OTHER: "the data says bunt" is the exact content genre for @GalaxySportsHQ — causal content beats correlational content; NGS tracking metrics (returner top-speed, coverage closing-speed) can serve as the confounders the paper's box-score stats lack.
## Engine-actionable? (yes/no + one-line what)
Yes — replicate the IPW template on nflverse 2018–2024 kickoffs to estimate the causal effect of fair-catch/touchback (vs return) on drive expected points, with Rosenbaum-style sensitivity analysis the paper lacked.
