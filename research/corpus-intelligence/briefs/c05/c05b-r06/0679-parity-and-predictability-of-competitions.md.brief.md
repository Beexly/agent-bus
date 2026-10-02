# arxiv-program/research/2026-09-21/arxiv-deep/0679-parity-and-predictability-of-competitions.md
## What it is (1-2 sentences)
Deep ledger on Ben-Naim, Vazquez & Redner (2006), "Parity and Predictability of Competitions" (arXiv:physics/0608007v1): a statistical survey of 300,000+ games across five leagues relating standings parity (σ, std of season-end win fractions) to game predictability (q, upset frequency) via a single-parameter kinetic model. Verdict: ADAPT — the upset-frequency index q and the Eq.-(2) standings-variance → predictability mapping as GSE's league-parity diagnostic and season-simulator dispersion sanity check.

## Key metrics/methods (formulas where given, else "not specified")
- Parity metric: σ = √(⟨x²⟩ − ⟨x⟩²), std of season-end win fraction (Fort 1995).
- Predictability metric: q = upset frequency — fraction of games where the worse-record-on-date team won (equal-record games disregarded; ties counted as 1/2 win).
- Win-fraction cumulative distribution, infinite-game limit (Eq. 1): F(x) = 0 for 0<x<q; F(x) = (x−q)/(1−2q) for q<x<1−q; F(x) = 1 for 1−q<x. Density uniform on [q, 1−q].
- Parity–predictability relation (Eq. 2): σ = (1/2 − q)/√3.
- Master equation (Eq. A1): dgk/dt = (1−q)(g_{k−1}G_{k−1} − g_k G_k) + q(g_{k−1}H_{k−1} − g_k H_k) + (g²_{k−1} − g²_k)/2, with Gk, Hk cumulative win-count distributions.
- Random-game baseline: σ = 1/(2√n) for a pure-random season.

## Data sources named
- http://www.shrpsports.com/ and http://www.theenglishfootballarchive.com/ — 300,000+ regular-season games over a century (FA 1888–2005, MLB 1901–2005, NHL 1917–2004, NBA 1946–2005, NFL 1922–2004).
- nflverse (proposed for the GSE reproducibility pipeline).

## Findings (numbers and facts, not vibes)
- Measured q: FA 0.452, MLB 0.441, NHL 0.414, NBA 0.365, NFL 0.364 (NBA/NFL "nearly identical").
- Model-fit qmodel: FA 0.459, MLB 0.413, NHL 0.383, NBA 0.316, NFL 0.309; q−qmodel bias: MLB 0.028, NHL 0.031, NBA 0.049, NFL 0.055 (largest gap; FA −0.007).
- Measured seasonal σ (0.084–0.210) far exceeds Eq.-(2) values (NFL: measured 0.210 vs 0.0785 from theory) — season length dominates NFL variance.
- All-time records inverted via qall = 1/2 − √3·σall agree with season-level q (NFL: qall = 0.401).
- Robustness: ignoring <0.05 win-pct-gap games changes q by <0.005; ignoring first half of season changes q by <0.007; ties shift q by ≤0.02.
- Temporal trends: MLB games "steadily becoming more competitive"; NFL "dramatically improved" over 40 years; FA less competitive over 60 years ("rich gets richer").
- 2005 MLB: 54% of team wins occurred at home (unmodeled home-field datapoint).
- NFL-specific: q − qmodel gap of 0.055 means the closed-form theory is weakest for football.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The q-index sets a ceiling on achievable favorite-win accuracy that any NFL classifier should be judged against — OTHER (calibration ceiling).
- Proposed parity-regime monitor (NFL q 2000–2026, flagging post-2011 CBA / 17-game-season shifts) doubles as a content product — OTHER (content + prior).
- Season-simulator dispersion gate: simulated season-end win-fraction σ must match historical σ, else team-strength dispersion is mis-specified — OTHER (simulator QA).

## Engine-actionable? (yes/no + one-line what)
Yes — build the q-index pipeline from nflverse (standings-at-each-game-date, worse-record wins / decisive games) and use it as a standing league-parity diagnostic plus a dispersion gate for the season simulator (Test B target: predict seasonal σ from q with MARE ≤ 10%).
