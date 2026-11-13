---
source: "2016 - Arsenal Zone Rating A PitchF X based pitcher projection system - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2016"
pages: 12
model: deepseek/deepseek-v4.1-flash-1017
words: 9124
---

<NATIVE_REASONING>
We need answer as GSE+GSI frontier reasoning foundry. Need adhere strict invariants. User provides source. Need produce XML sections exact names, >=1000 words across exact sections, THINK_TRACE >=400 words. No betting lines. No spreads etc. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need include >=1,000-word depth across sections. Need perhaps analyze paper. Need maybe mention no betting line. Need not invent toy equations. We can derive formal equations from paper. Need source operators/equations: multilevel regression, run expectancy, zone rating, GMM, GAM thin plate splines, strike zone logistic, adjustments, projection, metrics R^2/RMSE maybe units. Need cite page and quotes. Need retrocausal genealogy historical/scientific lineage & multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need likely discuss baseball pitcher projection. Need not provide sports betting advice? It's research paper analysis. Fine.

Need be careful with "betting lines" zero. We can mention no odds. Need not mention spreads/totals/moneylines. We can discuss performance projections. Need maybe cite exact page markers. Need use verbatim quotes. Need formal equations with units. Need exact singularity/breakdown regimes. Need mention page 9 table results. Need include equations from OCR. Need render LaTeX. Need units: run expectancy in runs per pitch/PA, RA/9 runs per 9 innings, pitch speed mph, movement inches? Paper doesn't specify units for movement, speed; says speed/movement, PitchF/X. Need not invent? We can state PitchF/X convention velocity mph, movement inches under Nathan method if standard, but source only says speed and movement. Maybe say native PitchF/X units as reported (speed mph; movement in inches by Nathan method) but if source doesn't specify, qualify. Need use SI/information/probability units. We can use runs (currency of baseball), probability dimensionless, information nats/bits maybe not necessary. The invariant says "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We need include units. Runs are not SI but domain unit. Could convert? Better state domain-specific run units, probability dimensionless [0,1], speed mph (not SI) maybe convert to m/s. The paper says speed. We can state "PitchF/X velocity in mph; 1 mph=0.44704 m/s" as conversion. Movement in inches; 1 in=0.0254 m. Location standardized. Park factor dimensionless. Defense runs. RA/9 runs per 9 innings. R^2 dimensionless, RMSE runs/9? In table RMSE with RA/9 likely runs per 9 innings. Need be explicit.

Need produce >=1000 words. Probably around 2500-3500 words. Desired oververbosity 5. Need XML sections exact. We need include THINK_TRACE >=400 words. Other sections can be shorter but total >=1000. Need "Deep multi-hop derivation & gray-zone audit". We can include equations in think trace? Probably. Need source citations [PAGE N] with verbatim quotes. Need maybe no fake ratios. Our equations should be faithful. Could define notation.

Need parse paper equations:
Main model:
r_i ~ a(sp_i,xmove_i,zmove_i,type_i,hand_i) + z(xloc_i,zloc_i,type_i,hand_i) + b_r + def_t + pf_pa
Actually OCR: r_i ~ a(sp_i,xmove_i,zmove_i,type_i,hand_i) + z(xloc_i,zloc_i,type_i,hand_i) + b_r + def_t + pf_pa? Let's inspect:
"pa t b i i i i i i i i i i pf def r hand type zloc xloc z hand type zmove xmove sp a r + + + + ) , , , ( ) , , , , ( ~"
So equation: r_i ~ a(sp_i,xmove_i,zmove_i,type_i,hand_i) + z(xloc_i,zloc_i,type_i,hand_i) + b_r + def_t + pf_pa. Yes b_r batter run expectancy. But paper says "br is run expectancy of batter, t_def team defense, pf_pa park factor." Need equation.

Run expectancy:
For non-PA-ending pitches, r_i = RE(new pitch count) - RE(old pitch count).
For PA-ending pitches, r_i = RE(PA result) - RE(old pitch count).
wOBA formula not shown.

Zone: grids, local regression smoothed. Pitch location distribution: mixture of Gaussians with identical scalar covariance: p(xloc,zloc | pitcher) = sum_k π_k N(μ_k, σ^2 I). Need not fake? This is described. Zone rating of pitcher = sum over pitches z(loc)/? Or average. They say calculate zone rating of each pitcher using distribution; sum z in final formula. Need formal.

Arsenal: GAM: a(pitch) = f_sp(sp) + f_x(xmove) + f_z(zmove) maybe with separate models by type/hand. Thin plate splines. Soft classification: for each pitch probability P(type=t | sp,xmove,zmove); arsenal rating = sum_t P(t|...) * a_t(sp,xmove,zmove | hand). Need equation. They average every pitch. Final sum.

Pitch classification GMM:
p(sp,xmove,zmove) = sum_t π_t N(sp,xmove,zmove | μ_t, Σ_t) for specific pitcher; then stronger model p(sp,xmove,zmove) = sum_t π_t N(sp,xmove,zmove | μ_t + off_p, Σ_t). Naïve Bayes plus multinomial logistic regression. Accuracy 88.3% [PAGE 5]. Need quote.

Pitch movement Nathan: remove drag and gravity; only Magnus. Calibration offset per game.

Strike zone: logistic regression on called-strike/ball to find 50% curve. Rectangle approximation. Formula:
Right-handed batter: -0.991 <= x <= 0.946 and 0.906 + 0.1281*height <= z <= 2.591 + 0.1281*height? OCR shows "946 .0 991 .0 <= <= − x and height z height * 1281 .0 591 .2 * 1281 .0 906 .0 + <= <= +" Need parse. It says Right-handed batter: -0.991 <= x <= 0.946 and 0.906 + 0.1281*height <= z <= 2.591 + 0.1281*height. Left-handed: -1.139 <= x <= 0.755 and 0.617 + 0.1729*height <= z <= 2.306 + 0.1729*height. Need check ordering: "height z height * 1281 .0 591 .2 * 1281 .0 906 .0 + <= <= +" => 0.906 + 0.1281 height <= z <= 2.591 + 0.1281 height. Yes.

Final combined formula:
ar_p = (Σa + Σz + def_t + pf_pa) * pitch_p + l_avg + hand_p + pc_value_p? OCR:
"∑∑ + + + + + + = p p p pa t p value pc hand avg l pitch pf def z a ar _ _ * ) (" 
Likely ar_p = (Σa + Σz + def_t + pf_pa) * pitch_p + l_avg + hand_p + pc_value_p. Need note additive adjustments after scaling. Good.

Prediction adjustments: age-based kernel regression; regression to mean prior ~20 innings; coefficient cross-validation.

Results: Table page 9:
Marcel R2 0.1866, RMSE 0.860; PECOTA 0.1975/0.881; ZiPS 0.2043/0.874; cFIP 0.2183/0.867; arsenal-zone 0.2017/0.864. [PAGE 9]. Need cite exact quotes? Could quote "our system is 3rd in R^2 and 2nd in RMSE" [PAGE 9]. Breakout table maybe not need exact numbers? We can mention. Combination xFIP: arsenal-zone+xFIP R2 0.2528, RMSE 0.819; optimal 0.2529/0.819 [PAGE 10]. cFIP combo: 0.2693/0.812 [PAGE 10]. Year-to-year: arsenal-zone w/o regression 0.6628; with 0.6787; cFIP w/o 0.4106; cFIP 0.4475; PECOTA 0.8327; ZiPS 0.6703 [PAGE 11]. Need quote maybe.

Need "Retrocausal genealogy": Historical/scientific lineage. Need link to PECOTA/ZiPS/Steamer [PAGE 1], PitchF/X, wOBA [1], GAM [2], thin plate splines [3], Nathan movement [4], calibration [5], Mike Fast strike zone [6], cFIP [7], Larson projection review [8]. Need discuss multi-week traps: sample size, pitch classification drift, calibration changes, park/defense collinearity, regression to mean, age adjustment, league average RA/9, lefty bonus, pitch-count adjustment overfit, team change exclusion, starter-only restriction, 181 qualified seasons, 2012-14 test, 2008-14 train. Need identify gray-zone audit. This is "retrocausal genealogy" maybe how ideas trace backwards. Need avoid "causal" overclaim.

Recursive theory of mind: Crisis habit regression vs counter-trap vs clock. Need interpret in context: projection system behavior under adversarial/adaptive? We can discuss model builders, pitchers, hitters, coaches, front offices. Crisis habit regression: when model underperforms, analysts regress to ERA/win-loss or simple K/BB; counter-trap: overfitting to breakout labels, using same-sample classification; clock: aging curve and pitch miles; multi-week trap: using in-season short windows. Need mention recursive expectations: pitcher adapts to hitters, hitters adapt, classifier labels. No betting.

Cross-layer veto adjudication: Physical/biomechanical/weather veto proof. Need discuss physical constraints: pitch speed/movement measurement calibration, drag/gravity removal, Magnus; biomechanical: injury, fatigue, pitch count, arm angle? Weather: wind, humidity, temperature, park factor; altitude? Paper includes park factor and defense. Need "veto proof" maybe show which layers can veto projection. Need formal with conditions. Need say if calibration offset changes, movement features shift, p(type) shifts, arsenal rating invalid. Weather affects movement (air density) and park factor; if not modeled, veto. Biomechanical: injury/age changes velocity; age kernel only average. Need exact singularity/breakdown regimes: GMM covariance singular if Σ_t not positive definite or cluster collapse; pitch classification probabilities degenerate (π→0/1) with small samples; zone grid empty; regression matrix rank deficient due collinearity of def/pf/team; R^2 denominator zero if variance zero; RA/9 scale blow-up if pitch_p→0; multicollinearity; sample <1500 pitches; lefty data sparse; non-PA run expectancy distribution; park factor and defense projections linear extrapolation. Need include.

RLVR counterfactual vetoes: 3 verifiable RLVR veto scenarios + predictions. Need design 3 scenarios with counterfactual verification. RLVR = reinforcement learning with verifiable rewards? Need "counterfactual vetoes": if condition X, veto model output. Need verifiable predictions. Could be:
1. Calibration shift veto: if per-game offset in velocity/movement exceeds threshold (e.g., >0.5 mph or >0.5 in) and reclassification changes pitch-type probabilities by >0.10, veto arsenal rating. Prediction: model's R^2 on held-out seasons drops; can verify by recomputing with/without calibration. Need not invent fake ratios? It's a threshold scenario, not fake equation. But need formal. Could define Δ_cal and KL divergence. Need avoid fake ratios? The invariant says never invent fake ratios (Force / Fatigue). We can define information divergence, thresholds. Need state units. Use KL divergence nats. Threshold 0.1 nats? Need maybe not exact? "3 verifiable RLVR veto scenarios + predictions" can include thresholds. Need make verifiable. Use data. Predictions: recomputing with/without offset yields lower RMSE? Need be precise.
2. Small-sample GMM degeneracy: if pitcher has <1500 pitches (paper's requirement [PAGE 8]) or covariance condition number >10^6, veto pitch classification and combined rating; prediction: classification accuracy falls below 88.3% on labeled holdout; combined rating RMSE worsens. Verify by subsampling 2008-14. Need threshold.
3. Weather/park/defense unmodeled: if game-time air density or wind causes movement residual > measured calibration? Hmm. Or team change: paper excludes pitchers who changed teams [PAGE 8 footnote 5]. If a pitcher changes team, park factor/defense projected from prior team invalid; veto combined rating unless recomputed with new team. Prediction: among team-changers, RMSE higher; verify by including them. This is verifiable. But "physical/biomechanical/weather veto proof" separate. RLVR can include weather. Need 3 scenarios. Maybe:
- Scenario A: calibration offset shift. 
- Scenario B: biomechanical injury/velocity drop. If spring velocity drop >2 standard deviations from age kernel, veto age adjustment; prediction: next-season RA/9 worse than model; verify with injury list. 
- Scenario C: weather/park factor sign inversion: if projected park factor changes >? Or if game-time wind vector changes pitch movement beyond model. Hmm.

Need "RLVR_COUNTERFACTUAL_VETOES" likely need 3 verifiable veto scenarios. We can frame as "if [verifiable condition], then veto [model component]; predicted observable". Need not be actual betting. We can include equations.

Need "Cross-layer veto adjudication": physical/biomechanical/weather veto proof. Need show "veto proof" maybe proof that cross-layer variables can invalidate. We can provide a formal condition: For combined rating ar_p to be valid, measurement, biomechanical, and environmental layers must satisfy invariance constraints. If not, projection is not identifiable. Use quotes: "Pitch F/X raw data has a known issue: it is poorly calibrated" [PAGE 5]; "we remove drag effect... remove gravity effect... only consider Magnus effect" [PAGE 5]; "team defense has much higher year-to-year variance" [PAGE 6]; "pitchers changing team removed" [PAGE 8 footnote 5]. Need cite.

Need ensure no betting lines. Avoid words "odds", "moneyline", "spread", "total", "bet", "wager". "Projection" okay. Maybe "market" avoid. Need no lines.

Need exact XML sections. Must include all six sections. We can include maybe root <GSE_GSI_FRONTIER_REASONING>? User asks exact XML sections; likely just sections. We can wrap in root? It says across these exact XML sections. We can output only the six tags in order. Might include no extra outside? Need maybe include root not necessary. To be safe, output the six XML sections only, no preamble. Need ensure tags exactly as specified. Inside equations use LaTeX. Need no markdown? XML can contain text. We can use CDATA? Not necessary. Need escape < and > in equations? XML text can include < which is problematic. We should use LaTeX with \lt or avoid raw <. Use \leq, \le. For tags, content can have &? Need escape ampersands. Avoid ampersands. Use "and". Use < in text? Use \lt. In XML, raw "<" starts tag. Need use \lt or "less than". Avoid ">"? > okay but can use \gt. Need ampersand avoid. Use "R^2" okay. Need use Greek letters. Fine.

Need word count. Let's plan content.

THINK_TRACE: >=400 words. We need deep multi-hop derivation and gray-zone audit. We can discuss chain:
- Paper's target: future RA/9 from per-pitch PitchF/X.
- Step 1 run expectancy mapping: wOBA -> PA run value; distribute to pitches via pitch-count conditional expectations. Audit: non-PA ending pitches have zero? No, difference in expected PA result; PA-ending includes result. This creates dependence and possible negative values. It assumes pitch-count state sufficient. Gray zone: 2.4M pitches but only 181 qualified seasons; starters only.
- Step 2 additive decomposition: main model r_i ~ a + z + b_r + def_t + pf_pa. Audit: additive separability, no interactions; batter prior Gaussian. Team defense/park factor linear projections from prior years. 
- Step 3 arsenal: GAM with thin plate splines, separate pitch type/hand. Soft classification. Audit: classification errors borderline FF/SI etc; 88.3% accuracy; probabilistic weighting mitigates but not eliminate; small samples. 
- Step 4 zone: grid covariate plus local regression; pitch location mixture of Gaussians identical scalar covariance. Audit: grid sparsity, smoothing bandwidth; strike zone standardization.
- Step 5 calibration: per-game offset. Audit: calibration drift can masquerade as arsenal.
- Step 6 scale: pitch_p * (Σa+Σz+def+pf) + l_avg + hand + pc_value. Audit: multiplicative pitch_p and additive league average, lefty bonus, pitch-count distribution adjustment; age kernel and regression to mean. 
- Results audit: R2 0.2017 vs cFIP 0.2183, RMSE 0.864 vs cFIP 0.867, ZiPS 0.2043/0.874. Combined with xFIP 0.2528/0.819. Year-to-year 0.6787 vs PECOTA 0.8327. So not universally best alone. Breakout/breakdown validated relative to baselines. 
- Gray-zone: "breakout" labels are relative to baseline, not absolute future; same 181 sample; potential selection. Need cite quotes. 
Need include equations maybe in source section, not think trace. But can mention notation. Need >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Need formal LaTeX, units, page citations, breakdown. We can structure as list. Include all equations. Need cite exact [PAGE N] markers and verbatim quotes. Need quote exact snippets. Need quote maybe:
- "Our main model, which is on per-pitch level, and on run scale, which can be described as:" [PAGE 1]
- "For non-PA ending pitches, the run expectancy is the one of new pitch count minus the one of old pitch count." [PAGE 2]
- "For PA ending pitches, the run expectancy is the one of PA result minus the one of old pitch count." [PAGE 2]
- "We use a generalized additive model(GAM)[2] to describe the arsenal rating." [PAGE 3]
- "We use a “soft” pitch type classification, which means each pitch has a probability ranging from [0,1] of being some pitch type." [PAGE 3]
- "We obtained 88.3% accuracy on our test set." [PAGE 5]
- "Pitch F/X raw data has a known issue: it is poorly calibrated[5]." [PAGE 5]
- "A pitch locates on the curve has 50% probability of being called a strike." [PAGE 6]
- "we use a logistic regression on raw called-strike/ball data to determine the actual strike zone." [PAGE 6]
- "Our system is 3rd in R^2 and 2nd in RMSE" [PAGE 9]
- "R^2 (50/50) ... arsenal-zone-combined+xFIP ... 0.2528" [PAGE 10]
- "year-to-year R^2 ... 0.6787 ... PECOTA ... 0.8327" [PAGE 11]
Need exact quotes maybe no need all. Use [PAGE N] markers. Need not quote every. But include several.

Equations:
Let i index pitch, p pitcher, t pitch type, h hand. Domain units:
- r_i ∈ ℝ runs per pitch (run expectancy delta)
- a_i ∈ ℝ runs per pitch (arsenal contribution)
- z_i ∈ ℝ runs per pitch (zone contribution)
- b_r ∈ ℝ runs per PA batter effect
- def_t ∈ ℝ runs per game? In model per pitch? They add def_t and pf_pa as run scale. We can state domain run units as encoded.
- pf_pa dimensionless multiplier? Paper says park factor; in equation additive. To be faithful, treat as run-scale term. Could say "paper's notation treats it as additive run-scale term; exact scaling not specified in excerpt." That is gray zone. Need not invent. 
- sp_i in mph (converted to m/s optional), xmove,zmove in inches (or native PitchF/X units; convert). xloc,zloc in feet? Paper doesn't specify. Strike zone formula x,z likely feet. We can state "as in the paper's standardized coordinates; source does not print units for x and z in the strike-zone inequalities." Need be honest.
- height in? Formula coefficients imply height in inches? If height in inches, z bounds in feet? Let's check: Right-handed z lower 0.906 + 0.1281*height. If height = 72 inches, lower = 0.906+9.223=10.129? That's too high if feet. Maybe height in centimeters? No. Wait Mike Fast strike zone formula uses height in inches? Let's infer: z in feet, height in inches? 0.1281*height if height in inches gives ~9 ft, impossible. Maybe height in meters? 1.8 m gives 0.23+0.906=1.136 ft, upper 2.821 ft, plausible. Wait 0.1281*180 cm = 23.058, no. If height in inches and coefficient 0.1281? That seems too large. Maybe coefficient is 0.01281? OCR "1281 .0" could be .01281? Let's inspect: "height z height * 1281 .0 591 .2 * 1281 .0 906 .0 + <= <= +" OCR may drop leading 0? It shows "1281 .0" meaning 0.1281. But if height in inches, 72*0.1281 = 9.22. If z in inches? Strike zone z maybe in inches? x -0.991 to 0.946? Those could be feet? Actually PitchF/X x and z location are in feet. Height maybe in meters? If height in meters (1.83), 0.1281*1.83=0.234; lower 1.14 ft, upper 2.825 ft. That works. But player height in meters? Unusual. If height in centimeters and coefficient 0.01281? 180*0.01281=2.306; lower 3.212? No. If height in inches and coefficient 0.01281, 72*0.01281=0.922; lower 1.828, upper 3.513. That seems too high? Actually strike zone bottom at knees ~1.5 ft, top ~3.5 ft. So .01281 plausible. But OCR says "1281 .0" maybe .01281? It displays "1281 .0" not "01281 .0". Hmm. Left: "height * 1729 .0 306 .2 * 1729 .0 617 .0" If coefficient 0.01729 and height 72 in =1.245; lower 1.862, upper 3.551. Plausible. If 0.1729*1.8 m =0.311; lower 0.928, upper 2.617. Both plausible. Which is correct? Need not overinterpret. In source, x bounds -0.991 to 0.946 and z bounds with height. If x in feet, width ~1.94 ft, plausible. z lower 0.906 + 0.1281*height. If height in meters 1.8 gives 1.136 ft, top 2.821 ft, plausible. But Mike Fast strike zone formula likely uses height in inches? Let's recall: Mike Fast "A Zone of Their Own" maybe formula: For right-handed batters, strike zone top = 2.591 + 0.1281*height? Hmm if height in inches, top = 2.591 + 9.22 = 11.8? No. Maybe height is in "feet and inches"? No. Wait maybe z is in inches? If z in inches, top 2.591 + 0.1281*72 = 11.8 inches, no. Maybe height in centimeters and z in cm? 2.591 + 0.1281*180 = 25.65 cm, no. If height in inches and z in feet, coefficient should be 0.01281. OCR may have lost zero after decimal? "1281 .0" could be "0.1281" or "0.01281" but text has 4 digits. It says "1281 .0" weird. We should quote formula exactly as source OCR but avoid asserting units. We can write as in source with height in "source-standardized units" and note units not printed. But invariant asks SI units; we can state "height must be supplied in the paper's internal standardization; excerpt does not state unit, so cannot convert without assumption." Good.

Need include GMM equation and classification. Need note covariance positive definite. Need singularity: if Σ_t singular or component weight zero. 
Zone distribution: p(xloc,zloc | pitcher) = sum_k π_k N(μ_k, σ^2 I). They say mixture of Gaussian with each component covariance identical scalar matrix. Good.
GAM: a_i = f_{sp,t,h}(sp_i) + f_{x,t,h}(xmove_i) + f_{z,t,h}(zmove_i). Each f thin plate spline.
Soft classification: a_i = sum_t P(t | sp_i,xmove_i,zmove_i) [f_sp,t,h + f_x,t,h + f_z,t,h]. 
Final: ar_p = (Σ_i a_i + Σ_i z_i + def_t + pf_pa) * pitch_p + l_avg + hand_p + pc_value_p. Need maybe sum over pitches, but a_i and z_i per pitch. 
Prediction: ar_p^{pred} = (1-λ_p) ar_p + λ_p l_avg? Regression to mean. Paper says regress each pitcher to league average RA/9 according to innings pitched last year; prior counts as around 20 innings. So λ = IP_prior/(IP_prior + 20)? Need formula? Paper says "prior counts as around 20 innings" [PAGE 8 footnote 4]. We can state if using empirical Bayes: \hat{ar}_p = (IP_p ar_p + IP_0 l_avg)/(IP_p + IP_0), IP_0≈20 innings. This is faithful and formal. Units innings. Need note age adjustment via kernel regression. Good.

Metrics: R^2 = 1 - SSE/SST dimensionless; RMSE = sqrt(mean((y-ŷ)^2)) runs per 9 innings. Need table.

Breakdown regimes:
- Sparse data: P <1500 pitches, GMM unstable; paper restricts to starters [PAGE 8].
- Zero variance: R^2 undefined if SST=0.
- pitch_p→0: scale formula collapses to additive league average? If pitch_p=0 then ar_p = l_avg + hand + pc; not infinite. Actually if pitch_p is pitches per 9, can't be zero for pitcher. If very small, multiplicative term small; not singular. 
- GMM covariance singular: Σ_t not PD; log-likelihood -∞; classification invalid.
- Soft classification degenerate: probabilities near 0/1; if mislabeled borderline, arsenal sum discontinuous.
- Zone grid empty: local regression undefined; smoothing bandwidth→0 overfits; bandwidth→∞ washes out.
- Park/defense linear projection extrapolation: collinearity and sign flips; team change.
- Calibration offset per game: if offset unidentifiable with pitch type offset? The model has pitcher-specific offset off_p and game offset? Potential identifiability: offset and cluster mean confounded; need constraints. Good gray zone. 
- Age adjustment: kernel regression outside age support extrapolates; injury not modeled.
- Lefty bonus derived out-of-sample 2008-11 to 2012-14; small sample.
- Pitch-count adjustment via PLS: potential overfit; selected main component.
- Team defense average UZR/DRS: noisy; 3 years.
- Park factor 5 years; weather not fully separated.

Need "CROSS_LAYER_VETO_ADJUDICATION": Need formal proof maybe:
A projection is admissible only if measurement layer M, biomechanical layer B, environmental layer E satisfy invariants. Define observed features \tilde{x} = x + δ_M + δ_E + δ_B. The model trained on x. If ||δ|| exceeds model's estimated feature noise, then P(type|\tilde{x}) shifted. Use total variation / KL. Veto if KL(P(type|x)||P(type|\tilde{x})) > threshold. But threshold? Could be. Need "veto proof": Show if pitch type classification changes, arsenal rating is not invariant because a_i depends on type-specific splines. Formal:
a_i = Σ_t q_{it} g_{t,h}(m_i). If q shifts to q', Δa_i = Σ_t (q'_{it}-q_{it}) g_{t,h}(m_i). Nonzero unless g equal across types. So measurement/weather/biomechanical shift can veto. This is a proof. Use [PAGE 3] quote "different type of pitches will have different properties" and "separate arsenal rating model for different pitch types". Good. For weather: movement shift due to air density affects m_i; if not corrected, Δa. For biomechanics: velocity drop affects sp_i and age adjustment; if acute injury not in age kernel, Δ. For calibration: offset. Need include physical: drag/gravity removal [PAGE 5]. Weather affects Magnus? Actually Magnus force depends on air density; paper removes drag/gravity but not air density variation. Park factor helps run environment but not pitch movement measurement. Need mention.

Need "RECURSIVE_THEORY_OF_MIND": Interpret "Crisis habit regression vs counter-trap vs clock." Need likely discuss decision-making under uncertainty. We can frame:
- Crisis habit regression: When projections fail (e.g., breakout misses), analysts revert to familiar ERA/K%/BB% and ignore arsenal/zone; this is a habit regression. Evidence: paper itself combines with xFIP/cFIP when alone not top [PAGE 10]. But this is rational Bayesian averaging, not panic. Counter-trap: overreacting by treating breakout/breakdown table as absolute proof; the test is relative to baseline and same 181 seasons [PAGE 9]. Clock: age/pitch miles; model uses age kernel [PAGE 8]; multi-week traps: small in-season windows. Need recursive ToM: pitcher tries to exploit hitter expectations; hitter adjusts; classifier labeler has expectations; projection system builder chooses baseline. Need "crisis habit regression vs counter-trap vs clock" maybe from GSE? We can answer with scenario. Need no betting. Discuss "multi-week traps": four-to-six week hot streaks in velocity/movement; soft classification drift; weather. Provide counter-trap: don't use short-window breakout label. Clock: seasonal aging and accumulated pitch miles. Need cite.

Need "RETROCAUSAL_GENEALOGY": Historical lineage. Need trace:
- Traditional ERA/RA9 cannot separate defense [PAGE 1]; K/BB/HR/batted ball hard to derive BABIP [PAGE 1].
- PitchF/X enables per-pitch speed/movement/location; wOBA run expectancy [PAGE 1-2]; GAM/thin plate splines [PAGE 3, refs 2-3]; Nathan movement [PAGE 5, ref 4]; calibration literature [PAGE 5, ref 5]; Mike Fast strike zone [PAGE 6, ref 6]; cFIP [PAGE 9, ref 7]; Larson projection reviews [PAGE 9, ref 8].
- Multi-week traps: sample size threshold 1500 pitches ~95 innings [PAGE 8]; test requires 50 innings and one team [PAGE 8]; 181 qualified seasons; starters only. Small samples in relief, team changes, pitch classification. 
- "Retrocausal" maybe how later results validate earlier design: year-to-year stability 0.6787 [PAGE 11] retroactively justifies per-pitch features; combined xFIP result [PAGE 10] retroactively justifies not including K/BB/HR. Need discuss "genealogy" of ideas. Also traps: survivorship (qualified pitchers), selection (one team), baseline scaling ERA to RA/9, RMSE offset allowed [PAGE 9 footnote 7], 50/50 weights [PAGE 10 footnote 8]. Good.

Need no betting. "Breakout/breakdown" okay.

Need maybe mention author "Pei Zhe Shu" [PAGE 1]. Title. Fine.

Need use exact XML tags. Need escape ampersands? We can avoid "&". Use "and". Need no raw "<" in text. Use \lt or words. Equations with \leq are okay? Backslash and letters; no raw <. "<=" not use. Use \leq. In XML, backslash okay. Curly braces okay. Greek okay. Need "R^2" okay. Need apostrophes okay. Use "PitchF/X" okay. Need avoid "&" in "K%, BB% and HR%". Fine.

Need ensure all equations are formal LaTeX. In XML text, `\(...\)` okay. But raw `_` okay. Use `\[ ... \]` maybe. Avoid `<` and `>`. Use \rightarrow, \sum. Good.

Need include citations [PAGE 1] etc. Verbatim quotes: quotes can contain `[0,1]` fine. No `<`. "same handed/opp handed" fine. Quote "R^2" okay. Need exact quote from page 9: "our system is 3rd in R^2 and 2nd in RMSE" source has "We can see that our system is 3rd in R^2 and 2nd in RMSE, and not too much behind the leaders." Use exact. Page 5: "We obtained 88.3% accuracy on our test set." Exact. Page 5: "Pitch F/X raw data has a known issue: it is poorly calibrated[5]." Exact. Page 6: "A pitch locates on the curve has 50% probability of being called a strike." Exact. Page 3: "We use a generalized additive model(GAM)[2] to describe the arsenal rating." Exact. Page 1: "Our arsenal rating and zone rating model are trained and predicted on per-pitch level data" exact. Page 8: "we additionally require the pitcher involved to have at least 1500 pitches(roughly 95 innings) pitched during a single season, which restrict our analysis to starters only." Exact. Page 10: "our model comes out on top, with a pretty big advantage" exact. Page 11: "it has a much higher R^2 than that of cFIP" exact? Source: "We found even without the regression to the mean, it has a much higher R^2 than that of cFIP(which is in turn much higher than every basic pitching stat and linear models based on it, such as xFIP and SIERA, as shown in [7]), and has a similar R^2 with that of ZiPS, only lower than PECOTA, as shown in the table below, during seasons 2012-2014." Use quote.

Need include exact page markers for equations. Good.

Need maybe mention "Unknown Authors" but paper author Pei Zhe Shu [PAGE 1]. Fine.

Need answer in XML. Need not include markdown code fences because XML. But can include LaTeX in text. Need ensure content length. Let's draft.

Potential issue: XML tags with content containing `&` from "R^2 and RMSE" no &; but "K%, BB% and HR%" no &. "defense and park" no &. Use "and" not ampersand. Fine. Need no `<` raw. Avoid "P < 1500"; use "P \lt 1500" or "fewer than 1500". In XML text, `\lt` okay. Avoid "->" okay. Use "greater than" words. Use `\gt` maybe. Fine.

Need maybe include root? If output only sections, okay. The user requires exact XML sections. We'll output six sections. Maybe no root. Good.

Need word count. Let's estimate. THINK_TRACE ~700 words. SOURCE ~1000. Others ~400 each. Total ~3000. Good.

Need ">=1,000-word depth across these exact XML sections" satisfied.

Let's formulate SOURCE with subsections maybe use plain text. Use equations. Need "units" explicit. Let's write carefully.

Equations:

Main:
\[
r_i \sim a(sp_i,xmove_i,zmove_i,type_i,hand_i) + z(xloc_i,zloc_i,type_i,hand_i) + b_r + def_t + pf_{pa}
\]
[PAGE 1]. Units: r_i runs per pitch; a,z,b,def,pf in run-scale contributions; speed mph (0.44704 m/s per mph); movement and location in PitchF/X native units (inches/feet), with conversion to m if needed; hand/type categorical. Note pf scaling exact not specified.

Run expectancy:
\[
r_i = \mathrm{RE}(\text{new count}) - \mathrm{RE}(\text{old count}), \quad \text{non-PA-ending}
\]
\[
r_i = \mathrm{RE}(\text{PA result}) - \mathrm{RE}(\text{old count}), \quad \text{PA-ending}
\]
[PAGE 2]. RE in runs.

Zone:
\[
z(xloc,zloc,type,hand) = \text{local regression smoothed grid coefficient}
\]
Pitch location mixture:
\[
p(\mathbf{l}\mid p)=\sum_k \pi_k \mathcal{N}(\mathbf{l}\mid \mu_k,\sigma^2 I), \quad \sum_k\pi_k=1
\]
[PAGE 3]. Units feet? Native. Probability dimensionless; sigma in same units as location.

Arsenal:
\[
a_i = f_{sp,t,h}(sp_i)+f_{x,t,h}(xmove_i)+f_{z,t,h}(zmove_i)
\]
[PAGE 3]. f thin plate splines. Units run per pitch.

Soft:
\[
a_i = \sum_t q_{it} [f_{sp,t,h}(sp_i)+f_{x,t,h}(xmove_i)+f_{z,t,h}(zmove_i)], \quad q_{it}=P(type_i=t\mid sp_i,xmove_i,zmove_i)
\]
[PAGE 3]. q dimensionless.

GMM:
\[
p(\mathbf{m}\mid p)=\sum_t \pi_t \mathcal{N}(\mathbf{m}\mid \mu_t,\Sigma_t)
\]
\[
p(\mathbf{m}\mid p)=\sum_t \pi_t \mathcal{N}(\mathbf{m}\mid \mu_t+off_p,\Sigma_t)
\]
[PAGE 4-5]. m=(sp,xmove,zmove). Σ positive definite. Units mixed vector: speed mph, movement inches. Need note vector units not homogeneous; Mahalanobis distance uses covariance units. Fine.

Classification:
Naive Bayes from GMM plus multinomial logistic on raw speed/movement. Accuracy 88.3% [PAGE 5].

Strike zone:
\[
S_R(h)=\{(x,z): -0.991 \leq x \leq 0.946,\; 0.906+0.1281h \leq z \leq 2.591+0.1281h\}
\]
\[
S_L(h)=\{(x,z): -1.139 \leq x \leq 0.755,\; 0.617+0.1729h \leq z \leq 2.306+0.1729h\}
\]
[PAGE 6]. h in source-standardized height; source excerpt does not print unit; x,z in native standardized strike-zone coordinates. The 50% called-strike curve from logistic regression.

Final:
\[
ar_p = \left(\sum_i a_i + \sum_i z_i + def_t + pf_{pa}\right) pitch_p + l_{avg}+hand_p+pc\_value_p
\]
[PAGE 7]. ar_p runs per 9 innings (RA/9); pitch_p pitches per 9 innings; l_avg runs per 9; hand_p and pc_value_p runs per 9. Need note sums over pitches? The formula says sum of arsenal and zone rating. Good.

Regression to mean:
\[
\widehat{ar}_p = \frac{IP_p ar_p + IP_0 l_{avg}}{IP_p+IP_0}, \quad IP_0 \approx 20 \text{ innings}
\]
[PAGE 8 footnote 4]. Units innings. Age adjustment via kernel regression. Need note exact kernel not given.

Metrics:
\[
R^2=1-\frac{\sum_j(y_j-\hat y_j)^2}{\sum_j(y_j-\bar y)^2}, \quad RMSE=\sqrt{\frac{1}{N}\sum_j(y_j-\hat y_j)^2}
\]
y in RA/9. R2 dimensionless, RMSE runs/9. [PAGE 9].

Results table. Need maybe present as text:
Marcel 0.1866/0.860; PECOTA 0.1975/0.881; ZiPS 0.2043/0.874; cFIP 0.2183/0.867; arsenal-zone 0.2017/0.864. [PAGE 9].
Combined xFIP: 0.2528/0.819; cFIP combo: 0.2693/0.812 [PAGE 10].
Year-to-year: 0.6628 w/o, 0.6787 with; cFIP 0.4106/0.4475; PECOTA 0.8327; ZiPS 0.6703 [PAGE 11].

Breakdown regimes list. Good.

Need "exact singularity/breakdown regimes" explicit. Use bullets:
- Identifiability of offsets: if off_p and μ_t not constrained, model not identifiable; adding constant to all μ_t and subtracting from off_p leaves likelihood invariant. This is a formal singularity. Good! We can state: For GMM with offset, transformation μ_t→μ_t+c, off_p→off_p-c leaves μ_t+off_p unchanged, so likelihood flat in c. Need constrain sum μ_t or off_p=0. That's a real singularity. Nice.
- Covariance singular: det Σ_t=0; log N→ -∞ or undefined.
- Component collapse π_t→0 or 1; finite mixture boundary.
- Sparse grid: no observations in cell; local regression rank deficient.
- R^2 denominator zero if SST=0.
- Scale: if pitch_p=0, multiplicative term zero; but for actual pitcher not. If pitch_p estimated from previous season and missing, formula undefined. 
- Collinearity def_t and pf_pa and team identity; if team changes, prediction not identified.
- Left-handed small sample; hand_p bonus out-of-sample but can overfit.
- Age kernel outside support; injury not modeled.
- Weather/calibration: feature shift δ; non-invariance of a_i across pitch types. 
Need maybe include in cross-layer.

Need "Retrocausal genealogy" not too long. Include historical lineage and multi-week traps. Use quotes. Good.

Need "Recursive theory of mind" with crisis habit regression vs counter-trap vs clock. Let's write ~450 words.

Need "RLVR_COUNTERFACTUAL_VETOES" ~500 words. Need 3 scenarios. Let's define:

Scenario 1: Calibration-offset veto.
Verifiable condition: for game g, estimated offset \hat δ_g in velocity/movement; if KL divergence between soft pitch-type distribution with and without offset exceeds τ (e.g., 0.10 nats) for a pitcher's 95-inning sample, veto. Prediction: re-running paper pipeline with per-game offset removal should decrease pitch-type label disagreement and improve or at least not worsen held-out R^2; if not, offset adjustment is not validated. Need verify with 2008-14. But "prediction" should be observable. We can say "Predict that naive unadjusted ratings will show larger year-to-year instability in parks with high calibration variance; after correction, the residual correlation between park calibration offset and arsenal rating should approach zero." Verifiable. No betting.

Scenario 2: Small-sample GMM degeneracy veto.
Condition: pitcher's season pitch count P \lt 1500 (paper's threshold) or min component effective sample Nπ_t \lt 30 / covariance condition number κ(Σ_t) \gt 10^6. Veto soft classification and combined rating. Prediction: on subsampled starter seasons, classification accuracy falls below 88.3% and RMSE worsens monotonically as P drops; verify by resampling. This is concrete. Need not use fake ratio? Condition number is legitimate. Good.

Scenario 3: Team-change/environment veto.
Condition: pitcher changes team between t-1 and t; or projected park factor/defense sign flips; paper excluded team changers [PAGE 8 footnote 5]. Veto or recompute. Prediction: including team-changers without recomputing park/defense increases RMSE vs recomputed; verify on 2012-14. Also weather: if game-time air density/wind residual exceeds calibration offset? Maybe include weather in cross-layer. For RLVR third, maybe biomechanical: acute velocity drop. Let's pick biomechanical: If spring training velocity drop > 2σ from pitcher's prior season and age-kernel residual, veto age-only adjustment. Prediction: those pitchers' next-season RA/9 exceeds model by more than RMSE; verify with injury transactions. This is verifiable. But need 3 scenarios. Could include both team and biomech? Need exactly 3. Choose calibration, small-sample, biomechanical/weather? The cross-layer has weather. RLVR can have calibration, GMM, team-change. Need "physical/biomechanical/weather veto proof" in cross-layer. Good.

Maybe third scenario: Weather/park veto. Condition: game-time wind/air density causes movement residual above measurement noise; if not corrected, veto. Prediction: in high-wind/altitude games, arsenal rating residual correlates with wind vector; verify by PitchF/X movement residuals. This is verifiable. But paper's park factor only wOBA; not weather. Could be good. But team-change more directly from paper. Need 3 verifiable. Maybe include all three: calibration, small-sample GMM, team-change. Cross-layer covers biomech/weather. Good.

Need "RLVR" maybe reward verification; scenarios should be verifiable by re-running. We can state each with "veto if [condition]; predicted observable [metric]". Good.

Need ensure no betting. Use "projection" not "bet". Good.

Need maybe mention "no betting lines" not necessary. Avoid "odds". Fine.

Let's write final. Need be careful with XML: use `\lt` not `<`. In quotes, "R^2" okay. Use "and" not &. Avoid raw `&` in "K%, BB% and HR%". Use "RA/9". Good.

Potential issue with `\[` and `\]` inside XML okay. Backslashes okay. Curly braces okay. `\mathcal{N}` okay. `\mid` okay. `\Sigma` okay. `\pi` okay. `\mu` okay. `\sigma` okay. `\mathbb{R}` okay. `\text{...}` okay. No raw `<`. Use `\leq`. Good.

Need maybe not use `\gt`? Use `\gt` okay. In XML, backslash g t. Fine.

Let's draft final with sections.

Check THINK_TRACE word count ~800. Good.

Need include exact tags with no attributes. Good.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s projection chain is not a single regression; it is a multi-stage latent-variable construction. First, each pitch \(i\) receives a run-scale outcome \(r_i\). For non-PA-ending pitches the paper defines the pitch value as the difference between the run expectancy of the new pitch count and the old pitch count; for PA-ending pitches it uses the PA-result run expectancy minus the old pitch-count run expectancy [PAGE 2]. This is a state-contingent valuation, not a raw outcome label. The audit issue is that pitch-count expectations are themselves estimated, so \(r_i\) inherits count-model error and may be negative. Second, the main model decomposes \(r_i\) into an arsenal term, a zone term, a batter term, team defense, and park factor [PAGE 1]. The decomposition is additive and therefore assumes separability: a pitch’s speed-movement value is not allowed to interact with location except through the separate estimated functions. This is a strong gray-zone assumption because real pitching performance often involves arsenal-location interactions, such as a fastball at the top of the zone versus a fastball at the belt.

Third, arsenal rating is modeled with a generalized additive model using thin plate splines, with separate models by pitch type and handedness [PAGE 3]. The paper explicitly says “We use a generalized additive model(GAM)[2] to describe the arsenal rating” [PAGE 3]. Pitch type is not observed cleanly; it is soft-classified with probabilities in \([0,1]\), and the arsenal rating is the probability-weighted average of type-specific ratings [PAGE 3]. The classifier is a Gaussian mixture model plus Naive Bayes and multinomial logistic regression, reporting “88.3% accuracy on our test set” [PAGE 5]. The audit issue is that the remaining errors are concentrated in borderline FF/SI, FC/SL, and SL/CU cases, exactly where type-specific splines differ. A soft probability reduces but does not eliminate discontinuities in the final rating.

Fourth, zone rating is a smoothed grid over standardized strike-zone coordinates. The paper approximates the strike zone as a rectangle whose 50 percent called-strike contour is estimated by logistic regression [PAGE 6]. The gray zone is that grid smoothing and strike-zone standardization both depend on sample size and on batter height and handedness. Fifth, PitchF/X calibration is corrected with per-game offsets because the source says “Pitch F/X raw data has a known issue: it is poorly calibrated[5]” [PAGE 5]. This is critical: if calibration drift is absorbed into movement features, it can be misread as arsenal change.

Sixth, the rating is rescaled to RA/9 by multiplying the summed arsenal and zone terms by pitches per nine, then adding league average RA/9, a handedness adjustment, and a pitch-count-distribution adjustment [PAGE 7]. Prediction adds an age-based kernel adjustment and regression to the mean, with the prior counting as about 20 innings [PAGE 8]. The audit issue is that the age kernel is an average curve, not an injury model, and the handedness bonus is estimated out-of-sample because left-handed pitcher data are sparse [PAGE 7]. Seventh, the results are mixed and must be read exactly: the combined rating has \(R^2=0.2017\) and RMSE \(0.864\), while cFIP has \(R^2=0.2183\) and RMSE \(0.867\); the paper states “our system is 3rd in R^2 and 2nd in RMSE” [PAGE 9]. The stronger claim is in combination: arsenal-zone plus xFIP reaches \(R^2=0.2528\), RMSE \(0.819\) [PAGE 10], and arsenal-zone plus cFIP reaches \(R^2=0.2693\), RMSE \(0.812\) [PAGE 10]. The gray-zone audit is therefore that the model is not standalone-dominant; its value is in adding per-pitch arsenal-zone information to stable component stats. The sample is also restricted: 2.4 million pitches after requiring at least 1500 pitches, 181 qualified starting-pitcher seasons, 2012–2014 test, starters only [PAGE 8]. That restriction is a selection boundary, not a universal validity proof.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Notation and units. Let \(i\) index a pitch, \(p\) a pitcher, \(t\) a pitch type, and \(h\) handedness. The paper’s run-scale quantities are in baseball run units per pitch or per plate appearance; RA/9 is runs per nine innings. Speed is reported in PitchF/X velocity units, conventionally mph, with \(1\ \mathrm{mph}=0.44704\ \mathrm{m/s}\). Movement and location are in PitchF/X native units, conventionally inches or feet depending on the field; the excerpt does not print a full unit table, so conversions to SI must be stated explicitly when used. Probabilities are dimensionless in \([0,1]\). \(R^2\) is dimensionless; RMSE in the projection table is on the RA/9 scale, hence runs per nine innings.

Main per-pitch model. The paper states “Our main model, which is on per-pitch level, and on run scale, which can be described as” [PAGE 1]:
\[
r_i \sim a(sp_i,xmove_i,zmove_i,type_i,hand_i)
+ z(xloc_i,zloc_i,type_i,hand_i)
+ b_r + def_t + pf_{pa}.
\]
Here \(r_i\) is the pitch’s run expectancy, \(a(\cdot)\) is arsenal rating, \(z(\cdot)\) is zone rating, \(b_r\) is batter run expectancy, \(def_t\) is team defense, and \(pf_{pa}\) is park factor [PAGE 1–2]. The exact units of \(pf_{pa}\) are not printed in the excerpt; the equation treats it as a run-scale additive term, so any multiplicative park-factor conversion must be documented separately rather than assumed.

Pitch-level run expectancy. The paper defines:
\[
r_i=\mathrm{RE}(\text{new pitch count})-\mathrm{RE}(\text{old pitch count})
\quad\text{for non-PA-ending pitches,}
\]
\[
r_i=\mathrm{RE}(\text{PA result})-\mathrm{RE}(\text{old pitch count})
\quad\text{for PA-ending pitches.}
\]
This is quoted in substance: “For non-PA ending pitches, the run expectancy is the one of new pitch count minus the one of old pitch count” and “For PA ending pitches, the run expectancy is the one of PA result minus the one of old pitch count” [PAGE 2]. \(\mathrm{RE}\) is in runs. The paper follows the FanGraphs wOBA formula and league wOBA scale [PAGE 2].

Zone-rating operator. The strike zone is split into square grids, each grid is a covariate, and a local regression smooths raw results [PAGE 2]. A pitch-location distribution per pitcher is modeled as a mixture of Gaussians with identical scalar covariance:
\[
p(\mathbf{l}\mid p)=\sum_k \pi_k\,\mathcal{N}(\mathbf{l}\mid \mu_k,\sigma^2 I),
\qquad \sum_k\pi_k=1,
\]
where \(\mathbf{l}=(xloc,zloc)\). This is the paper’s assumption of “circles with identical size” [PAGE 3]. \(\pi_k\) is dimensionless; \(\mu_k\) and \(\sigma\) are in location units. The zone contribution is the grid-smoothed coefficient evaluated at the pitch location, \(z_i=z(xloc_i,zloc_i,type_i,hand_i)\).

Arsenal-rating operator. The paper says “We use a generalized additive model(GAM)[2] to describe the arsenal rating” [PAGE 3]. For a fixed type and handedness,
\[
a_i=f_{sp,t,h}(sp_i)+f_{x,t,h}(xmove_i)+f_{z,t,h}(zmove_i),
\]
where each \(f\) is a thin plate spline [PAGE 3]. With soft classification,
\[
a_i=\sum_t q_{it}\left[f_{sp,t,h}(sp_i)+f_{x,t,h}(xmove_i)+f_{z,t,h}(zmove_i)\right],
\quad
q_{it}=P(type_i=t\mid sp_i,xmove_i,zmove_i).
\]
The paper states “each pitch has a probability ranging from [0,1] of being some pitch type” [PAGE 3]. \(q_{it}\) is dimensionless; \(a_i\) is runs per pitch.

Pitch-type GMM. For a specific pitcher:
\[
p(\mathbf{m}\mid p)=\sum_t \pi_t\,\mathcal{N}(\mathbf{m}\mid \mu_t,\Sigma_t),
\quad
\mathbf{m}=(sp,xmove,zmove),
\]
with \(\Sigma_t\) positive definite [PAGE 4]. The classification version adds a pitcher-specific offset:
\[
p(\mathbf{m}\mid p)=\sum_t \pi_t\,\mathcal{N}(\mathbf{m}\mid \mu_t+off_p,\Sigma_t).
\]
The paper reports 88.3 percent test accuracy and notes errors are “borderline pitches” [PAGE 5].

Movement and calibration. The paper follows Nathan’s method to remove drag and gravity, leaving only the Magnus effect [PAGE 5]. It also corrects per-game calibration offsets because “Pitch F/X raw data has a known issue: it is poorly calibrated[5]” [PAGE 5]. These are measurement operators, not performance operators: uncorrected offsets enter speed and movement features before \(a_i\) is computed.

Strike-zone operator. The paper defines the strike zone as the closed curve where a pitch has 50 percent called-strike probability, estimated by logistic regression [PAGE 6]. The rectangular approximation is:
\[
S_R(h)=\{(x,z): -0.991\leq x\leq 0.946,\;
0.906+0.1281h\leq z\leq 2.591+0.1281h\},
\]
\[
S_L(h)=\{(x,z): -1.139\leq x\leq 0.755,\;
0.617+0.1729h\leq z\leq 2.306+0.1729h\}.
\]
These are given on [PAGE 6]. The excerpt does not print the unit of \(h\), so \(h\) must be supplied in the paper’s internal standardization; the coefficients cannot be safely unit-converted without that assumption.

Final combined rating. The paper gives:
\[
ar_p=
\left(\sum_i a_i+\sum_i z_i+def_t+pf_{pa}\right)\,pitch_p
+l_{avg}+hand_p+pc\_value_p,
\]
where \(pitch_p\) is estimated pitches per nine innings, \(l_{avg}\) is league average RA/9, \(hand_p\) is a handedness adjustment, and \(pc\_value_p\) is a pitch-count-distribution adjustment [PAGE 7]. \(ar_p\) is on the RA/9 scale, runs per nine innings. The paper says the model is “not too much behind the leaders” and reports the table values: Marcel \(R^2=0.1866\), RMSE \(0.860\); PECOTA \(0.1975\), \(0.881\); ZiPS \(0.2043\), \(0.874\); cFIP \(0.2183\), \(0.867\); arsenal-zone-combined \(0.2017\), \(0.864\) [PAGE 9]. It also states “our system is 3rd in R^2 and 2nd in RMSE” [PAGE 9].

Prediction adjustments. Age adjustment uses kernel regression on 2008–2011 data [PAGE 8]. Regression to the mean is described as regressing each pitcher to league average RA/9 according to innings pitched in the last year, with the prior counting as about 20 innings [PAGE 8]. A formal empirical-Bayes form consistent with that description is:
\[
\widehat{ar}_p=
\frac{IP_p\,ar_p+IP_0\,l_{avg}}{IP_p+IP_0},
\qquad IP_0\approx 20\ \text{innings}.
\]
This is a representation of the stated prior, not an additional invented model. The paper’s reported year-to-year \(R^2\) is \(0.6628\) without regression to the mean and \(0.6787\) with it; cFIP is \(0.4106\) and \(0.4475\); PECOTA is \(0.8327\); ZiPS is \(0.6703\) [PAGE 11].

Metrics. With \(y_j\) the realized RA/9 and \(\hat y_j\) the projection:
\[
R^2=1-\frac{\sum_j(y_j-\hat y_j)^2}{\sum_j(y_j-\bar y)^2},
\qquad
\mathrm{RMSE}=\sqrt{\frac{1}{N}\sum_j(y_j-\hat y_j)^2}.
\]
\(R^2\) is dimensionless; RMSE is runs per nine innings. The paper allows an offset in RMSE computation [PAGE 9].

Exact singularity and breakdown regimes. (1) In the offset GMM, the transformation \(\mu_t\mapsto \mu_t+c\), \(off_p\mapsto off_p-c\) leaves \(\mu_t+off_p\) unchanged, so the likelihood is flat unless an identification constraint is imposed. (2) If \(\Sigma_t\) is singular or numerically near-singular, \(\mathcal{N}(\mathbf{m}\mid \mu_t,\Sigma_t)\) is undefined or numerically explosive; component collapse with \(\pi_t\to 0\) or \(\pi_t\to 1\) is a boundary breakdown. (3) If a zone grid cell has no observations, the local regression coefficient is unidentified or rank-deficient; bandwidth going to zero overfits and bandwidth going to infinity erases zone information. (4) If \(R^2\) is computed on a sample with zero variance in \(y\), the denominator is zero and \(R^2\) is undefined. (5) If \(pitch_p\) is missing or estimated from an inadequate prior, the scale from runs per pitch to RA/9 is undefined. (6) If team defense, park factor, and team identity are collinear, the additive decomposition is not identified; the paper’s exclusion of pitchers who changed teams is a control for this [PAGE 8]. (7) Age-kernel extrapolation outside the observed age support and acute injury are not modeled by a smooth kernel; these are biomechanical breakdown regimes.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is explicit. It begins from the failure mode of traditional systems: ERA or RA/9 “cannot separate pitcher performance from fielder defense well,” while K%, BB%, HR%, and batted-ball data are “hard to derive crucial information like BABIP” [PAGE 1]. The PitchF/X response is to move the unit of analysis from the season or plate appearance to the pitch, using speed, movement, location, pitch count, and handedness [PAGE 1]. The run-expectancy layer inherits the FanGraphs wOBA framework [PAGE 2]. The arsenal layer inherits generalized additive models and thin plate splines [PAGE 3]. The movement layer inherits Nathan’s drag-and-gravity-removal method [PAGE 5]. The calibration layer inherits the known PitchF/X calibration critique [PAGE 5]. The strike-zone layer inherits Mike Fast’s zone work [PAGE 6]. The comparison layer inherits Marcel, PECOTA, ZiPS, and context-based FIP, with cFIP as the context-adjusted FIP-like baseline [PAGE 9]. The evaluation layer inherits Larson’s projection reviews [PAGE 9]. This is a retrocausal genealogy in the sense that the later year-to-year stability result, \(R^2=0.6787\) with regression to the mean [PAGE 11], retrospectively justifies the decision to model per-pitch arsenal and zone features rather than only seasonal outcomes.

The multi-week traps are visible in the design. First, the paper requires at least 1500 pitches, roughly 95 innings, in a single season, which “restrict our analysis to starters only” [PAGE 8]. A four-to-six-week velocity or movement spike is therefore not a validated input; the model’s stability claim is a season-scale claim. Second, the test set requires at least 50 innings and no team change across two seasons [PAGE 8]. That removes park-factor and defense-projection ambiguity, but it also creates a survivorship and selection boundary: the 181 qualified seasons are not a random sample of all pitchers. Third, soft pitch classification is trained on labeled data and reports 88.3 percent accuracy [PAGE 5]; a multi-week change in a pitcher’s repertoire can shift the mixture weights before the labeler or the analyst recognizes the new role. Fourth, the handedness bonus for left-handed pitchers is estimated out-of-sample because lefty data are sparse [PAGE 7]; a short left-handed sample can therefore be over-adjusted. Fifth, the pitch-count-distribution adjustment is selected by partial least squares from many candidate features [PAGE 8, footnote 3]; this is a legitimate dimensionality-reduction step, but it is also a researcher-degree-of-freedom trap if the selected component is treated as a structural law rather than a validated correction. Sixth, the year-to-year table shows that the combined rating is stable, but PECOTA is more stable in that table, \(0.8327\) versus \(0.6787\) [PAGE 11]; the correct retrocausal reading is not “arsenal-zone is the most stable system,” but “arsenal-zone adds a distinct per-pitch signal that combines well with stable component stats” [PAGE 10].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer is a conflict among three analyst habits. Crisis habit regression is the temptation, after a projection miss, to abandon the per-pitch construction and return to ERA, wins, or raw K%, BB%, and HR% because those are familiar. The paper itself supplies the counterweight: the standalone combined rating is third in \(R^2\) and second in RMSE [PAGE 9], but when linearly combined with xFIP it reaches \(R^2=0.2528\), RMSE \(0.819\), and with cFIP it reaches \(R^2=0.2693\), RMSE \(0.812\) [PAGE 10]. That is not a reason to panic-regress to old stats; it is a reason to treat arsenal-zone as a complementary likelihood, not a replacement oracle.

The counter-trap is overreading the breakout-breakdown table. That table sorts pitchers by “arsenal-zone-combined rating minus ZiPS projection” and checks where realized RA/9 minus the baseline falls [PAGE 9]. It is a relative mispricing test against a baseline, not an absolute causal proof that the rating alone predicts breakouts. A recursive-theory-of-mind error occurs when the analyst imagines the baseline system as a fixed opponent and forgets that the comparison sample, the baseline’s own adjustments, and the 181-season selection rule are all part of the game. The correct counter-trap is to ask whether the breakout signal survives after controlling for team change, handedness, age, and pitch-classification uncertainty, not to treat the top-third percentage as a universal law.

The clock is the aging and workload clock. The paper uses a “direct age-based adjustment, based on kernel regression result of 2008-2011 data” and says arsenal rating is “probably decreasing every year(at least after around age 24-25), due to advancing age and accumulated pitch ‘miles’” [PAGE 8]. That is a smooth clock, but pitchers, hitters, coaches, and front offices are adaptive agents. A pitcher may change mechanics to hide a velocity loss; a hitter may change approach against a soft-classified slider; a coach may change usage; a classifier may relabel a cutter as a slider. The recursive expectation is that the projection model is observing a moving target. The multi-week trap is to treat a three-to-six-week movement or velocity deviation as a permanent arsenal change, or conversely to treat a season-scale age curve as an acute injury detector. The paper’s own sample threshold, 1500 pitches and starters only [PAGE 8], is the clock boundary: below that clock, the GMM and the soft classifier are less trustworthy, and the correct behavior is to widen uncertainty rather than to force a point projection.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A projection is admissible only if the measurement layer, biomechanical layer, and environmental layer preserve the feature semantics used in training. Formally, let the trained feature vector be \(\mathbf{m}=(sp,xmove,zmove)\). An observed vector is \(\tilde{\mathbf{m}}=\mathbf{m}+\delta_M+\delta_B+\delta_E\), where \(\delta_M\) is calibration error, \(\delta_B\) is biomechanical deviation, and \(\delta_E\) is weather or environmental deviation. The arsenal term is
\[
a_i=\sum_t q_{it}(\tilde{\mathbf{m}})\,g_{t,h}(\tilde{\mathbf{m}}).
\]
A shift in \(\tilde{\mathbf{m}}\) changes \(q_{it}\) and \(g_{t,h}\). Unless the type-specific functions \(g_{t,h}\) are identical across types, which the paper explicitly denies by using “separate arsenal rating model for different pitch types” [PAGE 3], the arsenal rating is not invariant to cross-layer shifts. That is the veto proof: measurement, biomechanical, and weather changes are not cosmetic; they alter the probability-weighted type-specific spline evaluation.

Physical measurement veto. The paper removes drag and gravity and considers only the Magnus effect [PAGE 5]. It also corrects per-game calibration offsets because raw PitchF/X “is poorly calibrated” [PAGE 5]. If a game’s calibration offset is not removed, or if the offset is confounded with the pitcher-specific \(off_p\) in the GMM, then speed and movement shifts are absorbed into arsenal rating. Veto condition: the estimated per-game offset exceeds the model’s feature-noise scale, or the offset and cluster-center parameters are not separately identified. In that regime, a pitch’s movement residual is not a stable physical property of the pitcher.

Biomechanical veto. The age adjustment is a kernel regression over 2008–2011 data [PAGE 8]. It is a population clock, not an injury model. If a pitcher’s spring velocity or movement deviates by more than the historical residual scale for his age, the smooth age curve is not a sufficient statistic for his current arm state. Veto condition: an acute velocity or movement drop that is large relative to the pitcher’s own prior-season variance, especially with a concurrent workload or injury transaction. In that regime, the arsenal rating may still describe past pitches, but it does not projected future RA/9 without a biomechanical override.

Weather and park veto. The paper uses park factor and team defense as projected linear combinations of prior years, with five years for park factor and three years for team defense because “team defense has a much higher year-to-year variance” [PAGE 6]. That controls the run environment at the team-season scale, but it does not remove game-level air density, wind, or temperature effects on pitch movement. Veto condition: a game-level environmental residual that changes movement beyond the calibration residual, or a park-factor projection that is not transportable because the pitcher changed teams. The paper’s own exclusion of pitchers who changed teams is evidence that the cross-layer transport problem is real [PAGE 8, footnote 5]. In that regime, the combined rating is not a clean pitcher ability estimate until park factor and defense are recomputed for the new team and the movement residual is checked against weather.

The adjudication rule is therefore layered: physical calibration can veto the movement features; biomechanics can veto the age-adjusted future projection; weather and team context can veto the park-defense scaling. None of these vetoes requires a betting line or a market claim. They are verifiable data-integrity conditions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Calibration-offset veto. Verifiable condition: for game \(g\), estimate the per-game velocity and movement offset \(\hat\delta_g\) used in the paper’s calibration step. Compute the soft pitch-type distributions with and without the offset, \(q_{it}\) and \(q'_{it}\), and the information divergence
\[
D_{\mathrm{KL}}(q_i\,\|\,q'_i)=\sum_t q_{it}\log\frac{q_{it}}{q'_{it}}
\]
in nats. Veto the arsenal-zone-combined rating for that pitcher-season if the inning-weighted divergence exceeds a pre-registered threshold, for example \(0.10\) nats, or if the offset changes the dominant pitch-type label on more than a pre-registered fraction of pitches. Predicted observable: after applying the paper’s per-game offset correction, the residual correlation between park-level calibration variance and arsenal rating should shrink toward zero, and held-out year-to-year \(R^2\) should not degrade. If the correction increases instability, the calibration operator is not validated.

Scenario 2: Small-sample GMM degeneracy veto. Verifiable condition: for a pitcher-season, count pitches \(P\). The paper’s own classification requirement is at least 1500 pitches, roughly 95 innings [PAGE 8]. Additionally compute the minimum effective component size \(\min_t P\pi_t\) and the covariance condition number \(\kappa(\Sigma_t)\). Veto the soft classification and the combined rating if \(P\lt 1500\), or if \(\min_t