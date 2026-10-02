# arxiv-program/research/2026-09-21/arxiv-deep/0007-neural-sabermetrics-world-model.md
## What it is (1-2 sentences)
A full-text deep read of arXiv:2602.07030v1 (Ahn et al., 2026) — continuous pretraining of a Llama-3B model on serialized MLB pitch data (next-token prediction) to learn game dynamics ("neural sabermetrics"), with GSE verdict ADAPT: transfer the paradigm as a small structured event-sequence model for NFL play-by-play, not the 3B model itself.
## Key metrics/methods (formulas where given, else "not specified")
- Training: Llama 3B backbone, non-overlapping windows of 3072 tokens, batch 1024, TPUv4-64. No equations beyond implied next-token objective; optimizer/LR not stated in paper.
- Corpus: >7M pitch sequences, ~3B tokens, >10 years of MLB tracking; games average >120K tokens per game, segmented to 3072-token windows.
- Pitch-type (fastball vs non-fastball): baseline Pi (2018) Acc 0.633 / Recall 0.792 / F1 0.720; world model Acc 0.637 / Recall 0.792 / F1 0.722 (gain +0.004 acc / +0.002 F1 — nil).
- Swing decision: baseline Gopal et al. (2024) IZ 0.325 / OZ 0.704; world model IZ 0.766 / OZ 0.792 (large gains, but the 0.325 IZ baseline is anomalous — task framing may differ; comparison possibly invalid).
- Validation: train regular season, evaluate postseason as OOD. No calibration, no sportsbook/ROI evaluation anywhere.
- GSE acceptance gate (from the brief, not the paper): adopt small event model only if it beats a logistic baseline by ≥0.02 log-loss on held-out next-play run/pass, ECE ≤ 0.03, and an ablation proves history-beyond-current-state carries the gain.
## Data sources named
Serialized MLB tracking data (Statcast-like: release point, RPM, speed, plate coordinates, spin direction, swing speed); exact seasons/train-test counts/public-vs-proprietary access not stated in paper.
## Findings (numbers and facts, not vibes)
- Pitch-type headline task is essentially a non-result: +0.004 accuracy for a 3B-parameter TPUv4-64 run.
- Swing-decision improvements are large but baseline comparability is suspect (0.325 in-zone accuracy is implausibly low for any model).
- Author-flagged limitation: 3072-token windows on >120K-token games break long-range dependencies (pitcher fatigue, lineup turnover, game script).
- Tokenization of continuous measurements is the single most important implementation detail and is not described in the paper.
- Postseason-as-OOD changes leverage/population, not physics; rule-change distribution shift untested. Leakage across the regular/postseason boundary unaddressed.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: proposed GSE implementation = next-play run/pass prediction over serialized nflverse play-by-play (down/distance/yardline/score/time/personnel/motion/alignment tokens) — a scheme-tendency feature learner; latent game-state bottleneck encoder with joint calibration loss is the paper's own flagged improvement.
- OTHER: the validation-design rule — next-event prediction with postseason-OOD holdout, logistic-regression baseline on (down, distance, yardline, score diff, time, timeouts), mandatory calibration audit (ECE) before any probability touches the stack; serve only embeddings as features, never raw probabilities.
## Engine-actionable? (yes/no + one-line what)
Yes — spec is implementation-ready: small transformer/state-space model on binned nflverse event tokens, next-play run/pass log-loss + ECE vs logistic baseline, per-game-state embeddings consumed by the calibrated stack, with the paper's own marginal gains as a cautionary bound on expectations.
