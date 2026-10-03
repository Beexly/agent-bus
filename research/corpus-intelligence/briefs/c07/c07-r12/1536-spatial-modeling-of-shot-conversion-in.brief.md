# arxiv-program/research/2026-09-21/arxiv-deep/1536-spatial-modeling-of-shot-conversion-in.md
## What it is (1-2 sentences)
Spatial modeling of shot conversion in soccer to single out goalscoring ability (arXiv:1702.05662, Deb & Dey 2017). Fits a Bayesian spatial probit for goal conversion on MLS 2016/17 shots, with player random effects ("shooting prowess") and a spatially correlated error process, then decomposes player output into Positioning Sense (shot opportunity quality) vs Shooting Prowess (conversion above expectation).
## Key metrics/methods (formulas where given, else "not specified")
- Model: r = Xθ + Az + w + e; Y_i = I(r_i>0); z ~ N(0, σ_p²I) player effects; Cov(w_i,w_j) = σ_w² exp(−φ‖s_i−s_j‖); Gibbs via closed-form full conditionals (4.8–4.12).
- SP_k = posterior mean of z_k (Shooting Prowess); PS_k = (1/g_k) Σ p̂_i (Positioning Sense).
- Headers — Brier: SLRM 0.091 / NN 0.089 / ours 0.061; −log score 301.7 / 299.4 / 184.3; AUC 0.746 / 0.789 / 0.952. Other shots — Brier 0.094 / 0.097 / 0.067; −log score 958.2 / 976.6 / 633.4; AUC 0.776 / 0.763 / 0.937. Spatial correlation effectively zero beyond ~4 yards (headers) and ~6.7 yards (other shots). Players with < 10 matches pooled into generic effect; spatial range φ fixed by CV on [0.05,1].
## Data sources named
MLS 2016/17 shot logs (implied American Soccer Analysis/MLS source). No code or downloadable data given.
## Findings (numbers and facts, not vibes)
- Spatial probit cut Brier ~30–33% and log score ~34–38% vs baselines, with AUCs 0.937–0.952 vs ~0.75–0.79 (file flags these AUCs as suspicious — in-sample fit inflation likely).
- Positioning sense significantly positively correlated with heading prowess; SP/PS from partial season recovered the end-of-season top scorers.
- File's adversarial notes: σ²=σ_w² is an unprincipled parsimony assumption; φ fixed not inferred; strongest covariates (shot speed, defender positions) missing; no code/data — replication requires rebuilding the Gibbs sampler.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: receiver-target catch-probability probit with spatial correlation over target location × coverage-shell grids is the direct NFL analogue.
- OTHER: player-skill vs opportunity-quality decomposition ("catch prowess" vs "positioning sense") for WR/TE props and DFS; QB-BEHAVIOR (INFERENCE): QB random effects on target-location quality could extend the framework.
## Engine-actionable? (yes/no + one-line what)
Yes — adapt to NFL targets as probit P(catch | location, depth, separation, coverage shell) with receiver random effects ("catch prowess") vs opportunity quality ("positioning sense"); ADOPT as a prop input only if prowess is split-half stable (r ≥ 0.4) and beats logistic baseline on held-out Brier by ≥3%.
