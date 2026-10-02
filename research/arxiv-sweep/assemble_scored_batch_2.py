#!/usr/bin/env python3
"""Assemble scored_batch_2.jsonl in original batch_2.jsonl order."""
import json

BATCH = '/home/hatch/workspace/arxiv-sweep/batch_2.jsonl'
REST = '/tmp/rest2.json'
OUT = '/home/hatch/workspace/arxiv-sweep/scored_batch_2.jsonl'

# Report-preserved score-3 IDs -> rationale
S3 = {
    '2607.14430': 'Report score 3: GSE 25% Kelly sizing with shrinkage and dynamic risk management for time-varying win-probability models — directly implements bankroll growth under estimation error.',
    '2602.07030': 'Report score 3: NFL tracking-data study quantifying how receiver separation drives QB passer rating, with full tracking-data methodology and GSE feature-application spec.',
    '2511.03732': 'Report score 3: Kelly criterion deep research under estimation error, covering fractional/half-Kelly, drawdown risk, and the GSE stake-sizing roadmap.',
    '2506.03335': 'Report score 3: Real-time player tracking and collision prediction for automated NFL officiating, with GSE injury-risk and officiating-prop applications.',
    '2402.06815': 'Report score 3: Deep learning for sports-betting odds movement, reviewed with backtests and GSE live-odds-engine application.',
    '2309.15253': 'Report score 3: Elo ratings for NFL 2002-2016 with k-factor dynamics, home-field advantage, and GSE calibration plan.',
    '2105.08310': 'Report score 3: Bayesian hierarchical spread and over/under modeling reviewed against GSE\'s engine.',
    '1902.07378': 'Report score 3: NFL player-tracking data pipeline review with GSE tracking-dataset mapping.',
}

# Report-preserved score-2 IDs -> rationale
S2 = {
    '2608.25940': 'Report score 2: GSE model confidence, entropy, and calibration review — probability calibration for engine confidence intervals.',
    '2607.08725': 'Report score 2: Monte Carlo simulation of the NFL season for schedule-strength and season-outcome modeling.',
    '2605.16066': 'Report score 2: Review of football tracking data and tracking-infrastructure methodology for GSE\'s tracking lane.',
    '2604.13861': 'Report score 2: NFL tracking-data injury-risk review with GSE injury-model applications.',
    '2603.10916': 'Report score 2: Home-field advantage and fatigue dynamics review with quantified home-edge modeling.',
    '2512.00203': 'Report score 2: Weather effects on NFL totals via a physics-based ball-flight model — environmental covariates for the engine.',
    '2511.18730': 'Report score 2: NFL player tracking data review with GSE tracking-methodology applications.',
    '2508.05891': 'Report score 2: Market-maker pricing models for sports betting exchanges, reviewed with the GSE odds-engine application.',
    '2503.09737': 'Report score 2: Elo/Glicko/TrueSkill rating systems applied to NFL teams, reviewed with GSE rating-system comparison.',
    '2503.02137': 'Report score 2: Statistical modeling of NFL scores with GSE spread/total modeling applications.',
    '2509.26325v2': 'Report score 2 (report-preassigned ID; note: batch metadata for this ID is "Continuous Space-Time Video Super-Resolution with 3D Fourier Fields," not the soccer paper the report label implies — title/method mismatch flagged).',
    '2412.19215': 'Report score 2: Soccer win prediction reviewed against GSE\'s general match-prediction framework.',
    '2409.10176': 'Report score 2: Betting-exchange data for sports prediction models, with the GSE exchange-signal application.',
    '2401.05451': 'Report score 2: Sports analytics visualization methods review, with GSE dashboard and reporting applications.',
    '2311.13707': 'Report score 2: Review of player-performance and team-strategy deep learning, mapped to GSE\'s deep-learning lane.',
    '2310.10386': 'Report score 2: Reinforcement learning for sports analytics reviewed with the GSE decision-optimization lane.',
    '2308.01523': 'Report score 2: NBA player-tracking data analytics review with methods transferable to NFL tracking.',
    '2307.10411': 'Report score 2: Wearable IMU injury-prediction methods, reviewed with GSE injury-risk model applications.',
    '2306.01740': 'Report score 2: Sports prediction market efficiency review with GSE market-efficiency and CLV application.',
    '2303.06021': 'Report score 2: NFL draft pick value charts and roster-construction analytics with GSE draft-model application.',
    '2301.04001': 'Report score 2: Machine learning for sports injury prediction review, with GSE injury-model applications.',
    '2209.00451': 'Report score 2: GNNRank — global ranking from pairwise comparisons via directed graph neural networks with Fiedler-vector unfolding, outperforming ranking baselines; directly relevant team-rating method (note: report filed this score under ID 2209.00451; the identical content is filed at 2202.00211v3 in this batch).',
    '2107.08827': 'Report score 2: Poisson goal-distribution modeling in soccer, reviewed with GSE score-distribution modeling.',
    '2101.05388': 'Report score 2: Market-making inventory-control models (Avellaneda-Stoikov style) reviewed with the GSE live-odds application.',
    '1908.00939': 'Report score 2: Functional Ratings in Sports — least-squares functional ratings (average point differential adjusted for strength of schedule) that predict in-game expected point differential, with home-court variations; directly relevant team-rating method (note: report filed this ID under a κ-Elo label; the actual κ-Elo content sits at 1910.06081v1 and is scored independently).',
    '1802.08848': 'Report score 2: Massey matrix-method team ratings reviewed with GSE rating-benchmark application.',
    '1710.05284': 'Report score 2: Ordinal logistic regression plus-minus player ratings, reviewed with GSE player-valuation work.',
    '1702.05982': 'Report score 2: Elo-based player rating systems reviewed with GSE rating-method comparison.',
}

def report_key(aid):
    for k in list(S3) + list(S2):
        if aid == k or aid.startswith(k + 'v'):
            return k
    return None

# Independently scored abstracts, keyed by rest index in /tmp/rest2.json order
SELF = {
    0: (0, 'LLM-as-judge family preference study; no sports or prediction application.'),
    1: (2, 'KL-regularized contextual bandits with greedy sampling and eluder-dimension-free logarithmic regret; directly applicable to GSE\'s pick-selection/bandit lane.'),
    2: (0, 'Adaptive-optics wavefront sensors for telescopes; no sports relevance.'),
    3: (0, 'Multi-negative DPO for historical entity linking; LLM alignment, no sports transfer.'),
    4: (0, 'Low-surface-brightness astronomy imaging of the Coma cluster; irrelevant.'),
    5: (2, 'Multimodal weighted-ensemble injury-risk and performance-prediction framework for tennis using physiological, training, sleep, wearable, and video inputs; directly relevant to GSE\'s injury-prediction lane.'),
    6: (0, 'Hubble WFC3 encircled-energy calibration; irrelevant.'),
    7: (0, 'Categorical color-palette recommendation; irrelevant.'),
    8: (0, 'LLM film-preference and critical-acclaim bias study; irrelevant.'),
    9: (0, 'Gravitationally lensed Little Red Dots cosmology; irrelevant.'),
    10: (0, 'ML wavefront sensing on a telescope testbed; irrelevant.'),
    11: (0, 'Execution-consistent preference optimization for LLM math reasoning; no sports transfer.'),
    12: (0, 'Identifiability limits of debiasing LLM judges; no sports transfer.'),
    13: (0, 'Preference-based reward learning under partial observability; RL theory with no sports application.'),
    14: (0, 'LLM agents simulating social-media reactions; no sports-prediction content.'),
    15: (0, 'Structural uncertainty in LLM reasoning; no sports transfer.'),
    16: (0, 'Reward modeling for multi-agent LLM orchestration; no sports transfer.'),
    17: (0, 'Trace tournaments for LLM reasoning RL; no sports transfer.'),
    18: (1, 'MLLM video-understanding framework covering sports video as an application domain; could transfer to game-film analysis.'),
    19: (0, 'Self-play preference optimization with semantic calibration; LLM alignment, no sports transfer.'),
    20: (0, 'Reward learning from best-of-N preference data; LLM alignment theory, no sports transfer.'),
    21: (0, 'Evolutionary design aesthetics judged via Glicko pairwise comparisons; no sports content.'),
    22: (2, 'Chernoff-type matrix concentration bounds for time-inhomogeneous Markov chains, illustrated through a dynamic Bradley-Terry-Luce Elo model; theoretical foundation for dynamic-rating work.'),
    23: (0, 'Generative recommendation with capsule-routed semantic IDs; e-commerce, no sports transfer.'),
    24: (0, 'Least-squares unmixing for point-spread-function signal processing; optics, no sports transfer.'),
    25: (0, 'fMRI brain-network decoding of visual categories; neuroscience, no sports transfer.'),
    26: (0, 'Holographic quantum foam cosmology; irrelevant.'),
    27: (2, 'Glicko adapted for Test cricket with home-advantage (~13 pts) and toss (~8 pts) covariates, calibrated win probabilities, and lower Brier/log loss than Elo/Glicko; transferable rating methodology with quantified home-field effects.'),
    28: (0, 'Persian social-media text-classification dataset; no sports-prediction content.'),
    29: (0, 'Strava-heatmap urban cycling patterns; mobility research, not sports prediction.'),
    30: (0, 'AI co-scientist for biomedical knowledge synthesis; no sports transfer.'),
    31: (2, 'Semantic-space tactical modeling: players as attribute vectors with tactical fit via vector distance in a shared embedding space; novel representation for team/matchup modeling.'),
    32: (2, 'Public CC-BY Zenodo dataset of all 19 Asia Cup 2025 T20 matches with 61 variables; a clean public sports-analytics dataset and structure template.'),
    33: (0, 'Interleaved text/video generative model; video generation, no sports-prediction transfer.'),
    34: (1, 'Diffusion-based 3D human pose estimation tested on broadcast baseball footage; could transfer to broadcast pose tracking for player-movement metrics.'),
    35: (0, 'Multimodal recommender system for e-commerce; no sports transfer.'),
    36: (0, 'Reanalysis of eclipses of LHS 1140 c; exoplanet astronomy, irrelevant.'),
    37: (0, 'Vision-language world models for visual planning assistance; no sports content.'),
    38: (1, 'Unsupervised skeleton-based temporal action localization for sports video matching supervised SOTA; label-free action segmentation that could transfer to game-film breakdown.'),
    39: (0, 'CamShift cross-sensor 3D detection dataset for autonomous driving; not sports.'),
    40: (1, 'Passive-arm IMU tennis shot classification at 88.2% accuracy; wearable sports-analytics method with possible transfer to athlete-load monitoring.'),
    41: (0, 'Super-resolution fluorescence microscopy; irrelevant.'),
    42: (0, 'Define-ML ideation framework for ML product planning; no sports content.'),
    43: (1, 'SoccerChat multimodal soccer video understanding on SoccerNet; transferable to broadcast game analysis.'),
    44: (2, 'FIFA World Cup match-outcome ML combining team-level history with player-specific performance metrics and year-specific team profiles; directly relevant match-prediction methodology.'),
    45: (0, 'Quadrotor MPC cruise control; irrelevant.'),
    46: (1, 'LLM "wordalizations" of xG logistic-regression models for coaching communication; tangential interpretability tooling for sports models.'),
    47: (0, 'Organizational study of EPTS adoption in Qatari football; no modeling content.'),
    48: (0, 'AI sports-video storytelling tool for fan engagement; no prediction content.'),
    49: (0, 'Activated random walks superadditivity proof; probability theory with no sports application.'),
    50: (2, '3,433 soccer matches show goal probability rising through matches with bursty same-team clustering, challenging memoryless in-game models; directly relevant to in-game win-probability modeling (report preassigned this content\'s title under ID 2509.26325v2; scored here from the actual abstract).'),
    51: (0, 'Hyperspectral imaging diffusion model; irrelevant.'),
    52: (2, 'Appearance-based global tracklet association for sports multi-object tracking, SOTA on SportsMOT with open code; directly relevant sports-tracking infrastructure.'),
    53: (2, 'Proof that Elo ratings converge exponentially to a unique stationary distribution with sqrt(K) skill-convergence rate; theoretical grounding for rating-system tuning.'),
    54: (0, 'AGN host-galaxy photometric decomposition; astrophysics, irrelevant.'),
    55: (1, 'Dream11 fantasy-sports user spending-propensity prediction with a new transformer for feature interactions; tangential DFS-contest economics.'),
    56: (1, 'Regularized/Bayesian plus-minus player ratings for CS:GO esports; APM methodology transferable to player-valuation work.'),
    57: (1, 'Wimbledon momentum quantification (EWM+GRA) and XGBoost swing prediction with 0.999-accuracy claims; low credibility but a testable momentum-modeling lane.'),
    58: (0, 'Robot air-hockey contact planning; irrelevant.'),
    59: (1, 'Elo-based competitive-balance indices for the UCL group stage; descriptive tournament analytics, tangential.'),
    60: (1, 'Neural 3D reconstruction of baseball pitch trajectories from single-view 2D video; transferable to broadcast trajectory tracking.'),
    61: (0, 'ATLAS transient detection for supernova pre-explosion counterparts; astrophysics, irrelevant.'),
    62: (0, 'Deep-learning Zernike coefficient prediction for optics; irrelevant.'),
    63: (0, 'Trans-Neptunian object hierarchical triple; astrophysics, irrelevant.'),
    64: (0, 'Cooperative language-guided inverse planning for assistive agents; no sports transfer.'),
    65: (0, 'Robot air-hockey control; irrelevant.'),
    66: (1, 'Hybrid graph network for complex activity detection in video with sports analytics as an application; could transfer to play-segment detection.'),
    67: (1, 'Rink-agnostic hockey rink registration via homography for broadcast video; tracking infrastructure for broadcast alignment.'),
    68: (2, 'Glocal (group-level) SHAP and partial-dependence explanations of xG models at player and team level; directly relevant interpretable performance analysis.'),
    69: (0, 'Hindsight experience replay for robot manipulation RL; no sports transfer.'),
    70: (2, 'Supervised ML for table-tennis match prediction with feature-ablation study at 61-70% accuracy; directly relevant match-prediction baseline methodology.'),
    71: (0, 'Video-based exercise classification for sports science; not prediction.'),
    72: (2, 'LSTM for MLB home-run prediction outperforming classical projection systems; directly relevant player-performance deep-learning methodology.'),
    73: (1, 'MARL-pruned MCTS for multi-target camera tracking simulated on sports games; tangential tracking-infrastructure work.'),
    74: (1, 'Semi-supervised teacher-student player/ball detection for soccer broadcast video with open code; tracking infrastructure, tangential.'),
    75: (1, 'Poisson and exponential fits to EURO 2020 goal and waiting-time distributions; tangential descriptive score modeling.'),
    76: (2, 'GNNRank: global ranking from pairwise comparisons via directed graph neural networks with Fiedler-vector unfolding, beating ranking baselines; directly relevant ranking method (report filed this score under ID 2209.00451; scored here from the actual abstract).'),
    77: (0, 'XAI culture case study for non-technical stakeholders; no sports content.'),
    78: (2, 'Markov-process modeling of execution error versus intention in tennis shot selection using tracking-powered simulation; directly relevant to play valuation under execution uncertainty.'),
    79: (2, 'Batch deep reinforcement learning for optimal actions in critical soccer situations on 104 matches; directly relevant in-game decision modeling.'),
    80: (1, 'Team skill aggregation from individual ratings (Elo/Glicko/TrueSkill), MAX aggregation winning; tangential to how team strength aggregates from player ratings.'),
    81: (2, 'NBA corner-3 efficiency anatomy from player tracking: assisted rate (>90%) not distance drives efficiency, with shooter/defender movement analysis; directly relevant tracking-data shot analysis.'),
    82: (1, 'Table-tennis stroke recognition from 2D pose at 99.37% on 22k videos; tangential sports pose classification.'),
    83: (2, 'LSTM win probability at every ball in cricket from ball-by-ball features; directly relevant in-game win-probability methodology.'),
    84: (0, 'Dynamical chaos model of the knuckleball; pitch physics, not prediction.'),
    85: (0, 'FIFA World Cup qualification unfairness analysis; tournament design, not prediction.'),
    86: (1, 'Parsimonious multivariate Poisson-lognormal mixtures for correlated count data; could transfer to score modeling with overdispersion.'),
    87: (2, 'Hybrid real-time player tracking for broadcast video at 80 fps in HD; directly relevant sports-tracking infrastructure.'),
    88: (2, 'Bayesian volleyball set-difference models (ordered multinomial, truncated Skellam); Skellam margin-modeling analog for spread/total work.'),
    89: (2, 'κ-Elo: spells out Elo\'s implicit draw assumption and adds draw-frequency flexibility; directly relevant rating-method extension (report filed this score under ID 1908.00939; scored here from the actual abstract).'),
    90: (0, 'UEFA Euro 2020 qualification design flaw; tournament design, not prediction.'),
    91: (2, 'Augmented APM recasting plus-minus as Bayesian with FIFA video-game ratings as priors, improving prediction and decorrelating collinear players; the market-implied-prior regularization lane is a novel player-valuation avenue.'),
    92: (0, 'Drone base-station coverage for stadiums; telecom, not prediction.'),
    93: (2, 'NFL injuries before and after the 2011 CBA via Poisson interrupted time series (701 to 804 game-loss injuries, conditioning-dependent analysis); directly relevant NFL injury modeling and props.'),
    94: (1, 'Two-point PTZ camera calibration for soccer broadcast video; tracking infrastructure, tangential.'),
    95: (1, 'Soccer plus-minus ratings including xG plus-minus and expected-points plus-minus; APM variants transferable to player ratings.'),
    96: (3, 'Arbitrage-free combinatorial market making via integer programming with Frank-Wolfe Bregman projection, demonstrated on a 2^63-outcome NCAA bracket space; novel market-microstructure method for parlay/market pricing.'),
    97: (2, 'Large-scale soccer player movement profiles derived from event data without dedicated tracking systems, with player-similarity and replacement identification; novel physical-performance profiling for player evaluation.'),
    98: (0, 'Tennis performance-versus-popularity study; sociology of fame, not prediction.'),
    99: (2, 'Information content per game quantified across the four major US sports via paired-comparison predictability curves; directly relevant sample-size guidance for ratings.'),
    100: (0, 'piBUSS phylogenetic sequence simulation; bioinformatics, irrelevant.'),
    101: (1, 'High-frequency market-making for multi-dimensional Markov processes with HJB inventory control; could transfer to in-play odds-making microstructure.'),
    102: (1, 'HFT market-making with inventory constraints and directional bets; tangential in-play pricing theory.'),
    103: (0, 'Complex-systems-in-sports workshop proceedings index; no methods content.'),
    104: (1, 'Rally-level stochastic analysis of side-out versus rally-point scoring in two-person sports; transferable to set/game probability modeling.'),
    105: (2, 'Empirical Bayes in-season batting-average prediction validated on held-out months; classic shrinkage estimation directly relevant to player-ability estimation.'),
}

batch = [json.loads(l) for l in open(BATCH) if l.strip()]
rest = json.load(open(REST))
rest_by_id = {p['id']: (i, p) for i, p in enumerate(rest)}

records = []
seen = set()
for p in batch:
    aid = p['id']
    rk = report_key(aid)
    if rk is not None:
        rec = {'id': aid, 'title': p['title'], 'url': p['url'],
               'published': p['published'], 'wave': None, 'query': None}
        rec['score'] = 3 if rk in S3 else 2
        rec['rationale'] = (S3 if rk in S3 else S2)[rk]
    else:
        i, rp = rest_by_id[aid]
        score, rationale = SELF[i]
        rec = {'id': aid, 'title': p['title'], 'url': p['url'],
               'published': p['published'], 'wave': None, 'query': None,
               'score': score, 'rationale': rationale}
    assert aid not in seen, f'duplicate {aid}'
    seen.add(aid)
    records.append(rec)

assert len(records) == 142, len(records)
assert {p['id'] for p in batch} == seen

from collections import Counter
dist = Counter(r['score'] for r in records)
print('records:', len(records))
print('unique ids:', len(seen))
print('input id set == output id set:', {p['id'] for p in batch} == seen)
print('score distribution:', dict(sorted(dist.items())))
print('sum:', sum(dist.values()))
print('all keys valid:', all(set(r.keys()) == {'id','title','url','published','wave','query','score','rationale'} for r in records))

with open(OUT, 'w') as f:
    for r in records:
        f.write(json.dumps(r, ensure_ascii=False) + '\n')
print('wrote', OUT)
