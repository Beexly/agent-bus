---
source: "2024 - Footedness How important is it - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2024"
pages: 22
model: deepseek/deepseek-v4.1-flash-1017
words: 6793
---

<NATIVE_REASONING>
We need answer to user. Need synthesize with required XML sections, >=1000 words depth, no betting lines, no toy equations, formal LaTeX equations units assumptions breakdown, cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need adhere invariants. This is an analysis of PDF about footedness. Need produce deep multi-hop derivation, gray-zone audit, source operators/equations, retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes with 3 verifiable scenarios + predictions. Zero betting lines. We need not mention odds/spreads/totals/moneylines. Need maybe mention "no betting lines" indirectly? Avoid terms. Need cite page markers exact verbatim quotes. Need formal LaTeX equations with units, assumptions, exact singularity/breakdown regimes. Need not invent fake ratios. Need likely derive from data. Need be careful: source has actual equations? Only logistic regression, xT, PredPoints maybe. Need write equations based on description. Formal LaTeX. We can state equations for footedness classification, pass success overperformance, xT, PredPoints, logistic model, residual. Need units: probabilities dimensionless, xT in goals per possession? Expected threat likely goals per possession? StatsBomb xT units not explicit. We can state dimensionless probability/goal-equivalent per possession with caveat. Pass success probability dimensionless. Points per game etc. Need exact singularity/breakdown: classification threshold 66% singular at pass/shot total zero? They exclude <25. Left/right/two classification boundary at exactly 0.66; tie? Need discuss boundary discontinuities. Logistic regression multi-class softmax needs sum probabilities =1; singular if collinearity? Model AUC 0.679, accuracy 61%, log loss 0.91 vs 1.1 chance. Need mention model trained n=1102, tested n=276. Need derive 0.8 points per 38 = 0.02105 points/game? Wait 0.8/38 =0.0211. Summary says approximately one point. Need cite. Crosses: 5.8 vs 5.2 = 0.6 per game; 29 more crosses per season = 0.763/game? 29/38=0.763. But table states both LB and LCB each >50 gives 29 more crosses from left per season. Need discuss not additive? The table shows yes for LB 5.8, LCB 5.7, all left >20% 5.7 vs no 5.2/5.1. t<0.01. Need formal t-test equation. Could state Welch? They don't specify t-test type; call two-sample t-test. Need no fake equations. Maybe equation for mean difference, t statistic general. Need exact.

Need include THINK_TRACE >=400 words. Entire response >1000 words. Desired oververbose 5. Need include all sections exactly. Need not be too huge but sufficient. Let's plan.

We need answer as "GSE + GSI Frontier Reasoning Foundry" maybe structured with XML tags. Need include citations and quotes. Need include exact [PAGE N]. Use verbatim quotes from source. Important: cite exact [PAGE N] markers and verbatim quotes. We can quote short phrases. Need include page numbers. We need ensure quotes are verbatim (copy exact text). Use quotes like "Overall, nearly one quarter of players were left-footed (n=1585, left=362, two-footed=51, right=1172)." [PAGE 7] Actually page 7 contains that? PAGE 7 starts "7 Both...". Text: "Overall, nearly one quarter of players were left-footed (n=1585, left=362, two-footed=51, right=1172)." Yes page 7. Another "In the WSL, only one in eight players were left-footed (n=509, left=62, two-footed=40, right=407)." [PAGE 7]. "Left footed: a player who makes 66% or more of their passes or shots with their left foot." [PAGE 3]. "Only players who have made a total of 25+ passes or shots over the two seasons have been categorized" [PAGE 4]. "The value of playing a left footer at left back for 50% of the time or more is calculated at 0.8 points over the course of a 38-game season." [PAGE 19]. "Playing a left footer at left back and left centre back, each for more than 50% of the time, gives a team 29 more crosses from the left side per season" [PAGE 19] or page 15. "players had 6% higher xT when passing with their stronger foot than when passing with their weaker foot." [PAGE 16/19]. Need exact wording: page 16 "Players had 6% higher xT when passing with their stronger foot than when passing with their weaker foot." Page 19 says "Players had 6% higher xT when passing with their stronger foot than when passing with their weaker foot." use [PAGE 16] maybe. "there is small but limited evidence to suggest left footers impact match outcomes." [PAGE 19]. "The value of playing a left footer at left centre back is positive but insignificant." [PAGE 19]. "Logistic Regression" table [PAGE 5]. "overall accuracy of the model is 61%" [PAGE 5]. "log loss for the logistic regression model used is 0.91. In a three-class regression analysis, the log loss of a chance or ‘dumb’ model would be 1.1." [PAGE 5-6]. Need quote exact. "The model has been trained on a subset of the match data (n=1102) and tested with a different subset of the match data (n=276), with test size of 0.2." [PAGE 4]. "multi-class logistic regression model" [PAGE 4]. "Expected Threat values regions on the pitch based on the likelihood that possession in that region results in a goal." [PAGE 7]. "pass_success_probability... probability that a pass is completed" [PAGE 7]. "AUC 0.679 ..." [PAGE 5]. "t < 0.01" [PAGE 15]. "53 teams (from 59)" [PAGE 11]. "0.8 points over a 38 games season" [PAGE 11]. "The difference in performance of playing a left footed centre back is positive but very small." [PAGE 11]. "83% of WSL left footers play at left back, left center back or left wing." [PAGE 9]. "12% (one in eight) of WSL footballers are left footed compared to 26% in the Premier League and Serie A (one quarter)." [PAGE 20]. Need cite.

Need "formal LaTeX equations". Let's craft equations.

1. Footedness classification:
Let n_L, n_R be passes+shots with left/right foot for player i. n_i=n_L+n_R. Exclude n_i<25. Define f_i=max(n_L,n_R)/n_i. Left if n_L/n_i ≥0.66; Right if n_R/n_i≥0.66; Two-footed if max<0.66. But ambiguity if both ≥0.66 impossible unless sum >1.32 impossible? If n_L/n=0.66 and n_R/n=0.33, okay. Boundary exactly 0.66 includes left; right? If n_L=0.66, left. If n_R=0.66, right. Two footed if <0.66. Need note discontinuity at 0.66 and small-sample instability near 25. Unit: dimensionless ratio. Breakdown: n_i<25 excluded; n_i=25, one pass changes ratio by 0.04, threshold crossing. Need singular if n_i=0 undefined; excluded.

2. Pass success overperformance:
Let p̂_j = StatsBomb pass_success_probability for pass j. Actual completion y_j∈{0,1}. For group g, expected completion \bar p_g = (1/N_g)Σ p̂_j; actual \bar y_g=(1/N_g)Σ y_j; overperformance Δ_g = \bar y_g-\bar p_g. Units dimensionless proportion. If N_g=0 undefined. Not a toy ratio. Need cite page 7/14.

3. xT pass value: xT(z) = P(goal | possession in cell z) maybe goal probability per possession. Pass j from z_start to z_end value ΔxT_j = xT(z_end)-xT(z_start), in goal-equivalent per possession (dimensionless probability). Mean xT by foot. Stronger foot 6% higher. Equation: \overline{xT}_{g} = (1/N_g)Σ (xT(z_end,j)-xT(z_start,j)). Breakdown: xT cell model trained on same 1420 games; out-of-distribution cells; mean not causal.

4. Logistic regression multi-class: For class k∈{home,draw,away}, logits η_k = β_{k0}+Σ_m β_{km} x_m. Probability p_k = exp(η_k)/Σ_l exp(η_l). Need features home/away rolling means of goals, conceded, xG, xT, possession, opponent form factor. Units vary. Identifiability: set one β baseline; singular if collinearity or perfect separation; not if regularized. Prediction accuracy 61%, log loss L=-1/N Σ log p_{y_i}. Chance 1.1, model 0.91. AUC. Need mention no betting line.

5. PredPoints: For match i, p_H,p_D,p_A. PredPoints_i = 3 p_H + 1 p_D + 0 p_A. Actual points A_i = 3 I(home win)+1 I(draw). Residual R_i=A_i-P_i. Aggregate over games G: \bar R = (1/G)Σ R_i. Units points per game. For Chelsea 43 games actual 113, predicted 88.8, residual 24.2, /43 =0.5628 points/game. They state 0.56. For 11 games with Eriksson: actual 30, predicted 21.8, residual 8.2 /11 =0.7455 ≈0.75. Need equation. For LB value: 0.8 points over 38 games = 0.02105 points/game. Need note "value of playing a left footer at left back for 50% of the time or more". It is a model-derived residual difference, not causal. Need exact singularity: if G small (<10 excluded), if p sum not 1 due softmax issue; if PredPoints equals actual. No denominator zero.

6. t-test crosses: H0: μ1=μ0. t = (\bar X_1-\bar X_0)/sqrt(s1^2/n1+s0^2/n0) assuming Welch; but paper doesn't specify. Since just says t-test, use general t = difference/SE. Units crosses per game. t<0.01 is actually p<0.01? Paper writes "t < 0.01" in final row. It likely means p<0.01; exact quote. Need not invent. Mention notation ambiguity. Breakdown: non-normal counts, team-performance clustering, multiple comparisons, no effect size CI. Use exact.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Discuss Packheiser 2020 meta-analyses 164 studies ~150k, prevalence 12-24%, 60% left-handers left-footed, 3% right handers left-footed, males 4% more non-right, footedness less culturally influenced. Carey 2001 France 98: 19,295 touches 236 players 16 teams, 79% right footed, 14% passes weaker foot, pass completion same, "Left footed players may be the mirror image..." Marcori 2022 shooting: preferred foot farther from goal, left side shots more right foot vice versa, no performance success difference. Then this paper extends to StatsBomb 1420 games, WSL, WWC 2023. Multi-week traps: confounding by budget, selection, tactics; small samples; threshold 66; "home grown"/"imported" labels; WSL 12% vs men 26; England women 13% squad, 16% minutes; not female-specific but England female-specific. Need mention "multi-week traps" maybe as traps that persist over multiple weeks: rolling five-game form, fixture strength, team selection over season, budget over transfer windows, youth development positional lock-in over years. Need be clear.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. This likely asks model to reason about decision-makers: coaches, talent systems, analysts. Need discuss recursive beliefs: coaches select left footer because they believe left footer improves left-side progression; opponents anticipate; analysts see residual; youth coaches profile left footers into wide positions; players internalize; talent ID underinvests; counter-trap: overfitting to left-footed label; clock: development age, minutes, season horizon. "Crisis habit regression" maybe when under pressure coaches revert to dominant-foot safe passing/right-footed LB; counter-trap: avoiding left-footer overvaluation; clock: time pressure in match and development. Need apply. Need cite pages 1, 20-21. Recursive theory of mind: Level 0 player decision; Level 1 coach belief; Level 2 analyst model; Level 3 opponent/recruiter. Need be rigorous.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need discuss if footedness effect is vetoed by physical/biomechanical/weather layers. Need evidence: passes/angles, body orientation, biomechanics of left vs right; weather not in data; pitch geometry; no duel/out-of-possession; no physical metrics. Need state veto conditions: if effect disappears after controlling for budget/selection/tactics/opponent strength; if weather/pitch condition changes pass success; if biomechanical constraints make left-foot pass impossible; if sample size small. Need maybe "proof" not possible; adjudicate: current evidence does not support hard physical/biomechanical/weather veto; it supports a soft contextual veto due to confounding. Need cite "does not include out-of-possession events like interceptions or tackles, nor does it look at duel success" [PAGE 6]. "We focus solely on in-possession metrics" [PAGE 6]. Weather absent. Need say "no weather or biomechanical variables are in the source; therefore no empirical veto can be proven from this paper." Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR? Reinforcement Learning with Verifiable Rewards? Need create three counterfactual veto scenarios that could be verified. Need predictions. They should be about testing claims. Need no betting. Could be:
1. Budget/selection confound veto: If left-footed LB advantage (0.8 points/38) disappears after conditioning on club wage/transfer value and opponent strength, then footedness claim vetoed. Prediction: residual coefficient CI includes zero; observed 0.8 becomes <0.1 or sign flips. Verifiable via expanded logistic model with budget proxy and opponent form; pre-register.
2. Small-sample/threshold instability veto: Reclassify footedness at 60% or 70% and bootstrap players/games; if 0.8-point effect and 29-cross effect fail to replicate, veto. Prediction: threshold sensitivity yields wide CI crossing zero; cross effect robust? Maybe crosses robust but points not.
3. Biomechanical/contextual pass-angle veto: If left-footed LB higher xT infield passes vanish when controlling for pitch location, pressure, pass distance, and body orientation, veto. Prediction: 6% stronger-foot xT attenuates after location/distance; left-footed LB wedge differences shrink. Need "verifiable" by event data. Another: Women's talent system hypothesis: If longitudinal youth positional variation predicts left-footed centrality, test. But three scenarios.

Need mention no betting lines. Avoid words odds, moneyline, spread, totals. "points" okay? Points in sports outcomes not betting lines? Invariant says never mention spreads, totals, moneylines, or odds. Points as match points is fine? Could be confused with totals? It's actual points, not betting. We can mention "match points" but not betting. Avoid "over/under". Good.

Need include exact [PAGE N] markers. Use quotes. Need ensure every section has citations. Need "PAGE 5" table values. Good.

Need answer length. Let's draft with XML tags. Need be careful: XML tags can contain LaTeX. Use escaped? The content may include < and >? LaTeX has < maybe not. Use \lt? To avoid XML parsing issues, avoid raw < in text except tags. Use \leq, \geq, \in. Avoid "t < 0.01" raw? It contains <. In XML text, raw < can break. We should use &lt; or words. Since output is text, but XML invariant maybe not strict parse? Better use `t &lt; 0.01`? But they asked exact quote verbatim; quote with "t < 0.01" may include raw <. XML parse would fail. Could write "t &lt; 0.01" but not verbatim? Hmm. We can use HTML entity? The source quote exact "t < 0.01" but if XML parse, need escape. The user likely expects tags not actual parse. To be safe, use `t &lt; 0.01` and note escaped. But "verbatim quotes" exact? Could use quote with `t < 0.01` maybe okay. In XML, `&lt;` renders as <. Use `&lt;` in quote? It is not verbatim but semantically. Maybe use "t less than 0.01" not quote. But need cite exact quote. We can quote other exact quotes without <. For t-test, quote "t &lt; 0.01" maybe acceptable. Use `&lt;` entity. Similarly in equations use \lt not raw. Good.

Need not overdo. Need include formal equations with units. Let's outline final:

Opening: "I will treat the PDF as evidence and separate descriptive, predictive, causal." Then XML.

<THINK_TRACE> 400+ words. Multi-hop derivation & gray-zone audit. Discuss claim chain: footedness distribution -> classification -> model -> residual -> position -> action metrics -> causal claim. Identify gray zones: threshold 66; 25 min; 50% game; 10 games; 1420 games; 59 teams; 53 teams; Chelsea example n=11; 0.8 points/38; left CB insignificant; cross t-test; xT 6%; two-footed. Derive from counts: overall left 362/1585 = 22.84%, right 1172/1585=73.94%, two 51/1585=3.22. WSL left 62/509=12.18%, two 40/509=7.86%, right 407/509=79.96. Men combined? 362 total includes all; WSL left 62; men left 300; men n=1076; 27.9% left. Paper says 26% men. Need maybe compute? Total n=1585, WSL n=509, men n=1076. Left total 362; WSL 62 -> men 300; 300/1076=27.88. Two total 51; WSL 40 -> men 11; 1.02%. Right total 1172; WSL 407 -> men 765; 71.1%. Paper summary says 26% and 2%; slight rounding/other. Could mention. Chelsea: 113-88.8=24.2/43=0.5628; Eriksson 30-21.8=8.2/11=0.7455. 0.8/38=0.0211. Crosses 5.8-5.2=0.6; 29/38=0.763; not exactly same because combined LB+LCB. Gray zone: "positive but insignificant" vs "0.8 points" small; model AUC 0.679 modest; accuracy 61% but three-class; log loss 0.91 vs 1.1. Need 400 words. Good.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, citations, breakdown. Include equations. Need maybe write "All probability quantities are dimensionless; points are match points; crosses are counts per match; xT is goal-equivalent per possession." Cite pages. Use exact quotes. Include classification equation, pass success, xT, softmax, PredPoints/residual, t-test. Need note "the paper does not give exact regression coefficients or standard errors; equations below are formal reconstructions of the stated operators." Good. Breakdown regimes: n_i<25; denominator zero; softmax identifiability; multicollinearity; small G; t-test assumptions; xT cell sparsity; threshold 0.66. Cite. Need mention "t < 0.01" as p-value? The paper labels row "t < 0.01"; formally likely p. We can say "The source prints 't &lt; 0.01'; interpreted as a significance threshold, not a t statistic." Good.

<RETROCAUSAL_GENEALOGY> Historical lineage: Packheiser 2020 meta, Carey 2001, Marcori 2022. Multi-week traps: budget, selection, tactics; WSL vs men; home grown/imported; England female system. Cite pages 2,3,19-21. Need mention "retrocausal" maybe how prior findings shape interpretation. "The paper's novelty is not discovering left-footed superiority but re-reading older mirror-image nulls through a richer event-data lens." Good.

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock. Need define:
- Crisis habit regression: under pressure, coaches/players revert to dominant foot/safe right-footed LB; model residual may reflect team crisis not footedness. Cite budget/selection/tactics page 19-20.
- Counter-trap: analyst sees 0.8 points and over-recruits left footers; must avoid label fetish; two-footed aspiration page 22.
- Clock: match clock pressure and developmental clock. Left-footed youth deployed wide early, missing central decision-making; delayed positional decision page 21. Recursive: player knows coach sees left footer as wide specialist; coach knows analyst values left footer; opponent knows left footer cuts inside; talent system knows scarcity. Need cite "83% of WSL left footers play at left back, left center back or left wing" [PAGE 9]. "Their talent journey has perhaps not been as varied..." [PAGE 21]. "development of two-footed players to be a better long-term aspiration" [PAGE 22]. Good.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Need state:
- Physical/biomechanical: left/right passing angle and body orientation can explain xT differences; paper does not measure body orientation, pressure? Actually pass_success_probability includes pressure, angle, distance [PAGE 7]. xT model uses location only? It does not control for orientation. Need veto if xT differences vanish after controlling for pass distance/angle/pressure. Evidence: 6% stronger foot xT; left foot higher in left attacking/defending areas; right foot higher in a5; "defensive corners" advantage. Cite [PAGE 16]. Weather: no weather variables; cannot prove weather veto. So adjudication: no hard veto; soft confound veto. Physical/weather not falsified by source; require external data. Need mention "does not include out-of-possession events like interceptions or tackles, nor does it look at duel success" [PAGE 6]. Therefore defensive physicality not assessed. Good.

<RLVR_COUNTERFACTUAL_VETOES> 3 scenarios. Need formal predictions. Scenario 1 budget/selection. Scenario 2 threshold/sample. Scenario 3 biomechanical/contextual xT/pass-angle. For each: "Veto condition", "Verifiable test", "Prediction". Need maybe "RLVR" as reinforcement learning verifier? We can say "verifiable reward signal: pre-registered replication with held-out seasons." Predictions: If veto triggers, 0.8 point effect CI includes 0; 29 crosses may survive? Need define. Scenario 2: reclassify at 60/70; bootstrap by team/player. Prediction: points effect unstable; crosses robust? We can predict: point effect attenuates to near zero; cross effect likely robust because Table 3 p<0.01. Scenario 3: xT stronger-foot 6% attenuates after controlling for pass location/distance/pressure; left-footed LB infield wedge shrinks. Need mention "no betting lines" not necessary.

Need ensure >=1000 words. Final likely 2500-3500 words. Need not overly huge. Desired oververbosity 5. But requirements demand depth. Let's write around 3000 words. Need include all exact XML sections. Use no markdown? XML sections with headings. Fine.

Need be careful with "t < 0.01" raw. Use `t &lt; 0.01`. In equations, use `\lt` maybe. LaTeX can have `\lt`? Use `\leq`, `\geq`, `\in`, `\max`. Avoid `<`. Use `\mathrm{arg\,max}`. Good.

Need mention "zero betting lines" not in final? We can say "No betting-line concepts are used." But invariant says never mention betting lines. Mentioning "betting lines" violates? It says never mention spreads, totals, moneylines, or odds. "betting-line concepts" includes? Avoid. Don't mention.

Need quote exact. Let's list quotes with page:
- [PAGE 3] "Left footed: a player who makes 66% or more of their passes or shots with their left foot."
- [PAGE 4] "Only players who have made a total of 25+ passes or shots over the two seasons have been categorized and included in the research."
- [PAGE 4] "The model has been trained on a subset of the match data (n=1102) and tested with a different subset of the match data (n=276), with test size of 0.2."
- [PAGE 5] "Logistic Regression" table and "0.679" etc. Quote "AUC ... Logistic Regression 0.679 0.573 0.507 0.509 0.573 0.306" maybe exact? Need not quote full. "Logistic Regression" [PAGE 5].
- [PAGE 5] "overall accuracy of the model is 61%."
- [PAGE 6] "The log loss for the logistic regression model used is 0.91. In a three-class regression analysis, the log loss of a chance or ‘dumb’ model would be 1.1."
- [PAGE 7] "Overall, nearly one quarter of players were left-footed (n=1585, left=362, two-footed=51, right=1172)."
- [PAGE 7] "In the WSL, only one in eight players were left-footed (n=509, left=62, two-footed=40, right=407)."
- [PAGE 7] "Expected Threat values regions on the pitch based on the likelihood that possession in that region results in a goal."
- [PAGE 7] "pass_success_probability... probability that a pass is completed"
- [PAGE 10] Chelsea predicted 88.8 actual 113? Quote "they gained an actual 113 points... predicted they would gain 88.8 points (PredPoints)." [PAGE 10]
- [PAGE 10] "For the 11 games when Eriksson played, Chelsea accumulated 30 points compared to a predicted total of 21.8."
- [PAGE 11] "The difference can be calculated at 0.8 points over a 38 games season."
- [PAGE 11] "The difference in performance of playing a left footed centre back is positive but very small."
- [PAGE 14] "The only combination that doesn’t overperform is right footed left backs using their left foot."
- [PAGE 15] "teams who played a left footed at left back for at least half the game achieved an average of 5.8 crosses from the left per game. This is compared to 5.2 crosses per game..."
- [PAGE 15] "t &lt; 0.01" maybe.
- [PAGE 16] "players had 6% higher xT when passing with their stronger foot than when passing with their weaker foot."
- [PAGE 19] "The value of playing a left footer at left back for 50% of the time or more is calculated at 0.8 points over the course of a 38-game season."
- [PAGE 19] "The value of playing a left footer at left centre back is positive but insignificant."
- [PAGE 19] "Playing a left footer at left back and left centre back, each for more than 50% of the time, gives a team 29 more crosses from the left side per season"
- [PAGE 20] "12% (one in eight) of WSL footballers are left footed compared to 26% in the Premier League and Serie A (one quarter)."
- [PAGE 21] "Why is the English female talent system not developing the expected proportion of high-quality left footed players?"
- [PAGE 21] "Their talent journey has perhaps not been as varied in experience as it needs to be..."
- [PAGE 22] "Talent systems and coaches may wisely consider the development of two-footed players to be a better long-term aspiration than the development of more left footers."
- [PAGE 6] "This study focuses solely on in-possession metrics and does not include out-of-possession events like interceptions or tackles, nor does it look at duel success."
- [PAGE 9] "83% of WSL left footers play at left back, left center back or left wing."
- [PAGE 2] Packheiser quote? "Estimates of left footedness in the population ranges from 12% ... to 24%..." [PAGE 2]. "60% of left-handers are left footed; 3% of right handers are left footed." [PAGE 2]. "Males are 4% more often non-right footed, compared to females." [PAGE 2].
- [PAGE 2] France 98: "79% of players were right footed." [PAGE 2]. "14% of passes are made with the weaker foot." [PAGE 2]. "Left footed players may be the mirror image of their right footed counterparts" [PAGE 2].
- [PAGE 3] Marcori: "Differences were only found in foot selection, but not in performance, as success rate did not vary between feet in any position." [PAGE 3].

Need make formal equations. Let's write in LaTeX. Must mention units. Example:

For player i:
\[
n_i=n_{i,L}+n_{i,R},\quad q_i=\max(n_{i,L},n_{i,R})/n_i,\quad q_i\in[0,1].
\]
Units: dimensionless. Inclusion: n_i \geq 25. Classification:
\[
C_i=\begin{cases}
L, & n_{i,L}/n_i \geq 0.66,\\
R, & n_{i,R}/n_i \geq 0.66,\\
T, & \max(n_{i,L},n_{i,R})/n_i \lt 0.66.
\end{cases}
\]
Breakdown exact: n_i=0 undefined; n_i=25 granularity 0.04; exactly 0.66 boundary; if both? impossible. Good.

Pass success:
\[
\bar p_g=\frac{1}{N_g}\sum_{j\in g}\hat p_j,\quad \bar y_g=\frac{1}{N_g}\sum y_j,\quad \Delta_g=\bar y_g-\bar p_g.
\]
Units proportion. Break N_g=0. The source says left footed LB expected 80 actual 81; right footed LB using left expected 77 and did not achieve [PAGE 14]. Good.

xT:
\[
\Delta xT_j = xT(z_{j,end})-xT(z_{j,start}),\quad \overline{xT}_g=\frac{1}{N_g}\sum \Delta xT_j.
\]
Units goal-equivalent per possession; dimensionless probability if xT cell is probability. Break cell sparsity; xT trained same 1420 games; no causal. Quote.

Softmax:
\[
\eta_{ik}=\beta_{k0}+\sum_m \beta_{km}x_{im},\quad p_{ik}=\frac{e^{\eta_{ik}}}{\sum_{\ell}e^{\eta_{i\ell}}},\quad \sum_k p_{ik}=1.
\]
Features rolling five-game means [PAGE 4]. Break: nonidentifiability due to sum-to-one; choose reference class; collinearity; separation. Log loss:
\[
L=-\frac{1}{N}\sum_i \log p_{i,y_i}.
\]
Chance for 3 classes if balanced = log 3 =1.0986 ≈1.1. Model 0.91. Good.

PredPoints:
\[
P_i=3p_{i,H}+1p_{i,D}+0p_{i,A}, \quad A_i=3\mathbf{1}_{H}+1\mathbf{1}_{D}+0\mathbf{1}_{A}.
\]
Residual:
\[
R_i=A_i-P_i,\quad \bar R_G=\frac{1}{G}\sum_{i=1}^G R_i.
\]
Units points per game. Chelsea: (113-88.8)/43=0.5628; (30-21.8)/11=0.7455. LB: 0.8/38=0.0211 points/game. Break: G<10 excluded for key position; if G=0 undefined; residual not causal; selection bias.

t-test:
\[
t=\frac{\bar X_1-\bar X_0}{\sqrt{s_1^2/n_1+s_0^2/n_0}}
\]
or general SE. Units crosses per game. Source prints "t &lt; 0.01" [PAGE 15]; interpreted p-value. Break: independence of team performances not guaranteed; repeated teams; no CI; multiple tests. Good.

Need mention "formal equations not in source" caveat. Source only descriptions, table values. Good.

Need answer within XML. Let's write. Need ensure all sections exact. Use headings inside tags. Need no markdown? Fine.

Need maybe mention "The paper has 22 pages" not needed.

Potential issue: "THINK_TRACE" should be >=400 words. We can make ~650 words. Entire >1000. Good.

Let's craft final in polished form. Use `&lt;` in XML. Need "verbatim quote" with `&lt;`? We'll present quote as "t &lt; 0.01" and note escaped. Good.

Need not include "spreads" etc. Avoid. Use "match points" and "points". Fine.

Need no "odds". Avoid "probability" okay. "chance" okay. "betting" not. Good.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s argument must be reconstructed as a chain rather than accepted as a single finding. The chain is: define footedness from event counts, describe prevalence, build a three-class match model, convert predicted class probabilities into expected match points, compare actual to predicted points, then ask whether left-footed players in left-sided positions alter residuals. The first gray zone is classification. The source states: “Left footed: a player who makes 66% or more of their passes or shots with their left foot” [PAGE 3], and “Only players who have made a total of 25+ passes or shots over the two seasons have been categorized” [PAGE 4]. That creates a threshold discontinuity at exactly 66% and a small-sample instability near 25 events: one event can move a player across category. The second gray zone is aggregation. The paper reports “nearly one quarter of players were left-footed (n=1585, left=362, two-footed=51, right=1172)” [PAGE 7], but “In the WSL, only one in eight players were left-footed (n=509, left=62, two-footed=40, right=407)” [PAGE 7]. From those counts, overall left share is 362/1585 = 22.8%; WSL left share is 62/509 = 12.2%; men’s leagues are therefore about 300/1076 = 27.9% left, close to the paper’s “26% in the Premier League and Serie A” [PAGE 20]. The third gray zone is the model. The model is a “multi-class logistic regression model” trained on “n=1102” and tested on “n=276” [PAGE 4]. Its AUC is 0.679 for logistic regression [PAGE 5], accuracy is “61%” [PAGE 5], and log loss is “0.91” versus a three-class chance model at “1.1” [PAGE 6]. That is useful but modest discrimination; a 61% three-class accuracy does not imply strong causal identification. The fourth gray zone is the residual-to-causality jump. Chelsea’s 43-game actual total of 113 points versus predicted 88.8 gives (113-88.8)/43 = 0.5628 points per game, matching “0.56 points per game” [PAGE 10]. The 11 Eriksson games give (30-21.8)/11 = 0.7455, matching “0.75” [PAGE 10]. But n=11 is a small subset, and the paper itself warns about budget, team selection, and tactics [PAGE 19-20]. The fifth gray zone is position aggregation: “The value of playing a left footer at left back for 50% of the time or more is calculated at 0.8 points over the course of a 38-game season” [PAGE 19], which is 0.8/38 = 0.0211 points per game, while “The value of playing a left footer at left centre back is positive but insignificant” [PAGE 19]. The cross result is more directly measured: teams with a left-footed left back for at least half the game averaged “5.8 crosses from the left per game” versus “5.2” without, with “t &lt; 0.01” in the table [PAGE 15]. But the paper prints “t &lt; 0.01,” which is a significance threshold notation rather than a t statistic, and no confidence interval is supplied. The sixth gray zone is action metrics. xT is defined as “regions on the pitch based on the likelihood that possession in that region results in a goal” [PAGE 7], and players had “6% higher xT when passing with their stronger foot than when passing with their weaker foot” [PAGE 16]. That is a within-player foot effect, not a team-composition effect. The seventh gray zone is development inference: “83% of WSL left footers play at left back, left center back or left wing” [PAGE 9], and the paper hypothesizes that English female talent development may narrow left-footers into wide roles [PAGE 21]. That is plausible but not tested longitudinally here. So the audit conclusion is: descriptive prevalence is strong; event-geometry differences are moderate; match-outcome advantage is small and confounded; developmental causality is a hypothesis.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper does not print a single unified model equation, so the following are formal reconstructions of its stated operators. Units are stated explicitly; all probability-like quantities are dimensionless, match points are points, crosses are counts per match, and xT is treated as a goal-equivalent probability per possession because the source defines it by “the likelihood that possession in that region results in a goal” [PAGE 7].

**1. Footedness classification.** For player \(i\), let \(n_{i,L}\) and \(n_{i,R}\) be the number of passes and shots made with the left and right foot. Then
\[
n_i=n_{i,L}+n_{i,R},\qquad q_i=\frac{\max(n_{i,L},n_{i,R})}{n_i},\qquad q_i\in[0,1].
\]
The source’s categories are:
\[
C_i=
\begin{cases}
L, & n_{i,L}/n_i \geq 0.66,\\
R, & n_{i,R}/n_i \geq 0.66,\\
T, & \max(n_{i,L},n_{i,R})/n_i \lt 0.66,
\end{cases}
\]
with inclusion \(n_i\geq 25\). This follows “Left footed: a player who makes 66% or more of their passes or shots with their left foot” [PAGE 3] and “Only players who have made a total of 25+ passes or shots over the two seasons have been categorized” [PAGE 4]. Breakdown regimes: \(n_i=0\) is undefined and excluded; \(n_i=25\) has granularity \(1/25=0.04\), so a single event can cross the 0.66 boundary; exact 0.66 is assigned to the dominant side by the stated rule, creating a discontinuity; the category is a count-based proxy, not a biomechanical measurement.

**2. Pass-success overperformance.** For pass \(j\), let \(\hat p_j\) be StatsBomb’s “probability that a pass is completed” [PAGE 7] and let \(y_j\in\{0,1\}\) be actual completion. For group \(g\):
\[
\bar p_g=\frac{1}{N_g}\sum_{j\in g}\hat p_j,\qquad
\bar y_g=\frac{1}{N_g}\sum_{j\in g}y_j,\qquad
\Delta_g=\bar y_g-\bar p_g.
\]
Units: dimensionless proportion. The source reports, for left-footed left backs using their left foot, expected 80% and actual 81% [PAGE 14], and “The only combination that doesn’t overperform is right footed left backs using their left foot” [PAGE 14]. Breakdown: \(N_g=0\) is undefined; \(\Delta_g\) is an aggregate residual and is not adjusted for opponent pressure beyond the StatsBomb model’s inputs; group composition can confound \(\Delta_g\).

**3. Expected Threat pass value.** For a pass from cell \(z_{\text{start}}\) to cell \(z_{\text{end}}\):
\[
\Delta xT_j=xT(z_{j,\text{end}})-xT(z_{j,\text{start}}),
\qquad
\overline{xT}_g=\frac{1}{N_g}\sum_{j\in g}\Delta xT_j.
\]
Units: goal-equivalent probability per possession, following the source’s definition [PAGE 7]. The source states “players had 6% higher xT when passing with their stronger foot than when passing with their weaker foot” [PAGE 16]. Breakdown: sparse cells produce unstable \(xT(z)\); the xT model is trained on “the same dataset of 1420 games” [PAGE 7], so it is in-sample for this dataset; \(\Delta xT_j\) is not a causal effect of foot because pass location, distance, angle, pressure, and body orientation are not fully randomized.

**4. Multi-class logistic model.** For match \(i\) and class \(k\in\{H,D,A\}\), with features \(x_{im}\) being rolling five-game means of goals, goals conceded, xG, xT, possession, and opponent form factor [PAGE 4]:
\[
\eta_{ik}=\beta_{k0}+\sum_m \beta_{km}x_{im},\qquad
p_{ik}=\frac{\exp(\eta_{ik})}{\sum_{\ell\in\{H,D,A\}}\exp(\eta_{i\ell})},
\qquad \sum_k p_{ik}=1.
\]
The log loss is
\[
L=-\frac{1}{N}\sum_i \log p_{i,y_i}.
\]
The source reports logistic regression AUC 0.679 and accuracy 0.573 in the table [PAGE 5], with “overall accuracy of the model is 61%” [PAGE 5], and log loss “0.91” versus chance “1.1” [PAGE 6]. Breakdown: the softmax is non-identifiable without a reference class or regularization; collinearity among rolling form features can inflate variance; perfect separation would make coefficients diverge; the 0.91 log loss is better than chance but far from 0.

**5. PredPoints and residual.** For match \(i\):
\[
P_i=3p_{i,H}+1p_{i,D}+0p_{i,A},
\qquad
A_i=3\mathbf{1}_{H}+1\mathbf{1}_{D}+0\mathbf{1}_{A},
\qquad
R_i=A_i-P_i.
\]
For a set \(G\):
\[
\bar R_G=\frac{1}{G}\sum_{i=1}^{G}R_i.
\]
Units: points per game. Chelsea: \((113-88.8)/43=0.5628\) and \((30-21.8)/11=0.7455\), matching “0.56” and “0.75” [PAGE 10]. The left-back claim is \(0.8/38=0.0211\) points per game from “0.8 points over the course of a 38-game season” [PAGE 19]. Breakdown: \(G=0\) is undefined; the paper excludes teams with fewer than 10 games in a key position [PAGE 6]; residual comparisons are observational and confounded by budget, selection, and tactics [PAGE 19-20].

**6. Cross t-test.** The source’s comparison is between mean crosses from the left with and without a left-footed player in a key position. A generic two-sample statistic is
\[
t=\frac{\bar X_1-\bar X_0}{\mathrm{SE}(\bar X_1-\bar X_0)},
\]
with units crosses per game. The source reports means 5.8 versus 5.2 and “t &lt; 0.01” [PAGE 15]. Breakdown: team performances are repeated across teams and seasons, so independence is not guaranteed; the paper does not give confidence intervals or effect sizes; “t &lt; 0.01” is printed as a threshold, not as a t statistic. The combined claim is “29 more crosses from the left side per season” [PAGE 19], but that aggregation should not be treated as an additive causal law.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is explicit. It inherits prevalence estimates from the 2020 meta-analysis: “Estimates of left footedness in the population ranges from 12% ... to 24%” and “60% of left-handers are left footed; 3% of right handers are left footed” [PAGE 2]. It inherits the France 1998 World Cup result that “79% of players were right footed,” that “14% of passes are made with the weaker foot,” and that “Left footed players may be the mirror image of their right footed counterparts” [PAGE 2]. It inherits Marcori et al.’s shooting result: “Differences were only found in foot selection, but not in performance, as success rate did not vary between feet in any position” [PAGE 3]. Those older nulls matter retrocausally: they make the current paper’s small positive claims look like a re-reading of “mirror image” evidence through richer event data, not a reversal of the literature. The current paper’s contribution is the 1,420-game StatsBomb dataset and the WSL/Women’s World Cup extension [PAGE 3, PAGE 8]. The multi-week traps are persistent, not one-off. First, budget: “Richer clubs will be able to afford more left footed players as well as other better players” [PAGE 19-20]. Second, selection: right-footed left backs may be “secondary options and play more games against weaker opponents” [PAGE 20]. Third, tactics: coaches “can implement ways of playing which negate the effects of having fewer left footed players” [PAGE 20]. Fourth, development: left-footed WSL players are concentrated in wide roles, “83% of WSL left footers play at left back, left center back or left wing” [PAGE 9], and the paper asks, “Why is the English female talent system not developing the expected proportion of high-quality left footed players?” [PAGE 21]. These traps operate over transfer windows, selection cycles, and youth-development years. A one-season residual can look like footedness value when it is actually squad wealth, fixture difficulty, or positional scarcity. The paper’s own hedge is therefore central: “there is small but limited evidence to suggest left footers impact match outcomes” [PAGE 19].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive problem is that each actor models the others’ valuation of footedness. A player knows the coach may see a left footer as a left-sided specialist; the coach knows the analyst values left-footed left backs; the analyst knows the opponent anticipates the left-footer’s stronger angle; the talent system knows left footers are scarce and may therefore deploy them early. **Crisis habit regression:** under match pressure, teams often revert to the dominant-foot safe pass or the right-footed left back, so the observed residual may measure crisis behavior rather than footedness. The paper’s tactical caveat supports this: coaches adjust “the way they play to be successful with right footers on the left” [PAGE 20]. **Counter-trap:** the analyst who sees “0.8 points over the course of a 38-game season” [PAGE 19] may over-recruit a left-footed label instead of a two-footed decision-maker. The paper resists this by noting the two-footed aspiration: “Talent systems and coaches may wisely consider the development of two-footed players to be a better long-term aspiration than the development of more left footers” [PAGE 22]. **Clock:** there are two clocks. The match clock rewards immediate left-foot geometry; the developmental clock rewards varied positional experience. The paper hypothesizes that left-footed girls in England were “deployed almost solely to wide positions,” so “their talent journey has perhaps not been as varied in experience as it needs to be” [PAGE 21]. A recursive failure occurs if the player internalizes the wide specialist role, the coach reinforces it because the team needs a left footer, and the analyst then observes the resulting left-footed wide behavior as confirmation. The counter-trap is to delay firm positional decisions and widen early experience [PAGE 21]. The clock also runs against the model: a five-game rolling form window captures recent team state, not a player’s long-run development. Thus the same left-footed player can look causally valuable in one selection regime and redundant in another.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A hard physical/biomechanical/weather veto is not proven by this source. The paper measures in-possession events only: “This study focuses solely on in-possession metrics and does not include out-of-possession events like interceptions or tackles, nor does it look at duel success” [PAGE 6]. Therefore it cannot rule out a defensive-physical veto, a duel-strength veto, or a weather/pitch-condition veto; those layers are simply absent. What it does show is a geometric signature: left-footed left backs are more involved higher and wider, and right-footed left backs pass infield more [PAGE 12, PAGE 17]. xT is higher for left-foot passes in left attacking and defending areas and higher for right-foot passes in the defensive corner square a5 [PAGE 16]. That is consistent with a biomechanical/body-angle explanation: the same pitch cell is easier to access with the foot on that side. But the paper does not control for body orientation, weather, pitch moisture, or physical fatigue. The correct adjudication is therefore a soft contextual veto, not a hard physical one. If a model that includes budget, opponent strength, selection, body orientation, pressure, pass distance, and weather removes the 0.8-point and 6% xT signals, the footedness claim is vetoed. If those signals survive, the physical/weather veto fails. The current evidence supports only this conditional statement: left-foot geometry changes pass angle and cross volume; it does not establish a weather-independent or physical-independent match-outcome law.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1 — Budget and selection confound veto.** Veto condition: the left-back residual advantage disappears when conditioning on a credible club-resource proxy and opponent strength. Verifiable test: re-estimate the match model with wage/transfer-value proxies and “secondary option” selection indicators, using held-out seasons and team-clustered intervals. Prediction if veto triggers: the reported “0.8 points over the course of a 38-game season” [PAGE 19] attenuates toward zero and its interval includes zero; the “positive but insignificant” left-centre-back result [PAGE 19] remains insignificant. Prediction if veto fails: the left-back coefficient stays positive and distinguishable from zero after confound adjustment.

**Scenario 2 — Threshold and small-sample instability veto.** Veto condition: the match-outcome and cross results fail to replicate when footedness is reclassified at 60% and 70% instead of 66%, and when players/teams are bootstrapped. Verifiable test: rerun the classification rule [PAGE 3-4] at alternative cutoffs, exclude the \(n_i=25\) boundary cases, and bootstrap by team-season. Prediction if veto triggers: the 0.8-point effect is unstable in sign or magnitude, while the cross result may survive because Table 3 reports 5.8 versus 5.2 with “t &lt; 0.01” [PAGE 15]. Prediction if veto fails: both the point residual and the cross difference remain directionally stable across cutoffs.

**Scenario 3 — Biomechanical/contextual xT veto.** Veto condition: the “6% higher xT when passing with their stronger foot” [PAGE 16] and the left-back infield-angle advantage vanish after controlling for pass start cell, end cell, distance, angle, pressure, and body orientation. Verifiable test: fit a pass-level model with those covariates and compare left-foot and right-foot residuals; repeat for left-footed versus right-footed left backs. Prediction if veto triggers: the 6% stronger-foot xT gap shrinks toward zero and the sonar-plot wedge differences [PAGE 17-18] become indistinguishable. Prediction if veto fails: a positive stronger-foot residual remains, especially in left attacking/defending areas, and the left-footed left-back infield threat remains higher than the right-footed alternative. These three scenarios are verifiable because each specifies a pre-registered covariate set, a held-out sample, and a directional prediction rather than a post hoc narrative.
</RLVR_COUNTERFACTUAL_VETOES>