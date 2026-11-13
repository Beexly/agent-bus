---
source: "Positional Value in Soccer Expected League Points Added above Replacement.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 16
model: deepseek/deepseek-v4.1-flash-1017
words: 9506
---

<NATIVE_REASONING>
We need answer user: "DRIVE SOURCE..." They provided paper text. Need produce GSE+GSI Frontier Reasoning Foundry output with exact XML sections. Need >=1000 words total, THINK_TRACE >=400 words. ZERO betting lines, no spreads/totals/moneylines/odds. Need formal LaTeX, units, assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need 3 verifiable RLVR veto scenarios + predictions.

Need understand source. Paper on soccer positional value eLPAR. Need analyze deep. Must avoid betting lines. We can mention "win/draw/loss probabilities" and league points (3-1-0) allowed? It's not betting line. Need no odds. Avoid "moneyline" even though paper market value has Euros. Money values okay? Invariant says zero betting lines: never mention spreads, totals, moneylines, odds. Can mention market values, wages, Euros. Avoid "betting" entirely maybe. Could mention "wagering" no. Fine.

Need produce robust. Need cite exact [PAGE N] with verbatim quotes. Need formal equations, units, assumptions, breakdown regimes. We need explain Skellam regression, eLPAR. Need ensure LaTeX equations with units? eLPAR units: league points per game. Ratings dimensionless (FIFA points? 0-100). λ1 λ2 are Poisson rate parameters goals per game? In Skellam regression log λ = b^T x, x rating differences in FIFA rating points. Coeffs units: log(goals per match) per rating point? Actually log λ1 dimensionless, x rating points. b units inverse rating point. eLPAR = 3 δPw +1 δPd, units points per game. Formation averaging eLPAR = (1/T)Σ tφ eLPARp(φ); T minutes, tφ minutes. Good.

Need source quotes exactly. Need cite [PAGE 1 of 16]? The instruction says [PAGE N] markers. We can use [PAGE 1], [PAGE 2], etc. Need exact verbatim quotes. Let's collect key quotes:

PAGE 1: "Soccer is undeniably the most popular sport world-wide, but at the same time it is one of the least quantified." "successful advanced metrics such as the (adjusted) +/- that allows for division of credit among a basketball team’s players ... fail to work in soccer due to severe co-linearities" "using data from (i) approximately 20,000 games from 11 European leagues for 8 seasons, as well as, (ii) player ratings from FIFA, we estimate through a Skellam regression model the importance of every line in winning a soccer game." "translate the model to expected league points added (per game) above a replacement player eLPAR." "market clearly under-values defensive line players relative to the goalkeepers."

PAGE 2: "The first step towards this - and the main focus of this study - is quantifying the positional values in soccer." "we use as independent variables in our model the difference on the average rating of the four team lines (attack, middle-field, defense and goalkeeping)." "does not capture the exact performance of a player in the games he played." "if these data ... are available the exact same framework can be used to evaluate the actual league points added above replacement."

PAGE 3: "21,374 in total" "11,060 players" "average of 2 rating readings per season" "Pearson chi-squared dispersion test" "dispersion statistic is very close to 1 (1.01 and 1.1 respectively)" "correlation between the number of goals scored from the home and away team is also small and equal to -0.06." "Bivariate Poisson model ... can only model data with positive correlations" "directly model the difference between the two Poisson processes"

PAGE 4: Equation (2.1) bivariate Poisson, (2.2) Skellam pmf. Quote "Equation (2.2) describes a Skellam distribution and clearly shows that the distribution of Z does not depend on the correlation between the two Poisson distributions X and Y." "drawback ... not able to provide estimates on the actual game score, but rather only on the score differential."

PAGE 5: "we grouped the various player positions to four distinct groups, namely, goalkeeping, attack, middlefielders and defense." "how an one-unit increase in the rating of a player’s position impacts the probability of his team winning." "if we substitute our current striker who has a FIFA rating of 79, with a new striker with a FIFA rating of 80, how do our chances of winning alter?" "merge positions to four groups" 
PAGE 6: Model 2.1: four covariates xD, xM, xA, xGK. Equations 2.3-2.5. Quote "The random variable Z follows a Skellam distribution, where its parameters depend on the model’s covariates x = (xD, xM, xA, xGK)" "log(λ1) = bT1 · x" "log(λ2) = bT2 · x"
PAGE 7: Table 1 coefficients. Quote maybe "The coefficients for the two parameters are fairly symmetric." "increase in the average rating of any line of a team contributed positively to its chances of winning" "all lines are practically on top of the y = x line." "our model does not provide a draw probability higher than 30% ... base rate for draws ... about 25%."
PAGE 8: "replacement level is set at the 80% of the positional average rating." "average players have value" "replacement player can be thought of as a free player" 
PAGE 9: Definition eLPAR: "eLPARp describes how many league points (win=3 points, draw = 1 point, loss = 0 points) p is expected to add for his team." "a defender substituting a replacement player in a 5-3-2 formation will add a different value ... compared to a formation with only 3 center-backs" "Had the formation been available ... multilevel model"
PAGE 10: Step 1-3 and Equation 3.1 eLPARp(φ) = 3 · δPw + 1 · δPd. "by definition a replacement player has eLPAR = 0" "for a given player rating goal keepers provide the smallest expected league points above replacement" "a 4-5-1 system benefits more from an attacker with a rating of 90 as compared to a defender with the same rating, while in a 3-5-2 formation the opposite is true." Equation 3.2 average weighted by minutes.
PAGE 11: "for the same player rating, a defender adds more expected league points above replacement, followed by an attacker ... middlefielder ... goal keeper ... least." 
PAGE 12: "Even though goalkeepers are among the lowest paid players in soccer, they still are overpaid in terms of expected league points contributions. Defenders are undervalued when it comes to contributions in winning." "teams are willing to pay multiples in premium for 1 expected league point coming from a goalkeeper with 88 FIFA rating as compared to 1 expected league point ... from a defender with 86 FIFA rating."
PAGE 13: Rule of Thumb 3.1: "Buy bulk expected league points at a discount through defense and pay a smaller premium for an average goalkeeper". "with B = 6 millions..." example; "1 expected league point at a 15% discount". 
PAGE 14: Tables. "Both teams for example appear to overpay their goalkeepers based on what expected league points above replacement per 90 minutes they offer."
PAGE 15: "average average discrepancy ... around 4% ... Manchester United and 3% for Barcelona." "other teams ... can achieve significant savings" "immediate improvement ... consider actual formation" "actual game ratings ... estimate actual league points added over replacement" "American Football (NFL) ... Madden"
PAGE 16 references.

Need deep multi-hop derivation and gray-zone audit. Need discuss assumptions, singularity/breakdown regimes. Need identify exact breakdown regimes: eLPAR linear extrapolation from ratings beyond observed support (ratings 50-99, but model trained on lineup averages around? FIFA 0-100; replacement 80% avg ~56; eLPAR computed for 50-99. Breakdown when rp < replacement? If rp below replacement, eLPAR negative. If formation changes lineup average nonlinearly, averaging line rating assumes equal marginal value within line, no within-line heterogeneity. If player plays multiple lines, average by minutes assumes linear mixing and no interactions. Skellam independence/correlation issue: model Z = X-Y ignores covariance; paper says Skellam pmf independent of correlation but if λ3? Need be precise: The Skellam distribution of difference of independent Poissons. Equation 2.2 claimed same if bivariate with λ3? Actually difference of bivariate Poisson with covariance λ3 has same marginal distribution as difference of independent Poissons with means λ1+λ3? Wait let's check. If (X,Y) bivariate Poisson with parameters λ1, λ2, λ3, then X~Poisson(λ1+λ3), Y~Poisson(λ2+λ3), Cov=λ3. Difference Z = X-Y. Its PGF? E[t^Z]=exp(λ1(t-1)+λ2(t^{-1}-1)+λ3(t + t^{-1}-2))? Wait bivariate Poisson has pgf exp(λ1(t-1)+λ2(s-1)+λ3(ts-1)). For Z difference t^X s^Y with s=t^{-1}: exp(λ1(t-1)+λ2(t^{-1}-1)+λ3(t*t^{-1}-1)) = exp(λ1(t-1)+λ2(t^{-1}-1)+λ3(1-1)) = exp(λ1(t-1)+λ2(t^{-1}-1)). So λ3 cancels. Marginal means of X and Y are λ1+λ3 and λ2+λ3, but difference distribution uses λ1,λ2? Hmm in bivariate Poisson parameterization, marginal means λ1+λ3 and λ2+λ3. Difference pgf exp(λ1(t-1)+λ2(t^{-1}-1)) independent of λ3. So difference distribution has Skellam(λ1, λ2) but not equal to independent Poissons with marginal means? The paper says "Equation (2.2) is exactly the same as the distribution of the difference of two independent Poisson variates [22]." Yes. So regression estimates λ1,λ2 not actual marginal scoring rates? It models difference only. Good. Need mention this singularity: if trying to recover actual home/away goal rates, non-identifiability due to λ3; only difference identified. This is a breakdown regime for score-level predictions. eLPAR doesn't need actual score. Good.

Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. We need adapt to paper. Since soccer paper no weather/biomechanics. Need "veto proof" likely evaluate if physical/biomechanical/weather variables can invalidate eLPAR. Need state no such layers in source dataset; eLPAR is static FIFA rating, line averages. Cross-layer veto: if optical tracking/GPS data show player spatial value, biomechanical fatigue, weather effects on style, then static eLPAR not sufficient. Need provide proof via source limitations: "does not capture exact performance"; "static player ratings"; missing formation; no substitutions; no game-level ratings. Weather not in data. Physical/biomechanical: no tracking. Need maybe formalize veto conditions: If unmodeled variable W changes point probability δP more than rating-induced δP, then eLPAR biased. Define sensitivity ∂eLPAR/∂W. Need "veto proof" that no physical/biomechanical/weather claim can be sourced from paper. Use source citations. Need maybe discuss biomechanical proxies: minutes T in Eq 3.2, but no fatigue or intensity. Weather absent. So cross-layer veto: paper's model doesn't support causal physical claims; any such add-on must be validated and not override unless it changes the lineup line average or probability. Need "physical/biomechanical/weather veto proof" maybe produce formal veto: If weather/conditions alter λ1,λ2 beyond x covariates, then eLPAR conditional on weather. If no data, cannot adjudicate. Need say "veto not triggered within paper's scope, but external layer cannot be inserted into eLPAR without re-estimating model." Good.

Need recursive theory of mind: crisis habit regression vs counter-trap vs clock. This is unusual. Need interpret: "Crisis habit regression vs counter-trap vs clock." Need address in soccer/player evaluation context? Maybe "crisis habit regression" means under pressure teams revert to habits (long ball, defensive shell); "counter-trap" means opponent exploits predictable habits; "clock" means game state/time. Need use paper's static pre-game model limitations. It doesn't model within-game state, substitutions, formation changes. Need explain recursive theory of mind: player/manager anticipate opponent, eLPAR static doesn't capture game-state strategic adaptation. Need contrast: crisis habit regression (players revert to positional habits under stress), counter-trap (opponent's anticipatory exploitation), clock (time remaining/score state). Need formal-ish constructs and cite missing substitutions/in-game adjustments. Need maybe define variables. Need avoid betting. Need mention no in-game data. Good.

Need RLVR counterfactual vetoes: 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning from verifiable rewards? Need create three scenarios that can be tested and would veto claims. Need predictions. Need align with source. Example:
1. Formation-context veto: Recompute eLPAR with actual formations and within-line positions. Prediction: ranking GK lowest and defender high may hold or fail depending formation; if actual formation distribution differs, player eLPAR changes. Verifiable by data with formations. Veto condition: If formation-specific eLPAR flips sign/order vs aggregate, aggregate positional premium claim is vetoed.
2. Game-level rating/dynamic performance veto: Use actual game ratings/tracking to replace static FIFA. Prediction: eLPAR vs actual LPAR correlation low for players with high variance; if actual points added diverges, market inefficiency conclusions not validated.
3. Weather/biomechanical/context veto: Add weather/pitch/travel/fatigue covariates. Prediction: if coefficients on line ratings attenuate or eLPAR changes by > threshold, static eLPAR is not robust. Need verifiable via data. But source doesn't have weather; scenario could use external data. Need "RLVR" maybe verifiable reward: predictions with pass/fail metrics. Could mention pre-registered thresholds. Need exactly 3. Good.

Need all sections exact XML tags. Need >=1000 words. THINK_TRACE >=400. Overall maybe 2500-3500 words. Desired oververbosity 5. Need not overdo but must satisfy word count. We need include formal LaTeX. Need not mention betting. Need cite [PAGE N] markers and verbatim quotes. Use quotes exactly. Need ensure quotes are exact from source; use minor punctuation. Use [PAGE 3] etc.

Need structure. Let's plan:

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit (>=400 words). Start: source is a pre-game expected points model, not physical tracking. Multi-hop:
1. Data: 21,374 games, 11 leagues, 2008-09 to 2015-16; FIFA ratings; 11,060 players. [PAGE 3]
2. Goal differential Z = X-Y; Poisson marginals; overdispersion stats 1.01,1.1; correlation -0.06; bivariate Poisson cannot model negative corr; use Skellam. [PAGE 3-4]
3. Model: log λ1 = b1^T x, log λ2 = b2^T x; x are line-average rating differences. Table coefficients: xD 0.02/-0.02; xM 0.02/-0.02; xA 0.01/-0.01; xGK 0.001/-0.002. [PAGE 7]
4. eLPAR: replacement = 80% positional average rating ≈56; change δPw δPd δPl when substitute replacement with p; eLPAR=3δPw+δPd; formation-specific; minutes weighted. [PAGE 8-10]
5. Market: defenders undervalued, GKs overvalued. [PAGE 12]
Gray-zone audit: linear log-link extrapolation; rating differences; aggregation bias; formation missing; static ratings; no individual player effects; no substitutions; no weather/physical. Singularity regimes: λ1,λ2 positive; log link keeps positive but extreme linear predictors produce overflow/underflow; eLPAR probability change must be bounded; if δP sum? δPw+δPd+δPl=0; eLPAR can be negative if below replacement; draw probability cap 30% [PAGE 7] means extreme games not modeled well. Non-identifiability of λ3/actual score. Good.

Need quote exact. E.g. "The random variable Z follows a Skellam distribution, where its parameters depend on the model’s covariates x = (xD, xM, xA, xGK)" [PAGE 6]. "eLPARp describes how many league points (win=3 points, draw = 1 point, loss = 0 points) p is expected to add for his team." [PAGE 9]. "the replacement level is set at the 80% of the positional average rating." [PAGE 8]. Good.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Need formal LaTeX, units, page citations, breakdown. Include equations:

Let i game, h/a, π∈{D,M,A,GK}; x_{i,π} = \bar r_{h,π,i} - \bar r_{a,π,i}, units FIFA rating points (dimensionless score). Z_i = X_i - Y_i ∈ ℤ, goals. Skellam:
P(Z=z)=e^{-(λ1+λ2)}(λ1/λ2)^{z/2} I_{|z|}(2√(λ1λ2)) maybe source equation has I_z not abs? Source eq (2.2): P(z)= e^{λ1+λ2} (λ1/λ2)^{z/2} I_z(2√λ1λ2). Wait they wrote e^{λ1+λ2}? Actually Skellam pmf should e^{-(λ1+λ2)}. Source text says "P(z) = eλ1+λ2 · ..." maybe PDF omitted minus? It shows eλ1+λ2 without minus? It likely is e^{-(λ1+λ2)} but OCR missing. We should use correct Skellam and note source equation (2.2) as printed maybe. Need not challenge? We can state standard form and cite. Use e^{-(λ1+λ2)}. But quote source? If we write equation, maybe exact? The source text has "eλ1+λ2" likely missing minus due OCR. We can write standard. Need not say source has typo? Could mention "Equation (2.2) describes a Skellam distribution" quote. Good.

Regression: log λ_{1,i}=b_1^T x_i, log λ_{2,i}=b_2^T x_i. λ units goals per match. b units log(goals/match) per FIFA rating point. eLPAR:
δP_w = P(W|r_p)-P(W|r_repl), etc. eLPAR_p(φ)=3δP_w+1δP_d+0δP_l, units league points per game/90. Note 3 points per win, 1 per draw. Weighted: eLPAR_p = (1/T)Σ_φ t_φ eLPAR_p(φ), T,tφ minutes. Need mention if T=0 singular; if formation set empty; if replacement rating not in support. Replacement: r_repl,φ,λ = 0.8 \bar r_{φ,λ}? Source says 80% positional average. Units rating points. Good.

Coefficient table: include perhaps table or list. Need not all. But formal. Need cite [PAGE 7]. "The coefficients for the two parameters are fairly symmetric." [PAGE 7]. "increase in the average rating of any line of a team contributed positively to its chances of winning" [PAGE 6? Actually page 6? The quote on page 6? Let's check: Page 6 text: "An additional thing to note is that increase in the average rating of any line of a team contributed positively to its chances of winning (as one might have expected)." Wait that appears Page 6? The provided page 6 includes Table 1? Actually page 6 text ends with model, page 7 table. The quote is page 6? Let's review: In PAGE 6 text: after Table? Wait source text page 6 includes "Table 1 shows the regression coefficients. It is interesting..."? Actually the text under PAGE 6 begins "6 KONSTANTINOS..." and includes model and then "Table 1 shows..."? Wait the provided page 6 includes up to "The random variable Z follows..." and equations. Then PAGE 7 starts "Variable log(λ1)..." and after table, "It is interesting to note that the coefficients..." Hmm The quote "Table 1 shows..." is before page 7? Let's see provided: PAGE 6 text: ends at equations (2.5). Then PAGE 7 starts with table. Actually "Table 1 shows the regression coefficients" appears in PAGE 6? Let's scroll: In provided PAGE 6: after Model 2.1 and equations, no table. Wait I see in prompt: PAGE 6 includes "Table 1 shows the regression coefficients. It is interesting..."? Let's re-read: 
--- [PAGE 6 of 16] ---
6 KONSTANTINOS...
... Model 2.1...
... log(λ2) = bT2 · x (2.5)
Table 1 shows the regression coefficients. It is interesting to note...
Actually yes after (2.5) there is "Table 1 shows..." and then page break? Wait the prompt shows: 
(2.5) log(λ2) = bT
2 · x
Table 1 shows the regression coefficients. It is interesting to note that the coeﬃcients
for the two parameters are fairly symmetric. λ1 and λ2 can be thought of as the mean...
... Figure 3 (left)...
This all is PAGE 6? Then PAGE 7 starts with table. Hmm in prompt, the table is PAGE 7, but the text "Table 1 shows..." appears at end of PAGE 6. Yes. So quote [PAGE 6] for "Table 1 shows..." and "increase in average..." Maybe. Need be careful with page numbers. Let's use quotes with page where clearly located:
- "The random variable Z follows a Skellam distribution..." [PAGE 6].
- "Table 1 shows the regression coefficients." [PAGE 6].
- "increase in the average rating of any line of a team contributed positively to its chances of winning" [PAGE 6] (it is on page 6? Actually yes maybe). 
- Table coefficients [PAGE 7].
- Calibration [PAGE 7].
- replacement [PAGE 8].
- eLPAR definition [PAGE 9].
- eLPAR formula [PAGE 10].
- figure 5 findings [PAGE 11].
- market [PAGE 12].
- rule [PAGE 13].
- tables [PAGE 14].
- conclusions [PAGE 15].

Need "breakdown regimes": 
1. Non-identifiability: λ3 covariance cancels; cannot recover actual score or marginal means from Z alone. Source: "the distribution of Z does not depend on the correlation..." [PAGE 4]; "not able to provide estimates on the actual game score, but rather only on the score differential" [PAGE 4].
2. Linear extrapolation: log λ = b^T x; if x far outside training support, λ exponential; probabilities saturate. eLPAR computed ratings 50-99 [PAGE 10], but model fit line averages; extreme individual substitution into line average may be outside. 
3. Aggregation bias: line average assumes all players in line equal; source: "independent variable captures the rating of the whole line as compared to a single position/player" [PAGE 6? Actually page 6: "The interpretation of the model slightly changes now, since... independent variable captures the rating of the whole line as compared to a single position/player." Yes [PAGE 6]. 
4. Formation missing: "Had the formation been available..." [PAGE 9]. "model captures the formation-average value" [PAGE 10].
5. T=0 in Eq 3.2; no minutes; missing formation fraction.
6. Draw cap: model doesn't provide draw probability >30%, base rate 25% [PAGE 7]. So extremely balanced games? 
7. Static ratings: "does not capture the exact performance" [PAGE 2]; "static player ratings" [PAGE 15]. 
Need mention units.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Need historical/scientific lineage & multi-week traps. Discuss lineage: Woolner VORP baseball; James Win Shares; basketball +/-; xG; xGC; tracking; Skellam 1946; Poisson soccer; bivariate Poisson Karlis/Ntzoufras; replacement level. Multi-week traps: using aggregate line ratings as individual value; treating eLPAR as actual performance; overfitting to market values; ignoring formation; assuming static ratings causal; using draw probability cap; conflating expected points with wages; cross-sport Madden extrapolation. Need cite. Need mention "multi-week traps" meaning traps that persist over multiple weeks/seasons? Could discuss seasonal rating updates, injuries, tactical drift. The paper says ratings change few times per season [PAGE 2]. Multi-week trap: FIFA ratings static over weeks; market values may update; eLPAR stale. Need mention no in-game substitutions data [PAGE 15]. Good.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Need define and apply. Crisis habit regression: under score/time pressure, teams revert to formation habits; model uses formation-average eLPAR, not state-dependent. Counter-trap: opponent anticipates habit, changes formation/pressing; eLPAR assumes line rating independent of opponent's adaptive response. Clock: Eq 3.2 weights by minutes, but source lacks substitution timing; no within-game clock. Need maybe formalize:
Let s_t = (score, time, red cards, fatigue). Habit map H: s_t -> formation φ_t. eLPAR_p = E_{φ~H(s_t)}[eLPAR_p(φ)] not equal to (1/T)Σ tφ eLPAR_p(φ) if φ_t endogenous to s_t and opponent. Counter-trap: opponent chooses φ^opp to minimize P(W|φ,φ^opp); our model has no interaction terms. Clock: late-game risk changes marginal value of draw vs win; eLPAR weights fixed 3/1/0. If draw utility changes? Actually league points fixed. But time remaining changes probability. The model pre-game only. Need "recursive theory of mind" maybe players recursively model opponent. Use source quote "teams play different formations over different games (or even during the same game after in-game adjustments)" [PAGE 10]. "substitutions during a game (another piece of information not available to us)" [PAGE 15]. Good. Need answer "crisis habit regression vs counter-trap vs clock" maybe in terms of decision theory. We can say: The paper's static eLPAR is a clock-free, counter-trap-free prior. Crisis habit regression would be observed if managers under pressure choose familiar formations; counter-trap if opponents exploit that predictability; clock if late-game state changes optimal risk. All three are unmodeled. Verification: need play-by-play formation/substitution/time data. Good.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Need formal. Source has no physical/biomechanical/weather data. eLPAR only uses FIFA ratings and line averages. It cannot support veto by physical layer; but physical layer can veto external claims. Define unmodeled vector M_t (biomechanical load, sprint distance, accelerations, weather). If M_t affects λ or δP independent of x, then eLPAR_p is biased: eLPAR_p^true = eLPAR_p(x) + E[3∂P_w/∂M + ∂P_d/∂M]·ΔM. Since source lacks M, cannot estimate. "Proof" via source limitations: paper says "does not capture the exact performance" [PAGE 2]; "static player ratings" [PAGE 15]; no tracking except future directions. The paper mentions optical tracking can enhance [PAGE 2] and future game ratings composed through optical tracking [PAGE 15]. Weather absent. Therefore physical/biomechanical/weather veto can only be adjudicated by re-estimating with those covariates; within paper, no cross-layer veto is licensed. Need maybe say no claim about weather or biomechanics can be accepted as source-grounded; if someone asserts eLPAR is physically invariant, veto. Use exact quotes: "this is an expected value added, i.e., it is not based on the actual performance of a player but rather on static ratings for a player" [PAGE 10]. "We can also include information about substitutions during a game (another piece of information not available to us)." [PAGE 15]. Good.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions. Need make each clear with setup, verifier, prediction, veto condition. Maybe use formal:
Scenario 1: Formation-resolved eLPAR. Data: actual formations and within-line positions. Compute eLPAR_p(φ_t) and minute-weighted. Prediction: 4-4-2 near-equal values [PAGE 10] but 3-5-2 defender > attacker [PAGE 10]. Veto: if aggregate "defender > attacker for all ratings" fails? Actually source says average across four formations defender > attacker [PAGE 11]. If formation-weighted actual distribution reverses ranking by > threshold, veto aggregate claim. Use threshold e.g., median rank reversal >0.05 points/90. 
Scenario 2: Game-level ratings vs static FIFA. Use actual game ratings/tracking. Prediction: eLPAR from static ratings correlates with actual LPAR but diverges for players with high within-season rating variance; market inefficiency claims (GK overpaid, defenders undervalued) should persist only if actual LPAR ranks similar. Veto if Spearman correlation <0.5 or sign of GK-defender premium flips. Need source quote "if these data ... available the exact same framework can be used to evaluate the actual league points added above replacement" [PAGE 2].
Scenario 3: Context/physical/weather covariates. Add weather/pitch/travel/fatigue or biomechanical load. Prediction: line-rating coefficients in Table 1 attenuate; eLPAR changes. Veto if adding covariates changes eLPAR by >0.05 points/90 for >10% players or if weather coefficient significant and line coefficients lose significance. Need careful no betting. Use "pre-registered thresholds" and "verifiable via held-out likelihood/calibration." 
Need "RLVR" maybe mention reward function: reward = 1 if prediction passes; else veto. Use "counterfactual veto" means if scenario shows contradictory result, invalidate the claim. Good.

Need overall word count. Let's draft with sufficient detail. Need not mention "odds" etc. Avoid "betting lines". Don't mention "spread". We can mention "score differential" okay? "spread" word? Invariant says never mention spreads, totals, moneylines, or odds. "score differential" is not spread. Avoid word "spread" entirely. "totals" maybe avoid. "odds" avoid. Good.

Need maybe not use "moneyline" even in negative. Avoid all those words. Also avoid "betting". Good.

Need ensure "ZERO TOY EQUATIONS" - we provide formal equations, units, assumptions, singularity. No fake ratios. Good.

Need "cite exact [PAGE N] markers and verbatim quotes." We need quotes accurate. Let's get exact quote text from prompt. Use curly quotes? We'll use straight quotes. Need verbatim. Check each:

PAGE 1: "Soccer is undeniably the most popular sport world-wide, but at the same time it is one of the least quantified." Exact yes.
PAGE 1: "successful advanced metrics such as the (adjusted) +/- that allows for division of credit among a basketball team’s players (and ultimately to obtain a view of the wins contributed by a player), fail to work in soccer due to severe co-linearities (i.e., the same players being on the field for the majority of the time)." We can quote shorter: "fail to work in soccer due to severe co-linearities" exact.
PAGE 1: "we estimate through a Skellam regression model the importance of every line in winning a soccer game." exact.
PAGE 1: "expected league points added (per game) above a replacement player eLPAR" exact.
PAGE 2: "we use as independent variables in our model the difference on the average rating of the four team lines (attack, middle-field, defense and goalkeeping)." Note source has "middle-ﬁeld" ligature. We can use "middle-field" maybe not exact? Better quote with original "middle-ﬁeld" impossible? Use "middle-field" maybe acceptable. We can quote other exact.
PAGE 2: "does not capture the exact performance of a player in the games he played." exact.
PAGE 3: "21,374 in total" exact.
PAGE 3: "dispersion statistic is very close to 1 (1.01 and 1.1 respectively)" exact.
PAGE 3: "correlation between the number of goals scored from the home and away team is also small and equal to -0.06." exact.
PAGE 4: "Equation (2.2) describes a Skellam distribution and clearly shows that the distribution of Z does not depend on the correlation between the two Poisson distributions X and Y." exact.
PAGE 4: "not able to provide estimates on the actual game score, but rather only on the score differential." exact.
PAGE 5: "how an one-unit increase in the rating of a player’s position impacts the probability of his team winning." exact.
PAGE 6: "The random variable Z follows a Skellam distribution, where its parameters depend on the model’s covariates x = (xD, xM, xA, xGK)" exact.
PAGE 6: "The interpretation of the model slightly changes now, since, as we will elaborate on later, the independent variable captures the rating of the whole line as compared to a single position/player." exact? Yes.
PAGE 6: "increase in the average rating of any line of a team contributed positively to its chances of winning" exact.
PAGE 7: "The coefficients for the two parameters are fairly symmetric." exact? It appears Page 6 maybe. Let's place [PAGE 6] or [PAGE 7]? In prompt, after table page 7, text: "It is interesting to note that the coefficients for the two parameters are fairly symmetric." That is after table on page 7? Wait provided PAGE 7 begins with table and then after table: "It is interesting to note that the coefficients for the two parameters are fairly symmetric. λ1 and λ2 can be thought..." Yes that's PAGE 7. Good. Use [PAGE 7].
PAGE 7: "all lines are practically on top of the y = x line." exact.
PAGE 7: "our model does not provide a draw probability higher than 30% for any of the games in the test set" exact.
PAGE 8: "replacement level is set at the 80% of the positional average rating." exact.
PAGE 8: "average players have value" exact (with exclamation maybe). 
PAGE 9: "eLPARp describes how many league points (win=3 points, draw = 1 point, loss = 0 points) p is expected to add for his team." exact.
PAGE 9: "a defender substituting a replacement player in a 5-3-2 formation will add a different value of expected points as compared to a formation with only 3 center-backs in the defensive line." exact? Source: "a defender substituting a replacement player in a 5-3-2 formation will add a diﬀerent value of expected points as compared to a formation with only 3 center-backs in the defensive line." yes.
PAGE 9: "Had the formation been available in our dataset we could have built a multilevel model" exact? Source: "Had the formation been available in our dataset we could have built a multilevel model, where each combination..." yes.
PAGE 10: "eLPARp(φ) = 3 · δPw + 1 · δPd" exact equation.
PAGE 10: "by definition a replacement player has eLPAR = 0" exact.
PAGE 10: "for a given player rating goal keepers provide the smallest expected league points above replacement" exact.
PAGE 10: "a 4-5-1 system benefits more from an attacker with a rating of 90 as compared to a defender with the same rating, while in a 3-5-2 formation the opposite is true." exact.
PAGE 10: "eLPARp = 1 T X φ tφ · eLPARp(φ)" equation. We can write standard.
PAGE 11: "for the same player rating, a defender adds more expected league points above replacement, followed by an attacker with the same rating." exact? Source: "for the same player rating, a defender adds more expected league points above replacement, followed by an attacker with the same rating. A middleﬁelder..." yes.
PAGE 12: "Even though goalkeepers are among the lowest paid players in soccer, they still are overpaid in terms of expected league points contributions. Defenders are undervalued when it comes to contributions in winning." exact? Source: "Even though goalkeepers are among the lowest paid players in soccer, they still are overpaid in terms of expected league points contributions. Defenders are undervalued when it comes to contributions in winning." yes.
PAGE 12: "teams are willing to pay multiples in premium for 1 expected league point coming from a goalkeeper with 88 FIFA rating as compared to 1 expected league point (i.e., the same performance) coming from a defender with 86 FIFA rating." exact? Source: "teams are willing to pay multiples in premium for 1 expected league point coming from a goalkeeper with 88 FIFA rating as compared to 1 expected league point (i.e., the same performance) coming from a defender with 86 FIFA rating." yes.
PAGE 13: "Buy bulk expected league points at a discount through defense and pay a smaller premium for an average goalkeeper" exact.
PAGE 15: "We can also include information about substitutions during a game (another piece of information not available to us)." exact.
PAGE 15: "our current study is based on static player ratings obtained from FIFA." exact? Source: "Furthermore, our current study is based on static player ratings obtained from FIFA." yes.
PAGE 15: "actual game ratings for players will allow us to estimate the actual league points added over replacement by a player over the course of a season." exact? Source: "actual game ratings for players will allow us to estimate the actual league points added over replacement by a player over the course of a season." yes.
PAGE 15: "We will explore these direction as part of our future research" exact? yes.
PAGE 2: "if these data (i.e., game-level player ratings) are available the exact same framework can be used to evaluate the actual league points added above replacement." exact? Source: "if these data (i.e., game-level player ratings) are available the exact same framework can be used to evaluate the actual league points added above replacement." yes.

Need include "PAGE 14" maybe tables and overpay GKs. Quote: "Both teams for example appear to overpay their goalkeepers based on what expected league points above replacement per 90 minutes they offer." exact? Source: "Both teams for example appear to overpay their goalkeepers based on what expected league points above replacement per 90 minutes they oﬀer." yes [PAGE 14].
PAGE 14: "average average discrepancy" no need.

Need final answer only XML sections. We can include LaTeX. Need no markdown? XML tags with text. Fine.

Need ensure word count >1000. We'll produce maybe 3000 words. Need not overdo. But desired oververbosity 5. We'll write thorough but concise. THINK_TRACE >=400 words. Let's count mentally. We'll write ~600 words. Others ~400 each. Total >2500. Good.

Need mention "This manuscript is for review purposes only."? Not necessary.

Need "Drive source" maybe answer as GSE+GSI Frontier Reasoning Foundry. Could introduce? The required exact XML sections. No preamble? We can just output tags.

Let's draft.

Need avoid "odds". Avoid "spread". Avoid "totals". Avoid "moneyline". We can say "win/draw/loss probabilities". "League points" is okay. "Market values" okay. "Wages" okay. 
Need maybe avoid "betting" not use.
Need "ZERO BETTING LINES" satisfied.

Potential issue: "score differential" could be considered spread? It says never mention spreads; "score differential" is not "spread". Fine. 
Need "RLVR" maybe no definition? We can define "RLVR-style verifiable reward veto". Good.

Let's write formal equations with units.

Detailed SOURCE_OPERATORS_AND_EQUATIONS:
- Define x_{i,\pi} = \bar r_{h,\pi,i}-\bar r_{a,\pi,i} ∈ [-100,100] FIFA rating points. Actually average line rating difference.
- Model 2.1:
Z_i = X_i - Y_i, Z_i ∈ ℤ goals.
P(Z_i=z)= e^{-(λ_{1i}+λ_{2i})} (λ_{1i}/λ_{2i})^{z/2} I_{|z|}(2√(λ_{1i}λ_{2i})), z∈ℤ. Source equation (2.2) uses I_z. We can note standard absolute order. λ units goals per match. 
- log link: log λ_{1i}=b_{1,0}+b_{1,D}x_{i,D}+... ; log λ_{2i}=b_{2,0}+... . b units per FIFA rating point. 
- δP_w = P(W|r_p,φ)-P(W|r_repl,φ), etc. eLPAR_p(φ)=3δP_w+δP_d (0δP_l). Units league points per game. δP dimensionless probabilities. 
- eLPAR_p = (1/T)Σφ tφ eLPAR_p(φ); T>0 minutes; tφ minutes. If T=0 singular. 
- Replacement r_repl,φ,λ = 0.8 \bar r_{φ,λ}. Need maybe use average rating distribution. 
- Assumptions: conditional independence? Actually Skellam regression assumes Z distribution given x; no interactions; linear log-rate; line average sufficient; formation-average coefficients; static ratings; replacement threshold. 
- Breakdown regimes: λ positivity; extreme x; T=0; empty formation; below replacement; non-identifiability λ3; draw cap; within-line heterogeneity; missing formation; player multi-line; substitutions; no weather/biomechanics. 
Need mention "source equation (2.2)" maybe quote. Good.

Need "source operators" maybe use operators: difference, line aggregation, log-link, Skellam, probability-delta, points functional, minute-weighted average. Nice.

RETROCAUSAL_GENEALOGY:
Need "retrocausal" maybe trace lineage backward from eLPAR to Skellam/VORP. Use "retrocausal genealogy" as historical lineage. Multi-week traps. Good.

RECURSIVE_THEORY_OF_MIND:
Need maybe use "crisis habit regression" as formal:
Let H_t = (score state, time, sending-off, fatigue). Habit policy π_habit(φ|H_t). Static eLPAR uses E_{φ∼p(φ)}. Crisis regression: p(φ|H_t) shifts to familiar φ under negative state. Counter-trap: opponent's best response φ^opp = argmin P(W|φ,φ^opp). The paper's model has no interaction term x_π × x^opp_π? Actually it uses differences x = home-away line ratings, which implicitly opponent relative; but no formation interaction. It models win probability as function of differences. It is a relative model. Counter-trap with formations not captured. Clock: time remaining and score. Eq 3.2 minutes weighting captures exposure, not state. Need state that "clock" in eLPAR is only season/game minutes denominator, not game clock. Good.
Need "recursive theory of mind" maybe managers recursively anticipate. We can say first-order: player estimates own eLPAR; second-order: manager estimates opponent's counter; third-order: opponent anticipates. Static metric collapses to zero-order. Good.

CROSS_LAYER_VETO_ADJUDICATION:
Need "physical/biomechanical/weather veto proof" maybe state:
Claim C: eLPAR is a complete positional value metric. Veto by physical layer if ∃M such that P(W|r,M) ≠ P(W|r) and M is not in x. Proof sketch: Total derivative dP/dr = ∂P/∂r + (∂P/∂M)(∂M/∂r). The paper estimates only first term via line ratings; if ∂P/∂M≠0 and M correlates with r or formation, omitted variable bias. Source lacks M. Therefore any physical/biomechanical/weather veto is not refuted or supported by paper; it is out of scope. But if external data show M changes δP more than rating effect, then eLPAR cannot be used as complete. Need cite. Good.

RLVR_COUNTERFACTUAL_VETOES:
Need three scenarios with predictions and veto. Let's formulate:

Scenario A: Formation-resolved re-estimation.
Setup: Add actual formation φ_i and within-line slots; fit multilevel Skellam with coefficients b_{π,φ}. Compute eLPAR_p^{form} using Eq 3.2 with actual tφ. Prediction from source: 4-4-2 near equal; 4-5-1 attacker > defender at 90; 3-5-2 defender > attacker [PAGE 10]; aggregate defender > attacker > midfielder > GK [PAGE 11]. Verifier: compare rank order and eLPAR difference. Veto condition: if formation-weighted eLPAR reverses aggregate ordering with bootstrap 95% CI excluding zero, aggregate positional premium is vetoed. This is verifiable.
Scenario B: Game-level performance ratings.
Setup: Replace static FIFA r_p with game-level ratings r_{p,i} from tracking/optical. Recompute δP and LPAR. Prediction: static eLPAR should be positively correlated but not identical; market inefficiency (GK overpaid, defense undervalued) should persist only if actual LPAR reproduces the GK-defender gap. Verifier: Spearman ρ and sign of cost per point difference. Veto condition: ρ<0.5 or sign flip. Source quote [PAGE 2] and [PAGE 15]. 
Scenario C: Weather/biomechanical context.
Setup: Add covariates W_i (pitch, weather, travel, sprint load) to log λ or to player rating adjustment. Prediction: if eLPAR is robust, line coefficients and eLPAR remain stable; if not, coefficients attenuate and eLPAR shifts. Verifier: likelihood ratio test and out-of-sample calibration; pre-register ΔeLPAR threshold 0.05 points per 90 and >10% players. Veto condition: significant W coefficients and ΔeLPAR beyond threshold. Source lacks W; paper says optical tracking could enhance [PAGE 2] and game ratings future [PAGE 15]. Good.

Need "predictions" for each. Good.

Need ensure no "odds". Good.

Let's write final. Use XML tags exactly. Need include LaTeX inside. Fine.

Need maybe avoid "bet" in "better" no issue. Avoid "odds" substring? "goods"? no. "spread" maybe "widespread"? Invariant says never mention spreads. Avoid word "spread" even in "widespread". Use "broad". Avoid "totals" maybe "total" appears in "total budget" in source? Hmm invariant says never mention totals. Does "total" count? It says spreads, totals, moneylines, or odds. "total" word may be considered? Better avoid "total" if possible. But source quote has "total eLPAR" maybe not needed. Avoid "total". Avoid "over/under" no. "Moneyline" no. "Odds" no. "Spread" no. "Totals" no. We can say "aggregate" instead of "total". Good. Avoid "total" word entirely? It might appear in "total eLPAR" quote. We don't need quote. Avoid "total". Good. Avoid "widespread" contains spread. Use "broad". Good. Avoid "bet" as substring? "better" contains "bet"? Actually "better" contains "bet" letters? b e t? "better" = b e t t e r, contains "bet"? yes first three letters "bet". Invariant says never mention betting lines, not substring. But to be safe? Impossible to avoid "better"? We can use "superior". Avoid "bet" maybe. "between" contains? b e t? "between" b e t? yes "bet" not contiguous? b e t? between = b e t w... yes. Hard to avoid. Not necessary. They mean words. Fine.

Need maybe mention "odds" in "periods"? no. Avoid.

Need word count. Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a pre-game expected-points model, not a physical-tracking or in-game state model. The derivation chain is: game-level goals → Poisson marginals → goal-difference Skellam → line-rating regression → probability changes → formation-specific eLPAR → minute-weighted player value → market-value comparison. The first data layer is explicit: the study uses the Kaggle European Soccer Database with “21,374 in total” games from 11 European leagues, 2008-09 through 2015-16, plus FIFA ratings and market values [PAGE 3]. The paper checks Poisson adequacy rather than assuming it: “dispersion statistic is very close to 1 (1.01 and 1.1 respectively)” for home and away goals [PAGE 3]. It also rejects a bivariate Poisson route because the observed goal correlation is “equal to -0.06” and bivariate Poisson “can only model data with positive correlations” [PAGE 3]. The modeling move is therefore to work with the difference \(Z=X-Y\), because “Equation (2.2) describes a Skellam distribution and clearly shows that the distribution of Z does not depend on the correlation between the two Poisson distributions X and Y” [PAGE 4]. This is a crucial gray-zone: the Skellam difference is identifiable, but the paper admits the model is “not able to provide estimates on the actual game score, but rather only on the score differential” [PAGE 4]. Thus any later claim about actual home/away scoring rates, not merely win/draw/loss probabilities, is outside the identified object.

The regression maps line-rating differences to Skellam parameters. The covariates are differences in average ratings for defense, midfield, attack, and goalkeeper. The paper states: “The random variable Z follows a Skellam distribution, where its parameters depend on the model’s covariates \(x = (xD, xM, xA, xGK)\)” [PAGE 6]. Table 1 reports coefficients such as \(x_D\) at \(0.02\) for \(\log(\lambda_1)\) and \(-0.02\) for \(\log(\lambda_2)\), \(x_M\) at \(0.02/-0.02\), \(x_A\) at \(0.01/-0.01\), and \(x_{GK}\) at \(0.001/-0.002\) [PAGE 7]. The paper notes “increase in the average rating of any line of a team contributed positively to its chances of winning” [PAGE 6]. The calibration check is strong for this class of model: “all lines are practically on top of the \(y = x\) line” [PAGE 7], though the draw probability has a ceiling: “our model does not provide a draw probability higher than 30% for any of the games in the test set” [PAGE 7]. That ceiling is a breakdown regime for unusually balanced or low-variance match states.

The eLPAR translation has three assumptions that need auditing. First, replacement level is a rule of thumb: “the replacement level is set at the 80% of the positional average rating” [PAGE 8], yielding replacement ratings near 56 [PAGE 9]. Second, the metric is counterfactual: “eLPARp describes how many league points (win=3 points, draw = 1 point, loss = 0 points) p is expected to add for his team” [PAGE 9]. Third, formation matters: “a defender substituting a replacement player in a 5-3-2 formation will add a different value of expected points as compared to a formation with only 3 center-backs in the defensive line” [PAGE 9]. The paper therefore defines \(eLPAR_p(\phi)=3\delta P_w+1\delta P_d\) [PAGE 10] and then averages by minutes in Equation (3.2). A replacement player is normalized to zero “by definition” [PAGE 10], and the average ordering is: “for the same player rating, a defender adds more expected league points above replacement, followed by an attacker with the same rating” [PAGE 11]. The market comparison then finds “goalkeepers are among the lowest paid players in soccer, they still are overpaid in terms of expected league points contributions. Defenders are undervalued when it comes to contributions in winning” [PAGE 12].

The gray-zone audit is where the source must be protected from overreach. The model is a line-average model, not a player-slot model: “the independent variable captures the rating of the whole line as compared to a single position/player” [PAGE 6]. It is static-rating based and “does not capture the exact performance of a player in the games he played” [PAGE 2]. It lacks actual formations: “Had the formation been available in our dataset we could have built a multilevel model” [PAGE 9]. It lacks substitutions: “We can also include information about substitutions during a game (another piece of information not available to us)” [PAGE 15]. It lacks physical, biomechanical, and weather covariates entirely; optical tracking is a future enhancement path, not a fitted layer. Thus the correct inference is conditional: eLPAR is an expected, pre-game, formation-averaged, line-rating value. It is not actual points added, not a causal estimate of a player’s physical contribution, and not a complete positional-value proof. The singularity regimes are: extrapolation far outside the rating support; \(T=0\) in the minute-weighted average; empty or unobserved formation sets; replacement ratings outside the observed distribution; and any attempt to recover actual scoring rates from the Skellam difference because the correlation parameter is non-identifiable in \(Z\) alone.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Operators used by the source.** Let game \(i\) have home and away teams, and let \(\pi\in\{D,M,A,GK\}\) index defense, midfield, attack, and goalkeeper. Define the line-rating difference
\[
x_{i,\pi}=\bar r_{h,\pi,i}-\bar r_{a,\pi,i}\in[-100,100]\quad\text{(FIFA rating points)},
\]
where \(\bar r_{h,\pi,i}\) is the average FIFA rating of the home team’s line \(\pi\) in game \(i\), and similarly for the away team. The source uses these four differences as covariates [PAGE 6]. The goal difference is
\[
Z_i=X_i-Y_i\in\mathbb Z\quad\text{(goals)},
\]
with \(X_i\) home goals and \(Y_i\) away goals. The Skellam probability mass function is
\[
\Pr(Z_i=z)=e^{-(\lambda_{1i}+\lambda_{2i})}
\left(\frac{\lambda_{1i}}{\lambda_{2i}}\right)^{z/2}
I_{|z|}\!\left(2\sqrt{\lambda_{1i}\lambda_{2i}}\right),
\quad z\in\mathbb Z,
\]
where \(I_{\nu}\) is the modified Bessel function and \(\lambda_{1i},\lambda_{2i}\) have units of goals per match. The source states: “Equation (2.2) describes a Skellam distribution” [PAGE 4]. The regression uses a log link:
\[
\log \lambda_{1i}=b_{1,0}+b_{1,D}x_{i,D}+b_{1,M}x_{i,M}+b_{1,A}x_{i,A}+b_{1,GK}x_{i,GK},
\]
\[
\log \lambda_{2i}=b_{2,0}+b_{2,D}x_{i,D}+b_{2,M}x_{i,M}+b_{2,A}x_{i,A}+b_{2,GK}x_{i,GK}.
\]
The coefficients \(b\) have units of \(\log(\text{goals per match})\) per FIFA rating point. The source gives the structural form \(Z\sim\mathrm{Skellam}(\lambda_1,\lambda_2)\), \(\log(\lambda_1)=b_1^T x\), \(\log(\lambda_2)=b_2^T x\) [PAGE 6]. Table 1 reports, for example, \(x_D=0.02^{***}\) for \(\log(\lambda_1)\) and \(-0.02^{***}\) for \(\log(\lambda_2)\) [PAGE 7]. The paper notes “The coefficients for the two parameters are fairly symmetric” [PAGE 7].

For eLPAR, define the counterfactual probability changes when player \(p\) replaces a replacement player in formation \(\phi\):
\[
\delta P_w=P(W\mid r_p,\phi)-P(W\mid r_{\mathrm{repl}},\phi),\quad
\delta P_d=P(D\mid r_p,\phi)-P(D\mid r_{\mathrm{repl}},\phi),\quad
\delta P_l=P(L\mid r_p,\phi)-P(L\mid r_{\mathrm{repl}},\phi),
\]
with \(\delta P_w+\delta P_d+\delta P_l=0\). Then
\[
eLPAR_p(\phi)=3\,\delta P_w+1\,\delta P_d+0\,\delta P_l
\quad\text{(league points per game)}.
\]
This is exactly the source’s Equation (3.1): “\(eLPARp(\phi) = 3 \cdot \delta Pw + 1 \cdot \delta Pd\)” [PAGE 10]. The replacement rating is
\[
r_{\mathrm{repl},\phi,\lambda}=0.8\,\bar r_{\phi,\lambda},
\]
because “the replacement level is set at the 80% of the positional average rating” [PAGE 8]. The paper normalizes a replacement player to zero: “by definition a replacement player has eLPAR = 0” [PAGE 10]. For multiple formations, with \(T>0\) minutes played and \(t_\phi\) minutes in formation \(\phi\),
\[
eLPAR_p=\frac{1}{T}\sum_{\phi} t_\phi\,eLPAR_p(\phi)
\quad\text{(league points per game)}.
\]
This is the source’s Equation (3.2) [PAGE 10]. If \(T=0\), the expression is singular; if the formation set is empty or unobserved, the player’s eLPAR is undefined under this estimator.

**Assumptions.** The source assumes (i) a Poisson marginal goal process is adequate, supported by dispersion statistics \(1.01\) and \(1.1\) [PAGE 3]; (ii) the goal-difference Skellam model is adequate even though the two scoring processes have correlation \(-0.06\), because the difference distribution is insensitive to that covariance [PAGE 4]; (iii) line-average ratings are sufficient summaries of a line’s quality [PAGE 6]; (iv) the log-rate relationship is linear in rating differences; (v) formation-average coefficients are usable when exact formations are missing [PAGE 10]; (vi) static FIFA ratings are acceptable for expected, not actual, value [PAGE 15]; and (vii) replacement level is well approximated by 80% of positional average [PAGE 8].

**Breakdown regimes and singularities.** 
1. **Actual-score non-identifiability.** The Skellam difference does not identify the covariance parameter or the actual home/away scoring rates; the paper explicitly says the model is “not able to provide estimates on the actual game score, but rather only on the score differential” [PAGE 4]. Any use of eLPAR to claim actual goals for or against is invalid.
2. **Extrapolation outside rating support.** Because \(\lambda=\exp(b^Tx)\), large \(|x|\) produces exponential growth in \(\lambda\) and saturation in probabilities. eLPAR curves are displayed for ratings 50–99 [PAGE 10], but the fitted covariates are line-average differences; substituting an individual rating into a line average can leave the training support.
3. **Line aggregation bias.** A line average treats all players in a line as interchangeable. The source acknowledges that the covariate “captures the rating of the whole line as compared to a single position/player” [PAGE 6]. Within-line heterogeneity, e.g. center-back versus full-back, is not separately identified.
4. **Formation misspecification.** The model “captures the formation-average value of each line” [PAGE 10], not the actual formation. The paper says formation data would permit a multilevel model [PAGE 9]. If actual formations differ systematically from the four displayed formations, eLPAR changes.
5. **Minute-weight singularity.** Equation (3.2) requires \(T>0\). Players with no recorded minutes, or formations with no recorded minutes, have undefined or unstable eLPAR.
6. **Replacement-level sensitivity.** Changing the 80% rule changes \(r_{\mathrm{repl}}\), hence changes every \(\delta P\) and every eLPAR. The paper treats replacement level as a rule of thumb, not a structurally estimated parameter [PAGE 8].
7. **Draw-probability ceiling.** The model “does not provide a draw probability higher than 30% for any of the games in the test set” [PAGE 7]. In very balanced or low-event states, the probability model may be miscalibrated at the draw margin.
8. **Static-rating and missing-state regimes.** The paper’s own limitation is decisive: “our current study is based on static player ratings obtained from FIFA” [PAGE 15]. It lacks in-game substitutions and tactical changes [PAGE 15]. Physical load, biomechanics, weather, pitch, travel, and game state are not in the fitted covariates.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The retrocausal lineage runs from baseball’s replacement-level logic to soccer’s line-rating Skellam model. Woolner’s Value Over Replacement Player is the direct ancestor: replacement players are treated as freely available talent, while average players still have value because average playing time is valuable [PAGE 8]. The paper explicitly invokes Woolner and the replacement-player idea [PAGE 8]. The second lineage is the “division of credit” problem from basketball adjusted plus-minus and baseball Win Shares; the paper says such metrics “fail to work in soccer due to severe co-linearities” because the same players are on the field for most of the time [PAGE 1]. The third lineage is the Poisson/Skellam scoring tradition: soccer goals are modeled as Poisson [PAGE 3], the bivariate Poisson is considered and rejected for negative correlation [PAGE 3], and Skellam’s 1946 difference distribution is used to model \(Z=X-Y\) [PAGE 4]. The fourth lineage is expected-goals and expected-goal-chain analysis, which the paper situates as on-ball or sequence-limited [PAGE 1–2]. The fifth lineage is optical tracking and space-creation analysis, which the paper treats as a future enhancement rather than a fitted component [PAGE 2].

Multi-week traps follow from that genealogy. Trap one: treating eLPAR as actual performance rather than expected value. The paper is explicit that it “does not capture the exact performance of a player in the games he played” [PAGE 2], and that actual game ratings would be needed to estimate actual league points added over replacement [PAGE 15]. Trap two: treating line averages as player-slot values. The model’s covariate is a line average [PAGE 6], so a high-rated full-back and a high-rated center-back are not separately valued. Trap three: freezing formations across weeks. The paper’s formation examples show that “a 4-5-1 system benefits more from an attacker with a rating of 90 as compared to a defender with the same rating, while in a 3-5-2 formation the opposite is true” [PAGE 10]. A multi-week roster evaluation that ignores formation drift will misprice players. Trap four: using a static FIFA rating as if it were a weekly performance signal. FIFA ratings change only a few times per season [PAGE 2], so weekly market or injury shocks can outrun eLPAR. Trap five: overreading the market-value result. The paper finds a relative premium for goalkeeper points and a relative discount for defender points [PAGE 12], but it also notes business motives such as fan attraction and merchandise [PAGE 13]. eLPAR alone cannot adjudicate contract rationality. Trap six: cross-sport overextension. The paper suggests a Madden-based analogue for American football [PAGE 15], but that is a proposed extension, not a validated transfer of the soccer line-rating model.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The paper’s model is a zero-order strategic object: it conditions on pre-game line ratings and returns win/draw/loss probabilities. A recursive theory-of-mind audit distinguishes three unmodeled dynamics. First, **crisis habit regression**: under adverse score state, time pressure, fatigue, or sending-off, teams may revert to familiar formations and familiar distribution habits. The paper acknowledges that teams “play different formations over different games (or even during the same game after in-game adjustments)” [PAGE 10]. If the formation distribution shifts under crisis, then the minute-weighted eLPAR in Equation (3.2) is not the same as the pre-game equal-formation average. A crisis-habit model would write \(P(\phi_t\mid H_t)\) as a state-dependent policy, where \(H_t\) includes score, clock, manpower, and fatigue; the paper’s estimator effectively uses a formation-average or observed-minutes average, not a crisis-conditional policy.

Second, **counter-trap**: an opponent can anticipate a team’s habitual formation or line usage and choose a response that changes the marginal value of a player’s rating. The paper’s covariates are rating differences, which already encode relative quality, but they do not include opponent-formation interactions. If defender value is higher in a 3-5-2 because the defensive line absorbs more space [PAGE 10], then an opponent that forces a different shape can reverse the marginal value. A counter-trap model would require interaction terms \(x_{i,\pi}\cdot \phi_i^{\mathrm{opp}}\) or a best-response formation game. The source does not estimate such interactions; therefore eLPAR should be read as a pre-game, formation-averaged prior, not as a strategic equilibrium value.

Third, **clock**: eLPAR uses league points, not game-clock state. Equation (3.1) assigns 3 points for a win and 1 for a draw [PAGE 10], and Equation (3.2) weights by minutes played [PAGE 10]. But minutes are exposure, not strategic clock. Late-game states change the marginal utility of risk, and substitutions change who is on the field. The paper says substitutions are “another piece of information not available to us” [PAGE 15]. Thus the metric cannot distinguish a player who accumulates expected points in low-leverage minutes from one who changes win probability in high-leverage states. The recursive audit conclusion is: eLPAR is a valid pre-game expectation under its stated assumptions, but crisis-habit regression, counter-trap formation response, and clock-state leverage are all outside its identified scope.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A physical, biomechanical, or weather layer can veto an overstrong interpretation of eLPAR, but it cannot be adjudicated from the paper’s fitted data. The source’s covariates are FIFA line ratings; it does not include sprint load, acceleration counts, distance covered, player fatigue, pitch condition, temperature, wind, travel, or recovery time. The paper’s own limitation is that it is “based on static player ratings obtained from FIFA” [PAGE 15], and its value is “not based on the actual performance of a player but rather on static ratings for a player” [PAGE 10]. Optical tracking is discussed as a future enhancement [PAGE 2], and game-level ratings from tracking are proposed for future work [PAGE 15]. Therefore, any claim that eLPAR is physically complete, biomechanically invariant, or weather-robust is unsupported.

Formally, let \(M_i\) be an unmodeled physical/biomechanical/weather vector. The source estimates
\[
P(W\mid x_i)\quad\text{with}\quad x_i=(x_{i,D},x_{i,M},x_{i,A},x_{i,GK}).
\]
If the true probability is \(P(W\mid x_i,M_i)\), then the omitted-layer bias in the probability change is
\[
\Delta P_w^{\mathrm{omit}}
=
\mathbb E\!\left[
P(W\mid x_i,M_i)-P(W\mid x_i)
\right],
\]
and similarly for draws. The induced eLPAR bias is
\[
\Delta eLPAR_p
=
3\,\Delta P_w^{\mathrm{omit}}+\Delta P_d^{\mathrm{omit}}
\quad\text{(league points per game)}.
\]
If \(\Delta eLPAR_p\) is large relative to the rating-induced \(\delta P\), then the cross-layer variable vetoes the use of static eLPAR for that player or match. The source provides no estimate of \(\Delta eLPAR_p\). The correct adjudication is therefore: no cross-layer veto is licensed by the paper itself; an external physical/biomechanical/weather layer must be added and re-estimated before it can override eLPAR. The paper’s market conclusion—goalkeepers overpaid in expected-points terms and defenders undervalued [PAGE 12]—is conditional on the static-rating model and cannot be treated as a biomechanical or weather-invariant law.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto scenario 1: Formation-resolved eLPAR.** Setup: obtain actual formation \(\phi_i\) and within-line slots, fit a multilevel Skellam regression with position-by-formation coefficients, and recompute \(eLPAR_p\) using the source’s minute-weighted Equation (3.2). Verifiable prediction from the source: 4-4-2 should show values “very close to each other” across positions [PAGE 10]; 4-5-1 should favor a 90-rated attacker over a 90-rated defender, while 3-5-2 should reverse that comparison [PAGE 10]; and the four-formation average should order defender above attacker above midfielder above goalkeeper for equal rating [PAGE 11]. Veto condition: if the formation-weighted estimate reverses the aggregate ordering with a bootstrap confidence interval excluding zero, then the claim that “defenders are undervalued” or that defender eLPAR is generally highest is vetoed as an aggregate artifact.

**Veto scenario 2: Game-level performance ratings instead of static FIFA.** Setup: replace static \(r_p\) with game-level ratings \(r_{p,i}\) derived from optical tracking or event-plus-tracking composites, then recompute \(\delta P_w,\delta P_d\) and \(eLPAR_p\). Verifiable prediction: static eLPAR should be positively but imperfectly correlated with actual league points added over replacement, because the paper says the same framework “can be used to evaluate the actual league points added above replacement” if game-level ratings are available [PAGE 2]. Veto condition: if the Spearman correlation between static eLPAR and actual LPAR is below a pre-registered threshold, or if the sign of the goalkeeper-versus-defender cost-per-point gap reverses, then the market-inefficiency conclusion from static eLPAR is vetoed for that season. This test directly checks the paper’s own warning that static ratings “does not capture the exact performance of a player in the games he played” [PAGE 2].

**Veto scenario 3: Physical/biomechanical/weather augmentation.** Setup: add covariates for pitch condition, weather, travel, recovery time, sprint