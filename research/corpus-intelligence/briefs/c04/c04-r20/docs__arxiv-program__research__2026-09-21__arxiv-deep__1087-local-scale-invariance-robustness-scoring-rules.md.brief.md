# docs/arxiv-program/research/2026-09-21/arxiv-deep/1087-local-scale-invariance-robustness-scoring-rules.md
## What it is (1-2 sentences)
A deep-read ledger of arXiv:1912.05642v4, a paper on making proper scoring rules (CRPS variants) locally scale-invariant and robust to outliers. Verdict: **ADAPT** into the calibration_uncertainty lane — adopt the scaled CRPS (SCRPS) as a second, scale-normalized leaderboard alongside average CRPS in the backtest pipeline.

## Key metrics/methods (formulas where given, else "not specified")
- CRPS (kernel form): `S1^ker(P,y) = ½ E|X−Y| − E|X−y|`, with `X,Y ~ P` independent. Smaller = better.
- Scaled CRPS: `S1^sta(P,y) = − E|X−y| / E|X−Y| − ½ log(E|X−Y|)`. Special case of the standardized kernel score `S_g^{−½ log(x)}(P,y) = − E[g(X,y)] / E[g(X,Y)] − ½ log E[g(X,Y)]` with `g(x,y)=|x−y|`.
- Robust CRPS: replaces `|x−y|` with the capped kernel `g_c(x,y) = 1(|x−y|<c)·|x−y| + 1(|x−y|≥c)·c`, cutoff `c`.
- Generalized proper kernel scores (Theorem 3): `S_g^h(P,y) = h(E[g(X,X')]) − E[g(X,y)]`, proper for any increasing concave `h` and negative-definite kernel `g`.
- Local scale invariance condition: a proper scoring rule `S` on a location–scale family `Q_θ, θ=(μ,σ)` is locally scale invariant iff its scale function satisfies `s(Q_θ) σ² = s(Q)` — each observation contributes equal discrimination weight (`σ_i² s(Q_{θ_i}) = s(Q)`).
- Results: Proposition 1 — log score and Dawid–Sebastiani score are locally scale invariant; CRPS and Hyvärinen are not. Proposition 4 — every standardized kernel score with `h(x)=−½ log(x)` is locally scale invariant. Robust CRPS is proper and robust but NOT locally scale invariant; rSCRPS also loses it. Simultaneously robust + locally scale invariant is conjectured impossible under the paper's robustness definition.
- Ensemble SCRPS estimator given in the ledger's GSE implementation spec: `Ê|X−y| = mean_m |x_m − y|`; `Ê|X−Y| = mean_{m<m'} 2|x_m − x_{m'}| / M(M−1)`; `score = − Ê|X−y| / Ê|X−Y| − 0.5 · log(Ê|X−Y|)`; skip rows where `Ê|X−Y| < ε`; rCRPS option caps distances at `c = 3·median(|x_m−y|)` (defaults are from the ledger, not the paper).

## Data sources named
No sports data. Paper's own demonstrations: (1) stochastic volatility — 500 simulations × length-600 series; (2) spatial Gaussian field — n=100 and n=200 locations with one injected outlier; (3) negative-binomial pedestrian counts — 227 street segments. GSE-side data referenced: backtest rows with engine predictive ensembles (e.g., engines v5.2.7 vs. v5.3 candidate), last 3 seasons of spread + total backtests.

## Findings (numbers and facts, not vibes)
- SCRPS and the log score select the true scale parameter far more often than CRPS and Hyvärinen in 500 stochastic-volatility simulations; CRPS/Hyvärinen are pulled toward high-volatility observations.
- With one injected outlier in n=100/200 spatial fields, robust SCRPS performs well both with and without the outlier; plain CRPS is outlier-sensitive.
- On 227 pedestrian-count street segments, removing the ~20 highest-mean observations halves the average CRPS, while SCRPS is much less sensitive — average CRPS weights by predictive scale.
- GSE's target uncertainty scales differ radically: QB passing yards σ≈60, receptions σ≈2.5, game totals σ≈14 — under average-CRPS ranking, high-variance targets (passing yards, game totals) dominate engine selection.
- Explains ledger 1083's finding (log score identified the true system more efficiently than Brier/RPS): the log score's efficiency comes exactly from its local scale invariance.
- Limitations (from paper): theory formalizes location–scale families only (negative-binomial application is outside the formal definition); SCRPS not robust to extreme outliers; assumes independent forecast cases; cannot score degenerate/zero-variance forecasts; no sports data.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Scale-normalized engine selection preventing high-variance targets (passing yards, game totals) from dominating backtest rankings: **OTHER** (calibration/methodology — engine evaluation, not on-field behavior).
- Log score's efficiency traced to local scale invariance, reinforcing ledger 1083's univariate winner: **OTHER** (scoring-methodology doctrine).
- Robust rCRPS as principled alternative to ad-hoc winsorization for outlier-heavy backtests (weather games, blowouts): **OTHER** (backtest hygiene).
- Numeric adoption gate: SCRPS becomes selector only if, on GSE's last 3 seasons of spread+total backtests, engine rankings under mean SCRPS differ from mean CRPS for ≥2 games-target pairs: **OTHER** (internal acceptance criterion).
- No QB behavioral, coaching, OL, trust-signal, or scheme content in this paper.

## Engine-actionable? (yes/no + one-line what)
Yes — add SCRPS as a second scale-normalized leaderboard in gse-backtest/scoring (ensemble estimators given, no new dependencies), with rCRPS for outlier slices and the stated numeric gate deciding whether it becomes the primary engine selector.
