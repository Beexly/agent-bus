# arxiv-program/research/2026-09-21/arxiv-deep/1720-sportr-benchmark-multimodal-llm-reasoning.md
## What it is (1-2 sentences)
A full-text read (28-page PDF, all sections, tables, figures, appendices B–E) of Xia et al. (2026), arXiv:2511.06499v1, ICLR 2026 — SportR, a benchmark testing whether multimodal LLMs actually reason about sports rules (foul identification, penalty prediction, tactic recognition, explicit bounding-box visual grounding) rather than merely perceiving, plus an SFT-on-expert-CoT + GRPO training recipe that teaches a 7B open model to reason. Verdict in the ledger: ADAPT — the progressive QA hierarchy (infraction → foul → penalty → explanation → visual grounding → tactics) with human-authored chain-of-thought and the SFT+GRPO recipe is a blueprint for GSE's sports-reasoning model, but it is a benchmark paper, not a deployable system, and its American-football coverage is one of five sports with no per-sport breakdown.

## Key metrics/methods (formulas where given, else "not specified")
- GRPO objective: J_GRPO(θ) = E[min(ρ_i A_i, clip(ρ_i, 1−ε, 1+ε) A_i) − β·D_KL(π_θ(·|q) ‖ π_ref(·|q))], with group-relative advantage A_i = (r_i − μ_r)/σ_r over grouped rollouts and a KL penalty to the reference policy
- Reward: R(o|q) = 1.0·R_correct + 0.5·R_format (correctness weight 1.0 + output-format adherence weight 0.5)
- IoU = |pred ∩ gt| / |pred ∪ gt| on the tightest-possible expert bounding box around the infraction's critical visual evidence (Q5 grounding metric)
- Progressive QA hierarchy: Q1 infraction identification, Q2 foul classification, Q3 penalty prediction, Q4 free-form explanation, Q5 visual grounding (bounding-box IoU), Q6 offensive tactic ID, Q7 defensive tactic ID; video Q8–Q13 (no grounding task — deemed too hard to annotate consistently across frames)
- Annotation protocol: strict macro-to-micro CoT (court area + parties → action dynamics → precise point of contact); QA pairs generated from the CoT at increasing depth
- Evaluation: consistent prompt template, temperature 0.7, across all models; LLM-as-judge (GPT-5, Gemini 2.5 Pro, Claude 4 Sonnet, averaged to mitigate self-preference) for text QA, validated against 660 human-judged samples (Pearson r > 0.65)
- Error analysis on 1,500 failure cases across 5 categories: visual hallucination, domain knowledge gap, reasoning error, format violation, visual perception error
- Training: Qwen-2.5VL-7B, two stages — (1) SFT on the SportsImage CoT data, (2) GRPO — trained on 4×H20 GPUs, image data only

## Data sources named
- SportsImage: 4,789 images across basketball, soccer, table tennis, badminton, American football; each with a human-authored CoT rationale
- SportsVideo: 2,052 video clips with CoT rationales (no bounding-box grounding)
- 50 infraction/foul types, 12 tactic types; 6,841 human-authored CoT annotations; 20,000+ QA pairs total
- Annotation team: 16 experts including 2 former NCAA Division I athletes; uncertain cases double-reviewed or discarded; no model-assisted annotation
- Code and data: public repository https://github.com/chili-lab/SportR (code, data, and training details in Appendix B released) — noted as the most reproducible paper in the wave
- Models evaluated: proprietary (GPT-5, Claude 4 Sonnet, Gemini 2.5 Pro) and open (LLaVA family, Qwen-VL 2.5 7B/72B, DeepSeek-VL, GLM-4.5V); LLM judges GPT-5, Gemini 2.5 Pro, Claude 4 Sonnet

## Findings (numbers and facts, not vibes)
- SportsImage zero-shot (GPT-5): Q1 69.19, Q2 44.21, Q3 44.49, Q4 41.34, Q5 5.70 IoU, Q6 65.75, Q7 58.82 — ALL models score < 7% IoU on Q5 grounding; foul classification (Q2) is hard everywhere (best zero-shot 44.21)
- Training effect on Qwen-2.5VL-7B: Q2 accuracy 14.43 → 50.71 (SFT) → 51.54 (SFT+RL); Q1 48.29 → 69.82 → 84.19; Q5 IoU 4.61 → 2.88 → 9.94 (SFT alone DECREASED grounding IoU; SFT+RL more than doubled it); trained model tops 5 of 7 categories
- SportsVideo: GPT-5 leads most (Q9 34.39, Q10 41.83, Q12 60.82); the image-trained SFT+RL model generalizes cross-modally with zero video training — Q8 25.49 → 59.52, beating GPT-5's 59.17
- Error analysis: video errors dominated by perception + hallucination (60–70%); images unmask domain-knowledge gaps (GPT-5's knowledge-gap share rises 20% → 36% from video to image)
- Pilot success criteria stated for GSE's NFL analog: concept-classification accuracy ≥ 2x the zero-shot baseline, grounding IoU ≥ 0.15 (vs the paper's < 0.07 zero-shot), error analysis showing knowledge-gap errors shrinking faster than perception errors
- Hard gates stated: REJECT the grounding task (Q5 analog) if analyst box-drawing agreement (inter-annotator IoU) falls below 0.5; REJECT LLM-as-judge as the sole text metric for GSE (r ≈ 0.65 too noisy for production gates — keep a human-judged subset always)
- Improvement experiments proposed: (1) run the missing experiment — SFT+GRPO on SportsVideo CoTs, test whether video training beats image-only transfer (decides frames vs clips annotation for GSE); (2) fit a judge bias correction per judge model on a 300-explanation GSE calibration set, target corrected judges reaching r ≥ 0.85 for scale; (3) extend the 50-foul/12-tactic taxonomy with an NFL concept taxonomy (coverages, blitzes, route concepts) and test whether the hierarchy exposes the same perception-vs-knowledge-gap split
- Limitations: LLM-as-judge validated at r ≈ 0.65–0.70 — meaningful noise; small differences between mid-tier models may not be real; American-football slice unquantified; video has no grounding task; cross-modal transfer demonstrated, not optimized (no video-training comparison); proprietary judges grading proprietary models with shared blind spots

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: The progressive QA hierarchy maps directly onto an NFL scheme-classification ladder — formation ID → coverage/blitz classification → outcome explanation → bounding-box grounding of the decisive matchup — serving the scheme program by turning the paper's 50-foul/12-tactic taxonomy into an NFL concept taxonomy (coverages, blitzes, route concepts) with the same progressive-depth structure.
- OTHER: The SFT-on-expert-CoT + GRPO recipe (R = 1.0·correctness + 0.5·format on Qwen-2.5VL-7B, 4×H20 GPUs) is the practical path to a GSE sports-reasoning model without frontier-model budgets — serves the tracking lane: a model that reasons about film and grounds its answers in visual evidence (IoU) is exactly what automated charting needs, with the image→video transfer result (Q8 25.49 → 59.52 with zero video training) suggesting GSE can train on frames and deploy on clips.
- QB-BEHAVIOR: The macro-to-micro CoT protocol (personnel/formation → coverage/blitz dynamics → point of decisive action) provides the annotation template for QB-behavioral profiles — analyst-written rationales of what the QB saw and how the coverage rotated are the training signal for a model that reads QB decision-making off film, serving the QB-behavioral-profiles program.
- TRUST-SIGNAL: The 5-category error taxonomy (visual hallucination, domain knowledge gap, reasoning error, format violation, visual perception error) gives the engine a diagnostic vocabulary for grading its own model failures — knowledge-gap errors shrinking faster than perception errors is the stated evidence that CoT training teaches rules rather than seeing, which is the trust signal for promoting a vision model toward production.
- OL: UNCERTAIN — no offensive-line-specific content in the paper; the "decisive matchup" grounding concept could in principle be aimed at trench play, but this is INFERENCE, not a file finding.

## Engine-actionable? (yes/no + one-line what)
Yes — build the NFL analog of the progressive QA hierarchy on 500 analyst-annotated All-22 frames and run the SFT+GRPO recipe, gated on ≥ 2x concept-classification accuracy, grounding IoU ≥ 0.15, and inter-annotator IoU ≥ 0.5.
