# research/2026-10-01/ig-sweep/kernels-top10.md
## What it is (1-2 sentences)
A ranked list of 10 "stealable kernels" (OSINT-legal ideas/repos) from a 2026-10-01 Instagram sweep, ranked by GSE value x accessibility, plus honorable mentions. Covers 1Q NFL betting frameworks, live-betting analytics, CV metric shapes, multi-agent debate, agent fleet/memory infra, mocap repos, synthetic training data, and a $0 knowledge stack.
## Key metrics/methods (formulas where given, else "not specified")
- 1Q NFL framework: scripted-play decay ("The Script"), 1Q scoring shape ("The Stop"), "1Q Math: 20% of scoring, 37% of home edge; key numbers 0/3/4/7".
- Live-betting structure: Lag Check / Overshoot / Chase Test; thesis "books do clock arithmetic, not game-watching".
- fieldcoachai CV metric-shape target: break angle 92 degrees, separation at break 2.1 yards, separation at catch 1.4 yards.
- Multi-agent debate mechanic: bull/bear/researcher debate (from TradingAgents).
- Synthetic Blender training data ("Lot Vulture" method) for play segmentation, replay discrimination, field calibration.
- $0 knowledge stack: Docling (MIT) -> Qdrant (Apache-2.0) -> WeKnora (license review) -> PocketBase (MIT) -> Crawlee (Apache-2.0).
- Honorable mention: comment-gate funnel mechanic at 3.2K likes / 6.4K comments (@seb.ai).
## Data sources named
Public Instagram posts, GitHub API verification, repo READMEs. Named repos: TradingAgents (TauricResearch/TradingAgents, Apache-2.0, 109k stars), paperclip (paperclipai/paperclip, MIT, 95k stars), hindsight (vectorize-io/hindsight, MIT, 44k stars), InstantHMR (mohamdev/InstantHMR, Apache-2.0, single ONNX file), SAM 3D Body (facebookresearch/sam-3d-body; code Apache-2.0, weights under Meta SAM License - caution), @thelocktalk (1Q/live frameworks), @simplifyinai ("Lot Vulture"), @syntaix.ai ($0 stack), @seb.ai (comment-gate). Honorable: TypeLLM, Scenario skills, motion-skills, OpenWhispr, Google Trends category-drill SEO, CourtListener free legal API.
## Findings (numbers and facts, not vibes)
- 1Q NFL: 20% of scoring occurs in 1Q; 37% of home-field edge attributed to 1Q; key numbers 0/3/4/7.
- CV target shape: break angle 92 degrees, 2.1 yd separation at break, 1.4 yd separation at catch.
- Repo popularity: TradingAgents 109k stars, paperclip 95k stars, hindsight 44k stars.
- Licenses: TradingAgents Apache-2.0, paperclip MIT, hindsight MIT, InstantHMR Apache-2.0, SAM 3D Body code Apache-2.0 / weights Meta SAM License (flagged caution).
- Comment-gate funnel example: 3.2K likes / 6.4K comments.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 1Q NFL scripted-play decay and home-edge shape -> SCHEME (formation/script tendencies) and COACHING (scripted opening sequences are a coaching decision).
- Live-betting "Lag Check / Overshoot / Chase Test" -> OTHER (in-game prediction lane design; supports CV watch-loop differentiation thesis).
- CV metric shape (break angle, separation) -> OTHER (film-pipeline derived-metrics spec, post-homography).
- Multi-agent bull/bear/researcher debate -> OTHER (GSE ensemble debate for picks).
- Agent fleet/spend-cap + agent memory -> OTHER (agent-bus fleet management layer, cross-agent learning memory).
- 3D pose/mesh mocap (InstantHMR, SAM 3D Body) -> OTHER (content lane + film pipeline evaluation).
- Synthetic Blender training data -> OTHER (solves CV hand-labeling gate for play segmentation/replay discrimination/field calibration).
## Engine-actionable? (yes/no + one-line what)
Yes - 1Q spread/total micro-model in props lane validated against nflverse; ensemble-debate mechanic for picks; synthetic-data method to unblock CV hand-labeling.
