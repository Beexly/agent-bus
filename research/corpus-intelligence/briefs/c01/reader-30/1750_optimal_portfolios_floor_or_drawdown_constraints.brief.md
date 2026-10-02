# arxiv-program/research/2026-09-21/arxiv-deep/1750-optimal-portfolios-floor-or-drawdown-constraints.md

## What it is (1-2 sentences)
Deep-read ledger of Vladimir Cherny & Jan Obłój (Oxford, 2013), arXiv:1305.6831 — theory paper proving that for a long-run investor maximizing asymptotic growth of expected utility, a floor constraint (wealth must dominate a benchmark at all times) leaves the optimal long-run growth rate (CER) unchanged. Verdict: ADAPT — the floor-irrelevance theorem plus the explicit ε-mixture construction gives GSE an asymptotically costless bankroll floor, but the continuous-time turnpike machinery needs discrete-time translation for weekly betting.

## Key metrics/methods (formulas where given, else "not specified")
- Criterion: R_U(V) := limsup_{T→∞} (1/T) log E[U(V_T)] (1); optimal rate = Certainty Equivalent Rate (CER).
- Theorem 2.2 (floor irrelevance): sup_{V∈A(v_0)} R_U(V) = sup_{V∈A_G(v_0)} R_U(V) (4) for floor G_t ≤ X_t ∈ A(v_0(1−ε)); explicit optimizer V̂_t := ε ξ̂_t + X_t (ε weight on unconstrained optimizer ξ̂, rest on floor-dominating process X).
- Proof device: the ε-cost vanishes at rate (1/T)(−γ log ε) → 0 — the floor is a fixed additive term under the log, hence asymptotically free.
- Risk-sensitive link: for U(x)=x^p/p, (1/p)log E[e^{pF_T}] = E[F_T] + (p/2)Var(F_T) + O(p²) — CER criterion ≈ mean–variance on log wealth to first order.
- Remark 2.4: drawdown solution = Azéma–Yor transform of the floor solution = Azéma–Yor transform of the unconstrained solution — companion to paper 1749's drawdown governor.
- Proposed GSE spec: each week allocate ε of capital to the growth-optimal sizer (1744/1746) and (1−ε) to cash reserved against the floor (start ε = 0.8, tune by finite-horizon backtest); the ε-sleeve itself runs under 1749's α-drawdown governor; improvement experiment: adaptive ε_t (CPPI-style cushion multiplier) vs fixed ε.

## Data sources named
- None — theory paper (continuous asset processes). No empirical data, no code.

## Findings (numbers and facts, not vibes)
- No numerical results — theoretical equality (4), explicit ε-mixture optimizer, long-run optimality characterizations, the three-problem chain in Remark 2.4.
- Limitations: continuous-time/continuous-path setup; floor must be dominated by an admissible wealth process (trivial for a constant cash floor); no finite-horizon guidance on choosing ε (practically controls floor tightness); no estimation error; turnpike convergence speed unquantified.
- Reproducible test: 2023–2025 NFL backtest of the 1744/1746 sizer — unconstrained vs ε-mixture floor (ε ∈ {0.5, 0.8, 0.9}, floor = initial bankroll); verify min(B_t/B_0) ≥ 1.0 for floored version and that the growth gap vs unfloored shrinks with window length (1-season vs 3-season).
- GSE overlap: companion to 1749; GSE has no capital-guarantee machinery — new capability: hard-guarantee "never below starting bankroll" with (asymptotically) zero growth cost.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: bankroll/sizing infrastructure — asymptotically free floor guarantee (ε-mixture wrapper, ~0.5 day effort) complementing the 1749 drawdown governor; directly serves the autonomous-money mandate's capital-protection needs.
- OTHER: calibration-state doctrine note — the paper itself warns that asymptotic freeness says nothing about finite-horizon ε choice; gate ADOPT on the empirical test (floored sizer within 90% of unfloored 3-season terminal log growth, min(B_t/B_0) ≥ 0.99 always).

## Engine-actionable? (yes/no + one-line what)
Yes — build the ε-mixture floor wrapper around the growth-optimal sizer (floor = initial bankroll, ε tuned by backtest), gated on the reproducible test above before capital touches it.
