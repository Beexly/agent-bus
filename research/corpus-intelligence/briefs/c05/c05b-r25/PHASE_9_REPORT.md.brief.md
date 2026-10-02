# docs/ops/archive/root-museum/PHASE_9_REPORT.md
## What it is (1-2 sentences)
The Phase 9 completion report (2026-05-19, branch `sports-intelligence-os-phase-9-ci`) covering CI hardening (6-job GitHub Actions workflow) and an internal-calibration cockpit/API for the GSE platform, with a **GO for internal calibration only** verdict — code complete but local install/build validation blocked by a sandbox FUSE/bindfs limitation.
## Key metrics/methods (formulas where given, else "not specified")
- CI workflow (`.github/workflows/ci.yml`): 6 jobs — test, build, trust-gate, model-freeze, draft-only, guardrails.
- Guardrail scripts (zero-dependency node `.mjs`):
  - `trust-gate.mjs` (190 lines): scans `apps/web/{app,components,lib}` + `packages/` for ~23 banned phrases mirrored from BANNED registry in `apps/web/lib/trust-claims.ts`; sandbox result: scanned 102 files, 0 banned phrases.
  - `model-freeze.mjs` (156 lines): reads `MODEL_VERSION` from `packages/prediction-engine/src/constants.ts`; accepts evidence via IMPLEMENTED `CalibrationProposal` row in seed.ts, `docs/calibration-proposals/<slug>.md` front-matter (`modelVersion: <v>`, `status: IMPLEMENTED`), or `frozen: <v>` in `FROZEN.md`; sandbox result: `v5.0.0` backed by FROZEN.md baseline marker.
  - `draft-only.mjs` (290 lines): greps for `publishedAt: new Date(...)`, `status: "PUBLISHED"` writes (read-context `where:` exempt), `autoPublish: true`, `publishNow(`, and external send SDK imports (sendgrid/mailgun/nodemailer/resend/twilio/discord/slack/twitter); comment-only lines and `publishedAt: null` exempt; sandbox result: scanned 109 files, no publish/send paths.
- Calibration API `GET /api/cockpit/calibration` (ADMIN-only) returns: mode (`INTERNAL_ONLY`), autoPublish/autoSend/automatedBetting (all false), modelVersion + modelFrozen, readiness gates (canExposePerformanceStats, canApplyCalibrationAdjustments, canPublishContent, isBootstrapMode, reasons[]), history counts (gamesTotal, gamesCompleted, predictionsTotal, predictionsResolved, predictionsPendingResult, settledCanonicalPicks, bootstrapPicks), calibration (status, notes[], proposals[]), guardrails block, warnings[]; `POST` returns 405 `calibration-is-read-only`.
- Safety constants: `getReadinessGates().canExposePerformanceStats` defaults false; `/api/performance` returns 503 when off; `canApplyCalibrationAdjustments` is constant false in `packages/prediction-engine/src/readiness.ts`; legacy publisher worker triple-gated kill switch (`refusedByInternalCalibrationGates`), default OFF.
- Regression test suite `apps/web/__tests__/calibration-cockpit.test.ts` (251 lines): 16 assertions covering never-set-publishedAt, 405 behaviors, INTERNAL_ONLY mode, banner rendering, readiness gates.
- No formulas, no sports metrics; this is infra/QC methodology.
## Data sources named
Existing Prisma models reused: `Game` (status, homeScore, awayScore, commenceTime), `Pick` (result, modelVersion, isBootstrap), `IngestionRun` (source references), `CalibrationProposal` (observation notes); Phase 8 `ContentDraft`/`ContentSource`/`ContentReview`. No external data sources.
## Findings (numbers and facts, not vibes)
- Git status at pass time: 153 changes (mix of M and ??) on `sports-intelligence-os-phase-9-ci`; base commit `72d6565da97e2add9c8e3876ca43ca1ab3a8e31e`.
- Sandbox blockers: bindfs FUSE denied `rename(2)` on populated dirs (ENOTEMPTY) — `npm install` never converged; `.git/index.lock` undeletable, so commit was never performed in sandbox (operator must commit locally).
- `packages/db/prisma/seed.ts` was truncated at line 671 in the sandbox copy (missing `seedDailyBrief` tail, `seedContentDrafts`, `main()`); calibration API degrades gracefully to zeroes/"needs data" without seeded data.
- Legacy `BlogPost` model retains a `publishedAt` column (schema-only, whitelisted); any write to it fails CI.
- `apps/web/lib/content-generator.ts` whitelisted in trust-gate because its legacy LLM prompt string contains forbidden words (telling the model never to say "guaranteed"); gated off by `getReadinessGates().canPublishContent`.
- Risk #5 documented: trust-gate is a string mirror of the BANNED registry — new BANNED claims must be mirrored in the same PR.
- Local validation recipe in §8: 6 steps from `rm -rf node_modules` through `npm run dev`; GO held until `lint && typecheck && test && guardrails && build` pass locally.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — the trust-claims BANNED registry + trust-gate scanner is the direct ancestor of GSE's anti-hype copy doctrine (no unverifiable performance claims); the read-only calibration/INTERNAL_ONLY posture matches the current public/private surface doctrine.
- OTHER — CI job structure and guardrail pattern history.
## Engine-actionable? (yes/no + one-line what)
Partial — not engine model content, but the guardrail pattern (string-mirror banned-claim scanner on every CI run + model-freeze evidence requirement) remains the reference pattern if GSE ever re-implements public claim QC or model-version governance.
