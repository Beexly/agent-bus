# arxiv-program/research/2026-09-21/arxiv-deep/1110-liveqa-question-answering-sports-live.md
## What it is (1-2 sentences)
Full read of arXiv:2010.00526v1 (Liu, Jiang, Wang & Li, 2020): **LiveQA**, a timeline-aware sports QA dataset built from live NBA broadcast text — 1,670 games/documents with quiz questions requiring tracking, inference, calculation, and comparison across a ~1,070-sentence timeline — plus weak 2020-era reader baselines. Verdict in file: **ADAPT** — reusable as GSE's event-tracking/evaluation harness ("LiveQA-NFL"); the QA models themselves are dated.

## Key metrics/methods (formulas where given, else "not specified")
- Dataset-construction paper: reader architectures (gated-attention reader) not recorded at implementation fidelity in this read; equations "not stated in paper" at re-implementable detail.
- Transferable artifact: the question-type taxonomy (comparison / calculation / inference / tracking) and the timeline-evidence location design (contextual / after game / impossible).
- Assumptions: quiz questions answerable from live text; evidence-location labels reliable; multiple-choice format with a dominant option.

## Data sources named
Live NBA broadcast text. Code: https://github.com/PKU-TANGENT/GAReader-LiveQA. Data: https://github.com/PKU-TANGENT/LiveQA.

## Findings (numbers and facts, not vibes)
- Dataset scale: 1,670 NBA documents/games, 1,786,616 sentences, 117,050 quizzes; per-document averages: 1,069.83 sentences, 70.09 quizzes.
- Evidence location: contextual 68.6%, after game 30.6%, impossible 0.8%. Question types: comparison 16.6%, calculation 25.4%, inference 28.5%, tracking 29.5%.
- Baselines: random 50.0%, dominant-option 56.4%, gated-attention reader 53.1% — the neural reader **loses to the dominant-option heuristic**, showing how hard timeline reasoning over 1,000+ sentences is.
- Limitations: dominant-option beating the neural model flags dataset bias (answer-distribution artifacts); NBA-only, broadcast-text only; NFL applicability requires re-derivation; impossible-answer rate 0.8% too low to test abstention; models are 2020-era — modern long-context LLMs need re-benchmarking; train/dev/test split exactness not recorded.
- Verdict: **ADAPT**; acceptance gate: adopt as the standard GSE timeline-QA benchmark if a 200-question pilot shows four question types answerable by humans at ≥90%; reject if auto-generated questions are noisy (human accuracy <80%).
- Improvement experiment in file: add *counterfactual* questions ("if that 4th-down conversion had failed, who gets the ball?") requiring branching timeline reasoning — tests the causal game-state models GSE needs for live win-probability narration.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Evaluation harness — build "LiveQA-NFL": sample 2024 NFL games, extract play-by-play + drive text from nflverse, auto-generate quiz questions in the four types with evidence-location labels, evaluate GSE's game-summary/LLM pipelines on it; regression test for any live-event narration product (~1 engineer-week for dataset builder).

## Engine-actionable? (yes/no + one-line what)
Yes — build a 50-game/1,000-question LiveQA-NFL pilot from nflverse play-by-play and require GSE's game-summary/LLM pipelines to beat the dominant-option baseline by ≥10 points on tracking and inference questions.
