---
source: "2023 - Competitive Balance in Professional Sports A Multidimensional Perspective - Bognar et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2023"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5079
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about competitive balance in professional sports. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the source text provided seems to be the full paper but the page markers in the text say pages 1-16. The user says PAGES: 13, but the text shows up to page 16. I need to cite exact [PAGE N] markers based on the source text provided.

Let me look at the source text carefully. It has page numbers embedded:
- Page 1: Introduction start
- Page 2: Section 2 start
- Page 3: Figure 1
- Page 4: Section 3
- Page 5: Figure 2
- Page 6: Figure 3
- Page 7: Figure 4
- Page 8: Page 9 text
- Page 9: Page 10 text
- Page 10: Figure 5
- Page 11: Page 12 text
- Page 12: Figure 6
- Page 13: Page 14 text
- Page 14: Page 15 text
- Page 15: References
- Page 16: (end)

Wait, looking closely at the source text, I see page numbers like "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16" embedded in the text. The user says PAGES: 13, but the document actually has 16 pages visible. I should cite based on what's visible in the source text markers. I'll use the page numbers shown in the source.

Key content to extract:
- ARMA(1,1) process for winning percentage w_it
- µ ≡ 0.5 average winning percentage
- θ ∈ (0,1), φ ∈ (-1,0)
- Performance shocks η
- D_t ≡ Std[w_it] (disparity)
- M_t ≡ pooled first-order autocorrelation of winning percentages (immobility)
- M(φ, θ) strictly increasing, D(φ, θ) strictly decreasing in φ
- Trade-off over φ ∈ (-θ, 0)
- Figure 1: competitive balance frontier curves
- Collective bargaining, reserve clause, free agency late 60s/early 70s decreased θ
- Non-gate revenues, MLB deterioration both disparity and immobility last decade
- Figure 2: disparity and immobility normalized to 2019
- Figure 3: non-gate revenue and player salary shares 2002-2019
- Figure 4: league financials 2002-2019, non-gate revenue growth outpaced gate since 2009
- MLB national TV deal 2014, MLB Advanced Media sale 2018 distributed 2018
- Franchise values increased 225%
- Average MLB player salary declined 6% from 2017-2021
- Equation (5): team-level two-way fixed effects
- log Y_it, β_i2009 = 0, 100*β_i is avg percent change relative to 2009
- MLB average non-gate revenue increased 49% from 2009 to 2018, CI [45%, 54%]
- MLB total payroll increased 17% from 2009 to 2018, CI [3%, 30%]
- Figure 5: 2002-2019 team-level non-gate revenue and payroll growth
- Figure 6: by franchise value categories
- MLB high value non-gate revenue growth nearly twice low value
- NFL/NHL even sharing, NBA lowest gained most
- NFL hard cap, NHL hard cap, MLB/NBA soft caps/luxury tax
- MLB payroll growth 2014-2019 entirely explained by franchises outside top quartile
- NBA lowest value franchises increased payroll most after 2014
- CBA 2012 and 2017
- Luxury tax as soft salary cap for large-market teams
- Playoff field expansion
- Salary floor discussion
- Time to free agency

Now I need to structure the response with the exact XML sections.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
I need to derive the implications of the ARMA(1,1) model, the trade-off between disparity and immobility, how non-gate revenues affect θ, the empirical patterns, etc. Audit gray zones: the paper doesn't give explicit formulas for D and M in terms of φ, θ, σ; it just states monotonicity. The exact functional forms are missing (equations are referenced but not fully displayed in the text provided - there are blank spaces where equations should be). I need to note this breakdown/singularity regime: where equations are omitted from the source text, I cannot invent them.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
I will write out the ARMA(1,1) process as described (even if the image/equation is missing, I can reconstruct based on standard ARMA(1,1) notation but must be careful not to invent fake ratios). Actually, the text says "evolves according to the ARMA(1,1) process" but the equation image is missing. I can state: w_it = µ + φ(w_{i,t-1} - µ) + η_it + θη_{i,t-1} or similar? Wait, standard ARMA(1,1) is w_t = c + φ w_{t-1} + ε_t + θ ε_{t-1}. But given the description "reformulate... in terms of deviations from µ" and "φ plays the role of a correction term, reinforcing team performances to revert to the mean", and "θ > 0... shocks are likely to be persistent, or 'sticky'", I should present the model as implied by text but explicitly flag where the source omitted the displayed equation. I must not invent fake ratios. I can state the generic form and note the source's equation display is absent from the extracted text.

Units: winning percentage is dimensionless [0,1], µ=0.5, φ ∈ (-1,0), θ ∈ (0,1), D_t is standard deviation of winning percentages (dimensionless), M_t is autocorrelation (dimensionless, [-1,1]), σ = 0.3 in Figure 1 (dimensionless), revenue in billions of 2018 USD, payroll growth percent, CI percentages.

Page citations: [PAGE 2], [PAGE 3], etc. based on the embedded numbers.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
Lineage: Fort & Maxcy (2003), Butler (1995), Schmidt & Berri (2004), Vrooman (2009), Lee & Fort (2005), Brave & Roberts (2019), Ferguson et al. (2000), Blass (1992). Historical: reserve clause, free agency late 60s/early 70s, CBAs 2012/2017, MLB Advanced Media sale 2017/distribution 2018, national TV deal 2014. Multi-week traps: thinking disparity and immobility move together always; the paper shows they can diverge (NBA disparity up, immobility flat; NFL opposite; NHL immobility down, disparity flat). Also trap of assuming non-gate revenue alone explains decline; institutional revenue sharing matters.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
Crisis habit regression: Teams revert to low-spending habits when revenue is non-performance-linked (MLB tanking/all-or-nothing). Counter-trap: NBA revenue sharing puts money in hands of teams likely to spend competitively; luxury tax prevents pricing out. Clock: 2014-2019 window, payroll growth only in that period, 2009 baseline, CBA 2012/2017 timing, playoff expansion recent CBA change.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
This is a sports economics paper, not physical/biomechanical/weather. I need to adapt: veto layers are institutional/economic rather than physical. But the section title demands "Physical/biomechanical/weather veto proof." I should state that no physical/biomechanical/weather vetoes apply because the model is aggregate league-level economic/institutional; the binding constraints are collective bargaining rules, revenue-sharing mechanisms, salary caps (hard/soft), luxury tax thresholds, free agency timing. The "veto" is institutional: CBA rules veto market-driven parity. I must not invent physical injuries or weather. I'll frame it as: the paper operates at the institutional layer; physical/biomechanical/weather factors are exogenous noise σ (the baseline variability not subject to bargaining) and are vetoed by the model's assumption that they are bounded and not policy-leverable.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or just counterfactual veto scenarios. I need 3 scenarios with predictions.
1. If MLB distributed non-gate revenue by on-field performance instead of equally/market-based, θ would decrease, disparity and immobility would both improve (move inward on frontier). Prediction: D_t and M_t decrease jointly.
2. If MLB implemented a hard salary cap (like NFL/NHL) instead of luxury tax/soft cap, cross-franchise payroll variation would collapse, disparity would fall but immobility might rise if φ becomes less negative? Wait, need to think. Actually hard cap limits disparity but the paper says NFL has little cross-franchise variation. Prediction: disparity decreases, immobility effect ambiguous (depends on φ).
3. If time to free agency shortened, talent stickiness decreases (θ → 0), immobility falls unambiguously (per Figure 1 logic, θ decrease unambiguously improves both dimensions when φ<0). Prediction: M_t decreases, D_t decreases.

Wait, RLVR might mean something specific? The user says "3 verifiable RLVR veto scenarios + predictions." I'll interpret RLVR as "reinforcement learning verifiable reward" or simply "verified counterfactual veto" scenarios. I'll provide 3 counterfactual interventions, the veto condition (what blocks them), and testable predictions.

Word count: >= 1000 words total across sections. THINK_TRACE alone >=400 words.

Let me start drafting.

Important: No betting lines. No mention of spreads, totals, moneylines, odds. I must avoid any gambling terminology.

Citations: Use [PAGE N] exactly. I need to map content to pages.
- Page 1: Introduction, definitions of disparity/immobility, collective bargaining impact.
- Page 2: Section 2, ARMA(1,1), µ=0.5, θ, φ, η, Nash equilibrium, ω baseline variability.
- Page 3: Equations (3), D_t, M_t, monotonicity, Figure 1 discussion, φ range (-θ, -0.01), σ=0.3, θ=0.8/0.9.
- Page 4: Figure 1 notes, Section 3 start, collective bargaining late 60s/early 70s, θ decreased, improvements.
- Page 5: Figure 2, cross-league comparison, season length effects, NFL 16 games vs NBA/NHL 81 vs MLB 162, last decade MLB both deteriorated.
- Page 6: Figure 3, non-gate revenue and salary shares 2002-2019, NBA/NFL/NHL patterns.
- Page 7: Figure 4, financials 2002-2019, non-gate outpaced gate since 2009, MLB TV deal 2014, MLBAM sale 2018, franchise values 225%.
- Page 8: MLB player salary declined 6% 2017-2021, all-or-nothing strategy, draft slotting, international signings.
- Page 9: (text continues) team-level fixed effects, equation (5), log Y_it, β_i2009=0, 100*β_i percent change.
- Page 10: Figure 5, MLB non-gate revenue +49% 2009-2018 CI [45%,54%], payroll +17% CI [3%,30%], Figure 6 start.
- Page 11: (text continues) payroll growth 2006-2014 roughly zero, franchise value categories, MLB high value growth nearly twice low value.
- Page 12: Figure 6 notes, NFL/NHL revenue sharing, NBA aggressive revenue sharing, NFL national TV deals.
- Page 13: Bottom panel figure 6, NFL hard cap, NHL hard cap, MLB/NBA soft caps/luxury tax, MLB payroll growth entirely outside top quartile, NBA lowest value increased payroll most.
- Page 14: Conclusion, MLB non-gate revenue benefited most valuable teams, CBA 2012 and 2017, luxury tax soft cap, playoff field expansion, salary floor misguided, small-market teams increased payrolls.
- Page 15: Time to free agency, marginal revenue product, align non-gate revenue with on-field performance.
- Page 16: References.

The user says PAGES: 13, but I see up to 16. I'll cite what's in the text. Maybe they meant the relevant content is 13 pages? Anyway, I'll use the page markers visible.

Let's write.

THINK_TRACE: I need >=400 words. I'll derive:
1. From ARMA(1,1): w_it = µ + φ(w_{i,t-1}-µ) + η_it + θη_{i,t-1}? Actually standard ARMA(1,1) in deviations: x_it = φ x_{i,t-1} + η_it + θ η_{i,t-1}. The text says reformulate in deviations from µ, φ is correction term mean-reverting (φ<0), θ>0 makes shocks sticky. This implies an ARMA(1,1) where the MA term propagates shocks forward.
2. Disparity D_t = Std[w_it]. Immobility M_t = autocorr(w_it, w_{i,t-1}) pooled.
3. The paper states M(φ,θ) strictly increasing, D(φ,θ) strictly decreasing in φ. So as φ increases (less negative, closer to 0), immobility rises but disparity falls. Trade-off.
4. θ shift: increasing θ shifts frontier outward (worse both dimensions). Decreasing θ (free agency) shifts inward (better both).
5. Gray zone: explicit closed-form D(φ,θ,σ) and M(φ,θ,σ) are not displayed in extracted text (equation placeholders blank). Therefore cannot compute exact elasticities. Breakdown regime: φ → -θ boundary where league could reduce both; φ ∈ (-θ, 0) trade-off region; σ is irreducible baseline variability (ω in text? Actually ω represents baseline variability not subject to bargaining). Singularity: if σ=0, no uncertainty, but sports have intrinsic uncertainty.
6. Empirical multi-hop: non-gate revenue ↑ → less performance-sensitive → owner bargaining power ↑ → θ ↑ → D ↑ and M ↑ (MLB). But revenue sharing determines who gets the gains. MLB: high-value teams got ~2x low-value non-gate growth. NBA: low-value got most. NFL/NHL: even. This explains divergent competitive balance trends despite similar macro revenue trends.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- w_it: winning percentage, dimensionless, support [0,1].
- µ = 0.5.
- ARMA(1,1): w_{it} - µ = φ(w_{i,t-1} - µ) + η_{it} + θη_{i,t-1}, with φ ∈ (-1,0), θ ∈ (0,1). [Note: extracted text omits the displayed equation image; this is the standard form consistent with the verbal description on PAGE 2-PAGE 3.]
- η_it: performance shock, mean-zero, variance σ² (implied by σ=0.3 in Figure 1).
- D_t ≡ Std_i[w_it], units: percentage points (dimensionless).
- M_t ≡ pooled first-order autocorrelation of w_it, dimensionless [-1,1].
- Monotonicity: ∂M/∂φ > 0, ∂D/∂φ < 0 for φ ∈ (-θ, 0). [PAGE 3]
- Figure 1 parameterization: σ = 0.3, θ ∈ {0.8, 0.9}, φ ∈ [-θ, -0.01]. [PAGE 3]
- Regression (5): log Y_it = α_i + δ_t + β_i * I(year) + ε_it? Actually text: "we estimate team-level two-way fixed effect regressions... where log Y_it denotes... We normalize β_i2009 = 0 such that 100*β_i represents average percent change..." I'll write generically: log Y_it = μ_i + λ_t + Σ β_{iτ} D_{t=τ} + ε_it, with β_{i,2009}=0. Y ∈ {non-gate revenue, payroll}, deflated to 2018 USD.
- Empirical estimates: MLB non-gate revenue Δ = +49%, 95% CI [45%, 54%] (2009→2018). [PAGE 10]
- MLB payroll Δ = +17%, 95% CI [3%, 30%] (2009→2018). [PAGE 10]
- MLB franchise value growth: 225% over period. [PAGE 7]

RETROCAUSAL_GENEALOGY:
- Lineage: Butler (1995) within-season; Schmidt & Berri (2004), Vrooman (2009) across-season; Fort & Maxcy (2003) definition; Lee & Fort (2005), Brave & Roberts (2019) measurement lack of consensus; Ferguson et al. (2000) MLB example; Blass (1992) revenue sensitivity.
- Historical: reserve clause end/free agency late 60s/early 70s (PAGE 4); CBAs 2012 and 2017 (PAGE 14); MLBAM sale to Disney distributed 2018 (PAGE 7); national TV deal 2014 (PAGE 7); playoff expansion recent CBA (PAGE 14).
- Multi-week traps: (a) assuming disparity and immobility always covary positively; paper shows NBA disparity ↑ immobility flat, NFL opposite, NHL immobility ↓ disparity flat (PAGE 5-6). (b) Assuming non-gate revenue growth alone causes imbalance; all leagues had similar growth but only MLB deteriorated both measures (PAGE 5, 8). (c) Assuming payroll growth tracks revenue growth; payroll growth was roughly zero 2006-2014 and concentrated 2014-2019 (PAGE 11).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: When non-gate revenue is decoupled from performance, owners regress to low-payroll habits (MLB all-or-nothing, tanking, service-time manipulation). This is a recursive habit: low payroll → low wins → low gate → but non-gate revenue insulates → repeat.
- Counter-trap: NBA model—revenue sharing to low-value franchises + luxury tax prevents richest from monopolizing free agency. Low-value NBA teams increased payroll most after 2014 (PAGE 13).
- Clock: 2009 baseline, 2014-2019 payroll growth window, CBA 2012/2017, salary floor discussions likely misguided because small-market teams already spent windfalls on payroll (PAGE 14). The clock matters: interventions timed to revenue cycles (e.g., playoff expansion) reinforce effects if tied to performance.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical/weather: Not applicable as binding constraints; paper is institutional economics. The only stochastic physical layer is η_it (game/player performance uncertainty), bounded by σ and ω (baseline variability not subject to bargaining). Weather/injuries are subsumed into η and are vetoed from policy leverage by assumption: they cannot be collectively bargained away.
- Institutional veto layers: (1) CBA determines φ and θ; (2) revenue-sharing rules determine distribution of non-gate windfalls; (3) salary cap architecture (hard vs soft/luxury tax) determines pass-through to payroll; (4) free agency eligibility clock determines θ. These veto market forces that would otherwise equalize talent.

RLVR_COUNTERFACTUAL_VETOES:
1. Scenario: MLB redistributes non-gate revenue proportional to on-field performance (winning percentage) rather than market size. Veto: Large-market owners oppose because it reduces their bargaining power and windfall. Prediction: θ decreases; D_t and M_t both decline jointly (inward frontier shift), per PAGE 3 logic that θ increases unambiguously worsen both dimensions.
2. Scenario: MLB adopts NFL-style hard salary cap (no luxury tax soft cap). Veto: MLBPA and large-market teams resist hard cap; current soft cap/luxury tax permits payroll dispersion. Prediction: D_t falls due to payroll compression (cf. NFL/NHL tight clustering, PAGE 13), but M_t response ambiguous—depends on whether φ becomes more negative (more mean reversion via draft) or less; if draft strengthens, M_t falls, but if tanking incentives persist, M_t may not fall.
3. Scenario: Shorten time to free agency (e.g., from 6 years to 4 years). Veto: Small-market owners fear payroll inflation; current CBA delays free agency to suppress pre-free-agent talent costs (draft slotting, international signing rules, PAGE 8-9). Prediction: θ → 0, making shocks less sticky; M_t decreases unambiguously (talent less sticky year-to-year), and D_t decreases as players capture MRP and mobility rises (PAGE 4, 15).

I need to ensure total words >= 1000. THINK_TRACE >= 400. Let me write robustly.

Also must avoid any betting lines. No spreads, totals, moneylines, odds. I won't mention any of those.

Let's compose carefully.

Check page citations: I'll use [PAGE 1], [PAGE 2], etc. based on the embedded page numbers in the source. The source has page numbers like "1", "2", etc. appearing as standalone numbers in the text flow. I'll reference them.

One issue: The source text as provided has some page numbers that might not perfectly align with the content I'm citing, but I'll do my best based on the sequence.

For example:
- Page 1: Introduction text ends with "1" then Section 2 starts.
- Page 2: Section 2 text, ARMA(1,1), ends with "2".
- Page 3: Equations (3), Figure 1 discussion, ends with "3" then Figure 1.
- Page 4: Figure 1 notes, Section 3 start, ends with "4".
- Page 5: Section 3 continued, Figure 2 discussion, ends with "5" then Figure 2.
- Page 6: Figure 2 notes, Figure 3 discussion? Actually Figure 3 is on page 7? Let's check: after Figure 2 notes page 6, then Figure 3 caption page 7? The text shows:
  - "5" then Figure 2 caption.
  - "6" then Figure 3 caption.
  - "7" then Figure 4 caption.
  - Then page 8 text: "Using estimates..."
  - Page 9 text: "But if you stare..."
  - Page 10 text: "9" then "In the context..."? Wait, let's re-read carefully.

Actually looking at the raw text:
- After Figure 1 notes: "**Figure 1.** ... 4" (so page 4)
- Section 3 starts on page 4? No, Section 3 heading is after Figure 1? Let's see:
  - Page 3 ends with "3" then Figure 1 caption with "4" after it? Wait:
    - "3" appears after equation discussion.
    - Then "**Figure 1.** ... Notes: ... 4" — so page 4.
    - Then "## **3. Competitive Balance & Non-gate Revenues**" starts.
    - Then "5" appears after discussion of other leagues.
    - Then "**Figure 2.** ... 6" — page 6.
    - Then "**Figure 3.** ... 7" — page 7.
    - Then "**Figure 4.** ... 8" — page 8.
    - Then text continues: "Using estimates..." page 8? Then page number "9" appears.
    - Then text continues... page 10 appears.
    - Then "**Figure 5.** ... 11" — page 11.
    - Then text continues... page 12 appears.
    - Then "**Figure 6.** ... 13" — page 13.
    - Then text continues... page 14 appears.
    - Then Conclusion... page 15? References page 16.

This is a bit jumbled but I can cite approximate pages based on the visible numbers. I'll just cite [PAGE N] where N corresponds to the visible page markers nearest the content.

I think I have enough. Let's write the final output with exact XML tags.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central analytical object is a league-level ARMA(1,1) process for team winning percentages, with mean µ = 0.5 (PAGE 2). In deviation form, x_it = w_it − µ follows x_it = φ x_{i,t−1} + η_it + θ η_{i,t−1}, where φ ∈ (−1, 0) is the mean-reverting correction term enforced by reverse-draft and roster rules, and θ ∈ (0, 1) is the moving-average persistence parameter capturing how long ex-post underpriced talent remains sticky on a roster (PAGE 2–3). The shock η_it reflects win-share deviations from payroll-implied expectations, and its variance is bounded below by an irreducible baseline variability ω that neither owners nor players can bargain away (PAGE 2). The two competitive-balance metrics are defined as disparity D_t ≡ Std_i[w_it] (within-season standard deviation of winning percentages) and immobility M_t ≡ pooled first-order autocorrelation of w_it (PAGE 3). The paper asserts M(φ, θ) is strictly increasing and D(φ, θ) strictly decreasing in φ over φ ∈ (−θ, 0), which creates the parity–mobility trade-off: making φ less negative (weaker mean reversion) lowers disparity but raises immobility, and vice versa (PAGE 3). Figure 1 parameterizes this with σ = 0.3 and θ ∈ {0.8, 0.9} over φ ∈ [−θ, −0.01]; increasing θ shifts the entire frontier outward, unambiguously worsening both dimensions (PAGE 3). The boundary φ = −θ is a singularity in the policy space: below it the league could reduce both D and M simultaneously, so rational league choice never selects φ < −θ (PAGE 3).

The gray-zone audit concerns missing displayed equations. The extracted text contains blank placeholders where the ARMA(1,1) law of motion and the closed-form D(φ, θ, σ), M(φ, θ, σ) functions should appear; I therefore do not invent fake ratios or closed forms, and I flag that exact elasticities ∂D/∂θ and ∂M/∂θ are not computable from the provided pages. The breakdown regime is θ → 1 (shocks fully sticky) combined with φ → 0 (no mean reversion), which would collapse mobility and maximize disparity absent the exogenous σ floor.

Empirically, the multi-hop causal chain is: non-gate revenue growth → weaker performance sensitivity of revenue → increased owner bargaining power in CBA negotiations → higher equilibrium θ → simultaneous increases in D_t and M_t (PAGE 4, 8–9). This chain fits MLB (national TV deal 2014, MLBAM sale distributed 2018, franchise values +225%, both balance measures deteriorated) but not the other leagues, which experienced similar non-gate explosions yet divergent balance outcomes (PAGE 5–7). The distinguishing variable is the distribution of windfalls: MLB high-value franchises captured nearly twice the non-gate revenue growth of low-value franchises, whereas the NFL and NHL shared gains evenly and the NBA directed more to low-value franchises (PAGE 11–12). Payroll pass-through followed the same fault lines: MLB payroll growth 2014–2019 was entirely explained by franchises outside the top value quartile, while NBA low-value franchises increased payroll the most (PAGE 13). Hard caps in the NFL/NHL compressed payroll variation; MLB/NBA soft caps with luxury taxes permitted dispersion (PAGE 13).

A secondary temporal trap is the 2009 baseline used in the team fixed effects (equation 5): log Y_it normalized so β_i,2009 = 0, with 100·β_i the average percent change relative to 2009 (PAGE 9–10). Payroll growth was roughly zero across leagues from 2006–2014 and only became positive in 2014–2019, meaning any causal claim about non-gate revenue and payroll must condition on this post-2014 window (PAGE 11). The CBA years 2012 and 2017 are treated as equilibrium shifts reflecting owner bargaining power (PAGE 14). All of this operates above the physical/biomechanical layer; weather and injuries enter only as the unbounded noise η_it, which the model explicitly treats as non-bargainable baseline variability.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal notation (dimensions in brackets):

- w_it: team i winning percentage in season t, dimensionless, support [0,1], µ ≡ 0.5 (PAGE 2).
- ARMA(1,1) law of motion (display omitted from extracted text; reconstructed consistent with verbal description on PAGE 2–3):
  w_it − µ = φ(w_{i,t−1} − µ) + η_it + θ η_{i,t−1},
  φ ∈ (−1, 0), θ ∈ (0, 1), η_it i.i.d. mean-zero shock with variance σ².
- σ = 0.3 used in Figure 1 calibration (PAGE 3).
- D_t ≡ Std_i[w_it], dimensionless, unit: standard deviation of winning percentage (PAGE 3, equation 3).
- M_t ≡ pooled first-order autocorrelation of w_it across teams and seasons, dimensionless, range [−1,1] (PAGE 3–5).
- Monotonicity restrictions (PAGE 3): ∂M/∂φ > 0 and ∂D/∂φ < 0 for φ ∈ (−θ, 0).
- Frontier boundary: φ = −θ; region φ ∈ (−θ, 0) is the trade-off set; φ < −θ is dominated (PAGE 3).
- Figure 1 grid: φ ∈ [−θ, −0.01], θ ∈ {0.8, 0.9}, σ = 0.3 (PAGE 3).
- Team fixed-effect regression (equation 5, PAGE 9–10):
  log Y_it = α_i + λ_t + Σ_τ β_{iτ} 1{t = τ} + ε_it,
  Y_it ∈ {non-gate revenue, payroll}, deflated to 2018 U.S. dollars (PAGE 10 footnote 2).
  Normalization β_{i,2009} = 0; 100·β_{iτ} = average percent change in Y_it relative to 2009.
- Empirical estimates (PAGE 10): MLB average non-gate revenue +49% from 2009 to 2018, 95% CI [45%, 54%]; MLB total payroll +17% from 2009 to 2018, 95% CI [3%, 30%].
- MLB franchise values increased 225% over the sample period (PAGE 7).

Breakdown/singularity: If σ → 0 (no irreducible game uncertainty), the model degenerates to deterministic roster differences and the ω baseline vanishes; this is outside the sports domain because player performance and game outcomes retain intrinsic uncertainty. If θ → 1 and φ → 0 simultaneously, immobility → 1 and disparity is maximized, a regime inconsistent with the observed φ < 0 constraints of reverse-draft rules.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage stacks four measurement traditions: Butler (1995) emphasized within-season win concentration; Schmidt & Berri (2004) and Vrooman (2009) emphasized across-season mobility; Fort & Maxcy (2003) defined the league-level competitive concept; Lee & Fort (2005) and Brave & Roberts (2019) documented the lack of consensus on measurement, which the paper treats as evidence that balance is multi-dimensional (PAGE 1). The micro-foundation borrows Ferguson, Jones & Stewart (2000) on MLB collective bargaining as a Nash equilibrium over roster-control parameters, producing a wedge between player salaries and marginal revenue product (PAGE 2). Blass (1992) provides the institutional fact that MLB non-gate revenue is the least sensitive to on-field performance, which underpins the owner-bargaining-power mechanism (PAGE 8).

Historical regime shifts are dated explicitly: the end of the reserve clause and rise of free agency in the late 1960s/early 1970s lowered equilibrium θ in MLB and improved both parity and mobility (PAGE 4). The NFL, NBA, and NHL followed similar collective-bargaining timing, producing synchronized improvements across the big four leagues (PAGE 4–5). The modern divergence begins around 2009: non-gate revenue growth outpaced gate revenue in all four leagues (PAGE 7); MLB’s national TV deal commenced in 2014 and MLB Advanced Media proceeds were distributed in 2018 (PAGE 7); CBAs were signed in 2012 and 2017 (PAGE 14). The average MLB player salary fell 6% from 2017–2021, the first multi-year decline since 2004 (PAGE 8).

Multi-week traps: (1) Treating disparity and immobility as always positively correlated. The paper shows they diverge: NBA disparity rose slightly without immobility change; NFL moved oppositely; NHL immobility fell with disparity roughly flat (PAGE 5–6). (2) Attributing imbalance solely to non-gate revenue magnitude. All leagues had similar non-gate explosions and player-share declines, yet only MLB deteriorated on both measures (PAGE 5, 8). (3) Assuming revenue growth mechanically funds payroll. Payroll growth was effectively zero from 2006–2014 and concentrated in 2014–2019, so the causal window is narrow and post-2014 (PAGE 11).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When non-gate revenue is decoupled from winning, owners regress to low-payroll habits—“all-or-nothing” tanking, service-time manipulation, and resistance to arbitration raises—because gate receipts no longer discipline spending (PAGE 8–9). This recurs each season: low payroll suppresses wins, but non-gate windfalls insulate the balance sheet, so the low-payroll equilibrium is reproduced.

Counter-trap: The NBA model places non-gate money in the hands of low-value franchises most likely to spend it on talent, while the luxury tax prevents the wealthiest clubs from pricing others out of free agency (PAGE 13). Empirically, the lowest-value NBA franchises increased payroll the most after 2014, coinciding with favorable balance trends (PAGE 13). This is a counter-trap to the MLB outcome, where high-value franchises captured the revenue and did not fully pass it through.

Clock: The identification clock runs from a 2009 baseline (β_{i,2009} = 0), through the 2014–2019 payroll-growth window, past the 2012 and 2017 CBAs, and into the recent playoff-field expansion (PAGE 10, 14). A salary floor is adjudged misguided because small-market MLB teams already raised payrolls on average from their windfalls; the binding constraint is not a floor but the allocation rule for non-gate revenue and the time-to-free-agency clock (PAGE 14–15). Shortening free agency would reduce θ, lower stickiness, and let players capture marginal revenue product sooner (PAGE 4, 15).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather layer: The paper is an institutional-economics model; weather, injuries, and biomechanics are not explicit state variables. They enter only as the performance shock η_it, bounded below by the irreducible variability ω that the model assumes cannot be altered by collective bargaining (PAGE 2). Thus weather and injury variance are vetoed from policy leverage by assumption: they are exogenous noise, not choice variables.

Institutional veto layers (binding): (1) CBA determination of φ and θ (PAGE 2); (2) revenue-sharing architecture deciding whether non-gate windflows accrue to high- or low-value franchises (PAGE 11–12); (3) salary-cap regime—hard caps in NFL/NHL compress payroll dispersion, soft caps/luxury taxes in MLB/NBA permit it (PAGE 13); (4) free-agency eligibility clock setting θ through draft slotting and international signing rules (PAGE 8–9). These institutional vetoes override any market force that would otherwise equalize talent through payroll competition.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: MLB redistributes non-gate revenue in proportion to on-field winning percentage rather than local market size.
Veto: Large-market owners block performance-linked sharing because it erodes their bargaining power and non-gate windfall (PAGE 8–9, 14).
Prediction: θ decreases; D_t and M_t decline jointly (inward frontier shift), per the result that increases in θ unambiguously worsen both dimensions (PAGE 3).

Scenario 2: MLB replaces the luxury-tax soft cap with an NFL-style hard salary cap.
Veto: MLBPA and large-market clubs resist a hard cap because it removes payroll discretion and luxury-tax strategic flexibility (PAGE 13–14).
Prediction: D_t falls due to payroll compression (cf. tight NFL/NHL clustering, PAGE 13); M_t is ambiguous—depends on whether harder mean reversion (more negative φ via draft incentives) dominates persistent tanking incentives under a hard cap.

Scenario 3: Shorten time to free agency (e.g., six years to four).
Veto: Small-market owners fear payroll inflation and currently prefer draft slotting and international-signing restrictions that suppress pre-free-agent talent costs (PAGE 8–9).
Prediction: θ → 0, making performance shocks less sticky year-to-year; M_t decreases unambiguously (talent mobility rises) and D_t decreases as players capture marginal revenue product and rosters rebalance more frequently (PAGE 4, 15).
</RLVR_COUNTERFACTUAL_VETOES>