# docs/research/2026-09-19-dk-week2/deep/defense-scheme-layer-2026-09-19.md
## What it is (1-2 sentences)
A 30-defense scheme-layer research file for DraftKings NFL Week 2 2026 (15 games): per-team EPA/play allowed, success/explosive allowed, blitz/pressure/sack rates, man/zone splits, 2025 INT-luck regression, verified DC/play-caller identities with scheme tendencies, and ranked best/worst schematic matchups for the opposing offense.
## Key metrics/methods (formulas where given, else "not specified")
- Offense EPA/play allowed, success allowed %, explosive allowed % (GSE lab team_metrics 2025/2026; report inverts defensive EPA so negative = good defense).
- Wk1 one-game samples supplemented with labeled 2025 baselines; StatRankings `nfl-advanced-teams.csv` exposes top-5 only — anything outside top five marked "outside top five (not publicly verified)," never zeroed.
- INT-luck regression: 2025 `takeaways_int_diff` (actual minus expected forced INTs); positive → negative regression risk.
- DC identity verified via team sites/ESPN/Reuters/beat reporting; named-DC-vs-play-caller mismatches flagged.
## Data sources named
- StatRankings advanced teams file (`nfl-advanced-teams.csv`, recorded 2026-09-18).
- GSE lab `team_metrics_2025.csv` / `team_metrics_2026.csv` (dated 2026-09-17).
- TruMedia via Reuters (2025 defensive EPA ranks); PFT/NFL Network, arizonasports.com, ESPN, BaltimoreRavens.com, Pro Football Rumors, Commanders Wire, Vikings Wire, NY Post, Sporting News, Steel Curtain Network/Steelers Depot; fantasypros.com schedule (week 2, confirmed 2026-09-19).
## Findings (numbers and facts, not vibes)
- Five best schematic matchups (for opposing offense): TB vs CLE (+0.400 EPA/play, 61.2% success, 22.4% explosive, worst slot coverage 1.48 FP/route, first-time DC); ATL vs CAR (+0.360 EPA/play, 55.6% success; 2025 32nd EPA); WAS vs DAL (+0.397 EPA/play, 62.1% success allowed, Week-2 Fangio-system install on 2025's worst scoring D); NYG vs LAR (+0.262 EPA/play, 61.8% success, 0.94 slot FP/route; NYG +0.397 EPA/play offense); CHI vs MIN (+0.360 EPA/play offense vs 80.4% blitz that GB solved in-game, cut to 63% after halftime, MIN 33.3% explosive-reception rate when blitz misses).
- Five worst matchups: DEN vs JAX (-0.493 EPA/play allowed, 53.1% pressure, 16.7% sack rate); IND vs KC (54.3% pressure, 1st; 2.2% explosive rate; IND -0.291 EPA/play); CLE vs TB (-0.493 EPA/play offense vs 45.9% Bowles blitz); TEN vs PHI (+19.0 pressure-over-expected, 2nd; 4.2 YPA vs zone); PIT vs NE (-0.311 EPA/play offense vs 48.1% blitz under Kuhr, SB-caliber baseline).
- Consensus-contradicting DC facts: PIT Patrick Graham 10.5% blitz (league low), 96.2% zone — reputation inversion; GB Gannon blitzed 48.4% (2nd) vs 26.3% in 2025; MIN Flores' 80.4% headline hides a solved in-game adjustment; actual play-callers differ from named DC at NYJ (Glenn), BAL (Minter), MIA (Hafley), TEN (Saleh); SF Morris's scheme is five-man fronts/changing shells, not the old four-down quarters identity; LAC's 2025 results inflated by +7.11 INT luck (2nd-highest); NYJ's +10.08/-10.08 is the most extreme takeaway-regression item in the dataset (NYJ -10.08 positive regression; league's most due to improve); CHI +7.22 most inflated negative-regression risk.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: verified 2026 play-caller identities and tendencies for all 30 defenses — first-time DCs (Rutenberg, Parker, O'Leary, Leonard), play-caller/DC mismatches, scheme contradictions — directly feeds coaching-tendency signals.
- SCHEME: man/zone/blitz rates, simulated-pressure systems, INT-luck regression, slot-coverage FP/route allowed — matchup-structure signals.
- TRUST-SIGNAL: the anti-fabrication discipline (top-5-only sources marked "not publicly verified," gaps marked, not invented) is a research-quality signal; INT-diff regression is a trust/prior-adjustment mechanic.
## Engine-actionable? (yes/no + one-line what)
yes — the per-team EPA/success/explosive allowed + blitz/pressure/man-zone rates + verified play-caller identities + INT-luck regression deltas are structured matchup inputs for the scheme layer.
