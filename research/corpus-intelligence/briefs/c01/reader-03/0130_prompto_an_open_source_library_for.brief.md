# arxiv-program/research/2026-09-21/arxiv-deep/0130-prompto-an-open-source-library-for.md
## What it is (1-2 sentences)
Full-paper read of Prompto (arXiv:2408.11847v1), an MIT-licensed open-source library for asynchronous, rate-limit-aware querying of multiple LLM endpoints (proprietary APIs + self-hosted) from a single experiment spec file. Verdict recorded in file: ADOPT — concrete, immediately usable for GSE's multi-model research harness and Garrett's OmniRoute/OpenRouter routing.
## Key metrics/methods (formulas where given, else "not specified")
- Experiment spec: single JSONL file; each line (prompt_dict) carries prompt, api, model_name, optional parameters (passed through un-unified — OpenAI max_tokens vs Gemini max_output_tokens are NOT normalized), group (parallel queue grouping), multimodal inputs via media folder. CSV auto-converts to JSONL.
- Execution: prompto_run_experiment CLI (or Python Settings/Experiment API); --max-queries sets per-minute pacing (e.g., 10 QPM -> one request every 60/10 = 6 seconds, Section 3.2 — the one quantitative relationship stated); --max-attempts retries with failed prompts re-queued at back; --parallel (-p) runs per-API/per-model queues concurrently in a single async thread, each queue with its own rate limit.
- Pipeline mode: prompto_run_pipeline watches input folder, processes new experiment files in last-modified order.
- Outputs: timestamped output folder with completed JSONL (each prompt_dict gains a "response" key), original input copy, run log.
- Evaluation: built-in scorers (match, includes; --scorers flag) plus LLM-as-judge via judge prompt templates; rephrasing pipelines for prompt-robustness studies.
- Extensibility: new APIs subclass AsyncAPI and implement async query().
- Validation design (Appendix A): three timing experiments, each 100 prompts per endpoint/model, sync baseline vs prompto — (A.1) async vs sync per endpoint; (A.2) parallel multi-endpoint vs sync; (A.3) parallel multi-model on one endpoint vs sync. Single-machine (2021 MacBook Pro M1 Pro, 32 GB), single-run timings (no variance reported). 100 prompts sampled from Stanford Alpaca instruction data (tatsu-lab/stanford_alpaca alpaca_data.json). Endpoints: OpenAI API (gpt-3.5-turbo, gpt-4, gpt-4o), Gemini API (gemini-1.5-flash), Ollama (Llama 3, local). Rate settings: 500 QPM OpenAI/Gemini; 50 QPM Ollama.
## Data sources named
Stanford Alpaca instruction-following dataset (tatsu-lab/stanford_alpaca, alpaca_data.json) — 100 sampled prompts used only for timing experiments. GitHub: github.com/alan-turing-institute/prompto (MIT license); PyPI: prompto; docs at alan-turing-institute.github.io/prompto/.
## Findings (numbers and facts, not vibes)
- A.1 (100 prompts, sync vs prompto seconds): OpenAI 126.31 -> 13.92 (9.07x); Gemini 163.49 -> 14.09 (11.60x); Ollama 271.45 -> 268.59 (1.01x — Ollama serializes async requests server-side, disclosed honestly).
- A.2 (300 prompts, 3 endpoints in parallel): sync 558.74 -> prompto 269.06 (2.08x; bottlenecked by Ollama).
- A.3 (OpenAI, 3 models in parallel): GPT-3.5 130.73 -> 14.29 (9.15x); GPT-4 392.21 -> 19.79 (19.82x); GPT-4o 241.24 -> 18.11; overall 705.38 -> 19.30, "approximately 35 times speedup."
- No accuracy/quality metrics — correctly scoped as a throughput library.
- Limitations disclosed: single-run timings on one laptop; generation params deliberately NOT unified across APIs (footgun for comparative studies — temperature/top-p semantics differ); scorers unbatched (future work); no cost tracking at 500 QPM; 2024-vintage model list but architecture model-agnostic.
- Overlap: no LLM-querying infrastructure research in corpus; high synergy with Garrett's routers and the arXiv sweep's hand-rolled per-model screening scripts.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: No football content at all — this is throughput infrastructure for multi-model LLM querying. Relevant only to the GSE research-machine plumbing (arXiv sweep screening, engine-benchmark model comparisons, OmniRoute/OpenRouter adapters).
## Engine-actionable? (yes/no + one-line what)
Yes — install prompto, subclass AsyncAPI for Garrett's routers, replace hand-rolled per-model sweep screening scripts with one JSONL experiment file per wave; acceptance gate: >=5x speedup on 100 prompts x 2 models with zero dropped responses and QPM respected.
