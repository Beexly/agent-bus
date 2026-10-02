# research/2026-10-01/cv-corpus/deep-dive-corpus-remainder.md
## What it is (1-2 sentences)
Brief reads of sources 6, 7, 10–21 from the 29-item CV drop — a triage pass over industry/competitive material (NGS pose-estimation architecture, AWS Digital Athlete rig, NFL+AWS AI challenges, Genius Sports/HuddleVision/ZeroEyes competitive intel, plus gated/unresolvable sources). Concludes nothing changes the top-kernel ranking; value is in strategic ceilings and scale references.

## Key metrics/methods (formulas where given, else "not specified")
- Next Gen Stats architecture (Amazon Science): RFID chips in every shoulder-pad set + inside the football; 20+ UWB receivers per stadium; players tracked at 10 Hz, ball at 25 Hz, accurate "to a few inches". Optical tracking: 4K cameras, 16 angles per venue, x/y/z for 29 body parts per player at 60 fps — first year of full installation, data internal while validated. Pipeline budget: on-site processing ~700 ms + cloud ML <100 ms → capture-to-analysis under 1 second. Portfolios: 75+ ML models; completion probability (2018, XGBoost on SageMaker; inputs: QB pressure, throw depth, receiver separation, sideline proximity); tackle probability (speed, angle, distance, leverage, pursuit at contact); defensive alerts (acceleration patterns + presnap shifts + down/distance/game state → generative-AI rusher prediction). No formulas given beyond method inputs.
- AWS Digital Athlete rig: 38 synchronized cameras in a ring per stadium, 5K video at 60 fps; ~6.8M video frames/week, ~100M player locations/positions documented per week; practices: 15,000 miles of tracking/week ≈ 500M+ data points (10 Hz). Method: teach AI helmets → helmet impacts → cross-reference with NGS data to determine players involved; 3D pose estimation in development.
- NFL+AWS AI Challenge (2021 player-ID challenge): built on prior impact-detection competition with ~7,800 submissions; 1,000+ analysts from 65 countries; $100K total purse — Kippei Matsuda (Osaka) $50K, Takuya Ito (Tokyo) $25K, 3rd/4th/5th $13K/$7K/$5K. Winners' models automate injury review "more comprehensive, accurate and 83 times faster than a person conducting the analysis manually."

## Data sources named
- NFL Next Gen Stats (RFID + UWB); AWS Digital Athlete camera rig (38-camera, 5K@60fps); NFL Gamepass footage context via Sloan/Kaggle lineage; Kaggle competition nfl-health-and-safety-helmet-assignment; Genius Sports NFL Official League Data (incl. NGS); HuddleVision (proprietary, no method detail); Tracking Football COM™/PAI®/MPH metrics; safetyact.gov registry (Evolv, ROC Watch, stadium programs: Raymond James, Rate Field, Northwest Stadium, Empower Field); Mercury Security 2026 access-controller report (561 professionals; 32% say cybersecurity features missing vs 21% prior year). Two sources unreadable: Stellantis Hub Wonderlic story (URL unresolvable — tangential anyway); Policy Commons "How the NFL is using AI to evaluate players" (403 ×2, gated); x.com/GeniusSports (no read path, gated); YouTube tIDJDkRTRPQ "AWS re:Invent 2020: How the NFL builds computer vision training datasets at scale" (title verified via oEmbed, content unverified — recommended follow-up: find transcript); PMC13471965 confirmed wrong link (ALS paper, not sports).

## Findings (numbers and facts, not vibes)
- NFL's capture-to-analysis pipeline budget is ~700 ms on-site + <100 ms cloud ML = under 1 second, with ~2s broadcast delay making it effectively real time — a latency bar to cite for any real-time GSE tracking claim.
- The NFL's stated end-goal is hybrid: RFID center-of-mass + optical skeleton, algorithms filling gaps when players occlude each other; the broadcast-only GSE equivalent named in the file is motion-continuity + OCR re-ID.
- Dynamic kickoff numbers (2025): return rate 75% (from 32% in 2024); 1,157 more plays; lower-extremity injuries down 35%; concussions below the old format.
- RYOE reached broadcast from the 2020 Big Data Bowl winning solution in <10 months.
- 83×-faster-than-human is the automation benchmark from the NFL+AWS AI challenge winners.
- 93 of the top 100 US broadcasts in 2023 were NFL (Genius Sports context).
- HuddleVision product bundle confirms the commercial shape: field registration + detection/tracking + speed/acceleration extraction from game footage, with fine-tuning on client footage — exactly what GSE's open pipeline mirrors; no pricing published.
- Competitive lane only: Genius Sports BetVision (low-latency betting stream + wager + stats); HuddleVision; ZeroEyes (AI firearm/knife detection on venue CCTV, UK expansion — different lane from field tracking).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Sub-second pipeline budget (700 ms + 100 ms) as the latency bar for real-time GSE tracking claims — an engineering standard, not a behavior signal.
- [OTHER] Hybrid-identity doctrine (RFID center-of-mass + optical skeleton + gap-filling): informs tracking architecture; broadcast equivalent is motion-continuity + OCR re-ID.
- [TRUST-SIGNAL] XGBoost-based completion-probability model (QB pressure, throw depth, receiver separation, sideline proximity) and tackle-probability model (speed, angle, distance, leverage, pursuit) are the public-model baselines GSE competes against — trust calibration should benchmark against these, not reinvent them.
- [COACHING] "Teach helmets, then impacts, then cross-reference with tracking" sequencing — a curriculum metaphor for the CV pipeline (detect → associate → identify); defensive-alert presnap-shift modeling is a presnap tendency signal class worth noting for tendency layers.
- [OTHER] Competitive intel: HuddleVision's "field registration + detection/tracking + speed" bundle defines the commercial product shape GSE mirrors.
- [QB-BEHAVIOR] INFERENCE — none directly; no QB-specific behavioral metrics in this file.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the 700 ms + <100 ms sub-second pipeline budget as the documented latency bar for GSE's tracking pipeline, and use the hybrid-identity doctrine (anchor-based continuity + OCR re-ID gap-filling) as the broadcast-equivalent tracking architecture.
