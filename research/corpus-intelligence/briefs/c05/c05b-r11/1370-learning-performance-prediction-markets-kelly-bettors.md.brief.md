# arxiv-program/research/2026-09-21/arxiv-deep/1370-learning-performance-prediction-markets-kelly-bettors.md
## What it is (1-2 sentences)
Deep-research ledger of arXiv:1201.6655v1 (Beygelzimer, Langford, Pennock, cs.AI, 2012; short version AAMAS 2012) on how prediction markets with Kelly bettors aggregate beliefs. Delivers the fractional-Kelly-as-confidence-weighting identity (λ-fractional Kelly ≡ full Kelly with belief λp + (1−λ)p_m; λ = t/(t+t₀) under a Beta prior) — the first principled half-Kelly rule in the corpus — plus a wealth-weighted market price theorem and a worst-case log-regret bound. Verdict: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Kelly demand in prediction-market form: q*(p_m) = (w/p_m)·(p − p_m)/(1 − p_m) (eq. 1), maximizing expected log utility p·ln((1−p_m)q + w) + (1−p)·ln(−p_m·q + w); buy if q* > 0, sell/short if q* < 0.
- Kelly fraction (odds form): f* = (b·p − (1−p))/b; prediction-market form f* = (p − p_m)/(1 − p_m); trade q* = f*·w/p_m.
- Thm 1 (Market Pricing): p_m = Σ_i w_i·p_i — the market price is the wealth-weighted average of agents' beliefs.
- Prop 2: with log-utility agents, competitive equilibrium price equals eq. (2).
- Thm 3 (worst-case log regret): L ≤ min_i L_i + ln(1/w_i) for ALL prediction sequences and ALL outcome sequences, even adversarial — the market is at most ln(1/w_i) worse in log loss than the best participant. Regret measured in log loss: L = Σ_t [I(y_t=1)·log(1/p_t) + I(y_t=0)·log(1/(1−p_t))].
- Bayesian wealth update: after outcome y, agent i's wealth ∝ posterior P(i|y) = p_i·w_i/Σ_j p_j·w_j — Kelly bettors redistribute wealth exactly according to Bayes' law.
- Collective Bayesianity: market price tracks observed frequency as if updating a Beta distribution (Fig. 1b: wealth vs belief fits Beta(10+1, 5+1) after 10/15 successes essentially perfectly); holds regardless of outcome order.
- Fractional Kelly identity: λ-fractional Kelly ≡ full Kelly with revised belief p_0 = λp + (1−λ)p_m (eq. 3); Bayesian justification λ = t/(t+t_0) where the agent has seen t trials and the market t_0 (Beta prior).
- Thm 4 (fractional pricing): p_m = (Σ_i λ_i·w_i·p_i)/(Σ_l λ_l·w_l) (eq. 4) — confidence-and-wealth-weighted average; a λ-fractional Kelly agent of wealth w bets exactly like a full-Kelly agent of wealth λw.
- Discounted frequency: fractional-Kelly markets converge to d_n = Σ_t γ^{n−t}1_{E(t)} / Σ_t γ^{n−t} (eq. 5); γ = 0.96 fits the λ = 0.2 simulation (Fig. 2).
- Learning λ (§9): experts-algorithm update of λ (increase when right, decrease when wrong) guarantees not doing much worse than the market or full Kelly on one's own prior; allocating weight 0.5 to market caps worst-case wealth loss at half.
- Simulations: 100 agents, w_i = 1/100, p_i ~ Uniform(0,1); T = 150 periods, true π = 0.5 (full-Kelly Fig. 1) or π = 0.5 with λ = 0.2 (Figs. 2–3); competitive equilibrium, price-taking agents, no transaction costs.
- Assumptions: price-taking agents; competitive equilibrium exists; no transaction costs; Kelly bettors only (§10 non-Kelly analysis is qualitative); no-trade-theorem tension noted (fully rational agent sets λ = 0).

## Data sources named
No real data — theorem + simulation only (no code released). Baseline note: in the ProbabilitySports contest, 99.7% of participants were beaten by the unweighted average predictor — cited as motivation for weighting the market heavily. Short version in Proc. AAMAS 2012.

## Findings (numbers and facts, not vibes)
- 100 full-Kelly agents, π = 0.5: market price tracks observed frequency "extremely closely" over 150 periods; Beta(10+1, 5+1) fit after 10/15 successes "essentially perfect."
- 100 λ = 0.2 agents: price converges to discounted frequency (γ = 0.96 hand-tuned) rather than raw frequency; wealth stays more dispersed than Beta(69+1, 81+1) (Fig. 3).
- γ = 0.96 in the discounted-frequency fit is hand-tuned, not estimated.
- Limitations: uniform random beliefs and stationary π = 0.5 are far from real market belief distributions; real prediction markets have non-Kelly participants; no real-market validation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Principled half-Kelly: replace the ad-hoc fractional-Kelly haircut with λ = t/(t + t_0) — t = GSE's effective independent observations behind a pick's probability (calibration sample size), t_0 = the market's effective observations (estimated from line stability/volume). Example: a pick backed by 200 engine games against a market reflecting ~800 observations gets λ = 0.2 — theory, not a rule of thumb.
- [TRUST-SIGNAL] Experts-algorithm λ learning: maintain per-market-type λ_t updated by the §9 experts rule (raise λ when the engine beats the closing line, lower when it doesn't); bounded regret vs both market and full Kelly.
- [OTHER] Consensus line as Bayesian aggregate: treat the consensus/closing line as the wealth-weighted Kelly aggregate (Thm 1) — the market's posterior — and use GSE p vs p_m disagreement as the edge signal, with the Thm 3 regret bound as the worst-case justification for fading the market only when disagreement exceeds tolerance.
- [OTHER] Combines with ledger 1369: weight the unpopularity premium by λ (confidence) so faded-public-side stakes scale with GSE's relative information (t vs t_0); test on CLV and realized growth.
- [OTHER] Corpus gap: no other ledger connects Kelly betting to market aggregation; ledger 0171 covers practical fractional Kelly but with ad-hoc justification — this paper supplies the missing theory.

## Engine-actionable? (yes/no + one-line what)
Yes — add a λ-estimation module feeding the sizing step: per-pick λ = t/(t + t_0) (engine calibration sample size vs market effective observations from line stability/volume) replacing ad-hoc half-Kelly, plus experts-algorithm λ_t adaptation per market type; backtest on 2024–2025 NFL picks (closing lines + calibration sample sizes) vs fixed 1/2-Kelly and full Kelly on log-wealth growth and max drawdown, with fallback to experts-only λ_t if t_0 can't be estimated stably.
