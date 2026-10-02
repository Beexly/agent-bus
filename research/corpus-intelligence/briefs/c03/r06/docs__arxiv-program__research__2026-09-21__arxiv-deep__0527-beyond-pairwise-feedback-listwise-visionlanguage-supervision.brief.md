# docs/arxiv-program/research/2026-09-21/arxiv-deep/0527-beyond-pairwise-feedback-listwise-visionlanguage-supervision.md

## What it is (1-2 sentences)
Deep-read ledger of arXiv:2608.25350v1 (Katkuri, Kawada, Wachs 2026) on training RL reward models from VLM-generated listwise rankings (K in {3,4,5}) under a Plackett-Luce likelihood for Meta-World robotic manipulation. Verdict: REJECT — robotics paper with no sports-relevant claim, data, or transfer path.

## Key metrics/methods (formulas where given, else "not specified")
- Plackett-Luce likelihood (Eq. 3): P_psi[sigma^(1) > ... > sigma^(K)] = product over k of exp(r_hat_psi(sigma^(k))) / sum_{j=k..K} exp(r_hat_psi(sigma^(j))); segment reward r_hat_psi(sigma) = sum_t r_hat_psi(s_t, a_t); reduces exactly to Bradley-Terry for K=2.
- Baselines: BT-Kwise (rank-broken into C(K,2) implied pairs), BT-Pairwise (K=2), RL-VLM-F (two-stage VLM analysis, 2M=8 VLM requests), oracle SAC on ground-truth rewards.
- Reward-model ranking accuracy on held-out VLM labels as secondary metric.

## Data sources named
- Meta-World simulation benchmark (Sawyer robotic arm), 3 tasks: Drawer Open, Door Close, Button Press. 5 independent seeds each, 100,000 env steps per config. VLM = GPT-5.6 Luna. No sports data.

## Findings (numbers and facts, not vibes)
- Final success rates (mean ± SEM, 5 seeds, Table II): best PL config K=4 achieves 86% mean final success (Drawer Open 86±3.7, Door Close 48±19.3, Button Press 41±18.4), matching oracle baseline on Drawer Open.
- Either PL or BT-Kwise tops preference-based methods in 2 of 3 environments (Drawer Open: BT-Kwise K=5 89±7.1; Door Close: PL K=5 54±13.2; Button Press: BT-Kwise K=4 45±8.2).
- No universal advantage by K or formulation; PL significantly beats BT-Kwise only for Button Press at K=5 (authors call significance "nominal").
- Longer rankings introduce VLM reasoning noise (reported K tradeoff).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Plackett-Luce likelihood as ranking equation: OTHER (already in standard toolkit per the ledger; the paper develops no theory about it).
- VLM supervision efficiency finding: OTHER (robotics-only, no sports transfer).
- "Nominal" significance caveat on reported wins: TRUST-SIGNAL (paper itself flags its significance claims as nominal).

## Engine-actionable? (yes/no + one-line what)
No — REJECT verdict; the ledger states PL theory is cited not developed, and no NFL analogue exists for VLM-supervised manipulation reward models. (INFERENCE: the only hypothetical gate noted is listwise aggregation of expert power rankings as PL data, which the paper does not address.)
