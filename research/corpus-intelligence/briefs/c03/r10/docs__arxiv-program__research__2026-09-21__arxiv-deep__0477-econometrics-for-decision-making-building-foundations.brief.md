# docs/arxiv-program/research/2026-09-21/arxiv-deep/0477-econometrics-for-decision-making-building-foundations.md
## What it is (1-2 sentences)
A full-paper read of Manski (2021, arXiv:1912.08726v4; Haavelmo Lecture) joining Haavelmo's probabilistic policy structure with Wald's statistical decision theory — arguing models must be evaluated for decision making by minimax regret across the full state space (all feasible true worlds), not by fit within the assumed model space. Verdict in the file: ADAPT (conceptual) — the state-space-vs-model-space evaluation doctrine applies to GSE's pick selection and staking, with concrete MMR treatment-choice results mapping onto bet/no-bet.

## Key metrics/methods (formulas where given, else "not specified")
- Wald criteria without data: (1) max_{c∈C} ∫w(c,s)dπ (subjective average welfare); (2) max_{c∈C} min_{s∈S} w(c,s) (maximin); (3) min_{c∈C} max_{s∈S}[max_{d∈C} w(d,s)−w(c,s)] (MMR). With data: (4)–(6) analogous over E_s{w[c(ψ),s]}.
- Binary choice regret: R_{c(∙)s}·|w(a,s)−w(b,s)|, eqs. (7)–(8). As-if optimization: c[s(ψ)] ∈ argmax_{c∈C} w[c,s(ψ)], eq. (9). Set-estimate as-if problems (1′)–(3′) act as if state space is S(ψ).
- Hodges–Lehmann (1950) MMR predictor for [0,1] outcomes: (μ_N√N + ½)/(√N + 1).
- Missing-data midpoint predictor: E(y|δ=1)P(δ=1) + ½P(δ=0); max regret ¼[P(δ=1)²/K + P(δ=0)²].
- MMR fractional allocation (eq. 10): z_MMR = E[y(b)|δ(b)=1]·p + {1−E[y(a)|δ(a)=1]}(1−p); max regret z_MMR(1−z_MMR) (fractional) vs min(z_MMR,1−z_MMR) (deterministic singleton).
- Feasible means (11a–b): E[y(a)] ∈ [E[y(a)|δ(a)=1](1−p), E[y(a)|δ(a)=1](1−p)+p] (similarly for b).
- Numerical max-regret computation: Monte Carlo (5,000 samples/state) maximized over discretized state-space grids (100 or 25 points per Bernoulli parameter), N=25–100, observability rates 0.1–1.0 / p=0.5–0.9.

## Data sources named
No new dataset. Illustration: Utah juvenile sentencing/recidivism data (Manski & Nagin 1998): males born 1970–1974, convicted before age 16; 11% confined (treatment a), 23% of those with no reoffense in 2 years; 89% non-confinement (treatment b), 41% no reoffense. Numerical tables from STATA programs (Manski & Tabord-Meehan 2017; Litvin & Manski 2021); no repo URL in the paper.

## Findings (numbers and facts, not vibes)
- Prediction: midpoint predictor beats sample-average-of-observed-outcomes when all distributions feasible — max MSE ≈¼ the size at observability ≤0.8, ≈½ at 0.9 (Tables 1A vs 2A); identification (bias) dominates imprecision when observability <0.7 (max MSE ≈ ¼P(δ=0)²).
- Table 1A (midpoint max MSE): N=100: 0.1952 at P(δ=1)=0.1, 0.0620 at 0.5, 0.0025 at 1.0; N=25 at P(δ=1)=0.5: 0.0658. Table 2A (observed-average max MSE): N=100: 0.7779 at 0.1, 0.2404 at 0.5, 0.0025 at 1.0 (~3–4× worse at low observability).
- Treatment, Utah example: max regret of mandate-confinement (a) = 0.45 vs mandate-no-confinement (b) = 0.55 — (a) minimizes maximum regret, yet the ES (empirical-success) rule picks (b) because 0.41 > 0.23: as-if optimization selects the MMR-inferior treatment.
- AMMR max regret invariant in p, rises ≈0.34 (N=25) to ≈0.40 (N=100); N=1 gives ¼ for all p; N→∞ approaches the deterministic MMR rule with max regret ½. ES rule max regret = max(p,1−p) at all N (Tables 3A/3B, 4A/4B exact maxima quoted in file).
- Appendix A.1: Wald's criterion (4) = minimization of Bayes risk; conditional-Bayes/Fubini equivalence holds only for unconstrained feasible SDFs; Berger (1985) "bizarre" critique rebutted. A.2: maximin vs MMR differ except when optimal welfare is state-invariant; Savage (1951) "ultrapessimistic"; Chernoff (1954) IIA critique dismissed.
- Limitations noted in file: primarily philosophical; max regret computed on coarse grids is a lower bound; state space is subjective (robustness can be gamed by widening/narrowing S); MMR is worst-case conservative and will systematically under-bet vs Kelly for a +EV bettor; sports outcomes are not "treatments" — mapping is analogical.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Model space vs state space distinction: evaluate betting rules by regret across plausible true-probability worlds (engine ± calibration-error bounds), not by EV under the point estimate → [OTHER] + [TRUST-SIGNAL] staking-audit doctrine.
- Utah punchline: the ES rule ("bet if edge > 0") can be MMR-inferior → [OTHER] caution on naive as-if thresholding of engine edge.
- MMR is worst-case conservative; do NOT replace Kelly outright — use as a risk overlay (cap stakes where max regret exceeds a threshold) → [TRUST-SIGNAL] guardrail against over-betting into miscalibration.
- Weighted minimax regret (weights from engine posterior over calibration states) as the soft criterion between Bayes and minimax → [OTHER] improvement direction beyond the paper.
- Hodges–Lehmann MMR predictor (μ_N√N + ½)/(√N + 1) → [OTHER] shrink small-sample win-rate estimates toward 0.5 in a regret-optimal way.
- Dominitz–Manski missing-data midpoint logic → [OTHER] bound identification regions for true CLV edge when closing lines are missing (steam moves).

## Engine-actionable? (yes/no + one-line what)
Yes (conceptual, ~1 week) — add a "maximum regret across calibration-error states" column to the pick-evaluation scorecard alongside EV/ROI/CLV, and run a regret-based staking audit (full Kelly vs half-Kelly vs MMR-capped Kelly) on 2023–2025 picks walk-forward; do not replace Kelly, use MMR as a risk overlay.
