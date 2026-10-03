# dfs/research/2026-09-25/youtube-builder-research/sewer-dive-video-batch-2026-09-25.md
## What it is (1-2 sentences)
Grading of Garrett's 39 YouTube/LinkedIn links (25 batch-1 + 14 batch-2) by description + web search (transcripts were IP-blocked; page fetches 429-throttled and not retried): 8 LEARN, 17 SKIP, 4 FOLLOW-UP, 10 BLOCKED-429, with per-video methodology/datasets/track-record and ranked "top learn" kernels.
## Key metrics/methods (formulas where given, else "not specified")
Claim tags: DESCRIPTION / SEARCH / INFERENCE; verdicts: LEARN / SKIP / FOLLOW-UP / BLOCKED-429. Kernels extracted: ELO-feature leakage anti-pattern (GreenCode's 85% tennis accuracy honestly retracted); rugby series validation protocol ("seal off the last season" holdout, null-classification by league — Opta didn't collect = missing not zero, triple-verify, archive-don't-delete, promotion/relegation handling); YOLOv8 + optical-flow camera compensation + perspective transform to meters (CV tracking pipeline); deterministic replay backtesting (live and replay share one engine path); shot-feature → probability xG construction; 8rain Station CSV upload spec as a model-output contract.
## Data sources named
Jeff Sackmann's open tennis dataset (github.com/JeffSackmann/tennis...); unnamed open free API (5 req/sec) from the rugby series Ep 1 (FOLLOW-UP to identify); abdullahtarek football_analysis repo + Roboflow football dataset; Roboflow basketball/court-keypoint datasets; HuggingFace zero-shot classifier; mckayjohns youtube-videos repo (StatsBomb open data via SEARCH); edgerunner repo (github.com/akashjana18/edgerunner); 8rainstation.com/upload-spec.txt; aussportsbetting.com/data (NRL free data). License rule: verify before any code reuse (only engage8's MIT terms pre-verified).
## Findings (numbers and facts, not vibes)
- Assessed 28 of 38 unique items (37 YouTube + 1 LinkedIn); 10 BLOCKED-429 unidentified (one SEARCH lead: M6L3Gl2X7-M is a May 2025 video about AI-powered betting tools).
- TOP LEARN kernels (ranked): (1) GreenCode ELO leakage — canonical validation-hygiene anti-pattern; (2) rugby Ep 2 — seal-last-season holdout + null-classification discipline as engine data-ingestion standards; (3) abdullahtarek football CV — optical-flow + perspective-transform primitive for deriving NGS-like movement metrics from broadcast video; (4) same builder's NBA pipeline — detect→track→team-assign→court-keypoint→transform architecture; (5) Edgerunner — deterministic replay + "never invents prices" + decision journal, maps to market-microstructure/CLV lane; (6) McKay Johns xG — shot-feature construction discipline transfers to NFL metric building; (7) 8rain Station upload spec — ready-made model-output contract to study; (8) Rob Pizzola pro-model process — end-to-end process discipline from a working 2017–18 NHL pro.
- FOLLOW-UP: AWS vector-search NFL agent (resolve go.aws GitHub links), NRL $4,800 model (inspect Drive files), Alex Cupps CUPPS model (NFL draft-prospect ML from UC Riverside thesis; won "So You Think You Can Tout," 135 applicants), rugby Ep-1 API name.
- Negative facts: NO leaks (exposed keys/endpoints) observed in any fetched description; NO auditable win-loss/ROI/calibration numbers claimed by any assessed video — only unverifiable marketing claims (Linemaker "100%", WagerGPT "$6,850 in 24h", NRL "$4,800").
- Methodology coverage: descriptions only — no transcript-level methodology obtainable this run; LEARN verdicts are description-grade.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- ELO leakage anti-pattern → sealed-split/prereg discipline — TRUST-SIGNAL
- Seal-the-last-season holdout + null-classification hygiene — TRUST-SIGNAL
- YOLOv8 + optical-flow CV pipeline as NGS-replacement primitive — OTHER
- Deterministic replay + never-invents-prices + decision journal — TRUST-SIGNAL, OTHER
- xG shot-feature construction discipline for NFL metric building — TRUST-SIGNAL
- Model-output CSV contract study — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the seal-last-season holdout rule + null-classification as engine data-ingestion standards, file the GreenCode leakage case in validation-hygiene notes, and queue the four FOLLOW-UP artifacts (AWS agent link, NRL model, CUPPS thesis, rugby Ep-1 API) for transcript/artifact reads.
