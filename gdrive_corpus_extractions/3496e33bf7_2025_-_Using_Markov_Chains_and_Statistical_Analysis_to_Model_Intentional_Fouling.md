---
source: "2025 - Using Markov Chains and Statistical Analysis to Model Intentional Fouling Situations in NCAA Division 1 Men s Basketball - Sengupta.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2025"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3809
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text (a Wharton Sports Analytics Journal paper about Markov chains and intentional fouling in NCAA D1 Men's Basketball). 

I need to follow STRICT INVARIANTS:
1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>

I must be careful not to invent fake equations. I should derive formal Markov chain equations based on the source text (transition matrices, expected points). I need to cite page markers like [PAGE 2], [PAGE 8], etc. based on the source text page numbers visible in the document.

Let me map the source text to pages:
- Page 2: Abstract, Introduction start
- Page 3: Introduction, Figure 1 table (1-6 fouls, 7-9 one-and-one)
- Page 4: 10+ Double Bonus, shooting fouls, Background
- Page 5: Background continued, Methodology start
- Page 6: Methodology continued, statistics, Figure 2 table
- Page 7: Markov chains figures 3, 4, 5
- Page 8: Figure 5, transition matrix methodology, Figure 6, expected points calculation, time intervals
- Page 9: individual player FTs, Results start, Figure 7
- Page 10: Figure 7 continued, trends, Figure 8 table
- Page 11: Discussion and Limitations, timing insights, Alabama/App State/Florida
- Page 12: Discussion continued, limitations (point differential, OROFT%, player transfers), References
- Page 13: References continued
- Page 14: References end

Wait, looking at the text, the page numbers in the source are:
- "MARKOV CHAINS AND STAT. ANALYSIS OF INTENTIONAL FOULING IN NCAA D1 MBB 2" -> Page 2
- Page 3
- Page 4
- Page 5
- Page 6
- Page 7
- Page 8
- Page 9
- Page 10
- Page 11
- Page 12
- Page 13
- Page 14

I should cite these as [PAGE 2], [PAGE 3], etc.

Key content to extract:
- Markov chain states for offensive possession: likely State 1 start, State 2/3 attempt types, State 6 3PT make, etc.
- Transition matrices: P, initial state vector v = [1, 0, ..., 0]. Expected points = sum over terminal states of probability * points.
- Bonus (7-9 fouls): one-and-one. If first FT made, bonus FT. If missed, ball live.
- Double Bonus (10+): two FTs regardless.
- Data: play-by-play from >4,000 games, 2024-25 season, CBBpy package.
- Statistics: 3PT Rate, 2PT Rate, Turnover Rate, 3PT%, 2PT%, FT%, OREB%, OROFT%.
- Teams: Florida Gators, Alabama Crimson Tide, App State Mountaineers.
- Florida: offensive possession EP = 1.12 (full game). FT% threshold ~67% for Bonus FT situation to equal 1.12.
- Player EP table: Player 1 (87.5%) -> 1.64, Player 2 (84.4%) -> 1.56, Player 3 (76.1%) -> 1.34, Player 4 (60.4%) -> 0.96, Player 5 (58.2%) -> 0.92. Wait, looking at Figure 8 text: "(87.5%) (84.4%) (76.1%) (60.4%) (58.2%)" and "1.12 1.64 1.56 1.34 0.96 0.92". Actually it seems like there are 6 entries? Let's parse: Offensive Possession 1.12. Then Player 1 (87.5%) 1.64? Wait the text layout is messy. Let's look: "Offensive Possession ... 1.12" then players. The numbers: 1.64, 1.56, 1.34, 0.96, 0.92. That's 5 values for 5 players. FT%: 87.5%, 84.4%, 76.1%, 60.4%, 58.2%. So Player 1: 87.5% -> 1.64; Player 2: 84.4% -> 1.56; Player 3: 76.1% -> 1.34; Player 4: 60.4% -> 0.96; Player 5: 58.2% -> 0.92.
- Optimal fouling time: when EP(offensive possession) > EP(FT situation). Florida crosses between 5-min and 1-min. Alabama never crosses. App State crosses between first half and last 5 minutes.
- Limitations: no point differential, no OROFT% in expected points graphs, player transfers/roster churn.

Now structure:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the Markov chain formalism from the source. Discuss state space, transition matrix, absorbing states, expected points operator. Audit gray zones: machine-converted text, equations/tables not preserved, missing exact matrix entries, small sample in late-game intervals, ignoring shooting fouls, ignoring OROFT% in EP graphs, no point differential, static team stats ignoring in-game adjustments, roster transfers.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define state space S, transition matrix P, fundamental matrix N = (I - Q)^{-1} for absorbing chains, expected points vector r, EP = v_0 N r or similar. Units: points per possession (pps), dimensionless probabilities. Cite pages for tables and methodology. Breakdown regimes: FT% threshold where EP_FT = EP_poss; singularity when P is not absorbing or Q has spectral radius 1; one-and-one branching creates nonlinear dependency on FT^2 because second FT only occurs if first made. Cite exact pages.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Jelaska et al. (2012) [PAGE 5], Kenter (2015) [PAGE 5], Zapata-Hall (2025) [PAGE 5], Hack-a-Shaq [PAGE 3], NCAA rules [PAGE 3-4], CBBpy [PAGE 6]. Multi-week traps: roster transfer portal (Johnson 2019, Baylor 2025) [PAGE 12-13], season-to-season nonstationarity, small-sample late-game intervals.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: coaches fouling late out of habit regardless of opponent EP crossover; counter-trap: opponent anticipating fouling and altering shot selection (increasing 3PT rate or driving to draw shooting fouls); clock: 5-minute vs 1-minute intervals too coarse for endgame, optimal time may be path-dependent on score differential (omitted variable per [PAGE 12-13]).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Indoor sport, weather veto null (climate-controlled arenas). Biomechanical: FT shooting under fatigue/pressure not captured by season FT%; player-specific EP assumes stationary FT%. Physical: rebounding after missed FTs (OROFT%) omitted from EP graphs [PAGE 12-13], which can flip the sign of the fouling advantage.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable veto scenarios + predictions. Must be verifiable (not betting lines).
1. If opponent's season FT% > crossover threshold and game is in one-and-one (7-9 team fouls), fouling yields higher EP than defending; veto: do not foul. Prediction: EP differential = f(FT%). For Florida threshold ~67% [PAGE 10-11].
2. If trailing by >8 points with <2 minutes, point differential omission means Markov EP model says wait until 5-min mark but rational dynamic programming says foul immediately; veto: model breakdown under score-state constraint. Prediction: model-prescribed wait time dominated by possession-count constraint.
3. If OROFT% > 0 for offensive team, missed FT leads to offensive rebound and extended possession, violating absorbing-state assumption; veto: do not use simple EP_FT comparison. Prediction: EP_FT effective = EP_FT + P(miss)*P(OR)*EP_poss, raising FT-side value and narrowing/no-closing the fouling window.

I need to ensure total word count >= 1000 words across all sections. Let me write carefully.

No betting lines. No toy equations. Formal LaTeX only. Cite [PAGE N].

Let's draft.

THINK_TRACE: >400 words. Talk about derivation from source text. Multi-hop: from rules (1-6, 7-9, 10+) to Markov states, to transition matrix, to EP calculation, to interval slicing, to player-specific FT substitution, to threshold FT%. Gray-zone audit: machine conversion loses matrices/equations; exact P entries unavailable; 35.9% example for Florida 3PT make [PAGE 7] but full matrix not visible; interval data sparse at <30s; no point differential [PAGE 12-13]; ignores shooting fouls [PAGE 4]; ignores OROFT% in EP graphs [PAGE 12-13]; assumes team stats stationary.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math.
Let S = {s_0 start, s_2PT_att, s_3PT_att, s_TO, s_2PT_make, s_3PT_make, s_miss_def_rebound, s_miss_off_rebound, ...} but since exact states not preserved, I should define generally.
P_{ij} = Pr(s_{t+1}=j | s_t=i). Row-stochastic: sum_j P_{ij}=1. Absorbing terminal states: makes, turnovers, defensive rebounds after miss (possession ends). For FT one-and-one: chain branches on first FT make/make. Let p = FT%. EP_bonus = p*(1 + p*1) + (1-p)*0? Actually one-and-one: if make first (prob p), get 1 point and shoot second. If make second (prob p), get another point. If miss first (prob 1-p), ball live, no points from FTs but possession may continue via rebound. The paper says "If the first FT is missed, the ball will become live...". So expected points from FTs alone (ignoring rebound) = p + p^2 = p(1+p) for one-and-one? Wait: first FT made (1 pt) + second FT made (1 pt). Expected = p*1 + p*p*1 = p + p^2. For double bonus: 2 FTs regardless: EP = 2p.
Then compare to EP_poss from matrix.
Transition matrix multiplication: v_{t+1} = v_t P. Absorbing: fundamental matrix N = (I - Q)^{-1}, where Q is transient submatrix. Absorption probabilities B = N R. EP = B * r_terminal.
Threshold: solve p + p^2 = EP_poss for one-and-one; p = (-1 + sqrt(1+4 EP_poss))/2. For EP_poss=1.12, p ≈ (-1 + sqrt(1+4.48))/2 = (-1 + sqrt(5.48))/2 ≈ (-1 + 2.341)/2 ≈ 0.6705 → ~67% [PAGE 10-11]. This is a formal derivation, not a toy equation; it's derived from the rules described in the source.
Units: points per possession (pps), dimensionless.
Breakdown: spectral radius of Q >=1 (non-absorbing), FT% outside [0,1], small N in late-game intervals.

RETROCAUSAL_GENEALOGY: Cite Jelaska 2012 [PAGE 5], Kenter 2015 [PAGE 5], Zapata-Hall 2025 [PAGE 5], Hack-a-Shaq [PAGE 3], NCAA rulebook [PAGE 3-4], CBBpy [PAGE 6]. Multi-week traps: transfer portal roster churn [PAGE 12-13], Baylor example [PAGE 12], nonstationarity across 2024-25 to 2025-26.

RECURSIVE_THEORY_OF_MIND: Habit regression: "foul when trailing" heuristic ignores opponent-specific EP crossover. Counter-trap: offense can induce shooting fouls (ignored in study [PAGE 4]) or change 3PT rate [PAGE 6] to manipulate EP. Clock: intervals [PAGE 8] are coarse; endgame is continuous-time optimal control, not discrete bins.

CROSS_LAYER_VETO_ADJUDICATION: Physical: indoor arena, weather veto null. Biomechanical: FT% is season aggregate; pressure/fatigue alter p; individual EP table [PAGE 10] shows Player 4 (60.4%) -> 0.96 < 1.12, Player 3 (76.1%) -> 1.34 > 1.12, so target selection is nonlinear. Physical layer veto: OROFT% omission [PAGE 12-13] means missed FT can yield offensive rebound and reset possession, adding term P(miss)*OROFT%*EP_poss to EP_FT, which can veto the foul decision even when p < threshold.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
Scenario 1: Florida vs team with FT% = 70% in one-and-one. p > 67% threshold → EP_FT > EP_poss. Veto: do not foul. Prediction: fouling increases expected points ceded by Δ = (0.7 + 0.49) - 1.12 = 0.07 pps.
Scenario 2: Alabama, EP_poss never below EP_FT [PAGE 11-12]. Veto: never foul based on EP. Prediction: fouling strictly dominates (for offense) / defending strictly dominates (for defense) across all intervals.
Scenario 3: Team with high OROFT% (e.g., 0.30) and FT% = 60% (< 67%). Simple model says foul. But OROFT term adds 0.40*0.30*1.12 ≈ 0.134 pps, making EP_FT_effective ≈ 0.96 + 0.134 = 1.094, still below 1.12 but close; if OROFT% > ~0.4, crossover flips. Veto: model invalid when OROFT% nonzero. Prediction: optimal fouling window shrinks or disappears for high offensive-rebounding teams.

Need to make sure word count is sufficient. Let's write expansively.

Check invariant: ZERO BETTING LINES. I will not mention spreads, totals, moneylines, odds. Good.
ZERO TOY EQUATIONS: No Force/Fatigue. All equations formal from Markov chain theory. Good.
Citations: [PAGE N] format. Good.

Let's write the final output with exact XML sections.
</NATIVE_REASONING>

<THINK_TRACE>
The source text describes a Markov chain model of NCAA Division 1 men’s basketball possessions built from play-by-play logs of over 4,000 games in the 2024–25 season [PAGE 5–6]. The first multi-hop derivation is to translate the NCAA foul-penalty schedule into chain topology. Under NCAA rules, 1–6 team fouls in a half produce no free throws and the offense retains an inbounds possession [PAGE 3–4]; 7–9 fouls trigger the one-and-one bonus, where the fouled player shoots one free throw and earns a second attempt only if the first is successful, with a miss rendering the ball live [PAGE 3–4]; 10 or more fouls trigger the double bonus, awarding two free throws regardless of the first outcome [PAGE 4]. Shooting fouls are explicitly ignored by the study [PAGE 4], which imposes a structural boundary: the model only addresses non-shooting common fouls in bonus and double-bonus states.

The second hop is the expected-points operator. For an offensive possession without a foul, the paper constructs a finite-state transition matrix P where each row is a current state and each column a next state [PAGE 8–9]. The initial state vector is v_0 = [1, 0, …, 0] [PAGE 9]. Repeated multiplication v_{t+1} = v_t P yields absorption probabilities into terminal scoring states (3-point make, 2-point make, free-throw make, turnover, defensive rebound). Expected points per possession are computed as the dot product of the absorption-probability vector with the point-value vector r = [3, 2, 1, 0, 0] [PAGE 9]. For free-throw situations, the team average FT% is substituted into the chain; for individual targeting, a specific player’s FT% replaces the team value [PAGE 9–10]. The crossover condition is EP_poss(t) = EP_FT(t), where t indexes one of five temporal slices: full game, last half, last 5 minutes, last 1 minute, last 30 seconds [PAGE 8–9]. When EP_poss exceeds EP_FT, fouling cedes fewer expected points than defending [PAGE 10–11].

The third hop is the player-specific free-throw threshold. For Florida, full-game offensive possession EP is 1.12 [PAGE 10]. Solving the one-and-one expected-points expression EP_one-and-one = p + p^2 against 1.12 yields p ≈ 0.67, matching the paper’s reported ~67% breakpoint [PAGE 10–11]. Players above this threshold (e.g., 87.5% → 1.64 pps; 84.4% → 1.56 pps; 76.1% → 1.34 pps) are poor foul targets; players below it (60.4% → 0.96 pps; 58.2% → 0.92 pps) are optimal targets [PAGE 10].

Gray-zone audit: (1) The machine-converted text explicitly states that equations, tables, and figures are not preserved [PAGE 1], so the exact entries of P, Q, and R are unavailable; only a single illustrative transition probability (Florida 3-point make conditional on attempt = 35.9%) is quoted [PAGE 7]. (2) Temporal slicing into five coarse bins discards continuous endgame information; the <30-second bin is likely sparse and high-variance. (3) The model omits point differential, which the author acknowledges breaks down when a team is trailing by a wide margin late [PAGE 12–13]. (4) Offensive-rebound-off-missed-free-throw (OROFT%) is collected [PAGE 6] but explicitly not included in the expected-points graphs [PAGE 12–13], creating a rebound-recapture loop that the simple absorbing-chain EP comparison ignores. (5) Team statistics are treated as stationary across the season despite transfer-portal roster churn (e.g., Baylor returning zero players for 2025–26) [PAGE 12–13]. These gaps define the model’s singularity and breakdown regimes.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the state space be S = {s_start, s_2PT_att, s_3PT_att, s_TO, s_2PT_make, s_3PT_make, s_miss_DREB, s_miss_OREB, s_FT_1, s_FT_2, s_terminal}. The transition matrix P ∈ R^{|S|×|S|} is row-stochastic: ∀i, ∑_{j∈S} P_{ij} = 1, P_{ij} ≥ 0 [PAGE 8–9]. Partition P into transient submatrix Q (transient-to-transient) and absorption matrix R (transient-to-terminal). The fundamental matrix is N = (I_{|T|} − Q)^{−1}, defined only when the spectral radius ρ(Q) < 1; breakdown occurs at ρ(Q) ≥ 1, i.e., a non-absorbing possession loop with positive probability of infinite duration [PAGE 8–9]. Absorption probabilities B = N R. Expected points per possession: EP_poss = v_0 B r, where r ∈ R^{|Terminal|} assigns point values {3, 2, 1, 0} to terminal scoring states and v_0 = e_1^T [PAGE 9]. Units: points per possession (pps), dimensionless probability weights.

For NCAA free-throw regimes, define p = FT% ∈ [0,1]. One-and-one (7–9 team fouls): the first attempt always occurs; the second occurs iff the first is made. Ignoring live-ball rebounds after a miss, EP_one-and-one(p) = p·1 + p·p·1 = p + p^2 [PAGE 3–4]. Double bonus (10+ team fouls): EP_double(p) = 2p [PAGE 4]. Shooting fouls (2- or 3-point attempts) are excluded from the study [PAGE 4], so EP_shooting is not modeled.

Crossover threshold: solve EP_one-and-one(p*) = EP_poss. For Florida’s full-game EP_poss = 1.12 [PAGE 10], p* + (p*)^2 = 1.12 → p* = (−1 + √(1 + 4·1.12))/2 ≈ 0.6705, i.e., ~67% [PAGE 10–11]. A defender should foul a shooter with p < p* and defend against p > p*. Individual player EP values reported: Player 1 (87.5%) → 1.64 pps; Player 2 (84.4%) → 1.56 pps; Player 3 (76.1%) → 1.34 pps; Player 4 (60.4%) → 0.96 pps; Player 5 (58.2%) → 0.92 pps, versus offensive possession EP = 1.12 [PAGE 10].

Temporal operator: EP_poss(t) and EP_FT(t) are evaluated over t ∈ {full game, last half, last 5 min, last 1 min, last 30 s} [PAGE 8–9]. The optimal fouling initiation time τ* = inf{t : EP_poss(t) > EP_FT(t)} [PAGE 10–11]. Florida crosses between last 5 minutes and last 1 minute; Alabama never crosses; App State crosses between first half and last 5 minutes [PAGE 11–12]. Breakdown regimes: (i) p ∉ [0,1]; (ii) ρ(Q) ≥ 1; (iii) late-game sample size insufficient for stable P estimation; (iv) score differential omitted, violating the trailing-team boundary condition [PAGE 12–13]; (v) OROFT% > 0 omitted from EP_FT, so a missed free throw can transition back to s_start rather than terminal, invalidating the absorbing assumption [PAGE 12–13].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Jelaska, Trninić, and Perica (2012), who demonstrated that basketball possession flow can be modeled as a Markov chain with transition matrices for state percentages [PAGE 5]. Kenter (2015) extended this to the NBA endgame, treating fouling decisions as a combinatorial payoff problem conditioned on point differential and time remaining [PAGE 5]. Zapata-Hall (2025) narrowed scope to the final 30 seconds of NCAA men’s games, analyzing the “foul up 3” dilemma from 2009–2022 data [PAGE 5]. The present study grafts collegiate-specific rules—the one-and-one bonus and double bonus [PAGE 3–4]—onto the Markov framework using 2024–25 play-by-play data scraped via the CBBpy Python package (Cowan, 2025) [PAGE 5–6].

The “Hack-a-Shaq” heuristic (Young, 2021) supplies the behavioral motif: intentionally fouling poor free-throw shooters to suppress opponent scoring and expand clock-dependent possession count [PAGE 3]. The paper’s multi-week trap is roster nonstationarity. NCAA transfer rules permit complete roster turnover between seasons [PAGE 12–13]; the Baylor Bears returned zero players from the prior roster for 2025–26 (Associated Press, 2025) [PAGE 12], implying that a 2024–25 transition matrix P may be structurally invalid for 2025–26. A second temporal trap is interval coarseness: binning endgame possessions into 5-minute, 1-minute, and 30-second windows [PAGE 8–9] discards the continuous score-time hazard that Kenter (2015) treated as central [PAGE 5]. A third trap is rule asymmetry: the one-and-one is exclusive to NCAA men’s basketball [PAGE 5], so results do not transfer to women’s basketball, the NBA, or FIBA without re-deriving the FT branching topology.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: coaches trailing late often default to a “foul when trailing” script regardless of opponent-specific expected-points geometry [PAGE 3]. The model shows this habit is exploitable: Alabama’s EP_poss never falls below its EP_FT across any interval, so habitual fouling against Alabama strictly increases expected points ceded [PAGE 11–12]. Conversely, Florida’s crossover between the 5-minute and 1-minute marks defines a narrow rational fouling window [PAGE 11], and App State’s sharp FT-EP decline after the first half suggests an earlier τ* [PAGE 12]. A coach regressing to habit would either foul too early (against Florida) or too late / never (against Alabama/App State), incurring an EP penalty equal to |EP_poss − EP_FT| integrated over the mistimed interval.

Counter-trap: because shooting fouls are ignored [PAGE 4], the offense can manipulate the defense’s fouling calculus by drawing shooting fouls on 2- or 3-point attempts, which are worth 2 or 3 free throws respectively and bypass the bonus schedule [PAGE 4]. An offense anticipating intentional fouling may also elevate its 3-PT Rate or 2-PT Rate [PAGE 6] to shift EP_poss away from the crossover, effectively moving τ* out of reach. Because the model treats team statistics as static [PAGE 5–6], it cannot capture in-game strategic adaptation where the offense changes shot selection in response to a declared fouling strategy.

Clock structure: the five discrete intervals [PAGE 8–9] impose a piecewise-constant decision rule on a process that is intrinsically continuous in score and time. Near the endgame, possession count, not expected points per possession, becomes the dominant state variable; a team down by 12 with 90 seconds left cannot wait until the “strategic” 5-to-1-minute window because insufficient possessions remain [PAGE 12–13]. Thus the Markov EP comparison is a necessary but insufficient condition for fouling; it must be nested inside a dynamic possession-count constraint that the paper explicitly omits.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NCAA games are played in climate-controlled indoor arenas, so weather (wind, temperature, humidity) exerts zero mechanical effect on free-throw trajectory or ball-handling; the weather veto is null by venue constraint. Biomechanical layer: the model inputs season-aggregate FT% [PAGE 5–6], but FT% is a non-stationary biomechanical variable. Fatigue, pressure, and shooting rhythm alter p within a game, so the static threshold p* ≈ 67% [PAGE 10–11] is a point estimate with unknown variance. The individual-player EP table [PAGE 10] demonstrates non-linearity: a 60.4% shooter yields 0.96 pps (below Florida’s 1.12 possession EP), while a 76.1% shooter yields 1.34 pps (above), so target selection is hypersensitive to p near p*.

Cross-layer veto: OROFT% [PAGE 6] is the decisive physical veto. The paper collects OROFT% but excludes it from the expected-points graphs [PAGE 12–13]. In reality, a missed first free throw in one-and-one renders the ball live [PAGE 3–4]; if the offense secures the rebound, possession resets and the chain re-enters s_start rather than terminating. The corrected free-throw expectation is EP_FT_corrected(p) = EP_one-and-one(p) + (1 − p)·OROFT%·EP_poss. Because OROFT% > 0 for most teams, EP_FT_corrected > EP_one-and-one, which raises the effective breakpiont p* upward and can eliminate the fouling window entirely for high offensive-rebounding teams. Any recommendation to foul that ignores OROFT% is vetoed at the physical layer unless the corrected inequality EP_poss > EP_FT_corrected is verified.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Threshold violation): Opponent team FT% = 70% in a one-and-one situation (7–9 team fouls). Florida’s full-game EP_poss = 1.12 [PAGE 10]; one-and-one EP = 0.70 + 0.49 = 1.19 pps. Since 1.19 > 1.12, fouling cedes more expected points than defending. RLVR veto: do not foul. Verifiable prediction: over a sample of matched possessions, the foul strategy yields a higher points-per-possession ceded by Δ = 1.19 − 1.12 = +0.07 pps relative to defense, all else equal.

Scenario 2 (Structural dominance): Alabama’s EP_poss never crosses below either FT situation across any time interval [PAGE 11–12]. RLVR veto: never initiate intentional fouling based on EP comparison. Verifiable prediction: for every temporal bin t, EP_FT(t) ≥ EP_poss(t); a defensive policy of fouling Alabama strictly weakly dominates (for the offense) / is strictly weakly dominated (for the defense) by defending, with no crossover time τ* existing in the observed data.

Scenario 3 (Rebound-recapture loop): Team with FT% = 60% (below the 67% naive threshold [PAGE 10–11]) but OROFT% = 0.35. Naive EP_one-and-one = 0.60 + 0.36 = 0.96 pps < 1.12 pps, suggesting fouling is optimal. Corrected EP = 0.96 + (0.40)(0.35)(1.12) ≈ 0.96 + 0.157 = 1.117 pps, approximately equal to EP_poss; if OROFT% ≥ ~0.40, EP_FT_corrected ≥ 1.12 and the veto flips. RLVR veto: do not foul unless OROFT% is below the rebound-recapture breakeven. Verifiable prediction: teams with OROFT% > ~0.40 will show no statistically significant EP advantage from intentional fouling even when the shooter’s FT% is below 67%, because missed free throws are converted into offensive possessions at a rate that offsets the free-throw deficit.
</RLVR_COUNTERFACTUAL_VETOES>