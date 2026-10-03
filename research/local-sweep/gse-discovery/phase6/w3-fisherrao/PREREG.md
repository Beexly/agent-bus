# Pre-registration: W3 / Fisher-Rao information geometry of play-call distributions

**Author:** W3 worker (subagent 05d6103b)  |  **Date:** 2026-09-13
**Status:** PRE-REGISTERED (locked before any run on real data; snapshot not yet available)

> Protocol: DeepSeek deliverable `deepseek-move37-phase6-response-01.md` §4/W3.
> Program: `PHASE6_EXPANDED_PROGRAM.md` §§4 (testing discipline), 7 (what counts as a discovery).
> No HARKing. Amendments after first run require a dated addendum; this document stays immutable.

## 1. Estimand

For each (team, season), the play-call distribution `p_{i,t}` — a categorical
distribution over 36 context cells = 4 downs × 3 distance bins × 3 field-position
bins. The Fisher-Rao geodesic distance between two team-seasons is computed via
the Hellinger embedding (closed form on the probability simplex):

    d_FR(p, q) = 2 · arccos( Σ_k √(p_k · q_k) ),   k = 1..36

which is the arc-length distance on the positive orthant of the unit sphere —
the exact Fisher-Rao geodesic for the multinomial simplex.

**Target quantity:** for pairs of team-seasons in the SAME season, the
difference in mean d_FR between within-division pairs and cross-division pairs,
after removing season fixed effects and Elo-difference effects. Direction:
within-division pairs are predicted to be CLOSER (smaller d_FR). Effect size
reported as Cohen's d on residualized distances.

- Target variable: Cohen's d of (cross-division minus within-division) residualized d_FR
- Unit of observation: pair of team-seasons within one season (496 pairs/season; 24 seasons × 496 ≈ 11,900 pairs)
- Test-era population: 2002–2025 regular seasons (see §2 for why 2002+)

## 2. Identification argument

The Hellinger/Fisher-Rao embedding identifies the geodesic on the simplex
exactly — no estimator bias, no optimization, no flat surface: d_FR is a
closed-form function of the two histograms. Identification of the *effect*
(within-division similarity) rests on:

1. **Bin construction is fixed ex ante** (§5), so the cell definition cannot be
   tuned to find an effect.
2. **Elo control:** better teams and worse teams may systematically differ in
   play-calling context (leading teams face more late-downs at their own end;
   trailing teams face more long-yardage). A same-division pair also plays each
   other twice, and divisional cohorts have correlated schedule difficulty.
   We residualize d_FR on |ΔElo| (start-of-season Elo) plus season fixed effects
   before computing Cohen's d, so the comparison is "among pairs of equal
   quality in the same season, are division-mates more alike?"
3. **Seasons 2002+ only:** the NFL's 8-division structure dates from the 2002
   realignment. 1999–2001 had a different division layout (AFC/NFC Central),
   making "within division" incomparable across the 2002 boundary. Relocations
   (STL→LA 2016, SD→LAC 2017, OAK→LV 2020) all stayed inside their divisions.
   Cost: train era becomes 2002–2010 (9 seasons, 4,464 pairs) instead of
   1999–2010 — still ample.
4. **Finite-sample behavior:** team-seasons with < 200 qualifying plays are
   dropped (regular seasons yield ~1,000 plays; 200 is a generous floor that
   only bites on pathological seasons). Zero-count cells are handled by
   Lidstone smoothing α = 0.5 (primary; robustness re-run at α ∈ {0.1, 1.0} is
   reported but non-decisional). The Bhattacharyya coefficient needs no
   log of zero, so smoothing is only a stabilizer, not a requirement.

**Flat-surface diagnostic:** d_FR is closed form; there is no optimizer and no
flat surface. The diagnostic analog is the permutation placebo (§5): if the
observed Cohen's d is not in the tail of the label-shuffled null, the "effect"
is a property of the data layout, not of divisions.

**Dumb baseline that kills it:** within-division similarity could be fully
explained by team quality (good teams play distinct "winning football").
If residualizing on |ΔElo| + season FE drives Cohen's d below 0.1, the claim
dies — the geometry adds nothing beyond "similar-quality teams look similar."

**Orientation:** all distributions are the POSTEAM's own play-calling context
distribution (whose plays, whose down/distance/field position). Division labels
are the team's own division. No defense perspective anywhere in this protocol.

## 3. Dumb-baseline duel spec

- Baseline: the residualized-null model — Cohen's d computed after regressing
  d_FR on |ΔElo| + season FE with division labels destroyed (the permutation
  null). The duel is: observed d vs the distribution of d under 1,000
  within-season division-label permutations.
- Metric: Cohen's d on residualized distances (higher = stronger divisional
  clustering, predicted positive). Permutation p-value (one-sided, greater).
- Test set: all same-season pairs, seasons 2002–2025 from the frozen snapshot;
  era-split sub-analyses on train (≤2010), validate (2011–2017), test (2018–2025).
- Market duel: **N/A** — no closing line exists for a play-call-distribution
  geometry claim; this is a structural/descriptive estimand, not a prediction.
  Per program §7 it therefore cannot be an "edge"; best achievable verdict is a
  real, surviving structure worth deeper predictive work (and honest NULL if it
  fails).
- Win condition: Cohen's d ≥ 0.3 (DeepSeek's stated bet threshold) with
  permutation p < 0.05, sign consistent across all three eras.

## 4. Kill criteria (quantitative, falsifiable)

The experiment is KILLED if ANY of the following hold. No judgment calls.

1. **Overall Cohen's d < 0.1** → KILL (protocol kill criterion; DeepSeek's bet
   threshold was d ≥ 0.3).
2. **Permutation p-value ≥ 0.05** (1,000 within-season division-label shuffles,
   master seed 42) → KILL — effect indistinguishable from the null layout.
3. **Sign flip across eras:** Cohen's d negative in any of train (2002–2010) /
   validate (2011–2017) / test (2018–2025) → regime artifact → KILL.
4. **Test-era d < 0.1** (2018–2025 alone) → KILL — structure does not hold where
   it would have to be usable.
5. **|ΔElo| alone explains it:** if adding |ΔElo| to the residualization moves
   d from ≥0.1 to <0.1, the effect was quality-confounding → KILL.
6. **Smoothing fragility:** if the sign of d changes under α ∈ {0.1, 1.0},
   flag as fragile and KILL (non-robust geometry).

Dead families get a one-line obituary; survivors get deeper runs.

## 5. Analysis plan (locked)

- Estimator / pipeline:
  1. Load frozen pbp; filter season_type == 'REG', play_type ∈ {'pass','run'},
     down ∈ {1,2,3,4}, ydstogo ≥ 1, yardline_100 ∈ [1,99], posteam non-null,
     season ∈ [2002, 2025].
  2. Bin: down (4) × distance [1–3]=SHORT, [4–7]=MED, [8+]=LONG × field
     yardline_100 [1–20]=RED, [21–50]=MID, [51–99]=OWN → 36 cells. Count plays
     per (season, posteam, cell); drop team-seasons with < 200 plays;
     normalize with Lidstone α=0.5.
  3. d_FR for every same-season team pair (closed form, vectorized).
  4. Division labels: post-2002 8-division map; normalize SD→LAC, OAK→LV, STL→LA.
     sameDiv = 1 if both teams share a division.
  5. Elo: start-of-season, computed from game outcomes derived from the frozen
     pbp (final scores per game_id), 538-style: K=20, HFA=65 points, init 1505,
     1/3 regression to 1505 at each season start. eloDiff = |elo_i − elo_j|.
  6. Residualize: OLS d_FR ~ C(season) + eloDiff (pooled, numpy lstsq).
     Cohen's d = (mean_cross − mean_within) / pooled SD of residuals.
  7. Era splits via `harness.era_split` (train ≤2010 / val 2011–2017 /
     test 2018–2025): recompute d per era on era-internal residualization.
  8. Permutation: `harness.permutation_test`, 1,000 shuffles of division labels
     within each season, master seed 42 → p-value for observed d.
- Hyperparameters: none tuned. Fixed: α=0.5, Elo (K=20, HFA=65), 1,000 perms.
- Era split: train ≤ 2010 / validate 2011–2017 / test 2018–2025 (era_split;
  note seasons start at 2002, so train = 2002–2010).
- Multiple comparisons: single primary p-value reported; BH correction across
  the W1–W4 white-space battery is the coordinator's job (harness.
  benjamini_hochberg); this worker reports the raw p and a BH-ready q slot.
- Flat-surface diagnostics: closed-form estimator — no optimizer. Fragility
  checks: smoothing α ∈ {0.1, 1.0} sign-stability (kill criterion 6);
  distance-bin edge variants are NOT run (bins locked).

## 6. Data snapshot & reproducibility

- Data snapshot: `~/workspace/gse-discovery/data_snapshot_20260913/` (frozen;
  MANIFEST.md pending — NO analysis runs until the manifest exists)
- Code hash: recorded at run time (sha256 of this repo's .py files → RUNLOG)
- Seed: 42 (master; all randomness derives from it via SeedSequence;
  replication seeds 123 and 7 reserved for confirmatory reruns)
- Expected outputs: `RUNLOG.md`, `REPORT.md`, `results/w3_results.json`,
  `results/pair_distances.parquet` (pair-level d_FR + labels, if snapshot
  licensing allows derivative storage; else regenerate on demand)

## 7. One-paragraph statement (draft, for the record)

"Within a season, teams that share a division call plays in more similar
down-distance-field-position contexts than teams of equal quality in different
divisions do — measured as a shorter Fisher-Rao geodesic between their
play-call distributions on the probability simplex — which would mean
divisional opponents face, and choose, systematically similar game situations,
a league-structure effect visible in the geometry of play-calling."

---
_Signed: W3 worker, 2026-09-13. Pre-locked before the data gate cleared.
Amendments after first run require a new dated addendum; the original stays immutable._
