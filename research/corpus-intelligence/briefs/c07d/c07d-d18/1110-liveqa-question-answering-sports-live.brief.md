# research/2026-09-21/arxiv-deep/1110-liveqa-question-answering-sports-live.md
## What it is (1-2 sentences)
Research note on arXiv:2010.00526v1 (Liu, Jiang, Wang, Li 2020): LiveQA, a sports question-answering dataset over live NBA broadcast text — 1,670 documents, 1,786,616 sentences, 117,050 quizzes — requiring tracking entities across a ~1,070-sentence timeline plus inference and calculation, not just span extraction. Verdict: ADAPT as GSE's timeline-aware evaluation-harness design ("LiveQA-NFL") for game-summary/LLM pipelines and live-event narration regression testing; the 2020-era reader models are dated and not the transferable artifact.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified — reader equations not recorded at implementation fidelity in the read ("Not stated in paper" for re-implementable detail).
- Transferable artifact: the dataset taxonomy (comparison / calculation / inference / tracking) and the timeline-evidence-location labeling design (contextual 68.6%, after game 30.6%, impossible 0.8%), not the reader architectures.
- Baselines: random (50.0%), dominant-option (56.4%), gated-attention reader (53.1%).

## Data sources named
- Live NBA broadcast text (source games/documents; not user queries); GitHub repos: code https://github.com/PKU-TANGENT/GAReader-LiveQA, data https://github.com/PKU-TANGENT/LiveQA.
- GSE analogue named: nflverse play-by-play + drive text for sampling 2024 NFL games.

## Findings (numbers and facts, not vibes)
- Scale: 1,670 NBA documents/games; 1,786,616 sentences; 117,050 quizzes; per-document averages: 1,069.83 sentences, 70.09 quizzes.
- Evidence location: contextual 68.6%, after game 30.6%, impossible 0.8%.
- Question-type distribution: comparison 16.6%, calculation 25.4%, inference 28.5%, tracking 29.5%.
- Accuracy baselines: random 50.0%, dominant-option 56.4%, gated-attention reader 53.1% — the neural reader LOSES to the dominant-option heuristic, showing how hard timeline reasoning over 1,000+ sentences is.
- Limitations: dominant-option baseline beating the neural model is a red flag for dataset bias (answer-distribution artifacts); NBA-only, broadcast-text only; exact train/dev/test split not recorded ("Not stated in paper"); impossible-answer rate 0.8% too low to test abstention; models are 2020-era — modern long-context LLMs need re-benchmarking.
- GSE overlap: no existing timeline-QA evaluation harness in the corpus — new capability; complements event-tracking work as an evaluation design, not duplicative.
- Implementation spec: (a) build "LiveQA-NFL" — sample 2024 NFL games, extract play-by-play + drive text from nflverse; (b) auto-generate quiz questions in the four types with evidence-location labels; (c) evaluate GSE's game-summary/LLM pipelines on it; (d) use as regression test for any live-event narration product. Effort: ~1 engineer-week for the dataset builder.
- Repro test: 50 NFL games from 2024, 1,000 auto-generated questions; accuracy by question type vs dominant-option baseline; success = GSE pipeline beats dominant-option by ≥10 points on tracking and inference questions (the LiveQA reader failed here — clearing it proves genuine timeline reasoning).
- Acceptance gate: ADOPT as the standard GSE timeline-QA benchmark if a 200-question pilot shows the four question types are answerable by humans at ≥90% (validating question quality); REJECT if auto-generated questions are noisy (human accuracy <80%).
- Improvement experiment: add counterfactual questions ("if that 4th-down conversion had failed, who gets the ball?") requiring branching timeline reasoning — the paper's questions are all retrospective; counterfactuals test the causal game-state models GSE needs for live win-probability narration.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Serves the evaluation/testing lane, not a prediction program: a timeline-QA benchmark over NFL game text would regression-test GSE's game-summary and live-narration pipelines, with the four-type taxonomy (comparison/calculation/inference/tracking at 16.6/25.4/28.5/29.5%) defining coverage quotas for the question set. The counterfactual-question improvement experiment connects directly to the live win-probability narration product (branching game-state reasoning).
- COACHING: Tracking-type questions (29.5%, the largest slice) over play-by-play text naturally surface coaching-tendency material (down-and-distance decisions, timeout usage, 4th-down go/kick sequences) — a LiveQA-NFL harness doubles as a structured probe of whether GSE's pipelines can recover coaching decisions from raw game timelines, which is the coaching-tendency program's data-extraction step.
- TRUST-SIGNAL: The acceptance gate is a trust methodology note — the 200-question pilot with ≥90% human accuracy as a question-quality bar (reject if <80%) is how any auto-generated evaluation set must be validated before it gates model releases; UNCERTAIN until that pilot runs.
- UNCERTAIN: The 53.1% neural-vs-56.4% dominant-option result warns that auto-generated quiz sets carry answer-distribution artifacts; the "beats dominant-option by ≥10 points" bar exists precisely to detect that artifact class.

## Engine-actionable? (yes/no + one-line what)
Yes — build "LiveQA-NFL" (nflverse 2024 games → auto-generated comparison/calculation/inference/tracking questions with evidence-location labels, human-validated at ≥90% on a 200-question pilot) as the regression benchmark for GSE's game-summary and live win-probability narration pipelines, gating on ≥10-point advantage over the dominant-option baseline on tracking/inference questions; ~1 engineer-week.
