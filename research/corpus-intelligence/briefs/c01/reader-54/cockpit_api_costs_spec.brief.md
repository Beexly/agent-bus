# docs/product/cockpit-api-costs-spec.md

## What it is (1-2 sentences)
Phase 3+ build spec (operator-only) for a `/cockpit/api-costs` dashboard (`apps/web/app/cockpit/api-costs/page.tsx`; owner of code: Codex; owner of layout: Claude) that monitors Claude API spend per surface — the visibility layer preventing Studio + Model Journal + Model Court + calibration insights from silently 100x'ing the bill.

## Key metrics/methods (formulas where given, else "not specified")
- Status badges by % of budget: green <50%, yellow 50–80%, orange 80–100%, red 100–150%, hard-cap >150% (surface disabled).
- **Spend** = sum of `ClaudeApiCallRecord.estimatedCostUsd` for the current month per surface; **Budget** = `ClaudeApiBudget.monthlyBudgetUsd` per surface.
- Budget override: hard-cap toggle requires operator click + confirmation modal; sets `ClaudeApiBudget.overrideActive = true`, `overrideExpiresAt` = end of billing cycle; auto-files a decision-log entry ("DEC-COST-OVERRIDE-<id>"); overrides expire and reset to false.
- Example budget table: Studio $500 (spend $147, 29%), Model Journal $50 (spend $12, 24%), Model Court (Phase 4) $2,000 (spend $0), Calibration Insight $50 (spend $0), Blog Generation $50 (spend $0), Other $100 (spend $3, 3%); TOTAL $162 / $2,750 (6%).
- Refresh cadence: page polls every 30s for spend; trend chart and top-consumers cache 5 min.
- Alert behavior: at 50% threshold Studio auto-tightens per-user quota by 50% with no user-visible change (logged as yellow alert).
- Error log (7 days): `rate_limit_exceeded`, `network_timeout`, `api_error_5xx`, `parse_error` — with timestamp + retry result (example: 2026-05-21 08:15 Studio hit the Anthropic rate limit, retried in 60s, success).
- Open items: OPEN-CKP-COST-1 — warn when a top-3 cost consumer is on the FREE tier (quota-abuse flag; default yes); OPEN-CKP-COST-2 — daily-spend cap separate from monthly (default no; reconsider if a runaway loop actually happens).

## Data sources named
- `ClaudeApiCallRecord` (with `estimatedCostUsd`, `userId`, `gameId` attribution), `ClaudeApiBudget`, `Game` table (matchup labels), decision log.

## Findings (numbers and facts, not vibes)
- Studio dominates spend ($147 of $162 total in the example month); per-surface per-day 30-day stacked-bar trend chart; top-consumers lists show top 10 by user and by game, anonymized truncated cuids; unattributed calls grouped under "unattributed."
- Operator authentication enforced; budget override always requires a decision-log entry; override requires confirmation modal and expires at cycle end.
- Acceptance criteria include: no bundle weight added (Recharts already in tree or hand-built SVG).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: cost-ops document for the Sonnet-5.5 program — the total-signal wiring program's cost discipline (Sonnet orchestrates, lower-tier subagents execute) runs against these per-surface budgets; calibration-insight and model-court spend are the surfaces that could silently 100x.
- OTHER: the per-user quota auto-tighten at 50% and the FREE-tier quota-abuse flag are operational safeguards relevant to any user-facing cost attribution in the engine's LLM surfaces.

## Engine-actionable? (yes/no + one-line what)
No — build spec for an operator dashboard, no signal or model implication; only relevant as the cost envelope the wiring program must stay inside.
