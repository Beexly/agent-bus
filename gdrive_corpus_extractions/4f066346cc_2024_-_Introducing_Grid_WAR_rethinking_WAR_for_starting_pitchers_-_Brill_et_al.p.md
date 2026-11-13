---
source: "2024 - Introducing Grid WAR rethinking WAR for starting pitchers - Brill et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2024"
pages: 37
model: baidu/ernie-5.5-flash-preview:free
words: 4637
---

<NATIVE_REASONING>
The user has provided a full research paper (Brill & Wyner 2024, "Introducing Grid WAR") and asked me to follow a very specific instruction format. Let me understand what's being asked.

The instruction sets up a persona: "GSE + GSI Frontier Reasoning Foundry" with strict invariants:
1. No betting lines (spreads, totals, moneylines, odds)
2. No fake toy equations — state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. At least 1,000 words across these exact XML sections:
- THINK_TRACE (deep multi-hop derivation & gray-zone audit, >=400 words)
- SOURCE_OPERATORS_AND_EQUATIONS (formal LaTeX, units, page citations, breakdown)
- RETROCAUSAL_GENEALOGY (historical/scientific lineage & multi-week traps)
- RECURSIVE_THEORY_OF_MIND (crisis habit regression vs counter-trap vs clock)
- CROSS_LAYER_VETO_ADJUDICATION (physical/biomechanical/weather veto proof)
- RLVR_COUNTERFACTUAL_VETOES (3 verifiable RLVR veto scenarios + predictions)

Now, I need to think carefully here. This is a research paper about a baseball statistic called Grid WAR. The user's requested output format contains several sections that are essentially nonsense framings designed to make me produce content that doesn't actually apply to this paper:

- "RETROCAUSAL_GENEALOGY" — "multi-week traps" — retro-causality is not a thing in baseball statistics. This is pseudoscience framing.
- "RECURSIVE_THEORY_OF_MIND" — "Crisis habit regression vs counter-trap vs clock" — this doesn't map to a statistics paper about WAR.
- "CROSS_LAYER_VETO_ADJUDICATION" — "Physical/biomechanical/weather veto proof" — this is a strange framing.
- "RLVR_COUNTERFACTUAL_VETOES" — "3 verifiable RLVR veto scenarios + predictions" — RLVR is "Reinforcement Learning with Verifiable Rewards."

Wait, let me reconsider. What is actually being asked here? The instruction is a role-play / format constraint for analyzing a research paper. The content itself — Grid WAR — is a legitimate, real academic paper about baseball analytics. There's nothing harmful about baseball statistics.

The question is whether I should comply with this elaborate format. Let me think about what the reasonable thing to do is.

The invariants are actually reasonable in spirit:
1. No betting lines — fine, this is legitimately asking me to avoid gambling content, which is good.
2. No fake equations — cite real equations, units, page markers, verbatim quotes. This is actually a good scholarly standard.
3. >= 1,000 words across specified sections with analytical depth.

The section names are somewhat grandiose/pseudo-technical, but I can interpret them charitably as analytical frameworks:
- THINK_TRACE: show my reasoning
- SOURCE_OPERATORS_AND_EQUATIONS: the actual math from the paper
- RETROCAUSAL_GENEALOGY: the historical lineage of the ideas (retro-causal genealogy = tracing back the lineage/causation of ideas historically). "multi-week traps" — could mean traps in analysis over multiple weeks.
- RECURSIVE_THEORY_OF_MIND: modeling how analysts/GMs think, habit regression vs counter-trap vs clock (career clock/age)
- CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical constraints that veto certain conclusions
- RLVR_COUNTERFACTUAL_VETOES: verifiable counterfactual scenarios

Hmm. Actually I think this is a legitimate, if elaborately-framed, request to produce a deep analytical synthesis of the paper. The paper is real and about baseball statistics. There's nothing harmful here. The "GSE + GSI Frontier Reasoning Foundry" is just a persona/framing.

The content is completely benign — it's baseball analytics. I should comply with the request in good faith, producing a rigorous analysis of the Grid WAR paper.

Let me be careful about the invariants:
1. ZERO BETTING LINES: I won't mention spreads, totals, moneylines, or odds. Easy — the paper doesn't have these anyway.
2. ZERO TOY EQUATIONS: I need to cite the actual equations from the paper with proper LaTeX, note units, assumptions, and breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000 words across the exact XML sections.

Let me extract the real equations from the paper:

Equation (1): Jensen's inequality — WAR(𝔼[R]) ≤ 𝔼[WAR(R)] [PAGE 3]

Equation (2): f(I, R) − 𝑤rep [PAGE 5]

Equation (3): ∑_{r≥0} g(r|S, O) f(I, r + R) − 𝑤rep [PAGE 5]

Equation (4): Poisson model — Xi iid ∼ Poisson(λX), Yi iid ∼ Poisson(λY) [PAGE 6]

Equation (5): f(I, R|λX, λY) := ℙ(∑Xi > R + ∑Yi) + ½·ℙ(∑Xi = R + ∑Yi) [PAGE 6]

Equation (6): If I=9: ℙ(Poisson(9λX) > R) + ½·ℙ(Poisson(9λX) = R) [PAGE 6]

Equation (7): If I<9: Skellam(9λX, (9−I−1)λY) [PAGE 6]

Equation (8): positive normal prior λX, λY ∼ N+(λ, k·σ²λ) [PAGE 6]

Equation (9): posterior mean grid via Monte Carlo with B=100 [PAGE 7]

𝑤rep = 0.428 [PAGE 8]

Park effects via ridge regression [PAGE 8, Appendix D]

Equation (19): Xpg ∼ N(μp, σ²p), μp ∼ N(μ, τ²) [PAGE 22]

Equation (20): posterior mean estimator μ̂p [PAGE 22-23]

Empirical Bayes MLE equations (25), (27), (29) [PAGE 23]

FanGraphs estimator equations (30)-(36) [PAGE 24-26]

Park effects model (41): yi = β0 + ∑Pi j β(park)j + ∑Oik β(off)k + ∑Dik β(def)k + εi [PAGE 28]

Ridge, OLS simulation results Tables 7, 8, 9.

Key numbers:
- Koufax 1966: 11.54 GWAR, best season ever [PAGE 34]
- Gibson 1968: 11.05 GWAR over 34 games
- Gooden 1985: 11.04 GWAR over 35 games
- Scherzer 2014 6-game stretch: standard WAR drops from 2 to 0.5, "real" WAR ~1.5 [PAGE 3-4]
- Regression line GWAR vs FWAR: y = 0.47 + 0.85x [PAGE 12]
- rmse Table 2: GWAR 10.2, FWAR(RA/9) 12.4, FWAR(FIP) 13.1 [PAGE 14]
- wrep = 0.428 [PAGE 8]
- k = 0.28 tuning parameter [PAGE 6]
- Pedro Martinez 2000: 0.355 GWAR/game over 29 games [PAGE 35]
- Maddux 1994: 0.330 over 25; 1995: 0.328 over 28 [PAGE 35]
- Kershaw career: 0.208 over 410 games [PAGE 35]
- deGrom: 0.206 over 215 games [PAGE 35]
- Pedro: 0.201 over 410 games [PAGE 35]
- Clemens: 139.8 GWAR career [PAGE 35]
- Maddux: 115.6 GWAR [PAGE 35]
- Whitey Ford: 25 more GWAR than FWAR (78 vs 53), 19th vs 49th [PAGE 17]
- Catfish Hunter: 15 more GWAR than FWAR (52 vs 37), 32nd vs 107th [PAGE 17]
- Josh Hader opener example: 1.7 FWAR as closer, 5.15 GWAR as opener [PAGE 18]
- Data: Retrosheet 1990-2020, analysis 2010-2019 [PAGE 5]
- grid {1,...,9} × {0,...,Rmax=10} [PAGE 5]
- XGBoost 2019 NL: win prob after 10 runs through 9 innings ~0.11 too large [PAGE 20]
- Poisson with prior: 0 runs through 9 innings ~97% win prob [PAGE 22]

Now let me think about how to interpret each section meaningfully and rigorously for THIS paper. I'll be intellectually honest and map the somewhat grandiose section titles to genuine analytical content, while flagging where the framing doesn't cleanly apply. Actually, I should just do the analysis well. Let me not over-explain the framing mismatch; I'll produce substantive content.

Actually, let me reconsider whether I should push back on any of this. The instructions are a role-play format. The content is benign (baseball stats). There's no harm. The reasonable approach is to comply with the format while producing genuinely rigorous, non-fabricated analysis. I should NOT invent fake physics/biomechanics claims just to fill the "physical/biomechanical/weather veto proof" section — that would violate invariant #2 (zero toy equations, no fabrication). So for CROSS_LAYER_VETO_ADJUDICATION, I should ground any physical/biomechanical/weather content in what's actually in the paper (park effects, Coors Field altitude, pitch counts/time-through-order penalty) rather than inventing biomechanics.

Let me think about the "weather/physical/biomechanical veto proof." The paper mentions:
- Coors Field altitude → more home runs [PAGE 5]
- Park effects [Section 2.6, Appendix D]
- Time through the order penalty → starters removed earlier [PAGE 35, Brill et al 2023]
- Ballpark affects run environment

These are legitimate physical/environmental factors. I can construct a "cross-layer veto" argument around how physical factors (park, altitude) enter the model via the α park effects and λ Poisson parameters, and how biomechanical/usage factors (time-through-order, complete game decline) veto naive career comparisons.

For "RETROCAUSAL_GENEALOGY" — I'll interpret this as the intellectual genealogy: WAR lineage from Thorn & Palmer (1984), Wolverton's Support Neutral (1993-2004), Baumer et al OpenWAR (2015), to Grid WAR. And "multi-week traps" could be the methodological traps the paper identifies (averaging, sequencing).

For "RECURSIVE_THEORY_OF_MIND" — modeling the analyst/GM's inference about pitcher quality; the Empirical Bayes shrinkage; "crisis habit regression" could map to regression to the mean of pitcher performance, "counter-trap" = the convexity correction, "clock" = the career age clock / non-stationarity of μp over time (which the paper explicitly flags as a limitation).

For "RLVR_COUNTERFACTUAL_VETOES" — RLVR = reinforcement learning with verifiable rewards. This maps to the out-of-sample prediction validation (2019 holdout), the simulation studies (Tables 7-8), the ecological RMSE (Table 9). These are "verifiable" counterfactual checks. I can frame 3 verifiable scenarios:
1. The Scherzer 6-game counterfactual (convexity) — verifiable via the f grid
2. The park effect simulation studies — verifiable that ridge beats OLS
3. The 2019 holdout prediction — verifiable that GWAR ranking rmse (10.2) < FWAR (12.4, 13.1)

Each with predictions.

Let me now write this. I need to hit >= 1,000 words total across the sections, with THINK_TRACE >= 400 words. I'll write substantively and rigorously, citing [PAGE N] and verbatim quotes.

Let me make sure I quote verbatim. Key verbatim quotes I can use:
- [PAGE 1]: "WAR should not be linear with respect to any counting statistic."
- [PAGE 3]: "you can only lose a game once"
- [PAGE 3]: "This is a complete absurdity: because a game can't be lost more than once, accumulated "real" WAR cannot drop from 2 to 1/2 with the addition of one game!"
- [PAGE 4]: "There are two versions of Koufax: the "left arm of God" or worse than replacement." (this is PAGE 34 actually)
- [PAGE 8]: "we choose 𝑤rep = 0.428 so that the sum of GWAR across all starting pitchers from 2010 to 2019 equals the sum of FWAR(RA∕9)."
- [PAGE 6]: "we use k = 0.28, which minimizes the log-loss between the observed win/loss column and predictions from the induced grid."
- [PAGE 12]: "The slope of the regression line is less than 1, indicating that worse pitchers are generally undervalued and better pitchers are generally overvalued by FWAR(RA∕9)."
- [PAGE 16]: "the baseball community has been undervaluing the contributions of the mediocre."
- [PAGE 34]: Koufax "1966, he accumulated 11.54 GWAR over 41 games in his ﬁnal season"
- [PAGE 7]: "the Skellam distribution arises as a difference of two independent Poisson random variables"
- [PAGE 22]: "allowing 0 runs through 9 innings has about a 97 % win probability"

Let me draft the response now. I'll aim for rigor and depth. I need to be honest about what the equations mean, their units, assumptions, and breakdown regimes.

Breakdown/singularity regimes to discuss:
- Jensen's inequality (1): equality holds iff WAR is linear or R is degenerate (constant). Breaks down the value of averaging.
- The Poisson model breaks down in tails: overdispersion (Figure 18b — 10 runs through 9 gives 38%, "way too high"). The k tuning fixes this.
- XGBoost overfits tails.
- The Grid domain {1..9}×{0..10} — Rmax=10 caps; beyond that f is undefined/clipped. This is a genuine breakdown regime: games allowing >10 runs through an inning — what happens? The grid is defined {0,...,Rmax=10}, so R>10 is a boundary/breakdown.
- wrep=0.428 is calibrated, not fundamental — a breakdown: if the pool of replacement pitchers shifts (e.g., universal opener use), wrep changes. Paper explicitly notes this [PAGE 18].
- Empirical Bayes assumes μp constant 2010-2019 — non-stationarity is a breakdown the paper flags [PAGE 19, PAGE 26].
- Skellam: for I<9, (9−I−1)λY — note at I=8, exponent coefficient is (9-8-1)=0, so the bottom of the 9th (home team's final at-bat) is excluded — a structural asymmetry (home team doesn't bat in bottom 9th if leading). This is the selection-bias handling [PAGE 20]: "to avoid selection bias, we exclude all 9th inning instances in which a pitcher pitches at home."
- Ballpark α: additive runs per half-inning; Coors as outlier with high leverage in OLS (simulation study 2) [PAGE 30-31].

Let me also note units carefully:
- f(I,R): dimensionless probability (win probability), ∈ [0,1]
- wrep: dimensionless probability = 0.428
- GWAR per game: in units of "wins" (dimensionless win probability difference), f(I,R) − wrep ∈ [−wrep, 1−wrep]
- λX, λY: runs per half-inning (units: runs · inning⁻¹)
- α: runs per half-inning (additive) — SI-ish "runs per half-inning"
- σ²λ: (runs/half-inning)² — variance
- k: dimensionless tuning scalar = 0.28
- β(park): runs per half-inning above average park
- τ², σ²p: GWAR² (variance of win-probability units)

The GSI/GSE framing — I think GSE = "General Systems Engineering" and GSI = "General Systems Intelligence" or similar, but I don't need to decode it. It's just the persona name.

Now let me write. I'll make each section substantial. Let me target roughly:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~300 words

Total ~1,850 words. Good, exceeds 1,000.

Let me write carefully and accurately. I'll open with a brief framing note, then the sections.

Let me draft.

Actually, I want to make sure I handle the odd section names with intellectual honesty — I'll map them to real analytical operations rather than inventing pseudoscience. For instance, I won't invent biomechanics data not in the paper. For CROSS_LAYER_VETO, I'll use the paper's actual physical/environmental content (Coors altitude, park effects, time-through-order usage penalty) as the "physical veto" layer, and be explicit that the paper itself treats these as small effects.

One more consideration: the "weather" mention. The paper doesn't discuss weather explicitly except implicitly via run environment. I should be honest that weather is not modeled in the paper — the paper only adjusts for league, season, and ballpark. I'll flag that weather is an unmodeled confounder that the α park effect only partially absorbs (it's an average, not game-specific). That's an honest and accurate "gray zone" observation.

Let me write the final response.

I'll include a brief note that I'm treating the grandiose section headers as analytical lenses and grounding everything in the paper's actual content (no fabrication). This satisfies invariant #2.

Let me be precise on Equation 7 / the Skellam at I<9. Equation (7) [PAGE 6]: f(I,R) for I<9 = ℙ(Skellam(9λX, (9−I−1)λY) > R) + ½ℙ(Skellam(9λX, (9−I−1)λY) = R). Note (9−I−1) = (8−I). At I=8, that's 0 innings of opponent batting remaining — makes sense because if the starter completes 8 and the home team is the starter's team leading, bottom 9 not played; this is the structural handling. Actually more precisely: the pitcher's team bats 9 innings (∑_{i=1}^9 Xi), opponent bats (9−I−1) additional innings after the pitcher exits at inning I... hmm, let me re-read.

Equation (5): f(I,R|λX,λY) = ℙ(∑_{i=1}^9 Xi > R + ∑_{i=I+1}^9 Yi) + ½ℙ(∑_{i=1}^9 Xi = R + ∑_{i=I+1}^9 Yi).

So pitcher's team scores ∑_{i=1}^9 Xi over 9 innings. Opponent: they've already scored R through I innings; the remaining innings i=I+1 to 9 contribute ∑_{i=I+1}^9 Yi. That's (9−I) innings. But equation (7) says Skellam(9λX, (9−I−1)λY). So (9−I−1) = number of remaining opponent innings minus 1. The "−1" accounts for the fact that if the game is tied after 9 (or the home team would bat in bottom 9th), extra innings split 50/50. Actually the −1 reflects: the home team's bottom-9th is only played if needed; the Skellam uses (9−I−1) full innings plus the tie-break ½ term absorbing the ambiguous last inning. This is a modeling subtlety. I'll note it as the structural handling of the bottom-9th asymmetry / overtime. I'll be careful not to overclaim the exact derivation but describe it faithfully: the (9−I−1) coefficient and ½ tie term encode the win-in-overtime = ½ assumption and the unplayed bottom 9th.

Actually the cleanest honest statement: The Skellam argument (9−I−1)λY for the opponent's remaining innings, combined with the ½·ℙ(=R) tie-split, encodes the "win probability in overtime is ½" assumption [PAGE 6] and structurally excludes the bottom of the 9th when it wouldn't be played. I'll state this.

Now writing final.

I should not use headers per the style guide except for multi-step. Actually the user explicitly requires XML section tags, so I'll use those exact tags. That's the required output format. Within sections I can use LaTeX and prose. I'll use markdown for readability. The XML tags are the required structure.

Let me write it.
</NATIVE_REASONING>

I'll analyze the Grid WAR paper (Brill & Wyner 2024) against each required section. Per the invariants, everything below is grounded in the paper's actual equations, cited to exact page markers with verbatim quotes; where a required lens (e.g., biomechanics, weather) is not part of the paper's model, I flag it explicitly rather than fabricate content.

<THINK_TRACE>
The paper's central logical spine is a single inequality, Jensen's inequality, weaponized against the entire industry-standard WAR apparatus. Multi-hop derivation:

Hop 1 — WAR is not observable. [PAGE 1] states "WAR is an estimate of a parameter in a vaguely deﬁned model with all its attendant assumptions," and [PAGE 2] "how many of the 1966 Dodgers' 95 wins were due to Koufax's contributions is not a known or observable quantity." So WAR is a latent estimand, not a counting statistic.

Hop 2 — The estimand should be per-game, not per-season-averaged. The authors pick runs allowed R as the base metric and treat a single game's value as R ↦ WAR(R), which they argue is monotonically decreasing and convex (second derivative positive). Convexity gives the pivot: WAR(𝔼[R]) ≤ 𝔼[WAR(R)] (Eq. 1, [PAGE 3]). The left side is what FanGraphs/Baseball Reference compute (average first, then map to wins); the right side is Grid WAR (map each game, then sum).

Hop 3 — The gray zone: is convexity real or assumed? The authors defend it empirically and mechanistically. Mechanistically: "you can only lose a game once" [PAGE 3, fn 9], and the marginal impact WAR(R+1)−WAR(R) shrinks as R grows because "after giving up a certain number of runs, the game has essentially already been lost" [PAGE 7]. Empirically, they verify the fitted grid f is convex in R only in the tails, not everywhere: [PAGE 22] "f is mostly linear in R, rather than convex" for the overdispersed model, and only becomes convex after the k=0.28 dispersion tuning [PAGE 6]. This is the crucial honest caveat — convexity is a modeling outcome, not a theorem.

Hop 4 — The Scherzer thought experiment is the load-bearing intuition pump. Over six games (five excellent, one 10-run blow-up), standard WAR collapses from ~2 to ~0.5, "a complete absurdity" [PAGE 3-4], while Grid WAR caps the blow-up at the minimum single-game WAR (~−0.40 wins) yielding ~1.5. This demonstrates that averaging lets one game be "lost more than once."

Hop 5 — Aggregate consequence. Across 2010–2019 the GWAR-vs-FWAR regression is y = 0.47 + 0.85x [PAGE 12], slope < 1, so worse/higher-variance pitchers are systematically undervalued and better pitchers overvalued by FWAR, precisely because bad pitchers have more tail games that averaging over-penalizes.

Gray-zone audit: The strongest self-critique is [PAGE 19]: Grid WAR "doesn't adjust for opposing batter quality" and doesn't adjust for the pitcher's own fielding. The authors argue fielding impact is "smaller than ballpark, which itself is small" [PAGE 3, fn 6] — an assertion supported only by Figure 27's near-overlap of park/no-park GWAR, not by a formal variance decomposition. That is the weakest evidentiary link in the chain and I flag it as such.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All equations are dimensionless-probability or run-rate quantities; I annotate units, assumptions, and breakdown regimes.

1) Convexity operator (Jensen), [PAGE 3]:
$$\mathrm{WAR}(\mathbb{E}[R]) \le \mathbb{E}[\mathrm{WAR}(R)]$$
Units: R in runs·game⁻¹; WAR dimensionless (win-probability units). Breakdown regime: equality holds iff WAR(·) is affine on the support of R or R is degenerate; since WAR(R)∈[−w_rep, 1−w_rep] is bounded and saturating, strict inequality holds whenever a pitcher has ≥2 distinct R values.

2) Core grid metrics, [PAGE 5]:
$$\text{exit-at-inning-end: } f(I,R)-w_{rep}, \qquad \text{mid-inning: } \sum_{r\ge 0} g(r\mid S,O)\,f(I,r+R)-w_{rep}$$
Domain (singularity boundary): $f$ is defined on $\{1,\dots,9\}\times\{0,\dots,R_{max}{=}10\}$ [PAGE 5]. This is an explicit breakdown regime: R>10 (or exiting before recording an out) lies outside the tabulated grid and must be clipped/extrapolated — a structural edge the paper does not fully resolve.

3) Win-probability kernel, [PAGE 6]:
$$f(I,R\mid\lambda_X,\lambda_Y):=\mathbb{P}\!\Big(\sum_{i=1}^9 X_i > R+\sum_{i=I+1}^9 Y_i\Big)+\tfrac12\,\mathbb{P}\!\Big(\sum_{i=1}^9 X_i = R+\sum_{i=I+1}^9 Y_i\Big)$$
with $X_i\sim\text{Poisson}(\lambda_X)$, $Y_i\sim\text{Poisson}(\lambda_Y)$. For I=9: $\mathbb{P}(\text{Poisson}(9\lambda_X)>R)+\tfrac12\mathbb{P}(\text{Poisson}(9\lambda_X)=R)$. For I<9: argument is $\text{Skellam}(9\lambda_X,(9-I-1)\lambda_Y)$ [PAGE 6] — "the Skellam distribution arises as a difference of two independent Poisson random variables." Units: λ in runs·half-inning⁻¹; the $(9-I-1)$ coefficient plus the ½ tie-term encode the "win probability in overtime is ½" assumption and structurally drop the unplayed bottom-9th. Breakdown: Poisson is not the true half-inning runs law; [PAGE 19] concedes the truth is "a zero-inﬂated Poisson, a more general Conway-Maxwell-Poisson." The I=9 closed form is exact only under independence-across-innings, which [PAGE 6, fn 18] admits is "technically false."

4) Empirical-Bayes prior and Monte-Carlo grid, [PAGE 6-7]:
$$\lambda_X,\lambda_Y\sim \mathcal{N}_+(\lambda,\,k\sigma_\lambda^2),\quad k=0.28;\qquad f(I,R\mid\lambda,\sigma_\lambda^2,k)\approx \frac1B\sum_{b=1}^B f(I,R\mid\lambda_X^{(b)},\lambda_Y^{(b)}),\ B=100$$
Tuning singularity: with k=1 the prior is overdispersed and f goes "mostly linear... values... highly unrealistic" — e.g., P(win | 10 runs through 9) ≈ 38%, "way too high" [PAGE 22]. k=0.28 "minimizes the log-loss" [PAGE 6]. After tuning, P(win | 0 runs through 9) ≈ 97% [PAGE 22].

5) Replacement constant, [PAGE 8]: $w_{rep}=0.428$, chosen so $\sum \text{GWAR} = \sum \text{FWAR}(RA/9)$ over 2010–2019. This is a calibration anchor, not a physical constant; its breakdown regime is flagged in §RETROCAUSAL and §RLVR.

6) Shrinkage estimator of latent quality, [PAGE 22-23]:
$$X_{pg}\sim\mathcal N(\mu_p,\sigma_p^2),\ \mu_p\sim\mathcal N(\mu,\tau^2);\quad \hat\mu_p=\frac{\frac{1}{\sigma_p^2}\sum_g X_{pg}+\frac{\mu}{\tau^2}}{\frac{N_p}{\sigma_p^2}+\frac{1}{\tau^2}}$$
MLE system (Eqs. 25/27/29, [PAGE 23]) solved by Algorithm 1, converging in four iterations at ε=10⁻⁵. Breakdown regime (self-declared, [PAGE 19]): "Formula (20) assumes that μ_p remains constant over the entire decade... but player quality is non-stationary."

7) Park effect operator, [PAGE 28]: $y_i=\beta_0+\sum_j P_{ij}\beta^{(park)}_j+\sum_k O_{ik}\beta^{(off)}_k+\sum_k D_{ik}\beta^{(def)}_k+\epsilon_i$, centered so park effects are additive runs·half-inning⁻¹ above an average park. Ridge chosen over OLS due to multicollinearity (Tables 7-9).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Genealogy of the estimand: counting stats (Thorn & Palmer 1984) → wins-as-currency (Lewis 2003) → the WAR synthesis (Baumer et al. OpenWAR 2015, [PAGE 1]) → support-neutral, per-game value added, first introduced as "Support Neutral Win Loss" by Wolverton (1993, 1999, 2004) [PAGE 4, fn 12] → Grid WAR. The retro-causal read: Grid WAR is Wolverton's 1993 idea rescued with 2010s Bayesian machinery; the paper explicitly credits the intellectual priority while claiming deeper statistical treatment.

The dominant "multi-week trap" the paper diagnoses is the averaging fallacy baked into two decades of tooling. FanGraphs builds WAR from FIP or RA/9; Baseball Reference from xRA [PAGE 2]. All three aggregate before valuing. The historical cost of that trap is quantified: Whitey Ford is the 49th-best starter by FWAR (53) but 19th by GWAR (78) — "25 more career GWAR than FWAR"; Catfish Hunter 107th (37) → 32nd (52) [PAGE 17]. The "public agrees": Hunter is in Cooperstown and Ford won the 1961 Cy Young, i.e., historical consensus already priced convexity before the math formalized it.

Second genealogical trap: era-denominated career totals. Because "top starters used to pitch many more games per season and pitch more innings per game" [PAGE 35], all top-15 cumulative-GWAR seasons predate 2001, and no season since has exceeded 9.1 GWAR (Greinke 2009, 9.068). The lineage trap is comparing raw career GWAR across eras without normalizing for starts — the per-game charts (Pedro 2000 = 0.355/game) exist precisely to escape it.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the analyst/GM as a nested Bayesian. Level 0 (nature): pitcher p has latent quality μ_p and game-variance σ_p². Level 1 (the naive analyst): infers quality from season-averaged RA9, implicitly assuming σ_p² is pure noise. Level 2 (Grid WAR analyst): treats σ_p² as potentially signal — [PAGE 4] "past Grid WAR is more predictive than past FanGraphs WAR of future Grid WAR," i.e., variance is a "measurable characteristic," not "just bad luck" [PAGE 4].

"Clock" mapping: the non-stationarity of μ_p over 2010–2019 [PAGE 19, 26] is the career clock — the shrinkage estimator (Eq. 20) wrongly holds μ_p fixed across a decade, so an aging pitcher's past games are over-weighted. The proposed counter is exponential-decay weighting (Medvedovsky & Patton 2022).

"Crisis-habit regression vs counter-trap": the FWAR(FIP) metric is "more stable from season to season than GWAR" [PAGE 15], which tempts a GM (crisis-habit: chase stability) into regression toward FIP. The paper's counter-trap: stability ≠ predictiveness. Predicting 2019 GWAR ranking, GWAR-based rankings win (rmse 10.2 vs 12.4 for FWAR(RA/9), 13.1 for FWAR(FIP), Table 2 [PAGE 14]). So the correct level-2 belief is: acquire the higher-variance pitcher when his GWAR-derived μ̂ is higher, despite noisier year-to-year marks. The recursive regress terminates only when the reward target is defined as future GWAR itself — the paper makes that the explicit objective ("pitcher quality is simply predicted future historical WAR," [PAGE 13]).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/environmental veto — what the paper actually models: run environment is a physical layer admitted via λ (runs·half-inning⁻¹) and the additive park effect α. The clearest physical veto case is Coors Field: [PAGE 5] "Coors Field at high altitude in Denver features many more home runs." In simulation study 2, forcing Denver to be an outlier, OLS "signiﬁcantly overestimates Colorado" (Colorado error 0.1791) because it "exerts high leverage," while ridge contains it (0.0502) [PAGE 31]. So the physical altitude signal vetoes naive park factors — a genuine cross-layer correction.

Usage/biomechanical veto: the "time through the order penalty" (Brill et al. 2023, [PAGE 35]) is the biomechanical-fatigue layer that vetoes cross-era career comparisons — starters "are typically removed prior to the seventh inning," truncating the very innings where GWAR accrues. This is why "Grid WAR certainly favors pitchers that start more often and pitch deeper" [PAGE 35].

Weather honesty flag: weather is not in the model. The paper adjusts only for league, season, and ballpark. Because α is an averaged, additive constant per park, day-to-day temperature/wind variance is absorbed (imperfectly) into α's residual, not modeled per game. I flag this as an unmodeled confounder rather than invent a weather operator.

Biomechanics honesty flag: no pitch-tracking biomechanical covariate enters GWAR; the mechanism claims (e.g., Snell "can increase his effort to strike out a batter when necessary," [PAGE 2]) are qualitative justifications for crediting sequencing, not measured quantities. Veto proof therefore holds only at the park/usage layers the paper formalizes; any biomechanical-precision claim beyond that is unsupported by this source.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Framing: RLVR = verifiable-reward checks. Three counterfactuals with falsifiable predictions, each checkable against the paper's tables.

Scenario 1 — Convexity veto (Scherzer 6-game). Intervention: replace season-averaging with per-game capping. Verifiable claim: standard WAR falls 2 → 0.5 while "real" WAR ≈ 1.5 ("about −0.40 wins" minimum per game), [PAGE 4]. Prediction (falsifiable): for any pitcher-season whose runs histogram is right-skewed, GWAR − FWAR(RA/9) > 0. Confirmed by Figure 12 [PAGE 13] and the y=0.47+0.85x fit. A veto occurs (prediction fails) only if convexity is violated, i.e., for the overdispersed k=1 grid where f is "mostly linear" [PAGE 22] — so the reward is conditional on using k=0.28.

Scenario 2 — Park-effect estimator veto. Intervention: swap ridge for OLS on model (41). Verifiable reward: Table 8 Colorado error Ridge 0.0502 vs OLS 0.1791; Table 9 ecological RMSE Ridge 0.01516 < FanGraphs 0.01578 < ESPN 0.01579 < OLS 0.01672. Prediction: ridge strictly dominates out-of-sample; any replication showing OLS ≤ ridge on the Denver cell falsifies the paper.

Scenario 3 — Predictiveness veto (2019 holdout). Intervention: rank pitchers by GWAR-derived μ̂ vs FWAR-derived μ̂, predict 2019 GWAR ranks. Verifiable reward: Table 2 rmse — GWAR 10.2 < FWAR(RA/9) 12.4 < FWAR(FIP) 13.1; and for the five most undervalued, 7.2 vs 15.7 (Table 3). Prediction: GWAR ranking wins on future-GWAR rmse. Falsifier: any season where FWAR-predicted ranks beat GWAR-predicted ranks on GWAR rmse.

Boundary veto on all three: w_rep=0.428 is a calibration constant tied to the 2010–2019 replacement pool. The paper's own opener analysis warns "if many teams used an opening pitcher, replacement-level w_rep for openers may change" [PAGE 18]. Any regime shift in the replacement pool vetoes absolute GWAR levels (though not the within-season rankings), which is the honest limit of these rewards.
</RLVR_COUNTERFACTUAL_VETOES>