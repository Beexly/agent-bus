# reasoning/competitive-intel-intake-2026-09-26.md
## What it is (1-2 sentences)
Intake decision memo on the Beexly/gse-competitive-intel repo (310 competitor dossiers, clean-room nflverse engines): the founder's rule is "learn the method, recompute on our data, do not paste their number." Nothing in the intel repo cleared a new direction — `publishes_pick` stays false, no new engine family added, LAC at BUF keeps its eight locked parts.
## Key metrics/methods (formulas where given, else "not specified")
- Opponent-adjusted efficiency (`scripts/opponent-adjusted.py`): per 2025 team-week, pass EPA/attempt minus that opponent's 2025 defensive pass EPA/attempt (weighted by attempts); same for rush EPA/carry. 2026 weeks 1–2 judged against the 2025 defense (current season excluded from baseline). Shrinkage: 80 pass attempts, 40 carries of prior.
- `on_field_efficiency` blend (signed home-minus-away, clipped to [-1, 1]): 55% opponent-adjusted pass EPA + 15% opponent-adjusted rush EPA + 15% CPOE + 10% explosive pass rate (20+ air yards) + 5% interception luck (sign flipped so fewer INTs than league rate is positive).
- Parlay math: `packages/prediction-engine/src/parlay/correlationAdjuster.ts`, Karlis & Ntzoufras bivariate Poisson, same-match same-game parlay only; `PARLAY_MRI_PRICED = false` until a walk-forward beats the independent product on real book quotes.
- Trench grain: qb_hit per dropback (2025 walk-forward r = 0.241). Scheme grain: motion, play-action, RPO, shotgun + drive-start capped at 0.15.
## Data sources named
- Beexly/gse-competitive-intel repo: 310 competitor dossiers, FantasyGuru `nfl_engine.py`, FantasyGuru 2025 SMASH tables, FantasyPoints personnel charts, PFF grades, SIS charting, StatRankings ARBY ranks, Big Data Bowl tracking (non-commercial), StatsBomb 2021–2022 frames, GSSI nutrition guide, Wonderlic/S2/AIQ compilations, SiriusXM audio.
## Findings (numbers and facts, not vibes)
- Competitor QB-type construction (rush attempts/rush yards per game) = duplicate of rushing EPA already at 15% of the blend → not a new part.
- Competitor OL index (pressure allowed, sack rate, pocket time, yards before contact) = duplicate of trench (qb_hit per dropback, 2025 r = 0.241) → not a new part.
- Competitor scheme construction (shotgun, no-huddle, neutral pass rate, red-zone pass rate) overlaps live scheme family (motion, play-action, RPO, shotgun + drive-start capped 0.15) → not new.
- Explicitly excluded: nutrition (constant on every lineman, doesn't separate teams — `bio_nutrition` dark), cognition (leaked pre-draft scores, no week-3 row), raw RFID/NGS (Big Data Bowl non-commercial; NGS summaries inform efficiency by at most 0.15), SiriusXM audio (copyright), "179 gate scores in one pass" ruled a fake count without the `holdout.jsonl` harness run.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Opponent-adjusted EPA blend with 80/40-attempt shrinkage: SCHEME (efficiency baseline construction for the prediction engine).
- Clean-room FantasyGuru engine QB mobility type rejected as duplicate: QB-BEHAVIOR (mobility belongs inside rushing EPA, no standalone family).
- OL index rejected as duplicate of trench qb_hit/dropback (r=0.241): OL (confirms the engine's trench representative).
- Scheme construction (shotgun/no-huddle/neutral pass/red-zone pass) already live: COACHING, SCHEME.
- Whalelay lab case scripts (Corum receptions, Adams with/without Puka, Stafford after 0-TD game, Rams first-quarter) emit no correlation/holdout/week-3 row: OTHER (parlay research note).
- 179-gate fake count rejection: OTHER (validation rigor doctrine).
## Engine-actionable? (yes/no + one-line what)
yes — Adopt the opponent-adjusted EPA residual method (80 pass-att / 40 carry shrinkage, 2025-defense baseline, 55/15/15/10/5 blend) as the canonical on-field efficiency family; reject duplicate CPOE/EPA/OL/scheme pastes from competitor dossiers.
