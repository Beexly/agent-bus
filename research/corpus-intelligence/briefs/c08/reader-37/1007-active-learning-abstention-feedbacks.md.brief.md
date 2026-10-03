# docs/arxiv-program/research/2026-09-21/arxiv-deep/1007-active-learning-abstention-feedbacks.md
## What it is (1-2 sentences)
Paper ledger (Nguyen et al., arXiv:1906.02179v2): Bayesian active learning where the labeler may abstain on any queried example (unknown rate, abstention counts against budget N) — two greedy query rules jointly learn the classifier and the abstention pattern with (1−1/e) near-optimality guarantees. ADAPT verdict: map to GSE's weekly research budget — spend research hours on questions that will actually get answered, not dead-end queries.

## Key metrics/methods (formulas where given, else "not specified")
- BALAF framework: joint Bayesian posterior over label functions h and abstention functions r; label received → update both; abstention → update only r.
- r̃(x) = E_{r∼p_{i−1}}[r(x)] (posterior-mean abstention probability, Eq. 2).
- Average-case greedy (ALa): x* = argmax_x {1 − r̃(x)² − (1−r̃(x))² Σ_y p_{i−1}[Y=y;x]²} (Eq. 3) — Gibbs-error-like with abstention terms; within (1−1/e) of optimal expected utility (adaptive submodularity).
- Worst-case greedy (ALw): least-confidence-like with abstention terms; within (1−1/e) of optimal worst-case utility (pointwise submodularity).
- Model: Bayesian logistic regression, N(0,σ²) priors on ℋ and ℛ; MAP estimation.

## Data sources named
20 Newsgroups binary pairs (rec.motorcycles vs rec.sport.baseball; comp.sys.mac.hardware vs comp.windows.x; sci.crypt vs sci.electronics; sci.space vs soc.religion.christian); >61,000-dim features; pool 1,322. Three abstention scenarios: abstain on unrelated examples, on easy examples, on hard examples. Metric: AUAC over first 300 queries, normalized 0–100, 10 random seeds.

## Findings (numbers and facts, not vibes)
- Scenario 1 (unrelated): ALa/ALw consistently beat passive learning and standard active learning at abstention ≥40%; with a good r* estimate, better above 30%.
- Scenario 2 (abstain on easy): ALa/ALw clearly better above 50% abstention; advantage fades at low abstention (learning r costs more than ignoring it).
- Scenario 3 (abstain on hard): ALa/ALw better only at 20–40%; without a good r* estimate, little advantage elsewhere. With a good r* estimate, ALa/ALw best everywhere.
- Limitations noted: results chart-read, no numeric tables or confidence bands on 10 seeds; abstention model doubles modeling cost.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER**: GSE's analogue of abstention feedbacks = research queries that return nothing (injury news never resolving, silent beat writers, immobile lines); Garrett's weekly research hours are the fixed budget N. Research-process tooling, not a prediction feature.

## Engine-actionable? (yes/no + one-line what)
Yes — implement a weekly research-budget allocator: score each candidate research question by label uncertainty × (1 − r̃ no-answer probability), track per-question-type abstention rates, update from outcomes; acceptance gate is +15 pp answered-question rate at fixed budget.
