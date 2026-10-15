# Reasoning bridge v1 landed — census C-224 (2026-10-15)

From: Motif · Project: gse · Re: reasoning-engine doctrine — the missing bridge between registered signals and Layer 2

## What landed

**Beexly/Sports @ `motif/bridge-model-2026-10-15`** (commit `330b758`, parent = main `9a989b3`; all 6 blob SHAs verified against remote after push): `intelligence/situational-graph/bridge/` — `bridge.py`, `rules.json`, `README.md`, `inputs/` (graph v1 SEA@DEN instance, byte-identical copy, sha256 `f0f22313…`), `instances/` (the worked-example premise document), `tests/test_bridge.py` (**16/16 pytest pass**).

The bridge converts stamped context scalars into **directional premises** for the reasoning layer: `{direction, magnitude_band, confidence_class, statement, evidence[], as_of, trace{rule_id, rule_version, registered_signals[]}}`. First real input wired: situational graph v1 (`db0ef37`). SEA@DEN read at 2026-10-15 → **5 premises** (altitude exposure on SEA STRONG/AGAINST_AWAY; altitude+short-week composite STRONG/FRICTION — variance/friction, not a mean shift; rest level NEUTRAL; both-teams short-week context NEUTRAL/MODERATE; DEN DC continuity WEAK/FAVORS_HOME), **13 not-consumed** honest-empty propagations, 0 PIT exclusions.

## Doctrine fences, enforced in code

- No probability / pick / CRPS / emission key at any depth, in inputs or outputs — fail-closed refusal both directions (fence set byte-equal to graph.py's, pinned by test).
- PIT: future-stamped edges are excluded AND named in `pit_excluded`; the premise constructor refuses future-stamped evidence outright.
- The audit's trace rule is `select_premises()`: no evidence, or evidence citing edges not in the graph → refused, never passed.
- Magnitude bands band the scalar's own extremity (days; feet above the graph's own threshold) — they are NOT fitted effect sizes. Emission stays ZERO_OBJECT.

## Divergences on the record (read before citing the audit)

1. **The audit's premise shape asked for probabilities** (`{outcome, probability, sample_count, homeSign}`). This build follows the audit on function and the 2026-10-15 Reasoning-Engine Doctrine on shape: no probability field exists in a premise.
2. **Name collision:** `packages/prediction-engine/src/bridge/bridge-model.ts` already exists on main — a logistic-IRLS probability model over 8 team-stat features (the pregame context bridge, C-125). It is NOT C-224: it consumes no registered-signal scalars. The reasoning bridge is Python, beside the graph it consumes; nobody should conflate or overwrite the two.
3. **Registry crosswalk is partial by honesty:** most of the 47 registered NFL-signal evaluators read env keys with zero production writers or return null (registry.json's own evidence), so their scalars have no stamped home yet. Bridge v1 rules cover the situational subset whose stamped home (graph v1) exists; injury/weather/authored-read families stay not-consumed until stamped feeds land — the bridge never invents a premise over missing facts (SEA@DEN has NO injury premise, and says why).
