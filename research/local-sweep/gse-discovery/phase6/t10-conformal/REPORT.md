# T10 — Conformal Win-Probability / Uncertainty Quantification
## FINAL REPORT — 2026-09-14

**Verdict: K3 FAILS → no discovery.** The conformal machinery is *valid*
(K1/K2/K4 pass: honest 90% uncertainty survives era shift), but the
"honest uncertainty is an edge" claim **dies** — conformal uncertainty
measures do not beat the dumb point-estimate proxy at flagging surprise
game states. Per PREREG §6: obituary for the edge claim; coverage results
reported as a null.

---

## Provenance

- Data: frozen snapshot `~/workspace/gse-discovery/data_snapshot_20260913/`
  (MANIFEST.md 2026-09-14T02:49:49Z; 27 seasons 1999–2025; 1,279,628 plays;
  7,276 games built, 7,273 with lines+scores).
- Game-level CSV built by `build_games_snapshot.py` (snapshot parquet only,
  column-pruned, season-chunked; no live access): `games_snapshot.csv`.
- Pipeline: `t10_conformal.py`, code sha `51bda76a0f909161`, seed `20260913`,
  α = 0.10 (nominal 90%).
- Splits (preregistered): train ≤ 2010 (n=3,177) / calibrate 2011–2017
  (n=1,869) / test 2018–2025 (n=2,227; binary n=2,219 after 8 ties dropped).
- Base models (predeclared, no tuning): logistic regression on
  [1, spread_line, total_line], β = (−0.2563, 0.1337, 0.0059);
  linear quantile regression τ ∈ {0.05, 0.95} on the same features.
- Cutoffs from cal era: q_binary = 0.6602, q_CQR = −0.9795
  (negative = raw QR intervals already over-covered; CQR *tightened* them).

## Kill-criteria audit

| Gate | Result | Numbers (test era 2018–2025) |
|---|---|---|
| **K1** coverage ∈ [0.88, 0.92], both targets | **PASS** | binary sets 0.8991; margin intervals 0.9084 |
| **K2** ECE(our p̂) < ECE(nflverse pregame WP), strictly | **PASS** (mechanical — see caveat) | 0.0293 vs 0.0741 |
| **K3** ρ(conf,surprise) > ρ(dumb,surprise), BH-significant (FDR 0.05, 2 tests) | **FAIL** | binary: 0.2151 < 0.2377, p=0.976; margin: −0.0013 > −0.0465, p=0.056; BH q=[0.976, 0.112], 0 rejections |
| **K4** permutation placebo coverage ≈ 90% | **PASS** | cal 0.8997/0.9005, test 0.8927/0.8918 |

**K2 caveat (material):** the PREREG-defined "nflverse pregame WP"
(first-play `wp`) is *degenerate* in this snapshot — a handful of discrete
values per season, corr(wp, spread) = −0.026, corr(wp, home win) = −0.04,
home winrate ≈ base rate inside every wp group. K2 passes against a
non-informative baseline, not against a real pregame number. No HARKing was
done to find a better wp column; the duel ran exactly as preregistered.

## Headline numbers (test era)

- **Coverage (nominal 90%):** binary 0.8991 (validate-era sanity: 0.9008);
  margin 0.9084 (validate: 0.9005). Conditional strata all ≈ nominal —
  binary fav 0.8841 / dog 0.9229 / early 0.8979 / late 0.9002;
  margin fav 0.9092 / dog 0.9072 / early 0.9012 / late 0.9152.
- **Sharpness:** 44.8% singleton sets (0% empty); margin median width
  **44.0 points** (mean ≈ 45).
- **Duel — same 2,219 test rows, log-loss / 10-bin ECE:**
  - our base p̂: **0.6093 / 0.0293** (reliability curve tracks the diagonal
    in all 10 bins)
  - market-implied Φ(spread/13.45): 0.6103 / 0.0317 (≈ tied — expected;
    our model is spread+total, market is spread-only)
  - Elo (chronological, K=20, HFA=65): 0.6601 / 0.0582
  - nflverse first-play wp ("raw WP"): 0.7056 / 0.0741 (degenerate; see caveat)
- **Uncertainty–surprise (K3):** binary Spearman ρ conf 0.2151 vs dumb
  0.2377 (dumb numerically better, one-sided p = 0.976); margin ρ conf
  −0.0013 vs dumb −0.0465 (Δ = +0.0452, one-sided permutation p = 0.056,
  BH q = 0.112 → not significant). Neither target clears the bar.

## Placebo (K4 detail)

Shuffled labels within cal+test pool, cutoffs recalibrated: coverage holds
(cal 0.8997/0.9005, test 0.8927/0.8918); singleton fraction 0.448 → 0.21;
mean width 44.0 → 53.1. The residual 21% singleton rate under permutation is
expected — p̂ retains feature-driven spread even with random labels
(identical pattern in the synthetic smoke test) — not an implementation bug.

## Data anomalies found and handled (all logged in RUNLOG)

1. **Snapshot spread sign convention is flipped vs textbook nflverse:**
   `spread_line > 0` ⟺ home favored (home winrate 0.675 vs 0.356;
   corr(spread, home win) = +0.44). Fixed: orientation checks, fav/dog
   strata, and the market mapping now use positive = home-fav
   (P = Φ(spread/13.45)). The old code would have scored an *inverted*
   market baseline.
2. **Quantile-regression LP sign bug** (found in verification, fixed before
   the final run): `A_eq` used `−X`, returning negated quantile coefficients
   (82% of train margins fell below the "τ=0.05" line). Coverage held anyway
   (conformal guarantee is agnostic) but intervals were bloated (median
   width 64.1 vs 44.0 after fix). The pre-fix full run was discarded.
3. **Ties** (15 total, 8 in test era): excluded from binary target, retained
   in margin fit/eval/placebo per PREREG (the original script dropped them
   from margin too — fixed).

## Obituary for the edge claim (K3)

Conformalized uncertainty does not identify surprise game states better
than the dumb proxy `1 − 2|p̂ − 0.5|`. For binary outcomes the dumb proxy
was numerically *better* (ρ 0.238 vs 0.215); for margins the conformal
width carried essentially no signal about absolute surprise
(ρ = −0.001) and the conf-vs-dumb gap (p = 0.056, q = 0.112) misses
significance. Honest coverage ≠ exploitable edge. The coverage machinery
itself is sound and could be reused (e.g., for interval-based sizing), but
as a *discovery* — a way to find mispriced uncertainty — T10 is dead.

## Artifacts

- `PREREG.md` (locked 2026-09-13), `t10_conformal.py` (sha 51bda76a0f909161),
  `build_games_snapshot.py`, `games_snapshot.csv` (7,276 rows),
  `results_snapshot.json` (full output incl. reliability tables),
  `full_run.log`, `RUNLOG.md` — all in
  `~/workspace/gse-discovery/phase6/t10-conformal/`.
