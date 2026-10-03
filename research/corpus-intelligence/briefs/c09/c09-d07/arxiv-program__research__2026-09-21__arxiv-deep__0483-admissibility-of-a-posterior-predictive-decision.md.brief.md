# arxiv-program/research/2026-09-21/arxiv-deep/0483-admissibility-of-a-posterior-predictive-decision.md
## What it is (1-2 sentences)
A 4-page decision-theory note (Giri Gopalan, 2015, arXiv:1507.06350v7) proving that Bayes prediction rules derived from the posterior predictive distribution are admissible, extending classic Wald/Berger admissibility results from parameter estimation to prediction. Contains no data, no algorithm, and no empirical content; the worker ledger marked it REJECT.
## Key metrics/methods (formulas where given, else "not specified")
- Posterior predictive risk minimand (Theorem 1): **∫ L(ŷ(y_obs), y_pred) p(y_pred | y_obs) dy_pred** — Bayes prediction rules are found by minimizing this; θ integrates out as a nuisance parameter via Fubini.
- Frequentist prediction risk of rule Ŷ at θ: **∬ L(ŷ, y_pred) f(y_pred, y_obs | θ) dy_pred dy_obs**; Bayes prediction risk = same averaged over proper prior g(θ) > 0 ∀θ.
- Theorem 2: Bayes prediction rules are admissible (dominance by a competing rule implies strictly smaller Bayes risk on a set of strict improvement, contradiction).
- Corollary-style remark: the posterior predictive mean is admissible and minimizes Bayes prediction risk under squared-error loss (weak conditions, not spelled out).
- Assumptions: proper prior integrating to unity, g(θ) > 0 everywhere; continuous variables, Lebesgue-integrable densities, Fubini conditions, continuous risks.
## Data sources named
None — no datasets, no data of any kind (theory note).
## Findings (numbers and facts, not vibes)
- Zero numerical results; validation is by proof only.
- The paper's own admission: Berger and Robert "remark upon the ease" of extending the estimation results; no explicit result was previously stated.
- Admissibility is a weak optimality property: it only says no rule uniformly dominates; many bad rules are admissible.
- Worker notes "Kelly criterion, zero papers read" as a standing gap in the research map — the only potential touchpoint, as an improvement experiment suggests posterior predictive distributions over game outcomes for Kelly-style bet sizing, scored on log-loss and realized betting ROI on 2020–2025 nflverse.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Bayesian decision theory / uncertainty foundations. No QB, coaching, OL, trust-signal, or scheme content. NGS-adjacent companion to paper 0485 (admissible predictive density estimation, the frequentist analog).
## Engine-actionable? (yes/no + one-line what)
no — purely conceptual note with nothing to implement; justifies existing Bayesian practice rather than proposing methodology.
