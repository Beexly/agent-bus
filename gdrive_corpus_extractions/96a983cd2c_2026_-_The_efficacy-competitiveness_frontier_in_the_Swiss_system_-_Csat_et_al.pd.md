---
source: "2026 - The efficacy-competitiveness frontier in the Swiss system - Csat et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 14
model: deepseek/deepseek-v4.1-flash-1017
words: 8177
---

<NATIVE_REASONING>
We need answer to user. Need produce exact XML sections? They demand GSE+GSI frontier reasoning foundry. Need analyze source. But topic is sports tournament design preprints. Zero betting lines. Need >=1000 words depth across exact XML sections. Need cite page markers and verbatim quotes. Need formal LaTeX, units, assumptions, singularity/breakdown regimes. Need THINK_TRACE >=400 words. Need source operators and equations formal LaTeX units page citations breakdown. Retro causal genealogy etc. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 scenarios predictions.

We need likely no betting. Need craft robust. Need perhaps mention source limitations: simulation, synthetic setups, chess team tournaments, Swiss system, efficacy vs competitiveness. Need focus on source. Need not invent fake ratios. Need formulate equations from paper: objective pairing is weird: in paper says "max sum (s_u - s_v)^2 x_uv" but text says minimizing sum squared score differences. Wait page 5-6 states "implemented by minimising sum of squared score differences" but displayed max ∑(su-sv)^2 x_uv. That's inconsistent: maximizing squared score differences would pair disparate scores, not similar. Need audit gray-zone. Important. We should cite this contradiction [PAGE 5] and [PAGE 6]. Need state likely typo sign; pair similar scores requires min not max. This is key gray-zone. They ask source operators and equations. Need include exact quote. Formal LaTeX. Need page cites exact [PAGE 5 of 14], [PAGE 6 of 14]. Need quote. Need mention not betting.

Need identify operators:
- Efficacy measures: average rank of winner, SRD, P(strongest wins), P(strongest top3).
- Competitiveness: P(non-stakeless last round) = Pr(advantage of leader after penultimate round <= max points in one round). Need formalize. Let S_i^{(r)} cumulative score after r rounds. Leader after R-1 rounds: S_max^{R-1} = max_i S_i^{R-1}. Max attainable one-round score M. Last round stakeless if S_max - S_second? Wait paper says "advantage of team with highest score after penultimate round does not exceed maximum number of points to be scored in one round." Hmm if advantage does not exceed max points, then not stakeless. In standard: if leader's lead > max points available, winner decided. They define competitiveness as probability of non-stakeless last round: advantage <= max points. Need define D = S_(1) - S_(2) at R-1. Non-stakeless if D ≤ M. If D > M, stakeless. Need maybe ties. For R=3/4 never stakeless. Higher rounds decline.

- Scoring systems: board points: win=1, draw=0.5, loss=0 per board, sum 4 boards max M=4. Match points: team win≥2.5 board pts = 2 match pts; draw=1; loss=0. M=2. 3-1-0 match: win=3 draw=1 loss=0 M=3. Hybrid board+match M=6 or 7. Need include Sonneborn-Berger tie-break.

- Milvang model: win/draw/loss probabilities piecewise quadratic based on rating difference and average rating, white advantage. We can formalize generic p_W(Δr, \bar r, color), p_D, p_L sum to 1. Need no fake ratios. Units: Elo points, probabilities dimensionless [0,1], rounds count, points. SRD in L1 normalized [0,1]. Average rank dimensionless. Simulation 40k runs convergence. Need mention 3-12 Setup A, 3-9 Setup B. Laptop etc maybe irrelevant.

- Setup A: 32 teams 4 players, best 2750, within team decrease 40, across team decrease 10. Setup B 16 teams, 4 players, first team all 2750, others 2650, across team: 100 from 1st to 2nd none after. Strong team win match 71.5%, draw 18.4%, lose 10.1% [PAGE 5].

- Findings: board points determines frontier; match points worse; 3-1-0 worse; hybrid better than match only but gap. 2008 reform questionable. Board points chance stakeless below 3% with 32 teams and 12 rounds; match points exceeds 6% even with seven rounds [PAGE 9]. Need exact quotes. "The efficacy-competitiveness frontier is fully determined by the rule based on board points, when the chance of a stakeless last round remains below 3% with 32 teams and 12 rounds." [PAGE 9]. "However, if the ranking is based on match points, the probability of a stakeless last round exceeds 6% even with seven rounds." [PAGE 9]. "Combining the two improves performance compared to using only match points... substantial gap from Pareto frontier." [PAGE 11].

Need discuss "singularity/breakdown regimes": In this context, breakdown regimes of assumptions: when rounds too few (R<=4 no stakeless by construction), when R too high efficacy improves but competitiveness drops; when scoring rule changes M and D threshold; when identical weak teams in Setup B, average rank/SRD undefined/irrelevant; when synthetic linear Elo misses real variance and reserves; when pairing ILP sign typo; when tie-breaking omitted? Need formal breakdown. Need mention "efficacy-competitiveness frontier fully determined by board points" not universal; only simulation regimes. Need exact source page markers.

Retrocausal genealogy: historical lineage: Swiss system 1895 Julius Müller, Chess Olympiad board points until 2006 then match points since 2008, 3-1-0 in Bilbao/London, Global Chess League, 2015 Australian Open Ni Hua, 2018 Mkrtchian/Krush. Need multi-week traps: The source says simulations 3-4 days, 40k runs. But "multi-week traps" maybe user wants historical/scientific lineage & multi-week traps. Could discuss multi-week tournament design traps: 2008 reform long-term unintended incentive to draw; match points margin irrelevance; team chess draw-seeking; hybrid scoring can preserve incentives but gap. Need be careful "multi-week" no source? We can frame as multi-round/season tournament design traps, not fabricate. We can mention "multi-week" as multi-round tournament design traps. Need not betting.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need interpret: in team chess, players/captains reason about teammates' incentives and opponents' incentives. Crisis habit regression: under match points, draw-seeking becomes rational habit when team result secured; counter-trap: awarding 3-1-0 to encourage wins may increase variance and reduce competitiveness? Need explain. Clock: number of rounds is decision variable; more rounds improve efficacy but reduce suspense; horizon. Need map to source. "The two most obvious case is if three boards have already produced decisive results, and a draw on the remaining board is sufficient either to secure a victory for the team or to guarantee a drawn match." [PAGE 2]. Armenian Mkrtchian instructed to seek draw despite winning chances [PAGE 2]. This is recursive ToM: captain models team score, opponent, board states. Need discuss counter-trap: 3-1-0 may make match victory more valuable but can worsen stakeless last round because leader accumulates larger lead? Need derive threshold M. More M means D threshold larger? Wait non-stakeless if D ≤ M. 3-1-0 has M=3 vs match points M=2; larger M makes condition easier to satisfy for same D? But results show 3-1-0 worse. Because scores coarser? Actually with M=3, possible scores larger and D may grow? Need be precise. Board points M=4 gives largest M, yet best frontier. So M alone not determinant. Must avoid simplistic. We can state the threshold is M but distribution of D changes under scoring; larger M not monotone guarantee. Need audit.

Cross-layer veto adjudication: Physical/biomechanical/weather veto proof. Need adapt to chess/team tournament: physical: fatigue over many rounds, concentration, schedule length; biomechanical: board ergonomics? weather: travel/heat? Source doesn't address these. Need say these are not modeled; therefore any claim that board-point ranking is universally optimal can be vetoed by unmodeled physical fatigue, travel, weather, player availability, reserve substitution. Need provide proof-style: source model lacks terms for fatigue, injury, weather, travel; therefore cross-layer veto: if physical layer changes p_W,p_D,p_L or scoring incentives, the Pareto frontier could shift. Need cite [PAGE 5] says most teams enter with five players, reserve allowed; source models four fixed players. [PAGE 5]. This is physical/roster veto. Also simulation laptop 3-4 days [PAGE 7] not physical tournament. Need mention no weather. Need "veto proof" maybe formal: unmodeled variables imply simulation conditional; cannot infer causality outside. Need be clear not betting.

RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need create scenarios that could falsify source conclusions. Must be verifiable. Not betting lines. Need maybe:
1. Change pairing algorithm to maximum-weight matching or stable roommates while holding scoring rules; if board-point frontier not preserved, source's ranking-rule conclusion is vetoed. Prediction: board points still dominates match points if D distribution threshold preserved? Need specific measurable.
2. Increase teams to 40 (real European Team Championship) and allow 5-player rosters with reserve; if match points no longer >6% stakeless at 7 rounds or board points >3% at 12, source extrapolation vetoed. Prediction: qualitative ordering persists but magnitudes shift.
3. Empirical Chess Olympiad data pre/post 2008 with same rounds; if match-point era has lower or equal stakeless-last-round probability controlling for field size and rounds, source's 2008 reform critique vetoed. Prediction: match-point era higher stakeless probability especially when leader lead >2.
4. 3-1-0 hybrid: if hybrid closes gap to board points under alternative tie-break or pairing, then source's "substantial gap" vetoed. Prediction: hybrid remains between match and board.
Need exactly 3 verifiable RLVR veto scenarios. Can include measurements. Need not mention betting.

Need meet >=1000 words. Likely 2500-3500. Need exact XML sections only? User requests with exact XML sections. We should output only XML tags. No markdown outside. Need include all sections. Need ensure THINK_TRACE >=400 words. Could be ~700. Other sections enough total >1000. Need cite exact [PAGE N of 14] and verbatim quotes. Use quotes. Need formal LaTeX. Need mention units.

Need be careful with "SOURCE_TEXT" is provided; cite exact page markers. We can cite [PAGE 5 of 14] etc. Use verbatim quotes. Need not overdo. Need no betting.

Need consider "GSE + GSI Frontier Reasoning Foundry" maybe they expect analysis of source and "DRIVE SOURCE". We must produce rigorous. We can say no betting lines. Need avoid odds/moneylines. Do not mention "betting markets" even source has Feddersen et al. They forbid betting lines; mentioning betting markets maybe okay? But zero betting lines. Better avoid betting market references. We can mention source cites empirical effort incentives? But avoid betting. No spreads/totals/odds. "odds" not use. We can say "no lines are used." Is that mentioning? Fine.

Need formal equations. Let's design.

Definitions:
Let N teams, n players per team (n=4). R rounds. Let b_{i,k,r} ∈ {0, 1/2, 1} board points for team i board k round r. Board score B_i^{(R)} = ∑_{r=1}^R ∑_{k=1}^4 b_{i,k,r}. Match outcome m_{i,r}:
- 2-1-0: m=2 if ∑_k b_{i,k,r} ≥ 2.5? Actually if win at least 2.5 board points; m=1 if =2; m=0 if ≤1.5. Since board points can be 2.5? yes 4 boards half points. For match points, team win if at least 2.5, draw if 2-2, loss if at most 1.5.
- 3-1-0: m=3 for win, 1 draw, 0 loss.
- Hybrid: H_i = B_i + M_i (or B_i + 3-1-0 M_i). Max per round 6 or 7. Need use "match points" maybe M. Need define "score" s_i = chosen scoring rule; for board s=B, for match s=M, for hybrid s=B+M. In pairing, current score s_u.

Competitiveness:
Let s_i^{(R-1)} scores after R-1 rounds. Sort s_(1) ≥ s_(2) ≥ ... . Define Δ_{R-1} = s_(1)^{(R-1)} - s_(2)^{(R-1)}. Let M_R be max one-round score under rule. Last round non-stakeless if Δ_{R-1} ≤ M_R. Then C = P(Δ_{R-1} ≤ M_R). Wait if leader tie? If Δ=0, non-stakeless yes. If Δ > M, leader guaranteed? Actually if leader's lead > max points, yes. If Δ <= M, not guaranteed stakeless; but could still be decided? They call non-stakeless. Use exact. Higher C better. With board M=4, match M=2, 3-1-0 M=3, hybrid M=6/7. But note hybrid max 6/7; condition easier? Need not overinterpret. Maybe hybrid gap due to distribution.

Efficacy:
Average rank of winner: \bar{rank}_W = E[rank(final winner)] maybe inverted. SRD: For true ranking T and final F, SRD = (1/Z) ∑ |T_i - F_i| normalized? Need formal. The paper says L1 norm, ranges 0 to1, 0 perfect, 1 reverse. We can define SRD = (1/(2 * something))? Need avoid wrong formula. We can state generic: SRD(T,F) = normalized L1 distance, in [0,1], with 0=perfect, 1=reverse; normalization chosen so reverse ranking =1. We don't need exact constant because paper doesn't give. But "formal LaTeX equations" maybe include. Use \mathrm{SRD}(T,F)=\frac{1}{Z_N}\sum_i |T_i-F_i|, Z_N such that reverse =1. Units dimensionless. Cite [PAGE 6]. That's formal enough. The mean random distance ~0.66 [PAGE 6]. Good.

Strongest team probabilities: P(winner = strongest), P(strongest ∈ top3). If Setup B identical weak teams, average rank/SRD only Setup A.

Pairing ILP: Need include exactly as source but note contradiction. Let's write:
Source displays:
\[
\max \sum_{(u,v)\in F} (s_u-s_v)^2 x_{uv}
\quad \text{s.t.} \sum_{(u,v)\in F} x_{uv}=1 \ \forall u\in V,\ x_{uv}\in\{0,1\}.
\]
But prose says "minimising the sum of squared score differences within pairs" [PAGE 5]. This is a sign/objective inconsistency. The feasible pairing for similar scores requires \min, not \max. We need cite exact quote: "This pairing rule is implemented by minimising the sum of squared score differences within pairs." [PAGE 5]. And displayed max [PAGE 6]. Breakdown: if max used literally, it would pair highest with lowest score subject to no rematch, opposite to prose and Swiss logic; any reproduction must resolve sign. This is gray-zone audit. Good.

Milvang model: generic:
\[
p_W = f_W(\Delta r, \bar r, c),\quad p_D=f_D(\Delta r,\bar r,c),\quad p_L=1-p_W-p_D,
\]
with \Delta r = r_i - r_j in Elo points, \bar r=(r_i+r_j)/2, c color. f piecewise quadratic. Draw probability increases with mean strength. Setup B values. Need cite [PAGE 6] "piecewise quadratic functions based on both the rating difference and the average rating" and "probability of a draw increases with the mean strength".

Singularity/breakdown:
- R ≤ 4: source says "last round never becomes stakeless if number of rounds is three or four" [PAGE 9]. Why? Max points? With R=3, after 2 rounds max lead ≤? If first two rounds, leader could have 8 board points, second 4? D=4 = M, non-stakeless. R=4 after 3 rounds D max 8? Wait M=4, D could be 8 if leader 12, second 4? But maybe Swiss pairing prevents? Source empirical simulation. Don't derive. Just cite.
- R→12: board points chance stakeless below 3%; match >6% at seven. Cite.
- Setup B identical weak teams: SRD and avg rank undefined/only Setup A. Cite [PAGE 6].
- Synthetic linear Elo and four-player rosters vs five with reserve; no tie-break except Sonneborn-Berger; no seeding; no weather/fatigue. Cite pages 4-7.
- Pairing ILP sign.

Retrocausal genealogy:
Need historical/scientific lineage. We can structure:
- 1895 Swiss system by Julius Müller at 5. Schweizerische Schachturnier [PAGE 3].
- Chess Olympiad board points until 2006; match points since 2008 [PAGE 7].
- 3-1-0 in Bilbao/London [PAGE 7]; Global Chess League [PAGE 3].
- 2015 Australian Open Ni Hua lead 9.5 vs 7.5 after 10; 11th uninteresting [PAGE 2].
- 2018 Mkrtchian instructed draw vs Krush [PAGE 2].
- Literature: Sziklai et al. 2022 Swiss best trade-off among formats [PAGE 2]; Devriesere et al. 2025 efficacy/attractiveness [PAGE 2]; Chater, Csató, Gyimesi etc. [PAGE 4].
- Multi-week traps: The 2008 reform as long-horizon institutional lock-in; margin irrelevance; draw-seeking; extra point for win may not solve; hybrid. "multi-week" can refer to multi-round. Need not invent actual multi-week. Use "multi-round and multi-event traps over seasons". Cite.

Recursive theory of mind:
Need discuss crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: In match-point system, when team has secured match result, individual player's incentive to press for win collapses; draw becomes rational. This is a "habit regression" because repeated team-competition norms train draw-seeking, as Mkrtchian example. It can further increase draws [PAGE 2-3].
- Counter-trap: 3-1-0 tries to make win more valuable; but source finds "awarding three points for winning a match remains suboptimal" [PAGE 9] and "situation is even worse with 3-1-0" [PAGE 9]. The counter-trap is that rewarding wins changes scoring distribution and leader separation; it may fail to restore competitiveness. Also if players anticipate captain/team incentives, they may still draw.
- Clock: number of rounds R is the clock. More R improves efficacy but reduces P(non-stakeless). "efficacy improves when more rounds are played ... parallel with a decline in competitiveness" [PAGE 7]. The "last round never becomes stakeless if R=3 or 4" [PAGE 9]. Need cite. So clock is not neutral. Recursive ToM includes decision-maker anticipating viewer/participant reactions; organizer chooses R and scoring.

Cross-layer veto adjudication:
Need physical/biomechanical/weather veto proof. Source is chess, not physical? Chess has physical/mental fatigue. We can say:
- The model's probability kernel p_W,p_D,p_L has no explicit variables for fatigue, sleep, travel, heat, illness, injury, board ergonomics, or reserve availability. Therefore the simulation identifies a conditional frontier under ceteris paribus. It cannot veto a real-world regime where physical layer changes probabilities or scoring incentives.
- Physical/roster: source uses four players per team, but real teams often have five with reserve [PAGE 5]. Reserve substitution can alter board-point totals and match outcomes, especially in long tournaments. If fatigue accumulates, board points may become noisier; the efficacy advantage of board points could shrink. Veto proof: any unmodeled term \eta_{i,r} added to board score or p_W shifts D distribution; if \eta correlated with team strength or round, the frontier changes. Need formal: p_W = f(...) + \eta_{i,r}(\text{fatigue, weather})? But probabilities must remain [0,1]. Better: latent performance r_{i,k,r}=r_{i,k}+\epsilon_{i,k,r}+\eta_{i,k,r}; \eta unmodeled. This changes outcomes. We can state if \eta variance grows with R, then more rounds may increase noise, not efficacy. That's a veto. Source says more rounds improve efficacy [PAGE 7], but physical fatigue could break this. This is cross-layer veto.
- Biomechanical: chess not biomechanical in same sense; but ergonomics, time controls, board setup, screen vs board. Not modeled. Weather: travel/heat. Not modeled. No empirical weather data. Therefore cannot claim universal.
- Need "proof": The source's causal claim is conditional on p_W,p_D,p_L from Milvang and linear Elo. Since those functions omit \eta, the simulation cannot identify effect of weather. If \eta has nonzero effect, the observed mapping from R/scoring to C is biased. So cross-layer veto is valid as generalization boundary, not as contradiction of paper. Good.

RLVR counterfactual vetoes:
Need 3 scenarios with predictions. "RLVR" maybe Reinforcement Learning from Verifiable Rewards? They want verifiable veto scenarios. Use scenarios with measurable outcomes, predictions. Need no betting. We'll present as:
1. Pairing-rule swap veto. Scenario: Re-run Setup A with same Milvang kernel and 40k runs but replace ILP with stable-roommates or maximum-weight matching; measure P(non-stakeless) at R=7,12 and P(strongest wins). Veto condition: if board-point rule no longer Pareto-dominates match-point rule or 3-1-0 under same R, source's scoring conclusion is vetoed. Prediction: qualitative ordering persists, but absolute P(non-stakeless) shifts by several percentage points; hybrid gap may narrow.
2. Real-roster/field-size veto. Scenario: 40-team, five-player rosters with reserve, empirical Elo distribution from 2025 European Team Championship; simulate 40k runs, R=7-11. Veto if match points at R=7 does not exceed 6% stakeless or board points at R=12 exceeds 3%. Prediction: board points remains lower stakeless; match points worse; magnitudes differ. Need cite source says 32 teams not 40. Good.
3. Empirical Olympiad pre/post 2008 veto. Scenario: Use historical Chess Olympiad results, control for number of rounds, field size, team strength; compute indicator D>M at R-1. Veto if post-2008 match-point era has lower or equal stakeless probability than pre-2008 board-point era. Prediction: post-2008 higher stakeless probability, especially when D>2; but confounders. This is verifiable with public data. Need maybe "public chess-results archives" no betting.
Could include 3-1-0 hybrid as fourth? Need exactly 3. We can include hybrid in first or third? They asked 3 scenarios. Good.

Need maybe mention "No betting lines". Since invariant 1, perhaps not mention at all. But maybe final can say "No betting lines are used." That is safe. But avoid words spreads/totals/moneylines/odds. I can say "This analysis uses no wagering constructs." But betting lines mention? It says never mention spreads, totals, moneylines, or odds. "betting lines" not forbidden? But safer no.

Need ensure XML sections exact. Could include opening and closing tags. Need no extra text outside. Within sections can use paragraphs and LaTeX. Need escape &? XML text can include & if escaped. Use "and" instead of ampersand. Avoid raw &. Use ≤ maybe okay. If XML parser, < and > in LaTeX can be problematic. Use \le, \ge, \sum. Avoid literal < or > in text? XML tags need not parse? To be safe, use LaTeX with \le, \ge, no literal less-than. But equations include \{0,1\}; okay. Avoid raw & in text. Use "PAGE 5 of 14" brackets. Use \text{...}. Use \[ \] okay. Need not escape.

Need maybe include "verbatim quotes" with quotation marks. Good.

Let's draft.

Need word counts. THINK_TRACE >400. Let's make ~900. Other sections ~300-500 each. Total >2500.

Need be accurate. Let's outline THINK_TRACE:
- First identify source as simulation study of Swiss chess team tournaments. Central tradeoff efficacy vs competitiveness. Need distinguish constructs.
- Multi-hop: scoring rule -> one-round max M -> distribution of leader's lead D -> stakeless probability C; scoring rule also changes pairings because pairing uses current scores -> path dependence; scoring rule changes incentives -> draw probability -> efficacy. Thus not a simple M threshold.
- Audit gray zones: ILP max/min contradiction. Synthetic Elo and 4-player rosters. Setup B identical weak teams. Tie-break only Sonneborn-Berger. No seeding. No fatigue/weather. Simulation 40k. Results: board points frontier; match points and 3-1-0 worse; hybrid better but gap. 2008 reform critique conditional.
- Exactly cite quotes. Need THINK_TRACE includes derivation and gray-zone audit. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Formal equations and units. Include equations and citations. Need quote.

Let's write carefully.

Potential issue: "The efficacy-competitiveness frontier is fully determined by the rule based on board points" quote says "when chance ... below 3% with 32 teams and 12 rounds". Need exact: "The efficacy-competitiveness frontier is fully determined by the rule based on board points, when the chance of a stakeless last round remains below 3% with 32 teams and 12 rounds." [PAGE 9]. Good.

"if the ranking is based on match points, the probability of a stakeless last round exceeds 6% even with seven rounds." [PAGE 9]. Good.

"awarding three points for winning a match remains suboptimal" [PAGE 9]. Good.

"Combining the two improves performance compared to using only match points ... however, there remains a substantial gap from the Pareto frontier." [PAGE 11]. Good.

Need mention "3-1-0 system, which is common in association football, is used in some prestigious individual chess competitions, such as the Bilbao Chess Masters Final and the London Chess Classic" [PAGE 7]. Good.

Need mention "The maximum number of board points for a team in one round is four." [PAGE 7]. "maximum number of match points ... two" [PAGE 7]. "maximum number of points ... three" [PAGE 7]. "maximum ... six and seven" [PAGE 7]. Good.

Need formal "match win if at least 2.5 board points; draw 2-2; loss at most 1.5" [PAGE 7]. Good.

Need "Sonneborn–Berger method without lowest result" [PAGE 7]. Good.

Need "40 thousand simulation runs" [PAGE 7]. "3–4 days" [PAGE 7]. Good.

Need "Setup A/B" [PAGE 4]. "32 teams, 16 teams, 4 players" [PAGE 4]. "2750, within team Elo decrease 40, across team 10; Setup B 2750 vs 2650, 100 from 1st to 2nd none after" [PAGE 4]. "71.5%, 18.4%, 10.1%" [PAGE 5]. Good.

Need "most teams enter with five players, reserve allowed" [PAGE 5]. Good.

Need "2015 Australian Open Ni Hua 9.5 in first 10, runners-up 7.5" [PAGE 2]. Good.
Need "2018 Mkrtchian instructed by captain to seek draw against Krush despite winning chances" [PAGE 2]. Good.
Need "Swiss teacher Dr. Julius Müller, 1895 5. Schweizerische Schachturnier" [PAGE 3]. Good.
Need "Chess Olympiad board points until 2006; match points since 2008" [PAGE 7]. Good.
Need "Global Chess League award three points for winning a match" [PAGE 3]. Good.

Need "SRD mean random ~0.66" [PAGE 6]. Good.

Need "average rank of winner and SRD only Setup A because 15 weak teams identical in Setup B" [PAGE 6]. Good.

Need "efficacy improves when more rounds are played ... parallel with a decline in competitiveness" [PAGE 7]. Good.

Need "last round never becomes stakeless if number of rounds is three or four" [PAGE 9]. Good.

Need "Setup B reveals selecting strong team as winner increasingly challenging: 4 percentage points from 67% to 71%, chance uninteresting last round grows from 3.3% to more than 5.6%." [PAGE 10]. Could include. Good.

Need cross-layer veto: cite "most teams enter tournament with five players... reserve player allowed" [PAGE 5]. Good.

Need "weather" no source. Say absent. Good.

Need "biomechanical" maybe odd. We can frame "biomechanical/ergonomic" board conditions. No source. Fine.

Need "singularity/breakdown regimes" exact. Use terms "breakdown" in source operators. Good.

Let's write final. Need ensure no raw "&" in XML. I will avoid ampersand. Use "and". Avoid "<" in text? In LaTeX \le. For "R \le 4" okay no raw <. Use \in \{0,1\}. Good. For "PAGE 5 of 14" brackets okay.

Need maybe include "dimensionless" units. Elo points. Probability dimensionless. Scores points. Rounds count. SRD dimensionless. Average rank dimensionless. Good.

Need "exact singularity/breakdown regimes": Maybe use bullet list in SOURCE. Include:
- Pairing ILP sign breakdown.
- R \le 4 no stakeless per source.
- Setup B identical weak: SRD/avg rank not defined.
- Match point 3-1-0 worse; hybrid gap.
- Unmodeled physical layer.
Good.

Need "retrocausal genealogy" maybe use "retrocausal" as path from current 2008 reform back to 1895 and forward to 2026 preprint. Need mention arXiv 2610.01997v1 1 Oct 2026 [PAGE 1]. Good.

Need "recursive theory of mind" maybe include "crisis habit regression" explicitly. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" exactly. Use 3 numbered scenarios. Predictions. Good.

Need final only XML. Let's produce. Ensure word count. Let's estimate THINK_TRACE ~800 words. Total maybe 3000. Good.

Need not use markdown? XML sections with paragraphs okay. Use LaTeX. Fine.

Let's craft polished.

Potential issue: In THINK_TRACE, "Maximizing squared score differences" if source display max. Need say "the displayed objective is max while prose says minimising; the displayed max cannot implement the stated Swiss pairing." Good.

Need maybe "The source's own result is insensitive to efficacy measure" cite [PAGE 9] "Our findings are insensitive to the choice of the efficacy measure". Good.

Need "score difference D" formal. Good.

Let's write final now.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a Monte Carlo tournament-design study, not an empirical causal identification paper. Its central object is the Pareto trade-off between efficacy, meaning the ability of the Swiss-system final ranking to recover a latent strength ordering, and competitiveness, meaning the probability that the last round is not stakeless. The multi-hop chain is: scoring rule changes the per-round maximum score and the distribution of cumulative scores; cumulative scores determine pairings because the integer linear program uses current scores; pairings determine opponent strength and colour allocation; opponent strength and colour feed the Milvang win-draw-loss kernel; those results determine both final ranking accuracy and the leader’s lead after the penultimate round. Thus the scoring rule is not merely a ranking convention. It is an incentive and pairing operator.

The paper reports four efficacy measures: average rank of the winner, normalized Sum of Ranking Differences, probability that the strongest team wins, and probability that the strongest team finishes in the top three [PAGE 6 of 14]. Competitiveness is the probability of a non-stakeless last round: the leader’s advantage after the penultimate round does not exceed the maximum number of points obtainable in one round [PAGE 7 of 14]. This gives a hard threshold. If the lead exceeds the one-round maximum, the final winner is already determined and the last round is stakeless. The source then compares board-point scoring, 2-1-0 match-point scoring, 3-1-0 match-point scoring, and hybrid board-plus-match scoring [PAGE 7 of 14]. The main result is that the board-point rule determines the efficacy-competitiveness frontier in the simulated regimes; match points and 3-1-0 move away from that frontier; hybrid scoring improves on match points alone but leaves a gap [PAGE 9 of 14; PAGE 11 of 14].

The gray-zone audit has several layers. First, the pairing integer program contains a sign inconsistency. The prose says: “This pairing rule is implemented by minimising the sum of squared score differences within pairs” [PAGE 5 of 14]. The displayed objective on the next page is \(\max \sum_{(u,v)\in F}(s_u-s_v)^2 x_{uv}\) [PAGE 6 of 14]. A literal maximization pairs dissimilar scores, which contradicts the stated Swiss logic and the prose. Any reproduction must resolve this as a typographical sign error or as an undocumented solver convention. Second, the Elo inputs are synthetic linear patterns. Setup A uses 32 teams, four players, best player 2750, within-team decrease 40, across-team decrease 10; Setup B uses 16 teams, first team all 2750, other teams 2650, with a 100-point drop from first to second and none afterward [PAGE 4 of 14]. The source itself notes that real teams often bring five players and may use a reserve [PAGE 5 of 14]. Third, Setup B has 15 identical weak teams, so average winner rank and SRD are only used in Setup A [PAGE 6 of 14]. Fourth, tie-breaking is only Sonneborn-Berger without the lowest result [PAGE 7 of 14], and seeding is ignored [PAGE 6 of 14]. Fifth, the simulation uses 40 thousand runs, taking 3–4 days [PAGE 7 of 14], so the results are computationally stable but still model-conditional. The source’s own robustness claim is that findings are insensitive to efficacy measure and setup [PAGE 9 of 14], but that is robustness inside the model, not external validity.

The critical quote for the frontier is: “The efficacy-competitiveness frontier is fully determined by the rule based on board points, when the chance of a stakeless last round remains below 3% with 32 teams and 12 rounds” [PAGE 9 of 14]. Immediately after: “However, if the ranking is based on match points, the probability of a stakeless last round exceeds 6% even with seven rounds” [PAGE 9 of 14]. This is the strongest quantitative contrast. The source also states that “awarding three points for winning a match remains suboptimal” [PAGE 9 of 14]. The historical critique is therefore conditional: the 2008 Chess Olympiad reform from board points to match points is “questionable” because it weakens the efficacy-competitiveness trade-off [PAGE 11 of 14]. It does not prove that every real tournament using match points is badly designed; it proves that under the modeled Swiss pairing, Milvang outcome kernel, and synthetic Elo distributions, board points dominate match points on this frontier.

The breakdown regimes matter. If the number of rounds is three or four, the source says “the last round never becomes stakeless” [PAGE 9 of 14]. That is a boundary regime where the competitiveness metric is saturated. At the other end, more rounds improve efficacy but reduce competitiveness: “efficacy improves when more rounds are played ... but this is parallel with a decline in competitiveness” [PAGE 7 of 14]. In Setup B, a four-percentage-point efficacy gain from 67% to 71% is associated with the chance of an uninteresting last round rising from 3.3% to more than 5.6% [PAGE 10 of 14]. A universal claim would fail if the pairing algorithm, field size, roster size, reserve policy, fatigue, or scoring incentives shift the distribution of the penultimate lead. The source does not model physical fatigue, travel, weather, illness, ergonomics, or reserve substitution; those are cross-layer veto candidates, not refutations of the simulation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(N\) be the number of teams, \(n=4\) the number of boards per team, and \(R\) the number of rounds. Units: Elo ratings and rating differences are in Elo points; scores are tournament points; \(R\) is a round count; probabilities and SRD are dimensionless in \([0,1]\). For team \(i\), board \(k\), round \(r\), let \(b_{i,k,r}\in\{0,\tfrac12,1\}\) be board points. Board score is
\[
B_i^{(R)}=\sum_{r=1}^{R}\sum_{k=1}^{4} b_{i,k,r}.
\]
The source states: “one point for a win, half points for a draw, zero points for a loss, summed over the four boards” and “The maximum number of board points for a team in one round is four” [PAGE 7 of 14].

For match scoring, let \(m_{i,r}\) be the team match points in round \(r\). Under 2-1-0,
\[
m_{i,r}=
\begin{cases}
2, & \sum_{k=1}^{4}b_{i,k,r}\ge 2.5,\\
1, & \sum_{k=1}^{4}b_{i,k,r}=2,\\
0, & \sum_{k=1}^{4}b_{i,k,r}\le 1.5.
\end{cases}
\]
Under 3-1-0, replace \(2\) by \(3\) for a match win and keep draw \(=1\), loss \(=0\). The source states the 2-1-0 rule and “The maximum number of match points for a team in one round is two,” then the 3-1-0 rule with “maximum number of points for a team in one round is three” [PAGE 7 of 14]. Hybrid scoring uses \(s_i=B_i+M_i\), with one-round maxima six and seven respectively [PAGE 7 of 14].

Let \(s_i^{(R-1)}\) be the chosen cumulative score after \(R-1\) rounds, ordered \(s_{(1)}^{(R-1)}\ge s_{(2)}^{(R-1)}\ge\cdots\). Define the penultimate lead
\[
\Delta_{R-1}=s_{(1)}^{(R-1)}-s_{(2)}^{(R-1)}.
\]
Let \(M_R\) be the maximum one-round score under the scoring rule. The competitiveness metric is
\[
C_R=\Pr\!\left(\Delta_{R-1}\le M_R\right),
\]
the probability of a non-stakeless last round. The source defines it as “the advantage of the team with the highest score after the penultimate round does not exceed the maximum number of points to be scored in one round” [PAGE 7 of 14]. This is the exact threshold operator. A larger \(C_R\) is preferred.

The pairing operator in the source is displayed as
\[
\max \sum_{(u,v)\in F}(s_u-s_v)^2 x_{uv}
\quad\text{s.t.}\quad
\sum_{(u,v)\in F}x_{uv}=1\ \ \forall u\in V,\qquad
x_{uv}\in\{0,1\}\ \ \forall (u,v)\in F,
\]
where \(F\) is the set of feasible non-rematch pairs [PAGE 6 of 14]. However, the prose says: “This pairing rule is implemented by minimising the sum of squared score differences within pairs” [PAGE 5 of 14]. This is a formal breakdown regime: the displayed \(\max\) and the prose \(\min\) cannot both implement the stated rule of pairing similar scores. A reproduction must treat the sign as a typo or document the solver behavior; otherwise the pairing operator is not identified.

The outcome kernel is a Milvang model:
\[
p_W=f_W(\Delta r,\bar r,c),\qquad
p_D=f_D(\Delta r,\bar r,c),\qquad
p_L=1-p_W-p_D,
\]
where \(\Delta r=r_i-r_j\) is the Elo difference in Elo points, \(\bar r=(r_i+r_j)/2\) is the mean Elo, and \(c\) is colour allocation. The source states that the model “fits piecewise quadratic functions based on both the rating difference and the average rating of the two players” and that “the probability of a draw increases with the mean strength of the players” [PAGE 6 of 14]. Setup B gives the strong team “a 71.5% chance of winning the match against any other team, an 18.4% chance of playing a draw, and a 10.1% chance of losing” [PAGE 5 of 14].

Efficacy operators are:
\[
\mathrm{AvgRank}_W=\mathbb{E}\!\left[\operatorname{rank}_{F}(W)\right],
\]
\[
\mathrm{SRD}(T,F)=\frac{1}{Z_N}\sum_{i=1}^{N}|T_i-F_i|,
\]
with \(T\) the true ranking, \(F\) the final ranking, and \(Z_N\) normalizing so that reverse rankings give \(1\). The source says SRD “ranges from 0 to 1; 0 indicates perfect agreement between two rankings, while 1 corresponds to complete disagreement” and that the random-ranking mean is approximately 0.66 [PAGE 6 of 14]. The other efficacy operators are
\[
\Pr(W=\text{strongest}),\qquad
\Pr(\text{strongest}\in\text{top three}).
\]
The source states that average winner rank and SRD are only considered in Setup A because “the 15 weak teams are identical in Setup B” [PAGE 6 of 14].

Key breakdown regimes and exact claims:
- For \(R=3\) or \(R=4\), “the last round never becomes stakeless” [PAGE 9 of 14]. This is a saturated competitiveness boundary.
- At \(R=12\) with 32 teams and board points, the chance of a stakeless last round “remains below 3%” [PAGE 9 of 14].
- With match points, “the probability of a stakeless last round exceeds 6% even with seven rounds” [PAGE 9 of 14].
- “Combining the two improves performance compared to using only match points ... however, there remains a substantial gap from the Pareto frontier” [PAGE 11 of 14].
- The 2008 Chess Olympiad reform is called “a questionable step” because board points determine the frontier in the simulation [PAGE 11 of 14].
- The model does not include fatigue, travel, weather, injury, or reserve substitution. Real teams often have five players and a reserve [PAGE 5 of 14], so the four-player fixed-roster assumption is a scope boundary.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage runs from the Swiss system’s origin to the 2008 Chess Olympiad reform and then to the 2026 simulation critique. The source states that the Swiss system was “proposed by the Swiss teacher Dr. Julius Müller” and “was applied first in 1895 at the 5. Schweizerische Schachturnier” [PAGE 3 of 14]. It was designed to rank many players with few rounds and no elimination, with dynamic pairing against roughly equal running scores [PAGE 3 of 14]. That design choice is the ancestor of the modern efficacy-competitiveness problem: dynamic pairing improves ranking accuracy, but it also creates a path-dependent score distribution that can produce an early-decided winner.

The Chess Olympiad lineage is explicit. The number of board points was used “until 2006,” and match points have been used “since 2008” [PAGE 7 of 14]. The source says the reform made “the margin of victory irrelevant, except for tie-breaking rules” and introduced “an additional strategic consideration for the teams” [PAGE 2 of 14]. That strategic consideration is draw-seeking when a team result is already secured. The 2018 Mkrtchian-Krush example is the genealogical hinge: “during the 2018 Chess Olympiad, the Armenian player Lilit Mkrtchian was reportedly instructed by her captain to seek a draw against Irina Krush, despite having winning chances” [PAGE 2 of 14]. This is a retrocausal trace: the current match-point rule creates incentives that reshape individual board behavior, which then feeds back into the aggregate score distribution and the last-round competitiveness metric.

The 3-1-0 alternative has its own lineage. The source notes that the 3-1-0 system “is common in association football” and “is used in some prestigious individual chess competitions, such as the Bilbao Chess Masters Final and the London Chess Classic” [PAGE 7 of 14]. It also notes that the Global Chess League awards three points for a match win [PAGE 3 of 14]. The genealogical trap is that a rule imported to encourage wins may not repair the Swiss-system competitiveness problem. The source finds that 3-1-0 is “even worse” than 2-1-0 on the stakeless-last-round dimension [PAGE 9 of 14]. This is a multi-round, multi-event trap: a reform can be locally incentive-compatible for match victories while globally worsening the efficacy-competitiveness frontier.

Another historical warning is the 2015 Australian Open. The source reports that Ni Hua “scored 9.5 points in the first 10 rounds, but the runners-up had only 7.5 points when one point was awarded for a win, making the last, 11th round uninteresting to most viewers” [PAGE 2 of 14]. This is not a hypothetical. It shows the exact threshold mechanism: a lead larger than the one-round maximum makes the final round stakeless. The source’s simulation formalizes this intuition and shows that match points make the threshold easier to cross earlier because the one-round maximum is smaller and the score distribution is coarser [PAGE 7 of 14; PAGE 9 of 14]. The retrocausal lesson is that the 2008 reform did not merely change a ranking table; it changed the time at which the tournament’s suspense can collapse.

The scientific lineage also includes the comparative tournament-design literature. The source cites Sziklai et al. (2022) for the claim that the Swiss system provides “the best trade-off between efficacy and the number of matches among the most popular tournament formats” [PAGE 2 of 14]. It cites Devriesere et al. (2025) for efficacy and attractiveness as key design criteria [PAGE 2 of 14]. It cites Chater et al. (2021), Csató et al. (2024), and Csató and Gyimesi (2026a) on stakeless matches in round-robin and group formats [PAGE 4 of 14]. The present preprint is therefore a bridge between the Swiss-system pairing literature and the stakeless-match literature. Its novelty is not the discovery of draw-seeking or early winners; it is the explicit simulation frontier connecting scoring rules, round counts, pairing, and last-round suspense.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind problem is visible at three levels: player, captain, and organizer. At the player level, a board result is not only an individual game; it is a component of a team match. At the captain level, the captain models the team score, the remaining boards, and the opponent’s incentives. At the organizer level, the decision-maker models how teams will react to the scoring rule and how viewers will react to a decided last round. The source’s Mkrtchian example is a clean case: a player with winning chances is instructed to seek a draw because the team result is already secured or because a draw guarantees the match [PAGE 2 of 14]. That is not irrationality. It is recursive rationality under a team scoring rule that makes margin irrelevant.

Crisis habit regression occurs when this draw-seeking behavior becomes a stable habit. The source warns: “This mechanism may further increase the number of drawn games” [PAGE 3 of 14]. Once players and captains learn that a draw is sufficient, the team’s decision rule regresses toward risk minimization. In a crisis—late tournament, close team standings, or a must-not-lose match—the habitual response is to simplify the position and avoid risk. The source states that players “can often steer a game towards a draw by simplifying the position and avoiding unnecessary risks” and that “even in an advantageous position, it may be rational to settle for a draw if this secures a favorable team result” [PAGE 2 of 14]. This is the habit-regression operator: the scoring rule changes the perceived cost of a draw, and repeated team competition reinforces the draw-seeking norm.

The counter-trap is the 3-1-0 response. The organizer observes draw-seeking and raises the reward for a match win from two points to three. But the source finds that this counter-move is not a cure: “the situation is even worse with the 3-1-0 system” [PAGE 9 of 14], and “awarding three points for winning a match remains suboptimal” [PAGE 9 of 14]. The recursive trap is that the organizer is modeling the teams’ incentive to win, but the teams are modeling the organizer’s scoring rule and the opponent’s response. A larger win reward can increase the variance of cumulative scores and can make the leader’s penultimate lead larger, which is exactly the quantity that determines a stakeless last round. The counter-trap is therefore not a failure of arithmetic; it is a failure of equilibrium reasoning. The scoring rule changes both the payoff and the distribution of scores, and the second effect can dominate the first.

The clock is the number of rounds \(R\). The source states: “Organising more rounds is shown to improve efficacy but increase the probability of a stakeless last round” [PAGE 1 of 14]. It also states that “efficacy improves when more rounds are played ... but this is parallel with a decline in competitiveness” [PAGE 7 of 14]. The clock is not neutral because the organizer chooses \(R\) before the tournament, while players and captains adapt within it. At \(R=3\) or \(R=4\), “the last round never becomes stakeless” [PAGE 9 of 14]. That is the low-clock regime: competitiveness is protected by insufficient time for a decisive lead to form. At high \(R\), efficacy improves but the clock gives the leader enough rounds to build a lead larger than the one-round maximum. The recursive problem is that the organizer wants both a reliable ranking and a suspenseful final round, but the clock moves the system along a Pareto frontier rather than eliminating the trade-off.

The source’s own conclusion is a three-level compromise: board points are best for the frontier, hybrid scoring is better than match points alone, and the 2008 reform is questionable [PAGE 9 of 14; PAGE 11 of 14]. The theory-of-mind audit says that this conclusion depends on the assumption that teams respond to the scoring rule in the modeled way. If captains internalize the board-point rule differently, or if reserve substitution changes the team’s risk calculus, the habit regression and counter-trap can shift. The source does not model strategic precommitment, captain instructions, or within-team heterogeneity beyond the synthetic Elo ordering. Those are the open recursive layers.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is not a claim that the source is wrong. It is a claim that the source’s frontier is conditional on a physical, biomechanical, and environmental layer that the simulation does not represent. The source models outcomes through the Milvang kernel \(p_W,p_D,p_L\), which depends on rating difference, mean rating, and colour [PAGE 6 of 14]. It does not include fatigue accumulation, sleep, travel, heat, humidity, illness, injury, ergonomic conditions, time-control stress, or reserve availability. Those omitted variables can change both the probability kernel and the scoring distribution. A valid veto therefore has the form: if an unmodeled layer changes \(p_W\), \(p_D\), or the variance of board points, then the simulated mapping from \(R\) and scoring rule to \(C_R\) is not externally identified.

The physical and roster layer is the strongest veto. The source uses four players per team, but it acknowledges that “most teams enter the tournament with five players” and “the reserve player is allowed to play as a substitute on any board” [PAGE 5 of 14]. In a long tournament, a reserve can replace a fatigued player, changing the effective Elo distribution and the board-point total. If fatigue grows with \(R\), the source’s claim that more rounds improve efficacy [PAGE 7 of 14] can break down: additional rounds may add noise rather than signal if the strongest teams are more fatigued or more travel-exposed. A formal veto term is a latent performance perturbation
\[
r_{i,k,r}=r_{i,k}+\varepsilon_{i,k,r}+\eta_{i,k,r},
\]
where \(\eta_{i,k,r}\) is an unmodeled physical or environmental shock. If \(\eta\) is correlated with team strength, round number, or travel schedule, then the outcome kernel is misspecified and the Pareto frontier shifts. The source does not estimate \(\eta\), so it cannot rule out this regime.

The biomechanical and ergonomic layer is weaker for chess than for running or contact sports, but it is not zero. Board ergonomics, screen versus physical board, lighting, seating, time-control pacing, and hand or neck strain can affect blunder rates and draw propensities. The source uses only colour and rating in the outcome kernel [PAGE 6 of 14]. It does not model these variables. Weather and travel are also absent. Heat, humidity, disrupted sleep, and travel fatigue can change concentration, especially in a 12-round event. The source’s simulation runs on a laptop for 3–4 days [PAGE 7 of 14]; that is computational time, not tournament time. The physical tournament layer is therefore outside the model.

The veto adjudication is asymmetric. The source’s internal result is strong: board points determine the frontier in the simulated Setup A and Setup B, and the conclusion is robust to efficacy measure and scoring variant [PAGE 9 of 14; PAGE 11 of 14]. But the external claim “ranking in Swiss-system chess team tournaments should be based on board points” [PAGE 11 of 14] is a design recommendation under ceteris paribus. A physical-layer veto would require a real tournament or a richer simulation showing that fatigue or reserve substitution reverses the ordering of board points and match points. Until then, the correct adjudication is: the source wins the internal model contest, but the cross-layer generalization is vetoed as unproven. The source itself invites this boundary by noting that the effect of extra points for team victory “needs to be investigated by empirical studies” [PAGE 11 of 14].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Pairing-rule swap veto. Scenario: re-run Setup A with the same Milvang outcome kernel, 40 thousand runs, and the same scoring rules, but replace the integer-linear-program pairing with a stable-roommates pairing or a maximum-weight matching pairing. Measure \(C_R=\Pr(\Delta_{R-1}\le M_R)\), \(\Pr(W=\text{strongest})\), and SRD at \(R=7\) and \(R=12\). Veto condition: if board points no longer Pareto-dominate match points, or if 3-1-0 is no longer worse than 2-1-0 at the same \(R\), then the source’s scoring-rule conclusion is vetoed. Prediction: the qualitative ordering will persist because the one-round maximum and the score distribution still favor board points, but the absolute stakeless probabilities will shift by several percentage points. The source’s displayed pairing objective is already internally inconsistent [PAGE 5 of 14; PAGE 6 of 14], so this test also resolves whether the sign error matters.

2. Real-roster and field-size veto. Scenario: simulate 40 teams with five-player rosters and a reserve, using the empirical Elo spread of the 2025 European Team Chess Championship rather than the synthetic 32-team linear spread. Use \(R=7,8,9,10,11,12\) and 40 thousand runs. Veto condition: if match points at \(R=7\) do not exceed 6% stakeless probability, or if board points at \(R=12\) exceed 3% stakeless probability, then the source’s exact numeric frontier is vetoed. Prediction: board points will still produce a lower stakeless probability than match points and 3-1-0, but the magnitudes will move because the source’s 32-team, four-player setup is a stylization [PAGE 4 of 14; PAGE 5 of 14]. The source already reports that most real teams bring five players and may substitute a reserve [PAGE 5 of 14], so this is a direct verifiable extension.

3. Historical Olympiad pre/post-2008 veto. Scenario: use public Chess Olympiad results from the board-point era before 2006 and the match-point era after 2008. For each tournament, compute the penultimate lead \(\Delta_{R-1}\) and the indicator \(\mathbf{1}\{\Delta_{R-1}>M_R\}\), controlling for number of rounds, field size, and team-strength dispersion. Veto condition: if the post-2008 match-point era has a lower or equal stakeless-last-round probability than the pre-2008 board-point era after controls, then the source’s critique of the 2008 reform is vetoed. Prediction: the post-2008 era will show a higher stakeless probability, especially when \(\Delta_{R-1}>2\), consistent with the source’s claim that match points “exceeds 6% even with seven rounds” [PAGE 9 of 14]. The source calls the 2008 reform “a questionable step” [PAGE 11 of 14]; this test makes that claim empirically falsifiable rather than only simulation-conditional.
</RLVR_COUNTERFACTUAL_VETOES>