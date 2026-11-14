---
source: "undated - Detection of tactical patterns using semi-supervised graph neural networks - Anzer et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 15
model: deepseek/deepseek-v4.1-flash-1017
words: 5714
---

<NATIVE_REASONING>
We need answer user prompt. Need produce deep structured XML sections >=1000 words, zero betting lines, formal LaTeX equations, units, page citations exact [PAGE N], verbatim quotes when source pages provided. Need analyze paper. Need maybe "DRIVE SOURCE" is sports research paper. Need output sections exactly: THINK_TRACE >=400 words, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need no betting. Need include equations from paper: semi-supervised VAE M2, sequential VRNN, GNN/GAT attention, permutation invariance, kNN adjacency, sliding window, AUC, F1, L2 errors. Units: frames per second, timesteps, meters, km/h, probabilities, AUC dimensionless, F1 dimensionless, L2 units? Need infer normalized coordinates [-1,1] and velocity, L2 in normalized coordinate units likely. Need assumptions, singularities/breakdown regimes. Need cite exact page markers and verbatim quotes. Need maybe identify gray-zone traps: 14 matches but experiments 4 games; 32 overlapping runs, inter-annotator 84.61%, Table 1 AUC/F1. Need highlight that AUC high but F1 low (0.4, 0.37) and validation/test limitations. Need "retrocausal genealogy" historical lineage: M2 Kingma et al. 2014, VRNN Chung et al. 2015, GAT Veličković 2018, GNN Battaglia, Fassmeyer et al. 2021, Anzer/Bauer. Multi-week traps: overinterpret tactical patterns, small sample, label timing ambiguity, coordinate normalization, kNN oversmoothing, class imbalance. Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need interpret in sports analytics: crisis habit regression = analysts over-trust automated outputs after high AUC; counter-trap = rule-based baseline vs supervised baseline vs semi-supervised; clock = temporal synchronization/video clock vs tracking frames. Need discuss. Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need say paper doesn't model weather/biomechanics; vetoes: tracking sampling 25 fps, speed threshold 10 km/h, distance thresholds 2m, 17.5m, 17m, kNN distance; physical veto if players outside frame? Need proof from source. Weather not in source; must not invent? We can state source provides no weather variables; any weather claim is unsupported and vetoed. Need include physical/biomechanical/weather veto proof. Need perhaps formal admissibility conditions: tracking synchronization, label alignment, permutation equivariance, class imbalance, sample size. Need RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need be precise. Could include "If we remove expert labels -> performance collapses" etc. Need not mention betting lines. Need ensure no "odds" maybe user says zero betting lines: avoid "odds"; mention probabilities okay. Avoid spreads/totals/moneylines. Fine.

Need produce answer only, no extra. Need likely 1500-2000 words. Need exact XML sections. We need include citations [PAGE 1] etc. Verbatim quotes. Need be careful with exact quotes. Use short quotes. Need formal LaTeX equations.

Need think through paper details and formal equations.

Paper:
- Tactical pattern definition: repeatable coordinated movements etc [PAGE1].
- Challenges: supervised manual annotations; permutation problem; unknown number players; power set 2^22 = 4,194,304 subsets per frame [PAGE1].
- Data: 14 matches German National team 2021 including four Euro; TRACAB Gen5 25 fps; event data Sportec; synchronized [PAGE3].
- Overlapping run definition: separated 2 vs 1, ball carrier dribbles toward defender, second attacker high speed past toward goal line [PAGE3].
- 32 overlapping runs hand-labeled by analyst; both overlapping and overlapped annotated, only former input; two matches second analyst inter-annotator [PAGE3].
- Preprocessing: expert timestamps video clock align to tracking frames; ambiguous; add next 10 frames; sliding window length 50 with 50% overlap; positive sequences context window around label active; negative random; trajectories centered normalized to [-1,1] x/y; convert to velocity by subtracting consecutive coordinates [PAGE3-4].
- Method: SequentialM2 = M2 + VRNN + GAT. VAE bottleneck z. RNN shared parameters per player trajectory then GNN. M2 label y integrated. Supervised regularized classification with reconstruction. Unlabeled y latent. VRNN: VAE at each timestep conditioned on RNN hidden state previous. SequentialM2 objective M2 summed timesteps. GAT attention, multi-head, kNN adjacency, skip connections jumping knowledge. Node = player; nearby influence. At each timestep GNN updates recurrent player states. [PAGE4-6]
- Empirical: four games; two concatenated training, one model selection, one test. Each game ~140,000 timesteps; per-match average eight overlapping situations and three chance without shot. Params optimized saved best AUC on validation, reported test best after 100 epochs. PyTorch [PAGE6].
- Tasks: overlapping runs, chance without shot. Metrics AUC and F1 on contiguous sections; max probability across agent dimension. AUC aggregates TP/FP thresholds; F1 harmonic mean precision recall [PAGE7].
- Baselines: DetNet fully supervised sequential RNN+GNN; rule-based for overlapping runs with ball possession distance <2m, offensive third >17.5m opposing half, outside lane distance to vertical midline >17m, teammate passed by ball carrier on side closest sideline, two consecutive frames t and t+1 passing behind vertical direction speed >10 km/h; context +/-2 seconds; F1 [PAGE7].
- Results Table 1: Overlapping run DetNet AUC 0.62 F1 -; Rule-based baseline F1 0.31; SequentialM2 AUC 0.93 F1 0.4. Chance without shot DetNet 0.69; SequentialM2 0.98 F1 0.37. [PAGE8]
- Practical: match report, opponent analysis, scouting, xG etc [PAGE9-11].
- Appendix: basketball STATS SportVU, 2016 NBA regular season >1200 games, segments 50 timesteps sampled 5 fps, x/y positions 11 agents (10 players + ball); L2 errors. Table 3 values. Need maybe not necessary but source operators can mention. L2 error units likely normalized coordinate units, dimensionless? We can state "in the paper's normalized trajectory coordinate units; source does not provide metric rescaling" to avoid inventing. Table 3: 10-40 ATK SequentialM2 L2 8.41 final 12.64 vs DAG-Net 8.98/14.08; DEF 6.45/8.85; 20-30 ATK 6.49/10.62; DEF 5.04/7.44 (C-VAE 4.98, DAG-Net 5.01; SequentialM2 5.04 not best for L2 but final best maybe). Need mention not overclaim: "exceed current state-of-the-art in nearly all tested scenarios" but table shows one L2 not best (DEF 20-30 L2 5.04 vs 4.98/5.01). Good gray-zone.

Need "formula" for semi-supervised M2 objective. We can write:
Let x_{1:T} = (x_1,...,x_T), x_t in R^{2N} positions or velocities; y discrete label; z continuous latent; h_{t-1} RNN state. Generative:
p_\theta(x_{\le T}, z_{\le T}, y) = p_\theta(y) \prod_t p_\theta(z_t|h_{t-1}) p_\theta(x_t|z_t,y,h_{t-1})
Inference:
q_\phi(z_t,y|x_{\le t}) = q_\phi(y|x_{\le t}) q_\phi(z_t|x_t,y,h_{t-1})
Need exact? We can present as formal representation of M2/VRNN combination, not exact quote. Need label as reconstruction of paper's objective. The paper says "M2 objective summed over each timestep". We can write ELBO:
For labeled data:
\mathcal{L}_s(x,y)= E_{q_\phi(z|x,y)}[\log p_\theta(x|z,y)] - D_{KL}(q_\phi(z|x,y)||p_\theta(z)) + \log q_\phi(y|x) maybe classification. For unlabeled:
\mathcal{L}_u(x)= E_{q_\phi(z,y|x)}[\log p_\theta(x|z,y)] - D_{KL}(q_\phi(z,y|x)||p_\theta(z)p(y)) + ... Actually M2. We can state generic. Need avoid fake ratios; these are real formal. Fine.
Sequential:
\mathcal{L}_{SeqM2} = \sum_t [\mathcal{L}^{sup}_t + \mathcal{L}^{unsup}_t].
GAT attention:
e_{ij}^{(m)} = \mathrm{LeakyReLU}(a_m^\top [W_m h_i || W_m h_j])
\alpha_{ij}^{(m)} = softmax_j(e_{ij}^{(m)}) over N(i) kNN
h_i' = ||_{m=1}^M \sigma(\sum_{j\in N(i)} \alpha_{ij}^{(m)} W_m h_j)
Permutation invariance: h_i' = f({h_j: j in N(i)}) with symmetric aggregation; for whole graph readout S({h_i}) invariant. Need cite [PAGE5-6].
kNN adjacency: N(i) = k nearest by Euclidean distance d_{ij}=||p_i-p_j||_2; source says Euclidean distance between nodes [PAGE5 Figure 2], kNN [PAGE6]. Units: meters if coordinates in meters; paper normalizes coordinates [-1,1], so distance units are normalized pitch units not raw meters; but rule-based thresholds raw meters. Need note mismatch? Ah interesting: trajectories centered/normalized [-1,1], velocity; kNN uses normalized coordinate distance, not meters. Rule-based uses meters. This is a gray-zone. Need mention. But paper says "Euclidean distance between nodes (players)" Figure 2. It doesn't specify units. We can state assumption: normalized coordinates; any physical meter interpretation requires inverse scaling not given. Good.
Sliding window: W=50 frames, overlap 50%, stride 25; 25 fps -> 2.0 s window, 1.0 s stride. Need compute: 50 frames /25 fps=2 s. Context add next 10 frames=0.4 s. Rule context +/-2 s. Good.
AUC formula:
AUC = ∫_0^1 TPR(FPR^{-1}(u)) du? Or P(\hat s_+ > \hat s_-) + 0.5 tie. Dimensionless [0,1].
F1 = 2PR/(P+R). Dimensionless.
L2 = (1/T)\sum_t ||\hat p_t - p_t||_2? In table "mean square error" but called L2 error; source says "Mean L2-Error represents mean square error between real observed and predicted positions". Note inconsistency: mean square vs L2. We can flag. Use M_t = (1/T)\sum ||\hat x_t-x_t||_2^2 maybe; final L2 = ||\hat x_T-x_T||_2^2. Units squared normalized units if MSE; source says L2. We can note label ambiguity. This is a source operator. Need cite [PAGE14-15].
Breakdown/singularities:
- q_\phi(y|x) near uniform / posterior collapse; unlabeled label inference no gradient? 
- kNN ties at equal distances; if k > number nodes or duplicate positions, softmax undefined/ties. 
- class imbalance: AUC inflated; F1 low. 
- small labeled set n=32; positive windows 32 plus context 10 frames; per-match average 8 overlapping; class imbalance huge (140k timesteps per game vs few labels). 
- label timestamp sync ambiguity; expert video clock. 
- normalization [-1,1] and velocity loses absolute pitch scale but not location if first coordinate known. 
- tracking 25 fps, speed threshold 10 km/h uses km/h; conversion needed: 10 km/h = 2.777... m/s; per frame at 25 fps = 0.1111 m/frame. Need maybe include. Good.
- GAT oversmoothing: source says kNN alleviates oversmoothing [PAGE6 footnote].
- GNN depth increases receptive field; skip connections.

Retrocausal genealogy:
- precursor: Kempe et al 2015, Wang et al 2015, Grunz et al 2012 tactical pattern detection; Bauer & Anzer counterpressing; Hobbs transitions; Power set pieces; Shaw corner kicks; Fassmeyer "Toward Automatically Labeling Situations in Soccer" uses team patterns; Kingma semi-supervised deep generative; Chung VRNN; Veličković GAT; Battaglia graph networks; Xu jumping knowledge; Anzer et al goal origins; STGAT, Social-Ways, Weak-Supervision, DAG-Net, C-VAE for trajectory prediction. Need cite pages 12-13, 14. Multi-week traps: after reading high AUC, analysts may overgeneralize to all tactical patterns with few labels. The genealogy shows method is an extension of semi-supervised VAE, not a fully validated universal detector; only 4 games in empirical setup despite 14 collected. Need mention "14 matches collected but empirical experiments based on four distinct soccer games" [PAGE3, PAGE6]. That's a trap. Also "Chance without shot" event data, not expert labels; "overlapping run" expert labels. Need not mix. "The proposed method outperforms purely supervised competitors" but DetNet "highly overfitting" [PAGE8]. Good.

Recursive theory of mind:
Need crisis habit regression vs counter-trap vs clock. Interpret: 
- Crisis habit regression: when automated detector flags many events, analyst reverts to manual viewing and distrusts model; or model overfits to validation AUC and analysts accept high AUC despite low F1. Need use "recursive" because model's outputs feed analyst decisions, which feed labels, which feed retraining. 
- Counter-trap: rule-based baseline is transparent but brittle; supervised DetNet overfits; semi-supervised model uses unlabeled data but can exploit spurious movement regularities. Need counterfactual: if evaluation uses only AUC, model appears near-perfect; if F1 on contiguous sections, 0.4/0.37. So avoid metric trap.
- Clock: expert annotations use video footage clock; tracking 25 fps; synchronization step; labels ambiguous; add next 10 frames. If clock drift, labels shift. Recursive: analyst sees missed detection due to clock misalignment, labels more negatives, model learns wrong. Need mention.
Need maybe "theory of mind" about coach/analyst beliefs: model probability not causal explanation. The paper's application shows match report and opponent analysis; coaches may infer tactical intent from detected runs. Need caution: detection of coordinated movement doesn't prove intent or defensive causality. Good.

Cross-layer veto:
Physical: tracking system 25 fps, TRACAB Gen5; if player occlusion/missing tracking, graph node missing -> permutation and kNN invalid. Source doesn't report missing data rate. Weather: no weather variables; cannot adjudicate rain/wind effects. Biomechanical: speed threshold 10 km/h; no acceleration/force model; no biomechanical load. Veto proof: rule-based thresholds (2m, 17.5m, 17m, 10 km/h) are explicit physical admissibility gates; if a situation violates them, rule-based detector vetoes. For model, no such hard veto; kNN uses Euclidean distance in normalized coordinates; if players far, no edge. Need state physical/biomechanical/weather veto proof with source citations. "Proof" maybe show conditions:
- Ball possession gate: d(player, ball)<2 m [PAGE7].
- Offensive third gate: >17.5 m in opposing half [PAGE7].
- Outside lane: distance to vertical midline >17 m [PAGE7].
- Overlap event: two consecutive frames t,t+1 passing behind ball carrier vertical direction with speed >10 km/h [PAGE7].
These are physical/geometric vetoes. Weather absent. Biomechanical: speed threshold only; no force/energy; cannot infer fatigue. Need say "No source page supports weather or biomechanical force claims; such claims are vetoed as out-of-source." Good.

RLVR counterfactual vetoes:
Need 3 verifiable scenarios + predictions. Could be:
1. Label-clock misalignment veto: Shift expert labels by +10 frames or random ±0.4s; prediction: AUC drops? Need verifiable. Paper adds next 10 frames; if labels shifted outside context, positive windows misalign, F1 drops. We can predict SequentialM2 F1 falls below rule-based? Need not exact. But "verifiable" means can be tested with source data. We can state prediction: F1 decreases monotonically with offset; at >10 frame offset, positive windows no longer contain expert start; AUC may remain high due to class imbalance but F1 drops. 
2. Remove semi-supervised unlabeled loss: train DetNet vs SequentialM2; prediction: DetNet AUC 0.62/0.69 vs SequentialM2 0.93/0.98; if unlabeled term ablated, performance approaches DetNet; F1 remains low. 
3. kNN graph ablation / permutation shuffle: shuffle player node order; prediction: GAT with invariant aggregation yields identical outputs (up to numerical tolerance); if replace with non-invariant MLP, AUC changes. Or set k too large causing oversmoothing, prediction: AUC/F1 degrade; source footnote says kNN alleviates oversmoothing. Need 3. Maybe include "metric trap veto" using F1 threshold. Need "RLVR counterfactual vetoes" likely reinforcement learning with verifiable rewards? We can phrase as counterfactual tests that veto claims. Need 3 verifiable scenarios + predictions. Include exact source values.

Need answer with sections in XML. Need >=1000 words. Need maybe around 2200 words. Need avoid markdown? XML sections okay. Need use LaTeX. Need not include betting. Need cite [PAGE N]. Need exact verbatim quotes: e.g., "A tactical pattern is defined as repeatable, coordinated movements of either the whole team or a group of players and conducted in specific situations" [PAGE 1]. "we have 2^{22}=4,194,304 different subsets of players per frame in soccer which is clearly infeasible." [PAGE 1]. "Tracking data are acquired using the Chyronhego TRACAB System (Generation 5) ... sampled at 25 frames per second." [PAGE 3]. "The trajectories are centered and normalized to the interval [-1,1] both in x- and y-direction." [PAGE 3-4]. "Our framework, referred to as SequentialM2, can therefore be viewed as a combination of the two previously mentioned methods (VRNN + M2)." [PAGE 5]. "we integrate an attention-based graph neural network (GAT)" [PAGE5]. "choosing a k-nearest neighbor adjacency matrix alleviates the oversmoothing problem" [PAGE6 footnote]. "Each soccer game consists of roughly 140,000 timesteps" [PAGE6]. "per-match-average of eight manually provided overlapping situations as well as three chance without shot situations" [PAGE6]. "The model outputs denote agent probabilities, consequently, we define the test game probabilities by choosing the maximum probability value across the agent dimension for each timestep" [PAGE7]. "AUC ... aggregates true positive (TP) and false positive (FP) values for different model thresholds" [PAGE7]. "F1-score is basically the harmonic mean between precision and recall" [PAGE7]. "SequentialM2 model performs best in AUC as well as in F1-Scores" [PAGE8]. Table values. "Though not explicitly designed for movement prediction" [PAGE14]. "The Mean L2-Error represents the mean square error between the real observed and the predicted positions" [PAGE14]. Need exact quote "Mean L2-Error represents the mean square error" maybe yes.

Need ensure all sections exact XML. Could include line breaks. Need no extra text outside? We can output only sections. Need answer in final.

Let's craft.

Need maybe mention "strict invariants: zero betting lines" no mention. Good.

Need perhaps "THINK_TRACE" include deep multi-hop derivation & gray-zone audit >=400 words. We'll make ~700 words. Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX, units, page citations, breakdown. "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions.

Need maybe "Deep multi-hop derivation & gray-zone audit": include chain: tactical pattern -> supervised detection -> permutation -> subset -> semi-supervised VAE -> sequential VRNN -> GAT -> experiments -> metric audit. Also gray-zone: 14 vs 4 games, low F1, label ambiguity, normalized coords vs metric thresholds, AUC inflation, Table 3 "L2" misnamed MSE, one best not all. Need mention "The paper's own claim 'performs best in AUC as well as in F1-Scores' is true within Table 1 but not a claim of deployment-grade precision" [PAGE8]. Good.

Need formal equations. Let's write in LaTeX. Need not be perfect. Use \[...\]. The answer can have XML with LaTeX. Fine.

Potential issue: "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." Need label units explicitly:
- x_t in normalized field coordinates u∈[-1,1] (dimensionless after normalization; original meters not recoverable without affine map).
- v_t = x_{t+1}-x_t in normalized units/frame; at 25 fps, frame duration Δt=0.04 s. Speed conversion: v (norm units/frame)/0.04 = norm units/s. Rule threshold 10 km/h = 2.777... m/s; requires metric pitch scale.
- probability in [0,1], dimensionless.
- AUC, F1 dimensionless.
- L2/MSE in normalized coordinate units squared if MSE; source says L2 but defines mean square. Note.

Need maybe "information units" could mention KL divergence in nats if log natural; likelihood in nats. Include "D_KL has units of nats when natural log used". Good.

Need "exact singularity/breakdown regimes": 
- GAT softmax: if all e_ij = -∞ or N(i)=∅, undefined; if duplicate distances, ties break arbitrarily; if k≥N nodes, dense graph. 
- VAE: KL collapse q(z|x,y)≈p(z), reconstructions dominate; posterior collapse. 
- Label inference: unlabeled posterior q(y|x) uniform if no signal. 
- Class imbalance: AUC=1 possible while F1 low; with positive fraction p_+ ≈ (8? per game) / 140,000 ≈ 5.7e-5 for overlapping? Actually per-match average eight overlapping situations; each situation maybe 11 frames? positive frames ~88? 88/140000=0.00063. Chance 3 per game ~33 frames/140000=0.00024. But not necessary. Could compute for positive label active plus next 10 frames: 11 frames per event; 8*11=88 positive frames per game, p+≈6.3e-4. Chance 3*? event data labels maybe timestamps; not sure. Avoid exact class imbalance because not given. State "few dozen positive frames vs ~140,000 timesteps" [PAGE6].
- kNN with normalized coordinates: if pitch aspect ratio not preserved? Centered/normalized both x,y to [-1,1] independently, Euclidean distance is anisotropic if pitch not square. This is a gray-zone! The paper normalizes x and y both to [-1,1], which changes aspect ratio if pitch length/width differ. Then Euclidean distance in normalized coordinates is not physical distance. Important. Include: "Independent x/y normalization to [-1,1] makes Euclidean kNN anisotropic relative to meters unless pitch aspect ratio is square; source does not give inverse scaling." Good. That is a strong audit.
- Rule-based thresholds in meters; model kNN normalized. So comparison is not physically equivalent.

Need "retrocausal genealogy" maybe not too long. Include "M2 -> VRNN -> GAT -> SequentialM2; prior tactical pattern literature; trajectory forecasting appendix." Multi-week traps: "treating a single test game and 32 labels as general proof"; "confusing validation AUC with deployment precision"; "using chance-without-shot event labels as if expert tactical labels"; "assuming 14 matches used, only 4 in experiments"; "assuming L2/MSE metric comparable across normalized datasets." Good.

Recursive theory of mind: "crisis habit regression" maybe define: under workload, analyst falls back to manual tagging or to rule-based detector; model can learn from human labels but human labels are influenced by model output; "counter-trap" is the metric/architecture trap; "clock" is synchronization trap. Need maybe "recursive" = model's belief about label y, analyst's belief about model, coach's belief about tactical intent. Good.

Cross-layer veto: include table-like LaTeX? We can write bullets. Need "proof" maybe "admissibility proof" with conditions. Need mention weather source absence. Need "physical/biomechanical/weather veto proof" perhaps:
- Physical tracking veto: if Δt ≠ 0.04 s or missing frames, velocity and 10 km/h rule invalid.
- Biomechanical veto: paper has no force/load/acceleration; speed threshold is kinematic only, so any fatigue/injury claim vetoed.
- Weather veto: no weather variables; any rain/wind adjustment vetoed. 
- Geometric veto: thresholds. 
Good.

RLVR counterfactual vetoes: need maybe "RLVR" not defined; we can call "verifiable counterfactual veto tests". Need 3 scenarios:
1. Clock-shift test: shift expert labels by +11 frames (beyond +10 frame extension) and by -11; predict F1 drops below 0.4? We can state "positive windows no longer cover expert start; F1 should decline; AUC may remain high due to low positive prevalence." Verifiable by rerunning.
2. Unlabeled-data ablation: remove unsupervised ELBO or replace unlabeled with random; predict SequentialM2 AUC drops toward DetNet values 0.62/0.69 and F1 near/below rule-based 0.31? For overlapping, rule-based F1 0.31; SequentialM2 0.4; if ablation, maybe F1 ≤0.31. Good.
3. Permutation/equivariance test: randomly permute player node IDs; predict invariant GAT outputs identical within numerical tolerance and AUC unchanged; if not, architecture violates claim. Also kNN oversmoothing: increase k to all nodes; predict AUC/F1 degrade and node embeddings collapse. Need 3. Maybe include "metric gate: if F1 <0.5, veto deployment claim despite AUC>0.9." But predictions should be verifiable. Good.

Need word count maybe 2000. Let's draft final.

Need ensure no "betting" terms. We can say "probabilities" not odds. Avoid "moneyline" etc. Good.

Let's compose with XML. Need maybe use CDATA? Not necessary. But LaTeX with `<` maybe problematic in XML. Use `\lt`? We can avoid `<` by writing "less than". But equations use `<` maybe okay? XML text with `<` is invalid. Need escape < as &lt; or avoid. Use `\le`, `\ge` no `<`. But if writing intervals [-1,1] no issue. Use `d<2` would be invalid; write `d \lt 2` or `d &lt; 2`. In XML, `<` must be escaped. Use `&lt;` for less-than in text/equations. Need be careful. Use `>` is allowed in XML text? Yes > allowed except `]]>`. But can use `\gt`. Use `&lt;` for <. Use `&amp;` for & if needed. LaTeX `\mathcal{L}` okay. `&` in equations? Avoid align with & unless escaped. Use \[ \] no & maybe.

Need include quotes with quotation marks. Fine.

Need maybe use `2^{22}=4,194,304` no issue.

Let's write.

Need "THINK_TRACE" >=400 words. Count maybe 600. Good.

Need final answer only sections. Ensure exact section names.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s inference chain is: define a tactical pattern as a repeatable coordinated movement [PAGE 1], observe that manual annotation is repetitive, time-consuming, and subjective [PAGE 1], then formalize three constraints—scarce labels, player-order permutation, and unknown involved subgroup size—before solving them with a semi-supervised sequential variational autoencoder plus a graph attention network. The multi-hop derivation is therefore not “deep learning detects tactics” but a composition of three reductions: (1) a generative model \(p_\theta(x,z,y)\) treats the discrete tactical label as a latent variable when labels are absent; (2) a recurrent state \(h_{t-1}\) makes the VAE sequential; (3) a permutation-invariant GAT replaces hand-crafted player features. The gray-zone audit begins with sample scope. The source says “14 matches of tracking and event data of the German National team played in 2021” [PAGE 3], but the empirical setup says “four distinct soccer games” with two for training, one for model selection, and one for testing [PAGE 6]. That is a major generalization boundary: 32 overlapping runs and roughly eight overlapping situations per match are used for the expert-labeled task [PAGE 3, PAGE 6]. The reported AUC values—0.93 for overlapping runs and 0.98 for chance without shot—are high, but the same table reports F1-scores of 0.40 and 0.37 [PAGE 8]. A second gray zone is metric semantics. The paper correctly notes AUC aggregates TP and FP over thresholds [PAGE 7], but a highly unbalanced test set can make AUC optimistic; the authors themselves state that “a highly unbalanced label distribution for the test set, as given here, may be overly optimistic” [PAGE 7]. A third gray zone is coordinate physics. The trajectories are “centered and normalized to the interval [-1,1] both in x- and y-direction” [PAGE 3-4], while the rule-based baseline uses metric thresholds: ball distance less than 2 m, offensive third more than 17.5 m, outside lane distance greater than 17 m, and speed greater than 10 km/h [PAGE 7]. Independent x/y normalization changes Euclidean geometry unless the pitch is square; the GAT’s k-nearest-neighbor graph uses Euclidean distance [PAGE 5-6], so its “nearby players” are nearby in normalized coordinates, not necessarily in meters. A fourth gray zone is label timing. Expert annotations use a video clock and must be synchronized to tracking frames; because labels are ambiguous, the authors “additionally annotate the next 10 frames” [PAGE 3]. At 25 fps, 10 frames is 0.4 s. A clock offset larger than that can place the positive window off the event, inflating apparent false negatives. A fifth gray zone is the appendix. The paper claims movement prediction “significantly advances the state-of-the-art” [PAGE 2], but the appendix’s “Mean L2-Error” is defined as “the mean square error between the real observed and the predicted positions” [PAGE 14], so the label is a squared-error metric, not a pure L2 norm. Moreover, Table 3 shows SequentialM2 at 5.04 L2 for 20-30 DEF, slightly worse than C-VAE’s 4.98 and DAG-Net’s 5.01 [PAGE 15], so “nearly all tested scenarios” is accurate but “all” would be false. The final audit is causal: detecting a coordinated movement is not proving tactical intent, defensive causation, weather robustness, or biomechanical load. The source contains no weather variables and no force/load model. Those claims must be vetoed rather than inferred from high AUC.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The core operator is a semi-supervised sequential VAE. Let \(x_{1:T}=(x_1,\ldots,x_T)\) denote multi-agent tracking features, \(y\) a discrete tactical label, \(z_t\) the continuous latent bottleneck, and \(h_{t-1}\) the RNN hidden state. The paper states that SequentialM2 “can therefore be viewed as a combination of the two previously mentioned methods (VRNN + M2)” [PAGE 5]. A formal representation of the generative and inference factorization is:

\[
p_\theta(x_{\le T},z_{\le T},y)
= p_\theta(y)\prod_{t=1}^{T}
p_\theta(z_t\mid h_{t-1})\,
p_\theta(x_t\mid z_t,y,h_{t-1}),
\]

\[
q_\phi(z_{\le T},y\mid x_{\le T})
= q_\phi(y\mid x_{\le T})\prod_{t=1}^{T}
q_\phi(z_t\mid x_t,y,h_{t-1}).
\]

For labeled data, the supervised part is a regularized classification objective; for unlabeled data, “the label information is treated as an unobserved latent variable, so that inference also needs to be performed for the labels” [PAGE 4]. The sequential training criterion is “the M2 objective summed over each timestep of the input sequence” [PAGE 5]:

\[
\mathcal{L}_{\mathrm{SeqM2}}
= \sum_{t=1}^{T}
\left[
\mathcal{L}^{\mathrm{sup}}_t(x_t,y)
+
\mathcal{L}^{\mathrm{unsup}}_t(x_t)
\right].
\]

A standard per-timestep ELBO form consistent with the source is:

\[
\mathcal{L}^{\mathrm{lab}}_t
=
\mathbb{E}_{q_\phi(z_t\mid x_t,y,h_{t-1})}
\left[\log p_\theta(x_t\mid z_t,y,h_{t-1})\right]
-
D_{\mathrm{KL}}
\left(
q_\phi(z_t\mid x_t,y,h_{t-1})
\,\|\,p_\theta(z_t\mid h_{t-1})
\right)
+
\log q_\phi(y\mid x_{\le t}),
\]

\[
\mathcal{L}^{\mathrm{unlab}}_t
=
\mathbb{E}_{q_\phi(z_t,y\mid x_t,h_{t-1})}
\left[\log p_\theta(x_t\mid z_t,y,h_{t-1})\right]
-
D_{\mathrm{KL}}
\left(
q_\phi(z_t,y\mid x_t,h_{t-1})
\,\|\,p_\theta(z_t\mid h_{t-1})p_\theta(y)
\right).
\]

Units: probabilities are dimensionless in \([0,1]\); log-likelihoods and KL divergences are in nats if natural logarithms are used; the latent \(z_t\) is dimensionless. The GAT operator uses attention over a k-nearest-neighbor graph. For node \(i\) and neighbor \(j\), a single attention head can be written as:

\[
e_{ij}^{(m)}
=
\mathrm{LeakyReLU}
\left(
a_m^{\top}
\left[
W_m h_i \,\|\, W_m h_j
\right]
\right),
\qquad
\alpha_{ij}^{(m)}
=
\frac{\exp(e_{ij}^{(m)})}
{\sum_{j'\in \mathcal{N}(i)}\exp(e_{ij'}^{(m)})},
\]

\[
h_i'
=
\Vert_{m=1}^{M}
\sigma
\left(
\sum_{j\in\mathcal{N}(i)}
\alpha_{ij}^{(m)} W_m h_j
\right).
\]

The source says “the ordering of nodes in a graph structure is arbitrary” and aggregation must be permutation invariant [PAGE 5]; the GAT is “attention-based” and uses multi-head attention [PAGE 5]. The kNN adjacency is geometric: “Euclidean distance between nodes (players). Only nearby players influence the computation of the node embeddings” [PAGE 5]. The authors also state that “choosing a k-nearest neighbor adjacency matrix alleviates the oversmoothing problem” [PAGE 6 footnote]. Preprocessing uses a “sliding window of length 50 with 50% overlap” [PAGE 3]; at 25 fps, that is a 2.0 s window and 1.0 s stride. Expert labels add the next 10 frames, i.e. 0.4 s [PAGE 3]. The rule-based baseline uses physical gates: ball distance \(d_{\mathrm{ball}}\lt 2\) m, offensive third \(>17.5\) m in the opposing half, outside lane distance to the vertical midline \(>17\) m, and overlap speed \(>10\) km/h over two consecutive frames \(t,t+1\) [PAGE 7]. Note that \(10\,\mathrm{km\,h^{-1}}=2.777\ldots\,\mathrm{m\,s^{-1}}\), and at 25 fps one frame is \(\Delta t=0.04\) s, so the threshold is \(0.111\ldots\) m per frame if metric coordinates are used.

Metrics: AUC is dimensionless and threshold-aggregated; F1 is the harmonic mean of precision and recall [PAGE 7]. For contiguous sections, the test probability is the maximum across the agent dimension at each timestep [PAGE 7]. The appendix’s movement metric is ambiguous: “The Mean L2-Error represents the mean square error between the real observed and the predicted positions” [PAGE 14], so formally it is closer to

\[
\mathrm{MSE}
=
\frac{1}{T}\sum_{t=1}^{T}
\left\|
\hat{x}_t-x_t
\right\|_2^2,
\qquad
\mathrm{FinalMSE}
=
\left\|
\hat{x}_T-x_T
\right\|_2^2,
\]

in normalized coordinate units squared if computed on the normalized data. Singularities/breakdown regimes: (i) GAT softmax is undefined if \(\mathcal{N}(i)=\varnothing\) or all attention logits are \(-\infty\); duplicate player positions create tied neighbors and arbitrary tie-breaking. (ii) If \(k\) is too large relative to the number of nodes, the graph becomes dense and oversmoothing can collapse node embeddings; the source explicitly introduces kNN to alleviate this [PAGE 6]. (iii) Independent \([-1,1]\) normalization of \(x\) and \(y\) makes Euclidean distance anisotropic relative to meters unless pitch aspect ratio is preserved; no inverse metric scaling is given. (iv) Class imbalance can yield high AUC with low F1; the source warns of “a highly unbalanced label distribution” [PAGE 7]. (v) VAE posterior collapse occurs if \(q_\phi(z_t\mid x_t,y,h_{t-1})\approx p_\theta(z_t\mid h_{t-1})\), making \(z_t\) uninformative. (vi) Clock misalignment beyond the 10-frame extension invalidates positive-window construction.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicit. The tactical-pattern literature includes Kempe et al., Wang et al., and Grunz et al. [PAGE 12]; the automated sports pattern literature includes Bauer and Anzer on counterpressing, Hobbs et al. on transitions, Power et al. on set pieces, Shaw and Gopaladesikan on corner kicks, and Anzer et al. on goal origins [PAGE 12]. The machine-learning lineage is Kingma et al.’s semi-supervised deep generative M2 model, Chung et al.’s VRNN, Veličković et al.’s GAT, Battaglia et al.’s graph networks, and Xu et al.’s jumping-knowledge skip connections [PAGE 12-13]. The direct predecessor is Fassmeyer et al., “Toward Automatically Labeling Situations in Soccer,” which the authors describe as tailored to team-patterns but useful for counterattacks [PAGE 2, PAGE 12]. The appendix adds a trajectory-forecasting genealogy: STGAT, Social-Ways, Weak-Supervision, DAG-Net, and C-VAE [PAGE 13-15]. Retrocausally, the paper’s high AUC values can make later readers treat the method as a general tactical-pattern detector, but the historical chain shows it is a semi-supervised extension of VAE/VRNN/GAT machinery validated on one test game per task. Multi-week traps: (1) scope trap—14 matches are described in data collection [PAGE 3], but experiments use four games [PAGE 6]; (2) label-source trap—overlapping runs are expert-labeled, while chance without shot comes from event data [PAGE 3, PAGE 7]; (3) metric trap—AUC 0.93/0.98 can overshadow F1 0.40/0.37 [PAGE 8]; (4) rule-comparison trap—the rule-based baseline uses metric thresholds, while the neural model operates on normalized coordinates and kNN distance [PAGE 3-4, PAGE 7]; (5) appendix trap—the “L2” table is defined as mean square error and does not win every cell [PAGE 14-15].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under match-day time pressure, an analyst may regress to manual video tagging or to the transparent rule-based detector because the neural detector’s probability amplitude is not a tactical explanation. The source’s practical section supports this risk: the model produces a match-report plot and Hudl Sportscode XML timecodes [PAGE 9], but the coach still needs to interpret whether an overlapping run created a real passing option. Counter-trap: the supervised DetNet is a “highly overfitting” baseline [PAGE 8], while SequentialM2 uses unlabeled positional data as regularization; however, the counter-trap is that high AUC can persuade analysts to skip F1 auditing. The paper reports AUC 0.93/0.98 but F1 0.40/0.37 [PAGE 8], so the correct mental model is “candidate generator,” not autonomous tactical oracle. Clock: expert annotations use a video footage clock and must be synchronized to tracking frames [PAGE 3]. Because the authors add only the next 10 frames [PAGE 3], a recursive failure loop is possible: a clock offset causes missed detections; analysts label those misses as negatives; retraining then learns the offset. The recursive theory-of-mind audit therefore asks three questions: does the analyst believe the model’s probability is causal intent? Does the coach believe a detected pattern proves defensive failure? Does the retraining loop believe shifted labels are ground truth? The source supports only detection of repeatable coordinated movement [PAGE 1], not intent, causality, or weather-adjusted performance.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto proof: the rule-based detector is an explicit geometric/physical gate. A situation is admissible only if ball possession satisfies \(d_{\mathrm{ball}}\lt 2\) m, the attack is in the offensive third \(>17.5\) m in the opposing half, the outside lane is \(>17\) m from the vertical midline, and the runner passes behind the ball carrier over two consecutive frames with speed \(>10\) km/h [PAGE 7]. These thresholds veto any claim that the rule-based baseline is scale-free or merely visual. The neural model has no such hard physical gate; its kNN graph is built from Euclidean distance between nodes [PAGE 5-6], and because coordinates are normalized to \([-1,1]\) [PAGE 3-4], the kNN “nearby” relation is not guaranteed to match meter-scale pitch geometry. Biomechanical veto: the source provides kinematic speed and tracking positions, but no acceleration, force, joint load, fatigue, or injury variable. Therefore any biomechanical claim beyond the 10 km/h kinematic threshold is out-of-source and vetoed. Weather veto: no page reports rain, wind, temperature, pitch moisture, or visibility; the tracking system is described as TRACAB Generation 5 sampled at 25 fps [PAGE 3], but weather robustness is not tested. Any weather-adjusted tactical inference is therefore unsupported. Tracking veto: 25 fps gives \(\Delta t=0.04\) s; missing or occluded frames invalidate velocity differencing and the two-frame overlap rule. The source does not report missing-frame rates, so deployment claims must carry an explicit data-quality veto.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Clock-shift veto. Counterfactual: shift expert overlapping-run labels by \(+11\) frames, beyond the paper’s “next 10 frames” extension [PAGE 3]. Prediction: positive windows no longer cover the expert start; F1 should fall below the reported 0.40 [PAGE 8], while AUC may remain high because the test set is highly unbalanced [PAGE 7]. This veto tests whether the result depends on label-clock synchronization rather than tactical signal.

2. Unlabeled-loss ablation veto. Counterfactual: remove or randomize the unsupervised ELBO term and retain only the supervised classification path, approximating DetNet. Prediction: overlapping-run AUC should move toward DetNet’s 0.62 and chance-without-shot AUC toward DetNet’s 0.69 [PAGE 8]; the F1 advantage over the rule-based 0.31 baseline should shrink. This veto tests the paper’s claim that surplus unlabeled positional data provides effective regularization [PAGE 8].

3. Permutation/equivariance veto. Counterfactual: randomly permute player-node identities and rerun the GAT. Prediction: if the aggregation is truly permutation invariant as required [PAGE 5], outputs and AUC should be identical within numerical tolerance; if outputs change materially, the model violates its own permutation claim. A second branch: set \(k\) to all nodes, forcing a dense graph; prediction: oversmoothing increases and AUC/F1 degrade, consistent with the source’s statement that kNN “alleviates the oversmoothing problem” [PAGE 6 footnote].
</RLVR_COUNTERFACTUAL_VETOES>