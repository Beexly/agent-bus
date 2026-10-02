# docs/ops/archive/root-museum/CODEX_FINISH_PROMPT.md
## What it is (1-2 sentences)
An archived 2026-05-21 deploy-finishing prompt authored by Claude for Codex: an 8-step verbatim execution sequence to verify a deploy-readiness script change and take Galaxy Sports Edge to production. Product-operations history, not sports research.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no sports metrics or formulas. Numerical ops facts: Odds API paid key had 20,000 requests remaining; `ANTHROPIC_API_KEY` was returning HTTP 401; deploy readiness expected `Result: ready, N warning(s)` with N ≥ 1 and exit code 0; production smoke expected `Result: live, 0 warning(s)` with `/api/health` returning 200.
## Data sources named
- Odds API (ingestion smoke: trigger `/api/cron/refresh-odds` with `CRON_SECRET`, verify `IngestionRun` and `SourceSnapshot` rows > 0)
- Neon Postgres (`npm run db:push` schema sync), Upstash
- Anthropic API (content-flag-aware `checkAnthropic()`: with `PUBLIC_BLOG_ENABLED=true`, non-200 blocks deploy; otherwise warn)
## Findings (numbers and facts, not vibes)
- Prior blocker: `ANTHROPIC_API_KEY` HTTP 401, unrotatable by agents (no authenticated console.anthropic.com session). Claude's one-file change made `checkAnthropic()` content-flag-aware so the 401 degrades to `warn` (not `bad`) when the blog is dark; rationale/audit trail in `docs/research/anthropic-gate-content-flag-aware-2026-05-21.md`.
- Hard rules listed: do not enable `PUBLIC_PICKS_ENABLED`, `PERFORMANCE_STATS_ENABLED`, `OUTCOME_LEARNING_ENABLED`, `PUBLIC_BLOG_ENABLED`, `FEATURED_PICK_PROMOTION_ENABLED`; do not surface true EV, Kelly, public performance %, or any public pick claim; do not commit secrets.
- Windows Codex context: branch `sports-intelligence-os-phase-9-ci`, local path `C:\Users\Garrett\Documents\Claude\Projects\AI Sports`, Vercel scope `pick-pilot-s-projects`.
- Key rotation sequence for the Anthropic key was deferred until a console session existed, gated on the user.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: entirely product/ops material — deploy readiness, secrets hygiene, launch gates. The hard rule against surfacing true EV/Kelly/performance claims is adjacent to the public/private doctrine but contains no football intelligence.
## Engine-actionable? (yes/no + one-line what)
no — archived deploy procedure; the only engine-relevant line is the odds-ingestion smoke check (IngestionRun/SourceSnapshot rows > 0), a health-check pattern, not analysis.
