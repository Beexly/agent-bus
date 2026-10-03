# source-providers/scores24-source-review.md
## What it is (1-2 sentences)
The authoritative Sports OS risk review of Scores24 as a potential sports-data source, completed in the Prompt 4 Final Wave: Scores24 is classified ORANGE (legal/licensing risk, ToS automated-access status unconfirmed, no public commercial API) with a 6-step path to GREEN and hard forbidden actions, sitting under the Sports OS Intelligence Network master plan.

## Key metrics/methods (formulas where given, else "not specified")
No formulas. The operative method is the four-dimension Source Risk Framework from `docs/audit/final-wave-source-risk-register.md`, with scores on a stated scale where a 2–2.9 score on any dimension triggers ORANGE (owner approval required, not self-approving). Scores24 results:
- Data quality: 3 — "Aggregates real data but provenance chain unclear"
- Legal / licensing: 2 — "No confirmed commercial license; ToS automated access status unknown"
- Reliability: 3 — "Uptime history not established for API use"
- Manipulation risk: 3 — "Aggregator risk: downstream of original sources"
- Overall risk tier: ORANGE. Data quality tier: estimated T2–T3 (unverified without licensed access).

## Data sources named
- Scores24 (the reviewed source; aggregator of scores/odds/standings/schedules).
- Approved alternatives named in the file: The Odds API (T2, GREEN, licensed) for odds/lines; league official feeds (T1, GREEN) for official scores; Sportradar or Stats Perform (T2, YELLOW, requires license) for future stats.
- No other datasets; no PII, no credentials.

## Findings (numbers and facts, not vibes)
- Status: Doctrine. ORANGE classification. No active integration permitted.
- Source: Prompt 4 — Final Wave. Parent: `docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md`.
- Provider profile: Scores24 = scores/statistics aggregation; primary use case scores, odds, standings, game schedules; data quality tier estimated T2–T3 (unverified); official API "Unknown — not publicly documented"; ToS "Unclear — automated access status not confirmed"; commercial licensing "No public commercial license program documented."
- Finding 1 — ToS status UNCONFIRMED: Sports OS could not confirm whether Scores24's ToS permits automated access. Doctrine: when ToS automated access is unconfirmed, treat automated access as PROHIBITED ("'But the data is public' is not a defense when the ToS prohibits automated access"). Resolution requires a written response from Scores24 confirming permitted automated access + redistribution under a commercial agreement, OR a signed license.
- Finding 2 — No official API documented: any access would require (a) a private commercial agreement, or (b) web scraping — scraping is BLOCKED because ToS status is unconfirmed (scraping default is PROHIBITED).
- Finding 3 — Provenance chain unclear: Scores24 is an aggregator, not an originator; original source tier unknown; redistribution rights may not flow through Scores24; a license with Scores24 alone may be insufficient — need confirmation Scores24 can sublicense for Sports OS's use case (derived intelligence, public-facing picks).
- Finding 4 — No historical reliability data: consumer-site uptime is not a proxy for API reliability. Even if licensing is resolved, a 90-day evaluation period with parallel validation against The Odds API is required before production-pick use.
- Classification decision rationale: the legal/licensing dimension scores 2.0; one confirmed LOW dimension triggers ORANGE per the framework.
- Path to GREEN (all 6 required): 1. ToS confirmation (written confirmation of permitted automated access); 2. API documentation (official API docs or commercial license terms); 3. Provenance confirmation (sublicense rights for Sports OS use case); 4. License signed; 5. Reliability evaluation (90-day parallel evaluation against The Odds API); 6. Owner approval (required even after 1–5).
- Path to RED triggers: ToS confirmed to prohibit automated access; data confirmed from sources prohibiting redistribution; legal review finds liability risk; partnership inquiry declined or terms unacceptable. RED reclassification moves Scores24 to the hard-ban register in `docs/audit/piracy-malware-do-not-use-register.md` Section 3.
- Current status: monitoring-only — manual end-user visits allowed; formal licensing inquiry may be initiated (owner only); NO automated access of any kind; no Scores24 data in any Sports OS data pipeline.
- No current data-coverage gap requires Scores24: "The monitoring-only classification does not create a data deficit."
- Review basis: publicly available ToS info; absence of documented commercial API; Source Risk Framework; "Legal review guidance completed 2026-05-20." Explicit caveat: "This review does not constitute a legal opinion."
- Forbidden actions: do NOT scrape Scores24 under any circumstances; do NOT include Scores24 data in any pick evidence chain; do NOT admit to Source Registry without all six GREEN steps + owner approval; do NOT represent Scores24 as a data source in any public methodology disclosure; do NOT reclassify without updating this document.
- Approval gates: licensing inquiry → Owner; admission after ToS confirmed → Owner (required even with confirmed ToS); ORANGE→RED → Operator (document reason); ORANGE→GREEN → Owner (all 6 steps).
- Validation expectations: Source Registry has no ADMITTED entry for Scores24; no ingestion adapter references Scores24 endpoints; no code in `packages/data-ingestion/` or `workers/` requests Scores24; document updated on status change.
- Codex audit requirements: (1) confirm no code in `packages/data-ingestion/` or `workers/` references Scores24 domains/endpoints; (2) confirm Source Registry has no ADMITTED record; (3) confirm `docs/audit/piracy-malware-do-not-use-register.md` Section 3 entry matches ORANGE status here (no silent escalation to RED); (4) report any Scores24 scraping code as a P1 violation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — this is the trust-signal program's intake doctrine in its purest form: the four-dimension Source Risk Framework (quality/legal/reliability/manipulation) is the gate every source must pass before entering a pick evidence chain. The Scores24 application shows the mechanism concretely: aggregators carry provenance risk (Finding 3 — "aggregator risk: downstream of original sources," manipulation-risk score 3), which directly mirrors how the engine should treat secondary sports-data sources (e.g., downstream odds/stats aggregators) vs. T1 originators (league feeds) and licensed T2 (The Odds API). This serves the trust-target intake lane and the calibration/sizing lane (data-lineage weighting: T1 > licensed T2 > aggregator).
- OTHER — the 90-day parallel validation requirement against The Odds API is a concrete calibration protocol template: any new source must run 90 days of shadow parallel validation before production picks. This is directly engine-actionable as a source-admission SOP for the wire-first sequencing backlog (research → wire → weight → calibrate → test → polish).
- OTHER — the scraping-is-prohibited-when-ToS-unconfirmed doctrine constrains the off-field intake lane: no crawler may touch a source without confirmed automated-access rights, which interacts with the apify/crawlee "respect robots/ToS" caveat from the IG sweep brief — the two documents are consistent (no CONTRADICTION).
- OTHER — finding 3's sublicense-requirement ("a license with Scores24 alone may be insufficient") is a generalizable licensing rule for any aggregator source: rights must be traced to the originator, relevant when evaluating future T2 stats partners (Sportradar / Stats Perform are YELLOW, license required).

## Engine-actionable? (yes/no + one-line what)
yes — adopt the 90-day parallel-validation-against-The-Odds-API protocol as the standard source-admission SOP, and enforce the four-dimension risk score (ORANGE at any dimension ≤2.9) as the wire-time gate for every new data source entering the ingestion mesh.

## Referenced files, papers, datasets
- Parent: `docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md`
- `docs/audit/final-wave-source-risk-register.md` (aggregate risk classification; Source Risk Framework source)
- `docs/audit/piracy-malware-do-not-use-register.md` (ToS violation register; Section 3 hard-ban target)
- `docs/brain/source-acquisition-mesh.md` (source admission criteria)
- Code paths: `packages/data-ingestion/`, `workers/`
- Datasets/services: Scores24; The Odds API (T2, GREEN); league official feeds (T1, GREEN); Sportradar / Stats Perform (T2, YELLOW, license required). No papers.
