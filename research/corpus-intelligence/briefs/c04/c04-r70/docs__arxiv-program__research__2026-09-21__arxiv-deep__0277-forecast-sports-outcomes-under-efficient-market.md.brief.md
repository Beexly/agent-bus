# docs/arxiv-program/research/2026-09-21/arxiv-deep/0277-forecast-sports-outcomes-under-efficient-market.md
## What it is (1-2 sentences)
Deep read of arXiv:2604.17194 (Goto, Takeishi, Yairi, U. Tokyo, 2026): how to convert betting odds into accurate outcome probabilities under the Efficient Market Hypothesis — proposing OO-EPC (zero-data odds-only converter from the bookmaker's equal-profit objective) and FL-GLM (one-parameter favorite-longshot-bias GLM). Ledger verdict: ADAPT — OO-EPC is a drop-in upgrade over naive normalization, and FL-GLM quantifies favorite-longshot bias per bookmaker/market; all validation is soccer 1X2, so NFL markets need their own calibration.
## Key metrics/methods (formulas where given, else "not specified")
- OO-EPC: σᵢ = √[xᵢ⁻¹(1−xᵢ⁻¹)/xᵢ⁻¹]; z = [(Σᵢ xᵢ⁻¹) − t]/Σᵢ σᵢ (t = number of successful outcomes); ŷ = x⁻¹ − zσ. Constraint z < xᵢ⁻¹/σᵢ ∀i; satisfied >99.9% of the time; falls back to multiplicative otherwise. Proposition 3: equal bookmaker profit ∀ outcomes ⇒ bet volume bᵢ ∝ xᵢ⁻¹.
- FL-GLM: ln L = ΣᵢΣⱼ Yᵢⱼ ln Ŷ̄ᵢⱼ; Ŷ = X^{−β}; Ŷ̄ᵢⱼ = Ŷᵢⱼ/ΣⱼŶᵢⱼ; gradient-ascent update β ← β + α∇_βL. ≡ multiplicative conversion when β = 1 (Property 5); ≡ power conversion when normalizer = 1 (Property 6); ≡ power-law regression with adaptive intercept (Proposition 4).
- Proposition 7: log-loss difference between bookmakers derives the payout ratio: u = exp(−v) — log-loss measures accuracy and profitability simultaneously.
- Evaluation: mean log-loss (natural log) per bookmaker; two-tailed bootstrap tests at 0.05; Poisson tests for draw-bias counts; booksum–accuracy correlations; binomial tests for competition results.
- Baselines: odds-only — Multiplicative, numerical Shin, analytical Shin, Power; GLMs — multinomial logistic, ordered logistic.
## Data sources named
90,014 soccer matches, 2012–2024, five bookmakers (Bet365, Bet&Win, Interwetten, Pinnacle, William Hill), football-data.co.uk; six iterations (2019–2025) of Kaggle's March Machine Learning Mania (OO-EPC-based submission). OO-EPC repo: goto_conversion; data public.
## Findings (numbers and facts, not vibes)
- OO-EPC (Table 1): significantly best mean log-loss for the majority of bookmakers (e.g., Bet&Win 1.00349, Interwetten 1.00449, Pinnacle 1.00428 vs all existing methods). Exceptions: numerical Shin (1.00336) and Power (1.00334) beat OO-EPC (1.00341) on Bet365; Power (1.00349) beat OO-EPC (1.00359) on William Hill.
- FL-GLM (Table 2): significantly superior to multinomial and ordered logistic for all five bookmakers (e.g., Pinnacle 1.00306 vs 1.00557/1.00680; William Hill 1.00239 vs 1.00473/1.00637).
- Fitted β: 1.06 (Pinnacle) to 1.15 (Interwetten), above 1 everywhere — favorite-longshot bias confirmed; mean normalizer 0.95–0.98 — falsifies power conversion's normalizer=1 assumption.
- Shin's assumption falsified: booksum–log-loss correlations 0.066–0.109, p = 0.41–0.62 — no evidence smaller booksums mean less accurate odds.
- Draw bias: all bias-adjusted methods significantly underestimate draws for most bookmakers; multiplicative's draw counts do not differ from actuals. Proposed fix (untested): separate β_draw < β_decisive.
- Kaggle: 5/9 top-10% finishes (binomial p ≈ 0.0009); 5/9 medals (p = 0.0038); method acknowledged by 10+ gold-medal and 100+ medal-winning solutions. Author disclaims causal attribution of competition results to OO-EPC.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: odds→probability conversion upgrade for GSE's consensus/market-implied-CLV pipeline; per-book per-market β as a standing favorite-longshot-bias diagnostic (books/markets with highest β = where model edge is largest); EMH guardrail for feature engineering (never re-fit relationships already priced into odds); cleaner market-implied q for Kelly edge decomposition.
- TRUST-SIGNAL: EMH discipline as a model-review gate — any model consuming odds-derived features must beat the one-parameter FL-GLM baseline to justify its complexity.
## Engine-actionable? (yes/no + one-line what)
Yes — swap GSE's multiplicative normalization for OO-EPC (zero-data, analytic) and fit FL-GLM β per NFL market per book on historical odds; adopt per-market if it significantly beats the current baseline on holdout log-loss with year-over-year β stability within ±0.05; test a three-regime FL-GLM (favorites/underdogs/tie-push) as the improvement experiment.
