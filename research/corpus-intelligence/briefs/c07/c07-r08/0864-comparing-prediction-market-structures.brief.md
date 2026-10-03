# arxiv-program/research/2026-09-21/arxiv-deep/0864-comparing-prediction-market-structures.md
## What it is (1-2 sentences)
Ledger read of arXiv:1009.1446 (Brahma, Das & Magdon-Ismail, 2010) comparing inventory-based (Hanson LMSR) vs information-based market makers, introducing a Bayesian Market Maker (BMM) that converges tightly in equilibrium yet adapts to shocks. Verdict: ADAPT — GSE doesn't run a market, but the bookmaker does; BMM is a model of how lines should move under asymmetric information, directly usable for GSE's market-implied probability engine.
## Key metrics/methods (formulas where given, else "not specified")
- LMSR: spot ρ(q_t) = e^{q_t/b}/(1+e^{q_t/b}); trade cost C(Q;q_t) = b·ln(1+e^{(q_t+Q)/b}) − b·ln(1+e^{q_t/b}); max loss = b·ln2 (≈ 8664.34 at b=125).
- ZP baseline: Gaussian belief p_t(v) = N(μ_t, σ_t²); ask = μ_t + σ_ε·Q(ρ_t)·√(1+ρ_t²) with ρ_t = σ_t/σ_ε (Glosten–Milgrom); range-based Bayesian updates from buy/sell/no-trade with bounds (z⁻, z⁺).
- BMM innovations: arbitrary trade sizes via mini-order heuristic (split Q into chunks of size α, quote VWAP of sequential fictitious ZP executions); shock adaptation via consistency index C(history) = L(μ_t, 2σ_t) − L(μ_t, σ_t) where L(μ,σ) = ∫ N(v;μ,σ)·∏_{i=1}^{W}(Φ(z⁺_i,v,σ_ε) − Φ(z⁻_i,v,σ_ε)) dv; if C > 0, σ_{t+1} = 2σ_t.
- Parameters: LMSR b=125; BMM μ_0=50, σ_0=12, σ_ε=5, window W=5 (experiments 1–2) then 10 (3–6).
## Data sources named
Simulations: 1,000 runs × 200 steps; true value ~ N(50,12) truncated [0,100]; jump prob p_j=0.01 (Gaussian jumps σ_j=5) or adversarial uniform redraws; trader valuations ~ N(true value, 5²); exponential trade sizes (mean 20). Live trading: 6 experiments, 9–17 human traders (graduate Computational Finance/E-Commerce students), 10-minute games; symmetric design trading two markets (2-D Gambler's Ruin) simultaneously — one LMSR, one BMM; shocks introduced by changing random-walk parameters with or without visible cues.
## Findings (numbers and facts, not vibes)
- Gaussian-shock simulations (matched average spread): BMM profit +2081.35 vs LMSR −2457.30; RMSD 2.92 vs 5.38; max loss 9479.82 vs 8662.32 (≈ LMSR theoretical bound 8664.34).
- Uniform (adversarial) shocks: BMM profit +603.40 vs −1897.98; RMSD 8.78 vs 10.79; but BMM max loss 50,183.77 vs 8,384.42 — BMM is NOT loss-bounded (≈6x LMSR's bound).
- Live trading: BMM profit beats LMSR in 5 of 6 experiments (e.g., Equilibrium(1): 47,231.77 vs −1,350.12, though ~30,000 came from one rogue trader buying at 100; IndivInfoShock: 20,226.44 vs −92.29). Post-convergence RMSD_eq strongly favors BMM (LimitedInformation: 0.93 vs 14.56; Equilibrium(5): 1.00 vs 8.15).
- Counter-case Equilibrium(4): BMM lost −10,588.86 vs LMSR −2,619.07 (misled when true value was below the 50 starting point and traders had to sell endowments).
- General law: inherent tradeoff between adaptability to shocks and convergence in equilibrium (and expected loss); window W is the master tradeoff knob.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (market microstructure): fills corpus Gap #3 — a model of how the bookmaker sets lines: treat the book as a BMM with belief (μ_t, σ_t²); line = posterior mean; line-move size ∝ uncertainty; widen on inconsistent one-sided flow. Complements ledgers 0862/0863 (crowd vote dynamics).
- TRUST-SIGNAL: consistency-index steam detector — compute C(history) over a window of recent line moves (or ticket/handle flow); when recent flow is one-sided and inconsistent with current belief (C > 0), increase uncertainty (widen effective spread) rather than mechanically following the move — the principled "don't chase steam." Gate: C must fire on ≥80% of known news shocks with <20% false-fire rate in quiet windows.
- OTHER (design rule): the adaptivity/convergence tradeoff as an explicit knob for GSE's line-tracking filter — fast adaptation after injury news (shock) vs tight convergence in quiet markets, tuned explicitly on historical news-event data.
- OTHER (improvement): replace the fixed σ→2σ doubling with a news-aware jump — external news classifier confirms a genuine information event → larger variance reset; no news → smaller multiplier.
## Engine-actionable? (yes/no + one-line what)
Yes — implement bookmaker-as-BMM belief updates on historical NFL line time series: line = μ_t, book's σ_t becomes GSE's confidence weight on the market-implied number in the ensemble, and the consistency index becomes the principled steam detector.
