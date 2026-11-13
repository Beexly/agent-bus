---
source: "2026 - Towards Comprehensive Basketball Understanding - Hu et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 26
model: deepseek/deepseek-v4.1-flash-1017
words: 9101
---

<NATIVE_REASONING>
We need answer to user. Need infer request? User gave DRIVE SOURCE and source text, with system instructions defining output sections. They didn't explicitly ask question, but presumably want analysis of paper using framework, with exact XML sections, >=1000 words, cite pages. Need produce deep derivation, equations, source citations. Must avoid betting lines. Need no fake ratios. Need mention "retrocausal genealogy", "recursive theory of mind", "cross-layer veto", "RLVR counterfactual vetoes". Need integrate paper content: BasketballBench/BasketballSkills. Need deep multi-hop derivation and gray-zone audit >=400 words in THINK_TRACE. Overall >=1000 words. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes. Need ensure no betting lines. Could interpret "DRIVE SOURCE" as request to analyze paper. We need produce all sections exact XML. Need maybe frame as "frontier reasoning foundry" and audit of paper claims. Need mention "source operators and equations" from paper: tool typed operator τ_j: X_j→O_j; o_i = τ_{j_i}(u_i); y=F_{πθ}(x;S,T); skill selection s_k=Select(x,S), y=πθ(x;load(s_k),T); parse rate etc; Acc = ParseRate × ParsedAcc; Q7 = 1/2(...); Q8 LCS F1; class weight wc = clip(N/(6nc),0.2,5.0); IoU threshold 0.3; face threshold 0.6; max 12 turns 10 tools; metrics. Units: seconds, percentages, confidence dimensionless, counts. Need exact singularity/breakdown regimes: if Nparsed=0 parse rate zero, metrics undefined; if N_ref+N_pred zero denominators defined zero; if no face match <=0.6 returns null; if scorebug unreadable returns error; if >10 tools limit, fallback; if event participant unresolved stop not guess; constant scorebug occlusion; video timestamp vs game clock non-convertible; period alias parsing; track event detection upstream errors propagate. Need "gray-zone audit" of whether benchmark labels and skills are robust, multi-hop. Need discuss "comprehensive basketball understanding" composition. Need maybe mention MLLM scores and BasketballSkills numbers. Need "retrocausal genealogy" historical scientific lineage: sports video understanding, event detection, MOT, jersey recognition, procedural visual reasoning (ReAct, VisProg, ProViQ), Voyager/MMSkills, sports agents. Multi-week traps: benchmark contamination, scorebug OCR artifacts, PBP lag vs visible event, label leakage via LockerVision not exposed, test split disjointness, target-player highlighting shows grounding bottleneck. Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock. Need map: agent controller is ToM-like planning; skill prompts enforce evidence order; failure in Example 3 overly cautious scorebug use and wrong event; "clock" maybe game clock/temporal localization; counter-trap = distractor answer choices; habit regression = MLLM dependence on visual salience/prior knowledge; agent constraints. Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. In basketball, weather not relevant indoor; physical: occlusion, motion blur, camera view, player crowding, jersey number partial visibility, scorebug logos, broadcast graphics; biomechanical: shot-zone geometry, court regions, player-ball overlap; weather: indoor arena no weather, but broadcast lighting? Need adjudicate vetoes: if face distance >0.6, identity veto; if jersey number alone not unique, need color-number pair; if event participant unresolved, stop; if scorebug unreadable, error; if no skip. Need "RLVR counterfactual vetoes": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need propose veto scenarios: (1) remove target-player highlight from Q5/Q6 and measure delta; prediction: Q6 drops strongly for MLLMs, agent stable if tracking/jersey correct. But RLVR means verifiable reward veto? We can define counterfactual test where a "reward hack" would be accepted? Need 3 verifiable veto scenarios with predictions. Need be careful no betting. Could propose:
- Veto A: Identity-only shortcut veto: perturb jersey numbers/colors in answer choices so number alone maps to wrong player; if system still correct only via knowledge? Prediction: general MLLMs drop, BasketballSkills maintains if color-number pair + roster query used; if it uses number alone, drop.
- Veto B: Temporal alias/format veto: re-render Q7 answers without period aliases, require strict schema; prediction: Qwen2.5-VL parse rate drops from 99.9% to 89.2% due to aliases; BasketballSkills remains high if schema-compliant. Need cite page 26 quote: recovers 84 of 790 Qwen2.5-VL-7B outputs raising Parse Rate 89.2 to 99.9. Verifiable via parse rate.
- Veto C: Event-participant binding veto: replace participant labels with swapped identities in Q8 while preserving event types; prediction: Type F1 remains high but Type+Participant F1 and PA collapse for models that lack grounding; BasketballSkills PA 70.6. Or "highlight target player" as counterfactual: Table 4 mean Q6 +19.7; if highlight removed, agent unaffected? Actually BasketballSkills not in Table 4. Prediction: MLLM Q6 drops by ~19.7 points on average, demonstrating veto of visual search shortcut. But "RLVR counterfactual vetoes" maybe use verifiable reward to veto. We can formulate as "if a policy achieves high reward by exploiting a non-causal cue, the veto removes cue and reward must not persist." Need predictions quantitative. Use paper numbers.

Need maybe structure as an audit of paper. We need include exact quotes with page markers. Need quote verbatim from source. Need ensure no fabricated page quotes. We can quote from pages:
Page 1 abstract: "Understanding a basketball game requires recognizing events, localizing actions, identifying players, and relating these to structured game knowledge." "Experiments show that current MLLMs struggle particularly on questions requiring the integration of multiple capabilities, whereas BasketballSkills outperforms them".
Page 4: "Formally, each tool is a typed operator τj : Xj →Oj, where Xj and Oj denote its input and output spaces. When invoked with arguments ui, a tool returns a structured result oi = τji(ui)," and "y = Fπθ(x; S, T )". Need exact quote maybe linebreak. Page 4 has equation (1) and (2). Page 6? "Each skill specifies tool ordering, intermediate evidence flow, and task-specific output construction." Page 5. Page 5 skill descriptions. Page 6 "Each call is validated by a lightweight verifier, and the final answer is generated once sufficient evidence has been collected." Page 12 data sources. Page 13: "Official PBP timestamps may lag the visually observable occurrence of an event by one or two seconds, and the 1-fps OCR mapping introduces additional temporal quantization." Page 13: "These manually corrected annotations serve as the final reference labels". Page 14 Q7. Page 15 Q8 prompt. Page 16 training details. Page 17 class weight formula. Page 18 system prompt rules. Page 19 tool prompt. Page 20-23 skill prompts. Page 23-24 metrics. Page 25-26 detailed results.
Need page cite exact. The source text includes page numbers. Use [PAGE 4] etc. We can quote verbatim. Need not cite every claim but key.

Need ">=1,000-word DEPTH across exact XML sections" means output only XML sections? Probably yes. We can include all sections in order. Need no markdown? XML fine. Need avoid betting lines. Should not mention "odds". Need mention no betting lines? No. Should not include "spread". Good.

Need craft detailed content. Let's plan sections:

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit >=400 words. Start with task: from paper to formal audit. Multi-hop:
1. Paper defines comprehensive basketball understanding as integration of heterogeneous evidence [PAGE 1]. Benchmark has 7,980 QA across ten tasks: Q1-Q4 etc [PAGE 4 table]. 
2. Agent architecture: tools T, skills S, controller πθ; selection s_k; typed tools; verifier. 
3. Derivation: if each tool is noisy, accuracy of composite skill is bounded by identity/event/tracking chain; Q6/Q10 require track→event→jersey→team→knowledge; errors propagate. Example 3 [PAGE 8] shows scorebug reading unnecessary and event detection error propagates to wrong final. 
4. Gray-zone audit: benchmark validity: human QC details; Q5/Q6 no instance-level review; Q7 fully manual; Q8 25.8% corrected; Q4 66.7% retention; Q9 all manual. Attack surfaces: PBP lag; scorebug OCR mapping; aliases; JSON recovery; class imbalance; model-assisted labels. 
5. Contradiction/gap: agent wins 8/10 but Q7 47.8 vs GPT 77.5; Q5 69.8; Q8 45.9; lower on Q4/Q7? Actually BasketballSkills Q4 88.0 vs GPT 93.5/Gemini 94.0; Q7 47.8 vs GPT 77.5. Q9 tie 95.0. Need note "best on eight of ten including tie on Q9"; "on Q7 and Q4 agent underperforms" maybe. Need deep audit: Tool error propagation and controller overhead; Table 5 ablation skills reduce calls but performance comparable/slightly down on VideoQA. 
6. Need "exact singularity/breakdown regimes" maybe in later section, but mention in THINK? Fine.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX eqs. Need include units. Cite pages. Structure:
- Query x=(q,m); T={τ_1...τ_N}; S={s_1...s_M}; controller πθ. Eq 1: o_i = τ_{j_i}(u_i), X_j→O_j. Eq 2: y=Fπθ(x;S,T). Eq 3: s_k=Select(x,S), y=πθ(x;load(s_k),T). Units: τ outputs structured records; confidence dimensionless [0,1]; timestamps seconds; game clock MM:SS; scores integers; F1/accuracy percentages.
- Constraints: max 12 turns, 10 tool calls [PAGE 18? Page 15 B.1 says at most 12 controller turns and 10 tool calls. PAGE 15]. Face threshold: returns nearest if distance ≤0.6 else null; confidence=1-best distance clipped [0,1] [PAGE 17]. Track filter: SAM trajectory must overlap RF-DETR player detection ≥0.3 IoU in at least half observed frames [PAGE 15-16]. Detector metrics: mAP etc [PAGE 16]. Shot-zone class weight eq. 
- Metrics: ParseRate, ParsedAcc, Acc; Acc=ParseRate×ParsedAcc [PAGE 23]. Q4 full exact match eq C.3 maybe. Q7 Acc@1s and macro; Q8 LCS F1 equations. Need formal LaTeX.
- Singularity/breakdown regimes: N=0 for ParseRate; Nparsed=0 for ParsedAcc undefined (paper says zero denominator defined zero for Q8); Q7 undefined for VideoLLaMA3; face gallery empty or distance>0.6 -> null; scorebug no readable -> error; tool calls >10 -> fallback; event has no resolvable participant -> stop; track overlap <0.3 -> trajectory dropped; shot-zone class imbalance and rare corner threes; JSON invalid -> empty sequence; game-clock period mismatch excluded from MAE; non-convertible clocks. Need exact pages for "zero denominator defined as zero" page 24. "PA undefined because no event-type-aligned prediction–reference pairs" page 26. Good.

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage and multi-week traps. Need discuss:
- Sports video understanding lineage: event detection and key actor localization (Ramanathan 2016), MultiSports (Li 2021), SportsMOT (Cui 2023), jersey number recognition (Koshkina & Elder 2024), court calibration (Sha 2020), player identification (Senocak 2018), knowledge-enhanced description (Wang 2021; Xi 2025), fine-grained player eval (Pan et al. 2025) [PAGE 2]. 
- Multimodal reasoning lineage: ReAct (Yao 2023), VisProg (Gupta & Kembhavi 2023), ProViQ (Choudhury 2024), Voyager (Wang 2024), MMSkills (Zhang 2026a), SportMV-Agent (Chen 2026) [PAGE 2]. 
- BasketballBench lineage: prior benchmarks Sports-QA, SPORTU, SportR, SportsTime, SportMV-Bench; separate capabilities. 
- Retrocausal genealogy: The paper's "skills" are a retroactive formalization of recurring capabilities; "composite skills" encode historical pipeline order. Multi-week traps: (i) benchmark contamination via BasketEvent test split and RF-DETR training disjointness [PAGE 16]; (ii) PBP lag and OCR quantization causing label error [PAGE 13]; (iii) scorebug logos and OCR artifacts; (iv) period alias format compliance [PAGE 26]; (v) JSON recovery may inflate parse but not F1; (vi) target-player highlight artificial cue [PAGE 7 Table 4]; (vii) class imbalance and weighted loss; (viii) "face gallery" official headshots vs evaluation photos distinct [PAGE 2]. Need "multi-week traps" maybe over multiple weeks of research: label drift, replay/highlight contamination, roster changes mid-season, uniform edition changes, overtime period aliases, missing scorebugs. 
- Need mention "retrocausal" in sense current agent's skill decomposition explains why earlier separate tasks exist. Could say "the genealogy runs backward from the composite agent to the atomic benchmarks". 
- Need cite exact pages. Use [PAGE 2], [PAGE 13], [PAGE 16], [PAGE 26]. 
- Need avoid "betting" words.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Need interpret:
- "Recursive theory of mind" in agent: controller models what evidence is needed, models tool reliability, models user's expected answer format; skills are procedural ToM constraints. 
- Crisis habit regression: under uncertainty (occlusion, fast motion, similar jerseys) MLLM reverts to visual salience/priors/answer-choice guessing; paper says MLLMs perform worse on Q6 than Q9 because binding event to player is hard; target highlighting improves markedly [PAGE 6-7]. Agent can also regress: Example 3 unnecessarily invokes Scorebug Reading, overly cautious; upstream event detection error propagates [PAGE 8]. 
- Counter-trap: distractor design: same-team and two opposing-team distractors; jersey number alone not unique; answer choices balanced; prompts forbid inferring identity from choices. The agent's skill constraints "Do not infer identity from answer choices, reputation, appearance" [PAGE 21-23]. Counter-trap test: if answer choices are permuted, accuracy should not change. 
- Clock: temporal uncertainty; game clock vs video time; PBP lag 1-2s; Q7 Acc@1s tolerance 1s; period aliases; interval vs point predictions. Agent's temporal localization tool is not detector; "Neither time system is arithmetically converted into the other" [PAGE 18]. 
- Recursive ToM: controller must decide when evidence sufficient; stopping conditions; verifier; max calls; "If evidence is insufficient... state so honestly and provide reasonable fallback" [PAGE 19]. Crisis: if tool fails, retry or switch; risk of looping; clock pressure max 10 calls. 
- Need maybe compare human annotator ToM: annotators manually reannotate 790 events due to PBP lag. 
- Need include "crisis habit regression vs counter-trap vs clock" explicitly as three failure modes. 
- Need cite pages.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Need interpret cross-layer: physical (image formation, occlusion), biomechanical (player pose/jersey number visibility, shot mechanics), weather (indoor arena no weather; broadcast environment). Need adjudicate vetoes for claims:
- Physical veto: if ball/player occluded, tracking cannot ground; SAM+RF-DETR requires ≥0.3 IoU half frames; otherwise trajectory dropped [PAGE 15-16]. This vetoes any identity claim from missing track. 
- Biomechanical veto: jersey number recognition from 8 crops; if number not visible due to pose/occlusion, returns null; skill treats (color, number) pair as identity; number alone not unique [PAGE 19-20]. Shot-zone classification: court geometry and camera perspective; corner threes most distinctive 90/83%, paint 44% confused with RA and mid-range [PAGE 25 Table C.2]. Thus physical geometry supports corner zones but paint boundary is gray. 
- Weather veto: basketball is indoor; weather variables not in benchmark; no weather layer. But "broadcast weather" not applicable; lighting/arena conditions can affect OCR but not modeled. So any claim that weather explains performance is vetoed; the paper provides no weather covariates. Need maybe state "indoor sport: weather is a null layer; only venue/attendance metadata in Match-Situation QA, not weather." 
- Cross-layer adjudication: a prediction is admissible only if all lower layers pass: detector track exists, event detected, jersey pair resolved, team mapping from prompt, knowledge DB query. If any layer vetoes, final answer must be fallback/stop. Example 3 scorebug unnecessary but event error propagated; "upstream tool failures can propagate through subsequent grounding and answer generation" [PAGE 6-7]. 
- Need "proof" with equations? Could formalize veto as conjunction: V = V_track ∧ V_event ∧ V_identity ∧ V_team ∧ V_db. If any false, answer invalid. Maybe include in this section or source? Need formal. Use boolean. 
- Need cite pages. 
- Need mention no weather data; "weather" not in source. Fine.

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions. Need define RLVR = reinforcement learning with verifiable rewards. Each scenario: counterfactual perturbation, verifiable metric, expected outcome. Need predictions quantitative using paper data. 
Scenario 1: Identity shortcut veto (jersey-number-only). Perturb Q6/Q10 answer choices so correct team-jersey pair shares number with distractor from other team; reward only if final team+jersey correct. Prediction: MLLMs rely on number/visual salience; Q6 drop. Paper Table 4: Q6 raw mean 56.3 to target 76.0 (+19.7) showing grounding bottleneck. But that's target highlight, not number. Need precise. Could say "If a policy passes by number-only matching, then swap team-color mapping across two teams in prompt (verifiable; no ground-truth change) and require correct team. Prediction: number-only policy accuracy falls to near chance (25% for four-way); agent with color-number binding should preserve high accuracy; paper reports Q6 best MLLM 85.4, agent 91.8, but distractors include one same-team and two opposing-team [PAGE 14], so team color is necessary." Good. 
Scenario 2: Temporal format/alias veto. Counterfactual: disable Period-Alias Normalization and Conservative JSON Recovery? Verifiable parse rate. Prediction: Qwen2.5-VL-7B Q7 Parse Rate drops from 99.9% to 89.2% and Acc@1s from 44.9% to 39.1% [PAGE 26]. Qwen3.5-9B video timestamp parse 47.5% due to interval outputs [PAGE 26]. Thus reward must include strict schema; if reward only accuracy after repair, policy can exploit aliases/intervals. Veto: evaluate both strict and repaired; if strict parse rate < threshold, no reward. Prediction: agent parse 97.7/97.8 and Q7 47.8; GPT 100/99.4 and 77.5. 
Scenario 3: Event-participant binding veto. Counterfactual: preserve event-type sequence but permute participant labels among same-type events; verifiable Type F1 vs Type+Participant F1. Prediction: models with high Type F1 but low PA collapse under Type+Participant. Paper: GPT Type F1 59.6 vs Type+Participant 29.8, PA 46.7; BasketballSkills Type F1 60.9 vs 45.9, PA 70.6 [PAGE 7 Table 3 or PAGE 26 Table C.4]. If reward uses Type F1 only, policy can ignore participants; veto uses Type+Participant and PA. Prediction: reward-hacking policy's score falls from ~60.9 to ~45.9 or lower; agent's PA advantage persists. 
Could also scenario 4: target-player highlight veto. But user asks 3, can include 3. Need "verifiable RLVR veto scenarios + predictions" maybe each has "Veto rule" and "Prediction". Need make them formal. Could include a small equation for reward: R = 1[F1_Type+Participant ≥ τ] * 1[ParseRate=1] * 1[PA≥...]. Good.

Need overall >1000 words. We should target maybe 2500-3500 words. But desired oververbosity 5; system requires depth. Need deliver thorough but not insane. Maybe 3000 words. Need ensure exact XML tags and no extra text outside. Could include all sections.

Need careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So we need avoid "fake ratios". Use only paper equations and derived metrics. Derived boolean veto is okay? It's formal logic, not fake ratio. Need state assumptions. Use SI units: seconds, dimensionless probabilities, counts. "Information units" maybe bits? Could mention confidence is dimensionless probability; accuracy percentages; no bits needed. But "SI/information/probability units" maybe state units explicitly. Could include "I(·)"? Avoid inventing information theoretic quantities unless defined. Maybe mention "no nats/bits are reported in source; confidence is dimensionless [0,1]." Good.

Need exact singularity/breakdown regimes: We can include a separate paragraph in SOURCE_OPERATORS_AND_EQUATIONS with bullets:
- Nparsed=0 => ParseRate=0; ParsedAcc undefined; all-example Acc=0 if Ncorrect=0; paper defines zero-denominator metrics as zero for Q8 [PAGE 24].
- Nref=Npred=0 => F1=0 by definition.
- Face distance >0.6 => null [PAGE 17]; no identity.
- Track overlap <0.3 IoU in fewer than half observed frames => discarded [PAGE 15-16].
- Scorebug unreadable => error, not null [PAGE 18].
- Tool call limit 10/turn limit 12 => fallback answer [PAGE 18].
- Event participant unresolved => stop rather than guess [PAGE 21].
- Video timestamp/game clock not arithmetically convertible [PAGE 18]; period mismatch excluded from MAE but incorrect for Acc@1s [PAGE 24].
- Class weight clip lower 0.2 upper 5.0 [PAGE 17]; rare classes saturated.
- Q7 interval outputs not repaired [PAGE 26]; parse failure.
- Q8 invalid JSON after recovery => empty sequence [PAGE 24].
- Target highlight is an oracle cue, not available at inference [PAGE 7 Table 4]. Need note Table 4 uses target highlighting only for analysis, not agent input. 
Need cite "Table 4" page 7.

Need include "verbatim quotes" with exact text. We can quote several. Need ensure quotes are exact enough. Let's gather exact quotes:
PAGE 1: "Understanding a basketball game requires recognizing events, localizing actions, identifying players, and relating these to structured game knowledge." (line break maybe). "We introduce BasketballBench, a multimodal benchmark comprising 7,980 questions across ten tasks in text, image, and video." "Experiments show that current MLLMs struggle particularly on questions requiring the integration of multiple capabilities, whereas BasketballSkills outperforms them, highlighting the effectiveness of explicitly composing domain-specific capabilities for comprehensive basketball understanding." Good.
PAGE 4: "Formally, each tool is a typed operator τj : Xj →Oj, where Xj and Oj denote its input and output spaces. When invoked with arguments ui, a tool returns a structured result oi = τji(ui)," Maybe exact. "y = Fπθ(x; S, T )," Good.
PAGE 5: "Each skill specifies tool ordering, intermediate evidence flow, and task-specific output construction." Exact? Page 5 text: "Each skill specifies tool ordering, intermediate evidence flow, and task-specific output construction." yes.
PAGE 6: "Each call is validated by a lightweight verifier, and the final answer is generated once sufficient evidence has been collected." Exact page 6.
PAGE 7 Table 3: "Full-event F1 requires both event type and participants to match, whereas event-type F1 ignores participant identity." exact.
PAGE 8 Example 3: "BasketballSkills unnecessarily invokes Scorebug Reading to identify the two teams, reflecting an overly cautious tool-use strategy. The same example also produces an incorrect final answer because Track-Level Event Detection returns an erroneous result, illustrating how upstream tool failures can propagate through subsequent grounding and answer gener..." Need page 6-7 actually. On PAGE 6: "The third case illustrates a failure: BasketballSkills unnecessarily invokes Scorebug Reading to identify the two teams, reflecting an overly cautious tool-use strategy. The same example also produces an incorrect final answer because Track-Level Event Detection returns an erroneous result, illustrating how upstream tool failures can propagate through subsequent grounding and answer gener-" continues page 7 "ation." We can quote with [PAGE 6]. Good.
PAGE 13: "Official PBP timestamps may lag the visually observable occurrence of an event by one or two seconds, and the 1-fps OCR mapping introduces additional temporal quantization." Exact. "These manually corrected annotations serve as the final reference labels for the video-timestamp and game-clock modes of Q7." Exact? Page 13 text: "These manually corrected annotations serve as the final reference labels for the video-timestamp and game-clock modes of Q7." yes.
PAGE 14 Q6: "The ground truth shooter is paired with one same-team and two opposing-team distractors, testing team discrimination and jersey recognition." Exact.
PAGE 15: "Each run allows at most 12 controller turns and 10 tool calls." Exact. "The lightweight verifier mentioned in the main paper is a fixed Python program that checks each function call before execution." Exact.
PAGE 16: "a SAM trajectory must overlap an RF-DETR player detection by at least 0.3 IoU in at least half of its observed frames" Exact across page break? Page 15-16: "To remove referees, bench players, and staff, a SAM trajectory must overlap an RF-DETR player detection by at least 0.3 IoU in at least half of its observed frames; ball trajectories come directly from detector–tracker output." Good.
PAGE 17: "It returns the nearest identity only at distance ≤0.6, otherwise null; confidence is one minus the best distance, clipped to [0, 1]." Exact. Page 17.
PAGE 17 class weight: "wc = clip ( N / 6nc , 0.2, 5.0 )" exact. 
PAGE 18: "Neither time system is arithmetically converted into the other, and a fixed prompt selects the output schema." Exact. Also "When the input has no readable scorebug, returns an error ("no scorebug visible in the input") instead of null fields." Exact page 20 maybe. Actually page 20 tool prompt: "When the input has no readable scorebug, returns an error ("no scorebug visible in the input") instead of null fields." Good.
PAGE 21: "Do not treat a jersey number alone as a unique player identity." exact. "Stop rather than guess if the event participant, team, jersey number, or roster identity cannot be resolved." Exact page 21.
PAGE 23: "Acc = ParseRate × ParsedAcc, and unparsable, missing, or failed responses receive zero credit in Acc." Exact page 23.
PAGE 24: "Metrics with a zero denominator are defined as zero." Exact page 24. "LCS gives partial credit for correctly predicted events while penalizing missing, additional, and incorrectly ordered events." Exact.
PAGE 26: "Period-Alias Normalization recovers 84 of 790 Qwen2.5-VL-7B outputs, raising its Parse Rate from 89.2% to 99.9% and its all-example Acc@1s from 39.1% to 44.9%." Exact. "although all 790 requests receive a response, 415 predictions specify a temporal interval, such as [4.0, 4.5], rather than the requested single timestamp. Consequently, only 47.5% of its outputs are parseable" exact? Page 26: "Although all 790 requests receive a response, 415 predictions specify a temporal interval, such as [4.0, 4.5], rather than the requested single timestamp. Consequently, only 47.5% of its outputs are parseable, reducing its all-example Acc@1s to 22.9%." Good.
PAGE 25 Table C.2: corner threes most distinctive (90 left; 83 right), paint hardest 44.0, confused with RA and mid-range. Exact page 26? Table on page 25, text on page 26 says "As shown in Table C.2, Corner Threes are most distinctive (90.0% left; 83.0% right), whereas In The Paint (Non-RA) is hardest (44.0%), chiefly confused with adjacent Restricted Area and Mid-Range regions." Page 26. Use [PAGE 26].
PAGE 7 Table 4: "Mean 29.6 36.4 +6.8 56.3 76.0 +19.7" exact? Table 4 page 7. We can quote "Mean 29.6 36.4 +6.8 56.3 76.0 +19.7" maybe not verbatim prose. Use numeric citation not quote. Need not quote every.

Need also mention "human quality control" from page 3-4: Q4 300 candidates selected 200 correct, retention 66.7%; Q8 258 corrected (25.8%); Q7 790 target event instances, 1,580 questions. This is relevant audit. Cite [PAGE 4]. Exact quote: "Qwen3.6-27B produces 300 candidate examples, from which human reviewers select 200 correct and readable examples for inclusion in the benchmark, corresponding to a retention rate of 66.7%." Page 4. "This review corrects 258 examples (25.8%), while the remaining 742 are verified without modification." Page 4. Good.

Need "Cross-layer veto" formal proof. Could write:
Let a composite answer be admissible iff
\[
V = V_{\text{track}} \land V_{\text{event}} \land V_{\text{person}} \land V_{\text{team}} \land V_{\text{db}} \land V_{\text{format}}
\]
where each is Boolean. 
- V_track: track has ≥0.3 IoU with RF-DETR in ≥half frames [PAGE 15-16].
- V_event: detect_events returns event with participant track; if no event, no shot zone [PAGE 19].
- V_person: jersey color-number pair resolved; number alone insufficient [PAGE 21].
- V_team: color→team mapping from prompt only [PAGE 22].
- V_db: knowledge query returns record; if no match error [PAGE 19].
- V_format: output schema parseable; unparseable zero [PAGE 23].
If any false, final answer must be null/fallback, not guessed. This is formal. This is not a fake ratio. Units: Boolean, dimensionless.

Need "physical/biomechanical/weather veto proof":
- Physical: 1280×720 25fps clips 3.48–18.96s mean 9.45 SD 1.81 [PAGE 12]. Fast motion/occlusion; tracking filter. Scorebug OCR. 
- Biomechanical: jersey number visibility depends on pose and crop; 8 crops; if partially visible, aggregate; if unreadable null. Shot zone geometry: six regions; corner threes high; paint low. 
- Weather: indoor; no weather covariates; "weather" null; any weather-based explanation is inadmissible. Could mention "Match-Situation QA includes attendance, officials, scores, not weather" [PAGE 14]. So veto. 
- Need "proof" maybe "the source has no weather feature; therefore a weather claim cannot be verified from this benchmark." That's a veto proof.

Need "RECURSIVE_THEORY_OF_MIND" maybe deeper:
- The controller's recursive model: It selects skill based on query; loads only catalog; tool calls validated; observes outputs; stopping condition. This is a "theory of mind" of the tool ecosystem: it must model what each tool knows and does not know. 
- Crisis habit regression: Under high uncertainty, the controller may over-call (Example 3) or accept visually salient player; MLLMs regress to answer-choice priors. Evidence: Q6 worse than Q9 [PAGE 6]; target highlight improves mean Q6 +19.7 [PAGE 7]. 
- Counter-trap: "one same-team and two opposing-team distractors" [PAGE 14]; skill rules "Do not infer identity from answer choices, reputation, appearance" [PAGE 21]. 
- Clock: "Neither time system is arithmetically converted into the other" [PAGE 18]; Q7 tolerance 1s; PBP lag 1-2s [PAGE 13]; period alias normalization [PAGE 26]. The controller must reason about two clocks, not conflate. 
- Stopping conditions: skill prompts specify stopping; system says "If evidence is insufficient... state so honestly and provide a reasonable fallback value matching expected answer format" [PAGE 19]. There is tension: fallback vs stop; this is a gray zone. Need mention.

Need "RETROCAUSAL_GENEALOGY" maybe 400 words. 
Need "THINK_TRACE" >=400 words. We can make it around 600. Other sections total >1000. Need not overdo but enough.

Need maybe include "source text" exact citations in each section. We can use [PAGE N] markers inline. Since user likely expects exact XML. Ensure no markdown outside. Use XML entities? Use `<` in equations? In XML, `<` in LaTeX must be escaped? Hmm if we use `<` in XML content, it may break. Need avoid raw `<` except tags. Use `\le` or `\leq` instead of `<`. Use `>` okay? In XML text, `>` okay but `<` not. Also `&` must be escaped. Need avoid `&` or use `\land` not ampersand. Use `\le` in LaTeX for ≤. Avoid `<` in equations. Use `\leq`. Avoid `&` alignment. Use `\begin{aligned}` maybe `&` is ampersand; must escape `&amp;`? But in XML, ampersand must be escaped. Could avoid aligned environments with `&`. Use separate equations. Use `\le` not `<`. Use `\to` etc. Use `\%`? `%` okay in XML. Use `$` okay. Need not use `<` in prose. Use "less than" words. Use "≥" Unicode okay? XML supports. But for LaTeX use `\geq`. Avoid raw `&`. Need escape quotes? Fine. Need not use `&` in "Q&A" use "QA". Avoid `<` in "≤". Use Unicode ≤ maybe okay but can use `\leq`. In XML text, `<` only tags. So avoid `<` character entirely. Use `\leq` or "at most". Good.

Need if using `\text{...}` with underscores? Fine. Need maybe `\pi_\theta` okay. `\tau_{j_i}` okay. `\mathcal{T}` etc. No ampersand. Use `\land` not `&`. 
Need no raw `>`? `>` allowed in XML text but within LaTeX `\to` okay. Use `\rightarrow` not `→` maybe. Unicode okay. But XML fine. 
Need no raw `&` in "timestamps and game clocks" use "and". 
Need use `%` in text? okay. 
Need if using `_` in text okay. 
Need maybe include `"` quotes okay.

Need maybe include "PAGE" markers as [PAGE 1]. Good.

Potential issue: system says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We won't. 
Need "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." We'll not. 
Need "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We'll include quotes.

Need maybe mention "retrocausal genealogy" not standard; explain lineage. 
Need "cross-layer veto adjudication" physical/biomechanical/weather veto proof. Include "weather null" proof. 
Need "RLVR counterfactual vetoes" 3 verifiable scenarios. 
Need "THINK_TRACE" deep multi-hop derivation and gray-zone audit. 
Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX, units, page citations, breakdown. 
Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. 
Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. 
Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions.

Let's draft in detail.

Start:
<THINK_TRACE>
The source constructs a benchmark-agent dyad... 
Multi-hop derivation:
1. Definition of comprehensive basketball understanding = integration. [PAGE 1] quote.
2. Benchmark decomposition: 7,980 across ten tasks, Q1-Q10, modalities. Table 1 page 4.
3. Agent: tools and skills. [PAGE 4] quote equations; [PAGE 5] skill specification.
4. Compositional error propagation: Q6/Q10 chain; Example 3; Table 3 event-type vs full-event F1.
5. Gray-zone audit: human QC; Q5/Q6 no instance-level; Q8 25.8% corrected; Q4 66.7% retention; PBP lag; aliases; JSON recovery; target highlight.
6. Performance audit: agent best 8/10 but not Q4/Q7; Q7 47.8 vs GPT 77.5; Q4 88.0 vs Gemini 94.0; Q9 tie. Ablation skill reduces tool calls 4.36→3.63 (-16.74%) while VideoQA performance 72.76→72.34 (-0.58%) [PAGE 8 Table 5]. So skills are efficiency not always accuracy. 
7. Conclusion: admissible claims. 
Need word count ~500.

SOURCE:
- Formal definitions.
Use LaTeX:
\[
x=(q,m),\quad \mathcal{T}=\{\tau_1,\ldots,\tau_N\},\quad \mathcal{S}=\{s_1,\ldots,s_M\}.
\]
\[
\tau_j:X_j\to O_j,\quad o_i=\tau_{j_i}(u_i).
\]
\[
y=F_{\pi_\theta}(x;\mathcal{S},\mathcal{T}).
\]
\[
s_k=\operatorname{Select}(x,\mathcal{S}),\quad y=\pi_\theta(x;\operatorname{load}(s_k),\mathcal{T}).
\]
Units: q text; m images/video/metadata; τ outputs typed records; confidence dimensionless in [0,1]; timestamps seconds; game clock MM:SS; scores counts; accuracy/F1 percentages.
Constraints:
\[
N_{\text{turn}}\le 12,\quad N_{\text{tool}}\le 10.
\]
\[
V_{\text{track}} = \mathbf{1}\left[\operatorname{IoU}(\text{SAM},\text{RF-DETR})\ge 0.3 \text{ in at least half observed frames}\right].
\]
\[
d_{\text{face}}\le 0.6.
\]
\[
c=1-d_{\text{best}},\quad c\in[0,1].
\]
\[
w_c=\operatorname{clip}\left(\frac{N}{6n_c},0.2,5.0\right).
\]
Metrics:
\[
\operatorname{ParseRate}=\frac{N_{\text{parsed}}}{N},\quad \operatorname{ParsedAcc}=\frac{N_{\text{correct}}}{N_{\text{parsed}}},\quad \operatorname{Acc}=\frac{N_{\text{correct}}}{N}=\operatorname{ParseRate}\times\operatorname{ParsedAcc}.
\]
\[
Q7=\frac{1}{2}\left(\operatorname{Acc@1s}_{\text{video}}+\operatorname{Acc@1s}_{\text{clock}}\right).
\]
\[
\operatorname{Acc@1s}_m=\frac{1}{N_m}\sum_i \mathbf{1}[d_i\le 1]
\]
for all-example; period constraint for clock. Use `\leq`.
Q8:
\[
P_r=\frac{M_r}{N_{\text{pred}}},\quad R_r=\frac{M_r}{N_{\text{ref}}},\quad F1_r=\frac{2P_rR_r}{P_r+R_r},\quad r\in\{\text{Type},\text{Type+Participant}\}.
\]
\[
PA=\frac{\#\text{type-aligned pairs with correct participant}}{\#\text{type-aligned event pairs}}.
\]
Breakdown regimes bullets. Need cite pages. Include quotes.
Need maybe "Q4 full exact match" equation:
\[
\operatorname{Acc}_{\text{full}}=\frac{\sum_{i\in S}\mathbf{1}[\hat t_i=t_i \land \hat s_i=s_i]+\sum_{i\in C}\mathbf{1}[\hat p_i=p_i \land \hat c_i=c_i]}{|S|+|C|}.
\]
Cite PAGE 23. Good. Use `\land` not `&`. Units.

Need include "No fake ratios" maybe state "These are the only ratios used; they are count ratios or paper-defined class weights." Good.

RETRO:
Write ~500 words. Include lineage, multi-week traps. 
- Historical: event detection, MOT, jersey recognition, calibration; multimodal programs; sports agents. 
- Retrocausal: The benchmark tasks are a post hoc decomposition of the agent's skills; skills encode causal order (track→event→identity→knowledge). 
- Multi-week traps: data leakage (BasketEvent test split; RF-DETR training disjoint); temporal label lag; scorebug OCR quantization; uniform color normalization; period aliases; JSON recovery; target highlighting. 
- Predictions: if strict temporal labels, Q7 lower; if alias normalization disabled, parse drop; if participant binding not rewarded, Type F1 overstates. 
Need cite.

RECURSIVE:
~500 words. 
- Controller ToM: models tool competence, stopping, evidence sufficiency.
- Crisis habit regression: MLLM visual salience; Q6 vs Q9; target highlight; agent over-calling Example 3.
- Counter-trap: distractors; constraints; face/identity. 
- Clock: two clocks; PBP lag; interval outputs; period alias; no arithmetic conversion. 
- Recursive loop: tool call limit; verifier; fallback. 
Need mention "crisis" maybe "under occlusion/fast motion". Good.

CROSS:
~400 words. 
- Boolean veto conjunction. 
- Physical: 1280x720 25fps, clip durations, occlusion; IoU. 
- Biomechanical: jersey number visibility, shot-zone geometry; corner vs paint confusion. 
- Weather: indoor null; no weather covariates; only attendance etc. 
- Adjudication: any failure veto; Example 3. 
Need cite.

RLVR:
~500 words. 
Three scenarios. Use formal reward. 
Scenario 1: Identity shortcut. Setup: permute team-color mapping or swap jersey-number distractors; verifiable metric Q6/Q10. Prediction: number-only policy chance; agent high. Use numbers: Q6 MLLM mean raw 56.3, target 76.0; agent 91.8. But that's target highlight. Need not overstate. "Prediction: a number-only policy drops to 25% on four-way Q6; a color-number-binding policy remains near its reported 91.8." Is that too strong? The agent could fail. But prediction okay. 
Scenario 2: Temporal schema veto. Setup: strict parse with no alias/interval repair; metric ParseRate and Acc@1s. Prediction: Qwen2.5-VL-7B parse 89.2 vs 99.9; Qwen3.5-9B parse 47.5; agent 97.7/97.8. Reward only if parse rate ≥0.95 and Acc@1s. 
Scenario 3: Event-participant binding. Setup: permute participants among events of same type; metric Type F1 vs Type+Participant F1 and PA. Prediction: GPT Type F1 59.6 vs 29.8; PA 46.7; agent 60.9 vs 45.9; PA 70.6. Reward Type+Participant. 
Need maybe "veto rule" equation:
\[
R_{\text{admit}}=\mathbf{1}[\operatorname{ParseRate}\ge 0.95]\cdot \mathbf{1}[F1_{\text{Type+Participant}}\ge \tau]\cdot \mathbf{1}[PA\ge \tau_{PA}]
\]
But multiplication of indicators okay. Use `\cdot`. No fake ratio.
Need predictions with "verifiable". Good.

Need word count >1000. We can count approximate. THINK 600, SOURCE 900, RETRO 500, RECURSIVE 500, CROSS 400, RLVR 600 = 3500. Good.

Need ensure XML valid: no raw `<` in text. In LaTeX, `\le` okay. But `\leq` no raw `<`. `\text{...}` okay. Avoid `&` entirely. Avoid `>`? `>` allowed but in LaTeX `\rightarrow` maybe. Use `\to`. Avoid `&` in "Type+Participant" plus sign okay. Avoid `%`? okay. Avoid `#`? okay. Avoid `_`? okay. Avoid `[` `]` okay. 
Need escape `&` in "Q&A" not use. Use "QA". 
Need if using `\operatorname{clip}` fine. 
Need if using `\mathbf{1}` fine. 
Need if using `\left[` `\right]` fine. 
Need no raw `&` in equations. 
Need no raw `<` in "≤0.6"; use `\leq 0.6`. Good.
Need maybe use Unicode "×" in text; okay. But in LaTeX use `\times`. 
Need no raw `>` in XML? It's allowed but maybe avoid. Use `\geq`. 
Need if using "PAGE 15-16" okay. 
Need quotes with `"` okay. 
Need if using "7,980" okay. 
Need if using "1,580" okay. 
Need if using "2,501" okay. 
Need if using "1280 × 720" okay. 
Need if using "25-fps" okay.

Potential issue: In XML, `<` in `[PAGE 5]` no. Fine.

Need maybe include "verbatim quotes" with exact line breaks? We can quote inline. Fine.

Let's write. Need be careful not to mention "odds" etc. None.

Need maybe mention "source operators" as "operator algebra". 
Let's start final with XML sections only. Use `\` in LaTeX; in XML text, backslash okay. Need if using `\` before `%`? no.

Let's draft final. Ensure no accidental `<`:
- "less than" instead of `<`.
- "at most" instead of `≤` in prose? Use `\leq` in math.
- "greater than" use `\geq`.
- Avoid `&`.
- Avoid raw `>` in math? `\to` okay.
- In `\text{Type+Participant}` plus okay.
- In `\operatorname{Acc@1s}` `@` okay.
- In `N_{\text{parsed}}` okay.
- In `\mathbf{1}[\hat t_i=t_i \land \hat s_i=s_i]` no ampersand. Good.
- In `\sum_{i\in S}` okay.
- In `|S|+|C|` okay.
- In `\frac{N}{6n_c}` okay.
- In `\operatorname{clip}\left(\frac{N}{6n_c},0.2,5.0\right)` okay.
- In `\operatorname{IoU}` okay.

Need maybe "Q7 = 1/2..." okay.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central move is to convert “comprehensive basketball understanding” from a vague integration claim into a measurable decomposition. It states that understanding “requires recognizing events, localizing actions, identifying players, and relating these to structured game knowledge” [PAGE 1]. That sentence is the load-bearing premise. If it is true, then a benchmark must test not only each capability but also their composition. The paper then instantiates this premise as 7,980 QA pairs over ten tasks, with text, image, and video inputs [PAGE 1], and as an agent that composes eight tools under four reusable skills [PAGE 4–PAGE 5]. The multi-hop derivation is therefore: heterogeneous evidence requirement leads to task decomposition; task decomposition reveals recurring evidence chains; recurring chains become tools; tools become skills; skills become controller-selected procedures.

The formal chain matters. A tool is a typed operator “τj : Xj → Oj” that returns “oi = τji(ui)” [PAGE 4], and the full inference process is “y = Fπθ(x; S, T )” [PAGE 4]. A skill is not a model answer; it “specifies tool ordering, intermediate evidence flow, and task-specific output construction” [PAGE 5]. Thus the agent’s accuracy on Q6 or Q10 is not one capability but a conjunction: tracking must produce a valid player track, event detection must bind the event to that track, jersey recognition must resolve a color-number pair, the prompt must supply the color-to-team mapping, and the database must return the right record. If any link fails, the final answer can be confidently wrong. The paper’s own failure example is decisive: “BasketballSkills unnecessarily invokes Scorebug Reading to identify the two teams, reflecting an overly cautious tool-use strategy. The same example also produces an incorrect final answer because Track-Level Event Detection returns an erroneous result, illustrating how upstream tool failures can propagate through subsequent grounding and answer gener-” [PAGE 6]. This is a gray-zone audit point: the skill architecture improves evidence inspectability but does not make composition robust to upstream error.

The benchmark audit is equally important. Human quality control is uneven by task design. Q4 begins with 300 Qwen3.6-27B candidates, from which reviewers retain 200, “corresponding to a retention rate of 66.7%” [PAGE 4]. Q8 receives full manual checking, and “this review corrects 258 examples (25.8%)” [PAGE 4]. Q7 receives full manual timestamp annotation because official play-by-play can lag visible events: “Official PBP timestamps may lag the visually observable occurrence of an event by one or two seconds, and the 1-fps OCR mapping introduces additional temporal quantization” [PAGE 13]. These are not cosmetic details; they define the gray zone between benchmark score and real perceptual competence. Q5 and Q6 are generated from structured records without additional instance-level human review [PAGE 4], while Q7 and Q8 are heavily repaired. A high Q5 score therefore means agreement with structured shot-location labels, not necessarily human-verified spatial reasoning. A high Q7 score means agreement with manually corrected visible-event timing, not necessarily agreement with the official play-by-play clock.

The performance pattern also needs a multi-hop reading. BasketballSkills is best on eight of ten tasks, “including a tie on Q9” [PAGE 6], but it does not dominate every task. Its Q7 score is 47.8 versus GPT-5.4’s 77.5, and its Q4 score is 88.0 versus Gemini 3.5 Flash’s 94.0 [PAGE 7]. So the correct conclusion is not “the agent solves comprehensive basketball understanding.” It is “explicit domain composition helps most on knowledge-intensive and event-participant binding tasks, while general MLLMs remain stronger on some direct OCR and temporal-location tasks.” The ablation sharpens this: procedural skills reduce VideoQA tool calls from 4.36 to 3.63, a 16.74% reduction, while VideoQA performance changes from 72.76 to 72.34, a 0.58% decrease [PAGE 8, Table 5]. Skills are therefore primarily an efficiency and coordination device, not a universal accuracy multiplier. The gray-zone audit must preserve that distinction.

A final audit point is the target-player highlight experiment. Table 4 shows mean Q5 improvement from 29.6 to 36.4 and mean Q6 improvement from 56.3 to 76.0 when the ground-truth event-relevant player is highlighted [PAGE 7]. This is a diagnostic oracle, not an inference-time input. It proves that player-event grounding is a major bottleneck, but it also warns that any claimed “comprehensive” score must specify whether the model received an oracle cue. Without that specification, the score is not comparable.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines the agent as a typed operator composition. Let the multimodal query be \(x=(q,m)\), the atomic tool library be \(\mathcal{T}=\{\tau_1,\ldots,\tau_N\}\), the skill library be \(\mathcal{S}=\{s_1,\ldots,s_M\}\), and the language-model controller be \(\pi_\theta\). The paper states: “Formally, each tool is a typed operator τj : Xj →Oj, where Xj and Oj denote its input and output spaces. When invoked with arguments ui, a tool returns a structured result oi = τji(ui)” [PAGE 4]. In LaTeX:
\[
\tau_j:X_j\to O_j,\qquad o_i=\tau_{j_i}(u_i).
\]
The overall inference objective is
\[
y=F_{\pi_\theta}(x;\mathcal{S},\mathcal{T}).
\]
At run time, the controller selects a skill and loads it:
\[
s_k=\operatorname{Select}(x,\mathcal{S}),\qquad
y=\pi_\theta(x;\operatorname{load}(s_k),\mathcal{T}).
\]
This is the paper’s Eq. 3 workflow [PAGE 5–PAGE 6]. Units and assumptions: \(q\) is text; \(m\) contains images, videos, and game metadata; each \(\tau_j\) returns a typed structured record; confidence values are dimensionless probabilities in \([0,1]\); video timestamps are seconds; game clocks are period plus \(MM{:}SS\); scores and jersey numbers are integer counts. No bits, nats, or physical force units are defined by the source, so none should be invented.

The controller is bounded:
\[
N_{\text{turn}}\leq 12,\qquad N_{\text{tool}}\leq 10,
\]
because “Each run allows at most 12 controller turns and 10 tool calls” [PAGE 15]. The verifier is “a fixed Python program that checks each function call before execution” [PAGE 15]. Tracking has a physical validity gate: “a SAM trajectory must overlap an RF-DETR player detection by at least 0.3 IoU in at least half of its observed frames” [PAGE 15–PAGE 16]. Formally,
\[
V_{\text{track}}=\mathbf{1}\left[\operatorname{IoU}(\text{SAM},\text{RF-DETR})\geq 0.3
\text{ in at least half of observed frames}\right].
\]
Face recognition has a distance gate: “It returns the nearest identity only at distance ≤0.6, otherwise null; confidence is one minus the best distance, clipped to [0, 1]” [PAGE 17]. Thus
\[
d_{\text{face}}\leq 0.6,\qquad c=1-d_{\text{best}},\qquad c\in[0,1].
\]
Shot-zone training uses the class weight
\[
w_c=\operatorname{clip}\left(\frac{N}{6n_c},0.2,5.0\right),
\]
where \(n_c\) is the number of training examples in class \(c\) and \(N=13,966\) [PAGE 17]. This is a count-based loss weight, not a physical ratio. It saturates at the lower bound 0.2 and upper bound 5.0, so rare classes are up-weighted but capped.

The benchmark metrics are count ratios. For an accuracy task with \(N\) examples, \(N_{\text{parsed}}\) parseable outputs, and \(N_{\text{correct}}\) correct parsed outputs:
\[
\operatorname{ParseRate}=\frac{N_{\text{parsed}}}{N},\qquad
\operatorname{ParsedAcc}=\frac{N_{\text{correct}}}{N_{\text{parsed}}},\qquad
\operatorname{Acc}=\frac{N_{\text{correct}}}{N}
=\operatorname{ParseRate}\times\operatorname{ParsedAcc}.
\]
The paper states: “Acc = ParseRate × ParsedAcc, and unparsable, missing, or failed responses receive zero credit in Acc” [PAGE 23]. For Q4 full exact match:
\[
\operatorname{Acc}_{\text{full}}
=
\frac{
\sum_{i\in S}\mathbf{1}[\hat t_i=t_i \land \hat s_i=s_i]
+
\sum_{i\in C}\mathbf{1}[\hat p_i=p_i \land \hat c_i=c_i]
}{
|S|+|C|
}.
\]
For Q7:
\[
\operatorname{Acc@1s}_m
=
\frac{1}{N_m}\sum_i \mathbf{1}[d_i\leq 1],
\qquad
Q7=\frac{1}{2}\left(\operatorname{Acc@1s}_{\text{video}}
+\operatorname{Acc@1s}_{\text{clock}}\right),
\]
where the clock mode also requires the predicted period to match [PAGE 23–PAGE 24]. For Q8, with an LCS match count \(M_r\), predicted event count \(N_{\text{pred}}\), and reference event count \(N_{\text{ref}}\):
\[
P_r=\frac{M_r}{N_{\text{pred}}},\qquad
R_r=\frac{M_r}{N_{\text{ref}}},\qquad
F1_r=\frac{2P_rR_r}{P_r+R_r},
\qquad r\in\{\text{Type},\text{Type+Participant}\}.
\]
Participant Accuracy is
\[
PA=
\frac{\#\text{type-aligned pairs with the correct participant}}
{\#\text{type-aligned event pairs}}.
\]
The source states: “Metrics with a zero denominator are defined as zero” [PAGE 24]. It also states that “PA is undefined because no event-type-aligned prediction–reference pairs can be formed” for VideoLLaMA3-7B [PAGE 26].

Exact singularity and breakdown regimes:
- If \(N_{\text{parsed}}=0\), then \(\operatorname{ParseRate}=0\) and the all-example accuracy is zero; parsed accuracy is undefined and must not be silently reported as a real accuracy [PAGE 23–PAGE 24].
- If \(N_{\text{ref}}=0\) or \(N_{\text{pred}}=0\), the zero-denominator convention forces the Q8 metric to zero [PAGE 24].
- If \(d_{\text{face}}>0.6\), face recognition returns null; identity is not admissible [PAGE 17].
- If the tracking overlap condition fails, the trajectory is discarded; any downstream identity claim from that track is vetoed [PAGE 15–PAGE 16].
- If the scorebug is unreadable, the tool returns an error, not null fields [PAGE 18].
- If the controller reaches 10 tool calls without sufficient evidence, it must fall back to the best available answer [PAGE 18].
- If an event participant, team, jersey number, or roster identity cannot be resolved, the skill says “Stop rather than guess” [PAGE 21].
- Video time and game-clock time are not arithmetically convertible: “Neither time system is arithmetically converted into the other, and a fixed prompt selects the output schema” [PAGE 18].
- A period mismatch is incorrect for Q7 Acc@1s but excluded from game-clock MAE [PAGE 24].
- Q7 interval-valued outputs are not repaired; Qwen3.5-9B produces 415 interval predictions and only 47.5% parseability [PAGE 26].
- Invalid Q8 JSON after conservative recovery is treated as an empty predicted sequence [PAGE 24].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is retrocausal in a precise sense: the composite agent is presented first as a solution, but its four skills are a late formalization of older, separate research lines. The source traces sports understanding from “event and key-actor localization,” “dense spatiotemporal action detection,” “multi-object tracking under fast motion and similar player appearance,” and “jersey-number recognition” [PAGE 2]. It also cites court calibration, player identification, knowledge-enhanced description, and fine-grained player evaluation within basketball [PAGE 2]. Those are the historical atoms. The benchmark’s Q5, Q6, Q8, and Q9 are not novel perceptual primitives; they are standardized tests for primitives that already existed in separate literatures.

The second lineage is modular multimodal reasoning. The paper cites ReAct as interleaving “reasoning with actions and observations,” VisProg and ProViQ as “executable visual or video programs,” and Voyager and MMSkills as reusable skill representations [PAGE 2]. BasketballSkills is therefore a domain-specific descendant of programmatic visual reasoning: the skill prompt is a procedure, the tool call is an action, and the verifier is a runtime type check. The paper’s contribution is not the invention of tool use; it is the claim that a professional sport’s capabilities can be organized into “domain-grounded, executable skills” that are also systematically evaluated [PAGE 2]. The retrocausal genealogy runs backward from the agent’s evidence order to the benchmark’s task order: track, detect event, resolve identity, query knowledge.

This lineage exposes several multi-week traps. First, data leakage: all benchmark clips come from the BasketEvent test split, and the paper explicitly states that these are “disjoint from every frame used for detector training or validation” [PAGE 16]. If that separation is lost, detection scores become contaminated. Second, temporal label drift: official play-by-play can lag visible events by one or two seconds, and 1-fps OCR adds quantization [PAGE 13]. A team that trusts official PBP as ground truth will mislabel the visible event. Third, format compliance masquerading as reasoning: Period-Alias Normalization recovers 84 of 790 Qwen2.5-VL-7B outputs, “raising its Parse Rate from 89.2% to 99.9% and its all-example Acc@1s from 39.1% to 44.9%” [PAGE 26]. A benchmark that does not separate schema compliance from temporal accuracy will confuse the two. Fourth, JSON recovery can expose predicted content without improving it; the paper notes that recovery “does not necessarily increase F1” [PAGE 26]. Fifth, oracle cues: the target-player highlight in Table 4 improves mean Q6 by 19.7 points [PAGE 7], but it is not an inference-time capability. Any multi-week comparison that mixes oracle-highlight runs with raw-video runs is invalid. Sixth, uniform and roster drift: player images, game-specific jersey assignments, and 530 active-player profiles are frozen [PAGE 2], but mid-season trades or uniform changes would break identity links if the snapshot were not fixed. These traps are not speculative; they are the natural failure modes of a benchmark built from broadcast video, official records, and model-assisted annotation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The controller is a recursive theory-of-mind machine over tools. It must model what each tool can see, what it cannot see, and when its own evidence is sufficient. The system prompt makes this explicit: the controller should “Analyze the question and decide which tools to call and in what order,” then “Based on the results, decide the next step: call more tools, or give the final answer” [PAGE 18]. The skill prompt adds stopping conditions and evidence bindings: for shot analysis, the controller must obtain the shooter role “only from detect_events,” must not select a player “by visual prominence or proximity to the basket,” and must treat jersey identity as the pair “(jersey_color, jersey_number)” [PAGE 20]. This is not merely a pipeline; it is a constrained mental model of who knows what.

Crisis habit regression appears when the evidence is noisy. General MLLMs regress to visual salience and answer-choice priors. The paper’s evidence is that “every MLLM performs worse on this task than on Q9, which directly asks for a jersey number from player crops” [PAGE 6]. In other words, when the model must bind an event to a player, it loses the direct OCR advantage. The target-player highlight experiment confirms the mechanism: mean Q6 rises from 56.3 to 76.0 when the event-relevant player is explicitly boxed [PAGE 7]. The agent has its own crisis habit: Example 3 shows “an overly cautious tool-use strategy” in which it unnecessarily invokes Scorebug Reading, and the upstream event-detection error propagates to the final answer [PAGE 6]. The recursive failure is not that the controller lacks tools; it is that the controller misprices tool reliability.

The counter-trap is the benchmark’s distractor design. Q6 pairs the true shooter with “one same-team and two opposing-team distractors, testing team discrimination and jersey recognition” [PAGE 14]. The skill prompts forbid the shortcut: “Do not infer identity from answer choices, reputation, appearance, or basketball knowledge” [PAGE 21], and “Do not treat a jersey number alone as a unique player identity” [PAGE 21]. A model that passes by matching a salient number or a familiar name is not solving the task. The counterfactual test is simple: permute answer choices while holding the image fixed. If accuracy changes, the model is reading the options, not the evidence.

The clock is the third recursive pressure. Basketball has two clocks: clip-relative video time and broadcast game-clock time. The source refuses to conflate them: “Neither time system is arithmetically converted into the other” [PAGE 18]. It also documents why: official PBP can lag visible events, and 1-fps OCR quantizes the mapping [PAGE 13]. Q7’s Acc@1s tolerance is one second, with a period match required for game-clock mode [PAGE 23–PAGE 24]. The model must therefore reason about which clock the question asks for, not just regress to a timestamp. Qwen3.5-9B’s interval outputs—415 predictions of the form “[4.0, 4.5]” rather than a single timestamp—are a clock-format regression: the model knows roughly when, but cannot commit to the requested point [PAGE 26]. Period aliases are another clock trap; the repair recovers 84 Qwen2.5-VL-7B outputs and changes parse rate from 89.2% to 99.9% [PAGE 26]. The recursive theory of mind must include the evaluator’s schema as part of the task, not as an afterthought.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A composite basketball answer is admissible only if every lower layer passes. Define the veto conjunction
\[
V=
V_{\text{track}}\land V_{\text{event}}\land V_{\text{identity}}
\land V_{\text{team}}\land V_{\text{db}}\land V_{\text{format}}.
\]
Each term is Boolean. \(V_{\text{track}}\) requires the SAM trajectory to overlap an RF-DETR player detection by at least 0.3 IoU in at least half of observed frames [PAGE 15–PAGE 16]. \(V_{\text{event}}\) requires a detected event with a participant track; the shot-zone tool requires a shooter track from event detection [PAGE 19]. \(V_{\text{identity}}\) requires a resolved jersey color-number pair; “a jersey number alone is NOT unique across the clip” [PAGE 19]. \(V_{\text{team}}\) requires the color-to-team mapping supplied in the question; the skill says “Use question-provided context as the only source of the color-to-team mapping” [PAGE 22]. \(V_{\text{db}}\) requires a database record; on failure the tool returns an error field [PAGE 19]. \(V_{\text{format}}\) requires a parseable schema-conformant output; unparseable outputs receive zero credit [PAGE 23]. If any term is false, the final answer must be a stop or fallback, not a guess.

The physical layer vetoes identity claims under occlusion. The videos are \(1280\times720\), 25-fps possession clips lasting 3.48–18.96 seconds, mean 9.45 seconds and standard deviation 1.81 seconds [PAGE 12]. Fast motion, crowding, referees, bench players, and staff are exactly why the tracker uses an IoU filter [PAGE 15–PAGE 16]. A missing track is not evidence of absence; it is absence of evidence. The correct adjudication is to veto the identity claim, not to infer the player from a nearby visible body.

The biomechanical layer vetoes jersey and shot-zone claims when the body pose or court geometry does not support them. Jersey recognition samples eight observations from a track and returns a color-number pair; invalid inputs are reported rather than imputed [PAGE 17]. Shot-zone classification is geometrically uneven: “Corner Threes are most distinctive (90.0% left; 83.0% right), whereas In The Paint (Non-RA) is hardest (44.0%), chiefly confused with adjacent Restricted Area and Mid-Range regions” [PAGE 26]. That is a biomechanical and camera-geometry veto: a paint shot near the restricted-area arc is genuinely ambiguous from a broadcast angle, so a confident six-way label can be unjustified even when the model returns one. The agent’s shot-zone confidence must be read with that confusion matrix, not as a pure accuracy number.

The weather layer is a null layer. Basketball is indoor; the source provides schedules, officials, attendance, box scores, and uniforms, but no weather covariates [PAGE 12–PAGE 14]. Therefore any explanation of a missed prediction in terms of wind, rain, temperature, or field conditions is inadmissible for this benchmark. The only environmental variables available are broadcast imaging conditions and arena metadata, and those are not modeled as weather. A weather-based veto claim is not merely unsupported; it is outside the source’s measurable layer.

The cross-layer proof is therefore: a correct Q10 answer requires \(V_{\text{track}}\), \(V_{\text{event}}\), \(V_{\text{identity}}\), \(V_{\text{team}}\), and \(V_{\text{db}}\) all true, because the question asks for a fact about “the player who committed the foul” or “the player who missed the shot.” If the event detector returns the wrong participant, the jersey lookup returns the wrong player, and the database returns a true fact about the wrong person. The answer can be internally consistent and externally false. Example 3 demonstrates exactly this propagation [PAGE 6]. The veto adjudication must therefore be causal, not merely correlational: the final answer is admissible only when the evidence chain is intact at every layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR here means reinforcement learning with verifiable rewards. The veto logic is: if a policy earns reward through a shortcut, remove the shortcut and require the reward to survive. Three verifiable counterfactual vetoes follow.

Veto 1: Identity-shortcut veto. Counterfactual: keep the video fixed but permute the team-color mapping and answer choices so that the correct team-jersey pair shares its jersey number with a distractor from the other team. The verifiable reward is correct team tricode plus correct jersey number, not jersey number alone. Prediction: a number-only policy collapses toward 25% on four-way Q6, because the source explicitly uses “one same-team and two opposing-team distractors” and states that “a