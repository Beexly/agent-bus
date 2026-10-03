# arxiv-program/research/2026-09-21/arxiv-deep/2171-discover-physics-informed-gpu-accelerated-symbolic-regression-framework.md
## What it is (1-2 sentences)
A full research ledger on DISCOVER (arXiv:2602.06986, Gajera et al. 2026, software paper): a Python-native, GPU-accelerated symbolic regression framework whose differentiators are hard dimensional-consistency enforcement via the `pint` unit library during feature generation (invalid expressions pruned before evaluation) plus multiple exact/heuristic sparse solvers (OMP, MIQP, simulated annealing) for the L₀ problem. Verdict: ADAPT — the unit-tracking idea is the hard-constraint complement to ledger 2168's soft LLM judge.

## Key metrics/methods (formulas where given, else "not specified")
- DISCOVER (Data-Informed Symbolic Combination of Operators for Variable Equation Regression): generates candidate symbolic features from user features + operator library, then solves the sparse descriptor problem with interchangeable strategies: Orthogonal Matching Pursuit (OMP), Mixed-Integer Quadratic Programming (MIQP), simulated annealing, heuristics.
- Core objective (Eq. 1): min_β ‖y − Φβ‖²₂ subject to ‖β‖₀ ≤ D (NP-hard L₀-regularized least squares; all strategies are approximations).
- Physics constraints via config file: operator restrictions, complexity caps, variable-combination rules; dimensional consistency enforced with `pint` — units tracked through every symbolic operation, dimensionally invalid candidates excluded during generation, shrinking search space.
- GPU acceleration: CUDA (NVIDIA) and MPS (Apple Silicon), CPU fallback; modular Python architecture.

## Data sources named
No new datasets — software paper. Motivating use cases cited from materials science: crystal structure stability descriptors, ion mobility in battery materials, magnetic-structure discrimination (features = atomic properties, targets = functional properties). Prior-art baselines cited: SISSO (Ouyang et al. 2018) deterministic baseline, SISSO++ large-scale alternative, authors' own ion-mobility descriptor papers.

## Findings (numbers and facts, not vibes)
- No numerical results or benchmarks in the paper — every performance claim is aspirational; treat as design doc, not evidence (limitations section: benchmarking ongoing).
- The ledger's novel GSE-relevant gap: ledgers 2166–2170 add soft/structural/statistical guards to GSE's SR runs (MDL, LLM judge, NED, Taylor priors), but NOTHING prevents generating "win_probability + temperature²" at feature-generation time — DISCOVER's pint-style unit tracking is the hard-constraint fix.
- Recorded adversarial limits: (a) SISSO-style linear-in-features assumption is narrower than full SR (no nested compositions like sin(x²+e^x) unless pre-generated); (b) hard unit constraints only help when the unit system is real — sports "units" are softer, and over-strict rules could block valid discoveries (paper's own stated limitation); (c) MIQP exact but scales poorly, no guidance on when each solver wins; (d) GSE has no GPU SR bottleneck today — acceleration angle irrelevant.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (symbolic regression / discovery infra): proposed sports unit registry for GSE's SR feature library — classes {probability [0,1], points, epa, rate, count, yards, time, dimensionless} with operation rules (probabilities only via sigmoid/logit composition; points ± points ok; points × probability forbidden; epa/play × plays → epa ok); generate candidates, tag units via pint-like propagation, drop unit-invalid pre-search; MIQP as exact sparse selector for the linear-in-features team-descriptor path (≤20 features).
- OTHER (improvement experiment): learned unit classes from data — bootstrap empirically via each feature's transformation behavior (boundedness, additivity under aggregation, sign stability) from 2015–2024 data and infer unit classes automatically, expert confirms; removes hand-constraint friction if inferred classes match expert labels on ≥90% of features.

## Engine-actionable? (yes/no + one-line what)
yes — GSE implementation spec included: build sports unit registry + generation wrapper (~1 week), MIQP path (~1 additional week), no new data cost; acceptance gate = filter prunes ≥40% of generated candidates pre-search AND recall check passes (zero historically selected features pruned — over-restriction = paper's warned failure mode) AND validation Brier within 1% of unconstrained run; REJECT if pruning <20% (sports units too soft) or any historically successful feature pruned or Brier degrades >1%; reproducible test = 2025 NFL win-probability discovery with vs without unit-constrained generation.
