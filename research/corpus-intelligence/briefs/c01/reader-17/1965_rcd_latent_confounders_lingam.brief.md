# arxiv-program/research/2026-09-21/arxiv-deep/1965-rcd-latent-confounders-lingam.md
## What it is (1-2 sentences)
Full-text read of arXiv:2001.04197 (Maeda & Shimizu, 2020): RCD (Repetitive Causal Discovery), a functional-model-based method exploiting non-Gaussianity to learn causal graphs while explicitly representing latent confounders — directed arrows for genuine causal directions, bi-directed arrows for pairs sharing an unobserved common cause. The ledger positions it as the engine's missing audit layer: quarantine confounded indicator pairs (weather, officiating, rest, scheme changes) instead of silently trusting NOTEARS/PCMCI+ edges between them.
## Key metrics/methods (formulas where given, else "not specified")
- Three steps: (1) ancestor extraction via repeated pairwise direction inference (Lemmas 1–3), residualizing identified common ancestors by least squares (max regression size n=2); (2) parent/ancestor separation (Lemma 4 + Theorem 2); (3) unidentifiable-direction pairs marked bi-directed (shared latent confounder).
- Direction rests on the Darmois–Skitovitch theorem (Theorem 1): non-Gaussian residuals reveal direction; Shapiro–Wilk test (α_S) gates non-Gaussianity.
- Evaluation: F-measure = 2·precision·recall/(precision+recall), scored separately for bi-directed and directed edges (direction must be correct).
- Tuning used: α_C = α_I = α_S = 0.01, n = 2; α_I swept as 0.1^k (k=1…25), keeping fewest-confounded result.
- Simulation recipe: linear DAG with 40 causal arrows, 4 latent confounders (2 arrows each); noise X = Y³, Y ~ N(0.0, 0.5); coefficients ~ U on [−1.0,−0.5] ∪ [0.5,1.0].
## Data sources named
Simulation (fully specified recipe above); General Social Survey (NORC, n=1380, sociological variables with domain-knowledge ground truth). No code link stated.
## Findings (numbers and facts, not vibes)
- Simulation (medians): RCD medians highest on latent-confounder detection F among RCD/FCI/RFCI/GFCI; highest median precision and F-measure on causality; median recall second-highest (next to RESIT). Paper's caveat: "RCD does not greatly improve the performance metrics compared to the existing methods."
- GSS real data: bi-directed — RCD 4 est/4 correct (precision 1.0); FCI/RFCI 3/3 (1.0); GFCI 0/0. Directed — RCD 5 est/4 correct (0.8); LiNGAM 5/4 (0.8); RESIT 12/4 (0.3); FCI/RFCI 3/1 (0.3); PC/GES 2/1 (0.5). RCD's only error: x_3 ← x_5. "RCD performs the best among the existing methods in terms of both."
- Paper's own warning: real-world structures are "often very complex" and RCD "likely produces a causal graph where each pair is connected with a bi-directed arrow" — α_I tuning is a fragile heuristic.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: bi-directed edges give a principled way to flag indicator pairs confounded by scheme changes rather than treating them as causal — critical for scheme-tendency profiles.
- COACHING (INFERENCE): coaching/rest/motivation are classic latent confounders; quarantined pairs prevent confounded double-counting in coaching tendency models.
- TRUST-SIGNAL: the bi-directed quarantine rule is itself a trust layer — indicators joined by bi-directed edges in ≥60% of bootstraps may not be used as causes in narrative content, and at most one enters the prediction stack.
- OTHER: feeds NOTEARS as hard constraints (masked-W): forbid directed edges between quarantined pairs during continuous optimization, yielding sparser, more stable causal graphs for the engine.
## Engine-actionable? (yes/no + one-line what)
Yes — reimplement RCD (Algorithm 1 fully specified, ~4 engineer-days) on nflverse team-season aggregates 2015–2023 (~380 team-seasons, ~35 indicators, Shapiro–Wilk pre-screen), adopt the quarantine layer if bi-directed bootstrap Jaccard ≥ 0.5, ≥15% of directed edges removed with Brier parity on 2024–2025, and ≥3 of 5 hand-labeled known-confounded pairs (e.g., offensive & defensive EPA both driven by strength-of-schedule) are flagged bi-directed.
