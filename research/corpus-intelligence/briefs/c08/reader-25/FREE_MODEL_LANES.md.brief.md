# docs/ops/FREE_MODEL_LANES.md
## What it is (1-2 sentences)
Canonical 2026-09-23 pin of the free model lanes for GSE builder work (priority A→D): OpenCode Zen (A, live default), OpenRouter :free extras (B, key expired), NVIDIA NIM (C fallback), Ollama on Beexly (D local fast edits) — a cost-discipline doc, not engine material.
## Key metrics/methods (formulas where given, else "not specified")
- A: OpenCode Zen `opencode/space-bunny-free` (small: `opencode/mimo-v2.6-flash-free`) — live default, GREEN 2026-09-23.
- B: OpenRouter :free extras only when key live (currently EXPIRED/red — do not nag Garrett).
- C: NVIDIA NIM `nvidia/google/gemma-3-12b-it` (small 4b) — fallback only.
- D: Ollama `qwen3-coder:30b` on Beexly host when up.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- Hard rules: never Opus/Muse Spark High/Sol/thinking-high for additive wiring; never treat `stealth/space-bunny-alpha` (stale OpenRouter-bunny path) as the Zen primary; Cursor CloudAgent is last resort only.
- Red flags include: Gemini free-tier 429 treated as "need paid" instead of freeze + free fallback; Kimi/Moonshot/DeepSeek paid as default engine.
- OpenCode default observed live = A; config at `C:\Users\Garrett\.config\opencode\opencode.jsonc`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Builder-model routing: OTHER (cost-discipline infra). No engine/prediction content.
## Engine-actionable? (yes/no + one-line what)
No — builder cost-discipline doc; not engine intelligence.
