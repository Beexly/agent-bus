# arxiv-program/research/2026-09-21/arxiv-deep/1300-predicting-elite-nba-lineups-using-order-statistics.md
## What it is (1-2 sentences)
Deep-research ledger on Martonosi, Gonzalez & Oshiro (2023) arXiv:2303.04963v1, "Predicting Elite NBA Lineups Using Individual Player Order Statistics": it predicts elite five-man NBA lineups (positive plus-minus) from individual-player stats alone — without the five ever having shared the court — using seven classifiers combined by a unanimous-consent (all-or-nothing) rule that trades recall for precision. Verdict: ADAPT — ports directly to DFS lineup/stack construction and player-acquisition screening (replacement for REJECT 1092).
## Key metrics/methods (formulas where given, else "not specified")
- Order-statistic feature expansion: 28 individual player statistics (Appendix A of paper) → sorted values (min through max) across the five lineup members → 28 × 5 = 140 predictors per candidate lineup.
- Seven classifiers: decision tree, random forest, boosting, SVM, k-nearest neighbors, logistic regression, linear discriminant analysis.
- Unanimous consent classifier (ANC): predict elite iff all seven classifiers vote elite — deliberate precision-over-recall filter.
- Target: binary elite indicator = positive lineup plus-minus; elite prevalence in restricted next-season sample = 62.1%.
- Results: test-set precision 86.7%, overall accuracy 52.3% (recall deliberately sacrificed); restricted next-season evaluation 76.9% precision vs 62.1% prevalence baseline.
- Key generalization result: unanimous classifier identifies elite lineups even when the five players never played together.
- GSE implementation spec: (1) replace 28 NBA stats with per-player fantasy-relevant stats; define target as GPP-winning-lineup membership or top-1% lineup finish; (2) expand each slate's player pool into order-statistic predictors per candidate lineup (sorted by projection, ceiling, ownership, leverage); (3) diverse classifier set + unanimous-consent rule for a high-precision short list feeding the optimizer; (4) calibrate precision/recall trade-off against contest payout structure (top-heavy GPPs favor unanimity).
- Improvement experiment: replace unanimity with calibrated agreement-threshold (k-of-7 votes) tuned per contest payout curve; add interaction features (teammate/opponent overlap) to recover recall; test on NFL showdown and classic slates.
## Data sources named
NBA seasons: player-level box-score statistics plus lineup plus-minus records (public). Code: not stated in paper. No NBA dataset names given beyond "public" records.
## Findings (numbers and facts, not vibes)
- Unanimous-consent precision: 86.7% (test), 76.9% (next-season restricted) vs 62.1% prevalence baseline; accuracy only 52.3% due to sacrificed recall.
- Elite prediction works without shared-court history — enables evaluation of never-before-used combinations (INFERENCE: analogous to DFS stacks of players who haven't all started together).
- Plus-minus is a noisy, context-dependent label (opponent/schedule effects); unanimity misses most elite lineups (low recall); no salary/DFS-pricing integration in the paper; NBA-specific feature set.
- Fills GSE gaps 10 (DFS-specific optimization literature) and 11 (non-NFL sports depth) per existing-research-map.md; repo DFS work has lineup heuristics and ownership but no academic lineup-quality classification, no unanimous ensemble, no order-statistic lineup features.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: DFS lineup construction — order-statistic feature recipe and unanimous-consent precision filter for GPP-winning-lineup classification and optimizer seeding. No QB/coaching/OL/scheme/trust-signal content.
## Engine-actionable? (yes/no + one-line what)
yes — build an NFL DFS lineup-quality classifier on order-statistic features (sorted projection/ceiling/ownership/leverage) with a unanimous-consent ensemble as a high-precision pre-filter for optimizer seeding, acceptance-tested on GPP ROI with/without unanimity filtering.
