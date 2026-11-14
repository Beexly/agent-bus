---
source: "2024 Approaching In-Venue Quality Tracking from Broadcast Video using Generative AI.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4119
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on a provided research paper about soccer tracking data imputation using generative AI (diffusion models). The user provided the full text of an 18-page paper.

Key constraints:
1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive response analyzing the paper, structured exactly with those XML sections. I must avoid betting lines entirely. I must use formal LaTeX where appropriate. I must cite page numbers like [PAGE 1], [PAGE 2], etc. I must include verbatim quotes where relevant.

Let me plan the content:

**THINK_TRACE (>=400 words)**: Deep multi-hop derivation and gray-zone audit.
- Discuss the core problem: broadcast tracking occlusions (43% average visibility during passes, passer occluded 21%, receiver 39%, ball occluded/noisy).
- The solution: Spatiotemporal Axial Attention (SAA) + diffusion models + event data fusion.
- Multi-hop: How does incomplete broadcast data -> SAA encoding -> diffusion denoising -> imputed tracking -> xReceiver metric -> closer to in-venue.
- Gray zones: permutation problem solved by SAA but what about role changes? Static template limitation mentioned [PAGE 4]. Long occlusions up to a minute [PAGE 3]. Diffusion uncertainty/jitter/teleportation [PAGE 6]. IoU not reaching 1.0 [PAGE 8]. xReceiver sensitivity to velocities/accelerations [PAGE 9].
- Quantitative results table analysis: Top-1 raw 42.03 vs imputed 55.43 vs in-venue 59.06 [PAGE 9]. Top-4 raw 80.43 vs imputed 93.84 vs in-venue 93.48 (imputed slightly exceeds in-venue here - interesting overfitting/gray zone).
- The paper claims imputed approaches in-venue quality but Table 1 shows Top-4 imputed 93.84 > in-venue 93.48 - a breakdown regime where synthetic data may overfit or hallucinate correlation.
- Derive information-theoretic limits: missing off-ball actions mean event data alone is insufficient [PAGE 2]. Multimodal fusion is necessary.

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX, units, citations, breakdown.
- Define tracking data tensor: $X \in \mathbb{R}^{T \times N \times 2}$ where $T$ time steps, $N$ agents (22 players + ball), coordinates in meters (pitch normalized?). Assume pitch dimensions $105\text{m} \times 68\text{m}$ standard SI. Actually paper doesn't specify pitch size, so I should state assumption: normalized or metric pitch coordinates $(x,y) \in [0,L_x]\times[0,L_y]$ meters.
- Broadcast tracking observation mask: $M_t \in \{0,1\}^{N}$ indicating visibility. Average perceived players during pass frames $\bar{m} = 0.43 N$ [PAGE 2]. Passer occlusion $P(\text{passer occluded}) = 0.21$, receiver $P(\text{receiver occluded}) = 0.39$, shot-receiver occlusion $P=0.17$ [PAGE 3].
- Permutation group size: $(10!)^2$ for two teams of 10 outfield players [PAGE 4]. This is combinatorial explosion.
- SAA formulation: temporal attention $\text{Attn}_t(Q,K,V) = \text{softmax}(QK^T/\sqrt{d_k})V$ applied per agent over time; axial/space attention per frame across agents. Interleaved.
- Diffusion forward process: $q(x_t|x_{t-1}) = \mathcal{N}(x_t; \sqrt{1-\beta_t}x_{t-1}, \beta_t I)$; reverse $p_\theta(x_{t-1}|x_t) = \mathcal{N}(x_{t-1}; \mu_\theta(x_t,t), \Sigma_\theta(x_t,t))$. Conditioning on broadcast+event encoding $c$. Units: trajectory coordinates meters, time seconds, velocities m/s, accelerations m/s².
- xReceiver: softmax over attacking agents $i$: $p(r=i|\text{pass}) = \frac{\exp(s_i)}{\sum_{j\in\mathcal{A}}\exp(s_j)}$, sums to 1 (Law of Total Probability) [PAGE 8]. Cross-entropy loss $\mathcal{L} = -\sum_i y_i \log p_i$.
- IoU metric: $\text{IoU} = \frac{|\mathcal{H}_{IV} \cap \mathcal{H}_{remote}|}{|\mathcal{H}_{IV} \cup \mathcal{H}_{remote}|}$ where $\mathcal{H} = \{i: p_i > 0.1\}$ [PAGE 8].
- Breakdown regimes: occlusion > 60s [PAGE 3]; ball tracking noise due to size/speed [PAGE 6]; Top-4 metric inversion (imputed > in-venue) suggests over-smoothing or mode collapse toward high-probability receivers [PAGE 9].
- Units: seconds for 5-second context [PAGE 8], 0.2 seconds before pass [PAGE 8], frames at 10 fps historically [PAGE 1].

**RETROCAUSAL_GENEALOGY**: Historical lineage & multi-week traps.
- Derby County first to use tracking outputs [PAGE 1]. Prozone reference [1] [PAGE 12]. Sam Allardyce Bolton [PAGE 1].
- 2008 automatic CV tracking [PAGE 1]. League-wide deals limiting cross-league [PAGE 1].
- Broadcast tracking promise vs occlusion reality [PAGE 1-2].
- References: Brefeld et al. zones of control [2] [PAGE 12]; Fernandez & Bornn Soccermap [3] [PAGE 12]; Hinton et al. CNN [4]; Lucey et al. player roles [5]; Bialkowski et al. formations [6]; Scarselli GNN [7]; Horton MIT Sloan [8]; Anzer et al. GNN tactical [9]; Stöckl et al. xReceiver/graph conv [10]; Vaswani Transformer [12]; Sohl-Dickstein diffusion [15]; Rombach latent diffusion [16]; Ramesh CLIP latents [17].
- Multi-week traps: If a team relies on broadcast-only scouting over a multi-week recruitment window, occluded players (especially those making off-ball runs into box) are systematically undervalued because xReceiver biased toward visible players [PAGE 9-10]. This creates a retrospective scouting blind spot: "most recently seen players" bias [PAGE 10]. Over a season, this propagates into faulty recruitment and tactical preparation.
- Temporal trap: The model requires multiple minutes of context [PAGE 3], but broadcast coverage has gaps <10 seconds [PAGE 5]. Multi-week analysis accumulates these gaps.

**RECURSIVE_THEORY_OF_MIND**: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Analysts revert to event data (on-ball only) when broadcast tracking fails, missing off-ball positioning [PAGE 2]. Habitual regression to visible-only data under pressure.
- Counter-trap: The imputation model itself may create a counter-trap by generating plausible but synthetic motion for occluded agents, causing analysts to trust imputed trajectories as ground truth. The Top-4 inversion (93.84 vs 93.48) suggests the model may overfit to in-venue distribution or hallucinate agreement [PAGE 9].
- Clock: 5 seconds of tracking context before pass, 0.2s buffer [PAGE 8]. Occlusions up to a minute [PAGE 3]. The "clock" of usable context vs occlusion duration creates a hard boundary: if occlusion > model context window, imputation degrades. The model's recursive assumption that past visible behavior predicts future occluded behavior breaks down when the player changes intent (e.g., attacking run into box) during occlusion [PAGE 10].
- Theory of mind: The model infers "intent" of occluded players (receiver likelihood) from visible context, but lacks true theory of mind; it approximates via statistical correlation. Under crisis (high occlusion), it regresses to prior (visible players), causing systematic bias against occluded actual receivers.

**CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof.
- Physical layer: Pitch dimensions, player collisions, offside lines. The paper doesn't model physical constraints explicitly; diffusion generates smooth trajectories but may violate physics (teleportation mentioned [PAGE 6]). Veto: any imputed trajectory with inter-frame velocity exceeding human sprint biomechanics (~12 m/s) or acceleration limits should be vetoed. Paper acknowledges jitter and teleport [PAGE 6].
- Biomechanical layer: Player body orientations, velocities, accelerations matter for xReceiver [PAGE 7]. Imputed data sensitive to minor differences in velocities/accelerations [PAGE 9]. Veto: if imputed acceleration profile is physiologically implausible (e.g., instantaneous direction change without deceleration), reject imputed sample.
- Weather/environment layer: Not discussed in paper. No weather data in broadcast tracking encoding. Veto: if weather (rain, wind) materially alters ball trajectory or player sprinting, the diffusion model conditioned only on tracking+event data lacks exogenous variables; imputation is vetoed for high-wind/rain matches unless weather covariates are added.
- Adjudication: The paper's imputation is "veto-proof" only within nominal conditions (dry, standard pitch, no extreme physical contact). It lacks explicit physics engine constraints. Therefore a veto layer must be external: kinematic feasibility, pitch boundary containment, offside rule consistency.

**RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I need to create 3 verifiable counterfactual veto scenarios where the model's output would be vetoed, with predictions.
1. Scenario: Long occlusion (>60s) of a receiver making a late run into the box during a counterattack. Veto condition: occlusion duration exceeds SAA effective context window (>1 minute) and no event data covers the run. Prediction: xReceiver will assign high probability to visible stationary players near the passer, not the actual occluded receiver; Top-1 accuracy collapses toward random/visible prior.
2. Scenario: Ball occlusion during a high-speed long pass (>30 m) in windy conditions. Veto condition: ball trajectory missing for >0.5s at speed >20 m/s with no event data (e.g., no "ball out" event). Prediction: diffusion will hallucinate smooth ball path but may miss actual landing point; xReceiver conditioned on wrong ball location yields false receiver set (IoU < 0.4 vs in-venue).
3. Scenario: Set-piece (corner kick) with static formation template violation. Veto condition: phase of play is dead-ball/corner where players occupy non-formation roles; SAA trained on open-play may misassign spatial roles. Prediction: imputed trajectories will drift toward open-play formation priors, causing systematic xReceiver miscalibration for corner receivers; IoU drops below broadcast baseline for dead-ball subsets.

I need to ensure total word count >= 1000 across sections. Let's aim for:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~400 words
- RETROCAUSAL_GENEALOGY: ~350 words
- RECURSIVE_THEORY_OF_MIND: ~300 words
- CROSS_LAYER_VETO_ADJUDICATION: ~300 words
- RLVR_COUNTERFACTUAL_VETOES: ~350 words
Total roughly 2200 words, well over 1000.

Need to be careful: NO BETTING LINES. Do not mention odds, spreads, etc. The paper itself doesn't have betting lines, but I must avoid analogies to betting.

Use exact [PAGE N] markers. Include verbatim quotes.

Let me draft carefully.

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

I must ensure formal LaTeX equations are proper. I can use \[ \] or $ $. Let's use display style where appropriate.

Let's write.

THINK_TRACE content:
Start by establishing the information deficit. Quote Page 2: "only an average of 43% of players can be visually perceived in broadcast tracking". Multi-hop: visible fraction -> permutation problem -> SAA -> fusion -> diffusion -> xReceiver. Gray zone: Table 1 Top-4 imputed 93.84 > in-venue 93.48. This is a breakdown regime: synthetic data can exceed ground-truth metric by over-smoothing or collapsing to prior. Also occlusion up to a minute [PAGE 3] exceeds typical context. The model assumes Markov-ish stationarity over occlusion, which fails when player intent changes (attacking run into box) [PAGE 10]. I will derive the conditional probability chain.

Let's write it out.

SOURCE_OPERATORS_AND_EQUATIONS:
Define notation. Include equations for observation mask, SAA attention, diffusion, xReceiver softmax, IoU. Include units. Cite pages. Mention singularity/breakdown: when mask sum is low, when beta_t schedule doesn't match human motion smoothness, when softmax temperature leads to overconfidence.

RETROCAUSAL_GENEALOGY:
Trace from Derby County/Prozone [PAGE 1] to 2008 CV [PAGE 1] to broadcast tracking limits [PAGE 1-2] to this paper. Multi-week traps: recruitment blind spot.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression to event data [PAGE 2]. Counter-trap of synthetic trust. Clock: 5s context [PAGE 8] vs 60s occlusion [PAGE 3].

CROSS_LAYER_VETO_ADJUDICATION:
Physical veto: max velocity. Biomechanical: acceleration smoothness. Weather: missing exogenous covariate. Adjudication rule.

RLVR_COUNTERFACTUAL_VETOES:
Three numbered scenarios. Each with veto condition, counterfactual, prediction. Verifiable.

Word count check: I need to write enough. Let's produce detailed prose.

I need to avoid saying "odds" or "betting". The word "probability" is fine (information/probability units allowed).

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central information-theoretic deficit is that broadcast tracking is a partial observation process. On page 2, the authors state that "in the frames where passes occur, only an average of 43% of players can be visually perceived in broadcast tracking, meaning that over half the players on average are occluded." This is not random missingness; it is structurally biased toward the most visually salient agents. The paper quantifies the bias: "In 21% of pass frames the passer is occluded, and in 39% of pass frames the receiver is occluded" [PAGE 3]. For goal-scoring sequences the deficit is acute: "of the passes that were made to receivers who subsequently attempted a shot, the receiver was occluded 17% of the time when the pass was made" [PAGE 3]. Because soccer is low-scoring and opportunities are sparse, the absence of off-ball context impairs nuanced analysis [PAGE 3].

The multi-hop derivation proceeds as follows. Raw broadcast tracking provides a masked observation tensor \(X^{\text{obs}} \in \mathbb{R}^{T \times N \times 2}\) with visibility mask \(M \in \{0,1\}^{T \times N}\), where \(\mathbb{E}[\sum_n M_{t,n}] \approx 0.43N\) during pass frames [PAGE 2]. Event data supplies a sparse semantic stream \(E\) of on-ball actions but lacks off-ball positioning [PAGE 2]. The model fuses these modalities through Spatiotemporal Axial Attention (SAA), which avoids the permutation problem of \((10!)^2\) possible agent orderings for two teams of ten outfield players [PAGE 4] by treating agents as an unordered set and applying interleaved temporal and axial self-attention [PAGE 4-5]. Temporal attention encodes each agent's history across multiple minutes, which is vital because players may remain occluded "up to a minute" [PAGE 3]. Spatial attention models instantaneous inter-agent relationships within a frame [PAGE 4]. The fused encoding \(c\) conditions a diffusion model that iteratively denoises a random trajectory sample into complete tracking data [PAGE 6-7].

The gray-zone audit centers on Table 1 [PAGE 9]. Raw broadcast tracking achieves Top-1 xReceiver accuracy of 42.03%, imputed tracking 55.43%, and in-venue tracking 59.06% [PAGE 9]. Imputation recovers much of the gap but does not reach the theoretical limit. More revealing is the Top-4 row: imputed 93.84% versus in-venue 93.48% [PAGE 9]. This metric inversion is a breakdown regime: the imputed distribution can exceed ground-trith agreement by over-smoothing toward high-prior receivers or by mode collapse, effectively hallucinating consensus with in-venue data that is not causally grounded in observed motion. The paper acknowledges this explicitly: "our imputed data still does not reach the theoretical limit of 1... showing that our imputation model can still be improved" [PAGE 8]. A second gray zone is sensitivity: imputed xReceiver outputs match in-venue outputs except for minor discrepancies in velocities and accelerations, demonstrating that the downstream metric is brittle to generative noise in trajectory derivatives [PAGE 9]. Finally, the model assumes that multi-minute visible history suffices to predict intent during occlusion, yet Figure 5 shows the actual receiver was "making an attacking run into the box and has been occluded for a long period of time," causing broadcast-only xReceiver to systematically favor recently visible players [PAGE 10]. When player intent changes mid-occlusion, the stationarity assumption of the temporal encoder breaks down.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the full tracking state be \(X_t = \{x_{t,n}\}_{n=1}^{N}\), \(x_{t,n} = (x_n, y_n) \in [0, L_x] \times [0, L_y]\) meters on the pitch, with \(N=23\) agents (22 outfield players plus ball; goalkeepers included in the agent type indicator) and time step \(\Delta t\) corresponding to the capture rate. Historical systems operated at 10 frames-per-second [PAGE 1], implying \(\Delta t = 0.1\) s and SI units of m/s for velocity \(\dot{x}\) and m/s² for acceleration \(\ddot{x}\). The broadcast observation process is \(X^{\text{obs}}_t = M_t \odot X_t + (1-M_t) \odot \text{null}\), where the empirical visibility during pass frames is \(\bar{m} = 0.43\) [PAGE 2], \(P(\text{passer} \in \text{occluded}) = 0.21\), \(P(\text{receiver} \in \text{occluded}) = 0.39\), and \(P(\text{shot-receiver} \in \text{occluded} \mid \text{pass}) = 0.17\) [PAGE 3].

The permutation group for two teams of ten outfield players is \(|S_{10} \times S_{10}| = (10!)^2\), which standard ordered architectures must marginalize over unless invariance is enforced [PAGE 4]. SAA resolves this via two interleaved attention operators. Temporal attention for agent \(n\) over its own history \(\mathcal{H}_n = \{x_{\tau,n}\}_{\tau \le t}\):
\[
\text{Attn}^{\text{temp}}_n = \text{softmax}\left(\frac{Q_n K_n^\top}{\sqrt{d_k}}\right) V_n,\quad Q_n,K_n,V_n = f_{\text{temp}}(\mathcal{H}_n).
\]
Axial spatial attention at frame \(t\) across agents:
\[
\text{Attn}^{\text{space}}_t = \text{softmax}\left(\frac{Q_t K_t^\top}{\sqrt{d_k}}\right) V_t,\quad Q_t,K_t,V_t = f_{\text{space}}(\{x_{t,n}\}_{n=1}^N).
\]
Interleaving these operations yields a permutation-invariant encoding \(c = \text{SAA}(X^{\text{obs}}, E)\) that fuses tracking and event modalities [PAGE 5-6].

Diffusion imputation defines a forward noising process \(q(x_t | x_{t-1}) = \mathcal{N}(x_t; \sqrt{1-\beta_t} x_{t-1}, \beta_t I)\) and a learned reverse denoising \(p_\theta(x_{t-1} | x_t, c) = \mathcal{N}(x_{t-1}; \mu_\theta(x_t,t,c), \Sigma_\theta(x_t,t,c))\), conditioned on \(c\) [PAGE 6-7]. Output trajectories are generated in meters over seconds; granular features include smoothness of motion (bounded jerk) and coarse features include agent locations [PAGE 6].

The xReceiver model applies softmax over attacking agents \(\mathcal{A}\):
\[
p(r=i \mid \text{pass}) = \frac{\exp(s_i)}{\sum_{j \in \mathcal{A}} \exp(s_j)}, \qquad \sum_{i \in \mathcal{A}} p(r=i \mid \text{pass}) = 1,
\]
satisfying the Law of Total Probability [PAGE 8]. Training uses cross-entropy \(\mathcal{L} = -\sum_i y_i \log p_i\). Evaluation uses top-\(k\) receiver recall and Intersection over Union over high-likelihood sets \(\mathcal{H} = \{i : p_i > 0.1\}\):
\[
\text{IoU} = \frac{|\mathcal{H}_{\text{in-venue}} \cap \mathcal{H}_{\text{remote}}|}{|\mathcal{H}_{\text{in-venue}} \cup \mathcal{H}_{\text{remote}}|}.
\]
Reported values: Top-1 (42.03 / 55.43 / 59.06), Top-2 (59.42 / 76.81 / 79.35), Top-3 (71.01 / 88.04 / 90.94), Top-4 (80.43 / 93.84 / 93.48), IoU raw 0.5105 vs imputed 0.7121 [PAGE 9], where columns are Raw Broadcast / Imputed / In-Venue.

Breakdown and singularity regimes: (1) occlusion duration exceeding the temporal context window (players occluded up to 60 s while model context is minutes but not infinite) [PAGE 3]; (2) ball trajectory noise due to small size and fast movement [PAGE 3, 6]; (3) diffusion artifacts including jitter and teleportation when uncertainty is high [PAGE 6]; (4) Top-4 metric inversion indicating possible over-smoothing [PAGE 9]; (5) xReceiver sensitivity to sub-meter/second differences in velocities and accelerations [PAGE 9]. Assumptions: pitch coordinates are metric or consistently normalized; event data and tracking data are temporally aligned; agent identity can be maintained across frames despite permutation invariance.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage begins with Derby County as the first club to utilize tracking outputs for analysis, relying on stadium cameras and human annotators at 10 fps to measure fitness outputs such as distance run and sprint counts [PAGE 1]. This operational model enabled Sam Allardyce's Bolton Wanderers to overachieve tactically [PAGE 1]. By 2008, computer vision permitted automatic player and ball tracking, but availability remained restricted to a team's own games, then later to league-wide deals that precluded cross-league comparison [PAGE 1]. Broadcast tracking was proposed to scale globally, yet it remains incomplete because of occlusions, close-ups, picture quality, and mutual agent obscuration [PAGE 1].

Scientific antecedents cited include zones of control and probabilistic movement models [2], Soccermap for visually interpretable analysis [3], CNNs for image classification [4], player-role representations [5, 6], graph neural networks for fully connected agent graphs [7-10], and the Transformer attention mechanism [12] adapted here as spatiotemporal axial attention [13, 14]. Diffusion is imported from image synthesis [15-17] and repurposed for trajectory denoising conditioned on multimodal sports encodings [PAGE 12].

The multi-week trap is retrospective scouting bias. If a recruitment department relies on broadcast-only tracking over a multi-week window, off-ball agents who make attacking runs into the box while occluded are systematically undervalued because broadcast xReceiver is "heavily biased towards the most recently seen players" and cannot perceive the actual receiver [PAGE 10]. Over a season, this produces a survivorship bias in which visible, stationary players near the ball are overrated relative to occluded, dynamically moving receivers. The paper's qualitative example confirms this: the actual receiver (Yellow #28) was not deemed a high-likelihood receiver under raw broadcast tracking, whereas in-venue and imputed data correctly identified him [PAGE 9-10]. Without imputation, multi-week scouting reports inherit the occlusion bias of the broadcast camera, not the tactical reality of the pitch.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression occurs when analysts, denied complete tracking, revert to event data, which "only captures the player events that are on-ball, missing off-ball actions" such as positioning to receive a pass [PAGE 2]. Under pressure to produce same-match insights, the habit is to trust what is visible: passers, receivers in frame, and the ball when visible. This produces a first-order theory of mind in which agent intent is inferred only from observed locations, not from occluded counterfactual positioning.

The counter-trap is synthetic over-trust. The imputation model generates "realistic behaviors" for occluded agents [PAGE 3], and qualitative results show player trajectories are "smooth, representing realistic human motion" [PAGE 9]. Because the output looks complete, analysts may treat imputed trajectories as ground truth rather than as conditioned hallucinations. Table 1 reveals the trap: imputed Top-4 accuracy (93.84%) slightly exceeds in-venue Top-4 (93.48%) [PAGE 9], which cannot reflect superior information but rather distributional smoothing toward high-prior receivers. A recursive analyst who believes imputed data is equivalent to in-venue data will overstate confidence in tactical conclusions derived from synthetic motion.

The clock imposes a hard boundary. The xReceiver dataset uses "5 seconds of tracking context leading up to 0.2 seconds before the pass" [PAGE 8], yet players can be occluded "up to a minute" [PAGE 3]. When occlusion duration exceeds the effective context window, the model's assumption that past visible behavior predicts present intent fails. In the motivating example, the actual receiver was occluded for a long period while making an attacking run into the box; broadcast tracking deemed him unlikely precisely because he had left the visible context [PAGE 10]. The model does not possess a theory of mind about changing intent; it regresses to a statistical prior over visible agents. Under crisis conditions—high occlusion, fast transitions, late runs—the recursive loop collapses to the most recently observed configuration, producing systematic false negatives for occluded receivers.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: Human sprinting is bounded by biomechanical limits; elite soccer players reach approximately 10–12 m/s, with accelerations bounded by muscle force and pitch friction. The paper acknowledges that generated behaviors "occasionally teleport between locations" and exhibit "jitter" [PAGE 6]. Any imputed trajectory segment with inter-frame displacement exceeding \(v_{\max}\Delta t\) (e.g., >1.2 m per 0.1 s frame at 12 m/s) or with discontinuous acceleration spikes violates physical law and must be vetoed. The diffusion model as described has no explicit physics engine or kinematic constraint layer; it learns smoothness statistically rather than enforcing it [PAGE 6]. Therefore the imputation is not veto-proof at the physical layer without an external kinematic filter.

Biomechanical layer veto: xReceiver depends on "fine-grained details such as agent velocities, accelerations, and body orientations" [PAGE 7], and imputed outputs are sensitive to "minor differences in player velocities and accelerations" [PAGE 9]. A veto rule is: reject any imputed sample whose velocity or acceleration profile falls outside the 99th percentile of in-venue kinematics for that positional role. Because the paper trains xReceiver directly on trajectories rather than handcrafted features [PAGE 8], unconstrained diffusion can produce physiologically implausible accelerations that corrupt receiver probability without visible jitter.

Weather/environmental layer veto: The encoding uses broadcast tracking and event data only [PAGE 5-6]; no weather covariates (wind, rain, pitch temperature) are included. Wind alters ball trajectory, particularly for long passes and crosses, and rain alters player sprint mechanics and ball roll. If match weather deviates from training distribution, the conditional diffusion \(p_\theta(x_{t-1}|x_t,c)\) lacks the exogenous variables needed to adjust ball physics. Veto condition: for matches with recorded wind speed above a threshold or precipitation, imputed ball trajectories and receiver sets must be vetoed unless weather is added to \(c\). The paper provides no such weather module.

Adjudication: The imputation model is conditionally valid only under nominal physical, biomechanical, and environmental regimes. A cross-layer veto must be applied externally: (1) kinematic feasibility filter on player trajectories; (2) acceleration-smoothness filter for xReceiver inputs; (3) weather-exclusion filter for ball-dependent passing analysis. Without these, the model's "in-venue quality" claim [PAGE 3] holds only on average, not in edge-case match conditions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Long-occlusion counterattack. Veto condition: an attacking receiver is occluded for more than 45 seconds during a counterattacking sequence, with no intervening on-ball event covering his run. The SAA temporal context window cannot span the full occlusion, and event data lacks off-ball positions [PAGE 2-3]. Counterfactual prediction: the imputed xReceiver model will assign top-k probability to recently visible attackers near the passer rather than to the actual occluded receiver making a late run into the box; Top-1 accuracy on this subset will collapse toward the visible-player prior (below raw broadcast baseline), and IoU with in-venue xReceiver will fall below 0.40.

Scenario 2: High-speed ball occlusion in adverse weather. Veto condition: the ball is occluded for more than 0.5 seconds while traveling at speed above 20 m/s (e.g., a switched long pass or cross), and match weather includes wind or precipitation not represented in the training encoding [PAGE 3, 6]. Counterfactual prediction: the diffusion model will denoise a geometrically smooth ball path that ignores aerodynamic drift; the conditioned xReceiver model will then identify receivers based on a hallucinated landing point, producing a high-likelihood receiver set that excludes the true target. IoU between imputed and in-venue high-receiver sets will drop below 0.30 for this subset.

Scenario 3: Dead-ball set-piece with formation-role violation. Veto condition: phase of play is a corner kick or free kick where agents occupy non-formation positions (e.g., attackers stacked in the box, defenders on the goal line), violating the open-play spatial priors encoded by SAA [PAGE 4-5]. Counterfactual prediction: because SAA was developed for general tracking without phase-specific static templates [PAGE 4], the imputed trajectories will drift toward open-play formation behavior, placing defenders and attackers in non-set-piece configurations. xReceiver outputs for the corner will misidentify likely receivers; Top-3 accuracy for dead-ball passes will fall below the raw broadcast value of 71.01% [PAGE 9], demonstrating that imputation can underperform incomplete observations when the phase-of-play prior is mismatched.
</RLVR_COUNTERFACTUAL_VETOES>