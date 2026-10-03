# adr/002-jarvis-synthesizer.md
## What it is (1-2 sentences)
Accepted architecture decision record (2026-05-18) defining Jarvis as a pure, deterministic synthesizer function — same inputs always produce the same launch-readiness assessment, with no LLM call, no randomness, and no wall-clock dependence.
## Key metrics/methods (formulas where given, else "not specified")
- `synthesizeJarvis(input)` returns: 6-valued `launchStatus` enum, `confidenceLevel` (LOW/MEDIUM/HIGH), 11 sectional health readouts (GREEN/AMBER/RED/UNKNOWN), 4 warning lists, `phaseMatrix` for phases 1–9, `assessedAt`, `version`.
- Ordering rules: LAUNCH_READY requires zero safety warnings; HIGH confidence requires LAUNCH_READY.
- Purity enforced by `jarvis-purity.test.ts` (no I/O, no `Date.now()`, no `Math.random()`); rule changes require bumping `JARVIS_VERSION`.
- Synthesizer never recommends gate flips or auto-publishing; tests assert no `recommendedNextActions` entry contains `auto-bet`/`auto-publish`.
## Data sources named
Inputs: readiness-gates struct, `PublicPerformancePolicy` (ADR 001), ingestion summary, settlement summary, historical pick counts (canonical/bootstrap/W/L/P/V/published/featured), signal coverage percentages, hand-maintained phase-layer manifest, missing env vars list.
## Findings (numbers and facts, not vibes)
- A process-local Jarvis-history ring buffer (capacity-bound) supports trend display and rollback diagnostics; long-term audit is out of scope (pair with `serializeJarvisAudit` + log file).
- Phase-layer manifest is a hand-maintained `const LAYERS` in `jarvis-data.ts` (rejected `fs.existsSync` and `package.json` manifest options).
- No numbers reported beyond structure; this is a design record, not an experiment.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: deterministic auditability discipline — identical inputs → identical JSON, version-stamped for post-hoc interpretation; model for how engine assessments must be auditable.
- OTHER: platform governance architecture, not sports modeling.
## Engine-actionable? (yes/no + one-line what)
No — platform-ops architecture; relevant only as the pattern for auditable engine status reporting (version-stamped, deterministic).
