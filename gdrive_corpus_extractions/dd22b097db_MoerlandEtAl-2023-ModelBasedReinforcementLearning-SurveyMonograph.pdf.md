---
source: "MoerlandEtAl-2023-ModelBasedReinforcementLearning-SurveyMonograph.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-d-models"
pages: 67
model: deepseek/deepseek-v4.1-flash-1017
words: 8708
---

<NATIVE_REASONING>
We need answer user. They gave huge source text, instruction "DRIVE SOURCE..." with pages 67. Need produce GSE+GSI Frontier Reasoning Foundry with exact XML sections. Zero betting lines. Need >=1000 words depth. Need formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes from source pages. Must include sections exact:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Need likely answer should relate to source? The prompt seems generic "GSE + GSI Frontier Reasoning Foundry" likely expects deep analysis of model-based RL survey, maybe "Drive source" with pages. We need produce a comprehensive analysis. They mention "zero betting lines" maybe from sports betting context? But source is model-based RL. Need avoid any betting lines. Need maybe "physical/biomechanical/weather veto proof" odd. Need incorporate layers? We need follow exact sections and cover. We should orient to source: model-based RL survey. The "cross-layer veto" could be evaluating whether claims are physically/biomechanically/weather-vetoed—irrelevant to source, maybe need map to real-world RL deployment constraints? We can interpret "physical/biomechanical/weather veto" as external validity constraints for model-based RL in embodied systems. Need include proof of veto conditions. "Crisis habit regression vs counter-trap vs clock" maybe from trading/betting? We'll adapt to RL: crisis habit regression as policy reverting to model-free habits under distribution shift; counter-trap as learned model exploiting spurious correlations; clock as temporal abstraction/discounting. Need "multi-week traps" in genealogy maybe traps over extended deployment: non-stationarity, model drift, hidden confounders, etc.

Need ensure we cite exact page markers and verbatim quotes. We can quote exact snippets from provided pages. Need not be too many but exact. Need formal LaTeX. Need units. Need assumptions and breakdown regimes. Need at least 1000 words overall; likely we can write ~2500-3500 words. Desired oververbosity 5 but user demands depth. Need meet 1000-word depth. The THINK_TRACE >=400 words alone. We can be thorough.

Need not mention odds/spreads/moneylines. Avoid any betting. "betting lines" category. We can mention "zero betting lines" maybe not. Better not.

Need include formal equations. We can cite:
- Page 3: MDP tuple and Bellman eq.
- Page 4: Q definition, Eq (1)(2)(3). Need maybe quote "Qπ(s, a) ˙=Eπ,T..."? We can quote exact. 
- Page 5: Table 1 distinctions; definitions; "Model-based reinforcement learning is a class of MDP algorithms that 1) use a model, and 2) store a global solution."
- Page 7: tabular MLE Eq (4). Quote "T(s′|s, a) = n(s, a, s′) / ∑ s′ n(s, a, s′)" maybe.
- Page 9: stochasticity, MSE conditional mean. Quote "the network will actually learn to predict the conditional mean of the next state distribution".
- Page 10: uncertainty vs stochasticity; quote "epistemic uncertainty can be reduced by observing more data, while stochasticity can never be reduced."
- Page 13: multi-step prediction, diverging. Quote "accumulating errors may actually cause our multi-step predictions to diverge from the true dynamics."
- Page 14: latent dynamics factorization.
- Page 16-17 temporal abstraction.
- Page 19-20 planning budget: Dyna up to 100, AlphaGo 1600 traces depth 200, 320,000; quote.
- Page 21 gradient planning; value gradients.
- Page 24 uncertainty propagation analytic/sample-based.
- Page 25 planning update value/policy.
- Page 26 MPC; quote "In MPC, we find the greedy action of a k-step lookahead search..."
- Page 31 value equivalent models; quote "Value equivalent models are unrolled inside the computation graph to predict a future value (or action), instead of a future state."
- Page 35 data efficiency: PILCO less than 20 seconds; Dyna 20-40x; quote.
- Page 37 exploration shallow/deep; quote "Shallow exploration methods redecide on their exploratory decision at every timestep." 
- Page 39 Eq (5)(6)(7) intrinsic reward.
- Page 44 regret Eq (8), bounds.
- Page 45-47 summary.

Need maybe formulate our own operators/equations:
- Model-based RL as operator composition:
  Define dynamics model T̂: S×A→Δ(S) with transition probabilities; reward R̂; planning operator P_κ; value/policy learning operator L; real environment E. Overall update:
  \hat{T}_{k+1} = \mathcal{I}(D_k), \quad \pi_{k+1} = \mathcal{L}(\pi_k, Q_k, \mathcal{P}(\hat{T}_{k+1}, s_0, B_k, d_k, b_k)), etc.
  But formal enough.
- Data efficiency ratio: R_{\mathrm{eff}} = N_{\mathrm{real, MF}}/N_{\mathrm{real, MB}} (dimensionless). But source gives 20-40x. Need not invent fake ratio? They said zero toy equations, never invent fake ratios (Force/Fatigue). But data efficiency ratio is source's concept? We can define as observed sample complexity ratio, dimensionless, not fake. Maybe okay but avoid inventing. We can cite source "improved data efficiency of up to 20-40x" [PAGE 35]. Formal.
- Uncertainty: epistemic variance \sigma_e^2, aleatoric \sigma_a^2; total predictive variance. Units depend on state dimension; if scalar state, units squared state units.
- Planning budget: B = I × b, model calls; units: model calls (dimensionless count), time = B * c_call seconds. 
- Return units: reward units per episode.
- Discounted return: J_t = ∑ γ^k r_{t+k}, reward units. γ dimensionless.
- Bellman operator \mathcal{T}Q = R + γ E Q. Contraction in sup norm with factor γ. 
- Breakdown: γ=1 infinite horizon no contraction; model error compounding; T̂ support; non-stationarity; partial observability; etc.

Need "gray-zone audit" in THINK_TRACE: identify ambiguous definitions (model-based RL vs planning over learned model), gray zones like "AlphaZero has known model and global solution, but not model learning"; "planning over learned model is not model-based RL"; "implicit MBRL end-to-end"; "learned model uncertainty." Also boundaries between model-based and model-free with replay buffers. Need multi-hop derivation: from MDP to Bellman to model learning to planning to uncertainty to benefits/traps. Include audit of what source supports vs speculative. Need >400 words.

Need "RETROCAUSAL_GENEALOGY": Historical/scientific lineage and multi-week traps. Trace Samuel 1967 Checkers, Korf LRTA*, Sutton Dyna, Moore & Atkeson prioritized sweeping, Deisenroth PILCO, Silver AlphaGo/AlphaZero, MuZero, etc. Multi-week traps: slow non-stationarity (dynamics change after weeks), model drift, partial observability, stale replay, delayed reward, hidden weather/seasonality in embodied systems. Use pages: [PAGE 5] "principles beneath model-based RL were also discovered... Learning Real-Time A*... Checkers programme by Samuel (1967)." [PAGE 18] etc.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Interpret as agent's internal policy/value and model recursive beliefs. Need address:
- Crisis habit regression: under stress / model uncertainty, agent falls back to model-free habitual policy (fast, low compute). Source dual process theory [PAGE 41] "thinking fast and slow"; global policy/value like fast, planning slow. Need test: when uncertainty rises, planning budget adaptive? [PAGE 20] "humans make a more adaptive trade-off..." 
- Counter-trap: agent's learned model/planner exploits model bias, value-equivalent model may omit transfer-relevant aspects [PAGE 34]. Need recursive ToM: model of self/other? Source doesn't do ToM. We can frame as "meta-model of agent's own planning reliability and adversary/environment's hidden state." Need avoid overclaim. We can say this is a cross-layer extension, not explicit in source; source provides components: uncertainty estimation, partial observability, non-stationarity, hierarchical abstraction. 
- Clock: temporal abstraction/discount/horizon. Need "clock" as planning horizon and temporal abstraction. Source: options, GCVF, temporal abstraction [PAGE 15-17]. Multi-step prediction and horizon. Need mention discount γ and horizon K. 
- Need formal recursive operator? Define agent's meta-belief b_t over model class and own policy reliability. But maybe source lacks. We can present as audit: "source does not formalize recursive ToM; any equations are our synthesis." Need be transparent.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need map to embodied MBRL deployment: if physical constraints, biomechanics, weather cause non-stationarity and partial observability, then model-based plan invalid. Need proof conditions:
- Physical veto: if planned action violates kinematic/dynamic constraints (torque limits, contact, friction cone), plan is infeasible regardless of learned model. Source has safe exploration [PAGE 42-43] and MPC robust to constraints [PAGE 26]. Need quote "MPC is robust to (changing) constraints on the state and action space". 
- Biomechanical veto: if state abstraction omits fatigue/injury or actuator saturation, policy value biased; source says state abstraction, object models; physical priors [PAGE 14]. 
- Weather veto: non-stationarity and partial observability; source [PAGE 12] non-stationarity: true transition/reward change over time; [PAGE 10] partial observability. Need provide adjudication rule: if measured residual e_t = ||s_{t+1} - \hat{T}(s_t,a_t)|| > threshold and persists, veto. Or if safety constraint violation probability > δ. Need equations with units. 
- "proof" maybe formal conditional: If ∃ constraint c(s,a) ≤0 and plan violates, then plan infeasible. If weather changes dynamics T_true ≠ T_model with distribution shift beyond support, Bellman target biased. Need cite exact pages.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Likely. Need propose 3 scenarios where if outcome fails verifiable check, veto model/plan. Need tie to source. Maybe scenarios:
1. Model-predictive plan under uncertainty: verify via held-out multi-step prediction. Veto if n-step error exceeds calibrated bound or divergence. Prediction: uncertainty propagation/ensemble/PETS improves but fails under non-stationarity.
2. Planning budget/adaptive compute: verify asymptotic performance; veto if planning budget fixed high/low vs intermediate. Prediction: intermediate planning budget per real step optimal (source cites Moerland et al. and Wang et al. [PAGE 41]).
3. Partial observability/non-stationarity: verify with recurrent/belief state vs window; veto if model ignores history and switch detection. Prediction: recurrent/partial models reduce error but degrade under long-range stochasticity/non-stationarity. 
Or verification of safe exploration: veto if constraint violation. 
Need exact "3 verifiable RLVR veto scenarios + predictions." For each: scenario, verifier, veto condition, prediction. Use source citations. 
Need maybe include RLVR as "counterfactual veto" where reward is verifiable (e.g., exact constraint or model error) and if fail, reject. Good.

Need ensure no betting. Avoid "lines", "odds", "spread", "moneyline." The user says zero betting lines, maybe "lines" in other context? We can avoid "line" except "lineage" maybe okay? "lineage" not betting. "lower bound" okay. "bound" okay. No sports.

Need maintain exact XML section tags. Could include all sections in order. Use markdown? It's okay inside XML. Need perhaps include title? The final answer should only sections. We can include short preamble? Maybe no. Use exact tags.

Need citations exact [PAGE N] markers. Need verbatim quotes with quotation marks. We can quote snippets. Ensure exact wording from source. Need not quote too many. We should include page citations in each section.

Need write ~3000 words. Need count? We can aim ~3500. Need sections:
1. THINK_TRACE >=400 words. We'll write ~700-900 words.
2. SOURCE_OPERATORS_AND_EQUATIONS ~800 words with equations and citations.
3. RETROCAUSAL_GENEALOGY ~500 words.
4. RECURSIVE_THEORY_OF_MIND ~600 words.
5. CROSS_LAYER_VETO_ADJUDICATION ~600 words.
6. RLVR_COUNTERFACTUAL_VETOES ~600 words.
Total ~3800. Good.

Need formal LaTeX. Use \(...\) or \[...\]. Units: probability in [0,1], reward units, seconds, model calls, dimensionless. For entropy/information: maybe information gain in nats or bits. Source has "information gain" [PAGE 39] but no units. We can specify nats if natural log. Use "bits" if log2; "nats" if ln. Need maybe not use fake. Include assumptions.

Need cite exact page markers and verbatim quotes. Let's collect exact quotes:

Page 2: "We define model-based RL as: ‘any MDP approach that i) uses a model (known or learned) and ii) uses learning to approximate a global value or policy function’."
Page 3: MDP tuple: "The formal definition of a Markov Decision Process (MDP) (Puterman, 2014) is the tuple {S, A, T , R, p(s0), γ}."
Page 4 Eq (2): "Qπ(s, a) = Es′∼T (·|s,a) [ R(s, a, s′) + γ Ea′∼π(·|s′) [ Qπ(s′, a′) ] ]"
Page 5: "Planning is a class of MDP algorithms that 1) use a model and 2) store a local solution." "Reinforcement learning is a class of MDP algorithms that store a global solution." "Model-based reinforcement learning is a class of MDP algorithms that 1) use a model, and 2) store a global solution."
Page 5: "the underlying principles already date back to the Checkers programme by Samuel (1967)."
Page 6: "Model learning is essentially a supervised learning problem"
Page 7 Eq (4): "T(s′|s, a) = n(s, a, s′) / ∑ s′ n(s, a, s′),"
Page 9: "the network will actually learn to predict the conditional mean of the next state distribution"
Page 10: "epistemic uncertainty can be reduced by observing more data, while stochasticity can never be reduced."
Page 11: partial observability methods? "The most popular solution to partial observability is probably the use of recurrent neural networks"
Page 12: "Non-stationarity in an MDP occurs when the true transition and/or reward function change(s) over time."
Page 13: "accumulating errors may actually cause our multi-step predictions to diverge from the true dynamics."
Page 14: "the dynamics model is typically factorized into three parts: i) an encoding function zt = f enc φ (st), ... ii) a latent dynamics function zt+1 = f trans φ (zt, at), ... iii) a decoder function st+1 = f dec φ (zt+1)"
Page 16: "Options are a discrete set of high-level actions." 
Page 19: "The natural first question of planning is: at which state do we start?"
Page 20: "Dyna samples up to a 100 one-step transitions." "AlphaGo Zero does a single MCTS iteration, which consists of 1600 traces, each of approximate depth 200." "320.000" maybe.
Page 21: "Gradient-based planning is especially popular in the robotics and control community, since it requires relatively smooth underlying transition and reward functions."
Page 24: "Analytic: This propagation method fits a parametric distribution to the uncertainty at every timestep" 
Page 26: "In MPC, we find the greedy action of a k-step lookahead search, execute the greedy action, observe the true next state, and repeat the same procedure from there."
Page 31: "Value equivalent models are unrolled inside the computation graph to predict a future value (or action), instead of a future state."
Page 34: "implicit model-based RL is already computationally demanding in itself"
Page 35: "PILCO ... solved a real-world Cartpole problem in less than 20 seconds of experience." "Dyna ... improved data efficiency of up to 20-40x"
Page 37: "Shallow exploration methods redecide on their exploratory decision at every timestep."
Page 39 Eq (5): "rt(s, a, s′) = re(s, a, s′) + η · ri(s, a, s′),"
Page 39 Eq (6): "ri(s, a, s′) ∝1/(1 + n(s, a)),"
Page 41: "global policy or value functions are like ‘thinking fast’, while local planning relates to explicit reasoning and ‘thinking slow’."
Page 44 Eq (8): "Regret(T) = Eπ⋆[∑_{t=1}^T rt] − Eπ[∑_{t=1}^T rt],"
Page 44: lower bound "Ω(√(H|S||A|T))"
Page 45: "model-based RL allows for better PAC/regret bounds than model-free RL, but also suffers from worse (computational) time and space complexity"
Page 47: summary.

Need maybe cite Table 2 categories [PAGE 6]. Page 6 Table 2: "Model-based RL with a known model" etc. Good.

Need avoid "betting lines" even phrase "online"? It contains line? Not betting. Fine.

Need include "exact singularity/breakdown regimes" in SOURCE_OPERATORS_AND_EQUATIONS. We'll list:
- γ=1 and no contraction; infinite horizon with improper policy.
- T̂ support mismatch: if s_{t+k} leaves support D, epistemic uncertainty explodes; no guarantee.
- Non-stationarity: T_true(t) ≠ T_model; prediction error non-vanishing.
- Partial observability: if observation aliases, belief not sufficient; policy can fail.
- Multi-step compounding: error bound can grow; if Lipschitz constant L>1, errors grow geometrically; if L<1 contraction. Formal: ||\hat{s}_{t+n}-s_{t+n}|| ≤ ∑_{i=1}^n L^{i-1} ε_t... Actually recursive e_{t+1} ≤ L e_t + ε, solution e_n ≤ L^n e_0 + ε (L^n -1)/(L-1). Breakdown if L≥1 and ε>0; unbounded as n→∞ if L>1. If L=1 linear growth. Units state units. 
- Planning budget B and compute time; B finite. 
- Regret lower bound; no finite sample guarantee if assumptions broken.

Need maybe "SI units" for state: m, m/s, rad, N·m, etc. We can state for embodied state s∈R^d with mixed units; norm only meaningful after nondimensionalization. Good point: physical units heterogeneous; use normalized state. Probability dimensionless. Reward units arbitrary but keep consistent. Epistemic variance units squared per state coordinate. Time seconds. Model calls counts. Entropy nats. Good.

Need "gray-zone audit" maybe mention "model" definition reversible access [PAGE 4]. Quote "A model is a form of reversible access to the MDP dynamics (known or learned)." Need page 4? It appears page 4: "We call such reversible access to the MDP dynamics a model." Great. This distinguishes model-based vs replay. Need cite.

Need "multi-hop derivation" in THINK_TRACE:
1. MDP tuple → Bellman operator.
2. Model learning = supervised estimation of T,R.
3. Planning = reversible lookahead; model-based RL = model + global solution.
4. Integration choices: start state, budget, planner, loop.
5. Benefits and failure modes.
6. Gray zones: planning over learned model not MBRL; implicit MBRL; known model; replay buffer.
7. Audit: claims supported; ambiguous "model" definition; "learning" overloaded; no consensus on generative model; "not clear yet which approach works best"; "there is no clear consensus yet" [PAGE 9]; "not clear yet which approach works best" [PAGE 25]. Mention these.

Need maybe answer not about sports; but source is RL. Good.

Let's outline final:

<THINK_TRACE>
- Define task: extract operators from survey and audit. Multi-hop.
- Hop 1 MDP.
- Hop 2 model learning.
- Hop 3 planning.
- Hop 4 integration.
- Hop 5 benefits/theory.
- Gray zones: known vs learned model; planning over learned model excluded; implicit MBRL; replay buffers; AlphaZero; uncertainty; partial observability.
- Audit: citations. 
- Note no betting lines.
- Maybe mention "I treat 'crisis habit regression' etc as deployment diagnostics, not source-native terms."
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal definitions and equations.
- Model learning and MLE.
- Bellman operator.
- Planning budget.
- Uncertainty.
- Latent factorization.
- Intrinsic reward.
- Regret.
- Breakdown regimes.
- Page citations and quotes.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- Lineage: Samuel 1967; Korf LRTA* 1990; Sutton 1990/1991 Dyna; Moore & Atkeson 1993; Deisenroth & Rasmussen 2011 PILCO; Silver 2017 AlphaGo Zero; Schrittwieser 2019 MuZero; Grimm 2020 value equivalence; implicit MBRL.
- Multi-week traps: non-stationarity over weeks; model drift; stale replay; partial observability; temporal abstraction mismatch; safety constraints; benchmark overfitting. 
- Page citations.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: dual process; under high uncertainty, agent reverts to model-free/global policy; source says adaptive tradeoff humans [PAGE 20]; think fast/slow [PAGE 41].
- Counter-trap: model exploitation, value-equivalent models omit transfer-relevant aspects [PAGE 34]; planning over uncertain model can exploit errors; need uncertainty propagation and data-close planning [PAGE 23].
- Clock: temporal abstraction, options/GCVF, horizon, discount; source [PAGE 15-17]; multi-step prediction [PAGE 13]; planning depth [PAGE 22].
- Recursive meta-belief: formal but labeled synthesis: b_t over model reliability and own compute; veto if reliability below threshold. 
- Predictions: under crisis, planning budget should adapt; if fixed high, planning may amplify model errors; if fixed low, habit regression.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical: kinematic/dynamic constraints; MPC robust to constraints [PAGE 26]; safety [PAGE 42-43].
- Biomechanical: state abstraction/object models; actuator/fatigue omitted; need constrain; source [PAGE 14] grey-box physics; [PAGE 16] temporal abstraction.
- Weather: non-stationarity [PAGE 12]; partial observability [PAGE 10]; model support; uncertainty propagation [PAGE 24].
- Proof conditions: if c(s,a)>0 or constraint violation probability > δ, veto. If residual e_t > ε for τ steps, veto. If T_true outside model class, no guarantee. 
- Adjudication rule with equations.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
- Scenario 1: Multi-step rollout verifier; veto if n-step error exceeds calibrated threshold; prediction: one-step models fail under long-horizon; multi-step losses/separate n-step models mitigate but not eliminate. Cite [PAGE 13].
- Scenario 2: Non-stationarity/regime switch verifier; veto if prediction error jump and partial models not switching; prediction: partial models/decay old data help; fixed model degrades. Cite [PAGE 12].
- Scenario 3: Planning budget verifier; veto if high planning budget with uncertain learned model; prediction: intermediate budget optimal; high budget overfits model errors; no budget model-free unstable. Cite [PAGE 41] "optimal performance requires an intermediate planning budget per real step".
- Maybe include safety verifier as scenario? Need exactly 3. Good.
</RLVR_COUNTERFACTUAL_VETOES>

Need ensure >=1000 words. We'll write detailed. Use "RLVR" maybe "Reinforcement Learning with Verifiable Rewards" but source doesn't mention. Define as "I operationalize RLVR as ..." Good.

Need avoid "lines". "lineage" okay. "bound" okay. "lower bound" okay. "online" okay. "guideline" contains line? Hmm "betting lines" specifically. But to be safe avoid "line" except "lineage" maybe. "underlying" okay. "linear" okay. "line" in "lineage" not betting. "outline" maybe. Avoid "line" standalone. "line of research" maybe okay but contains line. I can avoid.

Need quote exact with [PAGE N]. Use citation immediately after quote. For direct quotes, use quotation marks and page marker. Need not overquote but enough.

Let's draft carefully.

Potential issue: User says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We need exact [PAGE N] markers, not [PAGE 2-3]? Should be individual. Use [PAGE 2], [PAGE 3], etc. If quote spans pages, use two markers. Need exact.

Need "Formal LaTeX, units, page citations, breakdown." We'll include units in parentheses.

Need "exact singularity/breakdown regimes." We'll label.

Need "Crisis habit regression vs counter-trap vs clock" in RECURSIVE_THEORY_OF_MIND. We'll use subheadings.

Need "Physical/biomechanical/weather veto proof." We'll use equations:
- Feasibility: \mathcal{C} = \{ (s,a): c_j(s,a) ≤ 0, j=1..m \}. Plan feasible iff ∀k a_{t+k}∈... If not, veto. 
- Safety probability: P(∃k c_j(s_{t+k},a_{t+k})>0 | plan) ≤ δ. 
- Residual: e_t = || y_{t+1} - \hat{T}(s_t,a_t)||_W; veto if e_t > κ σ_t or persistence. Units: if W nondimensionalizes, e_t dimensionless. 
- Weather: T_true(t) ≠ T_model; if change point detected with posterior probability > threshold, veto plan until model update.

Need "Source operators and equations" maybe include operator composition:
\[
\mathcal{B}_{\hat T,\hat R} Q(s,a) = \mathbb{E}_{s'\sim \hat T(\cdot|s,a)}[\hat R(s,a,s') + \gamma \mathbb{E}_{a'\sim \pi} Q(s',a')].
\]
Units reward units. Contraction if γ<1.
Planning operator \(\mathcal{P}_{B,d,b,\hat T,\hat R,\pi,Q}\) returns plan/targets. Not source exactly but formalization. We can state "synthesis notation."

Need maybe mention "data efficiency" equation:
\[
\rho_{\mathrm{sample}} = \frac{N_{\mathrm{real}}^{\mathrm{MF}}}{N_{\mathrm{real}}^{\mathrm{MB}}} \quad \text{(dimensionless)}
\]
Source reports up to 20-40x [PAGE 35]. Is this a "fake ratio"? It's a ratio of sample complexities, not toy. Fine.
But the invariant says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." A sample efficiency ratio is real, source mentions "improved data efficiency of up to 20-40x". We can use it carefully.

Need "information/probability units" maybe in uncertainty section:
- Entropy \(H(S') = -\sum p \log_2 p\) bits or \(-\sum p \ln p\) nats.
- Epistemic variance \(\sigma_e^2\) in (state units)^2.
- Safety probability dimensionless.
- Regret in reward units.
- Planning budget in model calls (count).
- Time in seconds.
- Discount dimensionless.
Good.

Need not use "odds" or "spread". "spread" maybe appears in "predictions start to spread out over state space" quote? That's a verbatim quote but not betting. The user says zero betting lines, not zero word "spread". But to be safe, if quoting source "predictions will start to spread out over state space" includes spread. It's not a betting line. Fine.

Need maybe mention "no betting lines" in final? The invariant says never mention spreads, totals, moneylines, or odds. We should not mention "betting" either? It says zero betting lines; mentioning "no betting lines" might be okay but avoid. Do not use "odds", "moneyline", "spread", "total". "Totals" in "total reward" is not betting? The word "total" could be okay but to be safe use "aggregate" or "cumulative". We can use "total" in equations? It says totals maybe betting. Avoid "total" if possible. Use "cumulative", "sum". In RL source "total reward" maybe but avoid. "Total planning effort" could be okay but avoid. Use "aggregate planning effort". Avoid "total". "moneylines" no. "spread" no except maybe "spread out" quote; avoid quote with spread. Good.

Need maybe avoid "lines" completely. We can use "lineage" okay but contains line. Hmm. The rule is zero betting lines, not zero substring. But to be ultra safe, use "genealogy" instead of "lineage" in section title already has genealogy. Avoid "lineage" text. Use "genealogy". Good. Avoid "outline", "guideline". "Underlying" okay. "linear" okay. "linearize" okay. "line" not needed.

Need answer in XML exactly. No extra outside. Let's compose.

Need quote "Planning is a class of MDP algorithms that 1) use a model and 2) store a local solution." exact? Source says "Planning is a class of MDP algorithms that 1) use a model and 2) store a local solution." Yes [PAGE 5].
Quote "Reinforcement learning is a class of MDP algorithms that store a global solution." [PAGE 5].
Quote "Model-based reinforcement learning is a class of MDP algorithms that 1) use a model, and 2) store a global solution." [PAGE 5].
Good.

Need quote "A model is a form of reversible access to the MDP dynamics (known or learned)." [PAGE 4]. It says "A model is a form of reversible access to the MDP dynamics (known or learned)." yes.

Need quote "planning over a learned model’ is not considered model-based RL, since it does not learn a global solution to the problem" [PAGE 5]. Good for gray zone.

Need quote "The reader may wish to skip some of these section if the particular challenge is not relevant..." not needed.

Need quote "there is no clear consensus yet which deep generative modeling approach works best." [PAGE 9]. Good.
Need quote "it is not clear yet which approach works best." [PAGE 25]. Good.

Need quote "model-based RL allows for better PAC/regret bounds than model-free RL, but also suffers from worse (computational) time and space complexity" [PAGE 45]. Good.

Need quote "optimal performance requires an intermediate planning budget per real step" [PAGE 41]. Exact? Source: "finding that optimal performance requires an intermediate planning budget per real step, and not a high budget (exhaustive search), or no planning budget per timestep at all (model-free RL)." Yes [PAGE 41].
Need quote "Shallow exploration methods redecide on their exploratory decision at every timestep." [PAGE 37].
Need quote "Value equivalent models are unrolled inside the computation graph to predict a future value (or action), instead of a future state." [PAGE 31].
Need quote "Non-stationarity in an MDP occurs when the true transition and/or reward function change(s) over time." [PAGE 12].
Need quote "The most popular solution to partial observability is probably the use of recurrent neural networks" [PAGE 11].
Need quote "MPC is robust to (changing) constraints on the state and action space" [PAGE 26]. Exact? Source: "MPC is robust to (changing) constraints on the state and action space (Kamthe and Deisenroth, 2017)" yes.
Need quote "model-based safe exploration approach based on the notion of asymptotic stability" [PAGE 43]. Good.
Need quote "We may also use uncertainty to determine the depth of our value estimates." [PAGE 24]. Good.

Need "formal equations" with labels:
\[
\mathcal{T}Q(s,a) = \mathbb{E}_{s'\sim T(\cdot|s,a)}\left[R(s,a,s') + \gamma \mathbb{E}_{a'\sim \pi(\cdot|s')} Q(s',a')\right].
\]
Note source uses Qπ. Good.
\[
\hat T(s'|s,a) = \frac{n(s,a,s')}{\sum_{s'} n(s,a,s')}
\]
Units: probability per state; numerator counts dimensionless; denominator counts. Good.
\[
e_n \le L^n e_0 + \epsilon \frac{L^n-1}{L-1}
\]
for L≠1; if L=1, e_n ≤ e_0 + nε. Units: state units if e in state units; L dimensionless Lipschitz. Breakdown: L>1 and ε>0 → exponential; L=1 linear. Good.
\[
B = N_{\text{iter}} b_{\text{iter}} \quad [\text{model calls}]
\]
Dyna 100; AlphaGo ~320,000 [PAGE 20]. Good.
\[
r_t = r_t^e + \eta r_t^i
\]
Units reward units; η dimensionless. Eq (5) [PAGE 39].
\[
\mathrm{Regret}(T) = \mathbb{E}_{\pi^\star}[\sum_{t=1}^T r_t] - \mathbb{E}_{\pi}[\sum_{t=1}^T r_t]
\]
reward units [PAGE 44].
\[
\Omega(\sqrt{H|S||A|T})
\]
units? H steps, |S||A| dimensionless, T steps; product has steps^2? Actually regret bound units reward? The expression inside sqrt has H|S||A|T; if r dimensionless then okay. We can say under bounded-reward normalization. Good.

Need "singularity/breakdown regimes" maybe list:
1. γ→1 with no termination: Bellman contraction fails; value iteration may not converge without proper policy. Source uses γ∈[0,1] [PAGE 4]; at γ=1 infinite horizon, no contraction.
2. Model support: if planned state leaves D, \(\hat T\) extrapolates; epistemic uncertainty; breakdown.
3. Non-stationarity: T(t) changes; residual nonstationary; stale data.
4. Partial observability: observation aliasing; belief state omitted; policy not Markov.
5. Multi-step rollout: L≥1; compounding.
6. Planning budget: B→∞ with wrong model → model exploitation; B→0 → model-free habit; intermediate.
7. Regret bounds: assumptions fail; no guarantee.
Need mention "exact" maybe.

Need "CROSS_LAYER" proof: We can include a formal veto predicate:
\[
\mathrm{VETO}_{\mathrm{phys}}(plan) = 1 \iff \exists k\in\{0,\dots,H-1\}: \max_j c_j(s_{t+k},a_{t+k}) > 0.
\]
Units: c_j in physical units (m, rad, N·m); after normalization dimensionless. 
Weather:
\[
\mathrm{VETO}_{\mathrm{weather}} = 1 \iff \Pr(\text{change-point at }t\mid \mathcal{D}_{1:t}) > \tau \ \text{or}\ \|\hat T(s_t,a_t)-s_{t+1}\|_W > \kappa.
\]
Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe formal:
Let \(b_t(m)\) be agent's meta-belief that model \(m\) is reliable given history. Let \(u_t = H(b_t)\) entropy (bits/nats). If \(u_t > u^\star\), increase planning/exploration; if \(u_t\) low, exploit habit. Crisis habit regression is when \(u_t\) high but compute budget \(B_t\) fixed low or policy entropy collapses. Counter-trap is when \(u_t\) low due to overconfident model but true error high; value-equivalent models can be overconfident because optimized for value [PAGE 31, 34]. Clock: planning horizon \(H_t\) and discount \(\gamma_t\). Good.
Need maybe "counter-trap" as "model-based counterfactual trap" not source. We can say "I use 'counter-trap' as a diagnostic label for a source-supported failure: model exploitation under uncertainty." Good.

Need "RLVR counterfactual vetoes":
Define RLVR verifier \(V(\tau)\in\{0,1\}\). We can state "RLVR = reinforcement learning with verifiable rewards; I use it as a formal filter." 
Scenario 1:
- Verifier: hold out \(n\)-step transitions. Compute normalized rollout error \(E_n = \frac{1}{N}\sum \|\hat s_{t+n}-s_{t+n}\|_W\). Veto if \(E_n > \kappa \sigma_n\) or \(E_n\) increases monotonically with n. Prediction: one-step models fail; multi-step losses/separate n-step models reduce but do not remove; source [PAGE 13] says accumulating errors may diverge; [PAGE 24] uncertainty propagation helps.
Scenario 2:
- Verifier: change-point detection on residuals. Veto if posterior change probability > τ and model not switched. Prediction: partial models detect regime switch and improve; fixed model degrades. Source [PAGE 12].
Scenario 3:
- Verifier: planning budget vs performance. Veto if high budget \(B\) with learned model yields lower held-out return than intermediate \(B\) or if variance of Q high. Prediction: intermediate budget optimal; high budget overfits model; no budget unstable. Source [PAGE 41], [PAGE 20] adaptive tradeoff.
Need "3 verifiable RLVR veto scenarios + predictions" exactly.

Need maybe include "multi-week traps" in RETROCAUSAL: e.g., "week 1 model fit; week 2-3 non-stationarity; week 4 stale replay; week 5 partial observability; week 6 safety constraints." Good.

Need ensure final answer not too verbose but enough.

Let's write final now. Use exact XML. Ensure no extra headings outside. 

Need mention "I do not use any wagering or external outcome claims."? Maybe not. Avoid mention.

Let's draft with care.

Potential issue: "The user asked 'DRIVE SOURCE' maybe wants analysis of source as if model betting? But no. Our answer is meta-analysis of MBRL. Good.

Need not mention "GSE/GSI" too much. Maybe first line in THINK_TRACE: "This audit treats the supplied survey as the sole source." Good.

Need word count. Let's write around 3500 words. Need not count exactly but >1000. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
This audit treats the supplied 67-page survey as the sole source and performs a multi-hop derivation rather than a topical summary. Hop 1: the survey starts from the MDP tuple \(\{S,A,T,R,p(s_0),\gamma\}\) [PAGE 3] and defines the action-value function through the Bellman recursion [PAGE 4]. That fixes the object being estimated: \(Q^\pi(s,a)\) is an expectation over stochastic transitions and policies, measured in reward units, with \(\gamma\) dimensionless. Hop 2: model-based RL adds a model, defined as “a form of reversible access to the MDP dynamics (known or learned)” [PAGE 4], so the agent can query counterfactual state-action pairs rather than only advance irreversibly through the real environment. Hop 3: model learning is treated as supervised learning [PAGE 6], with the tabular maximum-likelihood estimator normalized by observed transition counts [PAGE 7]. Hop 4: planning is defined as using a model and storing a local solution, while reinforcement learning stores a global solution; model-based RL is the conjunction of a model and a global learned solution [PAGE 5]. Hop 5: planning-learning integration is decomposed into start state, budget, planning method, and integration into the learning/acting loop [PAGE 18], and the survey explicitly says “planning over a learned model” is not model-based RL if no global solution is learned [PAGE 5]. Hop 6: benefits and failure modes follow from the same structure: data efficiency, exploration, asymptotic performance, transfer, safety, explainability, and disbenefits such as computation, instability, memory, and extra hyperparameters [PAGE 35–43].

The gray-zone audit matters because the survey’s definitions are deliberately non-identical to common usage. AlphaZero is treated as model-based RL with a known model because it uses reversible access plus a global policy/value function [PAGE 5]. Dyna is model-based RL with a learned model [PAGE 5]. Embed2Control is “planning over a learned model” rather than model-based RL because it lacks a learned global solution [PAGE 5]. Replay buffers are described as non-parametric tabular-like transition models, and the survey says “the line between model-based RL and replay buffer methods is indeed thin” [PAGE 8]. Implicit model-based RL is a further gray zone: it wraps model learning and planning into a differentiable computation graph optimized for value or action prediction [PAGE 29–31]. The survey itself flags unresolved uncertainty: deep generative modeling has “no clear consensus yet which deep generative modeling approach works best” [PAGE 9], and policy-prior integration has “not clear yet which approach works best” [PAGE 25]. Therefore any strong claim that one integration pattern dominates is not supported by the source; the supported claim is conditional on task, model class, uncertainty handling, and compute budget.

The most important multi-hop derivation is the uncertainty chain. A learned model \(\hat T\) is fit to finite data; epistemic uncertainty can be reduced by more data, while stochasticity cannot [PAGE 10]. If the planner rolls out \(\hat T\) for \(n\) steps, one-step errors are fed back into the model; the survey warns that “accumulating errors may actually cause our multi-step predictions to diverge from the true dynamics” [PAGE 13]. Thus planning depth is not a free parameter: deeper planning can improve credit assignment but increases exposure to model error. The survey’s countermeasures are data-close planning and uncertainty propagation, including analytic and sample-based particle propagation [PAGE 23–24]. This chain also explains why a high planning budget can be harmful with a learned model: the planner may exploit model error, whereas a known model can support large search budgets such as AlphaGo Zero’s single MCTS iteration with 1600 traces of approximate depth 200, about 320,000 model calls [PAGE 20]. The survey reports that optimal performance can require an intermediate planning budget per real step, not exhaustive search and not zero planning [PAGE 41]. That is a key gray-zone conclusion: more planning is not monotonically better once the model is learned and uncertain.

A second gray-zone issue is partial observability versus stochasticity. The survey distinguishes fundamental transition noise from missing observation information; partial observability “can partially be mitigated by incorporating information from previous observations” [PAGE 10]. The proposed mechanisms are windowing, belief states, recurrence, and external memory [PAGE 11]. If the agent ignores history, a Markov policy over aliased observations can fail even if the transition model is good. A third gray zone is non-stationarity: the true transition and/or reward function can change over time [PAGE 12], so a model that was valid in one regime can become invalid without any increase in ordinary aleatoric noise. The survey’s partial-models and regime-switch detection ideas address this, but they do not make the problem disappear; they add detection and adaptation requirements.

I therefore separate source-supported operators from diagnostic labels used later. “Crisis habit regression,” “counter-trap,” and “clock” are not source-native terms; I use them as deployment diagnostics for source-supported failure modes: fallback to model-free habit under high uncertainty, model exploitation under overconfident value-equivalent models, and horizon/temporal-abstraction mismatch. The equations below are formalizations of the survey’s objects, with units and breakdown regimes made explicit.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines the MDP tuple as \(\{S,A,T,R,p(s_0),\gamma\}\), with transition function \(T:S\times A\to p(S)\), reward function \(R:S\times A\times S\to\mathbb R\), and discount \(\gamma\in[0,1]\) [PAGE 3]. The action-value function is
\[
Q^\pi(s,a)=\mathbb E_{\pi,T}\left[\sum_{k=0}^{K}\gamma^k r_{t+k}\,\middle|\,s_t=s,a_t=a\right],
\]
in reward units, with \(\gamma\) dimensionless and \(K\) a horizon count [PAGE 4]. The Bellman recursion is
\[
Q^\pi(s,a)=\mathbb E_{s'\sim T(\cdot\mid s,a)}
\left[
R(s,a,s')+\gamma\,\mathbb E_{a'\sim\pi(\cdot\mid s')}Q^\pi(s',a')
\right],
\]
also in reward units [PAGE 4]. The optimal policy is \(\pi^\star=\arg\max_\pi Q^\pi(s,a)\) [PAGE 4]. These are the source operators; they assume a well-defined Markov state, a stationary transition/reward kernel, and a proper discount or finite horizon. Breakdown regimes: if \(\gamma\to1\) with an infinite horizon and no termination/absorption structure, the Bellman operator need not be a contraction in sup norm; if the observation is not Markov, the recursion is biased; if \(T\) changes with time, the expectation is non-stationary.

Model learning is “essentially a supervised learning problem” [PAGE 6]. For a tabular stochastic model, the maximum-likelihood estimate is
\[
\hat T(s'\mid s,a)=\frac{n(s,a,s')}{\sum_{s'}n(s,a,s')},
\]
where \(n(s,a,s')\) is a transition count; the numerator and denominator are dimensionless counts, and \(\hat T\) is a probability per next state [PAGE 7]. Assumption: discrete or discretized state space and sufficient visitation. Breakdown: sparse counts produce high variance; continuous/high-dimensional states make the table scale exponentially, the curse of dimensionality noted on [PAGE 8]. For function approximation, the survey warns that a deterministic neural network trained with mean-squared error “will actually learn to predict the conditional mean of the next state distribution” [PAGE 9], which is incorrect for multimodal stochasticity. The epistemic/aleatoric distinction is explicit: “epistemic uncertainty can be reduced by observing more data, while stochasticity can never be reduced” [PAGE 10]. If \(s\in\mathbb R^d\) with mixed physical units, norms require non-dimensionalization; otherwise variances carry squared mixture units such as \(\mathrm{m}^2\), \(\mathrm{rad}^2\), or \((\mathrm{m/s})^2\) per coordinate.

The planning budget operator is usefully counted in model calls. If a planning cycle has \(N_{\mathrm{iter}}\) iterations and each iteration uses \(b_{\mathrm{iter}}\) model calls, then
\[
B=N_{\mathrm{iter}}\,b_{\mathrm{iter}}\quad[\text{model calls}],
\]
and wall-clock planning time is approximately \(B\,c_{\mathrm{call}}\) seconds, where \(c_{\mathrm{call}}\) is seconds per model call. The survey gives Dyna up to 100 one-step transitions per real step and AlphaGo Zero about \(1600\times200=320{,}000\) model calls per real step [PAGE 20]. Assumption: model calls are the dominant cost. Breakdown: neural-network evaluation, tree management, and uncertainty propagation can dominate \(c_{\mathrm{call}}\), so model-call counts are only an intermediate measure; the survey also distinguishes real-world sample complexity, model sample complexity, and computational complexity [PAGE 34].

The latent state-abstraction operator is factorized as
\[
z_t=f^{\mathrm{enc}}_\phi(s_t),\qquad
z_{t+1}=f^{\mathrm{trans}}_\phi(z_t,a_t),\qquad
\hat s_{t+1}=f^{\mathrm{dec}}_\phi(z_{t+1}),
\]
where \(z_t\) is a latent vector, \(f^{\mathrm{enc}}\) maps observations to latents, \(f^{\mathrm{trans}}\) is the latent dynamics, and \(f^{\mathrm{dec}}\) decodes back to observation space [PAGE 14]. Assumption: the latent dynamics are Markov and the prediction remains in the same embedding space. Breakdown: if the predicted latent leaves the encoded data manifold, latent planning can diverge; the survey notes that repeated feeding of latent predictions into the latent dynamics can lead to predictions that diverge from the truth unless an additional consistency loss or probabilistic state-space model is used [PAGE 14].

For intrinsic motivation, the survey writes a combined reward
\[
r_t(s,a,s')=r^e_t(s,a,s')+\eta\,r^i_t(s,a,s'),
\]
where \(r^e\) is external reward, \(r^i\) is intrinsic reward, and \(\eta\in\mathbb R\) controls relative strength [PAGE 39]. Both reward terms are in reward units; \(\eta\) is dimensionless if the rewards share units. A novelty example is
\[
r^i(s,a,s')\propto \frac{1}{1+n(s,a)},
\]
with \(n(s,a)\) a visit count [PAGE 39]. Assumption: the intrinsic reward is bounded and task-conflated back-ups are acceptable. Breakdown: a large intrinsic bonus can dominate the external task; after novelty decays, its effect can persist in the global value function, which is why the survey discusses task-separated back-ups [PAGE 38].

For theory, regret is
\[
\mathrm{Regret}(T)=\mathbb E_{\pi^\star}\left[\sum_{t=1}^{T}r_t\right]-\mathbb E_{\pi}\left[\sum_{t=1}^{T}r_t\right],
\]
in reward units [PAGE 44]. The source reports lower bound \(\Omega(\sqrt{H|S||A|T})\) and model-based upper bounds such as \(\tilde O(H|S|\sqrt{|A|T})\) for UCRL2 [PAGE 44]. These are asymptotic guarantees under bounded-reward normalization, finite state/action spaces, and specific exploration assumptions. Breakdown: if the model class is misspecified, if non-stationarity violates the stationary MDP assumption, or if planning is truncated without accounting for uncertainty, the bound does not transfer to the deployed system. The survey itself concludes: “model-based RL allows for better PAC/regret bounds than model-free RL, but also suffers from worse (computational) time and space complexity” [PAGE 45].

Multi-step error propagation can be bounded heuristically by a Lipschitz recursion. Let \(e_n=\|\hat s_{t+n}-s_{t+n}\|\) in state units and let \(L\) be a dimensionless Lipschitz constant of the learned dynamics. Then
\[
e_n\le L^n e_0+\epsilon\frac{L^n-1}{L-1}\quad(L\ne1),
\]
or \(e_n\le e_0+n\epsilon\) when \(L=1\), where \(\epsilon\) is one-step model error in state units. Breakdown regime: if \(L>1\) and \(\epsilon>0\), the error can grow exponentially with depth; if \(L=1\), it grows at least linearly. This formalizes the survey’s warning that “accumulating errors may actually cause our multi-step predictions to diverge from the true dynamics” [PAGE 13]. It also explains why uncertainty propagation and data-close planning are not optional decorations when planning over learned models [PAGE 23–24].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific genealogy in the survey runs from Samuel’s checkers program through real-time heuristic search, Dyna-style integrated architectures, prioritized sweeping, Gaussian-process model-based control, deep model-based RL, and value-equivalent/implicit model-based RL. The survey says the principles beneath model-based RL “already date back to the Checkers programme by Samuel (1967)” and were also discovered in the planning community as Learning Real-Time A* (Korf, 1990) [PAGE 5]. Sutton’s Dyna is the canonical learned-model plus global-solution architecture [PAGE 5], and the survey later uses Dyna as the example of up to 100 one-step planning transitions per real step [PAGE 20]. Prioritized sweeping is the backward-direction counterpart: it uses a reverse model to identify possible precursors of states whose value estimates changed, thereby propagating information backward [PAGE 21]. The survey notes that prioritized sweeping has shown benefit with tabular models but can be unstable with function approximation [PAGE 21]. PILCO is the Gaussian-process, uncertainty-aware data-efficiency landmark; the survey reports that PILCO “solved a real-world Cartpole problem in less than 20 seconds of experience” [PAGE 35]. AlphaGo Zero is the known-model, large-budget search landmark, and the survey uses it to illustrate a single planning iteration with approximately 320,000 model calls [PAGE 20]. MuZero and value-equivalent models shift the objective from next-state prediction to value-relevant prediction: “Value equivalent models are unrolled inside the computation graph to predict a future value (or action), instead of a future state” [PAGE 31]. Implicit model-based RL then goes further by optimizing planning operations themselves, as in MCTSNet, I2A, IBP, TreeQN, and DRC [PAGE 33–34].

The multi-week traps follow from this genealogy. Week 1 trap: one-step supervised fit looks good, but multi-step rollout error grows; the survey’s warning about divergence [PAGE 13] predicts that a model validated only on one-step prediction can fail after several planning depths. Week 2–3 trap: non-stationarity. The true transition/reward function changes over time [PAGE 12], so a model trained on early data can become stale; partial models and regime-switch detection help, but only if the switch is detected and the old data are down-weighted or separated. Week 3–4 trap: partial observability. A windowed or recurrent model can mitigate aliasing [PAGE 10–11], but if the history length or memory is too short, the agent’s belief is not sufficient and planning is systematically biased. Week 4–5 trap: replay/model staleness. Replay buffers are described as close to non-parametric transition models [PAGE 8], so a replay buffer that mixes regimes without prioritization or recency handling can act like a stale model. Week 5–6 trap: temporal-abstraction mismatch. Options and goal-conditioned value functions can shorten effective horizons [PAGE 15–17], but if the abstract action’s termination conditions are mis-specified, the high-level planner can commit to a subroutine that no longer reaches the intended subgoal. Week 6+ trap: safety and constraint drift. MPC is robust to changing state/action constraints [PAGE 26], but only if the constraints are represented; safe exploration with stability guarantees [PAGE 43] requires an explicit safe region and verification model. The genealogical lesson is that each generation solved a different bottleneck—search, data efficiency, uncertainty, value relevance, end-to-end optimization—but no generation eliminated the need for regime detection, uncertainty handling, and constraint representation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
I use “recursive theory of mind” here as an agent’s meta-representation of its own model reliability, its own planning reliability, and the environment’s hidden regime. The survey does not formalize recursive theory of mind, but it supplies the necessary components: uncertainty estimation [PAGE 10], partial observability and belief/recurrent state [PAGE 10–11], non-stationarity and regime switching [PAGE 12], adaptive planning budgets [PAGE 20], and dual-process “thinking fast and slow” [PAGE 41]. A formal synthesis is to let \(b_t(m)\) be the agent’s meta-belief that model \(m\) is reliable given history \(\mathcal D_{1:t}\), with entropy
\[
H(b_t)=-\sum_m b_t(m)\log b_t(m)
\]
in bits if \(\log_2\) or nats if \(\ln\). A high-entropy meta-belief means the agent should increase information-gathering or planning caution; a low-entropy but wrong meta-belief means overconfidence. The survey’s epistemic/aleatoric distinction [PAGE 10] supports the first part; its warning that value-equivalent models may not capture all relevant aspects and may be problematic for transfer [PAGE 34] supports the overconfidence risk.

Crisis habit regression: under high uncertainty or computational stress, the agent may fall back to a global policy/value function without planning. The survey’s dual-process framing says global policy or value functions are like “thinking fast,” while local planning is “thinking slow” [PAGE 41]. That is not a defect by itself; it is a compute-allocation strategy. The failure mode is a fixed low planning budget when the model is unreliable, so the agent exploits a stale habit. Prediction: if uncertainty \(H(b_t)\) rises but the planning budget \(B_t\) stays fixed low, performance should degrade relative to an adaptive budget that increases planning or exploration when meta-belief entropy is high. The survey notes that humans “make a more adaptive trade-off” in deciding when to start planning and how much time to spend [PAGE 20], which is the counterfactual benchmark.

Counter-trap: the opposite failure is overconfident model exploitation. A value-equivalent model is optimized for value prediction, not for full state prediction [PAGE 31], so it may omit transfer-relevant or safety-relevant aspects [PAGE 34]. If the planner trusts it too much, it can select actions that look high-value inside the model but fail outside it. The survey’s countermeasures are data-close planning and uncertainty propagation [PAGE 23–24], plus uncertainty-aware value targets such as STEVE [PAGE 24]. Prediction: a high planning budget with an overconfident learned model should produce lower held-out return than an intermediate budget with uncertainty penalties; this is consistent with the survey’s report that “optimal performance requires an intermediate planning budget per real step” [PAGE 41]. The recursive test is whether the agent’s confidence tracks actual held-out error; if confidence is low-entropy while residual error is high, the counter-trap is active.

Clock: the agent’s planning horizon and temporal abstraction define its subjective clock. The survey defines options with initiation set, sub-policy, and termination probability [PAGE 15–16], and goal-conditioned value functions with a goal space as abstract action space [PAGE 16]. Temporal abstraction “directly implies multi-step prediction” [PAGE 7], so the clock is coupled to model error. If the horizon is too short, the agent is myopic; if too long, model error compounds. The survey’s depth choices—depth 1, intermediate, adaptive, full—are the clock settings [PAGE 22]. Prediction: under high model uncertainty, adaptive depth that shortens when uncertainty rises should beat fixed full-depth planning; under low uncertainty, deeper planning should help. The recursive theory-of-mind condition is that the agent’s clock should be a function of its meta-belief \(b_t\), not a fixed hyperparameter. The survey explicitly lists balancing planning, learning, and real data collection as an open future direction [PAGE 46–47].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto proof: a plan is physically infeasible if it violates a hard constraint. Let \(c_j(s,a)\le0\) for \(j=1,\dots,m\) be kinematic, dynamic, torque, contact, friction, or actuator constraints, with each \(c_j\) expressed in consistent physical units and then non-dimensionalized. Define
\[
\mathrm{VETO}_{\mathrm{phys}}(\text{plan})=1
\iff
\exists k\in\{0,\dots,H-1\},\ \exists j:\ c_j(s_{t+k},a_{t+k})>0.
\]
If \(\mathrm{VETO}_{\mathrm{phys}}=1\), the plan is invalid regardless of its predicted value. The survey supports the representational requirement: MPC “is robust to (changing) constraints on the state and action space” [PAGE 26], and safe model-based exploration can use stability guarantees and safe-region return constraints [PAGE 43]. The proof obligation is not that the learned model is perfect; it is that the constraint set is explicit and checked on the planned trajectory. Breakdown regime: if the constraints are only learned implicitly from data, or if the planner’s horizon is shorter than the time at which the constraint violation occurs, the veto is incomplete.

Biomechanical veto proof: an embodied agent’s state abstraction must include variables that materially affect actuation and safety, such as fatigue, temperature, joint limits, contact state, and actuator saturation. The survey’s state-abstraction section factorizes observations into latent encodings and latent dynamics [PAGE 14], and its grey-box discussion allows known physics to be embedded while free parameters are learned [PAGE 14]. That supports a biomechanical veto: if a latent variable \(z_t\) omits a variable that changes the feasible action set, then the planned latent transition can be dynamically valid in \(z\)-space but invalid in physical space. A practical predicate is
\[
\mathrm{VETO}_{\mathrm{bio}}(\text{plan})=1
\iff
\Pr(\text{actuator saturation or unsafe load within }H\mid \text{plan})>\delta,
\]
where \(\delta\) is a dimensionless risk tolerance and the probability is over model uncertainty. The survey’s uncertainty estimation and propagation machinery [PAGE 10, 24] is what makes this probability estimable; without it, the veto is only a heuristic. Breakdown: if the biomechanical variable is unobserved and not recurrently inferred, the agent cannot know it is in a degraded regime.

Weather veto proof: weather is a physical driver of non-stationarity and partial observability. The survey defines non-stationarity as the true transition and/or reward function changing over time [PAGE 12], and partial observability as the current observation not providing all information about the ground-truth state [PAGE 10]. A weather veto is therefore a change-point and out-of-support test:
\[
\mathrm{VETO}_{\mathrm{weather}}=1
\iff
\Pr(\text{change point at }t\mid\mathcal D_{1:t})>\tau
\ \text{or}\
\|\hat T(s_t,a_t)-s_{t+1}\|_W>\kappa,
\]
where \(\tau\) is a dimensionless posterior threshold, \(\kappa\) is a normalized residual threshold, and \(\|\cdot\|_W\) is a weighted norm after non-dimensionalization. If the plan’s future states leave the observed support of \(\hat T\), the model is extrapolating; the survey’s data-close planning and uncertainty propagation are the relevant mitigations [PAGE 23–24]. Breakdown: if weather changes are gradual rather than abrupt, a single change-point detector may miss them; if the model is updated online without separating old and new regimes, stale data can retard adaptation [PAGE 12]. The adjudication rule is: physical constraints veto first, biomechanical risk vetoes second, weather/change-point vetoes third; only after all three pass should predicted value be used to rank plans.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
I operationalize RLVR as reinforcement learning with verifiable rewards: a held-out verifier returns a binary or thresholded score, and a plan/model update is vetoed when the verifier fails. The three scenarios below are counterfactual tests against the survey’s failure modes.

Scenario 1 — multi-step rollout verifier. Train or evaluate the model on held-out \(n\)-step transitions. Let
\[
E_n=\frac{1}{N}\sum_{i=1}^{N}\|\hat s^{(i)}_{t+n}-s^{(i)}_{t+n}\|_W
\]
be the normalized \(n\)-step rollout error. Veto the model or plan if \(E_n>\kappa\sigma_n\) or if \(E_n\) increases superlinearly with \(n\). Prediction: a one-step model can pass \(E_1\) while failing \(E_n\), because “accumulating errors may actually cause our multi-step predictions to diverge from the true dynamics” [PAGE 13]. Multi-step losses or separate \(n\)-step dynamics functions should reduce the veto rate, but they will not eliminate it under non-stationarity or partial observability; uncertainty propagation should improve calibration [PAGE 24]. The verifiable reward is the negative normalized rollout error; the veto is a hard filter on \(E_n\).

Scenario 2 — regime-switch verifier. Monitor residuals \(e_t=\|\hat T(s_t,a_t)-s_{t+1}\|_W\) and a change-point posterior. Veto continued use of the current model if \(\Pr(\text{change point}\mid\mathcal D_{1:t})>\tau\) and the model has not switched or down-weighted old data. Prediction: a fixed model will show a persistent residual jump after the change, while partial models or decayed-old-data approaches should recover faster [PAGE 12]. The survey warns that if the agent “keeps trusting its previous model, without detecting the change,” performance may deteriorate fast [PAGE 12]. The verifiable reward is negative post-change residual or negative regret against an oracle that knows the switch; the veto blocks deployment until the switch is detected and the model is updated.

Scenario 3 — planning-budget verifier. Compare held-out return for planning budgets \(B\in\{0,B_{\mathrm{low}},B_{\mathrm{mid}},B_{\mathrm{high}}\}\) with the same real-data budget. Veto a fixed-high-budget policy if it underperforms \(B_{\mathrm{mid}}\) on held-out tasks, and veto a fixed-zero-budget policy if it underperforms \(B_{\mathrm{mid}}\) in data efficiency. Prediction: with a learned model, the best budget is often intermediate, because high planning exploits model error and zero planning forfeits model-based gains; the survey reports that “optimal performance requires an intermediate planning budget per real step” [PAGE 41]. The verifiable reward is held-out cumulative return; the veto is a dominance test requiring \(B_{\mathrm{mid}}\) not to be beaten by a higher or lower budget beyond a confidence margin. A secondary condition is uncertainty-driven adaptation: if the variance of the estimated \(Q\)-function is high, the agent should increase real data or uncertainty penalties rather than increase planning depth blindly [PAGE 20, 24].
</RLVR_COUNTERFACTUAL_VETOES>