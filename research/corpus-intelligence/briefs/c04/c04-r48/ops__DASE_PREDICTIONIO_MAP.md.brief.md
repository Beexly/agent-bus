# docs/ops/DASE_PREDICTIONIO_MAP.md
## What it is (1-2 sentences)
A 2026-08-09 offline design atlas mapping PredictionIO's DASE (Data, Algorithm, Serving, Evaluation) pattern onto existing GSE modules. It is documentation only — no dual stack, no PredictionIO runtime, no CrewAI/Ollama — with explicit "steal the pattern / refuse the idea" rules and gating laws (maps OFF, gates OFF, never invent odds/ROI).
## Key metrics/methods (formulas where given, else "not specified")
- MLlib-style offline metrics mapped to GSE modules: Brier (`brierDecomposition`, floor ≤ 0.22), ECE (`expectedCalibrationError`, floor ≤ 0.05), Murphy RES/REL/UNC (live RES ~0.002 → RED correct), Spearman ranking correlation, holdout significance.
- Governing rules: separation of train vs serve (RPCP never auto-applies maps while RES < 0.02); polarity law (edge ≠ P(side)); coverage ≠ eligibility — RES is the ranking grade; no conformal-coverage-as-PROVEN.
## Data sources named
- `packages/data-ingestion`, free-spine adapters, TeamGameLog, Kalshi series (priced trueProb fuel); "Batch event → feature join" via process-sport at slate time.
- Cross-ref: `docs/research/prediction-market-ecosystem-triage-2026-08-09.md` (Oddpool/PM ecosystem buckets A/B/C/D); Polymarket = product hold; Kalshi = fair-value ranking fuel only.
## Findings (numbers and facts, not vibes)
- Pattern steals: (1) train/serve separation — GSE already keeps map fit offline; RPCP never auto-applies maps while RES < 0.02. (2) Evaluation as first-class engine — `ranking-power-control.ts` + holdout significance + Spearman = the E stage. (3) Query API honesty — B2B signals expose `rankingP` as model signal, never verified ROI while RED. (4) Batch event→feature join; no invent.
- Refusals: standalone PredictionIO/Spark dual stack; auto-deploy winning algorithm to public board (gates + AUTO_PUBLISH founder-only); serving edge-as-p; conformal coverage as PROVEN eligibility.
- Orchestration analogues: declarative DAG → process-sport → independents → rankingP → draft; Burr-style resume → autonomy operating-kernel + free-spine durable; feature lineage → factorBreakdown + provenance modules.
- Operator next: probe `rankingPower` on `/api/ops/public-surface-truth` after redeploy; if `primaryBottleneck = missing_independent` → more priced trueProb (Kalshi maps + series soft-fail). Never open maps or PROVEN from this doc.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All items: OTHER (engine infrastructure/calibration governance; no player, team, coaching, or scheme content).
## Engine-actionable? (yes/no + one-line what)
Yes — enforces the gating sequence: keep map fitting offline and never apply calibration maps while RES < 0.02; calibration maps fix reliability, not ranking.
