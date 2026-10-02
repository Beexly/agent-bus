# ops/CLAUDE_MAX_PRO_HANDOFF_2026-08-06.md
## What it is (1-2 sentences)
Dated 2026-08-06 handoff from a Grok Build session to Claude Max Pro: law (finish · dark · or refuse the write; public surfaces default OFF; no invented scores), a done-list, and a strictly ordered 6-step autonomous job queue (P0 settlement verification, Neon T-1 auditor SQL, T-2 cockpit-vs-ops copy fix, T-3 SEO decision packet, cost-stack check, RCA).
## Key metrics/methods (formulas where given, else "not specified")
- Settlement health: overdue count (live: 0 overdue = HEALTHY); cron endpoint unauth returns 401 without Bearer.
- Cockpit Jarvis: `classifySettlement` RED when lastSettlementAt age > 36h — file notes this can "cry wolf" while ops is HEALTHY (overdue=0).
- T-1 auditor evidence: Neon SQL pulling pick id, selection, consensusPct, bookmakerCount, reasoningShort, dataFreshnessAt, modelVersion, age_hours for Chiefs–Raiders published picks (excludes seed v5.0.0-seed).
- Guardrails: trust-gate script `scripts/guardrails/trust-gate.mjs` for public copy; ≤5 files per PR; tripwire tests with every fix.
- Cost levers: `CONTENT_FREE_LANE_ENABLED=true` + `CEREBRAS_API_KEY` for free lane (brief only); `MODEL_CHEAP`/Haiku surfaces.
- T-3: recommend slim index (noindex non-upcoming previews; sitemap only live slate) unless traffic data says otherwise.
## Data sources named
galaxysportsedge.com production (deploy SHA, public-surface-truth endpoint); Neon Postgres (Pick/Game tables); Vercel Production env (CRON_SECRET); free-source score confirmation; GitHub Actions "External Cron (Galaxy Sports Edge)".
## Findings (numbers and facts, not vibes)
- Settlement overdue count was 0 (HEALTHY) at handoff.
- Cron unauth = 401 without Bearer.
- Jarvis cockpit RED threshold: lastSettlementAt age >36h, which diverges from ops' overdue-count method.
- Public surfaces default OFF: LIVE_BOARD / STATS_PUBLIC / PERFORMANCE_STATS / PUBLISH_LEDGER.
- ≤5 files per PR; T-3 decision is founder-only (no implement without founder option).
- No paid Odds API reintroduction without founder.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: trust-gate green on public copy, no invented scores, DISPUTED holds, VOID only on free-source confirmation — honesty machinery for published picks.
- OTHER: settlement-ops vs cockpit-jarvis consistency (two independent settlement-status computations must agree); finish-dark-or-refuse write law.
## Engine-actionable? (yes/no + one-line what)
Yes — reconcile cockpit Jarvis settlement status with ops overdue-count so the operator view and public health signal never contradict.
