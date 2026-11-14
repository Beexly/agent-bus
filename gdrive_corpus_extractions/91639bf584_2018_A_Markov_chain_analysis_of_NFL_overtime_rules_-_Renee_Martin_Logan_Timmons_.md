---
source: "2018 A Markov chain analysis of NFL overtime rules - Renee Martin, Logan Timmons and Megan Powell.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 11
model: deepseek/deepseek-v4.1-flash-1017
words: 8951
---

<NATIVE_REASONING>
We need answer per prompt. Need produce GSE/GSI frontier reasoning about source. Need strict invariants. No betting lines. Need >=1000 words across exact XML sections. Need deep derivation, formal LaTeX, units, page citations exact [PAGE N] and verbatim quotes. Need no fake ratios. Need cite page markers exact. We have source text. Need answer likely analysis of Markov chain NFL overtime. Need include THINK_TRACE >=400 words. Other sections too. Need total >=1000 words. We need be careful: no betting lines, no odds. No "spread/total/moneylines". Avoid sports betting. Focus on scientific/formal. Need mention no betting. Need formal equations. We can use Markov chain fundamental matrix, absorption probabilities, break-even onside kick equation. Need units: probabilities dimensionless; durations seconds/minutes; expected possessions count. State assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes. Need quote exact phrases from source. Need "retrocausal genealogy" historical/scientific lineage & multi-week traps. Need "recursive theory of mind" crisis habit regression vs counter-trap vs clock. Need "cross-layer veto adjudication" physical/biomechanical/weather veto proof. Need "RLVR counterfactual vetoes" 3 verifiable RLVR veto scenarios + predictions. Need integrate source operators/equations. Need likely discuss Markov chain operators; absorbing states; fundamental matrix; expected overtime length; win probabilities; onside kick break-even. Need formal LaTeX with units. Need cite page exact. Need breakdown regimes: M. Jones? need mention model assumptions: equivalent team strength, regular season OT, no kickoff time, average possession 2:38, end-of-game tie probabilities moved to B Pos etc. Singularity? For fundamental matrix N=(I-Q)^{-1} exists iff spectral radius(Q)<1, i.e., absorption almost surely. Breakdown if submatrix Q has eigenvalue 1 or absorbing not reachable; or if probabilities not row stochastic; or zero denominator in onside equation; or estimated data sparse. Need mention MSD-10 using last 7 min data from 2013-2016; small sample for OT >8 minutes; "Games with OT lasting more than 8 minutes is a small data set" [PAGE5]. Need exact quotes.

Need maybe explain source's equations. Let's parse source details.

Pages:
P1: Abstract: "modified sudden death rule change increased the average overtime from 7 minutes 1 second to 7 minutes 37 seconds and that the probability of the team possessing the ball first winning decreased from 59.9% to 55.4%." "10-minute overtime change will result in team possessing ball first winning 54.1% ... tie increasing to 11.2% from under 2%". [PAGE1]
P2: Markov chain prior models; C Jones. "We were able to limit our data search to overtime drives only..." [PAGE2]. Alternative formats.
P3: Transition matrix, absorbing states. "Absorbing states are states that cannot be left once they are entered." [PAGE3]. "the number of FGs, TDs, safeties, defensive TD, no scores, end of games, and total possessions were used" [PAGE3]. "because it is highly unlikely a game will end in a tie in the first two possessions, we consider the probability of transitioning into EOG Tie in the first two possessions to be zero." [PAGE3]
P4: "we estimate the length of overtime under that ruleset by using the average length of a possession (2 minutes, 38 seconds)." [PAGE4]. Fundamental matrix gives total number of times expected. "From the Fundamental Matrix ... average number of possessions during overtime is the sum of the first row..." [PAGE4]. Table 4 fundamental matrix: A Pos row 1.685,0.974 sum 2.659*158 sec = 420? 2.659*158=420.122 sec = 7:00.1. yes.
P5: MSD: "average length of overtime to be the sum of the first row ... multiplied by average length of possessions, which gives 7 minutes 37 seconds." [PAGE5]. Table 7. "Team A wins 55.4%, B 43.3%, tie 1.3%." [PAGE5]. Table 8. "We then consider the model without an end of game tie option to represent playoff games." [PAGE5].
P6: MSD-10 results Table 9: A 54.1, B 34.6, tie 11.2. "It is expected that more games will end in a tie in upcoming seasons with a shorter OT and our model predicts that probability ... increasing from under 2% to over 11%." [PAGE6]. "For playoff games ... probability of Team A winning to be 59.5% with an OT length of 8 minutes 8 seconds." [PAGE6]. AMSD assumptions. "Team A wins 54.7% ... B 43.9% ... tie 1.4% ... average 7 minutes 57 seconds" [PAGE6].
P7: Table 11 sensitivity. Onside kicks equation. "P(Recover and Win) = P(Recover) P(Win|Recover)" [PAGE7]. "P(Do not Recover and Win) = P(Do not recover) P(Win|Do not recover)" [PAGE7]. "P(Recover and Win)+P(Do not recover and Win)=P(B Wins, reg kick)" [PAGE7]. Solve for P(Recover). Table 12. "if Team B recovers an onside kick, Team A is considered as having had a chance to possess the ball so, in all OT formats, the game will be operating under sudden death rules." [PAGE7].
P8: onside data: recovered onside kicks FG 19.3% TD 28.1%, turnover downs 10.5%, approx 30.2% FGs made; score probability 0.193+0.281+(0.105)(0.302)=0.506. "The break-even recovery probabilities are all higher than the league onside kick recovery averages of 13% in 2010–2012 and 5.2% in 2013–2015." [PAGE8]. Table 14: SD 0.177, MSD 0.137, MSD-10 0.140, AMSD 0.121. "no team has ever attempted an onside kick during overtime" [PAGE8]? exact: "in the last 5 years no team has ever attempted an onside kick during overtime." [PAGE8]
P9: Table 15 summary. Conclusion: "while the MSD format does seem to get the probabilities closer to 50-50 for each team to win, it still can be improved." [PAGE9]. "AMSD ... game length is not greatly extended and seems slightly more fair to both teams, but probability of Team A winning (54.7%) is still better than simply home field advantage during overtime (54.2%)." [PAGE9]. Future work.
P10: Appendix data. Table 17 149 drives 54 games, Table 18 118 drives 48 games. Table 20 OT length by year.
P11: Table 23 MSD-10 matrix; Table 24 AMSD matrix; Table 25 drive starting results. Need maybe cite [PAGE11] for matrices.

Need answer structured with XML tags. Need likely use "DRIVE SOURCE" context. Need maybe mention "I will not produce betting lines; not requested." But no need.

Need ensure total >=1000 words. We can write ~2500 words. Need THINK_TRACE >=400 words. We can have sections. Need "multi-hop derivation & gray-zone audit". Include equations and citations. Need exact XML section names. Need include all required tags exactly. Need no other? We can have intro? Probably okay but must include exact sections. We can write only these sections. Need ensure no betting lines. Need avoid words like "odds" maybe okay? Strict says never mention spreads, totals, moneylines, or odds. Avoid "odds" entirely. Avoid "betting lines". We can mention "probability" only. Avoid "moneyline". Good.

Need formal LaTeX. Use equations. Need units. Need cite exact [PAGE N] markers with verbatim quotes. We need quote exact source sentences. Need avoid fabricating quotes. Use quotes from source. Good.

Need think trace deep: explain how source models work. We can derive fundamental matrix. Need maybe compute some values? Let's verify numbers. SD transition Q from Table 21 [PAGE10]: A Pos -> B Pos 0.638, A Wins 0.356, Tie 0.007. B Pos -> A Pos 0.638, B Wins 0.356, Tie 0.007. Q = [[0,0.638],[0.638,0]]. Fundamental N=(I-Q)^-1 = 1/(1-0.638^2)*[[1,0.638],[0.638,1]] = 1/(1-0.407044)=1/0.592956=1.686? [[1.686,1.076? wait 0.638/0.592956=1.076? But source Table 4 says 1.685,0.974. Hmm discrepancy? Let's compute: Table 21: A Pos -> B Pos 0.638; B Pos -> A Pos 0.638. Fundamental should N = [[1,0.638],[0.638,1]]/(1-0.638^2) = [[1.686,1.076],[1.076,1.686]]. But source Table 4 [PAGE4] says [[1.685,0.974],[0.974,1.685]]. Inconsistent? Wait Table 21 row: A Pos 0 0.638 0.356 0 0.007; B Pos 0.638 0 0 0.356 0.007. Then Q [[0,0.638],[0.638,0]]. N offdiag = q/(1-q^2) = 0.638/0.592956 = 1.076. But source table 4 says 0.974. How get 0.974? If q=0.493? 0.974 = q/(1-q^2) => q ~0.638? Wait solve q/(1-q^2)=0.974 => 0.974q^2 + q -0.974? Actually q = 0.974(1-q^2) -> 0.974 q^2 + q -0.974=0. q=(-1+sqrt(1+4*0.974^2))/(2*0.974) = (-1+sqrt(1+3.795))/(1.948)=(-1+2.190)/1.948=0.611. Hmm maybe Table 21 has 0.638? Wait Table 21 A Pos -> B Pos 0.638? The text source: "A Pos 0 0.638 0.356 0 0.007" yes. But Table 4 N maybe from earlier transition matrix Table 1 with probabilities? Let's see Table 1 uses symbols not values. Maybe actual transition matrix from 2010-2012 might be A Pos->B Pos 0.638? Then N should be 1.685,1.076. Source Table 4 says 1.685,0.974. Something off. Maybe source Table 21 is typo? Let's recalc from data Table 17: NS probability = punt 0.403 + downs 0.027 + fumble 0.047 + missed FG 0.087 + interception 0.074 + blocked 0 = 0.638. FG 0.309, TD 0.047 sum 0.356, EOG 0.0067. Yes. Then N offdiag 1.076. Then expected possessions starting A = 1.685+0.974=2.659? Actually if offdiag 1.076 sum 2.761, *158 sec=436.2 sec=7:16.2, not source 7:01. But source claims 7:01. If sum 2.659 gives 420.1 sec. Table 4 sum 2.659. So Table 4 is consistent with 7:01, but not with Table 21. Which is gray-zone. Need mention? We can audit inconsistency: source transition matrix [PAGE10] and fundamental matrix [PAGE4] appear not algebraically consistent for off-diagonal? Need be careful: maybe Table 21 uses "Tie" and "A Wins" but Q probability from A Pos to B Pos maybe 0.638, and N offdiag should 1.076. But source reports 0.974. Could be a transcription error in PDF text or source mistakes. The prompt wants source operators. We can flag as gray-zone audit. But maybe don't overemphasize if not required. But deep audit should mention. Need cite exact. This is valuable. Need state if using source-reported fundamental matrix vs recomputing from transition matrix. The source's reported average OT 7:01 is based on Table 4's first-row sum 2.659, not on recomputation from Table 21 using q=0.638. Let's calculate if q=0.611, N offdiag=0.974. What q gives Table 4? q = 0.974/(1+0.974^2)? Wait N = 1/(1-q^2), offdiag = q/(1-q^2). Given offdiag 0.974, solve q = 0.974/(1+0.974^2)? Let's derive: N_off = q/(1-q^2). Let r=0.974. r q^2 + q - r=0. q = (-1 + sqrt(1+4r^2))/(2r). r^2=0.948676; 4r^2=3.7947; sqrt4.7947=2.1897; minus1=1.1897; /1.948=0.6107. So q=0.611. But Table 21 q=0.638. Maybe source Table 4 from different data? Hmm.

Check MSD Table 6 vs Table 22. Table 22: A First Pos -> B down by 3 0.322, A Pos 0, B Pos 0.576, A Wins 0.093, B Wins 0.008. Wait row: A First Pos: 0, 0.322, 0, 0.576, 0.093, 0.008, 0. Table 2 says A First Pos -> B down by 3 = FG; A Pos? 0; B Pos = NS+EOG; A Wins = TD; B Wins = S; EOG Tie 0. So B Pos 0.576 includes NS+EOG. Good. Table 6 fundamental matrix first row: A First Pos 1, B down by 3 0.322, A Pos 0.636, B Pos 0.937. Sum = 1+0.322+0.636+0.937=2.895. *158 = 457.41 sec = 7:37.4. Good. Need maybe verify N? Hard.

Need include "formal operators" with Q and R. For a finite absorbing Markov chain: P = [[Q,R],[0,I]], N=(I-Q)^{-1}, B=N R. Expected steps from transient i = sum_j N_{ij}; expected time = τ * sum N_{ij}. Absorption probabilities = B. Need mention units: N in expected number of possessions (dimensionless count), τ = 158 s/possession, E[T | i] = τ ΣN_{ij} seconds. For MSD-10, τ maybe? They say average length OT 6:54 but not using same? They used first possession avg length 3 min and last 7 min data? Wait Table 23. They maybe estimate. Need mention.

Onside equation: Let p_R = P(Recover); p_W|R; p_W|NR. p_win_reg = p_R p_W|R + (1-p_R) p_W|NR. Solve p_R^* = (p_win_reg - p_W|NR)/(p_W|R - p_W|NR). Need denominator nonzero and same sign conditions; p_R^* in [0,1] requires p_win_reg between p_W|NR and p_W|R. Break-even values. Need cite Table 14 [PAGE8]. Need quote "all higher than league onside kick recovery averages of 13% in 2010–2012 and 5.2% in 2013–2015" [PAGE8]. Good.

Need "cross-layer veto adjudication" physical/biomechanical/weather veto proof. The source doesn't discuss biomechanics/weather much. Need adjudicate that any claim from Markov chain about "fairness" cannot override physical constraints: coin toss, kickoff, player fatigue, injury, weather, field position, clock. Need prove veto: model treats team strength equivalent and average possession length, no weather. If cross-layer physical variables change, transition probabilities shift. Need say no physical/biomechanical/weather veto can be inferred from source; any extrapolation to actual game outcome is vetoed unless transition probabilities are conditioned on those layers. Need cite assumptions: "since the game has made it to overtime, both teams are of equivalent strength" [PAGE2? Actually page 2? Let's locate: Page 2: "In our model, we assume Team A to be the initial receiving team and Team B to be the initial kicking team and, since the game has made it to overtime, both teams are of equivalent strength." Wait that's on page 2? Source [PAGE2] near Section 3.1 Models: "In our model, we assume Team A ... both teams are of equivalent strength." Yes [PAGE2]. Also "neglecting the time for the kickoff" [PAGE4]. "average length of a possession (2 minutes, 38 seconds)" [PAGE4]. Need use. Veto proof: if weather changes pass/run probabilities, transition matrix P changes; Markov operator not invariant. If biomechanical fatigue changes possession length τ, expected OT = τ ΣN changes linearly; if τ increases by Δ, E[T] changes by Δ ΣN. If team strength unequal, symmetry assumption broken; A/B rows no longer symmetric. Need mention no "weather" in source. We can say the source has no weather/biomechanical covariates, so cross-layer claims are out-of-model. To validate, need re-estimate Q,R under those conditions; otherwise veto. That's good.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need interpret: In OT, team behavior under crisis: habits (2-minute drill, extra point choices) vs counter-trap (opponent anticipating onside kick, going for 2, etc.) vs clock (10-minute shortening). Need discuss model's assumptions about Team A not going for 2, Team B always kicks extra point when down 7, Team B scores TD 17% when down 6-7. Need recursive beliefs: Team B knows Team A knows etc. Source says "Team A will never elect to try for a 2-point conversion on their first possession after scoring a TD"; "Team B will always elect for the extra kick after a TD when down by 7" [PAGE6]. These are behavioral assumptions. Crisis habit regression: teams revert to regulation habits (extra kick, FG). Counter-trap: onside kick break-even, if successful can give Team B advantage; source says "if successful, can give Team B a significant advantage" [PAGE8]. Clock: 10-minute OT changes tie probability and onside recovery break-even; source "probability of recovery for onside kicks in our model have increased by just under 4%" [PAGE8]. Need mention recursive theory of mind: Team B's decision depends on belief about Team A's first possession strategy and clock; Team A may intentionally increase length of first possession to limit Team B's time: source says "One aspect of OT that may change that we do not consider, is Team A intentionally increasing the length of their first possession to limit the time Team B has to score on their first possession." [PAGE5]. That's key. Need include as model limitation and recursive strategy. Also onside kick: Team B knows Team A will be operating under SD if recovered? Source: "If Team B recovers an onside kick, Team A is considered as having had a chance to possess the ball so, in all OT formats, the game will be operating under sudden death rules." [PAGE7]. That changes incentives. Need mention.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Need trace from sudden death to modified sudden death (2010 playoffs, 2012 regular season, 2017 10 min). Source: P1 states history. Need mention prior models: Chris Jones (2012), Michael Jones (2004), Winston (2009), Che & Hendershott (2007), Brams & Sanderson (2012). Need cite [PAGE2], [PAGE9 references]. "Our model is based on that proposed by Chris Jones (Jones, 2012), but insufficient overtime data under the MSD rules was available at that time." [PAGE2]. "Michael Jones (Jones, 2004) used a Markov chain model to represent the SD rules prior to the change, using 2002 regulation time drive data." [PAGE2]. "Winston (2009) suggests moving the kickoff 5 yards... predicts this would decrease Team A's chances of winning in the SD format from 60% to 55%." [PAGE2]. Need multi-week traps: Rule changes over seasons create nonstationarity; using 2010-2012 for SD and 2013-2015 for MSD; MSD-10 uses 2013-2016 first possession and last 7 minutes; small sample after 8 min; future data can strengthen. Need warn against pooling across rule regimes. "We use overtime data from NFL regular season games ending in 2010–2012 and 2013–2015 for SD and MSD models, respectively." [PAGE2]. "Games with OT lasting more than 8 minutes is a small data set" [PAGE5]. Multi-week traps: extrapolating 10-minute rule from 15-minute data; selection bias; end-of-game tie treatment; playoff vs regular season. Need mention "M. Jones ... simplifying assumptions" etc. Need maybe mention "retrocausal" means later rule changes reshape interpretation of earlier data; the 10-minute rule makes previous 15-minute models non-transferable. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Need produce 3 verifiable counterfactual veto scenarios. Need likely as if verifying claims: scenario 1: Recompute fundamental matrix from transition probabilities; if row-stochastic and N=(I-Q)^-1 does not match reported N or expected OT, veto the reported 7:01. Prediction: using Table 21 q=0.638, N_offdiag = q/(1-q^2)=1.076 not 0.974; expected possessions 2.761; E[T]=436 s=7:16, not 7:01. Need be precise: source Table 21 [PAGE10] q=0.638, Table 4 [PAGE4] N_offdiag=0.974. If we recompute, N_offdiag=1.076. But wait if source uses Table 4? Need this is a verifiable veto. Prediction: a checker will flag inconsistency. But could be dangerous: maybe source's Table 4 derived from different transition matrix (maybe not Table 21). But source says "See Table 17 in Appendix for Drive Results Data" and Table 21. We can present as conditional. Need not claim source wrong? But counterfactual veto scenario: If transition matrix is Table 21 and fundamental matrix must satisfy N=(I-Q)^-1, then reported Table 4 off-diagonal 0.974 is vetoed by algebra unless Q differs. Prediction: recomputation yields N_offdiag≈1.076 and E[T]≈7:16 from Table 21, not 7:01. Need maybe include. This is strong.

Scenario 2: Onside kick break-even equation. Test whether p_R^* from Table 14 satisfies equation with Table 12/14 values. For SD: p_win_reg=0.389; p_W|R=0.895; p_W|NR=0.280. Compute p_R^* = (0.389-0.280)/(0.895-0.280)=0.109/0.615=0.1772. Matches 0.177. MSD: (0.433-0.360)/(0.895-0.360)=0.073/0.535=0.1364 matches 0.137. MSD-10: (0.409-0.330)/(0.895-0.330)=0.079/0.565=0.1398 matches 0.140. AMSD: (0.439-0.376)/(0.895-0.376)=0.063/0.519=0.1214 matches 0.121. Good. Verifiable. Prediction: if p_W|R<=p_W|NR, or denominator zero, break-even undefined; if p_win_reg outside interval, no feasible p_R. Good.

Scenario 3: MSD-10 tie probability and playoff no-tie model. Verify absorbing probability matrix row sums to 1 and no-tie renormalization. Table 9 row A First Pos: 0.541+0.346+0.112=0.999 (rounding). If remove tie and renormalize A/(A+B) = 0.541/(0.887)=0.6099, but source says playoff A wins 59.5% [PAGE6]. Hmm close but not exact due to model details. Could be a veto? Let's compute: 0.541/(0.541+0.346)=0.6099. Source says 59.5. Difference 1.5 pp. Maybe because playoff model removes EOG tie as state and changes transitions not simple renormalization. We can use scenario: If you simply renormalize Table 9, you get 61.0%, not 59.5%; therefore the source's playoff result depends on modifying transitions, not on simple renormalization. Prediction: a naive renormalization vetoes the 59.5% if no transition change. But source says "we eliminate EOG Tie as a potential state and consider any drives that ended in an EOG tie as a change in possession" [PAGE6? Actually page 6: "Finally, we consider a playoff model where an end of game tie is not an option. We eliminate EOG Tie as a potential state and consider any drives that ended in an EOG tie as a change in possession." [PAGE6]. So not simple renormalization. Good. We can predict that any code that only renormalizes will fail; must reassign EOG transitions. Verifiable.

Alternatively scenario 3: Use Table 23 MSD-10 transition matrix [PAGE11] to verify row stochastic. Let's check Table 23 first row: 0,0.213,0,0.607,0.180,0,0 sum=1.000. Row B down by 3: 0,0,0.320,0,0.640,0.040,0 sum=1.000. Row A Pos: 0,0,0,0.52,0.360,0.040,0.080 sum=1.000. Good. Scenario: row-stochastic validation. If any row deviates from 1, veto. Prediction: all rows sum to 1 in Table 23. But need 3 scenarios. We can include algebra mismatch, onside equation feasibility, MSD-10 playoff renormalization/transition reassignment. Need "RLVR" maybe verifiable reward: each scenario has a computable check and prediction.

Need ensure no "odds" word. Avoid "betting" maybe okay? Strict only betting lines. But avoid.

Need maybe mention no betting lines in answer? Could say "No wagering quantities are used." But might mention "betting"? Better not.

Need include citations [PAGE N] and verbatim quotes. We can use blockquotes? Fine.

Need answer not too long? Desired oververbosity 5. Need >=1000 words. We can write ~2500. Need all exact XML tags. Need no markdown? XML tags enough. Use LaTeX. Need maybe include bullet lists inside XML. Fine.

Need be careful with exact quotes: We must not alter inside quotes. Let's collect exact quotes:

P1: "the modified sudden death rule change increased the average overtime from 7 minutes 1 second to 7 minutes 37 seconds and that the probability of the team possessing the ball first winning decreased from 59.9% to 55.4%." Exact. "we predict the 10-minute overtime change will result in the team possessing the ball first winning 54.1% of the time and the probability of a game ending in a tie increasing to 11.2% from under 2% in the current 15-minute overtime." Exact.

P2: "In our model, we assume Team A to be the initial receiving team and Team B to be the initial kicking team and, since the game has made it to overtime, both teams are of equivalent strength." Exact. "We were able to limit our data search to overtime drives only since the MSD has been in place for a number of years now." Exact. "Our model is based on that proposed by Chris Jones (Jones, 2012), but insufficient overtime data under the MSD rules was available at that time." Exact. "Michael Jones (Jones, 2004) used a Markov chain model to represent the SD rules prior to the change, using 2002 regulation time drive data." Exact. "Winston (2009) suggests moving the kickoff 5 yards to give the receiving team worse field position when starting their drive and predicts this would decrease Team A's chances of winning in the SD format from 60% to 55%." Exact maybe source has "Winston (2009) suggests moving the kickoff 5 yards to give the receiving team worse ﬁeld position when starting their drive and predicts this would decrease Team A’s chances of winning in the SD format from 60% to 55%." Need use quotes with ligature? We can quote as source but maybe ASCII. Fine.

P3: "Absorbing states are states that cannot be left once they are entered." Exact. "because it is highly unlikely a game will end in a tie in the first two possessions, we consider the probability of transitioning into EOG Tie in the first two possessions to be zero." Exact.

P4: "we estimate the length of overtime under that ruleset by using the average length of a possession (2 minutes, 38 seconds)." Exact. "From the Fundamental Matrix (Table 4) for the SD transition matrix, we have that the average number of possessions during overtime is the sum of the first row which represents how many times we expect each team to possess the ball." Exact. "Our model considers the beginning of overtime to be when A first possesses the ball, neglecting the time for the kickoff to Team A receiving the ball." Exact.

P5: "we find the average length of overtime to be the sum of the first row of the Fundamental Matrix (Table 6) multiplied by the average length of possessions, which gives 7 minutes 37 seconds." Exact? Source: "Similar to SD, we find the average length of overtime to be the sum of the first row of the Fundamental Matrix (Table 6) multiplied by the average length of possessions, which gives 7 minutes 37 seconds." Good. "The first row shows that Team A wins the game, on average 55.4% of the time, Team B wins 43.3% of the time, and the game ends in a tie 1.3% of the time." Exact. "One aspect of OT that may change that we do not consider, is Team A intentionally increasing the length of their first possession to limit the time Team B has to score on their first possession." Exact? Source: "One aspect of OT that may change that we do not consider, is Team A intentionally increasing the length of their first possession to limit the time Team B has to score on their first possession." yes. "Games with OT lasting more than 8 minutes is a small data set" Exact.

P6: "It is expected that more games will end in a tie in upcoming seasons with a shorter OT and our model predicts that probability of the game ending in a tie increasing from under 2% to over 11%." Exact. "For playoff games, when ending in a tie is not an option, we find the probability of Team A winning to be 59.5% with an OT length of 8 minutes 8 seconds." Exact. "Team A wins 54.7% of the time, Team B wins 43.9% of the time, and the game ending in a tie 1.4% of the time with an average of 7 minutes 57 seconds of overtime." Exact. "Team A will never elect to try for a 2-point conversion on their first possession after scoring a TD." Exact from bullet? "Team A will never elect to try for a 2-point conversion on their first possession after scoring a TD." Yes. "Team B will always elect for the extra kick after a TD when down by 7." Exact. "Finally, we consider a playoff model where an end of game tie is not an option. We eliminate EOG Tie as a potential state and consider any drives that ended in an EOG tie as a change in possession." Exact.

P7: "P (Recover and Win) = P (Recover) P (Win|Recover)" Exact maybe spaces. "P (Do not Recover and Win) = P (Do not recover) P (Win|Do not recover)" Exact. "P (Recover and Win) +P (Do not recover and Win) = P (B Wins, reg kick)" Exact. "If Team B recovers an onside kick, Team A is considered as having had a chance to possess the ball so, in all OT formats, the game will be operating under sudden death rules." Exact. "The probability of Team B winning after an onside kick must be at least as high as with a regular kick to make the onside kick a reasonable choice." Exact? Source: "The probability of Team B winning after an onside kick must be at least as high as with a regular kick to make the onside kick a reasonable choice." yes.

P8: "The break-even recovery probabilities are all higher than the league onside kick recovery averages of 13% in 2010–2012 and 5.2% in 2013–2015." Exact. "in the last 5 years no team has ever attempted an onside kick during overtime." Exact. "if successful, can give Team B a significant advantage." Exact? Source: "This indicates onside kicks are unlikely to be used in OT, but if successful, can give Team B a significant advantage." Good. "Based on the recent rule change to a 10-minute overtime the probability of recovery for onside kicks in our model have increased by just under 4%." Exact? Source: "Based on the recent rule change to a 10-minute overtime the probability of recovery for onside kicks in our model have increased by just under 4%." Yes.

P9: "while the MSD format does seem to get the probabilities closer to 50-50 for each team to win, it still can be improved." Exact. "In the AMSD format, where both teams are required to possess the ball at least once, the game length is not greatly extended and seems slightly more fair to both teams, but the probability of Team A winning (54.7%) is still better than simply home field advantage during overtime (54.2%)." Exact. "As more data becomes available, modeling playoff games directly from playoff data would be more indicative of potential playoff results." Exact.

P10: "Total of 149 drives in 54 games." Exact. "Total of 118 drives in 48 games." Exact. Table 20. Maybe not need.

P11: Table 23, 24, 25. Could cite. "Table 25 Percent of drives ending in FG or TD and results of MSD analysis by drive starting position" exact? Not necessary.

Need maybe mention exact page for Table 14? [PAGE8]. Table 14 includes break-even values. Good.

Need include "source operators and equations" formal LaTeX. We can define:

Let S be finite state space, transient T={A Pos,B Pos,...}, absorbing F={A Wins,B Wins,EOG Tie}. P = [Q R; 0 I]. Q row substochastic. Fundamental matrix N=(I-Q)^{-1} = I+Q+Q^2+... Provided ρ(Q)<1. N_{ij} expected number of visits to transient j before absorption starting i (unit: count). Absorption probabilities B=N R. Expected possession count from i: L_i = ∑_{j∈T} N_{ij} (possessions). Expected OT duration E[T_i]=τ L_i, τ=158 s/possession. For SD, first row of N sum = 2.659 (source [PAGE4]) -> E[T]=2.659×158=420.1 s=7:00.1≈7:01. Good. For MSD first row sum = 1+0.322+0.636+0.937=2.895 -> *158=457.4 s=7:37.4≈7:37. Good. MSD-10 they used not same τ? They say average OT 6:54. AMSD first row sum? Table 10 not fundamental. But source says 7:57.

Need mention "breakdown regimes": 
- If Q has spectral radius ≥1, N undefined; no absorption almost surely. In finite absorbing chains with all nonabsorbing states reachable to absorbing, ρ(Q)<1.
- If row sums of P differ from 1 due to rounding or missing outcomes, B rows may not sum to 1; use normalization only if justified.
- If τ is nonconstant or depends on state/clock/weather, E[T] = ∑ N_{ij} τ_j not τ∑N.
- If team strength not equivalent, Q,R lose symmetry and A/B labels not exchangeable.
- If 10-minute OT truncates at 600 s, absorbing states include EOG tie with probability not simply from untruncated model; source approximates with last 7 min data.
- Onside break-even denominator zero if p_W|R = p_W|NR; no finite p_R; if p_win_reg outside interval, no feasible p_R.
- Small sample: "Games with OT lasting more than 8 minutes is a small data set" [PAGE5].
Need mention "singularity/breakdown regimes" exactly.

Need "cross-layer veto adjudication" proof. We can write formal: Let θ be cross-layer vector (weather W, biomechanical B, fatigue F, field surface, officiating). The source transition probabilities are estimated marginal averages over θ. If θ shifts, Q(θ),R(θ) change. The Markov result is not a physical law; it is conditional on θ∈Θ_0. A cross-layer veto: any claim that AMSD "is fair" or "Team A wins 54.7%" for a specific game is invalid unless θ is in the training distribution. Physical veto proof: possession duration τ and scoring probabilities p_FG,p_TD,p_S are affected by biomechanical fatigue and weather; in the model E[T]=τ∑N, so if τ changes by δτ, E[T] changes by δτ∑N; if p_FG changes, Q,R change. If weather makes FG probability lower, Table 25's drive-start sensitivity [PAGE11] shows %FG and %TD vary by starting field position; e.g., Own 20 %FG 0.210, %TD 0.113; Opp 35 %FG 1.000, %TD 0 [PAGE11]. This demonstrates outcome sensitivity to field position. Weather can shift starting field position and FG make probability. Need veto: no source evidence for weather; source does not include weather covariates; so cannot adjudicate. Need cite "neglecting the time for the kickoff" [PAGE4] as physical omission. Also "both teams are of equivalent strength" [PAGE2] is a physical/team-strength assumption. Good.

Need "RLVR counterfactual vetoes" 3 verifiable:
1. Matrix consistency veto: For SD, Q = [[0,0.638],[0.638,0]], N_off = 0.638/(1-0.638^2) ≈1.076, not 0.974 in Table 4 [PAGE4]. Prediction: if Table 21 [PAGE10] is intended transition matrix, first-row sum should be 2.761 and E[T] ≈436 s (7:16), not 7:01. If checker uses Table 4, 7:01. Veto any claim that both are same without resolving. This is verifiable.
Need perhaps compute exactly: q=0.638. q^2=0.407044. 1-q^2=0.592956. 1/(1-q^2)=1.68646. offdiag=1.0760. Sum=2.7625. *158=436.48 s=7:16.5. Wait 2.7625*158=436.5. 7:16.5. Good.
2. Onside break-even feasibility: Use Table 14 values [PAGE8] and equation [PAGE7]. For SD p_R^*=(0.389-0.280)/(0.895-0.280)=0.1772; MSD 0.1364; MSD-10 0.1398; AMSD 0.1214. Prediction: exact recomputation within rounding; if p_R^*<0 or >1, no feasible onside strategy. Also if p_W|R=p_W|NR, denominator zero. Good.
3. MSD-10 playoff tie removal: Table 9 [PAGE6] row A First Pos sums 0.541+0.346+0.112=0.999. Simple renormalization gives 0.541/(0.541+0.346)=0.6099, not 0.595. Source says they "eliminate EOG Tie as a potential state and consider any drives that ended in an EOG tie as a change in possession" [PAGE6]. Prediction: a checker that only renormalizes will fail; must reassign EOG transitions. This is verifiable. Good.

Need maybe include "RLVR" as reward verification: each scenario yields binary pass/fail. Good.

Need no betting lines. Need avoid "odds". Check final for words: "spreads" no. "totals" maybe "sum" not "totals"? The strict says never mention spreads, totals, moneylines, or odds. Avoid word "totals" as betting term? We might say "sums" not totals. Avoid "odds". Good.

Need answer format exact XML sections. We can include paragraphs. Need maybe start with <THINK_TRACE> and end. Must ensure THINK_TRACE >=400 words. Let's draft.

Need maybe mention "I treat the PDF as source text, not a wager." No.

Let's compose carefully.

Potential structure:

<THINK_TRACE>
Deep multi-hop derivation... Need 400+ words. We can write 600 words. Include equations and citations. Mention source model states, fundamental matrix, expected OT, win probabilities. Mention audit issues. Include exact quotes. Use [PAGE N]. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown. Use definitions. Include equations:
\[
P=\begin{pmatrix}Q&R\\0&I\end{pmatrix}, \quad N=(I-Q)^{-1}, \quad B=NR.
\]
\[
\mathbb E[V_j\mid X_0=i]=N_{ij}, \quad \mathbb E[L_i]=\sum_j N_{ij}, \quad \mathbb E[T_i]=\tau \sum_j N_{ij}.
\]
τ=158 s possession^{-1}. For SD first row sum 2.659 -> 420 s. For MSD 2.895 ->457 s. Onside:
\[
p_R^*=\frac{p_{\rm reg}-p_{\rm NR}}{p_R-p_{\rm NR}}
\]
with denominator. cite. Units. Breakdown. Need include page citations and quotes. Good.

<RETROCAUSAL_GENEALOGY>
Historical lineage. Rule changes. Prior models. Multi-week traps. Cite. Good.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Use source assumptions. Cite. Good.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Formal sensitivity. Cite. Good.

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios. Use equations. Cite. Good.

Need ensure >=1000 words total. We'll write robust.

Need maybe include "source operators" with "FG+TD" etc. We can mention state partition. Need no fake ratios. All equations are from source or standard Markov chain. Good.

Need exact page markers. Use [PAGE 1] etc. Need cite exact verbatim quotes. Need not overquote. But should include exact. Good.

Need maybe mention "Table 4" [PAGE4] and "Table 21" [PAGE10]. Good.

Let's formulate.

Check quote exactness:
- P2 quote "since the game has made it to overtime, both teams are of equivalent strength." Source: "since the game has made it to overtime, both teams are of equivalent strength." yes.
- P3 quote "Absorbing states are states that cannot be left once they are entered." yes.
- P4 quote "neglecting the time for the kickoff to Team A receiving the ball." Source: "neglecting the time for the kickoff to Team A receiving the ball." yes.
- P5 quote "One aspect of OT that may change that we do not consider, is Team A intentionally increasing the length of their first possession to limit the time Team B has to score on their first possession." yes.
- P6 quote "Team A will never elect to try for a 2-point conversion on their first possession after scoring a TD." yes.
- P6 quote "Team B will always elect for the extra kick after a TD when down by 7." yes.
- P7 quote "If Team B recovers an onside kick, Team A is considered as having had a chance to possess the ball so, in all OT formats, the game will be operating under sudden death rules." yes.
- P8 quote "in the last 5 years no team has ever attempted an onside kick during overtime." yes.
- P8 quote "if successful, can give Team B a significant advantage." yes.
- P9 quote "while the MSD format does seem to get the probabilities closer to 50-50 for each team to win, it still can be improved." yes.

Need mention "10-minute overtime change" maybe P1. Good.

Need maybe include "AMSD" assumptions: "Team A will never elect to try for a 2-point conversion..." [PAGE6]. Good.

Need "retrocausal genealogy" term: We can say "retrocausal" because 2017 rule change retroactively changes value of 2010-2015 estimates; not causal. Use "lineage" from Jones 2004, Jones 2012, Winston 2009, Che & Hendershott 2007. Cite [PAGE2]. Good.

Need "multi-week traps" maybe mention "multi-week" as across seasons/weeks. We can say "The primary multi-week trap is pooling drives across rule regimes." Good.

Need "cross-layer veto proof" maybe use inequalities:
\[
\frac{\partial \mathbb E[T]}{\partial \tau} = \sum_j N_{ij} >0,\quad \delta E[T] = \delta\tau \sum_j N_{ij}.
\]
\[
\frac{\partial B}{\partial P} \neq 0
\]
in general. Need be formal but not fake. Good.

Need "RLVR" scenario 1 with algebra mismatch. Need careful: If q=0.638 from Table 21, N_offdiag=1.076. But Table 4 says 0.974. Could be source's Table 4 from a different Q. We can phrase "conditional on Table 21 being the transition matrix used for the SD model, the algebraic N=(I-Q)^{-1} vetoes Table 4's off-diagonal value 0.974; the recomputation gives 1.076." That is a verifiable veto. Good.

Scenario 3: "simple renormalization gives 0.6099" but source says 59.5. Need maybe if row sum 0.999 due to rounding. 0.541/(0.541+0.346)=0.6099. If use 0.541/(1-0.112)=0.6092. Still 60.9. Source says 59.5. So source did more. Good.

Need include predictions: "A verifier should reject a submission that uses only renormalization; accept only one that reassigns EOG transitions." Good.

Need no betting lines. We can mention "No wagering quantities are analyzed." But "wagering" maybe not banned? It says never mention betting lines; could mention no betting lines? Maybe safe to omit. Avoid "betting" entirely. Good.

Need maybe avoid "score" is fine. "win probability" is fine. "FG" etc. Fine.

Need final answer no markdown? Use XML tags. It can include LaTeX. Good.

Let's write with enough detail. Need ensure word count. We'll produce ~2500 words. Need maybe not overdo. Let's draft.

Need be mindful "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." We won't. We use standard Markov equations and source equation. Good.

Need "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We'll explicitly state units: probabilities dimensionless in [0,1]; N entries expected counts (dimensionless); τ seconds; E[T] seconds; B probabilities. Good.

Need "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We'll do.

Need ">=1,000-word depth across these exact XML sections" We'll ensure.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is an absorbing Markov-chain analysis of NFL overtime, not a physical simulation. The core operator is the transition matrix partitioned into transient possession states and absorbing game-end states. The authors define absorbing states as game-ending outcomes: “Absorbing states are states that cannot be left once they are entered” [PAGE 3]. For sudden death, the transient states are A possessing and B possessing; for modified sudden death, the transient states include A First Pos, B down by 3, A Pos, and B Pos; for the alternative model, additional states include B down by 6, 7, and 8 [PAGE 3–4]. The formal derivation is standard: if \(Q\) is the transient-to-transient block and \(R\) is the transient-to-absorbing block, then the fundamental matrix is \(N=(I-Q)^{-1}\). The entries \(N_{ij}\) are expected possession counts before absorption, and \(N R\) gives absorption probabilities. The authors state this explicitly: “From the Fundamental Matrix ... the average number of possessions during overtime is the sum of the first row which represents how many times we expect each team to possess the ball” [PAGE 4]. They convert possession counts into time using “the average length of a possession (2 minutes, 38 seconds)” [PAGE 4]. Thus the model’s duration output is not a raw clock simulation; it is \(\tau\sum_j N_{ij}\) with \(\tau=158\) seconds per possession.

The main numerical claims are: sudden death gives Team A 59.9%, Team B 38.9%, tie 1.7%, average overtime 7:01 [PAGE 4–5]; modified sudden death gives Team A 55.4%, Team B 43.3%, tie 1.3%, average overtime 7:37 [PAGE 5]; modified sudden death in 10 minutes gives Team A 54.1%, Team B 34.6%, tie 11.2%, average overtime 6:54 [PAGE 6]; and alternative modified sudden death gives Team A 54.7%, Team B 43.9%, tie 1.4%, average overtime 7:57 [PAGE 6]. The abstract summarizes the rule-change comparison: “the modified sudden death rule change increased the average overtime from 7 minutes 1 second to 7 minutes 37 seconds and that the probability of the team possessing the ball first winning decreased from 59.9% to 55.4%” [PAGE 1]. The authors also predict the 10-minute rule will raise tie probability: “the probability of a game ending in a tie increasing to 11.2% from under 2% in the current 15-minute overtime” [PAGE 1].

A gray-zone audit is necessary because the model is conditional and data-dependent. The authors assume “since the game has made it to overtime, both teams are of equivalent strength” [PAGE 2]. They “neglect the time for the kickoff to Team A receiving the ball” [PAGE 4]. They use regular-season overtime data: 2010–2012 for sudden death and 2013–2015 for modified sudden death [PAGE 2]. For MSD-10 they use first-possession data and “last 7 minutes of MSD OT” to estimate shortened play, while admitting “Games with OT lasting more than 8 minutes is a small data set” [PAGE 5]. They also state a behavioral omission: “One aspect of OT that may change that we do not consider, is Team A intentionally increasing the length of their first possession to limit the time Team B has to score on their first possession” [PAGE 5]. These are not cosmetic limitations; they are exactly the regimes where the Markov operator may break down. If possession length \(\tau\) is state-dependent, if team strength is unequal, if weather changes scoring probabilities, or if the 10-minute clock truncates states differently than the 15-minute data, then \(Q\) and \(R\) are misspecified and the reported absorption probabilities are conditional estimates, not invariant laws.

There is also a verifiable algebraic consistency issue in the source. Table 21 gives the sudden-death transition probabilities with \(P(\text{A Pos}\to\text{B Pos})=0.638\) and \(P(\text{B Pos}\to\text{A Pos})=0.638\) [PAGE 10]. For the two-state transient block \(Q=\begin{pmatrix}0&0.638\\0.638&0\end{pmatrix}\), the off-diagonal entry of \(N=(I-Q)^{-1}\) is \(0.638/(1-0.638^2)\approx1.076\), not \(0.974\) as printed in Table 4 [PAGE 4]. Using Table 21 directly would give a first-row sum of about \(2.762\) and an expected overtime of about \(2.762\times158\approx436\) seconds, or about 7:16, not 7:01. This does not necessarily invalidate the paper’s narrative, but it means a verifier must decide whether Table 4 was computed from a different \(Q\), whether Table 21 is rounded or transcribed differently, or whether one table contains an error. The correct audit response is to recompute from the full drive counts rather than to accept both tables simultaneously.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the state space be partitioned into transient possession states \(T=\{1,\dots,m\}\) and absorbing game-end states \(F=\{\text{A Wins},\text{B Wins},\text{EOG Tie}\}\). The one-possession transition matrix is
\[
P=\begin{pmatrix}Q & R\\ 0 & I\end{pmatrix},
\]
where \(Q_{ij}=\Pr(X_{t+1}=j\mid X_t=i)\) for \(i,j\in T\), \(R_{i\ell}=\Pr(X_{t+1}=\ell\mid X_t=i)\) for \(\ell\in F\), and \(I\) is the identity on absorbing states. The fundamental matrix is
\[
N=(I-Q)^{-1}=I+Q+Q^2+\cdots,
\]
provided the spectral radius satisfies \(\rho(Q)<1\). The units are: \(Q,R\) are dimensionless probabilities in \([0,1]\); \(N_{ij}\) is the expected number of visits to transient state \(j\) before absorption starting from transient state \(i\), a dimensionless count; \(B=NR\) is a matrix of absorption probabilities, dimensionless. The expected number of possessions starting from \(i\) is
\[
L_i=\sum_{j\in T}N_{ij},
\]
and if \(\tau\) is the mean possession duration in seconds, the expected overtime duration is
\[
\mathbb E[T_i]=\tau L_i,\qquad [\tau]=\text{s}\cdot\text{possession}^{-1},\quad [\mathbb E[T_i]]=\text{s}.
\]
The authors use \(\tau=2\) min \(38\) s \(=158\) s [PAGE 4]. For sudden death, their first-row fundamental sum is \(2.659\), so \(2.659\times158\approx420\) s \(\approx7\) min \(1\) s [PAGE 4]. For modified sudden death, their first-row sum is \(1+0.322+0.636+0.937=2.895\), so \(2.895\times158\approx457\) s \(\approx7\) min \(37\) s [PAGE 5]. The absorption probabilities are read from \(B=NR\); for MSD the first row is reported as Team A \(0.554\), Team B \(0.433\), tie \(0.013\) [PAGE 5].

The onside-kick operator is a break-even probability equation. Let \(p_{\rm reg}=\Pr(\text{B wins with regular kick})\), \(p_R=\Pr(\text{recover onside})\), \(p_{W|R}=\Pr(\text{B wins}\mid\text{recover})\), and \(p_{W|\neg R}=\Pr(\text{B wins}\mid\text{do not recover})\). The source writes
\[
\Pr(\text{Recover and Win})=p_R\,p_{W|R},
\]
\[
\Pr(\text{Do not Recover and Win})=(1-p_R)\,p_{W|\neg R},
\]
and sets their sum equal to \(p_{\rm reg}\) [PAGE 7]. Solving gives
\[
p_R^*=\frac{p_{\rm reg}-p_{W|\neg R}}{p_{W|R}-p_{W|\neg R}}.
\]
All terms are dimensionless probabilities. The source reports break-even recovery probabilities of \(0.177\) for SD, \(0.137\) for MSD, \(0.140\) for MSD-10, and \(0.121\) for AMSD [PAGE 8]. It also states: “The break-even recovery probabilities are all higher than the league onside kick recovery averages of 13% in 2010–2012 and 5.2% in 2013–2015” [PAGE 8]. The denominator \(p_{W|R}-p_{W|\neg R}\) must be nonzero; if it is zero, there is no finite break-even recovery probability. If \(p_{\rm reg}\) lies outside the interval between \(p_{W|\neg R}\) and \(p_{W|R}\), then \(p_R^*\notin[0,1]\), and the onside kick is not a feasible equalizing strategy under the model.

Breakdown regimes are explicit. First, if \(Q\) has an eigenvalue of modulus \(1\), then \(N\) is undefined and absorption is not almost sure. Second, if the rows of \(P\) do not sum to \(1\), the absorption matrix \(B\) need not be stochastic; rounding or omitted outcomes can produce row sums like \(0.999\). Third, if \(\tau\) depends on state, weather, fatigue, or clock, replace \(\tau L_i\) by \(\sum_j N_{ij}\tau_j\). Fourth, if team strength is not equivalent, the A/B symmetry used in the model is broken; the source’s assumption is “both teams are of equivalent strength” [PAGE 2]. Fifth, the MSD-10 model is an extrapolation: the authors use first-possession data and “last 7 minutes of MSD OT” while noting “Games with OT lasting more than 8 minutes is a small data set” [PAGE 5]. Those are the exact singularity and breakdown regimes for this model class.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicit. The paper is a descendant of Michael Jones’s 2004 Markov-chain treatment of sudden death, Chris Jones’s 2012 model, and Winston’s field-position analysis. The authors write: “Our model is based on that proposed by Chris Jones (Jones, 2012), but insufficient overtime data under the MSD rules was available at that time” [PAGE 2]. They also note: “Michael Jones (Jones, 2004) used a Markov chain model to represent the SD rules prior to the change, using 2002 regulation time drive data” [PAGE 2]. Winston’s proposal is described as moving the kickoff five yards and predicting a decrease in Team A’s SD win probability “from 60% to 55%” [PAGE 2]. The alternative-format lineage includes auctioning and divide-and-choose proposals by Che and Hendershott and by Brams and Sanderson [PAGE 2]. The paper’s AMSD proposal is therefore not isolated; it is a descendant of a fairness literature that tries to reduce the coin-toss advantage while preserving sudden death after each team has possessed the ball.

The retrocausal genealogy matters because later rule changes retroactively alter the meaning of earlier estimates. The NFL changed overtime after the 2010–2011 season, extended the change to the regular season in 2012, and shortened overtime to 10 minutes in 2017 [PAGE 1]. The authors therefore separate regimes: 2010–2012 for SD and 2013–2015 for MSD [PAGE 2]. A multi-week trap is pooling drives across these regimes. The transition probabilities are not stationary across rule changes: a 15-minute MSD drive in 2013–2015 is not exchangeable with a 10-minute MSD-10 drive after 2017. The authors themselves warn that MSD-10 and AMSD analyses are based on estimated data and that “better estimation techniques would strengthen the model analysis” [PAGE 9]. Another multi-week trap is using regular-season data to infer playoff behavior. They state: “As more data becomes available, modeling playoff games directly from playoff data would be more indicative of potential playoff results” [PAGE 9]. A third trap is treating the 10-minute clock as a simple truncation of the 15-minute model. The source instead uses “last 7 minutes of MSD OT” to estimate late-game behavior [PAGE 5], which is an approximation, not a structural clock operator. Finally, the paper’s conclusion is cautious: “while the MSD format does seem to get the probabilities closer to 50-50 for each team to win, it still can be improved” [PAGE 9]. That is the correct genealogical reading: the model is a sequence of conditional estimates under changing rules, not a universal fairness theorem.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive strategic layer is visible in the source’s behavioral assumptions. In AMSD, the authors assume “Team A will never elect to try for a 2-point conversion on their first possession after scoring a TD” [PAGE 6]. They also assume “Team B will always elect for the extra kick after a TD when down by 7” [PAGE 6]. These are crisis-habit assumptions: teams regress to regulation-time habits—kick the extra point, take the field goal, avoid the two-point conversion—even though the overtime state changes the incentive. The model’s “counter-trap” is the onside kick. If Team B recovers, the source says Team A is treated as having had a possession, so “in all OT formats, the game will be operating under sudden death rules” [PAGE 7]. That means Team B can win immediately with a field goal or touchdown, and if it does not score, it inherits the sudden-death continuation probability. The source notes that onside kicks are rare but “if successful, can give Team B a significant advantage” [PAGE 8]. The counter-trap is that Team A may anticipate the onside kick and prepare field-position contingencies; the source’s break-even equation is exactly a belief-calibration device for that recursive decision.

The clock is the third layer. In a 10-minute overtime, the value of a long first possession rises because it reduces Team B’s remaining time. The source explicitly flags this as omitted: “One aspect of OT that may change that we do not consider, is Team A intentionally increasing the length of their first possession to limit the time Team B has to score on their first possession” [PAGE 5]. That is a recursive theory-of-mind failure in the model: Team A’s choice of tempo depends on Team A’s belief about Team B’s urgency, Team B’s belief about Team A’s tempo, and both teams’ beliefs about the clock. The source also notes that “Based on the recent rule change to a 10-minute overtime the probability of recovery for onside kicks in our model have increased by just under 4%” [PAGE 8]. That changes the counter-trap calculus. A complete recursive model would need state variables for clock, timeout inventory, score differential, and opponent beliefs. The source’s Markov chain captures the score and possession state but not the full belief state; therefore its “fairness” conclusion is a reduced-form estimate, not a game-theoretic equilibrium. The correct interpretation is: crisis habit regression is encoded in the fixed extra-point and field-goal assumptions; counter-trap behavior is partially captured by the onside-kick break-even equation; and clock strategy is explicitly outside the model.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is required because the source’s transition probabilities are league-average conditional estimates, not physical invariants. The model assumes equivalent team strength [PAGE 2] and neglects kickoff time [PAGE 4]. It also uses a constant mean possession duration \(\tau=158\) s [PAGE 4]. Weather, field surface, injury, fatigue, and biomechanical load can change both \(\tau\) and the scoring probabilities \(p_{\rm FG},p_{\rm TD},p_S\). The duration sensitivity is exact:
\[
\frac{\partial \mathbb E[T_i]}{\partial \tau}=\sum_j N_{ij}>0,
\]
so a change \(\delta\tau\) produces \(\delta \mathbb E[T_i]=\delta\tau\sum_j N_{ij}\). The absorption sensitivity is not generally zero:
\[
B=NR,\qquad \delta B \approx \delta N\,R+N\,\delta R,
\]
so any weather-induced change in \(Q\) or \(R\) changes the reported win probabilities. The source’s own Table 25 shows field-position sensitivity: at Own 20, %FG \(=0.210\), %TD \(=0.113\); at Opp 35, %FG \(=1.000\), %TD \(=0\) [PAGE 11]. That is a direct demonstration that outcome probabilities depend on starting field position, which weather and kickoff strategy can alter. The model also omits the kickoff return and its physical variance [PAGE 4]. Therefore, any claim that AMSD “is fair” or that Team A “wins 54.7%” for a specific game is vetoed unless the cross-layer vector—weather, fatigue, field surface, team strength, and kickoff policy—is conditioned or re-estimated. The physical veto proof is simple: the Markov operator is a function \(P(\theta)\) of the cross-layer state \(\theta\). If \(\theta\) is outside the training distribution, the estimate \(B(\hat\theta)\) has no external validity. The source provides no weather or biomechanical covariates, so cross-layer extrapolation is not licensed by the paper.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Matrix-consistency veto. Conditional on Table 21 being the sudden-death transition matrix, \(Q=\begin{pmatrix}0&0.638\\0.638&0\end{pmatrix}\) [PAGE 10]. Then \(N=(I-Q)^{-1}\) has off-diagonal entry \(0.638/(1-0.638^2)\approx1.076\), not the \(0.974\) printed in Table 4 [PAGE 4]. Prediction: a verifier recomputing from Table 21 should obtain a first-row fundamental sum near \(2.762\) and an expected overtime near \(436\) s \(\approx7{:}16\), whereas the paper’s 7:01 is consistent with the Table 4 sum \(2.659\). The veto: reject any claim that Table 4 and Table 21 are algebraically identical without an explicit reconciliation of the transition data. This is a binary, verifiable check.

Scenario 2 — Onside break-even feasibility veto. Use the source equation
\[
p_R^*=\frac{p_{\rm reg}-p_{W|\neg R}}{p_{W|R}-p_{W|\neg R}}
\]
with Table 14 values [PAGE 8]. For SD: \((0.389-0.280)/(0.895-0.280)=0.109/0.615\approx0.177\). For MSD: \((0.433-0.360)/(0.895-0.360)=0.073/0.535\approx0.136\). For MSD-10: \((0.409-0.330)/(0.895-0.330)=0.079/0.565\approx0.140\). For AMSD: \((0.439-0.376)/(0.895-0.376)=0.063/0.519\approx0.121\). These match the reported break-even values. Prediction: if a submission reports a break-even recovery probability outside \([0,1]\), or if \(p_{W|R}=p_{W|\neg R}\), the onside-kick argument is undefined or infeasible. The veto is to reject any inference that “Team B should recover an onside kick” unless the denominator is nonzero and \(p_{\rm reg}\) lies between \(p_{W|\neg R}\) and \(p_{W|R}\).

Scenario 3 — MSD-10 playoff tie-removal veto. Table 9 gives the MSD-10 first-possession row as Team A \(0.541\), Team B \(0.346\), tie \(0.112\) [PAGE 6]. A naive renormalization would give \(0.541/(0.541+0.346)\approx0.610\), but the paper reports playoff Team A win probability \(59.5\%\) with an overtime length of 8:08 [PAGE 6]. The source explains why: “We eliminate EOG Tie as a potential state and consider any drives that ended in an EOG tie as a change in possession” [PAGE 6]. Prediction: a verifier that only normalizes the regular-season row will fail; the correct playoff computation must reassign EOG-tie drives to a change of possession and recompute the fundamental matrix. The veto: reject any playoff claim derived by simple row renormalization of Table 9 unless the EOG transition reassignment is explicitly implemented.
</RLVR_COUNTERFACTUAL_VETOES>