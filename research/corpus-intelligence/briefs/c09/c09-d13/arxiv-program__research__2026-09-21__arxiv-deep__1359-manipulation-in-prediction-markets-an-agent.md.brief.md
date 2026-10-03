# arxiv-program/research/2026-09-21/arxiv-deep/1359-manipulation-in-prediction-markets-an-agent.md

## What it is (1-2 sentences)
Full-paper read (26 pages, PDF) of Smart et al. (2026), arXiv:2601.20452 — an open-source agent-based model (ABM) of prediction markets studying when a biased "whale" minority can distort market prices. Ledger verdict: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Steady-state distortion formula: **δ_S = ρΔ_S** (eq. 11) — steady-state price error = whale's share of market capital (ρ) × whale's valuation bias (Δ_S = W − η_S).
- Belief/market dynamics: E[V̄_{t+1} − η_{t+1} | V_{i,t}, η_t] = w_i(1−h_i)s_i(V_{i,t} − η_t) + h_i·δ_t, where h_i = herding propensity, w_i/s_i = expertise/learning weights, δ_t = m_t − η_t = market-price error.
- Error dynamics as AR(2): δ_{t+1} = (1−α)δ_t + α(V̄_t − η_t); stability/oscillation conditions derived from AR(2) characteristic roots (Appendix Sec. 8.1, eqs. 1250–1266).
- Agents: heterogeneous expertise (precision of noisy private signals), risk aversion, budget constraints, stubbornness (resistance to updating), bias, herding propensity.
- Whale injection experiment: single whale with fixed biased valuation enters; capital share ρ_w swept in 0.1 increments; herding h_i swept over {0, 0.25, 0.5, 0.75, 1}; price = budget-weighted aggregate of valuations.

## Data sources named
No empirical market data — simulation experiments on a stylized data-informed election outcome η_t. Baseline parameter set: 100 betting agents with high expertise (0.95). Source code + GUI on GitHub: https://github.com/ebbam/power_prediction/

## Findings (numbers and facts, not vibes)
- **Whales need ≈40% of total market capital (ρ_w ≈ 0.4) to induce meaningful error into market prices** under the baseline parameter set (100 agents, expertise 0.95); below that, markets are resilient ("prediction markets exhibit meaningful resilience to manipulation by biased agents").
- Distortion magnitude scales with whale capital share per δ_S = ρΔ_S; distortion **duration** increases with non-whale herding intensity and slow learning — herding agents propagate the whale's pressure instead of correcting it.
- With zero herding, the market "quickly adjusts to counteract the price pressure of whale bettors"; with high herding, biased-whale deviations are temporarily sustained.
- The 40% threshold is conditional on the parameter set, not universal — minimum-budget threshold for inducing error varies across configurations.
- Limitations stated in the read: no calibration to real markets; whale is non-adaptive (fixed bias); single-market setting with no cross-market arbitrageurs; budget-weighted price formation assumed, not derived from an order book; many free parameters with no identification strategy.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — market-microstructure defensive capability: framework for detecting whale-distorted lines (avoid betting into manipulation) and a fade-the-whale signal when distortion is identifiable; complements GSE's existing CLV work (CLV measures whether GSE beats the close; this measures whether the close itself was distorted). No existing corpus entries on manipulation modeling per existing-research-map.md.

## Engine-actionable? (yes/no + one-line what)
Yes — port the ABM to sports markets (agents = sharps/recreational/steam-chasers; whale = syndicate/steam group), calibrate herding/learning from Pinnacle line-movement history, flag line moves whose implied distortion exceeds threshold as "likely manipulated — do not bet into", and paper-trade fading them; acceptance gate: whale-flagged moves reverse ≥10 points more often than size-matched unflagged moves over a full NFL season AND fade portfolio profitable after vig.
