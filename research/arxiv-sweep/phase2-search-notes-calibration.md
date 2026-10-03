# Phase 2 Search Notes — Calibration + Ratings Cluster

Date: 2026-09-21. Worker: calibration-cluster searcher. Exclusion list: `phase2-excluded-ids.txt` (1,729 IDs; base IDs stripped of vN compared).

## Queries run (14, via arXiv API `all:` field, sortBy=relevance, max_results=200 each)

1. conformal prediction sports forecasting — 200 raw
2. probability calibration sports — 200 raw
3. isotonic regression calibration — 200 raw
4. Platt scaling beta calibration — 200 raw
5. proper scoring rules Brier CRPS — 200 raw
6. reliability diagrams distributional forecasting — 200 raw
7. quantile regression prediction intervals sports — 200 raw
8. Elo rating variants sports prediction — 200 raw
9. Glicko TrueSkill rating systems — 200 raw
10. Bradley-Terry paired comparison — 200 raw
11. PageRank sports ranking strength of schedule — 200 raw
12. margin of victory home advantage modeling — 200 raw
13. conformalized quantile regression uncertainty — 200 raw
14. sports rating system college basketball football — 200 raw

Total raw hits: 2,800. Polite crawling observed (3 s sleep between requests; one
connection drop recovered with backoff retry; raw XML cached per query).

## Filtering pipeline

- 221 skipped: base ID in exclusion list
- 7 skipped: title/abstract matched junk patterns (tutorial/survey/handbook/withdrawn)
- 1,601 rejected by relevance gate: required (a) real method content — a METHOD
  term in title or ≥2 in abstract — AND (b) relevant context — sports term or
  forecast/probability/uncertainty context in title+abstract
- 49 dropped manually as off-domain/marginal after title+abstract review:
  camera/vision calibration (visual, not probability), quantum scoring rules,
  survival/competing-risks subfield (6 papers), medical imaging, surgical
  trajectories, robot motion, telecom channels, chip monitors, steel fatigue,
  LLM tool-calling diagnostics, LLM prompt tournaments, labor-market rating
  systems, content moderation, road networks, social-network PageRank,
  citation analysis, cosmology instruments, valuation surveys, tutorials
- 17 more marginal drops in the final pass (social-network PageRank, citation
  quantile regression, physics temperature quantile, time-to-event survival
  comparisons, medical polyp segmentation, weighted Brier for clinical risk,
  differential-evolution paired comparisons, random-matrix paired comparisons,
  particle-swarm PageRank, seeded PageRank, metro road-network PageRank,
  21-cm cosmology calibration, customer-review rating systems, AV trust
  calibration, LLM-eval Polyrating, Elo-rated RL rewards, quantile martingale
  posteriors — pure theory)
- Kept: score ≥ 9 (3×title method-term hits + abstract method hits + 5×sports
  context flag + 1×forecast-context flag), manual review of every kept title

## Final kept count: 149

Output: `~/workspace/arxiv-sweep/phase2-candidates-calibration.jsonl` (149 lines,
one JSON object per line, deduped by base ID; no excluded IDs; schema verified).

## Coverage highlights (what the 149 look like)

- Conformal prediction: new methods with real-data experiments (CQR variants,
  conformalized quantile regression, flow-based conformal predictive
  distributions, CRPS-optimal binning, temporal/online conformal for time
  series, conformalized selective regression — directly relevant to
  pick-selection/abstention)
- Probability calibration: Platt/isotonic/beta/temperature-scaling variants,
  reliability diagrams + score decompositions, recalibration of forecasts,
  uncertainty-aware post-hoc calibration
- Scoring rules: proper scoring theory (local, weighted, second-order),
  Brier/CRPS learning and evaluation, elicitability, performative-prediction
  scoring, forecast-verification decompositions — incl. the football RPS critique
  (1908.08980v1) and CRPS Learning (2102.00968v3)
- Ratings: Elo theory (Markov chains, axiomatization, self-justifying Elo),
  Elo variants (G-Elo with margin of victory, drift-diffusion Elo, Elo for
  games of chance), CS:GO/LoL skill ratings, UEFA Elo club coefficients,
  Bradley-Terry extensions (covariates, ties, order effects, intransitivity,
  ridge/LS estimation), PageRank variants for tennis/basketball/soccer/hockey,
  paired-comparison ranking methodology
- Sports-specific standouts: "Evaluating probabilistic forecasts of football
  matches: The case against the Ranked Probability Score", "Match forecasts in
  UEFA club competitions: Elo ratings versus Transfermarkt valuations",
  "Bayesian estimation of in-game home team win probability for Division-I FBS
  college football", "Capturing Intransitive Dominance in Tennis Forecasting: A
  Graph Neural Network Approach", "Beyond Winning: Margin of Victory Relative
  to Expectation Unlocks Accurate Skill Ratings"

Caveats: a few foundational-theory papers are kept (Elo axiomatization, local
proper scoring rules, expert-advice Brier game) because they directly inform
engine design; triage agents can route them to theory-only reads if needed.
The "Glicko/TrueSkill" query mostly surfaced non-sports papers (embodied AI,
medical imaging) — few kept; Glicko/TrueSkill sports literature may genuinely
be thin on arXiv, mostly in blog/GitHub form. The margin-of-victory query was
low-yield (parquet-equation false positives); its best finds came via the
Elo/BT queries.
