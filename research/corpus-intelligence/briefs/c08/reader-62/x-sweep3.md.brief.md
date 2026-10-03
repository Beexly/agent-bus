# docs/research/2026-09-19-dk-week2/deep/x-sweep3.md
## What it is (1-2 sentences)
Saturday-morning (2026-09-19) injury/practice/insider/weather sweep #3 for the Week 2 DK slate — final Friday injury reports for SEA@ARI, GB@NYJ, LV@LAC, PHI@TEN, plus Schefter/Rapoport/Pelissero insider items via aggregators and a slate-wide weather refresh; notably flags aggregator factual errors rather than trusting them.
## Key metrics/methods (formulas where given, else "not specified")
- Method: browser.search (news + weather verticals, since-filters), browser.open only on tool-returned URLs; dedupe against Sweeps 1–2.
- Weather impact scale: SBR thermometer ratings (🌡️ to 🌡️🌡️🌡️) per game.
## Data sources named
seahawkswire, cardswire, packersnews, chargerswire, titanswire (team-wire finals, ~11–19 hrs old); Schefter/Rapoport via fanrecap, nbcsports, yardbarker, nfltraderumors/sportskeeda; RotoWire weather; SBR impact ratings; B/R weather; StormTeam 5/Patriots Wire; chatsports YouTube.
## Findings (numbers and facts, not vibes)
- SEA@ARI: Sam Darnold (glute) and S Ty Okada (hamstring) OUT — Darnold expected back Week 4; Drew Lock starts; RG Anthony Bradford (knee+hip, DNP Friday) QUESTIONABLE; Kupp/Horton/Jobe all full; Nick Emmanwori (ankle/hip) Q but HC Mike LaFleur "fully expects him to play"; ARI CB Garrett Williams OUT (Achilles, 2nd straight game).
- GB@NYJ: DT Javon Hargrave DOUBTFUL (concussion protocol), DT Warren Brinson OUT (2nd straight); Lukas Van Ness, St-Juste, Banks, Bako-Bewele QUESTIONABLE.
- LV@LAC: Ladd McConkey (rib) QUESTIONABLE, practiced Friday → "on track to suit up"; Elijah Molden and Trey Pipkins III OUT; LAC -6.5 home favorites.
- PHI@TEN: Jonathan Greenard (pectoral) OUT (new); Cedric Gray (concussion) Q — was Titans' leading tackler and NFL 5th in tackles in 2025 with 160; Titans HC in 2026 is Robert Saleh (new coaching fact).
- Insider: Brock Bowers meniscus trim, expected to miss "a game or two"; Nico Collins Week 2 "in jeopardy" (hamstring); Brock Purdy toe expected 2–5 weeks out, Mac Jones starts; DJ Moore AC joint sprain, day-to-day; Joey Porter Jr. trade request, OUT regardless.
- Yardbarker Purdy piece contains two factual errors (SF's Week 2 opponent; SF's Week 1 opponent) — injury quotes usable, nothing else citable; a Rodgers-wrist piece is future-dated/mislabeled, NOT Week 2 news.
- Weather: most impactful passing-game spots — MIN@CHI (70°F, 30–52% rain, gusts >20 mph) and second-half PIT@NE; SBR highest: CLE@TB (sloppy) and PHI@TEN (99°F heat); NYG@LAR Monday fixed roof, IND@KC minor (72°F, 32% precip, Sharp 2/5).
- Coaching side facts: Bills OC 2026 is Pete Carmichael Jr.; Steelers DC 2026 is Patrick Graham.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: Drew Lock starts for SEA ("best second-string QB in the league" per Leonard Williams); Mac Jones starts for SF; Malik Willis starts for MIA (full practice off report, per verify file).
- COACHING: Robert Saleh = Titans HC (new 2026 fact); Pete Carmichael Jr. = Bills OC; Patrick Graham = Steelers DC.
- OL: LAC LG Trey Pipkins OUT (Kayode Awosika starts); SEA RG Bradford questionable (Christian Haynes backup).
- TRUST-SIGNAL: aggregator-error flagging discipline (yardbarker's two factual errors quarantined while keeping the insider quotes) — a concrete method for ingesting aggregators without poisoning the record.
- OTHER: injury-designation ledger with return timelines; weather-impact scale per game.
## Engine-actionable? (yes/no + one-line what)
yes — quarantine-method for aggregator sources (keep insider quotes, discard uncorroborated detail) plus the injury ledger and weather-impact scale pattern reusable for live-feed intake design.
