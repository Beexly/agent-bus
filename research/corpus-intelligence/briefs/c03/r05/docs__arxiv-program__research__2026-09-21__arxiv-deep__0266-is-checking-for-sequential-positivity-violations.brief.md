# docs/arxiv-program/research/2026-09-21/arxiv-deep/0266-is-checking-for-sequential-positivity-violations.brief.md
## What it is (1-2 sentences)
Deep read (2026-09-21, verdict: ADAPT) of Chatton et al. (2024, arXiv:2412.10245v3) proposing sPoRT — regression trees as a nonparametric diagnostic for sequential positivity violations in longitudinal causal inference, demonstrated on an HIV-treatment cohort; GSE should run it as a pre-analysis gate before any multi-week causal analysis (e.g., the causal-injury-impact lane).
## Key metrics/methods (formulas where given, else "not specified")
- sPoRT: per treatment rule × per time point, fit regression trees predicting rule-adherence from covariate history; flag covariate-defined subgroups with estimated adherence probability < β as positivity violations; exclude subgroups with relative size < α (minimum-size guard); cap tree complexity at γ variables.
- Hyperparameters: α ∈ {0, 0.05, 0.1}; β ∈ {0.01, 0.05, 5/(√n·ln n)}; γ ∈ {2, 3, all}. Main run: α=0.05, β=5/(√n_t·ln n_t), γ=2.
- Sequential positivity assumption diagnosed: at each time t, P(follow rule at t | covariate history, followed rule so far) > 0 for all covariate strata.
## Data sources named
Clinical cohort: 2,352 HIV-positive children aged 12–59 months (South Africa, Malawi, Zimbabwe), visits at 0/1/3/6/9/12 months (1,893 in follow-up at 9 months); treatment = ART initiation (monotone); outcome = height-for-age z-score; time-varying covariates CD4 count, CD4%, weight-for-age z-score; baseline sex, age, initiation year, HAZ. Method software: R package `PoRT` + notebook at github.com/ArthurChatton/sPoRT-notebook.
## Findings (numbers and facts, not vibes)
- Main run: Rule 3 (ART when CD4 < 750 or CD4% < 25%) — 2 violations at 6 months, 13 at 9 months; Rule 4 (CD4 < 350 or CD4% < 15%) — 1 at 6 months, 7 at 9 months; no violations when pooling over time — temporal aggregation masks sequential violations. [OTHER]
- Adaptive β examples: Rule 3 n1=2060 → β=.014, n2=1346 → β=.019, n3=794 → β=.027, n4=565 → β=.033. [OTHER]
- Always/never-ART rules well-supported; CD4-threshold rules genuinely lack support in some covariate strata at later times (clinical practice deviates from rigid thresholds). [OTHER]
- No effect estimates reported — sPoRT is explicitly a diagnostic, not an estimator; no simulation validation with known ground-truth violations in the extract. [TRUST-SIGNAL]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Gap #9 (causal injury impact) is precisely a longitudinal causal problem — a player's absence unfolds over weeks with time-varying confounders (opponent strength, game script); sPoRT is the missing pre-flight support check before estimating any such multi-week effect [TRUST-SIGNAL].
- sPoRT complements the 0265 estimand-first protocol: 0265 tells you what to estimate, sPoRT tells you whether the data supports estimating it over time [OTHER].
- NFL instantiation (from the read's spec): rule "team plays without its starting QB for weeks t..t+k", time-varying covariates opponent strength/home/rest/script — violations clustering late-season vs strong opponents would force rule redefinition before estimating [QB-BEHAVIOR].
## Engine-actionable? (yes/no + one-line what)
Yes — gate every longitudinal causal analysis on sPoRT (α=0.05, β=5/(√n_t·ln n_t), γ=2–3) and report rules/hyperparameters/violations/remedy as part of the causal SOP before any multi-week effect is estimated.
