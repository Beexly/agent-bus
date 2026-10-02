# reasoning/infrastructure-2026-09-28.md
## What it is (1-2 sentences)
Neon Postgres compute duty-cycle audit: the production endpoint of project `gse-postgres` was patched from max 8 CU to 1 CU with a 300s suspend timeout (verified via separate GET, not the PATCH response), but the spec missed that all 42 project endpoints — 41 of them idle `preview/pr-*` branches — were at 8 CU max, a per-branch worst case of $618.92/mo.
## Key metrics/methods (formulas where given, else "not specified")
- Cost arithmetic: 8 CU × $0.106/CU-hr × 730 h = $618.92/mo per always-awake branch; 0.25 CU floor × 0.106 × 730 = $19.35/mo; capped-at-1-CU × 0.106 × 574 h = $60.84/mo (arithmetic checked; 574 h is an assumption, not a measurement). 48-hour runaway at 16 CU = $81.41; at 1 CU = $10.18; at 0.5 CU = $5.09 (founder's round-2 audit, Launch plan $0.106/CU-hr).
- Honest reading: $60.84 is the ceiling the config makes impossible to exceed, not a predicted bill; if 23 Vercel crons hitting every ~2 min keep compute awake, the real figure is the $19.35/mo floor.
- Verification rule: confirm a write with an independent GET, not the PATCH response ("a write that returns its own input is not a verification"); Neon API quirk: `suspend_timeout_seconds` sits on the endpoint, not the compute — setting it on the compute returns 200 and changes nothing; body must be wrapped under an `endpoint` key.
## Data sources named
- Neon API (project `summer-brook-99380762`, branch `br-green-leaf-apdgksoe`, production endpoint `ep-summer-moon-apv5ccys`, region `aws-us-east-1`); `AGENTS.md` founder cost doctrine ("every forgotten branch is another ~$19/mo leak"); real query profile: small read-heavy SELECTs on a 33,962-row table.
## Findings (numbers and facts, not vibes)
- Applied change: `autoscaling_limit_max_cu` 8 → 1, `suspend_timeout_seconds` unset → 300 on production endpoint only; `autoscaling_limit_min_cu` 0.25 unchanged; state idle.
- 42 endpoints total, all at max=8; 41 are `preview/pr-*` branches with 7-day `Expires At` TTLs (oldest live expires 2026-09-30). Bulk-capping or deletion not executed — flagged as the founder's call (INFERENCE: cost exposure, not modeling input).
- Open items: Neon plan tier unconfirmed (billing screenshot seen earlier was Vercel's — all dollar figures assume Launch pricing); no spend alert confirmed on; no production query run to measure peak CU; 41 preview endpoints uncapped.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Verification discipline (independent GET confirmation; endpoint-vs-compute binding quirk): OTHER (infrastructure/runbook rigor).
- $19.35/mo floor vs $60.84/mo ceiling framing, runaway-tail analysis: OTHER (cost governance, no model signal).
- Founder's standing cost doctrine quote: TRUST-SIGNAL (his explicit instruction "every forgotten branch is another ~$19/mo leak").
## Engine-actionable? (yes/no + one-line what)
no — Infrastructure cost audit with no player/team metric, method, or finding that feeds predictions (INFERENCE: useful only for spend governance, not the engine).
