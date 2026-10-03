# arxiv-program/research/2026-09-21/arxiv-deep/0213-recent-advances-in-the-bradleyterry-model.md
## What it is (1-2 sentences)
A theory survey (Fang et al., 2026; full-text read) of recent statistical and computational advances on the Bradley–Terry model and its variants (Plackett–Luce, BT mixtures, covariate-assisted extensions) in the large-n regime. The ledger's verdict is ADAPT — use it as the implementation reference for a BT team-rating module, not as a source of new empirical results.
## Key metrics/methods (formulas where given, else "not specified")
- BT-S: P(Y_ij = i≻j) = γ_i/(γ_i+γ_j), γ_i > 0; BT-U: P = σ(u_i − u_j), σ(x) = (1+exp(−x))⁻¹; identifiable only up to additive constant, recommended constraint Σ u_i = 0 (variance-minimization property).
- PlusDC (covariate-assisted): P(Y_ij = i≻j) = σ(u_i − u_j + (x_{i,j},i − x_{i,j},j})ᵀv). The file states: "The BT model with home-field advantage in sports analytics is a special instance of PlusDC." Covariates split static (e.g., player attributes) vs dynamic (home-field, positional bias — "play a vital role in model identifiability and data fitting").
- Plackett–Luce: P(Y_e = i_π(1)≻⋯≻i_π(k)) = ∏_{j=1}^{k−1} exp(u_{i_π(j)})/Σ_{ℓ=j}^k exp(u_{i_π(ℓ)}); latent form X_i = u_i + ε_i, ε_i i.i.d. Gumbel(0,1).
- BT mixture: P = Σ_{h=1}^H ω_h σ(u_i^{(h)} − u_j^{(h)}), ω_h > 0, Σ_h ω_h = 1.
- BT-MLE: û = argmax_{Σu=0} Σ log σ(Y_ij; u_i − u_j); existence iff comparison graph + outcomes are strongly connected (Ford 1957), else û_i → ∞; ridge regularization as fallback.
- Solvers: Zermelo FPI γ_i ← Σ_j w_ij / Σ_j n_ij/(γ_i+γ_j) (slow, observed); Newman FPI γ_i ← [Σ_j w_ij γ_j/(γ_i+γ_j)] / [Σ_j w_ji/(γ_i+γ_j)] — "observed to converge much faster than (Zermelo) in a number of scenarios"; RankCentrality (stationary distribution of an ergodic Markov chain with transitions proportional to defeat probabilities); LSR/I-LSR (MLE-via-global-balance of a continuous-time Markov chain); Accelerated Spectral Ranking; EM-MAP γ_i ← (a−1+Σ_j w_ij)/(b + Σ_j n_ij/(γ_i+γ_j)) with Zermelo = a=1, b=0.
- Uniform (ℓ∞) consistency of the MLE at the optimal ER-sparsity threshold p_n ≳ (log n)/n (extension from the earlier suboptimal (log n)³/n).
- Mixture identifiability: PL mixture non-identifiable if H ≥ (n+1)/2 when each edge contains all n objects; generically identifiable if 1 ≤ H ≤ ⌊(n−2)/2⌋! and n ≥ 6; BT mixture with H=2 generically identifiable on a complete graph if n ≥ 5.
## Data sources named
No new dataset (literature survey). §6 catalogs sports datasets: ATP tennis 130K comparisons/1.8K objects; club football 230.6K/1.2K (42 leagues); NBA 72.6K/30; NFL 5.3K/32; Hong Kong horse racing 6.3K/2.8K; Pokémon battles 50K/800; StarCraft II 374.8K/10.8K; top-player chess 65K. No code repository for the survey.
## Findings (numbers and facts, not vibes)
- No experiments conducted — the quantitative claims are surveyed theorems, not new results.
- Structural observation: sports datasets split into a dense regime (|E| = O(n²), e.g., NFL/NBA round-robin pools) and a sparse regime (|E| = O(n log n), e.g., tennis/chess/esports). NFL sits in the dense regime.
- At GSE scale (n=32 teams, |E|≈272/season), the survey's sparsity thresholds are non-binding (INFERENCE from the file's regime analysis).
- SST (strong stochastic transitivity) is baked into the valid-f framework but the paper's own caveat: it "may not hold in certain real-world applications."
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- PlusDC team rating: P(home team i beats j) = σ(u_i − u_j + x_{ij}ᵀv) with dynamic covariates (home indicator, rest differential, travel/altitude, QB-out indicator) — OTHER (rating methodology feeding win-probability/spread models)
- Player-aware utility decomposition u_i = τ_team + q_QB(i) so QB changes move the rating without refitting — QB-BEHAVIOR (QB decomposed out of team rating)
- RankCentrality as a cheap always-defined early-season (weeks 1–4) fallback rating — OTHER (infrastructure)
- Newman FPI fast solver for weekly refits — OTHER (infrastructure)
- Time-varying utilities u_i(t) for temporal effects — OTHER
- Mixture-model fragility (non-identifiability constructions, label-switching, bound-bound coefficients) — TRUST-SIGNAL (gate before trusting mixture ratings)
## Engine-actionable? (yes/no + one-line what)
Yes — build a PlusDC-BT team-rating module (32 utilities sum-to-zero + home/rest/travel/QB-out covariates, ridge-regularized MLE initialized from Newman FPI, RankCentrality as the weeks-1–4 fallback), accepted only if it beats plain BT and Elo on 2022–2024 rolling log-loss by ≥0.003 with correct covariate signs.
