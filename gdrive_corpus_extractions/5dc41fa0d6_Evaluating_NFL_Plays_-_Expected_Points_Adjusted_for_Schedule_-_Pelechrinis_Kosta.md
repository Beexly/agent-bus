---
source: "Evaluating NFL Plays - Expected Points Adjusted for Schedule - Pelechrinis_Kosta_mlsa18.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5610
---

<NATIVE_REASONING>
The user wants a rigorous analysis of the provided research paper, adhering to strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations.

Let me parse the source carefully.

Source: "Evaluating NFL Plays: Expected Points Adjusted for Schedule" by Pelechrinis, Winston, Sagarin, Cabot. Pages 1-12 in the markdown.

Key content:
- Abstract: Not all yards equal. Expected points models exist but don't adjust for opponent strength. Optimization framework for offensive/defensive ratings. Average absolute difference raw vs adjusted: 0.07 points/play (p<0.001), median 0.06 (p<0.001). Average 130 plays/game -> ~125 points/season discredited. Special teams evaluation.
- Introduction: Carter and Machol [5] first expected points. Hidden Game of Football [4] linear function. WCS model [8,9] infinite horizon zero-sum stochastic game. State <Down, Yards-to-Go, Field Position>. 19,799 possible states. Only ~4,972 states appear per season (2014-2016). Touchback state prominent (~5x more than second most frequent). Example: state <4,4,7> value -2.575. Example play: 1st&10 own 23, v1=-0.014; gain 4 yards -> 2nd&6 own 27, v2=0.109; play value v2-v1=0.123.
- Other models: Yurko et al. [10] multinomial logistic regression; Brian Burke [1] grouping similar states, next score.
- Section 2: Schedule strength. 2015-2016 easiest schedule 4 points/game easier than toughest; difference 64 points ~2 wins. Optimization framework. For rushing play i:
  p̂_i = m_rush + roi + rdi + ε_i
  where p̂_i point margin gained for offense, m_rush league average points per rush, roi offensive ability, rdi defensive ability (positive rdi = below average defense; positive roi = above average offense).
  Constraint optimization: minimize sum over plays (v_i - m_rush - roi - rdi)^2 presumably (though exact equation image missing, described). Constraints: weighted average of roi and rdi across teams = 0, weighted by number of plays noj, ndj. N total rushing plays.
  Adjusted values: offense adjusted = v - rdi (defense ability). Defense adjusted = v - roi (offense ability). Example: Cowboys vs Patriots, unadjusted 0.40, Patriots rdB = -0.05 (better than average). Adjusted offense = 0.40 - (-0.05) = 0.45. Cowboys roA = +0.10, adjusted for Patriots defense = 0.40 - 0.10 = 0.30.
- Section 2.1 Impact: average absolute discrepancy 0.06 points/offensive play (p<0.001), 0.07 points/defensive play (p<0.001). Offense includes rush/pass/special teams (kicking, punting, FG). Defense includes rush/pass defense + returns + FG defense. 130 plays/game * 16 * 0.06 = 124.8 points. 33 points ≈ 1 win (Appendix C) -> ~3.8 wins per team not credited correctly. Figure 1 ratings 2014-2016. 2016: Broncos best passing defense, Rams worse passing offense, Falcons best passing offense (Matt Ryan MVP). Bills and Cowboys top rushing. Jets top-3 rushing defense after adjustment but not top-10 by yards/game. Special teams: Cardinals ~40 points below average, cost ~1.2 wins in 2016. Chiefs special teams best punt return, 40 points above average.
- Section 3 Case Studies:
  - Passing vs Rushing: 2016 run avg 0.069 points/play, pass attempts 0.26 points/play. Why not pass all the time? Observational data/game plan; play calling predictability reduces efficiency. 3rd down shotgun: for 3rd and <5 yards, rushing gains avg 0.2 points, passing 0.16 points (defense surprised by run). Passing riskier: std dev points per rush 0.89 in 2016, passing 1.48.
  - Rushing Gaps: 25% up middle, others ~12% each. Outside rushes provide more expected points per run than middle. Figure 3.
  - Ratings per gap possible (Cardinals best defending runs through right guard, not left guard).
- Section 4 Discussion/Conclusions: Framework adjusts for opposition strength. Team ratings per unit. Interactive database. Could build football WAR. Example: regression coefficient left tackle 0.10 per 100 pass attempts; rating 90 vs replacement 30; 500 snaps -> (90-30)*5*0.10 = 30 points above replacement on passing; plus 5 points rushing = 35 points ~1 WAR. College prospects: uneven schedule even more pronounced in NCAA; adjust college player contributions by defense strength.
- Appendix A: WCS model intuition. 7-yard field example. V(i) expected point margin. Equations. Solving gives V(1)=-5.25, V(2)=-1.75, V(3)=1.75, V(4)=5.25, V(5)=8.75. Each yard line worth 3.5 points (half TD). Transition probabilities hard; Pro Quarterback game simulation used historically; now play-by-play logs or video game simulations.
- Appendix B: Other adjustment approaches (Football Outsiders not public; simple average biased vs iterative optimization).
- Appendix C: 33 points = 1 win. Linear regression point differential vs wins 2014-2016: intercept 7.9, slope 0.03. 0-point diff -> 8-8 record. 1 point diff -> 0.03 wins. 1 win ≈ 1/0.03 ≈ 33 points.

Now I need to structure the response.

Important: no betting lines. The paper mentions point differential and wins, but I must not frame it as betting. I can mention the 33 points = 1 win conversion as a descriptive statistic from Appendix C, but not as a betting line.

No toy equations. I must state formal LaTeX equations from the paper (or clearly derived), with units, assumptions, and breakdown regimes. Since the actual optimization equation image is missing in the markdown (it shows a blank where equation should be), I need to reconstruct it carefully based on the description: minimize sum_i (v_i - m_rush - roi - rdi)^2 subject to sum_j noj*roj = 0 and sum_j ndj*rdj = 0 (weighted averages zero). I should note the missing rendered equation in the source and provide the formal reconstruction with assumptions.

Exact [PAGE N] markers: The markdown has page numbers at bottom: page 1 (title/abstract), page 2 (intro continued?), actually let's map:
- Page 1: title, abstract, start of introduction.
- Page 2: introduction continued (2 Konstantinos...), state space, WCS details, play value example, other models.
- Page 3: section 2 start, schedule strength, example Team A, adjustment procedure description.
- Page 4: optimization problem (equation missing), constraints, adjusted values example Cowboys/Patriots.
- Page 5: section 2.1 impact, average absolute discrepancy, 130 plays, 124.8 points, 3.8 wins, Figure 1 mention.
- Page 6: Figure 1 discussion, 2016 season results, Jets, special teams intro.
- Page 7: special teams continued, Cardinals/Chiefs, Section 3 case studies passing vs rushing, 2016 averages, shotgun 3rd down.
- Page 8: passing risk std dev, rushing gaps, Figure 3.
- Page 9: rushing gaps continued, ratings per gap, Section 4 discussion.
- Page 10: discussion continued, WAR example, college prospects.
- Page 11: references start? Actually references appear after page 10? Let's see: page 10 ends with references? The markdown shows page 10 then references then Appendix A starting page 11? Let's check: After page 10 content ("10 Konstantinos..."), references start. Then "Evaluating NFL plays... 11" then Appendix A. Then page 11 has Appendix A equations and Fig 4. Page 12 has Appendix B and Appendix C and Fig 5. Wait: The markdown shows:
  - Page 10 ends with "10 Konstantinos..." then References section starts.
  - Then "Evaluating NFL plays... 11" header before Appendix A? Actually it shows references, then "11" page marker then Appendix A. Then Fig 4 on page 11. Then Appendix B on page 12? Let's re-read:

The text flow:
... page 10 content ... "10 Konstantinos Pelechrinis..." then References. Then immediately "Evaluating NFL plays... 11" then Appendix A. Then Fig 4. Then "Evaluating NFL plays... 11" again? Let's look:

After references list (items 1-10), there is:
"## **Appendix A Intuition Behind the WCS Expected Points Model**"
Then text. Then "Evaluating NFL plays... 11" then Fig 4 caption? Actually:
"... systems of equations to solve for every V(i):"
[blank equation]
"Evaluating NFL plays... 11"
**Fig. 4.** ...
Then equations text.
Then Appendix B.
Then "Evaluating NFL plays... 12" before Appendix C? Let's check: Appendix B text ends with "...one single iteration of a similar process." Then "12 Konstantinos..." then Appendix C? Actually:

"## **Appendix B Other Adjustment Approaches**"
... text ...
"Evaluating NFL plays... 12" 
"## **Appendix C 33 Points Equal 1 Win in NFL**"
Fig 5. Text about regression intercept 7.9 slope 0.03.
Then "10 Konstantinos..."? No, at the very end: "10 Konstantinos Pelechrinis..." appears after Appendix C text? Let's look at the very end of source:

"Equivalently, 1 win corresponds to 1<sup>points.</sup> 0 _._ 03<sup>_≈_33</sup>"


then:
"10 Konstantinos Pelechrinis, Wayne Winston, Jeff Sagarin, and Vic Cabot"

Wait that seems like a page number artifact. Actually the markdown ends with:
"Equivalently, 1 win corresponds to 1<sup>points.</sup> 0 _._ 03<sup>_≈_33</sup>"


"10 Konstantinos Pelechrinis, Wayne Winston, Jeff Sagarin, and Vic Cabot"

That page "10" at the end is likely a misplaced footer from earlier, but regardless, Appendix C is on page 12 per the marker "Evaluating NFL plays... 12" right before Appendix C header? Let's check sequence:

After Appendix B text:
"Evaluating NFL plays... 12"
"## **Appendix C 33 Points Equal 1 Win in NFL**"
...

So Appendix C is on page 12. Appendix A spans pages 11? The marker "Evaluating NFL plays... 11" appears before Fig 4. So Appendix A starts on page 11.

Page mapping:
- Page 1: Title/Abstract/Intro start.
- Page 2: Intro continued (footer "2 Konstantinos...").
- Page 3: Section 2 start (footer "3" maybe? Actually after page 2 text there's "Evaluating NFL plays... 3").
- Page 4: Optimization problem (footer "4 Konstantinos...").
- Page 5: Section 2.1 impact (footer "5").
- Page 6: Figure 1 discussion (footer "6 Konstantinos...").
- Page 7: Case studies passing/rushing (footer "7").
- Page 8: Rushing gaps (footer "8 Konstantinos...").
- Page 9: Section 4 discussion (footer "9").
- Page 10: Discussion continued, WAR, college (footer "10 Konstantinos...").
- Page 11: References + Appendix A start? Actually References then page 11 marker then Appendix A.
- Page 12: Appendix B + Appendix C? The marker "12" appears before Appendix C. Hmm.

Let's just cite [PAGE 1]-[PAGE 12] approximately based on footers visible. I will cite specific pages where content appears:

- Abstract: [PAGE 1]
- Carter & Machol, WCS, 19,799 states, play value example: [PAGE 2]
- Schedule strength 4 points/game, 64 points ~2 wins: [PAGE 3]
- Optimization problem, constraints, adjusted values example Cowboys/Patriots: [PAGE 4]
- Impact: 0.06/0.07 discrepancy, 130 plays, 124.8 points, 3.8 wins: [PAGE 5]
- Figure 1, Jets, special teams: [PAGE 6]
- Passing vs rushing averages, shotgun, risk std dev: [PAGE 7]
- Rushing gaps, Figure 3: [PAGE 8]
- Section 4, WAR example, college prospects: [PAGE 9] or [PAGE 10]? Let's see: Section 4 starts on page 9 ("Evaluating NFL plays... 9" before Section 4?). Actually page 9 footer appears before Section 4? Let's check: Page 8 ends with Figure 3 discussion. Then "One can also solve optimization problem 2... ratings per gap...". Then page 9 footer? The text shows:
"Figure 3 presents..." (page 8 footer before). Then text continues. Then "One can also solve...". Then "## **4 Discussion and Conclusions**" with footer "9" before it? Actually: "Evaluating NFL plays... 9" then "## **4 Discussion and Conclusions**". So Section 4 starts on page 9. WAR example and college prospects also on page 9? The footer "10 Konstantinos..." appears after college prospects text, so page 10 contains end of discussion and references start.

- Appendix A: page 11.
- Appendix B: page 11/12.
- Appendix C: page 12.

I'll cite carefully but not overcommit on exact page if uncertain; however user demands exact [PAGE N] markers. I'll use the footers visible in the text.

Now the XML sections:

1. <THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to derive the math, discuss identifiability, sparsity (19,799 states vs ~4,972 observed), the optimization problem's missing rendered equation, the sign conventions (positive rdi = below average defense), the compounding effect (125 points/season), the 33 points = 1 win conversion, the limitations (observational data, play-calling endogeneity), special teams attribution (pick-6, fumble short field), gray zones: does the adjustment double-count? Is m_rush identifiable separately from team ratings given normalization? The constraints set weighted averages to zero, so m_rush is league average. But there is a potential singularity: if a team has zero offensive or zero defensive plays, rating is unidentified. Also the two-sided adjustment (offense gets v - rdi, defense gets v - roi) means the same raw play is split; sum of adjusted offensive and defensive values doesn't necessarily equal raw because they subtract different terms. Need to audit that. Also gray zone: schedule strength measured via same data used to estimate ratings (simultaneity/bias). Multi-week traps: injuries, coaching changes, opponent adjustments within season not modeled (static ratings per season). 

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. I need to write:
- State space: S = {<d, y, f>} with |S| = 19,799 [PAGE 2].
- Play value: Δv = v₂ - v₁ = 0.109 - (-0.014) = 0.123 points [PAGE 2].
- Example state value: v(<4,4,7>) = -2.575 points [PAGE 2].
- Prediction model: p̂_i = m_rush + roi + rdi + ε_i [PAGE 3-4], units: points per play.
- Optimization: min_{m, {ro}, {rd}} Σ_{i=1}^{N} (v_i - m_rush - ro_{o(i)} - rd_{d(i)})² subject to Σ_j n_{oj} ro_j = 0, Σ_j n_{dj} rd_j = 0, where n_{oj}, n_{dj} are play counts [PAGE 4]. Note: rendered equation absent in source markdown; reconstructed from textual description [PAGE 4].
- Adjusted offense value: v^{adj}_{off} = v - rd_B [PAGE 4].
- Adjusted defense value: v^{adj}_{def} = v - ro_A [PAGE 4].
- Example: v=0.40, rd_{Patriots} = -0.05 → v^{adj}_{off} = 0.45; ro_{Cowboys}=+0.10 → v^{adj}_{def} = 0.30 [PAGE 4].
- Discrepancy: mean |Δ| = 0.06 off, 0.07 def, p<0.001 [PAGE 5]. Seasonal aggregate: 130 plays × 16 games × 0.06 = 124.8 points [PAGE 5]. 33 points ≈ 1 win → 124.8/33 ≈ 3.8 wins [PAGE 5, PAGE 12].
- Passing/rushing 2016: μ_run = 0.069, μ_pass = 0.26 points/play [PAGE 7]. Shotgun 3rd & <5: run 0.20 vs pass 0.16 [PAGE 7]. σ_run = 0.89, σ_pass = 1.48 points/play [PAGE 7].
- Appendix C regression: Wins = 7.9 + 0.03 × PointDifferential [PAGE 12]. Thus 1 win ≈ 1/0.03 ≈ 33.33 points [PAGE 12].
- Appendix A: V(1)=-5.25, V(2)=-1.75, V(3)=1.75, V(4)=5.25, V(5)=8.75; gradient ≈ 3.5 points/yard [PAGE 11].
- WAR example: (90-30) × 5 × 0.10 = 30 points passing + 5 rushing = 35 points ≈ 1 WAR [PAGE 9 or 10].

Assumptions: linear additive separability of offense/defense/league mean; errors ε_i i.i.d. mean zero; static ratings over season; schedule strength captured solely by opponent ratings; no special-teams interaction with offense/defense beyond play type; raw expected points v_i are unbiased conditional on state.
Breakdown/singularity: teams with n_{oj}=0 or n_{dj}=0 have unidentified ro_j or rd_j; sparse states (only ~4,972/19,799 observed) cause high variance in v_i for rare states [PAGE 2]; normalization constraints create a gauge freedom fixed by weighted zero-mean; if all opponents are identical (balanced schedule), rdi terms collapse and adjustment vanishes (0.06-0.07 average effect shows schedule is uneven).

3. <RETROCAUSAL_GENEALOGY>: Historical lineage: Carter & Machol 1971 [5] operations research on football; Carroll/Palmer/Thorn 1989 [4] Hidden Game linear expected points; Winston/Cabot/Sagarin 1983/2012 [8,9] WCS infinite-horizon zero-sum stochastic game; Shapley 1953 [7] stochastic games; Yurko et al. 2018 [10] multinomial logistic regression; Brian Burke [1] next-score grouping; Pelechrinis passing skill curve 2018 [6]. Multi-week traps: static season-long ratings ignore within-season roster/injury/coaching evolution; opponent strength estimated from same plays being adjusted (fixed-point simultaneity); early-season ratings contaminated by small-sample noise; late-season trap: teams resting starters alter defensive ratings used to adjust earlier playoff-relevant plays. Also "multi-week trap" in betting? No betting lines. I'll frame as analytical traps for model users over weeks.

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract. I need to interpret: How would a coach/analyst regress to crisis habits under pressure vs. set a counter-trap vs. game clock. Using the paper: coaches may over-rely on passing because μ_pass > μ_run (0.26 vs 0.069 in 2016) [PAGE 7] — a crisis habit regression to the higher-mean play type. Counter-trap: defense anticipates pass (shotgun formation), making run more efficient (0.20 vs 0.16) [PAGE 7]. Clock: risk (σ_pass=1.48 > σ_run=0.89) means sustained drives favor rushing; clock management and variance. Recursive ToM: offense thinks defense expects pass → runs; defense thinks offense will run because of that → passes; etc. The paper notes observational data and game-plan dependency; if offense calls same play every time efficiency drops [6] [PAGE 7]. I'll write this as a game-theoretic recursion.

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. The paper doesn't discuss weather or biomechanics explicitly. I need to state veto layers that would invalidate or condition the model's application:
- Physical layer: field position state includes yard line; weather (wind, precipitation) alters transition probabilities and expected points; not in WCS raw model → veto for extreme weather unless re-estimated.
- Biomechanical: player fatigue, injury status, snap counts not in team-level ratings; a left tackle WAR regression assumes player ratings available (not in public data) [PAGE 9/10]; veto if player-level injury/rotation data missing.
- The model is play-level expected points; does not condition on score, time remaining, clock → veto for end-of-game clock management situations where expected points ≠ win probability.
- Special teams: attribution veto for pick-6s and fumbles giving short field — paper acknowledges offense held accountable [PAGE 6].
- No betting lines.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR (Reinforcement Learning via Verifiable Rewards?) veto scenarios + predictions. I need to create 3 counterfactual veto scenarios that are verifiable (i.e., can be tested/falsified) with predictions. No betting lines.
   - Scenario 1: Sparsity veto. For a rare state (e.g., 4th & 4 at own 7, value -2.575 [PAGE 2]), if observed count < threshold, the raw v_i has high variance; veto adjustment and regress to league mean. Prediction: adjusted values for rare states will show larger out-of-sample error than common states; holdout test on 2016 data should show RMSE increase > X% for states with <10 observations.
   - Scenario 2: Opponent-strength simultaneity veto. Because ratings are solved jointly from the same plays, a team's offensive rating inflates its opponents' defensive ratings. Counterfactual: freeze opponent ratings from weeks 1-8 and adjust weeks 9-17 plays; prediction: out-of-sample adjusted points correlation with future performance drops by >15% compared to joint estimation (verifiable via split-sample).
   - Scenario 3: Special teams attribution veto. The model assigns kickoff/punt value to kicking team and return to receiving team independently of preceding drive outcome. Counterfactual: compare special teams APP for teams with poor offense (short field vs deep kick). Prediction: teams ranked bottom-5 in offensive field position will have biased special teams ratings; after conditioning on starting field position, the Cardinals' -40 points [PAGE 6] should attenuate by >25% (verifiable by re-running model with field-position covariates).

I need to ensure total word count >= 1000 across sections, with THINK_TRACE >= 400 words.

Let me draft carefully, ensuring no betting language. I will not use words like spread, moneyline, total, over/under, odds, wager, bet, bookmaker. I'll use "point differential," "win conversion," "expected margin."

Let's write.

THINK_TRACE: >400 words. I'll write maybe 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.

RETROCAUSAL_GENEALOGY: historical lineage + multi-week traps.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The core identification problem in Pelechrinis et al. is that raw expected-point values v_i are computed from a state space of |S| = 19,799 possible <Down, Yards-to-Go, Field Position> triplets [PAGE 2], yet only about 4,972–4,989 of those states actually appear in a given season’s play-by-play data [PAGE 2]. This sparsity means the value function v(s) is estimated with high variance for rare states, and the prominent touchback state appears roughly five times more often than the second-most-frequent state, further distorting empirical averages [PAGE 2]. The paper’s adjustment layer adds a second estimation problem: team offensive and defensive ratings are solved jointly from the same plays whose values they are meant to adjust. Because the model is linear-additive—p̂_i = m_rush + ro_i + rd_i + ε_i [PAGE 3–4]—the league mean m_rush is only identifiable up to the normalization constraints Σ_j n_{oj} ro_j = 0 and Σ_j n_{dj} rd_j = 0, weighted by each team’s offensive and defensive play counts [PAGE 4]. A gray zone arises here: if a team has zero offensive or zero defensive rushing plays in the sample, its corresponding rating is unidentified, creating a singularity in the design matrix. The paper does not explicitly discuss regularization for such cells.

A second gray zone is simultaneity. The defensive rating rd_B enters the adjusted offensive value v − rd_B [PAGE 4], while the offensive rating ro_A enters the adjusted defensive value v − ro_A [PAGE 4]. Since both ratings are estimated from the same set of plays, an offensive team that benefits from a weak schedule mechanically inflates the defensive ratings of its opponents, which then feeds back into the offensive adjustment. The reported average absolute discrepancy of 0.06 points per offensive play and 0.07 points per defensive play (p < 0.001) [PAGE 5] is small per play but compounds to 130 plays × 16 games × 0.06 ≈ 124.8 points per season [PAGE 5], which the authors convert using Appendix C’s estimate that 33 points ≈ 1 win (regression slope 0.03 wins per point differential, intercept 7.9) [PAGE 12], yielding roughly 3.8 wins per season misattributed if schedule is ignored [PAGE 5].

There is also an attribution asymmetry worth auditing. The same raw play v produces two different adjusted values—one for the offense (subtracting opponent defensive ability) and one for the defense (subtracting own offensive ability) [PAGE 4]. These are not required to sum to v, and the paper does not state a global adding-up constraint across all plays. For special teams, the paper explicitly rejects assigning pick-sixes or fumble-induced short fields solely to the defense, instead charging the offense with negative-value plays [PAGE 6], but it does not model how field position generated by the offense conditions the value of the ensuing kickoff or punt.

Multi-week traps emerge because the ratings are season-long static objects. Early-season ratings are estimated from small samples and are noisy; late-season ratings may reflect starters being rested or scheme changes irrelevant to playoff preparation. Because schedule strength is itself derived from the same ratings, a team’s early-season strength of schedule is contaminated by the very ratings being adjusted—a recursive bias the paper acknowledges only implicitly by comparing its iterative optimization to Football Outsiders’ non-public, single-iteration averaging [PAGE 11–12]. Finally, the passing-vs-rushing averages (0.26 vs 0.069 points per play in 2016) [PAGE 7] invite a naïve habit regression to passing, but the paper correctly notes that play-calling predictability reduces efficiency and that shotgun rushes on 3rd and <5 outgained shotgun passes (0.20 vs 0.16 points) because defenses are surprised [PAGE 7].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
State space and raw expected points:
\mathcal{S} = \{ \langle \text{Down}, \text{Yards-to-Go}, \text{Field Position} \rangle \}, \quad |\mathcal{S}| = 19{,}799 \text{ states} \quad [\text{PAGE 2}]
Only \approx 4{,}972\text{–}4{,}989 states observed per season (2014–2016) [\text{PAGE 2}].
Example state value: v(\langle 4,4,7\rangle) = -2.575 \text{ points} \quad [\text{PAGE 2}].
Play value operator: \Delta v = v_2 - v_1; for 1st\&10 own 23 (v_1 = -0.014) gaining 4 yards to 2nd\&6 own 27 (v_2 = 0.109), \Delta v = 0.109 - (-0.014) = 0.123 \text{ points} \quad [\text{PAGE 2}].

Opponent-strength adjustment model (rushing plays):
\hat{p}_i = m_{\text{rush}} + ro_i + rd_i + \varepsilon_i,
where \hat{p}_i is predicted point margin for the offense in points per play; m_{\text{rush}} is the league-average points per rush; ro_i is the offensive team’s rushing ability; rd_i is the defensive team’s rushing ability; \varepsilon_i is the error term. Sign convention: ro_i > 0 denotes above-average offense; rd_i > 0 denotes below-average (i.e., weaker) defense [\text{PAGE 3–4}].
The rendered optimization equation is absent from the provided markdown [\text{PAGE 4}], but the textual description implies the constrained least-squares problem:
\min_{m_{\text{rush}}, \{ro_j\}, \{rd_j\}} \sum_{i=1}^{N} \Bigl( v_i - m_{\text{rush}} - ro_{o(i)} - rd_{d(i)} \Bigr)^2
\text{subject to } \sum_{j} n_{oj} \, ro_j = 0 \quad \text{and} \quad \sum_{j} n_{dj} \, rd_j = 0,
where n_{oj} and n_{dj} are team j’s offensive and defensive rushing-play counts, and N is total rushing plays [\text{PAGE 4}]. Units: points per play.

Two-sided adjusted values [\text{PAGE 4}]:
v^{\text{adj}}_{\text{offense}} = v - rd_B,
v^{\text{adj}}_{\text{defense}} = v - ro_A.
Numeric example: Cowboys vs. Patriots, v = 0.40 points, rd_{\text{Patriots}} = -0.05 points/play (better than average), ro_{\text{Cowboys}} = +0.10 points/play.
\Rightarrow v^{\text{adj}}_{\text{off}} = 0.40 - (-0.05) = 0.45 \text{ points}; \quad v^{\text{adj}}_{\text{def}} = 0.40 - 0.10 = 0.30 \text{ points}.

Empirical impact [\text{PAGE 5}]:
Mean absolute discrepancy: 0.06 points/offensive play, 0.07 points/defensive play, p < 0.001.
Seasonal aggregate: 130 \text{ plays/game} \times 16 \text{ games} \times 0.06 = 124.8 \text{ points/season}.
Win conversion (Appendix C): \text{Wins} = 7.9 + 0.03 \times \text{PointDifferential}; hence 1 \text{ win} \approx 1/0.03 \approx 33.3 \text{ points} \quad [\text{PAGE 12}].
Implied misattribution: 124.8 / 33.3 \approx 3.75 \approx 3.8 \text{ wins per team per season} \quad [\text{PAGE 5}].

2016 play-type means [\text{PAGE 7}]:
\mu_{\text{run}} = 0.069 \text{ points/play}; \quad \mu_{\text{pass}} = 0.26 \text{ points/play}.
Shotgun, 3rd down <5 yards to go: \mu_{\text{run}} = 0.20, \quad \mu_{\text{pass}} = 0.16 \text{ points/play}.
Risk (standard deviation): \sigma_{\text{run}} = 0.89, \quad \sigma_{\text{pass}} = 1.48 \text{ points/play} \quad [\text{PAGE 7}].

WAR-style extrapolation [\text{PAGE 9–10}]:
Left-tackle pass regression coefficient 0.10 points per 100 pass attempts per rating point; rating 90 vs. replacement 30 over 500 snaps:
(90 - 30) \times 5 \times 0.10 = 30 \text{ points above replacement (passing)}; plus 5 rushing points = 35 \text{ points} \approx 1 \text{ WAR}.

Appendix C linear relationship [\text{PAGE 12}]: intercept 7.9 (expected 8-8 record at zero point differential), slope 0.03 wins per point differential; 1 win \approx 33 points.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage begins with Carter and Machol’s 1971 operations-research treatment of football, which first assigned point values to game states [5, PAGE 2]. Carroll, Palmer, and Thorn’s 1989 Hidden Game of Football attempted a linear valuation of down-distance-field-position states [4, PAGE 2]. The present paper builds directly on Winston, Cabot, and Sagarin’s WCS model [8,9], which formalizes football as an infinite-horizon zero-sum stochastic game rooted in Shapley’s 1953 stochastic-game theory [7, PAGE 2], solving for state values and mixed strategies via linear programming [7, PAGE 2]. Subsequent alternatives include Yurko et al.’s 2018 multinomial logistic regression on play-by-play data [10, PAGE 2] and Brian Burke’s next-score grouping method [1, PAGE 2]. The schedule-strength adjustment contributes a constrained optimization layer absent from all prior approaches; the authors contrast it with non-public proprietary metrics (e.g., Football Outsiders) that they characterize as effectively a single iteration of the same fixed-point idea rather than a fully iterated solution [Appendix B, PAGE 11–12].

Multi-week traps specific to this framework are structural. Because ratings are estimated per season and held constant, early-season observations carry disproportionate weight in a small-sample regime before injuries, trades, and coaching adjustments have manifested; a team’s Week 3 defensive rating is then used to adjust offensive plays in Week 15, propagating early noise late into the season. Conversely, late-season starters resting can depress defensive ratings that are subsequently back-projected onto earlier games in the same season file. The fixed-point nature of the joint estimation—offense ratings depend on defense ratings and vice versa—means the schedule-strength adjustment is endogenous to the sample: if the league schedule were perfectly balanced, all rd terms would converge toward the normalization constraint and the adjustment would vanish; the reported 0.06–0.07 point discrepancies therefore measure schedule unevenness as much as they measure true unit quality [PAGE 3–5]. For college applications, the authors note schedule unevenness is even more pronounced in NCAA football, so applying the same static optimization to multi-year college data without time-varying coefficients would embed conference-strength shifts and non-stationary opponent quality into player valuations [PAGE 10].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A coach operating under crisis pressure faces a recursive theory-of-mind problem: the offense models the defense’s expectation, and the defense models the offense’s model of that expectation. The paper’s descriptive statistics supply the equilibrium starting point: in 2016, passes averaged 0.26 points per play versus 0.069 for runs [PAGE 7], so a naïve crisis habit regression is to pass more often when the offense needs points. However, this regress-to-the-mean strategy is exploitable. If the defense is certain the offense will pass—e.g., shotgun formation on 3rd down—it plays pass-oriented personnel, and the run becomes relatively more efficient: shotgun rushes gained 0.20 points on 3rd and less than 5 yards to go versus 0.16 for passes [PAGE 7]. The first-order counter-trap is therefore to run into the expected pass defense. The second-order counter-counter-trap is for the defense to anticipate the run and revert to pass defense, restoring the passing advantage. The paper explicitly warns that observational play-calling data are endogenous: “if a team calls the same play every time we should expect its efficiency to drop” [6, PAGE 7], so any deterministic habit is self-defeating.

Clock considerations bound the recursion. Passing is riskier (\sigma_{\text{pass}} = 1.48) than rushing (\sigma_{\text{run}} = 0.89) [PAGE 7], meaning variance-averse game scripts—protecting a lead, managing the clock, sustaining drives—rationally favor the lower-variance run despite its lower mean. The expected-points model itself does not condition on time remaining or score differential, so it cannot directly solve end-of-half clock management; a coach using these values in a two-minute drill would be applying a stationary state-value function to a non-stationary decision problem. The recursive equilibrium thus lives at the intersection of mean efficiency (pass), surprise variance (run into stacked box), and clock risk (run to sustain), with no pure habit dominating because the opponent’s recursive response adjusts the payoff matrix weekly.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The expected-point state is <Down, Yards-to-Go, Field Position> [PAGE 2]; it omits weather variables (wind, precipitation, temperature), surface conditions, and altitude. Because transition probabilities between states are estimated from pooled play-by-play data [PAGE 2] without weather conditioning, the model is vetoed for extreme-weather games unless the raw state values are re-estimated within weather-stratified subsets. Applying dome-derived transition probabilities to a windy outdoor game injects systematic bias into v_i before any schedule adjustment occurs.

Biomechanical layer: Team-level ratings ro_j and rd_j aggregate all players on the unit [PAGE 4]; they do not account for individual injury status, snap-count rotation, or player-specific matchups. The paper’s own WAR extension requires player ratings on a 1–100 scale that are not publicly available [PAGE 9–10]; therefore any player-level valuation built from these team ratings is vetoed unless accurate player-level data (e.g., PFF grades or internal tracking) are appended. A left-tackle coefficient of 0.10 points per 100 attempts assumes constant personnel across the sample; substituting a backup tackle mid-season invalidates the rating’s transferability.

Attribution/game-flow layer: Special-teams plays are evaluated independently of the drive that preceded them [PAGE 6], yet the paper itself notes that a punt from one’s own end zone gives the opponent good field position through no fault of the special team. The model assigns kick/punt coverage value to the kicking team and return value to the receiving team without conditioning on starting field position generated by the offense. Consequently, teams with chronically poor offense (frequent deep punts) may have distorted special-teams ratings; the Cardinals’ -40-point special-teams rating in 2016 [PAGE 6] cannot be causally attributed to special-teams personnel without a field-position covariate. Similarly, pick-sixes and fumble recoveries are charged to the offense rather than the defense [PAGE 6], but the model does not explicitly separate defensive-play value from offensive turnover value, creating an attribution veto for games with high turnover rates.

Weather/physical veto is proof-positive when wind exceeds thresholds that materially change kickoff distance and field-goal success probability; the model contains no such term and therefore produces unadjusted expected points that are not comparable across weather regimes.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Rare-state sparsity veto. Condition: a game state s has fewer than 10 observed occurrences in the season sample. Because only ~4,972 of 19,799 states appear per season [PAGE 2], raw v(s) estimates for rare states (e.g., 4th and 4 at own 7, v = -2.575 [PAGE 2]) are high-variance. Veto rule: do not use the raw play value or the schedule adjustment for plays in states below the observation threshold; regress to the league mean for that down-distance bin. Verifiable prediction: on a 2016 holdout set, the out-of-sample root-mean-squared error of play values for rare states will exceed that for common states by more than 25%, and the schedule adjustment will not reduce this gap because opponent ratings are estimated from the same sparse observations.

Veto Scenario 2 — Simultaneity/fixed-point veto. Condition: offensive and defensive ratings are estimated jointly from all plays in the season, so rd_j depends on ro_k of every opponent k. Veto rule: freeze opponent ratings estimated from Weeks 1–8 only, then compute adjusted values for Weeks 9–17 plays using those frozen ratings, and compare to the fully joint-season estimates. Verifiable prediction: the correlation between frozen-rating adjusted points and end-of-season team differential will be at least 15% lower than the correlation using joint-season ratings, demonstrating that in-season opponent evolution invalidates static season-long adjustments for late-season plays.

Veto Scenario 3 — Special-teams attribution veto. Condition: special-teams value is assigned without conditioning on the field position at which the kick or punt occurred. Veto rule: re-estimate special-teams ratings including starting field position (offensive drive outcome) as a covariate and compare the pre- and post-covariate team rankings. Verifiable prediction: the Cardinals’ 2016 special-teams rating of approximately 40 points below average [PAGE 6] will attenuate by more than 25% once starting field position is controlled, because their poor offense frequently pinned the special-teams unit deep; teams ranked bottom-five in offensive field position will show the largest re-ranking, confirming that raw special-teams APP confounds unit quality with drive-start position.
</RLVR_COUNTERFACTUAL_VETOES>