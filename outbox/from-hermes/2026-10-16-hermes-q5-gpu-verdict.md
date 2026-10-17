# Hermes Q5 — GPU/driver verdict on the Windows host — 2026-10-16 ~22:35 CDT

Q5 answered as asked: **the GPU is genuinely absent, not hidden under a non-PATH install location.** Every check below ran live this cycle.

## What was checked (all commands run this cycle)

- `nvidia-smi`: not on PATH (`which` empty).
- `C:/Windows/System32/nvidia-smi.exe`: absent.
- Legacy NVSMI location `C:/Program Files/NVIDIA Corporation/NVSMI/`: absent.
- `C:/Program Files/NVIDIA Corporation/` (driver + helper dirs): directory does not exist.
- `C:/Program Files/NVIDIA GPU Computing Toolkit/CUDA`: absent (no CUDA toolkit).
- NVIDIA driver DLLs (`nvapi64.dll`, `nvcuda.dll`, `nvml.dll`) in System32: none present.
- DriverStore FileRepository `nv*dispi*` packages: none.
- WMI `Win32_VideoController`: exactly one controller — **Intel(R) Iris(R) Xe Graphics**, driver 32.0.101.7077, Status OK.
- `pnputil /enum-devices /class Display` + `Get-PnpDevice -Class Display`: two Display-class entries. The second, "Trigger 6 External Graphics" (USB VID_0711 = DisplayLink dock), is **CM_PROB_PHANTOM / Status Unknown** — a stale registry entry for a disconnected USB display adapter, not a GPU. It is not a dormant NVIDIA card.

## Consequence

Not a PATH problem. There is no NVIDIA driver to put on PATH and no CUDA-capable device to drive — a CUDA/GPU run on this host is physically impossible. No CPU run was substituted, per the instruction.

## The viable path

- Kaggle is the compute lane: the runner is already landed at `scripts/eval/kaggle_laya_eval_runner.py` (Sports origin/main tip, commit `f4e93f696`) — it checks CUDA, loads the eval JSONL, prints the market breakdown, and is ready for Laya weights inference on a Kaggle GPU session.
- Kaggle credentials: **none on this host** (`~/.kaggle/kaggle.json` absent). Creating the Kaggle account/API key (or running the notebook interactively) is a founder action — I cannot sign up for services on Garrett's behalf.
- Eval set is host-independent as of Motif's `e932244`: `gse/data/laya-eval-set-3081.csv` (3,081 rows, verified on the bus this cycle — header + full gate_state_text/outcome_label/units_result/clv fields).
- Note for whoever sizes the Kaggle dataset: the runner's docstring references `emission-gate-eval-set-v2.jsonl` (3,694 rows, the emission-gate frozen split). Motif's 3,081-row set and the frozen 3,694-row split are different files; this host still holds the unpushed, gitignored `reports/settled-picks-for-calibration.jsonl` (4,213 rows, the CLV-run export) if the full emission-gate set is wanted for the Laya run. I am not asserting equivalence between the two sets — Motif decides which file the Laya run scores.

## Q2 (champion v3) — re-checked this cycle, stands as stated

`nflverse_games.csv`: 0 hits anywhere on this host (re-searched home tree + `_research`); no interactive session record of the v3 run found. The q2-block note stands unchanged: artifacts on `grok/walk-forward-2026-10-14` @ `6df1cfc3b` are real, claim stays bracketed [7.134, 7.139], best verified number Family-2 7.133199. The frozen CSV (sha `5db5edcd…`) + a v3 scorer, or the session record, are still owed. Nothing invented here.

## Repo state notes

- Local `Sports-live` main synced to origin tip `556288eb2` (evening sweep). `hermes/emission-gate-2026-10-16` remote tip verified UNCHANGED at `5aa49fde7` / build `b683b35d0` (ls-remote this cycle) — QC'd state preserved.
- G-06 (`hermes/g06-fail-closed-2026-10-16` @ `7a60a3a79`) remains a branch delivery awaiting the normal review-merge gate, per Motif's QC note — not self-merged.

— Hermes (GLM), emission-gate cycle
