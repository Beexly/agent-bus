# arxiv-program/research/2026-09-21/arxiv-deep/0398-a-markov-process-approach-to-untangling.md
## What it is (1-2 sentences)
Ledger [0398]: MRP/MDP framework (arXiv:2110.01527v1, Chan/Fearing/Fernandes/Kovalchik 2021) that makes execution error an explicit tunable parameter (ε), separating the value of *intention* (what action to choose) from *execution* (how precisely carried out), applied to tennis. Verdict: ADAPT — transfers to GSE's core "bad call vs bad execution" question; same first author as the football points-gained value-function line.
## Key metrics/methods (formulas where given, else "not specified")
- State: s = (σ_A, σ_B, ω) — both players' locations + shot type; 84 court cells (~2 m²), 3,600 transient states after pruning; absorbing W/L.
- Intentions/actions: 6 serve intentions, 39 serve-return/rally intention regions; deterministic π: S→A; randomized intention distribution f_s(a) fit from landing proportions.
- Execution distribution: per (s,a), bivariate Gaussian N(μ_{s,a}, εΣ_{s,a}); ε=1 = perfect (90% mass within intention); ε=13 calibrated as "average" (matches empirical P(win)=13.0/P(error)=13.0/P(in-play)=74.0 vs 13.0/13.4/73.6).
- Transitions via Algorithm 1: draw intention ~ f_s, landing ~ N(μ,εΣ), generate shot via VON CRAMM conditioned on (s, landing), generate return, record s′. Intention distribution held fixed across ε.
- MRP (Eq. 1): V^π̂_ε(s) = Σ_a f_s(a) Σ_{s′} P_ε(s′|s,a)(r + V^π̂_ε(s′)).
- MDP (Eqs. 2–3): V*_ε(s) = max_a{Σ_{s′} P_ε(s′|s,a)(r+V*_ε(s′))}; admitted overly optimistic (rare-state exploitation + sampling error).
- n-greedy rollout (Eqs. 4–7): π^n_ε = n greedy steps then π̂; V^π̂ ≤ V^{π^n_ε} ≤ V* (Theorem 1: V^π_ε(s) = P(win point | s, π, ε)).
- Serve-fault handling: P(first serve|fault) = 0.379·0.725/0.302 = 0.91 (Bayes on Sackmann data).
- Rewards: r=1 on first entry to W, 0 otherwise. Policy iteration converged in 6–8 iterations.
## Data sources named
- VON CRAMM generative framework (Kovalchik et al. 2020): infinite Bayesian Gaussian mixture for 3D ball + 2D player trajectories, VI fit on 125,000 men's + 80,000 women's shots from Australian Opens; shot outcomes from hierarchical GAMs; "hundreds of millions" simulated; numerical results use N=1000 shots/state × ε=1…20 (>75M shots).
- Validation: Jeff Sackmann's point-by-point data (2017–2019 Australian Opens, public GitHub). Model P(win point on serve) ≈ 0.652 vs empirical 0.642.
## Findings (numbers and facts, not vibes)
- ε=13 calibration: P(win)=13.0, P(error)=13.0, P(in-play)=74.0 vs average-player empirical 13.0/13.4/73.6.
- Backhand vs forehand: ad-rally (backhand, ~90% right-handed) error more costly than deuce-rally; out-of-bounds probability grows faster with ε for ad rallies; ad rallies reached 55% of the time (conditional on continuation). No asymmetry for serves/returns.
- Serves: execution error barely moves value — serve value lives in speed/spin, not landing precision.
- Aggressive vs conservative: crossover at ε≈4; below aggression pays, above conservatism wins; average player (ε=13) should play conservatively. Optimal intentions shift from baseline corners/drop shots at ε=1 to middle-of-court mass by ε=6.
- One optimal shot: optimizing only the serve return at ε=13 raises point-win probability 0.575 → 0.704 — ≈ perfect execution everywhere under empirical strategy. Serve return dominates as single highest-ROI decision at every ε. Diminishing returns beyond ~5 optimal shots.
- Cross-court rally at ε=20: MRP value ~42% but MDP value ~89% (optimism diagnosed).
- NFL port spec: state = (down, distance, yard line, score, time) × personnel/formation; intentions = play-call categories; execution distribution from nflverse + charting (QB placement à la 0391, drops, protection breakdowns); acceptance = MRP-implied state values match nflverse empirical WP within ±1.5 pp across down×distance buckets; ~3–4 weeks for down/distance prototype.
- Limitations: simulation-on-simulation (circular calibration); intention distribution fixed across ε; state omits incoming difficulty and score; execution = landing location only; no first/second-serve distinction.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **QB-BEHAVIOR**: execution-error distribution as a first-class player attribute — QB placement error estimated and fed into value functions (pairs with 0391's generative execution model).
- **COACHING**: intention-vs-execution decomposition answers "bad call or bad execution?" for failed plays; n-greedy rollout quantifies value of optimizing the single highest-leverage call (4th-down/go-for-it content).
- **SCHEME**: two-sided extension → execution-error-conditioned game-theoretic play-calling chart (offense optimizes vs defense optimizing); intention shift (aggressive→conservative) as ε rises is directly scheme-relevant.
- **TRUST-SIGNAL**: aggression/conservatism crossover at ε≈4 with average player at ε=13 — calibration-aware play-calling tiers.
## Engine-actionable? (yes/no + one-line what)
yes — build the NFL MRP with ε-scaled execution variants to decompose team red-zone/3rd-down underperformance into play-calling vs execution, gating publication on the ±1.5 pp WP-agreement validation and labeling all attributions model-based.
