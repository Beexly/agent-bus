# ops/FREE_OPEN_EXTRACTORS_INTO_GSE.md
## What it is (1-2 sentences)
2026-08-10 architecture decision: integrate free open sports data into the existing Node monorepo rather than standing up a parallel Python FastAPI + Supabase + Windows Task Scheduler pipeline.
## Key metrics/methods (formulas where given, else "not specified")
Win% logistic fair P from MLB standings ("summer Brier lever"); opponent-adjusted EPA from nflverse EPA → ML fair when rows exist. No formulas specified beyond these role descriptions.
## Data sources named
MLB Stats API (standings, finals), nflverse (EPA, PBP/NGS catalog), ESPN public odds (tertiary free odds, "not independent").
## Findings (numbers and facts, not vibes)
- Wired in v5.2.3: MLB standings → `mlb-statsapi-client.ts` + `standings-strength.ts` (win% logistic fair P, summer Brier lever); MLB finals → densify input (completed scores as facts for TeamGameLog match); nflverse EPA → `TeamGameEfficiency` → `nfl-epa-fair-value.ts` (opponent-adj EPA → ML fair when rows exist); ESPN public odds → `espn-odds-client.ts` (market path only); nflverse catalog → PBP/NGS catalog + efficiency ingest.
- Still NOT PROVEN at write time: PERFORMANCE_STATS / maps / AUTO_PUBLISH remain OFF; Brier still needs RES lift on settled sample — new sources help future and re-scored independents, do not invent green streak; after deploy: re-run `backfill-independent-trueprob` + `calibration-metrics`.
- Explicit non-goals: no `pip install` product path, no CFBD key requirement, no Kloppy tracking in product, no second database.
- Rationale table: separate Postgres → already Prisma + production Postgres; FastAPI + MCP OpenAPI bridge → agents already hit GSE ops/cron APIs (dual serving layer splits truth); Windows Scheduled Task ingest → production is Vercel crons + Node workers (founder laptop is not the spine); pybaseball live scrape in product path → licensing + rate + runtime risk; new MODEL_VERSION inventing lambda from scrapes → forbidden (soft-fail null only).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Opponent-adjusted EPA → ML fair-value wiring path — OTHER (data architecture).
## Engine-actionable? (yes/no + one-line what)
Yes — documents the exact fair-value levers in the engine: MLB standings win% logistic fair P (`standings-strength.ts`) and nflverse opponent-adjusted EPA → moneyline fair value (`nfl-epa-fair-value.ts`).
