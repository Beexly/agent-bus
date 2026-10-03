# docs/reasoning/week3-parts.md

## What it is (1-2 sentences)
The full Week 3 part ledger: per-game, per-signal-family rows for all 16 games of 2026 Week 3 (`2026_03_*`), with 8 LIVE families carrying signed numeric values and 4 candidate families DARK (officials, weather_physics, narrative_contract, coaching). The header states `2026_03_LAC_BUF` sums to 0.30259224777263855, supporting a home reading, not a pick (`publishes_pick` false).

## Key metrics/methods (formulas where given, else "not specified")
- Scoring gates per family (from DARK-row reasons): officials — |slope| 0.010071677456738428 vs se 0.01028210084979805 (fails |slope| > se → DARK); weather_physics — |slope| 0.135 vs se 0.1618 (fails → DARK); coaching — |r| 0.014 under the 0.08 threshold (→ DARK).
- trench_personnel family cites its own validation: 2025 walk-forward r=0.241, n=250.
- scheme_play_design helper = drive-start, capped at 0.15 (explicitly not the MOVE-37 sin formula).
- Chemistry: same-QB = signed 1 → points 0.04 (seen in MIN_TB); QB change = signed -1 → points -0.04 (seen in TEN_NYG); a "real zero" stays in the sum rather than being dropped.
- Availability: outs priced per-game (e.g., signed -0.5 → points -0.06; signed +0.6667 → points +0.08).
- Schedule_and_body: rest differential; cleared |slope| > se on margin per the family reason; mostly signed 0 (e.g., LAC_BUF 0.0880, TEN_NYG -0.0293).
- Points = signed × family weight: on_field_efficiency ≈ 0.14, scheme_play_design ≈ 0.12, availability ≈ 0.12, schedule_and_body ≈ 0.08, historical_strength ≈ 0.08, trench_personnel ≈ 0.05, chemistry ≈ 0.04, airwave ≈ 0.05.

## Data sources named
- nflverse grains referenced by family: `games.referee` (officials), `schedules.weather wind_mph` (weather_physics), contracts (narrative_contract), fourth-down go rate (coaching).
- SiriusXM audio (airwave family).
- Opponent-adjusted blend / CPOE (on_field_efficiency family).

## Findings (numbers and facts, not vibes)
- Ledger covers 16 games × 12 rows (8 LIVE families + 4 DARK candidates) for 2026 Week 3. [OTHER]
- LAC_BUF aggregate sum 0.30259224777263855 (per header), 8 LIVE parts, supporting a home reading; not a pick. [OTHER]
- LAC_BUF LIVE contributions: on_field_efficiency signed 1 → 0.14 points; availability 0.6667 → 0.08; historical_strength 0.5561 → 0.0445; trench_personnel 0.7487 → 0.0374; schedule_and_body 0.0880 → 0.0070; scheme_play_design 0.0337 → 0.0040; chemistry 0 → 0; airwave -0.2083 → -0.0104. [OTHER]
- Across all games: every DARK row cites the identical officials |slope| 0.010071677456738428 vs se 0.01028210084979805, weather |slope| 0.135 vs se 0.1618, coaching |r| 0.014 < 0.08. [OTHER]
- Trench family strength extremes: HOU_IND signed -0.4661 → -0.0233; ARI_SF signed 0.6038 → 0.0302; CIN_PIT signed 0.6766 → 0.0338; TEN_NYG signed -0.3829 → -0.0191. [OL]
- Chemistry extremes: MIN_TB same-QB signed 1 → 0.04; TEN_NYG QB change signed -1 → -0.04; most games signed 0. [QB-BEHAVIOR]
- Airwave extremes: KC_MIA signed -0.7917 → -0.0396; NYJ_DET signed 0.6667 → 0.0333; several games signed 0. [TRUST-SIGNAL]
- Availability extremes: LAC_BUF +0.6667 → +0.08; HOU_IND/NE_JAX +0.5 → +0.06; ATL_GB/BAL_DAL/SEA_WAS -0.5 → -0.06. [OTHER]
- Scheme_play_design extremes: NE_JAX 0.1707 → 0.0205; CAR_CLE -0.2088 → -0.0251; all capped via drive-start helper at 0.15. [SCHEME]
- On_field_efficiency extremes: LAC_BUF 1 → 0.14; NYJ_DET 0.4639 → 0.0650; CAR_CLE -0.4245 → -0.0594; KC_MIA -0.3893 → -0.0545. [OTHER]
- INFERENCE: header states "no STORED candidates" while ported-results-2026-09-27.md records narrative_contract as STORED; the ledger's DARK rows here show no week-3 row for the candidate families, consistent with the target game having no week-3 snap data at ledger time. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Chemistry QB-change zeros/±1: QB-BEHAVIOR (quantified roster-continuity pricing).
- Trench_personnel per-game signed values: OL (quantified OL-vs-front readings, 2025 walk-forward r=0.241).
- Officials/weather/coaching/narrative DARK reasons: COACHING (coaching family explicitly gated out); TRUST-SIGNAL (honesty gates refusing signal below noise).
- Airwave sentiment rows: TRUST-SIGNAL (sentiment as priced signal with zeros allowed).
- Drive-start scheme helper: SCHEME.

## Engine-actionable? (yes/no + one-line what)
Yes — this is the canonical per-game, per-family signed-value ledger format with the exact honesty gates that keep a family DARK; the LAC_BUF sum (0.3026, home reading, not a pick) is the reproducibility anchor for the week-3 engine run.
