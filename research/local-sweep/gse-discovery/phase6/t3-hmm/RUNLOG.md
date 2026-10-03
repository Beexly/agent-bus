# RUNLOG — T3 (HMM regime-switching team states), MOVE-37-PHASE6-T3-01

## 2026-09-13 ~20:35 — setup
- Work dir: `~/workspace/gse-discovery/phase6/t3-hmm/`. PREREG.md written from
  protocol §1 (kill criteria verbatim) BEFORE any run.
- Data gate check: `data_snapshot_20260913/MANIFEST.md` NOT ready → full run
  blocked on frozen snapshot; polling per task (sleep 180s, up to ~4h).
- `pip install hmmlearn` blocked: PEP 668 externally-managed + pip install
  stalled pending user confirmation (session proc_5cb2e4c05124 killed).
  Protocol-approved fallback adopted: hand-written Gaussian Baum-Welch
  (~150 lines numpy, pooled across sequences with proper season-boundary
  forward/backward resets) in `t3_hmm_select.py`. No hmmlearn dependency.
- System python3 has numpy 1.26.4 / scipy 1.11.4 / sklearn 1.9.1 /
  pandas 2.1.4 / pyarrow — all code runs on system python3, no venv needed.
## 2026-09-13 ~20:52 — pip install actually succeeded (parent approved)
- venv now has hmmlearn 0.3.3 + nflreadpy 0.1.5 + sklearn 1.9.1.
- Decision: STAY with hand-written Baum-Welch (validated; pooled multi-sequence
  EM with season-boundary resets is native; hmmlearn fits one sequence at a
  time). Protocol permits either; recorded here as deliberate.
- Real-data smoke test on nflreadpy 2024 pbp (49,492 plays → 570 team-games →
  32 team-seasons): K∈{1,2,3} fits ran clean, BIC/flat-diagnostic code paths
  exercised. Mechanics verified on real column names. (Single-season BIC
  numbers are NOT a verdict.)

## 2026-09-13 ~20:50 — code complete, synthetic smoke test PASSED
- `t3_hmm_select.py`: loader (frozen snapshot only; asserts MANIFEST), pooled
  per-team Baum-Welch K∈{1..5} × 10 restarts (seeds 42..45,123..126,7..9),
  pooled BIC with p(K)=K(K-1)+2K+(K-1), flat-surface diagnostic, per-team K*
  + pooled K*, ΔBIC, frac teams K*≥2. Multiprocessing 2 workers, nice(10).
- `t3_hmm_duel.py`: pooled K* refit on train era (≤2010); duel on test
  2018–2025 (HMM forward-filter vs rolling-EPA(4) vs Elo-OLS if score cols
  exist); harness `duel_report` on per-obs −SE; val-era 2011–2017 repeat for
  era stability; cross-season persistence (argmax overlap vs 1/K, 95% CI);
  Student-t (ν=6) robustness of K* selection per team (3 restarts).
- Synthetic validation: true 2-state HMM (μ=[-0.05,0.10], σ=[0.10,0.12],
  A=[[0.8,0.2],[0.3,0.7]]), 30 seqs × 16 obs → recovered
  μ=[-0.044,0.124], σ=[0.101,0.116], A=[[0.85,0.15],[0.34,0.66]];
  BIC argmin = K=2 (BIC: K=1 −594.9, K=2 −601.8, K=3 −564.1). Posteriors
  row-normalized. forward_predict SE sane. Harness duel_report import OK.

## 2026-09-14 03:13–04:16 UTC — full T3 battery executed on frozen snapshot (VERIFY COMPLETE)
- Anti-duplication check: no t3_hmm process running; other lanes (t5, w2, w3, w4,
  move37 IRL) active on box — noted for CPU contention.
- 03:13: launched select+duel at nice 15; ~28 min to first team — effective nice
  was 19 (script os.nice(10) stacked on launch nice). Killed at "team 1/32 done:
  ARI" and relaunched at default nice (effective 10, polite on shared box).
- Stage 1 (t3_hmm_select.py): exit 0, elapsed 2330.9 s. 14,546 team-game obs,
  861 team-seasons. k_selection.json written.
- Duel stage crashed once: NameError `has_scores` (line 83, prep bug). Fixed to
  `{"posteam_score","defteam_score"}.issubset(tg.columns)` — methodology unchanged,
  fix committed in t3_hmm_duel.py (sha 2273d688a2582d55).
- Stage 2 (t3_hmm_duel.py): exit 0. duel_persistence.json + harness duel report
  `duel_t3-hmm_next_game_epa_play_negSE_2026-09-14.md` written.
- Results: Kstar_pooled=1 (pooled BIC K=1 −4604.2 vs K=2 −4168.9, Δ=435.3 in K=1's
  favor); per-team 16/32 K*=1; flat-surface frac 0.725; t-robustness 13/32 change
  (all 2→1), flag_misspecification=true; duel test margin +0.0313 / val +0.0269 but
  both R²<0 (constant-mean model, vacuous under K*=1); persistence moot.
- REPORT.md written: VERDICT KILLED — no regime structure. All kill criteria
  audited; only era-direction trivially passes.
