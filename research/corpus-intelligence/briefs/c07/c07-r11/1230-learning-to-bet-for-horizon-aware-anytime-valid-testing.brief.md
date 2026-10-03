# arxiv-program/research/2026-09-21/arxiv-deep/1230-learning-to-bet-for-horizon-aware-anytime-valid-testing.md
## What it is (1-2 sentences)
A stat.ME paper (Taga, Oymak, Shekhar, 2026) on betting-based anytime-valid hypothesis testing with a hard deadline: it derives a three-regime optimal betting policy (conservative early / Kelly on-schedule / aggressive when behind) and trains a Double-DQN policy that beats empirical Kelly and STaR-Bets at rejecting false nulls by the deadline. Verified verdict in the ledger: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Betting e-process: W_n(m) = W_{n-1}(m)(1 + λ_n(m)(X_n − m)), W_0 = 1; reject at τ_m = inf{t ≤ N : W_t(m) ≥ 1/α}; Ville's inequality gives anytime validity.
- Safe bet range Λ_m = [−(1−ε)/(1−m), (1−ε)/m], ε = 10⁻³.
- Empirical-Kelly estimate λ̂_t(m) = clip(S_{t-1}/V_{t-1}, Λ_m); 3-action DQN over {λ̂/2, λ̂, λ_end} with a 22-dim feature vector; MLP 22→256→128→3, Double DQN, Huber loss, AdamW lr 3×10⁻⁴, replay 3.2×10⁶, batch 512, 550k episodes (~3h on one L40s).
- Hedged mixture W_t(m) = (1/K)Σ_k W_t^{(k)}(m), log W_t(m) ≥ max_k log W_t^{(k)}(m) − log K (K = 6 ε-schedules).
- Stopping threshold example: α = 0.05 → reject when W_t ≥ 20.
## Data sources named
- Synthetic: Beta and 50/50 Beta-mixture worlds, Xi ∈ [0,1]; N = 100–350, α = 0.05, 5,000 trials per curve.
- Real: NCBI GEO GSE33896 (DNA methylation beta values: GSM838506, GSM838510, GSM838517); NOAA USCRN daily relative humidity (Yuma AZ, Millbrook NY, Boulder CO).
- Code: https://github.com/egetaga/learning-to-bet
## Findings (numbers and facts, not vibes)
- Example 3.5 (Bernoulli p=0.6, m=0.5, α=0.05, T=20): aggressive λ=1.5 gives P(reject) ≈ 0.13 vs Kelly ≈ 8.6×10⁻⁴ — two orders of magnitude from betting harder when behind.
- Deadline CI widths (smaller better): μ=.25 → DQN .066 vs hedge .079; μ=.40 → DQN .134 vs STaR-Bets .141; μ=.65 → DQN .075 vs hedge .085.
- Real data: DQN best in 5 of 6 settings, close in the sixth; Type-I error stays below α=0.05 everywhere.
- 9-action vs 3-action DQN: no overall improvement; 9-action better early, slightly worse at deadline.
- Qualitative: DQN is conservative early, aggressive late; generalizes across horizons, nulls, and distribution families without retraining.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (edge-validation methodology: sequential testing of model variants)
- OTHER (staking: three-regime Kelly modulation — half-Kelly early, full Kelly on schedule, aggressive only when behind and near threshold)
- TRUST-SIGNAL (anytime-valid edge detector: reject "no edge" null for a model variant with provable Type-I control)
## Engine-actionable? (yes/no + one-line what)
yes — implement the e-process edge detector (W_t ≥ 20 deadline rule) over GSE pick outcomes to promote/retire model variants with anytime-valid guarantees, plus the three-regime staking modulation.
