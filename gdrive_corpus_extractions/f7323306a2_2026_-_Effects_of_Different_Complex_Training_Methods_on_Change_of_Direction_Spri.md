---
source: "2026 - Effects of Different Complex Training Methods on Change of Direction, Sprinting, Jumping, and Isometric Strength in National Level Male Bask - Miko ajec et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/2026"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5162
---

<NATIVE_REASONING>
The user wants a deep reasoning analysis of the provided source paper (Mikołajec et al., 2026, JSSM) comparing ascending (ACT) vs descending (DCT) complex training in national-level male basketball players.

Constraints:
1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis covering all these sections. Let me carefully extract data from the source text.

Key facts from source:
- Journal of Sports Science and Medicine (2026) 25, 314-326
- DOI: 10.52082/jssm.2026.314
- Authors: Mikołajec, Jarosz, Krzysztofik, Stastny, Spieszny
- 20 athletes completed (ACT n=8, DCT n=12). Originally 28 selected.
- Age 17±1 years both groups.
- ACT: body mass 88±10 kg, height 187±7 cm, basketball experience 7±2.5 years, RT experience 3.5±1 years.
- DCT: body mass 75±7 kg, height 182±4 cm, basketball experience 6.5±2 years, RT experience 3.5±1 years.
- 8-week program, twice weekly, off-season.
- DCT: resistance before plyometrics. ACT: plyometrics before resistance.
- Matched volumes/intensities.
- Primary outcomes: CODAT, CMJ, CMJ-A, SJ.
- Secondary: DJ-40, DJ-60, linear sprint 5m/10m, IMTP.
- ANCOVA with pre-test as covariate.
- Jump height equation: h = TOV² / (2g), g = 9.81 m·s⁻² [PAGE 3-4].
- IMTP: force plate, pins, knee 125°–145°, hip 155°–165°, two max 5s pulls, 120s rest, peak force at 100ms and 200ms [PAGE 4].
- Timing gates SmartSpeed Pro, 0.001s resolution [PAGE 4].
- CODAT: standing start, 5m, 45° turn, 3m, 90° turn, 3m, 90° turn, 3m, 45° turn, 10m finish [PAGE 4].
- Results: No consistent between-group differences for CMJ, CMJ-A, SJ, DJ, sprinting, COD (all p ≥ 0.05) except:
  - CMJ-A peak velocity favoring DCT (p=0.015, adjusted mean difference 0.12 m/s, 95% CI -0.02 to 0.26 m/s, d=1.22)
  - IMTPF100 favoring DCT (p=0.011, adjusted mean difference 1.34 N/kg b.m., 95% CI -1.47 to 4.15)
- 5-10-5 test: F=6.426, p=0.022 (mentioned in text but abstract says no consistent differences? Actually text says "no significant group effects for post-intervention performance in the 5–10–5 test (F = 6.426, p = 0.022...)" Wait p=0.022 is < 0.05. But abstract says no consistent between-group differences. Let me re-read. Page 8: "ANCOVA indicated no significant group effects for post-intervention performance in the 5–10–5 test (F = 6.426, p = 0.022, η²p = 0.287), 5 m sprints (F = 4.503, p = 0.050...)" Wait p=0.022 is significant. But Supplementary Table S1 says 5–10–5 time p=0.022*. So it is significant. However the text earlier said "no consistent between-group differences were observed for jumping performance... nor for sprinting or change-of-direction performance (all p ≥ 0.05)" in abstract. There's a slight inconsistency in the paper itself between abstract and results text/table. Actually looking at Table 4 text: p=0.022 for 5-10-5. But then in discussion: "Although statistically significant group effects were observed for the 5–10–5 test and 5 m sprint time, these effects were not accompanied by corresponding improvements in other sprint or COD tests". So it's acknowledged but deemed inconsistent/task-specific.
- 5m sprint: F=4.503, p=0.050 (borderline).
- 10m sprint: p=0.708.
- CODAT: p=0.159.
- Within-group improvements: ACT 5m 1.183→1.07 (ES -1.19), DCT 5m 1.176→1.137 (ES -0.79). CODAT ACT 6.006→5.739 (-0.77), DCT 6.174→5.818 (-1.58).
- IMTPF100: DCT 13.59→14.7 N/kg b.m. (+0.29 ES), ACT 12.51→12.57 (0.03).
- IMTPF200: no group effect p=0.130.
- CMJPV: ANCOVA F=6.306 p=0.023 but interaction violated homogeneity, t-test on deltas p=0.056 (trend), DCT +0.066 vs ACT -0.011 m/s, d=0.93.
- CMJ-APV: t-test p=0.015, DCT favored, d=1.22, adjusted mean diff 0.12 m/s.
- CMJ-AJH: p=0.050 (borderline), d=0.96, adjusted diff 2.5 cm.
- Sample size limitation: n=20, non-randomized, no control group.
- Training tables: ACT does plyo first (A1-A4), then resistance (C1-D2). DCT does resistance first (A1-B2), then plyo (C1-D4).
- Intensities: 80% 1RM weeks 1-5, 85% weeks 6-8 for resistance. Plyo body mass.
- Rest: resistance 15s or 120s, plyo 60s.
- 72h recovery between sessions.
- Statistical: JASP 0.18.3, Shapiro-Wilk, ANCOVA, partial eta squared thresholds (0.01-0.059 small, 0.06-0.14 medium, >0.14 large), Cohen's d (0.2 small, 0.5 medium, >0.8 large).

Now I need to structure the response.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive why null findings dominate despite within-group gains.
- ANCOVA assumptions: homogeneity of regression slopes violated for CMJPV, CMJ-AJH, CMJ-APV, IMTPF100. This means ANCOVA F-tests are not strictly valid for those; they fell back to delta t-tests.
- Power analysis: n=20 split 8/12. With η²p around 0.28-0.35 for significant effects, observed power might be decent for large effects but underpowered for medium effects. Calculate rough power? Need to be careful not to invent toy equations, but can discuss power conceptually with formal units.
- Baseline imbalances: ACT heavier (88 vs 75 kg) and taller (187 vs 182 cm), yet similar age/experience. This mass difference could affect relative force (N/kg) and absolute jump/sprint metrics. ANCOVA adjusts for baseline performance but not body mass directly (though IMTP is relative N/kg).
- Multiple comparisons: many outcomes (CMJ JH, PV, CD, CT; CMJ-A JH, PV, CD, CT; SJ JH, PV; DJ40 JH, CT, RSI; DJ60 JH, CT, RSI; IMTP 100, 200; sprint 5, 10; 5-10-5; CODAT). That's ~20 tests. Family-wise error inflation. Only 2-3 survive p<0.05 unadjusted.
- Gray zone: p=0.050 for CMJ-AJH and 5m sprint exactly at threshold. p=0.056 for CMJPV delta. These are "borderline" and should not be over-interpreted.
- Mechanism: DCT early high-load under low fatigue may enhance early-phase force (IMTPF100) and CMJ-APV. ACT early plyo might potentiate but also fatigue resistance work. Yet no broad transfer to COD/sprint because CODAT includes 45/90 degree cuts requiring eccentric braking; plyometric emphasis was eccentric-focused multidirectional, which may not overload the specific CODAT angles enough, or sprint distances too short to differentiate.
- The equation h = v_TO²/(2g) assumes vertical take-off, no air resistance, point-mass COM, constant g. Breakdown if take-off angle ≠ 90° or if COM displacement not vertical. For DJ and SJ, valid.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Jump height: \( h = \frac{v_{\text{TO}}^2}{2g} \), \( g = 9.81 \, \mathrm{m \cdot s^{-2}} \), \( v_{\text{TO}} \) vertical velocity of COM at take-off [PAGE 3-4].
- ANCOVA model: \( Y_{\text{post},i} = \beta_0 + \beta_1 Y_{\text{pre},i} + \tau G_i + \epsilon_i \), where \( G_i \in \{0,1\} \) (ACT=0, DCT=1), \( \epsilon_i \sim \mathcal{N}(0,\sigma^2) \). Homogeneity of slopes: test \( \beta_3 (Y_{\text{pre}} \times G) = 0 \).
- Effect sizes: partial eta squared \( \eta_p^2 = \frac{SS_{\text{effect}}}{SS_{\text{effect}} + SS_{\text{error}}} \). Cohen's d \( d = \frac{\bar{X}_{\text{post}} - \bar{X}_{\text{pre}}}{SD_{\text{pooled}}} \).
- IMTP relative force: \( F_{\text{rel}} = \frac{F_{\text{peak}}}{m_{\text{b.m.}}} \) in \( \mathrm{N \cdot kg^{-1} \, b.m.} \).
- RSI: \( RSI = \frac{h_{\text{jump}}}{t_{\text{contact}}} \) in \( \mathrm{m \cdot s^{-1}} \) (implied by Table units m/s).
- 5-10-5 and CODAT in seconds (s), timing gates resolution 0.001 s [PAGE 4].
- Sprint 5m, 10m in seconds.
- Rest intervals: 60 s (plyo), 15 s / 120 s (resistance), 120 s between IMTP attempts [PAGE 4-5].
- Training intensity: 80%–85% 1RM. Volume: sets × reps × load.
- Breakdown/singularity: ANCOVA breaks when group × covariate interaction significant (p < 0.05), violating homogeneity of regression slopes. Occurred for CMJPV (p=0.030), CMJ-AJH (p=0.033), CMJ-APV (p=0.012), IMTPF100 (p=0.004). Then delta-score t-tests used.
- Power/singularity: small n=20, unbalanced 8 vs 12, ANCOVA df_error = N - g - 1 = 17? Actually for ANCOVA with one covariate and two groups: df_error = N - 2 - 1 = 17. t(18) reported for independent samples, so df=18.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Cormie et al. 2011 (force-velocity spectrum), Folland & Williams 2007 (hypertrophy/neural), Cormier et al. 2020/2022 (complex/contrast sequencing), Thapa et al. 2024 meta-analysis (comparable outcomes regardless of order), Kobal et al. 2017 (only prior direct ACT vs DCT comparison, soccer), Daehlin et al. 2017 (ice hockey ACT high volume), Rodríguez-Rosell et al. 2017 (soccer DCT in-season), Arabatzi et al. 2010, Sáez-Sáez De Villarreal et al. 2011, Fatouros et al. 2000 (ACT untrained).
- Multi-week traps: 8-week off-season, twice weekly. Short duration may be insufficient for morphological changes (pennation angle, CSA) which require longer; neural adaptations dominate early. Detraining/retesting learning effects controlled by familiarization but off-season basketball practice load not quantified (confounder). Seasonal timing: off-season means no competitive matches, but regular practice continues unquantified, adding uncontrolled concurrent training. Multi-week trap: adaptations observed may be due to natural off-season recovery or practice, not CT sequence, especially without control group.
- Historical context: ascending = velocity-oriented, descending = force-oriented. But evidence mixed.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This section is more abstract/philosophical but must tie to the study. "Crisis habit regression" = under pressure (game crisis), athletes regress to dominant motor habits trained first or most recently? Counter-trap = if coach thinks DCT is superior for force, they may over-prescribe it and neglect velocity; ACT may be underused. Clock = off-season 8-week window, twice weekly, 72h rest. The "clock" limits total dose; sequence becomes a fine-tuning variable because total volume/intensity are fixed by the clock. Crisis habit regression: in late-game fatigue, early-session exercise order matters less than accumulated fatigue; the dominant habit (whatever was trained under fatigue) expresses. If DCT does resistance first under fresh conditions, force habits are encoded well; if plyo second under fatigue, velocity quality may suffer. But results show minimal differences, suggesting crisis habit regression is weak at this dose.
- Counter-trap: expecting ACT to improve sprint/COD because velocity first; data show no consistent sprint/COD advantage. Counter-trap sprung: coaches might sequence plyo first expecting transfer to basketball cuts, but data don't support broad transfer.
- Clock: 8 weeks, 16 sessions. Acute post-activation potentiation (PAP) vs fatigue not measured. The clock of intra-session rest (60s plyo, 15s/120s resistance) may be too short for full PAP or too long, blunting sequence effects.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical veto: Non-randomized allocation (team logistics) → selection bias vetoes causal claims about sequence. ACT baseline mass 88 kg vs DCT 75 kg (~13 kg difference, ~17% heavier). This mass disparity could confer absolute force/sprint momentum advantages independently of sequence; ANCOVA adjusts baseline performance but not body mass as covariate for IMTP absolute (though relative N/kg used). Veto: cannot attribute IMTPF100 difference solely to sequence.
- Biomechanical veto: IMTP knee 125°–145°, hip 155°–165°; fixed isometric angle may not reflect dynamic COD/sprint joint angles. Early-phase force at 100 ms is neural, but CMJ-APV and IMTPF100 did not transfer to DJ RSI or sprint times. Veto: isometric early force expression is task-specific; no cross-layer transfer to dynamic COD under the tested protocol.
- Weather veto: Indoor court testing, controlled environment; weather is not a factor (indoor). However, off-season basketball practice load unquantified; environmental conditions of practice (indoor/outdoor, temperature) unknown. Since testing was indoor on same court, weather veto is null/controlled for testing, but practice-layer environmental variance is unmeasured.
- Injury/biomechanical: Eccentric-focused multidirectional plyometrics target braking; yet CODAT includes 45° and 90° cuts. No injury data reported. Veto: absence of injury surveillance means safety/efficacy tradeoff unknown.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable counterfactual scenarios with predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll frame as falsifiable counterfactuals.
1. Scenario: Randomize 40 national-level male basketball players (20 ACT, 20 DCT), equate baseline body mass ±2 kg, add a non-training control, quantify basketball practice load via session-RPE, and extend to 16 weeks. Prediction: Between-group differences for CMJ-APV and IMTPF100 will attenuate to p > 0.05 and η²p < 0.06; only within-group pre-post gains will remain significant. Veto: if p remains < 0.05 with larger N and mass matching, the sequence effect is robust; if not, original finding was underpowered/confounded.
2. Scenario: Acute counterbalanced crossover within same athletes: Session A DCT (squat → DJ), Session B ACT (DJ → squat), measure CMJ peak velocity and IMTPF100 immediately after each block and 48h later. Prediction: DCT will show higher IMTPF100 post-resistance block but lower CMJPV post-plyometric block due to residual fatigue; ACT will show inverse acute pattern. Long-term (8 weeks), no group difference in chronic adaptations. Vero: if acute effects do not predict chronic group differences, the chronic sequence effect is not mediated by acute potentiation/fatigue.
3. Scenario: Alter COD test angles to wide-angle (>90°, e.g., 180° cut) vs narrow-angle (<90°, 45° cut) while keeping volume/intensity matched. Prediction: DCT will show superior wide-angle COD (eccentric braking force) but not narrow-angle; ACT will show no consistent advantage in either. Veto: if no angle-specific interaction emerges, the theoretical force-velocity sequencing model fails to predict COD specificity.

Need to ensure no betting lines. Definitely avoid any sports betting terminology. No odds, spreads, etc.

Need >=1000 words total. Each section should be substantial. THINK_TRACE >=400 words.

Let me draft carefully with exact XML tags.

I need to include verbatim quotes where citing pages. The prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include [PAGE N] and some quotes.

Let's begin drafting.

THINK_TRACE: >400 words. I'll write maybe 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX with page cites.

RETROCAUSAL_GENEALOGY: historical lineage.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: vetoes.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Total words likely >1500. Good.

Let's make sure no fake ratios. Avoid "Force/Fatigue". Use formal equations only.

Check for any betting language: none.

Now write final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper by Mikołajec et al. (2026) reports a nonrandomized, single-blind parallel trial comparing ascending complex training (ACT; plyometrics before resistance) versus descending complex training (DCT; resistance before plyometrics) in 20 national-level male basketball players (ACT n=8, DCT n=12) across an 8-week off-season, twice-weekly intervention with matched volume and intensity [PAGE 1-2]. The central statistical inference problem is that the study conducted roughly twenty separate hypothesis tests across jump height, peak velocity, countermovement depth, contraction time, reactive strength index, contact time, isometric mid-thigh pull force at 100 ms and 200 ms, 5 m and 10 m sprints, 5-10-5 agility, and CODAT. With an unadjusted alpha of 0.05 and no family-wise error correction reported, the expected number of false positives under the global null is approximately one; the two statistically significant between-group effects (CMJ-APV p=0.015; IMTPF100 p=0.011) plus borderline signals (CMJ-AJH p=0.050; 5 m sprint p=0.050; CMJPV delta p=0.056) sit in a gray zone where multiplicity makes replication essential before any sequencing prescription is codified.

A deeper derivation proceeds through the ANCOVA model. The authors specified post-test performance as the dependent variable, group as the fixed factor, and pre-test performance as the covariate [PAGE 4-5]. Formally, for outcome Y: Y_post,i = β₀ + β₁·Y_pre,i + τ·G_i + ε_i, where G_i ∈ {0,1} indexes ACT versus DCT. The validity of the group-effect F-test rests on the homogeneity-of-regression-slopes assumption: β₃·(Y_pre × G) = 0. The authors explicitly report violations for CMJ peak velocity (F=5.691, p=0.030), CMJ-A jump height (p=0.033), CMJ-A peak velocity (p=0.012), and IMTPF100 (F=11.466, p=0.004) [PAGE 6-8]. When that interaction is significant, the ANCOVA main-effect F-statistic is not strictly interpretable because the regression lines cross; the correct fallback is a delta-score independent-samples t-test, which they applied. For CMJ-APV, the delta t-test yielded t(18)=–2.676, p=0.015, d=1.22, favoring DCT; for IMTPF100, the adjusted mean difference was 1.34 N·kg⁻¹ b.m. (95% CI: –1.47 to 4.15), p=0.011 [PAGE 7-8, Supplementary Table S1]. Notice that the confidence interval for IMTPF100 crosses zero, indicating that despite p<0.05, the precision is low and the true effect could be negligible or even reversed.

The baseline anthropometrics introduce a selection-bias gray zone. ACT players were substantially heavier (88 ± 10 kg) and taller (187 ± 7 cm) than DCT players (75 ± 7 kg; 182 ± 4 cm) despite identical mean age and resistance-training experience [PAGE 2]. Because group allocation was driven by team logistics rather than randomization, this ~13 kg mass discrepancy (~17%) confounds absolute force and momentum-dependent outcomes. IMTP was reported relative to body mass (N·kg⁻¹ b.m.), which partially mitigates this for force output, but jump height and sprint time are not mass-normalized in the tables, so heavier ACT athletes may have started with different force-velocity operating points. ANCOVA adjusts for baseline performance but not for body mass as a covariate; thus a residual mass-by-sequence interaction cannot be excluded.

Statistical power is another breakdown regime. With N=20 split 8/12, ANCOVA error degrees of freedom are roughly N – g – 1 = 17, and independent-samples tests use t(18). Observed partial eta-squared values for the significant outcomes were large (η²p = 0.343 for IMTPF100; η²p = 0.357 for CMJ-APV), but these are point estimates from a small sample and are subject to winner’s-curse inflation. The study had no a priori sample-size estimation [PAGE 9], so medium effects (η²p ≈ 0.06–0.14) that appear throughout the tables (e.g., CMJCD η²p=0.132; 5-10-5 η²p=0.287; 5 m η²p=0.220) were almost certainly underpowered. This explains the abstract’s claim of “no consistent between-group differences” coexisting with the results table’s p=0.022 for the 5-10-5 test: significance is present but inconsistent across related constructs, indicating task-specific rather than generalized adaptation.

Mechanistically, the paper’s jump-height equation h = v_TO² / (2g), with g = 9.81 m·s⁻² [PAGE 3-4], assumes vertical take-off of the center of mass and negligible air resistance; it breaks down for any non-vertical trajectory or if the force-plate-derived take-off velocity does not correspond to the actual COM displacement. The authors’ emphasis on eccentric-focused multidirectional plyometrics was intended to target braking capacity and tendon stiffness [PAGE 3], yet no between-group effects emerged for drop-jump RSI or contact time, and COD/sprint outcomes were null except for the isolated 5-10-5 and borderline 5 m signals. Thus the early-phase force advantage in DCT (IMTPF100) did not propagate up the kinetic chain to reactive or change-of-direction performance, suggesting the neural adaptation was tightly task-specific to the isometric mid-thigh pull posture (knee 125°–145°, hip 155°–165°) and did not generalize to dynamic COD angles [PAGE 4].

Finally, the absence of a non-training control group and the unquantified basketball practice load mean that within-group pre-post improvements (e.g., ACT 5 m: 1.183 → 1.07 s, ES –1.19; DCT CODAT: 6.174 → 5.818 s, ES –1.58) [PAGE 8, Table 4] cannot be causally attributed to complex training versus normal off-season practice or test familiarization. These gray zones—multiplicity, violated ANCOVA assumptions, baseline imbalance, low power, missing control, and unmeasured practice load—collectively veto strong causal claims about exercise sequencing while supporting the conservative conclusion that both methods are viable and that sequence is, at most, a fine-tuning variable.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Jump height from force-plate take-off velocity [PAGE 3-4]:
h = v_TO² / (2g),   v_TO = vertical center-of-mass velocity at take-off [m·s⁻¹],   g = 9.81 m·s⁻².
Breakdown: valid only for vertical, point-mass COM flight; invalid if take-off angle deviates from 90° or if COM displacement is not purely vertical.

ANCOVA operator [PAGE 4-5]:
Y_post,i = β₀ + β₁·Y_pre,i + τ·G_i + ε_i,   G_i ∈ {0,1} (ACT = 0, DCT = 1),   ε_i ~ N(0, σ²).
Homogeneity of slopes test: H₀: β₃ = 0 for the interaction term (Y_pre × G). When rejected (p < 0.05), ANCOVA main-effect F is invalid; fallback = delta-score independent t-test: ΔY = Y_post – Y_pre.

Effect sizes [PAGE 4-5]:
Partial eta-squared: η²p = SS_effect / (SS_effect + SS_error); thresholds: small 0.01–0.059, medium 0.06–0.14, large > 0.14.
Cohen’s d: d = (X̄_post – X̄_pre) / SD_pooled; thresholds: small 0.2, medium 0.5, large > 0.8.

Isometric mid-thigh pull relative force [PAGE 4, Table 3]:
F_rel,100 = F_peak,100 / m_b.m. [N·kg⁻¹ b.m.]; F_rel,200 similarly.
IMTP setup: bar fixed at mid-thigh, knee 125°–145°, hip 155°–165°, two maximal 5-s pulls, 120 s rest, “pull as hard and fast as possible.”

Timing and kinematics [PAGE 4]:
SmartSpeed Pro timing gates, resolution 0.001 s; best of two trials retained; CODAT = 5 m sprint, 45° turn, 3 m, 90° turn, 3 m, 90° turn, 3 m, 45° turn, 10 m finish. 5-10-5 = pro-agility shuttle. Sprint splits at 5 m and 10 m.

Reactive strength index [Table 3, units m·s⁻¹]:
RSI = h_jump / t_contact.

Training dose parameters [PAGE 4-5, Tables 1-2]:
Frequency: 2 sessions·week⁻¹, 72 h inter-session recovery; 8 weeks; 16 total sessions.
Resistance intensity: 80% 1RM (weeks 1–5), 85% 1RM (weeks 6–8). Plyometric intensity: body mass (BM).
Rest: plyometric blocks 60 s; resistance intra-set rest 15 s (lower body) or 120 s (upper body); IMTP attempts separated by 120 s.
Volume matching: sets × repetitions × load equated between ACT and DCT; only exercise order differed.

Significant/breakdown statistics [PAGE 6-8, Supplementary Table S1]:
CMJ-APV: ANCOVA F = 8.891, p = 0.009, η²p = 0.357, but group × covariate interaction p = 0.012 → slopes heterogeneous; delta t(18) = –2.676, p = 0.015, d = 1.22; adjusted mean difference (DCT − ACT) = 0.12 m·s⁻¹, 95% CI [–0.02, 0.26].
IMTPF100: ANCOVA F = 8.347, p = 0.011, η²p = 0.343; interaction p = 0.004; adjusted mean difference = 1.34 N·kg⁻¹ b.m., 95% CI [–1.47, 4.15].
CMJPV: ANCOVA F = 6.306, p = 0.023, η²p = 0.283; interaction p = 0.030; delta t(18) = –2.044, p = 0.056, d = 0.93 (trend only).
Borderline nulls: CMJ-AJH p = 0.050 (d = 0.96); 5 m sprint p = 0.050; 5-10-5 p = 0.022 (η²p = 0.287) but inconsistent with other sprint/COD measures; CODAT p = 0.159; 10 m sprint p = 0.708.
All other jumping, DJ, sprint, and COD comparisons: p ≥ 0.05.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage of this study traces to the force–velocity spectrum model of neuromuscular adaptation: high-load, low-velocity resistance training drives motor-unit recruitment, synchronization, and morphological change (greater cross-sectional area and pennation angle), whereas low-load, high-velocity plyometrics exploit the stretch-shortening cycle (SSC) and elastic energy storage for movement speed [PAGE 2, citing Folland and Williams, 2007; Cormie et al., 2011; Cormier et al., 2022]. Complex training was conceived to target both ends of the spectrum within a single session, but the ordering of stimuli was theorized to matter because the neuromuscular system trains under the fatigue state present when each stimulus is delivered [PAGE 2]. Early exercises occur under lower accumulated fatigue; late exercises occur under greater peripheral and central fatigue, potentially attenuating velocity and force output [PAGE 2].

Direct historical precedent is thin. To the authors’ knowledge, only Kobal et al. (2017) had previously compared ACT and DCT directly, using 27 elite young soccer players across three within-session sequences over eight weeks; both methods produced similar half-squat and CMJ gains, but only ACT improved 10- and 20-m sprint times, while neither improved 505 agility [PAGE 2]. That study suggested ACT might be more velocity-oriented for sprinting, yet it did not test basketball or a wide range of COD angles [PAGE 2]. The present study extends this to national-level male basketball players during the off-season, with a broader test battery including CODAT, 5-10-5, DJ-40/60, and IMTP at 100 ms and 200 ms [PAGE 1-2].

The broader complex/contrast literature includes Thapa et al. (2024), who meta-analyzed complex training and found COD and short-sprint outcomes generally comparable regardless of within-session order [PAGE 8]; Cormier et al. (2020, 2022) on terminology and sequencing considerations [PAGE 2, 11]; Daehlin et al. (2017) applying ACT to ice hockey with very high volume (43–54 sets/session) [PAGE 9]; Rodríguez-Rosell et al. (2017) on DCT in soccer in-season [PAGE 9]; and older work in untrained or student populations (Fatouros et al., 2000; Arabatzi et al., 2010; Sáez-Sáez De Villarreal et al., 2011) showing that large effects in novices do not necessarily transfer to trained athletes [PAGE 9-10].

Multi-week traps: The intervention was only 8 weeks, twice weekly, during the off-season. Eight weeks is sufficient for early neural adaptations (rapid motor-unit recruitment, initial discharge rate, corticospinal drive) but generally insufficient for substantial morphological remodeling such as increased muscle pennation angle or fiber-type shifts [PAGE 8-9]. Because athletes remained in regular basketball practice whose load, duration, and RPE were not quantified, concurrent training load is an unmeasured confounder [PAGE 3]. Off-season timing also means no competitive match load, but natural recovery from the prior season and spontaneous skill re-acquisition could produce within-group gains unrelated to CT sequence; without a non-training control group, the pre-post improvements cannot be causally isolated to the intervention [PAGE 9]. The multi-week trap is therefore that short-duration, low-to-moderate volume complex training in already-trained athletes produces primarily task-specific neural expression rather than generalized athletic transfer, and any observed between-group difference after only 16 sessions is fragile to regression to the mean and selection bias from nonrandomized team-based allocation [PAGE 2-3, 9].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression posits that under match-pressure fatigue, athletes regress to the motor pattern encoded under the dominant training condition. If DCT encodes high-load force production first while fresh, the crisis habit should be a force-dominant braking and acceleration strategy; if ACT encodes plyometrics first, the crisis habit should be velocity-dominant SSC reactivity. The present data show that DCT improved early-phase isometric force (IMTPF100) and CMJ-A peak velocity but did not transfer to 5-10-5, CODAT, or 10 m sprint performance, meaning the “crisis habit” encoded by DCT remained confined to isometric early-force expression and did not regress into dynamic game actions under fatigue [PAGE 8]. Conversely, ACT’s velocity-first encoding did not produce a measurable crisis advantage in short sprints or COD, contradicting the recursive expectation that early-session velocity work should dominate under fatigue.

The counter-trap is the coach’s inference that because DCT won on IMTPF100 and CMJ-APV, resistance should always precede plyometrics for basketball players. This is a trap because the significant effects were isolated, the confidence interval for IMTPF100 crossed zero (–1.47 to 4.15 N·kg⁻¹ b.m.), and the broader battery was null [Supplementary Table S1]. If a coach recursively over-prescribes DCT based on these two outcomes, they risk neglecting velocity-biased sequencing that might benefit other contexts, while gaining no reliable COD or sprint advantage. The correct recursive update is that exercise order is a fine-tuning variable, not a primary driver of athletic outcomes [PAGE 1, 9].

The clock imposes hard constraints: 8 weeks, 16 sessions, 72 h recovery, indoor off-season. Within each session, plyometric rest was fixed at 60 s and resistance rest at 15–120 s [PAGE 4-5]. Because the total dose was equated and the calendar window was short, there was no temporal room for sequencing to create divergent fatigue-recovery trajectories large enough to rewrite adaptation. The clock thus caps the maximum plausible effect of order: with only twice-weekly exposure and matched volume, acute post-activation potentiation or intra-session fatigue never accumulated sufficiently to differentiate groups chronically. The null findings across most outcomes are consistent with a clock-limited system where sequence operates only at the margins.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto (selection & causal): Participants were intentionally assigned by team-coach logistics, not randomized [PAGE 2]. ACT baseline mass (88 ± 10 kg) exceeded DCT (75 ± 7 kg) by ~13 kg (~17%) [PAGE 2]. This confounds absolute force and momentum outcomes because ANCOVA adjusted for baseline performance but not body mass. Veto: causal attribution of IMTPF100 or jump outcomes to exercise sequence alone is invalid; the mass disparity is an unblocked backdoor path.

Biomechanical veto (task specificity): IMTP was performed at fixed joint angles (knee 125°–145°, hip 155°–165°) and measured force at 100 ms and 200 ms [PAGE 4]. Early-phase force at 100 ms is predominantly neural (rapid motor-unit recruitment, initial discharge rate) [PAGE 8], but it did not transfer to DJ reactive strength index, contact time, or any sprint/COD test [PAGE 7-8]. Veto: an isometric early-force adaptation in a fixed posture is biomechanically decoupled from dynamic COD at 45°–90° angles and from horizontal sprint propulsion. The paper’s own admission that RSI did not change despite IMTPF100 gains confirms non-transfer [PAGE 9].

Weather/environmental veto: All testing occurred on a single indoor court with timing gates at fixed height (~0.7 m) and standardized order [PAGE 4]. Weather is therefore controlled out of the testing layer. However, regular basketball practice load during the intervention was not formally quantified [PAGE 3], and practice could have occurred outdoors or under variable thermal conditions. Veto: testing-layer environmental control is strong, but the practice-layer environmental and load variance is unmeasured, so off-season practice could have differentially affected groups through non-CT channels.

Injury/load veto: The program emphasized eccentric-focused multidirectional plyometrics to target braking capacity and tendon stiffness [PAGE 3], yet no injury surveillance, muscle-damage markers, or objective fatigue monitoring were reported [PAGE 9]. Veto: without acute fatigue or soreness data, it is unknown whether DCT’s resistance-first order accumulated more muscle damage that blunted later plyometric quality, or whether ACT’s plyometric-first order compromised resistance technique. The safety-efficacy tradeoff of each sequence remains unverified.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Randomized replication with mass matching and control): Re-run the 8-week protocol with N = 40 (20 ACT, 20 DCT) plus a non-training control (n = 10), stratifying so baseline body mass differs by < 2 kg between ACT and DCT, and quantify basketball practice via session-RPE every session. Primary endpoints: CMJ-APV and IMTPF100 adjusted for baseline. Prediction: With adequate power and baseline mass balance, the between-group p-values for CMJ-APV and IMTPF100 will exceed 0.05 and η²p will fall below 0.06; only within-group pre-post improvements will remain significant. Veto condition: if p remains < 0.05 with η²p > 0.14 in the larger, mass-matched sample, the sequence effect is robust and not an artifact of small-N selection bias; if p > 0.05, the original finding is vetoed as underpowered/confounded.

Scenario 2 (Acute counterbalanced crossover): Within the same national-level basketball players, perform two testing sessions separated by 7 days: Session A = DCT order (back squat at 85% 1RM → drop jump 60 cm); Session B = ACT order (drop jump 60 cm → back squat at 85% 1RM). Measure CMJ peak velocity and IMTPF100 immediately after the second block of each session and again at 48 h. Prediction: DCT will elevate post-block IMTPF100 but suppress post-block CMJPV due to residual resistance fatigue; ACT will show the inverse acute pattern (higher post-block CMJPV, lower post-block IMTPF100). At 48 h, both will converge. Chronic 8-week group differences will not be predicted by the acute session-by-session pattern. Veto condition: if the acute DCT IMTPF100 boost does not correlate with chronic IMTPF100 group differences, the chronic sequence effect is not mediated by acute potentiation/fatigue, vetoing the mechanistic explanation offered in the discussion [PAGE 8].

Scenario 3 (COD angle specificity test): Keep volume and intensity matched but vary COD test geometry: narrow-angle cuts (< 90°, e.g., 45° cuts) versus wide-angle cuts (> 90°, e.g., 180° cuts) with identical approach velocities. Prediction: DCT will show superior wide-angle COD performance (greater eccentric braking demand) but no advantage in narrow-angle COD; ACT will show no consistent advantage in either. If no angle-by-group interaction emerges (p > 0.05 for both angles), the theoretical claim that DCT is force-oriented for wide-angle cuts while ACT is velocity-oriented for narrow-angle cuts is falsified for basketball. Veto condition: absence of angle-specific transfer vetoes the generalizable force–velocity sequencing model for COD in this population.
</RLVR_COUNTERFACTUAL_VETOES>