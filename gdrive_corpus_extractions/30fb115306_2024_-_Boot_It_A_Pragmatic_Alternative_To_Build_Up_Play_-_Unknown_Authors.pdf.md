---
source: "2024 - Boot It A Pragmatic Alternative To Build Up Play - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2024"
pages: 19
model: deepseek/deepseek-v4.1-flash-1017
words: 7493
---

<NATIVE_REASONING>
We need answer user asks to produce deep analysis with exact XML sections and >=1000 words. Need comply invariants: no betting lines. Need cite pages exact markers and verbatim quotes. Need formal LaTeX equations units assumptions singularities/breakdown regimes. Need multiple sections exact tags. Need likely no need betting; this is soccer research. Need analyze paper. Need include source operators and equations. Need maybe mention no betting. Need "CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof" should discuss physical/biomechanical/weather veto relative to booting strategy—perhaps apply to soccer: biomechanical kick distance, weather pitch, throw-in time. Need not invent fake ratios. Need formal equations and units. Need "RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions." Need define scenarios and predictions. Need cite pages exact [PAGE N] and verbatim quotes. Need ensure word count >1000. We need likely answer with XML only? Could have preamble? Better exact sections. Need ensure all tags present. Need include >=400 word THINK_TRACE. Need rigorous.

Let's parse paper. Key data: StatsBomb 360 event stream; SPADL. Backward pass angle < -5π/6 or >5π/6. Throw-in pressured defined. Training dataset 1,466,942 passes (351,247 backward), 63,414 throw-ins (31,300 pressured); test 504,962 passes (118,395 backward), 21,851 throw-ins. Goal within 10 actions. Table 1 probabilities by bin. Model value V(S_i)=P_score^k(S_i,t)-P_concede^k(S_i,t). xG sequence combined = 1 - product (1 - xG_shot). XGBoost hyperparams grid. Features. Open play AUC 0.790 etc. Throw-in AUC 0.727 etc. Simulate clearance using goal kicks >40m distribution; throw-in time distribution; end location sample within 10m. Basic assumes simulated throw-in always pressured; also 50/75. Figure 7 average diff over season ~1.08. Table 4 values: defensive third +0.73, +0.91, +1.08; middle -0.90, -0.38, +0.13; offensive -10.88, -10.65, -10.41. Table 5: defensive observed -0.17? Wait likely values: observed policy (pass-only) maybe +0.17? OCR has "-0.17"? It says Defensive third 0.17? Let's inspect text: "Table 5. Average total possession value... Area Observed Policy (Pass-only) Naive Policy (Boot-only) Learned Policy Defensive third 0.17 0.91 1.00 Middle third 5.77 5.90 7.71 Offensive third 13.18 2.78 13.27" There may be plus signs omitted. Need use careful quote maybe "Defensive third ... 0.17 ... 0.91 ... 1.00" etc. Don't invent. Mention OCR signs ambiguous? Could avoid exact signs except Table 4 and page 12. Use quotes.

Need source operators/equations with units. Could state state value unit dimensionless probability (expected goals per state). V dimensionless (goal probability). P_score, P_concede probabilities ∈ [0,1]. k actions dimensionless count. xG_shot probability. xG_seq dimensionless probability. Backward pass angular condition in radians. Throw-in pressure Boolean. Goal kick length in meters; distance bins 21m. Time in seconds? Paper says time elapsed; no explicit units but likely seconds. We can say seconds (event stream time units). Need not invent; maybe "time" with units as recorded. Use SI.

Breakdown regimes/singularities: Equation V difference has no mathematical singularity; but model breakdown under distribution shift: simulated counterfactual clearance+throw-in outside support; policy trained on 2022/23 Serie A and evaluated 2023/24; small samples near final third; xG sequence product under independence assumption? Actually formula no independence? 1 - ∏(1-xG_shot) treats shot xG as probabilities and assumes? It is inclusion-exclusion if independent? Actually probability at least one goal = 1 - P(no goal), and product (1-xG) only if independent conditional. Could state assumption independence across shots. But paper presents as combined xG. Could note approximation. Singularity/breakdown: when xG_shot=1, product zero -> xG_seq=1 boundary; when all xG_shot=0 -> 0. No negative. Value in [-1,1]. P estimates can be biased; tree ensembles output bounded [0,1]. Breakdown when pressure fraction p < threshold where sign flips. From Table 4 middle third sign flips between 75% (-0.38) and 100% (+0.13); defensive stays positive at 50%. Need compute no betting. Could discuss threshold interpolation but not necessary. Could mention "gray-zone audit" about using goal kicks as proxy; assumption that clearance always out; always closest touchline; throw-in always pressured; single sample; evaluating only backward passes; no direct defensive value of turnover? Actually V includes concede. Potential issue: booting gives possession to opponent; throw-in model values game state from possessing team? Need understand: They compare pass game state value to throw-in game state value. For pass, team t possesses. For simulated throw-in, opponent has throw-in; but value for booting team? They evaluate subsequent throw-in game state as alternative option. Need value orientation? The throw-in value model likely estimates value for team that possesses? For booting team after conceding throw-in, they want probability booting team scores from opponent's throw-in? Wait paper says "goals scored by team that conceded throw-in (i.e., 'booting' team recovers ball and scores from opponent's throw-in)." Model: value of game state for team t that possesses ball. For throw-in, opponent possesses, so V for opponent? To value booting team, need negative of opponent's value? The paper maybe uses throw-in value model for team taking throw-in? They simulate throw-in for opponent and then evaluate "subsequent throw-in game state." If model outputs value for possessing team (opponent), then booting team's value = negative. But they report positive booting. Need clarify. In SOURCE, "the value assigned to simulated clearance+throw-in is higher than value of executed pass." They may assign value from perspective of team that would regain? Hmm. In Table 1 "From Opponent Throw-in: Probability of Scoring" low 0.01-0.34. For pass 0.18 etc. For booting to be better in defensive third, they compare expected goal differential? If opponent throw-in value from opponent perspective is positive? Actually opponent throw-in near final third could be valuable to opponent, so booting team's value is negative. But paper says booting better in defensive third; possible because pass backward value is even more negative? Wait V = P_score - P_concede for possessing team. Backward pass in defensive third: team possesses but risky; maybe V negative. Simulated throw-in for opponent: opponent possesses; from booting team's perspective, value = -V_opponent. But if throw-in near opponent goal, opponent's V high, so booting team's V very negative—not better. Yet paper finds booting better in defensive third, meaning maybe they value the throw-in as a state for the team that conceded? Let's inspect: They say "we can simulate expected chance of scoring if a team would have kicked the ball out of bounds" and "goals scored by the team that conceded the throw-in (i.e., 'booting' team recovers the ball and scores from the opponent's throw-in)." Elementary Table 1: From opponent throw-in probability of scoring (booting team scores) in last bin 0.34 > backward pass in defensive bins 0.18/0.20. That is scoring probability, not net. For model, throw-in game state value model likely trained to value game state for team that will regain? Let's re-read: "We adopt a similar approach to value game states following throw-ins. We train our models on a set of historical throw-ins" Features include opponent pressure on receiver. If model trained on xG for team that possesses? For throw-in, the throw-in team possesses. But they want value for defending team (booting team) maybe labels next shots by defending team? Not explicit. They say "Offensive throw-in value model" and "Defensive throw-in value model." Could be value for team taking throw-in (offensive) and defending team (defensive). For booting team after opponent throw-in, use defensive throw-in value model for booting team? The "defensive throw-in value model" could estimate probability the defending team scores/concedes? Hmm. Need not overstate. In equations general V for team t possessing. For throw-in alternative, if opponent possesses, must orient sign. The paper might handle via "simulated throw-in game state value" for the team that would defend the throw-in? Need mention orientation as gray-zone audit. Could cite exact: page 6 "where P_score... P_concede... team t that possesses the ball in state S_i will respectively score or concede..." Then throw-in model pages 8. They don't explicitly state sign flip. But they report positive booting. Need identify potential ambiguity. We can say "the paper does not spell out sign convention for opponent throw-in in the excerpt; a reproducible implementation must fix orientation; otherwise V_boot = -V_throwin(opponent) or V_throwin(defending team) depending on label construction. This is a gray-zone." That is valuable.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Discuss Reep/Benjamin 1968 direct play, Hughes & Franks 2005 mythbusting, VAEP Decroos 2019, xPass/un-xPass Robberechts 2023, StatsBomb OBV, Goals Added, Markov MDP Van Roy 2023, TacticAI 2024, McKinley throw-ins, Dona & Swartz causal throw-ins. Multi-week traps: treating observed frequency as causality; confounding by game state/team quality; selection bias on backward passes; simulation distribution shift; single-sample simulation; pressure definition. "Retrocausal genealogy" maybe trace how older "boot it" practice got re-evaluated by modern value models. Need mention multi-week traps in research design: data leakage across seasons, overfitting policy, using xG as target with rare events, ignoring throw-in offensive value, misclassifying deliberate clearances. Need cite pages.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Interpret as decision-making under pressure: sideline shouts "BOOT IT"; modern build-up habit; crisis habit regression (under pressure revert to clearance), counter-trap (opponent anticipates clearance and sets press/throw-in trap), clock (late-game time, score state, throw-in time). Need tie to paper: pressure definition, 50/75/100% pressing, learned policy 82% accuracy. Need discuss recursive ToM: player models own team, opponent, coach, crowd; if opponent knows you boot under pressure, they may leave trap; mixed policy with randomness for game-theoretic reasons. Need mention "clock" as time elapsed since previous action and match time features. Counter-trap: if opponent expects boot, they can position for throw-in; but paper assumes pressure. Need use page 15 quote "possibly with some randomness for game-theoretic reasons." Page 10 quote about pressure fractions. Need avoid betting. Word count.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need adjudicate whether booting strategy can be vetoed by physical/biomechanical/weather layers. Discuss kick distance distribution from goal kicks >40m; biomechanical max power, fatigue, pitch surface, wind, rain, temperature; throw-in time distribution; wet ball, touchline proximity; if clearance cannot reliably reach final third or touchline, strategy invalid. Need formal proof? "veto proof" maybe show conditions that veto. We can formulate: if realized clearance length L < L_min or out-of-bounds probability q < q*, or pressure probability p < p*, then expected value advantage Δ ≤0. But avoid fake ratios? It's okay to define variables if formal. Need not invent arbitrary ratios? Invariant says no fake ratios like Force/Fatigue. We can define probabilities and thresholds from model outputs. Need state physical layer: L distribution from goal kicks; biomechanical capacity; weather affects L and throw-in time; if L shifted left, throw-in start closer to own goal; model may not support. Use no exact invented constants except from paper: >40m goal kicks, 3m/5m radii, 10m tolerance, 20 yards/18m throw-in possession loss. Mention 18m from page 2 quote. Weather not in paper; must label as external veto layer, not source. Need "proof" as conditional: V_boot(S) = -V_throwin(opponent, X') (or orientation) + maybe; Δ = V_boot - V_pass. If V_throwin model has support; if physical constraints produce X' outside support, estimate invalid. If p < p* from Table 4 middle third sign flips; defensive third remains positive at p=0.5 (+0.73). Need use page 14 exact. Could say cross-layer veto is not automatic for defensive third under paper's assumptions; it is conditional on pressure ≥50% and clearance length within goal-kick support. For offensive third vetoed strongly (-10.41 to -10.88). Middle third veto at p≤75% (-0.38) but not at 100% (+0.13). That's good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning with Verifiable Rewards? Need create three scenarios that if observed would veto paper's claim. Verifiable: pre-registered metrics, data splits, simulation seeds. Scenario 1: orientation/sign error in throw-in value model; prediction: if corrected, defensive-third advantage shrinks/reverses? Need be precise. Scenario 2: pressure fraction lower than 50% or real pressure misclassification; prediction: defensive third Δ becomes ≤0 if p below threshold. But Table 4 shows at 50% +0.73, so threshold <50; need estimate? Can't invent threshold. We can say "if p is below the sign-change threshold (not estimated in paper; to be measured), Δ ≤0." Verifiable by rerun with p grid. Scenario 3: distribution shift in clearance length/throw-in end location: if actual deliberate clearances are shorter than goal-kick distribution or out-of-bounds probability lower; prediction: Δ decreases and may flip. Need predictions with model reruns. Another scenario: policy evaluation leakage; if train/test season split violated, 82% accuracy drops to baseline. Need 3.

Need ensure exact page citations and verbatim quotes. Need include quotes with [PAGE N]. Need not overdo. Need word count >1000. With sections maybe 2000 words. Desired oververbosity 5. Need answer likely only XML sections. Need include no betting lines. We can mention "No betting lines are used."? Invariant says never mention betting lines. Better avoid phrase "betting" entirely? It says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. Could say no odds? Better not mention any. Avoid "betting" word. Fine.

Need include exact XML sections. Could use Markdown inside XML. Need ensure all sections present.

Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX, units, page citations, breakdown. We can include equations:
- Backward pass condition: θ = atan2(y_e-y_s, x_e-x_s) perhaps. Paper says angle between start and end location; condition θ < -5π/6 or θ > 5π/6. Units radians. Use [PAGE 3] quote.
- State value: V(S_i)=P_score^k(S_i,t)-P_concede^k(S_i,t), dimensionless probability (expected goal difference over k actions). k count.
- xG_seq = 1 - ∏_{shot∈seq}(1-xG_shot), dimensionless probability. Boundary: xG_shot=1 -> 1; all 0 ->0; assumes independence? Mention.
- Throw-in pressure indicator: B_pressure ∈ {0,1}; definition page 3.
- Simulation: L_clear ∼ empirical distribution of goal kicks >40 m; T_throw ∼ empirical distribution; end location ∼ historical within 10 m. Units meters/seconds. Need cite page 9-10.
- Δ = V_boot - V_pass; report season aggregate. Table 4.
- Policy accuracy 82% [PAGE 15].
- AUC etc.
Need "breakdown regimes": no singularity in equations; xG product boundary; model support; sign orientation; p threshold; final third.

Need maybe cite exact quotes:
Page 1: "A player wins possession deep in their own half, and immediately, shouts echo from the sideline: “BOOT IT!ˮ" and "But is giving up possession always a bad idea?" 
Page 2: "previous research has shown that possession is more likely to be lost than retained for throw-ins taken within 20 yards (18m) of a team’s own goal" maybe exact.
Page 3: "filtering passes whose angle is <−5/6 * π or > 5/6 * π"
Page 6: "V(S_i)=P_score^k(S_i,t)-P_concede^k(S_i,t)" and xG formula.
Page 8: Table 2/3.
Page 12: "on average, the difference in possession value over the full season is around 1.08 (i.e., booting results in a bigger reward)."
Page 14: Table 4.
Page 15: "The ensemble policy achieves 82% accuracy on the test season (2023/24 Serie A)." and "possibly with some randomness for game-theoretic reasons".
Page 17: conclusions "better alternative in a team’s defensive third... valid option... middle third."
Need exact quotes maybe OCR punctuation. Use verbatim as in source. Need not perfect but should be close. Need mark [PAGE N]. Need no fabricated quotes.

Need discuss data counts maybe cite [PAGE 3]. Good.

Need "THINK_TRACE" >=400 words. Need deep multi-hop derivation and gray-zone audit. Let's draft.

Potential structure:
<THINK_TRACE>
Paragraphs: restate claim; reconstruct pipeline: identify backward passes by angle; define pressured throw-ins; elementary 10-action scoring; model value; simulate clearance; policy. Multi-hop: observed backward pass value vs simulated boot value. Need audit: elementary comparison is not apples-to-apples: Table 1 compares scoring probability not net V; model fixes by V. But simulation uses goal kicks >40m as proxy; assumes clearance out; assumes throw-in always pressured (then 50/75); samples single throw-in; throw-in model limited features; no player locations in throw-in model; orientation ambiguity; selection bias: observed backward passes only; counterfactual boot rare; policy trained on 2022/23 ratings and tested 2023/24; 82% accuracy is classification against model labels, not ground truth; xG product independence; goal kick proxy excludes intentional short kicks; closest touchline simplification; pressure definition; final third sign; no weather/biomechanical. Need say table 4 supports defensive third robust to p=0.5; middle third flips; offensive third veto. Need mention no singularities. Word count 500+.

Need ensure "gray-zone audit" includes "multi-week traps" maybe in genealogy.

Need "SOURCE_OPERATORS_AND_EQUATIONS" formal. Include citations. Could be 600 words.

Need "RETROCAUSAL_GENEALOGY" maybe 300 words.

Need "RECURSIVE_THEORY_OF_MIND" 300.

Need "CROSS_LAYER_VETO_ADJUDICATION" 400.

Need "RLVR_COUNTERFACTUAL_VETOES" 400.

Total >1000. Need maybe 2500. Fine.

Need be careful not to mention "odds" etc. No betting lines.

Need answer in XML. No extra.

Let's craft exact content.

Need maybe include "units: dimensionless probability, meters, seconds, radians, count." Good.

Potential issue: "PAGE 14" Table 4 has signs: "Defensive third + 0.73 0.91 1.08; Middle third -0.90 -0.38 +0.13; Offensive third -10.88 -10.65 -10.41." In source OCR some missing minus. We'll quote as "defensive third +0.73 / 0.91 / 1.08; middle third −0.90 / −0.38 / +0.13; offensive third −10.88 / −10.65 / −10.41" noting signs as rendered/interpreted. But exact quote? Maybe don't quote table as verbatim; cite page and paraphrase. Use quote from page 14: "as the defending team struggles to consistently apply pressure, the “booting” option loses some value. However, in the defensive third it remains clearly advantageous even if the team is only able to apply pressure in one out of two throw-ins." That is exact. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe "physical/biomechanical/weather veto proof" with formal condition:
Let X = (x,y,τ,pressure,score state). Let M_pass(X) and M_throw(X') be model estimates. Define Δ(X)=M_boot(X)-M_pass(X). A cross-layer veto set is V = {X: X' ∉ supp(D_train)} ∪ {X: p < p*} ∪ {X: L < L_min}. If X ∈ V, Δ is not identifiable. For physical layer, L_clear is sampled from goal kicks >40m [PAGE 9]; if biomechanical max L_max < 40m or weather reduces L, then X' outside support and veto. For throw-in, T_throw distribution and end location within 10m [PAGE 10]; if weather increases T_throw beyond support or mud reduces throw-in length, veto. Need not invent L_min? We can define L_min as lower bound of training support >40m. That's from paper. p* from sign-change. Good.

Need "RLVR" maybe say "Verifiable reward veto tests" not define? Could define: "RLVR-style verifiable counterfactual tests: each has a pre-registered observable, a rerun, and a pass/fail predicate." Good.

Need "predictions" maybe:
1. Sign/orientation audit: If V_boot recomputed with opponent-throw-in sign orientation, defensive-third Δ changes sign? But paper's claim maybe would be invalid. Prediction: "a sign-consistent implementation will reproduce positive defensive-third Δ under 100% pressure; if not, veto." Hmm scenario should be veto if observed. Let's make scenario "orientation error detection": Rerun with explicit orientation; if the sign-consistent Δ in defensive third is ≤0 at 100% pressure, veto. Prediction: given Table 4, likely remains positive; if not, the paper's positive result is an artifact. That is verifiable. But user asks "3 verifiable RLVR veto scenarios + predictions" not necessarily all will veto. We can include predictions likely pass/fail.

2. Pressure distribution audit: Replace 100% with measured pressure probability from held-out 2023/24. If p_measured below sign threshold, predicted Δ defensive third maybe still positive if >0.5? Table 4 says at 50% +0.73. If actual p < 0.5, could flip. Prediction: if p<50%, defensive-third Δ likely decreases and may become ≤0; middle third flips below 100%. Need precise.

3. Clearance length distribution audit: Use observed deliberate clearances out of bounds (not goal kicks) and weather/fatigue subsample. If L distribution left-shifts, throw-in starts further from opponent goal; predicted Δ decreases; if Δ≤0 in defensive third, veto. Need verify by rerun with multiple seeds and bootstrap CI.

Maybe another scenario: policy leakage: Re-train policy with group split by match/season; if 82% accuracy drops to no-skill, veto. But need 3. Could include as third instead of clearance. But cross-layer wants physical; RLVR can include policy. Need 3 verifiable. Let's include:
- S1 orientation/sign replication.
- S2 pressure prevalence and misclassification.
- S3 distribution shift (clearance length/throw-in time) with weather/fatigue slices.
Predictions.

Need include "multi-week traps" in genealogy: traps that emerge over multi-week model development: repeated hyperparameter tuning on same validation set; using xG labels from same provider; ignoring season drift; policy trained on 2022/23 and tested 2023/24; treating simulation as data; not pre-registering pressure fraction; orientation sign. Good.

Need maybe mention "Reep's early work ... mistaken conclusion" cite page 16. Quote: "Charles Reep’s early work in soccer analytics (20) found that most goals were scored following fewer than five passes, leading to the (mistaken (21)) conclusion that direct play should be favored over possession-based styles." [PAGE 16]. Good.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need explain:
- Crisis habit regression: under pressure, player/team reverts to low-complexity clearance; paper's "BOOT IT" is rational in defensive third if pressure high; but habit can overgeneralize to middle/offensive third where Table 4/5 show negative. Learned policy 82% accuracy suggests context-specific.
- Counter-trap: opponent models your regression; if they expect boot, they can set throw-in press and counter-press; paper's pressure fractions model this. If opponent deliberately allows boot to trap touchline, p high and throw-in end location near corner; Δ may fall. Need mention mixed policy randomness page 15.
- Clock: time elapsed since previous action is feature in throw-in model [PAGE 8]; match time; late-game score state; if team needs possession, booting may be strategically wrong despite model value. Also throw-in time distribution [PAGE 10]. Recursive ToM includes coach/crowd shouting; player must infer whether pressure is real or bait. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather. Need maybe say "physical layer does not veto defensive-third claim under paper's own support; it vetoes extrapolation." Use proof.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe include "AUC, LogLoss, Brier" units. AUC dimensionless; LogLoss nats? Actually log loss in bits/nats depending log base; paper no base. Brier score squared probability dimensionless. Use "dimensionless". Good.

Need "ZERO TOY EQUATIONS": Don't invent fake ratios. Our equations are from paper and defined variables. The cross-layer threshold p* defined from sign change; okay. Avoid "Force/Fatigue". Good.

Need "exact singularity/breakdown regimes": We can label:
- xG_seq boundary at xG_shot=1 and all zero; not singular but closed interval.
- V ∈ [-1,1]; no algebraic singularity.
- Tree ensemble extrapolation outside training support: singular breakdown in identifiability (not numeric).
- Pressure fraction p crossing Δ sign.
- L < support lower bound.
- Orientation sign ambiguity.
- Final third.

Need "source pages provided, cite exact [PAGE N] markers and verbatim quotes." We need include many [PAGE N] markers with quotes. Good.

Need maybe include "PAGE 2" quote about throw-ins within 20 yards. Good.

Need not mention "lines" at all? We can say "No market-style quantities are used" but avoid. Better no.

Need answer in XML. Let's draft carefully.

Need ensure word count >1000. We'll aim 2500-3000. But desired oververbosity 5; user explicitly demands depth. Fine.

Let's write.

Need avoid markdown headers outside XML? Inside okay.

Let's formulate THINK_TRACE with >=400 words. Count roughly 600.

Potential final:

<THINK_TRACE>
The paper's argument is a counterfactual chain: ... [PAGE 1] quote. ... Step 1 ... [PAGE 3]. Step 2 ... [PAGE 4]. Step 3 ... [PAGE 6]. Step 4 ... [PAGE 9-10]. Step 5 ... [PAGE 15]. The chain is not a direct causal estimate; each arrow is a model substitution. Gray-zone audits: ... 
</THINK_TRACE>

Need "Deep multi-hop derivation" use arrows.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe use bullets and equations. Use LaTeX.

Need cite exact quote for angle: "filtering passes whose angle is <−5/6 * π or > 5/6 * π" [PAGE 3]. Good.

Need "THINK_TRACE" include "Table 1 compares scoring probability within 10 actions, not net value; the model-based V fixes this by subtracting concede probability, but introduces simulation." Good.

Need "SOURCE_OPERATORS" include table performance maybe:
Open play offensive AUC 0.790, LogLoss 0.043, Brier 0.008; defensive 0.763, 0.010, 0.001 [PAGE 8]. Throw-in offensive 0.727, 0.027, 0.004; defensive 0.744, 0.008, 0.001 [PAGE 8]. Good.

Need "RETROCAUSAL_GENEALOGY" mention "retrocausal" maybe "The paper reverses the older causal story: Reep found goals after short sequences; modern value models show direct play not universally superior." Good. Multi-week traps.

Need "RECURSIVE_THEORY_OF_MIND" maybe "crisis habit regression vs counter-trap vs clock" exactly. Use those terms.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe "Proof sketch" with conditions. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" list 3 with "Veto predicate" and "Prediction." Good.

Need no betting. Fine.

Let's produce final. Ensure XML sections exact. Use tags. Use no extra preamble.

Need maybe include "PAGE 12" quote "on average, the difference in possession value over the full season is around 1.08 (i.e., booting results in a bigger reward)." Good.

Need quote "The ensemble policy achieves 82% accuracy on the test season (2023/24 Serie A)." [PAGE 15]. Good.

Need quote "possibly with some randomness for game-theoretic reasons" [PAGE 15]. Good.

Need quote "defensive third it remains clearly advantageous even if the team is only able to apply pressure in one out of two throw-ins" [PAGE 14]. Good.

Need quote "better alternative in a team’s defensive third of the pitch, and a valid option when the ball is in the middle third" [PAGE 17]. Good.

Need maybe quote "possession is more likely to be lost than retained for throw-ins taken within 20 yards (18m) of a team’s own goal" [PAGE 2]. Good.

Need "verbatim" exact punctuation maybe OCR weird. Use as close.

Need maybe "opponent throw-in in the last bin of the pitch (0.34%) is higher than ... defensive bins (0.18%, 0.20%)" [PAGE 4]. Good.

Need "not entirely radical idea" quote maybe page 1. Good.

Need "No previous work has considered the option of intentionally giving up possession" [PAGE 16]. Good.

Need "single, specific match phase" [PAGE 17]. Good.

Need "The only difference is that a clearance of the same length to the further touchline would result in an end location that is slightly further from the opponent’s goal." [PAGE 10-11] maybe not needed.

Need "The distribution includes all observed throw-ins... closer than ten meters" [PAGE 10]. Good.

Need "we extract goal kicks longer than 40 meters" [PAGE 9]. Good.

Need "time since previous action" [PAGE 8]. Good.

Need "under_pressure" definition [PAGE 3]. Good.

Need "passes with an angle ..." [PAGE 3]. Good.

Need "V" [PAGE 6]. Good.

Need "xGseq" [PAGE 6]. Good.

Need "AUC" [PAGE 8]. Good.

Need "Table 4" [PAGE 14]. Good.

Need "Table 5" [PAGE 15]. Good.

Need "Figure 7" [PAGE 12-13]. Good.

Need "Figure 8" [PAGE 13-14]. Good.

Need maybe "six bins according to x-location" [PAGE 13]. Good.

Need "top ten Serie A teams" [PAGE 11-12]. Good.

Need "504,962 passes ... 21,851 throw-ins" [PAGE 3-4]. Good.

Need "1,466,942 passes ... 63,414 throw-ins" [PAGE 3]. Good.

Need "31,300 pressured" [PAGE 3]. Good.

Need "20% validation" [PAGE 3]. Good.

Need "grid search max tree depth in {3,5,7}, learning rate in {1e−2,0.1,0.3}, estimators {50,100,200}" [PAGE 6]. Good.

Need "early stopping patience 10" [PAGE 6]. Good.

Need "SPADL twelve attributes" [PAGE 2]. Good.

Need "360 snapshots" [PAGE 2]. Good.

Need "StatsBomb 360" [PAGE 2]. Good.

Need "training data competitions" [PAGE 3]. Good.

Need "Serie A test seasons" [PAGE 4]. Good.

Need "meaning of "boot it" historical" [PAGE 1]. Good.

Need "counter-pressing" [PAGE 1]. Good.

Need "throw-in in corner worth more than established possession center" [PAGE 1]. Could quote? "The underlying belief is that an opponent throw-in in the corner of the pitch is worth more than established possession in the center of the pitch." [PAGE 1]. Good.

Need "three reasons" [PAGE 2]. Good.

Need "simple analysis ... coarse-grained bins" [PAGE 2]. Good.

Need "model-based ... richer contextual information" [PAGE 2]. Good.

Need "counterfactual action choice" [PAGE 2]. Good.

Need "simulated clearance+throw-ins" [PAGE 8]. Good.

Need "hard to make opposite analysis" [PAGE 8-9]. Good.

Need "often clearances are not a choice, but a necessity" [PAGE 9]. Good quote.

Need "goalkeeper goal kicks proxy" [PAGE 9]. Good.

Need "throw-in always pressured basic setting" [PAGE 10]. Good.

Need "50% and 75%" [PAGE 10]. Good.

Need "closest touchline simplification" [PAGE 10]. Good.

Need "y-location weight is null" [PAGE 10-11]. Good.

Need "Figure 5 Inter Milan-AC Milan" [PAGE 11]. Good.

Need "distributions values rare >0.01" [PAGE 12]. Good.

Need "expected points" [PAGE 12-13]. Good.

Need "top ten teams... defensive third" [PAGE 12]. Good.

Need "learned policy improves all three zones" [PAGE 15]. Good.

Need "policy almost always chooses pass offensive third" [PAGE 15]. Good.

Need "future work limitations" [PAGE 17]. Good.

Need "throw-in model could use player locations" [PAGE 17]. Good.

Need "single sample from training distributions" [PAGE 17]. Good.

Need "limitations contextual information" [PAGE 17]. Good.

Need "Markov decision processes struggle sparse data" [PAGE 16-17]. Good.

Need "previous work focused single match phase" [PAGE 17]. Good.

Need "our work compares effectiveness of different match phases" [PAGE 17]. Good.

Need "Reep mistaken conclusion" [PAGE 16]. Good.

Need "Palacios-Huerta minimax" maybe page 19 reference not needed. "mixed policy randomness for game-theoretic reasons" [PAGE 15] enough.

Need "CROSS_LAYER" weather not in paper. Need explicitly say "Weather is not a modeled layer in the source; it is an external veto test." Good.

Need "RLVR" maybe "Verifiable reward" not source. Good.

Now final. Ensure not too verbose? Need enough. Let's write polished.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s argument is a multi-hop counterfactual chain, not a direct causal experiment. The motivating claim is historical and tactical: “A player wins possession deep in their own half, and immediately, shouts echo from the sideline: ‘BOOT IT!’” [PAGE 1], yet modern soccer increasingly asks teams to “patiently build up play from deep within their own half or even from within their defensive box” [PAGE 1]. The paper asks whether giving up possession by kicking the ball out near the opponent’s goal can be better than a backward pass. The first hop is descriptive: backward passes are identified by an angular criterion, “filtering passes whose angle is <−5/6 * π or > 5/6 * π” [PAGE 3]. The second hop is probabilistic: goals are counted “within 10 actions” after a backward pass or a pressured opponent throw-in [PAGE 4]. Table 1 then compares scoring probabilities by 21 m bins, with the last-bin opponent-throw-in probability reported as “0.34%” versus defensive-bin backward-pass probabilities of “0.18%, 0.20%” [PAGE 4]. That is an apples-to-oranges first pass because it compares scoring probability, not net expected goal difference, and because it ignores the probability of conceding. The third hop repairs this with a state-value model: \(V(S_i)=P_{\text{score}}^k(S_i,t)-P_{\text{concede}}^k(S_i,t)\) [PAGE 6]. The fourth hop simulates the unobserved counterfactual: from an observed backward-pass snapshot, generate a clearance out of bounds, then a throw-in, using goal-kick lengths longer than 40 m as the clearance-length proxy [PAGE 9] and historical throw-in times/end locations [PAGE 10]. The fifth hop trains a policy on rated 2022/23 Serie A backward passes and simulated throw-ins and reports “82% accuracy on the test season (2023/24 Serie A)” [PAGE 15]. The sixth hop aggregates season-level possession value and finds that in the defensive third booting is advantageous: “on average, the difference in possession value over the full season is around 1.08 (i.e., booting results in a bigger reward)” [PAGE 12].

The gray-zone audit has several layers. First, the counterfactual is simulated, not observed; the authors themselves note that “often clearances are not a choice, but a necessity” [PAGE 9]. That creates selection bias: observed backward passes are a selected subset of all possible on-ball states. Second, the clearance-length distribution is borrowed from goal kicks, not deliberate touchline clearances, because “defining what constitutes a deliberate kick out of bounds is challenging” [PAGE 9]. Third, the basic simulation assumes “the simulated throw-in is always pressured” [PAGE 10], then relaxes this to 50% and 75% [PAGE 10]. This matters because Table 4 shows the sign of the advantage is pressure-dependent: the defensive third remains positive at 50% pressure, while the middle third is negative at 75% and positive only at 100% [PAGE 14]. Fourth, the throw-in model has a limited feature set: start/end location, match time, time since previous action, and a pressure Boolean [PAGE 8]; future work explicitly notes that player locations at the throw-in could improve it [PAGE 17]. Fifth, the sign convention for valuing an opponent’s throw-in is not fully spelled out in the excerpt: the general value equation is defined for “team \(t\) that possesses the ball” [PAGE 6], but the booting team does not possess after the simulated clearance. A reproducible implementation must explicitly orient \(V_{\text{boot}}\) as either the negative of the opponent’s throw-in value or the defending team’s throw-in value. Sixth, the model uses xG-sequence labels \(xG_{\text{seq}}=1-\prod_{\text{shot}\in\text{seq}}(1-xG_{\text{shot}})\) [PAGE 6], which is a probability-of-at-least-one-goal transformation and relies on the provider’s xG semantics; it is bounded but not a direct goal-count causal estimator. Seventh, the final-third regime is a clear breakdown zone: Figure 8 and Table 4/5 show booting is strongly negative in the offensive third, so the policy must not extrapolate the defensive-third result upfield. Eighth, the learned policy’s 82% accuracy is accuracy against model-generated labels, not against realized goals; it is a model-consistency metric, not proof of causal superiority. Ninth, the paper’s own conclusion is conditional: booting “appears to be the better alternative in a team’s defensive third of the pitch, and a valid option when the ball is in the middle third” [PAGE 17]. The audit therefore supports a conditional, context-dependent claim—not a universal “always boot” rule.

<SOURCE_OPERATORS_AND_EQUATIONS>
**Formal operators, units, assumptions, and breakdown regimes.**

1. **Backward-pass operator.** Let a pass have start \((x_s,y_s)\) and end \((x_e,y_e)\) in meters on a 105 m × 68 m pitch coordinate frame. Define the pass angle \(\theta=\operatorname{atan2}(y_e-y_s,x_e-x_s)\) in radians. The paper classifies a pass as backward if “\(\theta<-5\pi/6\) or \(\theta>5\pi/6\)” [PAGE 3]. Units: radians; coordinates in meters. Assumption: the angular sector is a sufficient proxy for “no clear opportunity to launch a direct attack” [PAGE 2-3]. Breakdown: the operator is purely geometric and ignores pressure, body orientation, receiver openness, and score state; it can misclassify lateral-looking passes that are tactically backward.

2. **State value.** For state \(S_i\), possessing team \(t\), and horizon \(k\) actions:
\[
V(S_i)=P_{\text{score}}^k(S_i,t)-P_{\text{concede}}^k(S_i,t).
\]
Both \(P_{\text{score}}^k\) and \(P_{\text{concede}}^k\) are dimensionless probabilities in \([0,1]\); \(V\) is dimensionless and lies in \([-1,1]\). \(k\) is an integer action count; the paper uses “the next few actions” and “next \(k\) actions” [PAGE 6]. Assumption: near-term scoring/conceding probabilities are adequate proxies for action value. Breakdown: no algebraic singularity exists, but tree-ensemble extrapolation outside the training support is an identifiability breakdown; \(V\) is not a full long-horizon win-probability.

3. **xG-sequence label.** For a sequence of shots:
\[
xG_{\text{seq}}=1-\prod_{\text{shot}\in\text{seq}}\left(1-xG_{\text{shot}}\right).
\]
Units: dimensionless probability. Boundary regimes: if any \(xG_{\text{shot}}=1\), then \(xG_{\text{seq}}=1\); if all \(xG_{\text{shot}}=0\), then \(xG_{\text{seq}}=0\). The expression is a probability-of-at-least-one-goal transform; it assumes the product form is an acceptable combination rule for the provider’s xG values. Breakdown: dependence among shots, xG provider drift, and very rare shot sequences can bias the label.

4. **Throw-in pressure indicator.** Define \(B_{\text{pressure}}\in\{0,1\}\). The paper classifies a throw-in as pressured if “(1) the ball is stolen immediately after the throw-in or (2) the team keeps possession, but the first or second pass after the throw-in is labeled ‘under_pressure’” [PAGE 3]. Units: Boolean. Assumption: StatsBomb’s `under_pressure` attribute captures applied pressure. Breakdown: pressure is provider-annotated and can be inconsistent across matches; the exception for a first long ball [PAGE 3] changes the operational definition.

5. **Counterfactual boot value.** Let \(V_{\text{pass}}(S_i)\) be the observed backward-pass state value and \(V_{\text{boot}}(S_i)\) the simulated clearance-plus-throw-in value. The comparison is
\[
\Delta(S_i)=V_{\text{boot}}(S_i)-V_{\text{pass}}(S_i).
\]
Units: dimensionless probability difference; season aggregates are sums of such differences. A positive \(\Delta\) means booting is better under the model. Breakdown: \(\Delta\) is only defined inside the simulation support. If the simulated throw-in start/end, clearance length, pressure fraction, or throw-in time falls outside the learned distribution, \(\Delta\) is extrapolation.

6. **Simulation operators.** Clearance length \(L_{\text{clear}}\) is sampled from goal kicks longer than 40 m: “we extract goal kicks longer than 40 meters … and use their distribution as a proxy for the length of the simulated clearances” [PAGE 9]. Units: meters. Throw-in time \(T_{\text{throw}}\) is sampled from the historical distribution of “time elapsed since the previous action” [PAGE 8, PAGE 10]. Units: seconds/event-stream time units. Throw-in end location is sampled from historical throw-ins “close enough to the current one (10 meters tolerance)” [PAGE 10]. Units: meters. Breakdown: goal kicks are not deliberate touchline clearances; a single sample ignores joint uncertainty; weather, fatigue, and pitch state are not modeled.

7. **Model performance.** Open-play offensive/defensive state-value models report AUC 0.790/0.763, LogLoss 0.043/0.010, Brier 0.008/0.001; throw-in offensive/defensive models report AUC 0.727/0.744, LogLoss 0.027/0.008, Brier 0.004/0.001 [PAGE 8]. AUC is dimensionless; LogLoss and Brier are dimensionless scoring metrics. Assumption: xG labels give a stronger learning signal than rare goals [PAGE 6]. Breakdown: high AUC on xG labels does not guarantee correct counterfactual ranking.

8. **Policy.** The learned XGBoost policy predicts which option receives a higher rating and achieves “82% accuracy on the test season (2023/24 Serie A)” [PAGE 15]. The paper explicitly allows “some randomness for game-theoretic reasons” [PAGE 15]. Breakdown: the policy is trained on model-generated ratings from 2022/23 and evaluated on 2023/24; distribution shift, label leakage, and overfitting to simulation artifacts can inflate accuracy.

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is a reversal of an older analytical story. Charles Reep’s early work “found that most goals were scored following fewer than five passes, leading to the (mistaken) conclusion that direct play should be favored over possession-based styles” [PAGE 16]. The modern possession-value lineage—VAEP [PAGE 7, PAGE 18], StatsBomb OBV, Goals Added, un-xPass [PAGE 18], and Markov/decision-process frameworks [PAGE 16-17]—replaced event counts with state valuations. The “boot it” paper is retrocausal in the sense that it takes an older sideline instinct and re-tests it with modern counterfactual machinery: it does not argue for direct play universally; it argues that a clearance out of bounds can be rational in the defensive third because the alternative backward pass may be more dangerous. The paper contrasts its approach with prior throw-in work that looked only at throw-ins “from an offensive standpoint” and states that “no previous work has considered the option of intentionally giving up possession” [PAGE 16]. It also distinguishes itself from single-phase studies: “Uniquely, our work compares the effectiveness of different match phases (i.e., open play vs. throw-ins), while previous work has focused on a single, specific match phase” [PAGE 17].

Multi-week research traps are visible throughout this genealogy. A first trap is **frequency-to-causality substitution**: observing that goals follow short sequences does not prove short sequences cause goals; Reep’s “mistaken” inference is the canonical warning [PAGE 16]. A second trap is **selection on observed passes**: the paper can only rate executed backward passes and simulate boots; it cannot symmetrically simulate backward passes from observed boots because “often clearances are not a choice, but a necessity” [PAGE 9]. A third trap is **proxy drift**: goal-kick lengths are used as a proxy for clearances [PAGE 9], and throw-in end locations are sampled within 10 m [PAGE 10]; over multiple weeks of model iteration, it is easy to tune on the proxy rather than on the tactical action. A fourth trap is **pressure operationalization**: the `under_pressure` definition [PAGE 3] and the 50%/75%/100% pressure scenarios [PAGE 10, PAGE 14] are modeling choices, not measured truth. A fifth trap is **season leakage**: the policy is trained on 2022/23 ratings and tested on 2023/24 [PAGE 15]; repeated feature engineering without match-level or season-level separation can inflate the 82% figure. A sixth trap is **xG-label circularity**: the state-value models are trained on StatsBomb xG [PAGE 6], so the counterfactual ranking inherits the provider’s shot-value assumptions.

<RECURSIVE_THEORY_OF_MIND>
The tactical decision is a recursive game among player, coach, crowd, and opponent. **Crisis habit regression** is the sideline shout “BOOT IT!” [PAGE 1]: under perceived pressure, the player regresses to a low-complexity clearance. The paper gives that habit a conditional rational basis in the defensive third, where “booting” is advantageous even at 50% pressure [PAGE 14], but it also shows the habit is irrational in the offensive third, where the difference is strongly negative [PAGE 14]. The recursive problem is that the player must infer whether the pressure is real or bait. **Counter-trap** logic: if the opponent expects regression to the boot, they can set a throw-in press and counter-press; the paper models this with the pressure fraction and finds that “as the defending team struggles to consistently apply pressure, the ‘booting’ option loses some value” [PAGE 14]. The opponent’s best response is not to stop the clearance but to make the subsequent throw-in contested. The **clock** layer enters through match time and “time elapsed since the previous action” as throw-in features [PAGE 8], and through the throw-in time distribution [PAGE 10]. A late-game team that needs possession may rationally reject a positive defensive-third \(\Delta\) because the clock value of retaining the ball differs from the model’s near-term xG value. The paper’s learned policy partially resolves this recursion by choosing contextually and by allowing “some randomness for game-theoretic reasons” [PAGE 15]. The recursive theory of mind therefore predicts: booting is most defensible when the player believes the opponent will apply immediate throw-in pressure, when the clock does not demand possession, and when the alternative backward pass is in a dangerous defensive zone; it is least defensible when the opponent is baiting a touchline trap or when the team is in the offensive third.

<CROSS_LAYER_VETO_ADJUDICATION>
The physical/biomechanical/weather layers are not modeled in the source, so they must be treated as external veto tests. The source’s physical support is the goal-kick length distribution: “we extract goal kicks longer than 40 meters (assuming shorter kicks are not at full power or aim for a specific teammate), and use their distribution as a proxy for the length of the simulated clearances” [PAGE 9]. A biomechanical veto occurs if the player cannot reliably produce a clearance inside that support—e.g., if fatigue, injury, weak foot, or a wet/heavy ball shifts \(L_{\text{clear}}\) below the lower bound of the >40 m goal-kick distribution. In that regime the simulated throw-in starts closer to the booting team’s own goal, and the throw-in value model is extrapolating. A weather veto occurs if wind, rain, snow, or pitch surface changes either the clearance length distribution or the throw-in time/end-location distribution; the source samples throw-in time from historical data [PAGE 10] and end location within 10 m [PAGE 10], so a weather-induced shift outside those supports invalidates the counterfactual. A physical throw-in veto occurs if the opponent can take the throw-in quickly, before the pressing team regains shape; the paper’s own pressure scenarios show that the advantage is pressure-sensitive [PAGE 14]. The cross-layer adjudication is therefore: the defensive-third claim is not vetoed by the paper’s own physical support at 50% pressure—the source reports it “remains clearly advantageous even if the team is only able to apply pressure in one out of two throw-ins” [PAGE 14]—but it is vetoed for extrapolation outside the goal-kick length support, outside the throw-in time/end-location support, or when the actual pressure probability falls below the sign-change threshold. The middle third is in a gray zone: it is negative at 75% pressure and positive at 100% [PAGE 14], so weather or fatigue that lowers pressure can flip the sign. The offensive third is already vetoed by the model: booting is strongly negative there [PAGE 14], and the learned policy “almost always chooses to pass” [PAGE 15]. Thus the physical/weather layer does not refute the paper’s conditional claim; it narrows the conditions under which the claim is identifiable.

<RLVR_COUNTERFACTUAL_VETOES>
**RLVR-style verifiable counterfactual veto tests.** Each test has a pre-registered observable, a rerun, and a pass/fail predicate.

1. **Sign-orientation replication veto.** Observable: the explicit orientation of the throw-in value model. Rerun the defensive-third aggregation with \(V_{\text{boot}}\) defined unambiguously as the booting team’s value after conceding the throw-in, using the general equation’s convention that \(V\) is for “team \(t\) that possesses the ball” [PAGE 6]. Veto predicate: if the correctly oriented defensive-third \(\Delta\) at 100% pressure is \(\le 0\), the paper’s positive booting result is an orientation artifact. Prediction: because the paper reports a positive defensive-third advantage [PAGE 12, PAGE 14], a sign-consistent rerun should remain positive at 100% pressure; if it does not, the claim fails.

2. **Pressure-prevalence and misclassification veto.** Observable: measured throw-in pressure prevalence in held-out 2023/24 Serie A, using the paper’s `under_pressure` definition [PAGE 3]. Rerun the season aggregation with the empirical pressure probability instead of 100%, 75%, and 50%. Veto predicate: if the defensive-third \(\Delta\) falls to \(\le 0\) at the measured pressure prevalence, the defensive-third recommendation is not supported outside the paper’s high-pressure assumption. Prediction: Table 4 implies the defensive third is still positive at 50% pressure (+0.73) [PAGE 14], so a measured prevalence near or above 50% should preserve a positive sign; a measured prevalence well below 50% is the main veto risk. The middle third is more fragile: it is −0.38 at 75% and +0.13 at 100% [PAGE 14], so any downward pressure shift should flip it negative.

3. **Clearance-length and throw-in-time distribution-shift veto.** Observable: actual clearance lengths for deliberate out-of-bounds clearances and actual throw-in times under weather/fatigue conditions. Rerun the simulation with empirical distributions rather than goal kicks >40 m [PAGE 9] and historical throw-in times [PAGE 10]. Veto predicate: if the defensive-third \(\Delta\) becomes \(\le 0\) when the clearance-length distribution is left-shifted or when throw-in time is extended beyond the training support, the recommendation is not robust to the physical layer. Prediction: left-shifting clearance length moves the throw-in start away from the opponent’s goal and should reduce \(\Delta\); the paper’s positive defensive-third result should survive mild shifts but fail under large shifts that push the throw-in outside the 10 m end-location tolerance [PAGE 10]. A multi-seed bootstrap should report the fraction of seeds with \(\Delta>0\); if that fraction is not clearly above 0.5 in the defensive third, the claim is vetoed.