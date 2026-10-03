# product/claude-api-cost-monitoring-spec.md
## What it is (1-2 sentences)
A Phase 3 build specification for monitoring and budgeting Claude API spend across platform surfaces (blog auto-gen, Studio, Model Journal, Model Court, calibration insights), with per-call records, alert thresholds, hard caps, and locked fallback voice when budgets are hit. Spec authored by Claude; code ownership with Codex; status Phase 3 build.
## Key metrics/methods (formulas where given, else "not specified")
- Per-call record: surface, modelName, inputTokens, outputTokens, estimatedCostUsd (from public pricing at call time), userId/gameId/templateKind, durationMs, success, errorKind, observedAt. Indexed on observedAt + surface.
- Per-surface monthly budgets (USD): BLOG_GENERATION $50 (existing); STUDIO_GENERATION $500 (Phase 3); MODEL_JOURNAL_DRAFT $50/month = 1 draft/week (Phase 3); MODEL_COURT_ANSWER $2000/month, highest-volume (Phase 4); CALIBRATION_WEEKLY_INSIGHT $50/month (Phase 4); OTHER $100; total platform $2750/month initial.
- Thresholds: 50% = yellow alert (cockpit only); 80% = orange (owner notified, per-user rate limits tightened 50%); 100% = red (new requests get budget-exceeded refusal, owner pinged); 150% = hard cap (surface disabled until BUDGET_OVERRIDE env flag or next cycle). Budgets are soft until 150%.
- Model Court tier quotas: FREE 3/day, PRO 30/day, ELITE unlimited; at 80% threshold these tighten by 50% (OPEN-CAM-1 default yes).
- Schema: `ClaudeApiCallRecord` (estimatedCostUsd Decimal(10,6)), `ClaudeApiBudget` (monthlyBudgetUsd Decimal(10,2), alertThresholds JSON {yellow:0.5, orange:0.8, red:1.0, hardCap:1.5}).
## Data sources named
None — internal cost-control spec; no external data sources.
## Findings (numbers and facts, not vibes)
- Without monitoring, a single bug (Model Court infinite loop, mis-triggered Studio template, per-minute alert script) could 100x the bill in a day. OTHER (risk framing)
- All Claude API call sites must go through a shared wrapper `callClaudeWithCostTracking`; PR review checklist catches direct calls bypassing it. OTHER
- Open items: OPEN-CAM-1 (auto-tighten per-user quotas at 80%, default yes); OPEN-CAM-2 (Pro+ subscribers get separate Studio budget proportional to subscription revenue — Phase 5); OPEN-CAM-3 (auto-degrade to cheaper model at 80% — default NO, voice consistency wins). OTHER
- Acceptance = 8 criteria incl. cockpit `/cockpit/api-costs` page, owner-channel pings on red/hard-cap, BUDGET_OVERRIDE flag tested. OTHER
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
All findings tagged OTHER — pure API cost-control infrastructure; no sports intelligence content.
## Engine-actionable? (yes/no + one-line what)
No — no actionable sports-engine content; but the threshold-and-hard-cap budgeting pattern (50/80/100/150% tiers + forced fallback outputs) is a reusable template if GSE ever gates paid-inference surfaces.
