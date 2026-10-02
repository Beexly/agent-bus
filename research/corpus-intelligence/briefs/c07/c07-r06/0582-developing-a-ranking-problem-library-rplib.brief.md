# arxiv-program/research/2026-09-21/arxiv-deep/0582-developing-a-ranking-problem-library-rplib.md
## What it is (1-2 sentences)
Anderson et al. (2022) present RPLIB, a living successor to the static LOLIB linear-ordering library — a searchable database of ranking-problem instances with two ranking-method classes (optimization: LOP/hillside; linear algebra: Massey/Colley) and JSON model cards carrying rankability diagnostics — and demonstrate a new fourth rankability measure β that captures *where* in a ranking the ambiguity among multiple optimal solutions sits. The deep read's verdict is ADAPT — adopt the rankability framework (k, |P|, τ, β) as a diagnostic for GSE's own NFL team-ranking instances.

## Key metrics/methods (formulas where given, else "not specified")
- Rankability r = f(k, |P|, τ, β): k = distance of dominance matrix D̄ from a perfectly rankable matrix; |P| = number of optimal rankings; τ = diameter of the optimal set (Kendall-tau distance between the two farthest optimal rankings); β = new position-weighted measure of indecision location among multiple optimal rankings, built from the X̄* optimal-face pairwise rank-order matrix — penalizes fractional entries further from the diagonal and lower in the ranking. Lower β = better. (Exact closed-form formula is figure-presented in the paper, not typeset text.)
- D̄(i,j) = # times i beat j. X̄* matrix = pairwise rank-order information from the linear ordering model; Ȳ*(i,j) = certainty i is ranked above j (Massey/Colley).
- Demonstrator construct: a dominance matrix with row indices 6–10 has (10−6+1)! = 5! = 120 multiple optimal rankings.
- Methods: linear ordering problem (LOP) + hillside variant (optimization; optimal objective, all/many optimal rankings, centroid-nearest/farthest); Massey/Colley systems (ratings + pseudo-optimal sets). Elo and learning-to-rank listed as future additions.

## Data sources named
RPLIB public library (igards.github.io/RPLib/): static real data — U.S. college basketball season scores incl. March Madness, Japan economic IO matrices (1995, 2005), cleaned LOLIB/XLOLIB, US News liberal-arts features (n=10 to hundreds); dynamic artificial data via Colab (empty+noise, fully connected ± noise, hillside/dominance + noise, cyclic, engineered c! multiple-optimal matrices, upset-simulated games, e.g. `emptyplusnoise(5,20,2,4)`); user-contributed via web form. Each instance carries a JSON model card.

## Findings (numbers and facts, not vibes)
- 98% of the 50 instances in the LOLIB IO folder have more than one optimal ranking, though LOLIB stores only one — the motivating statistic for storing full optimal sets.
- Example model card (dataset_id 363): 1,095 optimal rankings, objective value 204, D is 65×65.
- Four artificial matrices D̄₁…D̄₄ engineered with identical k, |P|, τ but different β — β separates them while the other three measures cannot.
- March Madness 2002 vs 2008 X̄* matrices: 2002 shows little top-of-ranking disagreement, 2008 shows top-of-ranking disagreement — consistent with prior findings that rankability correlates with tournament predictability (fewer upsets in more rankable years); prior work established the k/|P|/τ → predictability correlation, this paper adds β.
- Limitations: LOP optimal-face enumeration is exponential — for large n only a partial set P is stored, so |P|, τ, β are lower bounds; no scalar combination rule for (k,|P|,τ,β) into r (open question); NFL-relevant content is nil; NFL seasons produce tiny sparse dominance matrices (32 teams × 17 games) where unregularized LOP optimal sets will be enormous — measures most useful on dense comparison graphs.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: rankability as a diagnostic that does not exist in GSE's corpus — "does this dataset even support a single meaningful ranking, and where is the ambiguity?" β's top-vs-bottom indecision weighting maps to what matters (playoff teams, MVP candidates, bets). Weekly application: flag weeks where top-8 ordering is ambiguous → shrink edge estimates (bet-sizing implication).
- COACHING: stake-weighted β — weight positional indecision by actual betting handle/edge at stake per rank position (ambiguity between teams 7–12 drives playoff-probability/futures pricing more than 25–32) to turn the diagnostic into a risk-management input.
- OTHER: apply to model-comparison matrices (which candidate model beats which on backtests) to test whether "model A > model B" is even a rankable claim.

## Engine-actionable? (yes/no + one-line what)
yes — build a `rankability` module (LOP via scipy.optimize.milp/OR-Tools, n=32) computing (k, |P|, τ, β) on nflverse dominance matrices for weekly power-rating ambiguity reports and bet-sizing shrinkage; ~1–2 weeks.
