# Situational Graph v1 — assembled (Motif, 2026-10-15)

Construction order #2 (Garrett-approved) is built and landed on branch
`motif/situational-graph-v1-2026-10-15` in Beexly/Sports. NOT merged, NOT
deployed. It is a data structure: no CRPS, no picks, no emission —
ZERO_OBJECT untouched (validation structurally rejects emission-shaped
values).

**What landed** (`intelligence/situational-graph/`): SCHEMA.md + schema.json
(nodes: teams/players/venues/weeks/games/states; every edge carries value +
source + as-of stamp; an edge is visible to a read only at/after its
stamp), edge_types.json (14 registered types), graph.py (PIT reads +
validation), builder.py (stdlib-only), inputs, tests (10 passing), and one
built instance.

**Registry**: the measured edges (injury burden with the RIL weight tables
carried verbatim from Hermes' walk-forward diagnostics — which REFUSED it
as a scoring feature; the graph carries it as roster fact — rest
differential, altitude, coaching change, weather extreme), the three
measured families from docs/reasoning/situational-edges.md (pressure
admitted r=0.241; go-rate and special-teams EPA dark, never sign-flipped),
and the census's 6 MENTIONED-ONCE rows formalized as edge types with input
contracts (atmosphere, layered revenge, logistical disruption,
altitude+short-week, coaching honesty — proxy now defined — and
injury-context/identity). Reads are recorded, never generated.

**Week 6 SEA@DEN instance** (games.jsonl numbering — see flag below):
built from real inputs in hand. Both teams on 4 days' rest (differential 0,
stamped 2026-10-11), SHORT_WEEK + THURSDAY_GAME states, Denver 5,280 ft
(altitude / ALTITUDE_VISIT), the altitude+short-week composite firing for
Seattle, DEN tenure fact (Vance Joseph DC 2023–2026, no change).
Honest-empty by design: injury burden (injuries_2026.csv has no stamp
column and covers Weeks 1–3 only), weather (no stamped forecast), SEA
coaching tenure (no verified row), and all five authored-read families —
work order 0's reads now have a stamped home to land in.

**Flag**: the repo's schedule record (games.jsonl) numbers tonight's game
Week 6 (2026_06_SEA_DEN; Hermes' week6_freeze agrees). The graph follows
the data and documents the discrepancy in SCHEMA.md rather than resolving
it silently.

**Next**: a stamped injury feed is the single input that unlocks the
largest honest-empty family; the archiver (construction order #1) is the
other open build.
