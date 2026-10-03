# docs/arxiv-program/research/2026-09-21/arxiv-deep/1487-kelly-criterion-revisited.md
## What it is (1-2 sentences)
A 2006 theory paper (Piotrowski & Schroeder, arXiv:physics/0607166v1) deriving optimal bookmaker-bet stakes via the Kelly criterion in a parimutuel/projective-geometry framing; ledger verdict is ADAPT — Kelly is referenced 12× in GSE's corpus but never read in depth, and GSE has no documented bankroll/stake-sizing layer.
## Key metrics/methods (formulas where given, else "not specified")
- Stake fractions lₖ = inₖ/all₀; parimutuel odds outₖ = αₖ·inₖ, αₖ = (IN₁+IN₂)/INₖ (pool shared among winners, zero margin).
- Expected log-growth: E(z)(l₁,l₂) = p₁·ln(1 + (IN₂/IN₁)l₁ − l₂) + p₂·ln(1 + (IN₁/IN₂)l₂ − l₁) (Eq. 5).
- Optimal-stake family (shorts allowed): (l̄₁ − p₁)·IN₂ = (l̄₂ − p₂)·IN₁ (Eq. 6).
- Maximal growth: E(z)(l̄₁,l̄₂) = −Σₖ pₖ·ln(INₖ/(IN₁+IN₂)) − S, S = −Σₖ pₖ·ln pₖ (Shannon entropy) (Eq. 7); E(z) ≥ 0 always; E(z) = 0 iff p₁·IN₂ = p₂·IN₁ (pool-implied probabilities match true probabilities).
- No-short optimum: if p₁·IN₂ > p₂·IN₁, l₁* = p₁ − (IN₁/IN₂)·p₂, l₂* = 0 ("bet only the mispriced side"); under Laplace indifference l₁* = p₁ − p₂.
- Fixed-odds Kelly (the form GSE must use instead of the paper's parimutuel one): f* = (b·p̂ − (1−p̂))/b = (p̂ − q)/(1 − q) for decimal odds b, q = de-vigged implied probability; bet only when p̂ > q.
- Big-player extremal conditions reduce to quintic polynomials → no closed-form optimal strategy (Galois-theory "no-go" argument).
## Data sources named
None — pure theory paper, no dataset, no empirical validation. Only external grounding: Thorp's Kelly application to blackjack [7]; Poundstone's *Fortune's Formula*. Appendix: Mathematica 5.2 code generating the quintic polynomials.
## Findings (numbers and facts, not vibes)
- Core qualitative result: "one can make profit in the bookie bet only when somebody bets irrationally in the same game" — Kelly profit = profit-on-unpopularity (seer's profit) minus entropy. (OTHER: profit exists only on mispricing, never on balanced pools)
- No-short optimum structure: bet ONLY the mispriced side (l₂* = 0), stake proportional to the probability-minus-implied-probability gap. (OTHER)
- Exact-knowledge assumption is the known failure mode: paper assumes the gambler knows true pₖ; raw Kelly on noisy p̂ overbets — fractional Kelly (½ or ¼) is the standard patch, not discussed in the paper. (TRUST-SIGNAL: calibrate p̂ before sizing)
- The paper's parimutuel framing (zero margin, odds = pool share) does NOT describe US sportsbooks (fixed odds, ~4.5–5% vig): only the no-short optimum's structure transfers; the exact formulas must be re-derived for fixed-odds. (TRUST-SIGNAL: do not adopt the parimutuel formulas directly)
- Single binary bet, one period; no portfolio of simultaneous correlated bets (NFL Sunday slates are exactly that — correlated via game script/total). (OTHER: gap for correlated-slate handling)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fractional Kelly (½ or ¼) staking on engine edges vs de-vigged lines: OTHER — new bankroll layer: `staking` module with inputs GSE engine p̂ + de-vigged market q + decimal odds b; publish only unit sizes on X (reinforces singles-only copy doctrine, 2026-09-21 parlay rule).
- Calibrated Kelly: stake on p̃ = λp̂ + (1−λ)q with λ from empirical-Bayes shrinkage toward the market using the engine's historical calibration curve — TRUST-SIGNAL: only bet the reliably estimated portion of edge (operationalizes "profit only when somebody bets irrationally" — bet when the market, not the engine, is the irrational one).
- Correlated-slate exposure cap (same-game spread+total down-weighting, per-slate bankroll-fraction cap): OTHER — beyond the paper, needed for NFL Sunday slates.
## Engine-actionable? (yes/no + one-line what)
yes — Build `staking` module: ½-Kelly (or ¼-Kelly) fixed-odds sizing on (p̂ − q) edges from GSE engine probs (v5.2.7) vs Odds-API de-vigged consensus, backtest on the 3,411-pick historical `picks` table vs flat 1-unit staking; gate: ADOPT iff ½-Kelly log-wealth ≥ flat + 0.05 with max drawdown ≤ flat's (reject if stake variance > 3× flat or realized edge too noisy); follow-up experiment: calibrated-Kelly with empirical-Bayes shrinkage of p̂ toward q.
