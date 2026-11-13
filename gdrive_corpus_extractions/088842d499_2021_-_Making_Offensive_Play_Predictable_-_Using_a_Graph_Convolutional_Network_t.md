---
source: "2021 - Making Offensive Play Predictable - Using a Graph Convolutional Network to Understand Defensive Performance in Soccer - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 19
model: baidu/ernie-5.5-flash-preview:free
words: 10552
---

<NATIVE_REASONING>
We need answer user's request. Need produce >=1000-word depth with exact XML sections. Need obey strict invariants: no betting lines; no toy equations; formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need use source text. User asks DRIVE SOURCE etc. They likely expect an analysis/report using sections. Need ensure no mention spreads/totals/moneylines/odds. Need not invent fake ratios like Force/Fatigue. Need formal equations. Need maybe derive concepts from paper: GNN edge/node blocks, xReceiver, xPass, xThreat, defensive impact, disruption maps. Need >= 1000 words across XML sections. THINK_TRACE >=400 words. Need cite exact pages and verbatim quotes. Need maybe include formal LaTeX equations with units. Need avoid unsupported equations? We can formalize from paper concepts. Need be careful: no toy equations. We can state assumptions. We can cite pages. We need likely use Chinese? User's request in English but includes Chinese instruction. Could answer in English? Probably English okay. Need final only XML sections. Need ensure exact section names: <THINK_TRACE>... etc. They require >=1,000-word depth across exact XML sections. Need likely total >1000. Need include all sections. Need no extra text outside? Probably just sections. Need ensure source citations [PAGE N] and verbatim quotes. Need maybe include [PAGE 1] etc. Need exact quotes from provided text. Need formal equations in LaTeX. Need units. Need breakdown regimes. Need maybe define graph, loss, probability outputs. Need avoid fake ratios. Could define equations as models, not toy. Need formal and cited. Let's analyze source deeply.

Source paper: Making Offensive Play Predictable - GNN to understand defensive performance in soccer. Data 1200 games tracking 10Hz. Models xReceiver, xThreat, xPass. Graph G(V,E,U) no global features. Edges directed weighted team? nodes players/ball. Edge block, node block MLPs. Features page 5. Training page 4: one million passes 90/10 train/test; include 5/10 frames before for xTransition/xReceiver semantic regularization. Defensive players masked; weights: receiver 1.0, other teammates 0.1 for xReceiver. Loss/accuracy table page 5. Inference speed page 15: feature crafting mean 0.044 s, inference 0.001 s, total 0.045 s. Disruption maps page 7: spatial identity minus game identity. Quantifications: Lazio decreased xThreat from left penalty box by 10% compared to all other Juventus games; increased risk completing pass to options in wide channels etc by 20%. Player examples: Ronaldo primary supplier Matuidi, only option once; xReceiver values 0.98 Matuidi, xPass 0.66; Ronaldo active runs 7, only 3 forward; Costa received, Ronaldo xReceiver 0.22, then primary target at edge of penalty area. Table 6: Ronaldo target counts first/second half by supplier: Dybala 1/5, Matuidi 1/0, Sandro 3/3. Table 7 availability of Ronaldo's suppliers when he in possession first/second: Dybala 4/4, Matuidi 2/1, Sandro 3/6. Need perhaps use these numbers in equations or adjudication.

Need produce sections:
THINK_TRACE: Deep multi-hop derivation & gray-zone audit >=400 words. Need discuss derivation: from graph representation to defensive impact. Multi-hop: node features -> edge block -> node embedding -> probability outputs. How to derive counterfactual prevention: compare game identity to team identity. Gray zones: no causal attribution due to own tactic changes [PAGE 7 footnote 2], labels from programmatic functions [PAGE 9], model masked defenders, weights. Need cite quotes. Need perhaps mention limitation: xReceiver logloss not comparable [PAGE 5]. Need gray-zone audit: table says GNN xReceiver logloss 0.07* vs baseline 0.70 but not comparable [PAGE 5]. Also inference on notebook 0.05s [PAGE 15].

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Need define graph G=(V,E,U). Maybe node feature vector x_v ∈ R^{d_x}, edge feature e_{ij}. Edge block: e'_{ij} = φ^e([e_{ij}, x_{v_i}, x_{v_j}]) maybe output dimension d_e. Node block: x'_v = φ^v([x_v, A_{v}^{in}, A_{v}^{out}]) where A are permutation invariant aggregations (mean/sum) of incoming/outgoing edge embeddings. Cite PAGE 4: "edge block is defined by a neural network..." "node block ... permutation invariant function ... mean or sum". Need units: inputs positions m, speed m/s, acceleration m/s², angle rad, probabilities dimensionless [0,1], loss dimensionless. Need output equations: p_r(v,t) = σ(f_θ(v,t)) for xReceiver; p_p(v,t) = σ(g_θ(v,t)) xPass; p_t(v,t) = σ(h_θ(v,t)) xThreat. Need assumptions: sigmoid, independent? The paper says predictions likelihood/probability. Need not claim if not exact? Could say as an operator of the model output. Need include loss weighted cross-entropy? Paper says nodes weighted in loss calculation [PAGE 5]. We can formalize: L = -Σ_t Σ_v w_v(t) [y_v(t) log p_v(t)+(1-y) log(1-p)] with units dimensionless. But is that too invented? It says weighted in loss calculation and logloss. Cross-entropy likely but not explicitly. We can state if using standard logloss. Need breakdown: if MLP saturates, vanishing gradients; if tracking frame rate 10 Hz, temporal horizon 10 s corresponds 100 frames. xThreat predicts shot within next 10 s [PAGE 1]. Need breakdown: graph aggregation assumes permutation invariance; fails if global features needed? They used no global features [PAGE 4]. Need if missing players? graph copes varying number [PAGE 3]. Need singularity: if node set empty? Or if weights zero? Maybe define normalization degeneracy if sum of weights zero. Need not overdo.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Need lineage: Van Dijk quote [PAGE 1], Klopp Liverpool, need measure prevented actions. Related work: Lucey formation templates [PAGE 3], Fernandez/Brefeld CNN image surfaces [PAGE 3], Spearman xThreat [PAGE 3], ghosting [PAGE 3], graph networks Battaglia [PAGE 14]. Multi-week traps: believing defensive quality only tackles/interceptions [PAGE 1]; confusion logloss xReceiver comparable [PAGE 5]; attributing disruption to opposition when own tactics may change [PAGE 7 footnote]. Need maybe mention "multi-week traps" as analytical traps persisting over weeks: use of summary stats, image-based alignment overhead, team shape assumptions. Need cite.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need discuss recursive ToM: defender models attacker options, attacker runs, defender shifts. Paper: xReceiver detects primary target change, assume proactive action [PAGE 9]. Need use example: Lazio vs Juventus, first 60 min poor. Need counter-trap: not to overattribute to Lazio due to Juventus own poor play? The paper footnote says differentiate out of scope. Clock: 10s threat horizon [PAGE 1], 5/10 frames before pass [PAGE 4], inference 0.05s [PAGE 15]. Crisis habit regression: if team under pressure reverts to habitual targets, e.g., Matuidi-Ronaldo targeted? Need maybe formalize ToM as nested probability: attacker chooses receiver to maximize p_r*p_p*xThreat? But avoid toy equations? Could state formal Bayesian decision? Need no fake ratios. Could define a decision utility maybe but if invented, must state assumptions. Better use only model outputs: primary target argmax xReceiver. "We define the primary target as the attacker with the highest xReceiver value at each frame" [PAGE 9]. That's formal. Recursive: defender changes probabilities, attacker run changes probabilities. Need discuss crisis: when pressured, ball carrier may regress to available supplier; Ronaldo only considered option for Matuidi once [PAGE 10]. Counter-trap: active runs may increase xReceiver but xPass low, e.g., Matuidi xReceiver 0.98, xPass 0.66 [PAGE 10]. Clock: frames prior, 10s horizon, real-time.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need adjudicate if findings hold under physical constraints. Use tracking data features speed, acceleration, angle [PAGE 5]. Need physical veto: if player speed/acceleration incompatible with run or pressure? We don't have raw trajectories, only report. We can state the paper's model inputs include physical motion features but output can be low if impossible. Need weather? No weather data in source. Need say no explicit weather covariate; tracking 10Hz top 5 leagues, multiple seasons, likely controls some conditions? Need formal proof? Could state veto conditions: (1) biomechanical veto if required acceleration/velocity to become receiver exceeds physiological limits over available time; model features acceleration/speed allow learned discount, but no explicit biomechanical constraint. (2) physical/veto if ball distance/angle to goal too far? Model includes distance/angle to goal [PAGE 5]. (3) weather veto: absence of wet field/wind covariates means no direct proof; inference conditional on league distribution. Need not invent. Need maybe use equations for sprint feasibility: displacement Δx within time τ requires mean speed v=||Δx||/τ ≤ v_max and acceleration a ≤ a_max; if violated, run probability should be zero. Units m/s, m/s². But are these from source? It's physical formalization, not toy. Need state as adjudication not source model. Cite features include speed/acceleration. Need mention no explicit weather, so external validity only for similar league conditions. Need exact quotes? Use [PAGE 5] "Node features include player XY position, speed, acceleration, angle of motion...". Weather not present.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR maybe reinforcement learning with verifiable rewards? Need create three scenarios that veto conclusions if false, with verifiable predictions. Must be verifiable? We can propose data checks. Need no betting. Need maybe: 1) If Matuidi-Ronaldo target reduction due to Lazio man-oriented pressure, verify by checking defender-to-target distance decreasing while Ronaldo xReceiver decreases after controlling for time and ball location. Prediction: xReceiver_Ronaldo drops when a defender approaches Matuidi or cuts passing lane; if no drop after controlling, veto. 2) If xThreat reduction left penalty box caused by Lazio, verify by comparing xThreat surface in same zone across Juventus games; if Juventus base tactic shifted independently, disruption map confounded. Prediction: in other games with no Lazio, xThreat zone remains similar; if too low across many games, veto. 3) If active run increases availability, verify that xReceiver increases over run and pass completion xPass remains above threshold; Ronaldo example: xReceiver 0.22 to primary target at edge, but need actual xPass? If xReceiver rises but xPass falls, run not viable. Or if inference timing > real-time? Hmm. Need "verifiable RLVR veto scenarios" maybe reward signal verifiable via data. Need formulate as scenario, veto condition, predicted observable. Need cite source pages for data. Maybe include equations for counterfactual: D_zone = I_game(z) - I_team(z), units probability/percent. If D not significant under bootstrap, veto. Use [PAGE 7] quote. Need maybe 3 scenarios:
1. Man-oriented pressure on primary target: xReceiver(Matuidi) and xPass(Matuidi) under defender proximity; predicted combined Lazio defenders Milinković-Savić and Parolo pressure cause xPass 0.66 despite xReceiver 0.98 [PAGE 10]. Veto if xPass does not drop when defender distance reduces.
2. Supply-line targeting: Ronaldo counts by supplier first half low. Verify pass counts and target counts; if Ronaldo's low counts due to Juventus ball circulation away from him, not Lazio. Prediction: across first halves in other games, Matuidi passes to Ronaldo more unless Lazio-specific defenders block. Veto if similar suppression absent in baseline.
3. Threat disruption map: Lazio decreased xThreat from left penalty box 10% and increased pass risk 20% [PAGE 7]. Verify with game-level surface and league baseline; if bootstrapping difference not significant or if Juventus normally low threat in that zone, veto.

Need include exact quotes for source pages. Need ensure no betting terms: avoid "odds" maybe user says zero betting lines: Never mention spreads, totals, moneylines, or odds. The word "odds" might appear? Avoid. Also avoid "betting". Need not mention.

Need maybe use LaTeX equations with units. Need be careful not to invent fake ratios. We can define conditional probabilities, losses. Need formal and SI units. Need maybe include information units: logloss in nats? The paper says logloss, likely natural log? Could state if natural logarithm, units nats; if base 2, bits. Need not assert. Could define L dimensionless information loss. Need cite page 5 table. Need mention accuracy dimensionless.

Need total word count. Let's draft each section long. Need ensure THINK_TRACE >=400 words. Overall >1000. Let's estimate. Need final likely ~2500 words. Good.

Need maybe no outside citations? Use only source. Need exact [PAGE N]. Need verbatim quotes. For quotes, ensure exact from source. We can quote short phrases. Need maybe use ellipses? Better exact phrases. E.g., [PAGE 1] "The aim of a defense and a defender is to make offensive play predictable." [PAGE 7] "We can clearly see Lazio considerably decreased the xThreat from their left side of the penalty box (Ronaldo’s side), with a 10% decrease in Juventus’ xThreat compared to all other Juventus games in that season." [PAGE 5] "the logloss of the GNN xReceiver contains all teammates of the passer" etc.

Need formal equations:
- Graph: G_t=(V_t,E_t,U_t), t frame index, V_t includes N_t nodes. Node feature x_v(t) ∈ R^{d_x}. Units: x positions m, y m, speed m/s, acceleration m/s², angle rad, distances m, angle differences rad, flags dimensionless. Edge feature e_{ij}(t) includes relationship flag, distance m, angle diff rad.
- Edge block: e'_{ij}(t)=φ_e([e_{ij}(t), x_{v_i}(t), x_{v_j}(t)]) ∈ R^{d_e}. φ_e MLP 3 layers [PAGE 4].
- Aggregation: m_{v}^{in}(t)=⊕_{j:(j,v)∈E} e'_{jv}(t), m_v^out(t)=⊕_{i:(v,i)∈E} e'_{vi}(t), ⊕ mean or sum [PAGE 4].
- Node block: x'_v(t)=φ_v([x_v(t), m_v^in(t), m_v^out(t)]) ∈ R^{d_x'}. MLP 3 layers [PAGE 4].
- Output: \hat{r}_v(t)=σ(ψ_r(x'_v(t))), \hat{p}_v(t)=σ(ψ_p(...)), \hat{τ}_v(t)=σ(ψ_τ(...)), each in [0,1]. Need state xReceiver likelihood of receiver [PAGE 1], xPass likelihood completed [PAGE 1], xThreat probability shot in next 10 s [PAGE 1].
- Loss: L_task = -1/|T| Σ_{t∈T} Σ_{v∈V_t} w_v(t) [ y_v(t) ln \hat{p}_v(t)+(1-y_v(t))ln(1-\hat{p}_v(t)) ], units nats if natural log. Weighted nodes [PAGE 5]. For xReceiver weights 1.0 for receiver, 0.1 other teammates [PAGE 5]. Defenders masked [PAGE 5].
- Disruption map: D_c(z)=I_{game,c}(z)-I_{team,c}(z), where c ∈ {xReceiver,xPass,xThreat}, z ∈ Z pitch coordinates, I in [0,1] per unit area or mean probability; units dimensionless probability density per m² if normalized. Cite [PAGE 7].
- Threat horizon: xThreat = P(shot in next Δt=10 s | pass to attacker) [PAGE 1]. Time discretization 10 Hz => Δt=10 s corresponds 100 frames. Cite data sampled 10Hz [PAGE 3].
- Inference latency: T_total = T_feat + T_infer. mean 0.045 s, std 0.006 s, max 0.08 s [PAGE 15]. units s. Real-time threshold maybe frame interval 0.1 s at 10Hz. If T_total > 0.1 s, cannot process every frame. Breakdown: max 0.08 still <0.1. But if feature crafting max 0.068 etc.

Need maybe include "exact singularity/breakdown regimes":
- Aggregation permutation invariant fails if edge set empty: no information; model reduces to node-only MLP. If all weights zero? For xReceiver weights include other teammates 0.1 not zero. If defensive players masked, no target? Need if no teammates? graph still. Singularity: if ⊕=sum and degrees grow, magnitude scales; if mean, normalizes. Need if MLP activation saturates, gradients vanish; if logloss near 0/1, loss diverges: y=1,p→0 etc. Need mention.
- Physical singularity: sprint equation v=Δx/τ > v_max, impossible; model should assign near zero. But not explicitly in paper; as adjudication.

Need no fake ratios. Could mention "no ratio such as force/fatigue". Not necessary.

Need maybe mention source says "xTransition" inconsistently (xPass). Need not.

Need final with XML tags only. Ensure well-formed? The user says exact XML sections. Could include line breaks. Need no markdown code fences? Probably just tags. Need ensure not too many unescaped angle brackets inside equations? LaTeX has < >? Avoid. Use \langle maybe. But XML may treat < inside? Better avoid literal < in equations? We can use \le? Need use LaTeX with <=? Use \leq. But XML tags only? Inside text, use &lt; maybe not necessary. To be safe, use words "less than or equal" or use \leq. Need no raw &? XML can handle but okay.

Need maybe include [PAGE N] markers throughout. Need quote exact. Need ensure quotes not too long. Use exact.

Let's plan sections content.

THINK_TRACE:
- Start with source thesis: defending as preventing predictable actions [PAGE 1].
- Multi-hop chain: tracking -> graph -> edge/node blocks -> outputs -> primary target -> defensive impact -> disruption maps.
- Need >400 words. Discuss gray-zone: model is frame-level, not causal; xReceiver changes due to run, ball carrier movement, defender actions [PAGE 9]. Footnote limitation [PAGE 7]. Labels programmatic [PAGE 9]. Training excludes defenders and weights teammates [PAGE 5]. Logloss comparability [PAGE 5]. Need include Ronaldo example: Matuidi targeted once [PAGE 10], xReceiver 0.98 xPass 0.66 [PAGE 10], Ronaldo run xReceiver 0.22 [PAGE 11]. Need gray-zone: is low xReceiver due to Lazio or Juventus? Out of scope [PAGE 7]. Need speed: inference 0.05s [PAGE 15].
- Word count maybe 700.

SOURCE_OPERATORS_AND_EQUATIONS:
- Formal definitions with units and citations. Need maybe bullet list. Include equations. Need maybe word count ~700. Need ensure formal LaTeX.

RETROCAUSAL_GENEALOGY:
- lineage and traps. ~400.

RECURSIVE_THEORY_OF_MIND:
- nested beliefs. ~500.

CROSS_LAYER_VETO_ADJUDICATION:
- physical/weather. ~450.

RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios. ~600.

Total >3000 maybe. Good.

Need ensure no "odds". Avoid word. Also avoid "betting". Need maybe "probability" okay.

Need be careful with "prediction" not betting.

Let's draft. Need maybe include exact quotes in each section.

Potential issue: user requested "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We must not say "toy equations". Our equations are formal. Need include assumptions. Good.

Need maybe mention information units: cross-entropy loss in nats if ln, bits if log2. Accuracy dimensionless. Disruption map difference of probabilities dimensionless. If spatial density normalized by pitch area, units m^{-2}. But paper says weighted 2d distribution. We can define if normalized over area A, units dimensionless per m² or probability mass per m². Need cite. Good.

Need maybe define notation:
Let t ∈ {t_k = k Δt_frame}, Δt_frame=0.1 s from 10Hz. Node v ∈ V_t. Edge (i,j) directed sending i receiving j. y_v^r receiver indicator, y_v^p completion? For xPass maybe completion label? The paper says trained on one million passes split. For xPass predicts likelihood pass completed to each attacker off ball at any moment [PAGE 1]. y maybe actual completion? Need state assumptions.

Need perhaps include "xTransition" model in data section but outputs xPass. Use xPass.

Need exact singularity: For logloss L, if \hat{p}=0 and y=1, L→∞. In training, gradient explosion or saturation. For sigmoid, stable implementation uses logit. If MLP outputs extreme logits. For aggregation, if mean over empty edge set undefined; assume nonempty edge set or fallback. If sum, degree D_v, scale O(D_v); normalization needed. For xThreat 10s horizon: at 10Hz, N=100 frames; if event after Δt outside horizon, label negative. Breakdown if event timestamp missing. Need maybe.

Need cross-layer weather: no explicit weather variables. If weather changes player speed/acceleration distributions, model's league-level learned parameters may be biased. Need state no proof. Physical veto: if defender-to-target distance too large within time, man-oriented pressure impossible. Could use distance d_{D,T}, time τ, required speed v_req=d/τ. If v_req > v_max, veto. Units m/s. Need cite features include speed, acceleration, distance. Good.

Need RLVR scenarios verifiable with tracking/event data. Need maybe define reward verifiable: binary outcome? Could be data-driven. Need 3 scenarios:
1. Pressure-induced xPass suppression: Hypothesis: combined pressure of Milinković-Savić and Parolo reduced Matuidi xPass to 0.66 despite xReceiver 0.98 [PAGE 10]. Veto if when defender proximity metric decreases, xPass does not increase or if xPass low due to receiver skill. Prediction: in frames with closer defenders to Matuidi, xPass lower; in absent Lazio match, Matuidi-Ronaldo connection xPass higher. Need verifiable with model outputs.
2. Supply-line targeting: Hypothesis Lazio targeted Matuidi-Ronaldo relationship; Ronaldo option for Matuidi once [PAGE 10]. Veto if Ronaldo's target frequency for Matuidi is low across all first halves regardless of opponent. Prediction: controlling for game state, Matuidi's xReceiver Ronaldo is suppressed by Lazio defenders; if not, veto.
3. Disruption map causal attribution: Hypothesis Lazio decreased xThreat left penalty box 10% and increased pass risk 20% [PAGE 7]. Veto if spatial difference not stable under resampling or if Juventus's own tactic changed. Prediction: in matched Juventus games against comparable opponents, zone xThreat not decreased by 10%; if it is, veto. Need mention footnote out of scope. Good.

Need maybe "RLVR" define: Reinforcement Learning with Verifiable Rewards? Could state scenarios provide verifiable reward by tracking data. Need no extra.

Need maybe include equations in RLVR: D_z = I_game - I_team. Veto if |D_z| not > threshold estimated from variance. Need units probability. Could define confidence via bootstrap but not in source; as adjudication. Need state assumption.

Need maybe final no extra commentary. Ensure tags exactly:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
...

Need maybe include XML declarations? Not necessary.

Need check word count. Let's write robustly. Need avoid raw less-than signs in LaTeX? Use \leq. But in text, [PAGE 1] etc okay. Need maybe use double quotes inside XML okay. Need no unescaped ampersand? Use "and" mostly. If use & in LaTeX alignment, in XML text might be okay? It's not strict parser maybe. But to be safe, avoid & in LaTeX except as align? XML doesn't require escaping &? Actually & is reserved, should escape. Use no align & or use \\. Could write equations separated. Use `\begin{aligned}` with `&` would violate if parsed. Better avoid & entirely. Use bullet equations with explicit line breaks? We can write `\[` ... `\]` with no &. For aligned, use `\\` and `&=` maybe includes &. Avoid. Use separate equations. Use commas. Good.

Need use `\left[` etc. Fine.

Need ensure no fake units. For cross-entropy, use `	ext{nats}` if `ln`. Good.

Need maybe use `ho`? Fine.

Let's draft THINK_TRACE. Need >400 words. I'll make long.

Potential issue: "gray-zone audit" need explicit. Good.

Let's draft in analysis then final.

THINK_TRACE content:
Paragraph 1: source's core claim and quote. Explain chain.
Paragraph 2: graph to probabilities.
Paragraph 3: defensive impact and primary target.
Paragraph 4: Lazio example and Ronaldo.
Paragraph 5: gray-zone audit: confounding, label functions, masked defenders, logloss.
Paragraph 6: temporal and computational constraints.

Need quotes: [PAGE 1] "The aim of a defense and a defender is to make offensive play predictable." [PAGE 1] "preventing actions before they have occurred." [PAGE 9] "We define the primary target as the attacker with the highest xReceiver value at each frame." [PAGE 9] "If there is a change in the primary target, we make an assumption that a proactive action has occurred." [PAGE 7] footnote: "Disruption Maps estimate tactical deviation from an average style, where differences can be attributed to opposition and/or changes of your own team’s tactic for a specific game. To differentiate between the two is out of the scope of this paper." [PAGE 5] "the logloss of the GNN xReceiver contains all teammates of the passer". [PAGE 15] total less than 0.05s.

Need maybe mention "semantic regularization" [PAGE 4]. Good.

SOURCE_OPERATORS... Need formal.

Let's write equations:
Let frame interval Δt_f = 0.1 s because 10 Hz [PAGE 3]. Let t_k = k Δt_f.
Node set V_t = V_t^{att} ∪ V_t^{def} ∪ {ball}; edges directed.
Node feature vector:
x_v(t) ∈ R^{d_x}. Components: (x_v,y_v) in m; speed in m s^{-1}; acceleration in m s^{-2}; angle in rad; distance in m; angle difference rad; flags dimensionless [PAGE 5].
Edge feature:
e_{ij}(t) = [r_{ij}(t), d_{ij}(t), Δθ_{ij}(t)] with r flag dimensionless, d in m, Δθ in rad [PAGE 5].
Graph G_t=(V_t,E_t,U_t), U_t empty/no global features [PAGE 4].

Edge block:
z_{ij}(t)=φ_e([e_{ij}(t), x_{v_i}(t), x_{v_j}(t)]) ∈ R^{d_e}. φ_e is MLP with three layers [PAGE 4].
Aggregation:
A_v^{in}(t)=⊕_{(j,v)∈E_t} z_{jv}(t), A_v^{out}(t)=⊕_{(v,i)∈E_t} z_{vi}(t), ⊕ ∈ {mean,sum} [PAGE 4]. Units same as edge embedding; if sum, degree scaling. Node block:
x'_v(t)=φ_v([x_v(t), A_v^{in}(t), A_v^{out}(t)]) ∈ R^{d_x'}. MLP three layers [PAGE 4].

Outputs:
\hat{r}_v(t)=σ(η_r(x'_v(t))) ∈ [0,1]. xReceiver [PAGE 1].
\hat{p}_v(t)=σ(η_p(x'_v(t))) ∈ [0,1]. xPass [PAGE 1].
\hat{τ}_v(t)=σ(η_τ(x'_v(t))) ∈ [0,1]. xThreat probability shot next 10 s if pass played [PAGE 1].
Assumptions: sigmoid calibration, independent Bernoulli labels, frame-wise conditional outputs; paper doesn't specify calibration but outputs probabilities. Need maybe state "as implemented in the paper's likelihood language". Good.

Loss:
L = - (1/Σ w) Σ_t Σ_v w_v(t) [ y_v(t) ln \hat{p}_v(t) + (1-y_v(t)) ln(1-\hat{p}_v(t)) ]. Units nats if natural log. Weighted nodes [PAGE 5]. For xReceiver, receiver weight 1.0, other teammates 0.1 [PAGE 5], defenders masked [PAGE 5]. Breakdown: if \hat{p}=0/1 and opposite label, L→∞; stable logit training needed. If edge set empty, aggregation undefined; fallback node-only. If mean with nonempty edges okay; sum can scale with degree.

Threat horizon:
P(shot in (t, t+10 s] | pass to v at t) = \hat{τ}_v(t) [PAGE 1]. At 10Hz, N=10/0.1=100 frames. Breakdown if event not observed within horizon.

Primary target:
v^*(t)=argmax_{v∈A_t} \hat{r}_v(t) [PAGE 9]. Change: Δv^*(t)=1 if v^*(t) ≠ v^*(t-1); proactive action assumption [PAGE 9].

Disruption map:
I_{team,c}(z) and I_{game,c}(z) are spatial averages of c outputs over cells z. D_c(z)=I_{game,c}(z)-I_{team,c}(z). If I normalized per pitch area A, units probability per m²; if cell mean, dimensionless. c=xReceiver,xPass,xThreat [PAGE 7]. Breakdown: if team/game samples too few, variance dominates; no uncertainty estimate in paper. Attribution ambiguous [PAGE 7 footnote].

Training data:
1,200 games, 1 million passes, 90/10 split, 10Hz [PAGE 3]. xThreat only pass moment; xTransition/xReceiver include 5 and 10 frames before [PAGE 4]. This creates temporal window. If pass moment only, overfitting to motion indicating pass; regularization [PAGE 4].

Inference latency:
T_total = T_feat + T_infer. Mean 0.044+0.001=0.045 s; std 0.006; max 0.08 s [PAGE 15]. At 10Hz frame interval 0.1 s. Breakdown if T_total > 0.1 s; observed max below. Units seconds.

Need maybe include table metrics? Accuracy and logloss dimensionless. Could mention table [PAGE 5].

RETROCAUSAL_GENEALOGY: write.

RECURSIVE_THEORY_OF_MIND: write.

CROSS_LAYER_VETO_ADJUDICATION: write.

RLVR_COUNTERFACTUAL_VETOES: write.

Need ensure no "odds". Check words. "probability" fine.

Let's draft final in full. Need maybe include exact quotes with apostrophe? Fine.

Potential issue: user requested "SOURCE TEXT" and maybe wants only answer. Need no disclaimers.

Let's compose final carefully. Need maybe not too long but >1000. We'll make around 3000 words. Need ensure XML tags exact. Need maybe no markdown headings outside. Good.

Let's write final. Ensure no raw `&` in LaTeX. If using `[PAGE 4]`, no issue. Use `\in` etc. Avoid `&`.

Check for `&` in "R&D"? no. In LaTeX maybe `	ext{m}` no.

Need maybe include `10^{-1}` etc. Fine.

Let's begin. 

Double-check exact quotes:
- "The aim of a defense and a defender is to make offensive play predictable." yes page 1.
- "preventing actions before they have occurred." page 1: "i.e., preventing actions before they have occurred." Use exact maybe with i.e.?
- "We define the primary target as the attacker with the highest xReceiver value at each frame." page 9.
- "If there is a change in the primary target, we make an assumption that a proactive action has occurred." page 9.
- footnote: "Disruption Maps estimate tactical deviation from an average style, where differences can be attributed to opposition and/or changes of your own team’s tactic for a specific game. To differentiate between the two is out of the scope of this paper." page 7.
- "the logloss of the GNN xReceiver contains all teammates of the passer" page 5.
- "on average the whole process from crafting the features until the inference of the model is made took less than 0.05s for one tracking timestamp" page 15? The text says: "Table 2 shows that on average the whole process from crafting the features until the inference of the model is made took less than 0.05s for one tracking timestamp on our test notebook." Good.
- "the logloss is not comparable for the xReceiver models" page 5.
- "the nodes representing the defensive players were masked out for all models" page 5.
- "the (intended) receiver of a pass has a weight of 1.0 and all other teammates of the ball carrier have a weight of 0.1" page 5.
- "We clearly see that the relationship between Matuidi and Ronaldo is heavily targeted, with Ronaldo only being considered an option for Matuidi once during the Lazio match." page 10. Need exact quote: In page 10: "We clearly see that the relationship between Matuidi and Ronaldo is heavily targeted, with Ronaldo only being considered an option for Matuidi once during the Lazio match." Good.
- "At the same time Matuidi (red 14) became the most likely receiver (xR 0.98), however, due to the combined pressure of Milinković-Savić (blue 21) and Parolo (blue 16) his xPass was only 0.66, meaning there was a high chance of a transition." page 10. Need exact maybe long. Use shorter: "his xPass was only 0.66" exact.
- "When Costa received the ball Ronaldo only had an xReceiver of 0.22." page 11. Good.
- "We can clearly see Lazio considerably decreased the xThreat from their left side of the penalty box (Ronaldo’s side), with a 10% decrease in Juventus’ xThreat compared to all other Juventus games in that season." page 7.
- "increased the risk of completing a pass ... by 20%" page 7. Exact: "Lazio increased the risk of completing a pass to any option in the wide channels between the touchline and six-yard box and in the “second penalty area” outside the penalty area by 20%." Good.

Need maybe quote "Dealing with unstructured data" etc.

Need maybe include "semantic regularization" quote: page 4: "Including these two additional moments prior to each pass event allowed us to achieve a semantic regularization during training preventing the model to overfit to the pass moment where players’ movements already indicate where the ball will be played to some degree." Use exact maybe long.

Need check no betting words. Good.

Let's produce final. Ensure all sections. final only.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central epistemic move is to treat defending not as the count of executed actions, but as the modification of probability fields that represent what the attacking team could do. The paper states this directly: [PAGE 1] “The aim of a defense and a defender is to make offensive play predictable.” This sentence is the hinge for the entire analytical derivation. If defense makes play predictable, then defense can be measured by the extent to which the attacker’s receiver choice, pass completion likelihood, and shot threat are compressed, displaced, or delayed. The paper operationalizes this by training three frame-level models: xReceiver, xThreat, and xPass. According to [PAGE 1], xReceiver “[p]redicts the likelihood of every player becoming the pass receiver at any moment within a player possession,” xThreat “[p]redicts the probability of a shot occurring in the next 10 seconds if a pass was played to an attacker,” and xPass “[p]redicts how likely a pass would be completed to each attacker off the ball at any moment within a player possession.” These three outputs form the measurement surface from which defensive impact is inferred.

The multi-hop derivation proceeds as follows. First, tracking data are converted into a directed graph. The paper says: [PAGE 4] “A graph G(V, E, U) is defined by nodes V, edges E, and global features U.” Nodes are players and the ball; edges connect a sending node to a receiving node and contain relational information. Second, an edge block and a node block transform these relational inputs into embeddings. The edge block takes edge features, sending-node features, and receiving-node features; the node block takes node features plus aggregated incoming and outgoing edge features. Third, the final node embedding produces three probabilities for each player: receiver likelihood, pass completion likelihood, and short-horizon shot threat. Fourth, the paper defines the “primary target” as the attacker with the highest xReceiver value at each frame. The paper states: [PAGE 9] “We define the primary target as the attacker with the highest xReceiver value at each frame.” Fifth, changes in this primary target are interpreted as evidence of proactive behavior: [PAGE 9] “If there is a change in the primary target, we make an assumption that a proactive action has occurred.” This assumption is the gateway from prediction to defensive interpretation. A defender’s pressure, an attacker’s run, or the ball carrier’s movement can change the receiver field; the model detects the change even when no pass has yet occurred.

The Lazio versus Juventus case study demonstrates the inferential chain. The paper reports that Ronaldo’s availability to Matuidi was severely suppressed: [PAGE 10] “We clearly see that the relationship between Matuidi and Ronaldo is heavily targeted, with Ronaldo only being considered an option for Matuidi once during the Lazio match.” In a specific possession, Matuidi had high xReceiver but low xPass under pressure: [PAGE 10] “his xPass was only 0.66.” This is important because it separates two defensive effects: being a likely receiver is not the same as being a safe receiver. The model can therefore distinguish spatial desirability from completion risk. Ronaldo’s active run example further illustrates the temporal nature of the measurement: [PAGE 11] “When Costa received the ball Ronaldo only had an xReceiver of 0.22.” The paper then tracks his run until he becomes the primary target at the edge of the penalty area. This shows that the model is not merely valuing a static position; it is valuing the evolution of decision options over frames.

A gray-zone audit is necessary because several inferential layers are not causal guarantees. First, the primary-target detector assumes that a change in the highest xReceiver value corresponds to a meaningful tactical event. The paper acknowledges this by saying, [PAGE 9] “we make an assumption that a proactive action has occurred.” That assumption may fail if model noise, tracking jitter, or player idiosyncrasy causes frame-to-frame fluctuations. Second, the disruption map compares a game-level spatial identity to a team-level global identity, but attribution is ambiguous. The footnote is explicit: [PAGE 7] “Disruption Maps estimate tactical deviation from an average style, where differences can be attributed to opposition and/or changes of your own team’s tactic for a specific game. To differentiate between the two is out of the scope of this paper.” Thus, a Lazio-caused reduction in Juventus threat cannot be separated from Juventus’s own tactical degradation without additional counterfactual controls.

Third, the training setup has important exclusions. The paper says: [PAGE 5] “the nodes representing the defensive players were masked out for all models.” This means the learned outputs describe attacker availability and threat under defensive conditions, but the model does not directly learn a defensive node embedding. Defensive effect must be inferred from how defender movement changes attacker probabilities. Fourth, the xReceiver logloss comparison is not clean: [PAGE 5] “the logloss is not comparable for the xReceiver models.” The GNN version includes teammates with small weights, while the baseline considers only the player the pass was played to. This is a major gray-zone issue: improved metrics may reflect different label sets rather than purely better relational modeling.

Fifth, temporal regularization matters. The authors include frames before the pass to prevent overfitting: [PAGE 4] “Including these two additional moments prior to each pass event allowed us to achieve a semantic regularization during training preventing the model to overfit to the pass moment where players’ movements already indicate where the ball will be played to some degree.” This is crucial because defensive impact depends on pre-pass movement. If the model only learned the pass moment, it would overweight the final kinetic cue and underweight the earlier decision field. Sixth, the real-time claim is tied to computational latency: [PAGE 15] “on average the whole process from crafting the features until the inference of the model is made took less than 0.05s for one tracking timestamp.” At 10 Hz tracking, the frame interval is 0.1 s, so a mean total latency of 0.045 s leaves margin, but the maximum reported total of 0.08 s approaches the frame interval. This matters for real-time coaching tools because the system must not lag beyond the next tracking timestamp.

The deepest gray zone is the counterfactual nature of defense. The paper says the models allow us to value “what was prevented” [PAGE 7]. But “prevented” is a counterfactual object. The model observes the realized sequence, not the full distribution of unchosen actions. It can estimate that a receiver became less available after defender pressure, but it cannot prove that the pressure alone caused the change unless the attacker’s run, ball movement, score state, and fatigue are controlled. The source’s Ronaldo example is strong evidence of the model’s descriptive power, not proof of a single causal mechanism. The correct interpretive posture is therefore layered: the GNN provides a high-resolution probabilistic representation of attacking options, and defensive impact is a derived field based on changes in those options, but causal attribution remains bounded by the paper’s own scope limitation.
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
The formal operators can be derived from the source’s graph network and its three output models. Let the tracking frame interval be Δt_f = 0.1 s because the data are “sampled at 10Hz per second” [PAGE 3]. Let t_k = k Δt_f denote a frame time in seconds. Let G_t = (V_t, E_t, U_t) be the graph at time t, where V_t contains attacking players, defending players, and the ball as nodes; E_t contains directed edges from a sending node v_i to a receiving node v_j; and U_t contains no global features because the paper says, [PAGE 4] “No global features were included in this approach.”

For each node v ∈ V_t, define the node feature vector x_v(t) ∈ R^{d_x}. The components include position, speed, acceleration, angle of motion, distance and angle to the attacking goal, distance to the ball carrier, difference in angle of motion to the ball carrier, and a ball-carrier flag [PAGE 5]. The physical units are: positions in meters, speeds in m·s^{-1}, accelerations in m·s^{-2}, angles in radians, distances in meters, angle differences in radians, and flags dimensionless.

For each directed edge (i,j) ∈ E_t, define the edge feature vector e_{ij}(t) ∈ R^{d_e}. It contains a relationship flag, distance between players, and difference in angle of motion [PAGE 5]. The relationship flag is dimensionless; distance is in meters; angle difference is in radians.

The edge block is a learned function φ_e:
\[
z_{ij}(t) = φ_e\left(\left[e_{ij}(t), x_{v_i}(t), x_{v_j}(t)\right]\right), \quad z_{ij}(t) ∈ R^{d_e'}.
\]
The source states: [PAGE 4] “An edge block is defined by a neural network that takes inputs from the edge features, sending node features, receiving node features and outputs a new edge embedding.” The edge block is implemented with an MLP of three layers [PAGE 4].

The incoming and outgoing edge aggregations for node v are:
\[
A_v^{in}(t) = ⊕_{(j,v) ∈ E_t} z_{jv}(t),
\]
\[
A_v^{out}(t) = ⊕_{(v,i) ∈ E_t} z_{vi}(t),
\]
where ⊕ is a permutation invariant aggregation function. The source says: [PAGE 4] “A permutation invariant function is required to aggregate the sending and receiving edge features, e.g., the mean or sum of those features.” If ⊕ is mean, the units are the mean edge-embedding units; if ⊕ is sum, the magnitude scales with graph degree, which creates a breakdown regime if degree varies sharply across frames.

The node block is:
\[
x_v'(t) = φ_v\left(\left[x_v(t), A_v^{in}(t), A_v^{out}(t)\right]\right), \quad x_v'(t) ∈ R^{d_x'}.
\]
The source says: [PAGE 4] “A node block is defined by a neural network that takes inputs from the node features, aggregated sending edge features, aggregated receiving edge features and outputs a new node embedding.” Each block is an MLP with three layers [PAGE 4].

The three model outputs are conditional probabilities. For attacking node v at frame t:
\[
\hat{r}_v(t) = σ(ψ_r(x_v'(t))) ∈ [0,1],
\]
where \hat{r}_v(t) is the xReceiver probability that v becomes the next receiver. The source says xReceiver “[p]redicts the likelihood of every player becoming the pass receiver at any moment within a player possession” [PAGE 1].

\[
\hat{p}_v(t) = σ(ψ_p(x_v'(t))) ∈ [0,1],
\]
where \hat{p}_v(t) is the xPass probability that a pass to v would be completed. The source says xPass “[p]redicts how likely a pass would be completed to each attacker off the ball at any moment within a player possession” [PAGE 1].

\[
\hat{τ}_v(t) = σ(ψ_τ(x_v'(t))) ∈ [0,1],
\]
where \hat{τ}_v(t) is the xThreat probability of a shot occurring in the next 10 seconds if a pass is played to v. The source says xThreat “[p]redicts the probability of a shot occurring in the next 10 seconds if a pass was played to an attacker” [PAGE 1]. At 10 Hz, the 10-second horizon corresponds to:
\[
N_{horizon} = \frac{10\ \text{s}}{0.1\ \text{s/frame}} = 100\ \text{frames}.
\]

The training objective can be expressed as a weighted binary cross-entropy over nodes and frames. If y_v(t) ∈ {0,1} is the observed binary label for the relevant task, then:
\[
L = -\frac{1}{\sum_t \sum_v w_v(t)} \sum_t \sum_v w_v(t)
\left[
y_v(t)\ln \hat{q}_v(t) + (1-y_v(t))\ln(1-\hat{q}_v(t))
\right],
\]
where \hat{q}_v(t) is replaced by \hat{r}_v(t), \hat{p}_v(t), or \hat{τ}_v(t) depending on the task. If ln is natural logarithm, the unit of L is nats; if log base 2 is used, the unit is bits. The source confirms node weighting: [PAGE 5] “Across the different tasks, the nodes are weighted in the loss calculation to stabilize the training.” For xReceiver, the source specifies: [PAGE 5] “the (intended) receiver of a pass has a weight of 1.0 and all other teammates of the ball carrier have a weight of 0.1 to balance the signal to background.” The source also specifies: [PAGE 5] “the nodes representing the defensive players were masked out for all models.”

The primary-target operator is:
\[
v^*(t) = \arg\max_{v ∈ A_t} \hat{r}_v(t),
\]
where A_t is the set of eligible attacking nodes. This follows the source’s definition: [PAGE 9] “We define the primary target as the attacker with the highest xReceiver value at each frame.” A target-change event can be written as:
\[
C(t) = 1\{v^*(t) \neq v^*(t-1)\}.
\]
The source interprets this as: [PAGE 9] “If there is a change in the primary target, we make an assumption that a proactive action has occurred.”

The Disruption Map operator is a spatial difference field. Let I_{team,c}(z) be the team-level spatial identity for model c ∈ {xReceiver, xPass, xThreat} at pitch location z, and let I_{game,c}(z) be the game-level spatial identity. Then:
\[
D_c(z) = I_{game,c}(z) - I_{team,c}(z).
\]
The source says: [PAGE 7] “We then calculate the same surface at a game level … and subtract the two surfaces to create the Disruption Map.” If I is a mean probability within a spatial cell, D_c(z) is dimensionless. If I is normalized over a pitch area A with units m², then I has units of probability per m² and D_c(z) also has units of probability per m².

The inference latency operator is:
\[
T_{total} = T_{feat} + T_{infer}.
\]
The source reports mean feature crafting time 0.044 s, mean inference time 0.001 s, mean total 0.045 s, standard deviation 0.006 s, minimum total 0.04 s, and maximum total 0.08 s [PAGE 15]. Since the tracking frame interval is 0.1 s, the real-time condition is approximately:
\[
T_{total} \le 0.1\ \text{s}.
\]

Breakdown regimes are explicit. First, if \hat{q}_v(t) approaches 1 when y_v(t)=0, or approaches 0 when y_v(t)=1, the logarithmic loss diverges. This is a numerical singularity unless logit-space stabilization is used. Second, if the edge set E_t is empty, the aggregation A_v^{in}(t) or A_v^{out}(t) is undefined unless a fallback node-only representation is defined. Third, if the sum aggregation is used without normalization, high-degree nodes may dominate embeddings. Fourth, if the 10-second shot horizon is misspecified, xThreat becomes a different temporal object. Fifth, if the disruption map is computed with too few game samples, the spatial difference becomes noise rather than tactical signal. The paper does not provide a formal uncertainty interval for Disruption Maps, so this remains an assumption-dependent regime.
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
The intellectual lineage of the paper is not merely machine learning; it is the history of converting soccer’s invisible defensive acts into measurable quantities. The opening reference to Virgil Van Dijk frames the problem: [PAGE 1] “The art of good defending is to prevent something from happening before it has even happened.” This is a retro-causal genealogy because the valued event is not the observed tackle or interception, but the unexecuted pass or shot that was suppressed earlier. The paper explicitly criticizes conventional defensive measurement: [PAGE 1] “A defender’s contribution is simply measured by the number of tackles or interceptions they make.” The historical trap is to equate defending with terminal events rather than with the narrowing of future decision trees.

The paper situates itself against several prior technical lineages. One lineage is formation-template alignment. The paper cites Lucey et al. and says this method “presented the concept of aligning players to a formation template” [PAGE 3]. The limitation is that soccer formations are variable, and a player in a role may differ across systems. The paper states: [PAGE 3] “in soccer, teams use different formations so a player at role 10 for a team using 433 would be very different to a team playing 352.” This is a historical trap: schema-based position labels can obscure the actual relational geometry of a frame. The GNN approach avoids fixed ordering by learning relational structure directly.

A second lineage is image-based pitch-control modeling. The paper cites Fernandez and Brefeld and says they “use Convolutional Neural Networks (CNNs) on an image representation of tracking data to circumvent the ordering/alignment issue while predicting probabilistic pitch control surfaces” [PAGE 3]. The paper criticizes this as “suboptimal as one gives up a very low-dimensional data set and converts it into a high-dimensional sparse representation” [PAGE 3]. The historical trap here is dimensionality inflation: tracking data are natively low-dimensional points and velocities, but rasterization turns them into sparse images, increasing computational burden and reducing direct access to player identity and relational motion. The paper’s graph representation preserves the low-dimensional structure while allowing permutation invariance.

A third lineage is value-based action modeling, including xThreat and pass-risk work. The paper says: [PAGE 3] “Concepts such as xThreat and xPass are not new with previous research using tracking data to predict the likelihood of a pass being complete or a goal being scored after a specific action.” It also references Spearman’s off-ball scoring opportunity work [PAGE 3]. The novelty is not the isolated value metric but the integration of xReceiver, xPass, and xThreat into a defensive impact toolbox. This is a retro-causal shift: instead of asking what happened after the pass, the paper asks what could have happened before the pass and what defensive structure made certain outcomes less probable.

A fourth lineage is ghosting and synthetic defensive behavior. The paper cites Bhostgusters and ghosting models that hallucinate defensive movement based on attacking movement [PAGE 3]. It notes that such tools can assess defensive strategy by comparing expected goals or possession value to a baseline [PAGE 3]. The historical trap is that ghosting may learn league-average tendencies, while the present paper seeks to measure actual observed deviation from a team’s own spatial identity. Disruption Maps are therefore genealogically related to ghosting but are anchored to empirical team and game surfaces.

The multi-week analytical traps are also historical. First, the “tackles and interceptions” trap persists because those events are easy to collect and explain. Second, the “formation template” trap persists because broadcast graphics and lineup sheets favor fixed positions. Third, the “post-pass evaluation” trap persists because event data are easier to label than continuous tracking data. Fourth, the “metric comparability” trap appears in the paper itself: the GNN xReceiver logloss is not directly comparable to the baseline because of different weighting schemes [PAGE 5]. This is a scientific genealogy issue: metric improvements can be confounded by label construction.

The paper also has a tactical genealogy. The reference to Jürgen Klopp’s Liverpool press is not decorative. The paper says: [PAGE 1] “Jürgen Klopp’s Liverpool, press the opposition with the aim of forcing them to give the ball away in specific areas of the pitch by limiting the number of passing options available in dangerous areas.” This is a theoretical lineage from gegenpressing to option restriction. The model converts this coaching concept into measurable receiver probabilities. The Lazio-Juventus case is the empirical instantiation: Lazio’s “Stellungsspiel” or defensive position play is measured through reduced xReceiver availability, reduced xThreat, and increased pass risk [PAGE 7]. The genealogical trap is to treat such a case as proof of a universal law; it is instead a single-game demonstration of a measurement framework.
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind in the paper is implicit but structural. The attacker’s ball carrier forms beliefs about which teammate is most available. The defender forms beliefs about which attacker is most dangerous or most likely to receive. The off-ball attacker forms beliefs about whether a run will increase their availability. The model approximates this recursion through frame-level probability fields. Instead of representing explicit mental states, it represents the decision landscape that mental states would navigate. The primary target operator is the simplest formal expression of this: the attacker with the highest xReceiver value is the current focal point of the ball carrier’s decision problem [PAGE 9].

The first recursion level is the ball carrier’s option set. If defenders compress the option space, the ball carrier’s feasible choice distribution shifts toward lower-threat alternatives. The paper’s Ronaldo example shows this. Ronaldo was not merely poorly positioned in a static sense; he was not viewed as a viable passing option in the first half. The paper says Lazio “were able to nullify Ronaldo as a viable passing option” [PAGE 10]. This is a second-order effect: Lazio did not only defend Ronaldo’s position; they defended his role in Juventus’s passing graph. The recursive question is: what did Juventus believe about Ronaldo’s availability, and how did Lazio’s defensive structure change that belief? The xReceiver field provides the measurable proxy for the answer.

The second recursion level is defender anticipation of attacking runs. The paper defines active off-ball runs as situations where “[a]n attacker moves at high speed to increase their probability of being a receiver” [PAGE 10]. This definition makes the attacker’s movement a deliberate attempt to modify the defender’s belief field. If the defender recognizes the run, the defender may shift, collide, or delay the run. If the defender fails, the attacker’s xReceiver rises. The Ronaldo run example demonstrates this: [PAGE 11] “When Costa received the ball Ronaldo only had an xReceiver of 0.22.” The subsequent run changes the field until Ronaldo becomes the primary target. The recursive theory of mind is therefore observable as a sequence: attacker initiates run, defender responds, receiver probability field updates, ball carrier’s primary target changes.

The third recursion level is the supply-line relationship. The paper identifies Ronaldo’s primary passers from previous matches and then measures how often Ronaldo was considered an option for those passers [PAGE 10]. This is a relational theory of mind: Lazio did not only target Ronaldo; they targeted the edges of Juventus’s passing network that supplied Ronaldo. The paper says: [PAGE 10] “We clearly see that the relationship between Matuidi and Ronaldo is heavily targeted, with Ronaldo only being considered an option for Matuidi once during the Lazio match.” This is not just individual marking; it is network-level belief manipulation. The defender’s objective is to alter the passer’s perceived option distribution before the pass decision is made.

Crisis habit regression appears when a team under pressure returns to familiar pathways. In the Lazio-Juventus example, the paper shows that Ronaldo’s availability to Dybala, Matuidi, and Sandro varied by half. The table values show first-half and second-half counts for Ronaldo as a target: Dybala 1 and 5, Matuidi 1 and 0, Sandro 3 and 3 [PAGE 11]. The Matuidi-Ronaldo edge was heavily suppressed in the first half but remained suppressed in the second half, while Dybala’s connection increased. This suggests that under crisis conditions, Juventus may have regressed toward alternate suppliers, but the paper does not prove habit regression as a causal mechanism. It proves that the receiver field changed across halves and across suppliers.

The counter-trap is overreading a single game as evidence of a stable tactical identity. The paper’s disruption map method acknowledges that differences can be due to opposition or to changes in one’s own team’s tactic [PAGE 7]. A crisis team may change shape, personnel, or tempo; those changes can mimic defensive success. The recursive theory of mind must therefore separate three layers: Lazio’s intended disruption, Juventus’s adaptive response, and the model’s measured probability shift. The paper’s method measures the third layer with high resolution but cannot fully separate the first two without additional controls.

The clock is essential to the recursive model. The xThreat horizon is 10 seconds [PAGE 1]. The xReceiver and xTransition models use frames before the pass: five frames and ten frames prior [PAGE 4]. The tracking frame rate is 10 Hz, so five frames equal 0.5 s and ten frames equal 1.0 s. These temporal windows matter because defensive pressure is not instantaneous. A defender may begin closing down a passing lane before the ball carrier’s decision crystallizes. The model’s ability to capture this depends on the temporal context. If the model only sees the pass moment, it captures the final trigger but not the decision formation. The paper’s inclusion of prior frames is therefore a temporal theory-of-mind correction: it allows the model to see the belief field before the action is executed.

The clock also governs real-time recursive interaction. If a coaching system must update at 10 Hz, then inference must fit within 0.1 s. The paper reports mean total latency below 0.05 s and maximum total latency 0.08 s [PAGE 15]. This means the system can, under the tested conditions, participate in the same temporal rhythm as the tracking data. If latency exceeded the frame interval, the recursive loop would break: the model would be predicting a past decision field rather than the live one. The recursive theory of mind is therefore not only conceptual but also computational: the measurement clock must align with the decision clock.
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto adjudication must ask whether the paper’s probabilistic conclusions survive physical, biomechanical, and environmental constraints. The paper’s model inputs provide the relevant physical variables: [PAGE 5] “Node features include player XY position, speed, acceleration, angle of motion, distance and angle to the attacking goal, distance to the ball carrier, difference in the angle of motion to the ball carrier, and a flag that indicates whether the player is the ball carrier.” These variables establish the physical layer: position in meters, velocity in m·s^{-1}, acceleration in m·s^{-2}, and angles in radians.

The first physical veto condition concerns run feasibility. If an attacker is predicted to become a receiver only by moving a distance Δx in time Δt, the required average speed is:
\[
v_{req} = \frac{||Δx||}{Δt}.
\]
If v_req exceeds a plausible maximum sprint velocity v_max for the player and context, the run is physically implausible. The model does not explicitly contain a biomechanical constraint, but it does contain speed and acceleration features, so a well-trained model should discount implausible runs. The veto proof is therefore conditional: if xReceiver rises for a player whose required displacement is biomechanically impossible, the prediction should be treated as a model artifact rather than a tactical inference. The source supports the physical variables but does not provide a formal biomechanical filter.

The second physical veto condition concerns pressure geometry. Man-oriented defending is defined as: [PAGE 10] “Defender moves closer to the primary target to reduce the probability of them being a receiver.” Ball-oriented defending is defined as: [PAGE 10] “Defender moves closer to the ball carrier at high speed to increase the chance of the ball being given away or pass to less dangerous area.” These definitions are relational but physical. If a defender’s distance to the target is too large, and the defender’s speed is insufficient to close the distance before the pass, the claimed pressure may not be physically meaningful. Let d_{D,T} be defender-to-target distance and v_D be defender speed toward the target. If:
\[
\frac{d_{D,T}}{v_D} > Δt_{available},
\]
where Δt_available is the time until the pass decision or ball arrival, then the defender cannot arrive before the decision point. The model may still output a low xPass because the defender is spatially aligned, but the physical pressure is not temporally sufficient. This is a key cross-layer veto: spatial proximity without temporal feasibility can overstate defensive impact.

The third physical veto condition concerns ball-travel feasibility. xPass is the probability that a pass to an attacker would be completed [PAGE 1]. If the pass distance is too long relative to ball speed, interception risk or travel time may make the pass option unrealistic. The paper’s baseline included “speed of pass, angle of pass and distance to receiver” [PAGE 5], but the GNN did not include these explicit pass-specific features. The paper argues that the GNN learns complex dynamic characteristics from node and edge features [PAGE 5]. The veto question is whether the GNN implicitly represents ball-travel feasibility. If the model outputs high xPass for passes that require impossible ball velocity, the physical layer overrides the learned probability.

The fourth veto condition concerns weather. The source does not list weather variables. The node features include position, speed, acceleration, angle, and relational geometry [PAGE 5], but not pitch wetness, wind, temperature, or surface condition. Therefore, the paper cannot directly adjudicate weather effects. If the tracking data come from “multiple seasons of Top 5 European football leagues” [PAGE 3], the model may implicitly average across many conditions, but it does not explicitly condition on weather. A cross-layer weather veto is therefore epistemic: any claim that a disruption map reflects Lazio’s tactical effect must be bounded by the assumption that weather-related execution variance is either small or randomly distributed across the comparison games. If weather systematically affected Juventus’s passing accuracy or shot threat in the Lazio match, the disruption map would confound tactical defense with environmental execution.

The fifth veto condition concerns data completeness. The graph method can cope with varying numbers of players [PAGE 3], but physical adjudication still requires accurate tracking. If a player is missing, occluded, or misidentified, the graph may infer availability from incomplete evidence. The paper’s graph representation is robust to ordering and variable player counts, but it is not automatically robust to tracking error. A physical veto should therefore include a data-quality gate: if positional uncertainty exceeds the spatial scale of the claimed disruption, the tactical inference is unsafe.

The sixth veto condition concerns physiological fatigue. The paper’s features include acceleration and speed, which partially proxy fatigue-related performance, but no explicit fatigue state is provided. A defender’s ability to close down a target late in a match may decline, and an attacker’s run frequency may change. The model’s probabilities are conditional on the observed motion features, but not on internal physiological state. Therefore, a cross-layer adjudication should not infer fatigue solely from model outputs. It can infer that motion characteristics changed, but not the physiological cause.

The final adjudication is layered. At the probabilistic layer, the paper provides a strong measurement of attacking option fields. At the physical layer, the model’s outputs are plausible only if the underlying motion features satisfy distance-time-speed feasibility. At the environmental layer, the absence of explicit weather covariates means that tactical attribution must be conditional on similar conditions. The paper’s Lazio-Juventus example is internally coherent because it is based on observed tracking data and model outputs, but its external causal force is limited. The correct verdict is: accept the model as a high-resolution probabilistic measurement system; reject any claim of deterministic physical causation unless distance, speed, acceleration, time, and data quality are independently verified.
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
The following three RLVR-style counterfactual veto scenarios are designed to be verifiable using the same classes of data described in the source: tracking data at 10 Hz, pass events, model outputs xReceiver, xPass, xThreat, and disruption surfaces [PAGE 3], [PAGE 5], [PAGE 7]. Each scenario states a hypothesis, a veto condition, and a predicted observable pattern.

Scenario 1: Man-oriented pressure reduces xPass even when xReceiver remains high.
Hypothesis: Lazio’s combined pressure on Matuidi reduced the completion likelihood of a pass to Matuidi despite Matuidi being the most likely receiver. The source reports: [PAGE 10] “his xPass was only 0.66.” The formal counterfactual is:
\[
\hat{p}_{Matuidi}^{pressure} < \hat{p}_{Matuidi}^{baseline}
\]
while
\[
\hat{r}_{Matuidi}^{pressure} \approx \max_{v} \hat{r}_v.
\]
Veto condition: if the reduction in xPass is not associated with defender proximity or passing-lane obstruction, the hypothesis fails. More specifically, let d_{D,T} be the distance from the nearest relevant defender to Matuidi, and let θ_{lane} be the angular obstruction of the passing lane. If xPass remains low when d_{D,T} is large and θ_{lane} indicates an open lane, then the low xPass is not evidence of Lazio’s pressure. It may reflect receiver technique, ball-carrier inaccuracy, or model bias.

Verifiable prediction: In matched frames where Matuidi is the primary target, xPass should decrease monotonically or statistically as defender proximity increases or lane obstruction increases. In Juventus games without Lazio’s specific pressing pattern, Matuidi’s xPass when receiving under similar spatial geometry should be higher. If the Lazio-game xPass suppression disappears after controlling for defender distance and lane angle, the defensive-pressure claim is vetoed.

Scenario 2: Supply-line targeting suppresses a specific passer-receiver edge.
Hypothesis: Lazio targeted the Matuidi-Ronaldo supply line. The source says: [PAGE 10] “We clearly see that the relationship between Matuidi and Ronaldo is heavily targeted, with Ronaldo only being considered an option for Matuidi once during the Lazio match.” The formal edge-level probability is:
\[
\hat{r}_{Ronaldo|Matuidi}^{Lazio} \ll \hat{r}_{Ronaldo|Matuidi}^{baseline}.
\]
Veto condition: if Ronaldo’s low xReceiver in Matuidi possession frames is equally low in baseline Juventus games, then Lazio did not specifically suppress that edge. The suppression would instead be a Juventus-wide tendency.

Verifiable prediction: Using the previous five matches as scouts would, compute the frequency with which Matuidi’s highest xReceiver target is Ronaldo. In the Lazio match, the frequency should be lower than in baseline matches after controlling for score state, pitch location, and game phase. If the frequency is not significantly lower, or if Lazio-specific defender positioning does not explain the reduction, the supply-line targeting claim is vetoed.

A secondary verification is the defender-side check. For frames where Matuidi is the ball carrier, identify whether Lazio defenders are positioned near Ronaldo or near the Matuidi-Ronaldo passing lane. If defender positions are unrelated to the suppression of Ronaldo’s xReceiver, the causal story is weakened. The model cannot prove intent, but it can test whether the geometric pattern required for man-oriented targeting is present.

Scenario 3: Disruption maps reflect opposition-induced tactical deviation, not Juventus self-change.
Hypothesis: Lazio decreased Juventus’s xThreat from the left side of the penalty box by 10% and increased pass risk in certain zones by 20%. The source states: [PAGE 7] “We can clearly see Lazio considerably decreased the xThreat from their left side of the penalty box (Ronaldo’s side), with a 10% decrease in Juventus’ xThreat compared to all other Juventus games in that season.” The formal disruption field is:
\[
D_{xThreat}(z) = I_{game,xThreat}(z) - I_{team,xThreat}(z).
\]
For the left penalty-box zone z_L, the claim is:
\[
D_{xThreat}(z_L) \approx -0.10
\]
in relative or percentage terms, depending on normalization.

Veto condition: if the same negative deviation appears in many Juventus games against comparable opponents, or if Juventus’s baseline tactic shifted independently before or during the match, then the deviation cannot be uniquely attributed to Lazio. The source explicitly warns: [PAGE 7] “Disruption Maps estimate tactical deviation from an average style, where differences can be attributed to opposition and/or changes of your own team’s tactic for a specific game. To differentiate between the two is out of the scope of this paper.” The veto is therefore required by the paper’s own scope limitation.

Verifiable prediction: Construct a counterfactual baseline of Juventus games with similar opponent pressing intensity, venue, score state, and game phase. If the Lazio-game xThreat reduction in z_L exceeds the distribution of reductions in that baseline, the Lazio-specific claim survives. If it falls within the baseline distribution, the claim is vetoed. The same test applies to the 20% pass-risk increase: compute the game-level xPass risk surface in the specified wide-channel and second-penalty-area zones, then compare it to Juventus’s team-level spatial identity across other games. The claim survives only if the positive deviation is larger than what would be expected from normal tactical variation.

These three veto scenarios form a hierarchy. Scenario 1 tests micro-level pressure efficacy. Scenario 2 tests network-level targeting. Scenario 3 tests macro-level spatial disruption. A robust RLVR-style evaluation would accept the paper’s defensive-impact framework only if all three counterfactual checks pass. If any one fails, the specific claim should be downgraded from “Lazio caused this effect” to “the observed probability field changed, with candidate explanations including Lazio’s defense, Juventus’s self-adjustment, tracking noise, or baseline tactical variation.”
</RLVR_COUNTERFACTUAL_VETOES>