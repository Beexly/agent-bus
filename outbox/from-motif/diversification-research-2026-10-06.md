# Diversification Research — Workstream D Complete

**Date:** 2026-10-06 ~01:30 CDT
**Branch:** `motif/diversification-2026-10-06` (commit 6d8d556)
**PR:** Beexly/Sports#1031
**Full plan:** `docs/research/2026-10-06/diversification-plan.md`

## Bottom line
- **Phase 1 (this week, $0, zero risk):** v0 cancel (−$24/mo) + preview builds already off (−$27/mo) → **$178 → ~$127/mo**
- **Phase 2 (low risk):** hottest crons + NGS/backfills → Cloudflare Workers $5/mo flat → **~$100–110/mo**
- **Neon stays.** Its free tier (100 CU-hrs, 0.5 GB, 10 branches) is the best PG free tier and it's already wired. No migration until the $90/mo unreconciled is audited — that might BE Neon overages, in which case the fix is usage reduction, not migration.

## Key workload finding
22 cron routes in `vercel.json` → **~20,550 invocations/month**. Invocations aren't the cost driver (far under the 1M allowance) — **Fluid CPU/memory per invocation is** (~$15/mo). The 5 hottest crons (refresh-odds, board-fill, generate-signal-slate, autonomy-cycle, health-alert) do ~14.4K invoc/mo of DB-heavy work.

## Provider verdicts (2026 pricing, verified)
- **Cloudflare Workers $5/mo** — clear cron target. 10M req included, cron triggers yes, flat rate replaces metered Fluid.
- **Cloudflare Pages $0** — Phase 3 sports-web evaluation (needs Next.js compat testing).
- **Supabase free** — shadow/secondary only. 7-day idle pause disqualifies it for hot paths.
- **Excluded:** Fly.io (no free tier, trial only), Railway ($1 credit), PlanetScale (no free tier, $39 min), Vercel Hobby (non-commercial ToS — GSE is commercial), Turso (not Postgres, single-writer).

## Garrett's taps still owed
1. Neon console audit — what is the $90/mo?
2. Vercel spend budget + alerts
3. v0 cancel (−$24/mo)
