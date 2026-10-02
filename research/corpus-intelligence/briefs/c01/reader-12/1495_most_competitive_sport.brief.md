# arxiv-program/research/2026-09-21/arxiv-deep/1495-most-competitive-sport.md

**Ledger:** [1495] (arXiv:physics/0512143v1) — **Verdict in file: ADAPT**

## What it is (1-2 sentences)
A cross-sport parity study (5 leagues, 300,000+ games over a century) measuring league competitiveness via the upset frequency q (fraction of games the worse-record team wins) and the variance σ of season-end winning fractions, linked by a mock-league model — directly usable as a season-level parity/predictability index for NFL moneyline calibration.

## Key metrics/methods (formulas where given, else "not specified")
- q = fraction of games where the team with the worse record on game day wins (ties = half-win each; location and margin ignored; equal records excluded). σ = sqrt(⟨x²⟩−⟨x⟩²), x = winning fraction.
- Infinite-season model: winning-fraction distribution uniform on (q,1−q) ⇒ σ = (1/2−q)/√3. Finite seasons: random-walk scaling σ ∝ 1/√(games); q_model fit by matching simulated winning-fraction CDFs to observed.
- Two independent q estimates per league (directly measured vs q_model from standings fit) — agreement is the validation.
- Assumptions: all teams equal at season start; fixed q across teams/season; random pairing; favorite = better record to date.

## Data sources named
All regular-season games, complete seasons: FA 1888–2005 (43,350 games), MLB 1901–2005 (163,720), NHL 1917–2004 (39,563), NBA 1946–2005 (43,254), NFL 1922–2004 incl. AFL (11,770). Sources: shrpsports.com, the-english-football-archive.com.

## Findings (numbers and facts, not vibes)
- Measured q: FA 0.452, MLB 0.441, NHL 0.414, NBA 0.365, NFL 0.364. q_model: FA 0.459, MLB 0.413, NHL 0.383, NBA 0.316, NFL 0.309 (good agreement, systematic ~0.03–0.06 underestimation).
- Conclusion: soccer and baseball most competitive; basketball and football least (nearly identical q). Measured NFL q=0.364 — the worse-record team wins over a third of the time, a hard empirical floor on moneyline favorite pricing.
- σ: MLB 0.084 (narrowest), NFL 0.210 (widest — largely short-season artifact).
- Trends: NFL and MLB becoming more competitive over time; FA less so over 60 years. Ignoring ties changes q by ≤0.02 (verified).
- Limitations: data end 2004–2005 (pre-modern NFL — no 17-game season, different overtime/CBA regimes); favorite defined by record only, not market odds; no uncertainty quantification on q.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: q is a single, interpretable, empirically grounded number usable as a standing calibration check — no calibrated NFL moneyline model should imply an underdog win rate far from the empirical ~0.36 (record-based); flag persistent divergence as a calibration canary.
- OTHER (win_spread_total lane): recompute record-based q AND market-based q (favorite = closing-line favorite) for modern NFL 2005–2025 (nflverse); use the σ↔q relationship as a cheap mid-season parity nowcast from current standings' σ without game-by-game reconstruction — a regime input for spread/total adjustments; decompose season-level q by structural changes (salary cap, schedule expansion) as an institutional parity model for long-horizon futures/season-win markets (INFERENCE for the extension).

## Engine-actionable? (yes/no + one-line what)
Yes — recompute both q definitions for NFL 2005–2025 and install the market-based q as a standing moneyline-calibration check (flag if implied underdog win rate diverges >0.03 over a rolling 3-season window), after a ±0.02 replication of the paper's record-based NFL q.
