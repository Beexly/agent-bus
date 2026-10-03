# docs/product/pre-mortem-pipeline-spec.md
## What it is (1-2 sentences)
A Phase 2 product spec for a deterministic (non-LLM) "What Would Change Our Mind" pipeline that auto-generates a 2–4 bullet pre-mortem for every published pick, surfacing factor-level failure modes on pick detail pages and Game Rooms. It feeds a loss-review loop: at settlement, the system maps which pre-mortem bullet most aligns with what actually went wrong.
## Key metrics/methods (formulas where given, else "not specified")
- Material-change re-run threshold: any factor score moves >0.15 in either direction → re-run once per pick before settlement.
- Bullet generation rule (3 gates): factor is top-3 contributor to score AND confidence above contribution threshold AND has a known failure-mode template.
- Thin-coverage warning: if fewer than 2 bullets generated, `warning` = "Pre-mortem coverage thin — only N factor[s] above contribution threshold."
- Line-movement failure template: "If sharp money moves the line >2 points against us" (example); lineMovement template uses >X points placeholder.
- Data-quality gate: "If data quality drops below grade B between publish and game time" → considered published prematurely.
- Voice rules: ban hedges ("might," "could possibly," "we'll see") and outcome certainty ("definitely will," "guaranteed to"); compliance scanner hard-refuses banned vocabulary, hedging, and certainty phrasing.
- Acceptance criteria: 9 green-gate items, including brand-safety scan on 50 generated pre-mortems returning zero hits and an eval suite at `docs/ops/evals/pre-mortem-*` covering happy-path, thin-coverage, and compliance-fail.
## Data sources named
- `PickSignalSnapshot` (per-factor scores, contribution threshold, data-quality grade) — the pick's factor snapshot is the sole input.
- `AgentRunLog` (failed-pipeline logging); pick detail pages; Game Intelligence Room "What Would Change Our Mind" panel; Loss Room "What we got wrong" section; Twitter bot post-mortem thread post 4; Model Court refusal templates; Public Ledger (proposed, OPEN-PM-1).
## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] Pipeline runs synchronously on `Pick.publishedAt` → non-null; failure is best-effort and never blocks publishing — missing pre-mortems surface in the cockpit for manual authoring.
- [TRUST-SIGNAL] Nine factors ship with failure-mode templates (consensus, depth, lineMovement, volatility, restAdvantage, scheduleStress, venueForm, crossMarket, dataQuality); two factors (evidenceHealth, bootstrapShare) are deliberately excluded because they act as publish gates, not post-publish bullets.
- [TRUST-SIGNAL] Pre-mortem persists as `preMortemContent` JSON (`bullets`, `generatedAt`, `modelVersion`, `warning`), `preMortemAt`, `preMortemVersion` on `Pick` via a Codex-owned migration.
- [SCHEME] Template substitution shape is version-controlled code at `apps/web/lib/pre-mortem/templates/<factor>.ts` with `severityRank` (1 = highest) ordering bullets; Claude owns template text, Codex owns pipeline.
- [TRUST-SIGNAL] Settlement integration logs WIN (which conditions did/didn't happen) and LOSS (which bullet aligned with the actual loss reason) — this is the pick-level learning signal for the next model version.
- [OTHER] Pre-mortem is explicitly public with no tier gating; proposed for the Public Ledger (OPEN-PM-1) so settled picks can be audited as "did the pre-mortem call it?"
- [OTHER] OPEN-PM-3: no failure templates for v6 Kelly/Poisson helpers (shipped 2026-05-21) — engine math, not exposed as factors; reconsider in Phase 5+.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Public accountability loop tied to settlement outcomes → TRUST-SIGNAL
- Fixed template text per factor, deterministic no-LLM generation → SCHEME
- Line-movement sharp-money tripwire (>2 pts in 6 hrs) → SCHEME, TRUST-SIGNAL
- Data-quality grade-B publish-prematurity rule → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — The engine needs factor-level failure-mode tripwires (line-movement thresholds, data-quality grades) and a settlement-time loss-attribution loop wired to its factor scores; the spec's 9 template factors define the monitoring surface.
