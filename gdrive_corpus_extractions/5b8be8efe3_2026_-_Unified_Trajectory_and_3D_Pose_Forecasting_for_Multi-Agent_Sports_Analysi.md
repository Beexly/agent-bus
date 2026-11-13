---
source: "2026 - Unified Trajectory and 3D Pose Forecasting for Multi-Agent Sports Analysis - Peral et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6037
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about "Unified Trajectory and 3D Pose Forecasting for Multi-Agent Sports Analysis" by Peral et al. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a paper about trajectory and pose forecasting for sports analysis. But the task seems to be framed as some kind of "GSE + GSI Frontier Reasoning Foundry" with specific XML sections that sound like they're meant for sports betting or game theory analysis (betting lines, crisis habit regression, etc.). However, invariant 1 says ZERO BETTING LINES. So I must not mention spreads, totals, moneylines, or odds.

The sections required:
- THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words).
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.

Since this is a sports analysis paper (soccer trajectory and pose forecasting), I need to interpret these sections in a way that makes sense for the paper's content while adhering to the constraints. The "RETROCAUSAL_GENEALOGY" could refer to the lineage of methods (trajectory forecasting, pose forecasting, joint forecasting). "RECURSIVE_THEORY_OF_MIND" could refer to how players model each other's intentions (social dynamics) in the socio-temporal encoder. "CROSS_LAYER_VETO_ADJUDICATION" could refer to biomechanical/physical constraints vetoing implausible predictions. "RLVR_COUNTERFACTUAL_VETOES" could refer to counterfactual scenarios where the model would fail.

Important: No betting lines. No fake ratios. Formal LaTeX equations from the paper. SI units. Page citations. Verbatim quotes where appropriate.

Let me structure this carefully.

Word count: >= 1,000 words across sections. THINK_TRACE alone needs >= 400 words.

Let me draft each section.

THINK_TRACE (>=400 words):
- Deep multi-hop derivation: Start from problem statement on Page 3/4 (3.1 Problem Statement). Given N agents over T frames, predict t+1 to T from first t observations.
- Input streams: xt ∈ RN×2 (2D pitch coordinates), pt ∈ RN×J×3 (3D root-relative poses). Page 4.
- Early fusion: trajectory and pose projected independently into shared latent dim d, concatenated t×N×2d, MLP compresses to d. Page 4.
- Socio-temporal encoder: two stages (coarse, fine), each with 3 SABs: two temporal SABT, one social SABS. Page 4. Permutation equivariance along agent dimension.
- Loss: L_total = L_traj + λ_pose L_pose + λ_smooth L_smooth. λ=10. Page 5.
- L_traj = 1/(NT) Σ ||x̂ - x||_2. Page 5.
- L_pose: per-joint error ϵ, weighted by w, l2 norm over joints. Page 5.
- L_smooth: FFT of predicted trajectory over T_pred frames, F = floor(T_pred/2)+1 bins, power spectrum weighted by f_k^2, f_k = k/(F-1). Page 5.
- Gray-zone audit: overlapping sequences bias (stride 1), non-overlapping protocol adopted. Match-level split on WorldPose (Morocco-Portugal val, Netherlands-Argentina test, other 6 train). Page 6. Oracle-free deterministic single-future vs best-of-many. Page 8. JPE dominated by global position term, insensitive to local articulation. Page 6/7. Singularity/breakdown: degenerate static average pose solution under uniform weighting; addressed by per-joint rebalancing. Frequency-domain smoothing suppresses high-frequency oscillations but if λ_smooth too high, trajectory accuracy degrades (Table 3: at 10% rebalancing ADE jumps to 848.5). Page 7.

SOURCE_OPERATORS_AND_EQUATIONS:
- Reproduce equations (1)-(4) from Page 5 with LaTeX.
- Units: mm for pose/trajectory errors (Page 6). Frames at 30 fps for 3DPW. 3-second windows: 1s observed + 2s forecast. Page 6.
- Page citations: [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8].
- Breakdown regimes: when rebalancing factor = 10%, trajectory ADE degrades to 848.5 from 670.8 (Table 3, Page 7). When smoothing disabled, jitter appears (Figure 2, Page 8). Unit-stride bias causes double counting and longer video dominance (Page 6).

RETROCAUSAL_GENEALOGY:
- Historical lineage: separate trajectory forecasting [4,9-13,15,18,24,31,35,50] vs pose forecasting [6,7,14,16,17,23,28,37,38,46,48,54] on Page 3.
- Frequency-domain pose forecasting via DCT [19,41,44,53] on Page 3.
- Multi-person pose methods root-relative, no global trajectory [49,51,53]. EqMotion [55] treats tasks separately. Page 3.
- Joint forecasting: Social-Transmotion [47] fuses but forecasts only trajectories. Multi-Transmotion [20] single ego agent. TRiPOD [1] short horizon 900ms, no official implementation. Page 3.
- T2P [30] and SimpliHumon [2] are baselines, trained on target benchmarks, horizons beyond 1s. Page 3.
- Multi-week traps: evaluation bias from overlapping sequences (stride 1) used by T2P and SimpliHumon; non-overlapping protocol corrects this. Match-level split prevents incidental cue leakage across splits. Page 6. Oracle selection (best-of-many) requires ground truth access at inference, not realizable; deterministic central-sample selection used instead. Page 8.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under uniform loss weighting, model collapses to static average pose (degenerate solution), especially because proximal joints dominate. Page 5.
- Counter-trap: Per-joint rebalancing up-weights distal joints (elbows, wrists, ankles, feet) selected by empirical per-joint error measurement. Page 5.
- Clock: The socio-temporal encoder models inter-agent interactions via SABS attending across agents within a single frame; this is a form of recursive theory of mind where each agent's token attends to others' tokens to infer collective behavior. Page 4. However, the model is strictly causal, no future context at inference. Page 4.
- Multi-agent social dynamics: 20+ players reacting to teammates/opponents/state of play. Page 1/2.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical veto: Poses are root-relative joint offsets, isolating articulated motion from global position. Trajectory captures positional info. Complementary by construction. Page 4.
- Frequency-domain smoothing vetoes high-frequency zigzagging in absolute pitch-coordinate predictions. Root cause: model predicts absolute positions independently per frame with no temporal consistency constraint. Page 10 (Supplementary B).
- Alternatives vetoed: predicting displacements only loses absolute spatial context needed by social attention. Mixed absolute/displacement accumulates error over chain and fixes boundary. Local smoothness penalty (second-order differences) misses oscillations spanning >2 frames. Page 10.
- Weather: Not explicitly in paper, but broadcast footage from 2022 FIFA World Cup (various venues/matches). No weather modeling mentioned. Veto: model assumes clear visibility/tracking; occlusions handled by sentinel padding (-2000). Page 4.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR (Reinforcement Learning Verifiable Rewards? Or just counterfactual veto scenarios) scenarios + predictions.
Since this is a paper analysis, I'll frame them as counterfactual interventions that would veto the model's predictions or training.
1. Scenario: Replace non-overlapping protocol with unit-stride overlapping sequences on WorldPose. Prediction: Reported ADE/FDE/JPE/APE/PPE would be artificially optimistic due to near-identical sequences counted multiple times and longer videos dominating; generalization to unseen matches (match-level split) would be overestimated. Verifiable by re-running Table 4 with stride=1.
2. Scenario: Remove per-joint rebalancing (set w = uniform) and disable smoothing. Prediction: Model collapses to near-static mean pose; pose APE/PPE degrade, trajectory exhibits high-frequency jitter (zigzagging) as seen in Figure 2 left; JPE increases due to trajectory error dominance. Verifiable via Table 3 top rows and ablation.
3. Scenario: Switch fusion topology from early concatenation to sequential (trajectory first, condition pose on it). Prediction: Trajectory ADE jumps from 670.8 to 1074.6, FDE from 1642.0 to 2186.7, JPE from 723.5 to 1131.9 because trajectory forecasting without pose modality is unfavorable (Table 2, Page 7). Verifiable via Table 2.

Need to ensure no betting lines. No mention of odds, spreads, etc.

Word count check: THINK_TRACE needs >=400 words. Total >=1000 words.

Let me write carefully with exact page citations and verbatim quotes where useful.

I should cite page markers like [PAGE 4], [PAGE 5], etc.

Let's compose.

THINK_TRACE: I'll write a detailed derivation.
- Start with problem formulation.
- Multi-hop: input encoding -> fusion -> socio-temporal encoder -> prediction heads -> loss.
- Gray-zone: evaluation bias, oracle-free, static baseline behavior on 3DPW vs WorldPose.

Let's draft.

---

<THINK_TRACE>
The paper formulates joint trajectory and 3D pose forecasting as a sequence-to-sequence problem over N agents observed for T frames. Given the first t < T observations, the model must predict frames t+1 to T [PAGE 4, Section 3.1]. Two input streams are consumed: player trajectories x_t ∈ R^{N×2} as 2D positions in global pitch coordinates, and 3D body poses p_t ∈ R^{N×J×3} as joint-wise offsets relative to a root joint fixed at the origin [PAGE 4]. This coordinate split is deliberate: pose isolates articulated motion from global position, while trajectory separately captures positional information, making the modalities complementary by construction.

The first multi-hop transformation is input-level fusion. Trajectory and pose tokens are projected independently into a shared latent space of dimension d, yielding two t × N × d representations. These are concatenated into a t × N × 2d tensor and compressed by an MLP back to d dimensions [PAGE 4, Section 3.2]. Early fusion enables cross-modal interactions from the first encoder layers. The fused stream enters a socio-temporal encoder with two sequentially stacked stages (coarse and fine), each containing three Set Attention Blocks: two temporal blocks SAB_T that attend independently over time for a given agent, followed by one social block SAB_S that attends across all agents within a single frame [PAGE 4, Section 3.3]. Temporal positional encoding is added before the first stage; no positional encoding is applied along the agent dimension, enforcing permutation equivariance with respect to player ordering [PAGE 4]. Missing agent slots are padded with a fixed out-of-range sentinel value (e.g., −2000) so attention weights on padded slots converge close to zero, allowing the model to process variable agent counts without conditional masking [PAGE 4].

Two task-specific MLPs serve as prediction heads: a trajectory head mapping to T × N × 2 and a pose head mapping to T × N × 3J [PAGE 4, Section 3.4]. Only forecast frames t+1 to T are retained. The composite loss [PAGE 5, Equation 1] is L_total = L_traj + λ_pose L_pose + λ_smooth L_smooth, with λ_pose = λ_smooth = 10. L_traj is the mean Euclidean distance between predicted and ground-truth pitch positions across all agents and frames [PAGE 5, Equation 2]. L_pose computes per-joint absolute error ϵ_{n,t,j}, aggregates with an l2 norm over joints, and applies a per-joint weight vector w that up-weights high-error distal joints (elbows, wrists, ankles, feet) to prevent domination by low-error proximal joints [PAGE 5, Equation 3]. L_smooth penalizes high-frequency content in the predicted trajectory in the frequency domain: for each agent, an rFFT over T_pred forecast frames yields F = ⌊T_pred/2⌋ + 1 bins, and the power spectrum is weighted by squared normalized frequency f_k^2 where f_k = k/(F−1) ∈ [0,1] [PAGE 5, Equation 4].

Gray-zone audit: The paper identifies a critical evaluation bias in prior joint methods T2P [30] and SimpliHumon [2], which use a stride of one frame when cutting videos into sequences [PAGE 6]. This causes near-identical overlapping windows to be scored repeatedly and lets longer recordings dominate the average [PAGE 6]. The authors instead use a non-overlapping stride and, on WorldPose, enforce a match-level split so no evaluation sequence shares a video source with training [PAGE 6]. They also reject oracle best-of-many selection, reporting deterministic single-future and central-sample (average) selection instead [PAGE 8]. A further gray zone is JPE: because it is an absolute world-frame distance, it is numerically dominated by the global-position term and is insensitive to the local articulation that joint rebalancing targets [PAGE 7]. Breakdown regimes appear in Table 3 [PAGE 7]: as the joint rebalancing factor rises to 10%, trajectory ADE degrades from 670.8 to 848.5 mm, showing that excessive pose steering starves the trajectory term; conversely, without smoothing, predicted trajectories exhibit visible frame-to-frame jitter [PAGE 8, Figure 2]. The static baseline—holding the last observed pose fixed and re-centering at the ground-truth root—performs remarkably close to learned methods on 3DPW because that dataset contains many near-static, low-intensity activities, whereas on WorldPose match play it is a poor predictor [PAGE 8].
</THINK_TRACE>

That's probably around 500 words. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Need formal LaTeX, units, citations, breakdown.

<SOURCE_OPERATORS_AND_EQUATIONS>
Problem statement [PAGE 4]:
- Agents N ∈ ℕ, frames T, observation horizon t < T.
- Trajectory input: x_t ∈ ℝ^{N×2}, global pitch coordinates in meters (implicit SI length unit; errors reported in mm [PAGE 6]).
- Pose input: p_t ∈ ℝ^{N×J×3}, root-relative 3D joint coordinates.

Early fusion [PAGE 4]:
- Project x and p independently into shared latent dimension d.
- Concatenate: [x; p] → ℝ^{t×N×2d}.
- MLP compresses to ℝ^{t×N×d}.

Socio-temporal encoder [PAGE 4]:
- Two stages (coarse, fine), each with 3 SABs: SAB_T, SAB_T, SAB_S.
- SAB_T attends over time dimension per agent; SAB_S attends across agents per frame.
- Permutation equivariance along agent dimension.

Prediction heads [PAGE 4]:
- Trajectory head: ℝ^{T×N×2}.
- Pose head: ℝ^{T×N×3J}.

Loss [PAGE 5, Eq. 1]:
\mathcal{L}_{total} = \mathcal{L}_{traj} + \lambda_{pose} \mathcal{L}_{pose} + \lambda_{smooth} \mathcal{L}_{smooth}, \quad \lambda_{pose} = \lambda_{smooth} = 10.

Trajectory loss [PAGE 5, Eq. 2]:
\mathcal{L}_{traj} = \frac{1}{NT} \sum_{n=1}^{N} \sum_{t=1}^{T} \| \hat{\boldsymbol{x}}_{n,t} - \boldsymbol{x}_{n,t} \|_2.
Unit: mm (reported metrics in mm [PAGE 6]).

Pose loss [PAGE 5, Eq. 3]:
\boldsymbol{\epsilon}_{n,t} = (\epsilon_{n,t,1}, \dots, \epsilon_{n,t,J}) \in \mathbb{R}^{J}, \quad \epsilon_{n,t,j} = |\hat{p}x - p x| + |\hat{p}y - p y| + |\hat{p}z - p z|,
\mathcal{L}_{pose} = \frac{1}{NT} \sum_{n=1}^{N} \sum_{t=1}^{T} \| \boldsymbol{w} \odot \boldsymbol{\epsilon}_{n,t} \|_2.
Target joints: elbows, wrists, ankles, feet (distal, high error under uniform weighting).

Smoothing loss [PAGE 5, Eq. 4]:
\mathcal{L}_{smooth} = \frac{1}{N F C} \sum_{n=1}^{N} \sum_{k=0}^{F-1} \sum_{c=1}^{C} f_k^2 | \hat{q}_{n,k,c} |^2,
where C = 2 spatial coordinates, F = ⌊T_pred/2⌋ + 1, f_k = k/(F−1) ∈ [0,1], Nyquist bin weight = 1, DC bin weight = 0.

Breakdown/singularity regimes [PAGE 7, Table 3]:
- Joint rebalancing factor 0% → 10%: pose APE improves 112.6 → 98.7 mm, but trajectory ADE degrades 670.8 → 848.5 mm; JPE minimized at 5% (676.3 → wait, check table). Actually Table 3 top rows: 0% ADE 670.8, 2.5% 676.3, 5% 683.3, 7.5% 714.6, 10% 848.5. Pose APE: 112.6 → 105.9 → 101.3 → 99.8 → 98.7. JPE: 723.5 → 720.2 → 719.8 → 745.6 → 874.7. So JPE minimized at 5% (719.8).
- Bottom rows with smoothing (5% rebalancing): ADE 623.0, FDE 1549.1, JPE 647.3, APE 95.2, PPE 77.7.
- Without smoothing at 5%: ADE 683.3, FDE 1667.2, JPE 719.8, APE 101.3, PPE 79.1. Smoothing improves trajectory and pose.

Units for metrics [PAGE 6]: all in mm. ADE, FDE for trajectories; APE, PPE for pose; JPE for joint task. 3DPW at 30 fps, 90 frames = 3 seconds, 1s observed + 2s forecast [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

RETROCAUSAL_GENEALOGY:
- Historical lineage of separate works: trajectory forecasting [4, 9–13, 15, 18, 24, 31, 35, 50] vs pose forecasting [6, 7, 14, 16, 17, 23, 28, 37, 38, 46, 48, 54] [PAGE 3].
- Frequency-domain pose via DCT [19, 41, 44, 53] [PAGE 3].
- Multi-person pose methods remain root-relative and do not output global trajectory [49, 51, 53] [PAGE 3]. EqMotion [55] evaluates tasks separately rather than jointly [PAGE 3].
- Early joint work: Social-Transmotion [47] fuses pose/trajectory tokens but forecasts only trajectories [PAGE 3]. Multi-Transmotion [20] single ego agent, others as social context, disjoint benchmarks [PAGE 3]. TRiPOD [1] human-human/object graph attention, 900ms horizon, no official implementation [PAGE 3].
- Direct baselines: T2P [30] and SimpliHumon [2], trained on target benchmarks, horizons beyond 1s [PAGE 3].
- Multi-week traps (evaluation protocol traps): Unit-stride sequence construction by T2P/SimpliHumon causes overlapping near-identical windows, double counting, and longer-video dominance [PAGE 6]. Corrected by non-overlapping protocol and match-level split on WorldPose (Morocco-Portugal val, Netherlands-Argentina test, other 6 games train) [PAGE 6]. Oracle-free deterministic evaluation replaces best-of-many selection requiring ground truth at inference [PAGE 8]. Static baseline behavior differs across datasets: near-static on 3DPW, poor on WorldPose [PAGE 8].
</RETROCAUSAL_GENEALOGY>

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under uniform loss weighting, low-motion proximal joints dominate the average error, permitting a degenerate static average-pose solution [PAGE 5]. The model could collapse toward near-motionless mean pose, leaving dynamic distal joints poorly predicted [PAGE 5, Supplementary A].
- Counter-trap: Per-joint rebalancing up-weights distal joints (elbows, wrists, ankles, feet) selected by directly measured per-joint error under uniform weighting [PAGE 5]. This steers optimization away from static collapse and toward fine-grained articulation [PAGE 5].
- Clock / recursive theory of mind: The socio-temporal encoder's social block SAB_S attends across all agents within a single frame, capturing inter-player interactions and collective team behavior [PAGE 4]. This implements a form of recursive modeling where each player's fused trajectory-pose token conditions on others' tokens simultaneously, reflecting soccer's twenty-plus players continuously reacting to teammates, opponents, and state of play [PAGE 1–2]. The process is strictly causal: only past observations are used, no future context at inference [PAGE 4].
- The encoder factorizes time and agents: temporal blocks aggregate individual motion history; social blocks resolve inter-agent dependencies [PAGE 4]. This factorized design scales attention to large numbers of simultaneously interacting agents [PAGE 4].
</RECURSIVE_THEORY_OF_MIND>

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical veto: Pose represented as root-relative joint offsets isolates articulation from global position; trajectory stream separately captures global pitch position [PAGE 4]. This complementarity is structural, preventing the model from conflating limb motion with translation.
- Frequency-domain veto: The smoothing term penalizes high-frequency energy in absolute pitch-coordinate trajectories, vetoing unrealistic zigzagging between consecutive timesteps [PAGE 5]. Root cause of jitter: model predicts absolute positions independently per frame with no explicit temporal consistency constraint [PAGE 10, Supplementary B].
- Vetoed alternatives (Supplementary B [PAGE 10]):
  1. Predicting frame-to-frame displacements only: loses absolute spatial context needed by social attention to model inter-player interactions; significant degradation.
  2. Absolute observed + displacement forecast: reduces initial jitter but errors accumulate over displacement chain, increasing ADE/FDE; fixes observation/forecast boundary, removing horizon flexibility.
  3. Local time-domain smoothness (second-order differences): operates only on adjacent frame triplets, misses oscillations spanning more than two frames, which are dominant in practice.
- Weather/occlusion: No explicit weather modeling; WorldPose uses broadcast footage from 2022 FIFA World Cup across multiple matches/venues [PAGE 6]. Occlusions and incomplete tracking handled by sentinel padding (−2000) so attention weights on absent agents converge to zero [PAGE 4]. The model assumes valid normalized trajectory/pose values remain within range; sentinel cannot overlap with valid data [PAGE 4].
</CROSS_LAYER_VETO_ADJUDICATION>

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable counterfactual veto scenarios + predictions.

1. Scenario: Reinstate unit-stride (stride = 1) overlapping sequence construction on WorldPose and 3DPW for T2P, SimpliHumon, and Ours, while keeping all other settings identical.
   Veto condition: Overlapping windows cause near-identical sequences to be scored repeatedly and longer recordings to dominate [PAGE 6].
   Prediction: Reported ADE/FDE/JPE/APE/PPE would be artificially optimistic relative to the non-overlapping protocol; generalization to unseen matches would be overstated because train/val/test sequences could share video sources under the original protocol [PAGE 6]. Verifiable by reproducing Table 4 with stride = 1 and match-level split disabled; expect inflated metrics and reduced gap between learned models and static baseline on WorldPose.

2. Scenario: Remove per-joint rebalancing (w = uniform) and disable trajectory smoothing (λ_smooth = 0), keeping early concatenation fusion.
   Veto condition: Uniform weighting lets proximal joints dominate loss, permitting degenerate static average-pose collapse; independent per-frame absolute position prediction yields high-frequency jitter [PAGE 5, PAGE 10].
   Prediction: Pose APE/PPE would deteriorate toward values near the static baseline (e.g., APE > 112.6 mm, PPE > 83.7 mm as in Table 3 top row 0%); trajectory ADE would show visible frame-to-frame oscillation (jitter) as in Figure 2 left [PAGE 8]; JPE would be dominated by trajectory error. Verifiable via Table 3 top rows and qualitative Figure 2.

3. Scenario: Replace early concatenation input-level fusion with sequential topology (forecast trajectory first, condition pose on it), holding backbone, losses, protocol, and training recipe fixed [PAGE 7, Table 2].
   Veto condition: Trajectory forecasting without pose modality is unfavorable; pose→trajectory is the stronger cross-modal direction [PAGE 7, Table 1].
   Prediction: Trajectory ADE would jump from 670.8 mm (Early Concat) to 1074.6 mm (Sequential), FDE from 1642.0 to 2186.7 mm, JPE from 723.5 to 1131.9 mm [PAGE 7, Table 2]. Pose metrics would remain comparatively flat (APE ~116.3 vs 112.6), confirming the separation is concentrated in trajectory-coupled metrics. Verifiable via Table 2.

All three scenarios are falsifiable with the paper's reported ablation tables and protocols.

I need to ensure total word count >= 1000. THINK_TRACE is ~500. SOURCE_OPERATORS maybe ~300. Others ~200 each. Total should be well over 1000.

Check for any betting lines: none.
Check for toy equations: none invented. All from paper.
Check page citations: yes [PAGE N].
Check verbatim quotes: I included some phrases like "stride of a single frame" but not necessarily verbatim. The invariant says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include a few verbatim quotes to be safe.

Let me add verbatim quotes:
- Page 4: "Given a set of N ∈ N agents observed over T frames, each described by motion and body pose features, our goal is to use the first t < T observations to predict the remaining frames, i.e., from t + 1 to T."
- Page 5: Equation 1 text: "The total loss is written as:"
- Page 6: "their official protocols use a stride of a single frame across all splits"
- Page 7: "JPE, which aggregates both terms, happens to be minimized at this same factor"
- Page 10: "The root cause of this jitter is that the model predicts absolute positions at each frame independently, with no explicit constraint on temporal consistency between consecutive predictions."

I will weave these in.

Now ensure XML sections are exactly as named.

Final output should contain only the sections, no extra text outside? The user asked for these exact XML sections. I'll output just them.

Let me write the final response carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The paper formulates joint trajectory and 3D pose forecasting as a sequence-to-sequence problem over N agents observed for T frames. As stated on [PAGE 4], Section 3.1: "Given a set of N ∈ N agents observed over T frames, each described by motion and body pose features, our goal is to use the first t < T observations to predict the remaining frames, i.e., from t + 1 to T." Two input streams are consumed: player trajectories x_t ∈ R^{N×2}, given as 2D positions in global pitch coordinates, and 3D body poses p_t ∈ R^{N×J×3}, where poses are represented as joint-wise offsets relative to a root joint fixed at the origin [PAGE 4]. This coordinate split is deliberate: pose isolates articulated motion from global position, while trajectory separately captures positional information, making the two modalities complementary by construction.

The first multi-hop transformation is input-level fusion. Trajectory and pose inputs are projected independently into a shared latent space of dimension d, producing two t × N × d representations. These are concatenated, yielding a t × N × 2d tensor, and fused through a small MLP that compresses the representation back to d dimensions [PAGE 4, Section 3.2]. This early fusion enables cross-modal interactions from the first encoder layers while maintaining a consistent embedding size. The fused stream then enters a socio-temporal encoder with two sequentially stacked stages (coarse and fine), each containing three Set Attention Blocks: two temporal blocks SAB_T that attend independently over the time dimension for a given agent, followed by one social block SAB_S that attends across all agents within a single frame [PAGE 4, Section 3.3]. Before the first stage, a temporal positional encoding is added to preserve frame ordering, while no positional encoding is applied along the agent dimension, which enforces permutation equivariance with respect to player ordering and lets the model generalize across different team compositions [PAGE 4]. Missing agent slots due to occlusions are padded with a fixed out-of-range sentinel value (e.g., −2000), which cannot overlap with valid normalized values; attention weights assigned to padded slots converge close to zero [PAGE 4].

Two task-specific prediction heads, each implemented as an independent MLP, operate on the shared spatio-temporal representation [PAGE 4, Section 3.4]. The trajectory head maps to T × N × 2 (predicted 2D pitch-space position), while the pose head maps to T × N × 3J (predicted 3D root-relative joint coordinates). Only forecast frames from t+1 to T are retained at inference time. The composite loss [PAGE 5, Equation 1] is L_total = L_traj + λ_pose L_pose + λ_smooth L_smooth, with λ_pose = λ_smooth = 10 throughout experiments. L_traj is the mean Euclidean distance between predicted and ground-truth pitch positions across all agents and frames [PAGE 5, Equation 2]. L_pose computes per-joint absolute error ϵ_{n,t,j} = |p̂x − px| + |p̂y − py| + |p̂z − pz|, aggregates with an l2 norm over joints, and applies a per-joint weight vector w that up-weights high-error distal joints (elbows, wrists, ankles, feet) to prevent them from being dominated by the larger number of easier, low-error proximal joints [PAGE 5, Equation 3]. L_smooth penalizes high-frequency content in the predicted trajectory in the frequency domain: an rFFT over T_pred forecast frames yields F = ⌊T_pred/2⌋ + 1 bins, and the power spectrum is weighted by squared normalized frequency f_k^2 where f_k = k/(F−1) ∈ [0,1] [PAGE 5, Equation 4].

Gray-zone audit: The paper identifies a critical evaluation bias in prior joint methods T2P [30] and SimpliHumon [2], which use a stride of one frame when cutting videos into sequences [PAGE 6]. This causes near-identical overlapping windows to be scored repeatedly and lets longer recordings dominate the reported average [PAGE 6]. The authors instead use a non-overlapping stride and, on WorldPose, enforce a match-level split so no evaluation sequence shares a video source with training, removing incidental cue leakage across splits [PAGE 6]. They also reject oracle best-of-many selection, which requires access to the ground truth at inference time, reporting deterministic single-future and central-sample selection instead [PAGE 8]. A further gray zone is JPE: as an absolute world-frame distance, it is numerically dominated by the global-position term and correspondingly insensitive to the local articulation that joint rebalancing is meant to improve [PAGE 7]. Breakdown regimes appear in Table 3 [PAGE 7]: as the joint rebalancing factor rises to 10%, trajectory ADE degrades from 670.8 to 848.5 mm, showing that excessive pose steering starves the trajectory term; conversely, without smoothing, predicted trajectories exhibit visible frame-to-frame jitter [PAGE 8, Figure 2]. The static baseline—holding the last observed pose fixed and re-centering at the ground-truth root—performs remarkably close to learned methods on 3DPW because that dataset contains many near-static, low-intensity activities, whereas on WorldPose match play it is a poor predictor [PAGE 8].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Problem statement [PAGE 4]:
- Agents N ∈ ℕ, frames T, observation horizon t < T, causal setting with no future context at inference.
- Trajectory input: x_t ∈ ℝ^{N×2}, global pitch coordinates in meters (reported errors in mm [PAGE 6]).
- Pose input: p_t ∈ ℝ^{N×J×3}, root-relative 3D joint coordinates.

Early fusion [PAGE 4]:
- Independent projections into shared latent dimension d.
- Concatenation: [x; p] → ℝ^{t×N×2d}.
- MLP compression back to ℝ^{t×N×d}.

Socio-temporal encoder [PAGE 4]:
- Two stages (coarse, fine), each with SAB_T, SAB_T, SAB_S.
- SAB_T attends over time per agent; SAB_S attends across agents per frame.
- Permutation equivariance along agent dimension.

Prediction heads [PAGE 4]:
- Trajectory head: ℝ^{T×N×2}.
- Pose head: ℝ^{T×N×3J}.

Composite loss [PAGE 5, Equation 1]:
\mathcal{L}_{total} = \mathcal{L}_{traj} + \lambda_{pose} \mathcal{L}_{pose} + \lambda_{smooth} \mathcal{L}_{smooth}, \quad \lambda_{pose} = \lambda_{smooth} = 10.

Trajectory loss [PAGE 5, Equation 2]:
\mathcal{L}_{traj} = \frac{1}{NT} \sum_{n=1}^{N} \sum_{t=1}^{T} \| \hat{\boldsymbol{x}}_{n,t} - \boldsymbol{x}_{n,t} \|_2.

Pose loss [PAGE 5, Equation 3]:
\boldsymbol{\epsilon}_{n,t} = (\epsilon_{n,t,1}, \dots, \epsilon_{n,t,J}) \in \mathbb{R}^{J}, \quad \epsilon_{n,t,j} = |\hat{p}_{x,n,t,j} - p_{x,n,t,j}| + |\hat{p}_{y,n,t,j} - p_{y,n,t,j}| + |\hat{p}_{z,n,t,j} - p_{z,n,t,j}|,
\mathcal{L}_{pose} = \frac{1}{NT} \sum_{n=1}^{N} \sum_{t=1}^{T} \| \boldsymbol{w} \odot \boldsymbol{\epsilon}_{n,t} \|_2.
Target joints selected by empirical per-joint error measurement: elbows, wrists, ankles, feet.

Smoothing loss [PAGE 5, Equation 4]:
\mathcal{L}_{smooth} = \frac{1}{N F C} \sum_{n=1}^{N} \sum_{k=0}^{F-1} \sum_{c=1}^{C} f_k^2 | \hat{q}_{n,k,c} |^2,
where C = 2 spatial coordinates, F = ⌊T_pred/2⌋ + 1 frequency bins, f_k = k/(F−1) ∈ [0,1] normalized frequency, DC bin weight = 0, Nyquist bin weight = 1.

Breakdown/singularity regimes [PAGE 7, Table 3]:
- Joint rebalancing factor 0% → 10%: pose APE improves 112.6 → 98.7 mm; trajectory ADE degrades 670.8 → 848.5 mm; JPE minimized at 5% (719.8 mm), rising at 10% (874.7 mm) as trajectory error dominates.
- Smoothing enabled at 5% rebalancing [PAGE 7, bottom rows]: ADE 623.0 mm, FDE 1549.1 mm, JPE 647.3 mm, APE 95.2 mm, PPE 77.7 mm; versus no smoothing at 5%: ADE 683.3 mm, FDE 1667.2 mm, JPE 719.8 mm, APE 101.3 mm, PPE 79.1 mm.
- All metrics in mm [PAGE 6]. 3DPW sampled at 30 fps; 90 frames = 3 seconds; configuration: 1 second observed context, 2 seconds forecasting horizon [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage splits into two largely separate lines of work reviewed on [PAGE 3]: trajectory forecasting [4, 9–13, 15, 18, 24, 31, 35, 50] and pose forecasting [6, 7, 14, 16, 17, 23, 28, 37, 38, 46, 48, 54]. Frequency-domain pose methods via discrete cosine transform appear in [19, 41, 44, 53] [PAGE 3]. Most multi-person pose methods remain root-relative and never recover the agent's global trajectory [49, 51, 53] [PAGE 3]. EqMotion [55] applies multi-agent reasoning to both tasks but evaluates them as separate scenarios rather than predicting articulation and position for the same people at once [PAGE 3].

Earlier joint efforts exhibit specific limitations: Social-Transmotion [47] fuses pose and trajectory tokens at the input of a shared social transformer but forecasts only trajectories [PAGE 3]. Multi-Transmotion [20] forecasts a single ego agent while treating others purely as social context, with disjoint pre-training and evaluation benchmarks [PAGE 3]. TRiPOD [1] models human-human and human-object interactions via graph attention on PoseTrack and 3DPW over a 900 ms horizon, but no official implementation exists for direct comparison [PAGE 3]. The paper therefore adopts T2P [30] and SimpliHumon [2] as primary baselines because they are trained directly on WorldPose and 3DPW, support horizons beyond one second, and tackle the same pair of tasks [PAGE 3].

Multi-week evaluation traps center on protocol bias. Both baselines construct sequences with a stride of a single frame, introducing avoidable bias: near-identical sequences are counted many times over, and longer source videos receive disproportionate weight in reported averages simply by virtue of length [PAGE 6]. The authors correct this with a non-overlapping protocol and a match-level split on WorldPose (Morocco-Portugal validation, Netherlands-Argentina test, other six games for training), ensuring no evaluation sequence shares a video source with training [PAGE 6]. They additionally reject oracle best-of-many selection, which requires future ground-truth access at inference, adopting instead a deterministic single-future evaluation and a central-sample selection from six sampled futures [PAGE 8]. Dataset-specific trap: the static baseline holds the last observed pose fixed and performs well on 3DPW (near-static, low-intensity activities) but poorly on WorldPose (high-intensity match play where players are rarely stationary) [PAGE 8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under uniform loss weighting, low-motion proximal joints such as hips, spine, and shoulders dominate the averaged error, permitting a degenerate solution in which the model collapses toward a static average pose and leaves dynamic distal joints poorly predicted [PAGE 5, Supplementary A]. The paper describes this directly: "This design discourages degenerate solutions in which the model collapses toward static average poses" [PAGE 5].

Counter-trap: Per-joint loss rebalancing up-weights precisely the high-error distal joints—elbows, wrists, ankles, and feet—selected based on directly measured per-joint error under uniform weighting rather than by assumption [PAGE 5]. A single scalar controls rebalancing strength, found empirically; a factor of 5 is selected because it lies near the point where further pose gains begin to impose disproportionate cost on trajectory accuracy [PAGE 7].

Recursive theory of mind / clock: The socio-temporal encoder implements inter-agent reasoning through the social block SAB_S, which "attends across all agents within a single frame, capturing inter-player interactions and collective team behavior" [PAGE 4]. Each agent's fused trajectory-pose token conditions on all other agents' tokens simultaneously, reflecting the paper's premise that soccer involves twenty-plus players continuously reacting to teammates, opponents, and the state of play [PAGE 1–2]. The design is factorized: temporal blocks SAB_T aggregate individual motion history, while social blocks resolve finer-grained inter-agent dependencies on top of the global scene picture [PAGE 4]. Crucially, the model operates under a strictly causal setting, relying exclusively on past observations with no access to future context at inference time [PAGE 4]. This bounded recursion means the model infers intentions and interactions only from observed history, never from future ground truth.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical veto: Pose is represented as root-rel­ative joint offsets, which isolates articulated motion from global position; the trajectory stream separately captures global pitch position [PAGE 4]. This structural complementarity vetoes conflation of limb articulation with whole-body translation.

Frequency-domain veto: The smoothing term penalizes high-frequency energy in absolute pitch-coordinate trajectories, vetoing unrealistic zigzagging between consecutive timesteps [PAGE 5]. As the supplementary material states on [PAGE 10], "The root cause of this jitter is that the model predicts absolute positions at each frame independently, with no explicit constraint on temporal consistency between consecutive predictions." The adopted frequency-domain formulation penalizes the full-sequence power spectrum weighted by frequency, capturing systematic oscillations regardless of temporal scale within the horizon.

Vetoed alternatives [PAGE 10, Supplementary B]: (1) Predicting frame-to-frame displacements only degrades significantly because the model loses absolute spatial context needed by the social attention block to model inter-player interactions. (2) Keeping observed frames as absolute positions but expressing only forecast frames as displacements reduces early jitter but lets errors accumulate over the displacement chain, increasing ADE and especially FDE, and fixes the observation/forecast boundary at a specific frame index, removing horizon flexibility. (3) A local time-domain smoothness penalty on second-order differences between consecutive frame triplets misses oscillations spanning more than two frames, which are the dominant artifact in practice.

Occlusion/visibility layer: Variable player visibility is handled by padding missing agent slots with sentinel value −2000; attention weights on padded slots converge close to zero, so the model implicitly ignores absent agents [PAGE 4]. WorldPose derives from 2022 FIFA World Cup broadcast footage across multiple matches and venues [PAGE 6]; no explicit weather or lighting covariates are modeled, so the veto boundary assumes valid tracking within normalized coordinate range and no adversarial occlusion beyond sentinel handling.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Protocol veto (unit-stride overlap reinstated): Re-run T2P [30], SimpliHumon [2], and the proposed model on WorldPose and 3DPW using a stride of one frame instead of the non-overlapping protocol, keeping match-level split and all other settings fixed.
Veto condition: Unit-stride construction makes adjacent windows overlap almost completely, so each stretch of motion is scored repeatedly and longer recordings dominate the average [PAGE 6].
Prediction: Reported ADE/FDE/JPE/APE/PPE would be artificially optimistic relative to Table 4 [PAGE 8], and generalization to unseen matches would be overstated because evaluation sequences could share video sources with training [PAGE 6]. Verifiable by reproducing Table 4 with stride = 1; expect inflated learned-model scores and a narrowed gap versus the static baseline on WorldPose.

Scenario 2 — Loss veto (uniform weighting, no smoothing): Remove per-joint rebalancing (w = uniform) and set λ_smooth = 0, retaining early concatenation fusion.
Veto condition: Uniform weighting lets proximal joints dominate the average error, permitting degenerate static-average-pose collapse; independent per-frame absolute position prediction yields high-frequency trajectory jitter [PAGE 5, PAGE 10].
Prediction: Pose APE/PPE would deteriorate toward or beyond the 0% rebalancing row (APE ≈ 112.6 mm, PPE ≈ 83.7 mm) [PAGE 7, Table 3]; trajectory predictions would exhibit visible frame-to-frame oscillation as in Figure 2 left [PAGE 8]; JPE would be dominated by trajectory error. Verifiable via Table 3 top rows and qualitative Figure 2.

Scenario 3 — Fusion veto (sequential topology): Replace early concatenation input-level fusion with the sequential design (forecast trajectory first, condition pose on it), holding backbone, losses, protocol, and training recipe fixed [PAGE 7, Table 2].
Veto condition: Trajectory forecasting without access to pose modality is unfavorable; the pose→trajectory direction is the stronger cross-modal signal [PAGE 7, Table 1].
Prediction: Trajectory ADE would jump from 670.8 mm (Early Concat) to 1074.6 mm (Sequential), FDE from 1642.0 to 2186.7 mm, and JPE from 723.5 to 1131.9 mm [PAGE 7, Table 2]. Pose metrics would remain comparatively flat (APE ≈ 116.3 vs 112.6 mm), confirming the separation is concentrated in trajectory-coupled metrics. Verifiable via Table 2.
</RLVR_COUNTERFACTUAL_VETOES>