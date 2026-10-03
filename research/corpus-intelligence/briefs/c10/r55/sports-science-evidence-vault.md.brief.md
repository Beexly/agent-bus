# performance/sports-science-evidence-vault.md
## What it is (1-2 sentences)
Doctrine document defining a proposed "Sports Science Evidence Vault" — a sub-vault that would hold verified, licensed, timestamped sports science data items (physical, biomechanical, tracking evidence) attached to picks. The vault is NOT yet implemented; this is governance/spec only.
## Key metrics/methods (formulas where given, else "not specified")
TTL windows: T1 injury reports = 4 hours; T1 performance metrics = 24 hours; T2 default = 24 hours (per provider contract). Evidence item fields include: source tier (T1/T2/T3), licenseVerified boolean, commercialUsePermitted, modality (physical/radar/tracking/video/health), metricName/value/unit, athleteId (official league ID), evidenceDate (ISO 8601 UTC), ttlHours, expiresAt, publicCitation flag. Tier ladder: T1 official league data, T2 licensed commercial, T3 research/internal-only, T4 blocked from evidence use, T5/T6 permanently forbidden (admission of one = P1 incident).
## Data sources named
Next Gen Stats, Second Spectrum (player tracking, T1, requires enrollment); Statcast (pitch tracking, T1 public endpoint with rate limits); Trackman, Rapsodo, Hawkeye (T2, commercial license required); wearable GPS (T2, team partnership required); OpenBiomechanics Project (T3, research license, no commercial redistribution); Driveline Baseball R&D datasets (T3, no commercial use); Sports Reference (editorial use permitted, bulk scraping prohibited); PitchingNinja/community databases (T5, forbidden).
## Findings (numbers and facts, not vibes)
- Wave 3 line audit found NO single open-source repository provides production-ready, commercially licensable sports science data — every high-signal source needs independent license verification. QB-BEHAVIOR (TRUST-SIGNAL-adjacent: source-legitimacy doctrine)
- Public/private boundary: official injury designations (T1) and Statcast aggregates may be displayed publicly; biomechanics, GPS/wearable load, and academic datasets are NEVER public — internal only. OTHER (licensing doctrine)
- Forbidden: citing OBP/Driveline/academic datasets in public content; claiming "our model incorporates biometric data" without a verified wearable license; publishing biomechanics values without a verified T2 license. TRUST-SIGNAL
- MVP scope is limited to T1 injury-status ingestion + TTL enforcement job; biomechanics/radar/tracking modalities explicitly NOT in MVP; V2 = T2 tracking, V3 = force plate/GPS, V4 = video play classification. OTHER
- Year-to-year fumble-recovery correlation ~0.00 (recovery treated as noise) is noted in the companion edge-sheet README, not this file. SCHEME-adjacent but out of scope here.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
See per-finding tags above; all tags applied inline.
## Engine-actionable? (yes/no + one-line what)
Partially yes — the T1/T2/T3 tier admission checklist and public/private boundary rules are directly reusable as the GSE intake-licensing doctrine for any NGS/tracking/wearable signal (internal-only for NGS already aligns); the proposed SportsScienceEvidenceItem schema shape is a reusable pattern for timestamped, TTL-enforced evidence items in the engine.
