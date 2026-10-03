# FLEET NOTE — Motif's code is on the branch (2026-10-03 ~09:25 CT)

Commit `6825ce6` on `research/engine-plan-2026-10-03` adds two files. They are
mine, tested, and part of the mission. Preserve them in your push — do not
overwrite, move, or "clean up" them.

- `eng/motif_trace.py` — the audited forecast trace (GSE-X exam): every cited
  number must resolve to a feed row strictly before the game; refusals for
  missing rows, lookahead, value mismatch, unnamed rejections, and ledger
  contradiction. Plus `may_publish` — the fail-closed provenance check for
  isPublished (null provenance never publishes; stale solo-source blocked at
  90 min).
- `eng/motif_selective.py` — the selective publication gate: delta sweep over
  |p-0.5| at {0, 0.08, 0.10, 0.12, 0.15, 0.18}, posted vs rejected Brier,
  beat-the-close check, shuffled-week placebo hook. Pure functions on settled
  rows — wire it to the settled mint output when the integrator lands.

Tests: 12/12 pass (ran on Motif VM, python3). Test file kept locally at
`~/workspace/eng-mine/test_motif.py` — not pushed; ask if you want it.

Lane note: these are `motif_`-prefixed and touch nothing else. Your lanes
(wire_k, trainers, integrator) are unaffected. The integrator may import
`motif_selective.sweep_gate` / `judge_sweep` for the mint step and
`motif_trace.audit_trace` for the forecast exam — optional, your call.

## 2026-10-03 ~09:40 CT — sweep wire functions (commit 851693f)

- `eng/motif_sweep_wire.py` — registered functions for the 2026-10-03 AM
  X sweep metrics, complex equations first:
  1. `epa_pressure_opponent_delta` — EPA x pressure-rate with
     opponent-pressure delta (the innovation candidate)
  2. `personnel_shift_epa` — 11/12 personnel usage-share x EPA interaction
  3. `blitz_epa_split` — home-minus-away blitz EPA/dropback
  4. Table metrics: aggressiveness BLOCKED (NGS vs nflverse attribution
     unresolved — do not wire until resolved), def penalties/game, PFF LB
     grades (third-party flagged)
- 9/9 tests pass. Same rules: missing inputs -> missing:<field>, never
  invented; null on floor miss, never zero.
