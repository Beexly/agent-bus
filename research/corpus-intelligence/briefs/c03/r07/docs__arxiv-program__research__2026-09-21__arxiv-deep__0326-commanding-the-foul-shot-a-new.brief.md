# docs/arxiv-program/research/2026-09-21/arxiv-deep/0326-commanding-the-foul-shot-a-new.md
## What it is (1-2 sentences)
Ledger for McGrath et al. (2026), arXiv:2512.08824v2 — a free-throw metric paper defining "command" (accuracy + precision of in-rim landing location) from Sony Hawk-Eye 3D ball tracking, plus launch-consistency ("touch") metrics and a 2D projectile physics model for error-robust launch regions. Verdict in the ledger: ADAPT — the metric pattern ports to NFL placekicking evaluation (kicker command from NGS ball tracking) with 3D drag/wind physics.
## Key metrics/methods (formulas where given, else "not specified")
- Command: C = 1 / (1 + µ² + σ²), where µ = mean landing distance from bullseye (2 in behind rim center per Marty 2018), σ = shot-to-shot SD of landing distance. Range [0,1].
- Touch (launch consistency): z^p_i = (σ^p_i − µ_σi) / σ_σi (per-component z-score vs league); r^p_i = 100% − Normalized(z^p_i); overall R^p = 100% − Normalized(z^p_θ + z^p_v) (position excluded — velocity/angle can compensate for positional error).
- Physics: 2D projectile, no drag/Magnus (<6% of ball weight at v=12 MPH, ω=2 rev/s); equations (5)–(7) map (v0, θ0) at fixed release (x0, z0) to rim-crossing position xf with zf = 10 ft; outcome bands swish / rim-contact / complete miss.
- Error suppression: perturb (v0, θ0) by player-empirical δv0, δθ0, compute induced xf shift ("launch error propagation"); dark bands = error-suppressing launch regions.
- Shot optimization: loss L = ½(xf − xg)², xg = 5 1/12 ft (bullseye distance from baseline); gradient descent on (v0, θ0) to find perfect-swish launch.
## Data sources named
Sony Hawk-Eye optical tracking (3D poses of players + ball at 60 Hz), NBA regular-season free throws, 2024–25 season only (2023–24 discarded as noisier). Pipeline: 101,679 attempts → 49,412 after outlier removal (>4 SD) → 21,964 attempts across 72 players with ≥200 attempts. Data/code proprietary, not shared.
## Findings (numbers and facts, not vibes)
- League-average launch: velocity 14.74 ± 0.33 MPH; angle 48.66 ± 2.99°; height 8.89 ± 0.42 ft.
- Split-half predictive validity (season split Nov 15, 2024, players ≥50 attempts/half): early FT% → late FT% r = 0.61; early command → late FT% r = 0.67. [QB-BEHAVIOR]
- Touch → command r = 0.65; velocity consistency → command r = 0.73; angle r = 0.35; position r = 0.17.
- Two players both 86–87% FT% sit at 95th vs 48th command percentile — equal binaries, very different attempt quality.
- Perturbations shift xf by up to ~1 ft; Player A δθ0 = 1.74°, δv0 = 0.28 MPH; Player B δθ0 = 1.11°, δv0 = 0.24 MPH.
- Swish band widest ~45–50° launch; narrows beyond >55° or <40°; error-suppression dark bands ~46° (A) / ~50° (B); higher velocity amplifies error propagation (xf ∝ v0²).
- Command reliability floor: N ≳ 50 attempts; tracking noise biases command in very small samples (unlike FT%).
- Authors state framework may not extend to contested tasks — free throws are a "closed task without defensive interference."
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Command predicting future FT% better than past FT% (r 0.67 vs 0.61) in small samples → port to kicker true-skill: OTHER
- Velocity consistency (r=0.73) dominating command vs angle (0.35) and position (0.17) → kick-mechanics coaching signal (leg-swing speed repeatability matters more than angle/plant spot): COACHING
- Two equal-FT% shooters at 95th vs 48th command percentile → "some makes are better than others" content + lucky/unlucky kicker identification: TRUST-SIGNAL
- Error-suppression launch bands (46°/50°) as prescriptive practice feedback → kicker development/coaching intervention: COACHING
- Authors' closed-task scope caveat → applies to placekicks (closed, snap/hold) but weather/rush add noise: OTHER
- Paper's quantitative validation limits (no quantitative fit metric for physics bands, eyeball overlay only; no significance tests reported on some claims): TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — build a Kicker Command module (C_kicker = 1/(1+µ²+σ²) over upright-crossing deviation from NGS kick trajectories, with 3D drag+wind physics) for DFS/season-long kicker rankings and game-total/kicking-prop inputs, gated on first-half command predicting second-half distance-adjusted FG% better than raw first-half FG%.
