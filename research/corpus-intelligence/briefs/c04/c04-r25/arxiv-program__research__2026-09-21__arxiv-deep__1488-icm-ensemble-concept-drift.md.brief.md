# docs/arxiv-program/research/2026-09-21/arxiv-deep/1488-icm-ensemble-concept-drift.md
## What it is (1-2 sentences)
Deep-read ledger of Eliades & Papadopoulos (2024) "ICM Ensemble with Novel Betting Functions for Concept Drift" (arXiv:2406.15760v1). Verdict: ADAPT — adapt the single-ICM (not the full 10-classifier ensemble) with the CAUTIOUS betting function as a statistically-valid drift monitor over GSE's engine pick/residual stream; the 10-classifier retraining machinery is overkill for a weekly-prediction setting.

## Key metrics/methods (formulas where given, else "not specified")
- Inductive Conformal Martingale (ICM): nonconformity αⱼ = −p̃ⱼ (negative posterior of true label); smoothed p-value pⱼ = (|{αᵢ>αⱼ}| + Uⱼ·|{αᵢ=αⱼ}|)/(j−k), Uⱼ∼U(0,1).
- Martingale Sₙ = Πᵢ₌₁ⁿ fᵢ(pᵢ), updated online as Sₙ = Sₙ₋₁·fₙ(pₙ); betting functions must satisfy ∫₀¹ fᵢ(p)dp = 1, fᵢ ≥ 0 ⇒ E[Sₙ₊₁|history] = Sₙ under exchangeability.
- Ville's inequality: P(∃n: Sₙ ≥ C) ≤ 1/C; alarm at Sₙ > 100 ⇒ reject exchangeability at 1% significance.
- CAUTIOUS betting function: hₙ = 1 if Sⁿ⁻¹/minₖSⁿ⁻ᵏ ≤ ε else fₙ; ε = 100, window W = 5000; multi-estimator variant picks argmax estimator (interpolated histograms κ ∈ {5,10,15}, kNN k ∈ {5,10,15}) only when best windowed profit > ε.
- Theorem: under uniform p-values, any betting function f≠1 gives S∞≡0 a.s. (justifies abstaining when evidence is weak).
- Acceptance gate: adapt if offline replay fires an alarm within 3 weeks of the 2024 kickoff-rule change on the TOTALS stream with ≤1 false alarm/season on 2024–2026 data.

## Data sources named
STAGGER (synthetic, MOA framework, 1,000,000 instances, drift every 10,000 examples, 99 drifts, 0%/10% noise); SEA (synthetic, 1,000,000 instances, drift every 250,000 examples, 3 drifts); ELEC (real, 45,312 instances, Australian NSW electricity market); AIRLINES (real, 539,383 US flight records Oct 1987–Apr 2008). No repo — code "available upon request."

## Findings (numbers and facts, not vibes)
- Table 4 (10-ICM ensemble, 10% noise): STAGGER 0.949, SEA 0.920, ELEC 0.768, AIRLINES 0.651 — matches/beats prior ICM work; statistically significant vs all competitors on SEA (p≈0).
- On ELEC loses to DWM-NB (0.800) and ARFHT (0.857); on AIRLINES dominates all but ARFHT (0.666).
- Betting-function shootout: MIHNN best on STAGGER/SEA (p≈0 vs others); MIH best on AIRLINES (p<1% vs all), CAU worst (outperformed by all, p≈0).
- kNN-alone "generally lowers performance and often fails to detect many changes" — works only inside the cautious multi-estimator wrapper.
- Caveats named in the ledger: SOTA baselines quoted from prior papers with different simulation counts (not a controlled re-run); the ρ=−1 "perfect negative correlation" hypothesis-test assumption is arbitrary; retraining assumes sudden drift and is poisoned by gradual drift; NFL seasons give ~17 observations/season so martingale detection latency on slow regime change may be poor.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Proposed GSE adaptation: nonconformity α = 1 − p̂(y_true) on engine picks; separate ICM streams per market (SPREAD/MONEYLINE/TOTAL) since drift regimes differ (totals drift with rule/pace changes; spreads with market efficiency) — COACHING/SCHEME (rule/pace-change regime breaks are scheme/coaching-adjacent; INFERENCE on the tagging).
- Market-relative improvement experiment: α = |p̂_engine − q_market| on posted picks, so the ICM tests the *edge* distribution and fires when GSE's edge regime changes (e.g., market catching up to a GSE angle) — OTHER (calibration/edge monitoring, no behavioral content).
- Paper itself is a general streaming-classification method; its benchmark results carry no football behavioral signal — OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — build a lightweight ICM monitor (single interpolated-histogram + CAUTIOUS wrapper) over the weekly engine pick/residual stream as a 1%-significance tripwire that triggers a recalibration job and analyst alert on model decay; ~2 days, no new data needed.
