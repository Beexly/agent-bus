# docs/arxiv-program/research/2026-09-21/arxiv-deep/1151-learning-conformal-abstention-policies.md

## What it is (1-2 sentences)
Ledger of arXiv:2502.06884v1 (Tayebati et al. 2025, verdict ADAPT minus the RL gimmick). Conformalized Abstention Policy (CAP): a two-threshold conformal structure giving three regimes — single prediction / prediction set / abstain — with coverage guarantees, benchmarked across LLM/VLM multiple-choice QA.

## Key metrics/methods (formulas where given, else "not specified")
- Nonconformity s(x,y) = 1 − p_y(x) (softmax); q̂_predict = quantile({s_1..s_n}, ⌈(n+1)(1−α)⌉/n); q̂_abstain = quantile({s_1..s_n}, ⌈(n+1)(1−β)⌉/n).
- Regimes: s(x) < q̂_predict → single prediction; q̂_predict ≤ s(x) < q̂_abstain → prediction set; s(x) ≥ q̂_abstain → abstain. Stochastic extension via sigmoids p_single = σ(−c(s−q̂_predict)), p_abstain = σ(c(s−q̂_abstain)).
- RL tuning (REINFORCE on (α,β) with cost C(α,β) = (1−acc) + λ_1·avgSet + λ_2·abstention − λ_3·coverage − λ_4·div) — file recommends DROPPING this; no ablation vs grid search, λ values unreported, guarantees distorted (acknowledged §IV-B). Tune (α,β) on validation instead.
- Coverage P(Y_t ∈ C(X_t)) ≥ 1 − α; ECE = Σ_b (|B_b|/N)|acc(B_b) − conf(B_b)|.
- Gate in file: three-way selective ROI must beat single-threshold conformal and a fixed 65% confidence rule by ≥ 2 ROI points on test block with coverage ≥ 90% and abstention ≤ 25%.

## Data sources named
Ten MCQA benchmarks: VLM — MMBench dev (4,000), OODCV-VQA Digits, ScienceQA (3,952), SEEDBench (14,233), AI2D (15,000); LLM — MMLU (10,000 sampled), CosmosQA (10,000), HellaSwag (10,000), HaluDial (10,000), HaluSum (10,000). Models: LLaVA-v1.6 34B/13B/7B, Yi-34B, Qwen-7B/14B (+ appendices). Code: github.com/sinatayebati/vlm-uncertainty. No sports data.

## Findings (numbers and facts, not vibes)
- Hallucination AUROC / selective-gen AUARC: LLaVA-34B CAP 0.8000/0.9735 vs LAC 0.7388/0.9111 vs APS 0.7070/0.9287; Yi-34B CAP 0.8004/0.9700 vs LAC 0.7087/0.8459 vs APS 0.6819/0.8622; Qwen-14B CAP 0.6964/0.9162 vs LAC 0.5965/0.8275 vs APS 0.6125/0.8541. Paper claims peak AUROC gain 22.19%, AUARC gain 21.17%, accuracy +up to 3.2%.
- Coverage: CAP 91.94–93.92% across models (all ≥ 90% target); LAC 89.61–91.49 (dips below 90); APS 94.54–98.14 (over-covers via large sets).
- Accuracy / avg set size: LLaVA-34B CAP 86.64%/1.8574 vs APS 84.89%/2.4691 vs LAC 84.14%/1.3804; Yi-34B CAP 88.77%/1.8186 vs APS 87.76%/2.4701 vs LAC 86.98%/1.2762.
- ECE: LLaVA-34B CAP 0.0285 vs LAC 0.1109 vs APS 0.1666; Qwen-7B 0.0748 vs 0.3047/0.3381; Yi-34B 0.0784 vs 0.1575/0.2109 (claimed 70–85% ECE reduction).
- File's read: CAP dominates LAC on coverage-validity and APS on informativeness, but accuracy gains are small (1–3 pts) and the RL layer plausibly replicates a grid search.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: three-way publish policy — confident → post pick; medium → post as "lean" with conformal interval; low → no post (abstain). Operationalizes a statistical no-play rule behind GSE's public picks.
- OTHER: fills the learning-to-abstain / coverage-risk gap in the corpus calibration stack; three-way extension over paper 1150's two-way abstention; market-conditional β (spread/total/moneyline) improvement.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the two-threshold publish policy (s = 1 − calibrated p_win; grid-search (α, β) on chronological validation; post / lean-with-interval / abstain) on the picks table with weekly coverage monitoring, gated on ≥2 ROI points selective-ROI gain at ≥90% coverage.
