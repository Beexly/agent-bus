# arxiv-program/research/2026-09-21/arxiv-deep/1540-space-time-von-cramm-evaluating-decision.md
## What it is (1-2 sentences)
Ledger note on Space-Time VON CRAMM (Kovalchik, Ingram & Weeratunga 2020, arXiv:2005.12853): a Bayesian generative trajectory model (infinite DP-GMM with variational inference) for tennis that yields continuous-time Expected Shot Value and decomposes it into execution (VAST), decision quality (Shot IQ), and coverage (VACC). Verdict in-file: ADAPT — the recipe is directly portable to GSE's NGS tracking work to separate QB decision quality from arm execution and receiver/defender effects.

## Key metrics/methods (formulas where given, else "not specified")
- Functional trajectory encoding: f_x(t) = θ_0 + θ_1·t + θ_2·t² + θ_3·t³ (cubic per 3D dimension); 1-bounce shot = 2 arcs = 24 features; player movement as 2D line segments (+8 features).
- Generative: infinite Bayesian GMM — A(ω)|z ~ MVN(μ_z, Σ_z), stick-breaking DP prior v_i|α ~ Beta(1,α), π_i(v) = v_i Π_{j<i}(1−v_j); fit by variational inference (Blei et al. 2006); number of components inferred.
- Conditioning: observed position f_x(t_0) = C·A(ω), C = (1, t, t², t³); A(ω)|C·A(ω)=f_x(t) ~ MVN closed form (Eq. 5); weights P(z|X_t) ∝ P(X_t|z)P(z) (Eq. 6).
- Expected Shot Value: ESV_t = E[W(ω)|X_t] (1); ESV_t = ∫ P(W(ω)|A(ω)=A(ψ))·P(A(ω)=A(ψ)|X_t) dψ (2).
- Outcome model: generalized additive models (GAMs) on speed/height/bounce-location features → P(W(ω)|A(ω)).
- Metrics: VAST = ∫ P(W|S,R) P(R) dR (Eq. 7, marginalize over receiver); Shot IQ = ESV with positional configuration fixed, execution integrated out (decision quality); VACC = VAST − P(W(ω)|S,R) (Eq. 8, court coverage).

## Data sources named
- Ball + player tracking data, 2019 US Open (Tennis Australia / tournament tracking feed) — proprietary, no public link; no code released.

## Findings (numbers and facts, not vibes)
- Outcome-model log-loss: 0.44 (serves) / 0.19 (rally shots); decile calibration within ~4 percentage points; low serve recall attributed to forced/unforced labeling ambiguity.
- ESV >50% serves: 11% of serves within 1m of the wide line vs 8% within 1m of the center line (wide-serve edge).
- Medvedev's 121 mph down-the-T serve vs Nadal: VAST 75% (95% of marginalized outcomes >50% win chance), but actual conditional win chance 1 in 10 given Nadal's positioning.
- Shot IQ (men's round-of-16): −10 to +10 pp on first serve vs event average (−5 to +5 on second); Federer/Wawrinka top first-serve Shot IQ; Djokovic/Schwartzman top second-serve.
- Serena Williams: VAST ≥50% on >1/3 of first serves; >1/5 of second-serve returns at VAST >50% (with Andreescu); Nadal elite VACC neutralizing serves.
- No formal baseline comparison for outcome model; VAST/Shot IQ/VACC validated by narrative only, not predictive or split-half stability tests.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [QB-BEHAVIOR] NFL analogue "Decision IQ": marginalize over throw execution/outcome, keep pre-throw configuration fixed — separates QB read/decision quality from arm execution. Direct input to QB behavioral profiles (decision quality vs execution quality per game situation).
- [SCHEME] Coverage VACC analogue: defender value-denied vs average coverage; receiver "Execution+" catch-point value vs average — all decomposable from the same EPV_t recipe.
- [OTHER] Expected Play Value EPV_t = E[positive EPA | tracking state X_t] via generative trajectory model → MVN conditioning → outcome model; nothing in the corpus currently builds a Bayesian generative trajectory model for attribution.
- [COACHING] Shot IQ as a template for measuring coaching/scheme-independent QB decision quality — portable across offensive schemes (read-first offenses vs execution-first).

## Engine-actionable? (yes/no + one-line what)
Yes — ADOPT the three-step recipe (generative trajectory model → conditioning → outcome model) and marginalization-based attribution (Decision IQ / Execution+ / Coverage VACC) if the outcome model beats a features-only baseline on 2025 held-out log-loss and player metrics are split-half stable (r ≥ 0.35); port to NGS tracking (NGS data already inventoried, internal-use only per the 2026-09-28 NGS doctrine).
