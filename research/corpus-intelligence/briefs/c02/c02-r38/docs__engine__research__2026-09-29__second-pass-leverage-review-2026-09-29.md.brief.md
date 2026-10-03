# docs/engine/research/2026-09-29/second-pass-leverage-review-2026-09-29.md

## What it is (1-2 sentences)
A 2026-09-29 synthesis of two first-pass reports (patent mining: 5 ARE + 5 GSE ideas, 30 kills; awesome-llm-apps leverage map: 45 items) plus 5 empirical gap-fills, surfacing cross-cutting items neither report assembled — most importantly the automated film pipeline and the "sell service, not software" service-layer thesis.

## Key metrics/methods (formulas where given, else "not specified")
- Method: synthesis between two isolated reports; gap-fills returned as STRONG/MEDIUM evidence grades (Q1–Q5). No formulas.
- Gap-fill Q2 result: soccer charting is commoditized open-source running real-time on a consumer RTX 4060; the one serious open NFL project (nflgsplat, active Sept 2026) independently converged on the expired patents' architecture — classical geometric front end (field-paint calibration) → deep refinement (SMPL-X pose in field coordinates) on a local RTX 4080.

## Data sources named
- Patent-mining report (5 ARE + 5 GSE ideas, 30 kills); raw synthesis `docs/engine/research/2026-09-29/second-pass-raw-synthesis-2026-09-29.md`; gap-fills `docs/engine/research/2026-09-29/second-pass-gap-fills-2026-09-29.md`.
- awesome-llm-apps leverage map (45 items); nflgsplat (open NFL project, active Sept 2026).
- Market data: Yext ($199–$999/yr/location), Birdeye ($299–$449/mo), Podium ($249–$599/mo); The Funeral Program Site pricing ($50–$150 bundles); Etsy memorial printables ($7–$20); QR hardware (5,000+ Etsy listings $4–$48, ZappyCards $20–$40, Tagglu NFC+QR platform launched Sept 2026); Betstamp immutable bet records; VSiN's tout guide.
- App items #2 (TOON, ~64% token cut on tabular data), #13 (scout/scheduler/delivery split), #17 (deep-research agent), #18 (critique→revise), #21 (human feedback), #25 (video moment finder: frame embeddings + cosine search), #28+#16 (analyst desk), #34 (ripple), #36 (TL;DR infographics).

## Findings (numbers and facts, not vibes)
- **S1 — automated film pipeline (top GSE item, Q2: STRONG):** Apps #25 + Patents G1 (field-anchored telestration) + G2 (play segmentation prefilter) + G3 (replay discriminator) + G4 (vanishing-point calibration) assemble into: ingest broadcast → G2 segments plays → G3 kills replays → G4 calibrates camera → G1 anchors telestration → #25 semantic moment search. Prototype-able on consumer hardware today (RTX 4060/4080); expired patents' value is as a *design spec*, not IP. Feeds both the content op (2–4s telestrated clips per the standing video rule) and the engine. [SCHEME, OTHER]
- **S2 — automated charting = proprietary data generation:** the pipeline automates FantasyPoints-style hand-grading — formations, routes, personnel, play boundaries from broadcast → proprietary play-level labels → variance-model inputs, signals-table rows, rankings features. Full formation/route classification remains research-grade without labeled data; the labeled dataset built as a byproduct of the content pipeline is the long-term moat. Every telestrated clip can carry labels. [SCHEME, OTHER]
- **A1 — hash-chained pick provenance (Q5: MEDIUM):** Betstamp already ships immutable bet records, so hash-chaining is not a market-first; the trust problem is documented (VSiN's tout guide: double-siding, doctored records, bribed monitoring sites). Build the append-only trail as brand infrastructure (hash-chained daily digests are cheap; the brand promise "every pick public, every result posted" demands it); market as "independently verifiable record," never "blockchain." [TRUST-SIGNAL]
- **A3 — analyst desk vision:** Garrett interrogating his engine in natural language ("why is our QB ceiling biased high in domes?") → agent queries Neon, runs dispersion analysis, builds calibration dashboards live. [QB-BEHAVIOR, OTHER]
- **A7 — dogfood the reports:** TOON (#2, ~64% token cut on tabular data) applies to the 30-item kill list and 45-item leverage map. [OTHER]
- Service-layer thesis (Q1/Q3/Q4): incumbents sell software/objects; the unserved buyer wants someone to just do it — "text us the new hours; site, Google profile, socials, print all update" care plan at $49–99/mo undercuts Yext/Birdeye/Podium's lowest tiers. Validation-before-code: sell the care plan on the next 3 Kit sites before building any dashboard. [OTHER]
- Build/validate order: (1) sell care plan on 3 Kit sites; (2) validate QR-content monthly willingness with one restaurant; (3) G2 classical play prefilter prototype 1–2 weeks; (4) G1 field-anchored telestration on real NFL frames; (5) append-only pick trail with hash-chained daily digests; (7) Vow & Post overlay template-pack MVP ($29–79); (8) patent scout + repo watcher scheduled, kill-list loop, ripple doc-coherence checker to the coding agent's queue. [OTHER]
- Still unverified/queued: memorial-printable TAM and Etsy sell-through (Q1 — do not claim); Tagglu pricing; whether ANY SMB pays monthly for QR-content management; G1/G2 on real broadcast footage; `first-reader` skill license field blank. [OTHER]
- P6 — the 30 kills are an **IP wall map**: active controls (Trackman ~2030, Disney ~2037, SAP ~2037, Nike family) show where to design around, not compete. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME)
- Automated film pipeline (play segmentation, replay discrimination, camera calibration, telestration): SCHEME, OTHER
- Automated charting (formations, routes, personnel → play-level labels, signals-table rows, rankings features): SCHEME, OTHER
- Hash-chained pick provenance ("every pick public, every result posted"): TRUST-SIGNAL
- Analyst desk ("why is our QB ceiling biased high in domes?"): QB-BEHAVIOR, OTHER
- IP wall map / kill-list loop: OTHER

## Engine-actionable? (yes/no + one-line what)
yes — Build the G2→G3→G4→G1→#25 film pipeline with charting labels (formations/routes/personnel) as proprietary play-level signals-table rows and variance-model inputs, and hash-chain daily pick digests as the engine's append-only provenance record.
