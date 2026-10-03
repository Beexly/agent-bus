# docs/launch-prep/post-launch-neon-serverless-swap.md
## What it is (1-2 sentences)
Queued post-launch infra plan to swap the standard `pg` driver for `@neondatabase/serverless` (WebSocket-over-HTTPS) behind an already-scaffolded feature-flagged adapter, with a p95 cold-start latency trigger, verification checklist, and rollback path. Status: queued for after launch is stable — do not do during launch crunch.

## Key metrics/methods (formulas where given, else "not specified")
Trigger: if cold-start latency on DB-touching routes exceeds ~400ms p95, the swap is the first thing to try. Cron handlers cap at 300s on Vercel (already within budget with the standard driver). No formulas.

## Data sources named
- `@neondatabase/serverless` (MIT, https://github.com/neondatabase/serverless)
- `@prisma/adapter-neon` (Prisma's official Neon adapter, preferred path)

## Findings (numbers and facts, not vibes)
- Adapter scaffold already in repo: `packages/db/src/neon-serverless-adapter.ts`, feature-flagged, uses dynamic `import()` so absent deps don't break the existing build; file header has the flip instructions.
- Path A (preferred): install `@prisma/adapter-neon` + `@neondatabase/serverless`; `const pool = new Pool({ connectionString }); const adapter = new PrismaNeon(pool); export const db = new PrismaClient({ adapter })` — all existing Prisma queries unchanged.
- Path B (fallback): npm alias in package.json — `"pg": "npm:@neondatabase/serverless@^1.0.0"` in dependencies + overrides.
- `DIRECT_URL` stays on the direct Neon endpoint (port 5432) for migrations — migrations don't use the serverless driver.
- Out of scope: worker process (`workers/data-refresh`) on Railway/Fly/EC2 keeps standard `pg` (right choice there).
- Verification: typecheck green (Prisma types unchanged); full test suite green; build bundle-size delta small (serverless driver smaller than pg); manually exercise `/api/picks`, `/api/picks/daily-slate`, `/api/subscriptions/portal`, cron routes (watch for "client has already been connected" or pool-exhaustion errors); re-run `npm run smoke:prod` against galaxysportsedge.com.
- Rollback: `git revert` the swap commit (standard `pg` path stays stock-Prisma).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Vercel/Neon connection-layer performance work.

## Engine-actionable? (yes/no + one-line what)
No — pure infra optimization for DB connection latency on Vercel; triggers only if `/api/picks`-class routes exceed ~400ms p95 cold-start, and changes no engine inputs or logic.
