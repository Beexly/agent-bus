# engine/research/2026-09-28/hf-leverage-round2/laneC-platform.md
## What it is (1-2 sentences)
A live-verified (2026-09-28) infrastructure study asking whether the Hugging Face Hub can serve as the agent fleet's data lake, compute/scheduling platform, and MCP tool layer. Every claim was checked against official HF docs or the Hub API the same day.
## Key metrics/methods (formulas where given, else "not specified")
Cost/pricing tables from the official Inference Endpoints pricing doc (per-minute billing; e.g. T4 $0.50/hr, L4 $0.80/hr, A10G $1.00/hr, A100 $2.50/hr); break-even rule of thumb vs ZeroGPU overage ($6.00/GPU-hr): dedicated scale-to-zero T4 wins when daily GPU minutes routinely exceed the PRO quota (~40 min/day). Commit mechanics: `create_commit` atomic, `parent_commit` optimistic concurrency, CommitScheduler for concurrent writers; HF doctrine: "a git repository is not meant to work as a database with a lot of writes."
## Data sources named
Live `GET /api/whoami-v2` on Garrett's credential (Beexly account, `isPro: true`, `canPay: true`, prepaid billing, `orgs: []` — no Beexly org exists); official HF docs (storage-limits, rate-limits, security-tokens, datasets streaming, Gradio MCP guide, spaces-overview/GPUs, Inference Endpoints pricing doc), official `huggingface/*` and `gradio-app/*` GitHub repos; HF official MCP server + `huggingface/skills` HF-MCP agent skill.
## Findings (numbers and facts, not vibes)
- Account: Beexly, PRO, prepaid, can pay; **no org exists** — creating the Beexly org is the prerequisite for fleet-owned repos; token in use is fine-grained ("Aisha", 2026-09-14) with repo read/write + inference + webhook scopes.
- Storage tiers: free = 100 GB private; PRO ($9/mo) = 1 TB private + PAYG $18/TB/mo, up to 10 TB public; dataset repos are git+LFS, <100k files/repo, single file <200 GB recommended (500 GB hard limit).
- Data-lake verdicts: USE for backtest sets, calibration tables, arXiv corpus embeddings (bge-m3 over ~585 papers) — parquet, versioned, read-heavy; LATER (with append-only discipline) for odds snapshots and media blobs; SKIP for live predictions/operational state — Neon stays system of record (Hub has no SQL, no transactions, no row locks).
- Gradio MCP: shipped, real — `demo.launch(mcp_server=True)` exposes every endpoint as an MCP tool at `https://<space>.hf.space/gradio_api/mcp/`; private Spaces work via bearer token. Sharp edge: Gradio `auth=` does NOT protect the MCP endpoint (by design); use private Spaces. ZeroGPU quota: free 5 min/day, PRO ~40 min/day; MCP calls burn the caller's quota.
- Scheduling: Spaces have no native cron; HF Jobs (`create_scheduled_uv_job`, full CRON syntax) is the native mechanism — a fresh container per run, writes results to a dataset repo. Free Spaces sleep after ~2 days idle (15–90s cold start).
- Inference endpoints: scale-to-zero dedicated T4 $0.50/hr (~$365/mo always-on); rule of thumb: stay on ZeroGPU while inside quota, go dedicated endpoint when sustained use exceeds ~40 min/day.
- Composed stack: scheduled Job → parquet → private dataset repo → fleet reads via streaming; utility Spaces expose data/compute as MCP tools.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (pure infrastructure playbook: dataset lake for backtests/calibration/embeddings, MCP tool Spaces, scheduled HF Jobs; no football intelligence content)
## Engine-actionable? (yes/no + one-line what)
Yes — stand up versioned HF dataset repos for backtest sets + calibration tables (with parquet/streaming pattern), create the Beexly org, and pilot one private Gradio Space as an MCP tool; keep hot/operational data in Neon.
