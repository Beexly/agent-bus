# docs/ops/SETTLED_PICKS_EXPORT.md
## What it is (1-2 sentences)
A short ops sketch defining the settled-picks export used to build calibration/ranker label datasets: rows of settled picks with features plus outcome, exported via a SQL query against the picks/games tables into CSV for offline notebook experiments only.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Export columns: id, sportKey, pickType, line, confidence, modelVersion, result, settledAt, startTime; ordered by settledAt DESC, LIMIT 5000; labeled for lightweight ranker/calibration experiments.
## Data sources named
Production Prisma-backed Postgres (`picks` joined to `games` on gameId, via DATABASE_URL); CSV → offline notebook.
## Findings (numbers and facts, not vibes)
- Export exists only for offline calibration experiments; no foundation training code in-repo, and the doc explicitly forbids training foundation models on this path.
- Row filter: result IS NOT NULL AND settledAt IS NOT NULL.
- Query is marked illustrative — operator must adjust to live Prisma schema field names before running.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — a settled-picks export with features + outcome is the canonical feedback loop for backtesting and calibration validation (the "test" stage of the research → wire → weight → calibrate → test → polish loop).
- OTHER — governance note: export is explicitly research/calibration-only, not foundation-training data.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt this exact export schema (id, sportKey, pickType, line, confidence, modelVersion, result, settledAt, startTime) as the standard settled-pick calibration dataset whenever offline experiments are needed.
