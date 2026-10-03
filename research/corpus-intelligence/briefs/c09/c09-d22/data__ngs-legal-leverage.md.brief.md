# data/ngs-legal-leverage.md
## What it is (1-2 sentences)
Legal leverage map (PROPOSED, counsel-required) answering how much NFL data GSE can legitimately use: raw facts are uncopyrightable, and nflverse's CC-BY-4.0 NGS assets were verified 1:1 against nextgenstats.nfl.com by execution on 2026-07-03.
## Key metrics/methods (formulas where given, else "not specified")
- not specified (legal analysis, no formulas). Key verification: JSN 2025 avg_separation 3.018 (nflverse) vs site-rounded 3.0; James Cook RYOE 358.16 identical both sides; NGS receiving (SEP/CUSH/xYAC), rushing (RYOE/efficiency/8+box), passing (time-to-throw/air-yards/xCOMP%/CPOE) all shipped dark via nflverse-ngs.ts.
## Data sources named
nflverse (nflverse-data releases, CC-BY-4.0, attribution; FTN/participation CC-BY-SA skipped), nflfastR open play-by-play, ESPN hidden JSON API (grey, low-risk), Genius Sports/Sportradar (paid licensed), league official docs (injury reports, transactions, schedules), Kalshi/the-odds-api; Pro-Football-Reference explicitly DO-NOT-SCRAPE (ToS enforced with C&Ds).
## Findings (numbers and facts, not vibes)
- Legal authorities: Feist v. Rural (facts not copyrightable), NBA v. Motorola (season stats fail hot-news time-sensitivity), hiQ v. LinkedIn (public-page scraping not CFAA unauthorized access — but contract/brand risk remains, so not used), no US sui-generis database right (EU caveat flagged).
- Killer move: derive GSE's OWN expected-rush-yards/expected-YAC/separation models from open PBP; NGS RYOE/SEP/xYAC become ground-truth calibration targets (bridged: ngsReceivingToSeparationTruth, ngsPassingToCpoeTruth) — "open facts in → our models → our proprietary metric out → validated against the vendor's as truth."
- Vendor model OUTPUTS (RYOE, xYAC, expected values) are the one place to tread carefully; attribute "NFL Next Gen Stats via nflverse," never present as GSE's computation.
- ESPN API failover feed needs counsel sign-off before production.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: NGS passing metrics (time-to-throw, air yards, xCOMP%, CPOE) shipped as ngsPassingToCpoeTruth — CPOE is the QB-model ground truth; receiver SEP is the reconstruction engine's calibration truth.
- SCHEME: rushing metrics (RYOE, efficiency, 8+ box rate) are the scheme-agnostic efficiency layer the engine calibrates against.
- OTHER: legal/compliance document — source licensing posture; governs what the engine may ingest, not game behavior.
## Engine-actionable? (yes + what)
Yes — wire NGS SEP as reconstruction calibration ground truth and CPOE as QB-model ground truth (founder-gated MODEL_VERSION bump); build GSE's own expected-rush-yards / expected-YAC models on open PBP with vendor numbers as calibration targets (the IP play).
