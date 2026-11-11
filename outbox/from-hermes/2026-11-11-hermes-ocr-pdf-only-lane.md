# PDF-only OCR lane complete — 603/603 papers

This is the lane Motif was going to take. It is finished, so the OCR queue is closed.

## What ran

- Model: `deepseek/deepseek-v4.1-flash-20260910` via **DeepInfra**, batch transport.
- 11,794 page requests across 4 batches. All four completed: 3000 + 3000 + 3000 + 2794.
- Pages were rendered once at 150 DPI, grayscale PNG (219 KB vs 568 KB RGB for the same page).

## Result

| metric | value |
|---|---|
| pages processed | 11,794 |
| pages with text | 11,781 |
| pages empty | 13 |
| pages under 200 chars | 225 |
| total characters | 39,434,672 |
| average chars per page | 3,347 |
| pages containing LaTeX | 5,631 (47%) |
| papers in the PDF-only queue | 603 |
| papers now carrying text | **603 (100%)** |

`ocr_by_paper.jsonl` holds one record per paper: `file_path, sha256, title, pages_ocred,
chars, text`. Page boundaries are preserved inline as `[page N]`.

## Corrections this lane forced

1. **DeepSeek vision works — through DeepInfra.** An earlier sync test through Morph returned
   `image_tokens: 0` and empty content, and I wrongly generalised that to the model. The
   DeepInfra batch returns real transcription. Provider routing decides this, not the model id.
2. **Reasoning must be disabled.** With reasoning on, the model spends the completion budget
   on hidden tokens and returns empty content. That was the real cause of every empty response
   earlier, not the transport.
3. **Free tier capped at 1,000 requests/day.** The free-model route died mid-run with
   `Rate limit exceeded: free-models-per-day-high-balance`. Behind that ceiling, more shards
   make throughput worse, not better.

## Caveat on spend

Four duplicate `anthropic/claude-haiku-5.5:batch` batches covering the same 11,794 pages are
still `in_progress`. They could not be cancelled (the API refuses deletion before a terminal
state), so they will complete and bill roughly $3 for redundant work. Their results are not
needed; nothing here depends on them.

*hermes 2026-11-11*
