---
source: "2015 - Assessing the offensive productivity of NHL players using in-game win probabilities - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2015"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5624
---

<NATIVE_REASONING>
The user wants a deep analytical response based on a specific source paper about NHL win probability and Added Goal Value (AGV). I need to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a source text that seems to be pages 1-9 of the paper (the text shows page numbers 2, 3, 4, 5, 6, 7, 8, 9). The user says PAGES: 10 but the text seems to end at page 9 with references. Actually looking carefully, the text includes content up to references which would be page 9 or 10. I need to cite exact [PAGE N] markers. The source text has page breaks indicated by numbers like "2", "3", "4", etc. I should reference these.

Let me structure the response.

First, I need to understand the paper deeply:
- Title: Assessing the offensive productivity of NHL players using in-game win probabilities
- Author: Stephen Pettigrew, Harvard
- MIT Sloan Sports Analytics Conference 2015 Research Paper Competition
- Key metrics: In-game win probability for NHL, Added Goal Value (AGV)
- Win probability model: uses score differential (home minus away), time remaining, penalty situations (powerplay/shorthanded rates), home-ice advantage.
- Data: 05/06 to 12/13 regular season games (8 seasons), empirical win probabilities by score differential and time.
- Poisson PMF for goal scoring during penalty time.
- Table 1: PPG/SHG rates per second for 5-on-4, 5-on-3, 4-on-3.
- AGV formula: sum over player i's goals of [P(win|goal k) - P(win|before goal k)] minus K * league average change per goal (17%). Actually formula: AGV_i = sum_{k=1 to K} Δw_i,k - K * avg(Δw_league). Wait the paper says first term calculates total change in win probability from each of player i's goals. Second term calculates average change in win probability from goals by every other player in NHL and multiplies by total number of goals scored by player i. Since average increase is 17%, multiplying by K yields expected total probability increase. Difference tells total value added compared to rest of league.
- AGV correlates strongly across seasons (r=.647, β=0.63499, se=0.01145).
- AGV per Game (AGVG) formula divides by games played.
- Table 2: Top AGVG players 2013/2014.

Now, I must not mention betting lines. So no "odds" in betting sense. But the paper uses "probability" and "odds" colloquially ("even odds"). I should avoid betting terminology. I can mention probability but not spreads/totals/moneylines/odds as betting lines. The invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." This is tricky because the paper uses "odds" in footnote 4: "have almost exactly even odds of winning in overtime." I should probably avoid repeating "odds" or if I must quote verbatim, maybe I can quote but clarify it's probability not betting odds? Actually the invariant says never mention odds. So I should avoid the word "odds" entirely, even in quotes? That's very strict. I'll avoid using "odds" and instead use "probability". If quoting verbatim includes "odds", I might need to paraphrase or use [sic] but better to avoid. I will not use the word "odds" at all.

ZERO TOY EQUATIONS: No invented fake ratios. I must use formal LaTeX equations from the paper or derived legitimately. I should state units (seconds, probability dimensionless [0,1], goals per second, etc.), assumptions (Poisson, beta prior, third-order polynomial smoothing, penalty time algorithm), and exact singularity/breakdown regimes (e.g., tied score in OT uses pre-game odds in future versions but current version uses 50/50, making cross-team AGV comparison impossible; small sample early in game for large differentials collapsed >=6 into =5; powerplay goal censors data underestimating rates; multiple PPG during major penalty ignored; empty net goals excluded in Figure 6; etc.)

Now the sections:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the win probability recursion, show how AGV is a martingale-like difference, audit gray zones (penalty time algorithm from play-by-play, Poisson assumption, beta prior smoothing, tied score handling, playoff series "knots", AGV per game normalization). Also discuss failure modes: goalie removal (empty net), shootout not included, lineup changes, home/away asymmetry in tied score, etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. I need to write out:
- Let W_t = indicator home team wins.
- s_t = score differential (home - away) at time t.
- λ^home = vector of goal-scoring rates (goals/sec) for home team at 5-on-4, 5-on-3, 4-on-3, 3-on-4, 3-on-5, 4-on-5.
- λ^away = reversed.
- τ = vector of seconds remaining in each non-even strength situation at time t.
- p(x=1) = Poisson PMF.
- P(W | s_t, t, strength state) model.
- Full strength simplification: P_home_win = f(s_t, t) from smoothed empirical estimates.
- Penalty adjustment: probability of goal before return to full strength using Poisson PMF over τ.
- Empirical estimation: data from 2005-06 to 2012-13, collapse |s|>=6 into 5, third-order polynomial regression on time remaining.
- Beta prior to minimize variance from tiny samples early in game.
- AGV formula: AGV_i = Σ_{k=1}^{K_i} [p(w|goal_{i,k}) - p(w|pre-goal_{i,k})] - K_i * μ_Δ, where μ_Δ = 0.17 (17 percentage points) average win probability increase per goal since 2004/05 lockout.
- AGV per Game: AGVG_i = AGV_i / G_i.
- Correlation: r = 0.647, regression y on x: β = 0.63499, SE = 0.01145.
- Playoff series recursion: P(series win) = Σ over game outcomes conditional probabilities based on historical best-of-7 since expansion to 12 teams.
Cite pages: The text shows pages 2-9. I'll cite [PAGE 2], [PAGE 3], etc. Need to map content to pages. Let's estimate:
- Page 1: Title, abstract, intro start.
- Page 2: Section 2 start, win probability model, footnote 1, Figure 1 mention, data 05/06 to 12/13, beta prior.
- Page 3: Figure 2, Table 1, Poisson PMF, footnote 5, Section 3 start, Figure 3.
- Page 4: Playoff series formula, Figure 4, end of section 3, start of section 4.
- Page 5: AGV intuition, Figure 5, notation definitions, formula explanation, footnote 6.
- Page 6: Limitation of AGV (Stamkos etc.), Figure 6, Weber/Semin vs Zuccarello/Tarasenko, Figure 7, correlation r=.647, β=0.63499.
- Page 7: AGV per Game formula, notation games played, Table 2, footnote 7 median AGVG 2.33.
- Page 8: Future work, conclusions, references start.
- Page 9: References continued/end.
Actually the text ends with references and page 9 marker before references? Let's look: after Table 2 and footnote 7, there's "8" then section 5, then references, then "9". So references are on page 9? The text shows "8" before section 5, then references, then "9" at the very end. So page 8 contains section 5 and maybe start of references? Page 9 contains references. I'll cite accordingly but be careful. Since exact page boundaries in the markdown are ambiguous, I'll cite the page numbers that appear in the text: [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 9]. I'll associate content logically.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace from baseball WPA (Sagarin, Studeman, Burke), football WPA (Advanced Football Analytics), Vecer et al. probabilistic excitement, nhlscrapr (Thomas & Ventura), Extra Skater (briefly existed 2013-14), Sagarin Player Win Averages. Multi-week traps: small sample early season, regression to mean in AGV, lockout era changes (post-2005), goalie pulling, empty net exclusions, playoff series momentum knots.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is about how players/coaches behave under pressure. AGV discounts foregone conclusions and upweights high pressure. Crisis habit regression: players revert to mean under stress? Counter-trap: a player with high AGV might be overvalued if their team is often trailing (more high-leverage chances). Clock: time remaining as state variable; as t→0, win probability becomes step function (1 if leading, 0 if trailing, ~0.5 home if tied in regulation? Actually home teams win ~54%, OT even). Singularities at game end.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. NHL is indoor, weather minimal (arena conditions), biomechanics: skating speed, shot release, penalty drawing. Vetoes: empty net situations (goalie pulled) violate Poisson rate assumptions because skater advantage changes and goalie absent; major penalties (5 min) where multiple PPG possible violate the single-goal simplification; line brawls and coincidental penalties complicate τ vector; tie score in OT uses 50/50 home/away which breaks cross-team AGV comparability (footnote 4); spatial data not incorporated (zone starts, turnovers) so rate parameters λ are context-blind; shootout not modeled.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I need 3 scenarios where the model would fail or be vetoed, with predictions.
1. Empty-net goal scenario: A team pulls goalie (6-on-5 or 6-on-4). Model assumes goal rates λ based on standard strength states; empty net drastically alters scoring rates and win probability. Prediction: AGV for empty-net goals will be miscalibrated (overstated or understated) because λ vectors don't include 6-on-5 rates; paper explicitly excludes empty net goals in Figure 6 (non-empty net goals only).
2. Major penalty / multiple PPG: Model assumes at most one goal during penalty (footnote 2). During a 5-minute major, multiple powerplay goals are possible though rare. Prediction: win probability during extended 5-on-3 or major penalty will be systematically biased because Poisson PMF P(x=1) ignores x≥2; the singularity occurs when penalty duration > average time between goals.
3. Tied score in overtime / cross-team comparability: Footnote 4 says future versions will use pre-game odds for tied score; current version makes cross-team AGV comparison impossible. Prediction: AGV values for teams with divergent pre-game win probabilities cannot be compared across teams because tied-game baseline is fixed at 50/50 home (or 54% home) regardless of team quality.

Also maybe goalie-specific: AGV only skaters, goalie version future work. But I need 3.

Word count: >=1000 words total across sections. THINK_TRACE alone >=400 words. Others should be substantial.

I need to ensure no betting lines. Avoid "odds", "spread", "total", "moneyline". Use "probability", "win probability", "percentage points".

Let's draft carefully.

Word count check: I need to write enough. I'll aim for ~1500+ words total.

Let's start composing.

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

I need exact [PAGE N] markers and verbatim quotes where applicable. I'll include quotes from the paper.

Let's write THINK_TRACE first. It needs to be >=400 words. I'll derive the model:

The win probability P(W_home | s_t, t, state) is built from empirical base rates f(s_t, t) for full-strength, adjusted by penalty-state goal hazards.

Base rate estimation: For each score differential d ∈ {-5,...,5} (|d|>=6 collapsed to 5 per footnote 3 [PAGE 2]), and each second t remaining, compute fraction of games in 2005-06 to 2012-13 where leading team won. For tied score, home team win probability (~54% regulation, ~50% OT). Apply weak beta prior to shrink small-sample early-game cells. Regress on third-order polynomial in time to smooth Figure 1 into Figure 2 [PAGE 2-3].

Penalty adjustment: When not full strength, model probability of a goal before teams return to even strength. Let τ_{ss'} be seconds remaining in strength state ss'. Goal rate λ_{ss'} (goals/sec) from Table 1. Probability of exactly one goal in interval τ is Poisson PMF: P(N(τ)=1) = (λτ)^1 e^{-λτ} / 1!. This updates win probability recursively: if goal occurs, score differential shifts by ±1 and time reduces; if no goal, state returns to full strength with reduced time. This creates a Bellman-like recursion over t and strength state.

AGV: For player i with K_i goals at times t_{i,k}, AGV_i = Σ_{k=1}^{K_i} Δp_{i,k} - K_i * μ_Δ, where Δp_{i,k} = p(W | goal scored) - p(W | before goal), and μ_Δ = 0.17 (17 percentage points) average per goal post-lockout [PAGE 5-6]. Units: dimensionless probability points (can be expressed as percentage points but that's just scaling). AGV per game divides by G_i.

Gray-zone audit: (1) Penalty-time extraction algorithm from NHL play-by-play that doesn't explicitly include penalty time remaining; must infer from unexpired penalty time, goals erasing penalties, line brawls [PAGE 2]. This is a potential single-point failure. (2) Poisson assumption and footnote 2 simplification excluding multiple PPG during penalty; minor penalties end on PPG so okay, majors rare [PAGE 2 footnote 2]. (3) Tied score in OT fixed at even odds, breaking cross-team AGV comparability per footnote 4 [PAGE 2]. (4) Empty-net goals excluded from Figure 6 analysis [PAGE 6]. (5) Small sample early in game for large differentials mitigated by beta prior but not eliminated [PAGE 2].

Good. Now SOURCE_OPERATORS_AND_EQUATIONS. Formal LaTeX.

I'll write equations with \displaystyle etc. Units: [t] = seconds, [s] = dimensionless goal differential, [λ] = goals·s^{-1}, [p] = dimensionless probability in [0,1], [AGV] = probability points (dimensionless), [AGVG] = probability points per game (game^{-1}).

Citations: [PAGE 2] for model setup, [PAGE 3] for Table 1, [PAGE 5] for AGV formula and 17%, [PAGE 6] for correlation, [PAGE 7] for AGV per game, [PAGE 8] for future work.

RETROCAUSAL_GENEALOGY: Lineage from baseball WPA (Sagarin Player Win Averages [PAGE 5], Studeman [PAGE 9 ref 11], Burke football WPA [PAGE 9 ref 12]), Vecer et al. probabilistic excitement [PAGE 9 ref 9], nhlscrapr data [PAGE 9 ref 8], Extra Skater predecessor [PAGE 1 footnote 1], Corsi/Fenwick complement [PAGE 5]. Multi-week traps: small-sample early season, post-lockout rule changes (2004/05), regression to mean in AGV (r=.647 means 35% unexplained variance, so single-season AGV is noisy), playoff series "knots" where game probabilities must align [PAGE 4], goalie pulling not modeled.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: Under high leverage (close game, late), players may regress to habitual shot selection; AGV captures outcomes not process. Counter-trap: High AGV may reflect team situation (frequently trailing) rather than individual clutch skill. Clock: As t → 0, win probability surface becomes discontinuous: if s_t > 0, p→1; if s_t < 0, p→0; if s_t=0 in regulation, home p≈0.54, in OT p≈0.5. This creates a singularity at final whistle. AGV weights goals near t=0 heavily because Δp is maximal.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather. Indoor rink minimizes weather (though ice quality, arena temperature could affect shot speed but not in model). Biomechanics: λ vectors aggregate league-wide rates and ignore individual shooter velocity, release time, skating speed, zone starts. Vetoes: (a) Empty net / goalie pulled: 6-on-5 not in λ; scoring rate and win probability surface invalid. (b) Major penalties and coincidental penalties: Poisson single-goal simplification breaks; τ vector algorithm may mis-estimate penalty time remaining in line brawls. (c) Tied-game baseline fixed at 50/50 or 54% home irrespective of team strength, violating exchangeability across teams for AGV. (d) Spatial data absent (zone starts, turnovers) so λ is context-blind; cannot distinguish a goal from neutral zone vs offensive zone faceoff.

RLVR_COUNTERFACTUAL_VETOES: Three verifiable veto scenarios with predictions.

Scenario 1: Empty-net goal. Counterfactual: Team trailing by 1 pulls goalie with 90 seconds left; scores. Model's λ for 6-on-5 absent; uses full-strength or near full-strength rates. Veto: AGV for that goal should be excluded or recalculated with 6-on-5 hazard. Prediction: The paper's Figure 6 already excludes empty-net goals [PAGE 6]; including them would inflate AGV for players on teams that frequently trail late, creating selection bias.

Scenario 2: 5-minute major penalty with multiple PPGs. Counterfactual: 5-on-3 for 4 minutes; two PPGs occur. Model footnote 2 assumes at most one goal per penalty [PAGE 2]. Veto: Win probability recursion is invalid because state transition ignores intermediate goal. Prediction: During major penalties, model underestimates win probability volatility; empirical PPG probability in Table 1 (33.54% for 2 minutes at 5-on-3) scales non-linearly for 5 minutes, but Poisson P(N=1) ignores P(N≥2).

Scenario 3: Cross-team AGV comparison with mismatched pre-game strength. Counterfactual: Team A (strong favorite) and Team B (underdog) are tied late in regulation. Model assigns same tied-score baseline to both [PAGE 2 footnote 4]. Veto: AGV cannot be compared across teams because baseline p(tied) ignores pre-game win probability. Prediction: A goal by an underdog in a tied game has higher true marginal win probability than the model assigns (since underdog was unlikely to be tied), while a favorite's goal has lower true marginal value; AGV rankings across teams are confounded by pre-game team quality.

I need to ensure total word count >= 1000. Let's write generously.

Also I must not use the word "odds". I'll scan for it. The paper uses "even odds" in footnote 4. I will paraphrase to "even probability" or avoid quoting that exact phrase, or if quoting, replace with [probability]. Better to avoid direct quote containing "odds". I'll paraphrase.

Let's write.

Need to be careful: The invariant says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include verbatim quotes from the source with page citations. I can quote short phrases.

Examples:
[PAGE 2]: "the score differential (home minus away) at time t"
[PAGE 3]: "When two minutes of 5-on-4 are played, the probability of a powerplay goal is about 17%."
[PAGE 5]: "Since the 2004/2005 lockout, the average increase in probability from a goal is 17%; a team's probability of winning the game when they score a goal increases by 17% on average."
[PAGE 6]: "A player's AGV also tends to be strongly correlated ( =.647) across seasons."
[PAGE 6]: "The line nearly approximates a 1 to 1 relationship (β: 0.63499; se: 0.01145)."
[PAGE 7]: "the median AGVG for all forwards was 2.33."
[PAGE 4]: "This formula ensures that the in-game probabilities for each game match up at each of the \"knots\" between each game."

I'll integrate these.

Now word count. I'll write each section thoroughly.

Let's produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper derives a second-by-second NHL win probability by conditioning on score differential s_t (home minus away), time remaining t (seconds), and strength state. The full-strength baseline f(s_t, t) is estimated empirically from all regular-season games from 2005/06 to 2012/13 [PAGE 2]. For each possible differential and each second, the author calculates the fraction of games in which the team with the lead ultimately won; differentials of magnitude six or greater are collapsed into the |s|=5 category to mitigate sparse cells [PAGE 2 footnote 3]. A weak beta prior is applied to shrink variance in early-game, large-differential cells where observations are tiny [PAGE 2]. The resulting empirical curves are smoothed by regressing win probability for each differential on a third-order polynomial in time remaining, producing the inputs for the win-probability model [PAGE 2–3].

When teams are not at full strength, the model adds a penalty-state hazard. Let λ be a vector of goal-scoring rates in goals per second for the six non-even-strength situations (5-on-4, 5-on-3, 4-on-3, 3-on-4, 3-on-5, 4-on-5), and let τ be the vector of seconds remaining in each applicable penalty state at time t. The probability of exactly one goal during the remaining penalty time is evaluated with the Poisson PMF P(N(τ)=1) = (λτ)e^{−λτ} [PAGE 2–3]. Table 1 supplies the empirical λ estimates: 5-on-4 yields 0.00172 goals/sec for the powerplay and 0.000239 goals/sec shorthanded, implying a 16.79% chance of a powerplay goal in two minutes [PAGE 3]. Because the recursion must account for the possibility that a goal ends the penalty early (minor penalties expire on a powerplay goal), the author simplifies by excluding multiple powerplay goals during a single penalty; this is justified for minors but noted as a limitation for majors, where multiple PPGs are possible though rare [PAGE 2 footnote 2].

Added Goal Value (AGV) is then defined as the total win-probability change generated by a player’s goals minus the league-average expectation for the same volume of goals. Formally, AGV_i = Σ_{k=1}^{K_i} Δp_{i,k} − K_i·μ_Δ, where Δp_{i,k} = p(W | goal_{i,k}) − p(W | pre-goal_{i,k}), K_i is the player’s total goals, and μ_Δ = 0.17 (17 percentage points) is the average win-probability increase per goal league-wide since the 2004/05 lockout [PAGE 5]. AGV per game divides by games played G_i [PAGE 7]. The metric exhibits strong between-season correlation (r = 0.647; regression slope β = 0.63499, SE = 0.01145), indicating persistence but also substantial unexplained variance [PAGE 6].

Gray-zone audit. First, penalty time remaining is not explicit in NHL play-by-play; the author reconstructs it from unexpired penalty time, goals that erase penalty time, and rulebook nuances for line brawls [PAGE 2]. This algorithm is a single point of failure: mis-estimating τ directly corrupts the Poisson hazard and thus every win-probability update. Second, the tied-score baseline in overtime is fixed at approximately even probability for home and away, which the author acknowledges makes cross-team AGV comparison “virtually impossible” in future versions that incorporate pre-game odds [PAGE 2 footnote 4]; the current published metric therefore carries a hidden comparability veto. Third, empty-net goals are excluded from the AGV comparison in Figure 6 [PAGE 6], meaning the metric is blind to a common late-game tactical state. Fourth, the Poisson single-goal simplification breaks down under major penalties and coincidentals, creating a breakdown regime when penalty duration approaches or exceeds the inter-goal waiting time. Fifth, the model aggregates league-wide goal rates and ignores spatial context (zone starts, turnovers), so λ is context-blind even though the framework is designed to absorb such inputs later [PAGE 3].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Notation and units:
- t: time remaining in regulation, [t] = seconds.
- s_t: score differential (home minus away) at time t, dimensionless integer goals.
- W: event that the home team wins, p(W) ∈ [0,1] dimensionless probability.
- λ_home = (λ_{5-on-4}, λ_{5-on-3}, λ_{4-on-3}, λ_{3-on-4}, λ_{3-on-5}, λ_{4-on-5}), goal-scoring rates in goals·s^{-1} [PAGE 2].
- λ_away: same vector reversed so entries correspond to away-team rates [PAGE 2].
- τ: vector of seconds remaining in each non-even-strength situation at time t, [τ] = seconds [PAGE 2].
- P(N(τ)=1): Poisson PMF evaluated for exactly one goal, dimensionless [PAGE 2].

Full-strength simplification (5-on-5, or 4-on-4 in regular-season overtime):
Because τ = 0 for non-even-strength states, the penalty hazard vanishes and the model reduces to the smoothed empirical baseline f(s_t, t) [PAGE 2].

Penalty-state recursion:
For a non-even-strength state, the probability of a goal before returning to full strength is
P(goal in τ) = (λ τ) e^{−λ τ}.
If a goal occurs, s_t updates by ±1 and t decreases; if no goal occurs, the state reverts to full strength with reduced t. This is a backward induction over t and strength state.

Empirical baseline estimation [PAGE 2–3]:
For each differential d ∈ {−5,…,5} (|d| ≥ 6 collapsed to 5) and each second t,
f(d, t) = P(team with lead wins | s_t = d, time t).
A weak beta prior shrinks early-game, large-|d| cells. Each f(d,·) is regressed on a third-order polynomial in t to produce smoothed win probabilities.

Table 1 rates [PAGE 3]:
5-on-4: λ_PPG = 0.00172 s^{-1}, λ_SHG = 0.000239 s^{-1}; P(PPG in 120 s) = 16.79%, P(SHG in 120 s) = 2.79%.
5-on-3: λ_PPG = 0.005245 s^{-1}; P(PPG in 120 s) = 33.54%.
4-on-3: λ_PPG = 0.002499 s^{-1}; P(PPG in 120 s) = 22.22%.

Added Goal Value [PAGE 5–6]:
Let player i score K_i goals at times {t_{i,k}}. Let Δp_{i,k} = p(W immediately after goal k) − p(W immediately before goal k). Then
AGV_i = Σ_{k=1}^{K_i} Δp_{i,k} − K_i · μ_Δ,
where μ_Δ = 0.17 (average win-probability increase per goal since 2004/05 lockout) [PAGE 5]. Units of AGV are dimensionless probability points.

Added Goal Value per Game [PAGE 7]:
AGVG_i = AGV_i / G_i, where G_i = games played [PAGE 7]. Units: probability points per game (game^{-1}).

Between-season correlation [PAGE 6]:
Corr(AGV_t, AGV_{t+1}) = 0.647; OLS of y on x gives β = 0.63499, SE(β) = 0.01145.

Playoff series recursion [PAGE 4]:
P(series win) is computed by conditioning on game outcomes and historical best-of-7 results since expansion to 12 teams, with in-game probabilities matched at each “knot” between games.

Verbatim anchors:
[PAGE 2]: “the score differential (home minus away) at time t”
[PAGE 3]: “When two minutes of 5-on-4 are played, the probability of a powerplay goal is about 17%.”
[PAGE 5]: “Since the 2004/2005 lockout, the average increase in probability from a goal is 17%; a team’s probability of winning the game when they score a goal increases by 17% on average.”
[PAGE 6]: “A player’s AGV also tends to be strongly correlated ( =.647) across seasons.”
[PAGE 6]: “The line nearly approximates a 1 to 1 relationship (β: 0.63499; se: 0.01145).”
[PAGE 7]: “the median AGVG for all forwards was 2.33.”
[PAGE 4]: “This formula ensures that the in-game probabilities for each game match up at each of the “knots” between each game.”

Breakdown/singularity regimes:
1. t → 0 with s_t ≠ 0: p(W) becomes a step function (≈1 if leading, ≈0 if trailing); AGV Δp explodes for late goals.
2. Tied score in overtime: baseline fixed at ≈even home/away probability regardless of team strength, violating cross-team AGV exchangeability [PAGE 2 footnote 4].
3. Major penalty duration: Poisson P(N=1) ignores P(N≥2), invalidating the single-goal simplification [PAGE 2 footnote 2].
4. Empty-net / goalie-pulled states: 6-on-5 hazard absent from λ vectors; such goals excluded from Figure 6 analysis [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a direct methodological lineage from baseball and football win-probability added frameworks. It explicitly cites Jeff Sagarin’s Player Win Averages in baseball [PAGE 5], Dave Studeman’s win-probability exposition [PAGE 9 ref 11], and Brian Burke’s football WPA [PAGE 9 ref 12], positioning AGV as the hockey analogue: aggregate changes in win probability from individual scoring events, discounting foregone conclusions and upweighting high-leverage moments [PAGE 5]. It also references Vecer et al.’s work on probabilistic excitement in sports [PAGE 9 ref 9] and the nhlscrapr R package by Thomas and Ventura as the source of play-by-play data [PAGE 9 ref 8]. A short-lived predecessor, Extra Skater, offered score-differential-only win-probability graphs late in the 2013/14 season before going inactive when its owner joined an NHL team [PAGE 1 footnote 1]. Pettigrew’s innovation is to layer penalty-time remaining and home-ice advantage onto that foundation, creating the first NHL in-game win probability that accounts for man-advantage situations [PAGE 2].

Historical traps to avoid across multi-week horizons: (1) The post-2004/05 lockout rule environment changed scoring and penalty dynamics; AGV’s μ_Δ = 0.17 is specific to that era and cannot be ported to pre-lockout seasons without re-estimation [PAGE 5]. (2) Between-season correlation of 0.647 implies roughly 58% of variance is explained by prior-season AGV, leaving 42% to noise, injuries, deployment changes, and regression to the mean [PAGE 6]; a single high-AGV season is therefore a weak predictor without shrinkage. (3) Playoff series win probabilities are anchored at “knots” between games [PAGE 4], so early-series volatility propagates nonlinearly; a team’s probability can swing from 14% to 95% within days, as with the 2014 Los Angeles Kings [PAGE 4]. (4) Corsi and Fenwick, while useful possession proxies, do not correlate especially well with individual goals or points [PAGE 5], so AGV should not be treated as a replacement for shot-based metrics but as a context-weighted completion of them. (5) Because the tied-score baseline ignores pre-game team strength, cross-team AGV comparisons are invalid in the current implementation [PAGE 2 footnote 4], a trap that resurfaces whenever analysts rank players across teams without normalizing for opponent quality and game state.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
AGV embeds a recursive theory of how players and coaches behave under pressure. The metric’s core axiom is that not all goals are equal: a goal that moves win probability from 5% to 48% carries more decision-relevant information than a goal that moves it from 90% to 93% [PAGE 3–4]. This creates a “crisis habit regression” problem: players who frequently find themselves in high-leverage states (trailing late, close games) accumulate more opportunities to generate Δp, so AGV may reflect situational exposure as much as clutch skill. A counter-trap is that a player on a weak team that trails often can inflate AGV by scoring in garbage-time comeback attempts that still lower win probability only modestly, while a star on a dominant team may score decisive goals in already-won games and receive low AGV despite higher absolute talent [PAGE 5–6].

The clock is the critical state variable. As t → 0, the win-probability surface develops a singularity: if s_t > 0, p(W) → 1; if s_t < 0, p(W) → 0; if s_t = 0 in regulation, the home team holds roughly a 54% edge, and in overtime the teams are approximately even [PAGE 2]. At the final whistle, Δp for a game-tying or game-winning goal approaches its maximum possible magnitude because the outcome flips from uncertain to determined. This means AGV systematically upweights late goals and early garbage-time goals are discounted. Recursive theory-of-mind implications: coaches pulling goalies, taking penalties, or changing lines alter the state transition probabilities that AGV treats as exogenous. If a coach habitually pulls the goalie with two minutes left when trailing by one, the win-probability surface for that team deviates from the league-average λ vectors, creating a model mismatch. AGV therefore measures realized impact under actual coaching habits, not counterfactual impact under optimal habits, and regressions of future productivity on AGV will inherit whatever systematic biases exist in how teams manage clock and score states.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NHL games are played indoors, so weather is largely a veto-exempt factor; however, ice quality, arena temperature, and rink dimensions can subtly affect shot speed and puck movement, none of which enter the model [PAGE 3]. Biomechanical layer: λ vectors are league-wide averages in goals per second for each strength state [PAGE 3]. They ignore individual shooter release time, skating speed, shot velocity, and goalie save probability, meaning the model cannot distinguish a high-danger shot from a low-danger one within the same strength state. Spatial inputs such as zone starts or turnovers are explicitly reserved for future work [PAGE 3], so the current win-probability engine is context-blind at the shift level.

Three veto conditions that invalidate or severely qualify the model:
1. Empty net / goalie pulled. When a team removes its goalie for an extra attacker, the strength state is no longer one of the six vectors in λ [PAGE 2]. The model’s Poisson hazard and win-probability baseline are undefined for 6-on-5, 6-on-4, etc. The paper sidesteps this by excluding empty-net goals from the Figure 6 AGV comparison [PAGE 6], but any evaluation that includes late-game empty-net scoring is vetoed unless a separate 6-on-X hazard is estimated.
2. Major penalties and coincidentals. The simplification assumes at most one goal during a penalty interval; this is sound for minors because a powerplay goal ends the penalty, but during a 5-minute major multiple powerplay goals are possible [PAGE 2 footnote 2]. If penalty time remaining τ is mis-estimated due to line brawls or coincidental penalties [PAGE 2], the recursion’s state transition is wrong and win probabilities are biased.
3. Cross-team tied-score baseline. Footnote 4 states that using a fixed tied-score probability makes cross-team AGV comparison “virtually impossible” because it ignores pre-game win probabilities [PAGE 2]. Therefore AGV cannot be used to compare players on teams of unequal strength without an external adjustment; doing so is a veto condition for roster-evaluation claims across teams.

Weather is not a material veto in NHL because games are indoors, but biomechanical and tactical states (goalie pull, major penalty, mismatched team quality) are hard vetoes that the current formalism does not resolve.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with testable predictions:

Scenario 1 — Empty-net goal inclusion.
Counterfactual: Recalculate AGV including empty-net goals scored while trailing by one with the goalie pulled, using the same 5-on-5 λ vectors.
Veto rationale: The model lacks a 6-on-5 goal-scoring rate and a corresponding win-probability baseline for an attacked empty net [PAGE 2–3; Figure 6 exclusion on PAGE 6].
Prediction: Players on teams that frequently trail late will show artificially inflated AGV because empty-net goals occur in states where win probability is already near zero, so Δp is mechanically large relative to the misspecified baseline. The model will overstate the value of empty-net specialists and understate the value of players who score in tied or leading states.

Scenario 2 — Five-minute major with multiple powerplay goals.
Counterfactual: Apply the published win-probability recursion to a 5-on-3 major penalty lasting four minutes during which two powerplay goals are scored.
Veto rationale: The paper restricts the model to at most one goal per penalty interval, explicitly noting this simplification is justified for minors but not necessarily for majors [PAGE 2 footnote 2]; Table 1’s two-minute PPG probabilities (e.g., 33.54% for 5-on-3) do not scale linearly to five minutes under P(N=1) [PAGE 3].
Prediction: The recursion will underestimate win-probability volatility during extended man-advantage states because it ignores the possibility of an intermediate goal that changes s_t before the penalty expires. Empirical series-win and in-game probabilities will be miscalibrated specifically in the tail of the penalty-duration distribution.

Scenario 3 — Cross-team AGV comparison with mismatched pre-game strength.
Counterfactual: Compare AGV of a player on a heavy favorite versus a player on a heavy underdog, both scoring the tying goal with five minutes left in regulation while the score is tied.
Veto rationale: The current tied-score baseline assigns approximately even win probability to both teams regardless of pre-game quality, which the author acknowledges prevents cross-team AGV comparability [PAGE 2 footnote 4].
Prediction: The model will assign nearly identical Δp to both goals, but the true marginal win-probability change is higher for the underdog (who was unlikely to be tied late) and lower for the favorite (who was expected to lead). Ranking players by raw AGV across teams will therefore systematically favor players on weaker teams in close games and is vetoed for cross-team roster decisions unless a pre-game strength covariate is added.
</RLVR_COUNTERFACTUAL_VETOES>