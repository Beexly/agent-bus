# arxiv-program/research/2026-09-21/arxiv-deep/1123-automated-tackle-injury-risk-assessment.md
## What it is (1-2 sentences)
A computer-vision pipeline (YOLOv4 + Kalman tracking + OpenPose) to flag head-injury risk in rugby tackles from broadcast video. The source ledger verdict is REJECT — 41% of evaluation clips could not be processed even with manual tuning, so the paper's method is treated as a failure case, not a portable technique.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no novel formulas; standard YOLOv4 detection, Kalman filtering/smoothing, OpenPose head centers, fixed head-height thresholds defining "risk regions," binary high/low-risk label per tackle. Assumptions: fixed thresholds define risk; heuristic label is a valid proxy for injury; manual test-set tuning acceptable.
## Data sources named
Evaluation corpus: 109 front-on one-on-one rugby tackle clips (broadcast video). Ball detector trained on 551 images. Only 64/109 clips evaluated (58 clean + 6 with manual parameter changes). No prospective injury data — target is a heuristic label, not actual concussions/injuries.
## Findings (numbers and facts, not vibes)
- At the 15% risk region: accuracy 62.50% on the 64 successful clips; 36.70% over all 109 clips.
- F1 = 0.50; Cohen's κ = 0.28 (fair agreement).
- 45 of 109 clips (41%) could not be processed at all, even with manual tuning.
- Verdict: REJECT — weak metrics, compromised evaluation, no real injury target, nothing portable.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 41% processing failure + test-set tuning + heuristic target (OTHER): a cautionary example — CV injury-risk papers without prospective injury outcomes are not evidence, just proofs of concept.
- κ = 0.28 / F1 = 0.50 (TRUST-SIGNAL): below any bar that would justify trusting an automated injury-risk flag.
## Engine-actionable? (yes/no + one-line what)
No — one-line negative read only; do not adapt any method from this paper.
