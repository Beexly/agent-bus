# docs/ops/archive/root-museum/NEXT_RUN_PROMPT.md
## What it is (1-2 sentences)
A continuation-state snapshot for a prior agent session (branch `claude/trusting-ramanujan-mYK6E`): verified build state, 18 shipped commits, and safe/gated next actions. It is an ops/archival document, not sports content.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas; only build/test counts: typecheck green across 9 workspaces, apps/web ~167 test files, production `next build` green with 64 pages).
## Data sources named
None (internal repo gates only).
## Findings (numbers and facts, not vibes)
- Session state: typecheck green (9 workspaces); full test suite green; production `next build` green (64 pages); trust-gate clean; live-DB integration smoke exists (`npm run test:integration:db` + `npm run db:disposable`).
- 18 commits shipped and verified green this session, covering: P0 away-favored spread mis-grading fix, settlement single-point-of-failure fix (shared `settleSport`), CLV engine, calibration discrimination metric, probability-calibration R&D toolkit (isotonic/Brier-decomp/ECE).
- Blockers hit: no headless browser (cdn.playwright.dev not in network allowlist); no live `THE_ODDS_API_KEY` (odds connectivity unverified, read-only check pending).
- Gated items awaiting founder: brand name GSE vs GSN; calibration probability split (R3) requiring modeled win prob distinct from confidence UX score and a MODEL_VERSION bump; `MIN_BOOKMAKERS`/odds failover (R5).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CLV engine + calibration-discrimination metric shipped → OTHER (engine infrastructure, not player/coach intel).
- Settlement path `settleSport` single-point-of-failure fix → OTHER.
- No QB, coaching, OL, trust-signal, or scheme content present → OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — prior session's CLV engine, calibration discrimination metric, and isotonic/Brier-decomp/ECE toolkit are landed components the engine can use for calibration work.
