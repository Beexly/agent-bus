---
source: "Overtime_Rules_and_Incentives_in_the_Nat.md"
folder: "/GSE-Research/sports-research-papers/md/randoms"
pages: 24
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 8165
---

<NATIVE_REASONING>
The user wants me to analyze a source paper about NHL overtime rules and incentives, and produce a response with specific XML sections meeting strict invariants.

 Let me review the requirements:
 1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
 2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
 3. >= 1,000 WORD DEPTH across exact XML sections:
    - <THINK_TRACE> (>=400 words)
    - <SOURCE_OPERATORS_AND_EQUATIONS>
    - <RETROCAUSAL_GENEALOGY>
    - <RECURSIVE_THEORY_OF_MIND>
    - <CROSS_LAYER_VETO_ADJUDICATION>
    - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

 The source is Easton & Rockerbie (2005) "Overtime! Rules and Incentives in the National Hockey League", Journal of Sports Economics, Vol 6 No 2, May 2005, 178-202. DOI: 10.1177/1527002504264424.

 I need to carefully reference pages. The text provided includes page numbers 178-202.

 Let me draft each section.

 THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
 - Discuss the 2-period game model, Stage 1 (regulation 3x20 min), Stage 2 (5-min OT).
 - Probabilities p1 (win stage 1), p2 (lose stage 1), p3 (tie), p1+p2+p3=1.
 - p1' = probability of winning OT conditional on reaching it, p2' = losing OT, p3' = tying OT.
 - Old rule: Stage 1 win=2, loss=0, tie=0 then OT. OT winner gets 2, loser 0, tie=1 each.
 - New Rule 89 (1999-2000): Stage 1 tie guarantees 1 point each. OT winner gets +1 (total 2), OT loser keeps 1. So relative to conference: win stage1=2, loss stage1=-2 (conference) or 0 (nonconference), tie stage1=0 under old vs guaranteed 1 under new but then OT outcomes adjust.
 - Expected payoff conference old: V_OC = 2p1 - 2p2 + ... actually need to derive carefully from text.
 - The text gives equations but some are garbled/missing in the source text (images). I need to reconstruct based on verbal descriptions.
 - Gray zones: independence assumption (p1,p2,p3 independent of opponent), assumption probabilities unchanged across rule change (heroic assumption, note 8), risk aversion vs loss minimization, cumulative vs end-of-season talent measures, small sample of nonconference games, goal differential as talent proxy, no formal dynamic programming maximization left to future research, the "playing for a tie" in interconference games inference from α disappearing but not directly measuring effort, end-of-season totals assume constant talent despite injuries.
 - Multi-hop: rule change -> payoff matrix change -> contour pivot -> effort reallocation toward conference -> fewer ties in conference, more ties in nonconference -> point compression within conference, expansion interconference -> empirical confirmation via std dev table 1 and regression tables 3/4.

 SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, verbatim quotes, breakdown regimes.
 - Need exact page citations. I will cite [PAGE 178], [PAGE 179], etc.
 - Verbatim quotes: "Rule 89 specifies that two teams now receive 1 point each in the event of a tie at the end of the regulation three periods of play (20 minutes per period)." [PAGE 179]
 - Formal equations:
   p_1 + p_2 + p_3 = 1 [PAGE 181]
   V_{OC}^{old} = 2p_1 - 2p_2 + (p_1' p_3)(2) + (p_2' p_3)(-2) + ... need to reconstruct from text descriptions since equations are images.
   Actually text says: "Under the old (O) and new (N) rule systems, the expected payoffs (V) against a conference opponent (C) are" then equations (1) and (2) which are images. But we can infer:
   Old conference: Stage1 win +2, loss -2. Tie goes to OT: OT win conditional p1' gives +2 relative? Wait text: "The relative payoff under the old overtime rule is 2 points for a win against a conference opponent, 0 points for a tie ... and –2 points for a loss." Hmm, that's describing Stage 2 payoffs? Let's parse carefully.

 Let's reconstruct from text pages 182-183:
 - "A win in Stage 1 awards the club a payoff of 2 points relative to the other clubs in its own conference..." [PAGE 182-183]
 - "A loss in Stage 1 against a conference opponent decreases the club's relative position in the conference by 2 points but does not change its relative position if the loss is against a club from the other conference." [PAGE 183]
 - "A win in the second stage ... conditional on reaching second stage; hence its probability is p1'p3... The unconditional probabilities for overtime losses and ties are p2'p3 and p3'p3 respectively." [PAGE 183]
 - "The relative payoff under the old overtime rule is 2 points for a win against a conference opponent, 0 points for a tie (because the relative standing does not change within the conference), and –2 points for a loss." Wait this seems to describe overall? Let's read context: It's describing payoffs in Stage 2? Actually it says "The relative payoff under the old overtime rule is 2 points for a win against a conference opponent, 0 points for a tie ... and –2 points for a loss. The payoff differs for an interconference opponent in overtime." Hmm. Then: "Under Rule 89, the payoff to beating a conference opponent is 2 points, tying a conference opponent is 0 points, and losing to a conference opponent is –1 point (because a point for the tie at the end of Stage 1 has already been awarded). Against an interconference opponent under Rule 89, the payoffs to winning, tying, and losing are 2 points, 1 point, and 1 point respectively."

 This is describing expected payoffs or conditional payoffs? It seems they are listing the payoffs associated with outcomes at the end of the whole game (including OT). Under old rule conference: win=2, tie=0, loss=-2. Under new rule conference: win=2, tie=0, loss=-1. Under old interconference: win=2, tie=1, loss=0? Wait: "A win is a win, and 2 points are awarded; 1 point is, however, awarded for a tie (because the club moves up a point in its own conference) and 0 points for a loss (no change in relative standing within its own conference)." That's old interconference. New interconference: win=2, tie=1, loss=1? Wait text says "Against an interconference opponent under Rule 89, the payoffs to winning, tying, and losing are 2 points, 1 point, and 1 point respectively." Hmm losing gives 1? Because tie at end of stage 1 gives 1 point, and if lose in OT you retain that 1 point? Actually under Rule 89, tie at end of regulation gives 1 point each. Then OT: winner gets additional point (so total 2), loser retains 1. So if you lose in OT, you have 1 point. If you tie in OT? Under old rule tie in OT gives 1 each. Under new rule, does tie in OT happen? Rule 89 is sudden death 5 min, if still tied? The text doesn't explicitly say but presumably still tie? Actually NHL later introduced shootout, but in 1999-2000 it was just 5-min OT, if still tied then each gets 1 point (the point from regulation tie stands, no additional point). So tie total = 1. Loss in OT = 1 (keep regulation point). Win in OT = 2.

 So expected value conference new: V_NC = 2 p_1 + (-1) p_2 + [p_3 * (expected OT points)]. Conditional on tie stage 1 (prob p_3): OT win prob p_1' -> payoff 2; OT loss prob p_2' -> payoff 1; OT tie prob p_3' -> payoff 1? Wait if tie in OT under new rule, both keep 1 point? Actually if regulation tie, each gets 1. OT sudden death: if no one scores, still tie, each keeps 1. So OT tie payoff = 1. Then conditional expected OT points = 2 p_1' + 1 p_2' + 1 p_3' = 1 + p_1' (since p_1'+p_2'+p_3'=1). Then unconditional: V_NC = 2 p_1 - 1 p_2 + p_3 (1 + p_1'). Wait but p_2 is loss in stage 1, payoff -1? No, under new rule if you lose in regulation (stage 1), there is no OT, you get 0 points? Wait text says: "losing to a conference opponent is –1 point (because a point for the tie at the end of Stage 1 has already been awarded)." Hmm that seems to refer to losing in OT? Let's re-read carefully.

 Text page 183: "Under Rule 89, the payoff to beating a conference opponent is 2 points, tying a conference opponent is 0 points, and losing to a conference opponent is –1 point (because a point for the tie at the end of Stage 1 has already been awarded)."

 This is confusing. It says losing to a conference opponent is -1 point. But if you lose in regulation, you get 0 points, and relative to conference opponent who gets 2, the swing is -2. Why -1? Because they are computing relative payoff perhaps from the perspective of point differential? Or maybe they mean losing in overtime? Let's look at Figure 1 description: New overtime rule: Team A wins (1,2)? No the garbled text: "Tie (0,1) Tie (0,1) Team A wins (1,2) ' Team B wins (-1,1) Team A wins (2,2) ' Team B wins (-2,0)".

 Hard to parse. But I can state equations as given by the authors' verbal descriptions and note where equations are image-only. I will present the reconstructed expected payoff equations with clear assumptions, and flag that equations (1)-(12) appear as images/unextracted in the source PDF, so I reconstruct them from the prose on pages 183-190.

 Units: points (dimensionless league standings points), probabilities dimensionless [0,1], time minutes (20 min periods, 5 min OT).

 Breakdown regimes: p_3=0 (no ties, rule change irrelevant), p_1'=p_2' (no OT skill differential), independence assumption breaks when opponent quality/injuries/road trips condition probabilities, end-of-season talent totals assume no injuries/roster changes, small nonconference sample size.

 RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
 - Lineage: Scully (1989) idealized standard deviation of winning percentage; Maher (1982) Poisson football scores; Dixon & Coles (1997); Karlis & Ntzoufras (2003) bivariate Poisson; Humphreys (2002) competitive balance; Schmidt & Berri (2001); Taylor & Trogdon (2002) NBA tournament incentives; Marburger (2002) property rights/transfers; Kahane (2001) salaries and standings.
 - NHL rule history: OT introduced 1983-84 to decrease ties; ties decreased 4.9% [PAGE 180]; OT decisions peaked 41.5% in 1985-86, lowest 24.7% in 1997-98 [PAGE 180]; Rule 89 adopted 1999-2000 [PAGE 179]; goalie crease changes; obstruction enforcement.
 - Multi-week traps: The paper's empirical window is 1998-99 to 2000-01 (only 2 seasons post-rule). Risk of confounding by other contemporaneous changes (obstruction enforcement, goalie crease, Olympic years). Talent reallocation may take multiple seasons; end-of-season totals assume stationarity across season despite injuries. Cumulative measures non-stationary early season [PAGE 197 note 17]. The "multi-week trap" is inferring persistent strategic adaptation from a short panel where early-season noise and roster turnover dominate.

 RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
 - Crisis habit regression: Under pressure (playoff race, late season), clubs revert to conservative "play for the tie" in conference games under Rule 89 because the point is guaranteed, especially poorer clubs (low p1) at Point A in Figure 4/7 [PAGE 186-187, 190-191]. This is a habit regression to risk aversion/loss minimization [PAGE 191 footnote 11].
 - Counter-trap: Historically successful overtime teams (high x = p1'-p2') face a pivot that makes playing for regulation win less feasible; they may exploit the new region τ southwest (lower p1, higher p3, higher expected value) by deliberately tying regulation and winning in OT [PAGE 188]. But if opponents anticipate this, they adjust defensive allocation, creating a recursive loop: talent shifts to defense in conference games, goal differentials compress, β3/interaction terms lose significance [PAGE 195-196].
 - Clock: The 5-minute OT clock creates a deadline effect; as regulation winds down, trailing clubs increase p1 (risk everything) while leading clubs protect p3 (tie). The model is static (2-stage) and ignores within-game clock management, which is a major omission. End-of-season clock (trade deadline, playoff push) also not modeled.

 CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
 - Physical layer: 4-skater OT rule increases ice time per skater, fatigue, injury risk. The paper acknowledges 4-skater rule adopted to prevent mediocrity [PAGE 181] but does not model fatigue or substitution patterns. Veto: if fatigue degrades overtime skill (p1', p2' endogenously decline with regulation effort), the contour pivots reverse.
 - Biomechanical: Goalie workload; playing best goaltender in conference games is a reallocation of defensive talent [PAGE 196]. No biomechanical load model in paper.
 - Weather: NHL indoor, weather veto largely null except travel/cold-road effects (long road trips mentioned as conditioning variables [PAGE 181]). Not modeled.
 - Adjudication: The paper's inference that Rule 89 caused the interconference "playing for a tie" effect (α disappearance) is vetoed by confounders: 1999-2000 was also a year of intensified obstruction enforcement (post-1998-99 emphasis) which could reduce scoring and increase ties independently of Rule 89. The paper does not isolate Rule 89 from concurrent rule emphasis. Also home-ice advantage disappearance could be due to scheduling or officiating changes.

 RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
 RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I will create 3 counterfactual veto scenarios that are falsifiable/verifiable.
 1. Veto: If overtime skill differential x = p1' - p2' is held constant, the predicted point compression in conference should vanish for teams with high overtime success? Actually text says clubs successful in overtime suffer reduction in expected points, unsuccessful gain. Prediction: Teams with above-average OT winning % pre-rule should show larger point compression; teams below average should show expansion. Verifiable via Table 1 std devs and team-level data.
 2. Veto: If the independence assumption fails and p1,p2,p3 are conditional on opponent quality, then the predicted effort reallocation toward conference games should be stronger when playing stronger conference opponents (higher stakes), but the paper assumes independence. Counterfactual: In games against playoff-bound conference opponents, within-conference goal differential should increase more than against non-playoff conference opponents. Verifiable via game-level data.
 3. Veto: The paper assumes end-of-season talent totals are stationary. Counterfactual: Teams suffering key injuries (especially goaltender) mid-season should deviate from predicted defensive reallocation in conference games; the interaction term β4 (GAX-Y x D) should weaken for injured teams. Verifiable via injury reports and Table 3/4 coefficients.

 Need predictions for each.

 Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for ~1500+ total.

 Important: No betting lines. I must avoid "over-under" in betting terminology? The source text mentions "over-under" in betting terminology in a footnote about Poisson difference. I should not reproduce betting lines or use them. I can mention the term appears in source but not as a betting line. Better to avoid or just say "the source text parenthetically references betting-market terminology, which is outside the scope of this analysis and is not used here." Actually safer to not mention it at all or mention that betting odds are excluded per invariant. I'll avoid it.

 Also no fake ratios. All equations must be formal and derived from source or clearly assumptions.

 Let me start writing.

 I must include exact [PAGE N] markers. I'll cite pages where claims appear.

 Let me map content to pages:
 - Page 178: Abstract, model predicts average points rise, differential fall, expected value higher vs nonconference, lower vs conference. More effort to conference, lesser-talented clubs. Fewer OT periods and ties. Empirical support.
 - Page 179: Rule 89 details: 1 point each for tie regulation, 5-min OT 4 skaters, first to score gets extra point, loser retains 1. Prior: 0 points each regulation tie, OT with 5 skaters, winner 2 loser 0, tie 1 each. OT introduced 1983-84.
 - Page 180: OT decisions peaked 41.5% 1985-86, lowest 24.7% 1997-98. Rule 89 hopes more exciting, attendance, revenue. Competitive balance literature mixed.
 - Page 181: Model does not directly address competitive balance. Two mechanisms: divert talent to conference; intention to increase OT decisions affects incentive to tie regulation. Rank-order tournament characteristics. 4-skater rule to prevent mediocrity.
 - Page 182: 2-stage game. n clubs, two conferences. p1 win stage1, p2 loss, p3 tie. p1+p2+p3=1. Probabilities independent of opponent, function of quality. p1 maximal probability assuming full resources. Team production function. Payoffs stage1: win 2, loss 0. Tie guaranteed 1 point under new rule only. Stage2: 5-min OT, 4 skaters new / 5 skaters old. Win stage2 additional point under Rule89. Old: OT winner 2, loser 0.
 - Page 183: Index payoffs relative to conference standings. Win stage1 = 2 relative. Loss stage1 vs conference = -2, vs nonconference = 0. Win stage2 conditional p1'p3. OT losses p2'p3, OT ties p3'p3. Old conference: win 2, tie 0, loss -2. Old nonconference: win 2, tie 1, loss 0. Rule 89 conference: win 2, tie 0, loss -1. Rule 89 nonconference: win 2, tie 1, loss 1.
 - Page 184: Expected payoffs old/new conference eq (1)(2). Eq (3) relation. Last term difference. Over n-game season difference in eq (4). Point differential increases as p3 increases. Max differential falls from 2 to 1. Successful OT clubs suffer reduction; unsuccessful gain. Point compression. Interconference expansion eq (5)-(8). Assumes clubs don't change efforts.
 - Page 185: Point compression/expansion assume no effort change. Framework for incentives. Figure 2 3D mapping p1,p2,p3. Contour lines.
 - Page 186: Rule 89 within-conference. Solve eq (1) for p2 -> eq (10). Figure 3 p1'=0.3, p2'=0.2. Contours intersect at p3=0. Point A, B, C. Overtime rule change pivots contours, expected payoffs at A and B reduced. Greater reduction in p2 or increase in p1 needed. Effect greater lower initial p1.
 - Page 187: Opportunity sets reduced for all conference clubs, more so for losing clubs. Stage2 success affects Stage1 opportunity sets. Differential p1'-p2' key. Slope given by eq (unnumbered). Change in slope wrt x is -2/x^2. Figure 5. Region τ southwest, region φ northeast.
 - Page 188: Increase in x decreases slope, opens region τ southwest with higher expected value, lower p1, higher p3. Playing for tie more feasible for greater OT success. Playing for win less feasible due to region φ northeast where expected value lower. Holds regardless of OT rule system.
 - Page 189: Figure 5 equation p2 = (2x + 2p1(1-x) - V) / (2(1+x)).
 - Page 190: Nonconference rule change. Eq (12). Contours Fig 6. Point A, B, C. Rule change pivots contour upward, expands opportunity sets. Effect larger for losing clubs. Slope (2-x)/x where x = 2p1' + p3'. Change in slope (x-4)/x^2 negative. Same qualitative effect.
 - Page 191: From incentives to behavior. Formal model would be dynamic programming, left to future research. Assume players play to win. Good/middling/poor teams. Poor club at Point A, reduce p2 by AB by increasing p3. Successful clubs must reduce p2 or increase p1 by greater amount. Both shift talent to conference. "4-point swing": cost of losing conference = 2-point fall; interconference = 0 relative. Winning either = +2 relative.
 - Page 192: Allocate talent to minimize expected loss: -2 p_wc + (0) p_ic. p_ic of little interest. Rule 89 reduces expected value of points from conference games. Reducing expected value increases probability of loss (-2) and reduces probability of win (2). Clubs allocate scarce talent away from interconference to conference until marginal expected loss equated. More conference games; wealthy clubs larger talent stock. Nonconference more ties as wealthy reduce talent (move northwest of Point A).
 - Page 193: Empirical evidence. Test point compression. Table 1 standard deviations. Most cases std dev falls for conference, increases for interconference. Eastern and Western consistent.
 - Page 194: Proxy talent via goal differential. Maher (1982), Dixon & Coles (1997). Poisson. Absolute value of goal diff Poisson-difference difficult. Sign preserved -> normal distribution not rejected Jarque-Bera p=.53, .32 for 98-99, 99-00. Least squares eq (13). GFX-Y goals scored diff, GAX-Y goals allowed diff. α intercept. D dummy 1=conference. Interaction terms DGAX-Y, DGFX-Y. Data 1998-99 N=1107, 1999-2000 N=1148, 2000-01 N=1230. Table 2 descriptive stats.
 - Page 195: Table 3 estimates. 1998-99 pre-rule: β1 positive significant, β2 negative significant. α slight home advantage. β3 not significant. Interaction terms not significant. 1999-2000 first Rule 89 season: |β2| > β1. Home-ice advantage for interconference disappears; best guess tie. β3 order of magnitude larger but not significant? Actually text: "The estimate for β3 shows no statistically significant home-ice advantage for within-conference games, although the value of the coefficient is of an order of magnitude larger than in the previous season..." Suggests Rule 89 responsible, playing for tie dominant in interconference because reward of 1 point relative assured. Not case for conference under Rule 89.
 - Page 196: 2000-01 confirms effect virtually same. Home-ice for conference slightly larger significant. α and D using cumulative values suggest evidence of reallocation. Interaction terms insignificant -> relative talent unchanged. Table 4 end-of-season totals stronger support. β1, β2 similar. Home-ice conference persists pre-rule, disappears after. Interaction term for GAX-Y significant positive 1999-2000 -> return to defensive talent reallocation to conference games larger goal differential favor home club. Effect reduced 2000-01. End-of-season totals outperformed cumulative based on goodness of fit.
 - Page 197: Offensive talent stock relatively unchanged off-season. Defensive talent reallocated by coach (tighter checking, best goalie). Adage defensive = coach, offensive = GM.
 - Page 198: Conclusions. Point standings tighten, more exciting playoff races. Teams allocate more talent to conference. Interconference = opportunity for press-box player to impress.
 - Page 199-202: Notes and references.

 I will use these page citations liberally.

 Now, write the response. Must be purely the XML sections, no extra text outside. Need to ensure word count.

 Let's draft carefully.

 THINK_TRACE:
 Start with derivation. Discuss game tree, expected values, contour pivot, empirical tests, gray zones. >=400 words.

 SOURCE_OPERATORS_AND_EQUATIONS:
 LaTeX equations:
 \ p_1+p_2+p_3=1 \
 \ V^{old}_{C} = 2p_1 - 2p_2 + p_3[2p'_1 - 2p'_2 + 0\cdot p'_3] ? Need to be careful. Actually I should reconstruct based on text descriptions rather than inventing exact coefficients if unsure. But I can present them as reconstructed from prose with assumption labels.
 Better to present equations that are explicitly described in text and note image-only equations.
 Let's define:
 - \mathcal{P} = \{p_1,p_2,p_3\} stage-1 outcome probabilities, simplex \Delta^2.
 - p'_1, p'_2, p'_3 conditional overtime win/loss/tie.
 - Expected payoff conference under new rule:
   V^{N}_{C} = 2p_1 + (-1)p_2 + p_3(1+p'_1) ??? Wait need to derive from text's payoff list.
   Text says under Rule 89 conference: win=2, tie=0, loss=-1. But these are "payoffs" at end of game? Let's interpret as total expected points relative to conference opponent.
   If win in regulation: +2. If lose in regulation: ? The text says losing to conference opponent is -1 because a point for tie at end of stage 1 has already been awarded. This implies that losing in regulation somehow gives -1? That doesn't make sense because regulation loser gets 0 points, winner gets 2, so relative to opponent the swing is -2. Unless they measure relative to some baseline.
   Actually maybe they define payoff relative to the *average* or relative to not playing? Hmm.
   Given confusion, I will present the expected payoff equations symbolically as the authors describe them, and explicitly state that equations (1)-(12) are image-only in the provided source and are reconstructed below from the prose on pages 183-190 under stated assumptions. This avoids fake precision.
   I can write:
   V^{old}_{C} = 2p_1 - 2p_2 + p_3\left[2p'_1 + 0\cdot p'_2 + 0\cdot p'_3\right] \quad \text{(conference, old)}
   V^{N}_{C} = 2p_1 - 1p_2 + p_3\left[2p'_1 + 1\cdot p'_2 + 1\cdot p'_3\right] \quad \text{(conference, new)}
   But I need to check if this matches text. The text says "Assuming the probabilities are unchanged, the expected payoff (points) is lower with the new overtime rule." So V^N_C < V^O_C.
   Let's test with my formulas: Difference V^N_C - V^O_C = (-1 - (-2))p_2 + p_3[ (2p'_1 + p'_2 + p'_3) - (2p'_1) ] = p_2 + p_3(1 - p'_1?) Wait p'_2+p'_3 = 1-p'_1, so bracket = 2p'_1 + 1 - p'_1 = 1 + p'_1. Then difference = p_2 + p_3(1+p'_1). This is positive, meaning new expected payoff higher, contradicting text. So my payoff assignments are wrong.

 Let's re-derive carefully from text.

 Page 183: "The relative payoff under the old overtime rule is 2 points for a win against a conference opponent, 0 points for a tie (because the relative standing does not change within the conference), and –2 points for a loss."
 This sounds like the payoff for the *entire game* under old rule conference: win = 2, tie = 0, loss = -2.
 But earlier it said win stage 1 = 2, loss stage 1 = -2 (conference), tie goes to OT.
 Under old rule: if tie stage 1 (prob p_3), then OT: win prob p'_1 -> ? payoff? If OT win, total points? Old rule: regulation tie gave 0 points each? Wait prior to rule change: "each club received 0 points at the end of regulation play in the event of a tie. The teams then played a 5-minute overtime period... The first team to score earned 2 points... losing team received no points. In the event of a tie at the end of overtime period, each team received a single point."
 So under old rule:
 - Regulation win: 2 points.
 - Regulation loss: 0 points.
 - Regulation tie -> OT win: 2 points.
 - Regulation tie -> OT loss: 0 points.
 - Regulation tie -> OT tie: 1 point each.

 Relative to conference opponent (zero-sum relative?):
 If I win regulation: I get +2 relative to opponent who gets 0? Actually relative standing: I gain 2, opponent loses 2? The text frames payoffs as relative to other clubs in own conference. So a win awards 2 points relative, a loss decreases by 2. A tie: relative standing doesn't change, so 0 relative? But if both get 1 point, relative standing doesn't change, yes 0.

 So old conference expected relative payoff:
 V^{old}_C = 2 p_1 + (-2) p_2 + p_3 [ 2 p'_1 + (-2) p'_2 + 0 p'_3 ] ? But wait, if OT tie, both get 1 point, relative standing unchanged -> 0 relative. If OT win, I get 2, opponent 0 -> relative +2? But earlier I already got 0 for regulation tie? Actually no: under old rule regulation tie gives 0 points to each, then OT determines. So total points: OT winner gets 2, OT loser 0, OT tie 1 each. Relative to opponent: OT win +2, OT loss -2, OT tie 0.
 So V^{old}_C = 2p_1 - 2p_2 + p_3(2p'_1 - 2p'_2 + 0 p'_3).

 Under new Rule 89:
 - Regulation win: 2 points (relative +2).
 - Regulation loss: 0 points (relative -2? or 0?). Text says under Rule 89 losing to conference opponent is -1 point because a point for tie at end of stage 1 already awarded. That implies regulation loss is not -1; rather losing in *overtime* is -1? Let's parse: "losing to a conference opponent is –1 point (because a point for the tie at the end of Stage 1 has already been awarded)." This suggests they are computing payoff conditional on reaching Stage 2? Or maybe they mean if you tie regulation (get 1 point) and then lose OT, your total is 1, opponent's total is 2, so relative to opponent you are -1. Yes! That makes sense. So the payoff list "win=2, tie=0, loss=-1" under Rule 89 conference refers to outcomes where the game is tied at end of Stage 1? No, it says "payoff to beating a conference opponent is 2 points, tying a conference opponent is 0 points, and losing to a conference opponent is –1 point." This seems to be unconditional total game outcomes:
 - Win (regulation or OT): +2 relative.
 - Tie (regulation tie, OT tie): 0 relative (both get 1 point each? Under new rule regulation tie each gets 1, OT tie still 1 each, so relative 0).
 - Loss: If regulation loss, you get 0, opponent 2 -> relative -2. If OT loss, you get 1 (regulation point), opponent 2 -> relative -1. So "loss = -1" is an average or specifically OT loss? The text lumps them.

 This is getting too deep into reconstructing ambiguous image equations. The best approach: state the formal definitions from text (probabilities, simplex, conditional OT probs) and present the expected-payoff comparisons qualitatively with the exact textual relations, while explicitly noting equations (1)-(12) are image-only. I can write symbolic equations for the *difference* that are clearly assumptions:

 \Delta V_C = V^{N}_C - V^{O}_C = p_3\left[ (1 + p'_1) - 2p'_1 \right] ... hmm.

 Actually the text gives the key result: "The last term in (3) is the difference in expected points between the new and old overtime rule systems for a single game." And "The point differential increases as the probability of a tie in Stage 1, p3, increases, holding overtime success constant because a single point is then awarded to each club. The maximum point differential to the winner then falls from 2 points to only 1 point."

 I will present:
 V^{old}_{C} = 2p_1 - 2p_2 + 2p_3(p'_1 - p'_2)
 V^{N}_{C} = 2p_1 - 2p_2 + p_3\left[ 2p'_1 + 1(1-p'_1) \right] - p_3? No.

 Let's not fake exact coefficients. Instead:
 \text{Let } \mathcal{V}^{O}_{C}(p_1,p_2,p_3;p'_1,p'_2) \text{ denote expected relative points under old rule (image-only Eq. 1, p. 184).}
 \text{Let } \mathcal{V}^{N}_{C}(p_1,p_2,p_3;p'_1) \text{ denote expected relative points under Rule 89 (image-only Eq. 2, p. 184).}
 \text{Authors state: } \mathcal{V}^{N}_{C} < \mathcal{V}^{O}_{C} \text{ when } p_1,p_2,p_3 \text{ are held constant.}
 \Delta V_{C} = \mathcal{V}^{N}_{C} - \mathcal{V}^{O}_{C} \propto -p_3(1 - p'_1) ... something.

 But invariant says "State formal LaTeX equations... When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I can quote the verbal description and present the equations as they appear in text even if some are images. I can transcribe what I see: The source text has blank spots where equations are. I should not fabricate exact LaTeX for image equations. I will present the structural equations that are fully specified in text:
 - p_1 + p_2 + p_3 = 1 [PAGE 181]
 - p'_1 + p'_2 + p'_3 = 1 (implied)
 - Unconditional OT probabilities: p_1 p'_3? No text says "probability is p1'p3" for OT win, "p2'p3" for OT loss, "p3'p3" for OT tie [PAGE 183]. Wait text says: "A win in the second stage of the game is conditional on reaching the second stage; hence, its probability is p1’p3, where p1’is the probability of winning the contest in the second stage of the game. The unconditional probabilities for overtime losses and ties are p2’p3 and p3’p3 respectively." So joint probs: P(Stage1 tie AND OT win) = p_3 p'_1. Etc.

 I'll write those exactly.

 Then expected payoff difference: I can write the relationship Eq (3) as described: "The expected payoffs in (1) and (2) are related by..." but since Eq (3) is image, I'll quote the prose: "The last term in (3) is the difference in expected points between the new and old overtime rule systems for a single game." [PAGE 184]

 And Eq (4): over n-game season difference with bar averages [PAGE 184].

 I'll make sure not to invent fake ratios.

 Let's write.

 Also need verbatim quotes. I'll include several.

 For RLVR_COUNTERFACTUAL_VETOES: "3 verifiable RLVR veto scenarios + predictions." RLVR likely means Reinforcement Learning Verifiable Rewards or just verifiable. I'll interpret as verifiable counterfactual veto scenarios. Each scenario: condition, veto mechanism, prediction.

 Let's write now. I'll aim for high quality and word count.

 Need to be careful: The user asked for exact XML sections. I will output only the sections in order.

 Let's draft THINK_TRACE:

 (approx 500 words)

 Then SOURCE_OPERATORS_AND_EQUATIONS with LaTeX blocks and citations.

 Then RETROCAUSAL_GENEALOGY.

 Then RECURSIVE_THEORY_OF_MIND.

 Then CROSS_LAYER_VETO_ADJUDICATION.

 Then RLVR_COUNTERFACTUAL_VETOES with 3 scenarios.

 Let's write the content.

 THINK_TRACE:
 - Start: The paper constructs a 2-stage game. Stage 1 regulation 3x20. Outcomes p1 win, p2 loss, p3 tie. Stage 2 OT conditional.
 - Multi-hop derivation: Rule 89 changes Stage-2 payoff matrix: guaranteed point for regulation tie removes the zero point floor of old rule. For conference play, old relative payoff vector over terminal nodes is {+2 (regulation win), -2 (regulation loss), +2/-2/0 (OT win/loss/tie)}. New rule vector is {+2, -2 (regulation loss?), 0 (tie), +2/-1/0?} hmm avoid exact if unsure. Instead say: old regulation tie yielded 0 points each then OT decided 2/0 or 1/1; new rule yields 1 point each immediately, OT winner adds one (total 2), OT loser keeps one (total 1), OT tie remains 1/1. This shifts expected value downward for conference games because maximum spread collapses from 2 to 1 in regulation-tie subgames.
 - Gray zone 1: probabilities held constant across rule regimes (heroic assumption, note 8 p.184). This breaks if effort responds endogenously.
 - Gray zone 2: independence of opponent (p1,p2,p3 only function of own quality) [PAGE 181]; unrealistic because relative quality, injuries, road trips condition outcomes.
 - Gray zone 3: goal differential as talent proxy assumes sign-preserving normal distribution; Jarque-Bera p=.53,.32 only for two seasons [PAGE 194].
 - Gray zone 4: end-of-season totals assume stationarity despite injuries [PAGE 196-197].
 - Empirical chain: Table 1 std dev falls in conference (e.g., Eastern WC 16.190 to 13.563, Western WC 11.673 to 13.005? Actually Western goes up slightly in 2000-01? Let's check table: Western Conference 1999-2000 WC std dev 11.673 vs 13.425? Wait table columns are messy. I won't cite specific numbers to avoid error, just say "most cases standard deviation falls for within-conference games and increases for interconference games" [PAGE 193, Table 1 p.194].
 - Regression: Table 3/4 show home-ice α disappears for interconference in 1999-00, consistent with playing-for-tie [PAGE 195-196]. Interaction terms insignificant -> relative talent unchanged [PAGE 196].
 - Multi-week trap: only two post-rule seasons; contemporaneous obstruction enforcement and crease changes not isolated [PAGE 179-180, 181]. Early-season cumulative measures non-stationary [PAGE 197 note 17].

 Good.

 SOURCE_OPERATORS_AND_EQUATIONS:
 List equations:
 1. p_1 + p_2 + p_3 = 1 [PAGE 181]
 2. P(Stage-2 win) = p_3 p'_1, P(Stage-2 loss) = p_3 p'_2, P(Stage-2 tie) = p_3 p'_3 [PAGE 183]
 3. V^{old}_C < V^{N}_C (probabilities unchanged) [PAGE 184]
 4. Seasonal difference: \Delta V = n(\bar{p}...) over n-game season [PAGE 184]
 5. Minimax expected loss: L = -2 p_{wc} + 0 p_{ic} [PAGE 192]
 6. Goal-diff regression: GD_i = \alpha + \beta_1 GF_{X-Y} + \beta_2 GA_{X-Y} + \beta_3 D + \beta_4 D GA_{X-Y} + \beta_5 D GF_{X-Y} + \epsilon_i [PAGE 194-195]
 Units: points, dimensionless probabilities, minutes. Breakdown: p_3=0 nullifies rule change; p'_1=p'_2 eliminates OT skill gradient; end-of-season stationarity breaks with injuries/trades.

 Verbatim quotes: include at least 2-3.

 RETROCAUSAL_GENEALOGY:
 Lineage: Scully 1989 [PAGE 180 note 3], Maher 1982 [PAGE 194], Dixon & Coles 1997 [PAGE 194], Karlis & Ntzoufras 2003 [PAGE 194 note 15], Humphreys 2002 [PAGE 180], Schmidt & Berri 2001 [PAGE 180], Taylor & Trogdon 2002 [PAGE 181 note 7], Marburger 2002 [PAGE 181], Kahane 2001 [PAGE 181 note 5].
 NHL history: OT 1983-84, ties down 4.9% [PAGE 180], OT decisions peak 41.5% 1985-86, trough 24.7% 1997-98 [PAGE 180], Rule 89 1999-2000 [PAGE 179], goalie crease changes [PAGE 179], obstruction enforcement [PAGE 179].
 Multi-week trap: short panel 1998-2001, confounders, roster turnover, injury nonstationarity.

 RECURSIVE_THEORY_OF_MIND:
 Crisis habit regression: poor clubs at Point A [PAGE 186-187, 191] regress to minimizing expected loss -2 p_wc [PAGE 192], playing for tie in regulation to secure guaranteed point, especially late season / playoff race. Footnote 11 risk aversion [PAGE 193 note 11].
 Counter-trap: high overtime-success clubs (high x=p'_1-p'_2) face pivot making regulation win less attractive; region τ southwest (lower p1, higher p3, same/higher EV) [PAGE 188]. Opponents mirror by shifting defensive talent to conference, compressing goal differentials, nullifying β interaction terms [PAGE 196]. Recursive depth: clubs anticipate opponents' talent reallocation and adjust own lineup, but paper leaves dynamic programming to future research [PAGE 191-192].
 Clock: static 2-stage model ignores within-regulation clock (pulling goalie, icing, defensive shell) and end-of-season trade deadline/playoff push [PAGE 191-192].

 CROSS_LAYER_VETO_ADJUDICATION:
 Physical: 4-skater OT increases per-skater load and fatigue; paper notes 4-skater rule to prevent mediocrity [PAGE 181] but doesn't model fatigue-induced decline in p'_1,p'_2. Veto if regulation effort degrades OT skill.
 Biomechanical: goalie workload; defensive reallocation via playing best goalie [PAGE 196]; no load model.
 Weather: indoor league, weather null; travel/road trips noted as conditioning var but not modeled [PAGE 181].
 Adjudication: causal identification vetoed by concurrent rule changes (obstruction enforcement, crease) and small nonconference sample. Home-ice α disappearance could reflect officiating/scheduling, not solely Rule 89 [PAGE 195-196].

 RLVR_COUNTERFACTUAL_VETOES:
 Scenario 1: High-OT-success club (top quartile p'_1 - p'_2 pre-rule). Veto: point compression predicted for all conference clubs, but high OT success clubs should lose expected points under Rule 89 [PAGE 184]. Prediction: their conference point totals decline relative to low-OT-success clubs in 1999-00/2000-01; verifiable via team-level standings.
 Scenario 2: Opponent-quality conditionality. Veto: independence assumption fails if p1,p2,p3 depend on opponent quality. Prediction: within-conference goal differential increase should be larger vs playoff-bound conference opponents than vs non-playoff conference opponents; verifiable via game-level goal differentials and schedule strength.
 Scenario 3: Injury-induced nonstationarity. Veto: end-of-season talent totals assume fixed talent. Prediction: clubs losing starting goaltender or top defenseman mid-season should show weaker β4 (GAX-Y × D) interaction in conference games; verifiable by interacting injury flags with Table 3/4 specification.

 Each scenario has prediction.

 Word count check: I need to ensure total >1000. THINK_TRACE 450+, SOURCE 400+, RETRO 300+, RECURSIVE 300+, CROSS 300+, RLVR 300+ = >2000. Good.

 Let's write it out fully.

 I need to avoid saying "over-under" as betting. The source mentions it but I will not repeat it or will say "the source text's parenthetical betting-market terminology is excluded from this analysis per invariant." Actually better not mention.

 Also no odds/spreads/moneylines/totals.

 Let's compose final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper models the NHL’s Rule 89 as a two-stage extensive-form game. Stage 1 is regulation (three 20-minute periods) with terminal outcomes win (p₁), loss (p₂), or tie (p₃), constrained to the simplex p₁ + p₂ + p₃ = 1 [PAGE 181]. Stage 2 is a five-minute sudden-death overtime played only conditional on a Stage-1 tie; conditional overtime win/loss/tie probabilities are p₁′, p₂′, p₃′, so unconditional joint probabilities are p₃p₁′, p₃p₂′, and p₃p₃′ [PAGE 183].

Multi-hop derivation. Under the pre-Rule-89 regime, a regulation tie awarded 0 points to each club, after which overtime awarded 2 points to the winner and 0 to the loser, or 1 point each if overtime remained tied [PAGE 179]. Under Rule 89 (adopted 1999–2000), a regulation tie immediately guarantees 1 point to each club; the overtime winner adds a point (total 2), the overtime loser retains the regulation point (total 1), and an overtime tie preserves 1 point each [PAGE 179]. Because the maximum point swing in a regulation-tie subgame collapses from 2 points to 1 point, the expected relative payoff from a within-conference contest falls when p₃ > 0 and overtime success is held constant [PAGE 184]. The authors state that “the expected payoff (points) is lower with the new overtime rule” for conference play under unchanged probabilities [PAGE 184], while interconference expected payoffs expand because a conference standing point is earned even when the opponent is outside the conference [PAGE 184–185].

Gray-zone audit. (i) Heroic stationarity: the comparative statics explicitly assume probabilities are unchanged across rule regimes [PAGE 184, note 8]; if effort responds endogenously, the contour pivots in Figures 3–7 do not describe actual play. (ii) Opponent independence: p₁, p₂, p₃ are treated as functions only of own-club quality, though the text concedes they are realistically conditional on relative opponent quality, injuries, road trips, and conference position [PAGE 181]. (iii) Talent proxy: goal differential is used as a talent measure, with sign preservation permitting a normal approximation (Jarque–Bera p = .53 and .32 for 1998–99 and 1999–2000) [PAGE 194]. (iv) End-of-season totals assume roster stationarity despite injuries, though the authors argue the injury effect is not large enough to invalidate the measure [PAGE 196–197]. (v) Short panel: inference rests on 1998–99 through 2000–01, only two post-rule seasons, while contemporaneous obstruction enforcement and goalie-crease adjustments were also underway [PAGE 179–181]. Empirical support appears in Table 1, where within-conference point standard deviations generally fall and interconference standard deviations rise across both conferences [PAGE 193–194, Table 1], and in Tables 3–4, where the interconference home-intercept α disappears after Rule 89, consistent with “playing for a tie” becoming attractive in nonconference games [PAGE 195–196]. The multi-week trap is that a two-season window cannot separate Rule 89 causal effects from coaching adjustments, roster turnover, and league-wide officiating emphasis that unfold across multiple seasons.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units. All probabilities are dimensionless elements of [0,1]. League-standings payoffs are measured in points (dimensionless integer awards). Time is measured in minutes: regulation periods are 20 minutes each and overtime is 5 minutes [PAGE 179]. Skater counts are discrete: 5 skaters plus goaltender in regulation and old-rule overtime; 4 skaters plus goaltender under Rule 89 overtime [PAGE 179].

Exact stage-1 constraint from the source:
\[
p_1 + p_2 + p_3 = 1 \qquad \text{[PAGE 181]}
\]
where p₁ = P(win in Stage 1), p₂ = P(loss in Stage 1), p₃ = P(tie in Stage 1).

Conditional overtime operators:
\[
P(\text{Stage-2 win}) = p_3 p_1', \quad
P(\text{Stage-2 loss}) = p_3 p_2', \quad
P(\text{Stage-2 tie}) = p_3 p_3'
\qquad \text{[PAGE 183]}
\]
with p₁′ + p₂′ + p₃′ = 1.

Expected-payoff relations. Equations (1)–(12) appear as unextracted image objects in the provided PDF [PAGES 184–190]; they are not reinvented here. The source states verbatim: “Assuming the probabilities are unchanged, the expected payoff (points) is lower with the new overtime rule” for conference opponents [PAGE 184], and that “the last term in (3) is the difference in expected points between the new and old overtime rule systems for a single game” [PAGE 184]. Over an n-game season, the difference uses season-average probabilities \(\bar p_1, \bar p_2, \bar p_3\) [PAGE 184].

Loss-minimization objective used for talent allocation:
\[
L = -2\,p_{\text{wc}} + (0)\,p_{\text{ic}}
\qquad \text{[PAGE 192]}
\]
where p_wc is the probability of losing a within-conference game and p_ic is the probability of losing an interconference game; the zero coefficient on p_ic reflects the fact that interconference losses do not alter relative standing within the club’s own conference.

Talent-reallocation regression (Eq. 13):
\[
GD_i = \alpha + \beta_1 GF_{X-Y} + \beta_2 GA_{X-Y} + \beta_3 D + \beta_4(D \cdot GA_{X-Y}) + \beta_5(D \cdot GF_{X-Y}) + \varepsilon_i
\qquad \text{[PAGES 194–195]}
\]
GD_i is regulation goal differential in contest i; GF_{X-Y} and GA_{X-Y} are cumulative goals-scored and goals-allowed differentials; D = 1 for within-conference contests and 0 otherwise [PAGE 195].

Breakdown and singularity regimes. If p₃ = 0, Rule 89 has no effect on expected value because no regulation tie is ever reached [PAGE 186]. If p₁′ = p₂′ (no overtime skill differential), the overtime success gradient x = p₁′ − p₂′ vanishes and the contour slope effects in Figures 4–5 disappear [PAGE 187–188]. The independence assumption breaks down when opponent quality, injuries, or travel condition Stage-1 probabilities [PAGE 181]. End-of-season totals break down under mid-season injuries or trades that violate talent stationarity [PAGE 196–197].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage. The article inherits its competitive-balance measurement logic from Scully’s (1989) idealized standard deviation of winning percentage [PAGE 180, note 3] and the attendance–balance literature of Humphreys (2002) and Schmidt & Berri (2001) [PAGE 180]. Its goal-differential specification follows Maher (1982) and Dixon & Coles (1997), with the Poisson-difference complication noted and Karlis & Ntzoufras (2003) cited for bivariate Poisson sports modeling [PAGE 194, note 15]. The tournament-incentive analogy is drawn from Taylor & Trogdon (2002) on NBA losing-to-win incentives [PAGE 181, note 7], and the property-rights trading argument from Marburger (2002) on within-conference player transfers [PAGE 181]. Kahane (2001) supplies the salary–standing link underlying indirect player incentives [PAGE 181, note 5].

NHL rule history. Overtime was introduced in 1983–84 specifically to reduce ties; ties fell 4.9% that season [PAGE 180]. The share of overtime games reaching a decision peaked at 41.5% in 1985–86 and bottomed at 24.7% in 1997–98 [PAGE 180], motivating Rule 89 for 1999–2000 [PAGE 179]. The league had previously experimented with goalie-crease dimensions and was intensifying obstruction enforcement to speed play [PAGE 179], creating a multi-cause environment.

Multi-week traps. The empirical window spans only 1998–99 to 2000–01 [PAGES 194–196], so seasonal fixed effects, coaching turnover, and roster churn cannot be separated from Rule 89. Early-season cumulative talent measures are explicitly non-stationary [PAGE 197, note 17], and end-of-season totals assume no injury-driven talent decay [PAGE 196–197]. Because the NHL simultaneously emphasized rule enforcement around the same period, the disappearance of the interconference home-ice intercept α in 1999–2000 may reflect officiating or scheduling changes rather than Rule 89 alone [PAGE 195–196]. Any inference that persists beyond this window requires controlling for those contemporaneous league-wide treatments.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. Poor clubs (low p₁) located at Point A in Figures 4 and 7 face a post-rule contour pivot that reduces expected payoff at existing (p₁, p₂) combinations [PAGE 186–187, 190–191]. Under loss minimization, \(L = -2p_{\text{wc}}\) [PAGE 192], such clubs regress to conservative regulation play: they protect p₃ to secure the guaranteed Rule 89 point rather than risk p₂ chasing a regulation win, especially in late-season playoff races where risk aversion dominates [PAGE 193, note 11]. This is a crisis habit—playing not to lose—induced by the guaranteed point floor.

Counter-trap. Clubs with high overtime success (large x = p₁′ − p₂′) face the opposite incentive: the pivot opens region τ southwest of Point A, where lower p₁ and higher p₃ yield equal or higher expected value [PAGE 188]. These clubs can profit by deliberately playing for the regulation tie and exploiting overtime superiority. However, if all clubs anticipate this, defensive talent is reallocated toward conference games league-wide [PAGE 192–193], compressing goal differentials and rendering the interaction terms β₄ and β₅ statistically insignificant because relative talent changes cancel out [PAGE 196]. The recursion depth is two: club A shifts talent to conference defense expecting club B to do the same, nullifying the first-mover advantage; the paper leaves this dynamic-programming fixed point to future research [PAGE 191–192].

Clock layer. The model is a static two-stage game and omits within-regulation clock management (goalie pulls, defensive shells, icing in the final minutes) and end-of-season clock pressure (trade deadline, playoff-elimination games). The 5-minute overtime deadline creates a terminal substitution effect not captured by stage probabilities, meaning p₁′, p₂′, p₃′ are themselves functions of regulation tempo and fatigue—endogenous variables the model treats as exogenous [PAGE 183, 191].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The 4-skater overtime rule increases ice time per skater and collision frequency; the league adopted it partly to prevent “mediocrity” from point compression [PAGE 181]. The paper does not model fatigue-driven degradation of p₁′ and p₂′ over a 5-minute overtime or across back-to-back games. Veto condition: if regulation effort under Rule 89 is elevated, overtime skill probabilities should endogenously decline, reversing the predicted contour pivots for tired clubs.

Biomechanical layer. Defensive talent reallocation is operationalized by coaches playing the best goaltender and tightening checking [PAGE 196], but no goalie workload, save-frequency, or injury-exposure model is included. Veto condition: a starting goaltender’s cumulative minutes or injury status should moderate the β₄ interaction in Eq. 13; the paper’s end-of-season totals assume this away [PAGE 196–197].

Weather layer. NHL games are indoors, so direct weather vetoes are null; however, long road trips and travel fatigue are acknowledged as conditioning variables for p₁, p₂, p₃ but are not included in the empirical specification [PAGE 181]. Veto condition: conference games played after transcontinental travel should show systematically lower p₁ and higher p₃, unmodeled by the talent proxy.

Adjudication. The strongest veto is causal identification. Rule 89 was adopted alongside intensified obstruction enforcement and other rule emphasis [PAGE 179–181], so the post-1999 disappearance of the interconference home intercept α [PAGE 195–196] cannot be uniquely attributed to Rule 89 without a difference-in-differences control for officiating strictness. Nonconference samples are small relative to conference samples [PAGE 193], widening confidence intervals around interconference point-expansion predictions. Therefore, the paper’s behavioral claim—that clubs reallocate scarce talent to conference games—is plausible but not uniquely identified from the provided evidence alone.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Overtime-skill heterogeneity veto). Condition: Partition clubs by pre-rule overtime success differential x = p₁′ − p₂′. Veto: The model predicts point compression for all conference clubs [PAGE 184–185], but clubs with high x lose expected points under Rule 89 while low-x clubs gain [PAGE 184]. Prediction: In 1999–2000 and 2000–01, top-quartile overtime-success clubs should exhibit smaller conference point totals—or larger point losses—relative to bottom-quartile clubs, holding regular-season win probability constant. Verifiable from team-level standings and overtime records without betting lines.

Scenario 2 (Opponent-quality conditionality veto). Condition: Relax the independence assumption [PAGE 181] so that p₁, p₂, p₃ depend on opponent playoff status. Veto: If talent reallocation targets conference playoff races, the within-conference goal-differential increase should be larger against playoff-bound conference opponents than against non-playoff conference opponents. Prediction: Game-level regression of goal differential on conference dummy interacted with opponent playoff probability yields a positive significant interaction in 1999–2000 and 2000–01, but not in 1998–99. Verifiable via game logs and season standings.

Scenario 3 (Injury nonstationarity veto). Condition: End-of-season talent totals assume fixed rosters [PAGE 196–197]. Veto: Clubs suffering a mid-season starting-goalie or top-defenseman injury should not exhibit the full defensive-reallocation coefficient β₄ (GAX-Y × D) in conference games. Prediction: Interacting an injury flag with Eq. 13’s conference interaction terms yields a significant negative three-way term (Injury × D × GA_{X-Y}) for 1999–2000 and 2000–01, implying the defensive-talent return is impaired by roster shock. Verifiable from injury reports and game-level goal differentials; no odds or spreads are invoked.
</RLVR_COUNTERFACTUAL_VETOES>