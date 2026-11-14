---
source: "2016 Sports Ratings models slides - David Aldous.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 27
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5477
---

<NATIVE_REASONING>
The user wants me to analyze a David Aldous lecture on sports rating models from a PDF provided via source text (pages 1-27, though page 4 seems missing from the provided text). I need to produce output in specific XML sections with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. (I must be careful: the source text mentions gambling odds, Betfair Back/Lay, PredictWise. I must NOT reproduce these as betting lines or mention spreads/totals/moneylines/odds. I can perhaps reference probability estimates derived from markets if needed but avoid betting terminology. Better to avoid entirely or rephrase as implied win probabilities without calling them odds.)

2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.

3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write at least 1000 words total across these sections, with THINK_TRACE alone >=400 words.

Key content from source:
- Page 1: Title, Lecture 3, David Aldous, Jan 27, 2016.
- Page 2: Intro, non-specific sport, team or individual, matches between two teams/individuals. Reminder 1: centralized scheduling league/tournament.
- Page 3: Premier League 2014-15 standings table (Chelsea first, QPR last).
- Page 5: Limitations of tournaments: limited teams, start anew each year, central org impractical. Reminder 2: winner by point difference, but assume win/lose no ties. Reminder 3: uncertainty, probability of A beating B, gambling odds [next slide].
- Page 6: Superbowl gambling odds table (I must not mention odds as betting lines; maybe note implied win probabilities but carefully avoid "odds" terminology? The invariant says zero betting lines: never mention spreads, totals, moneylines, or odds. I should avoid reproducing that table or referencing it as odds. I can mention implied win probabilities from market prices if needed but better to not dwell. Actually, the user provided it but I must not output betting lines. I can reference that page 6 contains market-implied win probabilities without listing them.)
- Page 7: Problems: estimate strengths, estimate probability A beats B, relation not well studied. Terminology: strength (hypothetical objective numerical measure, unobservable) vs rating (calculable from past match results, estimate of strength).
- Page 8: Basic probability model: P(A beats B) = W(xA - xB). W: R -> (0,1) continuous strictly increasing, W(-x)+W(x)=1, lim x->inf W(x)=1. Assumptions: definite winner no ties, no home field advantage (can incorporate Delta), no point difference, strengths do not change with time.
- Page 9: Comments: reinterpretation via point difference D symmetric distribution, strength difference adds to points, W is distribution function of D.
- Page 10: Developed sideways from ranking movies via paired comparisons. Data i(A,B), i(B,A). MLEs of strengths imply ranking.
- Page 11: Bradley-Terry model with logistic W from 1952 paper. H.A. David 1988 monograph Chapter 4. Use past data MLEs to predict future win probabilities.
- Page 12: Positives: unstructured schedule, logistic computation straightforward. Negatives: logistic arbitrary (transitivity implication example: if P(i beats j)=2/3 and P(j beats k)=2/3 then P(i beats k)=4/5 seems ridiculous); unchanging strengths equal weight past/recent; recompute MLEs after each match. Course project: Premier League data, probability Chelsea was best.
- Page 13: Reminder 4: strengths change over time. Extend Bradley-Terry to allow changes. 2-3 papers/year.
- Page 14: Elo-type rating systems (not ELO). First used systematically in chess. Abstracted mathematically basic form. Each player i initial rating yi. Update: if i beats j then yi -> yi + Upsilon(yi - yj) and yj -> yj - Upsilon(yi - yj); if i loses then yi -> yi - Upsilon(yj - yi) and yj -> yj + Upsilon(yj - yi). Sum of ratings constant; center sum to zero.
- Page 15: FIFA formulas? Looks like OCR garbled from Elo ratings based on formulas: Rn new, Ro old, K weight constant by tournament (60 World Cup finals, etc.), K adjusted for goal difference, W result (1 win, 0.5 draw, 0 loss), We expected result formula 1/(10^(dr/400)+1), dr rating difference plus 100 home. This is FIFA World Ranking? But user said no betting lines; this isn't betting, it's rating formula. I can cite it.
- Page 16: Schematic of ratings after successive matches.
- Page 17: Math comments: Upsilon: R -> (0, infinity) continuous strictly decreasing, lim u->inf Upsilon(u)=0. Quantitative condition kappa_Upsilon := sup_u |Upsilon'(u)| < 1. Motivation: rating updates x -> x + Upsilon(x-y) and x -> x - Upsilon(y-x) want increasing functions of starting strength x. Scaling: if Upsilon satisfies (3) then cUpsilon does too; scale to make (4).
- Page 18: Logistic F(x) = e^x/(1+e^x). Common choice for W. Complement 1-F(x)=F(-x)=1/(1+e^x) common for Upsilon shape: Upsilon(x)=cF(-x). Whether more than convenient is central issue.
- Page 19: Elo algorithm produces ratings/rankings without assuming probability model. Implicitly tracks changes, weights recent results more. How good? Subtle: use Elo to make predictions, choose accuracy measure, compare with Bradley-Terry or gambling odds. Simplest: matches where schemes rank opposite, see who wins—not statistically efficient. Better compare probability predictions. Elo implicitly predicts probabilities.
- Page 20: Math connection. n teams unchanging strengths xi. Match results per basic model W. Ratings yi update rule Upsilon. Expectation of rating change for i when i plays j: Upsilon(yi-yj)W(xi-xj) - Upsilon(yj-yi)W(xj-xi). Eq (5). If Upsilon(u)/Upsilon(-u) = W(-u)/W(u) Eq (6). Then if yi-yj = xi-xj expectation of change in rating difference zero; if unequal, expectation of (yi-yj)-(xi-xj) closer to zero because Upsilon decreasing.
- Page 21: Eq (6) again. Tendency for yi to move toward xi though random fluctuations. Center strengths sum xi=0, ratings sum yi=0. Solve for Upsilon: physicist (Elo): Upsilon(u)=cW(-u); mathematician: Upsilon(u)=W(-u)phi(u) for arbitrary symmetric phi; statistician: Upsilon(u)=c sqrt(W(-u)/W(u)) variance-stabilizing. All wrong for different reasons. Hard to answer what Upsilon to use. Work backwards: using complement of logistic as Upsilon implicitly imagines Bradley-Terry with W logistic. Gives way to use Elo ratings to predict win probabilities.
- Page 22: Link to write-up. Simulation project: league n teams strengths SD sigma, strengths change in time rate lambda. Logistic W, update cUpsilon logistic Upsilon. Study optimal c depends on (n, sigma, lambda).
- Page 23: Other aspects: book "Science of Ranking and Rating" linear algebra. Realistic models using individual player performance believed better. Paper "Statistics-free sports prediction" claims complex schemes do almost as well using only match scores. Comparing schemes predicting probabilities discussed in Geopolitics forecasting lecture. Both schemes poor at new players. Xbox Live TrueSkill: rating pair (mu_i, sigma_i), estimates rating and uncertainty.
- Page 24 (skipped in text? Page 25 missing): Page 26: TrueSkill detail: rating pair (mu_i, sigma_i). When i beats j: compute conditional distribution of Xi given Xi > Xj where Xi ~ Normal(mu_i, sigma_i^2), update i's rating to mean and s.d. of that conditional distribution. If i loses, update to mean and s.d. of conditional distribution Xi given Xi < Xj. Discussion: approximation to coherent Bayes, fails to engage uncertainty about strength and uncertainty about match outcome. Simulation project compare to other schemes. Implicitly predicts winning probabilities via P(Xi > Xj).
- Page 27: Bookmakers adjust odds? Not true. Paradox designing matches exciting.

I need to avoid mentioning spreads, totals, moneylines, or odds. I will not quote the gambling odds table or refer to "odds" except perhaps to say the source discusses market-implied probabilities but I will not list them. Actually invariant says "Never mention spreads, totals, moneylines, or odds." So I should not use the word "odds" at all. I'll avoid it completely. The source page 6 mentions "gambling odds" and "Betfair Back/Lay" and "PredictWise Derived Betfair Price". I will not reproduce those. I can reference that page 6 presents implied win probabilities from a prediction market without calling them odds, but to be safe I won't detail them.

Now structure:

<THINK_TRACE> (>=400 words) Deep multi-hop derivation & gray-zone audit.
I need to derive connections between Bradley-Terry MLE and Elo update, discuss the functional equation (6), the physicist/mathematician/statistician solutions, why logistic is special but arbitrary, the stationarity condition kappa_Upsilon < 1, the TrueSkill conditional Gaussian update, breakdown regimes (strengths non-stationary lambda, new players sigma, unstructured schedule MLE recomputation, home advantage Delta, ties excluded). Gray-zone: Aldous calls solutions "wrong" for different reasons; no canonical Upsilon; Elo not probabilistic but implicitly predictive; Transitivity violation example 2/3 -> 4/5; finite population vs infinite; center sum zero constraint; kappa condition ensures monotonicity of update in starting strength but may be too restrictive? Multi-hop: W as CDF of point-difference noise -> Bradley-Terry likelihood -> MLE -> Elo as stochastic approximation -> functional equation -> logistic fixed point -> TrueSkill as Bayesian approximation. Also audit assumptions: no ties, no home edge, constant strength, win/loss only, symmetric noise, zero-sum ratings.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown.
List equations with [PAGE N] citations and verbatim quotes where appropriate. Units: probability dimensionless, ratings dimensionless (real numbers), K dimensionless, Upsilon dimensionless rating points per match, lambda rate parameter 1/time, sigma strength SD dimensionless, mu/sigma in TrueSkill dimensionless rating and uncertainty. Breakdown regimes: ties excluded [PAGE 8], strengths time-invariant [PAGE 8], home advantage omitted [PAGE 8], logistic arbitrary transitivity [PAGE 12], equal weight past/recent [PAGE 12], MLE recompute after each match [PAGE 12], kappa_Upsilon < 1 [PAGE 17], new players poorly assessed [PAGE 24], TrueSkill ignores uncertainty about strength and outcome [PAGE 26].

<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps.
Lineage: paired comparisons (movies) -> Bradley & Terry 1952 [PAGE 11] -> H.A. David 1988 [PAGE 11] -> Elo chess [PAGE 14] -> FIFA formula [PAGE 15] -> TrueSkill Xbox [PAGE 24-26]. Multi-week traps: recomputing MLE after each match creates look-ahead/leakage if not careful; non-stationary strengths mean ratings lag; K constant misspecification; home advantage ignored; using logistic W implies specific transitivity that may not hold over weeks; variance-stabilizing statistician solution may overfit noise.

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock.
This section is more abstract but must connect to the source. Crisis habit regression: under pressure, teams/players revert to established rating/strength baseline (regression toward mean in Elo/TrueSkill). Counter-trap: opponent models your model; if you use Elo, they anticipate your rating updates and exploit predictability. Clock: time decay lambda, recent results weighted more, optimal c depends on (n, sigma, lambda) [PAGE 22-23]. Recursive ToM: level-k reasoning about rating systems; if everyone uses Bradley-Terry MLE, market probabilities adjust; if Elo implicit probabilities are exploited, ratings drift until expectation condition (6) restores equilibrium. Breakdown when lambda (strength drift) exceeds adaptation rate c*Upsilon.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof.
Even though source is abstract, I must adjudicate vetoes: physical layer (player fatigue, injuries) not modeled; strengths unchanging assumption violated by in-game fatigue; weather affects point difference but model assumes win/loss no point diff; home advantage Delta omitted; biomechanical individual variation in chess/tennis not captured by scalar strength; these are vetoes that invalidate pure win/loss rating models in specific regimes.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or some framework. Need 3 counterfactual veto scenarios that are verifiable, with predictions. They should relate to the source content. Example:
1. Veto: Introduce ties (draws) in a sport modeled as win/loss only. Prediction: Bradley-Terry MLE without draw parameter will be biased; Elo update ignoring draw outcome will misestimate strength difference; verifiable by comparing predicted vs actual draw frequency in soccer data.
2. Veto: Sudden strength shift (injury to star player) mid-season violating constant strength. Prediction: Elo with fixed c will lag by O(1/(c*Upsilon)) matches; Bradley-Terry over full season will dilute recent change; verifiable via pre/post injury rating divergence.
3. Veto: Home advantage Delta omitted. Prediction: systematic over/under prediction for home teams; error proportional to Delta; verifiable by home win rate vs neutral site.
Maybe add weather veto? But source doesn't discuss weather. I can state that because source excludes weather/point diff, applying to outdoor sport is vetoed unless W absorbs it.

Need total words >=1000. Let's plan word counts:
THINK_TRACE: ~450 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~250 words.
RETROCAUSAL_GENEALOGY: ~200 words.
RECURSIVE_THEORY_OF_MIND: ~200 words.
CROSS_LAYER_VETO_ADJUDICATION: ~150 words.
RLVR_COUNTERFACTUAL_VETOES: ~200 words.
Total ~1450. Good.

Need to be careful with invariant 1: ZERO BETTING LINES. Do not mention spreads, totals, moneylines, or odds. I will not use the word "odds". I can say "market-implied win probabilities" but avoid "odds". Actually page 6 has "gambling odds" and "Betfair Back/Lay". I will not reproduce. I might reference page 6 as containing implied win probabilities from a prediction market, but I'll avoid the term odds entirely to be safe.

Invariant 2: ZERO TOY EQUATIONS. No fake ratios. Use formal LaTeX from source. Cite [PAGE N]. Use SI/information/probability units. Exact singularity/breakdown regimes.

Invariant 3: >=1000 words across exact XML sections.

Let's draft carefully.

THINK_TRACE content:
Start by deriving the basic probability model from page 8. W(xA-xB). Then show equivalence to point-difference noise model page 9: D symmetric continuous, P(A beats B) = P(D + xA - xB >= 0) = P(D <= xA - xB), so W is CDF of D. Then Bradley-Terry connection page 10-11: paired comparison counts i(A,B), i(B,A), MLE under logistic W. Logistic W: W(d)=1/(1+e^{-d}). The transitivity trap page 12: if P(i beats j)=2/3 and P(j beats k)=2/3 then logistic implies P(i beats k)=4/5, which Aldous calls ridiculous as universal fact. This is a gray zone: the model enforces a specific transitive coupling that may not reflect empirical sport.

Then Elo page 14: zero-sum update. yi -> yi + Upsilon(yi-yj) if i wins. Condition page 17: Upsilon continuous strictly decreasing to 0, kappa_Upsilon = sup|Upsilon'| < 1. Why kappa? To ensure map x -> x + Upsilon(x-y) is increasing in starting strength x; derivative 1 + Upsilon'(x-y) > 0 requires Upsilon' > -1, i.e. sup|Upsilon'|<1 since Upsilon'<0. Breakdown if kappa >= 1: update non-monotonic, perverse rating dynamics where stronger starting rating yields smaller post-win gain.

Math connection page 20-21: expectation of rating change Eq (5). Functional equation Eq (6): Upsilon(u)/Upsilon(-u) = W(-u)/W(u). If yi-yj = xi-xj, expected change in rating difference zero; else mean reversion toward strength difference because Upsilon decreasing. Solutions page 21: physicist Elo Upsilon=cW(-u); mathematician Upsilon=W(-u)phi(u) symmetric arbitrary; statistician Upsilon=c sqrt(W(-u)/W(u)). Aldous: all wrong for different reasons; no canonical Upsilon. Work backwards: Upsilon=cF(-u) with logistic F implies implicit W logistic, yielding Bradley-Terry probabilities from Elo ratings.

TrueSkill page 26: rating pair (mu, sigma); update to mean/s.d. of truncated Gaussian conditional on Xi > Xj or Xi < Xj. Critique: fails to engage uncertainty about strength and uncertainty about match outcome separately.

Gray-zone audit: assumptions are strong. No ties [PAGE 8], no home advantage [PAGE 8], strengths fixed [PAGE 8], win/loss only [PAGE 8], symmetric point noise [PAGE 9], zero-sum ratings [PAGE 14], logistic arbitrary [PAGE 12], equal weight past/recent in static Bradley-Terry [PAGE 12], recompute MLE after every match computationally costly and potentially leaky [PAGE 12], new players poorly assessed [PAGE 24]. Breakdown regimes: (i) lambda drift faster than adaptation c*Upsilon; (ii) draw-heavy sports violate win/loss; (iii) home advantage Delta nonzero unmodeled; (iv) kappa_Upsilon >=1 breaks monotonicity; (v) sigma_i uncertainty mismodelled in TrueSkill.

Need >=400 words. Let's write around 500.

SOURCE_OPERATORS_AND_EQUATIONS: Formal list.

Equation (1) page 8: W: R -> (0,1), continuous, strictly increasing, W(-x)+W(x)=1, lim_{x->infty} W(x)=1. P(A beats B)=W(x_A - x_B). Units: dimensionless probability. Breakdown: strengths time-invariant; no ties; no home field Δ.

Equation (2) page 14: update rule. If i beats j: y_i <- y_i + Υ(y_i - y_j), y_j <- y_j - Υ(y_i - y_j). If i loses: y_i <- y_i - Υ(y_j - y_i), y_j <- y_j + Υ(y_j - y_i). Sum constant; center sum zero. Units: rating points dimensionless per match.

Page 15 FIFA: W_e = 1/(10^{dr/400}+1), dr = rating difference + 100 home. K values by tournament; goal difference adjustments. This is not betting. Units: rating points.

Equation (3) page 17: Υ: R -> (0,∞), continuous, strictly decreasing, lim_{u->infty} Υ(u)=0. κ_Υ := sup_u |Υ'(u)| < 1. Units: Υ dimensionless rating increment; κ dimensionless. Breakdown: κ>=1 makes x -> x + Υ(x-y) non-increasing in x; perverse updates.

Equation (5) page 20: E[Δ y_i] = Υ(y_i-y_j)W(x_i-x_j) - Υ(y_j-y_i)W(x_j-x_i). Units: expected rating change dimensionless per match.

Equation (6) page 21: Υ(u)/Υ(-u) = W(-u)/W(u). Fixed point: if y_i-y_j = x_i-x_j then E[Δ(y_i-y_j)] = 0; else mean reversion.

Logistic page 18: F(x)=e^x/(1+e^x); Υ(x)=cF(-x)=c/(1+e^x). W logistic implied.

TrueSkill page 26: (μ_i, σ_i), X_i ~ Normal(μ_i, σ_i^2). On win update to mean/s.d. of X_i | X_i > X_j; on loss X_i | X_i < X_j. Units: μ rating, σ rating uncertainty (standard deviation). Breakdown: conflates strength uncertainty and outcome noise.

I need verbatim quotes? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include a few verbatim quotes from the text. I'll include short quotes.

RETROCAUSAL_GENEALOGY: historical lineage. Paired comparisons movie ranking [PAGE 10], Bradley-Terry 1952 [PAGE 11], David 1988 [PAGE 11], Elo chess [PAGE 14], FIFA formula [PAGE 15], TrueSkill [PAGE 24-26]. Multi-week traps: static Bradley-Terry equal weight past/recent [PAGE 12]; recompute MLE after each match can incorporate future information if window leaks [PAGE 12]; Elo tracking lag under strength drift rate λ [PAGE 22-23]; optimal c depends on (n, σ, λ) [PAGE 23]; home advantage ignored [PAGE 8]; draws excluded [PAGE 8].

RECURSIVE_THEORY_OF_MIND: crisis habit regression = under stress revert to baseline strength/rating; counter-trap = opponent anticipates your rating-based prediction and exploits; clock = λ drift vs adaptation. Recursive ToM: if all forecasters use Bradley-Terry MLE, implied probabilities become public and ratings must adjust; if Elo implicit probabilities are systematically exploitable, ratings drift until condition (6) holds approximately; breakdown when drift λ exceeds c*Υ adaptation speed.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather. Scalar strength cannot capture fatigue, injury, weather effects on scoring. Model assumes win/loss no point difference [PAGE 8], so weather that changes point distribution but not win probability is invisible; weather that changes win probability is unmodeled unless absorbed into W or Δ. Home advantage Δ omitted [PAGE 8]; in outdoor sports weather confounds home/away. Veto proof: any rating based solely on past W/L is vetoed when (a) key player absent, (b) weather materially alters scoring distribution, (c) travel/circadian effects, because assumptions of fixed strength and symmetric noise fail.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios + predictions.
Scenario 1: Draw introduction veto. Counterfactual: apply win/loss Bradley-Terry to soccer with draws coded as half-wins or ignored. Prediction: systematic underestimation of draw probability; rating errors for defensively strong teams; verifiable by comparing predicted vs observed draw frequency in Premier League 2014-15 [PAGE 3] and checking calibration residuals.
Scenario 2: Mid-season strength shock veto. Counterfactual: star player injured after match t; team strength drops by δ. Prediction: Elo with fixed c lags approximately |δ|/(c·Υ) matches before converging; static Bradley-Terry over whole season dilutes shock by factor t/T; verifiable by tracking rating deviation from post-injury form.
Scenario 3: Home advantage omission veto. Counterfactual: model without Δ applied to league with home win rate > 0.5. Prediction: biased win probabilities for home teams, error monotonic in omitted Δ; verifiable by regressing realized outcomes on predicted probabilities split by venue.
Maybe a 4th? User asked 3. Keep 3.

Need total word count. Let's write.

I must ensure no markdown table with betting lines. No mention of odds. Avoid "moneyline", "spread", "total". Good.

Let's write in final channel. Use exact XML tags. No extra text outside.

Check word count as I go mentally. THINK_TRACE ~500. SOURCE ~300. RETRO ~220. RECURSIVE ~200. CROSS ~160. RLVR ~220. Total ~1600. Good.

Citations: [PAGE 8], [PAGE 9], etc. Use exact page numbers from source. Page 4 missing in provided text but I won't cite it. Page 25 missing. Fine.

Verbatim quotes: include some short exact phrases like "strength for some hypothetical objective numerical measure" [PAGE 7], "use of logistic completely arbitrary" [PAGE 12], "κ_Υ := sup_u |Υ′(u)| < 1" [PAGE 17], "fails to engage both ‘‘uncertainty about strength" and ‘‘uncertainty about match outcome" [PAGE 26]. Need to handle quotes carefully.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation begins with Aldous’s basic probability model on [PAGE 8], where each team possesses an unobservable strength x_A ∈ ℝ and P(A beats B) = W(x_A − x_B), with W : ℝ → (0,1) continuous, strictly increasing, W(−x) + W(x) = 1, and lim_{x→∞} W(x) = 1. This is not an arbitrary assumption; [PAGE 9] shows the model is mathematically equivalent to a point-difference noise structure in which a symmetric continuous random variable D represents scoring differential at equal strength and a strength gap x_A − x_B shifts A’s points additively, yielding P(A beats B) = P(D ≤ x_A − x_B). Hence W is precisely the cumulative distribution function of D. Units are dimensionless probabilities; strengths and rating differences are measured in the same latent units as D.

The paired-comparison lineage on [PAGE 10]–[PAGE 11] recasts match outcomes as binary comparison data i(A,B) and i(B,A), permitting maximum-likelihood estimation of strengths under a specified W. Aldous identifies this as the Bradley–Terry model when W is logistic, tracing it to Bradley & Terry (1952) and David (1988). A gray zone appears immediately on [PAGE 12]: the logistic choice enforces a specific transitivity relation—if P(i beats j) = 2/3 and P(j beats k) = 2/3, then P(i beats k) = 4/5—which Aldous calls “ridiculous as a universal fact.” Moreover, static Bradley–Terry assigns equal weight to distant and recent results and requires recomputing MLEs after every match, creating both computational cost and potential look-ahead leakage if estimation windows are not strictly guarded.

Elo-type dynamics enter on [PAGE 14] as a zero-sum update: if i beats j, y_i ← y_i + Υ(y_i − y_j) and y_j ← y_j − Υ(y_i − y_j); losses reverse the sign. The sum of ratings is conserved, and centering to ∑ y_i = 0 is natural. On [PAGE 17], Υ must be continuous, strictly decreasing, with lim_{u→∞} Υ(u) = 0, and the quantitative stability condition κ_Υ := sup_u |Υ′(u)| < 1 is imposed. This is not cosmetic: the map x ↦ x + Υ(x − y) must remain increasing in the starting strength x, requiring 1 + Υ′(x − y) > 0. If κ_Υ ≥ 1, the update becomes non-monotonic and a stronger pre-match rating can yield a smaller post-win gain, a breakdown regime in which rating dynamics invert the strength ordering they are supposed to track.

The bridge between probability and algorithm appears on [PAGE 20]–[PAGE 21]. For fixed strengths x_i and ratings y_i, the expected rating change for i against j is E[Δy_i] = Υ(y_i − y_j)W(x_i − x_j) − Υ(y_j − y_i)W(x_j − x_i). If Υ and W satisfy Υ(u)/Υ(−u) = W(−u)/W(u), then whenever the rating gap equals the strength gap, the expected change in the rating difference is zero; otherwise mean reversion toward the true strength gap occurs because Υ is decreasing. Aldous presents three candidate solutions on [PAGE 21]—the physicist’s Υ = cW(−u), the mathematician’s Υ = W(−u)φ(u) for arbitrary symmetric φ, and the statistician’s variance-stabilizing Υ = c√(W(−u)/W(u))—and dismisses all as inadequate for different reasons. The operational conclusion is backward inference: using Υ(u) = cF(−u) with logistic F implicitly assumes a Bradley–Terry world with logistic W, thereby allowing Elo ratings to generate implied win probabilities despite containing no explicit probability model [PAGE 22].

TrueSkill on [PAGE 24]–[PAGE 26] extends this by representing each player as (μ_i, σ_i), with X_i ∼ Normal(μ_i, σ_i²). After i beats j, i’s rating updates to the mean and standard deviation of X_i conditioned on X_i > X_j; after a loss, to the conditional law given X_i < X_j. Aldous critiques this on [PAGE 26] for failing to separate “uncertainty about strength” from “uncertainty about match outcome,” a gray zone that matters when σ_i is large for new players. Both schemes are poor at assessing newcomers [PAGE 24], and a simulation project proposed on [PAGE 23] asks how optimal update scale c depends on league size n, strength dispersion σ, and strength-drift rate λ, highlighting non-stationarity as a core breakdown regime.

Audit summary of assumptions and singularities: ties are excluded [PAGE 8]; home advantage Δ is omitted unless added to W [PAGE 8]; strengths are treated as time-invariant in the basic model [PAGE 8]; point differential is discarded in favor of win/loss [PAGE 5]; the logistic functional form is arbitrary rather than empirically derived [PAGE 12]; κ_Υ ≥ 1 destroys monotonic update dynamics [PAGE 17]; new entrants lack reliable σ_i [PAGE 24–26]; and if strength drift λ outpaces adaptation c·Υ, ratings lag the true state indefinitely [PAGE 23]. These are exact regimes where the formalism ceases to describe the sport it purports to rate.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Basic probability model [PAGE 8]:
P(A beats B) = W(x_A − x_B), W : ℝ → (0,1) continuous, strictly increasing,
W(−x) + W(x) = 1, lim_{x→∞} W(x) = 1.
Units: dimensionless probability; x measured in latent win-logit units.
Breakdown: strengths constant in time; no ties; no home-field shift Δ; win/loss only.

Point-difference reinterpretation [PAGE 9]:
Let D be symmetric continuous scoring noise at equal strength. Then
P(A beats B) = P(D + x_A − x_B ≥ 0) = P(D ≤ x_A − x_B),
so W is the CDF of D.

Elo update rule [PAGE 14]:
If i beats j: y_i ← y_i + Υ(y_i − y_j), y_j ← y_j − Υ(y_i − y_j).
If i loses: y_i ← y_i − Υ(y_j − y_i), y_j ← y_j + Υ(y_j − y_i).
∑_i y_i is conserved; center so ∑_i y_i = 0.
Units: y in dimensionless rating points; Υ in rating points per match.

Stability condition [PAGE 17]:
Υ : ℝ → (0,∞) continuous, strictly decreasing, lim_{u→∞} Υ(u) = 0.
κ_Υ := sup_{u} |Υ′(u)| < 1.
Ensures x ↦ x + Υ(x − y) is increasing in x. Breakdown: κ_Υ ≥ 1 ⇒ non-monotonic, perverse rating updates.

Expected rating change [PAGE 20]:
E[Δy_i] = Υ(y_i − y_j)W(x_i − x_j) − Υ(y_j − y_i)W(x_j − x_i).
Units: expected dimensionless rating-point change per match.

Functional correspondence [PAGE 21]:
Υ(u)/Υ(−u) = W(−u)/W(u).
If y_i − y_j = x_i − x_j, then E[Δ(y_i − y_j)] = 0; otherwise mean reversion toward strength gap because Υ is decreasing.

Logistic specialization [PAGE 18]:
F(x) = e^x / (1 + e^x); commonly W = F and Υ(x) = cF(−x) = c / (1 + e^x).
Implied transitivity trap [PAGE 12]: P(i beats j) = 2/3 and P(j beats k) = 2/3 ⇒ P(i beats k) = 4/5.

FIFA-style parameters [PAGE 15] (non-wagering rating formula):
W_e = 1 / (10^{dr/400} + 1), dr = rating difference + 100 for home side.
K varies by competition importance and is adjusted by goal difference.

TrueSkill update [PAGE 26]:
Rating pair (μ_i, σ_i), X_i ∼ Normal(μ_i, σ_i²). Win: update to mean/s.d. of X_i | X_i > X_j. Loss: mean/s.d. of X_i | X_i < X_j.
Units: μ in rating points; σ in rating-point standard deviation. Critique [PAGE 26]: conflates strength uncertainty with outcome noise.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from incomplete paired comparisons in movie ranking [PAGE 10] to the formal Bradley–Terry model of Bradley & Terry (1952) [PAGE 11], systematized in David’s 1988 monograph [PAGE 11], then to Elo’s chess rating system [PAGE 14], to FIFA’s tournament-structured K-factor formula with goal-difference and home adjustments [PAGE 15], and finally to Microsoft’s TrueSkill Gaussian rating with uncertainty [PAGE 24–26]. Each layer relaxes or tightens a different assumption: Bradley–Terry assumes static strengths and full MLE recomputation; Elo assumes sequential zero-sum updates with no explicit probability model; TrueSkill assumes Gaussian strength beliefs with separate uncertainty tracking.

Multi-week traps are embedded in this genealogy. Static Bradley–Terry gives equal weight to early and late results [PAGE 12], so a team that improves mid-season is diluted by its early form; recomputing MLE after every match [PAGE 12] creates temporal leakage unless the estimation window is strictly causal. Elo’s adaptation speed is governed by c and Υ, but the optimal c depends on league size n, strength dispersion σ, and drift rate λ [PAGE 23]; fixing c without tracking λ produces persistent lag when team strengths evolve. The omission of home advantage Δ [PAGE 8] and of ties [PAGE 8] means soccer and other draw-prone leagues force a win/loss Procrustean bed that miscalibrates long-run ratings. Finally, the arbitrary logistic choice [PAGE 12] encodes a particular transitivity that may hold over a single weekend but fail across a multi-week season as injuries, fatigue, and tactical adaptation accumulate. These are not numerical details; they are structural failure modes that compound week over week.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis-habit regression in this setting is the tendency of a team’s observed performance under pressure to collapse toward its established rating baseline rather than its short-run form. In Elo terms, a struggling favorite experiences negative updates that pull y_i toward x_i, while an underdog on a hot streak receives positive updates; both exhibit mean reversion because Υ is decreasing [PAGE 20–21]. The counter-trap is adversarial: if an opponent knows you forecast using Elo-implied probabilities derived from Υ(u) = cF(−u) [PAGE 22], they can manipulate schedule selection, rest patterns, or tactical risk to exploit the specific transitivity and monotonicity assumptions embedded in your update function. The clock is the strength-drift parameter λ from the proposed simulation [PAGE 23]: as λ increases, the window over which y_i tracks x_i shrinks, and the optimal c must rise to keep pace, but raising c amplifies match-to-match noise.

Recursive theory of mind operates at the level of forecasters modeling forecasters. If all analysts adopt Bradley–Terry MLEs from past results, those probabilities become public and condition future match outcomes through strategic behavior, invalidating the i.i.d. match assumption behind the likelihood [PAGE 8–10]. If Elo ratings are used to generate implied win probabilities via the backward logistic argument [PAGE 22], and those probabilities are systematically exploitable, ratings will drift until condition (6) approximately holds, restoring an exploitable fixed point only if Υ and W remain matched. The breakdown occurs when λ exceeds c·Υ: the rating clock cannot tick fast enough, crisis regression dominates, and counter-traps based on stale ratings become profitable. Verification requires comparing out-of-sample probability forecasts against realized outcomes under rolling-strength simulations where λ is known.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the model’s strength x_i is a time-invariant scalar [PAGE 8], so in-game fatigue, substitution patterns, and accumulated injury load are invisible. Any sport where a key player’s absence materially changes win probability is vetoed unless x_i is replaced by a time-varying process with rate λ [PAGE 23]. Biomechanical layer: individual sports such as tennis or chess [PAGE 2] reduce complex motor and cognitive performance to one number; surface-specific ability in tennis or opening-preparation depth in chess cannot be captured by a scalar W(x_A − x_B) without interaction terms. Weather layer: because point differential is discarded and only win/loss is modeled [PAGE 5, PAGE 8], weather that alters scoring distribution but not the sign of the outcome is mathematically invisible; weather that shifts win probability is unmodeled unless absorbed into W or into a home-advantage Δ [PAGE 8]. Veto proof: any rating system built solely on historical win/loss sequences is invalidated when (a) roster composition changes discontinuously, (b) environmental conditions modulate scoring noise asymmetrically across venues, or (c) travel and circadian effects create location-dependent strength shifts not represented by Δ. These vetoes are not adjustable parameters; they are structural exclusions in Aldous’s assumptions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 — Draw suppression in soccer. Counterfactual: apply win/loss Bradley–Terry to the 2014–15 Premier League table [PAGE 3] by treating draws as half-wins or discarding them. Prediction: the model will systematically underestimate draw probability and misrate defensively strong, low-scoring teams because the likelihood omits the third outcome. Verification: compare implied draw frequencies from fitted W against observed Premier League draw rates; a calibrated model should reproduce the observed share of matches ending in draw, and statistically significant residuals indicate veto activation.

Veto scenario 2 — Mid-season strength shock. Counterfactual: a top-tier team loses a star player after match t, reducing true strength by δ > 0. Prediction: Elo with fixed update scale c lags the true strength drop by approximately |δ| / (c · Υ(·)) matches before converging, while a full-season static Bradley–Terry MLE dilutes the shock by a factor t/T, where T is season length. Verification: track post-injury rating deviation from post-injury realized win rate; if the gap persists beyond the predicted lag window, the constant-strength assumption is violated and the rating is vetoed for that interval.

Veto scenario 3 — Omitted home advantage. Counterfactual: fit a no-Δ model to a league with a nonzero home-win rate. Prediction: predicted home-team win probabilities will be biased low by an amount monotonic in the omitted Δ, while away-team probabilities are biased high; calibration curves split by venue will separate systematically. Verification: regress realized outcomes on model-implied probabilities with venue as a grouping variable; a significant venue × prediction interaction confirms the home-advantage omission veto and implies the model should be augmented with W(x_A − x_B ± Δ) [PAGE 8] before use.
</RLVR_COUNTERFACTUAL_VETOES>