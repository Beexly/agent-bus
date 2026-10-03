# T3 — Regime-Switching Team States (Gaussian HMM) — PREREGISTRATION

**Run ID:** MOVE-37-PHASE6-T3-01
**Date:** 2026-09-13
**Protocol source:** `deepseek-move37-phase6-response-01.md` §1 (DeepSeek MOVE-37-PHASE6-01)
**Program:** `PHASE6_EXPANDED_PROGRAM.md` §§4,7
**Seeds:** 42, 123, 7 (numpy + hmmlearn `random_state`)
**Data:** frozen snapshot ONLY — `~/workspace/gse-discovery/data_snapshot_20260913/MANIFEST.md`
(must exist before any full run; no live/unversioned nflverse data).
**Era splits (mandatory):** train ≤2010 / validate 2011–2017 / test 2018–2025.

---

## 1. Exact estimand

For each team-season (team i, season t ∈ {1999..2025}), a latent state sequence
z_{i,t,1},...,z_{i,t,G} (G=16 pre-2021, 17 from 2021) over {1..K}.
Parameters of interest: transition matrix A (A_{jk}=P(z_{g+1}=k|z_g=j)) and
emission parameters {(μ_k, σ²_k)} on game-level offensive EPA/play.
Orientation: POSTEAM's offense only. Defense is not modeled.

Persistence estimand: π_cross(i) = P(state at game 1 of season T+1 = state at
game G of season T), tested against stationary baseline π_stat = 1/K and
within-season persistence π_within(i).

## 2. Identification argument

Mixture identified iff the K emission Gaussians are separable (means separated
by more than the noise floor). If the true DGP is unimodal (K=1), any K≥2 is a
spurious split — hence BIC selection is load-bearing and K=1 is a first-class
finding, not a failure.

## 3. Selection rule

- Fit GaussianHMM for K ∈ {1,2,3,4,5}, 10 random restarts per (team-season, K).
- BIC(K) = −2·logL̂(K) + p(K)·log(N); p(K) = K(K−1) + 2K + (K−1); N = total
  team-game observations.
- K* = argmin_K BIC (pooled). K=1 permitted.

## 4. Diagnostics / boundary behavior

- Flat surface: (best−median)/|best| < 0.01 across 10 restarts → report
  "flat surface, no identification", skip persistence test.
- Misspecification: also fit Student-t emissions; flag if K* selection changes.
- Report median and IQR of final log-likelihood across restarts.

## 5. Duel (shared test era 2018–2025)

Metric: next-game EPA/play R², given games 1–g predict game g+1.
Baselines: (1) Elo-OLS; (2) rolling-EPA(4); (3) HMM posterior-weighted
forward-filter prediction.
Win margin: HMM ≥ rolling-EPA + **0.02 R²**.

## 6. KILL CRITERIA (verbatim from protocol §1.5)

| Criterion | Threshold | Verdict if failed |
|---|---|---|
| K* selection | K* ≥ 2 in ≥ 70% of team-seasons (fit per team) | If K*=1 in majority, "no regime structure" — family partially dies |
| BIC margin | ΔBIC(K* vs K=1) > 10 | If < 10, K=1 preferred — no regime structure |
| Duel R² | HMM ≥ rolling-EPA + 0.02 on 2018–2025 test | If < 0.02, no improvement — family dies |
| Persistence | P(cross-season state persistence) > stationary + 0.05 with 95% CI excluding zero | If not, "roster-level reset, not program-level" — a finding |
| Era stability | Effect direction consistent across train/val/test splits | If sign flips, regime artifact — family dies |

NULL interpretations (pre-registered):
- If K=1: "NFL team offense is unimodal in EPA/play; no latent regime structure
  detectable at the game level."
- If K≥2 but duel fails: "states exist but do not improve prediction over
  rolling mean."

## 7. Notes

- Team-seasons with G < 16 (expansion teams, 1999 relocations) included but
  flagged; convergence failures recorded, not imputed.
- All output: JSON summary + REPORT.md. Honest NULL → one-line obituary.
- Code hash, data snapshot ref, and seeds recorded in RUNLOG.md for every run.
