---
source: "2022 - cricWAR A reproducible system for evaluating player performance in limited-overs cricket - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2022"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 8583
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text about cricWAR. I need to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to carefully extract page numbers from the source. The source text has page markers embedded like "1", "2", "3", etc. Let me map content to pages:

Page 1: Abstract, Introduction start, 1.1 Limited Overs Cricket
Page 2: 1.2 Previous Work, 1.3 Contributions, Section 2 cricWAR Model start, expected runs definition
Page 3: Run value definition, runs conservation framework, 2.1 Adjusting Run Values, 2.1.1 Leverage Index
Page 4: 2.1.2 Batting regression, Equation 1, residuals, 2.1.3 Bowling, Equation 2
Page 5: 2.2 Runs Above Average, RAA formulas, 2.3 Value over Replacement Player, VoRP formula, replacement level definition (top 8N batters/bowlers)
Page 6: 2.4 Wins above Replacement, RPW regression, results Section 4 start, Figure 1 mention
Page 7: Table 1, results discussion, Figure 2 mention, Table 2 start
Page 8: Table 2 continued (JC Archer), 4.1 Metric Stability, Table 3, Table 4
Page 9: Section 5 Summary, Further Discussion, fielding data limitation, second innings chase
Page 10: 5.1 Considerations for Teams, References

Wait, I need to look carefully at the page breaks in the provided text. The text shows numbers like "1", "2", "3" etc. Let me trace:

- After abstract/intro start: "1" appears.
- After Section 2 start and expected runs: "2" appears.
- After Leverage Index discussion: "3" appears.
- After batting/bowling regression residuals: "4" appears.
- After RAA formulas and replacement level discussion: "5" appears.
- After RPW and start of Results: "6" appears.
- After Table 1 and discussion: "7" appears.
- After Table 2 continued and 4.1: "8" appears.
- After Section 5 start: "9" appears.
- After 5.1 and References: "10" appears.

Actually looking at the raw text:
- "1" is after the intro paragraph about sabermetrics.
- "2" is after "We define the states of a T20 game by the over (o), and the wickets lost(w)." Wait, no. Let me re-read carefully.

The text has standalone numbers that likely represent page numbers:
- "1" appears after the paragraph ending "...drop one game in the standings over a whole season if we were to replace him with a replacement-level player."
- "2" appears after "...expected number of runs that would be scored given the current state of the game." Hmm, actually looking at the text:

After "...one game in the standings over a whole season if we were to replace him with a replacement-level player." then "1".
Then 1.1 Limited Overs Cricket.
Then 1.2 Previous Work.
Then 1.3 Contributions.
Then Section 2.
Then "...establish the" then page break "2".
Then expected runs definition.
Then run value definition.
Then runs conservation.
Then 2.1 Adjusting Run Values.
Then 2.1.1 Leverage Index.
Then page break "3".
Then 2.1.2 Batting regression.
Then 2.1.3 Bowling.
Then page break "4".
Then 2.2 Runs Above Average formulas.
Then 2.3 Value over Replacement Player.
Then page break "5".
Then replacement level discussion (top 8N).
Then VoRP formula.
Then 2.4 Wins above Replacement.
Then RPW regression.
Then page break "6".
Then Section 4 Results start.
Then Figure 1 caption.
Then Table 1.
Then results discussion.
Then page break "7".
Then Figure 2 caption mention.
Then Table 2 start.
Then page break "8".
Then Table 2 continued (JC Archer row).
Then 4.1 Metric Stability.
Then Table 3.
Then Table 4.
Then page break "9".
Then Section 5 Summary.
Then 5.1 Considerations for Teams.
Then References.
Then page break "10".

Actually, looking at the text, the numbers appear as standalone lines. Let me assume standard PDF pagination where the number at the bottom/top is the page. But since this is a markdown conversion, I'll cite the page numbers as they appear in the text flow.

Let me map more precisely:
- Page 1: Abstract through end of Intro paragraph (before 1.1). Wait, the "1" appears after the intro paragraph. Then 1.1 starts. So page 1 contains Abstract and Section 1 up to the example of Virat Kohli.
- Page 2: Contains 1.1, 1.2, 1.3, Section 2 start, expected runs definition start? Actually the "2" appears after "Our proposed measures RAA and WAR are based on the runs conservation framework... The first step is to establish the". Then page 2 continues with expected runs, run value, conservation, 2.1, leverage index.
- Page 3: Contains leverage index continued, 2.1.2 Batting regression, 2.1.3 Bowling.
- Page 4: Contains 2.1.3 continued?, 2.2 RAA, 2.3 VoRP start.
- Page 5: Contains replacement level definition, VoRP formula, 2.4 WAR, RPW.
- Page 6: Contains RPW end, Section 4 Results, Figure 1.
- Page 7: Contains Table 1, results discussion, Figure 2 mention.
- Page 8: Contains Table 2 (part), Table 2 continued, 4.1, Tables 3 & 4.
- Page 9: Contains Section 5 Summary, Further Discussion.
- Page 10: Contains 5.1, References.

Wait, I need to be more careful. Let me look at the exact positions:

Text segment: "...drop one game in the standings over a whole season if we were to replace him with a replacement-level player.

1 

Inspired by sabermetrics..."

So "1" is page number 1? Or is it a footnote? Actually in academic papers, page numbers are often at bottom. The asterisk footnote is on page 1. So page 1 ends after the intro paragraph about Virat Kohli.

Then: "### **1.1 Limited Overs Cricket** ... For the rest of the paper, we will use Twenty20 (T20) games as an example of a limited-overs game. As the name suggests, there are twenty overs (120 balls) in each innings of a T20 game.

### **1.2 Previous Work** ... [3] lacks the uncertainty estimation for their proposed metrics.

### **1.3 Contributions of cricWAR** ... which provides easy access to ball-by-ball and is co-developed by us.

## **2 cricWAR Model** 

Our proposed measures RAA and WAR are based on the runs conservation framework, which depends on the difference between expected and actual runs scored on each ball. The first step is to establish the

2 

expected number of runs that would be scored given the current state of the game."

So page 2 starts with "expected number of runs..." and contains Section 2 start, expected runs, run value, conservation, 2.1, leverage index.

Then: "...Leverage Index (LI) for each state. An LI of one corresponds to a state which is average wrt scoring rate, whereas a LI ≫ 1 means its a high scoring state, and a LI ≪ 1 means it is a low scoring state.


The run value 𝛿 is divided by the corresponding leverage index (LI) and labelled as leveraged run value 𝛿<sup>𝑙𝑒𝑣</sup> . LI helps account for situations which might be conducive for scoring (power play with fielding restrictions, last few overs of an innings.) or defending (middle overs).

3 

#### **2.1.2 Batting**"

So page 3 contains end of leverage index, then 2.1.2 Batting regression, then 2.1.3 Bowling? Let's see:

"#### **2.1.2 Batting** 

There are different factors beyond the control of batters and bowlers that affects the run values and makes it hard to compare them across contexts. In particular, we want to account for the venue, innings (first Vs second), platoon advantage (right handed batter against left handed bowler or vice-versa), and the bowling pace (spin Vs pace). We adjust for these factors using a linear regression. We fit the leveraged run values using the covariates mentioned above.


where all the covariates are categorical. The coefficients 𝛽, 𝛽1, 𝛽2, and 𝛽3 are the effects for the venue, innings (first Vs second), platoon advantage, and the bowling pace (spin Vs pace), on the leveraged run values, respectively. Ordinary least square is employed to estimate the coefficients. The estimated coefficients 𝛽, 𝛽1, 𝛽2, and 𝛽3 are evaluated by ordinary least square using all the ball-by-ball data in the season.

The estimated residuals from the regression (Equation 1) 


indicate the part of the leveraged run values 𝛿𝑖<sup>𝑙𝑒𝑣</sup> that is not accredited to venue, innings, bowling pace, and platoon advantage and we refer to them as adjusted batting leveraged run values.

#### **2.1.3 Bowling** 

The runs conservation framework dictates that the bowler gains leveraged run value −𝛿𝑖<sup>𝑙𝑒𝑣</sup> for each 𝛿𝑖<sup>𝑙𝑒𝑣</sup> leveraged run value gained by the batter. Along with that any extras (wides, noballs) 𝜔 are completely attributed to the bowler. Similar to Equation 1, we adjust the bowling leveraged run value -(𝛿𝑖 + 𝜔𝑖)<sup>𝑙𝑒𝑣</sup> for the venue, innings, platoon advantage, or the bowling pace 


The estimated residuals from the regression (Equation 2) 


indicate the part of the leveraged run values -(𝜔𝑖 + 𝛿𝑖)<sup>𝑙𝑒𝑣</sup> that is not accredited to venue, innings, platoon advantage or the bowling pace and we refer to them as adjusted bowling leveraged run values.

4 

### **2.2 Runs Above Average**"

So page 4 contains end of bowling section, then 2.2 RAA.

Then: "To the best of our knowledge, the fielding tracking data is not available, at least publicly. In the absence of fielding data, we accredit these adjusted batting and adjusted bowling leveraged run values to the batter and bowler, respectively.


𝑅𝐴𝐴<sup>𝑏𝑜𝑤𝑙</sup> 𝑖 =̂ 𝜂𝑖, 𝑅𝐴𝐴<sup>𝑏𝑎𝑡</sup> 𝑖 =̂ 𝜖𝑖 

The runs above average for each ball a player played (batted or bowled), over a season, is summed to get the total measure of 𝑅𝐴𝐴𝑋 for player 𝑋, where 𝐼(⋅) is the indicator function.


5 

### **2.3 Value over Replacement Player**"

So page 5 contains RAA formulas, then VoRP start.

Then: "The usual attempts at evaluating Value over Replacement Player (VoRP) involves measuring player contribution on the scale of runs/points relative to a baseline player and a natural choice would be to choose a ‘league average’ player as that baseline. However, as discussed in openWAR [1] and nflWAR [5], the leagueaverage players are still quite valuable, and it is unlikely for a team to be able to replace the player in consideration with another league-average player. Instead, the team is more likely to look for a replacement player from a relatively inexperienced, at the pro level, group of players from their team roster. Hence, for the baseline comparison, we consider a _replacement level_ player to be one that is readily available to replace the player being evaluated. E.g., in MLB, replacement level player is more likely to come from minor leagues.


We consider an approach similar to openWAR [1] and nflWAR [5] in defining a squad(roster)-based replacement level. We use the Indian Premier League (IPL) to illustrate the approach. IPL teams have a minimum of 18 players and a maximum of 25 players on their squad. On average, teams have played 19 distinct players each season over the last decade. We looked at the number of distinct batters and bowlers and how many matches they played. Considering these stats, we decided to take eight batters and eight bowlers as league-level players. We take the top 8𝑁 batters and 8𝑁 bowlers in regards to the playing time to be the league-level players, and the remaining players would be considered replacement-level players, where 𝑁 is the number of teams.


All the replacement level players are pooled together, and their average performance is labeled as 𝑎𝑣𝑔.𝑅𝐴𝐴𝑟𝑒𝑝, which represents RAA per ball for a replacement-level player. For every actual player, we can associate a replacement-level shadow player with 𝑅𝐴𝐴𝑟𝑒𝑝 by taking the 𝑎𝑣𝑔.𝑅𝐴𝐴𝑟𝑒𝑝 and multiplying it by the number of balls played by the actual player. This replacement-level shadow player 𝑅𝐴𝐴𝑟𝑒𝑝 provides a relevant baseline for comparison, specific to the player being considered.


Value over replacement player (VORP) is evaluated as 


where 𝑅𝐴𝐴𝑋 is the total 𝑅𝐴𝐴 for player 𝑋 in a season, 𝑎𝑣𝑔.𝑅𝐴𝐴𝑟𝑒𝑝 is the average 𝑅𝐴𝐴 of all the replacement level players as defined in [1], and the 𝐵𝑋 is the number of balls player 𝑋 played in (batted plus bowled).

### **2.4 Wins above Replacement** 

Wins above replacement (WAR) is evaluated as 𝑊𝐴𝑅𝑋 =<sup>𝑉𝑂𝑅𝑃𝑋where𝑅𝑃𝑊istherunsperwinfor</sup> 𝑅𝑃𝑊<sup>,</sup> the league. Following the approach taken by [5], we use linear regression to estimate RPW by fitting the following model 


where 𝑊𝑖 is the team 𝑖<sup>′</sup> 𝑠 win total in a regular season and Run Diff𝑖 is the run differential for team i in that regular season. The estimate 𝛽 represents the increase in win total for each one unit increase in run differential of the team, meaning RPW can be estimated by 1/̂𝛽. After fitting the model, we got 𝑅𝑃𝑊≈ <u>1</u><sup>84.5.Wedidfitanothermodelwithseasonastheadditionalcovariate,buttheeffect</sup> 0.011839<sup>=</sup> of season was insignificant with same 𝛽 estimate.


We also followed approach laid out in [1] to estimate RPW using the Pythagorean win expectation formula and the results were similar to run differential approach.

6 

## **3 Uncertainty Estimation**"

So page 6 contains VoRP formula, WAR formula, RPW regression, then Section 3 start.

Then: "Consider a player with fixed ability and repeat the same season for that player many times. In each of these (repeated) seasons, the player’s playing events would have variation in their outcome, leading to different season-level RAA and WAR values. We target this player outcome variability in our uncertainty estimates for RAA and WAR values.


Following the approach in [1], we use a resampling strategy to generate distributions for each player’s RAA and WAR values. For a particular season, we resample (with replacement) individual balls, fit the regression model for adjusting run values, and use the adjusted run values for new RAA and WAR values for individual players. In Section 4, we present the uncertainty estimates with 1000 simulated seasons. The resampling approach quantifies the player outcome variability while maintaining the inherent correlation between the individual events.


Figure 1: cricWAR RAA values for 2019 Indian Premier League (IPL) regular season. The season had 161 players play, and 46 were classified as replacement-level. Blue and red dots represent league-level and replacement-level players, respectively. Playing time for a player is evaluated as the number of balls faced by that player as a batter plus the number of balls bowled by that player as a bowler. The gray dots represent the replacement level shadow for each player. We highlight the difference between the player’s RAA and the RAA for their replacement-level shadow for three players.

## **4 Results** 

We present the results for the Indian Premier League (IPL) 2019 regular season. For expected runs estimation, we use the data from IPL seasons 2015 through 2022 except 2020, which was played outside India. cricWAR results for multiple seasons are available in the shiny app https://dazzalytics.shinyapps. io/cricwar/. For the 2019 IPL season, 46 players are classified as replacement-level from the 161 players."

Then Table 1 and discussion, ending with "...top 3 cricWAR point estimate among all players, which suggests that the Archer provides relatively consistent performance on a ball-by-ball basis compared to other players.

Sports fans and media are always interested in comparing players and discussing if one player is better than the other. In particular, these discussions arise for awards such as MVPs (Mike Trout Vs. Miguel Cabrera[1]) etc. cricWAR point estimates along with the WAR interval estimates (Table 2) from simulated seasons allow for more refined analysis. Figure 3 the joint distributions of simulated WAR for a pair of bowlers and allrounders from the 2019 IPL season. AD Russell leads HH Pandya in WAR for almost 81% of the simulated seasons for allrounders. And AD Russell had a cricWAR point estimate of 2.3 compared to 1.7 of HH Pandya. Thus, we can say with some confidence that there is a high probability that AD Russell had a better season than HH Pandya. Bowlers, Bumrah, and Archer, had cricWAR point estimates of 2.1 and 2, respectively. From simulated seasons, we have Bumrah leading Archer in 58.1% of the seasons. Now, 

7 

here we have a situation where there is a significant overlap in the interval estimates, and point estimates have a slight difference. Hence, there is enough uncertainty suggesting not to make a conclusive statement about Bumrah being better than Archer.


Figure 2: WAR simulation distributions..."

Wait, the page break "7" appears in the middle of the paragraph about Bumrah vs Archer. Then page 7 continues with "...here we have a situation..." then Figure 2 caption, then Table 2 start.

Actually looking at the text: after "58.1% of the seasons. Now," then "7" then "here we have a situation..." So page 7 contains the continuation of that paragraph, Figure 2 caption, Table 2 start (rows for Russell, Pandya, Narine, Warner, Gayle, Rashid, Ashwin, Bumrah, Pant).

Then page 8: Table 2 continued (JC Archer row), then 4.1 Metric Stability, Table 3, Table 4.

Then page 9: Section 5 Summary, Further Discussion (fielding data limitation, second innings chase).

Then page 10: 5.1 Considerations for Teams, References.

I will cite [PAGE N] accordingly.

Now, I need to write the response. Since there are no actual equations visible in the markdown (they seem to be missing images or LaTeX that didn't render), I must reconstruct formal LaTeX equations based on the verbal descriptions in the text. The invariant says "ZERO TOY EQUATIONS: Never invent fake ratios... State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes."

So I need to formalize the cricWAR model mathematically based on the text:

1. Expected runs: θ(o,w) = E[r | state = (o,w)] estimated as empirical average.
2. Run value: δ_i = r_i - θ(o_i, w_i) (or similar). Actually the text says "difference between expected and actual runs scored on each ball". So δ_i = r_i - θ(o_i,w_i). The batter gets +δ, bowler gets -δ.
3. Leverage Index: LI(o,w) = θ(o,w) / θ_bar, where θ_bar is weighted average of θ over all states.
4. Leveraged run value: δ_i^lev = δ_i / LI(o_i, w_i).
5. Batting adjustment regression: δ_i^lev = β_0 + β_venue + β_innings + β_platoon + β_pace + ε_i. Residuals are adjusted batting leveraged run values.
6. Bowling adjustment: -(δ_i + ω_i)^lev adjusted similarly, residuals are adjusted bowling leveraged run values.
7. RAA: RAA_i^bat = ε_i (residual for batting), RAA_i^bowl = η_i (residual for bowling). Total RAA_X = Σ over balls.
8. Replacement level: top 8N batters and 8N bowlers by playing time are league-level; rest are replacement-level. avg.RAA_rep = mean RAA per ball of replacement players. Shadow player RAA_rep = avg.RAA_rep * B_X.
9. VORP_X = RAA_X - avg.RAA_rep * B_X.
10. RPW: regression W_i = α + β * RunDiff_i + ε. RPW = 1/β̂. They got RPW ≈ 84.5 (since β̂ ≈ 0.011839, 1/0.011839 ≈ 84.47). Wait, the text says "RPW ≈ 1/84.5... = 0.011839" which is garbled. It says "we got RPW≈ 1/84.5... 0.011839 =". Actually 1/84.5 ≈ 0.011834. So β̂ ≈ 0.011839, meaning RPW = 1/0.011839 ≈ 84.47 runs per win. I should state this clearly.
11. WAR_X = VORP_X / RPW.
12. Uncertainty: resample balls with replacement, refit regression, recompute RAA/WAR, 1000 simulated seasons.
13. Tables: Table 1 (RAA top/bottom), Table 2 (WAR quantiles), Table 3 (autocorrelation), Table 4 (correlations with SR and BP).

I need to ensure >=1000 words total across sections. Each section should be substantive.

Let's plan word counts:
- THINK_TRACE: >=400 words. I'll aim for ~500.
- SOURCE_OPERATORS_AND_EQUATIONS: ~300-400 words.
- RETROCAUSAL_GENEALOGY: ~200 words.
- RECURSIVE_THEORY_OF_MIND: ~200 words.
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words.
- RLVR_COUNTERFACTUAL_VETOES: ~200 words.
Total should be >1000 easily.

No betting lines anywhere.

Let me draft each section carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
- Discuss the derivation from ball-by-ball to expected runs θ(o,w), then run value δ, then leverage adjustment, then covariate regression residuals as RAA, then VORP vs replacement pool, then WAR via RPW.
- Gray zones: missing fielding data (page 9), second innings chase dynamics not fully modeled (page 9), replacement level definition arbitrary top 8N (page 5), LI weighting unspecified (page 3), empirical expected runs sparse in late-over/low-wicket states (page 2), resampling assumes exchangeability of balls within season (page 6), RPW estimated from team run differential but cricket has tied games/Super Overs? Not mentioned. The text says RPW ≈ 84.5 runs per win which is huge compared to baseball (~10 runs/win), reflecting cricket's high scoring variance? Actually in T20, run differential per game is small, so RPW being 84.5 means a lot of runs per win across a season. Wait, if β̂ ≈ 0.011839 wins per run, then 1 run differential = 0.0118 wins, so ~84.5 runs = 1 win. That seems high but plausible over a season if teams play 14 games and run differentials are small. Actually IPL 2019 had 56 league matches, 8 teams, 14 matches each. Team run differential might range from -100 to +100. So 84 runs per win makes sense.
- Breakdown regimes: θ(o,w) undefined for states never observed (singularity), e.g., over 20 with 0 wickets in T20 doesn't exist; over 1 with 10 wickets impossible. Also small sample bias in early/late states.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Define state space S = {(o,w): o ∈ {1,...,20}, w ∈ {0,...,9}} with constraints.
- θ(o,w) = (1/N_{o,w}) Σ_{i: state_i=(o,w)} r_i.
- δ_i = r_i - θ(o_i,w_i). Units: runs.
- LI(o,w) = θ(o,w) / [Σ_{o,w} n_{o,w} θ(o,w) / Σ n_{o,w}]. Dimensionless.
- δ_i^lev = δ_i / LI(o_i,w_i). Units: runs.
- Batting: δ_i^lev = X_i β + ε_i, X_i categorical [venue, innings, platoon, pace]. RAA_i^bat = ε̂_i.
- Bowling: -(δ_i + ω_i)^lev = X_i γ + η_i. RAA_i^bowl = η̂_i.
- RAA_X = Σ_{i∈balls(X)} RAA_i.
- Replacement pool: R = {players not in top 8N by balls}. avg.RAA_rep = (1/|R|) Σ_{j∈R} RAA_j / B_j? Wait text says "average RAA of all replacement level players... RAA per ball". Actually it says avg.RAA_rep represents RAA per ball. Then shadow = avg.RAA_rep * B_X. So VORP_X = RAA_X - avg.RAA_rep * B_X.
- WAR_X = VORP_X / RPW.
- RPW: W_i = α + β·RunDiff_i + ε_i. RPW = 1/β̂ ≈ 84.5 runs/win (β̂ ≈ 0.011839 wins/run).
- Uncertainty: bootstrap balls with replacement B=1000, compute quantiles q_{0.025}, q_{0.975}, width.
- Cite pages for each.

RETROCAUSAL_GENEALOGY: Historical lineage.
- Sabermetrics [1] openWAR (Baumer et al. 2015), nflWAR [5] (Yurko et al. 2019), Leverage Index [4] Tango 2006, previous cricket work [3] Ganjoo 2020 ESPNcricinfo.
- Multi-week traps: stability autocorrelation Table 3 (0.36-0.48), meaning WAR is moderately persistent but not sticky; week-to-week noise high. Replacement-level shadow depends on roster construction (8N rule), which changes as squads rotate.
- IPL seasons 2015-2022 except 2020 used for expected runs (page 6). 2020 outside India (UAE) excluded due to venue effect.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit: teams/analysts revert to simple averages (batting avg, strike rate) under pressure (page 1).
- Counter-trap: cricWAR's context adjustment (LI, venue, platoon) attempts to escape context bias, but over-reliance on regression residuals assumes linear separability of context effects (page 4).
- Clock: 1000 simulated seasons (page 6); Table 2 shows allrounders have widest CI (Russell width 1.14), bowlers narrowest (Archer 0.67), meaning small-sample crisis (few balls) inflates variance; decision clock should wait for sufficient ball volume before trusting WAR point estimates.
- Russell vs Pandya: 81% simulation dominance but still overlap (page 7). Bumrah vs Archer: 58.1% but point estimates 2.1 vs 2.0, insufficient for conclusive ranking (page 7).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: no fielding tracking data (page 9); run conservation misallocates runs saved by fielding to bowlers/batters incorrectly. Veto if fielding contribution > threshold? Can't quantify from text but note structural veto.
- Biomechanical: bowling pace (spin vs pace) covariate (page 4); batter handedness vs bowler handedness platoon (page 4). No direct biomechanics (release speed, spin rate) in model.
- Weather: venue effect included but no explicit weather covariate (rain, dew in second innings). Second innings chase dynamics mentioned as limitation (page 9); required run rate not modeled, causing potential veto in dew-affected night games.
- Breakdown: LI assumes stationarity within state; power play fielding restrictions create discontinuity at over 6/7 (page 3), a boundary singularity where LI jumps due to rule change rather than scoring rate.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verified Rewards? Or just "verified vetoes"? I'll interpret as verifiable counterfactual veto scenarios that would invalidate model outputs.

Scenario 1: State sparsity singularity. If a T20 state (o,w) has N_{o,w} < 5 observations in training seasons 2015-2022 (excluding 2020), θ(o,w) has high variance. Veto: any ball in such a state should have its δ_i^lev shrunk toward global mean or excluded. Prediction: players batting primarily in death overs with few wickets lost (rare state) will show inflated RAA variance in bootstrap (CI width > 1.0 WAR) and unstable point estimates across resamples.

Scenario 2: Replacement-level pool contamination. If a franchise uses fewer than 18 distinct players or more than 25 (violating squad rules), the 8N threshold misclassifies players. Veto: if N_teams changes or squad size < 18, recompute replacement pool. Prediction: in seasons with expanded squads (e.g., due to COVID replacements), cricWAR RAA_rep shifts, causing systematic VORP bias > 5 runs for marginal players.

Scenario 3: Second-innings chase state dependency. If target requires run rate > current θ(o,w) trajectory, LI based on unconditional expected runs misprices leverage. Veto: in second innings when required run rate > 1.5 × current scoring rate, exclude or separately model. Prediction: batters in successful chases will have downward-biased RAA (because θ underestimates required aggression), while bowlers defending low totals will have upward-biased RAA.

I need to ensure no fake equations. All equations must be derived from text or clearly marked as formalization of text. I'll present them as formalizations of the paper's described methodology.

Word count check: I'll write generously to exceed 1000 words.

Citations: Use [PAGE N] exactly. I need to make sure I cite pages where info appears.

Let me assign page citations:
- Abstract: page 1.
- Intro simple averages: page 1.
- Virat Kohli WAR example: page 1.
- 1.1 T20 20 overs: page 1? Wait, 1.1 starts after page number "1". Let's check: after "1" then 1.1. Actually if "1" is the page number at bottom of page 1, then 1.1 is on page 2? No, in the markdown, the number appears before 1.1. Let me look again:

"...drop one game in the standings over a whole season if we were to replace him with a replacement-level player.

1 

Inspired by sabermetrics...

1 1 1 1

### **1.1 Limited Overs Cricket**"

Hmm, there is "1" then "Inspired by sabermetrics..." then "1 1 1 1"? Wait, looking at the raw text:

"> ∗University of Indianapolis, rafiqueh@uindy.edu 

1 

Inspired by sabermetrics, we are interested in estimating the value..."

Actually the footnote marker and "1" might be page number. Then later:

"### **1.1 Limited Overs Cricket** 

A cricket playing team consists of eleven players... twenty overs (120 balls) in each innings of a T20 game.

### **1.2 Previous Work** 

[3] shows a way... [3] lacks the uncertainty estimation for their proposed metrics.

### **1.3 Contributions of cricWAR** ... co-developed by us.

## **2 cricWAR Model** 

Our proposed measures RAA and WAR are based on the runs conservation framework... The first step is to establish the

2 

expected number of runs..."

So "1" appears after the intro paragraph and footnote. Then 1.1, 1.2, 1.3 follow on the same page? Or is "1" the page number for the page containing Abstract and Intro? Then 1.1-1.3 might be on page 2? But then "2" appears before "expected number of runs...". So page 2 ends with "establish the", then page 3 begins with "expected number of runs..."? That doesn't make sense because page numbers usually increment after a page break.

Let me reconsider. The numbers might be page numbers placed at the top or bottom. If "1" is at bottom of page 1, then everything after "1" up to "2" is page 2. But 1.1, 1.2, 1.3, Section 2 start appear before "2". That would mean page 2 contains 1.1 through Section 2 start. Then "2" marks bottom of page 2? Then page 3 starts with expected runs. Then page 3 contains expected runs through leverage index? Then "3" appears after leverage index discussion. Then page 4 starts with 2.1.2 Batting. Then "4" appears after bowling residuals. Then page 5 starts with 2.2 RAA. Then "5" appears after RAA formula. Then page 6 starts with VoRP. Then "6" appears after RPW discussion. Then page 7 starts with Section 3 Uncertainty. Then "7" appears in middle of Bumrah/Archer discussion? That seems odd.

Alternative interpretation: The numbers are page numbers at the *top* of each page. So "1" is top of page 1. Then content follows. Then "2" is top of page 2. But the text has "2" in the middle of a sentence: "The first step is to establish the

2 

expected number of runs..." That would mean page break in the middle of a sentence, which happens in PDFs. So page 2 starts with "expected number of runs...". Then everything until "3" is page 2? No, if "3" is top of page 3, then page 2 contains expected runs through leverage index. Then page 3 starts with 2.1.2 Batting? But "3" appears after leverage index paragraph and before "#### **2.1.2 Batting**". So page 3 starts with 2.1.2 Batting. That works!

Let's test this mapping:
- Page 1: Abstract, Section 1 Introduction up to "...replacement-level player." Then "1" is actually at bottom? No, if numbers are tops, then "1" is top of page 1. Then content until "2" is page 1? But 1.1 starts after "1". So if "1" is top of page 1, then page 1 contains footnote, then "Inspired by sabermetrics..." paragraph, then 1.1, 1.2, 1.3, Section 2 start. Then "2" top of page 2 starts with "expected number of runs...". But wait, "1" appears after the footnote line "> ∗University of Indianapolis...". That could be the page number at bottom. Hmm.

Actually, looking at standard PDF-to-markdown, page numbers often appear as standalone lines where they were in the PDF. They could be footers. Let's assume they are page numbers (footers) and content between two numbers belongs to the page numbered by the first number? No, if "1" is footer of page 1, then content after "1" is page 2. But then page 2 would contain 1.1, 1.2, etc. And "2" would be footer of page 2, appearing after Section 2 start "establish the". Then page 3 starts with "expected number of runs..." and ends with "3" footer after leverage index. Then page 4 starts with 2.1.2 Batting and ends with "4" after bowling residuals. Then page 5 starts with 2.2 RAA and ends with "5" after RAA formulas. Then page 6 starts with VoRP and ends with "6" after RPW. Then page 7 starts with Section 3 Uncertainty and Figure 1 and Section 4 Results start... wait, "7" appears in middle of Bumrah/Archer paragraph. So page 7 contains Section 3, Section 4 start, Table 1, discussion up to "Now," then footer "7". Then page 8 starts with "here we have a situation..." and contains Figure 2, Table 2 (part), then footer "8"? But "8" appears after Table 4. Then page 9 starts with Section 5 Summary and ends with "9" after Further Discussion? Actually "9" appears before Section 5? Let's check:

"...Table 4... 

9 

## **5 Summary and Further Discussion**"

So "9" is before Section 5. If numbers are footers, then page 9 contains 4.1 Metric Stability, Tables 3 & 4, then footer "9". Then page 10 starts with Section 5 Summary, Further Discussion, 5.1, References, then footer "10"? But there is a "10" at the very end after References. Yes! That matches perfectly.

So mapping:
- Page 1: Abstract, Section 1 Intro paragraphs (up to Virat Kohli example). Footer "1".
- Page 2: Section 1.1, 1.2, 1.3, Section 2 start through "establish the". Footer "2".
- Page 3: Expected runs, run value, conservation, 2.1, 2.1.1 Leverage Index through "...middle overs." Footer "3".
- Page 4: 2.1.2 Batting regression, 2.1.3 Bowling regression. Footer "4".
- Page 5: 2.2 RAA formulas, 2.3 VoRP start through replacement pool definition? Wait, "5" appears after RAA formula? Let's check: after RAA formula text "...indicator function." then "5" then "### **2.3 Value over Replacement Player**". So page 4 ends after bowling residuals? Then page 5 starts with 2.2 RAA. Let me re-examine:

Text: "...adjusted bowling leveraged run values.

4 

### **2.2 Runs Above Average** 

To the best of our knowledge... respectively.


𝑅𝐴𝐴... 

The runs above average for each ball... indicator function.


5 

### **2.3 Value over Replacement Player**"

So footer "4" is before 2.2. Footer "5" is before 2.3. Thus:
- Page 4 contains end of 2.1.3 and maybe start of 2.2? Actually if "4" is footer of page 4, then page 4 contains everything from after "3" up to "4". That includes 2.1.2 Batting, 2.1.3 Bowling. Then page 5 starts with 2.2 RAA and ends with footer "5" before 2.3? But "5" appears right before 2.3. So page 5 contains 2.2 RAA only? Then page 6 starts with 2.3 VoRP.

But wait, the text shows:
"...indicator function.


5 

### **2.3 Value over Replacement Player**"

So yes, page 5 ends with RAA formula and footer "5". Page 6 starts with VoRP.

Then: "...VORP is evaluated as 

where RAA_X ... 

### **2.4 Wins above Replacement** 

Wins above replacement... we got RPW≈ ... 0.011839 ... 

6 

## **3 Uncertainty Estimation**"

So page 6 contains VoRP, WAR, RPW, footer "6". Page 7 starts with Section 3 Uncertainty.

Then Section 3, Figure 1, Section 4 Results, Table 1, discussion up to "Now," then footer "7"? Actually:

"...Bumrah leading Archer in 58.1% of the seasons. Now, 

7 

here we have a situation where there is a significant overlap..."

So footer "7" is in middle of paragraph. Page 7 contains Section 3, Figure 1, Section 4 start, Table 1, discussion up to "Now,". Page 8 starts with "here we have a situation..." then Figure 2, Table 2 (part), then continues?

Text after "7": "...Bumrah being better than Archer.


Figure 2: ... 

Table 2: ...

|Player|Role|...|AD Russell|...|JJ Bumrah|...|RR Pant|...|

8 

|Player|Role|...|JC Archer|...|

### **4.1 Metric Stability and Scoring Fast** 

...

Table 3...

Table 4..."

Wait, Table 2 seems split across pages 7 and 8. The footer "8" appears after the first part of Table 2? Actually:

"...|RR Pant|Batter|0.61|...|2.03|0.71|


8 

|Player|Role|q2.5|...|JC Archer|Bowler|1.42|...|0.67|

### **4.1 Metric Stability and Scoring Fast** 

..."

So footer "8" is after the first block of Table 2 (rows through RR Pant) and before the continuation (JC Archer). Then page 9 starts with JC Archer row? No, if "8" is footer of page 8, then page 8 contains page 7 continuation ("here we have..."), Figure 2, Table 2 start, footer "8". Then page 9 starts with JC Archer row, 4.1, Table 3, Table 4, then footer "9"? Let's check:

Text: "...Table 4...

9 

## **5 Summary and Further Discussion**"

Yes. So page 9 contains JC Archer row, 4.1, Tables 3 & 4, footer "9".

Page 10 starts with Section 5 Summary, Further Discussion, 5.1, References, footer "10".

This mapping is consistent. I'll cite accordingly.

So citations:
- Page 1: Abstract, Intro, simple averages, Kohli example.
- Page 2: 1.1 T20 structure, 1.2 previous work, 1.3 contributions, Section 2 intro.
- Page 3: Expected runs θ(o,w), run value δ, conservation framework, 2.1 Leverage Index definition.
- Page 4: 2.1.2 Batting regression Eq 1, 2.1.3 Bowling regression Eq 2.
- Page 5: 2.2 RAA formulas (η̂_i, ε̂_i), 2.3 VoRP intro, replacement level definition top 8N.
- Page 6: VoRP formula, WAR formula, RPW regression, β̂ ≈ 0.011839, RPW ≈ 84.5.
- Page 7: Section 3 uncertainty/resampling, Figure 1, Section 4 Results start, IPL 2019 161 players/46 replacement, Table 1, discussion of Russell/Pandya/Bumrah/Archer up to "Now,".
- Page 8: Continuation of Bumrah/Archer discussion ("here we have..."), Figure 2 caption, Table 2 first block (Russell through Pant).
- Page 9: Table 2 continuation (JC Archer), 4.1 Metric Stability, Table 3 autocorrelation, Table 4 correlations SR/BP.
- Page 10: Section 5 Summary, fielding data limitation, second innings chase limitation, 5.1 team considerations/draft, References.

This is good.

Now I need to write the actual response. I'll make sure to use formal LaTeX and not invent fake ratios. I'll cite pages extensively.

Let's draft.

THINK_TRACE (>=400 words):
I will discuss the multi-hop derivation:
1. State space: (o,w) ∈ {1..20} × {0..9}, constrained.
2. θ(o,w) empirical mean.
3. δ_i = r_i - θ(o_i,w_i).
4. LI(o,w) = θ(o,w)/θ̄.
5. δ^lev_i = δ_i / LI.
6. Regression residuals as RAA.
7. Replacement pool top 8N vs rest.
8. VORP = RAA_X - avg.RAA_rep * B_X.
9. WAR = VORP / RPW, RPW = 1/β̂ from W ~ RunDiff.
10. Bootstrap uncertainty.

Gray-zone audit:
- Missing fielding data [PAGE 9, PAGE 4].
- Second innings required run rate ignored [PAGE 9].
- State sparsity/singularity: rare (o,w) cells [PAGE 2, PAGE 3].
- LI weighting scheme unspecified [PAGE 3].
- Replacement threshold 8N is ad hoc [PAGE 5].
- Resampling assumes ball exchangeability within season [PAGE 6].
- RPW ≈ 84.5 runs/win is extreme vs other sports; implies low signal-to-noise in team win totals [PAGE 6].
- Autocorrelation 0.36-0.48 means WAR is noisy year-to-year [PAGE 9].

I'll write ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal LaTeX block with definitions, units, assumptions, breakdown. Cite pages for each component.

RETROCAUSAL_GENEALOGY:
Lineage: sabermetrics → openWAR [1] → nflWAR [5] → cricWAR. Leverage Index Tango [4]. Ganjoo [3] previous cricket WAA. Multi-week traps: stability table [PAGE 9], replacement pool drift [PAGE 5], 2020 UAE exclusion [PAGE 6].

RECURSIVE_THEORY_OF_MIND:
Crisis habit: simple averages under pressure [PAGE 1]. Counter-trap: context regression assumes linear additivity [PAGE 4]. Clock: bootstrap 1000 seasons [PAGE 6], CI widths Table 2 [PAGES 7-8], Russell 81% vs Bumrah 58.1% [PAGE 7].

CROSS_LAYER_VETO_ADJUDICATION:
Physical: fielding absent [PAGE 9, PAGE 4]. Biomechanical: pace/spin and platoon are categorical proxies only [PAGE 4]. Weather: venue effect but no dew/rain [PAGE 4, PAGE 9]. Breakdown: LI discontinuity at over 6/7 power play boundary [PAGE 3].

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios + predictions. Formal and verifiable.

I need to ensure total words > 1000. Let's write.

I will not mention any betting terms. No spreads, odds, moneylines, totals.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The cricWAR framework derives player value through a causal chain that begins at the ball level and ends at seasonal wins. First, the state of a T20 innings is defined by the pair (o, w), where o ∈ {1, …, 20} is the over and w ∈ {0, …, 9} is wickets lost [PAGE 2]. The expected runs θ(o, w) are estimated as the empirical average of actual runs scored whenever the game occupied state (o, w) [PAGE 3]. On each ball i, the raw run value δ_i is the deviation of actual runs r_i from that conditional expectation: δ_i = r_i − θ(o_i, w_i), measured in runs [PAGE 3]. Under the runs conservation framework, the batter is credited +δ_i and the bowler −δ_i, with extras ω_i (wides, no-balls) assigned entirely to the bowler [PAGE 3, PAGE 4].

Because scoring propensities are not stationary across the innings, a Leverage Index LI(o, w) = θ(o, w) / θ̄ rescales each state by the season-wide weighted average expected run rate θ̄ [PAGE 3]. The leveraged run value δ^lev_i = δ_i / LI(o_i, w_i) therefore expresses performance in units of average-leverage runs [PAGE 3]. Contextual confounders—venue, innings (first vs. second), platoon advantage (handedness match-up), and bowling pace (spin vs. pace)—are removed via ordinary least squares on categorical covariates [PAGE 4]. For batting, δ^lev_i = X_iβ + ε_i, and the residual ε̂_i becomes the adjusted batting run value RAA^bat_i [PAGE 4, PAGE 5]. For bowling, −(δ_i + ω_i)^lev_i = X_iγ + η_i, and η̂_i becomes RAA^bowl_i [PAGE 4]. Seasonal RAA_X sums these residuals over all balls faced or bowled by player X [PAGE 5].

The replacement-level construction departs from a league-average baseline. Following openWAR and nflWAR logic, the top 8N batters and 8N bowlers by playing time (where N is the number of IPL teams) form the league-level set; all remaining players are pooled as replacement-level [PAGE 5]. The replacement shadow for player X is avg_RAA_rep × B_X, where B_X is balls played, and VORP_X = RAA_X − avg_RAA_rep × B_X [PAGE 5, PAGE 6]. Wins are obtained by dividing VORP by runs-per-win RPW, estimated from a team-level regression W_i = α + β·RunDiff_i + ε_i, yielding RPW = 1/β̂ ≈ 84.5 runs per win (β̂ ≈ 0.011839 wins per run) [PAGE 6]. Uncertainty is propagated by resampling balls with replacement, refitting the context regression, and recomputing RAA and WAR across 1,000 simulated seasons [PAGE 6, PAGE 7].

Gray-zone audit: (1) Fielding tracking data are unavailable, so run conservation misattributes fielding saves and misfields to batters and bowlers [PAGE 9]. (2) Second-innings chase dynamics—required run rate and target pressure—are not modeled, despite being flagged as a limitation [PAGE 9]. (3) The LI weighting θ̄ is never explicitly defined, creating an unspecified normalization [PAGE 3]. (4) The 8N replacement cutoff is ad hoc and sensitive to squad rotation [PAGE 5]. (5) θ(o, w) is undefined or high-variance for rarely visited states, such as late-over/low-wicket combinations, producing a singularity in expected runs [PAGE 2, PAGE 3]. (6) Resampling treats balls as exchangeable within a season, ignoring opponent quality and match-state autocorrelation [PAGE 6]. (7) WAR year-to-year autocorrelation is only 0.36–0.48, indicating substantial noise [PAGE 9]. These regimes define where cricWAR point estimates should be vetoed or heavily shrunk.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the state space be S = {(o, w) : o ∈ {1,…,20}, w ∈ {0,…,9}, o·w feasible} with physical constraints that preclude, for example, w = 10 before the final ball and o > 20 in a T20 innings [PAGE 2, PAGE 3].

Expected runs operator:
θ(o, w) = E[r | state = (o, w)] ≈ (1 / N_{o,w}) Σ_{i: (o_i,w_i)=(o,w)} r_i,
units: runs per ball; N_{o,w} is the count of historical balls in state (o, w) from IPL 2015–2022 excluding 2020 [PAGE 3, PAGE 6].

Raw run value operator:
δ_i = r_i − θ(o_i, w_i), units: runs. Batter credit +δ_i; bowler credit −δ_i [PAGE 3].

Leverage Index operator:
LI(o, w) = θ(o, w) / θ̄, θ̄ = (Σ_{o,w} n_{o,w} θ(o, w)) / (Σ_{o,w} n_{o,w}), dimensionless; LI = 1 is average scoring leverage, LI ≫ 1 high-scoring, LI ≪ 1 low-scoring [PAGE 3].

Leveraged run value:
δ^lev_i = δ_i / LI(o_i, w_i), units: average-leverage runs [PAGE 3].

Batting adjustment regression [PAGE 4, PAGE 5]:
δ^lev_i = β_0 + β_venue(v_i) + β_innings(inning_i) + β_platoon(handedness_i) + β_pace(pace_i) + ε_i,
where all covariates are categorical and estimated by OLS over the season. Adjusted batting run value: RAA^bat_i = ε̂_i.

Bowling adjustment regression [PAGE 4]:
−(δ_i + ω_i)^lev_i = γ_0 + γ_venue(v_i) + γ_innings(inning_i) + γ_platoon(handedness_i) + γ_pace(pace_i) + η_i.
Adjusted bowling run value: RAA^bowl_i = η̂_i.

Seasonal aggregation:
RAA_X = Σ_{i ∈ balls(X)} RAA_i, units: runs [PAGE 5].

Replacement pool operator [PAGE 5]:
Let N be the number of IPL teams. League-level set L = top 8N batters and 8N bowlers by balls played. Replacement set R = all other players.
avg_RAA_rep = (1 / |R|) Σ_{j ∈ R} (RAA_j / B_j), units: runs per ball.
Shadow replacement value for player X: S_X = avg_RAA_rep × B_X.

VORP operator:
VORP_X = RAA_X − S_X = RAA_X − avg_RAA_rep × B_X, units: runs [PAGE 5, PAGE 6].

Wins operator:
RPW = 1 / β̂, where W_i = α + β·RunDiff_i + ε_i is fit at the team-season level; β̂ ≈ 0.011839 wins/run, hence RPW ≈ 84.5 runs/win [PAGE 6].
WAR_X = VORP_X / RPW, units: wins [PAGE 6].

Uncertainty operator [PAGE 6, PAGE 7]:
Draw B = 1,000 bootstrap seasons by resampling balls with replacement; refit Equations for θ, LI, and context regression; recompute RAA^{(b)}_X and WAR^{(b)}_X. Report quantiles q_{0.025}, q_{0.50}, q_{0.975} and confidence-interval width q_{0.975} − q_{0.025}.

Breakdown / singularity regimes: θ(o, w) is unstable when N_{o,w} < 5 (rare states such as over 19 with 0 wickets or over 1 with 4 wickets); LI(o, w) is undefined if θ̄ = 0; RPW diverges if β̂ → 0 (no relationship between run differential and wins). The paper reports median WAR 0.18, mean 0.36, standard deviation 0.51 for IPL 2019, with replacement-level WAR approximately normal, mean 0, median −0.075, s.d. 0.12 [PAGE 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
cricWAR descends directly from the sabermetric WAR tradition: openWAR [1] for baseball and nflWAR [5] for football provide the conceptual template of replacement-level baselines and runs-per-win conversion, while the run-value-per-play machinery echoes expected-points frameworks in football and basketball [PAGE 1, PAGE 5]. The Leverage Index component is imported from Tom Tango’s baseball “Crucial Situations” work [4], adapted to cricket’s over-and-wickets state space rather than base-out states [PAGE 3]. The most immediate cricket antecedent is Ganjoo’s ESPNcricinfo WAA estimate [3], which cricWAR critiques for oversimplifying innings phases (power play vs. death), ignoring innings number, bowling pace, and platoon advantage, using a questionable second-innings continuation target, and lacking uncertainty estimation [PAGE 2].

Historical lineage reveals recurring multi-week traps. First, the replacement-level definition (top 8N batters/bowlers) is roster-contingent; as IPL squads rotate between 18 and 25 players and franchises deploy varying numbers of distinct players per season, the replacement boundary shifts, inducing non-comparability of VORP across years [PAGE 5]. Second, expected runs θ(o, w) are trained on IPL 2015–2022 except 2020, which was played outside India (UAE) and therefore excluded for venue homogeneity; this creates a temporal domain shift if pitch or boundary conditions evolve [PAGE 6]. Third, WAR autocorrelation is only moderate—0.425, 0.362, 0.479, 0.453, 0.428 across consecutive season pairs—meaning a player’s WAR in week N is only weakly predictive of week N+4; teams that overweight a single hot month risk regression-to-the-mean errors [PAGE 9]. Fourth, batting RAA correlates strongly with strike rate and boundary percentage (0.84–0.90 across years), so cricWAR partly re-packages fast-scoring bias rather than fully escaping it [PAGE 9]. The genealogical trap is therefore not the absence of sophistication, but the re-introduction of context bias through the very adjustment variables (venue, pace, platoon) meant to remove it.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under pressure, analysts and franchises revert to simple averages—batting average, bowling average, strike rate—because they are legible and require no modeling assumptions [PAGE 1]. cricWAR positions itself as the counter-trap by replacing raw averages with situation-adjusted run values. However, the counter-trap contains its own regression: the OLS adjustment assumes that venue, innings, platoon, and pace effects enter linearly and additively on leveraged run values [PAGE 4]. If, in reality, spin bowlers exploit right-handed batters differently in the power play versus death overs, the additive model mis-specifies the interaction and re-imposes context bias under the guise of adjustment.

Recursive theory-of-mind layer: a team using cricWAR for drafting must anticipate that rival teams are also using WAR-like metrics, inflating the market price of high-WAR allrounders such as AD Russell (point estimate 2.3 WAR) and depressing the price of replacement-level shadows [PAGE 7]. The clock is the 1,000-season simulation horizon: Table 2 shows AD Russell’s 95% CI width is 1.14 wins, whereas JC Archer’s is 0.67, because allrounders accumulate variance through both batting and bowling while bowlers have narrower outcome distributions [PAGES 7–8]. Therefore, early-season decisions (clock < 10 matches) should trust bowler WAR more than allrounder WAR; late-season decisions can widen the interval. 

Counter-trap calibration: AD Russell leads HH Pandya in 81% of simulated seasons despite a point-estimate gap of only 0.6 WAR (2.3 vs 1.7), supporting a probabilistic preference for Russell [PAGE 7]. By contrast, JJ Bumrah (2.1) leads JC Archer (2.0) in only 58.1% of simulations, with substantial interval overlap, so a conclusive ranking is unwarranted [PAGE 7]. The recursive lesson is to treat point estimates as ranking suggestions only when simulation dominance exceeds ~75%, and to default to the narrower-confidence player (Archer) when robustness matters more than marginal expectation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: fielding tracking data are not publicly available, so cricWAR credits all run conservation to batters and bowlers [PAGE 9, PAGE 4]. A misfield that saves two runs is absorbed into the bowler’s −δ, and a sharp throw that effects a run-out is unmodeled. Veto condition: if a match’s outcome is decided by run-outs or boundary saves in excess of ±5 runs, cricWAR RAA for the involved players is physically invalid and must be adjusted manually or excluded.

Biomechanical layer: the model includes bowling pace (spin vs. pace) and platoon advantage (handedness match-up) as categorical covariates, but contains no release-speed, spin-rate, or batter-footwork variables [PAGE 4]. A wrist-spinner with high revolutions against left-handers is treated identically to a finger-spinner with low revolutions, inducing biomechanical aggregation bias. Veto condition: for players whose primary skill is spin variation or seam movement rather than pace category, cricWAR bowling RAA should be vetoed absent biomechanical covariates.

Weather layer: venue is included as a fixed effect, but no explicit weather or dew covariate exists [PAGE 4]. The paper itself acknowledges that second-innings chasing under dew alters required run rate and innings flow, yet this is left to future research [PAGE 9]. In UAE 2020 (excluded from training) and Indian night matches, dew can suppress scoring in the second innings independent of player skill. Veto condition: in second-innings night games with dew probability > 0.5, cricWAR batting RAA for chasers and bowling RAA for defenders are weather-confounded and should be down-weighted.

Breakdown singularity: the Leverage Index assumes smooth scoring-rate variation across (o, w), but fielding restrictions change discretely at the end of the power play (over 6) [PAGE 3]. LI(o, w) therefore exhibits a boundary discontinuity at o = 6 → 7 that reflects rule changes, not scoring physics. Any regression using LI across this boundary is misspecified unless the power play is modeled as a separate regime.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — State-space sparsity singularity: If a T20 state (o, w) has fewer than five observations in the training IPL seasons 2015–2022 (excluding 2020), θ(o, w) has unbounded variance. Veto rule: balls occurring in states with N_{o,w} < 5 must have δ^lev_i shrunk to the global mean or excluded before RAA computation. Prediction: batters who frequently operate in rare states (e.g., over 19 with 0 wickets) will exhibit bootstrap WAR confidence-interval widths exceeding 1.0 win and point estimates that flip sign across resamples, whereas death-over specialists in common states (over 19, 4+ wickets) will remain stable.

Scenario 2 — Replacement-pool contamination: The replacement definition relies on exactly 8N league-level batters and 8N bowlers [PAGE 5]. If a season features expanded squads (e.g., injury replacements) such that distinct player count exceeds 25 per team or fewer than 18, the 8N threshold misclassifies fringe players. Veto rule: whenever the league-wide distinct-player count deviates by more than 10% from the 19-player average, recompute avg_RAA_rep using the actual roster cutoff. Prediction: VORP for marginal players will shift by more than 5 runs relative to league average, causing false positives in draft valuation for players near the 8N boundary.

Scenario 3 — Second-innings chase leverage mismatch: LI is computed unconditionally on historical expected runs, ignoring required run rate in chases [PAGE 9]. If a second-innings batting state requires a run rate 1.5× above the historical θ(o, w), cricWAR under-prices aggression. Veto rule: in second-innings chases where required run rate > 1.5 × θ(o, w), recompute leverage using a chase-conditioned expected-run surface or exclude those balls from RAA. Prediction: successful chasers will show downward-biased batting RAA (their aggressive scoring appears “above expectation” only relative to a baseline that itself assumed slower scoring), while defenders of low totals will show upward-biased bowling RAA; model agreement with actual match outcomes will degrade specifically in close chases decided in the final over.
</RLVR_COUNTERFACTUAL_VETOES>