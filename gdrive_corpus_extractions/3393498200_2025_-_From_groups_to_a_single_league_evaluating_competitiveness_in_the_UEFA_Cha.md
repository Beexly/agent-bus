---
source: "2025 - From groups to a single league evaluating competitiveness in the UEFA Champions League - Devriesere et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2025"
pages: 25
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4316
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about UEFA Champions League format changes and provide a detailed response with specific XML sections. Let me carefully review the requirements:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, I need to be careful about the betting lines constraint. The paper discusses competitive matches, prizes, etc., but I must NOT mention spreads, totals, moneylines, or odds. I should avoid betting terminology entirely.

Let me analyze the paper content thoroughly:

Key findings from the paper:
- UEFA Champions League changed from group stage (32 teams, 8 groups of 4, double round robin) to incomplete round robin (iRR) format (36 teams, single league, each team plays 8 opponents - 2 from each of 4 pots)
- Match classification: competitive, asymmetric, stakeless, collusive
- Competitive: neither team indifferent, objectives incompatible
- Asymmetric: exactly one team indifferent
- Stakeless: both teams indifferent
- Collusive: both teams have something at stake but can agree on outcome guaranteeing both their best prizes
- Results: competitive matches increase from 86.82% to 93.94% under iRR
- Stakeless decreases from 2.78% to 0.75%
- Asymmetric decreases from 10.28% to 5.14%
- Collusive increases from 0.11% to 0.17%
- Probability of at least one collusion opportunity in a season: group stage 10.18%, iRR 21.73%
- Schedule effects: schedule 3 (similar strength early) performs best for iRR; schedule 2 (similar strength late) performs worst
- Integer programming used for elimination problem and guaranteed points placement problem
- Poisson model for match outcomes with Elo ratings
- 10,000 simulations per schedule type per season, 6 seasons (2019/20 to 2024/25)
- Total simulations: 780,000 group stage, 310,000 iRR

Now let me structure the response:

<THINK_TRACE>: Need >=400 words. Deep multi-hop derivation and gray-zone audit. I'll discuss the logical chain from format structure to match classification to computational complexity to simulation results, and audit gray zones (e.g., heuristic draw simulation, 10-minute time limit with 1% gap acceptance, Poisson model trained on group stage not iRR, goal difference tie-breaker assumption applied retroactively to old format, small loss threshold of 5 goals arbitrary, collusion defined as existence not probability, etc.)

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the paper (elimination problem IP, guaranteed points placement IP, draw constraints, scheduling constraints, Poisson model, Elo win probability, RPS). Units: percentages, probabilities, counts. Page citations. Breakdown regimes: NP-completeness, coNP-completeness, 10-minute solver limit, 1% gap, 5-goal small loss cap, simultaneous final round.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Rottenberg (1956) uncertainty hypothesis, Schilling (1994) game importance, Csató et al. (2024) previous CL schedules, Gyimesi (2024) heuristic, Guyon et al. (2025) draw/scheduling, Swiss system distinction, 2026 FIFA World Cup 3-team groups collusion, UEFA Nations League tie-breaking. Multi-week traps: final round simultaneity, strength-front-loaded vs back-loaded schedules, collusion probability compounding over 144 matches.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression (teams reverting to conservative play when prize secured), counter-trap (collusion incentives increasing even as competitive matches increase), clock (time slots in rounds, information cascades in non-simultaneous matches, 8 matchdays vs 6 group rounds).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This is tricky because the paper is about tournament design, not physical sports performance. I need to interpret "veto proof" as factors that would override/invalidate the model's conclusions: travel fatigue, fixture congestion, weather postponements, physical recovery constraints between matchdays, home advantage in Poisson model (the +100 Elo home advantage in equation 40), etc. I must not invent fake ratios but can discuss how these layers act as vetoes on the model's assumptions.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR (Reinforcement Learning Verifiable Rewards? Or just "verifiable" counterfactual veto scenarios) + predictions. I need to create 3 counterfactual scenarios that could be tested/verified, with predictions. Examples: (1) If final round matches are not simultaneous, collusion probability increases; (2) If tie-breaker reverts to head-to-head instead of goal difference, classification changes; (3) If Poisson model is recalibrated for iRR attacking style (fewer draws), competitive percentage changes. Predictions should be quantitative where possible based on paper data.

Word count: Need >=1,000 words total across sections. THINK_TRACE alone >=400 words.

Let me start writing. I need to be very careful with LaTeX formatting and page citations.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I have pages 1-25. I should cite specific pages.

Let me draft each section carefully.

For THINK_TRACE (>=400 words):
- Multi-hop: Format structure (36 teams, 4 pots, 8 matches each) → draw feasibility (IP constraints 14-21) → schedule feasibility (IP constraints 22-30) → outcome simulation (Poisson/Elo) → ranking → prize status (elimination IP + guaranteed points placement IP) → match classification (4 states) → aggregation over 10k simulations × 6 seasons → format comparison.
- Gray zones: Draw simulation omits TV pairings (Page 7); 10-minute time limit with 1% gap acceptance (Page 12); Poisson model trained on 2005/06-2022/23 group stage, validated on 2023/24-2024/25, but applied to iRR which Csató (2025a) argues encourages attacking play/reduces draws (Page 11); old format simulated with goal difference tie-breaker though historically head-to-head was used (Page 13); small-loss collusion capped at 5 goals (Page 6); collusion defined as existence of aligned incentives, not probability of occurrence (Page 5); simultaneous final round assumption for group stage underestimates non-competitive matches (Page 9); 36-team expansion adds 4 teams via heuristic rules (Page 12).

For SOURCE_OPERATORS_AND_EQUATIONS:
- Elimination problem: equations (1)-(6) on Page 5-6
- Guaranteed points placement: equations (7)-(8) on Page 6
- Draw group stage: equations (9)-(13) on Page 6-7
- Draw iRR: equations (14)-(21) on Page 7-8
- Schedule iRR: equations (22)-(30) on Page 8-9
- Schedule objectives: equations (31)-(38) on Page 9-10
- Poisson: equation (39) on Page 10-11
- Elo win probability: equation (40) on Page 11
- RPS: equation (41) on Page 11
- Lambdas: equations (42)-(43) on Page 11-12
- Collusion season probability: 1-(1-0.0011)^96 = 10.18% vs 1-(1-0.0017)^144 = 21.73% (Page 14)
- Units: percentages (%), probabilities [0,1], match counts, Elo points, goals, time slots/rounds.
- Breakdown regimes: NP-complete elimination for top k>1 (Page 5); coNP-complete guaranteed placement (Page 5); 10-min solver limit (Page 12); 1% gap tolerance (Page 12); 5-goal small loss (Page 6); simultaneous rounds (Page 9); tie-breaker assumption (Page 13).

For RETROCAUSAL_GENEALOGY:
- Rottenberg (1956) outcome uncertainty hypothesis (Page 2)
- Schilling (1994) match importance (Page 4)
- Csató et al. (2024) 12 valid schedules for old format (Page 8-9)
- Gyimesi (2024) heuristic approximation for new format (Page 1-2)
- Guyon et al. (2025) draw and scheduling (Page 7-8)
- Swiss system distinction (Page 3)
- 2026 FIFA World Cup 3-team groups collusion literature (Page 2)
- Csató (2023) tie-breaking rules and collusion (Page 2-3, 13)
- Multi-week traps: final matchday simultaneity; information cascades in rounds 5-6 (old) vs rounds 7-8 (new); strength-front-loaded schedules (schema 3) vs back-loaded (schema 2); collusion probability compounding across 144 matches vs 96 matches.

For RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: teams with secured prize regress to low-effort equilibrium (Courty and Cisyk 2024; Page and Page 2009; Szymanski 2003 cited Page 2)
- Counter-trap: as stakeless/asymmetric decrease, collusive increases; teams may implicitly coordinate on draws/small losses when both have complementary prize targets (T8 vs T24 etc., Table 8 Page 15)
- Clock: 8 matchdays in iRR vs 6 in group stage; time slots within rounds (Page 8-9); prize fixation probabilities by round/rank (Table 9 Page 16); middle ranks (9-24) have longest uncertainty window; strongest/weakest secure earliest.

For CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: fixture congestion, travel, recovery between matchdays (not explicitly modeled; 1 match per round constraint in eq 24 but no minimum rest days modeled)
- Biomechanical/weather: Poisson model assumes independent match outcomes (Page 11); weather postponements not modeled; home advantage +100 Elo in eq 40
- Veto proof: If physical constraints (e.g., compressed schedule, international breaks) force non-simultaneous final rounds, collusion risk rises (cite Page 17 conclusion about non-simultaneous final games). If weather causes postponements, the IP schedule feasibility (eq 22-30) breaks and prize status calculations become stale. The model is "veto proof" only under the ceteris paribus assumption of fixed schedule and exogenous match outcomes.

For RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable counterfactual veto scenarios + predictions.

Scenario 1: Non-simultaneous final round in iRR.
- Verifiable condition: If UEFA schedules round 8 matches across multiple time slots instead of simultaneously.
- Prediction: Based on Table 7b, round 8 slot 1 already shows 61.42% competitive. If information cascades occur (later matches know required result), collusive % would rise above 0.17% and stakeless/asymmetric would shift. The paper notes on Page 17 that non-simultaneous final games increase collusion opportunities.
- Veto: If observed collusion rate > 0.5% in non-simultaneous implementation, the format's net competitiveness claim is vetoed.

Scenario 2: Tie-breaker reversion to head-to-head.
- Verifiable condition: If iRR uses head-to-head instead of goal difference as primary tie-breaker.
- Prediction: Page 5 notes guaranteed points placement is coNP-complete; Page 13 says additional checks needed if head-to-head. The integer programs in Section 4.1 assume goal difference. Under head-to-head, collusive opportunities likely increase because bilateral results create direct manipulation incentives (Csató 2023 cited Page 2-3).
- Veto: If head-to-head tie-breaker raises collusive matches above 0.5%, the iRR competitiveness advantage is vetoed.

Scenario 3: Recalibrated Poisson model for iRR (fewer draws, more attacking).
- Verifiable condition: If match outcome model is retrained on iRR data showing reduced draw probability (Csató 2025a argument on Page 11).
- Prediction: Current model has draw probabilities around 20-30% (Table 4 Page 11-12). If draws decrease, collusive matches (which often rely on ties or small losses, Page 6) may decrease, potentially raising competitive % above 93.94% or altering the stakeless/asymmetric mix.
- Veto: If recalibrated model shifts competitive % below 90% or collusive above 0.3%, the original conclusion is vetoed.

Wait, I need to make sure I don't mention betting lines. "Odds" is specifically prohibited. I should avoid the word "odds" entirely. I can use "probability" which is fine.

Let me now write the full response with careful attention to word count and formatting.

I need to ensure total words >= 1000. THINK_TRACE >= 400. Let me aim for roughly:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~300 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words

Total should exceed 1000.

Let me draft carefully, checking for prohibited terms (spreads, totals, moneylines, odds). I will not use any of those.

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain proceeds through six nested hops, each contingent on the prior layer’s output. Hop 1: Format topology. The group stage uses 32 teams partitioned into eight groups of four, each playing a double round robin (six matches per team), producing 96 total matches [PAGE 3]. The iRR format uses 36 teams in four pots, each playing eight distinct opponents (two per pot, one home, one away), producing 144 total matches [PAGE 3, PAGE 14]. Hop 2: Draw feasibility. For the group stage, the draw is modeled via binary assignment variables x_ig subject to association separation (eq. 9), single-group assignment (eq. 10), pot balance (eq. 11), and previously fixed allocations (eq. 12) [PAGE 6-7]. For the iRR, the draw uses match variables m_ij with constraints forbidding same-association matchups (eq. 14), capping cross-association repeat opponents at two (eq. 15), enforcing exactly one home and one away opponent per pot (eq. 16-17), preventing duplicate opponents (eq. 18), fixing prior draws (eq. 19), and excluding self-play (eq. 20) [PAGE 7-8]. Hop 3: Schedule feasibility. The iRR scheduling integer program uses x_ijs to assign each drawn match to a time slot, enforcing one match per team per round (eq. 24), exact match counts per slot (eq. 25), no consecutive home/away in first and last two rounds (eq. 26-27), and at most two consecutive home or away matches (eq. 28-29) [PAGE 8-9]. Hop 4: Outcome simulation. Match goals are modeled by independent Poisson processes with lambdas derived from Elo ratings via log-linear equations (eq. 42-43) and home advantage encoded as +100 Elo in the win-probability function (eq. 40) [PAGE 10-11]. Hop 5: Prize-status determination. For each team, the elimination problem (minimize teams strictly above team t, eq. 1-6) and the guaranteed points placement problem (maximize teams finishing at or below t, eq. 7-8) are solved via integer programming [PAGE 5-6]. Hop 6: Match classification. A match is competitive iff neither team is indifferent and objectives are incompatible; asymmetric iff exactly one team is indifferent; stakeless iff both are indifferent; collusive iff both have something at stake and a common outcome guarantees both their best prizes [PAGE 4-5].

Gray-zone audit reveals multiple fragility points. First, the group-stage simulation deliberately omits UEFA’s TV-pairing draw constraint, which Guyon (2021) shows has non-negligible impact on draw probabilities [PAGE 7]. Second, schedule generation for the iRR imposes a 10-minute time limit and accepts solutions within 1% of the LP relaxation gap, meaning some “feasible” schedules are suboptimal by construction [PAGE 12]. Third, the Poisson outcome model is trained exclusively on 2005/06–2022/23 group-stage data (1,968 matches) yet applied to the iRR format, even though Csató (2025a) argues the iRR encourages attacking play and reduces draw probability [PAGE 10-11]. Fourth, the old format is retroactively simulated with goal difference as the primary tie-breaker, although the historical rule was head-to-head; the authors acknowledge this isolates format effects but note tie-breaking rules materially affect collusion and stakeless frequencies [PAGE 13, citing Csató 2023]. Fifth, collusive “small loss” is arbitrarily capped at a five-goal difference [PAGE 6], and collusion is defined as the existence of aligned incentives rather than the probability of coordination [PAGE 5]. Sixth, the conservative group-stage assumption that all four group matches occur simultaneously underestimates non-competitive matches [PAGE 9]. Finally, expanding 32-team historical seasons to 36 teams requires heuristic slot-filling rules whose sensitivity is not stress-tested [PAGE 12-13].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units:

Elimination problem (integer program), [PAGE 5-6]:
min z = \sum_{i \in T : i \neq t} y_i  (1)
s.t. w_m + d_m + l_m = 1  \forall m \in M  (2)
p_i = B_i + \sum_{m \in M^h_i} (3w_m + d_m) + \sum_{m \in M^a_i} (3l_m + d_m)  \forall i \in T  (3)
p_i - p_t \leq (B_i + 3|M^h_i \cup M^a_i| - B_t) y_i  \forall i \neq t  (4)
w_m, d_m, l_m \in \{0,1\}, \quad y_i \in \{0,1\}
Units: p_i in points (dimensionless count), B_i in points, z in team count. Team t is eliminated from top k iff z \geq k.

Guaranteed points placement problem, [PAGE 6]:
max z = \sum_{i \in T : i \neq t} y_i  (7)
s.t. p_t - p_i \leq (B_t + 3|M^h_t \cup M^a_t| - B_i)(1 - y_i)  \forall i \neq t, plus (2),(3),(5),(6)  (8)
Team t guaranteed top k iff z \leq k-1.

Group-stage draw IP, [PAGE 6-7]:
\sum_{i \in T_c} x_{ig} \leq 1  \forall c \in C, g \in G  (9)
\sum_{g \in G} x_{ig} = 1  \forall i \in T  (10)
\sum_{i \in P_h} x_{ig} = 1  \forall g \in G, h  (11)
x_{ig} \geq \psi_{ig}  \forall i,g  (12)
x_{ig} \in \{0,1\}

iRR draw IP, [PAGE 7-8]:
\sum_{j \in T_{a(i)}} (m_{ij} + m_{ji}) = 0  \forall i  (14)
\sum_{j \in T_c} (m_{ij} + m_{ji}) \leq 2  \forall i, c : a(i) \neq c  (15)
\sum_{j \in P_h} m_{ij} = 1, \quad \sum_{j \in P_h} m_{ji} = 1  \forall i, h  (16-17)
m_{ij} + m_{ji} \leq 1  \forall i  (18)
m_{ij} \geq \omega_{ij}, \quad m_{ii} = 0, \quad m_{ij} \in \{0,1\}

iRR scheduling IP, [PAGE 8-9]:
\sum_{s \in S} x_{ijs} = 1  \forall j \in N^h_i  (22)
\sum_{s \in S} x_{jis} = 1  \forall j \in N^a_i  (23)
\sum_{s \in S_b} (\sum_{j \in N^h_i} x_{ijs} + \sum_{j \in N^a_i} x_{jis}) = 1  \forall i, b  (24)
\sum_{i \in T} (\sum_{j \in N^h_i} x_{ijs} + \sum_{j \in N^a_i} x_{jis}) = m_s  \forall s  (25)
Consecutive home/away and two-in-a-row constraints: eq. (26)-(29).

Poisson outcome model, [PAGE 10-11]:
\mathbb{P}_h(k) = \frac{(\lambda^h_{ij})^k \exp(-\lambda^h_{ij})}{k!}  (39)
Elo win probability: w_{ij} = [1 + 10^{-(Elo_i + 100 - Elo_j)/400}]^{-1}  (40)
Calibrated lambdas: log(\lambda^h_{i,j}) = -0.881551 + 0.002339 \cdot Elo_i - 0.001764 \cdot Elo_j + 0.148439  (42)
log(\lambda^a_{i,j}) = -0.881551 + 0.002259 \cdot Elo_j - 0.001792 \cdot Elo_i  (43)

Rank Probability Score, [PAGE 11]:
RPS = \frac{1}{r-1} \sum_{i=1}^{r-1} (\sum_{m=1}^i (p_m - e_m))^2  (41)

Aggregate season-level collusion risk, [PAGE 14]:
Group stage: 1 - (1 - 0.0011)^{96} \times 100\% = 10.18\%
iRR: 1 - (1 - 0.0017)^{144} \times 100\% = 21.73\%

Breakdown regimes:
- NP-complete: elimination from top k > 1 even for (1,0) score vector; NP-complete for (3,1,0) [PAGE 5].
- coNP-complete: guaranteed points placement [PAGE 5].
- Solver: 10-minute limit, 1% LP-gap acceptance [PAGE 12].
- Collusion detection: small-loss collusion capped at goal difference 5 [PAGE 6]; simultaneous final round assumed [PAGE 9].
- Tie-break: goal difference assumed primary for both formats, overriding historical head-to-head rule [PAGE 13].

Table 6 headline results [PAGE 14]: iRR competitive 93.94% vs group stage 86.82%; stakeless 0.75% vs 2.78%; asymmetric 5.14% vs 10.28%; collusive 0.17% vs 0.11%. Mann-Whitney U p < 0.01 for all comparisons; rank-biserial r_b = +0.70 for competitive matches [PAGE 14]. Schedule 3 (similar strength early) yields iRR competitive 94.06%, stakeless 0.68%; Schedule 2 (similar strength late) yields competitive 93.31%, stakeless 1.14% [PAGE 16, Table 10b].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage traces to Rottenberg (1956), whose outcome uncertainty hypothesis posits that fan interest collapses once prizes are decided before competition concludes [PAGE 2]. This is operationalized through Schilling (1994), who quantifies match importance as the change in conditional probability of securing a prize given a win versus a loss [PAGE 4]. The immediate methodological ancestry is Csató et al. (2024), which enumerated the 12 valid schedules for the previous Champions League group stage and found that non-competitive matches are minimized when the strongest team plays at home in the final round against a middle team [PAGE 2, PAGE 8-9]. Gyimesi (2024) offered a heuristic approximation of non-competitive matches in the new iRR format [PAGE 1-2]. The present work departs by using exact integer programming rather than heuristics, incorporating collusion explicitly, and testing multiple schedule types [PAGE 2].

Related tournament-design literature supplies the historical traps. Chater et al. (2021) and Stronka (2024) demonstrated that switching from four-team to three-team groups at the 2026 FIFA World Cup increases collusion opportunities, proposing dynamic scheduling and alternative designs as remedies [PAGE 2]. Csató (2023) showed that tie-breaking rules govern collusion probability in the UEFA Nations League, finding that goal difference as primary tie-breaker promotes competitiveness relative to head-to-head [PAGE 2-3, PAGE 13]. Guyon et al. (2025) provided the draw-and-scheduling architecture for the UEFA league phase, noting that the iRR fixes the full schedule ex ante whereas the Swiss system pairs dynamically based on prior results [PAGE 3, PAGE 7-8].

Multi-week traps embedded in the design space include: (1) the simultaneity trap—final matches played non-simultaneously allow later teams perfect information about the required result, increasing small-loss collusion [PAGE 17]; (2) the strength-loading trap—scheduling matches between similarly strong teams late (Schedule 2) concentrates point security early and elimination early, producing the worst iRR competitiveness profile [PAGE 16]; (3) the compounding trap—collusion risk scales with match count, rising from 10.18% season-level probability over 96 group-stage matches to 21.73% over 144 iRR matches [PAGE 14]; and (4) the tie-break trap—reverting from goal difference to head-to-head would invalidate the integer programming shortcuts in Section 4.1 and likely resurrect bilateral collusion incentives [PAGE 5, PAGE 13].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes how teams revert to low-effort equilibria once their prize is fixed. The paper cites Courty and Cisyk (2024), Page and Page (2009), and Szymanski (2003) for the proposition that effort declines when a team’s prize outcome is determined [PAGE 2]. Table 9 shows this regression is rank-dependent: in the iRR format, rank-1 teams secure their Round of 16 prize with probability 1.02% after round 6 slot 1 but 38.97% by round 6 slot 4, while middle-ranked teams (ranks 9-24) remain in the longest uncertainty window because they must simultaneously be eliminated from top 8 and guaranteed a top-24 place [PAGE 16]. Strongest and weakest teams fix their prizes earliest; middle teams are the last to know.

The counter-trap operates at the margin between format gain and integrity loss. While the iRR reduces stakeless matches from 2.78% to 0.75% and asymmetric matches from 10.28% to 5.14%, it raises collusive matches from 0.11% to 0.17% [PAGE 14]. Table 8 decomposes iRR collusion: 13.34% of collusion opportunities secure top 8 for both teams via a tie, 32.73% secure top 24 for both via a tie, 35.21% split top 8 and top 24 via a tie, and 18.72% via a small loss [PAGE 15]. This is the recursive theory of mind in action: each team models the other’s indifference set and discovers aligned incentives where neither has a dominant reason to compete fully. The increase is small per match but non-negligible at season scale (21.73% probability of at least one collusion opportunity in iRR vs 10.18% in group stage) [PAGE 14].

The clock layer structures information revelation. The group stage has six matchdays; non-competitive matches cannot occur before round 5, so round order before round 5 is irrelevant to competitiveness [PAGE 8-9]. The iRR has eight matchdays, with round 7 played in four time slots and round 8 in a single simultaneous slot [PAGE 14-15]. Table 7b shows competitiveness collapses in round 8 slot 1 to 61.42% (stakeless 5.55%, asymmetric 31.69%, collusive 1.34%), confirming that non-competitive matches concentrate in later rounds [PAGE 15]. The clock thus creates a deadline effect: prize fixation probabilities rise monotonically across time slots within each rank [PAGE 16, Table 9b], and the final simultaneous slot is the only protection against information cascade collusion.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The model is conditionally veto-proof only under ceteris paribus assumptions across physical, scheduling, and environmental layers.

Physical layer: The scheduling IP enforces exactly one match per team per round (eq. 24) and at most two consecutive home or away matches (eq. 28-29), but it does not encode minimum rest days, travel distance, or cumulative fatigue [PAGE 8-9]. If UEFA compresses matchdays around international breaks or European fixture congestion, the draw and schedule remain formally feasible while the physical recovery constraint is violated. Because the Poisson model treats match outcomes as independent and uses static pre-season Elo ratings without in-season updates [PAGE 10-11], physical degradation across the eight-matchday iRR is exogenous to the model. A veto trigger would be empirical evidence that teams playing matches on short rest exhibit systematically different lambda parameters, breaking the independence assumption.

Biomechanical/weather layer: The Elo win-probability equation embeds a fixed +100 home advantage (eq. 40), and the lambdas are log-linear in Elo difference (eq. 42-43) [PAGE 11]. Weather-driven postponements, pitch conditions, or temperature extremes are not represented; the model assumes all scheduled slots occur and outcomes are independent [PAGE 11]. If a round-8 match is postponed for weather, the simultaneous-final-slot protection dissolves, and the later-played match gains perfect information about required results—the exact collusion-enhancing condition the paper warns against [PAGE 17]. Under such a shock, the iRR’s collusive percentage (0.17%) is not robust.

Veto adjudication: The paper’s central claim—that iRR yields proportionally more competitive matches—holds under fixed schedules, exogenous outcomes, and simultaneous final rounds. It is vetoed if (a) physical constraints force non-simultaneous final matchdays, which the conclusion explicitly identifies as increasing match-manipulation opportunities [PAGE 17], or (b) weather/postponement breaks the simultaneity of round 8, converting the 1.34% collusive rate observed in round 8 slot 1 into a season-wide risk above the group-stage baseline [PAGE 15]. The model does not internalize these layers; they are external veto conditions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with testable predictions:

Scenario 1: Non-simultaneous final round in iRR.
Verifiable condition: UEFA schedules round 8 across multiple time slots rather than simultaneously.
Prediction: Based on Table 7b, round 8 slot 1 already yields only 61.42% competitive matches with collusive at 1.34% [PAGE 15]. If later matches observe earlier results before kickoff, information cascades will raise collusive matches above the 0.17% baseline and shift asymmetric/stakeless shares toward the group-stage pattern. The paper states that non-simultaneous final games make small-loss collusion more likely because later teams know the minimum required result [PAGE 17].
Veto rule: If observed collusive share in a non-simultaneous iRR implementation exceeds 0.5%, the format’s net competitiveness claim is vetoed.

Scenario 2: Tie-break reversion to head-to-head.
Verifiable condition: iRR primary tie-breaker changes from total goal difference to head-to-head results.
Prediction: The integer programs in Section 4.1 require goal difference as the first tie-breaker to avoid additional checks [PAGE 5]. Csató (2023) demonstrates that head-to-head tie-breakers increase collusion opportunities [PAGE 2-3, PAGE 13]. Under head-to-head, bilateral match outcomes directly determine ranking, creating explicit manipulation incentives in paired fixtures. Collusive percentage would likely exceed 0.17%, eroding part of the stakeless/asymmetric gain.
Veto rule: If head-to-head implementation raises collusive matches above 0.3% or competitive matches below 90%, the original conclusion is invalidated.

Scenario 3: Recalibrated outcome model for iRR playing style.
Verifiable condition: Poisson lambda parameters are retrained on iRR match data rather than historical group-stage data.
Prediction: Csató (2025a) argues iRR encourages attacking play and reduces draw probability [PAGE 11]. The current model predicts draw frequencies near 20-30% across seasons [PAGE 11-12, Table 4]. Since collusion frequently relies on ties or small losses [PAGE 6], fewer draws may reduce collusive matches below 0.17% and potentially raise competitive matches above 93.94%. Conversely, if the model overestimates home advantage or draw rates, competitive match estimates are biased downward.
Veto rule: If a recalibrated iRR-specific model shifts competitive matches below 90% or collusive matches above 0.3%, the reported 93.94% competitive figure is not robust.
</RLVR_COUNTERFACTUAL_VETOES>