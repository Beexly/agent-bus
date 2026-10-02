# arxiv-program/research/2026-09-21/arxiv-deep/0003-luck-is-hard-to-beat.md
## What it is (1-2 sentences)
Deep read of Aoki, Assunção & Vaz de Melo (2017), arXiv:1706.02447v1, "Luck is Hard to Beat": a cross-sport study of skill-vs-luck in sports outcomes. GSE verdict: ADAPT — take the schedule-preserving random null (skill coefficient φ) as a regime diagnostic for the engine's irreducible error floor; reject the dated in-sample NBA roster model and the circular team-removal procedure.
## Key metrics/methods (formulas where given, else "not specified")
- Skill coefficient: φ = (s² − σ²_{2k}) / s², where s² = observed variance of season-end standings, σ²_{2k} = expected standings variance under a Monte Carlo null replaying the actual schedule with outcomes drawn from observed home/tie/away frequencies. φ ∈ (−∞, 1]; φ≈0 = standings fully explained by chance; 95% null interval from 2.5th/97.5th Monte Carlo percentiles.
- Team-removal process: iteratively drop the team farthest from average, recompute φ, stop when φ enters the random interval (descriptive, circular per the read).
- NBA model: Bayesian Bradley-Terry with Poisson score likelihood: Y_k ~ Poisson(N_k · α_{h(k)}/(α_{h(k)} + α_{a(k)}) + ε_k); log α_i = wᵀx_i; Gaussian priors on w, ε; Gamma hyperpriors on precisions; Metropolis-Hastings 10,000 iterations, 2,000 burn-in, mean acceptance 0.395 (SD 0.02); model selection by DIC.
## Data sources named
BetExplorer (270,713 matches, 1,503 seasons, 198 leagues, 84 countries, Jan 2007–Jul 2016: basketball 42 leagues/310 seasons; volleyball 51/328; handball 25/234; soccer 80/631); Basketball Reference (NBA players/teams/salaries/PER since 2004). No code or replication files.
## Findings (numbers and facts, not vibes)
- Skill-dominated seasons: basketball 100%, volleyball 99.39%; pure-luck-compatible: handball 17.95%, soccer 7.13%.
- Avg team removal to reach random interval: basketball 50%, volleyball 40%, handball 14%, soccer 19%/20% (both values appear in paper).
- NBA: 17–25 of 30 teams must be removed before standings look random; φ > 0.95; EPL ≈ 0.77; Primera División 0.80; Série A 0.63; Algerian Division 1 2014–15: φ = −1.93 (negative, unexplained).
- NBA underdog win probabilities 2012–2016 mean: P(U)=0.36; away underdog 0.27; home underdog 0.45; away underdog vs removed elite 0.19; home underdog vs removed elite 0.17.
- NBA model skill-wins correlation 0.7399 is in-sample and circular (wins were the fitting target); no held-out log-loss/Brier, no Elo/odds baseline.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: φ as a regime diagnostic — in low-φ seasons the engine's error floor is higher and Kelly stakes should shrink; in high-φ seasons more aggression is justified. Season-length confound: NFL's 17-game season mechanically looks more luck-like than NBA's 82 games; the read proposes testing φ era-contrast (16-game vs 17-game) via nflverse 2010–2025.
- TRUST-SIGNAL: negative φ (−1.93) without mechanism is a warning about trusting variance metrics face-value; improvement experiment proposes benchmarking engine MSE against the schedule-aware null rather than standings against chance.
## Engine-actionable? (yes/no + one-line what)
Yes — build the NFL φ-null pipeline from nflverse as a regime indicator for bankroll sizing and irreducible-error diagnostics (1–2 day effort); gate on positive correlation between season-ahead engine log-loss and (1−φ).
