---
source: "2023 - Learning Contextual Event Embeddings to Predict Player Performance in the MLB - Heaton et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2023"
pages: 14
model: deepseek/deepseek-v4.1-flash-1017
words: 7705
---

<NATIVE_REASONING>
We need answer to user. Need produce GSE + GSI Frontier Reasoning Foundry with strict invariants. Need use source pages exact citations and verbatim quotes. Need >=1000 words across exact XML sections. Need zero betting lines: never mention spreads, totals, moneylines, odds. But source has betting lines/sportsbooks. We can discuss sportsbook predictions? Invariant says never mention spreads, totals, moneylines, or odds. We can mention sportsbook performance prediction? Need avoid "betting lines" phrase maybe? Source quote includes "betting lines" but invariant zero betting lines. We must not mention betting lines. We can cite source without that phrase? But need verbatim quotes exact. Could quote other passages. Avoid odds. We can mention "sportsbook projections" not betting lines? That's likely okay. Need not mention line, odds. Avoid "line" maybe? "line" can be betting line. Avoid. We can discuss predictions.

Need include exact XML sections:
<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit.
<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need ensure total >=1000 words. Can be ~2500. Need cite exact [PAGE N] markers and verbatim quotes. Need quote exact from pages. Need formal equations from pages: BABIP Eq1, FPCT Eq2, ERA Eq3, SLG Eq4, OBP Eq5, OPS Eq6, WAR Eq7, linear weights Eq8/9. Also transformer/MLM/MGM? Equations? We can formalize MGM masking probability 15%, attention. Need units: ratios dimensionless, ERA units runs per 9 innings (9 innings), WAR runs. MSE units squared target counts, MAE counts, R2 dimensionless. Need mention singularity/breakdown regimes:
- BABIP denominator AB-HR-K+SF could be zero, undefined/infinite; no PAs no rate. FPCT denominator zero with no fielding chances; ERA IP zero causes division by zero; SLG denominator AB zero; OBP denominator AB+BB+HBP+SF zero; WAR RunsPerWin zero singular; linear weights collinearity/underdetermined if events linearly dependent, N events and rank < N. MGM masking 15% leaves non-random? If all sequence masked or too few context; player embeddings only attend involved events -> if no events, embedding unidentifiable. Fine-tune target strikeouts/hits/walks counts. Need breakdown regimes: rookies/no MLB starts -> no embedding; batters fewer than 10 games; new pitcher no prior starts; sparse context. Also sportsbook comparison limited due different has-hit formulation: batter vs starting pitcher vs full game.

Need retrocausal genealogy: bag-of-words Harris 1954, BERT Devlin 2018, Transformer Vaswani 2017, GPT Brown 2020, ViT Dosovitskiy 2020, action valuation hockey/soccer Liu Schulte. Need multi-week traps: treating counts as complete, static embeddings, leakage from future, context window too short, comparing incomparable has-hit definitions, sample selection from sportsbook only confident predictions, R2 low for batter, new players. Need cite pages.

Need recursive theory of mind: crisis habit regression vs counter-trap vs clock. Interpret: under pressure, model/team regression to counting statistics; counter-trap: overfitting context and ignoring base rates; clock: temporal horizon (10 games vs career). Need discuss player/team staff/sportsbook modeler beliefs. Need avoid betting lines. Can mention sportsbooks, prediction markets? Avoid odds. We can use "sportsbook projections" because source. Is that a betting line? Not necessarily. But "sportsbook" is betting industry. Invariant says never mention spreads, totals, moneylines, or odds. It doesn't prohibit sportsbooks. But to be safe, avoid "betting" terms. Use "commercial projection providers" when possible, but cite source says sportsbooks. We can quote "major sportsbooks" maybe. The invariant only forbids lines/odds. We can say "commercial sportsbooks" as source category. Fine.

Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need connect to paper: Statcast includes pitch speed, rotation, location, exit velocity, launch angle, distance [PAGE 7]. Weather not in dataset; wind/rain/temperature could alter pitch grip, ball flight, launch angle distance; biomechanical: pitcher fatigue, injury, batter swing changes, catcher framing? Need veto: if physical state changes breaks stationary embedding assumption; if injury/fatigue not encoded; weather missing; then predictions vetoed. Need proof: source says "we include data collected by Statcast which contains descriptions of pitch speed, rotation, and location as well as batted ball exit velocity, launch angle, and distance" [PAGE 7]. No weather. Player embeddings only based on events. If external physical state changes, embedding may not identify. Need mention as gray-zone.

Need RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need define RLVR? Reinforcement learning with verifiable rewards? We can phrase "RLVR-style counterfactual veto tests" with predictions/checkable outcomes. Need no betting. Scenarios:
1. Remove Statcast physical covariates from input, retrain same architecture; if predictions degrade only marginally then contextual event sequence carries signal; if degrade significantly veto claim Statcast context essential. Prediction: pitcher strikeout MAE increases >0.10? Need verifiable. Based Table 2 MAE 1.85. Could predict MAE worsens by at least 0.05? Need careful. 
2. Ablate player embeddings attention mask (allow all events) during MGM; measure embedding separability and prediction. Prediction: R2 batter has-hit drops? 
3. Context window truncation from 10 to 1 game; predictions degrade for pitchers more? Actually batters have fewer effective contexts, so 10 to 1 may affect. Need scenario for rookie/no-start: hold out pitchers with no prior MLB start; model cannot embed, so prediction equals prior mean; MAE near baseline. Prediction: MAE for debut pitchers > overall MAE by >0.5 strikeouts? Need verifiable.
4. Swap labels for singles etc? 
Need include predictions and thresholds.

Need exact citations and quotes. Let's collect exact quotes:
PAGE 1: "we train a representation learning model to understand the game of baseball as a sequence of events, and leverage this understanding towards predicting player performance." and "Trained on only 6 years of data and based on only 10 games worth of play-by-play data..."
PAGE 2: "We view the sports analytics community as currently in the bag-of-events era and offer a steppingstone for advancing the community into the era of contextual embeddings (Figure 1)."
PAGE 3: "all these statistics are fundamentally obtained by simply counting the number of times different events occur on the field of play, without regard for how they happened." Eq.
PAGE 5: "at the end of the day, the inputs used to compute more advanced sabermetrics such as WAR are simple counting statistics." "Without saying which situation is better, we hypothesize including such context will lead to more useful insights."
PAGE 6: "We employ the transformer architecture in this study" and "each vector in the sequence will correspond to a thrown pitch instead of a word token."? That quote is page 7? Page 6 has "Each layer takes as input a sequence of vectors..." PAGE 7: "Our model will utilize attention in the same manner, but each vector in the sequence will correspond to a thrown pitch instead of a word token." exact.
PAGE 7: "we describe every possible aspect of the event using a combination of sources. The primary way in which each event is described is via a gamestate delta." "we include data collected by Statcast which contains descriptions of pitch speed, rotation, and location as well as batted ball exit velocity, launch angle, and distance." "These sabermetric inputs only account for a very small portion of the description, roughly less than 5% of the numerals in each vector."
PAGE 8: "we randomly mask 15% of the vectors in the sequence, asking the model to predict the missing gamestate and event." "manipulate the attention mask such that the player embeddings can only tend to events in the sequence in which the corresponding player was involved."
PAGE 9: Table 2 numbers. "Although our model is not the best model on any metric presented, it is certainly competitive."? PAGE 10. Table 3 numbers.
PAGE 10: "Our model makes predictions based only on 10 games of in-game events from games played in the MLB, trained on only six years of data." "If a batter did not start in any of their team’s 10 most-recent games, then our model is unable to derive an embedding of their performance." "if a starting pitcher hasn’t previously made a start in the MLB, then our model will have nothing to base its predictions on for that pitcher."
PAGE 11: "A potential option would be to include more games of context..." "When a player makes their first start in the MLB, there are no records of in-game events in the MLB in which said player participated – no amount of context will include a description of said player."
PAGE 12: "the model naturally identifies strikeouts recorded in high leverage situations without any guidance to do so." "leverage" definition. Quote.
PAGE 13: "Our model can make single-game pitcher strikeout and binary batter has-hit predictions that are competitive with three major sportsbooks in the US, all while in a much more restrictive setting."
Need cite page markers exact.

Need equations in LaTeX. Let's formulate source equations exactly with variables and units. Need maybe formalize MGM:
Let event vector x_t = [g_t; p_t; e_t; s_t; u_t], where g_t gamestate delta, p_t pitch type, e_t event type, s_t Statcast, u_t sabermetrics. Model f_theta outputs h_t. MGM: choose mask M subset {1..T} with |M|=0.15T; loss L_MGM = sum_{t in M} [CE(g_t, \hat g_t)+CE(e_t,\hat e_t)] maybe. Units nats? Cross-entropy in nats (natural units) if natural log. But source doesn't specify loss. We can state formal and note not in source. Need not invent? Invariant says no toy equations; formal equations with units assumptions. We can present derived formalizations clearly labeled "derived formalization, not a source equation". That's okay.

Need mention "source operators" maybe from paper. We can list equations 1-9. Need not overdo.

Need word count. Let's outline:

Start XML tags exactly. No markdown? We can include XML sections. Need ensure no "odds" etc. Avoid "moneyline". Avoid "betting lines". Avoid "spread". Avoid "total". We can use "sportsbook projections" maybe okay. Avoid word "line" alone. In quotes, source says "line" maybe not quote. Avoid quoting "line if confident". We can quote "Our predictions, on the other hand, are made for every starting pitcher in 2021 – 50% more predictions than the next closest sportsbook." This quote doesn't contain line? It says "50% more predictions". Good. The preceding sentence in source has "line if confident" but we can omit.

Need no "odds". Avoid "betting" entirely? The paper abstract says sportsbooks offering betting lines; we don't quote. We can say "commercial sportsbooks" as source entity. Is "sportsbook" okay? It's not odds. Probably. But to be safe, use "commercial projection providers" when not quoting, and quote "three major sportsbooks" exactly if needed. The invariant says zero betting lines, not zero sportsbook. Fine.

Need "GSE + GSI Frontier Reasoning Foundry" maybe not necessary. But include.

Need "RETROCAUSAL_GENEALOGY" historical lineage. "Multi-week traps" maybe explain traps that play out over multi-week evaluation windows: recency bias, stale embeddings, pitcher role changes, injury returns, weather seasons, league adjustments, minor league callups. Need connect to paper's 10-game context. Multi-week traps: If evaluating over multiple weeks, model trained on 10 recent games can drift; early season small samples; injuries; schedule strength; park effects. Source mentions "adjustment for the parks" in Silver/Huffman [PAGE 4]. We can cite.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need define:
- Crisis habit regression: under uncertainty, analyst/team reverts to counting-stat dashboards because they are auditable. The paper says practitioners historically relied on counting statistics [PAGE 1] and sports analytics in bag-of-events era [PAGE 2]. In crisis, habit = discard contextual embedding due low R2 batter (0.04/0.06) and use counting stats. 
- Counter-trap: over-trusting context model, mistaking embedding visualization for causal proof. The paper asks "is it truly contextualizing the game, or uncovering some statistical phenomenon?" [PAGE 11]. Counter-trap is assuming striations prove mechanism. Need calibrate.
- Clock: time horizon mismatch. Pitcher uses 10 starts, batter uses team's 10 recent starting pitchers; if batter didn't start, no embedding [PAGE 10]. The clock is 10-game window vs career/minor-league horizon. Under deadline, decision clock favors model with more predictions (50% more) but fewer contexts? Need mention.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need formal veto conditions:
Let P(y|x) model. Veto if external state z not in x changes P(y|x) beyond calibration. Weather variables: temperature T, wind vector w, humidity, precipitation; physical: pitch velocity v, spin rate omega, release point, exit velocity, launch angle. Source includes some Statcast physical variables but not weather. Biomechanical: fatigue/injury, delivery changes. Veto proof: If z affects y and not included, conditional exchangeability fails: y ⟂ z | x is false. Then model's predictions are not valid under intervention. We can cite Statcast quote [PAGE 7]. No weather variables in source. Need "proof" maybe by contradiction: Suppose model's event embedding is sufficient for player performance; but if same event sequence under different wind yields different home run probability, then two identical x map to different y; model cannot distinguish; so embedding is not sufficient. Therefore predictions are vetoed for conditions outside training distribution. This is formal. Need mention "physical/biomechanical/weather veto proof" exactly.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios. Need make verifiable predictions. Use "RLVR" as "reinforcement learning with verifiable rewards"? Could be "RLVR-style". Need scenarios with measurable thresholds. We can define baseline Table 2/3. Predictions:
1. Ablate Statcast block (pitch speed, rotation, location, exit velocity, launch angle, distance). Retrain/fine-tune same. Prediction: pitcher strikeout MAE increases from 1.85 to ≥1.95, R2 drops from 0.21 to ≤0.15; batter has-hit MAE increases from 0.57 to ≥0.60. If not, veto claim that Statcast context is essential. This is verifiable.
2. Truncate context from 10 games to 1 game. Prediction: pitcher strikeout R2 drops by ≥0.08 absolute; batter has-hit R2 drops by ≥0.03 absolute; and fraction of batters with zero effective context rises above 50%. Source Figure 5 says batter predictions often fewer than 10 games [PAGE 11]. Threshold maybe.
3. Hold out debut pitchers/batters with no prior MLB events. Prediction: model cannot derive embedding; MAE for debut pitchers exceeds overall pitcher strikeout MAE by ≥0.50; for debut batters has-hit MAE ≥0.65. If not, veto the "no context" breakdown claim? Actually source says unable to derive embedding [PAGE 10]. We can predict failure. Need "counterfactual veto" maybe if model still does well due sabermetric inputs? Wait source says sabermetrics <5% of vector; still may use. But no play-by-play events for player; player embeddings attend only involved events; if none, player embedding unidentifiable. But sabermetric inputs? The player embedding is prepended and attends events; sabermetrics are in event vectors, not player? Hmm. Prediction: for players with no prior events, model falls back to league prior. We can test. If MAE not worse, then player embedding not necessary. 
4. Swap has-hit label definition: source distinguishes model predicts hit against starting pitcher vs books predict hit in game [PAGE 10]. Counterfactual: evaluate model on full-game has-hit labels. Prediction: MAE increases? Actually binary has-hit is classification but they report MSE/MAE; full-game has-hit should be easier (more opportunities), so model would improve; but if model trained on vs-starter, transfer may be lower. Could test. But need 3 scenarios. Use 3.

Need include "exact singularity/breakdown regimes" in source equations section. We'll list:
Eq1 BABIP denominator D1=AB-HR-K+SF. If D1=0, undefined; also if D1<0 due data inconsistency. Eq2 FPCT denominator D2=PO+A+E; zero if no chances; ratio in [0,1] if counts nonnegative but can exceed? no. Eq3 ERA denominator IP; IP=0 undefined; IP measured in innings (often thirds). Eq4 SLG denominator AB; AB=0 undefined. Eq5 OBP denominator AB+BB+HBP+SF; zero. Eq6 OPS sum of dimensionless rates. Eq7 WAR denominator RunsPerWin; zero singular; numerator linear combination of runs. Eq8 linear system R = C α; if rank(C)<N, α not identifiable; if events collinear or counts duplicated, infinite solutions. Eq9 player RunsCreated linear. Also MGM: if mask ratio 15% but sequence length T, |M|=round(0.15T); if T small (<7), |M|=0 or 1; no learning. Player attention mask: if player involved in zero events, attention row all -inf; softmax undefined unless masked; embedding unidentifiable. Need mention.

Need "source operators and equations" include exact quotes and equations. Need use LaTeX. Good.

Need maybe cite page markers exactly [PAGE 1] etc. Use within sections.

Need ensure no fake ratios. We can use actual ratios from source. Avoid "Force/Fatigue". Good.

Need word count >=1000. We'll produce ~3000. Desired oververbosity 5. Need concise but deep. Need exact XML sections. No extra section outside? We can include all. Need ensure tags closed. Might include no markdown headers? XML tags are headers.

Need no "betting lines" phrase. Let's monitor. Avoid "odds", "spread", "total", "moneyline", "line". I must not use "line" at all? The invariant says never mention spreads, totals, moneylines, or odds. "line" by itself maybe okay but could refer to betting line. Avoid word "line" to be safe. But "lineup" contains "line"? It contains "line" as substring but not betting line. Could use "starting nine" instead of lineup? "lineup" includes "line" but not betting line. To avoid any risk, use "starting batters" or "batting order". But exact quote "starting lineup" in source? We can avoid quote. "linear" contains "line" as substring. Can't avoid "linear" because equations. The invariant is about betting lines, not substring. Fine. Avoid "line" as standalone. Use "linear-weights method" is okay. Use "sportsbook" quotes? The source quote "three major sportsbooks" okay. Avoid "line if confident". Good.

Need mention "sportsbooks" maybe three times. Fine.

Need "RLVR" maybe define as "reinforcement-learning-with-verifiable-rewards". It's okay. Need no betting.

Let's draft carefully.

Potential issue: The user requested "DRIVE SOURCE" and "PAGES: 14" with source text. We need answer not just summarize. We must follow exact XML. Need include all sections. Need ensure each section has enough words. THINK_TRACE >=400 words. We'll write maybe 600. Other sections total >1000. Good.

Let's produce.

Need formal LaTeX with units. Need page citations and verbatim quotes. We'll quote exact. Need not overquote. Use quotation marks. Ensure exact quote wording matches source. Need check:
- "all these statistics are fundamentally obtained by simply counting the number of times different events occur on the field of play, without regard for how they happened." [PAGE 3] exact yes.
- "at the end of the day, the inputs used to compute more advanced sabermetrics such as WAR are simple counting statistics." [PAGE 5] exact yes.
- "we randomly mask 15% of the vectors in the sequence, asking the model to predict the missing gamestate and event." [PAGE 8] exact yes.
- "the player embeddings can only tend to events in the sequence in which the corresponding player was involved." [PAGE 8] exact yes.
- "we include data collected by Statcast which contains descriptions of pitch speed, rotation, and location as well as batted ball exit velocity, launch angle, and distance." [PAGE 7] exact yes.
- "If a batter did not start in any of their team’s 10 most-recent games, then our model is unable to derive an embedding of their performance." [PAGE 10] exact yes.
- "if a starting pitcher hasn’t previously made a start in the MLB, then our model will have nothing to base its predictions on for that pitcher." [PAGE 10] exact yes.
- "When a player makes their first start in the MLB, there are no records of in-game events in the MLB in which said player participated – no amount of context will include a description of said player." [PAGE 11] exact yes.
- "Our model can make single-game pitcher strikeout and binary batter has-hit predictions that are competitive with three major sportsbooks in the US, all while in a much more restrictive setting." [PAGE 13] exact yes.
- "Our model makes predictions based only on 10 games of in-game events from games played in the MLB, trained on only six years of data." [PAGE 10] exact yes.
- "the model naturally identifies strikeouts recorded in high leverage situations without any guidance to do so." [PAGE 12] exact yes.
- "is it truly contextualizing the game, or uncovering some statistical phenomenon?" [PAGE 11] exact? Source: "Our model is giving quality predictions, but is it truly contextualizing the game, or uncovering some statistical phenomenon?" Yes. We can quote fragment.
- "Each layer takes as input a sequence of vectors and outputs an updated sequence of vectors of the same shape." [PAGE 6] exact.
- "Our model will utilize attention in the same manner, but each vector in the sequence will correspond to a thrown pitch instead of a word token." [PAGE 7] exact.
- "The primary way in which each event is described is via a gamestate delta." [PAGE 7] exact? Source: "The primary way in which each event is described is via a gamestate delta." yes.
- "These sabermetric inputs only account for a very small portion of the description, roughly less than 5% of the numerals in each vector." [PAGE 7] exact.
- "Although our model is not the best model on any metric presented, it is certainly competitive." [PAGE 10] exact.
- "Our predictions, on the other hand, are made for every starting pitcher in 2021 – 50% more predictions than the next closest sportsbook." [PAGE 10] exact. Contains "predictions" and "sportsbook", no odds.
- "A potential option would be to include more games of context – if a batter started N games for their team, describing more of their team’s games will increase the chance said player started in one of the games." [PAGE 11] exact.
- "the inputs used to compute more advanced sabermetrics such as WAR are simple counting statistics." Already.

Need equations. Let's write source equations:
\[
\mathrm{BABIP}=\frac{H-HR}{AB-HR-K+SF}
\]
Eq1 [PAGE 3]. Units: dimensionless rate. Variables counts over period.
\[
\mathrm{FPCT}=\frac{PO+A}{PO+A+E}
\]
Eq2. Use Put Outs maybe PO.
\[
\mathrm{ERA}=9\times \frac{ER}{IP}
\]
Eq3. Units: earned runs per 9 innings; 9 is innings per regulation game. IP often innings (thirds).
\[
\mathrm{SLG}=\frac{1B+2(2B)+3(3B)+4(HR)}{AB}
\]
Eq4. Note source uses 2B×2 etc. Use \mathrm{2B}. 
\[
\mathrm{OBP}=\frac{H+BB+HBP}{AB+BB+HBP+SF}
\]
Eq5. 
\[
\mathrm{OPS}=\mathrm{OBP}+\mathrm{SLG}
\]
Eq6.
WAR:
\[
\mathrm{WAR}=\frac{\mathrm{RunsCreated}+\mathrm{PositionAdjustment}+\mathrm{LeagueAdjustment}+\mathrm{ReplacementAdjustment}}{\mathrm{RunsPerWin}},
\]
where \(\mathrm{RunsCreated}=\mathrm{BattingRuns}+\mathrm{FieldingRuns}+\mathrm{BaserunningRuns}\). Eq7 [PAGE 4].
Linear weights:
\[
RS = \sum_{j=1}^N \alpha_{\mathrm{event}_j} C_{\mathrm{event}_j}
\]
Eq8 [PAGE 4].
\[
\mathrm{RunsCreated}_i = \sum_{j=1}^N \alpha_{\mathrm{event}_j} C_{\mathrm{event}_j,i}
\]
Eq9 [PAGE 4].
MGM formalization:
\[
\mathcal{L}_{\mathrm{MGM}}(\theta)= \sum_{t\in \mathcal{M}} \left[-\log p_\theta(g_t\mid x_{\setminus \mathcal{M}}) -\log p_\theta(e_t\mid x_{\setminus \mathcal{M}})\right],
\quad |\mathcal{M}|=\lfloor 0.15T \rfloor
\]
Cross-entropy units nats if natural logs. Derived from [PAGE 8]. Not source equation. Need label "derived formalization". 
Attention:
\[
\mathrm{Attn}(Q,K,V)=\mathrm{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}+M_{\mathrm{player}}\right)V
\]
Mask \(M_{\mathrm{player},ij}=0\) if event j involves player i, else \(-\infty\). Derived from [PAGE 8]. Units dimensionless. Breakdown: if row all \(-\infty\), softmax undefined; no involved events. 
Predictions: targets K, H, BB counts; MSE units count^2, MAE counts, R2 dimensionless. Table 2 values.

Need singularity/breakdown list. Use "Singularity/breakdown regimes" explicitly. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" formal:
Let x = event sequence/embedding. Let z = weather/biomechanical state. Causal sufficiency requires \(Y \perp Z \mid X\). If not, veto. Use equation:
\[
P(Y\mid do(X=x), do(Z=z)) \neq P(Y\mid do(X=x))
\]
for some z. Units probability. Proof by counterexample: same sequence x under wind w1 vs w2 yields different HR probability; model fθ(x) identical; cannot satisfy both. Thus veto. Need mention source lacks weather variables; includes Statcast physical variables [PAGE 7]. Biomechanical: fatigue, injury, delivery, grip. Weather: temperature, wind, precipitation. Park: source mentions park adjustment in Silver/Huffman [PAGE 4] but model? It doesn't say model includes park. Need mention park as layer. Veto proof: If z not in x and outcome distribution depends on z, no calibration can fix conditional shift. Need "physical/biomechanical/weather veto proof" exactly.

Need "RETROCAUSAL_GENEALOGY" historical lineage:
- Harris 1954 distributional structure bag-of-words [PAGE 2] and [13] [PAGE 14].
- Transformers Vaswani 2017 [PAGE 6] [9].
- BERT MLM Devlin 2018 [PAGE 8] [10].
- GPT Brown 2020 and ViT Dosovitskiy 2020 [PAGE 6] [11,12].
- Action valuation hockey/soccer Liu & Schulte [PAGE 5] [6,7].
- Sabermetrics lineage BABIP etc [PAGE 3], WAR [PAGE 4].
- Retrocausal: the paper retroactively interprets baseball as language; "bag-of-events era" [PAGE 2]. Multi-week traps: evaluate over multiple weeks can confound with weather, schedule, injuries, callups; source 10-game window. 
Need mention "multi-week traps" maybe list:
1. Stale context: 10 games may be <2 weeks for pitchers, batters have fewer; over multi-week horizon embeddings decay.
2. Selection bias in commercial comparison: sportsbooks only publish confident subset; source says 50% more predictions [PAGE 10]. If compare over weeks, sample selection changes.
3. Label-definition drift: has-hit vs starting pitcher vs game [PAGE 10]. Over multi-week test, different labels.
4. Rookie/minor-league missingness [PAGE 11].
5. Weather/park seasonal drift. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe:
- Crisis habit regression: team analyst under losing streak reverts to counting stats; source says historical reliance [PAGE 1] and bag-of-events [PAGE 2].
- Counter-trap: modeler overcorrects and treats embedding visualization as proof; source asks "is it truly contextualizing..." [PAGE 11]. 
- Clock: 10-game window vs career; source says "no amount of context" for debut [PAGE 11]; and "50% more predictions" [PAGE 10]. Decision clock: more predictions but less context. Need calibrate trust. 
Need mention recursive: model of modeler's model: sportsbooks likely not drastically different [PAGE 3]? Source: "we are confident their approaches are not drastically different in kind." [PAGE 3] exact. We can quote. This is theory of mind. Use "sportsbooks are not only concerned with making accurate predictions" [PAGE 10] but that's about other concerns; avoid betting terms. Quote maybe "sportsbooks are not only concerned with making accurate predictions" no odds. Fine.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios. Each with prediction and veto criterion. Need "verifiable" and "counterfactual". Use exact metrics. Need not mention betting. Good.

Need maybe mention "no betting lines" in answer? No. Avoid.

Need ensure answer is valid XML? It will have LaTeX with < characters? Avoid raw < in text? Within XML tags, using `\le` not `<`. Avoid `<` characters in text except tags. Use `\leq`. Avoid `&` maybe use `\&`? In XML, ampersand must be escaped. We can avoid `&` or use "and". But LaTeX equations may contain `&`? Avoid alignment. Use `\top` no &. Avoid `<` and `>`. Use `\leq`, `\geq`. Use `\neq`. Good. Use `%`? Fine. Use `_` okay. Use `\mathcal{M}`. Good.

Need avoid raw `&` in "R&D" no. Use "and". Good.

Need exact quote with apostrophe "team’s" okay. Unicode fine.

Need word count? We can write ~3500. Good.

Let's compose.

Need maybe include a note "All quantitative values from source; derived formalizations labeled". Good.

Let's write THINK_TRACE ~700 words. It must be deep multi-hop derivation and gray-zone audit. Include multihop: counting stats -> bag-of-events -> contextual embedding -> MGM -> fine-tune -> metrics -> comparison -> limitations. Gray-zone: R2 low, batter vs pitcher, sample selection, has-hit definition, no weather, new players. Cite pages. Need >=400. We'll do ~700.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe ~900. "RETROCAUSAL_GENEALOGY" ~500. "RECURSIVE_THEORY_OF_MIND" ~500. "CROSS_LAYER_VETO_ADJUDICATION" ~600. "RLVR_COUNTERFACTUAL_VETOES" ~600. Total >3000. Good.

Need maybe no "betting lines" but source abstract says "sportsbooks offering betting lines" — do not quote. Fine.

Potential issue: "sportsbook" might be considered betting. But invariant only specifies lines/odds. We can say "commercial sportsbook projections" but that's source. Fine.

Need "zero toy equations": our derived MGM and attention equations are formal, not toy. Good.

Need "exact singularity/breakdown regimes" in SOURCE section. Good.

Let's draft final. Ensure all sections present and closed. Use exact tags. Need no markdown? Use XML. Good.

Need maybe use "PAGE" markers exactly [PAGE N]. Good.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central move is a multi-hop analogical transfer: baseball events are treated as language tokens, counting-stat summaries are treated as bag-of-words, and a transformer with masked-event pretraining is treated as a contextual encoder. The first hop is diagnostic: the paper argues that classical baseball metrics are “fundamentally obtained by simply counting the number of times different events occur on the field of play, without regard for how they happened” [PAGE 3]. The second hop is that even advanced sabermetrics inherit this limitation: “at the end of the day, the inputs used to compute more advanced sabermetrics such as WAR are simple counting statistics” [PAGE 5]. The third hop is the proposed remedy: “We view the sports analytics community as currently in the bag-of-events era and offer a steppingstone for advancing the community into the era of contextual embeddings” [PAGE 2]. The fourth hop is architectural: “We employ the transformer architecture in this study” [PAGE 6], and “each vector in the sequence will correspond to a thrown pitch instead of a word token” [PAGE 7]. The fifth hop is training: Masked Gamestate Modeling masks “15% of the vectors in the sequence, asking the model to predict the missing gamestate and event” [PAGE 8], with player embeddings constrained so that “the player embeddings can only tend to events in the sequence in which the corresponding player was involved” [PAGE 8]. The sixth hop is fine-tuning: player embeddings from the previous N games are fed to a new projection layer to predict strikeouts, hits, and walks [PAGE 9]. The seventh hop is evaluation: pitcher strikeout MSE 5.37, MAE 1.85, R2 0.21; batter has-hit MSE 0.42, MAE 0.57, R2 0.04 [PAGE 9]. The eighth hop is external comparison: the authors claim predictions “competitive with three major sportsbooks in the US” while making “50% more predictions than the next closest sportsbook” [PAGE 10] and using “only 10 games of in-game events” and “only six years of data” [PAGE 10].

The gray-zone audit must separate genuine contextual signal from statistical artifacts. First, the batter targets are weak: R2 0.04 for hits and 0.06 for strikeouts [PAGE 9], while pitcher strikeout R2 is 0.21. The paper explains this by exposure: pitchers participate in roughly nine times as many at-bats as a batter in a game, and batters often have far fewer than 10 effective games of context [PAGE 9, PAGE 11]. Second, the has-hit comparison is not apples-to-apples: the model predicts a hit “against a given starting pitcher,” while the sportsbooks predict a hit “in a given game” [PAGE 10], an easier target with more opportunities. Third, commercial comparison is selection-biased: the paper notes that sportsbooks may only publish projections when confident, whereas the model predicts “every starting pitcher in 2021” [PAGE 10]. Fourth, the embedding visualizations are suggestive but not causal proof. The authors themselves ask “is it truly contextualizing the game, or uncovering some statistical phenomenon?” [PAGE 11]. The striations for outs and runner movement in Figures 6 and 7 [PAGE 11, PAGE 12] demonstrate that the representation partitions event types, but they do not by themselves prove that the partition improves out-of-sample prediction. Fifth, the model’s physical covariates are incomplete: Statcast supplies “pitch speed, rotation, and location as well as batted ball exit velocity, launch angle, and distance” [PAGE 7], but the source does not document weather, park, injury, fatigue, or biomechanical delivery variables. Sixth, missingness is structural: “If a batter did not start in any of their team’s 10 most-recent games, then our model is unable to derive an embedding of their performance” [PAGE 10], and “if a starting pitcher hasn’t previously made a start in the MLB, then our model will have nothing to base its predictions on for that pitcher” [PAGE 10]. Seventh, the claim that “no amount of context will include a description of said player” for a debutant [PAGE 11] is true within the paper’s MLB-only event sequence, but not true if minor-league or biographical data are admitted. The gray-zone conclusion is therefore: the paper demonstrates a viable contextual representation and competitive point estimates under a restricted data regime, but it does not establish causal sufficiency, weather robustness, biomechanical invariance, or equal-label comparability.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s classical sabermetric operators are counting-derived ratios. Equation 1 on [PAGE 3] is
\[
\mathrm{BABIP}=\frac{H-HR}{AB-HR-K+SF},
\]
where \(H\) is hits, \(HR\) home runs, \(AB\) at-bats, \(K\) strikeouts, and \(SF\) sacrifice hits over a period. The output is a dimensionless rate. The singularity regime is \(AB-HR-K+SF=0\), where BABIP is undefined; negative or inconsistent denominators also break the rate interpretation. Equation 2 on [PAGE 3] is
\[
\mathrm{FPCT}=\frac{PO+A}{PO+A+E},
\]
where \(PO\) is putouts, \(A\) assists, and \(E\) errors. It is dimensionless and lies in \([0,1]\) for nonnegative counts. The breakdown regime is \(PO+A+E=0\), i.e., no fielding chances. Equation 3 on [PAGE 3] is
\[
\mathrm{ERA}=9\times\frac{ER}{IP},
\]
where \(ER\) is earned runs and \(IP\) innings pitched. The unit is earned runs per nine innings; the factor 9 is innings per regulation game. The singularity is \(IP=0\). Equation 4 on [PAGE 3] is
\[
\mathrm{SLG}=\frac{1B+2(2B)+3(3B)+4(HR)}{AB},
\]
with \(1B,2B,3B,HR\) as singles, doubles, triples, and home runs. It is dimensionless total bases per at-bat; the breakdown is \(AB=0\). Equation 5 on [PAGE 3] is
\[
\mathrm{OBP}=\frac{H+BB+HBP}{AB+BB+HBP+SF},
\]
where \(BB\) is walks and \(HBP\) hit-by-pitch. It is dimensionless; the singularity is \(AB+BB+HBP+SF=0\). Equation 6 on [PAGE 3] is
\[
\mathrm{OPS}=\mathrm{OBP}+\mathrm{SLG},
\]
a dimensionless sum of rates. Equation 7 on [PAGE 4] is
\[
\mathrm{WAR}=
\frac{\mathrm{RunsCreated}+\mathrm{PositionAdjustment}+\mathrm{LeagueAdjustment}+\mathrm{ReplacementAdjustment}}
{\mathrm{RunsPerWin}},
\]
with
\[
\mathrm{RunsCreated}=\mathrm{BattingRuns}+\mathrm{FieldingRuns}+\mathrm{BaserunningRuns}.
\]
The unit is runs above replacement; the singular regime is \(\mathrm{RunsPerWin}=0\), and any denominator close to zero produces unstable leverage. Equations 8 and 9 on [PAGE 4] give the linear-weights method:
\[
RS=\sum_{j=1}^{N}\alpha_{\mathrm{event}_j}C_{\mathrm{event}_j},
\qquad
\mathrm{RunsCreated}_i=\sum_{j=1}^{N}\alpha_{\mathrm{event}_j}C_{\mathrm{event}_j,i}.
\]
Here \(RS\) is runs scored, \(C\) is event count, and \(\alpha\) is the estimated run value per event. The unit of \(\alpha\) is runs per event; \(RS\) and RunsCreated are runs. The identifiability breakdown is \(\mathrm{rank}(C)<N\): if event-count columns are collinear or duplicated, \(\alpha\) is not uniquely determined. The paper states that “all these statistics are fundamentally obtained by simply counting the number of times different events occur on the field of play, without regard for how they happened” [PAGE 3].

The learned operator is a derived formalization from the described transformer and MGM scheme, not a source-displayed equation. Let \(x_t\) be the event vector at pitch \(t\), containing gamestate delta, pitch type, event type, Statcast numerals, and sabermetric numerals; the paper says “The primary way in which each event is described is via a gamestate delta” [PAGE 7] and “we include data collected by Statcast which contains descriptions of pitch speed, rotation, and location as well as batted ball exit velocity, launch angle, and distance” [PAGE 7]. The model \(f_\theta\) produces contextual states \(h_t=f_\theta(x_{1:T})\). For a mask set \(\mathcal{M}\) with \(|\mathcal{M}|=\lfloor 0.15T\rfloor\), the MGM objective can be written
\[
\mathcal{L}_{\mathrm{MGM}}(\theta)=
\sum_{t\in\mathcal{M}}
\left[
-\log p_\theta(g_t\mid x_{\setminus\mathcal{M}})
-\log p_\theta(e_t\mid x_{\setminus\mathcal{M}})
\right],
\]
with cross-entropy measured in nats when natural logarithms are used. This is derived from “we randomly mask 15% of the vectors in the sequence, asking the model to predict the missing gamestate and event” [PAGE 8]. The player-attention mask is
\[
\mathrm{Attn}(Q,K,V)=
\mathrm{softmax}\left(\frac{QK^{\top}}{\sqrt{d_k}}+M_{\mathrm{player}}\right)V,
\]
where \(M_{\mathrm{player},ij}=0\) if event \(j\) involves player \(i\) and \(M_{\mathrm{player},ij}=-\infty\) otherwise. This follows from the statement that “the player embeddings can only tend to events in the sequence in which the corresponding player was involved” [PAGE 8]. The breakdown regime is an all-masked attention row: if a player has no involved events, the softmax row is undefined without a fallback, and the player embedding is unidentifiable. The fine-tuning targets are counts; MSE has units of count squared, MAE has units of counts, and R2 is dimensionless. Table 2 reports pitcher strikeout MSE 5.37, MAE 1.85, R2 0.21; batter has-hit MSE 0.42, MAE 0.57, R2 0.04 [PAGE 9]. The small-sample breakdown is structural: the paper says “If a batter did not start in any of their team’s 10 most-recent games, then our model is unable to derive an embedding of their performance” [PAGE 10], and “if a starting pitcher hasn’t previously made a start in the MLB, then our model will have nothing to base its predictions on for that pitcher” [PAGE 10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is explicitly retrocausal: it reads baseball analytics as if it were computational linguistics before contextual embeddings. The bag-of-words antecedent is Harris’s distributional structure [PAGE 2, PAGE 14]. The paper’s own summary is that early language work counted word occurrences, while modern methods “derive contextual representations of language, analyzing the context in which words appear” [PAGE 2]. It then maps that transition onto sports: “We view the sports analytics community as currently in the bag-of-events era and offer a steppingstone for advancing the community into the era of contextual embeddings” [PAGE 2]. The transformer lineage is Vaswani et al. [PAGE 6, PAGE 14]; the masked-language-model lineage is BERT [PAGE 8, PAGE 14]; the broader large-model and vision-transformer lineage is Brown et al. and Dosovitskiy et al. [PAGE 6, PAGE 14]. The action-valuation lineage is Liu and Schulte in hockey and Liu et al. in soccer [PAGE 5, PAGE 14]. The sabermetric lineage is BABIP, FPCT, ERA, SLG, OBP, OPS, and WAR on [PAGE 3, PAGE 4]. Thus the paper’s historical claim is not that counting stats are useless, but that they are a lossy compression: “the way in which these events occur is not reflected in the WAR metric” [PAGE 5].

The multi-week traps are where this genealogy becomes operationally dangerous. Trap one is stale context: the model uses 10 games of play-by-play [PAGE 10], but a pitcher’s role, velocity, or health can change over multiple weeks, and a batter’s effective context is often less than 10 games [PAGE 11]. Over a multi-week evaluation, embeddings can decay faster than the evaluation window. Trap two is label drift: the model’s has-hit target is “against a given starting pitcher,” while commercial targets are “in a given game” [PAGE 10]; a multi-week comparison that mixes these definitions will confound model quality with task difficulty. Trap three is selection drift: the paper notes the model makes predictions “for every starting pitcher in 2021 – 50% more predictions than the next closest sportsbook” [PAGE 10], so a multi-week sample drawn only from published commercial projections is not representative of all starters. Trap four is rookie and minor-league missingness: “When a player makes their first start in the MLB, there are no records of in-game events in the MLB in which said player participated – no amount of context will include a description of said player” [PAGE 11]. A multi-week test that includes callups will systematically hit this missingness regime. Trap five is environmental drift: the source includes Statcast physical descriptors [PAGE 7] but does not document weather or park state, so multi-week weather shifts can masquerade as player decline or improvement. Trap six is metric drift: R2 0.04 for batter has-hit [PAGE 9] is close enough to zero that small changes in sample composition can reverse apparent gains. The genealogical lesson is that contextual embeddings are a compression change, not an automatic causal upgrade; multi-week evaluation must hold label definitions, selection rules, missingness regimes, and environmental layers fixed.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind problem has three competing habits. The first is crisis habit regression: under uncertainty, analysts revert to counting-stat dashboards because those numbers are auditable, familiar, and historically legitimated. The paper records that “Historically, practitioners predominantly relied upon simple counting statistics” [PAGE 1] and that the community is in the “bag-of-events era” [PAGE 2]. In a crisis, this habit says: discard the contextual model when batter R2 is only 0.04 [PAGE 9] and return to OPS, ERA, and WAR. The counter-trap is the opposite overcorrection: the modeler treats embedding visualizations as proof of mechanism. The paper’s own caution is the right counter-trap: “is it truly contextualizing the game, or uncovering some statistical phenomenon?” [PAGE 11]. A striation for outs or runner movement [PAGE 11, PAGE 12] is evidence of representational partitioning, not evidence of causal sufficiency. The third habit is the clock: the model’s decision horizon is 10 games, while the player’s career and the minor-league record are longer clocks. The paper says the model is “based only on 10 games of in-game events” and “trained on only six years of data” [PAGE 10]; it also says “A potential option would be to include more games of context” [PAGE 11]. The clock trap is to confuse a short-horizon embedding with a long-horizon player identity.

A recursive model of the other agents matters. The paper states that after discussions with industry people, it is “confident their approaches are not drastically different in kind” [PAGE 3]. That is a theory-of-mind claim about commercial modelers: they likely also count events but add proprietary adjustments. The paper also notes that sportsbooks “are not only concerned with making accurate predictions” [PAGE 10], which means their published projections are a strategic interface, not a transparent peer-review metric. The modeler must therefore model the modeler: a commercial projection may be withheld when uncertain, may be shaped by operational concerns, and may use a different has-hit definition [PAGE 10]. The safe recursive stance is calibrated trust: use the contextual model when it has enough player-specific events and when the target definition matches; regress to counting priors when the player has no MLB event history [PAGE 10, PAGE 11]; and refuse to compare across different clocks or label definitions. The crisis habit is not wrong to value auditable counts, and the counter-trap is not wrong to value context, but the clock decides which is admissible. For a debutant, the clock says no contextual evidence exists [PAGE 11], so the model must expose a fallback rather than silently emit an embedding. For a veteran with a full 10-game pitcher sequence, the clock says contextual evidence is available, but it still does not license weather or injury invariance.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical-layer veto is formalized as a conditional-independence failure. Let \(X\) be the event sequence and learned embedding, \(Y\) the performance target, and \(Z\) an external physical, biomechanical, or weather state. The model’s use is licensed only under a sufficiency assumption \(Y\perp Z\mid X\). If there exists \(z_1\neq z_2\) such that
\[
P(Y\mid do(X=x),do(Z=z_1))\neq P(Y\mid do(X=x),do(Z=z_2)),
\]
then the embedding is not sufficient, and predictions under \(z_1\) or \(z_2\) are vetoed. The proof is by counterexample: the model maps both conditions to the same \(f_\theta(x)\), so it cannot satisfy two different conditional outcome distributions. This is not a calibration fix; it is a conditional-shift failure.

The source supplies partial physical covariates: “we include data collected by Statcast which contains descriptions of pitch speed, rotation, and location as well as batted ball exit velocity, launch angle, and distance” [PAGE 7]. That covers some pitch physics and batted-ball geometry. It does not document weather variables such as temperature, wind vector, humidity, precipitation, or atmospheric pressure. It does not document biomechanical state such as fatigue, injury, delivery alteration, or grip. It does not document park state beyond any implicit historical adjustment; the related-work discussion mentions “an adjustment for the parks” in Silver and Huffman’s feature group [PAGE 4], but the current model’s event vector is not described as including park state. The veto follows: identical event sequences under different wind or temperature can produce different batted-ball distances and different hit probabilities, while the model’s \(X\) remains identical. Likewise, a pitcher with the same recent pitch-type sequence but a latent shoulder issue can have different velocity and command; if the injury state is not encoded, the embedding is not physically sufficient.

The weather veto is especially sharp because the source’s Statcast description includes “batted ball exit velocity, launch angle, and distance” [PAGE 7], but distance is an outcome of ball flight under atmospheric conditions. If wind changes, the same exit velocity and launch angle can yield different distance and different hit probability. The model may learn an average mapping, but it cannot adjudicate a wind-driven counterfactual. The biomechanical veto is similarly strong: the model’s player embedding is built only from events in which the player was involved [PAGE 8], so a player returning from injury with no post-injury events has an embedding dominated by pre-injury mechanics. The physical-layer adjudication is therefore: permit the model when the target is conditional on the observed event stream and the external state is exchangeable with training; veto the model when weather, injury, fatigue, or park state changes the outcome mapping but is absent from \(X\). The gray-zone is not “the model is wrong”; it is “the model is under-specified for intervention.”
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Statcast-block ablation. Counterfactual: remove the Statcast numerals—pitch speed, rotation, location, exit velocity, launch angle, distance—from every event vector, retrain with the same MGM and fine-tuning schedule, and evaluate on the same 2021 holdout. Verifiable prediction: pitcher strikeout MAE rises from 1.85 to at least 1.95 and R2 falls from 0.21 to at most 0.15; batter has-hit MAE rises from 0.57 to at least 0.60. Veto rule: if the ablated model matches or beats the full model within 0.02 MAE on both targets, then the claim that Statcast physical context is materially useful is vetoed for this dataset.

Scenario 2: Context-window truncation from 10 games to one game. Counterfactual: keep the architecture and targets fixed, but present only the most recent game instead of the 10-game sequence. Verifiable prediction: pitcher strikeout R2 drops by at least 0.08 absolute; batter has-hit R2 drops by at least 0.03 absolute; and the fraction of batters with zero effective context rises above 50%, consistent with the paper’s observation that batter predictions are “often made based on significantly fewer than 10 games of effective context” [PAGE 11]. Veto rule: if the one-game model loses less than 0.03 R2 for pitchers and less than 0.01 for batters, then the claimed value of the 10-game contextual window is vetoed.

Scenario 3: Debut-player missingness test. Counterfactual: hold out all starting pitchers with no prior MLB start and all batters who did not start in their team’s 10 most-recent games, then evaluate only those players. The source says such players have no usable embedding: “If a batter did not start in any of their team’s 10 most-recent games, then our model is unable to derive an embedding of their performance” [PAGE 10], and “if a starting pitcher hasn’t previously made a start in the MLB, then our model will have nothing to base its predictions on for that pitcher” [PAGE 10]. Verifiable prediction: debut-pitcher strikeout MAE exceeds the overall pitcher MAE by at least 0.50, and no-start batter has-hit MAE is at least 0.65, with predictions collapsing toward the training prior. Veto rule: if the model’s debut-player MAE is within 0.10 of the overall MAE, then the claimed missingness breakdown is vetoed or the model is silently using an undocumented fallback.

Scenario 4: Label-definition swap. Counterfactual: retrain the has-hit head on full-game has-hit labels rather than “against a given starting pitcher” labels, then compare to the published target. The paper explicitly distinguishes the two: the model predicts a hit “against a given starting pitcher,” while the books predict a hit “in a given game” [PAGE 10]. Verifiable prediction: full-game has-hit is easier, so MAE should fall relative to the against-starter target, but the model’s relative ranking against commercial projections should not be treated as invariant unless the label swap is reported. Veto rule: if the paper’s comparative claim survives unchanged after label harmonization, the comparison is robust; if the ranking reverses, the original comparison is vetoed as label-confounded.
</RLVR_COUNTERFACTUAL_VETOES>