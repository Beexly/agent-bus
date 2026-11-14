---
source: "henrikbostrom-crepes.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5912
---

<NATIVE_REASONING>
The user is asking me to act as the GSE + GSI Frontier Reasoning Foundry and produce a response with specific XML sections, based on a source document about the `crepes` Python package for conformal prediction.

Key constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force / Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
4. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Source text is provided as "PAGES: 1" with the content being the `henrikbostrom-crepes.md` document. I need to cite [PAGE 1] markers and use verbatim quotes from the source.

Let me think about what the source text says:
- crepes is a Python package for conformal prediction
- Stars: 583, BSD-3-Clause, v0.9.1
- Implements standard, normalized (difficulty-aware), and Mondrian (conditional, per-category) conformal predictors
- Martingale-based exchangeability testing
- Vision: conformal classifiers/regressors and conformal predictive systems turning sklearn models into p-values and full CDFs with coverage guarantees
- GSE lens: four things crepes does:
  1. Mondrian conditional conformal prediction - separate calibration per category
  2. Conformal predictive systems - full calibrated CDF per prediction
  3. Calibrated p-values for classification - p-value per class for refusal problem
  4. Exchangeability martingales - online drift alarm
- Walk-forward: conformalize per season on most recent held-out slice; never one global map
- Verdict: ADOPT

Now I need to structure this into the required XML sections with >= 1000 words total, with THINK_TRACE alone being >= 400 words.

Important: No betting lines (spreads, totals, moneylines, odds). The source mentions "prop pricing" in GSE lens but I should avoid betting terminology. I can talk about coverage guarantees, p-values, CDFs, classification, regression, conformal prediction, exchangeability, Mondrian, etc. But I must not mention spreads, totals, moneylines, odds.

Let me draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to discuss:
- The mathematical logic of conformal prediction: exchangeability, non-conformity scores, calibration split, coverage guarantee 1-alpha
- Mondrian conformal prediction: conditional validity per category, stratum-specific calibration
- Normalized conformal prediction: difficulty-aware scores, scaling by difficulty estimate
- Conformal predictive systems: CDFs instead of intervals, cumulative distribution functions
- p-values per class for classification and refusal thresholds
- Martingale exchangeability testing: online drift detection, betting-based (wait, no betting lines! But martingales in conformal prediction are mathematical martingales, not betting. I should be careful. The source says "martingale-based exchangeability testing" - this is a mathematical concept. I can discuss it without mentioning gambling/betting.)
- Gray zones: small n per Mondrian category leading to empty or wide prediction sets; non-exchangeability between seasons; difficulty estimate misspecification; sklearn base learner mismatch; coverage vs efficiency tradeoff; refusal threshold calibration; the "never one global map" constraint and its computational implications.
- Cite [PAGE 1] with verbatim quotes.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations.
- Conformal prediction setup: Let (X_i, Y_i) be exchangeable. Non-conformity score A_i = A(x_i, y_i). Calibration scores sorted. p-value for new point y: p(y) = (1 + #{i: A_i >= A_{new}(y)}) / (n+1). Coverage P(Y_{n+1} in C(X_{n+1})) >= 1 - alpha (finite sample, under exchangeability).
- Mondrian: strata C_k, separate calibration sets, per-stratum quantiles. Coverage conditional on stratum: P(Y in C(X) | stratum=k) >= 1 - alpha.
- Normalized: A_i = |y_i - f(x_i)| / d(x_i) or similar difficulty scaling.
- Conformal predictive systems: CDF F(y|x) = ... using conformal p-values as a predictive distribution.
- Classification p-value: p_y = (1 + sum I(A_i >= A(x_new, y))) / (n_cal + 1).
- Martingale: M_k = product of (1 + something) or e-process / martingale for exchangeability testing. Vovk's martingale: M_n = product of p-values or related. Actually in conformal exchangeability testing, one uses martingales where M_n = M_{n-1} * (1 / p_n) or similar? Let me recall: In conformal prediction exchangeability testing, if p-values are valid, then the product of inverse p-values or the wealth process S_n = prod (1/p_i) is a martingale under the null of exchangeability? Actually there are different constructions. I should state it generally: define a martingale process M_t adapted to filtration F_t, with E[M_{t+1} | F_t] = M_t under H_0 (exchangeability), and stopping time / threshold triggers drift alarm.
- Breakdown regimes: alpha in (0,1); n_cal -> 0 singularity; category with n_k < 1/(1-alpha) or small counts causing vacuous coverage; non-exchangeability violating i.i.d.; deterministic labels causing ties; sklearn base learner not refit per walk-forward.
- Units: probabilities dimensionless [0,1], p-values dimensionless [0,1], coverage level 1-alpha dimensionless, scores in label-dependent units (e.g., same units as target for regression), CDF values in [0,1].
- Cite [PAGE 1].

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Vovk et al. conformal prediction (1990s-2000s), Papadopoulos inductive conformal prediction, Lei et al. normalized conformal prediction, Vovk's Mondrian (conditional) conformal prediction, conformal predictive systems (Vovk et al.), martingale exchangeability testing (Vovk, Wang, etc.), MAPIE comparison, scikit-learn ecosystem.
- Multi-week traps: seasonal drift, category stratification collapse over weeks, small-sample Mondrian strata becoming empty as weeks progress, walk-forward boundary leakage if calibration slice overlaps test, martingale false alarms from gradual non-exchangeability rather than abrupt regime change, refusal threshold drift across weeks.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure, reverting to global conformal map or point estimates instead of Mondrian/CDF; abandoning refusal thresholds when coverage looks "too conservative."
- Counter-trap: adversarial or selection effects where categories with poor coverage are exactly those selected for action, or where martingale alarms are gamed by calibration-slice choice.
- Clock: walk-forward per-season cadence, recalibration frequency, the tension between fresh calibration (small n) and stale calibration (drift).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Hmm, the source is about a software package. But I need to address physical/biomechanical/weather vetoes. I should treat this as: if the input features or base learners rely on physical/biomechanical/weather data, those layers can veto the conformal output if their assumptions break. E.g., weather sensor failure invalidates feature exchangeability; biomechanical non-stationarity violates exchangeability; physical measurement noise changes non-conformity score distribution. The conformal guarantee is conditional on exchangeable inputs; if upstream physical layer is non-stationary, the conformal layer's coverage guarantee is void.
- Veto rules: if weather sensor missingness > threshold, veto; if biomechanical baseline shifts, veto; if physical feature drift detected, suspend intervals.
- No betting lines.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning with Verifiable Rewards? Or some framework. I need 3 verifiable counterfactual veto scenarios.
- Scenario 1: Mondrian stratum with n_k < N_min (e.g., fewer than 30 calibration examples). Veto: refuse to emit conditional prediction; fall back to global or abstain. Prediction: coverage collapses below 1-alpha or sets become vacuous.
- Scenario 2: Martingale exchangeability statistic crosses threshold H (e.g., M_t > eta). Veto: suspend row's intervals/alerts. Prediction: subsequent coverage under drift degrades; false-alarm rate if threshold too tight.
- Scenario 3: Refusal threshold: top-class conformal p-value < tau_refusal. Veto: abstain from classification. Prediction: coverage on accepted set remains >= 1-alpha, but coverage on refused set unknown; abstention rate increases under distribution shift.
- Include verifiable predictions: e.g., "if scenario 1 occurs, empirical coverage on held-out week w+1 will be < 1-alpha - epsilon with probability ..."

Word count: Need >= 1000 words total across sections. THINK_TRACE >= 400. I'll aim for roughly:
- THINK_TRACE: 500-600 words
- SOURCE_OPERATORS_AND_EQUATIONS: 300-400 words
- RETROCAUSAL_GENEALOGY: 200-300 words
- RECURSIVE_THEORY_OF_MIND: 150-200 words
- CROSS_LAYER_VETO_ADJUDICATION: 150-200 words
- RLVR_COUNTERFACTUAL_VETOES: 200-300 words
Total should exceed 1000.

Citations: Use [PAGE 1] and verbatim quotes from source. Verbatim quotes: "turning any sklearn classifier/regressor into well-calibrated p-values and full cumulative distribution functions, with coverage guarantees"; "Mondrian (conditional, per-category) conformal predictors"; "martingale-based exchangeability testing"; "separate calibration per category (e.g., home favorite vs road underdog vs divisional game)"; "a full calibrated CDF per prediction, not just an interval"; "a p-value per class is the honest input to the refusal problem"; "if W1-4 stops looking exchangeable with the 2025 calibration slice, the row's intervals are suspended automatically"; "Walk-forward: same as MAPIE — conformalize per season on the most recent held-out slice; never one global map"; "ADOPT — the conformal package for classification outputs and the refusal-threshold machinery".

Careful: The source mentions "home favorite vs road underdog vs divisional game" and "prop pricing" - these are sports betting contexts. The user said ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. Does mentioning "home favorite" or "road underdog" count as betting lines? Those are team statuses, not lines. But "prop pricing" is betting. I should avoid "prop pricing" or if quoting, I can quote it but maybe avoid repeating it as my own analysis. Actually, I can quote verbatim from source since it's in the source text, but I shouldn't generate new betting content. The instruction says "Never mention spreads, totals, moneylines, or odds." It doesn't say never mention the word "prop" or "favorite". But to be safe, I'll minimize sports betting context and treat the source generically as classification/regression categories. When quoting, I can include the quote but perhaps bracket it. Actually the user said cite verbatim quotes. I'll include short quotes but avoid amplifying betting terminology. I'll refer to "categories" and "strata" generally.

Let me write the response.

Structure:
```xml
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>
```

I need to make sure the total word count is >= 1000. Let me write generously.

THINK_TRACE content plan:
- Start with the core problem: converting arbitrary sklearn predictors into distributionally valid uncertainty quantifiers under exchangeability.
- Multi-hop derivation: exchangeability -> non-conformity scores -> calibration split -> quantile -> prediction set -> finite-sample coverage.
- Hop 1: Standard conformal. Define scores. Coverage theorem.
- Hop 2: Mondrian conditional. Stratification. The gray zone: n per stratum. If stratum too small, coverage guarantee is nominal but empirical validity unstable; empty sets or conservative sets.
- Hop 3: Normalized/difficulty-aware. Score scaling by difficulty d(x). Heteroscedasticity. Breakdown if d(x) mis-specified or zero.
- Hop 4: Conformal predictive systems. CDF from p-values via conformal inference over all possible labels. Strictly more informative than interval.
- Hop 5: Classification p-values per class. Refusal problem: max_y p_y < tau => abstain. Distribution-free threshold.
- Hop 6: Martingale exchangeability. Online test. Wealth/martingale process under null. Drift alarm between calibration slice and live slice.
- Gray-zone audit: (i) small n Mondrian strata; (ii) walk-forward boundary leakage; (iii) sklearn base learner refit cost; (iv) martingale false positives under slow drift; (v) refusal threshold calibration requires its own holdout; (vi) ties in non-conformity scores; (vii) coverage vs efficiency tradeoff.
- Cite [PAGE 1] throughout.

Let me draft.

Word count check as I go. I'll write detailed prose.

For equations in SOURCE_OPERATORS_AND_EQUATIONS:
Use LaTeX:
Let \mathcal{D}_{cal} = \{(x_i,y_i)\}_{i=1}^{n} be exchangeable calibration examples. Non-conformity score: a_i = A(x_i, y_i; \mathcal{D}_{train}). For candidate label y for new x_{n+1}, score a_{n+1}(y) = A(x_{n+1}, y; \mathcal{D}_{train}). Conformal p-value:
p(y) = \frac{1 + \sum_{i=1}^{n} \mathbf{1}\{a_i \ge a_{n+1}(y)\}}{n+1}.
Prediction set at level 1-\alpha: C(x_{n+1}) = \{ y : p(y) > \alpha \}. Coverage: \mathbb{P}(y_{n+1} \in C(x_{n+1})) \ge 1-\alpha under exchangeability. Dimensionless probability units.

Mondrian: Strata g(x) \in \{1,\dots,K\}. Calibration set \mathcal{D}_{cal}^{(k)}. Stratum-specific quantile q_{1-\alpha}^{(k)}. Conditional coverage: \mathbb{P}(y \in C(x) \mid g(x)=k) \ge 1-\alpha. Breakdown: if n_k is small, quantile is unstable or the set is vacuous (all labels) or empty (if using strict inequality and no score qualifies? Actually conformal sets are rarely empty but can be all labels). Singularity: n_k = 0 => no calibration, guarantee void.

Normalized: \tilde{a}_i = a_i / d(x_i) where d(x) > 0 is difficulty estimate. If d(x) \to 0 or is miscalibrated, coverage degrades.

Conformal predictive systems: CDF \hat{F}(y \mid x) built from conformal p-values over an ordered label space. For regression, one can invert the non-conformity function to get a full distribution.

Classification p-values: p_y for each class y. Refusal: if \max_y p_y < \tau_{\rm ref}, abstain.

Martingale exchangeability: Let p_t be online p-values for sequential predictions. Define wealth process W_t = W_{t-1} \cdot \phi(p_t) with \mathbb{E}[\phi(p)] \le 1 under H_0 (exchangeability), W_0 = 1. Then W_t is a non-negative supermartingale; stopping time \tau = \inf\{t: W_t \ge \eta\} triggers drift alarm. Units: W_t dimensionless wealth, \eta threshold dimensionless. Breakdown: if p-values are not valid under H_0 or if the filtration is misspecified, the martingale property fails.

I'll include these in the equations section with [PAGE 1] citations.

RETROCAUSAL_GENEALOGY:
- Lineage: Vovk, Gammerman, Shafer (algorithmic learning theory), inductive conformal prediction (Papadopoulos et al.), normalized (Lei, Wasserman, etc.), Mondrian (Vovk), conformal predictive systems (Vovk et al.), martingale testing (Vovk & Wang, e-processes), scikit-learn compat (MAPIE, crepes).
- Multi-week traps: seasonal category drift, Mondrian stratum sparsity over weeks, walk-forward recalibration cadence vs drift speed, martingale cumulative false alarm over many weeks, refusal threshold obsolescence.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under stress/incident, operators revert to global point predictions, drop Mondrian, drop refusal, use single global map—exactly what [PAGE 1] warns against ("a global map hides conditional miscalibration").
- Counter-trap: an adversary or selection process targets the least-calibrated Mondrian stratum; or the martingale alarm is suppressed by choosing a stale calibration slice.
- Clock: per-season walk-forward clock; recalibrate on most recent held-out slice; never one global map. Tension: fresh slice => small n; stale slice => non-exchangeable.

CROSS_LAYER_VETO_ADJUDICATION:
- Upstream physical/biomechanical/weather layers. If any of these are non-stationary, exchangeability fails and conformal coverage is void.
- Veto rules: missing weather features > threshold -> veto; biomechanical baseline shift (distributional change in input features) -> veto; physical sensor drift -> invalidate non-conformity scores -> suspend intervals.
- Adjudication order: physical layer veto supersedes conformal output. If weather input missing, no prediction. If biomechanical regime changed, recalibrate or abstain.
- Conformal guarantee is conditional on exchangeability of (X,Y); it does not repair broken upstream physics.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Mondrian stratum thinness: n_k < n_min (e.g., n_k < 1/(1-\alpha) or absolute < 20). Veto: refuse stratum-specific prediction; fall back to stratified pool or abstain. Prediction: empirical coverage on stratum k in week w+1 drops below 1-\alpha - \delta with probability > 0.5 if emitted.
2. Martingale drift: W_t crosses \eta between 2025 calibration slice and W1-4 live slice. Veto: suspend row's intervals automatically (as [PAGE 1] says). Prediction: coverage on post-alarm predictions without recalibration degrades; re-calibration restores within 2 seasons.
3. Refusal threshold: top-class p-value < \tau_ref. Veto: abstain from classification output. Prediction: conditional coverage among accepted predictions remains \ge 1-\alpha; abstention rate rises under shift; if \tau_ref too high, effective sample for action goes to zero (starvation).

Make each verifiable: specify metrics, data slices, expected outcomes.

Now let me write the full text with attention to word count and formatting.

I need to ensure no betting lines. I will not use spread, total, moneyline, odds. I might inadvertently say "favorite" from quote? I'll avoid quoting that specific phrase or if I do, I'll keep it but not elaborate. Actually, I can avoid quoting "home favorite vs road underdog" and instead quote other parts. The user wants verbatim quotes; I'll choose quotes that don't contain betting terminology.

Selected verbatim quotes from [PAGE 1]:
- "turning any sklearn classifier/regressor into well-calibrated p-values and full cumulative distribution functions, with coverage guarantees"
- "Implements standard, normalized (difficulty-aware), and Mondrian (conditional, per-category) conformal predictors, plus martingale-based exchangeability testing."
- "separate calibration per category"
- "a full calibrated CDF per prediction, not just an interval"
- "a p-value per class is the honest input to the refusal problem"
- "if W1-4 stops looking exchangeable with the 2025 calibration slice, the row's intervals are suspended automatically"
- "Walk-forward: same as MAPIE — conformalize per season on the most recent held-out slice; never one global map."
- "ADOPT — the conformal package for classification outputs and the refusal-threshold machinery"

These are safe.

Let's write.

I will monitor word count. I'll aim for about 1200-1500 words total to be safe.

Drafting now mentally, then output.

THINK_TRACE (~550 words):

The source document positions crepes as the conformal backbone for the t10-conformal track. The multi-hop derivation begins with the foundational assumption stated on [PAGE 1]: "Same exchangeability assumption as all conformal methods." Exchangeability of the calibration and test pairs \{(X_i,Y_i)\} is the necessary and sufficient condition for distribution-free finite-sample coverage. From [PAGE 1], crepes turns "any sklearn classifier/regressor into well-calibrated p-values and full cumulative distribution functions, with coverage guarantees."

First hop: standard inductive conformal prediction. Given a calibration set \mathcal{D}_{cal} of size n and a non-conformity score A, each calibration example receives a score a_i. For a new x_{n+1} and candidate y, compute a_{n+1}(y). The conformal p-value is the rank-based quantity \frac{1+\sum_i \mathbf{1}\{a_i \ge a_{n+1}(y)\}}{n+1}. Inverting this over all y yields a prediction set C(x_{n+1}) = \{y : p(y) > \alpha\} whose coverage obeys \mathbb{P}(Y_{n+1} \in C(X_{n+1})) \ge 1-\alpha exactly, under exchangeability, with no parametric assumptions.

Second hop: Mondrian conditioning. [PAGE 1] notes crepes implements "Mondrian (conditional, per-category) conformal predictors" and the GSE lens urges "separate calibration per category." This addresses a conditional miscalibration problem: a global map can achieve nominal marginal coverage while hiding systematic under-coverage inside strata. The derivation stratifies by category g(x), estimates a stratum-specific quantile q^{(k)}_{1-\alpha}, and enforces \mathbb{P}(Y \in C(X) \mid g(X)=k) \ge 1-\alpha. The gray zone is small n_k: when a stratum holds few calibration examples, the empirical quantile is unstable, the set may become vacuous (all labels) or the coverage guarantee becomes nominal only.

Third hop: normalized/difficulty-aware scores. [PAGE 1] lists "normalized (difficulty-aware)" among crepes' modes. If d(x) > 0 is a difficulty estimate, scores are scaled \tilde a_i = a_i/d(x_i), producing heteroscedastic intervals that adapt to instance difficulty. Breakdown: d(x) \to 0 or mis-specified difficulty destroys the exchangeability of transformed scores and voids coverage.

Fourth hop: conformal predictive systems. Rather than only an interval, crepes outputs a "full calibrated CDF per prediction" ([PAGE 1]). The p-value curve over an ordered label space integrates to a calibrated predictive CDF \hat F(y\mid x). This dominates a point estimate plus interval for downstream decisions because it preserves full predictive uncertainty.

Fifth hop: classification p-values and refusal. [PAGE 1] states "a p-value per class is the honest input to the refusal problem." For each candidate class c, compute p_c. If \max_c p_c < \tau_{\rm ref}, abstain. Because p_c are distribution-free under exchangeability, the refusal threshold inherits a historical calibration base rather than an arbitrary cutoff.

Sixth hop: martingale exchangeability. [PAGE 1] describes "martingale-based exchangeability testing" as an "online drift alarm" where "if W1-4 stops looking exchangeable with the 2025 calibration slice, the row's intervals are suspended automatically." A non-negative martingale W_t with \mathbb{E}[W_{t+1}\mid\mathcal{F}_t] = W_t under the null of exchangeability is monitored; crossing an upper threshold triggers suspension.

Gray-zone audit: (1) small Mondrian strata; (2) walk-forward boundary leakage if calibration slice touches test slice; (3) base-learner refit computational cost per season; (4) martingale false alarms under slow drift rather than abrupt regime change; (5) refusal threshold drift requires its own validation slice; (6) ties in scores induce conservative coverage; (7) the "never one global map" rule ([PAGE 1]) multiplies the number of models to maintain. Each gray zone can convert a valid conformal guarantee into an empty or misleading output.

That's roughly 450-550 words. Good.

SOURCE_OPERATORS_AND_EQUATIONS (~350 words):

Formal operators and units. All probabilities and p-values are dimensionless in [0,1]. Coverage level 1-\alpha with \alpha \in (0,1). Scores a_i carry the units of the loss (e.g., target units for regression; abstract units for classification). CDF values are dimensionless.

[Equation block] with citations [PAGE 1].

Setup: \mathcal{D}_{cal} = \{(x_i,y_i)\}_{i=1}^n exchangeable. A(x,y;\mathcal{D}_{train}). 

Standard: p(y) formula. Coverage theorem.

Mondrian: g(x), k, q^{(k)}, conditional coverage.

Normalized: \tilde a = a/d(x), d(x)>0.

CPS: CDF.

Classification refusal: \max_c p_c < tau.

Martingale: W_t recursion, stopping time, supermartingale.

Breakdown regimes: n_k=0; d(x)<=0; alpha not in (0,1); non-exchangeability; ties.

Walk-forward: per-season held-out slice, never global map [PAGE 1].

RETROCAUSAL_GENEALOGY (~250 words):

Lineage from Vovk et al. algorithmic conformal prediction, Papadopoulos inductive, Lei normalized, Vovk Mondrian, conformal predictive systems, Vovk-Wang martingale/e-process exchangeability testing, scikit-learn ecosystem (MAPIE, crepes). [PAGE 1] explicitly contrasts crepes with MAPIE: "Smaller community than MAPIE but a real packaged release (PyPI + conda-forge)."

Multi-week traps: seasonal category composition changes; Mondrian strata that are well-populated in week 1 become empty by week 8; walk-forward calibration slice staleness vs freshness tradeoff; martingale false alarm accumulation over a season if the threshold is too tight; refusal threshold calibrated on 2025 may misfire in 2026 under concept drift; per-season recalibration clock can either chase noise (too fast) or lag drift (too slow).

RECURSIVE_THEORY_OF_MIND (~180 words):

Crisis habit regression: under operational pressure, the system reverts to a single global conformal map or point predictions, abandoning Mondrian strata and refusal thresholds. [PAGE 1] warns that "a global map hides conditional miscalibration," so this regression reintroduces exactly the failure mode crepes is meant to close.

Counter-trap: an adversarial or selection mechanism routes decisions to the least-calibrated stratum; or an operator suppresses the martingale alarm by redefining the calibration slice to remain exchangeable with live data, thereby masking drift.

Clock: the walk-forward clock mandates recalibration per season on the most recent held-out slice ([PAGE 1]). The tension is between a short slice (fresh but few calibration points, unstable Mondrian quantiles) and a long slice (stable but potentially non-exchangeable with live data).

CROSS_LAYER_VETO_ADJUDICATION (~180 words):

Conformal coverage is conditional on exchangeability of (X,Y); it does not repair broken upstream physics. If a physical/biomechanical/weather feature layer is non-stationary, the input distribution shifts and the non-conformity scores are no longer exchangeable with calibration.

Veto rules:
1. Weather/sensor missingness above threshold: veto prediction; no interval emitted.
2. Biomechanical baseline shift (detected via feature-distribution test): veto recalibration; require new calibration slice.
3. Physical measurement drift altering score scale: suspend intervals until re-normalized.

Adjudication order: upstream veto supersedes conformal output. If weather inputs are missing, the row receives no conformal set regardless of martingale status. If biomechanical regime changed, Mondrian strata must be recomputed on post-shift data; old stratum labels are invalid. The martingale exchangeability test from [PAGE 1] is the final arbiter: if W1-4 is not exchangeable with the 2025 calibration slice, intervals are suspended automatically.

RLVR_COUNTERFACTUAL_VETOES (~250 words):

Three verifiable veto scenarios:

Scenario A (thin Mondrian stratum). Let stratum k have calibration size n_k. Veto rule: if n_k < n_{\min} (e.g., n_{\min} = 20 or n_k < \lceil 1/(1-\alpha)\rceil), refuse stratum-specific output; fall back to pooled conformal set or abstain. Verifiable prediction: on held-out week w+1, if a thin stratum is emitted anyway, empirical coverage \widehat{Cov}_k falls below 1-\alpha - \delta with probability > 0.5, and the prediction set is either vacuous (all labels) or over-conservative.

Scenario B (martingale drift). Let W_t be the exchangeability martingale between the 2025 calibration slice and live slice W1-4. Veto rule: if W_t \ge \eta, suspend row intervals automatically ([PAGE 1]). Verifiable prediction: coverage on predictions emitted after an alarm without recalibration degrades below 1-\alpha within one update cycle; after re-calibration on a fresh held-out slice, coverage returns to \ge 1-\alpha within two seasons. False-alarm rate under stationary exchangeability is bounded by 1/\eta via Ville's inequality.

Scenario C (refusal starvation). For classification, compute p_c per class. Veto rule: if \max_c p_c < \tau_{\rm ref}, abstain. Verifiable prediction: conditional coverage on accepted predictions remains \ge 1-\alpha; abstention rate rises monotonically under distribution shift; as \tau_{\rm ref} \to 1, the actionable set size goes to zero (refusal starvation), violating utility constraints even while coverage holds.

All predictions are testable with held-out seasonal splits and exchangeability tests.

Total words likely > 1300. Good.

I need to ensure exact XML section names. No extra text outside? The user didn't say only output XML, but given the strict format, I should output just the sections. I'll output only the XML blocks.

Let me write it out carefully now.
</NATIVE_REASONING>

<THINK_TRACE>
The source document positions crepes as the conformal backbone for the t10-conformal track. The multi-hop derivation begins with the foundational assumption stated on [PAGE 1]: "Same exchangeability assumption as all conformal methods." Exchangeability of the calibration and test pairs \{(X_i,Y_i)\} is the necessary and sufficient condition for distribution-free finite-sample coverage. From [PAGE 1], crepes turns "any sklearn classifier/regressor into well-calibrated p-values and full cumulative distribution functions, with coverage guarantees."

First hop: standard inductive conformal prediction. Given a calibration set \mathcal{D}_{cal} of size n and a non-conformity score A, each calibration example receives a score a_i = A(x_i,y_i;\mathcal{D}_{train}). For a new x_{n+1} and candidate label y, compute a_{n+1}(y) = A(x_{n+1},y;\mathcal{D}_{train}). The conformal p-value is the rank-based quantity p(y) = \frac{1+\sum_{i=1}^{n}\mathbf{1}\{a_i \ge a_{n+1}(y)\}}{n+1}. Inverting this over all candidate y yields a prediction set C(x_{n+1}) = \{y : p(y) > \alpha\} whose coverage obeys \mathbb{P}(Y_{n+1} \in C(X_{n+1})) \ge 1-\alpha exactly, under exchangeability, with no parametric assumptions on the base learner or the data-generating process.

Second hop: Mondrian conditioning. [PAGE 1] notes crepes implements "Mondrian (conditional, per-category) conformal predictors," and the GSE lens urges "separate calibration per category (e.g., home favorite vs road underdog vs divisional game)." This addresses a conditional miscalibration problem: a global map can achieve nominal marginal coverage while hiding systematic under-coverage inside strata. The derivation stratifies by category g(x), estimates a stratum-specific quantile q^{(k)}_{1-\alpha} from calibration examples in stratum k, and enforces \mathbb{P}(Y \in C(X) \mid g(X)=k) \ge 1-\alpha. The gray zone is small n_k: when a stratum holds few calibration examples, the empirical quantile is unstable, the prediction set may become vacuous (all labels), and the coverage guarantee remains nominal rather than empirically reliable.

Third hop: normalized, difficulty-aware scores. [PAGE 1] lists "normalized (difficulty-aware)" among crepes' modes. If d(x) > 0 is a difficulty estimate, scores are scaled \tilde a_i = a_i / d(x_i), producing heteroscedastic prediction sets that adapt to instance difficulty. Breakdown: d(x) \to 0 or mis-specified difficulty destroys the exchangeability of the transformed scores and voids the coverage guarantee.

Fourth hop: conformal predictive systems. Rather than only an interval, crepes outputs "a full calibrated CDF per prediction, not just an interval" ([PAGE 1]). The p-value curve over an ordered label space integrates to a calibrated predictive CDF \hat F(y\mid x). This dominates a point estimate plus interval for downstream decisions because it preserves full predictive uncertainty and supports coherent thresholding across operating points.

Fifth hop: classification p-values and the refusal problem. [PAGE 1] states "a p-value per class is the honest input to the refusal problem: refuse when the top-class conformal p-value is weak." For each candidate class c, compute p_c. If \max_c p_c < \tau_{\rm ref}, abstain. Because the p_c are distribution-free under exchangeability, the refusal threshold inherits a historical, calibration-set base rather than an arbitrary cutoff.

Sixth hop: martingale exchangeability testing. [PAGE 1] describes "martingale-based exchangeability testing" as an "online drift alarm for the 2025 live-check: if W1-4 stops looking exchangeable with the 2025 calibration slice, the row's intervals are suspended automatically." A non-negative martingale W_t with \mathbb{E}[W_{t+1} \mid \mathcal{F}_t] = W_t under the null of exchangeability is monitored; crossing an upper threshold triggers automatic suspension of the row's intervals.

Gray-zone audit. (1) Small Mondrian strata produce unstable quantiles or vacuous sets. (2) Walk-forward boundary leakage occurs if the calibration slice overlaps the test slice. (3) Base-learner refit cost per season multiplies compute. (4) Martingale false alarms arise under slow drift rather than abrupt regime change. (5) Refusal-threshold drift requires its own validation slice; a threshold calibrated on 2025 may misfire in 2026. (6) Ties in non-conformity scores induce conservative coverage. (7) The "never one global map" rule ([PAGE 1]) multiplies the number of models and strata to maintain. Each gray zone can convert a formally valid conformal guarantee into an empty, misleading, or computationally infeasible output.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All probabilities, coverage levels, p-values, and CDF values are dimensionless quantities in [0,1]. The coverage level is 1-\alpha with \alpha \in (0,1). Non-conformity scores a_i carry the units of the underlying loss (target units for regression; abstract score units for classification). Martingale wealth W_t is dimensionless.

[PAGE 1] establishes the core crepes specification: "Implements standard, normalized (difficulty-aware), and Mondrian (conditional, per-category) conformal predictors, plus martingale-based exchangeability testing," and "[t]urning any sklearn classifier/regressor into well-calibrated p-values and full cumulative distribution functions, with coverage guarantees."

Standard conformal operator. Let \mathcal{D}_{cal} = \{(x_i,y_i)\}_{i=1}^{n} be exchangeable. For a base learner fitted on \mathcal{D}_{train}, define A(x,y;\mathcal{D}_{train}). The conformal p-value for candidate label y at x_{n+1} is
p(y) = \frac{1 + \sum_{i=1}^{n} \mathbf{1}\{a_i \ge a_{n+1}(y)\}}{n+1}, \quad a_i = A(x_i,y_i;\mathcal{D}_{train}).
The level-(1-\alpha) prediction set is C(x_{n+1}) = \{y : p(y) > \alpha\}. Finite-sample coverage: \mathbb{P}(Y_{n+1} \in C(X_{n+1})) \ge 1-\alpha under exchangeability. Singularity: n=0 yields no calibration and the guarantee is void.

Mondrian operator. Let g(x) \in \{1,\dots,K\} index strata. For stratum k with calibration subset \mathcal{D}_{cal}^{(k)} of size n_k, compute stratum-specific quantile q^{(k)}_{1-\alpha}. Conditional coverage: \mathbb{P}(Y \in C(X) \mid g(X)=k) \ge 1-\alpha. Breakdown: n_k = 0 removes calibration for stratum k; n_k small (e.g., n_k < \lceil 1/(1-\alpha)\rceil) makes q^{(k)}_{1-\alpha} unstable and the set either vacuous or over-conservative. This is the formal version of the [PAGE 1] warning that "a global map hides conditional miscalibration."

Normalized operator. With difficulty estimate d(x) > 0, \tilde a_i = a_i / d(x_i). If d(x) \le 0 or d(x) is mis-specified, exchangeability of \tilde a_i fails and coverage degrades.

Conformal predictive systems operator. For ordered label space, the conformal p-values define a calibrated CDF \hat F(y\mid x) such that \hat F is a valid predictive distribution rather than merely an interval. This is strictly more informative than (point estimate, interval) pairs.

Classification refusal operator. For each class c, p_c is computed as above. Refusal rule: abstain if \max_c p_c < \tau_{\rm ref}. Coverage on the accepted set remains \ge 1-\alpha under exchangeability.

Martingale exchangeability operator. Let p_t be online p-values. Define wealth recursion W_t = W_{t-1} \cdot \phi(p_t), W_0 = 1, with \mathbb{E}[\phi(p) \mid H_0] \le 1 under the null H_0 of exchangeability. Then \{W_t\} is a non-negative supermartingale. Stopping time \tau = \inf\{t : W_t \ge \eta\} triggers drift alarm and interval suspension ([PAGE 1]). Breakdown: if p_t are not valid under H_0 or the filtration \mathcal{F}_t is misspecified, the martingale property fails and the alarm is uncalibrated.

Walk-forward constraint. [PAGE 1]: "conformalize per season on the most recent held-out slice; never one global map." This implies a seasonal recalibration clock and prohibits pooling all seasons into one calibration set.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from Vovk, Gammerman, and Shafer's algorithmic conformal prediction through Papadopoulos et al.'s inductive conformal prediction, Lei et al.'s normalized conformal prediction, Vovk's Mondrian (conditional) conformal prediction, Vovk et al.'s conformal predictive systems, and Vovk & Wang's martingale/e-process exchangeability testing. crepes packages these into an scikit-learn-compatible release, which [PAGE 1] contrasts with MAPIE: "Smaller community than MAPIE but a real packaged release (PyPI + conda-forge)." The GSE verdict is to "ADOPT — the conformal package for classification outputs and the refusal-threshold machinery; steal Mondrian + martingale tests for the t10 track even if MAPIE is the interval workhorse."

Multi-week traps. Seasonal category composition changes: a Mondrian stratum well-populated in week 1 can be empty by week 8, turning conditional coverage into nominal-only coverage. Walk-forward recalibration cadence faces a freshness-staleness tradeoff: too short a held-out slice yields too few calibration points for stable Mondrian quantiles; too long a slice risks non-exchangeability with live data. The martingale alarm can accumulate false alarms over a season if the threshold \eta is too tight under slow drift. A refusal threshold \tau_{\rm ref} calibrated on the 2025 slice may misfire in 2026 under concept drift. Finally, the per-season clock means any incident that interrupts recalibration leaves the system running on a stale calibration slice, silently invalidating the exchangeability assumption that underwrites all coverage guarantees.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. Under operational pressure, the system regresses to a single global conformal map or to point predictions, dropping Mondrian strata and refusal thresholds. [PAGE 1] explicitly warns that "a global map hides conditional miscalibration," so this regression reintroduces the exact failure mode crepes is meant to close: marginal coverage looks acceptable while conditional strata under-cover.

Counter-trap. An adversarial or selection mechanism routes decisions to the least-calibrated Mondrian stratum, or an operator suppresses the martingale alarm by redefining the calibration slice to remain artificially exchangeable with live data, thereby masking drift and keeping invalid intervals active.

Clock. The walk-forward clock mandates recalibration per season on the most recent held-out slice; [PAGE 1] prohibits one global map. The tension is between a short slice (fresh but small n_k, unstable quantiles) and a long slice (stable but potentially non-exchangeable). Under this clock, the recursive theory of mind must anticipate that the operator will, under crisis, prefer the stale global map over the fresh stratified conformal system, and must hard-code refusal and suspension rules so they cannot be manually overridden during an incident.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Conformal coverage is conditional on exchangeability of (X,Y); it does not repair broken upstream physics, biomechanics, or weather sensing. If any upstream layer is non-stationary, the input distribution shifts and the non-conformity scores are no longer exchangeable with the calibration slice, voiding the coverage guarantee regardless of the conformal method used.

Veto rules. (1) Weather/sensor missingness above threshold: veto prediction; no interval or CDF is emitted. (2) Biomechanical baseline shift detected via a feature-distribution test: veto recalibration on old strata; require a new calibration slice before resuming. (3) Physical measurement drift that alters the score scale: suspend intervals until the difficulty normalization d(x) is re-estimated.

Adjudication order. An upstream physical/biomechanical/weather veto supersedes conformal output. If weather inputs are missing, the row receives no conformal set regardless of martingale status. If the biomechanical regime has changed, existing Mondrian stratum labels are invalid and must be recomputed on post-shift data. The martingale exchangeability test from [PAGE 1] is the final arbiter: "if W1-4 stops looking exchangeable with the 2025 calibration slice, the row's intervals are suspended automatically." Only after all upstream vetoes are cleared and exchangeability is re-established may the conformal layer emit p-values, CDFs, or refusal decisions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios:

Scenario A — thin Mondrian stratum. Let stratum k have calibration size n_k. Veto rule: if n_k < n_{\min} (e.g., n_{\min} = 20 or n_k < \lceil 1/(1-\alpha)\rceil), refuse stratum-specific output; fall back to a pooled conformal set or abstain. Verifiable prediction: on held-out week w+1, if a thin stratum is emitted anyway, empirical coverage \widehat{Cov}_k falls below 1-\alpha - \delta with probability greater than 0.5, and the prediction set is either vacuous (all labels) or over-conservative, failing efficiency.

Scenario B — martingale drift alarm. Let W_t be the exchangeability martingale comparing the 2025 calibration slice to the live W1-4 slice. Veto rule: if W_t \ge \eta, suspend the row's intervals automatically ([PAGE 1]). Verifiable prediction: coverage on predictions emitted after an alarm without recalibration degrades below 1-\alpha within one update cycle; after re-calibration on a fresh held-out slice, coverage returns to \ge 1-\alpha within two seasons. Under stationary exchangeability, the false-alarm rate is bounded by Ville's inequality as P(\sup_t W_t \ge \eta) \le 1/\eta.

Scenario C — refusal starvation. For classification, compute p_c per class. Veto rule: if \max_c p_c < \tau_{\rm ref}, abstain from classification output. Verifiable prediction: conditional coverage among accepted predictions remains \ge 1-\alpha; the abstention rate rises monotonically under distribution shift; as \tau_{\rm ref} \to 1, the actionable set size goes to zero (refusal starvation), violating utility constraints even while formal coverage holds. Each scenario is testable against held-out seasonal splits with exchangeability tests and empirical coverage audits.
</RLVR_COUNTERFACTUAL_VETOES>