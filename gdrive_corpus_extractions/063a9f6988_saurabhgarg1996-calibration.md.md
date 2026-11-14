---
source: "saurabhgarg1996-calibration.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 1
model: nvidia_2:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4661
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and process a source text about a calibration repository. I need to produce output with specific XML sections, each with certain content requirements, and meet strict invariants:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

The source text is page 1 of /CorpusRoot/Sports-deploy-fix/saurabhgarg1996-calibration.md.

Let me draft content for each section.

Section 1: THINK_TRACE (>=400 words)
Deep multi-hop derivation and gray-zone audit.
I need to analyze the source text deeply. The repo is saurabhgarg1996/calibration, MIT license, 6 stars, last pushed 2023, no test suite, no maintenance cadence. It implements temperature scaling, bias-corrected temperature scaling, vector scaling, matrix scaling, ECE measurement. Numpy-only. Probability-in/probability-out. GSE lens says ignore, superseded by probkit/probmetrics.

I should derive why this is a poor dependency choice for a production GSE pipeline: bus factor, bit rot, lack of tests, unmaintained since 2023, Python 3.6+ (old), small parameter count issues with vector/matrix scaling at small n. Connect to calibration theory: ECE, MCE, reliability diagrams, temperature scaling (Platt scaling variant), vector scaling (per-class temperature + bias), matrix scaling (full matrix per class). Mention overfitting caution at small n (same as isotonic regression). Gray zones: "no test suite visible" means we cannot verify numerical stability; "last pushed 2023" means dependency rot; single-author means no review process; MIT license is permissive but doesn't guarantee maintenance.

Multi-hop: GSE needs calibrated probabilities for downstream decision thresholds -> calibration method must be auditable and maintained -> unmaintained numpy repo introduces silent failure risk -> vector/matrix scaling overfit at small n -> ECE estimation bias at finite sample -> decision thresholds shift -> expected utility degradation. Gray zone: if GSE is air-gapped or zero-dependency environment, this could be a reference implementation to crib from, but not adopt.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS
Formal LaTeX equations, units, page citations, breakdown. I must cite [PAGE 1] and verbatim quotes from source text.

Verbatim quotes:
- "Numpy-only implementations of temperature scaling, bias-corrected temperature scaling, vector scaling, and matrix scaling, plus ECE measurement — no PyTorch model wrappers required; operates directly on probability/label arrays."
- "Logits or probabilities + labels. pip-installable from git; Python 3.6+."
- "License: MIT. Tiny, single-author, last pushed 2023 — no test suite visible, no maintenance cadence."
- "Vector/matrix scaling add parameters per class — same overfitting caution as isotonic at small n."
- "The interface idea is right for GSE (probability-in/probability-out, framework-agnostic — our heads aren't PyTorch), but everything this does is done better and maintained in probkit/probmetrics."
- "**IGNORE** — superseded by probkit/probmetrics on every axis. (MIT.)"

Equations:
Temperature scaling: $p_i = \text{softmax}(z / T)$ where $T > 0$ is temperature. Breakdown at $T \to 0^+$ (argmax collapse, singular gradients), $T \to \infty$ (uniform distribution, information loss). Units: logits dimensionless, $T$ dimensionless, output probability simplex $\Delta^{K-1}$.
Bias-corrected temperature scaling: $p_i = \text{softmax}((z + b) / T)$ or perhaps class-specific bias.
Vector scaling: per-class temperature $T_k$ and bias $b_k$: $p_k = \frac{\exp((z_k + b_k)/T_k)}{\sum_j \exp((z_j + b_j)/T_j)}$. Parameters: $2K$. Breakdown: $n \ll K$ overfitting, singular Fisher information when classes separable or collapsed.
Matrix scaling: $p = \text{softmax}(W z + b)$ where $W \in \mathbb{R}^{K \times K}$ (often diagonal or full). Parameters $K^2 + K$. Breakdown: $n \ll K^2$, rank deficiency, non-identifiability under softmax invariance (adding constant to all logits doesn't change probabilities).
ECE: $\text{ECE} = \sum_{m=1}^M \frac{|B_m|}{n} |\text{acc}(B_m) - \text{conf}(B_m)|$, where $B_m$ are confidence bins. Units: probability (dimensionless, [0,1]). Breakdown: binning bias, empty bins, $M$ choice, finite sample convergence $O_p(n^{-1/2})$ but with binning bias $O(1/M)$.

I need to mention exact singularity/breakdown regimes.

Section 3: RETROCAUSAL_GENEALOGY
Historical/scientific lineage & multi-week traps.
Lineage: Temperature scaling from Platt scaling (1999), SVM probability calibration; vector/matrix scaling from Guo et al. "On Calibration of Modern Neural Networks" (ICML 2017); ECE from Niculescu-Mizil & Caruana (2005). Numpy-only implement
ations trace back to numerical recipes in C/Fortran, scikit-learn's CalibratedClassifierCV (isotonic, sigmoid). Multi-week traps: bit rot over weeks (Python 3.6 EOL, numpy API changes), silent drift in ECE bin edges causing threshold drift over a multi-week deployment, unmaintained repo means security/CVE patches absent, dependency graph stagnation.

Section 4: RECURSIVE_THEORY_OF_MIND
Crisis habit regression vs counter-trap vs clock.
Model the operator's belief about the repo: operator thinks "it's tiny and MIT, easy to vendor" (first-order). Second-order: operator knows maintainer abandoned it but hopes no one notices. Third-order: maintainer knows it's superseded but keeps it for reference. Crisis habit regression: under incident pressure, engineer reverts to copying the unmaintained code into GSE rather than adopting probkit/probmetrics because it's local and zero-dependency. Counter-trap: the "reference to crib from" framing becomes a trap—engineers copy-paste without tests, embedding latent bugs. Clock: Python 3.6 reached EOL Dec 2021; numpy 1.x deprecations; last pushed 2023 means ~1-2 years of unmaintainedness already.

Section 5: CROSS_LAYER_VETO_ADJUDICATION
Physical/biomechanical/weather veto proof.
This is about sports deployment context (Sports-deploy-fix path). Need to tie calibration to sports predictions. Physical layer: athlete biomechanics, weather, surface conditions affect raw model outputs (logits/probabilities). Calibration operates post-hoc on probability arrays. Veto: if physical layer is non-stationary (e.g., weather changes mid-game, player injury), calibration parameters trained on historical data become invalid; recalibration required. No betting lines mentioned.

Section 6: RLVR_COUNTERFACTUAL_VETOES
3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some evaluation framework. I need 3 scenarios where the system would veto using this repo, with verifiable conditions and predictions.

Scenario 1: Test suite absence. Condition: `pytest` collection returns 0 tests in repo. Prediction: any deployment using this repo will have undetected numerical divergence in ECE > 0.02 within 30 days.
Scenario 2: Python 3.6 dependency. Condition: host environment runs Python 3.11+, repo's setup_requires or syntax incompatibilities cause ImportError. Prediction: silent import failure or incorrect broadcasting in vector scaling leading to miscalibration (ECE shift > 0.05).
Scenario 3: Small-n overfitting. Condition: $n_{\text{cal}} < 10K$ for $K$ classes with vector/matrix scaling. Prediction: out-of-sample ECE increases by factor $\ge 2$ relative to temperature scaling; validation loss diverges from training loss by $\ge 0.1$ nats.

Make sure no betting lines (spreads, totals, moneylines, odds). The path says Sports-deploy-fix but content is about calibration repo. I should avoid sports betting terminology entirely. Talk about probabilities, labels, calibration, ECE, thresholds.

Word count: Need >=1000 words total across XML sections. THINK_TRACE alone >=400. I'll aim for ~200+ words per section to be safe.

Citations: Use [PAGE 1] markers and verbatim quotes.

Let's write it out carefully.

Structure:

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

Check for betting words: avoid spread, total, moneyline, odds, wager, bet, line. Use "probability", "prediction", "threshold", "calibration", "ECE".

Let's draft THINK_TRACE (~500 words):

Start: The source document [PAGE 1] describes saurabhgarg1996/calibration as a MIT-licensed, numpy-only package providing temperature scaling, bias-corrected temperature scaling, vector scaling, matrix scaling, and Expected Calibration Error (ECE) measurement. The interface is probability-in/probability-out, taking logits or probabilities plus labels.

Derivation: GSE requires calibrated probabilities because downstream decisions (thresholding, expected utility) assume that predicted confidence matches empirical frequency. If a model outputs $p=0.8$ but the event occurs only 60% of the time, threshold policies are mispriced in expectation. Temperature scaling rescales logits by a scalar $T$ fitted on a validation set to minimize negative log-likelihood. Vector scaling extends this to per-class temperature and bias; matrix scaling uses a full matrix $W$. Each added parameter increases flexibility but also variance.

Gray-zone audit:
1. Maintenance cadence: "last pushed 2023 — no test suite visible, no maintenance cadence" [PAGE 1]. Single-author, 6 stars. Bus factor = 1. In a production GSE pipeline, silent dependency rot is a high-severity risk.
2. Interface vs implementation: "The interface idea is right for GSE... but everything this does is done better and maintained in probkit/probmetrics" [PAGE 1]. The verdict is "IGNORE — superseded by probkit/probmetrics on every axis" [PAGE 1].
3. Small-n overfitting: "Vector/matrix scaling add parameters per class — same overfitting caution as isotonic at small n" [PAGE 1]. For $K$ classes, vector scaling introduces $2K$ parameters, matrix scaling $O(K^2)$. If calibration set size $n$ is small relative to parameter count, the calibrated probabilities will overfit the validation labels and generalize poorly.
4. Zero-dependency fallback: The document allows that it may serve as a reference to crib from if GSE needs pure numpy with zero dependencies, but not adopt.

Multi-hop consequence: Adopting an unmaintained repo means no security patches, no NumPy 2.0 compatibility fixes, no test harness to detect ECE computation drift. Over weeks, bin edge definitions in ECE may silently shift as NumPy histogram behavior changes, causing calibration drift and threshold miscalibration. This is a gray zone because the code is correct in principle but unobservable in practice.

I need to ensure >=400 words. Let me expand more on isotonic comparison, ECE binning, Platt scaling lineage briefly maybe here but that's more for genealogy. Focus on derivation.

Now SOURCE_OPERATORS_AND_EQUATIONS:

Include verbatim quotes and [PAGE 1]. Equations in LaTeX.

Temperature scaling:
$p_k = \frac{\exp(z_k / T)}{\sum_{j=1}^K \exp(z_j / T)}, \quad T \in \mathbb{R}_{>0}$
Breakdown: $T \to 0^+$ collapses to one-hot (argmax), gradients vanish; $T \to \infty$ collapses to uniform $1/K$, information entropy max, all discrimination lost.

Bias-corrected temperature scaling:
$p_k = \frac{\exp((z_k + b_k) / T)}{\sum_j \exp((z_j + b_j) / T)}$ or global bias. Units: $z_k$ dimensionless logit, $b_k$ dimensionless logit offset, $T$ dimensionless.

Vector scaling:
$p_k = \frac{\exp((z_k + b_k) / T_k)}{\sum_j \exp((z_j + b_j) / T_j)}$, parameters $\theta = \{T_k, b_k\}_{k=1}^K \in \mathbb{R}^{2K}_{>0} \times \mathbb{R}^K$.

Matrix scaling:
$p = \text{softmax}(W z + b)$, $W \in \mathbb{R}^{K \times K}$, $b \in \mathbb{R}^K$. Parameters $K^2 + K$. Identifiability issue: softmax is invariant to adding constant vector $c \mathbf{1}$ to logits, so $W$ has a gauge freedom; fixing one row or using diagonal constraint needed.

ECE:
Partition $[0,1]$ into $M$ bins $B_m = \{i: \text{conf}(i) \in I_m\}$. 
$\text{ECE} = \sum_{m=1}^M \frac{|B_m|}{n} \left| \frac{1}{|B_m|} \sum_{i \in B_m} \mathbf{1}[\hat{y}_i = y_i] - \frac{1}{|B_m|} \sum_{i \in B_m} \hat{p}_i \right|$
Units: probability (dimensionless, $[0,1]$). Breakdown: empty bins ($|B_m|=0$), binning bias $O(1/M)$, variance $O_p(n^{-1/2})$, sensitivity to bin edges.

Verbatim quotes to cite:
- "Numpy-only implementations of temperature scaling, bias-corrected temperature scaling, vector scaling, and matrix scaling, plus ECE measurement — no PyTorch model wrappers required; operates directly on probability/label arrays." [PAGE 1]
- "Logits or probabilities + labels. pip-installable from git; Python 3.6+." [PAGE 1]
- "License: MIT. Tiny, single-author, last pushed 2023 — no test suite visible, no maintenance cadence." [PAGE 1]
- "Vector/matrix scaling add parameters per class — same overfitting caution as isotonic at small n." [PAGE 1]
- "The interface idea is right for GSE (probability-in/probability-out, framework-agnostic — our heads aren't PyTorch), but everything this does is done better and maintained in probkit/probmetrics. No reason to wire a 6-star unmaintained copy when the maintained version exists." [PAGE 1]
- "**IGNORE** — superseded by probkit/probmetrics on every axis. (MIT.)" [PAGE 1]

RETROCAUSAL_GENEALOGY:
Historical lineage:
- Platt scaling (Platt, 1999): sigmoid calibration for SVM outputs, $P(y=1|f) = (1 + \exp(Af+B))^{-1}$. Temperature scaling is the multiclass softmax analogue.
- Guo et al. (2017) "On Calibration of Modern Neural Networks": introduced temperature scaling and showed modern networks are poorly calibrated; vector and matrix scaling as extensions.
- Niculescu-Mizil & Caruana (2005): ECE and reliability diagrams; comparison of Platt scaling vs isotonic regression.
- Isotonic regression (Zadrozny & Elkan, 2002): non-parametric calibration, overfits at small n; source text explicitly compares vector/matrix scaling overfitting caution to isotonic at small n [PAGE 1].
- Numpy-only numerical lineage: Numerical Recipes, LAPACK, scikit-learn CalibratedClassifierCV.

Multi-week traps:
- Week 1-2: Vendor the code, no tests, passes smoke test.
- Week 3-4: NumPy minor release changes histogram/binning behavior in ECE; silent drift in reported calibration.
- Week 5-6: Python 3.6 EOL (Dec 2021) means security patches absent; dependency graph frozen; pip-install from git may break on newer setuptools.
- Week 7+: Maintainer does not respond to issues; single-author bus factor realized during incident.

RECURSIVE_THEORY_OF_MIND:
First-order belief: Engineer A believes "small MIT numpy repo is safe to vendor because it has no dependencies and the interface is simple." 
Second-order: Engineer A knows that maintainer abandoned it (last pushed 2023) but assumes "it's so simple it can't break."
Third-order: Maintainer knows it's superseded by probkit/probmetrics but leaves the repo up as an archival reference; the MIT license invites copying but not maintenance.
Crisis habit regression: During a production incident (e.g., ECE spike after a model update), the on-call engineer regresses to copying the local unmaintained code into GSE rather than integrating probkit/probmetrics because it's immediately available and "zero-dependency."
Counter-trap: The source text itself says "If GSE ever needs a pure-numpy fallback with zero dependencies, this is the reference to crib from, not adopt" [PAGE 1]. The "crib from" framing is a counter-trap: it legitimizes copy-pasting untested code into the codebase, embedding the same maintenance debt without attribution or update mechanism.
Clock: Python 3.6 reached end-of-life December 2021; the repo declares Python 3.6+ compatibility [PAGE 1] but receives no updates. The deployment clock is already past the support horizon of the declared runtime.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: In sports deployment (raw model inputs), athlete biomechanics, weather, and surface conditions shift the distribution of input features and therefore the logits $z$. Calibration is post-hoc on probability arrays [PAGE 1], so it cannot correct for distributional shift in the physical layer.
Biomechanical layer: Fatigue, injury, and substitution patterns change class-conditional densities $p(z|y)$. A temperature $T$ fitted pre-season is invalid under in-season distribution shift.
Weather layer: Rain/wind alters scoring dynamics; model logits become overconfident or underconfident. Calibration parameters must be recalibrated on post-shift data.
Veto proof: Because vector/matrix scaling add per-class parameters [PAGE 1], they adapt faster to spurious correlations induced by weather/biomechanical anomalies, increasing overfitting risk. A veto should trigger if physical/weather regimes change such that calibration set $n$ is no longer representative; in that case, even temperature scaling is suspect until recalibrated on regime-matched data. The repo cannot detect this automatically because it operates only on probability/label arrays [PAGE 1].

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios:
Scenario 1 (Test absence): Condition: `find . -name 'test_*' -o -name '*_test.py'` returns empty in repo [PAGE 1 notes "no test suite visible"]. Verification: run pytest; exit code non-zero or zero tests collected. Prediction: Within 30 days of deployment, a NumPy version bump will cause silent ECE miscalculation $\Delta \text{ECE} > 0.02$ undetected by CI, leading to threshold policy errors.
Scenario 2 (Runtime EOL): Condition: Host Python version $\ge 3.9$ while repo declares Python 3.6+ [PAGE 1] and last pushed 2023 with no CI. Verification: `python --version`; attempt `pip install git+...` on Python 3.11. Prediction: Import or broadcasting error in vector scaling matrix operations causes per-class temperature $T_k$ to collapse to scalar; out-of-sample NLL increases by $\ge 0.1$ nats relative to probkit/probmetrics baseline.
Scenario 3 (Small-n overfit): Condition: Calibration set size $n_{\text{cal}} < 10K$ where $K$ is number of classes, using vector/matrix scaling ($2K$ or $O(K^2)$ parameters) [PAGE 1 overfitting caution]. Verification: hold-out ECE vs training ECE gap. Prediction: Out-of-sample ECE exceeds temperature scaling baseline by factor $\ge 2$; validation loss diverges from training loss by $\ge 0.05$ nats; veto triggers automatic fallback to single-temperature scaling or probkit/probmetrics.

Make sure no forbidden words. Check: "moneyline", "spread", "total", "odds", "bet", "wager" — none used. "line" as in "betting line" not used; "code line" maybe okay but avoid. "threshold" is fine.

Word count check: THINK_TRACE ~450. Others ~200 each. Total should exceed 1000.

Let me write the final response with careful XML formatting. Ensure no markdown code fences inside that break XML? It's okay, but I'll keep LaTeX inline.

Also need to ensure verbatim quotes are exact from source text.

Double-check quotes:
"Numpy-only implementations of temperature scaling, bias-corrected temperature scaling, vector scaling, and matrix scaling, plus ECE measurement — no PyTorch model wrappers required; operates directly on probability/label arrays." — exact.
"Logits or probabilities + labels. pip-installable from git; Python 3.6+." — exact.
"License: MIT. Tiny, single-author, last pushed 2023 — no test suite visible, no maintenance cadence." — exact.
"Vector/matrix scaling add parameters per class — same overfitting caution as isotonic at small n." — exact.
"The interface idea is right for GSE (probability-in/probability-out, framework-agnostic — our heads aren't PyTorch), but everything this does is done better and maintained in probkit/probmetrics. No reason to wire a 6-star unmaintained copy when the maintained version exists." — exact.
"**IGNORE** — superseded by probkit/probmetrics on every axis. (MIT.)" — exact.

All good. Now produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source document [PAGE 1] describes saurabhgarg1996/calibration as a tiny, MIT-licensed, single-author repository offering NumPy-only implementations of temperature scaling, bias-corrected temperature scaling, vector scaling, matrix scaling, and Expected Calibration Error (ECE) measurement. Its interface accepts logits or probabilities plus label arrays and returns calibrated probabilities—explicitly "probability-in/probability-out, framework-agnostic." For a GSE pipeline, this interface shape is attractive because downstream decision rules (thresholding, expected-utility maximization, risk-sensitive selection) assume that predicted confidence matches empirical frequency. If a model emits p=0.80 but the event realizes only 60% of the time, any threshold policy built on that score is systematically miscalibrated in expectation.

The multi-hop derivation proceeds as follows. GSE requires calibrated probability outputs because raw neural-network logits are typically overconfident. Temperature scaling addresses this by fitting a single scalar T>0 on a held-out calibration set to minimize negative log-likelihood: p_k = softmax(z_k / T). Vector scaling generalizes to per-class temperature T_k and bias b_k, introducing 2K parameters; matrix scaling extends to a full matrix W∈R^{K×K} plus bias, introducing O(K^2) parameters. Each additional degree of freedom reduces training-set calibration error but raises variance. The source text explicitly warns: "Vector/matrix scaling add parameters per class — same overfitting caution as isotonic at small n" [PAGE 1]. Therefore, when the calibration sample n is small relative to K or K^2, vector and matrix scaling will overfit the validation labels and produce probabilities that generalize poorly to deployment data.

The gray-zone audit centers on three facts from [PAGE 1]: (1) "License: MIT. Tiny, single-author, last pushed 2023 — no test suite visible, no maintenance cadence," meaning bus factor = 1 and no observable regression protection; (2) "The interface idea is right for GSE ... but everything this does is done better and maintained in probkit/probmetrics. No reason to wire a 6-star unmaintained copy when the maintained version exists," meaning the maintained alternative dominates on every engineering axis; (3) the repository may serve as a reference to crib from for a zero-dependency pure-NumPy fallback, but the verdict is explicit: "**IGNORE** — superseded by probkit/probmetrics on every axis" [PAGE 1]. Consequence: adopting this repository imports silent dependency-rot risk. Without a test suite, a NumPy minor-release change in histogram binning or broadcasting could alter ECE computation without CI detection. Over weeks, that drift compounds into threshold miscalibration, invalidating expected-utility calculations. The conclusion is robust: the code may be correct in principle but is unobservable and unmaintained in practice, which is unacceptable for a production GSE calibration layer.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Verbatim source anchors from [PAGE 1]:
- "Numpy-only implementations of temperature scaling, bias-corrected temperature scaling, vector scaling, and matrix scaling, plus ECE measurement — no PyTorch model wrappers required; operates directly on probability/label arrays."
- "Logits or probabilities + labels. pip-installable from git; Python 3.6+."
- "License: MIT. Tiny, single-author, last pushed 2023 — no test suite visible, no maintenance cadence."
- "Vector/matrix scaling add parameters per class — same overfitting caution as isotonic at small n."
- "The interface idea is right for GSE (probability-in/probability-out, framework-agnostic — our heads aren't PyTorch), but everything this does is done better and maintained in probkit/probmetrics."
- "**IGNORE** — superseded by probkit/probmetrics on every axis. (MIT.)"

Formal operators and equations:

Temperature scaling. For logits z∈R^K and scalar temperature T∈R_{>0},
p_k = exp(z_k / T) / Σ_{j=1}^K exp(z_j / T),   k=1,…,K.
Output lies on the probability simplex Δ^{K-1}; units are dimensionless probabilities in [0,1]. Breakdown regimes: T→0^+ collapses to a one-hot argmax (gradient vanishes, Fisher information singular); T→∞ collapses to the uniform distribution p_k=1/K (all discrimination and information lost; entropy maximized).

Bias-corrected temperature scaling. With class-specific bias b_k∈R,
p_k = exp((z_k + b_k) / T) / Σ_j exp((z_j + b_j) / T).
Units: z_k and b_k are dimensionless logits; T is dimensionless.

Vector scaling. Per-class parameters {T_k, b_k}_{k=1}^K, total 2K real parameters,
p_k = exp((z_k + b_k) / T_k) / Σ_j exp((z_j + b_j) / T_j).
Breakdown: overfits when n_cal << 2K; parameter identifiability degrades as the per-class temperature and bias become collinear under softmax shift invariance.

Matrix scaling. Full matrix W∈R^{K×K}, bias b∈R^K,
p = softmax(W z + b).
Parameters: K^2+K. Breakdown: softmax is invariant to adding c·1 to all logits, so W possesses a gauge direction; without a constraint (e.g., diagonal W or fixed row), the Hessian is singular at K^2+K−1 effective degrees of freedom. Overfit risk is severe when n_cal << K^2 [PAGE 1].

Expected Calibration Error. Partition [0,1] into M bins I_m, B_m = {i: conf_i ∈ I_m},
ECE = Σ_{m=1}^M (|B_m| / n) · | acc(B_m) − conf(B_m) |,
where acc(B_m) = (1/|B_m|) Σ_{i∈B_m} 1[ŷ_i = y_i] and conf(B_m) = (1/|B_m|) Σ_{i∈B_m} p_i.
Units: dimensionless probability error in [0,1]. Breakdown regimes: empty bins (|B_m|=0), binning bias O(1/M), sampling variance O_p(n^{-1/2}), and sensitivity to bin-edge definition. Because the repository has no visible test suite [PAGE 1], changes in NumPy binning behavior can silently shift ECE without detection.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of this repository traces through several calibration layers. Platt scaling (Platt, 1999) introduced parametric sigmoid calibration for SVM decision values, P(y=1|f) = (1 + exp(Af + B))^{−1}. Temperature scaling is the multiclass softmax analogue popularized by Guo et al. (2017), "On Calibration of Modern Neural Networks," which demonstrated that modern deep networks are often poorly calibrated despite high accuracy. Vector and matrix scaling appear in that same body of work as extensions that add per-class flexibility. ECE as a scalar calibration metric descends from Niculescu-Mizil & Caruana (2005), who compared Platt scaling and isotonic regression using reliability diagrams and expected calibration error. The source text explicitly invokes the isotonic-regression caution: "Vector/matrix scaling add parameters per class — same overfitting caution as isotonic at small n" [PAGE 1], anchoring the repository in the Zadrozny & Elkan (2002) finding that nonparametric calibration overfits when the calibration sample is small.

The NumPy-only implementation lineage connects to Numerical Recipes, LAPACK, and scikit-learn's CalibratedClassifierCV, but unlike those maintained projects, this repository is a single-author artifact with six stars and no visible test suite [PAGE 1]. The multi-week traps are therefore temporal rather than purely statistical: (1) Week 1–2: vendor the code; it passes a smoke test because the math is straightforward. (2) Week 3–4: a NumPy patch release alters histogram bin edge behavior or broadcasting rules; ECE values drift silently because no test suite asserts numerical invariance [PAGE 1]. (3) Week 5–6: Python 3.6, the declared minimum runtime [PAGE 1], reached end-of-life in December 2021; the repository, last pushed in 2023, receives no security or compatibility patches, so the dependency graph freezes while the host environment advances. (4) Week 7+: an incident occurs; the on-call engineer discovers the single author is unresponsive and the issue tracker is stagnant, realizing the bus factor of one too late.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
First-order belief: the deploying engineer believes the repository is safe to adopt because it is tiny, MIT-licensed, dependency-free, and exposes a simple probability-in/probability-out interface [PAGE 1]. Second-order belief: the engineer knows the repository was last pushed in 2023 and has no test suite [PAGE 1], but assumes "the code is so simple it cannot break." Third-order belief: the maintainer likely knows the project is superseded by probkit/probmetrics [PAGE 1] but leaves the repository public as an archival reference; the MIT license invites copying without obligating maintenance.

Crisis habit regression: during a production incident—e.g., a sudden ECE spike after a model update—the on-call engineer regresses to copying the unmaintained NumPy code directly into the GSE codebase rather than integrating probkit/probmetrics, because the local copy is immediately available and requires no new dependency approval. This is exactly the trap the source text anticipates when it says the repository is "the reference to crib from, not adopt" [PAGE 1]. The "crib from" permission functions as a counter-trap: it legitimizes embedding untested, unversioned logic into the critical path, where latent bugs in vector-scaling matrix operations or ECE binning can persist undetected for months.

Clock: the declared Python 3.6+ runtime [PAGE 1] is already past its support horizon. The deployment clock has therefore outrun the repository's maintenance clock; every week of use increases the probability that an unobserved NumPy or Python incompatibility corrupts calibration outputs without triggering any alarm.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: raw model inputs in a sports deployment are driven by athlete biomechanics, weather, surface conditions, and game state. These factors shift the feature distribution and therefore the logits z. Because the repository operates "directly on probability/label arrays" [PAGE 1], calibration is strictly post-hoc; it cannot compensate for physical-layer distribution shift. If temperature T was fit on dry-grass, full-strength lineups, then a rainy match with key substitutions invalidates the calibrated probabilities.

Biomechanical layer: fatigue and injury alter class-conditional densities p(z|y). A scalar temperature fit pre-season does not track in-season physiological drift. Vector and matrix scaling, which add per-class parameters [PAGE 1], can absorb short-term spurious correlations induced by biomechanical anomalies, but they do so at the cost of higher variance and overfit risk when the calibration sample is small.

Weather layer: rain or wind changes scoring dynamics, making the model systematically overconfident or underconfident in certain classes. Calibration parameters estimated under one weather regime are not transportable to another without recalibration on regime-matched data.

Veto proof: a veto must trigger whenever the physical, biomechanical, or weather regime shifts such that the historical calibration set no longer represents the deployment distribution. Under such conditions, even temperature scaling is suspect until recalibrated; vector and matrix scaling are further suspect because their per-class parameterization [PAGE 1] amplifies sensitivity to non-stationarity. The repository contains no mechanism to detect regime shift, because it receives only probability/label arrays [PAGE 1] and has no test suite to assert calibration stability [PAGE 1]. Therefore, any deployment in a non-stationary sports environment should veto this repository in favor of a maintained package with explicit recalibration hooks and drift diagnostics.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Absent test suite. Condition: a recursive search of the repository for test files returns zero results, consistent with "no test suite visible" [PAGE 1]. Verification: execute `pytest` in the cloned repo; observe zero tests collected or a non-zero exit code. Prediction: within 30 days of deployment, a NumPy minor-release change in histogram binning or array broadcasting silently alters ECE computation by ΔECE > 0.02, and CI does not catch it. Veto outcome: automatic rejection of the repository for production GSE calibration.

Scenario 2 — Declared runtime end-of-life. Condition: the host environment runs Python 3.9 or newer while the repository declares Python 3.6+ compatibility and was last pushed in 2023 with no maintenance cadence [PAGE 1]. Verification: check `python --version` on the deployment image; attempt `pip install git+https://github.com/saurabhgarg1996/calibration` on Python 3.11 and observe import or broadcasting failure in vector-scaling operations. Prediction: vector-scaling per-class temperatures T_k collapse to an effective scalar due to silent broadcasting error; out-of-sample negative log-likelihood increases by ≥ 0.1 nats relative to a probkit/probmetrics baseline. Veto outcome: fallback to single-temperature scaling or the maintained alternative.

Scenario 3 — Small-n overfitting. Condition: calibration-set size n_cal < 10K for K classes, with vector or matrix scaling selected (2K or O(K^2) parameters respectively), triggering the source text's overfitting caution "at small n" [PAGE 1]. Verification: compute hold-out ECE versus training-set ECE; measure the gap. Prediction: out-of-sample ECE exceeds the temperature-scaling baseline by a factor ≥ 2; validation loss diverges from training loss by ≥ 0.05 nats. Veto outcome: automatic downgrade to temperature scaling only, with mandatory recalibration on a larger hold-out set before deployment.
</RLVR_COUNTERFACTUAL_VETOES>