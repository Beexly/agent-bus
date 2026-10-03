# docs/ops/LIVE_STATE_VERIFICATION_2026-08-06_LATE.md
## What it is (1-2 sentences)
Production-truth verification package from 2026-08-06 ~23:27 UTC, superseding the earlier same-day package after a series of recovery merges. Records verified live API state and a ranked list of founder-only actions.
## Key metrics/methods (formulas where given, else "not specified")
not specified — live state readings only, no formulas.
## Data sources named
- Production `/api/health`, GitHub Actions External Cron (repo secret), Vercel (no env read/write tooling from agents)
- Sentry project `gse-web`; Stripe (webhook `we_1TcXVf…` enabled)
## Findings (numbers and facts, not vibes)
- Deploy SHA now `f53097ed` (#349) vs `5ffd29e` (#342) in the earlier package; `/api/health` ok true/healthy; ingestion age ~0–1m ok (was ~410–512m ERROR); `source:nflverse` healthy · probe · season 2025 REG floor; settlement healthy (0 overdue / 1478 commenced); gates LIVE_BOARD / PUBLIC_PICKS / STATS_PUBLIC still off; PUBLISH_LEDGER closed.
- Recovery sequence verified: #345 currency probe + multi-writer SUCCESS → `workflow_dispatch settle-picks` SUCCESS (~23:09) → free-spine dispatch SUCCESS (~23:10) → #349 primary-only player-stats SUCCESS 200 (~23:25) after OOM path fixed.
- Free-spine fixed via #346: External Cron every 2h + settle hourly + player-stats primary path; ingestion no longer blocked on the founder laptop's stale local CRON_SECRET.
- Sentry: code present (`sentry.ts`, instrumentation, captureError, #345 call sites), project `gse-web` + DSN created, but Production runtime logs still `observability: not wired (no DSN)` — Vercel env write is founder-paste only (DSN value pasted verbatim in the doc).
- Stripe: GSE webhook enabled; medusa foreign `we_1Tgpw…` disabled + labeled non-GSE; products default_price set Pro/Elite/Fantasy; Fantasy lookup keys `gse-fantasy-monthly` / `gse-fantasy-annual`; active paid subs **0**.
- Prisma pinned `packages/db` to prisma@^5.22.0 + @prisma/client@^5.22.0; `guard:prisma-version` shipped with #344.
- Merges #344–#349 (GSIS crosswalk + 2025 REG floor, free SUCCESS multi-writer + nflverse currency probe, External Cron schedule, money-path ops checklist, sequential satellites OOM fix, primary-only default); #343 independently reviewed (pure parsers, no gate flips) and merged ~23:27 UTC; open PRs: #258 brand (founder call), #343 merged.
- Founder leverage list: paste Sentry DSN pair, open waitlist (`GSE_WAITLIST_GATE_ENABLED=false`), confirm six `STRIPE_*_PRICE_ID` envs, close one paid seat and leave it active for first sticky MRR, optional local CRON_SECRET sync, rights fork A/B/C only if paid odds wanted, #258 brand, optional archive of 11 duplicate local monorepo snapshots.
- Tool boundaries: no Vercel Production env read/write from agents; no inventing CRON_SECRET; Clip Lane isolated from Sports nflverse paths; no LIVE_BOARD / PUBLIC_PICKS without founder YES.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: production-ops state, no football signal.
- TRUST-SIGNAL: gates stayed closed through autonomous merges; no fabricated Game rows; no Odds key re-enabled from agents.
## Engine-actionable? (yes/no + one-line what)
No — production-state ledger; nflverse 2025 REG floor and settlement health are pipeline facts, not model inputs.
