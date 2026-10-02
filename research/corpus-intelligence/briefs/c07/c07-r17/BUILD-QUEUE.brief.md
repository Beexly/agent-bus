# arxiv-program/research/2026-09-21/arxiv-program/index/BUILD-QUEUE.md
## What it is (1-2 sentences)
The top-20 ranked ADOPT build list (from 48 ADOPT verdicts in corpus-index.jsonl, dated 2026-09-22) across INVENT/CALIBRATE/DECIDE/MODEL/INFRA buckets, each with an owner (Hermes/Mimo/Motif-lab) and a numeric acceptance gate that must clear on GSE data before shipping.

## Key metrics/methods (formulas where given, else "not specified")
Gates per build: symbolic distillation ≤10 terms with MAE within 0.01 of neural head + ≥20% MAE improvement over linear baseline; equation discovery Pearson r ≥0.05 over passer rating/QBR, ≤15 tree nodes; factor zoo mean out-of-sample |IC| ≥2× hand-built baseline, mean pairwise |corr| ≤0.25; residual mining ≥0.003 held-out log-loss improvement; MinervaScore AUROC ≥0.95 on permuted nulls, pass rate on nulls ≤5%; CRPS+log-score doctrine with Spearman ≥0.8 year-to-year; conformal selective prediction realized loss within ±0.03 units of nominal, ≥70% pick volume; CSR 90%-coverage MAE ≥5% lower than conditional-variance reject baseline; CQL beats fractional-Kelly by ≥2pp ROI with max drawdown within 0.5u; optimal-stopping timing beats best benchmark by ≥1.5pp CLV/bet; DID/synthetic-control placebo gates; Chronos/Moirai WQL ≥0.01 improvement; flexBART RMSE ≥3% over one-hot XGBoost; SportSQL ≥75% correctness; ATB retry 429s drop ≥50% with ≤30% completion-time increase.

## Data sources named
nflverse play-by-play and games data; GSE internal prediction engine outputs; 2025 NFL games held-out blocks; 32-teams × weekly panel data; The Odds API (odds ingestion for timing tests); GSE Neon Postgres.

## Findings (numbers and facts, not vibes)
- Framing: Garrett's law — every build is an engine capability or proprietary output; market work is BASELINE, not the goal. Acceptance requires the paper's numeric gate to clear on GSE data, else the build does not ship.
- Owners: Hermes = phone builder (app/web/SQL), Mimo = Windows calibration agent, Motif-lab = VM execution.
- 28 remaining ADOPTs ranked next, queryable via `jq -r 'select(.verdict=="ADOPT") | [.arxiv_id,.normalized_lane,.capability] | @tsv' corpus-index.jsonl`.
- Weather conformal coverage target: 90% coverage within ±0.02 of nominal for temp/wind across ≥25/30 stadiums.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Calibration gates (CRPS, conformal selection, Murphy-style honesty) — TRUST-SIGNAL (calibration honesty is the company identity per business plan).
- Symbolic distillation for a machine-invented passer metric beating passer rating/QBR — OTHER (model invent; potential future QB metric).
- Weather-aware conformal coverage — OTHER (situational signal).
- Momentum/fade literature absent here; no QB-behavior, coaching, OL, or scheme specifics — OTHER.

## Engine-actionable? (yes/no + one-line what)
yes — numeric acceptance gates are directly reusable as calibration/promotion criteria for the engine's pick and signal pipelines.
