# docs/arxiv-program/research/2026-09-21/arxiv-deep/1662-paired-comparison-models-review.md
## What it is (1-2 sentences)
Review of paired-comparison models (Thurstone, Bradley-Terry, ordinal/covariate extensions) by Varin, Cattelan & Firth (arXiv:1210.1016, 2012), with a novel pairwise (composite) likelihood estimator for dependent comparisons — repeated judgments by the same subject inducing correlation. Verdict in ledger: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Thurstone: P(i beats j) = Φ(μ_i − μ_j); Bradley-Terry: P(i beats j) = exp(λ_i)/(exp(λ_i)+exp(λ_j)); identification μ_4 = 0.
- Ordinal: cumulative link with ordered thresholds for {prefer i, no preference, prefer j}.
- Dependent model: Z_s = A T + e_s; T ~ N(μ, Σ_T) (latent traits correlated), e_s ~ N(0, ω²I_6); diag(Σ_T)=1, μ_4=0, ω²=1.
- Pairwise log-likelihood: Σ_s Σ_pairs log f_2(z_{s,pair}; θ) with Godambe sandwich SEs; benchmarked vs full ML (Miwa-Hayter-Kuriki 6-D integration) and Maydeu-Olivares limited-information estimation.
## Data sources named
- Simulation study 1 (Maydeu-Olivares 2001 setting): n=4 objects, μ=(0.5,0,−0.5,0), ω²=1, correlated Σ_T.
- Simulation study 2: μ̃=(−0.2,1,−1.5).
- Real illustration: students' paired comparisons of 6 European universities (e.g., London vs Paris: 186/26/91 prefer-first/no-preference/prefer-second).
## Findings (numbers and facts, not vibes)
- PL empirical coverage near-nominal vs LI at 95/97.5/99%: e.g. μ_1: 0.947/0.958, 0.982/0.978, 0.992/0.992; σ_12: 0.959/0.985, 0.975/0.997, 0.989/1.000.
- Study 2: PL means (−0.22/1.03/−1.54) vs truth (−0.2/1/−1.5) with model SEs (0.19/0.33/0.36) matching simulation SDs (0.19/0.33/0.36); LI SEs inflated.
- Paper verdict: pairwise likelihood a "valid alternative" to full ML, far cheaper than 6-D integration.
- Limitations: only n=4 objects tested; replication count unstated; no holdout; no sports application.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Dependent-data estimation for correlated comparison judgments — applicable to analyst matchup polls, correlated player comparisons: OTHER (rating-system methodology).
- No QB-behavior/coaching/OL/trust-signal content in the paper itself.
## Engine-actionable? (yes/no + one-line what)
yes — build DependentBT (Bradley-Terry with subject-level random effects via pairwise likelihood + sandwich SEs) for aggregating correlated matchup judgments (analyst polls, power-rank ballots) with honest uncertainty, after a 32-team coverage simulation gate.
