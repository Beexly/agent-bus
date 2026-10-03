# arxiv-program/research/2026-09-21/arxiv-deep/0964-weather-parametric-insurance-basis-risk.md
## What it is (1-2 sentences)
A full-text read ledger for arXiv:2409.16599v1 (Gao, Yang & Liu, 2024), "Managing Basis Risks in Weather Parametric Insurance," a Monte Carlo study of how diversification and spatial structure control payout/loss mismatch risk. The ledger adapts it as portfolio theory for GSE's pick portfolio — pick sizing, systematic-edge-bias detection, and parametric weather adjustments for totals.
## Key metrics/methods (formulas where given, else "not specified")
- BR(i,j) = +1 if (payout=1, loss=0); −1 if (payout=0, loss=−1); 0 otherwise.
- AABRP (Annual Average Basis Risk per Premium Ratio): AABRP(i) = Σ_j BR(i,j)/n; uncertainty σ(i) = std_j(BR(i,j)). Portfolio: AABRP' = Σ_j Σ_i BR(i,j)/(m·n); σ' = std_j(Σ_i BR(i,j)).
- Spatial ratio SR = ||x_exposure − x_station|| / r_event; Hansen (2000) threshold regression.
- Inverse-proportional fit: σ(m) = a/(m − b) + c.
## Data sources named
Pure Monte Carlo simulation (no empirical dataset): per contract-year, hazard footprint = circle radius ~ Uniform[0,Rmax], centroid ~ Uniform[0,1]²; severity ~ Uniform[0,Smax]; insured exposure and reference station fixed points; trigger threshold t < Smax; premium = 1. Experiments: (1) m=100 contracts × n=1000 years, then m=1→500 sweep; (2) SR threshold regression, 500 spatial configs × 1000 years; (3) severity vs basis risk. No public code.
## Findings (numbers and facts, not vibes)
- Diversification (m=100, n=1000): individual AABRP ∈ [−0.201, 0.203], quartiles −0.053/0.007/0.054; portfolio AABRP' = 0.005 (→0, hedging effect). Individual σ ∈ [0.118, 0.589]; portfolio σ' = 0.041 (~3–14× volatility cut).
- σ(m) fit: a=0.482, b=2.126, c=0.003, R²=0.993; Pearson(m,σ) = −0.611, R²=0.373, p<0.01.
- Spatial ratio thresholds: AABRP threshold γ=0.85 (R²=0.821 below, 0.388 above, p<0.01); σ threshold γ=1.93 (R²=0.597 below, 0.233 above, p<0.01). Risk rises with SR below the threshold, falls toward 0 above (SR→0 guarantees both covered; SR→∞ guarantees neither covered).
- Severity: below trigger → risk 0; above trigger → no significant correlation between severity and basis-risk level or volatility. The trigger, not the magnitude, matters.
- Basis risk taxonomy: design / temporal / spatial (Dalhaus et al. 2018).
- Reader's caveat: contracts assumed independent; correlated perils (one hurricane hitting many contracts) weaken the diversification result; the 1/m decay is the optimistic independent-case rate.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (bankroll/portfolio): treat each posted pick as a contract; AABRP' over the pick portfolio measures systematic edge bias, σ' measures portfolio volatility; the 1/m decay gives a minimum-portfolio-size sizing rule (~100 positions drives bias noise to ~0.04 given per-pick σ ~ 0.3–0.6).
- OTHER (regime detection): the spatial-ratio threshold-regression technique is a reusable regime detector — define an analog "distance" (model disagreement / market distance) and test for the rise-then-fall signature.
- OTHER (weather lane): severity-independence licenses parametric weather adjustments (wind/temperature thresholds) for totals without fearing extreme weather breaks the adjustment.
## Engine-actionable? (yes/no + one-line what)
Yes — implement pick-portfolio AABRP'/σ' tracking as a sizing/bias diagnostic (gate: realized-bias volatility within 2× of the 1/√m prediction, else per-pick edges are correlated and the sizing model must change), and use trigger-style parametric weather adjustments for totals.
