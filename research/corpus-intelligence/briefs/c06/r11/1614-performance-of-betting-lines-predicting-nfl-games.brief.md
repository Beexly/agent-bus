# arxiv-program/research/2026-09-21/arxiv-deep/1614-performance-of-betting-lines-predicting-nfl-games.md
## What it is (1-2 sentences)
Paper (arXiv:1211.4000): on 2,560 NFL games (2002–2011), line difference LD = (Favorite−Underdog margin) − |closing line| fits Normal(0, 13.588) — yielding the closed-form spread→win-probability map Pr(win|p) = Φ(p/13.588) — with calibration table (p=3: model 0.587 vs actual 0.581; p=7: 0.697 vs 0.689), plus line-movement distribution and a decaying home-underdog ATS bias (58.1% → 52.5% → ~50.8%).
## Key metrics/methods (formulas where given, else "not specified")
- Break-even WR: 100·WR = 110(1−WR) ⇒ WR = 0.5238 (Eq. 1); MOV = Winner−Loser (Eq. 2); LD = (FavScore−DogScore) − |ClosingLine| (Eq. 3).
- Pr(F>U|P=p) = Φ(p/13.588) (Eq. 4, Stern 1991 method); example p=7 → 69.6%; −7 & −4 parlay ≈ 0.429.
- Season simulation: per-game Φ probs → product over k-game sequences → Σ over C(16,k) → predicted wins; 1,000 simulated seasons/year, averaged.
- Line movement: movement = open − close; opening vs closing MSE comparison; PCA showed line had high coefficient in almost every analysis (ranked above other box-score stats).
## Data sources named
2,560 NFL games 2002–2011 (10×256 regular season; abstract says incl. postseason), box scores (30+ stats/game) + opening/closing lines mostly from The Gold Sheet → MySQL DB; no replication dataset released.
## Findings (numbers and facts, not vibes)
- LD: mean −0.009, sd 13.588 (n=2,560); consistent with 1981–84 (0.07, 13.86), 1980–85, 1992–2001; chi-squared: not statistically different from Gaussian.
- Calibration: p=1: 0.529 vs 0.509 actual; p=3: 0.587 vs 0.581; p=5: 0.644 vs 0.597; p=7: 0.697 vs 0.689.
- Division winners: 7/8, 7/8, 6/8, 8/8, 6/8, 7/8, 7/8, 7/8, 6/8, 6/8 (≥75% every season; retrospective, ties counted favorably).
- Home teams: 57% SU; ATS 48.9% (z=−5.977 vs 0.5238); home favorites 816–888 (47.9%), z=−4.002 vs 0.5238.
- Home underdogs: abstract claims 53.5% ATS but paper's own Table 1 shows 409–396 = 50.8% (discrepancy noted; 53.5% matches the pick-em row 15–13); historical decay 58.1% (1973–79) → 52.5% (1981–96) → ~50.8% — expect it dead.
- Line movement: >2,000/2,560 games moved ≤1 point; 1,548 ≤0.5; ~20% moved >1 point; ~10% ≥2 points; opening vs closing MSE not significantly different; movement peaks Week 1 and Week 17.
- Favorites ATS: 1,194 covered, 412 won SU but didn't cover, 853 lost outright, 101 pushes; favorite ATS loss rate 51.5%.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Φ(p/13.588) as GSE's closed-form spread→win-probability baseline; σ(p, era, total) heteroskedastic extension as improvement experiment.
- TRUST-SIGNAL: line-movement null (P(|move|>1)≈0.20, P(|move|≥2)≈0.10) as the prior for the steam detector — only 90th-percentile moves flag.
- OTHER: home-underdog decay series (58.1%→52.5%→50.8%) is a "dead edges" content exhibit, not a live system, unless re-tested ≥52.38% on 2012–2025.
## Engine-actionable? (yes/no + one-line what)
Yes — implement Φ(p/13.588) baseline + 1,000-season Monte Carlo win-total simulator, re-test home-underdog ATS on 2012–2025 at −110, use the movement distribution as the steam-detector null; gate: Φ map within 0.002 Brier of GSE's current conversion and LD σ ≈ 13.6 on modern data.
