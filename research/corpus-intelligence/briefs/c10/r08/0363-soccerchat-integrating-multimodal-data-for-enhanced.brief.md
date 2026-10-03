# arxiv-program/research/2026-09-21/arxiv-deep/0363-soccerchat-integrating-multimodal-data-for-enhanced.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2505.16630 (SoccerChat) — a Qwen2-VL-7B-Instruct fine-tuned on a 49,120-QA instruction dataset built from SoccerNet video + captions + ASR commentary for soccer action classification and referee QA. Verdict in the file: ADAPT — the dataset-construction recipe and training-strategy findings are portable; the soccer-specific weights are not.
## Key metrics/methods (formulas where given, else "not specified")
- No closed-form equations; token-budget arithmetic: 24 frames/segment at 2.4 FPS × ≤128 visual tokens/frame (16:9 → 112 patches) = 2,688 tokens per 10-s segment.
- Instruction pipeline: ±5 s clip extraction around event labels (≤10 s, no camera transitions) → consecutive-event pairing (1–7 s apart) → caption/commentary alignment (captions +3 s to +10 s; replay ASR filtered) → GPT-3.5 250–300-word descriptions → two QA types (overview-based, detail-based).
- Jersey-color anonymization (home/away per game; "red-jerseyed team") to force event-dynamics learning over name memorization.
- Six variants: SoccerChat, SC+XF (joint), SC-FT-XF (sequential), Q2VL (base), Q2VL-XF, X-VARS. Evaluation via QwQ Scorer LLM-judge, 0–10 scale; plus weighted precision/recall/F1, Cohen kappa, MCC, Hamming loss for classification.
- Artifacts released: dataset, all variant weights, eval code, intermediate generations/scores (github.com/simula/SoccerChat).
## Data sources named
- SoccerNet-v2: 500 full-length matches, ~764 h footage, ~300,000 events across 17 action classes.
- SoccerNet Dense Video Captioning; SoccerNetEchoes (ASR commentary); jersey-color annotations; SoccerNet-XFoul (referee QA validation).
- Derived: 90,834 event clips, 12,827 paired-event clips, 49,120 QA pairs.
## Findings (numbers and facts, not vibes)
- XFoul QA mean QwQ: Q2VL-XF 6.81 (best), SC+XF 6.46, SC-FT-XF 6.14, SoccerChat 3.37, X-VARS 2.91, Q2VL 2.58. (COACHING)
- X-VARS (exclusively XFoul-trained) scored 2.91 ≈ untrained Q2VL 2.58 → general pretraining strength dominates narrow fine-tuning data. (COACHING)
- Six-class classification mean QwQ: SoccerChat 6.80 (75th pct 10), SC+XF 5.97, Q2VL 3.44; weighted F1: SoccerChat 0.57, SC+XF 0.49, Q2VL 0.17, X-VARS 0.19, SC-FT-XF 0.12, Q2VL-XF 0.05. (COACHING)
- Sixteen-class: SoccerChat 6.42, SC+XF 6.15, SC-FT-XF 4.00; sequential foul fine-tuning caused catastrophic forgetting. (COACHING)
- JOINT multi-dataset training (SC+XF) beat sequential fine-tuning (SC-FT-XF) on both classification and referee tasks. (COACHING)
- Evaluation rests on LLM-as-judge (QwQ) with no human-correlation validation; QwQ scores reported as means without confidence intervals or significance tests. (TRUST-SIGNAL)
- Soccer-only: zero cross-sport evidence; rights are research-licensed (SoccerNet). (OTHER)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline above.
## Engine-actionable? (yes/no + one-line what)
Yes — replicate the instruction-dataset pipeline (replay-aware clip extraction + consecutive-event pairing + caption/commentary alignment + two-type QA taxonomy) for NFL broadcast video, fine-tune a 7B-class video LLM, and always train jointly across task datasets rather than sequentially fine-tuning.
