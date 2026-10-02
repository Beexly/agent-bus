# docs/ops/LAUNCH_TRUTH.md

## What it is (1-2 sentences)
A 2026-08-06 "what is actually open vs dark" launch-truth doc for GSE production: per-URL live probe table, non-negotiable product law (finish-or-dark, gates default off), founder-only flag table, and a live production snapshot including a Settlement P0 with drained-backlog numbers.

## Key metrics/methods (formulas where given, else "not specified")
- Settlement overdue definition: PENDING picks past a 6h grace window.
- Free settle batch `take`: 500 → **1500** (config change, not a model formula).
- Settle-picks cron cadence: every 3h → **hourly at :20**.
- CLV grading is named as a follow-on (free path grades CLV after settle; drains PENDING `CLV_GRADE` work) — formulas not specified in this file.

## Data sources named
Production probe endpoints: `/api/health` (database ok), ingestion last-success (~180m at probe), `gse_contest_settlements` (Postgres), `gse_waitlist_leads` (Postgres), contest storage mode (postgres), `CONTESTS_PUBLIC` flag state, CI trust-gate.

## Findings (numbers and facts, not vibes)
- Commenced picks at live probe 2026-08-06 ~06:35Z: **1478**. [OTHER — ops]
- Overdue PENDING picks (>6h): **139**, band labeled **CRITICAL**. [OTHER — ops]
- Contest settlements merged from local file into Postgres `gse_contest_settlements`. [OTHER — ops]
- Contest entries require full-slate; fail-soft list/enter; email hash pepper env. [OTHER — ops]
- `/api/contests/week` returns JSON week + leaderboard + storageMode. [OTHER — ops]
- `/stats` 404s unless `STATS_PUBLIC=true`; correctly dark (statsPublic false). [OTHER — ops]
- Ingestion last success was ~180m before probe. [OTHER — ops]
- Settlement capability flagged **CRITICAL / unavailable**; P0: settle-picks must clear overdue PENDING picks. [OTHER — ops]
- Founder action named: `CRON_SECRET` must be set or Vercel never invokes settle-picks. [OTHER — ops]
- CLV / Glass Ledger clock: honest pre-kickoff commits are the "uncopyable moat," gated on `PUBLISH_LEDGER` founder enable. [TRUST-SIGNAL]
- Law item: no public ROI / guaranteed edge; copy fences + honesty gates. [TRUST-SIGNAL]
- Law item: no affiliate / no paid contests / no prize pools. [OTHER — ops]
- Pass-4: waitlist/newsletter subscribe durable in Postgres `gse_waitlist_leads` when Neon live; Vercel+stub waitlist honestly 503s. [OTHER — ops]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CLV settlement grading on the free path (TRUST-SIGNAL): CLV capture named as core of the Glass Ledger moat; closing-line capture is a trust/calibration signal the engine needs on every pick.
- Pre-kickoff honest commits as "uncopyable moat" (TRUST-SIGNAL): committing picks before kickoff with timestamps is the public-proof mechanism — reinforces the commit-before-lines requirement for any public pick surface.
- Copy-fence laws — no ROI claims, no "lock" slang (TRUST-SIGNAL): hard content-gate rules that any engine-driven copy pipeline must honor.
- All remaining items (OTHER): ops/infra gates.

## Engine-actionable? (yes/no + one-line what)
Yes — CLV grading after settlement and pre-kickoff commit ledgering are named as the proof/calibration moat, so the engine must capture entry odds and line-at-close per pick.
