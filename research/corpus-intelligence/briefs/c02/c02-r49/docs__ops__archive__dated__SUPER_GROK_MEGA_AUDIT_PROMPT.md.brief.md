# docs/ops/archive/dated/SUPER_GROK_MEGA_AUDIT_PROMPT.md

## What it is (1-2 sentences)
The full-depth audit spec for a frontier agent (Super Grok) auditing and hands-on fixing the entire Galaxy Sports Edge monorepo (Beexly/Sports). Dated 2026-07-10 and marked SUPERSEDED FOR EXECUTION because one conversation overflows Grok's context window (observed twice, Grok pulled 100 sources); the same audit was split into 12 context-safe shards in `GROK_SHARDED_AUDIT_PROMPTS.md`, so this document remains the intent/spec reference.

## Key metrics/methods (formulas where given, else "not specified")
No statistical formulas given. Audit method = 9 ordered depth axes per module: (a) correctness, (b) honesty (can any public surface show a number the DB cannot prove?), (c) resilience, (d) performance, (e) security, (f) money/Stripe paths, (g) types, (h) tests, (i) UX/copy/a11y. Findings ranked CRITICAL → HIGH → MEDIUM → SMALL, with the explicit rule that even <0.5% improvements ship ("Small compounding edges are the whole business model"). Operating rules: branch `grok/mega-audit-<topic>`, never main, TS strict no `any`, failing test FIRST then fix, many small PRs, all honesty rails non-negotiable. Key thresholds named: CLV ≥52.4% as a pricing-ladder milestone; repo carries 7,300+ tests and a 14-scanner honesty guardrail chain in CI.

## Data sources named
- Ingestion adapters cited in the underused-asset hunt: Kalshi client, ESPN results client, openfootball (CC0), nflverse, Reddit narrative source.
- Code surfaces named: packages/prediction-engine/src/platform-config.ts (readiness gates), packages/prediction-engine/src/clv-capture.ts, public CLV surface /clv, apps/web/lib/content-engine (10 approved templates), Jarvis memory store (Postgres, write path unused), scripts/backtest/ (backtest harness from the shadow-locked player-projection engine), Market Twin / observatory market-gravity metrics, proof receipts + immutable snapshots with update:{} patterns.
- External services: The Odds API, Neon Postgres (idle-conn closes noted), Stripe (checkout/webhook/dunning/refund event orderings).

## Findings (numbers and facts, not vibes)
- Underused-asset inventory (verified by the author of the spec): content engine has 10 approved templates with an empty draft queue — drafting pipeline built but never runs; Jarvis memory store wired to Postgres with 0 memories written; CLV capture exists alongside a public /clv surface — end-to-end wiring unverified; Kalshi/ESPN/nflverse/openfootball/Reddit adapters exist but aren't wired into settlement corroboration or engine signals; player-projection engine is shadow-locked (noted as correct — it loses to naive) but its backtest harness is reusable and the main engine's continuous backtesting is unverified; proof receipts exist per pick but a public "verify this pick" hash-chain affordance may not exist.
- Deliverables specified: small CI-green PRs; docs/ops/GROK_MEGA_AUDIT_REPORT_<date>.md with file:line references and one why-it-matters sentence per finding; the underused-asset inventory table; a "what I could not verify" section.
- Season-awareness rule: July audit — MLB/MLS live, NFL/NCAAF/NBA/NHL boards are futures; do not alarm on quiet off-season boards.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Honesty rails and evidence-gating (readiness gates, stale-data kill switch, numeric-grounding guards, brand-honesty CI scanners, proof receipts/snapshots) — the brand's trust infrastructure: **TRUST-SIGNAL**
- CLV ≥52.4% pricing-ladder milestone + closing line value as a priced product edge: **TRUST-SIGNAL**
- "Public surface must never show a number the DB cannot prove" long-tail audit mandate (confidence, win rates, CLV, streaks, JSON-LD, OG images): **TRUST-SIGNAL**
- Small-edge compounding doctrine (ship even <0.5% gains): **OTHER** (method/ops philosophy)

## Engine-actionable? (yes/no + one-line what)
Yes — the underused-asset inventory table deliverable and the `grep for exported functions with zero non-test importers` pass are a direct wire-first recipe for finding built-but-unwired engine capability.
