# docs/arxiv-program/research/2026-09-21/arxiv-deep/0448-the-blown-lead-paradox-a-pathwise.md
## What it is (1-2 sentences)
Deep-read ledger of Pipping-Gamón & Wyner (2026) "The Blown Lead Paradox: Conditional Laws for the Running Maximum of Binary Doob Martingales" (arXiv:2601.18774v4, UPenn): exact closed-form distributions for the path maximum of win-probability martingales, conditional on the team ultimately losing. Verdict: ADAPT as the formal calibration gate for GSE's in-game win-probability model — it tells whether an eventual loser's peak WP (e.g., Eagles' 78.4% in Super Bowl LVII) is anomalous or expected.
## Key metrics/methods (formulas where given, else "not specified")
- Models live WP as Doob martingale p_k = E[Y | F_k]; path maximum M_N = max p_k; first-passage τ_x = inf{k ≥ 0 : p_k ≥ x}.
- Continuous unconditional: F_M(x) = 0 for x < p_0; 1 − p_0/x for x ∈ [p_0,1); 1 at x=1; atom P(M=1) = p_0.
- Continuous conditional (given loss): F_{M|Y=0}(x) = 1 − (p_0/(1−p_0))·((1−x)/x) for x ∈ [p_0,1).
- Two-player eventual-loser maximum: for p_0 ≥ 1/2, F_{M_λ}(x) = 0 on [0,1−p_0); 1 − (1−p_0)/x on [1−p_0, p_0); 2 − 1/x on [p_0,1); 1 at x=1.
- n-player eventual-winner minimum: F_{M_ω}(x) = Σ_{i:x≥p_0^(i)} p_0^(i) + (x/(1−x))·Σ_{i:x<p_0^(i)} (1−p_0^(i)) on [0, max_i p_0^(i)).
- Derived via optional stopping at τ_x ∧ N, with explicit discrete-time correction terms for last-step crossings and overshoots.
## Data sources named
No new dataset in main text (purely martingale-theoretic). The only empirical anchor: ESPN's 2023 win-probability graphic showing the Eagles' peak 78.4% WP in Super Bowl LVII (accessed 2026-01-22). NFL/NBA empirical validation, simulations, and formal testing procedures live in the Supplementary Material — not present in this cached full text, so unverifiable from the main text. No code repository named.
## Findings (numbers and facts, not vibes)
- Symmetric games (p_0 = 1/2): P(M_λ ≥ 2/3) = 1/2 — half of all evenly matched games should see the eventual loser reach ≥67% WP. Half of three-player winners dipped to ≤20% WP at some point (P(M_ω ≤ 0.2) = 1/2).
- Eagles' 78.4% peak: F_{M_λ}(0.784) = 2 − 1/0.784 ≈ 0.7245, so P(M_λ ≥ 0.784) ≈ 0.2755 — mildly unusual but far from extraordinary under correct calibration (contradicts the "collapse" narrative).
- On losing trades with p_0 = 1/2: P(M_loss ≥ 2/3 | Y = 0) = 1/2 (trading diagnostic).
- Replaces classical Doob/Ville maximal inequalities (tail bounds only) with full distributions.
- Limitations flagged: exact identities need continuous paths; NFL WP updates are coarse play-by-play jumps (30+ points on a pick-six), so only discrete-time inequalities may apply loosely; binary terminal outcomes only (no ties); empirical tightness of discrete bounds on real football paths unconfirmed (supplement not cached); asymmetric case needs accurate p_0 (error propagates through the kink at x = p_0).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- Pathwise calibration diagnostic for GSE's in-game WP model; gates when X's live coverage may use "collapse" framing — OTHER (model calibration + content discipline).
- Proposed improvement: extend the ternary-cover-probability pathwise benchmark for GSE's live spread/total surfaces — OTHER.
- No QB behavior, coaching, OL, trust-quote, or scheme content in the file.
## Engine-actionable? (yes/no + one-line what)
Yes — build a pathwise calibration monitor: per 2023–2024 NFL game compute eventual loser's peak WP M_λ vs. theoretical F_{M_λ} (stratified by pre-game favorite tier), KS test + exceedance rates at 2/3, 3/4; adopt as standing gate for live-WP model updates iff KS non-significant at α=0.05 in ≥2 of 3 tiers and overshoot >5 WP points in <25% of games.
