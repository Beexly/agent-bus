# arxiv-program/research/2026-09-21/arxiv-deep/1834-vertical-symbolic-regression.md
## What it is (1-2 sentences)
Vertical Symbolic Regression (arXiv:2312.11955): instead of searching all variables at once ("horizontal"), it runs controlled experiments round-by-round — freeze most variables, learn reduced forms over 1–2 free variables, then extend each round by freeing more variables. Its theory proves exponential search-space shrinkage, and VSR-MCTS empirically dominates horizontal GP/MCTS on multi-variable recovery.

## Key metrics/methods (formulas where given, else "not specified")
- Control Variable Experiment: CvExp(φ, v_c, v_f, {T_k}_{k=1}^K) — trial expression φ, controlled variables v_c (fixed within a trial, varied across K trials), free variables v_f (random). Assumes a **data oracle** (simulator) generating data at arbitrary controlled settings.
- Reduced-form expressions: controlling v_c={x2,x3,x4} with v_f={x1} makes ground truth φ=x1x3−x2x4 look like φ′=C1x1−C2 (open constants fit by BFGS); constants' variation across trials reveals the next variable's role.
- Vertical framework: round 1 = SR over 1–2 free variables; each round adds freed variables, extending previous expressions; search stays in small hypothesis spaces early.
- Two regressors: VSR-GP and VSR-MCTS (MCTS over context-free-grammar expressions).
- Vertical extension: φ_{r+1} = extend(φ_r, new free variables).
- Theory (Sec. 5): VSR search space exponentially smaller than horizontal for a class of expressions.
- Recovery criterion: R² ≥ 0.999 = exact recovery, hand-checked; BFGS optimizer (500 iters).
- No verbatim loss equations given beyond the CvExp/extend notation.

## Data sources named
- Synthetic trigonometric datasets with operator sets {inv,+,−,×}, {sin,cos,+,−,×}, {sin,cos,inv,+,−,×} at complexity levels (2,1,1) and (3,2,2).
- Feynman/Livermore-style sets.

## Findings (numbers and facts, not vibes)
Table 4 (recovery % | time min | peak MB, 48h limit):
- {inv,+,−,×}, (3,2,2): VSR-GP 70% vs GP 40% (10 vs 21 min); VSR-MCTS 70% vs MCTS 40% (5 vs 38 min).
- {sin,cos,+,−,×}, (3,2,2): VSR-MCTS **100%** vs MCTS **20%** (8 vs 249 min, 61 vs 191 MB); VSR-GP 50% vs GP 40%.
- {sin,cos,inv,+,−,×}, (3,2,2): VSR-MCTS **70%** vs MCTS **0%** (17 vs 287 min); VSR-GP 20% vs GP 30% (GP slightly better here, but VSR-GP expressions hand-checked as shorter/simpler).
- VSR-MCTS uses less time/memory than MCTS across the board; hand-checks confirm VSR finds shorter, simpler equivalents (e.g. x+x instead of 2x).
- Noise-rate and quartile ablations performed (results not numerically extracted in file).
- Limitations: the data oracle is the whole game — without a simulator, vertical SR collapses to observational conditioning and the exponential-shrinkage theory assumes true control; synthetic trig equations only; no real-world validation; GP slightly beat VSR-GP on the hardest set (30% vs 20%) — vertical isn't universally better, MCTS benefits more; 48-hour compute budgets; reduced-form identification under noise is fragile — misidentified early rounds poison later ones (no backtracking described).
- GSE implementation spec in file: VSR-PySR — round r runs PySR restricted to feature subset S_r (S_1 ⊂ S_2 ⊂ ...); seed round r+1's population with round r's hall-of-fame; "control" approximated by residualizing (regress target on controlled features' current best form, search free features against residuals); observational control = bin controlled variables (e.g. down/distance buckets), fit reduced forms per bin. Data: nflverse play-level (EPA/play), 6–10 features. Effort: ~3 days.
- Reproducible test in file: nflverse 2015–2022 plays (target EPA/play), 2023–2025 test; horizontal PySR vs VSR-PySR (3 rounds); metrics = test R², expression length, wall-clock time, recovery of known structure (does it find success-rate + explosiveness decomposition?).
- Acceptance gate in file: ADOPT if VSR-PySR matches or beats horizontal test R² with ≤50% of the expression length or ≤50% of the compute time; REJECT if horizontal wins on both accuracy and simplicity.
- Improvement experiment in file: "Regime-vertical SR" — run vertical rounds over GAME REGIMES (round 1: neutral-script plays only; round 2: add trailing; round 3: add leading) to test whether football relationships are regime-decomposable; stable round-1 equations across regimes = regime-robust metrics, differences = content ("the equation changes when trailing").

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME (curriculum-learning for metric discovery): the vertical curriculum ports directly to how analysts actually build metrics — round 1: 2-feature metrics (success rate + EPA/play only); round 2: add explosiveness; round 3: situational splits — serving the equation-discovery program as the search-ordering principle that complements AI Feynman's modularity (file 1830). Full sentence: staged feature-subset search with hall-of-fame seeding between rounds should recover known football structure (success-rate + explosiveness decomposition) in simpler, shorter expressions at ≤50% compute, which is exactly what the public-facing rankings product needs.
- COACHING: the regime-vertical SR variant (rounds over neutral/trailing/leading script) is itself a coaching-tendencies detector — stable equations across regimes mean scheme-robust relationships; unstable ones quantify how a coaching staff's playcalling relationship structure changes with game script, serving the coaching-tendencies program with discovered (not stipulated) structure.
- TRUST-SIGNAL: if round-1 equations are regime-stable, the metric earns trust-target intake status as a regime-robust signal; if not, the regime differences become the finding — either outcome is actionable for the trust-target intake program.
- OTHER (calibration/sizing): UNCERTAIN whether the observational-control substitution (binning controlled variables instead of true experiments) preserves the exponential-shrinkage theory — the theory assumes true control, and reduced-form identification under noise is flagged fragile; the acceptance gate (match/beats horizontal R² at ≤50% length or time) is the honest test.
- CONTRADICTION: VSR-MCTS dominates (100% vs 20%, 70% vs 0%) while VSR-GP only roughly matches or loses to GP (20% vs 30% on hardest) — so the vertical benefit is regressor-dependent, and GSE's PySR (a GP-family engine) may see little gain; the file's own spec should arguably target an MCTS-based SR rather than VSR-PySR (INFERENCE).

## Engine-actionable? (yes/no + one-line what)
Yes — implement VSR-PySR (3 rounds, growing feature subsets, hall-of-fame seeding, residualized "control" approximation) on nflverse 2015–2022 EPA/play with 2023–2025 test; adopt at parity test R² with ≤50% expression length or ≤50% compute, and run the regime-vertical variant to quantify game-script equation drift.
