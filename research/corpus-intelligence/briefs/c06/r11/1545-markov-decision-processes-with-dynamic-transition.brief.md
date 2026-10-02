# arxiv-program/research/2026-09-21/arxiv-deep/1545-markov-decision-processes-with-dynamic-transition.md
## What it is (1-2 sentences)
Paper (arXiv:1812.05170): basketball plays modeled as team-specific non-stationary MDPs with shot-clock-sliced transition probability tensors, estimated via Bayesian hierarchical models in Stan with multi-level shrinkage and AR(1) temporal covariance, then used to simulate 300-season counterfactuals under altered shot/passing policies (e.g., Cavs cutting contested mid-range 70% and doubling 3PA rate: EPPS 1.038→1.089).
## Key metrics/methods (formulas where given, else "not specified")
- MDP ⟨S,A,P,R⟩, actions {Shoot, Not Shoot}; state = ballcarrier × 6 regions × open/contested (~180 states/team).
- TPT: 8 shot-clock slices (3-second intervals); P(s,a,s′) = exp(λ)/Σexp(λ) with λ hierarchy λ~N₈(ζ^{position},Σ_λ), ζ~N₈(ω^{region/defense},Σ_ζ), ω~N₈(0,Σ_ω).
- Shot policy π = expit(θ_{t_n}); θ ~ N₈(β^{position},Σ_θ), β ~ N₈(γ^{zone},Σ_β), γ ~ N₈(0,Σ_γ); AR(1) covariances, ρ~Uniform[0,1), σ~half-Cauchy(0,2.5).
- Make(s) = expit(μ^{(x,y)} + I(open)·ξ^{(y)}); R = 3·Make or 2·Make if shot else 0.
- Novel "average chain" theorem combining 500+ lineup chains; posterior-draw simulation (Algorithm 1) with policy perturbations θ̃^{alt} = 1.1·θ̃ capped at 0.9.
## Data sources named
STATS LLC optical tracking, 2015–16 NBA: 25 Hz x,y (players) + x,y,z (ball), 155,656 plays (~1.93M observations) fitted, ~28,000 held-out plays; companion repo github.com/nsandholtz/nba_replay (Stan scripts; data proprietary except one sample game).
## Findings (numbers and facts, not vibes)
- Held-out log-likelihood (higher better): policy π: −36808 → −25187 → −24467 → −21553; transitions P: −17299 → −38702 → −25099 → −13478; rewards R: −5956 → −4571 → −4561 → −4540 (empirical → location → position → player shrinkage; player-specific D best on all three).
- Temporal autocorrelation ρ̂_θ = 0.94.
- Cavaliers counterfactuals (300 sims each): cut contested mid-range 20% with >10s left → no practical change (only 7.5% of plays end in such shots); cut 70% + double 3PA: EPPS 1.038→1.089, EPPP 0.923→0.973; Irving→James passes −90%: Irving shots +18%, James −13%, negligible team change; veterans→rookies ×3 / reverse −75%: costs 0.02 EPPP.
- Raptors observational: 3PAr 30.5%→39.6% (+30%), 3P EPPS 1.10→1.08 (−2%), overall EPPS 1.10→1.14.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: policy-counterfactual simulation template is directly portable to 4th-down/go-for-it and pass-rate policy analysis (observed vs aggressive policy EPD distributions).
- SCHEME: state = (down, distance, field zone, score differential), transitions = play outcomes, policy = play-call, reward = EPA — the TPT maps to situational football.
- QB-BEHAVIOR: hierarchical shrinkage (player → position group → global, AR(1) over weeks) is the estimation template for QB EPA/play parameters.
- OTHER: posterior-draw simulation with full uncertainty propagation — modeling discipline for engine Monte Carlo.
## Engine-actionable? (yes/no + one-line what)
Yes — port the hierarchical AR(1) shrinkage template to NFL player parameters (QB EPA/play) in Stan/PyMC with a ≥2% held-out log-likelihood gate; then build the NGS-based situational TPT and 4th-down counterfactual simulator.
