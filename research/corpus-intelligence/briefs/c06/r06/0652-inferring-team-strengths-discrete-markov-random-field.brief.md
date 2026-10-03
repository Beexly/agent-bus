# arxiv-program/research/2026-09-21/arxiv-deep/0652-inferring-team-strengths-discrete-markov-random-field.brief.md
## What it is (1-2 sentences)
Zech & Wood (2013) infer time-varying discrete-state offensive/defensive team strengths from soccer scorelines with a Markov Random Field trained by EM + loopy belief propagation; the paper's own predictive test shows it underperforms Elo and bookmaker probabilities, and the authors concede a continuous-state extension is needed.
## Key metrics/methods (formulas where given, else "not specified")
- Latent discrete offense/defense states per team per date with Markov transition matrices Ω (offense), Δ (defense).
- Emissions: home goals ~ Ψ(offense_home, defense_away), away goals ~ Γ(offense_away, defense_home) — freely parameterized discrete conditionals, not assumed Poisson.
- EM objective: Q(θ,θ^old) = Σ_Z P(Z|X,θ^old) ln P(X,Z|θ) (Eq. 1); BP message reordering reduces cost to O(NK²) (Eq. 2).
- Prediction: posterior predictive over goal totals → win/draw/loss probabilities.
## Data sources named
football-data.co.uk (English Premier League, 1993–2012; 45 teams, 678 weeks; goals capped at 4). William Hill odds used as a baseline.
## Findings (numbers and facts, not vibes)
- Rolling out-of-sample 2005–2012 (cumulative net log-likelihood): model substantially beats naive constant-rate baseline but UNDERPERFORMS both Elo and William Hill implied probabilities — stated explicitly.
- Non-convexity: 8 identical-training runs converge to different optima (Figure 7).
- Discovered emission distributions deviate from Poisson (Figure 12: Ψ_{1,2,g} differs notably on 0/1 goals).
- Interpretability win: Man City's offensive strength jump from 2008–09 inferred without knowledge of the 2008 takeover.
- File verdict: REJECT — loses to Elo on its own benchmark; duplicate territory with weaker method.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none actionable — discrete-state MRF is dominated by continuous state-space models already in GSE's corpus; the "loses to Elo" self-report is a useful TRUST-SIGNAL example of honest negative reporting.
## Engine-actionable? (yes/no + one-line what)
no — Rejected by the source ledger: the paper's own head-to-head shows it underperforms Elo, and the authors point to continuous extensions the corpus already covers.
