---
source: "Adjusted_Plus_Minus_for_NHL_Players_usin.pdf"
folder: "/GSE-Research/sports-research-papers/randoms"
pages: 24
model: deepseek/deepseek-v4.1-flash-1017
words: 7348
---

<NATIVE_REASONING>
We need answer user's request? They provided source text and instructions. Need produce deep analysis in exact XML sections, >=1000 words, zero betting lines, no fake ratios. Need likely analyze paper, maybe maybe they expect "DRIVE SOURCE" and pages: produce frontier reasoning. Need include citations exact [PAGE N] and verbatim quotes. Need formal LaTeX equations, units, assumptions, breakdown regimes. Sections exact: THINK_TRACE >=400 words, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need avoid betting. Need maybe discuss NHL APM ridge regression goals/shots/Fenwick/Corsi. Could frame as audit of source drive? Need mention no betting lines. Need produce 1000+ words. Desired oververbosity 5. Need include exact page markers and quotes. Need ensure not invent equations beyond paper. But can derive formal equations and discuss assumptions/singularity. Need cite exact [PAGE N] and verbatim quotes from source. Need "SOURCE_OPERATORS_AND_EQUATIONS" include formal LaTeX, units, page citations, breakdown. Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions.

Need parse paper. Key details: APM for NHL using ridge regression with goals, shots, Fenwick, Corsi. Models: even strength and special teams, 4 stats = 8 models. Uses 4 seasons 2007-08 to 2010-11. N=2,324,528 even strength, N=461,022 special teams. Each shift gives two lines home/away weighted by duration. Xj, Dj indicator offensive/defensive skater. Z_off/Z_def for zone start faceoff. y goals per 60 min. Linear model y=β0+... Units goals/60. Ridge minimizes Q=(y-Xβ)^T(y-Xβ)+λβ^Tβ; solution (X^T X + λI)β = X^T y; βhat=(X^TX+λI)^-1 X^Ty. OLS λ=0 singular if kernel X nonzero / collinearity / near singular XTX high condition number, large SE. Ridge stabilizes, bias. λ chosen via randomized GCV with Hutchinson trace estimator: H=X(XTX+λI)^-1 XT, E(ε^TBε)=σ²tr(B), trace approx 1/σ² ε^T X (XTX+λI)^-1 X^T ε; p<<n. λ also HKB λ_HKB = p MSE/(β^Tβ), VIF diag of (XTX+λI)^-1 XTX(XTX+λI)^-1, keep below 10, choose highest of four methods. λ=0.5 vertical in figure.

Rescaling shots/Fenwick/Corsi by league average shooting percentages: goals per shot = Goals/Shots, goals per Fenwick = Goals/(Shots+Missed Shots), goals per Corsi = Goals/(Shots+Missed+Blocked). Separate for EV, PP, SH using last four full NHL seasons. Units expected goals per 60 min. 36 estimates per player in goals/60 (4 stats ×? even strength off/def + special teams off/def pp/sh? Let's check: each model gives even strength offensive and defensive; special teams model gives offensive and defensive PP, offensive and defensive SH = 6 components per statistic? 4 stats * 6 =24? But paper says 36 estimates per player terms goals per 60. Hmm let's parse: Four separate ridge regression models for even strength using each stat, each gives even strength offensive and defensive component = 8 estimates. We also have four separate models for special teams situations, one for each statistic. Each special teams model gives offensive and defensive component on PP, as well as offensive and defensive during SH = 4 components per stat =16. Total 24, not 36. Wait maybe special teams model includes PP offense/defense and SH offense/defense = 4 each; 4 stats =16, plus EV 8 =24. They say 36 estimates. Maybe each special teams model gives offense/defense on PP, as well as offense/defense during SH: 4 per stat. 4*4=16 + 8=24. Where 36? Maybe they include per 60 and per season? no. Hmm page 5 says "In total, we get 36 estimates for each player in terms of goals per 60 minutes." Could be 3 situations (EV, PP, SH) × (off, def, total?) × 4 stats = 36? Let's calculate: Each stat: EV off, EV def, EV total; PP off, PP def, PP total; SH off, SH def, SH total =9 per stat. 4 stats =36. Yes they count total as sum maybe not separate model. So 36 estimates includes totals? They say each special teams model gives offensive and defensive component on PP, as well as offensive and defensive during SH. Then total can be added. But they count totals? If per 60, total in all situations? Hmm. Then per season 48? 36*? Not exactly. Need be careful. We can state paper claims 36 per 60 estimates; if per season then 48 ratings. Cite page 5. Need not resolve.

Need discuss year-to-year correlations: Figure 3: EV offense OLS 0.28, Goals 0.36, Shots 0.47, Fenwick 0.56, Corsi 0.63. PP offense OLS 0.18, Goals 0.26, Shots 0.34, Fenwick 0.39, Corsi 0.44. SH defense OLS 0.22, Goals 0.21, Shots 0.26, Fenwick 0.29, Corsi 0.30. Wait labels: source says "Goals, Shots, Fwick, Corsi"; numbers. Need cite [PAGE 13]. Good.

Need "RETROCAUSAL_GENEALOGY" can discuss historical lineage from plus-minus to APM basketball to hockey to ridge. Cite page 3 references Winston, Rosenbaum, Lewin, Witus, Ilardi, Sill, Fearnhead; Macdonald 2011a/b. Also Hoerl 1962, Hoerl & Kennard 1970; Sill 2010. Hutchinson 1989, Girard 1991. Multi-week traps: treating APM as causal effect; collinearity; goalie confound; small samples; special teams less data; OLS λ=0 extremes; rescaling interpretation. Need maybe "multi-week traps" means time-series? We'll frame as analyst traps over multi-week ingestion windows: single-season signal vs four-year; shift length biases; score effects? But paper doesn't mention score effects. Need avoid unsupported? Can mention not modeled in paper? Careful: paper says independent of teammates, opponents, zone. It doesn't model score state, home/away? It does separate home/away lines? Actually each shift gives two lines. It includes home/away? It doesn't include score situation. We can audit that. Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Since hockey, physical: shift duration, ice time, goalie quality, empty net removed, special teams shift lengths 4.5 sec longer. Biomechanical: shooting ability ignored by shots/Fenwick/Corsi; blocked shots; territorial advantage; faceoff zone. Weather: not relevant; veto proof must say no weather layer in source; cannot assert weather; only indoor ice arena? We can say weather is vetoless/irrelevant unless arena environmental controls fail; no source evidence. Need formal proof? Maybe "veto proof" in sense cross-layer variables that could invalidate. Need show physical/biomechanical/weather veto adjudication: physical layer: goalie quality affects goals estimates; shots etc independent of goalies; shift length differences; empty net removed. Biomechanical: shot quality/ability not captured by raw shot counts; weighted shots future work. Weather: no weather variables; only indoor rink; cannot use weather as causal lever. Need cite page 4-5 for goalie independence, page 15-16 weighted shots, page 23 shift lengths. Good.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. This sounds weird. Need interpret as analyst decision-making under uncertainty. Crisis habit regression = reverting to OLS/plus-minus despite collinearity; counter-trap = over-shrinking all players with high λ, flattening true elite differences; clock = seasonal sample accumulation and λ selection / GCV. Need discuss recursive modeling: modeler thinks analyst will use estimates, analyst thinks modeler overfit, etc. Use paper examples Datsyuk/Dubinsky/Lidstrom at λ=0 vs λ=0.5. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need provide scenarios where a claim/action is vetoed by verifiable source facts. Need 3 scenarios with predictions. Must avoid betting lines. Could be:
1. If an analyst claims APM is ordinary least squares with no penalty, veto: paper uses ridge with λ penalty and λ=0.5; prediction: recompute with λ=0 shows Datsyuk negative and Dubinsky elite [PAGE 10-11].
2. If claim APM error is eliminated or exact, veto: paper says errors still not small enough to ignore, confidence intervals overlap [PAGE 8]; prediction: intervals overlap.
3. If claim shots/Fenwick/Corsi are goalie-dependent like goals, veto: paper says those stats mostly independent of goalies [PAGE 4-5]; prediction: goalie swap leaves S/F/C estimates more stable than G.
Need verifiable predictions maybe "if λ=0, XTX near singular / condition number high" etc. Need include three scenarios and predictions.

Need answer with exact XML sections. Need include at least 1000 words. THINK_TRACE >=400 words. Need maybe 1800-2500 words total. Need include quotes. Ensure XML well-formed? Use tags. Could include LaTeX in text. Need escape? Since XML, ampersands in LaTeX? Need be careful with & in equations? XML text can include & only escaped. But not necessarily parsed? To be safe, use \&? In equations, use \lambda, no ampersand. Avoid raw & in text; use "and". Use < and >? Need avoid or escape. Within XML, use \le, \ge. Use \( \) maybe. Use \(X^\top X\). Fine. Need use [PAGE N] markers exact. Need verbatim quotes with quotes. Need not mention spreads/totals/odds. Avoid "betting" maybe no lines. We can mention zero betting lines? It's okay? Better not mention betting at all except maybe "no wager or line constructs are used" but invariant says never mention. So don't mention.

Need produce structured sections exactly. Need maybe include "I cannot verify external pages beyond source"; but okay.

Need "SOURCE_OPERATORS_AND_EQUATIONS": Formal LaTeX, units, page citations, breakdown. Need list operators:
- Indicator X_j and D_j: binary.
- Zone indicators Z_off, Z_def.
- Model equation.
- OLS Q and normal equations.
- Ridge Q, normal equations, closed form.
- Hat matrix and Hutchinson trace.
- HKB λ.
- VIF.
- Rescaling shooting percentages.
Need units: y in goals/60 or shots/60? Actually y is goals (or shots, Fenwick, Corsi) per 60 minutes. β in same units. λ dimensionless? Ridge λ units? Since X standardized columns, λ dimensionless? Paper says standardizes columns of X. Need mention if X standardized, λ has units of squared response? Actually Q has units y²; λβ^Tβ must match y² if β in y units? But because columns standardized, β units y; λ has y²? Hmm maybe don't overclaim. We can say λ is a regularization scalar, not a physical quantity; paper treats it as tuning parameter, with λ=0 OLS. If X columns standardized, scale-free. Good.
- Break down singularity: OLS unique if ker(X)=0, but collinearity near singular; if two players always together columns identical, estimates not unique [PAGE 3]; XTX not invertible; condition number high [PAGE 20]. Ridge adds λI so XTX+λI positive definite for λ>0; stable. If λ→∞, β→0 (bias). If λ=0 and XTX singular, no unique. If N >> 2J+3, typically no exact solution to y=Xβ? Wait paper says "Typically, when N much greater than 2J+3, no solution to (4) exists" yes overdetermined. OLS normal equations. Need exact.

Need "RETROCAUSAL_GENEALOGY": trace plus-minus -> APM basketball -> hockey -> ridge. Cite exact pages. Include multi-week traps. Need maybe "retrocausal" means later methods recast earlier? We can discuss how ridge's Bayesian interpretation retroactively justifies penalty. Page 21 "nice Bayesian justification". Also HKB and VIF. Multi-week traps: using single-season results, year-to-year correlations low; EV offense OLS 0.28 vs Corsi 0.63; special teams lower. If analyst uses one week? Paper uses seasons. Need mention "multi-week traps" as accumulation window. Use quotes: "the ridge estimates tend to be more consistent from year to year than the OLS estimates" [PAGE 11]; "There are roughly ten times as many shots as goals" [PAGE 1 or 4? Page 1 abstract "roughly ten times as many shots as goals"; page 4 "roughly 10 shots to every goal". Cite.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need maybe define:
- Crisis habit regression: when estimates look wrong, analyst reverts to OLS/traditional plus-minus; paper shows λ=0 Datsyuk negative, Dubinsky elite [PAGE 10].
- Counter-trap: over-regularize to avoid outliers; but λ too high shrinks coefficients toward zero and can erase real differences; paper chooses highest of four methods, not arbitrary; trace curves stabilize by λ=0.5 [PAGE 23].
- Clock: sample size/time horizon; single season stable enough with ridge [PAGE 7], but special teams less data and lower correlations [PAGE 12-13]. Need discuss recursive modeling: decision-maker uses APM to trade/salary; paper explicitly says uses include deciding trades and salary negotiations [PAGE 3]; if they know model is shrunk, they may discount; modeler anticipates. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": Need prove physical/biomechanical/weather veto.
- Physical: shift length and ice time are confounders; paper weights by shift duration; average shift 4.5 seconds longer for special teams [PAGE 8]; PP shifts with goals longer [PAGE 23]. Veto: any claim that raw per-shift rates without duration weights are equivalent is vetoed.
- Biomechanical: shot quality, shooting ability, missed/blocked shots; raw S/F/C ignore shooting ability and treat missed/blocked as territorial advantage [PAGE 4]; future weighted shots [PAGE 15-16]. Veto: any claim S/F/C measures finishing skill is vetoed; it measures possession/territorial proxy.
- Weather: no weather variables; indoor; no evidence. Veto: weather-based causal claims are unsupported. Also goalie quality is physical/performance layer; goals models include goalie defensive variables? Page 9 "for models which use goals, we included defensive variables for goalies"; page 4-5 says S/F/C independent of goalies. Veto: comparing Gdef across different goalies without goalie adjustment? Paper includes goalie variables for goals; still quality of goalie on ice? Hmm. Use quote.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. Need "verifiable" predictions. Maybe use source citations and specific numeric predictions:
1. λ=0 counterfactual: If claim "Datsyuk is below-average PP offensive player" based on OLS, veto by ridge trace: at λ=0 Datsyuk negative, at λ=0.5 moves toward elite; Dubinsky at λ=0 very high, at λ=0.5 more reasonable [PAGE 10-11]. Prediction: recomputing with λ=0.5 reverses ranking; Datsyuk estimate increases, Dubinsky decreases.
2. Error bound counterfactual: If claim "APM standard errors are negligible", veto: Ovechkin Goff EV60 =0.46 Err 0.18; Soff=0.45 Err 0.07; Foff=0.53 Err 0.06; Coff=0.63 Err 0.05 [PAGE 8 Table 4]. Prediction: S/F/C errors smaller than goals; CIs still overlap.
3. Year-to-year stability counterfactual: If claim "one-season goals APM is as stable as Corsi APM", veto: EV offense correlations OLS 0.28, Goals 0.36, Shots 0.47, Fenwick 0.56, Corsi 0.63 [PAGE 13]. Prediction: Corsi > goals in year-to-year correlation; PP offense similarly 0.44 vs 0.26; SH defense 0.30 vs 0.21. Good.
Could include a fourth? Exactly 3. Need each with scenario, veto, prediction. Avoid betting.

Need perhaps mention "source drive" maybe they want analysis of paper, not sports prediction. We'll focus on methodological audit. Need maybe not invent "weather" beyond source; state no weather layer. Good.

Need include "verbatim quotes" exact. Need ensure quotes from source text exactly. Use quotation marks. Need page citations. E.g. [PAGE 1]: "roughly ten times as many shots as goals". [PAGE 3]: "In an extreme case where two players always play together, the ordinary least squares estimates will not even be unique." [PAGE 8]: "The errors are still not small enough to be ignored, as the confidence intervals of many of the estimates still overlap." [PAGE 10]: "when λ = 0, Pavel Datsyuk (solid red line) actually has a negative estimate, and Brandon Dubinsky (solid blue line) has a very high positive estimate". [PAGE 21]: "The ridge regression model (11) is equivalent to a Bayesian regression model in which the coefficients β are given a normal prior distribution with mean 0 and a variance that depends on λ." [PAGE 23]: "The vertical line at λ = 0.5 in Figure 1 indicates the value of λ that we chose for that model." [PAGE 4]: "there are roughly 10 shots to every goal." [PAGE 4-5] "those statistics are independent of goalies". Exact quote page 4: "Also, for the most part, those statistics are independent of goalies, so the strength of the goalies on a player’s team will not have much of an affect on the estimates of his contributions." (Note typo affect). Could cite [PAGE 4-5]? It spans page 4 to 5? The quote starts page 4 ends page 5. Use [PAGE 4-5]. Need exact.

Need include "Page 9": model equation (3). "The quantities of interest are the β js and δjs, which are player j’s offensive and defensive contributions, respectively, in terms of goals per 60 minutes." [PAGE 9]. Good.
Page 20: "if two teammates play together often, then two columns of X are nearly the same, the columns of X are nearly linearly dependent, and the corresponding columns (and rows) XTX are nearly linearly dependent, which means that XTX is nearly singular and has a high condition number." [PAGE 20]. Good.
Page 21: "As λ increases, the coefficients tend to stabilize and move toward zero." [PAGE 21]. Good.
Page 22: VIF diag. "We chose λ at least high enough so that the VIF were below 10." [PAGE 23]. Good.
Page 5: 36 estimates. Maybe quote: "In total, we get 36 estimates for each player in terms of goals per 60 minutes." [PAGE 5]. Good.
Page 5: rescaling. "The results based on shots, Fenwick rating, and Corsi rating were then rescaled by multiplying by the league average goals per shot, goals per Fenwick rating, and goals per Corsi rating, respectively." [PAGE 5].
Page 8: N values. "For even strength, we have N = 2,324,528, while for special teams situations, we have N = 461,022." [PAGE 8].
Page 8: shift average: "the average duration of a shift is 4.5 seconds longer for special teams than for even strength." [PAGE 8].
Page 23: "Typically, shift lengths are longer for the shifts when a goal is scored." [PAGE 23].
Page 15: weighted shots? "one could also consider using weighted shots as the response variable" [PAGE 15]. Maybe page 15-16. Use.
Need no raw ampersands in XML. But "Fenwick" no &. Use "and". In LaTeX, use \text{?} Maybe no &.

Need possibly use CDATA? Not necessary. But XML with LaTeX containing < or >? We can avoid < in equations. Use \le, \ge, \to, \infty. Avoid \&. Use \top instead of T? Fine.
Need be careful with "β" unicode okay. Use LaTeX.

Need write sections. Let's draft.

Need "THINK_TRACE" deep multi-hop derivation & gray-zone audit >=400 words. Need include derivation chain: source says APM estimates contribution independent of teammates/opponents/zone; uses shift-level rows; collinearity from co-play; low scoring; ridge; stats; rescaling; λ selection; results; auditor gray zones. Need likely 500-600 words. Include citations and quotes. Good.

Need total >=1000. Probably 2500.

Potential issue: "ZERO BETTING LINES" no lines. Avoid word "line" even "line of data"? Hmm invariant says never mention spreads, totals, moneylines, or odds. "line" as data line is okay? It says zero betting lines; but to be safe avoid "line" maybe use "row". But source uses "two lines of data"; can quote? If quote includes "lines" not betting. It's okay. But avoid "betting line". We can use "row". In quotes, if exact includes "lines" maybe acceptable. But no betting. Fine.

Need "formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes." Need include units. For information/probability? Paper uses no information units. We can state no information-theoretic units are used; only goals per 60 min, shots per 60, etc. Ridge λ dimensionless after standardization; VIF dimensionless; correlation dimensionless. Good. Need exact singularity: OLS normal equations unique iff det(X^T X) ≠ 0; if two players always co-play, columns equal, X has nonzero kernel, X^T X singular, no unique OLS; ridge with λ>0 yields (X^T X + λI) positive definite if λ>0, unique. As λ→∞, β→0. Need "breakdown regimes": N not enough, collinearity, low goals, special teams, goalie confound, raw shot quality ignored, weather unsupported.

Need "SOURCE_OPERATORS_AND_EQUATIONS" could be bullet list. Use LaTeX in display. Need maybe include "Assumption A1: additive linear effects; A2: constant effect over four seasons; A3: zone start indicators capture zone effect; A4: no empty net; A5: shift-level observations weighted by duration; A6: rescaled S/F/C by league-average conversion; A7: ridge shrinkage prior." Need cite. Good.

Need "RETROCAUSAL_GENEALOGY": maybe 400 words. Need "historical/scientific lineage & multi-week traps". Include lineage:
- Plus-minus first used in hockey but advanced APM developed in basketball [PAGE 3].
- Basketball APM references: Winston 2009, Rosenbaum 2004, Lewin 2007, Witus 2008, Ilardi and Barzilai 2008, Sill 2010, Fearnhead and Taylor 2011 [PAGE 3].
- Hockey Macdonald 2011a weighted least squares, 2011b special teams zone starts [PAGE 3].
- Ridge from Hoerl 1962, Hoerl and Kennard 1970, Sill 2010 [PAGE 4].
- Randomized GCV from Girard 1991 and Hutchinson 1989 [PAGE 21-22].
Multi-week traps:
- Single-season low goal data; paper says ridge single-season stable enough [PAGE 7] but year-to-year correlations low for goals; use multiple seasons for goals [PAGE 3].
- Special teams less data; lower correlations [PAGE 12].
- OLS extreme estimates at λ=0; trace curves; Datsyuk/Dubinsky.
- Rescaling interpretation; S/F/C expected goals, not actual goals; don't treat as goals.
- Shot counts ignore shooting ability; weighted shots future [PAGE 15].
- Goalie confound for goals; S/F/C independent [PAGE 4-5].
Need phrase "multi-week" maybe "multi-week ingestion windows": use four seasons; not one week. Good.

Need "RECURSIVE_THEORY_OF_MIND": maybe 300 words. Use "crisis habit regression" as term. Need define. Mention "modeler-modeler recursion": If estimates conflict with scouting, crisis habit = lower λ/OLS to match narrative; counter-trap = increase λ to silence outliers; clock = wait for more shifts/seasons and use year-to-year correlations. Paper provides anchors: λ=0.5 chosen; estimates stabilize; errors overlap; single-season ridge has value but lower special teams. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": maybe 350 words. Need "Physical/biomechanical/weather veto proof." Use sub-bullets.
Physical: duration weighting, empty net removal, shift length. Quote "Both of these observations are weighted by the duration of that shift." [PAGE 8]. "we remove empty net situations" [PAGE 8]. "average duration ... 4.5 seconds longer" [PAGE 8]. "shift lengths are longer for shifts when a goal is scored" [PAGE 23]. Veto proof: any per-shift unweighted claim invalid. Also goalie: goals include goalie defensive variables [PAGE 9]; S/F/C independent [PAGE 4-5]. 
Biomechanical: shot quality; raw shot counts; blocked/missed; "shots, Fenwick rating, and Corsi rating ignore the shooting ability of players" [PAGE 4]; "if a team has more shots, missed shots, and blocked shots ... territorial advantage and advantage in puck possession" [PAGE 4]; future weighted shots [PAGE 15-16]. Veto: claim S/F/C is finishing skill invalid.
Weather: no weather variables; indoor; no source evidence. Veto: weather-based causal explanation invalid; arena environmental controls not modeled. Also "physical" maybe fatigue? No fake ratios. Avoid inventing force/fatigue. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios with predictions. Need perhaps "verifiable" by source. Use exact numbers. Good.

Need final answer only XML? The prompt says "You are ..." and lists sections. We should output exactly sections. No preamble. Ensure XML tags. Could include all sections in order. Need not wrap in root? Could use the sections as top-level. That's okay. Need maybe use `<THINK_TRACE>...</THINK_TRACE>` etc. Need no extra text. Good.

Need word count. Let's target ~2500 words. Use concise but deep. Need ensure THINK_TRACE >=400 words. We'll write ~600.

Let's craft carefully.

Need include "Page N" exact markers. Use [PAGE 1], [PAGE 3], etc. Need quotes exact. Check quotes:
- [PAGE 1] "roughly ten times as many shots as goals" yes.
- [PAGE 3] "In an extreme case where two players always play together, the ordinary least squares estimates will not even be unique." yes.
- [PAGE 3] "A typical hockey team only scores two to four goals per game on average during a season." yes.
- [PAGE 4] "shots, Fenwick rating, and Corsi rating ignore the shooting ability of players" yes exact? It says "on one hand, shots, Fenwick rating, and Corsi rating ignore the shooting ability of players" yes.
- [PAGE 4] "there are roughly 10 shots to every goal" yes.
- [PAGE 4-5] "for the most part, those statistics are independent of goalies" yes.
- [PAGE 5] "In total, we get 36 estimates for each player in terms of goals per 60 minutes." yes.
- [PAGE 5] "The results based on shots, Fenwick rating, and Corsi rating were then rescaled by multiplying by the league average goals per shot, goals per Fenwick rating, and goals per Corsi rating, respectively." yes.
- [PAGE 8] "For even strength, we have N = 2,324,528, while for special teams situations, we have N = 461,022." yes.
- [PAGE 8] "Both of these observations are weighted by the duration of that shift." yes.
- [PAGE 8] "we remove empty net situations from both data sets" yes.
- [PAGE 8] "the average duration of a shift is 4.5 seconds longer for special teams than for even strength." yes.
- [PAGE 8] "The errors are still not small enough to be ignored, as the confidence intervals of many of the estimates still overlap." yes.
- [PAGE 9] "The quantities of interest are the β js and δjs, which are player j’s offensive and defensive contributions, respectively, in terms of goals per 60 minutes." yes.
- [PAGE 10] "when λ = 0, Pavel Datsyuk (solid red line) actually has a negative estimate, and Brandon Dubinsky (solid blue line) has a very high positive estimate" yes.
- [PAGE 10] "For Dubinsky, the unexpected result for λ = 0 is probably due to minimal playing time." yes.
- [PAGE 10-11] "For Datsyuk, it is probably due to the fact that he spent 90% of his power play time with one of his teammates, Nicklas Lidstrom." yes.
- [PAGE 11] "the ridge estimates tend to be more consistent from year to year than the OLS estimates" yes.
- [PAGE 13] numbers. Quote? Figure not text. We can cite.
- [PAGE 20] "if two teammates play together often, then two columns of X are nearly the same, the columns of X are nearly linearly dependent, and the corresponding columns (and rows) XTX are nearly linearly dependent, which means that XTX is nearly singular and has a high condition number." yes.
- [PAGE 21] "As λ increases, the coefficients tend to stabilize and move toward zero." yes.
- [PAGE 21] "The ridge regression model (11) is equivalent to a Bayesian regression model in which the coefficients β are given a normal prior distribution with mean 0 and a variance that depends on λ." yes.
- [PAGE 22] HKB equation. [PAGE 23] VIF below 10. "We chose λ at least high enough so that the VIF were below 10." yes.
- [PAGE 23] "The vertical line at λ = 0.5 in Figure 1 indicates the value of λ that we chose for that model." yes.
- [PAGE 23] "Typically, shift lengths are longer for the shifts when a goal is scored." yes.
- [PAGE 15-16] weighted shots. "one could also consider using weighted shots as the response variable" [PAGE 15]. Good.

Need equations:
Model:
\(y_i = \beta_0 + \sum_{j=1}^{J}\beta_j X_{j,i} + \sum_{j=1}^{J}\delta_j D_{j,i} + \zeta_{\mathrm{off}} Z_{\mathrm{off},i} + \zeta_{\mathrm{def}} Z_{\mathrm{def},i}\)
Units \(y_i\): goals per 60 min (or shots/Fenwick/Corsi per 60). β,δ,ζ same units. Because X,D binary, coefficient = contribution to expected response.
OLS:
\(Q_{\mathrm{OLS}}(\beta)=\sum_i (y_i-\hat y_i)^2=(y-X\beta)^\top(y-X\beta)\)
normal: \(X^\top X \hat\beta = X^\top y\). Unique iff \(\det(X^\top X)\ne 0\) i.e. \(\ker(X)=\{0\}\). If columns nearly dependent condition number high; if exact co-play singular.
Ridge:
\(Q_\lambda(\beta)=(y-X\beta)^\top(y-X\beta)+\lambda \beta^\top\beta\), \((X^\top X+\lambda I)\hat\beta=X^\top y\), \(\hat\beta=(X^\top X+\lambda I)^{-1}X^\top y\). For λ>0 positive definite (if X^TX PSD), unique. λ=0 OLS. λ→∞ β→0.
Hat:
\(H=X(X^\top X+\lambda I)^{-1}X^\top\)
Hutchinson:
\(\mathbb E(\varepsilon^\top B \varepsilon)=\sigma^2 \operatorname{tr}(B)\)
\(\operatorname{tr}(H)\approx \sigma^{-2}\varepsilon^\top X (X^\top X+\lambda I)^{-1} X^\top \varepsilon\)
HKB:
\(\lambda_{\mathrm{HKB}} = p\,\mathrm{MSE}/\hat\beta^\top\hat\beta\)
VIF:
\(\mathrm{VIF}_j=[(X^\top X+\lambda I)^{-1}X^\top X (X^\top X+\lambda I)^{-1}]_{jj}\)
Rescale:
\(\hat\beta^{(S)}_{j,60} = \hat\beta^{(S),\mathrm{raw}}_{j,60} \times \overline{(G/S)}\) etc. For Fenwick \(G/(S+M)\), Corsi \(G/(S+M+B)\). Units expected goals/60.
Need note league averages computed separately EV/PP/SH over four seasons [PAGE 5].
Need mention "standardize columns of X" [PAGE 20] and λ selection highest of GCV, trace stabilization, HKB, VIF<10 [PAGE 22-23]. Good.

Need "SI/information/probability units": no SI; use goals per 60 minutes, shots per 60, expected goals per 60; λ dimensionless when standardized; correlations and VIF dimensionless; probability? Maybe no probability except Bayesian prior normal. Could state "No information-theoretic unit (bits/nats) or SI physical unit is reported; the paper’s units are hockey event rates per 60 minutes and dimensionless regularization/diagnostics." Good.

Need "breakdown regimes" in source operators: exact singular; near-singular; low goal; special teams; goalie; shot quality; λ over-shrink. Good.

Need "THINK_TRACE" include "gray-zone audit" maybe:
1. Source claim independence from teammates/opponents/zone is conditional on additive linear model and ridge; not causal intervention.
2. Collinearity example Sedin twins.
3. Low scoring forces ridge and S/F/C.
4. S/F/C have 10x data; rescale to expected goals.
5. λ selection not arbitrary; GCV trace HKB VIF; λ=0.5.
6. Error bounds still overlap; not certainty.
7. Single season ridge stable enough but year-to-year goals lower.
8. Gray zones: goalie quality, shot quality, zone starts, empty net, shift length, score state? Paper doesn't model score state; we can note not in source. Need not overdo.
Need mention "36 estimates" and "48 ratings" maybe. Could note "paper reports 36 per-60 estimates and, if expressed per season, 48 ratings" [PAGE 5]. Good.

Need "RETROCAUSAL_GENEALOGY" maybe also "retrocausal" = later ridge/bayesian justification recasts earlier OLS. Use "The later Bayesian reading retroactively explains the penalty" [PAGE 21]. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe term "crisis habit regression" not from paper; okay it's our analysis. Need define not fake equation. Good.

Potential issue: "RLVR_COUNTERFACTUAL_VETOES" might require "RLVR" as reinforcement learning with verifiable rewards; need maybe not explain. Use "Verifiable veto" with source. Good.

Need no mention "betting lines" at all. Avoid "odds" word. Good.

Need final. Use exact sections. Could include markdown bullets inside XML. That's okay. Need ensure no unescaped `<` in text. Avoid "≤" use \le. Avoid ">" maybe use \to. Avoid raw &; use "and". In LaTeX, \(\hat\beta^\top\hat\beta\) no &. Good. Avoid \(X^\top X\) no problem. Need no `<` in "p << n"; use \(p \ll n\). Good. Need no "&" in "Fenwick and Corsi". Good.

Need if using "β" in XML okay. Use Unicode? Could use LaTeX. Fine.

Need maybe "N = 2,324,528" with comma okay. Good.

Let's produce final. Need maybe 2000 words. Let's write.


</NATIVE_REASONING>

<THINK_TRACE>
The source is a methods paper, not a game-prediction sheet. Its central derivation chain is: traditional plus-minus is contaminated by teammates, opponents, and deployment; regression-based adjusted plus-minus tries to isolate player contributions; hockey’s low scoring and high teammate collinearity make ordinary least squares unstable; ridge regression adds a shrinkage penalty to stabilize estimates; and shots, Fenwick, and Corsi supply roughly an order of magnitude more events than goals, reducing error bounds. The paper states that “roughly ten times as many shots as goals” exist [PAGE 1], and that the estimates are intended to be “independent of strength of teammates, strength of opponents, and the zone in which a player’s shift begins” [PAGE 1]. That independence claim is model-conditional: it assumes an additive linear structure, duration-weighted shift observations, zone-start indicators, and ridge shrinkage. It is not an unconditional causal proof.

The data construction is shift-level. Each shift creates two observations, one for the home team and one for the away team, and “Both of these observations are weighted by the duration of that shift” [PAGE 8]. Empty-net situations are removed [PAGE 8]. The even-strength model has \(N = 2,324,528\), while special teams has \(N = 461,022\) [PAGE 8]. The paper notes that “the average duration of a shift is 4.5 seconds longer for special teams than for even strength” [PAGE 8]. This matters because raw per-shift event counts would otherwise overweight short shifts and underweight long shifts; the duration weighting is a physical-layer correction.

The main gray-zone is collinearity. The paper gives the Sedin-twins example and states: “In an extreme case where two players always play together, the ordinary least squares estimates will not even be unique” [PAGE 3]. The linear-algebra diagnosis is exact: if two teammate columns of \(X\) are identical or nearly identical, \(X^\top X\) is singular or ill-conditioned. The paper puts it this way: “if two teammates play together often, then two columns of X are nearly the same, the columns of X are nearly linearly dependent, and the corresponding columns (and rows) XTX are nearly linearly dependent, which means that XTX is nearly singular and has a high condition number” [PAGE 20]. Ridge regression solves the singularity by adding \(\lambda I\), but it introduces bias. The paper is explicit that “As \(\lambda\) increases, the coefficients tend to stabilize and move toward zero” [PAGE 21].

The second gray-zone is outcome choice. Goals are rare and goalie-dependent; shots, Fenwick, and Corsi are more frequent and mostly goalie-independent. The paper says “shots, Fenwick rating, and Corsi rating ignore the shooting ability of players” [PAGE 4] and that those statistics are “for the most part, those statistics are independent of goalies” [PAGE 4-5]. Thus S/F/C are possession and territorial proxies, not finishing-skill measurements. The paper rescales them into expected goals using league-average conversion rates: “The results based on shots, Fenwick rating, and Corsi rating were then rescaled by multiplying by the league average goals per shot, goals per Fenwick rating, and goals per Corsi rating, respectively” [PAGE 5]. That rescaling gives units of expected goals per 60 minutes, not observed goals per 60 minutes.

The \(\lambda\)-selection audit is another gray-zone. The paper does not choose \(\lambda\) arbitrarily; it uses randomized generalized cross-validation with a Hutchinson trace estimator, the Hoerl-Kennard-Baldwin estimate, and variance inflation factors, and it chooses the highest value suggested by those diagnostics. It states: “We chose \(\lambda\) at least high enough so that the VIF were below 10” [PAGE 23]. Figure 1 uses \(\lambda = 0.5\), and the paper says “The vertical line at \(\lambda = 0.5\) in Figure 1 indicates the value of \(\lambda\) that we chose for that model” [PAGE 23]. This is important: an analyst who treats the paper as “OLS plus a small hack” will misread the model.

The uncertainty audit is also explicit. The paper does not claim exact player separation. It says: “The errors are still not small enough to be ignored, as the confidence intervals of many of the estimates still overlap” [PAGE 8]. The result tables show why: Ovechkin’s even-strength offense per 60 using goals is \(0.46\) with error \(0.18\), while the shot/Fenwick/Corsi versions have errors \(0.07\), \(0.06\), and \(0.05\) [PAGE 8]. So the model is more precise with S/F/C, but not decisive at the individual-player level.

Finally, the paper’s own examples show the crisis point. At \(\lambda=0\), “Pavel Datsyuk (solid red line) actually has a negative estimate, and Brandon Dubinsky (solid blue line) has a very high positive estimate” [PAGE 10]. The paper attributes Dubinsky’s OLS extreme to “minimal playing time” [PAGE 10] and Datsyuk’s to spending “90% of his power play time with one of his teammates, Nicklas Lidstrom” [PAGE 10-11]. That is the exact multi-hop trap: low minutes plus high co-play produce unstable OLS coefficients; ridge shrinks them back toward sane ranges, but the shrinkage is a bias-for-variance trade, not a truth machine.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s units are hockey event rates per 60 minutes: goals per 60, shots per 60, Fenwick per 60, Corsi per 60, and after rescaling, expected goals per 60. No SI unit, bit, nat, or information-theoretic unit is reported. The regularization parameter \(\lambda\), correlations, and VIFs are dimensionless diagnostics after column standardization; they are not physical quantities. The response and coefficients are in event-rate units, so the model is a rate-additive model, not a biomechanical force model.

The indicator operators are defined as
\[
X_j=\begin{cases}1,&\text{skater }j\text{ is on offense during the observation;}\\0,&\text{skater }j\text{ is not playing or is on defense;}\end{cases}
\]
\[
D_j=\begin{cases}1,&\text{skater }j\text{ is on defense during the observation;}\\0,&\text{skater }j\text{ is not playing or is on offense;}\end{cases}
\]
with \(1\le j\le J\) [PAGE 9]. The zone indicators are
\[
Z_{\mathrm{off}}=\begin{cases}1,&\text{shift begins with an offensive-zone faceoff;}\\0,&\text{otherwise;}\end{cases}
\quad
Z_{\mathrm{def}}=\begin{cases}1,&\text{shift begins with a defensive-zone faceoff;}\\0,&\text{otherwise.}\end{cases}
\]
[PAGE 9]

The even-strength linear model is
\[
y_i=\beta_0+\sum_{j=1}^{J}\beta_jX_{j,i}
+\sum_{j=1}^{J}\delta_jD_{j,i}
+\zeta_{\mathrm{off}}Z_{\mathrm{off},i}
+\zeta_{\mathrm{def}}Z_{\mathrm{def},i}.
\]
The paper states: “The quantities of interest are the \(\beta_j\)s and \(\delta_j\)s, which are player \(j\)’s offensive and defensive contributions, respectively, in terms of goals per 60 minutes” [PAGE 9]. The zone coefficients \(\zeta_{\mathrm{off}}\) and \(\zeta_{\mathrm{def}}\) estimate the value of starting a shift in the offensive or defensive zone in the same units [PAGE 9]. Matrix form is \(y=X\beta\) [PAGE 10].

OLS minimizes
\[
Q_{\mathrm{OLS}}(\beta)=\sum_{i=1}^{N}(y_i-\hat y_i)^2
=(y-X\beta)^\top(y-X\beta),
\]
and the normal equations are
\[
X^\top X\hat\beta=X^\top y.
\]
If \(\ker(X)=\{0\}\), then \(X^\top X\) is invertible and
\[
\hat\beta=(X^\top X)^{-1}X^\top y.
\]
The exact breakdown regime is \(\det(X^\top X)=0\), which occurs when columns of \(X\) are linearly dependent, for example when two players always play together [PAGE 3]. The near-breakdown regime is high condition number: \(X^\top X\) is “nearly singular” and “solutions to (8) are sensitive to small changes in the data” [PAGE 20].

Ridge regression minimizes
\[
Q_\lambda(\beta)=(y-X\beta)^\top(y-X\beta)+\lambda\beta^\top\beta,
\]
and solves
\[
(X^\top X+\lambda I)\hat\beta=X^\top y,
\qquad
\hat\beta=(X^\top X+\lambda I)^{-1}X^\top y.
\]
For \(\lambda>0\), \(X^\top X+\lambda I\) is positive definite if \(X^\top X\) is positive semidefinite, so the ridge solution is unique. At \(\lambda=0\), ridge collapses to OLS. As \(\lambda\to\infty\), \(\hat\beta\to0\). The paper describes the Bayesian reading: “The ridge regression model (11) is equivalent to a Bayesian regression model in which the coefficients \(\beta\) are given a normal prior distribution with mean 0 and a variance that depends on \(\lambda\)” [PAGE 21]. Thus ridge is a mean-zero shrinkage prior, not a neutral correction.

The hat matrix is
\[
H=X(X^\top X+\lambda I)^{-1}X^\top.
\]
The Hutchinson trace estimator uses
\[
\mathbb{E}(\varepsilon^\top B\varepsilon)=\sigma^2\operatorname{tr}(B),
\]
so
\[
\operatorname{tr}(H)\approx
\frac{1}{\sigma^2}\varepsilon^\top X
(X^\top X+\lambda I)^{-1}X^\top\varepsilon.
\]
This reduces the largest matrix from \(n\times n\) to \(p\times p\), with \(p\ll n\) [PAGE 21-22]. The paper uses this for randomized GCV [PAGE 22]. It also considers
\[
\lambda_{\mathrm{HKB}}=\frac{p\,\mathrm{MSE}}{\hat\beta^\top\hat\beta}
\]
[PAGE 22] and VIFs as diagonal elements of
\[
(X^\top X+\lambda I)^{-1}X^\top X(X^\top X+\lambda I)^{-1},
\]
requiring VIF below 10 [PAGE 22-23].

For shots, Fenwick, and Corsi, the rescaling is
\[
\hat\beta^{(S)}_{j,60}
=
\hat\beta^{(S),\mathrm{raw}}_{j,60}
\times
\overline{\left(\frac{\mathrm{Goals}}{\mathrm{Shots}}\right)},
\]
\[
\hat\beta^{(F)}_{j,60}
=
\hat\beta^{(F),\mathrm{raw}}_{j,60}
\times
\overline{\left(\frac{\mathrm{Goals}}{\mathrm{Shots+Missed\ Shots}}\right)},
\]
\[
\hat\beta^{(C)}_{j,60}
=
\hat\beta^{(C),\mathrm{raw}}_{j,60}
\times
\overline{\left(\frac{\mathrm{Goals}}{\mathrm{Shots+Missed\ Shots+Blocked\ Shots}}\right)}.
\]
League averages are computed separately for even strength, power play, and short handed situations over four full NHL seasons [PAGE 5]. The paper claims “In total, we get 36 estimates for each player in terms of goals per 60 minutes” [PAGE 5], and 48 ratings if expressed per season [PAGE 5]. The main breakdown regimes are: exact teammate co-linearity, near-singular \(X^\top X\), low goal counts, goalie confounding in goals models, special-teams sample scarcity, over-shrinkage at large \(\lambda\), and interpretation failure when expected-goal rescalings are treated as observed goals.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is explicit. Traditional plus-minus began in hockey, but advanced adjusted plus-minus developed faster in basketball; the paper cites NBA APM work by Winston, Rosenbaum, Lewin, Witus, Ilardi and Barzilai, Sill, and Fearnhead and Taylor [PAGE 3]. Hockey APM followed in Macdonald (2011a) and Macdonald (2011b), with weighted least squares and special-teams/zone-start adjustments [PAGE 3]. The present paper is a retrofit: it replaces OLS with ridge regression, citing Hoerl (1962) and Hoerl and Kennard (1970), and follows Sill’s basketball regularization approach [PAGE 4]. The later Bayesian interpretation retroactively explains the penalty as a normal prior centered at zero [PAGE 21]. The \(\lambda\)-selection machinery is also genealogically downstream of Girard’s randomized GCV and Hutchinson’s trace estimator [PAGE 21-22].

The multi-week traps are structural, not narrative. First, hockey’s scoring rate is low: “A typical hockey team only scores two to four goals per game on average during a season” [PAGE 3]. A short ingestion window will therefore contain too few goals to separate players, which is why the paper uses four seasons and why “roughly 10 shots to every goal” [PAGE 4] motivates S/F/C models. Second, teammate co-play creates collinearity; the Sedin example and the Datsyuk-Lidstrom example show that a player’s estimate can be stolen by a frequent partner [PAGE 3, PAGE 10-11]. Third, year-to-year stability is not uniform: even-strength offense correlations are \(0.28\) for OLS, \(0.36\) for goals, \(0.47\) for shots, \(0.56\) for Fenwick, and \(0.63\) for Corsi; power-play offense is \(0.18, 0.26, 0.34, 0.39, 0.44\); short-handed defense is \(0.22, 0.21, 0.26, 0.29, 0.30\) [PAGE 13]. The paper concludes that “the ridge estimates tend to be more consistent from year to year than the OLS estimates” [PAGE 11]. Fourth, special teams have less data and lower correlations than even strength [PAGE 12]. Fifth, the paper’s own future-work section warns that raw shots ignore shot quality; weighted shots using distance, shot type, and other details are proposed [PAGE 15-16]. A multi-week analyst who treats raw Corsi as finishing skill, or one season of goals as a stable player rating, is repeating the pre-ridge error.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The crisis habit is regression to the old plus-minus or to unregularized OLS when a ridge estimate conflicts with reputation. The paper gives the exact counterexample: at \(\lambda=0\), Datsyuk is negative on the power play and Dubinsky looks elite, while at larger \(\lambda\) the estimates “begin to stabilize” and Dubinsky “returns to a more reasonable level” [PAGE 10]. An analyst under reputational pressure may lower \(\lambda\) to recover the familiar ranking; that is the crisis habit. The counter-trap is the opposite: raise \(\lambda\) until all outliers disappear, then mistake shrinkage for truth. The paper avoids that by choosing the highest \(\lambda\) suggested by four diagnostics, including VIF below 10 [PAGE 23], and by showing trace curves that stabilize by \(\lambda=0.5\) [PAGE 23]. The clock is sample accumulation. The paper says ridge makes single-season results “stable enough to have value” [PAGE 7], but it still uses four seasons for its main tables and notes that even-strength estimates have higher year-to-year correlations than power-play and short-handed estimates because “there is much less data for special teams situations” [PAGE 12]. Recursively, the modeler knows the decision-maker may use APM for trades and salary negotiations [PAGE 3], and the decision-maker knows the modeler has shrunk estimates toward zero. The stable policy is neither OLS nostalgia nor infinite shrinkage: use the clock, report error bounds, and treat S/F/C as possession proxies rather than goal truth.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: The model is duration-weighted because “Both of these observations are weighted by the duration of that shift” [PAGE 8], and empty-net situations are removed [PAGE 8]. Shift length is not neutral: special-teams shifts average 4.5 seconds longer than even-strength shifts [PAGE 8], and “Typically, shift lengths are longer for the shifts when a goal is scored” [PAGE 23]. Any claim that unweighted per-shift counts are equivalent to the paper’s estimates is vetoed. Goalie quality is another physical-layer confound for goals; the paper includes defensive variables for goalies in goals models [PAGE 9], while S/F/C are “for the most part, those statistics are independent of goalies” [PAGE 4-5]. Any claim that a goals-based defensive estimate is goalie-neutral is vetoed.

Biomechanical veto: Raw shots, Fenwick, and Corsi are not finishing skill. The paper says “shots, Fenwick rating, and Corsi rating ignore the shooting ability of players” [PAGE 4], and it interprets more shots, missed shots, and blocked shots as “an indication of a territorial advantage and an advantage in terms of puck possession” [PAGE 4]. Blocked and missed shots are attempted shots that never reached the goal, so treating them as goals is a category error. The paper’s future-work proposal for weighted shots based on distance, shot type, and other details [PAGE 15-16] confirms that raw S/F/C are coarse. Any claim that Corsi directly measures shooting talent is vetoed.

Weather veto: The source contains no weather variables, no outdoor-rink model, and no environmental exposure layer. Weather cannot be used as a causal explanation for these estimates without adding data not present in the paper. The only defensible weather statement is that the model is indoor-arena agnostic and has no weather operator; any weather-based performance claim is vetoed as unsupported by the source.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: An analyst claims, “The paper’s APM is just OLS plus-plus-minus, so Datsyuk’s negative power-play number is a real ranking.” Veto: the paper uses ridge with \(\lambda>0\), and at \(\lambda=0\) “Pavel Datsyuk (solid red line) actually has a negative estimate, and Brandon Dubinsky (solid blue line) has a very high positive estimate” [PAGE 10]. Prediction: recomputing with the paper’s ridge setting \(\lambda=0.5\) [PAGE 23] will move Datsyuk upward and Dubinsky downward relative to their OLS positions; the ranking reversal is verifiable from the trace curves.

Scenario 2: An analyst claims, “APM error bounds are small enough to rank players without overlap.” Veto: the paper says “The errors are still not small enough to be ignored, as the confidence intervals of many of the estimates still overlap” [PAGE 8]. Prediction: Ovechkin’s even-strength offense per 60 will have a larger error for goals than for shots, Fenwick, and Corsi: \(0.46\pm0.18\) versus \(0.45\pm0.07\), \(0.53\pm0.06\), and \(0.63\pm0.05\) [PAGE 8]. Any claim of exact player separation is falsified by those intervals.

Scenario 3: An analyst claims, “One season of goals-based APM is as stable as one season of Corsi-based APM.” Veto: the year-to-year correlation audit gives even-strength offense \(0.36\) for goals versus \(0.63\) for Corsi, power-play offense \(0.26\) versus \(0.44\), and short-handed defense \(0.21\) versus \(0.30\) [PAGE 13]. Prediction: in a repeated season-to-season test, Corsi-based APM will correlate more strongly with itself than goals-based APM in those components; the paper’s Figure 3 values are the verifiable benchmark.
</RLVR_COUNTERFACTUAL_VETOES>