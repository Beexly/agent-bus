# arxiv-program/research/2026-09-21/arxiv-deep/0100-a-bayesian-inference-approach-for-determining.md

## What it is (1-2 sentences)
arXiv:1710.00001v2 (Whitaker, Silva, Edwards, Kosmidis, 2017) infers per-player latent abilities at soccer event types from touch-by-touch event counts via a Poisson + mean-field variational model, then plugs them into a Bayesian hierarchical team-goals model for over/under 2.5-goals prediction. Verdict in ledger: REJECT — soccer-specific, proprietary Stratagem Technologies data, no NFL lane or transferable event-type feature path.

## Key metrics/methods (formulas where given, else "not specified")
- (1) X^e_{i,k} ~ Poisson(η^e_{i,k} τ_{i,k}); τ_{i,k} = fraction of time on pitch.
- (2) η^e_{i,k} = exp(Δ^e_i + τ λ^e_1 Σ(own-team abilities) − λ^e_2 Σ(opposition stopping abilities) + home-effect γ^e). [Reconstructed from garbled PDF extraction — not verbatim.]
- (3) Log-likelihood: ℓ = Σ_e Σ_k Σ_j Σ_i [X^e_{i,k} log(η^e_{i,k} τ_{i,k}) − η^e_{i,k} τ_{i,k} − log(X^e_{i,k}!)]. Note: the ledger flags the log-term as reconstructed, not verbatim.
- VI: mean-field q(Δ^e_i|φ^e_i) ~ N(μ, σ²); closed-form ELBO maximized with ADAM + autograd, 7,000 iterations; 2,182 parameters per paired event types.
- Hierarchical team goals: y^t_k ~ Poisson(θ_t); log(θ_h) = home + att_h + def_a; log(θ_a) = att_a + def_h; extension adds f(q(Δ))_h / f(q(Δ))_a (starting-eleven posterior ability sums minus opposition stopping sums). Priors: π(Δ^e_i) ~ N(−2, 2²); home ~ N(0,100²); σ_att, σ_def ~ Inv-Gamma(0.1,0.1); PyStan ~10K posterior draws.
- Composite event types: GoalStop (BallRecovery, Challenge, Claim, Error, Interception, KeeperPickup, Punch, Save, Smother, Tackle); Shots (Goal, MissedShots, SavedShot, ShotOnPost); ShotStop (Challenge, Claim, Interception, KeeperPickup, Punch, Save, Smother, Tackle); ChainEvents; AntiPass.

## Data sources named
Stratagem Technologies proprietary: (1) touch-by-touch event data, 2013/2014 and 2014/2015 English Premier League (~1.2M events, ~1,600/game, 39 event types, time/team/player/type/outcome); 2013/2014: 380 matches, 20 teams, 544 players. (2) 2014/2015 EPL over/under 2.5-goals market odds (undisclosed). Input schema: game id, player id, team id, per-event-type counts per player per game, fraction of time played τ.

## Findings (numbers and facts, not vibes)
- AUC (over/under 2.5), baseline vs. with latent abilities: Block 1: 0.47/0.54; Block 2: 0.60/0.65; Block 3: 0.53/0.58; Block 4: 0.55/0.68; Block 5: 0.61/0.62 — improved all blocks.
- Mean predictive log-likelihood, block 1: with latent abilities −163.106 vs. baseline −159.578 — the extension was WORSE on the proper scoring rule.
- Betting validation (£100 bets): +£4486.73 (with latent) vs. −£378.54 (baseline); strategy undisclosed.
- Hyperparameters for Goal/GoalStop: Goal λ_1=2.907×10⁻⁸, λ_2=0.041, γ=0.165; GoalStop λ_1=1.621×10⁻⁷, λ_2=0.009, γ=0.003. λ^Goal_1 ≈ 0 (own-team term barely participates — degeneracy unaddressed).
- Top-10 Goal: 1. Suarez (Liverpool; 2.5% quantile 0.508, mean 0.869, sd 0.184, 31 goals, 3185 min); 2. Sturridge; 3. Agüero (elevated above raw totals via limited minutes); 4. Touré; 5. Rooney. Top-10 GoalStop: 1. Mulumbu; 2. Kallström (144 min, sd 0.177 — huge uncertainty, still ranks 2nd).
- τ sensitivity: prediction biases with vs. without time component — Goal 0.201 vs 0.237; GoalStop 4.374 vs 5.130; Shots 0.807 vs 0.807.
- No connection found between GoalStop occurrence and goals conceded (Chelsea vs Norwich: 27 vs 62 goals conceded, similar GoalStop distributions).
- Limitations acknowledged: mean-field underestimates uncertainty; penalties not separated; injured/transferred players assumed ability-preserving; independence across grouped events assumed without evidence; human-predicted lineups 86% accurate.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Methodological shell only: per-player Poisson ability with playing-time exposure scaling and team/opposition context terms. Nearest NFL analogue would be FTN/Sportradar charting counts (targets, tackles, pressures) with snap counts as τ — but GSE has no lane consuming player-event ability estimates and its scope is spread/moneyline/total, so this stays REJECT.
- [QB-BEHAVIOR] INFERENCE: if ever ported, the "2.5% quantile ranking" idea is the template for uncertainty-aware player rankings — but the paper's mean-field underestimation makes this exactly where ranking distorts. Not actionable.

## Engine-actionable? (yes/no + one-line what)
No — soccer-only paper on proprietary data with the proper scoring rule favoring the baseline; only salvageable concept (latent per-player Poisson ability with exposure scaling) would need a sanctioned NFL prop lane that does not exist.
