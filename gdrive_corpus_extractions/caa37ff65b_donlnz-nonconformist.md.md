---
source: "donlnz-nonconformist.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4564
---

<NATIVE_REASONING>
The user wants me to process a source document about a GitHub repository called "donlnz/nonconformist" which is an early Python implementation of conformal prediction. They want me to follow strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios, must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes, cite [PAGE N] markers and verbatim quotes when source pages are provided
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words)</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions</RLVR_COUNTERFACTUAL_VETOES>

The source text provided is 1 page (PAGES: 1). I need to cite [PAGE 1] markers and use verbatim quotes from the source text.

Key content from source:
- Early Python implementation of full conformal prediction framework (Vovk/Gammerman/Shafer)
- scikit-learn extension: inductive conformal predictors, cross-conformal variants, Venn predictors on roadmap
- sklearn estimator + numpy/scipy + calibration split. pip-installable.
- MIT license, stale — last push 2021-03, API docs "severely deprecated" per its own README, tested under Python 3.5-era stack
- TODO list (Venn predictors, Venn-ABERS, exchangeability testing) never finished — those unfinished items are exactly what crepes and MAPIE now do
- GSE lens: Historically important, functionally superseded. Unfinished roadmap is checklist for t10-conformal track: exchangeability testing (→ crepes martingales / MAPIE tests), Venn-ABERS predictors (multiprobabilistic outputs — future refusal-threshold input). Nothing to wire here; treat as "don't be this" example of conformal implementation without drift detection.
- Verdict: IGNORE — superseded by crepes and MAPIE on every axis that matters. (MIT.)
- 4 tricks: Codewiki, Diagram, Star history (479 stars, flat since 2021), Open in browser IDE

I need to write >=1000 words total across sections. THINK_TRACE needs >=400 words alone.

I must avoid betting lines entirely. This is about conformal prediction, statistical frameworks, not sports betting specifically (though user mentions "Sports-deploy-fix" path, but source is about ML conformal prediction). I should not invent betting content.

Let me draft each section carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need to discuss conformal prediction theory, exchangeability, conformal p-values, nonconformity scores, calibration split, inductive vs transductive vs cross-conformal, Venn predictors, Venn-Abers, martingales for exchangeability testing, drift detection, why nonconformist is superseded by crepes/MAPIE. Gray zones: Python 3.5-era stack, deprecated API, unfinished roadmap, no drift detection, flat star history since 2021, MIT license but stale. Multi-hop: Vovk/Gammerman/Shafer → inductive conformal → scikit-learn → calibration split → exchangeability → Venn-Abers → crepes/MAPIE → refusal thresholds → drift detection. Cite [PAGE 1].

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations for conformal prediction. Nonconformity score A_i, calibration scores, p-value formula: p_{n+1} = (1 + #{i: A_i >= A_{n+1}}) / (n+1) or similar. Validity under exchangeability. Coverage guarantee: P(Y_{n+1} in C(X_{n+1})) >= 1 - alpha. Split conformal: calibration set size n_c, quantile at level ceil((n_c+1)(1-alpha))/n_c. Venn predictor: multiprobabilistic, probability trees. Venn-Abers: isotonic regression + sigmoid, calibrates classifier probabilities. Breakdown regimes: exchangeability violation, covariate shift, non-iid calibration/test, small calibration sample, ties in scores, discretization of p-values, Python 3.5 dependency rot. SI/information/probability units: probabilities dimensionless [0,1], coverage 1-alpha, alpha in [0,1], sample sizes dimensionless counts, p-values in [0,1], nonconformity scores in R (or metric space units). Cite [PAGE 1] for quotes about stale, deprecated, unfinished TODO, crepes/MAPIE.

RETROCAUSAL_GENEALOGY: Historical lineage: Vovk, Gammerman, Shafer (2005) Algorithmic Learning in a Random World; inductive conformal prediction (Papadopoulos et al.); cross-conformal; Venn predictors (Vovk & Petechenko?); Venn-Abers (Bostrom & Kalnish? or Lei & Wasserman? Actually Venn-Abers by Bostrom, Kalnish, et al.); scikit-learn extensions: nonconformist (donlnz), MAPIE (scikit-learn-contrib), crepes (README? French library?). Multi-week traps: stale repo appearing relevant but abandoned; confusing stars with maintenance; MIT license implying safe to use despite bit rot; assuming "early implementation" means foundational rather than superseded; roadmap items being done elsewhere. Multi-week: if a team spends weeks wiring nonconformist, they drift from production-ready conformal with drift detection; trap is adopting unfinished Venn-ABERS as refusal-threshold input without exchangeability tests.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under pressure, teams revert to familiar scikit-learn wrappers and old GitHub stars as proxy for quality; counter-trap: auditing dependency dates, README deprecation warnings, comparing feature parity with crepes/MAPIE; clock: last push 2021-03, Python 3.5-era stack means security/dependency EOL, clock is ticking on importability. Recursive ToM: the repo author likely abandoned because crepes/MAPIE absorbed the niche; downstream users modeling author intent as "stable" when it's "abandoned"; second-order: GSE label "don't be this" should propagate to avoid building conformal without drift detection.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof — this seems odd for an ML repo, but I need to interpret cross-layer: data layer (exchangeability), compute layer (Python 3.5, numpy/scipy versions), deployment layer (drift detection absence), physical layer if sensor data used (weather/biomechanical inputs affecting iid assumption). Veto proof: if calibration and deployment distributions differ (covariate shift), coverage guarantee vetoed; if non-iid time-series data (weather, biomechanics), exchangeability vetoed; if Python 3.5 dependencies unavailable, install vetoed; if no drift detection, production drift vetoed. Use formal language: veto condition V = 1 if exchangeability fails or coverage < 1-alpha empirically.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning via Verifiable Rewards?) veto scenarios + predictions. Need 3 scenarios where RLVR would veto using nonconformist. E.g.:
1. Scenario: Deploy nonconformist on temporal sensor data with autocorrelation. Verifiable test: exchangeability martingale test (crepes/MAPIE) rejects null at p<0.05. Prediction: coverage falls below nominal 1-alpha, RLVR veto triggers, switch to MAPIE with drift detection.
2. Scenario: Python environment upgrades beyond 3.5; nonconformist import fails due to deprecated numpy/scipy API. Verifiable: pip install fails or AttributeError on np.float etc. Prediction: RLVR veto blocks pipeline; crepes/MAPIE install succeeds.
3. Scenario: Need refusal-threshold input from Venn-ABERS multiprobabilistic outputs. Verifiable: nonconformist lacks Venn-ABERS (per README TODO), crepes/MAPIE provide calibrated probability outputs. Prediction: RLVR veto denies nonconformist selection; requirement routes to MAPIE.

Need to ensure word count >=1000 across sections, THINK_TRACE >=400.

No betting lines.

Let me write carefully, integrating [PAGE 1] citations and verbatim quotes.

Verbatim quotes to use:
- "One of the earliest Python implementations of the full conformal prediction framework (Vovk/Gammerman/Shafer), designed as a scikit-learn extension: inductive conformal predictors, cross-conformal variants, Venn predictors on the roadmap." [PAGE 1]
- "sklearn estimator + numpy/scipy + a calibration split. pip-installable." [PAGE 1]
- "License: MIT, but **stale — last push 2021-03**, API docs "severely deprecated" per its own README, tested under Python 3.5-era stack." [PAGE 1]
- "The TODO list (Venn predictors, Venn-ABERS, exchangeability testing) was never finished — and those unfinished items are exactly what crepes and MAPIE now do." [PAGE 1]
- "Historically important, functionally superseded. Its unfinished roadmap is a useful checklist for what the t10-conformal track must cover: exchangeability testing (→ crepes martingales / MAPIE tests), Venn-ABERS predictors (multiprobabilistic outputs — a future refusal-threshold input). Nothing to wire here; treat it as the "don't be this" example of a conformal implementation without drift detection." [PAGE 1]
- "**IGNORE** — superseded by crepes and MAPIE on every axis that matters. (MIT.)" [PAGE 1]
- "(479 stars, flat since 2021)" [PAGE 1]

Now equations. Formal conformal prediction:

Let z_i = (x_i, y_i) for i=1..n be exchangeable. Nonconformity measure A: (z_1,...,z_n, z) -> R. Scores α_i = A((z_1,...,z_{i-1}, z_{i+1},...,z_n), z_i) or for inductive conformal, train on proper training set, compute scores on calibration set {z_{n_1+1},...,z_n}. For test x_{n+1}, for each candidate y, compute score α_{n+1}(y) = A({(x_i,y_i)}_cal, (x_{n+1},y)). p-value:

p_{n+1}(y) = (1 + #{i: α_i ≥ α_{n+1}(y)}) / (n_cal + 1)

Prediction region C(x_{n+1}) = {y : p_{n+1}(y) > α} where α is significance level (avoid confusion with score alpha; use ε for significance). Coverage: P(Y_{n+1} ∈ C(X_{n+1})) ≥ 1 - ε under exchangeability.

Split conformal quantile: Q_{1-ε} of calibration scores with correction: q = Quantile({α_i}, level = ceil((n_cal+1)(1-ε))/n_cal).

Venn predictor: for each candidate label y, train on calibration ∪ {(x_{n+1},y)} and compute likelihood ratio; outputs multiprobability (p^0, p^1) for binary, set of probability distributions.

Venn-Abers: isotonic regression on scores, then Platt-like sigmoid calibration; outputs calibrated probability and validity under certain conditions.

Breakdown: exchangeability violation → validity not guaranteed; small n_cal → discretization error O(1/n_cal); covariate shift → coverage degrades; ties → conservative or anti-conservative depending on tie-handling; Python 3.5 EOL → runtime failure.

Units: probabilities dimensionless in [0,1], ε ∈ (0,1), n_cal ∈ ℕ, scores in nonconformity units (depends on A, e.g., |y - ŷ| for regression in target units), coverage dimensionless percentage.

Now write the response. Must be purely in the XML sections? The user says "across these exact XML sections". So output should contain these sections. I can include an intro? Probably best to just output the sections to be safe, but maybe a brief preamble is okay. However the user specified exact XML sections. I'll output only the sections to strictly comply. But maybe I need to ensure >=1000 words across them. Let's make THINK_TRACE long (~500 words), SOURCE_OPERATORS_AND_EQUATIONS ~300, RETROCAUSAL_GENEALOGY ~250, RECURSIVE_THEORY_OF_MIND ~200, CROSS_LAYER_VETO_ADJUDICATION ~200, RLVR_COUNTERFACTUAL_VETOES ~200. Total ~1650 words. Good.

Need to ensure no markdown heading outside? Fine.

Let's draft.

THINK_TRACE content:
Start by noting source is 1 page [PAGE 1]. Multi-hop derivation: Vovk/Gammerman/Shafer framework -> inductive conformal -> scikit-learn extension -> calibration split -> exchangeability -> p-values -> coverage. Then gray-zone audit: MIT license but stale; last push 2021-03; Python 3.5-era stack; API docs "severely deprecated"; stars flat since 2021 (479). Unfinished TODO: Venn predictors, Venn-ABERS, exchangeability testing — exactly what crepes and MAPIE now do. The GSE lens says treat as "don't be this" example without drift detection. Gray zones: license does not imply maintenance; star count is not a health metric; "earliest implementation" does not imply correctness; missing drift detection means coverage guarantee is vacuous under distribution shift. Multi-hop: exchangeability testing → crepes martingales / MAPIE tests; Venn-ABERS multiprobabilistic outputs → refusal-threshold input; nothing to wire. Verdict IGNORE. Word count check: need >=400. I'll write substantial.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX.

Let's write equations clearly.

Let \mathcal{D}_{\text{cal}} = \{(x_i, y_i)\}_{i=1}^{n_{\text{cal}}} be exchangeable calibration sample. Nonconconformity score \alpha_i = A(\mathcal{D}_{\text{train}}, (x_i, y_i)) \in \mathbb{R}. For test point x_{n+1} and candidate y \in \mathcal{Y}, \alpha_{n+1}(y) = A(\mathcal{D}_{\text{train}}, (x_{n+1}, y)). Conformal p-value:

p_{n+1}(y) = \frac{1 + \sum_{i=1}^{n_{\text{cal}}} \mathbf{1}\{\alpha_i \ge \alpha_{n+1}(y)\}}{n_{\text{cal}} + 1} \in [0,1].

Prediction set at significance \varepsilon \in (0,1):

C(x_{n+1}) = \{ y \in \mathcal{Y} : p_{n+1}(y) > \varepsilon \}.

Validity theorem: if (z_1,...,z_{n_{\text{cal}}+1}) are exchangeable, then

\Pr\{ Y_{n+1} \in C(X_{n+1}) \} \ge 1 - \varepsilon.

Split-conformal quantile correction:

q_{1-\varepsilon} = \text{Quantile}\left(\{\alpha_i\}_{i=1}^{n_{\text{cal}}}, \frac{\lceil (n_{\text{cal}}+1)(1-\varepsilon) \rceil}{n_{\text{cal}}}\right).

C(x_{n+1}) = \{ y : \alpha_{n+1}(y) \le q_{1-\varepsilon} \}.

Venn predictor outputs multiprobabilistic vector \mathbf{p}(x_{n+1}) = (P^{y_1},...,P^{y_K}) across label candidates; Venn-ABERS composes isotonic regression on score ranks then sigmoid calibration to map scores to calibrated probabilities in [0,1].

Breakdown/singularity regimes: (1) Exchangeability violation: coverage bound collapses; no finite-sample guarantee. (2) Small calibration: discretization granularity \Delta p = 1/(n_{\text{cal}}+1); if n_{\text{cal}} < 1/\varepsilon, cannot achieve target. (3) Ties in \alpha_i: conservative if \ge used, anti-conservative if > used without randomization. (4) Covariate shift / concept drift: marginal validity does not imply conditional coverage. (5) Python 3.5-era stack + deprecated NumPy/SciPy API: import/runtime singularity; dependency rot. Cite [PAGE 1] for stale/deprecated/quoted claims.

RETROCAUSAL_GENEALOGY: Lineage: Vovk, Gammerman, Shafer (2005) "Algorithmic Learning in a Random World"; Papadopoulos et al. inductive conformal; Vovk & Petechenko Venn predictors; Venn-Abers calibrated probability; scikit-learn ecosystem: donlnz/nonconformist (earliest, 2021-03 last push, 479 stars flat), MAPIE (scikit-learn-contrib), crepes. Multi-week traps: treating MIT license + 479 stars as production readiness; assuming "earliest" = "foundational" and wiring it in; delaying exchangeability testing because roadmap says Venn predictors "on the roadmap"; using unfinished Venn-ABERS as refusal-threshold input without martingale tests; ignoring drift detection. Multi-week consequence: 2-4 weeks sunk into a deprecated shim, then migration to crepes/MAPIE anyway.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under deadline pressure, engineers reach for pip-installable sklearn extension with familiar API; recursive modeling: they assume the author intended long-term maintenance because repo is public and MIT; but last push 2021-03 and README deprecation signal abandonment. Counter-trap: GSE label explicitly says "don't be this"; compare feature parity: nonconformist lacks exchangeability testing and Venn-ABERS, while crepes/MAPIE have them. Clock: Python 3.5 EOL, NumPy/SciPy API drift means the import path has a half-life. Second-order theory of mind: downstream consumers see "IGNORE" verdict but may still copy code snippets; the veto must be institutionalized so that any conformal predictor without drift detection is auto-rejected.

CROSS_LAYER_VETO_ADJUDICATION: Layers: data (exchangeability), compute (runtime), model (coverage), deployment (drift). Veto proof: if any layer fails, conformal output is vetoed. Physical/biomechanical/weather: if inputs are time-series sensor streams (weather, biomechanics), iid/exchangeability is structurally violated unless block bootstrap or stationarity holds; weather introduces seasonal non-stationarity, biomechanics introduces subject-level dependence. Veto condition:

V = \mathbb{1}\{ \text{exchangeability rejected} \lor \widehat{\text{cov}}_{\text{shift}} > \tau \lor \text{no drift detector} \lor \text{Python < 3.8 / dep rot} \}.

If V=1, nonconformist (or any conformal shim without drift detection) is inadmissible. Proof: coverage theorem conditions not met; finite-sample guarantee is undefined outside exchangeability. Cite [PAGE 1] on lack of drift detection.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.

Scenario 1: Temporal biomechanics/weather sensor data. Verifiable test: apply exchangeability martingale (crepes/MAPIE) to calibration residuals; reject null at p<0.01. Prediction: coverage observed < 0.90 when nominal 1-\varepsilon=0.95; RLVR veto triggers; mandate MAPIE with drift detection or block-conformal.

Scenario 2: Environment upgrade. Verifiable test: `pip install nonconformist` under Python 3.11 + NumPy 2.x; expect ImportError/AttributeError due to Python 3.5-era API and deprecated NumPy aliases. Prediction: pipeline build fails; RLVR veto blocks deployment; reroute to crepes/MAPIE which support current stack.

Scenario 3: Refusal-threshold requirement. Verifiable test: inspect nonconformist API for Venn-ABERS multiprobabilistic output; absent per [PAGE 1] TODO never finished. Requirement: produce calibrated probability pair for abstention. Prediction: RLVR veto denies selection because requirement maps to Venn-ABERS → refusal threshold; crepes/MAPIE satisfy; nonconformist fails functional fit.

Add closing note maybe inside RLVR or separate? Must be within sections. I'll end after RLVR.

Word count: let's approximate as I write. Need total >=1000. THINK_TRACE >=400. I'll ensure THINK_TRACE is around 500.

Need to include [PAGE 1] citations and verbatim quotes. I'll include several.

Let's write final output now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of /CorpusRoot/Sports-deploy-fix/donlnz-nonconformist.md [PAGE 1].

The source text frames donlnz/nonconformist as "One of the earliest Python implementations of the full conformal prediction framework (Vovk/Gammerman/Shafer), designed as a scikit-learn extension: inductive conformal predictors, cross-conformal variants, Venn predictors on the roadmap." [PAGE 1] The first hop is therefore theoretical: the Vovk/Gammerman/Shafer program establishes finite-sample, distribution-free coverage under exchangeability. If calibration examples z_i = (x_i, y_i) are exchangeable with the test example z_{n+1}, and a nonconconformity measure A assigns scores \alpha_i \in \mathbb{R}, then the conformal p-value for a candidate label y at x_{n+1} is p_{n+1}(y) = (1 + \#\{i : \alpha_i \ge \alpha_{n+1}(y)\}) / (n_{cal} + 1) \in [0,1], and the prediction set C(x_{n+1}) = \{y : p_{n+1}(y) > \varepsilon\} covers Y_{n+1} with probability at least 1 - \varepsilon. This is the exact contract the repository attempts to expose as a "sklearn estimator + numpy/scipy + a calibration split. pip-installable." [PAGE 1]

The second hop is engineering and operational. The same page states: "License: MIT, but **stale — last push 2021-03**, API docs "severely deprecated" per its own README, tested under Python 3.5-era stack." [PAGE 1] An MIT license is a permission, not a maintenance guarantee. A last push in March 2021, combined with a star history described as "(479 stars, flat since 2021)" [PAGE 1], indicates the project has been abandoned for roughly three years. The Python 3.5-era stack constraint means modern NumPy 2.x, SciPy 1.11+, and scikit-learn 1.3+ environments are likely outside its tested compatibility envelope. That is a runtime singularity, not a theoretical one.

The third hop is feature parity. [PAGE 1] states: "The TODO list (Venn predictors, Venn-ABERS, exchangeability testing) was never finished — and those unfinished items are exactly what crepes and MAPIE now do." [PAGE 1] Three capabilities are absent: (i) Venn predictors for multiprobabilistic outputs, (ii) Venn-ABERS for calibrated probability mapping, and (iii) exchangeability testing via martingales. These are not cosmetic omissions; they are the operational backbone of production conformal prediction. Without exchangeability testing, there is no pre-deployment audit that the iid assumption holds. Without Venn-ABERS, there is no calibrated multiprobability surface to feed a refusal threshold. Without drift detection, the coverage guarantee P(Y_{n+1} \in C(X_{n+1})) \ge 1 - \varepsilon is vacuous under covariate shift.

The gray-zone audit therefore identifies four traps. Trap A: star count (479) is being mistaken for project health, but it is flat since 2021 [PAGE 1]. Trap B: the MIT license is being mistaken for operational safety, but dependency rot on a Python 3.5-era stack creates import risk. Trap C: "earliest implementation" is being mistaken for "foundational correctness," but the GSE lens explicitly labels it "functionally superseded" [PAGE 1]. Trap D: the absence of drift detection means any conformal interval produced by this code is valid only under the exact exchangeability conditions that production sensor data—especially weather and biomechanical streams—rarely satisfy. [PAGE 1] directs: "treat it as the "don't be this" example of a conformal implementation without drift detection." [PAGE 1]

The multi-hop conclusion is that the unfinished roadmap is a useful checklist for the t10-conformal track: exchangeability testing maps to crepes martingales / MAPIE tests; Venn-ABERS predictors map to multiprobabilistic outputs and future refusal-threshold inputs; nothing from nonconformist should be wired into a live stack. Verdict: IGNORE, superseded by crepes and MAPIE on every axis that matters [PAGE 1].

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, page citations, and breakdown regimes.

Let the calibration sample be \mathcal{D}_{cal} = \{(x_i, y_i)\}_{i=1}^{n_{cal}}, with n_{cal} \in \mathbb{N}. Examples are assumed exchangeable: for every permutation \pi of \{1,\dots,n_{cal}+1\}, the joint law satisfies (z_{\pi(1)},\dots,z_{\pi(n_{cal}+1)}) \stackrel{d}{=} (z_1,\dots,z_{n_{cal}+1}), where z_i = (x_i, y_i). This assumption is the exact condition under which [PAGE 1]'s "calibration split" produces valid coverage.

Define a nonconconformity measure A mapping a training set and a sample to a real score: A : \mathcal{Z}^{n_{tr}} \times \mathcal{Z} \to \mathbb{R}. Calibration scores are \alpha_i = A(\mathcal{D}_{tr}, (x_i, y_i)) \in \mathbb{R}. For a test covariate x_{n_{cal}+1} and candidate label y \in \mathcal{Y}, the hypothetical score is \alpha_{n_{cal}+1}(y) = A(\mathcal{D}_{tr}, (x_{n_{cal}+1}, y)). The split-conformal p-value is

p_{n_{cal}+1}(y) = \frac{1 + \sum_{i=1}^{n_{cal}} \mathbf{1}\{\alpha_i \ge \alpha_{n_{cal}+1}(y)\}}{n_{cal} + 1} \in [0,1].

The prediction region at significance \varepsilon \in (0,1) is

C(x_{n_{cal}+1}) = \{ y \in \mathcal{Y} : p_{n_{cal}+1}(y) > \varepsilon \}.

Validity theorem (finite-sample, distribution-free): under exchangeability,

\Pr\{ Y_{n_{cal}+1} \in C(X_{n_{cal}+1}) \} \ge 1 - \varepsilon.

Equivalently, using the quantile form,

q_{1-\varepsilon} = \text{Quantile}\left( \{ \alpha_i \}_{i=1}^{n_{cal}}, \frac{ \lceil (n_{cal}+1)(1-\varepsilon) \rceil }{ n_{cal} } \right),

C(x_{n_{cal}+1}) = \{ y : \alpha_{n_{cal}+1}(y) \le q_{1-\varepsilon} \}.

Units: probabilities and p-values are dimensionless in [0,1]; \varepsilon is dimensionless significance in (0,1); n_{cal} is a dimensionless count; nonconconformity scores carry the units of A (e.g., target units |y - \hat{y}| for regression residuals); coverage is dimensionless probability in [0,1].

Venn operators: a Venn predictor partitions candidates into categories and trains a submodel per category, producing a multiprobabilistic output \mathbf{p}(x_{n_{cal}+1}) = (P^{y_1},\dots,P^{y_K}) where each P^{y_k} \in [0,1] and the vector need not sum to one across the full power set unless normalized. Venn-ABERS composes isotonic regression on score ranks with a sigmoid calibration map f : \mathbb{R} \to [0,1], yielding a calibrated probability pair for binary abstention decisions.

Breakdown and singularity regimes:
1. Exchangeability violation: the coverage theorem is undefined; no finite-sample guarantee exists. This occurs under covariate shift, concept drift, or subject-level dependence in biomechanical time series.
2. Calibration-size singularity: p-value discretization step is \Delta p = 1/(n_{cal}+1). If n_{cal} < 1/\varepsilon, the target coverage 1 - \varepsilon cannot be represented.
3. Tie singularity: using \ge in the p-value is conservative; using > without randomized tie-breaking is anti-conservative.
4. Runtime singularity: the repository is "tested under Python 3.5-era stack" with API docs "severely deprecated" per its own README [PAGE 1]; modern NumPy/SciPy removal of deprecated aliases creates ImportError/AttributeError.
5. Drift singularity: [PAGE 1] explicitly notes the absence of drift detection; under non-stationary weather or biomechanical inputs, empirical coverage falls below 1 - \varepsilon with no alarm.

Source citations: all architectural claims (inductive conformal predictors, cross-conformal variants, Venn predictors on roadmap; sklearn estimator + numpy/scipy + calibration split; stale, last push 2021-03, severely deprecated README, Python 3.5-era; unfinished TODO list of Venn predictors, Venn-ABERS, exchangeability testing; crepes and MAPIE; IGNORE verdict; 479 stars flat since 2021) are verbatim or near-verbatim from [PAGE 1].

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week trap analysis.

The lineage begins with Vovk, Gammerman, and Shafer's algorithmic framework for prediction under exchangeability, later operationalized as inductive conformal prediction (Papadopoulos et al.) and extended to Venn predictors and Venn-ABERS calibrated probability maps. donlnz/nonconformist positions itself as "One of the earliest Python implementations of the full conformal prediction framework (Vovk/Gammerman/Shafer)" [PAGE 1], placing it genealogically between the theoretical papers and the modern scikit-learn ecosystem. Its descendants and competitors are crepes and MAPIE, which now implement the very items nonconformist left on its TODO list: exchangeability testing via martingales, Venn-ABERS multiprobabilistic outputs, and drift-aware conformal interfaces [PAGE 1].

Multi-week traps arise when a team treats historical priority as current suitability. Trap 1: an engineer sees 479 stars and an MIT license and assumes production readiness; [PAGE 1] notes the star history is flat since 2021 and the last push was 2021-03, so two to four weeks can be sunk into wiring a shim that must later be ripped out. Trap 2: the roadmap language "Venn predictors on the roadmap" [PAGE 1] invites a team to wait for features that were never finished; the same page states those unfinished items "are exactly what crepes and MAPIE now do" [PAGE 1], so waiting incurs opportunity cost without delivery. Trap 3: the absence of exchangeability testing and drift detection [PAGE 1] means a team deploying on temporal sensor data—weather, biomechanics, telemetry—will produce intervals whose nominal coverage is ungrounded; diagnosing that failure post-hoc consumes another multi-week debugging cycle. Trap 4: dependency rot on a Python 3.5-era stack [PAGE 1] creates an environment singularity that blocks container builds during the deployment week, not the modeling week.

The retro-causal lesson is that nonconformist functions as a historical checkpoint, not a component. Its unfinished roadmap is a checklist for the t10-conformal track: exchangeability testing (→ crepes martingales / MAPIE tests), Venn-ABERS predictors (multiprobabilistic outputs — a future refusal-threshold input), and drift detection [PAGE 1]. Any project that wires nonconformist now is repeating the abandonment cycle that crepes and MAPIE already resolved.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

First-order model: under deadline pressure, an engineer regresses to a familiar pip-installable scikit-learn extension with a NumPy/SciPy calibration split [PAGE 1]. They model the repository author as a maintainer who intended longevity because the code is public and MIT-licensed. Second-order model: the author's actual behavior—last push 2021-03, README marking API docs "severely deprecated," flat star history since 2021 [PAGE 1]—reveals abandonment; the engineer's model of the author is therefore wrong. Third-order model: downstream consumers see the GSE verdict "IGNORE — superseded by crepes and MAPIE on every axis that matters" [PAGE 1] but may still copy snippet code because "early implementation" sounds foundational. The recursive fix is to institutionalize the counter-trap: treat nonconformist as the "don't be this" example of a conformal implementation without drift detection [PAGE 1], and auto-reject any conformal predictor lacking exchangeability tests and drift monitoring.

The clock is concrete. Python 3.5 reached end-of-life years ago; NumPy and SciPy have removed aliases and changed casting rules; scikit-learn's estimator API has evolved. The repository was "tested under Python 3.5-era stack" [PAGE 1], so every month that passes increases the probability of an import-time AttributeError or silent numerical mismatch. The counter-trap is a pre-mortem: ask, "If this import fails in production next quarter, what do we switch to?" The answer, per [PAGE 1], is crepes or MAPIE, which already provide exchangeability testing (crepes martingales / MAPIE tests) and Venn-ABERS multiprobabilistic outputs for refusal thresholds. Crisis habit regression selects the oldest, most familiar package; the counter-trap selects the package with active drift detection and finished Venn-ABERS. The clock favors the counter-trap because dependency rot is irreversible, whereas migration cost is front-loaded and bounded.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof across compute, data, model, and deployment layers.

Layer 1 — Data/exchangeability: conformal validity requires exchangeability of calibration and test examples [PAGE 1]. Weather inputs introduce seasonal non-stationarity; biomechanical sensor streams introduce subject-level autocorrelation and device drift. If the data are a non-iid time series, the exchangeability condition fails and the coverage theorem \Pr\{Y_{n+1} \in C(X_{n+1})\} \ge 1 - \varepsilon is not applicable.

Layer 2 — Compute/runtime: the package is tested under a Python 3.5-era stack with severely deprecated API docs [PAGE 1]. A veto condition is raised if the build environment exceeds that stack, because deprecated NumPy/SciPy aliases produce ImportError or silent dtype changes.

Layer 3 — Model/coverage: split conformal gives marginal coverage, not conditional coverage. Under covariate shift between calibration weather/biomechanical regimes and deployment regimes, empirical coverage degrades below 1 - \varepsilon with no theoretical alarm.

Layer 4 — Deployment/drift: [PAGE 1] explicitly identifies nonconformist as a conformal implementation without drift detection. The absence of a drift detector is itself a veto: without monitoring p-value histograms or calibration-score drift, the model cannot detect when exchangeability breaks in production.

Composite veto predicate:

V = \mathbb{1}\Big\{ \text{exchangeability rejected by martingale test} \;\lor\; \widehat{\text{cov}}_{\text{shift}}(P_{cal}, P_{deploy}) > \tau \;\lor\; \text{no drift detector installed} \;\lor\; \text{Python/NumPy/SciPy version outside 3.5-era support} \Big\}.

If V = 1, nonconformist is inadmissible regardless of its MIT license or star count [PAGE 1]. Proof: the finite-sample coverage guarantee is conditioned on exchangeability; once that assumption is violated by weather seasonality, biomechanical dependence, or runtime incompatibility, the interval's nominal level is undefined and the output is unsafe for refusal-threshold or decision gating. The only non-vetoed path is to route to crepes or MAPIE, which supply exchangeability testing and drift-aware conformal interfaces [PAGE 1].

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Scenario 1 — Temporal biomechanics/weather data with autocorrelation.
Verifiable test: apply an exchangeability martingale test (crepes/MAPIE) to the calibration residuals and reject the null at p < 0.01. If rejected, the exchangeability precondition for nonconformist's coverage theorem is false.
Prediction: observed coverage falls below the nominal 1 - \varepsilon (e.g., < 0.90 when \varepsilon = 0.05). RLVR veto triggers on coverage violation; the system is forced to migrate to MAPIE with block-conformal or drift-adjusted conformal intervals, and nonconformist is barred from the production path.

Scenario 2 — Runtime environment upgrade.
Verifiable test: attempt `pip install nonconformist` under Python 3.11 with NumPy 2.x and SciPy 1.13+. Because the package was "tested under Python 3.5-era stack" with "severely deprecated" API docs [PAGE 1], expect ImportError or AttributeError on removed aliases.
Prediction: pipeline build fails deterministically. RLVR veto blocks deployment on dependency singularity; the counterfactual selection is crepes or MAPIE, which support the current scientific Python stack [PAGE 1].

Scenario 3 — Refusal-threshold requirement via Venn-ABERS.
Verifiable test: inspect the nonconformist API for a Venn-ABERS multiprobabilistic output suitable for a calibrated abstention/refusal threshold. [PAGE 1] states the TODO list item "Venn-ABERS" was never finished and that this capability is now provided by crepes and MAPIE.
Prediction: functional-fit test fails; RLVR veto denies nonconformist selection because the requirement maps to Venn-ABERS → refusal-threshold input. The system routes to crepes/MAPIE for calibrated probability pairs, and nonconformist is excluded from the candidate set.

Across all three scenarios, the invariant is that [PAGE 1] classifies nonconformist as historically important but functionally superseded, with no drift detection and an unfinished roadmap; RLVR therefore vetoes it whenever exchangeability, runtime compatibility, or calibrated multiprobability outputs are required.

</RLVR_COUNTERFACTUAL_VETOES>