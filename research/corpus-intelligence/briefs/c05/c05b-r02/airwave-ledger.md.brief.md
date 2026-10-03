# docs/airwave-ledger.md

## What it is (1-2 sentences)
Product/ops doc for **The Airwave Ledger** — a broadcast-accountability system that turns what a sports pundit says on air into a paraphrased, timestamped, graded claim, then keeps a running per-pundit accountability index. Status is **built, founder-gated, illustrative-until-founded**: product surface, scoring engine, redaction boundary, and operator review queue are live on demo data; live capture of named broadcasts and any public scorecard tied to a real person are off by default behind a 4-item legal checklist.

## Key metrics/methods (formulas where given, else "not specified")
- **Accountability index** = `round(100 × credit / stake)`; `0` when nothing checkable was staked. A stake-weighted credit ratio over **settled** claims (pending excluded).
- **Stake weighting** by how emphatic the language was: `EMPHATIC 1.5 · LEAN 1.0 · HEDGED 0.6`.
- **Credit**: `HIT` earns full credit; `MISS` earns none; `PUSH` earns half.
- **UNFALSIFIABLE** takes post a small stake (`0.5`) they can never recover — trading in un-checkable noise trends the index toward zero by design. A take too vague to check is recorded as unfalsifiable and scores nothing ("refusal is a feature").
- `falsifiableRate` and `hitRate` are reported alongside the index so a high score from one emphatic call reads honestly.
- Scoring is pure and unit-tested (`lib/airwave/__tests__/airwave.test.ts`).
- Pipeline: `capture (gated) -> transcribe -> extract -> grade -> review -> publish (gated)`; stages 1–3 are out-of-process workers, not in the web bundle.

## Data sources named
- Freely-published **YouTube / podcast feeds** first (recommended path to live).
- SiriusXM-class **satellite radio** — opt-in only, held until `AIRWAVE_SIRIUSXM_LEGAL_ACK=true`.
- **Broadcast-TV simulcast** — also held until legal ack.
- Whisper-class transcription + speaker diarization for line attribution.
- Optional intake lanes: Google Sheet transcript import (`AIRWAVE_TRANSCRIPT_SHEET_ID`, `AIRWAVE_TRANSCRIPT_WORKSHEET_NAME`), local CSV/TSV file path, beat reports, studio handoff (`AIRWAVE_BEAT_REPORTS_ENABLED`, `AIRWAVE_STUDIO_HANDOFF_ENABLED`).

## Findings (numbers and facts, not vibes)
- Capture is schedule-driven, not always-on: show-schedule map fires only during relevant programming inside the **05:00–23:00 CT** window; rolling **~10-minute segments** to a temp store, **deleted after extraction** — no audio archive is ever retained.
- Transcript is reduced to claims, then discarded; assertions are **paraphrased, never verbatim**; the internal clip pointer never crosses the redaction boundary (`lib/airwave/redact.ts` strips at the type level).
- Operators approve claims in `/cockpit/airwave` before anything is graded in public — draft-only, no auto-publish, no auto-send; public ledger renders at `/airwave`.
- Master switch `AIRWAVE_ENABLED=true` inert by default; `lib/airwave/pipeline.ts#captureGate` holds every source when unset; `planCapture` is a dry-run that never captures.
- All four legal-gate checkboxes are unchecked: source terms, copyright posture (ephemeral segments, derived paraphrased claims only), right of publicity / defamation (named-real-person scorecard needs sign-off), paraphrase-only.
- `/api/airwave/readiness` and `/api/airwave/intake-readiness` are read-only endpoints exposing env-var names and booleans only — never secret values, spreadsheet IDs, local paths, or transcript text.
- 12-file map given (`apps/web/lib/airwave/*` types, grade, redact, pipeline, control-plane, intake-readiness, demo-ledger; components/airwave/pundit-ledger.tsx; app/airwave/page.tsx; app/cockpit/airwave/page.tsx; two API routes).
- Concept lineage: the realization of the `novus` "grading spine" applied to a new input stream; same glass-box standard as the engine's own Decision Autopsy, pointed outward.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL** — The stake-weighted, emphasis-scaled grading formula (index = round(100 × credit/stake); unfalsifiable posts unrecoverable 0.5 stake) is a portable accountability-scoring method for graded claims of any kind.
- **OTHER** — Broadcast-pundit tracking as a product surface; the two-tier cited-vs-internal sourcing rule and cost-aware routing (cheap models on the firehose, escalate only flagged segments) are product architecture, not engine signal.

## Engine-actionable? (yes/no + one-line what)
Yes — the accountability-index formula (emphasis-scaled stakes + unrecoverable penalty for unfalsifiable takes + falsifiableRate/hitRate alongside) is directly reusable for the engine's own Decision Autopsy and any public pick-scorecard grading.
