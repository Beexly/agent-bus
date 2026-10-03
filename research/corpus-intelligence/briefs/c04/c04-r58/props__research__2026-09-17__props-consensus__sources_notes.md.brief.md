# docs/props/research/2026-09-17/props-consensus/sources_notes.md
## What it is (1-2 sentences)
Research-only notes from a 2026-09-17 public-odds-prop consensus sweep for the Bills vs. Lions game (Thu 2026-09-17, 7:15 PM CT kickoff). Documents verified line snapshots, intraday line movement, source ranking, public-data gaps, roster corrections, and game context flags; explicitly not picks.

## Key metrics/methods (formulas where given, else "not specified")
- Consensus = median/range among comparable standard O/U lines only; alternate thresholds (e.g., Gibbs 100+ rushing, Kincaid 75+ receiving) and historical/opening lines excluded from medians.
- Method: public odds-aggregator pages only — no logins, paywalls, scraping tricks, or bot circumvention. Every CSV row carries an exact source URL and real fetch timestamp (2026-09-17 ~14:00 CDT; source pages lacking timestamps recorded as "not displayed").

## Data sources named
- Book-identified usable: SportsGrid (30 FanDuel prop rows across 10 players — live, single-book, Over-side prices only), SportsbookWire (5 BetMGM markets, page timestamped 8:02 AM CT), SI betting (3 DraftKings core props), FTW (full FanDuel game lines; anytime-TD prices with book unnamed), Sports Interaction (2 anytime-TD lines), Action Network (1 bet365 anytime-TD line), HelloRookie, VSiN/Review-Journal, USA Today.
- Excluded from book consensus: PrizePicks (DFS, not a sportsbook).
- No usable data: FantasyPros, Covers, OddsShark, VegasInsider, Pickswise, SportsLine, RotoWire (player props stuck "Loading Possible Bets").

## Findings (numbers and facts, not vibes)
- **Game total:** FanDuel 54.5 (O -114 / U -106), BetMGM 54.5 (O -112 / U -105) — two-book consensus 54.5. Trail: opener 52.5 (DraftKings, ~3 days earlier) → 53.5 (VSiN, Sep 16) → 54.5. Full observed range 52.5–54.5.
- **Spread:** FanDuel Bills -4.5 (-115); BetMGM Bills -5 (-110). Opened Bills -3 (USA Today, DK preview).
- **Moneyline:** Bills -235/+194 FanDuel; -225/+185 BetMGM; VSiN reports -200 or higher (was -160).
- **Goff passing yards:** FanDuel 257.5 (O -113) vs BetMGM 267.5 (U -115) — 10-yard book disagreement, midpoint 262.5; treat as range, not consensus.
- **Allen passing yards:** 250.5 (O -111) DraftKings only; HelloRookie says Allen opened ~219.5–223.5 before steaming toward 250. Goff 265.5 (O -111) per HelloRookie ("some books" 270.5 O -114).
- **Gibbs rushing yards:** 89.5 (O -112) DraftKings only; BetMGM 100+ (+115) is an alternate threshold, not comparable. USA Today preview: Gibbs rushing+receiving 119.5 (side Over).
- **Allen passing TDs:** FanDuel Under 1.5 (+136) only; HelloRookie quotes 1.5 Over -166 (book unnamed).
- **Intraday movement (same day):** Jameson Williams receptions 3.5 Over -192 → -148; longest reception 23.5 Over -122 → 24.5 Over -108; receiving yards 59.5 Over -113 → 57.5 Over -113. DJ Moore receiving yards 62.5 → 63.5 (Under -113). Khalil Shakir receptions Over +102 → +112; longest reception Over -122 → -125. Allen passing TDs Under 1.5 +134 → +136. James Cook longest reception Over -112 → -114.
- **Anytime TDs:** Gibbs -330 (FTW, book unnamed) / -275 (SI); Amon-Ra St. Brown +105 (FTW) / +115 (SI); Dalton Kincaid +170 (FTW); DJ Moore +150 (FTW); Sam LaPorta +230 bet365 via Action Network (article body says +220 — discrepancy recorded).
- **VSiN/Review-Journal:** Dawson Knox Over 12.5 receiving yards (-114); OptaAI projection cited: 22.48 yards.
- **PrizePicks:** DJ Moore receiving yards 62.5; Jameson Williams receptions 4.
- **Roster corrections verified:** David Montgomery plays for Houston, not Detroit (BUF held HOU's Montgomery to 60 rush yards in Week 1); DJ Moore plays for Buffalo (acquired from Chicago for a 2026 second-round pick); Detroit's RBs behind Gibbs are Sione Vaki and Jacob Saylors; Detroit kicker Jake Bates, Buffalo kicker Tyler Bass.
- **Game context:** Week 1 Bills 36–31 at Houston; Lions 31–30 OT vs. New Orleans. First regular-season game in the new $2.1B Highmark Stadium. Detroit secondary injuries: safeties Brian Branch and Kerby Joseph on PUP; CB D.J. Reed questionable (foot). One source flags possible rain/wind in Buffalo Thursday — could matter for kicking props. NBC noted DJ Moore "leaves late in game" in Week 1 (5/100/1) — verify status before kickoff. RotoWire's Bates Over 8.5 kicking points was a Week 1 number — do NOT use as Week 2.
- **Gaps:** no Pinnacle or Circa player-prop numbers anywhere; no defensive props (Hutchinson, McNeill, Rousseau checked); no individual Tyler Bass / Jake Bates kicking props (only BetMGM "Both teams to make 2+ field goals" +275); no public first-TD board; Amon-Ra St. Brown FanDuel receiving props gap (SportsGrid PICKS section failed to render twice — DK receptions 7.5 Over -111 from SI is the book-identified ASB line); Jahmyr Gibbs FanDuel rushing yards not displayed; SportsGrid shows Over-side prices only.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Bills total steam 52.5 → 54.5 and spread -3 → -4.5/-5 alongside a depleted Lions secondary (Branch + Joseph PUP, Reed questionable) → SCHEME (market pricing a Buffalo shootout matchup advantage).
- Allen passing-yards steam 219.5–223.5 → 250.5 while Allen passing TDs holds at Under 1.5 (+136, barely moving +134 → +136) → QB-BEHAVIOR (market prices Allen for yardage volume, not TD efficiency).
- 10-yard book disagreement on Goff passing yards (257.5 vs 267.5) → QB-BEHAVIOR (genuine book uncertainty on Goff volume — exploitable range edge). INFERENCE: disagreement of this size on one QB line is a candidate prop-edge feature.
- Jameson Williams receptions 3.5 Over -192 → -148 → TRUST-SIGNAL (heavy Over handle driving juice down; market interest in the Williams target line). INFERENCE: steam direction flags target-trust, not a pick by itself.
- DJ Moore "leaves late in game" Week 1 note with status to verify → TRUST-SIGNAL (coach/behavioral availability flag affecting his BUF receiving lines).
- SportsGrid Over-only pricing, ASB FD gap, no Pinnacle/Circa → OTHER (data-coverage gaps limiting consensus quality).
- Roster corrections (Montgomery to Houston, Moore to Buffalo) → OTHER (data hygiene).

## Engine-actionable? (yes/no + one-line what)
Yes — 10-yard cross-book disagreement on a QB prop (Goff 257.5 vs 267.5) and intraday steam magnitude are direct market-signal features for prop-edge detection; also flags Pinnacle/Circa absence as a known data-quality gap.
