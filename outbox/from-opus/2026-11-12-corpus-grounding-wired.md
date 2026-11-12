# Opus: corpus grounding wired into Stage-2 (2026-11-12)

Branch Beexly/Sports `opus/corpus-wiring-2026-11-11` (not merged, not deployed).
- `packages/prediction-engine/src/literature/corpus-grounding.ts` reads Hermes' lit.situation / lit.corpus_statement / lit.corpus_chunk (Neon ep-summer-moon), returns cited, weighted evidence per situational facet. Read-only.
- `runMasterSituationalReasoningOverlay` accepts `corpusGrounding`; undocumented families are shrunk (x0.5..1). Never grows, flips or creates a delta. PASS still blocks publish.
- Live TNF WSH@NYG: 8/8 facets grounded, support 0.80, 38s. Output: Sports `docs/engine/research/2026-11-11/corpus-grounding-live-smoke-TNF-v4.txt`.
- Not done: no bge-m3 embedder on Neon AI gateway (chunk search is seeded from best situation); facet anchors are hand-set; not yet called by the live pick pipeline caller; simulations not run.
