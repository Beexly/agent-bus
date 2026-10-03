# innovation-os-current-state.md
## What it is (1-2 sentences)
A 2026-05-22 snapshot of the Innovation OS phase-0 foundation covering three internal trust/compliance surfaces: Loss Autopsy (with a public Loss Room), the Promo Desk operator registry, and the Market Twin cockpit posture view, plus build-safety notes.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
Prisma schema (`LossAutopsy` 1:1 with `Pick`; `LossAutopsyStatus`, `LossRootCause` enums; migration `packages/db/prisma/migrations-archive/20260522141600_add_loss_autopsy/migration.sql`, squashed into `migrations/20260101000000_baseline` on 2026-09-02), `/cockpit/losses`, `/performance/losses`, `/performance/losses/[id]`, `/cockpit/promo-desk`, `/api/cockpit/operator-registry`, `apps/web/lib/cockpit/operator-registry.ts`, `/cockpit/market-twin`, `/api/cockpit/market-twin`, `/api/picks`.
## Findings (numbers and facts, not vibes)
- Loss Autopsy migration enforces a unique autopsy per pick, with indexes on authored time, status, and root cause; `LossRootCause` enum gives a taxonomy of loss causes (INFERENCE: usable for pick-loss classification).
- Promo Desk: all registry rows are demo operators; no approved partners; public promotion publishing is blocked (guard returns `OPERATOR_NOT_APPROVED`) unless an `APPROVED_PARTNER` exists.
- Market Twin classifies next-7-days scheduled games into `READY_TO_SCORE`, `WATCH_ONLY`, `CONFLICT`, `QUIET` using bookmaker coverage, context freshness, and line movement spread.
- Build safety: the homepage skips its self-fetch to `/api/picks` when `DATABASE_URL=stub`, preventing static-gen hangs with no local server.
- Verification green 2026-05-22: lint, typecheck, test with `DATABASE_URL='stub'`, and stubbed build.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
OTHER: platform ops snapshot (loss taxonomy schema, promo governance, game-posture classification); no player/team behavioral intelligence.
## Engine-actionable? (yes/no + one-line what)
Yes (marginal) — the `LossRootCause` enum is a ready loss-cause taxonomy the engine's pick-loss autopsy loop could adopt, and Market Twin's 4-state posture classification (READY_TO_SCORE/WATCH_ONLY/CONFLICT/QUIET) is a reusable readiness-gating pattern.
