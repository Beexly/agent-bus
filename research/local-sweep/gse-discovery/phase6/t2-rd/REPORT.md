# T2-RD REPORT (full)

Source: snapshot | Seed: 20260913 | 2026-09-14 05:03 UTC

## RD primary estimates (pooled, local-linear, triangular kernel, HC1 SE)
- sticks_c3_conversion: tau=0.0137 95%CI [-0.0053, 0.0327] p=0.1581 q=0.3389 h=3 nL/nR=52291/46613 flag=- era_stable=True
- sticks_c3_pass: tau=0.0123 95%CI [-0.0004, 0.0251] p=0.05855 q=0.1464 h=3 nL/nR=52291/46613 flag=- era_stable=False
- sticks_c3_epa: tau=0.0012 95%CI [-0.0708, 0.0731] p=0.9749 q=0.9749 h=3 nL/nR=52290/46612 flag=- era_stable=False
- sticks_c2_conversion: tau=-0.0093 95%CI [-0.0287, 0.0102] p=0.3499 q=0.4772 h=3 nL/nR=37264/46488 flag=- era_stable=True
- sticks_c2_pass: tau=0.0979 95%CI [0.0825, 0.1134] p=2.143e-35 q=3.215e-34 h=3 nL/nR=37264/46488 flag=- era_stable=True
- sticks_c2_epa: tau=-0.0046 95%CI [-0.0765, 0.0674] p=0.901 q=0.9654 h=3 nL/nR=37263/46488 flag=- era_stable=False
- fgedge_c35_fga: tau=0.0146 95%CI [-0.0548, 0.0840] p=0.6792 q=0.7837 h=3 nL/nR=4221/2986 flag=- era_stable=False
- fgedge_c35_epa: tau=-0.1143 95%CI [-0.4500, 0.2215] p=0.5048 q=0.631 h=3 nL/nR=4221/2986 flag=- era_stable=False
- goal_c2_td: tau=-0.0206 95%CI [-0.0517, 0.0105] p=0.1935 q=0.3438 h=3 nL/nR=15282/17591 flag=- era_stable=False
- goal_c2_rush: tau=-0.0207 95%CI [-0.0528, 0.0114] p=0.2063 q=0.3438 h=3 nL/nR=15282/17591 flag=- era_stable=False
- goal_c2_epa: tau=-0.0568 95%CI [-0.1648, 0.0511] p=0.3021 q=0.4531 h=3 nL/nR=15282/17591 flag=- era_stable=False

Manipulation check (FG-EDGE fg_attempt |tau|>0.15): FAIL (tau=0.0146)

## Placebo verdicts
- sticks_c3_conversion: 0/2 placebos fire (none)
- sticks_c3_pass: 0/2 placebos fire (none)
- sticks_c3_epa: 0/2 placebos fire (none)
- sticks_c2_conversion: 0/2 placebos fire (none)
- sticks_c2_pass: 0/2 placebos fire (none)
- sticks_c2_epa: 0/2 placebos fire (none)
- fgedge_c35_fga: 0/2 placebos fire (none)
- fgedge_c35_epa: 1/2 placebos fire (placebo_fgedge_c42_epa)
- goal_c2_td: 1/2 placebos fire (placebo_goal_c8_td)
- goal_c2_rush: 0/2 placebos fire (none)
- goal_c2_epa: 0/2 placebos fire (none)

## DML results
### play_action (play-action) — DROPPED: column absent
- theta_train_q: nan
- D2_q: nan
### no_huddle (no-huddle (tempo proxy)) — ok
- n_total: 1130621
- theta_train: 0.03601205147276973
- theta_train_se: 0.017015166774591722
- theta_train_p: 0.03430504658213322
- theta_train_q: 0.10291513974639968
- theta_val: 0.0532081454916638
- theta_test: 0.04753685935749324
- naive_train: 0.01990561949052753
- naive_test: 0.049995690883320135
- D1_absdiff: 0.0024588315258268975
- D1_kill: True
- D2_mse_m0: 1.7041178161060113
- D2_mse_naive: 1.7039091282595167
- D2_mse_dml: 1.7037858483490242
- D2_kill: False
- D2_p: 1.2715689992789997e-09
- D2_q: 4.7683837472962485e-09
- D3_placebo_theta: 0.028583428668830492
- D3_kill: True
- D4_signs: [1.0, 1.0, 1.0]
- D4_stable: True
### shotgun (shotgun) — ok
- n_total: 1130621
- theta_train: 0.05141178650625619
- theta_train_se: 0.0074436591864544795
- theta_train_p: 4.957449706172651e-12
- theta_train_q: 3.718087279629488e-11
- theta_val: 0.054543062701164505
- theta_test: 0.027180053640134476
- naive_train: -0.016753529900016696
- naive_test: 0.003396221852416161
- D1_absdiff: 0.023783831787718316
- D1_kill: False
- D2_mse_m0: 1.7041178161060113
- D2_mse_naive: 1.7050027298501775
- D2_mse_dml: 1.7033137646439676
- D2_kill: False
- D2_p: 2.6331882606014213e-11
- D2_q: 1.3165941303007107e-10
- D3_placebo_theta: 0.0010995197922854002
- D3_kill: False
- D4_signs: [1.0, 1.0, 1.0]
- D4_stable: True

## Verdict
Discoveries: ['sticks_c2_pass', 'DML shotgun']
- OBITUARY: sticks_c3_conversion: NULL (BH q>0.05)
- OBITUARY: sticks_c3_pass: NULL (BH q>0.05; era sign-flip)
- OBITUARY: sticks_c3_epa: NULL (BH q>0.05; era sign-flip)
- OBITUARY: sticks_c2_conversion: NULL (BH q>0.05)
- OBITUARY: sticks_c2_epa: NULL (BH q>0.05; era sign-flip)
- OBITUARY: fgedge_c35_fga: NULL (BH q>0.05; era sign-flip; manipulation check failed)
- OBITUARY: fgedge_c35_epa: NULL (BH q>0.05; placebo fires: placebo_fgedge_c42_epa; era sign-flip; manipulation check failed)
- OBITUARY: goal_c2_td: NULL (BH q>0.05; placebo fires: placebo_goal_c8_td; era sign-flip)
- OBITUARY: goal_c2_rush: NULL (BH q>0.05; era sign-flip)
- OBITUARY: goal_c2_epa: NULL (BH q>0.05; era sign-flip)
- OBITUARY: DML play_action: DROPPED (DROPPED: column absent)
- OBITUARY: DML no_huddle: KILLED (D3 placebo fired: pipeline broken; BH q>0.05 on theta_DML: null)

## Runlog
- source=snapshot seasons=1999..2025 n=1137005 seed=20260913 driver=resume_driver
- code_hashes: common.py=cfa9c3eb2463 rd.py=23f3b1d31a29 dml.py=e0a02efdd1bc run_all.py=588f7c553db4
- snapshot_manifest_firstline=# GSE Phase 6 Data Snapshot — 2026-09-13
- RD battery done
- DML play_action: done status=DROPPED: column absent
- DML no_huddle: done status=ok
- DML shotgun: done status=ok
- elapsed_s=2632.9
