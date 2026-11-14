---
source: "2023 - Improving Medal Projections in Olympic Best Mark Sports - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3639
---

<NATIVE_REASONING>
The user wants me to analyze a source document about improving medal projections in Olympic best mark sports. However, the source text appears to be heavily OCR-garbled - lots of empty bullet points, fragmented text, and image placeholders. I can see fragments of:

1. A logistic regression formula: y = 1/(1 + e^{-z}) where z = b + w1*x1 + w2*x2 + ... + wn*xn (described as probability between 0,1)
2. Some kind of sum of squared errors: (1/N) * sum((p_i - y_i)^2) or similar
3. References to classifiers, samples, deltas

The document is essentially unreadable in its current form - it's mostly empty structure with OCR artifacts. I need to:

1. Acknowledge the source is severely degraded/OCR-corrupted
2. Extract what I can (logistic regression, MSE-like loss, classifier ensemble structure)
3. Follow the strict invariants:
   - Zero betting lines (no spreads, totals, moneylines, odds)
   - Zero toy equations - formal LaTeX, SI units, assumptions, exact singularity/breakdown regimes
   - Cite exact [PAGE N] markers and verbatim quotes (only PAGE 1 available)
   - >= 1,000 words across the exact XML sections
   - All 6 XML sections present

Since the source is basically garbled, I must be honest about what is and isn't recoverable. I cannot invent content. I should treat the visible fragments as the only citable evidence.

Let me plan the response:

<THINK_TRACE> (>=400 words)
- Multi-hop derivation: reconstruct intended statistical model from fragments
- Gray-zone audit: what is missing vs what is visible
- The logistic function fragment: y = 1/(1+e^{-z}), z = b + Σ w_i x_i
- The loss fragment: looks like MSE (1/N)Σ(p_i - y_i)^2 but for probabilities this is unusual (usually cross-entropy)
- Sample/Classifier delta matrix suggests ensemble or stacking
- Breakdown regimes: logistic saturation, vanishing gradients, separation, collinearity
- Page citation: [PAGE 1]

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX for logistic regression
- Formal LaTeX for MSE loss as visible
- Units: dimensionless probability [0,1], weights dimensionless or feature-dependent, bias in log-odds
- Assumptions: independence, linearity in log-odds, etc.
- Breakdown: perfect separation, multicollinearity, saturation
- Cite [PAGE 1] verbatim quotes where possible

<RETROCAUSAL_GENEALOGY>
- Historical lineage: logistic regression (Berkson 1944), Cox 1958, McFadden discrete choice, Olympic prediction literature
- Multi-week traps: peaking, tapering, injury regression to mean, home-field in Olympics (host nation effect)
- Cite [PAGE 1] where applicable, but note source doesn't contain this history

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: athletes under pressure revert to trained motor patterns
- Counter-trap: overfitting to recent form, ignoring longitudinal decay
- Clock: periodization cycles, supercompensation windows
- Cite [PAGE 1] fragments

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather vetoes
- Since source is garbled, I discuss what would veto projections but note source doesn't contain them
- Must be careful not to invent source content

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable veto scenarios + predictions
- Must be formal and verifiable
- No betting lines

Word count check: Need >= 1,000 words total across all sections. I'll aim for ~1,200-1,500.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text is labeled PAGE: 1. So I will cite [PAGE 1].

Verbatim quotes I can extract from the garbled text:
- "y= 0,1 1 + e^{-z}" (fragmented)
- "z = b + w x x x" + "w1 w2 ... wn wn model weights, xn model features, b bias term"
- "N 1 p_i - y_i^2 N sum i=1" (fragmented MSE)
- "Sample 1 Δ Δ Δ Sample 2 Δ Δ Δ Classifier 1 Classifier 2..."

I need to be extremely careful not to present invented equations as source quotes. I'll clearly separate "visible fragment" from "formal reconstruction."

Let me draft carefully.

THINK_TRACE content:
The source document is page 1 of an NESSIS 2023 paper titled "Improving Medal Projections in Olympic Best Mark Sports." The OCR is severely degraded. Visible mathematical fragments include:
1. Logistic link: y = 1/(1+e^{-z}), z = b + w1x1 + w2x2 + ... + wnxn
2. A loss term resembling mean squared error: (1/N) Σ (p_i - y_i)^2
3. Structural hints of classifier ensembles: Sample 1... Sample n, Classifier 1... Classifier n, with delta (Δ) columns.

Multi-hop derivation: If projecting medals in "best mark" sports (track & field, swimming, weightlifting—measured by time/distance/weight), the target is likely binary (medal vs no medal) or rank-based. Logistic regression maps features to P(medal). The MSE-like loss on probabilities is statistically questionable for binary outcomes (cross-entropy is canonical), suggesting either a linear probability model hybrid or an OCR misread of cross-entropy. The classifier/sample matrix suggests an ensemble or meta-learner where individual classifiers produce deltas relative to a baseline.

Gray-zone audit: The paper's title and variables are recoverable; feature definitions, data sources, regularization, validation protocol, and empirical results are not. I must not hallucinate them.

Breakdown regimes: Logistic saturation (|z| → ∞, gradient → 0), complete separation (coefficients diverge), multicollinearity (covariance singular), probability boundary (y∈{0,1} vs p∈(0,1)).

SOURCE_OPERATORS_AND_EQUATIONS:
Formalize:
p_i = σ(z_i) = 1/(1 + exp(-z_i)), z_i = b + Σ_{j=1}^n w_j x_{ij}
Loss visible: L_MSE = (1/N) Σ_{i=1}^N (p_i - y_i)^2
Canonical alternative (not in source but noted as formal): L_CE = -1/N Σ [y_i log p_i + (1-y_i) log(1-p_i)]
Units: p dimensionless [0,1], z in log-odds (dimensionless), w_j units depend on x_j, b in log-odds.
Assumements: i.i.d. observations, linear log-odds, no perfect separation, bounded features.
Breakdown: ||X|| singular, |z| > ~20 (numerical underflow), complete separation.

RETROCAUSAL_GENEALOGY:
- Berkson (1944) logistic regression
- Cox (1958) binary regression
- McFadden (1973) conditional logit for discrete choice
- Olympic medal prediction: Bernard & Busse (2004), Johnson & Ali (2004), host nation effect
- Multi-week traps: tapering, injury clustering, peaking misalignment, regression to mean after exceptional trials
- Note source [PAGE 1] doesn't contain this; it's external lineage.

RECURSIVE_THEORY_OF_MIND:
- Athlete as recursive agent: prior performance shapes expectation, expectation shapes effort, effort shapes performance.
- Crisis habit regression: under pressure, athletes revert to dominant motor engrams rather than optimized technique.
- Counter-trap: forecasters overweight recent competition (recency bias) and underweight longitudinal decay.
- Clock: periodization mesocycles (4-6 weeks), supercompensation window (48-96h post-load), circadian peaking.
- Cite [PAGE 1] only for the visible model structure, not for psychology.

CROSS_LAYER_VETO_ADJUDICATION:
Three veto layers:
1. Physical: equipment/venue (altitude, pool depth, track surface). Veto if feature mismatch between training and competition.
2. Biomechanical: technique degradation under fatigue, injury onset. Veto if acute load > chronic load (ACWR > 1.5).
3. Weather: wind > +2.0 m/s (track), temperature > 25°C (endurance), precipitation. Veto if exogenous condition outside calibration envelope.
Since source [PAGE 1] doesn't list these, mark them as external domain constraints, not source content.

RLVR_COUNTERFACTUAL_VETOES:
Three verifiable scenarios:
1. Complete separation: If a feature perfectly predicts medal status (e.g., historical qualifier standard met by only medalists), MLE weights diverge. Prediction: model fails to converge; coefficients → ∞.
2. Feature drift: If competition altitude differs from training altitude by > 1000m, oxygen partial pressure changes VO2max by ~1% per 100m. Prediction: projection error increases by δ.
3. Classifier disagreement: In ensemble, if individual classifier deltas have sign inversion (Classifier 1 says +Δ, Classifier 2 says -Δ for same sample), meta-learner variance explodes. Prediction: ensemble projection collapses to prior.

Make sure no betting lines anywhere. No mentions of odds, spreads, etc.

Word count: I need to write extensively. Let's compose.

I must ensure every section tag is present exactly as specified.

Let's write it out now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source artifact is Page 1 of "2023 - Improving Medal Projections in Olympic Best Mark Sports," presented at the New England Symposium on Statistics in Sports (NESSIS), 2023. The OCR layer is severely degraded: the page consists overwhelmingly of empty bullet markers, table-cell fragments, and picture-text placeholders, with only scattered mathematical glyphs surviving. I treat this as a partially corrupted primary source and do not infer content that is not visibly anchored to [PAGE 1].

Visible fragment A: a logistic link. The text reads, in reconstructed reading order: "y = 0,1 1 + e^{−z}" followed by "z = b + w x x x" and "w1 w2 ... wn wn model weights, xn model features, b bias term." This is a standard binary logistic regression specification:
p(y=1|x) = σ(z) = 1 / (1 + exp(−z)), z = b + Σ_{j=1}^{n} w_j x_j.
The surrounding text explicitly states y is a probability between 0 and 1, which is internally inconsistent notation (y should be the binary label, p the probability), suggesting either OCR garbling or a sloppy manuscript. Nonetheless, the operator structure—affine combination passed through a sigmoid—is recoverable from [PAGE 1].

Visible fragment B: a squared-error aggregation. The garbled sum reads "(1/N) Σ_{i=1}^{N} (p_i − y_i)^2" with superscript/subscript collisions. This is a mean-squared-error (MSE) loss over predicted probabilities p_i and targets y_i. For a binary target, MSE is statistically admissible but non-canonical; cross-entropy is the usual maximum-likelihood loss for logistic models. The presence of MSE in a medal-projection context implies either (i) a linear-probability hybrid, (ii) a regression on a continuous "best mark" discretized to medal/non-medal, or (iii) an OCR misread of cross-entropy. I cannot resolve which without legible pages.

Visible fragment C: an ensemble/classifier delta matrix. Surviving picture-text blocks show "Sample 1 … Δ Δ Δ," "Sample 2 … Δ Δ Δ," "Sample n … Δ Δ Δ," and "Classifier 1," "Classifier 2," … "Classifier n." This suggests a meta-analytic or stacking structure in which N samples are scored by M classifiers, each producing a delta (Δ) relative to a baseline projection. The deltas are unsigned in the OCR; directionality (improvement vs. degradation) is lost.

Gray-zone audit: recoverable vs. unrecoverable.
Recoverable from [PAGE 1]: title, conference, year; logistic functional form; weight/bias/feature glossary; MSE-style summation; sample-by-classifier delta matrix.
Unrecoverable: feature definitions (age, prior best mark, nationality, host-nation indicator, etc.); data source and years; regularization scheme (L1/L2/none); training-validation split; out-of-sample accuracy; calibration curves; treatment of ties/disqualifications; whether "best mark" means time, distance, or mass; how medal (binary) is encoded from rank.

Multi-hop chain: best-mark sports (swimming, track, weightlifting, shooting) produce a scalar performance. Converting that scalar to a medal indicator requires a rank cutoff (top 3). If the paper models P(medal) directly via the visible logistic equation, then x_j must encode performance proxies. If instead it models the raw mark and thresholds afterward, the logistic fragment belongs to a second-stage classifier. Either way, the ensemble delta matrix implies the final projection aggregates heterogeneous base learners. Without [PAGE 2+], I cannot adjudicate between single-stage and two-stage architectures.

Breakdown regimes identifiable from formal structure alone: (1) sigmoid saturation—when |z| → ∞, ∂σ/∂z → 0, gradients vanish; (2) complete separation—if a linear combination of features perfectly classifies medalists, MLE weights diverge to infinity; (3) multicollinearity—if feature covariance XᵀX is singular, weights are non-unique; (4) probability-boundary mismatch—targets y_i ∈ {0,1} but predictions p_i ∈ (0,1) strictly, so MSE can never reach zero and is minimized at p = empirical base rate if no features help.

I will not invent feature lists, accuracy figures, or validation tables. All formal derivations below are anchored to the visible fragments on [PAGE 1] or explicitly labeled as external domain theory.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, assumptions, and breakdown. Citations refer to [PAGE 1] of the provided source.

Visible operator 1 — logistic link (verbatim fragments from [PAGE 1]: "y= 0,1", "1 + e^{−z}", "z = b + w x x x", "w1 w2 … wn", "xn model features", "b bias term"):
\[
p_i \equiv P(y_i=1\mid \mathbf{x}_i) = \sigma(z_i) = \frac{1}{1+\exp(-z_i)},\qquad
z_i = b + \sum_{j=1}^{n} w_j x_{ij}.
\]
Units: \(p_i\) is dimensionless, \(p_i \in (0,1)\). \(z_i\) is in log-odds (dimensionless). \(b\) is in log-odds. Each \(w_j\) carries units reciprocal to \(x_{ij}\) so that \(w_j x_{ij}\) is dimensionless. If \(x_{ij}\) is a raw best mark in seconds, \(w_j\) is s⁻¹; if standardized, \(w_j\) is dimensionless.

Visible operator 2 — squared-error aggregation (verbatim fragments from [PAGE 1]: "(1/N)", sum over i=1 to N, "(p_i − y_i)^2"):
\[
\mathcal{L}_{\mathrm{MSE}} = \frac{1}{N}\sum_{i=1}^{N} (p_i - y_i)^2.
\]
Units: dimensionless squared probability. Canonical maximum-likelihood alternative for binary \(y_i\) (not visible on [PAGE 1], supplied for contrast only):
\[
\mathcal{L}_{\mathrm{CE}} = -\frac{1}{N}\sum_{i=1}^{N} \left[ y_i \log p_i + (1-y_i)\log(1-p_i) \right].
\]

Visible operator 3 — classifier/sample delta matrix (verbatim fragments from [PAGE 1]: "Sample 1", "Sample n", "Classifier 1", "Classifier n", repeated "Δ"):
Let \(c \in \{1,\dots,C\}\) index classifiers and \(i \in \{1,\dots,N\}\) index samples/athletes-events. Each cell stores \(\Delta_{ic}\), presumably the difference between classifier \(c\)'s projection and a baseline for sample \(i\). The meta-projection is some aggregation \(\hat{p}_i = F(\{\Delta_{ic}\}_{c=1}^C)\). \(F\) is not specified on [PAGE 1].

Assumptions implicit in the visible [PAGE 1] formalism:
1. Conditional independence of observations given features.
2. Linearity of log-odds in features: \(\log\frac{p}{1-p} = z\).
3. No perfect separation: \(\nexists \mathbf{w}, b\) such that \(z_i > 0 \iff y_i = 1\) for all \(i\).
4. Feature covariance \(\Sigma = \mathrm{Cov}(\mathbf{x})\) is positive definite (non-singular).
5. Targets are binary medal indicators \(y_i \in \{0,1\}\), despite the garbled text calling \(y\) a probability.

Exact singularity/breakdown regimes:
- Sigmoid saturation: if \(|z_i| \gtrsim 20\), \(\exp(-z_i)\) underflows in IEEE-754 double precision; \(\partial \mathcal{L}/\partial w_j \to 0\), learning stalls.
- Complete separation: maximum-likelihood estimates \(\hat{\mathbf{w}}\) do not exist (coefficients diverge to \(\pm\infty\)).
- Multicollinearity: if \(\det(\mathbf{X}^\top \mathbf{X}) = 0\), \((\mathbf{X}^\top \mathbf{X})^{-1}\) is undefined and OLS/IRLS weight updates are non-unique.
- Probability bound: because \(p_i \in (0,1)\) strictly and \(y_i \in \{0,1\}\), \(\mathcal{L}_{\mathrm{MSE}} > 0\) even at perfect ranking; the loss floor is the Bernoulli variance \(p(1-p)\).

No betting lines, spreads, totals, moneylines, or odds are referenced on [PAGE 1] or in this section.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage of the visible formalism, plus multi-week trap structure.

The logistic regression operator on [PAGE 1] descends from Berkson (1944), who introduced the logistic function for bioassay, and Cox (1958), who established the binary regression framework. The conditional logit form used for discrete choice was formalized by McFadden (1973). In Olympic contexts, medal projection draws on national-sport-system models (e.g., Bernard & Busse, 2004; Johnson & Ali, 2004) that relate GDP, population, past performance, and host-nation status to medal counts. "Best mark sports" specifically refers to events decided by a scalar extremum—time (swimming, track), distance (throws, jumps), or mass (weightlifting)—rather than judged execution.

The multi-week trap structure relevant to projecting best-mark outcomes operates on three timescales:
1. The microcycle (1 week): acute training load, sleep debt, and minor illness. An athlete peaking for a final may carry residual fatigue from semifinals held 48–72 hours earlier.
2. The mesocycle (3–6 weeks): the taper. Performance typically supercompensates after a 40–60% volume reduction, but the optimal nadir of fatigue is individual and difficult to observe from public split-times alone.
3. The macrocycle (4 years): Olympic periodization. Athletes often peak once per quadrennium; regressing on the previous World Championships (1–2 years prior) risks cohort drift due to retirement, injury, or nation-specific funding changes.

Recursive trap: a forecaster using only the visible logistic form on [PAGE 1] would treat \(x_{ij}\) as static. But best marks are path-dependent: \(x_i(t)\) depends on \(x_i(t-\Delta t)\), recovery, and competition scheduling. If the source paper (as hinted by the ensemble delta matrix on [PAGE 1]) stacks classifier deltas, each base learner may overfit to a different temporal window—one to recent form, one to career bests, one to head-to-head records. The recursion is: past performance → expectation → competitive arousal → motor execution → new performance. Forecasters who fail to model the expectation-to-arousal link commit the "recent-form trap," overweighting the immediately preceding meet and underweighting the longitudinal decay curve.

Source boundary note: [PAGE 1] contains no historical citations, no athlete physiology, and no temporal modeling. The genealogy above is external context, not verbatim source content.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Recursive theory of mind models the athlete as an agent who simulates the competition, and the forecaster as an agent who simulates the athlete's simulation. Three layers:

Layer 1 — Crisis habit regression. Under high-stakes conditions (Olympic final), athletes do not execute the statistically optimal technique; they regress to the dominant motor engram consolidated over thousands of repetitions. If a swimmer's training log shows a breathing pattern shift under lactate stress, the logistic feature \(x_{ij}\) representing "personal best" is inflated relative to final-race execution. The visible model on [PAGE 1] has no feature for arousal-dependent technique degradation; thus \(P(\text{medal}\mid \text{PB})\) is systematically overestimated for athletes whose personal bests were set in low-pressure time trials.

Layer 2 — Counter-trap. The forecaster's counter-trap is recency bias: over-weighting the most recent competition (e.g., Olympic trials or a Diamond League final) because it is cognitively available. The ensemble delta matrix visible on [PAGE 1] ("Classifier 1 … Classifier n", each with Δ) is vulnerable to this if base learners are trained on rolling windows. A classifier fed the last 6 weeks will project a different mean than one fed the last 2 years. When their deltas have opposite signs for the same sample, the meta-learner must choose; absent a specified aggregation rule \(F\) on [PAGE 1], the projection is unstable.

Layer 3 — Clock. Biological time, not calendar time, governs best-mark expression. The circadian core-temperature peak (typically 16:00–18:00) aligns with many Olympic finals; athletes whose chronotypes mismatch the session start time suffer a performance decrement. The supercompensation clock after a hard training block is roughly 48–96 hours. If semifinals occur 48 hours before the final, residual fatigue shifts the distribution of \(z_i\) downward. None of these clock variables appear on [PAGE 1]; the visible feature set (as far as can be read) does not include session time, chronotype, or inter-round recovery.

The recursion closes: the forecaster projects \(p_i\), the public projection influences athlete psychology (stereotype threat or confidence), which alters \(z_i\), invalidating the projection. The only robust defense is to treat \(p_i\) as a conditional distribution over trajectories, not a point estimate.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto layers. Any projection from the [PAGE 1] model must be vetoed if a cross-layer constraint is violated. None of these vetoes appear on [PAGE 1]; they are external domain constraints applied to the source model.

Veto Layer 1 — Physical / venue. Best marks are venue-specific. Altitude reduces air resistance (helping sprints and jumps, harming endurance), pool depth and gutter design affect wave drag, and track surface stiffness affects return energy. If the competition venue differs from the feature-calibration venue by more than the model's tolerance (e.g., altitude difference > 500 m), the projection \(\hat{p}_i\) is vetoed because feature \(x_{ij}\) (best mark) is measured in a different physical regime.

Veto Layer 2 — Biomechanical / acute load. The acute-to-chronic workload ratio (ACWR) is a standard injury/performance risk index. If an athlete's acute load (last 7 days) divided by chronic load (previous 28 days) exceeds approximately 1.5, injury probability rises sharply. A projected medal probability from [PAGE 1] that ignores ACWR > 1.5 must be vetoed: the feature "prior best mark" assumes a healthy, unloaded athlete, which is false under overload.

Veto Layer 3 — Weather / exogenous conditions. For outdoor best-mark sports, wind assistance > +2.0 m/s is illegal for record purposes but legal for competition; it materially changes sprint and jump marks. Temperature > 25 °C degrades endurance performance; precipitation alters track grip. If the forecasted competition condition lies outside the historical range used to estimate \(w_j\) on [PAGE 1], the logistic projection is out-of-distribution and vetoed.

Adjudication rule: a projection survives only if all three layers pass. Physical mismatch voids the feature scale; biomechanical overload voids the athlete-state assumption; weather mismatch voids the environmental stationarity. If any layer vetoes, \(p_i\) must be recomputed with venue-, load-, and weather-calibrated features or declared null.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with formal predictions. No betting lines are used.

Scenario 1 — Complete separation (verifiable via design matrix). Counterfactual: construct a feature \(x_{i1}\) equal to 1 if the athlete met the Olympic qualifying standard and 0 otherwise, and suppose in the observed data every medalist (\(y_i=1\)) met the standard while every non-medalist (\(y_i=0\)) did not. Then there exists \(\mathbf{w}\) such that \(z_i > 0\) for all \(y_i=1\) and \(z_i < 0\) for all \(y_i=0\). Prediction: the maximum-likelihood logistic estimates on [PAGE 1] do not converge; \(\|\hat{\mathbf{w}}\|_2 \to \infty\) as iterations increase, and the fitted probabilities saturate at \(p_i \to 1\) for medalists and \(p_i \to 0\) for non-medalists. Verification: monitor the norm of the weight vector during iteratively reweighted least squares; divergence indicates separation.

Scenario 2 — Feature drift under altitude change (verifiable via physics). Counterfactual: a runner's calibration best mark \(x_{i,\text{mark}}\) was set at sea level; the Olympic final is at 2,240 m altitude (e.g., Mexico City-type condition). At altitude, barometric pressure drops by ~23%, reducing arterial oxygen saturation. Prediction: for middle- and long-distance events, the true best mark at altitude is slower by approximately 1–2% per 1,000 m of elevation gain relative to sea level. The [PAGE 1] logistic model, trained on sea-level features, will overestimate \(p_i\) for sea-level specialists and underestimate \(p_i\) for altitude-acclimatized athletes. Verification: compare projected vs. actual rank for athletes with and without altitude training history; systematic sign error by altitude exposure confirms veto.

Scenario 3 — Classifier delta sign inversion (verifiable via ensemble outputs). Counterfactual: two base classifiers on the [PAGE 1] delta matrix produce opposing deltas for the same sample \(i\): \(\Delta_{i1} > 0\) (Classifier 1 projects improvement over baseline) and \(\Delta_{i2} < 0\) (Classifier 2 projects degradation). If the aggregation function \(F\) is a simple mean and the two classifiers have equal weight, \(\hat{p}_i\) collapses toward the baseline prior regardless of athlete quality. Prediction: for samples where base-learners disagree in sign, the variance of \(\hat{p}_i\) across bootstrap resamples of the training set increases by a factor of at least 2 relative to unanimous samples, and calibration (reliability diagram) degrades sharply (expected calibration error rises). Verification: compute sign-agreement rate across classifiers per sample; plot Brier score stratified by agreement vs. disagreement. A statistically significant Brier-score gap confirms the ensemble veto.
</RLVR_COUNTERFACTUAL_VETOES>