---
source: "2018 nflWAR_ a reproducible method for offensive player evaluation in football,  Journal of Quantitative Analysis in Sports.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 32
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5862
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "nflWAR: a reproducible method for offensive player evaluation in football" (Journal of Quantitative Analysis in Sports, 2019). I need to produce a comprehensive response following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to read the source text carefully and extract equations, citations, page numbers, assumptions, breakdown regimes, etc.

Key elements from source:

Paper details:
- Yurko, Ventura, Horowitz. J. Quant. Anal. Sports 2019; 15(3): 163–183. DOI: 10.1515/jqas-2018-0010.
- Pages: 163-183 (32 pages per user).
- Package nflscrapR for play-by-play data.
- Expected points via multinomial logistic regression (7 events: TD +7, FG +3, Safety +2, No Score 0, Opponent Safety -2, Opponent FG -3, Opponent TD -7).
- Win probability via GAM using expected points as input.
- nflWAR framework using multilevel models.
- Replacement level roster-based approach.
- Uncertainty via drive-level resampling (1000 simulated seasons).
- Results for 2017 NFL season.

Equations visible:
1. Multinomial logistic regression logits relative to "No Score": log(P(Y=y|X) / P(Y=No Score|X)) = X β_y (implied equation number missing but described around page 166-167). The text says "The model is specified with six logit transformations relative to the “No Score” event with the form..." but the actual LaTeX equation is missing from the extracted markdown. I need to reconstruct formal LaTeX based on description, not invent fake ratios. I can state the standard multinomial logit form faithfully.
2. Expected points: EP = sum_y P(Y=y|X) * y.
3. Calibration error: e_{y,b} = |P̂_b(Y=y) - P_b(Y=y)| maybe? Text says "its associated error..." missing formula. Then e_y = sum_b n_{y,b} * e_{y,b} / sum_b n_{y,b}. Then e = sum_y n_y * e_y / sum_y n_y. Page 167-168.
4. GAM win probability: logit(WP) = s(E[S]) + s(sg) + ... + linear terms h, u, tof, tdef. Table 1 page 169. Variables: E[S] = EP + S; sg = seconds remaining in game; E[S_{sg+1}] expected score time ratio; h current half; sh seconds remaining in half; u under two minutes indicator; tof timeouts offensive; tdef timeouts defensive.
5. Play value: δ_{f,i} = V_f - V_i. Page 170. For scoring plays V_f = y.
6. EPA_air / WPA_air and EPA_yac / WPA_yac decomposition. Adjustment: subtract average time for incomplete passing plays 5.7 seconds. Page 170-171.
7. Multilevel model: δ_{f,i} = X_i β + Q_q + C_c + ... where group coefficients vary Q_q ~ N(μ_Q, σ_Q^2), etc. Page 171-172. Penalized likelihood via lme4.
8. Passing models: Δ_air and Δ_yac responses with indicators for completion/incompletion. Page 172-173. Covariate vectors A_i and B_i include Home, Shotgun, NoHuddle, QBHit, Location, RecPosition, RushStrength; B_i also includes AirYards and interactions.
9. Rushing models: QB model with Γ_i (Home, Shotgun, NoHuddle, PassStrength); non-QB model with P_i and group T (team-side-gap). Seven T levels per team. Page 173.
10. iPAA_p = κ_{p,pass} * iPA_pass + κ_{p,rush} * iPA_rush etc. Page 174.
11. Replacement level definitions page 174-175: 32*3 rushing RBs, 32*1 rushing WR/TE, 32*3 receiving RBs, 32*4 receiving WRs, 32*2 receiving TEs. QB replacement: <10% involvement in team's QB plays.
12. iPAR_p = iPAA_p - iPAA^{repl}_p (shadow). Page 175.
13. Conversion to wins: linear regression team wins vs score differential S; coefficient β̂_S typically about 0.03; roughly 33 points per win. WAR_EPA = iPAR / 33 = iPAR * β̂_S. Page 175-176. WPA-based WAR directly in wins.
14. Uncertainty: resample entire team drives, 1000 simulated seasons. Page 176.

Assumptions & breakdown regimes:
- Publicly available data lacks which players are on field for every play (except directly involved players). So only offensive skill positions QB, RB, WR, TE can be evaluated; offensive line only as team-side-gap proxy.
- QB kneels excluded, EP=0.
- PATs treated separately.
- Multinomial logistic regression ignores time remaining except seconds in half and under two minutes improved calibration (esp No Score).
- Ordinal logistic regression worse (e≈0.022 vs e≈0.013).
- WP model excludes team strength indicators to avoid inflating/deflating player contributions on bad/good teams.
- iPA normality assumption for EPA/WPA roughly symmetric.
- Replacement level roster-based (Baumer et al. openWAR; Thomas and Ventura).
- Points-to-wins: ~33 points per win, β̂_S ≈ 0.03.
- Drive-level resampling to preserve within-drive dependencies; not play-level.
- Breakdown: if data on player participation (who is on field) is missing, cannot estimate individual linemen WAR; selection bias in side-gap estimates because RBs run toward holes.
- Calibration: LOSO CV.

Retrocausal genealogy / historical lineage:
- Carter and Machol (1971) expected points; Carroll et al. (1988) Hidden Game of Football.
- Brian Burke advancedfootballanalytics.com (2009); Katz and Burke (2017) ESPN QBR.
- Goldner (2017) Markov model; Causey (2015) exact-neighbors; Lock and Nettleton (2014) random forests WP.
- Tango, Lichtman, Dolphin (2007) The Book baseball replacement level.
- Baumer et al. (2015) openWAR baseball; Rosenbaum (2004) basketball adjusted plus-minus; Kubatko et al. (2007); Macdonald (2011) hockey; Gramacy et al. (2013); Thomas et al. (2013).
- Brooks, Pavlidis, Judge (2015) baseball catcher/pitcher multilevel.
- Gelman and Hill (2007) multilevel = Bayesian.
- Zhou and Ventura (2017) wins vs point differential NFL.

Multi-week traps / temporal issues:
- Season-to-season correlation (Table 4, 5): QB WAR 0.598 vs passer rating 0.478 vs ANY/A 0.295; RB WAR 0.431 vs success rate 0.314 vs YPA 0.337. Indicates WAR more stable but still modest.
- Replacement level definitions change year to year; roster construction changes.
- Drive resampling across seasons? They simulate 1000 seasons within 2017. Cross-season consistency examined.

Recursive theory of mind:
- Crisis habit regression: Under pressure, front offices revert to box-score stats (yards, passer rating) because nflWAR requires play-by-play and multilevel modeling; in crisis (e.g., trade deadline, draft), they may regress to habit.
- Counter-trap: The model itself may over-credit QBs because they are involved in every play; multilevel shrinkage pulls low-play players to mean, but replacement-level shadow can be gamed by usage manipulation (e.g., benching a player to lower replacement baseline).
- Clock: Game clock (seconds remaining, two-minute drill) is an explicit covariate; end-of-half situations distort EP/WPA. The Philly Special example: 4th and 1, 0:38 left, EP_i ≈ 2.78, EPA ≈ 4.22, WPA ≈ 0.1266. Time is not linear; GAM smooths it.

Cross-layer veto adjudication:
- Physical/biomechanical: Air yards vs yards after catch decomposition assumes perpendicular distance; does not model player speed, separation, route concepts, or defensive coverage beyond opposing defense intercept.
- Weather: No weather covariates in EP or WP models; not mentioned. Veto: outdoor games in extreme weather violate stationarity of scoring probabilities.
- Physical: 5.7 seconds average for incomplete passes is a rough adjustment; if snap-to-pass time varies (e.g., quick game vs deep shots), EP_air is misattributed.
- Biomechanical: Rush blocking proxy T (team-side-gap) aggregates 7 gaps per team; cannot separate individual linemen; selection bias: RBs choose holes.
- Data availability: No player tracking, no pre/post-snap locations.

RLVR counterfactual vetoes (3 verifiable scenarios + predictions):
Need to formulate verifiable scenarios where the model would fail or be vetoed, with predictions.
1. Missing participation data veto: If a researcher tries to extend to defensive linemen without on-field participation data, the model cannot identify individual effects. Prediction: any estimated defensive WAR will be confounded with team defensive strength and opponent quality, producing biased intercepts.
2. Weather non-stationarity veto: In sub-freezing or high-wind games, the EP model (trained on 2009-2016 all conditions) will miscalibrate field goal and punt probabilities. Prediction: calibration error e will exceed 0.022 (ordinal baseline) in extreme weather subsets; WP model will overestimate passing efficiency in cold games.
3. Replacement-level manipulation veto: A team could benching a borderline QB to keep involvement <10% and label him replacement, altering the shadow baseline iPAA^repl. Prediction: WAR estimates become non-transitive across teams; correlation of QB WAR season-to-season (0.598) would drop below passer rating correlation (0.478) if teams strategically manage snaps around the 10% threshold.
Need 3 verifiable scenarios with predictions.

Word count: Need >=1000 words total across XML sections. THINK_TRACE >=400 words.

Need to cite exact [PAGE N] markers. Since source pages are 163-183, I should reference page numbers where content appears. I don't have exact page breaks in markdown but text shows page headers like **164**, **165**, etc. I can cite those.

Let's map content to pages:
- Abstract/intro: 163-164.
- Previous work plays: 164-165.
- Previous work players: 165.
- Framework: 165-166.
- nflscrapR: 166.
- Expected points section start: 166-167.
- Multinomial logistic regression: 167. Equation missing but described.
- Figure 1: 167.
- Model selection calibration: 167-168. e≈0.013 page 168.
- EP by down/yard line: 168.
- Figure 2/3/4: 168-169.
- Win probability: 169. Table 1 page 169. GAM equation page 169-170.
- WP calibration: 170. Figure 5 page 170.
- EPA/WPA: 170. Equation 8 page 170. Philly Special example page 170.
- Air yards/yac: 170-171. 5.7 seconds footnote page 171.
- nflWAR section 3: 171.
- Division of credit: 171-172. Multilevel modeling page 171-172. Equation 9 page 172? Text says Equation 9 references Table 2 variables. Page 172.
- Table 2/3 page 172.
- Passing models: 172-173. Footnote 2 page 173.
- Rushing models: 173. Seven T levels page 173.
- iPAA: 174.
- Replacement level: 174-175. Figure 6 page 175. QB <10% page 175.
- iPAR shadow: 175.
- Conversion to wins: 175-176. β̂_S ≈0.03, 33 points per win page 176.
- Uncertainty: 176. Drive resampling 1000 seasons page 176.
- Results: 176-179. Replacement designations page 176. Figure 7 page 177? Actually text says Figure 7 page 177 maybe. Table 4/5 pages 179. Figure 12 page 179? Wait text flow: page 178 has Figure 11. Page 179 has Figure 12/13 text? Let's check: after Figure 11 description page 178, then Figure 12 page 179? The markdown shows page 178 then **179** before Figure 12/13 text? Let's see: "**178** | ... Figure 11..." then "**179** | ... Additionally, we examine..." Actually the provided text jumps. I can cite approximate pages where the content clearly falls based on headers. Better to cite page numbers visible in text: 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183. I'll use these markers where content is evident.

Need to avoid betting lines. No mention of spreads, totals, moneylines, odds. The paper discusses win probability, expected points, not betting. I must be careful not to say "odds" even colloquially. Use "probability" or "likelihood."

Need formal LaTeX equations. I will write them properly. No toy equations. I can reconstruct the multinomial logit:

For scoring event y ∈ Y = {TD, FG, Safety, No Score, Opp Safety, Opp FG, Opp TD}, with point values v(y) ∈ {7,3,2,0,-2,-3,-7}:

log ( P(Y=y | X) / P(Y=No Score | X) ) = X β_y,  y ≠ No Score.

Then P(Y=y|X) = exp(X β_y) / (1 + Σ_{y' ≠ No Score} exp(X β_{y'})).

EP(X) = Σ_{y∈Y} v(y) P(Y=y|X).

Calibration error:
e_{y,b} = | P̂_b(Y=y) - P_b(Y=y) | maybe absolute difference. Text: "calculate for scoring event y in bin b its associated error..." missing formula but implies difference between predicted and observed probabilities. I'll state e_{y,b} = |P̂_b(Y=y) - P_b(Y=y)| or squared? Since missing, I'll present as absolute calibration gap and note source does not specify norm; avoid inventing. Actually I can write: e_{y,b} = P̂_b(Y=y) - P_b(Y=y) (signed gap) and then e_y = Σ_b n_{y,b} e_{y,b} / Σ_b n_{y,b}? Text says averaging error weighted by number of plays. If signed, errors cancel; likely absolute or squared. But since not specified, I'll denote e_{y,b} as calibration discrepancy and e = ... weighted average. I can note the exact functional form of e_{y,b} is not printed in the extracted text (gap in source). That's honest and not a toy equation.

GAM:
logit( WP_i ) = s_1(E[S]_i) + s_2(sg_i) + s_3(E[S_{sg+1}]_i) + β_h h_i + β_u u_i + β_{tof} tof_i + β_{tdef} tdef_i + ε_i? Actually GAM no ε maybe. Where E[S] = EP + S. h current half (factor), u under-two-minutes indicator, tof/tdef timeouts.

Play value:
δ_{f,i} = V_f - V_i. V ∈ {EP, WP}.

Multilevel:
δ_{f,i} = X_i β + Q_{q[i]} + C_{c[i]} (+ ...), Q_q ~ N(μ_Q, σ_Q²), C_c ~ N(μ_C, σ_C²), etc.

iPAA:
iPAA_p = κ_{p,pass} ⋅ iPA_{p,pass} + κ_{p,rush} ⋅ iPA_{p,rush} (+ ...)

iPAR:
iPAR_p = iPAA_p - iPAA^{repl}_p.

Wins:
Ŵ_t = α + β̂_S S_t + η_t; β̂_S ≈ 0.03 wins/point; points per win ≈ 1/0.03 ≈ 33.3. WAR_EPA,p = iPAR_p ⋅ β̂_S ≈ iPAR_p / 33.

Now the sections.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit >=400 words. I need to discuss derivation from EPA to WAR, gray zones: credit division without full participation data, replacement level definition arbitrariness, 5.7 seconds assumption, drive resampling assumptions, team-strength exclusion in WP, shrinkage bias, low-sample players, QB involvement bimodality, side-gap selection bias, ordinal vs multinomial, points-to-wins linearity, etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. Include equations with page cites. Units: EP in points, WP dimensionless probability [0,1], seconds, yards, wins dimensionless count. Breakdown regimes: missing on-field data, weather non-stationarity, small sample shrinkage, replacement level threshold, linearity of points-to-wins.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Carter & Machol 1971, Carroll 1988, Burke 2009, Goldner 2017, Causey 2015, Lock & Nettleton 2014, Tango et al. 2007, Baumer 2015 openWAR, Rosenbaum 2004, Gelman & Hill 2007, Zhou & Ventura 2017. Multi-week traps: season-to-season correlation instability, replacement roster flux, drive resampling within season not across seasons, weather regime shifts across weeks.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: front office under pressure reverts to box score; counter-trap: model over-credits QB usage and replacement-level shadow manipulation; clock: game clock covariates, end-of-half distortions, Philly Special example.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Air yards geometry assumption (perpendicular distance), no player tracking/speed/separation, 5.7s constant, no weather covariates, team-side-gap proxy cannot isolate linemen, selection bias in rushing gaps, opposing defense group only (no individual defensive players).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable veto scenarios + predictions. Need to make them concrete and verifiable.

I must ensure total word count >= 1000. THINK_TRACE alone >=400. I'll aim for ~1500-2000 total.

Let's draft carefully.

Important: Do not mention betting lines. Avoid "odds," "spread," "total," "moneyline." Use "win probability" not "implied probability." Avoid "line."

Citations: Use [PAGE 164] etc. The source text has page headers bolded like **164**. I'll cite as [PAGE 164].

Quotes: Verbatim quotes where possible. For equations missing in source, I will reconstruct but note missing exact typography. I can quote text: "the model is specified with six logit transformations relative to the “No Score” event" [PAGE 167]. "roughly 33 additional points will raise the expected number of wins by 1" [PAGE 176]. "We resample entire team drives" [PAGE 176].

Let's start writing.

THINK_TRACE section:

Need >=400 words. I'll write a dense multi-hop derivation:

1. From raw plays to EP: multinomial logistic regression with 7 scoring events, logits relative to No Score. Covariates X include down, distance, yard line, seconds in half, under 2 min. LOSO CV calibration e≈0.013 [PAGE 168]. Ordinal model worse e≈0.022 [PAGE 168]. Gray zone: the exact calibration error norm e_{y,b} is not printed in extracted text; cannot verify whether absolute or squared loss was used [PAGE 167-168].

2. EP to WP: GAM with logit link. E[S]=EP+S. Covariates in Table 1 [PAGE 169]. Exclusion of team strength to avoid distorting player credit [PAGE 169]. Gray zone: stationarity assumption across 2009-2016; rule changes, roster turnover.

3. Play value δ_{f,i}=V_f - V_i [PAGE 170]. EPA/WPA. Scoring plays use y as V_f. Philly Special example: EP_i≈2.78, EPA≈4.22, WPA≈0.1266 [PAGE 170].

4. Air/yac split: subtract 5.7 seconds average incomplete pass duration [PAGE 171 footnote]. Gray zone: constant time assumption ignores snap-to-pass variance; deep shots vs quick game misattributed.

5. Division of credit via multilevel varying intercepts [PAGE 171-172]. Groups Q (QB), C (receiver), H (rusher), T (team-side-gap), F (opposing defense) [PAGE 172 Table 3]. Penalized likelihood lme4 [PAGE 172]. Normality assumption for δ [PAGE 172 footnote 2]. Gray zone: no on-field participation data for linemen; only directly involved players [PAGE 171]. Shrinkage pulls low-play players to group mean [PAGE 172].

6. Replacement level: roster-based counts [PAGE 174]. QB threshold <10% involvement due to bimodal distribution [PAGE 175 Figure 6]. Shadow replacement iPAA^repl [PAGE 175]. Gray zone: arbitrary thresholds; manipulation risk; replacement pool changes weekly.

7. Wins conversion: linear regression wins vs score differential, β̂_S≈0.03, 33 points/win [PAGE 176]. WPA-based WAR already in wins. Gray zone: linearity assumption breaks at extremes; score differential not independent of plays.

8. Uncertainty: drive-level resampling, 1000 simulated seasons [PAGE 176]. Gray zone: preserves within-drive play-calling dependence but assumes drives exchangeable; ignores cross-season injuries/trades.

I need to weave this into >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX blocks and page citations. List breakdown regimes.

RETROCAUSAL_GENEALOGY: Cite lineage. Multi-week traps: replacement roster flux across weeks; week-to-week usage; calendar effects (weather, injuries).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Use the three concepts.

CROSS_LAYER_VETO_ADJUDICATION: Physical (air yards geometry, 5.7s), biomechanical (no tracking), weather (no covariates), data layer (missing participation).

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.

Let's ensure no betting terms. Words like "line" as in trend line are okay but avoid "betting line." "Spread" only as in statistical spread? Better avoid "spread" entirely to be safe. "Total" avoid. "Odds" avoid. Use "probability."

Word count check: I will write generously.

Need exact XML sections. No extra sections.

Let's draft.

Potential issue: The user says "STRICT INVARIANTS" and ">= 1,000-WORD DEPTH across these exact XML sections". So total words across all sections must be >=1000. THINK_TRACE >=400. I'll ensure each section is substantial.

Let's write now.

For equations, use LaTeX inline and display. Make sure they are formal, not toy. State units.

Page citations: I need to be accurate. The markdown shows page numbers in bold between sections. I'll reference them where content is clearly located.

Let's map more carefully:
- Page 164: "164 | R. Yurko..." starts after previous work plays intro. Actually the text shows **164** after discussing three yards on 3rd and 2. So expected points foundation discussion is page 164.
- Page 165: previous work players, Pro Football Focus, AV.
- Page 166: framework, nflscrapR start.
- Page 167: expected points multinomial logistic regression, Figure 1, model specified with six logit transformations. The actual equation is missing in markdown but described. Calibration error formula starts page 167.
- Page 168: calibration results e≈0.013, ordinal e≈0.022, Figure 2/3/4.
- Page 169: Win probability section start, Table 1, GAM equation.
- Page 170: WP calibration Figure 5, EPA/WPA definition Equation 8, Philly Special.
- Page 171: Air yards/yac, 5.7 seconds footnote, nflWAR section start, division of credit.
- Page 172: multilevel modeling, Equation 9 reference, Table 2/3, Gelman quote.
- Page 173: passing models, footnote 2, rushing models, seven T levels.
- Page 174: iPAA, replacement level start, roster counts.
- Page 175: Figure 6, QB <10%, replacement shadow, iPAR.
- Page 176: conversion to wins β̂_S≈0.03, 33 points/win, uncertainty drive resampling 1000 seasons, results start replacement designations.
- Page 177: Figure 7/8? Actually Figure 7 text page 177 maybe. Top five players Figure 8 page 177? The text shows **177** before Figure 8? Let's see: "**177** | ... Figure 8: Top five players..." yes page 177. Figure 9 page 177? Text shows **177** then Figure 9? Actually after Figure 8 text, then **177**? Let's not over-specify. I'll cite page ranges where certain.
- Page 178: Figure 11, Russell Wilson, Tom Brady, Joe Flacco.
- Page 179: Figure 12/13, Table 4/5.
- Page 180: Figure 14 offensive line.
- Page 181: discussion extensions.
- Page 182-183: references.

I'll cite pages that are clearly supported.

Now write.

Be careful: "zero toy equations" means don't invent ratios like Force/Fatigue. My equations are real from paper or standard statistical forms explicitly described. Good.

Let's produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds through eight dependent hops, each introducing a gray-zone assumption that must be audited before the output can be treated as a causal player value.

Hop 1 — Play valuation via expected points. The paper models seven mutually exclusive next-score events (touchdown +7, field goal +3, safety +2, no score 0, opponent safety −2, opponent field goal −3, opponent touchdown −7) conditional on game situation **X** using multinomial logistic regression with six logits relative to “No Score” [PAGE 167]. Expected points is the probability-weighted sum EP(**X**) = Σ_y v(y)P(Y=y|**X**) [PAGE 167]. Calibration is assessed with leave-one-season-out cross-validation over 2009–2016 (304,896 non-PAT plays, QB kneels excluded and assigned EP=0) [PAGE 166–167]. The selected model achieves e≈0.013; an ordinal logistic alternative is explicitly worse at e≈0.022 [PAGE 168]. Gray zone: the extracted text omits the exact printed definition of the per-bin error e_{y,b}; whether it is absolute, signed, or squared discrepancy is not recoverable from the supplied markdown [PAGE 167–168], so replication of the calibration threshold requires the supplementary materials.

Hop 2 — Win probability. A generalized additive model with logit link maps EP and game-clock state to possession-team win probability. Expected score differential E[S] = EP + S is the central covariate, alongside seconds remaining in game, score-time ratio, half indicator, under-two-minutes indicator, and team timeouts [PAGE 169, Table 1]. Crucially, team-strength indicators are excluded so that a player on a weak team is not systematically credited less simply because the baseline win probability starts lower [PAGE 169]. Gray zone: stationarity across seasons and rules eras is assumed; no weather or venue covariates enter either the EP or WP models, which is a breakdown regime for outdoor games in extreme conditions.

Hop 3 — Play value added. Each play receives δ_{f,i} = V_f − V_i where V∈{EP, WP}; for scoring plays V_f is the event point value rather than the next play’s state [PAGE 170]. The “Philly Special” touchdown from 4th-and-1 at the opponent 1-yard line with 0:38 remaining illustrates the non-linearity: EP_i≈2.78, EPA≈7−2.78=4.22, WPA≈0.1266 [PAGE 170]. Gray zone: end-of-half clock management creates non-stationary decision contexts that the GAM smooths over rather than structurally models.

Hop 4 — Air yards / yards after catch decomposition. Completed passes are split into an air component and a YAC component; incomplete passes take the observed δ in both models. The time of possession is adjusted by subtracting the average incomplete-pass duration of 5.7 seconds [PAGE 170–171, footnote 1]. Gray zone: 5.7 seconds is a season-level constant; quick-game passes and deep shots have different snap-to-pass latencies, so mis-specification here biases attribution between passer and receiver.

Hop 5 — Division of credit via multilevel models. Because public data identify only players directly involved in a play (not all 22 on-field participants), the framework fits varying-intercept models for QB (Q), targeted receiver (C), rusher (H), team-side-gap rush blocker proxy (T), and opposing defense (F) [PAGE 171–172, Table 3]. Group intercepts are partially pooled: Q_q∼N(μ_Q,σ_Q²), etc., estimated by penalized likelihood via lme4 [PAGE 172]. Gray zone: low-play players are shrinkage-pulled toward positional means, which is statistically defensible but means a backup appearing in mop-up time is regressed toward replacement-level-adjacent group averages rather than evaluated on raw play volume [PAGE 172].

Hop 6 — Replacement level. The openWAR-style roster method defines NFL-level player counts by position (e.g., 32 teams × 3 rushing RBs = 96; 32×4 receiving WRs = 128; QBs defined as <10% team-play involvement because the QB involvement distribution is bimodal) [PAGE 174–175, Figure 6]. Players below these thresholds are relabeled “Replacement” and share a common iPA^{repl} shadow baseline [PAGE 175]. Gray zone: the 10% QB cutoff and the roster counts are institutional conventions, not estimable parameters; a team could theoretically manipulate snap counts around the threshold to alter the shadow baseline.

Hop 7 — Points-to-wins conversion. EPA-based iPAR is divided by the points-per-win coefficient from a regression of team wins on season score differential: ŵ_t = α + β̂_S S_t, with β̂_S typically ≈0.03 wins per point, i.e. ≈33 points per win [PAGE 176]. WPA-based WAR is already on the win scale. Gray zone: the linear wins–differential relationship is an approximation that breaks down at extreme score differentials and presumes score differential is exogenous to the plays being evaluated.

Hop 8 — Uncertainty quantification. Entire team drives—not individual plays—are resampled across 1,000 simulated seasons to preserve within-drive play-calling dependence [PAGE 176]. Gray zone: drives are treated as exchangeable units, ignoring cross-week roster changes, injuries, and opponent adjustments; the procedure captures intra-season usage noise but not true inter-season parameter drift.

Overall audit: the framework is reproducible given public play-by-play and the nflscrapR codebase, but its causal claims are bounded by the absence of full participation data, the exclusion of weather and venue, the arbitrary replacement roster counts, and the linear points-to-wins calibration.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Multinomial logistic expected-points model [PAGE 167]:
Let \mathcal{Y}=\{\text{TD},\text{FG},\text{Safety},\text{No Score},\text{Opp Safety},\text{Opp FG},\text{Opp TD}\} with point values v(y)\in\{7,3,2,0,-2,-3,-7\}. For non-reference events y\neq\text{No Score},
\[
\log\frac{P(Y=y\mid\mathbf X)}{P(Y=\text{No Score}\mid\mathbf X)}=\mathbf X\boldsymbol\beta_y ,
\]
and
\[
P(Y=y\mid\mathbf X)=\frac{\exp(\mathbf X\boldsymbol\beta_y)}{1+\sum_{y'\neq\text{No Score}}\exp(\mathbf X\boldsymbol\beta_{y'})},\qquad
EP(\mathbf X)=\sum_{y\in\mathcal Y}v(y)P(Y=y\mid\mathbf X).
\]
Units: EP in points; \mathbf X contains down, yards-to-go, yard line, seconds remaining in half, and under-two-minutes indicator [PAGE 167–168].

Calibration error [PAGE 167–168]:
For bin b\in\{1,\dots,B\},
\[
e=\frac{\sum_y n_y e_y}{\sum_y n_y},\qquad e_y=\frac{\sum_b n_{y,b}e_{y,b}}{\sum_b n_{y,b}},
\]
where P^	hat_b(Y=y) and P_b(Y=y) are predicted and observed event proportions. LOSO CV yields e\approx0.013 for the multinomial model versus e\approx0.022 for the ordinal alternative [PAGE 168].

Win-probability GAM [PAGE 169–170]:
\[
\operatorname{logit}(WP_i)=s_1(E[S]_i)+s_2(sg_i)+s_3(E[S_{sg+1}]_i)+\beta_h h_i+\beta_u u_i+\beta_{tof}tof_i+\beta_{tdef}tdef_i ,
\]
with E[S]=EP+S, sg seconds remaining in game, h current half, u under-two-minutes indicator, tof and tdef team timeouts. WP\in[0,1] dimensionless. Team-strength terms are deliberately omitted [PAGE 169].

Play value added [PAGE 170]:
\[
\delta_{f,i}=V_f-V_i,\qquad V\in\{EP,WP\}.
\]
For scoring plays V_f=v(y). Example: EP_i\approx2.78\Rightarrow EPA\approx4.22\text{ points},\quad WPA\approx0.1266\text{ wins} [PAGE 170].

Air/YAC split [PAGE 170–171]:
Incomplete-pass time adjustment: subtract 5.7 seconds [footnote, PAGE 171]. Responses \Delta_{air},\Delta_{yac} are assigned observed \delta_{f,i} on incompletions and play-specific values on completions.

Multilevel division-of-credit model [PAGE 171–172, Table 3]:
\[
\delta_{f,i}=\mathbf X_i\boldsymbol\beta+Q_{q[i]}+C_{c[i]}\ (+H_{\iota[i]}+T_{\tau[i]}+F_{\nu[i]}\text{ as applicable}),
\]
with group intercepts Q_q\sim\mathcal N(\mu_Q,\sigma_Q^2), C_c\sim\mathcal N(\mu_C,\sigma_C^2), etc. Groups: Q (passer/rusher QB), C (targeted receiver), H (rusher), T (team-side-gap; seven levels per team, e.g. PIT-left-end … PIT-right-end [PAGE 173]), F (opposing defense). Estimated by penalized likelihood via lme4 [PAGE 172].

Individual points/probability above average and replacement [PAGE 174–175]:
\[
iPAA_p=\kappa_{p,\text{pass}}\,iPA_{p,\text{pass}}+\kappa_{p,\text{rush}}\,iPA_{p,\text{rush}},
\]
where \kappa are attempt/target counts by position [PAGE 174]. Replacement shadow iPAA^{repl}_p uses the player’s own \kappa against the replacement-level intercept; iPAR_p=iPAA_p-iPAA^{repl}_p [PAGE 175].

Wins conversion [PAGE 176]:
\[
\widehat W_t=\alpha+\widehat\beta_S S_t+\eta_t,\qquad \widehat\beta_S\approx0.03\ \frac{\text{wins}}{\text{point}},
\]
so points per win \approx1/0.03\approx33.3; EPA-based WAR_p=iPAR_p\widehat\beta_S\approx iPAA_p/33. WPA-based WAR is already in win units [PAGE 176].

Uncertainty [PAGE 176]: drive-level resampling, 1{,}000 simulated seasons.

Breakdown regimes: (i) missing on-field participation data prevents individual offensive-lineman and defensive-player WAR; (ii) no weather/venue covariates violates stationarity in extreme conditions; (iii) low-play shrinkage biases sparse players toward positional means; (iv) replacement thresholds are conventional, not estimated; (v) linear points-to-wins fails at score-differential extremes; (vi) 5.7-second constant misattributes snap-to-pass heterogeneity.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage is explicitly retrocausal: it reaches backward through football and cross-sport analytics to justify forward-looking player valuation. The expected-points foundation traces to Carter and Machol (1971) and Carroll et al. (1988), whose contextual yardage argument—that three yards on 3rd-and-2 differs from three yards on 3rd-and-7—motivates the EP framework [PAGE 164]. Burke (2009) and Katz and Burke (2017) popularized EPA/WPA publicly but did not disclose calculations, which the paper positions as a reproducibility gap it fills [PAGE 164]. Methodologically, the paper sits between nearest-neighbors approaches (Carter and Machol 1971; Dasarathy 1991; Causey 2015) and Goldner’s (2017) Markov absorption model, choosing multinomial logistic regression because scoring events have categorical, non-linear relationships to field position rather than a continuous point scale [PAGE 164–167].

For win probability, the genealogy extends to Goldner (2017), Tango, Lichtman, and Dolphin (2007), Causey (2013), and Lock and Nettleton (2014), the latter using random forests and explicitly modeling offensive vs. defensive team strength [PAGE 164–165]. The paper diverges by excluding team-strength indicators from WP so that player credit is not inflated on bad teams or deflated on good teams [PAGE 169].

The player-evaluation layer inherits adjusted-plus-minus logic from basketball (Rosenbaum 2004; Kubatko et al. 2007) and hockey (Macdonald 2011; Gramacy et al. 2013; Thomas et al. 2013), but football’s missing participation data forces a retreat from full 22-player indicators to only directly involved players plus contextual proxies [PAGE 165, 171]. Multilevel modeling enters via baseball catcher/pitcher work (Brooks, Pavlidis, and Judge 2015; Turkenkopf et al. 2015), grounded in Gelman and Hill (2007), who note all multilevel models are Bayesian in the partial-pooling sense [PAGE 172]. Replacement level follows openWAR (Baumer et al. 2015) and Thomas and Ventura (2015), adopting roster-based “poor man’s replacement” rather than an abstract free-market skill level [PAGE 174–175]. The points-to-wins step cites Zhou and Ventura (2017) on NFL score differential and wins [PAGE 176].

Multi-week traps embedded in this genealogy: (1) replacement-level rosters are season-specific; a player classified NFL-level in Week 1 can fall below the 96-RB or 128-WR cutoff by Week 10 due to injuries or snap-count changes, making the replacement shadow non-stationary across weeks [PAGE 174–175]; (2) QB involvement is bimodal (starters >80%, backups low), so the <10% involvement cutoff for replacement QBs is sensitive to week-to-week benching decisions [PAGE 175, Figure 6]; (3) drive-level resampling captures within-season usage noise but cannot simulate cross-season roster turnover, coaching changes, or rule modifications, so the 1,000 simulated seasons are intra-season counterfactuals, not true out-of-season forecasts [PAGE 176]; (4) season-to-season WAR correlations (QB 0.598; RB 0.431) exceed passer rating and yards-per-attempt but remain modest, indicating substantial week-to-week and year-to-year regression that a single-season WAR estimate cannot fully absorb [PAGE 179, Tables 4–5].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when an NFL front office faces a deadline—trade cutoff, waiver claim, or draft pick—it tends to regress to legible box-score habits (yards, passer rating, ANY/A) because those require no multilevel model, no participation data, and no drive-level resampling [PAGE 165]. nflWAR explicitly rejects this habit by grounding value in EPA/WPA and replacement-level wins, but the model’s own complexity creates a counter-trap: the quarterback is involved in nearly every passing play and many rushes, so partial pooling and shrinkage cannot fully separate QB value from offensive-line, scheme, and play-calling context. The paper acknowledges it has not controlled for specific linemen, schemes, or coaching [PAGE 177]. A counter-trap therefore emerges where WAR over-credits high-usage QBs and under-credits low-volume skill players who are shrinkage-pulled toward positional means [PAGE 172].

The clock is both a covariate and a strategic trap. The WP model includes seconds remaining, under-two-minutes indicator, and half as explicit terms [PAGE 169, Table 1], meaning end-of-half plays are evaluated against a clock-aware baseline. The “Philly Special” touchdown—4th-and-1 at the 1-yard line with 0:38 left—produces EPA≈4.22 and WPA≈0.1266 precisely because the pre-snap EP (≈2.78) already embeds clock and field-position context [PAGE 170]. A team treating WAR as a static seasonal scalar ignores that a play’s value is path-dependent on game state; a fourth-quarter garbage-time touchdown adds EP but little WP, while the same touchdown in a tied two-minute drill changes WPA dramatically. The EP model’s inclusion of seconds remaining in half (improving No-Score calibration) confirms that clock is not noise but a structural modifier of scoring probability [PAGE 168].

Recursive strategic layer: if teams adopt nflWAR for roster construction, they could optimize around its replacement-level definitions—e.g., managing QB snaps to stay below the 10% involvement threshold to preserve a “replacement” shadow baseline, or targeting team-side-gap rush-blocking proxies (T) in free agency [PAGE 174–175, 181]. This creates a reflexive loop: the metric intended to reveal value becomes a target for Goodhart-style manipulation, requiring the front office to model not just player contribution but other teams’ inference from the same metric.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: air yards are defined as perpendicular distance from line of scrimmage to the targeted/caught yard line, and YAC as perpendicular distance from catch to end of play [PAGE 170–171]. This geometric simplification assumes the pass trajectory and receiver path are orthogonal to the line of scrimmage; it does not model route depth, release timing, defensive coverage, or quarterback release velocity. Veto: any play with significant pre-snap motion, play-action, or crossing routes is compressed into a single air-yard scalar, biasing passer/receiver credit.

Biomechanical layer: player tracking, pre- and post-snap locations, and individual offensive-lineman identities are not publicly available [PAGE 165, 171, 181]. The team-side-gap group T aggregates seven rush-blocking contexts per team (e.g., PIT-left-end … PIT-right-end) but cannot isolate which lineman blocked which defender [PAGE 173]. Selection bias arises because running backs choose holes and avoid defenders, so T estimates reflect RB decision-making as much as blocking [PAGE 181]. Veto: individual offensive-line WAR is not estimable; defensive lineman and linebacker WAR is entirely absent.

Weather/venue layer: neither the EP multinomial model nor the WP GAM includes weather, temperature, wind, precipitation, dome vs. outdoor, or turf covariates [PAGE 167–170]. Calibration was performed over 2009–2016 all-conditions data [PAGE 166–168]. Veto: in sub-freezing, high-wind, or heavy-precipitation games, field-goal and passing scoring probabilities shift non-stationarily relative to the training distribution; the model’s e≈0.013 calibration guarantee does not extend to extreme-weather subsets.

Data-layer veto: the entire framework rests on nflscrapR play-by-play, which identifies only players directly involved in each play [PAGE 171]. Without proprietary player-participation data, the multilevel model cannot be expanded to offensive linemen, defensive backs, or linebackers without strong untestable assumptions [PAGE 171, 181–182]. The paper states the framework “can be easily extended” given participation data, but that extension is not present in the supplied artifact [PAGE 182].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Missing participation data (defensive extension). A researcher attempts to extend nflWAR to defensive linemen using only the supplied public play-by-play, assigning defensive credit via the existing opposing-defense intercept F_\nu. Veto condition: because no on-field defensive participation indicators exist, F_\nu conflates all 11 defenders into a single team-level effect. Verifiable prediction: estimated defensive “WAR” will correlate more strongly with team defensive rank than with any individual player’s snapshot grade; cross-team correlation of defensive intercepts will exceed 0.80, whereas position-specific participation-based models would show lower cross-team collinearity.

Scenario 2 — Extreme-weather calibration break. The EP model is applied to a subset of games with wind gusts >25 mph or temperature <20°F (e.g., late-season outdoor games in Green Bay, Buffalo, or Chicago). Veto condition: no weather covariates were included in training [PAGE 167–170]. Verifiable prediction: the LOSO-style calibration error e for field-goal and opponent-touchdown events in that weather subset will exceed the ordinal-model baseline e≈0.022 [PAGE 168], and win-probability bins will show systematic overprediction of passing success because cold-weather suppression of completion rates is not encoded in \mathbf X.

Scenario 3 — Replacement-level snap-count manipulation. A team strategically keeps a borderline quarterback’s involvement below the 10% team-play threshold [PAGE 175, Figure 6] so he is coded as “Replacement QB,” lowering the iPAA^{repl} shadow for other QBs on that roster or inflating the starter’s iPAR by depressing the replacement baseline. Veto condition: replacement level is a roster-count convention, not an estimable equilibrium [PAGE 174–175]. Verifiable prediction: season-to-season QB WAR correlation (currently 0.598 [PAGE 179, Table 4]) will fall below passer-rating correlation (0.478) in seasons where teams manipulate backup snaps around the 10% cutoff, because the WAR estimates become non-transitive across teams with different shadow baselines.
</RLVR_COUNTERFACTUAL_VETOES>