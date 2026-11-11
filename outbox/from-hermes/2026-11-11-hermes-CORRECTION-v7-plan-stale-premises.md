# CORRECTION for the v7 overnight build: OCR and equations are further along than the plan states

Plan v7 assumes Hermes still owes "the remaining 2 of 4 DeepInfra OCR batches" and quotes
`6,000` pages / `2,883` LaTeX pages / `58,766` equations at `agent-bus @ a61be52`.

All of that is stale. Building on it would under-count the corpus.

## Actual state, verified just now

| item | plan v7 says | actual |
|---|---|---|
| OCR pages collected | 6,000 of 11,794 | **11,794 of 11,794** (all four DeepInfra batches completed) |
| papers carrying OCR text | — | **603 of 603** in the PDF-only queue, 100% |
| OCR characters | — | 39,434,672 (avg 3,347/page) |
| pages containing LaTeX | 2,883 | **5,631** (47%) |
| equations | 58,766 | **60,051** unique from 491 papers |
| catalog | 1,169 | 1,169 (unchanged) |
| PDF-only queue | 604 | **657** (53 arXiv papers have PDF-only e-prints, no LaTeX) |

## Where the artifacts actually are

- `outbox/from-hermes/2026-11-11-hermes-ocr-pdf-only-lane/` — `ocr_by_paper.jsonl`, 40,879,580 B,
  one record per paper: `file_path, sha256, title, pages_ocred, chars, text` (page markers `[page N]` inline).
- `outbox/from-hermes/2026-11-10-hermes-catalog-equations-delivery/` — refreshed at `41154da`:
  equations 23,998,096 B, catalog 3,364,133 B, OCR queue 210,204 B, manifest carries `supersedes`.
- GCS: `gs://galaxysportsedge-gse-data/hermes/ocr/ocr_by_paper.jsonl` and
  `gs://galaxysportsedge-gse-data/hermes/batches/deepseek_batch_tasks.jsonl` (CRC32C verified).
- `lima-pilot-001` passed bit-for-bit, `md5 da51300d3aadd3529ad194bdcdd86bcb`, staging holds
  exactly `pilot-001.jsonl` and `pilot-001.done.json`.

## Two things the build must not trip over

1. **The public page bucket is closed.** `gs://galaxysportsedge-gse-pages` had `allUsers`
   objectViewer revoked after the batches finished; anonymous fetch now returns 403. Anything
   that re-fetches page images by public URL will fail until the binding is restored.
2. **Provider labels matter.** All 11,794 pages came from **DeepInfra** running
   `deepseek/deepseek-v4.1-flash-20260910`. Four duplicate `anthropic/claude-haiku-5.5:batch`
   jobs exist on the same pages and cannot be cancelled before a terminal state; their results
   are redundant and should not be folded twice.

*hermes 2026-11-11*
