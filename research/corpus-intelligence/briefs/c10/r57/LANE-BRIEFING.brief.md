# research/2026-09-19-dk-week2/LANE-BRIEFING.md
## What it is (1-2 sentences)
The mission-briefing document for the DraftKings NFL Week 2 (main slate, 14 Sunday games, locks 2026-09-20) DFS research operation: confirmed slate, spreads/totals, injury baseline, internal corpus inventory, and the four-phase lane structure with hard rules.
## Key metrics/methods (formulas where given, else "not specified")
- Implied totals formula given: team_implied = total/2 - signed_spread/2 (per reverse-engineering report).
- Phase structure: P1 breadth (salaries, projections, injuries, weather, ownership), P2 gap-hunt (cross-check vs internal corpus, hunt leverage), P3 adversarial (fresh news, contrarian scenarios, second sources), P4 consensus (FantasyPros ECR, DK Playbook, RotoWire, 4for4, ETR, FantasyPts aggregation).
- RESEARCH ONLY — no lineup construction, no posting, no messages.
## Data sources named
- Spreads/totals: rg.org consensus (Wed 2026-09-16) + bet365 9/14 (ranges).
- Injury/news baseline: parent's 9/17-9/18 social sweep (labeled claims, not facts — to be verified).
- Internal corpus (all under ~/workspace/vendor/Sports): AGENTS.md lines ~2500-3502 (X-analytics inventory 9/17-9/19: @sfdata9ers, @hawkblogger, @benbbaldwin v3 objective tiers, @SumerSports PRWR, @MagicSportsGuy, @statyxio, @JMac_FF, @jmthrivept recovery chart, @ScottBarrettDFB YPRR, @DevyEusuf, @FantasyPtsData, @GridironInfo_, @DonAtkinsonNFL); CSV dirs docs/research/2026-09-19/full-tables + chart-reads, docs/research/2026-09-17/full-tables (13 CSVs), docs/research/2026-09-18/full-tables (49 CSVs) + chart-reads (6 CSVs), docs/research/2026-09-18-props-reverse-engineering/report.md.
- Public projection sources for lanes: FantasyPros ECR, 4for4, RotoBaller, ETR, FantasyPts (public/free surfaces only).
## Findings (numbers and facts, not vibes)
- Confirmed main slate: 14 Sunday games; DET@BUF (Thu 9/17) and NYG@LAR (Mon 9/21) excluded.
- Highest totals: WAS@DAL 50.5 (highest), MIN@CHI 48.5, CIN@HOU 46.5, IND@KC 46.5-47, NO@BAL 46.5-47.5.
- Line move captured: CAR @ ATL flipped from ATL -1.5 (bet365 9/14) to CAR -1.5/-2.5.
- Internal corpus facts (9/17-9/19): LAC 84.3% motion (slate leader); TB 25.5% play action; TEN & NO 22%+ no-huddle; WAS 14.7% RPO; KC 56.3% pressure generated vs 39.4% allowed; DEN 39.4%|56.3% (worst allowed); LV 40.5%|6.5%, MIA 6.5%|40.5%; benbbaldwin v3 Kalshi-blend tiers: LAR 72.6, BUF 67.7 top; SF 65.6, KC 65.5, BAL 65.2; CLE 20.1, MIA 25.6 bottom; BELLCOW backfield XFP share: Achane 95%, Javonte 95%, Gibbs/Cook/Taylor 93%; TE Wk1 EPA/target: Likely +1.379 (cleanest), McBride 35% share, LaPorta +0.380; Wk1 EPA/play: Lawrence +0.79, Dart +0.71; NYJ offense +0.99 EPA/play vs blitz (best); CIN defense -1.49 EPA/play allowed when blitzing (best); QB aggressiveness Wk1: Stroud 21%, Mayfield 11%, Hurts 8%, Allen 7%, Mahomes 4%; first-read rate: Purdy 27.0% (lowest), Love 78.6% (highest).
- Injury baseline (claims, unverified): Nico Collins OUT (hamstring, official NFL graphic 9/18); Burrow Q (expected to play); Darnold OUT; Z. Flowers doubtful; J. Porter Jr. OUT; M. Pittman Jr. questionable; Brinson OUT, Hargrave doubtful (GB); Aaron Donald return rumor = UNVERIFIED noise.
- BEEX PICK (Garrett's call, NOT engine): Texans -2.5 vs Bengals. (Context only.)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [SCHEME] Playcalling tendencies (W1, FTN charting): LAC 84.3% motion, TB 25.5% PA, TEN/NO 22%+ no-huddle, WAS 14.7% RPO, SEA 23.4% PA (from qb-phase1) — scheme-rate inputs for game-script/pace models.
- [QB-BEHAVIOR] Wk1 aggressiveness (Stroud 21% highest; Mahomes 4% lowest) and first-read rate (Love 78.6% highest; Purdy 27.0% lowest) — two compact QB-behavior dimensions usable in pressure/turnover models.
- [OL] Pressure generated|allowed pairs (KC 56.3|39.4, DEN 39.4|56.3, LV 40.5|6.5, MIA 6.5|40.5, HOU 18.2|28.6) — OL-vs-rush mismatch inputs.
- [TRUST-SIGNAL] Injury items labeled claims-not-facts with explicit verify-against-official rule; Aaron Donald rumor flagged adversarially as likely noise — a provenance discipline, not data.
- [OTHER] Implied-totals formula (total/2 - spread/2) given explicitly; line-move capture (CAR@ATL flip) as a documented market-movement input.
## Engine-actionable? (yes/no + one-line what)
Yes — first-read rate + aggressiveness rate as two compact QB-behavior features and the scheme-rate slate table (motion/PA/no-huddle/RPO %) are concrete inputs for QB/team game-script and turnover models.
