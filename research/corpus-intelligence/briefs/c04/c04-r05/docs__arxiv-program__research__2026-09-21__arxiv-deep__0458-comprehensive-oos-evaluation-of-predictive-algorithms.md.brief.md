# docs/arxiv-program/research/2026-09-21/arxiv-deep/0458-comprehensive-oos-evaluation-of-predictive-algorithms.md
## What it is (1-2 sentences)
Deep-read ledger of Dominitz & Manski (2025) "Comprehensive OOS Evaluation of Predictive Algorithms with Statistical Decision Theory" (arXiv:2403.11016v3): a position paper arguing ML's K-fold/CTF evaluation should be replaced by Wald's statistical decision theory — evaluate the decision function ex ante by minimax regret across a state space of (training, prediction) populations. Verdict: ADAPT the minimax-regret evaluation doctrine for GSE engine validation (bet/no-bet rules judged by worst-regime regret, not average backtest).
## Key metrics/methods (formulas where given, else "not specified")
- Decision criteria: Bayes risk min_c ∫L(c,s)dπ; minimax min_c max_s L(c,s); minimax regret min_c max_s [L(c,s) − min_d L(d,s)] (eqs. 1–3).
- Statistical versions over SDFs c(·) ∈ Γ: min max (E_s{L[c(ψ),s]} − min_d L(d,s)) (eq. 6); a state of nature s = (training-population, prediction-population) pair.
- Binary-choice regret decomposition (Appendix A): expected regret = R_{c(·)s}·|L(a,s)−L(b,s)| — error probability times loss magnitude; for MSE: regret = V_s[p(ψ)] + {E_s(y)−E_s[p(ψ)]}²; for MCR: regret = P(misclassify) − min[P_s(y=1), 1−P_s(y=1)].
- Clinical illustration threshold: px# = [U_x(A,0)−U_x(B,0)] / ([U_x(A,0)−U_x(B,0)] + [U_x(B,1)−U_x(A,1)]) (eq. 13).
- Computation: Monte Carlo integration + grid search over S; admitted: high-dimensional ML implementation "not currently computationally tractable" — a call to arms, not a solved algorithm.
## Data sources named
No new dataset. Illustrative settings: (a) binary-illness treatment-choice with kernel estimates under bounded-variation restrictions (Manski 2023); (b) Mullainathan & Obermeyer (2022) ~250,000 ER visits, 16,000+ covariates, 5-fold CV, 70/5/25 split — critiqued as heuristic OOS validation without theoretical foundation. Referenced: Bates, Hastie & Tibshirani (2024) sparse-logit n=90/p=1000 example where naive 90% CIs actually miscover 31% (need ~1.6× widening).
## Findings (numbers and facts, not vibes)
- None new — no numbers produced. Core doctrinal claims: K-fold/CTF evaluates one realized training sample ex post assuming the future looks like the past; Wald SDT evaluates across all possible training samples × all possible populations ex ante; maximum regret is only as credible as the analyst-specified state space S.
- Critique of Mullainathan & Obermeyer: their evaluation of ML prediction for clinical decision-making lacks statistical-decision-theoretic foundation despite large scale.
- Limitation flagged in file: minimax regret can be "ultrapessimistic"-adjacent (optimizes worst state, may sacrifice gains in likely states); NFL seasons are not i.i.d. draws, so a sampling model for "all possible seasons" needs care; the utility (bankroll growth, risk tolerance) is chosen, not known.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- Judge GSE engine variants by maximum regret across era-pairs and stressed regimes (post-rule-change, injury clusters, weather slates) instead of a single backtest average — OTHER (evaluation doctrine).
- Binary-regret decomposition (error prob × loss magnitude) maps directly onto bet/no-bet + stake-sizing decisions — OTHER.
- No QB behavior, coaching, OL, trust-quote, or scheme content in the file.
## Engine-actionable? (yes/no + one-line what)
Yes — define state space S (6 era/stress states), SDF = [data → GSE probabilities → bet/no-bet + stake], loss = negative per-slate bankroll log-growth; compute max regret vs. challenger variants via 200 bootstraps per state; adopt MMR as standing engine-selection criterion iff the max-regret ranking disagrees with the average-backtest ranking on ≥1 real 2024–2025 engine decision.
