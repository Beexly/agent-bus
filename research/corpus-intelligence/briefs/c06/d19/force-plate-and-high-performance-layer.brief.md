# performance/force-plate-and-high-performance-layer.md
## What it is (1-2 sentences)
A governance doctrine (not an implementation plan) for physical load monitoring data — force plates, GPS wearables, HRV, and IMU — within the Sports OS Intelligence Network. It establishes legal/licensing rules and explicitly marks the entire layer as V3+ only, with zero current implementation permitted or present.
## Key metrics/methods (formulas where given, else "not specified")
- GPS/wearable aggregate fields: `total_distance_m`, `high_speed_running_distance_m`, `max_velocity_mps`, `player_load_units` (Catapult PlayerLoad™ metric), `accel_decel_count`.
- PhysicalLoadSignal schema (proposal, not implemented): fields include signalId, modality='physical', sourceType ∈ {team_gps, wearable, force_plate, imu}, sourceTier ∈ {T2, T3}, licenseVerified, athleteConsentOnFile (required true before any storage), ttlHours (72h max for workload signals), publicCitation = false (compile-time constant), inferencePurposeOnly = true.
- No formulas specified.
## Data sources named
- Force plate systems: AMTI, Kistler, Bertec; output formats CSV, BDF (BioDataFile), analog voltage time-series.
- GPS wearables: Catapult Sports (ClearSky GNSS, Vector GPS vest), STATSports (APEX), StatSports; output CSV exports from team portal, JSON API.
- IMU: Xsens MVN (full-body suit), Delsys Trigno; output BVH, C3D, proprietary binary.
- OpenBiomechanics Project (OBP): public force plate + motion capture repo, covering pitching, overhead athlete mechanics, lower extremity landing; CC BY 4.0 data / MIT code; co-published by Driveline Baseball with additional commercial restrictions requiring written agreement before commercial use in prediction/advisory products.
- Driveline Baseball R&D: published force plate, Rapsodo, and motion capture datasets on GitHub and their public research portal; posted terms prohibit commercial use without written license.
## Findings (numbers and facts, not vibes)
- Zero current fit: no wearable, force plate, or GPS data infrastructure exists in the codebase; layer is fully prospective, V3+ only, no MVP path.
- Retention rule: 90-day active window; no long-term biometric storage. TTL: 72h max for workload signals (enforced). Session dates recorded as date only, not timestamps (too precise).
- Prohibited fields: GPS coordinates, heart rate, HRV, raw acceleration time-series — HRV/heart rate permanently blocked (health data restriction).
- Source tiers: licensed team GPS = T2 (commercial license + team partnership + athlete consent); OBP force plate = T3 (written Driveline agreement for commercial use); Driveline R&D datasets = T3 (written agreement for any production use); academic wearable studies = T3; community-shared biometric data = T5 PERMANENTLY FORBIDDEN; athlete-posted wearable data (social media) = T5 PERMANENTLY FORBIDDEN.
- Consent framework varies by league: NFL/NFLPA, MLB/MLBPA, NBA/NBPA CBAs govern tracking/biometric data; "no wearable data integration may begin without a written determination from the owner's legal counsel" — labor law matter, not self-certifiable.
- V3 entry gate (all 6 required): owner approves V3 scope; legal review of CBA consent; written team/league partnership; written Catapult or STATSports commercial license; data minimization architecture review; athlete consent framework operational.
- Public/private boundary: workload flags may appear on PRO/ELITE tiers as aggregate signals only; individual biometric values, force plate curves, joint torque values, GPS coordinates/movement paths, HRV/physiological data are NEVER public. OBP-derived research signals: NEVER public (research license, no commercial redistribution).
- Risk table: athlete biometric data without consent, OBP commercial use without Driveline agreement, GPS coordinates stored in production, biometric data in error logs, HRV/heart rate ingested, athlete data sold/transferred — all P0; team partnership revoked = P1 (48-hour data removal protocol).
- Codex audit requirements: confirm no GPS/HRV/heart rate fields in any Prisma model or table, no force plate/wearable ingestion adapter exists, no OBP/Driveline data in the Evidence Vault.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Licensing doctrine: commercial prediction products using OBP/Driveline data require written agreements — a hard legal gate before any biomechanical signal enters the pick pipeline.
- [TRUST-SIGNAL] Physical-load-derived workload flags (high-pitch-count pitchers, licensed team GPS) as pick modifiers — a differentiation source since most public sports analytics lacks team GPS/force plate access.
- [OTHER] Data minimization doctrine: aggregates only, 90-day retention, 72h TTL, date-not-timestamp precision — a template for handling any sensitive athlete data.
- [OTHER] CBA-driven consent: NFLPA/MLBPA/NBPA labor agreements gate all wearable data — operational constraint on the physical layer, not a modeling insight.
## Engine-actionable? (yes/no + one-line what)
no — V3+ only with zero current fit; no implementation approved; document is governance, not code.
