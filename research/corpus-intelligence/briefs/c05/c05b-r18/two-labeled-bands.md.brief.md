# fantasy/research/2026-09-28/two-labeled-bands.md
## What it is (1-2 sentences)
A measurement report from 2026-09-28 proving the shipped model's variance-band spec was wrong: the spec's z values (0.62 for "68%", 1.28 for "90%") were measured empirically and replaced with measured z values (0.806 and 1.113) so the coverage labels are true, with a walk-forward audit of the foundation choice (production rate vs ffopportunity expected-points).
## Key metrics/methods (formulas where given, else "not specified")
- Band model: CV-based ratio band; z measured empirically to make each coverage label true (68% coverage → z = 0.806, mean width +/-62%; 90% coverage → z = 1.113, mean width +/-86%).
- Spec-claim arithmetic: spec's two pairs imply two contradictory CVs — 51%/0.62 = 0.8226 vs 78%/1.28 = 0.6094, a 1.35x internal contradiction; measured mean shrunk CV = 0.7707.
- EB shrinkage of both the rate and the CV toward the positional prior (semantics identical to `buildVarianceProjections`).
- `bandFor()` throws on any unmeasured coverage rather than rounding to a neighbor.
- Walk-forward: fit seasons 2021-2024 (weeks 1-3), evaluate 2025 (weeks 4-18).
- `selectPart` discrimination gate (packages/prediction-engine/src/reasoning/part-selector.ts): |r| >= 0.08 AND |slope| > se.
- Error recording: MAPE, medAE.
- Foundation candidates: A = production rate, B = ffopportunity EP rate, C = blended — same walk-forward, same half-life (half-life 6, multiplier 1.0).
- ffopportunity release assets run 2006-2026; `ep_weekly_2026.csv` is 1,028 rows x 159 columns, carries `total_fantasy_points_exp`. Join: 28,141 EP rows matched, 2,102 skipped for want of a GSIS crosswalk (production table keys on Sleeper ids, EP on GSIS).
## Data sources named
- Production `player_game_stats` table, REG only, PPR, 33,962 player-weeks 2020-2026.
- `ffverse/ffopportunity` (ffopportunity fetched and verified, not taken on faith); `ep_weekly_2026.csv` (1,028 rows x 159 cols).
- 2026 weeks 1-3 live: 1,068 rows, 3 weeks.
## Findings (numbers and facts, not vibes)
- Shipped z values measured on n=155: 68% → z = 0.806 (mean width +/-62%, measured coverage 68.0%); 90% → z = 1.113 (mean width +/-86%, measured coverage 90.0%).
- The spec's z values were wrong: z=0.62 delivered actual 53.55% coverage (mean width +/-48%); z=1.28 delivered 95.48% (mean width +/-99%).
- z=0.62 delivers 41-45% coverage in all 7 training windows tested (cuts 1-17, train_wk 1261-20304, minG 2-8, n 157-298, meanCV 0.6713-0.8140); no training window rescues it. NFL weekly PPR is heavier-tailed than Gaussian, so textbook z values do not transfer.
- Per-position shipped z (n=155): QB n=23, z(68%)=0.715 w=50%, z(90%)=0.928 w=64%; RB n=33, 0.857/65%, 1.243/95%; WR n=65, 0.863/66%, 1.087/83%; TE n=34, 0.769/65%, 1.113/94%. Shipped model uses one pooled z per coverage (not per-position).
- selectPart walk-forward (n=155): r = +0.5735, slope = 0.7748, se = 0.0895; honestyCleared = TRUE. Slope 0.77 with near-zero intercept; explains ~a third of variance in realized season totals.
- McCaffrey spot-check (fit 2021-2024, scored 2025 w4-18): proj 240.5, realized 346.7, abs err -106.2 (31% of projection); shrunk CV 0.6011; RB position z (n=33): 68%→0.857, 90%→1.243; 68% band 116.7-364.4 (realized inside: YES); 90% band 60.7-420.3 (inside: YES).
- Two recorded method errors: (1) per-player z is degenerate (one player = one outcome; z is a position-level quantity); (2) wrong-unit discrimination test — first pass correlated CV (ratio) vs realized SD (points) gave -0.3477 artifact; correct unit on both sides is points-per-game.
- QB suppression: predicted per-game SD vs realized per-game SD, by position and window: cut 3/minG 8 — QB n=24 r=+0.2627, RB n=37 r=+0.0481, WR n=68 r=+0.3928, TE n=34 r=+0.3929, overall +0.3057 (n=163); cut 9/minG 8 — QB n=46 r=+0.2044, RB n=80 r=+0.4825, WR n=136 r=+0.4736, TE n=72 r=+0.5710, overall +0.4883 (n=334); cut 17/minG 8 — QB n=57 r=+0.3911, RB n=98 r=+0.4887, WR n=156 r=+0.5072, TE n=91 r=+0.6286, overall +0.5410 (n=402). The brief's cited QB r=+0.06 is the single worst window (cut 3, n=24), not the pooled figure; on shipped config QB r=+0.3911 — lowest of four positions, so QB stays suppressed. At the live 3-week window RB r=+0.0481 is worse than QB's +0.2627, so the suppression list must be re-measured if the model is re-pointed at a short window.
- Foundation comparison (same walk-forward): A production-only n=163 r=+0.5807 slope 0.7866 se 0.0869 MAPE 2.7721 medAE 0.5615; B EP-only n=162 r=+0.5888 slope 0.8527 se 0.0925 MAPE 2.8848 medAE 0.5838; C blended n=163 r=+0.5844 slope 0.7849 se 0.0859 MAPE 2.9694 medAE 0.6120. Shipped: variant A (production). ffopportunity remains wired as a validated cross-check.
- Foundation counts correction: brief claimed 35,490 player-weeks / 1,436 players; measured 33,962 player-weeks (REG only, non-null PPR; off by 1,528) and 1,429 players with production rows (1,436 is the `players` table total; 7 have no REG PPR row). The 35,490 does not match any REG-with-PPR cut; recorded rather than reconciled.
- Unchanged: half-life 6, multiplier 1.0, rate formula, `canPublishProjections: false` on the grade; 2024->2025 rebind in `player-model.ts` verified. Open founder decision: the 68% band is +/-62% — honest width of this signal, a product consequence not a bug.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: QB uncertainty band is the weakest discriminator across all windows (r=+0.3911 pooled, lowest of four positions) — per-QB uncertainty is not publishable; ship positional prior or suppress.
- TRUST-SIGNAL: honest coverage labeling doctrine — a band labeled "68%" that contains 54% is called out as dishonest; `bandFor()` throws on unmeasured coverage; coverage label carried on every row (`varianceBand`) and written into every note string so surfaces cannot render bare floors/ceilings.
- OTHER: walk-forward methodology (fit 2021-2024 w1-3, eval 2025 w4-18), EB shrinkage semantics, ffopportunity validated-but-not-winning cross-check, corrected row-count audit.
## Engine-actionable? (yes/no + one-line what)
Yes — use the measured per-position z table (QB 0.715/0.928, RB 0.857/1.243, WR 0.863/1.087, TE 0.769/1.113; pooled 0.806/1.113) and the QB-suppression + re-measure-on-window-change rule as the calibrated variance-band baseline.
