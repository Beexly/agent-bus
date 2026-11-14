---
source: "2026 - Contrast Heat Cold Versus Thermoneutral Showering in Trained Combat Sport Athletes A Randomized Field Trial of Recovery Outcomes - Hagner-Derengowska et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/In Press/2026"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4067
---

<NATIVE_REASONING>
The user wants me to analyze a sports science research paper about contrast heat-cold showering vs thermoneutral showering in trained combat sport athletes. I need to produce a response with specific XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- >= 1,000-word depth across these exact XML sections.
- Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.

Let me structure this carefully.

First, I need to deeply analyze the paper. Key details from the source text:

- Study: Hagner-Derengowska et al. 2026, JSSM 25, 675-690
- DOI: 10.52082/jssm.2026.675
- 60 combat sport athletes (49 men, 11 women), BJJ n=18, kickboxing n=15, karate n=14, MMA n=13
- Tier 3-4 athletes per McKay Framework, ≥3 years experience, ≥3 sessions/week
- Randomized to contrast showers (10 min alternating warm 38-40°C and cold 13-15°C, 5 cycles of 1:1 min, warm start/cold end) vs thermoneutral (10 min, 32-34°C) after training for 4 weeks
- Per-protocol ≥75% compliance: n=57 (contrast n=28, control n=29)
- ITT sensitivity: n=60
- Time points: T0 baseline, T1 post-intervention, T2 2-week wash-out
- Outcomes: TQR, morning salivary cortisol (2 mornings averaged), resting HRV, PORH
- Primary results T0-T1 (ΔΔ contrast minus control):
  - Resting HR: ΔΔ -2.10 bpm, 95% CI -2.24 to -1.96, g -0.65, p<0.001
  - lnRMSSD: ΔΔ 0.123 log units, 95% CI 0.108 to 0.137, g 0.74, p<0.001
  - RMSSD: ΔΔ 7.97 ms, CI 6.91-9.02, g 0.75
  - SDNN: ΔΔ 10.48 ms, CI 6.47-14.49, g 0.63
  - TQR: ΔΔ 0.61 points, CI 0.27-0.95, g 0.80, p<0.001
- T2-T0: all p>0.05, effects not maintained
- Cortisol: RRR 1.05 (CI 0.99-1.11), p=0.132 at T1-T0; RRR 1.00 (CI 0.93-1.07), p=0.962 at T2-T0
- PORH: no between-group differences at T1 or T2 (all p>0.05)
- Temperatures recorded: warm 38.6 ± 0.9°C, cold 14.1 ± 0.7°C, thermoneutral 33.3 ± 1.1°C
- AOPmax mean 177.3 ± 15.9 mmHg
- PORH variability: 9.1% RF, 8.2% RHmax, 7.4% TTP, 9.9% TR
- Cortisol assay: IBL ELISA, sensitivity 0.138 nmol/L, intra-assay CV 4.3%, inter-assay CV 13.2%
- Training load: sRPE ~2289 vs 2314 AU/week, no difference
- Ambient: 21-23°C, RH 40-60%
- HRV: Polar H10, Kubios 4.2.0, 5 min supine, artifact correction >5% excluded
- PORH: LDF Perimed, great toe pulp, cuff proximal upper arm, 5 min occlusion
- Women: menstrual cycle and hormonal contraceptive not standardized
- No blinding of participants, assessors blinded
- Active comparator, not no-treatment control
- ISRCTN15418049 (abstract) / ISRCTN49499065 (methods page 3 - note discrepancy, interesting gray zone)

Now I need to write the XML sections with sufficient depth (>=1000 words total across sections).

Section 1: THINK_TRACE (>=400 words). Deep multi-hop derivation & gray-zone audit.
- Discuss the causal chain: thermal stimulus -> autonomic response -> perceptual recovery -> persistence after washout
- Gray zones: participant blinding impossible, expectancy effects (Broatch et al. 2014 cited), active comparator vs no-treatment, sex imbalance small female subsample, menstrual cycle not standardized, cortisol inter-assay CV 13.2% high, PORH cutaneous only not muscle, single-site LDF, no skin temperature monitoring during PORH (explicit limitation), training load not manipulated but monitored, self-monitored shower timing/temperature switching, per-protocol vs ITT divergence minimal, trial registration discrepancy (ISRCTN15418049 abstract vs ISRCTN49499065 methods page 3), field conditions variability, washout only 2 weeks may be insufficient for vascular remodeling
- Multi-hop: TQR improvement may be expectancy-mediated rather than physiological; HRV improvement transient; cortisol null due to circadian dominance and assay variability; PORH null because cutaneous not muscle and stimulus too brief/low-dose
- Singularity/breakdown: if expectancy dominates TQR, the ΔΔ 0.61 is not a physiological recovery signal but a context effect; if washout < vascular adaptation timescale, T2 null cannot reject persistent microvascular adaptation

Section 2: SOURCE_OPERATORS_AND_EQUATIONS
- Formal LaTeX equations for ΔΔ, Hedges' g, RRR, mixed-effects model, compliance threshold
- Units: bpm, log units, ms, PU, nmol/L, mmHg, °C, min, s, a.u.
- Page citations exact [PAGE N]
- Breakdown regimes: p<0.001 vs p>0.05, CI exclusion of zero, assay LOD, artifact correction >5% exclusion
- Exact quotes where relevant

Section 3: RETROCAUSAL_GENEALOGY
- Historical lineage: Wilcock et al. 2006 (immersion vs shower distinction), Bieuzen et al. 2013, Higgins et al. 2017, Shadgan et al. 2015/2018 (contrast baths NIRS), Trybulski et al. 2025 (MMA forearm biomechanics), Torres-Ronda & Schelling 2014 (water properties), Laborde et al. 2024 (HRV recovery techniques), Kenttä & Hassmén 1998 (TQR), Malik et al. 1996 (HRV standards), Roustit et al. 2010a/b (PORH reproducibility)
- Multi-week traps: 4-week intervention too short for durable adaptation; 2-week washout insufficient for vascular remodeling; repeated exposure may lead to habituation (cold exposure neuroendocrine habituation); effects decay immediately after cessation (transient homeostatic modulation vs training-like adaptation)

Section 4: RECURSIVE_THEORY_OF_MIND
- Crisis habit regression: athletes under high load may regress to familiar recovery habits; contrast shower novelty wears off
- Counter-trap: thermoneutral control also improved over time (PORH both groups), suggesting time/training effects rather than specific contrast effect; the "active comparator" problem means control isn't inert
- Clock: T0-T1 effects present, T2-T0 absent; the clock of intervention cessation reveals transient nature; circadian cortisol sampling window (07:00-09:00, 30 min post-wake) attempts to control diurnal rhythm but menstrual cycle unstandardized adds noise for women
- Recursive ToM: coach/athlete expectation of benefit -> TQR inflation; assessor blinding reduces detection bias but participant unblinding sustains placebo; if athletes believe contrast showers work, they report better recovery independent of physiology

Section 5: CROSS_LAYER_VETO_ADJUDICATION
- Physical layer: shower vs immersion hydrostatic pressure difference (Torres-Ronda & Schelling 2014; Wilcock 2006), surface thermal stimulus only, no whole-limb immersion effects
- Biomechanical layer: Trybulski 2025 forearm mechanics acute changes (stiffness/elasticity, pressure pain threshold, isometric force) but not measured here; no performance outcomes, no neuromuscular adaptation
- Weather/environmental layer: ambient 21-23°C, RH 40-60%, skin temperature not directly monitored during PORH (explicit gap), cutaneous LDF sensitive to ambient temp/psychophysiological state (Roustit 2010a)
- Veto proof: if any layer vetoes, conclusion cannot claim durable multisystem adaptation. Here: endocrine layer veto (cortisol null), microvascular layer veto (PORH null), persistence layer veto (washout null), blinding layer veto (expectancy on TQR), comparator layer veto (active control not placebo/no-treatment)

Section 6: RLVR_COUNTERFACTUAL_VETOES
Three verifiable scenarios with predictions:
1. Veto: Participant unblinding + expectancy. Prediction: TQR ΔΔ would shrink toward null if a sham/expectancy-matched condition were added; HRV might persist if physiological but likely attenuate. Verifiable by adding a blinded sham thermal protocol.
2. Veto: Washout duration insufficient / cutaneous vs muscle compartment. Prediction: extending washout to 4-6 weeks or measuring intramuscular NIRS (Shadgan 2018) might reveal delayed microvascular divergence not captured by toe PORH. Verifiable by longitudinal PORH + NIRS at T3/T4.
3. Veto: Sex/menstrual confounding. Prediction: stratifying by sex and menstrual phase would reveal effect heterogeneity; the pooled n=11 women cannot support sex-specific claims. Verifiable by powered sex-stratified RCT.

Need to ensure >=1000 words total. Let me draft carefully, making sure to use LaTeX formatting properly, cite pages, and avoid betting language entirely.

Let me write this out.
</NATIVE_REASONING>

<THINK_TRACE>
The paper reports a four-week, randomized, parallel field trial in 60 trained combat-sport athletes comparing post-training contrast heat-cold showering (10 min; five 1-min cycles alternating 38–40 °C warm and 13–15 °C cold, warm start/cold end) against an active thermoneutral comparator (10 min, 32–34 °C), with assessments at baseline (T0), post-intervention (T1), and after a 2-week wash-out (T2). Per-protocol compliance was ≥75%, leaving n=57 (contrast n=28; thermoneutral n=29); intention-to-treat retained n=60. The primary estimand is the between-group difference in change (ΔΔ = [contrast_T1 − contrast_T0] − [control_T1 − control_T0]) for resting HR, lnRMSSD, RMSSD, SDNN, TQR, morning salivary cortisol, and PORH-derived microvascular reactivity. The observed T0→T1 pattern is statistically sharp for autonomic and perceptual endpoints: resting HR ΔΔ −2.10 bpm (95% CI −2.24 to −1.96; Hedges g −0.65; p<0.001) and lnRMSSD ΔΔ 0.123 log units (95% CI 0.108 to 0.137; g 0.74; p<0.001) [PAGE 1][PAGE 9], with parallel RMSSD and SDNN gains and TQR ΔΔ 0.61 points (95% CI 0.27 to 0.95; g 0.80; p<0.001) [PAGE 1][PAGE 9]. Crucially, every T2→T0 contrast collapses to null (all p>0.05) [PAGE 1], while cortisol (RRR 1.05, p=0.132 at T1; RRR 1.00, p=0.962 at T2) and all PORH metrics (peak, resting flow, TTP, recovery time; all p>0.05) remain between-group null at both T1 and T2 [PAGE 1][PAGE 10][PAGE 11].

The multi-hop derivation proceeds as follows. Hop 1: the thermal stimulus is a surface exposure, not immersion; the authors explicitly note showering lacks hydrostatic pressure and whole-limb cooling characteristics of water immersion, so findings transfer only at the level of shared alternating thermal exposure, not fluid-shift physiology [PAGE 2]. Hop 2: cutaneous laser-Doppler PORH measures skin microvascular perfusion, not muscle oxygenation or brachial endothelial function [PAGE 2][PAGE 13]; thus a null PORH result cannot veto intramuscular vascular effects, but it does veto the claim that this protocol improved the measured cutaneous reactivity endpoint. Hop 3: cortisol is sampled twice each morning (07:00–09:00, ~30 min post-wake) and averaged to suppress circadian/day-to-day variance, yet the assay carries an inter-assay CV of 13.2% [PAGE 6] and morning basal cortisol is dominated by circadian regulation, sleep, and psychosocial load rather than brief post-exercise thermal manipulation [PAGE 1][PAGE 13]; the endocrine domain therefore lacks sensitivity to detect small intervention effects. Hop 4: TQR is unblinded and expectancy-sensitive; placebo work cited by the authors attributes much perceived hydrotherapy benefit to contextual factors [PAGE 12], so the TQR ΔΔ 0.61 may partly reflect expectancy rather than physiology.

Gray-zone audit. (i) Registration discrepancy: the abstract lists ISRCTN15418049 [PAGE 1], while Methods lists ISRCTN49499065 [PAGE 3]; this internal inconsistency weakens audit trail integrity. (ii) Participant blinding was infeasible due to the nature of the intervention [PAGE 4], creating an unblocked expectancy pathway into TQR and possibly into HRV via autonomic arousal. (iii) The comparator is active thermoneutral showering, not no-treatment [PAGE 3], so the trial estimates a relative, not absolute, effect. (iv) Only 11 women were enrolled, menstrual-cycle phase and hormonal contraceptive status were not standardized [PAGE 3][PAGE 13], and sex was not modeled as an effect modifier due to sparse cells [PAGE 13]; pooled estimates may mask sex-specific responses. (v) Skin temperature was not directly monitored during PORH [PAGE 6], despite environmental standardization at 21–23 °C and 40–60% RH [PAGE 5], leaving thermal-site variability unquantified. (vi) Shower timing and switching were self-monitored after instruction [PAGE 5]; spot checks confirmed temperature ranges but phase adherence relied on athlete self-report. (vii) The 2-week wash-out is explicitly described as appropriate only for short-term persistence and potentially insufficient for slower vascular remodeling [PAGE 13]; therefore T2 null cannot reject durable microvascular adaptation under longer stimulus or observation windows. (viii) No performance, neuromuscular, catecholamine, baroreflex, or flow-mediated dilation outcomes were collected [PAGE 13], so no performance transfer can be inferred.

Singularity/breakdown regimes: the causal claim of “integrated recovery” breaks down if (a) expectancy accounts for TQR, (b) the 2-week wash-out is shorter than the vascular or endocrine adaptation timescale, or (c) cutaneous PORH is physiologically non-exchangeable with combat-relevant muscle perfusion. Under any of these, the only defensible conclusion is transient autonomic and perceptual modulation during active exposure, not persistent multisystem recovery adaptation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal estimand and statistics. Let group index \(G \in \{C, T\}\) where \(C\) = contrast heat-cold and \(T\) = thermoneutral control, and time \(t \in \{0,1,2\}\). The primary linear mixed-effects model for each continuous outcome \(Y\) is:

\[
Y_{ijt} = \beta_0 + \beta_1 G_i + \beta_2 Time_t + \beta_3 (G_i \times Time_t) + \gamma Sex_i + \delta Club_i + b_i + \epsilon_{ijt},
\quad b_i \sim \mathcal{N}(0,\sigma_b^2),\quad \epsilon_{ijt} \sim \mathcal{N}(0,\sigma^2),
\]

with participant-level random intercept \(b_i\) to capture within-subject dependence; sex and club are prespecified covariates where estimable [PAGE 7]. The between-group difference in change is the interaction contrast

\[
\Delta\Delta_{t} = (\bar{Y}_{C,t} - \bar{Y}_{C,0}) - (\bar{Y}_{T,t} - \bar{Y}_{T,0}),
\]

reported with 95% confidence intervals and two-sided p-values; significance threshold \(p<0.001\) applied when applicable [PAGE 7]. Standardized effect magnitude uses Hedges’ \(g\) for pretest-posttest control designs, standardized by pooled baseline SD, with participant-level bootstrap CIs [PAGE 7]. For cortisol, outcomes were log-transformed when needed and inference reported as a ratio of ratios (RRR) [PAGE 7][PAGE 11].

Per-protocol inclusion threshold: adherence \(A_i = \frac{\text{completed assigned showers}}{\text{eligible post-training showers}} \times 100\%\); retain if \(A_i \ge 75\%\) [PAGE 4][PAGE 5]. Three participants fell below threshold (contrast n=2; control n=1), yielding per-protocol \(n=57\) [PAGE 7].

Units and measurement operators:
- Resting HR: beats per minute (bpm), Polar H10 telemetry, 5-min supine recording, Kubios HRV Scientific 4.2.0; artifact correction >5% triggers exclusion/repeat [PAGE 5].
- lnRMSSD: natural log units; RMSSD and SDNN in milliseconds (ms) [PAGE 5][PAGE 9].
- TQR: arbitrary units on a 6–20 scale (6 = incomplete recovery, 20 = complete recovery) [PAGE 6][PAGE 7].
- Morning salivary cortisol: nmol/L, competitive ELISA (IBL RE52611); limit of quantitation 0.138 nmol/L; intra-assay CV 4.3%, inter-assay CV 13.2%; duplicate analysis, same plate per participant across time points [PAGE 6].
- PORH: perfusion units (PU), laser Doppler flowmetry (Perimed) on great-toe pulp; cuff proximal upper arm, individualized AOPmax (mean 177.3 ± 15.9 mmHg), 5-min occlusion, rapid deflation [PAGE 5][PAGE 6]. Extracted variables: resting flow RF (PU), biological zero BZ, peak hyperemia RHmax/Peak (PU), time to peak TTP (s), recovery time TR (min) [PAGE 6]. Inter-day variability: RF 9.1%, RHmax 8.2%, TTP 7.4%, TR 9.9% [PAGE 6].
- Ambient testing chamber: 21–23 °C, relative humidity 40–60% [PAGE 5]. Water temperatures verified twice weekly: warm 38.6 ± 0.9 °C, cold 14.1 ± 0.7 °C, thermoneutral 33.3 ± 1.1 °C [PAGE 4].

Exact verbatim anchors: “The control condition consisted of thermoneutral showering and should therefore be interpreted as an active comparator rather than a no-treatment control” [PAGE 3]. “laser Doppler PORH primarily quantifies cutaneous microvascular perfusion at the measurement site, it should not be interpreted as a direct measure of muscle oxygenation or systemic cardiovascular function” [PAGE 2]. “Because this study did not measure sport performance, neuromuscular adaptation, or competition outcomes, no conclusion can be made about performance transfer” [PAGE 13].

Breakdown/singularity conditions: (1) If \(\Delta\Delta_{T2} \approx 0\) with CI containing zero for autonomic/TQR, persistence is rejected at the studied wash-out horizon; all T2 contrasts satisfy this (p>0.05) [PAGE 1][PAGE 9][PAGE 10]. (2) Cortisol RRR CI crossing 1.0 (e.g., 0.99–1.11 at T1) constitutes an endocrine null under the model [PAGE 11]. (3) PORH CIs containing zero for all four metrics at both contrasts constitute a microvascular null for cutaneous reactivity [PAGE 10][PAGE 11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The study sits inside a multi-decade lineage of hydrotherapy recovery research in which immersion and shower protocols are frequently conflated despite distinct physics. Wilcock et al. (2006) characterized physiological responses to water immersion, emphasizing hydrostatic pressure and greater body-surface contact as mechanisms absent in showering; Torres-Ronda and Schelling i del Alcázar (2014) formalized the distinction between immersion and surface thermal stimulus [PAGE 2]. Bieuzen et al. (2013) and Higgins et al. (2017) meta-analyzed contrast water therapy for exercise-induced muscle damage and team-sport recovery, respectively, but both note heterogeneity and that most evidence concerns immersion rather than showering [PAGE 2]. Shadgan et al. (2015; 2018) extended this to contrast baths measured by near-infrared spectroscopy, showing subcutaneous and intramuscular hemodynamic effects are compartment-specific; the present authors explicitly limit extrapolation from immersion to showering to “shared alternating thermal exposure and plausible thermoregulatory/autonomic stimulation” [PAGE 2]. Trybulski et al. (2025), a combat-sport-specific predecessor in the same author network, found acute shifts in forearm muscle mechanics (stiffness/elasticity, pressure pain threshold, maximal isometric force) within ~5–60 minutes after partial contrast-water immersion in MMA athletes [PAGE 2]; that evidence motivated the shower trial but does not establish longer-term multi-system adaptation [PAGE 2].

Autonomic monitoring lineage: Malik et al. (1996) established HRV standards; Esco and Flatt (2014) validated ultra-short-term vagal indices in athletes; Laborde et al. (2024) meta-analyzed post-exercise recovery techniques and vagally mediated HRV [PAGE 2][PAGE 5][PAGE 12]. Endocrine lineage: Cevada et al. (2014) and Bonato et al. (2017) document salivary cortisol’s sensitivity to circadian timing, sleep, and psychosocial stress, explaining the weak intervention signal here [PAGE 2][PAGE 13]. Microvascular lineage: Yvonne-Tee et al. (2005), Roustit et al. (2010a; 2010b), and Lenasi and Štrucl (2010) established laser-Doppler PORH reproducibility and sensitivity to training status, while Fabregate-Fuente et al. (2019) cautioned that cutaneous LDF is not muscle oxygenation [PAGE 2][PAGE 6].

Multi-week traps. Trap 1: dose–duration mismatch. Four weeks of post-training showers (up to five exposures/week) is a low-dose stimulus relative to protocols designed to induce cardiovascular or vascular remodeling; the authors acknowledge the wash-out may be too short to capture slower vascular adaptation [PAGE 13]. Trap 2: habituation. Repeated cold exposure can provoke catecholaminergic activation initially, followed by neuroendocrine habituation; morning basal cortisol, being strongly circadian-governed, may be insensitive to modest repeated thermal manipulation unless exposure is substantial or timing targeted [PAGE 13]. Trap 3: decay-on-cessation. The T1 gains in HR and lnRMSSD vanish by T2 (ΔΔ ≈ 0, p>0.05), consistent with the concept that brief post-exercise modalities modulate acute homeostatic state rather than inducing durable training-like adaptation (Higgins et al., 2017) [PAGE 12]. Trap 4: active-comparator drift. The thermoneutral group also showed within-group PORH improvement over time without between-group separation, suggesting time- or training-related influences dominate the microvascular domain [PAGE 11][PAGE 13]. These traps imply the historical narrative of contrast water therapy as a durable recovery adaptation is not supported by this shower-specific dataset; at most, the lineage supports short-term autonomic/perceptual modulation during active exposure.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. Under dense combat-sport training blocks (grip fighting, clinch, sparring, weight management), athletes develop idiosyncratic recovery habits. Introducing a novel contrast-shower protocol can temporarily displace these habits, but once the protocol ends, athletes regress to baseline recovery behaviors; this behavioral regression aligns with the observed wash-out extinction of HRV and TQR effects [PAGE 1][PAGE 12]. Because participants could not be blinded and knew their thermal assignment, the contrast group may have entered T1 testing with an expectancy of benefit; Broatch et al. (2014) placebo work cited by the authors indicates a meaningful portion of perceived hydrotherapy benefit is expectancy-driven [PAGE 12]. Assessors were blinded [PAGE 4], which protects physiological endpoints from detection bias, but participant unblinding leaves an open pathway whereby belief influences TQR and possibly autonomic state via arousal.

Counter-trap. The active thermoneutral comparator is itself a recovery ritual: 10 minutes of warm showering after training provides a somatic “cool-down” context that may independently raise perceived recovery. Indeed, control TQR rose from 13.4 ± 0.5 to 15.9 ± 0.5 at T1 [PAGE 9], and PORH improved over time in both groups without between-group separation [PAGE 11]. Therefore the observed contrast advantage is relative to an active recovery routine, not to absence of recovery. A counter-trap interpretation is that the thermoneutral shower already captures much of the nonspecific recovery context (warmth, time, ritual), leaving only a small incremental contrast effect—large enough to register in autonomic and perceptual domains under unblinded conditions, but too small to register in endocrine or cutaneous microvascular domains.

Clock. The temporal structure is decisive: T0→T1 shows separation; T0→T2 shows convergence. Because measurements are anchored to fixed calendar points around a 2-week wash-out [PAGE 3], the “clock” of intervention cessation functions as a natural experiment: if the shower produced a durable physiological adaptation, T2 should retain separation from T0. It does not. The circadian sampling protocol (07:00–09:00, ~30 min post-wake, two mornings averaged) attempts to hold the endocrine clock constant, but menstrual-cycle non-standardization in the 11 female participants [PAGE 3] introduces an unmeasured oscillatory confound into HRV, cortisol, and vascular responses that the model did not partition [PAGE 13]. Recursive theory-of-mind conclusion: coaches and athletes who believe contrast showers “work” are observing a transient, context-dependent readiness signal during active exposure, not a stored physiological adaptation; the rational update is to treat contrast showers as a short-term perceptual/autonomic tool within a broader recovery framework, not as a standalone recovery solution [PAGE 13].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto. The intervention is whole-body showering without hydrostatic pressure; immersion provides greater surface contact and different heat-transfer/tissue-cooling characteristics [PAGE 2]. Therefore any mechanism reliant on hydrostatic fluid shifts (e.g., central blood volume changes) is physically vetoed for this protocol. The stimulus is surface thermal only, delivered via thermostatic mixing valves with recorded temperatures within range [PAGE 4]; the thermal dose is brief (10 min) and post-exercise.

Biomechanical layer veto. Trybulski et al. (2025) documented acute forearm biomechanical changes after contrast-water immersion in MMA athletes [PAGE 2], but the present trial collected no performance, neuromuscular, muscle oxygenation, or sport-specific readiness outcomes [PAGE 13]. Consequently, the biomechanical layer—grip strength, forearm stiffness, clinch readiness—is unmeasured; any claim that the shower improves combat-relevant tissue function is vetoed by absence of measurement.

Weather/environmental layer veto. Testing occurred in a standardized clinical room at 21–23 °C and 40–60% RH [PAGE 5], but skin temperature was not directly monitored during PORH [PAGE 6]. Roustit et al. (2010a) note PORH indices are sensitive to ambient temperature and psychophysiological state [PAGE 13]; unmonitored skin temperature at the toe probe site therefore leaves a residual environmental confound that could mask small between-group differences in cutaneous microvascular reactivity. The PORH measurement site (great toe pulp) is distal and cutaneous; it cannot represent perfusion in grappling or striking musculature [PAGE 2][PAGE 13].

Cross-layer adjudication. For a durable multisystem recovery claim to survive, all layers must pass: autonomic (passes transiently at T1, fails at T2), perceptual (passes transiently at T1, fails at T2; expectancy unblocked), endocrine (fails at both T1 and T2), microvascular (fails at both T1 and T2; cutaneous-only), persistence (fails at T2), comparator (active, not inert), and blinding (participants unblinded). Because endocrine, microvascular, persistence, and blinding layers each veto the strong claim, the adjudicated conclusion is restricted to: short-term, relative improvements in resting autonomic indices and perceived recovery during active contrast-shower exposure versus an active thermoneutral comparator, with no demonstrated persistence and no demonstrated endocrine or cutaneous microvascular effect. No veto is passed for performance transfer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Expectancy unblinding veto. Add a third, blinded sham-thermal arm delivering water at a constant indistinguishable temperature with identical auditory/timer cues, while preserving assessor blinding. Prediction: under this counterfactual, the TQR between-group ΔΔ at T1 would shrink toward zero (from 0.61 points, 95% CI 0.27–0.95, toward the null), because much of the perceptual advantage is attributable to knowing one received “contrast” therapy rather than thermoneutral water [PAGE 12]. The lnRMSSD ΔΔ (0.123 log units, 95% CI 0.108–0.137) would likely attenuate partially but need not reach zero if a genuine vagal thermal reflex exists; however, without expectancy control the physiological component is not separable from the contextual component. Verifiable by comparing TQR and HRV ΔΔ estimates between the original unblinded contrast arm and a new blinded sham arm using the same mixed-effects model.

Scenario 2 — Compartment and duration veto. Extend the wash-out to 6 weeks and add near-infrared spectroscopy (NIRS) of the forearm flexors (the combat-relevant muscle compartment implicated by Trybulski et al., 2025) alongside cutaneous toe PORH [PAGE 2][PAGE 13]. Prediction: if the contrast shower produces a genuine vascular adaptation, it would manifest in intramuscular oxygenation or hemoglobin dynamics with a delayed time course not captured by the 2-week wash-out or cutaneous PORH; under this counterfactual, NIRS-derived tissue saturation index (TSI) recovery slope would show a between-group ΔΔ ≠ 0 at T3/T4 even if toe PORH remains null [PAGE 10][PAGE 13]. If NIRS also remains null, the microvascular null generalizes beyond skin to muscle, strengthening the conclusion that this brief shower dose produces no detectable vascular adaptation in any measured compartment.

Scenario 3 — Sex-stratified hormonal veto. Re-power the trial to include sufficient women (e.g., n ≥ 30 per sex) and standardize menstrual-cycle phase or stratify by hormonal contraceptive status for T0, T1, and T2 [PAGE 3][PAGE 13]. Prediction: under this counterfactual, the pooled lnRMSSD ΔΔ of 0.123 log units would decompose into sex-specific estimates; if female autonomic responses to contrast thermal exposure differ (e.g., attenuated or phase-dependent), the pooled per-protocol estimate would be revealed as an aggregation artifact. The veto condition is met if the female-specific T1–T0 ΔΔ CI contains zero while the male-specific CI excludes it, or vice versa; this would invalidate the current generalized claim that contrast showering improves autonomic recovery across the combat-sport sample.
</RLVR_COUNTERFACTUAL_VETOES>