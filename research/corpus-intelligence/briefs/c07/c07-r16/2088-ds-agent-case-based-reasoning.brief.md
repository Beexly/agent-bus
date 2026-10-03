# arxiv-program/research/2026-09-21/arxiv-deep/2088-ds-agent-case-based-reasoning.md

## What it is (1-2 sentences)
Full-paper read (ar5iv HTML, Abstract + Sections 1–4) of DS-Agent (arXiv:2402.17453, Siyuan Guo et al., 2024): an LLM agent for automated data science structured by classical case-based reasoning — retrieve → reuse → revise → retain — over a bank of expert Kaggle solutions, with a two-stage design (iterative development stage, cheap single-shot deployment stage). Ledger verdict ADAPT — the CBR cycle is the memory discipline GSE's discovery loop needs, and the development/deployment split maps to nightly expensive discovery vs. cheap weekly re-runs.

## Key metrics/methods (formulas where given, else "not specified")
- CBR formalization: retriever p_R (distribution over case bank given task τ and feedback l), LLM p_LLM (generates solution y given τ, l, retrieved case c), evaluator p_E (produces feedback l from y); iteration-t solution p_CBR(y^t|τ) marginalizes over retrieved-and-revised cases; differs from RAG by the revise + retain steps.
- Development stage: retrieve top-k cases by embedding similarity → **ReviseRank** (LLM re-ranks cases as "[2]>[1]>[3]..." conditioned on last iteration's execution feedback, p_RR(c|τ,l^{t−1}), no retriever fine-tuning) → planner reuses top case → execute → feedback → loop → **Retain** (best solution added to bank, flexible learning without backprop).
- Deployment stage: simplified CBR — retrieve past successful development solutions, reuse with minor adaptation, single pass (designed for weak LLMs).
- Metrics: task success rate, one-pass rate, mean rank / best rank vs baselines (5 repetitive trials); cost per run tracked.

## Data sources named
Case bank: technical reports of winning Kaggle teams + top-ranked public-leaderboard code from several recently completed competitions (text, time-series, tabular), reports cleaned to core insights, code summarized to textual insights via GPT-3.5. Evaluation: 30 data-science tasks (12 development + 18 deployment), each (description τ, D_train, D_valid, D_test, metric M). Baselines: ResearchAgent and others with GPT-3.5/GPT-4/Mixtral-8x7b. Code + data: https://github.com/guosyjlu/DS-Agent.

## Findings (numbers and facts, not vibes)
- Development: DS-Agent + GPT-4: **100% success rate** over all 12 tasks, best performance in 9/12; DS-Agent + GPT-3.5 "consistently surpasses ResearchAgent with GPT-4 in all tasks" (ResearchAgent + GPT-3.5 "almost fails in every type of task").
- Deployment: one-pass rate 85% (GPT-3.5) / 99% (GPT-4) over 18 tasks vs best baseline 56% / 60%; Mixtral-8x7b-Instruct lifted from **6% → 31%** by simplified CBR (36% average one-pass-rate improvement across alternative LLMs, per abstract).
- Iteration scaling: average best mean rank improves monotonically with iteration steps (Figure 1b).
- Cost: $1.60/run (GPT-4) / $0.06 (GPT-3.5) development; $0.135 / $0.0045 in low-resource deployment.
- Limitations from the ledger: Kaggle bank may overlap pretraining (memorization unmeasured); ReviseRank's ranking accuracy uncalibrated; mean-rank hides per-task variance; tabular tasks inflate headlines; for GSE the bank must be its own verified experiments, and the retain step needs the deterministic holdout gate (retaining a lucky backtest poisons the bank).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (discovery memory substrate): formalizes the memory layer that the 2082–2087 discovery-loop ledgers all assume but none specify — every backtest becomes a retained case (hypothesis + code + feedback + outcome); nightly iterative development vs. weekly cheap deployment split ports directly to GSE ops.
- TRUST-SIGNAL: the retain criterion is the trust gate — the ledger flags that retaining by validation metric in betting must use the locked-season holdout gate, not in-sample fit, or the bank poisons itself.

## Engine-actionable? (yes/no + one-line what)
Yes — build a GSE case bank (SQLite: hypothesis_text, feature_code, backtest_spec, feedback_log, dev_score on 2025-holdout ΔBrier, stage3_score, retained_flag, embedding), seeded with the 5 hand-verified baseline signals plus every future discovery attempt (failures included), with the ReviseRank step demoting misleading cases per night's feedback; ADOPT gate: CBR arm passes ≥6/10 new hypotheses within 5 iterations vs ≤3/10 cold-start.
