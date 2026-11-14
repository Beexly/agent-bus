---
source: "2020 - Swing Shift A Mathematical Approach to Defensive Positioning in Baseball - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2020"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5867
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about defensive positioning in baseball using the GSE + GSI Frontier Reasoning Foundry framework. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Let me analyze the source text carefully:

Paper: "Swing Shift: A Mathematical Approach to Defensive Positioning in Baseball"
MIT Sloan Sports Analytics Conference 2020 Research Paper Competition, Paper ID 1548701
Pages: 8 (though text shows page numbers 1-9)

Key content:
- Abstract: 34% of plate appearances faced shift in 2018. Optimal positioning with three infielders lowered predicted BABIP by 5.9% for right-handers and 10.3% for left-handers vs standard four-infielder placement.
- Methods: Integer program. Field divided into region 1: within 75 ft radius from home plate (pitcher/catcher cover). Region 2: rest of field partitioned into 5 ft diameter disks. Sun Trust Park: 4,229 possible disks.
- Binary decision variables x_ij where i=1..7 fielders, j=1..4,229 disks.
- Fielders not labeled by typical positions, can be placed anywhere.
- Coverage zones: 4,229 x 4,229 matrix P with p_ij coverage score 0 to 1.
- Outfield (>210 ft radius): p_ij = 1 if d_ij <= 40; 1 - (d_ij - 40)/40 if 40 < d < 80; 0 if d >= 80. Wait, looking at text: "1 − 𝑑 𝑖, 𝑗 −40 , if 40 < 𝑑(𝑖, 𝑗) < 80 (1)" and "40" below. It seems like p_ij = 1 - (d_ij - 40)/40 for 40 < d < 80.
- Infield coverage: not circular. Infielder more coverage moving backwards/side-to-side than forward. Fielders nearer home plate have smaller range. r = distance of position i from home plate. Max lateral distance = r * (25/125) = r/5? Wait: "dividing an average player speed of 25 ft/sec by a standard baseball exit velocity of 125 ft/sec." So ratio = 25/125 = 0.2 = 1/5. Lateral coverage boundary is this lateral coverage, backwards is 1/2 of this? Text says "coverage boundary of the player moving ! towards the ball to be of this lateral coverage and the coverage boundary moving backwards to be ! ! of this lateral coverage" - some OCR issues but seems like backwards is half? Let me parse: "moving ! towards the ball" probably "moving forward towards the ball to be of this lateral coverage" and "moving backwards to be ! ! of this lateral coverage" maybe "1/2 of this lateral coverage"? Actually text: "the coverage boundary moving backwards to be ! ! of this lateral coverage" - likely "1/2 of this lateral coverage" or "twice this lateral coverage"? Given "react better moving side-to-side ... than moving forward or backward" - side-to-side max is r/5. Moving forward (towards ball/home plate?) maybe less, backwards more? Actually infielders have more range moving backwards/side-to-side than forward. Hmm.
- Data: baseballsavant.mlb.com 2014-2018. Intensity rating w_ij normalized frequency batter hits to location i.
- Risk vector r: extra intensity around foul lines and locations >325 ft from home plate.
- PAP: maximize αr + Pwx subject to constraints. α=0.0004.
- Constraint (3): each fielder placed.
- Constraint (4): no area over-covered, RHS 1.5 adjustable.
- Constraint (5): one fielder within range vector f of locations to reach first base.
- Constraint (6): infield area within 180 ft of home plate and within 145 ft of first base. Three or four fielders in this area.
- Constraint (7): no infielder in same line of sight; angle difference at least 4° between theta_j and theta_l from first base line using home plate vertex.
- Results: 10,000 simulated balls in play. Three strategies: standard (average of 10 LH + 10 RH batters, 4 infielders), optimal 3 infielders, optimal 4 infielders.
- Table 1 shows BABIP changes. RH: Altuve -7.14%, Arenado -6.36%, Cain +1.92%, Encarnacion -8.93%, Frazier -6.25%, Longoria -8.93%, Martinez -3.85%, Posey -5.56%, Pujols -9.91%, Trout -4.46%. LH: Bruce -13.68%, Carpenter -9.91%, Freeman -11.82%, Gallo -5.13%, Gordon -9.73%, Harper -8.77%, Heyward -11.72%, Kiermaier -9.91%, Rizzo -13.51%, Votto -9.01%.
- Abstract says average 5.9% RH, 10.3% LH reduction.
- Harper case: model based on July 2018-June 2019 tested on remainder of 2019 decreased BABIP by 9.2% vs 8.77% with older data.
- Conclusion: proof of concept, examine balls originally hit vs fielded, situational positioning, pitching strategy interactions.

Now I need to write this in the exact XML sections.

Word count: >= 1,000 words total across sections. THINK_TRACE >= 400 words.

I need to be careful about:
- No betting lines whatsoever.
- Formal LaTeX equations with units.
- Exact page citations [PAGE N].
- Verbatim quotes where appropriate.
- Breakdown regimes/singularity.

Let me structure:

THINK_TRACE (>=400 words): Deep multi-hop derivation. Discuss the integer program geometry, the coverage matrix P, the disk partition, the infield coverage asymmetry, the risk vector, the constraint coupling (angle separation, first base coverage, infield count), the BABIP reduction mechanism, the data recency trap (Harper 9.2% vs 8.77%), Cain outlier (+1.92%), the 75ft pitcher/catcher assumption breakdown, the 4-degree line-of-sight singularity, the α=0.0004 calibration regime, the 325ft risk threshold. Audit gray zones: fielder ability homogeneity assumption, exit velocity fixed at 125 ft/sec, reaction time assumptions, the fact data is where balls were fielded not where hit (admitted limitation in conclusion).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Disk partition: area of field outside 75 ft radius. Sun Trust Park 4,229 disks of diameter 5 ft.
- Binary variable: x_{ij} ∈ {0,1}, i∈{1,...,7}, j∈{1,...,4229}.
- Coverage matrix P ∈ [0,1]^{4229×4229}.
- Outfield coverage: p_{ij} = 1 if d(i,j) ≤ 40 ft; p_{ij} = 1 - (d(i,j)-40)/40 if 40 < d(i,j) < 80 ft; 0 if d(i,j) ≥ 80 ft. Units: feet.
- Speed ratio: v_player / v_exit = 25 ft/s / 125 ft/s = 0.2 (dimensionless). Lateral coverage scale = r × 0.2 where r is distance from home plate.
- Infield boundary: forward vs backward asymmetry. If lateral max is L = r/5, forward boundary maybe L (towards plate?), backward maybe 2L? Need to be careful not to invent. Text says coverage boundary moving backwards to be some fraction of lateral coverage. I'll state what is written: player speed/exit velocity ratio = 0.2; backward coverage boundary scales relative to this lateral coverage. I won't invent exact fractions if OCR is unclear, but I can note the singularity: at r→0 (near home plate), coverage radius →0, creating a coverage singularity.
- Objective: maximize α r^T x + (P w)^T x? Actually text: maximize αr + Pwx. Need to formalize: max_x α ⟨r, x⟩ + ⟨Pw, x⟩? Or max α r + P w x. Dimensions: r is risk vector length 4229, w is intensity length 4229, P is 4229×4229, x is 7×4229? Actually x_ij is binary for fielder i at disk j. So objective sum over i,j of (α r_j + (Pw)_j) x_ij perhaps.
- Constraints: 
  (3) ∑_j x_ij = 1 for each i (each fielder placed once)
  (4) ∑_i x_ij ≤ 1.5 for each j (no over-coverage, RHS adjustable)
  (5) coverage of first base: ∑_{j∈F} x_ij ≥ 1 for some i? Vector f defines reasonable reach to first base.
  (6) ∑_{j∈N} ∑_i x_ij ∈ {3,4} where N = {j: d(j, home) ≤ 180 ft ∧ d(j, first) ≤ 145 ft}
  (7) angle separation: if x_ij = 1 and x_il = 1 for infielders, then |θ_j - θ_l| ≥ 4°.
- α = 0.0004 (dimensionless weighting, calibrated via experimentation).
- Risk vector: extra intensity at foul lines and d > 325 ft from home plate.
- Simulation: 10,000 balls in play.
- BABIP changes from Table 1.

RETROCAUSAL_GENEALOGY: Historical lineage. Shift prevalence 34% in 2018 [PAGE 1]. Freddie Freeman heat map, pull tendency 40% of plate appearances [PAGE 1]. Petriello 2017: 0.276 BABIP with shift vs 0.306 without [PAGE 1]. Cost Freeman NL batting title [PAGE 1, citing Salfino]. 2014-2018 Baseball Savant data. Multi-week traps: batter adaptation between seasons (Harper 2014-15 vs 2018-19 lifting ball over shift), Cain adjustment between seasons, model should run before every series or daily. The retrocausal element: using past hit distributions to position defense, but hitters adapt (counter-adaptation), creating a Red Queen dynamic. July 2018-June 2019 vs remainder 2019: 9.2% vs 8.77%.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: When a team faces a shift, hitters regress to pulling or try to lift over (Harper example). Fielders revert to standard under pressure?
- Counter-trap: Offense adapts by hitting to vacated zones (opposite field or over the top). The model assumes static w from 2014-2018 but batters update.
- Clock: Data recency clock. Model should run at least before every series, ideally daily. The 2014-2018 data is stale; July 2018-June 2019 window improves Harper from 8.77% to 9.2%. Multi-week trap: if you set positioning based on a slump or small sample, the batter adjusts within the series.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: 75 ft radius pitcher/catcher cover assumption. At 125 ft/sec exit velocity, ball travels 75 ft in 0.6 sec. Infielder at 25 ft/s covers 15 ft in that time. Reaction time ~1 sec infielder, ~2 sec outfielder. Veto: if exit velocity exceeds 125 ft/s or reaction time <1 sec, coverage model collapses (singularity at high exit velo).
- Biomechanical: 25 ft/s player speed fixed. All fielders same ability assumption. If a fielder is slower or has different range, p_ij matrix invalid. Angle constraint 4° assumes line-of-sight separation; if angles too close, throws collide or vision blocked.
- Weather: Not explicitly in paper, but wet grass changes fielding range and ball roll; wind affects fly balls >210 ft outfield. The Euclidean distance model ignores wind drag and grass friction. Veto: high wind or wet conditions invalidate symmetric circular coverage zones in outfield.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
1. Veto: Batter with high opposite-field adjustment (like Cain +1.92% or Harper lifting). Prediction: If a batter changes launch angle distribution by >5 degrees toward vacated rover zone within a 4-game series, the static PAP positioning yields positive ΔBABIP (regression to standard or worse).
2. Veto: Pitcher discomfort / pitch sequencing interaction. Prediction: If pitcher throws 20% more off-speed to a batter because infield is shifted (per conclusion limitation), contact quality changes and exit velocity distribution shifts above 125 ft/s, invalidating coverage radius.
3. Veto: Weather/surface. Prediction: If outfield grass is wet or wind >10 mph, outfield coverage radius (40 ft full, 80 ft zero) shrinks by >20%, causing extra-base hits in risk zones (>325 ft, foul lines) despite α penalty.

Need to ensure >=1000 words total. Let me draft carefully with page citations.

Page markers: The text has page numbers 1-9 visible. I'll cite [PAGE 1], [PAGE 2], etc. where content appears.

Abstract/Page 1: shift prevalence 34%, Freddie Freeman, BABIP 0.276 vs 0.306, 5.9%/10.3% reductions.
Page 2: field division 75 ft radius, disks 5 ft, 4,229 disks Sun Trust Park, binary variables, coverage matrix P, outfield coverage equation (1), speed 25 ft/sec, exit 125 ft/sec.
Page 3: infield coverage asymmetry, intensity ratings w, data 2014-2018 Baseball Savant, risk vector r, PAP formulation, α=0.0004.
Page 4: constraints discussion, constraint (3), (4) RHS 1.5, (5) first base, (6) infield 180 ft home / 145 ft first base, 3 or 4 fielders.
Page 5: constraint (7) angle 4°, Figure 4.
Page 6: Results, 10,000 simulations, three strategies, standard positioning average of 10 LH + 10 RH.
Page 7: Figures 6, 7, Table 1 BABIP changes, Harper recency 9.2% vs 8.77%.
Page 8: Conclusion limitations (fielded vs hit, situational, pitching strategy, fielder skills).
Page 9: References.

I need to write >=1000 words. Let's aim for about 1200-1400 words total.

I must NOT mention betting lines. No spreads, totals, moneylines, odds. I can mention probabilities (BABIP is a probability/average) but not betting odds.

Let's write.

Structure:
<THINK_TRACE> ... </THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ... </SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ... </RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND> ... </RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION> ... </CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES>

I'll include verbatim quotes where useful, with page markers.

Let's draft content.

THINK_TRACE: Need >=400 words. I'll write a thorough derivation.
- Start with geometric decomposition: field = B_75(home) ∪ {disks}. Radius 75 ft means infield dirt/grass near plate covered by battery. Remaining area tessellated into 5-ft diameter disks. For Sun Trust Park: 4,229 disks.
- Binary assignment x_ij. Since fielders are unlabeled, the problem is a generalized assignment / set cover with integer constraints.
- Coverage operator P: p_ij depends on Euclidean distance d(i,j). Outfield formula exactly as given. Speed ratio 25/125 = 1/5. Infield coverage radius scales with r (distance from home). Singularity: r→0 => coverage →0; near home plate fielders cannot cover bunts/choppers, which is why battery covers B_75.
- Risk vector r adds mass at foul lines and d>325 ft. α=0.0004 trades off hit intensity vs extra-base risk.
- Constraints couple the geometry: (6) infield region N = {d(home)≤180} ∩ {d(first)≤145}; must hold 3-4 fielders. (7) angle separation ≥4° prevents line-of-sight masking.
- Simulation: 10,000 balls in play. BABIP = H/(AB - SO + SF) roughly; here predicted BABIP reduction 5.9% RH, 10.3% LH. Table 1 specifics.
- Gray-zone audit: Data measures where balls were fielded, not where hit (conclusion limitation). This creates an endogeneity problem: fielder position influences where ball is fielded. Cain +1.92% outlier suggests batter adaptation. α fixed at 0.0004 for all batters; no individual calibration. Homogeneous fielder ability (25 ft/s) ignores individual range. Fixed exit velocity 125 ft/s ignores variation by batter. 4-degree angle constraint is arbitrary and may be too coarse for elite infielders.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math.
- Define domain D = Sun Trust Park geometry. R_1 = {x: ||x - home||₂ ≤ 75 ft}. R_2 = D \ R_1.
- Partition R_2 into disks Δ_j of diameter 5 ft, j=1,...,4229.
- Decision variables x_{ij} ∈ {0,1}, i=1,...,7, j=1,...,4229. ∑_j x_{ij} = 1.
- Coverage matrix P = [p_{ij}] ∈ [0,1]^{4229×4229}.
- Outfield (||i||₂ > 210 ft): p_{ij} = 1 if d≤40; p_{ij} = 1 - (d-40)/40 if 40<d<80; p_{ij}=0 if d≥80. Units ft. Coverage is radially symmetric (circular).
- Speed ratio η = v_fielder / v_exit = (25 ft/s)/(125 ft/s) = 0.2 dimensionless. Infield lateral reach L(r) = η·r where r = ||i - home||₂.
- Infield coverage asymmetric: forward reach vs backward/side reach differ; exact forward fraction not fully specified in OCR but bounded by L(r). Singularity at r→0: L→0.
- Intensity vector w ∈ [0,1]^{4229}, normalized hit frequency from 2014-2018 Baseball Savant.
- Risk vector r ∈ [0,1]^{4229}, augmented mass at foul lines and ||j - home||₂ > 325 ft.
- PAP: max_x α⟨r, x⟩ + ⟨Pw, x⟩? Need to express dimensions correctly. Actually objective: max ∑_{i,j} (α r_j + (Pw)_j) x_{ij} perhaps. I'll write: max_{x} α ⟨r, X⟩ + ⟨Pw, X⟩ where X is the 7×4229 assignment matrix. Or simply state as in text: maximize αr + Pwx subject to constraints. I'll formalize: let X ∈ {0,1}^{7×4229}. Objective: max ⟨αr + Pw, X⟩_F (Frobenius inner product summed over fielders and disks). But w is per batter per disk, Pw yields coverage-weighted intensity per disk. Then αr is risk bonus per disk.
- Constraints:
  (3) ∑_{j=1}^{4229} x_{ij} = 1 ∀i.
  (4) ∑_{i=1}^{7} x_{ij} ≤ 1.5 ∀j.
  (5) ∃i: j∈F ⇒ x_{ij}=1 for first-base coverage set F.
  (6) 3 ≤ ∑_{i=1}^7 ∑_{j∈N} x_{ij} ≤ 4, N = {j: ||j-home||₂ ≤ 180 ft ∧ ||j-first||₂ ≤ 145 ft}.
  (7) For infielders i,k at disks j,l: x_{ij}=x_{kl}=1 ⇒ |θ_j - θ_l| ≥ 4°, θ measured from first-base line at home vertex.
- α = 0.0004 (dimensionless).
- Simulation: N_sim = 10,000 balls in play. Metric: ΔBABIP in percentage points.

RETROCAUSAL_GENEALOGY:
- 2018 shift prevalence 34% [PAGE 1].
- Freddie Freeman pull rate 40% [PAGE 1]. Heat map Fig 1 [PAGE 1].
- Petriello 2017: BABIP 0.276 shift vs 0.306 no shift [PAGE 1].
- Salfino: shift cost Freeman NL batting title [PAGE 1].
- Historical lineage: Traditional shift (Ted Williams shift etc.) to mathematical integer programming. Multi-week trap: hitters adapt between seasons (Harper 2014-15 vs 2018-19 lifting ball; Fig 8 [PAGE 7]). Cain adjustment between seasons [PAGE 6].
- Model recency: run before every series, ideally daily [PAGE 6]. July 2018-June 2019 vs remainder 2019: Harper 9.2% vs 8.77% [PAGE 7].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under shift pressure, batters revert to pull-habit or try to lift over (Harper). Fielding habit regression: default to standard positioning when unsure.
- Counter-trap: Offense reads defensive set and hits to vacated zones (opposite-field rover, over the infield). The model's static w is a trap if batter updates within the sample window.
- Clock: Data staleness clock. 2014-2018 is multi-year; 2019 season is current. The 4-game series or weekly recency matters. Harper case proves clock sensitivity: 9.2% > 8.77% with recent window.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: v_exit=125 ft/s fixed. Ball covers 75 ft in 0.60 s. Fielder at 25 ft/s covers 15 ft in same time. If v_exit > 125 ft/s (e.g., 110 mph ≈ 161 ft/s), coverage radius shrinks below model assumption; p_ij matrix overstates range. Singularity: hard-hit balls to vacated zones.
- Biomechanical layer: All fielders same ability; 25 ft/s speed. Angle constraint 4° assumes line-of-sight separation; if two infielders are within 4°, one masks the other's throw or vision. First-base coverage vector f depends on runner speed and arm strength; not modeled.
- Weather layer: Outfield circular symmetry assumes no wind. Fly balls >210 ft affected by wind drag; wet grass reduces infielder lateral acceleration and increases ball skip, invalidating Euclidean coverage. Veto: wind > 10 mph or precipitation collapses outfield coverage radius below 40 ft full-coverage threshold.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Batter launch-angle counter-adaptation. Setup: Batter identified as extreme puller (e.g., Gallo, LH, -5.13%). PAP overloads pull side, leaves opposite-field rover. Counterfactual: Batter increases opposite-field line-drive rate by ≥8% over a 7-game series. Veto triggers: ΔBABIP becomes positive (≥+2.0%) because rover cannot cover increased opposite-field intensity. Prediction: model fails for high-adaptability batters unless w is refreshed weekly.
2. Pitcher discomfort / pitch-mix interaction. Setup: Infield shifted to third-base side; pitcher uncomfortable throwing inside. Counterfactual: Pitcher increases off-speed/away pitches by ≥15%, raising average exit velocity on contact to >130 ft/s. Veto triggers: coverage radius (scaled by 25/125) underestimates fielder travel time; extra-base hits in risk zone (>325 ft) increase despite α=0.0004 penalty. Prediction: BABIP reduction degrades to <2.0% for pitchers with high shift discomfort.
3. Weather/surface degradation. Setup: Outfield risk vector penalizes foul-line and >325 ft placements. Counterfactual: Game played with wind blowing out at ≥12 mph or after heavy rain. Veto triggers: Outfield full-coverage radius shrinks from 40 ft to ≤30 ft; balls hit to deep foul lines drop for doubles/triples. Prediction: α risk term cannot compensate; ΔBABIP shifts positive (+1.0% to +3.0%) for left-handed pull hitters in foul-line-heavy parks.

I should check word count. Let me estimate. THINK_TRACE ~450 words. SOURCE_OPERATORS ~350 words. RETROCAUSAL ~250 words. RECURSIVE ~200 words. CROSS_LAYER ~200 words. RLVR ~250 words. Total ~1700 words. Good.

Need to ensure no betting lines. I won't mention any odds, spreads, etc.

Need to cite page markers exactly like [PAGE N]. I'll include them throughout.

Need verbatim quotes? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes from the source with page numbers.

Examples:
[PAGE 1] "In 2018, batters faced some form of the shift in 34% of their plate appearances [7]."
[PAGE 1] "Our simulations show that an optimal positioning with three infielders lowered predicted batting average on balls in play (BABIP) by 5.9% for right-handers and by 10.3% for left-handers on average..."
[PAGE 2] "We set up binary decision variables x_ij as follows, where i (the fielder) varies from 1 to 7, and where j (the disk or field position) varies from 1 to 4,229"
[PAGE 2] Equation (1) outfield coverage.
[PAGE 2] "dividing an average player speed of 25 ft/sec by a standard baseball exit velocity of 125 ft/sec."
[PAGE 3] "we set α= 0.0004 for each batter, which we determined through experimentation."
[PAGE 4] Constraint (6) description: "This area consists of all points in the field that are both within 180 ft of home plate and within 145 ft of first base..."
[PAGE 4] Constraint (7): "angle difference between θ_j and θ_l needs to be at least 4°."
[PAGE 6] "Our simulations show that an optimal positioning with three infielders lowered predicted batting average on balls in play (BABIP) by 5.9% for right-handers and by 10.3% for left-handers on average when compared to a standard four-infielder placement of players."
[PAGE 7] Table 1 values.
[PAGE 7] Harper: "the model decreased his BABIP by 9.2% which is a slight improvement from 8.77%."
[PAGE 8] Conclusion: "since our data indicates where balls put in play were fielded, we should examine similar data where balls are originally hit."

I will weave these in.

Now, ensure the format is exactly the XML sections. No markdown outside? I can put the XML as the response.

Let's write it out fully.

Double check: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't invent any fake ratios. I'll only use what's in the text: 25 ft/sec / 125 ft/sec = 0.2, which is explicitly stated. The 4-degree angle is explicit. 75 ft, 5 ft disks, 4,229 disks, 210 ft outfield radius, 40 ft / 80 ft coverage, 180 ft / 145 ft infield, 325 ft risk threshold, α=0.0004, RHS 1.5. All explicit.

I should note where OCR is garbled (infield backward coverage fraction) and not invent it. I'll say the exact backward multiplier is OCR-obscured in the source but is bounded by the lateral coverage scale η·r.

Word count: I'll write generously.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper decomposes the baseball field into a battery-controlled inner disk and a tessellated outer domain. On [PAGE 1], the authors state that in 2018 batters faced a shift in 34% of plate appearances, and that an optimal three-infielder placement lowered predicted BABIP by 5.9% for right-handers and 10.3% for left-handers versus a standard four-infielder alignment. The geometric core appears on [PAGE 2]: Region 1 is the 75-foot radius from home plate, assumed covered by the fixed pitcher and catcher; Region 2 is the remainder of the field partitioned into 5-foot-diameter disks. For Sun Trust Park this yields 4,229 candidate disks. Because the seven non-battery fielders are unlabeled and unconstrained to traditional positions, the decision variable x_ij is a binary assignment over i ∈ {1,...,7} fielders and j ∈ {1,...,4,229} disks ([PAGE 2]).

The coverage operator P is a 4,229 × 4,229 matrix with entries p_ij ∈ [0,1] representing the probability-like coverage score of a fielder at disk i fielding a ball at disk j. Scores decay with Euclidean distance d(i,j). For outfield placements (beyond a 210-foot radius), equation (1) on [PAGE 2] assigns p_ij = 1 for d ≤ 40 ft, a linear decay from 40 to 80 ft, and p_ij = 0 for d ≥ 80 ft. The speed–exit-velocity ratio η = (25 ft/sec) / (125 ft/sec) = 0.2 is dimensionless and sets the infield lateral reach scale L(r) = η·r, where r is the fielder’s distance from home plate ([PAGE 2]). This produces a coverage singularity as r → 0: near home plate the reachable radius collapses, which is exactly why the battery retains the inner 75-foot disk. The infield zone is asymmetric—fielders cover more ground moving backward and side-to-side than forward—though the exact backward multiplier is OCR-obscured in the source and should not be invented.

The objective couples batter intensity w with a risk vector r via max_X α⟨r, X⟩ + ⟨Pw, X⟩, where α = 0.0004 was determined by experimentation ([PAGE 3]). The risk vector injects extra intensity at foul lines and beyond 325 ft from home plate ([PAGE 3]), directly penalizing placements that surrender extra-base hits. Constraints are geometrically coupled: each fielder must be assigned exactly once ([PAGE 4], constraint 3); no disk may be covered by more than 1.5 fielders ([PAGE 4], constraint 4); at least one fielder must cover the first-base reception set f ([PAGE 4], constraint 5); the infield region N = {d(home) ≤ 180 ft} ∩ {d(first) ≤ 145 ft} must contain three or four fielders ([PAGE 4], constraint 6); and infielders must be separated by at least 4° in angle θ measured from the first-base line at home plate to prevent line-of-sight masking ([PAGE 4]–[PAGE 5], constraint 7).

The simulation layer uses 10,000 balls in play per batter and compares standard, three-infielder optimal, and four-infielder optimal alignments ([PAGE 6]). Table 1 on [PAGE 7] reports ΔBABIP for twenty batters; notable outliers include Lorenzo Cain at +1.92% (a regression/failure case) and left-handed Bruce at −13.68%. The recency trap is quantified on [PAGE 7]: for Bryce Harper, a model trained on July 2018–June 2019 and tested on the remainder of 2019 achieved a 9.2% BABIP reduction versus 8.77% with older data, confirming that stale hit distributions erode defensive value.

Gray-zone audit: the data measure where balls were fielded, not where they were hit, an endogeneity the authors acknowledge on [PAGE 8]. Homogeneous fielder ability (fixed 25 ft/sec) and fixed 125 ft/sec exit velocity ignore individual defensive range and batter-specific contact quality. The 4-degree angle constraint is arbitrary and may be too coarse for elite infielders. These are singularity regimes where the integer program’s assumptions break down: high exit velocity, low reaction time, extreme batter adaptation, and adverse weather.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let D denote the field geometry of Sun Trust Park. Define the battery-controlled inner region
R₁ = { x ∈ D : ||x − home||₂ ≤ 75 ft }.
The outer region R₂ = D \ R₁ is partitioned into disks Δⱼ of diameter 5 ft, j = 1,...,4,229 ([PAGE 2]).

Decision variables: x_ij ∈ {0,1}, i = 1,...,7 (unlabeled fielders), j = 1,...,4,229 ([PAGE 2]).
Assignment constraint (3): ∑ⱼ x_ij = 1 ∀ i ([PAGE 4]).
Coverage matrix: P = [p_ij] ∈ [0,1]^{4,229 × 4,229}, p_ij = coverage score of fielder at i fielding ball at j ([PAGE 2]).

Outfield coverage (||i||₂ > 210 ft), equation (1) on [PAGE 2]:
p_ij = 1, if d(i,j) ≤ 40 ft;
p_ij = 1 − (d(i,j) − 40)/40, if 40 ft < d(i,j) < 80 ft;
p_ij = 0, if d(i,j) ≥ 80 ft.
Units: distance in feet; p_ij is dimensionless probability-like coverage. Coverage zones are radially symmetric circles ([PAGE 2]).

Speed–kinematic ratio on [PAGE 2]:
η = v_fielder / v_exit = (25 ft/sec) / (125 ft/sec) = 0.2 (dimensionless).
Infield lateral reach scale: L(r) = η · r, where r = ||i − home||₂. As r → 0, L → 0, creating a coverage singularity near home plate that justifies the 75-ft battery exclusion zone. The exact backward-reach multiplier is OCR-obscured in the source and is not asserted here.

Intensity vector: w ∈ [0,1]^{4,229}, normalized historical hit frequency from Baseball Savant 2014–2018 ([PAGE 3]).
Risk vector: r ∈ [0,1]^{4,229}, with augmented mass at foul lines and ||j − home||₂ > 325 ft ([PAGE 3]).

PAP objective ([PAGE 3]–[PAGE 4]):
max_X α ⟨r, X⟩ + ⟨Pw, X⟩, where X ∈ {0,1}^{7 × 4,229}, α = 0.0004 (dimensionless, calibrated by experimentation).

Constraint (6) infield definition ([PAGE 4]):
3 ≤ ∑ᵢ∑_{j∈N} x_ij ≤ 4,
N = { j : ||j − home||₂ ≤ 180 ft ∧ ||j − first base||₂ ≤ 145 ft }.

Constraint (7) line-of-sight ([PAGE 4]–[PAGE 5]):
if x_ij = 1 and x_il = 1 for infielders, then |θ_j − θ_l| ≥ 4°,
θ measured from the first-base line with home plate as vertex.

Simulation protocol ([PAGE 6]–[PAGE 7]):
N_sim = 10,000 balls in play per batter.
Metric: percentage change in predicted BABIP vs standard four-infielder placement.
Aggregate result on [PAGE 1] and [PAGE 6]: three-infielder optimal lowers BABIP by 5.9% (RH) and 10.3% (LH) on average.
Table 1 on [PAGE 7] lists ΔBABIP: RH Altuve −7.14%, Arenado −6.36%, Cain +1.92%, Encarnacion −8.93%, Frazier −6.25%, Longoria −8.93%, Martinez −3.85%, Posey −5.56%, Pujols −9.91%, Trout −4.46%; LH Bruce −13.68%, Carpenter −9.91%, Freeman −11.82%, Gallo −5.13%, Gordon −9.73%, Harper −8.77%, Heyward −11.72%, Kiermaier −9.91%, Rizzo −13.51%, Votto −9.01%.
Recency validation ([PAGE 7]): Harper model trained July 2018–June 2019 yields 9.2% ΔBABIP vs 8.77% with older data.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage of defensive repositioning that predates modern analytics. On [PAGE 1], the authors note that shifts were used in 34% of 2018 plate appearances and cite the canonical case of Freddie Freeman, a left-handed hitter who pulled the ball on 40% of plate appearances. The historical context includes Petriello’s 2017 finding that BABIP was 0.276 with the shift versus 0.306 without it ([PAGE 1]), and Salfino’s reporting that the shift cost Freeman the 2018 National League batting title ([PAGE 1]). The traditional shift—shortstop to the right side of second base against left-handers, second baseman overloading the left side against right-handers—is thus a heuristic ancestor of the authors’ unlabeled integer program ([PAGE 1]).

The retrocausal structure is explicit: the model uses past hit distributions (2014–2018 Baseball Savant data) to position defenders, but hitters adapt in response, creating a multi-week trap. On [PAGE 7], Figure 8 contrasts Bryce Harper’s 2014–2015 spray with his 2018–2019 tendency to lift the ball into short right field, an offensive counter-adaptation to the shift. The authors concede that batters “have already adjusted their hitting approaches to defensive repositioning” ([PAGE 1], citing [7]) and that Lorenzo Cain’s small positive ΔBABIP (+1.92%) may reflect between-season approach changes ([PAGE 6]). This produces a Red Queen dynamic: defensive optimization based on retrocausal data is only valid until the batter updates. The paper’s remedy is temporal recency—run the model “at least before every series, if not daily” ([PAGE 6])—and the Harper split-sample test (July 2018–June 2019 vs remainder of 2019) shows a 9.2% reduction versus 8.77%, proving that multi-week stale data is a material trap ([PAGE 7]).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when a hitter faces a shift, the defensive habit regresses to overloading the pull side, while the batter regresses either to pulling harder or lifting over the infield ([PAGE 1], [PAGE 7]). Harper’s emergence of a dark-red short-right-field zone in 2018–2019 ([PAGE 7]) is a crisis-habit regression on the offensive side—lifting over the vacated infield—which the static PAP objective cannot anticipate unless w is refreshed at weekly or daily frequency.

Counter-trap: the offensive counter-trap is to hit to the vacated rover zone or down the foul lines where the risk vector αr is intended to penalize exposure. Because α is fixed at 0.0004 for every batter ([PAGE 3]), the model does not individualize risk aversion. A batter who identifies the three-infielder rover in short left field (as with Rizzo on [PAGE 6]) can exploit it by increasing opposite-field contact, turning the defensive optimization into a trap. The counter-trap is strongest for high-adaptability batters; Cain’s +1.92% outcome ([PAGE 7], Table 1) suggests some hitters neutralize the shift entirely within a season.

Clock: the model operates on a data-staleness clock. Training on 2014–2018 data ([PAGE 3]) assumes the batter’s intensity vector w is stationary over years, yet the Harper comparison shows a measurable 0.43-percentage-point improvement (9.2% vs 8.77%) from using the trailing twelve months rather than the multi-year window ([PAGE 7]). The operational clock is therefore sub-weekly: positioning should be recalculated before each series, ideally daily. If the clock is allowed to run multi-week or multi-season, the retrocausal input w drifts away from the batter’s current approach, and the predicted BABIP reduction collapses toward zero or positive values.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the model fixes exit velocity at 125 ft/sec and fielder speed at 25 ft/sec ([PAGE 2]). A 125 ft/sec ball crosses the 75-ft battery radius in 0.60 sec; a fielder moving at 25 ft/sec travels only 15 ft in that interval. The coverage radius L(r) = 0.2·r therefore collapses under any exit velocity above 125 ft/sec. At modern hard-hit rates (well above 100 mph, ≈147 ft/sec), the Euclidean coverage assumption overstates reachable area, creating a physical veto: balls hit to vacated zones with high exit velocity cannot be fielded within the modeled reaction window. Singularity regime: v_exit > 125 ft/sec or reaction time < 1 sec invalidates p_ij.

Biomechanical layer: all seven fielders are assumed identical in ability ([PAGE 2]), yet real range, arm strength, and first-base release time vary. Constraint (6)’s infield box (180 ft from home, 145 ft from first, [PAGE 4]) assumes an average runner and average arm; the 4-degree line-of-sight constraint ([PAGE 4]–[PAGE 5]) assumes angular separation prevents throw masking, but at elite infield spacing the 4-degree floor may be too coarse to prevent visual or throwing interference. Biomechanical veto: fielder-specific speed deviation >10% from 25 ft/sec or runner speed above the model’s average breaks the coverage and first-base constraints.

Weather layer: outfield coverage zones are circular and symmetric ([PAGE 2], Figure 2a), implicitly assuming no wind and uniform grass. Fly balls beyond 210 ft ([PAGE 2]) are wind-sensitive; wet grass alters infielder lateral acceleration and ground-ball skip. The risk vector penalizes placements beyond 325 ft and along foul lines ([PAGE 3]), but cannot compensate if wind stretches carry distance or rain shrinks the effective 40-ft full-coverage radius. Weather veto: sustained wind ≥10 mph or precipitation collapses the outfield coverage model and increases extra-base hits in risk zones despite α = 0.0004.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 — Batter launch-angle counter-adaptation. Setup: a left-handed extreme puller (e.g., Joey Gallo, Table 1 ΔBABIP −5.13% on [PAGE 7]) faces a three-infielder alignment overloaded to the pull side with a rover in short left field. Counterfactual: over a 7-game series the batter raises opposite-field line-drive frequency by ≥8%. Veto trigger: the rover cannot cover the intensified opposite-field intensity, and ΔBABIP flips to ≥ +2.0%. Prediction: the static PAP positioning fails for high-adaptability pull hitters unless w is refreshed at sub-weekly frequency.

Veto scenario 2 — Pitcher discomfort / pitch-mix interaction. Setup: the infield is shifted toward the third-base side, leaving the pitcher uncomfortable throwing inside. Counterfactual: the pitcher increases off-speed and away-location pitches by ≥15%, raising average contact exit velocity above 130 ft/sec. Veto trigger: because η = 25/125 fixes the coverage scale ([PAGE 2]), the higher exit velocity shrinks the effective fielding radius below L(r), and extra-base hits in the α-risk zone (>325 ft, foul lines) increase. Prediction: BABIP reduction degrades to < 2.0% for pitchers with measurable shift discomfort, nullifying the Table 1 benefit ([PAGE 7]).

Veto scenario 3 — Weather/surface degradation. Setup: a left-handed pull hitter faces a shift in a park with deep foul-line risk weighted by r ([PAGE 3]). Counterfactual: game conditions include sustained wind blowing out at ≥12 mph or heavy rain preceding first pitch. Veto trigger: outfield full-coverage radius contracts from 40 ft to ≤30 ft, invalidating equation (1) on [PAGE 2], and balls to the foul-line risk zone fall for doubles/triples. Prediction: ΔBABIP shifts positive by +1.0% to +3.0% for the affected batter, and the α = 0.0004 risk penalty cannot offset the physical coverage loss.
</RLVR_COUNTERFACTUAL_VETOES>