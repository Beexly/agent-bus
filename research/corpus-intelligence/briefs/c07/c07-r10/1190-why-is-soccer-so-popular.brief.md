# arxiv-program/research/2026-09-21/arxiv-deep/1190-why-is-soccer-so-popular.md
## What it is (1-2 sentences)
"Why is soccer so popular" (Vicente et al. 2024, arXiv:2404.06626v1) quantifies underdog achievement (weak teams winning/drawing) across 12 international team-ball sports and attempts to explain it with a 14-factor hand-authored randomness model. Ledger verdict: REJECT — descriptive/explanatory, no predictive model, no calibration, no market path, and American football is explicitly excluded.
## Key metrics/methods (formulas where given, else "not specified")
- Underdog achievement score (UAS): team "weak" if rank ≥ τ places below opponent (τ = median rank-difference per sport; soccer τ=7, water polo τ=2.5, others 3–5); UAS = fraction of weak-team wins/draws among matches with a weak team; weighted ranking wr(i) = (N − c(i)) + λ·wr_prev, λ ∈ {1, 0.5, 0}.
- 14 hand-specified randomness factors in 3 groups (physical environment: ball lightness/velocity/geometry/bounciness, field/ball size, goal/ball size; player: BMI, body-ball interaction, dispossession, inexperience; team: players/field size, goal/defenders, scoring infrequency, movement-rule ratios); each min-max normalized a′ = (a − min(a))/(max(a) − min(a)).
- PCA (first 2 PCs explain 56% of variance) + Pearson correlation heatmap of factors vs UAS; Kruskal–Wallis + Dunn's tests across sports.
## Data sources named
Match scores scraped from Wikipedia for major international competitions per sport (FIFA World Cups 1930–2014 for soccer, Olympics, World Cups for others); companion dataset "Match score dataset for team ball sports" (Alleck et al., ISE Technical Report 24T-003, Lehigh); code: https://github.com/thaksheel/randomness-team-ball-sports.git.
## Findings (numbers and facts, not vibes)
- UAS (λ=1/0.5/0): Water Polo 0.37/0.34/0.32; Soccer 0.36/0.27/0.22; Field Hockey 0.31/0.22/0.20; Ice Hockey 0.30/0.21/0.18; Basketball 0.25/0.19/0.16; Volleyball 0.22/0.11/0.07; Handball 0.21/0.17/0.11; Futsal 0.17/0.13/0.07; Cricket 0.15/0.11/0.08; Lacrosse 0.08/0.07/0.06; Rugby 0.07/0.04/0.03; Roller Hockey 0.05/0.02/0.01.
- Kruskal–Wallis p = 2.47×10⁻¹⁰; Dunn's significant pairs include soccer vs cricket (0.01239), lacrosse (0.00007), roller hockey (0.00002), rugby (0.00011).
- UAS correlates strongest positively with GS/NPG (goal size/defenders); strongest negatively with NRAM/NRPM, PI, BG.
- No predictive validation, no train/test split, no forecasting accuracy — the factors are hand-authored constants per sport, so the PCA/correlation "explanation" is circular-adjacent.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None actionable — the only transferable idea (upset rate by rating gap) is already subsumed by Elo expected-score curves in GSE's corpus (OTHER).
## Engine-actionable? (yes/no + one-line what)
No — rejected; no model to implement. (INFERENCE: if the question ever mattered, the paper suggests a descriptive exercise — fit a logistic upset curve on NFL Elo gaps vs moneylines — but that is the ledger's improvement experiment, not the paper's content.)
