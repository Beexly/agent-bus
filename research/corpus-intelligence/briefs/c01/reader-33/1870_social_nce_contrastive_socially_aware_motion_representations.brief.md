# docs/arxiv-program/research/2026-09-21/arxiv-deep/1870-social-nce-contrastive-socially-aware-motion-representations.md
## What it is (1-2 sentences)
Ledger on Social NCE (Liu, Yan et al., EPFL 2020, arXiv:2012.11717) — contrastive learning of socially-aware motion representations where "negative" samples are locations occupied by OTHER agents, teaching a trajectory forecaster that two agents cannot occupy one location. Verdict: ADAPT for NFL ball-carrier trajectory modeling.

## Key metrics/methods (formulas where given, else "not specified")
- Social-NCE loss: L_NCE = −log[ exp(sim(q,k⁺)/τ) / Σ_n exp(sim(q,k_n)/τ) ], sim = cosine; full Social-NCE objective L = L_task(f,g) + λ·L_SocialNCE(f,ψ,φ).
- Query q = ψ(h_t^i) (2-layer MLP of history embedding h_t^i); key k = φ(s_{t+δt}^i, δt) (2-layer MLP event encoder); positive key = ground-truth future location + ε∼N(0, 0.05·I).
- N = 8(M−1) social negatives per horizon: s_{t+δt}^{i,n−} = s_{t+δt}^j + Δs_p + ε, j≠i, Δs_p = (ρcosθ_p, ρsinθ_p), θ_p = pπ/4, p=0…7; ρ = 0.2 m (forecasting) / 0.6 m (navigation); horizons δt ∈ {1,…,4}; τ = 0.1; embeddings unit-normalized, 8-dim.
- Implemented on Social-STGCNN, Trajectron++, Social-LSTM, Directional-LSTM with no architecture changes; λ=0.1 for imitation learning, (τ=0.2, λ=1.0) for Rainbow DQN RL, (τ=0.2, λ=0.1) for offline RL.
- GSE impl spec in file: positives = ball-carrier true future location (+noise); negatives = 8 angular samples around each defender's future location at ρ ≈ 0.5–1.0 yd; horizons δt ∈ {1,…,4} frames (0.1–0.4 s); τ=0.1; λ start 0.1; exclude/invert tackle frames.

## Data sources named
ETH/UCY (5 subsets; 8 obs steps = 3.2 s → 12 future steps = 4.8 s); TrajNet++ (Avoidance/Group/Overall sub-categories); crowd navigation simulator [15] — robot + 5 simulated pedestrians; 5k expert (SARL) demo episodes, 200 epochs; Rainbow DQN RL, 8 seeds; offline RL on 30k logged episodes (10k online + 5k×4 free explorations at K∈{500,1000,3000,5000}).

## Findings (numbers and facts, not vibes)
- ETH/UCY collision-rate cut: 37.0% (Social-STGCNN) and 45.7% (Trajectron++) vs vanilla, with top-20 FDE on par.
- TrajNet++: collision-rate reduction 9.5%–37.5% across sub-categories; Directional-LSTM+Social-NCE most robust on public benchmark.
- Imitation learning: ~69% collision-rate reduction vs vanilla (λ=0.1); random negatives WORSEN the policy; markedly better in low-demo regimes; multi-horizon beats single-horizon.
- Rainbow DQN: vanilla needs >4000 episodes to reach reward 0.6; Social-NCE reaches it in <2000 episodes and attains collision-free policy faster (τ=0.2, λ=1.0).
- Offline RL: Social-NCE substantially narrows online–offline gap, matching best vanilla baseline using only a fraction of the data (exact fraction figure-truncated).
- Random (uniform) negatives add no social information and can worsen performance.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: contact-aware ball-carrier trajectory representations learned without labeled tackle data — one-location-one-agent prior maps to NFL tracking (defender locations as contrastive negatives).
- QB-BEHAVIOR: scrambles are the direct transfer — ball-carrier = scrambling QB, defenders = pass rush; impossible-trajectory rate (predicted frames within 0.5 yd of a defender's actual future position) as a new QC metric for trajectory outputs.
- OTHER: reproducible test gate — ADOPT iff impossible-trajectory rate reduced ≥25% vs vanilla with FDE no worse than +2%.

## Engine-actionable? (yes/no + one-line what)
yes — train GSE's 10Hz ball-carrier trajectory forecaster with Social-NCE loss (defender-location negatives, ρ≈0.5–1.0 yd, invert prior on tackle frames); ~1.5 engineer-weeks, training-time only, no inference change.
