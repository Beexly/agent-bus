---
source: "2026 - Automated Detection of Match Phases in Football from Spatio-Temporal Tracking Data Using Graph Neural Networks - Renner et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 47
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5494
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided source paper (Renner et al., arXiv 2610.11571) about automated detection of match phases in football using GNNs.

STRICT INVARIANTS:
1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI units, assumptions, exact singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

I need to treat this as a football/soccer analytics paper, NOT sports betting. No betting lines.

Let me carefully extract information from the source text, noting page numbers from the PDF conversion. The text shows page footers: pages 2-25 visible. I'll cite page markers like [PAGE 7], [PAGE 11], etc.

Key facts:
- arXiv:2610.11571v1, submitted 2026-10-08, October 9, 2026 preprint.
- Authors: Vincent Renner; Nils Koster; Pascal Bauer; Melanie Schienle.
- Data: 203 matches from DFB-Pokal, senior national team, under-21 national team. Men's only. 25 Hz tracking (TRACAB), event data Sportec Solutions. Common Data Format. Seasons 2019/20–2024/25.
- Seven-class taxonomy: Build Up, Low Block, Mid Block, High Block, Counter Attack, Defensive Transition, No Phase.
- Table 1 [PAGE 3]: Share of phases. No Phase 57.2%, Mean Duration 22.7s. Build Up 15.6% (16.6s), Mid Block 15.9% (13.9s), Low Block 0.9% (5.6s), Counter Attack 3.0% (6.3s), Defensive Transition 5.3% (7.5s), High Block 2.1%? Wait let me re-read.

Table 1:
In Possession: High Block, Mid Block, Low Block, Counter Attack, Defensive Transition? Wait layout is weird.

Actually looking at Table 1:
                                  In Possession     Out of Possession           Transitions        No Phase
                                                  High     Mid    Low      Counter    Defensive
                                    Build Up                                                       No Phase
                                                  Block   Block   Block    Attack     Transition
                 Share               15.6%        0.9%    15.9%    2.1%     3.0%        5.3%        57.2%
                 Mean Duration       16.6s        5.6s    13.9s    7.0s     6.3s        7.5s        22.7s

Wait, the columns seem misaligned due to text extraction. Let me map carefully based on the text:
"Build Up" share 15.6%, duration 16.6s.
"Low Block" share 0.9%, duration 5.6s? That seems low for Low Block.
Actually the text says:
Share: 15.6%, 0.9%, 15.9%, 2.1%, 3.0%, 5.3%, 57.2%
Mean Duration: 16.6s, 5.6s, 13.9s, 7.0s, 6.3s, 7.5s, 22.7s

Given context: 'Build Up' and 'Mid Block' are most frequent labeled phases. 'High Block', 'Low Block', 'Counter Attack' are relatively rare (6.0% in total). 
6.0% total for High+Low+Counter = likely 2.1% + 0.9% + 3.0% = 6.0%. Yes! So:
High Block: 2.1% (7.0s? or 5.6s?)
Low Block: 0.9% (5.6s?)
Counter Attack: 3.0% (6.3s?)

Wait, text says: "‘High Block’, ‘Low Block’, and ‘Counter Attack’ are relatively rare (6.0% in total)." 2.1+0.9+3.0 = 6.0. So those are High Block, Low Block, Counter Attack shares.
Then Mid Block 15.9% (13.9s). Defensive Transition 5.3% (7.5s). No Phase 57.2% (22.7s).

But Table 1 column order in text is jumbled. Let me re-read the header:
                                  In Possession     Out of Possession           Transitions        No Phase
                                                  High     Mid    Low      Counter    Defensive
                                    Build Up                                                       No Phase
                                                  Block   Block   Block    Attack     Transition

So columns left to right: Build Up, High Block, Mid Block, Low Block, Counter Attack, Defensive Transition, No Phase.
Share row: 15.6%, 0.9%, 15.9%, 2.1%, 3.0%, 5.3%, 57.2%? No, that doesn't sum right if order is Build Up, High Block, Mid Block, Low Block...
15.6 + 0.9 + 15.9 + 2.1 + 3.0 + 5.3 + 57.2 = 100.0. Yes.
But text says High Block, Low Block, Counter Attack are rare (6.0% total). 0.9 + 2.1 + 3.0 = 6.0. So:
High Block = 0.9%? But then what is 2.1? Low Block? That would make Mid Block 15.9%.
Wait: order: Build Up (15.6), High Block (0.9), Mid Block (15.9), Low Block (2.1), Counter Attack (3.0), Defensive Transition (5.3), No Phase (57.2).
High+Low+Counter = 0.9 + 2.1 + 3.0 = 6.0. That matches!
Durations: Build Up 16.6, High Block 5.6? Mid Block 13.9? Low Block 7.0? Counter Attack 6.3? Defensive Transition 7.5? No Phase 22.7.
Text says: "‘No Phase’ occupies the largest share of match time (57.2%) ... while ‘Build Up’ and ‘Mid Block’ are the most frequent labeled phases. Transition periods occupy less time, and ‘High Block’, ‘Low Block’, and ‘Counter Attack’ are relatively rare (6.0% in total)."
So durations align: Low Block 7.0s, High Block 5.6s? Actually order in duration row: 16.6s, 5.6s, 13.9s, 7.0s, 6.3s, 7.5s, 22.7s. So High Block 5.6s, Mid Block 13.9s, Low Block 7.0s, Counter Attack 6.3s, Defensive Transition 7.5s.

Wait but earlier text says "‘Low Block’ ... ‘High Block’ ... ‘Counter Attack’ are relatively rare". So High Block share 0.9%, Low Block share 2.1%, Counter Attack 3.0%. That's 6.0%. Good.

Actually let me check Table 9 [PAGE 22] class-wise evaluation:
Class Size: No Phase 56.3%, Build Up 16.2%, Low Block 2.1%, Mid Block 16.4%, High Block 1.0%, Defensive Transition 5.2%, Counter Attack 2.9%.
Hmm, validation split differs slightly. But Table 1 is full dataset: 15.6% Build Up, 0.9% High Block? Wait Table 9 says High Block 1.0%, Low Block 2.1%, Mid Block 16.4%. So in validation: Low Block 2.1%, High Block 1.0%.
In Table 1 full dataset: High Block 0.9%, Low Block 2.1%? Or High Block 2.1%, Low Block 0.9%?
Text: "'High Block', ‘Low Block’, and ‘Counter Attack’ are relatively rare (6.0% in total)." If High Block 2.1, Low Block 0.9, Counter Attack 3.0 = 6.0. Then Mid Block 15.9, Build Up 15.6. Sum: 15.6+2.1+15.9+0.9+3.0+5.3+57.2 = 100.0. Yes! So:
Build Up: 15.6%
High Block: 2.1%
Mid Block: 15.9%
Low Block: 0.9%
Counter Attack: 3.0%
Defensive Transition: 5.3%
No Phase: 57.2%
Durations: Build Up 16.6s, High Block 5.6s, Mid Block 13.9s, Low Block 7.0s, Counter Attack 6.3s, Defensive Transition 7.5s, No Phase 22.7s.

Wait, but Table 9 validation says Low Block class size 2.1%, High Block 1.0%. That's slightly different but okay ("numbers on validation split differ slightly").

Actually I need to be careful not to misstate. I'll reference what's clearly stated.

- Graph: Gt = (V, E), k=23 nodes (22 players + ball). Node features x_i in R^m: spatial coords, movement descriptors, node type indicators (attacking/defending/ball relative to focal team).
- Edge attributes e_i,j in R^l: distance, angle, relationship type (teammates, opponents, player-to-ball). e_i,j = 0 if no edge.
- Graph-level features u in {0,1}^2: possession, ball in play.
- One graph per second by averaging 25 frames.
- Adjacency: Delaunay triangulation, k-NN (3,6), radius (r=0.2 ≈ 20m), complete graph.
- SEAConv: Spatial Edge-Augmented Convolution. Adapted from Shi et al. (2021) edge-augmented graph transformer. Edge embeddings augment both attention coefficients and messages. Fourier-encoded coordinates.
- Equation for SEAConv: x'_i = (1/K) sum_{k=1}^K sum_{j in N(i)∪{i}} alpha_{i,j}^{(k)} h_{t,j}^{(k)} + \tilde{e}_{i,j}^{(k)}.
- Attention: alpha_{i,j}^{(k)} = softmax_j ( h_{s,i}^{(k) \top} h_{t,j}^{(k)} + \tilde{e}_{i,j}^{(k)} ) / sqrt(m').
- Random Fourier features: psi(x_pos_i) = [sin(B x_i^pos); cos(B x_i^pos)] where B in R^{2 x m}, entries N(0, sigma^2).
- Baselines: multinomial logistic regression, XGBoost standard features, XGBoost globals only, XGBoost topological, LSTM baseline.
- Model: GNN block -> graph-level attention pooling -> concatenate with embedded global features -> layer norm -> projection -> unidirectional LSTM -> classification layer. P(y_t = c | G_{<=t}).
- Training: 70/30 split by matches, no separate test set. 100 epochs + 10 GNN pre-training. Truncated BPTT 4 chunks. Optimizers: SGD for graph encoder (momentum 0.9, lr 0.01), AdamW for LSTM & head (lr 0.001). Weight decay 5e-4. Cosine annealing to 3e-6. 3 message-passing layers. PairNorm + SiLU. Dropout 0.1 GNN, 0.3 LSTM. Attention heads 4. Fourier sigma 2pi. Hidden dim 64. LSTM layers 1, hidden dim 64. [PAGE 21 Table 7].
- Results Table 2 [PAGE 7]: Delaunay best adjacency: CE 0.249, Acc 0.901, Bal Acc 0.773, Weighted F1 0.898, Macro F1 0.788. Complete worst: Macro F1 0.767 (-2.6%).
SEAConv best layer: CE 0.248, Acc 0.902, Bal Acc 0.781, Weighted F1 0.899, Macro F1 0.793. GINConv worst: Macro F1 0.761 (-4.1%).
- Table 3 [PAGE 8]: GNN vs baselines. GNN CE 0.241, Acc 0.904, Bal Acc 0.785, Macro F1 0.797. XGB Standard: CE 0.310 (+28.8%), Acc 0.882 (-2.4%), Bal Acc 0.756 (-3.7%), Macro F1 0.761 (-4.6%). LSTM: CE 0.313 (+29.7%), Macro F1 0.731 (-8.4%). XGB Topological: Bal Acc 0.614 (-21.8%). XGB Globals: Bal Acc 0.469 (-40.2%), Macro F1 0.446 (-44.0%).
- Calibration [PAGE 8-9]: ECE low. 'Low Block' and 'Counter Attack' overconfident in 0.3-0.8 range. Class-wise CE highest for transitions and High Block. Table 9 [PAGE 22]: CE conditional: Counter Attack 1.371, Defensive Transition 0.846, High Block 0.591, Low Block 0.422. F1: Counter Attack 0.535, Defensive Transition 0.659, High Block 0.795, Low Block 0.811.
- IG analysis [PAGE 9-10]: Graph embeddings at least 36.1% attribution. No Phase 68.8%, Low Block 52.9%, Counter Attack 54.7%, Def Transition 53.3%, Build Up 45.6%, High Block 42.1%, Mid Block 36.1%.
- Feature importance Table 4 [PAGE 10]: X-coordinate most important in High Block (40.1%), Low Block (36.3%). Team association most important in Build Up (23.9%), Mid Block (24.6%), Counter Attack (25.5%). Angle to ball large in all but No Phase.
- Limitations [PAGE 11-12]: performance dropped for transitions (Counter Attack F1=0.54, Defensive Transition F1=0.66). Short phases, boundaries within seconds. Labels rule-based not manual. Men's football only. No independent test set. Hyperparameters not tuned per config.

Now I need to structure the response with the exact XML sections. The user wants >= 1000 words depth across sections, with THINK_TRACE >= 400 words.

I must not mention betting lines. I must use formal LaTeX equations, SI units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.

Let me draft each section.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need to discuss the derivation from tracking data to graph, the GNN message passing, temporal modeling via LSTM, interpretability via IG, and audit gray zones: label fidelity (rule-based vs human), class imbalance (No Phase 57.2%), temporal aggregation from 25Hz to 1Hz losing transient events, no independent test set, hyperparameters fixed not tuned, men's only, validation-only reporting, optimism in absolute performance. Multi-hop: from raw coordinates -> graph construction -> message passing -> pooling -> temporal sequence -> classification -> attribution -> tactical insight. Gray zones: class imbalance causing accuracy to be misleading; phase boundaries for short transitions; temporal alignment; baseline comparison confounded by fixed hyperparameters.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define graph G_t = (V,E), |V|=23. Node features X in R^{k x m}. Edge features E in R^{k x k x l}. Adjacency A. Delaunay triangulation formal definition. SEAConv equations. Fourier features. LSTM cross entropy. Metrics: Balanced accuracy, macro F1. Class weights/imbalance. Breakdown regimes: r=0.2 (~20m) radius; complete graph ~4.5x edges, 67% training time increase; class imbalance singularity when a class frequency -> 0 causing macro F1 variance to blow up; truncated BPTT chunking boundary effects at 1-second resolution; short phase durations (Counter Attack mean 6.3s) vs 1-second graph aggregation causing boundary detection error O(1s) which is a large fraction of phase duration.

RETROCAUSAL_GENEALOGY: Historical lineage: Gilmer et al. 2017 message passing; Kipf & Welling 2017 GCN; Velickovic et al. 2018 GAT; Brody et al. 2022 GATv2; Shi et al. 2021 edge-augmented transformer; Tancik et al. 2020 Fourier features; Sundararajan et al. 2017 IG; Hochreiter & Schmidhuber 1997 LSTM. Football lineage: Rein & Memmert 2016; Goes et al. 2021; Bauer & Anzer 2021 pressing; Raabe et al. 2023 tactical graph networks; Ochin et al. 2025 event detection; Biermann et al. 2025 hierarchical binary classification; Rothe et al. 2026 expert state system. Multi-week traps: if deploying this in a rolling weekly scouting pipeline, label distribution shift across competitions/seasons, rule-based label drift, opponent-specific tactical adaptations, red jersey/kit color confounding tracking (not in paper but a gray zone), pitch dimension standardization.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret it as: the model's "crisis habits" (regression to majority class 'No Phase' under uncertainty) vs counter-trap (opponent tactical shift that invalidates spatial priors) vs clock (temporal dynamics, phase durations, truncated BPTT chunking). The LSTM's hidden state as a recursive theory of mind about opponent phase. The model regresses to 'No Phase' because it's 57.2% of data; under pressure (crisis), it may fail to detect short transitions. Counter-trap: opponent changes formation mid-match, breaking the spatial configuration assumptions (Delaunay edges based on passing triangles). Clock: 1-second graphs, truncated BPTT 4 chunks, mean durations.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: pitch dimensions 105m x 68m (Table 6), standardized coords 0-1 and 0.176-0.824. Biomechanical: speed max 10 m/s, acceleration max 7 m/s^2, stationary threshold 10 km/h (~2.78 m/s), ball speed >20 km/h for counter attack (>5.56 m/s), distance thresholds 12m, 6m, 4m, 2.5m. Weather: not explicitly in paper, but optical tracking (TRACAB) validity under field conditions (Linke et al. 2018, 2020). Veto conditions: if tracking data missing frames (> some threshold), graph construction fails; if player sent off, k reduces from 23; if ball out of play, global feature u=[0,*] and 'No Phase' dominates; if radius r too large, complete graph degeneracy; if Fourier sigma mismatched, spectral bias cannot resolve high-frequency tactical differences.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) veto scenarios + predictions. I should frame these as counterfactual interventions that would veto the model's deployment or predictions.
1. Veto: Short-phase boundary misalignment. Counterfactual: if Counter Attack mean duration 6.3s but model outputs at 1Hz with LSTM smoothing, predicted phase onset delayed by >=1s. Prediction: F1 for Counter Attack drops below 0.50 under ground-truth boundary tolerance of ±0.5s (current 0.535 at loose rule-based labels).
2. Veto: Class-imbalance accuracy paradox. Counterfactual: if a trivial majority-class predictor is evaluated on accuracy only, it achieves 56.3% (Table 3 notes No Phase 56.3% of observations). Prediction: any model reporting accuracy > 0.90 without balanced accuracy/macro F1 is vacuous; the GNN's 0.904 accuracy is largely driven by No Phase. Veto triggered if Balanced Accuracy < 0.70 or Macro F1 < 0.70 on independent matches.
3. Veto: Rule-based label noise propagation. Counterfactual: if labels are generated by rule-based system rather than human annotation (Appendix A), label noise in transition classes is high because boundaries are fuzzy. Prediction: human-annotated test set would show macro F1 degradation of at least 5-8 percentage points relative to validation, especially for High Block (CE 0.591) and Defensive Transition (CE 0.846).

Need to ensure >= 1000 words total. THINK_TRACE >= 400 words.

Let me write carefully with page citations. I need to use [PAGE N] markers. From the text, page numbers are visible at bottom: 2,3,4,5,6,7,8,9,10,11,12,13,... up to 25. I'll cite accordingly.

Verbatim quotes: I should include some exact quotes from the source with page citations.

Let me draft.

THINK_TRACE (>=400 words):
Start with derivation. Raw tracking at 25 Hz -> averaged to 1 Hz graphs. k=23 nodes. Edge construction. Delaunay vs alternatives. Message passing. SEAConv. LSTM. Cross entropy. Metrics. Then gray-zone audit: class imbalance, label rule-based, no test set, fixed hyperparameters, short phases, 1Hz aggregation vs 25Hz, validation-only optimism, men's only. Multi-hop chain: coordinates -> adjacency -> messages -> embeddings -> pooling -> temporal sequence -> classification -> attribution -> tactical interpretation. Each hop has failure modes.

Let's write.

SOURCE_OPERATORS_AND_EQUATIONS: Include equations with LaTeX.
Graph definition: G_t=(V,E), k=|V|=23.
Node feature: x_i ∈ R^m.
Edge feature: e_{i,j} ∈ R^l.
Delaunay: E_Del = edges of T_Del(P), a_ij = 1 iff (i,j) in E_Del.
SEAConv: x'_i = (1/K) sum_{k=1}^K sum_{j in N(i)∪{i}} alpha_{i,j}^{(k)} h_{t,j}^{(k)} + \tilde{e}_{i,j}^{(k)}.
Attention: alpha = softmax_j ( h_s,i^(k) ⋅ h_t,j^(k) + \tilde{e}_i,j^(k) ) / sqrt(m').
Fourier: psi(x_i^pos) = [sin(B x_i^pos); cos(B x_i^pos)], B ~ N(0, sigma^2).
Cross entropy: L = - sum_c y_c log y_hat_c.
Balanced accuracy: BAcc = (1/C) sum_c TP_c / (TP_c + FN_c).
Macro F1: F1_macro = (1/C) sum_c 2 TP_c / (2 TP_c + FP_c + FN_c).
Units: pitch 105m x 68m; speed m/s; acceleration m/s^2; distances m; time s; frequency 25 Hz -> 1 Hz.
Breakdown regimes: r=0.2 (~20m); complete graph 4.5x edges, +67% training time; class frequency -> 0; 1s aggregation vs mean phase duration Counter Attack 6.3s; truncated BPTT 4 chunks.

RETROCAUSAL_GENEALOGY: Cite Gilmer 2017, Kipf 2017, Velickovic 2018, Brody 2022, Shi 2021, Tancik 2020, Sundararajan 2017, Hochreiter 1997. Football: Rein & Memmert 2016, Goes 2021, Bauer & Anzer 2021, Raabe 2023, Ochin 2025, Biermann 2025, Rothe 2026. Multi-week traps: rolling retraining on rule-based labels, distribution shift across seasons (2019/20-2024/25), opponent adaptation.

RECURSIVE_THEORY_OF_MIND: Discuss LSTM hidden state as recursive model of opponent phase; crisis habit regression to 'No Phase' majority class; counter-trap = opponent tactical reconfiguration breaking spatial priors; clock = phase durations and BPTT chunk boundaries.

CROSS_LAYER_VETO_ADJUDICATION: Physical (pitch 105x68, coordinate standardization), biomechanical (stationary <10 km/h, counter attack ball speed >20 km/h, distance thresholds 2.5m/4m/12m), weather (TRACAB optical, Linke validation; no explicit weather in paper but optical tracking can fail under adverse conditions). Veto adjudication: if tracking missing, if sent off (k<23), if ball dead (global feature), if radius degeneracy.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios as above with predictions.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for ~1500-2000 words total.

Make sure no betting language. Avoid "spread", "moneyline", "odds", "betting", "wager". Use "prediction", "classification", "metric".

Let's write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain in Renner et al. (2026) proceeds through six identifiable hops, each with its own failure regime. Hop 1: raw TRACAB optical tracking at 25 Hz for 22 players plus the ball is temporally averaged to one graph per second, producing a directed graph G_t = (V,E) with k = |V| = 23 nodes (or fewer after a red card) at each integer timestamp t [PAGE 3]. Hop 2: node features x_i ∈ R^m combine standardized spatial coordinates (x on a 0–1 pitch scale, y on 0.176–0.824 to preserve a 105 m × 68 m aspect ratio), speed (m s⁻¹, capped at 10 m s⁻¹), acceleration (m s⁻², capped at 7 m s⁻²), distances to goal and ball, team-association one-hots, and sine/cosine encodings of movement direction and angles [PAGE 3; PAGE 20 Table 6]. Hop 3: adjacency is constructed by Delaunay triangulation over the 2D position set P, with k-NN (k = 3, 6), radius (r = 0.2, ≈ 20 m), and complete graphs as ablative alternatives [PAGE 3; PAGE 21 Table 7]. Hop 4: message passing occurs through a Spatial Edge-Augmented Convolution (SEAConv) layer in which edge embeddings enter both attention coefficients and message values, followed by graph-level attention pooling into a d_g-dimensional embedding Z_t [PAGE 5; PAGE 7 Table 2]. Hop 5: Z_t is concatenated with an MLP embedding of the two binary global features u_t (possession, ball-in-play), layer-normalized, projected, and consumed by a unidirectional LSTM to yield P(y_t = c | G_{≤t}) [PAGE 5–6]. Hop 6: Integrated Gradients attribute predictions back to graph embeddings versus global features and to individual node features, establishing that horizontal position (x-coordinate) dominates defensive-block discrimination while team association dominates Build Up [PAGE 10 Table 4].

Gray-zone audit: (i) Class imbalance is severe; “No Phase” is 57.2% of full-dataset observations and 56.3% of validation observations, so raw accuracy of 0.904 is partially vacuous [PAGE 3; PAGE 22 Table 9]. The paper correctly elevates balanced accuracy and macro F1, but absolute performance figures are optimistic because no independent test set exists and the validation set is used for reporting [PAGE 6–7]. (ii) Labels are rule-based rather than human-annotated, so phase-boundary fidelity depends on Appendix A thresholds (e.g., stationary defined as < 10 km/h, organized if (4a + 4b + c)/9 < 250, Counter Attack requires ball speed > 20 km/h) [PAGE 16–17]. (iii) Temporal resolution is collapsed from 25 Hz to 1 Hz; for short phases such as Counter Attack (mean duration 6.3 s) and Defensive Transition (7.5 s), a one-second decision latency is a large fraction of the phase lifetime, explaining the depressed class-wise F1 of 0.535 and 0.659 respectively [PAGE 3 Table 1; PAGE 22 Table 9]. (iv) Hyperparameters were fixed across all 80 runs rather than tuned per configuration, which isolates design-choice effects but precludes claiming optimized performance [PAGE 6–7]. (v) The data cover only men’s competitions (DFB-Pokal, senior and under-21 national teams, 2019/20–2024/25), so generalization to women’s football or other leagues is untested [PAGE 2; PAGE 11–12]. (iv) IG attributions scale with the displacement z − z′ from the validation-set mean baseline, so Figure 4 reflects relative reliance under that baseline rather than unique information content [PAGE 9]. These gray zones imply that the reported macro F1 of 0.797 should be read as a controlled architectural comparison, not a production-ready deployment guarantee.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal graph and message-passing definitions:

Let G_t = (V, E) be the directed graph at second t, with V = {v_1, …, v_k}, k = 23 (22 outfield players plus the ball; reduced if a dismissal occurs) [PAGE 3]. Each node carries x_i ∈ R^m. Edge attributes e_{i,j} ∈ R^l contain Euclidean distance, relative angle, and relationship type (teammate, opponent, player-to-ball); e_{i,j} = 0 when a_{i,j} = 0 [PAGE 3]. Graph-level globals u_t ∈ {0,1}² indicate possession and ball-in-play status [PAGE 3].

Delaunay adjacency: Given P = {x_i^pos ∈ R² | i ∈ V}, let T_Del(P) be the Delaunay triangulation and E_Del its edge set. Then a_{i,j} = 1 iff (i,j) ∈ E_Del [PAGE 3]. The Delaunay graph is dual to the Voronoi tessellation used in pitch control [PAGE 3].

SEAConv update (adapted from Shi et al., 2021) [PAGE 5–6]:
x_i′ = (1/K) Σ_{k=1}^K Σ_{j ∈ N(i) ∪ {i}} α_{i,j}^{(k)} h_{t,j}^{(k)} + \tilde{e}_{i,j}^{(k)},
where h_{s,i}^{(k)} = Θ_s x_i (query), h_{t,j}^{(k)} = Θ_t x_j (key/value), \tilde{e}_{i,j}^{(k)} is the k-th head of a learnable edge encoder γ_e : R^l → R^{Km}, and
α_{i,j}^{(k)} = softmax_j ( (h_{s,i}^{(k) ⊤} h_{t,j}^{(k)} + \tilde{e}_{i,j}^{(k)}) / √m′ ) [PAGE 6].
The self-loop j = i uses e_{i,i} = 0. Attention dropout probability p_attn is applied [PAGE 6].

Random Fourier features for coordinates [PAGE 5–6]:
ψ(x_i^pos) = [ sin(B x_i^pos) ; cos(B x_i^pos) ] ∈ R^{2m}, with B ∈ R^{2×m}, B_{ab} ∼ N(0, σ²), σ = 2π [PAGE 21 Table 7]. Non-spatial attributes are projected by Θ_r ∈ R^{m×(m−2)} and concatenated: [Θ_r x_rest,i ∥ ψ(x_i^pos)] ∈ R^{3m} [PAGE 6].

Loss and metrics [PAGE 7–8; PAGE 18 Appendix E]:
L(y, ŷ) = − Σ_{c=1}^C y_c log ŷ_c, Σ_c ŷ_c = 1.
BAcc = (1/C) Σ_c TP_c / (TP_c + FN_c).
F1_macro = (1/C) Σ_c 2 TP_c / (2 TP_c + FP_c + FN_c).

Validation metrics for the selected Delaunay/SEAConv configuration: CE = 0.241, Accuracy = 0.904, BAcc = 0.785, Weighted F1 = 0.901, Macro F1 = 0.797 [PAGE 8 Table 3]. Baseline gaps: XGBoost Standard trails by +28.8% CE and −4.6% macro F1; LSTM trails by +29.7% CE and −8.4% macro F1; XGBoost Globals has BAcc = 0.469 (−40.2%) and macro F1 = 0.446 (−44.0%) [PAGE 8 Table 3].

SI units and physical constants [PAGE 20 Table 6; PAGE 16–17 Appendix A]: pitch 105 m × 68 m; speed cap 10 m s⁻¹; acceleration cap 7 m s⁻²; stationary threshold 10 km/h (≈ 2.78 m s⁻¹); Counter Attack ball-speed threshold > 20 km/h (≈ 5.56 m s⁻¹); defensive pressure radii 4 m, 6 m, 12 m; ball-control radius 2.5 m with defender distance > 4 m over 15 consecutive frames; temporal aggregation 25 Hz → 1 Hz.

Breakdown / singularity regimes: (a) r = 0.2 (≈ 20 m) radius graph risks near-complete connectivity on compressed defensive blocks; (b) complete graph contains ≈ 4.5× more edges than Delaunay and increases training time by 67% on average [PAGE 7]; (c) class-frequency → 0 makes macro F1 variance unbounded and ECE dominated by near-zero predictions for rare classes [PAGE 9 Appendix F]; (d) 1-second graph granularity versus mean phase durations of 5.6–16.6 s imposes a boundary localization error of O(1 s), which is ≥15% of phase lifetime for Counter Attack (6.3 s) and High Block (5.6–7.0 s) [PAGE 3 Table 1]; (e) truncated BPTT with four chunks per match introduces artificial state resets at quarter-match boundaries [PAGE 21 Table 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s methodological lineage traces through graph representation learning and football-specific tactical analytics. Gilmer et al. (2017) establish the generic message-passing framework x_i′ = γ(x_i, ⊕ ϕ(x_i, x_j, e_{i,j})) that underlies all layers compared here [PAGE 4]. Kipf and Welling (2017) supply GCNConv via the symmetrically normalized adjacency; Velickovic et al. (2018) and Brody et al. (2022) supply GATConv/GATv2 attention; Xu et al. (2019) supply GINConv with its injective MLP aggregation [PAGE 17 Appendix B]. The proposed SEAConv adapts the edge-augmented graph transformer of Shi et al. (2021), differing by sharing key/value projections, folding the self-loop into the attention softmax, and operating on Fourier-encoded coordinates [PAGE 5–6]. Random Fourier features follow Rahimi and Recht (2007) and Tancik et al. (2020) to defeat spectral bias toward low-frequency functions [PAGE 5]. Interpretability uses Integrated Gradients of Sundararajan et al. (2017) [PAGE 9]. Temporal sequencing uses the LSTM of Hochreiter and Schmidhuber (1997) [PAGE 5; Appendix C].

Football-specific antecedents: Rein and Memmert (2016) frame big-data tactical analysis; Goes et al. (2021) review tracking-data potential [PAGE 2]. Bauer and Anzer (2021) and Raabe et al. (2023) pioneer graph representations for pressing and multi-agent sports data [PAGE 2; PAPER 17 Appendix B]. Ochin et al. (2025) apply GNNs to event detection [PAGE 2]. Closest task-related work: Biermann et al. (2025) use recurrent models on handcrafted team-level features for hierarchical binary phase classification with manual labels; Rothe et al. (2026) define an expert state system pairing in-possession/out-of-possession phases via zone counts, validated on twelve Bundesliga matches [PAGE 2]. Renner et al. differ by using player-level graphs rather than zone counts, a seven-class taxonomy including transitions and stoppages, systematic adjacency/layer comparison across 80 runs, and rule-based labels across 203 matches rather than twelve [PAGE 2].

Multi-week traps in a rolling deployment: (i) Label distribution shift across the 2019/20–2024/25 seasons and across DFB-Pokal versus national-team competitions means rule-based thresholds calibrated on one competition may misfire on another [PAGE 2; PAGE 15 Table 5]. (ii) Opponent adaptation: if an opposing coach deliberately breaks the horizontal-line organization assumed by the “organized” defender criterion (score (4a + 4b + c)/9 < 250), the label generator and the spatial prior encoded by Delaunay edges may decouple [PAGE 16 Appendix A]. (iii) Temporal non-stationarity: match-phase base rates vary by scoreline and game state, but the model receives only binary possession/ball-in-play globals, not score or minute, so late-game tactical conservatism is invisible to the input stream [PAGE 3; PAGE 10 Table 10]. (iv) Data-quality drift: TRACAB optical tracking is validated under field conditions (Linke et al., 2018, 2020), but occlusions or camera failures in away venues can drop frames, violating the 25 Hz → 1 Hz averaging assumption [PAGE 2; PAPER 17 Appendix B].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The LSTM hidden state functions as a recursive theory of mind over the opponent’s current phase: at each second t, P(y_t = c | G_{≤t}) conditions on the entire observed history of graphs, so the model maintains a latent belief about whether the opposition is in Build Up, Low Block, Mid Block, High Block, Counter Attack, Defensive Transition, or No Phase [PAGE 5–6]. This recursion exhibits three interacting regimes.

Crisis habit regression: Because “No Phase” is 56.3–57.2% of observations, the recurrent cell’s prior under uncertainty is to regress to the majority stoppage/unclassifiable class [PAGE 3; PAGE 22 Table 9]. In moments of tactical crisis—rapid possession turnover, broken pressing structure, or goalkeeper redistribution—the hidden state may persist in “No Phase” or “Defensive Transition” longer than the ground truth, especially given truncated BPTT chunking every quarter of a match [PAGE 21 Table 7]. The depressed F1 for Defensive Transition (0.659) and Counter Attack (0.535) reflects exactly this regression cost [PAGE 22 Table 9].

Counter-trap: An opponent can invalidate the model’s spatial prior by restructuring the passing graph. Delaunay triangulation assumes players form triangles to keep passing options open; if a team abandons triangular spacing for a compact man-oriented block or an extreme low-block with all ten defenders inside the own third, the edge attributes (distance, angle, team membership) no longer carry the same phase-discriminative signal [PAGE 3; PAPER 16 Appendix A]. The model’s reliance on the x-coordinate for High Block (40.1%) and Low Block (36.3%) means that deliberate vertical compression or horizontal overload can produce misclassification between adjacent block depths [PAGE 10 Table 4].

Clock: The operational clock is fixed at 1 Hz by graph averaging, while phase lifetimes are short: Counter Attack 6.3 s, Defensive Transition 7.5 s, High Block 5.6–7.0 s, Low Block 7.0 s [PAGE 3 Table 1]. A one-second inference delay consumes 10–18% of a transition’s life, and the LSTM’s smoothing across truncated BPTT chunks further blurs onset and offset boundaries. The “kept alive” rules in Appendix A (e.g., 400 ms within a 2 s window for blocks; 400 ms within 1.5 s for Counter Attack) operate at sub-second resolution that the 1 Hz model cannot resolve, so temporal aliasing is structurally unavoidable at the deployed sampling rate [PAGE 16–17].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The pitch is standardized to 105 m × 68 m; x-coordinates are scaled to [0,1] and y-coordinates to [0.176, 0.824] to preserve aspect ratio [PAGE 20 Table 6]. Fourier encoding uses σ = 2π, but if physical coordinates are not standardized, the Gaussian draw B ∼ N(0, σ²) operates on mismatched units and the frequency band collapses [PAGE 21 Table 7].

Biomechanical layer: Stationary is defined as < 10 km/h (≈ 2.78 m s⁻¹) within 60° cones aligned to the goal axis [PAGE 16 Appendix A]. Counter Attack requires ball speed > 20 km/h (≈ 5.56 m s⁻¹) and no defender closer to the ball than an attacker [PAGE 17 Appendix A]. Ball control is declared when attacker distance < 2.5 m, defender distance > 4 m, sustained for 15 consecutive frames (0.6 s at 25 Hz) [PAGE 17]. These thresholds are crisp veto conditions: if TRACAB reports speed above the 10 m s⁻¹ cap or acceleration above 7 m s⁻², the standardized features saturate and the GNN input manifold leaves the training distribution [PAGE 20; PAPER 21 Table 7].

Weather/environment layer: The paper does not model weather explicitly, but TRACAB is an optical video tracking system validated under field conditions (Linke et al., 2018, 2020); heavy precipitation, fog, or stadium lighting changes can degrade optical detection and introduce missing nodes, violating the fixed k = 23 graph assumption [PAGE 2; PAPER 17 Appendix B]. A sent-off reduces k below 23; the paper treats this as identical with fewer nodes, but message-passing layers trained on k = 23 may behave differently under reduced node count unless padding or masking is invariant [PAGE 3].

Veto adjudication: A deployment should be vetoed if (i) tracking frame loss exceeds a threshold such that the 25 Hz → 1 Hz average is computed over fewer than, say, 10 frames in any second; (ii) the graph order drops below 23 without retrained position embeddings; (iii) ball is dead and global feature u_t = [0, 0], in which case the model collapses to “No Phase” with 68.8% graph-embedding attribution and cannot distinguish stoppage cause [PAGE 9–10]; (iv) radius adjacency r = 0.2 degenerates toward a complete graph on crowded defensive structures, reintroducing the 67% training-time penalty and uninformative long-range messages [PAGE 7].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Boundary aliasing veto. Counterfactual: re-annotate Counter Attack and Defensive Transition at 25 Hz with human-verified onset/offset boundaries, then evaluate the 1 Hz model with a ±0.5 s tolerance. Because mean Counter Attack duration is 6.3 s and mean Defensive Transition is 7.5 s, a one-second decision latency removes ≥13% of phase instances [PAGE 3 Table 1]. Prediction: macro F1 for these two classes falls below 0.50 (current rule-based F1: 0.535 and 0.659) [PAGE 22 Table 9]. Verifiable: collect 20 matches with frame-exact human labels; veto triggered if Counter Attack F1 < 0.50 under ±0.5 s matching.

Scenario 2 — Majority-class accuracy paradox veto. Counterfactual: evaluate a trivial predictor that always outputs “No Phase” on an independent match set where “No Phase” share is 56.3% [PAGE 3 Table 1; PAPER 8 Table 3]. It achieves 56.3% accuracy while macro F1 = 0 and BAcc = 1/7 ≈ 0.143 [PAGE 7 formulas]. Prediction: any model reporting accuracy > 0.90 without simultaneous BAcc > 0.70 and macro F1 > 0.70 is vacuous on this imbalance structure. Verifiable: on held-out matches, veto deployment if BAcc < 0.70 or macro F1 < 0.70 regardless of accuracy.

Scenario 3 — Rule-based label noise veto. Counterfactual: replace Appendix A rule-based labels with expert human annotation on a stratified sample of 20 matches, focusing on High Block (class size 1.0–2.1%, CE = 0.591) and Defensive Transition (CE = 0.846) [PAGE 22 Table 9]. Rule-based boundaries use fixed temporal windows (400 ms within 2 s / 1.5 s) that cannot capture gradual defensive-line shifts [PAGE 16–17]. Prediction: human-validated macro F1 degrades by at least 5–8 percentage points relative to the 0.797 validation figure, concentrated in High Block and Defensive Transition where conditional cross-entropy is highest [PAGE 22 Table 9]. Verifiable: obtain three expert annotators, compute Fleiss’ κ; veto if inter-annotator agreement κ < 0.60 on transition classes or if model F1 on human labels drops > 8 points.
</RLVR_COUNTERFACTUAL_VETOES>