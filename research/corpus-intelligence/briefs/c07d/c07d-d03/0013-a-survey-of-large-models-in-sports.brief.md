# arxiv-program/research/2026-09-21/arxiv-deep/0013-a-survey-of-large-models-in-sports.md
## What it is (1-2 sentences)
A PRISMA-2020 systematic survey (241 core papers, Jan 2020–Jul 2025) mapping LLM/MLLM applications across 6 stakeholder groups and 19 sports tasks, with Tables 1–5 cataloging per-task best results and open-source dataset links. Verdict in the file: REJECT as a model-building source (no novel method), retained only as a reference map.

## Key metrics/methods (formulas where given, else "not specified")
Formulas: not specified (survey, no equations). Survey method (Appendix A): start set of 3 seed surveys, iterative forward/backward snowballing via Google Scholar "cited by" with a Boolean filter string until theoretical saturation; four-dimension inclusion/exclusion filters (topic, publication type, time window Jan 1 2020–Jul 31 2025, language = English). Per-task metrics cataloged in Table 1: action spotting/recognition (Acc, F1, mAP), action quality assessment (Spearman's ρ, mAP), tactics/strategies (Acc, DnC-10, Macro F1), game/player performance prediction (Acc, RMSE, F1), refereeing (Likert, Acc), commentary generation (CIDEr, METEOR, ROUGE-L, BARTScore), highlight generation (F1, mAP), news generation (ROUGE-L, CS-F1), narratives (ROUGE-L, LLM scores), public opinion (F1, Acc).

## Data sources named
- Survey corpus: ~2,200 candidate records → 241 included papers (Web of Science/Google Scholar snowballing).
- Sports-understanding benchmarks: SportQA (70,592 QA, 3 difficulty levels), SPORTU (1,701 videos / 12,948 QA), Sports-QA (5,967 videos / 94,073 QA), QASports (~1.5M QA, auto-annotated), BIG-bench sports subtask, SPORTU-text/video, ActionAtlas (56 sports), Tennis7, UCI-HAR, SN-Caption-test-align, VC-NBA-2022, LiveCC (49 sports), RotoWire, ShuttleSet+.
- Tables 3–5 mark open-source links per dataset (GitHub/Hugging Face where available); AF (American football) appears only in broad-coverage sets (BIG-bench, QASports, SPORTU, Sports-QA) — no NFL-specific LLM work found.

## Findings (numbers and facts, not vibes)
- Distribution (Figure 3): soccer leads with 74 datasets; referee datasets = 2% of stakeholder data; expert annotation = 6% in general datasets vs 41% in specialized sports benchmarks; 21.5% discriminative vs 78.5% generative paradigms.
- Action recognition: Tennis7 93.80% Acc; ActionAtlas 42.95 ± 2.91% Acc with GPT-4o (fine-grained hard); UCI-HAR fitness 92.30% Acc (GPT-4).
- Commentary generation: MatchVoice CIDEr 42.00 on SN-Caption-test-align (Llama 3 fine-tuned); VC-NBA-2022 CIDEr 150.70; zero-shot Video-LLaMA CIDEr 3.44 (Zhang et al. 2023) — the file's canonical "zero-shot near-failure" example; Baughman et al. golf commentary ROUGE-L 99.12 (fine-tuned Llama 2 7B); LiveCC 40.08 Win Rate on 49 sports.
- Tactics: TacticalGPT 50.00% Acc (soccer tactical decisions, GPT-NeoX-20B); SportGen (basketball) 98.41 DnC-10; TacticExpert 83.33 Macro F1.
- Performance prediction: handball outcome RMSE 5.20 (Mistral-7B); badminton RallyTemPose 54.30% Acc (BERT); cricket F1 86.30 (GPT-4o mini); basketball in-context social-media 64.90% Acc.
- Refereeing: X-VARS foul-decision rationale 3.80/5.00 Likert (Video-ChatGPT).
- News/table-to-text: Tree-of-Report 54.92 CS-F1 (RotoWire basketball), 93.94 (badminton ShuttleSet+); opinion ABSA soccer sentiment 80.00 F1 (RoBERTa).
- Recurring quantitative consensus (field-level, per survey): domain-adapted/fine-tuned models decisively beat zero-shot general models within each task; zero-shot sports commentary (CIDEr 3.44) vs fine-tuned (CIDEr 38–42) is the concrete demonstration.
- Survey limitations stated: English-only; coverage skew to soccer/basketball is field-real, not survey artifact; search cutoff Oct 4 2025, inclusion cutoff Jul 31 2025; cross-dataset numbers not comparable; "best performance" cherry-picked per paper; generative metrics weakly calibrated.
- Future directions §4.2 (the field's agenda): trustworthy sport AI (RLHF debiasing), streaming/low-latency inference (KV-cache, Mamba), knowledge grounding/RAG with tool use (live databases, rule engines), in-the-wild latency-aware benchmarks, edge deployment (quantization, distillation).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (generative content automation): the fine-tuned-vs-zero-shot commentary gap (CIDEr 42.00 fine-tuned Llama 3 vs 3.44 zero-shot Video-LLaMA) is a trust-signal-grade caution: if GSE ever builds automated pick-writeup/recap generation, zero-shot general video-LLMs are empirically near-failure; only fine-tuned models clear the bar. Serves no current program; passive reference only.
- OTHER (dataset inventory): Tables 3–5 are a pointer list for any future video/text understanding component (play-by-play-to-narrative). The AF/NFL-specific cell is near-empty — this confirms GSE is ahead of, not behind, the LLM-sports literature on football analytics (calibration/sizing program: no catch-up needed here).
- OTHER (method cross-reference): §4.2's field agenda (streaming low-latency inference via Mamba/KV-cache, RAG with live databases) converges with the Mamba-motion-model lane in file 0066 — Mamba is the field's consensus low-latency architecture choice. Corroborates, does not extend.

## Engine-actionable? (yes/no + one-line what)
No — no model, method, or dataset to adopt; keep Tables 3–5 as a passive dataset pointer list for a future generative-content lane.
