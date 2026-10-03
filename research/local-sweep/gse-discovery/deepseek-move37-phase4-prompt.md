# PROJECT MOVE-37 — PHASE 4: THE HANDOFF PROTOCOL
## Follow-up prompt for DeepSeek. You have your Phase 3 final report (MOVE-37-WL-01). Execute ALL of the below on your own. Do not ask clarifying questions.

---

## 0. ROLE CHANGE — READ FIRST

Your Phase 3 execution-status disclosure was correct and honest. It followed Rules 3 and 6. It also changes your job permanently:

- You are now the THEORIST and PROTOCOL ENGINEER. You research, you design, you write execution-ready code.
- Execution happens on OUR machine. We run your script verbatim and return the complete stdout to you.
- You NEVER invent results. When we return real numbers, you analyze them. Until then: protocol + code + pre-registered predictions only.
- From this phase on, this project runs on the HANDOFF LOOP: (1) you deliver script + predictions, (2) we execute and return full stdout, (3) you deliver analysis + next script. Design everything for this loop.

---

## 1. ENVIRONMENT SPEC — WRITE CODE FOR EXACTLY THIS

- Python 3.11, Linux. Allowed imports ONLY: nflreadpy, gplearn, scikit-learn, numpy, pandas. NO PySR (no Julia on the execution machine). NO other dependencies.
- gplearn native function set only: add, sub, mul, div, sqrt, log, abs, neg, inv, max, min, sin, cos, tan. NOTE: tanh is NOT native to gplearn. If you want tanh, define it inside the script via gplearn.functions.make_function and include that definition in the delivered code.
- The script runs as `python script.py` with zero user input. ALL result tables print to stdout. No plots to screen (you may save figures to files, but stdout tables are mandatory).
- Keep runtime sane for a modest machine: population_size ≤ 2000, generations ≤ 30, ≤ 3 seeds per experiment.

---

## 2. MISSION — TARGET DISCOVERY (Battle Plan v3, Experiment A)

Your deepest Phase 3 lesson: "SR on existing metrics recovers the metrics' input structure. The only way out of circularity is to target something no human metric encodes." This phase tests that lesson.

**Target: residual unpredictability.**
1. Inside the script, train a pre-snap gradient-boosting model (scikit-learn HistGradientBoostingRegressor) on the same 9 pre-snap features from Phase 2 to predict EPA.
2. Compute residual magnitude: `y = |epa − epa_hat|`.
3. Run gplearn symbolic regression to discover what pre-snap features predict y.

The question: which pre-snap situations produce the most UNPREDICTABLE plays? No human metric measures this. If the method can find structure here, it has escaped circularity.

**Baselines (all computed in-script, B2 written as math in your report):**
- B1: train-mean predictor.
- B2: a human-designed unpredictability heuristic YOU construct (define it as math — reason from football: which situations should produce chaos? late downs? long distance? backups? bad weather proxies? Write the formula, compute its R²).
- B3: GLI-0.1 evaluated on this target (cross-target transfer, same as Phase 3).

**Splits:** primary train 2021+2022 → test 2023; replication train 2022+2023 → test 2024 (refit winning formula's constants via linear regression for the replication check, exactly as in Phase 2 §4.5).

**Pre-registered success criteria (ALL must hold for a claimed discovery):**
- Holdout R² > 0.10 on the primary split, bootstrap 95% CI (≥500 resamples, computed in-script) excluding B2.
- Beats B2 by ≥ 0.03 on the primary split.
- Replicates at R² > 0.05 on the 2024 split.
- Passes the one-sentence interpretability test.
- Any claimed novel term passes the ablation test (code included in-script: remove the term, refit constants, report ΔR²; survives iff ΔR² ≥ 0.02).

**Adversarial validation (integrated, per v3 Experiment C):** after the winning formula is selected, the script must run a shuffled-target null — shuffle y within each game on the test set, recompute the formula's R², print it. Invalidation threshold: shuffled R² > 0.05 invalidates the formula. Print the verdict.

---

## 3. PRE-REGISTERED PREDICTIONS — YOUR JOB BEFORE WE RUN

State explicitly in the report:
(a) your predicted R² range for the best SR formula on the primary split;
(b) which features you expect to survive in the winning formula and why (two sentences max per feature);
(c) what result would FALSIFY the claim "residual unpredictability has discoverable pre-snap structure";
(d) your honest prior: does this target break the Phase 2/3 pattern (mechanical recovery of human-encoded structure) or repeat it? Give a probability and one paragraph of reasoning.

We will score these predictions against the real numbers next round. Vague predictions ("R² will be moderate") score zero — give ranges.

---

## 4. RESEARCH — SHORT AND TARGETED (do not let this eat the mission)

(a) Has anyone published a metric of play unpredictability, surprise, or entropy in any sport? Search properly. If yes: who, what formula, what adoption. If no: document the search — confirmed absence is a finding and it evidences the white space for THIS target.
(b) Confirm from nflfastR documentation which features the EP model uses. Your residual must not be trivially explainable as "plays where the EP model's inputs were extreme" — check this and report it.
(c) One paragraph: why might residual unpredictability be MORE predictable than raw EPA² was? Or less? Reason from the structure of the target, not from hope.

---

## 5. DELIVERABLES

1. **Executive summary** (≤200 words).
2. **Research notes** (short — §4 only).
3. **The script** (complete, runnable, environment-spec compliant — THIS IS THE MAIN DELIVERABLE).
4. **Pre-registered predictions** (§3 — explicit, scored next round).
5. **Analysis template**: the exact tables, checks, and questions you will fill in when we return stdout. Make next round mechanical: list every table with its columns and every verdict with its rule citation.
6. **Assumptions log** (new only, numbered continuing from Phase 3).
7. **Epistemic ledger** (top claims going INTO the run, tiered).
8. **Quality gate** (below).

---

## 6. QUALITY GATE — ADAPTED FOR THE HANDOFF LOOP

- [ ] Script imports ONLY the allowed packages. No PySR, no Julia, no placeholders, no TODOs.
- [ ] tanh (if used) is defined via make_function INSIDE the script.
- [ ] A cold run needs nothing but `python script.py`; every table prints to stdout.
- [ ] B1, B2, B3 all computed in-script; B2 written as math in the report.
- [ ] Bootstrap CIs (≥500 resamples) computed in-script for the headline R².
- [ ] Ablation code included for any novel-term claim.
- [ ] Shuffled-target null integrated with the 0.05 invalidation threshold and a printed verdict.
- [ ] §3 predictions are specific ranges and falsifiable statements, not vibes.
- [ ] No invented results anywhere. No "expected output" tables with filled-in numbers.

Deliver the script + report. We execute and return full stdout. Next round you analyze REAL numbers — the first real numbers of this project.
