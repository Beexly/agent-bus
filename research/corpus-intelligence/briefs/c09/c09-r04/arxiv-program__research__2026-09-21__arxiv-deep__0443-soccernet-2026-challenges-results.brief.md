# arxiv-program/research/2026-09-21/arxiv-deep/0443-soccernet-2026-challenges-results.md
## What it is (1-2 sentences)
The sixth annual SoccerNet challenge-results report (arXiv:2607.07320v1, Cioppa et al. 2026): leaderboard snapshots for five soccer broadcast-video tasks (ball-action anticipation, player-centric action spotting, novel view synthesis, athlete localization, VQA) with winning-submission summaries; Motif verdict REJECT — no transferable method, metric, or dataset for GSE's quantitative NFL engine.
## Key metrics/methods (formulas where given, else "not specified")
- No proposed method. Evaluation metrics defined: BAA mAP_avg = average of mAP@δ over δ∈{1,2,3,4,5,∞}; PCBAS macro-F1@0.15 (TP if within ±12 frames and class+team+jersey match); NVS ranked by PSNR (SSIM/LPIPS reported); Synloc mAP-LocSim with LocSim = e^{ln 0.05 · d²/τ²}, τ=1m, plus frame accuracy; VQA accuracy = #Correct/500 × 100%
- Winning systems summarized: FAANTRA-WS (RegNetY-GSF + FUTR transformer), PAVE (per-player attention ensemble), DENSER (depth-guided 3DGS ensemble), SELabSoccer (adaptive tiling + RTMPose-X), vitomeme (task-routed Gemini-3.1-Pro VQA)
## Data sources named
SoccerNet.org open-research datasets: SN-BAA (English Football League clips), FOOTPASS (action spotting w/ team+jersey), NVS (synthetic Blender scenes), Spiideo SoccerNet Synloc (static 4K half-pitch images + calibration), SoccerBench/SoccerWiki + SoccerReplay-1988 + MatchTime + SoccerNet-v2/v3 + Captions + XFoul
## Findings (numbers and facts, not vibes)
- BAA: winner FAANTRA-WS mAP_avg 24.08 vs baseline 16.76 (+7.32 pts); 9 teams, 68 entries
- PCBAS: winner PAVE macro-F1@0.15 58.94 vs baseline 46.41 (+12.5 pts); Tackle (rarest class) lowest across all submissions; 6 teams, 124 submissions
- NVS: winner DENSER PSNR 29.89 / SSIM 0.791 / LPIPS 0.388 vs 3DGS baseline 26.74 / 0.751 / 0.410 (+3.15 dB); 65 teams, 95 submissions
- Synloc: winner SELabSoccer mAP-LocSim 97.67, frame accuracy 81.91 vs baseline 77.30 / 33.74 (+20.4 pts); 88 teams, 171 submissions
- VQA: winner "vitomeme" 98.0% accuracy on 500 questions (their report describes 97.6% on test split); random 25.0
- Scale: 427 teams, 1,129 entries across 5 tasks, 28 reviewed technical reports; leaderboards include only teams with reviewed reports (incomplete ordering)
- Reader's notes: two reporting discrepancies flagged (NVS winner LPIPS 0.388 in Table 3 vs 0.366 in supplementary prose; VQA 98.0% leaderboard vs 97.6% report) — numbers self-reported, lightly copy-edited; VQA near 98% suggests benchmark saturation or web-grounded retrieval rather than video reasoning
- Recurring themes: higher input resolution, larger/ensembled models, careful calibration, explicit domain structure (camera geometry)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: None for the quantitative engine — soccer broadcast-video understanding only; conceivable future connection is automated highlight clip-spotting for the video lane, currently parked under the traffic-first rule
## Engine-actionable? (yes/no + one-line what)
No — challenge-results report on soccer video understanding with no transferable method, metric, or dataset for the NFL pick engine; video-understanding has no active or planned role in the corpus
