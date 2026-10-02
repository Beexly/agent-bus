# docs/arxiv-program/research/2026-09-21/arxiv-deep/1227-star-bets-sequential-target-recalculating-bets.md
## What it is (1-2 sentences)
Deep-read ledger of Voráček & Orabona (NeurIPS 2025), arXiv:2505.22422v2, introducing STaR-Bets: sequential target-recalculating betting-based confidence intervals for the mean of a bounded [0,1] variable that achieve statistically optimal width up to a 1+o(1) factor. Verdict: ADAPT — directly portable to GSE's calibration/uncertainty lane.
## Key metrics/methods (formulas where given, else "not specified")
- Testing-by-betting: wealth W_i^m = W_{i−1}^m(1 + ℓ_i(X_i − m)), ℓ_i ∈ [−1/(1−m), 1/m]; reject H₀(m): E[X]=m if W_n^m ≥ 1/δ (Markov). Non-rejected m's form a (1−δ)-CI.
- STaR technique: the bet at time t uses only (i) log(1/δ) − log W_t (wealth still needed) and (ii) n − t (rounds left).
- Kelly-style derivation: log(1+ℓ(X−m)) ≈ ℓ(X−m) − ℓ²(X−m)²/2 (Eq. 4); oracle constant bet ℓ⋆ = S/V with S = Σ(X_i−m), V = Σ(X_i−m)² (Eq. 5); target |ℓ⋆| = √(2log(1/δ)/V) (Eq. 6).
- Bets (Alg. 3): ℓ ≈ √(2log(1/δ)/(n·v̂)) ∧ 1 with online second-moment estimate v̂ = V/(t−1) + t^{−1}α² ∧ 1 (α, c = 1).
- STaR-Bets (Alg. 4): ℓ = √(2(log(1/δ) − lgW)/((n−t+1)v̂)) ∧ 1; stops betting once the target is hit; bets aggressively near the deadline if behind.
- Theorem 8: ∀ X ∈ [0,1] with variance σ² > 0, ∀ α,δ ∈ (0,1), c > 0: ∃ n₀ ∈ O(c⁻⁴) such that for n ≥ n₀, Alg. 3 rejects every m ≤ x̄_n − σ√((2+c)log(1/δ)/n) with prob. ≥ 1−α (Eq. 7). Corollary 9: CI width optimal up to 1+o(1) — first such finite-time guarantee for a betting CI.
- Prop. 4 / Cor. 5: STaR-Hoeffding rejects whenever vanilla Hoeffding does → CIs never wider, sometimes strictly narrower. Same recipe applies to Hoeffding, Bernstein, Bennett (Remark 6). Prop. 7: exact 1−δ coverage requires algorithms finishing with wealth in {0, 1/δ}.
- Assumptions: i.i.d. X_i ∈ [0,1]; n ≫ log(1/δ); σ² > 0. Caveat (stated in ledger): the optimality proof covers Alg. 3 (Bets), not the STaR-Bets combination itself — Alg. 4's superiority is empirical only. Implementation: clip v̂ to m(1−m); optional last-round all-or-nothing randomization; c = 1 robust.
## Data sources named
No real dataset. Simulations: n ∈ {8, 16, …, 256}, 1,000 repetitions per setting, δ = 0.05. Distributions: Beta(5,1), Beta(0.1,2), Beta(2,0.1), Bernoulli(0.1/0.3/0.5/0.9). Metric: average distance of CI endpoint to the true mean; CDF plots of lower bounds (Fig. 3). Code: https://github.com/vvoracek/STaR-bets-confidence-interval — `star(data, alpha)` returns a lower bound; `core.py` implements all methods, `main.py` runs experiments.
## Findings (numbers and facts, not vibes)
- On Beta(5,1), STaR-Bets approaches the (invalid, undercovering) T-test as n grows; on Bernoulli(0.3), STaR-Bets ≈ optimal randomized Clopper-Pearson, beats standard CP at small n, far beats Hedged-CI at large n.
- Coverage of STaR-Bets "statistically indistinguishable from 1−δ" in most settings; Hedged-CI coverage usually 1 (over-conservative); on Beta with a > b, T-test wins on width but violates coverage.
- Competitors beaten: Hoeffding, empirical Bernstein, Hedged-CI, standard Clopper-Pearson, PMBSS; matched: randomized CP (Bernoulli), T-test (Beta, large n — but T-test undercovers).
- Numeric gate from ledger: at n = 256, Bernoulli(0.3), δ = 0.05, 1,000 reps — STaR-Bets mean CI width must be ≤ 1.1× randomized Clopper-Pearson mean width with empirical coverage in [0.93, 0.97].
- Limitations: i.i.d. bounded [0,1] only; requires n ≫ log(1/δ); grid discretization over m ∈ [0,1] costs scale with grid fineness; all-or-nothing randomization makes output non-deterministic across runs.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Directly applicable to calibration: replace fixed-sample normal CIs on pick win-rates / calibration-bin accuracies with STaR-Bets intervals — guaranteed coverage plus near-optimal width, no variance pre-knowledge needed [OTHER]
- The STaR recalculation trick is portable: any GSE sequential procedure with a fixed budget (games left in season, picks left in slate) should recompute its "bet" from (target remaining, time remaining), not from a constant plan [OTHER]
- Pairs with paper 11 (1230/2603.19551), which uses STaR-Bets as a baseline and extends it to deadline-optimal policies [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — replace Hoeffding/Bernstein CIs in calibration reports with STaR-Bets (never wider per Prop. 4); run the proposed improvement experiment on GSE's pick history (Neon `picks`, model v5.2.7): STaR-Bets vs normal-approx CIs on win-rate per probability decile, counting miscalibrated deciles each flags.
