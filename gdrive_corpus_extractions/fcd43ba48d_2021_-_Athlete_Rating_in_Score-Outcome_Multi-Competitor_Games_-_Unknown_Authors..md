---
source: "2021 - Athlete Rating in Score-Outcome Multi-Competitor Games - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2021"
pages: 5
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 2984
---

<NATIVE_REASONING>
The user wants me to analyze a source document about athlete rating in score-outcome multi-competitor games. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful about page citations. The source text has "NESSIS 2021" page markers. I need to cite exact page numbers. Looking at the text, pages are numbered 3 through 51 (though many seem to be image slides). I should reference pages like [PAGE 10], [PAGE 11], etc. based on the NESSIS 2021 page numbers visible in the text.

Let me map out what pages contain what:
- Page 3-5: Athlete rating intro, weak/strong, W/L
- Page 6-7: Wrinkle 1: multi-competitor, citation to Glickman & Hennessy 2015
- Page 8: Wrinkle 2: score-outcome with numbers 65,7; 60,8 etc.
- Page 10: A model for athlete rating, DLM visual idea, Harville (1977); Glickman & Stern (1998)
- Page 11: DLM standard equations, y_t | theta_t ~ N(theta_t, sigma^2), theta_{t+1} | theta_t ~ N(theta_t, sigma^2 W), sigma^2 ~ IG(a,b0), theta_0 ~ N(0, sigma_0^2)
- Page 12: Modification 1: game-specific effects
- Page 13-14: Modification 2: data transformations
- Page 15: Transformations: Yeo-Johnson (Yeo & Johnson 2000), formula
- Page 16: Transformations: monotone spline (Ramsay 1988)
- Page 19-20: DLM with transformation full model
- Page 21: posterior p(y1:T, theta1:T, sigma^2, W, lambda) with Jacobian
- Page 22-23: model fitting, marginalization over theta
- Page 24-25: Given W and lambda, Kalman Filter evaluation
- Page 26: Goal: find posterior mode of p(W, lambda | y1:T)
- Page 28: Recovering true transformation, YJ_t^0.8(x), etc.
- Page 29: Model comparison: ROL, VLM
- Page 30: Train/test split
- Page 31: Data: multicompetitor and head-to-head
- Page 32: Model comparison multi-competitor data table (Diving, Biathlon, Biathlon relay) with Spearman/Kendall for VLM, LMT, ROL
- Page 33: Head-to-head data (Rugby, Fencing) accuracy table
- Page 34: Initial conclusions
- Page 35-38: Exploring results: posterior predictive intervals, residuals, transformations, athlete strengths
- Page 39-40: Conclusion
- Page 41: References
- Page 43: DLM model matrix notation
- Page 44: DLM full model
- Page 45: DLM posterior updates
- Page 46-47: Exploring results optim() convergence, monotone spline
- Page 48-49: DLM model fitting details
- Page 50: 95% coverage table LMNT vs LM
- Page 51: coverage

I need to produce >= 1000 words total across sections. Each section must be present. I'll aim for substantial depth.

Important: No betting lines. No fake ratios. Formal LaTeX only. Cite exact page markers [PAGE N] and verbatim quotes.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I'll discuss the derivation from Harville/Glickman-Stern state-space to the modified DLM, the Yeo-Johnson transformation, the marginalization, the identifiability issues between W and lambda, the Jacobian term, the breakdown when W is near singular or lambda at boundaries, the non-identifiability of score scale vs ability scale, etc. Also gray zones: OCR corruption in source text (e.g., "LMT" vs "LMNT", missing pages 9, 17, 18, 27, 36-42 mostly images), the distinction between Spearman/Kendall rank correlations vs predictive accuracy, the coverage rates >0.95 indicating overdispersion or conservative intervals, etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations with units, page citations, verbatim quotes. I'll write out the DLM observation equation, state equation, priors, game-specific effects modification, Yeo-Johnson formula, monotone spline, posterior with Jacobian, Kalman filter predictive, matrix notation X_gt, coverage table values. Cite pages exactly.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Harville 1977 [PAGE 10], Glickman & Stern 1998 [PAGE 10], Glickman & Hennessy 2015 ROL [PAGE 7], Yeo & Johnson 2000 [PAGE 15], Ramsay 1988 [PAGE 16]. Multi-week traps: ability drift over time, innovation variance W accumulation, transformation lambda stability across weeks, non-stationarity in multi-competitor fields.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret it as the modeler's/analyst's recursive reasoning about how athletes/coaches adapt. Crisis habit regression: under pressure, athletes revert to habitual performance patterns, captured by time-varying theta_t with innovation W. Counter-trap: opponents adapt to rated strengths, creating a game-theoretic feedback loop not modeled by the DLM (exogenous ratings). Clock: the discrete time period t and game g indexing, the Kalman filter recursion, the train/test split temporal leakage risk.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since this is a statistical rating model, veto layers: (1) physical layer - score outcomes bounded by sport mechanics (diving scores judged, biathlon time penalties, fencing touches), if physical constraints change (equipment, course), theta_t is invalid; (2) biomechanical layer - athlete fatigue/injury not in state equation, only random walk innovation W; (3) weather layer - outdoor sports (biathlon) affected by wind/snow, not modeled as covariate, only absorbed into residual variance sigma^2_gt. Exact veto conditions.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I'll frame as verifiable counterfactuals:
1. Veto: If innovation variance W -> 0, the model collapses to static ability; prediction: rankings freeze, Spearman correlation decays as true form drifts. Verifiable by holding W fixed at 1e-6 on biathlon data [PAGE 32].
2. Veto: If Yeo-Johnson lambda is constrained to 1 (no transformation) on skewed diving scores, predictive coverage drops below nominal 95% [PAGE 50 shows LMNT vs LM coverage].
3. Veto: If game-specific variance sigma^2_gt is omitted (Modification 1 removed) in high-variance multi-competitor fields, posterior overconfidence and coverage collapse [PAGE 12, 50].

I need to ensure total word count >= 1000 words. Let me write carefully.

Also must not mention betting lines. No spreads, totals, moneylines, odds. I will avoid any gambling terminology. "Accuracy" is fine (classification accuracy), but not odds.

Let's write.

Word count estimation: THINK_TRACE ~500 words, SOURCE_OPERATORS ~400 words, others ~200-300 each. Total should exceed 1000.

I must include exact [PAGE N] markers. Since the source text has page numbers like "NESSIS 2021 10", I'll cite [PAGE 10], etc.

Let me draft verbatim quotes from source:
- Page 10: "Dynamic linear model DLM : visual idea y ( ) Harville (1977); Glickman & Stern (1998)"
- Page 11: "𝑝(𝑦_𝑡|𝜃_𝑡,𝜎²) = 𝑁(𝜃_𝑡,𝜎²)", "𝑝(𝜃_{𝑡+1}|𝜃_𝑡,𝜎²) = 𝑁(𝜃_𝑡,𝜎²𝑊)", "𝜎² = 𝐼𝐺(𝑎,𝑏₀)"
- Page 15: Yeo-Johnson formula
- Page 32: table values Spearman 0.62 etc.
- Page 50: coverage table LMNT 0.998 diving etc.

Now write the response. I must use the exact XML section tags.

One concern: The user says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't invent any. All equations from source.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The source document presents a Bayesian dynamic linear model (DLM) for athlete rating in score-outcome, multi-competitor games, extending the classical state-space tradition of Harville (1977) and Glickman & Stern (1998). The derivation proceeds in multiple hops. First, the base observation equation states that each athlete's observed score y_{gt} in game g within time period t is conditionally Gaussian around a latent ability theta_t with observation variance sigma^2: y_t | theta_t, sigma^2 ~ N(theta_t, sigma^2). The state equation is a random walk: theta_{t+1} | theta_t, sigma^2 ~ N(theta_t, sigma^2 W), where W is an innovation-variance ratio governing how quickly ability can drift. Priors are inverse-gamma on sigma^2 and Gaussian on the initial ability theta_0 ~ N(0, sigma_0^2). This is standard Kalman-filter territory.

Modification 1 introduces game-specific effects: the observation mean is centered by the game-specific average score bar(y)_{gt}, so y_{gt} - bar(y)_{gt} | theta_t ~ N(theta_t, sigma^2_{gt}). This acknowledges that score scales differ across games (e.g., diving judges versus biathlon times). Modification 2 applies a data transformation via the Yeo-Johnson family or Ramsay monotone splines, replacing raw scores with psi_t = lambda(y - bar(y)) or a spline expansion b(y) = sum beta_i I_i(y). The full posterior therefore includes a Jacobian term J_{psi_{1:T} -> y_{1:T}} because the transformation is non-linear and the likelihood must be expressed in the original score measure.

Gray-zone audit: the OCR'd source drops several pages (9, 17, 18, 27, 36-42 are largely images), so exact equation numbering is lost and symbols like "LMT" versus "LMNT" appear inconsistently across tables. There is a fundamental identifiability gray zone between W (ability drift) and lambda (score transformation): both can absorb non-stationarity, yet only their joint posterior mode p(W, lambda | y_{1:T}) is targeted via numerical optimization. If W approaches zero, the state freezes and the model cannot track within-season form; if lambda sits at a boundary of the Yeo-Johnson domain, the Jacobian can vanish or explode, creating a singularity in the posterior. Coverage results show LMNT intervals at 0.998 for diving and 0.949 for fencing, suggesting over-conservatism in judged sports and near-nominal behavior in head-to-head combat sports. Rank correlations (Spearman/Kendall) are reported rather than proper scoring rules, which masks calibration error in the predictive distribution. Finally, the train/test split finds W-hat and lambda-hat on training data then predicts on test data, creating a temporal leakage risk if time periods t are not strictly ordered by competition date.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Base DLM observation operator (from [PAGE 11]):
\[
y_t \mid \theta_t, \sigma^2 \sim \mathcal{N}(\theta_t, \sigma^2)
\]
where y_t is the observed score vector for athletes in game g at time period t, theta_t is latent ability, and sigma^2 is observation variance in score-squared units.

State transition operator (from [PAGE 11]):
\[
\theta_{t+1} \mid \theta_t, \sigma^2 \sim \mathcal{N}(\theta_t, \sigma^2 W)
\]
W is dimensionless innovation-variance ratio; sigma^2 W has units of ability-squared per time period.

Initial and variance priors (from [PAGE 11]):
\[
\theta_0 \sim \mathcal{N}(0, \sigma_0^2), \qquad \sigma^2 \sim \text{IG}(a, b_0)
\]

Modification 1: game-specific effects (from [PAGE 12]):
\[
y_{gt} - \bar{y}_{gt} \mid \theta_t, \sigma^2_{gt} \sim \mathcal{N}(\theta_t, \sigma^2_{gt})
\]
bar(y)_{gt} is the game-specific mean score; sigma^2_{gt} allows heteroskedasticity across competition fields.

Modification 2: Yeo-Johnson transformation (from [PAGE 15], Yeo & Johnson 2000):
\[
\text{YJ}_\lambda(y) = 
\begin{cases}
\frac{(y+1)^\lambda - 1}{\lambda}, & y \ge 0, \lambda \ne 0 \\
\log(y+1), & y \ge 0, \lambda = 0 \\
-\frac{(-y+1)^{2-\lambda} - 1}{2-\lambda}, & y < 0, \lambda \ne 2 \\
-\log(-y+1), & y < 0, \lambda = 2
\end{cases}
\]
The source displays lambda = 0.8 and lambda = 1.2 exemplars [PAGE 15].

Monotone spline operator (from [PAGE 16], Ramsay 1988):
\[
b(y) = \sum_{i=1}^{B} \beta_i I_i(y), \quad \text{monotonicity constraints on } \beta
\]

Full transformed DLM (from [PAGE 20]):
\[
\psi_t \mid \theta_t, \sigma^2 \sim \mathcal{N}(\theta_t, \sigma^2), \qquad
\theta_{t+1} \mid \theta_t \sim \mathcal{N}(\theta_t, \sigma^2 W)
\]

Joint posterior with Jacobian (from [PAGE 21]):
\[
p(\psi_{1:T}, \theta_{1:T}, \sigma^2, W, \lambda \mid y_{1:T}) =
J_{\psi_{1:T} \to y_{1:T}} \,
p(\sigma^2) p(W) p(\lambda)
\prod_{t=1}^{T} p(\psi_t \mid \theta_t, \sigma^2) \,
p(\theta_t \mid \theta_{t-1}, \sigma^2, W)
\]

Marginalization target (from [PAGE 23]):
\[
p(W, \lambda \mid y_{1:T}) = \int p(\theta_{1:T}, \sigma^2, W, \lambda \mid y_{1:T}) \, d\theta_{1:T} \, d\sigma^2
\]

Kalman-filter predictive evaluation (from [PAGE 24]):
\[
p(\psi_t \mid \psi_{1:t-1}, W, \lambda)
\]
computed recursively for t = 1, ..., T; units are probability density per transformed score.

Matrix notation (from [PAGE 43]):
\[
y_{gt} \mid \theta_t, \sigma^2 \sim \mathcal{N}(X_{gt} \theta_t, \sigma^2 I_{N_t})
\]
X_gt is an N_t x N design matrix: indicator rows for multicompetitor games, (1, -1, 0, ...) rows for head-to-head games.

Empirical rank correlations from multi-competitor comparison (from [PAGE 32]): Diving VLM Spearman 0.62, LMT 0.58, ROL 0.61; Biathlon VLM 0.61, LMT 0.60, ROL 0.61; Biathlon relay VLM 0.75, LMT 0.77, ROL 0.75. Kendall tau values range 0.44–0.60.

Coverage rates (from [PAGE 50]): LMNT diving 0.998, biathlon 0.979, biathlon relay 0.998, rugby 0.958, fencing 0.949; LM diving 0.987, biathlon 0.949, biathlon relay 0.985, rugby 0.954, fencing 0.945. Nominal level is 0.95.

Breakdown regimes: W -> 0 yields static abilities with no form tracking; lambda at Yeo-Johnson boundary (0 or 2) creates a non-differentiable transformation point and potential Jacobian singularity; sigma^2_{gt} omitted in high-variance fields produces overconfident predictive intervals (coverage collapse below 0.95).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage runs from Harville (1977), who introduced linear-model methodology for rating college football teams, to Glickman & Stern (1998), who cast NFL scores into a state-space DLM, and forward to Glickman & Hennessy (2015), who proposed a stochastic rank-ordered logit (ROL) for multi-competitor games [PAGE 10, PAGE 41]. The present paper adds two "wrinkles": multi-competitor structure and score-outcome modeling rather than win/loss only [PAGE 6–8]. This genealogy implies a temporal recursion: each rating theta_t is a smoothed estimate of all prior performances, conditioned on future observations through the Kalman smoother implicit in the full posterior p(theta_{1:T} | y_{1:T}). Multi-week traps emerge at three scales. First, ability drift: if an athlete's true form changes faster than W permits (e.g., injury recovery or technique overhaul across a season), the random-walk state equation lags the ground truth, producing serially correlated residuals [PAGE 35–38]. Second, transformation drift: lambda is estimated globally over y_{1:T}, but scoring norms in judged sports (diving) can shift week-to-week with judging panels, making a fixed lambda mis-specified for later competitions [PAGE 15, PAGE 28]. Third, compositional non-stationarity: multi-competitor fields vary in size n_{gt} and quality rho_{gt}; the model conditions on observed competitors but does not model entry/exit, so a rating earned against a weak field is not automatically downgraded when the athlete later faces a strong field [PAGE 32]. The references confirm the theoretical anchors (Harville 1977; Glickman & Stern 1998; Ramsay 1988; Yeo & Johnson 2000), yet none of these sources addresses within-season biomechanical degradation or weather-contingent score generative processes, leaving a gap between the statistical rating and physical reality.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
From the analyst's recursive perspective, the model assumes athletes and opponents do not strategically adapt to published ratings; theta_t is treated as an exogenous latent trait. Crisis habit regression enters through the state equation: under competitive pressure, an athlete regresses toward their habitual performance level, which the DLM captures as shrinkage of y_{gt} toward theta_t via the observation variance sigma^2. However, the model contains no explicit opponent-modeling layer: if a fencing athlete adjusts tactics because they know their opponent's rating is high, that counter-adaptation is unobserved in X_gt, which only encodes (1, -1) head-to-head contrasts [PAGE 43]. The counter-trap is therefore recursive: rating systems that publish athlete strengths can alter behavior, which then invalidates the stationarity assumption of the state-transition equation. The clock layer is the discrete indexing (g, t) and the Kalman recursion: predictions are made conditionally on psi_{1:t-1}, but the train/test split estimates W-hat and lambda-hat on the full training block before forecasting [PAGE 30]. If test-set games interleave chronologically with training games, information from the future leaks into the rate parameters. The theory-of-mind failure mode is assuming the athlete's latent ability is a Markov process independent of the rating's social presence, when in fact elite athletes may intentionally sandbag or peak for specific games, breaking the Gaussian innovation assumption theta_{t+1} | theta_t.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: the generative model assumes Gaussian observed scores around theta_t. Diving scores are bounded judge-assigned values (typically 0–10 per dive, aggregated with difficulty coefficients); biathlon outcomes are elapsed time plus penalty-loop time; fencing and rugby are discrete point/touch counts. If competition rules change (e.g., new diving degree-of-difficulty tables or biathlon penalty formats), the observation equation's support changes and theta_t loses physical interpretability [PAGE 8, PAGE 31]. Biomechanical layer veto: the state equation only permits ability diffusion through sigma^2 W; it contains no fatigue, injury, or recovery state. An athlete competing on compressed schedules (multiple games g within short time deltas) cannot accumulate transient performance degradation, so the model will misattribute fatigue-induced score drops to permanent ability decline [PAGE 11–12]. Weather layer veto: outdoor sports such as biathlon are sensitive to wind, snow, and temperature, yet no meteorological covariate enters sigma^2_{gt} or the observation mean [PAGE 31–32]. Variance inflation from weather is absorbed into residual error, biasing coverage intervals. Adjudication rule: any veto triggers model rejection unless the offending layer is explicitly modeled (e.g., adding a fatigue covariate to the state equation or a weather regressor to the observation mean). Coverage evidence supports caution: LMNT fencing coverage is 0.949, just below nominal 0.95, while diving is 0.998, indicating the model is miscalibrated in ways consistent with unmodeled physical layer structure [PAGE 50].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1: Freeze innovation at W = 0 (static abilities). Prediction: rank correlations on biathlon and diving test sets will decay monotonically as the test season progresses because the model cannot track form drift; expected Spearman on diving falls below 0.50 by the final third of the test period versus 0.62 observed with estimated W [PAGE 32]. Verification: re-fit the DLM on training data with W fixed to 1e-8 and compute out-of-sample Kendall tau; a statistically significant drop relative to the reported 0.48–0.60 range confirms the veto.

Veto scenario 2: Remove the Yeo-Johnson transformation (constrain lambda = 1, identity link) for diving scores. Prediction: predictive coverage for diving collapses below 0.90 because raw diving scores are bounded and skewed, violating the Gaussian observation assumption; the reported LMNT diving coverage of 0.998 depends on the transformation normalizing the likelihood [PAGE 15, PAGE 50]. Verification: fit the untransformed DLM to diving data, compute 95% posterior predictive intervals on held-out dives, and measure empirical coverage; coverage < 0.90 triggers the veto.

Veto scenario 3: Omit game-specific variance sigma^2_{gt} (revert to Modification 1 removal) in high-variance multi-competitor fields (biathlon relay). Prediction: interval coverage falls below nominal 0.95 (reported LMNT relay coverage is 0.998, suggesting over-dispersion is currently absorbed by sigma^2_{gt}; removing it yields under-dispersion) and posterior predictive intervals become too narrow, producing anti-conservative coverage of roughly 0.80–0.85 [PAGE 12, PAGE 50]. Verification: fit the model without game-specific effects on biathlon relay data and compute coverage of 95% intervals; observed coverage below 0.90 confirms the veto condition.
</RLVR_COUNTERFACTUAL_VETOES>