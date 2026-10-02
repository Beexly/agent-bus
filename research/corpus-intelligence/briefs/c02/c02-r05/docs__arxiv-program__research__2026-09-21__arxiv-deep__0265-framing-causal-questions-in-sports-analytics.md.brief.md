# docs/arxiv-program/research/2026-09-21/arxiv-deep/0265-framing-causal-questions-in-sports-analytics.md
## What it is (1-2 sentences)
A causal-methods tutorial (arXiv:2505.11841v2) on choosing the estimand before the estimator — ATE vs ATT vs ATNT — illustrated by estimating the causal effect of crossing (vs not crossing) on shot creation for a soccer club, with propensity-score matching, balance diagnostics, and dual standard errors as a reusable protocol.

## Key metrics/methods (formulas where given, else "not specified")
- Estimand-first framing: ATE (mean difference in potential outcomes over all units), ATT (over treated units), ATNT (over untreated units) — defined via potential-outcomes notation; identification assumptions stated explicitly: consistency, positivity (overlap), no interference (SUTVA), no unmeasured confounding (conditional exchangeability).
- Propensity score: logistic regression of treatment (cross) on 8 confounders (appendix coefficients in §7 findings).
- Estimator: nearest-neighbor matching with replacement and ties via R's `Matching` package, separately for ATE (matching both directions) and ATT (matching controls to treated).
- Balance gate: standardized mean differences (SMDs) < 10% per covariate after matching.
- Effect estimation with two standard errors: Abadie–Imbens analytic SEs and nonparametric bootstrap SEs (1,000 resamples), reported side by side.

## Data sources named
- Shandong Taishan Luneng FC (Chinese Super League), 30 matches from the 2017 season. Units: 2,225 crossing opportunities — 692 plays where a cross was attempted (treated), 1,533 where it was not (control). Outcome: binary shot occurrence. Confounders: score differential; nearest-defender distance; sender-controlled space; nearest-teammate distance; endline distance; offensive:defensive player ratio in box; player position (midfielder/defender indicators); final-ten-minutes indicator. Proprietary club data; no public download; no repo linked.

## Findings (numbers and facts, not vibes)
- [COACHING] ATE estimate 0.016; Abadie–Imbens SE 0.045; bootstrap SE 0.026 (1,000 resamples) — matched sample 3,589 vs 3,589. ATT estimate 0.050; both SEs 0.034 — matched sample 1,486 vs 1,486. Authors' interpretation: a small positive effect of crossing on shot creation that is not statistically distinguishable from zero.
- [OTHER] Pre-matching SMDs (cross vs no-cross): defender distance 70.06; controlled space 75.51; teammate distance 66.98; endline distance 102.33; player ratio 90.87 — all far above the 10% balance threshold, showing strong selection into crossing; all post-match SMDs < 10%.
- [OTHER] Appendix logistic-regression coefficients (treatment = cross): intercept −2.131; score differential −0.103; defender distance 0.309; controlled space 1.689; teammate distance 0.030; endline distance −0.125; offensive:defensive ratio 1.885; midfielder 0.537; defender 0.753; ten-minute warning 0.262.
- [COACHING] Matching with replacement heavily reuses controls — the ATE matched sample (3,589 vs 3,589) exceeds the raw sample (2,225). No placebo test or sensitivity analysis for unmeasured confounding (e.g., Rosenbaum bounds) is reported. The paper acknowledges the no-interference assumption is strained in soccer (a cross changes defensive shape for subsequent plays).
- [SCHEME] Transfer note from the file: NFL plays are discrete, which helps SUTVA relative to soccer, but NFL confounding (personnel, score, field position) is richer than 8 covariates.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: the estimand-first protocol is the template for any GSE causal question (injury impact, coaching changes, scheme shifts); the file's NFL instantiation is treatment = starting QB missing a game, outcome = offensive EPA/play, recommended estimand = ATT.
- SCHEME: crossing-effect estimation is the direct analog of scheme/tactic-choice questions (e.g., does play-action cause more yards) — define ATE/ATT before estimating.
- TRUST-SIGNAL: matching + SMD < 10% gate + dual SEs + sensitivity bounds (the paper's missing piece) as the SOP that makes causal claims GSE can defend publicly.
- OTHER: identification assumptions and no-interference caveats carry over to any observational sports analysis.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the estimand-first causal protocol (ATE/ATT choice written up front, propensity-score matching with SMD < 10% balance gate, Abadie–Imbens + bootstrap SEs, Rosenbaum/E-value sensitivity bounds added) as GSE's standard SOP for causal sports questions, first instantiation: causal impact of missing the starting QB on offensive EPA/play.
