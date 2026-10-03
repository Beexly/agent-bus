# ops/GAP_ANALYSIS_2026-09-03.md
## What it is (1-2 sentences)
Codebase gap analysis generated 2026-09-03 01:35 CST at commit `92136e00c` on branch `claude/final-launch`, finding the repo IMPERFECT: 2 guardrails failing (of 26), 18 of 23 packages missing descriptions, 31 open ledger items, 2 production TODOs — with all findings verified against actual tool output.

## Key metrics/methods (formulas where given, else "not specified")
Formulas: not specified. Hard numbers (verbatim):
- **TypeScript: 0 errors** (`npm run typecheck` exit 0); **Lint: 0 errors**
- Git: clean (no uncommitted), push synced with origin
- **Guardrails: 24/26 passed (92.3%)**; failing: `ai-control-plane-sealing` (20 sealing violations), `ai-council` (`spawn npm ENOENT`)
- **18/23 packages** missing `description` in package.json
- **2 TODOs** in production code (compliance package)
- **31 OPEN ledger items**: Founder-owned (F-*) 7; Research (C-2x, C-3x) 18; Build (B-QUEUE, Q-FINAL) 3; Rotation (R-*) 3
- Test suite not fully evaluated: `npm test` timed out after **180s**

## Data sources named
- `docs/ops/AGENT_LEDGER.md` (31 open items)
- Guardrail scripts (`npm run guardrails`)
- Commit `92136e00c` — "docs: add package READMEs for prediction-engine, db, types"
- Branch `claude/final-launch`

## Findings (numbers and facts, not vibes)
- Critical blocker 1: `ai-control-plane-sealing` guard failing with **20 sealing violations** — test files importing sealed internal modules (`@/lib/ai-control-plane/emergency`, `@/lib/ai-control-plane/internal`) instead of the public API. Six named test files, e.g. `apps/web/__tests__/ai-control-plane-authority.test.ts:47`, `ai-control-plane-budget-pg.test.ts:43`, `ai-control-plane-budget.test.ts:45`, `ai-control-plane-claim-pg.test.ts:16` (+14 more truncated). Impact: ARCHITECTURAL — bypasses cost controls. Fix estimate **1–2 hours** (refactor to `executeAiTask` public API or add documented test exemption).
- Critical blocker 2: `ai-council` guard failing — `spawn npm ENOENT` (PATH/environment issue, likely not a code defect). Priority MEDIUM, fix estimate **30 minutes**.
- 18 packages missing `description`: @sports/ai-council, compliance, crypto, data-ingestion, db, epistemic-twin, feature-store, genesis-kernel, governed, ingestion-pipeline, ops, partner-stack, phase-c, prediction-engine, quote-plane, stats-api, types, util. Priority LOW (cosmetic).
- 2 production TODOs: `packages/compliance/src/checks/access-check.ts:14` ("left to the caller (see scripts/compliance/run-ccm.ts TODOs)"); `packages/compliance/src/checks/receipts-check.ts:34` ("TODO(governed-receipts): rows should eventually be sourced from a real..."). Priority LOW.
- Notable open ledger items: `C-25` (ledger guard hardening round 2), `C-29` (C-15 fleet round 1 REJECTED at verification), `C-32` (PERMANENT DO-NOT-DO list from launch audit), `Q-FINAL` (FINAL RUN issued, 14-item Definition of Done).
- All package READMEs present (this commit). Zero fabricated data claimed in report.
- Recommended "immediate to achieve IMPECCABLE": fix sealing violations, debug ai-council guard. Ledger addendum row included in the file for `docs/ops/AGENT_LEDGER.md`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **[OTHER — infra/governance]:** The sealing-guard design (test files must not import sealed `internal` modules) is the engine's cost-control architecture boundary — relevant to the calibration/sizing lane because any staking or sizing code that bypasses the AI control plane's budget layer evades the guardrails. The 20 violations are test-only, so no production bypass exists, but UNCERTAIN whether the guard was later re-greened.
- **[OTHER — fleet memory]:** Ledger items C-29 (fleet round 1 REJECTED at verification) and C-32 (PERMANENT DO-NOT-DO list) are trust signals for the agent-bus lane: verification rejects stand and a do-not-do list exists from the launch audit — any wiring or research claim from the past week should be checked against both.
- **[OTHER — hygiene for audit claims]:** Garrett's 17:34 audit-challenge doctrine (completion claims need test/audit receipts) maps directly onto this file's verification style: every claim in the report is tied to actual tool output (tsc exit 0, guardrail 24/26, npm timeout at 180s). This is the format that satisfies his "IMPERFECT vs impeccable" framing.

## Engine-actionable? (yes/no + one-line what)
**No** — historical repo-health snapshot, not engine logic; useful only as context for the current guardrail/ledger state, not actionable for predictions or wiring.
