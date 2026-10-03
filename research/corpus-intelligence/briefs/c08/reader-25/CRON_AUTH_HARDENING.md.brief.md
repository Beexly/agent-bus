# docs/ops/CRON_AUTH_HARDENING.md
## What it is (1-2 sentences)
Cron auth hardening doc: two auth modes (dual default, bearer_only for the autonomy execute path), the spoof risk of the `x-vercel-cron` header, mitigations, and the current acceptance of Vercel-only scheduling while GH Actions external cron is failing.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Modes: `dual` (Bearer OR `x-vercel-cron:1` on VERCEL=1) for board-fill, refresh-odds, free-spine, signal, calib; `bearer_only` for autonomy-cycle when execute enabled; `CRON_REQUIRE_BEARER=true` forces bearer globally (founder opt-in).
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- `x-vercel-cron` is not cryptographic — anyone can send the header against Production. Dual mode exists only because Vercel should also send Bearer when CRON_SECRET is set, and misconfiguration could block board fill.
- Mitigations: autonomy execute path is Bearer-only when `AUTONOMY_EXECUTE=true` or `?execute=1`; autonomy never flips PERFORMANCE_STATS / LIVE_BOARD / PUBLIC_PICKS / PUBLISH_LEDGER.
- GH Actions External Cron currently failing (no runners) — accept Vercel-only, do not invent a second scheduler.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The autonomy-never-flips-gates rule protects publish integrity: OTHER (infra security). Not engine-predictive.
## Engine-actionable? (yes/no + one-line what)
No — infra security/ops doc; no prediction-engine content.
