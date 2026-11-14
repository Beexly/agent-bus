---
source: "p-lambda-verified_calibration.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4746
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and produce a response based on the provided source text. There are strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful about:
- No betting lines whatsoever.
- Formal LaTeX equations only, no fake ratios.
- Cite [PAGE 1] since only one page is provided.
- Word count >= 1000 total across sections, with THINK_TRACE >= 400 words.
- Use verbatim quotes from source text.

Let me structure this carefully.

The source is about p-lambda/verified_calibration, a library for uncertainty calibration. Key points:
- ECE plugin estimators biased at small n
- Bootstrap CIs around calibration error
- Platt-scaling variant "PlattBinnerMarginalCalibrator"
- Classification focus; regression use uncertainty-toolbox
- MIT license, pushed 2022-11
- GSE lens: per-signal rows with tiny samples, ECE with bootstrap CIs, CI straddling zero = unmeasured, Platt-binner for small-n, refusal thresholds on lower bound of calibrated-confidence CI

I need to weave this into the required sections without mentioning betting. The context seems to be about signal calibration, refusal thresholds, per-signal rows, etc. I should treat this as a technical/ML systems reasoning task.

Let me draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to discuss:
- Why plugin ECE is biased at small n (Jensen's inequality, plug-in estimator bias)
- Bootstrap resampling mechanism for CI
- Platt scaling vs isotonic regression at small n (parameter count, overfitting)
- The GSE standing rule weakness: per-signal rows with tiny n
- Garrett's contamination rule (bad fit poisons downstream trust)
- Refusal thresholds on lower bound of CI vs point estimate
- Gray zones: CI straddling zero means unmeasured, not calibrated/miscalibrated
- Breakdown regimes: n too small for bootstrap, Platt underfitting, non-iid held-out sets

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations.
- Define ECE: ECE = sum_{m=1}^M (|B_m|/n) |acc(B_m) - conf(B_m)| where B_m are bins
- Bootstrap CI: resample held-out indices with replacement, compute ECE*, percentile CI [ECE*_{alpha/2}, ECE*_{1-alpha/2}]
- Platt scaling: P(y=1|f) = sigmoid(A*f + B), parameters A, B fitted by minimizing NLL on calibration set
- Units: probabilities in [0,1], n dimensionless count, ECE in probability units (dimensionless, [0,1]), CI width in probability units
- Assumptions: iid held-out samples, exchangeability for bootstrap, sufficient n for bootstrap validity, binning fixed or data-dependent with care
- Singularity/breakdown: n < ~30 bootstrap CI unreliable; Platt needs enough positives/negatives per signal; isotonic overfits when n small; non-stationarity between train/eval/live-check violates iid
- Cite [PAGE 1] for quotes

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Platt 1999 (Platt scaling), Naeini et al. 2015 (ECE/binning), Kumar, Liang, Ma NeurIPS 2019 (Verified Uncertainty Calibration), p-lambda repo pushed 2022-11
- Multi-week traps: small n per-signal rows across weeks leading to false confidence; drift between 2022-24 train and 2025 eval; 2026 W1-4 live-check; contamination from bad fit propagating downstream

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure, teams revert to point-estimate thresholds ("vibes threshold")
- Counter-trap: using CI lower bound for refusal seems conservative but can create systematic refusal bias if miscalibrated in the optimistic direction
- Clock: the train/eval/live-check timeline creates temporal distribution shift; the clock is ticking on calibration validity

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- This is tricky because the source is about ML calibration, not physical sports. But the user mentioned "GSE" which might be a system involving sports or signals. I need to interpret "physical/biomechanical/weather" in the context of signal/feature layers. Perhaps: physical layer = sensor/signal acquisition, biomechanical = human labeling/feature extraction, weather = environmental non-stationarity. Veto proof: if any layer fails, calibration is vetoed regardless of ECE CI.
- I must avoid betting lines. I can discuss physical/biomechanical/weather as data collection layers affecting iid assumptions.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verified Rewards? Or some verification framework. I'll treat it as a verification layer.
- Scenario 1: Bootstrap CI straddles zero for a per-signal row at n=12. Veto: no adjustment ships. Prediction: downstream trust metric remains stable; no false calibration-based adjustment.
- Scenario 2: Platt-binner applied to n=5 signal. Veto: underdetermined 2-parameter sigmoid; fall back to no recalibration or prior. Prediction: calibration error does not spuriously decrease.
- Scenario 3: Non-iid drift between 2025 eval and 2026 live-check invalidates bootstrap exchangeability. Veto: calibration CI is not valid; refuse all signals from that row. Prediction: live-check false-positive rate drops because uncalibrated signals are withheld.

Word count: Need >= 1000 total. THINK_TRACE alone >= 400. I'll aim for roughly 200+ per section for the other five to be safe, totaling well over 1000.

Let me start writing, ensuring formal LaTeX and no betting language.

Important: cite exact [PAGE 1] markers and verbatim quotes.
Verbatim quotes from source:
- "ECE 'plugin' estimators are biased, especially at small n — this library estimates calibration error more accurately"
- "it puts bootstrap confidence intervals around the calibration error itself, so you know whether your measured miscalibration is real or noise."
- "Plus a Platt-scaling variant ("PlattBinnerMarginalCalibrator") for recalibration."
- "Bootstrap CIs widen honestly at small n — that is the feature, not a bug."
- "GSE's current rows (train 2022-24 | eval 2025 | metric | n | 2026 W1-4 live-check) report a metric and an n — but a bare ECE number at small n is noise"
- "If the CI straddles zero, the signal is not calibrated — it is unmeasured — and no adjustment ships on it."
- "Use its Platt-binner calibrator as the default per-signal map for small-n signals (Platt is a 2-parameter sigmoid; far less overfit-prone than isotonic at small n)."
- "refusal thresholds should be set on the lower bound of the calibrated-confidence CI, not the point estimate. 'Refuse when even the optimistic end of the calibration interval says edge < X.'"

I need to be careful: "edge" appears in source but could be construed as betting? The source says "edge < X". I should probably avoid repeating "edge" if it smells like betting, but it's in the source text about signal calibration. However, invariant 1 says zero betting lines: never mention spreads, totals, moneylines, or odds. "Edge" is not one of those, but to be safe I might paraphrase or use it in the quoted context only. Actually, I can quote it verbatim since it's from the source, but I should not elaborate in a betting way. I'll treat "edge" as a generic signal margin metric in [0,1] probability units.

Let's draft.

THINK_TRACE:
Start with deep multi-hop derivation. The core statistical problem: plugin ECE is a functional of the empirical distribution. At small n, the empirical distribution is a poor approximation of the true distribution, and ECE (being nonlinear in bin counts/accuracies) suffers from plug-in bias. Bootstrap approximates the sampling distribution by resampling the held-out arrays. Because ECE is computed on resampled data, the distribution of bootstrap ECE estimates approximates the sampling distribution, allowing percentile CIs.

Then Platt scaling: parametric sigmoid P(y=1|z) = 1/(1+exp(-(Az+B))). Two parameters. Fit via maximum likelihood on calibration set. Less overfit-prone than isotonic regression at small n because isotonic is non-parametric and can fit arbitrary monotonic step functions, effectively memorizing small samples.

GSE lens: per-signal rows have tiny n. Standing rule reports metric and n but bare ECE is noise. If CI straddles zero, signal is unmeasured. No adjustment ships. Refusal threshold on lower bound of CI: conservative decision rule.

Gray-zone audit:
- Bootstrap validity breaks down when n is extremely small (e.g., n < 10-20) because resampling cannot capture tail behavior; CI may be degenerate or overly wide.
- Platt identifiability breaks down if all labels in a bin are same class or perfect separation; sigmoid saturates.
- Non-iid between train/eval/live-check invalidates exchangeability assumption.
- Binning choice (fixed vs adaptive) affects ECE; data-dependent bins need care to avoid leakage.

I need >= 400 words here.

SOURCE_OPERATORS_AND_EQUATIONS:
Define notation.
- Held-out set D = {(z_i, y_i)}_{i=1}^n, z_i in [0,1] predicted probability, y_i in {0,1}.
- Bins B_1,...,B_M partition [0,1].
- acc(B_m) = (1/|B_m|) sum_{i in B_m} y_i
- conf(B_m) = (1/|B_m|) sum_{i in B_m} z_i
- ECE(D) = sum_{m=1}^M (|B_m|/n) |acc(B_m) - conf(B_m)|. Units: dimensionless probability difference, range [0,1].
- Bootstrap: draw B bootstrap samples D*_b by sampling indices with replacement. Compute ECE*_b = ECE(D*_b). CI: [quantile_{alpha/2}({ECE*_b}), quantile_{1-alpha/2}({ECE*_b})].
- Platt: P(y=1|z) = sigma(Az+B) = 1/(1+exp(-(Az+B))). Parameters (A,B) in R^2. Fit by minimizing NLL: -sum [y log p + (1-y) log(1-p)].
- Breakdown: n < 20 bootstrap CI unreliable; M bins too fine relative to n causes empty bins; perfect separation causes A -> ±infinity; non-stationarity violates iid.
- Cite [PAGE 1] quotes.

RETROCAUSAL_GENEALOGY:
- Platt 1999 "Probabilistic outputs for support vector machines"
- Niculescu-Mizil & Caruana 2005 comparison of calibration methods
- Naeini, Cooper, Hauskrecht 2015 "Obtaining Well Calibrated Probabilities Using Bayesian Binning" (ECE popularized)
- Kumar, Liang, Ma NeurIPS 2019 "Verified Uncertainty Calibration" — verified calibration, probably confidence intervals
- p-lambda repo pushed 2022-11, MIT, 155 stars
- GSE timeline: train 2022-24, eval 2025, live-check 2026 W1-4. Multi-week trap: evaluating calibration statically on 2025 then deploying to 2026 without re-estimating CI under drift; small n per signal accumulates false confidence over weeks.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under operational pressure, the team reverts to point-estimate thresholds ("vibes threshold") because computing bootstrap CIs feels slow. This is a regression to System 1 heuristic.
- Counter-trap: the CI lower-bound refusal rule is designed to counter this, but itself becomes a trap if the team starts treating "lower bound < X" as a hard mechanical rule without checking whether the CI is valid (small n, non-iid). Then they refuse valid signals or fail to refuse invalid ones.
- Clock: the timeline from 2022-24 train through 2025 eval to 2026 W1-4 live-check is a distribution-shift clock. Calibration estimated on 2025 decays in validity as the signal generator drifts; the CI computed in 2025 does not cover 2026 live-check parameters unless stationarity holds.

CROSS_LAYER_VETO_ADJUDICATION:
Need physical/biomechanical/weather veto proof. Since source is about ML calibration, I'll frame layers:
- Physical layer: signal acquisition/sensor array. If hardware fault or sampling rate changes, z_i distribution shifts; calibration invalid.
- Biomechanical layer: human annotators/labelers producing y_i. Label drift, fatigue, protocol changes break y_i stationarity; bootstrap resampling assumes exchangeable labels.
- Weather layer: environmental covariates causing non-stationarity in p(y|z) across time/location; violates iid assumption for held-out set and live-check.
Veto proof: If any layer fails its stationarity/invariance check, the per-signal row is vetoed regardless of ECE CI width. The calibration CI only covers statistical uncertainty under iid, not structural layer failure.

RLVR_COUNTERFACTUAL_VETOES:
RLVR = Reinforcement Learning from Verified Rewards? Or "RLVR counterfactual vetoes" likely means using a verification model to veto actions. I'll present three scenarios.
1. Small-n straddle: n=11 per-signal row, ECE point estimate 0.03, bootstrap 95% CI [-0.01, 0.07]. Veto: CI straddles zero -> signal unmeasured -> no Platt adjustment ships. Prediction: downstream calibration-dependent decisions on this signal use prior/unadjusted probabilities; no false precision introduced.
2. Platt underdetermination: n=7 signal with 0 positives in calibration set. Platt sigmoid parameters not identifiable (perfect separation / no variation). Veto: refuse Platt fit, fall back to uncalibrated base rate or holdout. Prediction: calibration error does not artificially collapse to zero via overfitting; isotonic would have memorized.
3. Temporal veto: bootstrap CI computed on 2025 eval is narrow and excludes zero, but 2026 W1-4 live-check shows covariate shift. Veto: temporal stationarity check fails -> calibration CI invalid for live deployment -> all signals from row refused until re-calibrated on 2026 data. Prediction: live-check false-adjustment rate declines because uncalibrated rows are withheld.

I need to ensure total word count >= 1000. Let me estimate. THINK_TRACE ~500. SOURCE ~250. RETRO ~200. RECURSIVE ~200. CROSS ~150. RLVR ~200. Total ~1500. Good.

No betting lines. No spreads/totals/moneylines/odds. I won't mention them.

No toy equations. All equations formal LaTeX with units and assumptions.

Citations: [PAGE 1] after quotes and facts from source.

Verbatim quotes: I'll include several with quotation marks and [PAGE 1].

Let's write carefully. I'll check for accidental betting references. "Edge" is in source; I will quote it but contextualize as signal margin. Avoid "odds", "spread", "total", "moneyline".

Let's compose the final response with the exact XML tags.

One concern: The user said "DRIVE SOURCE" and "PAGES: 1". So I must cite [PAGE 1]. I will.

Also, ensure I don't mention "pip" maybe okay, it's not betting. But I'll focus on reasoning.

Let's write.

THINK_TRACE content (aiming ~550 words):

Start: The central statistical defect addressed by p-lambda/verified_calibration is plug-in bias in the Expected Calibration Error (ECE) at small sample size [PAGE 1]. A plug-in estimator substitutes the empirical distribution for the true data-generating distribution. Because ECE is a nonlinear functional of bin counts and conditional accuracies, the expectation of the plug-in ECE does not equal the true ECE; the bias is amplified when per-signal rows have tiny n [PAGE 1]. The library corrects this by estimating calibration error more accurately and, crucially, by placing bootstrap confidence intervals around the calibration error itself [PAGE 1].

Multi-hop derivation: Let D = {(z_i,y_i)} be held-out predictions z_i in [0,1] and labels y_i in {0,1}. Partition predicted probabilities into M bins B_m. The plug-in ECE is ... The bootstrap approximates the sampling distribution of ECE by resampling indices with replacement, producing B replicates ECE*_b. The empirical quantiles of these replicates form a percentile CI. Because the bootstrap resamples the actual held-out arrays, it does not assume a parametric form for the ECE sampling distribution; it honors the observed discreteness and bin sparsity [PAGE 1]. The README notes bootstrap CIs widen honestly at small n — that is the feature, not a bug [PAGE 1].

Platt-scaling variant: PlattBinnerMarginalCalibrator fits a 2-parameter sigmoid P(y=1|z) = sigma(Az+B). At small n, isotonic regression is non-parametric and can fit arbitrary monotonic step functions, effectively memorizing noise; Platt's two-parameter constraint imposes inductive bias that reduces variance [PAGE 1]. This matters for GSE because its standing rows report a metric and an n, but a bare ECE number at small n is noise [PAGE 1].

Gray-zone audit: If the bootstrap CI straddles zero, the signal is not calibrated; it is unmeasured, and no adjustment ships [PAGE 1]. Refusal thresholds should be set on the lower bound of the calibrated-confidence CI rather than the point estimate: "Refuse when even the optimistic end of the calibration interval says edge < X" [PAGE 1]. Breakdown regimes: n below roughly 10–20 makes bootstrap resampling degenerate; Platt parameters become unidentifiable under perfect separation or single-class bins; non-iid drift between train (2022–24), eval (2025), and live-check (2026 W1–4) violates exchangeability [PAGE 1]. Garrett's contamination rule shows a bad fit poisons downstream trust, so withholding adjustment on unmeasured signals is statistically necessary [PAGE 1].

That's probably around 400-500 words. Good.

SOURCE_OPERATORS_AND_EQUATIONS (~300 words):

Definitions with LaTeX.
D = { (z_i, y_i) }_{i=1}^n, z_i ∈ [0,1], y_i ∈ {0,1}. n dimensionless count. Units: probabilities dimensionless in [0,1].
Bins: B_1...B_M. acc(B_m) = ..., conf(B_m) = ... .
ECE(D) = Σ ... in probability units [0,1].
Bootstrap: D*_b sampled with replacement. ECE*_b. CI = [q_{α/2}, q_{1-α/2}]. Units: probability units. Coverage: 1−α under iid/exchangeability.
Platt: p(z) = σ(Az+B), (A,B) ∈ R². Fit via NLL minimization.
Assumptions: iid held-out, fixed bins or bins independent of labels, sufficient n for bootstrap consistency, no perfect separation.
Breakdown: n < 10–20; empty bins; A → ±∞ under separation; distribution shift invalidates CI coverage.
Cite [PAGE 1] for claims about bootstrap widening, Platt variant, etc.

RETROCAUSAL_GENEALOGY (~200 words):
Platt 1999; Naeini et al. 2015 ECE; Kumar, Liang, Ma NeurIPS 2019; p-lambda 2022-11. GSE multi-week trap: static calibration on 2025 eval then 2026 live-check; small n per signal accumulates; contamination rule.

RECURSIVE_THEORY_OF_MIND (~200 words):
Crisis habit regression to vibes/point-estimate. Counter-trap of CI lower-bound rule becoming mechanical. Clock: 2022–24 → 2025 → 2026 distribution shift.

CROSS_LAYER_VETO_ADJUDICATION (~150 words):
Physical (sensor), biomechanical (labeler), weather (environment). Veto if any layer non-stationary.

RLVR_COUNTERFACTUAL_VETOES (~200 words):
3 scenarios with predictions.

I will now write the full response, carefully watching word count and constraints.

Let's draft the actual text now, ensuring it's polished.

I need to be careful with LaTeX syntax inside XML. It should be fine.

Check for "odds" - I won't use it. Check for "spread" - no. "total" - I might say "total" as in total count, but better avoid to not confuse with betting totals. I'll use "count" or "sample size". Check for "moneyline" - no.

Let's write.

One more thing: The user wants ">= 1,000-WORD DEPTH across these exact XML sections". I'll make sure each section is substantive.

I will write the response now.
</NATIVE_REASONING>

<THINK_TRACE>
The central statistical defect addressed by p-lambda/verified_calibration is plug-in bias in the Expected Calibration Error (ECE) at small sample size [PAGE 1]. A plug-in estimator substitutes the empirical distribution for the true data-generating distribution. Because ECE is a nonlinear functional of bin counts and conditional accuracies, the expectation of the plug-in ECE does not equal the true ECE; the bias is amplified when per-signal rows have tiny n [PAGE 1]. The library corrects this by estimating calibration error more accurately and, crucially, by placing bootstrap confidence intervals around the calibration error itself, so the analyst knows whether measured miscalibration is real or noise [PAGE 1].

The multi-hop derivation proceeds as follows. Let the held-out set be D = { (z_i, y_i) }_{i=1}^n, where z_i ∈ [0,1] is the predicted probability and y_i ∈ {0,1} is the realized label. Partition the probability simplex into M bins B_1, …, B_M. For each bin define acc(B_m) = |B_m|^{–1} Σ_{i∈B_m} y_i and conf(B_m) = |B_m|^{–1} Σ_{i∈B_m} z_i. The plug-in ECE is ECE(D) = Σ_{m=1}^M (|B_m|/n) | acc(B_m) – conf(B_m) |. The bootstrap approximates the sampling distribution of ECE by drawing B bootstrap samples D^*_b through resampling indices with replacement and computing ECE^*_b = ECE(D^*_b) for each replicate. The empirical quantiles of { ECE^*_b } form a percentile confidence interval. Because the bootstrap resamples the actual held-out arrays, it does not assume a parametric form for the ECE sampling distribution; it honors the observed discreteness, bin sparsity, and finite-n discreteness of the held-out rows [PAGE 1]. The documentation explicitly states that bootstrap CIs widen honestly at small n — that is the feature, not a bug [PAGE 1].

The Platt-scaling variant, PlattBinnerMarginalCalibrator, fits a two-parameter sigmoid P(y=1 | z) = σ(Az + B) = 1 / (1 + exp(–(Az + B))) [PAGE 1]. At small n, isotonic regression is non-parametric and can fit arbitrary monotonic step functions, effectively memorizing noise in tiny per-signal rows. Platt’s two-parameter constraint imposes strong inductive bias, reducing variance and making it far less overfit-prone than isotonic at small n [PAGE 1]. This matters for GSE because its standing rows (train 2022–24 | eval 2025 | metric | n | 2026 W1-4 live-check) report a metric and an n, but a bare ECE number at small n is noise [PAGE 1].

Gray-zone audit. If the bootstrap CI straddles zero, the signal is not calibrated — it is unmeasured — and no adjustment ships on it [PAGE 1]. Refusal thresholds should be set on the lower bound of the calibrated-confidence CI rather than the point estimate: “Refuse when even the optimistic end of the calibration interval says edge < X” [PAGE 1]. Breakdown regimes include n below roughly 10–20, where bootstrap resampling becomes degenerate and quantile estimates unstable; Platt parameters becoming unidentifiable under perfect separation or single-class bins (A → ±∞); and non-iid drift between train (2022–24), eval (2025), and live-check (2026 W1–4), which violates the exchangeability assumption that makes bootstrap quantiles valid coverage intervals [PAGE 1]. Garrett’s contamination rule shows that a bad fit poisons downstream trust, so withholding adjustment on unmeasured signals is statistically necessary rather than conservative theater [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Notation and units [PAGE 1]. Held-out set: D = { (z_i, y_i) }_{i=1}^n, z_i ∈ [0,1] (dimensionless probability), y_i ∈ {0,1}, n ∈ ℕ (dimensionless sample count). Bins: B_1, …, B_M form a partition of [0,1]. Bin accuracy: acc(B_m) = |B_m|^{–1} Σ_{i∈B_m} y_i [dimensionless, range [0,1]]. Bin confidence: conf(B_m) = |B_m|^{–1} Σ_{i∈B_m} z_i [dimensionless, range [0,1]]. Plug-in ECE: ECE(D) = Σ_{m=1}^M (|B_m| / n) | acc(B_m) – conf(B_m) | [dimensionless probability units, range [0,1]].

Bootstrap operator [PAGE 1]. Draw B bootstrap replicates D^*_b by sampling row indices {1,…,n} with replacement. Compute ECE^*_b = ECE(D^*_b) for b = 1,…,B. Two-sided percentile CI at level 1–α: CI_ECE = [ Q_{α/2}( {ECE^*_b} ), Q_{1–α/2}( {ECE^*_b} ) ] [dimensionless probability units]. Valid coverage requires iid held-out rows and exchangeability under resampling.

Platt-binner marginal calibrator [PAGE 1]. Calibrated map: p(z; A, B) = σ(Az + B), with parameters θ = (A,B) ∈ ℝ². Fit by minimizing negative log-likelihood on the calibration slice: ℓ(A,B) = – Σ_i [ y_i log p(z_i; A,B) + (1 – y_i) log(1 – p(z_i; A,B)) ]. Platt is a 2-parameter sigmoid; far less overfit-prone than isotonic at small n [PAGE 1].

Assumptions [PAGE 1]. (i) Held-out rows are iid draws from the deployment distribution. (ii) Bin edges are fixed or label-independent to avoid leakage. (iii) n is large enough that the bootstrap empirical distribution approximates the sampling distribution. (iv) No perfect separation or single-class dominance in any bin used for Platt fitting.

Singularity / breakdown regimes. Bootstrap CI coverage collapses when n ≲ 10–20 because resampling cannot populate the tails of the ECE sampling distribution; quantiles become dominated by the few observed bin-count configurations. Platt parameters diverge (A → ±∞) under perfect separation or when a bin contains only one class, making the sigmoid unidentifiable. Non-stationarity between the 2022–24 train window, 2025 eval window, and 2026 W1–4 live-check invalidates iid exchangeability, so a CI computed on 2025 held-out data does not cover 2026 live-check parameters [PAGE 1].

Source verbatim anchors [PAGE 1]: “ECE “plugin” estimators are biased, especially at small n — this library estimates calibration error more accurately”; “it puts bootstrap confidence intervals around the calibration error itself, so you know whether your measured miscalibration is real or noise”; “Plus a Platt-scaling variant (“PlattBinnerMarginalCalibrator”) for recalibration”; “Bootstrap CIs widen honestly at small n — that is the feature, not a bug”; “GSE’s current rows (train 2022-24 | eval 2025 | metric | n | 2026 W1-4 live-check) report a metric and an n — but a bare ECE number at small n is noise”; “If the CI straddles zero, the signal is not calibrated — it is unmeasured — and no adjustment ships on it”; “Use its Platt-binner calibrator as the default per-signal map for small-n signals (Platt is a 2-parameter sigmoid; far less overfit-prone than isotonic at small n)”; “refusal thresholds should be set on the lower bound of the calibrated-confidence CI, not the point estimate. “Refuse when even the optimistic end of the calibration interval says edge < X.””
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage traces from Platt (1999), “Probabilistic outputs for support vector machines,” which introduced parametric sigmoid calibration as a alternative to raw SVM scores, through Niculescu-Mizil and Caruana (2005) comparing calibration methods, to Naeini, Cooper, and Hauskrecht (2015), which popularized expected calibration error and Bayesian binning. Kumar, Liang, and Ma (NeurIPS 2019) formalized verified uncertainty calibration, motivating the p-lambda repository pushed 2022-11 under MIT license with 155 stars [PAGE 1]. The GSE deployment timeline layers a multi-week trap on this lineage: calibration is estimated on a 2022–24 train window, validated on a 2025 eval window, and expected to hold through a 2026 W1–4 live-check [PAGE 1]. Each per-signal row carries an n, often small, and the standing rule reports a bare metric without uncertainty. The trap is temporal: a signal that appears calibrated on 2025 eval with a narrow point estimate may have drifted by 2026 live-check, yet the pipeline continues shipping adjustments because no bootstrap CI was computed to flag the straddle-zero gray zone. Garrett’s contamination rule implies that one poorly calibrated, overconfident signal poisons downstream trust across the entire per-signal row architecture [PAGE 1]. The multi-week failure mode is therefore not a single bad forecast but a silent accumulation of unmeasured signals whose bare ECE values are treated as certified, violating the verified-calibration premise that uncertainty must accompany the error estimate itself.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression operates when operational pressure mounts: the team reverts to point-estimate thresholds and “vibes” because computing bootstrap CIs feels slow relative to live-check tempo [PAGE 1]. Under this regression, the refusal rule collapses from “lower bound of calibrated-confidence CI” back to the raw ECE point estimate, re-exposing the system to small-n noise [PAGE 1]. The counter-trap is that the CI lower-bound rule itself can become a mechanical fetish: if the team treats “refuse when lower bound says edge < X” as an unexamined policy without auditing whether the CI is valid (adequate n, no separation, stationarity), they may refuse valid signals or fail to refuse invalid ones because the interval is statistically hollow. The clock is the train/eval/live-check timeline from 2022–24 through 2025 to 2026 W1–4 [PAGE 1]. Calibration validity decays along this clock; a CI estimated in 2025 covers only the 2025 data-generating distribution under iid assumptions. As the live-check window approaches, the clock creates a distribution-shift deadline after which the 2025 bootstrap CI no longer licenses any adjustment unless re-estimated on contemporaneous data. The recursive move is therefore to treat the CI not as a static badge but as a time-stamped instrument whose authority expires with the eval window.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: signal acquisition hardware or sampling-rate changes alter the distribution of predicted probabilities z_i, breaking the stationarity between the held-out calibration set and live inputs; if physical layer telemetry flags a sensor or pipeline change, the ECE CI is void regardless of width [PAGE 1 assumptions]. Biomechanical layer veto: human labelers or annotation protocols producing y_i exhibit drift, fatigue, or criterion shifts; bootstrap resampling assumes exchangeable labels, so non-stationary labeling invalidates both the ECE point estimate and its CI [PAGE 1 assumptions]. Weather layer veto: environmental covariates induce non-stationarity in p(y | z) across time or geography, meaning the 2025 eval distribution no longer matches the 2026 live-check distribution; the bootstrap CI, which assumes iid exchangeability, cannot cover this structural shift [PAGE 1]. Adjudication rule: if any layer fails its stationarity/invariance check, the per-signal row is vetoed outright and no Platt adjustment ships. The calibration CI quantifies only statistical sampling uncertainty under iid; it does not cover physical, biomechanical, or weather-induced structural failure, so a narrow CI must never override a layer veto.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (small-n straddle): A per-signal row has n = 11, plug-in ECE = 0.031, and a 95% bootstrap percentile CI of [–0.008, 0.070] computed by resampling the held-out arrays with replacement [PAGE 1 operator]. RLVR veto: because the CI straddles zero, the signal is classified unmeasured and no Platt-binner adjustment ships [PAGE 1 rule]. Counterfactual prediction: downstream decisions that would have consumed the adjusted probabilities instead consume the uncalibrated base rate, so the false-precision adjustment rate for this row drops to zero and no miscalibrated signal enters the trust graph.

Scenario 2 (Platt underdetermination): A small-n signal has n = 7 with zero positive labels in the calibration slice, making Platt parameters (A,B) unidentifiable (likelihood flat or A → –∞) [SOURCE_OPERATORS_AND_EQUATIONS breakdown]. RLVR veto: the two-parameter sigmoid fit is rejected; the system falls back to no recalibration rather than forcing isotonic memorization [PAGE 1]. Counterfactual prediction: calibration error does not artificially collapse toward zero through overfitting; the signal’s ECE remains unadjusted and visible, preventing the contamination of downstream trust by a memorized calibrator [PAGE 1 Garrett].

Scenario 3 (temporal stationarity veto): A row shows a narrow 2025-eval bootstrap CI that excludes zero (e.g., [0.012, 0.041]), but a stationarity check between the 2025 eval distribution and 2026 W1–4 live-check covariates fails [PAGE 1 timeline]. RLVR veto: because iid exchangeability is violated, the 2025 CI is declared invalid for live deployment and all signals from the row are refused until re-calibrated on 2026 data [PAGE 1 assumptions]. Counterfactual prediction: the live-check false-adjustment rate declines because uncalibrated, distribution-shifted rows are withheld rather than shipped with stale confidence intervals.
</RLVR_COUNTERFACTUAL_VETOES>