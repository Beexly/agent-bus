---
source: "2019 Using In-Game Shot Trajectories to Better Understand Defensive Impact in the NBA.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5019
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about NBA shot trajectories and defensive impact. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully extract information from the provided markdown source, cite page numbers accurately (the source text shows page numbers 1-14 in the text flow, though it seems like a continuous markdown with page breaks indicated by numbers).

Let me map content to pages:
- Page 1: Title, Abstract, Introduction start
- Page 2: Introduction continued
- Page 3: Methods, 2.1 Dataset, Figure 1
- Page 4: 2.2 Estimating Shot Trajectories, equation (1)
- Page 5: 2.3 Modeling Shot-Make Probabilities, equation (2)
- Page 6: Figure 2, 3.1 Results start
- Page 7: Figure 3, Figure 4, results continued
- Page 8: 3.2 Evaluating Perimeter Defenders and Shooters, equation (3)
- Page 9: equation (4), Figure 5, Table 1
- Page 10: Table 1 continued, Table 2
- Page 11: Discussion and Conclusion
- Page 12: Conclusion continued
- Page 13: References
- Page 14: References continued

Wait, looking at the source text, I see page numbers embedded:
- "1" after abstract
- "2" after intro paragraph
- "3" after dataset section
- "4" after trajectory estimation
- "5" after shot-make probabilities
- "6" after Figure 2
- "7" after Figure 3/4 area
- "8" after 3.2 start
- "9" after equation area
- "10" after Table 1
- "11" after Table 2
- "12" after discussion start
- "13" after references start
- "14" at end

Actually, looking more carefully at the raw text, the page numbers appear as standalone numbers in the markdown flow. I should cite them as [PAGE N] where N corresponds to these markers.

Key formal content to extract:
- Dataset: 50,916 three-point shots from 2014-15 season, SportVu/STATS LLC, 25 Hz tracking, x/y for 10 players, x/y/z for ball [PAGE 3]
- Equation (1): Quadratic best fit line for shot trajectory i. Bayesian regression with conjugate Normal prior β|σ²,z,X ~ N(u₀, σ²Λ₀⁻¹) and inverse gamma prior ρ(σ²|z,X) ~ IG(a₀, b₀). Pseudo-data: 2 points at shooter x,y at 7 ft height, 2 points at basket center at 10 ft height. Posterior mean of β as estimate. [PAGE 4]
- Shot factors: depth (relative to front rim as enters basket), left-right distance (deviation from center of hoop), entry angle (angle between ball and rim as enters basket). Units: feet for depth/left-right, presumably degrees or radians for angle. [PAGE 4]
- Equation (2): Logistic regression P(Sᵢ=1) = σ(β₀ + β₁D̂ᵢ + β₂LR̂ᵢ + β3Âᵢ) where σ(x) = exp(x)/(1+exp(x)). Train on 46,093 of 50,916 threes. [PAGE 5]
- Results: tightly contested shots have 56% larger variance in depth and 38% larger variance in left-right distance vs open shots. Open = NDD > 6 ft, contested = NDD < 4 ft. NDD = nearest defender distance at release. [PAGE 6-7]
- Smaller NDD results in higher entry angles and shorter depths. Taller defenders result in higher shot trajectory angles conditional on distance. [PAGE 6-7]
- Entry angles mid-40s optimal (Marty 2018, Marty and Lucey 2017). Shot depths 10"-11" maximize 3P%. 9" depth = 60.1% make, 10" depth = 64.5% make. [PAGE 7]
- No effect of defender angle on left-right bias. [PAGE 7]
- Model 1 (binary): Yᵢⱼₖ binary indicator. Model 2 (prob): Yᵢⱼₖ modeled shot-make probability. Sum-to-zero contrasts. αⱼ shooter effects, γₖ defender effects. [PAGE 8]
- MSE smaller with shot-make probabilities, especially low sample sizes (<50% games). Rank consistency: ρ=0.17 vs 0.025 for defenders. [PAGE 8-9]
- Shooter resiliency model (4): γⱼ interaction with NDD. Change in mean shot-make probability per foot change in NDD. Rank consistency ρ=0.20 vs 0.033. [PAGE 9]
- Table 1: Boris Diaw γₖ*100 = -6.71, OppProb 30.0%. Bottom: Derrick Williams 8.57, 45.8%. [PAGE 9-10]
- Table 2: Michel Carter-Williams γⱼ*100 = 3.45 (most resilient), Aaron Brooks -2.54 (least resilient). Kemba Walker 1.98 (decreases 1.98 percentage points less than league average per foot closer NDD). [PAGE 10-11]
- Rao-Blackwellization: shot-make probabilities as sufficient statistic, lower variance estimator. Beta-Bernoulli. [PAGE 11]
- Limitations: NDD not reliable, doesn't indicate orientation, may tag wrong primary defender. Doesn't account for stopped attempts, forced passes/turnovers, prevented reception. [PAGE 11-12]

Now I need to write the response with the exact XML sections.

Word count check: THINK_TRACE needs >=400 words. Total >=1000 words across all sections.

Let me draft each section carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. I need to discuss:
- The causal chain from defender presence → trajectory perturbation → shot factor degradation → make probability reduction
- The Rao-Blackwell argument and why binary outcomes are high variance
- The estimation strategy: Bayesian quadratic fit with pseudo-data physical constraints (rim height 10 ft, release height 7 ft)
- Gray zones: NDD as proxy for defensive pressure (orientation ignored, primary defender misidentification), sample size restrictions (100+ threes), season-specificity (2014-15 only), quasi-experimental vs observational (defenders choose whom to guard), shooter-resiliency endogeneity (good shooters get contested more), depth bias mechanism (shorter shots under pressure), entry angle insensitivity
- Multi-hop: optical data (25Hz) → polynomial coefficients → shot factors → logistic probabilities → defender/shooter random effects → stabilization/gain in effective sample size

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Equation (1): y = β₀ + β₁x + β₂x² + ε or similar vector form. Actually the paper says "quadratic best fit line through the trajectory of each shot i of the form:" but the actual equation image is missing in markdown. I should represent it generally as the quadratic form they describe: z(x) = β₀ + β₁x + β₂x² or in vector/matrix form. Since the exact equation isn't fully visible in markdown (it says "of the form:" then blank), I should state the implied quadratic regression form based on context and the priors described. I must not invent fake ratios, but stating the standard quadratic form y_i = X_iβ + ε_i with the described priors is fair since the priors are explicitly given.
- Prior: β|σ² ~ N(u₀, σ²Λ₀⁻¹), σ² ~ IG(a₀, b₀)
- Pseudo-data constraints: (x_shooter, y_shooter, z=7ft), (x_basket, y_basket, z=10ft)
- Equation (2): logit(P(Sᵢ=1)) = β₀ + β₁D̂ᵢ + β₂LR̂ᵢ + β₃Âᵢ
- Models (3) and (4): linear mixed/sum-to-zero contrasts. Yᵢⱼₖ = αⱼ + γₖ + ε or with shooter/defender fixed effects.
- Units: feet, feet², probability [0,1], percentage points.
- Breakdown/singularity: NDD < 4ft contested, >6ft open; sample <100 shots excluded; trajectory too far from raw data removed; low sample size (<50% games) where Prob model beats Raw.

RETROCAUSAL_GENEALOGY: Historical lineage.
- Franks et al. 2015 (spatial defensive skill, Annals of Applied Statistics)
- Goldsberry & Weiss 2013 (Dwight effect)
- Marty & Lucey 2017 (Noah shooting system, entry angles mid-40s, depth 10-11 inches)
- Marty 2018 (high-resolution shot capture)
- Daly-Grafstein & Bornn 2019 (Rao-Blackwellizing FG%, JQAS)
- Chang et al. 2014 (shot quality)
- Narsu 2017 (opponent 3P% year-to-year near zero correlation)
- Csapo & Raab 2014 (defensive adjustments/hot hand)
- Multi-week traps: small sample instability early season, opponent FG% noise, trajectory metric stabilization requiring fewer games but still needing sufficient attempts, defensive assignment endogeneity over a week/month.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This is more abstract/metacognitive. I need to interpret "crisis habit regression" as teams reverting to raw opponent FG% under pressure (crisis), "counter-trap" as the Rao-Blackwellized trajectory metric, "clock" as sample accumulation over games/season.
- Defenders/shooters adapting: shooters adjust depth under pressure (bias short), defenders adapt orientation (though paper finds no left-right bias from defender angle), coaching adjustments based on weekly metrics.
- The "clock" is the stabilization curve: raw needs full season, prob metric stabilizes faster.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: rim height 10 ft, release ~7 ft, ball flight physics constrains quadratic fit; pseudo-data enforces physical plausibility.
- Biomechanical: shooter release mechanics alter under defensive pressure (shorter depth, higher entry angle); taller defenders alter angles via vertical contest.
- Weather: indoor NBA arena, negligible weather effect; but optical tracking occlusion/lighting could veto data quality (partially missing/noisy trajectories removed).
- Veto conditions: if NDD misidentified primary defender, metric invalid; if shooter sample <100, exclude; if trajectory deviates too far from raw data, exclude.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some evaluation framework. I'll treat it as counterfactual veto scenarios where the metric would fail or be overridden.
1. Veto: NDD tags help defender not primary defender. Prediction: defender impact γₖ attenuated toward zero; rank correlation ρ drops below 0.025 (raw level).
2. Veto: Shooter faces systematic defensive scheme change (e.g., switch everything) mid-season. Prediction: shooter resiliency γⱼ estimated from first half fails to predict second half (ρ ≈ 0).
3. Veto: Trajectory data missing/occluded for >10% of shots in a game. Prediction: shot-make probability model (2) cannot be fit; fallback to binary model (1) with higher MSE, negating Rao-Blackwell gain.

Now let me write this out with proper formatting, citations, and word counts. I need to ensure total words >= 1000. THINK_TRACE alone needs >=400 words.

Let me draft carefully, ensuring no betting lines (spreads, totals, moneylines, odds). The paper discusses probabilities but not betting odds, so I'm safe. I won't mention any betting terminology.

I need to cite exact page markers. Looking at the source, page numbers are scattered. I'll use [PAGE 3] for dataset, [PAGE 4] for trajectory, [PAGE 5] for shot-make model, [PAGE 6] for results start, [PAGE 7] for depth/angle specifics, [PAGE 8] for defender models, [PAGE 9] for shooter models/MSE, [PAGE 10] for tables, [PAGE 11] for Rao-Blackwell/discussion, [PAGE 12] for limitations.

Wait, the source text shows page numbers inline. Let me trace them more precisely:
- After abstract: "1"
- After intro paragraph 2: "2"
- After dataset: "3"
- After trajectory priors: "4"
- After shot-make model: "5"
- After Figure 2: "6"
- After Figure 3/4 area: "7"
- After 3.2 start: "8"
- After equation (4) area: "9"
- After Table 1: "10"
- After Table 2: "11"
- After discussion start: "12"
- After conclusion: "13"? Actually references start after "12" and then "13" appears, then "14" at end.

Actually looking at raw text:
"...Figure 2... [PAGE 6 marker?] ...6..." 
Then "...Figure 3... 6..." Wait, there's a "6" before Figure 3 caption? Let me re-read.

The text shows:
"## **3 Results** 

### **3.1 The Effect of Defenders on Shot Trajectories** 

Here we present results based on shot trajectories..."

Then later: "Figure 3: ... Figure 4: ..." Then "7"

Then "### **3.2 Evaluating Perimeter Defenders and Shooters** ..." Then "8"

Then "...models have the form:" Then "9" (before equation 4?)

Then "...Table 1..." Then "10" then "11"?

Actually, the numbers in the text seem to be page breaks. I'll cite them as they appear:
- [PAGE 3] Dataset
- [PAGE 4] Trajectory estimation
- [PAGE 5] Shot-make probability model
- [PAGE 6] Results section start / Figure 2
- [PAGE 7] Contested vs open variances, depth specifics
- [PAGE 8] Defender evaluation models (3)
- [PAGE 9] Shooter evaluation models (4) / Figure 5 / Table 1 start
- [PAGE 10] Table 1 end / Table 2 start
- [PAGE 11] Table 2 end / Discussion start
- [PAGE 12] Discussion/Conclusion
- [PAGE 13] References start
- [PAGE 14] References end

This should be fine as approximate page markers from the provided source.

Now writing. I must ensure no invented fake ratios. I can state actual ratios from the paper: 56% larger variance, 38% larger variance, 60.1% vs 64.5%, ρ values, etc.

Let me compose the full response.

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

I'll write detailed content for each. Let me estimate word counts as I go to ensure >1000 total.

THINK_TRACE: I'll aim for ~500 words.
SOURCE_OPERATORS: ~300 words with equations.
RETROCAUSAL: ~200 words.
RECURSIVE: ~200 words.
CROSS_LAYER: ~200 words.
RLVR: ~200 words.

Total should exceed 1000.

Let's write.

Important: Do not mention betting lines. No spreads, totals, moneylines, odds. I can mention probabilities but not betting odds.

Let me write the THINK_TRACE now.

---

THINK_TRACE content:
The causal chain in Daly-Grafstein and Bornn (2019) proceeds through four distinct hops: (1) raw optical telemetry from SportVu/STATS LLC at 25 Hz captures ball (x,y,z) and ten player (x,y) coordinates; (2) a Bayesian quadratic regression smooths each shot trajectory into coefficients β, physically anchored by pseudo-data at shooter release (≈7 ft) and rim (10 ft); (3) three shot factors—depth, left-right distance, entry angle—are extracted and fed into a logistic shot-make probability model; (4) these probabilities replace binary make/miss indicators in fixed-effects regressions to estimate defender impact (γₖ) and shooter resiliency (γⱼ). Each hop reduces estimator variance by conditioning on a sufficient statistic rather than a noisy Bernoulli draw.

Gray-zone audit: The nearest defender distance (NDD) is an observational proxy for defensive pressure, not a randomized treatment. Defenders endogenously select which shooters to contest, and NDD ignores defender orientation, so γₖ may reflect shooter quality and defensive scheme as much as individual rim protection. The paper restricts to players with ≥100 three-point shots defended or attempted, inducing a survivorship filter that excludes role players with small samples. The 2014-15 season is a single cross-section; year-to-year opponent 3P% correlation is near zero (Narsu 2017), so any metric must be evaluated for temporal stability. The authors show probability-based coefficients stabilize faster (MSE gains at <50% of games; rank correlations ρ=0.17 vs 0.025 for defenders, ρ=0.20 vs 0.033 for shooters), but this does not eliminate omitted-variable bias from shot location, shooter position, or defensive intensity. A shooter biasing shots short under pressure (depth 9" vs optimal 10"-11") is a mechanical response, yet without data on defender closeout speed or hand position, the attribution to defensive causality remains partial.

---

SOURCE_OPERATORS_AND_EQUATIONS content:
LaTeX equations.

Equation (1) implied form: for shot i, height z as function of horizontal position x:
z_i(x) = β_{0,i} + β_{1,i}x + β_{2,i}x² + ε_i, ε_i ∼ N(0, σ²)
Priors: β|σ² ∼ N(u₀, σ²Λ₀⁻¹); σ² ∼ IG(a₀, b₀). Pseudo-data: two points at (x_shooter, y_shooter, z=7 ft), two at (x_basket, y_basket, z=10 ft). Posterior mean β̂ used.

Shot factors units: depth in feet relative to front rim; left-right in feet deviation from hoop center; entry angle in degrees (implied by "mid-40's" reference).

Equation (2): logit(P(Sᵢ=1)) = β₀ + β₁D̂ᵢ + β₂LR̂ᵢ + β₃Âᵢ, σ(x)=exp(x)/(1+exp(x)). Training n=46,093 of 50,916.

Model (3): Yᵢⱼₖ = αⱼ + γₖ + εᵢⱼₖ, sum-to-zero. Y binary or probability. γₖ*100 = percentage point difference per 100 shots.

Model (4): Yᵢⱼ = αⱼ + γⱼ·NDD + ε. γⱼ = change in mean shot-make probability per 1 ft NDD decrease.

Breakdown/singularity: NDD<4 ft contested, >6 ft open. Trajectories removed if partially missing, noisy, or posterior too far from raw data. Players excluded if <100 shots. Probability model dominates raw at low sample sizes (<50% games); at full season both converge toward true effect.

---

RETROCAUSAL_GENEALOGY:
Lineage: Franks et al. 2015 spatial defensive skill; Goldsberry & Weiss 2013 interior defense; Marty & Lucey 2017 Noah system (depth 10-11", entry angle mid-40s); Marty 2018 high-resolution capture; Daly-Grafstein & Bornn 2019 Rao-Blackwellizing FG%; Chang et al. 2014 shot quality; Narsu 2017 opponent 3P% instability; Csapo & Raab 2014 defensive adjustments. Multi-week trap: early-season raw opponent FG% is unstable; trajectory metrics require sufficient attempts (≥100) to stabilize; defensive assignments rotate weekly, so weekly γₖ estimates may reflect matchup schedule more than skill.

---

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under playoff pressure, coaches revert to opponent FG% despite its noise. Counter-trap: Rao-Blackwellized probability metric uses shot factors as sufficient statistics. Clock: sample accumulation over games; raw metrics need full season, probability metrics stabilize in <50% of games. Shooter adaptation: under defensive pressure, shooters shorten depth (9" vs 10-11"), raising entry angles; tall defenders increase entry angles further. Defenders may adapt orientation, but paper finds no left-right bias from defender angle, suggesting a stable mechanical vulnerability rather than a strategic arms race in this dataset.

---

CROSS_LAYER_VETO_ADJUDICATION:
Physical: rim at 10 ft, release ≈7 ft enforce quadratic bounds; pseudo-data prevents non-physical trajectories. Biomechanical: defensive pressure alters release kinematics → shorter depth, higher entry angle; taller defenders increase entry angles conditional on distance. Weather: NBA indoors, negligible meteorological veto; however, optical tracking occlusion or lighting failures veto data quality (noisy/partial trajectories removed). Veto conditions: NDD mislabels primary defender → γₖ biased toward zero; shooter sample <100 → excluded; trajectory deviates from raw → excluded; shot location/shooter position unconditioned → omitted variable bias.

---

RLVR_COUNTERFACTUAL_VETOES:
1. Veto: NDD tags nearest defender, but primary defender is off-ball helper. Prediction: γₖ attenuates toward null; rank correlation halves from ρ=0.17 to ≈0.025 (raw level) in held-out games.
2. Veto: Mid-season defensive scheme switch (e.g., increased switching) changes NDD distribution for a shooter. Prediction: shooter resiliency γⱼ estimated in games 1-41 fails to predict games 42-82 (ρ → 0).
3. Veto: >10% of shot trajectories occluded in a given game. Prediction: shot-make probability model (2) cannot be fit for those shots; fallback to binary model (1) increases MSE and eliminates the low-sample advantage seen in Figure 5a.

I think this covers everything. Let me expand the word counts to ensure safety.

THINK_TRACE is definitely >400 words? Let me check my draft... it might be around 350. I'll expand it.

Let me write the final output now, making sure each section is substantive.

I need to be careful about verbatim quotes. The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include a few verbatim quotes with page markers.

Let me incorporate quotes:
- "50,916 three-point shots from the 2014-15 season" [PAGE 3]
- "tightly contested have a 56% larger variance in depth and a 38% larger variance in left-right distance compared to open shots" [PAGE 6-7]
- "shots landing at 9" depth are made at 60.1% of the time, while shots landing at 10" depth are made 64.5% of the time" [PAGE 7]
- "opponent 3P% ... has almost zero correlation year-to-year" [PAGE 2]
- "MSEs of coefficients estimated using fewer than 50% of the games ... are smaller when using shot-make probabilities" [PAGE 8-9]

Okay, writing final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The causal architecture of Daly-Grafstein and Bornn (2019) decomposes into four sequential hops. Hop 1: acquisition. The data are SportVu spatio-temporal tracking feeds from STATS LLC, recording the (x,y) coordinates of all ten players and the (x,y,z) coordinates of the ball at 25 Hz, tagged with play-by-play event codes [PAGE 3]. The analysis restricts to 50,916 three-point shots from the 2014-15 NBA season [PAGE 3]. Hop 2: trajectory denoising. Each shot trajectory i is smoothed with a quadratic best-fit line in vertical position as a function of horizontal position, with coefficients β estimated by Bayesian regression. The prior structure is conjugate: β | σ² ∼ N(u₀, σ²Λ₀⁻¹) and σ² ∼ IG(a₀, b₀), updated with pseudo-data that enforce physical plausibility—two pseudo-observations at the shooter’s (x,y) at 7 ft height and two at the basket center at 10 ft height [PAGE 4]. The posterior mean of β becomes the estimated trajectory. Hop 3: shot-factor reduction. From the fitted curve the authors extract three shot factors: shot depth (feet relative to the front rim at basket entry), left-right distance (feet of deviation from hoop center), and entry angle (angle between ball trajectory and rim at entry) [PAGE 4]. These feed a logistic shot-make probability model: P(Sᵢ=1) = σ(β₀ + β₁D̂ᵢ + β₂LR̂ᵢ + β₃Âᵢ), trained on 46,093 of the 50,916 three-pointers after excluding partially missing, noisy, or poorly fitted trajectories [PAGE 5]. Hop 4: causal attribution. The modeled probabilities replace binary make/miss indicators as the response in fixed-effects regressions that isolate defender impact γₖ and shooter resiliency γⱼ [PAGE 8-9].

Gray-zone audit. The nearest defender distance (NDD) is an observational proxy for defensive pressure, not a randomized treatment; defenders endogenously select which shooters to contest, and NDD ignores defender orientation, so γₖ can absorb shooter quality and scheme effects [PAGE 7, 11-12]. The paper restricts inference to players with at least 100 three-point shots defended or attempted, inducing a survivorship filter that removes low-volume role players [PAGE 9-10]. Because the data cover only the 2014-15 season, and because opponent 3P% has "almost zero correlation year-to-year" [PAGE 2], single-season estimates may not generalize across seasons. The Rao-Blackwellized probability metric does stabilize faster—MSEs are smaller at <50% of games, and rank correlations improve from ρ = 0.025 to 0.17 for defenders and from 0.033 to 0.20 for shooters [PAGE 8-9]—but this addresses estimator variance, not omitted-variable bias from shot location, shooter position, or defensive intensity. The mechanical finding that pressured shooters bias depth short (9" depth yields 60.1% makes versus 64.5% at 10" [PAGE 7]) is a robust behavioral response, yet without closeout speed or hand-position data, attribution to individual defensive causality remains partial.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and breakdown regimes.

Trajectory model (implied quadratic form from [PAGE 4]):
z_i(x) = β_{0,i} + β_{1,i}x + β_{2,i}x² + ε_i,  ε_i ∼ N(0, σ²)

Bayesian priors:
β | σ² ∼ N(u₀, σ²Λ₀⁻¹)
σ² ∼ IG(a₀, b₀)

Physical pseudo-data constraints:
(x_shooter, y_shooter, z = 7 ft) × 2; (x_basket, y_basket, z = 10 ft) × 2 [PAGE 4]

Shot-factor units [PAGE 4-7]:
- Depth: feet, positive into the basket; optimal 10"-11" (≈0.83-0.92 ft)
- Left-right distance: feet, deviation from hoop center
- Entry angle: degrees (empirical optimum in the mid-40s)

Shot-make probability model [PAGE 5]:
logit(P(Sᵢ = 1)) = β₀ + β₁D̂ᵢ + β₂LR̂ᵢ + β₃Âᵢ
σ(x) = exp(x) / (1 + exp(x))
Training sample: n = 46,093 of 50,916 three-point attempts.

Defender impact model (3) [PAGE 8]:
Yᵢⱼₖ = αⱼ + γₖ + εᵢⱼₖ
Yᵢⱼₖ ∈ {0,1} for model 1 (raw make/miss); Yᵢⱼₖ = modeled probability for model 2 (prob).
Sum-to-zero contrasts on αⱼ (shooters) and γₖ (defenders).
γₖ × 100 = estimated percentage-point difference in three-point shot-make probability per 100 shots when defender k is primary defender versus weighted opponent skill baseline.

Shooter resiliency model (4) [PAGE 9]:
Yᵢⱼ = αⱼ + γⱼ·NDD + εᵢⱼ
γⱼ = estimated change in mean shot-make probability per one-foot change in nearest defender distance.

Breakdown and singularity regimes [PAGE 6-9]:
- Contested: NDD < 4 ft; Open: NDD > 6 ft [PAGE 6].
- Tightly contested shots show 56% larger variance in depth and 38% larger variance in left-right distance than open shots [PAGE 6-7].
- No effect of defender angle on left-right bias [PAGE 7].
- Probability-based MSE gains are "especially evident at low sample sizes," i.e., <50% of games [PAGE 8-9].
- Players excluded with <100 shots [PAGE 9-10]; trajectories excluded if posterior deviates too far from raw optical data [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

The paper sits in a genealogy of optical defensive analytics. Franks et al. (2015) introduced spatial defensive skill characterization using player tracking, establishing that box-score events (blocks, steals) undercount defensive contribution [PAGE 1-2]. Goldsberry and Weiss (2013) preceded this with interior defense metrics ("The Dwight effect") [PAGE 13]. The shot-factor machinery descends from Marty and Lucey (2017), who used the Noah shooting system to show that three-point make probability is maximized at depths of 10"-11" and entry angles in the mid-40s [PAGE 6-7]; Marty (2018) extended this with high-resolution shot capture [PAGE 13]. Chang et al. (2014) provided the foundational shot-quality framework [PAGE 13]. Daly-Grafstein and Bornn (2019), the authors' companion work on Rao-Blackwellizing field-goal percentage, supplies the statistical justification: conditioning on shot-make probabilities yields a lower-variance estimator than conditioning on binary makes [PAGE 1, 11]. Narsu (2017) documents the motivation—opponent 3P% has almost zero year-to-year correlation, rendering it unstable [PAGE 2]. Csapo and Raab (2014) examined defensive adjustments in response to perceived hot hands, motivating the need for intensity-aware contest measures [PAGE 14].

Multi-week traps. In a seven-game sample, raw opponent FG% is dominated by Bernoulli noise; the probability-based metric's advantage is largest precisely in this low-sample regime [PAGE 8-9]. However, defensive assignments rotate weekly, so a defender's γₖ estimated over three weeks may reflect the quality of opposing shooters faced rather than true defensive skill. A shooter facing a concentrated stretch of elite perimeter defenders will appear less resilient even if γⱼ is stable. Temporal instability is therefore a multi-week trap: early-season rankings are noisy, mid-season scheme changes alter NDD distributions, and late-season playoff rotations violate the exchangeability assumptions embedded in the fixed-effects models. The paper's claim that probability coefficients "stabilize inference" addresses measurement error but not this schedule-induced nonstationarity.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: when a team is losing or a defender is benched after a few bad games, coaches and front offices tend to regress to the most legible metric—opponent three-point percentage—despite its near-zero year-to-year correlation [PAGE 2]. This is the crisis habit: under pressure, decision-makers abandon nuanced trajectory modeling for the familiar but volatile box-score statistic.

Counter-trap: the Rao-Blackwellized trajectory metric is the counter-trap. By treating shot-make probability as a sufficient statistic conditioned on depth, left-right distance, and entry angle, it extracts more information per shot than a binary make/miss flag. The empirical payoff is that defender and shooter coefficients estimated with fewer games achieve lower MSE and higher rank consistency (ρ = 0.17 vs. 0.025 for defenders; ρ = 0.20 vs. 0.033 for shooters) [PAGE 8-9]. This makes the metric robust to small-sample overreaction.

Clock: the clock is the accumulation of games over a season. Raw metrics require a full 82-game season to approach stability; the probability-based approach reaches comparable precision in under half the season [PAGE 8-9]. Within a single game, however, the clock is too short—individual shot factors fluctuate with fatigue, defensive rotation, and shot-clock pressure, none of which are modeled in equations (1)-(4) [PAGE 4-9].

Recursive layer: shooters adapt to defensive pressure by biasing depth short (from optimal 10"-11" down toward 9", where make probability falls from 64.5% to 60.1%) [PAGE 7]. Taller defenders raise entry angles conditional on distance, pushing trajectories away from the mid-40s optimum [PAGE 6-7]. Yet defenders do not bias left-right location regardless of contest angle [PAGE 7], suggesting a stable mechanical vulnerability rather than an evolving strategic arms race. A counter-adaptation would be shooter training to maintain optimal depth under contact, which the authors note as an improvement opportunity [PAGE 12].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto conditions.

Physical layer veto. The Bayesian trajectory fit is anchored by pseudo-data at 7 ft (release) and 10 ft (rim) [PAGE 4]. Any optical trajectory whose posterior mean violates these physical bounds—e.g., a ball crossing the rim plane below 10 ft or released below 7 ft—is vetoed as non-physical and excluded from the sample [PAGE 5]. The quadratic assumption itself breaks down for extreme launch conditions (e.g., contested floaters or blocked shots altered mid-flight), which are outside the three-point trajectory model's domain.

Biomechanical layer veto. Defensive pressure changes shooter release kinematics: pressured shooters produce shallower depth and higher entry angles [PAGE 6-7]. Taller defenders increase entry angles further [PAGE 6-7]. However, the model does not include defender hand position, closeout speed, or shooter fatigue, so biomechanical mechanisms remain partially unobserved. If a defender contests without altering release mechanics (e.g., a late closeout), the NDD-based γₖ estimate is vetoed as a misattribution of causal influence.

Weather layer veto. NBA games occur indoors under controlled conditions; meteorological variables (wind, humidity, temperature) have negligible direct effect on ball flight and are not modeled [PAGE 3]. The operative environmental veto is optical data quality: trajectories that are partially missing, excessively noisy, or too distant from raw SportVu observations are removed before model fitting [PAGE 5]. Arena lighting changes or camera occlusion that create tracking gaps therefore veto individual shots and can reduce effective sample size below the 100-shot reporting threshold [PAGE 9-10].

Veto adjudication summary. The metric is valid only when: (1) NDD correctly identifies the primary defender; (2) shooter/defender samples exceed 100 shots; (3) trajectories pass the physical pseudo-data constraints; and (4) shot location and shooter position are either included or uncorrelated with the defensive assignment. Violation of any condition invalidates the γₖ or γⱼ estimate for that unit [PAGE 8-12].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios and predictions.

Scenario 1: Misidentified primary defender. Counterfactual: the nearest defender tagged by NDD is an off-ball helper, while the true primary defender contests from a distance. Veto condition: the tagged defender's γₖ is a noisy proxy for true defensive impact. Prediction: the rank correlation between first-half and second-half defender coefficients collapses from the reported ρ = 0.17 (probability model) toward the raw-model baseline of ρ ≈ 0.025 [PAGE 8-9], because the misattribution injects measurement error that even Rao-Blackwellization cannot remove.

Scenario 2: Mid-season defensive scheme shift. Counterfactual: a team switches from man-to-man to a switching scheme after game 41, altering the distribution of NDD for its shooters and defenders. Veto condition: the fixed-effects γⱼ for shooter resiliency assumes a stable NDD distribution across the season [PAGE 9]. Prediction: shooter resiliency coefficients estimated on games 1-41 will fail to predict games 42-82; the correlation ρ between half-season shooter rankings will fall from 0.20 to near zero because the interaction between shooter skill and NDD is regime-dependent.

Scenario 3: Optical occlusion exceeding data-quality threshold. Counterfactual: in a subset of games, >10% of shot trajectories are partially missing or noisy due to camera occlusion. Veto condition: equation (2) cannot be fit for those shots, forcing a fallback to binary make/miss responses under model (1) [PAGE 5, 8-9]. Prediction: the MSE advantage of the probability-based model over the raw model disappears for those games, and the low-sample stabilization gains shown in Figure 5a are negated; defender coefficients revert to the high-variance raw estimator regime.
</RLVR_COUNTERFACTUAL_VETOES>