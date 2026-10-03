# docs/arxiv-program/research/2026-09-21/arxiv-deep/1715-knowledge-graph-assisted-automatic-sports-news.md

## What it is (1-2 sentences)
A deep-read note on Cao et al. (2024, arXiv:2402.11191v1), which builds automatic NBA game news from live-text feeds via KEE event segmentation plus knowledge-graph enrichment of entities (players/teams/games) before generation, with ROUGE and a 20-person human panel showing KG enrichment roughly doubling bigram overlap over segmentation alone. Ledger verdict: **ADAPT** — the architecture (event segmentation → entity linking → KG-enriched generation) is a blueprint for GSE's automated recap/injury-news module, but the NBA KG and thresholds don't transfer.

## Key metrics/methods (formulas where given, else "not specified")
- KEE segmentation: passage boundary when cumulative score difference within a window crosses an 8-point threshold, or when key max/min (largest scoring run / drought) detected in the score-differential time series — a threshold-crossing detector, not a learned segmenter.
- Meta-TKGC (secondary): TransE-style scoring score(h,r,t) = −||h + r − t|| with margin ranking loss L = Σ max(0, γ + score_neg − score_pos); CNN relation meta-learner + Transformer temporal encoder.
- Generation comparison: CNN baseline vs KEE-template vs KEE+KG; metrics ROUGE-1/2/L vs human reference news; human panel "excellent/good" rates.
- Live-text schema: (quarter, time, team, event, score) tuples; event classes: scoring, misses, rebounds, fouls, turnovers, lineup changes, timeouts.

## Data sources named
- NBA knowledge graph: 4,027 player nodes, 30 team nodes, 43,510 game nodes, 1,836 match nodes; 3 entity classes, 4 relation types, 27 attributes. Not released.
- Live-text corpus: 494 NBA games, 58,745 sentences; train 340 games / 43,211 sentences; test 154 games / 15,534 sentences (clean by-game split). Not released.
- Human panel: 20 raters (4 sports journalists, 10 fans, 6 general readers).

## Findings (numbers and facts, not vibes)
- [OTHER] ROUGE-1/2/L: CNN 0.264/0.065/0.182; KEE 0.392/0.138/0.197; KEE+KG 0.563/0.372/0.447 — KG enrichment roughly doubles ROUGE-2 over KEE alone (0.138 → 0.372).
- [OTHER] Human "excellent" rate (fans): 17.80% → 41.60% (KEE → KEE+KG); journalist "good" rate: 39.50% → 52.00%.
- [OTHER] Segmentation + enrichment account for essentially all the gain; the CNN-only baseline is far behind on every metric.
- [TRUST-SIGNAL] Leakage risk flagged in-file: the KG is static while the news is about specific games — if KG season stats incorporate the game being written about, post-game knowledge leaks into "news"; the paper does not document the KG snapshot date relative to the games.
- [OTHER] The 8-point threshold is hand-tuned on NBA data with no sensitivity analysis; entity linking is assumed solved and linking errors are never measured; human panel is small (n=20, journalists n=4) with no inter-rater agreement reported.
- [OTHER] The note's rejection gate: drop KG-enrichment (keep segmentation only) if entity-linking precision on NFL text falls below 95%.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the KEE pipeline (event ingestion → passage segmentation → entity-linked KG enrichment → template+LLM generation with injected facts cited to source rows) is directly the architecture for automated NFL game recaps and prop-relevant narrative generation.
- TRUST-SIGNAL: three transferable trust mechanics — (1) entity-linking confidence gate (drop linked entities below 0.9 confidence), (2) kickoff-snapshot KG to forbid post-game leakage, (3) the ≥95% linking-precision gate before enrichment is allowed. INFERENCE: these generalize to any GSE pipeline that injects "facts" into generated content.
- OTHER: the note's NFL adaptation replaces the 8-point threshold with a win-probability-swing detector (|ΔWP| ≥ 10 pp), generalizing the score-differential idea across sports — a SCHEME-adjacent content trigger but tagged OTHER per schema.
- QB-BEHAVIOR (mild): INFERENCE — the KG attribute design (player season stats, team records, head-to-head injected as verified structured context) is the same entity-attribute pattern needed for QB/OL player cards in content; the file itself is NBA-only.

## Engine-actionable? (yes/no + one-line what)
Yes — build the three-stage recap pipeline on NFL play-by-play with a |ΔWP| ≥ 10 pp segmenter and kickoff-snapshotted KG enrichment, gated by the note's ≥50% factual-error-reduction test and the 95% entity-linking precision floor.
