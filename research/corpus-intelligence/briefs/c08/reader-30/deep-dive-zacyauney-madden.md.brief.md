# docs/research/2026-10-01/cv-corpus/deep-dive-zacyauney-madden.md
## What it is (1-2 sentences)
Deep-dive (2026-10-01, confidence HIGH) on Zac Yauney's "Madden NFL Computer Vision Classifier" project page: a two-stage football classification pipeline (formation → play) using a fine-tuned Inception v3 for 4 shotgun-formation variants and a ResNet18 per-frame classifier with a sequence voting mechanism over 4 play classes; method intel only (no repo/code; Madden footage not licensable).
## Key metrics/methods (formulas where given, else "not specified")
- Formation classification: fine-tuned Inception v3, custom final layer, 4 classes (Gun Bunch, Gun Empty Base Flex, Gun Normal Y Off Close, Gun Trey Y-Flex) from manually labeled screenshots; result reported qualitatively as "high accuracy" (no number given).
- Play classification: ResNet18 frame classifier, frames processed independently, aggregated via a "voting mechanism" over full play sequence into 4 classes (Inside Zone, Y-Sail, Mesh Spot, Escape); exact vote-aggregation formula NOT specified (page says only "voting mechanism"; plain-majority is the standard reading but the author doesn't say).
- GSE transfer spec: per-frame independent classification → vote aggregation with optional phase weights; confidence = vote margin `(winner − runnerUp) / total`; test fixture: 10 frames, 7 Inside Zone vs 3 Y-Sail → `voteMargin = 0.4` exactly; phase-weighted variant flips to Y-Sail (9 vs 7); 5/5 tie → deterministic first-seen tie-break; empty frames → throws `/no frames/`.
- Corpus anchors cited: Sloan 2018 CART formation classification 72.3% (coordinates, no pixels); THI thesis 74.13% run/pass with YOLOv8+OCR+XGBoost; Chung thesis — images + play-by-play text beats either alone. Consensus: formation/play classification from visual features is a solved-shape problem at ~70–85% accuracy.
## Data sources named
Madden NFL gameplay footage (EA copyrighted — method intel only, explicitly do-not-scrape); author's manually labeled screenshots and trimmed play videos (not distributed); corpus siblings: Sloan 2018, Chung's thesis, THI thesis.
## Findings (numbers and facts, not vibes)
- Rationale quoted: *"different phases (snap, development, completion) may look quite different"* — the design justification for the voting scheme.
- The page's exact limit: the vote formula beyond "voting mechanism" is unspecified; the file's implementation spec implements plain-majority and documents the assumption.
- GSE placement: this is the tendency-layer blueprint consuming tracking output AFTER gaps (a–c) close; stage 1 (pre-snap formation) is cheap, stage 2 votes over the sequence.
- Improvement path: phase-weighted voting (weight the development phase more than pre-snap milling), then fuse with play-by-play text per Chung's finding.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: two-stage formation→play classification is a tendency-layer blueprint for classifying scheme/offensive concepts from tracked geometry.
- QB-BEHAVIOR: play-class labels (Inside Zone / Y-Sail / Mesh Spot / Escape-scramble) map to QB decision/play-type taxonomy.
- OTHER: vote margin as a built-in confidence signal (unanimous vs. split votes → tendency confidence) is engine-actionable for calibration.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the model-agnostic two-stage classifier contract (formation snapshot + per-frame vote aggregator with vote-margin confidence) on top of tracked geometry, with phase-weighted voting as the learned upgrade.
