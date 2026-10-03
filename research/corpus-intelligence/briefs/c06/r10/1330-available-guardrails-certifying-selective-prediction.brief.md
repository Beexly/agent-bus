# arxiv-program/research/2026-09-21/arxiv-deep/1330-available-guardrails-certifying-selective-prediction.md
## What it is (1-2 sentences)
A selective-prediction certification paper (arXiv:2609.22048, Rivian/VW Group authors): instead of asking whether a granted reliability certificate is valid, it asks whether finite calibration data can produce a certificate at all — making "certificate availability" exactly computable via a binomial inversion identity, plus a DP partition planner for per-market certification gates. Verdict ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Selective error: R(t) = P(C=0 | A_t=1), R(t) ≤ α = 1−τ.
- Inversion identity: UCP(E,n;γ) ≤ α ⟺ FBin(E;n,α) ≤ γ, where FBin(k;n,p) = Σ_{i=0}^k C(n,i)p^i(1−p)^{n−i}.
- Availability: π(n,r;α,γ) = FBin(e*;n,r); e* = max{k: FBin(k;n,α) ≤ γ}; π=0 if no k certifies.
- Segment score: v(S,t;J) = q_S(t)·π(⌊Nq_S(t)⌋, r_S(t); 1−τ, δ/J); DP D(j,b) = max_a {D(j−1,a)+w_{a,b−1}}.
- Groupwise contract: P_Dcal(∀j certified: R_j(t_j) ≤ α) ≥ 1−δ over a fresh IID certification sample.
- Familywise-budget reallocation: frozen γ_1..γ_J with Σγ_j ≤ δ instead of flat δ/J.
## Data sources named
Synthetic generators (1,845 cell-by-J configurations); CLINC, BANKING, HWU intent-routing datasets with DeBERTa/DistilRoBERTa (30 trained models); LLM tool-calling (Qwen2.5-14B on BFCL), Civil Comments moderation, DermaMNIST lesion classification, MovieLens recommendation.
## Findings (numbers and facts, not vibes)
- Identity verified: predicted vs simulated certification frequency across 432 binomial cells: MAE 0.00067.
- Sample-size arithmetic (τ=0.90, familywise δ=0.05, true error 0.05, 80% availability): 179 calibration examples for 1 group; 450 each for 50 groups; raising true error 0.05→0.09 explodes to 13,407 per group.
- Held-out selection: +0.0601 mean certified coverage over support balancing across 1,340 configurations; direction reproduced in 59/60 model effects.
- Score quality gates everything: oracle score +0.1217, strong learned +0.1144, weak +0.0072, uninformative +0.0004.
- Shift warning: 30% label-prior shift — stale precision 0.753 → 0.935 with exact reweighting; monitoring detects only 11.3% of a 2.5% conditional shift within 2,000 probes.
- All guarantees are for the certification distribution only; under deployment shift the certificate can look valid while being wrong.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Certified posted-pick track-record claims per market — TRUST-SIGNAL (rigor behind public "our picks hit X%" statements; a market only advertises once availability crosses the bar)
## Engine-actionable? (yes/no + one-line what)
yes — Build the per-market availability calculator (179/450/13,407 arithmetic recomputed with GSE's true per-market error) as the "certified badge" gate: no public track-record claim for a market until it clears 80% availability, plus the held-out policy-selection protocol replacing naive backtest-winner selection.
