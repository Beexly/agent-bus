# brain/source-acquisition-mesh.md

## What it is (1-2 sentences)
Doctrine (status: NOT yet implemented in code; governance enforced via operator cockpit + manual review) for the Source Acquisition Mesh (SAM): the intake layer of the Sports OS intelligence network governing how sources are discovered, evaluated, admitted, scored, health-monitored, and retired, with a full reliability-scoring rubric and health-failure thresholds. It is "the system's immune response to bad data" — a governed registry of approved sources with documented acquisition methods, update frequencies, health checks, and retirement rules, explicitly NOT a web crawler or scraper.

## Key metrics/methods (formulas where given, else "not specified")
No closed-form formulas; scoring rubric specified as point deltas (verbatim from the file):

**Reliability score inputs** (0–100 scale):
- Tier 1 confirmation of source claim: +2 per confirmation (capped at 20 events/month)
- Settlement WIN aligned with source-backed pick: +1 per outcome
- Settlement LOSS on source-only evidence: -2 per outcome
- Source claim later contradicted by Tier 1: -5 per contradiction
- Source claim never verified or refuted: 0 (neutral)
- Fetch failure: -1 per missed update window
- Fetch recovery after degraded period: +1 per successful recovery

**Score thresholds** (verbatim):
- 80–100 HIGH_RELIABILITY: may be used as sole Tier 3 evidence in premium picks
- 60–79 RELIABLE: standard use; corroboration preferred for public picks
- 40–59 CAUTION: must be corroborated by Tier 1/2 before use in picks
- 20–39 LOW_RELIABILITY: cockpit watchlist only — not for picks
- 0–19 SUSPENDED: automatically suspended — operator review required

**Tier 3 admission rubric** (numbers): at least 90 days of observable reporting; accuracy not below 70%; new Tier 3 source starts at reliability 50 and graduates only through observed accuracy vs settlement outcomes and Tier 1 confirmation.

**Health failure thresholds** (verbatim): 1 fetch timeout/error → DEGRADED; 3 consecutive misses → STALE; 6 consecutive misses → UNAVAILABLE; 48 hours prolonged unavailability → operator alert, SUSPENDED pending review.

**Downstream effects**: HEALTHY → used normally; DEGRADED → FRESHNESS_WARN flag, cockpit alert; STALE → evidence flagged STALE, picks backed solely by this source WITHHELD; UNAVAILABLE → evidence invalidated, sole-source picks WITHHELD; SUSPENDED → excluded from all evidence retrieval.

**Retirement triggers**: source no longer exists; license terminated; reliability dropped below 10 with no recovery in 60 days; deliberate false publication; legal/compliance concern. Retirement rules: record not deleted; historical evidence flagged SOURCE_RETIRED; sole-evidence picks flagged EVIDENCE_RETIRED; calibration data does not rewind (settlement history preserved).

**UpdateFrequency enum**: REAL_TIME (live game data) | FIVE_MIN (market data) | FIFTEEN_MIN (injury reports) | HOURLY (breaking news) | DAILY (stats updates) | ON_DEMAND | MANUAL.

## Data sources named
- The Odds API — the current licensed Tier 2 source for odds and lines; raw data may NOT be republished verbatim; must be displayed as Sports OS derived intelligence with provider attribution.
- Internal refs: `docs/brain/source-hierarchy.md` (six-tier taxonomy), `docs/brain/evidence-vault.md`, `docs/brain/weak-signal-engine.md` (Tier 5 handling), `docs/brain/picks-intelligence.md`, `docs/brain/calibration-feedback-loop.md`, `docs/source-registry-spec.md`, `docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md` (parent).
- Example Tier-1 qualifiers: NFL official injury report via licensed feed, team's official X account transaction announcement, coach's on-record press conference transcript. Non-qualifiers: fan accounts quoting officials, aggregators republishing without attribution.

## Findings (numbers and facts, not vibes)
- Admission rubrics per tier: Tier 1 (origin from team/league, named official entity attribution, official/credentialed/licensed access, independently verifiable, no deliberate-misinformation history); Tier 2 (formal API/data agreement, SLA with uptime+freshness guarantees, redistribution terms reviewed, provider cited in derived outputs); Tier 3 (established outlet, named reporter with verifiable track record, ≥90 days reporting, accuracy ≥70%, credentialed/observed access, no correction-pattern on same claim type); Tier 4 limited to licensed market feeds (unlicensed sportsbook scraping does NOT qualify; market signals are perceived-probability info, not fact); Tier 5 cockpit-only watchlist inputs (specific channel, keyword/sentiment monitoring only, never public evidence; any Tier-5 watchlist hit must trigger a Tier-1 verification attempt); Tier 6 (AI content, unattributed aggregators) NEVER admitted — Sports OS model outputs are Tier 6 by definition.
- Unlicensed source rule: UNLICENSED sources may not be used for evidence regardless of quality; may appear in registry as PENDING while licensing pursued, excluded from evidence retrieval until licensed.
- Source transparency: public `/methodology` may show the six-tier taxonomy, general source categories, freshness TTLs per tier, no-raw-data-republication statement, and the Tier-6-never-source-of-truth statement. NEVER shown publicly: full source list, per-source reliability scores, health status, internal IDs (gaming/targeting risk).
- Current implementation note: SAM registry/health/scoring/monitoring do not exist in code; implementation = The Odds API (Tier 2) + operator-curated content, governed by this doctrine + operator cockpit/manual review until schema changes are approved.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: The reliability rubric is directly engine-actionable as the calibration backbone for source-weighted intelligence: +1/−2 asymmetric update on settlement outcomes is a ready-made per-source calibration updater; the −5 Tier-1-contradiction penalty is the anti-noise mechanism for coach-speak vs. injury-report divergence. Serves the trust-target intake and calibration/sizing programs.
- **COACHING**: Tier-1 admission example explicitly includes "coach's on-record press conference transcript" as qualifying primary evidence — this is the canonical intake path for coaching-tendency signals (injury-report gamesmanship, depth-chart statements). Serves coaching tendencies.
- **QB-BEHAVIOR / OL**: Coach press conferences and official injury reports (Tier 1) are the legitimate carriers of QB-availability/role signals; the doctrine's requirement that aggregators without attribution do NOT qualify constrains which QB/OL news can feed profiles. Serves QB-behavioral profiles and OL programs at the intake layer.
- **OTHER**: The withholding rules (STALE/UNAVAILABLE → sole-source picks withheld) are a concrete pick-suppression mechanism tied to source health — the tracking lane's existing watch tables and health endpoints should map onto these statuses when the registry is built.
- **OTHER**: Public-transparency boundary (never expose per-source scores/health) aligns with the 9/28 public/private doctrine and NGS internal-only doctrine — methodology shown, mechanics hidden.

## Engine-actionable? (yes/no + one-line what)
Yes — the reliability point-delta table and the 80/60/40/20/0 threshold gates are a ready-made spec for the calibration/sizing lane's per-source trust weighting once the registry schema lands.
