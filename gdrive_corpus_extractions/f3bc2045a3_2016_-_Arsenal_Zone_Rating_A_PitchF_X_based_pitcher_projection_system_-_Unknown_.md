---
source: "2016 - Arsenal Zone Rating A PitchF X based pitcher projection system - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2016"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4082
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text (MIT Sloan 2016 paper "Arsenal/Zone Rating: A PitchF/X based pitcher projection system" by Pei Zhe Shu). 

Constraints:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios. Use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to carefully parse the source text and page numbers. The source text has page markers embedded like "1", "2", etc. Let me map content to pages:

Page 1: Title, author, Introduction (Section 1), Method start (Section 2, 2.1 Main model equation).
Page 2: 2.2 Run Expectancy, 2.3 Zone Rating start.
Page 3: Zone Rating continued, 2.4 Arsenal Rating start.
Page 4: 2.5 Pitch Type Classification (GMM formula).
Page 5: Classification continued, 2.6 Pitch Movement Calculation and Pitch Calibration.
Page 6: 2.7 Strike Zone formulas, 2.8 Other parameters.
Page 7: 2.9 Adjustment to main model (combined formula described but formula image missing?), pitchp, lavg, handp, pc_valuep.
Page 8: 2.10 Adjustment for prediction purpose, 3.1 Predictive power test start, table 1 (R^2/RMSE).
Page 9: Breakout-breakdown table, explanation.
Page 10: 3.2 Combination with K%, BB%, HR%, tables for xFIP and cFIP combinations.
Page 11: 3.3 Year-to-year correlation table, 3.4 Discussion.
Page 12: Conclusion, References.

Wait, the text says "PAGES: 11" but the content goes up to page 12. I should cite based on the visible page markers in the text. The text shows page numbers 1 through 12. The user said PAGES: 11, but the source text includes page 12. I'll cite what's visible, using [PAGE N] markers.

Let me structure the response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the model mathematically, identify gray zones (e.g., pitch classification errors being "borderline", soft classification, small sample for relievers, age adjustment kernel regression, park/defense projection limitations, lefty pitcher bonus, GMM positive definite assumption, strike zone standardization assumptions, cFIP limitation, etc.).

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, verbatim quotes, breakdown regimes. I need to transcribe the main model equation:
r_i ~ a(sp_i, xmove_i, zmove_i, type_i, hand_i) + z(xloc_i, zloc_i, type_i, hand_i) + rb + deft + pf_pa

Run expectancy rules.
Zone rating: grid, logistic regression for strike zone, mixture of Gaussian with identical scalar matrix covariance.
Arsenal rating: GAM, thin plate splines, separate models per pitch type and handedness.
Pitch classification: GMM formula with π_t, μ_t, Σ_t. Offset model p(sp,xmove,zmove) = ∑ π_t N(... | μ_t + off_p, Σ_t). Naive Bayes + multinomial logistic regression. 6 types: FF, SI, CH, FC, SL, CU. 88.3% accuracy.
Movement: Nathan method, remove drag/gravity, Magnus only. Calibration offset per game.
Strike zone: logistic regression 50% probability curve, rectangle approximation. Formulas for RHB and LHB.
Other params: linear regression for defense (UZR/DRS average, 3 years) and park factor (wOBA-based, 5 years). Gaussian prior for batter run expectancy.
Combined formula: arp = a + z + deft + pf_pa ... scaled by pitchp, lavg, handp, pc_valuep. (The formula image is missing in text, but described verbally).
Prediction adjustments: age-based kernel regression 2008-2011, regression to mean (prior ~ 20 innings, footnote 4).
Data: 2008-2014 PitchF/X + Retrosheet, ~4.9M pitches, ~2.4M with 1500 pitch req. Starters only. 181 qualified seasons 2012-2014.
Baselines: Marcel, PECOTA, ZiPS, cFIP.
Results tables.
Combination with xFIP/cFIP.
Year-to-year R^2 table.

I must not invent fake ratios. I can use actual formulas from the paper.

<RETROCAUSAL_GENEALOGy>: Historical/scientific lineage & multi-week traps. Lineage: PECOTA, ZiPS, Steamer, fangraphs wOBA, Hastie & Tibshirani GAM 1990, Wood thin-plate splines 2003, Nathan pitch movement 2012, Greenhouse PITCHf/x calibration 2010, Mike Fast strike zone 2011, Brooksbaseball pitch classification, cFIP/Judge 2015, xFIP/SIERA [7]. Multi-week traps: aging curve after 24-25, pitch classification degradation for small samples, park/defense stability assumptions, regression to mean prior ~20 innings, lefty data scarcity, borderline pitch misclassification (FF/SI, FC/SL, SL/CU).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a meta-cognitive section about how the modeler/predictor might regress to crisis habits (over-reliance on ERA, ignoring per-pitch data, etc.), counter-traps (thinking the new model fixes everything when it has GMM small-sample issues), and clock (temporal decay: age adjustment, year-to-year correlation, 2012-2014 test window vs training 2008-2014).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: pitch movement physics (Magnus, drag, gravity removal). Biomechanical: batter height/handedness strike zone adjustment, pitcher handedness bonus. Weather: park factor, though weather per se isn't detailed, park factors capture some environmental effects. Veto conditions: when GMM fails (small N), when pitch classification is borderline, when age >25 decline not captured by kernel regression, when park/defense projection is noisy (3-year defense high variance).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I need 3 scenarios where the model would be vetoed, with counterfactual predictions.
1. Small sample reliever (<1500 pitches/season): GMM pitch classification unstable -> model invalid; prediction falls back to league average with high uncertainty.
2. Left-handed pitcher: combined righty/lefty arsenal model + arbitrary "bonus" -> systematic miscalibration; veto unless out-of-sample bonus re-estimated.
3. Aging pitcher >25 with velocity decline: kernel regression from 2008-2011 may not capture abrupt injury-driven decline; model overestimates future RA/9 (predicts too low RA/9, i.e., too optimistic).

Word count: Must be >= 1,000 words total across sections. THINK_TRACE alone >= 400. I'll aim for substantial depth.

No betting lines. No toy equations like Force/Fatigue. Use real LaTeX.

Let's draft carefully.

Page citations: I need to use [PAGE N] exactly. I'll reference the visible page numbers.

Let's write.

THINK_TRACE content (multi-hop derivation):
- Start from the generative model: r_i ~ a(...) + z(...) + rb + deft + pf_pa.
- Explain run expectancy scattering across pitch count.
- Zone rating: spatial grid, Gaussian mixture for pitcher's location distribution (identical scalar covariance), local regression smoothing.
- Arsenal: GAM with thin plate splines, separate by pitch type and handedness, soft classification probabilities weighting.
- Classification: GMM with pitcher-specific offset, then multinomial logistic regression on top of Naive Bayes. 6 classes. 88.3% accuracy, errors concentrated in borderline pairs.
- Calibration: per-game offset vector to correct PITCHf/x systematic bias.
- Strike zone: logistic regression 50% contour -> rectangle approximation with height-dependent z-center.
- Scaling to RA/9: pitchp (pitches per PA * PA per 9), lavg (year/league specific), handp (lefty bonus), pc_valuep (pitch count distribution interaction via PLS).
- Prediction: age decay kernel regression, regression to mean prior ~20 IP.
- Evaluation: 181 starter-seasons, R^2/RMSE vs Marcel/PECOTA/ZiPS/cFIP. Combination with xFIP/cFIP improves to top rank. Year-to-year stability R^2=0.6787.
- Gray zones: the main model equation's functional form is left as nonparametric (a and z are black-box GAM/grid), so the exact link function and regularization strength are unspecified; the "combined formula" in 2.9 is referenced but not displayed (image omitted), making exact coefficients unrecoverable; pitch classification accuracy 88.3% with systematic borderline errors means arsenal rating for FF/SI etc. is noisy; small-sample generalization to relievers is theoretical only; lefty pitcher bonus is ad-hoc; park/defense are linear projections with different lookback windows (5 vs 3 years) justified by variance but not cross-validated jointly; cFIP combination table omits Marcel+cFIP? Actually table shows Marcel+cFIP, PECOTA+cFIP, ZiPS+cFIP, arsenal+cFIP. Fine.

SOURCE_OPERATORS_AND_EQUATIONS: Transcribe equations with LaTeX. Units: run expectancy (runs), speed (mph presumably), movement (inches or feet? Paper doesn't specify units explicitly but PITCHf/x typically feet for movement, mph for speed. I should state if paper doesn't specify, say "units as recorded by PITCHf/x; paper does not respecify SI conversion" or avoid assuming. Better: state "raw PITCHf/x units; paper does not explicitly convert to SI." Location x,z likely in feet normalized to strike zone. I'll note units are native PITCHf/x and the paper does not state SI conversion. Strike zone formula coefficients: height in feet presumably? The coefficients .01281*height etc. If height in inches, .01281 per inch is small. If feet, too large. Probably inches. I'll say "height in the same units used by Mike Fast's formula; paper does not explicitly state unit." Actually to be safe: "paper reproduces Fast's coefficients without restating input units." 

Verbatim quotes: I'll quote key phrases.

Breakdown regimes: GMM covariance positive definite requirement (singular if collinear pitch clusters); small N <1500 pitches; lefty data scarcity; age >25 decline; park/defense projection variance; borderline pitch classes.

RETROCAUSAL_GENEALOGY: Lineage from traditional projection (PECOTA, ZiPS, Steamer) to PITCHf/x era. Citations [1]-[8]. Multi-week traps: aging cliff, sample-size cliffs for pitch classification, park/defense instability over multi-week windows, handedness platoon effects.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression = reverting to ERA-based projection when new system underperforms; counter-trap = over-trusting arsenal-zone rating as "true ability" ignoring its own regression-to-mean and age decay; clock = 2012-2014 holdout vs 2008-2011 training kernel, temporal stationarity assumption.

CROSS_LAYER_VETO_ADJUDICATION: Physical veto: Magnus-only assumption ignores drag/seam effects in certain weather; biomechanical: strike zone rectangle approximation fails for extreme batters; weather/park: park factor linear projection assumes stationarity. Veto proof conditions enumerated.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions.
1. Reliever with 300 pitches: GMM overfits -> veto; counterfactual prediction: model's RA/9 error increases by >0.2 runs relative to starter baseline; prediction defaults to league average + age adjustment.
2. Lefty starter: shared arsenal model + bonus -> veto if bonus not recalibrated; counterfactual: systematic overprediction of lefty performance by ~0.10-0.15 RA/9 (need to be careful not to invent exact numbers? I can say "measurable positive bias" without exact figure, or derive from "bonus" concept. I'll keep it qualitative but verifiable: sign of bias.)
3. Pitcher with abrupt velo loss mid-season: age kernel smooth -> veto; counterfactual: model projects pre-injury arsenal rating, overestimates future performance (underestimates RA/9).

I need to ensure total word count >= 1000. Let's write generously.

Check for betting lines: none.
Check for toy equations: none. Only formulas from paper.

Let's compose the final output in the exact XML structure. No extra text outside.

I'll make sure to include [PAGE N] markers throughout SOURCE_OPERATORS_AND_EQUATIONS and other sections where citing.

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper proposes a hierarchical, per-pitch generative model for run expectancy, decomposing a pitch’s outcome into arsenal quality, location quality, batter context, team defense, and park effects. The first derivation hop is the main model on page 1: each pitch result r_i (run expectancy) is expressed as a sum of an arsenal function a(·) over speed and movement, a zone function z(·) over location, plus additive terms for batter run expectancy rb, team defense deft, and park factor pf_pa. Because r_i is defined on a run scale per pitch, the model must distribute plate-appearance value across individual pitches; page 2 specifies that non-PA-ending pitches receive the difference in run expectancy between old and new pitch counts, while PA-ending pitches receive the PA-result run expectancy minus the old count run expectancy. This scattering rule implies the model assumes additive separability of pitch-level value within a plate appearance, which breaks down if pitch sequencing exhibits strong path-dependence (e.g., a 0-2 count changing the value of a subsequent pitch nonlinearly).

The second hop constructs zone rating. Page 2–3 describe a spatial grid over the strike zone, smoothed by local regression, and model each pitcher’s location distribution as a mixture of Gaussians with identical scalar covariance matrices. This isotropy assumption is strong: it treats a pitcher’s location spread as a circle rather than allowing anisotropic clusters (e.g., a pitcher who misses arm-side but not glove-side). If the true location covariance is not spherical, the Gaussian mixture is misspecified and the zone rating will smear location value incorrectly.

The third hop builds arsenal rating via a generalized additive model with thin-plate splines, separately for each pitch type and batter/pitcher handedness pairing (page 3–4). Soft pitch classification weights each pitch by posterior type probability from a multinomial logistic regression stacked on a Naïve Bayes/GMM classifier. Page 4 gives the GMM: a pitcher’s observed (speed, x-movement, z-movement) triples are a mixture of ellipsoidal clusters with positive-definite covariance Σ_t. A singularity regime occurs when two pitch types have nearly identical speed-movement signatures (e.g., FF/SI, FC/SL, SL/CU), making Σ_t ill-conditioned and the posterior probabilities diffuse; the paper acknowledges 88.3% classification accuracy with errors concentrated in these borderline pairs.

The fourth hop handles measurement corruption. Page 5–6 remove drag and gravity per Nathan’s method, retaining Magnus movement, then apply a per-game offset vector to correct known PITCHf/x calibration bias. Page 6–7 standardize the strike zone via logistic regression on called-strike probability, approximating the 50% contour with a rectangle whose z-center scales linearly with batter height. The fourth hop scales the raw combined rating to RA/9 (page 7–8): pitchp converts run-per-pitch to runs per nine innings using pitches per PA and PA per nine (proxied by WHIP); lavg supplies a year/league-specific baseline RA/9 predicted by linear extrapolation; handp gives left-handed pitchers an out-of-sample bonus; pc_valuep rewards pitchers who frequently land in favorable pitch counts, identified via partial least squares on 2008–2011 data. The exact functional combination formula is referenced on page 7 but not reproduced in the text, so the precise linking weights are unrecoverable from the source.

Gray-zone audit: (1) the model is restricted to pitchers with ≥1500 pitches in a season (~95 innings), so generalization to relievers is asserted theoretically but not demonstrated; (2) left-handed pitchers suffer pooled righty/lefty arsenal modeling plus an ad-hoc bonus, creating a systematic calibration risk; (3) age adjustment uses kernel regression on 2008–2011 and assumes smooth decline after age 24–25, which fails under abrupt velocity loss or injury; (4) defense uses only 3 years of UZR/DRS because of high variance, while park factor uses 5 years, an asymmetry not jointly cross-validated; (5) cFIP is acknowledged as inherently limited because it contains almost nothing beyond stable component stats, yet it remains a baseline; (6) the breakout/breakdown tables compare differentials against ZiPS/PECOTA/cFIP but do not report significance thresholds beyond “statistically significant,” and the 181-season sample is modest for detecting interactions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Main per-pitch model (page 1):
\[
r_i \sim a(sp_i,\; xmove_i,\; zmove_i,\; type_i,\; hand_i) \;+\; z(xloc_i,\; zloc_i,\; type_i,\; hand_i) \;+\; rb \;+\; deft \;+\; pf_{pa}
\]
where r_i is pitch-level run expectancy (runs), a is arsenal rating, z is zone rating, rb is batter run expectancy, deft is team defense, and pf_pa is park factor. Units are native PITCHf/x and run-expectancy units; the paper does not restate inputs in SI units.

Pitch-level run expectancy assignment (page 2):
(1) Non-PA-ending: r_i = RE(new count) - RE(old count).
(2) PA-ending: r_i = RE(PA result) - RE(old count).
This implies additive value allocation across pitches within a plate appearance.

Zone rating construction (page 2–3): strike zone divided into square grids; each grid is a covariate. Pitcher location distribution assumed to be a mixture of Gaussians with identical scalar covariance matrices:
\[
p(\text{location}) = \sum_k \pi_k \, \mathcal{N}(\mu_k, \sigma^2 I)
\]
Breakdown regime: if a pitcher’s true location covariance is anisotropic, the scalar-matrix assumption is misspecified.

Arsenal rating (page 3–4): generalized additive model with thin-plate splines; separate models per pitch type and same/opposite handedness. Soft classification weights arsenal ratings by posterior pitch-type probability.

Pitch-type GMM (page 4): for pitcher a and pitch b,
\[
(sp_b,\; xmove_b,\; zmove_b) \sim \sum_t \pi_t \, \mathcal{N}(\mu_t,\; \Sigma_t), \quad \Sigma_t \succ 0
\]
Classification offset model (page 5):
\[
p(sp,\; xmove,\; zmove) = \sum_t \pi_t \, \mathcal{N}\bigl((sp,\; xmove,\; zmove)\mid \mu_t + off_p,\; \Sigma_t\bigr)
\]
Label set: {FF, SI, CH, FC, SL, CU}; test accuracy 88.3% (page 5). Errors concentrate on FF/SI, FC/SL, SL/CU — the singularity/ill-conditioning regime when cluster means approach one another.

Movement calibration (page 5–6): drag and gravity removed per A. Nathan; only Magnus effect retained. Per-game offset vector corrects systematic park/game-level bias in velocity and movement.

Strike zone (page 6): logistic regression on called-strike/ball data; 50% probability contour defines the zone, approximated by a rectangle. Right-handed batter formula excerpt:
\[
-0.0991 \le x \le 0.0946, \quad 0.0906 + 0.01281 \cdot height \le z \le 0.2591 + 0.01281 \cdot height
\]
Left-handed batter analogous. Paper does not explicitly state height unit (inches vs. feet) or x/z unit.

Other parameters (page 6–7): team defense = linear projection of average UZR and DRS over previous 3 years; park factor = wOBA-based over previous 5 years. Gaussian prior on batter run expectancy to remove pitcher-context bias.

RA/9 scaling (page 7–8): pitchp scales run-per-pitch to RA/9 via (pitches per PA) × (PA per 9 innings); lavg is year/league average RA/9 predicted by linear extrapolation of prior years to prevent overfitting; handp is a left-handed-pitcher bonus estimated out-of-sample (2008–11 → 2012–14); pc_valuep is a pitch-count-distribution interaction chosen by PLS. Exact combined formula is referenced but not printed in the provided text.

Prediction adjustment (page 8): age-based decay via kernel regression on 2008–2011; regression to league-average RA/9 with prior equivalent to roughly 20 innings (footnote 4, page 8).

Data and evaluation (page 8): PitchF/X 2008–2014, Retrosheet play-by-play; ~4.9 million pitches raw, ~2.4 million after 1500-pitch starter filter; 181 qualified starter-seasons in 2012–2014 holdout. Baselines: Marcel, PECOTA, ZiPS, cFIP. Results table (page 8): arsenal-zone-combined R² = 0.2017, RMSE = 0.864, ranking 3rd in R² and 2nd in RMSE among the five systems. Combination with xFIP (page 10): arsenal-zone-combined + xFIP reaches R² = 0.2528, RMSE = 0.819 at 50/50 weight, best in class. Year-to-year correlation (page 11): arsenal-zone-combined R² = 0.6787 (with regression to mean), versus cFIP 0.4475, PECOTA 0.8327, ZiPS 0.6703.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a direct historical lineage from traditional ERA/component projection systems to per-pitch PITCHf/x modeling. It explicitly contrasts itself with PECOTA, ZiPS, and Steamer (page 1), which rely on ERA/RA/9 or K%, BB%, HR% and batted-ball data but cannot cleanly separate pitcher contribution from defense or derive BABIP reliably. Its methodological ancestors include Fangraphs’ wOBA and wOBA scale for run expectancy [1], Hastie and Tibshirani’s generalized additive models [2], Wood’s thin-plate regression splines [3], Nathan’s PITCHf/x movement physics [4], Greenhouse’s PITCHf/x calibration documentation [5], and Mike Fast’s strike-zone formula [6]. The pitch-classification scheme follows Brooksbaseball.net’s six-type taxonomy [FF, SI, CH, FC, SL, CU], and the cFIP baseline descends from Judge’s “FIP, In Context” [7]. Larson’s projection reviews [8] supply the external benchmark context.

Multi-week traps embedded in this genealogy: (1) Aging cliff — the paper assumes smooth arsenal decline after age 24–25 via kernel regression, but a multi-week sample containing an abrupt velocity drop or injury violates the smoothness assumption and produces stale projections. (2) Classification cliff — GMM and Naïve Bayes require ~1500 pitches per season to stabilize; over a short multi-week window (e.g., April), posterior probabilities for borderline pitches (FF/SI, FC/SL, SL/CU) become diffuse, injecting noise into arsenal rating exactly when small-sample variance is highest. (3) Park/defense instability — team defense is projected from only 3 years because UZR/DRS have high year-to-year variance; over a multi-week early-season window, defensive samples are too thin for the linear projection to be trustworthy, so park_factor + deft terms carry unmodeled error. (4) Handedness asymmetry — left-handed pitchers were pooled into the right-handed arsenal model and given an empirical bonus; over a multi-week stretch with an unusual platoon split, this ad-hoc correction miscalibrates lefty projections. (5) Temporal non-stationarity — the model trains on 2008–2014 but tests on 2012–2014; if pitch-type usage or called-zone boundaries shifted within that window, the strike-zone standardization and movement calibration may drift out of sample.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When a projection system faces a disappointing early-season sample, the human analyst tends to regress to familiar habits — overweighting ERA, wins, or recent observed outcomes rather than trusting the per-pitch latent construct. In this paper’s context, the crisis habit is reverting to traditional component stats (K%, BB%, HR%) precisely because arsenal-zone rating alone ranks only 3rd in R² (page 8). The authors anticipate this by combining with xFIP/cFIP, but an end-user under pressure may abandon the novel model and fall back to cFIP, forfeiting the breakout/breakdown identification edge.

Counter-trap: The inverse error is over-trusting the arsenal-zone-combined rating as a measure of “true pitching ability” while ignoring its own internal regressions. The model applies age decay and regression to a ~20-inning prior (page 8), which means it is not a pure ability readout but a shrunken, age-adjusted estimator. A counter-trap occurs when an analyst treats the rating as unadjusted ground truth and fails to apply the same regression-to-mean discipline when combining it with xFIP, thereby double-counting stability and overestimating predictive precision.

Clock: The system’s temporal assumptions create a hard deadline on validity. Age decay is estimated from 2008–2011 kernel regression and applied to 2012–2014 projections; if a pitcher’s decline accelerates nonlinearly after age 30, the smooth kernel under-predicts RA/9 deterioration. Year-to-year stability is strong (R² = 0.6787, page 11) but not perfect, and the model requires ~95 innings of prior data, so late-season acquisitions or early-season call-ups fall outside the supported domain. The clock also runs on pitch-classification technology: GMM clusters defined on 2008–2014 PITCHf/x may not transfer to later sensor generations or to modified baseballs without recalibration, because the offset vector correction is game-specific and cannot absorb regime shifts in pitch movement distributions.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The movement model removes drag and gravity, retaining only Magnus effect per Nathan’s method [4] (page 5). This is physically justified for standard atmospheric conditions but breaks down under extreme weather — high humidity, temperature, or altitude changes air density and drag profiles, violating the Magnus-only assumption. A park with extreme elevation (e.g., Coors Field) experiences systematic drag deviation that a per-game offset may partially absorb but cannot fully disentangle from true movement changes. Veto condition: if game-day air-density deviation exceeds the calibration offset’s absorption capacity, predicted movement features are biased.

Biomechanical layer veto: Strike-zone standardization adjusts the z-interval linearly with batter height and hands the x-interval to handedness (page 6). This rectangular approximation discards the true curved 50% contour and assumes height affects only the z-center. Extreme batters (very tall or very short, or unusual stance) violate the linear height assumption; the zone rating then misassigns location value. Veto condition: batter height outside the regression’s observed range or stance-induced zone distortion not captured by handedness.

Weather/park layer veto: Park factor uses a 5-year linear projection of wOBA-based park values (page 6). This assumes park effects are stationary and separable from weather. In multi-week samples with anomalous weather patterns (e.g., persistent wind direction, cold front), the park factor term carries residual environmental variance not modeled by the linear projection. Veto condition: weather-driven park deviation uncorrelated with the 5-year historical average.

Adjudication proof: The model is defensible only when (a) pitch-type GMM clusters are well-conditioned (non-borderline, sufficient N ≥ 1500 pitches/season), (b) age follows the smooth 2008–2011 kernel decay, (c) batter height lies within the linear strike-zone regression domain, (d) park/defense projections use the specified lookback windows without weather shocks, and (e) the pitcher is a starter meeting the innings threshold. Outside these bounds, the system should be vetoed in favor of a component-stat-only projection or a larger prior weight on league average.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Reliever small-sample veto: A relief pitcher throws 300 pitches in a season, below the 1500-pitch starter threshold. The GMM pitch classifier lacks sufficient clusters to identify Σ_t reliably; posterior probabilities for FF/SI or SL/CU become diffuse. Veto: do not compute arsenal-zone-combined rating. Counterfactual prediction: model error (RMSE on RA/9) rises above the starter baseline of 0.864 runs and converges toward the Marcel RMSE of 0.860 or worse; the optimal prediction reverts to league-average RA/9 plus age adjustment with a prior closer to 20 innings or more.

Scenario 2 — Left-handed pitcher calibration veto: A left-handed starter is projected using the pooled righty/lefty arsenal model plus the ad-hoc “bonus” estimated out-of-sample (page 7). If the bonus was estimated on 2008–2011 but the true lefty/righty arsenal differential shifted in 2012–2014, the bonus is stale. Veto: recalibrate hand_p on a held-out lefty sample or exclude lefties. Counterfactual prediction: systematic bias in projected RA/9 for left-handed pitchers, with sign determined by the direction of the differential shift; the R² advantage over PECOTA/ZiPS (0.2017 vs 0.2043/0.1975) erodes specifically in the lefty subsample.

Scenario 3 — Abrupt velocity-loss veto: A starter aged 28 suffers a mid-season velocity drop of 2–3 mph due to injury. The age adjustment uses smooth kernel regression on 2008–2011 (page 8) and cannot encode an abrupt, non-age-related cliff. Veto: replace age-based projection with observed post-injury movement/speed distribution or flag for manual review. Counterfactual prediction: the model overestimates future arsenal rating and underestimates future RA/9 (overly optimistic projection); prediction error is largest in the season immediately following the velocity loss, where the model’s output diverges from actual RA/9 by more than the cross-validated regression-to-mean prior can absorb.
</RLVR_COUNTERFACTUAL_VETOES>