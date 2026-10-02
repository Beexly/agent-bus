# ops/evals/README.md
## What it is (1-2 sentences)
Index/spec for the `docs/ops/evals/` regression-suite directory: append-only test cases for the AI-output layer, where Claude writes eval files and Codex builds the runner wired into CI. Defines the scope of AI-output surfaces needing coverage and the YAML eval file format.

## Key metrics/methods (formulas where given, else "not specified")
- Eval file format: YAML frontmatter (surface, scenario, created, created_by, status) + sections `# Input`, `# Expected behavior`, `# Forbidden behavior`, `# Pass criteria`; contract validator run via `npm run evals:contracts` (validates frontmatter, required sections, numbered pass criteria; does not call Claude or score outputs yet).
- Surfaces requiring eval coverage: Twitter/X bot post templates (Phase 3), Galaxy Studio templates (fan explainer, fantasy angle, betting education, X thread, newsletter, sponsor-safe blurb, YouTube ideas), Model Court conversational layer Q&A grounded in local evidence (must refuse when evidence is thin), blog auto-generation pipeline (`BlogPost`), pre-mortem auto-summary (Phase 2/3), loss post-mortem auto-summary (Phase 3+), Model Journal weekly essay drafts (Phase 3+).
- Append-only rule: once written, an eval stays; contract changes are superseded by a new file, never edited.

## Data sources named
None named (internal test harness spec only).

## Findings (numbers and facts, not vibes)
- Directory is append-only; Codex owns runner + CI wiring; Claude owns eval authoring.
- Model Court must refuse when evidence is thin; no LLM calls appear in the edge program (2026-08-19 roadmap §1.6).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Thin-evidence refusal + contract-gated AI output surfaces as the trust architecture for public content (TRUST-SIGNAL).

## Engine-actionable? (yes/no + one-line what)
No — process/spec doc for test infrastructure; engine-relevant only insofar as eval contracts govern output gates (already covered by the edge roadmap brief).
