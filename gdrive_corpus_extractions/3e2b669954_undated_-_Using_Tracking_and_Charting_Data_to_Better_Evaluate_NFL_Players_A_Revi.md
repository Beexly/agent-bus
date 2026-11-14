---
source: "undated - Using Tracking and Charting Data to Better Evaluate NFL Players A Review - Eager et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4240
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about NFL player evaluation using tracking and charting data. I need to produce output with strict XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- Zero betting lines: never mention spreads, totals, moneylines, or odds.
- Zero toy equations: never invent fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes.
- Total depth >= 1,000 words across sections.

I need to treat this as a reasoning foundry output, not a betting analysis. The source is Eager et al., "Using Tracking and Charting Data to Better Evaluate NFL Players: A Review."

Let me carefully extract facts with page numbers.

Page 1: Intro, PFF grades -2 to 2 in increments of 0.5, later 0-100 scale. PFF WAR. RFID chips since 2017. Big Data Bowl since 2019.
Page 2: Methods overview. Section 2.1 Pressure Rate, Win Rate, Sack Rate. XGBoost model features: season, home team, stadium, down, distance, quarter, time left, dome, turf, rest, position, x/y at snap, speed, vertical speed. caret package R, five-fold cross validation.
Page 3: Table 3.1.1 ROC values: Pressure probability ROC naïve 0.500, naïve to tracking 0.611, full 0.620. Win probability: 0.500, 0.584, 0.604. Section 2.2 Linebacker Coverage and Play-Action Awareness. BDUE features. Section 2.3 WR/TE Deep Speed. PFF receiving grade -2 to 2. Model features. 40-yard dash adjustment linear model. Minimum 150 total deep routes 2017-2020.
Page 4: Table 3.1.1 continued? Actually page 4 has Table 3.1.1 and Figure 3.1.1. Text: expected pressure rate r-squared 0.858 year n to n+1; expected win rate 0.861. Sack rate r-squared baseline 0.202.
Page 5: Tables 3.1.2 and 3.1.3. Table 3.1.2: Pressure Rate R-squared 0.274, Expected Pressure Rate 0.318, Both 0.344 for Sack Rate. Pressure Rate 0.465, Expected 0.405, Both 0.507 for Pressure Rate. Table 3.1.3: Win Rate 0.263, Expected Win Rate 0.325, Both 0.353 for Sack Rate. Pressure Rate 0.535, Expected 0.370, Both 0.558.
Page 6: Table 3.1.4 athleticism measures. 40-yard dash: Pressure Rate 0.380, Expected Pressure Rate 0.567. 3-cone: 0.313 vs 0.456. Short shuttle: 0.334 vs 0.430. Broad jump: 0.239 vs 0.369. Vertical jump: 0.185 vs 0.280.
Page 7: Section 3.2.1 Model Diagnostics. RMSE naïve 3.00, with features 2.23.
Page 8: Section 3.2.2 BDUE. r-squared 0.350 year-to-year for players >50 play-action snaps. Correlation with EPA allowed r-squared 0.046. Table 3.2.1 top BDUE values.
Page 9: Table 3.2.1 continued. PFF grades year-to-year r-squared 0.082; improves to 0.112 with BDUE. n=147 players. BDUE and PFF raw coverage grade r-squared 0.038 same season, 0.052 year-to-year.
Page 10: Section 3.3.1. Table 3.3.1 RMSE: PFF deep receiving grade naïve 0.194, naïve to tracking 0.193, full 0.188. Figure 3.3.1 variable importances.
Page 11: Table 3.3.2 TDA-PFF grades top players. Antonio Brown 2018 15.4, Tyreek Hill 2018 15.0, etc. Linear model r-squared 0.2671 between per-snap TDA-PFF and 40-yard dash. Raw PFF grades on deep routes vs 40-yard dash r-squared 0.04.
Page 12: Figure 3.3.2. Section 3.3.2. Table 3.3.3 slower TDA-40: J.J. Nelson 4.28 combine -> 4.49 TDA-40, etc. Stability r-squared 0.309 year-to-year for >50 deep receiving snaps.
Page 13: Table 3.3.4 faster TDA-40: Jarvis Landry 4.77 -> 4.53, Antonio Brown 4.56 -> 4.40, etc.
Page 14: Table 4.1 Cooper Kupp combine 4.62 vs TDA-40: 2017 4.53, 2018 4.38, 2019 4.50, 2020 4.46. Discussion.
Page 15: References start.
Page 16-18: References continue.

Now I need to construct formal LaTeX equations based on the paper's methods, not invent toy equations. I can formalize what they described:

- Expected pressure probability: \( p(P=1 | \mathbf{x}) = \text{XGBoost}(\mathbf{x}) \) where \(\mathbf{x}\) includes contextual and tracking features.
- Expected pressure rate: \( \hat{PR}_i = \frac{1}{N_i} \sum_{j=1}^{N_i} \hat{p}_{ij} \)
- BDUE: \( \text{BDUE}_i = d_i^{\text{actual}} - d_i^{\text{expected}} \)
- Linear model for TDA-40: \( t_{40,i} = \beta_0 + \beta_1 \cdot \text{TDA-PFF}_{i,\text{per-snap}} + \epsilon_i \)
- R-squared definitions.

Units: distances in yards (y coordinate displacement), speed in yards/second or mph (paper says miles per hour in text but tracking gives x,y coords; need to be careful). ROC is unitless [0,1]. RMSE in yards for bite distance. r-squared unitless.

Singularity/breakdown regimes:
- Small sample thresholds: 150 pass-rushing snaps; 50 play-action snaps; 150 deep routes; 50 deep snaps for stability.
- RFID sampling at 0.1s (10 Hz).
- Pro day vs combine bias adjustment (Eager 2021).
- Stadium effects in tracking data.

Now, the sections:

THINK_TRACE: Need >=400 words. Deep multi-hop derivation and gray-zone audit. I should discuss how charting data (discrete, human-graded, play-by-play) combines with tracking data (continuous, 10Hz RFID), the conditional independence assumptions, how XGBoost handles interactions, the causal gray zones (is get-off causing pressure or merely correlated with alignment?), the stadium effect as a confounder, the linearity assumption in TDA-40, the survivorship bias in players with 150+ snaps, the pro-day adjustment uncertainty, etc. Multi-hop: tracking -> get-off -> expected pressure -> future sack rate; tracking -> deep speed -> TDA-PFF -> TDA-40 -> draft/valuation inefficiency.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations. Define operators: \(\mathcal{X}^{\text{chart}}\), \(\mathcal{X}^{\text{track}}\), \(f_{\text{XGB}}\), etc. Cite pages exactly with [PAGE N]. Include verbatim quotes. Breakdown of tables.

RETROCAUSAL_GENEALOGY: Historical lineage: box scores -> play-by-play (Burke EPA, nflfastR, Yurko nflWAR) -> PFF charting (2006) -> RFID tracking (2017) -> Big Data Bowl (2019) -> this paper. Multi-week traps: stability over time (year n to n+1), small-sample traps, the "combine snapshot" trap vs time-varying athleticism, pro day bias, stadium tracking system differences.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract. I should interpret: front offices and analysts regress to habits under crisis (e.g., overvaluing combine 40-yard dash after a bad season), the counter-trap is using time-varying tracking metrics to identify mispriced players, and the "clock" is the aging/decline curve detectable via TDA-40 degradation before production slips. Need to discuss strategic recursion: if everyone adopts tracking-adjusted metrics, the edge decays (clock), so teams must iterate.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Discuss physical constraints: Euclidean distance in first second bounded by human acceleration; vertical vs overall speed; weather (turf vs grass, dome vs outdoor) included as features but stadium effects nonzero; biomechanical limits of linebacker bite distance (RMSE 2.23 yards vs naïve 3.00); tracking coordinate system singularities at stadium level; RFID chip placement in shoulder pads causing orientation bias; the breakdown when sample < 150 snaps.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just counterfactual vetoes. I'll create 3 scenarios where the model's prediction would be vetoed based on verifiable conditions:
1. Player with <150 pass-rushing snaps: veto expected pressure rate stability claim; prediction: year-over-year r-squared collapses below 0.50.
2. Dome vs outdoor stadium tracking bias: if stadium fixed effect not included, expected pressure rate biased; prediction: out-of-dome ROC drops by >0.03.
3. Linebacker facing <50 play-action snaps: BDUE unstable; prediction: year-to-year r-squared < 0.10.
Make them verifiable and falsifiable, with predictions. No betting lines.

Need to ensure total words >= 1000. Let's draft carefully.

Word count plan:
- THINK_TRACE: ~350-450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300-400 words
- RETROCAUSAL_GENEALOGY: ~250-350 words
- RECURSIVE_THEORY_OF_MIND: ~250-350 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250-350 words
- RLVR_COUNTERFACTUAL_VETOES: ~200-300 words
Total should exceed 1000.

No betting lines. No fake ratios like Force/Fatigue. Use formal LaTeX.

Let's start writing.

THINK_TRACE content:
- Multi-hop derivation: tracking data (x,y at 10Hz) -> first-second Euclidean and vertical distance -> XGBoost probability of pressure/win -> aggregation to expected pressure/win rate -> regression on future sack/pressure rate.
- Gray-zone audit: The paper treats PFF grades as ground truth "wins" but grades are manual, potentially noisy, and not fully independent of the outcomes being predicted. The XGBoost uses position from charting data; if charting mislabels edge vs interior, tracking features misfire.
- Conditional assumptions: stationarity of stadium effects across season; rest days accurately recorded; 10Hz sampling sufficient to capture get-off (human reaction times ~150-250ms, so 100ms bins are adequate but aliasing possible for explosive bursts).
- Survivorship: 150 snap minimum excludes rotational players, biasing toward starters and stable performers.
- Causal gray zone: expected pressure rate correlates with future sack rate, but does get-off cause pressure or do scheme/alignment confound? They control for down, distance, etc., but not for offensive blocking scheme or quarterback time-to-throw at the pass-rush level (though time-to-throw is used in receiver model).
- The linearity assumption in TDA-40: simple linear regression of per-snap grade on combine 40 time assumes monotonic mapping; breakdown if player ages or injuries change speed-grade relationship nonlinearly.

SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- Let \(\mathcal{D}^{\text{chart}}\) be PFF charting data, \(\mathcal{D}^{\text{track}}\) NFL NGS RFID data sampled at \(\Delta t = 0.1\) s.
- Pass-rusher feature vector \(\mathbf{x} = [\text{season}, \text{home}, \text{stadium}, \text{down}, \text{distance}, \text{quarter}, t_{\text{left}}, \mathbb{1}_{\text{dome}}, \mathbb{1}_{\text{turf}}, \text{rest}, \text{position}_{\text{PFF}}, x_{\text{snap}}, y_{\text{snap}}, v_y, v]\) with units: \(x,y\) in yards; \(v\) in yards/s (or mph converted); \(t\) in seconds.
- \(\hat{p}_{ij} = \text{XGB}(\mathbf{x}_{ij})\), output probability \(\in [0,1]\).
- Expected pressure rate: \(\widehat{\text{PR}}_i = N_i^{-1} \sum_{j=1}^{N_i} \hat{p}_{ij}\).
- ROC values from Table 3.1.1 [PAGE 4]: Pressure: naïve 0.500, naïve-to-tracking 0.611, full 0.620. Win: 0.500, 0.584, 0.604.
- Stability: \(R^2(\widehat{\text{PR}}_n, \widehat{\text{PR}}_{n+1}) = 0.858\); \(R^2(\widehat{\text{WR}}_n, \widehat{\text{WR}}_{n+1}) = 0.861\) [PAGE 5].
- BDUE: \(d_i^{\text{BDUE}} = d_i^{\text{actual}} - \mathbb{E}[d_i | \mathbf{x}_i]\). RMSE naïve 3.00 yd, full 2.23 yd [PAGE 7]. Year-to-year \(R^2 = 0.350\) [PAGE 8].
- Receiver model: \(g_i = \beta_0 + \boldsymbol{\beta}^\top \mathbf{z}_i + \epsilon_i\), response PFF grade \([-2,2]\). RMSE full 0.188 vs 0.194 naïve [PAGE 10].
- TDA-40 linear model: \(t_{40,i} = \gamma_0 + \gamma_1 \cdot \text{TDA-PFF}_{i,\text{per route}} + \eta_i\). \(R^2 = 0.2671\) vs raw PFF grade \(R^2 = 0.04\) [PAGE 12].
- Athleticism table [PAGE 6]: 40-yard dash \(R^2\) expected pressure 0.567 vs charting pressure 0.380.

Singularity/breakdown: \(N_i < 150\) snaps invalidates stability estimates; RFID sample rate 10 Hz cannot resolve sub-100 ms get-off variance; stadium fixed effects absorb unmodeled sensor calibration drift.

RETROCAUSAL_GENEALOGY:
Trace lineage: box scores -> play-by-play/EPA (Burke, nflfastR, Yurko nflWAR) -> PFF charting grades 2006 [-2,2] -> RFID 2017 -> Big Data Bowl 2019 -> this paper combining both.
Multi-week traps: 1) Combine snapshot is a one-time, non-time-varying measure; paper replaces with tracking time series. 2) Year-to-year stability trap: high r-squared for expected metrics may reflect role/scheme stability rather than pure skill. 3) Sample-size trap: 150 snap threshold excludes young/bench players, creating survivorship bias in draft evaluation. 4) Pro day bias correction (Eager 2021 [PAGE 6]) is itself a modeling assumption that can break if pro day conditions shift.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure (e.g., poor defensive season), front offices regress to familiar combine metrics and PFF grades. Counter-trap: BDUE and TDA-40 identify players who perform better/worse than combine suggests (Kupp example). Clock: aging/injury causes TDA-40 to slow before production slips; metric is a leading indicator but only if re-estimated weekly. Recursive problem: once all teams use TDA-PFF, market inefficiency closes; need continual feature iteration (three-cone, vertical jump from tracking).

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: maximum human acceleration bounds first-second distance; if observed Euclidean distance exceeds physiological limit, veto as sensor error. Biomechanical: linebacker bite distance in yards; RMSE 2.23 yd indicates irreducible variance from offensive scheme; cannot use BDUE in isolation for <50 snaps. Weather/environment: dome vs outdoor, turf vs grass included as features; stadium effect nonzero [PAGE 5]. Tracking coordinate system singularity: RFID chip in shoulder pads measures pad location not center of mass; orientation/direction at 10Hz may alias during rapid cuts. Veto rule: if stadium fixed effect p-value > 0.05 in a given week, pool stadiums or drop tracking speed features.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Veto if pass-rusher snaps <150 in year n. Prediction: out-of-sample \(R^2\) for expected pressure rate stability drops below 0.50 (from 0.858) because random effects dominate.
2. Veto if stadium fixed effect omitted in open-air week with temperature < 32°F. Prediction: full model ROC for pressure probability falls from 0.620 to ≤0.590 due to unmodeled cold-weather tracking calibration and traction effects.
3. Veto if linebacker faces <50 play-action snaps in a season. Prediction: BDUE year-to-year \(R^2\) collapses from 0.350 to <0.10, making BDUE useless for projecting coverage grade; rely on raw PFF grade instead (though its own \(R^2=0.082\)).

Need to ensure no betting language. Check: no spread, total, moneyline, odds. Good.

Citations: Use [PAGE N] exactly. Include verbatim quotes. For example: "PFF added NCAA football to its data collection in 2014" [PAGE 1]. "This data, known as “tracking data,” is provided each tenth of a second" [PAGE 1]. "expected pressure rate has an r-squared value of 0.858 from year n to year n + 1" [PAGE 5]. etc.

Let's write it out fully.

I need to be careful with LaTeX formatting inside XML. It should be fine.

Word count check: I'll aim for substantial depth.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's core derivation proceeds in three chained hops that link raw sensor output to forward-looking player valuation. Hop one: NFL Next Gen Stats RFID chips emit (x,y) coordinates, orientation, direction, speed, and acceleration at 10 Hz (every tenth of a second) from shoulder pads and the ball [PAGE 1]. For pass rushers, the authors collapse the first second of each snap into total Euclidean and vertical (y) displacement from the snap position [PAGE 2]. Hop two: these continuous tracking features are fed into an XGBoost classifier alongside PFF charting context—down, distance, quarter, time remaining, home/away, dome, turf, rest, stadium, and charting-derived position—to produce a play-level probability of pressure and a probability of a pass-rush win [PAGE 2]. Hop three: play-level probabilities are aggregated into season-level expected pressure rate and expected win rate, which are then regressed against future sack rate, future pressure rate, and traditional combine athleticism [PAGE 5]. The gray zones are substantial. First, PFF charting grades (-2 to 2 in 0.5 increments, later translated to 0-100 [PAGE 1]) serve as both an input feature (position, win/loss) and an external validation target, creating a potential circularity if the manual grader is influenced by the same outcome the model predicts. Second, the 150-snap minimum for pass-rushing stability and the 50-snap minimum for linebacker play-action exposure [PAGE 5][PAGE 8] induce survivorship bias: rotational, injured, or young players are excluded precisely when time-varying athleticism would be most valuable. Third, the XGBoost feature set controls for game situation but not for offensive blocking scheme or quarterback time-to-throw at the pass-rush level, so "get-off" may partly reflect alignment and scheme rather than pure explosiveness. Fourth, the linearity assumption in the receiver section—a simple linear model mapping per-route TDA-PFF grade back to combine 40-yard dash time [PAGE 12]—assumes a stationary, monotonic relationship between on-field speed usage and pre-draft sprint time; this breaks down under aging, injury, or scheme changes that alter how a player deploys speed. Fifth, stadium is included as a fixed effect because tracking sensors differ by venue [PAGE 2], but if sensor calibration drifts within a season, the expected pressure rate inherits measurement bias that is indistinguishable from true player change. The multi-hop chain is therefore only as strong as its weakest sensor or sampling assumption, and the reported r-squared values (0.858 for expected pressure rate year-over-year [PAGE 5]) may capture role stability as much as skill stability.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(\mathcal{D}^{\text{chart}}\) denote PFF play-by-play charting data and \(\mathcal{D}^{\text{track}}\) denote NFL NGS RFID tracking data sampled at \(\Delta t = 0.1\) s, yielding (x,y) coordinates in yards [PAGE 1]. For pass rusher \(i\) on play \(j\), define the tracking feature vector \(\mathbf{x}_{ij} = [\text{season}, \mathbb{1}_{\text{home}}, s_{\text{stadium}}, \text{down}, \text{distance}, \text{quarter}, t_{\text{left}}, \mathbb{1}_{\text{dome}}, \mathbb{1}_{\text{turf}}, r_{\text{rest}}, \text{pos}^{\text{PFF}}_{i}, x^{\text{snap}}_{ij}, y^{\text{snap}}_{ij}, v_{y,ij}, v_{ij}]\), where positions are in yards, speeds in yards/s (reported in miles per hour in prose but derived from coordinate differences), rest in days, and \(t_{\text{left}}\) in seconds [PAGE 2]. The play-level pressure probability is \(\hat{p}_{ij} = \text{XGBoost}(\mathbf{x}_{ij}) \in [0,1]\), fit with the caret package in R using five-fold cross validation [PAGE 2]. The season-level expected pressure rate is
\[
\widehat{\text{PR}}_{i} = \frac{1}{N_i}\sum_{j=1}^{N_i} \hat{p}_{ij},
\]
and analogously for expected win rate \(\widehat{\text{WR}}_{i}\). Stability is measured by \(R^2(\widehat{\text{PR}}_{n}, \widehat{\text{PR}}_{n+1}) = 0.858\) and \(R^2(\widehat{\text{WR}}_{n}, \widehat{\text{WR}}_{n+1}) = 0.861\) for players with \(>150\) pass-rushing snaps in back-to-back seasons, 2017–2020 [PAGE 5]. The baseline sack-rate autoregression is \(R^2(\text{sack}_n, \text{sack}_{n+1}) = 0.202\) [PAGE 5]. Joint prediction tables show, for sack rate in year \(n+1\), \(R^2 = 0.274\) (pressure rate), \(0.318\) (expected pressure rate), and \(0.344\) (both) [PAGE 5, Table 3.1.2]; for pressure rate in year \(n+1\), \(R^2 = 0.465\), \(0.405\), and \(0.507\) respectively [PAGE 5]. ROC diagnostics: pressure probability naïve 0.500, naïve-to-tracking 0.611, full model 0.620; win probability naïve 0.500, naïve-to-tracking 0.584, full 0.604 [PAGE 4, Table 3.1.1]. For linebackers, actual bite distance \(d^{\text{actual}}_{ij}\) is the change in y-coordinate; expected bite distance \(\mathbb{E}[d_{ij}|\mathbf{x}_{ij}]\) is estimated by XGBoost with features including charting position, dropback depth/type, opponent run-concept percentages, blitz indicator, and stadium [PAGE 2][PAGE 3]. Bite Distance Under Expected is \(\text{BDUE}_{i} = d^{\text{actual}}_{i} - \mathbb{E}[d_{i}|\mathbf{x}_{i}]\), with naïve RMSE 3.00 yards and full-model RMSE 2.23 yards [PAGE 7]. Year-to-year BDUE stability for off-ball linebackers with \(>50\) play-action snaps is \(R^2 = 0.350\) [PAGE 8]. Adding BDUE to a linear model of PFF coverage grades raises year-to-year \(R^2\) from 0.082 to 0.112 (\(n=147\)) [PAGE 9]. For deep receivers, the response is PFF receiving grade \(g \in [-2,2]\); the full tracking-augmented model yields RMSE 0.188 versus 0.194 naïve and 0.193 naïve-to-tracking [PAGE 10, Table 3.3.1]. The TDA-40 mapping is a simple linear regression \(t_{40,i} = \gamma_0 + \gamma_1 \cdot \text{TDA-PFF}_{i,\text{per route}} + \eta_i\) with \(R^2 = 0.2671\), compared to \(R^2 = 0.04\) for raw PFF deep grades versus combine 40 time [PAGE 12]. Athleticism crosswalk [PAGE 6, Table 3.1.4]: 40-yard dash \(R^2 = 0.380\) for charting pressure rate vs. \(0.567\) for expected pressure rate; 3-cone \(0.313\) vs. \(0.456\); short shuttle \(0.334\) vs. \(0.430\); broad jump \(0.239\) vs. \(0.369\); vertical jump \(0.185\) vs. \(0.280\).

Breakdown and singularity regimes: (1) \(N_i < 150\) pass-rushing snaps invalidates the reported stability coefficients and the expected-rate aggregation; (2) \(N_i < 50\) play-action snaps invalidates BDUE year-to-year inference [PAGE 8]; (3) RFID at 10 Hz cannot resolve get-off variation below 100 ms, creating aliasing for explosive bursts; (4) stadium fixed effects absorb venue-specific sensor calibration, but intra-season calibration drift is a singularity where expected metrics conflate sensor drift with player change [PAGE 2][PAGE 5]; (5) pro-day combine adjustments rely on Eager (2021) comparability corrections, which break if pro-day protocols shift [PAGE 6]. All probabilities are unitless; RMSE and bite distance are in yards; r-squared and ROC are unitless information/probability metrics.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits at the terminus of a well-documented data lineage in football analytics. Pre-2006 evaluation relied on NFL-sanctioned box scores and play-by-play data, advanced by Brian Burke's expected points and expected points added (EPA) and by Football Outsiders' DVOA [PAGE 1]. The charting era began when Pro Football Focus assigned numerical grades between -2 and 2 in 0.5 increments to every player on every play from 2006 onward, later translated to a 0-100 consumer scale, and expanded to NCAA in 2014 [PAGE 1]. Parallel academic work produced nflfastR (Baldwin and Carl) and nflWAR (Yurko, Ventura, Horowitz), embedding EPA into public workflows [PAGE 1]. The tracking era began in 2017 with RFID chips in shoulder pads and the football, producing (x,y) data at 10 Hz, distributed to all NFL teams and select media [PAGE 1]. The NFL's Big Data Bowl, running since 2019 under Michael Lopez, provided a competitive proving ground for tracking-data models, including the 2020 winning rushing-yards-above-expected solution [PAGE 1]. This paper synthesizes the two lineages by arguing that charting data alone replicates scouting, while tracking data alone tends to replicate charting rather than enhance prediction; the claimed advance is the fusion [PAGE 1].

Multi-week traps embedded in this genealogy are critical. First, the combine snapshot trap: traditional athleticism measures (40-yard dash, 3-cone, shuttle, jumps) are one-time, non-time-varying observations [PAGE 6]. The paper's time-varying expected pressure rate directly addresses this, but only for players who clear the 150-snap threshold, leaving a blind spot for backups and rookies [PAGE 5]. Second, the stability trap: high year-over-year r-squared (0.858 for expected pressure rate) may reflect stable role, scheme, and usage rather than stable skill, meaning a player can look "stable" while declining within a fixed role [PAGE 5]. Third, the pro-day correction trap: the paper adjusts pro-day data to be comparable with combine data before correlating with expected pressure rate [PAGE 6]; if that adjustment model is misspecified, the entire athleticism crosswalk inherits bias. Fourth, the small-sample trap: the 50-snap play-action minimum for linebackers excludes most situational players, so BDUE cannot be used to evaluate the very players whose role is most volatile [PAGE 8]. Fifth, the adoption trap: Cooper Kupp's case illustrates that teams can gain an edge by trusting tracking-adjusted speed over combine results [PAGE 14], but once tracking-adjusted metrics are widely adopted, the informational arbitrage decays, requiring continual feature innovation (e.g., three-cone and vertical jump from tracking data) to maintain an edge [PAGE 15].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Under organizational crisis—such as a defense allowing high EPA or a passing game failing to generate deep targets—front offices tend to regress to familiar, legible habits: combine 40-yard dash times, raw PFF grades, and sack totals. This is the crisis habit regression. The paper offers a counter-trap: time-varying tracking metrics that identify players who are systematically mispriced by the combine snapshot. Cooper Kupp exemplifies this recursion: his 4.62 combine 40-yard dash was slower than every season's tracking-data-adjusted 40-yard dash (4.53, 4.46, 4.50, 4.38), and teams that overweighted the combine undervalued him [PAGE 14]. The model recursively inverts the draft narrative: a "slow" combine runner who consistently plays faster in pads is a buy signal; a "fast" combine runner whose TDA-40 slows relative to his draft time is a sell signal (J.J. Nelson, John Ross, Corey Coleman) [PAGE 13].

The clock layer introduces temporal pressure. TDA-40 is explicitly proposed as a leading indicator of decline: a decrease in physical skills should show up in tracking-adjusted speed before production slips [PAGE 12]. However, the clock only functions if the metric is recomputed continuously; a stale TDA-40 from two seasons ago is just another combine-like snapshot. The recursive problem is that as more teams adopt TDA-PFF and BDUE, the market price of these players adjusts, eroding the edge. The authors acknowledge this by foreshadowing future work on college-level tracking and additional NFL years to build robust, time-varying athleticism measures [PAGE 15]. Therefore the counter-trap is not static; it requires an arms race in feature engineering (run-pass options, read options, pre-snap motion, player "gravity") to stay ahead of the recursive diffusion of the current metrics into consensus valuation [PAGE 15].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Human acceleration imposes a hard bound on first-second Euclidean displacement from the snap; any observed get-off distance exceeding physiologically plausible acceleration (given pad mass and ground contact mechanics) must be vetoed as RFID sensor error or coordinate-system misregistration, since the chip is mounted on shoulder pads rather than the center of mass [PAGE 1][PAGE 2]. Biomechanical layer: linebacker bite distance is measured as change in y-coordinate in yards, but offensive scheme (play-action rate against) is uncorrelated with average team BDUE (\(R^2 \sim 0\)), meaning BDUE captures individual discipline rather than scheme exposure [PAGE 8]. The irreducible RMSE of 2.23 yards versus 3.00 yards naïve [PAGE 7] implies that BDUE cannot resolve fine individual differences below roughly two yards without larger sample sizes; a veto should trigger for any linebacker with <50 play-action snaps because the signal-to-noise ratio collapses [PAGE 8]. Weather/environment layer: the model includes dome, turf, and stadium fixed effects because tracking data exhibits venue-specific variation [PAGE 2], and the authors note stadium effects have nonzero variable importance [PAGE 5]. A veto rule: if the stadium fixed effect is insignificant (p > 0.05) in a given week or if temperature/wind data indicate conditions outside the calibration envelope of the local NGS installation, the tracking speed features (speed, vertical speed, max speed) must be dropped or regressed to charting-only priors, because unmodeled environmental variance will bias expected pressure and expected win rates. Breakdown regime: the entire expected-rate framework assumes stationarity of the tracking coordinate system across stadiums and seasons; if a stadium upgrades its sensor array mid-season, the expected pressure rate inherits a level shift indistinguishable from player improvement or decline.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (sample-size veto): Veto expected-pressure-rate stability inference for any pass-rusher with fewer than 150 snaps in year \(n\). Prediction: out-of-sample year-over-year \(R^2\) for expected pressure rate collapses from the reported 0.858 to below 0.50, because random snap-to-snap variance and role changes dominate small samples; the metric should not be used to project sack rate for rotational players [PAGE 5].

Scenario 2 (environmental veto): Veto the full XGBoost pressure model for outdoor games in sub-freezing temperatures when the stadium fixed effect is omitted or insignificant. Prediction: full-model ROC for pressure probability falls from 0.620 to at or below 0.590, because cold-weather traction and sensor calibration differences are confounded with get-off speed, eroding the tracking-data advantage over the naïve-to-tracking model (ROC 0.611) [PAGE 4][PAGE 5].

Scenario 3 (linebacker exposure veto): Veto BDUE as a predictor of PFF coverage grade for any off-ball linebacker facing fewer than 50 play-action snaps in a season. Prediction: BDUE year-to-year \(R^2\) falls from 0.350 to below 0.10, and the linear-model improvement in coverage-grade stability (0.082 to 0.112) disappears; in this regime, raw PFF coverage grade (though weak at \(R^2=0.082\)) remains the only defensible input, and BDUE should be excluded from projection models [PAGE 8][PAGE 9].
</RLVR_COUNTERFACTUAL_VETOES>