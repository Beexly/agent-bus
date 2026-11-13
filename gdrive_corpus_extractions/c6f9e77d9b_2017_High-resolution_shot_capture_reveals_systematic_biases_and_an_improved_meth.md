---
source: "2017 High-resolution shot capture reveals systematic biases and an improved method for shooter evaluation.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 10
model: baidu/ernie-5.5-flash-preview:free
words: 10130
---

<NATIVE_REASONING>
We need answer user's request. They want output using exact XML sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need >=1000 words? They say >= 1,000-WORD DEPTH across these exact XML sections. Also THINK_TRACE >=400 words. Need zero betting lines, no spreads/totals/moneylines/odds. Zero toy equations; no fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes.

Need produce analysis? The user asks via prompt. Need likely produce the structured report about the paper. Need ensure no betting lines. Need formal equations, citations from pages. Need multi-hop derivation and gray-zone audit. Need probably use source text only? Could include external knowledge? Need cite pages. Need no odds. Could discuss basketball shooting, machine learning. Need avoid toy equations like force/fatigue. Formal equations with units.

Need count words maybe >1000. Need sections exactly:
<THINK_TRACE>... (>=400 words) ...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need likely use source page quotes. Could include LaTeX equations. Need exact singularity/breakdown regimes. Need information/probability units. Need perhaps define shot entry vector, GMZ, MSE, Spearman, t-SNE? Formal equations. Need cite pages [PAGE 2], etc. Need no betting. Need mention no wagering? Not necessary. Need no spreads etc. Avoid word "totals"? Maybe not. Use "shooting percentage". No odds.

Need ensure formal LaTeX equations not fake. We can derive shooting percentage variance binomial: \hat p = K/N, Var(\hat p | p)=p(1-p)/N. Standard error. For session sizes. Use units: dimensionless probability, dimensionless ratio. Could derive expected overlap, confidence intervals.

Use shot attributes: Left-Right x_L in inches? Convert to meters? Source uses inches. We can keep units. x_L ∈ [-9,+9] inches. Depth d ∈ [0,18] inches. Angle θ degrees. Could define entry point vector relative to hoop center. Use normal approximations. Source says average NBA player standard deviation ~4 inches [PAGE 4]. Simulates distributions. Need not invent exact percentages but can use formal model.

Need equations for make probability conditional on entry coordinates. Could define P(made | x) = I_{GMZ}(x)? More precise: make indicator Y_i ∈ {0,1}; p_i = P(Y_i=1 | x_i). Entry point e_i=(L_i,D_i,A_i). For non-bank, straight shots L in (-2,2) [PAGE 5]. GMZ center. Could define optimal point μ_G. Loss = p(e*)-p(e). But source doesn't give exact p mapping. Need avoid invented. We can state as formal but unknown mapping.

Machine learning: Gradient Boosting Regression. Could define objective: minimize sum L(y_i - f(x_i)) + regularization. Loss arbitrary differentiable. But not need too detailed. MSE equation: MSE = (1/N)Σ (hat p_i - p_i^*)^2. Spearman rho formula. t-SNE probability distributions: high-dimensional Gaussian p_j|i, low-dimensional Student-t q_ij; KL divergence C = Σ_i Σ_j p_ij log(p_ij/q_ij). This is formal from Maaten & Hinton cited [PAGE 7, reference 6]. Units: probabilities, nats/bits? KL in nats if natural log, bits if log2. Need include.

Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. Basketball indoor, no weather? But user asks cross-layer veto including physical/biomechanical/weather. Need prove vetoes: physical constraints: rim dimensions, entry angle, depth bounds, no impossible entry; biomechanical hand dominance; movement/fatigue; weather? Indoor controlled, but if outdoor? Source is indoor capture. Need maybe veto environmental wind? Noahlytics sensor 13 feet above basket [PAGE 2]. Need show physical layer can veto claims: if a proposed explanation requires entry outside physical bounds or violates rim geometry, veto. Biomechanical: right corner bias due to right-handed shooters hypothesis [PAGE 4]. Weather: wind/rain not in captured data; venue HVAC may alter ball flight? Need state weather veto as low applicability but physical environmental conditions must be constant; if cross-venue data conflates humidity/air pressure? Need exact singularity/breakdown regimes: when sensor calibration fails, when ball velocity/contact singularities, when shot angle near tangent, when bank shot assumption breaks, when small sample distributions overlap, when estimator range truncated 30-90% [PAGE 10].

RLVR counterfactual vetoes: need 3 verifiable scenarios + predictions. RLVR? Could be reinforcement learning with verifiable rewards? Need create 3 counterfactual veto scenarios with predictions. Maybe: (1) If shooter moved >2 ft, model's stationary assumptions veto; predicted performance drop. (2) If shot from left/right corner with handedness not captured, left-right bias model misattributes; predicted residual. (3) If training labels truncated outside 30-90%, predicted outputs compress. Need verifiable from source.

Need ensure >=1000 words total. Let's plan.

THINK_TRACE >=400 words. Deep multi-hop derivation & gray-zone audit. Need likely around 600 words. Discuss paper's claim: high-res shot capture reveals systematic biases. Derive chain: raw percentage Bernoulli with sampling variance; 25 shots high variance; entry attributes provide latent biomechanical state; spatial rim pattern features reduce noise via informative proxy; model predicts latent ability. Cite pages. Gray zones: bank shots excluded, handedness absent, movement correlation, label range, simulation estimates approximate. Need mention no exact equation provided in source; we formalize.

SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX, units, page citations, breakdown. Need include operators: shot indicator, entry coordinates, session feature vector, make probability, sampling variance, feature vector, Spearman, MSE, t-SNE KL, GBM objective. Units. Breakdown regimes: sample size, overlap, truncation, movement threshold, bank-shot singularities. Need cite exact quotes? They said when source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need include verbatim quotes from source in sections? Probably yes. We'll quote exact short snippets. Need use page numbers. Ensure quotes match. Need maybe cite [PAGE 4] "On average, players shooting from the right corner shoot 2.34 inches left of the hoop center". Need quote. [PAGE 5] "Non-bank shots demonstrate a clear trend; shorter shots go deeper in the hoop and longer shots go shorter in the hoop." [PAGE 7] "The spatial rim pattern is defined as the following nine features: the mean for each shot attribute (Left-Right, Depth and Angle), the standard deviation for each shot attribute and spearman correlation between each pair of shot attributes." Need exact maybe lower-case spearman. [PAGE 6] "Sessions of over 1,000 shots are necessary to rank shooters reliably." [PAGE 8] "The model has half the mean squared error of raw shooting percentage". [PAGE 10] "the training data only has players with overall shooting percentages between 30% and 90%".

RETROCAUSAL_GENEALOGY: historical/scientific lineage and multi-week traps. Discuss Goldsberry 2012 [PAGE 1], 2017 paper by Marty and Lucey GMZ [PAGE 4 reference 3], t-SNE [PAGE 7], Noahlytics sensor [PAGE 2]. Multi-week traps: small-sample volatility over weeks, movement confounds, bias correction, handedness missing. Could frame as "retro-causal" as how future model can be biased by past data collection. Need no fake equations? Could include formal lineage? But this section can be prose. Need citations.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need discuss coaches/players habit regression under pressure, shot selection, fatigue? Need no toy equations. Formal maybe utility/decision with habit prior? But avoid fake ratios. Could use Bayesian decision: player chooses action a to maximize expected reward under habit distribution. Need include units? Probability. Crisis: game clock, score, shooter fatigue, movement. Counter-trap: overcorrect bias by aiming opposite, causing new error. Clock: time pressure changes release, angle, depth. Need cite source about movement and shooting percentage [PAGE 10], corner bias [PAGE 4]. Need no betting. Could include formal: habit posterior π_t, decision under clock τ. But maybe toy? It's a cognitive model, not fake physical. Need formal LaTeX maybe. But ensure not invented source? It's theory. Need state assumptions. Breakdown regimes: high fatigue, sudden-death, extreme clock. Need cite? It's conceptual.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need formal proof style. Layers: physical (ball flight, rim geometry), biomechanical (hand dominance, movement), weather/environment (air density, humidity, wind). Use vetoes: If observed effect can be explained by measurement artifact or physical constraint, model of shooting skill veto. Need equations: ball entry parabola, angle θ, effective hoop opening projection. Effective opening width W_eff = W cos? Need be careful. We can define rim radius R=9 inches? Source left-right bounds ±9 inches, depth 0-18. A ball enters plane; center crossing point. Physical constraints: entry point must satisfy -R ≤ L ≤ R, 0 ≤ D ≤ 2R if relative to front? Actually source defines leftmost -9, rightmost +9, front 0, back 18. So rim diameter 18 in. But ball radius matters; scoring aperture is smaller. Need define margin m. Physical feasible region for ball center: L ∈ [-(R-r_b), R-r_b], D ∈ [r_b, 2R-r_b] maybe if front depth 0 at rim front edge. But source attributes are crossing point of shot at hoop plane; could be outside. For make, must pass through effective opening and not contact rim? Need not overclaim. Formal: make event requires crossing point within stochastic effective aperture. Need exact singularity: if predicted bias correction requires |L|>9 or D outside [0,18], veto. Angle breakdown: if θ below minimal tangent to ball flight parabola? Source Figure 1C angle tangent to ball flight parabola [PAGE 2]. If angle <=0 or insufficient, no descent. Weather: if air density changes due to altitude/temperature, ball flight parabola changes; source not collect environmental covariates, so any cross-environment inference must be vetoed unless balanced. Need cite sensor data [PAGE 2].

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios and predictions. Need RLVR maybe reinforcement learning from verifiable rewards. Provide 3: 1 stationary-only veto: if session movement >2 ft, exclude; prediction: model ranking unreliable, MSE higher. Cite [PAGE 10]. 2 corner handedness veto: if data lacks handedness and right-corner bias > left-corner, model should not assign uniform penalty; prediction: right-corner bias larger and remains unresolved. Cite [PAGE 4]. 3 label range veto: if true ability <30% or >90%, model compresses predictions; prediction: predicted poor shooter inflated, great shooter deflated. Cite [PAGE 10]. Need maybe include RLVR reward design? Could say reward for predictions uses Spearman and MSE; counterfactual vetoes check.

Need word count. Let's draft with headings exactly. Need ensure no forbidden betting terms. Check no "odds". "up to" okay. No spreads/totals/moneylines. Avoid "market".

Need maybe include LaTeX with units. Need ensure formal equations no toy equations. We can define all variables. Need exact singularity/breakdown regimes. Use terms: singularity: R->0? For information? Could include KL divergence singular when q_ij=0; t-SNE Student-t q positive, but if permutation entropy zero. Need state breakdown: sample N=0; p=0/1 variance zero; label range truncation; bank shot boundary. Need include in SOURCE_OPERATORS_AND_EQUATIONS.

Need cite pages exactly. Could quote snippets with [PAGE N]. Need ensure quote exact. Let's copy some exact snippets:
[PAGE 1] "Using over 22 million shots captured in high-resolution by Noahlytics"
[PAGE 2] "The Noahlytics system utilizes a sensor that hangs about 13 feet above the basket"
[PAGE 2] "Left-Right is the left to right deviation of the shot at the hoop"
[PAGE 4] "On average, players shooting from the right corner shoot 2.34 inches left of the hoop center"
[PAGE 4] "An average NBA player shoots with Left-Right standard deviation of about 4 inches from the corner 3-point distance."
[PAGE 5] "Non-bank shots demonstrate a clear trend; shorter shots go deeper in the hoop and longer shots go shorter in the hoop."
[PAGE 5] "the mean Depth value decreases as shots get longer, from 10.1 inches at 15-18 feet to 7.8 inches at 27-30 feet"
[PAGE 6] "Sessions of over 1,000 shots are necessary to rank shooters reliably."
[PAGE 7] "The spatial rim pattern is defined as the following nine features: the mean for each shot attribute (Left-Right, Depth and Angle), the standard deviation for each shot attribute and spearman correlation between each pair of shot attributes."
[PAGE 8] "The model has half the mean squared error of raw shooting percentage"
[PAGE 10] "the training data only has players with overall shooting percentages between 30% and 90%"
[PAGE 10] "we excluded all sessions with an average movement of greater than two feet"

Need maybe include references to page 3 heat maps. Need exact quote: [PAGE 3] "the right side of the court has a left bias (red color) and the left side of the court has a right bias (blue color)." Could quote.

Need be careful with XML tags no Markdown? We can output XML-like tags. Inside can have LaTeX. Need not be valid XML? Use tags. Could have newlines.

Potential issue: "STRICT INVARIANTS: ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We must not mention those words. Avoid "betting". In prompt maybe not. Our output should not mention. Need not say "no betting lines".

Need ensure >=1000 words. Let's approximate. THINK_TRACE 700 words. SOURCE 600. RETRO 300. ToM 350. Veto 400. RLVR 350. Total ~2700. Good.

Need perhaps include "SI/information/probability units". Equations: Bernoulli probability dimensionless; variance p(1-p)/N dimensionless^2? Use shot counts N dimensionless; MSE in probability-squared; log loss in nats/bits; Spearman rho dimensionless in [-1,1]; KL nats/bit. Include.

Need maybe use exact page quotes in each section. Let's structure.

THINK_TRACE: Multi-hop derivation:
1) Observation: raw shooting percentage unstable. Source quote [PAGE 1] "players are often evaluated on a limited number of shots..." Actually exact: "players are often evaluated on a limited number of shots, exposing assessment to high variation" yes.
2) Formalize as Bernoulli. With N=25, SE max sqrt(.25/25)=0.1, 10 percentage points. This explains overlap. Source [PAGE 6] overlap high.
3) Entry attributes provide mechanistic covariates. Quote [PAGE 2]. High-res shot data reveals why. [PAGE 1] "how the ball approaches and interacts with the hoop."
4) Systematic biases: right corner -2.34 in, left +1.05 in; depth shorter for longer shots. [PAGE 4,5]. If shooting probability sensitive to distance from optimal GMZ, bias reduces make probability. Formalize p(e) with loss.
5) Features: mean, SD, Spearman correlations [PAGE 7]. These augment raw percentage. Model: Gradient Boosting Regression [PAGE 7]. Test: half MSE [PAGE 8].
6) Gray zones: bank shots excluded [PAGE 5], handedness missing [PAGE 4], movement confound [PAGE 10], label range [PAGE 10], simulations depend on assumed SD [PAGE 4]. Need no overclaim.
Need >=400 words. We'll make 700.

SOURCE_OPERATORS_AND_EQUATIONS: Need list.

Let's design equations:
Define shot i in session s. Y_{is} ∈ {0,1}; N_s session size; p_true = E[Y]. Observed \hat p_s = (1/N_s) Σ Y_{is}. Variance Var(\hat p_s | p_true) = p_true(1-p_true)/N_s. Units: dimensionless; variance dimensionless^2. For N=25 max variance 0.01, SD 0.1. Cite [PAGE 6].
Entry point e_i = (L_i, D_i, θ_i). L in inches [-9,9], D in inches [0,18], θ degrees. Source [PAGE 2]. Define center c = (0, d_G). GMZ center d_G approx? Source says center shifts 11.5 to 10.5 [PAGE 5]. But not fixed. Use d_G(s). Bias b_s = E[D|s]-d_G(s). Source says shorter than GMZ. Could define squared depth error ΔD = d_G - D. If make function monotonic near center, gradient ∂p/∂D negative? Actually deeper vs shorter. We can write first-order loss: L_depth ≈ -∇p·b? Need formal: p(D) near optimum D*, Taylor p(D) ≈ p(D*) - (1/2) κ (D-D*)^2 if optimum. Bias causes expected loss 1/2 κ Var? But maybe toy? It's generic. Could use without exact κ. But formal. Units: p dimensionless, κ probability per inch^2. Need state κ not identified in source; simulation uses empirical distributions. Source says "We used an NBA player with standard Depth variation to estimate the percentage loss" [PAGE 5]. Need not invent. We can write generic.
Left-right: L_i; mean μ_L. If optimum L*=0, loss approx 1/2 α μ_L^2 + 1/2 α σ_L^2? If variance matters. Source says excellent shooters average 0 with minimal variation [PAGE 3]. Need formalize: expected radial error E[(L-L*)^2] = (μ_L-L*)^2 + σ_L^2. This is not toy; moment decomposition. Units inches^2. If make declines with squared error, loss monotone in this. Need cite [PAGE 3,4].
Bank shots: D distribution extends beyond rim because trajectory would pass if backboard removed [PAGE 5]. Operator B_i ∈ {0,1}; analyze non-bank. Singularity: bank region invalidates simple depth metric because D > 18? Need quote.
Spatial rim pattern vector z_s = [mean_L, mean_D, mean_θ, sd_L, sd_D, sd_θ, ρ_{LD}, ρ_{Lθ}, ρ_{Dθ}] [PAGE 7]. Spearman ρ between attributes. Each ρ dimensionless. Feature dimension d=9 plus raw p =10. t-SNE: high-dimensional similarities p_{j|i} = exp(-||z_i-z_j||^2/(2σ_i^2))/Σ...; low-dimensional q_{ij} = (1+||y_i-y_j||^2)^-1 / Σ...; minimize C=Σ_i Σ_j p_{ij} log(p_{ij}/q_{ij}), nats/bits. Need cite [PAGE 7]. Breakdown: if z_i identical, σ_i ->0, p_{i|i} excluded; perplexity zero; q singular if underflow.
GBM: F_m(z) = F_{m-1}(z) + ν Σ_t h_t(z), loss Ψ maybe MSE; Ψ = (y - F)^2. MSE = (1/N_test) Σ (F(z_i)-p_i^*)^2. Source says half MSE [PAGE 8]. Spearman rho: ρ_s = 1 - 6 Σ d_i^2/(n(n^2-1)) for no ties? Or Pearson corr of ranks. Units dimensionless. Source says increased correlation [PAGE 8].
Movement: m_{is} = (1/(N_s-1)) Σ ||x_{i+1}-x_i||, feet; exclude if m > 2 ft [PAGE 10]. Correlation ρ_m,p negative. Need formal.
Singularity/breakdown regimes: N_s=0; p=0 or 1 variance zero; label truncation [30%,90%]; movement >2 ft; bank shots; sensor calibration; left-right outside [-9,9] or depth outside [0,18] physical. Need include.

RETROCAUSAL_GENEALOGY: Need mention line. Could discuss "retro-causal" as evaluation now influenced by past data availability. Multi-week traps: low sample sessions, fatigue? Need maybe include "multi-week" explicit: over multiple weeks, raw percentages can invert; model may regress to mean due to training range; movement confound changes across weeks. Need cite [PAGE 10] players tracked 10 months? Actually [PAGE 6] "tracked these players over 10 months." Use. Need maybe mention Goldsberry and 2017 GMZ. Need no equations? Could include small formal: historical data operator H_t. But not necessary. Need exact quotes. Let's include [PAGE 1] Goldsberry, [PAGE 4] last year's GMZ, [PAGE 6] tracked 10 months, [PAGE 10] movement.

RECURSIVE_THEORY_OF_MIND: Need formal habit. Could define at time t, coach/player has belief B_t over shooter state s_t; chooses intervention a_t to maximize expected long-run make probability. Under crisis, prior habit H and clock τ. Habit regression: under uncertainty, player reverts to dominant motor pattern (e.g., right corner bias). Counter-trap: overcorrection to left creates new left-right bias; optimal correction is stochastic center-seeking. Clock: reduced time increases variance of release, depth/angle. Need equations: P(made | state, action, clock) = p_t. habit prior π(a|s) = softmax(-β C(a) + γ H(a)). But is this toy? It's decision theory. Need state assumptions. Could avoid fake. But user requested crisis habit regression vs counter-trap vs clock. We can formalize as Bayesian posterior: θ_t | data, habit. Decision rule: choose action minimizing expected depth/lateral error plus clock penalty. Need units. Maybe define expected error E[(L_t-L*)^2 + λ (D_t-D*)^2], λ dimensionless. Clock τ reduces calibration: Var(L_t|τ) = σ_L^2 f(τ), f increasing as τ→0. Need state f not identified. Breakdown: τ near shot clock, fatigue high, no time for calibration. Need cite movement [PAGE 10] and corner bias [PAGE 4]. Also source doesn't discuss psychology, so mark as theoretical extension. Need no page citation? It's not source; but okay. Need not invent source claims.

CROSS_LAYER_VETO_ADJUDICATION: Formal proof. Layers:
Physical: crossing point must satisfy constraints. Rim radius R = 9 in [PAGE 2]. Ball radius r_b; effective feasible crossing region for center: L ∈ [-(R-r_b), R-r_b], D ∈ [r_b, 2R-r_b] if no rim contact; but scoring can occur with contact, so physical make region is stochastic. However any proposed correction that requires mean outside bounds is vetoed. Quote [PAGE 2] Left-Right values -9,+9; Depth 0,18. Angle θ must be positive descending tangent. Figure 1 C tangent to ball flight parabola [PAGE 2]. If θ <= minimal θ_min for ball to descend through plane, no make. Breakdown: θ too flat; ball crosses plane before apex? Need not exact.
Biomechanical: right corner bias hypothesis due to right-handed shooters [PAGE 4]. Veto: if handedness not measured, cannot assign causal mechanism; model may confound hand dominance with side. Formal: observed bias b_R ≠ b_L; latent H ∈ {R,L}; E[b_side | H] = β_h; without H, estimator β̂ has omitted-variable bias. Need maybe cite [PAGE 4] "Noahlytics system does not currently collect data on the handedness". Quote exact? Source: "While the Noahlytics system does not currently collect data on the handedness of the shooters, we hypothesize this difference is due to a much higher percentage of right-handed shooters." [PAGE 4]. Good.
Weather/environment: source sensor indoor? "sensor hangs about 13 feet above the basket" [PAGE 2]. It doesn't mention weather. Need prove: environmental wind/air density can alter ball trajectory and angle; if not recorded, cross-venue comparisons invalid. Need formalize: ball flight parabola y(x; ρ_air, v0, θ). Air drag depends on density ρ_air (kg/m^3). If ρ_air changes, mapping release to entry changes. Veto any inference treating entry bias as purely shooter skill when venue conditions vary. Breakdown: outdoor wind, HVAC, altitude. But source likely indoor; still cross-layer veto. Need maybe state weather is not observed and must be controlled. Need cite no weather data? Source doesn't say. We can say source provides no weather covariate; absence means cannot adjudicate. But avoid claiming if not in text? It is true source text doesn't mention weather. Could say "No weather covariate appears in the provided text". Need exact? Not quote. But okay.
Proof style: If effect size is smaller than physical measurement resolution or explained by ball radius, veto. Noahlytics high-resolution but sensor 13 ft above basket [PAGE 2], calibration. Need exact singularity: sensor line-of-sight occlusions? Breakdown.

RLVR_COUNTERFACTUAL_VETOES: Need 3 verifiable scenarios + predictions. Could define RLVR reward: reward model for shooter ranking based on gold standard cumulative percentage. Counterfactual veto checks before deploying model. Need maybe "RLVR" not defined in source; we can define as reward model with verifiable labels. Need avoid betting. Use "reward" okay.

Scenario 1: Movement contamination. Counterfactual: player session has average movement >2 ft. Source excluded [PAGE 10]. Prediction: if included, negative movement-make correlation contaminates spatial features; MSE increases and Spearman rho decreases. Verifiable by comparing models with/without movement threshold.

Scenario 2: Right/left corner asymmetry without handedness. Counterfactual: model trained with handedness covariate vs without. Source lacks handedness [PAGE 4]. Prediction: without handedness, right-corner bias remains attributed to side not hand dominance; if handedness added, residual side bias decreases but not necessarily vanish. Verifiable by residual analysis.

Scenario 3: Range truncation. Counterfactual: include players with true overall shooting percentage outside 30-90%. Source says model only trained 30-90 and predicts within [PAGE 10]. Prediction: for true <30, predicted > true; for true >90, predicted < true; calibration slope <1. Verifiable by calibration plot.

Need perhaps include RLVR reward equations: R = -MSE - λ(1-ρ_s) etc. But no toy? Could be formal. But maybe not needed.

Need overall final. Need ensure no forbidden words. Check for "odds" accidentally? Avoid. "up to" okay. "market" no. "spread" no. "total" maybe avoid? The word "total" could be considered betting line? Invariant says never mention spreads, totals, moneylines, or odds. It might mean don't mention betting lines, not word "total". But to be safe avoid word "total" maybe use "aggregate" or "overall". Avoid "line"? Could use "betting"? no. "spread" no. "money" no. "odds" no. "totals" no.

Need ensure exact XML section names. Could include line breaks. Need maybe no extra top-level text outside sections? User says across these exact XML sections. We can output only those sections. Good.

Need count words. Let's draft. Need be detailed.

Potential issue with LaTeX in XML: okay. Need no fake ratios like Force/Fatigue. Avoid force/fatigue ratio. Could mention fatigue qualitatively but no ratio. The ToM asks crisis habit regression vs counter-trap vs clock. Could mention fatigue but no fake equation. Use variance increase.

Let's compose carefully.

Need ensure THINK_TRACE >=400 words. Let's count roughly. We can write long. Use citations.

THINK_TRACE draft:
"The paper’s core inferential move is to replace a noisy Bernoulli outcome..." etc. Need maybe 750 words. Let's produce.

Need source operators equations with exact quotes. Include many equations.

Let's draft in final. Need check for forbidden words. Use search mental: no "bet", "spread", "total", "money", "odds". Could accidentally write "aggregate total". Avoid. Use "overall".

Let's write.

Potential issue: "RLVR" maybe reinforcement learning verifiable rewards. Need include. Good.

Need exact singularity/breakdown regimes. We'll have bullet list in SOURCE_OPERATORS. Need include assumptions.

Let's formulate equations:
1. Outcome: Y_i ∈ {0,1}. p = P(Y=1). \hat p_N = K/N.
Var = p(1-p)/N. For N=25 max 0.01. cite [PAGE 6].
2. Entry point: e=(L,D,θ), L∈[-9,9] in, D∈[0,18] in, θ in degrees. cite [PAGE 2].
3. Session raw percentage: \hat p_s.
4. Lateral moment: E[L] = μ_L, Var(L)=σ_L^2, expected squared error E[(L-L*)^2]=(μ_L-L*)^2+σ_L^2. Units in². Source right corner μ_L=-2.34 in, left +1.05 in, σ_L≈4 in [PAGE 4]. If L*=0.
5. Depth bias: b_D(s)=E[D|s]-d_G(s). Source mean depth 10.1 at 15-18 ft to 7.8 at 27-30 ft, GMZ center 11.5 to 10.5 [PAGE 5]. Thus negative bias. Use Taylor: Δp ≈ -(1/2)κ_D b_D² - ...? Actually if optimum, first-order zero. Need state κ_D = -∂²p/∂D² at optimum ≥0. Units probability/in². If source doesn't identify κ, not used numerically.
6. Bank shot operator B_i; exclude. Source quote.
7. Spatial rim pattern vector z_s. Eq. Spearman rho. t-SNE. GBM.
8. MSE, Spearman.
9. Movement.
Breakdown: N=0, p at boundaries, bank, movement, label range, physical bounds, sensor. Need exact singular: t-SNE q if normalization zero; Spearman ties; GBM extrapolation.

Need maybe include information units: t-SNE objective in nats/bits. State natural logs -> nats; log2 -> bits.

RETROCAUSAL_GENEALOGY: Use maybe "retro-causal genealogy" as lineage that causes present evaluation. Need multi-week traps. Could include "week 1 small sample; week 4 regression; week 6 movement; week 10 label truncation". Need no fake. Use formal? maybe not.

RECURSIVE_THEORY_OF_MIND: Need maybe equations:
Let θ_t be latent shooter control state; y_t observed entry error. Coach/player inference: P(θ_t | y_{1:t}, H, τ). Habit prior H. Under crisis, posterior variance increases: Var(θ_t | ·) = σ^2 f(τ), f increasing as τ→0. Decision a_t minimizes E[ E[(L-L*)^2 + λ(D-D*)^2] | θ, τ] + c(a). Counter-trap: correction c opposite sign overshoots if prior variance high. Need state λ dimensionless weight. Need not be toy? It's decision theory. Fine.
Cite source: movement and shooting percentage [PAGE 10], corner biases [PAGE 4]. Mention crisis habit regression: players revert to dominant side under uncertainty, e.g., right corner left bias. Counter-trap: aiming to right of center may produce overcorrection. Clock: time pressure increases variance; source does not directly measure clock but movement proxy. Need gray-zone: clock not in source, theoretical.

CROSS_LAYER_VETO_ADJUDICATION: Need proof. Could structure:
Claim: a proposed shooter-quality effect is admissible only if passes physical, biomechanical, weather vetoes.
Physical proof:
- Rim geometry: L bounds, D bounds. If correction demands L outside [-9,9] or D outside [0,18], reject. Source quotes.
- Effective opening: ball radius r, physical crossing interval shrinks; if bias shift > margin, physically impossible to recover without changing release. Need equation: feasible half-width a = max(0, R - r - c), where c clearance. If target shift |μ| > a, correction not within deterministic make region. But scoring stochastic, so veto only for impossible.
- Angle: θ must be tangent to descending parabola [PAGE 2]. If θ≤θ_min, no valid entry.
Biomechanical:
- Handedness latent: b_R vs b_L; omitted variable. Formal: observed E[L|side] = α + β hand + γ side + ε. Without hand, β confounded. Source quote. Veto causal claims.
- Movement: if movement >2 ft, shot type changes; source excludes. Veto pooling.
Weather:
- Air density ρ (kg/m³), drag. Ball flight depends. If environmental covariate absent, cannot separate shooter bias from environmental effect. Veto cross-environment comparisons. Source sensor indoors? Not specified; we can say provided source does not report environmental covariates. Breakdown: wind speed v_wind, turbulence, temperature. Need exact singularity: if wind force comparable to gravity? But avoid force ratio? Could state if external acceleration a_env not negligible relative to g=9.81 m/s²; but that's ratio? It's physical, not toy. But invariant zero toy equations; physical ratio okay? It says never invent fake ratios (Force / Fatigue). We can use physical acceleration relative to g if formal. But maybe avoid ratio? Could say if a_env enters equations of motion and is not measured, mapping from release to entry is underdetermined. No ratio. Good.

Need RLVR scenarios. Use equations maybe reward. Need predictions.

Need final word count. Let's produce final with long content. Ensure no banned words. Check "total" maybe not. In equations "Σ" okay. Use "overall" not total.

Let's draft final. Need maybe use <THINK_TRACE> exactly. No extra. Ensure sections closed.

Double-check no "odds" in "odds and ends" no. no "spread" in "spatial" no. no "totals". no "moneylines".

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central inferential move is to replace a noisy Bernoulli outcome—“shot made” versus “shot missed”—with a higher-dimensional representation of how the ball crosses the hoop plane. That move matters because the source explicitly warns that player evaluation often relies on a limited shot count: “players are often evaluated on a limited number of shots, exposing assessment to high variation and inaccurate, anecdotal conclusions” [PAGE 1]. Formally, if a shooter has true make probability \(p\) and takes \(N\) shots, the observed session percentage \(\hat p = K/N\) has conditional variance \(p(1-p)/N\). This is not a heuristic; it is the basic binomial sampling law. For \(N=25\), the variance is maximized near \(p=0.5\), giving \(\mathrm{Var}(\hat p)=0.01\) and a standard deviation of about \(0.10\), or ten percentage points. That single calculation explains why the authors observe heavy overlap among shooters in 25-shot sessions and why they state, “Sessions of over 1,000 shots are necessary to rank shooters reliably” [PAGE 6]. The derivation chain is therefore: small sample size causes large sampling variance; large sampling variance causes session-to-session overlap; overlap degrades rank inference; high-resolution rim-entry attributes add mechanistic information that is not present in the binary outcome alone.

The second derivation hop is to treat the hoop-plane crossing as a spatial measurement. The source defines three entry attributes: Left-Right, Depth, and Angle. “Left-Right is the left to right deviation of the shot at the hoop” [PAGE 2]; “Depth is the entry depth of the shot into the hoop” [PAGE 2]; and “Angle is the entry angle of the shot into the hoop” [PAGE 2]. These variables convert an abstract “shot quality” into observable physical coordinates. Left-Right is bounded in the source by the hoop edges: \(-9\) inches for the leftmost part, \(0\) inches for a straight shot, and \(+9\) inches for the rightmost part [PAGE 2]. Depth is bounded from \(0\) inches at the front to \(18\) inches at the back [PAGE 2]. Angle is measured in degrees, with examples of \(36^\circ\) for a flatter shot and \(55^\circ\) for a higher-arcing shot [PAGE 2]. Once entry is spatial, miss patterns can be audited as systematic error vectors rather than as anonymous failures.

The third hop is the discovery of population-level spatial bias. The authors find that, ignoring bank-shot regions, “the right side of the court has a left bias (red color) and the left side of the court has a right bias (blue color)” [PAGE 3]. They then quantify this for corner three-point shots: “On average, players shooting from the right corner shoot 2.34 inches left of the hoop center” and “On average, players shooting from the left corner shoot 1.05 inches right of the hoop center” [PAGE 4]. They also report that “An average NBA player shoots with Left-Right standard deviation of about 4 inches from the corner 3-point distance” [PAGE 4]. If the optimal lateral target is the hoop center, then a nonzero mean lateral error plus a nonzero variance both degrade expected make probability. The paper’s simulation logic is therefore consistent: suboptimal mean placement and excessive shot-to-shot dispersion both reduce scoring chances.

The fourth hop is the depth bias. The source states, “Non-bank shots demonstrate a clear trend; shorter shots go deeper in the hoop and longer shots go shorter in the hoop” [PAGE 5]. It then gives a quantitative drift: “the mean Depth value decreases as shots get longer, from 10.1 inches at 15-18 feet to 7.8 inches at 27-30 feet,” while the center of the Guaranteed Make Zone shifts less, “from 11.5 inches at 15-18 feet to 10.5 inches at 27-30 feet” [PAGE 5]. This implies a systematic shortfall relative to the optimal depth center. The authors’ interpretation is that longer shots land too short, and that correcting this shortfall can recover shooting percentage. The formal version is a Taylor expansion around an optimal depth point: if make probability is locally concave around the optimal depth, a negative bias in depth produces an expected loss even if the shooter’s variance is unchanged. The source does not identify the curvature constant, but the sign and direction of the bias are explicit.

The fifth hop is the transition from population diagnosis to shooter ranking. The authors construct a nine-dimensional “spatial rim pattern” feature set: “the mean for each shot attribute (Left-Right, Depth and Angle), the standard deviation for each shot attribute and spearman correlation between each pair of shot attributes” [PAGE 7]. These features are then combined with raw shooting percentage into a ten-dimensional prediction model. The model uses Gradient Boosting Regression, which the authors choose to “allow for the optimization of arbitrary differentiable loss functions” [PAGE 7]. The evaluation is comparative: against the gold standard of each player’s cumulative percentage from many shots, the ten-dimensional model “has half the mean squared error of raw shooting percentage” [PAGE 8] and improves rank correlation. The key gray zone is that the model does not directly measure true latent skill; it estimates a mapping from session features to a long-run percentage label. Therefore its validity depends on stationary conditions, representative training data, and absence of unmodeled confounds.

The gray-zone audit identifies several boundaries that must be respected. First, bank shots are not analyzed by the same depth logic because they follow a trajectory that would pass beyond the rim if the backboard were absent; the authors say, “Bank shots are shot on a trajectory that would proceed past the rim if the backboard were removed” [PAGE 5]. Second, handedness is not measured, yet the authors hypothesize that the stronger right-corner bias is due to a higher share of right-handed shooters [PAGE 4]. This is a latent-variable caution: the system records side, but not hand dominance. Third, movement is a confound. The appendix notes a “striking correlation between shooter movement during a session and shooting percentage” and says, “we excluded all sessions with an average movement of greater than two feet” [PAGE 10]. Fourth, the model’s output is bounded by training labels: “the training data only has players with overall shooting percentages between 30% and 90%; thus, the ten-dimension prediction model will only predict between those values” [PAGE 10]. These gray zones do not invalidate the paper, but they define the exact regimes where its operators are valid, where they break down, and where additional vetoes are required.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a shot be indexed by \(i\), and let its binary outcome be
\[
Y_i \in \{0,1\},
\]
where \(Y_i=1\) denotes a made shot. The true make probability for a shooter in a specified shot class is
\[
p = \Pr(Y_i=1).
\]
For a session of \(N\) shots, the observed shooting percentage is
\[
\hat p_N = \frac{1}{N}\sum_{i=1}^{N} Y_i.
\]
Under independent and identically distributed shots with fixed \(p\),
\[
\mathbb{E}[\hat p_N \mid p] = p,
\]
and
\[
\mathrm{Var}(\hat p_N \mid p) = \frac{p(1-p)}{N}.
\]
The variance has units of probability squared, because \(\hat p_N\) is dimensionless. The maximum sampling variance occurs at \(p=0.5\), giving
\[
\mathrm{Var}_{\max}(\hat p_N) = \frac{0.25}{N}.
\]
For \(N=25\), this yields \(\mathrm{Var}=0.01\) and standard deviation \(0.10\), which explains the high overlap described by the source: “When only 25-shot sessions are considered, the overlap between shooters is very high” [PAGE 6]. The source also states, “Sessions of over 1,000 shots are necessary to rank shooters reliably” [PAGE 6].

Each shot has a high-resolution entry vector at the plane of the hoop:
\[
\mathbf{e}_i = (L_i, D_i, \theta_i),
\]
where \(L_i\) is the Left-Right attribute in inches, \(D_i\) is the Depth attribute in inches, and \(\theta_i\) is the entry Angle in degrees. The source defines these bounds:
\[
L_i \in [-9,+9] \text{ inches},
\]
\[
D_i \in [0,18] \text{ inches},
\]
\[
\theta_i \in [\text{flat}, \text{high arc}] \text{ degrees},
\]
with examples of \(36^\circ\) and \(55^\circ\) [PAGE 2]. The coordinate system is shooter-centered: “the point on the hoop closest to the shooter is always defined as the front of the hoop” [PAGE 2].

For a session \(s\), let \(\mu_L(s)\) be the mean Left-Right value and \(\sigma_L^2(s)\) its variance. If the optimal lateral target is the hoop center, \(L^\ast=0\), then the mean squared lateral error is
\[
\mathbb{E}\left[(L_i-L^\ast)^2\right]
=
\left(\mu_L(s)-L^\ast\right)^2 + \sigma_L^2(s).
\]
The first term is bias squared, with units \(\text{inches}^2\); the second term is dispersion, also in \(\text{inches}^2\). The source reports that the right corner has mean lateral error \(-2.34\) inches and the left corner \(+1.05\) inches, while “An average NBA player shoots with Left-Right standard deviation of about 4 inches from the corner 3-point distance” [PAGE 4]. If make probability declines with squared lateral error near the optimal center, both the mean error and the variance are score-relevant.

For depth, define the optimal or Guaranteed Make Zone center as \(d_G(s)\). The depth bias is
\[
b_D(s) = \mathbb{E}[D_i \mid s] - d_G(s).
\]
The source reports that mean depth decreases with distance, from \(10.1\) inches at 15–18 feet to \(7.8\) inches at 27–30 feet, while the GMZ center shifts from \(11.5\) inches to \(10.5\) inches [PAGE 5]. Thus \(b_D(s)<0\) for longer shots, meaning shots land shorter than the GMZ center. If make probability near the optimal depth is approximated by a concave function \(p(D)\), then a Taylor expansion around \(d_G\) gives
\[
p(D) \approx p(d_G) - \frac{1}{2}\kappa_D (D-d_G)^2,
\]
where \(\kappa_D \ge 0\) is the local curvature of make probability with respect to depth, with units of probability per \(\text{inch}^2\). The expected loss due to depth bias is then approximately
\[
\Delta p_D(s) \approx \frac{1}{2}\kappa_D\left[b_D(s)^2 + \sigma_D^2(s)\right].
\]
The source does not estimate \(\kappa_D\) directly, but it does use empirical depth distributions to estimate percentage loss, stating that simulations showed about a \(1.5\%\) decrease for the typical NBA three-point shot of 24–27 feet and an even larger \(2.9\%\) decrease for longer 27–30 foot attempts [PAGE 5].

Bank shots require a separate operator. Let
\[
B_i \in \{0,1\}
\]
indicate whether shot \(i\) is a bank shot. The source explains that bank shots follow a trajectory that would go past the rim if the backboard were removed, so they “appear to be on a trajectory that goes well past the hoop” [PAGE 5]. For the non-bank depth analysis, the valid domain is
\[
B_i = 0,
\]
and additionally the source restricts cleaner depth analysis to shots satisfying
\[
-2 < L_i < 2
\]
when assessing depth distributions [PAGE 5].

The spatial rim pattern feature vector for session \(s\) is the nine-dimensional object
\[
\mathbf{z}_s =
\left(
\bar L_s,\,
\bar D_s,\,
\bar\theta_s,\,
\sigma_{L,s},\,
\sigma_{D,s},\,
\sigma_{\theta,s},\,
\rho_{LD,s},\,
\rho_{L\theta,s},\,
\rho_{D\theta,s}
\right),
\]
where bars denote session means, \(\sigma\) terms denote standard deviations, and \(\rho\) terms denote Spearman correlations between pairs of shot attributes. This matches the source: “the mean for each shot attribute (Left-Right, Depth and Angle), the standard deviation for each shot attribute and spearman correlation between each pair of shot attributes” [PAGE 7]. Each mean retains the units of its underlying attribute: inches for \(L\) and \(D\), degrees for \(\theta\). Each standard deviation also has those units. Each Spearman correlation is dimensionless and lies in \([-1,1]\).

When combined with raw session shooting percentage, the full model input is
\[
\mathbf{x}_s = \left(\hat p_s, \mathbf{z}_s\right) \in \mathbb{R}^{10}.
\]
The label is the player’s long-run stationary shooting percentage in the specified distance range:
\[
y_s = p_{\text{overall}}.
\]
The model is trained by Gradient Boosting Regression. In generic functional form,
\[
F_m(\mathbf{x}) = F_{m-1}(\mathbf{x}) + \nu \sum_{t=1}^{T_m} h_t(\mathbf{x}),
\]
where \(\nu\) is a learning rate, \(h_t\) are weak learners, and the loss \(\Psi\) is differentiable. If the loss is squared error,
\[
\Psi(y, F(\mathbf{x})) = \frac{1}{2}\left(y - F(\mathbf{x})\right)^2.
\]
The test-set mean squared error is
\[
\mathrm{MSE}
=
\frac{1}{N_{\text{test}}}
\sum_{s=1}^{N_{\text{test}}}
\left(
\hat y_s - y_s
\right)^2,
\]
with units of probability squared. The source reports that the ten-dimensional model “has half the mean squared error of raw shooting percentage” [PAGE 8].

The rank metric is Spearman’s rho. For ranks \(R(\hat y_s)\) and \(R(y_s)\),
\[
\rho_{\text{Spearman}}
=
\frac{
\mathrm{Cov}\left(R(\hat y_s), R(y_s)\right)
}{
\sigma_{R(\hat y_s)}\sigma_{R(y_s)}
}.
\]
This is dimensionless. The source states that Spearman correlation increased when moving from raw shooting percentage to the ten-dimensional model [PAGE 8].

The unsupervised visualization uses t-distributed stochastic neighbor embedding. In high-dimensional space, conditional similarities are
\[
p_{j\mid i}
=
\frac{
\exp\left(-\|\mathbf{z}_i-\mathbf{z}_j\|^2 / 2\sigma_i^2\right)
}{
\sum_{k\neq i}\exp\left(-\|\mathbf{z}_i-\mathbf{z}_k\|^2 / 2\sigma_i^2\right)
}.
\]
In two-dimensional embedding space, joint similarities use a Student-\(t\) kernel:
\[
q_{ij}
=
\frac{
\left(1+\|\mathbf{y}_i-\mathbf{y}_j\|^2\right)^{-1}
}{
\sum_{k\neq l}\left(1+\|\mathbf{y}_k-\mathbf{y}_l\|^2\right)^{-1}
}.
\]
The objective is the Kullback–Leibler divergence
\[
C = \sum_i \sum_j p_{ij}\log\frac{p_{ij}}{q_{ij}},
\]
where \(p_{ij}\) and \(q_{ij}\) are probability distributions. If natural logarithms are used, \(C\) is measured in nats; if base-2 logarithms are used, \(C\) is measured in bits. The source uses t-SNE to show that 25-shot sessions cluster by player without player labels: “this unsupervised approach clusters the sessions by players without having any prior knowledge about the player” [PAGE 7].

The appendix introduces a movement operator. For session \(s\), movement is
\[
m_s = \frac{1}{N_s-1}\sum_{i=1}^{N_s-1}\| \mathbf{x}_{i+1}-\mathbf{x}_i \|,
\]
where \(\mathbf{x}_i\) is the court location of shot \(i\), and \(m_s\) has units of distance, here feet. The appendix states that the majority of players show a significant negative Spearman correlation between movement and shooting percentage, and therefore “we excluded all sessions with an average movement of greater than two feet” [PAGE 10]. The valid stationary domain for the ranking model is therefore
\[
m_s \le 2 \text{ feet}.
\]

Exact breakdown and singularity regimes are as follows. First, if \(N_s=0\), \(\hat p_s\) is undefined. Second, if \(p=0\) or \(p=1\), the binomial variance collapses to zero, and no sampling overlap remains, but real shooters rarely have exact boundary probabilities. Third, if a proposed correction requires \(L\) outside \([-9,+9]\) inches or \(D\) outside \([0,18]\) inches, the correction violates the stated rim geometry [PAGE 2]. Fourth, if bank shots are pooled with non-bank shots without separating \(B_i\), the depth operator breaks because bank-shot trajectories are defined by backboard interaction, not by direct rim entry [PAGE 5]. Fifth, if session movement exceeds two feet, the stationary assumption breaks and the model’s feature distribution changes [PAGE 10]. Sixth, if the true player percentage lies outside the training label range, the model extrapolates poorly; the source explicitly says the training data contains players with overall percentages between \(30\%\) and \(90\%\), so predictions are confined to that interval [PAGE 10]. Seventh, if t-SNE perplexity or bandwidth \(\sigma_i\) becomes degenerate, the high-dimensional similarity distribution can become undefined or numerically singular. Eighth, if Spearman ties dominate, rank correlation becomes unstable or undefined without tie correction.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is explicitly spatial and technological. It begins with Kirk Goldsberry’s shot-chart revolution, which the authors describe as introducing “a spatial component to shooting percentage” and changing “the way the NBA evaluates shooters” [PAGE 1]. That lineage matters because earlier evaluation was constrained to location-level frequency: a player made or missed from a zone, but the mechanism of the miss was invisible. The current paper extends that lineage by adding rim-entry microgeometry. Instead of asking only where a shot originated, it asks how the ball crossed the hoop. The source states this directly: “high-resolution shot data allows the exploration of not only shot position on the court, but also how the ball approaches and interacts with the hoop” [PAGE 1].

A second genealogical strand is the Guaranteed Make Zone. The authors say, “Last year, we reported that 3-point shots are most likely to score when shot at the center of the Guaranteed Make Zone (GMZ), the region of the hoop where a shot is guaranteed to score” [PAGE 4]. This creates a retro-causal dependency: the present model inherits the assumption that there is a high-make region inside the rim, and that systematic deviations from its center reduce shooting percentage. That assumption is not arbitrary; it is grounded in the physical fact that the rim has finite size. However, it also creates a multi-week evaluation trap. If a player’s depth bias is corrected in one training block, but the GMZ estimate is based on a population that includes different movement states, shot distances, or bank-shot proportions, the correction may be misestimated. The source’s own separation of bank shots and distance bands is therefore a safeguard against genealogical contamination.

A third strand is the Noahl动ics sensing system. The sensor “hangs about 13 feet above the basket, capturing all shots taken,” and determines location, make/miss status, and shot entry attributes [PAGE 2]. This creates a causal genealogy of measurement: the model can only reason about phenomena that the sensor observes. It observes entry location and angle, but not handedness, fatigue state, defensive pressure, or environmental covariates. The authors acknowledge this missing handedness variable: “the Noahlytics system does not currently collect data on the handedness of the shooters,” while hypothesizing that the stronger right-corner bias is due to a higher percentage of right-handed shooters [PAGE 4]. This is a retro-causal warning: future rankings can be distorted if the current model treats side bias as pure shooting skill without separating latent hand dominance.

The multi-week trap is especially important because the source tracks players over extended periods. It says, “We tracked these players over 10 months” [PAGE 6]. Over such a horizon, raw percentages can fluctuate, movement patterns can change, and small-sample sessions can mislead. The paper’s own solution is to use large-sample labels and spatial rim patterns, but those solutions still inherit historical confounds. For example, if a player’s sessions over several weeks include different movement levels, the model may mistake movement-induced shooting degradation for low skill. The appendix addresses this by excluding sessions with average movement greater than two feet [PAGE 10]. That is a genealogical correction: it removes a known confounder before ranking.

Another retro-causal trap is estimator range truncation. The model’s predictions are bounded by the observed training labels. The appendix states that the training data only includes players with overall shooting percentages between \(30\%\) and \(90\%\), and that the model will only predict within those values [PAGE 10]. This creates a multi-week ranking distortion: a genuinely poor shooter below \(30\%\) may be inflated upward, while a genuinely elite shooter above \(90\%\) may be compressed downward. The source acknowledges this bias and notes that it inflates mean squared error but does not necessarily destroy rank ordering: “This bias inflates the loss in mean squared error, but it does not impact the Spearman rank test” [PAGE 8]. Still, for player development over weeks, this compression can create false improvement signals if the true ability lies near or beyond the training boundary.

Finally, the genealogy of the nine-feature rim pattern is tied to the limitation of raw percentage. The authors say raw percentage gives “only one dimension of measurement,” while the rim pattern adds “an additional nine dimensions” [PAGE 7]. This is a genealogical expansion from outcome-only evaluation to process-based evaluation. The retro-causal implication is that once a coach or analyst adopts rim-pattern features, the definition of shooter quality changes. Past players evaluated only by raw percentage are not directly comparable to future players evaluated by spatial rim patterns. The source’s recommended path is therefore not merely statistical; it is institutional: “We conclude by encouraging coaches and players to re-evaluate their largely anecdotal assessment methods” [PAGE 1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory of shooter evaluation must model not only the ball, but also the beliefs of players, coaches, and analysts about the shooter’s state. The source gives empirical hooks for this. First, it documents systematic side bias: on the right side of the court players tend to shoot left of center, and on the left side they tend to shoot right of center [PAGE 3]. Second, it reports larger right-corner bias than left-corner bias and hypothesizes handedness as the cause [PAGE 4]. Third, it shows that movement strongly correlates with shooting percentage, enough that sessions with average movement above two feet are excluded [PAGE 10]. These facts imply that shooter behavior is not stationary; it depends on motor habit, fatigue proxy, movement state, and situational pressure.

Let \(\theta_t\) denote the latent shooter-control state at time \(t\), including release calibration, lateral aim, depth calibration, and confidence. Let \(h\) denote habit or dominant motor tendency. A coach or player forms a posterior belief
\[
\Pr(\theta_t \mid y_{1:t}, h, \tau),
\]
where \(y_{1:t}\) are observed shot outcomes or rim-entry measurements and \(\tau\) is time pressure. In crisis situations, such as late-clock attempts or high-fatigue drills, the posterior variance should increase:
\[
\mathrm{Var}(\theta_t \mid y_{1:t}, h, \tau)
=
\sigma_0^2 f(\tau),
\]
where \(f(\tau)\) increases as \(\tau\) decreases. This is not a toy ratio; it is a variance expansion under reduced calibration time. The source does not directly measure clock time, but it supports the general principle that non-shot conditions alter performance because movement is correlated with shooting percentage [PAGE 10].

Habit regression is the tendency to revert to the dominant spatial bias under uncertainty. If a right-handed shooter’s habit produces a leftward release error from the right corner, then under crisis the shooter may regress toward that error rather than toward the optimal center. Formally, if the habit prior concentrates mass on a biased action \(a_h\), and the likelihood is weak because the shooter has few calibrated attempts, then the posterior mode can remain near \(a_h\):
\[
a_t^\ast
\approx
\arg\max_a
\left[
\log \Pr(y_t \mid a,\theta_t)
+
\log \Pr(a \mid h)
\right].
\]
If \(\Pr(y_t \mid a,\theta_t)\) is flat due to uncertainty, the habit prior dominates. This matches the source’s observed population bias: the right corner is more extreme than the left corner, and handedness is the hypothesized latent driver [PAGE 4].

Counter-trap is the opposite failure: overcorrection. If a coach sees the right-corner left bias and instructs the player to aim more to the right, the player may overshoot. In formal terms, the correction action \(a_c\) is chosen to reduce lateral error, but if the correction gain is too large or if the player’s internal estimate of center is noisy, the new error can have the opposite sign:
\[
L_{\text{new}}
=
L_{\text{old}} + g\left(L^\ast - L_{\text{old}}\right) + \varepsilon,
\]
where \(g\) is the correction gain and \(\varepsilon\) is motor noise. If \(g>1\), the correction overshoots. If \(g<0\), it reinforces the bias. The source does not estimate \(g\), but the possibility is inherent in any training recommendation. The correct policy is therefore not “aim opposite the bias,” but “reduce variance around the empirically optimal rim-entry center.”

The clock operates as a variance multiplier. Under low time, release preparation shortens, movement may increase, and calibration degrades. If the session includes movement, the source’s movement filter is relevant: sessions with average movement above two feet are excluded because movement is strongly correlated with lower shooting percentage [PAGE 10]. In a crisis model, the clock should therefore be treated as a state variable that increases the variance of \(L\), \(D\), and \(\theta\). A formal decision rule is
\[
a_t^\ast
=
\arg\min_a
\mathbb{E}
\left[
\left(L_i-L^\ast\right)^2
+
\lambda\left(D_i-d_G\right)^2
\;\middle|\;
\theta_t,\tau
\right],
\]
where \(\lambda\) is a dimensionless weight converting depth error into lateral-equivalent error. This rule does not claim that coaches literally optimize this expression, but it formalizes the coaching objective implied by the paper: maximize make probability by controlling lateral error, depth error, and angle quality under the constraints of the shooter’s current state.

The recursive part is that the shooter also anticipates being evaluated. If players know they are being measured by rim-entry patterns, they may attempt to game the metric by shooting in ways that look better but do not improve real game performance. The source’s stationary restriction helps mitigate this: by focusing on low-movement sessions in the 18–22 foot range [PAGE 5, PAGE 7], the model reduces the chance that players manipulate movement to inflate scores. Still, the model must be audited recursively: a metric that rewards reduced lateral variance may encourage conservative shot selection, while a metric that rewards depth centering may encourage shot types that do not transfer to games. The safest recursive policy is to treat the ten-dimensional model as a development diagnostic, not as a sole ranking authority. The source itself frames the method as a tool for coach and player development, not merely as a replacement for all evaluation: “This information will provide players with the resources they need to develop and improve as shooters” [PAGE 8].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Cross-layer adjudication requires separate veto authority for physical geometry, biomechanics, and environmental conditions. The source is primarily a physical-measurement paper, so the physical layer has strong veto power. The rim is finite. The source defines Left-Right values of \(-9\) inches and \(+9\) inches as the leftmost and rightmost parts of the hoop, and Depth values of \(0\) inches and \(18\) inches as the front and back of the hoop [PAGE 2]. Therefore, any proposed correction that requires the mean entry point to lie outside these bounds without accounting for ball radius and rim contact is physically inadmissible. Let \(R=9\) inches be the rim radius in the lateral coordinate. Let \(r_b\) be the basketball radius and \(c\) be a clearance margin. A simplified feasible interval for the ball center is
\[
L \in [-(R-r_b-c),\, R-r_b-c].
\]
If a coaching correction demands a mean lateral target beyond this interval, the physical veto applies. The same logic applies to depth: if the required depth correction exceeds the interval \([0,18]\) inches after accounting for ball radius and rim interaction, the correction is not physically interpretable as direct rim entry.

The physical veto also applies to angle. The source states that Angle is measured by the tangent to the ball flight parabola at the hoop plane, with Figure 1C showing “Tangent to ball flight parabola at hoop plane” [PAGE 2]. A valid make requires a descending entry angle sufficient for the ball to pass through the hoop rather than strike the front rim or cross the plane on an invalid trajectory. If a proposed shooting correction lowers the entry angle below the minimum needed for valid descent, the correction is vetoed. The exact minimum depends on ball size, release height, and distance, but the source’s angle examples—\(36^\circ\) for a relatively flat shot and \(55^\circ\) for a high-arcing shot—show that angle is a bounded operational variable, not an arbitrary style preference [PAGE 2].

The biomechanical veto concerns handedness and movement. The authors observe stronger right-corner bias than left-corner bias and hypothesize that this is due to a higher percentage of right-handed shooters, while noting that the system does not collect handedness data [PAGE 4]. Formally, suppose the observed lateral mean by side is
\[
\mathbb{E}[L \mid \text{side}]
=
\alpha
+
\beta_{\text{hand}}\text{Hand}
+
\gamma_{\text{side}}\text{Side}
+
\varepsilon.
\]
If Hand is omitted, \(\hat\gamma_{\text{side}}\) absorbs hand effects. Therefore any causal claim that “the right corner causes more leftward error” is biomechanically vetoed unless handedness or an equivalent proxy is measured. The source itself frames the explanation as a hypothesis, not a confirmed causal estimate: “we hypothesize this difference is due to a much higher percentage of right-handed shooters” [PAGE 4]. The veto rule is: do not assign shooter-skill penalties to side bias when hand dominance is unobserved.

Movement is a second biomechanical veto. The appendix reports a strong negative correlation between movement and shooting percentage and excludes sessions with average movement greater than two feet [PAGE 10]. If a session includes high movement, the shot class changes because footwork, balance, and release mechanics change. The source’s ranking model is explicitly designed for stationary shots in the 18–22 foot range [PAGE 7]. Therefore any attempt to use the model outside that stationary regime is vetoed unless the movement distribution is explicitly modeled.

The weather layer is not central to the source, but it remains a valid veto layer. The paper describes a sensor hanging about 13 feet above the basket [PAGE 2], and it does not provide environmental covariates such as air density, humidity, temperature, or airflow. Ball flight depends on environmental conditions through aerodynamic drag and lift. If the environment changes across venues, seasons, or indoor ventilation regimes, the mapping from release to entry can change. Let \(\rho_{\text{air}}\) be air density in \(\text{kg}/\text{m}^3\). The ball’s trajectory satisfies a drag-dependent equation of motion. If \(\rho_{\text{air}}\) is not recorded or controlled, then a model that attributes all entry-point differences to shooter skill is underidentified. The weather veto is therefore: if environmental conditions vary and are not measured, do not treat rim-entry bias as purely shooter-specific.

A cross-layer proof follows. Suppose a proposed shooter-quality effect is observed as a mean shift in \(L\) or \(D\). The effect is admissible only if:
1. The target point lies within the physical rim-entry domain after accounting for ball radius and clearance.
2. The entry angle is compatible with a valid descending trajectory.
3. The shot class is stationary or movement is controlled.
4. Bank shots are separated if depth is analyzed.
5. Environmental conditions are either constant or measured.
If any condition fails, the effect is vetoed or demoted to a confounded observation. The source supports conditions 1–4 explicitly through its geometry, bank-shot exclusion, and movement filter [PAGE 2, PAGE 5, PAGE 10]. Condition 5 is not explicitly addressed in the provided text, so it must be treated as an external audit requirement rather than an established result.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
For RLVR-style auditing, the reward signal should be tied to verifiable outcomes and to the source’s reported metrics. A suitable reward can be based on the model’s ability to recover the long-run shooting percentage label while preserving rank order. Let \(y_s\) be the verified long-run stationary shooting percentage for player \(s\), and let \(\hat y_s\) be the model prediction. A verifiable reward can be written as
\[
R =
-\mathrm{MSE}(\hat y, y)
-
\lambda_{\rho}\left(1-\rho_{\text{Spearman}}(\hat y, y)\right),
\]
where \(\lambda_{\rho}\ge 0\) weights rank fidelity. This reward uses only outcome labels and rank statistics, not external wagering structures. The following three counterfactual veto scenarios are verifiable from the source.

Counterfactual veto 1: movement contamination.
Counterfactual world: include sessions with average movement greater than two feet.
Source basis: the appendix states that movement is strongly negatively correlated with shooting percentage and that the authors excluded sessions with average movement greater than two feet [PAGE 10].
Prediction: if movement-heavy sessions are included, the spatial rim pattern becomes contaminated by movement-induced degradation. The model will either overpredict poor movement sessions as low skill or underpredict them as high skill depending on how movement correlates with the rim features. Expected verifiable effect: test-set MSE increases and Spearman rho decreases relative to the stationary-only model. This veto is verifiable by comparing models trained with and without the \(m_s \le 2\) feet filter.

Counterfactual veto 2: handedness omission.
Counterfactual world: train a model without handedness data but with court side, then add handedness in a separate audit sample.
Source basis: the authors report that the right corner bias is more extreme than the left corner bias and that the system does not collect handedness, while hypothesizing right-handed shooters are the cause [PAGE 4].
Prediction: without handedness, the model cannot distinguish a true side effect from a handedness-driven effect. If handedness is added, the residual right-corner bias should decrease but may not disappear if side-specific geometry also matters. Verifiable effect: a mediation or residual analysis will show that part of the right-corner lateral error is explained by handedness distribution. This veto prevents the model from assigning a purely skill-based penalty to right-corner shooters when the observed bias may be driven by latent hand dominance.

Counterfactual veto 3: label-range truncation.
Counterfactual world: evaluate players whose true overall shooting percentage lies below \(30\%\) or above \(90\%\).
Source basis: the appendix states that the training data only includes players with overall shooting percentages between \(30\%\) and \(90\%\), and that the model will only predict between those values [PAGE 10].
Prediction: for true percentages below \(30\%\),
\[
\hat y_s > y_s
\]
on average, while for true percentages above \(90\%\),
\[
\hat y_s < y_s
\]
on average. The calibration slope of predicted versus true percentage will be less than one near the boundaries. Verifiable effect: a calibration plot will show compression at the extremes. This veto prevents the model from being used as an unbiased absolute rating outside its trained label interval. The source explicitly acknowledges the estimator bias and notes that it inflates mean squared error but may not destroy rank ordering [PAGE 8].

These three vetoes are not external betting-style constraints; they are scientific falsification checks. They use only the source’s own operators: session percentage sampling variance [PAGE 6], rim-entry geometry [PAGE 2], bank-shot separation [PAGE 5], spatial rim features [PAGE 7], movement filtering [PAGE 10], and label-range limits [PAGE 10]. In RLVR terms, any model update that improves one metric while violating one of these vetoes should be rejected unless the violation is explicitly modeled. For example, if a model reduces MSE by including movement-heavy sessions, the movement veto says the improvement may be due to confounded shot class, not improved shooter evaluation. If a model improves rank correlation by compressing extreme players, the label-range veto says the improvement may be artificial. The safest deployment is therefore a veto-gated evaluator: the ten-dimensional model is accepted only when the shot class is stationary, the physical entry coordinates are valid, bank shots are excluded from non-bank depth inference, and the predicted player lies within the calibrated label range or is flagged as extrapolation.
</RLVR_COUNTERFACTUAL_VETOES>