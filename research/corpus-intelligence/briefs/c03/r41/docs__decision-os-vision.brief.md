# docs/decision-os-vision.md
## What it is (1-2 sentences)
The Galaxy Sports Edge "Decision-Intelligence OS" north-star vision doc (captured 2026-06-04) describing GSE as "Mission Control for sports decisions" — live data → signal detection → evidence debate → decision → autopsy → calibration loop — plus the built/cinematic surfaces and the remaining roadmap.
## Key metrics/methods (formulas where given, else "not specified")
- Decision Autopsy process×outcome grading matrix: Earned / Respected / Lucky / Corrected ("we grade the thinking, not the scoreboard")
- Parlay MRI (BUILT, /parlay-mri): ticket vitals — survivability, headline vs fair payout, EV, compounded house edge, same-game correlation — illustrative default reads −20.8% EV; paring to the lone value leg → +5% / Balanced
- Academy Simulator ranks: Observer → Scout → Analyst → Market Reader → Signal Architect → Galaxy Certified (calibration, not streaks)
- Signal Courtroom primitive: Claim · Prosecution (evidence) · Defense (counter-evidence) · Judge (falsifiers + what would flip it) · Verdict (incl. NO-BET) · qualitative confidence · freshness
- Bias Mirror: 7 self-rated tendencies (loss chasing, favourite bias, No-Bet discipline, over-parlaying, emotional timing, narrative pull, risk-flag blindness), computed on-device, privacy-first
- Slate Twin encodings: core brightness = signal density, halo = volatility, orbit wobble = contradiction mass, confidence ring = confidence, colour = verdict; public-money gravity distortion; sharp-vs-public divergence tug-of-war
- Integrity guardrails (binding): no fake data, no fabricated track record (performance numbers gated behind calibration readiness), No-Bet equal to Play, qualitative confidence until earned
## Data sources named
Live data readiness gate (getReadinessGates().canExposePublicPicks); demo/illustrative data labelled illustrative:true; real games mapped with verdict/grade, confidence, bookmaker consensus, market depth, opening→current line movement, odds dispersion; public/sharp ticket-vs-handle source NOT yet available (explicitly not fabricated)
## Findings (numbers and facts, not vibes)
- Built: CinematicEntrance (~9s first visit, ~3s return, Skip), Signal Courtroom, Decision Autopsy, Parlay MRI, Bias Mirror, Galaxy Slate Twin (demo data labelled, live-wired behind readiness gate), Agent War Room (8-agent council: Line Movement, Sharp Pressure, Public Bias, Injury Freshness, Matchup, Model Disagreement, Narrative Signal, Responsible Decision), Trust Ledger (real SHA-256 Merkle proof-of-record demo, tamper-evident LOSS→WIN flip detection), GSN daily transmission, Academy Simulator
- Roadmap remaining: 4D Market Time Machine; Bet Autopsy + Calibration Engine (needs settled-result pipeline); WebGPU progressive enhancement; WebXR later
- Trust Ledger: real merkleRoot/inclusionProof/verifyInclusion from @sports/prediction-engine surfaced live; next: commit real roots at lock time + /api/proof endpoint
- Nav reorg done: 9 flat items → 5 (Today's Board · Edge Map · Intelligence ▾ · Methodology · Pricing)
- Domain model target: Sport → League → Slate → Game → Team → Player → Market → Book → OddsSnapshot → Source → Signal → ModelRun → Evidence → CounterEvidence → RiskFlag → Recommendation → DecisionState → UserAction → Autopsy → CalibrationResult as a connected graph
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The falsifier-per-signal doctrine ("what would flip it") is the strongest engine TRUST-SIGNAL pattern: every signal carries counter-evidence and a kill condition [TRUST-SIGNAL]
- Parlay −20.8% EV default vs +5% on the lone value leg is quantified compounding-house-edge evidence supporting the singles/parlay stance [OTHER]
- Autopsy process×outcome matrix (Earned/Respected/Lucky/Corrected) is the grading taxonomy for the engine's own results — restraint rewarded, lucky wins flagged [TRUST-SIGNAL]
- No QB-BEHAVIOR/COACHING/OL/SCHEME content in this file [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — require every generated pick to carry a falsifier condition and counter-evidence field so the engine's outputs implement the Signal Courtroom verdict pattern.
