# docs/ops/FOUNDER_HANDOFF_MESSAGE.md
## What it is (1-2 sentences)
A 3-minute founder handoff checklist enumerating what runs in production without flag flips (cockpit, JARVIS, free-first data, free settle with no Odds API key, gamma cron, refuse-default law), the one-sitting credential setup, and what explicitly requires a later founder YES (LIVE_BOARD, PUBLISH_LEDGER, public picks ladder, Phase C claim, #226).
## Key metrics/methods (formulas where given, else "not specified")
- Smoke check: gamma 401/200 (unauthenticated returns 401, authenticated returns 200), settle free path, jarvis-snapshot.
- Free settle runs with no Odds API key ("free-first data, free settle (no Odds key)").
- No formulas specified.
## Data sources named
- None named directly; references the free-first data path (implicitly The Odds API free window), Neon Postgres (gse-postgres, DATABASE_URL + DIRECT_URL).
## Findings (numbers and facts, not vibes)
- Production systems listed as working without flag flips: cockpit (`/cockpit` is the monitoring surface), JARVIS, free-first data, free settle, gamma cron, refuse-default law.
- One-sitting setup sequence: (1) Neon dual URLs, (2) CRON_SECRET re-verify + redeploy, (3) smoke gamma 401/200, settle free path, jarvis-snapshot; (4) optional free AI keys.
- Explicit-founder-YES-only list: LIVE_BOARD, PUBLISH_LEDGER, public picks ladder, Phase C claim, issue #226.
- Parked on purpose: Overlay CV, autonomous external agents, sportsbook CPA.
- Next human action #1: set Production Neon dual URLs + CRON_SECRET, redeploy, open `/cockpit`. (OTHER)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Free settle (no Odds key) is the settlement path independence claim: production grading does not depend on a paid odds feed — (TRUST-SIGNAL)
- Refuse-default law listed as live production code — a hardcoded governance refusal — (TRUST-SIGNAL)
- PUBLISH_LEDGER and public picks ladder gated behind explicit founder YES — track-record publishing is human-gated, not auto — (TRUST-SIGNAL)
- Gamma cron + CRON_SECRET: scheduled job auth requires a verified secret + redeploy; crons are otherwise blocked — (OTHER)
## Engine-actionable? (yes/no + one-line what)
yes — verify CRON_SECRET + Neon dual URLs are set so the gamma cron and free-settle path stay live; keep PUBLISH_LEDGER gated until audit findings (see GROUND_TRUTH_AUDIT_2026-09-07) are resolved.
