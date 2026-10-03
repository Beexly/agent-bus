# performance/play-classification-layer.md
## What it is (1-2 sentences)
Doctrinal layer governing video/CV-derived play classification for Sports OS: ML-driven classification is V3+ only and gated on broadcast licenses, while a human-reviewed editorial path (operator-entered play notes from licensed sources) can begin earlier. The core doctrine: the CV tools are open, the input video is the blocker — broadcast footage is copyrighted and using models on unlicensed footage is a violation, not a ToS gray area.
## Key metrics/methods (formulas where given, else "not specified")
- Not specified (no formulas). Structural rules instead: store labels and scores only — NEVER video frames or frame extracts; editorial notes TTL 7 days (game-specific) / 30 days (season-trend); editorial MVP adds one `PlayNote` evidence type; V3+ requires league broadcast agreement + ML inference infra separate from the Next.js app.
## Data sources named
- Open CV: YOLOv8/Ultralytics (MIT, commercial OK), MediaPipe (Apache 2.0), detectron2 (Apache 2.0), OpenPose/CMU (non-commercial academic — FORBIDDEN in production).
- Commercial video: Hudl, Catapult Video (formerly SportsTec), InStat (all team-account/subscription, no external commercial use of outputs).
- Broadcast rights: NFL Films/CBS/Fox/NBC/ESPN-ABC (NFL), Baseball Savant limited clips (MLB), NBA limited highlight embeds; raw game video analysis rights-restricted.
- Licensed-data paths: Next Gen Stats / Second Spectrum (tracking), Statcast/Trackman (radar).
- Source tiers: T1/T2 = official tracking data (program + license) / licensed broadcast analysis use; T3 = operator editorial notes from licensed source, open aggregate stats (editorial only, no ML training); FORBIDDEN = unlicensed broadcast footage, community clips (YouTube/social), re-encoded broadcast clips.
## Findings (numbers and facts, not vibes)
- Key finding (verbatim): "The computer vision tools themselves are mostly open-source. The blocking factor is the input video — broadcast game footage is copyrighted. Running YOLO or MediaPipe on NFL broadcast footage without a license agreement is a copyright violation, not just a ToS issue."
- No play classification infrastructure exists today; the editorial path is the only near-term path.
- Editorial classification types: formation, game script (run/pass tendency in down/distance/score context), matchup flag (coverage scheme vs. target pattern), pace of play. ML (V3+): pass/run classification, route classification, coverage classification, pitch type, swing type.
- Forbidden claims include: "Our AI watched the game and...", route-efficiency scores without a tracking license, any play tendency claim from social/community sources, AI-generated play notes without operator review.
- Editorial record schema required: `game_id`, `play_type`, `context` (down, distance, score differential, quarter), `source_citation`, `observation_date` (ISO 8601), `operator_id`; claim-governance required for any editorial note surfacing in pick content.
- Licensing risks graded P0: CV on unlicensed broadcast footage, community video clips ingested (mitigation: URL allowlist for authorized sources), ML training on copyrighted footage; P1: OpenPose commercial use, frame-level video storage, editorial notes citing unlicensed sources.
- Codex audit requirements: confirm no frames in any DB table; confirm all video source URLs come from an authorized allowlist; confirm OpenPose is not in any production path; report any unlicensed video source URL in the ingestion pipeline as P0.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: formation, run/pass tendency, coverage (man/zone/bracket), route-type classifications are scheme intelligence.
- COACHING: game-script context (run-heavy on 1st-and-10 in 2nd-half close games) and matchup flags feed coaching-tendency analysis.
- TRUST-SIGNAL: source tiers, license-status labeling on ML outputs, claim-governance over editorial notes, URL allowlist audits.
- OTHER: the rights/legal doctrine itself (Richardson-era backdrop is elsewhere; this doc's mechanism is license-before-analysis).
## Engine-actionable? (yes/no + one-line what)
Yes — implement the `PlayNote` evidence type (game_id, play_type, context, source_citation, observation_date, operator_id; 7/30-day TTLs) as the license-safe editorial route to human-verified run/pass and scheme-tendency intelligence, with the claim-governance scanner required before any note can surface in pick content.
