# docs/arxiv-program/research/2026-09-21/arxiv-deep/1846-caafe-llm-context-aware-automated-feature-engineering.md
## What it is (1-2 sentences)
Deep-read ledger of Hollmann, Müller & Hutter (2023), arXiv 2305.03403v5 (NeurIPS 2023), introducing CAAFE: an LLM acts as a code generator that iteratively proposes semantically meaningful pandas features from dataset context, executing each and keeping it only if cross-validated performance improves.

## Key metrics/methods (formulas where given, else "not specified")
- Loop: input (D_train, D_valid, dataset description) → prompt LLM → generates pandas code adding exactly one column (with "# Feature name", "# Usefulness:" explanation, "# Input samples:") → execute → fit classifier on D'_train, evaluate on D'_valid (10 random validation splits; keep iff mean(Δaccuracy, ΔROC AUC) > 0) → repeat 10 iterations. No equations; keep criterion is mean(ΔACC, ΔROC AUC) > 0, not a statistical test.
- Prompt contents: dataset description, feature names (semantic anchors), dtypes, missing-value %, 10 sample rows; Chain-of-Thought instructions; one worked example.
- Execution safety: syntax parse + whitelist of allowed pandas operations; error feedback loop fed into next iteration's prompt; recovered from all errors (52 faulty features / 7.4% over 14 datasets × 5 splits × 10 iterations).
- LLMs: GPT-4 and GPT-3.5 (Sept 2021 cutoff); keep/reject classifier: TabPFN; final eval also on logistic regression, random forest, ASKL2.0, AutoGluon.

## Data sources named
- 14 tabular classification datasets, ≤2,000 samples: 10 OpenML (airlines, balance-scale, breast-w, cmc, credit-g, diabetes, eucalyptus, jungle-chess, pc1, tic-tac-toe) + 4 post-Sept-2021 Kaggle datasets (health-insurance, pharyngitis, kidney-stone, spaceship-titanic).
- Code: https://github.com/automl/CAAFE; datasets via OpenML.org and Kaggle.
- Eval hardware: one RTX 2080 Ti + 8× Xeon Gold 6242 @ 2.80GHz.

## Findings (numbers and facts, not vibes)
- TabPFN mean ROC AUC across 14 datasets: No FE 0.798 → CAAFE(GPT-3.5) 0.806 → CAAFE(GPT-4) 0.822; mean rank 13.9 → 12.9 → 9.78. Improvement on 11/14 datasets.
- Scale of gain: the +0.024 jump is 71% of the improvement from switching logistic regression (0.749) to random forest (0.783).
- Baselines (TabPFN mean AUC): DFS 0.791, AutoFeat 0.796, FETCH 0.796, OpenFE 0.798 — all below CAAFE(GPT-4) 0.822; classical AutoFE does not further improve TabPFN after CAAFE.
- GPT-3.5 vs GPT-4: 3.5 improves only 6/14 datasets — model quality is load-bearing.
- Tic-tac-toe: ROC AUC 0.888 → 0.987 → 1.000 in two iterations.
- Semantic-blinding ablation (Appendix E.1): hide feature names + dataset description → GPT-4 CAAFE drops from mean AUROC 0.822 to 0.800.
- Cost: average CAAFE run 4:43 min per dataset (GPT-4, 10 iterations; 90% of time in LLM code generation); GPT-3.5 cuts time to ~1/4 and cost to ~1/10; 7.4% faulty-code rate, all recovered via error feedback.
- Leakage risk (adversarial read): LLM proposes from names — a "spread_close"-style feature can leak via semantic guesswork; CAAFE has no cutoff/timestamp discipline. Bias demo: GPT-4 invented gendered features on a fake doctor/nurse dataset.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Industrializes analyst feature ideation: "GSE-CAAFE" as semantic layer atop the OneBM relational engine (ledger 1845) — context document of nflverse/odds schema, ≤20 LLM proposals/week as pandas code with Usefulness comments, pre-kickoff allowlist filter, keep iff validation log-loss improves with a paired test p < 0.05 AND leakage audit passes, weekly analyst veto queue.
- (OTHER) Leakage discipline is the named correction to the paper: pre-kickoff cutoff semantics in the context document, static AST check rejecting any column not in the allowlist before execution, kickoff-cutoff replay audit on kept features.
- (OTHER) Semantic-blinding ablation is the control: same loop with hashed column names; if blinding doesn't hurt, the LLM added nothing semantic (paper's reference drop: 0.822 → 0.800).
- (OTHER) Negative-context experiment named: feed the LLM the drift-quarantine list as "these features' distributions shifted in 2020/2024 — do not build on them without a regime interaction."

## Engine-actionable? (yes/no + one-line what)
Yes — build "GSE-CAAFE" as the semantic feature-proposal layer over the OneBM engine (context doc + ≤20 proposals/week, pre-kickoff allowlist, paired-test keep criterion, semantic-blinding ablation control, leakage audit), adapting iff 2024 held-out log-loss improves ≥0.003 with zero cutoff-audit failures.
