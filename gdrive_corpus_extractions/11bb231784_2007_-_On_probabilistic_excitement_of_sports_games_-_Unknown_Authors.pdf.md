---
source: "2007 - On probabilistic excitement of sports games - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2007"
pages: 33
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4750
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Probabilistic Excitement of Sports Games" by Jan Vecer, Tomoyuki Ichiba, Mladen Laudanovic from Columbia University/Harvard, presented September 29, 2007 at NESSIS 2007.

Constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully follow these constraints.

Let me plan:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I should derive the Total Variation measure from the paper, connect it to win expectancy processes, discuss the Poisson model assumptions, the breakdown regimes (memorylessness, fixed end time, independent scoring, lambda/mu estimation), and gray zones (e.g., betting market estimation vs model-based, draw handling, overtime vs regulation, star games going to overtime/penalties). No betting lines mention (spreads, totals, moneylines, odds). Wait - the paper itself mentions betting markets. The constraint says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I can mention "betting market" as an information source if the paper does, but I must NOT mention odds, spreads, etc. I need to be careful. I can say "betting market implied probabilities" but not quote odds. Actually, the paper says "betting market estimated the scoring intensities". I can refer to that but avoid odds terminology.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper. I need to reproduce/cite them with [PAGE N]. Equations (1)-(9). Units: probability dimensionless, time in minutes, intensities in goals/minute? The paper uses T as end time fixed, lambda(T-t) expected goals. Need to discuss singularity/breakdown regimes: lambda=0, mu=0, t->T, small remaining time, non-independence, memory effects, draw possibility, overtime not modeled as fixed T maybe.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Connect to total variation in analysis (Wiener, Kolmogorov), win probability models (Harville, Stern), Poisson process in sports (Maher), betting market efficiency (not betting lines per se but information aggregation). Multi-week traps: applying single-game excitement measure across tournament, ignoring opponent strength adaptation, fatigue, travel, etc.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but relates to game theory / team psychology. Teams trailing may change tactics (crisis habit), leading to non-Poisson scoring (intensity changes after goals), which violates memorylessness. Counter-trap: leading team may sit back, reducing lambda. Clock: time remaining T-t enters equations nonlinearly; near T, small score changes cause large win expectancy jumps.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Layers: physical (field conditions, ball), biomechanical (player fatigue, sprint capacity), weather (rain, wind affecting Poisson rates), referee (red cards changing team strength), clock management. The Poisson model vetoed if scoring intensities are not constant due to these factors. Need to argue veto conditions formally: if dλ/dt ≠ 0 or dμ/dt ≠ 0 due to red card, weather, fatigue, the memoryless Poisson assumption breaks.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Probably means scenarios that can be verified. Need 3 counterfactual veto scenarios where the model breaks and predictions.
1. Red card: one team plays with 10 men, lambda drops. Model assumes constant lambda. Prediction: observed TV will exceed model-predicted expected excitement because win expectancy swings more as the disadvantaged team defends and the advantaged team presses but struggles to score.
2. Early goal in lopsided match: favorite scores early, win expectancy jumps to ~1 and stays there; model with constant lambda would predict some chance of comeback, but physical reality (leading team parks bus) reduces lambda of trailing team further. Prediction: realized excitement lower than model expected excitement.
3. Late equalizer in knockout draw scenario: near t=T, score tied, probability of draw high then sudden goal changes win prob from ~1/3 to 1 or 0. Model with fixed T and Poisson may underestimate if extra time not included. Prediction: TV spikes at T but model truncates at regulation time, causing boundary singularity.

Need to ensure >=1000 words total across sections. Each section should be substantial.

Important: Do not mention spreads, totals, moneylines, odds. I will avoid those words entirely. I can mention "market-implied probabilities" but carefully not say odds. Actually, "probability" is fine. The paper uses betting market to estimate scoring intensities. I'll refer to "market-implied scoring intensities" or similar.

Let's draft.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I need exact [PAGE N] markers and verbatim quotes where applicable.

Let's gather key quotes:
[PAGE 4]: "Excitement = Variability of the Winning Expectancy. (1)" and Eq (2) TV definition.
[PAGE 5]: Eq (3) Excitement = TV(P1 wins) + TV(P2 wins). Eq (4) with draw.
[PAGE 7]: "In general, the total variation of winning expectancy is mostly changed if there is a game deciding event close to the end of the game, if there are a number of events where the game lead is changed, or if the weaker team unexpectedly wins or draws the game."
[PAGE 12]: Poisson process memoryless counting process. Eq (5) P(X_{t+dt}=X_t|X_t) = 1 - λ(dt) + o(dt). Eq (6) P(X_{t+dt}=X_t+1|X_t) = λ(dt) + o(dt).
[PAGE 13]: Score evolution independent Poisson processes. Eq for P(X_T = X_t + k).
[PAGE 14]: E[X_T - X_t | X_t] = λ(T-t).
[PAGE 16]: Eq (7) P(Team 1 Will Win).
[PAGE 17]: Eq (8) P(Draw).
[PAGE 18]: Eq (9) P(Team 2 Will Win).
[PAGE 23]: Togo-France expected excitement 1.28, lowest.
[PAGE 27]: Ghana-USA expected excitement 2.55, highest.
[PAGE 31]: Table elimination round games ordered by excitement. Spain-France total 4.05 model, etc.
[PAGE 33]: Figure expected excitement as function of intensities.

Now, ensure no toy equations. I must not invent fake ratios. I can use the paper's equations and standard probability notation.

Let's write.

Word count estimation: Need >1000 total. I'll aim for ~150-200 words per section average, but THINK_TRACE needs >=400 alone. So total will be well over 1000.

THINK_TRACE >=400 words. Let's make it thorough.

THINK_TRACE content:
- Define win expectancy process p_1(t) = P(Team 1 wins | F_t), p_2(t), p_d(t).
- Total variation of a càdlàg path over [0,T] is the L1 norm of its distributional derivative if absolutely continuous, or sum of jumps plus continuous variation.
- The excitement measure aggregates variation across mutually exclusive outcome probabilities.
- In Poisson model with independent rates λ, μ, p_1(t) is given by Eq (7), involving infinite series of Poisson CDFs. The process is a function of current score (X_t, Y_t) and time-to-go τ = T-t.
- Derivation: Given current score x:y, remaining goals for team 1 ~ Pois(λτ), team 2 ~ Pois(μτ). Win prob is convolution. As goals arrive, state jumps, causing p_i(t) to jump. TV accumulates at jump times and via drift if rates change (but here rates constant, so between goals p_i(t) changes deterministically as τ shrinks).
- Gray zones: (a) fixed T assumption ignores stoppage time/injury time randomness; (b) independence of scoring processes ignores strategic interactions (leading team changes intensity); (c) market-implied λ, μ are estimated pre-game and held constant, but in-play information updates them; (d) draw handling in Eq (4) vs Eq (3) creates a discontinuity at knockout vs group stage; (e) overtime extension changes T and resets boundary conditions, making Table on [PAGE 32] a separate measure not derivable from Eq (1)-(4) alone.
- Multi-hop: p_i(t) → TV(p_i) → excitement ranking → model validation against FIFA 2006 data → conclusion that balanced but slightly stronger opponent maximizes expected excitement.

Need to cite page numbers.

SOURCE_OPERATORS_AND_EQUATIONS:
- List Eq (1)-(9) with pages.
- Units: p dimensionless [0,1], t in minutes [min], λ, μ in [min^-1] or goals per match? Paper says scoring intensity estimated at 1.05 for Holland, likely per game (total over 90 min). Actually λ(T-t) expected goals. If T=90 min, λ in goals/min. But table λ around 1-2, which suggests per game. Need to note units ambiguity: if T=90 minutes and λ=1.05, then λ is goals per match, not per minute, unless time normalized to [0,1]. The paper says Time HMinutesL on x-axis, so T=90 minutes. Then λ=1.05 would mean 1.05 goals per minute? That's impossible. So likely T is normalized to 1 (full match), or λ is per game and time is fraction of match. This is a breakdown/singularity: dimensional inconsistency if not specified. I should flag it as an assumption/breakdown regime: time must be normalized to [0,1] or rates rescaled accordingly.
- Singularity: λ=0 or μ=0 leads to degenerate win expectancy (no scoring), TV=0 except initial condition. τ→0 leads to step-function convergence to final outcome, TV bounded by 2 (or 3 with draw) but numerically stiff.
- Breakdown: non-stationary scoring (red card, fatigue), dependence between X and Y (strategy), clock stoppage.

RETROCAUSAL_GENEALOGY:
- Lineage: Total variation from real analysis (Jordan, Wiener), applied to probability paths (Doob martingales, win probability as martingale under risk-neutral measure if market efficient). Connection to "excitement" literature: win probability added (WPA) in baseball, advanced NFL win probability models.
- Poisson in sports: Maher (1982) Poisson model for soccer, Dixon-Coles corrections for dependence.
- Multi-week traps: Using single-game λ across a tournament ignores opponent-specific adjustments; carrying over excitement rankings from group stage to knockout ignores changed incentives (draw possible vs not); assuming betting market probabilities are static ignores in-play information arrival; applying regulation-time model to overtime without re-estimating T and rates (see [PAGE 31] vs [PAGE 32] tables).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: When a team concedes, they may regress to a crisis habit (pressing high, committing more players forward), which raises their scoring intensity but also raises vulnerability to counter-attacks. This violates the memoryless constant-λ assumption because λ becomes path-dependent on score differential.
- Counter-trap: Leading team may adopt a low-block, reducing λ and μ (fewer total goals), suppressing TV relative to model.
- Clock: The factor τ=T-t in Eq (7)-(9) compresses the distribution as t→T. Near the end, a single goal has a discontinuous impact on win probability. If a goal occurs at τ→0, p_1 jumps from ~0.5 to ~1 (or vice versa), creating maximal TV density. The model's excitement increases with scoring rates (Abstract [PAGE 2]), but clock proximity determines the magnitude of each jump.

CROSS_LAYER_VETO_ADJUDICATION:
- Layer 1 Physical: Pitch dimensions, grass quality, altitude affect ball roll and scoring. If altitude increases scoring intensity uniformly, model can absorb via λ, μ but cannot capture time-varying effects.
- Layer 2 Biomechanical: Player fatigue accumulates nonlinearly; sprint capacity declines after ~70 min. This makes λ(t), μ(t) decreasing functions of absolute time, violating memorylessness [PAGE 12].
- Layer 3 Weather: Rain or wind reduces scoring intensity and increases variance; if weather changes mid-game, rates are regime-switching, not Poisson.
- Layer 4 Referee/Disciplinary: Red card removes a player, effectively reducing that team's λ and increasing opponent's μ for the remainder. This is an exogenous state change not modeled by independent Poisson processes.
- Veto rule: If any layer induces dλ/dt ≠ 0 or dμ/dt ≠ 0, or introduces dependence Cov(dX_t, dY_t) ≠ 0, the Poisson win expectancy formulas Eq (7)-(9) are invalid, and TV computed from them is a lower/upper bound only. The model passes only when scoring is stationary, memoryless, and independent over fixed T.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions. Make them concrete and verifiable (RLVR = verifiable rewards perhaps). I'll frame them as falsifiable counterfactuals.

Scenario 1: Red card at minute 30 in a match with pre-game λ_1 > λ_2. Team 1 receives red card, dropping to 10 men.
Veto condition: λ_1(t) drops discontinuously; independence fails because team 2's attacking intensity rises.
Prediction: Model-based expected excitement (computed with constant λ) underestimates realized TV. Specifically, win expectancy of team 2 will exhibit a step increase at t=30 and additional swings as team 1 defends; realized TV > model TV.

Scenario 2: Heavy favorite (λ_1 ≫ λ_2) scores in minute 15. Win expectancy p_1(t) jumps near 0.9.
Veto condition: Leading team reduces tempo (biomechanical/physical conservation), trailing team abandons structure; λ_1 decreases, λ_2 may briefly increase then decrease as game opens. Constant-rate assumption violated.
Prediction: Realized excitement will be lower than model-predicted expected excitement because p_1(t) asymptotically approaches 1 with minimal further variation, whereas the Poisson model with constant λ_2 assigns nonzero comeback probability and thus residual TV until t=T.

Scenario 3: Knockout match tied 1-1 at t=T (regulation), going to overtime.
Veto condition: The model's fixed end time T is wrong; actual decision horizon extends to T + ΔT_overtime. Draw probability at t=T is nonzero and resolved later.
Prediction: Regulation-time TV (Table [PAGE 31]) truncates the path at the boundary where p_draw is highest, omitting the overtime swing. If the game ends in penalty shootout, the TV continues beyond T; model-predicted total excitement from regulation is a strict lower bound relative to the full match including overtime (cf. [PAGE 32] table where total increases or reorganizes when overtime included). Example: Switzerland-Ukraine * total 1.38 regulation vs 2.16 including overtime [PAGE 31-32].

Wait, need to check [PAGE 31] vs [PAGE 32] values:
[PAGE 31]: Switzerland – Ukraine *: Model Exp Total 1.38? Actually table columns: Game, λ1, λ2, Score, Win, Loss, Draw, Total Model, Exp? Wait table header is messy. Let's read:
"Game λ1 λ2 Score Win Loss Draw Total Model Exp"
Spain – France 1.16 0.92 1-3 1.48 1.16 1.41 4.05 4.53 2.42
...
Switzerland – Ukraine * 0.90 1.20 0-0 0.25 0.45 0.68 1.38 1.41 2.43
So columns might be: Win (model?), Loss (model?), Draw (model?), Total Model, Exp? Actually "Total Model Exp" might be Total, Model, Exp? Hard to parse. But I don't need exact values if uncertain. I can refer generally.
[PAGE 32]: Switzerland – Ukraine * 0-0 1.14 1.02 2.16.
So including overtime total is 2.16.

I'll cite carefully but avoid misquoting numbers if unsure. I can say "the same fixture appears with a larger aggregate in the overtime-inclusive table" without exact numbers, or quote only what's clear.

I need to ensure no mention of odds/spreads/totals/moneylines. The word "totals" appears in the table header perhaps ("Total"). I should avoid saying "totals" in betting sense. The constraint says never mention spreads, totals, moneylines, or odds. I can use "Total" as in total variation, but not as a betting total. I'll be careful not to use "totals" as a betting term. I'll avoid the word "odds" entirely. I'll not say "moneyline". I'll not say "spread".

Now let's write the full response with proper XML sections.

Word count check: I need >1000 words across sections. Let's write generously.

THINK_TRACE: ~450 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~300 words.
RETROCAUSAL_GENEALOGY: ~250 words.
RECURSIVE_THEORY_OF_MIND: ~250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~300 words.
RLVR_COUNTERFACTUAL_VETOES: ~250 words.
Total ~1800 words. Good.

Let's draft carefully.

I need to include exact [PAGE N] markers. Use [PAGE 4], [PAGE 12], etc.

Verbatim quotes: include a few short ones with page markers.

Let's write.

One concern: The user said "DRIVE SOURCE: ..." and provided text. I should treat that as the source. I don't need to browse. I will cite from provided pages.

Let's begin drafting in final channel.
</NATIVE_REASONING>

<THINK_TRACE>
The excitement measure in Vecer, Ichiba, and Laudanovic is defined as the total variation (TV) of the win-expectancy path over the contest interval [0,T]. Let p_1(t) = P(Team 1 wins | F_t), p_2(t) = P(Team 2 wins | F_t), and, when a draw is possible, p_d(t) = P(draw | F_t). Because these are mutually exclusive and exhaustive, p_1(t)+p_2(t)+p_d(t)=1 almost everywhere. The paper’s core proposal, quoted on [PAGE 4], is that “Excitement = Variability of the Winning Expectancy,” operationalized as the total variation TV(f) = lim_{max|t_{i+1}-t_i|→0} Σ |f(t_{i+1}) - f(t_i)| over a partition of [0,T], where 0=t_0<t_1<...<t_n=T. On [PAGE 5], this is generalized for two-team contests without draws as Eq. (3), TV(p_1)+TV(p_2), and with draws as Eq. (4), TV(p_1)+TV(p_d)+TV(p_2). Since p_2 = 1 - p_1 - p_d, the TV of p_2 is not independent of the other two, but the additive definition treats each probability path as a separate source of swing.

The Poisson scoring model enters on [PAGE 12] as a memoryless counting process: P(X_{t+dt}=X_t|X_t) = 1 - λ dt + o(dt) and P(X_{t+dt}=X_t+1|X_t) = λ dt + o(dt). Scores evolve as independent Poisson processes with intensities λ and μ [PAGE 13], so conditional on the current score X_t:Y_t, the remaining goals are X_T - X_t ~ Pois(λ(T-t)) and Y_T - Y_t ~ Pois(μ(T-t)) [PAGE 14]. The win probabilities are then infinite-series convolutions: Eq. (7) on [PAGE 16] gives P(Team 1 wins), Eq. (8) on [PAGE 17] gives P(draw), and Eq. (9) on [PAGE 18] gives P(Team 2 wins). Because the scoring process is memoryless, p_i(t) is a deterministic function of (X_t,Y_t,τ=T-t). Between goals, τ shrinks and p_i(t) drifts smoothly; at each goal, the state jumps and p_i(t) jumps discontinuously. TV therefore accumulates both from the continuous time-to-go compression and from discrete goal events.

Gray-zone audit. (i) Dimensional consistency: the x-axes in [PAGE 20]-[PAGE 30] are labeled in minutes, yet the reported intensities λ≈1.05 for Holland and μ≈1.57 for Argentina [PAGE 19] cannot be goals per minute over a 90-minute match without implying impossible scoring rates; time must therefore be normalized to [0,1] or intensities rescaled accordingly, a convention not stated explicitly. (ii) Fixed end time: T is assumed fixed [PAGE 13], but injury time and overtime make the actual decision horizon stochastic; the paper handles this by presenting separate regulation-time and overtime-inclusive tables on [PAGE 31] and [PAGE 32], rather than deriving a unified TV over a random horizon. (iii) Independence: strategic feedback—leading teams sitting back, trailing teams pressing—makes λ and μ path-dependent, violating the constant-intensity assumption. (iv) Market versus model: the paper estimates λ and μ from betting markets [PAGE 10] and applies them to the Poisson model [PAGE 23], [PAGE 27], but it does not model the arrival of in-play information that would update λ(t), μ(t), creating a gray zone between “expected excitement” (ex-ante) and “realized excitement” (ex-post). The ranking result—Ghana–USA expected excitement 2.55 highest, Togo–France 1.28 lowest [PAGE 23], [PAGE 27]—follows directly from the abstract claim on [PAGE 2] that higher scoring rates and closely matched strengths increase expected excitement, with the maximum expected excitement occurring against a slightly stronger opponent.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations from the source, with units and page citations.

[PAGE 4] Eq. (1): Excitement = Variability of the Winning Expectancy. Units: dimensionless excitement index.
[PAGE 4] Eq. (2): TV(f) = lim_{max|t_{i+1}-t_i|→0} Σ_{i} |f(t_{i+1}) - f(t_i)|, 0=t_0<t_1<...<t_n=T. Units: f is probability [dimensionless], t in [minutes] per figure axes on [PAGE 20]-[PAGE 30], so TV accumulates in probability-units per match path length.
[PAGE 5] Eq. (3): Excitement = TV(P(Team 1 Wins)) + TV(P(Team 2 Wins)). Valid when a draw is not an option (e.g., elimination round).
[PAGE 5] Eq. (4): Excitement = TV(P(Team 1 Wins)) + TV(P(Draw)) + TV(P(Team 2 Wins)). Modified version when draw is possible.
[PAGE 12] Eq. (5): P(X_{t+dt}=X_t | X_t) = 1 - λ dt + o(dt). [PAGE 12] Eq. (6): P(X_{t+dt}=X_t+1 | X_t) = λ dt + o(dt). λ has units [goals per unit time] if time is normalized; otherwise the numerical values in [PAGE 19] ([PAGE 23], [PAGE 27]) imply intensity is expressed per match, requiring normalized time τ∈[0,1].
[PAGE 13] P(X_T = X_t + k) = exp[-λ(T-t)] [λ(T-t)]^k / k!, and analogously for Y with intensity μ. Independent Poisson processes. T fixed.
[PAGE 14] E[X_T - X_t | X_t] = λ(T-t); E[Y_T - Y_t | Y_t] = μ(T-t). Expected remaining goals linear in time-to-go.
[PAGE 16] Eq. (7): P(Team 1 Will Win) = Σ_{k=0}^∞ [e^{-λt} (λt)^k / k!] · [Σ_{i=0}^{k+X_t-Y_t-1} e^{-μt} (μt)^i / i!]. Dimensionless probability [0,1].
[PAGE 17] Eq. (8): P(Draw) = Σ_{k=0}^∞ e^{-(λt+μt)} · [λ(k+max(X_t+Y_t)-X_t)/t]^{k+max(X_t+Y_t)-X_t} / (...) · [μ(k+max(X_t+Y_t)-Y_t)/t]^{k+max(X_t+Y_t)-Y_t} / (...). The typesetting on [PAGE 17] is dense; the operator is a convolution of two Poisson tails evaluated at the current score differential.
[PAGE 18] Eq. (9): P(Team 2 Will Win) = Σ_{k=0}^∞ [e^{-μt} (μt)^k / k!] · [Σ_{i=0}^{k-Y_t+X_t-1} e^{-λt} (λt)^i / i!].

Singularity and breakdown regimes:
1. λ=0 or μ=0: one team cannot score; win expectancy collapses to a step function at t=0, TV→0 except for the initial condition, so the model predicts zero excitement regardless of T.
2. τ=T-t → 0: the Poisson distributions concentrate on zero additional goals; p_i(t) converges to the indicator of the final outcome. TV is bounded by 2 (no-draw case) or 3 (draw case), but numerical evaluation becomes stiff because the infinite series in Eq. (7)-(9) must resolve arbitrarily small probabilities of late comebacks.
3. Non-stationary intensity: if dλ/dt ≠ 0 or dμ/dt ≠ 0 (red card, fatigue, weather regime change), the memoryless property on [PAGE 12] fails and Eq. (7)-(9) are no longer the conditional win probabilities.
4. Dependence: if Cov(dX_t, dY_t) ≠ 0 (strategic coupling), the product-form Poisson convolution breaks down.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage of the paper runs through three layers. First, total variation as a path functional comes from classical real analysis (Jordan, Wiener) and probability theory (Doob martingales, càdlàg paths). Treating win expectancy as a stochastic process f(t) whose arc-length measures excitement is a direct application of variation theory to a bounded probability process. Second, the Poisson model of scoring descends from Maher’s (1982) Poisson regression for soccer match scores and subsequent bivariate Poisson extensions; the paper simplifies to independent univariate Poisson processes to obtain closed-form win probabilities on [PAGE 13]-[PAGE 18]. Third, the use of market-implied win expectancy as an empirical benchmark on [PAGE 10] connects to information-efficiency approaches in sports analytics, though the paper carefully avoids framing the market as a prediction instrument and instead uses it as an observable feed for λ and μ.

Multi-week traps arise when this single-game operator is exported across a tournament. Trap A: stationarity across opponents. The paper estimates λ and μ per fixture (e.g., Holland 1.05 vs Argentina 1.57 on [PAGE 19]); carrying those intensities into a subsequent knockout round ignores opponent-specific tactical adjustments and assumes the scoring rate is a team-level fixed effect rather than a matchup-level random variable. Trap B: horizon mismatch. Regulation time assumes a draw is possible [PAGE 5], Eq. (4), while knockout elimination removes the draw [PAGE 5], Eq. (3). Applying the regulation-time TV formula to a knockout match without resetting the state space at the draw boundary miscounts excitement because p_draw is forcibly removed at t=T. Trap C: overtime extension. The separate tables on [PAGE 31] (regulation) and [PAGE 32] (overtime included) show that the same fixture can be ranked differently once T is extended; recursively applying the regulation-time model into overtime without re-estimating T and the intensities produces a boundary truncation bias, since the TV path continues past the regulation end time but the model stops at T.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes how a team that concedes a goal alters its strategic state. Trailing teams tend to press higher, commit more players forward, and accept greater defensive risk. In the model’s language, this means the trailing team’s scoring intensity λ_trail is not constant but increases as a function of score differential and time-to-go τ, directly contradicting the memoryless constant-λ assumption on [PAGE 12]. The leading team, conversely, may regress to a protective habit: dropping deeper, reducing tempo, and suppressing both its own λ and the opponent’s μ. This counter-trap compresses the win-expectancy path toward 1 for the leader and toward 0 for the trailer, reducing realized TV relative to the model’s expectation.

The clock enters nonlinearly through τ=T-t in Eq. (7)-(9) on [PAGE 16]-[PAGE 18]. Early in the match, a single goal changes p_i by a modest amount because substantial time remains for a response. Near t=T, τ→0 and the Poisson tails collapse; a goal scored at minute 89 moves p_i from near 0.5 to near 1 (or 0) with almost no residual uncertainty, producing a maximal jump in TV. This is why [PAGE 7] states that total variation is “mostly changed if there is a game deciding event close to the end of the game.” The recursive loop is therefore: score event → tactical habit shift (crisis regression or counter-trap) → time-varying λ, μ → violation of Poisson memorylessness → misestimated TV at the boundary where the clock makes each goal most valuable. The model can only be trusted when teams maintain stationary intensities and when the clock does not interact with score-dependent strategy.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Layer 1 — Physical: pitch condition, altitude, and ball physics alter scoring propensity. If altitude raises scoring uniformly, λ and μ can be rescaled, but if the effect is nonlinear across the match (e.g., ball degradation), intensity becomes time-dependent and the Poisson assumption fails.
Layer 2 — Biomechanical: player fatigue accumulates nonlinearly, especially after 70 minutes. Sprint capacity and decision quality degrade, implying dλ/dt < 0 and dμ/dt < 0 as absolute time increases. This is a direct veto of the memoryless process on [PAGE 12], because the time-between-goals is no longer exponentially distributed with constant parameter.
Layer 3 — Weather: rain, wind, or extreme heat changes scoring intensity and increases variance. A mid-game weather shift creates a regime-switching process; independent stationary Poisson processes cannot represent a discontinuity in λ(t).
Layer 4 — Referee and disciplinary: a red card removes a player, discontinuously reducing the offending team’s λ and increasing the opponent’s μ for the remainder of the match. This exogenous state change induces dependence between the scoring processes and invalidates the product-form convolution in Eq. (7)-(9).

Veto proof: The model is valid only if (a) λ and μ are constant over [0,T], (b) X and Y are independent counting processes, (c) T is fixed and known, and (d) no in-game event alters the scoring technology. If any layer induces dλ/dt ≠ 0, dμ/dt ≠ 0, or Cov(dX_t, dY_t) ≠ 0, the computed TV from Eq. (2) using Eq. (7)-(9) is not the true excitement but a lower-dimensional projection. The paper’s own examples—Spain–France total 4.05 vs Brazil–Ghana 0.46 on [PAGE 31]—presuppose these conditions hold across diverse elimination games, which is physically implausible without layer-specific adjustments. Therefore any application of this excitement metric to live games must first pass a cross-layer veto: verify stationary intensities, fixed horizon, and independence; otherwise the output is a theoretical bound, not a measurement.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions. RLVR here denotes scenarios whose outcomes can be checked against observed win-expectancy paths.

Scenario 1 — Red-card intensity collapse. Pre-match model assigns Team 1 intensity λ_1 > λ_2. At minute 30, Team 1 receives a red card and plays with ten men for the remaining 60 minutes. Veto condition: λ_1(t) drops discontinuously at t=30 and Team 2’s attacking intensity rises because of the numerical advantage; independence and stationarity fail. Prediction: The realized TV of p_2(t) will exhibit a step increase at the red-card minute and additional swings as Team 1 defends a lead or chases a deficit. The model’s expected excitement (computed with constant λ_1, λ_2 from [PAGE 13]-[PAGE 14]) will underestimate realized TV because it cannot generate the post-red-card step change in win probability.

Scenario 2 — Early goal by a heavy favorite with tempo suppression. Team 1 is a heavy favorite (λ_1 ≫ λ_2) and scores in minute 15. Veto condition: The leading team conserves energy and reduces tempo (biomechanical veto), so λ_1 decreases after the lead; the trailing team briefly increases pressure then abandons structure, making λ_2 non-constant. Prediction: Realized excitement will be lower than the model’s expected excitement. In the Poisson model with constant λ_2, Team 2 retains a nonzero comeback probability until t=T, generating residual TV [PAGE 7]. In reality, p_1(t) asymptotically approaches 1 with minimal further variation after the early goal, truncating the path’s vertical component.

Scenario 3 — Knockout draw at regulation boundary with overtime extension. Match is tied 1-1 at t=T regulation; per [PAGE 5], Eq. (4) assigns nonzero p_draw at the boundary. The game proceeds to overtime, changing the horizon from T to T+ΔT. Veto condition: fixed-T assumption on [PAGE 13] is wrong; the draw probability is not terminal. Prediction: Regulation-time TV (e.g., the [PAGE 31] table) is a strict lower bound on full-match excitement. The overtime-inclusive table on [PAGE 32] shows aggregate values for the same fixtures that exceed or re-rank the regulation totals, confirming that TV continues past the regulation end time. If the match ends in a penalty shootout, the win-expectancy path jumps discontinuously again at the shootout boundary, an event entirely outside the Poisson scoring model’s support.
</RLVR_COUNTERFACTUAL_VETOES>