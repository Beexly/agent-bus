# Phase 2 search notes — injuries/causal + weather + LLM/NLP cluster

Date: 2026-09-21. Cluster coordinator for the injuries/causal + weather + LLM/NLP lanes.
Output: `phase2-candidates-causal.jsonl` — **159 candidates**, one JSON object per line
(id, title, authors, abstract, published, categories, url, query).

Exclusion: every candidate base ID (trailing vN stripped) checked against
`phase2-excluded-ids.txt` (865 unique base IDs). Verified: zero leaks, zero
within-file duplicates, all 159 JSON records valid with all required fields,
zero withdrawn markers.

## Method
arXiv API (`export.arxiv.org/api/query`), `all:<query>`, max_results=200,
sortBy=relevance, polite sleep 3s between requests (retries with 8-10s backoff
when arXiv closed the connection). HTTP urllib client, UA arXivSweep/1.0.

## Queries run (21 total)

Round 1 (16 queries):
1. injury prediction sports workload machine learning — raw 200, kept 170
2. causal impact injuries betting lines sports — raw 200, kept 170
3. difference-in-differences sports synthetic control — raw 200 (retry), kept 185
4. causal inference sports analytics player absence — raw 200, kept 57
5. weather effects sports betting totals wind precipitation — raw 200, kept 161
6. physics-based weather adjustment sports prediction — raw 200, kept 112
7. news parsing injury report sports prediction — raw 200, kept 124
8. sentiment analysis line movement sports betting — raw 200, kept 155
9. LLM sports forecasting question answering — raw 200, kept 174
10. natural language processing sports analytics — raw 200 (retry), kept 128
11. sports injury risk prediction athlete monitoring — raw 200, kept 129
12. heterogeneous treatment effects sports causal ML — raw 200, kept 114
13. weather football NFL wind speed game prediction — raw 200 (retry), kept 108
14. large language model football betting odds prediction — raw 200, kept 170
15. text mining sports news outcome prediction — raw 200, kept 135
16. causal machine learning double machine learning treatment effects — raw 200 (retry), kept 31

Round 1 total: ~3,200 raw hits, 2,123 new non-excluded candidates (round-0 filter:
skip pure clinical injury papers with no sports signal).

Round 2 top-up (5 queries, stricter score>=5 filter applied at harvest):
17. player absence effect team performance causal sports — raw 200, kept 60
18. weather NFL total wind effect scoring — raw 200, kept 44
19. injury report text NFL line movement prediction — raw 200, kept 10
20. social media sentiment sports betting odds movement — raw 200, kept 22
21. transfer learning sports injury prediction tabular data — raw 200, kept 18

Raw hits total: ~4,200. Four round-1 queries hit arXiv connection resets and
were retried successfully; all 21 queries completed.

## Screening stages
- Stage 0 (harvest): skip entries matching clinical/medical terms (clinical,
  patients, hospital, trauma, surgery, rehabilitation, orthopedic) unless a
  sports term was also present.
- Stage 1 (evidence scoring): sports term in title +3 / abstract +2;
  transfer-method term in title +2 / abstract +1; experimental wording +2;
  theory-only (theorem/we prove, no experiments) -3; short abstract -2.
  Kept top 160 by score (cutoff >= 5).
- Stage 2 (transferability): drop records with NO sports/betting term AND
  fewer than 2 transfer-theme matches (causal, DiD/synthetic-control,
  injury/workload, weather, sentiment, news/injury reports, LLM/NLP,
  betting/odds, calibration, etc.). Dropped e.g. vehicle-retrieval NLP papers,
  wind-energy wake models, pure clinical brain-injury work.
- Stage 3: 5 top-up queries (score>=5 at harvest) added 154, then Stage 2
  re-applied across the full file.

Final: **159 high-quality candidates** — in the 120-180 target band.

## Content mix (spot-verified)
- Injury/workload: time-to-injury survival forecasting, GPS-load injury
  models, UCL injury prediction in MLB pitchers, NBA load-management
  causal correction.
- Causal/econometrics: synthetic control, DiD, double-ML, causal forests,
  heterogeneous treatment effects, causal transfer learning — kept only where
  transferable to sports (player absence, schedule/travel effects, treatment
  = coaching decisions).
- Weather: wind/precipitation effects on totals and scoring, weather-adjusted
  prediction models.
- LLM/NLP: sports question answering, explainable refereeing with multi-modal
  LLMs, news/injury-report parsing, social-media sentiment and line movement,
  text mining for outcome prediction.

## Handoff
`~/workspace/arxiv-sweep/phase2-candidates-causal.jsonl` is ready for the
existing-research dedup pass and the ledger deep-read waves. All records carry
a `query` field tracing which search found them.
