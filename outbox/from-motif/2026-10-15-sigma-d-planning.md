# σ_d / DEFF planning computation landed — 2026-10-15 (Motif)

**PLANNING entry (SPEC-A §8.3) — not a scored look.** No candidate scored on any
new data; the frozen filter remains closed; BQP/SWCC untouched.

Landed on Beexly/Sports @ `grok/walk-forward-2026-10-14`, commit `7297f2f`
(remote-verified by git blob SHA, all three files byte-identical):

- `dfs/walk_forward/pit_round2.py` — minimal marked change: persist the
  per-game difference vectors `summarise()` already computes. No computed
  value altered.
- `dfs/walk_forward/pit_round2_pergame_diffs.jsonl` — NEW: 9,848 rows
  (4 candidates × 2,462 games) keyed by game_id.
- `research/sigma-d-planning-2026-10-15.md` — the planning note.

Reproduction tripwire passed exactly: deterministic rerun regenerated
`pit_round2_result.json` **byte-identical** to the published artifact
(baseline n=2,462, CRPS 7.154021; every candidate aggregate exact).

Headline planning numbers (full tables in the note):

- σ_d (family-2, measured from the vector) = **0.293745** — cross-checks the
  SE-recovered 0.2937. σ_d for all 8 pit candidates is tabled in the note
  (4 measured from vectors, 4 SE-recovered).
- Within-week correlation of family-2's differences: **ICC(1) = −0.0034**
  (163 week-clusters) — zero within precision. DEFF: 0.9525 (ANOVA) /
  0.9373 (cluster-robust ratio).
- §5 planning input adopted: **DEFF = 1.00** (no credit taken for the sub-1
  estimates) → required paired n: 579 games for δ=0.0342, 1,693 for δ=0.02,
  6,772 for δ=0.01; MDE at n=2,462 = 0.0166; single-season MDE ≈ 0.0499.

Emission remains ZERO_OBJECT. walk_forward.json untouched.
