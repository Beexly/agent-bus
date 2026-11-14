---
source: "2022 - Zero Running Backs or Zero Points An Analysis on the Optimal Fantasy Football Draft Strategy - Heller et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2022"
pages: 2
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3287
---

<NATIVE_REASONING>
The user wants me to analyze a specific source paper about fantasy football draft strategy (Zero-RB strategy). I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text provided is pages 2 (likely meaning page 2 of the document, though the text seems to cover the whole paper). I need to cite exact [PAGE N] markers. Since the user says "PAGES: 2" and the source text is provided, I should reference [PAGE 2] for the content. Actually, looking at the source text, it appears to be the full text but marked as page 2. I will cite [PAGE 2] where appropriate based on the provided source text.

Let me structure this carefully.

THINK_TRACE: Needs >=400 words. Deep multi-hop derivation & gray-zone audit. I need to analyze the paper's methodology, the normal distribution assumption for ADP (rnorm), the snake draft simulation, the 100 simulations x 12 experiments x 10 years = 2,016,000 picks calculation, the exclusion of 2012-2013, the lack of kickers, no trades/waivers, the conclusion that Zero-RB doesn't work optimally and draft is based primarily on luck. Gray zones: normality assumption for ADP may be violated (ADP is discrete, bounded, skewed), snake draft positional limits, sorting by position then fantasy points may not reflect actual lineup construction, standardization by year may remove inter-year variance that matters, injury data is anecdotal (APEX blog), PPR only, no real ADP distribution data from Sleeper/ESPN.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I need to formalize:
- ADP ~ Normal(mean=ADP_i, sd=SD_i)
- rnorm(n, mean, sd)
- Draft order: snake draft, 12 teams, 14 rounds
- Random draft position generation
- Sorting: POS QB WR WR RB RB TE DEF (starting lineup slots?)
- Total picks: 12 teams × 14 rounds × 100 sims × 12 experiments × 10 years = 2,016,000
- FPT standardization
- Zero-RB constraint: no RBs in rounds 1-5, then RBs from round 6 onward
- Breakdown regimes: normality assumption breakdown when ADP distribution is skewed/discrete; small sample n=10 years; exclusion of 2012-2013 creates survivorship bias; no waiver wire means static roster; injury not modeled dynamically despite being central hypothesis.

RETROCAUSAL_GENEALOGY: Historical lineage of Zero-RB (Footballguys, 2010s, Shawn Fitzgerald, etc.), scientific lineage (draft value over replacement, positional scarcity, risk-return), multi-week traps (early season injury variance, bye weeks, game script regression).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (managers regress to standard under pressure), counter-trap (everyone drafting Zero-RB makes RBs cheap late but WRs expensive early), clock (draft clock pressure, snake draft turn times).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since this is fantasy football, physical layer: RB injury susceptibility (contact load, cut rate), WR injury profile (non-contact, hamstring), QB durability. Weather: not in model. Veto: any conclusion about injury that ignores snap count, playing surface, temperature, turf type is vetoed. Biomechanical: RB high eccentric load vs WR high acceleration.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
1. If ADP normality is violated (empirical ADP is left-skewed/discrete), the rnorm simulation overestimates late-round RB value; prediction: Zero-RB performance degrades in real drafts vs simulation.
2. If waiver wire/trades are included, Zero-RB gains advantage due to roster flexibility; prediction: Zero-RB win rate increases by >10 percentage points in dynamic leagues.
3. If injury is modeled as position-specific hazard rather than anecdotal blog quote, and 2012-2013 are included, RB scarcity premium changes; prediction: Zero-RB optimal in high-injury years, suboptimal in low-injury years (year-to-year interaction).

I must ensure no betting lines. No spreads, totals, moneylines, odds. I can mention probability but not betting odds.

Word count: >=1000 words total across sections. THINK_TRACE alone >=400.

Let me draft carefully with citations [PAGE 2]. I'll use verbatim quotes where possible from the source.

Let's write.

THINK_TRACE (>=400 words):
- Discuss the paper's claim and methodology.
- Multi-hop: ADP -> rnorm -> snake draft -> sort -> loop -> FPT -> conclusion.
- Gray zones: normality assumption, hand-cleaned CSV, no kickers, no trades, exclusion of years, PPR only, injury evidence from blog not peer-reviewed, standardization removing year-to-year mean shifts, "luck" conclusion may be artifact of simulation design.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define i ∈ {QB, WR, RB, TE, DEF}
- ADP_i ~ N(μ_i, σ_i²), draw via rnorm(1, μ_i, σ_i)
- Snake draft: order reverses each round, 12 teams, 14 rounds
- Zero-RB constraint: x_{t,r} ≠ RB for r ∈ {1,...,5}
- Starting lineup sort: [QB, WR, WR, RB, RB, TE, DEF]
- Season FPT = sum over starters
- Monte Carlo: 100 sims × 12 experiments × 10 years × 168 picks = 2,016,000
- Breakdown: normality fails for discrete bounded ADP; n_years=10 insufficient for heavy tails; 2012-2013 exclusion biases toward specific ADP regimes; no waiver wire violates roster adaptation.

RETROCAUSAL_GENEALOGY: Zero-RB popularized ~2013-2015 (Footballguys, ESPN analysts), rooted in positional scarcity (RB by committee devalues early RBs), PPR inflation of WRs, injury epidemiology. Multi-week traps: Week 1 injury variance, bye week clustering, game script (positive game script reduces RB carries).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression = managers under draft clock revert to "safe" RBs; counter-trap = if league adopts Zero-RB, WR prices rise and late RB value increases, making Zero-RB self-defeating; clock = draft timer induces System 1 heuristic (name recognition), exactly what the paper warns against.

CROSS_LAYER_VETO_ADJUDICATION: Veto any injury claim that doesn't control for contact volume, surface, temperature, snap share. Physical: RBs sustain 3-5x more contact per touch than WRs (biomechanical). Weather: cold/wet increases RB fumble and injury risk but model omits weather. Therefore paper's injury-based hypothesis is under-specified; veto applies to universal Zero-RB dismissal.

RLVR_COUNTERFACTUAL_VETOES:
1. Veto if empirical ADP distribution fails Shapiro-Wilk normality (p<0.05) due to discreteness/bunching; prediction: simulated Zero-RB ROI overstated by ≥15% vs live drafts.
2. Veto if waiver wire/FAAB enabled; prediction: Zero-RB expected finish improves from bottom half to top quartile because late-round RB stash has option value.
3. Veto if 2012-2013 included and injury hazard λ_RB(t) > λ_WR(t) by >0.15 games/season; prediction: Zero-RB dominance reverses in high-λ_RB years, confirming year-to-year interaction not luck.

Now I need to make sure total words >=1000. Let me expand each section substantially.

I must cite [PAGE 2] for source text since pages provided is 2. I will cite [PAGE 2] throughout.

Let me write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit:

The source paper (Wharton Sports Analytics Journal, Fall 2022; Heller et al.) advances a hypothesis that the Zero-RB draft strategy—deferring running back selection until approximately round six while loading early rounds on wide receivers, tight ends, and quarterbacks—will outperform conventional "standard" drafting. The authors operationalize this through a Monte Carlo draft simulator. The derivation chain is: (1) aggregate ADP, standard deviation, and average fantasy points by position; (2) model each player's realized draft position as a draw from a normal distribution centered on ADP with position-specific SD via rnorm(n, mean, sd); (3) execute a 12-team, 14-round snake draft under positional limits; (4) sort each roster by position into a starting lineup of QB, WR, WR, RB, RB, TE, DEF; (5) aggregate fantasy points total (FPT) over ten years and 100 simulations per experimental condition, yielding 2,016,000 total picks; and (6) compare Zero-RB against standard, auto-draft, and "other" strategies. [PAGE 2]

The first gray-zone is the normality assumption for ADP. ADP is a discrete, bounded, and typically right-censored integer variable (draft slots 1 through 168 in a 12-team, 14-round draft). Assigning a continuous normal curve via rnorm permits non-integer, sub-1, and above-168 draw outcomes that have no physical draft meaning, and it ignores the well-documented bunching of ADP around consensus tiers. If the true ADP generative process is multimodal or skewed—an almost certainty in fantasy markets driven by tier-based consensus—the normal approximation introduces systematic measurement error into every subsequent pick simulation. [PAGE 2]

A second gray-zone is the exclusion of 2012 and 2013 "due to a lack of data for player ADPs." [PAGE 2] This is not a random missingness mechanism; those years may represent distinct ADP regimes (e.g., pre- or post-PPR normalization, different RB scarcity structures). Deleting them conditions the analysis on a selected subset of years, potentially erasing the very year-to-year variance the authors later cite as decisive. Their conclusion that "Random year to year variation in player productivity changes outcomes" [PAGE 2] may therefore be an artifact of truncated temporal range rather than evidence of fundamental luck.

Third, the model eliminates trades and FAAB/waiver wire activity. [PAGE 2] Zero-RB derives much of its strategic value from roster optionality: acquiring injured or handcuff running backs after early-season attrition and trading depth at a position of strength. A static draft-only simulation strips this dynamic layer, structurally biasing against Zero-RB. The paper's own data source admits they "Did not have real life data from Sleeper, ESPN, etc to ensure normality in ADP distribution," [PAGE 2] which undermines external validity.

Fourth, the injury premise rests on a single blog citation (APEX Fantasy Football Insider) claiming top-30 running backs miss 0.86 more games per season than top-30 wide receivers, [PAGE 2] yet the simulation never models injury as a stochastic hazard. Injury is asserted qualitatively but not integrated into the rnorm ADP or FPT generation. This creates an internal inconsistency: the hypothesis is injury-driven, but the engine is injury-blind.

Fifth, standardization "by position, grouped by year" [PAGE 2] removes inter-year mean shifts in scoring environment. If PPR scoring inflation or rule changes differentially lift WR or RB totals across years, standardization erases the signal that might make Zero-RB optimal in specific regimes. The authors conclude the draft is "based primarily on luck," [PAGE 2] but "luck" here is partly a modeling residue: omitted waiver dynamics, hand-cleaned CSV data prone to error, exclusion of kickers, and a normality assumption that may not hold.

Finally, the computational scale (100 simulations × 12 experiments × 10 years × 168 picks = 2,016,000 picks) [PAGE 2] provides precision within a misspecified model. Large simulation counts reduce Monte Carlo error but cannot correct structural bias from non-normal ADP, static rosters, or deleted years. The gray-zone audit therefore rates the Zero-RB rejection as conditionally valid only under the paper's narrow, static, normal-distribution assumptions; it does not generalize to live drafts with waiver wires, empirical ADP skew, or multi-season injury adaptation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, page citations, and breakdown regimes:

Let positions be indexed by \(p \in \{\mathrm{QB}, \mathrm{WR}, \mathrm{RB}, \mathrm{TE}, \mathrm{DEF}\}\). For each player \(i\), the source provides average draft position \(\mu_i\) (ADP, units: draft slot, discrete integer domain \(1 \dots 168\)), standard deviation \(\sigma_i\) (units: draft slots), and mean fantasy points total \(\bar{\mathrm{FPT}}_i\) (units: fantasy points, PPR scoring). [PAGE 2]

Draft-position simulation operator:
\[
\tilde{\mathrm{ADP}}_i \sim \operatorname{Normal}(\mu_i, \sigma_i^2)
\]
implemented as \(\texttt{rnorm}(n=1,\ \text{mean}=\mu_i,\ \text{sd}=\sigma_i)\). Units: draft slots. Breakdown regime: \(\tilde{\mathrm{ADP}}_i \notin \mathbb{Z}^+\) or \(\tilde{\mathrm{ADP}}_i > 168\) generates non-physical draft slots; the continuous normal density assigns non-zero mass outside the feasible simplex, violating the bounded discrete support of real ADP. [PAGE 2]

Snake-draft operator: 12 teams, 14 rounds, alternating pick order reversal each round. Total pick capacity per simulation:
\[
N_{\text{picks}} = 12 \times 14 = 168 \text{ picks per team-season roster.}
\]
Monte Carlo expansion:
\[
N_{\text{total}} = 100 \text{ sims} \times 12 \text{ experiments} \times 10 \text{ years} \times 168 \text{ picks} = 2{,}016{,}000 \text{ picks.}
\]
[PAGE 2]

Zero-RB constraint operator:
\[
x_{t,r} \neq \mathrm{RB} \quad \forall r \in \{1,2,3,4,5\},
\]
where \(x_{t,r}\) is the position drafted by team \(t\) in round \(r\). Beginning at round 6, RBs are eligible. [PAGE 2]

Roster sort and starting lineup operator (verbatim from source: "POS QB WR WR RB RB TE DEF"): [PAGE 2]
\[
\mathcal{S} = [\mathrm{QB},\ \mathrm{WR},\ \mathrm{WR},\ \mathrm{RB},\ \mathrm{RB},\ \mathrm{TE},\ \mathrm{DEF}]
\]
Season FPT aggregation:
\[
\mathrm{FPT}_{\text{season}} = \sum_{j \in \mathcal{S}} \mathrm{FPT}_j
\]
(units: fantasy points; PPR scoring system only). [PAGE 2]

Breakdown / singularity regimes:
1. **ADP normality failure**: empirical ADP is discrete and tier-clustered; Shapiro-Wilk rejection (\(p < 0.05\)) invalidates \(\operatorname{Normal}(\mu_i, \sigma_i^2)\). [PAGE 2]
2. **Temporal truncation**: exclusion of 2012–2013 removes low-ADP-data years; estimator is conditional on \(Y \in \{2014,\dots,2021\}\) and not generalizable to deleted regimes. [PAGE 2]
3. **Static-roster singularity**: omission of trades and waiver wire means \(\partial \mathrm{FPT} / \partial \text{in-season transaction} = 0\), structurally suppressing Zero-RB's option value. [PAGE 2]
4. **Injury-measurement decoupling**: hypothesis cites injury differential (0.86 more games missed for top-30 RBs vs. top-30 WRs) [PAGE 2], but no injury hazard \(\lambda_p(t)\) enters \(\mathrm{FPT}\) or ADP generation; the model cannot test its own causal mechanism.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The Zero-RB concept sits in a historical lineage extending roughly from 2012–2015 fantasy-analytics discourse, when analysts began noting that running back by committee, PPR scoring, and WR touchdown regression had compressed early-round RB value while inflating WR ceiling. The source paper's injury citation (APEX blog: top-30 RBs miss 0.86 more games than top-30 WRs) [PAGE 2] echoes that lineage but predates rigorous injury-survival modeling in fantasy contexts. Scientifically, the paper inherits from positional-scarcity and value-over-replacement frameworks: draft value is a function of replacement-level slope at each position, not raw points. If the replacement WR in round 8 scores near the replacement RB in round 8, early RB investment has negative marginal expected value.

The "multi-week trap" relevant here is temporal misalignment between draft-day selection and season-long attrition. Zero-RB is not a round-1-through-5 decision only; it is a 17-week (or 18-week) roster-management strategy contingent on waiver acquisition, injury replacement, and bye-week coverage. The source explicitly removes trades and FAAB/waiver wire [PAGE 2], which severs the strategy from its actual operational context. A second trap is standardization grouped by year [PAGE 2], which strips inter-year scoring-environment shifts. If 2015 was a WR-scoring surge year and 2018 an RB-surge year, standardizing within year erases the regime signal that would make Zero-RB optimal in one year and suboptimal in another. The authors' conclusion that outcomes depend on "random year to year variation" [PAGE 2] is therefore partly a self-fulfilling artifact of their standardization and temporal truncation choices.

A third trap is injury timing: early-season RB injuries (Weeks 1–4) create waiver opportunities that favor Zero-RB drafters with WR depth, while late-season injuries matter less due to playoff structure. The model's static draft-and-sort design cannot capture this within-season hazard function, rendering its injury hypothesis untestable within the simulation itself.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Recursive theory of mind in draft strategy concerns what managers believe other managers will do, and how those beliefs shift under pressure. Three nested layers apply.

Layer 1 — Crisis habit regression: Under draft-clock pressure and name-recognition bias [PAGE 2], managers regress to the "standard" heuristic of drafting RBs early because RBs are perceived as safe anchors. The paper identifies this as a failure mode (subjective bias, auto-draft, injury susceptibility) [PAGE 2]. Under time stress, System 1 thinking dominates, and the conventional strategy becomes a Nash habit even if ex ante suboptimal.

Layer 2 — Counter-trap: If a critical mass of managers in a 12-league adopts Zero-RB, early-round WR and QB prices rise due to excess demand, while late-round RBs become over-supplied. The strategy then self-defeats: Zero-RB drafters pay premium prices for WRs and receive diminished marginal value from round-6+ RBs because too many managers are chasing the same late-round value. The paper's simulation treats 12 teams as fixed experimental conditions [PAGE 2] but does not model endogenous strategy adoption; it cannot detect this equilibrium unraveling.

Layer 3 — Clock: The snake-draft clock imposes a hard computational constraint on each pick. As remaining time decreases, managers abandon model-based reasoning and revert to ADP anchor or subjective bias [PAGE 2]. The Zero-RB strategy requires disciplined deviation from consensus for five consecutive rounds; each round increases cognitive load and the probability of regression to the mean (standard drafting). Thus the clock acts as an adversarial force that raises the effective cost of maintaining a contrarian draft plan, especially in rounds 2–5 when RB scarcity narratives peak.

The recursion closes when managers anticipate that others will regress under clock pressure, making early RBs under-drafted relative to value, which briefly reopens a Zero-RB window—until the counter-trap adjusts prices again. The paper's static simulation cannot represent this dynamic fixpoint.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof:

Any causal claim that running backs are categorically too injury-prone to draft early must survive veto at three layers. First, the physical layer: RBs sustain substantially higher contact load per touch than WRs, with greater exposure to tackling, pile collisions, and lower-extremity torsional load. The source cites a 0.86-game seasonal absence differential [PAGE 2] but does not model contact volume, snap share, or playing-surface interaction. Veto applies to any universal injury-based dismissal of early RBs that ignores contact dose.

Second, the biomechanical layer: WRs exhibit high-acceleration, non-contact soft-tissue injury patterns (hamstring, Achilles) that are less predictable from draft position than RB contact injuries. Age, route tree, and separation style matter more than raw ADP. The paper's normal-distribution ADP model cannot encode these biomechanical covariates; therefore the simulation treats injury risk as exchangeable across players within a position, which is physically false.

Third, the weather layer: temperature, precipitation, and turf type differentially affect RB fumble rate, WR grip and separation, and injury risk. Cold/wet conditions increase RB rushing variance and slip/fall injury probability; the model contains no weather operator. Because the source excludes weather entirely [PAGE 2], any conclusion about optimal draft strategy is vetoed for outdoor late-season games where weather modulates position-specific value.

Adjudication: The paper's rejection of Zero-RB is provisionally accepted only under indoor, static-roster, normal-ADP, no-waiver conditions. It is vetoed as a generalizable prescription because the physical and biomechanical injury mechanisms it cites are not simulated, and weather-dependent in-season variance is omitted. The conclusion that drafting is "primarily luck" [PAGE 2] cannot be sustained when the model deliberately removes the physical layers (injury hazard, weather, contact load) that generate non-luck differential outcomes.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios, each with a falsifiable prediction:

Veto Scenario 1 — Empirical ADP normality violation:
Condition: If a live ADP sample from Sleeper, ESPN, or Fantasy Football Calculator (12-team PPR) fails a Shapiro-Wilk normality test at \(p < 0.05\) because ADP is discrete, bounded, and tier-bunched [PAGE 2], then the \(\texttt{rnorm}(\mu_i,\sigma_i)\) generator is invalid. Prediction: Zero-RB expected season FPT in the simulation is overstated relative to live drafts by at least 10–15 percentage points because simulated late-round RB slots are assigned continuous, physically impossible draft positions that inflate RB depth availability.

Veto Scenario 2 — Waiver wire / FAAB activation:
Condition: If the simulation is extended to include in-season trades and FAAB/wave wire acquisition (currently excluded) [PAGE 2], then Zero-RB gains an option-value channel not present in the static model. Prediction: Zero-RB median finish moves from the lower half of the distribution to at least the third quartile, because early WR/TE/QB depth creates trade capital and stash capacity for injured RB handcuffs—precisely the mechanism the source removes but that defines Zero-RB in real leagues.

Veto Scenario 3 — Year-specific injury hazard inclusion:
Condition: If the excluded years 2012 and 2013 are restored and a position-specific injury hazard \(\lambda_p(t)\) is added, with \(\lambda_{\mathrm{RB}} - \lambda_{\mathrm{WR}} > 0.15\) games per season (consistent with the 0.86-game blog differential cited) [PAGE 2], then year-to-year variation is structural noise rather than pure luck. Prediction: Zero-RB is optimal in high-\(\lambda_{\mathrm{RB}}\) years and suboptimal in low-\(\lambda_{\mathrm{RB}}\) years; the paper's blanket rejection ("Zero-RB doesn't work optimally") [PAGE 2] is falsified, replaced by a conditional regime in which RB scarcity and injury hazard interact with draft timing.
</RLVR_COUNTERFACTUAL_VETOES>