# arxiv-program/research/2026-09-21/arxiv-deep/1159-effects-social-influence-wisdom-crowds.md
## What it is (1-2 sentences)
An agent-based model (calibrated to Lorenz et al. 2011's crowd experiment) showing social influence is not unconditionally good or bad: it *reduces* collective error for initially inaccurate crowds but *increases* error for initially accurate crowds, and the mechanism is aggregation on the arithmetic vs geometric mean. For GSE it's a design doctrine for forecast ensembles, not a prediction method.
## Key metrics/methods (formulas where given, else "not specified")
- Agent dynamics: dx_i/dt = α_i(⟨x⟩−x_i) + β_i(x_i(0)−x_i) + Dξ_i(t); α = social influence, β = individual conviction, D noise
- Collective error E(t) = (ln T − ⟨ln x(t)⟩)²; group diversity D(t) = (1/N)Σ(ln x_i − ⟨ln x⟩)²; wisdom indicator W(t) = centrality of truth in opinion distribution
- Mechanism: coupling to the arithmetic mean while truth-centre is the geometric mean (AM > GM for log-normal opinions) drags the crowd rightward regardless of truth
- Simulations: N=100 agents, T=3000 steps, log-normal initial opinions; sweeps over {α,β}
## Data sources named
Reproduces Lorenz et al. (2011) PNAS experiment: 144 ETH Zurich students, 12 sessions × 12 participants, 6 quantitative questions × 5 rounds, three information regimes
## Findings (numbers and facts, not vibes)
- Aggregation metric matters: arithmetic mean beat individuals' first estimates in 21.3% of cases; geometric mean (log-transformed opinions) did so in 77.1%
- Reproduced Lorenz's three effects: social influence converges opinions without improving error; truth drifts to the periphery while distribution narrows (range reduction); individuals grow more confident as the group drifts wrong (self-confidence effect)
- Initially inaccurate crowd (E(0)=0.8): stronger social influence reduces long-run error across nearly the whole {α,β} range; initially accurate (E(0)=0.01–0.02): social influence increases error
- No score feedback in the model — real forecasting markets have feedback, which changes the dynamics
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: forecast-ensemble design doctrine — keep sub-model opinions independent; any shared input (market consensus, same vendor, same calibration target) is a coupling channel that collapses diversity without reducing error (agreement ≠ accuracy); log-scale/geometric-mean aggregation for skewed quantities (totals, yards); per-slate diversity monitor D(t) as a herding flag; consensus-skepticism rule — require independent non-market evidence before following strong public consensus
## Engine-actionable? (yes/no + one-line what)
Yes — run an ensemble independence audit (~2 days) and adopt geometric-mean aggregation for skewed-quantity props only if it wins on backtested log-loss; keep the dynamical drift predictions as doctrine only (no-feedback assumption doesn't hold for live markets).
