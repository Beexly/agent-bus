# ops/AUTONOMOUS_OPERATING_KERNEL.md
## What it is (1-2 sentences)
Design doc for GSE's deterministic autonomy control plane (shipped 2026-08-06 via #289, I9 executor via #356): a pure control loop that answers "what should GSE do next" from live probes, gates, and settlement truth — plan-only by default, never flipping founder gates.
## Key metrics/methods (formulas where given, else "not specified")
- not specified (no formulas; control-loop design, not a model)
- Modules: `operating-kernel.ts` (P0–P3 action plan, honesty score, refuse-default, revenue blockers); `execute-autonomy-cycle.ts` (I9 actuator, allow-listed free-path kinds: spine/settle/odds/drafts/calibration; Wave-A/accumulate→settle); `settlement-learning.ts` (grades → calibration samples, no MODEL_VERSION apply); `revenue-ladder.ts` (FOUNDING→PROVEN→ESTABLISHED→AUTHORITY readiness, proof-gated).
- Invariants: I3/I8 (durable free-spine SUCCESS via `recordFreeIngestionRun`, External Cron every 2h); I9 (plan→act executor at `/api/cron/autonomy-cycle`, default dry-run; `AUTONOMY_EXECUTE=true` or `?execute=1`); I2 (freshness self-heal — kernel queues free-spine when `ageMinutes > 90`, heal fired at `:22`); LAWS (never flip public gates — LIVE_BOARD / PUBLIC_PICKS / STATS_PUBLIC / PERFORMANCE_STATS / CALIBRATION_ADJUSTMENTS = HOLD only).
- Thresholds: ingestion age > 90 minutes triggers self-heal; ≥100 eligible settled before any PROVEN packaging conversation.
## Data sources named
None — surfaces listed: `/api/cron/health-alert` (includes `autonomy` severity/queues/honesty/revenueReadiness), `/api/cron/autonomy-cycle`, `/api/cron/settle-picks` free path (`free.rca`, `free.stp`, `free.burnRate`, `free.learning`, `free.autonomy`), Jarvis cockpit `recommendedNextActions`, External Cron (free-spine `:05`/2h; settle hourly; autonomy-cycle hourly `:22`).
## Findings (numbers and facts, not vibes)
- Shipped 2026-08-06 via #289; I9 executor 2026-08-07 via #356; code at `apps/web/lib/autonomy/`.
- Hard laws: never set LIVE_BOARD / PUBLIC_PICKS / PERFORMANCE_STATS / PUBLISH_LEDGER / STATS_PUBLIC / CALIBRATION_ADJUSTMENTS; never force-settle DISPUTED; never auto-publish content; never auto-bet; prefer over-reporting risk.
- Operator loop: read `/api/health` + health-alert severity → P0 settlement triggers settle-picks + free-spine-health → ingestion age >90m triggers free-spine-health → attack `free.rca.pareto[0]` (Wave A first) → track burn rate → ≥100 eligible settled before PROVEN conversation → founder YES only for gate flips.
- Founder curls: dry-run plan (`autonomy-cycle` + `CRON_SECRET`), force heal cycle (`?execute=1`), Actions runs `external-cron.yml` with target=autonomy-cycle / autonomy-cycle-execute / free-spine-health. `AUTONOMY_EXECUTE=true` makes scheduled cycle live-execute (still refuses owner queue + LAWS).
- Self-growth edges (open): disposable Postgres CI job (`GSE_REQUIRE_PG_INTEGRATION=1`) for claim + slate opener proofs; persist autonomy plan transitions as Jarvis memory candidates (owner-confirm only); Neon-backed free-spine cache (today process-local; durable truth is IngestionRun); alias table expansion when Wave B TEAM_ORIENT_FAIL dominates Pareto.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the LAWS invariant (never flip public gates, never force-settle, never auto-publish) and "prefer over-reporting risk" are the coded trust-gate doctrine; the ≥100-settled PROVEN bar mirrors the pricing-milestone gate in the charter brief.
- OTHER: operational architecture reference — freshness threshold (90 min), hourly autonomy-cycle cadence, and the honest-plan-only default are patterns for any engine-side scheduling/ingestion loop design.
## Engine-actionable? (yes/no + one-line what)
No — ops/architecture design, not a prediction input; informational for infra-loop design only.
