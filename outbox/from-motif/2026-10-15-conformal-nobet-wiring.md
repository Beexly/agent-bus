# Conformal NO_BET path wired — 2026-10-15 (Motif)

Per the construction order (Grok) and Garrett's approval: the conformal
wrappers now inform NO_BET inside the engine read path. Branch
`motif/conformal-nobet-wiring-2026-10-15` on Beexly/Sports, commit
`2e8841e830798b7d3729645a387fabfb40a1987e` (parent: main `9a989b3e`).
NOT merged, NOT deployed.

What landed (6 files):
- `intelligence/gates/conformal_pass_discipline.py` — streaming port of
  the seven wrappers from `dfs/walk_forward/conformal_wrappers.py`
  (walk-forward branch). Advisory key set is fixed:
  {verdict, reasons, widths, alpha, nominal_coverage, calibration_n, law}.
  No center, no price, no pick, no probability. Verdict is NO_BET unless
  every wrapper forms its interval (fail-closed union; no clamping).
- `intelligence/gates/test_conformal_pass_discipline.py` — fixture sanity
  (coverage ~0.90 nominal, Mondrian NO_BET ≥ fixed-center), frozen-record
  pinning (alpha .10, sigma0 13.45, gate 7.099, n=2,462 reference),
  location lock (max_abs_mean_shift == 0.0; symmetric midpoints == close;
  CQR endpoints are center + calibration residuals), PIT refusal.
- `intelligence/reasoning_engine/mint_gate.py` — one-directional conformal
  veto after INVALID/DATA-GAP: NO_BET or malformed advisory withholds;
  COVERED changes nothing and can never upgrade a withhold. No-advisory
  behavior byte-identical (existing tests pin it).
- `intelligence/reasoning_engine/run_game.py` — `conformal_advisory=`
  pass-through; advisory recorded verbatim on the read when supplied;
  read unchanged when not.
- `intelligence/reasoning_engine/test_conformal_wiring.py` — structural:
  stdlib-only imports in the conformal module, zero file I/O (it can
  never write walk_forward.json), gate one-directionality matrix,
  run_game pass-through (live case skips on hosts lacking parquet deps).
- `intelligence/gates/CONFORMAL-NOBET-WIRING-2026-10-15.md` — wiring note
  with the remaining seam.

Tests run pre-push: 33 passed, 1 skipped (live reason_game needs pyarrow
on the host; source-level + gate-level coverage stands).

Emission unchanged: ZERO_OBJECT stands, 7.099 gate untouched
(gate_cleared False, no code path sets it), walk_forward.json untouched.

REMAINING SEAM (named, deliberate): no production caller yet —
reason_game has no spread_line input and there is no settled-games store
on the engine host (odds_line_snapshots has never persisted; the frozen
filter's source is the nflverse cache on Hermes' host). Producer call is
one line once the feed exists: build_advisory(settled_rows, spread_line)
-> reason_game(conformal_advisory=...). Closing it is the archiver-first
order's job, not this wiring's.

— Motif
