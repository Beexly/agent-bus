---
source: "2026 - Comparative Effects of Sand- and Grass-Based Repeated-Sprint Training on Aerobic and Anaerobic Performance in Soccer Players - Yan et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Sports Science and Medicine/2026"
pages: 29
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4982
---

<NATIVE_REASONING>
The user wants a deep reasoning analysis of the provided source text (a research paper about sand vs grass repeated-sprint training in soccer). I need to produce output with exact XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words).
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown.
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps.
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock.
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof.
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions.

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
- >= 1,000-WORD DEPTH across these exact XML sections.

The source text is the full paper. I need to cite pages as [PAGE N]. Looking at the source text, it has page numbers embedded like "328", "329", "330", etc. I should reference these as [PAGE 328], [PAGE 329], etc., or perhaps sequential page numbers relative to the PDF. The text shows journal page numbers: 327-338. The source text includes markers like "328 Sand vs. grass sprint training in soccer", "329 Yan et al.", etc. I'll cite using the journal page numbers visible: [PAGE 328], [PAGE 329], [PAGE 330], [PAGE 331], [PAGE 332], [PAGE 333], [PAGE 334], [PAGE 335], [PAGE 336], [PAGE 337], [PAGE 338].

I need to be careful not to mention betting. This is sports science, so no betting lines anyway.

I need to avoid toy equations. I can use real equations from the paper:
- Power = body mass × distance² / time³ (units: kg·m²/s³ = Watts)
- Fatigue index = (Peak power - Minimum power) / total time of the 6 sprints (units: W/s)
- VO2max criteria, V-slope method, RE calculation.

I need to mention exact singularity/breakdown regimes: e.g., ANCOVA assumption violation for VO2max (homogeneity of regression slopes p<0.05), mixed-design ANOVA used instead. Sample size n=14 per group may be underpowered for small-to-moderate between-surface differences. Testing all post-tests on grass introduces test-specificity (surface-transfer confound). Residual fatigue between session one and session two (48h) may affect aerobic outcomes. Sand moisture variability. Single university team, male only.

Let's structure:

THINK_TRACE: Multi-hop derivation. Start from surface stiffness (Clegg hammer) → lower impact deceleration on sand (393.6 N vs 1173.0 N) → ~2.98x stiffness ratio → compliant surface reduces elastic energy return, increases concentric demand → greater SJ improvement (6.9% vs 4.7%). Then RAST: sand reduces peak sprint velocity? No, peak power and best sprint time didn't differ, but mean/min power and fatigue index did. Mechanistic chain: acid-base buffering similar (LA similar), so metabolic stress comparable; neuromuscular stabilization demands on sand higher → sustained power output improved. Aerobic: VO2max and AT improved similarly (~7.3%), RE improved within groups but no interaction. Breakdown regimes: ANCOVA assumption violation for VO2max; post-test on grass only; n=14 per group underpowered; single protocol (30m × 6 × 3 sets, 30s/4min recovery). Gray-zone: fatigue index ratio-derived, confounded with minimum power increase; internal load measures didn't differ despite mechanical differences, possibly Type II error or speed convergence at high intensities. Cite pages.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Power equation: \(P = m_b d^2 t^{-3}\) [PAGE 330]. Units: W.
- Fatigue index: \(FI = (P_{peak} - P_{min}) / \sum_{i=1}^{6} t_i\) [PAGE 330]. Units: W/s.
- RAST: six maximal 35-m sprints, 10-s recovery [PAGE 330].
- Training protocol: 3 sets × 6 × 30 m, 30 s intra-set, 4 min inter-set, ~1080 m/week [PAGE 329].
- VO2max: graded treadmill, start 10 km/h, +2 km/h every 3 min [PAGE 330].
- RE: average VO2 during final 30 s at 12 km/h [PAGE 330].
- AT: V-slope method [PAGE 330].
- Surface stiffness: Clegg hammer 2.25 kg dropped 0.457 m, peak impact deceleration force [PAGE 329-330].
- Statistical model: ANCOVA \(Y_{post} = \beta_0 + \beta_1 Y_{pre} + \tau_g + \epsilon\) [PAGE 331]. Mixed-design ANOVA 2×3.
- Hedges' g interpretation thresholds [PAGE 331].
- Breakdown: homogeneity of regression slopes violated for VO2max (p<0.05) → ANOVA used [PAGE 332].

RETROCAUSAL_GENEALOGY: Historical lineage. Lejeune et al. 1998 energy cost on sand. Pinnington & Dawson 2001a/b. Binnie et al. 2013a/b/c, 2014. Impellizzeri et al. 2008 sand vs grass plyometrics. Girard et al. 2011 RSI definition. Thurlow et al. 2024 meta-analysis. Multi-week traps: six-week intervention may be insufficient for chronic structural adaptations; familiarization 2 weeks may not fully normalize sand novelty; detraining/reversion after stopping sand; position-specific demands (midfielders vs wingers vs center backs) not analyzed separately; single season timing.

RECURSIVE_THEORY_OF_MIND: This section is about crisis habit regression vs counter-trap vs clock. I need to interpret "crisis habit regression" as athletes reverting to habitual movement patterns under fatigue/pressure; "counter-trap" as coaches over-prioritizing sand because of novel stimulus but ignoring transfer loss; "clock" as the six-week periodized window and within-session recovery. Discuss how players might regress to grass-like motor patterns on sand, or how the testing surface (grass) creates a counter-trap where sand-trained athletes appear worse if tested on sand, but here tested on grass favors ecological validity. The "clock" is the 9-week timeline (2 familiarization + 1 testing + 6 training) and the 48h intersession interval. Cite pages.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical veto: Surface stiffness ratio ~2.98 (grass/sand) [PAGE 333]. Clegg values 393.6 vs 1173.0 N [PAGE 330]. This vetoes the null hypothesis that surfaces are mechanically identical.
- Biomechanical veto: No ground contact time, step frequency, or sprint kinematics measured [PAGE 333-334]. Thus biomechanical mediation is speculative. Vetoes causal claims about SSC vs concentric mechanisms unless kinematics are added.
- Weather veto: Sand sessions under predominantly dry, occasionally variable due to weather conditions [PAGE 330]. Moisture content alters stiffness [PAGE 328-329, 333]. Vetoes reproducibility if sand moisture not controlled.
- Testing surface veto: All post-tests on grass [PAGE 330]. Sand group did not post-test on trained surface. Vetoes surface-specific performance claims; only transfer can be claimed.
- Statistical veto: n=14 per group; underpowered for small-to-moderate between-surface differences [PAGE 335]. Non-significant findings (CMJ, peak power, best sprint time, RE interaction) may be Type II.
- Physiological load veto: RPE, LA, HRmax not different between surfaces [PAGE 331]. Vetoes the claim that sand imposes greater internal load under matched protocol.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some evaluation framework. The user wants 3 verifiable counterfactual veto scenarios and predictions. I need to frame them as testable scenarios where the paper's conclusions would be vetoed if conditions changed.
1. Veto scenario: If post-intervention RAST and jump tests were performed on sand instead of grass, the surface-specific advantage for SAND in SJ and fatigue index might attenuate or reverse due to lack of specific sand skill/ familiarization. Prediction: SAND vs GRASS difference in SJ would shrink (effect size g < 0.6) or become non-significant (p > 0.05) when testing surface matches training surface for GRASS but not SAND, or vice versa. Actually, if tested on sand, grass group may suffer more. Let's think: counterfactual: testing on sand. Sand group has trained on sand, grass group hasn't. The sand group might show even larger advantage on sand-specific tasks, but the paper argues transfer to firm surfaces. If tested on sand, the grass group's performance might drop due to unfamiliarity, inflating sand's apparent benefit. But if the sand group's advantage is purely neuromuscular transfer, testing on sand should maintain it. Veto: If tested on sand and the SAND advantage disappears, it suggests the grass-testing artifact masked a true sand-specific deficit or the grass test favored grass group. I'll craft carefully.
2. Veto scenario: If sand moisture content is not controlled and varies session-to-session (wet vs dry), the surface stiffness ratio could approach 1:1 or sand could become firmer than expected, eliminating the compliant stimulus. Prediction: Between-group differences in SJ and fatigue index would vanish (p > 0.05, |g| < 0.2) because the mechanical contrast is removed.
3. Veto scenario: If the intervention is extended to 12 weeks with matched total load, the initial neuromuscular novelty of sand may habituate, and grass-specific SSC training may catch up or surpass in peak power/best sprint time. Prediction: At week 12, SAND superiority in minimum power/fatigue index narrows (interaction p > 0.05), while GRASS shows non-inferior or superior peak power and sprint speed due to greater elastic energy utilization on firm surface.

Need to ensure >= 1000 words total across sections. I'll aim for roughly 150-250 words per section to be safe, total > 1000.

Let's write.

Important: Use [PAGE N] markers. I need to map content to pages accurately based on source text.

Page mapping from source:
- Page 327: Title, abstract, start of introduction.
- Page 328: Introduction continued, sand properties, hypothesis.
- Page 329: Methods, participants, study design, training protocol, Table 1, Figure 1 mention.
- Page 330: Surface characterization (Clegg), vertical jumping tests (force platform), RAST, treadmill test.
- Page 331: HR, lactate, RPE, Statistical analyses, Results ground stiffness, perceptual/physiological, jump and repeated sprint (ANCOVA results start), Figure 2, Figure 3.
- Page 332: Jump and repeated sprint continued (mixed ANOVA, simple effects), Table 2, Aerobic capacity (ANCOVA, VO2max assumption violation, mixed ANOVA, Table 3).
- Page 333: Table 3 continued? Actually Table 3 on 332. Discussion starts on 333. Perceptual/physiological responses discussion.
- Page 334: Anaerobic capacity and jumping performance discussion.
- Page 335: Repeated sprint ability mechanisms, Aerobic capacity discussion, limitations.
- Page 336: Limitations continued? Conclusion. References start.
- Page 337: References continued.
- Page 338: References continued, Key points, Author biography.

I'll cite broadly: [PAGE 329], [PAGE 330], [PAGE 331], [PAGE 332], [PAGE 333], [PAGE 334], [PAGE 335].

Need verbatim quotes where citing exact pages. I'll include short quotes.

Let's draft each section carefully.

THINK_TRACE (>=400 words):
- Start: The experiment randomizes 42 male collegiate soccer players into SAND, GRASS, CON (n=14 each) [PAGE 328-329].
- Multi-hop 1: Surface stiffness measurement via Clegg hammer (2.25 kg, drop 0.457 m) shows SAND peak impact deceleration 393.6 ± 70.3 N vs GRASS 1173.0 ± 104.7 N (p<0.01) [PAGE 330, 333]. Ratio ≈ 2.98 [PAGE 333]. This mechanical contrast is the primary physical operator.
- Multi-hop 2: Compliant sand reduces ground reaction forces and elastic energy return, increases concentric contraction demand, foot slippage [PAGE 334]. Explains SJ greater improvement (SAND +6.9% vs GRASS +4.7%, p<0.01) but not CMJ (SSC less surface-dependent).
- Multi-hop 3: RAST (6 × 35 m, 10 s recovery) [PAGE 330]. SAND superior in mean power (+12.1% vs +9.4%), minimum power (+19.8% vs +15.4%), lower fatigue index (-12.1% vs -7.1%) [PAGE 331, Table 2]. Peak power and best sprint time unchanged between surfaces, likely because baseline values already high and ceiling effects [PAGE 334].
- Multi-hop 4: Internal load (RPE, LA, HRmax) not different between surfaces [PAGE 331], so the divergence in fatigue index cannot be attributed to greater systemic metabolic stress. Rather, neuromuscular stabilization and sustained power output on compliant surface likely drive the effect [PAGE 334].
- Gray zone: Fatigue index is ratio-derived: FI = (Ppeak - Pmin) / total time. A reduction in FI may partly reflect increased Pmin rather than independent fatigue resistance [PAGE 334]. Authors acknowledge this.
- Breakdown regimes: ANCOVA assumption violated for VO2max (homogeneity of regression slopes p<0.05) → mixed-design ANOVA [PAGE 332]. Sample size n=14/group underpowered for small-to-moderate between-surface differences [PAGE 335]. All post-tests on grass → surface-transfer confound [PAGE 330]. Testing sessions separated by only 48 h, residual fatigue may affect aerobic outcomes [PAGE 329]. Sand moisture occasionally variable due to weather [PAGE 330].
- Conclusion: Sand prioritized for concentric power and repeated-sprint fatigue resistance; grass for ecological transfer and mechanics.

Need to ensure 400+ words.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations in LaTeX.
- \(P = m_b \cdot d^2 \cdot t^{-3}\) [PAGE 330]. Units W.
- \(FI = (P_{peak} - P_{min}) / \sum t_{sprint}\) [PAGE 330]. Units W·s⁻¹.
- \(Y_{post} = \beta_0 + \beta_1 Y_{pre} + \tau_g + \epsilon\) [PAGE 331].
- Mixed ANOVA: 2(Time) × 3(Group).
- Hedges' g thresholds: trivial ≤0.2, small 0.2–0.6, moderate 0.6–1.2, large 1.2–2.0, very large ≥2.0 [PAGE 331].
- VO2max protocol: \(v_0 = 10\,\text{km·h}^{-1}\), \(\Delta v = 2\,\text{km·h}^{-1}\) per 3 min [PAGE 330].
- RE: \(\overline{VO_2}\) final 30 s at 12 km·h⁻¹ [PAGE 330].
- Clegg: 2.25 kg mass, drop height 0.457 m [PAGE 330].
- Training volume: 3 sets × 6 sprints × 30 m = 540 m/session, ~1080 m/week [PAGE 329].
- Breakdown: homogeneity of regression slopes violated for VO2max [PAGE 332]; p=0.15 for RE interaction [PAGE 332].
- Verb page citations.

RETROCAUSAL_GENEALOGY:
- Cite Lejeune et al. 1998 [PAGE 328], Pinnington & Dawson 2001a/b [PAGE 328], Binnie et al. 2013a/b/c, 2014 [PAGE 328-329, 333], Impellizzeri et al. 2008 [PAGE 328, 334], Girard et al. 2011 [PAGE 328], Thurlow et al. 2024 [PAGE 328, 334].
- Multi-week traps: Six-week window too short for tendon/stiffness structural remodeling; two-week familiarization insufficient to eliminate novelty effect; position-specific not analyzed (midfielders high volume, wingers sprint, center backs accelerations) [PAGE 328]; single RST protocol only; no longitudinal follow-up to test reversibility/habit regression.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under fatigue, athletes revert to habitual grass-optimized motor patterns; sand's instability may disrupt this but if regression occurs, sand advantage decays. Counter-trap: Coaches might over-index on sand's novelty and ignore that post-tests are on grass, creating a false confidence in transfer. Clock: The nine-week timeline (2 familiarization, 1 testing, 6 training) and 48h intersession test interval constrain recovery and adaptation depth [PAGE 329].

CROSS_LAYER_VETO_ADJUDICATION:
- Physical veto: Stiffness ratio 2.98 confirms non-identical surfaces; vetoes equivalence null. [PAGE 330, 333].
- Biomechanical veto: No kinematics/contact time measured; mediation claims speculative. [PAGE 333-334].
- Weather veto: Sand moisture variable; stiffness changes with moisture; vetoes reproducibility. [PAGE 330, 333].
- Testing-surface veto: Post-tests on grass only; sand group not tested on trained surface; vetoes surface-specific performance inference. [PAGE 330].
- Statistical veto: n=14 per group underpowered; non-significant results may be Type II. [PAGE 335].
- Physiological veto: No RPE/LA/HR difference; vetoes greater internal load explanation. [PAGE 331].

RLVR_COUNTERFACTUAL_VETOES:
Need 3 scenarios + predictions. Keep formal.

Scenario 1: Testing-surface inversion counterfactual. If post-intervention RAST and jump tests were conducted on sand rather than grass, the SAND group's surface-specific skill advantage would be confounded with grass group's unfamiliarity. Prediction: The observed SAND > GRASS effect for SJ and fatigue index would either amplify (grass group performs worse on unfamiliar sand) or attenuate if sand-trained athletes lose their grass-optimized SSC edge. Verifiable by a 2×2 surface × group crossover test; veto if interaction p > 0.05 and |g| < 0.4.

Scenario 2: Sand moisture perturbation counterfactual. If sand moisture content is allowed to vary widely (dry vs saturated) without raking standardization, peak impact deceleration on sand could rise toward grass values, reducing the stiffness ratio below ~1.5. Prediction: Between-group differences in SJ (p < 0.01 in original) and fatigue index would become non-significant (p > 0.05), with Hedges' g dropping below 0.6, because the compliant stimulus is removed. Verifiable by measuring Clegg values pre/post each session.

Scenario 3: Extended-duration counterfactual. If the intervention is doubled to 12 weeks with identical session structure, the initial neuromuscular novelty of sand habituates, while grass-specific elastic energy return continues to be trained. Prediction: At week 12, SAND superiority in minimum power and fatigue index narrows (time × group × surface interaction p > 0.05), while GRASS achieves non-inferior or superior peak power and best sprint time due to greater SSC efficiency on firm ground. Verifiable by extending the mixed-design ANOVA to 3 time points.

Make sure no betting terms. Good.

Now I'll write the full output. Need to watch word count. I'll aim for about 1200-1500 words total.

Let's begin drafting.
</NATIVE_REASONING>

<THINK_TRACE>
The source paper randomizes 42 male collegiate soccer players into three groups of n = 14: sand-based repeated-sprint training (SAND), grass-based repeated-sprint training (GRASS), and a time-matched technical-training control (CON) [PAGE 328–329]. All groups continue their regular team program; the intervention replaces two scheduled weekly sessions for six weeks, preceded by a two-week familiarization and one-week testing phase within a nine-week timeline [PAGE 329].

The first multi-hop derivation proceeds from the physical operator to the performance outcome. Surface stiffness was quantified with a 2.25‑kg Clegg Impact Hammer dropped from 0.457 m, yielding peak impact deceleration forces of 393.6 ± 70.3 N on SAND versus 1173.0 ± 104.7 N on GRASS (p < 0.01), confirming grass as the firmer surface [PAGE 330; also reported on PAGE 333]. The authors state the grass surface was approximately 2.98 times stiffer than sand [PAGE 333]. This mechanical contrast is the primary physical operator: a compliant substrate reduces ground reaction forces and elastic energy return, induces foot slippage during propulsion, and forces greater concentric contraction upon take‑off [PAGE 334]. Consequently, squat jump (SJ) height improved more in SAND (+6.9%) than in GRASS (+4.7%, p < 0.01) [PAGE 331, Table 2], whereas countermovement jump (CMJ), which relies more on stretch‑shortening cycle (SSC) utilization common to both surfaces, did not differ significantly between SAND and GRASS [PAGE 331, Table 2].

The second multi-hop derivation concerns the running‑based anaerobic sprint test (RAST): six maximal 35‑m sprints with 10‑s recovery [PAGE 330]. SAND showed greater improvements in mean power (+12.1% vs +9.4%), minimum power (+19.8% vs +15.4%), and a lower fatigue index (−12.1% vs −7.1%, p < 0.01) [PAGE 331; Table 2]. Peak power and best sprint time did not differ between surfaces [PAGE 331, Table 2]. The authors attribute the lack of peak‑power differentiation partly to already high baseline values and ceiling effects in this well‑trained sample [PAGE 334]. Internal load measures—RPE, blood lactate, and HRmax—did not differ between SAND and GRASS [PAGE 331], so the divergence in fatigue‑related outcomes cannot be explained by greater systemic cardiometabolic stress on sand. Instead, the authors propose that surface‑driven neuromuscular and mechanical constraints, such as increased trunk and hip stabilizer demands and greater lower‑limb muscle activation on the unstable substrate, better explain the superior sustained power output and fatigue resistance [PAGE 334].

A gray‑zone audit identifies several breakdown regimes. First, the fatigue index is ratio‑derived: \(FI = (P_{peak} - P_{min}) / \text{total time}\). The authors explicitly note that a reduction in fatigue index may partly reflect the concurrent increase in minimum power rather than an independent physiological adaptation in fatigue resistance [PAGE 334]. Second, VO2max did not meet the ANCOVA assumption of homogeneity of regression slopes (p < 0.05), forcing a switch to mixed‑design ANOVA for that variable [PAGE 332]. Third, the sample size (n = 14 per group) may be insufficient to reliably detect small‑to‑moderate between‑surface differences, so non‑significant findings (CMJ, peak power, best sprint time, running economy interaction) may reflect Type II error rather than true equivalence [PAGE 335]. Fourth, all post‑intervention tests were conducted on grass; the SAND group was not tested on its trained surface, which prioritizes ecological transfer but introduces a test‑specificity confound [PAGE 330]. Fifth, the two testing sessions were separated by only 48 h, so residual fatigue from session one cannot be fully excluded when interpreting aerobic outcomes [PAGE 329]. Finally, sand sessions were conducted under predominantly dry but occasionally variable weather conditions, meaning moisture content—and thus surface behavior—was not perfectly controlled [PAGE 330].

Practical inference: sand may be prioritized when the objective is repeated‑sprint fatigue resistance or concentric power development with reduced impact loading, whereas grass remains preferable when transfer of sprint‑specific mechanics to match conditions is paramount [PAGE 335].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted or implied from the manuscript, with SI/information/probability units and page citations.

Surface stiffness operator: Clegg Impact Hammer, mass \(m_c = 2.25\,\text{kg}\), drop height \(h = 0.457\,\text{m}\); peak impact deceleration force \(F_{peak}\) measured in newtons (N). Observed: SAND \(393.6 \pm 70.3\,\text{N}\), GRASS \(1173.0 \pm 104.7\,\text{N}\), \(p < 0.01\) [PAGE 330]. Stiffness ratio \(\approx 2.98\) [PAGE 333].

RAST power operator [PAGE 330]:
\[
P = m_b \cdot d^2 \cdot t^{-3}
\]
where \(m_b\) is body mass (kg), \(d = 35\,\text{m}\), and \(t\) is sprint time (s). Unit: \(\text{kg}\cdot\text{m}^2\cdot\text{s}^{-3} = \text{W}\).

Derived RAST indices [PAGE 330]:
\[
P_{peak} = \max(P_1,\dots,P_6), \quad P_{min} = \min(P_1,\dots,P_6), \quad \overline{P} = \frac{1}{6}\sum_{i=1}^{6} P_i
\]
\[
FI = \frac{P_{peak} - P_{min}}{\sum_{i=1}^{6} t_i}
\]
Unit for fatigue index: \(\text{W}\cdot\text{s}^{-1}\). The authors caution that \(FI\) is ratio‑derived and may covary with \(P_{min}\) [PAGE 334].

Training protocol operator [PAGE 329]: three sets of six maximal‑effort 30‑m sprints; 30 s recovery between sprints, 4 min rest between sets; two sessions per week for six weeks; weekly sprint volume \(\approx 1080\,\text{m}\). Warm‑up: 12 min standardized.

Aerobic testing operator [PAGE 330]: motorized treadmill; warm‑up 3 min walking + 5 min jogging at \(8\,\text{km}\cdot\text{h}^{-1}\); test begins at \(10\,\text{km}\cdot\text{h}^{-1}\) and increases by \(2\,\text{km}\cdot\text{h}^{-1}\) every 3 min until volitional exhaustion. VO2max confirmed if \(\ge 3\) of plateau, RER \(\ge 1.10\), HR \(> 95\%\) predicted max, volitional exhaustion [PAGE 330]. Anaerobic threshold via V‑slope method [PAGE 330]. Running economy \(RE = \overline{VO_2}\) during final 30 s at \(12\,\text{km}\cdot\text{h}^{-1}\) [PAGE 330]. Units: \(\text{ml}\cdot\text{kg}^{-1}\cdot\text{min}^{-1}\) for VO2max and AT; \(\text{ml}\cdot\text{kg}^{-1}\cdot\text{min}^{-1}\) or \(\text{ml}\cdot\text{kg}^{-1}\cdot\text{km}^{-1}\) for RE depending on scaling convention.

Statistical operator [PAGE 331]: primary ANCOVA model
\[
Y_{post} = \beta_0 + \beta_1 Y_{pre} + \tau_g + \epsilon, \quad \epsilon \sim \mathcal{N}(0,\sigma^2)
\]
with group as fixed factor and baseline as covariate. Complementary mixed‑design ANOVA: \(2\,(\text{Time}) \times 3\,(\text{Group})\). Effect sizes via Hedges’ \(g\) with thresholds: trivial \(\le 0.2\), small \(0.2\text{–}0.6\), moderate \(0.6\text{–}1.2\), large \(1.2\text{–}2.0\), very large \(\ge 2.0\) [PAGE 331]. Significance \(\alpha = 0.05\).

Breakdown / singularity regimes: homogeneity of regression slopes violated for VO2max (\(p < 0.05\)), so mixed‑design ANOVA was used instead of ANCOVA [PAGE 332]; running economy interaction not significant (\(F = 2.0, p = 0.15\)) [PAGE 332]; sample size \(n = 14\) per group underpowered for small‑to‑moderate between‑surface effects [PAGE 335]; all post‑tests on grass, creating a training‑surface vs testing‑surface confound [PAGE 330]; sand moisture occasionally variable due to weather [PAGE 330].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The study’s lineage traces to foundational work on the mechanics and energetics of locomotion on sand, specifically Lejeune, Willems, and Heglund (1998) on energy cost, Pinnington and Dawson (2001a,b) on running economy and energy cost on grass versus soft dry beach sand, and Pinnington et al. (2005) on kinematic and EMG differences between firm and soft surfaces [PAGE 328]. These establish that sand elevates energy expenditure, lactate accumulation, and lower‑limb muscle activation while reducing elastic energy return. The repeated‑sprint ability (RSA) theoretical frame draws on Girard, Mendez‑Villanueva, and Bishop (2011), defining RST as short maximal sprints up to 10 s with brief recovery up to 60 s [PAGE 328]. Prior surface‑comparison evidence includes Impellizzeri et al. (2008), who compared plyometric training on sand versus grass and reported effects on muscle soreness, jumping, and sprinting [PAGE 328, 334], and Binnie et al. (2013a,b,c, 2014), who examined acute physiological responses, internal load, and surface‑specific sprint performance on sand and grass [PAGE 328–329, 333]. More recent context is supplied by Thurlow et al. (2024) on repeated‑sprint training adaptations and Thurlow et al. (2023) on acute RST demands [PAGE 328, 334].

Multi‑week traps embedded in this genealogy: the six‑week intervention window may be insufficient for chronic structural remodeling of tendon stiffness or SSC morphology, meaning observed gains are likely neuromuscular and metabolic rather than purely architectural [PAGE 329, 334]. The two‑week familiarization phase may not fully normalize the novelty of sand for athletes accustomed to firm surfaces, leaving a residual “novel stimulus” effect that decays with continued exposure [PAGE 329]. Position‑specific demands are acknowledged in the introduction—midfielders cover the most total distance, wingers perform the most high‑speed running, and center backs execute the most accelerations/decelerations—but the analysis does not stratify outcomes by playing position, so surface effects may be masked or amplified by position composition [PAGE 328]. Finally, there is no follow‑up or detraining phase, so the durability of sand‑specific adaptations beyond the six‑week clock is unknown, creating a reversibility trap for periodized programming [PAGE 329].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under high fatigue, athletes tend to regress to their dominant, well‑grooved motor patterns—here, grass‑optimized sprint and jump mechanics. Because the sand surface is unstable and compliant, it disrupts those habitual patterns acutely, but if the athlete regresses to grass‑like force‑production strategies during sand training, the surface‑specific stimulus is diluted. The observed lack of difference in peak power and best sprint time may partly reflect such regression: maximum velocity is tightly coupled to elastic SSC mechanics honed on firm ground, and sand alone was insufficient to overwrite those deeply ingrained patterns within six weeks [PAGE 334].

Counter‑trap: a coach observing greater squat jump and fatigue‑index gains on sand might over‑invest in sand‑based RST, assuming broad transfer. The counter‑trap is that all post‑intervention performance tests were conducted on grass [PAGE 330], so the SAND group’s advantages are demonstrated only as transfer to a firm surface, not as sand‑specific dominance. If the same athletes were tested on sand, the grass group’s unfamiliarity could artificially inflate the sand group’s apparent superiority, or the sand group might lose its grass‑optimized edge. Thus, prioritizing sand based solely on this trial risks a surface‑mismatch trap: optimizing for a training surface that is not the competition surface.

Clock: the experiment operates on a nine‑week clock—two weeks familiarization, one week testing, six weeks intervention [PAGE 329]. The two testing sessions are separated by only 48 hours, meaning residual fatigue from the jump/RAST session may bleed into the graded treadmill test, confounding aerobic outcomes [PAGE 329]. Within each RST session, the work‑to‑rest ratio (30 s sprint, 30 s recovery; 4 min between sets) places substantial glycolytic and phosphagen demand, yet the total weekly volume (~1080 m) is relatively low [PAGE 329]. This clock‑constrained dose may explain why VO2max and anaerobic threshold improved similarly on both surfaces (~7.3% and ~7.6% vs ~5.3%) but running economy showed no surface‑specific interaction (\(p = 0.15\)) [PAGE 332]: six weeks and two sessions per week provide enough metabolic stimulus for central aerobic gains, but insufficient biomechanical repetition to differentiate running economy by surface.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: surface stiffness was objectively differentiated (393.6 ± 70.3 N vs 1173.0 ± 104.7 N, \(p < 0.01\); ratio ~2.98) [PAGE 330, 333]. This vetoes the null hypothesis that sand and grass are mechanically equivalent and justifies treating surface as an independent variable rather than a nuisance factor.

Biomechanical veto: the study did not measure ground contact time, step frequency, or sprint kinematics during training or testing [PAGE 333–334]. Therefore, any causal claim that sand’s benefit is mediated specifically by altered force‑production strategies, stabilizing demands, or SSC efficiency is speculative and vetoed until direct biomechanical data are collected. The authors explicitly label these explanations as based on prior literature rather than direct evidence from the dataset [PAGE 333].

Weather veto: sand sessions were conducted under “predominantly dry (occasionally variable due to weather) sand conditions” [PAGE 330]. Because sand stiffness and energy cost are highly sensitive to grain size, layer depth, and moisture content [PAGE 328–329], unmeasured moisture variation vetoes reproducibility of the mechanical stimulus across sessions and sites. A saturated or compacted sand surface could behave mechanically closer to grass, eroding the treatment contrast.

Testing‑surface veto: all post‑intervention jump and RAST tests were conducted on grass to ensure ecological validity, but the SAND group did not post‑test on its trained surface [PAGE 330]. This vetoes strong surface‑specific performance inference; the results support transfer to firm surfaces, not superiority on sand. Dual‑surface testing is required to disentangle training‑surface effects from testing‑surface effects [PAGE 330].

Statistical veto: with n = 14 per group, the study is underpowered to detect small‑to‑moderate between‑surface differences; non‑significant findings (CMJ, peak power, best sprint time, running economy interaction) may reflect Type II error rather than equivalence [PAGE 335]. This vetoes definitive claims of “no difference” for those outcomes.

Physiological veto: RPE, blood lactate, and HRmax during training did not differ between SAND and GRASS (\(p = 0.43, 0.22, 0.40\), respectively) [PAGE 331]. This vetoes the explanation that sand imposed a greater internal load or systemic stress under the matched protocol; outcome differences are more likely mechanical/neuromuscular than metabolic.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions.

Veto scenario 1 — Testing‑surface inversion: if post‑intervention RAST and jump tests were performed on sand rather than grass, the GRASS group would face an unfamiliar‑surface penalty while the SAND group would retain training‑surface specificity. Prediction: the SAND > GRASS effect for squat jump and fatigue index would either amplify (because GRASS performance declines on sand) or attenuate (because SAND loses its grass‑optimized SSC edge). The original conclusion is vetoed if a 2 (group) × 2 (test surface) crossover shows no group × test‑surface interaction (\(p > 0.05\)) and Hedges’ \(|g| < 0.4\) for SJ and fatigue index. Verifiable by adding a sand testing session to the existing protocol [PAGE 330].

Veto scenario 2 — Sand moisture perturbation: if sand moisture content is allowed to vary widely across sessions without raking/leveling standardization, peak impact deceleration on sand could rise toward grass values, reducing the stiffness ratio below ~1.5. Prediction: between‑group differences in squat jump (\(p < 0.01\) originally) and fatigue index (\(p < 0.01\) originally) would become non‑significant (\(p > 0.05\)), with effect sizes dropping below \(g = 0.6\), because the compliant stimulus that drives concentric demand is removed. Verifiable by recording Clegg hammer values before every session and regressing outcome changes on measured stiffness [PAGE 330, 333].

Veto scenario 3 — Extended‑duration counterfactual: if the intervention is doubled to 12 weeks with identical session structure and volume, the initial neuromuscular novelty of sand habituates while grass‑specific elastic energy return continues to be trained on a firm surface. Prediction: at week 12, SAND superiority in minimum power and fatigue index narrows (three‑way time × group × surface interaction \(p > 0.05\)), while GRASS achieves non‑inferior or superior peak power and best sprint time due to greater SSC efficiency on firm ground. Verifiable by extending the mixed‑design ANOVA to three time points (pre, week 6, week 12) and testing the simple‑effects interaction at week 12 [PAGE 329].
</RLVR_COUNTERFACTUAL_VETOES>