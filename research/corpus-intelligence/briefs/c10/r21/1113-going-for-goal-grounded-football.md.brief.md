# arxiv-program/research/2026-09-21/arxiv-deep/1113-going-for-goal-grounded-football.md
## What it is (1-2 sentences)
Full-read ledger of Suglia et al. (arXiv:2211.04534v1), "Going for GOAL": a video-grounded sports commentary dataset with a four-task benchmark (commentary retrieval, frame reordering, moment retrieval, commentary generation). Verdict in file: ADAPT the retrieval task; REJECT the generation task.
## Key metrics/methods (formulas where given, else "not specified")
- Four tasks: (1) commentary retrieval (video→commentary), (2) frame reordering (order shuffled frames), (3) moment retrieval (commentary→video moment), (4) commentary generation.
- Baselines: MLP, bi-GRU, bi-LSTM, HERO, VRoBERTa, BART variants. Exact losses/architectures not recorded at re-implementable fidelity ("Not stated in paper").
- Code: https://gitlab.com/grounded-sport-convai/goal-baselines. Validation: standard train/dev/test splits; manual evaluation of 100 generated samples.
## Data sources named
1,107 English football highlight videos, 2018–2020; 4,387.38 minutes total (mean 3.96, min 1.3, max 11.6). Competitions: Serie A 638, Premier League 167, UCL 62, Europa League 61, FA Cup 34, Carabao Cup 18, Championship 77, Euro qualifiers 50.
## Findings (numbers and facts, not vibes)
- Commentary retrieval (best config): R@1 63%, MRR 0.79, mean rank 1.58 (main) vs 1.57 (appendix) — discrepancy preserved as read.
- Frame reordering: MLP 10.42%, MLP+position 10.99% (main) vs 10.42% (appendix); bi-GRU 90%, bi-LSTM 91%, HERO 87%.
- Moment retrieval: HERO soft 70.6%, weighted 2.6%; VRoBERTa 32.24%, 2.11%.
- Generation (weak): BART — BERTScore 0.848, BLEU 0.79%, METEOR 3.80%, ROUGE-L 8.79%; HERO-nt — 0.847, 0.60%, 3.7%, 7.2%; Oracle BART KB-target — 0.874, 2.28%, 8.21%, 21.2%. Manual 100-sample: BART plausible 71% / repetition 9% / incoherent 20%; HERO 77%/0%/23%; HERO+video 43%/0%/57%.
- Ledger's gate: ADAPT retrieval into GSE's clip-search if a CLIP-style modern baseline beats the paper's R@1 by ≥5 points on GOAL-NFL pilot data; REJECT generation entirely.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Commentary-retrieval R@1 63% as benchmark for "find the clip for this storyline" product feature: OTHER (multimodal product capability, not prediction).
- Conditioning retrieval on structured game state (score, clock, down/distance) to disambiguate visually similar moments: OTHER (proposed improvement experiment, GSE data available).
- Generation results uniformly below usable bar: OTHER (explicit do-not-adapt).
## Engine-actionable? (yes/no + one-line what)
No for the prediction engine; product-only — build a "GOAL-NFL" clip/commentary retrieval benchmark gated on a CLIP-style baseline beating R@1 by ≥5 points on pilot data, and do not touch commentary generation.
