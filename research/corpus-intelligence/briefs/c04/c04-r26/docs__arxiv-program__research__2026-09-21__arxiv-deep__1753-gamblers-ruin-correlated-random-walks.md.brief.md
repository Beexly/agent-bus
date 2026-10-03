# docs/arxiv-program/research/2026-09-21/arxiv-deep/1753-gamblers-ruin-correlated-random-walks.md
## What it is (1-2 sentences)
Deep read of Pozdnyakov (2025), "Martingale Approach to Gambler's Ruin Problem for Correlated Random Walks" (arXiv:2501.10302). Verdict: ADAPT — the closed-form ruin probability for Markov-correlated win/loss increments gives GSE an exact streak-aware ruin gate, pending a variable-stake (Kelly) extension.

## Key metrics/methods (formulas where given, else "not specified")
- Ruin probability, symmetric 2-state CRW (Eq. 2): α = [B − 1 + (1/2)·1/(1−p)] / [A + B − 2 + 1/(1−p)], where p = persistence P(win|win), A = profit target, B = bankroll (unit stakes).
- Arbitrary initial law (Eq. 3): α = [B − 1 + π_1/(1−p)] / [A + B + (2p−1)/(1−p)].
- Expected duration (Eq. 4): E(τ) = (1/b)[b − (1+a) + A²α + B²β + a(Aα + Bβ)], with martingale coefficients a, b solved from the chain.
- Sanity checks from file: A=B → α=1/2; p=1/2 → α=B/(A+B) (classical); p→1 → α→1/2 (first flip decides); B→∞ → α→1.
- Delays: symmetric {1,0,−1} closed forms (§4); two-pattern game HH vs TH example: π_1=.25, p=q=1/2 → α=(B−1/2)/(A+B).

## Data sources named
None — pure probability theory; the only worked example is the HH-vs-TH two-pattern coin game. No empirical dataset.

## Findings (numbers and facts, not vibes)
- With persistence p > 1/2, the 1/(1−p) terms inflate ruin probability vs the i.i.d. B/(A+B) classical value.
- GSE's existing ruin/drawdown math (ledgers 1749–1752) all assume independent increments; the file states GSE has no serial-correlation adjustment in its bankroll math — a gap this paper closes exactly.
- Author-flagged limitation: technique "likely unsuitable for Markov chains with more than three states"; unit stakes only (no variable/Kelly staking); increments are ±1 with no magnitude.
- Implementation spec in file: estimate p = P(win_t | win_{t−1}) per market from engine weekly settled P&L signs; set A/B in units of weekly stake; choose stake so α ≤ 1%; recompute weekly. Effort: ~0.5 day.
- Gate: ADOPT if weekly signs show |p − 1/2| > 0.05 (binomial test) AND CRW α differs from i.i.d. value by > 20% relative; REJECT if weekly signs are statistically independent.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Streak-aware ruin formula correcting i.i.d. bankroll math for clustered wins/losses: OTHER (bankroll/risk management — no QB/coaching/OL/scheme content in this paper).

## Engine-actionable? (yes/no + one-line what)
Yes — implement the streak-aware ruin gate (estimate p from weekly P&L signs, solve Eq. 3, cap stake so α ≤ 1%) once persistence is confirmed in the engine's settled P&L series.
