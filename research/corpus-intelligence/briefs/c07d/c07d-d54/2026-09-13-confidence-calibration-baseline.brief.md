# predictions/research/2026-09-13/2026-09-13-confidence-calibration-baseline.md
## What it is (1-2 sentences)
The "before" calibration baseline for the v5.3.0 calibration rebuild, measured live against Neon `neondb` on 2026-09-13: realized win rates by confidence bucket across 2,641 settled picks, split by signal path (model) vs book path (heuristic), plus a fitted book-path calibrator comparison. It establishes that the book path is catastrophically overconfident and inverted at the top, while the signal path is roughly honest.

## Key metrics/methods (formulas where given, else "not specified")
- **Label set:** 2,641 settled WIN/LOSS + 13 PUSH; 1,757 with CLV. Primary label = CLV (`clvValue`, available within hours); validation = realized results (slow loop). Both reported, always.
- **Fitted book-path calibrator** (temporal split: train ≤ 2026-08-15 n=1,079, test > 2026-08-15 n=814, book-path only). Test log-loss results:
  - identity (raw heuristic as p): 0.7608
  - logistic on confidence: 0.6919
  - isotonic on confidence: 0.6979
  - **logistic on confidence + sport + market (winner): 0.6678**
- **Winner mapping is FLAT:** book confidence 50 → 0.449; book confidence 100 → 0.536. The heuristic carries almost no information; even a "100" book pick is a ~54% proposition.
- Script + JSON: `~/workspace/gse-discovery/bookpath_calibration_v1.py` / `bookpath_calibration_v1.json` (NOT in repo; port the winner into the TS calibration module).
- **Thresholds/gates named:** Premium cutoff at confidence 70 separates Premium (56.4%, n=784) from Free (53.4%, n=1857) — only 3 points of discrimination. Grade STRONG_PLAY referenced on 80–89 bucket picks ("a coin flip wearing a STRONG_PLAY grade").
- **NFL calibration-head directive:** NFL has only 70 settled picks total — "the NFL calibration head must be CLV-only (or pooled) until more games settle; do not fit an NFL realized-results head on n=70."

## Data sources named
- Neon `neondb` predictions database (queried live by Motif; queries in the build spec's Workstream 0).
- Fields referenced: `picks.factorBreakdown` (JSONB — per-factor weights, `rankingP`, `edgeScore`, `independentEdge`), `pick_signal_snapshots` (has `eligibleForLearning`, `settlementResult`, `settledAt`; stores `hadXSignal` booleans, not factor weights), `clvValue`, `gameId`, `pickType`, `selection`.
- Code functions named: `collapseGameRowsToFixtures` (dupe fix), `buildPickSignalSnapshot` (needs extension to signal path).
- v5.3.0 build spec (Workstream 0 queries, Workstream 1 calibration rebuild); TS calibration module (target for the fitted logistic model port).

## Findings (numbers and facts, not vibes)
- **Overall overconfidence:** realized win rate lags average confidence in every bucket except 50–59 (gap +0.023); the gap grows with confidence: 60–69 gap +0.093 (n=975, 0.552 win rate, 64.5 avg conf); 70–79 gap +0.155 (n=535, 0.583, 73.8); 80–89 gap **+0.343** (n=189, **0.497 win rate**, 84.0 avg conf); 90–99 gap +0.402 (n=47, 0.532, 93.4); 100 gap +0.154 (n=13, 0.846, 100.0).
- **The two paths calibrate completely differently (2026-09-13 recheck):**
  - Signal path (independent blend → confidence = trueProb): 60–69 n=423 → 0.570; 70–79 n=247 → 0.660; 80–89 n=59 → 0.678; 90–99 n=15 → 1.000. Roughly honest, slightly conservative.
  - Book path (heuristic weighted sum): 50–59 n=881 → 0.515; 60–69 n=552 → 0.538; 70–79 n=288 → 0.517; 80–89 n=130 → 0.415; 90–99 n=32 → 0.312. **Inverted at the top**: higher heuristic confidence predicts *worse* results (90–99 → 31% wins).
- **v5.3.0 directive:** the calibration rebuild targets the book path only — "do not 'fix' the signal path's confidence — leave it alone or shrink it slightly toward the bucket means."
- **Sport/market label coverage:** MLB SPREAD 594 picks, 0.455 win rate, 67.1 avg conf (underwater at volume); MLB MONEYLINE 661, 0.631, 65.8; MLB TOTAL 535, 0.456, 63.2 (underwater at volume); MLS SPREAD 78, 0.423, 59.9 (underwater); MLS MONEYLINE 132, 0.576, 62.5; MLS TOTAL 68, 0.529, 56.1; NCAAF SPREAD 192, 0.568, 66.6; NCAAF MONEYLINE 157, **0.892 win rate at 70.0 avg conf (underconfident — big favorites)**; NCAAF TOTAL 139, 0.532, 59.8; NFL SPREAD 15, 0.133, 68.2; NFL MONEYLINE 41, 0.585, 62.2; NFL TOTAL 14, 0.357, 59.3; NBA/NHL <12 (insufficient).
- **Honest-outcome warning:** with the fitted logistic (confidence + sport + market), expect almost no book-path pick to clear a Premium confidence threshold — "that is the honest outcome, not a bug. The engine's edge lives in the signal path."
- **Data-quality notes for the trainer:** (1) Dupes are fixture-level, not gameId-level — zero duplicate `(gameId, pickType, selection)` rows; observed dupes (e.g. Rays ML 86 ×3 on the same matchup) carry different gameIds = un-collapsed fixture rows; fix in `collapseGameRowsToFixtures`, not with a DB unique index on gameId. (2) Snapshot parity: 42 signal-path picks lack `pick_signal_snapshots` rows; 0 book-path picks do — extend `buildPickSignalSnapshot` to the signal path. (3) Snapshots store `hadXSignal` booleans, not factor weights — training features must come from `picks.factorBreakdown` (JSONB) joined to snapshot metadata; filter training rows on `eligibleForLearning`. (4) 13 pushes observed — the spread head must handle pushes (3-class or cover-given-no-push), not drop them silently. (5) Labels: primary CLV (n=1,757, available within hours), validation = realized results (slow loop).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER (calibration/sizing lane — core):** This is the calibration lane's ground truth. The flat fitted mapping (50→0.449, 100→0.536) means book-path "confidence" is a labeling convention, not a probability — the sizing program must never size on raw book confidence. Only the signal path's trueProb carries information. Serves calibration/sizing and the trust-target intake (the trust-targets program must filter on signal path, not book path).
- **OTHER (trust-target intake):** The 80–89 book bucket at 0.497 realized vs 84.0 avg confidence is the canonical cautionary number for why trust targets require the signal path; the Premium/Free split discriminates only 3 points (56.4% vs 53.4%), so Premium gating on book confidence is near-meaningless pre-rebuild.
- **OTHER (CLV-as-primary-label):** n=1,757 CLV labels vs 2,641 realized labels, available within hours — the wire-first program should fit CLV heads for fast feedback and validate on realized. NFL heads stay CLV-only (n=70 settled total).
- **OTHER (label-integrity):** Fixture-level dupe bug (same matchup, different gameIds, e.g. Rays ML ×3) would inflate n and distort win rates if untrained into `collapseGameRowsToFixtures`; the 42 signal picks missing snapshots bias any feature join against the signal path. Both are data-pipeline fixes for the intake lane.
- **UNCERTAIN:** NFL rows (SPREAD 0.133 on n=15, MONEYLINE 0.585 on n=41, TOTAL 0.357 on n=14) are too thin to interpret — file itself directs no realized-results head for NFL.

## Engine-actionable? (yes/no + one-line what)
Yes — port the winning logistic (confidence + sport + market, test log-loss 0.6678) into the TS calibration module for the book path, leave the signal path alone, and gate NFL calibration heads on CLV only until settled n grows.
