---
source: "2026 - Dummy RAPM Representing Low-Minute Players in Regularized Adjusted Plus-Minus - Watts et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4260
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about Dummy RAPM in basketball analytics. They've provided the full source text with page markers implicitly through the structure.

Key constraints:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words)</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully cite page numbers. Looking at the text, there are page markers like "1", "2", "3", etc. at the bottom of sections. Let me map content to pages:

Page 1: Title, abstract, beginning of Introduction up to "...modeling changes in win probability using Bayesian linear regression."
Page 2: Continuation of Introduction ("Some RAPM implementations..."), Section 2 Model, 2.1 Stint response and player design, equation for qi, yi, filtered RAPM argmin.
Page 3: Section 2.2 Lineup-side count indicators, definition of dH,i, dA,i, augmented model argmin, relative penalty rho.
Page 4: Section 3 Data Construction, Table 1, Section 4 Selection and Evaluation, initial grid {0,5,...}, threshold 10, rho grid {1.0,...,2.5}, rho=2.2.
Page 5: Game margin prediction formula, season RMSE formula, Roos,s formula, paired t-test discussion.
Page 6: Figure 1 caption, Section 5 Results, 5.1 Held-out prediction, Table 2, RMSE reduction 12.897 to 12.856, 0.042 points, 0.30%, 13/16 seasons, confidence interval 0.013-0.070, t(15)=3.138 p=0.0068, Wilcoxon W=120.0 p=0.0077, sign test p=0.0213, secondary sensitivity.
Page 7: 5.2 Filtering and representation, unfiltered benchmark, 5.3 Dummy coefficients, Table 3 exposure table start.
Page 8: Table 3 continued? Table 4 dummy coefficients, Figure 3 discussion.
Page 9: Section 6 Discussion, why modest modification improves prediction, selected ratio rho=2.2, remaining weaknesses.
Page 10: Section 7 Conclusion, Reproducibility, Acknowledgments, References.

Wait, let me recount based on the text flow. The text has page breaks indicated by numbers centered. Let me trace carefully:

- Page 1: Title block, Abstract, 1 Introduction up to "Fearnhead and Taylor (2011)... Deshpande and Jensen (2016)..." then "Some RAPM implementations..." ends page 1? Actually looking at the text, after Abstract there's page "1" then Introduction starts. Wait the structure shows:

Page "1" marker appears after title/abstract? Let me look:
"                                                                                       1"
Then "1 Introduction..." 
Then after some text... "                                                                                            1" again? No.

Actually looking carefully:
- Title page / Abstract at top
- Then page number "1" centered
- "1 Introduction..." text
- Then page number "1" again? No, the text shows:

"                                                                                            1"

Then "1 Introduction..."

Then later: "                                                                                            1" -- wait no, I see:
After the abstract block, there's "                                                                                            1" then "1 Introduction..."

Then after first paragraph of intro, there's "                                                                                            1" again? No.

Let me just map based on the visible page numbers in the text:

Text shows:
- Abstract page (no number visible, or it's the title page)
- "                                                                                            1" 
- "1 Introduction..." 
- Then "                                                                                            1" appears again? Actually I see "                                                                                            1" right before "1 Introduction" and then later "                                                                                            2" before section 2.1.

Let me trace:
Page 1: Title, Abstract, Introduction start through "Deshpande and Jensen (2016) modeled changes in win probability using Bayesian linear regression."
Page 2: "Some RAPM implementations remove low-minute players..." through end of 2.1 with the argmin equation for filtered RAPM.
Page 3: 2.2 Lineup-side count indicators, definitions, augmented model argmin, rho discussion.
Page 4: Section 3 Data Construction, Table 1, Section 4 Selection and Evaluation through grid discussion.
Page 5: Game margin conversion, season RMSE, Roos formula, paired t-test, Figure 1 caption.
Page 6: Section 5 Results, Table 2, text about RMSE reduction, stats tests, sensitivity analyses, Figure 2 caption.
Page 7: 5.2 Filtering and representation, 5.3 Dummy coefficients, Table 3 start.
Page 8: Table 3 continued? Table 4 coefficients, Figure 3 discussion.
Page 9: Section 6 Discussion through end.
Page 10: Section 7 Conclusion, Reproducibility, References.

Wait, looking at the text more carefully, after Table 3 and Table 4 there's page "8" then "Figure 3..." then "6 Discussion..." then page "9" then "7 Conclusion..." then page "10".

Actually:
- Page 7 contains Table 3 header and start.
- Page 8 contains Table 4 and Figure 3 reference, then Section 6 Discussion.
- Page 9 contains rest of Discussion and Section 7 Conclusion? Let me check: "                                                9" then "7 Conclusion" appears after page 9 marker? The text shows:
                                                                                       9
                                                                                     7 Conclusion
So page 9 has end of discussion and conclusion?
Then page 10 has Reproducibility and References.

Actually the text says:
"                                                9

                                                                 7 Conclusion
When low-minute players are filtered out..."

Then later "                                                10
Reproducibility"

So:
Page 9: Section 7 Conclusion start?
Page 10: Reproducibility, Acknowledgments, References.

But Section 6 Discussion is before page 9 marker. Let me look: after Figure 3 discussion on page 8:
"                                                8

                                                      Figure 3: Mean selected home and away dummy coefficients with 95% cross-season t intervals. Away coefficients retain the home-margin orientation.


                                                      6 Discussion
Why does this modest modification improve prediction so consistently? ..."

Then continues discussion...
"                                                9"

So page 8 has Table 4, Figure 3 caption, Section 6 Discussion start.
Page 9 has rest of Discussion and Section 7 Conclusion.
Page 10 has Reproducibility, etc.

Actually wait, looking at the text flow:
After Table 4:
"                                                8

                                                      Figure 3: ...
                                                      6 Discussion
Why does this modest modification..."

Then discussion text...
"                                                9

                                                                 7 Conclusion..."

So page 9 contains end of discussion and conclusion? Or just conclusion?
Then page 10 has Reproducibility.

Let me assign:
- [PAGE 1]: Title, Abstract, Introduction (through Rosenbaum 2004 reference maybe?)
- [PAGE 2]: Introduction continued, Section 2, 2.1
- [PAGE 3]: 2.2, end of Section 2
- [PAGE 4]: Section 3 Data Construction, Table 1, Section 4 Selection and Evaluation start
- [PAGE 5]: Section 4 continued, game margin formula, RMSE formula, Roos formula, inference discussion
- [PAGE 6]: Figure 1, Section 5 Results, Table 2, statistical tests
- [PAGE 7]: 5.2, 5.3, Table 3
- [PAGE 8]: Table 3 cont., Table 4, Figure 3, Section 6 Discussion start
- [PAGE 9]: Section 6 continued, Section 7 Conclusion
- [PAGE 10]: Reproducibility, Acknowledgments, References

I'll cite pages based on this best mapping.

Now I need to write the response with the exact XML sections.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
I need to derive the math, discuss the ridge regression objective, the dummy variable construction, the penalty ratio rho = lambda_D / lambda_P = 2.2, the chronological validation scheme, the RMSE reduction from 12.897 to 12.856, the statistical significance, the structural zeros, the home/away asymmetry, etc. Gray zones: play-by-play reconstruction vs official shift charts, garbage time inclusion, starter metadata incompleteness pre-2007, lockout seasons excluded, 2019 exclusions, small sample for 4-5 dummy categories, paired t-test treating seasons as independent despite shared players/coaches.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper with units, page citations.
- qi = (PH,i + PA,i)/2 [PAGE 2]
- yi = 100 * Δi / qi [PAGE 2] (points per 100 team possessions)
- Filtered RAPM argmin equation [PAGE 2]
- Dummy RAPM argmin equation with gamma blocks [PAGE 3]
- rho = lambda_D / lambda_P [PAGE 3]
- Grid search {0,5,...,30} and rho {0,0.1,...,2} then {1.0,...,2.5} [PAGE 4]
- Selected threshold 10 min/appearance, rho=2.2 [PAGE 4]
- Game margin prediction: Δ^b_g = sum_{i in g} y^b_i q_i / 100 [PAGE 5]
- Season RMSE formula [PAGE 5]
- Roos,s formula [PAGE 5]
- Results: 12.897 -> 12.856, Δ=0.042, 0.30%, 13/16 [PAGE 6]
- CI [0.013, 0.070], t(15)=3.138, p=0.0068 [PAGE 6]
- Table 3 exposure and coefficients [PAGE 7-8]
- Table 4 coefficients: home 1 = -1.59, away 1 = +0.82 [PAGE 8]

RETROCAUSAL_GENEALOGY: Historical lineage from WINVAL/Sagarin/Winston, Rosenbaum (2004), Hoerl & Kennard (1970) ridge, Sill (2010) RAPM, Fearnhead & Taylor (2011), Deshpande & Jensen (2016), Myers (2020) BPM. Multi-week traps: chronological windows Oct-Dec, Jan-Feb, Mar-Apr; adjacent seasons share players/coaches so p-values approximate; 2019 starter exclusions concentrated; 2011-12, 2019-20, 2020-21 excluded due to schedule issues.

RECURSIVE_THEORY_OF_MIND: This is about modeling the other team's modeling habits? "Crisis habit regression vs counter-trap vs clock." I need to interpret this in the context of the paper. Perhaps: coaches regress to habitual lineups in crisis (garbage time, injuries), opponents counter-trap by anticipating low-minute player usage, and the game clock determines garbage time inclusion. The paper includes garbage time and overtime because stint predictions must aggregate to full-game margin. Coaches might habitually play low-minute players in blowouts (crisis habit regression), opponents adjust (counter-trap), and the model needs to account for the clock (garbage time). I'll craft this carefully as a theory-of-mind analysis of strategic behavior captured (or not) by the dummy variables.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This is a bit of a stretch for a basketball plus-minus paper, but I can discuss: physical layer (player fatigue, substitution patterns, possession-ending events), biomechanical (none directly, but lineup continuity), weather (indoor sport, no weather veto). Vetoes: if play-by-play data is missing substitutions (data layer veto), if lineup reconstruction fails (physical layer veto), if garbage time distort
s margins (game-state layer veto). Since indoor, weather is null set.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual scenarios where the model would fail or be vetoed.
1. Veto: Season with >20% starter data exclusions (like 2019 had 19 excluded games). Prediction: Dummy RAPM advantage collapses or reverses because dummy categories become structural zeros or dominate design.
2. Veto: Playoff or tournament setting with shortened rotation (only 7-8 players used). Prediction: Low-minute player count indicators have near-zero exposure; RMSE reduction → 0, rho selection unstable at boundary.
3. Veto: Introduction of official NBA shift/lineup tracking data that renders play-by-play reconstruction unnecessary. Prediction: The 0.30% RMSE gain from dummy indicators disappears because the root cause (incomplete lineup representation from removed columns) is solved at the data layer, not the model layer.

I must avoid betting lines entirely. No mention of spreads, odds, etc.

Word count: >=1000 words total across sections, THINK_TRACE alone >=400 words.

Let me start drafting with formal LaTeX.

For THINK_TRACE, I'll write a thorough derivation:
- Start with stint definition: interval with fixed lineup.
- Exposure qi definition.
- Response yi scaling.
- Weighted ridge objective.
- Problem: removing low-minute columns leaves stints unrepresented -> omitted variable bias / correlated error.
- Dummy solution: 10 indicators d_H^(k), d_A^(k) for k=1..5.
- Reference category: 0 excluded players.
- Two penalty parameters: lambda_P for players, lambda_D for dummies, ratio rho.
- Chronological validation: inner train Oct-Dec, inner val Jan-Feb, outer test Mar-Apr.
- Grid search results: threshold 10, rho=2.2.
- RMSE math: 12.897 vs 12.856, difference 0.042, 0.30%.
- Significance: paired t-test on 16 season-level differences.
- Gray zones: 2019 exclusions, structural zeros for rare categories, play-by-play vs shift chart, garbage time inclusion, season interdependence.

I need to make sure I cite pages correctly. Since the user provided page numbers implicitly, I'll reference them as [PAGE N].

Let me draft the content now.

Important: No fake ratios. I must not invent Force/Fatigue. I can use rho = lambda_D/lambda_P which is in the paper, that's fine.

Word count check: I'll aim for roughly:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~200 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~150 words
- RLVR_COUNTERFACTUAL_VETOES: ~150 words
Total ~1500 words. Good.

Let's write.

For THINK_TRACE, I need to be careful about page citations. The paper text has page numbers. I'll map as best I can.

Page mapping confirmation:
- Page 1: Title, Abstract, Introduction through "Deshpande and Jensen (2016)..."
- Page 2: "Some RAPM implementations..." through 2.1 argmin equation
- Page 3: 2.2 through rho discussion
- Page 4: Section 3, Table 1, Section 4, grids
- Page 5: Game bg formula, RMSEs formula, Roos,s formula, inference paragraph
- Page 6: Figure 1, Section 5.1, Table 2, stats results, sensitivity
- Page 7: 5.2, 5.3 start, Table 3 start
- Page 8: Table 3 end, Table 4, Figure 3, Section 6 start
- Page 9: Section 6 end, Section 7 Conclusion
- Page 10: Reproducibility, References

I'll cite accordingly.

Let me write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper defines a stint as a maximal interval with an unchanged ten-man lineup. For stint i, let Δi be the change in home-minus-away score margin. Exposure qi is defined as the average of home and away possession-ending event counts, qi = (PH,i + PA,i)/2 [PAGE 2]. The response is scaled to yi = 100·Δi/qi, yielding home-team margin per 100 team possessions [PAGE 2]. Each observation is weighted by qi in the estimation objective, so longer stints contribute more to the fitted coefficients [PAGE 2].

Filtered RAPM estimates the intercept and retained-player coefficient vector β by minimizing the weighted ridge objective shown on [PAGE 2]: arg min α,β Σi qi(yi − α − xTiβ)² + λP‖β‖₂². Here xij ∈ {−1,0,1} encodes away, absent, and home lineup membership for retained player j. The intercept is unpenalized and predictors are unstandardized [PAGE 2]. Ridge regression is solved over a decreasing sequence of λP values via cyclic coordinate descent [PAGE 2].

The core identification problem arises when low-minute player columns are dropped: their stints remain in the data, but the design matrix no longer represents the complete lineup. Omitted contributions can be absorbed by retained players whose indicators correlate with the missing lineup information [PAGE 1]. Dummy RAPM restores this information without estimating a separate coefficient for every low-minute player. For k = 1,...,5, it defines home and away count indicators d(H,i)^(k) = 1{home lineup contains exactly k excluded players} and d(A,i)^(k) = 1{away lineup contains exactly k excluded players}; lineups with zero excluded players are the reference category [PAGE 3]. The augmented objective is arg min α,β,γH,γA Σi qi(yi − α − xTiβ − dT(H,i)γH − dT(A,i)γA)² + λP‖β‖₂² + λD‖γH‖₂² + λD‖γA‖₂² [PAGE 3]. The relative penalty ρ = λD/λP is tuned from the data [PAGE 3].

Chronological validation selects the hyperparameters. Within each of 16 seasons (2007–2011, 2013–2019, 2022–2025), October–December forms inner training, January–February inner validation, and March–April outer test [PAGE 4]. The initial grid evaluates minute thresholds {0,5,10,15,20,25,30} and penalty ratios {0,0.1,0.25,0.5,1,2}, minimizing model-averaged, season-averaged inner-validation RMSE [PAGE 4]. This selects a 10-minute-per-appearance threshold. Holding threshold fixed, a second-stage grid over ρ ∈ {1.0,...,2.5} selects ρ = 2.2, extended if necessary until the minimum is interior [PAGE 4]. March–April results are never used for selection [PAGE 4].

Gray-zone audit. The improvement is small but consistent: outer-test mean season game-margin RMSE falls from 12.897 to 12.856, a reduction of 0.042 points or 0.30% of the filtered RAPM RMSE, with Dummy RAPM lower in 13 of 16 seasons [PAGE 6]. The paired t-test on season-level RMSE differences gives t(15) = 3.138, p = 0.0068, with a 95% t-based confidence interval of [0.013, 0.070] points [PAGE 6]. Robustness checks (Wilcoxon signed-rank W = 120.0, p = 0.0077; sign test p = 0.0213) agree [PAGE 6]. However, the nominal tests treat seasons as independent observational units, although adjacent seasons share players, coaches, and league conditions, so p-values are best read as approximate across-season summaries [PAGE 5]. Structural zeros appear in Table 3 and Table 4: four- and five-excluded-player categories occur in only a few seasons, and absent categories yield structurally zero coefficients [PAGE 7][PAGE 8]. The home coefficient for one excluded player is −1.59 points per 100 possessions, while the away coefficient is +0.82 in the home-margin orientation; both signs are consistent with the side using a low-minute player being weaker [PAGE 8]. Data weaknesses include play-by-play and starter-record reconstruction rather than official shift charts, starter exclusions concentrated in 2019, and inclusion of garbage-time and overtime possessions [PAGE 4][PAGE 9].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX operators, units, page citations, and breakdown.

Stint exposure, dimensionless possession count:
qi = (PH,i + PA,i)/2 [PAGE 2], where PH,i and PA,i count home and away possession-ending events.

Scaled stint response, units points per 100 team possessions:
yi = 100·Δi/qi [PAGE 2], where Δi is the change in home-minus-away score margin during stint i.

Filtered RAPM weighted ridge objective, units squared points per 100 possessions:
(α̂, β̂) = arg min α,β Σi=1^n qi(yi − α − xTiβ)² + λP‖β‖₂² [PAGE 2]. The intercept is not penalized; predictors are not standardized; λP is selected by cross-validated game-margin RMSE [PAGE 2][PAGE 5].

Dummy RAPM augmented objective:
arg min α,β,γH,γA Σi=1^n qi(yi − α − xTiβ − dT(H,i)γH − dT(A,i)γA)² + λP‖β‖₂² + λD‖γH‖₂² + λD‖γA‖₂² [PAGE 3]. γH and γA are five-element dummy blocks for counts k = 1,...,5 on the home and away sides; zero excluded players is the reference category [PAGE 3].

Relative penalty ratio, dimensionless:
ρ = λD/λP [PAGE 3]. The selected value is ρ = 2.2 [PAGE 4], meaning the squared dummy coefficients carry 2.2 times the ridge penalty weight of squared player coefficients. The paper explicitly cautions that ρ is not an effective shrinkage factor because predictors are unstandardized and occur at different frequencies [PAGE 9].

Inner-validation hyperparameter grids, units minutes per appearance for threshold and dimensionless for ratio:
threshold ∈ {0, 5, 10, 15, 20, 25, 30} [PAGE 4]; initial ratio grid ∈ {0, 0.1, 0.25, 0.5, 1, 2} [PAGE 4]; refined ratio grid ∈ {1.0, 1.1, ..., 2.5} [PAGE 4]. Selected threshold: 10 minutes per appearance [PAGE 4].

Held-out game-margin reconstruction, units points:
Δ^b_g = Σ_{i∈g} y^b_i q_i / 100 [PAGE 5]. Stint predictions are converted back to points and summed within game g.

Season-level game-margin RMSE, units points:
RMSE_s = (1/|T_s|) Σ_{g∈T_s} (Δ_g − Δ^b_g)² )^(1/2) [PAGE 5], where T_s is the March–April test set for season s.

Out-of-sample R-squared, dimensionless proportion of variance explained:
R^2_{OOS,s} = 1 − [Σ_{g∈T_s} (Δ_g − Δ^b_g)² / Σ_{g∈T_s} (Δ_g − Δ̄_{T_s})²] [PAGE 5], where Δ̄_{T_s} is the test-set mean observed game margin.

Outer-test results, units points:
Filtered RAPM mean season RMSE = 12.897; Dummy RAPM = 12.856; reduction = 0.042 points, or 0.30% of filtered RAPM RMSE [PAGE 6]. Dummy RAPM achieves lower RMSE in 13 of 16 seasons [PAGE 6]. Mean season R^2_{OOS} rises from 0.173 to 0.178 [PAGE 6]. Across-season 95% t-confidence interval for RMSE reduction: [0.013, 0.070] points; paired t-test t(15) = 3.138, p = 0.0068; Wilcoxon W = 120.0, p = 0.0077; sign test p = 0.0213 [PAGE 6].

Selected dummy coefficients, units home-margin points per 100 possessions:
Home, one excluded player: −1.59 (negative in all 16 seasons) [PAGE 8]. Away, one excluded player: +0.82 in home-margin orientation (positive in 13 seasons) [PAGE 8]. Table 3 reports stints and exposure by count category across seasons [PAGE 7][PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage runs from WINVAL (Sagarin and Winston) and Rosenbaum (2004), who introduced Adjusted Plus-Minus by regressing stint-level score differentials on player indicators [PAGE 1]. Hoerl and Kennard (1970) supplied ridge regression to stabilize correlated designs [PAGE 1]; Sill (2010) applied ridge to APM with out-of-sample testing, yielding Regularized Adjusted Plus-Minus [PAGE 1]. Bayesian partial pooling offers a related response to weak identification: Fearnhead and Taylor (2011) estimated offensive and defensive abilities while borrowing information across seasons, and Deshpande and Jensen (2016) modeled win-probability changes using Bayesian linear regression [PAGE 1]. Box Plus/Minus is a separate, complementary line built on box-score and role information (Myers, 2020) [PAGE 1].

Dummy RAPM extends this genealogy by attacking the omitted-variable problem created when low-minute columns are deleted. Rather than estimate a noisy coefficient per rare player or drop their stints entirely, it pools count information across the ten lineup-side count indicators under a single ridge penalty λD, distinct from the player penalty λP [PAGE 3]. The multi-week temporal trap is built into the evaluation calendar: inner training (October–December), inner validation (January–February), and outer testing (March–April) are disjoint and strictly chronological [PAGE 4]. Seasons are labeled by the calendar year in which they end [PAGE 4]. The series begins in 2007 because starter metadata is incomplete earlier [PAGE 4]. The lockout-shortened 2011–12 season, disrupted 2019–20 season, and COVID-shortened 2020–21 season are excluded because their schedules do not support the common October–April split [PAGE 4]. Adjacent seasons share players, coaches, and league conditions, so the paired t-test treats 16 seasons as approximate independent units rather than truly independent draws [PAGE 5]. A secondary sensitivity analysis excludes 2019, the season with the most starter-data exclusions (19 games), leaving 15 seasons with an average RMSE reduction of 0.035 points (p = 0.0132) [PAGE 6]. The historical trap is that RAPM’s predictive target is lineup-conditioned final margin, not a pregame forecast, because predictions condition on realized lineups in held-out games [PAGE 5].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock. A coach facing a large lead or deficit in the fourth quarter habitually regresses to low-minute bench players—garbage-time rotations that are structurally different from closing-lineup stints. The opposing coach, modeling this habit, sets a counter-trap by matching bench units or preserving starters to exploit the expected quality gap. The game clock determines which layer is active: early-game stints carry starters and primary role players, while late-game stints accumulate excluded-player counts that Dummy RAPM records via d(H,i)^(k) and d(A,i)^(k) [PAGE 3]. The paper retains garbage time and overtime precisely so that stint predictions aggregate to full-game margin [PAGE 4], which means the dummy coefficients absorb systematic crisis habit regression: the home coefficient for one excluded player is −1.59 and the away coefficient is +0.82 in home-margin orientation [PAGE 8], reflecting that the side deploying low-minute players tends to be weaker. A recursive theory-of-mind failure would occur if a coach anticipates that the opponent knows the dummy penalty structure and adjusts substitution timing to game the indicator frequencies; however, because the model is fit on realized lineups and evaluated on realized held-out lineups, not pregame lineup forecasts [PAGE 5], the counter-trap cannot directly manipulate the test target. The clock veto is absolute in the sense that overtime and garbage-time possessions remain in-sample by design, so the coefficient estimates reflect end-of-game substitution habits rather than pure crunch-time performance [PAGE 4].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Stints are reconstructed from ESPN play-by-play and starter records rather than official shift charts [PAGE 9]; if a substitution is missing or misrecorded, the stint segmentation is corrupted and the design matrix misrepresents the lineup, vetoing the dummy indicators’ validity. Biomechanical layer: player fatigue and minutes restrictions govern who qualifies as low-minute; the 10-minute-per-appearance threshold is selected by validation [PAGE 4], but no biomechanical load variable enters the model, so injury-driven lineup changes are captured only ex post through count indicators. Weather layer: null set; NBA games are indoor and climate-controlled, so weather imposes no veto on possession-ending events, exposure qi, or margin response yi [PAGE 2]. Data-construction veto: games lacking five unique recorded starters per team or stints without five unique home and five unique away players are removed, eliminating 33 games including 19 in 2019 [PAGE 4]. If starter metadata becomes incomplete in a future season, the chronological window itself fails, as occurred pre-2007 [PAGE 4]. Representation veto: categories with four or five excluded players are rare (Table 3: home 4 occurs in 6 seasons, home 5 in 4; away 4 in 7, away 5 in 4) [PAGE 7][PAGE 8], so their coefficients are structurally zero or heavily shrunk, limiting the model’s ability to represent extreme low-minute lineups. The selected ratio ρ = 2.2 is not an effective shrinkage factor because predictors are unstandardized and occur at different frequencies [PAGE 9], so a veto arises if a practitioner misreads ρ as a literal relative contraction.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning verifiable reward (RLVR) counterfactual veto scenarios and predictions:

Veto 1 — Starter-exclusion shock. In a season where starter metadata is missing for more than the 19 games observed in 2019 [PAGE 4], the number of excluded player columns and their stint incidence rises sharply. Prediction: the structural-zero problem in Table 3 and Table 4 [PAGE 7][PAGE 8] expands; the dummy categories for counts 3–5 cease to be rare and the ridge-pooled coefficients become unstable under the fixed ratio ρ = 2.2 [PAGE 4][PAGE 9]. The Dummy RAPM RMSE advantage over filtered RAPM (0.042 points, 0.30%) [PAGE 6] is predicted to collapse toward zero or reverse, because the omitted-variable signal is too diffuse to be captured by ten count indicators under a single shared penalty.

Veto 2 — Shortened-rotation playoff environment. In a playoff or tournament setting where rotations tighten to seven or eight players, low-minute appearances approach zero and exposure for d(H,i)^(k) and d(A,i)^(k) at k ≥ 1 vanishes. Prediction: the dummy blocks receive almost no effective sample weight; the second-stage ratio selection over ρ ∈ {1.0,...,2.5} [PAGE 4] selects boundary values or becomes statistically unidentified. The outer-test mean season RMSE reduction is predicted to fall below the 95% t-confidence interval lower bound of 0.013 points [PAGE 6], rendering the modification operationally vacuous.

Veto 3 — Official shift-chart adoption. If the league replaces play-by-play plus starter-record stint reconstruction with an official, shift-level lineup feed, the data-layer omission that Dummy RAPM patches disappears [PAGE 9]. Prediction: filtered RAPM on complete lineup columns would outperform Dummy RAPM on reconstructed data, because the root cause—missing low-minute player columns while their stints remain in the design matrix [PAGE 1]—is solved at the data layer rather than the model layer. The consistent 13-of-16-season RMSE improvement [PAGE 6] is predicted to attenuate to noise, and the selected threshold of 10 minutes per appearance [PAGE 4] would lose predictive relevance.
</RLVR_COUNTERFACTUAL_VETOES>