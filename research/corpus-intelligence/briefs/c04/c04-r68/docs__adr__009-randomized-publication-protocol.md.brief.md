# docs/adr/009-randomized-publication-protocol.md
## What it is (1-2 sentences)
A decided architecture decision record (2026-08-14) defining the "randomized publication protocol" (the coin): a daily board-day-level randomized experiment (candidate model board vs de-vigged market-mirror baseline board) that makes GSE's causal "our picks beat the market" claim anytime-testable via e-processes, driven by CEPT Part II theorems.
## Key metrics/methods (formulas where given, else "not specified")
- ε (baseline-slate rate) = 0.15 (~85% of days candidate board; ~4–5 baseline settled days/month); π_t = 0.85 constant → Hoeffding width w = B/(π(1−π)) ≈ 7.84B.
- Reward R_t: flat-stake 1u per published pick at closing odds, per-pick return clipped to [−1, +1], day reward = mean over picks mapped affinely to [0, 1] (B = 1, bounded by construction).
- Shift-test strata: candidate mean edge |p̄ − 0.5| terciles [0, 0.05)/[0.05, 0.10)/[0.10, 0.5]; α = 0.01 per instrument (value, shift, menu-audit), reported separately.
- Coin: committed-seed HMAC — u = HMAC-SHA256(seed, "publication-coin:v1:" + date); baseline iff u < ε; monthly epochs, SHA-256(seed‖epoch) committed to `docs/research/cept/coin-commitments.json` before epoch; seed revealed after epoch end.
- e-processes: Value = plug-in λ (predictable, capped 1/(4B)); Shift = Beta(1,1) per-arm-per-stratum posteriors against known π-mixture. Built/tested: `packages/prediction-engine/src/publication-coin.ts` (9 tests incl. frozen vectors), `packages/prediction-engine/src/instrumented-eprocess.ts` (8 tests incl. executable Theorem 7 demo).
## Data sources named
CEPT Part II (docs/research/cept/HONEST_CEPT.md §7–§8, Theorems 1, 7, 9, 12, Propositions 5 & 10, Remarks 13); settlement ledger (rows gain coinEpoch, coinU, publishedCandidate, pi, rewardMapped, stratum); founder diagnostic `ops:preflight` step 3 (Murphy decomposition).
## Findings (numbers and facts, not vibes)
- Randomization unit is the board-day (whole slate), not per-pick — per-pick mixing would leak arm identity through slate composition.
- Rollout is shadow first: coin drawn daily, BOTH slates computed and logged to the settlement ledger, candidate board published regardless, until `PUBLIC_PICKS` goes live; no gate or env flag is flipped by the ADR.
- Activation requires exactly two owner actions: (1) `openssl rand -hex 32` seed → `PUBLICATION_COIN_SEED` + commitment for epoch 2026-09; (2) production `DATABASE_URL` session for δ-sweep and shadow-coin wiring.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the protocol's entire purpose is separating prediction skill from echo (Theorem 7) — candidate vs de-vigged market-mirror board with pre-registered terciles foreclosing stratum-shopping.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the pre-registered |p̄−0.5| edge-tercile stratification and the bounded flat-stake reward mapping for any engine self-evaluation harness against the market.
