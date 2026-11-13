---
source: "2021 - Comparing sequential forecasters is 538 any better than Vegas-Odds - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Carnegie Mellon Sports Analytics Conference/2021"
pages: 61
model: baidu/ernie-5.5-flash-preview:free
words: 8397
---

<NATIVE_REASONING>
We need answer user's request. They provided a DRIVE SOURCE path and 61-page source text. They likely expect the Foundry output with exact XML sections, >=1000 words, zero betting lines, zero toy equations, formal LaTeX, units, page citations and verbatim quotes. Need analyze source and produce structured answer. Need obey invariants.

We need infer task? User just gave source. Maybe need produce full GSE + GSI Frontier Reasoning Foundry output. Must include six sections. No explicit question, but likely we should deliver an analysis using the source. Need focus on sports analytics paper comparing sequential forecasters. We must avoid betting lines: no spreads, totals, moneylines, odds. But source includes Vegas-Odds.com, betting odds, implied probabilities. We can mention source uses betting odds converted to probabilities? Invariant says never mention spreads, totals, moneylines, or odds. Does mentioning "odds" violate? It says zero betting lines: Never mention spreads, totals, moneylines, or odds. Better avoid word "odds" maybe? But source uses "Vegas-Odds.com" and "betting odds". We need maybe refer to "Vegas-Odds.com closing bookmaker prices"? But invariant says never mention odds. Could avoid any betting-related details. Need perhaps refer to "Vegas-Odds.com forecasts" as probability forecasts from public sports wagering sources? But even "wagering"? The invariant: ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. So avoid those terms. Could say "Vegas-Odds.com probability series" or "market-derived probabilities". Need not mention "betting odds". But source page 57 mentions converting odds. We can cite and say "the paper converts American-format market quantities to implied probabilities" maybe no word odds? Hmm "American-format market quantities" vague. But we need exact page citations and verbatim quotes? Invariant 2 says when source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need include quotes. Some quotes contain "odds"? We must avoid betting lines? If we quote verbatim maybe contains "odds". Is that allowed? Invariant says never mention odds. Better not quote phrases with odds. Need cite exact page markers and verbatim quotes maybe choose quotes without betting lines. For source pages relevant, use quotes like "comparing sequential forecasters" etc. Need maybe cite [PAGE 1] etc.

Need >=1000 words across exact XML sections. Need six sections:
<THINK_TRACE> >=400 words.
<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need zero toy equations. Use formal equations from paper: Brier score, score differential, martingale, test supermartingale, Ville, CS, EB CS, e-process, p-process. Units: probabilities dimensionless, Brier score dimensionless [unit interval], variance process dimensionless, time in games/rounds. Could discuss SI/information/probability units: nats if log score, Bernoulli entropy. Need exact singularity/breakdown regimes: bounded score assumption, |δ| ≤ c/2, log score unbounded, truncated log, Winkler unbounded below, lag-h, weak vs strong null, fixed-time CI miscoverage. Need maybe include page citations.

Need avoid betting lines: no spreads/totals/moneylines/odds. The user prompt itself includes "Vegas-Odds.com" but we can avoid saying odds. However maybe need cite page 3: "Vegas-Odds.com"? It's a proper name. It contains Odds. Invariant says never mention odds. Could avoid mentioning that proper name? But source has forecasters: FiveThirtyEight and Vegas. We can call "Vegas" without .com? It includes odds? "Vegas" okay. Avoid "odds". The table has "Vegas-Odds.com"; don't mention. Could cite page 3 table? Need maybe not. Use quotes not containing odds.

Need produce >=1000 words total. Need likely 1500-2000 words. Ensure each section. Must be in XML-like tags. No markdown? Probably just XML sections. Need ensure no banned words: spread, totals, moneyline, odds. Also maybe "betting"? It says zero betting lines; maybe avoid betting too? Could avoid all betting. Use "market-derived" instead.

Need think through content.

Source: Choe & Ramdas compare sequential forecasters using confidence sequences and e-processes. They define time-varying average score differential Δ_t. Empirical Δhat_t. Martingale S_t. Exponential test supermartingale L_t(λ)=exp{λ S_t - ψ(λ) Vhat_t}. Use sub-Gaussian Hoeffding CS and sub-exponential empirical Bernstein CS. Weak null: Δ_t ≤ 0 for all t vs strong null: δ_t ≤ 0 for all t. MLB: Vegas outperformed FiveThirtyEight over 2010-2019, CS (-0.00265,-0.00062) for 538 vs Vegas? On page 23: after T=25165, 95% EB CS for Δ_T is (-0.00265,-0.00062), e-value for H0(q,p): Δ_t≥0 is 2979.0. Positive Δ means first better. Since 538 p, Vegas q? Figure 1 says positive values first better, Δ trends negative for t≥10000 indicating Vegas outperformed FiveThirtyEight. Page 23 says vegas forecaster marginally outperformed 538; e-value for H0(q,p): Δt≥0 is 2979.0. Need perhaps avoid "marginally"? okay.

Weather: IDR outperforms HCLR etc. Lag-h sequential e-values.

Need maybe include RLVR counterfactual vetoes: verifiable RLVR scenarios. RLVR maybe reinforcement learning with verifiable rewards? Need create 3 scenarios: e.g., if a model claims forecasting superiority from fixed-time p-values, veto by continuous monitoring cumulative Type I error; if claims strong null based on single game outliers; if claims unbounded log score without truncation/winkler, veto by boundedness violation. Need predictions: e.g., under 95% CS, if 95% CS excludes zero at T, p-process below 0.05; if e-process below threshold etc. Must be verifiable from equations.

Need CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Sports/weather layers. Physical/biomechanical veto: baseball outcomes depend on pitching, injuries, fatigue? But source says forecasts agnostic. Need formal veto: if forecast score differential bounded? Weather: precipitation postprocessing, non-IID, changepoints; EB CS variance adaptive. Maybe proof: if physical/biomechanical variables enter predictably, can use predictable conditioning (Section F.1) or side info in filtration; if unobserved side info changes score sign, no extrapolation. Need mention no assumptions stationarity. Need veto of claim that past superiority predicts future due to no clairvoyance (page 27). Physical/biomechanical: injuries, starting pitcher info included in filtration but not modeled; if outcome distribution r_t adversarial, distribution-free inference still valid for descriptive average but not predictive. Weather: sharp changepoints cause fixed-time CI miscoverage; EB CS handles via variance process. Need maybe quote [PAGE 27] "All our methods provide evidence and uncertainty related to the former statement. Because we do not make any assumption that says 'the future will resemble the past,' no method can make conclusive statements about the latter without clairvoyance." Great.

RETROCAUSAL_GENEALOGY: lineage: Brier 1950, Good 1952, Dawid prequential, Ville 1939, Darling-Robbins 1967, Robbins 1970, Lai 1976, Howard et al 2020/2021, e-processes, Shafer-Vovk. Multi-week traps: misuse of fixed-time CIs under continuous monitoring, strong vs weak null confusion, stationarity assumption, p-hacking. Could mention DM and GW tests. Need no fake equations. Include formal lineage.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Need maybe model forecasters and statistician beliefs. Crisis habit regression: when evidence accumulates, revert to prior heuristics (e.g., using fixed-time CI because familiar). Counter-trap: adopt anytime-valid CS, pre-specify weak null, monitor at stopping times. Clock: time-uniform boundary controls alpha over all times; e-process threshold 2/alpha. Need formalize with stopping times, optional stopping. Need mention Robbins power-one testing. Could include equations: p_t=1/sup E_i, threshold 1/α, e-process threshold 2/α for one-sided with alpha/2? Source says gray dashed line 2/α=40; testing e-process exceeds 2/α corresponds level α/2? Actually page 4: gray dashed 2/α=40, time e-process upcrosses line is when (1-α)-CS moves entirely below/above zero. Page 20: gray dotted 2/α=40; testing whether e-process exceeds 2/α corresponds to level-(α/2) sequential test? Wait if e-process threshold 2/α = 40 for α=0.05. For one-sided e-process at level α/2? Markov: P(E_tau ≥ 1/α')≤α'. If threshold 2/α, α'=α/2. Yes. But source says testing whether e-process exceeds 2/α corresponds to level-(α/2) sequential test equivalent to Corollary 1? The CS two-sided uses α/2 each side. Need careful. We can state for two-sided CS with α, each side uses α/2; one-sided e-process threshold 2/α yields level α/2. For a one-sided test at α, threshold 1/α. Need not overcomplicate.

SOURCE_OPERATORS_AND_EQUATIONS: list equations from paper:
- Game 1: t=1,2,...; forecasters p_t,q_t; reality r_t; outcome y_t~r_t.
- Brier S(p,y)=1-(p-y)^2 [page 8,9], bounded [0,1]? Actually Brier =1 - squared error; for p,y in [0,1], y binary, range? If p=0 or1, S=1; if p=.5,y=.5? y only 0/1, min? p=0.5,y=1 => 0.75? range [0.75? wait if p in [0,1], y binary, max error squared ≤1, S min 0 at p=1,y=0 or p=0,y=1, max 1 at p=y. So bounded [0,1]. The differential |δ|≤1 for Brier/spherical/zero-one [page 13]. The paper says |δ_i|≤1 for Brier etc. Theorem 2 assumes |δ_i|≤c/2. For Brier c=2? Since |δ|≤1 => c=2. But theorem uses c scale; if |δ_i|≤c/2 then c=2. Need note.
- Average score differential Δ_t = 1/t Σ E_{i-1}[S(p_i,y_i)-S(q_i,y_i)] [page 11].
- Empirical Δhat_t = 1/t Σ [S(p_i,y_i)-S(q_i,y_i)] [page 11].
- Martingale S_t = t(Δhat_t-Δ_t)=Σ(δhat_i-δ_i), S_0=1? Wait page 11 says S0=1? It says cumulative sums deviations, defined by S0=1 and St = t(Δhat_t-Δ_t) = sum. But later page 12 says cumulative sum process S_t := sum; likely S0=0? Text: "we define the pointwise ... Then, it is immediate that the cumulative sums of deviations, defined by S0 = 1 and St := ... forms a martingale" Maybe typo? Actually supermartingale start at one? S_t sum deviations should start 0. Maybe they say S0=1? Let's inspect: PAGE 11: "Then, it is immediate that the cumulative sums of deviations, defined by S0 = 1 and St := t( ... ) = sum ..." It likely says S0=0 but OCR? Page 12: "we start with a cumulative sum process St := Σ..." No S0. We can avoid S0 or state S_0=0 conventionally. Need not quote that.
- Test supermartingale L_t(λ)=exp{λ S_t - ψ(λ) Vhat_t}, L_0=1 [page 12].
- ψ_N,c(λ)=c^2 λ^2/2; ψ_E,c(λ)=c^{-2}(-log(1-cλ)-cλ), λ∈[0,1/c) [page 12].
- Ville: P(∃t≥1: L_t ≥1/α)≤α [page 7 eq1].
- CS: P(∀t: θ_t∈C_t)≥1-α [page 8 eq2]; stopping time coverage [page 8 eq3].
- EB CS: C_t^EB = [Δhat_t ± u(Vhat_t)/t], Vhat_t=Σ(δhat_i-γ_i)^2, γ_i predictable in [-c/2,c/2], u sub-exponential uniform boundary crossing α/2 scale c [page 14 eq15].
- e-process: E_t(λ)=exp(λ Σ δhat_i - ψ_E,c(λ) Vhat_t) for H0^w(p,q): Δ_t≤0 ∀t [page 17 eq24]; mixture E_t^mix=∫E_t(λ)dF(λ).
- p-process: p_t=1/supt≤t E_t? Actually p_t=1/supt i≤t E_i [page 18 eq26].
- Winkler score: w(p,q,y)= [S(p,y)-S(q,y)]/[S(p,1(p>q))-S(q,1(p>q))], 0/0=0 [page 38 eq57]; bounded above by 1 [page 39 Lemma 1].
- Lag-h: Δ_t^(h)=1/(t-h+1) Σ_{i=1}^{t-h+1} E_{i-1}[S(p_i,y_{i+h-1})-S(q_i,y_{i+h-1})] [page 41 eq67]; nulls H0^w(h), period-wise [page 41-42].
- DM/GW nulls maybe.

Need breakdown: Conditions, singularities. For bounded scores, Theorem 2 and 3. Unbounded log score: truncated log [page 13], Winkler [page 38-40], asymptotic CS requires q>2 moments [page 38]. Lagged forecasts: no tight CS, e/p processes via sub-filtrations [page 41-46]. Predictable bounds: Lemma 2 ψ_E,c monotonic convex [page 48-50]. Need mention units: scores dimensionless; Δ_t dimensionless; V_t dimensionless; t count of events (games/forecast days); λ has reciprocal score units? Since λ δ dimensionless, λ dimensionless if δ dimensionless; ψ same. If scores in nats for log score, λ has inverse nats? Actually information units nats. But Brier dimensionless probability units. Could discuss: y∈{0,1} dimensionless; p dimensionless probability; S dimensionless; if log score, nats; Winkler dimensionless ratio. Variance V_t sum of squared score differentials dimensionless. λ dimensionless when score dimensionless; if log score nats, λ in nats^{-1}. Need state assumptions.

Need source citations with [PAGE N] and verbatim quotes. Need choose quotes:
- [PAGE 1] "we present a rigorous answer to this question by designing novel sequential inference procedures for estimating the time-varying difference in forecast scores." Good.
- [PAGE 1] "Our methods do not make distributional assumptions on the forecasts or outcomes; our main theorems apply to any bounded scores". Good.
- [PAGE 3] maybe "It is not clear how we can effectively model the sequence of baseball game outcomes over time". Good.
- [PAGE 4] "a CS covers the time-varying parameter Δ_t uniformly over all t with high probability." But quote has Δ? We can write plain? Need exact quote maybe includes Greek? Could avoid.
- [PAGE 6] "our e-processes test whether one forecaster dominates the other on average over time". Good.
- [PAGE 8] "A scoring rule is any extended real-valued function ..."? Good.
- [PAGE 12] maybe "Lt(λ) = exp{λSt − ψ(λ)Vhat_t} is a test supermartingale" but OCR. Could paraphrase and cite page.
- [PAGE 14] Theorem 2 quote: "Suppose that |δ_i| ≤ c/2 ... C_t^{EB} := ( Δhat_t ± u(Vhat_t)/t ) forms a (1−α)-CS for Δ_t." Good but exact text? Could quote simplified. Need verbatim? Use exact from page: "Suppose that |ˆδi| ≤c 2 for each i ≥1... Then, for any α ∈(0,1), CEB t := ( ˆ∆t ± u( ˆVt) t ) forms a (1 −α)-CS for ∆t". We can include as quote with symbols maybe.
- [PAGE 17] weak null: "H0^w(p, q) : Δ_t = 1/t Σ δ_i ≤0, ∀t" maybe.
- [PAGE 18] p-process "pt = 1/ supi≤t Ei".
- [PAGE 23] "after T = 25, 165 games, 95% EB CS for ∆T is (−0.00265, −0.00062), and the e-value for H0(q, p) : ∆t ≥0, ∀t is 2979.0." This includes no odds. Good.
- [PAGE 24] "none of the other forecasters, including the 538 forecaster, have outperformed vegas". Good.
- [PAGE 25] weather conclusions.
- [PAGE 27] no clairvoyance quote.
- [PAGE 37] polynomial stitching maybe.
- [PAGE 38] asymptotic CS conditions.
- [PAGE 41] lag-h.

Need maybe include exact [PAGE N] markers and verbatim quotes throughout.

Need not mention "betting". In SOURCE_OPERATORS, maybe avoid "market-derived". But page 57 details on Vegas forecasters could be omitted. If need cite page 57? Not necessary.

Need CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. We can formulate:
- Physical/biomechanical veto: Let r_t be conditional outcome mean. If unmodeled physical state X_t affects r_t, then δ_i = E_{i-1}[S(p_i,y_i)-S(q_i,y_i)] depends on X_t. If X_t changes distribution, no extrapolation. The SAVI property still holds for observed realized outcomes if δ_i bounded. If forecasting claims of superiority rely on unobserved injury/pitcher effects not in forecasts, CS cannot verify causal superiority. Proof: If X_t makes p better before t0 and q better after, Δ_t can reverse; e-process can decrease; only descriptive past. Use source: Game 1 reality chooses r_t "however they want" [PAGE 10]. Quote: "Reality can essentially choose rt 'however they want'" maybe exact. This vetoes physical deterministic assumptions.
- Weather veto: non-IID, sharp changepoints; fixed-time CI invalid. The EB CS adapts via Vhat. If weather postprocessing has regime shifts (e.g., precipitation thresholds), strong null is too strict. Source weather: IDR outperform etc. Use [PAGE 25].
Need "veto proof" maybe a chain: assume claim "Forecaster A is universally better across all conditions"; to verify need strong null δ_t≤0 ∀t; if evidence only average, rejecting weak null doesn't prove strong. Counterexample (22): δ_t=+0.1 every kth step, -1 otherwise; strong null false but average negative. [PAGE 17]. This vetoes claims from strong null? Actually strong null false if p better at some times. Could use as proof that local superiority doesn't imply average superiority. For physical layers, if an event like starting pitcher or rain changes δ sign, average can mask. Need no fake equations.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Maybe "Reinforcement Learning with Verifiable Rewards". We can say scenarios for agent using forecast comparison. Each scenario: claim, veto condition, verifiable prediction.
1. Continuous monitoring abuse: Agent uses fixed-time p-values repeatedly; predicted cumulative Type I error exceeds α under repeated checks. Veto: use p-process; if min p_t ≤ α at any stopping time invalid under null. Prediction: under simulation with true Δ_t=0, DM/GW cumulative error >0.05 after ~100/1000 steps [PAGE 54], EB CS cumulative miscoverage stays ≤0.05 (zero in experiments) [PAGE 20-21].
2. Strong-null overclaim: Agent says p better at all times because strong-null e-process large; veto if there exist rounds q better and average Δ_t<0; e-process for strong can grow while weak remains small. Prediction: construct δ pattern [PAGE 17]; strong e-process rejects but weak e-process remains below 1; CS includes negative values.
3. Unbounded score misuse: Agent uses logarithmic score without truncation/winkler and applies Theorem 2; veto because boundedness fails. Prediction: if log forecast approaches 0 for realized y=1, score → -∞, V_t explodes, CS/e-process bounds break; use truncated log or Winkler one-sided CS [PAGE 13, 38-40]. Verifiable: check if min forecast ≤ epsilon; if not, theorem invalid.

Need maybe include "verifiable RLVR veto scenarios" with predictions. Use equations.

Need overall tone: Foundry. Maybe no outside knowledge? Use source only. Could mention "GSE + GSI Frontier Reasoning Foundry" in opening? Need output only XML sections? The instruction says strict invariants and sections. We can just output sections. Need ensure >=1000 words. Let's estimate: Each section ~200-300 words = 1500. THINK_TRACE 450, equations 350, genealogy 200, ToM 200, veto 250, RLVR 250 = 1700. Good.

Need avoid banned words. Need scan for "odds", "spread", "totals", "moneyline", "betting". We can use "market" maybe but avoid betting. The source title includes "Vegas-Odds" but we won't mention. If we say "Vegas" only. Could "Vegas" be okay. Need maybe not say "sports wagering". Use "public forecaster".

Need exact XML tags. Could include line breaks.

Potential issue: user requested "DRIVE SOURCE: /GSE-Research/sports-research-papers/... 2021 - Comparing sequential forecasters is 538 any better than Vegas-Odds - Unknown Authors.pdf PAGES: 61 SOURCE TEXT:" Maybe they expect answer about that drive source. We can say "DRIVE SOURCE ..."? Maybe in output mention path? Not necessary but maybe include in THINK_TRACE.

Need no "toy equations". Formal equations okay. Need no fake ratio. We'll use actual equations. Need state assumptions and exact singularity/breakdown regimes. In SOURCE_OPERATORS include breakdown: λ<1/c, boundedness, unbounded log, lag h no CS, fixed-time invalid.

Need cite exact [PAGE N] markers. Could cite many.

Need maybe use LaTeX in plain text within XML. E.g.
\[
\Delta_t := \frac{1}{t}\sum_{i=1}^t E_{i-1}[S(p_i,y_i)-S(q_i,y_i)]
\]
Need ensure not too complex.

Need include "SI/information/probability units". We can say: probability forecasts p_i,q_i ∈ [0,1] dimensionless; binary y_i ∈ {0,1}; Brier score dimensionless; log score in nats; Δ_t same units as score; V_t squared score units; t dimensionless count; λ inverse score units; α dimensionless probability. Good.

Need maybe mention "exact singularity/breakdown regimes": 
- Theorem 2/3 break if score differential not bounded; logarithmic score unbounded at p=0 or 1 when y opposite; truncated log at ε restores bounded but improper; Winkler unbounded below if q near boundary; asymptotic CS requires q>2 moment; lag-h cannot use direct e-process because E_t not adapted; predictable subsequences require ξ_i predictable; polynomial stitching vs conjugate mixture computational.

Need no mention of "total" maybe "cumulative"? Avoid "total". Use "cumulative" okay. "Totals" banned but cumulative okay. Need avoid "spread" maybe "spread" as verb? Avoid.

Let's draft sections.

THINK_TRACE: Need >=400 words. Discuss question: how compare forecasters sequentially without unverifiable assumptions. Source answer: SAVI via CS and e-processes. Trace from game, filtrations, score differential, martingale, exponential supermartingale, Ville, CS. Empirical results. Gray-zone audit: weak vs strong, bounded vs unbounded, past vs future, MLB small differences, weather. Need cite pages. Keep no banned. Count words maybe 450. Let's write around 500.

SOURCE_OPERATORS_AND_EQUATIONS: formal equations, units, citations, breakdown. Could be bullet list but within section. Need maybe 500 words. Include quotes. Ensure exact quotes? Use some. For quotes with symbols, okay. Need avoid "odds". Use [PAGE 1], etc.

RETROCAUSAL_GENEALOGY: 200 words. Historical lineage and multi-week traps.

RECURSIVE_THEORY_OF_MIND: 200-250. Crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: 250. Physical/biomechanical/weather veto proof.

RLVR_COUNTERFACTUAL_VETOES: 250. Three scenarios and predictions.

Need total >1000. Let's ensure. Could be ~2000.

Need maybe include exact [PAGE N] quotes in each section. Good.

Let's think about possible hidden requirement: "Never mention spreads, totals, moneylines, or odds." If we cite title maybe "Vegas-Odds" banned. Avoid. But source text includes "Vegas-Odds.com". We won't mention. The proper name "Vegas" maybe okay. The paper's "Vegas-Odds.com" is source; if we need cite page 3? Could avoid page 3. Use page 23/24. Page 23 says vegas forecaster. Good.

Need perhaps not mention "sports bettors". Page 23 quote: "the primary goal of sports bettors is not to maximize predictive accuracy but their overall profit." That mentions bettors not betting? It includes "sports bettors" maybe okay? But invariant zero betting lines, maybe avoid. Don't quote that.

Need maybe not say "market-derived" because could imply odds. But okay? Better avoid. Just "Vegas forecaster".

Need use "probability forecasts". Good.

Need maybe include "FiveThirtyEight" and "Vegas". Fine.

Let's draft.

THINK_TRACE:
"The drive source asks how to compare two sequential probability forecasters without modeling outcome generation. The paper's answer is to define a time-varying estimand Δ_t, construct a martingale from realized score differences, exponentiate with a variance process, and use Ville's inequality to get anytime-valid confidence sequences. ..." Cite pages.
Need mention gray-zone: "The key gray zone is not whether a forecaster won one game, but whether accumulated evidence controls error under optional stopping." Cite [PAGE 1], [PAGE 6]. "Another gray zone is weak vs strong null: rejecting strong null only says some time point advantage; weak null says average advantage." Cite [PAGE 6], example [PAGE 17]. "Boundedness: Theorem 2 requires |δhat_i|≤c/2; log score fails; truncated or Winkler." [PAGE 13], [PAGE 38]. "Empirical MLB: Vegas better than 538 with CS entirely negative, e-value 2979." [PAGE 23]. Weather: IDR etc. [PAGE 25]. "No clairvoyance." [PAGE 27].

SOURCE_OPERATORS:
Need equations. Could structure:
- Notation and units.
- Estimand.
- Test supermartingale.
- CS and e-process.
- Empirical result.
- Breakdown regimes.
Include quotes.

Let's write equations with align.

Potential issue: Use "E_{i-1}" conditional expectation. Good.

Equations:
Game: t=1,2,...; (p_t,q_t)∈[0,1]^2; r_t∈[0,1]; y_t~Bernoulli(r_t). [PAGE 9]
Brier: S(p,y)=1-(p-y)^2. [PAGE 8,9]
Δ_t = (1/t)Σ E_{i-1}[S(p_i,y_i)-S(q_i,y_i)]. [PAGE 11]
Δhat_t = (1/t)Σ [S(p_i,y_i)-S(q_i,y_i)]. [PAGE 11]
S_t=Σ(δhat_i-δ_i), δhat_i=S(p_i,y_i)-S(q_i,y_i), δ_i=E_{i-1}[δhat_i]. [PAGE 11]
Vhat_t=Σ(δhat_i-γ_i)^2, γ_i∈[-c/2,c/2] predictable. [PAGE 14]
L_t(λ)=exp{λ S_t - ψ_{E,c}(λ) Vhat_t}, ψ_{E,c}(λ)=c^{-2}[-log(1-cλ)-cλ], λ∈[0,1/c). [PAGE 12]
Ville: P(∃t:L_t≥1/α)≤α. [PAGE 7]
CS: P(∀t:Δ_t∈C_t)≥1-α. [PAGE 8]
EB CS: C_t^{EB}=(Δhat_t ± u_{α/2,c}(Vhat_t)/t). [PAGE 14]
e-process: E_t(λ)=exp{λΣδhat_i - ψ_{E,c}(λ)Vhat_t}; under H0^w(p,q): Δ_t≤0 ∀t. [PAGE 17]
p-process: p_t=1/supt E_t. [PAGE 18]
Winkler: w(p,q,y)=... [PAGE 38]
Units: ...
Breakdown: λ<1/c; if scores unbounded, theorem invalid. Fixed-time CI lacks time-uniform coverage [PAGE 8,20]. Strong null vs weak [PAGE 16-17].

Need maybe cite quote: [PAGE 14] "Suppose that |ˆδi| ≤c 2 ... forms a (1 −α)-CS for ∆t". Good. [PAGE 17] "an e-process can be derived as a lower bound on the exponential test supermartingale" maybe. [PAGE 27] quote no clairvoyance.

RETROCAUSAL_GENEALOGY:
Lineage: proper scoring rules Brier, Good; prequential Dawid; martingales Ville; CS Darling-Robbins, Robbins; Lai et al asymptotic; Howard et al time-uniform; e-processes Shafer/Vovk/Ramdas. Multi-week traps: treating fixed-time p-values as sequential; confusing strong/weak; assuming stationarity; ignoring boundedness; extrapolating past to future. Cite [PAGE 5], [PAGE 6], [PAGE 27].

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: practitioner under pressure reverts to familiar fixed-time test, causing false certainty under optional stopping. Counter-trap: precommit to weak null and anytime-valid CS/e-process; use stopping rule. Clock: time-uniform boundary; e-process threshold. Equations: reject if L_t>0 or U_t<0; p_t=1/sup E_i. Mention clock controls α over all stopping times. Use [PAGE 16], [PAGE 18]. Maybe mention adversarial Reality can change behavior; only descriptive [PAGE 27].

CROSS_LAYER_VETO_ADJUDICATION:
Physical/biomechanical: If starting pitcher, injury, fatigue are side information, forecasts can use them [PAGE 10]. But if outcome distribution r_t changes due to biomechanics, no stationarity; CS still valid for observed past but cannot infer future. Proof: Reality can choose r_t adversarially [PAGE 10]; if r_t switches, Δ_t can switch sign. Weather: precipitation postprocessing non-IID; fixed-time tests overconfident; EB CS variance-adaptive. Source weather: IDR outperforms HCLR at Brussels etc [PAGE 25]. Veto: claims of universal superiority fail if only average evidence; strong null example [PAGE 17]. Need include "veto proof" maybe as logical chain.

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: repeated fixed-time tests. Prediction cumulative Type I > α; DM/GW exceed after 100/1000 [PAGE 54]; EB CS stays below. Verifiable metric: simulate y_t Bernoulli with Δ_t=0, compute p-values at every t; if any p≤α before stopping, veto.
Scenario 2: strong-null overclaim. Construct δ pattern; strong e-process large but weak e-process small; prediction: strong rejection without weak CS excluding zero. Veto if claim says average superiority.
Scenario 3: unbounded log score. If forecaster assigns p near 0/1 and outcome contradicts, score -∞; Theorem 2 bound fails; prediction: Vhat_t spikes, CS width nonfinite; use truncated log or Winkler. Verifiable by checking min/max forecasts and score bounds.

Need ensure no banned words. Let's scan mentally: "spread" not used. "totals" not. "moneyline" not. "odds" not. "betting" not. "bettors" not. "market" maybe avoid.

Need maybe mention "sports"? Fine.

Need maybe no "toy equations" but actual.

Need maybe no "force / fatigue" toy. We can mention fatigue as physical side info? It's not equation. Fine.

Need maybe no "SI" unless include units. We'll include units.

Need maybe "exact [PAGE N] markers and verbatim quotes". Need ensure quotes are exact. We can use exact from provided text. Need maybe quote with special characters? Fine. Let's select exact quotes:
[PAGE 1] "we present a rigorous answer to this question by designing novel sequential inference procedures for estimating the time-varying difference in forecast scores." Exact? Source: "we present a rigorous answer to this question by designing novel sequential inference procedures for estimating the time-varying difference in forecast scores." Yes.
[PAGE 1] "Our methods do not make distributional assumptions on the forecasts or outcomes; our main theorems apply to any bounded scores" yes (line break maybe). Good.
[PAGE 6] "our e-processes test whether one forecaster dominates the other on average over time" exact? Source: "In contrast, our e-processes test whether one forecaster dominates the other on average over time" yes.
[PAGE 8] "A scoring rule is any extended real-valued function" maybe incomplete. Better: "A scoring rule is any extended real-valued function S : P × Y →R and can be used to evaluate the performance of a (probabilistic) forecast". Good.
[PAGE 10] "Reality can essentially choose rt 'however they want'" exact? Source: "Reality can essentially choose rt “however they want,” and they can even choose rt after seeing pt or qt." Use quote.
[PAGE 14] "forms a (1 −α)-CS for ∆t" exact fragment. Good.
[PAGE 16] "Reject Hw0(p, q) if Lt > 0; reject Hw0(q, p) if Ut < 0." exact? Source has formatting. Use.
[PAGE 18] "pt := 1/ supi≤t Ei" exact? We can write p_t = 1 / sup_{i≤t} E_i; quote maybe not exact. Could quote "pt := 1/ supi≤t Ei". Fine.
[PAGE 23] "after T = 25, 165 games, 95% EB CS for ∆T is (−0.00265, −0.00062), and the e-value for H0(q, p) : ∆t ≥0, ∀t is 2979.0." Exact? Source: "after T = 25, 165 games, 95% EB CS for ∆T is (−0.00265, −0.00062), and the e-value for H0(q, p) : ∆t ≥0, ∀t is 2979.0." Yes.
[PAGE 24] "none of the other forecasters, including the 538 forecaster, have outperformed vegas" exact? Source: "We find that none of the other forecasters, including the 538 forecaster, have outperformed vegas from 2010 to 2019." Use full.
[PAGE 25] "IDR forecasts are found to outperform both HCLR and HCLR_ 1-day forecasts for Brussels" exact? Source: "we find from the 90% EB CSs that IDR forecasts are found to outperform both HCLR and HCLR_ 1-day forecasts for Brussels" yes.
[PAGE 27] "no method can make conclusive statements about the latter without clairvoyance." Exact? Source: "no method can make conclusive statements about the latter without clairvoyance." Good.
[PAGE 38] "they are valid whenever the scoring rule is proper" maybe. Use.
[PAGE 54] "the cumulative type I errors of both the DM and GW tests exceed the significance level of α = 0.05 after roughly 100 and 1000 steps" exact? Source: "the cumulative type I errors of both the DM and GW tests exceed the significance level of α = 0.05 after roughly 100 and 1000 steps, respectively" yes.

Need maybe include page 13 quote for boundedness: "If |ˆδi| ≤c for some c > 0, we know that ˆδi is c-sub-Gaussian" maybe. But theorem 2 requires c/2. Use [PAGE 13].

Need perhaps cite page 12 for ψ. Quote: "ψE,c(λ) = c−2(−log(1 −cλ) −cλ), ∀λ ∈[0, 1/c)" exact? Source has spaces. Use.

Need maybe no citations without quotes? Invariant says when source pages provided, cite exact [PAGE N] markers and verbatim quotes. Could mean every claim from source needs citation and quote. We can include citations and quotes frequently.

Need ensure all six sections exact names. Could include XML declaration? Not needed. Use tags exactly.

Need maybe final answer only. Need final now. But let's draft carefully.

Potential banned word check: "totals" might appear in "time-uniform"? no. "spread" maybe in "spreadsheet"? avoid. "odds" maybe in "methodologies"? no. "moneyline" no. "betting" no. "wager" no.

Let's write final with around 2000 words. Need count rough.

THINK_TRACE draft:
```
<THINK_TRACE>
The drive source is ...
...
</THINK_TRACE>
```
Need 400+ words. Let's compose around 520 words.

THINK_TRACE content:
- Restate problem.
- Multi-hop derivation: forecasters, reality, statistician; score; Δ; empirical; martingale; exponential supermartingale; uniform boundary; CS; e-process.
- Cite.
- Gray zone audit: weak vs strong, boundedness, optional stopping, empirical results, extrapolation.
Need avoid "betting". Good.

Let's write.

SOURCE_OPERATORS draft: maybe 700 words. Need formal equations. Ensure no banned. Use "Vegas" maybe. Need mention "FiveThirtyEight". Good.

Potential issue: Use "α/2" and "2/α". Fine.

RETROCAUSAL: 250.

ToM: 250.

CROSS_LAYER: 300.

RLVR: 350.

Total >2200. Good.

Need ensure no line "spreads". I might write "time-uniform boundaries" not "spread". Good.

Let's produce final. But before final, check equations exact:
- Brier: source says S(p,y)=1−(p−y)^2 for p∈[0,1], y∈{0,1}. Good.
- Expected score S(p;q)=E_{y∼q}[S(p,y)] [PAGE 8]. Could include.
- Proper: q ∈ argmax S(p;q). Good.
- Δ_t = 1/t Σ E_{i-1}[S(p_i,y_i)-S(q_i,y_i)] [PAGE 11]. Good.
- δ_i = E_{i-1}[δhat_i]. Good.
- St = t(Δhat_t-Δ_t) = Σ(δhat_i-δ_i). Good.
- Vhat_t = Σ(δhat_i - γ_i)^2. Good.
- ψ_E,c. Good.
- Ville. Good.
- CS. Good.
- EB CS. Good.
- e-process. Good.
- p-process. Good.
- Winkler. Good.
- Lag h. Good.

Need breakdown regimes:
- If |δhat_i| not bounded by c/2, Theorem 2/3 fail; log score unbounded; use truncation S_ε(p,y)=y log(p∨ε)+(1-y)log((1-p)∨ε) [PAGE 13] or Winkler [PAGE 38].
- Asymptotic CS needs q>2 moment [PAGE 38].
- lag h: E_t not adapted, only sequential e-values; no tight CS [PAGE 41].
- strong vs weak: strong null δ_t≤0 ∀t; weak Δ_t≤0 ∀t; strong implies weak [PAGE 17]. Example δ_t=+0.1 every k, -1 otherwise. Good.
- fixed-time CI invalid under continuous monitoring [PAGE 20].
- polynomial stitching computational closed form but wider; CM tighter [PAGE 15,36]. Maybe include.

Need exact quote for truncation? [PAGE 13] "truncated variant S(p, y) = y log(p ∨ϵ) + (1 −y) log((1 −p) ∨ϵ)" exact? Good.

Need mention units in SOURCE_OPERATORS:
"Probability forecasts and outcomes are dimensionless; scores are dimensionless for Brier/spherical/zero-one; logarithmic score is nats; Winkler is dimensionless ratio; V_t has squared score units; t is count of rounds; α and λ are dimensionless when scores dimensionless." Good.

Need maybe "SI units" not necessary but probability units.

Potential issue: The invariant says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We are doing formal. Good.

Need maybe no "Drive source path" maybe okay. Could mention in first sentence.

Let's write final with tags. Ensure no extra commentary outside tags? Could just output sections. Good.

Double-check banned words in final: I need avoid "odds". In source page title maybe not. In final, don't mention. Avoid "betting". Avoid "spread". Avoid "totals". Avoid "moneyline". Use "market"? Avoid.

Let's draft final now. Need be careful with quotes: [PAGE 23] includes "vegas" lowercase? Fine. [PAGE 24] includes "vegas". Good.

Potential issue: "Vegas-Odds" not used. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The drive source is a statistical paper on sequential forecast comparison. Its central question is deceptively simple: when two forecasters repeatedly publish probability forecasts for the same stream of events, how can we decide which forecaster has been better without pretending that we know how the events were generated? The paper answers this by turning forecast comparison into a game-theoretic sequential inference problem. Forecasters publish probability forecasts; an unknown player called Reality chooses the outcome distribution; the statistician observes only the forecasts and realized outcomes. The estimand is not a fixed historical accuracy score but a time-varying average score differential, denoted \(\Delta_t\). This estimand is deliberately descriptive and robust: it asks whether forecaster \(p\) has outperformed forecaster \(q\) on average up to time \(t\), not whether one forecaster is better under a strong stationarity or parametric model.

The derivation proceeds through several layers. First, the paper defines a proper scoring rule \(S(p,y)\) and evaluates forecast quality by score differences. For binary outcomes, the working example is the Brier score, \(S(p,y)=1-(p-y)^2\). The score differential at round \(i\) is \(\hat\delta_i = S(p_i,y_i)-S(q_i,y_i)\). Its conditional expectation given the past information set is \(\delta_i=E_{i-1}[\hat\delta_i]\). The average score differential is then \(\Delta_t = t^{-1}\sum_{i=1}^t \delta_i\), while the observable version is \(\hat\Delta_t = t^{-1}\sum_{i=1}^t \hat\delta_i\). This distinction is crucial: \(\Delta_t\) is an oracle quantity because it depends on Reality’s unknown conditional distribution, whereas \(\hat\Delta_t\) is observable after each round. The paper states this explicitly: “The parameter \(\Delta_t\) is not observable to the statistician or the forecasters” [PAGE 11].

The next layer is martingale construction. The cumulative deviation process is \(S_t = t(\hat\Delta_t-\Delta_t)=\sum_{i=1}^t(\hat\delta_i-\delta_i)\). Because \(\delta_i\) is the conditional expectation of \(\hat\delta_i\), this process is a martingale with respect to the game filtration. The paper then constructs an exponential test supermartingale using an intrinsic time or variance process \(\hat V_t\). For the empirical Bernstein construction, \(\hat V_t=\sum_{i=1}^t(\hat\delta_i-\gamma_i)^2\), where \(\gamma_i\) is a predictable sequence chosen inside the bounded range. The exponential process has the form \(L_t(\lambda)=\exp\{\lambda S_t-\psi(\lambda)\hat V_t\}\). If this process is a test supermartingale, Ville’s inequality gives a time-uniform crossing bound. Inverting that bound gives a confidence sequence: a sequence of intervals that covers the time-varying parameter uniformly over all times and at arbitrary stopping times. The paper summarizes the guarantee as “a CS covers the time-varying parameter \(\Delta_t\) uniformly over all \(t\) with high probability” [PAGE 4].

The gray-zone audit focuses on four distinctions. The first is between a confidence sequence and a fixed-time confidence interval. A fixed-time interval can be valid at one preselected sample size, but it is not valid under continuous monitoring. The paper demonstrates this with simulations where fixed-time intervals have large cumulative miscoverage rates, while the confidence sequences remain valid [PAGE 20]. The second distinction is between weak and strong null hypotheses. The strong null says one forecaster is no better than the other at every time step; the weak null says one forecaster is no better on average over time. The paper emphasizes that rejecting the strong null only shows that there exists some time point where the other forecaster was better, which may be a weak form of evidence. Its own e-processes test the weak null, “whether one forecaster dominates the other on average over time” [PAGE 6]. The third distinction is bounded versus unbounded scores. The main theorems apply to bounded score differentials. The logarithmic score is unbounded, so the paper uses truncated logarithmic scores or normalized Winkler scores for that setting [PAGE 13], [PAGE 38]. The fourth distinction is descriptive versus predictive inference. Because Reality may change behavior adversarially, the methods compare past performance but do not automatically forecast future superiority. The paper states that “no method can make conclusive statements about the latter without clairvoyance” [PAGE 27].

The empirical layer confirms the formalism. In the Major League Baseball comparison, the paper finds that “after \(T = 25,165\) games, 95% EB CS for \(\Delta_T\) is \((-0.00265, -0.00062)\), and the e-value for \(H_0(q, p) : \Delta_t \ge 0, \forall t\) is 2979.0” [PAGE 23]. Since positive values favor the first forecaster, this interval excludes zero below zero and supports the conclusion that the second forecaster outperformed the first over the observed horizon. The paper also concludes that “none of the other forecasters, including the 538 forecaster, have outperformed vegas from 2010 to 2019” [PAGE 24]. In the weather experiment, the paper compares statistical postprocessing methods and finds location-specific conclusions, such as “IDR forecasts are found to outperform both HCLR and HCLR_ 1-day forecasts for Brussels” [PAGE 25]. These results show that the method is not a toy ranking rule; it produces anytime-valid interval estimates, e-processes, and p-processes under weak distributional assumptions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source uses probability units, scoring-rule units, and sequential-information units. Let \(p_t,q_t\in[0,1]\) be probability forecasts for binary outcome \(y_t\in\{0,1\}\). Forecasts and outcomes are dimensionless probabilities and indicators. A scoring rule is a map \(S:[0,1]\times\{0,1\}\to\mathbb{R}\). The paper defines “A scoring rule is any extended real-valued function \(S : P \times Y \to\mathbb{R}\) and can be used to evaluate the performance of a (probabilistic) forecast” [PAGE 8]. For the Brier score,
\[
S(p,y)=1-(p-y)^2,
\]
which is dimensionless and bounded between 0 and 1 for binary \(y\). For the logarithmic score,
\[
S(p,y)=y\log(p)+(1-y)\log(1-p),
\]
the unit is information-theoretic nats; this score is unbounded when \(p\) approaches 0 or 1 in the wrong direction. The Winkler score is a normalized ratio and is dimensionless.

The central estimand is the average forecast score differential:
\[
\Delta_t := \frac{1}{t}\sum_{i=1}^{t} E_{i-1}\left[S(p_i,y_i)-S(q_i,y_i)\right],
\]
where \(E_{i-1}\) is conditional expectation given the game filtration [PAGE 11]. The empirical counterpart is
\[
\hat\Delta_t := \frac{1}{t}\sum_{i=1}^{t}\left[S(p_i,y_i)-S(q_i,y_i)\right].
\]
Define pointwise empirical and expected score differentials:
\[
\hat\delta_i := S(p_i,y_i)-S(q_i,y_i), \qquad \delta_i := E_{i-1}[\hat\delta_i].
\]
The cumulative deviation process is
\[
S_t := \sum_{i=1}^{t}(\hat\delta_i-\delta_i) = t(\hat\Delta_t-\Delta_t),
\]
which is a martingale with respect to the game filtration [PAGE 11]. The variance process used by the empirical Bernstein confidence sequence is
\[
\hat V_t := \sum_{i=1}^{t}(\hat\delta_i-\gamma_i)^2,
\]
where \((\gamma_i)_{i\ge 1}\) is a predictable sequence taking values in \([-c/2,c/2]\) [PAGE 14]. The scale \(c\) bounds the empirical score differential: Theorem 2 assumes \(|\hat\delta_i|\le c/2\). If \(|\hat\delta_i|\le 1\), as for Brier, spherical, and zero-one scores in the binary case, one may take \(c=2\) [PAGE 13].

The exponential test supermartingale uses a CGF-like function. For the sub-exponential case,
\[
\psi_{E,c}(\lambda)=c^{-2}\left[-\log(1-c\lambda)-c\lambda\right], \qquad \lambda\in[0,1/c).
\]
This function appears verbatim as “\(\psi_{E,c}(\lambda) = c^{-2}(-\log(1 - c\lambda) - c\lambda)\), \(\forall \lambda \in[0, 1/c)\)” [PAGE 12]. The process
\[
L_t(\lambda)=\exp\left\{\lambda S_t-\psi_{E,c}(\lambda)\hat V_t\right\}
\]
is a test supermartingale under the boundedness condition. Ville’s inequality states that for any \(\alpha\in(0,1)\),
\[
\mathbb{P}\left(\exists t\ge 1 : L_t(\lambda)\ge 1/\alpha\right)\le\alpha,
\]
which is quoted as “\(\mathbb{P}(\exists t \ge 1 : L_t \ge 1/\alpha) \le \alpha\)” [PAGE 7]. A \((1-\alpha)\)-confidence sequence satisfies
\[
\mathbb{P}\left(\forall t\ge 1 : \Delta_t\in C_t\right)\ge 1-\alpha,
\]
with coverage at arbitrary stopping times [PAGE 8]. The empirical Bernstein confidence sequence is
\[
C_t^{\mathrm{EB}} :=
\left(
\hat\Delta_t \pm \frac{u_{\alpha/2,c}(\hat V_t)}{t}
\right),
\]
where \(u_{\alpha/2,c}\) is a sub-exponential uniform boundary. The paper states that this interval “forms a \((1-\alpha)\)-CS for \(\Delta_t\)” [PAGE 14].

The weak null is
\[
H_0^w(p,q):\Delta_t = \frac{1}{t}\sum_{i=1}^{t}\delta_i \le 0,\quad \forall t,
\]
meaning forecaster \(p\) is not better than forecaster \(q\) on average over time [PAGE 16]. The corresponding sub-exponential e-process is
\[
E_t(\lambda) := \exp\left\{\lambda\sum_{i=1}^{t}\hat\delta_i - \psi_{E,c}(\lambda)\hat V_t\right\},
\]
and any mixture \(E_t^{\mathrm{mix}}=\int E_t(\lambda)\,dF(\lambda)\) is also an e-process under the weak null [PAGE 17]. The p-process is
\[
p_t := \frac{1}{\sup_{i\le t} E_i},
\]
so that \(p_t\) is valid at arbitrary stopping times [PAGE 18].

Breakdown regimes are explicit. First, the main theorems require bounded score differentials. If the logarithmic score is used without modification, the boundedness condition fails because the score can diverge when a forecast assigns near-zero probability to the realized class. The paper’s remedy is truncation: “the truncated variant \(S(p, y) = y \log(p \vee \epsilon) + (1 - y) \log((1 - p) \vee \epsilon)\)” [PAGE 13]. Second, for unbounded proper scores on binary outcomes, the Winkler score is used. It is defined as
\[
w(p,q,y) :=
\frac{S(p,y)-S(q,y)}
{S(p,\mathbf{1}(p>q))-S(q,\mathbf{1}(p>q))},
\]
with \(0/0:=0\) [PAGE 38]. The Winkler score is bounded above by 1, but it can be unbounded below when \(q\) approaches the boundary, so the paper develops a one-sided upper confidence bound for that case [PAGE 39]. Third, fixed-time confidence intervals are not valid under continuous monitoring. The paper shows that “the cumulative type I errors of both the DM and GW tests exceed the significance level of \(\alpha = 0.05\) after roughly 100 and 1000 steps, respectively” [PAGE 54]. Fourth, for lag-\(h\) forecasts, the naive exponential process is not adapted because it would use future outcomes. The paper instead defines the lag-\(h\) average
\[
\Delta_t^{(h)} :=
\frac{1}{t-h+1}
\sum_{i=1}^{t-h+1}
E_{i-1}\left[S(p_i,y_{i+h-1})-S(q_i,y_{i+h-1})\right],
\]
and notes that constructing a tight confidence sequence for this parameter remains open [PAGE 41]. Fifth, the strong null,
\[
H_0^s(p,q):\delta_t\le 0,\quad \forall t,
\]
is different from the weak null. The paper gives a concrete counterexample where \(\delta_t=+0.1\) on every \(k\)-th step and \(\delta_t=-1\) otherwise; a strong-null test may reject while the average evidence still favors the second forecaster [PAGE 17].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage runs through forecast verification, martingale theory, and anytime-valid inference. The scoring-rule tradition begins with Brier’s probability forecast verification and Good’s rational decision framework. The paper cites this lineage by noting that forecast evaluation “dating back to the works of Brier (1950); Good (1952); DeGroot and Fienberg (1983); Dawid (1984); Schervish (1989)” [PAGE 5]. Dawid’s prequential principle is especially important: forecasts are evaluated only on the forecasts actually made and the outcomes that occurred, not on counterfactual forecasts. This fits the paper’s game-theoretic setup, where forecasters may use any side information and no model of their internal reasoning is required [PAGE 10].

The second lineage is martingale-based sequential inference. Ville’s inequality is the classical engine: a nonnegative test supermartingale starting at one cannot exceed \(1/\alpha\) with probability more than \(\alpha\) [PAGE 7]. Darling and Robbins developed confidence sequences, and Robbins’s normal mixture boundary gives a closed-form method of mixtures. Howard et al. extended this to nonparametric, nonasymptotic time-uniform confidence sequences with variance-adaptive widths. The paper explicitly connects these tools to forecast score differentials: “Our work makes the connection between the empirical Bernstein (EB) CSs derived in Howard et al. (2021) and the martingale property of forecast score differentials” [PAGE 6].

The third lineage is forecast-comparison testing. Diebold and Mariano proposed fixed-time tests based on asymptotic normality of average score differentials, while Giacomini and White developed conditional predictive ability tests under mixing assumptions. The paper places its own contribution against these methods by emphasizing weak nulls, anytime validity, nonasymptotic guarantees, and distribution-free coverage. It states that “the key difference in our work is that we develop inference methods that are valid at arbitrary data-dependent stopping times, while making virtually no assumption on the time-varying dynamics of the data generating process” [PAGE 5].

The multi-week traps in this genealogy are recurring. The first trap is treating a fixed-time p-value as if it remains valid after repeated looks. The second trap is confusing “better at some moments” with “better on average.” The third trap is assuming stationarity or mixing when sports, weather, and social systems are nonstationary. The fourth trap is using an unbounded score without checking its singularities. The paper’s remedy is to separate the descriptive sequential estimand from predictive extrapolation and to use confidence sequences, e-processes, or p-processes whose validity is protected by Ville’s inequality.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory of mind in this setting concerns what forecasters, analysts, and statisticians believe about one another’s habits under pressure. The crisis habit regression is the tendency to revert to familiar fixed-time testing when uncertainty rises. An analyst sees a temporary lead, computes a familiar fixed-time p-value, and treats it as decisive. This is cognitively natural because fixed-time tests feel precise. But under continuous monitoring, that habit creates false confidence. The paper shows that fixed-time intervals and classical tests can accumulate error above \(\alpha\) when monitored over time [PAGE 54].

The counter-trap is to precommit to an anytime-valid protocol. The statistician chooses a scoring rule, defines the weak null, selects a confidence level, and monitors either the confidence sequence or the e-process. The stopping rule is simple: reject \(H_0^w(p,q)\) if the lower confidence bound exceeds zero; reject \(H_0^w(q,p)\) if the upper confidence bound is below zero [PAGE 16]. Equivalently, one can monitor the p-process \(p_t = 1/\sup_{i\le t} E_i\) and stop when \(p_t\) falls below a chosen level. This counter-trap does not eliminate uncertainty, but it makes the error rate robust to optional stopping.

The clock is the mathematical device that enforces discipline over time. A confidence sequence is not a single interval but a family of intervals indexed by time. Its coverage guarantee is uniform over all stopping times. In the empirical Bernstein case, the boundary depends on the intrinsic time \(\hat V_t\), not merely on the number of rounds \(t\). This matters when score variability changes. If score differentials are quiet for a long period and then become volatile, the variance-adaptive boundary widens appropriately instead of pretending that every round contributes the same information. The paper notes that the EB CS is “variance-adaptive because its width is a function of the empirical variance process \((\hat V_t)_{t=0}^\infty\)” [PAGE 14].

The recursive loop becomes healthier when the analyst expects adversarial behavior from Reality. The paper allows Reality to choose the outcome distribution “however they want,” even after seeing forecasts [PAGE 10]. Under that assumption, the analyst should not expect the future to resemble the past. The correct belief is therefore narrow but rigorous: the confidence sequence certifies what has happened up to the current information set; it does not certify what will happen next. This prevents the analyst from recursively hallucinating a stable skill model when the environment may be changing.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto adjudication separates three layers: physical/biomechanical baseball effects, weather regime effects, and statistical inference validity. The proof structure is counterfactual: if a claim requires a layer-specific assumption that the source does not support, the claim is vetoed.

Physical/biomechanical veto: Baseball forecasts may depend on starting pitchers, injuries, travel, rest, home-field context, and other side information. The paper allows forecasts to use any available information: “This includes historical and previous outcomes ... any of the previous forecasts made ... as well as any other side information available to either forecaster” [PAGE 10]. However, the statistical method does not model those physical variables. It only evaluates realized forecast scores. Therefore, if forecaster \(p\) appears better because of a transient physical advantage, such as a favorable pitching matchup or an unobserved injury pattern, the confidence sequence can certify that \(p\) was better over the observed history, but it cannot certify that \(p\) will remain better. The veto proof is direct: Reality may choose the conditional outcome mean adversarially [PAGE 10]. If the physical state changes, \(\delta_t\) can change sign. The martingale property remains valid for the observed sequence, but the descriptive estimand \(\Delta_t\) can reverse after the regime changes.

Strong-null versus average-performance veto: A claim that “forecaster \(p\) is better than forecaster \(q\) at every relevant time” requires the strong null to be false. The strong null is \(\delta_t\le 0\) for all \(t\) [PAGE 16]. The paper warns that rejecting the strong null only proves existence of some time point where \(p\) beat \(q\). The counterexample with \(\delta_t=+0.1\) every \(k\)-th step and \(\delta_t=-1\) otherwise proves that local superiority can coexist with poor average performance [PAGE 17]. Therefore, any cross-layer claim that uses a single hot streak to assert universal superiority is vetoed unless the weak-null evidence also supports average superiority.

Weather-layer veto: Weather forecasts are often non-IID, seasonal, and subject to sharp regime shifts. The paper’s weather experiment compares statistical postprocessing methods for probability of precipitation. It finds location-specific conclusions, for example that “IDR forecasts are found to outperform both HCLR and HCLR_ 1-day forecasts for Brussels” [PAGE 25]. The inference layer uses a 90% EB CS and corresponding weak-null e-processes. The weather veto proof is that fixed-time methods are overconfident under regime shifts. The paper demonstrates that fixed-time intervals can fail under changepoints, while the EB CS remains valid by adapting to the empirical variance process. If a weather postprocessing method wins only during a stable calibration period and fails during a new precipitation regime, the confidence sequence may still certify historical average superiority while warning that the evidence is regime-dependent.

The final adjudication is that physical and weather layers can veto universal extrapolation, but they do not invalidate the sequential comparison itself. The source supports a bounded conclusion: past predictive performance can be compared without distributional assumptions, but “predictions of future performance will require nontrivial distributional assumptions” [PAGE 27].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-with-verifiable-rewards veto scenarios follow directly from the source.

Scenario 1: Repeated fixed-time testing veto. Claim: An agent repeatedly tests the null “forecaster \(p\) is no better than forecaster \(q\)” using a fixed-time p-value and declares victory when the p-value first falls below \(\alpha\). Veto condition: Under continuous monitoring, the fixed-time p-value is not anytime-valid. Verifiable prediction: If the true average score differential is zero, the cumulative Type I error of fixed-time methods exceeds \(\alpha\) as monitoring continues. The source reports that “the cumulative type I errors of both the DM and GW tests exceed the significance level of \(\alpha = 0.05\) after roughly 100 and 1000 steps, respectively” [PAGE 54]. In contrast, the p-process \(p_t = 1/\sup_{i\le t} E_i\) satisfies \(\mathbb{P}(p_\tau\le\alpha)\le\alpha\) at arbitrary stopping times [PAGE 18]. RLVR test: simulate many Bernoulli sequences with no true forecaster advantage; if the agent stops on a fixed-time p-value, the empirical stop rate will exceed \(\alpha\); if it uses the p-process, it will not.

Scenario 2: Strong-null overclaim veto. Claim: An agent observes that a strong-null e-process is large and concludes that forecaster \(p\) is better overall. Veto condition: The strong null says \(\delta_t\le 0\) for all \(t\), but rejecting it only proves that \(p\) was better at some time points [PAGE 16]. It does not prove average superiority. Verifiable prediction: Construct a score differential path where \(p\) is slightly better on rare rounds and worse on most rounds. The strong-null e-process can grow large, while the weak-null e-process remains small and the confidence sequence for \(\Delta_t\) remains below zero. The source’s explicit counterexample uses \(\delta_t=+0.1\) on every \(k\)-th step and \(\delta_t=-1\) otherwise [PAGE 17]. RLVR test: if the agent’s reward is tied to claiming universal superiority, the verifiable check should require both strong and weak evidence; otherwise the reward is misspecified.

Scenario 3: Unbounded-score veto. Claim: An agent applies the bounded-score empirical Bernstein confidence sequence to an unmodified logarithmic score. Veto condition: Theorem 2 assumes bounded empirical score differentials. The logarithmic score is unbounded when a forecast assigns near-zero probability to the realized outcome. Verifiable prediction: If a forecast approaches the boundary, the score differential can diverge, the variance process \(\hat V_t\) can explode, and the claimed finite-width confidence sequence becomes invalid. The source’s remedy is either truncation, \(S_\epsilon(p,y)=y\log(p\vee\epsilon)+(1-y)\log((1-p)\vee\epsilon)\), which sacrifices propriety but preserves bounded-score inference [PAGE 13], or the Winkler score, which uses propriety and an upper bound of 1 to construct one-sided anytime-valid inference [PAGE 38]. RLVR test: inspect the minimum forecast probability and the realized outcomes; if any realized outcome occurs under a forecast below the truncation threshold, the bounded-score guarantee is void.

These vetoes are verifiable because they rely on observable quantities: repeated p-values, empirical stop rates, weak versus strong null indicators, score bounds, variance process behavior, and truncation thresholds. They prevent an agent from claiming sequential forecast superiority when the underlying evidence violates the paper’s stated conditions.
</RLVR_COUNTERFACTUAL_VETOES>