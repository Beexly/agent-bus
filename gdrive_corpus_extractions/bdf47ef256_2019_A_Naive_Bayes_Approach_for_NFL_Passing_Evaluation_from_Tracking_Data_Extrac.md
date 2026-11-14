---
source: "2019 A Naive Bayes Approach for NFL Passing Evaluation from Tracking Data Extracted from Images - Sarah Mallepalle, Ron Yurko, Kostas Pelechrinis, Sam Ventura.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 25
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5302
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper about a Naive Bayes approach for NFL Passing Evaluation using tracking data extracted from images. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully extract page numbers from the source text. The text includes page markers like "1", "2", etc. embedded in the content. Let me map out the pages based on the page numbers visible:

Page 1: Abstract, Introduction start
Page 2: Section 1.1, 1.2 start
Page 3: Section 1.3, Section 2 start
Page 4: Section 2.1, Figure 1
Page 5: Section 2.2 Removing Distortion
Page 6: Figure 2, homography
Page 7: Eliminating unnecessary details
Page 8: Section 2.3 Clustering Methods
Page 9: Section 2.3.1 Image Segmentation, Table 1
Page 10: Section 2.3.2 K-Means++
Page 11: K-Means++ details
Page 12: Figure 6
Page 13: Section 2.3.3 DBSCAN
Page 14: Figure 7, DBSCAN details, Section 2.3.4 Output Data
Page 15: Section 3 Evaluating and Characterizing
Page 16: Section 3.1.1 KDE
Page 17: Section 3.1.2 GAM
Page 18: Section 3.2 2-D Naive Bayes
Page 19: Naive Bayes equation, Figure 9
Page 20: Section 4 Results, 4.1 Accuracy
Page 21: Section 4.2 League-Wide Passing Trends
Page 22: Section 4.3 Team Defense
Page 23: Figure 11, Section 4.4 Quarterback
Page 24: Figure 12, 13, Section 5 Discussion
Page 25: Figure 14, Section 5 continued, Appendix A
Page 26: Appendix B, References
Page 27: References continued
Page 28: References continued
Page 29: References continued
Page 30: References end

Wait, the source text says PAGES: 25 but the content goes up to page 30 in the text markers. Let me check the text more carefully.

Looking at the source text:
- "1" appears after abstract/intro start
- "2" after section 1.1
- "3" after section 1.3
- "4" after section 2.1
- "5" after section 2.2
- "6" after Figure 2
- "7" after eliminating details
- "8" after section 2.3
- "9" after section 2.3.1
- "10" after section 2.3.2 start
- "11" after K-means++ details
- "12" after Figure 6
- "13" after section 2.3.3 start
- "14" after Figure 7, DBSCAN details
- "15" after section 3 start
- "16" after section 3.1.1
- "17" after section 3.1.2
- "18" after section 3.2 start
- "19" after naive bayes equation
- "20" after section 4.1
- "21" after section 4.2
- "22" after section 4.3
- "23" after Figure 11, section 4.4
- "24" after Figure 12, section 5
- "25" after Figure 13, section 5 continued
- "26" after Figure 14, section 5 continued
- "27" after Appendix A
- "28" after Appendix B, references start
- "29" after references continued
- "30" after references end

The user said PAGES: 25 but the text seems to go beyond. I should cite page numbers exactly as they appear in the text markers. I'll cite [PAGE N] where N corresponds to the page numbers embedded in the source text.

Now let me structure the response.

THINK_TRACE: Need >=400 words. Deep multi-hop derivation & gray-zone audit.
- Discuss the image processing pipeline: homography, HSV thresholding, K-means++, DBSCAN.
- Discuss the statistical models: KDE for pass locations, GAM for completion probability, 2-D naive Bayes for individual surfaces.
- Gray zones: observational bias (targeting open receivers, game situation missing), missing 2016 data (65% missing, non-uniform), incomplete passes not in tracking data, play identifiers missing so can't link to tracking data, out-of-bounds passes not depicted.
- Multi-hop: image pixel -> homography -> real coordinates -> clustering -> KDE/GAM/Naive Bayes -> completion surface.
- Breakdown regimes: small sample sizes for individual QBs (400-700 passes/season), sparse regions of field, touchdown color noise similar to line of scrimmage.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Homography: mapping (xt, yt) to (xr, yr) via H matrix elements h00...h21. Page [PAGE 6].
- KDE: f̂_h(x) = (1/nh) Σ K((x-xi)/h). Page [PAGE 16]. Bivariate: f(x,y) with hx, hy. Page [PAGE 16].
- Scott's rule: ĥ = 1.06 × min(σ̂, IQR/1.34) × n^(-1/5). Page [PAGE 16].
- GAM: g^-1(E[y|x]) = β0 + Σ fi(xi). Page [PAGE 17]. Logit link: log(P(Complete)/P(Incomplete)) = c0 + fx(x) + fy(y) + fxy(x,y). Page [PAGE 17].
- Naive Bayes: P̂_G*(Complete|x,y) = [Ng × f̂_g(x,y) × P̂_g(Complete|x,y) + NMedian × f̂_NFL(x,y) × P̂_NFL(Complete|x,y)] / [Ng × f̂_g(x,y) + NMedian × f̂_NFL(x,y)]. Page [PAGE 19].
- HSV thresholds table: Page [PAGE 9].
- DBSCAN: ε-neighborhood, τ threshold. Page [PAGE 13].
- Units: pixels, yards (x downfield, y lateral), Hz (12.5 Hz tracking), completion percentage (dimensionless probability).

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: MLB PITCHf/x (2006), Statcast (2015), NBA optical tracking (2013-14, 25 Hz), RFID NFL (2015, 12.5 Hz), NHL planned 2019-20. Page [PAGE 2].
- Software lineage: openWAR, pitchRx, nflscrapR, nhlscrapR, Lahman, ballr, ncaahoopR. Page [PAGE 3].
- Algorithmic lineage: K-means (MacQueen 1967), K-means++ (Arthur & Vassilvitskii 2007), DBSCAN (Ester et al. 1996), GAM (Hastie & Tibshirani 1990), KDE (Silverman 1986), Scott's rule (Venables & Ripley 2002). Pages [PAGE 10], [PAGE 13], [PAGE 17], [PAGE 16].
- Multi-week traps: only 6 weeks of 2017 tracking data released via Big Data Bowl, then removed. 2016 charts ~65% missing, non-uniform across teams. Pages [PAGE 3], [PAGE 4]. This creates survivorship bias and temporal non-stationarity if one tried to extrapolate across seasons without adjusting for missingness mechanism.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This is a more abstract section. Need to interpret "crisis habit regression" as teams/QBs regressing under pressure to league-average surfaces (the naive Bayes shrinkage toward NFL prior). "Counter-trap" could be the defensive adjustment or the offense exploiting known defensive surfaces. "Clock" could refer to game situation/time pressure not in data, or the 12.5 Hz tracking frequency.
- Crisis habit regression: When sample size Ng is small, the estimate shrinks toward league average P̂_NFL. The weight NMedian acts as a regularizer. Crisis = sparse data regions (deep passes, sidelines). Regression to mean.
- Counter-trap: Defenses aware of QB surfaces might adjust coverage, creating a game-theoretic feedback loop not modeled (observational bias). Offenses might target areas where defense is weak (completion percentage allowed surfaces).
- Clock: 12.5 Hz RFID sampling rate limits temporal resolution; pass charts are static endpoints, no trajectories; no play clock/time-to-throw in extracted data (though NGS has it publicly as summary). The image extraction loses temporal information.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: RFID chips in shoulder pads, so ball location vs player location deviation when receiver reaches out. Page [PAGE 20]. Homography assumes planar field; trapezoidal distortion corrected.
- Biomechanical: Passing endpoints (catch or ground) not throw release; no air yards, no time-to-throw, no receiver separation. The model conditions only on (x,y) target location, ignoring route concepts, pressure, coverage.
- Weather: Not mentioned in the paper; indoor/outdoor not encoded in pass charts. Wind, precipitation, temperature could affect completion probability but are absent from the 2-D surface model. This is a veto layer: if weather varies systematically across locations (e.g., outdoor stadiums in late season), the spatial surface is confounded.
- Veto proof: The paper explicitly states models use only observational data and are biased by targeting decisions, defensive coverage, game situation. Page [PAGE 15]. Without game state, the completion surface is not causal.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. Need to provide 3 counterfactual veto scenarios with verifiable predictions.
- Scenario 1: Homography failure on non-standard stadiums. Prediction: pass charts from stadiums with non-rectangular endzone camera angles will show systematic coordinate shifts >2 yards relative to tracking data ground truth. Verifiable via comparing extracted coordinates to RFID tracking for a game where both exist.
- Scenario 2: DBSCAN τ threshold false negatives on touchdown passes. Prediction: in games with >5 touchdown passes, DBSCAN with τ = ntd will merge adjacent touchdown clusters if they are within ε=10 pixels, causing undercounting. Verifiable by checking Appendix B style metadata against image for games with multiple TDs.
- Scenario 3: Naive Bayes prior dominates in low-sample regions. Prediction: for a QB with <100 attempts in a season, the estimated completion surface in deep middle (>20 yards, |y|<13.33) will be statistically indistinguishable from league average regardless of true ability, because Ng × f̂_g is overwhelmed by NMedian × f̂_NFL. Verifiable by simulation: hold out a high-performing deep passer, reduce sample size, observe posterior collapse to prior.

Need to ensure no betting lines. The paper mentions Defensive DVOA, Total QBR, Expected Points, Win Probability in references but I should not discuss betting odds/spreads/moneylines. Expected Points Added (EPA) and Win Probability Added (WPA) are mentioned in future work but those aren't betting lines per se; however, to be safe, I can mention them as analytic metrics but avoid framing as betting. Actually, WPA/EPA are not betting lines, but I should be careful not to imply odds. I can mention them as performance metrics if needed, but maybe avoid to be safe. The user said zero betting lines: spreads, totals, moneylines, odds. EPA/WPA are not those, but I'll keep it neutral.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial depth in each.

Citations: Use [PAGE N] format. Need exact page markers. Let me double check page numbers by looking at where numbers appear in isolation.

In the source:
- After abstract: "1" appears.
- After section 1.1: "2" appears.
- After section 1.3: "3" appears.
- After section 2.1: "4" appears.
- After section 2.2: "5" appears.
- After Figure 2: "6" appears.
- After eliminating details: "7" appears.
- After section 2.3: "8" appears.
- After section 2.3.1: "9" appears.
- After section 2.3.2 start: "10" appears.
- After K-means++ details: "11" appears.
- After Figure 6: "12" appears.
- After section 2.3.3 start: "13" appears.
- After Figure 7: "14" appears.
- After section 3 start: "15" appears.
- After section 3.1.1: "16" appears.
- After section 3.1.2: "17" appears.
- After section 3.2 start: "18" appears.
- After naive bayes equation: "19" appears.
- After section 4.1: "20" appears.
- After section 4.2: "21" appears.
- After section 4.3: "22" appears.
- After Figure 11: "23" appears.
- After Figure 12: "24" appears.
- After Figure 13: "25" appears.
- After Figure 14: "26" appears.
- After Appendix A: "27" appears.
- After Appendix B: "28" appears.
- References continued: "29" appears.
- End: "30" appears.

I'll cite these page numbers.

Let me draft each section carefully.

THINK_TRACE:
- Start with image-to-field pipeline.
- Multi-hop: NGS JPEG (1200x1200 pixels) -> homography H (h00...h21) warps trapezoid to rectangle -> removes sideline numbers -> HSV thresholding (Table 1, page 9) segments by color -> K-means++ (page 10) clusters completions/interceptions -> DBSCAN (page 13) cleans touchdown noise (ε=10, τ=ntd) -> K-means++ again -> map pixels to (x,y) yards relative to LOS.
- Statistical layer: KDE (page 16) estimates f_NFL(x,y) with Scott's rule bandwidth; GAM (page 17) models logit completion probability with smooth terms fx, fy, fxy(x,y); Naive Bayes (page 19) shrinks group surfaces toward league prior using NMedian weight.
- Gray zones: (1) observational bias: QBs target open receivers, defenses cover leverage areas, game situation missing (page 15); (2) missing 2016 data ~65% missing, non-uniform (page 4); (3) incomplete pass endpoints not in RFID tracking, so validation only on completions (page 14, 20); (4) no play IDs/timestamps to link charts to tracking data (page 14); (5) out-of-bounds passes not depicted but counted in attempts (footnote 6, page 8); (6) RFID in shoulder pads causes ball-vs-player deviation on reach-out catches (page 20).
- Singularity/breakdown: small Ng for individual QBs (400-700/season) causes overfitting unless shrunk; deep middle passes rare (2.96% in 2017, 3.11% in 2018 beyond 20 yards) so KDE/GAM estimates there are noisy; DBSCAN fails if touchdown clusters within ε=10 pixels overlap.

SOURCE_OPERATORS_AND_EQUATIONS:
- Homography equation from page 6.
- KDE equation page 16.
- Scott's rule page 16.
- GAM logit equation page 17.
- Naive Bayes equation page 19.
- DBSCAN page 13.
- HSV table page 9.
- Units: pixels, yards, Hz, dimensionless probability.
- Assumptions: planar field, bivariate normal kernel, spherical clusters, observational data only.

RETROCAUSAL_GENEALOGY:
- Tracking tech lineage: MLB PITCHf/x 2006, Statcast 2015, NBA 25Hz 2013-14, NFL RFID 12.5Hz 2015, NHL planned 2019-20. Page 2.
- Open source software lineage. Page 3.
- Algorithm lineage: MacQueen 1967, Arthur & Vassilvitskii 2007, Ester et al. 1996, Hastie & Tibshirani 1990, Silverman 1986, Venables & Ripley 2002.
- Multi-week traps: Big Data Bowl only 6 weeks 2017 then removed (page 3); 2016 charts 65% missing non-uniform (page 4). Temporal non-stationarity and selection bias if stitching seasons.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Naive Bayes shrinkage toward league average under sparse data (small Ng). The "crisis" is data scarcity; habit is regression to P̂_NFL.
- Counter-trap: Defensive completion-allowed surfaces (pages 21-22) invite offensive exploitation; offenses targeting weak zones alter the very surface being estimated (endogeneity/game theory). Not modeled.
- Clock: 12.5 Hz RFID sampling (page 2); static endpoint charts lose time-to-throw, play clock, down/distance. The model is atemporal. Crisis = late-game, two-minute drill scenarios where decision-making changes but surface remains static.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: Shoulder-pad RFID vs ball location deviation (page 20). Homography assumes flat field; endzone camera perspective distortion corrected but residual error possible.
- Biomechanical: No release point, no air yards, no receiver separation, no route concept. Endpoint only (catch or ground). Cannot evaluate throw quality independent of catch.
- Weather: Not encoded. Outdoor stadiums, wind, precipitation confound spatial surfaces if season/weather correlates with location (e.g., cold weather games).
- Veto: Paper itself admits observational bias (page 15). Without game state, no causal claim.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Homography stadium variance. Prediction: extracted coordinates for same physical yard line differ by >1.5 yards between open-air and domed stadiums due to camera mounting. Verifiable via overlap with RFID tracking for Week 1 2017 games.
- Scenario 2: DBSCAN touchdown undercount. Prediction: games with ntd >= 4 will show at least one merged TD cluster if two TDs are within 10 pixels, causing ntd extraction < true ntd. Verifiable against JSON metadata counts.
- Scenario 3: Prior dominance. Prediction: QB with Ng < 150 attempts, true deep-middle completion 50% vs league 28%, will have estimated surface within 3 percentage points of league average in that cell. Verifiable via synthetic subsampling of 2018 QB data.

Make sure to not mention betting lines. No spreads, totals, moneylines, odds. I won't mention any of those.

Word count: I'll write generously. THINK_TRACE definitely >400 words. Total >1000 words.

Let me write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s pipeline converts static NGS pass-chart images into spatially resolved passing metrics through a chain of computer-vision and statistical operations. The first hop is geometric: each 1200 × 1200 pixel JPEG presents the field as a trapezoid, so a uniform pixel window near the top of the image represents more square yards than one near the bottom. The authors compute a homography matrix **H** with elements h00, …, h21 that maps trapezoidal coordinates (xt, yt) to rectangular coordinates (xr, yr), producing a bird’s-eye view with uniform yardage [PAGE 6]. After cropping to the field and extending the sidelines 10 yards behind the line of scrimmage, they remove white sideline numerals by deducing field depth from pixel height (55 yards with 6 markings versus 75 yards with 8) and replacing white pixels with sideline grey [PAGE 7].

The second hop is segmentation. Four pass outcomes are encoded by color: completions green, incompletions white, touchdowns blue, interceptions red. HSV thresholds isolate each class [PAGE 9], but touchdown segmentation is contaminated because the line of scrimmage and trajectory lines share the blue pass color [PAGE 8]. The third hop is clustering. K-means++ initializes centers via squared-distance-weighted sampling to avoid centroid collapse onto a single pass [PAGE 10–11], then Lloyd’s iteration minimizes within-cluster Euclidean variation under a spherical covariance assumption [PAGE 10]. DBSCAN removes touchdown noise by retaining only density-connected pixel sets with neighborhood radius ε = 10 and minimum cluster size τ = ntd, discarding sparser clusters as noise [PAGE 13].

The fourth hop is statistical inference. League-wide target locations are estimated with bivariate kernel density estimation f(x, y) using a normal kernel and Scott’s rule bandwidth ĥ = 1.06 × min(σ̂, IQR/1.34) × n^(−1/5), bounded to 10 yards behind and 55 yards ahead of the line of scrimmage [PAGE 16]. Completion probability is modeled by a generalized additive model with a logit link: log(P(Complete)/P(Incomplete)) = c0 + fx(x) + fy(y) + fxy(x,y), where fx and fy are marginal smoothers and fxy is a tensor-product interaction smoother [PAGE 17]. For individual QBs and defenses, small samples (typically 400–700 attempts per team per season; fewer for individual QBs) motivate a two-dimensional naive Bayes shrinkage estimator that blends the group surface f̂_g(x,y) × P̂_g(Complete|x,y) with the league prior f̂_NFL(x,y) × P̂_NFL(Complete|x,y), weighted by NMedian versus Ng [PAGE 18–19].

Gray-zone audit. (1) Observational endogeneity: the data record only where passes were thrown, not where they could have been thrown; QBs target open receivers and defenses cover leverage zones, while game situation (down, distance, score, time) is absent [PAGE 15]. (2) Selection bias: the 2016 season is excluded because ~65% of charts are missing and missingness is non-uniform across teams [PAGE 4]; the official tracking release covered only six weeks of 2017 before withdrawal [PAGE 3]. (3) Validation limitation: RFID tracking does not log where incomplete balls hit the ground, so image extraction can be checked against league data only for completions, and play identifiers/timestamps are absent, preventing play-level linkage [PAGE 14, 20]. (4) Metadata mismatch: out-of-bounds passes and spikes count in attempts but are not drawn on charts, so ninc derived from JSON may exceed visible incompletions [PAGE 8, footnote 6]. (5) Biomechanical noise: RFID chips sit in shoulder pads, so a receiver reaching for the ball creates a small but systematic offset between tracked player location and ball endpoint [PAGE 20]. (6) Spatial sparsity: only 2.96% (2017) and 3.11% (2018) of targets beyond 20 yards occur in the middle of the field (−13.33 ≤ x ≤ 13.33), so deep-middle completion surfaces rest on very thin evidence [PAGE 21]. Breakdown regimes include Ng → small for individual passers, where the naive Bayes prior dominates; DBSCAN failure when distinct touchdown clusters lie within ε = 10 pixels; and homography distortion residual if camera geometry deviates from the assumed trapezoidal projection.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, SI/information/probability units, page citations, and breakdown regimes.

Units. Spatial coordinates (x, y) are measured in yards relative to the line of scrimmage: x is downfield (negative behind, positive ahead), y is lateral across field width [PAGE 9]. Image coordinates are in pixels on a 1200 × 1200 canvas [PAGE 4]. Tracking frequency is 12.5 Hz for NFL RFID [PAGE 2]. Completion percentage is a dimensionless probability in [0, 1], expressed as a percentage in results.

Homography (geometric rectification) [PAGE 6]. The mapping from trapezoidal image coordinates to rectangular field coordinates is defined by the homography matrix **H** with entries h00, …, h21:
[xr]   [h00 h01 h02] [xt]
[yr] = [h10 h11 h12] [yt]
[1 ]   [h20 h21  1 ] [1 ]
with the third row homogenized so that (xr, yr) = ((h00·xt + h01·yt + h02)/(h20·xt + h21·yt + 1), (h10·xt + h11·yt + h12)/(h20·xt + h21·yt + 1)). Assumption: the field is planar and the camera projection is well-approximated by a projective transform. Breakdown: non-planar terrain (e.g., substituted turf or endzone elevation) or extreme off-axis camera angles violate the homography and introduce spatially varying yardage error.

HSV color segmentation [PAGE 9]. Pass classes are isolated by lower/upper HSV bounds: Complete (80,100,100)–(160,255,255); Incomplete (0,0,90)–(0,0,100); Touchdown (220,40,40)–(260,100,100); Interception (0,60,60)–(20,100,100). Touchdowns require post-processing because line-of-scrimmage and trajectory pixels fall inside the touchdown band [PAGE 8].

K-means++ [PAGE 10–11]. Given n observations Xi ∈ R², choose K centers to minimize within-cluster Euclidean variation. Initial point c1 uniform; for j = 2,…,K, draw cj with probability proportional to D(Xi)² = min_{c∈C} ||Xi − c||². Lloyd’s iteration then alternates assignment Ci = argmin_k ||Xi − ck|| and centroid update ck = mean{Xi : Ci = k}. Assumption: clusters are approximately spherical and pass markers are circular. Breakdown: overlapping pass locations can be split or merged; K must equal metadata counts nc or nint, which may mismatch visible markers [PAGE 11–12].

DBSCAN [PAGE 13]. For pixel set X, define ε-neighborhood N(xi) = {xj : ||xi − xj|| ≤ ε}. Points are density-connected if reachable via chains of overlapping neighborhoods. Clusters with |N(p)| < τ are noise and discarded. Here ε = 10 pixels and τ = ntd [PAGE 13]. Breakdown: two distinct touchdown passes closer than ε pixels merge into one cluster; conversely, a single pass with fragmented blue pixels may be split.

Kernel density estimation [PAGE 16]. Bivariate pass-location density:
f̂(x, y) = (1/(n·hx·hy)) Σ_{i=1}^n Kx((x − xi)/hx) · Ky((y − yi)/hy).
The authors use a bivariate normal kernel decomposable into Kx and Ky, with Scott’s rule bandwidth ĥ = 1.06 × min(σ̂, IQR/1.34) × n^(−1/5) per dimension [PAGE 16]. Domain bounded to x ∈ [−10, 55] yards and lateral sideline limits. Breakdown: histogram-like grid alternatives suffer anchor-point sensitivity and empty-cell noise [PAGE 16]; KDE smooths over sparse deep-middle regions but cannot recover unsampled structure.

Generalized additive model [PAGE 17]. For binary completion Yi ∈ {0, 1} with logit link g⁻¹(z) = log(z/(1−z)):
log( P̂(Complete | x, y) / P̂(Incomplete | x, y) ) = c0 + fx(x) + fy(y) + fxy(x, y).
fx, fy, fxy are tensor-product interaction smoothers enabling functional ANOVA decomposition [PAGE 17]. Assumption: the log-odds surface is smooth in (x, y) and additive in marginal plus interaction terms. Breakdown: GLMs cannot capture non-linear smooth effects; tree models partition space discontinuously [PAGE 17]; observational bias means this describes past targeting, not causal passability [PAGE 15].

Two-dimensional naive Bayes shrinkage [PAGE 18–19]. For group g (QB or defense):
P̂_G*(Complete | x, y) =
[ Ng · f̂_g(x, y) · P̂_g(Complete | x, y) + NMedian · f̂_NFL(x, y) · P̂_NFL(Complete | x, y) ]
/
[ Ng · f̂_g(x, y) + NMedian · f̂_NFL(x, y) ].
Ng is total passes for/against g; NMedian is the median pass count in the class (QBs or team defenses). Interpretation: the league term is a prior; as Ng grows, weight shifts to the group estimate [PAGE 19]. Breakdown: when Ng ≪ NMedian in a spatial cell, the posterior collapses to the league average regardless of true group ability, masking elite or poor deep passers in low-sample regions [PAGE 18–19].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week data traps.

Tracking technology lineage [PAGE 2]. MLB introduced PITCHf/x pitch trajectory tracking in 2006 and Statcast in 2015 (exit velocity, launch angle, 25 Hz player/ball tracking in the NBA context cited for contrast). The NBA mandated optical tracking in all arenas for the 2013–14 season at 25 Hz, annotated with play-by-play and game-state metadata. The NHL planned league-wide player/puck tracking for 2019–20. The NFL installed RFID-based tracking in all venues during the 2015 season at 12.5 Hz, recording players and ball. This establishes the NFL as the lowest-frequency of the major optical/RFID systems and the one with the most restricted public release.

Open-source software lineage [PAGE 3]. The authors position next-gen-scraPy alongside openWAR (Baumer et al., 2015), pitchRx (Sievert, 2015), nflscrapR (Horowitz et al., 2017), nhlscrapR (Thomas and Ventura, 2013), Lahman, ballr, and ncaahoopR—each a package that converts proprietary or semi-proprietary sports data into reproducible research objects. The intellectual genealogy is therefore one of “scraping” league summaries to approximate private tracking data.

Algorithm lineage [PAGE 10, 13, 16, 17]. K-means dates to MacQueen (1967); K-means++ seeding to Arthur and Vassilvitskii (2007); DBSCAN to Ester et al. (1996); GAMs to Hastie and Tibshirani (1990); KDE bandwidth heuristics to Silverman (1986) and Scott’s rule as implemented in Venables and Ripley (2002). The paper’s statistical stack is thus assembled from canonical, pre-existing components rather than novel estimators.

Multi-week traps. Two temporal selection hazards dominate the dataset. First, the NFL’s Big Data Bowl released tracking data for only the first six weeks of the 2017 regular season, then removed it after the competition [PAGE 3]. Any analysis built solely on that public tracking release would suffer from severe truncation and could not capture seasonal evolution. Second, the authors exclude the 2016 NGS season because approximately 65% of pass charts are missing, and missingness is not uniform across teams, which would bias team-level comparisons [PAGE 4]. Together, these create a “survivorship” window: valid public image coverage effectively begins with the 2017 regular season, and even then, charts are missing “without explanation” for some games [PAGE 4]. A researcher attempting to stitch 2016–2018 into a single panel would inject non-ignorable missingness and non-stationarity into every spatial surface.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock structure.

Crisis habit regression. The “crisis” in this model is data scarcity: an individual QB or team defense may have only a handful of attempts in a particular region of the field (e.g., deep middle beyond 20 yards). The naive Bayes estimator resolves this by regressing the local group surface toward the league-average completion surface P̂_NFL(Complete | x, y), with the strength of regression governed by NMedian relative to Ng [PAGE 18–19]. When Ng is small, the posterior mean habitually collapses toward the league prior; when Ng is large, the group’s idiosyncratic surface is expressed. This is a shrinkage habit triggered by sample-size crisis rather than by performance crisis.

Counter-trap. The paper estimates defensive completion-percentage-allowed surfaces and compares them to Football Outsiders’ Defense DVOA [PAGE 21–22]. This creates a game-theoretic counter-trap: if an offense knows the Bears allow low completion percentages across the field but are weaker in a specific zone, the offensive coordinator will target that zone, altering the very distribution f̂_g(x, y) the model assumes fixed. Because the dataset contains no play-call, coverage, or separation information [PAGE 15], the completion surface is a reduced-form equilibrium outcome, not a structural parameter. The counter-trap is that exploiting an estimated defensive weakness changes the defensive surface in subsequent plays, but the model treats each pass as an independent draw from a static spatial distribution.

Clock. The tracking system operates at 12.5 Hz [PAGE 2], yet the extracted pass charts encode only endpoints (catch or ground) relative to the line of scrimmage [PAGE 4]. Time-to-throw, play clock, down, distance, and score are absent from the image-derived dataset [PAGE 15]. Consequently, the model is atemporal: a 15-yard out route on 3rd-and-15 with 1:00 remaining is represented by the same (x, y) cell as the same route on 1st-and-10 in the first quarter. The “clock” is therefore missing both as a conditioning variable and as a temporal resolution limit; two-minute-drill decision-making and pre-snap adjustments are unobserved confounders that the spatial surface cannot disentangle.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto layers.

Physical layer [PAGE 6, 20]. The homography assumes a planar field projected by a camera onto a trapezoid. Residual rectification error can distort yardage, particularly near the image boundaries where the projective denominator h20·xt + h21·yt + 1 approaches small values. Separately, RFID chips are located in shoulder pads, so the tracked player location deviates from the ball location when a receiver extends to make a catch [PAGE 20]. The image charts mark where the ball is caught or hits the ground [PAGE 4], so validation against tracking data inherits this ball-vs-player offset as irreducible physical noise.

Biomechanical layer [PAGE 4, 15, 20]. The output data contain only the endpoint of each pass: complete, incomplete, touchdown, or interception, with (x, y) in yards relative to the line of scrimmage [PAGE 9, Appendix B]. There is no release point, no air yards, no time-to-throw, no receiver route concept, no defensive coverage shell, and no separation distance. A quarterback’s completion surface therefore conflates throw accuracy with play design, receiver skill, and defensive leverage. The model cannot veto a throw that was accurate but dropped, nor reward a tight-window throw that was incompleted because the receiver was tackled immediately. The explicit admission that the data are observational and biased by targeting decisions and game situation functions as a biomechanical veto: without route and coverage context, completion percentage by location is not a causal measure of passing quality [PAGE 15].

Weather layer. The NGS pass charts and extracted metadata contain no field condition, temperature, wind, or precipitation variables [PAGE 4, Appendix A]. Outdoor stadiums in late-season games face different environmental envelopes than domes or early-season games. If passing location and completion probability correlate with weather, and weather correlates with stadium or date, the estimated 2-D completion surfaces are confounded. This is a veto layer because a spatial model that conditions only on (x, y) attributes all surface variation to QB/defensive skill, when some portion may be meteorological. The paper acknowledges that NGS publicly provides summaries while raw data—including any weather-linked contextual fields—remain private [PAGE 3].

Veto adjudication. The cross-layer veto is sustained: the pipeline is internally consistent for extracting pixel locations and mapping them to yards, but the statistical surface cannot support causal claims about passer or defensive quality without game-state, weather, and biomechanical covariates. The most defensible use is descriptive—characterizing where passes were thrown and how often they were completed in those locations during 2017–2018—subject to the observational-bias warning [PAGE 15].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions.

Scenario 1: Homography stadium-variance veto. Counterfactual: if `next-gen-scraPy` is applied to pass charts from stadiums with non-standard endzone camera elevations or asymmetrical mounting, the homography matrix **H** estimated from sideline corners will mis-map the same physical yard line by more than 1.5 yards relative to RFID tracking ground truth. Prediction: for Week 1 2017 games where both NGS charts and official tracking exist, the Euclidean distance between extracted complete-pass endpoints and RFID ball endpoints will exceed 1.5 yards for >10% of completions in at least one open-air stadium, while remaining under 1.0 yard in controlled domed venues. Verifiable by joining Figure 9-style validation data with stadium metadata.

Scenario 2: DBSCAN touchdown undercount veto. Counterfactual: if a game contains ntd ≥ 4 touchdown passes and two or more touchdown locations fall within ε = 10 pixels of each other, DBSCAN will merge them into one density cluster; since the algorithm retains only the ntd highest-density clusters, the extracted touchdown count will undercount true ntd. Prediction: across the 2017–2018 corpus, games with JSON metadata ntd ≥ 4 will show a statistically significant negative discrepancy between extracted touchdown cluster count and metadata ntd, concentrated in the red-zone region where multiple TDs cluster spatially. Verifiable by comparing Appendix B-style row counts against JSON touchdown counts for high-TD games.

Scenario 3: Naive Bayes prior-dominance veto. Counterfactual: if an elite deep passer has Ng = 120 total attempts in a season (well below the QB median), the group term Ng · f̂_g(x, y) is overwhelmed by NMedian · f̂_NFL(x, y) in low-frequency cells such as deep middle (>20 yards, |y| ≤ 13.33). Prediction: even if this QB’s true deep-middle completion rate is 50% versus a league average of 28.4% [PAGE 21], the estimated P̂_G*(Complete | x, y) in that cell will lie within 3 percentage points of the league surface. Verifiable by synthetic subsampling: hold out a 2018 quarterback with known high deep-middle performance, artificially reduce their observed attempts to <150, and measure posterior collapse toward P̂_NFL.
</RLVR_COUNTERFACTUAL_VETOES>