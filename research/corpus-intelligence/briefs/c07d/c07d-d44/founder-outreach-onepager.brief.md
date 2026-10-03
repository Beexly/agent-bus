# launch-prep/founder-outreach-onepager.md
## What it is (1-2 sentences)
Garrett's founder-sales playbook for the first 25 paid Galaxy Sports Edge customers: cold-DM templates, an email pitch, a 5-minute journalist walkthrough, quotable soundbites, objection handling, a 50-DM targeting list, reply templates, and daily ops cadence. It is a GTM document, not a research paper — its engine value is in the stated data pipeline specs, gating thresholds, and signal schema it commits to publicly.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas or equations.

Declared methodology / decision stack (quoted):
- "Anatomy of a Signal" annotated sample card shows: the factor trail, Edge Index, variance reminder.
- Methodology (Galaxy IQ) four-check decision stack: (1) read the board, (2) measure pressure, (3) gate the signal, (4) learn slowly.
- Five readiness gates: CANONICAL_HISTORY, DERIVED_MODEL_HISTORY, PUBLIC_PICKS, PERFORMANCE_STATS, OUTCOME_LEARNING — each one controls a real surface.
- Factor trail dimensions (from the email pitch): consensus, line movement, market depth, freshness ("the whole stack").
- Every signal exposes its full factor trail; every signal gets logged; every outcome counts ("Losses are counted").

## Data sources named
- Live odds ingested from "dozens of sportsbooks every 30 minutes" (no specific bookmakers named).
- galaxysportsedge.com; hq@galaxysportsedge.com.

## Findings (numbers and facts, not vibes)
- Pipeline cadence: odds ingested from dozens of sportsbooks every 30 minutes; every matchup scored for edge; calibrated signal published with full factor trail attached.
- Win-rate gating (the hard public commitment): the public win-rate page stays gated until "enough settled history exists to publish a defensible number." Objection handling states the number explicitly: "A defensible win-rate takes **at least 100 settled signals**. Once I have that, the Calibration Report opens. Until then, the page says 'Collecting.'" This is the higher bar than the developer layer's 30+ settled-picks calibration page prerequisite.
- Pricing: Free plan gets one signal a day; Pro is **$19/mo** for every signal with reasoning attached. Comparable tout service cited as $99/mo. **7-day refund window** — "I'd rather you cancel than complain."
- Founder-sales funnel math (stated as "industry-baseline founder-sales math"): of 50 DMs, expect **10 to engage, 5 to sign up free, 1–2 to convert to paid in the first 30 days**. Daily ops: **10 DMs/day (Mon–Fri, never weekends)**; reply to every reply within 24 hours, personally; log every DM (name, date, response, outcome); never follow up more than once with a silent contact.
- Welcome flow: three short methodology emails over the next two weeks, then notification when the Signal Feed opens. Trust claim: "The track record proves itself over the next 90 days."
- Targeting list order (first 50 DMs; first 10 sent personally, no template): Tier 1 (people who know you personally): friends you've talked sports with; friends who bet recreationally; friends in finance/data/quant adjacent; friends with podcasts/newsletters/audiences. Tier 2 (warm secondary): former coworkers who follow sports; sharp-bettor community members on X you've engaged with before; sports-data Twitter accounts you follow; podcast hosts in betting/analytics. Tier 3 (cold but qualified): sharp bettors with public win-rate disputes against tout services; people who've publicly complained about a specific tout's transparency. For Tier 3, personalize with something specific from their last 30 days of posts.
- 5-minute journalist walkthrough order: (1) Homepage — founder byline + SignalPreviewQueue animating, product visible before any link clicked; (2) Anatomy of a Signal — annotated sample card (factor trail, Edge Index, variance reminder); (3) vs. Tout Services — six-row category contrast; (4) Methodology (Galaxy IQ) — four-check decision stack + five readiness gates; (5) Calibration Report — currently "Collecting"; scripted line: "If I have to wait, I wait. That's the whole point."
- Ready-to-quote soundbites (from /press, first-person founder voice): "I publish a calibrated signal — not a tout." / "Outcomes are uncertain. I describe variance, I don't hide it." / "Every pick traces back to a real market line. No synthetic numbers." / "I gate performance stats until the data can honestly support them." / "If I can't show my work, I don't publish." / "If I have to wait, I wait. That's the whole point."
- Objection "What's your win rate?" scripted response: "Refusing to answer right now is the answer. A defensible win-rate takes at least 100 settled signals."
- Objection "I just want today's lock" scripted response: refuses "lock" — "that word is a lie in a market with variance. Galaxy IQ ships when the evidence supports it — and stays quiet when it doesn't." (CONTRAST with the trust-gate banning of the standalone word "lock" in the media audit file — consistent; both refuse the term.)
- Reply templates: "I signed up" → welcome flow (three methodology emails over two weeks, then Signal Feed opens). "Cool, will check it out" → no pressure, hq@galaxysportsedge.com, "Real replies, no auto-responder." "Why should I trust you?" → gated Calibration Report as the answer. Silent → one follow-up max, move to next person.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The 100-settled-signals public-commitment threshold is the most consequential number in this file — it is a founder-signed public promise about when performance stats may be shown. Serves the trust-target intake lane (any engine output that surfaces win-rate-adjacent claims must respect this gate) and the calibration/sizing lane (it defines the defensible-history bar).
- TRUST-SIGNAL: The four-check decision stack (read the board → measure pressure → gate the signal → learn slowly) plus the factor trail dimensions (consensus, line movement, market depth, freshness) is the closest this file comes to a signal-scoring input schema — a stated, public-facing contract for what each signal carries. Serves the signal-wiring lane as a required output shape check.
- TRUST-SIGNAL: The five readiness gates (CANONICAL_HISTORY, DERIVED_MODEL_HISTORY, PUBLIC_PICKS, PERFORMANCE_STATS, OUTCOME_LEARNING) are a staged rollout taxonomy that maps 1:1 onto the developer-innovation-layer's B2B prerequisites; taken together they define what "learn slowly" means mechanically. Serves the calibration/sizing lane.
- TRUST-SIGNAL: "Losses are counted. Every outcome counts" + "Every pick traces back to a real market line. No synthetic numbers" are hard constraints on any ledger or backtest: no synthetic lines, no dropped losses. Serves the calibration/sizing lane. Note CONTRADICTION risk: any existing backtest that drops losing signals or uses synthetic lines violates this public commitment.
- OTHER: The 30-minute odds ingest cadence from "dozens of sportsbooks" is a stated live-feed spec — a wiring-lane target to verify against whatever the actual odds ingestion implements (cadence, book count).

## Engine-actionable? (yes/no + one-line what)
Yes — encode the 100-settled-signals gate as the hard threshold before any public win-rate/performance surface opens, and audit all existing backtest ledgers for dropped losses or synthetic lines (both violate the public commitment).
