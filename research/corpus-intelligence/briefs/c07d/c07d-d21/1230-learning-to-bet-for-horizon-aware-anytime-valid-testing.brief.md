# arxiv-program/research/2026-09-21/arxiv-deep/1230-learning-to-bet-for-horizon-aware-anytime-valid-testing.md

## What it is (1-2 sentences)
Deep-research ledger (full 16,431-word paper read, all appendices) of arXiv:2603.19551v2 (Taga, Oymak, Shekhar, stat.ME, 2 Jun 2026): "Learning to Bet for Horizon-Aware Anytime-Valid Testing" — learns a deadline-optimal betting policy (DQN over 3 actions) for sequential testing of H₀: E[X]=m on bounded [0,1] observations with a hard deadline N, beating empirical Kelly via a three-regime (ahead/on/behind schedule) strategy.

## Key metrics/methods (formulas where given, else "not specified")
- Betting e-process: `W_n(m) = W_{n-1}(m)(1 + λ_n(m)(X_n − m))`, W₀ = 1; reject at `τ_m = inf{t ≤ N : W_t(m) ≥ 1/α}`. Ville's inequality gives anytime validity.
- Wealth update (log wealth Y_t = log W_t): `W_{t+1} = W_t(1 + λ_{t+1}(m)(X_{t+1} − m))`.
- Safe range: `Λ_m = [−(1−ε)/(1−m), (1−ε)/m]`, ε = 10⁻³, guarantees 1 + λ_t(X_t − m) ≥ ε > 0.
- Stopping: `τ_m = inf{t ∈ {1,…,N} : log W_t(m) ≥ log(1/α)}`; `P_{H₀}(sup_{t≤N} W_t(m) ≥ 1/α) ≤ α`.
- Empirical-Kelly estimate: `λ̂_t(m) = clip(S_{t−1}/V_{t−1}, Λ_m)`; endpoint bet directional by sign(μ̂_{t−1}−m).
- Hedged mixture over K=6 ε-schedules (η ∈ {0.25,0.50,0.75}, q ∈ {1,2}): `W_t(m) = (1/K)Σ_k W_t^{(k)}(m)`, so `log W_t(m) ≥ max_k log W_t^{(k)}(m) − log K`.
- Three regimes: ahead of schedule → ≈ half-Kelly (conservative); on schedule → Kelly λ^Kelly_m; behind schedule → aggressive/all-in λ_end. Theorem 3.1 (Hoeffding + Ville bounds); Propositions 3.4/3.6 (Sanov large-deviation bounds) give sufficient conditions for aggressive/defensive bets to beat Kelly by an exponential factor.
- DQN: 3 discrete actions {λ̂_t(m)/2, λ̂_t(m), λ_end,t(m)}; 22-dim feature vector φ_t (mean gap, distance-to-threshold, remaining-time fraction, variance/SNR proxies, Kelly/endpoint bets, Taylor growth-advantage proxies, skewness/kurtosis, Beta concentration proxy); sparse terminal reward 1{τ ≤ N}; MLP 22→256→128→3 ReLU, Double DQN, Huber loss, AdamW lr 3×10⁻⁴, replay 3.2×10⁶, batch 512, 550,000 episodes, ~3h on one L40s GPU.
- Baselines: empirical Kelly, linear-ε mixed-strike, STaR-Bets (two-sided via sign(μ̂_{t−1}−m)), STaR-Hoeffding.
- Assumptions: X_i ∈ [0,1] i.i.d. (temporal dependence explicitly out of scope); finite alphabet for Sanov arguments; training distribution synthetic Beta-family.

## Data sources named
- Synthetic: Beta and 50/50 Beta-mixture worlds; experiments N = 100, α = 0.05, 5,000 trials per curve. DQN training: N log-uniform in [100,350], m uniform in [0.01,0.99], difficulty-calibrated |μ−m| ≈ √(2σ²_proxy·c·log(1/α)/N), c ∼ Unif[0.70,1.30], concentration ∈ [0.1,11.0].
- Real data (App. F.3, 6 settings, 5,000 trials each): DNA methylation beta values (NCBI GEO GSE33896: GSM838506 adipose stem cells, GSM838510 induced osteocytes, GSM838517 rhabdomyosarcoma line); daily relative humidity (NOAA USCRN: Yuma AZ desert, Millbrook NY temperate, Boulder CO mountain), scaled to [0,1].
- Code: https://github.com/egetaga/learning-to-bet.

## Findings (numbers and facts, not vibes)
- Example 3.5 (theory): Bernoulli p = 0.6, m = 0.5, α = 0.05, T = 20: aggressive λ = 1.5 gives P(reject) ≈ 0.13 vs Kelly ≈ 8.6×10⁻⁴ — two orders of magnitude from betting harder when behind.
- Figure 4 (deadline CI widths, smaller = better): μ = .25: DQN .066 vs hedge .079; μ = .40: DQN .134 vs STaR-Bets .141; μ = .65: DQN .075 vs hedge .085.
- Real data (6 settings): DQN best in 5/6, close in the sixth; Type-I error stays below α = 0.05 everywhere (Fig. 18), with DQN using the error budget more fully.
- DQN trained once (550k episodes, ~3h L40s) generalizes across horizons, nulls, and distribution families without retraining.
- Ablations: 9-action space gives no overall improvement over 3 actions (Fig. 15; 9-action better early, slightly worse at deadline); longer deadlines N ∈ {250,300,350} (Fig. 16); α = 0.01 (Fig. 17); reward shaping DQN-EB/DQN-U (Fig. 6); logit-normal and Bernoulli OOD generalization (Figs. 7–8).
- Qualitative (F.9, Figs. 20–22): DQN is conservative early, aggressive late.
- Numeric gate (ledger §13): at N = 100, α = 0.05 on Beta-mixture setting (m = 0.45, μ_X = 0.40), DQN's deadline rejection probability must exceed empirical Kelly's by ≥ 5 percentage points and match-or-beat the hedge baseline.
- Caveats: i.i.d. [0,1] assumed — sports outcomes are neither i.i.d. nor bounded the same way; 9-action ablation suggests optimization difficulty already binds at this scale; two-sided STaR baseline is the authors' own adaptation, not the original one-sided procedure; Props. 3.4/3.6 need finite alphabets — sufficient conditions, not a complete characterization; DQN "uses the allowable Type-I error budget more effectively" (runs hotter under the null than competitors).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration/sizing program): the three-regime policy is a principled "when to press" rule directly usable for bankroll/staking — half-Kelly on a new model variant early season, full Kelly once on schedule, aggressive (up to 1.5× Kelly) only when behind schedule AND the e-process is close to threshold, never as default. The Example 3.5 numbers (0.13 vs 8.6×10⁻⁴) quantify the value of aggression when behind with a deadline — this serves the calibration/sizing program.
- OTHER (model-validation/pick-selection lane): the anytime-valid edge detector implementation spec (per-pick score X_i ∈ [0,1], null m = breakeven, deadline N = season length e.g. 272 NFL games, reject "no edge" when W_t ≥ 20) is a sequential model-promotion gate — reject model variants that never prove edge by deadline. This is complementary to, not duplicative of, the GSE engine benchmark lane's calibration tests.
- OTHER: this paper's baseline STaR-Bets is itself ledger 1227 (paper 9, arXiv:2505.22422) — the two ledgers should be read as a pair: STaR-Bets gives fixed-horizon-valid betting CIs, this paper gives the deadline-optimal betting *policy*. The ledger's GSE overlap section notes the e-process framework as an anytime-valid alternative to fixed-sample calibration tests for `apps/web/__tests__/calibration-map-kelly.test.ts`.
- CONTRADICTION (flag): DQN "uses the Type-I error budget more effectively" (runs hotter under the null) — for GSE's purposes this is desirable for edge-detection power, but it means comparisons against DQN under tighter α (0.01) should be watched for budget-exhaustion effects.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the anytime-valid e-process edge detector (deadline N = season length, W_t ≥ 20 reject rule, three-regime staking) as GSE's model-variant promotion gate, retrained on sports pick outcomes.

## Referenced files/papers/datasets
Papers: arXiv:2603.19551v2; baseline paper 9 = arXiv:2505.22422 (STaR-Bets, ledger 1227). Code: https://github.com/egetaga/learning-to-bet. Data: NCBI GEO GSE33896 (GSM838506, GSM838510, GSM838517); NOAA USCRN (Yuma AZ, Millbrook NY, Boulder CO). GSE-internal: `apps/web/__tests__/calibration-map-kelly.test.ts`; Neon `picks` table.
