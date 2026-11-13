---
source: "2026 - Movement Regularity and Local Dynamic Stability During Acute and 12-Week Retrained Non-Rearfoot-Strike Running Compared to Habitual Non-Rear - Wu et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/2026"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3393
---

<NATIVE_REASONING>
The user wants me to analyze a sports science research paper about running biomechanics, specifically comparing acute vs 12-week retrained non-rearfoot-strike running vs habitual non-rearfoot-strike running. 

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce at least 1000 words total across these sections, with THINK_TRACE alone being >=400 words.

Let me analyze the paper carefully:

Key details from the paper:
- Journal of Sports Science and Medicine (2026) 25, 822-837
- Authors: Kaicheng Wu, Liqin Deng, Xini Zhang, Bokai Suo, Zeyu Lu, Jiaze He, Fan Yang, Weijie Fu
- DOI: 10.52082/jssm.2026.822
- 33 male recreational runners enrolled
- 13 habitual rearfoot strikers assessed during acute NRFS adoption (HRFS-AN) and after 12 weeks of gait retraining (HRFS-GR), plus 14 habitual non-rearfoot strikers (HNRFS)
- Ran on treadmill at 9 km/h
- Ground reaction forces and lower-limb kinematics recorded
- Coefficient of variation (CV), sample entropy (SampEn), largest Lyapunov exponent (LyE)
- SampEn: m=2, r=0.25×SD, N=2000 data points (10s at 200Hz)
- LyE: Rosenstein algorithm, standardized to zero mean and unit SD, time delay from average mutual information, embedding dimension via false-nearest-neighbors (2-10), Theiler window from Welch's PSD, divergence over ~1.5 gait cycles, slope over 110-157 samples (0.55-0.785s at 200Hz)
- Equation (1): SampEn(m,r,N) = -ln(A/B)
- LyE equation: λ = d⟨ln d(t)⟩/dt
- Training: 12 weeks, minimalist shoes (Vibram FiveFingers, 3mm, zero drop, minimalist index 92%), progressive 10%/week increase in minimalist shoe mileage from 10% to 100% by week 11, maintained week 12. 3 sessions/week. Foot/ankle strengthening 20min/session.
- Dropouts: 19 enrolled, 2 discontinued (triceps surae soreness), 1 excluded for nonadherence, 16 completed post-test, 3 failed to convert to NRFS, leaving 13.
- Foot strike angle <8° = NRFS, >8° = RFS
- HRFS-AN strike angle: -6.23±3.53°, HRFS-GR: -1.71±2.39°, HNRFS: -3.28±2.19°
- VILR: HRFS-AN 58.41±14.77 BW/s, HRFS-GR 75.73±24.20 BW/s, HNRFS 66.28±15.43 BW/s
- VALR: HRFS-AN 46.82±12.25 BW/s, HRFS-GR 61.75±21.11 BW/s, HNRFS 50.24±13.27 BW/s
- CV results: HRFS-GR lower than HRFS-AN for multiple knee and ankle metrics
- SampEn: HRFS-GR lower than HRFS-AN for sagittal knee, sagittal ankle, vertical COM. HRFS-GR higher than HRFS-AN for transverse hip. HNRFS lower than HRFS-GR for sagittal knee.
- LyE: HRFS-GR lower than HRFS-AN for sagittal knee, vertical COM. HNRFS lower than HRFS-GR for coronal hip, sagittal knee.
- Contact time trended higher in HRFS-GR (244.79±30.83 ms) vs HRFS-AN (222.77±21.89 ms) and HNRFS (230.62±26.88 ms), p=0.100 overall, MD 22.02 [1.43, 42.61], p=0.108.

Now let me structure the response.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to discuss:
- The causal chain from foot strike pattern to nonlinear dynamics
- Why acute adoption differs from retrained
- The distinction between SampEn (regularity/predictability) and LyE (local dynamic stability)
- Why they don't necessarily change in parallel
- Gray zones: cross-sectional HNRFS vs longitudinal endpoint, sex limitation (males only), no follow-up, dropout/attrition (19→13), parameter sensitivity of SampEn/LyE, treadmill vs overground, minimalist shoe confound with foot strike modification
- Multi-hop: foot strike angle → loading rates → joint kinematics → nonlinear time-series structure → injury risk (uncertain)

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- SampEn equation with units (dimensionless, bits/nats)
- LyE equation with units (1/s or stride^-1)
- CV = SD/mean (dimensionless)
- VALR/VILR in BW/s
- Treadmill speed 9 km·h⁻¹ = 2.5 m/s
- Sampling 200 Hz, 10s = 2000 points
- Filtering: 4th order Butterworth 7 Hz kinematics, 50 Hz vGRF
- IC threshold vGRF > 30 N
- Theiler window, false nearest neighbors ≤1%
- Page citations: [PAGE 1], [PAGE 4], etc.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Bramble & Lieberman 2004, Lieberman 2010 (barefoot vs shod)
- Ekizos 2017/2018 (acute transition reduces stability)
- Hollander 2021 (8-week no stability change)
- Valenzuela 2015, Williams 2000 (acute foot strike modification)
- Deng 2024, Warne 2014, Yang 2020, Zhang 2021 (4-12 week retraining)
- The "multi-week trap": 12 weeks may be insufficient for full neuromuscular entrainment; residual differences between HRFS-GR and HNRFS persist; no follow-up means retention unknown; 2 dropouts due to soreness indicates tissue adaptation lag vs neural adaptation speed.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under fatigue/novel stress, runners regress to habitual RFS pattern or acute NRFS strategy (more anterior strike, higher LyE)
- Counter-trap: The more anterior foot strike in HRFS-AN may be a "counter-trap" - looks like NRFS but is actually an exploratory, unstable strategy with higher divergence (LyE) and entropy (SampEn)
- Clock: 12-week timeline vs biological adaptation timelines (tendon vs muscle vs neural); the "clock" mismatch between intervention duration and tissue remodeling

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical veto: Treadmill constraint removes air resistance, terrain variability, weather; 9 km/h fixed pace may not match natural self-selected speed
- Biomechanical veto: Minimalist shoe (zero drop, 3mm) is a confound - can't isolate foot-strike modification from footwear; Achilles/triceps surae loading increased in NRFS (Kulmala 2013 cited); two dropouts due to calf/foot pain
- Weather veto: Indoor treadmill eliminates weather, but this limits ecological validity; no environmental perturbation testing
- Sample size: 13 completers, power analysis said 11 needed for dz=0.962, so adequately powered for primary contrast but underpowered for secondary outcomes after Holm correction
- Sex limitation: males only

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable counterfactual scenarios with predictions:
1. If HRFS-AN participants were retested after 24 weeks (not 12), predict LyE and SampEn for sagittal knee and vertical COM would converge further toward HNRFS values (lower LyE, lower SampEn), but residual transverse hip SampEn differences may persist due to distinct motor engrams.
2. If the same protocol were applied to female runners, predict higher baseline LyE/SampEn due to sex-specific neuromuscular control and potentially greater triceps surae injury risk during transition, violating the male-only homogeneity assumption.
3. If the 12-week retraining were conducted in conventional cushioned shoes (12mm drop) rather than minimalist shoes (zero drop), predict foot-strike angle would remain more anterior (like HRFS-AN) and VILR/VALR would not increase to HRFS-GR levels, because minimalist footwear is a necessary mechanical catalyst for NRFS adoption.

I need to make sure total words >= 1000 across sections. THINK_TRACE needs >=400 words.

Let me draft carefully with proper citations.

Word count planning:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total: ~1850 words. Good.

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central causal chain moves from foot-strike pattern (acute vs retrained vs habitual non-rearfoot strike) through discrete biomechanics (foot-strike angle, VILR, VALR, joint ROM) to nonlinear time-series structure (SampEn, LyE, CV). The first multi-hop link is that acute NRFS adoption in habitual rearfoot strikers is not merely a kinematic imitation of HNRFS; it is a neurally exploratory state. This is evidenced by HRFS-AN adopting a more anterior foot strike (mean −6.23° vs −1.71° in HRFS-GR, p<0.001) while exhibiting higher SampEn and LyE in sagittal-plane knee and vertical COM trajectories [PAGE 1, PAGE 10]. The second link is that higher SampEn indicates less repetitive, less predictable temporal organization, while higher LyE indicates faster divergence of neighboring state-space trajectories, i.e., lower local dynamic stability [PAGE 2]. These are distinct dynamical properties: greater temporal regularity does not necessarily imply greater local dynamic stability, and the two need not change in parallel [PAGE 2]. This decoupling is empirically confirmed in the results: sagittal-plane ankle SampEn differed between HRFS-AN and HRFS-GR without a corresponding LyE difference, and transverse-plane hip SampEn was higher in HRFS-GR than HRFS-AN [PAGE 10]. Therefore, interpreting reduced nonlinear metrics after retraining as uniformly "better" is a category error; higher SampEn may reflect adaptability rather than pathology [PAGE 11].

A gray-zone audit reveals several threats to causal inference. First, HNRFS is a cross-sectional reference group, not the longitudinal endpoint of the HRFS cohort, so residual differences between HRFS-GR and HNRFS in knee and hip nonlinear measures may reflect distinct adaptation histories rather than insufficient retraining duration [PAGE 11]. Second, the intervention is a bundled treatment: minimalist shoes (zero drop, 3 mm outsole), progressive mileage, and foot-ankle strengthening are confounded; it is impossible to attribute changes solely to foot-strike modification [PAGE 3]. Third, attrition is nontrivial: 19 enrolled, 2 withdrew for triceps surae soreness, 1 excluded for nonadherence, 3 failed to convert to NRFS, leaving 13 completers [PAGE 5]. Although the simulation-based power analysis targeted dz = 0.962 and indicated 11 participants were needed for 80% power on the primary HRFS-GR vs HRFS-AN contrast [PAGE 2], the Holm-corrected secondary outcomes are underpowered and vulnerable to Type II error. Fourth, the sample is exclusively male, limiting generalization to female runners whose tissue-loading and hormonal profiles may alter the transition trajectory [PAGE 11]. Fifth, treadmill running at a fixed 9 km·h⁻¹ removes environmental perturbations and self-selected speed regulation, so ecological validity for overground running is constrained [PAGE 3]. Sixth, SampEn and LyE estimates are methodologically sensitive: SampEn depends on embedding dimension m and tolerance r (though m=2, r=0.25×SD was validated against three alternatives), and LyE depends on time delay, embedding dimension, Theiler window, and divergence window [PAGE 4, PAGE 13]. These constitute exact breakdown regimes: if the state-space reconstruction violates the false-nearest-neighbour criterion (≤1% false neighbours) or if the Theiler window fails to exclude temporally correlated points, LyE loses its interpretation as a local divergence rate [PAGE 4].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The study employs three formal nonlinear operators. Sample entropy is defined in Equation (1) as:

\[
\operatorname{SampEn}(m,r,N) = -\ln\left(\frac{A}{B}\right)
\]

where \(N\) is the number of data points (2000 points per joint and plane, derived from 10 s at 200 Hz [PAGE 4]), \(m=2\) is the embedding dimension, \(r=0.25 \times SD\) is the similarity tolerance, \(A\) is the number of vector pairs of length \(m+1\) within tolerance \(r\), and \(B\) is the number of vector pairs of length \(m\) [PAGE 4]. SampEn is dimensionless (expressed in natural log units or nats); higher values indicate less repetitive, less predictable movement [PAGE 2]. Sensitivity analyses tested \((m=2, r=0.10\times SD)\), \((m=3, r=0.10\times SD)\), and \((m=3, r=0.25\times SD)\) [PAGE 4].

Local dynamic stability is quantified by the largest Lyapunov exponent:

\[
\lambda = \frac{d\langle \ln d(t) \rangle}{dt}
\]

where \(d(t)\) is the separation between neighboring trajectories in reconstructed state space at time \(t\), and \(\lambda\) is the least-squares slope of mean logarithmic divergence over the early divergence window (samples 1 to ~110–157, corresponding to 0.55–0.785 s at 200 Hz, approximately one gait cycle) [PAGE 4]. Units are inverse seconds (s⁻¹) or per-stride divergence; lower \(\lambda\) indicates greater local dynamic stability [PAGE 2]. Before reconstruction, each time series is standardized to zero mean and unit standard deviation. Time delay is the first local minimum of average mutual information; embedding dimension is the smallest dimension (2–10) yielding ≤1% false neighbours via the false-nearest-neighbours method, with relative and absolute thresholds of 10 and 2 [PAGE 4]. The Theiler window is the mean signal period from the dominant non-zero frequency in Welch's power spectral density estimate [PAGE 4]. Reconstructed parameters are tabulated in Supplementary Table S1 [PAGE 13].

Coefficient of variation is computed as:

\[
CV = \frac{SD}{\bar{x}}
\]

across 10 consecutive gait cycles for discrete joint-angle extrema [PAGE 3]. It is dimensionless and describes consistency of discrete events without encoding temporal organization [PAGE 10].

Loading-rate operators: VALR is the average slope between 20% and 80% of the most linear vGRF segment between initial contact and the point of interest (POI); VILR is the maximum slope between 20% and 100% over the same interval. The POI is defined immediately before vGRF slope decreases below 15 body weights per second, with vGRF magnitude exceeding body weight [PAGE 3]. Units are BW/s. Reported values: HRFS-AN VILR \(58.41 \pm 14.77\) BW/s vs HRFS-GR \(75.73 \pm 24.20\) BW/s (MD \(= 17.32\) BW/s, \(p=0.012\)); VALR \(46.82 \pm 12.25\) vs \(61.75 \pm 21.11\) BW/s (MD \(= 14.93\) BW/s, \(p=0.016\)) [PAGE 5, Table 1].

Treadmill speed is fixed at \(9\ \text{km}\cdot\text{h}^{-1} = 2.5\ \text{m}\cdot\text{s}^{-1}\). Kinematics are filtered with a fourth-order Butterworth low-pass filter at 7 Hz; vGRF at 50 Hz. Initial contact is identified when vGRF exceeds 30 N [PAGE 3]. Foot-strike angle \(<8^\circ\) is classified as NRFS; \(>8^\circ\) as RFS [PAGE 3]. All statistical models use a random-intercept linear mixed-effects specification: \(\text{Outcome} \sim \text{State} + (1 \mid \text{participant})\), with Holm-adjusted contrasts [PAGE 4].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The study sits within a lineage extending from Bramble and Lieberman (2004) and Lieberman et al. (2010), who established that habitually barefoot humans predominantly use non-rearfoot striking while cushioned footwear promotes rearfoot striking with pronounced vertical impact peaks [PAGE 1]. This work inherits the methodological tradition of Valenzuela et al. (2015) and Williams et al. (2000), showing that habitual rearfoot strikers can acutely reproduce some sagittal-plane kinematics of non-rearfoot strikers, though adaptations are outcome-specific and not uniform across variables [PAGE 1]. It extends Ekizos et al. (2017; 2018), who reported reduced local dynamic stability during acute shod-to-barefoot transition with more anterior foot strike, but could not separate footwear from foot-strike effects [PAGE 2]. It also responds to Hollander et al. (2021), who found lower stability in novice barefoot runners but no stability change over 8 weeks [PAGE 2].

The "multi-week trap" is central: the literature assumes 4–12 weeks suffice for gait retraining [PAGE 1], yet this study demonstrates that 12 weeks produces partial, not complete, convergence with habitual non-rearfoot strikers. HRFS-GR retains higher SampEn in sagittal-plane knee and transverse-plane hip motion, and higher LyE in sagittal-plane knee and coronal-plane hip motion, compared with HNRFS [PAGE 10]. Because HNRFS is an independent cross-sectional reference rather than the longitudinal endpoint, residual differences may reflect distinct adaptation histories rather than insufficient duration alone [PAGE 11]. No post-intervention follow-up was conducted, so long-term retention after removal of external guidance is unknown [PAGE 11]. This exposes a temporal mismatch: neural recalibration of foot-strike pattern may occur within weeks, whereas musculoskeletal tissue remodeling (Achilles tendon, triceps surae, intrinsic foot musculature) operates on a slower clock, as evidenced by two withdrawals for calf/foot soreness during early retraining [PAGE 3, PAGE 11]. The 12-week protocol may capture the acute-to-intermediate transition but not the full steady state of NRFS entrainment.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression predicts that under physiological or psychological stress—fatigue, competition, novel terrain, or pain—runners regress from a freshly retrained NRFS pattern toward their habitual rearfoot strategy or, in the acute phase, toward an exaggerated, unstable anterior strike. In this study, HRFS-AN adopted a more anterior foot strike than both HRFS-GR and HNRFS (−6.23° vs −1.71° and −3.28°), indicating an over-correction: the acute nervous system explores an unfamiliar attractor characterized by higher SampEn and LyE in knee and COM trajectories [PAGE 1, PAGE 10]. The counter-trap lies in mistaking this acute anterior-strike strategy for successful NRFS adoption; it superficially satisfies the kinematic definition (<8°) but carries higher local divergence and lower predictability, which may elevate tissue-loading unpredictability even if peak vGRF and loading rates are not significantly different from HNRFS [PAGE 5, PAGE 10].

The clock operates on three nested timescales: (1) the stride-level LyE divergence window (~0.55–0.785 s) capturing millisecond-scale local stability [PAGE 4]; (2) the 12-week retraining calendar [PAGE 3]; and (3) the unobserved multi-month retention horizon [PAGE 11]. A recursive theory of mind for the retraining runner anticipates that the coach interprets reduced LyE and SampEn after 12 weeks as consolidation, while the runner's motor system may still be in exploratory mode, evidenced by residual nonlinear differences from HNRFS [PAGE 10]. If a stressor interrupts the 12-week trajectory (illness, travel, shoe change), the system may regress to the HRFS-AN attractor rather than the HRFS-GR attractor, because the latter has not yet become the default dynamical regime. This regression risk is highest when the runner perceives acute anterior striking as "correct" NRFS, creating a false-consolidation trap.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The treadmill constraint at fixed 9 km·h⁻¹ eliminates air resistance, terrain undulations, grade changes, and weather perturbations [PAGE 3]. Therefore, LyE and SampEn values measured here are valid only for steady-state treadmill running; they do not transfer to overground or variable-environment contexts without re-validation. Weather veto is formally null indoors (no wind, precipitation, or temperature effects), but this is itself a limitation: the study cannot adjudicate how nonlinear stability degrades under environmental perturbation.

Biomechanical layer veto: The intervention is a bundled treatment—minimalist shoes (Vibram FiveFingers, 3 mm outsole, zero drop, minimalist index 92%), progressive minimalist mileage (10% to 100% by week 11), and 20-minute foot-ankle strengthening sessions [PAGE 3]. Because footwear and foot-strike modification co-vary, the observed increases in VILR and VALR from HRFS-AN to HRFS-GR cannot be causally isolated to foot-strike pattern [PAGE 5]. The more anterior foot strike in HRFS-AN may be a shoe-driven artifact rather than a pure motor choice. Additionally, NRFS increases Achilles tendon and triceps surae loading due to greater ankle plantarflexion [PAGE 1, citing Kulmala et al. 2013], which mechanistically explains the two withdrawals for calf soreness [PAGE 11].

Statistical layer veto: The primary contrast was powered for dz = 0.962 with 11 participants [PAGE 2], but Holm-corrected secondary outcomes (SampEn, LyE across multiple joints and planes) inflate familywise error and reduce power per contrast. Several effects fall in the gray zone: contact time showed a trend (HRFS-GR 244.79 ms vs HRFS-AN 222.77 ms, MD = 22.02 ms, p = 0.108) [PAGE 5, Table 1], and several CV overall effects lost significance after pairwise adjustment [PAGE 6]. This creates a false-negative veto: absence of evidence is not evidence of equivalence for spatiotemporal and COM ROM variables.

No veto was found for the core nonlinear claim: the within-participant reduction in sagittal-plane knee LyE (HRFS-AN vs HRFS-GR: MD −0.18, p = 0.017; HNRFS vs HRFS-GR: MD −0.20, p = 0.044) and vertical COM LyE (HRFS-GR vs HRFS-AN: MD −0.14, p = 0.019) survives Holm correction and is consistent across both gait retraining and habitual reference groups [PAGE 10].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Extended Duration Counterfactual: If the same 13 HRFS participants were retested at 24 weeks rather than 12 weeks under identical minimalist-shoe conditions, I predict LyE for sagittal-plane knee and vertical COM would decrease further toward HNRFS values (lower local divergence), but SampEn for transverse-plane hip would remain elevated relative to HNRFS because hip coordination reflects a distinct motor engram acquired over years of rearfoot striking. Falsifiable prediction: at 24 weeks, sagittal-plane knee LyE difference HRFS-GR vs HNRFS < −0.10 (narrowing from −0.20), while transverse-plane hip SampEn difference remains > +0.05. Verification requires a follow-up LyE/SampEn session; absence of convergence would veto the claim that 12 weeks is sufficient for full dynamical entrainment.

Veto Scenario 2 — Sex Generalization Counterfactual: If the identical protocol were applied to a cohort of female recreational runners matched for weekly mileage and rearfoot-strike habit, I predict higher baseline triceps surae and Achilles loading during NRFS adoption, producing greater attrition than the 2-of-19 male withdrawal rate and smaller reductions in sagittal-plane knee LyE after 12 weeks, because sex-specific tendon stiffness and neuromuscular control alter the adaptation trajectory. Falsifiable prediction: female cohort withdrawal rate ≥ 30% and sagittal-plane knee LyE reduction < 0.10 units. Verification requires a replicated trial in females; the male-only sample [PAGE 11] currently vetoes generalization to female runners.

Veto Scenario 3 — Footwear-Only Counterfactual: If HRFS participants completed 12 weeks of gait retraining in conventional cushioned shoes (12 mm heel-to-toe drop, as used for habitual testing [PAGE 3]) rather than minimalist shoes, I predict foot-strike angle would remain more negative (more anterior) in the acute state but fail to shift toward HNRFS values, and VILR/VALR would not increase from HRFS-AN to the retrained state. Falsifiable prediction: foot-strike angle difference between retrained and acute conditions < 2°, and VILR difference < 5 BW/s. Verification requires an arm retraining in conventional shoes; because minimalist footwear is confounded with foot-strike modification in this design [PAGE 3, PAGES 5-6], the current study cannot reject the hypothesis that zero-drop footwear, not motor retraining, drives the observed loading-rate changes.
</RLVR_COUNTERFACTUAL_VETOES>