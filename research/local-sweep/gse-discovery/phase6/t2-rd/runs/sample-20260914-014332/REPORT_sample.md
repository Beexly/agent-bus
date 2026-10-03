# T2-RD REPORT (sample)

Source: nflreadpy-live | Seed: 20260913 | 2026-09-14 01:47 UTC

## RD primary estimates (pooled, local-linear, triangular kernel, HC1 SE)
- sticks_c3_conversion: tau=0.0525 95%CI [-0.0204, 0.1254] p=0.1581 q=0.4347 h=4 nL/nR=2105/2418 flag=- era_stable=None
- sticks_c3_pass: tau=0.0502 95%CI [0.0019, 0.0986] p=0.04178 q=0.1651 h=4 nL/nR=2105/2418 flag=- era_stable=None
- sticks_c3_epa: tau=0.0802 95%CI [-0.2043, 0.3647] p=0.5806 q=0.7097 h=4 nL/nR=2105/2418 flag=- era_stable=None
- sticks_c2_conversion: tau=-0.0326 95%CI [-0.0969, 0.0318] p=0.3209 q=0.5088 h=5 nL/nR=1494/3029 flag=UNDERPOWERED era_stable=None
- sticks_c2_pass: tau=0.1651 95%CI [0.1104, 0.2197] p=3.182e-09 q=3.5e-08 h=5 nL/nR=1494/3029 flag=UNDERPOWERED era_stable=None
- sticks_c2_epa: tau=0.0078 95%CI [-0.2221, 0.2378] p=0.9467 q=0.9467 h=5 nL/nR=1494/3029 flag=UNDERPOWERED era_stable=None
- fgedge_c35_fga: tau=-0.0635 95%CI [-0.2747, 0.1477] p=0.5558 q=0.7097 h=5 nL/nR=260/226 flag=UNDERPOWERED era_stable=None
- fgedge_c35_epa: tau=0.2145 95%CI [-0.8525, 1.2815] p=0.6936 q=0.7629 h=5 nL/nR=260/226 flag=UNDERPOWERED era_stable=None
- goal_c2_td: tau=0.0559 95%CI [-0.0483, 0.1602] p=0.2929 q=0.5088 h=5 nL/nR=584/1169 flag=UNDERPOWERED era_stable=None
- goal_c2_rush: tau=-0.1071 95%CI [-0.2117, -0.0024] p=0.04503 q=0.1651 h=5 nL/nR=584/1169 flag=UNDERPOWERED era_stable=None
- goal_c2_epa: tau=0.1769 95%CI [-0.1745, 0.5283] p=0.3238 q=0.5088 h=5 nL/nR=584/1169 flag=UNDERPOWERED era_stable=None

Manipulation check (FG-EDGE fg_attempt |tau|>0.15): FAIL (tau=-0.0635)

## Placebo verdicts
- sticks_c3_conversion: 0/2 placebos fire (none)
- sticks_c3_pass: 0/2 placebos fire (none)
- sticks_c3_epa: 0/2 placebos fire (none)
- sticks_c2_conversion: 0/2 placebos fire (none)
- sticks_c2_pass: 0/2 placebos fire (none)
- sticks_c2_epa: 0/2 placebos fire (none)
- fgedge_c35_fga: 0/2 placebos fire (none)
- fgedge_c35_epa: 0/2 placebos fire (none)
- goal_c2_td: 0/2 placebos fire (none)
- goal_c2_rush: 0/2 placebos fire (none)
- goal_c2_epa: 0/2 placebos fire (none)

## DML results
### play_action (play-action) — DROPPED: column absent
### no_huddle (no-huddle (tempo proxy)) — ok-quick
- n_total: 30000
- dml_theta: 0.0404498746521435
- dml_se: 0.031206082301427164
- dml_p: 0.1949005105623216
- naive: 0.039293798681969666
- placebo_theta: 0.025699870360677547
### shotgun (shotgun) — ok-quick
- n_total: 30000
- dml_theta: 0.034863046351643175
- dml_se: 0.021025906627242682
- dml_p: 0.09729737439185117
- naive: -0.014858803330848833
- placebo_theta: -0.016355304892989603

## Verdict
Discoveries: NONE

## Runlog
- source=nflreadpy-live seasons=2023..2023 n=44002 seed=20260913
- code_hashes: common.py=82b7d750beb0 rd.py=3e2c774bd252 dml.py=dc87c2b2629c run_all.py=588f7c553db4
- elapsed_s=212.6
