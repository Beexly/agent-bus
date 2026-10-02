# arxiv-program/research/2026-09-21/arxiv-deep/0722-expected-points-above-average-bayesian-hierarchical.brief.md
## What it is (1-2 sentences)
Williams, Schliep, Fosdick & Elmore (2024) build a Bayesian hierarchical mixture clustering of NBA players' shot-selection and shot-accuracy profiles, then define Expected Points Above Average (EPAA) — a player's posterior-predictive expected points minus an average team's at the same fixed shot volume — capturing offensive value uncorrelated with PER/BPM.
## Key metrics/methods (formulas where given, else "not specified")
- Shot counts | w_i ~ Multinomial(N_i, p_{w_i}) (Eq. 1); makes | z_i ~ Binomial(N_i^k, q_{z_i}^k) (Eq. 2); Dirichlet(α) priors on selection profiles, Beta(1,1) on accuracy; L=J=10 latent clusters; α=β=γ=5; Gibbs 10k iterations, 3k burn-in.
- EP: posterior predictive expected points at fixed volume Ñ=8000 (2020–21 average), isolating shooting quality from volume.
- EPAA: E[points(player i, Ñ_i)] − E[points(average team, Ñ_i)] — full difference-of-means posterior, not a point estimate.
## Data sources named
NBA API via nbastatR: 2.6M field-goal and free-throw attempts, NBA 2008–09 through 2020–21 (13 seasons); seven NBA-defined offensive regions. Code: github.com/rtelmore/EPAA; Shiny app: ryan-elmore.shinyapps.io/NBA-EPAA/.
## Findings (numbers and facts, not vibes)
- 2020–21 top team expected points (Ñ=8000): Nets ≈120/game; top four Nets, Jazz, Clippers, Nuggets; bottom four Timberwolves, Thunder, Cavaliers, Magic.
- EPAA 2020–21: highest posterior means for high-volume accurate 3pt guards (Beal, Curry, Irving, Lillard); Jokić ranked 2nd; five "All-NBA snubs" identified.
- No meaningful correlation between EPAA and proportion of team shots taken (Joe Harris, Kendrick Nunn: high EPAA, low volume).
- Pearson correlations: EPAA–PER 0.246, EPAA–BPM 0.238, PER–BPM 0.915 — EPAA captures unique offensive efficiency.
- Decade view: Curry/Durant dominant 2010s; Westbrook peak-and-decline; Nowitzki top-12/top-5 late career. MCMC: no convergence issues.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: EPAA construction transfers directly to GSE's props lane (NBA points/rebounds/assists and by analogy NFL player props): expected performance vs hierarchical average player at equal usage, with full posterior for edge-vs-line and 95%-CI uncertainty gating; fit on ALL rotation players with partial pooling to hit soft low-volume lines.
## Engine-actionable? (yes/no + one-line what)
yes — Replicate EPAA pipeline on 2024–25 NBA shot data + historical prop lines; backtest betting props where EPAA-implied mean beats the line ≥2 points with 95% CI excluding the line; adopt if positive ROI with separation from PER-based baseline.
