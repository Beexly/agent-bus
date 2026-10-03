# arxiv-program/research/2026-09-21/arxiv-deep/1834-vertical-symbolic-regression.md
## What it is (1-2 sentences)
A ledger on Jiang, Nasim & Xue (arXiv:2312.11955): Vertical Symbolic Regression — instead of searching all variables at once ("horizontal"), run control-variable experiments freezing most variables, learn reduced forms, then extend round-by-round; provably shrinks the search space exponentially and empirically dominates GP/MCTS on multi-variable recovery (e.g., VSR-MCTS 100% vs MCTS 20% with 8 vs 249 min).
## Key metrics/methods (formulas where given, else "not specified")
- Control Variable Experiment: CvExp(φ, v_c, v_f, {T_k}_{k=1}^K) — controlled variables v_c fixed within a trial (varied across K trials), free variables v_f random; requires a data oracle (simulator) for arbitrary controlled queries.
- Reduced forms: with v_c fixed, ground truth φ=x1x3−x2x4 looks like φ′=C1x1−C2; open constants fit per trial by BFGS (500 iters); constants' variation across trials reveals the next variable's role.
- Vertical framework: round 1 = SR over 1–2 free variables; each round adds freed variables, extending prior expressions; φ_{r+1} = extend(φ_r, new free variables).
- Two regressors: VSR-GP and VSR-MCTS (context-free-grammar MCTS, adapted to vertical rounds). Theory (Sec. 5): VSR search space exponentially smaller than horizontal for a class of expressions.
## Data sources named
Synthetic trigonometric datasets with operator sets {inv,+,−,×}, {sin,cos,+,−,×}, {sin,cos,inv,+,−,×} at complexity levels (2,1,1) and (3,2,2); Feynman/Livermore-style sets. Success = recovery with R² ≥ 0.999 (hand-checked), 48-hour limit.
## Findings (numbers and facts, not vibes)
- {inv,+,−,×}, (3,2,2): VSR-GP 70% vs GP 40% (10 vs 21 min); VSR-MCTS 70% vs MCTS 40% (5 vs 38 min).
- {sin,cos,+,−,×}, (3,2,2): VSR-MCTS 100% vs MCTS 20% (8 vs 249 min, 61 vs 191 MB); VSR-GP 50% vs GP 40%.
- {sin,cos,inv,+,−,×}, (3,2,2): VSR-MCTS 70% vs MCTS 0% (17 vs 287 min); VSR-GP 20% vs GP 30% (GP slightly better; VSR-GP expressions hand-checked shorter/simpler, e.g. x+x instead of 2x).
- Limitations: the data oracle is the whole game — without true controlled experiments it collapses to observational conditioning; synthetic trig only; GP beat VSR-GP on the hardest set; misidentified early rounds poison later ones (no backtracking).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Curriculum/staged metric search: round 1 = 2-feature metrics (success rate + EPA/play), round 2 = add explosiveness, round 3 = situational splits — mirrors how analysts actually build metrics (OTHER — metric discovery)
- Observational control via binning controlled variables (down/distance buckets) and fitting reduced forms per bin; constants varying across bins reveal the controlled variable's role (OTHER — SR method)
- Regime-vertical SR: run rounds over game regimes (neutral-script → trailing → leading) to test whether football relationships are regime-decomposable (SCHEME)
## Engine-actionable? (yes/no + one-line what)
yes — Build VSR-PySR: staged rounds with growing feature subsets (seed each round from prior hall-of-fame, residualize "controlled" features), adopt if it matches horizontal test R² with ≤50% expression length or ≤50% compute on nflverse EPA/play.
