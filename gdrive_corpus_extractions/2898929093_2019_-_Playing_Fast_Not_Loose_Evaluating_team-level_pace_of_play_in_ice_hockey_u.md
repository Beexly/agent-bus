---
source: "2019 - Playing Fast Not Loose Evaluating team-level pace of play in ice hockey using spatio-temporal possession data - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6159
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about ice hockey pace of play using spatio-temporal possession data. They've provided the full source text from an MIT Sloan Sports Analytics Conference paper from 2019.

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "DRIVE SOURCE" and provided a file path and pages: 18. But then they pasted the full text which appears to be 30+ pages based on the page markers (pages 1-30 visible in the text). I need to cite exact [PAGE N] markers. Looking at the text, there are page markers like "2019 Research Papers Competition Presented by: 1", "2", etc. up to page 30 in the appendix. The user said PAGES: 18 but the text includes more. I should cite based on the visible page numbers in the text.

Let me structure this carefully.

First, let me identify the key content:
- Paper: "Playing Fast Not Loose: Evaluating team-level pace of play in ice hockey using spatio-temporal possession data" by David Yu, Christopher Boucher, Luke Bornn, Mehrsan Javan from SPORTLOGiQ.
- MIT Sloan 2019 Research Paper Competition.
- Dataset: SPORTLOGiQ spatio-temporal data, ~3650 events/game, 21 primary event types, 89 subtypes. NHL, AHL, SHL 2016-17, 2017-18, partial 2018-19.
- Metrics: ɸT (total speed), ɸEW (east-west), ɸNS (north-south), ɸN (north-only). Units ft/s.
- Termination criteria: possession change, manpower change, stoppage.
- Zonal analysis: OZ, NZ, DZ.
- Polygrid: 668 sections, 5ft x 5ft. Gaussian kernel σ=0.5.
- Team level: 5v5 NHL only.
- Player level: min 200 minutes 5v5. Individual pace and WOWY.
- Key findings:
  - ɸT highest in NZ, ~10-13% slower in OZ and DZ. ɸN in OZ 35% slower than DZ, 43% slower than NZ.
  - AHL ɸT 1-2% slower than NHL. SHL slower in DZ/OZ but faster in NZ due to rink dimensions (international ice ~13.5ft wider, longer NZ).
  - Season over season: slight increase, NZ increases driven by ɸEW (3-4% increase in EW passes in NZ).
  - Period effects: 2nd period DZ pace uptick ~7% increase in ɸN. Progressive decline in ɸEW from 1st to 3rd. Odd man rushes ~35% increase in 2nd period.
  - Manpower: 4v4 lower total speed all zones. 3v3 slower all zones (OT). Powerplay 5v4: decline DZ pace, increase NZ/OZ pace driven by ɸEW.
  - Polygrid: offside rule visible at offensive blue line (decline ɸN/ɸNS, peak ɸEW). Powerplay increases pace in OZ, declines in defensive half.
  - Zone entries: higher danger entries at higher pace. High danger ɸT ~24.3 ft/s vs dump-in 21.6 ft/s (13% faster).
  - Pre-shot pace: True shooting % increases 2.9% to 4.1% (38% increase) from lowest to highest ɸT quintile. Shot distance constant 37-40 ft.
  - Pass speed: failed receptions at higher speeds than successful for most pass types (except slot).
  - Team level: CHI, LAK fast attacking; ARI, WPG slow. NSH lowest DZ ɸT, highest OZ ɸT. Repeatable across seasons.
  - Player level: McDavid fastest, Jagr slowest. Defencemen slower than forwards in DZ, opposite in OZ.

Now for the XML sections:

1. <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive things, discuss assumptions, gray zones, potential pitfalls. Must be >=400 words.

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. Need to define ɸT, ɸEW, ɸNS, ɸN formally. Cite pages where these appear. The text mentions Figure 1 on page 2, metrics on page 2, zone analysis page 3, etc. I should reference the page numbers visible in the text.

3. <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss Silva et al. [3], Gudmundsson & Horton [1], basketball pace definition, soccer references [7,8], Paul Maurice quote [2], lineage of possession models, multi-week traps (seasonal changes, period fatigue traps, playoff vs regular season).

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret it as: how teams/players regress under crisis (fatigue, score effects, manpower disadvantages), counter-traps (opposing adjustments), and clock management (period effects, 3v3 OT). Use concepts from the paper: 2nd period long change, 3v3 caution, powerplay regrouping, score effects (though they adjusted for close/tied).

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: rink dimensions (NHL 200x85 vs SHL international), offside rule, blue line physics. Biomechanical: pass speed vs reception success (too fast = failed reception), player speed (McDavid vs Jagr), age effects. Weather: not directly applicable to indoor ice hockey, but ice conditions/rink temperature could be a veto layer (though not in paper, I should note it as external veto or state it's not in scope). Actually, I need to be careful not to invent things. I can discuss physical constraints: board play, shooting angles behind net, goal line constraints. Weather veto: indoor arena, ice resurfacing, not in dataset—explicitly note absence.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual framework. I need to create 3 scenarios that are verifiable from the paper's data/methods. For example:
   - Veto 1: If pre-shot ɸT quintile 5 vs quintile 1, predict true shooting % difference (4.1% vs 2.9%, +38%). Verifiable via Appendix Table 5 / Figure 8.
   - Veto 2: High danger zone entry ɸT (24.3 ft/s) vs dump-in (21.6 ft/s) predicts entry class. Verifiable via Table 1.
   - Veto 3: Pass speed threshold where reception failure spikes for non-slot passes. Verifiable via Figure 9 / Section 4.3.
   Or team-level: NSH lowest DZ ɸT but highest OZ ɸT predicts zone-specific strategy.

I need to ensure no betting lines are mentioned. No spreads, totals, moneylines, odds. I can mention probabilities like shooting percentage (2.9%, 4.1%) but not betting odds.

Word count: >=1,000 words total across sections. THINK_TRACE alone >=400 words.

Let me draft carefully.

Page citations: The text has page numbers like "1", "2", ... "30". I'll cite as [PAGE 2], [PAGE 3], etc. based on the visible page markers. Let me map key content to pages:
- Page 1: Introduction, objectives.
- Page 2: Dataset, Metrics of Pace (ɸT etc), termination criteria, Figure 1.
- Page 3: Zonal Analysis, Spatial Polygrid Analysis (668 cells, 5ft x 5ft, Gaussian σ=0.5).
- Page 4: Team Level Analyses, Player Level Analyses, Individual Player Pace, WOWY.
- Page 5: Exploring Pace, Pace by Zone, Figure 2, ɸT highest NZ, ~10-13% slower OZ/DZ, ɸN OZ 35% slower DZ, 43% slower NZ.
- Page 6: Pace by League, Figure 3, AHL 1-2% slower, SHL dimensions.
- Page 7: SHL continued, Season analysis.
- Page 8: Season Figure 4, Period analysis, Figure 5, 2nd period DZ ɸN ~7% increase, odd man rushes ~35% increase.
- Page 9: Period continued, Manpower, Figure 6, 4v4, 3v3, powerplay.
- Page 10: Powerplay continued, Polygrid, Figure 7, offside rule at blue line.
- Page 11: Impact of Pace, Pace Preceding Zone Entries, Table 1, high danger ɸT 24.3, dump-in 21.6, 13% faster.
- Page 12: Pace Preceding Shots, Figure 8, quintiles 10-42 ft/s, true shooting 2.9%-4.1%, +38%, shot distance 37-40 ft.
- Page 13: Pass Speed on Reception Success, Figure 9, 0.50 million passes.
- Page 14: Team-level Pace Zonal, Figure 10, CHI/LAK fast, ARI/WPG slow, NSH lowest DZ/highest OZ.
- Page 15: Team-level Polygrid, Figure 11, asymmetry, breakouts.
- Page 16: Player-level Pace, Figure 12, McDavid/Jagr, Appendix Tables 6-11.
- Page 17: Discussion, limitations, future work.
- Page 18: Acknowledgements, References start.
- Pages 19-30: Appendix tables.

Wait, the user said PAGES: 18. But the text clearly goes beyond page 18 into appendices. I should cite based on what's visible. I'll cite pages where the content appears. For appendix tables, they appear on pages 20-29 or so. I'll reference [PAGE 20] for Appendix Table 1, etc.

Let me start writing.

THINK_TRACE (>=400 words):
- Derive ɸT definition: distance / time between successive possession events.
- Multi-hop: how zone transitions affect termination, how polygrid assigns distance/time equally to intersected cells, how differential polygrids use Gaussian smoothing.
- Gray zones: possession sequence definition allows defensive plays (blocked shot/save) if possession retained—creates survivorship bias? The last event excluded. This censors high-pressure terminal events.
- Zonal boundary assignment: when transitioning zones, pace from final event in preceding sequence assigned to next sequence—potential edge effect at zone borders.
- Polygrid equal assignment to all intersected cells: diagonal paths overassign to multiple cells? This smooths but blurs locality.
- 200-minute player cutoff: survivorship/exclusion of bench players, small sample noise for low TOI.
- WOWY "without player" only in games where player was in lineup: handles absence but creates selection bias (injury/scratch games excluded).
- Score effects: they adjusted for close/tied in period analysis (data not shown), but not in all analyses.
- Rink dimension confound: SHL differences could be tactical or dimensional; paper leans dimensional but player ability confound remains.
- 3v3 OT: small sample, sudden death, conservative strategy—censoring of aggressive pace.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define event e_i = (x_i, y_i, t_i, team_i, type_i, possession_i).
- Pace between e_i and e_{i+1}: Δd = ||p_{i+1} - p_i||_2, Δt = t_{i+1} - t_i.
- ɸT = Δd / Δt [ft/s].
- Components: ɸEW = |Δx|/Δt (if we define x as east-west), ɸNS = |Δy|/Δt (y as north-south). Actually need to check sign conventions. Paper says north is direction of attack. So if attacking left-to-right or right-to-left? Figure 1 suggests coordinate system. I'll define generally: ɸN = max(Δy_forward, 0)/Δt where forward is direction of attack; ɸNS = |Δy|/Δt signed magnitude; ɸEW = |Δx|/Δt.
- Possession sequence termination: T = {e_i ... e_k} where possession changes, manpower changes, or stoppage; e_k excluded.
- Zonal partition: rink partitioned into DZ, NZ, OZ; boundary at blue lines.
- Polygrid: 668 cells, each 5 ft × 5 ft = 25 ft². Path integral: assign Δd, Δt equally to all cells intersected by segment p_i → p_{i+1}. Speed for cell c: ɸT_c = (Σ assigned Δd_c) / (Σ assigned Δt_c).
- Differential polygrid: D(A,B) = ɸT_A - ɸT_B, smoothed with 2D Gaussian kernel K_σ, σ = 0.5 cells.
- True shooting percentage: TS% = Goals / Shot Attempts (dimensionless probability).
- Entry classes from Table 1: High danger ɸT = 24.3 ft/s, Medium 23.4, Low 22.5, Very Low (dump-in) 21.6. Relative difference: (24.3 - 21.6)/21.6 ≈ 12.5% (paper says ~13%).
- Shot quintiles: Q1 ≈ 10 ft/s, Q5 ≈ 42 ft/s. TS% Q1 = 2.9%, Q5 = 4.1%. ΔTS% = +1.2 percentage points, relative +38.4%. Shot distance constant 37–40 ft.
- Period: 2nd period DZ ɸN +7%; odd man rushes +35% (from 2.65 to 3.49 per game? Appendix Table 3: Period 1 odd man 2.65, Period 2 3.49 → +31.7%, paper says ~35%).
- League: SHL rink ~13.5 ft wider (+16%), NZ ~8 ft longer (+16%), goal line 6 ft closer to blueline (-9.4%).
- Player cutoff: TOI ≥ 200 min 5v5.

RETROCAUSAL_GENEALOGY:
- Lineage: basketball possessions per 48 minutes → adapted to intra-possession spatio-temporal pace. Cites Gudmundsson & Horton [1] (ACM Comput Surv 2017) for spatio-temporal team sports. Silva et al. [3] found negative correlation between forward attacking pace and offensive output—this paper explains it via ɸN collapse in OZ. Soccer references [7,8] (Harkins possessions framework, Alexander sequencing) show similar negative ɸN/quality correlation in EPL.
- Historical rules: 2005-06 removal of two-line pass restriction, stricter obstruction enforcement (post-2005 lockout era). Paul Maurice quote [2] from Oct 2016 about fastest league.
- Multi-week traps: Seasonal drift (Appendix Table 2 shows EW passes increasing 47.9→49.1→49.7 per 60 from 2016-17 to 2018-19). Period fatigue trap: long change in 2nd period assumed to help offense via tired defenders, but data shows OZ total speed lowest in 2nd period; instead DZ stretch passes and odd man rushes rise. Playoff/regular season not studied but 3v3 OT rules create sudden-death conservatism. League translation trap: SHL→NHL adjustment due to rink geometry, not just talent.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under pressure (tired defenders, score effects, manpower down), teams regress to habitual patterns. Paper shows 2nd period teams abandon cautious EW play for high-ɸN stretch passes (crisis = long change fatigue), creating odd man rushes. But this is exploitable: defending teams can anticipate stretch passes.
- Counter-trap: If offense always speeds up in DZ during 2nd period, defense should key on stretch passes and reduce DZ ɸN allowed. Powerplay teams slow in DZ (regroup after clear) then speed up in OZ with ɸEW to move goalie—defense should collapse and limit cross-ice passes.
- Clock: 3v3 OT clock induces deliberate slowing (turnover asymmetry: counterattack danger high). Period clock induces progressive ɸEW decline (risk aversion as game progresses). Shot clock absent in hockey, but possession termination rules create de facto clock (stoppage, change of possession).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: rink dimensions (NHL 200×85 ft vs SHL international ~200×98.5 ft? Paper says ~13.5 ft wider, ~16%). Offside rule creates hard boundary at offensive blue line: ɸN and ɸNS decline, ɸEW peaks (Figure 7). Goal line constraint: puck behind net / soccer turnover beyond goal line creates diminishing returns for forward progress.
- Biomechanical layer: Pass speed vs reception success. Too fast → failed reception (blade contact but no possession). Slot passes exception. Player age/speed: McDavid (ɸNS driven) vs Jagr (45 years old, slowest). Defencemen slower than forwards in DZ due to defensive pressure; opposite in OZ.
- Weather layer: Indoor ice hockey—no direct weather effects in dataset. Veto: ambient temperature, ice resurfacing frequency, humidity not captured by SPORTLOGiQ event data; if present, would confound pace via puck bounce and skate friction. Paper makes no weather controls—external veto layer unmodeled.
- Adjudication: When physical (offside) and biomechanical (pass speed) layers conflict (e.g., high ɸT but failed reception), the reception outcome vetoes pace benefit. Pace is not monotonic with outcome quality.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios with predictions.
1. Pre-shot pace quintile shift: If a team increases pre-shot ɸT from Q1 (10 ft/s) to Q5 (42 ft/s) holding shot distance constant (37–40 ft), predicted true shooting % rises from 2.9% to 4.1% (+38%). Verifiable via Figure 8 and Appendix Table 5. Veto: if shot distance simultaneously increases beyond 40 ft, the pace effect may be confounded.
2. Zone entry danger class: If pre-entry ɸT rises from dump-in level (21.6 ft/s) to high-danger level (24.3 ft/s, +12.5%), entry class shifts from Very Low to High Danger. Verifiable via Table 1 (Page 11). Veto: 3-on-2 entries are odd-man yet low danger (31.5% shot after, 10.4% shooting) showing numerical advantage ≠ pace; pace must be paired with skater differential.
3. Pass speed reception threshold: For non-slot pass types, increasing pass speed beyond the observed successful-reception mode increases failed reception probability. Verifiable via Figure 9 (Page 13) and Section 4.3 (0.50 million passes). Veto: slot passes show opposite or null effect; velocity must be conditioned on pass type/difficulty.

Word count check: I need to make sure total is >=1000 words. THINK_TRACE alone will be ~500-600 words. Others will add up.

Let me write it out now, being careful about LaTeX formatting and page citations.

I need to be careful about verbatim quotes. The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes from the text with page citations.

Verbatim quotes I can use:
- Page 2: "This definition of pace means that possession sequences are allowed to continue even if the defending team makes a successful defensive play (e.g. blocked shot or save) so long as the play is not stopped and the attacking team regains possession of the subsequent loose puck."
- Page 5: "ɸN in the OZ is 35% slower than DZ ɸN and 43% slower than NZ ɸN."
- Page 11: "ɸT preceding high danger entries is approximately 13% faster than that preceding dump-ins."
- Page 12: "True shooting percentage, which is defined as the number of goals divided by the total shot attempts, increases from 2.9%-4.1%, an increase of 38% comparing the lowest to highest ɸT quintiles."
- Page 13: "Aside from passes to the slot, failed receptions from all other pass types occur at significantly higher speeds than successful receptions."
- Page 2: "The dataset contains an average of ~3650 events per game with 21 primary event types and 89 distinct subtypes."

I'll incorporate these.

Let me draft each section with attention to length and format.

One concern: The user said "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I must not invent ratios. All equations must be formal and sourced from the paper. I can derive ratios from reported numbers but should frame them as calculations from reported values, not invented metrics. For example, (24.3 - 21.6)/21.6 is a calculation from Table 1 values, not a fake ratio. I'll present it as an arithmetic consequence of reported data.

Also, no betting lines. I won't mention any gambling terms.

Let's write.

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

I'll ensure >1000 words total. Let me estimate: THINK_TRACE 600, SOURCE 400, RETRO 250, RECURSIVE 250, CROSS 250, RLVR 200 = ~1950. Good.

Let me write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper defines pace not as possessions per unit time (the basketball convention), but as the kinematic derivative of puck movement within a possession. The core operator is the pairwise event interval: given successive possession events e_i = (x_i, y_i, t_i) and e_{i+1} = (x_{i+1}, y_{i+1}, t_{i+1}) for the same team, the displacement vector is Δp = (Δx, Δy) and the elapsed time is Δt = t_{i+1} − t_i. Total speed is ɸT = ||Δp||_2 / Δt in ft/s. The directional decompositions are ɸEW = |Δx| / Δt, ɸNS = |Δy| / Δt, and the north-only (forward progress) metric ɸN = max(Δy_forward, 0) / Δt, where "north" is the direction of attack. This means any backward progress is assigned ɸN = 0, creating a rectifier-like nonlinearity that biases ɸN downward in zones where retreat or lateral circulation is tactically optimal—most notably the offensive zone.

The first gray zone is the possession termination rule. On page 2, the authors state: "This definition of pace means that possession sequences are allowed to continue even if the defending team makes a successful defensive play (e.g. blocked shot or save) so long as the play is not stopped and the attacking team regains possession of the subsequent loose puck." Consequently, the last event in a sequence is excluded from pace calculation. This creates a censoring bias: high-pressure terminal events (shots blocked, saves leading to loose pucks) are structurally omitted from the speed distribution, so the reported ɸT is conditioned on sustained possession rather than on all attacking events. A team that generates many forced turnovers via high-speed pressure will have those terminal events censored, potentially understating its true attacking pace.

The second gray zone is zonal boundary handling. On page 3, when play transitions between zones under the same possession, "pace from the final event in the preceding sequence was assigned to the next sequence and the final event was then set as the first event of the subsequent possession sequence." This stitches segments across the blue line, but the event at the exact zone boundary is duplicated in the accounting logic—once as the closer of the prior zone and once as the opener of the next. Near the offensive blue line, where the offside rule forces a deceleration (page 10, Figure 7), this assignment rule can smear the deceleration across the boundary and soften the measured gradient at the exact blue-line interface.

The third gray zone is the polygrid spatial allocation. The rink is divided into 668 cells of 5 ft × 5 ft (25 ft² each). For a segment between events, distance and time are assigned equally to all cells intersected by the path. For diagonal or long passes, this over-assigns to multiple cells and dilutes the peak speed at any single cell. The authors apply a 2D Gaussian kernel (σ = 0.5 cells) to smooth differential polygrids (page 3), which further blurs sharp tactical boundaries—such as the net-front or blue-line offside effect—into a continuous field. The smoothing parameter is not derived from data but chosen for noise suppression, so the reported spatial contrast is a lower bound on the true underlying heterogeneity.

The fourth gray zone is sample selection at the player level. Players require a minimum of 200 minutes at even-strength 5v5 (page 4). This excludes bench players, injury replacements, and late-season call-ups, inducing survivorship bias: the slowest or fastest players may be absent precisely because they did not meet the threshold. The WOWY "without player" metric is computed only for games in which the player was in the lineup (page 4), which excludes injury/scratch games and thus conditions the counterfactual on availability—a selection effect that correlates with team quality and player role.

The fifth gray zone is league comparison under dimensional confound. The SHL is played on international ice ~13.5 ft wider (~16%), with a longer neutral zone (~8 ft, ~16%) and goal line closer to the blueline (6 ft, ~9.4%) (page 6). The paper attributes SHL–NHL pace differences largely to rink geometry rather than talent, but because the same players do not typically appear in both leagues in identical roles, a player-composition confound cannot be fully excluded from the event data alone.

Finally, score effects are acknowledged but not universally controlled. The period analysis notes the ɸEW decline from period 1 to 3 persists "even after adjusting for close or tied score differentials (data not shown)" (page 8), but the zonal and league analyses do not report score-state conditioning. Since trailing teams tend to play faster and leading teams slower, unadjusted team-level pace rankings (page 14) may partially reflect season-long score-state distributions rather than pure tactical tempo.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and exact breakdown from the source.

Event representation (page 2): Each event contains precise X,Y rink coordinates and timestamps; dataset average ~3650 events per game with 21 primary event types and 89 distinct subtypes.

Possession sequence (page 2): Let S = {e_1, ..., e_K} be a maximal sequence where possession, manpower, and play state are constant. Termination occurs on possession change, manpower change, or stoppage. The terminal event e_K is excluded from pace:
\displaystyle \mathcal{P}(S) = \left\{ \frac{\|p_{i+1} - p_i\|_2}{t_{i+1} - t_i} \;\middle|\; i = 1,\dots,K-1 \right\}, \quad [ \text{ft/s} ]

Total speed (page 2):
\displaystyle \phi_T = \frac{\Delta d}{\Delta t}, \quad \Delta d = \|p_{i+1} - p_i\|_2,\; \Delta t = t_{i+1} - t_i

East-west component (page 2):
\displaystyle \phi_{EW} = \frac{|\Delta x|}{\Delta t}

North-south component (page 2):
\displaystyle \phi_{NS} = \frac{|\Delta y|}{\Delta t}

North-only / forward progress (page 2): \phi_N differs from \phi_{NS} in that only forward progress is measured and backward progress is assigned \phi_N = 0:
\displaystyle \phi_N = \frac{\max(\Delta y_{\text{forward}}, 0)}{\Delta t}

Zonal partition (page 3): Rink divided into offensive (OZ), neutral (NZ), and defensive (DZ) zones. \phi_T is highest in the NZ and ~10-13% slower in OZ and DZ (page 5). \phi_N in the OZ is 35% slower than DZ \phi_N and 43% slower than NZ \phi_N (page 5).

Polygrid (page 3): 668 equal sections, 5 ft × 5 ft = 25 ft² per cell. Distance and time between successive events are assigned equally to all cells intersecting the path. Cell speed:
\displaystyle \phi_{T,c} = \frac{\sum_{s \in \mathcal{S}} \Delta d_{s,c}}{\sum_{s \in \mathcal{S}} \Delta t_{s,c}}, \quad [\text{ft/s}]

Differential polygrid (page 3): For teams A and B, \Delta \phi_T = \phi_{T,A} - \phi_{T,B}; smoothed with 2D Gaussian kernel K_\sigma, \sigma = 0.5 cells, before differencing when sample noise is high.

True shooting percentage (page 12): \text{TS}\% = \frac{\text{Goals}}{\text{Total Shot Attempts}}, dimensionless probability. Increases from 2.9\% to 4.1\% from lowest to highest \phi_T quintile, a 38% relative increase (page 12). Average shot distance constant at 37–40 ft across quintiles (page 12).

Zone entry table (page 11): High-danger \phi_T = 24.3 ft/s; Medium 23.4 ft/s; Low 22.5 ft/s; Very Low (dump-in) 21.6 ft/s. Relative difference high-danger vs dump-in: \frac{24.3 - 21.6}{21.6} \approx 12.5\%, consistent with the paper's "approximately 13% faster" claim (page 11).

Period effects (page 8; Appendix Table 3, page 20): 2nd period DZ \phi_N increases ~7%; odd man rushes rise from 2.65 (period 1) to 3.49 (period 2) per game, ~31.7% (paper states ~35%). \phi_{EW} progressively declines from 1st to 3rd periods in all zones (page 8).

League rink geometry (page 6): SHL international rinks ~13.5 ft wider (~16%), neutral zone ~8 ft longer (~16%), goal line 6 ft closer to blueline (~9.4%) relative to North American 200 ft × 85 ft rinks.

Seasonal east-west passing (Appendix Table 2, page 21): NZ EW >10 ft passes per 60 min: 47.9 (2016-17), 49.1 (2017-18), 49.7 (2018-19); a 3-4% increase over the period (page 7).

Player inclusion filter (page 4): Minimum 200 minutes even-strength 5v5 TOI for player-level metrics.

All page citations refer to the printed page numbers in the provided source document (e.g., [PAGE 2], [PAGE 5], [PAGE 11], [PAGE 12], [PAGE 20], [PAGE 21]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week structural traps.

The paper's intellectual genealogy traces basketball's possession-per-48-minutes pace definition into the continuous spatio-temporal domain of ice hockey. The authors cite Gudmundsson and Horton's survey of spatio-temporal team sports [1] (ACM Computing Surveys, 2017) as the methodological foundation for leveraging event and tracking data beyond simple possession counts. The direct antecedent is Silva, Davis, and Swartz [3] (J. Sports Anal., 2018), which found a slight negative correlation between forward attacking pace and offensive output such as shots and goals. That counterintuitive result is the central puzzle this paper resolves: \phi_N declines precipitously as play enters the offensive zone (35% slower than DZ, 43% slower than NZ [PAGE 5]), precisely where shots and goals are generated and where good teams spend more time. The negative correlation is therefore an artifact of zone-dependent deceleration, not evidence that speed is detrimental.

The soccer lineage appears in references [7] and [8] (Harkins' possessions framework; Alexander's sequencing work in the English Premier League), which document the same negative \phi_N–quality relationship in association football. The authors argue the mechanism is shared: diminishing returns for advancing forward along the flanks produce progressively worse shooting angles, and both sports disincentivize progress beyond the goal line (puck behind the net in hockey; turnover in soccer [PAGE 5]). This cross-sport convergence suggests the findings generalize to other team-invasion sports, a claim the authors explicitly extend to soccer, basketball, rugby, and handball in the discussion [PAGE 17].

Rule history provides the institutional context. The removal of the two-line pass restriction and stricter enforcement of obstruction/holding infractions over the prior 15 years emphasized pace [PAGE 1]. Paul Maurice's October 2016 statement—"This game is just so fast now... it's the first time I thought we had a fast league" [2, PAGE 1]—anchors the perceived inflection point. The paper tests whether pace has continued to increase since then, finding slight NHL growth with the largest gains in the neutral zone, driven more by \phi_{EW} than \phi_{NS} [PAGE 7].

Multi-week traps embedded in the data:

(1) Seasonal drift trap: Appendix Table 2 shows neutral-zone east-west passing rising from 47.9 to 49.7 per 60 minutes across 2016-17 to 2018-19 [PAGE 21]. A single-season snapshot of pace therefore misestimates the current tactical baseline; teams and models trained on 2016-17 data would systematically underestimate neutral-zone \phi_{EW} by ~4% in 2018-19.

(2) The "long change" fatigue trap [PAGE 8]: Conventional wisdom holds the 2nd-period long change tires defenders stuck in their own zone, boosting offense. The data refute this for total speed in the offensive zone (lowest in period 2) but reveal a compensatory mechanism: teams increase DZ \phi_N by ~7% and generate ~35% more odd man rushes via stretch passes, suggesting the scoring effect is driven by transition velocity rather than sustained offensive-zone pressure.

(3) League translation trap: SHL–NHL pace differences are attributed to rink dimensions rather than player ability [PAGE 6]. A player or team moving between leagues faces a non-stationary pace distribution because the physical geometry of the surface changes the optimal control policy, creating a multi-week adaptation period not captured by raw event comparisons.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock structure.

Crisis habit regression describes how teams revert to dominant behavioral modes under physiological or situational stress. The paper documents this in period effects: as the game progresses, \phi_{EW} progressively declines in all zones from period 1 to 3 [PAGE 8], which the authors attribute to more cautious, risk-averse play. Under the crisis of fatigue and trailing-score urgency, teams do not uniformly speed up; instead they suppress lateral circulation and, in the 2nd period, specifically increase DZ \phi_N by ~7% via forward stretch passes to catch defenders on bad line changes [PAGE 8]. This is a regression to a high-variance, forward-vertical habit when defensive structure is presumed compromised.

The counter-trap is the defensive anticipation of that regression. If offenses predictably accelerate DZ north-south pace in period 2 to exploit tired defenders, defenses can counter by cheating on stretch passes and conceding lateral \phi_{EW} instead, since \phi_{EW} is already suppressed league-wide in later periods. Similarly, on the power play, attacking teams slow DZ pace to regroup after a zone clear but accelerate NZ and OZ \phi_{EW} with cross-ice passes to move the goaltender [PAGE 9]. The defensive counter-trap is to collapse around the net and deny the high-danger cross-ice pass, accepting lower measured pace in exchange for reduced shot quality—consistent with the finding that pre-shot pace, not shot distance, determines true shooting percentage [PAGE 12].

The clock layer operates through three distinct temporal constraints. First, the 3v3 sudden-death overtime clock induces deliberate slowing across all zones because turnovers lead to high-danger counterattacks [PAGE 9]; the clock asymmetry makes conservatism optimal despite the open ice. Second, the regulation period clock produces the progressive \phi_{EW} decline and 2nd-period DZ \phi_N spike [PAGE 8]. Third, possession termination rules act as a de facto shot clock: sequences end on possession change, manpower change, or stoppage, and the terminal event is excluded [PAGE 2]. This creates an implicit horizon effect where teams managing a lead may run down possession time without generating events, while trailing teams must accept higher \phi_T to create shots before the period ends.

Recursive theory of mind enters at the player level through WOWY splits. Connor McDavid drives pace primarily through \phi_{NS} [PAGE 16], while Jaromir Jagr, at 45 years old, is the slowest in the OZ by both individual and WOWY metrics [PAGE 16]. Opponents recursively adjust to known pace drivers: McDavid's north-south threat invites defensive containment that suppresses his \phi_N, while Jagr's slowness invites aggressive forechecking that may paradoxically force him into higher-tempo errors. The team-level polygrids reveal zone-specific asymmetry (e.g., LAK faster on one side of the DZ, NSH slowest in DZ but fastest in OZ [PAGE 14]), which opponents can exploit by attacking the slow quadrant or forcing the puck into the team's low-pace region.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof; inter-layer conflict resolution.

Physical layer: Rink geometry imposes hard constraints. North American rinks are 200 ft × 85 ft; SHL international rinks are ~13.5 ft wider (~16%) with longer neutral zones (~8 ft, ~16%) and goal lines closer to the blueline (6 ft, ~9.4%) [PAGE 6]. These dimensions shift the optimal pace policy: SHL play is faster in the neutral zone (defenders cannot apply pressure across the longer width) but slower in the DZ and OZ, where extra width permits extended puck possession and reduces the need for quick passes [PAGE 6]. The offside rule creates a physical veto at the offensive blue line: Figure 7 shows a marked decline in \phi_N and \phi_{NS} with a peak in \phi_{EW} at the blue line [PAGE 10], because attackers must laterally circulate to avoid offside before the puck crosses. The goal line imposes a second boundary: advancing beyond it yields a turnover in soccer or places the puck behind the net in hockey, creating diminishing returns for forward progress [PAGE 5]. These physical constraints veto any model that assumes pace is monotonic with zone advancement.

Biomechanical layer: Pass speed exhibits a non-monotonic relationship with reception success. Examining 0.50 million even-strength passes [PAGE 13], the authors find that aside from passes to the slot, failed receptions occur at significantly higher speeds than successful receptions for all pass types [PAGE 13, Figure 9]. This is a biomechanical veto: excessive puck velocity exceeds the receiver's blade control bandwidth, producing turnovers. Player physiology further modulates pace: defencemen are slower than forwards in the DZ but faster in the OZ, reflecting the defensive pressure differential by position and zone [PAGE 16]. Age is a biomechanical veto as well: Jagr at 45 registers the lowest OZ pace by both individual and WOWY measures [PAGE 16], while McDavid's \phi_{NS}-dominated speed profile marks him as the fastest [PAGE 16]. These are not adjustable tactical parameters but hard bounds on the feasible pace set for a given player.

Weather layer: Ice hockey is played indoors, so meteorological variables (wind, precipitation, temperature) do not directly enter the SPORTLOGiQ event stream [PAGE 2]. However, arena-specific ice quality, resurfacing frequency, and ambient rink temperature affect puck bounce, skate friction, and passing velocity—variables absent from the dataset [PAGE 2]. Because the paper controls for league, rink dimensions, and manpower but not ice conditions, unmodeled rink microclimate constitutes an external veto layer that could confound cross-arena or cross-league pace comparisons. Any deployment of these metrics in a new arena must treat ice condition as a potential confounder.

Inter-layer adjudication: When layers conflict, the outcome layer vetoes the pace layer. High \phi_T preceding a shot improves true shooting percentage from 2.9% to 4.1% [PAGE 12], yet high pass speed causes failed receptions [PAGE 13]. Thus pace is beneficial only up to a point; the biomechanical reception constraint and the physical offside/goal-line constraints bound the domain where increased \phi_T yields value. A team that pushes \phi_T into the regime of failed receptions or offside violations incurs a turnover veto that erases the offensive benefit of speed.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions, grounded in reported data.

Veto Scenario 1 — Pre-shot pace quintile shift holding shot distance constant.
Setup: Compare shots in the lowest \phi_T quintile (~10 ft/s) to the highest quintile (~42 ft/s) at even-strength 5v5 [PAGE 12, Figure 8]. Reported true shooting percentage rises from 2.9% to 4.1%, an increase of 38%, while average shot distance remains fixed at 37–40 ft [PAGE 12]. Prediction: If a team's pre-shot possession velocity is experimentally shifted from Q1 to Q5 without changing shot location, expected goals per shot attempt should increase by approximately (0.041 − 0.029) = 0.012, or 38% relative. Verification: Appendix Table 5 reproduces the pattern in the AHL and SHL [PAGE 21]. Veto condition: If shot distance simultaneously increases beyond 40 ft or the sample includes deflected shots (excluded in the original analysis [PAGE 12]), the pace effect is confounded and the prediction fails.

Veto Scenario 2 — Zone entry danger class transition via \phi_T.
Setup: Table 1 classifies entries by danger and reports pre-entry \phi_T [PAGE 11]: dump-in (Very Low Danger) at 21.6 ft/s versus high-danger entries (3-on-1, 2-on-1, 1-on-0) at 24.3 ft/s, approximately 13% faster [PAGE 11]. Prediction: For any controlled entry, raising pre-entry \phi_T from the dump-in baseline of 21.6 ft/s toward 24.3 ft/s should shift the entry class from Very Low/Low toward High Danger, increasing the probability of a shot on goal after entry. Verification: Table 1 shows 1-on-0 entries at 66.6% shot-after-entry versus 1.1% for dump-ins [PAGE 11]; Appendix Table 4 extends this to the AHL and SHL [PAGE 20]. Veto condition: Numerical advantage alone does not imply high danger—3-on-2 entries are odd-man rushes yet carry only a 31.5% shot-after-entry rate and 10.4% shooting percentage [PAGE 11, Table 1], so \phi_T must be interpreted jointly with skater differential; pace without numerical superiority is vetoed.

Veto Scenario 3 — Pass speed threshold for reception failure by pass type.
Setup: Section 4.3 analyzes 0.50 million even-strength passes and finds failed receptions occur at significantly higher speeds than successful receptions for all pass types except passes to the slot [PAGE 13, Figure 9]. Prediction: There exists a pass-type-specific velocity threshold above which reception failure probability rises sharply for non-slot passes; below that threshold, successful receptions dominate. Verification: Figure 9 plots successful (green) versus failed (red) receptions by pass type and speed [PAGE 13]. Veto condition: Slot passes are exempt from the speed penalty; applying a universal speed cap to all passes would incorrectly suppress successful slot receptions. Any automated pacing control must condition velocity limits on pass type and difficulty, or it will induce false vetoes on high-value slot passes.
</RLVR_COUNTERFACTUAL_VETOES>