# arxiv-program/research/2026-09-21/arxiv-deep/0717-confidence-gate-theorem-ranked-abstain.md
## What it is (1-2 sentences)
Deep read of Doku (Haske Labs, 2026), arXiv:2603.09947v1 — a formal theorem on when confidence-based abstention monotonically improves ranked decision quality, proving conditions C1 (rank-alignment) and C2 (no inversion zones) and identifying why they hold or fail: *structural* uncertainty (insufficient data) vs *contextual* uncertainty (unobserved drift/regime change). Ledger verdict: ADAPT — the C1/C2 pre-deployment diagnostic and the structural-vs-contextual signal prescription plug directly into GSE's pick-posting gate.

## Key metrics/methods (formulas where given, else "not specified")
- Selective accuracy SA(t) = E[acc(X) | c(X) ≥ t]; coverage φ(t) = P(c(X) ≥ t); abstain below t.
- C2: for all 0 ≤ a < b, E[acc(X) | c(X) ∈ [a,b]] ≤ E[acc(X) | c(X) ≥ b] (no inversion zones).
- C1: c(x₁) > c(x₂) ⟹ E[acc(x₁)] ≥ E[acc(x₂)] — verifiable via Spearman ρ between confidence score and accuracy.
- Uncertainty decomposition Y_{x,t} = f(x) + g(x,t) + ε: structural (can't estimate f — predicted from observation counts) vs contextual (unobserved drift g — predicted from nothing historical).
- Structural gating hypothesis: if Var(g) ≪ Var(f−f̂) and confidence monotone in data density, C1/C2 hold. Contextual failure: if Var(g) ≫ Var(f−f̂), count-based confidence violates C1.
- Exception-detection baseline: logistic classifier on train-set top-5% residuals. Adaptive recalibration: sliding-window re-estimation of confidence→accuracy mapping + threshold update.

## Data sources named
MovieLens 100K (matrix factorization, rank 10, ALS, λ=0.1, 20 iters; temporal/cold-user/cold-item splits); RetailRocket e-commerce (IntentLens pipeline, 20K sessions, 3.70% CVR); Criteo (1.97M sessions train / 844K test); Yoochoose (350K train / 150K test); MIMIC-IV v2.2 (10,000 encounters, 3,461 ICD-10 codes; NMF pathway detector, 13,016 feature–pathway edges). No sports data.

## Findings (numbers and facts, not vibes)
- MovieLens RMSE at 0%→25% abstention: cold-user 1.057→1.012 strictly monotone (0 violations); cold-item 1.068→1.062 (1 negligible); **temporal 1.027→1.021 at 10% then worsens 1.028→1.035 (3 violations)** — the contextual-failure signature.
- Count-based confidence on temporal split: same violations as random abstention; Spearman ρ(count, accuracy) = 0.043 (p=1.7×10⁻⁹).
- 5-seed ensemble disagreement: 1 violation, RMSE 1.024→1.001 at 25%; residual-predicted uncertainty 1 violation; recency-only 2 violations (plateau 1.017); structural+recency combined HURTS (4 violations LogReg, 3 GBT — count feature dominates at 0.43 importance).
- Exception labels: AUC train 0.711→test 0.624 (temporal); exception rate triples 5%→14–15.8%.
- E-commerce: RetailRocket HIGH/MED CVR 4.4%/0.9% (4.9× lift, 80% HIGH coverage); Yoochoose 11.57/3.40 (3.4×); Criteo 14.48/7.56 (1.92×); zero C2 inversions with learned confidence; Yoochoose χ²=2410, Criteo χ²=6876 monotonicity tests.
- MIMIC-IV: zero inversions across 5 zones; selective accuracy 0.348→0.986 at 0.95 threshold; ECE 0.032.
- **Adaptive recalibration on temporal split: adaptive RMSE 1.032 vs static 1.028 at 15% abstention; 14 violations adaptive vs 11 static** — recalibration does not fix contextual failure.
- Cross-domain summary: structural-dominance → 0 violations everywhere; contextual-dominance → no method restores full monotonicity.
- Limitations noted: single-author, v1 March 2026, no peer review; contextual-failure evidence rests mainly on one domain instance; all offline evaluations.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — The C1/C2 pre-deployment diagnostic for GSE's pick-posting gate: Spearman ρ between any candidate abstention score and realized pick accuracy (C1); 5-zone accuracy-inversion check (C2). A gate deploys only with ρ>0 and zero inversions — and any gate developing a C2 inversion on a rolling 4-week held-out window is auto-disabled.
- OTHER — Signal-class prescription for GSE: sports betting is heavily contextual (drift, regime changes, injuries, week-to-week matchup shifts), so count/density-based confidence (consensus-edge, sample-count heuristics) should NOT gate posting; use ensemble disagreement or recency-weighted uncertainty features. Combined structural+recency *hurts* — don't mix them.
- OTHER — The adaptive-recalibration negative result is a warning: re-tuning gate thresholds on recent weeks cannot fix a misaligned signal; if contextual-dominated, redesign the signal, don't tune the threshold.

## Engine-actionable? (yes/no + one-line what)
Yes — spec included: implement C1/C2 gate-check on engine picks 2023–2025 for each candidate confidence signal (consensus-edge, |p−0.5|, ensemble disagreement) with 0–25% abstention curves; gate: at least one signal class passes C2 with zero inversions and lifts held-out hit rate at 80% coverage, else no gate deploys (~1–2 days engineering).
