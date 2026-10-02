# docs/arxiv-program/research/2026-09-21/arxiv-deep/1519-edge-directed-calibration-test.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2608.20511 ("EDGE: a closed-form directed test for the calibration of probabilistic binary classifiers"). It proposes a binned, directed calibration test that projects grouped reliability-table residuals onto a pre-specified smooth shape basis (EDGE-poly 3), yielding a closed-form p-value with no refit — a formal statistical QC gate for published win probabilities. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Standardized group residual: r_g = (o_g − e_g)/√V_g (Eq. 1), where o_g=Σy, e_g=Σπ̂, V_g=Σπ̂(1−π̂); G=10 equal-frequency groups sorted by fitted π̂.
- Binned ECE: ÊCE = Σ_g (|g|/n)·|ȳ_g − p̂_g| (Eq. 2).
- Statistic: S = r′Z(Z′Z)^{−1}Z′r = ‖P_Z r‖² (Eq. 6); Z = k≤3 orthogonal polynomial shape basis of group mean probability.
- Null: S ~̇ Σ λ_j χ²_{1,j}, λ_j = eigenvalues of (Z′Z)^{−1}Z′ΩZ (Eq. 8); Satterthwaite: S ≈ c·χ²_ν, c=Σλ_j²/Σλ_j, ν=(Σλ_j)²/Σλ_j² (Eq. 9).
- Local-power result: non-centrality λ_EDGE = ‖P_Z μ‖² = Θ(h²) (Eq. 13); per-df power advantage ≤ (G−1)/k ≈ 3× for G=10,k=3 (Eq. 14).
- Algorithm 1 (7 steps): sort→group→residuals→build Z→S→Ω via Z′ΩZ trick→eigendecompose k×k→p-value.
## Data sources named
Simulated study: base logit η = 0.6x + 0.5d, x~U(−3,3), d~Bernoulli(1/2), event rate ≈0.55; five departure families (link, omitted quadratic, omitted binary interaction, omitted continuous interaction, rough high-frequency); B=10,000 null reps / 5,000 power reps. Benchmark datasets: Bliss flour-beetle (n=481), Hosmer–Lemeshow low-birth-weight (n=189), Finney vasoconstriction (n=39), UIS drug-treatment (n=575), GLOW (n=500 semi-synthetic), Kyphosis, nodal, ICU. R package ebrahim.gof v2.4.0 on CRAN; repo github.com/ebrahimkhaled/edge-gof-paper; Zenodo archive of all result CSVs.
## Findings (numbers and facts, not vibes)
- Size: EDGE bases held nominal everywhere (realized 0.047–0.051 at α=0.05 across n=200–1000; null p-values Uniform by Anderson–Darling p=0.22/0.67/0.07 at n=500/1000/5000).
- Headline power (n=1000, α=0.05): EDGE-poly 3 led or tied rival binned tests on the fitted index in 19 of 22 detectable scenarios; median relative gain over better of HL/EF ≈ 27% (range 12–78%). Cloglog link: 0.77 vs 0.40 (HL) vs 0.50 (EF); asymmetric Stukel link 0.93 vs 0.83 (HL) vs 0.82 (EF); omitted quadratic 0.62 vs 0.41; binary interaction 0.51 vs 0.27; continuous interaction 0.50 vs 0.24.
- Robustness: Stukel's auxiliary refit failed to converge in 20–28% of sparse samples (event rate ≈1.5%); EDGE failure rate 0%.
- Honest limits: rough 4-cycle oscillation — omnibus tests 1.00 power vs EDGE-poly 3 0.52; sawtooth — omnibus 0.95 vs EDGE 0.11; off-index departures invisible to every index-based test (all at nominal size; covariate-space tests 0.94).
- Cost: 8.1 ms/call at n=1000 vs 5.0 ms for the glm fit; 72 ms at n=50,000; projection test ≈42 s/call (≈5,100× more).
- Real data: beetle logit misfit EDGE-poly 2 p=0.003 vs HL 0.122; low-birth-weight additive model 0.039 vs HL 0.211; refit (cloglog/add interactions) clears all tests.
- ML caveat: closed-form null needs the design matrix X; for non-logistic heads use the (y, π̂) entry with parametric bootstrap (flagged future work).
- GSE tie: GSE publishes win probabilities for every moneyline pick publicly, so calibration is "the trust product"; EDGE upgrades "plot the reliability diagram" to "run a hypothesis test on it"; complements ledger 1518 (conformal win probabilities — EDGE would audit them).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Formal directed calibration test with valid closed-form null for binary classifiers — TRUST-SIGNAL
- Detects smooth miscalibration that AUC/discrimination metrics miss (paper's matched-AUC demo) — TRUST-SIGNAL
- Rejected-direction components map to the warranted recalibration: first-order → Platt/temperature scaling, higher-order → isotonic, off-index → new features — OTHER (model monitoring)
- Runs inside CV/backtest loops at 8.1 ms/call; proposed as weekly QC gate paging on p<0.05 — OTHER (pipeline)
- Failure-mode awareness: omnibus tests beat EDGE on rough/high-frequency misfit, so keep an omnibus companion (HL/EF) — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — port EDGE-poly 3 to TypeScript and wire a weekly QC job testing season-to-date published moneyline probs vs outcomes (directed test + HL/EF companion), paging on p<0.05; proposed reproducible test: reject a deliberately distorted prob copy (p<0.05) while AUC stays flat, plus a rolling 4-week sequential version as improvement experiment.
