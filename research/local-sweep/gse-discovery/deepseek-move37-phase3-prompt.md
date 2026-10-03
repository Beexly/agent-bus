# PROJECT MOVE-37 — PHASE 3: WIN LEVERAGE AND THE NOVELTY HUNT
## Follow-up prompt for DeepSeek. You have your Phase 2 final report (MOVE-37-LEV-01). Execute ALL of the below on your own. Do not ask clarifying questions.

---

## 0. WHERE WE STAND — YOUR OWN FINDINGS, NOW DIRECTIVES

Phase 2 gave GSE its first real asset: **GLI-0.1**, a validated, interpretable, machine-discovered NFL leverage metric (R² = 0.112 primary / 0.079 replication, beats the human heuristic). It also gave you your sharpest self-critique, which is now your primary directive:

**"The machine's main contribution was dropping a term (time), not discovering a new interaction. A stronger result would have found a functional form that no human had considered."**

Phase 3 has two missions, in priority order:

- **MISSION 1 — Answer the question you posed:** does win-outcome leverage have a fundamentally different mathematical structure than scoring leverage? Your hypothesis: a WPA-targeted search will RETAIN time remaining, proving the structural distinction. Test it.
- **MISSION 2 — The novelty hunt:** find at least one functional form, interaction, or effect (threshold, saturation, non-monotonicity, ratio) that no human analyst proposed, validated by ablation. A cleaner human heuristic is no longer enough to count as a discovery.

GLI-0.1 is no longer just a result. It is now part of your baseline suite: any new leverage metric must beat GLI-0.1 AND the human heuristic.

---

## 1. OPERATING RULES

All Phase 1 rules (1–8) and Phase 2 rules (9–13) still apply. Add:

14. **No re-running dead targets.** Mean EPA (Phase 1) and drive-level points (Phase 2, signal ceiling ~0.05) are permanently off the table.
15. **Ablation rule.** Any claimed novel term or interaction must survive an ablation test: remove it from the formula, refit constants, and show R² drops by ≥ 0.02 on the primary test split. A term that can be removed without loss is decoration, not discovery.
16. **Novelty criterion (pre-registered).** A finding counts as GENUINELY NOVEL only if ALL hold: (a) it contains at least one functional form or interaction absent from every human heuristic you surveyed in Phases 1–2; (b) it passes the ablation test (rule 15); (c) it replicates on the second season split; (d) you can state the football intuition behind it in two sentences (novel ≠ uninterpretable).
17. **Uncertainty quantification.** Your headline R² numbers are point estimates from single splits. For the headline metric of Phase 3, report bootstrap 95% confidence intervals (≥500 resamples of the test set). A metric whose CI includes the human baseline is not a win.
18. **Head-to-head structure.** Mission 1 requires a direct term-by-term comparison of the scoring-leverage formula (GLI-0.1) vs. the win-leverage formula on identical features. Same features, different targets, explicit diff.

---

## 2. MISSION 1 — WIN-OUTCOME LEVERAGE (highest priority)

**Target:** `y = wpa²`, clipped at 99th percentile. (`wpa` is post-play; it is the LABEL ONLY. Never a feature.)

**Design — two variants, both required:**
- **Variant W1 (pure discovery):** same nine pre-snap features as Phase 2, `wp` EXCLUDED. This mirrors the GLI-0.1 setup exactly, so any structural difference between the W1 formula and GLI-0.1 is attributable to the target (scoring vs. win leverage), not the features.
- **Variant W2 (wp allowed):** same features PLUS pre-snap `wp`. Your Phase 2 report flagged the risk: a formula like `wp × (1 − wp)` is a strong trivial baseline. Pre-register BOTH a human WPA heuristic WITH wp (e.g., `wp×(1−wp)` scaled) and one WITHOUT. If SR merely rediscovers `wp×(1−wp)`, report it as a null-with-explanation, not a discovery. A discovery in W2 must beat the wp-based human heuristic by ≥ 0.03 AND contain non-wp structure that survives ablation.

**Pre-registered hypothesis (your own, from §12):** the W1 formula will retain a term involving `quarter_seconds_remaining` with non-trivial magnitude, because time genuinely matters for win probability in a way it does not for scoring probability. State now, before running, what result would FALSIFY this hypothesis (e.g., "if the best W1 formula drops the time term on both splits, the hypothesis is rejected").

**Algorithms:** gplearn + PySR (both working now). Minimum 3 seeds each on the primary split. **Expanded function sets this phase:** add `tanh`, `exp`, `sqrt`, `log` at minimum; attempt `erf`/`gaussian` if your stack supports them. You are hunting for threshold and saturation effects the multiplicative form cannot express.

**Splits:** same as Phase 2 (primary: train 2021–22 → test 2023; replication: train 2022–23 → test 2024).

**Baselines:** B1 train-mean; B2 human heuristics (define in math, both variants); B3 GLI-0.1 itself (compute GLI-0.1's R² on the wpa² target — a machine baseline).

**Success criteria (ALL must hold for a claimed win-leverage metric):**
- Holdout R² > 0.10 primary split, with bootstrap 95% CI excluding B2.
- Beats B2 by ≥ 0.03 and beats GLI-0.1 (on this target) by ≥ 0.02.
- Replicates at R² > 0.05 on the 2024 split.
- Passes the one-sentence interpretability test.
- Term-by-term diff vs. GLI-0.1 written up explicitly: which terms persisted, which vanished, which are new — and the football reason for each change (labeled INFERENCE where appropriate).

---

## 3. MISSION 2 — THE NOVELTY HUNT (second priority; attempt after Mission 1)

Take the best Phase 3 leverage formula (whichever target won) and push beyond the multiplicative human-shaped structure:

1. **Pareto-front sweep.** Run PySR with a wide complexity range (maxsize 10 → 40) and plot accuracy vs. complexity. Identify the knee. Is there a complexity region where accuracy jumps discontinuously? A discontinuity suggests a structural effect (threshold/saturation), not just more terms.
2. **Targeted functional probes.** Explicitly test three non-human-natural hypotheses, each as its own pre-registered run: (a) leverage SATURATES — test formulas containing `tanh()` of the multiplicative core; (b) leverage has a THRESHOLD — test piecewise/indicator structure around 4th down or the 2-minute warning; (c) leverage is RATIO-driven — test forms where leverage scales as a ratio of two situational quantities rather than a product. For each: pre-register the probe, run it, report R² vs. the multiplicative baseline, ablation-test any surviving term.
3. **Novelty verdict.** Apply rule 16 strictly. If nothing passes, report the null plainly: "the multiplicative structure appears to be the natural form of leverage; the machine's edge is term selection, not form discovery." That is itself a publishable finding about the limits of the method.

---

## 4. MISSION 3 — BATTLE PLAN v2, ITEMS B AND C (attempt only if Missions 1–2 are complete)

- **Experiment B (context-adjusted EPA):** per your Phase 2 §12 spec. gplearn SymbolicTransformer, year-over-year team offensive EPA correlation, falsifiable criterion: discovered transformation beats 1.5× raw-EPA repeatability.
- **Experiment C (NBA transfer):** per your Phase 2 §12 spec. If the NBA data fetch fails, document the block precisely and skip — do not burn more than 30 minutes on data access.
- Compact reporting for both. Metric cards only if earned under the same rules.

---

## 5. DELIVERABLES

One structured report, sections in order:

1. **Executive summary** (≤300 words: did win leverage differ structurally from scoring leverage? was anything genuinely novel found?).
2. **What changed since Phase 2** (GLI-0.1 as baseline, hypothesis under test, assumption updates).
3. **Mission 1: protocol** (both variants, hypothesis + falsification condition stated BEFORE results, features, algorithms with expanded function sets, all baselines in math, pre-registered criteria verbatim).
4. **Mission 1: code** (complete, runnable, as executed).
5. **Mission 1: results** (per-variant, per-algorithm, per-split tables; bootstrap CIs for the headline metric; the term-by-term GLI-0.1 vs. W1/W2 diff table).
6. **Metric card(s)** for any new validated metric (same card spec as Phase 2: real name, plain-math formula, one football sentence, validation table with CIs, ≥3 limitations, concrete GSE use).
7. **Mission 2: novelty hunt** (Pareto sweep results, the three functional probes with pre-registered predictions vs. outcomes, ablation table, novelty verdict under rule 16).
8. **Mission 3** (if attempted): compact protocol + results.
9. **Analysis** (the structural answer: WHY does win leverage differ from scoring leverage, or why doesn't it — with the time-term evidence front and center).
10. **Failure log.**
11. **Epistemic ledger** (top 10 claims, updated).
12. **Assumptions log** (new only, numbered continuing).
13. **GSE battle plan v3** — three ranked next steps, DIFFERENT from or strictly deeper than v2. Must account for everything learned in Phase 3. Same per-item spec (what, why grounded in evidence, free data/tools, hours, falsifiable criterion, biggest risk).
14. **GLI-0.1 public launch brief** (≤500 words, plain football English, no equations beyond the one formula, written for sports fans on X): what it is, what it found (the missing time term), what it doesn't do, why a machine found it. This is publishable content for GSE — write it like an analyst, not an academic.
15. **Self-critique** (weakest point of Phase 3; what 10× compute changes).

---

## 6. QUALITY GATE

- [ ] All Phase 1 + Phase 2 + Phase 3 rules (1–18) honored.
- [ ] The time-term hypothesis was stated with its falsification condition BEFORE results.
- [ ] Both W1 and W2 variants were run; W2's trivial-`wp` outcome handled per protocol.
- [ ] Term-by-term GLI-0.1 vs. new formula diff exists as an explicit table.
- [ ] Bootstrap 95% CIs computed for the headline metric; CI vs. human baseline checked.
- [ ] Every claimed novel term passed the ablation test (ΔR² ≥ 0.02 on removal).
- [ ] The novelty verdict was rendered under rule 16 — including a plain null if nothing passed.
- [ ] Metric cards (if any) meet the Phase 2 card spec; the public launch brief is written for fans, not academics.
- [ ] Battle plan v3 is strictly deeper than v2, grounded in Phase 3 evidence.
- [ ] Every number from executed code; every outside fact sourced.

Fix anything unchecked before delivering. Then deliver the full report.

---

Begin now. Two questions, both answerable: is win leverage a different animal than scoring leverage — and can the machine find a form no human would write?
