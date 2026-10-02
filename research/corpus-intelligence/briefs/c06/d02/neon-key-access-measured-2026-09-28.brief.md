# data-sources/research/2026-09-28/neon-key-access-measured-2026-09-28.md
## What it is (1-2 sentences)
Records what a founder-supplied Neon API key actually unlocked (authenticated as `PickPilot`, reports `plan: free`) and corrects the round-1/round-2 Neon cost audits: measured average compute is **0.632 CU-hr per active hour**, ~2.5x the 0.25 CU pinned model both audits used.
## Key metrics/methods (formulas where given, else "not specified")
- Measured duty cycle: **lifetime compute 363.1 CU-hours / lifetime active wall-clock 574.1 hours = 0.632 CU-h per active hour** (1.0 = pinned awake at 1 CU). Audits modeled 0.25 CU pinned: ~0.25 x 730h = ~182.5 CU-hrs/mo = **~$19.35/mo** (Launch pricing $0.106/CU-hr). Real average = 2.5x modeled.
- `suspend_timeout_seconds = 0` (compute never scales to zero); `autoscaling_limit_min_cu = 0.25` floor; `autoscaling_limit_max_cu = 8` ceiling (32x the floor).
- Round 2's own worst case cited: 16 CU runaway over a weekend = **$81.41** vs **$5.09** at a 1 CU cap; with ceiling at 8 the exposure is live.
- Two un-made recommendations: cap `autoscaling_limit_max_cu` at 1.0; decide whether `suspend_timeout_seconds: 0` is deliberate (round 2's scale-to-zero thesis assumed a 300s timeout).
- 97 extensions visible via read-only role; bge-m3's 1,024 dims fits the <=2,000 HNSW limit cited by the audits.
## Data sources named
Neon v2 API (`GET /v2/projects/summer-brook-99380762`); `neon me` CLI; Neon console (plan tier, burn by line item still need a founder tap in console); extension catalog (97 entries).
## Findings (numbers and facts, not vibes)
- `neon me` authenticates as **PickPilot**, reports **plan: free** — but `GET /v2/projects/summer-brook-99380762` returns no plan field, and `neon me`'s top-level plan may describe the account, not the project. **Tier treated as unconfirmed.** If genuinely free, the audits' Launch-tier $0.106/CU-hr unit price is wrong by ~5x (allowances also differ).
- Measured 0.632 CU-h/active-hour vs modeled 0.25 → the cost math is wrong by 2.5x, and it is NOT caused by crons holding the endpoint awake (floor-only behavior would give 0.25; something is genuinely consuming above the floor). INFERENCE: there is unexplained above-floor compute draw to investigate.
- `suspend_timeout_seconds: 0` means round 2's entire scale-to-zero thesis ("needs 5 min idle") cannot apply.
- Extensions confirmed available: `vector` 0.8.0, `lakebase_vector` 1.1.1, `pg_cron` 1.6, `pg_partman` 5.1.0, `timescaledb` 2.17.1. `pg_net`/`pg_http` are **not** in the 97 → round 2's "not available" holds. Note: the extension is named `vector`, not `pgvector` — an early `pgvector` filter returned nothing and was misread as absence.
- `CREATE EXTENSION` is a write → **pg_cron is NOT enabled**; per branch-only doctrine it goes on a throwaway branch first (`neon checkout hermes-pgcron --create`), enable there, verify, then point at production.
- `cron.database_name` API-set step from round 2 is now unblocked by the key but still touches default-branch compute config, so it waits.
- No extension created, no compute resized, no branch created, no plan changed, no connection string printed. All queries read-only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Cost/infra ops: the single largest engine-cost line item was under-measured by 2.5x — calibration-state discipline for infra claims, not just model claims.
- [TRUST-SIGNAL] The author deliberately refused to exercise a production-resize capability with a key that could do it — documented restraint as a verifiable audit trail.
## Engine-actionable? (yes/no + one-line what)
**yes** — cap `autoscaling_limit_max_cu` at 1.0 and decide the suspend-timeout posture (both need the founder's call since they resize production compute); treat the free-tier CLI reading as unconfirmed until console-verified, which changes every cost number.
