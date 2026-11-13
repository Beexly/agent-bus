---
source: "2019 Using In-Game Shot Trajectories to Better Understand Defensive Impact in the NBA - Daly Grafstein, Bornn.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4259
---

<NATIVE_REASONING>
The user is asking me to analyze a research paper about NBA shot trajectories and defensive impact. They want me to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis covering all these sections with at least 1000 words total, with the THINK_TRACE alone being at least 400 words.

Let me structure this carefully.

**THINK_TRACE (>=400 words):**
Deep multi-hop derivation and gray-zone audit. I need to trace:
- How shot trajectories are estimated from optical tracking data (SportVu, 25 Hz)
- Bayesian quadratic regression for trajectory fitting
- Three shot factors: depth, left-right distance, entry angle
- Logistic regression for shot-make probabilities
- Rao-Blackwellization argument: conditioning binary outcomes on modeled probabilities reduces variance
- Why opponent 3P% is unstable (near-zero year-to-year correlation, Narsu 2017)
- How NDD affects depth (bias short), entry angle, variability (56% larger variance in depth, 38% larger in left-right)
- Defender height effects on entry angles but not as much on depth
- Defender angle (left/right) doesn't bias left-right trajectory
- Metrics: gamma_k for defenders, gamma_j for shooter resiliency
- MSE improvements at low sample sizes (<50% games)
- Rank consistency improvements (rho = 0.17 vs 0.025 for defenders; 0.20 vs 0.033 for shooters)
- Gray zones: NDD is imperfect proxy for defensive pressure (doesn't capture orientation, primary defender identity, intensity); model (3) is simple mean per player, doesn't condition on shot location, shooter position, NDD; metrics don't capture shot prevention/forcing turnovers; data restricted to 2014-15 season, 50,916 three-point shots; pseudo-data specification in Bayesian prior might introduce bias if trajectory assumptions wrong; entry angle effect may be minor compared to depth effect; "Opp Prob" column in Table 1 shows mean estimated shot-make probability but doesn't separate shooter quality from defender impact perfectly despite weighting.

**SOURCE_OPERATORS_AND_EQUATIONS:**
Need formal LaTeX:
- Equation (1): E(Z_i) = β_0 + β_1 x_i + β_2 y_i + β_3 x_i^2 + β_4 y_i^2 + β_5 x_i y_i
- Bayesian priors: ρ(β|σ²,z,X) ~ N(u_0, σ²Λ_0⁻¹), ρ(σ²|z,X) ~ IG(a_0, b_0)
- Pseudo-data: 4 points, 2 at shooter location height 7 ft, 2 at basket center height 10 ft
- Equation (2): P(S_i=1) = σ(β_0 + β_1 D̂_i + β_2 LR̂_i + β_3 Â_i + β_4 D̂_i² + β_5 LR̂_i² + β_6 Â_i² + β_7 D̂_i LR̂_i + β_8 D̂_i Â_i + β_9 LR̂_i Â_i)
- σ(x) = exp(x)/(1+exp(x))
- Units: feet for depth, left-right distance; degrees or radians for entry angle (mid-40's degrees optimal); probability [0,1] for shot-make probability
- Equation (3): Y_ijk = β_0 + α_j + γ_k
- Equation (4): Y_ij = β_0 + α_j + γ_j * NDD_ij
- Table 1 values: Boris Diaw γ_k*100 = -6.71, Opp Prob 30.0%; Derrick Williams +8.57, Opp Prob 45.8%
- Table 2 values: Michel Carter-Williams +3.45; Aaron Brooks -2.54; Kemba Walker +1.98 (decreases 1.98 pp less than league average per foot closer)
- NARSU: opponent 3P% almost zero year-to-year correlation
- MSE comparisons Figure 5a/5b; rank consistency rho values

Breakdown regimes:
- When shot trajectories partially missing/noisy/too far from raw data -> removed (46,093 used out of 50,916)
- NDD definitions: open > 6 ft, contested < 4 ft
- Shot depth optimal: 10"-11" (Marty and Lucey 2017); in dataset 9" depth = 60.1% make, 10" depth = 64.5% make
- Entry angle mid-40's degrees optimal
- Sample size restriction: players with at least 100 three-point shots defended/attempted

**RETROCAUSAL_GENEALOGY:**
Historical lineage:
- Chang et al. 2014 "Quantifying Shot Quality in the NBA" (MIT Sloan)
- Franks et al. 2015 spatial structure of defensive skill, Annals of Applied Statistics
- Goldsberry and Weiss 2013 "The Dwight effect"
- Marty and Lucey 2017 data-driven 3-point shooting (Noah shooting system)
- Marty 2018 high-resolution shot capture
- Daly-Grafstein and Bornn 2019 Rao-Blackwellizing FG% (JQAS)
- Narsu 2017 shot defense metrics
- Csapo and Raab 2014 hot hand defensive adjustments
- Multi-week traps: year-to-year instability of opponent 3P% means single-season evaluations are noisy; within-season half splits show low correlation (0.025 raw vs 0.17 prob); small sample sizes (<50 games) produce unstable gamma estimates; defender rankings flip without probability smoothing.

**RECURSIVE_THEORY_OF_MIND:**
Crisis habit regression vs counter-trap vs clock:
- Crisis habit regression: When defenders face high-leverage moments (crunch time), do they revert to habitual close-out patterns? The paper doesn't explicitly study time/clock, but NDD as a static measure ignores dynamic crisis adaptation. Shooters under pressure bias shots short (depth crisis) — a motor regression under defensive pressure.
- Counter-trap: Offenses knowing defenders bias shots short might adjust arc/depth; defenders knowing shooters bias short might alter close-out timing. The paper's metric doesn't account for this game-theoretic adaptation (defender affecting shot volume, forcing passes/turnovers).
- Clock: The tracking data is 25 Hz, but the paper collapses trajectories to static factors, discarding temporal evolution (release-to-rim time, defender recovery speed). "Clock" here means game clock/shot clock context missing; NDD at release doesn't capture how pressure evolved during the drive/kick.

**CROSS_LAYER_VETO_ADJUDICATION:**
Physical/biomechanical/weather veto proof:
- Physical: Optical tracking at 25 Hz may miss ball release instant or rim contact; ball is occluded by players; quadratic assumption (1) may fail for shots with unusual arc or deflections.
- Biomechanical: Shooter fatigue, shooting mechanics under contest, defender hand height not modeled (only defender height as scalar, not arm reach/wingspan); entry angle depends on release mechanics which degrade under defensive pressure.
- Weather: Indoor NBA arena, so weather is controlled, but arena humidity/temperature could theoretically affect ball flight — negligible and not modeled; more relevant is court surface/rim consistency across arenas (not addressed).
- Veto conditions: If NDD is mislabeled (closest defender isn't primary defender), gamma_k is biased. If trajectory model (1) posterior mean is poor due to non-informative hyper-priors mis-specified, shot factors are measurement-error covariates in logistic regression (2), causing attenuation bias. If shooter and defender are non-randomly matched (selection bias: good defenders guard good shooters), alpha_j and gamma_k are confounded.

**RLVR_COUNTERFACTUAL_VETOES:**
3 verifiable RLVR (Reinforcement Learning Verifiable Rewards?) veto scenarios + predictions. I should frame these as verifiable counterfactual vetoes:
1. Veto: If a defender's gamma_k estimated from model (2) changes sign when restricting to shots where NDD < 4 ft vs 4-6 ft, the global metric is vetoed because the effect is heterogeneous by contest intensity. Prediction: Rim protectors who rarely guard perimeter will show inflated negative gamma_k when forced into spot-up closeouts; their conditional NDD<4ft effect will be positive (harmful) while overall is negative due to mostly open shots.
2. Veto: If shot-make probability model (2) is recalibrated using entry angle in radians instead of the paper's functional form and the optimal depth shifts from 10" to outside [9", 11"], the Rao-Blackwell variance reduction claim fails for that subset. Prediction: For corner 3s vs top-of-key 3s, optimal entry angle differs; pooling all locations biases gamma_k.
3. Veto: If shooter gamma_j from model (4) is estimated on first half of season and predicts second half actual makes with calibration error >5% (Brier score increase), the probability smoothing is vetoed as overfit. Prediction: Low-volume shooters (<150 attempts) will show spurious resiliency rankings; only players with >300 attempts will have stable gamma_j across halves.

Now I need to write this with >=1000 words total across sections. Let me make sure THINK_TRACE is >=400 words by itself.

Let me draft carefully, ensuring no betting language. No "spreads," "totals," "moneylines," "odds." I can mention "probability" and "percentage" which are fine.

I need exact [PAGE N] markers and verbatim quotes where appropriate. Let me include some quotes.

Quotes to use:
- Page 1: "As 3-point shooting in the NBA continues to increase, the importance of perimeter defense has never been greater."
- Page 2: "players' opponent 3P% ... has almost zero correlation year-to-year (Narsu 2017)."
- Page 2: "commonly used advanced metrics like defensive rating and adjusted plus/minus do not give us information about why certain defenders are effective or not."
- Page 5: Rao-Blackwellize language: "we can effectively Rao-Blackwellize shooting metrics and their derivatives by conditioning each shot's binary outcome on its make probability"
- Page 6: "shots that are tightly contested have a 56% larger variance in depth and a 38% larger variance in left-right distance compared to open shots"
- Page 7: "shot depths between 10" and 11" maximize 3P%. In our dataset, shots landing at 9" depth are made at 60.1% of the time, while shots landing at 10" depth are made 64.5% of the time."
- Page 9: "we find that when comparing ranks of defenders from the first and second half of the 2014-15 season, coefﬁcients estimated using shot-make probabilities outperform those estimated with make/miss outcomes in terms of consistency of player ranks (ρ = 0.17 vs. 0.025, respectively)."
- Page 10: "(ρ = 0.20 vs. 0.033, respectively)" for shooters.
- Page 12: "nearest defender distance is not the most reliable way to quantify the defensive pressure on a shot."
- Page 12: "These metrics do not take into account defenders who stopped opponents from attempting a shot, forced their opponent to pass or create a turnover, or even prevented the opponent shooter from receiving the ball altogether."

Let me write the full response now. I'll aim for substantial depth.

Word count check: I need >=1000 words total. THINK_TRACE >=400. I'll make each section robust.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation moves from raw SportVu optical tracking to a defended-perimeter causal estimand through four nested layers. First, the measurement layer: 50,916 three-point attempts from the 2014–15 NBA season are recorded at 25 Hz with x,y coordinates for all ten players and x,y,z for the ball [PAGE 3]. Because the ball is only sparsely observed near the rim, the authors fit a Bayesian quadratic surface per shot, Equation (1), E(Zᵢ) = β₀ + β₁xᵢ + β₂yᵢ + β₃xᵢ² + β₄yᵢ² + β₅xᵢyᵢ [PAGE 4]. Four pseudo-data points anchor the conjugate Normal–inverse-gamma prior: two at the shooter's location at 7 feet height and two at basket center at 10 feet height [PAGE 4]. If the optical track is partially missing, excessively noisy, or the posterior mean trajectory deviates too far from raw observations, the shot is discarded; only 46,093 of 50,916 trajectories survive into the probability model [PAGE 5]. This censoring rule is a gray zone: systematic exclusion of difficult tracks (e.g., heavily contested shots where the ball is occluded by the defender's hand) could induce survivorship bias in the estimated defender effects.

Second, the shot-factor layer reduces each posterior trajectory to three scalars—depth (feet relative to front rim at basket entry), left-right distance (feet from hoop center), and entry angle (angle between ball trajectory and rim plane) [PAGE 5]. These feed a logistic regression, Equation (2), mapping shot factors to P(Sᵢ=1), with linear, quadratic, and pairwise interaction terms [PAGE 5]. The output is a modeled shot-make probability in [0,1] for every attempt.

Third, the Rao-Blackwell layer replaces binary make/miss with this conditional probability. As stated on [PAGE 5], "we can effectively Rao-Blackwellize shooting metrics and their derivatives by conditioning each shot's binary outcome on its make probability." The logic: if shots are Beta–Bernoulli, the shot-make probability is a sufficient statistic for shooting ability; conditioning on it yields lower-variance estimators of player effects [PAGE 12]. This addresses the documented instability of opponent 3P%, which "has almost zero correlation year-to-year (Narsu 2017)" [PAGE 2].

Fourth, the inference layer fits two player-effect models. Model (3), Y_ijk = β₀ + αⱼ + γₖ, estimates shooter (αⱼ) and defender (γₖ) impacts using either binary outcomes or shot-make probabilities [PAGE 8–9]. Model (4), Y_ij = β₀ + αⱼ + γⱼ·NDD_ij, estimates shooter-by-defender-pressure interactions [PAGE 9–10]. The payoff is visible in rank consistency: for defenders, shot-probability coefficients yield within-season half-split rank correlation ρ = 0.17 versus ρ = 0.025 for raw make/miss; for shooters, ρ = 0.20 versus 0.033 [PAGE 9–10]. MSE gains are largest below 50% of season games [PAGE 9, Figure 5].

Gray-zone audit: (1) NDD is an imperfect pressure proxy—it ignores defender orientation, primary-defender identity, and contest intensity, and may misattribute the nearest defender [PAGE 12]. (2) Model (3) estimates unconditional means without conditioning on shot location, shooter position, or NDD [PAGE 12]. (3) The metrics ignore shot prevention: defenders who deter attempts, force passes, or cause turnovers receive no credit [PAGE 12]. (4) Depth is the dominant channel: contested shots show 56% larger depth variance and 38% larger left-right variance than open shots, and shooters bias shorter under pressure—9" depth converts at 60.1% versus 64.5% at 10" [PAGE 6–7]. Entry-angle effects from taller defenders exist but may be minor because make probability is relatively flat across entry angles [PAGE 7]. (5) Defender approach angle (left vs. right) does not bias left-right trajectory [PAGE 7]. These constraints bound any strong causal claim about individual defender impact from this data alone.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Trajectory estimation (Equation 1), [PAGE 4]:**
E(Zᵢ) = β₀ + β₁xᵢ + β₂yᵢ + β₃xᵢ² + β₄yᵢ² + β₅xᵢyᵢ

Units: xᵢ, yᵢ in feet on court plane; Zᵢ in feet (ball height). β coefficients carry mixed units (ft, ft⁻¹, ft⁻²) such that E(Zᵢ) returns feet.

**Bayesian priors, [PAGE 4]:**
ρ(β|σ²,z,X) ∼ N(u₀, σ²Λ₀⁻¹),  ρ(σ²|z,X) ∼ IG(a₀, b₀)

Pseudo-data: 4 points; two at shooter (x,y) at z = 7 ft, two at basket center at z = 10 ft [PAGE 4]. Posterior mean β̂ used as trajectory estimate [PAGE 4].

**Shot factors, [PAGE 5]:**
- Depth D̂ᵢ: feet relative to front rim at entry; optimal range 10"–11" per Marty and Lucey (2017) [PAGE 7].
- Left-right LR̂ᵢ: feet deviation from hoop center [PAGE 5].
- Entry angle Âᵢ: angle between ball and rim plane at entry; optimal in mid-40's degrees [PAGE 7].

**Shot-make probability (Equation 2), [PAGE 5]:**
P(Sᵢ=1) = σ( β₀ + β₁D̂ᵢ + β₂LR̂ᵢ + β₃Âᵢ + β₄D̂ᵢ² + β₅LR̂ᵢ² + β₆Âᵢ² + β₇D̂ᵢLR̂ᵢ + β₈D̂ᵢÂᵢ + β₉LR̂ᵢÂᵢ )

σ(x) = exp(x)/(1+exp(x)), output in [0,1]. Trained on 46,093 of 50,916 three-pointers [PAGE 5].

**Empirical conversion anchors, [PAGE 7]:**
9" depth → 60.1% make rate; 10" depth → 64.5% make rate. Contested (NDD < 4 ft) vs open (NDD > 6 ft): +56% depth variance, +38% left-right variance [PAGE 6]. Taller defenders increase entry angle but depth effect is weaker [PAGE 6–7]. Defender left/right angle produces no left-right trajectory bias [PAGE 7].

**Player-effect models, [PAGE 8–10]:**
Model 1/2: Y_ijk = β₀ + αⱼ + γₖ where Y ∈ {binary make/miss, modeled shot-make probability}; γₖ scaled ×100 gives percentage-point difference per 100 shots [PAGE 9–10].
Model 3/4: Y_ij = β₀ + αⱼ + γⱼ·NDD_ij; γⱼ = estimated change in mean 3P% (or probability) per one-foot NDD decrease [PAGE 10–11].

**Table 1 (defender impact), [PAGE 10]:**
Boris Diaw γₖ×100 = −6.71, Opp Prob 30.0% (rank 1); Draymond Green −5.92, 32.0%; Langston Galloway −5.25, 30.6%; Patrick Beverley −4.55, 31.9%; Wesley Johnson −4.39, 31.7%. Bottom: Derrick Williams +8.57, 45.8% (rank 137); Channing Frye +7.15, 43.0%; Vince Carter +5.96, 41.7%; Kirk Hinrich +5.93, 42.2%; Jameer Nelson +5.69, 42.8%. Restricted to ≥100 defended three-point shots [PAGE 10].

**Table 2 (shooter resiliency), [PAGE 11]:**
Michel Carter-Williams +3.45 (rank 1); Rasual Butler +3.39; Austin Rivers +2.86; Kemba Walker +1.98 ("decreases 1.98% points less than the league average for every foot closer the nearest defender is"); Gerald Henderson +1.58. Bottom: Aaron Brooks −2.54 (rank 137); Langston Galloway −2.41; Russell Westbrook −2.37; Nik Stauskas −2.35; Robert Covington −2.02 [PAGE 11]. Restricted to ≥100 attempted three-point shots [PAGE 11].

**Stability diagnostics, [PAGE 9–10]:**
Defender rank correlation half-season: shot-probability ρ = 0.17 vs raw ρ = 0.025. Shooter: ρ = 0.20 vs raw ρ = 0.033. MSE lower for probability model below 50% of games [PAGE 9, Figure 5].

**Breakdown / singularity regimes:**
- Trajectory rejection: partially missing, noisy, or posterior-mean-too-far-from-raw tracks excluded (46,093/50,916 retained) [PAGE 5]. If excluded shots are systematically more heavily contested (occlusion), γₖ is biased toward zero for aggressive defenders.
- NDD censoring: open defined NDD > 6 ft; contested NDD < 4 ft [PAGE 6]. Shots in the 4–6 ft band are neither cleanly open nor contested, creating an ambiguity band.
- Sample-size singularity: defender/shooter effects require ≥100 relevant shots for inclusion in Tables 1–2 [PAGE 10–11]. Below this, γ estimates are high-variance and unstable [PAGE 9].
- Functional-form singularity: quadratic trajectory (1) assumes smooth ballistic flight; deflections, tips, or release anomalies violate the model, biasing D̂ᵢ, LR̂ᵢ, Âᵢ and propagating attenuation error into logistic regression (2).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a genealogy of NBA defensive measurement that begins with spatial data, not outcomes. Franks et al. (2015) characterized spatial structure of defensive skill in the Annals of Applied Statistics and at MIT Sloan, establishing that player-location data could separate defensive actions from box-score noise [PAGE 2, 13]. Goldsberry and Weiss (2013) introduced "The Dwight effect," showing interior defenders alter opponent behavior beyond blocks [PAGE 2, 13]. Chang et al. (2014) quantified shot quality at MIT Sloan, preceding the trajectory focus here [PAGE 1, 13]. Marty and Lucey (2017), using the Noah shooting system, established that entry angles in the mid-40's degrees maximize shooting percentage and that depths of 10"–11" optimize three-point conversion [PAGE 6–7, 13–14]. Marty (2018) extended this with high-resolution shot capture revealing systematic shooter biases [PAGE 7, 14]. Daly-Grafstein and Bornn (2019) supplied the theoretical engine: Rao-Blackwellizing field-goal percentage by conditioning binary outcomes on modeled make probabilities [PAGE 1, 5, 12–13, 14]. Narsu (2017) provided the motivating pathology—opponent 3P% has almost zero year-to-year correlation, rendering single-season perimeter defense rankings nearly noise [PAGE 2, 14]. Csapo and Raab (2014) examined defensive adjustments to the hot hand, foreshadowing the paper's interest in how defensive pressure alters shooter behavior [PAGE 12, 14].

The multi-week trap is explicit: because year-to-year opponent 3P% correlation is effectively zero [PAGE 2], any evaluation anchored to a single season's raw make/miss outcomes collapses under sampling error. The paper attempts to escape this trap by shrinking toward shot-make probabilities, improving half-season rank consistency from ρ = 0.025 to ρ = 0.17 for defenders [PAGE 9]. Yet the trap re-emerges in smaller slices: MSE gains concentrate below 50% of games [PAGE 9, Figure 5], implying that weekly or monthly defender ratings remain noisy even with probability smoothing. A secondary trap is the ecological one: the 2014–15 SportVu dataset predates the modern spacing explosion; a defender valued then for suppressing long two-pointers may not project to an era where the same NDD occurs more frequently behind the three-point line. The genealogical trap is thus double-layered—temporal instability within seasons and non-stationarity across eras—meaning the γₖ estimates are best interpreted as season-specific regularized estimands, not portable defensive talent parameters.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under defensive pressure, shooters do not merely miss more; they regress to a sub-optimal motor habit—biasing shot depth short of the rim [PAGE 6–7]. This is a crisis regression: the shooter's optimal depth (10"–11") is abandoned under nearest-defender compression, producing shallower entry and lower conversion (60.1% at 9" vs 64.5% at 10") [PAGE 7]. The defender's role is to trigger this regression by reducing NDD, which increases depth variance by 56% and biases depth shorter [PAGE 6]. The shooter's counter-habit would be to train depth calibration under contact, but the paper's data only observes the realized regression, not the counterfactual of a shooter who resists it.

Counter-trap: the offensive adjustment layer. If defenses learn that shooters bias short under pressure, the optimal defense is not merely to close out but to vary close-out timing and depth to punish the regression. Conversely, offenses that anticipate this can train shooters to maintain depth under contest, flipping the defender's γₖ. The paper's model (3) treats γₖ as a static mean effect per defender [PAGE 8–9], which implicitly assumes no adaptive counter-trap: the defender's effect is assumed constant regardless of whether the shooter has seen that defender's tendencies before. In a recursive theory of mind, defender k's effectiveness depends on shooter j's belief about k's habits, and j's shooting depth depends on j's belief about k's recovery speed. None of this is modeled; NDD is a scalar snapshot at release [PAGE 3, 6].

Clock: the data are collected at 25 Hz [PAGE 3], yet the analysis collapses each trajectory to three static scalars [PAGE 5], discarding the temporal dimension—the clock of ball flight, release-to-rim interval, and defender recovery arc. Entry angle and depth are endpoints; they do not encode how early the defender arrived, whether the close-out was late, or how shot-clock pressure modified the shooter's release point. Crisis moments (late shot clock, close score) likely intensify the depth regression, but the model contains no clock covariate. Therefore, the estimated γₖ conflates a defender's raw close-out quality with the situational clock context in which those close-outs occur, creating a temporal omitted-variable bias: defenders on slower-paced teams or in low-pressure garbage-time samples will appear different from defenders in high-leverage possessions even if their per-possession skill is identical.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: the Bayesian quadratic trajectory model (1) assumes the ball's flight is well-approximated by a second-order surface in x and y [PAGE 4]. This breaks down on deflected shots, tips, or shots where the ball's path is interrupted by a defender's hand—precisely the high-contest regime where defensive impact is largest. If the posterior mean E(Zᵢ) is pulled toward the pseudo-data anchors (shooter at 7 ft, basket at 10 ft) rather than the true optical track, the derived depth, left-right, and entry angle are biased [PAGE 4]. Veto condition: if a substantial share of tightly contested shots (NDD < 4 ft) are excluded as "too far from raw data" [PAGE 5], the contested-shot distribution in Figure 3 is survivorship-censored, and the 56% depth-variance increase is a lower bound.

Biomechanical layer veto: defender height enters as a scalar covariate affecting entry angle [PAGE 6], but the model omits wingspan, hand height at release, vertical leap, and close-out velocity. A 6'8" defender with short arms contests differently than a 6'6" defender with a 7'2" wingspan. The paper acknowledges NDD does not indicate "how the defender is oriented in relation to the shooter" [PAGE 12]. Veto condition: if two defenders have identical NDD distributions but different arm reach, their γₖ estimates conflate anatomy with positioning, violating the assumption that NDD is the sole relevant defensive channel.

Weather layer: NBA games are indoors, so atmospheric drag, humidity, and temperature are effectively controlled across games; weather is not a material veto for this dataset. The more relevant physical veto is arena-level variation in rim specifications, backboard bank behavior, and lighting—none are modeled [PAGE 3]. However, since the data span one league in one season, arena fixed effects are absorbed into the intercept β₀ of Equation (2), limiting cross-arena bias within the sample.

Adjudication: the vetoes do not invalidate the paper's internal conclusion that shot-make probabilities reduce estimator variance relative to binary outcomes [PAGE 9–10, Figure 5]. They do, however, veto any claim that γₖ is a complete measure of perimeter defensive skill. The physical and biomechanical vetoes imply γₖ is a lower-dimensional projection of a higher-dimensional defensive skill space; the paper itself concedes the metrics ignore shot prevention, pass forcing, and turnover generation [PAGE 12]. Therefore, γₖ should be adjudicated as a regularized, trajectory-informed correlate of perimeter defensive impact, not a causal sufficient statistic.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 — Heterogeneous NDD sign flip: Re-estimate model (3) separately for shots with NDD < 4 ft (tight contest) and 4 ft ≤ NDD ≤ 6 ft (moderate contest). Prediction: Defenders whose primary role is rim protection but who occasionally close out on perimeter shooters will show negative γₖ overall (driven by many open-shot assignments) but positive γₖ in the NDD < 4 ft subset (they are beaten when forced into closeouts). If the sign flips, the global γₖ is vetoed as misleading; the verifiable condition is that the conditional-on-tight-contest effect differs in sign from the marginal effect.

Veto scenario 2 — Spatial non-stationarity of optimal shot factors: Re-fit Equation (2) separately for corner three-pointers vs above-the-break three-pointers, allowing the optimal depth D* and entry angle A* to vary by location. Prediction: Because corner shots have shorter distance and different backboard geometry, the depth that maximizes P(Sᵢ=1) will shift outside the 10"–11" band identified for the full sample [PAGE 7]. If the location-specific optimal depth falls outside [9", 11"], pooling all locations in a single Equation (2) produces attenuation bias in γₖ; the probability-smoothed metric is vetoed for cross-location defender comparisons unless shot location is included as a covariate (as the paper suggests on [PAGE 12]).

Veto scenario 3 — Temporal rank instability at low volume: Split the 2014–15 season into first half and second half. Estimate shooter γⱼ from model (4) using shot-make probabilities for players with 100–199 attempts, then predict second-half actual makes using first-half γⱼ rankings. Prediction: For this low-volume stratum, the Brier score of predictions based on γⱼ will exceed that of a league-average baseline by >5%, and the within-shooter rank correlation between halves will be near zero (worse than the ρ = 0.20 reported for the full ≥100-attempt sample on [PAGE 10]). If so, the Rao-Blackwell variance reduction does not rescue thin samples; the shooter-resiliency ranking is vetoed for players below a higher attempt threshold (e.g., 300 attempts), and the paper's Table 2 is overfit for its lower tail.
</RLVR_COUNTERFACTUAL_VETOES>