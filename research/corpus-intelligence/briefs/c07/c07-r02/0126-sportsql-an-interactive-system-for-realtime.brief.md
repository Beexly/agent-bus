# arxiv-program/research/2026-09-21/arxiv-deep/0126-sportsql-an-interactive-system-for-realtime.md
## What it is (1-2 sentences)
An interactive system for answering arbitrary natural-language questions over live sports data: entity resolution → schema-only LLM SQL generation → just-in-time materialized views for expensive temporal queries → verified visualizations. Verdict in the source: ADOPT — ports directly to GSE's nflverse/odds tables as a natural-language research-query layer.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formal equations; systems paper). Architecture: (a) entity resolution mapping mentions to DB ids before SQL generation; (b) schema-only LLM SQL generation (LLM sees schema, not data), executed read-only; (c) just-in-time in-memory tables for expensive temporal aggregations (per-gameweek history, future fixtures); (d) Matplotlib/Seaborn guarded by dataframe-code validation — plotting code must reproduce the query dataframe byte-for-byte before rendering; (e) verification: scalar answers by exact match, tabular answers by TabEval-style correctness/completeness. Benchmark DSQABench: 1,793 questions from 180 base templates × 3 rephrasings; 1,395 scalar + 398 tabular (components listed sum to 396 — paper discrepancy flagged).
## Data sources named
English Premier League data from the public FPL API, normalized into MariaDB (< 5 GB core tables). Models tested: GPT-4o and Gemini 2.0 Flash (temperature 0.1, max tokens 2048). Code: https://github.com/coral-lab-asu/SportSQL.
## Findings (numbers and facts, not vibes)
- DSQABench Table 1: Gemini 2.0 Flash — string EM 76.23, table correctness 0.64, completeness 0.76, overall 0.69; GPT-4o — EM 80.48, correctness 0.70, completeness 0.81, overall 0.75.
- By primitive: single Retrieve 100%, Order 97.6%, Calculate+Compare 96.3%, Retrieve+Filter+Calculate 22.3%, Compare+Order 30.3%, Manipulate/join 15.4%. By primitive count: one 93%, two 67%, beyond three ≈50% — compositional join/aggregation queries are the bottleneck.
- Limitations: 180 templates × 3 rephrasings tests paraphrase robustness, not true novelty; no latency numbers despite "real-time" title; entity resolution evaluated only on canonical names (nicknames/abbreviations untested); EPL-only schema; no token-cost analysis.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — natural-language query layer over GSE's structured engine tables (Neon Postgres picks/engine outputs): schema-only SQL generation + read-only guard + byte-for-byte dataframe verification gate.
- COACHING — INFERENCE: the same verified NL-query pattern could expose play-calling/formation query views to coaching staff, but the paper is a data-system paper, not a coaching-decision method.
- SCHEME — INFERENCE: the join bottleneck (15.4%) matters most for matchup-joined football queries (offense scheme × defensive front); the proposed two-stage generator (validated subquery per primitive, then compose) is the concrete fix.
## Engine-actionable? (yes/no + one-line what)
Yes — ADOPT: port to Neon Postgres with a read-only role, NFL entity resolver, and the byte-for-byte verification gate; acceptance ≥75% correctness on an NFL gold-SQL benchmark with zero writes escaping the read-only guard.
