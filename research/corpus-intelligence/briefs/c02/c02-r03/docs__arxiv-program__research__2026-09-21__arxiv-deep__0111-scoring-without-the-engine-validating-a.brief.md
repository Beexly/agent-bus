# docs/arxiv-program/research/2026-09-21/arxiv-deep/0111-scoring-without-the-engine-validating-a.brief.md
## What it is (1-2 sentences)
A validation protocol for cheap deterministic proxy scores of expensive, non-stationary oracles, demonstrated on GEO content scoring: calibrate by regularized cosine alignment to causal anchors, select via five adversarial falsification gates, and bound what the proxy can never resolve with a query-conditioned skyline. The ledger verdict is ADAPT — the protocol ports to quality-scoring sports content (post drafts, feed items, analyst copy) at zero inference cost.
## Key metrics/methods (formulas where given, else "not specified")
- Score: GEO_content(x) = Σ_{i=1}^{11} w_i g(f_i(x)), concave anti-stuffing transform g(u) = 100√(u/100) elementwise, w in the 11-simplex; final GEO(x) = 0.92·GEO_content(x) + 0.08·F(x) (freshness blend).
- Word-count caps: 35 pts under 100 words, 50 under 200, 65 under 300. Domain ranking shrinkage: s̃ = (kp + n·s̄)/(k+n), prior p = 50, strength k = 5.
- Fitting: w⋆ = argmin_w [ −⟨Mw, γ⟩/(‖Mw‖‖γ‖) + λ‖w − w_0‖_2^2 ], w ≥ 0, simplex-normalized; M ∈ R^{5×d} = volume-controlled subcomponent responses, γ = 5 causal anchors.
- Volume-controlled response: Δ_m(s) = E_x[ s(x ⊕ e_m^δ) − s(x ⊕ e_0^δ) ] over GEO-Bench sources (content-neutral filler isolates the content effect).
- Lemma 1 (concave transforms bound single-lever amplification): for concave g with g(0)=0, dose-k response satisfies Δ(k)/Δ(1) ≤ k, equality only if g linear on the traversed range; for the sqrt transform starting at floor, ratio = √k exactly before the cap binds.
- Five falsification gates: (1) negative control Δ_KS ≤ 0 at dose 1 and 8; (2) dose-response, worst consecutive step ≥ −0.5 points; (3) saturation, dose-8 ≤ 3× dose-1 per lever; (4) duplication gain ≤ +2 points; (5) length bias |corr(s(x), log‖x‖)| ≤ 0.35.
- Proposition 1 (query-blindness ceiling): any query-agnostic scorer's expected pairwise concordance C(s) ≤ E[max{p(x,x′), 1−p(x,x′)}] =: C_max < 1 whenever visibility genuinely depends on the query; only conditioning on q closes the gap.
- Identification check: per-weight intervals (two weights pinned by anchors, two forced by gates, remainder prior-supplied) via leave-one-feature-out refits.
## Data sources named
- GEO-Bench (HuggingFace GEO-Optim/geobench, 2024): 500 English page sources, 250 train / 250 test; 60 French sources for cross-lingual transfer; 21 deterministic edit variants per source; full strategy capture ≈ 35,000 scorings.
- Outcome records: 821 (engine, query) records over 229 unique queries across 7 engine arms (six open-weights: mistral-medium-3.5, gemma-4-31b, nexn2-pro, gpt-oss-120b, qwen3.5-122b, llama-3.3-70b; one closed: gemini-3.1-flash-lite). July-2026 replication: three proprietary gpt-5.x arms, n=150 paired queries each.
- Gaming benchmark: 500 sources, 2,000 additional deterministic adversarial scorings.
- Code/artifacts public: https://github.com/TW3-Partners-OS/geoscorereproducibility with reproduce.sh and a 163-assertion consistency audit.
## Findings (numbers and facts, not vibes)
- Selected sqrt family, held-out: Pearson 0.949 [CI95 0.932, 0.964], Spearman 1.0, permutation p = 0.0083 (floor 1/120), gates 5/5. Raw-linear fit reached 0.956 alignment but failed the dose-response gate (−0.74) → rejected; quantile family failed dose (−2.27) with p = 0.0667 → kept only as secondary.
- Weight identifiability: two weights pinned by anchors (quotable_density [0.12,0.16], statistic_density [0.02,0.05]), two forced by gates (entropy pair); LOFO: zeroing quotable_density drops Pearson to 0.688; zeroing citation_f1 keeps 0.947 with 5/5 gates.
- Gaming benchmark: attacker gain capped at max +6.1 points (quotation dose 1), decaying to +3.5 at dose 8; stats/cite decay +4.6→+0.1, +3.9→+0.5; three-lever combo at dose 8 +4.5 (subadditive). Score detects none of the out-of-distribution attacks (link injection AUC 0.468, keyword interleave 0.440) — it is manipulation-resistant, not a manipulation detector.
- Outcome validation: pooled within-query Spearman 0.1142 (n=777, t=6.12, p=1.5×10⁻⁹); gpt-5.x replication 0.118 (n=450, p=1.0×10⁻⁶); dispersion gradient 0.066 (compressed) → 0.240 (dispersed).
- Causal transfer failure: published 2023 GEO anchors (Quotation +42.6%, Statistics +32.8%, Cite-Sources +27.7%) measured ≈ 0 on modern engines (quotation −0.0009 p=0.82; statistics −0.0002 p=0.96; cite-sources −0.0101 p=0.04 uncorrected / 0.13 Bonferroni). Self-measured modern anchors: quotation −0.33 pp (CI95 [−0.84,+0.17]), statistics −0.28, cite-sources −0.79. INFERENCE: published "engagement levers" expire; the protocol's re-measurement step is the load-bearing part.
- Skyline study: query-conditioned cross-encoder 0.388 vs fixed score 0.119 — INFERENCE: most of the gap a query-blind scorer cannot close is structural (Proposition 1).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: adversarial falsification gates (negative control, dose-response, saturation, duplication, length bias) as a template for manipulation-resistant confidence/quality scoring; per-weight identifiability before claiming a weight is calibrated.
- OTHER: content-pipeline QA methodology (portable to @GalaxySportsHQ copy, Feed units, clip scripts); query-blindness ceiling argument for why context-free scores need bounds; the expired-anchor lesson (re-measure causal levers on current systems, never assume transport).
## Engine-actionable? (yes/no + one-line what)
Yes — port the falsification-gate protocol (not the GEO weights) to a deterministic pre-publish quality filter for GSE content, and to a manipulation-resistant confidence score for posted picks with its own query-conditioned skyline bound.
