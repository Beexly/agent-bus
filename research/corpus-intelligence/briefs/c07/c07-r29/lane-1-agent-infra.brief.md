# research/2026-09-24/brev-skills-dossier/lane-1-agent-infra.md
## What it is (1-2 sentences)
A read-only deep-dive (2026-09-24) on five NVIDIA Brev/skills infrastructure plays — nemo-rl-session-memory, aiq-deploy/aiq-research, Dynamo family, NemoClaw, rag-blueprint — ranked for the Kit revenue engine and GSE by $0-first, autonomous-second.

## Key metrics/methods (formulas where given, else "not specified")
- Cost baseline: NVIDIA Build hosted endpoints (integrate.api.nvidia.com) — free dev tier, no credit card, ~40 RPM per key (community baseline, traffic-dependent); dev/eval only (production needs NVIDIA AI Enterprise). Brev = per-hour VM billing (official GPU rates UNVERIFIED).
- nemo-rl-session-memory: repo-local `session/<timestamp>/` with 4 files — `session_state.md`, `timeline.md`, `files.md`, `handoff.md`; checkpoint periodically, resume from latest three.
- Dynamo router modes: round-robin, kv (KV-cache-aware), least-loaded, device-aware-weighted, direct, random; single-GPU runs (8B-class on 1× L40S); self-hosted 70B LLM = 2× H100 NVL or 4× A100.
- RAG Blueprint: NV-Ingest + Elasticsearch (default since 2.6.0) + SeaweedFS + NeMo Guardrails + Agentic RAG (2.6.0); default LLM nvidia/nemotron-3-super-120b-a12b; CPU-light hosted-endpoint tier exists.
- NemoClaw: deny-by-default network policy (policy.yaml declares every allowed host/port/verb/binary); OpenShell sandboxes; sizing 8 vCPU / 16 GB RAM / 80 GB disk, GPU none; third-party claim ~$0.04/hr → ~$29/mo at 24/7 (UNVERIFIED).

## Data sources named
NVIDIA Build dev forums, github.com/NVIDIA/skills, github.com/NVIDIA-AI-Blueprints (aiq, rag), github.com/ai-dynamo/dynamo, github.com/NVIDIA/NemoClaw, developer.nvidia.com blogs, nim-deploy cloud guides, community Brev launchables (ansjindal, mdrxy, mcvelasquez45), pyfagorass/bookofspells, practicalswan/agent-skills, Tavily (free tier search; quota UNVERIFIED).

## Findings (numbers and facts, not vibes)
- Ranked verdict ($0-first, autonomous-second): (1) nemo-rl-session-memory — $0, no infra, adopt as checkpoint convention for kit-dm-watcher/Hermes handoffs/Brev long jobs; (2) NemoClaw Brev launchable — cheapest always-on agent, permanent policy-gated home for kit-dm-watcher (draft-never-send enforced structurally by deny-by-default network policy) and overnight GSE draft ops; (3) rag-blueprint — Kit AI Receptionist KB backend (guardrailed, cited) + GSE corpus-QA over the 750-paper arXiv corpus + docs/research/ (CPU-light tier first; GPU only for bulk ingestion, then off); (4) aiq-deploy/aiq-research — autonomous deep-research backend (sign-shop prospecting; arXiv/NGS literature sweeps), CPU-only on Brev; (5) Dynamo family — no current job; honest near-term use = free self-hosted inference server for batch model work. Do not deploy "for later."
- ⚠️ NAME COLLISION flagged: NVIDIA's "Hermes" (Hermes Agent, get-hermes.ai, one of NemoClaw's three supported agents) is NOT Garrett's Hermes (Minis-app builder) — same name, unrelated software.
- All skills are Apache-2.0 / CC-BY open source; nothing in the lane invents pricing (UNVERIFIED items marked).
- RAG Blueprint 2.6.0 ships published RAGAS accuracy benchmarks + rag-eval/rag-perf skills; B200 unsupported for image captioning/guardrails/VLM inference/Nemotron Parse.
- NemoClaw self-evolving angle: agents "learn from team workflows, create reusable skills" — upside, not the buy reason.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] NemoClaw's deny-by-default network policy as structural enforcement of hard rules (draft-never-send for the kit watcher; draft-never-post for signal-desk) — policy as code, not convention.
- [TRUST-SIGNAL] rag-blueprint's guardrailed, cited RAG as the enforcement mechanism for the Kit AI Receptionist's "answers only from the per-client KB, never invents prices/hours/policies" spec.
- [OTHER] nemo-rl-session-memory four-file checkpoint convention as resumability discipline for long jobs and cron watchers.
- [OTHER] Dynamo KV-aware routing relevance point: only when repeated-prefix batch workloads (calibration prompt packs, HR-factors prompt pack) actually run against a local model.
- [OTHER] RAG over the arXiv/NGS corpora for calibration literature sweeps ("which papers support this estimator choice?").

## Engine-actionable? (yes/no + one-line what)
Yes — rag-blueprint's CPU-light tier is the recommended cited corpus-QA engine over docs/research/ + arXiv corpus, and the session-memory checkpoint convention should be adopted for long-running engine jobs and the DM watcher (INFERENCE: both are infra plays, not engine-signal plays).
