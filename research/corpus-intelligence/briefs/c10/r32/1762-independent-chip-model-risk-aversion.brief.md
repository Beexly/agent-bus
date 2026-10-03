# arxiv-program/research/2026-09-21/arxiv-deep/1762-independent-chip-model-risk-aversion.md
## What it is (1-2 sentences)
Deep-dive ledger on Gilbert (2009), arXiv:0911.3100: proves under the Independent Chip Model that a "fair bet" (zero-EV gamble) between two players ALWAYS lowers both participants' tournament EV while raising the EV of all non-participants — the formal game-theoretic foundation of why variance-without-edge destroys tournament equity. Verdict: weak but genuine ADAPT, as the contrarian-GPP construction principle.
## Key metrics/methods (formulas where given, else "not specified")
- ICM equity: E_i(c) = Σ_k P_i(k|c)·prize_k, concave in chips (diminishing marginal chip value under top-heavy payouts); 2nd/3rd-place probs via Malmuth-Harville recursion.
- Fair bet: E[Δc_i] = 0, Var(Δc_i) > 0 for participants i, j.
- Result 1: E[E_i(c+Δc)] < E_i(c) for participants (strict Jensen on concave E_i).
- Result 2: Σ_{non-participants} E[E_k] increases (prize-pool conservation).
- Caveat: results sharp only for two-player bets; 3+ player bets can break the concavity argument via correlated eliminations.
## Data sources named
None — pure theory; cites Henke's WPT final-table test as background evidence ICM approximately holds (modestly overestimates small stacks, underestimates large stacks).
## Findings (numbers and facts, not vibes)
- No numerical results — the contribution is the two theorems plus 3+ player counterexamples. [OTHER]
- Concavity of tournament equity in chips ⇒ any mean-preserving spread in a player's chip distribution lowers expected equity; taking on variance without increasing expected score donates equity to the field. [OTHER]
- The DFS transfer is an analogy, not a direct application: real GPP "bets" involve the whole field, so only the intuition (concavity → variance penalty) transfers. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Variance-without-edge donates equity to the field — formal basis for contrarian GPP lineup construction [OTHER]
- Variance-budget rule proposal: require ΔEV ≥ λ·ΔVar, λ calibrated from payout ladder concavity; bystander-equity audit on high-variance recommendations [OTHER]
- Field-sharpness multiplier improvement: stricter variance budgets in sharp fields, looser in soft fields [OTHER]
- Distinguishes GOOD contrarian plays (positive-EV differentiation) from BAD variance (zero-edge volatility) — only the former survives the concavity penalty [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — implement as GPP construction constraint (variance-budget rule with ladder-calibrated λ), accepted only if violators underperform compliant lineups on realized prize by ≥20% on 2024 DK NFL GPP backtests.
