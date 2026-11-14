---
source: "undated - High-resolution shot capture reveals systematic biases and an improved method for shooter evaluation - Marty.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5102
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text (Marty MIT Sloan paper on high-resolution shot capture and shooter evaluation). I must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines at all.
- No fake/toy equations. Use formal LaTeX with proper units and assumptions.
- Cite page markers [PAGE N] since source pages are provided (the text has page numbers like 1, 2, ... 10 at bottom).
- Verbatim quotes where citing.

Let me plan the content.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Discuss the pipeline: 22M shots, Noahlytics sensor 13 ft above basket [PAGE 1], attributes Left-Right (-9 to +9 inches), Depth (0 to 18 inches), Angle (36-55 deg) [PAGE 2].
- Systematic biases: court divided into 6x6 inch squares [PAGE 3]. Left-Right bias: right corner shoot 2.34 inches left of center; left corner shoot 1.05 inches right of center [PAGE 3]. Std dev ~4 inches. Shooting % loss up to 4% right corner, 2% left corner [PAGE 3]. Hypothesized due to right-handedness prevalence but handedness not collected [PAGE 3].
- Depth bias: shorter shots go deeper, longer shots shorter. Mid-range ~11 inch Depth, long 2-pt ~10 inch, 3-pt ~9 inch [PAGE 4]. Mean Depth decreases from 10.1 inches at 15-18 ft to 7.8 inches at 27-30 ft. GMZ center shifts from 11.5 to 10.5 inches [PAGE 4]. Players shoot shorter than GMZ center. % loss: 1.5% for typical NBA 3-pt 24-27 ft; 2.9% for long 3-pt 27-30 ft [PAGE 4].
- Ranking: raw shooting % from limited shots high variance. Players A, B, C: 27,636 / 25,031 / 10,524 shots, averages 50/58/75% [PAGE 5]. 25-shot sessions overlap heavily; >1000 shots needed to rank reliably [PAGE 5].
- Nine spatial rim pattern features: mean/std for L-R, Depth, Angle (3 means + 3 stds + 3 Spearman correlations = 9) [PAGE 6]. Ten-dimension model adds raw shooting % [PAGE 6-7]. Gradient Boosting Regression [PAGE 7]. Dataset: players >1000 stationary shots in 18-22 ft range; labels = overall stationary shooting %; train/test split 2/3 and 1/3 players; down-sampled for even distribution [PAGE 7].
- Results: model has half MSE of raw shooting % [PAGE 7]. Spearman rank improved [PAGE 7]. Bias: limited training range 30-90% overall shooting % causes shrinkage (inflate poor, deflate great) but doesn't impact Spearman rank [PAGE 7-8]. Appendix: movement correlation, exclude sessions >2 ft average movement [PAGE 9-10]. Appendix: prediction limited to 30-90% range [PAGE 10].
- Gray-zone audit: No handedness data (confound for left-right bias asymmetry). Stationary only (excludes movement shooting, game context). Bias correction not developed. Sample selection: only players with >1000 stationary shots in narrow 18-22 ft band. t-SNE is unsupervised visualization, not causal. Defining "stationary" via <2 ft movement threshold is arbitrary. Left-right measured from shooter perspective, front of hoop closest to shooter—coordinate frame depends on shooting position. No defensive pressure, clock, fatigue. Depth distributions skewed/non-normal so median used for simulation. Angle not used in bias cases 2.1/2.2 except as feature in model.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define random variables: $X_{LR} \in [-9, +9]$ inches [PAGE 2], $X_D \in [0, 18]$ inches [PAGE 2], $\theta \in [36^\circ, 55^\circ]$ [PAGE 2].
- Court grid: $S_{ij}$ = six-inch by six-inch square [PAGE 3].
- Mean Left-Right: $\bar{x}_{LR}(s) = \frac{1}{N_s}\sum_{k=1}^{N_s} x_{LR,k}$ for shots in square $s$.
- Right corner bias: $\mu_{RC} = +2.34$ in (left of center from shooter perspective? Need sign convention: text says players shooting from right corner shoot 2.34 inches left of hoop center. From perspective of shooter, leftmost is -9, rightmost +9. Shooting left of center means negative? Actually text says "shoot 2.34 inches left of the hoop center". If center is 0, left is negative. But earlier: right side of court has a left bias (red color). Let's keep sign as magnitude with direction.)
- Left corner: $\mu_{LC} = 1.05$ inches right of center [PAGE 3].
- $\sigma_{LR} \approx 4$ inches for average NBA player from corner [PAGE 3].
- Shooting loss estimates: $\Delta p_{RC} \le 0.04$ (4 percentage points), $\Delta p_{LC} \le 0.02$ [PAGE 3].
- Depth: $D \in [0,18]$ in, front=0, back=18 [PAGE 2]. GMZ center $c_{GMZ} \approx 11.5$ in at 15-18 ft, $10.5$ in at 27-30 ft [PAGE 4]. Observed mean depth $\bar{D}$ decreases from 10.1 to 7.8 in [PAGE 4]. Bias $\delta_D = \bar{D} - c_{GMZ} < 0$.
- $\Delta p_{3pt,24-27ft} \approx -0.015$, $\Delta p_{3pt,27-30ft} \approx -0.029$ [PAGE 4].
- Sample variance: raw percentage $\hat{p} \sim \mathcal{N}(p, p(1-p)/n)$ approx for binomial. For n=25, high overlap; n>1000 needed [PAGE 5].
- Rim pattern feature vector $\phi \in \mathbb{R}^9$: $(\mu_{LR}, \mu_D, \mu_\theta, \sigma_{LR}, \sigma_D, \sigma_\theta, \rho_{LR,D}, \rho_{LR,\theta}, \rho_{D,\theta})$ [PAGE 6]. Augmented with raw % gives $\mathbf{z} = [\hat{p}, \phi] \in \mathbb{R}^{10}$ [PAGE 6-7].
- Model: Gradient Boosting Regression, $\hat{p}_{pred} = F(\mathbf{z})$ minimizing differentiable loss $L$, typically MSE $L = \frac{1}{N}\sum (y_i - F(\mathbf{z}_i))^2$ [PAGE 7]. Labels $y_i = $ overall stationary shooting percentage in 18-22 ft [PAGE 7].
- Train/test: 2/3 vs 1/3 players [PAGE 7]. Down-sampled for even distribution across observed shooting percentages [PAGE 7].
- Metrics: MSE halved relative to raw % [PAGE 7]; Spearman $\rho$ increased [PAGE 7].
- Breakdown/singularity: prediction range limited to $[30\%, 90\%]$ overall shooting because training data only covers that [PAGE 10 Appendix]. Extrapolation outside invalid. Movement veto: sessions with average inter-shot distance $>2$ ft excluded [PAGE 9 Appendix]. Non-normal Depth distributions require median-based simulation, not Gaussian assumption [PAGE 4].

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Goldsberry 2012 MIT Sloan Courtvision introduced spatial component to shooting percentage [PAGE 1, Ref 1].
- Marty & Lucey 2017 MIT Sloan data-driven method for 3-point shooting (GMZ concept) [PAGE 4, Ref 3; PAGE 1 Ref 3].
- van der Maaten & Hinton 2008 t-SNE JMLR [PAGE 6, Ref 6]; Pedregosa et al. scikit-learn JMLR 2011 [PAGE 7, Ref 7].
- Multi-week traps: small-sample evaluation over days/weeks leads to wrong rankings; Player C might shoot lower than Player A on a given day by chance [PAGE 5]. Draft/trade decisions based on minimal shots cause suboptimal rosters [PAGE 1]. Regression to mean over a season masks true skill; the paper's model predicts current ability and future potential as data accumulates over years [PAGE 8]. The "bias" in estimator (shrinkage toward 30-90% range) is a retrocausal trap: labels bounded by observed range cause poor shooters inflated and great shooters deflated [PAGE 7-8, 10].

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: coaches/players revert to anecdotal raw % under pressure (draft/trade deadline), causing regression to small-sample noise. Paper: conventional methods prone to high sampling error and inaccurate results [PAGE 1].
- Counter-trap: ten-dimension model as counter-trap; but it has its own trap: shrinkage bias compresses extremes, so at the tails (elite prospects or severely poor shooters) rank order may still be distorted though Spearman preserved [PAGE 7-8]. The model's inability to correct bias (left for future work) means recursive overconfidence in mid-range predictions.
- Clock: temporal stationarity assumption. Players tracked over 10 months [PAGE 5]; skill may drift within that window. Model trained on historical thousands of shots labels current ability, but "potential future ability" only foreseen [PAGE 8]. Clock = how quickly the 2/3-1/3 player split becomes stale as rosters turn over; down-sampling to even distribution may distort temporal prevalence of elite shooters.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: hoop geometry fixed: rim diameter 18 in implied by Depth 0-18 [PAGE 2]. Left-Right -9 to +9 implies hoop width 18 in [PAGE 2]. Sensor hangs 13 ft above basket [PAGE 1]. Standard basketball rim height 10 ft (not explicitly stated but implied by context; I should avoid inventing if not in text, but hoop dimensions are in text). Angle 36-55 deg [PAGE 2].
- Biomechanical: handedness not collected [PAGE 3]—major veto because hypothesized cause of right/left corner asymmetry is higher % of right-handed shooters. Movement threshold <2 ft average [PAGE 9 Appendix] excludes game-like off-the-dribble or moving shots; model applies only to stationary 18-22 ft catch-and-shoot type sessions. Fatigue, defensive contest, shot clock not in data.
- Weather: indoor basketball, weather not applicable; but environmental consistency is assumed (same hoop, same sensor calibration). Noahlytics system "accurately and automatically determines" [PAGE 1]; no error bars on sensor precision provided—veto if calibration drifts.
- Veto conditions: (1) any shooter with handedness imbalance >population baseline invalidates corner lateral bias attribution; (2) any session with avg movement >2 ft is excluded from model; (3) any predicted percentage outside [30%,90%] is extrapolation, invalid; (4) non-stationary or defended shots are out-of-distribution.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable scenarios. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll frame as verifiable counterfactual veto scenarios with predictions.

Scenario 1: Handedness confound veto.
- Setup: Partition the 22M shots by shooter handedness (if collected externally). Test whether right corner left bias persists within right-handers only and left-handers only.
- Verifiable condition: If $\mu_{LR|RH, right corner} \approx \mu_{LR|LH, right corner}$ and both $\neq 0$, handedness not sole cause; if asymmetry vanishes within handedness strata, handedness is mediator.
- Prediction: Because handedness is not in data [PAGE 3] and the hypothesis is "much higher percentage of right-handed shooters," we predict within-right-handers the bias remains significant but reduced magnitude vs population, indicating biomechanical aiming preference plus lateral dominance.

Scenario 2: Depth/GMZ distance interaction veto.
- Setup: Recompute Figure 3B depth distributions conditioning on shot distance bins narrower than 15-18 and 27-30 (e.g., 24-25 ft vs 28-29 ft) and test whether mean depth continues monotonic decrease or plateaus near GMZ center for elite shooters only.
- Verifiable condition: If $\bar{D}(d)$ for $d \in [24,27]$ is not statistically different from GMZ center $c_{GMZ}(d)$ for top-decile shooters, then the 2.9% loss [PAGE 4] is a population habit, not physical constraint.
- Prediction: Population mean remains ~2.2-2.9 inches short of GMZ center at long distances; elite shooters shift toward center, recovering most of the 2.9 percentage points.

Scenario 3: Small-sample rank instability veto (25-shot session).
- Setup: Use Players A, B, C data [PAGE 5] to simulate 10,000 bootstrap resamples of n=25 stationary 18-22 ft shots. Compute probability that raw % ranks Player A above Player C in a single session.
- Verifiable condition: If $P(\hat{p}_A^{(25)} > \hat{p}_C^{(25)}) > 0.10$, raw 25-shot ranking is unreliable; ten-dimension model should reduce this inversion probability.
- Prediction: Raw % inversion probability is substantial (~15-25% given 50% vs 75% true means and n=25 binomial variance); ten-dimension model cuts inversion probability by roughly half (consistent with half MSE [PAGE 7]), but non-zero due to residual overlap and shrinkage bias [PAGE 7-8].

Word count: Need >=1000 words total across sections. THINK_TRACE >=400 words. Others should be substantial.

I must not mention betting lines. No odds, spreads, moneylines, totals. I will avoid all gambling terminology.

Citations: Use [PAGE N] exactly as page numbers appear in source text. The text shows page numbers at bottom: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. I'll cite accordingly.

Verbatim quotes: Include short quotes with [PAGE N].

Let's draft carefully.

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

I need to ensure total >=1000 words. I'll write generously.

Let's check for any toy equations: I will not invent Force/Fatigue ratios. All equations will be formal statistical/ML notation with units.

Units: inches, feet, degrees, percentage points (pp), dimensionless Spearman rho, MSE in squared percentage points.

Let's write.

Need to be careful with sign conventions from text. Text says Left-Right: leftmost part -9", straight 0", rightmost +9". From perspective of shooter. Then "right side of court has a left bias (red color)" and "players shooting from the right corner shoot 2.34 inches left of the hoop center". If center is 0 and left is negative, then right corner mean should be around -2.34. But text says "2.34 inches left". I'll state magnitude and direction rather than assign sign to avoid confusion, or note "left of center (negative direction under the paper's shooter-centric convention)"—actually if leftmost is -9, left of center is negative. I'll phrase: $\mu_{LR} = -2.34$ in (i.e., 2.34 in left of center) for right corner [PAGE 3], and $\mu_{LR} = +1.05$ in (1.05 in right of center) for left corner [PAGE 3]. That's consistent.

Depth: front=0, back=18 [PAGE 2]. Mean Depth decreases from 10.1 to 7.8 [PAGE 4]. GMZ center 11.5 to 10.5 [PAGE 4]. So players shoot shallower than GMZ center.

Let's write the response.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s causal chain runs from sensor physics to population bias to small-sample ranking failure to a supervised correction. The Noahlytics sensor hangs approximately 13 feet above the basket and captures every shot, automatically logging location, make/miss, and high-resolution entry attributes [PAGE 1]. The attribute space is bounded and shooter-centric: Left-Right (LR) spans −9 in (leftmost rim edge) to +9 in (rightmost rim edge), with 0 in denoting straight; Depth (D) spans 0 in (front of rim) to 18 in (back of rim); Angle spans roughly 36° (flat) to 55° (high arc) [PAGE 2]. Because the front of the hoop is defined as the point closest to the shooter, the coordinate frame rotates with shooting position, which matters when aggregating across the court.

The systematic-bias analysis tiles the court into 6 in × 6 in squares and computes mean LR and Depth per square across 22 million shots [PAGE 3–4]. Ignoring bank-shot regions emanating at 45° from the rim, a lateral bias emerges: shooters on the right side miss left of center, and shooters on the left side miss right of center [PAGE 3]. This is most extreme for baseline 3-pointers: right-corner shooters average 2.34 in left of hoop center (≈ −2.34 in under the shooter-centric convention), while left-corner shooters average 1.05 in right of center (≈ +1.05 in) [PAGE 3]. With an average NBA corner LR standard deviation of about 4 in, the authors simulate LR distributions and estimate shooting-percentage losses of up to 4 percentage points from the right corner and up to 2 percentage points from the left corner [PAGE 3]. A gray zone here is attribution: the paper explicitly states it does not collect handedness and hypothesizes the asymmetry stems from a higher prevalence of right-handed shooters [PAGE 3]. Without handedness stratification, the lateral bias remains a population correlation with an unobserved biomechanical confound.

The Depth bias shows a distance-dependent shallowing: mid-range shots average about 11 in Depth, long 2-pointers about 10 in, and 3-pointers about 9 in [PAGE 4]. Across distance bins, mean Depth falls from 10.1 in at 15–18 ft to 7.8 in at 27–30 ft, while the center of the Guaranteed Make Zone (GMZ) shifts only from 11.5 in to 10.5 in [PAGE 4]. Because Depth distributions are skewed and non-normal, the authors use median-based simulation rather than Gaussian assumptions, estimating a 1.5 percentage-point loss for a typical 24–27 ft NBA 3-pointer and a 2.9 percentage-point loss for the longer 27–30 ft shot [PAGE 4]. This is actionable: training to the GMZ center theoretically recovers the loss.

The ranking section identifies the small-sample problem concretely. Players A, B, and C took 27,636, 25,031, and 10,524 stationary 18–22 ft shots over 10 months, averaging 50%, 58%, and 75% [PAGE 5]. Their true ordering is discernible only with large N; at 25 shots per session, the sampling distributions overlap so heavily that confident ranking is effectively impossible, and sessions of over 1,000 shots are described as necessary for reliable ranking by raw percentage [PAGE 5]. A movement confound is addressed in the Appendix: because player movement correlates strongly with shooting percentage, sessions with average inter-shot distance greater than 2 feet are excluded [PAGE 9].

The remediation is a ten-dimensional feature vector: raw session shooting percentage plus nine spatial rim-pattern statistics—the mean and standard deviation of LR, Depth, and Angle (six features), plus the three pairwise Spearman correlations among those attributes (three features) [PAGE 6]. A Gradient Boosting Regression model maps this vector to the player’s overall stationary shooting percentage in the 18–22 ft band, trained on players with more than 1,000 such shots, split 2/3 training and 1/3 testing by player, and down-sampled for an even distribution across observed percentages [PAGE 7]. Results: the model halves mean squared error relative to raw percentage and increases Spearman rank correlation with the ground-truth cumulative percentage [PAGE 7]. A shrinkage bias exists because training labels span only 30%–90% overall shooting, inflating predictions for poor shooters and deflating them for great shooters; this hurts MSE but not rank correlation, and bias correction is left to future work [PAGE 7–8, 10].

Gray-zone audit summary: (1) unobserved handedness undermines causal claims about the corner LR asymmetry; (2) stationary-only sampling excludes defended, off-dribble, and game-context shots, limiting external validity; (3) the 2 ft movement cutoff is an arbitrary threshold with no sensitivity analysis reported; (4) t-SNE clustering is unsupervised visualization, not evidence of causal skill dimensions; (5) the model’s bounded prediction range [30%, 90%] creates hard extrapolation failure outside observed label support [PAGE 10]; and (6) Angle is included in the feature vector but not decomposed in the population bias cases, leaving its independent contribution unquantified.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a shot $k$ taken by player $i$ from court square $s$ produce an entry-attribute tuple
\[
\mathbf{x}_{ik} = (x^{\mathrm{LR}}_{ik},\, x^{\mathrm{D}}_{ik},\, \theta_{ik}) ,
\]
with units and support inherited from the Noahlytics system [PAGE 2]:
\[
x^{\mathrm{LR}}_{ik} \in [-9,\,+9]\ \text{in}, \qquad
x^{\mathrm{D}}_{ik} \in [0,\,18]\ \text{in}, \qquad
\theta_{ik} \in [36^\circ,\,55^\circ] .
\]
The origin conventions are shooter-centric: $x^{\mathrm{LR}}=0$ is straight, $-9$ in is the leftmost rim edge from the shooter’s perspective, $+9$ in is the rightmost; $x^{\mathrm{D}}=0$ is the front of the hoop and $18$ in is the back [PAGE 2].

For each 6 in × 6 in court square $s$ [PAGE 3], the population mean Left-Right is
\[
\bar{x}^{\mathrm{LR}}(s) = \frac{1}{N_s}\sum_{k:\, \text{shot }k\in s} x^{\mathrm{LR}}_{k},
\]
computed over all $N_s$ shots in that square from the 22 million-shot corpus [PAGE 3]. The reported corner biases are
\[
\bar{x}^{\mathrm{LR}}_{\text{right corner}} = -2.34\ \text{in} \quad (\text{2.34 in left of center}), \qquad
\bar{x}^{\mathrm{LR}}_{\text{left corner}} = +1.05\ \text{in} \quad (\text{1.05 in right of center}) \quad \text{[PAGE 3]},
\]
with average NBA corner LR standard deviation $\sigma^{\mathrm{LR}}_{\text{corner}} \approx 4$ in [PAGE 3]. Simulated percentage losses are bounded by
\[
\Delta p_{\text{right corner}} \le 0.04,\qquad \Delta p_{\text{left corner}} \le 0.02
\]
in units of shooting-probability (fraction), i.e., 4 and 2 percentage points respectively [PAGE 3].

For Depth, let $c_{\mathrm{GMZ}}(d)$ denote the GMZ center at shot distance $d$. The paper reports
\[
c_{\mathrm{GMZ}}(15\text{–}18\text{ ft}) \approx 11.5\ \text{in},\qquad
c_{\mathrm{GMZ}}(27\text{–}30\text{ ft}) \approx 10.5\ \text{in},
\]
while observed mean Depth declines from
\[
\bar{x}^{\mathrm{D}}(15\text{–}18\text{ ft}) \approx 10.1\ \text{in},\qquad
\bar{x}^{\mathrm{D}}(27\text{–}30\text{ ft}) \approx 7.8\ \text{in} \quad \text{[PAGE 4]}.
\]
The short bias is $\delta_D(d) = \bar{x}^{\mathrm{D}}(d) - c_{\mathrm{GMZ}}(d) < 0$. Because empirical Depth distributions are non-normal and skewed short, percentage loss is estimated by varying the median Depth of the empirical player distribution rather than assuming Gaussianity [PAGE 4]. Reported losses:
\[
\Delta p_{24\text{–}27\text{ ft}} \approx -0.015,\qquad
\Delta p_{27\text{–}30\text{ ft}} \approx -0.029
\]
(fraction; −1.5 and −2.9 percentage points) [PAGE 4].

For ranking, three players are tracked over 10 months with shot counts
\[
N_A=27{,}636,\quad N_B=25{,}031,\quad N_C=10{,}524
\]
stationary 18–22 ft shots and observed means $\bar{p}_A=0.50$, $\bar{p}_B=0.58$, $\bar{p}_C=0.75$ [PAGE 5]. Raw session percentage $\hat p^{(n)}$ from $n$ shots carries binomial-scale sampling variance $\operatorname{Var}(\hat p^{(n)}) \approx p(1-p)/n$; at $n=25$ the overlap between players’ distributions is large enough that reliable ranking requires sessions above 1,000 shots [PAGE 5].

The rim-pattern feature vector per 25-shot session is 9-dimensional [PAGE 6]:
\[
\boldsymbol{\phi} =
\bigl(
\mu_{LR},\mu_D,\mu_\theta,\,
\sigma_{LR},\sigma_D,\sigma_\theta,\,
\rho_{LR,D},\rho_{LR,\theta},\rho_{D,\theta}
\bigr) \in \mathbb{R}^9,
\]
where means and standard deviations are in inches or degrees, and each $\rho$ is a dimensionless Spearman correlation. Augmented with raw session percentage $\hat p$, the model input is $\mathbf{z} = [\hat p,\boldsymbol{\phi}]^\top \in \mathbb{R}^{10}$ [PAGE 6–7]. Gradient Boosting Regression fits
\[
\hat p_{\mathrm{pred}} = F(\mathbf{z})
\]
by optimizing a differentiable loss, empirically mean squared error
\[
\mathrm{MSE} = \frac{1}{N_{\mathrm{test}}}\sum_{i\in\mathrm{test}}\bigl(y_i - F(\mathbf{z}_i)\bigr)^2,
\]
where labels $y_i$ are each player’s overall stationary shooting percentage in the 18–22 ft band [PAGE 7]. Training/test splits are by player at 2/3 and 1/3, down-sampled for an even distribution across observed shooting percentages [PAGE 7]. The ten-dimension model halves MSE relative to raw percentage and raises Spearman rank correlation with ground truth [PAGE 7].

Singularity and breakdown regimes:
\[
\hat p_{\mathrm{pred}} \in [0.30,\,0.90]
\]
strictly, because the training data contain only players with overall shooting percentages between 30% and 90%; extrapolation outside this interval is invalid [PAGE 10, Appendix Section 2]. Sessions with average inter-shot movement greater than 2 ft are excluded as a preprocessing veto [PAGE 9, Appendix Section 1]. LR sign convention depends on shooter position relative to the hoop, so aggregation across court sides requires the shooter-centric frame; flipping frames without re-centering would corrupt the bias maps [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage begins with Goldsberry’s 2012 MIT Sloan Courtvision work, which introduced spatial shot charts and moved evaluation beyond summary percentages toward position-conditional shooting ability [PAGE 1, Reference 1]. Marty and Lucey’s 2017 MIT Sloan paper then introduced the Guaranteed Make Zone (GMZ) and a data-driven method for understanding 3-point shooting percentage [PAGE 4, Reference 3; PAGE 1, Reference 3]. The present paper extends that lineage by (a) scaling to 22 million high-resolution shots, (b) exposing population-level lateral and depth biases invisible to summary charts, and (c) replacing raw percentage with a supervised, ten-dimensional rim-pattern estimator [PAGE 1–8].

Methodologically, the unsupervised step relies on t-SNE (van der Maaten & Hinton, 2008, JMLR) to visualize nine-dimensional session features in two dimensions [PAGE 6, Reference 6], and the supervised step uses Gradient Boosting Regression via scikit-learn (Pedregosa et al., 2011, JMLR) [PAGE 7, Reference 7]. These are modern tools applied to a classical sports-statistics problem: small-sample inference about a player’s true shooting probability.

The “multi-week trap” is explicit in the paper’s framing. Players are evaluated on minimal shots, and low sample sizes produce wide distributions of observed percentages across sessions [PAGE 1, 5]. Over a 10-month window, Player C (true mean 75%) can still shoot a lower percentage than Player A (true mean 50%) on any given day by chance [PAGE 5]. Draft and trade decisions made on such small samples therefore risk suboptimal rosters [PAGE 1]. The trap is recursive: a front office that overweights a recent 25-shot sample regresses toward noise; when that decision is later “validated” by a larger sample, the confirmation is confounded by regression to the mean rather than by measurement quality.

The paper’s own foresight introduces a longer-horizon retrocausal loop: as more years of high-resolution data accumulate, the model may learn to predict potential future shooter ability in addition to current ability [PAGE 8]. This shifts the evaluative clock from cross-sectional snapshot to longitudinal trajectory, but it also creates a new trap—if the training label distribution remains bounded at 30%–90% [PAGE 10], the model will systematically compress extremes at both tails, mispricing elite prospects and severe underperformers even while preserving average rank correlation. The historical lineage thus moves from spatial description to bias detection to predictive compression, with each layer inheriting the sampling limitations of the previous one.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of coaches and front offices, under deadline pressure (draft night, trade deadline, roster cutdown), to abandon richer models and revert to anecdotal raw shooting percentage from minimal shots. The paper identifies this as the status quo: players are assessed on shooting percentage on a minimal number of shots, an approach prone to high sampling error and inaccurate results that lead to suboptimal rosters [PAGE 1]. Under crisis, the decision-maker’s theory of mind collapses to “what did I see last week,” overweighting the most recent 25-shot session and ignoring the distributional overlap demonstrated in Figure 4A [PAGE 5].

The counter-trap is the paper’s proposed ten-dimension model. By feeding nine spatial rim-pattern statistics plus raw percentage into a Gradient Boosting Regression, the model extracts skill signal from small samples that raw percentage discards [PAGE 6–7]. It halves MSE and improves Spearman rank correlation, which means that, recursively, a coach using this model is less likely to be fooled by a single hot or cold session [PAGE 7]. But the counter-trap contains its own trap: shrinkage bias. Because labels are bounded between 30% and 90% overall shooting, poor shooters are predicted too highly and great shooters too lowly [PAGE 7–8, 10]. A decision-maker who trusts the model’s point estimates at the tails will overrate bad shooters and underrate elite ones, producing a different but equally costly roster error. Spearman rank correlation is preserved, so ordinal ranking is safer than cardinal valuation, but the recursive trap is that users will treat predicted percentage as absolute truth rather than a rank-ordered index.

The clock operates on two timescales. First, the within-player clock: Players A, B, and C were tracked over 10 months, implying the data assume shooting skill is stationary across that window [PAGE 5]. If a player’s mechanical form changes mid-season, the thousands-of-shots label becomes a moving target, and the 25-shot session features may reflect a transitional state rather than enduring ability. Second, the model-update clock: the training/test split is 2/3 versus 1/3 of players at a fixed time [PAGE 7]. As rosters turn over and new shooters enter the league, the distribution of shooting abilities shifts; without retraining, the 30%–90% bounded predictor becomes stale. The paper acknowledges this only prospectively, foreseeing future learning as more data accumulates over years [PAGE 8]. The recursive theory of mind therefore nests three layers: the decision-maker’s belief about the player’s current skill, the model’s belief about that skill compressed by bounded labels, and the temporal belief that neither will remain valid over the player’s contract horizon.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The hoop geometry is fixed by the attribute definitions. Left-Right spans −9 in to +9 in and Depth spans 0 in to 18 in, implying an 18-inch rim width and front-to-back depth consistent with a standard basketball hoop [PAGE 2]. The sensor hangs approximately 13 ft above the basket and automatically determines shot location, make/miss, and entry attributes [PAGE 1]. No explicit sensor error bars or calibration drift model are provided, which is itself a veto: if the sensor’s angular or depth resolution degrades, the entire bias map and downstream features inherit unquantified measurement noise.

Biomechanical layer: The single most consequential veto is the absence of handedness data. The paper hypothesizes that the stronger right-corner lateral bias (2.34 in left vs. 1.05 in right) is due to a much higher percentage of right-handed shooters [PAGE 3], but handedness is not collected [PAGE 3]. Any attribution of the corner asymmetry to biomechanical aiming preference rather than an artifact of sample composition is therefore unverifiable from the provided data. Additionally, the analysis is restricted to stationary shots: sessions with average inter-shot movement greater than 2 feet are excluded to isolate a single shot type and increase prediction power [PAGE 9, Appendix Section 1]. This excludes off-the-dribble, contested, transition, and fatigued shots—precisely the high-leverage situations in games—so the model’s external validity is limited to catch-and-shoot, stationary 18–22 ft attempts.

Environmental layer: Basketball is indoors, so weather is not a direct veto; however, environmental consistency is assumed across the Noahlytics deployment. The paper states the system “accurately and automatically determines” shot outcomes [PAGE 1], but provides no inter-court reliability study. If rim tension, backboard rebound characteristics, or sensor mounting height vary across facilities, the pooled 22 million-shot population bias estimates could mix true shooter tendencies with venue-specific offsets.

Veto adjudication matrix: A session is admissible for the ten-dimension model only if (i) it is stationary with average movement ≤ 2 ft [PAGE 9], (ii) it lies in the 18–22 ft band [PAGE 7], and (iii) the player’s overall shooting percentage falls within the [30%, 90%] label support; otherwise prediction is extrapolation [PAGE 10]. A population bias claim is vetoed if handedness-stratified data are unavailable, because the left-right asymmetry cannot be causally assigned [PAGE 3]. Any use of the model for defended, moving, or non-stationary shots is out of distribution and must be rejected.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Handedness confound veto (lateral bias attribution). Verifiable condition: partition shots by externally recorded shooter handedness and test whether the right-corner left bias persists within right-handers and left-handers separately. If $\bar{x}^{\mathrm{LR}}_{\text{right corner, RH}} \approx \bar{x}^{\mathrm{LR}}_{\text{right corner, LH}}$ and both remain significantly left of zero, handedness is not the sole driver; if the bias vanishes within strata, handedness mediates the population effect. Prediction: because handedness is absent from the data [PAGE 3] and the authors hypothesize a right-handed majority, I predict that within right-handers the right-corner bias remains significant but attenuated relative to the population −2.34 in mean [PAGE 3], implying a mixture of lateral aiming preference and handedness composition.

Scenario 2 — Depth/GMZ distance interaction veto (long 3-pointer). Verifiable condition: recompute Figure 3B depth distributions using narrower distance bins (e.g., 24–25 ft vs. 28–29 ft) and compare mean Depth to the GMZ center for top-decile shooters only. If elite shooters’ median Depth is statistically indistinguishable from $c_{\mathrm{GMZ}}(d)$ at long distances, the 2.9 percentage-point loss for 27–30 ft shots [PAGE 4] is a population habit rather than a physical constraint. Prediction: the population mean will remain roughly 2–3 inches short of the GMZ center at 27–30 ft [PAGE 4], while elite shooters shift toward the center and recover most of the estimated loss through depth retraining.

Scenario 3 — Small-sample rank inversion veto (25-shot session). Verifiable condition: using Players A, B, and C [PAGE 5], generate 10,000 bootstrap resamples of $n=25$ stationary 18–22 ft shots and compute $P(\hat p_A^{(25)} > \hat p_C^{(25)})$, the probability that raw percentage misranks the 50% shooter above the 75% shooter in one session. If this probability exceeds roughly 0.10, raw 25-shot ranking is unreliable. Prediction: given binomial variance at $n=25$ and true means 0.50 vs. 0.75, the raw inversion probability is substantial (roughly 15–25%); the ten-dimension model should cut the inversion probability by approximately half, consistent with its halved MSE [PAGE 7], but not to zero because the bounded-label shrinkage bias preserves some residual overlap at the tails [PAGE 7–8].
</RLVR_COUNTERFACTUAL_VETOES>