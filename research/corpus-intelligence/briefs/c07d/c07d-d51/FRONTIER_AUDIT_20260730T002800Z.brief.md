# ops/audit/FRONTIER_AUDIT_20260730T002800Z.md
## What it is (1-2 sentences)
A re-audit report (2026-07-30T00:28Z) verifying the Frontier A++ remediation branch `feat/frontier-a-plus-audit-fix` against prior main `548480a` after PR #254 CI and methodTag density fixes. It is a dense domain-matrix checklist (12 domains) of product-law/trust-gate, cron auth, method-continuity, board honesty, and parked work items, ending in a self-assigned A++ score conditional on merge.

## Key metrics/methods (formulas where given, else "not specified")
- 12 audit domains (1.1–1.12), all SHIPPED except 1.12 Optical CV / HEOS / Phase C which is PARKED/GATED on founder YES.
- Cron auth: 18/18 `/api/cron/*` routes verified `cronAuthError` (dual-secret authorize.ts + tests; unused-vi lint fixed).
- Method-tag continuity: `sameMethodOrRefuse` via `method-continuity.ts`; provider methodTag density — gamma, kalshi, model_prior, odds two-way, demo all tagged; raw-implied deliberately untagged; aggregate partial-tag leak fixed — `uniformMethodTags` requires every line tagged or continuity is refused.
- ClosingArchive persists + re-emits methodTag/modelVersion; `computeContinuousClvObservation` for continuous CLV; seed demo archive tagged; FairMethodTag union includes `shin_devig_v1`.
- Trust gates: trust-gate OK, em-dash OK, no-zk-overclaim OK.
- Laws: oddsApiRequired=false · LIVE_BOARD off · refuse-default · measurement > narrative.
- Tests: `method-tag-honesty.test.ts` (10 tests); method-tag package 51/51 green.
- World-class bar checklist (9 items): public handlers refuse-default; cron dual-ready unauthorized 401; board never lies under LIVE_BOARD off; FIRE preflight refuses cleanly; claims/trust gates green; oddsApiRequired false on gamma/own; audit files committed; no silent TODO on P0/P1 critical path; continuous CLV cannot claim across untagged/mixed methods.

## Data sources named
- Main at prior audit: `548480a`; improve branch: `feat/frontier-a-plus-audit-fix`
- Files: `guard:ai-council` workspace; `authorize.ts`; `method-continuity.ts`; `uniformMethodTags`; `computeContinuousClvObservation`; rights-export route; OPEN_LEDGER Class B/C
- AI Council DESTROY guard workspace + CI job green

## Findings (numbers and facts, not vibes)
- 6 gaps fixed this re-audit loop: (1) CI guard:ai-council workspace root + unused `vi` lint; (2) aggregate partial method tags no longer propagate false continuity; (3) ClosingArchive persists + re-emits methodTag/modelVersion with continuous CLV path; (4) Kalshi/Odds two-way/demo stamp method tags, raw implied leaves unset; (5) `shin_devig_v1` in FairMethodTag union; (6) `method-tag-honesty.test.ts` (10) — package 51/51 green.
- Remaining founder-owned: production CRON_SECRET / Neon / Stripe / optional Upstash; LIVE_BOARD / PUBLISH_LEDGER / reveal YES; Phase C (5b) + paid Odds; #226 HEOS.
- Remaining parked: Overlay CV; Poly1305 / CF / SPIFFE digression; manual-only crons (intentional).
- Score: self-assigned A++ conditional on branch merge.
- SHIPPED-but-BLOCKED note: 1.10 Partner sportsbook CPA is SHIPPED as `partner-stack BLOCKED`.
- Crypto honesty via no-zk-overclaim gate; own feed PIT / Stripe spoof via own handlers + session-tier; rights export shipped.
- UNCERTAIN: the self-score (score_self → A++) is the auditor's own claim, not independently verified.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL:** Method-tag continuity (`sameMethodOrRefuse`, `uniformMethodTags`, persisted methodTag/modelVersion on the ClosingArchive) is the anti-selective-record-keeping mechanism — a pick's CLV lineage can never silently cross untagged or mixed methods, directly enforcing the honest-track-record requirement the calibration/sizing lane depends on. Serves trust-target intake + calibration/sizing.
- **OTHER (devig method):** `shin_devig_v1` added to the FairMethodTag union — Shin's devig method is a named devig approach in the odds pipeline; if the engine's vig-removal method is unexamined, Shin (2007) devig is a candidate to benchmark against current practice.
- **COACHING:** None. **QB-BEHAVIOR:** None. **OL:** None. **SCHEME:** None.

## Engine-actionable? (yes/no + one-line what)
Marginal yes — adopt `sameMethodOrRefuse`-style continuity tagging so calibration/CLV records can never silently mix methods; Shin devig (`shin_devig_v1`) is a named devig candidate to evaluate.
