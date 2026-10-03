# docs/data-sources/research/2026-09-18/ftn-dossier.md
## What it is (1-2 sentences)
A 16.9 KB public-web research dossier (dated 2026-09-18, no paywall bypass) on FTN Network / FTN Data as a prospective B2B data supplier: identity, B2B product, DVOA exclusivity, funding, customers, charting operation, an accuracy-claim audit, competitors, and an INFERRED/verified FTN↔StatRankings people-overlap section; every claim labeled CONFIRMED or INFERRED.
## Key metrics/methods (formulas where given, else "not specified")
- DVOA definition (verbatim from FTN): each play vs league-average baseline by situation (e.g., 5 yards on 3rd-and-4 worth more than on 3rd-and-12), adjusted for opponent quality. No formula beyond this description ("not specified" for math).
- Marketing counters: 750+ NFL data points, 20+ years historical data, 50% less expensive than competition (unnamed).
## Data sources named
nflverse (load_ftn_charting(), CC-BY-SA), StatRankings (One Week Season preview PDF), SportsData-related competitors named as category context: Sportradar, PFF, Sports Info Solutions, Stats Perform, Genius Sports.
## Findings (numbers and facts, not vibes)
- FTN Network founded 2020 by Kevin Adams (San Diego; official address now FTN Network, 1207 Delaware Ave #1967, Wilmington, DE 19806); SDBJ box: revenue $2.1M, 20 full-time employees (circa 2022, INFERRED date).
- Co-founder Jeff Ratcliffe (Chief Analytics Officer); CMO Stefano Vacarino; CEO Perry Gershon (majority stake) after Dec 2023 oversubscribed seed round exceeding $3M goal (led by Gershon + Techstars fund; FTN a 2022 Techstars alumnus); Adams became Chief Strategy Officer/advisor.
- Financials: Q3 2023 revenue >$1.05M (+52% YoY); FTN Data revenue +211% YoY (comparable 2024 period); consumer subscriptions projected >$1M 2023 (+~60% vs 2022).
- DVOA exclusive home since Aug 2023 (exclusivity vs licensing timeline unclear — another FTN page says DVOA added 2022; treat both as FTN claims); creator Aaron Schatz (Football Outsiders founder 2003) is FTN Chief Analytics Officer; historical DVOA back to 1979 as Enterprise add-on.
- Charting: paid human charters (ex-coaches/ex-players), process built over 18 years by Armchair Analysis (acquired 2020); FTN charting data flows into nflverse via load_ftn_charting() under CC-BY-SA; NBA charting covers 19 categories.
- Pricing tiers: CSV Access $599 (NFL base stats last 3 seasons + play-by-play); mid-tier API (all basic + charting NFL data, player participation all skill positions, charting since 2019); enterprise (white label, custom feeds, potential exclusivity); DVOA add-on in Enterprise.
- Accuracy-claim audit (INFERRED verdict): FTN's "two first-place finishes in last five years" = Ratcliffe 2021 preseason #1 (legit, FantasyPros top expert 2021) + Orginski 2024 in-season #1 won while listed as JWB Fantasy Football (FTN claiming retroactively after hiring him) — do NOT repeat unqualified. Orginski also 2025 in-season 9th (FTN); Ratcliffe 2025 in-season 5th, 3-year rolling 4th (2024 preseason 3rd of 225).
- B2B customers CONFIRMED: Caesars Sportsbook (NBA dataset), Action Network, Carnegie Mellon Sports Analytics Center (NFL+NBI feeds/APIs, announced 2026-04-08), StatRankings (FTN Data one of its NFL sources); John Harbaugh testimonial on data page (Harbaugh: FTN accounts for "factors that others don't," "best stats providers at accounting for" quality/limitations).
- FTN↔StatRankings people overlap (INFERRED): Sam Choudhury in both orgs' contributor/projection workflows; Kevin Adams in StatRankings PDF; Marshall Gershon (FTN contributor) vs Perry Gershon (surname link unconfirmed).
- No substantive public criticism surfaced (Reddit/forums/reviews searched; negative-query searches returned irrelevant results; Trustpilot/BBB open item).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- FTN paid-human charting (ex-coaches/ex-players), charting since 2019, play-by-play + player participation since 2020/2021 → OTHER (data-source quality for scheme/behavior features)
- Route DVOA / Route DYAR enabled by FTN route charting ("correlates better year over year" per Schatz) → QB-BEHAVIOR, SCHEME
- DVOA exclusive to FTN; adjusted-line-yards lineage (Aaron Schatz) → OL, SCHEME
- Accuracy-claim audit (retroactive Orginski claim) → TRUST-SIGNAL
- Caesars/Action Network/Harbaugh CMU partnerships → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — FTN charting feed is already ingestible via nflverse (load_ftn_charting(), CC-BY-SA); DVOA (exclusive to FTN, back to 1979) is a candidate benchmark/adjustment-layer signal with an enterprise add-on priced for negotiation, and the mid-tier API is the individual/small-company path.
