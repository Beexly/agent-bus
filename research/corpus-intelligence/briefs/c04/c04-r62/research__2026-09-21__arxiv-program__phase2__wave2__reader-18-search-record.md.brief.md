# docs/research/2026-09-21/arxiv-program/phase2/wave2/reader-18-search-record.md
## What it is (1-2 sentences)
A search log from Reader 18 of the arXiv-750 program (phase 2, wave 2, 2026-09-21): a sports-CV replacement search that ran 6 arXiv API queries to replace 12 duplicate assignments, banking exactly 12 fresh sports action-recognition / pose-estimation / sports-video-understanding papers into ledger slots 1030–1041.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Process metrics only: 6 queries run (max_results=30, sortBy=relevance), 12 fresh candidates banked, 13 duplicates skipped total (9 prior + 4 this pass), 4 non-dedup rejections (1512.07502 obsolete; 2003.14109 camera pose off-topic; 2503.18282 tracking-focus excluded; 2311.12300 infant action off-topic); one query (Q3) failed on a 404 endpoint error and was retried successfully after correcting to `api/query`.
## Data sources named
- arXiv export API (search endpoint; `all:`/`ti:` query syntax; corrected endpoint `api/query`)
- Assignment file: `~/workspace/arxiv-sweep/phase2-assignments/assign-18.jsonl` (12 records, all duplicates per done-ids.txt check, 1,493 IDs)
- Ledgers: `phase2/wave2/ledgers/`, prefixes 1026–1049, reconfirmed unused; quarantine files `1028-google-research-football-rl-environment.md` and `1029-node-classification-integrated-reject-option.md` preserved untouched
## Findings (numbers and facts, not vibes)
- 12/12 fresh candidates banked via the replacement chain (duplicate → fresh, ledger 1030–1041): 2012.00253 (action recognition framework for highlights summarization), 2109.01305 (Video Pose Distillation, ICCV'21), 2404.19383 (CFSC skeleton fencing), 2503.04470 (Gate-Shift-Pose), 2403.12385 (badminton fine-grained benchmark), 2304.04437 (monocular 3D HPE for broadcasts via partial field registration, CVsports'23), 2411.06725 (GTA-Net IoT posture correction), 2503.07499 (AthletePose3D benchmark), 2104.11452 (SportsCap), 2109.14306 (three-stream 3D/1D CNN table tennis), 2301.13576 (Sport Task table tennis), 1912.04465 (SoccerDB, canonical 2019 large-scale sports video dataset).
- De-prioritized/skipped even though fresh: 2608.19646 (PL-NBA basketball dataset), 2607.21267 (BasketEvent), 2407.08200 (soccer video understanding), 2412.01820 (universal soccer video understanding) — basketball datasets deprioritized vs soccer canonical; LLM-eval papers (2406.14877, 2509.11796) skipped as not CV.
- 2609.10615 (generic retail-pricing abstention paper) was fully read by mistake (6,045 lines) but INVALID per correction — abandoned, no ledger, no count, not added to done-ids.
- Scope rules documented: player tracking / multi-object tracking excluded as the paper's focus (2503.18282 excluded); eligible only = sports action recognition, sports pose estimation, athlete action classification, human pose sports analytics.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Broadcast-footage CV methods (Video Pose Distillation, skeleton GCN cascade, RGB+pose fusion, monocular 3D HPE from sports broadcasts, SoccerDB-scale video understanding) as inputs for the GSE computer-vision / motion-analytics lane → OTHER (CV/tooling provenance for future engine work, not QB/coaching/OL behavioral content).
- Replacement-chain map gives exact ledger IDs 1030–1041 and the full dedup/rejection audit trail → OTHER (program integrity record).
- Table-tennis fine-grained stroke classifiers (2301.13576, 2109.14306) noted as "exact GSE-adjacent technique" — transferable fine-grained action classification method, not QB behavioral per se → OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — ledger IDs 1030–1041 are the pointer list for which sports-CV papers the intake program banked for the motion-analytics/CV lane; wire the reader assignment → ledger mapping into the corpus catalog.
