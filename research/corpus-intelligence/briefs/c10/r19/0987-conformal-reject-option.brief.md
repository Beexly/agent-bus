# arxiv-program/research/2026-09-21/arxiv-deep/0987-conformal-reject-option.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2506.21802v1 — "Classification with Reject Option: Distribution-free Error Guarantees via Conformal Prediction" (Szabadváry et al., Jönköping U., 2025). Formalizes conformal prediction as a binary classifier with reject option and derives the correct distribution-free singleton error rate for the offline inductive setting; verdict ADAPT (the abstention lane's theoretical anchor).
## Key metrics/methods (formulas where given, else "not specified")
- Reject rule: m(x,ε) = ®∅ if |Γ^ε(x)|=0 (novelty rejection); accept Γ^ε(x) if |Γ^ε(x)|=1; = ®𝒟 if |Γ^ε(x)|=2 (ambiguity rejection). Accept iff ε ∈ I_x = [γ_x, c_x).
- Proposition 2 (online smoothed CP): σ := P(err | S) = (ε − P(E)) / P(S); estimator σ̂ = (nε − e)/s → σ a.s.; error rate = σ; reject rate = 1 − P(S). Bounds P(E) ≤ ε ≤ 1 − P(D) hold, so σ ∈ [0,1].
- Offline ICP correction (the paper's key fix): ε̃ = ε − √(ln(1/δ)/(2h)) with calibration size h; singleton bound σ̃ = (ε̃ − P(E))/P(S), estimated by (nε̃ − e)/s — a PAC-type guarantee with two parameters (prior papers used the online formula offline, only approximately correct).
- Mondrian (label-conditional): σ_k = (ε_k − P(E_k))/P(S_k), estimated (n_k ε_k − e_k)/s_k per category.
- Batch offline ICP: σ̃_k = (N_k ε̃_k − e_k)/s_k per batch; → σ as batches accumulate (δ_{k+1} = δ_k^{h_{k+1}/h_k}).
- Assumptions: exchangeable data sequence (weaker than i.i.d.); binary labels (multiclass via one-vs-all); smoothed CP; nested prediction sets in ε.
## Data sources named
No sports data — three numerical demos on public UCI-style sets: qsar-biodeg (1055×41), spambase (4601×57), California-Housing-Classification (20640×8). Tooling: Crepes (inductive conformal prediction). No author code released.
## Findings (numbers and facts, not vibes)
- Full CP Mondrian 1-NN on qsar-biodeg: max singleton proportion ≈ 0.4 → minimum achievable reject rate ≈ 0.6; same reject rate can arise from different ε — always pick the smallest ε (lowest error); estimator noisy for large ε.
- Offline ICP RandomForest on spambase: very low error rates achievable but only at high reject rates — the operating-point trade-off is the point.
- Key correction demonstrated: prior singleton-error formulas (Linusson et al. 2016/2018, Bortolussi et al. 2019) hold only online, not in the offline inductive setting practitioners use.
- Limits: not all reject rates achievable (predictor/data dictate the frontier); σ̂ noisy where it matters (large ε, few singletons); exchangeability breaks under distribution shift — the guarantee is weakest precisely when abstention is most needed (novelty).
- GSE link noted in file: maps directly onto the coverage-certification bug class found in GSE's own cqr.ts (clamping rank to n−1, falsely certifying 90% at 83.33%).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Distribution-free error guarantee σ for accepted predictions — TRUST-SIGNAL (the certification primitive for every published pick)
- Offline correction ε̃ = ε − √(ln(1/δ)/(2h)); online formula fails offline — TRUST-SIGNAL (exact bug class already found in GSE's cqr.ts; calibration-size correction mandatory)
- Error-reject curves parameterized by ε; same reject from different ε → pick smallest ε — OTHER (operational tool: desk picks operating points like "publish only singletons at ε giving ≤8% error")
- Not all reject rates achievable; guarantee weakest under distribution shift — TRUST-SIGNAL (honest abstention limits; novelty rejections route to analyst review)
- Mondrian per-category guarantees σ_k — OTHER (condition on league/market type for label-conditional pick guarantees)
## Engine-actionable? (yes/no + one-line what)
yes — Build a conformal abstention gate on the pick pipeline: wrap the win-probability model in offline ICP (calibration = recent closed picks), publish only singleton sets, report guaranteed singleton error σ̃ per slate; numeric gate: reproduce the spambase experiment and require empirical singleton error ≤ corrected bound σ̃ in ≥95% of 1000 runs at ε=0.10, h=500, δ=0.05, AND confirm the uncorrected formula fails the gate; improvement: validate on 2+ seasons of GSE binary picks (published singletons ≥3pp lower error than published-all at ≤40% reject).
