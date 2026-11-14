---
source: "2019 - Leveraging Batter-Pitcher Matchups for Optimal Game Strategy - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 19
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3477
---

<NATIVE_REASONING>
The user has provided a research paper on pitcher-batter matchups in baseball and wants me to process it according to strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis covering all these sections, citing page numbers from the provided text. The text has page markers like "1", "2", etc. Let me map out the content by page:

Page 1: Title, intro, handedness matchup strategy, Dodgers example, limitations of average stats, need for individual matchup data.
Page 2: Motivation, Figure 1 mention, 9 batters 5 pitchers 45 matchups at least 30 at-bats (2000-2017), 500,000 innings simulation, expected runs 0.39 to 0.95 per inning, optimal strategy {4333311111}, Table 1.
Page 3: Figure 1 text, sparse matchup data, correlation clustering, Figure 2.
Page 4: Figure 2 constellation plot text.
Page 5: Methods, data set 2000-2017 postseason + 2000-2018 regular season, retrosheets.org, >3.59 million matchup results, screen active players 2018, define statistically significant matchups as N times.
Page 6: Finding bicliques, bipartite graph G, V pitchers, U batters, N=30 threshold, biclique structure, |U'| = 5 pitchers, |V'| >= 9 batters, algorithm, found exactly one biclique with 5 pitchers and 10 batters when N=36, Table 2.
Page 7: Table 2, pitcher-batter matchup strategy simulation, P = {p1...}, strategy sequence S, identical integers must occur consecutively (baseball rules [14]), up to 10 batters, inning complete if 3 outs or |S| batters, 10 batters without 3 outs roughly 0.39%, max 3 pitchers per inning, 2345 different strategies.
Page 8: Table 3 outcomes (HR, T, D, S, W, FO, GO, K, HBP), probability estimates via random numbers fitted to PMF, simulation rules (runners advance on flyout 0.0715, extra base on singles/doubles 0.3356, double plays 0.6892, lead runner out 0.5 in unsuccessful DP, ground balls advance 0.25, no steals/errors/wild pitches/passed balls/picked off), * indicates estimated from historical data [1].
Page 9: Clustering for sparse data, 5170 matchups with 35+ at-bats, Ward's Method [8], dendrogram Figure 3, 15 groupings, cluster statistics cell plot, doubles/triples lumped, HBP ignored.
Page 10: Figure 4 constellation map, Figure 5 parallel plot statistical thumbprint, cluster examples (Cluster 12 high K low DT somewhat higher HR, Cluster 13 similar lower HR, Cluster 4 high HR and multiple base hits low P(K), Clusters 8 and 2 high flyouts/groundouts, one cluster high walk P(W)).
Page 11: Figure 6 schema, cluster means, matchups A,B,C classification, classification applied to all matchups even one at-bat, all 828,764 matchups.
Page 12: Figure 7 validation examples with 15 and 10 at-bats, shaded bands cluster tendencies, alignment begins to break down at low sample size but still best classification.
Page 13: Results, verification of clustering, Figure 8 simulation results 500,000 innings three probability sets, correlation coefficient 0.9286 between 15-cluster and truth, Figure 9 strategy ranking consistency.
Page 14: Lefty-righty two clusters, switch hitter assumption, correlation coefficient 0.4666 for handedness only, 2018 postseason test cases, must-win scenarios, starting pitchers available for relief.
Page 15: Figure 8 text, Figure 9 text, correlation 0.93 vs 0.47.
Page 16: Table 4 Yankees vs Red Sox ALDS Game 4 9th inning, Yankees led? No Red Sox led 4-1, Table 4 pitchers and batters.
Page 17: Figure 10 text, Chapman pitcher 1, strategy {1112555555}, all-Chapman {1111111111} suboptimal, optimal {112} for first three batters, worst strategies use Chapman after Pitcher 3 faces first two.
Page 18: Table 5 Astros vs Red Sox ALCS Game 5 9th inning, Osuna pitcher 3, Figure 11 text, resource tradeoff, conserving pitchers for extra innings.
Page 19: Figure 11 text, conclusion, 15 cluster types, sparse data, outperforms lefty-righty.
Page 20: References start.
Page 21: References continued.
Page 22: References end.

Now I need to write the analysis. I must avoid betting lines entirely. I must use formal LaTeX equations. I must cite exact [PAGE N] markers. I need >= 1000 words total across sections, with THINK_TRACE >= 400 words.

Let me draft each section carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. I need to discuss the graph-theoretic biclique approach, the maximum likelihood estimation, clustering with Ward's method, the correlation coefficients (0.9286 vs 0.4666), the simulation constraints (max 3 pitchers, 10 batters, 0.39% innings reaching 10 batters without 3 outs), the case studies (Yankees Chapman, Astros Osuna), and gray zones: sparse data breakdown at low N, the assumption of fixed lineup, no real-time updating, the 0.39% edge case, resource tradeoff vs pure matchup optimality, the hypothetical nature of biclique (retired players in Table 1 vs active in Table 2), the N=36 maximization. I'll write this in >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define bipartite graph G=(U,V,E), edge exists if matchup count >= N. Biclique G' = (U', V') complete bipartite. Maximum likelihood P(X|p,b) = count(X;p,b)/count(p,b). Strategy S = (s_1,...,s_|S|), s_i in {1,...,|P|}, identical integers consecutive. Simulation: inning complete if 3 outs or |S| batters. Probability mass function over Table 3 outcomes. Base advancement probabilities: P(advance|FO)=0.0715, P(extra|S or D)=0.3356, P(DP success)=0.6892, P(lead runner out|DP fail)=0.5, P(advance|GO)=0.25. Clustering: Ward's method minimizes within-cluster variance, distance metric correlation-based. Correlation coefficient r=0.9286 for 15-cluster vs truth, r=0.4666 for handedness vs truth. Cite pages.

RETROCAUSAL_GENEALOGY: Historical lineage: Lindsey 1959 [10] statistical data for baseball team operation, Hirotsu & Wright 2004/2005 [5,6] handedness optimization, James 1982 [9] Moneyball-ish abstract, Birnbaum SABR guide, Diestel graph theory [3], Malgrange 1962 [11] bicliques, Zhang et al. 2014 [16] genome research biclique algorithm adapted, Ward 1963 [8] hierarchical clustering, Montgomery & Runger [13] stats. Multi-week traps: platoon system over regular season vs postseason small sample, relying on handedness only, overfitting to biclique of veterans, ignoring resource depletion across series (must-win only vs multi-game scheduling explicitly excluded [PAGE 14]), the 0.39% rare inning edge case.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: managers revert to familiar closers (Chapman, Osuna) in elimination games. Counter-trap: simulation shows all-Chapman {1111111111} is suboptimal, optimal mixed strategies exist but require real-time re-simulation after each at-bat (paper admits this limitation [PAGE 16-17]). Clock: top of 9th, elimination game, 4-1 deficit, resource conservation for extra innings if tie achieved. Managerial recursion: predicting opponent's lineup adjustments, pitcher fatigue not modeled (explicitly not in simulation), the "clock" of the inning (3 outs or 10 batters).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. The paper explicitly excludes many physical factors: no stolen bases, no errors, no wild pitches/passed balls, no pickoffs, fixed lineup, no weather, no park effects, no pitcher fatigue beyond the 3-pitcher limit, no real-time state conditioning [PAGE 8, 16]. Vetoes: weather (wind, temperature, humidity affecting ball flight) not modeled; biomechanical (pitcher fatigue, injury risk, arm slot changes) not modeled; physical (base running, defense errors) excluded. The paper's model is therefore valid only under controlled simulation assumptions, not live game physics.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just counterfactual vetoes. I'll create 3 scenarios:
1. Sparse matchup breakdown: N < 10 at-bats, classification alignment breaks down (Figure 7 right side [PAGE 12]), veto: do not use cluster assignment for matchups below threshold, prediction: expected runs estimate error > X%.
2. Real-time state change: after first batter reaches base, optimal strategy changes; paper does not re-simulate mid-inning [PAGE 16], veto: fixed pre-inning strategy is invalid once base/out state changes, prediction: suboptimality gap grows with each base runner.
3. Physical constraint violation: pitcher used consecutively beyond biomechanical readiness or in extra innings causing fatigue; paper conserves pitchers but doesn't model fatigue [PAGE 18], veto: using same pitcher for 10 batters violates fatigue constraints, prediction: performance degradation non-linear after pitch count threshold.

I need to ensure total word count >= 1000 across all sections. Let me write carefully, using formal LaTeX and page citations. I'll use [PAGE N] format.

Let's start drafting.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation rests on constructing a bipartite graph $G=(U,V,E)$ where $U$ is the set of pitchers and $V$ the set of batters, with an edge $(p,b)\in E$ iff pitcher $p$ and batter $b$ have faced each other at least $N$ times in the Retrosheet event-level data [PAGE 5–6]. The authors seek a biclique—a complete bipartite subgraph $G'=(U',V')$—with $|U'|=5$ pitchers and $|V'|\ge 9$ batters that maximizes $N$ [PAGE 6]. For their active-player 2018 dataset, exactly one such biclique exists at $N=36$ (five pitchers, ten batters), and no biclique satisfies the constraints for $N>36$ [PAGE 6]. This is a sharp data singularity: the feasible set collapses to a single biclique at $N=36$, meaning the "truth" simulation in Section 4.1 is conditioned on an extremely narrow, veteran-heavy slice of the league (Table 2) [PAGE 6]. The maximum-likelihood event probabilities are $P(X\mid p,b)=n_X(p,b)/n(p,b)$ for outcomes $X\in\{\mathrm{HR},\mathrm{T},\mathrm{D},\mathrm{S},\mathrm{W},\mathrm{FO},\mathrm{GO},\mathrm{K},\mathrm{HBP}\}$ [PAGE 5, 7–8].

A pitching strategy is a sequence $S=(s_1,\dots,s_{|S|})$ with $s_i\in\{1,\dots,|P|\}$ and identical integers constrained to occur consecutively because a removed pitcher cannot return under Official Baseball Rules [14] [PAGE 7]. The simulation caps usage at three pitchers per inning and ten batters per inning; an inning terminates at three outs or at batter ten [PAGE 7]. Notably, only $\approx 0.39\%$ of simulated innings reach ten batters without three outs—a rare-event regime that the authors acknowledge but do not model separately [PAGE 7]. Under these constraints there are 2,345 distinct strategies, each evaluated over 500,000 simulated innings [PAGE 7].

The sparse-data remedy is Ward's hierarchical clustering over 5,170 matchups with 35+ at-bats, reduced to 15 cluster types by the law of diminishing returns (the 16th cluster added no discernable structure) [PAGE 9, 11]. Matchups outside the training set—823,594 of them—are classified by distance to cluster means, even down to one-at-bat matchups [PAGE 11]. Validation shows the 15-cluster approach preserves strategy ranking with correlation $r=0.9286$ against truth, whereas handedness-only clustering collapses to $r=0.4666$ [PAGE 13–15].

Gray-zone audits: (1) Table 1's motivating experiment mixes retired and active players and is explicitly hypothetical ("this game was never actually played in real life") [PAGE 2]; (2) the case studies examine only must-win, single-inning elimination scenarios and explicitly exclude multi-game scheduling and bullpen resource coupling across games [PAGE 14, 18]; (3) strategies are fixed before the inning and are not re-simulated after each at-bat, despite the paper conceding real-time decisions are state-conditioned [PAGE 16]; (4) Figure 7 shows classification alignment "beginning to break down" at 10 at-bats per matchup, though it remains the best available classification [PAGE 12]; (5) the simulation excludes errors, stolen bases, wild pitches, passed balls, pickoffs, and weather, and imposes constant base-advancement probabilities (e.g., $P(\text{advance}\mid\mathrm{FO})=0.0715$) estimated from aggregate historical data rather than matchup-specific physics [PAGE 8]. The resource-versus-matchup tradeoff in the Astros case—leaving Osuna in to conserve pitchers for potential extra innings—illustrates that optimal matchup selection is subordinate to bullpen inventory in elimination contexts [PAGE 18].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Bipartite matchup graph: Let $G=(U,V,E)$ with $U=\{$pitchers$\}$, $V=\{$batters$\}$, and edge set
\[
E_N=\{(p,b): n(p,b)\ge N\},
\]
where $n(p,b)$ is the observed at-bat count between pitcher $p$ and batter $b$ over 2000–2018 regular season plus 2000–2017 postseason Retrosheet data ($>3.59$ million matchup results) [PAGE 5–6]. Statistically significant matchups use $N\ge30$ as a baseline threshold [PAGE 6].

Biclique operator: A feasible truth-set is a complete bipartite subgraph $G'=(U',V')\subseteq G$ such that
\[
|U'|=5,\qquad |V'|\ge 9,\qquad \forall (p,b)\in U'\times V': (p,b)\in E_N,
\]
maximizing $N$ [PAGE 6]. The algorithm cycles over all $\binom{|U|}{5}$ choices of $U'$, intersects neighborhoods $\mathcal{N}(U')=\bigcap_{p\in U'}\mathcal{N}(p)$, and accepts $V'=\mathcal{N}(U')$ if $|V'|\ge9$ [PAGE 6]. For the 2018 active-player screen, the unique maximizer is $N^*=36$ with $|U'|=5$, $|V'|=10$; no biclique exists for $N>36$ [PAGE 6].

Maximum-likelihood event probabilities: For each edge $(p,b)$ in the biclique,
\[
\hat P(X\mid p,b)=\frac{n_X(p,b)}{n(p,b)},\quad X\in\mathcal{O}=\{\mathrm{HR},\mathrm{T},\mathrm{D},\mathrm{S},\mathrm{W},\mathrm{FO},\mathrm{GO},\mathrm{K},\mathrm{HBP}\},
\]
units: dimensionless probability per at-bat [PAGE 5, 7–8].

Strategy space and simulation: A strategy for $|S|\le10$ batters is
\[
S=(s_1,\dots,s_{|S|}),\quad s_i\in\{1,\dots,|P|\},\quad s_i=s_{i+1}\Rightarrow \text{pitcher remains},
\]
with the consecutiveness constraint from Official Baseball Rules [14] [PAGE 7]. At most three distinct pitchers per inning; inning ends at three outs or batter ten [PAGE 7]. Number of strategies under these constraints: $|\mathcal{S}|=2345$ [PAGE 7]. Each strategy is evaluated by $500{,}000$ Monte Carlo innings, drawing at-bat outcomes via inverse-CDF sampling from the probability mass function over $\mathcal{O}$ [PAGE 7].

Base-advancement and defensive operators (dimensionless probabilities estimated from event-level data, marked ${}^*$ in source):
\[
P(\text{runner advances}\mid\mathrm{FO})=0.0715,\quad
P(\text{extra base}\mid\mathrm{S}\cup\mathrm{D})=0.3356,
\]
\[
P(\text{double play turned})=0.6892,\quad
P(\text{lead runner out}\mid\text{failed DP})=0.5,\quad
P(\text{runner advances}\mid\mathrm{GO})=0.25.
\]
Excluded: stolen bases, errors, wild pitches, passed balls, pickoffs, thrown-out runners [PAGE 8]. Rare-innings regime: $P(\text{10 batters,}<3\text{ outs})\approx0.0039$ [PAGE 7].

Clustering operator: Ward's method over 5,170 matchups ($n(p,b)\ge35$), distance based on correlation of the seven statistics $\{P(\mathrm{HR}),P(\mathrm{W}),P(\mathrm{K}),P(\mathrm{DT}),P(\mathrm{FO}),P(\mathrm{S}),P(\mathrm{GO})\}$, where $\mathrm{DT}=\mathrm{T}\cup\mathrm{D}$ and HBP is ignored [PAGE 9]. Output: 15 clusters selected because the 16th showed no discernable difference [PAGE 11]. Sparse matchup classification: assign matchup $m$ to cluster $c^*=\arg\min_c d(m,\mu_c)$, valid even for $n(m)=1$ [PAGE 11].

Verification correlations [PAGE 13–15]:
\[
r(\text{15-cluster means},\text{truth})=0.9286,\qquad
r(\text{handedness-only},\text{truth})=0.4666.
\]
Case-study strategies [PAGE 17–19]: Yankees $S_{\text{Yankees}}\approx(1,1,1,2,5,5,5,5,5,5)$ with Chapman ($p_1$) optimal for first two batters; all-Chapman $(1,1,1,1,1,1,1,1,1,1)$ labeled suboptimal. Astros: Osuna ($p_3$) faced first three batters; non-optimal but within acceptable resource-conservation band [PAGE 18–19].

Breakdown/singularity regimes: $N>36$ yields empty biclique feasible set [PAGE 6]; clustering alignment degrades near $n(p,b)\approx10$ at-bats [PAGE 12]; fixed-pre-inning strategy becomes invalid once base/out state changes because no mid-inning re-simulation is performed [PAGE 16].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper's intellectual lineage traces to Lindsey (1959) on statistical data for baseball team operation [10] and to Hirotsu & Wright's handedness-adjusted pitcher-substitution models (2004, 2005) [5, 6], which the authors explicitly criticize for substituting league-average platoon splits for statistically significant individual matchup data [PAGE 1]. Bill James's abstract tradition [9] and the SABR guide [2] populate the sabermetric background, while the algorithmic core imports graph-theoretic biclique search from Diestel [3] and Malgrange (1962) [11], specifically adapting Zhang et al.'s (2014) genome-research biclique algorithm [16] to pitcher-batter matchup matrices [PAGE 6]. Ward's (1963) hierarchical grouping supplies the sparse-data classifier [8], and Montgomery & Runger [13] underwrites the $N\ge30$ significance rule [PAGE 6].

Multi-week traps embedded in this lineage: The platoon system itself is a multi-week aggregate heuristic (Dodgers' 2018 regular-season all-right-handed lineups versus left-handed starters) that the paper shows is inferior to 15-cluster matchup typing ($r=0.4666$ versus $r=0.9286$) [PAGE 1, 13–15]. A second trap is retrospective biclique overfitting: the unique $N=36$ biclique consists of All-Star veterans with long shared histories, so the "truth" simulation may not generalize to rookies or interleague opponents who lack $N$ co-occurrences [PAGE 1–2, 6]. A third trap is temporal scope mismatch: the paper restricts analysis to must-win elimination innings and explicitly declines multi-game scheduling or bullpen chaining across a series [PAGE 14, 18], meaning a strategy optimal for a single top-of-the-9th may be catastrophic over a seven-game span if it overuses the bullpen. The Astros case directly exposes this: conserving Osuna for potential extra innings was deemed acceptable despite slightly inferior matchup math [PAGE 18]. Finally, the 0.39% ten-batter-without-three-outs tail represents a low-frequency, high-leverage regime where the model's fixed base-advancement constants are least likely to hold [PAGE 7].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: In elimination must-win scenarios, managers regress to familiar high-leverage closers—Chapman for the Yankees [PAGE 17] and Osuna for the Astros [PAGE 18]—because the perceived cost of failure (season-ending loss) dominates the expected-value calculus of matchup optimization. The paper's simulations quantify exactly where this habit succeeds and fails: Chapman was optimal to start the Yankees' 9th but only for the first two batters; the all-Chapman strategy $(1^{10})$ was explicitly labeled suboptimal [PAGE 17]. Osuna's three-batter stint was non-optimal yet defensible under bullpen conservation [PAGE 18–19].

Counter-trap: The optimal strategies recovered by simulation (e.g., mixed pitcher sequences such as $\{112\}$ or $\{4442555555\}$ [PAGE 17]) require a fixed, pre-inning commitment and ignore real-time state conditioning [PAGE 16]. A manager who treats the simulation output as a rigid script commits a counter-trap: the model does not re-run after each at-bat, so a lead-off walk, error, or stolen base (all excluded from the simulation [PAGE 8]) invalidates the pre-computed pitcher sequence. Recursive theory of mind further implies that opposing managers observe pitcher usage and adjust batter handedness or pinch-hitting in response, an adversarial layer absent from the single-lineup, fixed-strategy assumption [PAGE 7–8, 16].

Clock: The operational clock is the inning boundary—three outs or ten batters [PAGE 7]—nested inside the elimination-game clock (top of the 9th, trailing 4–1, season on the line) [PAGE 16–19]. The resource clock (bullpen availability) competes with the matchup clock: the paper explicitly recommends that managers choose how many resources they are comfortable spending per inning rather than chasing pure matchup optimality [PAGE 18]. The recursion closes on the extra-innings contingency: if the Astros tied the game in the bottom of the 9th, conserving pitchers in the top of the 9th becomes strategically dominant even if the immediate expected-run value is slightly higher [PAGE 18].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The simulation enforces no weather, temperature, wind, humidity, or park-effects variables; ball-flight outcomes (HR, D, T, S) are drawn from matchup-specific PMFs conditioned only on historical counts, not on launch conditions [PAGE 7–8]. Veto: any game played under materially different atmospheric or park conditions invalidates the probability transfer.

Biomechanical layer: Pitcher fatigue, pitch-count thresholds, arm-slot changes, injury risk, and consecutive-batter fatigue curves are absent. The only physical constraint is the rule-based three-pitcher maximum per inning and the prohibition on pitcher re-entry [PAGE 7–8, 14]. Veto: deploying the same pitcher for ten consecutive batters, as the all-Chapman strategy would require, is matchup-optimal in the simulation but biomechanically unverified; the model makes no claim about pitch-count performance decay.

Defensive/physical-play layer: Stolen bases, errors, wild pitches, passed balls, pickoffs, and runners thrown out taking extra bases are excluded [PAGE 8]. Base advancement on flyouts ($0.0715$), extra bases on singles/doubles ($0.3356$), and double-play conversion ($0.6892$) are aggregate historical constants, not matchup-specific or state-specific [PAGE 8]. Veto: in high-leverage innings where defensive alignment, outfield arm strength, or infield shift configurations deviate from league averages, the expected-run output of any strategy is biased.

Veto adjudication hierarchy: (1) Rule-based constraints (no pitcher re-entry, max three pitchers) are hard and preserved [PAGE 7, 14]. (2) Excluded physical phenomena (weather, fatigue, errors) are soft vetoes: the model remains valid only as a controlled counterfactual, not as a live-game predictor. (3) The $N=36$ biclique singularity means the "truth" data themselves are conditioned on a veteran subset, so any application to rookie-heavy or interleague matchups fails the external-validity veto [PAGE 1–2, 6].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Sparse-data classification breakdown. A pitcher-batter matchup with $n(p,b)<10$ at-bats is classified into one of the 15 clusters by distance to cluster mean. Source evidence: Figure 7 shows alignment with cluster tendencies "beginning to break down" at 10 at-bats, though correlation remains positive and it is still the best available classification [PAGE 12]. Veto rule: if $n(p,b)<10$, do not substitute cluster-type statistics for matchup statistics in expected-run computation; fall back to handedness priors or league-average splits with explicitly inflated uncertainty. Counterfactual prediction: for sub-10-at-bat matchups, the mean-squared error of expected-runs-per-inning estimates exceeds the error of handedness-only clustering by a margin proportional to $1/\sqrt{n(p,b)}$, and strategy ranking flips for at least one pair of adjacent strategies in a 2345-strategy enumeration.

Veto Scenario 2 — Mid-inning state change invalidating fixed strategy. The simulation computes strategies before the inning begins and does not re-simulate after each at-bat; source evidence: the paper concedes real-time decisions are conditioned on game state and that later-inning decisions may be better or worse than pre-computed [PAGE 16]. Veto rule: if any base runner reaches base or the out count changes before the scheduled pitcher switch, the pre-inning strategy $S$ is void and must be re-optimized over the updated base/out state. Counterfactual prediction: conditional on a lead-off walk or error (events excluded from the model [PAGE 8]), the expected-run difference between the pre-computed optimal strategy and the re-optimized state-dependent strategy exceeds 0.10 runs per inning in at least 40% of Yankees/Astros-type elimination scenarios.

Veto Scenario 3 — Biomechanical fatigue override of matchup optimality. The all-Chapman strategy $(1^{10})$ is labeled suboptimal, but mixed strategies requiring frequent pitcher changes assume a healthy, available bullpen; the paper models resource conservation explicitly by leaving Osuna in for three batters despite slightly better alternatives [PAGE 17–18]. Veto rule: if the scheduled relief pitcher has exceeded a biomechanical readiness threshold (e.g., pitch count in prior 24–48 hours, consecutive-day usage, or measured velocity decline), the strategy that calls for that pitcher is vetoed regardless of matchup advantage. Counterfactual prediction: in elimination innings where the nominally optimal relief pitcher is fatigued, the expected runs of the fatigue-constrained second-best strategy exceed the unconstrained optimum by $\Delta ER>0.05$ runs per inning, and the optimal choice reverts to the current pitcher of record for the remainder of the inning.
</RLVR_COUNTERFACTUAL_VETOES>