# ai/airwave/AIRWAVE_SOURCE_POLICY.md
## What it is (1-2 sentences)
Legal/operational source policy for the Airwave listening program (human-readable companion to `apps/web/lib/airwave/source-policy.ts`): which sources are allowed for ingest and what may go public. Establishes a strict public/private field split and operator-approval gate.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — policy document, no math. Key structures: 10 allowed source types with LOW/MEDIUM/HIGH risk tiers; rights statuses (OWNED/PUBLIC/LICENSED/PERMISSION_REQUIRED/HELD); operator statuses (DRAFT/REVIEW/APPROVED/REJECTED/SETTLED). Public output requires `operator_status = APPROVED` + rights in (OWNED, PUBLIC, LICENSED) + explicit `public_safe = true`.
## Data sources named
Public YouTube show feed; podcast RSS; beat reporter mesh; official team feed; official league data; odds/market feed; CSV/TSV operator transcript import; founder local listening; SiriusXM-class satellite radio (HELD, HIGH risk, legal ACK required); Galaxy Studio handoff.
## Findings (numbers and facts, not vibes)
- 10 source types: 7 LOW, 2 MEDIUM (beat_report, founder_local_listening), 1 HIGH (satellite_radio_context).
- Forbidden across all sources: raw audio retention; verbatim transcript storage (public); auto-publish; source pointers in public output; stream ripping; DRM bypass; credential automation; scraping protected endpoints; full quote publication (paraphrase only); UNFALSIFIABLE claims cannot produce GSE pick evidence.
- Allowed uses per source: e.g., `public_youtube` → paraphrased claims, entity tags, GSE/GSN signals; `beat_report` → injury/role/depth alerts, GSE evidence; `official_league_feed` → structured game data, GSE model input; `odds_market_context` → line snapshots, market signals (no raw-feed sublicensing; The Odds API license terms apply).
- SiriusXM: subscriber agreement prohibits recording/redistribution/automation; founder subscription is live-listening-only; paraphrased notes before any publication; `AIRWAVE_SIRIUSXM_LEGAL_ACK` required.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL (indirect): YouTube/podcast paraphrased claims and entity tags are the sanctioned intake path for social/video quotes revealing QB-receiver trust dynamics (paraphrase-only, operator-approved).
- COACHING (indirect): beat_report and official team feeds feed injury/role/depth alerts that reflect coaching tendencies (roles, depth chart movement).
## Engine-actionable? (yes/no + one-line what)
Yes — this is the legal intake spec for TRUST-SIGNAL and coaching-intel signals from media (allowed sources, paraphrase-only rule, falsifiability requirement for pick evidence); usable as-is by the media/signal intake lane.
