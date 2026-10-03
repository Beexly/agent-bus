# data/source-provider-module-taxonomy.md
## What it is (1-2 sentences)
The Sports OS doctrine classifying every data-source provider module into 7 categories with evidence tiers (T1–T6), risk colors, admission requirements, and a full provider-module registry schema — the legal/licensing gate for any data the engine ingests.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — taxonomy/governance document, no formulas. Key quantified rules: Category 1 TTL 30 min pre-game / 5 min within 2h of game time; REVOKED providers' data removed within 48 hours; win-rate claims (media) require ≥30 settled picks + defined window + model version (from cross-referenced media doctrine).
## Data sources named
The Odds API (`packages/data-ingestion/odds-api/`) — the ONLY active provider: Category 1, T2 licensed, ADMITTED. Prospective: Pinnacle, Sportradar betting feeds, SBK, Action Network API (Cat 1); MLBAM, NFL Next Gen Stats, NBA Second Spectrum, NHL RTSS (Cat 2, official); Trackman, Rapsodo, Catapult GPS, STATSports, Statcast, Hawkeye (Cat 3); Sports Reference network, ESPN Stats (limited), Sportsdata.io (Cat 4); AP Sports wire, Reuters Sports, official league injury APIs, Rotowire, RotoGrinders (Cat 5); Reddit/Twitter sports communities, Scores24, Betway blog (Cat 6); AI summary sites, GPT previews, content farms (Cat 7 — permanently blocked as evidence).
## Findings (numbers and facts, not vibes)
- Evidence tiers: T1 official league data (GREEN, highest licensing barrier; program enrollment, not just API key; owner approval before any program application); T2 licensed structured; T3 editorial reference (never primary pick evidence); T5 community = monitoring-only, may never be primary evidence; T6 synthetic/AI-generated = permanently RED/forbidden, no admission path. (TRUST-SIGNAL)
- Category 1 (odds/market) defaults YELLOW: "market data is reliable but can reflect manipulation; requires freshness enforcement." (TRUST-SIGNAL)
- Category 3 biometric data: ORANGE until CBA consent framework confirmed by legal. (TRUST-SIGNAL)
- License lifecycle: PROPOSED → GATED → ADMITTED → SUSPENDED/REVOKED → ARCHIVED; ADMITTED → REVOKED triggers 48-hour data removal from the Evidence Vault; no PROPOSED/GATED provider may ingest; Category 4 reference data never primary pick evidence; all evidence items must carry their source module ID. (TRUST-SIGNAL)
- Codex audits: any data adapter in `packages/data-ingestion/` without an ADMITTED registry entry is a P0; no Category 6/7 ingestion adapter may exist.
- INFERENCE: this taxonomy reinforces the INGEST-AND-LEARN doctrine — learning from commercial data is allowed, commercial use is gated by license.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
All tagged TRUST-SIGNAL (evidence-tier/admission governance). No on-field intelligence.
## Engine-actionable? (yes/no + one-line what)
no — Intake-only licensing taxonomy; one practical takeaway for the corpus: evidence-tier labels (T1–T6) are the natural provenance tag for any signal the engine ingests, and they already exist in doctrine.
