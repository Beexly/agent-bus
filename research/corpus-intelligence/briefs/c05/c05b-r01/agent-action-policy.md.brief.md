# docs/agents/agent-action-policy.md
## What it is (1-2 sentences)
The binding doctrine (Status: Doctrine, source "Prompt 4 — Final Wave") defining exactly what every AI agent in Sports OS may read/write/delete/call: universal rules U1–U7, per-role permission zones (Claude, Codex, scheduled workers, Brain query handler), a violation severity table, and a forbidden-actions summary.
## Key metrics/methods (formulas where given, else "not specified")
- Not specified — governance doctrine, no quantitative metrics or formulas. Its operative structures:
  - **Universal rules U1–U7**: U1 no auto-publish (any automated pipeline must include a human approval gate); U2 no secret access; U3 no scope self-expansion; U4 no gate self-approval; U5 no fabrication (sports data, test results, source citations, user data); U6 no claim-governance bypass (all content pipelines route through `apps/web/lib/compliance-scanner/rules.ts`); U7 preserve CLAUDE.md non-negotiables (no fake data, no fabricated stats, no frontend-only paywalls, no secrets in code, no stale data without disclosure, tests must pass, TS strict).
  - **Permission zones**: Zone 1 free, Zone 2 with pre-declaration, Zone 3 stop-and-request-approval.
  - **Worker permission matrix** (reads/writes/prohibited):
    - `refresh-odds`: reads The Odds API → writes Signal Ledger (odds updates only); no schema changes, no external posts.
    - `generate-picks`: reads Signal Ledger + Evidence Vault → writes Signal Ledger (new picks, **DRAFT status only**); never publishes picks directly.
    - `settle-picks`: reads Signal Ledger + official league feeds → writes Signal Ledger (settlement events); no emailing results without operator trigger.
    - `content-draft`: reads Signal Ledger + Evidence Vault → writes Content Draft queue (**DRAFT only**); no publishing without operator approval.
  - **Worker hard limits**: max execution time enforced externally (cron timeout), max API calls per run, log every action with timestamp + outcome, fail → log and stop, no aggressive retries.
  - **Brain query handler**: read-only; evidence from T1/T2/T3 tiers only — explicitly prohibited: Tier 5 (community) and Tier 6 (AI-generated) sources as evidence; no answer without an Evidence Vault evidence chain; every answer passes the compliance scanner with source attribution.
  - **Agent handoff protocol**: outgoing agent supplies session goal, tasks completed, files touched/not touched, validation status (typecheck/lint/test/build PASS/FAIL/NOT RUN), open Zone 3 requests, known risks, recommended next task; incoming agent must read the handoff and verify state.
  - **Incident severity table**: P0 = auto-published content (remove + stop deployment), Zone 3 action without approval (stop loop, document, human review), secret in log/response (rotate immediately); P1 = tests disabled/weakened (revert + re-run), scope expanded without re-declaration (document, re-declare, continue); P2 = `@ts-ignore` to hide error (remove suppression, fix underlying error).
## Data sources named
- The Odds API (refresh-odds worker), Signal Ledger, Evidence Vault (T1/T2/T3 only), official league feeds (settlement), Content Draft queue.
## Findings (numbers and facts, not vibes)
- **7 universal rules** bind every agent in every context without exception.
- **4 agent roles** governed (Claude Cowork, Codex, scheduled workers, Brain query handler) + a handoff protocol and incident-response table.
- All claim-governance traffic funnels through one code surface: `apps/web/lib/compliance-scanner/rules.ts`.
- Approval gates: new agent type → Owner; new Zone 2/3 action types → Operator; worker API call-limit changes → Operator; Brain new evidence source type → Operator.
- Codex audit requirements: (1) every worker has a permission-matrix entry, (2) every worker has enforced max execution time, (3) Brain routes only T1/T2/T3 evidence, (4) no worker auto-publishes, (5) no agent-controlled endpoint for external posting, (6) any capability not covered is a P1 governance gap.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No auto-publish + draft-only picks → TRUST-SIGNAL
- U5 no-fabrication rule (no fabricated sports data, test results, citations) → TRUST-SIGNAL
- Evidence-tier discipline (T1/T2/T3 only; never T5/T6 community/AI content as evidence) → TRUST-SIGNAL
- generate-picks writes DRAFT-only picks to Signal Ledger → TRUST-SIGNAL
- Everything else (zones, handoff protocol, severity table) → OTHER (process/governance)
## Engine-actionable? (yes/no + one-line what)
**Yes** — the draft-only pick pipeline rule (picks land in the ledger as DRAFT, never publish directly) and the T1/T2/T3-only evidence discipline are the engine's trust floor for any pick-generation or evidence-vault work; reuse the U5/U6 rules as acceptance criteria for builder QC.
