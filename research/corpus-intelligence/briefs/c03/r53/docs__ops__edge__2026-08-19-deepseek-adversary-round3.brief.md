# docs/ops/edge/2026-08-19-deepseek-adversary-round3.md
## What it is (1-2 sentences)
Round-3 adversarial statistics review from DeepSeek: it corrected the grouping-loss estimator (C-21), supplied an e-process construction for the continuous price-space null (C-23), updated the Bayesian prior for a real MLB totals edge downward (~2–4%), ranked false-certification failure modes, and set the cryptographic-vs-trust boundary for the hidden-variant registry.
## Key metrics/methods (formulas where given, else "not specified")
- Grouping loss: `GL = E_S[ Var( P(Y=1|X) | p̂(X) = s ) ]`, the spread of true posteriors within a score bin. Estimator per bin b with N_b obs in K_b clusters (cluster size n_c, cluster rate ȳ_c, bin rate ȳ_b): `GL_b = (1/N_b) Σ_c n_c (ȳ_c − ȳ_b)² − (1/N_b) Σ_c [n_c/(n_c−1)] ȳ_c(1−ȳ_c)`; `GL = Σ_b (N_b/N)·GL_b`. Lower bound (negatively biased).
- Decision threshold for GL: permutation null (permute y within each score bin, recompute GL, 1,000 reps); report permutation p-value. `GL < c_0.95` → stop edge search.
- E-process for continuous price null H0: `E[Δ_i] ≤ 0` with `Δ_i ∈ [−1,1]` → map to `X_i = (Δ_i+1)/2 ∈ [0,1]`, null `E[X_i] ≤ ½ = μ₀`. `E_i = 1 + λ_i(X_i − μ₀)`, `E_n = Π E_i`, `λ_i ∈ [−2,2]` predictable. Empirical-Bernstein bet: `λ_{t+1} = clip((2μ̂_t − 1)/(σ̂²_t + σ̂²_t/t), −2, +2)`. Mixture over θ ∈ [0.51, 0.65] (average of e-values is an e-value).
- Power comparison (derived): continuous beats binary when `σ²_Δ < p₀(1−p₀) ≈ 0.249`.
- Bayes update from Bickel & Kim (2014): prior 0.10 × likelihoods 0.30/0.90 → posterior 0.036 (≈0.017 from 0.05 prior). Defensible posterior for real MLB totals edge ≈ 2–4%.
- Failure-mode table: CLV close contamination 0.30×0.95=0.285 (rank 1); same-slate dependence 0.25×0.90=0.225; exploratory→confirmatory leakage 0.20×0.90=0.180; regime shift 0.20×0.70=0.140; hidden variants 0.10×0.95=0.095; mixture e-process over-adapt 0.10×0.70=0.070.
## Data sources named
Bickel & Kim (2014), Applied Financial Economics 24(18), 1229–1234 (independently verified); Waudby-Smith & Ramdas (betting-based mean estimation); github.com/aperezlebel/beyond_calibration (authors' grouping-loss code); drand/NIST public randomness beacons (holdout-seed partition); Nitro/SGX TEE (hardware trust option); n=909 contaminated historical picks (exploratory only).
## Findings (numbers and facts, not vibes)
- Correct grouping-loss target is spread of TRUE posteriors among same-score observations, not within-bin outcome variance (≈0.25 Bernoulli noise) — round-2 formula was wrong; the corrected estimator is a lower bound, noisy at n=909 with 10 bins × 5 clusters (cluster size ≈18, cluster-rate SE ≈0.12).
- Never choose cluster count K and estimate GL on the same observations without nesting; cluster on standardized logit-transformed features, not raw probabilities.
- Continuous price-space e-process construction valid with λ ∈ [−2,2]; pre-register continuous as primary, binary as sanity check — never pick the certifying one after seeing the path.
- Defensible posterior for a real MLB totals edge is ~2–4%, not 10–15% — Bickel & Kim finds little inefficiency even if edge exists (30% vs 90% likelihoods).
- DeepSeek's honest mechanism ranking: weather-park interaction and full-distribution/alternate pricing least likely already priced (need more modeling than mean totals); bullpen fatigue and umpire zone more likely already priced by sharp books — downgrades 2 of 4 mechanisms.
- Single most likely false certification: contaminated closing prices (stale/model-derived/non-executable) surviving repair — already visible in historical data. Monitor must reject any close not a real executable timestamped price from a sharp book, cross-checked across books.
- Two-track history: Track 1 confirmatory (frozen, prospective, sole basis for certification); Track 2 exploratory (909 corrected picks — features, priors, variance, inclusion-rule design only; NEVER certification, e-process, public claims, or Track-1 adjustment).
- AUDIT FLAG: DeepSeek confabulated two prior-art references it attributed to the user ("Foresight Arena (2026)", "Sealed Before Event (2026)") that were never mentioned — treat all its prior-art claims as unverified.
- Boundary: cryptographically provable (no late registry additions, no ledger edits, no pinned-code swaps, no post-hoc inclusion-rule/holdout-seed change); detectable-not-provable (initial omissions, selective non-publication — open-scan guard is strongest defense, deletions); irreducibly trust-based (unregistered variants, private parallel ledger, rule-peeking) — TEE converts to hardware trust.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Corrected grouping-loss estimator + permutation-null threshold [TRUST-SIGNAL]
- Continuous price-space e-process construction and power condition [TRUST-SIGNAL]
- Bayesian edge posterior now 2–4% after Bickel & Kim update [TRUST-SIGNAL]
- CLV contamination ranked #1 false-certification mode [TRUST-SIGNAL]
- Two-track confirmatory/exploratory discipline [TRUST-SIGNAL]
- Cryptographic vs trust-based hidden-variant boundary [TRUST-SIGNAL]
- DeepSeek citation-confabulation audit flag [OTHER]
## Engine-actionable? (yes/no + one-line what)
YES — adopt the grouping-loss estimator with permutation p-value for calibration auditing, and pre-register the continuous e-process as primary with binary sanity check before any edge certification.
