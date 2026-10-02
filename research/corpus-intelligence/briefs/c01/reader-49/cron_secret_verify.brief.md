# ops/CRON_SECRET_VERIFY.md
## What it is (1-2 sentences)
Operational runbook for verifying the `CRON_SECRET` Bearer-token auth on production Vercel cron routes (`settle-picks`, `health-alert`, free-spine). Defines negative (401) and positive (200) checks, a rotation procedure, and the rule that the secret never enters git, chat, or client bundles.
## Key metrics/methods (formulas where given, else "not specified")
- `CRON_SECRET` must be a long random string (32+ chars); generated via `openssl rand -hex 32`.
- Automated smoke: `node scripts/ops/verify-cron-secret.mjs` with `CRON_SECRET` + `BASE_URL=https://www.galaxysportsedge.com`; exit 0 = negative 401 + positive 200 both pass.
- Rotation: set `CRON_SECRET_PREVIOUS` = old, `CRON_SECRET` = new, redeploy, verify with new, remove previous after one stable day.
- Auth helper named: `authorizeCronSecret` in `@sports/util` (dual-secret support during rotation).
## Data sources named
Vercel Production environment variables; the endpoints `/api/cron/health-alert`, `/api/cron/settle-picks`, `/api/ops/public-surface-truth`.
## Findings (numbers and facts, not vibes)
- Without Bearer: `/api/ops/public-surface-truth` returns `detail: "public"` (settlement counts only); with Bearer: `detail: "operator"` (includes `bySport` + `operatorNext`).
- Settlement-drain checks look for `path: "free"` when the Odds API key is absent (correct free-first mode), `picksSettled` > 0 when backlog exists and scores match, and `clvRepair` for pending CLV grades drained.
- HTTP table: 401 = secret configured and request unauthorized (good baseline); 500 + "CRON_SECRET not configured" = set and redeploy; 200 without Bearer = misconfiguration, investigate.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: pure infrastructure runbook; confirms settlement/CLV-drain cron surfaces and the free-first fallback when no Odds API key is present.
## Engine-actionable? (yes/no + one-line what)
No — infrastructure runbook; no model-facing numbers.
