# docs/ops/archive/root-museum/COMPETITIVE_INTELLIGENCE.md

## What it is (1-2 sentences)
A June 2026 live-web-research competitive intelligence brief for GSN (Galaxy Sports Network / Galaxy Sports Edge) answering not just what competitors do but what the best are projected to build next, and how GSN beats them — synthesized against the repo's verified architecture. Its thesis: the "bet" venue layer is being commoditized under regulatory fire, and GSN's wedge is a calibrated, tamper-evident, venue-agnostic trust layer (proof, not promises).

## Key metrics/methods (formulas where given, else "not specified")
- Methods named (no formulas given; "not specified" for formulas): **Brier score** from settled, bootstrap-fenced picks (`lib/calibration/*`, `app/api/calibration`); **discrimination metric** (does win rate rise with confidence?); **CLV (closing-line value)** per pick/sport — recommended P1 build, opening lines already stored, closing-line capture still needed; observed-vs-expected win rate on a public calibration page.
- Competitor numbers reported as external marketing/press claims, not GSN data: Kalshi volume rose **~1,100% to ~$23.8B**, sports ≈**90%** of it, ~**$1.3B annualized sports revenue**; DraftKings disclosed **>$1B annualized prediction-market volume** and is investing **$200–300M**; the two largest sportsbooks lost ~**half their market value** as prediction markets surged; OddsJam **100k+ users, 150+ books**; Unabated **$99–199/mo**; Rithmm **$29.99**; ParlaySavant **$19**; AI pick sites advertise "**60–72% accuracy**" and "**8–16% monthly ROI**" (reported as their unverified marketing claims); DraftKings ≈**517 live options/game** vs **124 in 2022**; AI personalization lifts engagement **15–20%**; global sports betting projected **>$150B revenue by 2027**; Pikkit: **30+ books**, auto-synced, manual entry disallowed.
- Labels used throughout: `verified-ext` (multiple external sources), `gsn-internal` (verified in this repo), `recommended`, `projected` (forward-looking, lower certainty).

## Data sources named
- Press/trade sources (June 2026): ESPN, NBC Sports, Yahoo Finance, DeucesCracked, ainvest, defirate, tech-insider, Covers, CasinoBeats, GamblingInsider, Deloitte 2026 Sports Industry Outlook, IMARC, DataBridge, plus named competitors' sites (OddsJam.com, Unabated.com, ParlaySavant, Rithmm, Pikkit.com, betsmart.co, bettored.org, AgentBets.ai, BetHarmony, Betby AI Labs).
- GSN-internal (verified in repo): `lib/calibration/*`, `app/api/calibration`, `isBootstrap` fencing, immutable `PickSignalSnapshot`, `SourceSnapshot` raw-payload forensics, `LossAutopsy`, `ModelJournalEntry`, cockpit/Jarvis/six named operator agents, factorBreakdown, tiered model routing (`REPO_INTELLIGENCE_REPORT.md` §6).

## Findings (numbers and facts, not vibes)
- CFTC (federal) oversight of prediction markets means **no state gaming tax and no per-state licensing** — a structural cost advantage over sportsbooks; the NFL is already pressing them on manipulable markets. [OTHER]
- GSN's stated counter-assets (all `gsn-internal`, verified in this repo): public calibration page computing observed-vs-expected win rate + Brier score from settled bootstrap-fenced picks; a discrimination metric; `LossAutopsy` + `ModelJournalEntry` as first-class public surfaces; tamper-evident track record via `isBootstrap` fencing, immutable `PickSignalSnapshot`, `SourceSnapshot` raw-payload forensics; responsible-gaming-first posture with compliance-gated promotions, banned-phrase scans, RG text required. [TRUST-SIGNAL]
- The doc's five prioritized moves: (1) lead with the auditable calibration + ROI + CLV scoreboard as homepage hero ("Graded in public. Calibrated, not confident."); (2) be the venue-agnostic fair-value engine for both sportsbooks and prediction markets; (3) ship an honest "ask the model why" NL agent grounded only in `factorBreakdown` + source snapshots, refusing to fabricate; (4) finish the human-gated modeled-probability vs UX-score split so the public Brier is meaningful, plus a quarterly "model accountability" report; (5) make responsible gaming the brand, not the footer. [TRUST-SIGNAL]
- Explicit "what NOT to do": don't become a book or market; don't chase microbetting; don't advertise an accuracy % you can't defend with a calibration curve. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Public calibration page + Brier score + discrimination metric: TRUST-SIGNAL — the quantitative honesty surface; engine-relevant as the verification layer every prediction must feed (observed-vs-expected win rate per confidence bucket).
- CLV (closing-line value) as the "sharp's gold standard": TRUST-SIGNAL — the most credible edge metric for bettors; concrete engine build (capture closing lines at lock; opening lines + line-movement fields already stored).
- Tamper-evident track record (`isBootstrap` fencing, immutable `PickSignalSnapshot`, `SourceSnapshot` raw-payload forensics): TRUST-SIGNAL — architectural pattern for making the model's own record unfakeable.
- Loss autopsies + model journal as public surfaces: TRUST-SIGNAL — brand-defining transparency ritual; maps to Garrett's X accountability practice ("every pick public, every result posted").
- Honest agent grounded only in `factorBreakdown` + source snapshots, refusing to fabricate: OTHER (product) — but TRUST-SIGNAL-adjacent: evidence-grounded generation doctrine applicable to engine explanation layers.
- Venue-agnostic vig-free fair probability: OTHER (positioning/product; also implies engine emits fair probabilities, not book-anchored picks).
- Prediction-market disruption numbers (Kalshi $23.8B etc.): OTHER (market context; INFERENCE: prediction-market contract prices are a potential live fair-value consensus data source, but the file does not recommend ingesting them as data).
- Microbetting / addiction-lawsuit pressure and RG tailwind: OTHER (compliance/brand).

## Engine-actionable? (yes/no + one-line what)
Yes — build the CLV metric (capture closing lines at lock, compute per pick/sport), ship the public calibration + Brier + discrimination surface fed by real settled picks, and finish the human-gated modeled-probability/confidence split so calibration numbers are meaningful.
