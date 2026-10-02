# docs/performance/sports-science-licensing-policy.md

## What it is (1-2 sentences)
Binding doctrine (parent: `docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md`) classifying every sports-science data type into license categories A–F and establishing the **default position: ALL sports science data is PROHIBITED until licensed** — "it's publicly available" does not confer commercial use rights.

## Key metrics/methods (formulas where given, else "not specified")
- Admission decision tree: (1) is it sports science data? → (2) written commercial agreement with publisher? (NO → BLOCKED, escalate to owner) → (3) does the agreement permit commercial prediction-engine use? (NO → BLOCKED) → (4) if biometric/wearable: CBA consent determination from legal counsel? (NO → BLOCKED) → (5) source tier T1 or T2? (NO — T3 or lower → internal context only, `publicCitation: false` required).
- Master License Status Registry (current): Category A tools available (code licenses clear, input data rights tracked separately); Category B (OBP, Driveline R&D): RESEARCH ONLY, commercial agreement NOT OBTAINED; Category C providers (Trackman, Rapsodo, Catapult, STATSports, Hawkeye, TRACAB): NOT LICENSED, no agreement; Category D programs (MLB MLBAM, NFL NGS, NBA Second Spectrum, Sportradar): NOT ENROLLED; Category E broadcast: NOT LICENSED — all broadcast video analysis prohibited (V3+ only); Category F (CBA): NOT ASSESSED, legal determination not obtained.
- Codex audit requirements: (1) no Category B data admitted without written commercial agreement; (2) no Category C/D data admitted without signed commercial agreement; (3) no broadcast footage processed by any CV model; (4) all evidence items carry `licenseVerified` registry status; (5) registry kept current; (6) any vault item without a registry entry is P0.
- Forbidden actions include: no CV on broadcast footage without broadcast license; no use of OpenPose commercially without CMU license; no citing sports science data in public content without T1/T2 source; no storing raw biometric values in any DB table.

## Data sources named
- Code-only open source (Category A): YOLO (Ultralytics, MIT), MediaPipe (Apache 2.0), OpenSim (Apache 2.0), BTK/ezc3d (MIT/Apache), pybaseball (MIT, wraps Baseball Savant), OpenPose (non-commercial academic — commercial use requires CMU license).
- Category B: OpenBiomechanics Project (CC BY 4.0 + Driveline commercial addendum — commercial use PROHIBITED without written Driveline agreement), Driveline Baseball R&D datasets, academic biomechanics datasets (mostly CC BY NC), public sports research datasets.
- Category C commercial APIs: Trackman, Rapsodo, FlightScope, Catapult GPS, STATSports, Hawkeye, TRACAB (ChyronHego).
- Category D league programs: Statcast/MLBAM (mlb.com/data-partnerships), Next Gen Stats (nfl.com/data-partnerships), Second Spectrum (NBA), Sportradar, Stats Perform (Opta).
- Category E broadcast holders: NFL (CBS/Fox/NBC/ESPN + NFL Films), MLB (regionals + MLBAM), NBA (Turner/ESPN + NBA), NCAA (ESPN/Fox + conferences).
- Category F CBA bodies: NFLPA, MLBPA, NBPA, MLSPA, FIFPRO.

## Findings (numbers and facts, not vibes)
- Category B rule: "commercial use" explicitly includes ingestion into a prediction engine, inference from the data, or citing the data in commercial content — even a summary, not just raw data.
- Category C agreements must explicitly permit: ingestion into a commercial prediction engine, derivation of signals for commercial product use, and internal storage.
- Category D programs typically require application, commercial license, revenue share or per-use fees, attribution in all public content, no-raw-redistribution, and annual review/renewal — each requires owner approval before application.
- Category E: a Category D data license does NOT grant broadcast/video rights; computer vision analysis of broadcast footage requires separate broadcast authorization.
- Category F: individual biometric/wearable data ingestion needs a written legal-counsel determination on CBA consent — this cannot be self-certified.
- Every gate-approving party is the owner (plus written publisher agreement for Category B, plus legal counsel for CBA assessment).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: this is the hard legal perimeter for the total-signal program — no sports-science signal (tracking, wearables, biomechanics) may be wired until its category's commercial agreement exists; currently zero agreements exist in Categories B–E.
- OTHER: OpenPose's non-commercial academic license is a direct constraint on any CV-based film-pipeline work using it — commercial use requires a CMU license.
- OTHER: Category D's "revenue share or per-use fee schedule" and "no redistribution of raw data" clauses prefigure any future NGS/Sportradar commercial negotiation posture.

## Engine-actionable? (yes/no + one-line what)
Yes — as a gating constraint, not a signal: any sports-science/biometric/tracking data family in the wiring inventory must carry its Category B–E agreement status in the handoff before wiring begins.
