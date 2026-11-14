---
source: "openalex_W7163699313.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 11
model: deepseek/deepseek-v4.1-flash-1017
words: 6088
---

<NATIVE_REASONING>
We need answer with exact XML sections >=1000 words. Need obey no betting lines. Need source citations [PAGE N] and verbatim quotes. Need deep think trace, formal equations LaTeX, units, assumptions, breakdown regimes. Need discuss paper. Need cross-layer veto physical/biomechanical/weather proof. Need RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need retrocausal genealogy historical/scientific lineage multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock.

We need maybe frame as analysis of paper. Need no betting lines. Need cite exact pages and quotes. Need source operators and equations. Need formal LaTeX and units. Need mention xFCS probability dimensionless. ΔxFCS dimensionless (probability). Displacements m, velocity m/s, acceleration? Reward calls. Need singularities: denominator min 0.001; velocity cap 5.2 m/s; per-step bounds ±2m and ±2 m/s; gamma [0,1]; fully connected graph; static defence; single-frame reward. Break down if velocity safety boundary clips policy, if xFCS near saturation, denominator floor, non-reactive defense, no temporal blocking. Need "gray-zone audit."

Need include source exact quotes. Let's identify verbatim quotes with page markers. Use quotes from paper. We'll cite:
- "maximise first contact shot probability" [PAGE 1]
- "over 3,000 Premier League corners" [PAGE 1]
- equations on P4/P5.
- "maximum per-step displacement to ±2m and velocity changes to ±2m/s" [PAGE 4]
- "if an attacker’s resulting velocity vector magnitude ∥uadj∥2 exceeds 5.2m/s (the 95th percentile of all observed player speeds within the tracking data) the vector is proportionally scaled down to the safety boundary." [PAGE 4]
- reward eq r_t = xFCS(s_t) − xFCS(s_{t−1}) [PAGE 5]
- "minimum denominator of 0.001" [PAGE 7]
- temporal split [PAGE 6]
- "static defence" [PAGE 9? "against a static defence" page 9; page 4 "frozen defence" maybe.
- "single spatial snapshot composed of positions and velocities" [PAGE 9].
- "SAC ... +0.068 xFCS, ... PPO ... +0.063 xFCS" [PAGE 6]
- "94.2% and 92.6%" [PAGE 8]
- "SA ... 76.8% ... 69.4% ... 63.3%" [PAGE 8]
- "mean normalised score of 2.40 (median 2.05)" [PAGE 8]
- "SA only achieves a mean normalised score of 1.22 ... SAC and PPO scoring 1.11 and 1.08" [PAGE 8]
- "970 reward calls per individual corner" [PAGE 8]
- "3,223 corner kicks" [PAGE 5]
- "645 unseen test corners" [PAGE 8]
- "approximately 16% in the 2025/26 English Premier League season" [PAGE 2]
- "single-frame reward model" [PAGE 9]
- "temporal events that unfold over a sequence of timesteps" [PAGE 9]
- "pinning" or "pick-and-roll" blocking schemes [PAGE 9]
- "memoryless metaheuristics computationally intractable" [PAGE 9]
- "adversarial MARL paradigms" [PAGE 9]
Need maybe discuss "Graph Attention Network v2" [PAGE 5] "two GATv2 layers with separate, unshared parameters" [PAGE 5]. "frozen defense" [PAGE 4]. "discount factor gamma" [PAGE 4]. "fully-connected homogeneous graph" [PAGE 4]. "12-dimensional feature vector" [PAGE 4]. "22 players" [PAGE 4].
Need "source operators and equations" maybe define MDP tuple, xFCS, reward, normalized score tau, velocity cap, budget regimes. Need units and breakdown regimes.

Need answer style, maybe XML with sections. Ensure >=1000 words total. THINK_TRACE >=400 words. We can target maybe 2000-2500 words. Avoid betting lines. No spreads/totals/moneylines/odds. Words like "odds" avoid entirely. "probability" okay. Don't mention betting. Need "RLVR" maybe Reinforcement Learning with Verifiable Rewards? Define? We can say RLVR veto scenarios as falsifiable counterfactuals. Need 3 verifiable RLVR veto scenarios + predictions. We need not invent fake ratios. We can use equations with units. Need mention exact singularity/breakdown regimes. Need "Retrocausal genealogy" historical lineage: expected goals, pitch control, EPV, TacticAI, simulated annealing, RL, GNN, SAC/PPO. Multi-week traps: temporal leakage, overfitting static defense, reward model smoothing, compute budget mismatch, single-frame reward, velocity clipping, denominator floor. Need "recursive theory of mind" crisis habit regression vs counter-trap vs clock: interpret as coaching behavior under pressure: habit regression to rehearsed routines, counter-trap exploiting opponent expectations, clock pressure. Need avoid betting. Need "crisis habit regression" maybe when coaches under time pressure revert to historical routines; counter-trap is opponent anticipates; clock is time budget. Need tie to paper's exploration/exploitation, RL policy, live match context. Need "recursive theory of mind" as modeling coach/analyst/opponent nested beliefs. Need mention policy trained on historical corners, zero-shot late season. Need "counter-trap" maybe adversary could set trap by leaving vacated space? But static defense means no. Need mention future reactive MARL. Need "clock" = inference compute budget vs total training compute. Need discuss "inference compute matching" vs "total training compute matching". The paper's clock: real-time latency favors RL; per-corner budget favors SA. Need mention "multi-week traps" maybe data drift over season.

Need "Cross-layer veto adjudication" physical/biomechanical/weather veto proof. Need prove veto: invariant constraints. We can formalize feasibility set. Physical: pitch dimensions? Paper doesn't provide pitch dimensions but uses x,y scaled. Need avoid unsupported. We can use given bounds: max per-step displacement 2m, velocity delta 2m/s, velocity cap 5.2m/s. Biomechanical: acceleration/velocity caps not full force/fatigue. We can state no fatigue model. Weather: not modeled. Veto proof: if weather reduces traction, 2m displacement or 5.2m/s cap may be infeasible; paper has no weather variable in 12-dim features. So any weather-sensitive recommendation must be vetoed until condition-specific velocity cap or traction coefficient. Need use SI units: m, m/s, m/s^2 maybe. Need "physical/biomechanical/weather veto proof" maybe show:
Feasible action set A_t = {a: |Δp|∞ ≤ 2 m, |Δu|∞ ≤ 2 m/s, ||u_{t+1}||_2 ≤ 5.2 m/s}. If weather/wet field reduces max acceleration a_max, then v_max = sqrt(2 a_max d) for d? But don't invent? Could state if altered friction μ, required acceleration a_req = ... But no fake ratios? Formal equation okay. But cannot invent fake ratios. We can state general kinematic feasibility: a_req ≈ Δu/Δt, but Δt not given. Maybe avoid. We can state "not proven under weather because state lacks weather features." Veto proof is a logical proof: The paper's state vector includes x,y,u_x,u_y,height,weight,role/delivery/team/adjust flag [PAGE 4]; it does not include weather, surface friction, fatigue. Therefore any conclusion about weather is out-of-distribution. The safety boundary 5.2 m/s is empirical 95th percentile, not a causal biomechanical limit. Thus it's a clipping regularizer, not a physical law. Need mention.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe table of vetoes. Need include "proof" that physical feasibility requires no collision? Paper uses 2D physics engine but not collisions? It says built upon 2D physics engine [PAGE 5]. No explicit collision avoidance. Need mention if player-player collisions/offside rules not modeled, tactical recommendations cannot override rules. Offside not in state? No. Need "cross-layer" = tactical policy layer, reward model layer, kinematic layer, environmental layer. Veto if action violates artificial caps or if reward model saturation. Need formal.

Need "THINK_TRACE" deep multi-hop derivation and gray-zone audit. Need >=400 words. We can write in prose with steps. Need mention source pages. Need "multi-hop": corner -> MDP -> GNN reward -> RL policy -> evaluations -> implications. Need audit gray zones: RL outperform under inference; SA under total training; static defense; single-frame reward; zero-shot temporal split; reward model frozen; no weather/fatigue; no reactive defenders; clipping. Need "deep" maybe 600 words. Ensure no betting lines. Need "formal LaTeX equations" in source operators section. We can include actual equations.

Need ensure XML tags exact. Maybe six sections. Need no markdown? XML okay. Could use paragraphs within tags. Need LaTeX dollar signs. Need cite [PAGE N]. Need include verbatim quotes. Need not overdo. Let's plan structure:

<THINK_TRACE>
Paragraphs:
- Trajectory: paper formulates corner as MDP with state graph 22 players 12-dim, actions bounded, reward frozen GNN xFCS.
- Multi-hop derivation: Eq1 decomposes xFCS into contact and shot probability. RL maximizes delta. SAC/PPO evaluated. Temporal split. Results.
- Gray-zone audit: inference compute vs total training. SAC 2.40 normalized vs SA 1.22. But SA can outperform under 970 calls. The "generalized policy" vs per-corner optimizer distinction. The single-frame reward may not capture blocking schemes. Static defense means no adversarial feedback; future MARL.
- Physics: caps and clipping. Need treat 5.2 m/s as 95th percentile, not law. Weather/fatigue absent. This limits cross-layer transfer.
- Conclusion: useful as reward-driven discovery but not full tactical simulator.
>=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal:
MDP \((S,A,P,R,\gamma)\), \(\gamma\in[0,1]\) dimensionless.
State \(G=(V,E)\), \(|V|=22\), node features \(\mathbb{R}^{12}\), edge feature binary same-team. Cite p4.
Action \(a_t=(\Delta p_t,\Delta u_t)\), units m, m/s. Bounds \(\|\Delta p_t\|_\infty\le2\) m, \(\|\Delta u_t\|_\infty\le2\) m/s, and if \(\|u_{\text{adj}}\|_2>5.2\) m/s then scale. Cite p4. Need write scaling equation: \(u_{\text{adj}}' = u_{\text{adj}}\min(1,5.2/\|u_{\text{adj}}\|_2)\). Units m/s. This is exact derived operator, not fake. Good.
Reward \(x_{FCS}(s)=\sum_{i\in A}P(C=i|s)P(S|C=i,s)\), dimensionless. \(r_t=x_{FCS}(s_t)-x_{FCS}(s_{t-1})\), dimensionless. Cite p4-5.
Normalized score \(\tau = \Delta xFCS_{method} / \max(\Delta xFCS_{RS,mean}, 0.001)\), dimensionless. Cite p7. Note denominator floor. Breakdown if denominator floor dominates, or if RS mean near zero. This is exact.
Budget regimes: inference compute matching and total training compute matching; SA 970 reward calls per corner vs matched episodes. Cite p8. Not equation? Could mention.
Assumptions: static/frozen defense; single-frame xFCS; no weather/fatigue/collision/offside; 2D JAX; GATv2. Breakdown regimes:
1. \(\|u\|_2\) cap saturated -> clipping saturation, action gradient distortion.
2. \(\Delta xFCS_{RS}\to0\) -> tau floor min 0.001 makes scores unstable/inflated.
3. xFCS near 0 or 1 saturation -> dense delta reward vanishing.
4. nonstationary reactive defense -> policy invalid.
5. temporal event blocking -> reward model cannot distinguish.
6. weather/biomechanics -> 5.2 m/s not valid.
Need mention "units: xFCS is probability; ΔxFCS is dimensionless probability difference; normalized score dimensionless; displacement m; velocity m/s; reward calls count." Good.

<RETROCAUSAL_GENEALOGY>
Historical lineage: expected goals [PAGE1 cites 16,3], pitch control [27,25], EPV [11,22,24,7,10], MDP football [28,21,20], TacticAI [31]. Paper's shift from imitation to reward-driven. Simulated annealing [15]. Graph RL [8]. GATv2 [30,5]. SAC [14], PPO [23]. JAX [4], Kinetix [18]. Retrocausal: future reactive MARL [PAGE9] makes current single-frame static defense a proof-of-concept. Multi-week traps: temporal leakage; static defense overfit; compute budget mismatch; reward model smoothing; late-season drift; safety boundary as false physical law. Need mention "multi-week" maybe training/eval over season. Use quotes. Cite pages. Need no fake ratios. Good.

<RECURSIVE_THEORY_OF_MIND>
Interpret as nested agents: coach/analyst, RL policy, opponent defender, evaluator. Crisis habit regression: under live-match clock, coaches fall back to rehearsed routines; paper's historical imitation baseline; RL explores. Counter-trap: opponent can anticipate predictable policy; static defense no counter-trap. Need mention current evaluation cannot prove deception because defenders frozen. The "counter-trap" would be defender adjusting to vacated space; paper future work adversarial MARL. Clock: inference compute matching vs total training compute; in real-time, policy dominates; with 970 reward calls per corner, SA can match. Need mention recursive ToM: policy does not model defender beliefs; xFCS reward frozen; it models only spatial snapshot, not opponent's expectation. Use quotes from p8 and p9. Need "crisis habit regression vs counter-trap vs clock" maybe explicit three regimes:
- Habit regression: high time pressure, low compute -> choose familiar routines; RL policy acts as amortized habit but learned, not historical.
- Counter-trap: opponent learns your policy; static defense cannot; in reactive MARL, need mixed strategy/entropy. SAC max entropy [PAGE 5] helps exploration but not guaranteed equilibrium.
- Clock: operational latency vs training cost. Under inference matching RL wins 94.2/92.6; under total training SA 76.8. Need quote.
Need no betting. Good.

<CROSS_LAYER_VETO_ADJUDICATION>
Need formal veto proof. Maybe define layers:
\(L_{tactical}\): xFCS reward.
\(L_{kinematic}\): bounds.
\(L_{biomechanical}\): velocity cap.
\(L_{environmental}\): weather/pitch.
A tactic is admissible only if \(a_t\in A_{kin}\) and state features include variables that determine feasibility. Proof: state \(s\) has 12-dim features (list) but no weather/fatigue/friction. Therefore for any weather condition w not in s, \(xFCS(s)\) is invariant to w; if true xFCS(s,w) differs, policy's ranking is not identified. Thus weather veto. Biomechanical: cap 5.2 is 95th percentile observed, not injury/fatigue model; if athlete-specific max <5.2 or wet surface reduces traction, vector scaling to 5.2 does not guarantee feasibility. Physical: per-step ±2m and ±2m/s; collisions/offside not in reward. If collision or offside invalidates scene, xFCS reward may still be high but tactical action illegal. Need maybe "veto proof" with equations:
Admissibility \( \mathcal{A}_{phys}(s) = \{a: \|\Delta p\|_\infty\le 2m, \|\Delta u\|_\infty\le 2m/s, \|u'\|_2\le 5.2m/s\}\). If \(w\) reduces traction, actual feasible set \(\mathcal{A}_{phys}(s,w)\subset \mathcal{A}_{phys}(s)\); paper optimizes over \(\mathcal{A}_{phys}(s)\), so can select \(a\in \mathcal{A}_{phys}(s)\setminus\mathcal{A}_{phys}(s,w)\). This is a rigorous veto. Good. Need mention weather not in features; no proof of robust performance. Need "physical/biomechanical/weather veto proof" exactly.

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions.
Need define RLVR as verifiable reward tests? We can say each scenario is a counterfactual with a measurable predicate. Need not use betting. Scenarios:
1. Weather/traction veto: Re-run policy on held-out corners with velocity cap reduced to e.g. 4.5 m/s or surface friction proxy. Prediction: xFCS gain drops and policy saturation increases; if gains persist unchanged, reward model insensitive to feasibility. Verifiable: compare mean ΔxFCS, fraction actions hitting cap, admissibility. Use units. Prediction maybe "mean ΔxFCS falls below +0.068 and cap-hit fraction rises." But don't invent exact? Can predict direction. Good.
2. Static vs reactive defense veto: add defender response that occupies vacated space. Prediction: SAC/PPO's >99% positive ΔxFCS collapses; policy no longer dominates SA under inference? Need direction. Use verifiable: percentage of corners with ΔxFCS>0; if remains >99% under reactive defense, then defense model is too weak. Need exact? Could say predicted drop. Good.
3. Temporal-blocking veto: construct paired scenes with two attackers close vs coordinated blocking sequence but same single-frame positions/velocities. Prediction: frozen xFCS assigns near-identical rewards, so RL cannot distinguish; if reward differs materially, single-frame model encodes temporal cues unexpectedly. Verifiable: reward difference threshold. Need maybe use "paired counterfactual" with same snapshot but different history; xFCS is function of snapshot only, so by definition equal if same positions/velocities. Actually if same snapshot, xFCS exactly equal. So prediction: identical xFCS; RL policy cannot prefer one. This is strong. But need "verifiable RLVR veto scenario: any claimed blocking advantage not represented in snapshot must be vetoed." Good.
Could include fourth? Need exactly 3. Ensure each has prediction.

Need maybe "RLVR counterfactual vetoes" with "veto if predicate fails." Good.

Need word count. Let's draft around 2500 words. Ensure all XML tags. No markdown? We can use paragraphs and bullet-like lines within tags. XML okay. Avoid unescaped & maybe use "and". Avoid < in text? In XML, use \le in LaTeX, not <. Avoid ampersand. Need not include raw < in text except tags. Use "less than or equal" or LaTeX \le. In XML, ampersand not allowed. Avoid "&" in text. Use "and". Use ">"? > allowed, but can avoid. Need escape? We can use LaTeX \ge. Fine. Avoid "&" in "P&R". Use "P and R". Need no raw < in text. Use \leq. Fine.

Need exact quotes verbatim. Use quotation marks. Quotes with ± okay. The source has "±2m" no space. We can quote exact. Page markers. Good.

Need mention "PAGE 4" quotes exactly:
"restricting maximum per-step displacement to ±2m and velocity changes to ±2m/s." Actually text: "restricting maximum per-step displacement to ±2m and velocity changes to ±2m/s. Following the update step, if an attacker’s resulting velocity vector magnitude ∥uadj∥2 exceeds 5.2m/s (the 95th percentile of all observed player speeds within the tracking data) the vector is proportionally scaled down to the safety boundary." Good.
"fully-connected homogeneous graph" [PAGE4]. "12-dimensional feature vector" [PAGE4]. "frozen, pre-trained GNN" [PAGE4].
Equation quote? We can quote equation as text? "xFCS(s) = ..." But equations are source. We can write formal LaTeX and cite page. Verbatim quotes for prose. Need "cite exact [PAGE N] markers and verbatim quotes" satisfied.

Need "SEAN" maybe no.

Let's think if any issue: User says "DRIVE SOURCE" maybe wants analysis. We are GSE+GSI Frontier Reasoning Foundry. Need produce XML sections. Good.

Need avoid betting lines. No "odds". We won't mention. "probability" okay.

Need "ZERO TOY EQUATIONS" — ensure equations are source-derived, not fake ratios. We should not invent "Force/Fatigue". Our equations are exact from paper: MDP, xFCS, reward, action bounds, tau. The velocity scaling equation derived from text. That is okay. We need state assumptions and units. Good.

Potential problem: \(\tau = \Delta xFCS_{method}/\max(\Delta xFCS_{RS,mean},0.001)\) is exact from text? Text: "we define τ as the ratio of a method’s ∆xFCS to the RS baseline mean for that specific corner... minimum denominator of 0.001." Yes. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" maybe "RLVR" means "Reinforcement Learning with Verifiable Rewards". We can say "I treat each veto as an RLVR-style verifiable predicate." Fine.

Need "Recursive theory of mind" maybe not overly speculative. Tie to paper. Good.

Need "Retrocausal genealogy" maybe "retrocausal" means later work reinterprets earlier. We can say TacticAI imitation is ancestor; this paper's reward-driven optimization retroactively repositions expected goals/pitch control as reward oracles; future MARL retroactively makes static-defense results a lower bound. Good.

Need "multi-week traps" maybe "over a multi-week season." We can mention temporal split prevents leakage but late-season drift. Good.

Need "crisis habit regression vs counter-trap vs clock" in recursive ToM. We can formalize maybe:
- Habit regression: \( \pi_{habit} = \arg\max \) historical likelihood, akin TacticAI reconstruction loss.
- Counter-trap: defender policy \(\pi_D(a_A)\) anticipates; static defense \(\pi_D\) constant. Current xFCS reward \(R(s)\) no defender belief state. 
- Clock: \(B_{infer}\) vs \(B_{train}\). Need maybe no equations? Could include \(B_{infer} \ll B_{train}\). That is a ratio? Not fake; budget. Fine.

Need "cross-layer veto adjudication" proof: define \(\mathcal A_{phys}(s;w)\). Maybe use subset. Good.

Need final answer only XML. Let's draft.

Need ensure >=1000 words. Let's estimate: THINK 500, SOURCE 500, RETRO 300, RECURSIVE 300, CROSS 350, RLVR 350 = 2300. Good.

Need maybe include "No betting lines" not necessary. But no betting.

Let's write with exact XML tags. Use `<THINK_TRACE>` etc. Need no `&`. Avoid "R&D". Use "and".

Need be careful with ">" in text? XML allows. But in LaTeX \(\ge\) no >. Use `\geq`. Good.

Need use `\Delta` etc.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s multi-hop logic runs from a football-specific decision problem to a graph-structured Markov Decision Process, then to a frozen reward oracle, then to two RL algorithms, and finally to compute-matched evaluations. The first hop is the problem framing: the paper explicitly seeks to “maximise first contact shot probability” [PAGE 1] and moves set-piece analysis from historical imitation toward reward-driven discovery. The second hop is the MDP tuple \((S,A,P,R,\gamma)\), where the state is a “fully-connected homogeneous graph” of “22 players” with “12-dimensional feature vector” nodes [PAGE 4]. The third hop is the reward: a “frozen, pre-trained GNN” maps a scene to Expected First Contact Shot probability, decomposing shot probability into reception and conditional shot terms [PAGE 4]. The fourth hop is policy learning: SAC and PPO are trained with GATv2 embeddings, with the actor and critic each using “two GATv2 layers with separate, unshared parameters” [PAGE 5]. The fifth hop is evaluation: 3,223 Premier League corners, an 80/20 sequential temporal split, zero-shot late-season testing, and matched compute regimes [PAGE 5, PAGE 6]. The headline empirical claim is that SAC reaches “+0.068 xFCS” and PPO “+0.063 xFCS” at convergence [PAGE 6], while under inference compute matching the policies outperform Random Search in “94.2% and 92.6%” of cases, versus Simulated Annealing at “6.6%” [PAGE 8]. Under total training compute matching, SA outperforms RS in “76.8%” of cases, versus “69.4% for the generalised SAC policy and 63.3% for the PPO policy” [PAGE 8]. This is a crucial gray zone: the paper does not claim RL dominates every budget; it claims RL dominates under realistic inference latency and remains competitive under a generous per-corner search budget.

The gray-zone audit must separate three objects that are easy to conflate. First, the reward model is a single-frame spatial evaluator: it consumes positions and velocities and outputs a probability-like score. Second, the RL policy is an amortized optimizer trained against that frozen evaluator. Third, the evaluation protocol is a temporal holdout over historical corners against a frozen defence. The paper itself flags the limitation: because xFCS evaluates “a single spatial snapshot composed of positions and velocities,” it may struggle to distinguish coordinated blocking from proximity, and the agent may exploit “unambiguous tactical signals” such as “high-velocity arrivals into undisputed space near the goal” [PAGE 9]. That is a reward-model boundary condition, not merely an implementation detail. The paper also confines the present task to “single-team kinematic adjustments against a static defence” [PAGE 9], so any claim about reactive defender counterplay is out of scope. The future-work path is explicitly “adversarial Multi-Agent Reinforcement Learning (MARL)” [PAGE 9]. Therefore, the correct interpretation is: the paper demonstrates reward-driven spatial discovery against a frozen evaluator, not a full game-theoretic set-piece solver.

Another gray zone is the “safety boundary.” The environment restricts “maximum per-step displacement to ±2m and velocity changes to ±2m/s,” and if an attacker’s resulting velocity magnitude “exceeds 5.2m/s (the 95th percentile of all observed player speeds within the tracking data)” the vector is “proportionally scaled down to the safety boundary” [PAGE 4]. The 5.2 m/s threshold is an empirical tracking-data percentile, not a biomechanical law, injury model, fatigue model, or weather-dependent traction limit. It regularizes the policy against “physiologically impossible sprints” in the paper’s words [PAGE 4], but it does not prove feasibility for a specific athlete, surface, or match state. The evaluation also uses a minimum denominator of “0.001” when normalizing by the RS baseline mean [PAGE 7], which prevents explosion of \(\tau\) when RS discovers negligible improvements. That floor is numerically necessary but introduces a regime where small absolute changes can produce large normalized scores. A rigorous reading must therefore separate absolute \(\Delta xFCS\), normalized \(\tau\), and cap-saturation frequency. The paper reports both absolute and normalized values, but the cross-layer vetoes below require checking them jointly.

The physical audit also matters because the paper’s engine is a “2D physics engine” [PAGE 5], and the state features include coordinates, velocity vectors, height, weight, binary role identifiers, delivery type, attacking-team flag, and an adjust-this-player flag [PAGE 4]. There is no weather variable, no surface-friction variable, no fatigue variable, no collision-violation flag, and no offside-rule state in the described 12-dimensional vector. That does not invalidate the paper’s proof-of-concept; it bounds its transfer. The derived tactical recommendations are valid inside the learned reward model and the imposed kinematic envelope. They are not automatically valid as real-world instructions under rain, poor traction, athlete-specific acceleration limits, or rule constraints not represented in the reward. The paper’s own conclusion calls for “adversarial, reactive environments” [PAGE 9], which is precisely where the static-defence assumption breaks. Thus the multi-hop derivation ends with a conditional conclusion: Graph RL is an effective amortized optimizer for this frozen single-frame corner objective, and it is especially strong under inference-latency constraints, but its causal warrant for real match deployment depends on additional physical, biomechanical, environmental, and adversarial checks.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper formalizes corner optimization as a Markov Decision Process \((S,A,P,R,\gamma)\) with “a central decision-maker” adjusting attacking player positions and velocities [PAGE 3, PAGE 4]. The discount factor is \(\gamma \in [0,1]\), dimensionless, balancing immediate spatial improvement against long-term expected return [PAGE 4].

State operator. The state is a graph \(G=(V,E)\) with \(|V|=22\), containing 11 attackers and 11 defenders. Each node carries a 12-dimensional feature vector: scaled spatial coordinates \((x,y)\), velocity vectors \((u_x,u_y)\), physical attributes “height, weight,” binary role identifiers “corner taker, defending goalkeeper, delivery type, attacking team,” and a binary flag for the player to be adjusted [PAGE 4]. Edges are fully connected, and each edge carries a binary same-team flag [PAGE 4]. Units: \(x,y\) are spatial coordinates in metres after scaling; \(u_x,u_y\) are velocities in metres per second; height and weight are physical attributes; role and team flags are dimensionless binaries.

Action operator. At each timestep the policy outputs \(a_t=(\Delta p_t,\Delta u_t)\), where \(\Delta p_t=[\Delta x,\Delta y]\) is spatial displacement in metres and \(\Delta u_t=[\Delta u_x,\Delta u_y]\) is velocity change in metres per second [PAGE 4]. The paper bounds “maximum per-step displacement to ±2m and velocity changes to ±2m/s” [PAGE 4]. A velocity-safety projection is applied when the adjusted velocity magnitude exceeds 5.2 m/s: if \(\|u_{\text{adj}}\|_2>5.2\ \text{m s}^{-1}\), then the vector is proportionally scaled down, i.e.
\[
u_{\text{adj}}' = u_{\text{adj}}\,\min\!\left(1,\frac{5.2}{\|u_{\text{adj}}\|_2}\right),
\]
with \(u_{\text{adj}}\) and \(u_{\text{adj}}'\) in \(\text{m s}^{-1}\). This is a clipping projection, not a fatigue or injury model. The source states the threshold is “the 95th percentile of all observed player speeds within the tracking data” [PAGE 4].

Reward operator. The reward oracle is a frozen GNN mapping a scene to Expected First Contact Shot probability:
\[
xFCS(s)=\sum_{i\in \text{attackers}} P(\text{contact}=i\mid s)\,P(\text{shot}\mid \text{contact}=i,s),
\]
which is dimensionless because it is a probability [PAGE 4]. The model is decomposed into “a reception probability model” and “a conditional shot model” [PAGE 5]. The RL step reward is the incremental change:
\[
r_t=xFCS(s_t)-xFCS(s_{t-1}),
\]
also dimensionless as a probability difference [PAGE 5]. The paper describes this as a “dense, delta-based formulation” that penalizes movement into sub-optimal configurations [PAGE 5].

Normalized evaluation operator. Performance profiles use
\[
\tau=\frac{\Delta xFCS_{\text{method}}}{\max(\Delta xFCS_{\text{RS,mean}},0.001)},
\]
where \(\tau=1.0\) indicates parity with Random Search, \(\tau=2.0\) indicates twice the danger of the RS baseline, and the denominator floor “0.001” is enforced “to ensure numerical stability” [PAGE 7]. Units: \(\Delta xFCS\) is dimensionless; \(\tau\) is dimensionless. The source reports that under inference compute matching SAC and PPO outperform RS in “94.2% and 92.6%” of cases, while SA does so in “6.6%” [PAGE 8]. Under total training compute matching, SA outperforms RS in “76.8%” of cases, versus “69.4%” for SAC and “63.3%” for PPO [PAGE 8].

Assumptions and breakdown regimes. First, the reward is a single-frame evaluator; if a tactical effect is temporal, such as “pinning” or “pick-and-roll” blocking schemes, the model may not distinguish it from proximity because it evaluates “a single spatial snapshot composed of positions and velocities” [PAGE 9]. Second, the defence is frozen; the paper explicitly says the task uses “single-team kinematic adjustments against a static defence” [PAGE 9]. Third, the action envelope is bounded by the ±2 m and ±2 m/s limits and the 5.2 m/s projection [PAGE 4]. Breakdown occurs when the policy saturates the velocity projection, when \(xFCS\) approaches 0 or 1 and the delta reward vanishes, when \(\Delta xFCS_{\text{RS,mean}}\to 0\) so the 0.001 floor dominates \(\tau\), when defenders become reactive, and when weather, fatigue, collision rules, or offside constraints change the feasible action set outside the state representation. These are not speculative objections; they are exact boundaries of the described operators.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is visible in its own citation architecture. It positions Expected Goals, Pitch Control, and Expected Possession Value as foundational evaluators [PAGE 1], citing work such as Expected Goals [16,3], Pitch Control [27,25], and EPV [11,22,24,7,10]. It then cites Markov Decision Process formulations of football [28,21,20] as prior counterfactual reasoning, but argues that those approaches remain “primarily tied to the historical state-action distribution” [PAGE 2]. The direct ancestor in set-piece generation is TacticAI, which “leverages geometric deep learning to produce realistic, expert-preferred spatial adjustments” but “optimises for reconstruction loss, conditioning outputs to imitate historically observed player trajectories” [PAGE 2]. The retrocausal move is therefore clear: earlier Expected Goals and Pitch Control models are reinterpreted as reward oracles or state evaluators, TacticAI is reinterpreted as an imitation baseline, and the present Graph RL method is positioned as reward-driven discovery beyond the historical training distribution.

The scientific genealogy also includes Simulated Annealing [15], Graph RL [8], GATv2 [30,5], SAC [14], PPO [23], JAX [4], and Kinetix [18]. The paper uses SA and Random Search as gradient-free baselines [PAGE 6], and it uses rliable for performance profiles [PAGE 7]. The retrocausal significance is that the later compute-matched evaluation reframes earlier metaheuristic success: SA can look strong when it receives “970 reward calls per individual corner” [PAGE 8], but that success does not amortize into a general policy. Conversely, the RL policy’s inference advantage is retroactively explained by its upfront training cost, which is amortized across corners.

Multi-week traps are embedded in the temporal protocol. The paper uses “a strict 80/20 sequential temporal split,” trains on the “chronologically earliest 80% corners of the season,” and evaluates “zero-shot on the final 20% of unseen test corners” to prevent “temporal data leakage” and mimic “late-season structural shifts and evolutionary tactical adjustments” [PAGE 6]. The first multi-week trap is distribution drift: a policy trained on early-season corners may overfit routines that late-season opponents have already adjusted. The second is reward-model smoothing: because the reward is single-frame, multi-week tactical innovations that unfold over several timesteps are not directly representable [PAGE 9]. The third is static-defence overconfidence: a policy can learn to exploit spatial flaws that a reactive opponent would close. The fourth is compute-budget illusion: inference-time dominance and total-training-time parity are different claims, as the SA reversal under the expanded budget shows [PAGE 8]. The fifth is safety-boundary reification: the 5.2 m/s threshold is an empirical percentile, not a universal athletic limit [PAGE 4]. These traps are multi-week because they compound across scouting cycles, opponent adaptation, and seasonal drift; they are not single-episode numerical artifacts.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind layer here is not a claim that the paper implements opponent modeling. It does not. The policy is a central decision-maker optimizing against a frozen defence, and the reward model evaluates a spatial snapshot [PAGE 4, PAGE 9]. The relevant recursion is among the coach, the analyst, the RL policy, the opponent, and the evaluator. In crisis conditions, the coach faces a clock and may regress to “habit” — historically rehearsed routines that are reliable but predictable. The paper’s contrast is exact: TacticAI-style imitation ensures “generative realism” but restricts discovery “to the boundaries of the historical training distribution” [PAGE 2]. Graph RL is framed as the exploration arm of the exploit-explore dilemma, with SAC’s maximum-entropy objective forcing “a diverse array of valid tactical adjustments rather than collapsing prematurely to a single local maximum” [PAGE 5]. That is the counter-habit mechanism.

The counter-trap is the opponent’s reciprocal move. If the attacker’s policy becomes predictable, a defender can anticipate the vacated-space run or the high-velocity arrival. The current evaluation cannot test this because the defence is static. The paper says the present task is “restricted to single-team kinematic adjustments against a static defence” and that future work will move to “adversarial Multi-Agent Reinforcement Learning (MARL)” [PAGE 9]. In recursive terms, the attacker policy \(\pi_A(a\mid s)\) does not include a defender belief state or a defender response function \(\pi_D(a_D\mid s,a_A)\). Therefore the current policy is a best response to a frozen environment, not a equilibrium policy against an adaptive opponent. The paper’s own caveat that memoryless metaheuristics become “computationally intractable” in a reactive multi-timestep domain, while Graph RL is “better equipped to scale to these highly relational, reactive environments,” is the correct scope statement [PAGE 9].

The clock is the third recursive pressure. Under “Inference Compute Matching,” the metaheuristics receive a search budget matching “a single episode executed by the RL agent,” reflecting “an operational time-sensitive scenario” [PAGE 7]. There, the amortized policy dominates: SAC and PPO outperform RS in “94.2% and 92.6%” of cases, while SA manages “6.6%” [PAGE 8]. Under “Total Training Compute Matching,” the metaheuristics receive a budget equivalent to the entire 2.5 million environment-step training cost, prorated across the test set [PAGE 7]. There, SA reaches “76.8%” versus SAC’s “69.4%” and PPO’s “63.3%” [PAGE 8]. The recursive lesson is that habit regression is rational under a live-match clock, counter-trap reasoning is necessary against adaptive opponents, and the training clock determines whether amortization beats per-scenario search. A coach with seconds should prefer a fast policy; a coach with an offseason and one corner to solve might prefer SA. The paper’s evidence supports that distinction rather than a universal “RL always wins” claim.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto proof starts from the paper’s own kinematic admissibility set. Let
\[
\mathcal{A}_{\text{phys}}(s)=\{a_t: \|\Delta p_t\|_\infty\le 2\ \text{m},\ \|\Delta u_t\|_\infty\le 2\ \text{m s}^{-1},\ \|u_{\text{adj}}'\|_2\le 5.2\ \text{m s}^{-1}\},
\]
where the bounds and projection are exactly those described in the source [PAGE 4]. The tactical layer proposes actions by maximizing \(xFCS(s)\), but the reward model is a frozen GNN over a state that includes coordinates, velocities, height, weight, role identifiers, delivery type, attacking-team flag, and adjust-player flag [PAGE 4]. It does not include weather, surface friction, fatigue, collision legality, or offside state. Therefore, for a weather condition \(w\), the paper optimizes over \(\mathcal{A}_{\text{phys}}(s)\) while the true feasible set may be \(\mathcal{A}_{\text{phys}}(s,w)\subset\mathcal{A}_{\text{phys}}(s)\). If \(w\) reduces traction or increases slipping risk, an action in \(\mathcal{A}_{\text{phys}}(s)\setminus\mathcal{A}_{\text{phys}}(s,w)\) can be selected and rewarded even though it is infeasible in reality. That is a formal weather veto: the reward ranking is not identified under weather unless \(w\) enters the state or the action envelope is conditioned on \(w\).

The biomechanical veto is similar but athlete-specific. The 5.2 m/s threshold is “the 95th percentile of all observed player speeds within the tracking data” [PAGE 4], not an individual maximal sprint, acceleration, deceleration, or injury-risk model. The projection \(u_{\text{adj}}' = u_{\text{adj}}\min(1,5.2/\|u_{\text{adj}}\|_2)\) guarantees only that the simulated vector does not exceed that empirical percentile. It does not guarantee that a given player can achieve the displacement and velocity change within the real movement time, nor that repeated high-velocity arrivals are safe. A biomechanical veto therefore applies whenever the policy’s recommendation depends on cap-saturating movements or on repeated accelerations not modeled by the paper. The paper’s own phrasing — “physiologically impossible sprints” [PAGE 4] — shows the boundary is a safety regularizer, not a validated physiological law.

The physical and rules veto is also exact. The reward is single-frame and the defence is frozen; the paper says xFCS evaluates “a single spatial snapshot composed of positions and velocities” [PAGE 9]. If a proposed configuration creates a collision, an offside position, or an illegal screen not represented in the reward, xFCS can still be high. The paper’s discussion of blocking schemes acknowledges that “pinning” or “pick-and-roll” patterns are “inherently temporal events that unfold over a sequence of timesteps” and may be smoothed by the single-frame model [PAGE 9]. Thus a tactical recommendation that depends on temporal coordination must be vetoed unless a sequence-level reward or rule layer validates it. Cross-layer adjudication is therefore not optional: the tactical layer may not override the kinematic layer, the kinematic layer may not override biomechanical feasibility, and the reward layer may not override weather, rules, or temporal legality. The paper’s static-defence and single-frame design are valid proof-of-concept constraints, but they are precisely the layers at which real-world deployment must add vetoes.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
I treat each item as an RLVR-style verifiable predicate: a counterfactual change is made, a measurable outcome is computed, and the policy claim is vetoed if the predicate fails. These are not betting lines; they are falsification tests.

Scenario 1: Weather and traction veto. Counterfactual: re-evaluate the held-out corners with a reduced velocity envelope or a surface-traction proxy, for example cap adjusted speed below the paper’s 5.2 m/s boundary and record the fraction of actions that hit the cap. Verifiable measurements: mean absolute \(\Delta xFCS\), cap-hit fraction, and admissibility rate under the reduced envelope. Prediction: if the learned tactics depend on cap-saturating “high-velocity arrivals” [PAGE 9], then reducing the envelope should lower mean \(\Delta xFCS\) and raise the fraction of clipped or rejected actions. If the reported SAC advantage remains unchanged under the reduced envelope, the reward model is insensitive to the physical change and the weather-veto claim is supported: the policy is not a weather-robust tactical generator. The paper gives no weather feature in the 12-dimensional state [PAGE 4], so this test is a direct out-of-distribution audit.

Scenario 2: Reactive-defence veto. Counterfactual: replace the frozen defence with a defender response that occupies the vacated space or tracks the highest-xFCS attacker, then re-run the same trained SAC and PPO policies zero-shot. Verifiable measurements: fraction of corners with \(\Delta xFCS>0\), mean \(\Delta xFCS\), and comparison against SA under the same reactive environment. Prediction: the paper’s “over 99%” positive-improvement rate [PAGE 8] should fall materially because the policy was trained against a “static defence” [PAGE 9]. If the positive rate remains above 99% under a genuinely reactive defender, the defender model is too weak or the reward is still exploitably static. This veto is especially important because the paper itself scopes future work to “adversarial MARL” [PAGE 9].

Scenario 3: Temporal-blocking veto. Counterfactual: construct paired scenes with identical single-frame positions and velocities but different temporal histories — one where two attackers approach in a coordinated blocking pattern, one where they are merely proximate. Verifiable measurement: the frozen xFCS reward difference between the paired snapshots. Prediction: because xFCS is a function of the single-frame state [PAGE 4, PAGE 9], the reward difference should be exactly zero or near zero for identical snapshots, so the RL policy cannot systematically prefer coordinated blocking over proximity. If the reward model assigns a large difference to identical snapshots, the claimed single-frame limitation is false; if it assigns near-zero difference, the paper’s own hypothesis that blocking schemes are “inherently temporal events” [PAGE 9] is confirmed and any tactical claim about blocking must be vetoed until a sequence-level model is added. These three tests are verifiable, directionally predictive, and directly tied to the source’s stated operators and limitations.
</RLVR_COUNTERFACTUAL_VETOES>