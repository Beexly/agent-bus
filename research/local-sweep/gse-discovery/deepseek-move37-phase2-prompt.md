# PROJECT MOVE-37 — PHASE 2: THE LEVERAGE HUNT
## Follow-up prompt for DeepSeek. You have your Phase 1 final report (MOVE-37-0913). Execute ALL of the below on your own. Do not ask clarifying questions.

---

## 0. WHERE WE STAND — YOUR OWN FINDINGS, NOW DIRECTIVES

Your Phase 1 established three things. They are no longer hypotheses; they are your starting orders:

1. **The white space is real.** No widely-used sports metric was machine-discovered. Every major metric was human-designed.
2. **Naive EPA prediction is dead.** Pre-snap → mean EPA carries ~zero signal (your baseline R² = 0.0000; your discovered formula was a trivial linear pair). Do not attempt mean-EPA prediction again in any form.
3. **Your best inference: the bottleneck is target design, not search power.** Your ranked #1 next step was discovering a situational leverage/variance metric. That is now your primary mission.

Your admitted weaknesses from §11 are now assigned repair tasks: single run → multiple runs; single algorithm → at least two algorithms; single target → the two targets below; PySR install failure → genuine retry with a proper Julia installation.

---

## 1. OPERATING RULES

All 8 non-negotiable rules from Phase 1 still apply in full (autonomy, sourced facts, no invented numbers, code must run, epistemic tiers, honest nulls, iterate don't surrender, no stopping at research). Add these Phase 2 rules:

9. **No re-running dead targets.** Mean EPA, or any target you already showed carries no signal, is off the table.
10. **Human-baseline rule.** Beating the training mean is no longer sufficient. Every candidate metric must also beat the best HUMAN-DESIGNED heuristic for the same job — which you must define explicitly before running (e.g., for leverage: a down × distance × field-position × score-differential heuristic you construct and document, or pre-snap win-probability swing). If you cannot beat a competent human heuristic, you have not discovered anything.
11. **Stability requirement.** A discovery that only works on one season split is curve-fitting. Every claimed metric must replicate on at least TWO different train/test season splits (e.g., train 2021–2022 → test 2023, AND train 2022–2023 → test 2024).
12. **Interpretability requirement.** The final metric must be explainable in one plain football sentence. If you cannot say what it measures in one sentence, it is not a metric, it is an artifact.
13. **Metric cards.** Every candidate metric gets a formal metric card (spec in §5). No card, no claim.

---

## 2. PRIMARY MISSION — EXPERIMENT 1: THE LEVERAGE METRIC

Discover a machine-derived formula that quantifies **situational leverage**: how much a single play can swing a game's outcome, computed from pre-snap information only.

**Target design (choose one, document why, pre-register your choice):**
- Option A: `y = epa²` (raw squared EPA — simple, captures magnitude of swing).
- Option B: `y = (epa − epa_expected)²` where `epa_expected` is predicted by a small pre-snap gradient-boosting model you train first (residual variance — cleaner, removes the predictable mean component).
- Option C: absolute change in win probability attributable to the play, if a pre-snap WP column is available without leakage (verify carefully — document your verification).

**Features:** pre-snap only. Reuse your Phase 1 leakage audit; re-verify any column you did not personally audit last time.

**Algorithms (minimum two):**
1. gplearn (your working tool).
2. A genuine second attempt at PySR: install Julia properly this time (apt/pacman julia or juliaup — you have a shell; diagnose the actual PyCall.jl failure from your Phase 1 log and fix the root cause). If PySR still fails after 5 genuine debug iterations, fall back to a from-scratch tree-based genetic programming implementation you write yourself (~150 lines over {+, −, ×, ÷, sin, exp, constants}), OR a gradient-boosting model used strictly as a signal-ceiling probe (labeled as such — it tells us how much signal exists even if it yields no formula).

**Baselines (both, pre-registered):**
- B1: training-mean predictor (holdout R² ≈ 0, as before — the floor).
- B2: your human-designed leverage heuristic (define it, write its formula, compute its holdout R² — the bar to beat).

**Pre-registered success criteria (ALL must hold):**
- Holdout R² > 0.10 on the primary split.
- Beats B2 (human heuristic) by ≥ 0.03 R² on the primary split.
- Replicates: same formula (refit constants allowed) achieves R² > 0.05 on the second season split.
- Formula complexity > 5 nodes (non-trivial) and passes the one-sentence interpretability test.

**Budget:** minimum 3 full runs per algorithm on the primary split (different random seeds), plus the replication split for the best candidate.

---

## 3. SECONDARY MISSION — EXPERIMENT 3: DRIVE-LEVEL SUCCESS (attempt if time permits after §2)

Aggregate nflverse play-by-play to the drive level. Target: points scored on the drive (0/3/6/7/8). Features: pre-drive only (starting field position, time remaining, score differential, timeouts, a team-strength proxy you define and document). Same rigor: two algorithms, human-heuristic baseline (define one), two season splits, pre-registered criteria (holdout R² > 0.15 vs. baseline, beats human heuristic). Lighter reporting than §2 — a compact results table plus metric card if successful.

---

## 4. FAILURE PROTOCOL

If BOTH targets fail their success criteria: that is a definitive, reportable result. Do not lower the bar mid-run. Instead, your report's analysis section must answer WHY with evidence: is there simply no pre-snap structure to find (signal-ceiling probe results), is the search failing (synthetic re-validation), or is the target wrong again (propose the single most promising next target with reasoning)? A rigorous null with a diagnosis is worth more than a weak "discovery."

---

## 5. DELIVERABLES

One structured report with EXACTLY these sections, in this order:

1. **Executive summary** (≤300 words).
2. **What changed since Phase 1** (target pivot rationale, PySR retry outcome, assumption changes — with the assumption numbers from your Phase 1 log).
3. **Experiment 1: protocol** (target choice + justification, feature list with leakage re-verification, algorithms, both baselines with the human heuristic written as math, pre-registered criteria verbatim).
4. **Experiment 1: code** (complete, runnable, as executed).
5. **Experiment 1: results** (per-run tables, per-algorithm comparison, per-split replication table, runtimes — all from real runs).
6. **Metric card(s)** — one per candidate metric that passed ALL success criteria. Each card contains: name (give it a real name, e.g. "Machine Leverage Index v0.1"), formula in plain math, what it measures (ONE football sentence), validation table (both splits, both baselines), known limitations (at least 3), recommended use at GSE (one paragraph, concrete).
7. **Experiment 3** (if attempted): compact protocol + results + metric card if earned.
8. **Analysis** (why the winner won / why everything failed — with the signal-ceiling evidence).
9. **Failure log** (everything that broke, errors, fixes — including the full PySR retry story).
10. **Epistemic ledger** (FACT / INFERENCE / SPECULATION for your top 10 claims, updated).
11. **Assumptions log** (new assumptions only, numbered continuing from Phase 1).
12. **GSE battle plan v2** — given everything you now know, three ranked next steps again. These must be DIFFERENT from or strictly deeper than Phase 1's list. Each: what, why (grounded in Phase 2 evidence), free data/tools, hours, falsifiable criterion, biggest risk.
13. **Self-critique** (weakest point of Phase 2; what 10× compute changes).

---

## 6. QUALITY GATE — CHECK YOURSELF BEFORE DELIVERING

- [ ] All 8 Phase 1 rules + rules 9–13 above were honored.
- [ ] Mean EPA was not attempted in any form.
- [ ] A human-designed heuristic baseline exists, written as math, with computed numbers.
- [ ] The winning candidate (if any) replicated on a second season split.
- [ ] Every metric card has a real name, a one-sentence football explanation, and ≥3 limitations.
- [ ] PySR was genuinely retried (with the root-cause fix documented) or its abandonment is justified with the attempt log.
- [ ] If null: the report contains a diagnosed WHY with signal-ceiling evidence, not just "it didn't work."
- [ ] Every number comes from code executed in this session; every outside fact is sourced.

Fix anything unchecked before delivering. Then deliver the full report.

---

Begin now. The leverage hunt is the whole game — find what the humans can't see, or prove it's not there.
