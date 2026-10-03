# predictions/research/2026-09-13/2026-09-13-confidence-calibration-baseline.md
## What it is (1-2 sentences)
The "before" calibration picture v5.3.0 must beat, measured live against Neon `neondb` on 2026-09-13: 2,641 settled WIN/LOSS + 13 PUSH (1,757 with CLV) across sport/market cells, with a critical finding that the model-signal path calibrates honestly while the heuristic book path is catastrophically overconfident and inverted at the top.
## Key metrics/methods (formulas where given, else "not specified")
- Calibration buckets (all sports, settled): 50–59 n=882 win 0.515 vs 53.8 conf (gap +0.023); 60–69 n=975, 0.552 vs 64.5 (+0.093); 70–79 n=535, 0.583 vs 73.8 (+0.155); 80–89 n=189, **0.497 vs 84.0 (+0.343)**; 90–99 n=47, 0.532 vs 93.4 (+0.402); 100 n=13, 0.846 vs 100.0 (+0.154). Overconfidence worsens at the top.
- Signal path vs book path by bucket: 70–79: signal n=247, **0.660** vs book n=288, 0.517; 80–89: signal n=59, **0.678** vs book n=130, **0.415**; 90–99: signal n=15, 1.000 vs book n=32, **0.312** — the book path is INVERTED at the top (higher heuristic confidence → worse results).
- Fitted book-path calibrator (temporal split: train ≤2026-08-15 n=1,079, test >2026-08-15 n=814): identity log-loss 0.7608; logistic on confidence 0.6919; isotonic 0.6979; **winner: logistic on confidence + sport + market, 0.6678**. Mapping is FLAT: book confidence 50 → **0.449**, 100 → **0.536** — a "100" book pick is a ~54% proposition.
- Premium cutoff (70): Premium 56.4% (n=784) vs Free 53.4% (n=1857) — only 3 points of discrimination.
- Labels: primary = CLV (`clvValue`, n=1,757, available within hours); validation = realized results (slow loop). Both reported, always.
## Data sources named
- Neon `neondb` picks data (2,641 settled + 13 push; 1,757 with CLV), `pick_signal_snapshots`, `picks.factorBreakdown` JSONB (per-factor weights, `rankingP`, `edgeScore`, `independentEdge`).
- Fit script: `~/workspace/gse-discovery/bookpath_calibration_v1.py` + `bookpath_calibration_v1.json` (NOT in repo; winner must be ported into the TS calibration module).
## Findings (numbers and facts, not vibes)
- MLB SPREAD 594 settled: win 0.455, avg conf 67.1; MLB TOTAL 535: 0.456 / 63.2; MLS SPREAD 78: 0.423 / 59.9 — underwater at volume. MLB MONEYLINE 661: 0.631 / 65.8.
- NFL has only 70 settled picks total (SPREAD n=15, 0.133 win; MONEYLINE n=41, 0.585; TOTAL n=14, 0.357) — **NFL calibration head must be CLV-only (or pooled) until more games settle; do not fit an NFL realized-results head on n=70.**
- NCAAF MONEYLINE n=157: win 0.892 at 70.0 avg conf — underconfident on big favorites.
- 80–89 bucket picks win 49.7% — "a coin flip wearing a STRONG_PLAY grade."
- v5.3.0 rebuild targets the BOOK path only: "do not 'fix' the signal path's confidence — leave it alone or shrink it slightly toward the bucket means." Expect almost no book-path pick to clear a Premium threshold — the honest outcome, not a bug. "The engine's edge lives in the signal path."
- Data-quality notes: (1) dupes are fixture-level — zero duplicate `(gameId, pickType, selection)`; observed dupes (e.g. Rays ML 86×3) carry *different* gameIds = un-collapsed fixture rows; fix in `collapseGameRowsToFixtures`, not a DB unique index. (2) 42 signal-path picks lack `pick_signal_snapshots` rows; 0 book-path picks do — extend `buildPickSignalSnapshot` to the signal path. (3) Snapshots store `hadXSignal` booleans, not factor weights — training features come from `picks.factorBreakdown`, filter on `eligibleForLearning`. (4) 13 PUSHes observed — the spread head must handle them (3-class or cover-given-no-push), never drop silently.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: calibration honesty — the honest book-path mapping (100 → 0.536), the CLV-primary labeling discipline, `eligibleForLearning` gating of training rows, and the refusal to let uncalibrated grades masquerade as strong plays.
- OTHER: calibration methodology (temporal splits, log-loss model selection, path-specific heads).
## Engine-actionable? (yes/no + one-line what)
Yes — port the winning book-path calibrator (logistic on confidence + sport + market; the FLAT 50→0.449 / 100→0.536 mapping) into the TS calibration module and leave the signal path alone, with the hard constraint that the NFL head stays CLV-only until far more than 70 picks settle.
