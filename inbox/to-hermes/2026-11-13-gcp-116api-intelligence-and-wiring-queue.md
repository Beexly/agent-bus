# DOCTRINE REMINDER + QUEUE HANDOFF (2026-11-13): FEED INTELLIGENCE, REASONING & WIRING FIRST (`GCP-LEV-01..06`)

**To:** `hermes` (and all fleet seats: `motif`, `orca`, `hermes`)  
**From:** `motif`  
**Active Mission Directive (Garrett — HARD):**
> *"we are NOT aiming to beat the book right now.... we are FEEDING INTELLIGENCE AND REASONING AND WIRING THEM ALL"*

## 1. Live Status Acknowledged
- **Hermes Tier-A Shard A Inline Extraction:** Verified Kochenderfer commit `415a502df` on `origin/feat/hermes-research-wiring-2026-11-11` and live `foundry.db` (`?mode=ro`): `84+` `COMPLETE`, `726+` primitives, `157+` reasoning traces. Keep running Tier-A Shard A `PENDING` books uninterrupted until drained.
- **4-VM GCP Shard B Swarm (`gse-foundry-gcp-01..04`):** Running continuously on `e2-standard-8` (`CPUS_ALL_REGIONS 32/32`) with local 4-branch unpacker mirror active (`2,859+` unique flat `.md` artifacts / `2,917+` branch blobs).
- **Motif Active Sprint (Running In Parallel Without Touching Your Workspace):**
  1. Hardening `gs://galaxysportsedge-gse-pages` (`public_access_prevention=enforced`).
  2. Rescuing the `5` local Tier-A `INSUFFICIENT_OCR` books (`Dixon & Coles 1997`, `Tolman 1932`, `Daly 1921`, `Hull 1943`, `James 1890`) via Always-Free Cloud Vision `DOCUMENT_TEXT_DETECTION` (`<= 120` pages = `$0.00`) into `docs/engine/research/2026-11-13/ocr_rescue/`.
  3. Building `intelligence/foundry_bridge/sovereign_to_cognitive_router_wiring.py` to wire all `726+` sovereign primitives + `2,859+` Shard B extractions across all `6` situational families and `288`-bit router indices (`|delta_log_odds| <= 0.35`, zero NaNs).
  4. Hydrating `5` live BigQuery tables in `galaxysportsedge:gse_data` (`10 GiB` storage + `1 TiB/mo` query Always Free = `$0.00`).
  5. Emitting trainer-ready Mind feed entries under `brain/feeds/2026-11-13/trainer_feed.jsonl` (`0` direct writes to `brain/mind.jsonl`).

## 2. Post-Shard-A Queued Backlog (`GCP-LEV-01..06` — Matched to `docs/ops/AGENT_LEDGER.md`)

| Queue ID | Scope & Free / Credit Surface | Intelligence & Wiring Deliverable |
|---|---|---|
| `GCP-LEV-01` | Cloud Vision (`1,000` free pages/mo) + Storage Batch Operations | Scale OCR rescue across all `45` `INSUFFICIENT_OCR` PDFs (`41` VM + `4` local) via `gs://galaxysportsedge-gse-pages/pages/` into sovereign primitives + reasoning traces. |
| `GCP-LEV-02` | Video Intelligence (`1,000` free min/mo) + `gemini-omni-1.2-flash` + TTS | Shot-change + text segmentation of the `12` Vault All-22 `.mp4` films wired directly into `intelligence/coaching/*`. |
| `GCP-LEV-03` | Keyless ADC Vertex AI Batch + Context Caching (`$103.11` GCP credit + `$100` Dec 6) + Post-Shard-B `L4` GPU | Shift remaining `PENDING` Foundry corpus extraction onto `Gemini 3.8 Flash` Batch (`$0.375/1M` input / `$0.0375/1M` cached) & `Gemini 4 Hydrogen` Batch (`$0.75/1M` / `$0.0375/1M` cache read, `$0` cache write pre-2027-01-12); post-Shard-B stop 4 CPUs and burst on `1x NVIDIA L4`. |
| `GCP-LEV-04` | BigQuery `galaxysportsedge:gse_data` (`10 GiB` storage + `1 TiB/mo` query free) | Continuously stream settled picks, OOF bins, FTN/nflverse PBP tendencies, sovereign primitives, traces, and Shard B extractions into `gse_data`. |
| `GCP-LEV-05` | Cloud Run Jobs + Scheduler + Workflows (`2M` req / `360K` GB-s / `180K` vCPU-s free) + Secret Manager | Containerize `scripts/ops/run_permanent_sequenced_weekly_pipeline.py --week auto` (`us-central1-docker.pkg.dev/galaxysportsedge/gse`) for automatic Tue/Wed-Fri/Sun-T-85m roster, injury, weather, and Mind wiring + in-GCP watchdog (`C-376`). |
| `GCP-LEV-06` | Enterprise Knowledge Graph + Cloud Natural Language (`5,000` units/mo free) + Search Grounding (`5,000` queries/mo free) | Wire canonical player/team/venue entity resolution, coach-presser sentiment deltas, and 4-branch Shard B mirror outputs into trainer-ready Mind feeds and the `288`-bit cognitive router. |
