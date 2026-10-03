# arxiv-program/research/2026-09-21/arxiv-deep/2090-sharp-self-evolving-human-auditable.md
## What it is (1-2 sentences)
Research ledger on SHARP (arXiv:2605.06822), a neuro-symbolic trading-agent policy: reasoning is confined to a bounded, human-readable rubric of condition-action rules, evolved via attribution-guided atomic edits with a walk-forward acceptance gate; verdict ADAPT as GSE's production policy/governance layer.
## Key metrics/methods (formulas where given, else "not specified")
- Tri-agent loop: Attribution agent (backtests rubric on train, examines K_attr=20 worst portfolio days, maps failures to rule IDs), Evolution agent (atomic mutations: threshold changes, signal-weight tweaks, rule add/remove; |R| ≤ M_max), Validation agent (accept R* iff validation excess return e(R*) > e(R_best) + ε).
- Baselines: Random L/S, tuned Momentum, tuned Mean Reversion, Static rubric, LLM agents Lopez-Lira/FinCon/FinHEAR; ablations: no-attribution random edits, free-form reflection replacing structured edits, Qwen-72B/Llama-70B backbones.
## Data sources named
Daily long-short equity trading, universe of stocks in AI Tech, Biotech, Consumer Discretionary sectors, 2025–2026 window (chosen post-model-cutoff as anti-leakage design); walk-forward: three windows of 4-month train + OOS test, J=5 evolution rounds.
## Findings (numbers and facts, not vibes)
- 3-sector average: SHARP (GPT-4o-mini) evolved from Static +0.6% / +0.09 SR to +20.9% / +1.83 SR; closest contender FinCon-4o: +15.9%; non-LLM baselines economically negligible (tuned Momentum −5.0%).
- Killer ablation A2: free-form reflection instead of structured edits drops Sharpe +2.45 → −0.84 and total return +33.2% → −12.1%, worse than the Static no-adaptation baseline.
- Max drawdown: GPT-4o-mini −7.3% vs GPT-4.1-mini −27.3%.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: auditable policy-evolution governance for the engine's betting layer — production policy becomes a versioned condition-action rubric (e.g., "IF wind > 15mph AND total < 44 THEN shade under by 0.5pt") with every threshold change traceable to the error days that motivated it; flagged as the governance layer for the MOVE-37 discovery loop.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the rubric + attribution/evolution/validation triad over engine features with the gate: evolved rubric beats Static by ≥3pp ROI on 2025 walk-forward AND the free-form-reflection arm underperforms Static (confirming constraint is load-bearing), with full rule→error-day audit trails.
