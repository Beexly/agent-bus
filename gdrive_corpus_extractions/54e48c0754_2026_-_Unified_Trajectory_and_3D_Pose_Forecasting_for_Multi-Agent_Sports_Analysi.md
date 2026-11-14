---
source: "2026 - Unified Trajectory and 3D Pose Forecasting for Multi-Agent Sports Analysis - Peral et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 32
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4148
---

<NATIVE_REASONING>
The user wants a rigorous analysis of the provided source paper: "Unified Trajectory and 3D Pose Forecasting for Multi-Agent Sports Analysis - Peral et al." (arXiv:2610.30519).

I need to follow strict invariants:
1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important notes:
- The source text provided is machine-converted pdftotext layout. It contains page markers? Let me check if there are [PAGE N] markers in the source text. The text provided doesn't seem to have explicit page number markers like [PAGE 3] embedded in the text. However, the instruction says "When source pages are provided, cite exact [PAGE N] markers". I need to be careful: if pages aren't explicitly marked, I should not invent page numbers. But the source text says "<!-- source: ... -->" and then content. There are no explicit [PAGE N] tokens visible. I should either cite sections/equations (e.g., Eq. (1), Table 4) or note that page markers are absent from the machine-converted text, citing arXiv ID and section/equation/table identifiers instead. I must not fabricate [PAGE N] markers.

- Word count: >=1,000 words total across sections. THINK_TRACE alone >=400 words.

- No betting lines whatsoever.

- Formal LaTeX equations with units and assumptions and breakdown regimes. I should reproduce/derive the equations from the paper correctly:
  - Eq (1): L_total = L_traj + λ_pose L_pose + λ_smooth L_smooth
  - Eq (2): L_traj = (1/NT) Σ ||x̂_n,t - x_n,t||_2
  - Eq (3): L_pose = (1/NT) Σ || w ⊙ ε_n,t ||_2 where ε includes L1 over xyz then l2 over joints? Actually paper says first compute absolute error as |Δx|+|Δy|+|Δz| then take l2 norm over full set of joints. Wait: "We then take the l2 norm over the full set of joints, which acts as a regularizer that heavily penalizes large localized errors... The pose loss is then written as: L_pose = (1/NT) Σ || w ⊙ ε_n,t ||_2 where ε_n,t = (ε_n,t,1, ..., ε_n,t,J) ∈ R^J collects the per-joint errors". So ε_n,t,j is the L1 sum over coordinates? Actually they say compute absolute error as sum of absolute differences in x,y,z, so ε_n,t,j is scalar per joint. Then l2 norm over J joints. Units: mm (since metrics are in mm).
  - Eq (4): L_smooth = (1/(NFC)) Σ_n Σ_k=0^{F-1} Σ_c f_k^2 |q̂_n,k,c|^2, where F = floor(T_pred/2)+1, f_k = k/(F-1) ∈ [0,1], C=2.

- Evaluation protocol: non-overlapping stride vs unit stride bias. WorldPose: Morocco-Portugal val, Netherlands-Argentina test, other 6 games train. 3-second windows (1s observed, 2s forecast). 3DPW: 30 fps, 90 frames for 3s, per-video split. Metrics: ADE, FDE (trajectory, mm), APE, PPE, JPE (pose, mm). JPE dominated by global position.

- Ablations: Table 1 (aux input), Table 2 (fusion topology), Table 3 (joint balancing factor %, smoothing), Table 4 (quantitative comparison). Rebalancing factor 5 selected. Smoothing improves trajectory and indirectly pose.

- Need to address gray-zone audit: overlapping sequences inflate scores, oracle best-of-many vs deterministic single future, static baseline re-centering at each timestep (cheating-ish because it uses ground truth root trajectory), JPE position-dominated insensitivity to articulation, trajectory smoothing trade-off (pose improves, trajectory degrades at high factor), degenerate static pose collapse, distal joint weighting.

- RETROCAUSAL_GENEALOGY: lineage from Social Transmotion, Transportmer, T2P, SimpliHumon, TRiPOD, EqMotion, frequency domain (DCT, MotionMixer, BeLFusion), WorldPose, 3DPW, Human3.6M, AMASS. Multi-week traps: evaluation protocol drift (unit stride overlap), oracle selection, static baseline lower bound, distribution shift between World Cup broadcast and 3DPW moving camera indoor/outdoor.

- RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. This is a bit abstract but relates to model behavior under distribution shift, degenerate solutions (static average pose = crisis habit regression), counter-trap = per-joint rebalancing + smoothing as adversarial corrections to the model's own prior, clock = forecasting horizon 2s, observation 1s, rollout error accumulation.

- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Biomechanical: root-relative pose offsets, distal joints high error, sprint abrupt change no cue, crossing legs rare gait. Weather: not in paper (broadcast footage, indoor/outdoor 3DPW). Physical: trajectory smoothing high-frequency oscillation, absolute positions vs displacements losing spatial context, sentinel value -2000 for padding.

- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions. Need to frame as reinforcement learning verifiable rewards? Or just counterfactual scenarios that would veto the model's applicability. I'll create 3 verifiable scenarios:
  1. Abrupt pace change (sprint initiation) at observation boundary with no cue in history -> model degrades gracefully but error spikes; veto if ADE > threshold on sprint-initiated frames. Prediction: qualitative consistency but quantitative drift.
  2. Overlapping-window evaluation restored (unit stride) -> reported metrics artificially inflated by ~X%; veto if protocol not non-overlapping. Prediction: ADE/FDE improve spuriously.
  3. Rare motion pattern (walking sideways, crossing legs) underrepresented in training -> graceful degradation but not failure; veto if JPE remains dominated by global position masking articulation failure.

Need to ensure >=1000 words. Let's plan:

THINK_TRACE: ~500+ words. Deep derivation: loss composition, gradient interplay, evaluation bias correction, metric dominance, failure modes. Gray-zone audit: static baseline re-centering uses GT root (oracle-like), best-of-many vs central sample, JPE insensitivity, trajectory smoothing trade-off.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Units: mm, frames, fps, Hz. Pages: since no explicit page markers, I will cite [Eq. n], [Table n], [Section n], and arXiv:2610.30519. I should explicitly state that the machine-converted source lacks embedded [PAGE N] tokens, so I cite equation/table/section identifiers verbatim from the extracted text. This avoids fabricating page numbers.

RETROCAUSAL_GENEALOGY: Historical lineage.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (static pose collapse), counter-trap (rebalancing, smoothing), clock (1s obs / 2s forecast, rollout horizon).

CROSS_LAYER_VETO_ADJUDICATION: Physical (frequency domain, sentinel padding), biomechanical (distal vs proximal, root-relative, sprint), weather (not applicable / broadcast vs moving camera).

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Word count check: I'll aim for ~1500-1800 words total to be safe.

No betting lines. No fake ratios. All equations formal.

Let's write carefully.

I need to include exact verbatim quotes where possible. I'll quote short phrases.

Structure:

<THINK_TRACE>
...
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I must not mention odds, spreads, etc.

Let's draft content.

THINK_TRACE (>=400 words):
- Start with problem: joint trajectory (2D global pitch) and 3D pose (root-relative offsets) forecasting for N agents, T frames, predict t+1..T.
- Causal setting, no future context.
- Input encoding: padded sentinel -2000 for missing agents, attention weights converge to zero.
- Socio-temporal encoder: coarse-to-fine, two stages, each 3 SABs (2 temporal SAB_T, 1 social SAB_S). Factorized attention. Permutation equivariance along agent dimension.
- Prediction heads: independent MLPs, trajectory T×N×2, pose T×N×3J.
- Loss: composite. L_traj MSE/L2 over pitch positions (mm). L_pose per-joint reweighting w over distal joints (elbows, wrists, ankles, feet). L_smooth frequency-domain FFT power spectrum weighted by f_k^2.
- Hyperparams: λ_pose=λ_smooth=10, d=128, AdamW lr=1e-3, batch 32, 100 epochs, A40, grad clip 5.
- Evaluation: non-overlapping 3s windows (1s context, 2s forecast). WorldPose: 7 games 2022 World Cup, ~50 min, Morocco-Portugal val, Netherlands-Argentina test, other 6 train. Match-level split. 3DPW: 30fps, 90 frames, per-video split. Metrics mm: ADE, FDE, APE, PPE, JPE.
- Gray zones:
  1. Original T2P/SimpliHumon unit stride overlap => near-identical sequences counted many times, longer videos disproportionate weight. Re-evaluated under non-overlap.
  2. Oracle best-of-many replaced by deterministic single future or central sample (closest to average of 6 sampled futures).
  3. Static baseline re-centers root at each timestep to GT root trajectory: uses ground-truth positional information, lower bound not pure no-prediction.
  4. JPE dominated by global position term (trajectory error) so insensitive to local articulation; can mask pose failure.
  5. Rebalancing factor trades off trajectory vs pose: at 10% trajectory ADE 848.5 vs 670.8 at 0%; pose APE 98.7 vs 112.6. Selected 5% as knee.
  6. Degenerate static average pose collapse prevented by distal up-weighting.
  7. Absolute position prediction loses spatial context if converted to displacements; frequency smoothing captures multi-frame oscillations unlike second-order time-domain penalty.
- Breakdown regimes: high rebalancing factor → trajectory degradation; rare gait (crossing legs) → graceful degradation but error; sprint initiation at boundary with no cue → consistent but less accurate.

This should be >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- State machine-converted source lacks [PAGE N] markers; cite Eq/Table/Section.
- LaTeX block for Eq 1-4.
- Units: positions in normalized? Paper says 2D positions in global pitch coordinates [26]; poses root-relative joint offsets; metrics in mm. FFT bins dimensionless normalized frequency f_k ∈ [0,1]. Loss terms units: L_traj mm^2? Actually L2 norm of position difference -> mm. L_pose: per-joint error is sum of absolute coordinate diffs (mm), then l2 over joints -> mm. L_smooth: f_k^2 dimensionless, |q̂|^2 -> mm^2? q̂ is Fourier coeff of trajectory (mm), so power mm^2. Weighted average.
- Assumptions: causal inference, fixed N agents with padding, root joint at origin, deterministic single future, non-overlapping windows, match-level split for WorldPose.
- Breakdown/singularity: F = floor(T_pred/2)+1; if T_pred small, F small; f_{F-1}=1 Nyquist; f_0=0 static component zero weight. Sentinel -2000 must not overlap valid normalized values. λ_smooth too high dominates trajectory gradient. Rebalancing factor >5 degrades trajectory.

RETROCAUSAL_GENEALOGY:
- Lineage: trajectory forecasting (Social-Transmotion [47], Transportmer [10], graph/attention [5,42,45,56]), pose forecasting (recurrent [7,16,28,54], feed-forward graph/transformer [23,37,38,48], diffusion [6,14,17,46], frequency DCT [19,41,44,53]), joint (TRiPOD [1], Social-Transmotion [47] trajectories only, Multi-Transmotion [20] single ego, EqMotion [55] separate scenarios), WorldPose [32] 2022 World Cup, 3DPW [52], baselines T2P [30], SimpliHumon [2].
- Multi-week traps: evaluation protocol drift over weeks as public implementations change; overlapping sequence inflation discovered post-hoc; oracle best-of-many not realizable; static baseline lower bound shifts with dataset staticity (3DPW near-static vs WorldPose high-intensity).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: model collapses to static average pose under uniform loss because low-motion proximal joints dominate. This is the "crisis habit" (safe, low-variance prediction).
- Counter-trap: per-joint loss rebalancing w up-weights distal dynamic joints; frequency-domain smoothing penalizes high-frequency zigzag; input-level fusion forces trajectory to inform pose and vice versa.
- Clock: 1s observed context, 2s forecast horizon; error accumulation over rollout; ADE-FDE gap measures end-of-horizon drift; T2P drift larger, ours stable.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: absolute 2D pitch positions; converting to displacements loses absolute spatial context needed by social attention; frequency smoothing operates on full forecast horizon not just adjacent frames; sentinel padding -2000.
- Biomechanical: root-relative pose isolates articulation from global position; distal joints (elbows, wrists, ankles, feet) higher displacement and error; proximal hips/torso stable; abrupt sprint at boundary with no cue; rare sideways walking/crossing legs underrepresented.
- Weather/environment: WorldPose broadcast outdoor daytime; 3DPW moving camera indoor/outdoor diverse; no explicit weather modeling; camera motion in 3DPW introduces exogenous variation not in WorldPose. Veto if applying WorldPose-trained model to night/rain broadcast without recalibration because pose annotations from clear daylight may not transfer.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
1. Scenario: Restore unit-stride overlapping windows on WorldPose test set. Verifiable metric: ADE/FDE will drop spuriously due to duplicate near-identical sequences and train/test source leakage if match-level split ignored. Prediction: apparent ADE improvement of >10% relative to non-overlap, but no real generalization gain; veto any claim of SOTA under unit stride without non-overlap replication.
2. Scenario: Replace deterministic single future with oracle best-of-many (select closest to ground truth among N samples). Verifiable: requires future ground truth at inference, unrealizable. Prediction: reported metrics improve artificially; ADE/FDE gap narrows falsely; veto deployment claims based on oracle selection.
3. Scenario: Evaluate on underrepresented rare motions (sideways walking with crossing legs, abrupt sprint initiation) isolated from WorldPose test. Verifiable: JPE remains low due to global position dominance while APE/PPE reveal articulation failure. Prediction: model degrades gracefully but distal joint error spikes; veto if JPE alone is used to claim pose accuracy on rare classes.

Need to ensure total words >1000. Let's write.

Be careful with quotes: verbatim quotes from source. I'll include a few short ones.

I will not invent page numbers. I'll say "The provided machine-converted source contains no embedded [PAGE N] tokens; citations below use equation/table/section identifiers verbatim from the extracted text (arXiv:2610.30519)."

Now write final answer. Ensure XML sections exact. No markdown outside? The user wants exact XML sections. I'll output only those sections.

Let's compose with attention to word count. I'll count roughly as I write.

THINK_TRACE target ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS ~400 words.
RETROCAUSAL_GENEALOGY ~250 words.
RECURSIVE_THEORY_OF_MIND ~250 words.
CROSS_LAYER_VETO_ADJUDICATION ~250 words.
RLVR_COUNTERFACTUAL_VETOES ~250 words.
Total ~1900. Good.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper defines a causal multi-agent forecasting problem: given N agents observed over T frames, each with 2D global pitch trajectory x_t ∈ R^{N×2} and root-relative 3D pose p_t ∈ R^{N×J×3}, predict frames t+1 to T using only past observations. The root joint is fixed at the origin, so pose encodes articulation independent of global translation, while trajectory carries positional information. This construction makes the modalities complementary by design. The architecture pads missing agent slots with a fixed out-of-range sentinel value (e.g., −2000) so attention weights on padded slots converge to zero, permitting variable N without conditional masking. The socio-temporal encoder stacks two coarse-to-fine stages; each stage contains three Set Attention Blocks arranged as two temporal blocks SAB_T (per-agent time attention) followed by one social block SAB_S (cross-agent attention within a frame). Temporal positional encoding is added before the first stage; no positional encoding is applied along the agent dimension, enforcing permutation equivariance across team compositions.

The composite loss is L_total = L_traj + λ_pose L_pose + λ_smooth L_smooth, with λ_pose = λ_smooth = 10. L_traj is the mean Euclidean pitch-position error over all agents and forecast frames. L_pose first computes per-joint L1 error ε_{n,t,j} = |Δx| + |Δy| + |Δz|, then applies a learned weight vector w over joints and takes the L2 norm across J joints. The weighting explicitly targets distal joints (elbows, wrists, ankles, feet) that exhibit higher error under uniform weighting, preventing collapse to a static average pose. L_smooth takes the real FFT of each agent’s predicted trajectory over the forecast horizon, forms the power spectrum, and weights bin k by squared normalized frequency f_k^2 = (k/(F−1))^2, F = ⌊T_pred/2⌋ + 1, so DC receives zero weight and Nyquist receives maximum weight.

Gray-zone audit: (1) Prior joint methods T2P and SimpliHumon used a unit stride of one frame, causing near-identical overlapping sequences to be scored repeatedly and longer videos to dominate averages. The authors re-run them under a non-overlapping protocol; reported comparisons are therefore not apples-to-apples unless this correction is replicated. (2) Generative baselines originally used best-of-many oracle selection requiring ground-truth access at inference; the paper replaces this with a deterministic single future or a central sample (closest to the mean of six sampled futures), which is deployable but less flattering. (3) The static baseline re-centers the last observed pose at every timestep to match the ground-truth root trajectory, injecting ground-truth positional information; it is a lower bound, not a pure no-prediction null. (4) JPE is dominated by the global-position term and is insensitive to local articulation, so it can mask pose failure while appearing competitive. (5) Joint rebalancing exhibits a knee: at factor 5%, WorldPose pose APE improves from 112.6 to 101.3 mm while trajectory ADE degrades from 670.8 to 683.3 mm; at 10% trajectory ADE jumps to 848.5 mm. The authors select 5%. (6) Failure modes include abrupt sprint initiation at the observation boundary with no preceding cue (forecast remains plausible but less accurate) and rare gait patterns such as sideways walking with crossing legs (graceful degradation). The model does not model weather explicitly; WorldPose is daylight broadcast footage while 3DPW uses a moving camera across indoor/outdoor scenes, so cross-environment transfer is unverified.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and breakdown regimes. The provided machine-converted source contains no embedded [PAGE N] tokens; all citations below use equation, table, and section identifiers verbatim from the extracted text (arXiv:2610.30519).

Problem statement (Section 3.1): for agents n=1..N and frames t=1..T, inputs are x_t ∈ R^{N×2} (2D global pitch coordinates) and p_t ∈ R^{N×J×3} (root-relative joint offsets, root at origin). Predict ŷ for t+1..T causally.

Multi-modal input encoding (Section 3.2): trajectory and pose are projected independently into shared latent dimension d, concatenated into t×N×2d, compressed by MLP back to d. Missing agents padded with sentinel −2000; attention on padded slots → 0.

Socio-temporal encoder (Section 3.3): two stages (coarse, fine), each with three Set Attention Blocks: two temporal SAB_T then one social SAB_S. Temporal positional encoding added; none along agent dimension → permutation equivariance.

Prediction heads (Section 3.4): trajectory head output T×N×2; pose head output T×N×3J; only forecast frames retained at inference.

Loss (Eq. 1, Section 3.5):
\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{traj}} + \lambda_{\text{pose}} \mathcal{L}_{\text{pose}} + \lambda_{\text{smooth}} \mathcal{L}_{\text{smooth}}, \quad \lambda_{\text{pose}} = \lambda_{\text{smooth}} = 10.

Trajectory loss (Eq. 2), units mm:
\mathcal{L}_{\text{traj}} = \frac{1}{NT} \sum_{n=1}^N \sum_{t=1}^T \left\| \hat{\boldsymbol{x}}_{n,t} - \boldsymbol{x}_{n,t} \right\|_2.

Pose loss (Eq. 3), units mm: per-joint error \boldsymbol{\epsilon}_{n,t} \in R^J with \epsilon_{n,t,j} = |\Delta x| + |\Delta y| + |\Delta z|;
\mathcal{L}_{\text{pose}} = \frac{1}{NT} \sum_{n=1}^N \sum_{t=1}^T \left\| \boldsymbol{w} \odot \boldsymbol{\epsilon}_{n,t} \right\|_2.

Smoothing loss (Eq. 4): for each agent, real FFT over T_pred forecast frames per coordinate, F = ⌊T_pred/2⌋ + 1 bins, normalized frequency f_k = k/(F−1) ∈ [0,1], C=2 coordinates:
\mathcal{L}_{\text{smooth}} = \frac{1}{NFC} \sum_{n=1}^{N} \sum_{k=0}^{F-1} \sum_{c=1}^{C} f_k^2 \left| \hat{q}_{n,k,c} \right|^2.
Static bin k=0 has weight 0; Nyquist bin k=F−1 has weight 1. Units: q̂ in mm, so power in mm², frequency weighting dimensionless.

Training: AdamW, lr 10⁻³, ε=10⁻⁴, batch 32, d=128, grad-norm clip 5, 100 epochs, single NVIDIA A40. Evaluation: non-overlapping 3-second windows, 1 s observed context, 2 s forecast; WorldPose match-level split (Morocco-Portugal val, Netherlands-Argentina test, other six 2022 World Cup games train); 3DPW 30 fps → 90 frames, per-video split. Metrics in mm: ADE, FDE (trajectory); APE, PPE, JPE (pose).

Breakdown/singularity regimes: (i) if T_pred is small, F is small and frequency resolution collapses; (ii) λ_smooth too large makes trajectory gradient dominated by spectral penalty, degrading ADE/FDE (observed at rebalancing factor 10% trajectory ADE 848.5 vs 670.8 at 0%); (iii) sentinel −2000 must not overlap valid normalized trajectory/pose values, or absent agents corrupt attention; (iv) JPE becomes position-dominated and insensitive to distal articulation when trajectory error is large; (v) unit-stride overlapping evaluation reintroduces duplicate-sequence bias and source leakage across splits if match-level separation is ignored.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. Trajectory forecasting descends from graph- and attention-based multi-agent work [4, 5, 15, 24, 31, 35, 42, 45, 56], including sports-specific systems for American football [12, 50], basketball [11, 12, 18, 50], and soccer [10, 11, 25]; none forecast body pose alongside trajectory. Pose forecasting evolved from recurrent architectures [7, 16, 28, 54] to feed-forward graph/transformer models avoiding autoregressive accumulation [23, 37, 38, 48], to diffusion-based multi-future generators [6, 14, 17, 46], with a parallel frequency-domain line using the discrete cosine transform for low-frequency smooth motion [19, 41, 44, 53]. Early joint architectures used multi-branch [1, 8, 57] or sequential trajectory-then-conditioned-pose designs [30, 40]. TRiPOD [1] models human-human and human-object interaction with graph attention but treats pose and trajectory as separate scenarios rather than a joint output for the same agents; EqMotion [55] similarly reasons over joints and pedestrians separately. Social-Transmotion [47] fuses pose and trajectory tokens but forecasts trajectories only; Multi-Transmotion [20] emits 3D pose for a single ego agent while treating others as social context. The paper’s direct baselines are T2P [30] and SimpliHumon [2], trained on the target benchmarks and supporting horizons beyond one second.

Multi-week traps embedded in this lineage: (1) protocol drift—public implementations of T2P and SimpliHumon used unit-stride sequence construction, inflating scores via near-duplicate windows and longer-video overweighting; re-evaluation under non-overlapping windows is required for any longitudinal claim. (2) Oracle contamination—best-of-many selection requires ground truth at inference and is not realizable; switching to deterministic or central-sample evaluation changes reported rankings. (3) dataset-dependent staticity—the static baseline performs well on 3DPW (low-intensity, near-static activities) but poorly on WorldPose (high-intensity match play), so a “lower bound” is not stable across weeks or domains. (4) metric masking—JPE’s position dominance can hide articulation regression across model iterations if only aggregate scores are tracked.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock. The model’s crisis habit regression is collapse toward a static average pose: under uniform loss weighting, numerous low-error proximal joints (hips, torso, shoulders) dominate the objective, so the optimizer minimizes average error by predicting near-stationary articulation and neglecting high-variance distal joints. This is the default safe habit of a jointly trained trajectory-pose network when left unregularized.

The counter-trap is twofold. First, per-joint loss rebalancing applies vector w to up-weight elbows, wrists, ankles, and feet—the joints empirically measured to have the highest error under uniform weighting—forcing the network to allocate gradient to fine-grained articulation instead of settling into the static mean. Second, the frequency-domain smoothing term penalizes high-frequency trajectory zigzag across the full forecast horizon, not just adjacent frames, which steadies the positional context fed back into pose prediction through the shared encoder. Both counter-traps attack the model’s own prior: the rebalancing resists pose collapse, the smoothing resists trajectory jitter, and input-level fusion makes each modality inform the other rather than allowing one branch to dominate.

The clock is the forecasting contract: 1 second of observed context, 2 seconds of forecast horizon, evaluated with ADE over all forecast frames and FDE at the final frame to capture end-of-horizon drift. The paper notes its trajectories remain comparatively stable with a smaller ADE–FDE gap than T2P, whose paths drift further from ground truth with horizon. Recursive theory of mind here means the model must anticipate interacting players who are simultaneously reacting to it; the social block SAB_S attends across all agents within a frame, but there is no explicit recursive modeling of opponent counter-adaptation beyond the shared latent representation. Under abrupt changes—such as a player beginning to sprint at the observation boundary with no cue in history—the model’s internal simulation remains visually consistent but loses quantitative fidelity, indicating the clock’s effective horizon is shorter than 2 s under zero-cue regime shifts.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the model predicts absolute 2D pitch positions at each frame independently; an explored displacement-only alternative degraded performance because it discarded absolute spatial context required by the social attention block. The frequency-domain smoothing term was preferred over a second-order time-domain velocity penalty because the latter only sees adjacent frame triplets and misses multi-frame oscillations, which are the dominant artifact. Padding with sentinel −2000 is valid only if that value cannot overlap valid normalized trajectory or pose values. Veto condition: if a downstream system converts outputs to relative displacements without retaining absolute pitch origin, social interaction modeling breaks down.

Biomechanical layer: poses are root-relative, isolating articulation from global translation; distal joints have substantially larger root-relative displacement and higher error than proximal joints, hence the targeted reweighting. Qualitative inspection shows reasonable predictions under abrupt sprint initiation and graceful degradation on rare sideways walking with crossing legs (likely underrepresented in training). However, because JPE aggregates global position and articulation and is position-dominated, it cannot serve as a stand-alone biomechanical veto gate. Veto condition: any claim of pose accuracy on rare or dynamic joint classes must be supported by APE/PPE or distal-joint error, not JPE alone.

Weather/environment layer: WorldPose is derived from 2022 FIFA World Cup broadcast footage under stadium lighting; 3DPW is captured with a moving camera across diverse indoor and outdoor scenarios. The paper does not model illumination, precipitation, or camera motion explicitly. Veto condition: deploying a WorldPose-trained model to night matches, heavy precipitation, or substantially different camera rigs without recalibration or domain adaptation is unsupported; cross-dataset performance on 3DPW (best on every metric despite low social density) demonstrates architectural robustness but not weather invariance.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions:

Scenario 1 — Restore unit-stride overlapping evaluation on WorldPose test set. Verifiable condition: reconstruct T2P/SimpliHumon sequence extraction with stride 1 frame and ignore match-level source separation. Prediction: reported ADE/FDE will drop spuriously relative to the non-overlapping protocol because near-identical sequences are scored repeatedly and longer matches overweight the average; apparent SOTA claims under this protocol must be vetoed unless replicated under non-overlapping, match-split evaluation.

Scenario 2 — Oracle best-of-many selection at inference. Verifiable condition: allow generative baselines to sample multiple futures and select the candidate closest to ground truth (requires future access). Prediction: trajectory and pose error metrics improve artificially and the ADE–FDE gap narrows falsely; any deployment or production claim based on oracle-selected outputs is vetoed because it is not realizable without ground truth.

Scenario 3 — Isolate underrepresented rare motions (sideways walking with crossing legs; abrupt sprint initiation at observation boundary) from WorldPose test. Verifiable condition: report JPE together with distal-joint APE/PPE on this subset only. Prediction: JPE will remain deceptively low due to global-position dominance while distal articulation error spikes; the model degrades gracefully but does not recover rare joint configurations. Veto condition: if a system uses JPE alone to certify pose accuracy on rare-motion subsets, the certification is invalid.
</RLVR_COUNTERFACTUAL_VETOES>