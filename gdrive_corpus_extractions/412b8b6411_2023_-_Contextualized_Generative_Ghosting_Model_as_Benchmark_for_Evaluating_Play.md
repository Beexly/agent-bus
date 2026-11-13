---
source: "2023 - Contextualized Generative Ghosting Model as Benchmark for Evaluating Player Movement in Football - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 12
model: deepseek/deepseek-v4.1-flash-1017
words: 6977
---

<NATIVE_REASONING>
We need answer user. Need produce structured XML sections exact. Need comply invariants. Need not betting lines. Need >=1000 words depth. Need source citations exact [PAGE N] and verbatim quotes where source pages provided. We have 12-page slide deck. Need derive formal LaTeX, units, assumptions, breakdown regimes. Need discuss "Contextualized Generative Ghosting Model as Benchmark for Evaluating Player Movement in Football". Need avoid fake ratios. Need formal equations. Can use generative models, pitch control, CNN context, what-if. Need be careful not invent details not source. We can state source is slide deck sparse, no equations/results details. Need cite exact page markers and verbatim quotes. Need quote verbatim. We can quote short phrases.

Need likely answer as research analysis. Need include sections:
<THINK_TRACE> >=400 words
<SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>

Need include formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Need mention no betting lines. Need "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." Since deck doesn't mention weather/biomech, need adjudicate: not in source. Need use physical constraints: pitch dimensions SI, player speed, acceleration, biomechanical reachable set, weather affects traction? But source no weather. Need veto proof maybe "no source claims, cannot validate; model veto if generated position outside physical reachable envelope or pitch control undefined." Need formalize.

Need "RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions." RLVR maybe Reinforcement Learning with Verifiable Rewards? Need give three counterfactual veto scenarios with predictions. Need no betting lines. Need make them verifiable. Could be:
1. Leakage veto: if contextual CNN uses future frames or labels, ghosting benchmark invalid. Prediction: performance drops to chance-ish / high error on chronological split.
2. Physical implausibility veto: if generated ghost positions exceed max sprint speed / acceleration or pitch bounds, model veto. Prediction: high fraction of trajectories violate bounds; reject.
3. Pitch-control singularity veto: if pitch control computed at player exactly? Or when time-to-intercept equal? Need formal.
Maybe "counterfactual swap of context" (scoreline, possession) should change ghosting; if not, contextualization ineffective. Prediction: context ablation yields no difference -> veto. Need "3 verifiable RLVR veto scenarios + predictions." Use verifiable metrics.

Need source citations. Let's parse deck:
Page 1 title/authors.
Page 3 introduction: current models Xg, EPV, VAEP; features supervised, performance relies training distribution, cannot answer what-if; generative ghosting combination unsupervised and supervised, more likely capture generative patterns, can answer what-if.
Page 4 background deep generative time series (Chung et al 2015), latent space, keep walking starts jogging starts sprinting.
Page 5 pitch control (Spearman 2018).
Page 6 data professional soccer matches event/tracking.
Page 7 data processing convert to pitch control frames.
Page 8 framework: Trained Generative Model; Trained Contextualized CNN; Players' Positions; Part 1 Part 2; citation.
Page 9 Results (no content).
Page 10 conclusion: benchmark for evaluating soccer players' performance; analyzing team movement and individual player's ability of utilizing open space; future combine with expected goal model to quantify value of each decision.
Page 11 references.

Need write with exact verbatim quotes. E.g.
- "Can answer what-if questions in given context" [PAGE 3]
- "Combination of unsupervised learning and supervised learning" [PAGE 3]
- "More likely to capture the generative patterns within the data" [PAGE 3]
- "Change data representation" and "convert them to another form of representation – pitch control frames" [PAGE 7]
- "Trained Generative Model" and "Trained Contextualized CNN" [PAGE 8]
- "benchmark for evaluating soccer players’ performance on the pitch" [PAGE 10]
- "analyzing team movement and individual player’s ability of utilizing open space" [PAGE 10]
- "combining our method with expected goal model to quantify the value of each decision made within the game" [PAGE 10]
- "Deep Generative Model on Time Series Data" [PAGE 4]
- "Latent Space" and "Keep walking Starts jogging Starts sprinting" [PAGE 4]
- "Pitch Control (Spearman W, 2018)" [PAGE 5]
- "Event Data Tracking Data" [PAGE 6]
- "Results" [PAGE 9] no details.

Need formal LaTeX. Need define generative ghosting model. Since source sparse, we can construct formal notation carefully: Let tracking state \(X_{1:T} = \{ \mathbf{x}_{i,t} \}_{i=1}^N\), each \(\mathbf{x}_{i,t}\in \mathbb{R}^2\) meters in pitch coordinates. Event data \(E_{1:T}\). Pitch control field \(P_t(\mathbf{z}) \in [0,1]\) probability that player/team controls point \(\mathbf{z}\) at time t. Convert to pitch control frames \(C_t = \{P_{k,t}\}_{k=1}^K\) or image. Context \(c_t\) includes possession, positions, maybe event. Generative model \(p_\theta(Y_{t+1:t+H}\mid C_{1:t}, c_t)\) or latent variable \(z_t\). Contextualized CNN \(f_\phi(C_{1:t}, c_t)\) produces context embedding \(h_t\). Ghosting = expected/plausible future positions \(\hat{Y}\). Need use units: meters, seconds, m/s, m/s^2, probability bits/nats. Information units: entropy \(H=-\sum p \log p\) in bits/nats. Kullback-Leibler bits. Pitch dimensions. Need not invent exact model architecture beyond source: "trained generative model" and "trained contextualized CNN". We can present generic formalization and label as interpretation not source. Need state assumptions. Need singularity/breakdown regimes: 
- Pitch control singular when time-to-intercept infinite? Spearman pitch control uses time to intercept and motion model. We can state if underlying time-to-reach \(T(\mathbf{z})\to\infty\), control probability can become undefined/zero; model breakdown when no player can reach within horizon.
- Generative model latent collapse: if \(p_\theta\) ignores context, \(I(Y;c)\to0\), what-if fails; detect via mutual information. 
- Data support: if context c outside training distribution, supervised CNN output unreliable; performance heavily relies training distribution [PAGE 3]. 
- Physical singularity: generated velocity/acceleration violates bounds; reject.
- Temporal leakage: if future frames used.
- Small sample / rare contexts.

Need "Retrocausal Genealogy" historical/scientific lineage and multi-week traps. Need discuss lineage: expected goals Rathke 2017, EPV Fernández et al 2019, VAEP Decroos 2021; deep generative time series Chung et al 2015; pitch control Spearman 2018; Gu & De Silva 2023. Retro-causal: ghosting benchmark is descendant of EPV/VAEP and pitch control; future expected goal combination. Multi-week traps: treating ghosting as ground truth; confusing pitch control with player value; leakage; distribution shift; overfitting to rare formations; evaluating only average error not multimodal; ignoring physical constraints; using results page absent. Need mention no equations/results in deck. "Results" page no data.

Need "Recursive Theory of Mind" crisis habit regression vs counter-trap vs clock. Interpret: In crisis, model/coach reverts to habit (supervised EPV/VAEP), counter-trap (adversarial exploitation of ghosting), clock (time pressure). Need relate to recursive ToM: model predicts player, player anticipates model, evaluator anticipates. Need discuss counterfactual: ghosting benchmark as "what would a competent player do" but players can exploit model's expectations. Need "clock" maybe decision time. Need no betting lines. Need formal: recursive belief \(B^{(k)}\). Need avoid too speculative but okay.

Need "Cross-layer veto adjudication" physical/biomechanical/weather veto proof. Need include proof-ish: if generated ghost position \(q_{t+\Delta}\) not in reachable set \(R_t(\Delta) = \{q: \|q-q_t\|\le v_{\max}\Delta + \frac12 a_{\max}\Delta^2\}\) and within pitch bounds, veto. Weather: if wet surface reduces traction, effective \(a_{\max}\) lower; source deck no weather layer; cannot claim. Need state "source provides no weather variables [PAGE 6-7]"; thus any weather-conditioned claim is unsupported and vetoed. Biomechanical: joint kinematics? We can say model outputs positions only; can't validate joint loading. Need "proof": necessary conditions. Use set membership. If \(q\notin R_t\), physically impossible under assumption. If \(P_t(z)\notin[0,1]\), invalid. If pitch control frames not normalized, invalid. Need "weather veto proof" maybe: Without weather data, no evidence model can distinguish dry/wet; any counterfactual weather intervention has zero input variation; so predicted difference must be zero. If model outputs nonzero difference, it is hallucinating. That's a nice formal proof. Use \(c_{\text{weather}}\) constant in deck; \(p_\theta(Y|c_{\text{weather}}=dry)=p_\theta(Y|c_{\text{weather}}=wet)\) under missing variable; if not, unsupported. Need mention no source weather.

Need "RLVR Counterfactual Vetoes" 3 verifiable scenarios. Need define RLVR as reinforcement learning with verifiable rewards? The user uses "RLVR_COUNTERFACTUAL_VETOES". We can frame as "verifiable reward veto tests". Need 3 scenarios:
1. Chronological leakage veto: Train on pre-t, test on t+1; if random shuffling improves over chronological by threshold, veto. Predict: shuffled splits inflate metrics; chronological reveals true. Need specify metric: negative log-likelihood in nats per frame, or RMSE meters. If difference >? We can avoid arbitrary? Need verifiable: use bootstrap CI. Prediction: if leakage present, NLL gap > 0 with 95% CI; if not, gap ~0. 
2. Physical reachability veto: Generate H=1s ghosts; compute violation rate \(V = \frac1M\sum 1[\hat{q}\notin R_t]\). Veto if \(V>0\)? Real data may have tracking noise. Better threshold \(V > \epsilon\) with \(\epsilon\) pre-registered (e.g. 0.01). Prediction: model with no physical constraints has higher V; constrained model lower. Need not invent fake ratio? It's a rate, valid. 
3. Context sensitivity veto: Counterfactual context swap (e.g., possession team switched) should change ghost distribution. Use mutual information or KL \(D_{KL}(p(Y|c_1)\|p(Y|c_2))\). Veto if KL < δ nats under large context change. Prediction: non-contextual baseline KL ~0; contextual model >0. Need "verifiable". 
Alternative: pitch-control field normalization and calibration veto. But three enough.

Need maybe include "No betting lines" no mention.

Need output only XML sections? User specified exact XML sections. Need include all. Need >=1000 words. Need ensure XML tags valid, no raw < in equations? Need escape < in XML? Since output is plain text with tags, LaTeX includes < maybe in inequalities. In XML, `<` must be escaped if inside text? The answer is not actually parsed? To be safe, use `\lt` or `\le` instead of `<`. Use `>` okay? Better use `\le`, `\ge`, `\in`, no `<`. Avoid `<` characters. But tags use <. In text, use LaTeX commands. Use `\to`. Avoid raw ampersand. Need escape ampersand? Use "and". Use `\|` okay. Avoid `&` in text. Use "and". Need use `[PAGE N]` markers.

Need word count. Need write substantial. Let's draft.

Need include <THINK_TRACE> deep multi-hop derivation >=400 words. We can make ~600. Overall >1000. Need maybe 2500 words. Desired oververbosity 5. Need not too long but enough. We'll produce maybe 3000 words. Need ensure no betting lines. Need cite pages. Need formal equations. Need mention source limitations.

Let's outline:

<THINK_TRACE>
- Source is slide deck 12 pages, not full paper. Title and authors.
- Core claim: generative ghosting combines unsupervised and supervised, answers what-if, benchmark. 
- Multi-hop: from data to pitch control frames to generative model to contextual CNN to benchmark. Need derive evaluation logic: If ghost = distribution over future positions conditioned on context, benchmark compares actual player trajectory to ghost distribution. But source does not specify metric; therefore audit.
- Need distinguish three objects: physical pitch-control field, generative future trajectory distribution, contextual embedding. The benchmark is not "expected goals"; it's movement baseline. Need avoid treating as value. 
- What-if requires intervention do(context); if model only correlates, not causal. Need test context sensitivity.
- Assumptions: tracking data accurate, pitch control calibrated, context sufficient, training distribution covers test contexts. Source explicitly says model performance heavily relies on distribution of training data [PAGE 3].
- Gray-zone: Page 9 "Results" has no numbers; cannot verify performance. Need state claims unproven. Page 10 future expected goal model. 
- Physical constraints veto.
- Recursive ToM: player can exploit ghost; benchmark must be robust.
- Need include no betting.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- Notation and equations.
1. Tracking state and event.
\(X_{1:T}=\{(\mathbf{x}_{i,t},\mathbf{v}_{i,t})\}_{i=1,t=1}^{N,T}\), \(\mathbf{x}\in\mathbb{R}^2\) m, \(\mathbf{v}\in\mathbb{R}^2\) m/s.
\(E_{1:T}\) event stream with time seconds.
2. Pitch control: \(P_t(\mathbf{z}) = \Pr(\text{team }k\text{ controls } \mathbf{z}\text{ at }t \mid X_t, E_t)\), units probability [0,1]. Source page 7 and 5. Might define time-to-intercept \(T_i(\mathbf{z})\). Spearman 2018. But source only says pitch control. Use generic. Assumption: \(P\) calibrated; if not, ghost frames are distorted. Breakdown: \(P\notin[0,1]\), uncalibrated, \(T_i\to\infty\).
3. Generative model: latent variable \(z_t\sim p_\theta(z_t)\), future \(Y_{t+1:t+H}\sim p_\theta(Y|z_t,C_{1:t},c_t)\). Or \(p_\theta(Y_{t+1:t+H}\mid C_{1:t}, c_t)=\int p_\theta(Y|z,C,c)p_\theta(z|C,c)dz\). Units: H seconds, Y meters. Loss NLL in nats: \(\mathcal{L}=-\frac1M\sum \log p_\theta(y_m|c_m)\) nats per sample. Entropy bits/nats.
4. Contextual CNN: \(h_t=f_\phi(C_{t-L+1:t}, c_t)\), \(h_t\in\mathbb{R}^d\), no physical units; information content bits/nats.
5. Benchmark score: For actual future \(y^\star\), ghosting distribution \(p_\theta\). Score could be log score \(S=\log p_\theta(y^\star|c)\) nats; or probability integral transform. If actual trajectory has high log score, player behaves like model. But source doesn't define. Need say "slide deck does not specify the scoring rule [PAGE 9]". We can propose verifiable. Need not invent? It's formalization. 
6. What-if intervention: \(do(c=c')\), compare \(p(Y|do(c'))\). Causal effect in nats: \(D_{KL}(p(Y|c')\|p(Y|c))\). If zero, no context.
7. Physical reachable set: \(R_t(\Delta)=\{\mathbf{q}\in\mathcal{P}: \|\mathbf{q}-\mathbf{x}_{i,t}\|\le v_{\max}\Delta+\frac12 a_{\max}\Delta^2\}\). Units m. Veto if \(\hat{\mathbf{q}}\notin R_t(\Delta)\). Pitch \(\mathcal{P}\) dimensions m. 
8. Breakdown regimes: out-of-distribution context; mode collapse; latent posterior collapse \(I(z;c)\to0\); pitch control singular; tracking noise; physical violation; leakage. Need mention source says "Model performance heavily relies on the distribution of training data" [PAGE 3]; "Cannot answer what-if questions" for supervised [PAGE 3] but ghosting claimed can.
- Cite page 3,4,5,6,7,8,10,11.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- Historical lineage: xG Rathke 2017, EPV Fernández Bornn Cervone 2019, VAEP Decroos 2021 [PAGE 3][PAGE 11]. Deep generative time series Chung et al 2015 [PAGE 4][PAGE 11]. Pitch control Spearman 2018 [PAGE 5][PAGE 11]. Gu & De Silva 2023 [PAGE 8][PAGE 11].
- Retrocausal: current ghosting model is framed as benchmark; future combines with xG to value decisions [PAGE 10]. This inverts lineage: movement baseline precedes valuation; value of decisions requires ghosting counterfactual.
- Multi-week traps: 
1. Treating ghosting as ground truth.
2. Confusing pitch control representation with model output.
3. Data leakage from tracking/event future.
4. Distribution shift; source says models rely on training distribution [PAGE 3].
5. Evaluating average only, missing multimodal.
6. Ignoring physical constraints.
7. Claiming results without page 9 numbers.
8. Recursive exploitation by players/coaches.
- Need mention "Results" page empty [PAGE 9] so any quantitative claims must be treated as unverified.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
- Need crisis habit regression vs counter-trap vs clock.
Define recursive belief: evaluator E, model M, player P. \(B_E^{(k)}(Y)\) etc. 
- Crisis habit regression: under time pressure or uncertainty, analyst reverts to familiar supervised metrics (xG/VAEP) despite ghosting benchmark; source contrasts supervised models [PAGE 3]. This is habit. Counter-trap: if player knows benchmark, they can choose "ghost-like" safe movement to score well but not win; or model can be gamed. Need use held-out and adversarial contexts. Clock: decision horizon H; if H too long, uncertainty grows; if too short, no tactical meaning. Need choose H based on event. 
- Counter-trap: model predicts expected movement; opponent anticipates model; recursive. Need test via context randomization and mixed strategy. 
- Clock: real-time evaluation; if model inference latency > decision window, not usable. Source no latency data. Need veto if latency exceeds action window. 
- Need maybe formal: recursive ToM levels: level-0 player ignores benchmark, level-1 optimizes against benchmark, level-2 evaluator anticipates. The benchmark must be evaluated at level-1/2. 
- Habit regression: returning to xG/VAEP because ghosting has no results page. 
- Need mention "what-if" [PAGE 3] is the recursive counterfactual: "what would happen if player chose different movement?" 
- Keep concise.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
- Need physical/biomechanical/weather veto proof.
- Source layers: event/tracking [PAGE 6], pitch control frames [PAGE 7], generative model and contextual CNN [PAGE 8], results/conclusion [PAGE 9-10]. 
- Physical veto: pitch bounds and reachable set. If generated ghost outside, veto. Use \(\mathcal{P}=[0,L]\times[0,W]\) m. Standard pitch length/width not specified; use measured. 
- Biomechanical veto: position-only output cannot prove joint loads; but velocity/acceleration must obey \(v\le v_{\max}\), \(a\le a_{\max}\). If model outputs only positions, finite difference must satisfy. If not, veto. 
- Weather veto: Source contains no weather features [PAGE 6-7]. Let \(w\in\{dry,wet\}\) not in input. Under missing variable, \(p_\theta(Y|w=dry)=p_\theta(Y|w=wet)\) unless model has proxy variables. If claimed weather effect non-zero, unsupported. Need "proof" by no input variation: \(C(w=dry)=C(w=wet)\) in deck's representation; deterministic model gives same output; stochastic model same distribution. Thus weather-conditioned claims are hallucinated. If use weather variable, need calibration and traction model \(a_{\max}(w)\). 
- Cross-layer: pitch control singular; if \(P_t\) not normalized or no player can intercept, veto. 
- Need "proof" maybe "necessary conditions for validity": 
1. \(\mathbf{x}_{i,t}\in\mathcal{P}\)
2. \(\|\mathbf{v}_{i,t}\|\le v_{\max}\)
3. \(\|\Delta \mathbf{v}\|/\Delta t\le a_{\max}\)
4. \(P_t(\mathbf{z})\in[0,1]\)
5. \(\int_{\mathcal{P}}? \) Not exactly; pitch control is pointwise probability. 
- If any fails, ghosting benchmark invalid for that frame. 
- Weather proof: missing variable. 
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
- Need 3 scenarios. Define RLVR as "reinforcement learning with verifiable rewards" maybe not necessary. Use "verifiable reward vetoes". 
Scenario 1: Temporal leakage veto. 
- Intervention: shuffle frames vs chronological split. Metric: NLL nats/frame or RMSE m. Prediction: if leakage, shuffled split NLL lower by margin with CI; chronological gap near zero. Veto if random split significantly better. 
- Need no fake ratio? Difference in nats is okay. Avoid ratio. 
Scenario 2: Physical reachability veto. 
- Intervention: unconstrained vs constrained decoder. Metric V violation rate. Prediction: unconstrained V > constrained V; constrained V ≤ ε. Veto if V > ε after constraints or if constraints degrade NLL unacceptably? Need define. 
Scenario 3: Context-swap sensitivity veto. 
- Intervention: swap possession team or scoreline context. Metric \(D_{KL}\) nats or log-score difference. Prediction: non-contextual baseline KL ≈0; contextual model > δ; if not, what-if claim [PAGE 3] fails. 
- Could include "pitch-control calibration veto" instead. But three enough. Need predictions verifiable. 
- Need mention all tests pre-registered, saved predictions. 
</RLVR_COUNTERFACTUAL_VETOES>

Need ensure ">= 1,000-word depth across exact XML sections" overall. We'll make ~2500-3000 words. Need use exact section names. Need not include extra outside? We can only output these sections. Good.

Need careful with XML: The tags contain underscores. Text includes LaTeX with `\|` maybe okay. Ampersand avoid. Use "and" instead of `&`. Use `\Pr` etc. Use `\mathbb{R}`. Use `\le` not `<`. But `\lt`? LaTeX `\le` fine. Avoid raw `&`. In equations, `\begin{aligned}` has `&` alignment ampersand, which in XML would be invalid. Avoid aligned environments; use separate display equations without `&`. Use `\[ ... \]` but backslashes okay. Avoid `<` symbols. Use `\le`, `\ge`. Avoid `>`? `>` okay in XML text? Yes `>` okay but can use `\gt`. But need not parse. Use `\to`. Avoid `&`. Use `\text{and}`. Use `\mathcal{P}`.

Need maybe include "SI/information/probability units" explicitly. Good.

Need "verbatim quotes" exact. Need ensure quotes match source. Source has curly apostrophe in "players’ performance" etc. We can quote exact. Need include [PAGE N] after quote. For page 3: "Cannot answer what-if questions in given context" exact? Source: "Cannot answer what-if questions in given context" yes. "Can answer what-if questions in given context" yes. "Combination of unsupervised learning and supervised learning" yes. "More likely to capture the generative patterns within the data" yes. "Model performance heavily relies on the distribution of training data" yes. Page 7: "Change data representation" and "convert them to another form of representation – pitch control frames" exact. Page 8: "Trained Generative Model" "Trained Contextualized CNN" "Players' Positions" exact. Page 10: "benchmark for evaluating soccer players’ performance on the pitch" exact. "analyzing team movement and individual player’s ability of utilizing open space" exact. "combining our method with expected goal model to quantify the value of each decision made within the game" exact. Page 4: "Deep Generative Model on Time Series Data" exact; "Latent Space" exact; "Keep walking Starts jogging Starts sprinting" exact (line breaks). Page 5: "Pitch Control (Spearman W, 2018)" exact. Page 6: "Professional Soccer Matches" "Event Data" "Tracking Data" exact. Page 9: "Results" exact. Page 11 references. Page 1 title. Good.

Need maybe cite page 1 title and authors. Use quotes.

Need avoid "betting lines" entirely. No mention.

Need maybe answer not just analyze but "DRIVE SOURCE" maybe expects reasoning. Good.

Need maybe state "I will not evaluate spread/total/moneyline" no, that mentions betting lines? Invariant says never mention spreads, totals, moneylines, odds. Avoid words.

Need ensure "ZERO TOY EQUATIONS" - don't invent fake ratios. We won't. Use valid formal equations. We can present "proposed formalization" because source lacks equations. Need explicitly say "The deck provides no model equations; the following are formalizations consistent with its stated components, not verbatim source equations." That avoids fake. Use valid. Need not call "Force/Fatigue". Good.

Need "exact singularity/breakdown regimes" in source operators section. We'll include list.

Need "When source pages provided, cite exact [PAGE N] markers and verbatim quotes." We'll cite throughout.

Let's craft with sufficient depth.

Potential issue: XML section content includes `\` and `[` etc. Fine. Need no unescaped `&`. Avoid "R&D". Avoid ampersand. Avoid `<` in text. Use `\le`. In XML tags, okay. In LaTeX, `\begin{cases}` has `&`? Avoid cases with `&`. Use \(a\le b\). For set definitions, use `\mid` not `|` maybe. Avoid `&`.

Need maybe include equations:
\[
X_{1:T}=\{(\mathbf{x}_{i,t},\mathbf{v}_{i,t})\}_{i=1,t=1}^{N,T}, \quad \mathbf{x}_{i,t}\in\mathbb{R}^2\ \mathrm{m}, \quad \mathbf{v}_{i,t}\in\mathbb{R}^2\ \mathrm{m\,s^{-1}}
\]
No ampersand. Good.

\[
P_t(\mathbf{z})=\Pr(\text{control of } \mathbf{z} \text{ at time } t \mid X_{1:t},E_{1:t}), \quad P_t(\mathbf{z})\in[0,1]
\]
No `<`. Good.

\[
p_\theta(Y_{t+1:t+H}\mid C_{1:t},c_t)=\int p_\theta(Y_{t+1:t+H}\mid z_t,C_{1:t},c_t)\,p_\theta(z_t\mid C_{1:t},c_t)\,dz_t
\]
Good.

\[
\mathcal{L}_{\mathrm{NLL}}=-\frac{1}{M}\sum_{m=1}^{M}\log p_\theta(y_m\mid c_m)\ \mathrm{nats}
\]
Good.

\[
h_t=f_\phi(C_{t-L+1:t},c_t), \quad h_t\in\mathbb{R}^d
\]
Good.

\[
D_{\mathrm{KL}}(p_\theta(Y\mid c')\Vert p_\theta(Y\mid c))=\int p_\theta(Y\mid c')\log\frac{p_\theta(Y\mid c')}{p_\theta(Y\mid c)}\,dY\ \mathrm{nats}
\]
Good.

\[
R_t(\Delta)=\{\mathbf{q}\in\mathcal{P}:\|\mathbf{q}-\mathbf{x}_{i,t}\|\le v_{\max}\Delta+\frac{1}{2}a_{\max}\Delta^2\}
\]
Good.

\[
V=\frac{1}{M}\sum_{m=1}^{M}\mathbf{1}\{\hat{\mathbf{q}}_m\notin R_{t_m}(\Delta_m)\}
\]
Good. Use `\notin`. No `<`.

\[
\mathbf{1}\{P_t(\mathbf{z})\notin[0,1]\}
\]
Good.

Need "singularity/breakdown regimes":
- \(T_i(\mathbf{z})\to\infty\) time-to-intercept; pitch control probability may become 0 or undefined for unreachable points. 
- \(P_t\) uncalibrated; if \(P_t\notin[0,1]\).
- latent collapse \(I_\theta(z;c)\to0\) or \(I_\theta(Y;c)\to0\). Need define mutual information units bits/nats. 
- OOD \(c\notin\mathrm{supp}(p_{\mathrm{train}}(c))\).
- physical violation \(v>v_{\max}\) or \(a>a_{\max}\).
- temporal leakage.
- no results page.

Need "probability units" maybe bits/nats. Good.

Need write final.

Need ensure word count. Let's estimate. THINK_TRACE ~650. SOURCE ~900. RETRO ~500. Recursive ~450. Cross ~500. RLVR ~450. Total ~3450. Good.

Need maybe not too verbose? Desired 5 but requirements high. Fine.

Need final with XML sections only. Use no markdown. Let's compose carefully.

Need include "The deck has no explicit equations; all equations are audit formalizations" in SOURCE. Good.

Need "verbatim quote" exact. Use curly quotes? Use straight quotes, content exact. For page 3 quote "Xg mode (Rathke, 2017)"? Not needed.

Need mention "Results" page [PAGE 9] contains only the word "Results" so no quantitative validation. Quote: "Results" [PAGE 9]. Good.

Need "multi-week traps" mention "multi-week" maybe explicitly: "A multi-week evaluation trap is..." Good.

Need "crisis habit regression vs counter-trap vs clock" explicitly. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof" explicitly. Good.

Need "RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions." Explicitly enumerate. Good.

Need not mention "odds" etc. Avoid.

Let's write. 

</NATIVE_REASONING>

<THINK_TRACE>
The source is a 12-page conference slide deck, not a full paper with derivations. Its title is “Contextualized Generative Ghosting Model as Benchmark for Evaluating Player Movement in Football” [PAGE 1], and the stated authors are Chaoyi Gu, Varuna De Silva, Mike Caine, and Ben Smith [PAGE 1]. The core multi-hop argument is: professional match event and tracking data [PAGE 6] are transformed into “pitch control frames” [PAGE 7]; a “Trained Generative Model” and a “Trained Contextualized CNN” are combined [PAGE 8]; the model is then proposed as a “benchmark for evaluating soccer players’ performance on the pitch” [PAGE 10]. The deck contrasts this with supervised soccer models such as xG, Expected Possession Value, and VAEP, which it says “Cannot answer what-if questions in given context” [PAGE 3]. The generative ghosting model is claimed to be a “Combination of unsupervised learning and supervised learning” that “Can answer what-if questions in given context” [PAGE 3].

The deep derivation must separate three objects that the slides partially blur. First is the physical state: player positions and velocities from tracking data, in metres and metres per second. Second is the pitch-control representation: a probability field over pitch locations, derived from tracking and event data. Third is the generative future-trajectory distribution: a distribution over plausible player movement conditioned on context. The benchmark claim only makes sense if the third object is calibrated against the first two and if the context intervention is meaningful. If the model merely reproduces training-data averages, then the what-if claim collapses. If the pitch-control field is miscalibrated, the generative model learns a distorted geometry. If the contextual CNN ignores context, the ghosting output cannot answer counterfactuals. These are distinct failure points, and the deck does not provide the equations or results needed to resolve them; the “Results” page contains only the heading “Results” [PAGE 9].

A further multi-hop issue is evaluation semantics. A ghosting model produces a distribution over future positions. A player’s actual trajectory can be scored by log probability, distance to the conditional mean, rank among sampled ghosts, or another proper scoring rule. The deck does not specify the scoring rule. Therefore any claim that the model is a “benchmark” [PAGE 10] must be audited as a claim about a proposed evaluation protocol, not as an empirically established result. The source does state that model performance “heavily relies on the distribution of training data” [PAGE 3], which is an explicit warning about out-of-distribution contexts. The source also refers to “Deep Generative Model on Time Series Data” [PAGE 4] and “Pitch Control (Spearman W, 2018)” [PAGE 5], so the model lineage is a sequence model over time plus a spatial control field. The gray-zone audit must therefore ask: does the generative model condition on the pitch-control frame, the raw tracking state, the event context, or all three? The slides show “Players' Positions” feeding the framework [PAGE 8], but do not give the exact tensor structure. Any exact architecture claim would be an invention. What can be said is that the benchmark is only valid if the context variables are measured before the predicted future, if the test split is chronological, and if generated movement respects physical reachability.

The recursive-theory-of-mind dimension is also central. A ghosting benchmark is not a neutral measuring stick if players or coaches can adapt to it. A player who knows the benchmark may choose safe, ghost-like movement rather than match-winning movement. A model trained on historical behaviour may encode the previous tactical equilibrium, not optimal movement. An evaluator who treats the ghost as ground truth may mistake model bias for player error. The source’s future direction is to combine the method with an expected-goal model “to quantify the value of each decision made within the game” [PAGE 10]. That is precisely where the recursive trap becomes strongest: movement value depends on the opponent’s anticipation, and the opponent’s anticipation depends on the benchmark. The benchmark must therefore be tested with context swaps, held-out seasons, and physical vetoes.

Finally, the cross-layer audit must be conservative. The deck provides no weather variables, no biomechanical joint model, and no explicit pitch dimensions. Therefore any weather-conditioned or biomechanical claim is unsupported by the source. The correct adjudication is to reject unsupported layers and retain only necessary conditions: pitch bounds, speed and acceleration limits, pitch-control probability normalisation, temporal leakage checks, and context-sensitivity checks. These are sufficient to veto obviously invalid ghosting outputs without pretending the source proves more than it does.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The deck supplies no explicit model equations. The following is a formal audit notation consistent with the stated components: event and tracking data [PAGE 6], pitch-control frames [PAGE 7], “Trained Generative Model” and “Trained Contextualized CNN” [PAGE 8], and the benchmark claim [PAGE 10]. These are not verbatim source equations; they are necessary formal conditions for evaluating the source’s claims.

Let tracking state be
\[
X_{1:T}=\{(\mathbf{x}_{i,t},\mathbf{v}_{i,t})\}_{i=1,t=1}^{N,T},
\quad
\mathbf{x}_{i,t}\in\mathbb{R}^2\ \mathrm{m},
\quad
\mathbf{v}_{i,t}\in\mathbb{R}^2\ \mathrm{m\,s^{-1}},
\]
where \(i\) indexes players and \(t\) indexes time in seconds. Let event data be \(E_{1:T}\). The deck says the data include “Professional Soccer Matches”, “Event Data”, and “Tracking Data” [PAGE 6]. The source also says: “Change data representation” and “convert them to another form of representation – pitch control frames” [PAGE 7]. Thus a pitch-control frame can be written as
\[
P_t(\mathbf{z})
=
\Pr(\text{control of } \mathbf{z} \text{ at time } t \mid X_{1:t},E_{1:t}),
\quad
P_t(\mathbf{z})\in[0,1],
\]
with \(\mathbf{z}\in\mathcal{P}\subset\mathbb{R}^2\) measured in metres and \(P_t\) a probability. The deck cites “Pitch Control (Spearman W, 2018)” [PAGE 5]. Assumption: \(P_t\) is calibrated and normalised as a probability for every queried pitch point. Breakdown regime: if \(P_t(\mathbf{z})\notin[0,1]\), or if the underlying time-to-intercept field is unreachable so that a control probability is not defined within the prediction horizon, then the pitch-control representation is singular for that frame and must not be used as a training or evaluation target.

The generative model can be written with a latent variable:
\[
p_\theta(Y_{t+1:t+H}\mid C_{1:t},c_t)
=
\int
p_\theta(Y_{t+1:t+H}\mid z_t,C_{1:t},c_t)
\,
p_\theta(z_t\mid C_{1:t},c_t)
\,
dz_t,
\]
where \(Y_{t+1:t+H}\) is a future trajectory in metres over horizon \(H\) seconds, \(C_{1:t}\) denotes pitch-control frames, and \(c_t\) denotes contextual variables such as possession or event state. The source calls this a “Deep Generative Model on Time Series Data” [PAGE 4] and shows a “Latent Space” with labels “Keep walking Starts jogging Starts sprinting” [PAGE 4]. Assumption: the latent variable carries information about movement mode. Breakdown regime: latent collapse, \(I_\theta(z_t;c_t)\to0\) in nats or bits, meaning the latent variable is independent of context. Then the model can generate plausible-looking trajectories but cannot answer what-if questions, contradicting the claimed “Can answer what-if questions in given context” [PAGE 3].

The contextual CNN can be written as
\[
h_t=f_\phi(C_{t-L+1:t},c_t),
\quad
h_t\in\mathbb{R}^d,
\]
where \(h_t\) has no physical unit but carries information in nats or bits. The deck lists “Trained Contextualized CNN” [PAGE 8]. Assumption: \(c_t\) is measured before time \(t+1\), and the training split is chronological. Breakdown regime: temporal leakage, where future frames or future event labels enter \(C_{t-L+1:t}\) or \(c_t\). A leaked model will appear to answer what-if questions because it has seen the answer.

A proper scoring rule for a realised future \(y^\star\) is the log score
\[
S(y^\star\mid c)
=
\log p_\theta(y^\star\mid c)
\ \mathrm{nats},
\]
or an equivalent probability-scale score. The deck does not state its scoring rule; page 9 contains only “Results” [PAGE 9]. Therefore a benchmark claim must be treated as a protocol proposal, not a verified metric. A context intervention can be written as \(do(c=c')\), and its effect can be measured by
\[
D_{\mathrm{KL}}\!\left(p_\theta(Y\mid c')\Vert p_\theta(Y\mid c)\right)
=
\int
p_\theta(Y\mid c')
\log\frac{p_\theta(Y\mid c')}{p_\theta(Y\mid c)}
\,dY
\ \mathrm{nats}.
\]
If this divergence is zero under a large context change, then the model is not contextualised in the sense required by “Can answer what-if questions in given context” [PAGE 3].

Physical validity requires a reachable set. Let \(\mathcal{P}\) be the pitch rectangle in metres, and let \(v_{\max}\) and \(a_{\max}\) be player speed and acceleration bounds in \(\mathrm{m\,s^{-1}}\) and \(\mathrm{m\,s^{-2}}\). A one-step reachable set over interval \(\Delta\) is
\[
R_t(\Delta)
=
\left\{
\mathbf{q}\in\mathcal{P}
:
\|\mathbf{q}-\mathbf{x}_{i,t}\|
\le
v_{\max}\Delta+\frac{1}{2}a_{\max}\Delta^2
\right\}.
\]
A generated ghost \(\hat{\mathbf{q}}_{t+\Delta}\) is physically admissible only if
\[
\hat{\mathbf{q}}_{t+\Delta}\in R_t(\Delta).
\]
The violation rate over \(M\) sampled ghosts is
\[
V=\frac{1}{M}\sum_{m=1}^{M}\mathbf{1}\{\hat{\mathbf{q}}_m\notin R_{t_m}(\Delta_m)\}.
\]
Breakdown regimes are therefore: out-of-distribution contexts \(c\notin\mathrm{supp}(p_{\mathrm{train}}(c))\), which the deck itself flags by saying “Model performance heavily relies on the distribution of training data” [PAGE 3]; pitch-control singularities; latent collapse; temporal leakage; and physical violation \(V\gt 0\) beyond a pre-registered tolerance. The source’s future direction, “combining our method with expected goal model to quantify the value of each decision made within the game” [PAGE 10], is only meaningful after these vetoes are passed.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The retrocausal lineage is visible in the deck’s own reference structure. The introduction positions the work against “Xg mode (Rathke, 2017)”, “Expected Possession Value model (Fernández, Bornn, and Cervone, 2019)”, and “VAEP model (Decroos et al., 2021)” [PAGE 3], with full references on page 11. Those models are on-ball or possession-value models: they assign value to actions or states. The generative ghosting model moves the lineage backward in time: instead of valuing the action after it happens, it tries to generate the movement that would have been available before the action. The benchmark is therefore retrocausal in the sense that it evaluates a player against a counterfactual movement distribution rather than only against realised outcome value.

A second lineage is the time-series generative model. The deck cites “Deep Generative Model on Time Series Data” [PAGE 4] and the reference list names Chung et al. 2015 [PAGE 11]. The latent-space sketch with “Keep walking Starts jogging Starts sprinting” [PAGE 4] is a movement-mode lineage, not a value lineage. A third lineage is spatial control: “Pitch Control (Spearman W, 2018)” [PAGE 5]. The ghosting model is thus a hybrid descendant of sequence generation, spatial probability fields, and soccer valuation. The deck’s future direction says the method can be combined with an expected-goal model “to quantify the value of each decision made within the game” [PAGE 10]. That is the genealogical inversion: the ghost becomes the counterfactual baseline, and the expected-goal model becomes the downstream valuator.

The multi-week traps are several. First, treating the ghost as ground truth for multiple weeks of player evaluation. The source says the model can be “used as a benchmark for evaluating soccer players’ performance on the pitch” [PAGE 10], but a benchmark is only valid if its distribution is calibrated and physically admissible. Second, confusing the pitch-control frame with the generative output. The deck says “convert them to another form of representation – pitch control frames” [PAGE 7]; that is a representation step, not proof that the generative model has learned causal movement. Third, temporal leakage: a multi-week evaluation that randomly splits frames will leak future information into training and inflate the apparent quality of the ghost. Fourth, distribution shift across teams, formations, score states, and seasons. The source explicitly says “Model performance heavily relies on the distribution of training data” [PAGE 3], so a multi-week test must be chronological and must report out-of-distribution performance. Fifth, average-error myopia: a generative model can have low mean error while missing multimodal movement choices. Sixth, physical-implausibility drift: long evaluation runs can normalise ghost trajectories that no human could run. Seventh, the empty-results trap: page 9 contains only “Results” [PAGE 9], so no quantitative claim in the deck can be retroactively treated as proven. Eighth, recursive adaptation: over multiple weeks, coaches and players can adapt to the benchmark, so the benchmark’s distribution becomes stale. Any serious evaluation must re-estimate the ghost distribution and re-run context-swap tests rather than freezing one model for a season.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive-theory-of-mind problem is that the ghosting benchmark creates a model of the player, and the player can create a model of the benchmark. Let the evaluator’s belief about the player’s future movement be \(B_E^{(k)}(Y)\), the model’s conditional ghost distribution be \(p_\theta(Y\mid c)\), and the player’s anticipated evaluation be \(B_P^{(k)}(p_\theta)\). At level 0, the player ignores the benchmark. At level 1, the player chooses movement that scores well under the benchmark. At level 2, the evaluator anticipates that adaptation and tests for it. A benchmark that is only validated at level 0 is vulnerable to counter-trap behaviour: the player can produce safe, ghost-like movement that looks statistically typical but does not exploit open space. The deck claims the model can be applied in “analyzing team movement and individual player’s ability of utilizing open space” [PAGE 10], which is exactly the ability most likely to be distorted by counter-trap behaviour.

Crisis habit regression appears when uncertainty is high. Under time pressure, an analyst may regress to familiar supervised metrics such as xG or VAEP because they have established scoring conventions, even though the deck says those models “Cannot answer what-if questions in given context” [PAGE 3]. The ghosting model’s advantage is supposed to be that it “Can answer what-if questions in given context” [PAGE 3], but that advantage is only real if the evaluator resists the habit of treating the ghost’s mean trajectory as the answer. The counter-trap is to overfit evaluation to the ghost: a player who always takes the model-preferred movement is not necessarily optimal; the opponent can anticipate the model. The clock is the prediction horizon \(H\). If \(H\) is too short, the ghost is trivial and measures only immediate reaction. If \(H\) is too long, the ghost distribution becomes broad and the benchmark becomes unfalsifiable. The deck does not specify \(H\) or latency requirements. A valid evaluation must therefore state the decision window in seconds and veto the model if inference latency exceeds that window or if the ghost horizon is not aligned with the tactical question.

A robust recursive protocol would use context swaps, hidden test seasons, and adversarial evaluation. For example, if the context changes from one possession state to another, the ghost distribution should change by a measurable KL divergence in nats; if it does not, the model has failed the what-if claim. If a player’s actual movement scores highly under the ghost but the team’s expected-goal value does not improve, the evaluator must not assume the ghost is correct. The source’s future direction, “combining our method with expected goal model to quantify the value of each decision made within the game” [PAGE 10], must be read as a two-level evaluation: ghost plausibility first, decision value second. The clock and the counter-trap must be checked before the ghost is used as a coaching benchmark.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto must be explicit because the deck spans data, representation, model, and conclusion. The data layer contains “Event Data” and “Tracking Data” [PAGE 6]. The representation layer is “pitch control frames” [PAGE 7]. The model layer is “Trained Generative Model” and “Trained Contextualized CNN” [PAGE 8]. The conclusion layer is the benchmark claim [PAGE 10]. A valid ghost must satisfy necessary conditions at every layer. If any layer fails, the downstream benchmark is vetoed for that frame or context.

Physical veto proof. Let the pitch be \(\mathcal{P}=[0,L]\times[0,W]\) in metres, using the measured pitch dimensions rather than an assumed standard. A generated position \(\hat{\mathbf{q}}\) must satisfy \(\hat{\mathbf{q}}\in\mathcal{P}\). Let \(v_{\max}\) and \(a_{\max}\) be measured or pre-registered bounds in \(\mathrm{m\,s^{-1}}\) and \(\mathrm{m\,s^{-2}}\). If the model outputs positions at times \(t\) and \(t+\Delta\), the finite-difference velocity and acceleration must satisfy
\[
\|\hat{\mathbf{v}}_{t}\|\le v_{\max},
\qquad
\|\hat{\mathbf{a}}_{t}\|\le a_{\max}.
\]
If not, the ghost is physically impossible and is vetoed. The reachable-set condition from the previous section is the proof obligation: \(\hat{\mathbf{q}}_{t+\Delta}\in R_t(\Delta)\). A model that violates this condition cannot be used as a player-movement benchmark because it is asking the player to do something no human can do.

Biomechanical veto proof. The deck outputs “Players' Positions” [PAGE 8]; it does not provide a joint-load or muscle-activation model. Therefore the source cannot support claims about biomechanical efficiency, injury risk, or joint kinematics. The only defensible biomechanical veto is a kinematic one: position sequences must be differentiable into speeds and accelerations that respect human bounds. If the model outputs only positions and the implied acceleration exceeds \(a_{\max}\), the sequence is vetoed. If the model outputs a mean trajectory that is smooth but the sampled trajectories violate bounds, the distribution is vetoed even if the mean passes. This is a necessary-condition proof, not a full biomechanical model.

Weather veto proof. The source contains no weather variable in the data description [PAGE 6] and no weather feature in the representation step [PAGE 7]. Let \(w\) denote a weather state such as dry or wet. Because \(w\) is absent from the model input, the deck’s representation satisfies
\[
C_{1:t}(w=\text{dry})=C_{1:t}(w=\text{wet})
\]
for the same tracking and event data. Therefore a deterministic model gives identical output, and a stochastic model gives the same conditional distribution:
\[
p_\theta(Y\mid C_{1:t},w=\text{dry})
=
p_\theta(Y\mid C_{1:t},w=\text{wet}).
\]
If anyone claims a non-zero weather effect from this model, that claim is unsupported by the source and is vetoed as hallucination. To support weather, the model would need a measured traction or acceleration modifier \(a_{\max}(w)\) and a calibrated weather input. The deck provides neither.

Pitch-control-layer veto proof. The pitch-control field must be a probability: \(P_t(\mathbf{z})\in[0,1]\). If a frame contains values outside this interval, or if the field is not normalised according to the chosen pitch-control definition, the representation is invalid. If the time-to-intercept field is unreachable for a queried point, the control probability is at a singular boundary and should be masked rather than used as a training target. This veto protects the generative model from learning a distorted spatial geometry.

Temporal-layer veto proof. The model must not use future tracking or future event data to predict the future. If \(C_{1:t}\) or \(c_t\) contains any frame after time \(t\), the benchmark is leaked. The source says the model can answer what-if questions [PAGE 3], but a leaked model answers by memorisation. Therefore the cross-layer adjudication must include a chronological split and a future-mask check. If the mask fails, the benchmark conclusion [PAGE 10] is vetoed regardless of model fit.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following three verifiable reward veto scenarios are counterfactual tests. They are designed so that a pass or fail can be recorded without subjective coaching judgement.

Scenario 1: Temporal-leakage veto. Intervention: compare a chronological train-test split against a randomly shuffled frame split. Metric: negative log-likelihood in nats per frame, \(\mathcal{L}_{\mathrm{NLL}}\), or positional RMSE in metres. Prediction: if temporal leakage is present, the shuffled split will show a lower NLL or lower RMSE by a statistically significant margin under a paired bootstrap confidence interval. If the chronological split shows the same performance as the shuffled split, leakage is not supported by the data. Veto rule: if the shuffled split is significantly better, the ghosting benchmark is vetoed because the model has seen future information. This directly tests the source’s what-if claim [PAGE 3] and protects the benchmark claim [PAGE 10].

Scenario 2: Physical-reachability veto. Intervention: generate future ghosts with and without hard reachability constraints. Metric: violation rate
\[
V=\frac{1}{M}\sum_{m=1}^{M}\mathbf{1}\{\hat{\mathbf{q}}_m\notin R_{t_m}(\Delta_m)\},
\]
with pre-registered tolerance \(\epsilon\). Prediction: the unconstrained model will have \(V\gt\epsilon\), while the constrained model will have \(V\le\epsilon\) if the constraints are correctly implemented. Veto rule: if the constrained model still has \(V\gt\epsilon\), the generative model cannot be used as a movement benchmark. If the constraints reduce \(V\) but destroy conditional log score by an unacceptable margin, the model is also vetoed because it is no longer a useful ghosting distribution. This is a necessary physical veto, not a stylistic preference.

Scenario 3: Context-swap sensitivity veto. Intervention: swap a large contextual variable, such as possession team or game state, while holding tracking geometry fixed. Metric:
\[
D_{\mathrm{KL}}\!\left(p_\theta(Y\mid c')\Vert p_\theta(Y\mid c)\right)
\ \mathrm{nats},
\]
or the difference in mean log score for the realised trajectory. Prediction: a non-contextual baseline will have \(D_{\mathrm{KL}}\approx0\), while a genuinely contextualised model will have \(D_{\mathrm{KL}}\gt\delta\) in nats for a pre-registered \(\delta\). Veto rule: if the contextualised model has \(D_{\mathrm{KL}}\le\delta\) under a large context change, it has failed the claim that it “Can answer what-if questions in given context” [PAGE 3]. A pass means the ghost distribution is sensitive to context in a measurable way. A fail means the “Contextualized” part of the title [PAGE 1] is not supported by the model’s behaviour. These three vetoes together test leakage, physical validity, and contextuality, which are the minimum verifiable conditions for the deck’s benchmark proposal.
</RLVR_COUNTERFACTUAL_VETOES>