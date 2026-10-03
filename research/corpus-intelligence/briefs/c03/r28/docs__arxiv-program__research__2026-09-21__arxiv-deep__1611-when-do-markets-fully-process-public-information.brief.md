# docs/arxiv-program/research/2026-09-21/arxiv-deep/1611-when-do-markets-fully-process-public-information.md

## What it is (1-2 sentences)
Deep-read ledger (ADAPT verdict) of arXiv:2606.07811 — a high-frequency test of whether Kalshi NBA prediction markets update fully and instantly to public play-by-play information, using a cross-fit out-of-sample benchmark win probability to measure an "updating gap" that predicts future price drift.

## Key metrics/methods (formulas where given, else "not specified")
- Market price p_it = (bid+ask)/2 midpoint; benchmark q_it = Pr(Y_i=1 | ℐ_it) from out-of-sample logit (five-fold game-level cross-fitting).
- Efficient updating regression: Δp_it = α + βΔq_it + ΓX_it + η_it; H0: β = 1.
- Updating gap: Gap_it = Δq_it − Δp_it; drift regression: p_{i,t+h} − p_it = α_i + δ_t + ρ Gap_it + ε, at h = 1,2,5,10,15 min, raw and net of (q_{i,t+h} − q_it).
- Localized underreaction: λ_it = 1 + α_S·Salience + α_L·Illiquidity + α_SL·Salience·Illiquidity; UR_it = sign(Δq_it)(Δq_it − Δp_it).
- Key estimates: β = 0.638 (controls; H0:β=1 rejected p<0.001); net-of-benchmark drift ρ = 0.379/0.414/0.459/0.458/0.484 at h=1/2/5/10/15 min (all ***); Gap×Salience positive, Gap×Illiquidity negative.

## Data sources named
Kalshi NBA winner contracts (1-min quotes, volume, open interest; 1,438 games / 2,876 contracts / 409,512 contract-minutes, 2025-04-15 to 2026-05-25); NBA timestamped play-by-play (stats.nba.com / nba_api equivalents); benchmark Brier 0.164 vs Kalshi live midpoint 0.164 vs pre-game close 0.211.

## Findings (numbers and facts, not vibes)
- Markets underreact: a 10pp benchmark win-prob change moves the market only ~6.4pp (β=0.638).
- The residual updating gap predicts drift: a 10pp gap ⇒ 2.0pp drift at 5 min, 4.6pp net of benchmark changes; 2.4pp / 4.8pp at 15 min.
- Salience reduces underreaction (salient events incorporate faster); illiquidity increases it; the interaction is significant (Salience×Illiquidity +0.0014***).
- Clutch situations update worst (β ≈ 0.51).
- Executable returns (buy ask / sell bid) are NEGATIVE — midpoint drift is absorbed by bid-ask costs; not a frictionless arb.
- Improvement experiment (INFERENCE by the ledger author): restrict drift-following to cross-book stale-price plays (soft retail book lagging sharp Pinnacle move), which the paper never tests.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- In-play markets underreact to public info and the gap drifts predictably (β=0.638, ρ up to 0.484 net) — OTHER (market microstructure; in-play edge modeling).
- Liquidity-gated rule: weight market prices more in liquid states, GSE's own model more in illiquid states — TRUST-SIGNAL (how much to trust a market price as a signal depends on liquidity/salience context).
- Midpoint drift dies at the spread — TRUST-SIGNAL (a "predictable" market signal is not an executable edge; keep executable-cost checks in every backtest).
- Benchmark construction (out-of-sample logit on score margin, clock, pre-game close) is a template for GSE's own in-play q_it — OTHER.

## Engine-actionable? (yes/no + one-line what)
yes — Build GSE's own out-of-sample NFL in-play benchmark win probability and estimate the updating β + Gap→drift on 2024–2025 NFL; use as a drift-follow live signal and a liquidity-gated market-vs-model blender (the file's own spec).
