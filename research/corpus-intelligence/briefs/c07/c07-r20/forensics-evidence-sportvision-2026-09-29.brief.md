# engine/research/2026-09-29/forensics-evidence-sportvision-2026-09-29.md
## What it is (1-2 sentences)
Patent forensics (verified on Google Patents + contemporaneous press) of the six Sportvision/FOX telestration-family patents (yellow first-down line, glowing puck, jump height, radar bat speed, color-blending compositing, remote graphics) — all expired by normal 20-year term (2017–2019), with claim-scope analysis for what is now free to re-implement for broadcast-video graphics.
## Key metrics/methods (formulas where given, else "not specified")
Claim-by-claim plain-English scoping: what each patent covered vs. did NOT cover. Key quantitative details: US7075556 filed 1999-10-21, granted 2006-07-11, expired 2019-10-21 (Bezier-spline stroke smoothing, claim 23); US6466275 required camera sensors (40,000-count optical encoders, pan/tilt/zoom/roll/focus/extender) with repeated periodic re-registration (claims 5, 10, 30); US6292130 claims detection+detection "within 5 seconds" (claim 9), six-radar behind-the-plate install; US6133946 operator-in-the-loop pointing, two-camera triangulation via closest-approach of rays (claim 1), single-camera pixel→height lookup table (claim 37); US6229550 per-pixel/per-polygon alpha blending with inclusions/exclusions and taper zones (claims 16–26). No predictive formulas; analysis is legal/technical scoping.
## Data sources named
Google Patents; SportsBusiness Journal (2002 cross-licensing settlement); Sports Video Group (2018 SMT Super Bowl LII coverage); Bleacher Report (>$25M acquisition price); Harvard JOLT digest (SMT vs MLBAM PITCHcast/Statcast suit over US7,341,530).
## Findings (numbers and facts, not vibes)
- All six patents expired by normal 20-year term (2017–2019), no fee lapse/abandonment; assignments diligently maintained.
- Sportvision (Chicago) was acquired 100% by SMT, deal closed 2016-10-04; all six patents assigned to Sportsmedia Technology Corp 2017-03-17; reported price >$25M; SMT held ~70 Sportvision patents (PITCHf/x, RACEf/x, 1st & Ten).
- Continuations show telestration R&D ran to ~2010 (US7492363B2 filed 2005, US7750901B2 2009, US7928976B2 2010).
- Single most important re-implementation limitation: calibration/registration fragility — instrumented cameras with continuous re-registration, plus colorimetry-based blending that breaks under weather/lighting/uniform-color collisions.
- Critical exclusion: sensor-free image-recognition implementations were never blocked — PVI's L-VIS (sensorless) approach remained after the 1999–2002 cross-licensing settlement; SMT's ISO Track uses image-based tracking today.
- Supersession: PITCHf/x replaced by Statcast (TrackMan + ChyronHego) in 2017; NFL Next Gen Stats via RFID chips is a sensor paradigm this family never covered.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SMT still runs the 1st & Ten line on SNF/TNF/SkyCams plus "backwards-pass line, route painting, Next Gen Stats overlays" (2018) — route painting is directly relevant to GSE video lanes — SCHEME.
- Sensorless (image-recognition) approaches validated by the litigation history — an unblocked technical lane for GSE broadcast-footage work — OTHER (legal/technical clearance).
- No QB-BEHAVIOR, COACHING, OL, or TRUST-SIGNAL content.
## Engine-actionable? (yes/no + one-line what)
No — intake-only; records the expired-patent landscape and the design-around guidance (image-based match-moving/segmentation, no stadium hardware) for any future GSE video-graphics work.
