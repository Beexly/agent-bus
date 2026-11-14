---
source: "2023 - Fair and Efficient Ranking in Incomplete Tournaments - Bertran.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2023"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4499
---

<NATIVE_REASONING>
The user wants me to analyze a research paper from the MIT Sloan Sports Analytics Conference 2023 about "Fair and Efficient Ranking in Incomplete Tournaments" by Bertran. 

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I must produce these exact XML sections with deep content. The total must be >= 1000 words, with THINK_TRACE >= 400 words.

Key content from the paper:
- Paper by Bertran, MIT Sloan 2023, Paper ID 171177
- Fair and Efficient Ranking in Incomplete Tournaments
- Generalized Win Percentage (GWP) family
- v_i = α * sum(w_ij / g_i) + (1-α) * sum(g_ij/g_i * v_j)
- α between 0 and 1
- Fairness axioms: anonymity, win/loss fairness, win dominance, self-consistent win/loss fairness, homogenous treatment of victories, homogenous treatment of second-order victories
- Theorem: GWP uniquely satisfies axioms 1-6 if α ≥ 1/2
- Win dominance condition: α ≥ 1/2 globally
- Ex-ante fairness bound for NCAA (~130 teams, 10-12 games): α = 0.41
- Efficiency: most efficient α* exists and is unique, U-shaped in α
- For NCAA: lower bound for fairness is 0.41, efficiency achieved at levels closer to 0.15 (from page 8 text: "efficiency is achieved at levels of α closer to 0.15")
- Wait, let me check page 8: "Specifically, for the case for the College Football, the lower bound for fairness is 0.41 whereas efficiency is achieved at levels of α closer to 0.15."
- Page 9: average α* over 15 sets is 0.3473, close to 0.35
- Page 10: benchmark values n=130, g=11, ρ=0.265, σW=0.204
- Page 12: Not a single ranking met win dominance standard; all rankings fair would require α ≥ 0.41. Best fit occurs at α < 0.41 for all years.
- Page 13: rankings closer to efficiency rather than fairness.
- Page 14: UCF 2017 left out despite being ranked #1 by implied ranking method.
- Betting odds mentioned but I cannot mention betting lines/odds per invariant 1. Wait, the invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." The paper uses betting odds data to calibrate implied strength vector. I must NOT mention odds, spreads, moneylines, or totals. I should refer to "implied strength information from market prices" or "external calibration signals" but avoid the word "odds" if possible? The invariant says never mention odds. So I must avoid saying "betting odds" or "implied odds". I can say "external market-implied strength signals" or "calibration data" without using the forbidden word. Actually, I need to be careful. The user provided source text that mentions betting odds on pages 1, 8, 13, 16. But my output must never mention spreads, totals, moneylines, or odds. So I must paraphrase around it: "market-implied strength vector", "calibration data", "external probability signals". Avoid the word "odds" entirely.

Wait, the invariant says: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I cannot use the word "odds" at all. I will refer to "market-implied strengths" or "external calibration signals" or "price-implied win probabilities" but avoid "odds". Actually "probabilities" might be okay as long as not "betting odds". I'll say "market-implied strength vector" or "external inference signals".

Also "ZERO TOY EQUATIONS": Never invent fake ratios. I must state formal LaTeX equations from the paper, with units, assumptions, singularity/breakdown regimes.

Structure:
THINK_TRACE >= 400 words: deep multi-hop derivation and gray-zone audit. I'll derive the GWP recursion, show matrix form, discuss spectral properties, uniqueness conditions, breakdown when α < 1/2, the tension between fairness and efficiency, calibration to NCAA rankings, overrating of Power Five conferences, UCF 2017 case. Gray zones: self-consistency circularity (scores used to measure opponent strength which determines scores), κ calibration arbitrariness, ρ sensitivity, complete-tournament counterfactual unobservability.

SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX for GWP, points-per-game decomposition, axioms, SS efficiency metric, LR metric, bounds for α (global 1/2, ex-ante 0.41, NCAA efficiency ~0.15-0.35), page citations [PAGE N], verbatim quotes where appropriate. Units: scores dimensionless [0,1], α dimensionless, g_i count, w_ij count, v_i dimensionless score. Breakdown: α < 1/2 violates win dominance; g_i = 0 division by zero; n small changes lower bound; ρ extremes affect α*.

RETROCAUSAL_GENEALOGY: historical lineage: Colley matrix, Keener Perron-Frobenius, Chebotarev row sum, Slutzki & Volij, Palacios-Huerta & Volij intellectual influence, Stern (1991) win probability model. Multi-week traps: incomplete tournament scheduling over a season creates transitive inference traps; early-season weak schedule locks in bias; strength-of-schedule endogenous correction lags actual team improvement (retrocausal because final ranking depends on opponents' final scores which depend on games against you).

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. This is a specific framing. Crisis habit regression: under pressure, ranking committees revert to win percentage (α→1) or reputation (strength of schedule overweighted). Counter-trap: using GWP to detect bias but then overcorrecting. Clock: the 7-year window 2011-2017, BCS to CFP transition, weekly ranking updates. The committee's recursive reasoning: they rank teams based on who they beat, but opponents' rankings depend on the committee's ranking.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This is a bit odd for a math paper about rankings. I need to interpret it as: what physical/biomechanical/weather factors could veto the ranking model's assumptions? The paper assumes only win/loss matrix matters, no margin of victory, no injuries, no weather, no home/away. Vetoes: weather postponements altering fixture matrix G (games not played), injuries causing roster asymmetry (violates anonymity? no, but violates equal opponent strength), home-field advantage not modeled, conference championship games adding extra games for some teams (g_i varies, incomplete tournament). These are cross-layer vetoes that break the pure win-matrix abstraction.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? I need to create 3 counterfactual veto scenarios that are verifiable, with predictions. They should relate to the paper's model. For example:
1. Veto: If a team plays fewer than 10 games (g_i below threshold), GWP ex-ante fairness bound drops below 0.41, allowing α < 0.41 which may violate win dominance. Prediction: in a shortened season, rankings using α=0.41 will produce a winless team ranked above a winless? Actually win dominance violation: a team losing all games to top opponents could score above a team winning all against bottom opponents if α too low. Prediction: verified by simulation with n=130, g=5, α=0.25.
2. Veto: If ρ → 1 or ρ → -1 (correlated scheduling), most efficient α* drops significantly below fairness bound. Prediction: simulation shows α* < 0.25 while fairness requires α ≥ 0.41, making fair ranking inefficient.
3. Veto: If margin-of-victory or home-field data are introduced (violating the win-matrix-only assumption), the anonymity and win/loss fairness axioms break. Prediction: GWP ranking will diverge from actual committee ranking because committee implicitly uses MOV.

I need to ensure total word count >= 1000 across sections, THINK_TRACE >= 400.

Let's draft carefully.

Word count planning:
THINK_TRACE: ~500 words
SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
RETROCAUSAL_GENEALOGY: ~250 words
RECURSIVE_THEORY_OF_MIND: ~250 words
CROSS_LAYER_VETO_ADJUDICATION: ~200 words
RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1750 words. Good.

Citations: Use [PAGE 1], [PAGE 2], etc. Verbatim quotes: "win dominance", "self-consistency", "ex-ante fairness bound", etc.

Let's write.

Important: no mention of odds/spreads/totals/moneylines. I will say "market-implied strength signals" or "external calibration data derived from pricing models". The paper says "using data on betting odds" - I will paraphrase as "using market-price signals" or "using market-implied strength information". Avoid "odds".

Also avoid fake equations. All equations must be from paper or clearly derived formalism.

Let's construct LaTeX:

GWP:
\[ v_i = \alpha \sum_{j=1}^n \frac{w_{ij}}{g_i} + (1-\alpha) \sum_{j=1}^n \frac{g_{ij}}{g_i} v_j, \quad \alpha \in [0,1] \]

where \(g_i = \sum_j g_{ij}\), \(G = W + W^T\).

Points-per-game:
\[ \text{Points assigned to winning team } i = \alpha \times 1 + (1-\alpha) \times v_j \]
\[ \text{Points assigned to losing team } j = \alpha \times 0 + (1-\alpha) \times v_i \]

Fairness bound:
\[ \alpha \ge \frac{1}{2} \quad \text{(global win dominance)} \]
NCAA ex-ante: \(\alpha = 0.41\)
NCAA efficiency: \(\alpha^* \approx 0.3473\) (simulation) or closer to 0.15 per text.

Efficiency SS:
\[ SS = \sum_{j=1}^n [ w_i^* - E(\tilde{v}_i) ]^2 \]

LR metric:
\[ LR = \sum_{i=1}^{25} | \ln(x_i + \kappa) - \ln(y_i^\alpha + \kappa) |, \quad \kappa = 2.5 \]

Matrix form perhaps: \(\mathbf{v} = \alpha \mathbf{w}/ \mathbf{g} + (1-\alpha) P \mathbf{v}\) where \(P_{ij} = g_{ij}/g_i\). Then \((\mathbf{I} - (1-\alpha)P)\mathbf{v} = \alpha \mathbf{w}/\mathbf{g}\). Unique if spectral radius \(\rho((1-\alpha)P) < 1\). Since rows of P sum to 1, spectral radius is 1, but with α>0 there is a unique solution? Actually it's a linear system. For α ∈ (0,1], matrix is invertible because (1-α)P has spectral radius 1-α < 1 if α > 0. If α=0, singular unless P has eigenvalue 1 and system may not have unique solution. Breakdown: α=0 leads to non-unique scores (any constant vector?). Actually if α=0, v = P v, so v is eigenvector with eigenvalue 1. If graph connected, unique up to scaling, but scores need normalization. This is a singularity regime.

Breakdown regimes:
- g_i = 0: division by zero, team with no games.
- α = 0: win percentage term vanishes, system reduces to v = Pv, non-unique without normalization, win dominance fails trivially (all wins give 0 points? Actually points for win = 0*1 + 1*v_j = v_j, points for loss = 0*0 + 1*v_i = v_i, so losing to a strong team gives more than beating weak team possibly).
- α < 1/2: possible win dominance violation when a team of score near 1 loses (gets 1-α > α points) versus beating team near 0 (gets α points).

Now write the sections.

THINK_TRACE deep derivation: Start from the win matrix W and games matrix G. Define points-per-game decomposition. Show how GWP emerges as weighted average of win percentage and strength of schedule. Derive the linear system and invertibility condition. Discuss the 6 axioms and why GWP uniquely satisfies them for α ≥ 1/2. Gray-zone audit: endogeneity of strength of schedule (v_j appears on both sides), calibration κ=2.5 arbitrary-ish, ρ parameter unobserved in real schedule, complete tournament counterfactual unobservable, betting-market proxy (avoid odds word) introduces external information not in win matrix, fairness-efficiency conflict (fair α≥0.41 vs efficient α*≈0.15-0.35). NCAA application: all 14 rankings unfair, best fit α<0.41, Power Five overrated, UCF 2017 excluded despite #1 implied rank.

Let's write in a formal tone.

I need to be careful about word count. Let's aim for:
THINK_TRACE: 500+
SOURCE_OPERATORS_AND_EQUATIONS: 350+
RETROCAUSAL_GENEALOGY: 250+
RECURSIVE_THEORY_OF_MIND: 250+
CROSS_LAYER_VETO_ADJUDICATION: 200+
RLVR_COUNTERFACTUAL_VETOES: 200+

Let's draft.

THINK_TRACE:
I will write a deep multi-hop derivation. Start from [PAGE 3] W and G definitions. Then [PAGE 4] points-per-game. Then [PAGE 6] GWP formula. Then derive matrix form and uniqueness. Then fairness axioms chain. Then efficiency conflict. Then NCAA calibration results. Gray zones: self-consistency circularity, κ, ρ, unobserved complete tournament, market-implied proxy limits. Multi-hop: W → G → p_i → v_i → axioms → α bounds → NCAA α* → bias detection → UCF case.

Make sure >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with page citations. Units. Breakdown regimes.

RETROCAUSAL_GENEALOGY:
Lineage: Colley, Keener (Perron-Frobenius), Chebotarev row sum, Slutzki & Volij, Palacios-Huerta & Volij, Stern (1991) win probability model. Multi-week traps: incomplete schedules over a season mean early games anchor strength estimates; end-of-season strength depends on final scores; retrocausal loop because ranking at week t uses opponents' final scores which include games after week t. Strength-of-schedule adjustment is retrospective.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under playoff selection pressure, committees revert to salient cues (win-loss record, brand) → α drifts toward 1 (win percentage) or toward reputation-based strength of schedule, violating α≥0.41 consistency. Counter-trap: analyst applies GWP to "fix" ranking but then overfits to past committee rankings (κ calibration) and reproduces same bias. Clock: 2011-2017 window, BCS→CFP transition, weekly rankings are a clocked recursive process where each week's release conditions next week's schedule perception.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: game cancellations/postponements due to weather alter G (fixture matrix), creating missing entries g_ij=0 where games expected, violating random incomplete tournament assumptions. Biomechanical layer: injuries remove key players, so the same opponent j is not the same "strength" across the season; win matrix W records outcomes but not roster state, violating the assumption that only who won matters. Weather: home-field effects and game conditions are excluded; if weather systematically favors one team, the win signal is confounded. These vetoes invalidate the pure paired-comparison abstraction because the model assumes W is the sole information source [PAGE 2].

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Shortened season (g=5, n=12). Veto: α ≥ 0.25 required for win dominance [PAGE 5], but if committee uses α=0.41 (NCAA ex-ante bound), efficiency collapses because strength-of-schedule signal is too weak with few games. Prediction: simulated ranking under α=0.41 will exhibit higher SS vs true win percentage than α=0.25; committee rankings will show a winless team ranked above a team with wins due to strength-of-schedule overweighting. Verifiable via Monte Carlo with n=12, g=5.
2. Correlated scheduling (ρ → 1 or ρ → -1). Veto: efficiency-maximizing α* drops substantially below fairness bound [PAGE 10]; using α=0.41 yields inefficient ranking. Prediction: with ρ=0.8, α* < 0.20 while fairness requires α ≥ 0.41; any ranking satisfying fairness will have SS at least 2× the minimum SS. Verifiable by simulation.
3. Margin-of-victory / home-field layer introduced. Veto: GWP assumes only W matters [PAGE 2]; adding MOV breaks anonymity/win-loss fairness because points no longer depend only on opponent identity. Prediction: GWP-implied top-25 will diverge from committee top-25 by more than 3 positions on average for teams with close games but large margins, because committee implicitly weights margin. Verifiable by comparing GWP ranking to AP/Coaches using only W vs using MOV-augmented data.

Need to ensure no mention of "odds". In RLVR or elsewhere, avoid.

Let's check if any forbidden words slip in. "odds" appears in source but not in my output. I'll avoid it.

Also "moneylines", "spreads", "totals" - avoid.

Now compose final output exactly with XML tags.

Make sure total words >= 1000. I'll write generously.

Let's begin.

Section 1: THINK_TRACE (>=400 words)

I'll write about 550 words.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS (~350 words)

Section 3: RETROCAUSAL_GENEALOGY (~250 words)

Section 4: RECURSIVE_THEORY_OF_MIND (~250 words)

Section 5: CROSS_LAYER_VETO_ADJUDICATION (~200 words)

Section 6: RLVR_COUNTERFACTUAL_VETOES (~200 words)

Total should be safe.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs its object from two matrices defined on [PAGE 3]: the win matrix \(W\in\mathbb{R}^{n\times n}\), where \(w_{ij}\) counts times team \(i\) beat team \(j\), and the games matrix \(G\equiv W+W^{T}\), where \(g_{ij}\) counts total meetings between \(i\) and \(j\). The row total \(g_i=\sum_j g_{ij}\) is the number of games played by team \(i\). On [PAGE 4], the points-per-game decomposition is introduced: team \(i\)'s points are \(p_i=\sum_{j=1}^n [w_{ij}F_{ij}(W)+w_{ji}G_{ij}(W)]\), and the score is \(v_i=p_i/g_i\). On [PAGE 6], the generalized win percentage (GWP) family specializes this to a weighted recursion:
\[
v_i=\alpha\sum_{j=1}^n\frac{w_{ij}}{g_i}+(1-\alpha)\sum_{j=1}^n\frac{g_{ij}}{g_i}v_j,\qquad \alpha\in[0,1].
\]
In matrix notation, letting \(P_{ij}=g_{ij}/g_i\) be the row-stochastic opponent-mixing matrix and \(\mathbf{w}_i/g_i\) the win-percentage vector, this becomes \((\mathbf{I}-(1-\alpha)P)\mathbf{v}=\alpha(\mathbf{W}\mathbf{1})\oslash\mathbf{g}\). Because \(P\) is row-stochastic, its spectral radius is 1; for any \(\alpha>0\), the matrix \(\mathbf{I}-(1-\alpha)P\) is strictly diagonally dominant in the relevant substochastic sense and the inverse \((\mathbf{I}-(1-\alpha)P)^{-1}\) exists as a Neumann series \(\sum_{k=0}^\infty (1-\alpha)^k P^k\), guaranteeing a unique finite score vector. The breakdown regime is \(\alpha=0\): the system collapses to \(\mathbf{v}=P\mathbf{v}\), which admits only the stationary distribution of \(P\) and is non-unique absent an external normalization, and \(g_i=0\) produces a division-by-zero singularity for any idle team.

The fairness axioms form a logical chain. Axiom 1 (anonymity) and Axiom 2 (win/loss fairness) force \(F_{ij}\) and \(G_{ij}\) to depend only on opponent identity, not on the identity of the focal team. Axiom 3 (win dominance) requires every win to yield more points than every loss. From the points interpretation on [PAGE 6], a win over \(j\) awards \(\alpha\cdot1+(1-\alpha)v_j\), while a loss to \(i\) awards \(\alpha\cdot0+(1-\alpha)v_i\). Because scores are bounded in \([0,1]\), the worst-case violation occurs when a team loses to a unit-score opponent and beats a zero-score opponent: loss points equal \(1-\alpha\), win points equal \(\alpha\). Hence \(\alpha\ge 1/2\) is necessary and sufficient for global win dominance [PAGE 6-7]. Axioms 4-6 introduce self-consistency and schedule-equivalence monotonicity; the theorem on [PAGE 6] states that GWP uniquely satisfies axioms 1-6 iff \(\alpha\ge 1/2\).

The gray zones are substantial. First, self-consistency is circular: opponent strength is measured by the very scores being determined, so the fixed-point solution can amplify early-season noise. Second, efficiency is defined relative to an unobservable complete-tournament counterfactual [PAGE 5]: true win percentages under a full round-robin are never realized, so \(\alpha^\*\) is estimated by Monte Carlo simulation over synthetic incomplete fixtures [PAGE 8]. Third, the calibration to NCAA rankings uses a log-distance metric \(LR=\sum_{i=1}^{25}|\ln(x_i+\kappa)-\ln(y_i^\alpha+\kappa)|\) with \(\kappa=2.5\) [PAGE 11]; this \(\kappa\) is a tuning parameter, not a theorem-derived constant, and it determines how much top-rank mismatches are penalized relative to bottom-rank mismatches. Fourth, the paper reports an ex-ante fairness bound of \(\alpha=0.41\) for college football (~130 teams, 10-12 games) [PAGE 5], while simulation-based efficiency peaks near \(\alpha^\*\approx 0.35\) under benchmark conditions (\(n=130, g=11, \rho=0\), \(\sigma_W=0.204\)) [PAGE 9-10], and the text states that for college football efficiency is achieved at levels of \(\alpha\) closer to 0.15 [PAGE 8]. This creates a direct fairness-efficiency conflict: the NCAA's historical rankings, fit by minimum \(LR\), occur at \(\alpha<0.41\) for all seven years [PAGE 12], meaning they are systematically unfair by the paper's own win-dominance standard. The conclusion identifies Power Five over-conference bias and the 2017 UCF exclusion as empirical manifestations [PAGE 14-16].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, page citations, and breakdown regimes.

Win matrix and games matrix [PAGE 3]:
\[
W=(w_{ij}),\quad w_{ij}=\#\{\text{times }i\text{ beat }j\};\qquad G\equiv W+W^{T},\quad g_{ij}=\#\{\text{times }i\text{ plays }j\}.
\]
Units: \(w_{ij},g_{ij}\in\mathbb{N}_0\) (dimensionless counts); \(g_i=\sum_j g_{ij}\) is a count of games.

Points-per-game framework [PAGE 4]:
\[
p_i=\sum_{j=1}^n\left[w_{ij}F_{ij}(W)+w_{ji}G_{ij}(W)\right],\qquad v_i=\frac{p_i}{g_i},\quad [v_i]=\text{dimensionless score}.
\]

Generalized win percentage (GWP) recursion [PAGE 6]:
\[
v_i=\alpha\sum_{j=1}^n\frac{w_{ij}}{g_i}+(1-\alpha)\sum_{j=1}^n\frac{g_{ij}}{g_i}v_j,\qquad 0\le\alpha\le1.
\]
Equivalently, points per contest [PAGE 6]:
\[
\text{win over }j:\;\alpha\cdot1+(1-\alpha)v_j;\qquad
\text{loss to }i:\;\alpha\cdot0+(1-\alpha)v_i.
\]

Fairness bound from win dominance [PAGE 6-7]:
\[
\alpha\ge\frac{1}{2}\quad\text{(global, all }n\text{)}.
\]
For finite small tournaments the bound can be lower (zero for \(n=2,3\)), but it rises with \(n\) and falls with sparse play: with 12 teams playing 5 games each, \(\alpha<0.25\) typically violates win dominance; for ~25 teams playing 5 games each, \(\alpha>0.35\) is required [PAGE 5]. NCAA ex-ante fairness bound [PAGE 5]: \(\alpha=0.41\) for ~130 teams playing 10-12 games.

Efficiency loss function [PAGE 8]:
\[
SS=\sum_{j=1}^n\bigl[w_j^{*}-E(\tilde v_j)\bigr]^2,
\]
where \(w_j^{*}\) is the complete-tournament win percentage and \(E(\tilde v_j)\) is the expected normalized GWP score over simulated incomplete tournaments. Units: \(SS\) is squared score units; \(\sqrt{SS/n}\) is a standard deviation in score units.

Best-fit LR metric to historical rankings [PAGE 11]:
\[
LR=\sum_{i=1}^{25}\left|\ln(x_i+\kappa)-\ln(y_i^\alpha+\kappa)\right|,\qquad \kappa=2.5,
\]
where \(x_i\in\{1,\dots,25\}\) is the committee rank and \(y_i^\alpha\in\{1,\dots,n\}\) is the GWP rank.

Correlation parameter \(\rho\) in Monte Carlo fixture generation [PAGE 8]: \(\rho=1\) means teams play near-identical-strength opponents; \(\rho=0\) uniform random pairing; \(\rho=-1\) means teams play opposite-strength opponents. Benchmark calibration for NCAA: \(n=130,\;g=11,\;\rho=0.265,\;\sigma_W=0.204\) [PAGE 10].

Breakdown/singularity regimes: (i) \(g_i=0\) makes \(v_i\) undefined due to division by zero; (ii) \(\alpha=0\) collapses the system to \(\mathbf{v}=P\mathbf{v}\), producing non-unique scores up to the stationary distribution of the row-stochastic mixing matrix \(P\) and violating win dominance trivially; (iii) \(\alpha<1/2\) admits a team losing to a \(v\approx1\) opponent scoring more than a team beating a \(v\approx0\) opponent; (iv) \(n\) small invalidates the global \(1/2\) bound because scores cannot approach the 0 and 1 extremes needed for the dominance argument [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The GWP method sits in a lineage of paired-comparison ranking schemes. References on [PAGE 16-17] trace this genealogy: Colley's bias-free matrix method, Keener's Perron-Frobenius eigenvector ranking for football [PAGE 16, ref 9], Chebotarev's generalized row-sum methods for incomplete paired comparisons [PAGE 16, refs 1-2], and Slutzki & Volij's axiomatizations of scoring in generalized tournaments and web pages [PAGE 16-17, refs 12-13]. Palacios-Huerta & Volij's measurement of intellectual influence [PAGE 16, ref 11] supplies the self-consistency intuition that a node's weight should depend on the weights of its neighbors. Stern (1991) [PAGE 16, ref 14] provides the strength-based winning-probability model used to infer external strength signals for calibration.

The multi-week trap is structural. In an incomplete tournament played over a season, the fixture matrix \(G\) is revealed game-by-game. Early-season games anchor an opponent's score \(v_j\), but \(v_j\) itself is updated by later results, including games against the team being evaluated. Because the GWP fixed point uses final opponents' scores, a week-\(t\) ranking depends on information that does not exist until week \(T\): this is retrocausal. The strength-of-schedule correction therefore lags true team quality; a team that improves across the season is judged partly by the weak opponents it faced when those opponents were weak, and a team that declines is judged partly by strong opponents it faced when they were strong. Because strength is endogenous to the final score vector, the ranking at any intermediate clock time is a function of future outcomes, creating a feedback trap where schedule bias propagates backward through the fixed-point equation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Under playoff-selection pressure, ranking committees exhibit crisis habit regression: they regress to the most cognitively available signals. The paper shows that over 2011-2017, every one of the 14 BCS/AP/CFP rankings failed the win-dominance fairness standard because all were fit at \(\alpha<0.41\) [PAGE 12]. In crisis, committees overweight recent wins, brand, and perceived strength of schedule while underweighting the axiomatic requirement that a win always beats a loss. This is a regression toward either pure win percentage (\(\alpha\to1\), ignoring strength of schedule entirely) or reputation-based schedule weighting (\(\alpha\) effectively low but applied inconsistently), neither of which satisfies the GWP fairness bound uniformly.

The counter-trap is that an analyst attempting to correct this bias with GWP can overfit to the very historical rankings being audited. The \(\kappa=2.5\) calibration [PAGE 11] and the choice to minimize distance to BCS/CFP/AP outputs [PAGE 11] mean the "neutral" method is partially reverse-engineered from biased outputs, so it can reproduce conference and team biases rather than eliminate them. The counter-trap is thus a double bind: using GWP to detect bias still requires a target ranking, and if the target is the committee's own ranking, the method validates the bias it was meant to measure.

The clock is the seven-year observational window [PAGE 11], spanning the BCS-to-CFP transition. Rankings are released weekly, so each week's public ordering conditions perceptions of strength of schedule for subsequent weeks. Because committee members are aware of prior rankings, the recursive theory of mind becomes: "I rank team A above team B because team A beat team C, and team C is ranked highly because last week I ranked team C above team D..." This social recursion, combined with the mathematical endogeneity of GWP scores, means the clock does not provide an independent external reference; it amplifies path dependence and locks in early-season schedule luck.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather vetoes that invalidate the pure win-matrix abstraction.

The model's core assumption [PAGE 2] is that the only usable information is who played whom and who won; margins, venue, injuries, and weather are excluded. Each external layer can veto this assumption.

Physical layer: Weather-driven postponements or cancellations change \(G\) after the season structure is set. If team \(i\) was scheduled to play team \(j\) but the game is not played, \(g_{ij}=0\) where a positive entry was expected, breaking the exogenous incomplete-tournament sampling model used in the Monte Carlo efficiency analysis [PAGE 8]. The resulting \(G\) is no longer a random draw governed by \(\rho\); it is a censored fixture, which biases \(P\) and hence the fixed point \(\mathbf{v}\).

Biomechanical layer: Roster injuries mean team \(j\) in week 4 is not the same physical system as team \(j\) in week 12. The win matrix \(W\) records a binary outcome but treats opponent strength as time-invariant within the recursion. A win over an injured opponent and a win over a healthy opponent receive identical GWP points, violating the spirit of Axiom 4 (self-consistent win/loss fairness) because the opponent's "score" no longer reflects the actual strength faced at game time.

Weather layer: Home-field effects and game-day conditions systematically shift win probabilities independent of team quality. Since the model assigns no venue or weather covariate, a team that benefits from favorable conditions receives the same \(w_{ij}\) credit as a team winning in neutral conditions. This confounds the win signal and causes the fixed-point scores to reflect weather-luck as if it were merit.

Adjudication: Any of these vetoes voids the claim that GWP scores capture a "true" underlying strength. The method remains valid only as a descriptive summary of the observed binary outcomes under the explicit assumption that \(W\) is the complete and sufficient statistic; it is not robust to physical-layer missingness, biomechanical roster drift, or weather-confounded outcomes.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR counterfactual veto scenarios with predictions.

Veto scenario 1 (short-season sparse-fixture collapse): Set \(n=12\), \(g=5\), \(\rho=0\). The paper states win dominance will typically fail for \(\alpha<0.25\) under these conditions [PAGE 5], while the NCAA ex-ante fairness bound for larger schedules is \(\alpha=0.41\) [PAGE 5]. Veto: a ranking authority imposing \(\alpha=0.41\) on a 12-team, 5-game season overweights strength-of-schedule relative to the information available. Prediction: Monte Carlo simulation shows the \(SS\) loss at \(\alpha=0.41\) is at least \(1.5\times\) the \(SS\) loss at \(\alpha=0.25\), and the simulated top-ranked team is a winless team that faced a high-average-score schedule, beating a team with multiple wins against low-score opponents—an observable violation of win dominance.

Veto scenario 2 (strongly correlated scheduling efficiency trap): Set \(n=130\), \(g=11\), \(\rho\to 0.8\) (teams play near-identical-strength opponents). The paper shows \(\alpha^\*\) falls considerably below its \(\rho=0\) value when \(|\rho|\) increases [PAGE 10]. Veto: fairness requires \(\alpha\ge0.41\) [PAGE 5], but efficiency under high \(|\rho|\) pushes \(\alpha^\*\) toward 0.20 or lower. Prediction: simulation yields \(\alpha^\*<0.25\) while any \(\alpha\ge0.41\) produces \(SS\) at least twice the minimum \(SS\); thus no single \(\alpha\) can satisfy both fairness and efficiency, and any published ranking choosing \(\alpha=0.41\) is provably inefficient relative to the simulated complete-tournament counterfactual.

Veto scenario 3 (margin-of-victory contamination): Introduce a margin-of-victory layer into the data while the analyst continues to use GWP, which assumes only \(W\) matters [PAGE 2]. Veto: because the committee implicitly weights game margins (contrary to the paper's operating assumption), the GWP-implied rank \(y_i^\alpha\) will systematically diverge from the committee rank \(x_i\) for teams with close wins against weak opponents versus blowout wins against strong opponents. Prediction: comparing GWP rankings to AP/Coaches ranks over a season, teams ranked in the top 10 by GWP but outside the top 10 by the committee will have average margin-of-victory at least 1.5 standard deviations below teams ranked in the top 10 by both methods; the \(LR\) gap between GWP-only and margin-augmented fits exceeds 0.15 log-units on average.
</RLVR_COUNTERFACTUAL_VETOES>