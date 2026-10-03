# docs/arxiv-program/research/2026-09-21/arxiv-deep/1086-set-valued-elicitability-prediction-intervals.md

## What it is (1-2 sentences)
Full read (arXiv:1910.07912v2, Fissler, Frongillo, Hlavinová, Rudloff — no year given in read) of a forecasting-theory paper on the elicitability of set-valued functionals: which prediction-interval-type targets can be honestly scored, in "selective" (report one element) vs "exhaustive" (report whole set) modes. Verdict at source: ADAPT — it gives GSE the rigorous evaluation discipline for its published prediction intervals (spread/total intervals, DFS player-stat intervals), which are currently evaluated with ad-hoc coverage-plus-width heuristics.

## Key metrics/methods (formulas where given, else "not specified")
- Selective consistency (2.3) vs exhaustive consistency (2.4); selective CxLS* (Def. 3.1), Prop. 3.3 necessity; Theorem 3.5 (non-exhaustive-elicitability); Theorem 3.7 — for functionals with the proper-subset property, selective and exhaustive elicitability are mutually exclusive (quantiles are selectively elicitable, hence never exhaustively elicitable).
- Class I_α of α-prediction intervals is exhaustively elicitable (Theorem 4.2): S_exh(A,y)=αμ(A)−μ(((−∞,y]×[y,∞))∩A) (4.6); normalized form (4.8): S_μ=(1−α)μ(((−∞,y]×[y,∞))∖A)+αμ(A∖((−∞,y]×[y,∞))); elementary scores S_u; mixture representation enabling Murphy diagrams: plot score difference across the whole parameter grid u∈U.
- Γ_α(F)(a)=q⁻_{α+F(a−)}(F) (4.4) shortest-interval endpoint map; I_α(F) (4.3); endpoint/midpoint specs (4.9–4.12); quantile endpoints elicitable via pinball sums (Prop. 4.9); fixed-constant endpoints/midpoints elicitable (Appendix A).
- Hard negative: shortest α-interval SI_α (α∈(0,1)) is NOT elicitable in either sense (Theorem 4.16 — first non-degenerate example of a set-valued functional elicitable nowhere); selective identifiability Prop. 4.20; non-elicitability extends to minimal-volume prediction regions (Remark 4.19).
- Vorob'ev quantiles of random sets: exhaustively elicitable (Theorem 5.5) with elementary-score representation — S̃_α=αμ(X)−μ(Y∩X) (5.2); S_{α,u}=α1_{X∖Y}(u)+(1−α)1_{Y∖X}(u) (5.4); mixture S_{α,π} (5.5); order-sensitivity Prop. 5.7; V_α(u,Y)=1_Y(u)−α (Prop. 5.3).

## Data sources named
None — pure theory; constructive uniform-mixture counterexamples in the Theorem 4.16 proof (G_1,G_2,G_3 on [0,1],[1,2],[3,1+2/α]).

## Findings (numbers and facts, not vibes)
- The class of α-prediction intervals is exhaustively elicitable (Theorem 4.2) with an explicit integral scoring function and mixture representation in elementary scores — GSE can compare engines' interval forecasts with a consistent scoring rule rather than invented coverage-plus-width penalties.
- Elementary scores admit Murphy diagrams (Ehm et al. 2016): a variant whose Murphy curve dominates everywhere wins under every consistent scoring function.
- Governance result: the shortest α-prediction interval (α∈(0,1)) is not elicitable in either sense (Theorem 4.16); "report the tightest calibrated interval" is not a legitimate target for analysts or engine losses. The α=1 case (Prop. 4.13) is a narrow exception leaning on infinite scores — do not generalize.
- Quantile endpoints ARE elicitable via pinball loss; fixed-endpoint/midpoint-constant specs are elicitable (Appendix A); lower-quantile specification fails (Prop. 3.13).
- Theorem 3.7: quantile forecasts can never be scored in exhaustive mode and interval sets can never be scored selectively — mixing modes invalidates comparisons; interval backtests must use (4.8), never pinball on endpoints alone (which scores the quantile specification, a different functional).
- Coverage-only evaluation (V_sel=1{y∈[x_1,x_2]}−α) is an identification function, not a score — it cannot rank intervals (§6.1 notes the common conflation).
- Numerical gate: 95 — a challenger engine's intervals displace the incumbent's only if its Murphy curve lies at or below the incumbent's on at least 95 of 100 elementary-score grid points (strict dominance robust to score choice).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Murphy-diagram dominance (≥95/100 grid points) gives GSE a score-choice-robust engine-variant promotion gate — stops arbitrary coverage-plus-width heuristics from blessing a variant under one metric that loses under another; strengthens every public interval claim.
- [TRUST-SIGNAL] Theorem 4.16's shortest-interval prohibition: any internal or published "tightest calibrated interval" objective is dishonest by construction — no consistent score can incentivize it; retire it from analyst/engine objectives.
- [OTHER] Vorob'ev machinery (S_{α,u}, α=1/2 symmetric-difference case) extends the same rigorous scoring to set-valued forecasts like "player pool with ≥α probability of covering" or injury-risk regions — INFERENCE: this maps directly onto GSE's DFS player-pool and injury-flagging set outputs.
- [OTHER] Discrete-outcome caveat: strict consistency needs M_{α,inc} regularity (singleton quantiles); NFL totals are discrete-ish (integer scores) so uniqueness fails and strictness degrades — consistency survives, but gates should not lean on strictness for game totals.
- [OTHER] Multivariate extension is only sketched (Remark 4.19, §5) — GSE's joint-interval needs would push past the paper.

## Engine-actionable? (yes/no + one-line what)
Yes — replace GSE's ad-hoc interval evaluation with the exhaustive consistent score (4.8) for all published prediction intervals, select engine variants by Murphy-diagram dominance (≥95/100 grid points + DM significance), and retire any "shortest interval" target; effort 3–4 days (scoring functions + Murphy-diagram tooling over backtest intervals).
