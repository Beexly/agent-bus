# T10 RUNLOG

| time (CDT) | event |
|---|---|
| 2026-09-13 ~20:35 | PREREG.md written (preregistration complete, no data touched) |
| 2026-09-13 ~20:38 | t10_conformal.py written (split-conformal sets + CQR, numpy/scipy only) |
| 2026-09-13 ~20:40 | Synthetic-data smoke test: machinery validated. Coverage bin 0.911 / margin 0.930 near nominal 0.90. Placebo: coverage held (0.894/0.899), singleton frac collapsed 0.44->0.20. Implementation sane. |
| 2026-09-13 ~20:41 | nflreadpy installed in .venv (system pip blocked by PEP 668) |
| 2026-09-13 ~20:45 | Live smoke test launched: --live 2022 2024 (bg proc_5cd8ce98f91a). MANIFEST poll started (60x180s). |
| 2026-09-14 ~02:55 | MANIFEST landed (2026-09-14T02:49:49Z). T10 executor started. Anti-dup check: no t10_conformal process running. |
| 2026-09-14 ~03:00 | **Verification vs PREREG found 3 real issues + 1 addition.** (a) SNAPSHOT SPREAD SIGN FLIPPED: spread_line>0 <=> home favored (home winrate 0.675 vs 0.356, corr(spread,home_win)=+0.44) — opposite of textbook nflverse. Fixed orientation checks, fav/dog strata, market mapping (now P=Phi(spread/13.45); old code scored an inverted market). (b) QUANTILE-REGRESSION LP SIGN BUG: A_eq used -X, returning negated quantile betas (82% of train margins below the "tau=0.05" line; median width 64.1 vs 44.0 correct). Fixed to +X; verified 5.0%/95.0% in-sample. (c) TIES: PREREG retains ties in margin analysis; script dropped them from margin fit/eval/placebo. Fixed (separate m_bin/m_mar masks). (d) Added Elo duel member per executor task (chronological Elo, K=20, HFA=65, pregame-safe; `elo_pregame` col in CSV, logloss_elo/ece_elo on same duel rows). |
| 2026-09-14 ~03:05 | `build_games_snapshot.py` written: snapshot-only game-level CSV (season-chunked, column-pruned). 7,276 games; 3 rows (1999 wk1) lack lines -> dropped by ok-mask. Elo range 0.095–0.951. Orientation assert passed. |
| 2026-09-14 ~03:10 | **Full run #1 (pre-quantile-fix) DISCARDED**: coverage_bin 0.8991 / coverage_mar 0.9075 but width_median 64.08 (bloated by negated quantiles). Code then fixed; sha now 51bda76a0f909161. |
| 2026-09-14 ~03:15 | **Full run #2 (final)** on games_snapshot.csv, nice -n 10, 10.5s: n_train=3177, n_cal=1869, n_test=2227 (binary 2219). TEST: coverage_bin=0.8991, coverage_mar=0.9084, singleton=0.448, width_med=43.96. Duel (same 2219 rows): model 0.6093/0.0293, market 0.6103/0.0317, Elo 0.6601/0.0582, nflverse-wp 0.7056/0.0741. K3: rho_bin conf 0.2151<dumb 0.2377 p=0.976; rho_mar conf -0.0013>dumb -0.0465 p=0.056; BH q=[0.976,0.112], 0 rejections. Placebo: coverage holds (cal 0.8997/0.9005, test 0.8927/0.8918); singleton 0.448->0.21; width 44.0->53.1. |
| 2026-09-14 ~03:20 | **VERDICT: K1 PASS, K2 PASS (mechanical — nflverse first-play wp is degenerate: discrete values, corr~0 with spread/outcome), K3 FAIL, K4 PASS → no discovery; obituary for the edge claim, coverage results reported as null.** REPORT.md written. |
