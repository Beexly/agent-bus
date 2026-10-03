# research/2026-09-24/brev-skills-dossier/lane-3-data-rag-training.md
## What it is (1-2 sentences)
Research dossier (2026-09-24) on the Brev/NVIDIA skill catalog's DATA/RAG/TRAINING lane: nine skill/model families evaluated for deployment on Garrett's Brev GPU box, each scored for GSE (sports engine) fit vs Revenue Engine fit, with install commands, GPU requirements, cost posture, and open cost questions.
## Key metrics/methods (formulas where given, else "not specified")
- RAGAS metrics via rag-eval: faithfulness, answer relevancy, context precision/recall.
- NV-Tesseract DARR mode formula: `alpha*direct + (1-alpha)*kNN` blending direct forecast with kNN retrieval against historical windows; fine-tune defaults: 5 epochs, batch 8, lr 1e-4 (forecasting head only, encoder frozen).
- cuDF: 10-50x groupby speedups over pandas (stated estimate, INFERENCE from docs claims).
- rag-perf presets: quick/standard/comprehensive/synthetic; reports TTFT, E2E latency, token/request throughput, error rate.
## Data sources named
NVIDIA/skills GitHub catalog, RAPIDS docs, NeMo Retriever docs/SKILL.md, NVIDIA-AI-Blueprints/rag, nvidia-tao/tao-skill-bank, NVIDIA/NV-Tesseract (HF nvidia/nv-tesseract-forecasting), NVIDIA/earth2studio, nvidia-nemo/nemotron, NVIDIA-NeMo/DataDesigner, nv-ingest, HF model card for Nemotron Parse 2.0, build.nvidia.com NIM endpoints.
## Findings (numbers and facts, not vibes)
- NV-Tesseract (transformer time-series forecasting, MOMENT-1-large backbone): Apache-2.0 → can live in the PRODUCTION pick path (unlike TimesFM-3, which is non-commercial/benchmark-only); 1x CPU minimum, 1x NVIDIA GPU >=8GB VRAM for fine-tuning; weights public on HF, no auth needed. Jobs: fine-tune on closing-line movement, team EPA/game rolling windows, HR/game league rates as second forecaster; DARR mode retrieves similar historical windows (e.g. games with this wind/temp/totals profile) — conceptually adjacent to the engine's CUSUM regime flags; interpretability bundle (lag×horizon attribution).
- Earth2Studio (AI weather/climate): open-source Apache-2.0, GFS/ERA5 public data, CPU-only data-fetch viable, FourCastNet3 inference on modest GPU. Jobs: build 2015-2026 historical weather-features table for NFL/MLB venues (the engine currently lacks this table); feed into props/hr-factors.ts and NFL totals path; deterministic forecast as game-day second opinion vs API feeds.
- accelerated-computing-cudf: Apache-2.0, Volta+ (>=7.0), CUDA 11.2+/12+, Python 3.10+; `cudf.pandas` zero-code-change acceleration of nflverse + odds-API ETL (parquet I/O, joins, groupby); backtest ledger crunching (3,411+ picks growing daily, per-season CV splits).
- nemo-retriever 26.8.1: extract→embed→LanceDB in one CLI over PDFs/images/Office/HTML/text/audio/video; OCR/embed stages can route to hosted NIM endpoints on CPU; embedding via nvidia/llama-nemotron-embed-1b-v2. Job: index docs/research/<date>/ (750-paper arXiv ledger notes, benchmark dossiers) for one-CLI research queries; ingest is one-shot, querying LanceDB is CPU-trivial.
- rag-eval: quality gate for the corpus RAG — ~50 known-answer questions in train.json, run before/after re-indexing (judge via free NIM tier; matches Garrett's measurement-first discipline, prereg-eval.ts exists).
- data-designer: declarative synthetic-data pipeline (YAML DAG), SFT/DPO templates; synthetic client conversations for Kit receptionist regression tests; DPO pairs for a GSE voice model. Caveat stated: synthetic data for content, NEVER for faking backtest data / never train the pick engine on synthetic game outcomes.
- nemotron-customize: LoRA/PEFT on 8B-class fits single 24GB+ card; RLHF/GRPO is the expensive end; end-state = fine-tuned Kit receptionist + @GalaxySportsHQ content voice model; do NOT route pick probabilities through an LLM (calibration lane stays in TypeScript/Python).
- cufolio: GPU Mean-CVaR/Mean-Variance portfolio optimizer via cuOpt; pattern theft for bankroll/Kelly staking optimization (pick ledger as return series, CVaR downside control, backtest vs flat-staking).
- Nemotron Parse 2.0 (HF, Aug 2026, <1B params): chart-to-table parsing inside nemo-retriever ingest.
- cupynumeric: NumPy on multi-node multi-GPU for Monte-Carlo simulation scale-up (parked until profiling demands).
- physicsnemo: no fit, skip. rag-perf: only if the RAG becomes a hosted service with latency SLAs.
- Open cost questions (all UNVERIFIED): Brev per-GPU-hour pricing/free credits (check launchable dashboard), Lepton cloud backend pricing, per-token cost on paid inference endpoints.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infrastructure/tooling dossier for the engine's data and ML pipeline — no game/scheme intelligence. Relevant to engine architecture: Apache-2.0 NV-Tesseract as the commercially-licensable time-series forecaster for totals/line-movement; Earth2Studio weather-features table (2015-2026) for totals and HR factors; cudf for backtest ETL scale (3,411+ picks); corpus RAG for research-query velocity.
## Engine-actionable? (yes/no + one-line what)
Yes — NV-Tesseract (Apache-2.0 time-series forecasting on closing lines/EPA series) and Earth2Studio (historical weather-features table for NFL/MLB venues) are the top-2 ranked build targets with install commands and cost posture documented.
