# docs/reasoning/signal-audit.md
## What it is (1-2 sentences)
A declaration-level audit of 46 engine signals, classifying each as a premise, a probability-without-a-sample-count, context-only, or neither — using the rule that a premise requires a probability, an outcome, AND a sample count, and that `trustWeight` is not a sample count. No signal was modified; the result is a verdict table plus counts.
## Key metrics/methods (formulas where given, else "not specified")
- Premise rule: needs a probability, an outcome, and a sample count. None of the 46 satisfy it.
- Counts: context-only 31, neither 6, "probability without a sample count, not a premise" 9. Zero premise sources.
- The 9 2WAY_PROBABILITY signals (prefetched_exchange, kalshi, espn_powerindex, clubelo, poisson_dixon_coles, mlb_standings, elo, nfl_epa_adj; polymarket_gamma_internal is SHADOW_ONLY) name a home probability but no sample count, so "the trace would discard them."
- 5 signals BLOCKED_MISSING_SOURCE: nfl_contract_incentives, nfl_cognitive_load_fatigue, nfl_beat_desk_corroboration, nfl_trench_pass_block_win_rate, nfl_luck_fumble_regression.
- 31 CONTINUOUS_VALUE signals are context-only (wind, coaching tendencies, injury trajectory, OL trench, referee crew, travel fatigue, fourth-down aggressiveness, second-and-ten tendency, primetime target concentration, early-down proe momentum, two-minute hurry-up, bye-week install, qb_twp_regression, qb_receiver_continuity, penalty differential, backup QB target distribution, man/zone receiver archetype, wr1 vacated/wr1-out metrics, redzone variants, rookie breakout cohort, altitude/temperature/turf fatigue, wind pass impact, linear wind).
- Only one continuous signal has a declared sample count: nfl_wr1_out_redistribution.
## Data sources named
None — no data sources named (this is a structural audit of declared signals, not a data study).
## Findings (numbers and facts, not vibes)
- 46 declarations total; 0 premise sources.
- ACTIVE vs SHADOW_ONLY: polymarket_gamma_internal is SHADOW_ONLY; nfl_redzone_te_leverage is ACTIVE as 2WAY_PROBABILITY with no outcome/direction.
- The CONTINUOUS_VALUE family dominates (37 of 46).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-relevant continuous signals catalogued (nfl_qb_twp_regression, nfl_qb_receiver_continuity, nfl_backup_qb_target_distribution) — QB-BEHAVIOR (signal inventory for QB lanes, all context-only).
- nfl_coaching_tendencies and nfl_fourth_down_aggressiveness — COACHING (inventory).
- nfl_offensive_line_trench and BLOCKED nfl_trench_pass_block_win_rate — OL (OL signal status: trench is context-only active; pass-block-win-rate blocked missing source).
- "Probability without a sample count is not a premise; the trace would discard them" — TRUST-SIGNAL (evidence gating rule for the reasoning trace).
- nfl_man_zone_receiver_archetype, redzone personnel/grouping, negative binomial redzone TD — SCHEME (inventory of scheme-level signals).
- Five BLOCKED_MISSING_SOURCE signals including fumble luck regression and contract incentives — OTHER (gap inventory).
## Engine-actionable? (yes/no + one-line what)
Yes — it is a ready-made gap inventory: the 5 BLOCKED_MISSING_SOURCE signals and the 9 sample-count-less probabilities are explicit wiring targets (add sample counts or wire the missing sources).
