# docs/ops/FOUNDER_ONLY_CHECKLIST.md
## What it is (1-2 sentences)
A 2026-08-08 founder-only ops checklist splitting secrets, YES decisions, and third-party accounts: P0–P3 readiness items, explicit YES-only gates (LIVE_BOARD, public picks, performance stats, HEOS merge), and a "forbidden until YES + measurement" list. Agents may prepare everything else.
## Key metrics/methods (formulas where given, else "not specified")
- Calibration gate for verified-track-record language: RED on 2026-09-02 with Brier 0.243, ECE 0.051; PERFORMANCE_STATS stays OFF until GREEN ×3.
- `npm run launch:ready` prints a "stale-data kill switch" verdict from `gates.forceNoBetIfStale` (route: `apps/web/app/api/ops/public-surface-truth/route.ts`) instead of manual Vercel lookup.
- `AUTONOMY_EXECUTE=true` (exact string) closes the plan→act loop for allow-listed crons only: free-spine-health · settle-picks · refresh-odds · generate-drafts · calibration-metrics; never flips LAWS / PUBLIC_PICKS / LIVE_BOARD / owner-queue; planner re-fires ~every 15m.
## Data sources named
- TheRundown (key mapped as backup; `rundownBackupConfigured`); Azure Foundry + Vertex (`anyCreditLaneReady: true`); THE_ODDS_API_KEY (flipped, P0 done); Microsoft Clarity; Sportradar official trial (research only, P3).
## Findings (numbers and facts, not vibes)
- P0 done (checked): THE_ODDS_API_KEY flipped; Azure Foundry + Vertex live.
- P0 open: `prove:neon` green after last schema push; production deploy of monorepo HEAD; `CRON_SECRET` on Vercel Production; LLM keys as needed (GROQ/XAI/ANTHROPIC, cash last resort); TheRundown backup key + redeploy confirm.
- Explicit YES observed but NOT ratified: `gates.canExposePublicPicks: true` observed ON in production 2026-09-02 — an observation is not a founder YES; public picks stay unchecked until founder records YES AND `FORCE_NO_BET_IF_STALE=true` confirmed in production.
- Forbidden until YES + measurement: public ROI / guaranteed edge claims; sportsbook CPA/affiliate language without rights; "engines are accurate" public claims without sample floors + reliability.
- Promotion requirements after self-heal exists: (1) sample floors (Brier/ECE + settled N), (2) free-spine SLA green live, (3) FORCE_NO_BET_IF_STALE before public picks, (4) founder YES on gates.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All items: OTHER (ops/secrets governance; no player, coaching, or scheme content).
## Engine-actionable? (yes/no + one-line what)
No — pure ops governance checklist; no modeling or football content. (Useful context: no public picks or ROI claims until Brier/ECE floors + founder YES.)
