# docs/audit/final-wave-source-risk-register.md
## What it is (1-2 sentences)
The Sports OS doctrine-level source risk register (Prompt 4 — Final Wave) that scores every source category on four 1–5 dimensions (data quality, legal/licensing, reliability, manipulation risk) into GREEN/YELLOW/ORANGE/RED admission tiers, with the first wave of specific provider reviews (Scores24, DraftKings/FanDuel, ESPN/The Athletic) and explicit forbidden actions for the evidence pipeline.
## Key metrics/methods (formulas where given, else "not specified")
not specified — qualitative risk framework.
Admission tiers: GREEN (all dimensions ≥ 4 — admit immediately); YELLOW (one dimension 3–3.9 — admit with documented constraints); ORANGE (one dimension 2–2.9 — requires owner approval); RED (any dimension < 2 or legal concern — do not admit).
Category profiles:
- Official League Feeds (Tier 1): 5/4/4/5 → GREEN; constraint: display as derived intelligence, cite league + timestamp, never claim more freshness than provided.
- The Odds API (Tier 2, current licensed provider): 5/5/4/5 → GREEN; constraint: no verbatim republication ("market context"), attribute "odds data via The Odds API", rate-limit handling, burst failures logged — never silently serve stale odds.
- Licensed Stats Providers (Tier 2 future — Sportradar, Stats Perform, Elias, SportsDataIO): 5/3–4/5/5 → YELLOW pending per-provider license; no ingestion without signed agreement; owner approval.
- Beat Reporters / Established Sports Media (Tier 3 — ESPN, Athletic, team beats): 3–4/4/3/3 → YELLOW; 2-hour TTL standard; never sole Tier 3 evidence without Tier 1 or second Tier 3 corroboration; X beats must be verified against a second source before use for injury status; "breaking" claims (surgery, trade) require Tier 1.
- Market Data / Sportsbook Feeds (Tier 4): 3/3/4/2 → YELLOW; context only, never primary evidence; "sharp money" claims require Tier 1/2 confirmation; public betting % disclosed as "public sentiment proxy" not fact.
- Reddit / Forums / Community (Tier 5 — r/fantasyfootball, r/nfl, team subs): 1/5/5/1 → RED for evidence; YELLOW for watchlist-only cockpit monitoring; never evidence for any pick/Brain answer/recommendation; any watchlist signal triggers Tier 1 verification before action.
- AI-Generated Content / Aggregators Without Attribution (Tier 6): 1/2/N/A/1 → RED, never admitted; Sports OS model outputs are themselves Tier 6 — Claude API responses are content tools, not evidence.
Specific reviews: Scores24 → ORANGE (legal/licensing unclear; scraping forbidden; monitor for future official partnership only). DraftKings/FanDuel → RED for scraping (ToS prohibit automated access); GREEN via The Odds API aggregation. ESPN/The Athletic → YELLOW Tier 3; summary + attribution only, no structured-data scraping without license.
## Data sources named
Six-tier taxonomy (docs/brain/source-hierarchy.md); Source Acquisition Mesh (docs/brain/source-acquisition-mesh.md); piracy-malware do-not-use register (docs/audit/piracy-malware-do-not-use-register.md); scores24-source-review.md; R&D Batch 0–6 reference reviews; docs/rejected-data-sources.md; docs/data-source-options.md; legal review completed 2026-05-20; The Odds API license terms review.
## Findings (numbers and facts, not vibes)
- Exactly four risk dimensions, each scored 1–5, mapped to four admission tiers — the first line of defense for the trust model: one bad source can produce invalid picks and legal/reputational exposure.
- Reddit manipulation risk scored 1/5 — highest-risk category: coordinated false injury reports can move betting lines; system must never let Reddit-originated claims influence public picks without Tier 1 confirmation.
- The Odds API is the only active Tier 2 licensed source until additional licenses are signed.
- Beat-report claims on X/Twitter carry an explicit hack/suspension/impersonation risk note — injury-status tweets require second-source verification.
- Forbidden actions: no RED source in the Mesh; no scraping ToS-prohibited sources; no Reddit/forum content as pick evidence; no AI summaries as evidence; no "sharp money" from market movement alone; no Tier 2 admission without a signed agreement.
- Approval gates: YELLOW admission → operator with documented constraints; ORANGE → owner; new licensed provider → owner + legal; any RED reclassification → owner.
- Validation expectations: no ORANGE/RED in the Source Registry as ADMITTED; Reddit/Tier 5 never in the Evidence Vault as evidence items; register reviewed quarterly or on new source proposals.
- Register is internal (not on the public methodology page); the public page discloses only the tier taxonomy and general categories.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Four-dimension source scoring → GREEN/YELLOW/ORANGE/RED as the trust model's first line of defense: TRUST-SIGNAL
- X/Twitter beat accounts flagged for hack/suspension/impersonation; injury tweets require second-source verification: TRUST-SIGNAL
- Reddit/forums RED for evidence (manipulation risk 1/5 — coordinated false injury reports move lines): TRUST-SIGNAL
- "Public betting %" labeled a manufactured engagement metric, not a real sharp/square signal; sharp-money claims require Tier 1/2 confirmation: TRUST-SIGNAL
- AI-generated content Tier 6 RED; Sports OS's own model outputs are Tier 6 (not evidence): TRUST-SIGNAL
- DraftKings/FanDuel RED for scraping, GREEN via The Odds API licensing: OTHER (licensing)
- Do-not-say-language doctrine overlaps Brain rules (no casino/guaranteed/locked language in public copy): TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — encode the tier-to-confidence coupling (e.g., no HIGH confidence on Tier-4-only evidence, Tier 5 never in the Evidence Vault) and the 2-hour TTL + second-source verification rules into the ingestion/evidence pipeline; this is the trust doctrine the calibration gates in the other two files must compose with.
