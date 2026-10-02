# arxiv-program/research/2026-09-21/arxiv-deep/1965-rcd-latent-confounders-lingam.md

## What it is (1-2 sentences)
Full-paper research ledger (verdict: ADAPT) on arXiv:2001.04197 (Maeda & Shimizu 2020) — RCD (Repetitive Causal Discovery), a functional-model causal-discovery method for linear non-Gaussian acyclic models with latent confounders, specified as a quarantine/audit layer over GSE's indicator causal graphs (bi-directed edges mark confounded pairs that must not be trusted as causal).

## Key metrics/methods (formulas where given, else "not specified")
- RCD, three steps: (1) ancestor extraction — repeatedly infer causal direction between few variables (Lemmas 1–3), each time removing effects of already-identified common ancestors via least-squares regression; (2) parent vs. ancestor separation — Lemma 4 + Theorem 2 conditional-independence test; (3) latent-confounder detection — pairs still correlated but with unidentifiable direction get bi-directed arrows (shared latent confounder).
- Foundation: Darmois–Skitovitch theorem — if y_1 = Σα_i s_i and y_2 = Σβ_i s_i with independent s_i are independent, then all shared components (α_jβ_j ≠ 0) are Gaussian; contrapositive: a non-Gaussian shared component ⟹ dependence (direction inferred from non-Gaussian residuals).
- Tuning used: α_C (Pearson) = 0.01, α_I (independence) = 0.01, α_S (Shapiro–Wilk non-Gaussianity) = 0.01, max regression size n = 2; α_I swept as 0.1^k, k=1…25, keeping the fewest-confounder result.
- Evaluation metric: F-measure = 2·precision·recall/(precision+recall), scored separately for bi-directed (latent confounders) and directed (causality) edges.
- GSE spec: nflverse team-week panel 2015–2026 aggregated to team-season averages (~380 team-seasons), ~35-indicator node set (same as ledger 1962), Shapiro–Wilk pre-screen, α_I sweep k=1…10, bi-directed pairs quarantined in ≥60% of bootstraps.

## Data sources named
- Simulation: linear DAG with 40 causal arrows among observed variables; latent confounders each sending 2 arrows to observed variables; noise X = Y³ with Y ~ N(0.0, 0.5); coefficients b_ij, λ_ik ~ U on [−1.0,−0.5] ∪ [0.5,1.0]; 4 confounders.
- Real: General Social Survey (NORC, http://www.norc.org/GSS+Website/), n = 1380, with domain-knowledge ground-truth directions (Duncan et al.; also the DirectLiNGAM benchmark).

## Findings (numbers and facts, not vibes)
- Simulation: latent-confounder detection — RCD, FCI, RFCI, GFCI "almost the same" with RCD medians highest; causality — RCD highest median precision and F-measure of all methods, median recall second-highest (next to RESIT). Paper's own caveat: "RCD does not greatly improve the performance metrics compared to the existing methods."
- GSS real data (Table 1): bi-directed — RCD 4 estimated / 4 correct (precision 1.0); FCI, RFCI 3/3 (1.0); GFCI 0/0. Directed — RCD 5 est / 4 correct (0.8); LiNGAM 5/4 (0.8); RESIT 12/4 (0.3); FCI/RFCI 3/1 (0.3); PC/GES 2/1 (0.5). RCD's only error: dashed arrow x_3 ← x_5. Paper: "RCD performs the best among the existing methods in terms of both."
- Limitations (ledger): linear only; no public code (reimplementation required); non-Gaussianity is load-bearing — near-Gaussian indicators (EPA/play over large samples) may fail the Shapiro–Wilk gate; paper warns real structures are "often very complex" and RCD "likely produces a causal graph where each pair is connected with a bi-directed arrow" (degenerate failure mode); cross-sectional (no time dimension).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — The missing audit layer for GSE's causal indicator stack: sports is rife with latent confounders (weather, officiating crews, motivation/rest, scheme changes) that would make NOTEARS/PCMCI+ hallucinate causal edges; RCD's bi-directed edges flag and quarantine confounded pairs instead of silently trusting them.
- OTHER — Downstream rule: quarantined pairs (bi-directed in ≥60% of bootstraps) may not be used as *causes* in narrative content and at most one of the pair may enter the prediction stack (prevents confounded double-counting); acceptance gate requires ≥3 of 5 hand-labeled known-confounded pairs (e.g., offensive & defensive EPA both driven by strength-of-schedule; home/away splits driven by travel) flagged bi-directed.
- OTHER — Improvement experiment: feed RCD's bi-directed pairs as hard constraints into NOTEARS (forbid directed edges between quarantined pairs in a masked-W variant); replace the α_I = 0.1^k heuristic with stability selection over α_I.

## Engine-actionable? (yes/no + one-line what)
Yes — a 4-engineer-day quarantine layer: reimplement RCD on team-season aggregates, bootstrap bi-directed edge stability, and feed quarantined pairs as hard constraints into the NOTEARS graph, gated on Brier parity ±0.002 with ≥15% confounded-edge removal.
