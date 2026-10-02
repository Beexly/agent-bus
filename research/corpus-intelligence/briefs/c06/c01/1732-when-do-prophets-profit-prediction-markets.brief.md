# arxiv-program/research/2026-09-21/arxiv-deep/1732-when-do-prophets-profit-prediction-markets.md
## What it is (1-2 sentences)
Proves a formal equivalence between predictive accuracy and trading profit for any strictly proper scoring rule: the "proper bet" s_G(p,q) = ∇G(p) − ∇G(q) earns positive expected profit whenever the forecaster beats the market under the scoring rule and liquidity suffices — and it's essentially the only robustly profitable strategy class. Validated offline on 2,418 Kalshi markets and in a live 26-day Gemini 3 deployment (+80.33% ROI, Sharpe 3.35).
## Key metrics/methods (formulas where given, else "not specified")
- Proper bet: s_G(p,q) = ∇G(p) − ∇G(q)
- Profit decomposition: π = [S(p,p*) − S(q,p*)] + D_G(q,p) − L_ρ(s*,q): score gap (accuracy edge vs market) + Bregman divergence (divergence bonus, always ≥0) − liquidity cost (CLOB slippage)
- Instantiated for Brier (bet ∝ p−q scaled), log, spherical rules; forecaster personas: Conservative/Aggressive/Dispersed/Brittle
- Baselines: Brier-weighted allocation, Inverse-Margin, Kelly (Kelly particularly poor — unstable under miscalibration)
## Data sources named
2,418 Kalshi markets via Prophet Arena (sports/politics/economics/crypto), AI-model forecasts + contemporaneous bid/ask + realized outcomes; persona experiment 27,516 markets / 3,511 questions (Aug 2025–Apr 2026); live: Gemini 3 on Kalshi, 26 days, $200 budget, 236 orders / 129 markets; Prophet Arena benchmark public
## Findings (numbers and facts, not vibes)
- Live deployment: +80.33% ROI over 26 days (ΔS=+0.7205, D=+0.0828 — nearly all gains from accuracy, not divergence), Sharpe 3.35
- Offline: proper betting the only strategy reliably converting accuracy into profit across thousands of AI forecasts; for stronger models Brier-weighted allocation the only heuristic with consistent positive ROI; Inverse-Margin limits downside but caps upside; Kelly performs particularly poorly
- Persona: Llama 4 Maverick — Brier worse score gap than Spherical (−123.7 vs −53.3) but higher ROI (−13.1 vs −14.8) via larger divergence term
- Limitations: short live window (26 days, $200, one regime); Kalshi CLOB ≠ sportsbook mechanics (L_ρ must be re-mapped to book limits/juice); offline assumes zero price impact; personas synthetic
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: sizing lane — replaces fragile Kelly with Brier proper-bet sizing w ∝ (p_GSE − q_market) clipped by liquidity proxy; decompose every pick's realized CLV into score gap / divergence / liquidity cost as the sizing feedback loop; persona-classify the engine by margin distribution and win-rate-vs-margin slope to pick Brier vs log vs spherical; improvement: multi-book proper bet (gradient gap vs best available q) to add a "shopping bonus" term, testable on The Odds API snapshots
## Engine-actionable? (yes/no + one-line what)
Yes — implement Brier proper-bet sizing + three-term CLV decomposition on 2024–2025 logged picks (~1–2 weeks); gate: beats flat staking AND Kelly on realized ROI (paired bootstrap 5%) with ≥60% of gain attributed to the score-gap term; reject if Kelly/flat wins (edge structure doesn't match CLOB assumptions).
