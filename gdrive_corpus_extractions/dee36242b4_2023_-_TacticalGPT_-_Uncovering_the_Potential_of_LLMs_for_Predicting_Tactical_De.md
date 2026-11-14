---
source: "2023 - TacticalGPT - Uncovering the Potential of LLMs for Predicting Tactical Decisions in Professional Football - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2023"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3652
---

<NATIVE_REASONING>
The user wants me to analyze the provided source document (TacticalGPT paper) and produce a response following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use real formalism. Cite page markers [PAGE 1] through [PAGE 11] or wherever relevant. The source text has page markers at bottom: **1** through **11**. I should reference them as [PAGE 1], [PAGE 2], etc.

Word count: >= 1000 words total across sections. THINK_TRACE alone >= 400 words.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Discuss the chain: StatsBomb event data -> rule-based templates -> ChatGPT augmentation -> GPT-NeoX-20B QLoRA fine-tuning -> greedy decoding -> human annotation. Analyze gray zones: factually plausible vs correct ambiguity, greedy decoding bias toward high-frequency templates, Where-type failure due to 360 coordinate sparsity/continuous output, small eval set (100 prompts), two annotators, no RLHF actually performed despite being in methodology, domain shift between 2021/22 and 2022/23 PL seasons, 18-zone discretization loss of metric precision, next-token prediction objective mismatched to tactical reasoning. Multi-hop: data generation (phase 1), SFT (phase 2), RLHF (phase 3 not done). Gray-zone: plausible outputs may be historically occurring but not ground truth for that prompt; evaluation conflates frequency with correctness; small sample size inflates variance; 50% correct on What seems robust but N=100 means binomial SE ~5%; Who 32% correct. Also the model is fine-tuned on synthetic text, not raw events, so it's learning template distributions not physical dynamics. Word count target ~500-600 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define event tuple E = (t, player, team, action, x, y, ...). Template function T: E -> text with XML tags. Zone mapping z: R^2 -> {1..18}. Next-token probability P(w_t | w_{<t}; θ). QLoRA reparameterization: ΔW = BA, B ∈ R^{r×d}, A ∈ R^{d×k}, rank r. Loss: L_NTP = -Σ log Pθ(w_t | w_{<t}, C). Greedy decoding: ŵ_t = argmax_w Pθ(w | w_{<t}, C). Evaluation metrics: accuracy correct/plausible/improbable. Cite pages: dataset gen [PAGE 3]-[PAGE 5], SFT [PAGE 6], results [PAGE 7]-[PAGE 9], Table 1 [PAGE 7], examples [PAGE 8], Where [PAGE 9]. Units: tokens, parameters (20 billion), dataset size (100,000 sequences), matches (580), seasons (2021/2022, 2022/2023), epochs (max 2), quantisation (4-bit), memory not specified but consumer-grade GPUs. Breakdown regimes: Where-type spatial regression fails because output is token sequence not coordinate vector; greedy decoding collapses to mode; small eval N=100; two annotators no inter-annotator agreement reported; RLHF phase absent (not encompassed in scope) [PAGE 6].

<RETROCAUSAL_GENEALOGY>: Historical lineage: instruction tuning (OpenAI InstructGPT [PAGE 2, 6]), parameter-efficient fine-tuning Houlsby et al. [6] [PAGE 2], QLoRA Dettmers [3] [PAGE 2], Med-PaLM2 fine-tuning [11] [PAGE 2], DAPT Gururangan [5] [PAGE 2]. Multi-week traps: if deployed over a season, opponent adaptation (game planning changes based on model predictions), distribution shift (new signings, injuries, tactical drift), template brittleness across competitions (Premier League only), overreliance on high-frequency plausible actions suppressing creativity, confirmation bias where coaches trust "plausible" outputs as ground truth. Also time-lag: data from 21/22-22/23 used, model may not generalize to 23/24 tactical evolution (e.g., high pressing structures, build-out patterns).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: under pressure (crisis match moments), coaches revert to habitual patterns; model trained on historical frequency will reinforce those habits rather than break them. Counter-trap: opponent can reverse-engineer model's preferred outputs (since deterministic greedy decoding yields same response for same prompt) and set tactical traps. Clock: decision latency vs match clock; model reduces latency from data acquisition to insight but inference time and human-in-the-loop annotation (RLHF panel) add delay; real-time adjustments during match require sub-minute latency, which fine-tuned LLM on consumer GPU may not guarantee. Theory of mind: model lacks true understanding of opponent's intentional states; it predicts text tokens, not player intentions. Recursive loop: coach uses model -> opponent anticipates coach's model-informed decision -> model must model opponent modeling coach, but architecture only models text tokens from past events, not nested intentionality.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto. The paper ignores physics. Player positioning (Where) requires kinematic feasibility: max sprint speed, acceleration, pitch dimensions (105m x 68m standard), weather (rain, wind) affecting ball trajectory, fatigue altering decision space. Veto proof: any generated Where coordinate must satisfy x ∈ [0, L], y ∈ [0, W] and reachable set given player's current velocity and time horizon; if LLM outputs outside this, veto. No weather data in context [PAGE 6 mentions only starting lineups]. No biomechanical constraints. Therefore the model cannot adjudicate physical vetoes; it outputs linguistically plausible but physically impossible coordinates (Figure 3 shows improbable coordinates [PAGE 9]). Also textual What/Who outputs ignore offside rule mechanics (spatial constraints), player stamina, set-piece routines.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just counterfactual vetoes. Need 3 scenarios:
1. Where-type coordinate generation: If prompt asks player position in Zone X, model outputs coordinate outside pitch bounds or in opponent's penalty area for a defensive midfielder during own build-up. Veto triggers because physical boundary violation. Prediction: without veto, error rate >90% as seen in Figure 3 [PAGE 9]; with veto, forced resampling to nearest valid zone centroid.
2. Who-type affiliation violation: Model suggests a player not affiliated with team in possession takes an action (Table 1 improbable 6% for Who [PAGE 7]). Veto triggers on roster membership constraint. Prediction: reduces improbable from 6% to <1%, but may increase plausible/correct trade-off because exact player (e.g., Milner vs Shaw) remains uncertain.
3. Temporal/game-state veto: Model recommends high-risk pass in defensive third when trailing by 1 with 90th minute, but context lacks game state (score, time) because only lineups were used as context [PAGE 6]. Veto triggers when proposed action violates situational rationality (e.g., clear out instead of dribble). Prediction: factual correct rate for What drops initially as model learns constrained policy, then recovers as fine-tuning incorporates game-state context (future work noted [PAGE 6]).

Need to ensure total >= 1000 words. Let's draft carefully.

Important: No betting lines. I must avoid words like "odds," "spread," "total," "moneyline." Even in metaphorical sense? Better avoid entirely. "Odds" is common; I must not use it. "Likelihood" is fine (probability). "Probability" is fine.

No toy equations: I will use real LaTeX: conditional probability, QLoRA low-rank, loss function, etc. No invented Force/Fatigue ratios.

Citations: Use [PAGE N] exactly. Need to map source pages. The text shows page numbers **1** through **11**. I'll cite accordingly.

Let me estimate word counts:
THINK_TRACE: 500+
SOURCE_OPERATORS: 250+
RETROCAUSAL: 150+
RECURSIVE: 150+
CROSS_LAYER: 150+
RLVR: 150+
Total ~1350. Good.

Let's write.

Need to be careful with verbatim quotes where citing page markers. The instruction says: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes from the source with page citations.

Verbatim quotes I can use:
- Page 7: "factually correct – i.e., the generated response aligned precisely with the ground truth in terms of factual correctness"
- Page 6: "not encompassed in the scope of this early work" (RLHF)
- Page 9: "the task of accurately answering Where-type questions poses a significant challenge for the current model"
- Page 6: "we opted to experiment with the GPT-NeoX-20B architecture [1] – i.e., a 20-billion parameter autoregressive language model"
- Page 3: "we began by analysing various play patterns, events, and match situations contained within the 580 Premier League fixtures"

I will weave these in.

Now compose final answer with XML sections exactly as named.

Double-check: The user said ">= 1,000-WORD DEPTH across these exact XML sections". So all sections combined must be >=1000 words. I'll aim for robust length.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The TacticalGPT pipeline decomposes into three causally linked phases, and each phase introduces a distinct gray zone that the paper acknowledges only implicitly. Phase 1 converts structured StatsBomb event data from 580 Premier League fixtures across the 2021/2022 and 2022/2023 seasons into hand-crafted XML templates, then augments those templates with ChatGPT (GPT-4), and finally populates them with match events to produce 100,000 synthetic textual sequences [PAGE 3]-[PAGE 5]. The first gray zone is semantic compression: continuous pitch coordinates are discretized into an 18-zone system [PAGE 4], which discards metric precision before the model ever sees the data. Because the model is trained on text rather than on raw spatiotemporal tensors, it learns the statistical distribution of template fillings, not the physical dynamics of football. Phase 2 fine-tunes GPT-NeoX-20B, a 20-billion-parameter autoregressive model, using QLoRA with 4-bit quantisation and a maximum of two epochs, with starting lineups injected as semi-structured context [PAGE 6]. The second gray zone is the objective mismatch: next-token prediction minimizes cross-entropy over a vocabulary of football-adjacent tokens, which is not isomorphic to tactical correctness. A token sequence can be linguistically fluent and historically plausible while describing an event that never occurred in that specific match situation.

The evaluation itself contains third- and fourth-order gray zones. The paper reports 100 unseen prompts assessed by two human annotators under greedy decoding [PAGE 7]. Greedy decoding deterministically selects the maximum-probability token at each step, which collapses the model’s distribution to its mode. The authors admit that many “factually plausible” outputs have occurred previously in the database but do not match the specific ground truth for the prompt [PAGE 8], meaning the evaluation conflates base-rate frequency with case-specific accuracy. With N = 100 and only two annotators, no inter-annotator agreement statistic (e.g., Cohen’s κ) is reported, so the reliability of the 50% correct / 46% plausible split for What-type questions and the 32% correct / 62% plausible split for Who-type questions cannot be statistically audited [PAGE 7]. The binomial standard error for a 50% proportion at N = 100 is approximately ±5 percentage points, yet the paper presents the results as point estimates without confidence intervals.

Phase 3, RLHF, is explicitly “not encompassed in the scope of this early work” [PAGE 6], despite being diagrammed in Figure 1 as part of the methodology [PAGE 2]. This creates a fifth gray zone: the paper’s conclusion discusses alignment with football professionals as if it were already achieved, when in fact the model has only undergone supervised fine-tuning. The Where-type failure mode is the clearest breakdown regime: because responses consist solely of StatsBomb 360 coordinates intended for graphical plotting rather than textual description [PAGE 5], and because the model outputs token sequences rather than coordinate vectors, Figure 3 shows predominantly “highly improbable” generated coordinates relative to ground truth [PAGE 9]. This is not a tuning issue; it is an architectural modality mismatch. The model is being asked to regress continuous spatial coordinates using a discrete next-token language objective, which is fundamentally ill-posed without a dedicated spatial decoder or coordinate projection head. Any deployment that treats TacticalGPT’s textual output as actionable tactical advice without a physical veto layer risks encoding template-frequency bias into coaching decisions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a match event be represented by the tuple
\[
e = (t, p, \tau, a, \mathbf{x}, \mathbf{y}, \text{team}, \text{context}) \in \mathcal{E},
\]
where \(t \in \mathbb{R}_{\ge 0}\) is match time in seconds, \(p\) is a player identifier, \(\tau \in \mathcal{A}\) is the action type (pass, carry, free kick, etc.), \(\mathbf{x}, \mathbf{y} \in \mathbb{R}\) are pitch coordinates in meters under the StatsBomb convention, and context includes game state and phase of play.

Phase 1 defines a template operator
\[
T: \mathcal{E} \times \mathcal{Z} \to \Sigma^*,
\]
mapping events and zone labels to text strings over alphabet \(\Sigma\), with XML-style slots \(\langle\text{team}\rangle\), \(\langle\text{player}\rangle\), \(\langle\text{position}\rangle\), \(\langle\text{location}\rangle\) [PAGE 3]-[PAGE 4]. The zone map is a discretization
\[
z: \mathbb{R}^2 \to \{1,\dots,18\},
\]
partitioning the pitch into the traditional 18-zone system [PAGE 4]. Data augmentation applies a paraphrase operator \(\mathcal{A}_{\text{GPT-4}}\) to generate template variants [PAGE 4], and the final synthetic corpus \(\mathcal{D}_{\text{synth}}\) contains 100,000 sequences drawn from 580 fixtures [PAGE 3].

Phase 2 initializes GPT-NeoX-20B, an autoregressive language model with \(20 \times 10^9\) parameters [PAGE 6], and fine-tunes only low-rank adapters. For a weight matrix \(W \in \mathbb{R}^{d \times k}\), QLoRA represents the update as
\[
\Delta W = B A, \qquad B \in \mathbb{R}^{r \times d},\; A \in \mathbb{R}^{d \times k},\; r \ll \min(d,k),
\]
with 4-bit quantisation of the base weights [PAGE 6], citing Dettmers et al. [3]. The training objective is next-token prediction over context \(C\) (starting lineups) and prompt \(P\):
\[
\mathcal{L}_{\text{NTP}}(\theta) = - \sum_{t=1}^{T} \log P_{\theta}(w_t \mid w_{<t}, C, P),
\]
optimized with AdamW for at most two epochs using adaptive learning rates and early stopping [PAGE 6]. Inference uses greedy decoding:
\[
\hat{w}_t = \arg\max_{w \in \Sigma} P_{\theta}(w \mid \hat{w}_{<t}, C, P),
\]
a deterministic mode-seeking strategy [PAGE 7].

Evaluation uses a three-class label space \(\mathcal{Y} = \{\text{correct, plausible, improbable}\}\). From Table 1 [PAGE 7]: for What-type questions, \(N=50\) correct (0.50), \(N=46\) plausible (0.46), \(N=2\) improbable (0.04); for Who-type questions, \(N=16\) correct (0.32), \(N=31\) plausible (0.62), \(N=3\) improbable (0.06). Additionally, 60% of What-type responses identified the correct player and 64% correctly identified the player’s zone [PAGE 7]. For Where-type questions, 25 unseen samples were plotted against ground-truth StatsBomb 360 coordinates, with results described as “highly improbable” [PAGE 9].

Exact singularity and breakdown regimes:
1. Where-type coordinate regression: the output space is token sequences, not \(\mathbb{R}^2\), so the model cannot represent spatial uncertainty or enforce \(0 \le x \le L\), \(0 \le y \le W\) [PAGE 5], [PAGE 9].
2. Greedy-decoding collapse: \(\arg\max\) suppresses low-frequency but valid tactical variants, biasing output toward high-base-rate actions [PAGE 8].
3. Evaluation sample size: \(N=100\) prompts with two annotators and no reported inter-rater reliability yields wide uncertainty intervals around the reported proportions [PAGE 7].
4. Missing RLHF phase: no preference model or reward model was trained; the alignment phase is absent [PAGE 6].
5. Context limitation: only starting lineups are injected; game state (score, time, red cards) is explicitly reserved for future work [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
TacticalGPT sits at the intersection of three historical lineages: instruction-tuned LLMs, parameter-efficient domain adaptation, and sports event-data analytics. The instruction-following lineage traces to OpenAI’s InstructGPT and ChatGPT, which the paper invokes as the alignment template [PAGE 2], [PAGE 6], and to RLHF as developed by Ouyang et al. [9] [PAGE 2]. The parameter-efficient lineage includes Houlsby et al.’s adapter modules [6] [PAGE 2] and Dettmers et al.’s QLoRA [3] [PAGE 2], enabling fine-tuning on consumer-grade GPUs. The domain-adaptive lineage includes Gururangan et al.’s DAPT [5] [PAGE 2] and Med-PaLM2’s task-specific fine-tuning on USMLE-structured medical texts [11] [PAGE 2], which TacticalGPT mirrors by constructing question-answer demonstration data for football tactics [PAGE 2]. BloombergGPT’s 700-billion-token financial corpus [13] [PAGE 2] provides the precedent for training from scratch, which the authors reject in favor of adapter-based fine-tuning [PAGE 2].

A multi-week tactical trap arises if this system is deployed across a competitive season without retraining. Because the training data are drawn from the 2021/2022 and 2022/2023 Premier League seasons [PAGE 3], the model encodes the tactical distributions of those specific campaigns—pressing triggers, build-out patterns, set-piece taker hierarchies—that may shift with managerial changes, new signings, injuries, and opponent adaptation. If an opposing analytics team reverse-engineers TacticalGPT’s template preferences, they can anticipate the “most probable” textual recommendation a coach will receive for a given match situation and design a counter-trap: for example, inviting the model’s favored high-frequency build-up pass into a pressing trap because greedy decoding deterministically returns the same mode for identical prompts [PAGE 7], [PAGE 8]. Over multiple weeks, coaches who regress to the model’s most plausible outputs reduce tactical entropy, making their own behavior more predictable. The paper’s suggestion that alternative decoding methods (sampling, beam search) could reveal “less conventional plays” [PAGE 10] acknowledges this entropy-collapse risk, yet the deployed model described in the results uses only greedy decoding [PAGE 7]. Without weekly recalibration on the most recent fixtures, the model’s conditionals \(P(\text{action} \mid \text{situation})\) become stale, and its “factually plausible” outputs reflect last season’s base rates rather than the current opponent’s tendencies.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind problem is acute in TacticalGPT’s intended use case: a coach asks what a player is likely to do next, the model answers, and the coach adjusts instructions accordingly. However, the model has no representation of nested intentional states. It estimates \(P(w_t \mid w_{<t})\) over text tokens, not \(P(\text{player intent} \mid \text{opponent belief about coach strategy})\). Under crisis conditions—late-match pressure, a one-goal deficit, or a red card—coaches exhibit habit regression, reverting to well-drilled patterns rather than exploring novel solutions [PAGE 10 discusses creative players but not crisis regression explicitly]. TacticalGPT, fine-tuned on historical frequencies via greedy decoding, will reinforce precisely those high-frequency habits, because the mode of the learned distribution corresponds to common situations [PAGE 8]. The model therefore amplifies the coach’s crisis habit regression instead of interrupting it.

The counter-trap operates at the opponent’s level. Because greedy decoding is deterministic [PAGE 7], an opponent with access to the same or a similar model can compute the coach’s likely textual response to any given prompt and prepare a specific tactical negation. If TacticalGPT consistently recommends that a fullback takes throw-ins in Zone 10 [PAGE 8], the opponent can shadow that fullback or force the throw into a contested zone. The model lacks a clock mechanism: it does not encode match time remaining, score differential, or fatigue state as context [PAGE 6], so it cannot distinguish between a throw-in in the third minute and one in the 89th minute of a knockout match. The decision-support latency is also mismatched to the match clock. Although the paper claims LLM-based assistants reduce latency between data acquisition and actionable insights [PAGE 10], human-in-the-loop RLHF annotation by football professionals [PAGE 6] and LLM inference time on consumer hardware introduce delays incompatible with real-time in-match adjustments. A true theory-of-mind system would model the opponent modeling the coach; TacticalGPT only models the coach modeling the text description of past events.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
TacticalGPT lacks any cross-layer veto layer for physical, biomechanical, or weather constraints. The paper explicitly limits additional context to starting lineups and reserves game state for future work [PAGE 6]; no weather variables (wind speed, precipitation, temperature), pitch dimensions, player velocity, acceleration, or fatigue metrics are ingested. The Where-type failure [PAGE 9] is the most direct evidence: the model generates StatsBomb 360 coordinate sets without a physical feasibility check. A valid veto operator \(V: \mathbb{R}^2 \times \mathcal{P} \times \mathcal{W} \to \{0,1\}\) would require
\[
V(\mathbf{x}, \mathbf{y}, p, w) = \mathbb{I}\big(0 \le x \le L \;\land\; 0 \le y \le W \;\land\; \|\mathbf{x} - \mathbf{x}_p(t)\|_2 \le v_{\max}(p, w) \Delta t \big),
\]
where \(L, W\) are pitch length and width in meters, \(\mathbf{x}_p(t)\) is player \(p\)’s current position, \(v_{\max}\) is the maximum feasible speed given weather \(w\) and player fatigue, and \(\Delta t\) is the time horizon. TacticalGPT has no such operator. Figure 3 shows generated coordinates categorized as “highly improbable” relative to ground truth [PAGE 9], consistent with outputs that violate kinematic reachability or pitch boundaries.

For What-type and Who-type outputs, physical vetoes are equally absent. The model can recommend a ground pass from Zone 15 to a teammate [PAGE 8] without checking whether the receiving player is onside under the offside rule, whether the passing lane is obstructed by an opponent, or whether the passer’s biomechanical state (sprinting vs. standing) permits that pass type. Set-piece recommendations—free kicks, throw-ins [PAGE 8]—ignore wind effects on ball trajectory and the defensive wall’s placement. Because the model is a text generator rather than a physics-informed simulator, it cannot adjudicate whether a proposed tactical decision is physically executable. Any production deployment must wrap the LLM output in a veto layer that rejects coordinates outside the pitch convex hull, player-action pairs violating roster affiliation (the “factually improbable” Who errors at 6% [PAGE 7]), and high-risk actions incompatible with the current game state. Until such a layer exists, TacticalGPT’s outputs are linguistically plausible but physically unconstrained.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-via-verifiable-rewards (RLVR) veto scenarios, each with a falsifiable prediction:

Veto Scenario 1 — Spatial boundary violation on Where-type prompts. A verifiable reward function rejects any generated coordinate \((x,y)\) falling outside the pitch rectangle \([0,L]\times[0,W]\) or outside the reachable set \(\|\mathbf{x}-\mathbf{x}_p(t)\|_2 > v_{\max}\Delta t\) for the named player. Prediction: Without the veto, Where-type error remains at the “highly improbable” level observed in Figure 3 [PAGE 9]. With the veto and forced resampling to the nearest valid zone centroid, spatial error drops by at least 50 percentage points, but textual plausibility (natural-language description of position) may decline because the model must trade linguistic fluency for coordinate validity.

Veto Scenario 2 — Roster affiliation violation on Who-type prompts. A verifiable reward function rejects any suggested action-taker who is not registered to the team in possession for that fixture, using the starting-lineup context injected during fine-tuning [PAGE 6]. Prediction: The “factually improbable” rate for Who-type questions falls from 6% (3/50) [PAGE 7] to below 1%. The “factually correct” rate may initially dip because the model can no longer fall back on affiliated-but-incorrect players; recovery requires fine-tuning on set-piece taker hierarchies and dead-ball routines.

Veto Scenario 3 — Game-state rationality veto on What-type prompts. A verifiable reward function rejects high-risk actions (e.g., dribble into the defensive third, short pass under pressure) when context indicates score deficit and match time beyond the 80th minute, provided game-state context is added as future work proposes [PAGE 6]. Prediction: Before game-state context is integrated, the veto triggers on a large fraction of What-type outputs because the model lacks the necessary input features; factual correct rate for What-type questions falls below the baseline 50% [PAGE 7] until context is supplied. After context integration, correct rate recovers above 50% while improbable rate remains below 4%.
</RLVR_COUNTERFACTUAL_VETOES>