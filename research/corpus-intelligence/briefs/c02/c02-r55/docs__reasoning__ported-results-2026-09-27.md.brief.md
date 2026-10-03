# docs/reasoning/ported-results-2026-09-27.md

## What it is (1-2 sentences)
The 2026-09-27 port report for the reasoning program: two agents produced overlapping-but-non-identical results on the same night; this branch carries only what one lane produced (2026 application season ingested, `narrative_contract` honesty verdict, week-3 application command, `coaching` re-measurement) rebased onto the other lane's canonical layout.

## Key metrics/methods (formulas where given, else "not specified")
- Honesty gate used across families: `|r| >= 0.08` AND `|slope| > se`.
- `narrative_contract` 2025 holdout (coefficients fit on 2018–2024 only): n=285, r=0.24637068951161498, slope=0.8304928047049019, se=0.19420308361768532 → clears both gates → verdict STORED (f1=0, f2=0, f3=1; g=0.2; target game has no week-3 row).
- Other lane's independent replication (different data layout, no player-id crosswalk): r=0.2336, slope=1.1071, se=0.2739, also `honesty_cleared` — two data paths agreeing = evidence it's a property of the football, not the implementation.
- `2026_03_ATL_GB` live application via `scripts/overnight/compute-week3-narrative.mjs`: feature gap -1.260807041693968, signed -0.0882792023245994, model p 0.45189782884207563, selectPart: LIVE, g=0, no winning term.
- Frozen coefficients sealed in `data/reasoning/stored-candidates.jsonl`; when `2026_03_LAC_BUF` week-3 snap rows publish, one command makes the family LIVE with no re-fit.
- LAC vs BUF contract reading (from 2026 weeks 1–2 sealed rows, explicitly not the locked week-3 value): LAC mean APY 7.51068815816024 over 3370 matched snaps; BUF mean APY 10.65846376323198 over 3552 matched snaps; feature gap -3.1477756050717405; signed -0.22040098946402953; model p 0.3197760417026455 → points against LAC; at existing 0.03 prior pulls LAC edge down ~0.0066. Other lane agreed on direction at ~half magnitude.
- `coaching` re-measured with full statistics (main still carried stale `|r| 0.014` row with no slope/se).
- Registry invariant: `parts-registry.jsonl` unmodified at 8 rows; LAC edge recomputes to exactly 0.30259224777263855; `publishes_pick` false.
- `INGEST_SEASONS` now ends at 2026; participation loop records an unpublished season as refusal instead of aborting (nflverse has 2026 snaps, rosters, nfl4th; 2026 participation ships after season ends).
- `rows.test.ts` assertions re-pointed to 2017/2027 (genuinely outside the window); new assertion pins that a 2026 snap row is kept. Verification: `rows.test.ts` 5 passed, `tsc --noEmit` 0 errors.

## Data sources named
- nflverse (snaps, rosters, nfl4th, participation; 2026 application season now ingested, manifest previously ended at 2025).
- 2025 holdout as honesty gate data; coefficients fit on 2018–2024.
- Player-id crosswalk (one lane has it, the other did not).

## Findings (numbers and facts, not vibes)
- `narrative_contract` cleared honesty: n=285, r=0.246, slope=0.831, se=0.194 (|r|≥0.08, |slope|>se); verdict STORED; independently replicated by the other lane at r=0.234, slope=1.107, se=0.274 with no crosswalk. [OTHER]
- The live-application path is proven: frozen coefficients applied to `2026_03_ATL_GB` produced model p 0.4519, LIVE with g=0; `2026_03_LAC_BUF` will flip f3→0 with no re-fit once snap rows publish. [OTHER]
- Contract signal points against LAC: BUF mean APY 10.658 vs LAC 7.511 (3352–3370 matched snaps); model p 0.3198 vs LAC; ~0.0066 downward pull on the LAC edge at the 0.03 prior. [TRUST-SIGNAL]
- `coaching` re-measured with full statistics; the stale main-branch `|r| 0.014` no-slope row is superseded. [COACHING]
- Parts registry untouched (8 rows); LAC edge 0.30259224777263855; `publishes_pick` false. [OTHER]
- 2026 application season ingested; participation-loop behavior changed (unpublished season = refusal, not abort); test suite green (5 passed, 0 tsc errors). [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Narrative-contract honesty verdict: OTHER (program-level signal honesty).
- LAC/BUF contract reading: TRUST-SIGNAL (directional edge indicator with quantified pull).
- `coaching` re-measurement: COACHING (family measurement refresh).

## Engine-actionable? (yes/no + one-line what)
Yes — the `narrative_contract` family is the first to clear the honesty gate with sealed, frozen, no-re-fit coefficients and a proven LIVE application command (`scripts/overnight/compute-week3-narrative.mjs`); ready to promote when week-3 snap rows publish.
