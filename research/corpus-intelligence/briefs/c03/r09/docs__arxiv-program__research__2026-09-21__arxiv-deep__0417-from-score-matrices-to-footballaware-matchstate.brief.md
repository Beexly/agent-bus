# docs/arxiv-program/research/2026-09-21/arxiv-deep/0417-from-score-matrices-to-footballaware-matchstate.md

## What it is (1-2 sentences)
Deep-read ledger of an auditable LLM harness for exact-score reranking (arXiv:2608.05030v1): a statistical GAS + Dixon–Coles score matrix generates a frozen Top-10, and a closed-weight LLM reranks via goal-by-goal path simulation. Verdict: REJECT the LLM reranking (edge not statistically significant, development slice informed the design, closed-weight model may have memorized outcomes); ADOPT the audit architecture (artifact freezing, hashes, evidence cutoffs, schema validation).

## Key metrics/methods (formulas where given, else "not specified")
- V1 statistical base: dynamic GAS model of attack/defense strength and vulnerability; half-life h = 1,440 days; gains g_a = 0.04 (attack), g_v = 0.02 (vulnerability); Dixon–Coles correction ρ = −0.05 on score matrix τ_{xy}(λ_H, λ_A, ρ)
- V2: residual-sandwich correction on V1 outputs
- V3/V4: LLM builds three explicit goal-by-goal paths from 0–0 (each step: home goal / away goal / stop), reassessing leader's risk reduction, trailer's pressure and response capacity, exposed space, fatigue, substitutions, key matchups; three terminal scores returned as Top-3. V4 adds shared root verdict (does 0–0 equilibrium break?) + shared cascade assessment (open / neutral / closing) after first goal
- Audit harness: frozen inputs/outputs with hashes, strict evidence cutoffs, schema validation of LLM outputs, separation of candidate coverage from reranking quality
- Proper scoring referenced for V1 1X2: log loss, Brier score, RPS; LLM versions "did not emit normalized probabilities, so proper scoring rules cannot be computed for them"

## Data sources named
18,665 soccer matches 2015-16 through 2024-25 (five top domestic leagues + UEFA Champions League, Europa League, Conference League); V1 selection: training through 2021-22, validation 2022-23 through 2024-25 (5,330 domestic validation matches); LLM dev: retrospective replay of first 150 2025-26 EPL matches (first 100 explicitly informed V4's design — in-sample by construction); no code or data links stated; closed-weight LLM

## Findings (numbers and facts, not vibes)
- V1 validation (5,330 matches): 0.9855 1X2 log loss, 0.5876 Brier, 0.2004 RPS, 52.8% accuracy
- Dev replay (150 2025-26 EPL), exact-score: V1 Top-1 15/150 (10.0%), Top-3 40/150 (26.7%); V3 18/150 (12.0%), 45/150 (30.0%); V4 22/150 (14.7%), 46/150 (30.7%)
- V1 native 1X2 on same 150: 80/150 (53.33%), 0.987803 log loss, 0.586970 Brier, 0.209451 normalized RPS — V4 "does not outperform V1's native 1X2 probability decision"
- McNemar (V4 vs V1): Top-1 p = 0.2295, Top-3 p = 0.3075 (not significant); score-derived 1X2 p = 0.0024
- Candidate coverage: V1 Top-10 held true score 116/150 (77.3%); V4 anchors expanded theoretical coverage to 127/150 (84.7%), +11 — but an added anchor entered final Top-3 in only 3 matches and none was an exact hit
- Failure modes: none of eight 0–0 results appeared in Top-3 ("0–0 remained unsolved"); among 14 actual 1–1s, V4 placed 1–1 first 4 times, Top-3 ten times; high-total (≥4 goals): 4/43 exact; margin ≥3: 3/24
- LLM diagnostics: all 150 root verdicts selected a first goal (never predicted 0–0); first-100 cascade labels: 72 open, 21 neutral, 7 closing — "semantically rich but poorly calibrated"
- Leakage: closed-weight LLM may have memorized outcomes (authors' own caveat, "cannot rule out")

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- V1 GAS/Dixon–Coles soccer machinery is duplicate of existing corpus Poisson/Dixon–Coles + proper-scoring coverage — OTHER
- Audit architecture (artifact freezing, evidence cutoffs, hash-verified reruns, coverage-vs-selection diagnostic) is the new capability — TRUST-SIGNAL, OTHER
- LLM reranking gains statistically insignificant; 0–0 structurally unsolved (every root verdict picks a first goal) — warning against LLM-based reranking of engine outputs — OTHER
- Evidence-cutoff enforcement as anti-leakage discipline — TRUST-SIGNAL

## Engine-actionable? (yes/no + one-line what)
Yes (process, not model) — implement the audit harness around GSE's engine: freeze backtest inputs/outputs with hashes, enforce feature evidence cutoffs with an automated checker, schema-validate engine outputs; accept if 2024 backtest reproduces bit-identically AND the checker surfaces ≥ 1 genuine lookahead violation; LLM reranking stays rejected until a preregistered live evaluation shows significant proper-score gain.
