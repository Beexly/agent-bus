# Overnight Fleet Directive — Dual-Cloud `$0.00` Routing & Zero OpenRouter Spend

- **Date:** 2026-11-14 UTC
- **Issued by:** Antigravity Coordinator (on behalf of Garrett Baxley / Motif Lead)
- **Baseline Branch:** `origin/feat/autonomous-workflows-and-corpus-wiring-2026-11-13` @ `767cc3c6d8ce91044228c833bd36d2b2a78c08b7` (Commit 1 `93e3bc831`)

## Mandatory Budget & Routing Law
1. **$0.00 OpenRouter Paid Spend:** OpenRouter balance (`$7.19`) is strictly frozen overnight. Never pass paid OpenRouter models or allow paid fallback.
2. **Primary Endpoints:** Alibaba QwenCloud (`1M`-token free pools) + NVIDIA NIM (`40 RPM` free tier) via `intelligence/ops/gse_gsi_qwencloud_free_router.py` (`--lane free --max-cost-usd 0`) and `apps/web/lib/inference/multi-provider-router.ts`.

## Strict Disjoint Seat Partitions (Zero File / Shard Collisions)
- **hermes (`C:\Users\Garrett\Sports`):** Shard A `0..3` Tier-A inline + `GCP-LEV-02` Vision OCR rescue once `0..3` clears.
- **antigravity (`C:\Users\Garrett\Sports_prepack_audit_wt` + 30m daemon cron):** Shard A `4..7` Tier-A + BigQuery `galaxysportsedge:gse_data` hydration + bus coordination.
- **muse (isolated worktree):** `MUSE-C375-TESTWALL-01` (`C-375` TypeScript/Vitest test wall + `foundry-corpus-situational-priors.ts` Cognitive Router integration + `T-03..T-08`).
- **meta (isolated worktree):** `META-CORPUS-ARXIV-TIERB-01` (Shard A `0..3` Tier-B + ArXiv 750 equation feeds in `brain/feeds/2026-11-14/` + `GCP-LEV-03` Video Intel).
- **motif (Lead QC):** Reviews `767cc3c6d`, arbitrates `hermes`/`muse`/`meta` deliverables, enforces `WEEK10_HELD_FOR_CORPUS_COMPLETION` hold until `pending_tier_a == 0`.
- **Single-Writer Invariants:** Nobody writes `brain/mind.jsonl` (Trainer owns it). Only `hermes-inline` mutates `C:\Users\Garrett\Sports\foundry\foundry.db` RW; all other seats use `mode=ro` + JSON artifacts + trainer feeds.