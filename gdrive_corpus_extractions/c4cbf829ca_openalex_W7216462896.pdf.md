---
source: "openalex_W7216462896.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 5
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4817
---

<NATIVE_REASONING>
The user wants me to analyze a specific PDF source (pages 5 provided) about modeling football player trajectories using Graph-Structured Recurrent Networks. They want a very specific response format with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis of the provided paper without mentioning betting lines. I need formal LaTeX equations with units and exact breakdown regimes. I need to cite [PAGE N] markers and verbatim quotes.

Let me structure this carefully.

Key facts from the paper:
- Paper: "Modeling Football Player Trajectories During Passes Using Graph-Structured Recurrent Networks" by McGuigan et al.
- Task: 2026 NFL Big Data Bowl Prediction Competition
- Data: 10 fps tracking data, pre-pass context, predict ball-in-flight period
- Architecture: Spatio-Temporal Graph LSTM, encoder-decoder, 3 parallel encoders (tracking, player, time), fused MLP, N stacked Graph LSTM layers (GATv2 + LSTM cell), autoregressive decoder on Vpred
- Target: velocity vector st (shift) rather than absolute coordinates; position update ŷt = ŷt−1 + st
- Normalization: Field Scaling ([0,1] positions, others unscaled), Max Scaling (divide by known max values), RMS Scaling (positions centered at midpoint divided by half field size -> [-1,1], other features divided by RMS)
- Two targets: velocity or acceleration
- RMSE metric: RMSE = sqrt(1/(2N) * sum[(xt,i - xp,i)^2 + (yt,i - yp,i)^2])
- Results table:
  - Field/Velocity: 0.755
  - Field/Acceleration: 0.936
  - Max/Velocity: 0.702
  - Max/Acceleration: 0.911
  - RMS/Velocity: 0.684
  - RMS/Acceleration: 0.699
- Units: yards (positional deviation)
- Compute: 10 GB VRAM, 10 CPU cores, up to 400 epochs, patience 16, N=2 Graph LSTM layers
- Breakdown: acceleration is second-order, affected by cleat-turf friction, elastic energy return, gait adjustments; errors compound through double integration; velocity avoids amplification because short-horizon motion is smooth for first-order approximation.

Word count: Need >= 1,000 words total across sections, with THINK_TRACE >= 400 words.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need to discuss:
- Why RMS scaling works: preserves proportional relationships, reduces feature-scale disparities, coherent feature geometry for stable attention weights.
- Why velocity target beats acceleration: first-order vs second-order, double integration error compounding, unobserved forces (cleat-turf friction, elastic energy return, gait adjustments).
- Graph LSTM details: GATv2 attention weights, message passing, fully connected graph G=(V,E), implicit dependencies regardless of proximity.
- Variable-length sequences: time encoder preserves temporal fidelity.
- Gray zones: RMSE in yards but no explicit coordinate system origin; "relevant defenders" selection undefined; autoregressive error accumulation over variable ball-in-flight duration; nine-hour compute budget constraint; early stopping patience 16 may underfit long plays; N=2 fixed layers might be insufficient for highly variable sequence lengths; max scaling physical plausibility bounds not quantified numerically in text.
- Multi-hop: normalization -> feature geometry -> attention stability -> temporal dynamics -> RMSE. Acceleration prediction -> unobserved biomechanics -> integration error -> compounding -> RMSE degradation.

Need >= 400 words here.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations, units, page citations, verbatim quotes.
- Define G = (V, E) [PAGE 2]
- X for T_in frames, Y for V_pred [PAGE 2]
- RMSE equation [PAGE 3] with units yards.
- Position update: ŷ_t = ŷ_{t-1} + s_t [PAGE 3]
- Normalization mappings:
  - Field: x' = x / D_field, range [0,1] [PAGE 4]
  - RMS: positions centered at midpoint, divided by half field size -> [-1,1]; features / RMS [PAGE 4]
  - Max: features / known max [PAGE 4]
- GATv2 + LSTM cell update: h_t = LSTM(GATv2({h_j}), h_{t-1}) [PAGE 3]
- Autoregressive decoder initialized from encoder hidden states [PAGE 2-3]
- Breakdown regimes: acceleration double integration singularity; max scaling physical plausibility bounds; early stopping at patience 16; N=2 layers; 10 fps sampling.
- Units: positions in yards (implied by field dimensions), speed/acceleration unscaled or normalized, time in frames at 10 fps (Δt = 0.1 s), RMSE in yards [PAGE 3: "Errors represent average positional deviation in yards"], VRAM 10 GB, CPU cores 10, epochs 400, patience 16.

Need exact verbatim quotes with [PAGE N].

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Social force models Helbing & Molnar 1995 [PAGE 2, ref 8]
- Social LSTM Alahi et al. 2016 [PAGE 5, ref 1]
- Interaction Networks Battaglia et al. 2016 [PAGE 5, ref 2]
- GCN Kipf & Welling 2017 [PAGE 5, ref 9]
- GAT Veličković et al. 2018 [PAGE 5, ref 11]
- DE SIRE Lee et al. 2017 [PAGE 5, ref 10]
- Social GAN Gupta et al. 2018 [PAGE 5, ref 7]
- Soccer pitch-control Bialkowski et al. 2016 [PAGE 1, ref 3]
- Basketball Cervone et al. 2016 [PAGE 1, ref 5]
- DeepQB Burke & ESPN 2019 [PAGE 1, ref 4]
- Gudmundsson & Horton 2017 survey [PAGE 1, ref 6]
- Multi-week traps: overfitting to normalization on one week's tracking distribution, field geometry changes (stadium), temperature affecting cleat-turf friction, player roster changes altering role embeddings, early-season vs late-season acceleration profiles.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure (e.g., late-game, high variability), models regress to simpler heuristics; here acceleration targeting is a "crisis habit" because it seems physically richer but is actually second-order and noise-amplifying.
- Counter-trap: RMS+velocity appears robust but may be a local optimum that fails under non-stationary conditions (e.g., sudden weather change altering turf friction, which velocity first-order approx cannot capture).
- Clock: 10 fps sampling, ball-in-flight duration variable, nine-hour compute budget, autoregressive step-by-step generation means inference time scales with output length; early stopping patience 16 epochs relative to 400 max.
- Theory of mind: model must anticipate defender reactions to receiver route adjustments; graph attention learns implicit dependencies; but if defense disguises coverage (not in data), attention weights misallocate.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical veto: acceleration targets require inferring unobserved forces (cleat-turf friction, elastic energy return, gait adjustments) [PAGE 4]; double integration compounds error. VETO: acceleration-only prediction is physically underdetermined from tracking alone.
- Biomechanical veto: human max speed/acceleration bounds used in Max Scaling [PAGE 4] but exact values not given; without quantifiable bounds, physical plausibility constraints are unverifiable.
- Weather veto: turf conditions (wet/dry, temperature) affect cleat-turf friction and thus acceleration; not in dataset features [PAGE 4]; velocity target assumes local continuity sufficient for first-order approximation [PAGE 4], which breaks under rapid surface transitions.
- Adjudication: RMS+velocity passes veto because it avoids unobserved force inference and respects proportional kinematic relationships; however, it remains vetoed under extreme non-stationarity where first-order continuity fails.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
Need 3 scenarios, verifiable, with predictions.
1. Scenario: Wet turf / precipitation changes cleat-turf friction coefficient μ. Prediction: RMS/Velocity RMSE degrades by >15% relative to dry baseline because first-order velocity continuity cannot capture sudden deceleration cuts; acceleration target would degrade even more (>30%) due to unobserved force inference failure. Verifiable via held-out games in high-precipitation weeks.
2. Scenario: Sequence length extrapolation. Test plays with ball-in-flight duration > 95th percentile of training output lengths (Figure 2). Prediction: autoregressive decoder error accumulates linearly with frame count; RMSE grows super-linearly beyond training horizon because hidden state drift compounds; early stopping at patience 16 may prevent convergence on long-sequence gradient signals. Verifiable by stratifying test set by output length quartiles.
3. Scenario: Role distribution shift (new rookie defenders or positional flex). Player encoder embeddings for position/role/side [PAGE 3] trained on historical distribution; out-of-distribution role embeddings degrade attention weights. Prediction: RMSE increases by >0.10 yards for plays containing ≥2 players with unseen role-position combinations; GATv2 attention entropy rises. Verifiable via leave-one-season-out cross-validation on tracking data.

Need to ensure no betting lines. No spreads, totals, moneylines, odds. I won't mention any.

Need to ensure word count >= 1000. Let's aim for ~1500-1800 words total.

Need to cite exact [PAGE N] markers and verbatim quotes. I will include quotes like:
- [PAGE 2]: "We formulate trajectory forecasting as a sequence-to-sequence task on a dynamic graph G = (V, E)."
- [PAGE 3]: "At each step, it predicts a velocity vector st (shift) rather than absolute coordinates. The position is updated through ŷt = ŷt−1 + st"
- [PAGE 4]: "Asking the model to predict acceleration therefore requires it to infer unobserved forces, and the resulting errors compound when positions are reconstructed through double integration."
- [PAGE 3]: "Errors represent average positional deviation in yards for all predicted post-release frames."
- [PAGE 4]: "acceleration is a second-order quantity affected by factors absent from the dataset, such as cleat–turf friction, elastic energy return, and instantaneous gait adjustments."

Need to be careful with LaTeX. Use proper LaTeX syntax.

Let's draft.

THINK_TRACE (>=400 words):

Start by describing the multi-hop chain. The paper's central claim: RMS scaling + velocity target yields RMSE 0.684 yards. Derivation:
1. Data ingestion at 10 fps => Δt = 0.1 s.
2. Encoder branches produce joint representation z_t.
3. Graph attention computes attention weights α_ij over fully connected graph.
4. LSTM integrates hidden state.
5. Decoder predicts shift s_t, position update.
6. Normalization changes input metric geometry, affecting attention softmax temperature implicitly.
7. Target parameterization changes loss landscape: velocity is first derivative, acceleration second derivative.
8. Double integration of acceleration error e_a(t) yields position error ~ ∫∫ e_a dt^2, which grows quadratically or at least accumulates.
9. Therefore RMS/Velocity optimal.

Gray-zone audit:
- Coordinate origin and rotation invariance not specified; RMSE in yards assumes Euclidean field plane but orientation feature handling unspecified.
- "Relevant defenders" V_pred definition not fully specified; scoring only targeted receiver and defenders [PAGE 1] but selection criteria opaque.
- Autoregressive decoder: errors feed back as inputs; no teacher forcing ratio mentioned; long ball-in-flight sequences risk exposure bias.
- Compute budget: nine-hour limit, internet disabled, external data restricted [PAGE 2]; this caps ensemble size and test-time adaptation.
- Early stopping patience 16 out of 400 epochs [PAGE 3]: may halt before long-sequence plays converge, since gradient signal from long outputs arrives late.
- N=2 Graph LSTM layers fixed [PAGE 3]: may be insufficient for deep relational reasoning across many players.
- Max scaling physical plausibility: known maximum human speed/acceleration prevent impossible movements [PAGE 4], but exact numerical bounds absent, making constraint enforcement unauditable.

Word count check: I'll write generously.

SOURCE_OPERATORS_AND_EQUATIONS:
Equations:
- Graph: G = (V, E), fully connected.
- Input: X ∈ R^{T_in × |V| × F}
- Output: Y ∈ R^{T_out × |V_pred| × 2}
- RMSE = sqrt(1/(2N) Σ_{i=1}^N [(x_{t,i} - x_{p,i})^2 + (y_{t,i} - y_{p,i})^2]) yards.
- Decoder: ŝ_t = f_decoder(h_{t-1}, ...), ŷ_t = ŷ_{t-1} + ŝ_t · Δt? Wait paper says predicts velocity vector s_t (shift) and position updated through ŷ_t = ŷ_{t-1} + s_t. Since data at 10 fps, s_t likely in yards per frame or displacement per frame. I'll state units carefully: if s_t is velocity (yards/frame), then multiplication by Δt_frame=1 frame yields displacement. The paper says "When velocity is predicted it is multiplied by the inter-frame time interval to obtain displacement" under Field Scaling [PAGE 4]. But Decoder section says "predicts a velocity vector st (shift)... position is updated through ŷt = ŷt−1 + st" [PAGE 3]. There's slight tension; I'll note it as a formalization ambiguity/gray zone.
- Normalization operators:
  - Field: x' = x / L_field ∈ [0,1]
  - RMS: p' = (p - midpoint) / (L_field/2) ∈ [-1,1]; f' = f / RMS(f)
  - Max: f' = f / f_max
- GATv2 + LSTM: h_t^l = LSTM_cell( AGG_{j∈N(i)} α_ij^l W h_j^{l-1}, h_{t-1}^l )
- Breakdown regimes: acceleration prediction requires unobserved forces F_unobserved = {friction, elastic return, gait}; second-order integration error ε_pos(t) ≈ ∫_0^t ∫_0^τ ε_a(u) du dτ; singularity when Δt→0 but noise dominates, or when friction changes discontinuously.

Include verbatim quotes with page markers.

RETROCAUSAL_GENEALOGY:
- Helbing & Molnar social force [8]
- Alahi Social LSTM [1]
- Battaglia Interaction Networks [2]
- Kipf GCN [9]
- Veličković GAT [11]
- Gupta Social GAN [7]
- Lee DESIRE [10]
- Bialkowski soccer [3], Cervone basketball [5], Burke DeepQB [4], Gudmundsson survey [6]
Multi-week traps: normalization overfit to week-specific tracking distribution, stadium-specific field dimensions (though all NFL fields same dimensions, orientation and surface vary), temperature effects on turf, roster turnover altering static player embeddings, early vs late season player fatigue changing acceleration profiles.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under high-stakes/high-variability passes, model may revert to acceleration targeting because it seems more "physical" but is structurally inferior.
- Counter-trap: RMS+velocity appears robust but fails when local continuity assumption breaks (sudden cuts, slips, collisions).
- Clock: 10 fps means 100ms resolution; ball-in-flight duration variable; autoregressive generation O(T_out); compute budget 9 hours.
- Theory of mind: defender route anticipation requires modeling opponent's mental state; graph attention approximates this via learned weights but lacks explicit belief modeling.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical veto: acceleration second-order, unobserved forces [PAGE 4].
- Biomechanical veto: max speed/accel bounds [PAGE 4] but unquantified.
- Weather veto: turf friction not in features [PAGE 4]; velocity first-order continuity assumption breaks.
- Adjudication matrix: RMS/Velocity survives standard conditions; vetoed under extreme surface non-stationarity or very long T_out.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios as above with predictions.

Need to ensure total words >= 1000. Let's write.

I must not include any betting lines. No spreads, totals, moneylines, odds. I will avoid any gambling terminology.

Let's write in a formal tone.

I will now produce the final response with all XML sections.

Check LaTeX: use \displaystyle or inline. Use proper escaping? The user wants formal LaTeX equations. I'll write them in markdown/LaTeX style within the XML.

Let's compose carefully.

Word count estimate:
THINK_TRACE: ~500 words
SOURCE_OPERATORS: ~350 words
RETROCAUSAL: ~250 words
RECURSIVE_TOM: ~200 words
CROSS_LAYER: ~200 words
RLVR: ~250 words
Total ~1750 words. Good.

Need to include [PAGE N] citations throughout.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central optimization problem can be derived as a chain of four multi-hop transformations: (1) raw tracking telemetry at 10 fps is mapped into a normalized feature space; (2) the normalized tensor is ingested by a fully connected graph G = (V, E) in which every player node attends to every other player node through GATv2 attention weights; (3) a stacked LSTM integrates temporal momentum across frames; (4) an autoregressive decoder emits either a velocity shift s_t or an acceleration command, which is then integrated into position estimates ŷ_t. Each hop introduces a distinct failure surface.

Hop 1 concerns normalization geometry. Field scaling collapses positions into [0, 1] while leaving kinematic features unscaled, which creates a metric mismatch between spatial coordinates (bounded by field dimensions) and speed/acceleration (unbounded by construction). Max scaling divides by known physical maxima, which is theoretically appealing because it permits hard plausibility constraints, but the text does not publish the exact numerical bounds used for “known maximum human speed and acceleration” [PAGE 4], rendering the constraint enforcement unauditable. RMS scaling centers positions at the field midpoint, divides by half the field size to obtain [−1, 1], and divides all other features by their root-mean-square values. This preserves proportional relationships among spatial and kinematic variables while compressing feature-scale disparities. The consequence for the graph is structural: attention weights in GATv2 operate on coherent feature geometry; when input scales are disparate, softmax attention can saturate or assign undue magnitude to high-variance kinematic channels, destabilizing the message-passing operator. RMS scaling therefore reduces the condition number of the effective feature covariance seen by the attention operator, which stabilizes the learned dependencies across the fully connected graph.

Hop 2 and 3 combine spatial attention with temporal recurrence. Each Graph LSTM block computes h_t^l = LSTM_cell(AGG_{j}(α_{ij} W h_j^{l-1}), h_{t-1}^l). With N = 2 layers [PAGE 3], the model maintains a short memory of motion momentum. The encoder sees T_in pre-release frames; the decoder, initialized from encoder hidden states, generates only for V_pred (targeted receiver and relevant defenders) [PAGE 2]. Because the graph is fully connected, the model must learn implicit dependencies regardless of initial proximity, which is computationally expensive but necessary for route-coverage interactions.

Hop 4 is target parameterization, and it is where the paper’s most consequential finding resides. Predicting velocity produces a first-order update ŷ_t = ŷ_{t−1} + s_t [PAGE 3]. Short-horizon football motion is sufficiently smooth that a first-order approximation leverages local continuity directly. Predicting acceleration, by contrast, is a second-order problem: the network must infer unobserved forces—cleat–turf friction, elastic energy return, instantaneous gait adjustments—none of which are in the feature set [PAGE 4]. Position reconstruction then requires double integration, and acceleration error ε_a(t) compounds into position error approximately as ε_pos(t) ≈ ∫∫ ε_a(u) du dτ. The empirical RMSE table reflects this structural penalty: acceleration targets underperform velocity under every normalization condition, with the gap largest under field scaling (0.936 vs 0.755) and narrowest under RMS (0.699 vs 0.684), suggesting normalization reduces acceleration-signal noise but cannot overcome the integration singularity [PAGE 4].

Gray-zone audit. The RMSE is reported in yards [PAGE 3], yet the paper never specifies the Euclidean origin, yard-line registration, or whether orientation features are rotated into a play-centric frame; without this, cross-play comparability assumes a hidden coordinate alignment. “Relevant defenders” and the composition of V_pred are not formally defined beyond “the targeted receiver and relevant defenders” [PAGE 1], leaving the scoring subset opaque. The decoder is purely autoregressive; no teacher-forcing ratio or scheduled sampling is disclosed, so exposure bias accumulates as a function of ball-in-flight duration, which varies considerably across plays [PAGE 2]. Early stopping uses patience of 16 epochs within a 400-epoch cap [PAGE 3], which risks truncating convergence on long-sequence plays whose gradient signal arrives late in training. Finally, the nine-hour compute budget, disabled internet, and public-data-only restriction [PAGE 2] forbid test-time adaptation or ensemble expansion, capping inference robustness under distribution shift.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the input telemetry tensor be X ∈ R^{T_in × |V| × F}, sampled at 10 fps, so the inter-frame interval is Δt_frame = 0.1 s. The forecasting target is Y ∈ R^{T_out × |V_pred| × 2} for V_pred ⊆ V. The evaluation metric, with positions in yards, is

RMSE = sqrt(1 / (2N) · Σ_{i=1}^{N} [(x_{t,i} − x_{p,i})^2 + (y_{t,i} − y_{p,i})^2])   [yards]

“Errors represent average positional deviation in yards for all predicted post-release frames” [PAGE 3, Table 1 caption].

The dynamic graph is defined as G = (V, E) and is fully connected: “allowing the network to learn implicit dependencies between any pair of agents regardless of initial spatial proximity” [PAGE 2]. Each Graph LSTM layer fuses a GATv2 spatial aggregator with an LSTM cell:

h_t^{(l)} = LSTM_cell( ⨁_{j ∈ N(i)} α_{ij}^{(l)} W^{(l)} h_j^{(l−1)}, h_{t−1}^{(l)} )

where α_{ij}^{(l)} are learnable attention weights. The model uses N = 2 Graph LSTM layers, trained for up to 400 epochs with patience 16, on 10 GB VRAM and 10 CPU cores [PAGE 3].

Three normalization operators are defined on page 4:
1. Field scaling: positions x' = x / L_field ∈ [0, 1]; speed and acceleration left unscaled.
2. Max scaling: features f' = f / f_max; positions continue under field scaling; bounds intended to enforce physical plausibility via known maximum human speed and acceleration.
3. RMS scaling: positions p' = (p − p_midpoint) / (L_field / 2) ∈ [−1, 1]; all other features f' = f / RMS(f).

Target formulations:
- Velocity target: the decoder predicts a velocity vector s_t (shift) and updates position via ŷ_t = ŷ_{t−1} + s_t [PAGE 3]. Under field scaling, predicted velocity is multiplied by the inter-frame time interval to obtain displacement [PAGE 4].
- Acceleration target: acceleration is used to update stored velocity, which then computes displacement [PAGE 4].

Test RMSE results (yards): Field/Velocity 0.755; Field/Acceleration 0.936; Max/Velocity 0.702; Max/Acceleration 0.911; RMS/Velocity 0.684; RMS/Acceleration 0.699 [PAGE 4, Table 1].

Breakdown and singularity regimes. Acceleration prediction is formally underdetermined because “acceleration is a second-order quantity affected by factors absent from the dataset, such as cleat–turf friction, elastic energy return, and instantaneous gait adjustments” [PAGE 4]. Double integration makes the position error grow with the double time integral of acceleration noise. Velocity targeting avoids this amplification because “short-horizon motion is sufficiently smooth for a first-order approximation” [PAGE 4]. Max scaling’s physical-plausibility veto depends on unpublished numerical maxima, so the hard constraint regime cannot be verified from the text.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s genealogy sits at the intersection of pedestrian social-force physics, multi-agent deep learning, and sports tracking analytics. The earliest cited ancestor is Helbing and Molnar’s Social Force Model for Pedestrian Dynamics (1995), which introduced hand-designed potentials to model interacting agents [PAGE 5, ref. 8]. This was succeeded by deep recurrent architectures such as Social LSTM (Alahi et al., 2016) and DESIRE (Lee et al., 2017), which pool neighbor information through recurrent message passing [PAGE 5, refs. 1, 10]. Graph neural networks then became dominant: Kipf and Welling’s Graph Convolutional Networks (2017) provided the spectral inductive bias, while Veličković et al.’s Graph Attention Networks (2018) and Battaglia et al.’s Interaction Networks (2016) supplied the attention and relational-physics machinery that this paper adapts into a GATv2–LSTM hybrid [PAGE 5, refs. 2, 9, 11]. Generative multimodal forecasting is represented by Social GAN (Gupta et al., 2018) [PAGE 5, ref. 7].

Domain-specific lineage includes soccer formation and pitch-control models (Bialkowski et al., 2016), basketball possession modeling (Cervone et al., 2016), and quarterback decision modeling via DeepQB (Burke & ESPN Analytics, 2019) [PAGE 1, refs. 3–6]; Gudmundsson and Horton’s 2017 survey provides the spatiotemporal team-sports umbrella [PAGE 1, ref. 6]. The immediate competitive context is the 2026 NFL Big Data Bowl Prediction Competition, which supplies pre-pass tracking data and demands post-release (x, y) forecasts until ball landing [PAGE 1].

Multi-week traps derive from non-stationarity in this lineage. Normalization statistics computed on Week 1–8 tracking distributions may misalign with Week 9–18 distributions if player fatigue alters acceleration profiles or if stadium-specific turf conditions shift cleat–friction dynamics. Because static player embeddings (height, weight, age, position, role, side) are learned from historical plays [PAGE 3], roster turnover and positional flex usage create out-of-distribution node attributes that degrade attention weight allocation. A model tuned to early-season route-spacing densities may systematically over-smooth late-season defensive adjustments, producing a temporal drift trap that RMS scaling alone cannot repair because it does not model exogenous surface or weather variables absent from the feature set [PAGE 4].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of a forecasting system, under high-variance or high-stakes conditions, to revert to a seemingly richer but structurally fragile target representation. Here the crisis habit is acceleration targeting: when a pass play becomes volatile—tight coverage, accelerated receiver breaks, scrambling defenders—a designer may intuitively reach for acceleration because it appears to capture “forces” and sudden changes in motion. Yet the paper shows acceleration is second-order and depends on unobserved biomechanical variables; under pressure, the model regresses to inferring forces it cannot see, and double integration turns small inference errors into large positional deviations [PAGE 4]. This is a regression to a more complex hypothesis class with higher effective variance and no compensating bias reduction.

The counter-trap is RMS scaling with velocity targeting. It appears robust across all six configurations and wins with RMSE 0.684 yards [PAGE 4], but its success rests on the first-order continuity assumption: “short-horizon motion is sufficiently smooth for a first-order approximation” [PAGE 4]. If a play contains a discontinuous event—a slip, a collision-induced change of direction, or a sudden cut on altered turf—the velocity model has no mechanism to represent the impulse because it lacks acceleration state and has no explicit collision or friction variables. The counter-trap is therefore a local-optimum trap: the model wins on average by assuming local smoothness and loses catastrophically on the exact high-impact plays where trajectory accuracy matters most.

The clock operates at three layers. First, the sensor clock: 10 fps fixes Δt_frame = 0.1 s, bounding temporal resolution and making the autoregressive decoder’s step count equal to the ball-in-flight frame count [PAGE 2]. Second, the training clock: up to 400 epochs with patience 16 means long-sequence plays whose loss gradients arrive late may be prematurely excised by early stopping [PAGE 3]. Third, the inference clock: the nine-hour compute budget with no internet and only public data forbids test-time ensembling or online recalibration, so wall-clock inference latency scales linearly with output sequence length and cannot be amortized across adaptive compute [PAGE 2]. The recursive theory of mind thus predicts that defenders’ route adjustments are modeled only implicitly through learned attention weights, not through explicit belief states about the defender’s intent; when a defense disguises coverage—a move not encoded in pre-pass features—the graph attention mechanism misallocates relational mass, and the velocity-first-order decoder cannot anticipate the resulting discontinuous receiver path.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Three veto layers are applied to the RMS/Velocity configuration.

Physical veto (acceleration layer). Acceleration is a second-order quantity requiring inference of unobserved forces: cleat–turf friction, elastic energy return, instantaneous gait adjustments [PAGE 4]. Because these forces are absent from X, the acceleration target is physically underdetermined. Position reconstruction through double integration converts any force-inference error into quadratically accumulating position error. VERDICT: Acceleration-only prediction is vetoed under all conditions; it cannot satisfy the physical consistency constraint that position updates derive from observable kinematics alone.

Biomechanical veto (max-scaling layer). Max scaling claims the ability to enforce physical plausibility using “the known maximum human speed and acceleration” [PAGE 4]. However, the paper does not state the numerical values of these maxima, nor does it specify how hard constraints are projected into the decoder output. Without published bounds, the plausibility constraint is formally empty. VERDICT: Max scaling’s veto shield is unverifiable from the source text; it cannot be admitted as a proven physical safeguard.

Weather/surface veto (turf layer). Turf condition, precipitation, and temperature modulate cleat–turf friction, which directly governs acceleration and deceleration limits. None of these variables appear in the player attribute, spatial, kinematic, or contextual feature categories listed on page 2. The velocity target assumes local continuity is sufficient [PAGE 4], an assumption that breaks when a receiver plants on wet turf and the friction coefficient μ drops discontinuously. VERDICT: RMS/Velocity is vetoed under high-μ-variance weather regimes unless surface state is added to the feature vector.

Adjudication matrix. Under nominal dry-turf, nominal-duration passes, RMS/Velocity passes all vetoes and achieves the lowest RMSE (0.684 yards) [PAGE 4]. It fails the weather/surface veto when μ shifts abruptly, and it remains vulnerable to autoregressive drift on very long ball-in-flight sequences because no uncertainty estimation or physics-aware penalty is applied [PAGE 5]. The configuration is therefore conditionally valid: optimal within the training distribution’s surface and duration regime, but not a general proof of physical trajectory consistency.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Precipitation-induced friction shift. Held-out games from weeks with recorded rainfall or snow are separated from dry-condition games. On wet turf, cleat–turf friction μ decreases, producing sudden decelerations and cuts that violate the first-order continuity assumption embedded in the velocity target ŷ_t = ŷ_{t−1} + s_t [PAGE 3]. PREDICTION: RMS/Velocity RMSE degrades by at least 15% relative to its dry-condition baseline, while RMS/Acceleration degrades by at least 30% because the network must infer unobserved friction forces and compound error through double integration [PAGE 4]. VERIFICATION: Stratify the test set by NOAA game-day precipitation; compute RMSE per stratum; reject the null if the wet-stratum velocity RMSE exceeds dry-stratum RMSE by >0.10 yards.

Scenario 2: Output-length extrapolation beyond training horizon. Figure 2 shows variable sequence lengths for train input, train output, and test input [PAGE 2]. Select test plays whose ball-in-flight output length exceeds the 95th percentile of the training output distribution. Because the decoder is autoregressive and initialized only once from encoder states [PAGE 2], hidden-state drift accumulates with every emitted step, and early stopping at patience 16 may prevent full convergence on long-sequence gradient signals [PAGE 3]. PREDICTION: RMSE grows super-linearly with output length beyond the training horizon; for plays in the top 5% of duration, RMS/Velocity RMSE exceeds 0.90 yards. VERIFICATION: Bin test plays by output-length quartile; fit RMSE vs. frame count; reject the null if the slope in the top quartile is statistically greater than the slope in the bottom quartile (p < 0.01).

Scenario 3: Role-position distribution shift. The player encoder produces learned embeddings for position, role, and side (offense/defense), linearly projected from static attributes [PAGE 3]. Conduct a leave-one-season-out cross-validation where all plays containing a rookie or position-flex defender (unseen role-position combination in training) are held out. The GATv2 attention weights, conditioned on historical role embeddings, will misallocate relational mass for these out-of-distribution nodes. PREDICTION: Plays with ≥2 unseen role-position player combinations show RMS/Velocity RMSE increases of at least 0.10 yards and elevated attention-entropy in the first Graph LSTM layer. VERIFICATION: Compute leave-one-season-out RMSE stratified by role-position novelty; reject the null if the novel-subset RMSE exceeds the in-distribution RMSE by >0.08 yards with p < 0.05.
</RLVR_COUNTERFACTUAL_VETOES>