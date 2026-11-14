---
source: "2026 - Movement Regularity and Local Dynamic Stability During Acute and 12-Week Retrained Non-Rearfoot-Strike Running Compared to Habitual Non-Rear - Wu et al.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 27
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4099
---

<NATIVE_REASONING>
The user wants a deep reasoning output based on the provided research paper. I need to follow the STRICT INVARIANTS:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is pages 822-837 of a JSSM 2026 paper. Page markers in text seem to be page numbers like 822, 823, 824, etc. The user said [PAGE N] markers. I should cite [PAGE 822], [PAGE 823], etc. based on the page numbers visible in the source text.

Let me plan the content:

**THINK_TRACE (>=400 words)**: Deep multi-hop derivation & gray-zone audit. Need to derive the implications of SampEn and LyE changes, the fact that HRFS-AN had more anterior foot strike but lower loading rates than HRFS-GR, the nonlinear dynamics interpretation, gray zones: sample entropy parameter sensitivity (m=2,r=0.25 vs others), Holm correction, state-space reconstruction assumptions, small sample (n=13 HRFS completers), male-only, no follow-up, causality vs correlation, interpretation of "greater regularity" not necessarily beneficial, etc.

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX equations from the paper: SampEn equation (Eq 1), LyE equation (d<ln d(t)>/dt), CV = SD/mean, VALR/VILR definitions, LMM equation Outcome ~ State + (1|participant), parameters: m=2, r=0.25*SD, N=2000 points, sampling 200 Hz, speed 9 km/h = 2.5 m/s, filter 4th order Butterworth 7 Hz kinematics, 50 Hz vGRF, initial contact >30N, middle 20s (5-25s), 10 gait cycles, Theiler window = mean signal period, early divergence window 110-157 samples (0.55-0.785s), embedding dimension via FNN ≤1% false neighbors, time delay via AMI first local minimum. Units: BW/s for loading rates, degrees for angles, steps/min cadence, m step length, ms contact time, SampEn dimensionless (natural log), LyE in units of 1/time (s^-1 typically, though paper doesn't explicitly state units but divergence per sample normalized by stride). Breakdown regimes: SampEn sparse matches if r too small or m too high; LyE divergence if data too short (<2000 points) or noise; LMM singularity if random effects variance near zero; Holm correction family-wise error; N=13 completers after dropout (2 triceps surae soreness, 1 nonadherence, 3 failed conversion) means attrition bias.

**RETROCAUSAL_GENEALOGY**: Historical lineage: Bramble & Lieberman 2004, Lieberman et al. 2010 (barefoot running, heel strike prevalence ~25% NRFS). Ekizos et al. 2017/2018 (acute shod-barefoot transition reduced stability). Hunter et al. 2021/2023 (nonlinear analysis running). Stergiou & Decker 2011. Dingwell et al. 2001 (LyE vs variability). Rosenstein et al. 1993. Richman & Moorman 2000 (SampEn). Krakauer et al. 2019 (motor learning). Wood et al. 2024 (RL during locomotion). Multi-week traps: Warne et al. 2014 (4-week minimalist), Yang et al. 2020 (12-week), Zhang et al. 2021 (12-week Achilles), Deng et al. 2024 (12-week minimalist MGU). The trap: acute vs retrained states are not linearly interpolated; 12 weeks may be insufficient for full habit consolidation; absence of follow-up means retention unknown; attrition (calf/foot pain) is a selection bias that may erase adverse responders.

**RECURSIVE_THEORY_OF_MIND**: Crisis habit regression = under fatigue/novel stress, runner regresses to RFS or exaggerated anterior strike (HRFS-AN more anterior). Counter-trap = coach interprets lower SampEn/LyE as "better stability" and pushes aggressive retraining; but higher SampEn may reflect adaptability (Bonacci 2020), higher LyE not necessarily injury. Clock = 12-week program is a fixed schedule; biological adaptation (tendon, calf) may lag or exceed; no follow-up means clock stops at week 12, unknown decay.

**CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof. Since treadmill at 9 km/h indoors, weather veto is null (controlled environment). Physical veto: acute anterior strike in HRFS-AN produced lower VILR/VALR than HRFS-GR (counterintuitive; paper says VILR/VALR higher in GR than AN). Biomechanical veto: despite lower SampEn/LyE (more stable/regular) in GR/HNRFS vs AN, residual differences in hip/knee remain. No significant peak vGRF differences. Discrete kinematics mostly similar. The paper itself says injury incidence not assessed, so clinical significance uncertain. Veto: cannot claim injury reduction from these nonlinear metrics alone.

**RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios that are verifiable. Since this is a reasoning foundry, I'll define scenarios where if certain conditions hold, the paper's conclusion (12-week GR appropriate) is vetoed.

Scenario 1: If SampEn parameter sensitivity analysis (Supplementary Figs S1-S3) shows sign flips for knee sagittal SampEn under m=3,r=0.1, then the main finding of "lower SampEn after retraining" is not robust → veto conclusion that GR improves regularity. Prediction: under alternative parameters, HRFS-GR vs HRFS-AN difference becomes non-significant (p>0.05 after Holm).

Scenario 2: If LyE early divergence window (110-157 samples) is extended to 2 gait cycles, the estimated slope λ changes sign or magnitude such that HRFS-GR LyE > HRFS-AN (lower stability after retraining) → veto stability claim. Prediction: λ_GR - λ_AN > 0 with 95% CI excluding 0.

Scenario 3: If LMM random-effects variance for participant approaches zero (singular fit) or if the 3 excluded non-converters had systematically higher baseline LyE, then the within-participant contrast HRFS-GR vs HRFS-AN is biased by survivorship → veto causal claim of retraining. Prediction: completers-only analysis overestimates stability gains by >30% relative to intent-to-treat imputation.

Need to ensure word count >=1000 across sections. Let's write substantial content. No betting lines. No toy equations.

Citations: Use [PAGE 822], [PAGE 823], etc. The source text has page numbers embedded. I will cite exact page numbers where quotes appear.

Let's draft carefully.

Word count target: THINK_TRACE alone needs >=400 words. Total across sections >=1000. I'll aim for ~1500-2000 words total to be safe.

Let's ensure LaTeX equations are proper.

Equation 1 (SampEn): \mathrm{SampEn}(m,r,N) = -\ln\left(\frac{A}{B}\right)

Equation 2 (LyE): \lambda = \frac{d \langle \ln d(t) \rangle}{dt}

Equation 3 (CV): CV = \frac{\sigma}{\mu}

Equation 4 (LMM): \text{Outcome} \sim \text{State} + (1|\text{participant})

VALR: average slope between 20% and 80% of linear portion.
VILR: maximum slope between 20% and 100%.

Units: SampEn dimensionless (nats), LyE in s^{-1} (since samples normalized by time at 200 Hz, but slope is per sample; to convert to s^{-1}, multiply by 200 Hz? Actually Rosenstein slope is per iteration/sample. If time axis in samples, λ is per sample; at 200 Hz, per second it's 200λ. But paper says slope over sample 1 to ~110-157 samples. I'll state units as "samples^{-1}" or convert to s^{-1} with note.)

Breakdown regimes:
- SampEn: breaks down when r < noise floor → B≈0, log undefined; or m too large → sparse template matches, A=0.
- LyE: breaks down when time series shorter than ~10× embedding dimension, or Theiler window exceeds available data, causing artificial inflation/deflation of divergence.
- LMM: singular if between-participant variance ≈ 0; with N=13 completers, power limited.
- Holm: family-wise error control per outcome; if many outcomes, power drops.

I will include verbatim quotes where appropriate with page numbers.

Let's write the sections.

THINK_TRACE: I'll write a dense multi-hop derivation.

Start: The paper compares three states. Discrete outcomes largely null (Table 1 p>0.05 for cadence, step length, contact time, vGRF). But foot strike angle differs: AN more negative (more anterior) than GR and HNRFS [PAGE 826]. VILR/VALR higher in GR than AN [PAGE 826, Table 1]. Nonlinear: AN has higher SampEn and LyE in knee sagittal, ankle sagittal, vertical COM [PAGE 828-829]. After 12 weeks, GR shows lower SampEn/LyE in those, closer to HNRFS [PAGE 829]. But residual differences: GR higher SampEn than HNRFS in knee sagittal and hip transverse; higher LyE in knee sagittal and hip coronal [PAGE 829].

Gray-zone audit: The paper interprets lower SampEn as "greater regularity" and lower LyE as "greater local dynamic stability," but explicitly cautions direction not inherently beneficial [PAGE 823]. Yet conclusion says "gradual 12-week gait-retraining programme may be an appropriate approach" [PAGE 822 abstract, PAGE 832 conclusion]. This is a normative leap from descriptive nonlinear dynamics to clinical appropriateness without injury/pain prospective data [PAGE 831-832]. Attrition: 19 enrolled, 2 withdrew (triceps surae soreness), 1 nonadherence, 3 failed conversion, leaving 13 [PAGE 827]. This is ~32% attrition; completers may be robust responders. The 12-week protocol uses minimalist shoes (Vibram, zero drop, MI 92%) [PAGE 824], confounding footwear and strike change—a limitation acknowledged indirectly but not fully resolved [PAGE 823 discusses Ekizos/Hollander footwear confound].

Multi-hop derivation:
1. Acute adoption → exaggerated anterior strike (more negative foot strike angle) as exploratory motor behavior [PAGE 826].
2. Exaggerated anterior strike → higher local divergence (LyE) and lower regularity (higher SampEn) in knee/COM [PAGE 828-829], consistent with Ekizos et al. 2017 [PAGE 830].
3. 12-week gradual exposure → motor pattern consolidates; SampEn ↓, LyE ↓ in sagittal knee and vertical COM [PAGE 829].
4. However, CV (discrete variability) changes do not fully track SampEn/LyE [PAGE 830-831], showing nonlinear metrics capture temporal organization not reducible to cycle-to-cycle variance.
5. Residual GR vs HNRFS differences suggest either incomplete retraining or distinct adaptation history (cross-sectional HNRFS not longitudinal endpoint) [PAGE 831].
6. Because no follow-up and no injury surveillance, "appropriate approach" is an extrapolation beyond supported inference.

Okay, write it out.

SOURCE_OPERATORS_AND_EQUATIONS: Include equations and units, page citations.

RETROCAUSAL_GENEALOGY: Lineage and traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: Veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Now ensure no betting lines. The topic is running biomechanics, no betting.

Check for toy equations: none invented. All from paper.

Let's write with enough depth. I need to make sure total word count >1000. I'll write generously.

I must use exact XML section tags. No markdown outside? Probably fine to just output the XML sections. I'll include them in order.

Let's begin composing.

Page citations: The text shows page numbers 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837. I'll cite as [PAGE 822], etc.

Verbatim quotes: I'll use short quotes with page markers.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central inferential arc moves from descriptive biomechanics to a normative clinical recommendation through three nonlinear dynamics measures: SampEn, LyE, and CV. First, the discrete and spatiotemporal layer is largely null: cadence, step length, contact time, and peak vGRF show no significant State effect (all p > 0.05; Table 1, [PAGE 826]). The only robust force-related divergence is that VILR and VALR are higher in HRFS-GR than HRFS-AN (MD = 17.32 BW/s and 14.93 BW/s, respectively; [PAGE 826, Table 1]), despite HRFS-AN exhibiting the more anterior foot strike angle (mean −6.23° vs −1.71°; [PAGE 826]). This is counterintuitive under the common heuristic that a more anterior strike automatically lowers loading rates; here the acutely adopted exaggerated anterior pattern paradoxically produced lower loading rates than the retrained pattern, which hovered closer to HNRFS.

Second, the nonlinear layer differentiates the states where conventional mechanics do not. HRFS-AN shows higher SampEn (less regular, less predictable) in sagittal-plane knee and ankle and vertical COM, plus higher LyE (lower local dynamic stability) in sagittal-plane knee and vertical COM, compared with both HRFS-GR and HNRFS ([PAGE 828–829]). The direction is interpretable through the motor-learning frame Krakauer et al. (2019) and Wood et al. (2024): acute adoption of an unfamiliar strike is exploratory, producing a "more pronounced and unfamiliar strike strategy" that elevates local trajectory divergence ([PAGE 830]). Ekizos et al. (2017) reported exactly this—reduced local dynamic stability during acute shod-to-barefoot transition with a more anterior foot strike—while noting the effect faded after a longer gradual transition ([PAGE 830]). The present 12-week retraining compresses that timeline: SampEn and LyE decline in HRFS-GR relative to HRFS-AN, approximating HNRFS in selected knee and COM trajectories ([PAGE 829]).

The gray zones are substantial. (1) Parameter sensitivity: SampEn is computed with m = 2, r = 0.25 SD on N = 2000 points ([PAGE 825]), but alternative combinations (m = 2/3, r = 0.10/0.25 SD) are only shown in supplementary figures; if sign flips occur under m = 3, r = 0.10, the claim of "greater regularity after retraining" is not robust ([PAGE 825]). (2) LyE estimation depends on state-space reconstruction: time delay from average mutual information, embedding dimension via false-nearest-neighbours (≤1% false neighbours), Theiler window from mean signal period, and divergence slope over samples 1–157 ([PAGE 825]). Short time series or noise near the reconstruction floor can bias λ upward or downward without reflecting true stability. (3) Survivorship: 19 HRFS enrolled; 2 withdrew for triceps surae soreness, 1 for nonadherence, 3 failed to convert to NRFS, leaving n = 13 completers ([PAGE 827]). This ~32% attrition means the HRFS-GR vs HRFS-AN within-participant contrast is conditioned on successful adaptation; adverse responders are excluded, biasing the estimate of retraining benefit upward. (4) The normative leap: the authors explicitly state SampEn direction is "not inherently beneficial or detrimental" ([PAGE 823]) and that injury incidence was not assessed ([PAGE 831]), yet the conclusion labels a 12-week program "an appropriate approach" ([PAGE 822, 832]). This is an extrapolation from nonlinear descriptives to clinical prescription without prospective symptom or injury surveillance.

Multi-hop derivation: acute anterior strike → exploratory motor variability → elevated SampEn/LyE in knee/COM → 12-week structured exposure → consolidation into lower SampEn/LyE trajectories → partial resemblance to HNRFS. But because CV (discrete cycle-to-cycle consistency) does not fully track SampEn/LyE ([PAGE 830–831]), nonlinear metrics are capturing temporal organization invisible to traditional variability, and residual hip/knee differences between HRFS-GR and HNRFS persist ([PAGE 829]). Therefore the inference that retraining "normalizes" dynamics is supported only for a subset of trajectories and only relative to the acute state, not absolutely relative to habitual NRFS.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The study applies three formal operators to continuous time series and discrete gait events.

(1) Sample entropy. For a time series of length N, with embedding dimension m and tolerance r as a proportion of signal SD,
\[
\mathrm{SampEn}(m,r,N) = -\ln\left(\frac{A}{B}\right)
\]
where A is the count of vector pairs of length m+1 within tolerance r, and B is the count of vector pairs of length m within tolerance r ([PAGE 825], Eq. 1). The primary presentation uses m = 2 and r = 0.25 SD on N = 2000 points (10 s at 200 Hz). Units: dimensionless (nats). Higher SampEn = less repetitive, less predictable; the authors explicitly warn this direction is not inherently beneficial ([PAGE 823]).

(2) Largest Lyapunov exponent. After state-space reconstruction with time delay from the first local minimum of average mutual information and embedding dimension from false-nearest-neighbours (≤1% false neighbours, relative threshold 10, absolute threshold 2), the Theiler window equals the mean signal period from Welch's PSD. Neighboring trajectories separated by more than this window are tracked; mean logarithmic divergence is computed over approximately 1.5 gait cycles, and λ is the least-squares slope over the early divergence window from sample 1 to approximately one gait cycle (110–157 samples, i.e., 0.55–0.785 s at 200 Hz):
\[
\lambda = \frac{d\langle \ln d(t) \rangle}{dt}
\]
where d(t) is the separation between neighboring trajectories in reconstructed state space ([PAGE 825]). Units: samples⁻¹ (convertible to s⁻¹ by multiplication by 200 Hz if time is expressed in seconds). Higher λ = lower local dynamic stability ([PAGE 823]).

(3) Coefficient of variation for discrete joint angles across ten consecutive gait cycles:
\[
\mathrm{CV} = \frac{\sigma}{\mu}
\]
where σ is the standard deviation and μ the mean across cycles ([PAGE 825]). Units: dimensionless.

(4) Mixed-effects model. For each outcome:
\[
\text{Outcome} \sim \text{State} + (1|\text{participant})
\]
with State ∈ {HRFS-AN, HRFS-GR, HNRFS} as a fixed effect and participant as a random intercept ([PAGE 825]). Holm correction is applied within each outcome across the three pairwise contrasts ([PAGE 825]).

(5) Loading rates. VALR is the average slope between 20% and 80% of the most linear portion of vGRF from initial contact to the point of interest (POI); VILR is the maximum slope between 20% and 100% of the vGRF–time curve over the same interval. POI is the point immediately before vGRF slope decreases below 15 BW/s with vGRF > body weight ([PAGE 824]). Units: BW/s.

Breakdown and singularity regimes: SampEn breaks down when r falls below the noise floor (B → 0, logarithm undefined) or when m is too large for N = 2000 (sparse template matches, A = 0) ([PAGE 825]). LyE breaks down when the time series is shorter than roughly ten times the embedding dimension, when the Theiler window consumes most of the available data, or when the divergence curve lacks a clear linear region in the 110–157 sample window ([PAGE 825]). The LMM becomes singular if between-participant variance approaches zero; with only n = 13 HRFS completers after attrition ([PAGE 827]), power for detecting State effects is constrained despite the simulation-based a priori estimate targeting dz = 0.962 requiring 11 participants ([PAGE 823]). Sampling rate 200 Hz; treadmill speed 9 km·h⁻¹ (2.5 m·s⁻¹); kinematic low-pass filter fourth-order Butterworth at 7 Hz; vGRF filtered at 50 Hz; initial contact at vGRF > 30 N; middle 20 s (5–25 s) of each 30 s trial retained ([PAGE 824]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces from evolutionary barefoot running (Bramble & Lieberman, 2004; Lieberman et al., 2010) through the observation that roughly 75% of shod runners are rearfoot strikers and that RFS is associated with a pronounced impact peak and impact-related injuries (Patoz et al., 2019) ([PAGE 822–823]). The intervention lineage includes gait retraining over 4–12 weeks under barefoot or minimalist conditions (Deng et al., 2024; Warne et al., 2014; Yang et al., 2020; Zhang et al., 2021), which can shift foot-strike angle, vertical loading rates, plantar pressure, joint kinetics, and muscle–tendon mechanics ([PAGE 823]). Acutely, HRFS can reproduce some HNRFS joint kinematics (Valenzuela et al., 2015; Williams et al., 2000), but adaptations are outcome-specific ([PAGE 823]). The nonlinear lineage derives from SampEn (Richman & Moorman, 2000), LyE (Rosenstein et al., 1993; Dingwell et al., 2001), and the distinction between temporal regularity and local dynamic stability (Stergiou & Decker, 2011; Crowley et al., 2021; Strongman & Morrison, 2021) ([PAGE 823]).

Key multi-week traps: Ekizos et al. (2017) found acute shod-to-barefoot transition reduced local dynamic stability, but could not separate footwear from foot-strike effects; Hollander et al. (2021) found lower stability in novice barefoot runners with no stability change over 8 weeks ([PAGE 823]). The present study attempts to close this gap by comparing acute adoption, 12-week retraining, and habitual NRFS within the same footwear (Nike Pegasus 34 for testing; Vibram FiveFingers only during training) ([PAGE 824]). However, the 12-week schedule itself is a trap: minimalist shoe mileage rises 10% per week to 100% by Week 11, total weekly mileage is held constant, and foot–ankle strengthening is superimposed ([PAGE 824]). Because footwear and strike change are confounded during training, and because there is no post-intervention follow-up ([PAGE 832]), the durability of the observed SampEn/LyE shifts is unknown. Attrition (calf/foot pain withdrawals) further means the observed "successful" 12-week trajectory may represent a survivor cohort rather than a generalizable dose-response curve. Historical precedent (Warne et al., 2014; Yang et al., 2020; Zhang et al., 2021) shows 4–12 week windows can produce acute biomechanical changes, but none of those studies jointly assessed SampEn and LyE across acute, retrained, and habitual states ([PAGE 823]).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when an HRFS runner is placed under acute task pressure (treadmill, instructed NRFS, novel foot strike), the motor system regresses to an exploratory, exaggerated strategy—here a more anterior foot strike than both HRFS-GR and HNRFS ([PAGE 826]). This regression elevates SampEn and LyE in knee and COM trajectories ([PAGE 828–829]), consistent with a system searching a coordination landscape it has not yet stabilized (Krakauer et al., 2019; Wood et al., 2024). Under fatigue, time pressure, or novel footwear, the same runner would likely regress further, potentially abandoning NRFS or oscillating between strike patterns.

Counter-trap: a practitioner observing lower SampEn and LyE after 12 weeks might conclude the movement is "more stable" and therefore "better," and might accelerate retraining or prescribe the protocol universally. This is a trap because the authors state entropy direction is not inherently beneficial ([PAGE 823]), higher SampEn may reflect adaptability rather than pathology (Bonacci et al., 2020; [PAGE 831]), and higher LyE alone does not establish injury risk ([PAGE 831]). Moreover, HRFS-GR still differs from HNRFS in knee sagittal SampEn and LyE and coronal hip LyE ([PAGE 829]), so "closer to habitual" is not synonymous with "optimal" or "safe."

Clock: the intervention clock is fixed at 12 weeks, with no follow-up ([PAGE 832]). Biological adaptation of the triceps surae and Achilles tendon may lag the kinematic consolidation observed in joint angles; indeed, two participants withdrew for triceps surae soreness during early retraining ([PAGE 827]). The clock stops at Week 12, yet the retention of nonlinear dynamics after removal of external guidance (minimalist shoes, prescribed mileage progression) is unmeasured. A recursive theory of mind therefore predicts that the acute state is a high-variability exploratory attractor, the retrained state is a partially consolidated but context-dependent attractor, and the true end-state—after detraining, fatigue, or return to conventional shoes—remains outside the observed clock window.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: testing occurs on an instrumented treadmill at 9 km·h⁻¹ indoors, so weather is a null veto; temperature, wind, and surface variability are excluded by design ([PAGE 824]). The physical veto instead comes from loading rates: HRFS-AN (more acute anterior strike) produced lower VILR and VALR than HRFS-GR ([PAGE 826, Table 1]), contradicting the assumption that a more anterior strike is always protective. Peak vGRF did not differ among states ([PAGE 826]), so there is no evidence of elevated impact loading in either modified state relative to HNRFS.

Biomechanical layer veto: discrete joint angles and COM ROM were mostly similar across states ([PAGE 826, Table 2]), but selected CV outcomes dropped after retraining (e.g., knee sagittal ROM CV, MD = −0.14, p = 0.002; ankle sagittal max CV lower in both GR and HNRFS vs AN, MD = −0.35; [PAGE 827, Table 3]). Crucially, CV changes do not mirror SampEn/LyE changes ([PAGE 830–831]): ankle sagittal SampEn differed without corresponding LyE change; transverse hip SampEn was higher in HRFS-GR than HRFS-AN ([PAGE 829]). This layer veto prevents reducing "movement regularity" to a single scalar; regularity and stability are joint- and plane-specific.

Clinical layer veto: injury incidence, pain, tissue loading, and performance were not prospectively assessed ([PAGE 831]). Therefore the inference that a 12-week program is "an appropriate approach" ([PAGE 822, 832]) is not veto-proven. The only adverse signals are attrition (calf/foot pain; [PAGE 827]) and residual nonlinear differences between HRFS-GR and HNRFS ([PAGE 829]). Without prospective symptom surveillance, the biomechanical veto stands: the data support feasibility of acute NRFS adoption and partial nonlinear consolidation after 12 weeks, but do not establish clinical superiority or safety relative to habitual RFS or HNRFS.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — SampEn parameter non-robustness. If the supplementary analyses (m = 3, r = 0.10 SD; Supplementary Figures S1–S2; [PAGE 825, 835–836]) show that the HRFS-GR vs HRFS-AN difference in sagittal-plane knee SampEn reverses sign or becomes non-significant (Holm-adjusted p > 0.05), then the claim of "greater regularity after retraining" is an artifact of the m = 2, r = 0.25 SD choice. Verifiable prediction: under m = 3, r = 0.10, the estimated mean difference for knee sagittal SampEn (GR − AN) will fall within a 95% CI that includes zero, and the overall State effect p-value will exceed 0.05. Veto: retraining regularity claim invalidated.

Scenario 2 — LyE reconstruction sensitivity. If the early divergence window is extended beyond one gait cycle (e.g., to 2 cycles, ~220–314 samples at 200 Hz) or the Theiler window is recomputed using a different spectral peak, and the estimated λ for sagittal-plane knee in HRFS-GR becomes greater than in HRFS-AN (λ_GR − λ_AN > 0 with 95% CI excluding 0), then lower LyE in the retrained state is not reproducible. Verifiable prediction: re-computed λ_GR − λ_AN > 0.10 s⁻¹-equivalent units. Veto: local dynamic stability claim invalidated; retraining may reduce, not improve, stability in this trajectory.

Scenario 3 — Survivorship/attrition bias. If the 3 participants who failed to convert to NRFS and the 2 who withdrew for triceps surae soreness ([PAGE 827]) had baseline HRFS-AN LyE or SampEn values systematically outside the completer range (e.g., >1 SD above the completer mean), then the within-participant HRFS-GR vs HRFS-AN contrast is conditioned on successful adaptation. Verifiable prediction: an intent-to-treat imputation (baseline carried forward for non-completers) reduces the estimated GR − AN difference in vertical COM LyE by more than 30% relative to the completers-only analysis (MD = −0.14; [PAGE 829]). Veto: causal claim that the 12-week program produced stability gains is invalidated; observed effects may reflect selective retention of robust responders.
</RLVR_COUNTERFACTUAL_VETOES>