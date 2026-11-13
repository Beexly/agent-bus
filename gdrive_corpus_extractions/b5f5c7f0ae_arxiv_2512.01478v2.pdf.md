---
source: "arxiv_2512.01478v2.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 13
model: deepseek/deepseek-v4.1-flash-1017
words: 8358
---

<NATIVE_REASONING>
We need answer user. Need produce required XML sections, >=1000 words, no betting lines/odds. We have source paper CourtMotion. Need analyze. Need include formal LaTeX equations, units, page citations exact verbatim quotes. Need cite [PAGE N] markers. Need deep multi-hop derivation gray-zone audit >=400 words. Need sections exact XML. Need avoid betting lines. Need mention no spreads etc. Need not mention betting. Need formal equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Need source operators and equations. Need retocausal genealogy historical/scientific lineage & multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need be careful: This is not a betting task, it's paper analysis. Could phrase "No wager/prediction-market content is included." We shouldn't mention betting lines at all? Invariant says never mention spreads totals moneylines odds. Mentioning "no betting lines" may violate? Better omit entirely. We can just not include. But maybe need acknowledge no odds? No.

Need use exact page markers and verbatim quotes. We can quote short phrases. Need incorporate source operators. Need formal equations. Need define units. Need analyze paper's data: 5 Hz positions, 30 Hz skeleton, 2s windows, N=10, T sequence length, loss NLL/BCE, AP metrics, 11ft x 11ft grid 121 bins. Need mention assumptions. Need singularity/breakdown regimes: GNN directed acyclic graph root middle hip, edge vector b = v(m)-v(j), if bone vector zero singular orientation? shoulder normal equation w=uR-uL and n=1/||w|| rotation w; singular when shoulders coincide ||w||=0. Causal convolution only past. Transformer mask. Event projection max over windows. Loss alpha=0.5. Trajectory bins 11 ft x 11 ft, 121 bins likely 11x11? Wait 11ft × 11ft grid yielding 121 trajectory bins: implies each bin 1ft x1ft, 121 = 11*11. Need mention. Position delta Δp sampled at 5 Hz. Event δpast=δfuture=2s (10 frames at 5 Hz). Past window τ∈[-10,-1], future τ∈[1,10]. Current at t. Shoulder normal vector. Pose embedding 30->5Hz via GNN. GNN blocks: 5 DGNN blocks. Architecture: 6 transformer layers, 8 heads, d=512. Dataset 631 games, 160 pretrain, 160 downstream, 40 eval. Need cite.

Need answer with sections. Need >=1000 words. Need ensure <THINK_TRACE> >=400 words deep. Then other sections. We can have total maybe 2000-3000 words. Need "Formal LaTeX, units, page citations, breakdown." Need include source operators and equations. Need exact quotes. Need include [PAGE 1] etc. Need quote exact from paper. Need no fake ratios. Use actual equations. Need SI units: positions in feet? Dataset NBA coordinates; paper says 5 Hz, 30 Hz, seconds, 3D joints, shoulder vector, 11ft×11ft. Need say positions are in court-coordinate units; paper specifically uses ft for trajectory bins; time in s; frequency Hz; probabilities dimensionless in [0,1]; NLL nats? Negative log-likelihood over softmax usually nats if natural log. BCE nats. AP dimensionless. We can state "NLL is in nats if natural log; paper writes ln." Good.

Need discuss event projection past/current/future max equations. Need cite [PAGE 2]. Quote "where δpast > 0 and δfuture > 0 define the extent of these windows." Good.

Need "gray-zone audit" in THINK_TRACE: Identify ambiguous claims: 35% reduction? Need compute NLL 0.38 vs 0.58 = (0.58-0.38)/0.58 = 0.3448 ~34.5%, paper says 35%. vs Baller2Vec 0.71 -> 46.5%. The same NLL with and without event projection means event heads don't help trajectory. Need note all AP values are average precision not accuracy/odds. The quote "Ours w/o GNN variant ... performs equally well" shows shoulder normals substitute for full skeleton on pick. Need quote. Need identify "event projection heads improve shot taker etc." Need source page citations.

Need "retrocausal genealogy": historical lineage: multi-agent spatiotemporal modeling, positional baselines, baller2vec, baller2vec++ look-ahead, TranSPORTmer, DGNN skeleton action recognition, transformer. Multi-week traps: "trajectory-only pretraining misses posture", "event projection enriches semantics but not trajectory NLL", "shoulder normal can replace GNN for pick", "shot success randomness caps assist", "pick definitions heuristic". Need cite page 2, 7, etc. Multi-week traps perhaps tasks that might mislead over weeks? Need maybe "long-horizon evaluation can mislead if using AP at 2.8s as strong; data efficiency and label noise." We need address "multi-week traps" maybe traps for prolonged research: conflating representation improvement with event-head; using static position only; ignoring label ambiguity; overfitting time horizons. Need articulate.

Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock. Hmm this is weird. Need interpret for modeling: recursive theory of mind = model's anticipation of player intent? Crisis habit regression = model learns routine motion vs strategically significant actions, event projection; counter-trap = event heads could create shortcut? Clock = temporal windows and causality. Need discuss: "crisis habit regression" when opponent/player under pressure reverts to habitual motion; model may over-rely on routine patterns. "counter-trap" event projection as counterfactual? The paper doesn't use theory of mind directly, but multi-agent coordinated behavior and tactical intent. Need be rigorous: Treat as Bayesian recursive belief update. Could formalize? Need not fake equations? Could use actual equations. Maybe define state s_t includes pose, shoulder, pos. Transformer outputs ẑ. Event probabilities. Recursive ToM: Player i's action depends on beliefs about others; model approximates via attention mask. Need mention "clock" = temporal causality mask and past/current/future windows. Need quote masking strategy [PAGE 4-5]. Need "crisis habit regression vs counter-trap vs clock": Under late-clock pressure, players may regress to habitual actions; event projection can exploit precursors; but if defensive counter adapts, past-window max may reinforce stale habits. Need note limits.

Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. The paper doesn't address weather (indoor basketball), but invariant requires. Need provide veto proof: any claim must be physically consistent with 5 Hz/30 Hz sampling, court bounds, shoulder normal nonzero, skeleton DAG, causal convolution, event windows. Weather: indoor NBA SportVU; weather not in source; external weather variables cannot be inserted unless linked to arena conditions; no evidence. Physical/biomechanical veto: 3D joints, shoulder normal; if shoulder vector zero/invalid, orientation singular; if occlusion or tracking gaps, GNN pose embedding degraded; 5Hz downsampling may alias high-frequency actions; 2s future window is 10 frames; event projection cannot predict beyond label horizon; assist depends on shot success randomness. Cross-layer veto: If any layer (data, biomechanics, environment) invalid, downstream AP not attributable to model. Need give proof via equations and source quotes.

Need "RLVR counterfactual vetoes": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need design scenarios that can falsify model. Need use actual tasks. Need provide prediction(s). "Veto" if condition not met. Need 3 scenarios verifiable: 
1. Ablate event projection: If event projection heads are causal for downstream gains, removing them should reduce AP. Source table says shot taker 0.91 vs 0.80, assist 0.65 vs 0.56. Veto if no significant drop under same embeddings/data. Prediction: drop ~0.11 AP shot taker, ~0.09 assist at late stage; trajectory NLL unchanged 0.38. 
2. Replace GNN with shoulder-normal-only: If shoulder normals suffice for pick, "Ours w/o GNN" should match full (0.82/0.85). Veto if full GNN significantly better. Prediction: no material difference for pick; but shot taker drops 0.77 vs 0.91. 
3. Randomize/corrupt skeleton while preserving positions: If skeletal motion contributes, corrupting joints should degrade shot taker/shot type, but not trajectory maybe? Source table "Ours w/o GNN" vs "Ours" shows shot taker 0.77 vs 0.91, shot type 0.42 vs 0.50. Prediction: AP drops. Veto if no drop. Need "verifiable reward" define. Could mention "RLVR reward = 1 if observed effect exceeds pre-registered effect size." Need avoid fake ratios? It's okay for RLVR? Need formal. Need not use fake ratios? "No fake ratios" means don't invent ratio like Force/Fatigue. We can define effect sizes as deltas in AP, NLL. That's fine.

Need include exact verbatim quotes. Need use quote marks. Need cite [PAGE N]. Need ensure quotes exact from source. Let's collect quotes:

PAGE 1 abstract: "35% reduction in trajectory prediction error compared to state-of-the-art position-based models" and "event projection heads that explicitly connect player movements to basketball events like passes, shots, and steals". 
PAGE 2: "At each time step t, the position of player i is represented by a 2D coordinate pt,i = (xt,i, yt,i) sampled at 5 Hz." Actually exact with line breaks: "At each time step t, the position of player i is represented by a 2D coordinate pt,i = (xt,i, yt,i) sampled at 5 Hz." 
PAGE 2: "Parameters δpast > 0 and δfuture > 0 define the extent of these windows." 
PAGE 2: "The shoulder-normal vector serves as a computationally lightweight alternative to full skeletal tracking, providing crucial directional information about player orientation with minimal overhead." 
PAGE 2 equation 4. Need quote maybe.
PAGE 3: "At 30 Hz, each player’s skeleton is defined by a set of joints V and directed edges E." 
PAGE 3: "We define the root as the middle hip joint, with edges pointing outward from more central joints to more peripheral ones." 
PAGE 3 equation 6.
PAGE 4 equation 11 causal conv. 
PAGE 4: "This convolution is causal: it only sums over current and previous frames τ ′ ≤ τ." 
PAGE 4: "The final pose embedding rt,i is obtained by aggregating across nodes and edges, concatenating, and applying a final fully connected layer." 
PAGE 4: "This masking strategy ensures temporal causality while allowing dependency modeling between players." 
PAGE 5: "For event projection, we set both temporal window parameters δpast and δfuture to 2 seconds each." 
PAGE 5: "The combined loss function uses α = 0.5, equally weighting trajectory prediction and event projection objectives." 
PAGE 5: "movements are discretized into an 11ft×11ft grid, yielding 121 trajectory bins." 
PAGE 5: "Our approach achieves a trajectory NLL of 0.38, representing a 35% improvement over our implementation of Baller2Vec++ (0.58) and a 47% improvement over the original Baller2Vec (0.71)." 
PAGE 5: "Interestingly, our models with and without events projection achieve identical trajectory NLL (0.38)" 
PAGE 6: "At 0.8s before the shot, our model achieves an impressive 0.91 AP ... Baller2Vec++’s 0.66 AP ... baseline’s 0.63 AP." Hmm exact: "reaching an impressive 0.91 AP at 0.8s before the shot, compared to Baller2Vec++’s 0.66 AP and the baseline’s 0.63 AP." 
PAGE 7: "For pick prediction, our “Ours w/o GNN” variant (which retains shoulder normal vectors and event projection) performs equally well as our full model (0.82 AP in the early stage, 0.85 AP at late stage)." 
PAGE 7: "This ceiling reflects a fundamental characteristic of assist prediction: labels depend on shot success, which has inherent randomness due to minor variations in release angle, ball rotation, or rim bounce, limiting achievable performance for any motion-based model." 
PAGE 7 table maybe. Need cite table. 
PAGE 8 table 1. 
PAGE 6: pick definition quote. 
PAGE 7: TranSPORTmer improvements. 
PAGE 2 Related: "baller2vec [1], which addressed multi-agent spatiotemporal systems but maintained an assumption that agent trajectories were statistically independent at each time step- a fundamental limitation for modeling coordinated behaviors." 
PAGE 2: "baller2vec++ [2] rethought information flow in multi-entity transformers through look-ahead trajectories and masking strategies." 
PAGE 2: "Shi et al. [10] introduced directed graph neural networks (DGNNs) that leverage joint connectivity and directionality, providing a foundation for effectively processing human pose data in action recognition tasks." 
PAGE 1: "Traditional approaches that use only player positions fail to capture crucial indicators such as body orientation, defensive stance, or shooting preparation motions." 
PAGE 1: "Our key insight is that effective basketball analysis requires simultaneously understanding motion patterns and their tactical outcomes in the context of the game." 
PAGE 2: "Unlike previous approaches that analyze isolated possession sequences, we process continuous gameplay segments regardless of possession changes, better reflecting real gameplay dynamics while requiring more sophisticated modeling of team coordination patterns." Wait page 5? It's PAGE 5 under Dataset. Quote.

Need "source operators and equations" formal LaTeX. Need define:
- State: \(s_{t,i}=(r_{t,i}, n_{t,i}, p_{t,i})\), \(\Delta s_{t,i}=s_{t+1,i}-s_{t,i}\). [PAGE 2]
- Shoulder normal: \(w_{t,i}=u^{(R)}_{t,i}-u^{(L)}_{t,i}\), \(n_{t,i}=\frac{1}{\|w_{t,i}\|}\begin{pmatrix}0&-1\\1&0\end{pmatrix}w_{t,i}\). [PAGE 2] Singular if \(\|w\|=0\).
- Bone vector: \(b^{(m\to j)}_{\tau,i}=v^{(m)}_{\tau,i}-v^{(j)}_{\tau,i}\). [PAGE 3] If zero edge vector degenerate.
- DGN aggregation: \(e_j^-=\sum_{e\in E_j^-} e^{(e,\ell)}\), \(e_j^+=\sum_{e\in E_j^+} e^{(e,\ell)}\). [PAGE 3]
- Vertex update: \(h^{(j,\ell+1)}_{\tau,i}=h_v([h^{(j,\ell)},e_j^-,e_j^+])\). [PAGE 3]
- Edge update: \(e^{(m\to j,\ell+1)}=h_e([e^{(m\to j,\ell)},h^{(m,\ell+1)},h^{(j,\ell+1)}])\). [PAGE 4]
- Causal conv: \(\tilde z^{(\ell)}_{\tau,i}=\sigma(\sum_{k=0}^{K-1} W_k z^{(\ell)}_{(\tau-k),i}+b)\). [PAGE 4] only \(\tau'\le\tau\).
- Event projections: \(\hat\epsilon_{t,i,r}=\sigma(W_r \hat z_{t,i}+b_r)\), r past/current/future. [PAGE 5]
- Past/current/future labels equations 1-3: \(\epsilon^{\phi}_{t,i,past}=\max_{\tau\in[-\delta_past,-1]}\epsilon^{\phi}_{t+\tau,i}\), current, future max. [PAGE 2]
- Trajectory bins: \(v_{t,i}=\operatorname{Bin}(\Delta p_{t,i})\in B\), \(P(v|Z)=\operatorname{softmax}(W_{traj}\hat z + b)\), NLL. [PAGE 5]
- Loss: \(L_{total}=\alpha L_{traj}+(1-\alpha)L_{events}\). [PAGE 5] alpha 0.5.
- Metrics: AP and NLL. Need units: NLL nats (natural log); AP dimensionless; Hz; ft; seconds.
- Breakdown regimes: \(\|w\|=0\); missing joints; sampling aliasing 5Hz vs 30Hz; event windows > label horizon; trajectory grid boundary; assist label depends on shot success; pick heuristic ambiguity; transformer causal mask.

Need "THINK_TRACE" deep multi-hop derivation & gray-zone audit >=400 words. Could include derivation of event window conversion: δ=2s at 5Hz -> 10 frames; past max over τ=-10..-1; future τ=1..10. Derive NLL improvement: 0.38 vs 0.58 -> 34.48%, vs 0.71 -> 46.48%. Note paper says 35/47. Need note "identical trajectory NLL" is a null result for event heads on trajectory. Need mention "Ours w/o GNN" pick equal but shot taker lower; so shoulder normals not universal substitute. Need mention "average precision" is threshold-free ranking metric; not accuracy; data efficiency figure. Need "gray-zone audit": label definitions are heuristic, AP ceiling. Need "multi-hop" chain: positions -> shoulder normals -> event projections -> attention -> downstream AP. Need explain causal masking: current step can only attend past/current, future window only as label not input; so predictions cannot leak future. But event heads are trained on future labels; the transformer embedding at t can use only up to t. Good. Need mention event projection heads are trained with future labels; at inference, future event probability is a prediction, not input. Need no leakage. Need cite PAGE 4-5.

Need "retrocausal genealogy" maybe 200 words. "Retrocausal" means lineage from historical baselines to current. Need mention paper's own genealogy: hand-crafted features [8] -> hierarchical neural nets [15] -> conditional VAEs [9] -> graph-based [7,13] -> DGNN [10] -> transformers [11] -> pedestrian transformer [6] -> baller2vec [1] -> baller2vec++ [2] -> FootBots [3], TranSPORTmer [4] -> CourtMotion. Cite PAGE 2. Multi-week traps: 
- Treating event projection as trajectory booster: source says identical NLL 0.38 [PAGE 5]; don't claim trajectory benefit from event heads.
- Treating shoulder normal as full skeleton replacement: pick equal but shot taker 0.77 vs 0.91 [PAGE 8 table; PAGE 7].
- Treating AP ceiling as model failure: assist labels depend on shot success randomness [PAGE 7]; pick heuristic ambiguity [PAGE 6].
- Ignoring sampling: 30Hz skeleton compressed to 5Hz; high-frequency biomechanics may alias [PAGE 2-4].
- Long horizon: early AP low; don't extrapolate. 
Need "multi-week traps" maybe "if a team spends weeks optimizing event heads, check ablation." Good.

Need "RECURSIVE_THEORY_OF_MIND" 200-300 words. Interpret:
- CourtMotion approximates recursive ToM via transformer attention over players and look-ahead states. It doesn't explicitly model beliefs; it learns from motion and events. 
- Crisis habit regression: under pressure, players may revert to routine motion; event projection past window captures precursor habits; but model may overfit to habitual cues and miss counter-adaptive behavior.
- Counter-trap: event heads can learn shortcuts from event co-occurrence (e.g., shot attempt) rather than intent; counterfactual training/ablation needed. 
- Clock: temporal mask and past/current/future windows act as clock; δ=2s; causality prevents future leakage. 
- Need quote "This multi-window approach enables CourtMotion to understand the complete lifecycle of basketball plays, from setup to execution to follow-through." [PAGE 5] 
- Need quote "The ‘past’ window helps identify precursor movements, the ‘current’ window focuses on immediate actions, and the ‘future’ window encourages the model to anticipate upcoming events." [PAGE 5] 
- Need maybe formal recursive belief: not in paper; we can say no explicit P(belief|...) operator; only attention. Avoid inventing equation? Could state "The paper provides no explicit recursive belief-state equation; any ToM claim must be treated as an interpretive layer." That is rigorous.

Need "CROSS_LAYER_VETO_ADJUDICATION" 200-300 words. Need physical/biomechanical/weather veto proof. 
- Physical: court coordinates, 5Hz, event windows; if claim violates 5Hz/2s (e.g., predicts beyond 2s future from event head) veto. The event head future window is 2s; trajectory prediction is one-step Δp. So can't claim long-horizon event prediction beyond trained horizon. 
- Biomechanical: shoulder normal singular when ||w||=0; skeletal DAG requires valid joints; 30->5Hz downsampling; if occlusion, pose embedding invalid. 
- Weather: NBA SportVU indoor; no weather variables in paper; any weather-based claim is outside source and vetoed unless arena environmental data supplied. 
- Cross-layer: If any layer invalid, AP cannot be attributed. Use quote "with minimal overhead" but singular. 
- Provide proof: \(n\) undefined at \(w=0\); causal conv cannot use future; event label max window; trajectory grid. 
- Need cite pages.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios + predictions. Need formal and verifiable. Could define reward function \(R=1\) if effect size condition holds. Need 3:
1. Event projection ablation: Remove event heads, keep GNN and transformer. Prediction: trajectory NLL unchanged at 0.38; shot taker AP at 0.8s drops from 0.91 to 0.80; assist at 0.8s drops 0.65 to 0.56. Veto if drop absent or trajectory NLL changes materially. Source table [PAGE 8].
2. Skeleton corruption / shoulder-normal-only: Replace GNN pose embedding with zero/noise while preserving positions/shoulder normals; prediction: pick remains ~0.82/0.85 for shoulder-normal-only; shot taker drops from 0.91 to 0.77; shot type 0.50 to 0.42. Veto if full GNN not better than shoulder-only on shot taker/shot type, or if pick degrades significantly. Source [PAGE 7-8].
3. Temporal leakage/clock test: Shuffle future labels or block future window; prediction: if model uses future leakage, future AP inflated; after causal mask and future-label randomization, future event AP drops to chance for future event but past/current unaffected. But paper doesn't report chance; we can predict "future-window AP falls toward base rate" not exact. Need verifiable: implement label permutation for future window; reward if AP falls below e.g. 0.60? Hmm better use source: if future event head uses only past/current, permuting future labels during training should remove future event prediction but not trajectory. But this is training, not inference. Need "counterfactual veto". Maybe:
3. Position-only vs skeleton with event projection: If skeletal motion is causal, removing 3D joints but retaining positions and event projection should degrade shot taker and shot type; source "Ours w/o GNN w/o Events Projection" vs "Ours w/o Events Projection" shows shot taker 0.65 vs 0.80 at 0.8s? Let's see table: Ours w/o Events Projection: shot taker 0.33 at 2.8s, 0.80 at 0.8s. Ours w/o GNN w/o Events Projection: 0.33, 0.65. This isolates GNN. But maybe scenario 2 already. 
Need 3 distinct: 
- Event projection ablation.
- GNN skeleton ablation.
- Label-noise/ceiling test for assist: randomize shot outcomes? The paper says assist labels depend on shot success. Counterfactual: replace scored shot labels with "shot attempt" regardless of make; assist AP should rise? Actually if assist label requires score, randomizing makes labels noisy; predict ceiling. Verifiable: if assist AP at shot moment remains 0.65 with randomized make/miss labels, then model is not using shot-success signal? Hmm.
Alternatively:
3. Causal horizon veto: Evaluate at 2.8s vs 0.8s. Prediction: AP increases as event approaches; if a model reports constant AP across horizons, suspect leakage or label smoothing. Source table: shot taker 0.38 ->0.91; assist 0.58->0.65; 2pt/3pt 0.73->0.97; shot type 0.35->0.50. Veto if model's AP doesn't increase. But that's not a counterfactual scenario? Could be "retrain with future window labels only and test at horizons." Hmm.

Need "RLVR" maybe reward learning with verifiable rewards. We can define each scenario as a testable counterfactual with reward. Need not overdo.

Need answer structure exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need ensure no betting lines/odds. No mention. Need maybe not mention "AP" as odds? AP is average precision, fine.

Need word count >=1000. We'll aim ~2500 words. Need use exact XML sections. Need within THINK_TRACE >=400 words. Let's draft.

Need be cautious with "source text" includes page 13 only figures. We can cite page markers. Need exact quotes. Use blockquotes maybe. Need verbatim quotes not too long. Need ensure quotes exact. Let's verify exact quote from page 2: "At each time step t, the position of player i is represented by a 2D coordinate pt,i = (xt,i, yt,i) sampled at 5 Hz." Yes.

"Parameters δpast > 0 and δfuture > 0 define the extent of these windows." Exact. 
"the shoulder-normal vector serves as a computationally lightweight alternative to full skeletal tracking, providing crucial directional information about player orientation with minimal overhead." Exact lower case? Paper: "The shoulder-normal vector serves as a computationally lightweight alternative to full skeletal tracking, providing crucial directional information about player orientation with minimal overhead." Good.

"At 30 Hz, each player’s skeleton is defined by a set of joints V and directed edges E." Exact. 
"We define the root as the middle hip joint, with edges pointing outward from more central joints to more peripheral ones." Exact.
"This convolution is causal: it only sums over current and previous frames τ ′ ≤τ." Exact.
"For event projection, we set both temporal window parameters δpast and δfuture to 2 seconds each." Exact.
"The combined loss function uses α = 0.5, equally weighting trajectory prediction and event projection objectives." Exact.
"movements are discretized into an 11ft×11ft grid, yielding 121 trajectory bins." Exact.
"Interestingly, our models with and without events projection achieve identical trajectory NLL (0.38)" Exact.
"For pick prediction, our “Ours w/o GNN” variant (which retains shoulder normal vectors and event projection) performs equally well as our full model (0.82 AP in the early stage, 0.85 AP at late stage)." Exact includes smart quotes. Good.
"This ceiling reflects a fundamental characteristic of assist prediction: labels depend on shot success, which has inherent randomness due to minor variations in release angle, ball rotation, or rim bounce, limiting achievable performance for any motion-based model." Exact.
"The ‘past’ window helps identify precursor movements, the ‘current’ window focuses on immediate actions, and the ‘future’ window encourages the model to anticipate upcoming events." Exact? Paper: "The ‘past’ window helps identify precursor movements, the ‘current’ window focuses on immediate actions, and the ‘future’ window encourages the model to anticipate upcoming events." Yes.
"This multi-window approach enables CourtMotion to understand the complete lifecycle of basketball plays, from setup to execution to follow-through." Exact.
"This masking strategy ensures temporal causality while allowing dependency modeling between players." Exact.
"baller2vec++ [2] rethought information flow in multi-entity transformers through look-ahead trajectories and masking strategies." Exact.
"Shi et al. [10] introduced directed graph neural networks (DGNNs) that leverage joint connectivity and directionality, providing a foundation for effectively processing human pose data in action recognition tasks." Exact.
"Traditional approaches that use only player positions fail to capture crucial indicators such as body orientation, defensive stance, or shooting preparation motions." Exact.

Need include equations in LaTeX. Use \(\). Need maybe describe units in table? Could use bullets. Need "SI/information/probability units". Use:
- \(p_{t,i}\): court coordinate units; paper's trajectory grid uses ft.
- \(t\): s; frequencies Hz.
- \(\hat\epsilon\): probability dimensionless [0,1]; NLL/BCE nats; AP dimensionless.
- \(r_{t,i}\): pose embedding dimensionless vector; \(z\): dimensionless.
- \(\delta\): s.
- \(W\): learnable matrices; no units.

Need "singularity/breakdown regimes" in source section. Could list:
1. Shoulder-normal singular: \(\|w_{t,i}\|=0\) makes \(n\) undefined; left/right shoulders coincide or missing; rotational orientation undefined.
2. Bone vector degenerate: \(b=0\) if joint coords equal or occlusion collapse; edge direction undefined; DGN aggregation unstable.
3. Temporal aliasing: 30 Hz -> 5 Hz downsample; motions above 2.5 Hz Nyquist alias; paper uses causal conv and stride; quick pivots may be lost. Actually 5 Hz Nyquist 2.5 Hz. Mention.
4. Event-window saturation: max over 2s window; if event occurs outside window, label 0; if multiple events, max loses multiplicity/order.
5. Causal mask: cannot use future; but look-ahead trajectory \(u_{t,i}\) includes \(p_{t+1}\) and \(\Delta p\), which is target? Wait important: In Baller2Vec++ look-ahead, \(u_{t,i}=g_u([\psi(i), p_{t+1,i}, s_{t,i}, \Delta p_{t,i}, \Delta s_{t,i}])\), and trajectory target is \(\Delta p_{t,i}\). Does this leak? It includes \(p_{t+1}\) and \(\Delta p\) in input to u? The paper says look-ahead trajectory and state; but for predicting trajectory, using \(p_{t+1}\) as input would be leakage. But in Baller2Vec++ architecture, look-ahead trajectory is used for next-step prediction? Let's inspect: They define current state z_{t,i} = g_z([ψ, p_t, s_t]); look-ahead trajectory u_{t,i}=g_u([ψ, p_{t+1}, s_t, Δp_t, Δs_t]); starting r0. Then transformer outputs ẑ_{t,i}. For trajectory prediction, \(P(v_{t,i}|\hat Z)\) where \(v=Bin(Δp_{t,i})\). If \(u_{t,i}\) includes \(\Delta p_{t,i}\) and \(p_{t+1}\), that is target leakage. But perhaps \(u\) is for predicting next step? Let's read page 4: "We extend the Baller2Vec++ [2] architecture to incorporate skeletal data and utilize event predictions. For each player i at time step t, we define three feature vectors: 1. Current state including skeleton embedding and shoulder normal direction: zt,i = gz([ψ(i), pt,i, st,i]) 2. Look-ahead trajectory and state: ut,i = gu([ψ(i), pt+1,i, st,i, ∆pt,i, ∆st,i]) 3. Starting location and initial state: r0,i = gr([ψ(i), p1,i, s1,i])". This indeed includes Δp_t. And trajectory loss predicts v_t = Bin(Δp_t). That seems leakage. But Baller2Vec++ uses look-ahead masking? Maybe the transformer output for z_t predicts next? Actually in baller2vec++, u_t includes future trajectory to allow next step? Hmm. The paper may have an error? Need not dwell? But gray-zone audit should mention potential leakage ambiguity: The source defines \(u_{t,i}\) with \(p_{t+1,i}\) and \(\Delta p_{t,i}\), while the trajectory target is \(v_{t,i}=\operatorname{Bin}(\Delta p_{t,i})\). If the same \(\Delta p_{t,i}\) is fed into the model and used as target, then the reported trajectory NLL is not a clean future prediction unless \(u_{t,i}\) is masked or used only for later steps. This is a major gray-zone audit! Need include. The paper's masking allows \(z_{t,i}\) to attend to \(u_{t',j}\) where \(t'<t\) or \(t'=t\) and j<i. So for player i at time t, \(z_{t,i}\) can attend to \(u_{t,j}\) for j<i, which includes \(\Delta p_{t,j}\) for other players at same t. It cannot attend to own u_t? It can attend to u_{t',j} where t'<t or t'=t and j<i. So own current Δp not directly via u_t, but z_t maybe no. However \(u_{t,i}\) itself is input to transformer and its output \(\hat z_{t,i}\)? The transformer processes all inputs; output for z_{t,i} may attend to u_{t,j} for j<i, not own u_t. But the model predicts trajectory for each player i from \(\hat z_{t,i}\). The u_{t,i} may be used for output? They extract \(\hat z_{t,i}\) for each player and timestep. It might not include own u_t. But for player j later in index, it can attend to u_{t,i} of earlier players, leaking their Δp_t. This is cross-player leakage but maybe intended? It does not leak target for same player, but can leak other players' future. Since targets are per-player, using other players' Δp_t at same time might be allowed? In real-time prediction, you don't know other players' future positions either. But Baller2Vec++ look-ahead uses future trajectories of other agents? It may be a training-only teacher forcing? The paper doesn't clarify. This is a gray-zone. Need mention as audit: "The source's \(u_{t,i}\) contains \(\Delta p_{t,i}\) and \(p_{t+1,i}\); because the trajectory target is \(v_{t,i}=\operatorname{Bin}(\Delta p_{t,i})\), any claim of strict real-time trajectory forecasting requires verifying that the look-ahead branch is masked or excluded from the target player's prediction. The source does not provide that proof." This is important. Cite PAGE 4 and PAGE 5. This could be considered a source operator. Need not accuse; just gray-zone. Good.

Also event projection heads use future event labels, but input does not include future; okay.

Need "multi-hop derivation" maybe include this leakage audit. Great.

Need "counterfactual vetoes" could include leakage test: If \(u_{t,i}\) includes Δp, then permuting own Δp in u should change trajectory NLL if leakage; if NLL unchanged, no leakage. But source says NLL 0.38. We can propose scenario 3: Mask look-ahead \(u_{t,i}\) at time t (or remove own/current Δp) and retrain; if NLL remains 0.38, no leakage; if worsens to ~0.58, leakage contributed. This is a verifiable RLVR veto. Good.

Need be careful: RLVR scenario 3 with prediction: Under strict masking, trajectory NLL should not be better than 0.58? Hmm. The reported 0.38 improvement over Baller2Vec++ 0.58. If look-ahead leakage is responsible, masking should degrade. Prediction: NLL will rise relative to 0.38 if leakage; if not, stay near 0.38. This is a counterfactual veto. Good.

Need "no fake ratios" - we use deltas, not fake ratios. But we do compute percent reduction? The paper does. That's a real ratio (relative reduction). Is that allowed? "Never invent fake ratios (Force / Fatigue)" means don't invent. Percent reduction from source is okay? It is a ratio but factual. We can mention actual. Need not overuse.

Need "units" for NLL: natural log nats. BCE with probabilities: nats. AP: dimensionless. Frequency: Hz. Court positions: ft for grid, coordinate units otherwise. Time windows: s. Good.

Need maybe include "assumptions" explicitly:
- Player identities known; 10 players; skeleton joints valid; shoulder normals available; events labels from SportVU; no possession segmentation; stationary; etc.
- The model assumes event labels are binary and max-over-window; assumes causal mask; assumes trajectory binning is sufficient.
Need cite.

Need "breakdown regimes" in SOURCE_OPERATORS. Use bullets.

Need "retrocausal genealogy" maybe mention "retrocausal" as tracing back from current model to prior operators. Use "genealogy" with lineage. Multi-week traps.
Need "RECURSIVE_THEORY_OF_MIND" maybe include "crisis habit regression vs counter-trap vs clock" as subpoints. Need define:
- Crisis habit regression: Under late-game pressure, agents may revert to low-entropy habitual motor programs; model's past-window event projection can exploit these; but if all agents counter-adapt, learned habit priors become stale. Formalized as distribution shift \(P_{\text{late}}(s_t)\ne P_{\text{train}}(s_t)\). 
- Counter-trap: Event heads might learn event co-occurrence shortcuts (e.g., shot attempt) not intent; a counterfactual intervention (occlude skeleton, keep positions) can reveal. 
- Clock: δpast=δfuture=2s, causal mask; model has no global game clock feature in equations? It has no explicit score/clock input; player embedding ψ(i), positions, states. So any "clock" claim is only temporal window, not game clock. Important: The model does not include game clock or score in state; thus "clock" is only sequence time. Mention source does not mention score/clock features. Good. This is rigorous. 
Need quote "This masking strategy ensures temporal causality" [PAGE 4]. 
Need say "Recursive ToM is not explicitly modeled; attention is the only relational operator." Quote? No exact quote. State "The paper does not specify a belief-state variable." That's okay.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe include weather: "No weather operator appears in the paper; NBA SportVU is indoor. Weather claims are outside the source and must be vetoed." Need cite page 5 dataset. Quote "NBA SportVU dataset, containing spatiotemporal recordings from 631 games during the 2015-2016 season." [PAGE 5]. Good. 
Need "physical veto proof": "If a proposed event requires >2s future, event head not trained to output it." "If a proposed biomechanical variable requires >5Hz, downsampling may alias." "If shoulder normals missing, orientation singular." Good.

Need "RLVR" scenarios maybe use "reward" formal:
Define \(R_j = \mathbb{1}[\Delta AP_j \ge \tau_j]\) or \(R = \mathbb{1}[\text{NLL}_{masked} \ge \text{NLL}_{unmasked}+\epsilon]\). Need exact thresholds from source? We can set "pre-registered effect" with source values. Use actual values. Need "verifiable" means measurable. Good.

Need ensure final answer is not too long? Desired oververbosity 5. But required depth >=1000 words. We can do ~2200 words. Need not include citations to page 13 figures? Could mention appendix PR curves [PAGE 10-13] but not necessary. Need cite exact page markers.

Let's plan final:

<THINK_TRACE>
Paragraph 1: Overview and multi-hop schema. Paper source is CourtMotion; I audit chain from positions/skeleton to shoulder normal to GNN to transformer to event heads to losses to metrics. Use page citations. 
Paragraph 2: Derive temporal windows: 5Hz, δ=2s -> 10 frames; past/future max equations; current. This is actual equations. Event head predicts probabilities; trajectory NLL. 
Paragraph 3: Gray-zone audit: reported 35% NLL reduction; compute 0.38 vs 0.58 = 34.5%, vs 0.71 = 46.5%; paper rounds. Event heads don't improve NLL; so event projection is semantic not trajectory. 
Paragraph 4: Architecture audit: GNN 30Hz->5Hz; shoulder normal singular; pick equal w/o GNN vs full; shot taker drop. 
Paragraph 5: Leakage/clock audit: \(u_{t,i}\) includes \(p_{t+1}\) and \(\Delta p\); trajectory target is Bin Δp; source doesn't prove strict real-time masking for same player/other players. Need verify. 
Paragraph 6: Label ceilings: assist randomness, pick heuristic; AP values not accuracy; not extrapolate. 
Need >=400 words. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
List operators with equations and units and citations and breakdown. Use bullets.
1 State and sampling.
2 Shoulder normal.
3 Bone vector and DGN.
4 Causal conv.
5 Transformer masks.
6 Event windows and heads.
7 Trajectory binning and losses.
8 Metrics and units.
9 Breakdown regimes.
Need include exact quotes. Good.

<RETROCAUSAL_GENEALOGY>
Lineage: hand-crafted [8] -> hierarchical [15] -> CVAE [9] -> graph [7,13] -> DGNN [10] -> transformers [11][6] -> baller2vec [1] -> baller2vec++ [2] -> FootBots [3], TranSPORTmer [4] -> CourtMotion. Quote page 2. Multi-week traps bullets. 
Need "retrocausal" maybe "retrocausal genealogy of operators" not literal.

<RECURSIVE_THEORY_OF_MIND>
Explain no explicit belief state; attention approximates. Subtitles crisis habit regression, counter-trap, clock. Use quotes. 
Need mention "The ‘past’ window..." quote. 
Need "crisis habit regression vs counter-trap vs clock" exactly. 
Need "recursive ToM" maybe "recursive because transformer outputs at t become context for other players and later times via mask; but no recursive belief update equation." Good.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, weather. Proof bullets. 
- Physical: 5Hz, 2s windows, 11ft grid, 121 bins; cannot claim beyond. 
- Biomechanical: shoulder normal singular, bone vector degenerate, occlusion; 30->5Hz Nyquist. 
- Weather: indoor SportVU; no weather variable; veto. 
- Cross-layer: if any veto, downstream AP unattributable. 
Need cite.

<RLVR_COUNTERFACTUAL_VETOES>
Define RLVR reward. Three scenarios:
1 Event projection ablation. Prediction: NLL unchanged 0.38; shot taker 0.91->0.80; assist 0.65->0.56. Veto if not. Source [PAGE 5,8].
2 GNN skeleton ablation/corruption. Prediction: shoulder-only pick 0.82/0.85 equal; shot taker 0.91->0.77; shot type 0.50->0.42. Veto if full GNN not better on shot taker/shot type or pick degrades. Source [PAGE 7,8].
3 Look-ahead leakage/clock test: Remove own/current \(p_{t+1},\Delta p\) from \(u_{t,i}\) or mask it; retrain. Prediction: if strict causal, NLL remains near 0.38; if leakage, NLL rises toward 0.58+; event AP should not improve from future labels. Veto if NLL stays 0.38 despite leakage? Wait if leakage removed and NLL remains 0.38, no leakage; if NLL rises, leakage. We need "veto scenario" maybe reward if NLL rises? Let's phrase: "Veto the claim that 0.38 is a strict real-time trajectory forecast if masking the look-ahead \(\Delta p_{t,i}\) causes NLL to rise materially above 0.38; prediction: clean masked model will be ≥0.38, potentially near 0.58." Hmm. Need "3 verifiable RLVR veto scenarios + predictions." Each scenario should have a prediction and veto condition. 
Maybe scenario 3: "Future-label permutation test" not leakage. Predict: permuting future event labels should degrade future event AP but not trajectory NLL; if trajectory NLL changes, event heads leak. Source says identical NLL with/without event projection, so prediction: no change. Veto if change. But that's weaker. 
Maybe use leakage as scenario 3. Good.

Need "RLVR" reward: \(R=1\) if observed condition matches prediction; 0 otherwise. That's verifiable. Use "counterfactual veto" = if fails, claim rejected. Good.

Need avoid "betting" words. Fine.

Need final answer. Ensure XML valid? Sections with text. Need no markdown? XML sections can contain markdown? Probably okay. Use plain text with LaTeX. Need exact XML tags. No extra outside? We can just output sections. Good.

Let's write with enough detail. Need word count. Let's draft carefully.

Potential issue: "No betting lines" - we won't mention.

Need "verbatim quotes" with exact [PAGE N]. Use quotes. Need not overquote. Good.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a technical paper, not a wager or market document. The multi-hop audit begins with the paper’s data contract and then follows every operator that could inflate or invalidate a downstream claim. First hop: the paper represents player position as a 2D coordinate “sampled at 5 Hz” [PAGE 2]. Second hop: the skeleton is processed at 30 Hz through a directed graph and compressed to 5 Hz pose embeddings [PAGE 2-4]. Third hop: shoulder orientation is computed from left/right shoulder joints via a normal vector [PAGE 2]. Fourth hop: a transformer with causal masking consumes current state, look-ahead state, and starting state, then outputs embeddings [PAGE 4-5]. Fifth hop: linear event-projection heads map embeddings to past, current, and future event probabilities [PAGE 5]. Sixth hop: trajectory bins and event BCE losses are optimized with \(\alpha=0.5\) [PAGE 5]. Seventh hop: average precision and NLL are reported for downstream tasks [PAGE 6-8]. The causal chain is therefore not “skeleton magically predicts events”; it is “5 Hz positions + 30 Hz->5 Hz skeletal encoding + shoulder orientation + causal attention + multi-window event supervision + linear probing.”

The temporal-window derivation is straightforward but important. With 5 Hz sampling and \(\delta_{\text{past}}=\delta_{\text{future}}=2\) s [PAGE 5], each window spans \(2\text{ s}\times5\text{ Hz}=10\) frames. Thus the past label is a max over \(\tau\in[-10,-1]\), the current label is at \(t\), and the future label is a max over \(\tau\in[1,10]\), matching the paper’s equations (1)-(3) [PAGE 2]. The event head is a sigmoid linear projection \(\hat\epsilon_{t,i,r}=\sigma(W_r\hat z_{t,i}+b_r)\) [PAGE 5]. The trajectory head is a softmax over 121 bins from an “11ft×11ft grid” [PAGE 5]. The total loss is \(\mathcal L_{\text{total}}=\alpha\mathcal L_{\text{traj}}+(1-\alpha)\mathcal L_{\text{events}}\) with \(\alpha=0.5\) [PAGE 5].

Gray-zone audit 1: the headline “35% reduction” is a relative NLL reduction. The paper reports trajectory NLL 0.38 versus 0.58 for its Baller2Vec++ implementation and 0.71 for Baller2Vec [PAGE 5]. The exact relative reductions are \((0.58-0.38)/0.58\approx34.5\%\) and \((0.71-0.38)/0.71\approx46.5\%\), so the paper’s “35%” and “47%” are rounded. That is consistent, but it is a relative NLL reduction, not an absolute accuracy gain. Gray-zone audit 2: the paper says “our models with and without events projection achieve identical trajectory NLL (0.38)” [PAGE 5]. Therefore event-projection heads should not be credited with trajectory prediction gains; their value is downstream semantic enrichment. Gray-zone audit 3: the “Ours w/o GNN” variant, which “retains shoulder normal vectors and event projection,” performs “equally well” on pick prediction at 0.82/0.85 AP [PAGE 7]. That does not generalize to all tasks: in Table 1, the full model reaches 0.91 shot-taker AP at 0.8 s versus 0.77 for “Ours w/o GNN” [PAGE 8]. So shoulder normals are a useful lightweight substitute for pick geometry, not a universal substitute for skeletal motion. Gray-zone audit 4: the look-ahead state \(u_{t,i}\) is defined with \(p_{t+1,i}\), \(\Delta p_{t,i}\), and \(\Delta s_{t,i}\) [PAGE 4], while the trajectory target is \(v_{t,i}=\operatorname{Bin}(\Delta p_{t,i})\) [PAGE 5]. The source does not explicitly prove that the target player’s own look-ahead displacement is masked out of the prediction path. A strict real-time claim therefore needs an intervention: mask the look-ahead branch and retrain. If NLL stays near 0.38, the reported number is robust; if it rises toward 0.58 or above, the look-ahead branch may be contributing non-causal information. Gray-zone audit 5: assist labels depend on shot success, and the paper explicitly says this creates “inherent randomness due to minor variations in release angle, ball rotation, or rim bounce” [PAGE 7]. Pick labels are also heuristic and admit boundary cases [PAGE 6]. Thus the reported AP ceilings are partly label ceilings, not pure model ceilings.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source operators are formalized below with units, assumptions, page citations, and singularity/breakdown regimes. Position coordinates \(p_{t,i}=(x_{t,i},y_{t,i})\) are court-coordinate quantities; the trajectory grid is specified in feet. Time \(t\) is in seconds, sampling frequencies are in Hz, event probabilities are dimensionless in \([0,1]\), NLL/BCE are in nats when natural logarithms are used, and average precision is dimensionless.

1. State and sampling. The paper states: “At each time step t, the position of player i is represented by a 2D coordinate pt,i = (xt,i, yt,i) sampled at 5 Hz” [PAGE 2]. The complete state and its delta are
\[
s_{t,i}=(r_{t,i},n_{t,i},p_{t,i}),\qquad \Delta s_{t,i}=s_{t+1,i}-s_{t,i},
\]
where \(r_{t,i}\) is the pose embedding, \(n_{t,i}\) is the shoulder-normal vector, and \(p_{t,i}\) is position [PAGE 2]. Assumption: player identities and 5 Hz positions are available. Breakdown: 5 Hz sampling has a 2.5 Hz Nyquist limit; faster pivots or shooting prep can alias if not represented in the 30 Hz skeleton branch before downsampling.

2. Shoulder-normal operator. Given left and right shoulder coordinates \(u^{(L)}_{t,i}\) and \(u^{(R)}_{t,i}\),
\[
w_{t,i}=u^{(R)}_{t,i}-u^{(L)}_{t,i},\qquad
n_{t,i}=\frac{1}{\lVert w_{t,i}\rVert}
\begin{pmatrix}0&-1\\1&0\end{pmatrix}w_{t,i}.
\]
The paper says this vector is “a computationally lightweight alternative to full skeletal tracking, providing crucial directional information about player orientation with minimal overhead” [PAGE 2]. Singularity: if \(\lVert w_{t,i}\rVert=0\), the normal is undefined; this occurs if shoulder joints coincide, are missing, or are collapsed by tracking error. Breakdown: orientation is unidentifiable at that frame, and any downstream pick or shot-preparation claim that depends on orientation is vetoed unless imputed.

3. Skeletal DAG and bone vectors. “At 30 Hz, each player’s skeleton is defined by a set of joints V and directed edges E” [PAGE 3]. The root is the middle hip, with edges “pointing outward from more central joints to more peripheral ones” [PAGE 3]. For an edge \(m\to j\),
\[
b^{(m\to j)}_{\tau,i}=v^{(m)}_{\tau,i}-v^{(j)}_{\tau,i}.
\]
Assumption: each frame is a valid directed acyclic graph. Breakdown: if \(b^{(m\to j)}_{\tau,i}=0\), the edge direction is degenerate; if joints are occluded or swapped, the DAG topology is wrong and the GNN embedding is not biomechanically interpretable.

4. DGN aggregation and updates. For vertex \(j\), incoming and outgoing edge sets \(E_j^-\) and \(E_j^+\),
\[
e_j^-=\sum_{e\in E_j^-}e^{(e,\ell)}_{\tau,i},\qquad
e_j^+=\sum_{e\in E_j^+}e^{(e,\ell)}_{\tau,i},
\]
\[
h^{(j,\ell+1)}_{\tau,i}=h_v\bigl([h^{(j,\ell)}_{\tau,i},e_j^-,e_j^+]\bigr),
\]
\[
e^{(m\to j,\ell+1)}_{\tau,i}
=h_e\bigl([e^{(m\to j,\ell)}_{\tau,i},
h^{(m,\ell+1)}_{\tau,i},
h^{(j,\ell+1)}_{\tau,i}]\bigr).
\]
These are the paper’s DGN vertex and edge updates [PAGE 3-4]. Assumption: summation aggregation is permutation-invariant over edge sets. Breakdown: variable skeleton topology or missing edges changes the aggregation order and can create unstable embeddings.

5. Causal temporal convolution. For vertex or edge state \(z^{(\ell)}_{\tau,i}\),
\[
\tilde z^{(\ell)}_{\tau,i}
=\sigma\left(\sum_{k=0}^{K-1}W_k z^{(\ell)}_{(\tau-k),i}+b\right).
\]
The paper states: “This convolution is causal: it only sums over current and previous frames \(\tau'\le\tau\)” [PAGE 4]. Assumption: no future frame enters the temporal encoder. Breakdown: stride downsampling from 30 Hz to 10 Hz and then to 5 Hz [PAGE 4] can discard high-frequency motion; any claim about sub-200 ms biomechanics must be tested against the pre-downsampled signal.

6. Transformer masking. The paper defines current, look-ahead, and starting vectors \(z_{t,i}\), \(u_{t,i}\), and \(r_{0,i}\), with \(u_{t,i}\) containing \(p_{t+1,i}\), \(\Delta p_{t,i}\), and \(\Delta s_{t,i}\) [PAGE 4]. The attention mask allows \(z_{t,i}\) to attend to prior/current \(z\) and prior \(u\), and \(u_{t,i}\) to prior/current \(z\) and prior/current \(u\) [PAGE 4-5]. The paper says: “This masking strategy ensures temporal causality while allowing dependency modeling between players” [PAGE 4]. Assumption: the mask is implemented exactly as stated. Breakdown: if the look-ahead \(u_{t,i}\) is not masked for the target player’s trajectory prediction, the reported NLL can be non-causal; this is a critical audit point because the target is \(v_{t,i}=\operatorname{Bin}(\Delta p_{t,i})\) [PAGE 5].

7. Event-window labels and heads. The labels are
\[
\epsilon^{\phi}_{t,i,\text{past}}
=\max_{\tau\in[-\delta_{\text{past}},-1]}\epsilon^{\phi}_{t+\tau,i},\quad
\epsilon^{\phi}_{t,i,\text{current}}=\epsilon^{\phi}_{t,i},\quad
\epsilon^{\phi}_{t,i,\text{future}}
=\max_{\tau\in[1,\delta_{\text{future}}]}\epsilon^{\phi}_{t+\tau,i},
\]
with \(\delta_{\text{past}},\delta_{\text{future}}>0\) defining window extent [PAGE 2]. The heads are
\[
\hat\epsilon_{t,i,r}=\sigma(W_r\hat z_{t,i}+b_r),\qquad
r\in\{\text{past},\text{current},\text{future}\}.
\]
Assumption: events are binary and max-over-window is a sufficient label. Breakdown: max aggregation loses event multiplicity and ordering; an event just outside the 2 s window is labeled negative, so “future” is strictly a 2 s future, not an arbitrary horizon.

8. Trajectory binning and losses. “movements are discretized into an 11ft×11ft grid, yielding 121 trajectory bins” [PAGE 5]. Let \(v_{t,i}=\operatorname{Bin}(\Delta p_{t,i})\in B\). Then
\[
P(v_{t,i}\mid \hat Z)=\operatorname{softmax}(W_{\text{traj}}\hat z_{t,i}+b_{\text{traj}}),
\]
\[
\mathcal L_{\text{traj}}
=\frac{1}{TN}\sum_{t=1}^{T}\sum_{i=1}^{N}-\ln P(v_{t,i}\mid\hat Z),
\]
\[
\mathcal L_{\text{events}}
=\frac{1}{TN}\sum_{t=1}^{T}\sum_{i=1}^{N}
\sum_{r}\sum_{\phi\in\ell}
\operatorname{BCE}(\hat\epsilon^{\phi}_{t,i,r},\epsilon^{\phi}_{t,i,r}),
\]
\[
\mathcal L_{\text{total}}
=\alpha\mathcal L_{\text{traj}}+(1-\alpha)\mathcal L_{\text{events}}.
\]
The paper uses \(\alpha=0.5\) [PAGE 5]. Assumption: the 121-bin discretization is adequate. Breakdown: boundary motions at bin edges are quantized; an 11 ft × 11 ft grid cannot represent arbitrarily fine foot placement. Also, NLL 0.38 versus 0.58 is a relative reduction, but the source itself notes identical NLL with and without event projection [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The retrocausal lineage is explicit in the paper’s related-work section. Hand-crafted motion features [8] gave way to hierarchical neural trajectory forecasting [15], conditional VAEs for adversarial motion [9], and graph-based inter-agent models [7,13]. Shi et al. [10] supplied the directed graph neural network foundation for skeletal action recognition [PAGE 2]. Transformers [11] were adapted to pedestrian trajectories by Giuliari et al. [6], then to multi-agent basketball by baller2vec [1]. The paper criticizes baller2vec because it “maintained an assumption that agent trajectories were statistically independent at each time step- a fundamental limitation for modeling coordinated behaviors” [PAGE 2]. Baller2Vec++ “rethought information flow in multi-entity transformers through look-ahead trajectories and masking strategies” [PAGE 2]. CourtMotion then adds skeletal GNN encoding and event-projection heads on top of that lineage, while comparing against TranSPORTmer [4] and citing FootBots [3] for soccer [PAGE 2,7].

Multi-week traps in this genealogy are concrete. Trap 1: assuming event-projection pretraining improves trajectory forecasting. The paper’s own ablation says otherwise: “our models with and without events projection achieve identical trajectory NLL (0.38)” [PAGE 5]. Trap 2: assuming shoulder normals can replace full skeletal tracking everywhere. The paper reports equal pick performance for “Ours w/o GNN” [PAGE 7], but Table 1 shows a large shot-taker gap: 0.91 versus 0.77 at 0.8 s [PAGE 8]. Trap 3: treating AP ceilings as model failures. Assist AP is capped by shot-success randomness [PAGE 7], and pick AP is capped by heuristic label ambiguity [PAGE 6]. Trap 4: ignoring sampling and downsampling. The skeleton is 30 Hz but the pose embedding is 5 Hz [PAGE 2-4]; a multi-week effort to model sub-200 ms biomechanics without checking the pre-downsampled branch can chase aliases. Trap 5: over-reading early-horizon AP. Shot-taker AP is 0.38 at 2.8 s but 0.91 at 0.8 s [PAGE 8]; the same model is not equally predictive at all horizons.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
CourtMotion does not contain an explicit recursive belief-state variable. It approximates recursive multi-agent interaction through transformer attention over player states and look-ahead states, with a mask that enforces temporal causality [PAGE 4-5]. The closest textual operator is the three-window event supervision: “The ‘past’ window helps identify precursor movements, the ‘current’ window focuses on immediate actions, and the ‘future’ window encourages the model to anticipate upcoming events” [PAGE 5]. The paper also claims: “This multi-window approach enables CourtMotion to understand the complete lifecycle of basketball plays, from setup to execution to follow-through” [PAGE 5]. That is a semantic interpretation, not a formal theory-of-mind equation.

Crisis habit regression: under late-clock or high-pressure conditions, players may regress to low-entropy habitual motor patterns. The past-window head can exploit precursor habits, but if defenders counter-adapt, the learned habit prior becomes stale. The source has no explicit game-clock, score, or pressure variable in \(s_{t,i}\); “clock” is only the temporal sequence and the 2 s event windows. Counter-trap: event-projection heads can learn event co-occurrence shortcuts rather than intent. A counterfactual intervention is therefore required: remove or corrupt skeletal motion while preserving positions, and test whether event AP collapses. The paper’s Table 1 already suggests this: “Ours w/o GNN” drops shot-taker AP from 0.91 to 0.77 and shot-type AP from 0.50 to 0.42 at late horizons [PAGE 8]. Clock: the causal mask and the \(\delta_{\text{past}}=\delta_{\text{future}}=2\) s windows are the only explicit temporal controls [PAGE 4-5]. Any claim that the model reasons about a shot clock, score deficit, or possession urgency is outside the source unless such features are added.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: the event head’s future label is a max over at most 2 s at 5 Hz, i.e. 10 frames [PAGE 2,5]. A claim that the event head predicts an event 5 s ahead from the same head violates the trained label horizon and is vetoed. The trajectory head predicts a single binned displacement on an 11 ft × 11 ft grid with 121 bins [PAGE 5]; claims about continuous, long-horizon trajectory precision beyond that discretization are not supported.

Biomechanical veto: the shoulder-normal operator is singular at \(\lVert w_{t,i}\rVert=0\) [PAGE 2]. If left/right shoulder joints coincide or are missing, orientation is undefined, and any pick or shot-preparation claim requiring orientation is vetoed for that frame. The skeletal DAG requires valid joints and non-degenerate bone vectors \(b^{(m\to j)}_{\tau,i}\) [PAGE 3]; occlusion or joint swaps invalidate the pose embedding. The 30 Hz-to-5 Hz compression [PAGE 2-4] also vetoes strong claims about sub-200 ms biomechanics unless verified before downsampling.

Weather veto: the dataset is the “NBA SportVU dataset, containing spatiotemporal recordings from 631 games during the 2015-2016 season” [PAGE 5]. This is indoor arena tracking; the paper contains no weather operator, no temperature, wind, humidity, or precipitation variable. Any weather-based causal claim is outside the source and is vetoed unless external arena-environment data are supplied and shown to enter \(s_{t,i}\). Cross-layer rule: if any of the physical, biomechanical, or environmental layers is invalid, downstream AP cannot be attributed to the model’s representation; the result is confounded by data validity, label validity, or missing covariates.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR reward definition: for each scenario, let \(R_j=1\) if the observed effect matches the pre-registered direction and magnitude from the source, and \(R_j=0\) otherwise. A veto is a failed \(R_j\) under a clean counterfactual.

Scenario 1: Event-projection ablation. Train the same GNN-transformer with and without event-projection heads, holding data and trajectory head fixed. Prediction: trajectory NLL remains 0.38 in both conditions, because the paper reports identical NLL with and without event projection [PAGE 5]; shot-taker AP at 0.8 s drops from 0.91 to 0.80, and assist AP at 0.8 s drops from 0.65 to 0.56 [PAGE 8]. Veto: if event-projection removal materially changes trajectory NLL, the source’s null trajectory result is not reproduced; if downstream AP does not drop, the claimed semantic benefit is unsupported.

Scenario 2: Skeletal-motion counterfactual. Replace the GNN pose embedding with a shoulder-normal-only or corrupted-skeleton branch while preserving positions and event heads. Prediction: pick AP remains approximately 0.82 early and 0.85 late for the shoulder-normal-only variant [PAGE 7], but shot-taker AP at 0.8 s falls from 0.91 to 0.77 and shot-type AP falls from 0.50 to 0.42 [PAGE 8]. Veto: if the full GNN is not better than shoulder-only on shot-taker and shot-type tasks, the skeletal-motion claim is weakened; if pick AP collapses under shoulder-only, the paper’s equal-performance claim is not reproduced.

Scenario 3: Look-ahead/clock leakage test. Retrain with the target player’s own look-ahead displacement \(p_{t+1,i}\) and \(\Delta p_{t,i}\) removed from \(u_{t,i}\), or with that branch fully masked, while keeping the stated causal attention mask. Prediction: if the reported 0.38 NLL is a strict real-time trajectory result, the masked model should remain near 0.38; if the look-ahead branch is contributing target-adjacent information, NLL should rise materially above 0.38, potentially toward the 0.58 Baller2Vec++ level [PAGE 5]. Veto: if NLL remains 0.38 only when the look-ahead displacement is present but rises sharply when it is masked, the source’s trajectory claim is not strictly causal and must be reported as a look-ahead-assisted result.
</RLVR_COUNTERFACTUAL_VETOES>