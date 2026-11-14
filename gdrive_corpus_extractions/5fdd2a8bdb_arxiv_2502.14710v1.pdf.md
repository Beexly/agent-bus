---
source: "arxiv_2502.14710v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5569
---

<NATIVE_REASONING>
The user wants a rigorous analysis of the provided PDF source text (arxiv_2502.14710v1.pdf, 14 pages) following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations.

I need to write a comprehensive analysis covering these sections, with citations to exact pages, formal LaTeX, SI units, assumptions, breakdown regimes, etc.

Let me carefully extract the key data from the source:

Page 1: Title, authors, affiliations.
Page 2: Abstract. Sensitivity 0.89, PPV 0.76-0.98. HAE incidence PLA >10g: 11.2 Defense, 11.3 Offense per player match. PAA >1.0 krad/s²: 5.5 Defense, 6.9 Offense. PLA >30g: 1.6 Defense, 2.6 Offense. PAA >2.0 krad/s²: 0.9 Defense, 1.4 Offense. 64 player matches, 35 players.
Page 3: Introduction. iMGs rigid coupling via upper dentition. Prevent Biometrics iMG validated in lab for helmeted/unhelmeted, on-field rugby. Jones et al. concordance correlation coefficient 0.98.
Page 4: Tooby et al. combined threshold 5g and 400 rad/s² improved PPV to 0.99 (95% CI: 0.97-1.00), sensitivity 0.86 (95% CI: 0.84-0.89). FRI-Biocore iMG PPV 0.98 sensitivity 0.82 in American football. Methods: 35 players, NCAA Division 1, 2022 Mountain West Conference Regular Season. Custom fit via 3D dental scans. Triaxial gyroscopes and accelerometers sampling at 3200Hz, range +/-35 rad/s² and +/-200g. HAEs identified when linear acceleration exceeded 8g trigger threshold on any single axis. Transformed to head centre of gravity. Time series 10ms prior and 40ms after trigger. Recording threshold 5g resultant PLA and 400 rad/s² resultant PAA at head centre of gravity. Noise/artifact classified minimal (class 0), moderate (class 1), severe (class 2) by proprietary algorithm. 4-pole (2x2) zero-phase low-pass Butterworth filter. Cut-off 200Hz class 0, 100Hz class 1, 50Hz class 2 (-6dB). Proximity sensor readings to ensure seated to dentition. NCAA footage from TV broadcasters. Video analyst >6 years experience. QuickTime Player v.10.5 on 32” monitor. 71 player matches across 4 games. Unguided video analysis blinded to iMG data. 517 head impacts identified. Proximity sensor excluded events where iMG 'off the teeth' (n=31). Events not meeting 5g and 400 rad/s² excluded (n=32). Sample size for unguided analysis 454 impacts.
Page 5: Synchronisation frame-to-frame. True Positive if corresponding iMG-triggered event, False Negative otherwise. Sensitivity Eq 1: TP/(TP+FN). Guided analysis: 1101 iMG triggered events meeting 5g and 400 rad/s² threshold. Cross-referenced with video: TP, FP, FPOC, FPI based on Table 1. PPV Eq 2: TP/(TP+FP). Only true positive iMG-triggered events meeting threshold used in incidence calculations. Proximity sensor confirmed worn. Only player matches where instrumented player wore iMG for at least 90% of contact events used (n=64, 90.1%) in incidence calculations. Total 828 HAEs, 64 eligible player matches over 4 games. Positions consolidated: Offensive: OL (Centers, Guards, Long Snappers, OT; n=6), RB (n=2), TE (n=4). Defensive: DL (DE, DT; n=2), LB (n=14), DB (Safeties and CB; n=7).
Page 6: Table 1 definitions. HAE incidence = number of HAEs per player match. Mean values for Offense and Defense calculated across players, 95% CIs bootstrapping. Randomly resampled 2500 times, 2.5th and 97.5th percentile as lower/upper bounds. Significant difference if CIs did not overlap.
Page 7: Results. Table 2. Sensitivity 0.89 (0.86-0.92). Unguided: TP 403, FN 51. Guided: TP 828, FP 19, FPOC 46, FPI 208, All assumed FP 254. PPV TP+FP: 0.98 (0.97-0.99). PPV TP+FP+FPOC: 0.93 (0.91-0.94). PPV TP+all assumed FP: 0.76 (0.73-0.78).
Page 8: Figure 1. Discussion. Comparable to rugby. Jones et al. PPV 0.94 (0.92-0.95; no recording threshold). Tooby et al. PPV 0.99 (0.97-1.00). Sensitivity 0.89 (0.86-0.92) resembled rugby Jones 0.75 and Tooby 0.86. FRI-Biocore PPV 0.98 sensitivity 0.82. HAE incidence per player match approximates exposure. HAEs above 30g or 2.0 krad/s² relatively rare. Offense/Defense similar. Offensive linemen largest, frequent lower-speed collisions short range. Defensive backs smaller, agile, tackle fast-moving players. Tight End mix. Concussion incidence: TE, RB, CB most diagnosed; OT, Guards, Centers, Long-Snappers lowest. iMGs complement findings. Approaches: (1) reduce match exposure, (2) minimise frequency of HAEs, (3) minimise magnitude of HAEs. Limiting full-contact reps in training, safer tackling techniques. Threshold for intervention unclear. Retrospective evaluation of cumulative exposure prior to concussion diagnosis. Future research larger sample sizes, granular positional groups.
Page 9: Limitations. Limited sample size, uneven across positions. Players switching positions not controlled. Dataset limited to match play, not training. Signal processing by Prevent Biometrics proprietary and proximity sensor not independently validated. Limited to Prevent Biometrics iMG. HEADSport developed for inter-study comparisons. Only peak linear and angular head kinematics, no directionality or temporality (pulse duration). Conclusion. High sensitivity and PPV comparable to rugby. Position-based variability highlights need for tailored mitigation, though offense/defense similar overall rates.
Pages 10-14: References.

Now I need to structure the response.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive PPV variants from Table 2 counts.
- Sensitivity = 403/(403+51) = 403/454 = 0.8876... ≈ 0.89. Check CI 0.86-0.92.
- PPV1 = 828/(828+19) = 828/847 = 0.9775... ≈ 0.98.
- PPV2 = 828/(828+19+46) = 828/893 = 0.9272... ≈ 0.93.
- PPV3 = 828/(828+254) = 828/1082 = 0.7652... ≈ 0.76.
- Gray zones: FPOC (off-camera) assumed false positive but could be true events missed by video; FPI (inactive/commercial break/sideline) may be non-impact artifacts or real movements not captured. Proximity sensor exclusions n=31 off-teeth, n=32 below threshold. The 8g trigger vs 5g recording threshold discrepancy: trigger at 8g any axis, recording at 5g resultant and 400 rad/s². Signal processing proprietary, not independently validated. Butterworth filter cut-offs vary by noise class, introducing class-dependent frequency response. Sample size 64 player matches over 4 games, uneven positions (OL n=6, RB n=2, TE n=4, DL n=2, LB n=14, DB n=7). Position switching not controlled. Only match play, no training. Peak kinematics only, no pulse duration/directionality.
- Multi-hop: If PPV drops to 0.76 when including all assumed FPs, then ~24% of iMG-triggered events above threshold may be non-head-impact artifacts. If sensitivity is 0.89, ~11% of video-observed head contacts are missed. Combined effect on incidence: reported 11.2-11.3 HAEs/match >10g could be undercounted by sensitivity miss rate or overcounted by FP inclusion. The bootstrap CI uses 2500 resamples; with n=64 player matches and uneven positions, CI may be optimistic if within-player correlation exists (not addressed). The 90% wear-time criterion excludes players with <90% contact event coverage, potentially biasing toward more compliant players.
- Breakdown regimes: Trigger threshold 8g single axis vs 5g resultant at head CG. If head kinematics are below 8g but above 5g? Actually trigger is 8g, recording threshold 5g. Wait: "HAEs were identified when linear acceleration exceeded an 8g trigger threshold on any single axis... recording threshold of 5g of resultant peak linear acceleration (PLA) and resultant peak angular acceleration (PAA) of 400rad/s²". So raw trigger 8g any axis, then post-processed to 5g resultant. Events between 5g and 8g resultant might be missed if no single axis exceeded 8g? Or the 8g trigger saves data, then 5g resultant threshold applied. Singularity: at exactly 5g resultant and 400 rad/s², measurement noise near threshold can cause classification instability. Butterworth -6dB cut-off means frequencies above cut-off are attenuated but not eliminated; class 2 signals at 50Hz cut-off may lose high-frequency impact components, underestimating peak acceleration for short-duration impacts.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define variables: TP, FP, FN, FPOC, FPI.
- Sensitivity: \( \text{Sens} = \frac{TP}{TP+FN} \) [PAGE 6, Eq. 1]. Values: TP=403, FN=51 [PAGE 8, Table 2]. \( 403/454 = 0.8877 \approx 0.89 \), 95% CI [0.86, 0.92].
- PPV variants:
  - \( \text{PPV}_1 = \frac{TP}{TP+FP} = 828/(828+19) = 0.9776 \approx 0.98 \) [0.97, 0.99].
  - \( \text{PPV}_2 = \frac{TP}{TP+FP+FPOC} = 828/(828+19+46) = 0.9272 \approx 0.93 \) [0.91, 0.94].
  - \( \text{PPV}_3 = \frac{TP}{TP+FP+FPOC+FPI} = 828/(828+254) = 0.7652 \approx 0.76 \) [0.73, 0.78].
- Sampling: \( f_s = 3200\,\text{Hz} \) [PAGE 4]. Range: accelerometer \( \pm 200\,g \), gyroscope \( \pm 35\,\text{rad/s}^2 \) [PAGE 4]. Note: angular acceleration unit rad/s², though gyroscopes typically measure angular velocity rad/s; the text says gyroscopes and accelerometers with range +/-35rad/s2 and +/-200g—likely gyroscope measures angular acceleration or the text uses rad/s² for angular rate? Actually gyroscope measures angular velocity (rad/s), but here it says +/-35rad/s² which is angular acceleration. I'll cite as written.
- Trigger: \( a_{\text{trigger}} = 8\,g \) on any single axis [PAGE 4]. Recording threshold: \( \text{PLA}_{\text{rec}} \ge 5\,g \) resultant and \( \text{PAA}_{\text{rec}} \ge 400\,\text{rad/s}^2 \) resultant at head centre of gravity [PAGE 4-5].
- Filter: 4-pole (2x2) zero-phase low-pass Butterworth. Cut-off \( f_c = 200\,\text{Hz} \) class 0, \( 100\,\text{Hz} \) class 1, \( 50\,\text{Hz} \) class 2 (-6 dB) [PAGE 4]. Transfer function magnitude \( |H(j\omega)| = 1/\sqrt{1+(\omega/\omega_c)^{2n}} \) with \( n=4 \).
- Time window: \( t \in [-10\,\text{ms}, +40\,\text{ms}] \) relative to trigger [PAGE 4].
- Incidence: \( \lambda = N_{\text{HAE}}/N_{\text{player-match}} \) [PAGE 6-7]. Values: PLA >10g: \( \lambda_D = 11.2 \), \( \lambda_O = 11.3 \); PAA >1.0 krad/s²: \( \lambda_D = 5.5 \), \( \lambda_O = 6.9 \); PLA >30g: \( \lambda_D = 1.6 \), \( \lambda_O = 2.6 \); PAA >2.0 krad/s²: \( \lambda_D = 0.9 \), \( \lambda_O = 1.4 \) [PAGE 2, 7].
- Bootstrap: 2500 resamples, 2.5th and 97.5th percentiles [PAGE 6].
- Wear criterion: \( T_{\text{wear}}/T_{\text{contact}} \ge 0.90 \) [PAGE 6]. n=64, 90.1% of 71.
- Proximity sensor exclusions: n=31 off-teeth, n=32 below threshold [PAGE 5]. Unguided sample 454 = 517 - 31 - 32 [PAGE 5].
- Guided total triggered: 1101 [PAGE 6]. TP=828. FP=19. FPOC=46. FPI=208. All FP=254. 828+19+46+208 = 1101. Checks out.
- Breakdown/singularity: threshold crossing at exactly 5g/400 rad/s²; class-dependent filtering causes non-stationary frequency response; proximity sensor validation not independent; peak-only metrics discard pulse duration \( \Delta t \) and directionality \( \hat{n} \).

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Wu et al. 2016 in-vivo evaluation of wearable head impact sensors [PAGE 13 ref 11]; helmet/skin sensors prone to artifacts [PAGE 3 ref 11]. Jones et al. 2022 validity/feasibility of iMGs, rugby, CCC 0.98 lab, PPV 0.94 on-field [PAGE 4 ref 12]. Tooby et al. 2019/2024 rugby, threshold 5g/400 rad/s², PPV 0.99, sensitivity 0.86 [PAGE 4 ref 19; PAGE 9]. FRI-Biocore iMG American football PPV 0.98, sensitivity 0.82 [PAGE 4 ref 15]. Gabler et al. 2020 on-field iMG American football [PAGE 13 ref 15]. Tierney et al. 2020 collegiate American football HAE video + in-vivo [PAGE 13 ref 10]. HEADSport 2024 for inter-study comparison [PAGE 11 ref 35].
- Multi-week traps: The study covers only 4 games of the 2022 Mountain West Regular Season [PAGE 4]. Cumulative exposure over a season/career requires longitudinal data; match-only data misses training HAE [PAGE 11]. Position switching uncontrolled [PAGE 11]. The "multi-week trap" is extrapolating 4-game benchmarks to season-long or career-long risk without accounting for training exposure, opponent variability, and positional rotation. The citation chain from rugby (unhelmeted) to American football (helmeted) assumes similar iMG performance despite different helmet coupling and impact mechanics—a cross-sport generalization trap. The 90% wear criterion and custom dental fit introduce selection bias: players unable to tolerate iMG are excluded, potentially skewing toward lower HAE exposure or different positions.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This section is more conceptual/meta-reasoning about how stakeholders (coaches, medical staff, players) might regress to crisis habits under pressure vs counter-traps.
- Crisis habit regression: After a concussion diagnosis, staff may retrospectively scrutinize iMG data for prior HAEs [PAGE 11]. This creates a confirmation bias: searching for high-magnitude events before known injury, ignoring low-magnitude repetitive exposure. Habit regression to "big hit" concussion model despite evidence that repetitive sub-concussive HAEs matter [PAGE 3 refs 7-9].
- Counter-trap: Using incidence thresholds (30g, 2.0 krad/s²) as intervention triggers is a counter-trap because these are relatively rare [PAGE 9-10]; focusing on them misses the high-frequency low-magnitude burden (11.2-11.3 >10g per match). The counter-trap is assuming that rare high-magnitude events are the primary risk when the data shows common low-magnitude events dominate exposure.
- Clock: The 4-game window is a short clock; the 10ms pre/40ms post capture window is a micro-clock that may miss longer-duration pulse effects. The 2022 season clock limits generalizability to other seasons/rules. The "clock" of cumulative exposure vs acute event: intervention thresholds remain unclear [PAGE 10], so there is no decision clock for when to remove a player based on HAE count. This is a governance gap: no clock (time/count trigger) for intervention, only retrospective analysis.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: iMG rigid coupling via upper dentition [PAGE 3]. Custom fit via 3D dental scans [PAGE 4]. Proximity sensor ensures seated [PAGE 4]. Veto: if proximity sensor indicates off-teeth, event excluded (n=31). If iMG not worn for 90% of contact events, player match excluded [PAGE 6].
- Biomechanical layer: Helmeted American football means direct helmet contact and inertial loading [PAGE 3]. iMG measures head kinematics but not helmet kinematics; relative motion between helmet and head not captured. Peak linear/angular acceleration only; no pulse duration or directionality [PAGE 11]. Veto: for impacts where helmet strikes but head does not move much (or vice versa), iMG may misclassify magnitude. Angular accelerometer range ±35 rad/s² [PAGE 4]—if PAA exceeds this, saturation/clipping possible (singularity at sensor limit). Accelerometer ±200g—events above 200g would clip.
- Weather/environmental: Not explicitly discussed in source. However, temperature/humidity could affect sensor battery, Bluetooth transmission, proximity sensor, or mouthguard fit (saliva, swelling). No data provided; must be treated as unquantified external veto. The study was during 2022 Mountain West Regular Season (fall), outdoor stadiums; weather not controlled or reported.
- Veto proof: The proprietary signal processing by Prevent Biometrics and proximity sensor not independently validated [PAGE 11]—this is an un-adjudicated veto: we cannot verify class 0/1/2 filtering decisions or proximity sensor reliability independently. Butterworth filter is zero-phase (no phase shift) but class-dependent cut-off means class 2 signals lose >50Hz content, potentially underestimating short-duration impacts. This is a measurement veto: high-frequency components above f_c are attenuated.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I need to construct 3 counterfactual veto scenarios that are verifiable (can be tested/falsified) with predictions.
- Scenario 1: Threshold sensitivity veto. If the recording threshold is raised from 5g/400 rad/s² to 10g/1.0 krad/s², predicted incidence drops from ~11.2/match to the reported >10g value (11.2 Defense, 11.3 Offense) — wait, that's the same. Let's think: reported >10g is 11.2/11.3. If threshold raised to 20g, predicted incidence would fall substantially below 11.2, likely closer to the >30g rate (1.6/2.6) but not equal because 20-30g band exists. Verifiable by re-filtering raw iMG data. Veto: if re-filtered incidence at 10g does not match 11.2/11.3, the reported thresholding is inconsistent.
- Scenario 2: PPV decomposition veto. If FPOC and FPI events are randomly re-labeled as True Positives by an independent video review blinded to iMG, the "all assumed false positive" PPV (0.76) should increase toward 0.93 or higher, because off-camera/inactive events may include true impacts missed by camera angle or sideline collisions. Prediction: independent adjudication yields PPV_all > 0.80. Veto: if PPV_all remains ~0.76 after independent review, the assumption that FPOC/FPI are false positives is validated; if it jumps, the source's assumption is a vetoed bias.
- Scenario 3: Filter class veto. If class 2 signals (50 Hz cut-off) are re-processed with a 200 Hz cut-off (class 0 equivalent), predicted peak PLA/PAA for short-duration impacts will increase, potentially moving some events across the 30g / 2.0 krad/s² thresholds. Verifiable by reprocessing raw data. Veto: if incidence above high thresholds (30g, 2.0 krad/s²) changes by >10% after re-filtering, the class-dependent filtering materially alters reported high-magnitude incidence.

Need to ensure no betting lines. The topic is sports science/biomechanics, so betting lines shouldn't naturally appear, but I must be careful not to mention odds, spreads, etc.

Need >=1000 words total across sections. THINK_TRACE >=400 words. Let me make sure each section is substantial.

Word count estimation:
- THINK_TRACE: aim ~500-600 words.
- SOURCE_OPERATORS_AND_EQUATIONS: ~400-500 words with equations.
- RETROCAUSAL_GENEALOGY: ~300 words.
- RECURSIVE_THEORY_OF_MIND: ~300 words.
- CROSS_LAYER_VETO_ADJUDICATION: ~300 words.
- RLVR_COUNTERFACTUAL_VETOES: ~300 words.
Total likely >2000 words, well over 1000.

Citations: Use [PAGE N] exactly. Verbatim quotes where appropriate.

Let's draft carefully.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include verbatim quotes from the text.

Let me write the response now.

Need to ensure LaTeX equations are formal.

THINK_TRACE content:
- Start with the chain of evidence from raw sensor counts to published incidence.
- Derive metrics from Table 2 counts.
- Gray-zone audit: the distinction between 8g trigger and 5g recording threshold; the n=31 off-teeth and n=32 below-threshold exclusions; the 1101 guided events vs 828 HAEs used in incidence; the 254 assumed false positives collapsing PPV from 0.98 to 0.76.
- Bootstrap CI assumptions: 2500 resamples, percentile method, assumes exchangeability of player matches; with only 64 matches and uneven positions, the CI may understate uncertainty.
- Single-game/4-game season limitation.
- Proprietary algorithm black box.
- I'll write this in multi-hop style.

Let's write.

I must avoid fake equations. All equations must be grounded in the text.

Equations from text:
Eq. 1 Sensitivity = TP/(TP+FN) [PAGE 6].
Eq. 2 PPV = TP/(TP+FP) [PAGE 6].
Table 2 counts [PAGE 8].
Incidence = HAEs per player match [PAGE 6-7].
Bootstrap 2500 resamples [PAGE 6].
Sampling 3200Hz [PAGE 4].
Trigger 8g any axis; recording 5g resultant PLA, 400 rad/s² PAA [PAGE 4-5].
Filter cut-offs [PAGE 4].
Wear criterion 90% [PAGE 6].

All good.

Let's compose the final output with exact XML tags.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit:

The source reports a two-stage validation pipeline that must be decomposed hop-by-hop to locate where uncertainty enters. Hop 1: raw sensor events. The iMG recorded 1101 triggered events meeting the 5 g and 400 rad/s² recording threshold during guided analysis [PAGE 6]. Hop 2: video cross-reference. Of those, 828 were True Positives (TP), 19 False Positives (FP), 46 False Positive Off-Camera (FPOC), and 208 False Positive Inactive (FPI), summing exactly to 1101 [PAGE 8, Table 2]. Hop 3: unguided video analysis identified 517 head impacts; after excluding n=31 where the iMG was “off the teeth” and n=32 below the 5 g/400 rad/s² threshold, the unguided sample was 454 impacts, comprising TP=403 and False Negative (FN)=51 [PAGE 5, 8].

The arithmetic produces a sensitivity of 403/(403+51) = 0.8877, rounded to 0.89 [PAGE 8], with the reported 95% CI [0.86, 0.92] [PAGE 8]. Three PPV decompositions follow: PPV₁ = 828/(828+19) = 0.9776 ≈ 0.98 [0.97, 0.99]; PPV₂ = 828/(828+19+46) = 0.9272 ≈ 0.93 [0.91, 0.94]; PPV₃ = 828/(828+254) = 0.7652 ≈ 0.76 [0.73, 0.78] [PAGE 8]. The collapse from 0.98 to 0.76 when FPOC and FPI are included is the central gray zone: it means that under the broadest false-positive definition, roughly one in four iMG-triggered events above threshold lacks video confirmation [PAGE 8].

Gray-zone audit points: (a) trigger asymmetry—the iMG identified HAEs when linear acceleration exceeded an 8 g trigger on any single axis, yet the recording threshold applied post hoc was 5 g resultant PLA and 400 rad/s² resultant PAA at the head centre of gravity [PAGE 4-5]. Events producing a resultant above 5 g without any single axis crossing 8 g may never have been saved, creating a sub-threshold blind spot. (b) The proximity sensor excluded n=31 off-teeth events and n=32 below-threshold events before unguided analysis [PAGE 5]; if the proximity sensor itself has unquantified false-on/false-off behavior, both the denominator of sensitivity and the incidence numerator are biased. (c) Only player matches where the instrumented player wore the iMG for at least 90% of contact events were retained (n=64, 90.1% of 71 player matches) [PAGE 6]. This wear-compliance filter is a selection operator: players with poor fit, high discomfort, or high contact exposure that dislodges the device are systematically removed, potentially biasing incidence downward for the most collision-prone athletes. (d) Position groups are uneven (Offensive Linemen n=6, Running Backs n=2, Tight Ends n=4, Defensive Linemen n=2, Linebackers n=14, Defensive Backs n=7) [PAGE 6], and position switching was not controlled [PAGE 11]. With only 64 player matches over 4 games [PAGE 6], the bootstrap confidence intervals (2500 resamples, 2.5th–97.5th percentiles) [PAGE 6] assume exchangeability of player matches that may not hold given within-player correlation across games and nested position effects. (e) Signal processing is proprietary: class 0/1/2 noise classification and Butterworth filtering (200 Hz, 100 Hz, 50 Hz cut-offs at -6 dB) are performed in-house by Prevent Biometrics and have not been independently validated [PAGE 4, 11]. (f) The study uses only peak linear and angular kinematics; directionality and temporality (pulse duration) are discarded [PAGE 11], so two events with identical peak PLA but different duration are treated identically despite differing injury-mechanic implications.

These hops chain into an incidence gray zone: reported PLA >10 g incidence is 11.2 (Defense) and 11.3 (Offense) per player match, while PAA >1.0 krad/s² is 5.5 and 6.9 [PAGE 2, 7]. If sensitivity misses 11% of video-confirmed contacts and PPV₃ implies 24% of triggered events may be non-impacts, the true incidence lies in an unquantified interval bounded by undercount (missed FN) and overcount (unverified FP). The breakdown regime occurs at the measurement thresholds themselves: exactly at 5 g resultant PLA or 400 rad/s² PAA, classifier noise dominates because the sensor is operating at its recording floor; at the sensor saturation limits (±200 g accelerometer, ±35 rad/s² gyroscope/angular channel) [PAGE 4], extreme events would clip. The 10 ms pre-trigger / 40 ms post-trigger capture window [PAGE 4] truncates longer-duration pulses, creating a temporal singularity for sub-concussive loading with extended rise times.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and exact breakdown regimes:

Definitions (counts from [PAGE 8, Table 2]; guided set N=1101 from [PAGE 6]):
- TP = true positive iMG-triggered event corresponding to video-confirmed contact.
- FP = false positive iMG-triggered event with no video contact during active gameplay.
- FPOC = false positive off-camera; event during active play, player not visible.
- FPI = false positive inactive; event during commercial break/sideline/non-active play.
- FN = false negative; video-confirmed contact with no corresponding iMG HAE.

Sensitivity operator [PAGE 6, Eq. 1]:
\[
\mathrm{Sensitivity} = \frac{TP}{TP + FN}
\]
Substituting TP=403, FN=51 [PAGE 8]:
\[
\mathrm{Sensitivity} = \frac{403}{403+51} = \frac{403}{454} = 0.8877 \approx 0.89 \quad \text{(dimensionless probability)}
\]
Reported 95% CI: [0.86, 0.92] [PAGE 8].

Positive predictive value operator [PAGE 6, Eq. 2], three definitions:
\[
\mathrm{PPV}_1 = \frac{TP}{TP+FP} = \frac{828}{828+19} = \frac{828}{847} = 0.9776 \approx 0.98 \quad [0.97, 0.99]
\]
\[
\mathrm{PPV}_2 = \frac{TP}{TP+FP+FPOC} = \frac{828}{828+19+46} = \frac{828}{893} = 0.9272 \approx 0.93 \quad [0.91, 0.94]
\]
\[
\mathrm{PPV}_3 = \frac{TP}{TP+FP+FPOC+FPI} = \frac{828}{828+254} = \frac{828}{1082} = 0.7652 \approx 0.76 \quad [0.73, 0.78]
\]
All PPV values dimensionless probabilities; 95% CIs from [PAGE 8].

Sensor and signal chain [PAGE 4]:
- Sampling frequency: \(f_s = 3200\ \mathrm{Hz}\) (triaxial gyroscope and accelerometer).
- Measurement ranges: accelerometer \(\pm 200\ g\); gyroscope/angular channel \(\pm 35\ \mathrm{rad/s^2}\) as stated in source.
- Trigger: single-axis linear acceleration \(> 8\ g\).
- Recording threshold at head centre of gravity: resultant \(\mathrm{PLA} \ge 5\ g\) AND resultant \(\mathrm{PAA} \ge 400\ \mathrm{rad/s^2}\).
- Captured time window: \(t \in [-10\ \mathrm{ms}, +40\ \mathrm{ms}]\) relative to trigger.
- Filter: 4-pole (2nd-order × 2 stages), zero-phase, low-pass Butterworth. Magnitude response:
\[
|H(j\omega)| = \frac{1}{\sqrt{1 + (\omega/\omega_c)^{2n}}}, \quad n=4
\]
Class-dependent cut-off frequencies (-6 dB): class 0 (minimal noise) \(f_c = 200\ \mathrm{Hz}\); class 1 (moderate) \(f_c = 100\ \mathrm{Hz}\); class 2 (severe) \(f_c = 50\ \mathrm{Hz}\) [PAGE 4].

Incidence operator [PAGE 6-7]:
\[
\lambda = \frac{N_{\mathrm{HAE}}}{N_{\mathrm{player-match}}} \quad \left[\frac{\text{events}}{\text{player match}}\right]
\]
Reported values [PAGE 2, 7]:
- PLA > 10 g: \(\lambda_{\mathrm{Defense}} = 11.2\), \(\lambda_{\mathrm{Offense}} = 11.3\)
- PAA > 1.0 krad/s² (\(1000\ \mathrm{rad/s^2}\)): \(\lambda_{\mathrm{Defense}} = 5.5\), \(\lambda_{\mathrm{Offense}} = 6.9\)
- PLA > 30 g: \(\lambda_{\mathrm{Defense}} = 1.6\), \(\lambda_{\mathrm{Offense}} = 2.6\)
- PAA > 2.0 krad/s² (\(2000\ \mathrm{rad/s^2}\)): \(\lambda_{\mathrm{Defense}} = 0.9\), \(\lambda_{\mathrm{Offense}} = 1.4\)

Inference operator [PAGE 6]: bootstrap with 2500 random resamples; 95% CI = [2.5th, 97.5th] percentile of resampled means. Significance assumed if CIs do not overlap.

Eligibility filter [PAGE 6]: retain player match only if \(T_{\mathrm{wear}} / T_{\mathrm{contact}} \ge 0.90\). Result: n=64 of 71 player matches (90.1%) [PAGE 6].

Unguided sample derivation [PAGE 5]: \(517 - 31\ (\text{off teeth}) - 32\ (\text{below threshold}) = 454\) impacts.

Singularity and breakdown regimes:
1. Threshold singularity: events with resultant PLA or PAA exactly at 5 g / 400 rad/s² are classification-unstable; jitter around the floor flips TP/FP status.
2. Sensor saturation: accelerometer \(\pm 200\ g\) and angular channel \(\pm 35\ \mathrm{rad/s^2}\) [PAGE 4] imply clipping for impacts exceeding these bounds; no saturation-handling protocol is reported.
3. Filter bandwidth singularity: class 2 signals are low-passed at 50 Hz, attenuating impact frequency content above cut-off and systematically underestimating peak acceleration for short-duration, high-frequency impacts.
4. Temporal truncation: the \([-10\ \mathrm{ms}, +40\ \mathrm{ms}]\) window excludes pulse phases outside this interval, biasing duration-dependent injury metrics.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week exposure traps:

The instrument's genealogy runs from general wearable sensor criticism to sport-specific iMG validation. Wu et al. (2016) demonstrated that helmet-based and skin sensors are prone to artifacts from sensor movement relative to the head [PAGE 3, ref 11], establishing the biomechanical motivation for rigid intraoral coupling via the upper dentition [PAGE 3]. Jones et al. (2022) validated the Prevent Biometrics iMG in rugby: laboratory crash-test-dummy concordance correlation coefficient of 0.98 and on-field PPV of 0.94 for HAE detection [PAGE 4]. Tooby et al. (2019/2024) showed that applying a 5 g and 400 rad/s² recording threshold lifted rugby PPV to 0.99 (95% CI: 0.97–1.00) with sensitivity 0.86 (95% CI: 0.84–0.89) for direct head impacts [PAGE 4]. The FRI-Biocore system achieved PPV 0.98 and sensitivity 0.82 in an American football validation [PAGE 4, ref 15]. Tierney et al. (2020) combined qualitative video analysis with in-vivo head kinematics in collegiate American football [PAGE 13, ref 10]. HEADSport (Tierney et al., 2024) was later developed to enable cross-iMG kinematic comparisons [PAGE 11, ref 35].

The present study inserts NCAA Division I football into this lineage during the 2022 Mountain West Conference Regular Season [PAGE 4], but introduces multi-week traps. First, the observation window comprises only 4 games and 64 eligible player matches [PAGE 6]. Extrapolating these benchmarks to a full season or career assumes stationarity of opponent strength, play-calling, and contact intensity across weeks—an unsupported temporal projection. Second, the dataset excludes training sessions, where HAEs also occur [PAGE 11]; match-only incidence therefore underestimates cumulative weekly exposure. Third, player position switching—occasional in American football—was not controlled [PAGE 11], violating the assumption that a player's position label is fixed across the four-game window. Fourth, the transfer from rugby (largely unhelmeted) to American football (helmeted) assumes similar iMG performance despite different impact mechanics and helmet-head relative motion; this cross-sport generalization is a lineage trap because helmeted direct contact can produce inertial loading without equivalent mouthguard coupling fidelity [PAGE 3, ref 10]. Finally, the citation chain to concussion epidemiology (refs 29, 31) links HAE burden to long-term neurological risk, yet the source itself states the intervention threshold remains unclear [PAGE 10], so the historical lineage outpaces the actionable decision threshold by several weeks of missing exposure data.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock structure:

Crisis habit regression: Following a diagnosed concussion, medical staff are likely to regress to the "big hit" habit—retrospectively scanning iMG data for the single high-magnitude HAE preceding injury [PAGE 11]. This ignores the abstract's central finding that repetitive HAEs below concussion thresholds may drive long-term neurological risk [PAGE 2, refs 7-9]. The regression is recursive because each new concussion reinforces the search for an acute trigger, crowding out attention to the high-frequency, low-magnitude burden (11.2–11.3 events >10 g per match) that dominates exposure [PAGE 2, 7].

Counter-trap: The reported high-magnitude rarity—HAEs above 30 g or 2.0 krad/s² are "relatively rare" [PAGE 10]—creates a counter-trap if staff intervene only on those events. Because such events occur at roughly 0.9–2.6 per match [PAGE 2, 7], a threshold-based protocol targeting them would miss >90% of recorded HAEs. The counter-trap is mistaking rarity for safety: low-magnitude, high-frequency events constitute the bulk of the dose, yet no intervention threshold is defined for them [PAGE 10].

Clock structure: Three clocks operate at different scales. (1) The sensor micro-clock: the 10 ms pre-/40 ms post-trigger capture window [PAGE 4] truncates the kinematic pulse, so the data clock does not align with the full injury-relevant deformation clock. (2) The seasonal clock: four games in 2022 [PAGE 4, 6] is too short to estimate weekly accumulation or recovery dynamics; there is no longitudinal clock for concussion risk progression. (3) The governance clock: because the intervention threshold is explicitly unclear [PAGE 10], there is no decision clock (event count or time window) that triggers player removal or contact-load reduction. The recursive loop is therefore: crisis → retrospective big-hit search → counter-trap on rare high-magnitude events → no governing clock for repetitive exposure → repeated crisis.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof:

Physical layer (fit and retention): The iMG is custom-fit via 3D dental scans under dentist supervision [PAGE 4], and rigid coupling to the skull is asserted through the upper dentition [PAGE 3]. Proximity sensor readings confirm seating during HAEs [PAGE 4, 19]. Veto: n=31 events were excluded because the iMG was "off the teeth" [PAGE 5], and matches were retained only if wear covered at least 90% of contact events [PAGE 6]. If the proximity sensor yields false positives (device seated but not recording) or false negatives (device off-teeth but sensor reads seated), the physical layer veto is unadjudicated because the proximity algorithm has not been independently validated [PAGE 11].

Biomechanical layer (kinematics and sensor limits): The accelerometer range is \(\pm 200\ g\) and the angular channel \(\pm 35\ \mathrm{rad/s^2}\) [PAGE 4]. Any impact exceeding these bounds clips at the sensor ceiling, creating a hard biomechanical singularity for extreme events. The study uses only peak linear and angular acceleration; directionality and temporality (pulse duration) are excluded [PAGE 11]. Veto: two HAEs with identical peak PLA but different pulse durations or impact vectors are indistinguishable in this dataset, so injury-risk ranking by peak magnitude alone is biomechanically incomplete. Class-dependent Butterworth filtering (200/100/50 Hz at -6 dB) [PAGE 4] further vetoes high-frequency content for class 1 and class 2 signals, systematically attenuating short-duration impacts below their true peak.

Weather/environmental layer: The source reports no temperature, humidity, precipitation, or stadium-environment controls for the 2022 Mountain West games [PAGE 4-14]. Outdoor fall football exposes sensors and athletes to variable thermal and moisture conditions that could affect battery performance, wireless transmission, saliva interference with dental seating, or proximity-sensor readout. Because these variables are unmeasured, the environmental veto is unquantified: a cold-weather game could alter iMG fit or electronics without leaving a trace in the recorded kinematics.

Cross-layer adjudication: The most severe veto is the proprietary signal-processing black box. Noise classification (class 0/1/2) and filtering are performed in-house by Prevent Biometrics and lack independent validation [PAGE 11]. This means the very operator that converts raw voltage to PLA/PAA is outside the study's audit boundary, invalidating any claim of end-to-end measurement traceability until the class-dependent filter transfer functions and proximity-sensor confusion matrix are independently reproduced.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) counterfactual veto scenarios with falsifiable predictions:

Veto Scenario 1 — Threshold reclassification. Counterfactual: re-process the raw iMG dataset by raising the recording threshold from 5 g/400 rad/s² to 10 g/1.0 krad/s² and recompute PLA incidence. Prediction: if the source's thresholding is internally consistent, the recomputed incidence for PLA >10 g must equal the reported 11.2 (Defense) and 11.3 (Offense) per player match [PAGE 2, 7], because the reported >10 g values already reflect that band. Veto trigger: if re-filtered incidence deviates by more than 5% from 11.2/11.3, the reported values are not reproducible from the stated threshold operator, vetoing the incidence table.

Veto Scenario 2 — Independent FPOC/FPI adjudication. Counterfactual: have a second, blinded video analyst re-label all 254 "assumed false positives" (19 FP + 46 FPOC + 208 FPI) [PAGE 8] without access to iMG timestamps, using only the original broadcast footage. Prediction: if off-camera and inactive events are truly non-head-impacts, the independent true-positive recovery rate should be near zero, preserving PPV₃ ≈ 0.76 [PAGE 8]. If independent review recovers >15% of those events as true head contacts, PPV₃ would shift upward materially (toward ≥0.85). Veto trigger: an independent PPV₃ above 0.82 falsifies the assumption that FPOC/FPI are uniformly false positives and vetoes the broadest PPV bound.

Veto Scenario 3 — Filter-class reprocessing. Counterfactual: reprocess all class 2 signals (currently low-passed at 50 Hz) with the class 0 filter (200 Hz cut-off) [PAGE 4] and recompute incidence above the high-magnitude thresholds (PLA >30 g; PAA >2.0 krad/s²). Prediction: recovering previously attenuated high-frequency content should increase peak estimates for short-duration impacts, moving some events across the 30 g / 2.0 krad/s² boundaries and raising incidence above the reported 1.6/2.6 (PLA >30 g) and 0.9/1.4 (PAA >2.0 krad/s²) [PAGE 2, 7]. Veto trigger: if high-magnitude incidence changes by more than 10% relative after re-filtering, the class-dependent filtering materially determines the reported rare-event rates and vetoes the high-threshold incidence claims as filter-conditioned artifacts rather than stable biological quantities.
</RLVR_COUNTERFACTUAL_VETOES>