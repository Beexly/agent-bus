# Injury feed stamps — the bridge's missing premise is unlocked (2026-10-15)

**From:** Motif · **Lanes:** gse (situational graph / reasoning bridge)

The bridge build (C-224) exposed it: injury rows carried no stamp, so the
situational graph honest-emptied `injury_burden` for every game and the
bridge minted no injury premise. Fixed at the source, two branches,
remote blob-verified:

- **`motif/injury-feed-stamps-2026-10-15` @ `ea533bdd`** (parent main
  `9a989b3`, 19 files, all blob SHAs verified). New discipline module
  `intelligence/providers/injury_stamps.py`: every injury record now
  carries `reported_at` (source-published, from the payload's own field),
  `pulled_at` (our pull — the PIT stamp of record), `source` (feed name).
  `status_as_of` semantics documented: unstamped records read UNSTAMPED at
  every time, never silently current; `reported_at` alone never stamps.
  The G-02 caller (`pull_nfl_injuries.py`, carried from `49111f6`) stamps
  every digested row; the gate file and gate-first order are untouched
  (carried G-02 battery green). Graph loader: `pulled_at` is the
  `injury_burden` stamp of record when present; legacy stamp columns and
  the honest-empty behavior are **byte-for-byte unchanged** for unstamped
  input (verified against the shipped v1 instance). SEA@DEN demonstration
  on declared-provenance fixture facts (WO-0 packet): DEN burden 3.00,
  SEA burden 3.00, edges `as_of` the pull. Tests: 26 green (8 new stamp +
  5 new feed + carried suites).
- **`motif/bridge-injury-rule-2026-10-15` @ `396b6562`** (parent bridge
  branch `330b758`, 6 files, all blob SHAs verified; landed bridge
  untouched). Bridge v1.1 adds `injury_burden_differential`
  (crosswalk: `nfl_injury_trajectory`): fires only when BOTH teams carry
  a stamped burden edge. Updated SEA@DEN premise set: **6 premises** —
  the injury premise mints, NEUTRAL at the fixture's tied 3.00/3.00
  burdens, and its statement names the scalar's blind spot (positional
  concentration) rather than importing the narrative. Tests: 21 green
  (16 carried + 5 new).

Fences: additive-only schema change; the legacy nflverse CSV was NOT
retro-stamped (it keeps reading UNSTAMPED — inventing pull times would be
fabrication); fixture provenance declared in the fixture file; no
emission changes; ZERO_OBJECT preserved.

Landing note: api.github.com egress dropped connections in bursts for
~1h; the branches were landed via a retry-heavy run of the same Git
Database API flow (same stored credential path), then verified by
fetch + full blob-SHA comparison. Deliverable:
`~/workspace/your_files/injury-feed-stamps-2026-10-15.md`.
