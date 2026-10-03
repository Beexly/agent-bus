[2026-09-14 01:32:39] mode=smoke code_hash=848b53ecb4e2bcad
[2026-09-14 01:35:07] gplearn 0.4.3 installed; PREREG §5 stands: custom numpy tree-GP remains the engine (islands+migration, stability hooks, complexity caps not natively in gplearn)
[2026-09-14 01:35:49] mode=smoke code_hash=848b53ecb4e2bcad
[2026-09-14 01:42:34] SMOKE: 294989 rows from 6 files
[2026-09-14 01:43:04] mode=smoke code_hash=bc38a35842db4caf
[2026-09-14 01:43:17] SMOKE: 294989 rows from 6 files (15 cols)
[2026-09-14 01:43:17] SMOKE: 210719 scrimmage plays
[2026-09-14 01:43:17] SMOKE: feature down                         NA=0.004
[2026-09-14 01:43:17] SMOKE: feature ydstogo                      NA=0.000
[2026-09-14 01:43:17] SMOKE: feature yardline_100                 NA=0.000
[2026-09-14 01:43:17] SMOKE: feature score_differential           NA=0.000
[2026-09-14 01:43:17] SMOKE: feature half_seconds_remaining       NA=0.000
[2026-09-14 01:43:17] SMOKE: feature qtr                          NA=0.000
[2026-09-14 01:43:17] SMOKE: feature shotgun                      NA=0.000
[2026-09-14 01:43:17] SMOKE: feature no_huddle                    NA=0.000
[2026-09-14 01:43:17] SMOKE: feature posteam_timeouts_remaining   NA=0.000
[2026-09-14 01:43:17] SMOKE: feature defteam_timeouts_remaining   NA=0.000
[2026-09-14 01:43:17] SMOKE: feature spread_line                  NA=0.000
[2026-09-14 01:43:17] SMOKE: feature total_line                   NA=0.000
[2026-09-14 01:43:17] SMOKE: target epa NA=0.0000
[2026-09-14 01:43:19] SMOKE: 209888 rows after NA drop; features=['down', 'ydstogo', 'yardline_100', 'score_differential', 'half_seconds_remaining', 'qtr', 'shotgun', 'no_huddle', 'posteam_timeouts_remaining', 'defteam_timeouts_remaining', 'spread_line', 'total_line']
[2026-09-14 01:43:19] SMOKE split sizes: 105010 / 35474 / 69404
[2026-09-14 01:43:25] SMOKE duel: {"ols": {"val_r2": 0.004225115957024905, "test_r2": 0.0023916174923110933}, "ridge": {"alpha": 0.1, "val_r2": 0.004225114897699722, "test_r2": 0.0023916181727130503}}
[2026-09-14 01:44:02] SMOKE gen 20/20 best_val_r2=-0.0001
[2026-09-14 01:44:03] SMOKE gp done in 37.5s val_r2=-0.0001 nodes=5 expr=(no_huddle + (total_line + down))
[2026-09-14 01:44:03] SMOKE OK — engine, shapes, timing verified
[2026-09-14 01:46:09] mode=smoke code_hash=20a4932cf3b7f4a0
[2026-09-14 01:46:18] SMOKE: 294989 rows from 6 files (15 cols)
[2026-09-14 01:46:20] SMOKE: 210719 scrimmage plays
[2026-09-14 01:46:20] SMOKE: feature down                         NA=0.004
[2026-09-14 01:46:20] SMOKE: feature ydstogo                      NA=0.000
[2026-09-14 01:46:20] SMOKE: feature yardline_100                 NA=0.000
[2026-09-14 01:46:20] SMOKE: feature score_differential           NA=0.000
[2026-09-14 01:46:20] SMOKE: feature half_seconds_remaining       NA=0.000
[2026-09-14 01:46:20] SMOKE: feature qtr                          NA=0.000
[2026-09-14 01:46:20] SMOKE: feature shotgun                      NA=0.000
[2026-09-14 01:46:20] SMOKE: feature no_huddle                    NA=0.000
[2026-09-14 01:46:20] SMOKE: feature posteam_timeouts_remaining   NA=0.000
[2026-09-14 01:46:20] SMOKE: feature defteam_timeouts_remaining   NA=0.000
[2026-09-14 01:46:20] SMOKE: feature spread_line                  NA=0.000
[2026-09-14 01:46:20] SMOKE: feature total_line                   NA=0.000
[2026-09-14 01:46:20] SMOKE: target epa NA=0.0000
[2026-09-14 01:46:22] SMOKE: 209888 rows after NA drop; features=['down', 'ydstogo', 'yardline_100', 'score_differential', 'half_seconds_remaining', 'qtr', 'shotgun', 'no_huddle', 'posteam_timeouts_remaining', 'defteam_timeouts_remaining', 'spread_line', 'total_line']
[2026-09-14 01:46:22] SMOKE split sizes: 105010 / 35474 / 69404
[2026-09-14 01:46:24] SMOKE duel: {"ols": {"val_r2": 0.004225115957024905, "test_r2": 0.0023916174923110933}, "ridge": {"alpha": 0.1, "val_r2": 0.004225114897699722, "test_r2": 0.0023916181727130503}}
[2026-09-14 01:46:28] SMOKE gen 20/20 best_val_r2=-0.0008
[2026-09-14 01:46:28] SMOKE gp done in 4.0s val_r2=-0.0008 nodes=2 expr=plog(total_line)
[2026-09-14 01:46:29] SMOKE OK — engine, shapes, timing verified
[2026-09-14 01:49:30] mode=waitrun code_hash=20a4932cf3b7f4a0
[2026-09-14 01:49:31] WAITRUN: polling for MANIFEST.md (sleep 180s, up to ~3h)
