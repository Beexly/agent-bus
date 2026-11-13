---
source: "Modeling Player and Team Performance in Basketball - Terner, Franks.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 25
model: deepseek/deepseek-v4.1-flash-1017
words: 8220
---

<NATIVE_REASONING>
We need answer to user. Need produce deep analysis of source paper, with exact XML sections, >=1000 words, >=400 in THINK_TRACE, formal LaTeX equations, units, page citations, verbatim quotes, breakdown regimes, retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes. No betting lines. Need likely "DRIVE SOURCE" asks maybe just process paper? We need infer. We need write response as GSE+GSI Frontier Reasoning Foundry. Need analyze paper, not necessarily sports prediction. We can structure as audit of paper: mathematical operators, assumptions, failure modes, traps, etc. Need mention no betting. Need cite exact [PAGE N] markers and verbatim quotes. Use source pages.

Need satisfy invariants:
1 zero betting lines: avoid spreads/totals/moneylines/odds. We can mention "point spread" as paper quote? Invariant says never mention spreads, totals, moneylines, or odds. But paper has "point spread" and "home/away points difference". Need avoid? We should not mention betting lines. But page 7 quote has "point spread" in Deshpande & Jensen? We can avoid quoting that? It says exact page citations and verbatim quotes when source pages provided. We can quote relevant equations. Need avoid "spread" word maybe. We can say "score differential" instead of point spread. But source has "point spread" on page 7/8? Actually page 8: "rather than the point spread". Avoid quoting that exact phrase. Use other quotes. Never mention odds. "win probability" okay? It's not betting line. Avoid "betting" maybe paper mentions gambling but no need. We can mention "no wager-related quantity is used." Fine.

2 ZERO TOY EQUATIONS: don't invent fake ratios. We can present formal equations from paper: APM, ridge, EPV, EPVA, production curve, logistic shot model, multinomial shot attempt, hot hand conditional. State units assumptions exact singularity/breakdown. Need formal LaTeX. Need be careful: equations from paper have units. APM D_i is "100 times difference in points between home and away teams in stint i" (points per 100? Actually Di = 100 times difference in points between home and away in stint; if stint length varies, weird. It's 100*point differential? We can state reported in points per 100? The paper says 100 times difference in points. We can label units: points × 100? Hmm. Need avoid inventing. Use paper's definition. Could say "\(D_i\) is 100 times the home-away score difference in stint \(i\) (paper's scaling; dimensionless scoring units × 100)" and \(x_{ip}\in\{1,-1,0\}\). Assumption: stints are no-substitution intervals. Breakdown: multicollinearity, rank deficiency, high variance. Ridge: \(\hat\beta = \arg\min_\beta (D-X\beta)^T(D-X\beta)+\lambda\beta^T\beta\); closed form \((X^TX+\lambda I)^{-1}X^TD\). Units: D points scaled; β points per 100? λ nonnegative; if λ→0 rank deficient singular; if λ→∞ β→0. Need exact singularity: \(X^TX\) singular if players always co-play or no identifying variation; ridge unique for λ>0. Lasso nonunique? If λ>0 maybe. Good.

EPV: \(v_{it}=E[Z_i|X_{i0},...,X_{it}]\), \(Z_i\in\{0,2,3\}\) points. Assumption semi-Markov/coarsened Markov; conditional independence in Eq 4. Breakdown if macro states not Markov, hidden confounders, limited tracking precision, unobserved ball spin etc. Equation 5 decomposition. EPVA: \(EPVA(p)=1/N_p \sum_{\{t_s,t_e\}\in T^p} (v_{t_e}-v^{r(p)}_{t_s})\). Need check equation: page 9 says \(v_{te} - v^{r(p)}_{ts}\) over league average replacement. In source: "vte −vr(p) ts" maybe \(v_{t_e} - v^{r(p)}_{t_s}\). Units: points per game? Since average over games, units points/game? The difference \(v_{t_e}-v^{r(p)}_{t_s}\) points (EPV). Divided by N_p games -> points per game. But if averaging over games not touches. Mention. Assumption: possession value scale 0/2/3; ball-touch-only; ignores off-ball/defense. Breakdown: specialists high EPVA; off-ball gravity omitted; defensive omitted.

Production curve: \(Y_{pt}=f_p(t)+\epsilon_{pt}\). Units aggregate skill metric (e.g. RAPM points per 100 possessions? VORP dimensionless? Paper says continuous aggregate skill i.e. RAPM or VORP; don't over specify. Use units of chosen Y). Assumption: smooth \(f_p\), uncorrelated errors; irregular sparse observations; heteroskedastic exposure. Breakdown: injury, playing time, team quality; sampling variance nonconstant; if minutes/exposure not modeled, bias.

Shot efficiency logistic: \(E[Y_{ip}|\ell_{ip},X_{ijp}] = \text{logit}^{-1}(\alpha_{\ell_i,p} + \sum_{j=1}^J \beta_j X_{ij})\). Units: Y binary; α spatial random effect log-odds; β log-odds per covariate (defender distance feet). CAR prior; breakdown when small samples per region, spatial confounding, defender distance endogenous. Use quote page 11: "Franks et al. (2016) show that the majority of observed differences in 3PT% are due to sampling variability rather than true differences in ability" [PAGE 11]. And page 12 quote about reversal paradox: "This eﬀect... is an example of a “reversal paradox” ... highlights the importance of accounting for spatial context" [PAGE 12]. Need exact verbatim. Use quote with typos? We can quote exact.

Shot attempt multinomial: Equation 8. Need define \(S(p,b)\), \(F_n(j,p)\). Units probabilities. Breakdown: 26 outcomes, discrete regions, defender assignment uncertainty, multicollinearity. Assumption: NMF regions a priori; multinomial logit independence of irrelevant alternatives? Hmm paper doesn't mention IIA. We can state multinomial logit assumes ratio of probabilities for two outcomes independent of others (IIA) if standard. Is that inventing? It is a property of multinomial logit. We can state as model property, not fake. But be careful. Breakdown if IIA violated. Good.

Hot hand: \(E[Y_{p,t}|Y_{p,t-1}=1,...,Y_{p,t-k}=1,X_t]\approx E[Y_{p,t}|X_t]\). Units probability. Selection bias. Quote page 14: "After correcting for this bias, they estimate that there is an 11% increase in the probability of making a three point shot given a streak of previous makes" [PAGE 14]. Need mention 11% as reported. Breakdown: selection of sequences, measurement error, conditioning on observed makes vs probabilities.

Defensive model: defender location \(\mu_{tk}=\gamma_o O_{tk}+\gamma_b B_t+\gamma_h H\). Units court coordinates (feet? tracking x,y likely). Assumption normal about point, HMM; breakdown if switching, zone, misassignment, gravity. Quote page 15: "They find that the average defender location is about 2/3 of the way between the segment connecting the hoop to the offensive player being guarded, while shading about 10% of the way toward the ball location." [PAGE 15]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. The paper is basketball indoor; weather veto? Need adjudicate if any cross-layer veto (physical/biomechanical/weather) invalidates inferences. We can say weather is not a modeled layer; indoor arena stabilizes; no direct weather variable. Physical/biomechanical: tracking data at >20 fps, (x,y,z) ball within 1 cm; shot trajectories entry angle ~45°, 2 inches beyond center. But no biomechanical load/wearable public. Veto proof: if physical constraints (ball trajectory precision, human movement limits) violated, EPV/logistic estimates break. Weather veto: basketball indoor; weather not in paper; any weather claim is unsupported and vetoed. Need include "proof" maybe formal: If unobserved weather W affects performance and correlates with tracking covariates, conditional independence Eq 4 fails: \(P(C_s|C_{\delta t}, X_{0:t}) \neq P(C_s|C_{\delta t})\). Because indoor, W effect likely negligible but not measured; cross-layer veto requires explicit data. For biomechanics: wearable data not discussed; page 3 says "many basketball teams... collect biometric data... generally unavailable... Because there are few publications... we do not discuss them further" [PAGE 3]. So biomechanical layer is absent; cannot infer injury/load. Veto any claim that model captures fatigue/biomechanics. Weather: paper does not mention weather; no evidence. We can say "weather veto: no weather operator in paper; any weather-conditioned conclusion is out-of-model." Need avoid "proof" as overly strong? We can provide adjudication.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need trace from Bill James/sabermetrics, Oliver/Hollinger, Kubatko et al., Efron & Morris shrinkage, Rosenbaum APM, Sill RAPM, Cervone EPV, Franks meta-metrics, Miller hot-hand bias. Multi-week traps: confounding/reversal paradox, multicollinearity, selection bias in hot hand, small samples, exposure heteroskedasticity, defensive matchup unobserved, off-ball gravity omitted, data access. Need mention "multi-week traps" maybe traps that take weeks to surface: repeated re-analysis of same tracking data, model drift, prior sensitivity, cross-validation leakage, hidden strategic confounding. Need cite pages. Use exact quotes: page 2 "Dean Oliver and John Hollinger were early innovators..." [PAGE 2]; page 6 "Efron & Morris (1975) provide a theoretical justification..." [PAGE 6]; page 7 "major challenge with APM and related methods is multicollinearity" [PAGE 7]; page 15 "more data and new methods do not automatically imply more insight" [PAGE 15]. Good.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need interpret: model of agents/coaches/players recursive beliefs, crisis habit regression (under pressure revert to habits), counter-trap (opponent anticipates), clock (shot clock/time). The paper has shot clock, score differential, pressure, hot hand, reinforcement learning. Need analyze recursive ToM: players/coaches form beliefs about defender/opponent, shot selection, defensive matchups. Crisis habit regression: under high pressure, players may revert to prior shot habits; paper cites Zuccolotto et al. use nonparametric regression how shot selection varies as function of shot clock and score differential [PAGE 13]. It also cites Alferink matching law and Neiman & Loewenstein reinforcement learning: previous made three increases future three attempt [PAGE 13]. Counter-trap: defender anticipates shooter's habit; "defenders may strategically give more space to the poorest shooters" [PAGE 16]; selection bias. Clock: shot clock as state in EPV covariates (player locations, shot clock etc) [PAGE 13/14]. Need formal: recursive belief operator \(B_p^{(k)}(B_d(...))\), shot selection probability \(P(S(p,b)|\ell,X)\). But avoid toy equations? We can use formal probability notation, not fake ratios. Need maybe define recursive ToM as nested expectations: \( \pi_p(a|h_t) = f_p(\mathbb{E}_{d}[\pi_d(\cdot|h_t)], \text{clock}, \text{score})\). But not in paper. Need not invent equations? Invariant says formal LaTeX equations, no fake ratios. We can state conceptual operator, not empirical. But maybe okay if clearly conceptual. Better to use paper's equations as substrate. For ToM, discuss "EPV \(v_{it}=E[Z_i|X_{i0},...,X_{it}]\)" already includes state but not opponent beliefs; shot satisfaction subtracts counterfactual non-shooting state. That is counterfactual reasoning. Recursive ToM: shooter's decision depends on expected defender response, defender's matchup model \(\mu_{tk}\) depends on offensive player's location and ball; Keshri extends to player identities and court locations. That's a one-level recursive model. Crisis habit regression: under pressure, players may reduce depth of recursive reasoning and use habitual policy; paper doesn't test this directly but cites pressure/shot clock. We can label as hypothesis requiring test, not claim. Need "counter-trap vs clock" maybe two traps: opponent counter-strategy and clock pressure. Multi-week? Hmm.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning with Verifiable Rewards? We can create scenarios that if observed would veto model claims. Need 3 verifiable veto scenarios with predictions. Ensure no betting. Scenarios should be reproducible using data. E.g.:
1. Reversal-paradox confound: Estimate defender-distance coefficient without shot-region adjustment; predict negative/zero coefficient; adding region should flip to positive. If not, model/claim vetoed. Use page 12 quote. Prediction: unadjusted coefficient ≤0, adjusted >0. This is verifiable from 115k shots? Good.
2. Hot-hand selection bias: Compute conditional make probability using standard sequence selection vs bias-corrected; predict standard estimate near zero, corrected ~11% increase for 3PT after streak. If corrected not materially larger, the hot-hand claim from page 14 is vetoed. Need exact. Prediction: corrected > uncorrected; if not, veto.
3. EPVA off-ball/defense blind spot: Compare EPVA ranking to RAPM or defensive metric for players with high off-ball gravity; predict low correlation for off-ball specialists and defenders. If EPVA fully explains value, veto. But how verifiable? Use player subsets: three-point specialists high EPVA; players who set screens/cuts lower. Page 9 quote: "specialists, like three point shooting experts, tend to have high EPVA... many players... add significant value by setting screens or making cuts... not included" [PAGE 9]. Prediction: EPVA underestimates off-ball/defensive contributors relative to RAPM; if EPVA and RAPM rankings agree equally for these subsets, the limitation claim is falsified. Good.
Could include 4th? Need 3.

Need "SOURCE_OPERATORS_AND_EQUATIONS" with formal LaTeX, units, page citations, breakdown. Need include all equations. Need maybe a table? XML sections. We can use paragraphs and lists.

Need "THINK_TRACE" >=400 words. Deep multi-hop derivation & gray-zone audit. Need include reasoning about paper's equations and assumptions. Could be 500-700 words. Need not reveal hidden chain-of-thought? User asks for THINK_TRACE. We can provide a "trace" that is a structured audit, not private chain-of-thought. We can say "Audit trace" with high-level derivation. Should be okay. Need not include hidden internal reasoning. We can provide concise but deep.

Need overall >=1000 words. We'll be well over.

Need exact XML sections with tags exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need maybe start with short intro? The XML sections must be exact. We can include no extra outside? Probably okay to include all inside. Need no betting lines. Need avoid "point spread" phrase. Avoid "odds". Avoid "moneyline". Avoid "total". But "total" may appear in "total contribution" page 9. Invariant says never mention "totals" as betting line. Could avoid word "total" where possible. But "total contribution" is not betting. To be safe, avoid "total" as a noun? Hmm. The invariant specifically "spreads, totals, moneylines, or odds." We can avoid "total" word entirely? It might be hard. Use "overall contribution". Avoid "spread" entirely except maybe "score differential". Avoid "odds". Avoid "moneyline". "betting" maybe avoid. Good.

Need cite page markers exactly [PAGE 7]. Verbatim quotes. Use quotes with exact spelling. Need ensure quotes are from source. Let's collect quotes:

Page 1: "quantitative analyses of the game inform team strategy, management of player health and fitness, and how teams draft, sign, and trade players." [PAGE 1]. Maybe not needed.

Page 2: "Dean Oliver and John Hollinger were early innovators who argued for evaluating players on a per-minute basis rather than a per-game basis and developed measures of overall player value, like Hollinger’s Player Efficiency Rating (PER)" [PAGE 2]. Good.

Page 3: "Because there are few publications on wearable data in basketball to date, we do not discuss them further." [PAGE 3]. Good for biomechanical veto.

Page 6: "Efron & Morris (1975) provide a theoretical justification for hierarchical modeling as an approach for improving estimation in low sample size settings" [PAGE 6]. Good.

Page 7: "the major challenge with APM and related methods is multicollinearity: when groups of players are typically on the court at the same time, we do not have enough data to accurately distinguish their individual contributions using plus-minus data alone." [PAGE 7]. Good. Also "regularization is not a panacea: the inferred value of players who often share the court is sensitive to the precise choice of regularization (or prior) used." [PAGE 7]. Good.

Page 8: EPV equation. "The EPV at time t in possession i is defined as \(v_{it}=E[Z_i|X_{i0},...,X_{it}]\)" [PAGE 8]. Actually paper has equation 3 on page 8. Quote maybe. "Ignoring free throws for simplicity, a possession can take on values \(Z_i \in \{0,2,3\}\)." [PAGE 8]. Good.

Page 9: "EPVA measures the value added by a player only when that player touches the ball. As such, specialists, like three point shooting experts, tend to have high EPVA because they most often receive the ball in situations in which they are uniquely suited to add value. However, many players around the NBA add significant value by setting screens or making cuts which draw defenders away from the ball. These actions are hard to measure and thus not included in the original EPVA metric" [PAGE 9]. Good.

Page 10: "The statistical challenge in production curve analysis is to infer smooth trajectories \(f_p(t)\) from sparse irregular observations of \(Y_{pt}\) across players" [PAGE 10]. Actually page 10. Good. "athlete playing time varies across games and seasons, which means sampling variability is non-constant." [PAGE 10].

Page 11: "Franks et al. (2016) show that the majority of observed differences in 3PT% are due to sampling variability rather than true differences in ability, and thus is a poor metric for player discrimination." [PAGE 11]. Good.

Page 12: "This eﬀect, which occurs because defender distance is also dependent on shot region, is an example of a “reversal paradox” (Tu et al., 2008) and highlights the importance of accounting for spatial context in basketball. It also demonstrates the danger of making causal interpretations without carefully considering the role of confounding variables." [PAGE 12]. Good.

Page 13: "Zuccolotto et al. (2018) use nonparametric regression to infer how shot selection varies as a function of the shot clock and score diﬀerential" [PAGE 13]. Good. "Neiman & Loewenstein (2011) study this phenomenon from a reinforcement learning perspective and demonstrate that a previous made three point shot increases the probability of a future three point attempt." [PAGE 13]. Good.

Page 14: "After correcting for this bias, they estimate that there is an 11% increase in the probability of making a three point shot given a streak of previous makes, a significantly larger hot-hand effect than had been previously reported." [PAGE 14]. Good.

Page 15: "They find that the average defender location is about 2/3 of the way between the segment connecting the hoop to the offensive player being guarded, while shading about 10% of the way toward the ball location." [PAGE 15]. Good. Also "Understanding defense requires as much an understanding about what does not happen as what does happen." [PAGE 14? Actually page 14 bottom: "Understanding defense requires as much an understanding about what does not happen as what does happen." [PAGE 14]. Good.

Page 15/16: "we caution that more data and new methods do not automatically imply more insight." [PAGE 15]. Good. "causal thinking will be an essential component of the future of basketball analytics" [PAGE 16]. Good.

Page 16: "defenders may strategically give more space to the poorest shooters. Without this contextual information, this would make it appear as if defender distance is negatively correlated with the probability of making the shot." [PAGE 16]. Good.

Page 3: "high resolution technology has enabled (x, y, z) tracking of the basketball to within one centimeter of accuracy." [PAGE 3]. Good.

Page 11: "Marty (2018) and Daly-Grafstein & Bornn (2019) show that the optimal entry location is about 2 inches beyond the center of the basket, at an entry angle of about 45°." [PAGE 11]. Good.

Page 12: Rao-Blackwellized estimate formula. Good.

Need "exact singularity/breakdown regimes" for each operator. Let's enumerate:
- APM: \(X\) columns linearly dependent when lineups co-occur; \(X^TX\) singular; β not identifiable. If λ=0, no unique solution. If λ>0, unique but biased; as λ→∞ β→0. If stints no substitutions? The unit is stint; sampling error correlated by lineup. If players always together, columns identical.
- EPV: Markov assumption Eq 4; if not, \(v_{it}\) not identified from macro transitions. Breakdown if unobserved state (fatigue, defensive scheme) affects future. If transition probabilities zero for some states, absorbing probabilities maybe not unique? Need not.
- EPVA: if \(N_p=0\) undefined; if touches selected nonrandom, selection bias. If player never touches, EPVA undefined/zero. Off-ball actions not in \(T^p\).
- Production curve: if \(t\) sparse and no shared prior, \(f_p\) nonidentifiable; if exposure correlated with ability, heteroskedastic errors; if injury missing not at random.
- Shot efficiency: if region×player has zero attempts, α not estimable without shrinkage; CAR prior needed. If defender distance is endogenous to shot region, reversal paradox. If ball trajectory precision limited, \(p_i\) not deterministic.
- Shot attempt: multinomial logit; if outcome categories not exhaustive? They include no shot. If regions overlap? NMF disjoint. If \(F_n\) collinear with player identity? Multicollinearity.
- Defender HMM: if defender assignment hidden and switching, HMM local modes; zone defense breaks man-to-man assumption.
- Hot hand: selection bias; if condition on observed makes, estimator biased; if k too large, small sample. Measurement error.

Need "units" for each:
- APM: D_i scaled points ×100; β points per 100 per player indicator? Actually x_{ip} ∈ {1,-1,0}; β_p in D units (100×points). Could say "in the same scaled point units as D_i." 
- Ridge: λ has units of (X^TX) inverse? Since penalty λβ^Tβ must match squared residuals \(D-Xβ\) units. λ has units of \(X^TX\), i.e. squared D per squared β. Don't overcomplicate. State λ nonnegative penalty parameter, dimensionless only if D and X standardized; otherwise units chosen by scaling. Good.
- EPV: points (0,2,3). EPVA points per game due to average over N_p games.
- Production: units of Y (chosen aggregate skill metric).
- Logistic: α log-odds, β log-odds per unit covariate (defender distance in feet).
- Multinomial: probabilities dimensionless; α,β log-odds.
- Defender: coordinates in feet? Tracking (x,y) maybe in feet; we can state "court-coordinate units of the tracking system (typically feet)" but paper doesn't specify. Better "in the same length units as \(O_{tk}, B_t, H\)." Avoid inventing feet. But defender distance in feet is in paper Figure 3. We can say "defender distance in feet" for logistic. For coordinates, "tracking coordinate units."

Need "crisis habit regression vs counter-trap vs clock" maybe structure:
- Crisis habit regression: Under pressure, policy \(\pi_p(a|h_t)\) may collapse to low-depth habit; shot selection becomes more dependent on prior reinforcement and less on full EPV. Evidence: Neiman & Loewenstein previous made 3 increases future 3; matching law. But paper does not directly estimate pressure interaction; Zuccolotto shot clock/score differential. So claim is plausible but not proven.
- Counter-trap: defender/opponent models shooter's habit; strategic giving space to poor shooters creates reversal paradox. The defender's action is a best response to believed shooter type. This is recursive ToM: defender's belief about shooter ability → defender distance → observed shot probability. If analyst ignores belief, sign reverses. 
- Clock: shot clock is state variable; as clock expires, option value changes; EPV state includes shot clock [PAGE 13/14]. Crisis may interact with clock: late clock reduces counterfactual pass/dribble option, increases forced shots; shot satisfaction subtracts non-shooting counterfactual [PAGE 13/14]. Need not overclaim.

Need "RLVR_COUNTERFACTUAL_VETOES": We can define "veto" as if prediction fails, reject paper's stated mechanism/metric. Need 3 scenarios with predictions. Use "RLVR" maybe "reinforcement-learning-with-verifiable-rewards" audit. We can say "RLVR counterfactual veto" as in verifiable reward checks. Each scenario: intervention/estimand, predicted signature, veto condition. Need no betting.

Let's draft.

Need word count. We'll write substantial. Need ensure XML well-formed. Use LaTeX with escaped? In XML text, \(...\) okay. Avoid unescaped < or > inside text? We can use \(>\)? Actually in XML, `<` must be escaped if not tag. We can avoid less-than signs or use `\le`. Use `\in`. Use `\approx`. Good. Ampersand? Avoid `&` or escape `&amp;`. Use "and". Need not use `&`. Use "R^2" no ampersand. Use `%` okay. Avoid `<` in text. Use `\lambda>0` with `>` okay? In XML, `>` is allowed in text? Yes, `>` is allowed; `<` not. But `>` okay. However, `&` not. Use `\lambda > 0` with `>` fine. Avoid `<=` with `<`. Use `\le`. Good.

Need exact tags. Could include section headings inside text. Fine.

Need "verbatim quotes" with exact unicode? Use standard. The source has "eﬀect" with ligature; we can quote with "effect" or exact? "Verbatim" maybe exact including ligature? We can copy exact as in source, but rendering may not matter. Use quotes as in source with "eﬀect" maybe. We'll use exact visible text with ligature? It may be okay. Need page markers. Good.

Need no "spread" word. Check my draft for "point spread" — avoid. "score differential" okay. "total" avoid? Use "overall". "odds" avoid. "betting" avoid. "moneyline" avoid. Good.

Need mention "free throws" okay.

Need "weather veto proof": The paper doesn't mention weather. Need state "weather operator absent." That is proof of no weather-conditioned validity. Indoor context: basketball arenas indoor; paper doesn't model weather. Could say "The paper contains no weather covariate, no outdoor venue indicator, and no meteorological data; therefore any weather-conditioned inference would be an extrapolation beyond the source." This is a veto. For physical/biomechanical: tracking accuracy and entry angle; wearable data excluded. Need mention "biomechanical load, fatigue, injury" not modeled; page 3 says wearable data not discussed. So veto claims about fatigue/injury. Cross-layer: if a physical constraint like ball entry angle influences make probability, it's included as trajectory in some models but not in RAPM/EPVA. If biomechanical load changes shooting, omitted variable. Weather: negligible indoor but unmeasured; if included, must be explicit.

Need "THINK_TRACE" deep multi-hop derivation. We'll write as audit steps:
1. Identify unit of analysis: stint, possession, shot, player-season, defender matchup.
2. Map equations to estimands: APM causal? Not causal due to confounding; RAPM shrinkage; EPV Markov; EPVA offensive touch; production curves; shot models.
3. Check assumptions and breakdown. 
4. Gray-zone: metrics are descriptive not causal; EPVA and RAPM tradeoff; hot hand bias; defense unobserved; data availability.
5. Cross-layer: physical tracking precision, biomechanics absent, weather absent.
6. Decision: what claims are supported. 
Need >=400 words. We'll aim 600.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe long. Include equations with tags. We'll present in subsections.

Let's compose carefully.

Potential issue: "ZERO TOY EQUATIONS" - don't invent fake ratios. We can avoid any equations not in paper except conceptual recursive ToM. Maybe in RECURSIVE_THEORY_OF_MIND, use inequalities and expectations from paper. We can state "No new ratio is introduced." Good. We can use formal probability notation to describe the concept, but not as empirical equation. Maybe acceptable. But to be safe, use paper's equations and label conceptual mappings.

Let's write.

Need "CROSS_LAYER_VETO_ADJUDICATION" include formal veto condition:
A cross-layer variable \(W_t\) (weather, biomechanical load) is a veto if \(W_t\) is a common cause of both tracking covariates \(X_t\) and outcome \(Z_i\): \(P(Z_i|X_t,W_t)\neq P(Z_i|X_t)\). Under paper's EPV assumption Eq 4, if \(W_t\) is omitted and correlated, then \(P(C_s|C_{\delta t}, X_{0:t}) \neq P(C_s|C_{\delta t})\). Since paper has no W, any claim requiring W is out-of-model. For indoor basketball, weather W likely weak but not measured; biomechanical W absent. Good.

Need "RLVR" maybe define: "verifiable reward" = an out-of-sample or counterfactual check with a pre-registered signature. Good.

Let's ensure >=1000 words. We'll write ~3000-4000 words. Desired oververbosity 5, but user asks depth. We'll be thorough.

Let's draft final.

Check XML: Use `<THINK_TRACE>` etc. Inside, avoid `<` characters. Use `\le` not `<=`. Use `\lambda > 0` okay. Use `\neq` okay. Use `\mathbb{E}`. Use `\text{logit}^{-1}`. Use `\sum`. Use `\left(`. Good. Ampersand avoid. Use "and" instead of `&`.

Need quotes with `"` okay. Apostrophes okay. Unicode quotes okay.

Potential issue: In XML, `>` is allowed. `&` not. We won't use ampersand. "R and Python" no ampersand. "Franks et al." no ampersand. "D'Amour" okay.

Need "eﬀect" ligature maybe not. We can quote "effect" but if exact verbatim? The source has ligature due to PDF; we can quote normalized. Better say "verbatim (ligatures normalized)". But user asks verbatim. We can include exact words; minor ligature normalization acceptable? Hmm. We can state "quotes preserve wording; PDF ligatures normalized." That is transparent. Add in intro? Not necessary.

Let's write.

Need maybe mention "no betting lines" in intro? "No wager-related quantity is used." Fine.

Let's formulate.

Draft:

<THINK_TRACE>
Audit trace... 
- The paper's central move is to replace box-score aggregates with latent-state models. I trace each operator to its unit...
...
</THINK_TRACE>

Need "gray-zone audit" word. Include "gray-zone" explicitly.

Now SOURCE section. Use bullets for equations. Need exact page citations.

Equation APM:
\[
D_i=\beta_0+\sum_{p=1}^{P}\beta_p x_{ip}+\epsilon_i,\quad x_{ip}\in\{1,-1,0\}
\]
[PAGE 7]. Units. Breakdown.

Ridge:
\[
\hat\beta=\arg\min_\beta (D-X\beta)^T(D-X\beta)+\lambda\beta^T\beta
\]
and closed form. [PAGE 7]. Breakdown.

EPV:
\[
v_{it}=\mathbb{E}[Z_i\mid X_{i0},\dots,X_{it}],\quad Z_i\in\{0,2,3\}
\]
[PAGE 8]. Assumption Eq 4:
\[
P(C_s\mid C_{\delta t},X_0,\dots,X_t)=P(C_s\mid C_{\delta t})
\]
for \(s>\delta t\). [PAGE 8]. Decomp:
\[
v_{it}=\sum_c \mathbb{E}[Z_i\mid C_{\delta t}=c]P(C_{\delta t}=c\mid X_{i0},\dots,X_{it})
\]
[PAGE 8]. Breakdown.

EPVA:
\[
\mathrm{EPVA}(p)=\frac{1}{N_p}\sum_{\{t_s,t_e\}\in T^p}\left(v_{t_e}-v^{r(p)}_{t_s}\right)
\]
[PAGE 9]. Units. Breakdown.

Production:
\[
Y_{pt}=f_p(t)+\epsilon_{pt}
\]
[PAGE 10]. Units. Breakdown.

Shot efficiency:
\[
\mathbb{E}[Y_{ip}\mid \ell_{ip},X_{ijp}]=\text{logit}^{-1}\left(\alpha_{\ell_i,p}+\sum_{j=1}^{J}\beta_jX_{ij}\right)
\]
[PAGE 11]. Units. Breakdown.

Shot attempt:
\[
\mathbb{E}[S(p,b)\mid \ell_{ip},X_{ip}]=\frac{\exp\left(\alpha_{pb}+\sum_{j=1}^{5}F_n(j,p)\beta_{jb}\right)}{1+\sum_{\tilde p,\tilde b}\exp\left(\alpha_{\tilde p\tilde b}+\sum_{j=1}^{5}F_n(j,\tilde p)\beta_{j\tilde b}\right)}
\]
[PAGE 13]. Note denominator includes all outcomes. Units. Breakdown.

Hot hand:
\[
\mathbb{E}[Y_{p,t}\mid Y_{p,t-1}=1,\dots,Y_{p,t-k}=1,X_t]\approx \mathbb{E}[Y_{p,t}\mid X_t]
\]
[PAGE 14]. Breakdown.

Defensive matchup:
\[
\mu_{tk}=\gamma_o O_{tk}+\gamma_b B_t+\gamma_h H
\]
[PAGE 15]. Units coordinates. Breakdown.

Rao-Blackwell:
\[
\hat\theta_{FG-RB}=\frac{\sum p_i}{n},\quad p_i=\mathbb{E}[Y_i\mid X]
\]
[PAGE 12]. This is from paper. Units probability. Breakdown.

Need "exact singularity/breakdown regimes" maybe after each.

RETROCAUSAL_GENEALOGY:
Trace lineage: Bill James -> Oliver/Hollinger -> Kubatko -> Efron & Morris -> Rosenbaum APM -> Sill RAPM -> Cervone EPV -> Franks meta -> Miller hot hand. Multi-week traps: confounding, selection bias, prior sensitivity, data access. Use quotes.

RECURSIVE_THEORY_OF_MIND:
- Define actors: shooter p, defender d, coach. Paper's models embed defender response in shot attempt multinomial and matchup HMM. 
- Crisis habit regression: under pressure, habitual policy. Evidence matching law/reinforcement; shot clock/score. Not directly tested. 
- Counter-trap: defender anticipates; strategic space to poor shooters; reversal. 
- Clock: shot clock as state; late clock reduces counterfactual option. 
- Audit: no model of beliefs; only behavioral proxies. Need not claim.

CROSS_LAYER:
- Physical: tracking precision, 20 fps, 1 cm ball, entry angle. Veto if precision insufficient. 
- Biomechanical: wearable excluded; no load/injury. Veto fatigue claims.
- Weather: absent; indoor. Veto weather-conditioned claims. Formal condition.

RLVR:
Scenario 1: reversal paradox. Prediction. Veto.
Scenario 2: hot-hand bias correction. Prediction. Veto.
Scenario 3: EPVA blind spot. Prediction. Veto.
Maybe include "RLVR reward" = if predicted ordering holds. Good.

Need ensure no "spread" word. Check "score differential" okay. "point difference" okay. "point spread" avoid. "totals" avoid. "odds" avoid. "moneyline" avoid. Good.

Let's write final. Use no markdown? XML sections with plain text. We can use LaTeX. Fine.

Need "DRIVE SOURCE" maybe user expects output regarding source. We'll not mention "drive" beyond citation. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
Audit trace and gray-zone derivation. The paper’s central move is to replace box-score aggregates with latent-state or latent-skill models, so I first map each operator to its unit of analysis: stint for adjusted plus-minus, possession for Expected Possession Value, touch interval for EPVA, player-season for production curves, shot attempt for shot-efficiency and shot-selection models, and defender-matchup interval for defensive assignment. That mapping matters because the paper repeatedly warns that basketball metrics mix player ability, teammate ability, strategy, and chance variation; the authors state that observed metrics “reflect multiple latent player attributes but are also influenced by team ability, strategy, and chance variation” [PAGE 6]. Thus, the audit cannot treat any single coefficient as a clean causal player effect without an identification argument.

The first multi-hop derivation is APM to RAPM. APM regresses a scaled home-away score difference on player indicators for each stint [PAGE 7]. The identification problem is structural: if players share the court repeatedly, the design matrix has near-collinear columns, so the coefficient vector is high-variance or rank-deficient. Ridge adds a penalty and yields a closed-form biased estimator, but the paper explicitly says “regularization is not a panacea: the inferred value of players who often share the court is sensitive to the precise choice of regularization (or prior) used” [PAGE 7]. So the gray zone is not “ridge fixes APM”; it is “ridge makes APM estimable under a chosen prior, but the prior is part of the estimand.”

The second derivation is EPV. The paper defines EPV as a conditional expectation of possession value given all available covariate information up to time \(t\) [PAGE 8]. The tractable version coarsens micro-states into semi-Markov macro-states and assumes that future coarse states depend only on the current coarse state, not on earlier full-resolution data [PAGE 8]. That is a strong conditional-independence claim. If an unobserved state such as fatigue, defensive scheme, or crowd pressure affects both the current macro-state and the next transition, the decomposition in Equation 5 is biased. EPVA then averages EPV differences over games in which a player possessed the ball [PAGE 9]. The paper itself flags the gray zone: EPVA measures value only when the player touches the ball, so three-point specialists can look high-value while screeners and cutters are omitted; it also ignores defense [PAGE 9]. Therefore EPVA is a contextual offensive-decision metric, not an overall player-value metric.

The third derivation is the shot models. The logistic shot-efficiency model includes a spatial random effect for player-by-region baselines and defender-distance covariates [PAGE 11]. The paper’s worked example is the key gray-zone audit: when shot region is ignored, defender distance can appear negatively related to make probability, but adjusting for region reverses the sign; the authors call this a “reversal paradox” and warn about “the danger of making causal interpretations without carefully considering the role of confounding variables” [PAGE 12]. The shot-attempt multinomial model similarly conditions on defender matchups and player-by-region propensities [PAGE 13], but matchup assignment is itself inferred from tracking data, so measurement error in matchups propagates into the shot-attempt coefficients.

The fourth derivation is production curves. The model \(Y_{pt}=f_p(t)+\epsilon_{pt}\) treats observed aggregate skill as a smooth player trajectory plus noise [PAGE 10], but the paper notes that careers are sparse, irregular, injured, and exposed at different rates; sampling variability is non-constant because playing time varies [PAGE 10]. Thus, production curves are only as good as the exposure model and the similarity prior. The hot-hand section adds a further estimator-level trap: the original sequence-selection design attenuates the effect, and after correction the paper reports an 11% increase in three-point make probability after a streak [PAGE 14]. The gray zone is that this is a corrected estimate under a specific selection model, not a universal law of “momentum.” Overall, the paper supports descriptive and predictive modeling; it does not support unqualified causal player-value claims. The authors themselves conclude that “more data and new methods do not automatically imply more insight” [PAGE 15] and that “causal thinking will be an essential component of the future of basketball analytics” [PAGE 16].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The following are the source’s formal operators, with units, assumptions, and breakdown regimes. No wager-related quantity is used.

1. Adjusted plus-minus, APM. The paper states:
\[
D_i=\beta_0+\sum_{p=1}^{P}\beta_p x_{ip}+\epsilon_i,\qquad x_{ip}\in\{1,-1,0\}
\]
where \(D_i\) is “100 times the difference in points between the home and away teams in stint \(i\)” and \(x_{ip}\) indicates whether player \(p\) is home, away, or not playing [PAGE 7]. Units: \(D_i\) is in the paper’s scaled scoring units, and \(\beta_p\) is in the same scaled scoring units per player indicator. Assumption: stints are stretches without substitutions; player effects are additive and constant within stint. Breakdown: if players almost always appear together, the columns of \(X\) are collinear; \(X^TX\) is singular or ill-conditioned, so \(\hat\beta\) has large variance or is non-unique. The paper calls multicollinearity “the major challenge” because “when groups of players are typically on the court at the same time, we do not have enough data to accurately distinguish their individual contributions using plus-minus data alone” [PAGE 7].

2. Regularized APM, RAPM. The ridge objective is:
\[
\hat\beta=\arg\min_{\beta}\left[(D-X\beta)^T(D-X\beta)+\lambda\beta^T\beta\right]
\]
with closed form
\[
\hat\beta=(X^TX+\lambda I)^{-1}X^TD
\]
[PAGE 7]. Units: \(\lambda\) is a nonnegative penalty parameter with units chosen by the scaling of \(X\) and \(D\); if variables are standardized it is dimensionless. Assumption: a mean-zero shrinkage prior or penalty is acceptable. Breakdown: at \(\lambda=0\), the estimator reduces to APM and inherits rank deficiency; as \(\lambda\to\infty\), \(\hat\beta\to 0\); for intermediate \(\lambda\), estimates are biased and sensitive to the prior. The paper notes that a prior based on playing time or position could reduce bias relative to “standard regularization techniques, which shrink all player coefficients in exactly the same way” [PAGE 8].

3. Expected Possession Value, EPV. The paper defines:
\[
v_{it}=\mathbb{E}[Z_i\mid X_{i0},\dots,X_{it}],\qquad Z_i\in\{0,2,3\}
\]
[PAGE 8]. Units: points, because \(Z_i\) is possession value in \(\{0,2,3\}\). Assumption: coarsened macro-states are semi-Markov, and for \(s>\delta t\),
\[
P(C_s\mid C_{\delta t},X_0,\dots,X_t)=P(C_s\mid C_{\delta t})
\]
[PAGE 8]. The decomposition is:
\[
v_{it}=\sum_c \mathbb{E}[Z_i\mid C_{\delta t}=c]\,P(C_{\delta t}=c\mid X_{i0},\dots,X_{it})
\]
[PAGE 8]. Breakdown: if the coarse state is not sufficient for the future, the second factor is misspecified; hidden fatigue, scheme, or strategic state violates the conditional independence; limited tracking precision and unmeasured ball spin make shot outcomes not deterministic functions of observed trajectories [PAGE 12].

4. EPV Added, EPVA. The paper defines:
\[
\mathrm{EPVA}(p)=\frac{1}{N_p}\sum_{\{t_s,t_e\}\in T^p}\left(v_{t_e}-v^{r(p)}_{t_s}\right)
\]
[PAGE 9]. Units: points per game, because the sum of possession-value differences is divided by \(N_p\), the number of games played by \(p\). Assumption: a player’s offensive contribution is captured by possession intervals \(T^p\), and the replacement baseline \(r(p)\) is meaningful. Breakdown: if \(N_p=0\), the metric is undefined; if touches are selected non-randomly, EPVA is selection-biased; the paper explicitly notes that EPVA “measures the value added by a player only when that player touches the ball” and omits screening, cutting, and defense [PAGE 9].

5. Production curve. The model is:
\[
Y_{pt}=f_p(t)+\epsilon_{pt}
\]
where \(f_p\) is player \(p\)’s ability as a function of time and \(\epsilon_{pt}\) is uncorrelated error [PAGE 10]. Units: units of the chosen aggregate skill metric \(Y\), such as RAPM or VORP. Assumption: smooth player trajectory plus noise; errors are uncorrelated over time. Breakdown: sparse irregular observations, injury, changes in team quality, and non-constant exposure make the function non-identifiable without a hierarchical or functional prior; the paper states that “athlete playing time varies across games and seasons, which means sampling variability is non-constant” [PAGE 10].

6. Shot efficiency. The hierarchical logistic model is:
\[
\mathbb{E}[Y_{ip}\mid \ell_{ip},X_{ijp}]
=\mathrm{logit}^{-1}\left(\alpha_{\ell_i,p}+\sum_{j=1}^{J}\beta_jX_{ij}\right)
\]
[PAGE 11]. Units: \(Y_{ip}\) is binary; \(\alpha_{\ell_i,p}\) is a log-odds baseline for player \(p\) in location \(\ell_i\); \(\beta_j\) is log-odds per unit of covariate \(X_{ij}\), such as defender distance in feet. Assumption: the CAR prior shrinks player-by-region effects toward similar players and reduces variance [PAGE 11]. Breakdown: small samples per player-region make raw percentages unreliable; the paper states that “the majority of observed differences in 3PT% are due to sampling variability rather than true differences in ability” [PAGE 11]. If defender distance is endogenous to shot region, the coefficient can reverse sign; the paper calls this a “reversal paradox” [PAGE 12].

7. Shot selection. The multinomial shot-attempt model is:
\[
\mathbb{E}[S(p,b)\mid \ell_{ip},X_{ip}]
=
\frac{
\exp\left(\alpha_{pb}+\sum_{j=1}^{5}F_n(j,p)\beta_{jb}\right)
}{
1+\sum_{\tilde p,\tilde b}
\exp\left(\alpha_{\tilde p\tilde b}+\sum_{j=1}^{5}F_n(j,\tilde p)\beta_{j\tilde b}\right)
}
\]
where \(S(p,b)\) indicates a shot by player \(p\) in region \(b\), \(\alpha_{pb}\) is the player’s propensity to shoot from region \(b\), and \(F_n(j,p)\) is the fraction of the possession that player \(p\) was guarded by defender \(j\) [PAGE 13]. Units: probabilities are dimensionless; \(\alpha\) and \(\beta\) are log-odds. Assumption: 26 mutually exclusive outcomes, five offensive players by five regions plus a no-shot outcome; standard multinomial-logit structure. Breakdown: if the independence-of-irrelevant-alternatives property fails, substitution patterns are misspecified; if matchup fractions are measured with error or if defenders switch assignments, the \(\beta_{jb}\) coefficients are attenuated or confounded.

8. Hot hand. The paper defines the null comparison as:
\[
\mathbb{E}[Y_{p,t}\mid Y_{p,t-1}=1,\dots,Y_{p,t-k}=1,X_t]
\approx
\mathbb{E}[Y_{p,t}\mid X_t]
\]
[PAGE 14]. Units: probability of a made shot. Assumption: conditioning on observed prior makes is a valid design. Breakdown: sequence selection creates an attenuation bias; the paper reports that “after correcting for this bias, they estimate that there is an 11% increase in the probability of making a three point shot given a streak of previous makes” [PAGE 14]. Conditioning on observed makes rather than inferred make probabilities is a further measurement-error problem [PAGE 14].

9. Defensive matchup. The paper posits that a defender guarding offensive player \(k\) at time \(t\) is normally distributed about:
\[
\mu_{tk}=\gamma_o O_{tk}+\gamma_b B_t+\gamma_h H
\]
where \(O_{tk}\) is the offensive player’s location, \(B_t\) is the ball location, and \(H\) is the hoop location [PAGE 15]. Units: court-coordinate units of the tracking system. Assumption: a hidden Markov model with Gaussian emissions and man-to-man assignment. Breakdown: zone defense, switching, help rotations, and “gravity” of dominant offensive players violate the single-defender geometry; the paper notes that Keshri et al. extend the model by allowing \(\gamma\) to depend on player identities and court locations [PAGE 15].

10. Rao-Blackwellized field-goal percentage. The paper describes:
\[
\hat\theta_{FG-RB}=\frac{\sum_i p_i}{n},\qquad p_i=\mathbb{E}[Y_i\mid X]
\]
where \(X\) is trajectory information [PAGE 12]. Units: probability. Assumption: trajectory data are informative about make probability, and \(p_i\) is correctly estimated. Breakdown: if trajectory precision is limited or unmeasured factors such as ball spin dominate, \(p_i\) is not sufficient; the paper notes that the shot outcome is “not a deterministic function of the observed trajectory information” [PAGE 12].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicit. The paper traces basketball analytics to baseball’s sabermetrics and Bill James, then to Dean Oliver and John Hollinger, who “argued for evaluating players on a per-minute basis rather than a per-game basis and developed measures of overall player value, like Hollinger’s Player Efficiency Rating (PER)” [PAGE 2]. It then builds on Kubatko et al. (2007), “A Starting Point for Basketball Analytics,” and frames the modern review as a post-2007 continuation [PAGE 2]. The statistical genealogy runs through Efron and Morris on shrinkage: the paper says “Efron & Morris (1975) provide a theoretical justification for hierarchical modeling as an approach for improving estimation in low sample size settings” [PAGE 6]. That lineage then branches into APM and RAPM, EPV, hierarchical shot models, production curves, and the hot-hand correction.

The retrocausal trap is that later methods are often read back into earlier metrics as if the earlier metrics had the same estimand. They do not. PER and box-score value metrics are descriptive aggregates; APM is a regression on stint score differences; RAPM is a penalized version of APM; EPV is a possession-state conditional expectation; EPVA is a touch-level offensive-value average; production curves are player-season trajectories. Reading EPVA as “overall value” retroactively imports an offensive-touch estimand into a general-value question, which the paper warns against when it says EPVA omits off-ball actions and defense [PAGE 9]. Similarly, reading RAPM as causal imports a prior-dependent, collinearity-limited regression coefficient into a counterfactual question.

Multi-week traps that surface only after repeated analysis: first, multicollinearity and prior sensitivity in APM/RAPM, which can change player rankings when the regularization changes [PAGE 7]; second, reversal paradox and spatial confounding in shot models, where the sign of defender distance flips after conditioning on shot region [PAGE 12]; third, hot-hand selection bias, where the estimator itself attenuates the effect until the sequence-selection mechanism is corrected [PAGE 14]; fourth, exposure heteroskedasticity in production curves, where minutes and possessions vary across seasons [PAGE 10]; fifth, defensive unobservability, where “understanding defense requires as much an understanding about what does not happen as what does happen” [PAGE 14]. A sixth trap is data access: the paper notes that many rich sources are not openly available and that progress is hindered by the lack of public spatio-temporal tracking data [PAGE 16]. These are not one-off modeling errors; they are recurring identification failures that appear across weeks of re-analysis unless the analyst fixes the estimand before fitting.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The paper contains a implicit recursive-agent structure even though it does not formalize a theory of mind. The shooter’s decision depends on the defender’s location and matchup; the defender’s location is modeled as a function of the offensive player, the ball, and the hoop [PAGE 15]; the shot-attempt model then uses the fraction of time a player was guarded by each defender [PAGE 13]. That is at least a two-level belief-and-response system: the defender forms a response to the offensive player’s location and perceived threat, and the shooter’s shot selection responds to the defender’s assignment. Keshri et al. extend this by allowing the defender’s weights to depend on player identities and court locations, which is a step toward modeling defender beliefs about offensive “gravity” [PAGE 15].

Crisis habit regression. The paper gives evidence for reinforcement and matching-like shot selection: “Neiman & Loewenstein (2011) study this phenomenon from a reinforcement learning perspective and demonstrate that a previous made three point shot increases the probability of a future three point attempt” [PAGE 13]. It also cites the generalized matching law, where shot-type frequencies track relative makeability [PAGE 12–13]. In a crisis state, such as a late-clock or high-pressure possession, a plausible failure mode is regression to a habitual policy: the player’s shot choice becomes more strongly determined by prior reinforcement and less by full EPV calculation. The paper does not directly estimate a pressure-by-habit interaction, but it does note that shot selection varies with “the shot clock and score differential” [PAGE 13]. That makes crisis habit regression a testable hypothesis, not a proven coefficient.

Counter-trap. The defender can anticipate the shooter’s habit. The paper’s reversal-paradox discussion is the cleanest example: “defenders may strategically give more space to the poorest shooters. Without this contextual information, this would make it appear as if defender distance is negatively correlated with the probability of making the shot” [PAGE 16]. The defender’s action is a best response to a believed shooter type; the analyst who ignores that belief sees a distorted sign. In recursive terms, the observed defender distance is not exogenous. It is a function of the defender’s belief about the shooter’s ability, which is itself a function of the shooter’s history and reputation. The counter-trap is therefore a confounding-by-strategy problem, not just a measurement problem.

Clock. The shot clock is an explicit state variable in the EPV framework: the paper describes \(X_{it}\) as including “player locations, shot clock, etc.” [PAGE 13]. As the clock expires, the option value of passing or dribbling collapses, so the counterfactual non-shooting state in shot satisfaction becomes less valuable. The paper defines shot satisfaction as the EPV at the shot minus the expected value conditional on a counterfactual “non-shooting state” [PAGE 13]. This is a clock-sensitive counterfactual. A recursive model should therefore include the clock as a state that changes both the player’s policy and the defender’s policy. The paper does not estimate a full game-theoretic equilibrium, so any claim that a player “chokes” or “rises” under clock pressure is an extrapolation beyond the source.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The paper’s tracking layer is optical: timestamped \((x,y)\) locations for all ten players and \((x,y,z)\) for the ball at over 20 frames per second [PAGE 3]. High-resolution systems track the ball “to within one centimeter of accuracy” [PAGE 3], and shot-trajectory work finds an optimal entry location about two inches beyond the basket center at an entry angle of about \(45^\circ\) [PAGE 11]. These are physical constraints, not stylistic ones. A physical-layer veto applies if a model treats a shot outcome as deterministic given coarse location when the ball trajectory precision or entry-angle variation is insufficient. The paper itself says the outcome is “not a deterministic function of the observed trajectory information” because of limited spatial precision and unmeasured factors such as ball spin [PAGE 12]. Thus, any claim that a coarse shot chart fully identifies shooting skill is vetoed; trajectory or hierarchical shrinkage is required.

Biomechanical layer. The paper explicitly excludes wearable biometric data from the review: “Because there are few publications on wearable data in basketball to date, we do not discuss them further” [PAGE 3]. Therefore the paper has no operator for fatigue, load, injury risk, or biomechanical efficiency. A biomechanical veto applies to any inference that a player’s late-season decline is caused by load, or that a defensive coefficient reflects biomechanical limitation, unless external load data are added. The source’s production-curve discussion acknowledges injury and aging as sources of variability [PAGE 10], but it does not measure them. So the correct adjudication is: aging and injury are acknowledged confounders, not modeled biomechanical mechanisms.

Weather layer. The paper contains no weather covariate, no outdoor-venue indicator, and no meteorological data. Basketball games in the reviewed data are indoor arena events. A weather veto is therefore absolute for any weather-conditioned claim: there is no source operator that identifies a weather effect. Formally, if an omitted cross-layer variable \(W_t\) is a common cause of both the tracking covariates \(X_t\) and the outcome \(Z_i\), then
\[
P(Z_i\mid X_t,W_t)\neq P(Z_i\mid X_t),
\]
and the EPV conditional-independence assumption
\[
P(C_s\mid C_{\delta t},X_0,\dots,X_t)=P(C_s\mid C_{\delta t})
\]
fails [PAGE 8]. Since the paper provides no \(W_t\) for weather, any weather-adjusted conclusion is outside the model. Indoor conditions make a large weather effect unlikely, but “unlikely” is not an identified estimate. The veto stands unless weather data are explicitly linked to venue and game time.

Cross-layer adjudication rule. A physical, biomechanical, or weather layer can veto a basketball-analytics claim only if it changes the joint distribution of the modeled covariates and the outcome. The paper’s own defense of hierarchical modeling is that it reduces nuisance variance under a shared prior [PAGE 6]; that defense does not cover omitted layers. Therefore the safe reading is: use tracking-based models for observed spatio-temporal behavior; do not use them to assert unmeasured load, injury, or weather effects.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR counterfactual veto 1: reversal-paradox sign check. Estimand: the coefficient on defender distance in a shot-make model. Counterfactual: fit the model without shot-region adjustment, then with shot-region adjustment. The paper predicts that ignoring region can produce a slightly negative or attenuated defender-distance coefficient, while conditioning on region shows make probability increasing with defender distance; the source calls this a “reversal paradox” and says it “highlights the importance of accounting for spatial context” [PAGE 12]. Prediction: the unadjusted coefficient should be less than or equal to zero or materially attenuated, and the region-adjusted coefficient should be positive. Veto: if the sign does not reverse or attenuate in a large shot sample, the paper’s confounding example is not reproducible and the causal-warning claim is vetoed for that dataset.

RLVR counterfactual veto 2: hot-hand selection-bias correction. Estimand: the conditional make probability after a streak of prior makes. Counterfactual: compute the standard sequence-selected estimator and the bias-corrected estimator on the same shot data. The paper reports that after correction “there is an 11% increase in the probability of making a three point shot given a streak of previous makes” [PAGE 14]. Prediction: the corrected estimator should be materially larger than the uncorrected estimator, with the uncorrected estimator near the null. Veto: if the corrected estimator is not larger, or if the 11% signature does not replicate in an independent three-point sample under the stated selection model, the paper’s hot-hand correction claim is vetoed as a general empirical result.

RLVR counterfactual veto 3: EPVA blind-spot check. Estimand: player value ranking. Counterfactual: compare EPVA rankings with RAPM-type overall rankings and with defensive or off-ball proxies for players who specialize in screening, cutting, or defense. The paper predicts that EPVA overweights touch-based offensive specialists and omits off-ball and defensive value: it says EPVA “measures the value added by a player only when that player touches the ball” and that screening and cutting value are “not included in the original EPVA metric” [PAGE 9]. Prediction: for high-gravity off-ball players and strong defenders, EPVA should systematically under-rank them relative to RAPM or matchup-based defensive metrics. Veto: if EPVA and RAPM rankings agree equally well for those subsets, the paper’s stated limitation is falsified for that sample. This is a verifiable counterfactual because the player subsets and rankings can be pre-registered before estimation.
</RLVR_COUNTERFACTUAL_VETOES>