---
source: "2018 A Markov chain analysis of NFL overtime rules - Renee Martin, Logan Timmons and Megan Powell.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6817
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided source paper (Markov chain analysis of NFL overtime rules). They have strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use real formalism from the paper: Markov chains, transition matrices, fundamental matrix N = (I - Q)^{-1}, absorbing probabilities, etc. Cite page markers [PAGE 95], etc. Need >=1000 words total across sections. Think trace >=400 words.

Need to be careful: The source text provided is a markdown rendering of a PDF with pages 95-105. I should cite [PAGE 95], [PAGE 96], etc. based on the page numbers visible in the text. The text starts at page 95 (abstract/intro), then 96, 97, 98, 99, 100, 101, 102, 103, 104, 105. I need to reference exact page markers and verbatim quotes where possible.

Let's structure:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss Markov chain modeling, state spaces, absorbing states, fundamental matrix, average length computation via possession duration (2:38), tie probabilities, MSD-10 estimation using first possession drive data and last 7 minutes data, AMSD assumptions (TD+0PT/1PT/2PT, down by 6/7/8, extra kick vs two-point conversion, 17% TD probability when down by 6-7 in last 3 minutes Q4), onside kick break-even derivation, sensitivity analysis (Table 11), playoff vs regular season approximations, equivalent strength assumption, neglecting kickoff time, data limitations (only 32 playoff OT games since 1958, estimated MSD-10 data), singularity regimes (Q invertible, absorbing states reachable, tie state vanishes in playoffs), gray zones (intentional clock management by Team A not modeled, strategy changes in 10-min OT, regulation data used for overtime, team strength equivalence, coin toss elect-not-to-receive rarity). Must be >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Define state vector, transition matrix P, canonical form P = [[Q, R], [0, I]].
- Fundamental matrix N = (I_Q)^{-1} = sum_{k=0}^∞ Q^k.
- Expected number of visits to transient states from start state i: N_{ij}.
- Absorbing probability matrix B = N R.
- Mean absorption time t = N 1 (column vector of ones), then multiply by mean possession length Δt_pos = 158 s (2 min 38 s) to get overtime length.
- For SD: Q_SD = [[0, p_NS], [p_NS, 0]]? Actually from Table 1: A Pos -> B Pos with NS; B Pos -> A Pos with NS. So Q = [[0, NS], [NS, 0]]. But Table 4 fundamental matrix shows 1.685 and 0.974, so not symmetric simple because NS includes EOG etc moved. We can present general.
- SD absorbing probs from Table 5: P(A Wins | A Pos) = 0.599, P(B Wins | A Pos) = 0.389, P(EOG Tie | A Pos) = 0.017.
- MSD: Table 2 states: A First Pos, B down by 3, A Pos, B Pos, A Wins, B Wins, EOG Tie. Q_MSD 4x4 transient. Table 6 N_MSD first row sums give average possessions.
- MSD results: average OT 7:37 (457 s), Team A wins 0.554, Team B 0.433, tie 0.013.
- MSD-10: Table 8 drive result distribution for first possession and last 7 minutes. Use first possession drive data for A First Pos row; last 7 minutes data for A Pos/B Pos rows. Table 9: A Wins 0.541, B Wins 0.346, Tie 0.112, average OT 6:54. Playoff no-tie: A Wins 0.595, OT 8:08.
- AMSD: Table 3 states include B down by 6/7/8. Assumptions: Team A always kicks XP after TD (no 2PT), so B down by 8 unachievable? Actually Table 3 includes B down by 8 column but text says unachievable. Table 10: A Wins 0.547, B Wins 0.439, Tie 0.014, OT 7:57. Sensitivity Table 11: minutes left 2-5, %FG, %TD, Team A Win, Team B Win, EOG Tie, OT Length.
- Onside kick: Table 12/14 break-even P(Recover). Equation: P(Recover) * P(Win|Recover) + (1-P(Recover))*P(Win|Do not recover) = P(B Wins, reg kick). Solve: P(Recover) = [P(B Wins, reg kick) - P(Win|Do not recover)] / [P(Win|Recover) - P(Win|Do not recover)]. Values: SD break-even 0.177, MSD 0.137, MSD-10 0.140, AMSD 0.121. League averages 13% (2010-2012) and 5.2% (2013-2015). P(B scoring after recovery) estimated = 0.193 + 0.281 + (0.105)(0.302) = 0.506.
- Page citations: [PAGE 95] abstract, [PAGE 96] intro and rule history, [PAGE 97] SD model and Table 1, [PAGE 98] MSD and AMSD tables, [PAGE 99] SD analysis Table 4/5, [PAGE 100] MSD analysis Table 7, MSD-10 Table 9, [PAGE 101] AMSD Table 10/11, [PAGE 102] onside kick Table 13/14, [PAGE 103] Table 15 summary and discussion, [PAGE 104] conclusion/future work, [PAGE 105] appendix tables.

Need to mention units: seconds, minutes, probabilities dimensionless [0,1], expected counts dimensionless.

Singularity/breakdown regimes: Q must be sub-stochastic with spectral radius <1 (transient states communicate to absorbing states with probability 1). If tie probability absorbed into transition (EOG Tie removed for playoffs), the chain changes; if p_NS = 1 (never score), chain never absorbs (singular I-Q). In MSD-10, estimated data from last 7 minutes introduces non-stationarity; if Team A intentionally runs clock, first possession length distribution shifts, violating i.i.d. possession length assumption Δt_pos = 158 s. In AMSD, assuming Team A always kicks XP removes TD+2PT branch, making B down by 8 transient probability zero; if teams go for 2, state space changes.

RETROCAUSAL_GENEALOGY: Historical lineage: M. Jones (2004) College Mathematics Journal, SD model using 2002 regulation drive data, first-to-six points, 6 possession limit, win probs 0.491/0.393, tie 0.116. C. Jones (2012) Mathematics Magazine, used 2008 regulation data to estimate OT, Team A wins 64% SD within 6 possessions, 52% MSD. Bialik (2003) compiled alternatives: auctioning, divide-and-choose. Che & Hendershott (2007) auctioning > divide-and-choose > SD. Winston (2009) Mathletics: move kickoff 5 yards back, Team A win prob SD 60% -> 55%. Brams & Sanderson (2012) bidding fairer than coin toss. Rule changes: pre-2010 SD (first to score TD/FG/safety wins), 2010-2011 playoffs MSD (first FG doesn't end game), 2012 regular season MSD, ties allowed after one 15-min period, playoffs continue 15-min periods until decision, 2017 shortened to 10 minutes. Cardinals-Packers 2016 Divisional Round catalyzed Buzinski proposal (both teams get at least one possession). Multi-week traps: using regulation drive data for overtime (Jones 2012 limitation this paper fixes by using OT-only data 2010-2015), insufficient playoff OT data (only 32 games since 1958) forcing regular season proxy, MSD-10 estimated from last 7 minutes of 2013-2016 (small data >8 min OT), AMSD based on regulation end-of-game drive data (down by 4-11 points, last 3 minutes Q4) not OT-specific, equivalent team strength assumption ignores home field (54.2% home advantage mentioned), coin toss elect-not-to-receive rarity (14 instances, 8 wins by non-receiving). These are multi-week/season data traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This section is about modeling coach/team decision recursion. Crisis habit regression: under pressure (end of game, down by 3-7), teams regress to conservative habits (kick XP rather than 2PT, kick FG rather than go for TD when down by 6-8 because FG still loses, punt on 4th down). Counter-trap: anticipating opponent's conservative regression, Team B when down by 3 after A's FG will only go for FG to tie (per paper assumption), Team A knowing B won't score TD may run clock. Clock: possession length average 2:38, 10-minute OT hard cap creates absorbing EOG Tie at t=600s; clock becomes an absorbing state competing with scoring states. Recursive theory of mind: Team A models Team B's model of Team A's first possession. If A scores TD, B knows A likely kicks XP (habit regression to XP), so B down by 7 will go for FG? No, FG loses. B down by 7 needs TD. Paper assumes B goes for extra kick to tie after TD when down by 7 (habit regression), not 2PT to win. This creates a stack: A assumes B kicks XP; B assumes A kicks XP; both converge to down-by-7 branch with tie via extra kick. But if B deviates (2PT), win prob shifts (Table 11 sensitivity). Clock counter-trap: in MSD-10, Team A may intentionally lengthen first possession to shrink B's time, an unmodeled strategic recursion. The paper neglects this (explicitly stated [PAGE 100]). Crisis habit regression appears in Table 11: as minutes left increase (2 to 5), %TD when down by 4-11 rises from 0.113 to 0.214, %FG from 0.030 to 0.036, showing end-of-game conservatism.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This is a bit of a stretch for a Markov chain paper, but need to address physical constraints that veto model assumptions. Physical layer: possession length limited by play clock (40 s / 25 s), number of plays per possession, field length 100 yards, ball physics, human running speed (~7-8 m/s), kickoff distance. Biomechanical: kicker FG success declines with distance (long FG in OT), fatigue across possessions, injury risk. Weather: wind affects kicking and passing, precipitation affects ball handling, temperature affects muscle performance. The paper uses league-average possession length 2:38 and aggregated drive results, ignoring weather and biomechanical variance. Veto conditions: if weather reduces FG probability below model p_FG, absorbing matrix B shifts; if possession length exceeds clock (clock management), mean Δt_pos not constant (violates fundamental matrix time calculation); if injuries remove key players, equivalent strength assumption fails (paper acknowledges [PAGE 104]). We can formulate veto proof: the Markov model is valid only when (i) transition probabilities are stationary over the overtime horizon, (ii) possession duration is i.i.d. with mean 158 s independent of score state, (iii) weather and biomechanical factors are averaged out. Veto: any exogenous shock that changes Q or Δt_pos mid-chain invalidates N and B. Exact singularity: if a state becomes non-transient (e.g., team cannot score due to weather, p_score = 0 forever), then I-Q singular (spectral radius = 1), no absorption, expected length infinite.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning Verifiable Reward? Or just "verifiable counterfactual vetoes". Need 3 scenarios that are verifiable/falsifiable, with predictions.
1. Scenario: Onside kick in OT. Model predicts break-even recovery 0.121-0.177 depending on format; league historical recovery 5.2-13%, below break-even. Veto: if a team recovers an onside kick in OT at rate > break-even (e.g., >0.177 under SD), the model's advice (don't attempt) is falsified. Prediction: Teams attempting onside kicks in OT under MSD-10 will win less than 40.9% of the time (P(B Wins, reg kick)=0.409 from Table 14? Actually MSD-10 P(B Wins, reg kick) = 0.409? Table 14 says MSD-10 P(B Wins, RegKick) = 0.409. Wait Table 14 row MSD-10: P(B Wins, RegKick)=0.409? Let me check text: Table 14 shows SD 0.389, MSD 0.433, MSD-10 0.409, AMSD 0.439. Yes. So prediction: if P(Recover) < 0.140, onside kick is a dominated strategy under MSD-10.
2. Scenario: 10-minute OT tie rate. Model predicts tie probability increases from <2% to 11.2% under MSD-10 [PAGE 100 abstract / Table 9]. Veto: in the first N regular-season games under 10-min OT, if observed tie rate is not statistically distinguishable from ~11.2% (e.g., 95% CI excludes 0.112), the estimated drive distribution from last 7 minutes is invalid. Prediction: tie rate converges to 0.10-0.12 as sample grows.
3. Scenario: AMSD fairness. Model predicts Team A win prob 0.547 vs Team B 0.439, OT length 7:57 [PAGE 101 Table 10]. Veto: if AMSD is implemented, observed Team A win probability within 0.50 ± 0.02 would falsify the assumption that Team A always kicks XP and Team B scores TD only 17% when down by 6-7. Prediction: under AMSD, Team A win prob remains >0.53 and OT length <8:00 because the model overestimates B's ability to overcome a TD deficit.

Need to ensure no betting language. Avoid "odds", "spread", "moneyline", "total". Use probability, win percentage, tie rate, expected length.

Need exact page markers and verbatim quotes. I will quote key lines and cite page numbers. Let's pick some verbatim quotes:

- [PAGE 95]: "the probability of the team possessing the ball first winning decreased from 59.9% to 55.4%."
- [PAGE 95]: "we predict the 10-minute overtime change will result in the team possessing the ball first winning 54.1% of the time and the probability of a game ending in a tie increasing to 11.2% from under 2% in the current 15-minute overtime."
- [PAGE 96]: "Then in 2017, the league changed the length of an overtime period from 15 minutes to 10 minutes."
- [PAGE 97]: "The sudden death rules state that whichever team scored first in any way wins..."
- [PAGE 98]: "we consider the probability of transitioning into EOG Tie in the first two possessions to be zero."
- [PAGE 99]: "From the Fundamental Matrix (Table 4) for the SD transition matrix, we have that the average number of possessions during overtime is the sum of the first row..."
- [PAGE 99]: "Team A wins the game, on average 59.9% of the time, Team B wins 38.9% of the time, and the game ends in a tie 1.7% of the time."
- [PAGE 100]: "Similar to SD, we find the average length of overtime to be the sum of the first row of the Fundamental Matrix (Table 6) multiplied by the average length of possessions, which gives 7 minutes 37 seconds."
- [PAGE 100]: "Table 9 ... Team A winning 54.1% of the time and Team B winning 34.6% of the time..."
- [PAGE 100]: "It is expected that more games will end in a tie in upcoming seasons with a shorter OT and our model predicts that probability of the game ending in a tie increasing from under 2% to over 11%."
- [PAGE 101]: "The result is that Team A wins 54.7% of the time, Team B wins 43.9% of the time, and the game ending in a tie 1.4% of the time with an average of 7 minutes 57 seconds of overtime."
- [PAGE 102]: "we estimate the probability of Team B scoring after recovering an onside kick to be 0.193 + 0.281 + (0.105)(0.302) = 0.506."
- [PAGE 102]: "The break-even recovery probabilities are all higher than the league onside kick recovery averages of 13% in 2010–2012 and 5.2% in 2013–2015."
- [PAGE 100]: "One aspect of OT that may change that we do not consider, is Team A intentionally increasing the length of their first possession to limit the time Team B has to score on their first possession."
- [PAGE 104]: "we assume team strength is equivalent and use averages for the entire league for our analyses."

Word count: Need >=1000 words across sections. Think trace alone >=400. I'll aim for ~1300-1600 total.

Need LaTeX formatting for equations. Use formal equations.

Let's draft carefully.

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

Check for betting words: avoid "odds", "spread", "moneyline", "total", "line", "juice", "vig", "handicap". Use "probability", "win rate", "tie rate", "expected value" maybe? Expected value is fine but avoid betting context. Use "mean absorption time". "Probability units: dimensionless [0,1]". "Time units: seconds (s), minutes (min)."

Let's write THINK_TRACE first. Need >=400 words.

THINK_TRACE content outline:
- Multi-hop derivation: from raw drive counts (Tables 17-18) to transition probabilities (Tables 21-24), to fundamental matrix N=(I-Q)^{-1}, to absorbing matrix B=NR, to mean absorption time t=N1 scaled by Δt_pos=158 s.
- Example SD: Q from Table 21, N Table 4 first row [1.685, 0.974], sum = 2.659 possessions? Actually sum of first row: 1.685+0.974=2.659. Times 2:38 (158s) = 420 seconds = 7 minutes exactly (420s = 7:00). Paper says 7 minutes 1 second (421s). Slight rounding. Mention this.
- SD absorbing probs Table 5: 0.599/0.389/0.017.
- MSD: Q includes special first two rows, N Table 6 first row sum = 1 + 0.322 + 0.636 + 0.937 = 2.895 possessions? Times 158s = 457.4s = 7:37. Paper says 7:37. Good.
- MSD absorbing Table 7: 0.554/0.433/0.013.
- MSD-10: uses hybrid Q: row A First Pos from first possession data (Table 23 first row: FG 0.213, NS+EOG 0.607, TD 0.180); rows A Pos/B Pos from last 7 minutes data (Table 23: Punt 0.200, FG 0.320, TD 0.040, etc., mapped to transitions). Absorbing Table 9: 0.541/0.346/0.112. Mean OT 6:54.
- AMSD: expanded state space with B down by 6/7/8; assumptions: A always kicks XP (no 2PT), B down by 8 unreachable; B TD prob 0.17 when down by 6-7 from regulation Q4 data; B always kicks XP when down by 7 after TD. Absorbing Table 10: 0.547/0.439/0.014; OT 7:57.
- Gray zones / breakdown: (1) Equivalent team strength assumption ignores home-field and talent gaps [PAGE 104]; (2) possession length treated as i.i.d. constant mean, but clock management and game state can correlate with duration [PAGE 100]; (3) MSD-10 uses regulation last-7-minutes drive mix as proxy for a shortened OT, non-stationarity; (4) AMSD uses regulation end-of-game drive data (down 4-11, last 3 min Q4) for B's TD probability, not OT-specific [PAGE 101]; (5) tie state removed for playoff models by reclassifying EOG ties as possession changes, minimal because few ties [PAGE 101]; (6) onside kick break-even assumes P(Win|Recover)=0.895 constant across formats [PAGE 102 Table 14], which may not hold if field position after recovery differs; (7) spectral radius of Q must be <1; if p_score -> 0 in all transient states, I-Q singular, no absorption, infinite expected OT.
- Singularity regimes: (a) p_NS=1 for all non-absorbing transitions -> Q stochastic, spectral radius 1, N diverges; (b) if tie state is sole absorbing state and reachable with prob 1, still absorption but win probs zero; (c) if Team A never scores and Team B never scores, chain oscillates between A Pos and B Pos forever (SD) or cycles in MSD first states until clock expires.
- Verbatim quotes with citations.

Need to ensure citations like [PAGE 99] etc.

Now SOURCE_OPERATORS_AND_EQUATIONS:
- Define canonical form, N, B, t.
- Δt_pos = 2 min 38 s = 158 s.
- Mean OT length L = (1^T N_{row start}) * Δt_pos.
- SD Q matrix from Table 1/21.
- MSD Q.
- AMSD Q structure.
- Onside break-even equation solved for P(Recover).
- Sensitivity table parameters.
- Cite pages for each.

RETROCAUSAL_GENEALOGY:
- Cite Jones 2004 [PAGE 96], Jones 2012 [PAGE 96], Bialik 2003 [PAGE 96], Che & Hendershott 2007 [PAGE 96], Winston 2009 [PAGE 96], Brams & Sanderson 2012 [PAGE 96].
- Rule timeline: pre-2010 SD [PAGE 96], 2010-2011 playoff MSD [PAGE 96], 2012 regular season MSD [PAGE 96], 2017 10-min [PAGE 96].
- Cardinals-Packers 2016 [PAGE 96], Buzinski [PAGE 96].
- Data traps: regulation vs OT data [PAGE 96], playoff sample n=32 since 1958 [PAGE 100], MSD-10 estimated from last 7 minutes [PAGE 100], AMSD from regulation Q4 drives [PAGE 101], 14 elect-not-to-receive instances [PAGE 97].
- Multi-week traps: small samples across seasons, changing rules mid-sample.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: XP vs 2PT, FG vs TD when down by 6-8 (FG loses), Table 11 shows minutes-left effect on %FG/%TD [PAGE 101].
- Counter-trap: A models B's conservative reaction; B models A's clock management; paper explicitly omits Team A intentional clock drain [PAGE 100].
- Clock: hard cap at 600 s creates EOG Tie absorbing state; possession length 158 s average; expected number of possessions bounds max clock.
- Stack of beliefs: A assumes B kicks XP after TD (down by 7 tie), B assumes A kicks XP; if either deviates, absorbing matrix B changes (Table 11 sensitivity).
- Prediction: under time pressure, teams revert to league-average end-of-game habits, not OT-specific optimization.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: field 100 yards, play clock, kickoff distance, possession length bounded by clock.
- Biomechanical: kicker leg fatigue, FG distance distribution, quarterback decision time, injury.
- Weather: wind, precipitation, temperature affect p_FG, p_TD, p_NS.
- Veto conditions: stationarity of Q, i.i.d. possession durations, equivalent strength.
- Exact singularity: if weather reduces scoring to zero (p_FG=p_TD=p_S=0), Q becomes stochastic with spectral radius 1, N undefined/infinite, model vetoed.
- If possession length correlates with score state (e.g., trailing team hurries), Δt_pos not constant, L calculation biased.
- Paper's assumptions are league-average, so any game-specific weather/biomechanical outlier vetoes the model output for that game.

RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios with predictions, all verifiable, no betting.
- Scenario 1: Onside kick recovery rate vs break-even. Prediction: under MSD-10, if P(Recover) < 0.140, onside kick lowers Team B win probability below 0.409 (regular kickoff baseline). Verifiable via tracking OT onside kicks.
- Scenario 2: MSD-10 tie rate. Prediction: observed regular-season tie rate under 10-min OT converges to 0.112 ± sampling error; if 95% CI excludes 0.112 after sufficient games, the last-7-minutes drive proxy is invalid.
- Scenario 3: AMSD first-possession TD. Prediction: under AMSD, Team A win probability remains ≥0.53 and mean OT length ≤8:00; if observed Team A win prob drops to ≤0.50, the assumptions (A always kicks XP, B TD prob 0.17) are falsified.
- Maybe add a 4th? User asked 3. Keep 3.

Need word count. Let's write generously.

Also note: The user said "DRIVE SOURCE: ..." and "PAGES: 17". The text includes pages 95-105 (11 pages of article, but PDF pages maybe 17). I will cite [PAGE 95] through [PAGE 105] as they appear in the text headers.

Check exact page markers in text: The text has "95" at top, then "96", "97", etc. Good.

Now produce final. Must be only the XML sections. No extra text outside.

Let's ensure no toy equations. All equations are from the paper or standard Markov chain theory. No invented ratios like Force/Fatigue.

Let's check for any accidental betting terms. I won't use "odds", "spread", "moneyline", "total", "line", "handicap", "juice", "vig", "chalk", "dog", "cover", "push" (push is betting but also tie; better avoid "push", use tie). "Expected value" is okay but maybe avoid to be safe. Use "mean absorption time".

Let's write.

Word count estimate: THINK_TRACE ~500, SOURCE_OPERATORS ~450, RETROCAUSAL ~300, RECURSIVE ~300, CROSS_LAYER ~250, RLVR ~250. Total ~2050. Good.

Need to be careful with LaTeX in XML. Use standard LaTeX.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds through five nested hops from raw drive counts to policy-relevant predictions. Hop one: the paper converts Drive Finder counts (Tables 17–18, [PAGE 104–105]) into first-step transition probabilities for each overtime ruleset (Tables 21–24, [PAGE 105]). For sudden death (SD), the transient states are {A Pos, B Pos} and the absorbing states are {A Wins, B Wins, EOG Tie}; Table 21 gives P(A Pos → B Pos) = 0.638 (no score), P(A Pos → A Wins) = 0.356 (FG+TD), P(A Pos → Tie) = 0.007 ([PAGE 105]). Hop two: the chain is placed in canonical absorbing form P = [[Q, R], [0, I]], where Q is the transient transition submatrix and R maps transient to absorbing states. The fundamental matrix N = (I − Q)^−1 = Σₖ₌₀^∞ Q^k counts expected visits to each transient state before absorption ([PAGE 99]). For SD, N = [[1.685, 0.974], [0.974, 1.685]] (Table 4, [PAGE 99]); the first-row sum 1.685 + 0.974 = 2.659 expected possessions multiplied by the mean possession length Δt_pos = 2 min 38 s = 158 s yields L_SD ≈ 420 s ≈ 7 minutes 1 second, matching the observed 7 minutes 2 seconds ([PAGE 99]). Hop three: the absorbing-probability matrix B = N R gives, from A's first possession, P(A Wins) = 0.599, P(B Wins) = 0.389, P(Tie) = 0.017 (Table 5, [PAGE 99]). Hop four: modified sudden death (MSD) adds the special initial states {A First Pos, B down by 3} before collapsing back to SD-like {A Pos, B Pos}; Table 6's fundamental matrix first row [1, 0.322, 0.636, 0.937] sums to 2.895 possessions × 158 s ≈ 457 s ≈ 7 minutes 37 seconds ([PAGE 100]), and Table 7 gives P(A Wins | A First Pos) = 0.554, P(B Wins) = 0.433, P(Tie) = 0.013 ([PAGE 100]). Hop five: MSD-10 hybridizes rows—first-possession row from 2013–2016 opening-drive data, subsequent rows from the last 7 minutes of OT (Table 8, [PAGE 100])—producing P(A Wins) = 0.541, P(B Wins) = 0.346, P(Tie) = 0.112 and L ≈ 6 minutes 54 seconds (Table 9, [PAGE 100]). AMSD expands the state space to {B down by 6, 7, 8} under the assumptions that Team A always kicks the extra point (so down-by-8 is effectively unreachable), Team B scores a TD with probability 0.17 when down by 6–7, and Team B always kicks the extra point when down by 7 after a TD (Table 10, [PAGE 101]), giving P(A Wins) = 0.547, P(B Wins) = 0.439, P(Tie) = 0.014, L ≈ 7 minutes 57 seconds.

Gray-zone audit: (1) The model assumes equivalent team strength and league-average drive behavior, explicitly ignoring talent and home-field asymmetry ([PAGE 104]); a mismatch in Q between the two teams invalidates the single-chain fundamental matrix. (2) Possession length is treated as i.i.d. with constant mean 158 s, but the paper concedes it does not model Team A intentionally lengthening its first possession to shrink Team B's clock ([PAGE 100]); state-dependent duration biases L = (1ᵀN_row)·Δt_pos. (3) MSD-10 infers shortened-OT behavior from the last 7 minutes of 15-minute OT ([PAGE 100]), a non-stationary proxy with sparse data beyond 8 minutes ([PAGE 100]). (4) AMSD draws Team B's down-by-6-to-7 TD probability from regulation end-of-game drives (last 3 minutes, down 4–11 points), not OT-specific data ([PAGE 101]). (5) Playoff models remove the tie absorbing state by reclassifying EOG ties as possession changes; because ties are rare ([PAGE 101]), this perturbation is small but not zero. (6) The onside-break-even calculation fixes P(Win | Recover) = 0.895 across formats (Table 14, [PAGE 102]), ignoring that post-recovery field position differs by ruleset. Singularity/breakdown regimes: if P(no score) → 1 for every transient transition, Q becomes row-stochastic with spectral radius ρ(Q) = 1, so I − Q is singular, N diverges, and expected overtime length is infinite; this is the no-scoring deadlock regime. If the scoring probabilities vanish under extreme weather (p_FG = p_TD = p_S = 0), the chain oscillates between A Pos and B Pos until the clock expires, converting the soft EOG Tie absorbing state into a hard time cap that the stationary Q matrix does not represent. Removing EOG Tie entirely for playoffs changes the canonical form and can make B sub-stochastic unless every path still reaches A Wins or B Wins with probability one.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal Markov operators and units. Let the state space be partitioned into transient set T and absorbing set A. The one-step transition matrix is P = [[Q, R], [0_{|A|×|T|}, I_{|A|}]] with Q ∈ [0,1]^{|T|×|T|} and R ∈ [0,1]^{|T|×|A|}; every row sums to 1. Absorption is guaranteed iff ρ(Q) < 1 (spectral radius strictly below unity), equivalently iff every transient state can reach an absorbing state with positive probability. The fundamental matrix is N = (I_{|T|} − Q)^{−1} = Σ_{k=0}^{∞} Q^k, dimensionless expected visit counts. The absorption-probability matrix is B = N R ∈ [0,1]^{|T|×|A|}; the first row of B gives P(absorbing state j | start in A First Pos). The mean number of steps to absorption from start state i is t_i = Σ_{j∈T} N_{ij} = (N 1)_{i}; physical overtime length is L_i = t_i · Δt_pos, where Δt_pos = 2 min 38 s = 158 s ([PAGE 99]).

Sudden death ([PAGE 97, Table 1]; [PAGE 105, Table 21]): T = {A Pos, B Pos}, A = {A Wins, B Wins, EOG Tie}. Q_SD = [[0, p_NS], [p_NS, 0]] with p_NS = 0.638 ([PAGE 105]); R_SD rows map FG+TD to A Wins/B Wins, safety to the opponent's win, and EOG to tie. From Table 4 ([PAGE 99]), N_SD first row = [1.685, 0.974], so t_A = 2.659 possessions and L_SD = 2.659 × 158 s ≈ 420 s ≈ 7 min 1 s. From Table 5 ([PAGE 99]), B_SD row A Pos = [0.599, 0.389, 0.017].

Modified sudden death ([PAGE 98, Table 2]; [PAGE 105, Table 22]): T = {A First Pos, B down by 3, A Pos, B Pos}; Q_MSD has first row [0, 0.322, 0, 0.576] and second row [0, 0, 0.322, 0] ([PAGE 105]). N_MSD first row = [1, 0.322, 0.636, 0.937] (Table 6, [PAGE 99]), t_A = 2.895 possessions, L_MSD = 2.895 × 158 s ≈ 457 s ≈ 7 min 37 s ([PAGE 100]). B_MSD row A First Pos = [0.554, 0.433, 0.013] (Table 7, [PAGE 100]). If Team B is down by 3 after A's first-possession FG, Table 7 gives P(A Wins | B down by 3) = 0.784 ([PAGE 100]).

MSD-10 ([PAGE 100, Tables 8–9]; [PAGE 105, Table 23]): The A First Pos row uses opening-drive frequencies [FG 0.213, NS+EOG 0.607, TD 0.180]; the A Pos and B Pos rows use last-7-minutes frequencies mapped onto {NS, FG+TD, S, EOG}. B_MSD-10 row A First Pos = [0.541, 0.346, 0.112] (Table 9, [PAGE 100]); L ≈ 6 min 54 s ([PAGE 100]). Playoff no-tie variant: P(A Wins) = 0.595, L ≈ 8 min 8 s ([PAGE 100]).

Alternative MSD ([PAGE 98, Table 3]; [PAGE 101, Tables 10–11]; [PAGE 105, Table 24]): T expands to {A First Pos, B down by 3, B down by 6, B down by 7, B down by 8, A Pos, B Pos}. Assumptions encoded in Q: Team A always kicks the extra point after a first-possession TD (p_{TD+2PT} = 0), rendering B down by 8 unreachable; Team B TD probability when down by 6–7 is p_TD = 0.17 from regulation Q4 data ([PAGE 101]); Team B always kicks the extra point when down by 7 after a TD ([PAGE 101]). B_AMSD row A First Pos = [0.547, 0.439, 0.014] (Table 10, [PAGE 101]); L ≈ 7 min 57 s ([PAGE 101]). Sensitivity (Table 11, [PAGE 101]): as regulation minutes remaining increase from 2 to 5, p_TD rises from 0.113 to 0.214 and P(A Wins) falls from 0.549 to 0.546.

Onside kick break-even ([PAGE 102–103], Tables 12–14): Let r = P(Recover), w_r = P(Win | Recover), w_n = P(Win | Do not Recover), and w_0 = P(B Wins, regular kickoff). The indifference condition is r·w_r + (1−r)·w_n = w_0, solved as r* = (w_0 − w_n) / (w_r − w_n). Paper values: w_r = 0.895 for all formats; P(B scores after recovery) estimated as 0.193 + 0.281 + (0.105)(0.302) = 0.506 ([PAGE 102]). Table 14 ([PAGE 102]): SD r* = 0.177, MSD r* = 0.137, MSD-10 r* = 0.140, AMSD r* = 0.121; league recovery averages are 0.13 (2010–2012) and 0.052 (2013–2015), all below or near the break-even boundary. Units: all probabilities dimensionless in [0,1]; time in seconds or minutes; expected possession counts dimensionless.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a direct methodological lineage from earlier Markov-chain treatments of NFL overtime. Michael Jones (2004), _The College Mathematics Journal_, modeled sudden death using 2002 regulation-drive data, imposed a six-possession cap (the average per quarter), and reported Team A win probability 0.491, Team B 0.393, tie 0.116 ([PAGE 96]). Chris Jones (2012), _Mathematics Magazine_, used 2008 regulation data to estimate overtime because MSD overtime data were too sparse, concluding Team A wins 64% under SD within six possessions and 52% under MSD ([PAGE 96]). The present paper advances this by restricting estimation to actual overtime drives from 2010–2012 (SD) and 2013–2015 (MSD), thereby eliminating the regulation-to-overtime extrapolation that limited C. Jones ([PAGE 96]). The intellectual genealogy of fairness alternatives includes Bialik (2003) compiling auction and divide-and-choose proposals; Che & Hendershott (2007) ranking auctioning above divide-and-choose above sudden death; Brams & Sanderson (2012) arguing bidding is fairer than coin tossing; and Winston (2009) in _Mathletics_ predicting that moving the kickoff back five yards would cut Team A's SD win probability from 60% to 55% ([PAGE 96]).

Rule history traced in the source: pre-2010 sudden death (first TD/FG/safety wins regardless of possession equity); 2010–2011 playoff-only MSD (initial receiving team cannot win on a first-possession FG); 2012 extension to regular season with ties permitted after one 15-minute period while playoffs continued with repeated 15-minute periods; and the 2017 reduction to 10-minute overtime periods ([PAGE 96]). The immediate catalyzing event was the 2016 Divisional Round, when Arizona scored a touchdown on the first overtime possession against Green Bay, denying the Packers a possession and prompting Buzinski's public proposal that each team receive at least one opportunity ([PAGE 96]).

Multi-week data traps recur throughout. Playoff inference is weak because only 32 overtime games have occurred since 1958, too few for a dedicated playoff chain, so the paper applies regular-season parameters to playoff questions ([PAGE 100]). MSD-10 is entirely estimated: no 10-minute overtime data existed at publication, so the paper grafts first-possession drive distributions onto last-7-minutes distributions from 2013–2016, explicitly noting the small sample of overtimes exceeding 8 minutes ([PAGE 100]). AMSD borrows Team B's scoring behavior from regulation end-of-game drives (down 4–11 points, last 3 minutes of Q4), not from overtime ([PAGE 101]). Strategic stationarity is assumed across rule regimes even though coaches may alter clock management and risk preferences under a 10-minute cap, a possibility the paper flags but does not model ([PAGE 100]). Finally, the coin-toss elect-not-to-receive option is empirically rare—14 instances, 8 won by the non-receiving team, 3 never possessing, others tied ([PAGE 97])—so the model conditions on Team A receiving and treats the alternative as off-path.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The embedded strategic recursion can be decomposed into three layers: crisis habit regression, counter-trap anticipation, and clock as an absorbing antagonist. Crisis habit regression appears in the paper's behavioral assumptions about end-of-game scoring. When Team A scores a first-possession touchdown under AMSD, the model assumes Team A always kicks the extra point rather than attempting a two-point conversion, because an eight-point lead is viewed as insurmountable enough that the marginal value of going for two is negligible ([PAGE 101]). When Team B is down by 6 or 7, the model assigns only a 17% probability of a touchdown, drawn from regulation drives in the final three minutes when trailing by 4–11 points ([PAGE 101]); when down by 7 after scoring, Team B is assumed to kick the extra point to tie rather than attempt two to win, mirroring observed end-of-game conservatism ([PAGE 101]). Table 11 quantifies this regression: as minutes remaining in regulation expand from 2 to 5, the observed touchdown share when down by 4–11 rises from 0.113 to 0.214 while the field-goal share rises only from 0.030 to 0.036 ([PAGE 101]), showing that scoring aggression is a function of time pressure.

The counter-trap layer concerns what each team believes the other will do under these regressions. Team A, expecting Team B to play conservatively when down by 3 (field goal to tie, not touchdown to win), may treat the first possession as a low-risk field-position exercise. Team B, anticipating that Team A will not attempt a two-point conversion, prepares for a down-by-7 tie scenario rather than a down-by-8 loss scenario. The paper's assumptions effectively fix this second-order belief: both teams converge on extra-point kicks and field-goal-tying behavior, which is why AMSD's Team A win probability settles at 0.547 rather than approaching 0.500 ([PAGE 101]). If either team deviated—Team B going for two when down by 7, or Team A going for two after a first-possession touchdown—the absorbing matrix B would shift, as suggested by the sensitivity grid in Table 11 ([PAGE 101]).

The clock layer is the hard constraint. Overtime length is computed as expected possessions times 158 seconds, but the 10-minute rule imposes a deterministic absorbing boundary at t = 600 s that competes with scoring absorption. Under MSD-10, the tie probability jumps to 0.112 precisely because the clock terminates more drives before resolution ([PAGE 100]). The paper explicitly notes an unmodeled recursive deviation: Team A could intentionally extend its first possession to reduce Team B's available time, a clock-management counter-trap that would alter the first-row transition distribution and invalidate the stationary Δt_pos assumption ([PAGE 100]). Under crisis conditions, the model therefore predicts regression to league-average end-of-game habits rather than dynamic game-theoretic optimization, and its accuracy degrades whenever a coach breaks that regression by manipulating possession duration or conversion decisions.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. A football field is 100 yards; kickoff and snap mechanics bound the minimum play-to-play interval; the play clock (40 seconds, 25 seconds after stoppages) and the 600-second overtime cap bound possession length. The model's Δt_pos = 158 seconds is a league average across all plays and game states; it treats possession duration as independent of score state, field position, and time remaining. Veto condition: if a team runs a no-huddle two-minute drill or deliberately kneels to bleed the clock, possession length becomes state-dependent, so L = (1ᵀN_row)·Δt_pos is biased and the Markov reward structure no longer represents physical time.

Biomechanical layer. Kicker leg fatigue, quarterback decision time, offensive-line pass protection, and defensive pursuit speed all modulate p_FG, p_TD, p_S, and p_NS. Field-goal success is distance-dependent; the paper aggregates all field goals into one probability regardless of yardage ([PAGE 105, Tables 21–24]). Veto condition: in adverse weather (wind, precipitation, extreme temperature), kicking and passing accuracies shift away from league averages, moving Q away from the estimated matrix and changing B. If weather suppresses scoring sufficiently that p_FG = p_TD = p_S = 0 for every transient drive, Q becomes row-stochastic with ρ(Q) = 1, I − Q is singular, N diverges, and the model predicts infinite overtime rather than a clock-exhausted tie—a physical impossibility under the 10-minute cap. This is the exact singularity regime: zero scoring probability in all transient states.

Weather layer. Precipitation reduces ball security (increasing fumbles and interceptions, i.e., p_NS), wind reduces field-goal range and accuracy (reducing p_FG), and cold affects muscle performance and grip. Because the paper uses pooled 2010–2015 drive frequencies without weather stratification ([PAGE 104–105]), any specific overtime occurring under materially non-average conditions is vetoed: the transition matrix no longer describes that game. The equivalent-strength assumption ([PAGE 104]) is additionally vetoed by injuries or talent disparities, which would require separate Q matrices for Team A and Team B, breaking the single-chain formalism. Cross-layer adjudication rule: the Markov output is valid only for a stationary, average-weather, average-strength game in which possession durations are i.i.d. with mean 158 s and every scoring transition remains positive; any physical, biomechanical, or meteorological shift that zeroes a scoring transition or correlates duration with score state invokes the veto and invalidates both N and B.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios, each with a falsifiable prediction and no betting lines.

Veto scenario 1 (onside kick dominance test). The model derives break-even onside-recovery probabilities r* = (w_0 − w_n) / (w_r − w_n) with w_r = 0.895 fixed across formats and reports r* = 0.177 (SD), 0.137 (MSD), 0.140 (MSD-10), and 0.121 (AMSD) ([PAGE 102, Table 14]). Historical recovery rates are 0.13 (2010–2012) and 0.052 (2013–2015) ([PAGE 102]), below or at the boundary. Verifiable prediction: in regular-season overtime under MSD-10, conditional on a team attempting an onside kick, if the observed recovery rate is below 0.140, then Team B's win probability after an onside kick must remain strictly below its regular-kickoff baseline of w_0 = 0.409 ([PAGE 102, Table 14]). Veto: if a sustained sample shows onside-kick recoveries at or above 0.140 coupled with Team B win probability at or above 0.409, the paper's fixed w_r = 0.895 and field-position assumptions are falsified.

Veto scenario 2 (MSD-10 tie-rate convergence). The abstract and Table 9 predict that shortening overtime to 10 minutes raises the tie probability from under 0.02 to 0.112 ([PAGE 95]; [PAGE 100]). This rests on grafting last-7-minutes drive distributions onto a shortened horizon ([PAGE 100]). Verifiable prediction: as the cumulative sample of 10-minute overtimes grows, the observed regular-season tie rate should converge to 0.112 with a 95% confidence interval containing 0.112. Veto: if, after a sufficient number of 10-minute overtimes, the 95% confidence interval for the tie rate excludes 0.112 (for example, remaining below 0.06 or above 0.18), the last-7-minutes proxy and the stationary possession-length assumption are invalidated, and the predicted expected length of 6 minutes 54 seconds ([PAGE 100]) is rejected.

Veto scenario 3 (AMSD first-possession touchdown asymmetry). Under AMSD, Team A wins 0.547 and Team B wins 0.439, with mean overtime length 7 minutes 57 seconds ([PAGE 101, Table 10]). This rests on Team A always kicking the extra point after a first-possession touchdown and Team B scoring a touchdown only 17% of the time when down by 6–7 ([PAGE 101]). Verifiable prediction: if AMSD were adopted, Team A's win probability should remain at or above 0.53 and mean overtime length at or below 8 minutes in a large regular-season sample. Veto: if observed Team A win probability falls to 0.50 or below, or if mean overtime length exceeds 8 minutes 30 seconds, then either Team A is deviating from the extra-point assumption (e.g., attempting two-point conversions) or Team B's scoring-from-deficit probability exceeds 0.17, falsifying the behavioral assumptions encoded in Q_AMSD.
</RLVR_COUNTERFACTUAL_VETOES>