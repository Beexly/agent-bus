# docs/props/research/2026-09-17/props-consensus/props-report.md
## What it is (1-2 sentences)
Research-only comparison of market prop lines vs nflverse-derived projections for the Bills vs Lions game (2026-09-17, 7:15 PM CT kickoff): 52 timestamped book-identified market rows against 29 projections with uncertainty bands, concluding no statistically defensible edge existed on the slate — all 12 leans sat inside their bands.
## Key metrics/methods (formulas where given, else "not specified")
- Projections: 2025 base = per-game means; Week 1 = role-check only, efficiency never blended; volume via script-adjusted dropback rates measured by WP bucket (BUF 53% as −5.5 favorite, DET 63% as trailing underdog); carry/target shares with overlap-game denominators; measured garbage-time ratios (+3–11%) since props settle on full games.
- Deeper inputs: unit EPA splits (qualitative modifiers only, NOT opponent-adjusted), drive stats (BUF 35.3% TD rate, DET 29.0%; ~20% three-and-out), early-down run splits (all three backs >86% early-down — game-script sensitive), explosive rates.
- INT props from FTN interception-worthy rates (Allen 3.66% worthy vs Goff 1.44%); sack props deliberately NULL (pressure→sack conversion luck, R²<0.005 — literature applied as veto).
- Roster facts verified in pbp: David Montgomery plays for HOU (not DET); DJ Moore plays for BUF (trade from CHI); DET's RB2 is Sion Vaki; DET down LG Mahogany + RT Miller (out), safeties Branch + Joseph (PUP), CB D.J. Reed questionable.
- Prior lab kills documented: H1 cold/wind×passing (c = +0.082 sign flip, OOS ΔLL ≈ −0.00003 vs 0.002 nats/attempt threshold; 1,000 refits + 2,000-draw clustered bootstrap; CI [−0.012, +0.177]); H2 revenge games (FE −0.366 targets/game, CI [−0.598, −0.119], sign opposite hypothesis); H3 hierarchical pooled c₃ = +0.046, SE 0.148, CI [−0.197, +0.290] — "compounding is not detectable at NFL game frequencies with public pre-kickoff information" (game-level branch formally closed); L3 starter-unavailability shelved (data-blocked).
## Data sources named
nflverse play-by-play (2025: 29,239 filtered plays; 2026 Wk1: 1,673; CC-BY 4.0); FTN charting via nflverse (CC-BY-SA 4.0); market lines from public book pages ~14:00 CT 2026-09-17 (FanDuel via SportsGrid over-side juice only, DraftKings, BetMGM, bet365, Sports Interaction, HelloRookie); no Pinnacle/Circa available publicly.
## Findings (numbers and facts, not vibes)
- Game lines: total 54.5 (FD/BetMGM agree; opened 52.5 → 53.5 → 54.5); spread Bills −4.5 to −5 (opened −3); ML Bills −225 to −235.
- 9 props where model agreed with market (coin flips), e.g. Gibbs rushing 89.5 vs 95 [50,140] gap +5.5; Allen pass TDs 1.5 vs 1.5 gap 0.
- 12 directional leans, all inside bands; two largest raw gaps: Allen passing yards 250.5 (DK) vs 201 [135,265] gap −49.5 (UNDER lean; Allen steamed 219.5–223.5 → 250.5 on Wk1's 334 yds/4 TDs); LaPorta receiving 46.5 (FD) vs 79 [38,108] gap +32.5 (OVER lean; 17.2% when-active target share, n=9 active games).
- Structural pattern: model systematically projects MORE Detroit receiving production than FanDuel (LaPorta +32.5, J. Williams +19.5, Gibbs +7.5 receiving, ASB +0.5 catches) — driven by 63% dropback-rate trailing script × Goff's 2025 target concentration (ASB 30%, J. Williams 17%, Gibbs 16.5%, LaPorta 17% when active); model's numbers NOT opponent-adjusted and don't price the two missing DET OL starters; market line may price both.
- 7 NULLs with stated reasons: Montgomery (VOID — on HOU), Vaki (role too thin: 2 Wk1 carries, zero 2025 touches), longest reception (noise), sacks (conversion luck), Milano/Bernard tackles (rotational noise; Bernard's 11-tackle Wk1 n=1).
- Allen rushing composition: 71% scramble; 48% RZ rushing-TD rate flagged as his real TD mechanism.
- Verdict: NOTHING ACTIONABLE. Recommended next step: backtest projection method vs 2025 Weeks 1–18 closing prop lines; until then gaps are hypotheses.
- Methodology honesty standard: "A projection that disagrees with the market is a hypothesis, not an edge, until validated."
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (QB-BEHAVIOR) Allen: 71%-scramble rushing composition; 48% red-zone rushing-TD rate as his real TD mechanism; INT-worthy rates Allen 3.66% vs Goff 1.44% (FTN charting).
- (OL) Detroit missing LG Mahogany + RT Miller (ruled out) — unmodeled downside for Goff dropback efficiency and Gibbs rushing, likely priced into market lines.
- (SCHEME) Script-adjusted dropback rates by WP bucket (favorite 53% / trailing underdog 63%) are the volume engine; game-script sensitivity flagged (three backs >86% early-down).
- (SCHEME) Goff's 2025 target concentration: ASB 30%, J. Williams 17%, Gibbs 16.5%, LaPorta 17% when active — drives the DET passing-volume projections.
- (TRUST-SIGNAL) Honest-null lab culture: four prior hypotheses killed with pre-registered kill lines (cold/wind, revenge games, compound effects) — results published as nulls, not filed away.
- (OTHER) Sack props vetoed by literature (pressure→sack conversion R²<0.005); longest-reception/longest extreme props vetoed as noise; tackle props vetoed on rotational noise — three categories the engine should not model as individual props.
## Engine-actionable? (yes/no + one-line what)
Yes — ship the projection-backtest next step (method vs 2025 Weeks 1–18 closing prop lines) to graduate leans into edges, and add opponent-adjustment + starting-OL injury pricing to the props model since the market appears to price both.
