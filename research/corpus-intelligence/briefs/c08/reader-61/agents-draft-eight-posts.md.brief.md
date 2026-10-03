# Sports/docs/props/research/2026-09-17/props-consensus/agents-draft-eight-posts.md
## What it is (1-2 sentences)
Paste-ready research draft summarizing Garrett's 2026-09-17 8-post sweep of X sports-analytics accounts: account-by-account metric inventory with definitions, methods, data sources, and per-metric GSE reproduction paths. Only 1 of 8 post bodies was actually seen (post 2, via Garrett's breakdown); X blocked direct fetch.
## Key metrics/methods (formulas where given, else "not specified")
- FPOE / xFP: xFP = fantasy points an average player would score given their opportunities; FPOE = actual − expected (Menton's chart flips sign: XFP − FPG, so negative FPOE = OUTscoring expectation). Method lineage Mike Clay/ESPN + Barrett/RSJ: targets → expected catch rate by depth-of-throw × location × position; expected receiving yards by depth × location; xTD by depth × location; rushes → expected yards by position × direction, xRuTD by yardline; × PPR scoring. Numbers cited: James Cook 62.5 trade value, −3.1 FPOE (sell-high); Gibbs 80.0 #1 RB; Amon-Ra 70.0; Josh Allen top QB; Goff 16.4 FPG / 0.23 FP/S. Regression fact: FPOE mean-reverts; high-xFP + negative-FPOE (Clay sign) = buy-low.
- Havoc/Threat Ratings (Field Vision, Cody Alexander): 0–100 percentile within position group, scheme-adjusted (e.g., zone vs man CB splits), learned play-by-play from years of NFL PBP; exact formula UNVERIFIED.
- Pocket-split EPA quadrants (Doug_Analytics): QB EPA/play in-pocket vs out-of-pocket — requires pocket charting not in nflverse.
- Draft-pick probability Monte Carlo (Doug_Analytics): Bengals 59.1% pick 11 / 25.5% pick 12 cited; method = simulate remaining games on ELO × tiebreak rules.
- Penalty EPA / special-teams EPA plots (sfdata9ers): EPA/play kickoff vs punt coverage; expected points from penalties on no-yardage plays; Jalin Hyatt targets: 7 INTs = 9.6% of targets, worst since 2022.
## Data sources named
nflverse PBP columns: air_yards, pass_location, yardline_100, complete_pass, receiving_yards, rushing_yards, rush_location, TD flags, position, wp, play_type. FTN charting columns (pressure/pocket, coverage) for pocket/scheme splits. NGS mentioned for pocket data. fieldvisionsports.com (method summary only).
## Findings (numbers and facts, not vibes)
- Reproduction verdicts: FPOE/xFP = full; draft-pick Monte Carlo = full; ST/penalty EPA = full; Open Havoc = partial (can do involved-play EPA + scheme-split leaderboards, cannot attribute off-ball value); pocket-split EPA = conditional on charting.
- GSE edge differentiators named per metric: luck-layer decomposition (xTD-luck vs efficiency), bootstrap uncertainty bands, opponent adjustment, same-day refresh (nflverse Thursday AM → chart by afternoon), quadrant display of xFP (role) vs FPOE (regression signal).
- Ranked build targets: 1) FPOE/xFP stack (highest ROI), 2) Doug-style single-stat charts, 3) hidden-yardage chart (ST EPA + penalty EPA + field position), 4) Open Havoc, 5) survivor/best-ball EV, 6) fan accounts = no build.
- Do NOT build: Field Vision's proprietary model (build the open alternative); no republished charts — learn, don't lift.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- xFP/FPOE luck decomposition + bootstrap uncertainty bands + opponent adjustment — OTHER (fantasy/prop signal quality: regression-to-mean buy-low/sell-high features)
- Pocket-split EPA quadrants (needs pocket charting) — QB-BEHAVIOR
- Scheme-adjusted Havoc/Threat ratings with man vs zone CB splits — SCHEME
- Hidden-yardage rollup (ST EPA + penalty EPA + starting field position) — SCHEME
- Draft-pick Monte Carlo engine (own ELO ratings as sim engine) — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — FPOE/xFP stack rated highest-ROI full-reproduction build: same-day nflverse-based trade chart with luck-layer decomposition, bootstrap bands, and opponent adjustment feeding buy-low/sell-high posts and prop projections.
