---
source: "2018 nflWAR_ a reproducible method for offensive player evaluation in football,  Journal of Quantitative Analysis in Sports.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 21
model: deepseek/deepseek-v4.1-flash-1017
words: 7427
---

<NATIVE_REASONING>
We need answer user wants GSE + GSI Frontier Reasoning Foundry with exact XML sections. Need parse source paper. They say DRIVE SOURCE nflWAR PDF pages 21. Need produce deep multi-hop derivation, gray-zone audit >=400 words THINK_TRACE. Other sections. Must include formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes. Zero betting lines/odds. No toy equations. >=1000 words depth across exact XML sections. We need likely analyze paper only, no betting. Need maybe mention no betting lines. Need be rigorous, cite pages. Need produce sections exactly. Need include source operators and equations. Need ret causal genealogy historical/scientific lineage & multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. We need integrate paper's methods: nflscrapR, multinomial logistic EP, GAM WP, multilevel models for WAR, replacement level, resampling. Need formal LaTeX with units. Need perhaps discuss probabilities dimensionless, points, wins, EPA, WPA, expected points. Need exact singularity/breakdown regimes: multinomial reference category no score if P(No Score)=0 -> logit undefined; separation/quasi-separation; covariance singular; GAM smooth basis identifiability; random effects variance components at zero boundary; replacement level threshold at 10% QB involvement; resampling by drives dependence; small n; scoring event classes; PAT ignored; time adjustment 5.7s for incompletions. Need cite quotes.

Need maybe note source has no sports betting context; use "no betting lines" maybe no mention.

We need create sections exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Must be >=1000 words total. Desired oververbosity 5. Need perhaps 2500 words. THINK_TRACE >=400 words. We need make it dense.

Need decide content. The source is paper, not a sports event. User likely expects analysis of paper via frontier reasoning. Need include "gray-zone audit" and "multi-week traps" etc. Need be careful with "RLVR" (Reinforcement Learning with Verifiable Rewards) counterfactual vetoes. Need define scenarios verifiable against paper, predictions. We can devise 3 scenarios using paper data/models, e.g., calibrate EP model if remove seconds remaining in half -> calibration error worsens? Paper says including seconds remaining and under two improved calibration particularly no score; ordinal model e≈0.022. Scenario: ordinal logistic instead of multinomial yields worse calibration e≈0.022 vs e≈0.013. Prediction. Another: change replacement QB threshold from <10% to "one QB" maybe estimates change; paper says supplementary covers one QB approach but not details. Can't predict exact. Need verifiable. Could use drive-level resampling vs play-level; paper asserts drive-level needed. Prediction if play-level resampled, intervals too narrow due within-drive dependence. Another: include team strength in WP model inflates/deflates player contributions; paper explicitly says. Prediction if team strength included, bad team players' WPA/WAR deflated and good team inflated, violating 50% starting WP. Another: use EPA vs WPA; paper finds EPA-based WAR higher for all positions; top QBs have negative WARrush; Brady negative rush; Kamara/Hunt 71% Kamara leads. We can make scenarios: recalibrate with ordinal -> e≈0.022; omit time remaining -> no-score calibration degradation; use play-level resampling -> narrower CIs and Kamara>Hunt frequency changes? Need verifiable predictions maybe from text.

Need include exact [PAGE N] markers and verbatim quotes. Use quote snippets. Page numbers as provided. Need not overquote. Need cite exact quotes with markers. Need all sections include some citations.

Need derive equations formally. Let's outline.

THINK_TRACE: discuss objective: evaluate paper, not produce betting. Multi-hop derivation: data -> play state -> next score multinomial -> EP -> WP GAM -> δ -> multilevel credit -> iPA/iPAA/iPAR -> replacement -> WAR -> uncertainty. Audit gray zones: public data limitation, no player participation, only offensive skill; replacement definitions; EPA vs WPA discrepancy; calibration; resampling. Need >400 words. Mention exact page quotes. Break down regimes: reference category probability zero, nonidentifiability in multinomial; smooth terms in GAM; random-effects variance zero; replacement threshold; scoring next half only; PAT excluded. Mention units.

SOURCE_OPERATORS_AND_EQUATIONS: Present formal equations:

Let game situation X. Y ∈ {7,3,2,0,-2,-3,-7}. Eq (2) six logits relative No Score:
\log(P(Y=y|X)/P(Y=0|X)) = X β_y for y in {7,3,2,-7,-3,-2}. Then probabilities softmax:
P(Y=y|X)= exp(Xβ_y)/(1+Σ_{k≠0}exp(Xβ_k)), P(Y=0)=1/(1+Σ...). EP = E[Y|X]=Σ y y P(Y=y|X) with units points. Cite pages 4-5.

Calibration error e_{y,b}=|P̂_b(Y=y)-P_b(Y=y)| dimensionless probability. e_y = 1/n_y Σ_b n_{y,b} e_{y,b}; e = 1/n Σ_y n_y e_y. Cite page 5. e≈0.013; ordinal e≈0.022.

WP GAM:
\log(P(Win)/(1-P(Win))) = s(E[S]) + s(s_h)h + s(E[S/(s_g+1)]) + h u t_off + h u t_def. E[S]=EP+S. Units: E[S] points; s_g seconds; ratio points/s; h categorical half; u indicator; t counts. Cite page 7 Table 1 and eq7 page 7. Inverse logit. Need note no team strength.

Play value δ_{f,i}=V_f - V_i, units points (EPA) or probability (WPA). For scoring V_f=y. Air/YAC split: ∆_air = δ_{f,i,air} 1(comp)+δ_{f,i}1(incomp), ∆_yac similarly. Time adjustment 5.7 s for incomplete passing; cite page 8.

Multilevel: δ_{f,i} ~ N(Q_{q[i]}+C_{c[i]}+X_i β, σ_δ²). Q_q~N(µ_Q,σ_Q²); C_c~N(µ_C,σ_C²). Passing air/yac models eq12-13. Rushing eq14-15. iPA units points or probability. iPAA = κ iPA. Eq16; caution typo in paper? It says iPAAp,rush = κp,rush · iPAp,air in text likely typo should iPAp,rush? We can note as source typo? It says "iPAAp,rush = κp,rush · iPAp,air" on page 11. Interesting. We can mention "as printed, Eq. (16) has iPAAp,rush = κp,rush·iPAp,air; dimensional consistency requires iPAp,rush, so this is a notational typo/breakdown to audit." Good gray-zone. Need cite page 11. It indeed has iPAAp,rush = κp,rush · iPAp,air. This is important. We can state formal correction.

Replacement shadow: iPAA^repl_{p,air}=κ_pass·iPA^repl_air etc. iPAR = iPAA - iPAA^repl. Sum. Wins conversion: Wins_t=β0+β_S S_t+ε; β_S ~0.03 wins/point; points per win ≈33. WAR_EPA=iPAR/33 or iPAR·β_S. WAR_WPA=iPAR_WPA. Cite page 13. Units wins.

Uncertainty: drive resampling 1000 simulated seasons. Cite page 13. Breakdown regimes: reference category no score zero; separation; multinomial probabilities sum; GAM smooth basis; random effect σ at zero; replacement thresholds; 5.7 sec; only next score within half; PAT separate.

RETROCAUSAL_GENEALOGY: historical lineage: Carter & Machol 1971, Carroll et al 1988 Hidden Game, Burke 2009/2014, Goldner Markov, Lock & Nettleton random forests, Baumer openWAR, Thomas & Ventura road to WAR, multilevel models in baseball/hockey/basketball, nflscrapR inspired by nhlscrapR, pitchRx, Lahman, openWAR, ballR. Multi-week traps: proprietary data vs public reproducibility; yards not context; passer rating/ANY/A not points/wins; QBR human judgment; PFF proprietary; AV subjective; team strength inclusion; EPA vs WPA; replacement level arbitrary; drive-level dependencies; player participation missing; line play proxy. Need cite pages 1-3, 9, 12-13.

RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock." Need interpret as cognitive/decision patterns. In paper context: analysts/teams may regress to box-score habits (yards, passer rating) under pressure; counter-trap is overfitting proprietary/human grades/QBR; clock is game time/score/timeouts in models. Need discuss recursive modeling: evaluator anticipates teams/players optimizing metrics; model must avoid team strength contaminating player credit; replacement level and uncertainty. Crisis habit regression = reverting to basic box score or proprietary grades when data incomplete. Counter-trap = trying to "fix" by adding team strength indicators or human judgment which inflates/deflates; paper warns. Clock = time remaining, half, under two, timeouts, expected score time ratio. Need formal mention GAM includes s(sh)·h and h·u·toff/tdef. Also player usage dependent on team decisions, drive resampling. Need maybe mention "recursive" because metrics alter incentives; WAR based on WPA and EPA; if players chase air yards/YAC, model components separate. Need not overdo.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need tie to paper limitations. Physical: NFL public data lacks player tracking, formations, on-field locations except shotgun; cannot estimate line/defensive players. Biomechanical: QB hit indicator, sacks, scrambles; rushing QB separate due to designed vs scramble indistinguishable; air yards and YAC split; time to pass 5.7s average; no weather. Weather: paper has no weather covariates; no wind/temperature/precipitation; outdoor conditions could affect EP/WP calibration and passing/rushing. Veto proof: a claim that nflWAR isolates individual offensive skill is vetoed if it requires unavailable player participation/weather/biomechanical tracking. Need list vetoes: cannot infer individual OL WAR; cannot infer defensive player WAR; cannot attribute QB sack avoidance fully without pressure data; cannot generalize to weather extremes; cannot treat EPA vs WPA as interchangeable. Need cite pages 2-3, 9, 11, 18-19. "Physical/biomechanical/weather veto proof" maybe need explicit proof by contradiction: if model lacks variables, then omitted-variable bias; multilevel random intercepts absorb group means but not unobserved player-specific effects. Need formal: omitted variable Z correlated with player indicator P yields E[β̂_P] = β_P + γ Cov(P,Z)/Var(P) (after controls). This is formal equation. Need include units? γ units points per Z. Could include. But avoid toy? This is standard omitted-variable bias, not fake ratio. Good. Exact singularity: if player indicator collinear with team/position/gap/defense, design matrix rank deficient; lme4 penalization may handle but variance components boundary. Weather omitted variable correlated with team? If weather affects both passing and team, could bias.

Need mention physical layer: no player tracking, no formations, only shotgun; "NFL does not publicly provide information about which players are on the field..." quote page 2. Weather absent: no weather variables in Table 1/2/3. Cite pages 7,10. Need say cannot prove weather effects from source; veto is against extending beyond source.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions. Need formulate clear: scenario, intervention, expected observation, verifier, veto condition. Need include citations. Since RLVR = reinforcement learning with verifiable rewards, maybe scenarios are counterfactual modifications to model. Need predictions verifiable. Let's craft 3:

1. Replace multinomial EP with ordinal logistic. Paper: ordinal logistic worse LOSO CV calibration e≈0.022 vs selected e≈0.013. Prediction: calibration error >0.013 and event-level miscalibration, especially tails; if not, veto claim that multinomial is necessary. Verifier: LOSO CV calibration error equations on pages 5. Need exact.

2. Add team strength indicators to WP model. Paper explicitly says would artificially inflate/deflate player contributions because every game starts 50%. Prediction: WP calibration at game start no longer 0.5; player WPA/WAR shifts systematically by team quality; bad-team offensive players lower, good-team higher. If no shift, veto. Verifier: compare pre-game WP and WAR distributions. Cite page 7.

3. Use play-level rather than drive-level resampling. Paper: resample entire drives to account for usage dependent on team decision making and within-drive dependencies. Prediction: play-level bootstrap underestimates variance, narrower intervals, increases false certainty; Kamara>Hunt frequency may shift from 71% (but maybe direction not guaranteed). Need verifiable: variance of simulated WAR lower, coverage lower. If intervals unchanged, veto. Cite page 13 and page 16. Could also use scenario "EPA vs WPA choice": paper finds EPA-based WAR higher than WPA for all positions; using EPA as final WAR without conversion or interpreting as wins is invalid. Prediction: raw EPA iPAR not in wins, scale by β_S≈0.03; if interpret raw as wins, overstates by ~33x. Verifier: Eq19 and page13. This is verifiable. Need 3 scenarios. Could include this as third. But need "counterfactual vetoes" maybe 3. Let's include: 1 ordinal; 2 team strength; 3 play-level resampling. Or include EPA/WPA conversion. Which is more verifiable? The paper gives exact values for ordinal and team strength. Play-level resampling not given exact but prediction. Could include 4? User says 3. We can do 3 and mention additional. Need maybe include "prediction: e≈0.022" is exact from paper. Good. For team strength no exact but qualitative. For play-level no exact. Maybe third use EPA vs WPA: paper reports EPA-based WAR tends higher than WPA; if one labels EPA iPAR as WAR without dividing by ~33, overstates by factor ~33. Verifier exact Eq19. This is strong. But play-level resampling is core uncertainty. Could include four? They ask 3 verifiable; can do exactly 3 but maybe include two in one? Better exactly 3 with clear predictions. Maybe combine EPA/WPA as part of scenario 3? Hmm.

Need ensure no betting lines. Avoid words odds. "Moneylines" etc. Not mention.

Need include >=1000 words. We can produce ~3000. Need exact XML tags. No markdown? Could use plain text inside XML. Need include equations with LaTeX. Use dollar signs. Fine.

Need be careful about "zero toy equations" - don't invent fake ratios. Use paper equations only plus standard omitted variable bias maybe. Formal LaTeX, units, assumptions, exact singularity/breakdown regimes. Need label units.

Let's gather exact quotes:
- Page 1 abstract: "We present four contributions..." not needed.
- Page 1 "proprietary data... not reproducible" quote.
- Page 2 "NFL does not publicly provide information about which players are on the field for a particular play, the offensive and defensive formations (other than the “shotgun” formation on offense), or the pre- and post-snap locations of players on the field." Actually page 2. Use.
- Page 2 "three yards gained on 3rd and 2 are more valuable than three yards gained on 3rd and 7" page 1-2.
- Page 4: "For each play, we find the next scoring event within the same half (with respect to the possession team) as one of the seven possible events..." page 4. "304,896 non-PAT plays, excluding QB kneels" page 4.
- Page 5: "resulting in e ≈0.013" and "ordinal logistic regression ... noticeably worse with e ≈0.022." page 5.
- Page 7: "every game starts with each team having a 50% chance of winning." and "Including indicators for a team’s overall, offensive, and/or defensive strengths would artificially inflate (deflate) the contributions made by players on bad (good) teams" page 7.
- Page 8: "we make an adjustment to the time remaining by subtracting the average length of time for incomplete passing plays, 5.7 seconds." page 8.
- Page 9: "NFL does not publicly specify which players are on the field for every play" page 9. "we use multilevel models ... embrace this positional group structure and account for the observation dependence." page 9.
- Page 13: "we use linear regression to estimate the relationship between team t’s regular season win total and their score differential" and "coefficient estimate ^βS (typically about 0.03...)" page 13. "roughly 33 additional points will raise expected number of wins by 1." page 13. "resample entire team drives" page 13. "1000 simulated seasons" page 13.
- Page 16: "In nearly 71% of the simulated seasons, Kamara leads Hunt in WAR" page 16.
- Page 18: "not a perfect measure of offensive line performance" page 19? Let's check page 19: "We recognize, however, that this is not a perfect measure of offensive line performance..." page 181 maybe page 19. Cite [PAGE 19].
- Page 18/19: "all code provided" etc.

Need maybe include source typo on page 11. Quote "iPAAp,rush = κp,rush · iPAp,air" page 11. We can flag. Is that okay? Yes.

Need maybe mention "nflWAR uses WPA-based WAR in results" page 14: "For this reason, we focus on the WPA-based version of WAR" page 14. Good.

Need structure.

Let's draft each section.

THINK_TRACE: Need >=400 words. We can write ~700. Include multi-hop derivation and gray-zone audit. Use [PAGE N] markers. Ensure formal enough. Let's compose:

"Operator chain: (i) public play-by-play nflscrapR [PAGE 1,3]; (ii) define state X and next scoring event Y within same half as seven classes [PAGE 4]; (iii) multinomial logit gives probabilities p_y(X), EP=Σ y p_y; (iv) GAM maps EP+score diff and clock to WP [PAGE 7]; (v) play value δ=V_f - V_i [PAGE 8]; (vi) split pass into air/YAC with 5.7s adjustment [PAGE 8]; (vii) multilevel varying intercepts for QB, receiver, defense, rusher, team-side-gap [PAGE 9-11]; (viii) iPAA=κ iPA, replacement shadow, iPAR, convert points to wins via β_S≈0.03 wins/point or ~33 points/win [PAGE 13]; (ix) drive bootstrap 1000 seasons [PAGE 13]."

Gray zones: reference category no score; if p0=0 or separation then logit undefined; calibr error; GAM identifiability; random effects variance zero; replacement thresholds; 10% QB; team strength; EPA vs WPA; typo in Eq16; no weather/tracking; data only players directly involved. Need mention "The paper does not include weather covariates" etc.

SOURCE_OPERATORS_AND_EQUATIONS: formulate.

Need maybe include assumptions:
A1: Conditional on X, next score distribution captured by multinomial logit; no unobserved confounding at player level; A2: random intercepts exchangeable within position/group; A3: replacement level defined by usage thresholds; A4: linear points-to-wins relationship; A5: drive resampling represents sampling variability; A6: no team strength in WP to preserve symmetry. Include units.

Breakdown regimes:
- P(Y=0|X)→0: logit singular; softmax still defined if other probabilities, but MLE separation; penalization.
- Multinomial probabilities sum to 1; if any p=1 for one class, others zero; separation.
- GAM: smooth basis rank deficiency; concurvity between E[S], s_h, ratio; if s_g=0? Actually s_g+1 in denominator; if s_g=-1 impossible because seconds remaining nonnegative, so denominator >=1. But ratio can blow up if s_g→0; E[S/(s_g+1)] has denominator 1 at 0, not singular. But time remaining zero game over; WP limit. Smooth term at zero boundary. Timeouts indicator interactions only when h·u; if u=1 and h? If no under-two, terms zero; not singular.
- Random effects σ_Q→0: group intercepts collapse; lme4 boundary; shrinkage to mean; player effects nonidentifiable if variance zero.
- Replacement threshold: κ below threshold -> replacement label; if player exactly at threshold ambiguous; small n.
- Points-to-wins: β_S near zero or negative? If β_S=0, points per win infinite; WAR undefined. In NFL positive ~0.03.
- Resampling: if drive count small, bootstrap distribution discrete; 1000 simulated seasons finite.
- EPA vs WPA: if use WPA, iPAR already wins; if EPA, divide by 33. Mixing invalid.

RETROCAUSAL_GENEALOGY: Need historical lineage and multi-week traps. We can discuss from Carter/Machol 1971 to Carroll et al 1988, Burke, Goldner, Lock/Nettleton, openWAR. Also scientific lineage: multinomial logistic, GAM, multilevel/hierarchical models, bootstrap. Multi-week traps: "proprietary shortcut", "box-score regression", "team-strength contamination", "replacement-level arbitrariness", "EPA/WPA conflation", "play-level independence", "missing participation". Need mention "multi-week" maybe if tracking over weeks, not one game. Use paper's season-long modeling. Need cite pages 1-3, 9, 12-13. Good.

RECURSIVE_THEORY_OF_MIND: Need "Crisis habit regression vs counter-trap vs clock." Interpret. Write:
- Crisis habit regression: under uncertainty, analysts/teams fall back to yards, passer rating, ANY/A, QBR/PFF grades. Paper says these are not interpretable in points/wins [PAGE 2] and QBR not reproducible [PAGE 2].
- Counter-trap: adding team strength to WP to "know who is good" contaminates player credit; paper explicitly warns [PAGE 7]. Another counter-trap: using EPA and calling it wins; paper focuses WPA-based WAR because relationship to wins [PAGE 14]; EPA-based WAR higher [PAGE 14].
- Clock: model must include time remaining in half, under two, timeouts; GAM eq7. Clock is not mere covariate; it changes value of plays. Recursive theory of mind: evaluator anticipates players/teams responding to incentives; if metric rewards air yards, behavior may adapt; separating air/YAC and rush prevents single-dimension gaming. Team decision-making affects usage; resample drives [PAGE 13]. Need mention "crisis habit regression vs counter-trap vs clock" as triad. Good.

CROSS_LAYER_VETO_ADJUDICATION: Need physical/biomechanical/weather veto proof. Use formal omitted variable bias. State "A claim is vetoed if it requires an unobserved variable Z that is correlated with the player indicator and affects δ." Equation:
E[\hat β_p] = β_p + γ_{Z} \frac{Cov(P_p, Z | X_{-p})}{Var(P_p | X_{-p})}
where γ_Z is effect of Z on δ (points per Z unit). If P_p correlated with Z, bias nonzero. With random intercepts, only if Z varies within group and is unmodeled. Then list physical: no on-field participation, formations, locations [PAGE 2], no individual OL [PAGE 19], only shotgun. Biomechanical: QBHit indicator, sacks, scrambles; cannot separate designed QB rushes from scrambles [PAGE 11]; average 5.7s for incompletions [PAGE 8]. Weather: no weather covariates in Tables 1-3 [PAGE 7,10]; cannot estimate wind/precip effects; outdoor extremes veto. Need "proof": If weather W affects EP/WP and correlated with team/player, omitted variable bias; source lacks W, so any causal claim about player skill under weather is non-identifiable from paper. Also physical tracking absent; cannot claim lineman WAR. "Veto proof" maybe list vetoes:
V1: individual offensive line WAR from tPA side-gap is vetoed because tPA is team-side-gap, not individual lineman; quote [PAGE 19].
V2: defensive player WAR is vetoed because no player participation, defense random intercept only [PAGE 10-11].
V3: weather-conditioned player evaluation is vetoed because no weather variables; not in Table 1/2/3.
V4: biomechanical sack avoidance cannot be fully isolated because QBHit indicator only and no pressure/time-to-throw; 5.7s average is global.
Need include.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios. Let's write with "RLVR verifier" and "veto if". Need formal predictions. Include citations.

Potential issue: User wants "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We won't. Avoid "odds" entirely. We can mention "probability" okay. Don't use word "odds". Good.

Need maybe use "points" as scoring, not betting. Fine.

Need mention "SI/information/probability units" - use units: points, wins, dimensionless probability, seconds, count. Information? Maybe "calibration error dimensionless; log-odds in nats? The logit is log-ratio dimensionless; β units inverse covariate. GAM smooth terms in log-odds. Multinomial probabilities dimensionless. No information units? Could mention "log-odds are dimensionless (nats only if using log base e)" maybe. "SI" seconds, points not SI but game units. Need mention "points" not SI. Use "dimensionless probability". Need maybe "win probability added" dimensionless; WAR wins. Good.

Need ensure exact XML sections. Could include line breaks. It's okay. Need not include other text outside? We can include only sections.

Let's draft thoroughly.

Need maybe include "THINK_TRACE" with >=400 words. Let's count rough. We'll write ~700. Total likely 3000. Good.

Let's now craft final answer.

Need be precise with quotes. Use [PAGE 5] after quote. For "e≈0.013" exact. For "e≈0.022". Use "approximately" not exact? Paper uses ≈. Good.

In SOURCE_OPERATORS_AND_EQUATIONS, include equations with \begin{aligned}. Use LaTeX. Need not be overly formatted. Need include "Assumptions" and "Breakdown/singularity".

Let's write.

Potential issue: In Eq (16) paper typo, if we mention "printed Eq. (16) says iPAAp,rush = κp,rush · iPAp,air; dimensional consistency requires iPAp,rush." This is a strong audit. Cite [PAGE 11]. Good.

Need include exact "P(Y=y|X)" equations. The paper uses six logit transformations relative No Score. We can write.

Calibration: e_y = 1/n_y sum n_{y,b} e_{y,b}. Good.

WP: use E[S] = EP + S. The paper Table 1 says E[S] Expected score differential = EP + S. Eq7 uses s(E[S]) + s(s_h)·h + s(E[S/(s_g+1)]) + h·u·t_off + h·u·t_def. Need note h, u linear parametric terms. Good.

Play value: δ=V_f-V_i. For scoring use y. For air/YAC: we can write.

Multilevel: Need mention all models use varying-intercept and lme4. Eq9-10. Passing models eq12-13. Rushing eq14-15. Good.

WAR: Eq19. β_S about 0.03 wins per point. Divide by 33. WAR_WPA direct. Good.

Uncertainty: 1000 simulated seasons by resampling drives. Good.

Now RETROCAUSAL_GENEALOGY: cite pages. Use historical: Carter and Machol 1971, Carroll et al 1988; Burke 2009/2014; Goldner 2017; Lock and Nettleton 2014; Baumer et al 2015 openWAR; Thomas and Ventura 2015; multilevel in baseball/hockey/basketball. Pages 1-2, 9, 12. Multi-week traps: "single-week box score", "proprietary shortcut", "team-strength contamination", "EPA/WPA conflation", "replacement-level threshold", "drive independence". Good.

RECURSIVE_THEORY_OF_MIND: Need maybe include "crisis habit regression" term not in paper; okay. Write clearly.

CROSS_LAYER: Use formal OVB equation. Need mention weather no variables. Good.

RLVR: three scenarios. Let's ensure each has prediction and verifier. Scenario 1: ordinal logistic. Prediction: LOSO calibration e≈0.022 >0.013. Veto if e≤0.013. Scenario 2: team strength in WP. Prediction: pre-game WP not 0.5; player WAR systematically shifted. Veto if no shift. Scenario 3: play-level resampling. Prediction: narrower intervals, lower coverage, possibly Kamara-Hunt frequency moves from ~71%; veto if intervals identical or if drive-level and play-level bootstrap agree within Monte Carlo error. Need this is verifiable. Good. Maybe include "Use 1000 simulated seasons." Good.

Need maybe mention "RLVR" as "Verifiable reward checks". Good.

Let's produce final. Ensure no betting terms. Avoid "odds". Check final for "odds" no. Use "probability" only.

Need maybe include "moneylines" no. "spreads" no. "totals" no. Good.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s operator chain is a multi-hop derivation from public play-by-play to a player-season win-scale estimate. First, nflscrapR supplies publicly available NFL play-by-play data [PAGE 1][PAGE 3]. Second, each play is represented by a game-state covariate vector \(X\), and the response is the next scoring event within the same half, chosen from seven classes: touchdown, field goal, safety, no score, opponent safety, opponent field goal, and opponent touchdown [PAGE 4]. Third, a multinomial logistic regression models the probability of each scoring event directly; expected points are then recovered as \(EP=\mathbb{E}[Y\mid X]=\sum_y y\,P(Y=y\mid X)\) [PAGE 4–5]. Fourth, the expected score differential \(E[S]=EP+S\) is fed into a generalized additive model for win probability, with smooth terms for expected score differential, seconds remaining in the half interacted with half, and expected score time ratio, plus parametric timeout interactions [PAGE 7]. Fifth, play value is \(\delta_{f,i}=V_f-V_i\), where \(V\) is EP or WP, yielding EPA or WPA [PAGE 8]. Sixth, passing plays are split into air-yard and yards-after-catch components, with a 5.7-second time adjustment for incompletions [PAGE 8]. Seventh, multilevel varying-intercept models assign credit to QBs, receivers, opposing defenses, rushers, and team-side-gap blockers [PAGE 9–11]. Eighth, individual points/probability above average iPAA is computed from attempts times iPA, replacement shadows are subtracted to get iPAR, and EPA-based iPAR is converted to wins via a season-level regression of wins on score differential, where \(\hat\beta_S\approx 0.03\) wins per point and roughly 33 points per win [PAGE 13]. Ninth, uncertainty is estimated by resampling entire team drives across 1000 simulated seasons [PAGE 13].

The gray-zone audit begins with the response definition. The paper deliberately ignores PAT attempts and treats PATs separately, excluding QB kneels and using 304,896 non-PAT plays from 2009–2016 [PAGE 4]. This is a modeling choice, not a neutral fact: if the scoring environment changes or if two-point conversions are not handled consistently, the point values attached to touchdown classes must be updated. The multinomial logit is specified relative to “No Score” [PAGE 5], so the model’s numerical stability depends on \(P(Y=\text{No Score}\mid X)>0\). If that reference probability approaches zero, the six logits diverge; if the classes are separated by covariates, maximum likelihood can fail or produce extreme coefficients. The paper’s calibration criterion is therefore essential: it reports \(e\approx 0.013\) for the selected multinomial model and \(e\approx 0.022\) for an ordinal logistic alternative [PAGE 5]. That comparison is a verifiable veto against the ordinal simplification.

The next gray zone is the win-probability model. The paper explicitly excludes team-strength indicators because “every game starts with each team having a 50% chance of winning,” and including team strength would “artificially inflate (deflate) the contributions made by players on bad (good) teams” [PAGE 7]. This is a causal-credit constraint, not merely a predictive-performance choice. If team strength were added, the WP model might fit better but the player WAR scale would be contaminated by team quality. The GAM’s smooth terms also create identifiability and concurvity risks: \(E[S]\), \(s_h\), and \(E[S/(s_g+1)]\) are related game-state summaries, and the half/timeout interactions are only active in specific states. The model is well calibrated by quarter in the paper’s LOSO CV checks [PAGE 7–8], but calibration is not the same as structural identification.

The multilevel credit model has additional breakdown regimes. The random intercepts are assumed normal and partially pooled: \(Q_q\sim N(\mu_Q,\sigma_Q^2)\), \(C_c\sim N(\mu_C,\sigma_C^2)\), and so on [PAGE 9]. If a variance component \(\sigma_Q^2\) is estimated at the boundary zero, the player effects collapse toward the group mean and individual separation is weak. If a player indicator is collinear with team, position, side-gap, or defense, the design matrix can become rank deficient; penalized likelihood via lme4 mitigates but does not eliminate interpretational ambiguity. The paper also contains a notational inconsistency in printed Eq. (16): it lists \(iPAA_{p,\mathrm{rush}}=\kappa_{p,\mathrm{rush}}\cdot iPA_{p,\mathrm{air}}\) [PAGE 11], whereas dimensional consistency requires \(iPA_{p,\mathrm{rush}}\). That is a concrete audit flag: the printed equation cannot be used literally.

The final gray zones are replacement level and uncertainty. Replacement level is defined by position-specific usage thresholds and a QB threshold of less than ten percent involvement [PAGE 12–13]. These thresholds are defensible but arbitrary at the boundary; a player just above or below the line can change status. The EPA-to-wins conversion depends on \(\hat\beta_S\); if \(\hat\beta_S\) were zero or negative in a small sample, points per win would be undefined or nonsensical [PAGE 13]. The drive-level bootstrap is chosen because player usage depends on team decisions and within-drive play-calling dependencies [PAGE 13]. Play-level resampling would therefore understate uncertainty. These are the primary singularities, boundary cases, and omitted-variable traps in the paper.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**1. Next-score multinomial operator.**  
Let \(X\) be the game-state covariate vector for a play. The response is  
\[
Y\in\{7,3,2,0,-2,-3,-7\},
\]
representing touchdown, field goal, safety, no score, opponent safety, opponent field goal, and opponent touchdown, respectively [PAGE 4–5]. The model uses six logit transformations relative to “No Score”:
\[
\log\!\left(\frac{P(Y=y\mid X)}{P(Y=0\mid X)}\right)=X\beta_y,
\quad y\in\{7,3,2,-7,-3,-2\}.
\]
Equivalently,
\[
P(Y=y\mid X)=\frac{\exp(X\beta_y)}{1+\sum_{k\in\{7,3,2,-7,-3,-2\}}\exp(X\beta_k)},
\]
\[
P(Y=0\mid X)=\frac{1}{1+\sum_{k}\exp(X\beta_k)}.
\]
The expected-points operator is
\[
EP=\mathbb{E}[Y\mid X]=\sum_y y\,P(Y=y\mid X),
\]
with units of **points** [PAGE 5]. The probabilities are dimensionless; the coefficients \(\beta_y\) have units inverse to the corresponding covariate in \(X\).

**Assumptions:** the seven-event response captures the relevant next-score distribution conditional on \(X\); the “No Score” category is a valid reference; the multinomial logit is correctly specified; and the play’s next scoring event is measured within the same half with respect to the possession team [PAGE 4].

**Calibration operator.** For scoring event \(y\) in bin \(b\),
\[
e_{y,b}=\left|\hat P_b(Y=y)-P_b(Y=y)\right|,
\]
\[
e_y=\frac{1}{n_y}\sum_b n_{y,b}e_{y,b},
\qquad
e=\frac{1}{n}\sum_y n_y e_y,
\]
where \(n_y=\sum_b n_{y,b}\) and \(n=\sum_y n_y\) [PAGE 5]. These calibration errors are dimensionless probability errors. The paper reports \(e\approx 0.013\) for the selected multinomial model and \(e\approx 0.022\) for an ordinal logistic alternative [PAGE 5].

**Breakdown/singularity regimes:** if \(P(Y=0\mid X)\to 0\), the six logits are unbounded; if the classes are separated by \(X\), the MLE can diverge; if the reference category is omitted or collapsed incorrectly, the probability simplex is misspecified. The calibration error is undefined for an empty bin and unstable for very small \(n_{y,b}\).

**2. Win-probability GAM operator.**  
The paper defines \(E[S]=EP+S\), where \(S\) is the current score differential, and uses
\[
\log\!\left(\frac{P(\text{Win})}{P(\text{Loss})}\right)
=
s(E[S])+s(s_h)\cdot h
+
s\!\left(E\!\left[\frac{S}{s_g+1}\right]\right)
+
h\cdot u\cdot t_{\mathrm{off}}
+
h\cdot u\cdot t_{\mathrm{def}},
\]
where \(s_h\) is seconds remaining in the half, \(s_g\) is seconds remaining in the game, \(h\) is the current half, \(u\) is the under-two-minutes indicator, and \(t_{\mathrm{off}},t_{\mathrm{def}}\) are timeouts remaining [PAGE 7, Table 1]. The inverse logit gives \(WP\). Units: \(E[S]\) is points; \(s_g,s_h\) are seconds; \(E[S/(s_g+1)]\) is points per second; \(h,u\) are categorical/indicator; \(t_{\mathrm{off}},t_{\mathrm{def}}\) are counts. The logit scale is dimensionless.

**Assumptions:** no team-strength indicators are included, so every game starts at 50% win probability [PAGE 7]. The smooth terms are assumed to capture nonlinearity without concurvity severe enough to destabilize the fit.

**Breakdown/singularity regimes:** if \(s_g+1\) is used with \(s_g\ge 0\), the denominator is at least 1, so there is no arithmetic singularity; however, near \(s_g=0\) the game state is terminal and the smooth term is at a boundary. Severe concurvity among \(E[S]\), \(s_h\), and the expected score time ratio can make individual smooth components weakly identified. Timeout interactions are inactive unless \(h\cdot u=1\), so their coefficients are identified only from the relevant half/under-two subset.

**3. Play-value operator.**  
For play \(i\) with ending state \(f\),
\[
\delta_{f,i}=V_f-V_i,
\]
where \(V\) is either \(EP_i\) or \(WP_i\) [PAGE 8]. Thus \(\delta_{f,i}\) is EPA in points or WPA in win-probability units. For scoring plays, \(V_f=y\), the scoring event value, rather than the next play’s EP. The paper’s example is Foles’ touchdown: \(V_i\approx 2.78\), so \(EPA\approx 7-2.78=4.22\) [PAGE 8].

For passing plays, the air/YAC split is
\[
\Delta_{\mathrm{air}}
=
\delta_{f,i,\mathrm{air}}\mathbf{1}(\text{completion})
+
\delta_{f,i}\mathbf{1}(\text{incompletion}),
\]
\[
\Delta_{\mathrm{yac}}
=
\delta_{f,i,\mathrm{yac}}\mathbf{1}(\text{completion})
+
\delta_{f,i}\mathbf{1}(\text{incompletion}).
\]
The time remaining is adjusted by subtracting 5.7 seconds, the average length of an incomplete pass [PAGE 8]. This 5.7 s is a **seconds** unit and is a global estimate, not a player-specific biomechanical measurement.

**4. Multilevel credit operator.**  
A simple two-group varying-intercept model is
\[
\delta_{f,i}\sim N\!\left(Q_{q[i]}+C_{c[i]}+X_i\beta,\ \sigma_\delta^2\right),
\]
\[
Q_q\sim N(\mu_Q,\sigma_Q^2),\qquad
C_c\sim N(\mu_C,\sigma_C^2),
\]
for QBs \(q\) and receivers \(c\) [PAGE 9]. Passing models use separate air and YAC responses:
\[
\Delta_{\mathrm{air}}\sim N\!\left(Q_{\mathrm{air},q[i]}+C_{\mathrm{air},c[i]}+F_{\mathrm{air},\nu[i]}+A_i\alpha,\ \sigma_{\Delta_{\mathrm{air}}}^2\right),
\]
\[
\Delta_{\mathrm{yac}}\sim N\!\left(Q_{\mathrm{yac},q[i]}+C_{\mathrm{yac},c[i]}+F_{\mathrm{yac},\nu[i]}+B_i\beta,\ \sigma_{\Delta_{\mathrm{yac}}}^2\right),
\]
with random intercepts for QBs, receivers, and opposing defenses [PAGE 10–11]. Rushing models separate QB rushes from non-QB rushes because designed QB runs and scrambles cannot be consistently separated in public data [PAGE 11]. The non-QB rushing model is
\[
\delta_{f,i}\sim N\!\left(H_{\iota[i]}+T_{\tau[i]}+F_{\mathrm{rush},\nu[i]}+P_i\rho,\ \sigma_{\delta_{\mathrm{rush}}}^2\right),
\]
where \(T_\tau\) is a team-side-gap proxy for blockers [PAGE 11].

The individual points/probability added operators are
\[
iPAA_{p,\mathrm{air}}=\kappa_{p,\mathrm{pass}}\cdot iPA_{p,\mathrm{air}},
\]
\[
iPAA_{p,\mathrm{yac}}=\kappa_{p,\mathrm{pass}}\cdot iPA_{p,\mathrm{yac}},
\]
\[
iPAA_{p,\mathrm{rush}}=\kappa_{p,\mathrm{rush}}\cdot iPA_{p,\mathrm{rush}}.
\]
The printed source at Eq. (16) says \(iPAA_{p,\mathrm{rush}}=\kappa_{p,\mathrm{rush}}\cdot iPA_{p,\mathrm{air}}\) [PAGE 11]; that is a notational inconsistency. The dimensionally correct form must use the rushing iPA.

Replacement shadows are
\[
iPAA^{repl}_{p,\mathrm{air}}=\kappa_{p,\mathrm{pass}}\cdot iPA^{repl}_{\mathrm{air}},
\quad
iPAA^{repl}_{p,\mathrm{yac}}=\kappa_{p,\mathrm{pass}}\cdot iPA^{repl}_{\mathrm{yac}},
\quad
iPAA^{repl}_{p,\mathrm{rush}}=\kappa_{p,\mathrm{rush}}\cdot iPA^{repl}_{\mathrm{rush}},
\]
and
\[
iPAR_{p,k}=iPAA_{p,k}-iPAA^{repl}_{p,k},
\quad k\in\{\mathrm{air},\mathrm{yac},\mathrm{rush}\}.
\]
The total is \(iPAR_p=\sum_k iPAR_{p,k}\) [PAGE 13]. Units are points or win probability depending on whether \(\delta\) was EPA or WPA.

**5. Points-to-wins operator.**  
The conversion regression is
\[
\mathrm{Wins}_t=\beta_0+\beta_S S_t+\epsilon_t,
\qquad
\epsilon_t\overset{iid}{\sim}N(0,\sigma^2),
\]
where \(S_t\) is season score differential [PAGE 13]. The coefficient \(\hat\beta_S\) is typically about \(0.03\) wins per point, implying roughly 33 points per win. Thus
\[
WAR_{EPA}\approx \frac{iPAR_{EPA}}{33}\approx iPAR_{EPA}\cdot \hat\beta_S,
\]
in **wins**, while WPA-based iPAR is already on the win-probability scale and is treated as WAR [PAGE 13–14]. The paper focuses on WPA-based WAR because of its direct relationship to winning games [PAGE 14].

**Breakdown/singularity regimes:** if \(\hat\beta_S=0\), points per win is undefined; if \(\hat\beta_S<0\), the conversion is nonsensical; if EPA-based iPAR is interpreted directly as wins without division/multiplication by \(\hat\beta_S\), the scale is wrong by roughly a factor of 33. If WPA and EPA iPAR are mixed in one total, the units are incoherent.

**6. Uncertainty operator.**  
The paper resamples entire team drives rather than individual plays and uses 1000 simulated seasons [PAGE 13]. This preserves within-drive dependence and team-decision dependence. The variance of the resulting simulated WAR distribution is the uncertainty estimate. Breakdown occurs if drives are treated as independent when they are not, or if the number of drives is so small that the resampling distribution is too discrete.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicit in the paper. The play-evaluation branch runs from Carter and Machol’s operations-research treatment of football, through Carroll et al.’s *The Hidden Game of Football*, to Brian Burke’s expected-points and EPA work and Goldner’s Markov-model absorption-probability approach [PAGE 1–2]. The paper positions its multinomial-logit EP model against nearest-neighbor and exact-neighbor averaging methods, arguing that modeling the probability of each scoring event directly “more appropriately accounts for the differing relationships between the different categories of the ‘next score’ response and the covariates” [PAGE 4]. The win-probability branch runs through Burke’s empirical binning, random-forest models such as Lock and Nettleton, and the GAM/calibration approach used here [PAGE 2][PAGE 7]. The player-evaluation branch runs through baseball’s openWAR and “road to WAR” tradition, basketball and hockey adjusted plus-minus/regularized regression, and multilevel catcher/pitcher models [PAGE 1–2][PAGE 9][PAGE 12]. The reproducibility lineage is also explicit: nflscrapR is inspired by nhlscrapR, pitchRx, Lahman, openWAR, and ballR [PAGE 3].

The retrocausal lesson is that the paper is not merely a new metric; it is a reaction against proprietary, non-reproducible, and non-game-interpretable evaluation. The authors criticize prior football work because “statistical analysis of football that does tackle on-field or player personnel decisions frequently relies on proprietary and costly data sources” [PAGE 1], and they note that ESPN’s QBR “is not directly reproducible since it relies on human judgment and is limited only to QBs” [PAGE 2]. They also criticize Pro Football Focus grades as “solely based on human judgment and proprietary to PFF” [PAGE 2–3] and Pro Football Reference’s approximate value as having subjective components and not being interpretable in terms of game outcomes [PAGE 3]. This is the historical trap: when public data are incomplete, analysts regress to box-score linear combinations such as passer rating or ANY/A, which “are not based on EPA or WPA, so they are not interpretable in terms of points or wins” [PAGE 2].

The multi-week traps are structural, not one-game anomalies. First, the “yards are yards” trap persists across weeks because raw yards ignore down, distance, field position, and clock [PAGE 1–2]. Second, the “proprietary shortcut” trap persists because human grades and proprietary data can look precise while being unverifiable. Third, the “team-strength contamination” trap persists because adding team indicators to a win-probability model can improve fit while corrupting player credit; the paper explicitly warns that this would inflate or deflate players on good or bad teams [PAGE 7]. Fourth, the “EPA/WPA conflation” trap persists because EPA-based WAR tends to be higher than WPA-based WAR, and the paper reports that “for all positions, the EPA-based WAR values tend be higher than the WPA-based values” [PAGE 14]. Fifth, the “replacement-level arbitrariness” trap persists because replacement is defined by roster and usage thresholds, including a QB threshold of less than ten percent involvement [PAGE 12–13]. Sixth, the “play-level independence” trap persists because resampling plays instead of drives would ignore team decision dependence [PAGE 13]. These are multi-week traps because they recur in every weekly evaluation cycle unless the analyst enforces the paper’s unit discipline, replacement discipline, and uncertainty discipline.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The crisis-habit regression is the fallback to familiar box-score quantities when the data are incomplete. The paper’s own historical review shows this habit: yards gained/lost, passer rating, and ANY/A are common because they are easy, but they strip context and are not interpretable in points or wins [PAGE 1–2]. Under crisis, an analyst may say “the quarterback had a high passer rating” or “the running back had many yards,” but the paper’s operator chain requires a play-value state, a scoring-event probability, a win-probability mapping, and a replacement comparison. The habit regression is therefore a unit error: it substitutes a box-score linear combination for a points/wins scale.

The counter-trap is the overcorrection. One counter-trap is adding team strength to the win-probability model to “know who is good.” The paper explicitly vetoes this: including team strength would “artificially inflate (deflate) the contributions made by players on bad (good) teams” [PAGE 7]. Another counter-trap is treating EPA as if it were already wins. EPA-based iPAR is in points; it must be divided by roughly 33 points per win or multiplied by \(\hat\beta_S\approx0.03\) [PAGE 13]. A third counter-trap is treating the team-side-gap \(T_\tau\) estimate as individual offensive-line WAR. The paper says this is “not a perfect measure of offensive line performance” because it does not capture individual linemen and may suffer selection bias from running backs choosing holes [PAGE 19]. The counter-trap is to over-interpret a team proxy as a player metric.

The clock is not a decorative covariate; it is a value operator. The win-probability GAM includes \(s(s_h)\cdot h\), the under-two indicator \(u\), and the timeout interactions \(h\cdot u\cdot t_{\mathrm{off}}\) and \(h\cdot u\cdot t_{\mathrm{def}}\) [PAGE 7]. This means the same yard gain has different value depending on half, seconds remaining, and timeouts. The recursive theory-of-mind point is that players and teams anticipate the metric. If the metric rewards air yards, behavior may shift toward deep attempts; if it rewards YAC, behavior may shift toward screens; if it rewards rushing, behavior may shift toward designed runs. The paper’s separation of \(WAR_{\mathrm{air}}\), \(WAR_{\mathrm{yac}}\), and \(WAR_{\mathrm{rush}}\) is a countermeasure: it prevents one aggregate number from hiding which skill produced value [PAGE 14–16]. The drive-level resampling is also a theory-of-mind correction: player usage is not independent of team decision-making, so the uncertainty model must resample team drives, not isolated plays [PAGE 13]. The correct recursive stance is: model the play value, model the clock, model the credit, model the replacement, and model the uncertainty—without letting the metric’s own incentive effects collapse into a single box-score habit.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is warranted when a claim requires a variable that the paper does not observe and that is correlated with the player indicator. Formally, suppose the true play-value model is
\[
\delta = P_p\beta_p + X\gamma + Z\eta + \varepsilon,
\]
where \(P_p\) is the player indicator and \(Z\) is an omitted physical, biomechanical, or weather variable. The omitted-variable bias in the player coefficient is
\[
\mathbb{E}[\hat\beta_p]
=
\beta_p
+
\eta\,
\frac{\operatorname{Cov}(P_p,Z\mid X)}{\operatorname{Var}(P_p\mid X)}.
\]
Here \(\eta\) has units of play value per unit of \(Z\). If \(P_p\) and \(Z\) are correlated conditional on \(X\), the player estimate is biased even if the multilevel shrinkage is correct. This is the formal veto proof.

**Physical-layer vetoes.** The paper states that “the NFL does not publicly provide information about which players are on the field for a particular play, the offensive and defensive formations (other than the ‘shotgun’ formation on offense), or the pre- and post-snap locations of players on the field” [PAGE 2]. It repeats that “the NFL does not publicly specify which players are on the field for every play” [PAGE 9]. Therefore any claim that nflWAR isolates individual offensive-line WAR, individual defensive-player WAR, or formation-specific player value is vetoed. The \(T_\tau\) team-side-gap term is a team-level proxy, not an individual lineman effect [PAGE 11][PAGE 19]. The defensive random intercept \(F_\nu\) is a team-defense effect, not a player-defense effect [PAGE 10–11].

**Biomechanical-layer vetoes.** The public data include a QB-hit indicator, sacks, scrambles, air yards, and YAC, but not pressure time, throw velocity, route separation, or lineman movement. The paper separates QB rushes from non-QB rushes because “we cannot consistently separate (in the publicly available data) designed QB rushes from scrambles on broken plays” [PAGE 11]. The 5.7-second incompletion adjustment is a global average, not a measured snap-to-pass time [PAGE 8]. Therefore a claim that the model isolates a QB’s biomechanical sack-avoidance skill is partially vetoed: the model can capture sack loss and QB-hit context, but it cannot fully separate pressure, scramble, and designed-run mechanisms. A claim that the model isolates receiver route-running biomechanics is also vetoed because only targeted receiver, air yards, YAC, and pass location are available [PAGE 9–10].

**Weather-layer vetoes.** The paper’s win-probability variable list includes expected score differential, seconds remaining, half, under-two indicator, and timeouts; it does not include temperature, wind, precipitation, or field surface [PAGE 7, Table 1]. The player-model variable list includes home, shotgun, no-huddle, QB hit, pass location, air yards, receiver position, rush position, pass strength, and rush strength; it does not include weather [PAGE 10, Table 2]. Therefore any claim that nflWAR estimates weather-conditioned player skill or that its WAR is invariant under extreme weather is vetoed by the source’s own covariate set. If weather \(Z\) affects \(\delta\) and is correlated with team, player, or game state, the omitted-variable bias formula above applies. The source cannot prove a zero weather effect; it can only prove that weather was not modeled. The correct adjudication is: weather-specific extrapolation is outside the paper’s identified layer.

**Scale-layer vetoes.** EPA and WPA are different units. The paper reports that EPA-based WAR tends higher than WPA-based WAR for all positions [PAGE 14]. Any claim that sums EPA-based iPAR and WPA-based iPAR into one WAR number is vetoed. Any claim that treats raw EPA iPAR as wins without the \(\hat\beta_S\approx0.03\) conversion is vetoed [PAGE 13]. Any claim that the ordinal logistic EP model is equivalent to the multinomial model is vetoed by the reported calibration error \(e\approx0.022\) versus \(e\approx0.013\) [PAGE 5].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: Replace the multinomial EP model with ordinal logistic regression.**  
Intervention: estimate EP with an ordinal logistic model that assumes equivalent effects as the scoring value increases, rather than the seven-class multinomial model. Verifier: leave-one-season-out cross-validation calibration error \(e\) defined on [PAGE 5]. Prediction: the ordinal model will produce a larger calibration error, approximately \(e\approx0.022\), and will be worse than the selected multinomial model’s \(e\approx0.013\) [PAGE 5]. Veto condition: if the ordinal model matches or beats \(e\approx0.013\) across the seven scoring events, the claim that the multinomial classification is necessary is vetoed. This is a verifiable RLVR check because the error is a deterministic function of predicted and observed bin probabilities.

**Scenario 2: Add team-strength indicators to the win-probability GAM.**  
Intervention: include team overall/offensive/defensive strength indicators in the WP model. Verifier: pre-game win probability and player WAR distributions. Prediction: the model will no longer start every game at a 50% win probability, and player WPA/WAR will shift systematically by team quality: players on strong teams will be inflated and players on weak teams deflated, exactly as the paper warns [PAGE 7]. Veto condition: if adding team strength leaves pre-game WP at 0.5 and leaves player WAR distributions unchanged after controlling for the same plays, the paper’s contamination warning is vetoed. This is verifiable by comparing calibrated pre-game WP and by regressing player WAR shifts on team strength.

**Scenario 3: Replace drive-level resampling with play-level resampling.**  
Intervention: estimate WAR uncertainty by resampling individual plays rather than entire team drives, using the same 1000 simulated seasons. Verifier: width and coverage of simulated WAR intervals, plus the joint Kamara–Hunt comparison. Prediction: play-level resampling will produce narrower intervals and overconfident rankings because it ignores within-drive dependence and team-decision dependence [PAGE 13]. The paper’s drive-level result is that “in nearly 71% of the simulated seasons, Kamara leads Hunt in WAR” [PAGE 16]; a play-level bootstrap should not be treated as an equivalent uncertainty statement. Veto condition: if play-level resampling produces the same interval widths and the same joint frequency within Monte Carlo error, the paper’s drive-level dependence argument is vetoed. This is verifiable by direct Monte Carlo comparison of interval widths and by repeated simulation frequencies.
</RLVR_COUNTERFACTUAL_VETOES>