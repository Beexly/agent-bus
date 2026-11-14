---
source: "2026 - Predicting WHL Tournament Outcomes Bayesian Mixed-Effects Modeling and Monte Carlo Simulation - Zaslow et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2026"
pages: 7
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6600
---

<NATIVE_REASONING>
The user wants me to analyze a specific source document (a Wharton Sports Analytics Journal paper) following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines terminology.
- No toy equations invented.
- Formal LaTeX equations only (from source or mathematically sound).
- Cite exact page markers [PAGE N] and verbatim quotes where source pages provided.
- The source text provided has page markers like "2 Zaslow", "3 Zaslow", etc., and "7 Zaslow" at the end. I should treat these as page markers. Actually looking at the text, it seems the pages are numbered 2 through 7 in the footer style. But the source says "PAGES: 7". I need to cite exact [PAGE N] markers. I'll use [PAGE 2], [PAGE 3], etc., corresponding to the Zaslow footers visible in the text.

Wait, the text says:
- Abstract section (no page number shown explicitly but likely page 1)
- "2 Zaslow" after Methods intro
- "3 Zaslow" after stage one description
- "4 Zaslow" after Figure 1
- "5 Zaslow" after Figure 3/4 description? Actually "5 Zaslow" appears before Conclusions section
- "6 Zaslow" before Conclusions
- "7 Zaslow" at end after References

So pages 2-7 are marked. I should cite [PAGE 2] etc. where relevant content appears.

Structure:

THINK_TRACE (>=400 words):
- Deep multi-hop derivation: How the Bayesian mixed-effects model works, how phase-specific rates combine, how Monte Carlo sims produce win probabilities, how standings reordering happens.
- Gray-zone audit: Simulated data limitations, no goaltending, constant rosters, Poisson assumption, geometric mean approximation, home/away structural confounding, O1/O2 disparity null result.
- Must be >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- Formal LaTeX equations from the paper:
  - Log expected goals per minute model: log(xG/min) ~ team + opponent + phase + venue + (1|team) + (1|opponent)
  - Back-transform to xG differential per 60: μ_phase = exp(β_team + β_opponent + ...)
  - Weighted composite: z = mean(z_home, z_away) where z are z-scored weighted totals
  - O1/O2 disparity: ratio = [(xG/60_O1/D1 + xG/60_O1/D2)/2] / [(xG/60_O2/D1 + xG/60_O2/D2)/2]
  - Phase scoring rate λ = sqrt(team_xG_for * opp_xG_against) [geometric mean]
  - Goals ~ Poisson(λ * minutes/60)
  - Win probability = mean(simulated wins) over 30,000 iterations
  - Monte Carlo SE < 0.3%
  - Home/away swing: 0.64 xG per 60
- Units: xG per minute, xG/60, minutes, dimensionless z-scores, probabilities [0,1], correlation coefficient r dimensionless, p-value dimensionless.
- Assumptions: simulated data, constant rosters, no injuries, Poisson independence, geometric mean validity, partial pooling.
- Breakdown/singularity: empty net events distort, small samples stabilized by partial pooling, Poisson breaks if events not independent, goaltending omitted.
- Citations: [PAGE 2], [PAGE 3], etc. with verbatim quotes.

RETROCAUSAL_GENEALOGY:
- Historical/scientific lineage: Ryder (2004) shot quality, Macdonald (2012) xG, Evolving Hockey (2021), MoneyPuck (2026), Seung et al. (2024) whole-history rating soccer.
- Multi-week traps: simulated static rosters vs real NHL season with injuries/trades/fluctuations; overreliance on standings; using raw goal differential; Simpson's Paradox; home ice structural confounding (higher seeds host).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression vs counter-trap vs clock: This is a bit abstract. Need to interpret in context of sports modeling. "Crisis habit regression" = teams reverting to mean under pressure? "Counter-trap" = model correcting for schedule luck? "Clock" = tournament time pressure, sudden-death overtime. I need to weave this into a theory of mind about how analysts/coaches might misread the model or how teams behave under tournament pressure. Must be careful not to invent toy equations. Can discuss psychological/behavioral dynamics conceptually.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical/weather veto proof. Since this is hockey, weather is mostly irrelevant (indoor arena), but physical/biomechanical factors: player shift fatigue, goaltending efficiency (omitted), line deployment, penalty killing physicality. The model vetoes or is vetoed by these layers. Need to discuss what would veto the model's predictions: goaltending variance, injuries, fatigue across tournament, back-to-back games, travel, venue effects not captured, etc. Must be rigorous.

RLVR_COUNTERFACTUAL_VETOES:
- 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need 3 counterfactual scenarios where the model's prediction would be vetoed, with specific predictions.
  1. Goaltending efficiency variance: If a team's starting goalie is replaced by backup, the Poisson λ derived from xG is vetoed because actual save probability diverges from xG. Prediction: win probability shifts toward the team with superior goaltending, not captured by model.
  2. Injury/trade mid-tournament: Roster constancy assumption violated. Prediction: composite z-score from regular season becomes stale; underdog with returning star outperforms simulation.
  3. Overtime/sudden-death physical fatigue: Multi-game tournament, fatigue accumulates; Poisson independence across phases breaks. Prediction: teams with deeper benches outperform model in later games/overtime, especially if home/away travel is involved.

Need to ensure total word count >= 1,000 words across sections. Each section should be substantial.

No betting lines: Avoid "spread", "total", "moneyline", "odds", "favorite", "underdog" (maybe "favored" is okay? The paper uses "favored". But to be safe, avoid betting terminology. The invariant says "Never mention spreads, totals, moneylines, or odds." So I should not use those words. "Win probability" is fine because it's from the source and not a betting line per se, but I should be careful not to frame it as odds.

Zero toy equations: I must not invent fake ratios. I can use the equations explicitly stated in the source. I should not create new ones like Force/Fatigue.

Let's draft carefully.

Word count planning:
- THINK_TRACE: ~350-450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300-400 words
- RETROCAUSAL_GENEALOGY: ~200-250 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200-250 words
- RLVR_COUNTERFACTUAL_VETOES: ~200-250 words
Total should exceed 1,000.

Need to include verbatim quotes from source with page markers.

Let's identify page locations:
- [PAGE 2]: Methods section starts, data description, 32 teams, 1,312 games, 82 games each. "The Wharton High School Data Science Competition provided one full season of game-level event data covering 32 teams and 1,312 games from the fictitious World Hockey League (WHL)."
- [PAGE 3]: Stage one model details, twelve models total, back-transformed, z-scores. "We fit Bayesian mixed-effects models on log expected goals per minute..."
- [PAGE 4]: Stage two, win probabilities, 16 first-round matchups, geometric mean, Poisson, 30,000 simulations. Also results: Mexico 19th to 4th, Netherlands 2nd to 7th.
- [PAGE 5]: Win probabilities and home ice, Brazil over Kazakhstan 67.6%, Singapore vs New Zealand 50.6%, Mexico vs UK 50.3%, home swing 0.64 per 60.
- [PAGE 6]: Offensive line balance, Guatemala 2.014, r ≈ 0, p = 0.955. Conclusions start.
- [PAGE 7]: Conclusions continued, goaltending omitted, references.

Wait, looking at the text markers:
- "2 Zaslow" appears before Methods header? Actually after Abstract and Introduction & Background, then "2 Zaslow" then "Wharton Sports Analytics Journal" then "## Methods". So [PAGE 2] covers start of Methods.
- "3 Zaslow" appears after stage one description, before "In stage two..."? Actually it's after the paragraph ending with "...computed home and away weighted totals separately." Then "3 Zaslow" then "In stage two..." So [PAGE 3] covers stage one details and beginning of stage two.
- "4 Zaslow" appears after Figure 1 description? Actually "4 Zaslow" is before "Win probabilities and home ice". Let me check: After "Results Opponent adjustment..." paragraph, then Figure 1 caption, then "4 Zaslow". Then "Win probabilities and home ice". So [PAGE 4] covers results reordering and start of win prob section? Actually the paragraph about results ends before Figure 1. Then page 4 marker. Then win probs paragraph. So [PAGE 4] likely contains win probs paragraph (Brazil 67.6%, etc.).
- "5 Zaslow" appears after "Offensive line balance does not predict strength" paragraph? Wait, the text shows:
  - Figure 2 caption
  - "5 Zaslow"
  - "Offensive line balance does not predict strength..." paragraph
  - Figure 3 caption
  - Figure 4 caption
  - "6 Zaslow"
  - "## Conclusions"
  
Wait let's re-read the raw text structure:

```
## Results Opponent adjustment and use of xG reorder the standings ... [PAGE 4 marker appears after Figure 1 caption?]

Figure 1. Top 10 teams...

## 4 Zaslow

Wharton Sports Analytics Journal

Win probabilities and home ice Feeding the phase-specific rates into 30,000 Monte Carlo simulations per matchup produced win probabilities for all 16 first-round games, with Monte Carlo standard error under 0.3%. ... home swings the expected goal differential by an average of 0.64 per 60...

Figure 2...

## 5 Zaslow

Wharton Sports Analytics Journal

Offensive line balance does not predict strength We isolated each team's first and second offensive lines...

Figure 3...

Figure 4...

## 6 Zaslow

Wharton Sports Analytics Journal

## Conclusions

...

## 7 Zaslow
```

So page mapping:
- Page 2: Methods start (data cleaning, aggregation, phase bucketing, O1/O2 disparity construction, software, stage one model setup).
- Page 3: Stage one details (12 models, priors, chains, back-transform, weighting, z-scoring); start of stage two (16 matchups, penalty data, geometric mean, Poisson, 30k sims, convergence checks).
- Page 4: Results reordering (Mexico 19th->4th, Netherlands 2nd->7th), Figure 1, then win probs paragraph (Brazil 67.6%, Singapore 50.6%, Mexico 50.3%, home swing 0.64).
- Page 5: Win probs continued? Actually page 4 has win probs paragraph. Then Figure 2 caption. Then page 5 marker. Then offensive line balance paragraph. Guatemala 2.014. Figure 3, Figure 4 captions.
- Page 6: Conclusions start (Mexico/Netherlands evidence, line balance null, simulated data limitation, goaltending omitted).
- Page 7: Acknowledgments, References, end.

Actually looking closely: "## 6 Zaslow" then "Wharton Sports Analytics Journal" then "## Conclusions". Then after conclusions paragraph, "## Acknowledgments", references, then "## 7 Zaslow". So page 6 contains Conclusions. Page 7 contains Acknowledgments and References.

I will cite [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7] as appropriate.

Now, let's write.

THINK_TRACE:
Need deep multi-hop derivation and gray-zone audit.
- Derivation: event-level data -> game-level totals -> phase buckets (EV/PP/PK) -> Bayesian mixed-effects on log(xG/min) with random effects for team and opponent -> 12 models (phase x venue) -> back-transform to xG/60 differential -> weight by actual ice time share -> z-score home/away -> average -> composite z-score -> stage two: project phase minutes from penalty rates -> geometric mean scoring rate lambda = sqrt(xG_for * xG_against) -> Poisson goals -> sudden death OT -> 30,000 sims -> win probability.
- Gray-zone: Simulated data means no real-world roster churn; no goaltending; Poisson assumption of independence may break in clutch situations; geometric mean is an approximation; home ice structural confound (higher seeds host); O1/O2 ratio null could be due to simulation design; 30k sims SE <0.3% but model uncertainty not propagated fully? Actually they use posterior means, not full posterior predictive simulation.
- Must be >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- LaTeX block.
- Define units.
- Cite pages.
- Verbatim quotes.
- Breakdown regimes.

RETROCAUSAL_GENEALOGY:
- Ryder 2004, Macdonald 2012, Evolving Hockey 2021, MoneyPuck 2026, Seung et al. 2024.
- Multi-week traps: static simulation vs real season; standings as trap; Simpson's Paradox; home seed hosting trap.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under tournament pressure, coaches may regress to habitual line deployment despite model suggesting phase-specific optimization.
- Counter-trap: The model itself is a counter-trap to raw standings bias.
- Clock: Sudden-death overtime creates time pressure; 30,000 simulations resolve the clock; tournament clock compresses variance.
- Theory of mind: How an opposing analyst might model this model; second-order inference.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: shift fatigue, line changes, goaltending (omitted), physicality in playoffs.
- Biomechanical: shot location/xG doesn't capture shooter fatigue, goalie reaction decay.
- Weather: indoor, minimal, but travel/time zones could matter in real WHL (not simulated).
- Veto proof: The model explicitly omits goaltending; thus any game where goaltending variance exceeds xG differential is vetoed. Also back-to-backs not modeled.

RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios with predictions.
- Scenario 1: Goaltending substitution (backup goalie). Veto: Poisson lambda based on xG assumes average goaltending. Prediction: actual win probability deviates toward team with superior goalie; model error > 5 percentage points.
- Scenario 2: Mid-tournament injury to top-line center. Veto: roster constancy assumption. Prediction: team's composite z-score overstates strength; simulation win prob too high by margin proportional to lost xG/60.
- Scenario 3: Triple-overtime fatigue in prior round. Veto: independence of phases and minutes. Prediction: deeper roster team outperforms Poisson-based expectation in sudden death; fatigue non-linearity not captured.

Need to avoid "odds", "spread", etc.

Let's write carefully with citations.

I need to ensure I don't use toy equations. The geometric mean is given in the source: λ = team_xG_for * opp_xG_against. Wait the source says: "computed phase-specific scoring rates as the geometric mean of the offensive team's xG-for rate and the defensive team's xG-against rate: λ = $𝑡𝑒𝑎𝑚_𝑥𝐺_𝑓𝑜𝑟 ∗ 𝑜𝑝𝑝_𝑥𝐺_𝑎𝑔𝑎𝑖𝑛𝑠𝑡 ." That seems to literally say product, but calls it geometric mean. In the text it shows the product symbol but text says geometric mean. I should represent it as written in source but note the discrepancy? The source text has a math formatting issue: "λ = $𝑡𝑒𝑎𝑚_𝑥𝐺_𝑓𝑜𝑟 ∗ 𝑜𝑝𝑝_𝑥𝐺_𝑎𝑔𝑎𝑖𝑛𝑠𝑡 ." I'll quote it as geometric mean per text, but maybe write λ = √(xG_for × xG_against) as the formal geometric mean, citing that the paper describes it as geometric mean but the inline conversion lost the radical. Actually, to be safe and faithful, I can write: "the paper states λ is the geometric mean of team xG-for and opponent xG-against" and write λ = (xG_for × xG_against)^{1/2}. That's a formal equation derived from the text description, not a toy invention.

Also the O1/O2 disparity ratio: ratio = [(O1/D1 + O1/D2)/2] / [(O2/D1 + O2/D2)/2].

The mixed model: log(xG/min) = β_0 + β_team + β_opponent + ... with random effects. I can write: log(μ_{ijk}) = α + u_i + v_j + ε_{ijk}, where u_i ~ N(0, σ_team²), v_j ~ N(0, σ_opp²). This is formal and not toy.

Back-transform: xG/60 = 60 × exp(μ_posterior).

Composite z: z_comp = (z_home + z_away)/2.

Monte Carlo: \hat{p} = (1/N) Σ I(team A wins simulation n), N=30,000, SE < 0.003.

Home swing: Δ(xG/60)_{home-away} = 0.64.

These are all from source or direct formalizations.

Now writing the response. Need to ensure each XML section is present and substantial.

Let's begin drafting in my head and then output.

THINK_TRACE:

Start with multi-hop: raw events -> game aggregates -> phase separation -> mixed model -> posterior means -> weighting -> z-scores -> composite -> stage two lambda -> Poisson -> simulation -> win probability. Then gray-zone audit: simulated static rosters, no goalie, no injuries, Poisson independence, geometric mean approximation, structural home ice confounding (higher seeds host), partial pooling limits, O1/O2 null result may be artifact of simulation design. Word count check: need >=400.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with LaTeX, units, citations, quotes.
- Quote from [PAGE 2] about data.
- Quote from [PAGE 3] about 12 models.
- Quote from [PAGE 4] about Mexico/Netherlands and home swing.
- Quote from [PAGE 5] about Guatemala and r/p.
- Quote from [PAGE 6] about goaltending omitted.

RETROCAUSAL_GENEALOGY:
Historical lineage. Multi-week traps.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION:
Physical/biomechanical/weather veto proof.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios.

Total word count target: 1,200+ words.

I must not mention "odds" or "spread" or "moneyline" or "total". I'll avoid "favorite" and "underdog" too to be safe, though the source uses "favored". I can say "higher win probability" instead.

Let's write now.

Check: The user says "STRICT INVARIANTS... >= 1,000-WORD DEPTH across these exact XML sections". So the sum of words across all sections must be >= 1000. I'll aim for ~1400.

I will not add any text outside the XML sections? The user says "across these exact XML sections". I should output only these sections, or can I have an intro? Better to output exactly these sections to be safe. But maybe a brief preamble is okay? To be safe, I'll output only the XML sections in order.

Let's draft content.

THINK_TRACE (approx 450 words):
Deep multi-hop derivation:
1. Event-level rows contain TOI, line tags, shot location/type, xG, penalties, home/away.
2. Convert TOI seconds to minutes; drop empty-net events (they distort scoring rates).
3. Aggregate to game-level: one row per team per game with opponent, venue, goals, shots, xG, penalties.
4. Bucket into EV/PP/PK based on line tags.
5. Stage one: fit 12 Bayesian mixed-effects models (3 phases × 2 venues) on log(xG per minute). Random effects: team and opponent. Priors: exponential on variance components. 4 chains, 6000 iterations, adapt_delta=0.95.
6. Partial pooling stabilizes low-minute teams.
7. Back-transform posterior means to xG/60 differential per phase.
8. Weight phases by actual ice-time share; compute home and away weighted totals; z-score each against league; average into composite z-score.
9. Stage two: project phase minutes from penalty draw/take rates. λ = geometric mean of offensive team's xG-for and defensive team's xG-against. Goals ~ Poisson(λ). Sudden-death OT until resolved. 30,000 simulations per matchup. SE < 0.3%.

Gray-zone audit:
- Data is entirely simulated; rosters constant; no injuries/trades/fluctuations. This removes real-world volatility but limits external validity.
- Goaltending efficiency omitted entirely. In real hockey, goalie variance can swamp xG differential.
- Poisson assumes rare, discrete, independent events. Power-play goals cluster; line changes and fatigue induce dependence.
- Geometric mean is an approximation of interaction between offense and defense; not derived from first principles.
- Home ice: higher seeds host (structural) plus venue effect 0.64 xG/60. Confounding between seed and venue.
- O1/O2 disparity null (r≈0, p=0.955) may reflect simulation design where line quality is exogenous; real rosters show balance effects.
- 30k simulations control Monte Carlo error but not model uncertainty; posterior means used rather than full posterior predictive distribution.
- Empty-net removal is justified but removes end-game strategy, which matters in tournaments.

Word count should be around 450. Good.

SOURCE_OPERATORS_AND_EQUATIONS:

Formal LaTeX:

Stage one mixed model:
\[
\log(\mu_{i,p,v}) = \alpha_{p,v} + u^{(T)}_{i,p,v} + u^{(O)}_{j,p,v} + \epsilon_{i,p,v}
\]
where \(\mu_{i,p,v}\) is expected goals per minute for team \(i\) in phase \(p \in \{EV, PP, PK\}\) at venue \(v \in \{Home, Away\}\); \(u^{(T)} \sim \mathcal{N}(0,\sigma^2_T)\), \(u^{(O)} \sim \mathcal{N}(0,\sigma^2_O)\). Exponential priors on variance components. [PAGE 3]

Back-transformation:
\[
\widehat{xG/60}_{i,p} = 60 \cdot \exp(\widehat{\log(\mu_{i,p})})
\]
Units: expected goals per 60 minutes.

Composite z-score:
\[
z_i = \frac{1}{2}\left( z\left(\sum_p w_{i,p} \cdot xG^{Home}_{i,p}\right) + z\left(\sum_p w_{i,p} \cdot xG^{Away}_{i,p}\right) \right)
\]
where \(w_{i,p}\) is team \(i\)'s actual ice-time share in phase \(p\). [PAGE 3]

O1/O2 disparity ratio:
\[
R_i = \frac{\frac{1}{2}(xG/60_{O1/D1} + xG/60_{O1/D2})}{\frac{1}{2}(xG/60_{O2/D1} + xG/60_{O2/D2})}
\]
Isolated from defensive pairing effects. [PAGE 2]

Stage two scoring rate (geometric mean per text):
\[
\lambda_{p} = \left( xG\text{-for}_{off} \times xG\text{-against}_{def} \right)^{1/2}
\]
Units: expected goals per minute in phase \(p\). The paper text states “computed phase-specific scoring rates as the geometric mean...” [PAGE 3]

Goal count:
\[
G_{p} \sim \text{Poisson}(\lambda_{p} \cdot t_{p}/60)
\]
where \(t_{p}\) is projected phase minutes. [PAGE 3]

Win probability estimator:
\[
\widehat{Pr}(A \text{ beats } B) = \frac{1}{30{,}000} \sum_{n=1}^{30{,}000} \mathbb{I}(G_{A,n} > G_{B,n})
\]
Monte Carlo standard error below 0.3%. [PAGE 4]

Home/away venue swing:
\[
\Delta(xG/60)_{Home-Away} = 0.64
\]
average across league. [PAGE 4]

Breakdown regimes:
- Empty-net events distort rates; removed. [PAGE 2]
- Small phase minutes: partial pooling pulls toward league mean. [PAGE 3]
- Poisson independence violated under fatigue or clustered power-play opportunities. [PAGE 3]
- Constant rosters assumption violated by real injuries/trades. [PAGE 2]
- Goaltending omitted; veto when goalie save percentage deviates from league average. [PAGE 6]

Verbatim quotes:
[PAGE 2]: "The Wharton High School Data Science Competition provided one full season of game-level event data covering 32 teams and 1,312 games from the fictitious World Hockey League (WHL)."
[PAGE 3]: "We fit Bayesian mixed-effects models on log expected goals per minute, with team and opponent as random effects."
[PAGE 4]: "Mexico finished 19th in traditional points but rose to 4th in true strength (z = 0.967), while the Netherlands fell from 2nd in points to 7th (z = 0.798)."
[PAGE 4]: "across the league, moving from away to home swings the expected goal differential by an average of 0.64 per 60."
[PAGE 5]: "The correlation is essentially zero (r ≈ 0, p = 0.955)..."
[PAGE 6]: "we found no suitable way to incorporate goaltending efficiency, so we omitted it entirely..."

Good.

RETROCAUSAL_GENEALOGY (approx 250 words):
Lineage: Ryder (2004) shot quality; Macdonald (2012) modern xG at MIT Sloan; Evolving Hockey (2021); MoneyPuck (2026). Seung et al. (2024) whole-history rating soccer for prior Wharton competition. This paper extends xG along two axes: opponent adjustment via Bayesian mixed effects and phase separation (EV/PP/PK). Multi-week traps: In a simulated league with static rosters, the model learns a fixed strength parameter. In a real multi-week tournament, rosters shift, injuries accumulate, tactics adapt. Trap 1: treating composite z-score as invariant across weeks. Trap 2: raw standings reward schedule luck (Mexico/Netherlands example). Trap 3: Simpson's Paradox when collapsing phases. Trap 4: home ice structural confound because higher seeds host, so venue effect and seed effect are collinear. Trap 5: O1/O2 disparity null may be a simulation artifact; in real hockey over weeks, line balance matters for fatigue management. The model’s reordering (Brazil top, Mexico rise, Netherlands fall) is a correction of retrospective bias, but without weekly re-estimation it decays as rosters change.

RECURSIVE_THEORY_OF_MIND (approx 200 words):
Crisis habit regression: under playoff pressure, coaches regress to habitual line deployment (overusing O1, shortening bench), which violates the model’s assumption that observed ice-time shares remain stable. Counter-trap: the Bayesian mixed-effects model is itself a counter-trap to the standing’s bias; it partial-pools weak samples and adjusts for opponent quality, preventing overreaction to small-sample surges. Clock: tournament sudden-death overtime compresses decision time; the 30,000 Monte Carlo simulations resolve the clock by integrating over all possible overtime trajectories until one team scores. Recursive theory of mind: an opposing analyst anticipating this model might manipulate line matchups to exploit the geometric-mean λ approximation (e.g., deploying a checking line against O1 to depress xG-for), knowing the model does not explicitly model tactical adjustment within a game. The model assumes team strength acts multiplicatively and statically; a strategic opponent can break that assumption by phase-specific targeting, creating a second-order inference loop where the model’s output becomes an input to the opponent’s game plan.

CROSS_LAYER_VETO_ADJUDICATION (approx 250 words):
Physical layer: The model assumes constant rosters and no injuries ([PAGE 2]); in a real tournament, physical attrition removes top-line minutes, invalidating the ice-time weights \(w_{i,p}\). Biomechanical layer: xG values derive from shot location and type, but do not encode shooter fatigue, goalie reaction decay, or stick-check pressure; as a series progresses, biomechanical degradation shifts the Poisson λ away from the regular-season posterior mean. Weather layer: WHL games are indoors, so direct weather effects are negligible; however, travel and time-zone displacement in a real multi-city tournament introduce circadian and fatigue variables absent from the simulated data. Veto proof: The paper explicitly states goaltending efficiency was omitted entirely ([PAGE 6]); therefore any game in which a goaltender’s save percentage deviates materially from league average is a veto event—the model cannot distinguish a high-xG team with average goaltending from a low-xG team with elite goaltending. Additionally, empty-net events were removed because they distort scoring rates ([PAGE 2]); in a tournament elimination game, end-of-game empty-net strategy is decisive, so the model’s exclusion creates a structural blind spot late in close games.

RLVR_COUNTERFACTUAL_VETOES (approx 250 words):
Scenario 1: Goaltending substitution. Counterfactual: Team A’s starter is replaced by a backup with save percentage 0.015 above league average before Game 3. Veto: Poisson λ is constructed from xG-for/xG-against assuming average goaltending; actual goals allowed follow a different rate. Prediction: Team A’s win probability drops by more than the model’s 0.3% Monte Carlo standard error; the backup’s save percentage creates a systematic bias in actual goals against that the model cannot capture.
Scenario 2: Mid-tournament injury to O1 center. Counterfactual: Team B’s top-line center (responsible for 25% of O1 xG/60) is injured after Game 1. Veto: roster constancy and fixed ice-time shares are violated; composite z-score overstates strength. Prediction: Team B’s actual win probability in Game 2 falls below the simulated probability by a margin proportional to the lost O1 xG/60, and the geometric mean λ overestimates scoring because it uses the intact-team xG-for.
Scenario 3: Triple-overtime fatigue entering next round. Counterfactual: Team C plays a quadruple-overtime Game 1 and faces Team D 18 hours later. Veto: phase independence and fixed minutes assumptions break; fatigue accumulates nonlinearly. Prediction: Team C’s power-play and even-strength xG/60 decay in Game 2, so the Poisson-based simulation overrates Team C; Team D wins more often than the model’s win probability indicates, particularly in sudden-death overtime where fatigue-induced errors dominate.

All good. Need to ensure no banned words. Check: "favored" appears? I won't use it. "Odds" - no. "Spread" - no. "Moneyline" - no. "Total" - avoid using as betting term; "total" as a word is okay but maybe avoid to be safe. I'll avoid.

Word count: Let's estimate.
THINK_TRACE: ~470 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~450 words (including quotes).
RETROCAUSAL_GENEALOGY: ~230 words.
RECURSIVE_THEORY_OF_MIND: ~190 words.
CROSS_LAYER_VETO_ADJUDICATION: ~230 words.
RLVR_COUNTERFACTUAL_VETOES: ~240 words.
Total: ~1810 words. Good >1000.

Need to ensure citations format [PAGE N]. I'll use them inline.

Now produce final output with XML tags. No markdown code blocks? I can use LaTeX inline with \( \) or \[ \]. That's fine.

Let's write it out fully.

Double-check page citations:
- [PAGE 2]: data description, empty net removal, disparity ratio construction. Yes.
- [PAGE 3]: 12 models, exponential priors, 4 chains 6000, back transform, weighting, z-scoring; stage two geometric mean, Poisson, 30k. Yes.
- [PAGE 4]: Mexico/Netherlands reordering, home swing 0.64, win probabilities paragraph, SE <0.3%. Yes.
- [PAGE 5]: Guatemala disparity, r/p null. Yes.
- [PAGE 6]: Conclusions, goaltending omitted. Yes.
- [PAGE 7]: References, acknowledgments. Not heavily needed.

I will cite [PAGE 6] for goaltending omitted quote. Good.

Need verbatim quotes: I'll include several.

Let's ensure I don't use "odds" anywhere. Check: "win probability" is fine. "Probability" is fine. "Standard error" fine. "Monte Carlo" fine.

Let's write.

One more thing: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must include [PAGE N] and verbatim quotes where applicable. I'll include them.

I will not use a preamble. Just the six sections.

Final check on LaTeX: Ensure it's formal and not a toy equation. All equations are either directly from source or standard statistical formulations (Poisson, mixed effects, geometric mean, z-score). Good.

Proceed to final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The pipeline begins at the event level: each row contains time-on-ice, offensive and defensive line tags (O1/O2, D1/D2), shot location and type, expected goals values, penalty events, and home/away designations [PAGE 2]. Time-on-ice is converted from seconds to minutes, and all empty-net events are removed because shots taken with the goalie pulled distort scoring rates and are not representative of true team strength [PAGE 2]. Rows are aggregated into game-level totals, yielding one row per team per game with opponent, venue, goals, shots, expected goals, and penalties [PAGE 2]. Events are bucketed into even-strength, power-play, and penalty-kill phases based on offensive and defensive line tags [PAGE 2].

Stage one fits twelve Bayesian mixed-effects models total: three phases (EV, PP, PK) crossed with two venues (home, away). The dependent variable is log expected goals per minute, with team and opponent entered as random effects [PAGE 3]. Modeling on the log scale keeps back-transformed predictions positive and makes team strength act multiplicatively on the rate [PAGE 3]. Exponential priors regularize variance components; four chains of 6,000 iterations each with adapt_delta = 0.95 ensure stable sampling [PAGE 3]. Partial pooling is critical for teams with few high-quality opponents or limited minutes in a phase, pulling estimates toward the league mean instead of overstating small samples [PAGE 3]. Posterior means are back-transformed to expected goal differential per 60 minutes for each phase, weighted by each team’s actual ice-time share in that phase, and home and away weighted totals are computed separately [PAGE 3]. Each venue total is z-scored against the league to normalize baselines, then the two are averaged into a single composite z-score per team [PAGE 3].

Stage two generates win probabilities for the 16 first-round matchups. Phase minutes are projected from observed penalty draw and take rates [PAGE 3]. Phase-specific scoring rates are computed as the geometric mean of the offensive team’s xG-for rate and the defensive team’s xG-against rate [PAGE 3]. Goals are drawn from a Poisson distribution with λ as the mean, justified because goals in a phase are rare, discrete, independent events [PAGE 3]. Tied games go to sudden-death overtime, repeating until resolved [PAGE 3]. Thirty thousand simulations per matchup produce win probabilities with Monte Carlo standard error below 0.3% [PAGE 4].

Gray-zone audit. The data are entirely simulated by competition organizers; teams and players remain constant with no injuries, trades, or performance fluctuations [PAGE 2]. This static-world assumption limits external validity to real hockey, where rosters and tactics shift across a season [PAGE 6]. Goaltending efficiency is omitted entirely despite its clear role in outcomes [PAGE 6]. The Poisson assumption of rare, discrete, independent events may break down under fatigue, clustered power-play opportunities, or end-game empty-net strategy [PAGE 2; PAGE 3]. The geometric mean of offense and defense is an approximation, not a first-principles derivation of scoring interaction [PAGE 3]. Home ice is structurally confounded because higher seeds host games, while a separate venue effect swings expected goal differential by an average of 0.64 per 60 [PAGE 4]. The offensive line disparity null result (r ≈ 0, p = 0.955) may reflect the simulation’s exogenous line construction rather than a universal law of hockey [PAGE 5]. Finally, 30,000 simulations control Monte Carlo error but do not fully propagate posterior model uncertainty; the paper uses posterior means rather than a full posterior predictive distribution [PAGE 3; PAGE 4].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX operators, units, assumptions, and breakdown regimes.

Stage one mixed-effects model (phase p ∈ {EV, PP, PK}, venue v ∈ {Home, Away}):
\[
\log(\mu_{i,p,v}) = \alpha_{p,v} + u^{(T)}_{i,p,v} + u^{(O)}_{j,p,v} + \epsilon_{i,p,v},
\quad u^{(T)} \sim \mathcal{N}(0,\sigma^2_T), \; u^{(O)} \sim \mathcal{N}(0,\sigma^2_O)
\]
where \(\mu_{i,p,v}\) is expected goals per minute for team \(i\) against opponent \(j\); \(\epsilon\) is residual error. Exponential priors on variance components; four chains of 6,000 iterations, adapt_delta = 0.95 [PAGE 3]. Verbatim: “We fit Bayesian mixed-effects models on log expected goals per minute, with team and opponent as random effects” [PAGE 3].

Back-transformation to expected goals per 60:
\[
\widehat{\text{xG/60}}_{i,p} = 60 \cdot \exp\bigl(\widehat{\log(\mu_{i,p})}\bigr).
\]
Unit: expected goals per 60 minutes of ice time.

Composite z-score:
\[
z_i = \frac{1}{2}\left[
z\Bigl(\sum_p w_{i,p}\cdot \text{xG}^{\text{Home}}_{i,p}\Bigr)
+
z\Bigl(\sum_p w_{i,p}\cdot \text{xG}^{\text{Away}}_{i,p}\Bigr)
\right],
\]
where \(w_{i,p}\) is team \(i\)’s actual share of ice time in phase \(p\) [PAGE 3].

O1/O2 disparity ratio, isolated from defensive pairing effects:
\[
R_i =
\frac{\tfrac{1}{2}\bigl(\text{xG/60}_{O1/D1} + \text{xG/60}_{O1/D2}\bigr)}
{\tfrac{1}{2}\bigl(\text{xG/60}_{O2/D1} + \text{xG/60}_{O2/D2}\bigr)}.
\]
Unit: dimensionless ratio [PAGE 2].

Stage two phase scoring rate (geometric mean as described in the text):
\[
\lambda_p = \bigl(\text{xG-for}_{\text{off}} \times \text{xG-against}_{\text{def}}\bigr)^{1/2}.
\]
Unit: expected goals per minute in phase \(p\) [PAGE 3]. Verbatim: “computed phase-specific scoring rates as the geometric mean of the offensive team’s xG-for rate and the defensive team’s xG-against rate” [PAGE 3].

Goal count per phase:
\[
G_p \sim \text{Poisson}\bigl(\lambda_p \cdot t_p / 60\bigr),
\]
where \(t_p\) is projected phase minutes [PAGE 3]. Verbatim: “Goals were drawn from a Poisson distribution with λ as the mean, which fits because goals in a phase are rare, discrete, independent events” [PAGE 3].

Win probability estimator over \(N = 30{,}000\) simulations:
\[
\widehat{\Pr}(A \text{ defeats } B) = \frac{1}{N}\sum_{n=1}^{N} \mathbb{I}(G_{A,n} > G_{B,n}),
\]
with Monte Carlo standard error below 0.3% [PAGE 4]. Verbatim: “We ran 30,000 simulations per matchup, which yielded a standard error below 0.3%” [PAGE 3].

Home/away venue swing:
\[
\Delta(\text{xG/60})_{\text{Home} - \text{Away}} = 0.64
\]
expected goals per 60, averaged across the league [PAGE 4]. Verbatim: “across the league, moving from away to home swings the expected goal differential by an average of 0.64 per 60” [PAGE 4].

Breakdown / singularity regimes: empty-net events distort rates and are removed [PAGE 2]; small phase-minute samples are stabilized by partial pooling toward the league mean [PAGE 3]; Poisson independence fails under fatigue or clustered special-teams opportunities [PAGE 3]; roster constancy is violated by real injuries or trades [PAGE 2]; goaltending is omitted, so any game where save percentage deviates materially from league average is outside the model’s domain [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The intellectual genealogy traces shot-quality work to Ryder (2004) and the modern expected-goals framework to Macdonald (2012), introduced at the MIT Sloan Sports Analytics Conference [PAGE 1]. Public xG models from Evolving Hockey (2021) and MoneyPuck (2026) later standardized shot-quality-adjusted analytics [PAGE 1]. This paper extends that lineage along two axes: opponent adjustment through Bayesian mixed-effects modeling with partial pooling, and phase separation into even-strength, power-play, and penalty-kill environments before recombination by actual ice-time distribution [PAGE 1; PAGE 3]. It also engages prior Wharton High School Data Science Competition work, specifically Seung et al. (2024), which applied whole-history ratings to soccer but treated each game as a single observation rather than separating hockey’s distinct scoring environments [PAGE 1].

Multi-week traps. In the simulated WHL, rosters are static and team strength is time-invariant [PAGE 2]. Over multiple weeks of a real tournament, this creates Trap 1: treating the composite z-score as a fixed parameter when roster churn, injuries, and tactical adaptation continuously move the underlying distribution. Trap 2 is the raw-standings distortion the paper explicitly corrects: Mexico finishes 19th in points but ranks 4th in true strength (z = 0.967), while the Netherlands falls from 2nd in points to 7th (z = 0.798) [PAGE 4]. Trap 3 is Simpson’s Paradox, where aggregate numbers hide opposite trends within even-strength, power-play, and penalty-kill subgroups [PAGE 1]. Trap 4 is the structural home-ice confound: higher seeds host games, so the venue effect (0.64 xG/60 home swing) is collinear with seeding [PAGE 4]. Trap 5 is the null offensive line disparity result (r ≈ 0, p = 0.955) [PAGE 5]; in a simulated world with exogenous line quality, balance carries no signal, but over a multi-week real tournament, fatigue management and matchup-specific line deployment can make balance consequential. The model’s reordering—Brazil at z = 1.844, Thailand at 1.603, Mexico rising, Netherlands falling—is a correction of retrospective schedule luck, but without weekly re-estimation the strength estimates decay as the real-world system drifts [PAGE 4; PAGe 6].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus tournament clock.

Crisis habit regression describes the tendency of coaches and players, under playoff pressure, to revert to habitual line deployment—overusing the first offensive line, shortening the bench, and preserving familiar defensive pairings—even when the data suggest phase-specific reallocation would be optimal. This behavioral regression violates the model’s assumption that observed ice-time shares and phase minutes remain stable from the regular season into the tournament.

The counter-trap is the Bayesian mixed-effects model itself. By partial-pooling team and opponent random effects and adjusting for venue, it prevents analysts from overreacting to small-sample surges or schedule-induced inflation in raw standings. It is a structural counter-trap to the narrative that a team’s point total is its true strength, as demonstrated by Mexico’s rise from 19th to 4th and the Netherlands’ fall from 2nd to 7th [PAGE 4].

The clock operates in two registers. First, sudden-death overtime repeats until one team scores, compressing decision time and converting the phase-level Poisson process into a race against elapsed game time [PAGE 3]. Second, the 30,000 Monte Carlo simulations resolve that clock by integrating over thousands of overtime trajectories, producing a win probability with standard error under 0.3% [PAGE 4]. A recursive theory of mind anticipates that an opposing analyst, knowing the model uses a geometric mean for scoring rates and fixed ice-time weights, could attempt to manipulate within-game matchups—deploying a checking line against O1 to depress xG-for, or altering penalty discipline to shift phase minutes—thereby creating a second-order inference loop where the model’s published strength metric becomes an input to the opponent’s tactical game plan rather than a neutral forecast.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto layers.

Physical layer: The source data assumes teams and players remain constant throughout the season with no injuries, trades, or performance fluctuations [PAGE 2]. In a physical tournament, attrition removes top-line minutes and invalidates the ice-time weights \(w_{i,p}\) used to recombine phase strengths [PAGE 3]. A team that loses its top defensive pairing cannot sustain the penalty-kill xG-against rate embedded in its composite z-score.

Biomechanical layer: xG values are functions of shot location, type, and game context [PAGE 1], but they do not encode shooter fatigue, goalie reaction decay, stick pressure, or the biomechanical degradation that accumulates across shifts and games. As a series progresses, the Poisson mean \(\lambda\) derived from regular-season xG posterior means drifts away from actual scoring intensity because player-level biomechanics are not stationary.

Weather layer: WHL games are played indoors, so direct meteorological effects (temperature, wind, precipitation) are negligible. However, in a real multi-city tournament, travel, time-zone displacement, and circadian disruption introduce physical fatigue variables absent from the simulated data [PAGE 2].

Veto proof: The paper explicitly states that no suitable way to incorporate goaltending efficiency was found, so it was omitted entirely [PAGE 6]. Therefore, any game in which goaltending save percentage deviates materially from the league average is a veto event: the model cannot separate a high-xG team with average goaltending from a low-xG team with elite goaltending. Additionally, empty-net events were removed because they distort scoring rates [PAGE 2], yet in an elimination game, end-of-game empty-net strategy is often decisive; the model’s exclusion creates a structural blind spot precisely when the clock is shortest and the stakes are highest.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with predictions.

Scenario 1: Goaltending substitution. Counterfactual: before Game 3, Team A replaces its starting goaltender with a backup whose save percentage is 0.015 above league average. Veto mechanism: the Poisson scoring rate \(\lambda\) is constructed from xG-for and xG-against assuming average goaltending [PAGE 3]; actual goals allowed now follow a different rate that the model never estimated. Prediction: Team A’s actual win probability in Game 3 shifts by more than the model’s 0.3% Monte Carlo standard error in favor of Team A, creating a systematic deviation between simulated and realized outcomes that is attributable to the omitted goaltending layer [PAGE 6].

Scenario 2: Mid-tournament O1 injury. Counterfactual: after Game 1, Team B’s first-line center—responsible for approximately 25% of the team’s O1 xG/60—is injured and unavailable for Game 2. Veto mechanism: the roster-constancy and fixed ice-time-share assumptions are violated [PAGE 2; PAGe 3]; the composite z-score overstates Team B’s strength because it weights phases by intact-roster minutes. Prediction: Team B’s realized win probability in Game 2 falls below its simulated probability by a margin proportional to the lost O1 xG/60, and the geometric-mean scoring rate overestimates Team B’s offensive output because it uses the pre-injury xG-for [PAGE 3; PAGe 5].

Scenario 3: Triple-overtime fatigue entering the next round. Counterfactual: Team C plays a quadruple-overtime Game 1 and faces Team D roughly 18 hours later. Veto mechanism: the assumptions of phase independence and fixed projected minutes break down; fatigue accumulates nonlinearly and degrades even-strength and power-play execution [PAGE 3]. Prediction: Team C’s xG/60 in Game 2 decays relative to its posterior mean, so the Poisson-based simulation overrates Team C; Team D wins more often than the model’s win probability indicates, with the discrepancy largest in sudden-death overtime where fatigue-induced errors dominate [PAGE 3; PAGe 4].
</RLVR_COUNTERFACTUAL_VETOES>