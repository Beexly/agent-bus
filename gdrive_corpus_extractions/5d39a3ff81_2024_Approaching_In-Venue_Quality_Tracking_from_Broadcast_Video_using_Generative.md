---
source: "2024 Approaching In-Venue Quality Tracking from Broadcast Video using Generative AI.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3904
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about using generative AI for in-venue quality tracking from broadcast video in soccer. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, looking at the source text provided, it seems to be a markdown conversion of a PDF with page numbers embedded. The text shows page breaks: page 1, page 2, etc. up to page 18 (appendix). The user says "PAGES: 12" but the text goes up to page 18 in the appendix. I need to cite exact [PAGE N] markers based on what's visible in the source text.

Let me map the content to pages:
- Page 1: Introduction start, Figure 1 mention
- Page 2: Continuation, "2" visible at bottom of text about passer/receiver occlusion
- Page 3: Section 2, Encoding Broadcast Tracking Data, permutation problem (10!)²
- Page 4: Figure 2, SAA explanation
- Page 5: Section 2.1 Enhancing Broadcast Tracking with Event Data (note: numbering error in source, says 2.1Enhancing...), Figure 3
- Page 6: Section 2.3 Generating Photorealistic Tracking Data via Diffusion, Figure 4
- Page 7: Section 3, xReceiver Dataset
- Page 8: xReceiver Model, xReceiver Quantitative Results, Table 1
- Page 9: xReceiver Qualitative Results
- Page 10: Figure 5 discussion continuation
- Page 11: Section 4 Summary
- Page 12: References start
- Pages 13-18: References continued, Appendix A, Appendix B

Actually looking carefully at the source text, I see page numbers embedded:
- "1" after Introduction text
- "2" after occlusion stats
- "3" after permutation problem
- "4" after Figure 2
- "5" after Figure 3
- "6" after Figure 4
- "7" after xReceiver Dataset
- "8" after Table 1
- "9" after Figure 5 mention? Actually page 9 seems to be before Figure 5 discussion
- "10" after Figure 5 discussion
- "11" after Summary
- "12" after References start
- "13" after References continued
- "14" Appendix A
- "15" Figure A-1
- "16" Figure A-2
- "17" Figure A-3
- "18" Appendix B

I need to be careful with citations. Since the user provided the source text with page markers, I should cite them as [PAGE N].

Now let me structure the response:

1. <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to reason about the paper's claims, identify gray zones (e.g., diffusion model assumptions, evaluation on single test game, xReceiver metric limitations, permutation invariance vs learned representations, etc.). This should be at least 400 words.

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I need to extract formal equations from the paper or derive them based on the paper's description. The paper mentions:
   - Softmax activation ensuring Law of Total Probability: sum of xReceiver values = 1
   - Cross entropy loss
   - IoU metric: |A ∩ B| / |A ∪ B|
   - Top-k metrics
   - Diffusion: iterative denoising from random initial state
   - Spatiotemporal Axial Attention: temporal attention and spatial attention
   - SAA formulation
   - Permutation problem: (10!)² possible permutations
   - Event data and tracking data fusion

   I should state these formally with LaTeX, cite pages, note assumptions, and exact singularity/breakdown regimes.

3. <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace from Prozone (25 years ago, Derby County), 2008 automatic tracking, league-wide deals, broadcast tracking limitations, GNNs [7], Transformers [12], Diffusion [15], etc. Also discuss multi-week traps (e.g., overfitting to single game evaluation, temporal distribution shifts across weeks).

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is about how coaches/analysts might regress to crisis habits when data is incomplete, counter-traps (adversarial adjustments), and time pressure (clock). Need to connect to the paper's context of incomplete broadcast data causing biased xReceiver outputs.

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Discuss physical constraints (pitch dimensions, player speed limits, ball physics), biomechanical constraints (acceleration limits, smoothness), weather vetoes (rain affecting ball trajectory, visibility). The paper mentions jitter and teleportation as failure modes that violate biomechanical realism.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I need to create 3 counterfactual veto scenarios with verifiable conditions and predictions. Examples:
   - If occlusion duration > threshold (e.g., 30 seconds), imputation error exceeds acceptable bound.
   - If ball velocity > threshold, diffusion denoising fails to capture trajectory.
   - If weather condition (rain) introduces noise not in training distribution, IoU drops below threshold.

Wait, RLVR might mean "Reinforcement Learning Verifiable Rewards" or similar. I should define it in context: scenarios where a verifiable reward function would veto the imputed data generation.

Let me make sure I don't mention any betting lines. No spreads, totals, moneylines, odds. The paper mentions "likelihood" and "probability" which is fine as long as I don't frame it as betting odds.

Word count: >= 1,000 words total across all sections. THINK_TRACE alone >= 400 words.

Let me draft each section carefully.

THINK_TRACE (>=400 words):
- Multi-hop derivation: The paper claims imputed tracking approaches in-venue quality. Hop 1: Broadcast tracking has occlusions (only 43% players visible during passes). Hop 2: Occlusions bias xReceiver toward visible players. Hop 3: Diffusion models can denoise and impute missing agents. Hop 4: SAA encodes spatiotemporal context without permutation bias. Hop 5: Fusion with event data provides semantic constraints. Hop 6: Evaluation on xReceiver shows Top-1 55.43% vs 59.06% in-venue, IoU 0.7121 vs 0.5105 broadcast. Gray zones: Single test game evaluation, no statistical significance testing reported, diffusion may hallucinate physically impossible trajectories, xReceiver is just one downstream task, permutation invariance might discard identity information needed for long-term tracking, event data integration assumes event timestamps align perfectly with tracking frames, breakdown when occlusion > 1 minute (paper mentions up to a minute), breakdown in set pieces with static templates not used but phases change.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define X^{broadcast} ∈ R^{T×N×2} as observed broadcast tracking locations for N agents over T frames, with occlusion mask M ∈ {0,1}^{T×N}.
- xReceiver model: p(r|pass) = softmax(SAA(X)_i) for attacking agents i, ∑ p_i = 1 (Law of Total Probability).
- Loss: L_CE = -∑ y_i log(p_i).
- IoU = |H_invenue ∩ H_imputed| / |H_invenue ∪ H_imputed| where H = {i: p_i > 0.1}.
- Diffusion: x_0 ~ q(x), x_T ~ N(0,I), reverse process p_θ(x_{t-1}|x_t, c) where c = fused encoding.
- SAA: temporal attention attends over agent's past locations; spatial attention attends over all agents at current frame.
- Permutation space: (10!)² ≈ 1.32 × 10¹³ orderings (two teams of 10 outfield players).
- Cite pages: [PAGE 1] for intro, [PAGE 2] for occlusion stats (43%, 21% passer, 39% receiver, 17% shot receiver), [PAGE 3] for permutation and SAA, [PAGE 4] for Figure 2 SAA, [PAGE 5] for event fusion, [PAGE 6] for diffusion, [PAGE 7] for dataset (130 games, 90:10 split, 5 seconds context, 0.2s before pass), [PAGE 8] for xReceiver model and Table 1 results, [PAGE 9] for qualitative, [PAGE 10] for Figure 5 discussion.

RETROCAUSAL_GENEALOGY:
- Lineage: Prozone 1990s (Derby County), manual annotation at 10 fps [PAGE 1]. 2008 automatic CV tracking [PAGE 1]. League-wide deals but within-league only [PAGE 1]. Broadcast tracking promised global scale but occlusions [PAGE 1]. GNNs for permutation invariance [7] but short-term <10s [PAGE 3]. Transformers self-attention [12] [PAGE 3]. SAA [13,14] [PAGE 4]. Diffusion from image synthesis [15,16,17] [PAGE 6]. Multi-week traps: evaluation limited to single test game [PAGE 8], no cross-season generalization, training on 130 games may not capture tactical evolution across weeks, distribution shift when teams change formations mid-season.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: When analysts face occluded broadcast data, they regress to visible-player bias (availability heuristic), as shown in Figure 5 where broadcast xReceiver picks only visible players [PAGE 9]. Counter-trap: Opposing analysts may exploit known imputation biases by making runs during occlusion windows, knowing imputed models may under-weight occluded attackers. Clock: Match clock creates real-time pressure; imputation must run within broadcast latency windows. If diffusion denoising steps exceed available seconds before next broadcast frame, system fails.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Pitch dimensions (105m × 68m standard), ball size ~22cm diameter, mass ~450g. Imputed trajectories must respect maximum player speed (~10 m/s sprint) and acceleration (~3-4 m/s²). Paper notes jitter and teleportation in non-diffusion outputs [PAGE 6].
- Biomechanical layer: Smoothness constraint; human motion has minimum jerk and bounded curvature. Diffusion model must enforce or learn these; otherwise "teleport between locations" [PAGE 6].
- Weather veto: Rain alters ball roll and player traction; if training data lacks rain conditions, imputed trajectories violate physical priors. No mention of weather in paper, so this is a veto condition: if weather ≠ training distribution, veto imputation.
- Exact breakdown: Occlusion > 60 seconds (paper says up to a minute [PAGE 3]) causes SAA temporal context to degrade; ball occlusion in 21%/39% of pass frames [PAGE 2] makes conditioning signal weak.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios.
1. Scenario: Occlusion duration > 45 seconds for receiver candidate. Verifiable: Check broadcast tracking mask M; if any attacking agent unobserved for >45s pre-pass, veto imputed xReceiver for that agent. Prediction: Top-k accuracy drops below 70% (in-venue baseline 79.35% Top-2).
2. Scenario: Ball velocity > 15 m/s during pass frame with concurrent ball occlusion. Verifiable: Compute ball speed from adjacent visible frames; if >15 m/s and ball occluded at pass time, veto diffusion sample. Prediction: IoU between imputed and in-venue high-probability sets falls below 0.60 (current 0.7121).
3. Scenario: Precipitation intensity > 2 mm/hr not represented in training set. Verifiable: Match metadata weather field; if outside training distribution, veto all imputed outputs for that match. Prediction: xReceiver cross-entropy loss increases by >25% relative to dry-match validation set.

I need to ensure total word count >= 1000. Let me write expansively.

Also, I must not invent fake ratios. All equations must be formal and derived from the paper or standard math.

Let me check page citations carefully from the provided text:
- [PAGE 1]: Introduction, Derby County, 25 years, 10 fps, Bolton, 2008 CV, broadcast tracking limitations, Figure 1 mention.
- [PAGE 2]: 43% players visible, 21% passer occluded, 39% receiver occluded, 17% shot receiver occluded.
- [PAGE 3]: Encoding, permutation problem (10!)², GNNs short-term <10s, Transformers, SAA.
- [PAGE 4]: Figure 2 SAA.
- [PAGE 5]: Event data fusion, multi-modal insight, Figure 3.
- [PAGE 6]: Diffusion, jitter, teleportation, Figure 4.
- [PAGE 7]: xReceiver Dataset, 130 games, 90:10 split, 5 seconds context, 0.2s before pass.
- [PAGE 8]: xReceiver Model, softmax Law of Total Probability, cross entropy, Table 1, top-k results.
- [PAGE 9]: Qualitative results, Figure 5 mention, visible-player bias.
- [PAGE 10]: Figure 5 discussion continuation, actual receiver Yellow #28.
- [PAGE 11]: Summary.
- [PAGE 12]: References start.
- [PAGE 13]: References continued.
- [PAGE 14]: Appendix A.
- [PAGE 15]: Figure A-1.
- [PAGE 16]: Figure A-2.
- [PAGE 17]: Figure A-3.
- [PAGE 18]: Appendix B.

I will cite these.

Word count check: I need to write enough. Let me compose.

I should not mention betting. I won't.

Let's write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation proceeds through five nested hops. Hop 1 establishes the data deficit: broadcast tracking captures only an average of 43% of players during pass frames, with the passer occluded in 21% of pass frames and the receiver occluded in 39% [PAGE 2]. Hop 2 translates this deficit into analytic bias: because off-ball positioning is invisible, xReceiver models trained on raw broadcast tracking systematically over-weight visible players and under-weight occluded attackers, as shown when broadcast xReceiver predicted three likely receivers none of whom was the actual receiver (Yellow #28) [PAGE 9]. Hop 3 proposes the generative remedy: a diffusion model iteratively denoises a random initial state into complete trajectories conditioned on a fused encoding of broadcast tracking and event data [PAGE 6]. Hop 4 specifies the encoder: Spatiotemporal Axial Attention (SAA) interleaves temporal self-attention over each agent's history with spatial self-attention over all agents at each frame, thereby avoiding the permutation problem that plagues ordered-agent models—the full permutation space for two teams of ten outfield players is (10!)², roughly 1.32 × 10¹³ possible orderings [PAGE 3]. Hop 5 closes the loop with downstream evaluation: on a held-out test game, imputed tracking raises Top-1 xReceiver accuracy from 42.03% (raw broadcast) to 55.43%, approaching the 59.06% in-venue ceiling, and lifts Intersection over Union from 0.5105 to 0.7121 [PAGE 8].

Gray-zone audit reveals several singularities. First, the entire quantitative claim rests on one test game [PAGE 8]; no variance, confidence intervals, or multi-match generalization are reported, so the 55.43% Top-1 figure may reflect idiosyncratic tactics of that single match rather than a stable population parameter. Second, the authors state players can remain occluded for up to a minute [PAGE 3], yet SAA temporal attention is only described as handling "long-term histories" without an explicit maximum context window; beyond some occlusion duration, the attention mechanism's conditioning signal collapses because no observed locations exist to anchor the denoising reverse process. Third, event data fusion assumes temporal alignment between event timestamps and tracking frames, but broadcast tracking suffers coverage gaps under ten seconds [PAGE 5]; if an event falls inside such a gap, the multi-modal encoding receives a null tracking signal and must rely solely on sparse event semantics, a regime where the model's behavior is uncharacterized. Fourth, diffusion models are notorious for generating samples that lie off the data manifold; the paper acknowledges jitter and teleportation in non-diffusion baselines [PAGE 6], but does not provide a hard physical constraint layer to guarantee that imputed player velocities remain within biomechanical bounds (e.g., sprint speed < 10 m/s, lateral acceleration < 4 m/s²). Fifth, the xReceiver metric itself is narrow: it conditions on successful passes only and ignores pass failure, defensive pressure gradients, and goalkeeper positioning, so high IoU on xReceiver does not imply fidelity for defensive shape or transition analysis. These gray zones define the exact breakdown regimes where imputed tracking should be vetoed rather than substituted for in-venue data.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(X^{(b)} \in \mathbb{R}^{T \times N \times 2}\) denote observed broadcast tracking locations for \(N\) agents across \(T\) frames, with binary occlusion mask \(M \in \{0,1\}^{T \times N}\), where \(M_{t,n}=0\) indicates agent \(n\) is occluded at frame \(t\). During pass frames, only 43% of players are visually perceived on average [PAGE 2].

Spatiotemporal Axial Attention decomposes into two interleaved operators. Temporal attention for agent \(n\):
\[
A^{\text{temp}}_n = \mathrm{softmax}\left(\frac{(X_{:,n} W_Q)(X_{:,n} W_K)^\top}{\sqrt{d_k}}\right) (X_{:,n} W_V)
\]
which attends over that agent's own past and present locations. Spatial attention at frame \(t\):
\[
A^{\text{spat}}_t = \mathrm{softmax}\left(\frac{(X_{t,:} W_Q)(X_{t,:} W_K)^\top}{\sqrt{d_k}}\right) (X_{t,:} W_V)
\]
which attends over all agents' locations simultaneously. Because attention is permutation invariant over the agent axis, no ordering is imposed, sidestepping the \((10!)^2\) permutation problem [PAGE 3].

Event data \(E\) is encoded as a second spatiotemporal modality and fused with \(X^{(b)}\) via joint SAA processing to produce context \(c\) [PAGE 5]. The diffusion reverse process generates complete tracking \(\hat{X}\) conditioned on \(c\):
\[
p_\theta(\hat{x}_{t-1} \mid \hat{x}_t, c) = \mathcal{N}\left(\hat{x}_{t-1}; \mu_\theta(\hat{x}_t, t, c), \Sigma_\theta(\hat{x}_t, t, c)\right)
\]
iteratively denoising from \(\hat{x}_T \sim \mathcal{N}(0,I)\) [PAGE 6].

The xReceiver model applies SAA followed by a linear projection and softmax over attacking agents \(i\):
\[
p(r=i \mid \text{pass}) = \frac{\exp(s_i)}{\sum_{j \in \mathcal{A}} \exp(s_j)}, \qquad \sum_{i \in \mathcal{A}} p(r=i \mid \text{pass}) = 1
\]
satisfying the Law of Total Probability [PAGE 8]. Training minimizes cross entropy:
\[
\mathcal{L}_{\mathrm{CE}} = -\sum_{i \in \mathcal{A}} y_i \log p(r=i \mid \text{pass}).
\]
High-likelihood receiver set \(H = \{i : p_i > 0.1\}\). Intersection over Union between datasets \(D_1, D_2\):
\[
\mathrm{IoU}(D_1, D_2) = \frac{|H_{D_1} \cap H_{D_2}|}{|H_{D_1} \cup H_{D_2}|}.
\]
Evaluation on 130 games (90:10 split), 5 seconds of context ending 0.2 seconds before pass [PAGE 7]. Table 1 results: Raw Broadcast Top-1 42.03, Top-2 59.42, Top-3 71.01, Top-4 80.43, IoU 0.5105; Imputed Top-1 55.43, Top-2 76.81, Top-3 88.04, Top-4 93.84, IoU 0.7121; In-Venue Top-1 59.06, Top-2 79.35, Top-3 90.94, Top-4 93.48 [PAGE 8].

Units: locations in meters (x,y) on pitch coordinates; time in seconds; velocities in m/s; probabilities dimensionless in [0,1]. Breakdown regimes: occlusion duration > 60 s exceeds demonstrated temporal context [PAGE 3]; ball occlusion in 39% of receiver frames and 21% of passer frames weakens conditioning [PAGE 2]; coverage gaps < 10 s with no tracking signal force unimodal event fallback [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage begins with Prozone in the 1990s, when Derby County became the first club to utilize camera-based tracking outputs, relying on stadium cameras and human annotators at 10 frames-per-second to measure fitness outputs such as distance run and sprint counts [PAGE 1]. By 2008, computer vision enabled automatic player and ball tracking, permitting real-time analysis, though availability remained restricted to a team's own games and then to within-league deals, precluding cross-league comparison [PAGE 1]. Broadcast tracking was proposed to democratize access across any televised match, but occlusions—players outside the main camera view, close-ups, poor picture quality, and mutual occlusion—meant only a portion of in-venue information was recoverable [PAGE 1].

Methodologically, Graph Neural Networks addressed the permutation problem by representing agents as nodes in fully connected graphs, but existing implementations supplied only short-term temporal context under 10 seconds [PAGE 3]. Transformers introduced self-attention for long-term dependencies in sequential data [PAGE 3]. Spatiotemporal Axial Attention combines temporal and axial attention to model both long-term agent histories and instantaneous spatial relationships without imposing agent order [PAGE 4]. Diffusion models, imported from high-resolution image synthesis where they generate photorealistic images from noise, provide the iterative refinement needed to convert noisy, occluded broadcast signals into smooth, realistic trajectories [PAGE 6].

Multi-week traps are evident. The evaluation is confined to a single test game [PAGE 8], so there is no evidence the imputation generalizes across a congested fixture schedule where tactical formations shift week-to-week. Training on 130 games [PAGE 7] may capture average behaviors but not the distribution shift that occurs when a manager changes system mid-season or when teams adopt low-block versus high-press phases. Because SAA uses a dynamic spatial role rather than a static template [PAGE 3], it avoids one failure mode, yet long occlusions up to a minute [PAGE 3] create multi-week exposure risk: if a key attacker is occluded during a critical run in week one and the model under-weights him, analysts may form a persistent prior that he is inactive, which then biases scouting reports across subsequent weeks unless corrected by in-venue ground truth.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
When analysts operate with raw broadcast tracking, they undergo crisis habit regression: under uncertainty, they default to the availability heuristic and over-weight visible agents. The paper demonstrates this precisely—broadcast xReceiver deemed only recently visible players as high-likelihood receivers while ignoring the actual receiver, Yellow #28, who had been occluded during an attacking run into the box [PAGE 9]. This regression is recursive because the biased output then informs coaching decisions, which alter on-field behavior, which further changes the visibility distribution in future broadcast frames.

The counter-trap is adversarial: an opposing analyst who knows the imputation model systematically discounts long-occluded players can instruct attackers to time runs precisely during occlusion windows, knowing the defensive xReceiver model will underestimate the threat. The imputed data attempts to close this trap by generating realistic motion for occluded agents [PAGE 6], but if the diffusion model hallucinates or oversmooths, it creates a false sense of security.

The clock imposes a hard latency constraint. Broadcast production operates on near-real-time frame delivery; diffusion denoising is iterative and computationally heavier than a single forward pass. If the number of denoising steps required to converge exceeds the interval between broadcast frames, the imputed tracking cannot be generated before the next live event, rendering the system causally disconnected from the match clock. There is no stated inference-time budget in the paper, so the real-time feasibility boundary is an unquantified singularity.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: A standard pitch is approximately 105 m × 68 m; a soccer ball has a diameter of roughly 22 cm and mass near 450 g. Imputed trajectories must respect maximum human sprint speed (approximately 10 m/s) and acceleration bounds (approximately 3–4 m/s²). The paper notes that non-diffusion generative outputs exhibit jitter and occasional teleportation between locations [PAGE 6], which constitutes a physical-layer veto: any imputed trajectory segment with inter-frame displacement exceeding \(v_{\max} \Delta t\) is biomechanically impossible and must be rejected.

Biomechanical layer: Human motion is smooth and subject to minimum-jerk constraints; instantaneous changes in direction are bounded by ground contact friction and muscle force limits. The diffusion model's denoising objective learns smoothness from data [PAGE 6], but without an explicit hard constraint, there is no guarantee that imputed paths respect curvature limits. If an imputed receiver trajectory shows discontinuities exceeding a physiologically plausible turning radius, a cross-layer veto triggers and that sample is discarded.

Weather layer: Rain alters ball roll, surface friction, and player traction; it also degrades broadcast picture quality, increasing occlusion rates. The paper contains no mention of weather conditioning or stratified evaluation by precipitation [PAGES 1–12]. Therefore, if match metadata indicates precipitation outside the training distribution (e.g., heavy rain not represented among the 130 training games [PAGE 7]), the imputation model lacks a verified physical prior and all outputs for that match should be vetoed.

Exact adjudication rule: An imputed tracking sample is accepted only if (1) all inter-frame displacements satisfy \(\|\Delta x\|_2 \le v_{\max}\Delta t + \epsilon\), (2) trajectory curvature remains within biomechanical bounds, and (3) match weather and pitch conditions fall within the training distribution. Failure at any layer constitutes a veto.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Extended occlusion veto. Verifiable condition: From the broadcast tracking mask \(M\), identify any attacking agent \(n\) with \(M_{t,n}=0\) continuously for more than 45 seconds preceding a pass event. Veto: Suppress imputed xReceiver probability for agent \(n\) and flag the pass for in-venue review. Prediction: Top-k accuracy for passes involving >45 s occluded receivers will fall below 70% (versus 79.35% Top-2 in-venue baseline [PAGE 8]), and IoU between imputed and in-venue high-likelihood sets will drop below 0.60 (versus 0.7121 overall [PAGE 8]).

Scenario 2 — High-velocity ball occlusion veto. Verifiable condition: Compute ball velocity from the last two visible frames before a pass; if speed exceeds 15 m/s and the ball is occluded at the pass frame (known to occur heavily due to small size and fast movement [PAGE 2]), veto the diffusion sample. Prediction: Cross-entropy loss on the xReceiver model will increase by more than 25% relative to low-velocity pass validation cases, and the true receiver will be absent from the Top-3 set in over half of such instances.

Scenario 3 — Out-of-distribution weather veto. Verifiable condition: Match weather metadata indicates precipitation intensity above the maximum observed in the 130-game training set [PAGE 7]. Veto: Reject all imputed tracking outputs for that match; fall back to raw broadcast tracking with explicit uncertainty flags. Prediction: The IoU between imputed and in-venue xReceiver high-likelihood sets will degrade from 0.7121 to below 0.50, matching or underperforming raw broadcast tracking (0.5105 [PAGE 8]), because the diffusion prior was never conditioned on wet-surface ball dynamics.
</RLVR_COUNTERFACTUAL_VETOES>