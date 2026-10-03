# arxiv-program/research/2026-09-21/arxiv-deep/1687-bunting-ghost-runner-causal.md
## What it is (1-2 sentences)
Observational causal-inference case study (Cummiskey, Villanti, Crofford, 2024, arXiv:2404.06587) estimating the causal odds ratio of bunting vs swinging away in tied extra innings with the ghost runner, via inverse-propensity-weighted logistic regression with trimming and covariate adjustment. Verdict in file: ADAPT as the template for GSE's "data vs conventional wisdom" NFL strategy content.

## Key metrics/methods (formulas where given, else "not specified")
- Estimand (causal odds ratio): θ_BUNT = {E(Y1)/(1−E(Y1))} / {E(Y0)/(1−E(Y0))}; Y1, Y0 = potential win indicators under bunt / swing away.
- Crude (confounded) OR: {E(Y|X=1)/(1−E(Y|X=1))} / {E(Y|X=0)/(1−E(Y|X=0))}.
- Propensity model: logistic regression of P(bunt) on batter OPS, sacrifice-bunt rate per 100 PA, pitcher ERA.
- Outcome model: IPW logistic regression of home-team win on bunt indicator; weights = inverse propensity score; trimmed to propensity ∈ [0.1, 0.9] (method of [6]); OPS, sac rate, ERA also entered as covariates for residual confounding (doubly-robust-flavored).
- Consistency check: BUNT_FL records only whether the PA *ended* in a fair bunt; authors hand-audited 30 bunt + 30 non-bunt PAs pitch-by-pitch and found "very few cases" of switching — violation deemed minor.
- Assumptions: consistency (audited), exchangeability conditional on {OPS, sac-bunt rate, pitcher ERA} (authors flag bunting *skill* as the key unmeasured confounder — no good metric exists), positivity (enforced by trimming).

## Data sources named
- Retrosheet play-by-play (via baseballr R package + Chadwick tools) for first PAs of home half of tied extra-inning MLB games, 2021–2022; batter/pitcher yearly stats from the Lahman database. All public.
- Code: none stated in the paper.

## Findings (numbers and facts, not vibes)
- Bunt rate: 21% of such PAs were bunts (2021–2022).
- Raw win rates: bunted → home team won in 74% of innings; swung away → 57%; crude OR = **2.13** (95% CI: 1.13, 4.30).
- IPW-adjusted OR = **1.86** (95% CI: 1.07, 3.27) — bunting still significantly better after confounding adjustment, though attenuated.
- Confounder pattern (Table 2): bunters had more bunt experience; non-bunters were better hitters (higher OPS); pitcher ERA did not differ — "the quality of the pitcher [did] not appear to impact the decision to bunt."
- Practical magnitude: a typical team would win ~2 more games/season by bunting in these spots — "worth millions in player salary."
- Context: >90% of extra-inning games end within the first 2 extra innings; <8% reach the 12th.
- Limitations: exchangeability is thin (only 3 confounders; bunting *skill* unmeasured — sac-bunt rate is a frequency proxy, not a skill metric; matchup specifics unmodeled); small sample (2 seasons of a rare situation; CI 1.07–3.27 just excludes 1); no unmeasured-confounding sensitivity analysis (no Rosenbaum bounds / E-value); IPW trimming drops the most deterministic cases, so the estimand is effectively the effect in "marginal" situations; external validity limited to ghost-runner extra innings, not regulation bunting.
- NFL analogues proposed in file: causal effect of fair-catching (vs returning) kickoffs on drive expected points; kneel-downs, fair catches, touchback decisions; ghost-runner ≈ NFL overtime-possession strategy.
- Acceptance gate in file: ADAPT the IPW template if the kickoff replication achieves |SMD| < 0.1 on all confounders, propensity AUC ≥ 0.65, and the doubly robust EP difference has 95% CI excluding 0 with |effect| ≥ 0.15 EP/drive; REJECT if CI includes 0 or the placebo punt analysis shows a "significant" effect.
- Improvement experiment: fix the unmeasured-skill confounder with Next Gen Stats tracking-derived skill proxies (returner top-speed / coverage-team closing-speed) as confounders box-score stats can't capture; run a Rosenbaum-style sensitivity analysis (Γ at which OR=1.86 breaks) to quote a robustness number alongside the headline.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **COACHING:** The IPW + trimming + doubly-robust template is directly reusable for NFL coaching-decision causal claims (fourth-down decisions, fair-catch vs return, kneel-down EP, touchback decisions) — the "conventional wisdom vs data" strategy content genre @GalaxySportsHQ runs. The confounder structure (returner quality, coverage quality DVOA-style, weather, score/time, kicker hang-time/distance) is the coaching-decision analogue of the bunt propensity model. Serves the coaching-tendencies program and content.
- **TRUST-SIGNAL:** The paper's honesty architecture is the trust playbook: explicit exchangeability caveats, consistency audit (60-PA manual review), positivity trimming that acknowledges it changes the estimand to "marginal situations," no overclaiming beyond the setting. For GSE, pairing every causal strategy claim with a Rosenbaum Γ robustness number (the improvement experiment) is a concrete trust-signal differentiator. Serves trust-target intake.
- **QB-BEHAVIOR:** QB kneel-down / end-of-game management decisions are the QB-behavioral analogue of the bunt decision — IPW causal estimates of QB-specific situational decision quality (e.g., does QB X's scramble-vs-throwaway choice gain EP?) would feed QB behavioral profiles. Secondary.
- **SCHEME:** Ghost-runner extra innings ≈ NFL overtime-possession strategy; the special-teams causal content (fair-catch recommendation feature in GSE's kickoff model) overlaps scheme-level special-teams strategy. Serves scheme program (secondary).
- **OTHER:** 1-week effort estimate for the NFL kickoff replication; placebo-test design (punts as the null-setting) is a reusable validation pattern.

## Engine-actionable? (yes/no + one-line what)
Yes — replicate the IPW template on nflverse kickoff plays 2019–2024 (fair catch vs return → drive EP, propensity logistic/GBM with [0.1, 0.9] trimming, doubly robust, |SMD| < 0.1, propensity AUC ≥ 0.65, punt placebo) as causal special-teams content plus a fair-catch recommendation feature in GSE's kickoff model, with a Rosenbaum-Γ robustness number quoted alongside the headline.
