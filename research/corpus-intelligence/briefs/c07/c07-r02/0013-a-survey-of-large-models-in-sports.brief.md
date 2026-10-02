# arxiv-program/research/2026-09-21/arxiv-deep/0013-a-survey-of-large-models-in-sports.md
## What it is (1-2 sentences)
A systematic survey (241 core papers, Jan 2020–Jul 2025) of large models (LLMs/MLLMs) applied across 19 sports tasks and 6 stakeholder groups, plus a dataset/benchmark inventory. Verdict in the source: REJECT as a model-building source — no novel method or experiment, kept only as a reference map.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no novel method). Survey methodology: start from 3 seed surveys, iterative forward/backward snowballing (Google Scholar "cited by", Boolean-filtered) until saturation, PRISMA-2020 compliant, 4-dimension inclusion/exclusion filters. Metrics cataloged per task: action spotting (Acc, F1, mAP), AQA (Spearman's rho, mAP), tactics (Acc, DnC-10, Macro F1), performance prediction (Acc, RMSE, F1), commentary (CIDEr, METEOR, ROUGE-L, BARTScore), highlight (F1, mAP), opinion (F1, Acc).
## Data sources named
SportQA (70,592 QA), SPORTU (1,701 videos / 12,948 QA), Sports-QA (5,967 videos / 94,073 QA), QASports (~1.5M QA, auto-annotated), ActionAtlas (56 sports), SN-Caption (test-align), VC-NBA-2022, LiveCC (49 sports), RotoWire, ShuttleSet+, Tennis7, UCI-HAR, plus open-source links in Tables 3–5 (github/huggingface).
## Findings (numbers and facts, not vibes)
- 241 papers from ~2,200 screened; soccer leads with 74 datasets; referee datasets 2% of stakeholder data; expert annotation 6% in general datasets vs 41% in specialized sports benchmarks; 21.5% discriminative vs 78.5% generative paradigms.
- Action recognition: Tennis7 93.80% Acc; ActionAtlas 42.95 ± 2.91% Acc (GPT-4o); UCI-HAR 92.30% (GPT-4).
- Commentary: MatchVoice CIDEr 42.00 (SN-Caption-test-align, fine-tuned Llama 3); VC-NBA-2022 CIDEr 150.70; zero-shot Video-LLaMA CIDEr 3.44 vs fine-tuned 38–42 — the canonical zero-shot near-failure; Baughman golf commentary ROUGE-L 99.12 (fine-tuned Llama 2 7B); LiveCC 40.08 Win Rate on 49 sports.
- Tactics: TacticalGPT 50.00% Acc; SportGen 98.41 DnC-10; TacticExpert 83.33 Macro F1.
- Performance prediction: handball outcome RMSE 5.20 (Mistral-7B); badminton 54.30% Acc; cricket F1 86.30 (GPT-4o mini); basketball in-context social-media 64.90% Acc.
- Refereeing: X-VARS foul-decision rationale 3.80/5.00 Likert (Video-ChatGPT). News: Tree-of-Report 54.92 CS-F1 (RotoWire), 93.94 (ShuttleSet+).
- Field consensus: fine-tuned/domain-adapted models decisively beat zero-shot general models per task; AF/NFL-specific coverage near-empty (BIG-bench, QASports, SPORTU, Sports-QA only, none NFL-specific).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — dataset/benchmark inventory reference; background consensus that fine-tuning beats zero-shot for sports content generation.
- OTHER — INFERENCE: the near-empty NFL-specific cell of the map supports that GSE is ahead of the LLM sports literature on football analytics, per the source's own overlap assessment.
## Engine-actionable? (yes/no + one-line what)
No — keep only as a dataset pointer list (Tables 3–5) if a generative content lane ever opens; no engine build follows from it.
