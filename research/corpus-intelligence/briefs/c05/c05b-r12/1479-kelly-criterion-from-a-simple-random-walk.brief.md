# arxiv-program/research/2026-09-21/arxiv-deep/1479-kelly-criterion-from-a-simple-random-walk.md
## What it is (1-2 sentences)
Deep read of Lototsky & Pollok (arXiv:2002.03448v1), a pure theory paper generalizing the Kelly criterion — the fixed fraction maximizing long-term wealth growth — from simple Bernoulli bets to general return distributions, continuous-time compounding, and high-frequency Lévy-process limits. Verdict in file: ADAPT (sizing lane).
## Key metrics/methods (formulas where given, else "not specified")
- Discrete wealth: Wₙ^f = Πₖ₌₁ⁿ (1 + f rₖ), f ∈ [0,1] (NS-NL: no shorting, no leverage). Long-term growth rate gᵣ(f) = E ln(1 + f r) (2.5).
- Admissibility: P(r ≥ −1)=1, P(r>0)>0, P(r<0)>0, E|ln(1+r)|<∞ (2.2)–(2.4).
- Prop 2.1/Thm 2.1: Wₙ^f = exp(n gᵣ(f)(1+εₙ)) a.s.; CLT refinement Wₙ^f = exp(n gᵣ(f) + √n σᵣ(f)ζₙ + ǫₙ), σᵣ²(f) = E[ln²(1+fr)] − gᵣ²(f).
- Prop 2.2: gᵣ continuous, C∞ on (0,1), strictly concave: gᵣ′(f) = E[r/(1+fr)], gᵣ″(f) = −E[r²/(1+fr)²] < 0 (2.11).
- Prop 2.3 (interior optimum): unique f* ∈ (0,1) iff E[r] > 0 (edge) and lim_{f→1−} E[r/(1+fr)] < 0 (edge not too big).
- General Bernoulli (2.14): f* = p/a − (1−p)/b; example a=0.1, b=0.5, p=0.5 → f* = 4 (leverage optimal).
- Cauchy returns (2.15): gᵣ(f) = 2 ln(√f + √(1−f)) in closed form → f* = 1/2, gᵣ(f*) = ln 2.
- r = e^ξ − 1: edge conditions E e^ξ > 1 and E e^{−ξ} > 1 (2.17)–(2.18); normal ξ ⟺ |μ| < σ²/2 (2.19).
- Continuous compounding (Thm 3.1): g_R(f) = f μ̄ − f²σ²/2 + ∫ ln(1+fx) F^R(dx) (3.26); unique f* ∈ (0,1) under edge conditions. Special case: g_R(f) = fμ − f²σ²/2, f* = μ/σ², max μ²/(2σ²) (3.12).
- High-frequency limit (Thm 4.1): f* = μ/σ² (4.10), g(f*) = μ²/(2σ²) (4.11). High-freq Bernoulli: fₙ* = 2μ/(σ²−μ²/n) → μ/σ² at rate O(1/n). Key remark: high-frequency betting can be MORE aggressive than low-frequency: f* ≈ (2p−1)/(4p(1−p)) > 2p−1.
- Thm 4.2 (log-normal): f* = b/σ² + 1/2 (4.16).
- Sec 5 (business time): Thm 5.1 — α-stable time-change example: growth rate becomes random (t^{−1/α} scaling) yet still maximized by deterministic f* = μ/σ².
- Paper endorses fractional Kelly ("a certain fraction of f* can be a smarter strategy", cf. Thorp); NS-NL can fail (f*>1 when edge huge); dynamic f(t) and bet portfolios left for future work.
## Data sources named
None — pure theory paper; theorems with proofs, closed-form examples, one numerical experiment (log-normal, σ=1, n=10, b ∈ (−1/2,1/2)) confirming f*₁₀ ≈ b/σ² + 1/2 (chart-level agreement, exact values not tabulated).
## Findings (numbers and facts, not vibes)
- Closed forms: Bernoulli a=0.1, b=0.5, p=0.5 → f* = 4 exactly; Cauchy → f* = 0.5, gᵣ(f*) = ln 2 ≈ 0.6931 exactly.
- High-frequency convergence: fₙ* → μ/σ² at rate O(1/n); convergence of fₙ* to f* for T=+∞ explicitly NOT proven.
- Limitations named in file: iid/known-distribution returns assumed (GSE's p̂ is estimated, never known); NS-NL excludes leverage/shorts the paper itself shows can be optimal; no portfolio-of-bets extension (flagged future work); transaction costs/vig not modeled.
- GSE implementation spec in file: Kelly staking module `gse_kelly.py` — per pick inputs (engine win prob p̂, decimal odds d → b = d−1, a = 1); edge gate E[r] = p̂b − (1−p̂)a > 0 else stake 0; full Kelly f* = p̂/a − (1−p̂)/b clamped to [0,1] with "leverage-optimal" flag if f* > 1; deploy fractional Kelly f_deploy = κ·f*, κ = 0.25 default (0.5 aggressive); sanity gate from (2.19): require |μ̂| < σ̂²/2 else force κ down; stake = f_deploy × current bankroll recomputed per slate.
- Unit-test targets: (i) a=0.1,b=0.5,p=0.5 → f*=4.0 pre-clamp; (ii) Cauchy → f*=0.5, g=ln2≈0.6931 via numerical integration; (iii) log-normal b=0.1,σ=1 → f*=0.6.
- Acceptance gate: closed-form stakes must reproduce (i)–(iii) to 1e-6; backtest must show fractional-Kelly (κ=0.25) beats flat 1-unit staking on log-wealth with lower max drawdown on ≥1 full season of engine picks, else staking stays flat.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: bankroll staking — rigorous clamp conditions and closed-form Kelly stakes for the GSE sizing lane; interior-optimum edge conditions and high-frequency convergence justify using the continuous formula on discrete daily bets.
- OTHER: improvement experiments proposed in file — (a) vector Kelly for simultaneous correlated slate bets solving max E ln(1 + fᵀr) with the engine's covariance estimate; (b) dynamic κ(t) shrinking after drawdowns (drawdown-aware fractional Kelly); (c) fat-tail adjustment replacing Bernoulli with Cauchy-style heavy-tail gᵣ for longshot markets.
- TRUST-SIGNAL: INFERENCE — published unit-sizing discipline backed by fractional-Kelly math is a credibility input for a public picks brand; Kelly sizing also bounds ruin risk, which is the operational prerequisite for any long-horizon record.
## Engine-actionable? (yes/no + one-line what)
Yes — build `gse_kelly.py`: edge-gated (E[r]>0 else 0) full-Kelly f* = p̂/a − (1−p̂)/b clamped [0,1], deployed at fractional κ=0.25, with the (i)–(iii) unit-test reproduction gate and a backtest vs flat staking on a full season of engine picks before staking goes live.
