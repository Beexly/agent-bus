# arxiv-program/research/2026-09-21/arxiv-deep/0360-enhancing-sports-strategy-with-video-analytics.md
## What it is (1-2 sentences)
Dissertation testing how effective Multimodal LLMs (VideoLLaMA2, LoRA fine-tuned) are at tennis video understanding — single-event action classification, then the harder unsolved task of identifying full event sequences in a rally — and whether traditional CV detectors or vision-encoder fine-tuning close the gap. Verdict recorded: ADAPT — the "structured-CV-features-as-text-in-the-prompt" hybrid pattern (edit score 76.0 vs benchmark 82.1) is the portable lesson; raw MLLM video reasoning is too weak to use directly.

## Key metrics/methods (formulas where given, else "not specified")
Normalized segmental edit score (Lea et al. 2016), each event treated as one word: Edit Score = (1 − (event additions, deletions or replacements needed) / (number of events in longer label)) × 100. Model: VideoLLaMA2 7B-Base, frozen CLIP clip-vit-large-patch14-336 encoder, STC connector, LoRA fine-tuning; fixed prompt "What is happening in the tennis video?", templated answer "The {e1} player hit a {e2} {e4} {e3} {e5}." Variants tested: epochs {8,10,20,50}, audio, 8→32 frame sampling, frame numbers, oracle event count in prompt, all-frames sampling, STC-connector-only probe, player bounding boxes in video/in prompt/both, court corners + ball coordinates in prompt, 17 vs 4 keypoints at various frame intervals, vision encoder unfrozen, CLIP fine-tuned alone then reloaded into VideoLLaMA2 (6/10 epochs).

## Data sources named
FineTennis dataset (Liu, Jiang et al. 2025, arXiv:2504.08222 = F³Set): tennis rally videos from Grand Slam tournaments; each event classified by 5 sub-classes (e1 hitting player near/far, e2 forehand/backhand, e3 serve/return/stroke, e4 direction, e5 outcome; 56 event types). 7,445 training / 2,271 test videos (train mean 3.68 events/rally; test mean 3.90). Authors' lab dataset (NUS); no public URL stated. Baseline: F³EST traditional model (edit scores 88.4 on 38 event types / 82.1 on 111 types — coarser/finer granularity than the 56-type task, imperfect comparison). Code: https://github.com/bigcrushes/videollama2_tennis.

## Findings (numbers and facts, not vibes)
- Single-event (8 epochs): e1 0.96, e2 0.73, e3 0.83, e4 0.72, e5 0.96, overall 0.41 (plateau at 10 epochs; 6 epochs → 0.28)
- Rally edit scores (10 epochs): default 34.4 (8 ep: 30.2; 20 ep: 33.1; 50 ep: 28.0 overfit); audio 25.3; 32-frame sampling 39.7 (best pure-video); all-frames 28.6 (sampling not the bottleneck); oracle event count in prompt 49.8 (diagnostic, not a real method); self-predicted count 30.0 (pipeline collapsed)
- CV-feature fusion: 32-frame default 39.7 → bboxes drawn in video 18.2 (halved — drawn lines break the vision encoder) → bboxes in prompt 61.3 → bboxes + court corners + ball coords in prompt every 2 frames 76.0 (approaching the 82.1 benchmark) → 17 keypoints every 20 frames + court + ball 50.7 → 4 keypoints every 5 frames + court + ball 57.6
- STC connector alone: accuracy 0.018 (random-level — connector features near-useless for this task)
- Vision encoder: unfrozen 1 epoch 0.087, 4 epochs 0.075 (overfit, train loss <0.1 by epoch 1); CLIP alone 1 epoch 0.43; CLIP fine-tuned separately then reloaded: 0.55 (10 ep)/0.56 (6 ep); sequence task with separately fine-tuned CLIP: 54.6 (up from 39.7)
- Qualitative: model gets rally structure right (serve start, "last" end, near/far alternation) — strong textual pattern learning, poor video understanding
- Limitations recorded: possible near-duplicate rallies across splits (same match, adjacent points); keyword-presence accuracy metric is gameable; tiny model + LoRA chosen for VRAM, full fine-tuning never run; benchmark granularity mismatch; RAM-bounded frame intervals

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — multimodal-fusion negative result + design pattern for a future GSE film-analysis content pipeline: never an MLLM-first video pipeline; instead traditional CV detectors produce structured coordinates and the LLM reasons over them as text (the hybrid reached 76.0, within 6 points of the 82.1 benchmark). If GSE builds film tooling (game-film clip labelling, auto-tagging all-22 for YouTube/TikTok lanes), this is the architecture.

## Engine-actionable? (yes/no + one-line what)
Yes, conditionally — pursue the hybrid CV→text→LLM architecture for film-analysis content tooling only if structured-feature prompting beats raw-frame prompting by ≥25 pp on event-sequence edit score on a 50-NFL-play window; otherwise reject the MLLM film-analysis lane entirely.
