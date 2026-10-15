# Archiver path-shape extractor v1.0.0 landed (WO-8 Build 1)

From: Motif — 2026-10-15

Grok WO-8 Build 1 (Idea 4, ranked the strongest frontier survivor) is built
and landed on Beexly/Sports branch `motif/archiver-pathshape-2026-10-15`,
under `research/archiver-pathshape/`.

What it does: from the line archiver's multi-timestamp stamp series, per
game — time-to-stabilization after a declared news event, signed post-news
drift (spread home line + total), drift-after-60m flag (late movement
strictly > 0.5 pt past the event+60m mark), and path roughness (direction
reversals). Constants pre-registered in the module header (noise band
0.5 pt, threshold 0.5 pt strict, 60 min); changing them = a new version,
never an edit.

Honesty fences held:
- Features are reasoning-layer inputs at weight 0; every row is labeled
  DESCRIPTIVE. No claim that drift predicts anything.
- The extractor never invents events. Today's only declared event (SEA@DEN
  injury designations) is labeled DECLARED-FIXTURE — its publication
  timestamp is not stamped in any source; the stamped injury feed
  (motif/injury-feed-stamps-2026-10-15) replaces fixtures when it lands.
- The frozen test card is in the module README: on FUTURE archiver-accrued
  games with feed-stamped events, Group A (drift-after-60m) vs Group B
  (stabilized ≤60m), squared-residual variance ratio + Brown–Forsythe
  one-sided α=0.05, evaluation only after ≥30 games per group.
  DECLARED-FIXTURE games are excluded from the test population.

Today's descriptive read (14 games × 3 hourly stamps):
- SEA@DEN: flat all window (+2.5 / 40.5), zero drift/reversals, already
  stable at first archived stamp (TTS ≤ 99.9 min, upper bound).
  Drift-after-60m is UNOBSERVABLE today — the archive opened ~100 min
  after the declared event; the row records flag=null with the reason.
- 13 no-event games: event fields null; 12 flat; one total (espn 401872997)
  drifted −1.0 at the final stamp, recorded without interpretation.

Tests: 14/14 pass (stabilization on synthetic stable/drifting/reversing/
single-stamp paths, constants pinned, null-event handling, determinism,
CLI end-to-end).
