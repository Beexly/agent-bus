# arxiv-program/research/2026-09-21/arxiv-program/phase2/WAVE2-SUMMARY.md
## What it is (1-2 sentences)
Wave 2 summary of the arXiv-750 deep-research program: 10 readers produced 120 valuable papers (119 ADAPT + 1 ADOPT) across ledgers 0858–1089, moving the phase-2 tracker from 485 to 605 with 145 still needed to reach 750.
## Key metrics/methods (formulas where given, else "not specified")
- 120 valuable papers (119 ADAPT + 1 ADOPT); tracker 485 → 605; 145 remaining to 750.
- Lane totals: calibration 21, markets 20, tracking 19, ratings 15, abstention 15, win_spread_total 10, props_dfs 9, nlp 4, weather 4, bayesian 3.
- REJECT accounting: 9 REJECTs not counted (reader 12: 2504.09499, 2512.18858, 1508.06773, 2401.11016, 1211.5037, 2409.13528; reader 20: 1610.06833v1, 1806.10648v2, plus reserve-chain 2207/tvcalib) — every REJECT replaced with a completed ADAPT ledger.
- Standout formulas/findings: self-affirmation feedback model p(n)=p₀κⁿ beat GEV on World Cup scores; conformal reject option singleton error rate σ=(ε−P(E))/P(S) (same certification-bug class as GSE's cqr.ts); monocular 3D pose from broadcast via partial field registration at 6.41 cm vs MeTRAbs 10.33 cm; 3D Player Pressure Map → 78.7% possession-outcome accuracy vs 55.8% tracking-only; shortest prediction intervals are non-elicitable (Thm 4.16).
- Integrity checks: done-ids.txt anomaly (1,493 IDs, now 1,542 after 49 genuine appends); orphan ledgers 1026/1027 (uncounted, removed); reader 16's 0982–0989 and reader 19's 1050–1061 restructured by repair workers (content preserved).
## Data sources named
arXiv papers (specific IDs listed above); reader wave reports; `arxiv-program/state/ledger-tracker-750.jsonl`; ledgers in `docs/research/2026-09-21/arxiv-deep/`.
## Findings (numbers and facts, not vibes)
- 120/120 wave-2 slots completed with ADAPT ledgers; zero REJECTs counted toward the target; 0 remain blocked (reader 15's 3 BLOCKED recovered via direct PDF fetch).
- 0955 (the wave's only ADOPT): next-gen-scraPy extracts NFL tracking data from images.
- Reader 12 required 14 duplicate skips + 6 REJECTs, all replaced; reader 16/18/19 had all-12-assigned duplicates replaced with fresh dedup-checked papers (reader 18's were fresh sports-CV replacements normalized from `sports_CV (action_recognition/pose)` to `tracking`).
- Reader 20's 1079 (auxiliary ADAPT) exists as a ledger but is NOT in the tracker — disqualified from the count.
- Post-read verification: all 120 ledgers have every required section with exactly one `## Limitations`, one `## Verdict`, and report-matching verdicts.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: REJECT/replacement accounting with zero counted toward the target; repair-worker normalization of ledger format; done-ids.txt anomaly investigation — all model honest research accounting.
- OTHER: standout findings (NFL tracking extraction from images, 3D pressure map, conformal reject option) are direct engine research inputs.
## Engine-actionable? (yes/no + one-line what)
Yes — the six standout findings (esp. NFL tracking-from-images extraction, 3D pressure map features at 78.7% vs 55.8%, conformal reject option σ=(ε−P(E))/P(S) matching GSE's cqr.ts bug class) are directly transferrable research leads.
