# PROJECT MOVE-37 — FINAL PROMPT: THE THEORY ATLAS & THE TOURNAMENT

**Galaxy Sports Edge | Theorist Deliverable: PROMPT (not a result)**
Date: 2026-09-13 | Status: Ready to paste to DeepSeek

---

You are the theorist in Project Move-37, a machine-discovery loop for sports mathematics. Read this entire prompt before producing anything.

## 0. MISSION

So far we hunted single formulas: a leverage index (GLI-0.1, unverified), a time-term anomaly in EPA², a residual-unpredictability target (execution queued). That was the warm-up.

This is the final and most ambitious prompt. Stop hunting single formulas. Do three things:

1. **THE THEORY ATLAS** — survey every mathematical framework that could crack sports open, go deep on each, rank them honestly.
2. **THE FLAGSHIP** — take your #1 theory and deliver a complete, execution-ready experimental script.
3. **THE TOURNAMENT** — design the permanent validation harness every future discovery must survive, plus the meta-discovery target search.

## 1. STATE OF THE PROJECT (your context)

- **GLI-0.1**: claimed machine-discovered NFL leverage metric from symbolic regression on EPA². UNVERIFIED — never present it as fact. Its numbers came from an earlier phase whose execution cannot be confirmed.
- **Time-term anomaly**: both symbolic regression engines dropped `quarter_seconds_remaining` from the EPA² leverage formula. Hypothesis: EPA's construction (an era-adjusted model output, not raw reality) explains it. A WPA² win-leverage test is queued to check whether time reappears when the target is time-dependent.
- **Residual unpredictability**: gradient boosting predicts EPA from nine pre-snap features; the target is |epa − epa_hat|. Execution queued on the lab machine.
- **Your role**: theorist and protocol engineer. You have NO code-execution environment — we verified this. The lab (my machine) executes your scripts verbatim and returns stdout. Never claim you executed anything. Never invent numbers, citations, or results.

## 2. DELIVERABLE A — THE THEORY ATLAS (the core of this prompt)

Survey **at least 15 mathematical frameworks** that could discover sports mathematics no human has found. Go deep on each of the 12 seeded below, then add **at least 3 of your own** that are not on this list.

For EACH framework, deliver exactly these six items:
- (a) **The math** — 3 sentences max, precise enough that a competent engineer could implement it.
- (b) **Why it could crack sports** — what structure it detects that current analytics cannot see.
- (c) **The discovery target it implies** — the exact quantity to be discovered/modeled.
- (d) **The equation class** — algebraic, ODE, SDE, PDE, operator, graph, topological, information-theoretic, etc.
- (e) **White-space evidence** — who has done this in sports, with real citations, or a confirmed absence with your search reasoning.
- (f) **A falsifiable prediction** — a specific, measurable statement, plus the exact result that KILLS the theory (clean kills, not ambiguous mush).

**Seeded frameworks (go deep, no skimming):**

1. **SINDy (Sparse Identification of Nonlinear Dynamics).** From time series of game-state variables x(t) (score differential, timeout inventory, win probability sampled per play/drive), build a library Θ(x) of candidate functions and sparse-regress ẋ ≈ Θ(x)ξ to discover the governing ODE of game flow.
2. **Koopman operator / DMD.** Approximate the Koopman eigendecomposition from game-state trajectories; eigenfunctions are linear "momentum modes" with measurable growth/decay rates and timescales — momentum made rigorous, or killed.
3. **Inverse Reinforcement Learning.** From observed 4th-down decisions (go/punt/kick), infer the reward function R(s) that makes coaching behavior near-optimal. This recovers coaches' TRUE utility functions — risk aversion, time preference, loss aversion coefficients — never directly measured in sports history.
4. **Partial Information Decomposition.** Decompose I(features; outcome) into unique, redundant, and synergistic atoms. Find feature pairs/triples with high SYNERGY — information available only jointly, invisible to additive models and human heuristics.
5. **Causal discovery (PC/FCI/NOTEARS).** Learn the DAG over pre-snap variables → outcomes from conditional-independence structure. Separate what CAUSES EPA from what merely correlates (does shotgun cause EPA differences, or does game state cause both?).
6. **Spectral graph theory on the game-state transition graph.** Nodes = discretized states (down × distance bucket × field zone × score bucket); edges = observed transitions. Compute Cheeger bottlenecks, mixing times, trap states. Hypothesis: great defenses push offenses into low-conductance regions — measurable "trapping."
7. **Stochastic volatility decomposition.** Model EPA = μ(state) + σ(state)·ε; discover the VOLATILITY SURFACE σ(state) separately from drift μ. Volatility is the temperature of game states — when to embrace variance vs. avoid it.
8. **Catastrophe theory / tipping points.** Fit fold/cusp bifurcation manifolds to the win-probability surface over (score, time). Locate the true "game over" manifold — exact combinations where win probability discontinuously collapses.
9. **TDA / persistent homology.** Vietoris-Rips complexes on game trajectories in state space; persistence diagrams as the topological shape of how games unfold. Do winning teams trace topologically distinct trajectories?
10. **Hurst exponents / long memory.** Estimate H via DFA on play-level scoring series, per team and situation. H>0.5 = momentum is real; H<0.5 = mean-reverting; H≈0.5 = momentum is narrative. Settle sports' most debated question mathematically.
11. **Bayesian surprise / free energy.** Surprise = D_KL(posterior || prior) after each play's outcome. Discover the expected-surprise surface over pre-snap state — a formal theory of which situations are maximally informative (a mathematical theory of excitement).
12. **HJB optimal stopping for 4th down.** Formulate 4th-down decisions as stochastic control; solve the Hamilton-Jacobi-Bellman equation for the optimal policy under the EP model. The gap between HJB-optimal and actual coaching = a quantified, discovered map of human bias by field zone, score, and time.

**Then rank all 15+ frameworks** by expected value = P(genuine discovery) × impact × executability. Show your work: give each an honest prior probability and one paragraph of reasoning. No framework gets above 40% prior without extraordinary justification — the base rate of discovering new sports mathematics is near zero, and your priors must respect that.

## 3. DELIVERABLE B — THE FLAGSHIP EXPERIMENT

Take your #1 ranked theory. Deliver BOTH:
- (i) **Full protocol**: research background, exact data spec (nflverse via nflreadpy, seasons, filters), target construction, feature set, train/test splits (season-based primary + replication), every baseline including a human heuristic written as math, the complete validation battery, pre-registered predictions (point estimates + ranges), and falsification conditions.
- (ii) **Zero-input Python script** meeting the Phase-4 execution standard: Python 3.11, Linux, pip-installable PyPI packages ONLY (scientific stack allowed: numpy, pandas, scipy, scikit-learn, gplearn, nflreadpy, networkx, pysindy — no Julia, no PySR), runs cold with one command, every table prints to stdout, no placeholders, no TODOs, no user input. Self-audit it before delivery and include a v1→v2-style changelog of what you caught and fixed.

## 4. DELIVERABLE C — PROTOCOLS FOR RANKS #2–4

Complete experimental protocols for your next three theories — same rigor as B(i): targets, features, splits, baselines, validation battery, pre-registered predictions, falsification conditions. Script-ready, but not yet scripted. If the flagship fails, these are the next three shots.

## 5. DELIVERABLE D — THE TOURNAMENT HARNESS (permanent infrastructure)

This is the "harness" — the immune system against false discovery. Design and deliver a reference implementation of `tournament.py`, a reusable module through which EVERY claimed discovery must pass. It must include:

- `load_splits()` — season-based primary + replication splits, standardized.
- `baselines()` — B1 (train mean) / B2 (human heuristic, supplied as a callable) / B3 (prior best formula) pattern.
- `bootstrap_ci()` — ≥500 resamples, 95% CIs on the headline metric.
- `replicate()` — refit constants on split 2, report R² and coefficient stability.
- `ablate()` — feature ablation with the ΔR² ≥ 0.02 survival rule.
- `shuffle_null()` — shuffled-target adversarial validation with the 0.05 invalidation threshold.
- `cross_era()` — train on pre-2020 rule era, test post-2020 (rule-change robustness).
- `transfer_null()` — where applicable, evaluate the formula on a different league/sport; a law-like discovery should partially transfer, an overfit artifact will not.
- `verdict()` — mechanical pass/fail against pre-registered criteria.
- **DISCOVERY CARD schema (JSON)** — every claimed discovery ships as a card: formula, target, splits, metrics, CIs, ablations, null results, verdict, mechanism story (the causal narrative in plain language), and a coach-surprise rating (1–5: would an NFL coach find this obvious or startling?).

## 6. DELIVERABLE E — TARGET SEARCH (meta-discovery)

Stop assuming the target. Specify a systematic screening sweep across **at least 10 candidate discovery targets**, e.g.: EPA², |GBM residual|, quantile pinball losses (τ ∈ {.1, .5, .9}), expectiles, Shannon surprise of outcome, the volatility surface σ(state), win-probability displacement, drive-outcome entropy, EPA tail exceedance indicators, and your own additions.

Design it as a two-stage funnel: **Stage 1 (cheap screen)** — GBM feature-importance concentration + linear-probe R² + noise-ceiling estimate per target, run in minutes; **Stage 2 (commit)** — full symbolic-regression compute only for targets passing pre-registered screen thresholds. Pre-register the pass/fail thresholds. The output is a ranked target leaderboard, not a formula.

## 7. NOVELTY & KILL CRITERIA (apply to everything above)

- **Discovery bar**: beats the best human heuristic by ≥0.03 on the task metric, replicates out-of-sample (R² > 0.05 on replication split), survives every adversarial null, is non-obvious (mechanism story stated; coach-surprise ≥ 3), and ships as a Discovery Card.
- **Kill criteria**: for each theory and each target, state the exact result that kills it. Nulls are clean kills. Ambiguous mush is a protocol failure, not a result.

## 8. STANDING CONSTRAINTS (non-negotiable, carried from all phases)

- You have no execution environment. Never claim execution, directly or by implication.
- Never invent results, numbers, citations, or "expected outputs" with filled-in values.
- Every claim labeled FACT (with basis), INFERENCE (with reasoning), or SPECULATION (pre-registered where applicable). Maintain the epistemic ledger.
- Continue the assumptions log from #21. Number new assumptions sequentially.
- Pre-registered predictions must be specific ranges and falsifiable statements, not vibes. Include honest priors that respect the near-zero base rate.
- Self-audit every script; deliver the changelog of caught errors.

## 9. QUALITY GATE — tick every box or the deliverable is rejected

- [ ] Atlas covers ≥15 frameworks, each with all six items (a)–(f), plus ≥3 frameworks of your own invention beyond the seeds.
- [ ] White-space claims carry real citations or explicit confirmed-absence reasoning — no "to my knowledge" hand-waving.
- [ ] Ranking shows honest priors (nothing above 40% without extraordinary justification) with reasoning per framework.
- [ ] Flagship protocol is complete enough to script from; flagship script is zero-input, stdout-complete, self-audited with changelog.
- [ ] Tournament harness is a real reference implementation, not a sketch — importable functions with the exact validation battery.
- [ ] Target search is a two-stage funnel with pre-registered thresholds, not a vague proposal.
- [ ] Every theory and target has kill criteria. Every claim has an epistemic tier. Assumptions log continues past #21.
- [ ] No invented results anywhere. No vibes-as-predictions.

Handoff: deliver the Atlas, the ranked list, the Flagship (protocol + script), protocols #2–4, tournament.py, and the target-search spec. The lab executes the flagship script verbatim on return and sends you the stdout for the analysis round.
