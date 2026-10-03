# T7 SETUP NOTES (2026-09-13 ~20:45 CDT)

Protocol: `../deepseek-move37-phase6-response-01.md` §2 | Pre-reg: `PREREG.md` (2026-09-13)

## Environment

- Box: 2 CPUs, ~3GB RAM, shared. All compute run under `nice -n 10`.
- Packages (pip3 --break-system-packages): ripser 0.6.15, persim 0.3.8,
  scikit-learn 1.9.1 (+ joblib, Cython, hopcroftkarp, deprecated, threadpoolctl).
- First `import persim`/`import ripser` took 60–150s cold (transient slowness);
  warm imports 4–7s. Not a blocker.
- Smoke test (`smoke_test.py`): PASS. Synthetic torus cloud, 300 pts 3D:
  H0=300 feats, H1=98 feats, 0.62s per Rips call; PI 20x20 via default
  weight=persistence (matches protocol w(b,p)=p-b).
- Dry run (`dry_run.py`): PASS. Partial snapshot (1999–2000): 4 team-season PIs
  via 2 worker processes, CV-gate fn, RidgeCV, harness era_split all OK.
  Filter kept 63,921/91,627 plays.

## Timing calibration (real cloud: 1999 ARI, 982 plays)

- n=300, 20 reps: 54.4s per team-season (2.72s per Rips call).
- n=200, 20 reps: 14.5s per team-season (0.72s per Rips call).
- Protocol fallback invoked: n_sub=200 for all PI passes. Projected ~1.7h per
  PI pass at 2 workers on current box load (load avg ~14 during calibration).
- 3 PI passes required: true / permutation-shuffled / manhattan.

## DATA GATE

- Frozen snapshot `data_snapshot_20260913/MANIFEST.md` not present 20:45 CDT;
  downloader in progress (pbp 1999–2001 on disk). Poll loop armed
  (`poll_snapshot.sh`, 180s interval, ~4h budget). NO run on live/unversioned data.

## Design notes recorded for REPORT

- Permutation stage uses the same subsample seeds (42+i) as the true run, so the
  shuffled PI differs only by resampling noise (subsampling is iid, hence
  order-invariant). Per protocol §2.5 verbatim, kill fires if permuted
  increment is within ±0.01 of true increment.
- Era-stability check: models fit on train (<=2010) only; R² increment reported
  on train, validate, and test blocks. Sign flip across eras = regime artifact.
