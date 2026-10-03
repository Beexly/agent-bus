# docs/arxiv-program/research/2026-09-21/arxiv-deep/1800-stochastic-differential-theory-of-cricket.md

## What it is (1-2 sentences)
Deep-ledger summary of Santosh Kumar Radha (2019, arXiv:1908.07372v1): models cricket score progression as a stochastic differential equation (Brownian, wicket-shock-perturbed, and mean-reverting Ornstein–Uhlenbeck variants) yielding closed-form in-play win probability from the ball-by-ball game state. Verdict: ADAPT — but flagged as a formalism paper with no out-of-sample predictive validation.

## Key metrics/methods (formulas where given, else "not specified")
- Model 1 (Brownian): dX_t = μdt + σdW_t; conditional win prob P(X(1)>0 | X(t₁)=α) = ½[1 + erf((1 − μ(1−t₁) − α)/(σ√(2(1−t₁))))]. X(t) = net run rate − required run rate per ball.
- Model 2 (wicket shocks): μ(t) = μ − |μ̄|f(w̄, w_t), f = Poisson survival function 1 − Σᵢ₌₀ˣ e^{−λ}λⁱ/i! perturbing drift after each wicket.
- Model 3 (OU): dX_t = (x₀x₁ − x₀X_t)dt + σdW_t; E[X_t] = X_{t−1}e^{−x₀t} + x₁(1 − e^{−x₀t}); Var[X_t] = σ²/(2x₀)·(1 − e^{−2x₀t}); closed-form P(win) via eq 15. Long-run: E→x₁ (equilibrium edge), Var→σ²/(2x₀).
- Possible sign error flagged in the paper's eq 4 (P₁ form); the conditional eq 6 is the usable one.

## Data sources named
ODI ball-by-ball data 2005–2017 (England, India, Pakistan, Sri Lanka games); illustrative demo game India vs Sri Lanka, 2011 World Cup final (Mumbai). No code/data provided.

## Findings (numbers and facts, not vibes)
- England ODI 2005–2017 pooled fit: μ = −0.2, σ = 1.12; England vs Pakistan pair fit: μ = 0.17.
- India OU fit: x₀ = 1.18, x₁ = 0.06 (best visual mean/variance-vs-balls fit, Fig. 8). India wickets 2005–2017: mean 7.4 lost/game, variance 2.11.
- 2011 final demo: Model 3 shows India's true win probability near 0.5 throughout despite negative X(t) — headline illustration that naive state-reading misleads.
- No predictive validation anywhere: no out-of-sample Brier/log-loss, no baseline comparison (not even Stern 1994, which it cites). Derived from Stern (1994) Brownian score model and Polson & Stern (2015) implied volatility.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: OU mean-reversion primitive (teams press harder when ahead — morale/momentum effect) is a transferable structural idea for NFL in-game modeling.
- OTHER: Poisson-shock drift perturbation (wicket → turnover analog) — the "pick-six shock" probability-dip-and-relaxation shape for live win-prob product.
- OTHER: per-team-pair volatility σ as "implied volatility of the game" usable for totals modeling (high-σ matchups widen the total distribution).
- COACHING: INFERENCE — possession-aware drift extension would encode coaching game-script (e.g., run-abandoning behavior) into mean-reversion targets.

## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL in-play SDE (score-differential vs required-pace process with OU parameters fit per team-pair from nflverse play-by-play 2015–2024, plus a turnover-shock perturbation layer) as a physics-based complement to GSE's ML in-play model, gated on beating a naive score-and-time baseline by ≥0.005 Brier on 2023–2024 before any ship (ledger §11–14 spec, ~1 week).
