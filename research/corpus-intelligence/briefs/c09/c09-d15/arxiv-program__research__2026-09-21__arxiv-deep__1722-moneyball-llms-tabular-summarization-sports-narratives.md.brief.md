# arxiv-program/research/2026-09-21/arxiv-deep/1722-moneyball-llms-tabular-summarization-sports-narratives.md
## What it is (1-2 sentences)
Full-paper ledger read of arXiv:2510.18173v2 (Upadhyay et al., 2026, ASU/Adobe) — "Moneyball with LLMs": tests whether decomposition strategies beat monolithic zero-shot CoT at converting long game narratives into full stat tables (SporTabSet cricket/basketball benchmark), and whether gains come from reasoning or removing multi-entity interference. Verdict: ADAPT the Text–Tuple–Table recipe with hardening (evidence spans, conflict flagging); raw T3 rejected for production without safeguards.
## Key metrics/methods (formulas where given, else "not specified")
- Hallucination–Omission Index: HOI = Over-Count% − Under-Count% (directional diagnostic; positive = systematic over-counting). Cell accuracy (exact match), RMSE, SMAPE preferred for sparse tables.
- Strategies: (1) ZS-CoT baseline; (2) Divide & Generate (n ∈ {2,4,8} chunks, merge intermediate scorecards); (3) EntityCoT (one LLM call per entity row); (4) Text–Tuple–Table T3 (LLM emits atomic (Entity, Attribute, Value) tuples, rule-based compiler aggregates).
- Perturbations: entity anonymization, OOD entity substitution, entity entanglement paraphrases; masked cricket variant removing dismissal-summary extractive cues.
## Data sources named
SporTabSet: cricket ball-by-ball ODI commentary (~300 balls/match) → batsman/bowler scorecards; 2,500 basketball games of play-by-play → box scores. Models: Llama-3.3 70B Instruct, GPT-4.1, Gemini 2.5 Flash. No repository link found in text.
## Findings (numbers and facts, not vibes)
- Mean gains vs ZS-CoT: Divide & Generate (n=8) +14.9 pp accuracy / −37.8% RMSE; EntityCoT +15.1 pp / −49.5% RMSE; T3 +20.6 pp / −62.8% RMSE (best overall).
- Gemini 2.5 Flash T3: cricket batsman 94% accuracy / 0.96 RMSE; bowler 89% / 0.59; basketball 75% / 0.97. Llama-3.3 basketball CoT 30% → T3 57%; GPT-4.1 cricket batsman CoT 53% → T3 64%.
- Masking dismissal summaries collapses scores: GPT-4.1 89% → 61%, Gemini 86% → 49% — much "reasoning" was extractive cue-matching.
- Anonymization devastates basketball: Gemini 62% → 35% (−27 pp), GPT-4.1 47% → 29% (−18 pp). Cricket entity entanglement: up to −5 pp accuracy, +12 SMAPE.
- T3 failure modes (Appendix D): degenerate repetition and cumulative hallucination on GPT-4.1/Llama-3.3 — best average accuracy, worst tail behavior without safeguards.
- Reproducible test criteria set in ledger: T3 cell accuracy ≥ 0.85 on injury-tuple schema, ≥ 0.70 on full box score; HOI within ±5 pp; conflict-flag rate ≤ 10% of cells.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (NLP/structuring): narrative → structured-record pipeline composes with ledger 1715 (KEE segmentation); proposed GSE build: `gse/nlp/text_tuple_table.py` with evidence-span tuples + rule-based compiler + HOI on every NLP eval.
- TRUST-SIGNAL: injury-news extraction as (player, {body part, mechanism, status, timeline}, value) tuples into the injury table — first application target.
## Engine-actionable? (yes/no + one-line what)
Yes — full implementation spec + acceptance gate in the ledger: adapt T3 with evidence-span tuples and conflict flagging for human review, starting with the narrower injury-tuple schema; reject any deployment that skips the anonymization-perturbation check.
