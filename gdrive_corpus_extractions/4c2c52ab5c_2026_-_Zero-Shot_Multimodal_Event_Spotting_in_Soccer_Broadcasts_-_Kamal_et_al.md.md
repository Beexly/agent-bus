---
source: "2026 - Zero-Shot Multimodal Event Spotting in Soccer Broadcasts - Kamal et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 21
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4523
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about zero-shot multimodal event spotting in soccer broadcasts. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to cite exact [PAGE N] markers and verbatim quotes where source pages are provided. The source text appears to be from a PDF conversion. I need to infer page numbers or use the structure provided. Since it's a machine conversion without page markers explicitly shown, I should be careful. The user says "PAGES: 21" and the text has sections. I can reference sections or approximate page markers, but the instruction says "cite exact [PAGE N] markers". Since the provided text doesn't have explicit [PAGE N] markers, I might need to use section headers or note that markers aren't present in the machine conversion. However, to comply strictly, I should probably reference the content by section or note the lack of preserved page breaks. Wait, the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since pages aren't explicitly marked in the text provided (it's a continuous markdown conversion), I cannot invent page numbers. I should cite section numbers (I, II, III, etc.) and use verbatim quotes from the text. I'll note that page breaks were not preserved in the machine conversion, so section-level citations are used.

Let me structure the response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to reason through the paper's claims, identify gray zones, potential failure modes, etc. This should be substantive.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I need to extract the equations (Eq 1, Eq 2), define variables, units (seconds, pixels, dollars, F1 score dimensionless, etc.), assumptions, breakdown regimes.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss lineage from SoccerNet, CALF, NetVLAD++, MatchVision, SoccerMaster, MLLMs, prompt optimization (GEPA, MIPROv2), etc. Multi-week traps could refer to temporal consolidation windows, overlapping clips, etc.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a specific framing. I need to interpret "crisis habit regression" (models regressing to frequent classes under uncertainty), "counter-trap" (prompt optimization or two-prompt verification), "clock" (temporal localization, absolute timestamps, consolidation windows). Discuss the model's theory of mind about broadcasters, viewers, judges.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This is a bit abstract for a CS paper, but I can interpret physical layer (video resolution, frame sampling, storyboard grid), biomechanical (player motion, ball trajectory not captured by sparse sampling), weather (broadcast conditions not modeled). Veto proof means what would veto the system's outputs.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? I need to propose 3 counterfactual scenarios where the system would fail/veto, with predictions.

Word count: >=1000 words total across sections. THINK_TRACE >=400 words.

Let me draft carefully.

Important: No betting lines. No toy equations.

Let me think about the equations:

Equation (1): t̂_abs_i = t_start_i + τ̂_i, where τ̂_i ∈ [0, t_end_i − t_start_i]. Units: seconds (s). This maps clip-relative timestamp to absolute match timeline.

Equation (2): S_exc = w1 S_event + w2 S_visual + w3 S_text, with w1+w2+w3=1. Values: w1=0.40, w2=0.35, w3=0.25. Units: dimensionless excitement score (0-10 scale implied by judges). Assumptions: heuristic weights, not learned. Breakdown: if modalities missing or corrupted, score degrades; if transcript misaligned (Whisper errors), S_text is noisy.

Temporal consolidation: 20-second window for same-class, 30-second for goals and corners. Highest confidence retained.

Evaluation metrics: Precision@5s, Recall@5s, F1@5s, mAP@5s, MAE in seconds. Tolerance ±5s.

THINK_TRACE content (>=400 words):
- Multi-hop derivation: from sparse sampling (15 frames/15s, 5s overlap) -> storyboard (384x216, 5x3 grid, 1920x648) -> MLLM inference -> structured output (detection flag, category, relative timestamp, confidence, evidence) -> absolute localization via Eq 1 -> consolidation (20s/30s windows) -> excitement scoring Eq 2 -> LLM judging (FlowJudge, GPT-based) with Spearman ρ and MAE.
- Gray zones: machine conversion loses equations/tables/figures; page markers absent; "GPT-5.5", "GPT-5.6" are fictional/future model names (arXiv 2610.37583 dated Oct 2026) — this is a speculative/future-dated paper, so model capabilities are unverified; cost figures ($18.01, $7.20, etc.) are API-dependent and not generalizable; excitement weights are heuristic; only 3 matches, 130 events; cross-dataset comparison with CALF/NetVLAD++ is not apples-to-apples because they are pretrained on SoccerNet and evaluated without retraining (domain shift); Qwen3-VL-8B fails on kickoffs/misses/shots entirely (0/6, 0/26, 0/41) indicating modality or tokenization breakdown; transcript-only misses outcome-sensitive events (miss recall 22.2%); recap/replay confusion remains despite prompt instructions.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define clip segmentation: C = {C_i ... C_N}, overlap 5s, duration 15s. Frame rate: 15 frames / 15s = 1 Hz nominal sampling. Storyboard: 384×216 per frame, 5×3 grid = 1920×648.
- Eq 1: t̂_abs_i = t_start_i + τ̂_i, τ̂_i ∈ [0, Δt_i], Δt_i = t_end_i − t_start_i = 15 s. SI unit: seconds.
- Matching criterion: TP iff |t̂_abs_i − t_gt| ≤ 5 s (or inside interval) and category match. One-to-one matching.
- Eq 2: S_exc = 0.40 S_event + 0.35 S_visual + 0.25 S_text. Domain [0,10]. Weights sum to 1.
- Consolidation: cluster radius R = 20 s (30 s for goal/corner). Select argmax confidence.
- Models: GPT-5.5, GPT-5.6 Sol/Terra/Luna, Qwen3.5-4B, Qwen3-VL-8B, Qwen3-VL-8B Embedding. Baselines CALF, NetVLAD++.
- Metrics units: precision/recall/F1/mAP dimensionless [0,1] or %; MAE in s; cost in USD/match.
- Breakdown regimes: sparse sampling Nyquist-like limit for events < ~2-3s; Whisper alignment error; storyboard loses fine motion; prompt optimization cannot recover absent visual info; 3-match sample size limits statistical power (binomial standard error for F1 ~ sqrt(p(1-p)/n) etc., but maybe too toy? I can mention it formally).

RETROCAUSAL_GENEALOGY:
- Lineage: SoccerNet [1], SoccerNet-v2 [2] established benchmarks; CALF [3] context-aware loss; NetVLAD++ [11] feature aggregation; MatchVision [5], SoccerMaster [6] domain-specific training; TimeChat [7], Grounded-VideoLLM [15], TimeSuite [16] temporal reasoning; X-VARS [13] refereeing; Jiang et al [14] domain adaptation; GEPA [8], MIPROv2 [9] prompt optimization; FlowJudge [20] LLM evaluation; Spearman [19] rank correlation.
- Multi-week traps: overlapping clips with 5s stride create temporal aliasing across week-long broadcast archives if not deduplicated; consolidation window 20s/30s means events separated by less than window are merged (temporal resolution limit); recap content creates false positives across broadcast timeline (retrospective duplication); prompt optimization on dev set may overfit to annotation conventions of these 3 matches, not generalizing across leagues/broadcast styles (acknowledged in Conclusion).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under uncertainty (sparse frames, ambiguous outcomes), model regresses to high-prior classes (e.g., Qwen3.5-4B high goal recall 90.5% but low shot recall 34.1%; shot/miss confusion). The detector may habitually label ambiguous attacking events as shots or goals because they are visually salient.
- Counter-trap: Two-prompt decomposition (recognition vs verification) and manual storyboard prompt act as counter-traps to reduce false positives; Storyboard-2 achieves highest precision (62.24%) but lower recall (71.5%). MIPROv2 favors coverage (80.37% recall) but lower precision (53.09%).
- Clock: Absolute temporal localization via Eq 1 and consolidation windows impose a clock on predictions; the 20s/30s clustering windows define the temporal granularity. The model must reason about broadcast state (live vs replay vs recap) which is a temporal theory of mind about the viewer's experience. The excitement scoring attempts to model human highlight relevance (second-order theory of mind about judges/audience).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Input resolution 384×216 per frame, 1 Hz sampling. A fast offside decision or ball contact < 1s may be omitted (temporal aliasing). Veto: if event duration < frame interval (1s), physical layer cannot guarantee capture.
- Biomechanical layer: Distinguishing shot vs miss requires final trajectory/outcome evidence; sparse storyboard may show attacking action but not ball flight after contact. Biomechanical veto: if ball trajectory not visible in sampled frames, shot/miss classification is underdetermined.
- Weather/environmental layer: Broadcast production quality (camera cuts, close-ups, replays) varies; poor lighting or weather-obscured pitches reduce visual evidence. The paper doesn't model weather, but it's an external veto.
- Veto proof: The system has no explicit veto mechanism; it outputs "No Important Event" but that's a class, not a veto. Confidence scores are not calibrated veto thresholds.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios + predictions.
1. Scenario: A match with frequent recap segments (>20% of runtime) where goals are replayed immediately. Prediction: System will generate duplicate detections for the same goal despite consolidation; consolidation window may merge them if within 30s, but if replay occurs after >30s, duplicate FP. Verifiable by counting FP per unique goal in a match with known recap schedule.
2. Scenario: Event occurs between sampled frames (e.g., a save and rebound lasting <1s at 1.5Hz effective sampling? Actually 1 Hz). Prediction: Missed entirely (FN) because no frame contains the critical moment; recall drops below reported 82.61%. Verifiable with synthetic high-frame-rate ground truth inserted between storyboard frames.
3. Scenario: Commentary transcript misaligned by >5s due to Whisper delay or broadcast lag. Prediction: S_text term in Eq 2 provides contradictory semantic evidence; precision drops, especially for outcome-sensitive events (misses), as seen in Table III where transcript-only miss recall was 22.2%. Verifiable by artificially shifting transcript timestamps and measuring F1@5s delta.

Need to ensure word count >=1000. Let's estimate. THINK_TRACE ~450. SOURCE_OPERATORS ~350. RETROCAUSAL ~250. RECURSIVE ~250. CROSS_LAYER ~250. RLVR ~200. Total ~1750. Good.

No betting lines. No toy equations.

I need to include verbatim quotes. Since page markers aren't in the text, I'll cite by section, e.g., [§III.A], [§IV.A], [Table I], etc. I'll note that the machine conversion did not preserve page breaks, so section/table citations are used instead of [PAGE N].

Let's write it out.

Need to be careful with LaTeX formatting. Use proper LaTeX.

Let's draft each section.

THINK_TRACE: I'll write a dense multi-hop derivation.

Start: The paper frames soccer event spotting as zero-shot multimodal task...
Multi-hop: segmentation -> sampling -> storyboard -> MLLM -> output tuple -> Eq 1 -> consolidation -> Eq 2 -> judging.
Gray zones: future-dated arXiv (2610.37583, Oct 2026) with model names GPT-5.5 etc.; no parameter counts; API costs not generalizable; only three matches; heuristic excitement weights; consolidation hyperparameters (20s/30s) chosen without ablation on window size; prompt optimization limited because errors arise from evidence absence not instructions.

I'll include verbatim quotes like: "Each match is segmented into 15-second clips with a 5-second overlap, with 15 frames uniformly sampled per clip." and "the storyboard representation reduces inference cost by 72% compared with individual frames."

SOURCE_OPERATORS_AND_EQUATIONS:
Formal definitions.

RETROCAUSAL_GENEALOGY:
Historical lineage and traps.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION:
Physical, biomechanical, weather veto.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios.

Let's ensure I don't mention any betting terms. No odds, spreads, etc.

Also ensure ">= 1,000-WORD DEPTH across these exact XML sections". I'll aim for high word count.

Let's write.

One issue: The user says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since pages aren't provided as separate page images but as a single text with "PAGES: 21", and the machine conversion note says equations, tables and figures are NOT preserved. I should state that explicitly: "[Note: The machine-converted source does not preserve explicit [PAGE N] breaks; citations below use section (§), table (T), and figure (F) markers from the arXiv conversion.]" Then use verbatim quotes.

Let's produce the final answer.
</NATIVE_REASONING>

<note>The machine-converted source does not preserve explicit [PAGE N] page breaks; equations, tables, and figures are flagged as absent by the converter. Citations below therefore use section (§), table (T), and figure (F) markers from the arXiv text, with verbatim quotations drawn directly from the provided source.</note>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper reduces full-match soccer broadcast analysis to a pipeline of overlapping clip inference. First, a match V is partitioned into clips C = {C1, …, CN}; each clip is 15 s long with a 5 s overlap, and 15 frames are uniformly sampled per clip, giving a nominal 1 Hz visual sampling rate. Commentary is transcribed by Whisper Medium and aligned per clip. Each clip is rendered as a storyboard Si: 15 frames resized to 384 × 216 px, arranged chronologically in a 5 × 3 grid (1920 × 648 px), paired with aligned commentary Ti. The multimodal LLM then emits a structured tuple ŷi = (d̂i, êi, τ̂i, ĉi, r̂i): detection flag, event category, clip-relative timestamp τ̂i ∈ [0, tend i − start i], confidence, and supporting evidence. Absolute localization follows Eq. 1: t̂abs i = tstart i + τ̂i. Overlapping clips therefore produce redundant predictions for the same physical event, which are collapsed by temporal consolidation: same-class detections are clustered in a 20 s window (30 s for goals and corners), retaining the maximum-confidence detection per cluster. Post-consolidation candidates are passed to an excitement scorer S_exc = w1 S_event + w2 S_visual + w3 S_text (Eq. 2, w1 = 0.40, w2 = 0.35, w3 = 0.25), and consistency is judged by FlowJudge and a GPT-based evaluator using Spearman’s ρ and MAE on a 0–10 scale.

Gray zones are substantial. The source is arXiv:2610.37583v1 (27 Oct 2026), a future-dated preprint whose model names (GPT-5.5, GPT-5.6 Sol/Terra/Luna, Qwen3.5-4B, Qwen3-VL-8B) cannot be independently verified against public model cards; parameter counts, training data cutoffs, and API pricing ($18.01, $7.20, $0.72, $0.25 per match) are provider-specific and not generalizable scientific constants. The evaluation rests on only three manually annotated matches (130 events, six classes), so macro-averaged F1@5s of 72.02% for GPT-5.5 carries high variance; no confidence intervals or bootstrap significance tests are reported. The excitement weights are explicitly "heuristic design choices rather than learned parameters" (§III.F), meaning the scoring function has no derived optimality condition. Consolidation windows (20 s / 30 s) are fixed hyperparameters with no ablation on window size, so the temporal resolution limit of the system is under-characterized. Prompt optimization (GEPA, MIPROv2) improves some classes but not overall F1, which the authors attribute to errors arising from "the multimodal evidence itself rather than from the textual instructions alone" (§III.C/D) — i.e., sparse visual sampling and ambiguous outcomes are information bottlenecks that prompt engineering cannot overcome. Finally, recap/replay confusion persists despite explicit instructions to distinguish live events from retrospective footage (§V.F.b): among four inspected goal predictions, one was a recap false positive. These are not minor caveats; they define the exact breakdown regimes where the zero-shot formulation ceases to be reliable.

Verbatim anchors: "Each match is segmented into 15-second clips with a 5-second overlap, with 15 frames uniformly sampled per clip" (§III.A.2); "This compact representation allows the model to reason over temporal progression within a single visual input while reducing the number of separate visual inputs" (§III.A.2); "We further analyze the effects of model family, input representation, and prompt optimization, and introduce an evidence-grounded excitement-scoring stage that ranks detected events with natural-language explanations for highlight selection" (Abstract).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, assumptions, and breakdown regimes.

Clip segmentation operator. Let V be a match timeline measured in seconds (s). The segmentation operator partitions V into N overlapping clips:
C = {C_i}_{i=1}^{N}, C_i = (S_i, T_i, tstart_i, tend_i), tend_i − tstart_i = 15 s, stride = 5 s.
Visual sampling operator: 15 frames uniformly sampled per 15 s clip → effective temporal sampling interval Δt_frame = 1 s (nominal). Storyboard construction: each frame resized to 384 × 216 px; 5 × 3 grid → storyboard resolution 1920 × 648 px. Units: pixels (px) for spatial extent; seconds (s) for temporal extent.

Absolute temporal localization (Eq. 1). The model predicts a clip-relative timestamp τ̂_i ∈ [0, Δt_i] where Δt_i = tend_i − tstart_i = 15 s. Mapping to match timeline:
t̂abs_i = tstart_i + τ̂_i. (1)
Units: s. Assumption: clip start times tstart_i are known exactly from broadcast segmentation; τ̂_i is regressed or selected by the MLLM within the clip window. Breakdown regime: if the true event occurs between sampled frames (sub-1 s event or event falling in the inter-frame gap), τ̂_i cannot resolve it; temporal localization error is bounded below by the sampling interval unless interpolation is used (it is not).

Event matching criterion (evaluation protocol, §IV.A). Ground-truth events are temporal intervals; predictions are single timestamps. A prediction is a true positive iff category matches and t̂abs_i lies within the annotated interval or within tolerance ε = ±5 s. One-to-one matching: each prediction and each ground-truth event participates in at most one match. Unmatched predictions = FP; unmatched ground truth = FN. Metrics: Precision@5s, Recall@5s, F1@5s (dimensionless, [0,1] or %), mAP@5s (dimensionless), MAE in seconds (s). MAE is zero inside the interval and distance to nearest boundary otherwise.

Temporal consolidation operator. Predictions grouped by category, ordered by t̂abs_i. Same-class cluster radius R = 20 s (R_goal = R_corner = 30 s). Retain argmax confidence per cluster. Different classes never merged. Units: s for window radius. Breakdown regime: two distinct same-class events separated by < R are irreversibly merged into one detection (recall ceiling); two events separated by > R but belonging to the same broadcast sequence (e.g., corner followed immediately by shot) may be split or misattributed (class ambiguity).

Excitement scoring operator (Eq. 2). For each post-consolidation event candidate:
S_exc = w1 S_event + w2 S_visual + w3 S_text, w1 + w2 + w3 = 1. (2)
Experimental setting: w1 = 0.40, w2 = 0.35, w3 = 0.25. Domain: [0, 10] (judges score on 0–10 scale; Table VI/VII report means ≈ 2.36–8.62). Assumption: weights are heuristic, not learned; S_event encodes category importance, S_visual encodes visual intensity, S_text encodes transcript/emotional context. Breakdown regime: if commentary is misaligned or Whisper-transcription error is high, S_text becomes adversarial noise; if storyboard sampling omits the decisive visual frame, S_visual is uninformative; the linear convex combination cannot model interaction effects (e.g., high visual intensity should only matter if S_event confirms a salient category).

Model set and cost units (§III.E, Table I). Models: GPT-5.5, GPT-5.6 Sol, GPT-5.6 Terra, GPT-5.6 Luna, Qwen3.5-4B, Qwen3-VL-8B, Qwen3-VL-8B Embedding. Baselines: CALF (trained on SoccerNet), NetVLAD++ (trained on SoccerNet-v2). Cost reported in USD/match (API inference): GPT-5.5 $18.01, GPT-5.6 Sol $18.01, GPT-5.6 Terra $7.20, GPT-5.6 Luna $0.72, Qwen3.5-4B $0.25, Qwen3-VL-8B $0.25. These are not intrinsic model properties; they depend on third-party API pricing and token counts.

Baseline cross-dataset caveat. CALF and NetVLAD++ are evaluated without retraining on the three matches; their scores represent transfer under annotation-convention shift, not in-domain supervised performance (§IV.D).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

Lineage. The work descends from SoccerNet [1] and SoccerNet-v2 [2], which established action-spotting benchmarks and temporal annotations for soccer broadcasts. Subsequent supervised methods improved temporal modeling via context-aware loss (CALF [3]), feature aggregation [11], and transformers [10, 12]; multimodal variants added audio and commentary [4, 17], while MatchVision [5] and SoccerMaster [6] employed soccer-specific representation learning requiring domain-specific data and training. Parallel work in multimodal temporal reasoning (TimeChat [7], Grounded-VideoLLM [15], TimeSuite [16]) and refereeing (X-VARS [13]) demonstrated that general MLLMs can reason about temporal information in long videos. Domain adaptation of VLMs to soccer was studied by Jiang et al. [14]. The present paper's zero-shot stance contrasts with all of these: it freezes model parameters and instead varies input representation (storyboard vs. individual frames), model family (GPT-5.x vs. Qwen), and prompt strategy. Prompt optimization draws on GEPA [8] and MIPROv2 [9], which evolve instructions reflectively or via demonstration optimization without gradient updates to model weights. Excitement scoring is evaluated with FlowJudge [20] and a GPT-based judge, with agreement measured by Spearman’s rank correlation ρ [19] and MAE.

Multi-week traps. Three structural traps emerge if this framework is deployed across multi-week broadcast archives rather than three matches. (1) Temporal aliasing from the 5 s stride and 20/30 s consolidation windows: in an archive spanning weeks, the same match may be ingested multiple times (broadcast, rebroadcast, international feed). Overlapping clips plus fixed consolidation radii will either merge distinct events across broadcast versions or duplicate the same event if consolidation windows fail to align across different segmentation offsets. (2) Recap/reapparition drift: §V.F.b documents that recap segments produce false-positive goal detections. Over weeks, recap shows and highlight packages systematically inflate FP counts for goals and corners (the classes with the largest consolidation windows, 30 s), because retrospective footage re-triggers the detector outside the original event's annotated interval. (3) Annotation-convention overfitting: the six-class taxonomy (goal, shot, miss, corner, kickoff, yellow card) and manual annotations come from three professionally produced multi-camera YouTube broadcasts. Leagues with different camera styles, lower production quality, or different commentary languages shift the P(R|evidence) distribution; prompt optimization on these three matches (GEPA/MIPROv2 dev splits) may tune instructions to idiosyncratic broadcaster conventions that do not transfer, as the conclusion explicitly limits generalization "across leagues, broadcast styles, and commentary conditions" (§VI).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the clock.

Crisis habit regression. Under multimodal uncertainty—sparse 1 Hz storyboard sampling, ambiguous shot-vs-miss outcomes, and recap contamination—the detector does not reason neutrally; it regresses toward high-prior, visually salient classes. Table II shows Qwen3.5-4B obtains 90.5% goal recall but only 34.1% shot recall, and Qwen3-VL-8B recovers zero kickoffs, misses, and shots. GPT-family models confuse misses with shots (Match 1: four of seven misses classified as shots, §V.F.a), indicating a habit of labeling any attacking action as a shot when final trajectory evidence is absent from sparse frames. This is crisis habit regression: when evidence is degraded, the model falls back to the most frequent or visually dominant attacking label rather than abstaining.

Counter-trap. The paper's methodological counter-trap is the two-prompt decomposition (recognition separated from verification) and the manually designed storyboard prompt. Storyboard-2 (§III.D.b, Table IV) becomes the most conservative detector: highest precision (62.24%), fewest predictions (54/match), lowest temporal MAE (0.14 s), at the cost of recall (71.5%). MIPROv2 runs the opposite counter-trap, favoring broader coverage (80.37% recall, 53.09% precision, 65 predictions/match). GEPA improves temporal localization (MAE 0.23 s vs. 0.47 s storyboard) but has lower aggregate F1 (62.17%). These are not improvements in a single dimension; they are precision-recall trade-offs induced by prompt structure. The deeper counter-trap would be an explicit broadcast-state classifier (live vs. replay vs. recap) gating the detector, which the authors note as future work but do not implement (§V.F.b, §VI).

The clock. The system imposes an explicit temporal governance layer: Eq. 1 maps every clip-relative τ̂_i onto the absolute match timeline, and consolidation enforces a hard clock—20 s same-class windows, 30 s for goals/corners—beyond which duplicate detections are suppressed. The model must therefore maintain a theory of mind about the viewer's temporal experience: it must decide whether a clip contains a live event or retrospective footage, and its excitement score attempts to model a second-order theory of mind about what a human judge or audience will find highlight-worthy (Table VI: goals 7.87, yellow cards 2.36). The clock is not merely a post-processing convenience; it is the boundary condition that determines whether two temporally proximate detections are one event or two, and whether a recap is a new detection or a suppressed duplicate.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto analysis; veto-proofness assessment.

Physical layer veto. The input representation fixes a hard physical limit: 15 frames per 15 s clip (Δt_frame = 1 s nominal), each frame 384 × 216 px, storyboard grid 1920 × 648 px. Any event whose decisive visual signature lasts less than ~1 s or falls between sampled frames is physically unrepresentable in Si. Off-the-ball movement, ball contact instants, or goalkeeper reaction onsets occurring in inter-frame gaps cannot be vetoed by the model because they never enter the context window. This is a sampling-theoretic breakdown: the system is band-limited at 1 Hz, yet soccer events can have sub-second critical phases.

Biomechanical layer veto. Distinguishing shot from miss requires evidence of the ball's final trajectory relative to the goal, and distinguishing corner outcomes requires observing the immediate post-set-piece attacking sequence. §V.F.a notes that sparse storyboard sampling "may therefore capture the attacking action while providing less explicit evidence of its final outcome." A biomechanical veto triggers when ball flight after contact is not present in any sampled frame: shot/miss classification becomes mathematically underdetermined from Si alone, regardless of MLLM capability. Confusion matrices (§V.F.a) confirm this: misses are frequently labeled shots.

Weather/environmental layer veto. The paper studies "professionally produced multi-camera broadcast feeds with standard broadcast editing, including camera cuts, close-up views, replays, and retrospective recap sequences" (§III.A). It does not model adverse weather (rain-obscured pitch, fog, snow), stadium lighting variation, or low-bitrate broadcast artifacts. These are external veto conditions: degraded visual intensity lowers S_visual in Eq. 2, and corrupted commentary lowers S_text, while the linear combination has no mechanism to detect that both modalities are simultaneously unreliable. The confidence score ĉi is not shown to be calibrated as a veto threshold under such conditions.

Veto-proofness. The framework has no explicit veto operator. Its only abstention mechanism is the "No Important Event" class label, which is itself subject to error (§V.F.a notes shots and goals classified as No Important Event). Because confidence is not thresholded by a validated operating point and excitement scores are heuristic convex combinations, the system is not veto-proof: it will emit predictions even when physical sampling, biomechanical evidence, or environmental quality fall below reliable inference thresholds.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning with verifiable rewards) veto scenarios with counterfactual predictions.

Scenario 1 — Recap-dense broadcast schedule. Construct a counterfactual match feed in which 25% of runtime consists of immediate goal recaps and highlight replays, with recap occurrences spaced more than 30 s from the original broadcast instance so the 30 s consolidation window does not merge them. Verifiable signal: count false positives per unique annotated goal; compare against baseline three-match FP rate (unmatched predictions after consolidation, Table I). Prediction: goal-category FP rate will rise significantly above the reported GPT-5.5 operating point because explicit prompt instructions to distinguish live from recap footage were shown to be insufficient (§V.F.b: one of four inspected goals was a recap false positive); the verifiable veto is that F1@5s for goals drops below 50% despite high recall, triggering model rollback.

Scenario 2 — Sub-sampled critical event insertion. Take a broadcast clip and synthetically insert a shot-miss sequence lasting 400 ms entirely within the inter-frame gap between two storyboard frames (i.e., no sampled frame contains ball contact or outcome). Verifiable signal: frame-exact ground-truth annotation of the inserted event versus detector output; measure recall@5s for the shot and miss classes. Prediction: both shot and miss recall for that clip fall to 0%, regardless of model family, because the physical sampling operator (1 Hz) provides zero visual evidence; this violates the assumption in Eq. 1 that τ̂_i ∈ [0, Δt_i] can localize any event within the clip, and would veto deployment for any application requiring detection of sub-second events.

Scenario 3 — Commentary temporal misalignment. Shift the Whisper-aligned transcript Ti by +7 s relative to Si (simulating broadcast dub delay or transcription drift) while keeping visual input unchanged. Verifiable signal: recompute Eq. 2 excitement scores and detection F1@5s; isolate class-wise miss recall, which Table III shows is highly modality-dependent (transcript-only miss recall 22.2% vs. 77.8% with frames+transcript). Prediction: miss-class F1@5s degrades by at least 15–20 percentage points because S_text supplies contradictory semantic evidence for outcome-sensitive events; the combined S_exc ranking reorders highlights incorrectly, triggering a veto on excitement-score-based highlight selection until transcript alignment is verified within ±2 s.
</RLVR_COUNTERFACTUAL_VETOES>