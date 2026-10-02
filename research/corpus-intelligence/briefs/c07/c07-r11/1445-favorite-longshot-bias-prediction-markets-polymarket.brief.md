# arxiv-program/research/2026-09-21/arxiv-deep/1445-favorite-longshot-bias-prediction-markets-polymarket.md
## What it is (1-2 sentences)
An econ.GN paper (Cardozo & Rivero-Wildemauwe, 2026) measuring the favorite–longshot bias on Polymarket from ~588M trades: it shows the *sign* of longshot returns depends on the aggregation unit, and that Sports shows no two-sided FLB — a hard caution against importing generic FLB corrections into NFL moneyline modeling. Ledger verdict: ADAPT (aggregation-sensitivity methodology + the Sports non-result as audit standards).
## Key metrics/methods (formulas where given, else "not specified")
- Return per purchase: r_f = (y_f − p_f)/p_f, y_f ∈ {0,1}, hold-to-resolution convention.
- Three aggregation schemes: (i) equal child-market weights; (ii) pooled purchases (single dollar-weighted return); (iii) equal parent-event weights.
- Probability error: E(A) = Σ q_f y_f/Σ q_f − Σ q_f p_f/Σ q_f.
- Tails: longshots p < 0.10, favorites p ≥ 0.90 (sensitivity at 5/95, 15/85, 20/80).
- Wallet classification: per month, regress six-month tail purchase share on covariates, top residual decile = longshot/favorite groups; CIs clustered by parent event.
## Data sources named
- Polymarket Users dataset v1.3 (Hugging Face vgregoire/polymarket-users, commit 91ddb961b090de18fd79e79edd8fa15f36ca11b9, CC-BY 4.0): ~588M trades by 2.48M wallets, Nov 2022–Mar 2026; 729,133 child markets in 316,429 parent events; analysis sample 560.9M purchases, $22.49B paid.
## Findings (numbers and facts, not vibes)
- All markets, equal child-market weights: longshots −6.30% [−8.38, −4.22]%; favorites +0.277% [0.242, 0.312]%.
- Pooled purchases: longshots −19.35% [−46.99, +8.30]% (CI includes zero); favorites +0.83% [0.60, 1.07]%.
- Equal parent-event weights: longshots +4.09% [1.29, 6.90]%; favorites +0.392% [0.345, 0.440]%.
- Decomposition: equal child→equal parent+child weight shift +10.329 pp; weighting events by longshot dollars −23.440 pp (spending concentrates in low-return events).
- By category (equal child-market): Crypto −14.84% / Politics −16.34% longshot losses (CIs exclude zero); Sports +2.43% [−0.93, 5.79]% longshots, −0.230% favorites — **no two-sided FLB in Sports**; Sports pooled: longshots +18.11% [−74.68, 110.91]% (huge CI).
- Wallet level: top longshot-demand decile supplies 26.6% of next-month longshot dollars; return −21.96% vs −20.33% others; share of gross longshot losses 22.6% < share of spending (recurrent tail demand ≠ disproportionate losses).
- Short-horizon: posted-offer longshot purchases gain +3.92/+16.91/+7.56% at 5min/1h/1day, then fall to −17.56% at resolution — losses arise at resolution, not from stale prices.
- Losses persist after substantial previous trading (−28.72% most-traded group) and across all five experience quintiles (−38.34 to −21.55%).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (market efficiency audit: run the three-aggregation FLB check on GSE's own de-vigged NFL moneyline probability surfaces)
- OTHER (method rule: aggregation unit determines the sign of measured tail returns — report all three, never one)
- TRUST-SIGNAL (caution: Sports shows no two-sided FLB → no mechanical longshot/favorite correction applied to NFL prices unless replicated on moneylines)
- OTHER (wallet-level: recurrent longshot takers do not bear disproportionate losses — relevant to props/customer-behavior modeling)
## Engine-actionable? (yes/no + one-line what)
yes — replicate the three-aggregation tail-return audit on 2021–2025 NFL moneylines with week-clustered CIs; apply a tail-specific calibration correction only if a two-sided FLB replicates, otherwise explicitly reject it.
