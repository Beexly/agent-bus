# arxiv-program/research/2026-09-21/arxiv-deep/1495-most-competitive-sport.md
## What it is (1-2 sentences)
Full-text research ledger (Verdict: ADAPT; lane: win_spread_total) of Ben-Naim, Vazquez & Redner 2005 (arXiv:physics/0512143v1) quantifying league parity via measured upset frequency q and linking it to the variance σ of season-end winning fractions through a mock-league model.
## Key metrics/methods (formulas where given, else "not specified")
Upset frequency q = fraction of games where the team with the worse record on game day wins (ties = half-win each; location and margin ignored; equal/no-record games excluded). Winning-fraction variance σ = sqrt(⟨x²⟩−⟨x⟩²). Mock-league Monte Carlo: teams start equal, random pairing, fixed upset probability q<1/2; infinite-season limit gives uniform F on (q,1−q) ⇒ σ=(1/2−q)/√3; finite seasons σ∝1/√(games) under pure chance. q_model fit by matching simulated F(x) to observed winning-fraction CDFs; agreement between measured q and q_model is the validation.
## Data sources named
All regular-season games, complete seasons only: FA 1888–2005 (43,350 games), MLB 1901–2005 (163,720), NHL 1917–2004 (39,563), NBA 1946–2005 (43,254), NFL 1922–2004 incl. AFL (11,770) — 300,000+ games; sources shrpsports.com, the-english-football-archive.com. Proposed GSE refresh: NFL 2005–2025 from nflverse + closing lines.
## Findings (numbers and facts, not vibes)
- Measured q: FA 0.452, MLB 0.441, NHL 0.414, NBA 0.365, NFL 0.364. q_model: FA 0.459, MLB 0.413, NHL 0.383, NBA 0.316, NFL 0.309 (slight systematic underestimation, Δ 0.03–0.06).
- σ: MLB 0.084 (narrowest), NFL 0.210 (widest — largely a short-season artifact). Soccer and baseball most competitive; basketball and football least (nearly identical q).
- Trends: NFL and MLB becoming more competitive over time; FA less competitive over 60 years.
- NFL q=0.364: the worse-record team wins over a third of the time — a hard empirical floor on moneyline favorite pricing. Favorite defined by record, not market odds.
- Limitations: data end 2004–2005 (pre-modern NFL: no 17-game season, different OT/CBA regimes); q_model systematically underestimates measured q by 0.03–0.06; ignoring ties changes q by ≤0.02; short paper, no uncertainty quantification.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] win_spread_total calibration: q as a season-level parity index and calibration prior — no calibrated NFL moneyline model should imply an underdog win rate far from the empirical ~0.36 (record-based); flag models whose implied underdog win frequency deviates persistently from q as a calibration canary. Cheap standings-based parity nowcast via the σ↔q relationship mid-season.
## Engine-actionable? (yes/no + one-line what)
yes — Recompute both q definitions (record-based via paper's definition, market-based via closing-line favorite) for NFL 2005–2025 from nflverse + closing lines; verify replication within ±0.02 of the paper's 0.364, then install market-based q as a standing calibration check on engine moneyline outputs (fail loudly if implied underdog win rate diverges >0.03 over a rolling 3-season window).
