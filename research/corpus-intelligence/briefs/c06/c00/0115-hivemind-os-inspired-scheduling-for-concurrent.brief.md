# arxiv-program/research/2026-09-21/arxiv-deep/0115-hivemind-os-inspired-scheduling-for-concurrent.md
## What it is (1-2 sentences)
Deep read of Agyemang et al. (2026, arXiv:2604.17111v1): HiveMind, a zero-code-change transparent HTTP proxy applying five OS scheduling primitives (admission control, rate-limit tracking, AIMD backpressure + circuit breaker, token budgets, priority queuing with dependency DAG) to concurrent LLM agent workloads, motivated by a real incident where 3 of 11 parallel Claude Code agents died (27% failure rate). Verdict in file: ADAPT — directly applicable to GSE's concurrent-agent infrastructure (Motif/Hermes/Minis lanes, OmniRoute/OpenRouter rate limits, retry storms).
## Key metrics/methods (formulas where given, else "not specified")
- AIMD: c_{t+1} = min(C_max, c_t + α) if ℓ̄ ≤ L_target; max(C_min, c_t·β) on high latency or error (α=β=0.5 defaults; equation reconstructed — uncertain).
- Circuit breaker: open if e/n ≥ τ with n ≥ N (N=20, τ=0.50); half-open after T_cool=10 s with single probe.
- Retry delay: d_k = min(d_max, d_base·2^k + U(0, d_base)), d_base=1 s, d_max=30 s, Retry-After overrides.
- Provider profiles (RPM/TPM/maxC/L_target): Anthropic 50/80K/5/3000ms, OpenAI 60/150K/10/2000ms, Google 60/100K/8/2000ms, Ollama 1000/10M/2/10000ms; token budget: warn at 85%, checkpoint-and-stop at 100% (OOM-killer).
- Priority ordering: priority level > estimated token cost (shortest-job-first) > creation-time FIFO; dependency DAG with cycle detection.
## Data sources named
None — systems paper; evaluation is synthetic-behavioral: mock API server (Anthropic/OpenAI response formats, configurable RPM, error injection), 7 scenarios; real-world validation on Ollama (Qwen_3.5-4B GGUF) and MLX; 174-test suite claimed.
## Findings (numbers and facts, not vibes)
- Failure rates Direct → HiveMind: micro-10 100%→10%, micro-20 100%→10%, micro-50 100%→0%, replay-11 73%→18%, stress 100%→10%, latency-spike 100%→0%; wasted tokens reduced 96–97%.
- Ablation (replay-11): transparent retry is the single most critical primitive (no retry: 63.6% fail); admission-only: 81.8% fail; others "compensated."
- Real-world: Ollama 10/10 both modes, HiveMind 7% faster (28.5 vs 30.5 s); proxy overhead <3 ms/request; MLX 3.9→3.6 s.
- Cost at 10 runs/day: Haiku $0.35→$0.01/day (97%), Sonnet $1.31→$0.05 (96%), Opus $6.55→$0.24 (96%).
- Code: MIT, https://github.com/jayluxferro/hivemind; Python 3.11 asyncio/Uvicorn/Starlette/httpx; also registers as MCP server with 8 tools.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: pure infrastructure — centralized retry/backpressure/token-budget layer for concurrent agent lanes; adjacent to the agent-bus Motif/Hermes/Minis concurrency and the NVIDIA NIM retry chain in the TASK-012 spec.
## Engine-actionable? (yes/no + one-line what)
yes — adapt as the single egress proxy on the Motif VM for all agent API calls (OpenRouter/OmniRoute/NVIDIA NIM profiles, retry schedule, per-agent token ceilings), gated on the 174-test suite passing and measured overhead <5 ms/request.
