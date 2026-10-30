# Hermes cycle — the Week-8 overlay ran on a file that did not exist

Branch: Beexly/Sports `engine/w1w7-tendencies-2026-10-30`
SHA: `88afd2a5b20dd278c66b011d9ea53dd9634780ff`
Remote matches that SHA (verified by `git ls-remote`, not by the push output).
Stacked on `ledger/canonical-settle-2026-10-30` (`056922c72`). Nothing pushed to main.

## What was wrong

The Week-8 engine overlay had been sitting **uncommitted** (474 lines across four files) and
depended on `data/film_room_2026/master_weeks_1_to_7_pbp_tendencies_2026.json`, which existed
**nowhere in the repo**. `load_master_w1_w7_tendencies` caught the miss and returned `{}`, so the
sack-tandem gate, RZ TD%, comp-rate bases and blitz rate all silently degraded to the sealed
baseline while every run still printed a full slate. Four separate defects:

1. **Missing data, silent.** Loader now raises `FileNotFoundError` naming the rebuild command.
2. **Fabricated opponents.** `compute_weekly_bayesian_ridge_power_ratings` paired each team with
   `(i + 7) % 32` and fitted "net EPA" = a team's own offense minus its own defense, then labelled
   the result opponent-adjusted. It now regresses on **214 real team-game rows** (offense, the
   defense it actually faced, EPA/play) with week-age decay, and raises on unknown team codes.
3. **Duplicate definitions.** `idp_tackle_funnel_adjustment` and `sack_tandem_gate_weight` were
   each defined twice in `pressure_answer.py`; the second silently won.
4. **A denoiser that deleted everything.** `sgp-copula.denoiseSgpPairwiseCorrelation` returned
   exactly `0.0` for every input in [-0.95, 0.95] at its defaults — `lambdaPlus` = 2.5411 always
   exceeded the shrink numerator, and an undocumented `× 0.35` sat on top. It erased the SGP
   correlation structure it was named to denoise. Replaced with positive-part James-Stein
   `max(0, 1 − σ²/r²)`, σ = 1/√(n−3), no magic constant.

## What was built

`scripts/ops/build_master_tendencies_2026.py` → 32 team blocks + 214 game rows from
**nflverse PBP 2026 (107 games, 13,131 filtered plays, weeks 1–7)** plus **FTN charting** for rush
counts. Fields whose source column is absent are omitted, never defaulted; provenance is stamped
in the artifact.

Spot-check that it is the real dataset and not a reshaping: the bye weeks drop out exactly as the
2026-10-29 sweep observed — BUF `weeks_covered` is [1..6], no week 7. The fitted ranking also
reproduces the known shape (JAX high, PHI bottom-third, DET's W6–W7 collapse at −0.203 trend).

**The artifact is wired into the sim but the ratings are NOT an input to the sealed totals** —
MODEL_VERSION is frozen, so they print as an explicitly labelled diagnostic. A number a reader
cannot place is a claim, not a fact.

## Verified

- `build_master_tendencies_2026.py` → games=107 plays=13131 teams=32, 0 teams missing a watched field
- `tests/intelligence/test_week8_three_module_wiring.py` → exit 0, ALL 6 WIRING POINTS PASSED,
  identical `[1B]` values across two independent runs (KC +0.09860, GB +0.06150, CAR −0.01152,
  DET +0.00466, BAL +0.02761)
- `gse_coach_mind_simulator.py --sims 300` → exit 0, full 7-game slate plus the new OPP-ADJ line
  (best SF +0.162 / worst TEN −0.172, spread 0.334)
- sgp-copula: 8/8 new denoise tests + existing 11/11
- prediction-engine tsc exit 2 with **6 pre-existing** errors in `src/equations/arxiv-paper-2026/*`;
  **zero** in `sgp-copula.ts`

## Not done, and not pretended

- **Merge order still matters.** `ledger/16-5-honesty` and `ledger/canonical-settle-2026-10-30`
  both touch the ledger JSON. Recommended: merge `16-5-honesty` first, then run
  `python scripts/ops/update_official_16_5_ledger.py` on the merged tree.
- **The four-count discrepancy is still unresolved** and still an owner call: entering `16-5`,
  card `14-6`/`15-7`, vault auto-grade `39-22`, Garrett official `31-11` tonight / `47-16` season.
  The 42-play tonight denominator exists in no repo artifact. No number was substituted.
- `data/nflverse/pbp/` is gitignored by design, so the PBP feed is fetched, not committed; the
  72 KB JSON artifact **is** committed, which is what the sim reads.
