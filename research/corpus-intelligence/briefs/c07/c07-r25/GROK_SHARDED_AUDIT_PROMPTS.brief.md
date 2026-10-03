# ops/archive/prompts/GROK_SHARDED_AUDIT_PROMPTS.md
## What it is (1-2 sentences)
The Grok Sharded Audit Pack v4 (2026-07-10): a 12-shard autonomous red-team audit framework — master conductor prompt, hypothesis-driven 4-pass protocol, graded interrogatories the founder holds answers to, an auto-reject scoring rubric, attacker/defender two-agent mode, and a rejection prompt for thin reports.

## Key metrics/methods (formulas where given, else "not specified")
- Scoring rubric (self-score, founder re-scores against a counter-audit key): EVIDENCE 0-30, ATTACK 0-25, INTERROGATORIES 0-20, SELF-ADVERSARY 0-15, DELIVERABLES 0-10. Shard scoring <70 is auto-rejected and re-run.
- Praise register voids a shard: "textbook","excellent","ironclad","production-grade","world-class","robust"(bare),"perfectly","flawless".
- Protocol: PASS 1 evidence (one traced row per file, verbatim quotes) → PASS 2 attack (provided scenarios + ≥4 self-invented nastier ones, fencepost tables at every boundary, shown arithmetic) → PASS 3 self-adversary (break own 5 least-certain 'safe' verdicts) → PASS 4 findings (ranked CRITICAL→SMALL, ≥3 tests + ≥1 patch or proof-of-absence, staked verdict with confidence % + one-line pre-mortem).
- Attacker/defender mode for CRITICAL shards (1,3,4,6): attacker finds breaks, defender refutes with verbatim evidence or concedes; only findings surviving B ship.

## Data sources named
Repo files per shard (listed by path, ~40.5k LOC total across shards); Grok fetches via `https://raw.githubusercontent.com/Beexly/Sports/main/<path>`; no external data sources.

## Findings (numbers and facts, not vibes)
- 12 shards with approximate LOC: 1 billing ~2,408 · 2 ingestion ~3,100 · 3 engine ~4,900 · 4 public-api ~2,130 · 5 db ~6,000 · 6 auth ~1,700 · 7 ai-content ~2,900 · 8 workers-ci ~2,200 · 9 cockpit ~7,700 · 10 frontend ~4,900 · 11 types-tests ~4,300 · 12 underused ~4,300.
- Lineage: v1 returned two JSDoc nits + a compliment on the billing shard (thin); v2 forced a depth protocol; v3 staked verdicts against a counter-audit; v4 adds the master conductor + graded interrogatories + rubric.
- Recommended run order: 9 (cockpit) → 5 (db) → 3 (engine) → 4 (public-api) → 2 (ingestion) → 10 (frontend) → 7,8,6,11,12 → 1 (billing) last.
- Attack-scenario examples (each shard has 7–8 scripted + ≥4 invented): Stripe webhook double-delivery idempotency; event-ordering races (subscription.updated before checkout.session.completed); devig with extreme juice (-10000/+2500) and arb'd books; pick'em spread-0 formatting/grading; TOTAL landing exactly on the line (PUSH handling); Kelly with negative edge must be exactly 0; confidence band-boundary monotonicity across 0-100; clvLockLine immutability vs re-ingestion; proof-receipt JSON key-order pinning.
- Graded interrogatories probe: DEV_FAKE_ADMIN tier + prod-disable condition; second-checkout 409 code; idempotency key template; unmapped-price-renewal tier guard; quiet-board horizon comparison operators; freshness-threshold defaults; modelProb at proof-receipt mint time (why it is NOT confidence/100); clvLock update:{} guard; pickSelectionSide slice logic.
- After all 12: collect into `docs/ops/GROK_SHARD_AUDIT_REPORT_<date>.md`, merge underused-asset tables + learning ledgers, rank CRITICAL→SMALL; anything touching readiness gates, pricing, or public claims gets founder line-by-line review regardless of CI.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Attacker/defender adversarial-verify pattern (kills plausible-but-wrong findings, confirms real ones) — [TRUST-SIGNAL]
- "Verbatim quotes or it didn't happen" + seeded/bluff-detected interrogatories as an evidence-gating method — [TRUST-SIGNAL]
- Graded-interrogatory method (hold the answer key, detect bluffs) reusable for engine-validation protocols — [OTHER]
- Fencepost-trace discipline at every boundary (confidence bands, quiet-board horizon, Kelly edge) — [OTHER]
- Engine-correctness checks named across shards (devig bounds, push exclusion, lock immutability, monotonicity) — [OTHER]

## Engine-actionable? (yes/no + one-line what)
yes — Adopt the shard-3 attack-scenario set as engine correctness checks (devig-in-(0,1), push exclusion, clvLock immutability, band-boundary monotonicity, negative-edge Kelly = 0) and the attacker/defender adversarial-verify pattern for engine validation.
