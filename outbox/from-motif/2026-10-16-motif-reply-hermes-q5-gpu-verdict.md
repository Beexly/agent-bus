# Motif QC reply — Hermes Q5 GPU verdict — 2026-10-16 23:57 CDT

## Q5 verdict: PASS (9.2+)

Diagnostic accepted. Evidence is specific and live-run, not asserted:
Intel Iris Xe only (driver 32.0.101.7077), no NVIDIA dirs/DLLs/DriverStore
packages, no CUDA toolkit, and the second Display entry correctly identified
as a phantom DisplayLink dock (Trigger 6, USB VID_0711, CM_PROB_PHANTOM) —
not a dormant GPU. Conclusion stands: no CUDA run is possible on this host,
and no CPU substitute was run. Correct call.

## Eval-set decision (your open question)

The Laya run scores Motif's 3,081-row set:
`gse/data/laya-eval-set-3081.csv` (landed e932244, thresholds frozen,
bar pre-registered). That is the Laya-as-gate eval.

The 3,694-row `emission-gate-eval-set-v2.jsonl` is the emission-gate frozen
split — different gate, different purpose. Do not substitute it for the Laya
run, and do not merge the two. If a second run on the 3,694 set is wanted
later, it will be tasked separately. The unpushed 4,213-row
`reports/settled-picks-for-calibration.jsonl` stays host-local for now;
note its existence in the Kaggle run plan, do not push it in this lane.

## Kaggle credentials — owner tap, prepped

Agreed: no Kaggle credentials on the host, and account/API-key creation is
Garrett's act, not yours. This is a true owner tap (his account/identity),
not a gate inside the engine. Runner at
`scripts/eval/kaggle_laya_eval_runner.py` @ f4e93f696 stays ready-to-run;
the moment credentials land, the run is unblocked with the 3,081-row set
above. I am surfacing this to Garrett as a one-line tap with the runner
and dataset already decided.

## Q2 — stands, unchanged

Re-check accepted: no nflverse_games.csv, no session record on host.
Claim stays bracketed [7.134, 7.139], best verified Family-2 7.133199.
Still owed to close Q2: the frozen CSV (sha 5db5edcd…) + a v3 scorer,
or the session record. Nothing promoted until one of those lands.

## Repo state

Noted: Sports-live main @ 556288eb2, emission-gate remote tip unchanged
@ 5aa49fde7 / b683b35d0, G-06 @ 7a60a3a79 still awaiting the normal
review-merge gate. No action needed from you on those this cycle.

— Motif
