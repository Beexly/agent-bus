# arxiv-program/research/2026-09-21/arxiv-deep/1453-modeling-cyclicality-intransitivity-paired-comparisons.md
## What it is (1-2 sentences)
Deep read (49 pages, proofs included) of Singh & Davidov (arXiv:2406.11584v3), "Modeling cyclicality and intransitivity in paired comparisons data." It gives a Hodge-style decomposition of pairwise results into orthogonal transitive + cyclic components, a Forward Tick-Based Selection (FTBS) procedure to recover the sparsest set of rock-paper-scissors cyclic triads, and a lack-of-fit test for whether a league's results genuinely contain cyclic structure a global ranking cannot represent. Verdict in file: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Model: Yᵢⱼₖ = νᵢⱼ + εᵢⱼₖ (Eq. 1); transitive form νᵢⱼ = μᵢ − μⱼ (Eq. 2).
- Consistency: νᵢⱼ + νⱼₖ + νₖᵢ = 0 ⇔ ν ∈ L (Fact 2.1). Parameter space splits orthogonally into L (linear/transitive, dim K−1) and C (cyclic, dim (K−1)(K−2)/2); any profile ν = ν_linear + ν_cyclic = Bμ + Cγ (Eq. 11), with C the overcomplete dictionary of elementary cyclic triads (Eq. 7).
- Projection form: ν_linear = B(BᵀB)⁺Bᵀν, ν_cyclic = C(CᵀC)⁺Cᵀν (Eq. 10).
- Cyclic triad basis: c_(i,j,k)(s,t) = I((s,t)∈{(i,j),(j,k),(k,i)}) − I((s,t)∈{(j,i),(k,j),(i,k)}) (Eq. 7).
- Cyclicity t-test per triad: T_n = (ν̂ᵢⱼ+ν̂ⱼₖ+ν̂ₖᵢ)/√(1/nᵢⱼ+1/nⱼₖ+1/nₖᵢ) → N(0,σ²) (Prop. D.1).
- FTBS: K(K−1)/2 edgewise tests of ν_cyclic,ij = 0 (FWER/FDR) → tick-table → fit nested models S₁=L ⊂ S₂ ⊂ S₃ ⊂ S₄ (3-tick, 2-tick, 1-tick triads) → sequential lack-of-fit tests (Theorem 3.2: R_n,S → ΣλᵢZᵢ² under H₀). Theorem 3.3: FTBS spans the true cyclic component with probability → 1 (exponentially fast under sub-Gaussian errors).
- Dominance score: μᵢ** = Σⱼ I(νᵢⱼ > 0) (Eq. C.2); ranking: i above j iff μᵢ** > μⱼ**.
- Betting edge: Winᵢⱼ = (τᵢⱼ−ωᵢⱼ)/ωᵢⱼ if τ>ω, (ω−τ)/(1−ω) if τ<ω (Section 5).
## Data sources named
Simulations: 1,000 runs; K ∈ {6,10,20,50}, m ∈ {10,20,30} comparisons/pair; three scenarios (I: unique minimal model; II: unique + a spurious 3-tick triad; III: non-unique minimal model). EPL 2022–23: 20 teams, 380 matches (double round-robin); outcome = xG difference per match.
## Findings (numbers and facts, not vibes)
- Table 2 (K=20, m=30), M\SE: true model 0.69, FTBS 0.72 (+7%), LASSO 1.29, full model 6.35 (~1000% worse), reduced transitive model 6.63 (~1000% worse). Ranking error RE_d: true 0.72, FTBS 0.74, full 8.08, reduced 3.76.
- LASSO selects ≈3× too many triads (E(|Ŝ|/|S|) ≈ 4.2 at K=10, m=30, Scenario I); FTBS parsimony ≈ 1.0 but low selection probability at small m; LASSO+FTBS hybrid balances moderate-m cases.
- EPL 2022–23: reduced-model lack-of-fit p < 10⁻³; pruned FTBS selects exactly 3 edge-disjoint cyclic triads: (Aston Villa, Brighton, West Ham) γ̂=1.18, (Chelsea, Liverpool, Man Utd) γ̂=1.1, (Leeds, Leicester, Man City) γ̂=1.07. Selected 3-triad model AIC 1101.39 vs transitive 1118.56, BIC 1192.02 vs 1197.37 — only model passing lack-of-fit. LASSO shrinks all cyclic parameters to 0 (m=2 too small).
- Dominance-score ranking differs from merit ranking: Newcastle merit-rank 2 → dominance 4; Bournemouth merit 20 → dominance 19.
- Betting illustration: TotalWin = 19.5 monetary units per round-robin from exploiting cyclic miscalibrations alone (assuming books price with the transitive model); Winᵢⱼ > 0 only on edges in support(C_{γs}).
- Theorem B.1/KL-divergence caution: transitive-fit merits depend on comparison-graph topology (complete vs path graph give very different merits for the same ν ∉ L) — a warning for unbalanced schedules.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: rating-model misspecification diagnostic — Theorem 3.2 lack-of-fit test as a weekly deployable check on every league-week for whether the transitive rating assumption is violated.
- OTHER: matchup intel — minimal cyclic triads (A beats B, B beats C, C beats A) as actionable game-level signals where the market's transitive pricing is most likely wrong; 19.5 units/round-robin edge in the EPL illustration.
- SCHEME: INFERENCE — cyclic triads (e.g., the Chelsea–Liverpool–Man Utd triad with γ̂=1.1) plausibly encode style matchup dynamics (pressing vs low-block vs transition), making the triad list a scheme-mismatch signal rather than noise.
- OTHER: ranking fallback — dominance-score (Borda-like) ranking replaces a single merit vector when intransitivity is detected.
## Engine-actionable? (yes/no + one-line what)
Yes — add the Theorem-3.2 cyclic lack-of-fit test as a weekly diagnostic on NFL/EPL pairwise data (flag p < 0.01), run FTBS to surface cyclic triads as matchup intel, and replicate the Winᵢⱼ/TotalWin edge calculation using GSE model vs market-implied odds on cyclic edges; numeric gate: deploy only if FTBS-augmented model beats transitive baseline by ≥0.005 log-loss on EPL 2022–2024 walk-forward holdout.
