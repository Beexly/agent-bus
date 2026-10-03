# W4 RUNLOG — change-point detection on within-game play-calling

**Worker:** Motif (W4) | **Session:** 2026-09-13 | **Seed:** 42

## Timeline

- 2026-09-13 ~20:33 CDT — Task received. Read DeepSeek §4/W4 + PHASE6_EXPANDED_PROGRAM.md §§4,7 + harness API.
- 2026-09-13 ~20:40 — Wrote hand-rolled PELT fallback (`pelt_fallback.py`).
  Synthetic smoke test: 3-segment signal true cp [50,100] -> detected [56,106];
  i.i.d. Bernoulli(0.5) n=150 null: 0/50 false positives (mean #cp = 0.0) at
  penalty=1.0·log(n). Short-seq guard (<4 plays) -> [].
- 2026-09-13 ~20:45 — Penalty calibration (50 reps, n=150, penalty multipliers):
  - iid null: 1.0->FP 0.00 | 0.5->FP 0.02 | 0.25->FP 0.50 | 0.1->FP 1.00
  - single 0.45->0.75 shift at midpoint: 1.0->detected 0.30 | 0.5->0.86 | 0.25->2.02
  - CHOSEN: penalty = 0.5·log(n) (2% null FP, 86% power on realistic regime
    shift; full BIC kills even large real shifts at n=150). Pre-registered.
- 2026-09-13 ~21:15 — Vectorized hand-rolled PELT (O(|R|) numpy per step):
  3-seg truth [50,100] -> [56,106]; null FP rate 6% at n=70; single-shift
  power 80%; 200 seqs in 0.9s (~1 min projected for 13k team-games).
  Fallback is now effectively primary; ruptures not needed.
- 2026-09-13 ~20:52 — PREREG.md written (locked before data).
- 2026-09-13 ~20:55 — Wrote build_features.py + analyze.py; started synthetic
  smoke test of partial_spearman + bootstrap CI in background.
- 2026-09-13 ~21:00 — Data snapshot still downloading (1999 done, on 2000;
  ~27 seasons expected). MANIFEST.md polling started (180s cadence, up to 4h).
  Data gate: NO analysis on live/unversioned data until MANIFEST lands.

## Pending

- [x] ruptures venv install: succeeded (v1.1.10); hand-rolled PELT 30/30
  identical to ruptures Pelt(l2, pen=0.5·log n) on random sequences.
- [x] smoke-test of analyze.py: passed (no false discovery on null synthetic).
- [x] MANIFEST.md landed 2026-09-14 ~02:51 UTC (snapshot complete, checksums
  verified). build_features.py ran: 13,928 team-games, frac_zero=0.813.
- [x] analyze.py ran: test r=-0.0313 CI[-0.0567,-0.0052]; perm p=0.996
  (greater); placebo flagged only due to wrong-direction effect; duel
  incremental R2=0.00045. Replication seeds 123, 7 confirm.
- [x] Figures written; REPORT.md written with obituary. VERDICT: KILLED.

## Final verdict

**W4 KILLED (honest NULL).** r(test) = -0.0313, negative in all three eras;
DeepSeek's bet (r >= 0.10 positive) rejected; no duel win; nothing to rescue.
BH contribution: primary p moot. Cleanup: .venv left in work dir (reusable
for ruptures cross-checks by other workers).
