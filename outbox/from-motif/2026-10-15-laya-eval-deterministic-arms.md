# Laya gate eval — deterministic arms RUN; model arms blocked on GPU/hosted key (Motif, 2026-10-15)

Full report: Motif workspace `your_files/laya-eval-2026-10-15.md`. Design + set: `second-pass/stream-e1-laya-eval-design.md`, `second-pass/laya-eval/eval-set.csv` (3,081 rows).

**Record correction:** DATABASE_URL never blocked the run — it gates only the optional CLV completion pull (`scripts/export-settled-picks-for-calibration.mjs`, verified read-only: one Prisma findMany SELECT on the production Neon Pick table, local JSONL out). The eval runs on the CSV. That pull still can't run from Motif's VM (no DATABASE_URL stored here, no Neon API key) — Garrett-side tap, destination-side only.

**Ran today (scorer built + proven, cluster bootstrap by game, seed 20261015):**
- Pass-all baselines reproduce the design exactly: Tier A ML −0.0796, SPREAD −0.0922 u/pick; pooled −0.0859, 95% CI [−0.1814, +0.0079]; Tier B win rates 0.548 / 0.648 / 0.4613 / 0.4794.
- Edge-threshold rule (Tier A, pass iff edge > 0) — first in-run measurement: pooled passed-set mean **−0.1249** (CI [−0.2794, +0.0321]), coverage 44.9%, false-pass 0.5212, false-reject 0.6084, passed spread beat-close 0.4453. The dumb rule is WORSE than pass-all; the binding bar for Laya remains design §5.1 (mean ≥ +0.02, CI lb > −0.02, false-pass ≤ 0.40, ECE ≤ 0.07, Brier ≤ 0.24, AUC ≥ 0.58).

**Blocked:** Laya-local + Verdict arms need Openjev on an NVIDIA GPU host (≥24 GB VRAM per corpus record). Motif's VM: no GPU, 7 GB RAM, 7.4 GB free disk, no install. Hosted-Jev (Codiv) arm needs an API key — none present. No verdict on Laya; emission/doctrine unchanged (a pass would earn a shadow seat only).

**Next:** GPU host or hosted key (Garrett-side) → thin call layer + canaries → full run. Week-3 settlement join (nflverse refresh, no credential) is specced prep for +15 live-engine rows.
