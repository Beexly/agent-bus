---
source: "uncbiag-LTS.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4489
---

<NATIVE_REASONING>
The user wants me to process a source document about Local Temperature Scaling (LTS) from uncbiag/LTS and produce a response following strict invariants.

Key requirements:
1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Source text provided is 1 page (PAGES: 1). I need to cite [PAGE 1] markers and verbatim quotes.

Important: The source mentions NFL rows, divisional underdogs, bad weather, crepes, Mondrian-style, etc. But I must NOT mention betting lines (spreads, totals, moneylines, odds). The source text itself mentions "NFL rows", "divisional underdogs" - these are domain translations in the GSE lens section. I need to be careful: the user said "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Does mentioning "divisional underdogs" count as a betting line? Underdog is related to moneyline. I should avoid betting terminology. However, the source text itself contains it. I need to discuss the source but avoid betting lines. I can refer to "matchup classes", "conditional calibration", "weather", "signal strata" without using spread/total/moneyline/odds.

Wait, the source says: "If the engine is well-calibrated overall but systematically overconfident on divisional underdogs or in bad weather, a single global T (or Platt) will certify a lie." and "per-signal calibration rows should be Mondrian-style — fit separate maps per matchup class when n allows (crepes does this natively; see that dossier)."

I need to cite these with [PAGE 1] and verbatim quotes. But I must not introduce betting lines myself. I can quote the source's mention of "divisional underdogs" as a verbatim quote from [PAGE 1], but I should not elaborate on betting lines. Actually, the instruction says "Never mention spreads, totals, moneylines, or odds." Quoting "divisional underdogs" might be borderline but it's not one of the four forbidden terms. I'll avoid using "underdog" myself except perhaps in a direct quote clearly marked as from the source, but to be safe I might paraphrase or quote carefully. Let's see: "divisional underdogs" is in the source. I can quote it verbatim with [PAGE 1] since it's required to cite verbatim quotes. But I should not use it as a betting line analysis. I'll treat it as a matchup class stratum.

Structure:

THINK_TRACE (>=400 words): Deep multi-hop derivation and gray-zone audit. Discuss global temperature scaling vs local, conditional calibration, ECE, MCE, reliability diagrams, the problem of heterogeneous miscalibration across input space, the need for a second model (temperature map CNN), sample complexity, singularity when calibration data insufficient per patch/class, breakdown when n per stratum is too small. Connect to GSE: global calibration hides conditional miscalibration. Mondrian conformal predictors. Crepes. Gray zones: patch size vs receptive field, spatial correlation vs exchangeability, overfitting the temperature map, distribution shift between train and calibration sets, label shift, covariate shift.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Global TS: p_i = softmax(z_i / T), T scalar learned on validation set minimizing NLL: T* = argmin_T -sum log softmax(z/T)_y. Units: logits dimensionless (or in nats if interpreted as log-prob ratios), T dimensionless positive scalar.
- LTS: T(x) = CNN_theta(x), temperature map same spatial resolution as feature map/patches. Per-pixel calibrated probability: p_{i,c}(x) = exp(z_{i,c}(x) / T_i(x)) / sum_c exp(z_{i,c}(x) / T_i(x)). Loss: NLL over labeled pixels. Units: z in log-odds/nats, T dimensionless scaling factor, p in [0,1], probability simplex.
- ECE: sum_{m=1}^M (|B_m|/n) |acc(B_m) - conf(B_m)|. Units: probability (dimensionless).
- MCE: max_m |acc(B_m) - conf(B_m)|.
- Mondrian: per class/group g, cal_g = { (x_i, y_i) : g(x_i)=g }, conformal quantile per group. Breakdown: if |cal_g| < required quantile sample size, nonconformity scores unstable; singularity as |cal_g| -> 0.
- cite [PAGE 1] for quotes: "Stars: 21 (Apache-2.0) — official code for Ding et al., "Local Temperature Scaling for Probability Calibration" (ICCV 2021)", "instead of one global T, learn a temperature map (per image patch) for semantic segmentation, so different regions of the input get different calibration. Shows global TS calibrates the whole image fine but fails on local patches.", "Core assumption: miscalibration varies across the input space in a way a learned map can capture — powerful, but needs a second model and enough calibration data to fit it.", "Wrong domain (pixel grids, not NFL rows) — but the concept is the sharpest articulation of GSE's calibration problem: global miscalibration maps hide conditional miscalibration. If the engine is well-calibrated overall but systematically overconfident on divisional underdogs or in bad weather, a single global T (or Platt) will certify a lie. The GSE translation: per-signal calibration rows should be Mondrian-style — fit separate maps per matchup class when n allows (crepes does this natively; see that dossier). Do not adopt the image machinery; adopt the conditional-calibration instinct and implement it via crepes' Mondrian conformal classifiers instead.", "**IGNORE** as code (image segmentation, paper-code). **REBUILD** the idea as conditional/Mondrian calibration per matchup class. (Apache-2.0.)"

RETROCAUSAL_GENEALOGY: Historical lineage: Platt scaling (1999), temperature scaling (Guo et al. 2017), Dirichlet calibration, vector scaling, matrix scaling, local temperature scaling (Ding et al. ICCV 2021), Mondrian conformal prediction (Vovk et al.), crepes. Multi-week traps: temporal drift, non-stationarity, concept drift, week-to-week regime changes (weather, travel, roster changes), calibration drift, overfitting to recent window, recency bias.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Model's behavior under stress/crisis: if the engine is globally calibrated but locally overconfident, in crisis moments (high leverage, bad weather, etc.) it regresses to overconfidence. Counter-trap: opponents/markets may exploit predictable miscalibration. Clock: time decay of calibration, retraining frequency, validation window alignment.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since source is image segmentation, translate to physical signals: weather (precipitation, wind, temperature, humidity), surface, travel, circadian. Veto conditions: if weather layer indicates regime shift outside calibration support, veto local calibration map and fall back to global or abstain. Biomechanical: player load, injury reports. Physical: stadium, altitude, surface hardness. Breakdown: if any layer lacks labeled calibration pixels/rows in that stratum, Mondrian cell has insufficient n, estimator singular.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need 3 scenarios where veto triggers and predictions.
1. Scenario: calibration stratum (e.g., bad weather + high wind) has n < 30 labeled rows in rolling window. Veto: fall back to global temperature scaling; prediction: ECE on held-out weather stratum decreases relative to local map, but MCE may increase due to residual heterogeneity.
2. Scenario: temperature map CNN predicts extreme T values (T -> 0 or T -> infinity) for sparse patches due to overfitting. Veto: clip T to [T_min, T_max] or reject patch; prediction: calibrated probabilities remain in simplex, no division by zero, NLL bounded.
3. Scenario: distribution shift between train and test signal strata (covariate shift), detected via KL divergence > threshold. Veto: disable Mondrian local maps, use Platt/global; prediction: calibration error on shift stratum remains bounded by global ECE, avoids overconfident extrapolation.

Need to ensure total words >= 1000 across all sections. Each section should be substantial. THINK_TRACE alone >=400 words.

Word count plan:
- THINK_TRACE: ~500-600 words.
- SOURCE_OPERATORS_AND_EQUATIONS: ~300-400 words.
- RETROCAUSAL_GENEALOGY: ~200-300 words.
- RECURSIVE_THEORY_OF_MIND: ~200-300 words.
- CROSS_LAYER_VETO_ADJUDICATION: ~200-300 words.
- RLVR_COUNTERFACTUAL_VETOES: ~200-300 words.
Total ~1800+ words. Good.

No betting lines: Avoid spread, total, moneyline, odds. I can mention "matchup class", "signal stratum", "row", "conditional calibration", "weather", "bad weather". I must not say "odds" even in quotes? The source doesn't mention odds. It mentions "divisional underdogs" which is a betting term but not explicitly forbidden (only spreads, totals, moneylines, odds). Still, I'll quote it as required but not expand. Actually, to be safe and avoid any appearance of betting lines, I might quote the exact phrase but frame it strictly as a matchup class label from the source text [PAGE 1], not as a wagering recommendation.

Page citations: Since PAGES: 1 and source text is one block, I'll cite [PAGE 1] for all verbatim quotes.

Let's draft carefully.

THINK_TRACE content:
Start by deriving from source [PAGE 1]. Quote the repo description. Multi-hop: global TS -> ECE ~0 but local ECE high -> need spatially varying T -> second model CNN -> sample complexity tradeoff -> gray zone: patch size vs semantic homogeneity; too many patches => insufficient labeled pixels per patch => temperature map overfits => singularity as local n_patch -> 0. Translate to GSE: rows not pixels, matchup classes not image patches; conditional miscalibration hidden by global reliability. Gray-zone audit: (1) support mismatch: calibration rows may not cover all matchup classes; (2) label shift/covariate shift across weeks; (3) Mondrian cell emptiness; (4) second model variance vs bias tradeoff; (5) Apache-2.0 license allows reuse but code is image-specific so rebuild via crepes. Verbatim quotes with [PAGE 1].

Need >=400 words. Let's write.

SOURCE_OPERATORS_AND_EQUATIONS:
Define notation. Let X be input, Z(X) in R^{CxHxW} logits. Global TS: T in R_{>0}; P_c = softmax(Z/T)_c. Loss: L(T) = -1/N sum log P_{y}. Optimum T*. LTS: T_theta(X) in R_{>0}^{HxW} predicted by CNN. Per pixel (i,j): P_{c,i,j} = exp(Z_{c,i,j}/T_{theta,i,j}(X)) / sum_{c'} exp(Z_{c',i,j}/T_{theta,i,j}(X)). Units: Z dimensionless logit (nat), T dimensionless, P probability [0,1]. ECE formula. MCE formula. Mondrian: partition input space by matchup class g(X) in {1..G}; conformal scores per group; quantile q_{1-alpha}^{(g)}. Breakdown: if N_g < k_min, quantile undefined/high variance; singularity as N_g -> 0. Cite [PAGE 1] for quotes about needing second model and enough data, global vs local failure, IGNORE/REBUILD verdict.

RETROCAUSAL_GENEALOGY:
Lineage: Platt (1999) binary scaling; Guo et al. (2017) temperature scaling; Kull et al. Dirichlet; Ding et al. ICCV 2021 LTS [PAGE 1]; Vovk Mondrian conformal; crepes library. Multi-week traps: temporal non-stationarity; week-to-week regime changes (weather fronts, travel, roster turnover); calibration decay; recency window too short causing high variance; too long causing stale conditional maps. The "retrocausal" angle: using future labels to calibrate past rows leaks if not strictly train/calibrate/test split by time.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under stress (high-stakes matchup, adverse weather), model reverts to global overconfidence if local map untrained. Counter-trap: adversaries learn the engine's conditional blind spots and feed similar profiles to exploit miscalibration. Clock: calibration half-life; retraining cadence must match regime change frequency; if clock (time since last calibration) exceeds threshold, veto local maps.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: weather (precip rate mm/hr, wind speed m/s, temperature C, relative humidity %), surface, altitude. Biomechanical: player availability, load. Veto proof: if any physical layer signal falls outside calibration support (e.g., wind > threshold not seen in cal set), local Mondrian cell lacks coverage -> veto. Use physical priors to bound T map: T in [0.5, 5.0] to avoid overconfident collapse. Breakdown: physical sensor missingness -> impute or veto. No betting lines.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios. Define RLVR as reward signal derived from verification (e.g., held-out calibration loss). Each scenario: condition, veto action, prediction.
1. Sparse stratum veto: N_g < 20 labeled rows for matchup class g in rolling calibration window. Veto: disable local map for g, revert to global T*. Prediction: held-out ECE for stratum g improves by delta_ECE > 0 vs un-clipped local map; reliability diagram moves toward diagonal.
2. Extreme temperature veto: predicted T_theta(x) < T_min or > T_max for > epsilon fraction of pixels/rows. Veto: clip T or reject row, fallback to Platt. Prediction: NLL no longer diverges as T->0; max confidence bounded away from 1; Brier score stable.
3. Covariate shift veto: KL(P_train(signal) || P_cal(signal)) > tau. Veto: suspend Mondrian local maps, use global calibration + abstention. Prediction: out-of-distribution overconfidence (max p > 0.95 on shifted rows) reduced to <= global calibration ceiling; coverage of prediction sets maintained at 1-alpha.

Need to ensure no forbidden terms. Check: I won't use spread, total, moneyline, odds. I might say "overconfident" which is fine. "Matchup class" fine. "Bad weather" fine. "Underdog" only in quote perhaps.

Let's start writing the final output with exact XML tags. Ensure word count.

Let's draft THINK_TRACE thoroughly.

Word count check mentally: I'll aim for rich content.

Now write final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source document [PAGE 1] presents uncbiag/LTS as the official Apache-2.0 code for Ding et al., "Local Temperature Scaling for Probability Calibration" (ICCV 2021), a 21-star repository whose core claim is verbatim: "instead of one global T, learn a temperature map (per image patch) for semantic segmentation, so different regions of the input get different calibration. Shows global TS calibrates the whole image fine but fails on local patches." The multi-hop derivation begins with global temperature scaling: a single scalar T > 0 rescales logits z via softmax(z/T) and is fit by minimizing negative log-likelihood on a held-out calibration set. That procedure can drive expected calibration error (ECE) toward zero over the full input distribution while leaving severe conditional miscalibration inside disjoint regions. The LTS paper demonstrates exactly that failure mode: global TS is sufficient at image level yet inadequate at patch level.

The second hop is architectural. To capture spatial heterogeneity, LTS appends a small CNN that predicts a temperature map T_theta(x) with the same spatial resolution as the segmentation feature grid, then applies per-pixel softmax(z_{i,j}(x) / T_{theta,i,j}(x)). This introduces a second model that must be trained on labeled pixels. The source states the core assumption verbatim [PAGE 1]: "miscalibration varies across the input space in a way a learned map can capture — powerful, but needs a second model and enough calibration data to fit it." That assumption creates the first gray zone: sample complexity per region. If the input is partitioned into P patches or matchup classes, and each region receives n_p calibration rows, the variance of the locally estimated temperature scales roughly as O(1/n_p). As n_p approaches zero, the local temperature estimator becomes singular: the map can overfit noise, output extreme T values near zero or infinity, and produce degenerate probabilities that violate the simplex.

The third hop translates the vision-system insight to the GSE domain. The source is explicit about domain mismatch and conceptual transfer [PAGE 1]: "Wrong domain (pixel grids, not NFL rows) — but the concept is the sharpest articulation of GSE's calibration problem: global miscalibration maps hide conditional miscalibration. If the engine is well-calibrated overall but systematically overconfident on divisional underdogs or in bad weather, a single global T (or Platt) will certify a lie." The forbidden inference here is to treat "divisional underdogs" or "bad weather" as wagering categories; they are strictly signal strata or matchup classes used to define conditional calibration cells. The correct GSE translation, per the source [PAGE 1], is: "per-signal calibration rows should be Mondrian-style — fit separate maps per matchup class when n allows (crepes does this natively; see that dossier). Do not adopt the image machinery; adopt the conditional-calibration instinct and implement it via crepes' Mondrian conformal classifiers instead." The verdict is likewise quoted [PAGE 1]: "**IGNORE** as code (image segmentation, paper-code). **REBUILD** the idea as conditional/Mondrian calibration per matchup class. (Apache-2.0.)"

Gray-zone audit continues with four failure regimes. First, support mismatch: the calibration set may contain zero rows for certain matchup classes or weather regimes, making any local temperature map undefined for those cells. Second, covariate shift across weeks: the distribution of physical signals (surface, wind, precipitation, travel) drifts, so a map fit on weeks 1–4 may be invalid for weeks 5–8. Third, label imbalance within cells: even when a matchup class appears, the outcome base rate may be extreme, reducing effective information for calibration. Fourth, second-model overfitting: the CNN or conditional estimator can memorize calibration-row identifiers rather than learning a smooth calibration function, especially when the number of regions grows faster than labeled rows. The exact breakdown regime is N_cell -> 0, where N_cell is the number of labeled calibration rows assigned to a Mondrian cell; in that limit, the local temperature estimate has infinite variance and the calibrated probability is indistinguishable from an overconfident extrapolation. All quotations and domain assertions above are drawn from [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Let X denote the input signal tensor. For semantic segmentation, X is an image; for the GSE translation, X is a row of matchup-level signals. Let Z(X) in R^C be the vector of pre-softmax logits for C classes. Logits are dimensionless quantities interpreted in natural-log units (nats) when treated as log-probability ratios.

Global temperature scaling (TS) operator:
T^* = argmin_{T in R_{>0}} [ - (1/N) sum_{n=1}^N log softmax( Z(x_n) / T )_{y_n} ],
P_c(x) = exp( z_c(x) / T^* ) / sum_{c'=1}^C exp( z_{c'}(x) / T^* ).
Here T^* is a dimensionless scalar, P_c(x) in [0,1], and sum_c P_c(x) = 1. Units of probability are dimensionless fractions on the unit simplex.

Local Temperature Scaling (LTS) operator, as described in the source [PAGE 1]:
T_theta(x) = CNN_theta(x), where T_theta(x) in R_{>0}^{H x W} is a temperature map predicted per spatial location.
For pixel/patch location (i,j):
P_{c,i,j}(x) = exp( z_{c,i,j}(x) / T_{theta,i,j}(x) ) / sum_{c'=1}^C exp( z_{c',i,j}(x) / T_{theta,i,j}(x) ).
Units remain dimensionless; T is a multiplicative scaling factor applied to logits before exponentiation. The calibrated probability is bounded in [0,1] provided T_{theta,i,j}(x) is finite and positive. Breakdown occurs if T_{theta,i,j}(x) -> 0^+ (probabilities collapse to one-hot overconfidence) or T_{theta,i,j}(x) -> +infty (probabilities collapse to uniform 1/C, destroying discrimination).

Expected Calibration Error over M confidence bins B_m:
ECE = sum_{m=1}^M ( |B_m| / N ) | acc(B_m) - conf(B_m) |,
where acc(B_m) = (1/|B_m|) sum_{n in B_m} 1[ y_n = argmax_c P_c(x_n) ] and conf(B_m) = (1/|B_m|) sum_{n in B_m} max_c P_c(x_n). ECE is dimensionless (probability units). Maximum Calibration Error:
MCE = max_{m=1..M} | acc(B_m) - conf(B_m) |.

Mondrian conditional calibration operator (the GSE rebuild prescribed in [PAGE 1]):
Partition rows by matchup class g(x) in {1,...,G}. For each cell g, compute nonconformity scores s_n on calibration rows assigned to g, then assign the (1-alpha)-quantile q^{(g)}_{1-alpha} separately per cell. A prediction set for a new row x with class g(x)=g includes label y iff s(x,y) <= q^{(g)}_{1-alpha}. Breakdown/singularity regime: if N_g = |{ n : g(x_n)=g }| in the calibration set falls below the minimum sample count required to estimate the quantile reliably (empirically N_g < 20–30 depending on alpha), the cell estimator is undefined or high-variance; as N_g -> 0, the local temperature map or conformal quantile has infinite variance and must be vetoed in favor of a global fallback.

Source citations [PAGE 1]: "instead of one global T, learn a temperature map (per image patch) for semantic segmentation, so different regions of the input get different calibration. Shows global TS calibrates the whole image fine but fails on local patches." Core assumption: "miscalibration varies across the input space in a way a learned map can capture — powerful, but needs a second model and enough calibration data to fit it." GSE translation: "global miscalibration maps hide conditional miscalibration... per-signal calibration rows should be Mondrian-style — fit separate maps per matchup class when n allows (crepes does this natively...). Do not adopt the image machinery; adopt the conditional-calibration instinct and implement it via crepes' Mondrian conformal classifiers instead." Final disposition: "**IGNORE** as code (image segmentation, paper-code). **REBUILD** the idea as conditional/Mondrian calibration per matchup class. (Apache-2.0.)"
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The genealogy of local temperature scaling proceeds through four layers. First, Platt scaling (1999) introduced parametric calibration of classifier outputs by fitting a sigmoid to scores on a held-out set, establishing the principle that a model can be well-separated yet miscalibrated. Second, Guo et al. (2017) demonstrated that modern deep networks are often overconfident and proposed global temperature scaling as a post-hoc, single-parameter fix that preserves accuracy while improving ECE. Third, extensions such as Dirichlet calibration, vector scaling, and matrix scaling generalized the scalar temperature to class-dependent affine transformations of logits. Fourth, Ding et al. (ICCV 2021), whose code is the subject of this dossier [PAGE 1], relaxed the global scalar assumption entirely by learning a spatially varying temperature map for semantic segmentation, arguing that calibration error is not uniformly distributed over the input manifold.

The GSE lineage relevant here connects to Mondrian conformal prediction (Vovk et al.), which partitions the exchangeability assumption into class-conditional or category-conditional cells, and to the crepes library, which implements Mondrian conformal classifiers natively. The source [PAGE 1] explicitly directs the rebuild away from image-segmentation machinery and toward crepes-style Mondrian calibration per matchup class.

Multi-week traps arise from temporal non-stationarity. If calibration rows are pooled across a long window, the temperature map or Mondrian quantile averages over distinct physical regimes (early-season surface conditions, mid-season weather fronts, late-season travel fatigue), producing a stale conditional map that misrepresents the current week. Conversely, if the calibration window is too short, N_g per matchup class falls into the singularity regime N_g -> 0 identified above, and local estimates overfit noise. A second trap is recency-induced distribution shift: rows used to fit the local map may not share the same signal distribution as target rows because of roster turnover, coaching changes, or schedule imbalance. The retrocausal hazard is using future outcome labels to calibrate past signal profiles without a strict temporal train-calibrate-test split; doing so leaks information and invalidates the coverage guarantees of any conformal cell. A third trap is regime-change blindness: a global calibration certificate may remain valid in aggregate while a specific Mondrian cell (for example, rows sharing a rare weather-and-surface combination) becomes systematically overconfident exactly when that cell is most needed for decision-relevant discrimination.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: when the engine faces high-leverage or adverse-condition rows—formally, rows where physical signal variables lie in the tails of the training distribution—a globally calibrated model tends to regress to its uncalibrated prior, which is typically overconfident. The local temperature map or Mondrian cell is intended to correct this, but if that cell has sparse calibration support (N_g small), the correction itself regresses toward noise or toward the global mean. Thus under crisis conditions the system exhibits a double regression: first the raw model toward overconfidence, second the local calibration correction toward instability or inaction.

Counter-trap: an adversary or opposing process that learns the engine's conditional blind spots can construct signal profiles that land in under-calibrated Mondrian cells—cells where N_g was small during training or where the physical regime has since shifted—and exploit the engine's certified overconfidence. Because global ECE looks acceptable, the vulnerability is invisible at aggregate level but locally severe. The counter-trap is therefore not a single bad row but a class of rows sharing a rare signal combination for which the local temperature map was never reliably fit.

Clock: calibration has a half-life. The clock variable is elapsed time since the last recalibration fit, measured in weeks or signal-regime changes. When the clock exceeds a threshold tau_clock (e.g., two weeks or one major weather-front transition), the assumption that P_train(signal) ≈ P_target(signal) fails. The local map must be invalidated or rebuilt; otherwise the temperature estimate becomes a function of stale conditions and the counter-trap above is sprung. The decision rule is therefore recursive: monitor clock, monitor N_g per cell, monitor physical-regime distance, and regress to global fallback when any monitor trips.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.

A veto proof requires that any physical layer capable of shifting conditional calibration be explicitly represented, bounded, or cause abstention. Layer 1: weather. Variables include precipitation rate (mm/hr), wind speed (m/s), air temperature (deg C), and relative humidity (%). If a target row exhibits a weather vector outside the convex hull of the calibration set's weather vectors, the corresponding Mondrian cell has zero physical support and the local temperature map must be vetoed. Layer 2: surface and venue. Stadium altitude (m), surface hardness, and indoor/outdoor status alter the signal distribution; rows from unsupported venue-surface combinations trigger veto. Layer 3: biomechanical/roster. Player availability and cumulative load change the effective signal-to-noise mapping; if key-signal features are missing or imputed beyond a threshold, the row is referred to the global calibrator or abstained.

Veto adjudication rule: let D_phys(x_train, x_target) be a divergence or distance in physical-signal space. If D_phys > delta_veto or if the target row's matchup class g(x) has N_g < N_min in the rolling calibration window, then veto the local/Mondrian temperature map and fall back to global temperature T^* fitted on the full calibration set, or abstain if even global support is weak. Additionally, hard-clip any predicted local temperature to T in [T_min, T_max] = [0.5, 5.0] to prevent probability collapse to one-hot or uniform as T -> 0 or T -> infinity.

Breakdown condition: if the physical observation layer itself has missingness (e.g., no wind or precipitation reading for a target row), the veto cannot be computed from physical evidence; the safe default is to treat the row as unsupported and apply the global fallback or abstain rather than guess a local temperature. This cross-layer veto is not a betting line; it is a coverage and support constraint on conditional probability calibration.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions. RLVR here denotes a verification-driven reward signal derived from held-out calibration loss (e.g., negative log-likelihood or ECE on a reserved calibration split), not a wagering outcome.

Scenario 1: Sparse Mondrian cell. Condition: a matchup class g contains fewer than N_min = 20 labeled calibration rows in the rolling window. Veto action: disable the local temperature map for cell g and revert to the global scalar T^*. Prediction: held-out ECE for rows in cell g decreases relative to the un-clipped local map, while global ECE remains stable; the reliability diagram for cell g shifts toward the diagonal, confirming that sparse-cell local estimation was adding variance rather than reducing bias.

Scenario 2: Extreme temperature collapse. Condition: the predicted local temperature satisfies T_theta(x) < T_min or T_theta(x) > T_max for more than epsilon = 5% of rows in a batch. Veto action: clip T to [0.5, 5.0] or reject the affected rows and apply Platt/global scaling. Prediction: the maximum calibrated probability max_c P_c(x) is bounded away from 1.0 (below 0.98) and above 1/C; held-out NLL stops diverging as T approaches zero, and Brier score remains bounded instead of spiking due to one-hot collapse.

Scenario 3: Covariate-shift veto. Condition: KL divergence between the training signal distribution and the calibration signal distribution exceeds tau_shift (e.g., D_KL(P_train || P_cal) > 0.5 nats), indicating that the current signal regime was poorly represented during calibration. Veto action: suspend all Mondrian local maps and use global temperature scaling with an abstention option for rows whose signal Mahalanobis distance from the calibration centroid exceeds a threshold. Prediction: out-of-distribution overconfidence (fraction of rows with max_c P_c(x) > 0.95) falls to at most the global calibration ceiling; prediction-set coverage remains at the nominal 1 - alpha level rather than collapsing under shifted inputs. All three scenarios are falsifiable by measuring ECE, MCE, NLL, and coverage on reserved verification splits before and after the veto is applied.
</RLVR_COUNTERFACTUAL_VETOES>