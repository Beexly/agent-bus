# T3 — Regime-Switching Team States (Gaussian HMM) — FINAL REPORT

**Run ID:** MOVE-37-PHASE6-T3-01
**Date:** 2026-09-13/14 (executed 2026-09-14 03:13–04:16 UTC)
**Data:** frozen snapshot ONLY — `~/workspace/gse-discovery/data_snapshot_20260913/MANIFEST.md`
(2026-09-14T02:49:49Z). Era splits: train ≤2010 / val 2011–2017 / test 2018–2025.
**Seeds:** restart seeds 42+r, 123+r, 7+r for r=0..9 (10 restarts); duel harness seed 7.
**Code:** hand-written pooled Gaussian Baum-Welch, `t3_hmm_select.py` (sha 27f5cee95550e40f),
`t3_hmm_duel.py` (sha 2273d688a2582d55). One code fix mid-run: undefined `has_scores`
in duel script (prep bug, line 83) → `{"posteam_score","defteam_score"}.issubset(tg.columns)`.
Methodology unchanged.

---

## VERDICT: T3 KILLED — no regime structure. NULL: NFL team offense is unimodal in EPA/play at the game level.

## Kill-criteria audit

| Criterion | Threshold | Result | Pass? |
|---|---|---|---|
| K* selection | K* ≥ 2 in ≥ 70% of team-seasons | pooled K* = **1**; per-team 16/32 = 0.50 | **FAIL** |
| BIC margin | ΔBIC(K* vs K=1) > 10 | K=1 wins by **ΔBIC = 435.3** vs K=2 | **FAIL** (margin favors K=1) |
| Duel R² | HMM ≥ rolling-EPA + 0.02 on test 2018–2025 | numeric margin **+0.031**, but degenerate (see below) | vacuous — cannot save family |
| Persistence | π_cross > stationary + 0.05, 95% CI excl. zero | no states under K*=1 | vacuous |
| Era stability | direction consistent across eras | +0.027 val / +0.031 test, consistent | passes trivially |

## Key numbers

- **Pooled BIC** (N=14,546 team-game obs, 861 team-seasons, 1999–2025):
  K=1: **−4604.2** | K=2: −4168.9 | K=3: −2306.0 | K=4: +98.9 | K=5: +3096.5.
  BIC deteriorates monotonically — no evidence of regimes at any resolution.
- **Per-team**: 16 teams K*=1, 16 teams K*=2 (frac ≥2 = 0.50).
- **Flat-surface diagnostic**: 72.5% of team-K fits flat across restarts — identification
  is fragile everywhere.
- **Student-t (ν=6) robustness**: 13/32 teams change K* (all 2→1) → `flag_misspecification=true`.
  The Gaussian 2-state splits are heavy-tail artifacts: t-emissions erase all but KC, LA, NE
  (dBIC_vs1 ≈ 43/39/43). Pooled selection under t is unambiguously K=1.
- **Train-era fit**: K=1, μ=−0.0359, σ=0.2088 EPA/play — ordinary team-game offensive noise.
- **Duel — next-game EPA/play R², g≥4 prior games**:
  - test (2018–2025, n=3430): HMM(constant) **−0.0274** vs rolling-EPA(4) **−0.0587** → margin **+0.0313**
  - val (2011–2017, n=2842): HMM −0.0140 vs rolling −0.0408 → margin **+0.0269**
  - Elo-OLS baseline collapsed to the constant (margin ≈ 2e−15): pre-game Elo has
    ~zero linear relation to next-game offensive EPA/play.
- **Interpretation of the duel**: with K*=1 the "HMM prediction" is the pooled
  train-era mean — a constant, not a regime model. A constant beating rolling-4 by
  0.03 is shrinkage beating noise; **both R² are negative** in both eras, i.e. neither
  model beats the naive mean. There is no predictive signal to attribute to states.
  The family died at selection; the duel margin is vacuous under the prereg estimand.

## Obituary

No latent regime-switching structure in team offensive EPA/play. The mixture is
identified only when the components don't exist: BIC strongly prefers K=1 at pooled
and per-team majority level, 72.5% of fits sit on flat likelihood surfaces, and the
few per-team 2-state splits dissolve under Student-t emissions. Cross-season state
persistence is moot. Nothing to build on — family T3 closed.
