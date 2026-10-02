# docs/arxiv-program/research/2026-09-21/arxiv-deep/0448-the-blown-lead-paradox-a-pathwise.md
## What it is (1-2 sentences)
Deep-read of Pipping-Gamón & Wyner (2026, arXiv:2601.18774v4, Univ. of Pennsylvania) — exact distributional laws for the running maximum of win-probability (Doob) martingales, motivated by ESPN's 78.4% peak WP for the Eagles in Super Bowl LVII, designed as a pathwise calibration diagnostic for live in-game win-probability models. Ledger verdict: ADAPT as the formal gate for GSE's own in-game WP model.

## Key metrics/methods (formulas where given, else "not specified")
- Model the live WP sequence as the Doob martingale p_k = P(Y=1 | F_k), bounded in [0,1], p_0 = P(Y=1) ∈ (0,1), p_N = Y ∈ {0,1}; path maximum M_N = max_{0≤k≤N} p_k; first-passage time τ_x = inf{k ≥ 0 : p_k ≥ x}.
- Discrete-time unconditional (Theorem 1/5): F_{M_N}(x) ≥ 1 − p_0/x for x ∈ [p_0, 1); F_{M_N}(x) = 0 for x < p_0; atom P(M_N = 1) = p_0. Equality iff P(τ_x = N) = 0 and p_{τ_x} = x a.s. on {τ_x < N}.
- Discrete-time conditional (Theorem 2/6): F_{M_N|Y=0}(x) ≥ 1 − (p_0/(1−p_0))·((1−x)/x) for x ∈ [p_0, 1).
- Continuous-path unconditional (Theorem 3/7): F_M(x) = 0 for x < p_0; 1 − p_0/x for x ∈ [p_0, 1); 1 at x = 1; atom P(M = 1) = p_0.
- Continuous-path conditional (Theorem 4/8): F_{M|Y=0}(x) = 1 − (p_0/(1−p_0))·((1−x)/x) for x ∈ [p_0, 1); 0 below p_0; 1 at x = 1. On {Y=0} the process never attains 1 a.s.
- Two-player eventual-loser maximum (eq 1, w.l.o.g. p_0 ≥ 1/2): F_{M_λ}(x) = 0 for 0 ≤ x < 1−p_0; 1 − (1−p_0)/x for 1−p_0 ≤ x < p_0; 2 − 1/x for p_0 ≤ x < 1; 1 at x = 1.
- Symmetric case p_0 = 1/2: F_{M_λ}(x) = 2 − 1/x on [1/2, 1); e.g. P(M_λ ≥ 2/3) = 1/2 — half of all symmetric games should see the eventual loser reach ≥ 67% win probability.
- n-player eventual-winner minimum (symmetric p_0^{(i)} = 1/n): F_{M_ω}(x) = (n−1)x/(1−x) on [0, 1/n); e.g. n = 3: P(M_ω ≤ 0.2) = 1/2.
- Trading diagnostic (eq 9): M_loss on losing trades obeys the conditional law; e.g. p_0 = 1/2: P(M_loss ≥ 2/3 | Y = 0) = 1/2.
- Assumptions: (p_k) is an exact Doob martingale (real models approximate it — misspecification shows up as empirical deviation, which is the diagnostic's feature); exact identities additionally require path regularity (continuity, or no terminal-step crossings and no overshoots); binary terminal outcomes (no ties); in two-player extension exactly one team wins.

## Data sources named
No new dataset collected. Proofs in the main text (Appendices A–D); empirical validation on NFL and NBA data plus simulation details claimed in the separate Supplementary Material (Pipping-Gamón & Wyner 2026) — referenced but not present in the cached full text. Only empirical anchor in main text: the ESPN 2023 win-probability graphic for Super Bowl LVII (accessed 2026-01-22), which assigned the Eagles a peak 78.4% WP early in the third quarter. No code repository named.

## Findings (numbers and facts, not vibes)
- The paper's "results" are exact closed forms, not fitted estimates: symmetric two-player games — under perfect calibration, P(M_λ ≥ 2/3) = 1/2; half of all evenly matched games feature the eventual loser reaching ≥ 67% WP.
- Eagles' 78.4% peak: F_{M_λ}(0.784) = 2 − 1/0.784 ≈ 0.7245, so P(M_λ ≥ 0.784) ≈ 0.2755 — mildly unusual but far from extraordinary under correct calibration (refuting the naive "collapse" framing).
- Symmetric three-player games: P(M_ω ≤ 0.2) = 1/2 — half of winners dipped to ≤ 20% WP at some point.
- Replaces classical Doob/Ville maximal inequalities (which control only the upper tail) with full distributions.
- Limitations: NFL WP updates are coarse (play-by-play jumps, e.g., a pick-six can move WP 30+ points) so discrete-time bounds may be loose; NFL ~1% ties are unhandled (binary outcomes only); NFL/NBA empirical validation not verified in this read (supplement not cached); the p_0 = 1/2 shockers need asymmetric piecewise form with estimated p_0 — small p_0 error propagates through the kink at x = p_0.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pathwise calibration monitor for GSE's in-game WP model (empirical M_λ CDF vs. theoretical law, KS tests, exceedance rates at 2/3, 3/4, 0.8, 0.9, stratified by pre-game favorite tiers; flag weeks where P(M_λ ≥ 2/3) deviates from tier-averaged theoretical value) — OTHER (calibration methodology; INFERENCE: no QB/coaching behavior content, though it polices the "collapse" narrative in live game coverage).
- Collapse-narrative discipline for X live-game coverage (peak WP has evidentiary value only against the benchmark, never naive fixed-time intuition) — OTHER (editorial/content standard).

## Engine-actionable? (yes/no + one-line what)
Yes — build the pathwise calibration monitor (~2–3 days): compute eventual-loser peak WP per game on 2022–2025 in-game WP paths, KS-test against the paper's theoretical CDF by pre-game favorite tier, and adopt as the standing gate for live-WP model updates if KS is non-significant in ≥2 of 3 tiers and overshoot > 5 WP points occurs in < 25% of games.
