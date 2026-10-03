# docs/arxiv-program/research/2026-09-21/arxiv-deep/1533-alternative-ranking-measures-to-predict-international.md
## What it is (1-2 sentences)
Ledger of arXiv:2405.10247 (Demartino, Egidi & Torelli 2024), testing whether a Bayesian Bradley-Terry-Davidson (BTD) posterior-median log-strength-difference covariate improves goal-based Poisson models and ML result-forecasters for international football versus FIFA rankings. Verdict in the ledger: ADAPT — the two-step recipe (Bayesian BTD → MAD-normalized strength difference → inject as covariate) is directly implementable in GSE's team-strength feature stack.
## Key metrics/methods (formulas where given, else "not specified")
- BT: p_ij^W = exp(ψ_i)/(exp(ψ_i)+exp(ψ_j)), Σψ_k = 0 (Eq. 2).
- Davidson draws (Eq. 3): p_ij^W = exp(ψ_i)/Z, p_ij^D = exp(γ+(ψ_i+ψ_j)/2)/Z, p_ij^L = exp(ψ_j)/Z, Z = exp(ψ_i)+exp(ψ_j)+exp(γ+(ψ_i+ψ_j)/2).
- Hierarchical Bayesian BTD (Eq. 4): ψ ~ N(μ_ψ, σ²_ψ); γ ~ N(μ_γ, σ²_γ).
- Double Poisson (Eq. 5): log(λ_1n) = θ + att_{h_n} + def_{a_n} + (φ/2)ω_n; log(λ_2n) = θ + att_{a_n} + def_{h_n} − (φ/2)ω_n; ω_n = normalized rank-points difference (FIFA or BTD log-strengths).
- Also bivariate Poisson (Eq. 6) and diagonal-inflated bivariate Poisson (Eq. 7); dynamic AR(1) attack/defense per year; MAD normalization x_MAD = (x−M(x))/M(|x−M(x)|).
- Metric: Brier score b = (1/N) Σ_n Σ_{r=1..3} (p_rn − δ_rn)² over {win, draw, loss}, range [0,2].
## Data sources named
International men's football matches 2018–2023 (Kaggle martj42 "international-football-results-from-1872-to-2017"); FIFA ranking points from pre-tournament publications (World Cup dateId=id13869; AFCON 21 Dec 2023, dateId=id14233). Code: https://github.com/RoMaD-96/Bayesian_BTD (R, footBayes/bpcs/caret).
## Findings (numbers and facts, not vibes)
- 2022 World Cup Brier (FIFA vs BTD): group — Diag.Infl. 0.620/0.629; Biv.Pois. 0.617/0.618; MARS 0.640/0.660; ANN 0.627/0.660; RF 0.713/0.745. Knockout — Diag.Infl. 0.530/0.510; Biv.Pois. 0.546/0.535; MARS 0.486/0.503; ANN 0.465/0.471; RF 0.493/0.461.
- 2023 AFCON Brier (FIFA vs BTD): group — Diag.Infl. 0.679/0.682; Biv.Pois. 0.673/0.682; ANN 0.703/0.702; RF 0.736/0.687. Knockout — Diag.Infl. 0.681/0.677; Biv.Pois. 0.658/0.660; RF 0.834/0.884.
- Paper's interpretation: FIFA marginally better in heterogeneous group stages; BTD better in knockout stages of both tournaments and AFCON group stage — BTD wins when teams are similar in ability.
- FIFA vs BTD normalized-strength correlation: WC Pearson 0.90, Spearman 0.88, Kendall τ 0.69; AFCON Pearson 0.91, Spearman 0.89, τ 0.74.
- Ledger's adversarial notes: no significance testing of tiny Brier gaps (e.g., 0.530 vs 0.510); knockout test sets only ~16 matches (noisy); possible pooled-window lookahead in BTD estimation (fit on 2018–2023 window rather than strictly pre-match data).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Team-strength covariate method: Bayesian BTD posterior-median log-strength difference as a MAD-normalized feature injected into points/spread regressions with a φ scaling coefficient. Novel portable piece vs. the corpus's existing Bradley-Terry coverage (per the ledger's research-map check).
- [OTHER] INFERENCE: GSE's NFL adaptation drops draws (γ→−∞ limit or plain BT with home-field term) and must use weekly expanding-window fits to avoid the paper's pooled-window lookahead.
## Engine-actionable? (yes/no + one-line what)
Yes — fit weekly expanding-window Bayesian BT strengths (Stan/PyMC) on nflverse 2002–2026 outcomes, inject ω_n = MAD-normalized (ψ_home − ψ_away) into the spread/moneyline models; acceptance gate: 2023–2025 walk-forward moneyline Brier reduction ≥0.002 paired by week with no spread-cover Brier regression.
