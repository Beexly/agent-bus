# HANDOFF: research catalog + equation extraction
Generated 2026-11-10 by hermes. Live state, verified with tools, not from memory.

## Where everything lives

Working directory: `C:\Users\Garrett\jev-pipeline`

| file | what it is |
|---|---|
| `extracted_research_data.jsonl` | **the catalog.** 1,169 rows, 3.37 MB, one per unique paper |
| `processed_papers.txt` | resumability tracker, 1,169 paths, one per completed extraction |
| `failed_papers.jsonl` | failure ledger. Currently **0 bytes / 0 failures** |
| `hash_index.jsonl` | sha256 -> path index used for content dedupe |
| `arxiv_matches.jsonl` | papers matched to an arXiv id, with confidence |
| `pdf_only_papers.jsonl` | no arXiv source found: the OCR queue |
| `arxiv_review.jsonl` | ambiguous matches held for human review, never guessed |
| `processed_matches.txt` | matching progress, currently 437 of 1,169 |
| `equations-from-catalog.jsonl` | **not created yet**, Pass 2 has not reached equation extraction |
| `run_pipeline.py` | Pass 1 extractor (scan, sha256 dedupe, extract, ledger) |
| `match_arxiv.py` | Pass 2a matcher (arXiv API, title+author scoring) |
| `extract_equations.py` | Pass 2b LaTeX equation extractor |
| `deliver_bus.py` | writes the bus delivery and manifest |
| `launch_shards.sh` | parallel shard launcher, merges then fires Pass 2 |
| `run_pass2_chain.sh` | waits for Pass 1, then match -> equations -> deliver |

## Pass 1 status: COMPLETE

```
scanned             1,169   (research-corpus-2026-11-03/pdfs 1,117 + deep-corpus-2026-11-04/pdfs 52)
raw records         1,655
duplicates dropped    487   identical content, different paths
unique by sha256    1,169
failures                0
```

Scope note: `G:\My Drive` root also holds personal and legal documents (divorce decree,
birth certificate, offer letters). Those are permanently out of scope. Only the two
research corpus directories are ever read.

## Pass 2 status: RUNNING

Process 9204 is in the matching stage, 437 of 1,169 processed:

```
arxiv matched    165
pdf_only         270   (journal papers with no arXiv record)
review             0
equations          0   (stage not reached yet)
```

arXiv policy pacing is 3s per request, so matching takes roughly 1-2 hours. Equation
extraction and the corrected bus delivery follow automatically.

## Output schemas

Catalog row, one per unique document:

```json
{"file_path": "...", "sha256": "...",
 "data": {"paper_title": null, "authors": null,
          "core_methodology": null, "key_metrics_and_variables": null}}
```

Any field the paper does not state is `null`. Nothing is estimated or reconstructed.

Equation row, one per equation:

```json
{"arxiv_id": "...", "paper_title": "...", "file_path": "...",
 "sha256": "...", "equation": "...", "kind": "display|inline"}
```

Dedupe key for folding into masters: **`(arxiv_id, normalized_equation)`**. Normalize by
collapsing whitespace only. Do not strip LaTeX commands, they are the payload.

## Bus delivery

Target directory:
`C:\Users\Garrett\_research\agent-bus\outbox\from-hermes\2026-11-10-hermes-catalog-equations-delivery\`

Corrected delivery will appear there with `manifest.json` carrying counts and
`"supersedes": "2026-11-10T15:50:25"`.

**Do not use the 15:50 delivery.** It was built on a partial 552-paper catalog by a
superseded launcher, and its equation file contains duplicate pairs from overlapping
runs. See `2026-11-10-hermes-SUPERSEDED-partial-delivery.md` in the same outbox.

## Extraction engine (for reproducibility)

Pass 1 uses `deepseek-flash` via the **direct** DeepSeek API (`api.deepseek.com`), key
`DEEPSEEK_API_KEY`. Not OpenRouter: OpenRouter serializes long-context calls to this model
and `response_format: json_object` makes it hang. Direct API runs 24 concurrent at ~37
papers per minute.

PDF text is extracted locally with PyMuPDF. The interpreter is pinned by absolute path
because PATH drifts to a Hermes-bundled python that lacks PyMuPDF:
`C:\Users\Garrett\AppData\Local\Python\pythoncore-3.14-64\python.exe`

## Archives (audit trail, not deliverables)

- `archive_402/`: OpenRouter in-flight budget 402 records
- `archive_pymupdf/`: wrong-interpreter failures
- `archive_freemodel/`: free-model empty-content failures
- `archive_maxtok/`: max_tokens-induced empty responses
- `archive_pass2_partial/`: contaminated Pass 2 artifacts from the 15:50 race

*hermes 2026-11-10*
