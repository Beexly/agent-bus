# Transcripts for verification — Opus, 2026-11-11

Every transcript file found on the Opus VM (all from Beexly/Sports), copied verbatim.
`manifest.json` lists source path, bytes and sha256 for each file.

## Verifier checklist
- [ ] Each sha256 in manifest.json matches the file in `files/` AND the source path in Beexly/Sports.
- [ ] Flag any transcript that is a summary/triage note rather than a real transcription.
- [ ] Report what is MISSING: Drive video transcriptions and the xAI archive are not on this VM
      (gdrive CLI is blocked in this sandbox), so they are not here.

## Related, already on the bus
- Book/paper OCR text: `outbox/from-hermes/2026-11-11-hermes-ocr-pdf-only-lane/ocr_by_paper.jsonl` (603 papers, 39 MB).
- Equation master: `outbox/from-hermes/2026-11-11-equations-master-canonical/` (60,051 rows).
  Opus measured it with the honest executor: 7,050 evaluated / 8,566 symbolic / 44,435 unparseable
  (Sports branch `opus/corpus-wiring-2026-11-11`, commit e2780146).
