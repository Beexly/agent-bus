# performance/biomechanics-modality-taxonomy.md
## What it is (1-2 sentences)
The Sports OS classification reference for all five biomechanics data modalities (physical/kinetic, radar/ball-flight, positional tracking, video/CV, health/participation), defining each modality's data formats, sources, evidence-tier ceiling, licensing requirements, and admission gates. It is doctrine: no modality may be implemented without its licensing and approval requirements.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Freshness TTL defaults: injury status 4 hours; velocity trend over last 5 starts 24 hours; positional tracking season aggregate 7 days (owner may tighten, never loosen without documented justification). Evidence tiers: T1 (official/public) through T5 (social speculation — FORBIDDEN as evidence).
## Data sources named
OpenSim, BiomechanicsToolkit (BTK), ezc3d, C3D format, Trackman, Rapsodo, FlightScope, Statcast/Baseball Savant, Second Spectrum (NBA), Next Gen Stats (NFL), ChyronHego TRACAB (soccer), Hawkeye (tennis/cricket), OpenPose, MediaPipe, YOLO player detection, Hudl, Catapult, STATSports, Whoop, AMTI force plates, Vicon, OpenBiomechanics Project, Driveline R&D, official league injury reports (NFL.com/NBA.com/MLB.com), AP/Reuters wires.
## Findings (numbers and facts, not vibes)
- Five modalities registered: (1) Physical/kinetic — ceiling T3 (research)/T2 (commercial wearable with license), use case internal context only, never primary pick evidence; (2) Radar/ball-flight — ceiling T1 public Statcast aggregate/T2 licensed, MLB pitch velocity trend and bat/exit velocity signals; (3) Positional tracking — ceiling T1 (official league program)/T2, requires league enrollment or commercial license; (4) Video/CV — ceiling T2 (licensed)/T3 research-tool outputs; (5) Health/participation — ceiling T1, the only MVP-ready modality, official league injury reports need no license.
- Cross-modality rules: every modality cited in one pick must independently meet its tier floor; attribution must name exact modality+source; forbidden claims table (e.g., claiming biomechanics data without license is a P0 fabrication violation under Rule U5).
- MVP path: Phase 1 = health/participation only via official T1 feed; Phase 2 = Statcast public aggregate after legal review; Phase 3+ = separate owner approval cycles per remaining modality.
- Licensing risks: OBP/Driveline commercial use without license = P0; Statcast commercial terms violation = P1; video rights without operator review = P1.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the tiered evidence admission system and forbidden-claims table are the engine's public-credibility guardrails; injury-status as primary actionable signal (T1) is a TRUST-SIGNAL for pick explanations.
- OTHER: COACHING/OL-adjacent signals (mechanical efficiency, workload flags, player load) live in modalities 1/3/4 but are Phase 3+ and owner-gated, so not currently ingestible.
## Engine-actionable? (yes/no + one-line what)
yes — implement the official-injury-report T1 feed first (MVP-ready, 4-hour TTL), gate every other modality on license verification per the admission gates before any pick explanation cites it.
