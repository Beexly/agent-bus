# docs/arxiv-program/research/2026-09-21/arxiv-deep/0391-miss-it-like-messi-extracting-value.md
## What it is (1-2 sentences)
Deep read (arXiv:2308.01523v2) of a generative execution-error framework: a player-specific hierarchical mixture of truncated bivariate Gaussians over shot end coordinates, Rao-Blackwellized into shooting-skill metrics (RBPostXg, GenPostXg) that extract signal from off-target shots (57–65% of all shots, normally discarded as zero-value).

## Key metrics/methods (formulas where given, else "not specified")
- f(y_i^(p), z_i^(p)) = Σ_k θ^(p)_k · TruncNorm(y,z | μ_k, Σ_k) (Eq. 1); θ^(p) ~ Dirichlet_K(α·β) (Eq. 2); saturated global model f = Σ_j Σ_ℓ β_{jℓ} · TruncNorm(m_j, λ_ℓ S_j) (Eq. 3), β ~ Symmetric-Dirichlet(1/2) (Eq. 4); responsibility p̂_k(y,z) = β̂_k·TruncNorm/Σ_j β̂_j·TruncNorm (Eq. 12); GenPostXg(y,z) = Σ_k v̂_k·p̂_k(y,z) (Eq. 13); RBPostXg(p) := Σ_k θ̂^(p)_k · v̂_k (Eq. 11); PostXg(y,z) logistic: log(PostXg/(1−PostXg)) = β_0 + β_1 y + β_2 y² + β_3 y³ + β_4 z + β_5 z² + β_6 z³ (Eq. 14), zero outside frame.
- Recipe: saturate (11×6 grid × 2 covariance scales λ=(1.0, 3.8) = 132 components), Jeffreys-Dirichlet global weights, prune β̂ < 0.01, player-specific weights via variational inference in RStan (α = 30), Monte Carlo integration for component values v_k.

## Data sources named
77,315 shots from StatsBomb via Toronto FC academic partnership (proprietary, unshareable); 6 international leagues, 15 seasons, all non-elite (ranks 7–31); execution-error priors from 8,466 semi-pro penalty shots (Hunter et al. 2018): S_(0.14yd) = [[0.704, 0.157],[0.157, 0.297]], S_(1.75yd) = [[0.782, 0.442],[0.442, 0.742]] (yards²). Code open: github.com/baronet2/shotmissr.

## Findings (numbers and facts, not vibes)
- Stability (first-half → second-half correlation, all players): GAX 0.035, EGA 0.056, RBPostXg 0.136, GenPostXg 0.162; ≥40-shot player-seasons: GAX −0.025, EGA −0.033, RBPostXg 0.219, GenPostXg 0.232 — generative metrics ≥2× more stable and best-predict the benchmarks themselves.
- Sample-size curve: generative metrics reach inter-season correlation ≈0.3 at ≥40 shots; GAX/EGA stay near zero at all thresholds.
- PostXg(y,z) AUC 0.70 vs StatsBomb's 0.86 (gap = shot speed + keeper location, ignored by the paper).
- Diagnostics: smaller-variance bottom-left component offers 28% higher value than the larger-variance one at the same location; Giovinco 2018 ~0.24 weight on top-left-corner component.
- Limitations: validation is split-half within season (not across seasons); PostXg ignores keeper position and shot speed; z-projection for saved/blocked shots is crude; execution-error covariances from semi-pro penalties, not pro match play; i.i.d. shots assumption.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — QB throw-placement skill: per-QB hierarchical mixture over ball-arrival coordinates vs receiver position, catch-probability surface as PostXg analog — a generative upgrade over CPOE's Bernoulli residual.
- OTHER — kicker RB-FG%: miss-vector dispersion model + coordinate-based make-probability surface, shrunk toward global components (highest priority adaptation); punt landing-position model with field-position-value surface.

## Engine-actionable? (yes/no + one-line what)
Yes — build the saturate-then-prune recipe first for kickers (RB-FG%, year-over-year stability test on 2020–2024 FG data; gate: ≥0.10 absolute correlation over raw FG%), then QBs and punters.
