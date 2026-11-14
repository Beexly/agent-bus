---
source: "probkit-probmetrics.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4000
---

<NATIVE_REASONING>
The user has provided a source document about probkit/probmetrics and wants me to act as the GSE + GSI Frontier Reasoning Foundry. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE 1] markers and verbatim quotes since source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful about the source text. The source is about a Python package for calibration methods. It mentions NFL seasons, Garrett, CalArena, etc. But it's NOT about sports betting - it's about ML calibration. I must avoid betting lines entirely.

Let me plan the content:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation. I need to analyze the probmetrics library, its calibration methods (temperature scaling, SMS, beta calibration, spline, scaling-binning, BBQ/ENIR, Lp ECE estimators), the exchangeability assumption, walk-forward setup, refusal thresholds, per-signal rows, isotonic regression gating, regime shifts between NFL seasons, contaminated-fit failure mode (13.5pp). I should derive why temperature scaling is 1 parameter, why isotonic needs large n, why binned ECE has artifacts, why Lp estimators avoid binning. Gray-zone audit: adapter needed for sklearn/gradient-boosting heads, exchangeability assumption violations, recalibration cadence, live-check W1-4, refusal policies not supported.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations. Temperature scaling: p_i = softmax(z_i / T), T > 0 learned by minimizing NLL on calibration set. Matrix scaling: P = softmax(W Z + b) or similar regularized. Beta calibration: parameters for beta distribution. Spline calibration: monotonic spline maps. Scaling-binning: combine scaling with binning. ECE definition: sum over bins |acc(conf) - conf| * weight. Lp ECE estimator: classifier-based, no binning. Units: probabilities in [0,1], logits in R, NLL in nats (or bits), T dimensionless. Page citation [PAGE 1] since only 1 page. Breakdown regimes: T -> 0 (overconfident), T -> infinity (uniform), exchangeability violation (covariate shift), small n isotonic overfitting.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Platt scaling (1999), temperature scaling (Guo et al. 2017 "On Calibration of Modern Neural Networks"), matrix scaling, beta calibration (Kull et al.), isotonic regression (Zadrozny & Elkan 2002), ECE (Naeini et al. 2015), CalArena benchmark, gpleiss/temperature_scaling (2017), probkit probmetrics as maintained successor (2025-26 arXiv papers). Multi-week traps: walk-forward recalibration per season, fitting on 2022-24 measuring on 2025 then re-fit on 2025 for 2026, live-checked W1-4. Trap: one-global-map-across-seasons = contaminated fit (13.5pp error). Trap: assuming exchangeability when regime shift exists.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: under pressure, teams/analysts revert to hand-rolled gist code or global maps. Counter-trap: adopt probmetrics, per-signal gating by CalArena sample size, Lp ECE. Clock: fit seconds, single machine, W1-4 live check, seasonal recalibration. Theory of mind: what does the modeler think the opponent/market thinks? How does recalibration affect downstream decisions? Regression to the mean in calibration habits during crises.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since this is ML calibration layer, physical vetoes might not apply directly, but I can frame it as: the calibration layer sits atop signal generation; if upstream physical layer is vetoed (injury, weather, roster), calibration cannot rescue it. The library calibrates probabilities, not abstention. Veto conditions: non-exchangeability (regime shift), tiny samples for isotonic, refusal thresholds needed, adapter missing for sklearn/GB. Physical layer vetoes override calibration layer.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable veto scenarios + predictions.
1. Scenario: 2026 deployment uses 2022-24 global fit without 2025 re-fit; regime shift between seasons. Prediction: calibration drift, ECE increases, contaminated-fit failure mode ~13.5pp degradation.
2. Scenario: isotonic regression applied to per-signal row with n < threshold (e.g., n < 100 or small sample). Prediction: overfitting, calibration error spikes on held-out set, temperature scaling would dominate per CalArena.
3. Scenario: binned ECE used instead of Lp estimator with fine-grained probabilities or imbalanced classes. Prediction: binning artifacts mask miscalibration, false confidence in calibration quality.

Need to ensure total words >= 1000 across sections. Let me write substantial content for each.

Important: cite [PAGE 1] and verbatim quotes from source. Since only 1 page, I'll cite [PAGE 1] frequently.

Verbatim quotes to use:
- "A PyTorch-based package of all modern post-hoc classification calibration methods in one place"
- "fits in seconds; single-machine"
- "Most methods assume the held-out set is exchangeable with deployment data — i.e., no regime shift between the fit set and the season you're predicting."
- "Per-signal rows with tiny samples: default to its temperature scaling (1 parameter, cannot overfit)"
- "Isotonic regression is the method to reach for only when n is large"
- "A one-global-map-across-seasons approach is exactly the contaminated-fit failure mode Garrett already threw out (13.5pp)"
- "skip this library for refusals — it calibrates probabilities, not abstention policies."
- "ADOPT — pip-install it as the standard calibration-methods library for per-signal rows"

No betting lines. No toy equations. Formal LaTeX only.

Let's draft.

THINK_TRACE: Need >=400 words. I'll write about 500-600 words discussing multi-hop derivation: logits -> probabilities -> calibration map -> evaluation metric -> deployment pipeline -> regime shift detection -> recalibration cadence. Gray-zone audit: adapter requirement, exchangeability, refusal policies, isotonic sample size gating, live-check window.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math.
Temperature scaling: Let logits z ∈ R^C. Calibrated probability p_c = exp(z_c/T) / sum_j exp(z_j/T). T ∈ (0,∞) fit by minimizing NLL = -1/N sum log p_{y_i}. T=1 is identity; T→0+ approaches argmax (overconfident); T→∞ approaches uniform (underconfident). Units: logits dimensionless (or log-odds scale), T dimensionless, probabilities in [0,1], NLL in nats.
Matrix scaling: P = softmax(W Z + b) with regularization ||W||_F^2 + ||b||^2. W ∈ R^{C×C}, b ∈ R^C.
Beta calibration: p = I_{a·f + b}(α, β) maybe too specific? Keep general: monotonic parametric map g_θ: [0,1]→[0,1].
Lp ECE: Instead of binned ECE = sum_b |acc_b - conf_b| * n_b/N, use classifier-based estimator that regresses indicator of correctness on confidence to estimate E[|P(Y=1|f(X)=p) - p|] without binning.
Breakdown: exchangeability violation P_cal(X,Y) ≠ P_deploy(X,Y). Small n isotonic overfits (VC dimension grows with n). Refusals: no abstention threshold τ, so P(deploy) = 1 always.

RETROCAUSAL_GENEALOGY: Platt 1999, Zadrozny & Elkan 2001/2002 (isotonic, binning), Guo et al. 2017 temperature scaling, Kull et al. beta calibration, Naeini et al. 2015 ECE, gpleiss 2017 gist, probkit 2025-26 successor. Multi-week traps: seasonal regime shift, W1-4 live check, contaminated fit 13.5pp.

RECURSIVE_THEORY_OF_MIND: Modeler's crisis habit: under deadline pressure, copy gpleiss gist or use global map. Counter-trap: mandated probmetrics adoption, per-signal CalArena gate, Lp ECE. Clock: seconds to fit, seasonal cadence, W1-4 live. Higher-order: what does the downstream decision layer think the calibration layer thinks? If calibration layer is static but world shifts, decisions are systematically mispriced.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer (injuries, weather, venue) generates raw features. Signal layer produces probabilities. Calibration layer post-hoc adjusts. If physical layer is vetoed (e.g., key player out, game postponed), no calibration map fixes input distribution shift. Veto proofs: non-exchangeability veto, tiny-sample isotonic veto, refusal-policy veto, adapter-missing veto.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with if/then predictions.

Let's ensure word count. I'll aim for roughly:
THINK_TRACE: 500
SOURCE_OPERATORS: 350
RETROCAUSAL: 350
RECURSIVE: 300
CROSS_LAYER: 250
RLVR: 200
Total ~1950. Good.

No mention of odds, spreads, etc. The word "predicting" is fine. "Probabilities" fine. No betting.

Let's write carefully with [PAGE 1] citations.

Need exact XML tags.

Let's produce the final response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source text [PAGE 1] positions probkit/probmetrics as the maintained successor to gpleiss/temperature_scaling, explicitly adopted by GSE as the standard calibration-methods library for per-signal rows. The first derivation hop is architectural: the library consumes a trained classifier's logits or probabilities plus a held-out labeled calibration set [PAGE 1]. In formal terms, let f: X → R^C produce logits z = f(x), and let the calibration set D_cal = {(x_i, y_i)}_{i=1}^N be held out from training. The calibration problem is to learn a map g_θ: R^C → Δ^{C-1} such that P(Y = c | g_θ(z)_c = p) ≈ p. GSE's constraint is that its heads are sklearn/gradient-boosting, not PyTorch, so an adapter is required for probability-in/probability-out maps [PAGE 1]. This is trivial but non-zero engineering: it introduces a serialization boundary and a version-coupling risk between the signal model and the calibration adapter.

The second hop is method selection under sample-size constraints. The source states that per-signal rows with tiny samples should default to temperature scaling because it has one parameter and cannot overfit [PAGE 1]. Formally, temperature scaling applies p_c = exp(z_c/T) / Σ_j exp(z_j/T) with T ∈ (0, ∞) fit by minimizing negative log-likelihood on D_cal. With one degree of freedom, the estimator variance scales as O(1/N) and bias is controlled by the single global rescaling of logit sharpness. Isotonic regression, by contrast, is nonparametric and fits a monotonic step function with up to N free parameters; the source gates it for large n only [PAGE 1], because in small-sample regimes it memorizes calibration noise rather than learning calibration structure. The CalArena benchmark is invoked as the evidence gate that tells GSE which method wins at which sample size, removing guesswork [PAGE 1].

The third hop is temporal: walk-forward recalibration per season [PAGE 1]. Fit on 2022–24, measure on 2025, then re-fit on 2025 for 2026 deployment, live-checked on W1–4. The critical failure mode is the one-global-map-across-seasons approach, identified as the contaminated-fit failure mode Garrett threw out at 13.5pp [PAGE 1]. This 13.5pp figure represents the degradation from regime shift between NFL seasons; the source explicitly notes that most methods assume the held-out set is exchangeable with deployment data—i.e., no regime shift between fit set and season [PAGE 1]. When exchangeability fails, P_cal(X,Y) ≠ P_deploy(X,Y), and any g_θ fit on D_cal is systematically mis-specified for deployment. Because fits take seconds on a single machine [PAGE 1], the cost of seasonal re-fitting is negligible compared to the cost of using a stale map.

Gray-zone audit: (1) The library calibrates probabilities, not abstention policies, so refusal thresholds are out of scope [PAGE 1]; if GSE needs selective prediction, a separate abstention layer must be engineered. (2) The exchangeability assumption is the strongest epistemic fragility; no statistical test within probmetrics can detect regime shift if D_cal and deployment data are not labeled concurrently. (3) The adapter from sklearn/gradient-boosting heads to PyTorch-centric probmetrics is described as trivial [PAGE 1], but "trivial" does not mean zero-risk: it creates a dependency on probability outputs that may not be well-calibrated before calibration, and it assumes the base model's rank ordering is acceptable. (4) Lp calibration-error estimators replace binned ECE to avoid binning artifacts [PAGE 1], which is methodologically sound but introduces a new hyperparameter (the classifier used to estimate calibration error) that must itself be validated.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, page citations, and breakdown regimes.

Source anchor: [PAGE 1]. Verbatim: "A PyTorch-based package of all modern post-hoc classification calibration methods in one place." Verbatim: "fits in seconds; single-machine." Verbatim: "Most methods assume the held-out set is exchangeable with deployment data — i.e., no regime shift between the fit set and the season you're predicting." Verbatim: "Per-signal rows with tiny samples: default to its temperature scaling (1 parameter, cannot overfit)." Verbatim: "Isotonic regression is the method to reach for only when n is large." Verbatim: "A one-global-map-across-seasons approach is exactly the contaminated-fit failure mode Garrett already threw out (13.5pp)." Verbatim: "skip this library for refusals — it calibrates probabilities, not abstention policies." Verbatim: "ADOPT — pip-install it as the standard calibration-methods library for per-signal rows."

Operator 1 — Temperature scaling. Input logits z ∈ R^C. Output calibrated probabilities p ∈ Δ^{C-1}, the (C−1)-simplex, so p_c ∈ [0,1] and Σ_c p_c = 1. Unit of probability: dimensionless [0,1]. Map:
p_c = exp(z_c / T) / Σ_{j=1}^C exp(z_j / T), T ∈ (0, ∞).
Parameter T is fit by minimizing held-out negative log-likelihood:
NLL(T) = −(1/N) Σ_{i=1}^N log p_{y_i}(z_i; T), unit: nats.
T = 1 is the identity map (no calibration). T → 0+ drives p toward one-hot argmax (overconfident, sharpness → ∞). T → ∞ drives p toward uniform 1/C (underconfident, entropy → log C). Singularity: T cannot be exactly 0 or ∞; numerical underflow occurs when |z_c − z_max|/T ≪ −30 in float32.

Operator 2 — Structured matrix scaling (SMS). Let Z ∈ R^{N×C} be the logit matrix on D_cal. Learn W ∈ R^{C×C}, b ∈ R^C with Tikhonov regularization:
min_{W,b} −(1/N) Σ_i log [softmax(W z_i + b)]_{y_i} + λ(‖W‖_F^2 + ‖b‖_2^2).
Unit: logits treated as dimensionless real scalars; W dimensionless, b in logit units. Breakdown: if C is large relative to N and λ is under-specified, SMS overfits; regularization path must be cross-validated on D_cal.

Operator 3 — Beta / spline / scaling-binning. General form: monotonic map g_θ: [0,1] → [0,1], g_θ(p) = P_calibrated. Units: input and output probabilities both in [0,1]. Beta calibration uses two or three parameters of a beta CDF transform; spline calibration uses a monotonic B-spline with knots; scaling-binning applies global scaling then bin-wise correction. Breakdown: monotonicity constraints preserve rank order but cannot fix miscalibration that violates monotonicity in the base scores; small-n binning yields empty or sparse bins with undefined accuracy.

Operator 4 — Lp calibration-error estimator (replacing binned ECE). Binned ECE:
ECE_bins = Σ_{b=1}^B (n_b / N) |acc_b − conf_b|, unit: probability error in [0,1].
Breakdown: binning artifacts arise when B is too large (sparse bins, high variance) or too small (bias, within-bin heterogeneity masked). The Lp estimator trains a classifier h: [0,1] → [0,1] to regress correctness 1{ŷ = y} on confidence p, then estimates E[|P(Y = ŷ | p) − p|] without fixed bins. Unit: [0,1]. Breakdown: h itself can overfit if N is small; requires a validation split of D_cal or regularization.

Breakdown regime summary — exchangeability violation. Let P_cal and P_deploy denote joint distributions over (X, Y). If P_cal ≠ P_deploy (covariate shift, label shift, or concept drift between seasons), then g_θ* = argmin_θ E_{P_cal}[L(y, g_θ(f(x)))] is not necessarily argmin_θ E_{P_deploy}[...]. The source explicitly identifies regime shift between NFL seasons as real [PAGE 1], and the 13.5pp contaminated-fit penalty [PAGE 1] quantifies the cost of ignoring it.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

Lineage hop 1 — Platt scaling (1999): the first widely used post-hoc calibration method, fitting a logistic regression on SVM outputs to map scores to probabilities. It assumed a parametric sigmoid and required a held-out set, establishing the calibration-on-wire pattern that probmetrics generalizes [PAGE 1 context: post-hoc classification calibration methods].

Lineage hop 2 — Zadrozny & Elkan (2001/2002): introduced isotonic regression and binning-based calibration, proving nonparametric monotonic maps could outperform Platt when data was sufficient. This is the direct intellectual ancestor of the "isotonic only when n is large" gate in the GSE lens [PAGE 1].

Lineage hop 3 — Guo et al. (2017), "On Calibration of Modern Neural Networks": demonstrated temperature scaling as a single-parameter post-hoc method for deep networks, showing modern nets are accurate but poorly calibrated. The gpleiss/temperature_scaling GitHub gist operationalized this; probkit/probmetrics is explicitly the maintained successor pointed to by that repository's "REPO UNMAINTAINED" banner [PAGE 1].

Lineage hop 4 — Kull et al. (beta calibration), Naeini et al. (2015, expected calibration error), and subsequent CalArena benchmarking: extended the toolkit to beta calibration, spline calibration, scaling-binning, and netcal's BBQ/ENIR, plus classifier-based Lp calibration-error estimators [PAGE 1]. The probmetrics library integrates every CalArena-benchmarked method, making it the reference implementation set for that benchmark [PAGE 1].

Multi-week trap 1 — Seasonal regime shift. The walk-forward protocol is fit on 2022–24, measure on 2025, re-fit on 2025 for 2026 deployment, live-checked on W1–4 [PAGE 1]. The trap is treating the 2022–24 fit as stationary across the 2025 season. NFL seasons exhibit regime shifts (roster turnover, coaching changes, rule emphasis), so exchangeability between fit set and deployment season fails [PAGE 1]. The consequence is systematic miscalibration that no amount of within-season tuning can fully repair if the map is never re-fit.

Multi-week trap 2 — The contaminated-fit failure mode. A one-global-map-across-seasons approach is explicitly the contaminated-fit failure mode Garrett discarded at 13.5pp [PAGE 1]. "Contaminated" here means the calibration parameters encode distributional information from seasons that no longer reflect the deployment environment, producing a 13.5-percentage-point degradation in whatever downstream metric GSE tracks. The 13.5pp is not a betting line; it is an error-band degradation from stale calibration.

Multi-week trap 3 — Small-signal isotonic overfitting. Per-signal rows with tiny samples risk isotonic regression memorizing noise [PAGE 1]. Across a multi-week season, a signal observed only a few times per week accumulates slowly; applying isotonic too early fits week-specific idiosyncrasies. The CalArena benchmark must gate the method choice per signal and per sample size [PAGE 1], otherwise the calibration layer introduces variance rather than reducing it.

Multi-week trap 4 — Refusal-policy absence. probmetrics calibrates probabilities, not abstention [PAGE 1]. If the downstream system needs to decline predictions under low confidence, the calibration library provides no τ threshold or coverage guarantee. Over weeks, this manifests as forced predictions on low-quality signals, which compounds error when regime shift is also present.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression. Under time pressure—such as a model deployment deadline before Week 1 or a live incident during W1–4—modelers regress to the lowest-effort available artifact: hand-rolling temperature scaling from the gpleiss gist, or applying a single global map across all signals and all seasons [PAGE 1]. The source explicitly warns against hand-rolling temperature scaling, calling probmetrics the tested version [PAGE 1], and labels the one-global-map approach the contaminated-fit failure mode at 13.5pp [PAGE 1]. In a crisis, the habit regression is to skip the adapter engineering, skip per-signal method gating, and skip seasonal re-fit, because each step feels like optional overhead. This regression produces exactly the failure modes the source was written to prevent.

Counter-trap. The mandated counter-trap is to adopt probmetrics as the standard library [PAGE 1], use its Lp calibration-error estimators instead of naive binned ECE [PAGE 1], and gate isotonic regression behind CalArena sample-size evidence [PAGE 1]. The counter-trap operates at three levels: (a) procedural—walk-forward recalibration per season with live W1–4 checks [PAGE 1]; (b) methodological—temperature scaling or scaling-binning/beta for tiny samples, isotonic only when n is large [PAGE 1]; (c) metric—Lp ECE to avoid binning artifacts that mask miscalibration [PAGE 1]. The counter-trap assumes the modeler recognizes that calibration is not a one-time fit but a maintained, seasonal pipeline.

Recursive theory of mind. Layer 1: the base signal model produces probabilities. Layer 2: the calibration layer transforms those probabilities. Layer 3: the decision layer consumes calibrated probabilities. The recursive question is: what does Layer 3 believe Layer 2 believes about the world, and what does Layer 2 believe Layer 3 will do with its output? If Layer 2 uses a stale global map, Layer 3 receives probabilities that are systematically overconfident or underconfident relative to the current season. Layer 3, unaware of the staleness, makes decisions as if the calibration were valid. This is a second-order misalignment: the error is not in the probability values per se, but in the shared epistemic state between calibration and decision layers. The counter-trap restores alignment by forcing Layer 2 to re-fit on recent data and report Lp ECE, making miscalibration visible to Layer 3 before decisions are locked.

Clock. The temporal constraint is favorable: fits are seconds, single-machine [PAGE 1], so seasonal re-fit and W1–4 live checks are operationally cheap. The binding constraint is not compute but discipline: the team must execute the re-fit and live-check cadence even when the previous season's map appears acceptable. The clock therefore favors the counter-trap only if the process is automated; if re-fit requires manual intervention, crisis habit regression will win.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof and cross-layer arbitration.

The calibration layer in probmetrics is a post-hoc statistical map acting on classifier outputs [PAGE 1]. It does not generate features, model physical dynamics, or observe biomechanical or weather states. Therefore, any veto originating upstream of the probability layer is absolute with respect to calibration: if the physical layer is compromised, no calibration map can repair the input.

Veto 1 — Non-exchangeability / regime shift. If the held-out calibration set is not exchangeable with deployment data [PAGE 1], the calibration map is invalid by assumption. This is a distributional veto, not a physical one, but it functions identically: the cross-layer pipeline is halted or flagged. Remedy: re-fit on recent data or withhold deployment until exchangeability is re-established.

Veto 2 — Tiny-sample isotonic request. If a per-signal row has insufficient n for isotonic regression [PAGE 1], the veto is methodological: isotonic is withheld and temperature scaling/scaling-binning/beta is substituted per CalArena evidence [PAGE 1]. This prevents overfitting in the calibration layer itself.

Veto 3 — Refusal-policy requirement. If the downstream system requires abstention (selective prediction, coverage constraints, or refusal thresholds), probmetrics is vetoed outright [PAGE 1]: "skip this library for refusals — it calibrates probabilities, not abstention policies." A separate abstention layer must be constructed; calibration alone cannot supply a coverage guarantee.

Veto 4 — Adapter incompatibility. GSE heads are sklearn/gradient-boosting, requiring an adapter for probability-in/probability-out maps [PAGE 1]. If the base model does not emit probabilities or logits in a form the adapter can consume (e.g., it outputs only class labels), probmetrics is vetoed until a probability-generating wrapper is built.

Physical/biomechanical/weather note. Although the source text contains no explicit weather or biomechanical operators, the cross-layer logic is that calibration is downstream of all signal generation. If a weather event, injury, or venue change alters the base feature distribution such that the classifier's pre-calibration logits are invalid, temperature scaling cannot compensate because it operates only on the logit magnitude, not on the feature-space validity. The veto is enforced at the signal-generation layer, not the calibration layer.

Adjudication order: (1) physical/feature-layer veto halts pipeline; (2) exchangeability veto halts calibration fit; (3) sample-size veto selects method; (4) refusal-policy veto routes to abstention layer; (5) if all clear, probmetrics applies temperature scaling/SMS/beta per CalArena gate and reports Lp ECE [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with predictions.

RLVR Veto Scenario 1 — Stale global map across regime shift.
Setup: GSE deploys a single calibration map fit on 2022–24 data into the 2026 season without re-fitting on 2025, despite known regime shifts between NFL seasons [PAGE 1]. Verification condition: compute Lp calibration error on 2025 holdout using the 2022–24 map versus a 2025-refit map. Prediction: the stale map exhibits significantly higher Lp ECE, consistent with the 13.5pp contaminated-fit degradation attributed to the one-global-map failure mode [PAGE 1]. If the gap exceeds a pre-registered threshold (e.g., 5 percentage points in Lp ECE), the deployment is vetoed and the 2025-refit map is mandated.

RLVR Veto Scenario 2 — Isotonic regression on tiny per-signal samples.
Setup: A per-signal row with n calibration observations below the CalArena-determined large-n threshold is assigned isotonic regression instead of temperature scaling [PAGE 1]. Verification condition: split the tiny calibration set into fit and probe; compare probe-set Lp ECE between isotonic and temperature scaling. Prediction: isotonic overfits the fit set and generalizes worse on the probe, with higher probe Lp ECE and wider confidence intervals; temperature scaling dominates. If isotonic probe ECE exceeds temperature scaling probe ECE by more than a pre-set margin, the isotonic assignment is vetoed and replaced with temperature scaling per the tiny-sample default [PAGE 1].

RLVR Veto Scenario 3 — Binned ECE masking miscalibration.
Setup: GSE evaluates calibration using naive binned ECE with a coarse binning scheme on a classifier producing highly skewed probabilities (e.g., most predictions clustered near 0.9). Verification condition: compute binned ECE and Lp ECE on the same held-out set; compare rankings of two candidate calibration maps. Prediction: binned ECE ranks both maps as acceptably calibrated due to binning artifacts (empty/sparse bins, within-bin heterogeneity), while the Lp estimator reveals one map is substantially miscalibrated [PAGE 1]. If binned ECE and Lp ECE disagree on map selection by more than a pre-registered tolerance, the binned-ECE-based decision is vetoed and the Lp estimator is used as the authoritative metric [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>