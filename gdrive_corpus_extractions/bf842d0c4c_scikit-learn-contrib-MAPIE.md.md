---
source: "scikit-learn-contrib-MAPIE.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3259
---

<NATIVE_REASONING>
The user wants a deep technical response based on the provided source text about MAPIE (scikit-learn-contrib/MAPIE). I need to produce output with exactly these XML sections:

1. <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
2. <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
3. <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- Zero betting lines: never mention spreads, totals, moneylines, or odds.
- Zero toy equations: no fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes. The source text has PAGE 1 marker implicitly (the user says PAGES: 1 and provides text under # scikit-learn-contrib/MAPIE). I should cite [PAGE 1] and quote verbatim where relevant.
- >= 1,000-word depth across these exact XML sections. So total must be at least 1000 words.

Let me structure this carefully.

Key concepts from source:
- MAPIE: Model-Agnostic Prediction Interval Estimator
- Finite-sample coverage guarantees under exchangeability
- Conformal prediction: calibrate on held-out set, get intervals with P(truth in interval) = 1-alpha
- Regression, classification, time series
- Risk control (recall/precision guarantees)
- Exchangeability tests (new in 2026)
- BSD-3-Clause
- v1 breaking change 2025; pin version
- Calibration on 2022-24, conformalize on 2025, live-check on 2026 W1-4
- Prediction sets for classification: {A,B} with 90% confidence; empty/oversized sets = refuse
- Recalibrate per season, not global map

I need to avoid betting terminology. So instead of "player-prop and game-total outputs", I should talk about "sports prediction outputs" or "regression/classification outputs for athletic performance metrics" or similar. The source mentions player-prop and game-total, but I must not use betting lines. I can reframe as "individual athlete statistical outputs and match aggregate outputs" but avoid "prop", "total", "odds", "spread", "moneyline". Actually, the user said ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. So I cannot use those words at all. I should talk about "point predictions", "interval estimates", "prediction sets", "coverage probability", etc.

Now, word count: >=1000 words across sections. I'll aim for maybe 200-300 words per section to be safe, total ~1400+.

Section 1: THINK_TRACE (>=400 words). Deep multi-hop derivation & gray-zone audit.
- Derive conformal coverage guarantee: exchangeability of calibration scores and test score implies rank uniformity, P(Y_{n+1} in C(X_{n+1})) >= 1-alpha (or exactly 1-alpha for randomized, >= for split conformal with ceil((n+1)(1-alpha))/n).
- Gray zones: exchangeability assumption is strong; seasonal regime shift breaks it; MAPIE's exchangeability tests are the gate; what happens if test has low power? Type I/II error of exchangeability test affects validity.
- Multi-hop: MAPIE -> conformal quantile -> exchangeability -> calibration slice -> live slice -> coverage empirical -> recalibration trigger.
- Cite [PAGE 1] verbatim quotes.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS.
- Formal LaTeX equations.
- Split conformal: calibration scores S_i = |Y_i - \hat{\mu}(X_i)| for i=1..n. Quantile q_{1-alpha} = Quantile({S_i}, ceil((n+1)(1-alpha))/n). Prediction interval C(x) = [\hat{\mu}(x) - q, \hat{\mu}(x) + q].
- Coverage: P(Y_{n+1} \in C(X_{n+1})) \ge 1 - alpha under exchangeability of (X_1,Y_1)...(X_{n+1},Y_{n+1}).
- Units: alpha in [0,1] dimensionless probability; scores in same units as target (e.g., points, seconds, meters); coverage empirical \hat{1-alpha} = (1/m) sum 1{Y_j in C(X_j)}.
- Breakdown regimes: non-exchangeability (covariate shift, concept drift, seasonality), small n calibration (quantile instability), alpha near 0 or 1, discrete scores leading to conservatism, classification prediction set emptiness.
- Page citations: [PAGE 1].

Section 3: RETROCAUSAL_GENEALOGY.
- Historical lineage: Vovk et al. conformal prediction (1990s-2000s), Papadopoulos inductive conformal, Lei et al. split conformal (2018), Barber et al. conformalized quantile regression (CQR), exchangeability testing (recent 2020s), MAPIE 2026 additions.
- Multi-week traps: using 2022-24 fit + 2025 conformalize + 2026 W1-4 live check; trap of assuming stationarity across seasons; trap of one global map vs per-season recalibration; trap of ignoring exchangeability test rejection; trap of v1 API breaking change unpinned.

Section 4: RECURSIVE_THEORY_OF_MIND.
- Crisis habit regression: under pressure, teams revert to global historical averages rather than recent conformal recalibration.
- Counter-trap: forcing fresh calibration slice every season; using exchangeability test as automatic gate.
- Clock: walk-forward discipline; 2025 calibration -> 2026 W1-4 empirical coverage -> if coverage deviates beyond epsilon, trigger re-conformalization.
- Model the "mind" of the pipeline: it believes past is representative; crisis makes it regress to the mean; counter-trap imposes recency bias bounded by exchangeability test.

Section 5: CROSS_LAYER_VETO_ADJUDICATION.
- Physical/biomechanical/weather veto proof: MAPIE is statistical, doesn't model physical layer. Veto conditions: if weather changes scoring distribution (e.g., wind, precipitation), exchangeability between calibration and live fails; if biomechanical regime shifts (new rules, surface changes), concept drift. Physical layer must be checked before statistical layer.
- Veto proof: The conformal interval is void if physical layer violates exchangeability; MAPIE's test is the statistical gate, but physical inspection is the prior gate.

Section 6: RLVR_COUNTERFACTUAL_VETOES.
- 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: Exchangeability test rejects (p < 0.05) between 2025 calibration and 2026 W1-4. Prediction: interval void; pipeline must re-conformalize on 2026 W1-4 or recent window; if forced to use old interval, coverage drops below 1-alpha by delta.
- Scenario 2: Calibration slice too small (n < 100) leading to quantile standard error > tolerance. Prediction: empirical coverage on live slice deviates from nominal by > 2*SE; veto until n sufficient.
- Scenario 3: Prediction set for classification is empty or oversized (>k classes) on live check. Prediction: refuse output; if published anyway, invalid rate exceeds alpha; counter-trap is set-valued refusal.

Need to ensure no betting lines. No spreads, totals, moneylines, odds. Avoid "prop", "total", "line". Use "output", "target", "metric", "prediction".

Word count check: I'll write generously.

Also need to include verbatim quotes from [PAGE 1]. I'll quote several sentences.

Let's draft.

THINK_TRACE: Must be >=400 words. I'll write maybe 500.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX.

RETROCAUSAL_GENEALOGY: Lineage and traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression etc.

CROSS_LAYER_VETO_ADJUDICATION: Veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Total words: aim >1200.

Let's write.

Important: cite [PAGE 1] and verbatim quotes.

Verbatim quotes from source:
- "finite-sample coverage guarantees"
- "exchangeability between calibration and deployment data. Seasonal regime shift breaks it — hence the new exchangeability tests, which should be run as a gate."
- "API went through a v1 breaking change (2025); pin the version."
- "give me the interval that contains the true total 90% of the time" — wait, contains "total" which is a betting term? The source says "true total". But the constraint says never mention totals. Does quoting the source violate? The constraint says "Never mention spreads, totals, moneylines, or odds." I should avoid repeating "total" in that context. I can paraphrase or quote but replace? The instruction says cite verbatim quotes. But if the quote contains banned word, I might need to avoid it or use [sic]. Better to avoid quoting that specific phrase, or quote without the banned word. I'll quote safe parts.
- "Coverage on W1-4 is itself a calibration metric for the row."
- "If the test rejects exchangeability between 2025-calibration and 2026-live, the interval is void and the signal gets re-conformalized on recent data."
- "empty or oversized sets = refuse."
- "ADOPT — the interval/set engine for all regression and classification outputs; adopt the exchangeability test as a live-check gate. BSD-3-Clause."

I'll use these.

Now, writing style: technical, rigorous, no betting lines.

Let's produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds in four hops. Hop 1: MAPIE implements split conformal prediction. Given a fitted regressor \hat{\mu} and a calibration set \{(X_i,Y_i)\}_{i=1}^n, conformity scores S_i = |Y_i - \hat{\mu}(X_i)| are computed. The (1-\alpha) quantile q_{1-\alpha} is taken at level \lceil (n+1)(1-\alpha) \rceil / n of the empirical score distribution. For a new input x, the interval is C(x) = [\hat{\mu}(x) - q_{1-\alpha}, \hat{\mu}(x) + q_{1-\alpha}]. Under the assumption that the calibration examples and the test example are exchangeable, the rank of the test score among the n+1 scores is uniform, which yields the finite-sample coverage statement P(Y_{n+1} \in C(X_{n+1})) \ge 1 - \alpha. This is the core guarantee that [PAGE 1] summarizes as "finite-sample coverage guarantees... intervals guaranteed to contain the truth with probability 1-alpha under exchangeability."

Hop 2: The guarantee is conditional, not universal. [PAGE 1] states that "The coverage guarantee rests on exchangeability between calibration and deployment data. Seasonal regime shift breaks it." Therefore the pipeline cannot treat a 2025-conformalized quantile as permanently valid for 2026. The gray zone is the power and calibration of the exchangeability test itself: if the test accepts exchangeability when the distributions have actually drifted (Type II error), the interval inherits the nominal coverage only on paper, while empirical coverage on the live slice collapses. Conversely, if the test rejects exchangeability under benign finite-sample fluctuation (Type I error), the pipeline triggers unnecessary re-conformalization, wasting compute and potentially thinning the calibration set.

Hop 3: The walk-forward discipline specified on [PAGE 1] is fit on 2022-24, conformalize on 2025, live-check empirical coverage on 2026 W1-4. Empirical coverage \hat{\gamma} = (1/m) \sum_{j=1}^m \mathbb{1}\{Y_j \in C(X_j)\} over the m live examples is itself a calibration metric for the per-signal row. If |\hat{\gamma} - (1-\alpha)| exceeds a tolerance, the row is flagged. This creates a recursive loop: live coverage diagnoses the calibration slice; the exchangeability test diagnoses the slice-to-slice transition; rejection mandates re-conformalization on recent data.

Hop 4: The gray-zone audit centers on three failure modes. First, non-exchangeability from seasonality, rule changes, or roster turnover invalidates the quantile regardless of nominal alpha. Second, small calibration n produces quantile standard error that makes the interval either over-wide or under-covered. Third, the v1 breaking change (2025) means unpinned versions can silently alter the quantile convention; [PAGE 1] warns to "pin the version." The overall derivation is therefore not a single equation but a gated statistical control system: conformal quantile -> exchangeability gate -> empirical coverage audit -> conditional re-conformalization.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations, with [PAGE 1] citations and verbatim quotes.

Split conformal regression operator (MAPIE MapieRegressor):
Let \mathcal{D}_{\text{cal}} = \{(X_i,Y_i)\}_{i=1}^n be exchangeable with the deployment pair (X_{n+1},Y_{n+1}). Define the absolute residual conformity score
S_i = |Y_i - \hat{\mu}(X_i)|, \quad i = 1,\dots,n.
The conformal quantile is
q_{1-\alpha} = Q_{\frac{\lceil (n+1)(1-\alpha) \rceil}{n}}(\{S_1,\dots,S_n\}),
where Q_p denotes the empirical p-quantile and \alpha \in [0,1] is the dimensionless miscoverage risk. The prediction interval for input x is
C(x) = \{ y : |y - \hat{\mu}(x)| \le q_{1-\alpha} \} = [\hat{\mu}(x) - q_{1-\alpha},\ \hat{\mu}(x) + q_{1-\alpha}].
Units: q_{1-\alpha} carries the same SI or information units as the target Y (e.g., points, seconds, meters); \alpha is dimensionless probability mass.

Finite-sample coverage theorem under exchangeability:
If (X_1,Y_1),\dots,(X_n,Y_n),(X_{n+1},Y_{n+1}) are exchangeable, then
P\bigl(Y_{n+1} \in C(X_{n+1})\bigr) \ge 1 - \alpha.
For the randomized version equality holds; for split conformal the bound is conservative by O(1/n). This matches [PAGE 1]: "intervals guaranteed to contain the truth with probability 1-alpha under exchangeability."

Classification prediction-set operator (MapieClassifier):
For class probabilities \hat{p}(x) = (\hat{p}_1(x),\dots,\hat{p}_K(x)), compute conformity scores via the cumulative probability of the true label or a class-wise score. The prediction set is
C(x) = \{ k \in \{1,\dots,K\} : \text{score}_k(x) \le q_{1-\alpha} \}.
The set may be empty or oversized; [PAGE 1] prescribes "empty or oversized sets = refuse," making invalidity explicit rather than emitting a forced point label.

Empirical coverage audit on live slice \mathcal{D}_{\text{live}} = \{(X_j,Y_j)\}_{j=1}^m:
\hat{\gamma} = \frac{1}{m}\sum_{j=1}^m \mathbb{1}\{Y_j \in C(X_j)\}, \quad \text{SE}(\hat{\gamma}) = \sqrt{\frac{\hat{\gamma}(1-\hat{\gamma})}{m}}.
A row passes if |\hat{\gamma} - (1-\alpha)| \le z_{\beta/2}\,\text{SE}(\hat{\gamma}) for chosen audit confidence \beta. [PAGE 1]: "Coverage on W1-4 is itself a calibration metric for the row."

Exchangeability-test gate:
Run a two-sample exchangeability test between calibration features/scores and live features/scores. Null H_0: calibration and deployment are exchangeable. Rejection at level \gamma_{\text{test}} voids the interval; [PAGE 1]: "If the test rejects exchangeability between 2025-calibration and 2026-live, the interval is void and the signal gets re-conformalized on recent data."

Breakdown / singularity regimes:
1. Non-exchangeability: covariate shift p_{\text{cal}}(X) \ne p_{\text{live}}(X) or concept drift p_{\text{cal}}(Y|X) \ne p_{\text{live}}(Y|X). Coverage guarantee collapses; no finite-sample bound applies.
2. Calibration scarcity: n < 100 yields quantile standard error \sigma_q \approx \frac{q(1-q)}{n f(q)^2}^{1/2} that dominates interval width; interval becomes statistically meaningless.
3. Discrete scores: ties in S_i produce conservative over-coverage or quantile instability; coverage is \ge 1-\alpha but may be far above nominal.
4. Alpha extremes: \alpha \to 0 yields unbounded intervals; \alpha \to 1 yields empty intervals.
5. Version drift: unpinned MAPIE post-v1 (2025 breaking change) alters quantile convention; [PAGE 1] instructs to "pin the version."

Page citation: all source claims drawn from [PAGE 1], the provided corpus text for scikit-learn-contrib/MAPIE.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of MAPIE traces back to Vovk, Gammerman, and Shafer’s conformal prediction framework (late 1990s to early 2000s), which established finite-sample coverage under exchangeability without requiring i.i.d. assumptions beyond exchangeability. Papadopoulos et al. introduced inductive conformal prediction, separating training and calibration to enable model-agnostic wrapping. Lei, Robins, and Wasserman (2018) formalized split conformal prediction, the direct engine inside MAPIE’s MapieRegressor. Romano, Patterson, and Candes (2019) extended this to conformalized quantile regression (CQR), producing adaptive intervals that narrow or widen with local heteroskedasticity. Barber et al. later developed conformal risk control for classification metrics such as recall and precision, which [PAGE 1] notes as a 2026 MAPIE addition. The most recent layer is the exchangeability test, a 2020s statistical diagnostic that asks whether the conformal premise is even satisfied before coverage is claimed.

Multi-week traps embedded in this genealogy: (1) the stationarity trap — assuming a quantile fit on 2022-24 and conformalized on 2025 remains valid for 2026 W1-4 despite roster turnover, rule changes, or seasonal regime shift; [PAGE 1] explicitly states "Seasonal regime shift breaks it." (2) The global-map trap — using one conformal map across seasons instead of recalibrating per season; [PAGE 1] directs "a 2026 map must be conformalized on 2026-ish data (2025 season at the oldest)." (3) The gate-neglect trap — publishing intervals without running the exchangeability test, converting a conditional guarantee into an unconditional overclaim. (4) The API-drift trap — failing to pin the version after the v1 breaking change in 2025, silently switching quantile conventions mid-stream. Each trap is retro-causal in the sense that a failure observed in 2026 W1-4 propagates backward to invalidate the 2025 calibration decision; the exchangeability test is the mechanism that makes this backward invalidation visible before the interval is published.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the pipeline as an epistemic agent with a crisis habit: under pressure to publish, it regresses to the most recent available global fit and treats the conformal quantile as a permanent property of the model rather than a conditional certificate tied to a calibration slice. This habit regression is dangerous because the agent’s "belief" that the past represents the future is exactly what exchangeability formalizes, and seasonal shifts break that belief without changing the model’s weights.

The counter-trap is to make the pipeline metacognitively distrustful of its own calibration: before emitting any interval, the agent queries the exchangeability test between the 2025 calibration slice and the 2026 W1-4 live slice. If the test rejects, the agent must declare its interval void and regress not to the old global mean but to a freshly conformalized recent slice. This is a counter-habit: instead of "use what is fitted," the rule is "use only what has just been validated as exchangeable."

The clock is the walk-forward cadence: fit on 2022-24, conformalize on 2025, audit empirical coverage on 2026 W1-4. Each week, \hat{\gamma} is recomputed. If empirical coverage drifts outside the tolerance band around 1-\alpha, the clock triggers a recalibration event. The theory of mind here is recursive: the model predicts Y; the conformal layer predicts the coverage of that prediction; the exchangeability test predicts whether the coverage layer itself is valid; and the recalibration trigger predicts whether the validity layer needs renewal. Crisis habit regression collapses this stack to a single point estimate; the counter-trap preserves the stack and forces the agent to refuse when any layer fails its precondition.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
MAPIE is a purely statistical layer; it contains no physical, biomechanical, or weather model. Therefore any veto adjudication must begin outside MAPIE and propagate into the conformal gate. Physical layer: if atmospheric conditions (wind velocity, precipitation, temperature, air density) materially alter the stochastic process generating the target, then p_{\text{cal}}(Y|X) \ne p_{\text{live}}(Y|X) even if p_{\text{cal}}(X) = p_{\text{live}}(X). This is concept drift, and it breaks exchangeability independently of covariate shift. Biomechanical layer: rule changes, surface modifications, or equipment changes alter the mapping from inputs to outputs; a calibration slice from before the change is not exchangeable with post-change deployment data. Weather layer: if the live slice occurs under conditions absent from the calibration slice (e.g., extreme heat, high wind), the support of the live distribution is not covered by the calibration support, violating the overlap required for meaningful transport of conformal quantiles.

Veto proof: Let V_{\text{phys}} \in \{0,1\} indicate that a physical/biomechanical/weather regime shift has been independently detected (e.g., via sensor metadata, rule-change timestamp, or meteorological anomaly). Let V_{\text{stat}} \in \{0,1\} indicate that MAPIE’s exchangeability test rejects H_0 at level \gamma_{\text{test}}. The interval is emitted only if V_{\text{phys}} = 0 AND V_{\text{stat}} = 0 AND empirical coverage \hat{\gamma} on the recent live slice lies within the tolerance band around 1-\alpha. If V_{\text{phys}} = 1, the conformal interval is void regardless of the statistical test, because the statistical test may lack power to detect a physical regime shift with limited live data. If V_{\text{stat}} = 1, the interval is void per [PAGE 1]: "If the test rejects exchangeability between 2025-calibration and 2026-live, the interval is void." The physical veto is prior and sufficient; the statistical veto is confirmatory and necessary. No interval may be published when either veto is active.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios, each with a falsifiable prediction.

Scenario 1: Exchangeability veto. Construct a counterfactual in which the 2025 calibration slice and the 2026 W1-4 live slice are drawn from different distributions (e.g., introduce a mean shift \Delta in the target conditional on X). Run MAPIE’s exchangeability test at \gamma_{\text{test}} = 0.05. Veto condition: test rejects H_0. Prediction: if the pipeline ignores the veto and publishes the 2025-conformalized interval, empirical coverage on the live slice falls below 1-\alpha by at least |\Delta|/(2q_{1-\alpha}) in expectation; if the pipeline honors the veto and re-conformalizes on a recent 2026 slice, coverage returns to within the tolerance band of 1-\alpha. Verifiable via repeated holdout experiments with known \Delta.

Scenario 2: Calibration-scarcity veto. Set n = 30 calibration examples while keeping \alpha = 0.10. The quantile standard error becomes large relative to the score scale. Veto condition: n below a threshold such that \text{SE}(q_{1-\alpha}) > \tau q_{1-\alpha} for \tau = 0.20. Prediction: empirical coverage on any live slice will deviate from 1-\alpha by more than two standard errors of \hat{\gamma} in at least 40% of repeated splits; increasing n to 500 reduces the deviation frequency to below 5%. Verifiable by Monte Carlo over score distributions.

Scenario 3: Classification set-refusal veto. For MapieClassifier with K = 3 classes and \alpha = 0.10, construct live inputs for which the conformity scores for all classes exceed q_{1-\alpha}, producing an empty prediction set C(x) = \emptyset. Veto condition: C(x) is empty or |C(x)| > K/2 (oversized). Per [PAGE 1], "empty or oversized sets = refuse." Prediction: if the pipeline emits a forced singleton class instead of refusing, the invalid-rate (failure to include the true label) exceeds \alpha on those inputs; if the pipeline refuses, the invalid-rate on emitted sets remains at or below \alpha, at the cost of reduced output coverage. Verifiable by scoring a labeled live set and comparing emitted-set validity versus forced-singleton validity.
</RLVR_COUNTERFACTUAL_VETOES>