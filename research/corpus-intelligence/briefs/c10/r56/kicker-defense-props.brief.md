# props/research/2026-09-17/props-consensus/kicker-defense-props.md
## What it is (1-2 sentences)
RESEARCH ONLY (not picks) props research for Bills vs Lions TNF 2026-09-17, projecting kicker points, FGs, PATs, team sacks, team INTs, takeaways, and points allowed from nflverse 2025 regular-season data with garbage-time corrections and uncertainty bands. Verdict: nothing actionable — one found line leaned against, all projections convergent with independent fantasy context.
## Key metrics/methods (formulas where given, else "not specified")
- Base method (from `projection_methods.md`): 2025 per-game base (filtered sample; efficiency 100% 2025 / 0% Wk1), garbage-time corrected where volume matters, uncertainty bands everywhere.
- Kicking points = FG attempts × blended make-rate (3.06 pts contribution format) + XP attempts × blended XP rate (3.76).
- INT projection uses the "FTN original angle" (from `projection_methods.md` §7): INT_rate_worthy × expected dropbacks × 52.3% conversion. Allen: 3.66% worthy × 27.0 exp db × 52.3% = 0.5; Goff: 1.44% × 34.2 × 52.3% = 0.3.
- Team sacks = forced-rate × exp dropbacks, garbage-corrected; cross-checked against allowed-rate: BUF forced 5.86% × DET 34.7 db ≈ 2.1; cross-check DET allowed 6.05% × 34.7 ≈ 2.1.
- Points allowed = naive midpoint (own allowed/g vs opp scored/g): BUF 21.47 vs DET 28.29 → 24.9.
- Individual sack props NULL by literature veto: pressure→sack conversion luck, R² < 0.005 (per props-report §3).
## Data sources named
nflverse (CC-BY 4.0) 2025 REG PBP + 2024 PBP for Bass (`/tmp/pbp2024.csv.gz`); FTN charting via nflverse (CC-BY-SA 4.0) for worthy INT rates; Week 1 2026 PBP verified; SportsbookWire/USA Today FTW article (one found line); RotoWire game page (team implied points); FantasyPros 29-expert projection; fantasyfootballcalculator projections.
## Findings (numbers and facts, not vibes)
- **Bates 2025:** 27/34 FG (79.4%; distance buckets 9/9, 5/5, 9/11, 4/8, 0/1), XP 54/56 (96.4%), 7.94 kick pts/g. League-weighted make-rate on his mix: 84.7% → blended make-rate used: 81%.
- **Bass 2025:** ZERO kicks in nflverse 2025 (missed whole season; SportsbookWire independently confirms). 2024 nflverse: 24/29 FG (82.8%; 7/8, 6/6, 7/11, 3/3, 1/1), XP 59/64 (92.2%). League-weighted on mix: 87.1% → blended make-rate used: 85%. Rust after a full season out is unmodeled and named.
- Team kick volume 2025: BUF 1.24 FG att/g, 3.18 XP att/g; DET 2.00 FG att/g, 3.29 XP att/g.
- Defense 2025: BUF forced 2.12 sacks/g (36), 0.76 INT/g (13, +4.1 over expected → negative takeaway regression risk), allowed 21.47 pts/g. DET forced 2.88 sacks/g (49), 0.76 INT/g (12, +1.5 over expected), opp-fumble recovery rate 26.3% (positive regression signal), allowed 24.29 pts/g. DET qb_hit_rate_allowed 18.9% (2nd-worst 2025).
- Projections vs market: "Both teams to make 2+ FGs" +275 (BetMGM) vs our joint probability ≈ 11% (P(Bates≥2) ≈ 40%, P(Bass≥2) ≈ 27%; Poisson 1.38/1.02 makes) → fair ≈ +800, market-implied 26.7%: line overpriced ~3× on probability — directional lean AGAINST, not a pick.
- DET points allowed projection 26 vs market-implied 30.0 (RotoWire): the file explicitly calls this "a model-vs-market difference, not an edge."
- Takeaway clustering fact: none of BUF's 5 fumble recoveries are "due" (recovery year-to-year corr ≈ 0).
- Context: Hutchinson 11.5 sacks in 2025 on 27 credited QB hits; Rousseau 7.0 on 23 hits — sticky pressure, not sticky sacks.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- FTN "worthy" INT rate as the QB danger signal (Allen 3.66%, Goff 1.44%) instead of raw INTs → QB-BEHAVIOR
- Individual sack props vetoed (R² < 0.005) while team sacks projectable → OTHER (model design: team-level sack units, never individual sack props)
- Allen's 71%-scramble rushing composition partially avoids sacks → QB-BEHAVIOR (mechanism from projection_methods §7)
- Backup OL (DET LG Mahogany + RT Miller out) → real sack-upside stated qualitatively, not in the number → OL
- DET missing safeties Branch + Joseph → unmodeled BUF scoring upside → SCHEME (injury-context qualitative override discipline)
- Campbell 4th-down aggression creates bimodal/fat-tail FG volume → COACHING
- +4.1 INTs-over-expected takeaway regression (BUF) and 26.3% fumble-recovery regression (DET) → OTHER (takeaway regression bookkeeping)
- "A projection disagreeing with a line is a hypothesis, not an edge, until backtested" → TRUST-SIGNAL
## Engine-actionable? (yes — adopt the FTN worthy-rate × dropbacks × 52.3% conversion INT model and the pressure→sack literature veto for individual sack props; wire backup-OL/safety injury contexts as qualitative override flags on sack/points-allowed projections)
