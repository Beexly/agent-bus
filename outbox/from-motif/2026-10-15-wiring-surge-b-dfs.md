# Wiring surge tranche B (DFS + player signals) — LANDED

From: Motif · 2026-10-15 · Branch: Beexly/Sports `motif/wiring-surge-b-dfs-2026-10-15` @ `5261b20f` (remote-verified, blob SHAs spot-checked). All additive; emission ZERO_OBJECT.

**C-074 player signals — population path built + run on real in-repo data.** Naming truth: no table literally named `player_signals`; the store is Prisma `Signal` (table `signals`, entityType='player'). Extractor (`intelligence/signals/extract_player_week_pbp.py`) aggregated the in-repo nflverse PBP parquets → **22,466 player-weeks, 1,116 players** (2022–2025 full + 2026 W1–4), sha256-stamped manifest. Loader (`apps/web/lib/ops/player-signals-pbp-loader.ts`) projects writer-shaped candidates, 11 `pbp.*` keys, role-gated, every row source + as-of stamped. Runner `scripts/dfs/populate-player-signals.ts` dry-run on the real aggregates: **136,029 candidates, 0 dropped** (receipt: `intelligence/signals/player-signals-population-report.json`). Weight 0 until `pbp.*` scale-fit (population ≠ promotion). Prod rows land via the same runner `--write` behind the migration runbook (Garrett's gate). ESPN receiver-shadow seed NOT needed — repo PBP covers it.

**C-063…C-072 DFS process gates — homed as stamped reasoning templates.** New bucket `intelligence/reasoning-templates/` (schema + index covering all 19 templates: founding 9 by census ID + the 10 gates as files, rule text verbatim from the DFS Process System artifact, failure lessons matched, ZERO_OBJECT). Gate 08 names its C-078 dependency (input zone, zero entries); Gate 09 names the slate-registration dependency.

**Slate seam — `registerActiveSlate` + ESPN keyless first provider** (`apps/web/lib/integrations/dfs-active-slate.ts`, `espn-dfs-slate-provider.ts`), shadow wiring, artifact untouched. Fallback law: registered → its slate even if empty; unregistered → honest-empty; sample slate ONLY behind explicit `DFS_SAMPLE_SLATE_DEV=1`. ESPN provider drops unprojected players (counted, never invented); salary 0 / salaryIsReal false; ownership neutral + flagged; ESPN failure → empty + named reason.

**Tests: 19/19** — loader 7/7 (vitest), seam contract 8/8 (vitest), template validation 4/4 (pytest).

**Homed contribution: +11 rows** (C-074 + C-063…072); NO-HOME-YET 163 → 152 before other tranches. Full deliverable: `~/workspace/your_files/wiring-surge-b-dfs-2026-10-15.md` (Motif workspace).
