# docs/arxiv-program/research/2026-09-21/arxiv-deep/0207-simulationbased-optimisation-of-batting-order-and.md
## What it is (1-2 sentences)
Deep read of arXiv:2604.13861v2 (Ganesh, 2026): an MDP framework that optimizes T20 cricket batting order and bowling plans directly in win/defend probability via phase-specific empirical outcome profiles, James–Stein shrinkage toward population priors, and Monte Carlo search. Ledger verdict: ADAPT — reject the cricket application, port the framework to an NFL in-game decision engine and "coach decision audit" content.
## Key metrics/methods (formulas where given, else "not specified")
- Bellman (batting): W^π(r,b,w) = Σ_{o∈Ω} p^π_{striker}(o) · W^π(T(s,o)); state s = (runs remaining, balls remaining, wickets in hand); Ω = {W, 0, 1, 2, 3, 4, 6}; W + D = 1 at shared states.
- Blended profile: p̃ = λ·p̂ + (1−λ)·p̄, data-adaptive λ (λ = 0 at n = 0 → pure population prior; λ → 1 as n → ∞; n_min = 50 deliveries). Exact λ formula unreadable in PDF extraction (reconstruction flagged, not a paper quote).
- Metropolis acceptance: A(Δ,T) = 1 if Δ > 0 else exp(Δ/T); simulated annealing 8,000 steps, linear cooling T0 = 0.05 → 1e-6.
- Monte Carlo: N = 50,000 trajectories/config (SE ≤ 0.22%, ≈0.15 s/config); fast pass N_fast = 5,000 (≈15 ms); refine N_refine = 30,000.
- Batting search: exhaustive enumeration of n! orderings (n ≤ 6), two-pass (3,000 sims screen → top-10 at 20,000 sims).
- Laplace smoothing α = 1 on per-player, per-phase outcome distributions.
## Data sources named
1,161 IPL matches (2008–2025), 273,735 ball-by-ball delivery records from Cricsheet.org (CC Attribution) via author's yorkr R package; target case-study matches excluded from estimation. Code: github.com/tvganesh/T20-MDPoptimisation.
## Findings (numbers and facts, not vibes)
- Case 1 (MI batting, KKR–MI 29 Mar 2026): optimal order (S. Yadav → Naman Dhir → Tilak Varma → H. Pandya) = 56.5% win; actual order = 52.4%, rank 5 of 6; worst = 50.0%. Gain +4.1 pp. Error: Naman Dhir (Death SR 204, +18 over any alternative) buried at position 6 faced 2 balls; 5 extra death balls ≈ +0.92 expected runs.
- Case 2 (GT bowling, GT–PBKS 31 Mar 2026): optimal plan 44.3% defend vs actual 39.1% → +5.2 pp (z ≈ 19.7). Errors: Rashid Khan (Death ER 8.40, Middle 6.58) deployed in Middle (margin 0.49 RPO) not Death (1.39 RPO); M. Prasidh Krishna (Death ER 9.79, worst of attack) bowled 4 overs incl. 2 death overs; Mohammed Siraj (2-over quota, competitive both phases) unused.
- Compute: full SA run incl. profile estimation under 5 minutes on commodity hardware; MC SE < 0.22% distinguishes ≥1 pp differences at SNR ≥ 4.5.
- Author-admitted limits: no momentum (i.i.d. balls), static historical profiles (no form/fatigue/pitch/opponent), opponent-agnostic, precommitted (non-adaptive) plans; 2008-era players pollute 2026 priors (equal-weighted 18 seasons).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: the "coach decision audit" lane — quantify real coaching decisions in WP points (NFL analog: 4th-down/2-pt/timeout audits).
- OTHER: "expected points ≠ win probability" thesis; James–Stein phase-shrinkage recipe for sparse situation cells; win-probability-optimal in-game decision engine design.
## Engine-actionable? (yes/no + one-line what)
Yes — port to NFL: shrunk situation-profile WP engine over state (score, time, down, distance, field position, timeouts) for 4th-down/2-pt/timeout decisions + weekly coach-decision audit content; acceptance gate = ≥5% Brier improvement over raw MLE on held-out 2026 drives and ≥80% agreement with 4th-down-bot on 200-play audit.
