# docs/arxiv-program/research/2026-09-21/arxiv-deep/1716-asksport-web-application-sports-question-answering.md
## What it is (1-2 sentences)
Ledger entry for arXiv:2503.21067v1 (2025): AskSport, a web app for sports question-answering using a thin BM25-retrieval + RoBERTa extractive-reader pipeline, with a provenance-first UI contract (answer + confidence + source title + source URL). Verdict: ADAPT (interface contract only — no usable results).
## Key metrics/methods (formulas where given, else "not specified")
Pipeline: BM25 top-10 retrieval over QASports corpus → RoBERTa extractive reader scores answer spans → top-3 answers with (confidence, source title, source URL); reader confidence = softmax over start/end span logits; implemented with Haystack, Python 3.10, Streamlit, HuggingFace RoBERTa. No fine-tuning, no reranking, no calibration analysis.
## Data sources named
QASports corpus (JSON/CSV context-question-answer triples across soccer, American football, basketball); deployed app uses basketball subset only.
## Findings (numbers and facts, not vibes)
- No systematic benchmark: evaluation is three hand-picked example questions with confidences in the 0.64–0.80 range (e.g., "Who won Rookie of the Year?" 0.7945/0.7198/0.6899; "How many titles have the Warriors won?" 0.7897/0.7677/0.6377; "Who is the best basketball player?" 0.7978/0.7108/0.6684).
- The 0.7978 top confidence on the unanswerable opinion question ("best player") is disqualifying evidence that raw softmax confidences are uncalibrated and must never be displayed as reliability signals.
- Basketball-only deployment; American football coverage not demonstrated; single-hop extractive assumption fails on multi-hop/aggregation questions.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Provenance-first QA contract (answer + calibrated confidence + source title + source URL + explicit abstention): OTHER
- Raw-softmax confidence on an unanswerable question as a cautionary trust signal: TRUST-SIGNAL
- Abstention path and retrieval-confidence gating for a deployable copilot: OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the provenance UI contract for GSE's research copilot, but build a 200-question eval set with temperature-scaled confidences and ≥80% abstention on unanswerables; reject raw-softmax display and BM25-only retrieval.
