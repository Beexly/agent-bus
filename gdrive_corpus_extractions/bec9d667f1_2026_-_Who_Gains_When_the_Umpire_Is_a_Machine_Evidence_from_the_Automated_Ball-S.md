---
source: "2026 - Who Gains When the Umpire Is a Machine Evidence from the Automated Ball-Strike System (ABS) - Cho et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 45
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 7392
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper about the Automated Ball-Strike System (ABS) in the KBO. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully extract information from the 45 pages provided. Let me organize my thoughts.

Key content from the paper:
- KBO introduced ABS in 2024, first top-tier league to replace home-plate umpire judgment entirely.
- Data: 1,203,755 pitches, 657,201 called, 308,959 plate appearances from 2021-2026.
- Decomposition: geometric component vs discretionary component (Equation 2 on Page 6).
- H1: Machine removes discretion. Count-dependent calls eliminated (6.1 pp hitter-ahead, -6.7 pp two-strike). Catcher framing reliability went from 0.60-0.81 to noise. Star batters advantage removed (1.47 pp pre-ABS).
- H2: Geometry redistributes strikes toward tall batters (0.75 pp per cm on high pitches). Matchup asymmetry removed.
- H3: Economic incidence = exposure × price. Exposure E ranges from 0.007 to 0.043 extra strikes per plate appearance (max 1 in 23 PAs). Ten cm height changes probability of reaching 2 strikes or 3 balls by <2 pp.
- H4: Pitchers adapted quickly through pitch height. Left-handed pitchers caught up (acceleration A=0.058). Right-handed/side-arm already trending.
- H5: Batters did not adapt. No change in swing decisions. Pitchers' plan set in advance applies to every batter; batter decides in real time with small exposure E.

Formal equations:
- Equation (1): S_M(l, h) = 1{l ∈ Z(h)}
- Equation (2): Decomposition S_M - S_H = geometric - discretionary
- Equation (3): ΔV ≈ -∑ ΔS Δv = -E × Δv
- Equation (4): Partial adjustment model Δs_t(c) = λ(s*_t(c) - s_{t-1}(c)), s*_2024 - s*_2023 = κG(c)
- Equation (5): Strike_i = α_r + δ_r ABS_t + μ_p + μ_b + μ_m + ε_i
- Equation (6): Y_i = β_1 X_i + β_2 X_i × ABS_t + μ_l t + μ_p + μ_u + ε_i
- Equation (7): s_t(c) - s_{t-1}(c) = a_f + β_t G(c) + e_c,t
- Equation (8): D_bt = α_b + τ_t + π(h_b - h̄) × ABS_t + u_bt

Units: percentage points (pp), wOBA points per 1,000 plate appearances, runs (one strike = 0.135 runs), centimeters, ft, km/h.

Page citations: I need to cite exact [PAGE N] markers.

Let me draft each section.

<THINK_TRACE>: Needs >=400 words. Deep multi-hop derivation & gray-zone audit.
I should trace the causal chain: ABS introduction → removal of human discretion → elimination of count-dependent calls, framing, star bias → geometric redistribution → exposure limitation → behavioral asymmetry (pitchers adapt, batters don't) → equilibrium implications. Also audit gray zones: robustness checks (Table A7), FDR adjustments (Table A8), star batter fragility under coarsened bins/logit, 2023-only baseline issue (Song et al. 2026 replication), measurement issues (50ft vs 55ft reference point July 2026, tracking calibration stability <=1.8 cm).

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
List equations with page numbers. Describe variables, units. Breakdown of effects: 13.9 pp upper third, -15.2 pp low edge, framing SD 0.93 to 0.14 pp, star advantage 1.47 pp removed, exposure max 0.043 strikes/PA, height effect 0.75 pp/cm, pitchers acceleration etc.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
Lineage: Hoffman/Kahn/Li 2018 (algorithmic hiring), Kleinberg et al. 2018 (human decisions vs machine predictions), Parsons et al. 2011 (umpire discrimination), Kim & King 2014 (status bias), MacMahon & Starkes 2008 (count influence), Dohmen 2008 (home crowd), Bradbury 2019/Hunter 2018/Mills 2017 (pitch-tracking changed umpire zone), Lee et al. 2025 (ABS zone first half 2024), Lee & Ko 2026 (count-dependent calls disappeared), Song et al. 2026 (star batters decline attributed to ABS). Multi-week traps: 2023-only baseline inflates star batter decline (Table A10: -22.35 vs -5.68 wOBA points), 2022 zone expansion confounds pre-trends, July 2026 data format change (50ft→55ft), left-handed pitchers catching up within one season vs secular trend for right-handed.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
Crisis habit regression: Pitchers had pre-existing trends (right-handed/side-arm raising pitches since 2021-2023), left-handed were flat → ABS acted as shock that triggered catch-up. Batters: no crisis habit regression because fixed cost of re-optimization exceeds small gain E×Δv. Counter-trap: Song et al. (2026) attribute star batter decline to ABS, but Cho et al. show it's baseline selection (2023 alone vs 2022-2023) and small rents (~1 run/season). Clock: adjustment speed λ, partial adjustment, reached target within one season (2024), slight unwinding 2026 (-0.021 for LH pitchers). The "clock" is the season-by-season acceleration decay: β_2024 positive, β_2025 ≈ 0, β_2026 slightly negative.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
Physical: Tracking system measures every pitch, trajectory parameters, plate-crossing location. Height at 50 ft release stability <=1.8 cm across seasons (Table A2, Page 37). July 2026 reference point change 50ft→55ft would inflate heights 12-19 cm if uncorrected (Page 12). Biomechanical: Pitch height changes are behavioral (pitchers throwing higher), not calibration artifacts because release height stable. ABS zone scales with registered height (27.64%-56.35% in 2024, then 27.04%-55.75% from 2025). Horizontal: plate 43.18 cm + 2 cm each side = 47.18 cm. Vertical bounds checked at middle plane (and back plane per rules, but middle alone used). Weather: not explicitly discussed, but month fixed effects absorb conditions; clustered by game because pitches share umpire/ballpark/conditions. Veto proof: The paper validates rule reconstruction at 98.6% agreement; measurement issues corrected; within-pitcher release height stability rules out recalibration as cause of pitcher height changes.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable scenarios where the model would be vetoed (falsified) if counterfactual evidence emerged.
1. If catcher framing split-half reliability remained >0.40 in ABS seasons (instead of indistinguishable from zero), H1 would be vetoed. Prediction: reliability should be statistically indistinguishable from zero in 2024-2026.
2. If left-handed pitcher acceleration A disappeared when controlling for vertical band fixed effects (it did become indistinguishable from zero with vertical band FEs per Page 24), then the height channel is vetoed; but prediction: without vertical band FEs, A=0.058 significant; with them, not distinguishable from zero → reallocation is purely vertical height, not horizontal/pitch type.
3. If batters showed >2 pp change in probability of reaching two strikes per 10 cm height (Panel B shows 0.57 pp, CI excludes >2 pp), H3/H5 would be vetoed. Prediction: effect remains <2 pp and statistically null.
Or maybe: If star batter advantage persisted under ABS with fine location bins (it shrinks/loses significance at 6cm bins/logit), then discretion removal is vetoed for that margin.

I need to ensure >=1000 words total across sections. Each section should be substantial. THINK_TRACE >=400 words.

Let me write carefully, avoiding any betting terminology. No spreads, totals, moneylines, odds. I can mention probabilities, percentages, percentage points, wOBA, runs.

Let's start composing.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I must include exact [PAGE N] markers. Let's map key facts to pages:
- Page 2: Abstract
- Page 3: Introduction, decomposition
- Page 4: Three findings summary
- Page 5: Setup, Equation (1), zone definition
- Page 6: Equation (2), Equation (3), H3, Equation (4), H4
- Page 7: H5
- Page 8-9: Institutional setting, ABS rules
- Page 10: Zone bounds percentages, horizontal width
- Page 11: Data summary Table 1
- Page 12: Baseline 2022-2023, GAM, measurement issues (July 2026 55ft vs 50ft)
- Page 13: Reconstructing locations, 98.6% agreement, 12-19 cm inflation if uncorrected, <=1.8 cm release height stability
- Page 14-17: Empirical strategy, Equations (5)-(8)
- Page 18-21: Results calls, Table 2, 13.9 pp upper third, -15.2 pp low edge
- Page 21: Panel B matchup asymmetry, inside edge LHP-LHB 21.5% → 42.2%
- Page 22: Panel C exposure max 0.043, one in 23 PAs
- Page 23: Table 3, star batter -1.47 pp, count 6.14 / -6.74
- Page 24: Table 4, framing dispersion 0.93 to 0.14 pp, reliability 0.60-0.81 baseline, zero ABS
- Page 25-27: Pitchers, Table 5, Figure 2, LH acceleration 0.058, RH already trending
- Page 28-29: Batters, Table 6, first stage 0.75 pp/cm, reduced form null, two strikes × border × ABS 0.77 pp
- Page 30: Robustness Table A7
- Page 31: FDR Table A8, star q=0.004, count q<0.001, LH pitchers q<0.001
- Page 37: Table A2 stability <=1.8 cm
- Page 40: Table A10 baseline 2023 only -22.35 wOBA points
- Page 41: Table A11 LH pitchers shock size, timing
- Page 42: Figure A3

Now write the sections with sufficient depth.

THINK_TRACE >= 400 words. I'll write maybe 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX equations with page citations. List all formal equations from the text. Include units. Breakdown of magnitudes.

RETROCAUSAL_GENEALOGY: Historical lineage, multi-week traps (baseline sensitivity, pre-trend, measurement date change).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (pitchers' pre-trends), counter-trap (Song et al. baseline artifact), clock (adjustment speed λ, partial adjustment, 2024 target reached, 2026 unwinding).

CROSS_LAYER_VETO_ADJUDICATION: Physical (tracking, release height stability), biomechanical (pitcher height change vs calibration), weather (month FEs, game clustering), veto proof (rule reconstruction 98.6%, correction for 55ft).

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with predictions.

Total words should be >=1000. Let's ensure each section is long enough.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The causal architecture of the paper rests on a two-component decomposition of the automated ball-strike shock, formalized in equation (2) on [PAGE 6]: S_M(l,h) − S_H(l,h,θ) = [S_M(l,h) − S̄_H(l,h)] − [S_H(l,h,θ) − S̄_H(l,h)]. The first bracket is the geometric component: a deterministic rectangle Z(h) whose vertical bounds scale with registered batter height and whose horizontal width is fixed at plate width plus 2 cm per side. The second bracket is the discretionary component: context-dependent deviations of human umpires from their location-averaged call probability, including count dependence, catcher framing, and status deference to star batters. Removing the discretionary component sets ∂S_M/∂θ = 0 by construction ([PAGE 6]), which is the identifying restriction behind H1.

The economic incidence theorem in H3, equation (3) on [PAGE 7], states ΔV ≈ −∑ ΔS(l,h,θ) Δv(θ) = −E × Δv, where E is the number of calls flipped per plate appearance and Δv is the run value of converting a ball to a strike (0.135 runs on average, [PAGE 5]). The paper's central gray-zone insight is that large call-probability changes at the plate edges produce negligible outcome changes because E is small: exposure ranges from 0.007 to 0.043 extra strikes per plate appearance across handedness matchups ([PAGE 22, Table 2 Panel C]), meaning at most one extra strike per 23 plate appearances. Ten centimeters of batter height shifts the probability of reaching two strikes or three balls by less than two percentage points ([PAGE 27, Table 6 Panel B]). This exposure bottleneck explains why the redistribution of strikes—13.9 percentage points more likely in the upper third of the zone ([PAGE 19, Table 2 Panel A])—barely moves plate-appearance outcomes.

The behavioral asymmetry in H4–H5 is derived from differential gains to re-optimization. A pitcher's location plan is set ex ante and applies to every batter, so its gain scales with the league-wide geometric shift; a batter's swing decision is made in real time and its gain scales with that batter's own tiny exposure E ([PAGE 7]). Consequently, pitchers reallocate toward ABS-favored cells with partial adjustment λ toward a target s*_{2024} − s*_{2023} = κG(c) (equation 4, [PAGE 7]), while batters exhibit no detectable swing response ([PAGE 28–29]). The gray-zone audit must distinguish true adaptation from pre-existing trends: right-handed and side-arm pitchers were already raising pitch height between 2021 and 2023 ([PAGE 25–26, Figure 2b and Table A11]), whereas left-handed pitchers were flat until 2024, when their acceleration A = 0.058 emerged ([PAGE 24–25, Table 5]). The 2026 partial reversal (−0.021 for left-handers, significant at 10%) suggests overshooting and correction rather than a new permanent equilibrium.

Measurement gray zones are nontrivial. From 16 July 2026, the source data switched trajectory reference points from 50 ft to 55 ft from the plate; ignoring this would inflate plate-crossing heights by 12–19 cm ([PAGE 12]). The authors correct for this, and replication rates remain identical before and after the switch ([PAGE 13, Table A3]). Vertical-axis recalibration is ruled out as a driver of pitcher behavior because release-proximal height at 50 ft changes by at most 1.8 cm within pitcher–pitch-type cells across seasons ([PAGE 13, Table A2]). The ABS rule reconstruction reproduces 98.6% of calls ([PAGE 10, Table 1] and [PAGE 13]), but the star-batter effect is sensitive to location-bin coarsening and functional form: it shrinks and loses significance at 6 cm bins and under a logit, because deterministic post-ABS calls create perfectly predicted bins that drop out ([PAGE 30, Table A7]). Finally, the star-batter outcome decline reported by Song et al. (2026) is largely a baseline-selection artifact: using 2023 alone yields −22.35 wOBA points per 1,000 plate appearances, while the 2022–2023 baseline yields only −5.68 points ([PAGE 40, Table A10]). These traps imply that the null behavioral effects for batters are robust, but the magnitude of discrete star-batter rents is not.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations from the source, with units and page citations.

Operator 1: Automated ball-strike call function. Equation (1), [PAGE 5]:
S_M(l, h) = 1{l ∈ Z(h)}
where l = (horizontal position, height) at the middle plane of home plate, h = registered batter height, Z(h) = strike zone. Vertical bounds in 2024: 27.64% and 56.35% of h; from 2025: 27.04% and 55.75% of h ([PAGE 10]). Horizontal width: 43.18 cm plate + 2 cm each side = 47.18 cm total ([PAGE 10]). Units: dimensionless indicator.

Operator 2: Human call probability. S_H(l, h, θ), [PAGE 5], a smooth function of location and context θ = (count, batter reputation, catcher, umpire). Under ABS, ∂S_M/∂θ = 0 ([PAGE 6]).

Operator 3: Shock decomposition. Equation (2), [PAGE 6]:
S_M(l,h) − S_H(l,h,θ) = [S_M(l,h) − S̄_H(l,h)]_geometric − [S_H(l,h,θ) − S̄_H(l,h)]_discretionary.
Units: percentage points (pp) in call probability.

Operator 4: Economic incidence. Equation (3), [PAGE 7]:
ΔV ≈ −∑_{taken pitches} ΔS(l,h,θ) Δv(θ) = −E × Δv.
Δv(θ) = v_b(θ) − v_s(θ) > 0, estimated from 2022–2023 plate appearances using wOBA; average strike value = 0.135 runs ([PAGE 5]). E = extra strikes per plate appearance from re-judging 2022–2023 pitches under ABS ([PAGE 13]). Units: runs per plate appearance.

Operator 5: Partial adjustment model. Equation (4), [PAGE 7]:
Δs_t(c) = λ(s*_t(c) − s_{t−1}(c)), s*_{2024}(c) − s*_{2023}(c) = κG(c).
c = pitch type × one of 25 plate cells (5 vertical × 5 horizontal bands). G(c) = mechanical shock in wOBA points per 1,000 pitches. λ = adjustment speed. Units: percentage points of usage share per season.

Operator 6: Call-region regression. Equation (5), [PAGE 14]:
Strike_i = α_r + δ_r ABS_t + μ_p + μ_b + μ_m + ε_i.
δ_r = change in called-strike probability in region r under ABS, pp. Standard errors clustered by game ([PAGE 14]).

Operator 7: Discretion difference-in-differences. Equation (6), [PAGE 14–15]:
Y_i = β_1 X_i + β_2 X_i × ABS_t + μ_{l t} + μ_p + μ_u + ε_i.
X_i ∈ {star batter, home team, count group}. Border pitches defined within 0.18 ft (5.5 cm) of ABS zone boundary ([PAGE 14]). Units: pp.

Operator 8: Pitcher reallocation slope. Equation (7), [PAGE 15]:
s_t(c) − s_{t−1}(c) = a_f + β_t G(c) + e_{c,t}.
Acceleration A = β_{2024} − β_{2023}. Units: pp of usage share per wOBA point per 1,000 pitches.

Operator 9: Batter first stage. Equation (8), [PAGE 17–18]:
D_{bt} = α_b + τ_t + π(h_b − h̄) × ABS_t + u_{bt}.
h̄ = 182 cm. π = excess high-strike rate per cm of height under ABS, pp/cm. Estimated π = 0.75 pp/cm ([PAGE 26, Table 6 Panel A]).

Magnitude breakdown ([PAGE 19–24]):
- Upper-third zone: human called-strike rate 86.2%, ABS 100.0%, change +13.9 pp ([PAGE 19, Table 2 Panel A]).
- Low edge: human 33.1%, ABS 17.8%, change −15.2 pp ([PAGE 19]).
- Hitter-ahead count: human expansion +6.14 pp, ABS removes −5.47 pp ([PAGE 23, Table 3 Panel B]).
- Two-strike count: human contraction −6.74 pp, ABS removes +6.90 pp ([PAGE 23]).
- Star batter: human penalty −1.47 pp, ABS removes +1.15 pp ([PAGE 23, Table 3 Panel A]).
- Catcher framing dispersion: within-team SD falls from 0.93 pp (2022–2023 baseline) to 0.14 pp under ABS; split-half reliability 0.60–0.81 at baseline, indistinguishable from zero under ABS ([PAGE 24, Table 4]).
- Exposure E: 0.007 (RHP-RHB) to 0.043 (LHP-LHB) extra strikes per plate appearance ([PAGE 22, Table 2 Panel C]); at most one per 23 plate appearances ([PAGE 22]).
- Pitcher acceleration: all pitchers A = 0.018 (10%); left-handed A = 0.058 (<1%); right-handed A = 0.005 (null); side-arm A = −0.007 (null) ([PAGE 24–25, Table 5]).
- Batter reduced form: 10 cm of height changes probability of reaching two strikes by +0.57 pp and three balls by −0.34 pp; both null, CIs exclude effects > ~2 pp ([PAGE 27, Table 6 Panel B]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage of evaluator-bias and algorithmic-decision research. Hoffman, Kahn, & Li (2018) and Kleinberg et al. (2018) established the contrast between human discretion and algorithmic prediction in hiring and bail settings ([PAGE 3–4]). In sports, Parsons et al. (2011), Price & Wolfers (2010), and Hamrick & Rasp (2015) document umpire discrimination by race; Kim & King (2014) and Mills (2014) document status deference; Zitzewitz (2006) documents nationalism; Chen, Moskowitz, & Shue (2016) document sequential decision effects; Dohmen (2008) and Garicano, Palacios-Huerta, & Prendergast (2005) document home-crowd pressure ([PAGE 4]). Crucially, prior work shows pitch-tracking technology itself altered human umpire behavior (Bradbury, 2019; Hunter, 2018; Mills, 2017), meaning the KBO's 2022 mandate to call a wider zone ([PAGE 9]) is a pre-treatment trend that must be separated from the 2024 ABS shock. The paper's immediate predecessors are Lee, Han, & Ko (2025), describing ABS zone changes in early 2024, and Lee & Ko (2026), showing count-dependent calls disappeared under ABS ([PAGE 4]). Song, Kang, & Paulsen (2026) attribute post-ABS declines in star-batter performance to lost umpire favoritism ([PAGE 4]); Cho et al. replicate the pitch-level favoritism but show its economic value is small (~1 run per star batter-season) and that the larger outcome declines Song et al. identify are an artifact of using 2023 alone as the pre-ABS baseline ([PAGE 4, 40]).

Multi-week traps are embedded in the temporal design. First, the 2022 zone expansion means 2021 is not a clean pre-period; it is used only for pre-trend tests, while 2022–2023 forms the human-umpire baseline ([PAGE 11]). Second, the July 16, 2026 source-format change (50 ft to 55 ft trajectory reference) would bias plate-crossing heights upward by 12–19 cm if uncorrected; the authors apply a correction and show replication rates are identical across the switch ([PAGE 12–13]). Third, the 2026 slight unwinding of pitcher height adjustments (β_{2026} = −0.011 for all pitchers, −0.021 for left-handers) creates a multi-week trap for anyone extrapolating the 2024 acceleration as permanent; the partial adjustment model in equation (4) explicitly allows overshooting and correction ([PAGE 7, 25]). Fourth, catcher framing persistence is measured both within-season (split-half) and across-season (prior-season correlation); both collapse to zero under ABS ([PAGE 24]), so any multi-week analysis assuming framing stability post-2024 would be mis-specified. Fifth, left-handed pitchers' catch-up within one season ([PAGE 26]) means a multi-week window ending in 2024 would read the adjustment as complete, whereas the 2026 reversal shows the target was only approximately reached.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Before the ABS, right-handed and side-arm pitchers were already on a secular trajectory toward higher pitch locations, as shown by negative and significant within-pitcher coefficients for 2021 and 2022 relative to 2023 (Figure 2b, [PAGE 25–26]). Left-handed pitchers were flat over the same interval ([PAGE 25]). The ABS therefore did not create a new behavior ex nihilo for right-handers; it acted as a crisis shock that accelerated a latent trend and forced left-handers to catch up within a single season (acceleration A = 0.058, [PAGE 24–25]). The recursive element is that pitchers' location plans are set in advance and apply to every batter, so the gain from re-optimizing scales with the league-wide zone shift rather than individual exposure ([PAGE 7]). This makes pitcher adjustment lumpy but league-coordinated: the adjustment is quick and coarse, concentrated in pitch height, and partly unwound by 2026 ([PAGE 24–25]).

Counter-trap: The counter-trap is the narrative that the ABS meaningfully depressed star-batter performance by removing umpire favoritism. Song et al. (2026) attribute star-batter walk and on-base declines to the ABS ([PAGE 4]), but Cho et al. show the pitch-level star penalty is real yet small (−1.47 pp on border pitches, removed by +1.15 pp under ABS, [PAGE 23]) and worth only about 0.9 runs per star batter-season ([PAGE 24]). More importantly, the apparent large decline in star-batter plate-appearance value (−22.35 wOBA points per 1,000 PAs) disappears when the baseline is broadened from 2023 alone to 2022–2023 (−5.68 points, [PAGE 40, Table A10]). The counter-trap is therefore baseline selection: a single pre-ABS season absorbs idiosyncratic variation that the two-season baseline washes out. The FDR-adjusted q-values reinforce this: star-batter strikeout increases (q = 0.27) and two-strike swing responses (q = 0.33) do not survive multiple-testing correction ([PAGE 31, Table A8]), so the behavioral counter-trap that batters adapted is rejected.

Clock: The adjustment clock is governed by the partial-adjustment speed λ in equation (4) ([PAGE 7]). Implications: (i) acceleration A = β_{2024} − β_{2023} is positive for left-handers but near zero for right-handers who were already adjusting ([PAGE 24–25]); (ii) the response fades once the target is reached, so β_{2025} ≈ 0 and β_{2026} is slightly negative, indicating overshooting and correction ([PAGE 24–25]); (iii) groups already moving toward the target pre-2024 show little acceleration ([PAGE 24]). For batters, the clock never starts: H5 predicts no re-optimization because the fixed cost of changing a real-time swing decision exceeds the gain scaled by tiny exposure E ([PAGE 7]). The empirical result is a complete absence of detectable swing or outcome response by batters ([PAGE 27–29]), consistent with a clock that remains stopped on the batter side while the pitcher clock ran to completion in one season.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The KBO tracking system records nine fitted trajectory parameters per pitch, and plate-crossing location is computed from these trajectories ([PAGE 11]). Vertical-axis recalibration could masquerade as pitchers throwing higher, but within pitcher–pitch-type cells, release-proximal height at 50 ft changes by at most 1.8 cm across seasons ([PAGE 13, Table A2]), which is small relative to the plate-crossing height changes attributed to behavior ([PAGE 13]). The July 16, 2026 reference-point shift from 50 ft to 55 ft would inflate heights by 12–19 cm if ignored; the authors correct for it and confirm identical ABS replication rates before and after ([PAGE 12–13, Table A3]). These are physical vetoes that have been passed: the observed pitcher height increases are behavioral, not calibration artifacts.

Biomechanical layer: Pitchers reallocated almost entirely through pitch height, not pitch type or horizontal side ([PAGE 24]). The ABS zone scales with registered batter height (vertical bounds 27.64%–56.35% in 2024; 27.04%–55.75% from 2025) ([PAGE 10]), so taller batters receive a mechanically larger high zone; each centimeter of height adds 0.75 pp to the share of high pitches called strikes ([PAGE 26, Table 6 Panel A]). Pitchers responded by raising pitch location, with left-handed pitchers catching up to right-handed and side-arm trends by 2025 ([PAGE 26, Table A11]). There is no evidence that pitchers changed pitch mix or arm angle in response; the adjustment is a pure location reallocation within the existing biomechanical repertoire.

Weather and conditions layer: The empirical strategy relies on within-league contrasts to absorb league-wide shocks, including the 2024 defensive-shift limits, base enlargement, and pitch clock ([PAGE 9]). Month fixed effects absorb seasonal conditions ([PAGE 14]), and standard errors are clustered by game because pitches within a game share an umpire, ballpark, and conditions ([PAGE 14]). The call function itself is untouched by these other rule changes, so tests based on calls are unaffected ([PAGE 9]).

Veto adjudication: The rule reconstruction reproduces 98.6% of ABS calls in 2024–2026 using registered heights ([PAGE 10, Table 1]; [PAGE 13]), and the preferred specification (some part of the ball touching the zone, middle-plane check) fits marginally better than alternatives ([PAGE 13]). All measurement vetoes—reference-point shift, vertical recalibration, rule-reconstruction ambiguity—have been addressed and do not overturn the main findings. The one residual veto is functional-form sensitivity: the star-batter effect shrinks under coarsened 6 cm bins and under logit specification ([PAGE 30]), but the count-dependent-call removal and left-handed pitcher acceleration are robust to every specification change ([PAGE 30, Table A7]).
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Framing persistence veto): If catcher framing split-half reliability remained statistically distinguishable from zero (e.g., r > 0.20, p < 0.05) in any ABS season (2024–2026), H1 would be vetoed because the machine would not have fully removed the discretionary component that creates framing rents. Verifiable from Table 4 ([PAGE 24]): baseline reliability is 0.60–0.81 (all p < 0.01, 20–22 catchers); under ABS, correlations are −0.17, 0.28, and 0.06, none distinguishable from zero even at 10%. Prediction: future ABS seasons will continue to show framing reliability statistically indistinguishable from zero; any re-emergence above r ≈ 0.20 with p < 0.05 falsifies H1 for the framing margin.

Scenario 2 (Height-channel veto): If left-handed pitcher acceleration A = β_{2024} − β_{2023} became indistinguishable from zero after adding vertical-band fixed effects, the height channel would be vetoed and the 2024 reallocation would have to be attributed to horizontal or pitch-type sorting. Verifiable from Table 5 ([PAGE 24]): the all-pitchers acceleration is 0.018 (p < 0.10) but becomes indistinguishable from zero with vertical-band fixed effects; left-handed acceleration is 0.058 (p < 0.01) without vertical FEs. The text states pitchers "moved their pitches up but did not otherwise re-sort them by pitch type or side of the plate" ([PAGE 24]). Prediction: any future decomposition showing significant left-handed acceleration driven by horizontal-band or pitch-type cells after conditioning on vertical height falsifies the pure-height reallocation mechanism.

Scenario 3 (Batter exposure veto): If ten centimeters of batter height changed the probability of a plate appearance reaching two strikes or three balls by more than approximately two percentage points with p < 0.05, H3 and H5 would be vetoed because exposure would be large enough to make batter re-optimization worthwhile. Verifiable from Table 6 Panel B ([PAGE 27]): 10 cm of height changes P(two strikes) by +0.57 pp (SE 0.59) and P(three balls) by −0.34 pp (SE 0.45); 95% CIs exclude effects larger than ~2 pp. Prediction: in any replication or extension, the reduced-form effect of height on two-strike or three-ball probabilities will remain below 2 pp and statistically null; a detected effect above that threshold falsifies the exposure bottleneck that sustains H5.
</RLVR_COUNTERFACTUAL_VETOES><THINK_TRACE>
The causal architecture of the paper rests on a two-component decomposition of the automated ball-strike shock, formalized in equation (2) on [PAGE 6]: S_M(l,h) − S_H(l,h,θ) = [S_M(l,h) − S̄_H(l,h)] − [S_H(l,h,θ) − S̄_H(l,h)]. The first bracket is the geometric component: a deterministic rectangle Z(h) whose vertical bounds scale with registered batter height and whose horizontal width is fixed at plate width plus 2 cm per side. The second bracket is the discretionary component: context-dependent deviations of human umpires from their location-averaged call probability, including count dependence, catcher framing, and status deference to star batters. Removing the discretionary component sets ∂S_M/∂θ = 0 by construction ([PAGE 6]), which is the identifying restriction behind H1.

The economic incidence theorem in H3, equation (3) on [PAGE 7], states ΔV ≈ −∑ ΔS(l,h,θ) Δv(θ) = −E × Δv, where E is the number of calls flipped per plate appearance and Δv is the run value of converting a ball to a strike (0.135 runs on average, [PAGE 5]). The paper's central gray-zone insight is that large call-probability changes at the plate edges produce negligible outcome changes because E is small: exposure ranges from 0.007 to 0.043 extra strikes per plate appearance across handedness matchups ([PAGE 22, Table 2 Panel C]), meaning at most one extra strike per 23 plate appearances. Ten centimeters of batter height shifts the probability of reaching two strikes or three balls by less than two percentage points ([PAGE 27, Table 6 Panel B]). This exposure bottleneck explains why the redistribution of strikes—13.9 percentage points more likely in the upper third of the zone ([PAGE 19, Table 2 Panel A])—barely moves plate-appearance outcomes.

The behavioral asymmetry in H4–H5 is derived from differential gains to re-optimization. A pitcher's location plan is set ex ante and applies to every batter, so its gain scales with the league-wide geometric shift; a batter's swing decision is made in real time and its gain scales with that batter's own tiny exposure E ([PAGE 7]). Consequently, pitchers reallocate toward ABS-favored cells with partial adjustment λ toward a target s*_{2024} − s*_{2023} = κG(c) (equation 4, [PAGE 7]), while batters exhibit no detectable swing response ([PAGE 28–29]). The gray-zone audit must distinguish true adaptation from pre-existing trends: right-handed and side-arm pitchers were already raising pitch height between 2021 and 2023 ([PAGE 25–26, Figure 2b and Table A11]), whereas left-handed pitchers were flat until 2024, when their acceleration A = 0.058 emerged ([PAGE 24–25, Table 5]). The 2026 partial reversal (−0.021 for left-handers, significant at 10%) suggests overshooting and correction rather than a new permanent equilibrium.

Measurement gray zones are nontrivial. From 16 July 2026, the source data switched trajectory reference points from 50 ft to 55 ft from the plate; ignoring this would inflate plate-crossing heights by 12–19 cm ([PAGE 12]). The authors correct for this, and replication rates remain identical before and after the switch ([PAGE 13, Table A3]). Vertical-axis recalibration is ruled out as a driver of pitcher behavior because release-proximal height at 50 ft changes by at most 1.8 cm within pitcher–pitch-type cells across seasons ([PAGE 13, Table A2]). The ABS rule reconstruction reproduces 98.6% of calls ([PAGE 10, Table 1] and [PAGE 13]), but the star-batter effect is sensitive to location-bin coarsening and functional form: it shrinks and loses significance at 6 cm bins and under a logit, because deterministic post-ABS calls create perfectly predicted bins that drop out ([PAGE 30, Table A7]). Finally, the star-batter outcome decline reported by Song et al. (2026) is largely a baseline-selection artifact: using 2023 alone yields −22.35 wOBA points per 1,000 plate appearances, while the 2022–2023 baseline yields only −5.68 points ([PAGE 40, Table A10]). These traps imply that the null behavioral effects for batters are robust, but the magnitude of discrete star-batter rents is not.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations from the source, with units and page citations.

Operator 1: Automated ball-strike call function. Equation (1), [PAGE 5]:
S_M(l, h) = 1{l ∈ Z(h)}
where l = (horizontal position, height) at the middle plane of home plate, h = registered batter height, Z(h) = strike zone. Vertical bounds in 2024: 27.64% and 56.35% of h; from 2025: 27.04% and 55.75% of h ([PAGE 10]). Horizontal width: 43.18 cm plate + 2 cm each side = 47.18 cm total ([PAGE 10]). Units: dimensionless indicator.

Operator 2: Human call probability. S_H(l, h, θ), [PAGE 5], a smooth function of location and context θ = (count, batter reputation, catcher, umpire). Under ABS, ∂S_M/∂θ = 0 ([PAGE 6]).

Operator 3: Shock decomposition. Equation (2), [PAGE 6]:
S_M(l,h) − S_H(l,h,θ) = [S_M(l,h) − S̄_H(l,h)]_geometric − [S_H(l,h,θ) − S̄_H(l,h)]_discretionary.
Units: percentage points (pp) in call probability.

Operator 4: Economic incidence. Equation (3), [PAGE 7]:
ΔV ≈ −∑_{taken pitches} ΔS(l,h,θ) Δv(θ) = −E × Δv.
Δv(θ) = v_b(θ) − v_s(θ) > 0, estimated from 2022–2023 plate appearances using wOBA; average strike value = 0.135 runs ([PAGE 5]). E = extra strikes per plate appearance from re-judging 2022–2023 pitches under ABS ([PAGE 13]). Units: runs per plate appearance.

Operator 5: Partial adjustment model. Equation (4), [PAGE 7]:
Δs_t(c) = λ(s*_t(c) − s_{t−1}(c)), s*_{2024}(c) − s*_{2023}(c) = κG(c).
c = pitch type × one of 25 plate cells (5 vertical × 5 horizontal bands). G(c) = mechanical shock in wOBA points per 1,000 pitches. λ = adjustment speed. Units: percentage points of usage share per season.

Operator 6: Call-region regression. Equation (5), [PAGE 14]:
Strike_i = α_r + δ_r ABS_t + μ_p + μ_b + μ_m + ε_i.
δ_r = change in called-strike probability in region r under ABS, pp. Standard errors clustered by game ([PAGE 14]).

Operator 7: Discretion difference-in-differences. Equation (6), [PAGE 14–15]:
Y_i = β_1 X_i + β_2 X_i × ABS_t + μ_{l t} + μ_p + μ_u + ε_i.
X_i ∈ {star batter, home team, count group}. Border pitches defined within 0.18 ft (5.5 cm) of ABS zone boundary ([PAGE 14]). Units: pp.

Operator 8: Pitcher reallocation slope. Equation (7), [PAGE 15]:
s_t(c) − s_{t−1}(c) = a_f + β_t G(c) + e_{c,t}.
Acceleration A = β_{2024} − β_{2023}. Units: pp of usage share per wOBA point per 1,000 pitches.

Operator 9: Batter first stage. Equation (8), [PAGE 17–18]:
D_{bt} = α_b + τ_t + π(h_b − h̄) × ABS_t + u_{bt}.
h̄ = 182 cm. π = excess high-strike rate per cm of height under ABS, pp/cm. Estimated π = 0.75 pp/cm ([PAGE 26, Table 6 Panel A]).

Magnitude breakdown ([PAGE 19–24]):
- Upper-third zone: human called-strike rate 86.2%, ABS 100.0%, change +13.9 pp ([PAGE 19, Table 2 Panel A]).
- Low edge: human 33.1%, ABS 17.8%, change −15.2 pp ([PAGE 19]).
- Hitter-ahead count: human expansion +6.14 pp, ABS removes −5.47 pp ([PAGE 23, Table 3 Panel B]).
- Two-strike count: human contraction −6.74 pp, ABS removes +6.90 pp ([PAGE 23]).
- Star batter: human penalty −1.47 pp, ABS removes +1.15 pp ([PAGE 23, Table 3 Panel A]).
- Catcher framing dispersion: within-team SD falls from 0.93 pp (2022–2023 baseline) to 0.14 pp under ABS; split-half reliability 0.60–0.81 at baseline, indistinguishable from zero under ABS ([PAGE 24, Table 4]).
- Exposure E: 0.007 (RHP-RHB) to 0.043 (LHP-LHB) extra strikes per plate appearance ([PAGE 22, Table 2 Panel C]); at most one per 23 plate appearances ([PAGE 22]).
- Pitcher acceleration: all pitchers A = 0.018 (10%); left-handed A = 0.058 (<1%); right-handed A = 0.005 (null); side-arm A = −0.007 (null) ([PAGE 24–25, Table 5]).
- Batter reduced form: 10 cm of height changes probability of reaching two strikes by +0.57 pp and three balls by −0.34 pp; both null, CIs exclude effects > ~2 pp ([PAGE 27, Table 6 Panel B]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage of evaluator-bias and algorithmic-decision research. Hoffman, Kahn, & Li (2018) and Kleinberg et al. (2018) established the contrast between human discretion and algorithmic prediction in hiring and bail settings ([PAGE 3–4]). In sports, Parsons et al. (2011), Price & Wolfers (2010), and Hamrick & Rasp (2015) document umpire discrimination by race; Kim & King (2014) and Mills (2014) document status deference; Zitzewitz (2006) documents nationalism; Chen, Moskowitz, & Shue (2016) document sequential decision effects; Dohmen (2008) and Garicano, Palacios-Huerta, & Prendergast (2005) document home-crowd pressure ([PAGE 4]). Crucially, prior work shows pitch-tracking technology itself altered human umpire behavior (Bradbury, 2019; Hunter, 2018; Mills, 2017), meaning the KBO's 2022 mandate to call a wider zone ([PAGE 9]) is a pre-treatment trend that must be separated from the 2024 ABS shock. The paper's immediate predecessors are Lee, Han, & Ko (2025), describing ABS zone changes in early 2024, and Lee & Ko (2026), showing count-dependent calls disappeared under ABS ([PAGE 4]). Song, Kang, & Paulsen (2026) attribute post-ABS declines in star-batter performance to lost umpire favoritism ([PAGE 4]); Cho et al. replicate the pitch-level favoritism but show its economic value is small (~1 run per star batter-season) and that the larger outcome declines Song et al. identify are an artifact of using 2023 alone as the pre-ABS baseline ([PAGE 4, 40]).

Multi-week traps are embedded in the temporal design. First, the 2022 zone expansion means 2021 is not a clean pre-period; it is used only for pre-trend tests, while 2022–2023 forms the human-umpire baseline ([PAGE 11]). Second, the July 16, 2026 source-format change (50 ft to 55 ft trajectory reference) would bias plate-crossing heights upward by 12–19 cm if uncorrected; the authors apply a correction and show replication rates are identical across the switch ([PAGE 12–13]). Third, the 2026 slight unwinding of pitcher height adjustments (β_{2026} = −0.011 for all pitchers, −0.021 for left-handers) creates a multi-week trap for anyone extrapolating the 2024 acceleration as permanent; the partial adjustment model in equation (4) explicitly allows overshooting and correction ([PAGE 7, 25]). Fourth, catcher framing persistence is measured both within-season (split-half) and across-season (prior-season correlation); both collapse to zero under ABS ([PAGE 24]), so any multi-week analysis assuming framing stability post-2024 would be mis-specified. Fifth, left-handed pitchers' catch-up within one season ([PAGE 26]) means a multi-week window ending in 2024 would read the adjustment as complete, whereas the 2026 reversal shows the target was only approximately reached.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Before the ABS, right-handed and side-arm pitchers were already on a secular trajectory toward higher pitch locations, as shown by negative and significant within-pitcher coefficients for 2021 and 2022 relative to 2023 (Figure 2b, [PAGE 25–26]). Left-handed pitchers were flat over the same interval ([PAGE 25]). The ABS therefore did not create a new behavior ex nihilo for right-handers; it acted as a crisis shock that accelerated a latent trend and forced left-handers to catch up within a single season (acceleration A = 0.058, [PAGE 24–25]). The recursive element is that pitchers' location plans are set in advance and apply to every batter, so the gain from re-optimizing scales with the league-wide zone shift rather than individual exposure ([PAGE 7]). This makes pitcher adjustment lumpy but league-coordinated: the adjustment is quick and coarse, concentrated in pitch height, and partly unwound by 2026 ([PAGE 24–25]).

Counter-trap: The counter-trap is the narrative that the ABS meaningfully depressed star-batter performance by removing umpire favoritism. Song et al. (2026) attribute star-batter walk and on-base declines to the ABS ([PAGE 4]), but Cho et al. show the pitch-level star penalty is real yet small (−1.47 pp on border pitches, removed by +1.15 pp under ABS, [PAGE 23]) and worth only about 0.9 runs per star batter-season ([PAGE 24]). More importantly, the apparent large decline in star-batter plate-appearance value (−22.35 wOBA points per 1,000 PAs) disappears when the baseline is broadened from 2023 alone to 2022–2023 (−5.68 points, [PAGE 40, Table A10]). The counter-trap is therefore baseline selection: a single pre-ABS season absorbs idiosyncratic variation that the two-season baseline washes out. The FDR-adjusted q-values reinforce this: star-batter strikeout increases (q = 0.27) and two-strike swing responses (q = 0.33) do not survive multiple-testing correction ([PAGE 31, Table A8]), so the behavioral counter-trap that batters adapted is rejected.

Clock: The adjustment clock is governed by the partial-adjustment speed λ in equation (4) ([PAGE 7]). Implications: (i) acceleration A = β_{2024} − β_{2023} is positive for left-handers but near zero for right-handers who were already adjusting ([PAGE 24–25]); (ii) the response fades once the target is reached, so β_{2025} ≈ 0 and β_{2026} is slightly negative, indicating overshooting and correction ([PAGE 24–25]); (iii) groups already moving toward the target pre-2024 show little acceleration ([PAGE 24]). For batters, the clock never starts: H5 predicts no re-optimization because the fixed cost of changing a real-time swing decision exceeds the gain scaled by tiny exposure E ([PAGE 7]). The empirical result is a complete absence of detectable swing or outcome response by batters ([PAGE 27–29]), consistent with a clock that remains stopped on the batter side while the pitcher clock ran to completion in one season.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The KBO tracking system records nine fitted trajectory parameters per pitch, and plate-crossing location is computed from these trajectories ([PAGE 11]). Vertical-axis recalibration could masquerade as pitchers throwing higher, but within pitcher–pitch-type cells, release-proximal height at 50 ft changes by at most 1.8 cm across seasons ([PAGE 13, Table A2]), which is small relative to the plate-crossing height changes attributed to behavior ([PAGE 13]). The July 16, 2026 reference-point shift from 50 ft to 55 ft would inflate heights by 12–19 cm if ignored; the authors correct for it and confirm identical ABS replication rates before and after ([PAGE 12–13, Table A3]). These are physical vetoes that have been passed: the observed pitcher height increases are behavioral, not calibration artifacts.

Biomechanical layer: Pitchers reallocated almost entirely through pitch height, not pitch type or horizontal side ([PAGE 24]). The ABS zone scales with registered batter height (vertical bounds 27.64%–56.35% in 2024; 27.04%–55.75% from 2025) ([PAGE 10]), so taller batters receive a mechanically larger high zone; each centimeter of height adds 0.75 pp to the share of high pitches called strikes ([PAGE 26, Table 6 Panel A]). Pitchers responded by raising pitch location, with left-handed pitchers catching up to right-handed and side-arm trends by 2025 ([PAGE 26, Table A11]). There is no evidence that pitchers changed pitch mix or arm angle in response; the adjustment is a pure location reallocation within the existing biomechanical repertoire.

Weather and conditions layer: The empirical strategy relies on within-league contrasts to absorb league-wide shocks, including the 2024 defensive-shift limits, base enlargement, and pitch clock ([PAGE 9]). Month fixed effects absorb seasonal conditions ([PAGE 14]), and standard errors are clustered by game because pitches within a game share an umpire, ballpark, and conditions ([PAGE 14]). The call function itself is untouched by these other rule changes, so tests based on calls are unaffected ([PAGE 9]).

Veto adjudication: The rule reconstruction reproduces 98.6% of ABS calls in 2024–2026 using registered heights ([PAGE 10, Table 1]; [PAGE 13]), and the preferred specification (some part of the ball touching the zone, middle-plane check) fits marginally better than alternatives ([PAGE 13]). All measurement vetoes—reference-point shift, vertical recalibration, rule-reconstruction ambiguity—have been addressed and do not overturn the main findings. The one residual veto is functional-form sensitivity: the star-batter effect shrinks under coarsened 6 cm bins and under logit specification ([PAGE 30]), but the count-dependent-call removal and left-handed pitcher acceleration are robust to every specification change ([PAGE 30, Table A7]).
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Framing persistence veto): If catcher framing split-half reliability remained statistically distinguishable from zero (e.g., r > 0.20, p < 0.05) in any ABS season (2024–2026), H1 would be vetoed because the machine would not have fully removed the discretionary component that creates framing rents. Verifiable from Table 4 ([PAGE 24]): baseline reliability is 0.60–0.81 (all p < 0.01, 20–22 catchers); under ABS, correlations are −0.17, 0.28, and 0.06, none distinguishable from zero even at 10%. Prediction: future ABS seasons will continue to show framing reliability statistically indistinguishable from zero; any re-emergence above r ≈ 0.20 with p < 0.05 falsifies H1 for the framing margin.

Scenario 2 (Height-channel veto): If left-handed pitcher acceleration A = β_{2024} − β_{2023} became indistinguishable from zero after adding vertical-band fixed effects, the height channel would be vetoed and the 2024 reallocation would have to be attributed to horizontal or pitch-type sorting. Verifiable from Table 5 ([PAGE 24]): the all-pitchers acceleration is 0.018 (p < 0.10) but becomes indistinguishable from zero with vertical-band fixed effects; left-handed acceleration is 0.058 (p < 0.01) without vertical FEs. The text states pitchers "moved their pitches up but did not otherwise re-sort them by pitch type or side of the plate" ([PAGE 24]). Prediction: any future decomposition showing significant left-handed acceleration driven by horizontal-band or pitch-type cells after conditioning on vertical height falsifies the pure-height reallocation mechanism.

Scenario 3 (Batter exposure veto): If ten centimeters of batter height changed the probability of a plate appearance reaching two strikes or three balls by more than approximately two percentage points with p < 0.05, H3 and H5 would be vetoed because exposure would be large enough to make batter re-optimization worthwhile. Verifiable from Table 6 Panel B ([PAGE 27]): 10 cm of height changes P(two strikes) by +0.57 pp (SE 0.59) and P(three balls) by −0.34 pp (SE 0.45); 95% CIs exclude effects larger than ~2 pp. Prediction: in any replication or extension, the reduced-form effect of height on two-strike or three-ball probabilities will remain below 2 pp and statistically null; a detected effect above that threshold falsifies the exposure bottleneck that sustains H5.
</RLVR_COUNTERFACTUAL_VETOES>