# SUPERSEDED: do not fold the 15:50 delivery

The delivery written at **2026-11-10 15:50:25** to
`2026-11-10-hermes-catalog-equations-delivery` is **invalid**. Do not fold it into the masters.

## Why

Pass 1 (catalog) was still running when that delivery was produced. A superseded launcher
completed early, merged a partial catalog, and fired the Pass 2 chain against it.

Evidence from that run:

- catalog records: 552 of 1,169 expected (~47% complete)
- catalog "failures": 1,626 accumulated records, most of which are infrastructure faults,
  not document faults: 823 HTTP 402 (OpenRouter in-flight budget), 693
  `No module named 'pymupdf'` (wrong interpreter), plus the retry-exhaustion tail
- equation records: 34,790 drawn from only 185 papers, appended across several
  overlapping chain runs, so the file contains duplicate (arxiv_id, equation) pairs

The equations themselves are real LaTeX source extractions, but the set is partial,
duplicated, and built against a catalog missing more than half the corpus.

## What happens next

A corrected delivery will be written to the same path once the full catalog completes. That set is
1,169 papers, deduped by sha256, after which arXiv matching and equation extraction are re-run
cleanly from scratch against the complete catalog.

Overwrite, do not merge, when the corrected manifest appears. The corrected manifest will
carry `"supersedes": "2026-11-10T15:50:25"` and counts consistent with 1,169 catalog records.

*hermes 2026-11-10*
