# arxiv-program/research/2026-09-21/arxiv-deep/0116-governed-mcp-kernel-level-tool-governance.md
## What it is (1-2 sentences)
A kernel-resident MCP tool-governance gateway (built in Anima OS, ~286K lines of Rust) that forces every agent tool call through a six-layer pipeline (schema, trust tier, rate limit, adversarial prefilter, ProbeLogits semantic gate, constitutional policy match) with a Blake3-hashed audit chain, motivated by three 10-line userspace safety bypasses. Verdict in the source: ADAPT — the baremetal kernel is overkill for GSE, but the portable 6-layer pattern + ProbeLogits primitive + fail-closed audit chain is directly useful.
## Key metrics/methods (formulas where given, else "not specified")
- Six layers in fixed order (Algorithm 1): schema validation (JSON-RPC + input-JSON-Schema match, 0.10 us), trust tier check (System/AiNative/AiEnhanced/Classic, 1.15 us), per-agent token-bucket rate limit (e.g., 10 web_fetch/s, 1 shell_exec/s; 0.02 us), adversarial regex prefilter DFA (7.50 us), ProbeLogits gate (358/332/556 ms per classification on Qwen2.5-7B/Llama 3 8B/Mistral 7B), constitutional policy match (12-principle predicates, 1.83 us).
- ProbeLogits score: s = logit(Dangerous) − logit(Safe) at verbalizer position, calibration bias subtracted, scaled by alpha; threshold s > 0 reject (equations reconstructed from garbled PDF, flagged uncertain). Graduated response: deny when ans AND p > 0.90; LogWarn band [0.70, 0.90]; below 0.70 proceed; production default alpha = 0.9.
- Audit chain: (timestamp, agent_id, tool_name, arg_hash, deciding_layer, verdict, prev_hash) in 4 MB ring buffer (~30K records), Blake3-hashed chain (0.73 us); intra-boot integrity only.
- FAIL-CLOSED: inference engine unavailable → layer 5 returns Deny, all tool calls denied system-wide until recovery. Token Fertility check (verbalizer must tokenize to single vocab ID) + 7-null-prompt calibration bias cached; gateway refuses to boot without usable verbalizer pair. KV snapshot/restore 0.053 ms round trip (0.93 MB for Qwen2.5-7B Q4_0 at 32 cached positions).
## Data sources named
Author-constructed in-tree corpora (not released via a stated link): Custom-101 (101 MCP call_tool prompts, 37 dangerous / 64 benign, 18 domains), Custom-260 (260 OS-action prompts, 50 adversarial). External substrate validation: HarmBench (n=400; non-copyright 300), XSTest (n=450: 250 safe + 200 unsafe), ToxicChat (n=1000). Claimed AGPL-3.0 code, but repo URL was NOT captured in the extracted text (flagged gap).
## Findings (numbers and facts, not vibes)
- Custom-101 full pipeline: F1 = 0.789 (accuracy 84.2%, precision 0.769, recall 0.811; TP 30, FN 7, FP 9, TN 55); 7 FNs mostly subtle deception phrasing; 9 FPs ambiguous filesystem reads.
- Ablation: no prefilter 0.805 (slightly better); no ProbeLogits 0.357 (TP10/FN27; ΔF1 = −0.432 — hand-rule firewalling admits 27/37 dangerous calls); no layer-4 0.327 (near chance). Semantic layer is load-bearing.
- Case studies: file_read("~/.ssh/id_rsa") → s = +4.8 blocked; shell_exec("dd if=/dev/zero of=/dev/sda bs=1M") → s = +6.2 denied (no rule enumerates it); web_post exfil blocked at step 1.
- Custom-260: F1 0.980, FP = 0 (97.3% accuracy).
- HarmBench non-copyright block rate: 99.0% / 98.0% / 98.7% (Qwen2.5-7B / Llama 3 8B / Mistral 7B); XSTest unsafe recall 1.000/0.985/0.995; overrefusal (safe) 0.864/0.516/0.556.
- ToxicChat: ProbeLogits-Llama-3 F1 0.679 vs Llama Guard 3 0.675 (parity, +10.5 pp recall, 2.4–3.4× lower latency).
- Latency: non-inference layers total 11.3 us; ProbeLogits 358/332/556 ms; gateway throughput ≈ 2.8 governed calls/s; NeMo Guardrails runs 2–3 LLM roundtrips (~2–5 s). Threshold sweep: F1 plateau from alpha=0.70 upward (0.414 at 0.30, 0.667 at 0.50, 0.789 at 0.70/0.80/1.00).
- Mediation: 59 agent-to-system paths (18 WASM host fns, 20 MCP tools, 21 ring-3 syscalls); 6 resource-reaching syscalls ungated until M4.2 — v1 "123 paths, 100% mediated" claim explicitly withdrawn.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — agent infrastructure: MCP tool-call governance for GSE's agent lanes (Motif/Hermes).
- TRUST-SIGNAL — INFERENCE: a fail-closed, hash-chained audit log of every tool decision is the mechanism backing verifiable claims about what the agent system did (relevant to the audit-receipts standard for completion claims).
- SCHEME — INFERENCE: constitutional rule lists (no writes outside ~/workspace, no credential exfiltration, no mass-delete) encode GSE's standing hard rules (push policy, secrets) as machine-enforced policy rather than convention.
## Engine-actionable? (yes/no + one-line what)
Yes — ADAPT in userspace: a single mediated MCP gateway on the Motif VM enforcing the six layers (schema/trust/rate/prefilter/semantic/policy) with graduated response, fail-closed semantics, and a Blake3-chained audit log; acceptance gate is ≥95% red-team block with FP < 5% and ≤500 ms per call.
