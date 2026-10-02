# arxiv-program/research/2026-09-21/arxiv-deep/1720-sportr-benchmark-multimodal-llm-reasoning.md
## What it is (1-2 sentences)
SportR (arXiv:2511.06499v1, ICLR 2026) is a multimodal-LLM sports-reasoning benchmark separating fine-grained rule-based reasoning (foul ID, penalty prediction, tactic recognition, bounding-box visual grounding) from shallow perception, with 6,841 human-authored chain-of-thought annotations and an SFT+GRPO training recipe that teaches a 7B open model to reason. Verdict: ADAPT — benchmark paper, not a deployable system; its American-football coverage is one of five sports with no per-sport breakdown.
## Key metrics/methods (formulas where given, else "not specified")
- Progressive QA: Q1 infraction ID → Q2 foul classification → Q3 penalty prediction → Q4 free-form explanation → Q5 visual grounding (bounding-box IoU = |pred∩gt|/|pred∪gt|) → Q6/Q7 offensive/defensive tactic ID; video Q8–Q13 (no grounding).
- Training: Qwen-2.5VL-7B, (1) SFT on SportsImage CoT data, (2) GRPO: J_GRPO(θ) = E[min(ρ_i A_i, clip(ρ_i,1−ε,1+ε)A_i) − β·D_KL(π_θ‖π_ref)], A_i = (r_i−μ_r)/σ_r; reward R(o|q) = 1.0·R_correct + 0.5·R_format; 4×H20 GPUs, image data only.
- Evaluation: IoU for grounding; LLM-as-judge panel (GPT-5, Gemini 2.5 Pro, Claude 4 Sonnet, averaged) for text QA, validated vs 660 human samples (Pearson r > 0.65); error taxonomy: visual hallucination, domain knowledge gap, reasoning error, format violation, visual perception error.
## Data sources named
SportsImage: 4,789 images across basketball, soccer, table tennis, badminton, American football, each with human-authored CoT (macro-to-micro: court area + parties → action dynamics → precise point of contact); SportsVideo: 2,052 clips with CoT; 50 infraction/foul types, 12 tactic types; 20,000+ QA pairs; annotation team of 16 experts incl. 2 former NCAA Division I athletes; no model-assisted annotation. Public repo: github.com/chili-lab/SportR.
## Findings (numbers and facts, not vibes)
- Zero-shot SportsImage: GPT-5 — Q1 69.19, Q2 44.21, Q3 44.49, Q4 41.34, Q5 5.70 IoU, Q6 65.75, Q7 58.82; ALL models <7% IoU on grounding; foul classification hard everywhere (best 44.21).
- Training effect (Qwen-2.5VL-7B): Q2 14.43 → 50.71 (SFT) → 51.54 (SFT+RL); Q1 48.29 → 69.82 → 84.19; Q5 IoU 4.61 → 2.88 → 9.94; trained model tops 5 of 7 categories.
- SportsVideo: GPT-5 leads most (Q9 34.39, Q10 41.83, Q12 60.82); image-trained SFT+RL generalizes cross-modally with zero video training — Q8 25.49 → 59.52, beating GPT-5's 59.17.
- Error analysis: video errors dominated by perception + hallucination (60–70%); images unmask domain-knowledge gaps (GPT-5's knowledge-gap share rises 20% → 36% from video to image).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: the progressive QA hierarchy (formation ID → coverage/blitz classification → outcome explanation → bounding-box grounding of the decisive matchup) is the eval template for GSE's film/charting ambitions — an NFL concept taxonomy (coverages, blitzes, route concepts) extends the paper's 50-foul/12-tactic set.
- TRUST-SIGNAL: LLM-as-judge at r ≈ 0.65 is too noisy as a sole production metric — keep a human-judged subset; the error taxonomy (perception vs knowledge-gap vs reasoning) is the diagnostic vocabulary for GSE vision failures.
- QB-BEHAVIOR: INFERENCE — grounding the "decisive matchup" extends naturally to grounding QB read/progression points on All-22 frames.
## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL analog benchmark (GSE-annotated All-22 frames with macro-to-micro CoTs, progressive QA: formation → coverage/blitz → outcome → grounding) and run the SFT+GRPO recipe on a 500-frame pilot, gating on ≥2× concept-classification accuracy over zero-shot.
