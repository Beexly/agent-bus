---
source: "2007 - Rating the ratings A comparison of methods for ranking college ice hockey teams - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2007"
pages: 4
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3517
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Rating the Ratings: A Comparison of Methods for Ranking College Ice Hockey Teams" by Julia Palmateer and Robin Lock from the 2007 New England Symposium on Statistics in Sports.

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is provided as a markdown/PDF extraction. It's somewhat garbled due to PDF table extraction, but I can work with it. The user says "PAGES: 4" but only provided one block of text. I should cite [PAGE 1] etc. where relevant, or note that the provided text appears to be from the document. Since the text is one continuous block, I'll treat it as the source content and reference [PAGE 1] for the provided excerpt, or perhaps note that specific tables/sections appear on specific pages. However, since I don't have actual page breaks, I should be careful. I can cite [PAGE 1] for the provided source text since that's what's given. But the user might expect me to reference specific pages. Given the constraint "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes," I should cite [PAGE 1] for the text provided. I'll make reasonable page attributions based on the flow, but since it's all one block, I'll cite [PAGE 1] for the content extracted here, or perhaps note that the document contains tables and text. Actually, looking at the text, it seems to be a full paper extraction. I'll cite [PAGE 1] as the source for all quotes since that's what's provided, but maybe split into [PAGE 1]-[PAGE 4] logically? The user said PAGES: 4, implying the source is 4 pages. I can reference [PAGE 1], [PAGE 2], [PAGE 3], [PAGE 4] for different sections, but since I don't know exactly what's on which page, I should be honest and cite [PAGE 1] for the provided block, or make educated guesses. To be safe and compliant, I'll cite [PAGE 1] for all verbatim quotes from the provided text, and note that the source document is 4 pages.

Wait, the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since I only have one text block labeled as the source, I should probably cite [PAGE 1] throughout, or perhaps treat the whole thing as [PAGE 1]-[PAGE 4] without specific knowledge. Better to cite [PAGE 1] for the provided excerpt and avoid fabricating page numbers for content I can't verify. I'll explicitly state that all citations refer to the provided 4-page source document, with [PAGE 1] marking the provided extraction.

Now let's analyze the paper content:

Key elements:
- Problem: Ranking college ice hockey teams when teams play majority of games within leagues of differing strength.
- Methods compared: WPct (Raw Winning Percentage), RPIw (Ratings Percentage Index), KRACH (Ken's Rating for American College Hockey).
- Simulation: Monte Carlo, 1000 seasons, 32 women's teams, actual 2006-7 schedule, team abilities based on real results, CHODR simulation.
- Hypothetical: Strong vs. Weak league (Ivy vs Holly), 12 teams in Women's ECAC.
- CHODR method: Goals for A ~ Poisson(λ_AB), λ_AB = Off_A × Def_B × H^±1 × µ. µ = average scoring rate (~3.0), H = home ice advantage (~1.05).
- True rankings: Expected winning percentage EWPct = (ΣP(Win) + ½ΣP(Tie)) / #Opponents, assuming balanced schedule.
- Results: WPct biased toward weak schedules. RPI still gives some advantage to weaker leagues. KRACH does best job of balancing equivalent teams from different strength leagues.
- Formulas:
  - RPIw = 3.0 * WPct + 0.024 * AvgOppWpct + 0.046 * OppOppWpct (Wait, text says "3.0* WPct + .024* AvgOppWpct + .046* OppOppWPct" but standard RPI is 0.25 WPct + 0.50 OppWPct + 0.25 OppOppWPct. The text seems garbled: "RPIw = 3.0* _WPct_ + .024* _AvgOppWpct_ + .046* _OppOppWPct_ Or other weights, e.g. 25%, 21%, 54% for _RPIm_". This looks like OCR errors where percentages lost decimals. Standard NCAA RPI is 0.25*WPct + 0.50*OppWPct + 0.25*OppOppWPct. The text mentions weights 25%, 21%, 54%? Actually "25%, 21%, 54%" sums to 100%. For men's weights maybe different. But I should quote verbatim what's in the source and note the OCR/extraction issues.
  - KRACH: Recursively-defined Bradley-Terry model. KRACH = K_You = sum over [WinRatio * Games] / sum over [K_You * K_Opp * Games / (K_You + K_Opp)]? The text is garbled: "_KRACH_ = _KYou_ = ∑ _WinRatio_ 1 ∗ _Games_ ∑ _KYouK_ + _OppKOpp Games KYou_ + _KOpp_ Standardize so that WPct=0.500 � Krach=100". I need to reconstruct the Bradley-Terry/KRACH equation formally and state assumptions.
  - EWPct formula: EWPct = [Σ P(Win) + ½ P(Tie)] / # Opponents.

Important: No betting lines. I must not mention spreads, totals, moneylines, odds. I can mention probabilities, win percentages, expected values, but not betting odds.

Word count: >= 1000 words total across sections. THINK_TRACE alone >= 400 words.

Let's plan each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Discuss the causal chain from schedule strength -> observed WPct -> bias in ranking methods. Analyze the simulation design (32 teams, Poisson scoring, home ice H=1.05, µ=3.0). Gray zones: OCR errors in formulas (RPI weights), garbled tables, undefined "Holly" league (typo for Ivy?), small sample of simulated seasons (1000), assumption that true abilities known. Multi-hop: If league strength differs, WPct correlates with schedule strength; RPI attempts to correct via opponent WPct but only one/two levels deep; KRACH uses recursive Bradley-Terry to iteratively solve for team strengths. Breakdown regimes: when schedules are completely disconnected between leagues, KRACH may not converge or may be sensitive to initialization; Poisson assumption breaks down in low-scoring hockey (ties, overtime rules); home ice advantage constant across venues.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
- Poisson scoring: $G_A \sim \text{Poisson}(\lambda_{AB})$, $\lambda_{AB} = \text{Off}_A \times \text{Def}_B \times H^{\pm 1} \times \mu$.
- Units: $\mu$ in goals per game (dimensionless rate), $H$ dimensionless multiplier (~1.05), Off/Def dimensionless relative factors.
- EWPct: $\text{EWPct} = \frac{\sum_{j \in \text{Opponents}} P(\text{Win}_{ij}) + \frac{1}{2} P(\text{Tie}_{ij})}{N_{\text{opp}}}$.
- RPIw (as extracted): $\text{RPIw} = 3.0 \cdot \text{WPct} + 0.024 \cdot \text{AvgOppWpct} + 0.046 \cdot \text{OppOppWpct}$ — flag likely OCR corruption; standard form $\text{RPI} = w_1 \text{WPct} + w_2 \text{OppWPct} + w_3 \text{OppOppWPct}$ with $\sum w_k = 1$.
- KRACH: Bradley-Terry recursive fixed point. Let $K_i$ be rating for team $i$. Expected win probability $p_{ij} = \frac{K_i}{K_i + K_j}$. The KRACH algorithm solves $K_i = \frac{\sum_j W_{ij}}{\sum_j \frac{K_j}{K_i + K_j} G_{ij}}$? Actually standard KRACH: $K_i = \frac{\text{Wins}_i}{\sum_j \frac{K_j}{K_i+K_j} \cdot G_{ij}}$? Need to derive properly. Bradley-Terry: $P(i \text{ beats } j) = \frac{K_i}{K_i + K_j}$. The maximum likelihood or iterative update: $K_i^{(new)} = K_i^{(old)} \frac{W_i}{\sum_j \frac{K_j}{K_i^{(old)} + K_j} G_{ij}}$. I'll present the fixed-point equation and note standardization to WPct=0.500 corresponds to K=100.
- Cite [PAGE 1] for all.

<RETROCAUSAL_GENEALOGY>: Historical lineage: RPI (NCAA basketball, 1981), KRACH (Ken Butler, USCHO), Bradley-Terry model (1952), CHODR (Lock & Danehy, STATS Vol. 13 pp. 0-14 per reference). Multi-week traps: Over a multi-week conference season, early-season non-conference results get diluted; teams in weak leagues can inflate WPct; KRACH's recursive nature means a single upset early can propagate through iterations (trap: rating instability in first 3-4 weeks of season when few games connect leagues).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: When a committee sees a team with high WPct but weak schedule, they regress to raw win percentage (habit). Counter-trap: Using KRACH or RPI to adjust. Clock: The simulation runs 1000 seasons; averaging over time reduces noise but schedule bias persists structurally. Discuss how selectors might overweight recent form (crisis habit) vs strength of schedule.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Ice hockey: rink dimensions (IIHF vs NHL), ice temperature, humidity, altitude (e.g., games in Denver/Alaska), travel fatigue across time zones. These are physical layers that can violate the Poisson model assumption of constant $\lambda_{AB}$. For example, high altitude reduces scoring or affects player stamina; back-to-back games cause fatigue not captured by Off/Def parameters. Veto: if a game is played at extreme altitude or with significant travel, the CHODR $\lambda$ is invalid without a weather/altitude covariate.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable veto scenarios + predictions.
1. Scenario: Two teams from disconnected leagues (no common opponents) are compared by KRACH. Prediction: KRACH ratings fail to identify relative strength because the Bradley-Terry graph is not connected; the Perron-Frobenius eigenvector is not unique or requires arbitrary normalization. Veto condition: Graph of games has >1 connected component.
2. Scenario: Poisson assumption with $\mu=3.0$ and home ice $H=1.05$ applied to an outdoor game (e.g., NHL Heritage Classic) with temperature below -10°C. Prediction: Scoring rate deviates significantly from Poisson $\lambda$; puck behavior and player performance change. Veto condition: Ambient temperature outside [-5°C, 15°C] or precipitation.
3. Scenario: A team plays 4 games in 5 nights across three time zones. Prediction: Fatigue induces non-stationarity in Off/Def; the model's static ability parameters violate the i.i.d. assumption. Veto condition: Inter-game recovery < 48 hours plus >2 time zones crossed.

Word count check: I need to ensure each section is substantial. THINK_TRACE >= 400 words. Total >= 1000 words.

Let's write.

Important: Do not mention betting lines. I will avoid any reference to odds, spreads, etc.

I need to use verbatim quotes from source. Examples:
- "Rating the Ratings: A Comparison of Methods for Ranking College Ice Hockey Teams"
- "Use Monte Carlo simulation of many seasons to compare the effectiveness of different ratings methods to rank order teams with assumed “known” abilities."
- "Goals for A ~ Poisson(λAB) where λAB = OffA × DefB ⋅ H ± 1 µ"
- "KRACH does the best job of balancing equivalent teams from different strength leagues."
- "Obviously WPct is strongly biased to favor teams playing a weaker schedule."
- "RPI still gives some advantage to teams from the weaker league, more so for the womens weights than the mens."
- References: "John Whelan’s RPI page", "USCHO’s KRACH FAQ", "Lock, R. and Danehy, T. “CHODR - Using Statistics to Predict College Hockey”, STATS, Vol. 13, pp. 0-14".

I'll cite [PAGE 1] for these since that's the provided text. I'll add a note that page markers refer to the provided 4-page extraction.

Let's draft carefully.

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

I will ensure no betting terms. Use "win probability" not "odds".

Let's write the content now, keeping an eye on word count.

THINK_TRACE target ~500 words.
SOURCE_OPERATORS ~300 words.
RETROCAUSAL ~250 words.
RECURSIVE_TOM ~250 words.
CROSS_LAYER ~250 words.
RLVR ~250 words.
Total ~1800 words. Good.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core inferential chain begins with a structural identification problem: college ice hockey teams play most games within conferences of heterogeneous strength, so raw winning percentage (WPct) is confounded by schedule difficulty. The authors posit “known” team abilities via offensive and defensive parameters (Off, Def) and simulate 1,000 seasons using the CHODR Poisson scoring process. The first hop is the generative model: when team A visits team B, goals for A follow Poisson(λ_AB), where λ_AB = Off_A × Def_B × H^(±1) × µ. The average scoring rate µ is fixed near 3.0 goals per game and home ice H is set to 1.05, implying a roughly 5 percent multiplicative intensity shift for the home side. Because the Poisson mean is linear in the product of team-specific parameters, the model implicitly assumes separable, stationary abilities across opponents and venues—a strong assumption given hockey’s low-scoring, tie-prone nature.

The second hop constructs a counterfactual “true” ranking. The authors compute expected winning percentage (EWPct) under a balanced schedule by averaging P(Win) + ½P(Tie) over all opponents, then rank by EWPct. This establishes an oracle ranking against which WPct, RPIw, and KRACH are compared. The third hop is the simulation evaluation: 32 women’s teams, actual 2006–07 schedules, 32-game seasons, and league structures modeled on ECAC/Ivy versus WCHA/Hockey East/CHA. Results show WPct is “strongly biased to favor teams playing a weaker schedule” [PAGE 1]. RPIw, despite strength-of-opponent adjustments, “still gives some advantage to teams from the weaker league” [PAGE 1]. KRACH “does the best job of balancing equivalent teams from different strength leagues” [PAGE 1].

Gray-zone audit: The source extraction is heavily OCR-degraded. The RPIw equation appears as “RPIw = 3.0* WPct + .024* AvgOppWpct + .046* OppOppWPct,” which is dimensionally and probabilistically suspect because the coefficients do not sum to one and likely reflect lost percentage formatting; standard NCAA RPI uses convex weights on WPct, opponent WPct, and opponent-opponent WPct. The KRACH equation is similarly garbled in the source text, preventing direct transcription without reconstruction from Bradley–Terry theory. The hypothetical “Holly” league is almost certainly a garbled reference to the Ivy League, and table merges obscure which rows belong to which institution. Finally, 1,000 simulated seasons reduce sampling noise but do not eliminate structural bias: if the inter-league game graph is sparse, even recursive methods may fail to separate league effects from team effects. Breakdown regime: when conferences play almost exclusively intra-league games, the design matrix for team abilities becomes block-diagonal and league strength is not identified without strong prior assumptions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All citations refer to the provided four-page source extraction [PAGE 1].

1. CHODR Poisson scoring operator (verbatim from source):
When Team A plays Team B,
\[
G_A \sim \operatorname{Poisson}(\lambda_{AB}), \qquad \lambda_{AB} = \text{Off}_A \times \text{Def}_B \cdot H^{\pm 1} \cdot \mu
\]
Units: \(\lambda_{AB}\) is expected goals per game (dimensionless rate); \(\mu \approx 3.0\) goals/game is the average scoring rate; \(H \approx 1.05\) is a dimensionless home-ice multiplier. The exponent \(\pm 1\) applies \(H\) for home games and \(H^{-1}\) for away games.

2. “True” ranking via expected winning percentage:
\[
\text{EWPct}_i = \frac{\displaystyle \sum_{j \in \text{Opponents}_i} P(\text{Win}_{ij}) + \frac{1}{2} P(\text{Tie}_{ij})}{N_{\text{opp},i}}
\]
Dimensionless probability in [0,1]. Teams are ranked by descending EWPct under a hypothetical balanced schedule.

3. WPct (Raw Winning Percentage): ties count as ½ win. Bounded in [0,1]. No strength-of-schedule correction.

4. RPIw as extracted (flagged as likely OCR-corrupted):
\[
\text{RPIw} = 3.0 \cdot \text{WPct} + 0.024 \cdot \text{AvgOppWpct} + 0.046 \cdot \text{OppOppWpct}
\]
This form is not a convex combination (weights exceed unity and do not sum to 1), suggesting decimal/percentage loss in extraction. The standard structural operator is a weighted sum \(w_1\text{WPct} + w_2\text{OppWPct} + w_3\text{OppOppWPct}\), \(\sum w_k = 1\). The source notes alternative weights such as 25%, 21%, 54% for RPIm.

5. KRACH recursive Bradley–Terry operator (reconstructed because source equation is garbled):
Let \(K_i > 0\) denote team \(i\)’s rating. The Bradley–Terry win probability is
\[
P(i \text{ defeats } j) = \frac{K_i}{K_i + K_j}.
\]
KRACH solves the fixed-point recursion implied by observed wins \(W_{ij}\) and games \(G_{ij}\):
\[
K_i = \frac{\displaystyle \sum_j W_{ij}}{\displaystyle \sum_j \frac{K_j}{K_i + K_j} G_{ij}},
\]
standardized so that a .500 team corresponds to \(K=100\). Units: dimensionless rating scale; probabilities derived from ratios of ratings.

6. Breakdown/singularity regimes:
- Poisson intensity model fails if scoring is not approximately memoryless or if \(\lambda_{AB}\) varies within a game (e.g., pull-goalie situations).
- If the inter-conference game graph is disconnected, \(K_i\) is not identified across components; relative strength between leagues cannot be inferred from outcomes alone.
- RPIw adjustment collapses if opponent winning percentages are themselves biased by weak schedules, propagating error two layers deep.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage runs backward from this 2007 NESSIS paper to three distinct traditions. First, the Ratings Percentage Index (RPI) originates in NCAA basketball selection methodology (formalized around 1981) and was adapted to hockey with sex-specific weights; the source cites John Whelan’s RPI page and USCHO’s KRACH FAQ [PAGE 1]. Second, KRACH descends from the Bradley–Terry model (1952) for paired comparisons, specialized to college hockey by Ken Butler and popularized via USCHO; it is a recursive, maximum-likelihood-style estimator rather than a linear adjustment. Third, CHODR traces to Lock and Danehy’s “Using Statistics to Predict College Hockey,” STATS Vol. 13, pp. 0–14 [PAGE 1], which establishes the Poisson scoring generator used here.

Multi-week trap: Over a multi-week conference season, the observable game graph evolves incrementally. Early non-conference contests provide the only bridges between leagues of different strength. If a selector evaluates teams after week three using WPct or shallow RPI, the schedule-strength confound is maximal because few inter-league games have occurred to anchor the comparison. KRACH mitigates this by recursive feedback, but with sparse bridging games the ratings propagate uncertainty nonlinearly: a single upset in a cross-league game can disproportionately shift all ratings within a component until the graph densifies. Thus a “true” ability ranking estimated late in the season may differ systematically from an early-season ranking not because abilities changed, but because identification of league strength requires sufficient cross-league edge density.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When a selection committee confronts a team with a bloated WPct from a weak league, the habitual recourse is to regress toward the raw number—“they win, so they are good”—because WPct is cognitively available and requires no modeling. This is a first-order theory-of-mind error: assuming the observed record directly reveals team quality without simulating the counterfactual schedule.

Counter-trap: The analyst who over-corrects by assuming KRACH is schedule-neutral commits the inverse error. KRACH reduces but does not eliminate schedule bias; its fixed-point equation assumes the Bradley–Terry win probability holds for every pairing and that the game graph is connected. If a team from a weak league plays only one cross-league game and loses, KRACH still anchors that team’s rating primarily to intra-league results, which may be inflated by weak opposition.

Clock: The simulation’s 1,000-season Monte Carlo acts as a temporal averaging device. It collapses sampling variance but cannot remove structural identification failure. The paper’s result that “under each rating method a strong team… has a better chance of finishing first by playing in a weaker league” [PAGE 1] demonstrates that the clock does not heal the design flaw: even with perfect long-run frequencies, the mapping from observed wins to true ability is biased by schedule composition. A recursive selector must therefore model the schedule-generation process explicitly, not merely iterate ratings on realized outcomes.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The CHODR model assumes \(\mu \approx 3.0\) goals per game and a constant home-ice multiplier \(H \approx 1.05\) independent of venue. This is a veto condition if a game is played at materially different altitude (e.g., high-altitude rinks) or under extreme ambient temperature and humidity that alter ice hardness, puck bounce, and player aerobic output. Biomechanical layer: player fatigue accumulates across back-to-back games and multi-time-zone travel; Off and Def parameters are treated as static, so a team playing its fourth game in five nights violates the stationarity assumption. Weather layer: outdoor or poorly climate-controlled arenas introduce non-Poisson scoring dynamics (wind affecting shooting, poor ice increasing turnovers), invalidating the constant \(\lambda_{AB}\) intensity.

Veto proof: Any game where (a) altitude differs by >1,000 m from sea-level baseline, (b) ambient temperature falls below −10 °C or exceeds 25 °C, or (c) inter-game recovery is <48 hours with trans-meridian travel, the operator \(\lambda_{AB} = \text{Off}_A \times \text{Def}_B \times H^{\pm 1} \times \mu\) is not transportable without adding covariates. The paper’s simulation holds \(\mu\) and \(H\) fixed across all 32 games; therefore its ranking comparisons are conditionally valid only within the observed arena and scheduling regime of the 2006–07 women’s season.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Disconnected league graph. Two conferences play zero games against each other. KRACH’s fixed-point equation \(K_i = \sum W_{ij} / \sum [K_j/(K_i+K_j)] G_{ij}\) admits no unique cross-conference ordering because the Bradley–Terry graph has multiple components; ratings are identified only up to a separate scale per component. Prediction: KRACH will rank teams accurately within each league but produce arbitrary inter-league rankings unless an external normalization is imposed. Veto trigger: number of connected components in the game graph > 1.

Veto Scenario 2 — Extreme environmental deviation. An outdoor conference game is played at −15 °C with high wind, far outside the \(\mu=3.0\), \(H=1.05\) calibration regime. The Poisson intensity is no longer stable; scoring drops and variance increases relative to the model. Prediction: WPct and KRACH ratings derived from that game will misestimate team ability because the likelihood model is misspecified; a model including temperature and wind covariates would outperform CHODR. Veto trigger: ambient temperature outside [−5 °C, 15 °C] or sustained wind > 20 km/h.

Veto Scenario 3 — Compressed travel schedule. A team plays four games in five nights across three time zones, with <48 hours recovery between contests. Fatigue induces time-varying Off/Def degradation, violating the static-ability assumption. Prediction: The team’s observed WPct will decline in the latter games not because of opponent strength but because of accumulated fatigue; RPIw and KRACH will attribute the decline to opponent quality and underrate the team’s true ability. Veto trigger: mean inter-game rest < 48 hours plus travel across ≥ 2 time zones within a 7-day window.
</RLVR_COUNTERFACTUAL_VETOES>