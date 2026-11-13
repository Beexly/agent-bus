---
source: "2013 Using Zone Entry Data To Separate Offensive, Neutral, And Defensive Zone Performance.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 6
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4741
---

<NATIVE_REASONING>
The user wants a deep analytical response to a specific hockey research paper: "Using Zone Entry Data To Separate Offensive, Neutral, And Defensive Zone Performance" (2013). They have provided all 6 pages of source text.

Key constraints:
1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations.

I need to treat this as a formal scientific/analytical paper review with the specified sections. Let's plan content.

Source paper summary:
- Authors: Eric Tulsky, Geoffrey Detweiler, Robert Spencer, Corey Sznajder.
- 2013 Research Paper Competition.
- Data: 330 games tracked (2011-12 NHL season), full season for Flyers and Wild, half-season for Capitals and Sabres, ~7-10 games for others.
- Method: Record zone entries (time, player who sent puck, method: carry, dump, misc). Merge with play-by-play. Break game into segments from zone entry/offensive zone faceoff to next. Extract shots and goals per offensive zone possession. Use shift charts for players on ice.
- Scorer variability: Figure 1 correlation matrices; >85% agreement on entries; most common discrepancy omitted entry. Omission bias only; distribution of entry types consistent.
- Table 1: Carry-in shots/entry 0.55 vs dump-in 0.24 (PHI entries for), etc. Carry >2x dump. Goals similar ratio.
- Zone performance score equation (Page 3): They show a formula with Sh_EWP, Sh_EWoP, EWP, EWoP, EWP%. O = opponent allowed. * = league average. Offensive zone score = function of shots per entry with/without possession. Defensive = opponents' shots per entry. Neutral = % of each type of entry gotten/allowed.
- Results: Neutral zone scores varied (Flyers 51.1%, Sabres 50.6%, Capitals 49.3%, Wild 45.7%). Offensive/defensive zone scores narrow (48.8%-51.0%).
- Intra-team comparisons: Figure 2: Flyers forward skill (ice time, point scoring rate) vs offensive zone score: strong ice time/point correlation, but little correlation with offensive zone score. Similar for Wild defensemen defensive zone score.
- Table 2: Split-half reliability (odd/even games). Neutral zone score consistently meaningful at half-season level (correlations ~0.5-0.7). Offensive zone scores essentially random. Defensive zone scores weak persistence.
- Puck handling metrics: Responsibility (entries sent / team entries while on ice) and success (fraction of individual entries with possession). Figure 4: Flyers better than Wild at keeping possession. Wayne Simmonds (#17) vs Daniel Briere (#48) example: Simmonds responsible for more entries despite Briere more effective. Wild lines inefficient.
- Table 3: Capitals games, failed carry attempts recorded. Expected outcomes: Successful carry net overall value 0.50; Failed carry -0.08; Carry attempt 0.42; Dump-chase 0.12; Dump-change -0.10. Carry attempt still better than dump-chase despite turnover risk. Only 14% of carry-in attempts resulted in turnover.
- Decision curve (Figure 5): Expected net shots = p * (shots_on_success - shots_against_on_loss?) Need to reconstruct. Text: "The expected net shots for that attempt and the subsequent entry can be calculated as follows:" but equation is blank in text (rendering issue). However they describe threshold: at 0.57 shots per successful entry, need only 34% confidence of success to make carry preferable to dump-in given equal shooting percentages. Drops to 26% if expect 9% shooting and hold opponents to 7%. For 7% team threshold 44%.
- Conclusion: Talent for shot differential derives almost entirely from neutral zone play. Attack zone talent largely confined to shot quality effects. Strategic inefficiencies in lineup construction and aggressiveness at blue line.

Now I need to write formal LaTeX equations. I cannot invent toy equations, but I can formalize the paper's concepts with proper notation. The user says "Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes."

I should formalize:
- Zone entry process as a marked point process or renewal-reward process.
- Shots per entry as a rate: λ (shots per entry). Units: shots·entry⁻¹.
- Entry types: c (carry/possession), d (dump/no possession), m (misc).
- Expected shots per entry: E[S|type].
- Neutral zone score as a function of entry differential and possession fraction.
- Possession fraction φ = EWP / (EWP + EWoP). Dimensionless [0,1].
- Offensive zone score OZS = f(Sh_EWP, Sh_EWoP). Perhaps difference from league average weighted by entry mix.
- Defensive zone score DZS = f(O_Sh_EWP, O_Sh_EWoP).
- Neutral zone score NZS = f(EWP%, O_EWP%). Actually described as how many of each type of entry the team gets and allows.
- Expected net value of carry attempt: V_carry = p·(S_success + future) + (1-p)·(S_fail + future). Use Table 3 numbers.
- Breakdown regime: small sample size (half-season) leads to noise dominance; scorer omission bias; singularity when entry counts → 0 (shots per entry undefined); p → 0 or 1 boundaries.

I must cite exact [PAGE N] markers. Example: [PAGE 1], [PAGE 2], etc.

I must include verbatim quotes where appropriate. I'll quote key sentences.

Word count: >=1,000 words total across sections, with THINK_TRACE >=400 words.

Let's draft sections.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Discuss the chain from raw zone entry data → possession-adjusted performance → neutral zone dominance. Audit gray zones: scorer omission bias (Figure 1, Table 1 notes), intra-team vs inter-team comparison limitations, split-half reliability and false positives (multiple correlations), the blank equation on page 4 (rendering artifact), the assumption that failed carry outcomes are stationary across marginal plays, the exclusion of dump-and-change plays introducing subjectivity, the 3% odd-man rush frequency, the 14% turnover rate on carry attempts, the confidence threshold derivation (34%, 26%, 44%), and the generalization from Capitals-only Table 3 to league-wide strategy. Also note that shot differential is primary driver [PAGE 1], but zone decomposition shows offensive/defensive zone scores random at single-season level [PAGE 4]. This is a multi-hop inference: entry method → shots per entry → entry differential → neutral zone score → team success. Gray zones: observer omission bias can inflate shots per entry [PAGE 3]; single-observer per team limits cross-team comparability [PAGE 3]; defensive zone score weak persistence may be false positive due to multiple comparisons [PAGE 4]; the decision curve assumes linear additivity of shots and ignores state dependence (score, time, home/away) not in source.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
Define:
- Entry set ℱ = {e_i}, i=1..N_entries.
- Mark m(e_i) ∈ {carry, dump, misc}.
- Shots S(e_i) ∈ ℕ₀.
- Rate: λ_c = E[S | m=carry], λ_d = E[S | m=dump]. From Table 1: λ_c ≈ 0.55, λ_d ≈ 0.24 shots·entry⁻¹ [PAGE 2]. Ratio λ_c/λ_d > 2 [PAGE 1 abstract].
- Possession fraction: φ_team = N_carry / (N_carry + N_dump) ∈ [0,1].
- Offensive zone score: OZS = [λ_c·φ + λ_d·(1-φ)] - [λ_c^*·φ^* + λ_d^*(1-φ^*)] maybe weighted. But need to be careful not to invent. Better to state the paper's conceptual definition verbatim and then formalize: OZS is deviation of team's shots per entry (given their entry mix) from league-average shots per entry under same mix. Let \bar{s}_{team} = φ λ_c + (1-φ) λ_d. \bar{s}_{league} = φ λ_c^* + (1-φ) λ_d^*. Then OZS ∝ \bar{s}_{team} - \bar{s}_{league}. Units: shots·entry⁻¹.
- Defensive zone score: DZS ∝ (\bar{s}_{opp,team} - \bar{s}_{opp,league}).
- Neutral zone score: NZS ∝ (φ_team - φ_opp) or entry differential ΔE = (E_for - E_against)/E_total. Paper says NZS for teams with 40+ games: Flyers 51.1%, etc. [PAGE 3].
- Reliability: split-half correlation ρ = corr(metric_odd, metric_even). Significance threshold 95% [PAGE 4 Table 2].
- Expected value of carry attempt: V(p) = p·V_success + (1-p)·V_fail, where from Table 3 [PAGE 6]: V_success = 0.50 net shots, V_fail = -0.08 net shots, V_dumpchase = 0.12. Solve p·0.50 + (1-p)·(-0.08) > 0.12 → p > (0.12+0.08)/(0.50+0.08) = 0.20/0.58 ≈ 0.3448 → 34% [PAGE 6 text]. Good, that's a derivation from provided numbers, not a toy equation.
- Singularity: N_entries → 0 makes λ undefined (division by zero). Breakdown when scorer omission rate high [PAGE 2].
- Units: shots per entry (dimensionless rate), probability dimensionless, time in seconds (SI), percentage dimensionless.

<RETROCAUSAL_GENEALOGY>: Historical lineage. Connect to shot differential as primary driver [PAGE 1], references [1-3] (JLikens, Vic Ferrari) on even strength shooting percentage and outshooting. The "possession metrics" lineage (Corsi, Fenwick) but this paper identifies mechanism: neutral zone control. Multi-week traps: small sample traps (half-season reliability), scorer bias trap, correlation ≠ causation trap (ice time vs defensive zone score inverse relationship [PAGE 4]), conservative coaching trap (misaligned incentives [PAGE 6]), and the "dump-and-change is safe" trap disproven by Table 3 [PAGE 6].

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is more abstract. Crisis habit regression: coaches regress to dump-in under pressure because it's "safe" (traditional wisdom), even though data says carry-in yields 0.42 vs 0.12 net shots [PAGE 6]. Counter-trap: aggressive carry-in can be exploited if defense overplays; the paper notes marginal situations turnover frequency may be higher than 14% [PAGE 6]. Clock: end-of-game situations, protecting lead, the value of dump-and-change for line changes vs carrying. Need to discuss recursive theory of mind: coach thinks opponent thinks I will dump, so I carry; but if opponent anticipates carry, they defend blue line harder, lowering p. The decision curve threshold depends on p and shots per successful entry [PAGE 6 Figure 5]. Multi-week trap: over a season, consistent neutral zone skill compounds; single-game noise swamps offensive/defensive zone talent [PAGE 4].

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Hockey is indoor, ice rink, weather not directly applicable but rink conditions (ice quality) can affect puck handling. Biomechanical: player's ability to carry puck through neutral zone depends on skating speed, stickhandling, vision; fatigue over a shift (45-60s) affects decision at blue line. Physical veto: if a team's defensemen cannot exit zone, neutral zone score irrelevant because they never get entries. Veto proof: The paper's conclusion that neutral zone dominates is robust only if entry recording is objective (puck crossing blue line is discrete event [PAGE 2]) and scorer agreement >85% [PAGE 2]. Veto conditions: (1) scorer omission bias >15% invalidates shots-per-entry rates; (2) sample <40 games makes neutral zone score unreliable [PAGE 3]; (3) extreme score states (blowouts) change entry strategy, not captured in 5-on-5 data; (4) ice temperature/resurfacing affects puck bounce but not recorded. Since indoor, weather veto is null; however arena-specific board glass and lighting are physical layers not modeled.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR (Reinforcement Learning Verifiable Reward?) veto scenarios + predictions. RLVR likely means Reinforcement Learning Verifiable Rewards or some verification framework. I'll interpret as verifiable counterfactual veto scenarios: if condition X, then prediction Y, veto if violated.
Scenario 1: Scorer omission rate >15% in a new game sample → predicted correlation between odd/even neutral zone scores drops below 0.4; veto if reliability remains high despite high omission.
Scenario 2: A team increases carry-in attempt probability p above 34% threshold on well-defended entries but does not see net shots per entry rise above dump-chase baseline (0.12) → veto the carry-in advantage hypothesis.
Scenario 3: A defenseman with high defensive zone score (per traditional metrics) but low neutral zone involvement (low fraction of entries with possession while on ice) is claimed to drive shot suppression → veto if split-half correlation for defensive zone score remains <0.2 over full season.
Include predictions and verification metrics.

Need to ensure no betting lines. None.

Word count check: THINK_TRACE alone needs >=400 words. Total >=1000. I'll write generously.

Need to use exact XML section names. No extra sections.

Let's draft carefully.

I need to include verbatim quotes with [PAGE N]. Let's pick some:
- [PAGE 1]: "Recording when the puck is brought across the blue line makes this transformation possible, enabling a true assessment of performance in the offensive or defensive zone."
- [PAGE 1]: "the team’s shot differential – which has been shown to be a strong predictor of wins – is determined almost entirely in the much less-heralded neutral zone."
- [PAGE 2]: "Since the puck crossing the blue line is a discrete, objective event, zone entry counts might be expected to be less problematic, but the scorers do still have a few decisions to make."
- [PAGE 2]: "more than 85% of the time" (observer agreement).
- [PAGE 3]: "Neutral zone success involves more than getting extra zone entries; since carrying the puck across the blue line generates more than twice as many shots, scoring chances, and goals as dumping the puck in..."
- [PAGE 3]: "Offensive zone scores appear to be essentially completely random."
- [PAGE 4]: "only the neutral zone score is consistently meaningful at the half-season level."
- [PAGE 4]: "The most likely conclusion is that the shots-per-possession component of shot differential is heavily driven by luck at the single-season level."
- [PAGE 6]: "Contrary to popular understanding about the importance of making a team go the full length of the ice, failed attempts to carry the puck into the zone actually lead to fewer shots against than dump-and-chase plays..."
- [PAGE 6]: "one needs to be only 34% confident of success to make an attempted carry-in preferable to a dump-in given equal shooting percentages."

LaTeX equations:
I need to write formal LaTeX. Use \( ... \) or \[ ... \]. I'll write them clearly.

Equation 1: Entry-type conditional shot rate.
\[
\lambda_{\kappa} = \mathbb{E}[S \mid M=\kappa], \quad \kappa \in \{\text{carry}, \text{dump}, \text{misc}\}
\]
Units: shots·entry⁻¹.

Equation 2: Possession fraction.
\[
\phi = \frac{N_{\text{carry}}}{N_{\text{carry}} + N_{\text{dump}}} \in [0,1]
\]

Equation 3: Team expected shots per entry.
\[
\bar{s}_{\text{team}} = \phi \lambda_{\text{carry}} + (1-\phi)\lambda_{\text{dump}}
\]

Equation 4: Zone score deviation (conceptual).
\[
\text{OZS} \propto \bar{s}_{\text{team}} - \bar{s}_{\text{league}}^{*}
\]
where starred quantities are league-average conditional rates under same entry mix.

Equation 5: Neutral zone score as entry differential / possession share.
\[
\text{NZS} \propto \frac{E_{\text{for}} - E_{\text{against}}}{E_{\text{for}} + E_{\text{against}}} \quad \text{or} \quad \phi_{\text{for}} - \phi_{\text{against}}
\]

Equation 6: Split-half reliability.
\[
\rho = \operatorname{corr}(X_{\text{odd}}, X_{\text{even}})
\]
Significance at 95% threshold [PAGE 4].

Equation 7: Expected net value of carry attempt.
From Table 3:
\[
V_{\text{carry}}(p) = p \cdot (0.50) + (1-p) \cdot (-0.08)
\]
Set > V_dumpchase = 0.12:
\[
p > \frac{0.12 - (-0.08)}{0.50 - (-0.08)} = \frac{0.20}{0.58} \approx 0.345
\]
This yields 34% threshold stated in text [PAGE 6].

Equation 8: Singularity condition.
\[
N_{\text{entries}} \to 0 \implies \lambda_{\kappa} \text{ undefined (division by zero)}
\]

Breakdown regime: half-season N_games < ~40 leads to noise dominance [PAGE 3-4].

I need to avoid toy equations. These are derived from the paper's actual metrics and tables, so they should be fine.

Now, assemble the response. Ensure all 6 XML sections are present and in order. Word count.

Let's write.

THINK_TRACE: I'll write ~500 words. Cover multi-hop: raw discrete event (puck crossing blue line) → entry type → shots per possession → zone scores → shot differential → wins. Gray zones: scorer omission bias, intra-team vs inter-team, small sample, multiple comparisons, blank equation rendering, stationarity assumption of failed carry across marginal plays, odd-man rush rarity (3% [PAGE 6]), exclusion of dump-and-change subjectivity [PAGE 2], generalization from Capitals Table 3 [PAGE 6]. This is deep.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX and units and citations. Maybe ~300 words.

RETROCAUSAL_GENEALOGY: ~200 words. Historical lineage: shot differential, possession metrics (Corsi/Fenwick lineage though not named), JLikens/Ferrari blogs. Multi-week traps: small sample, scorer bias, conservative coaching, recursive game theory at blue line.

RECURSIVE_THEORY_OF_MIND: ~200 words. Crisis habit regression (dump-in under pressure), counter-trap (defense anticipates carry, lowering p), clock (end of game, line changes). Multi-week trap: single-game noise vs season skill.

CROSS_LAYER_VETO_ADJUDICATION: ~150 words. Physical: indoor rink, ice quality; biomechanical: skating/stickhandling/fatigue; weather null but arena microclimate. Veto conditions enumerated.

RLVR_COUNTERFACTUAL_VETOES: ~150 words. 3 scenarios with predictions.

Total should exceed 1000 words easily.

Need to be careful: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I have page markers in text. I will include [PAGE N] after quotes and facts.

No mention of betting. No spreads, totals, moneylines, odds. Good.

No fake ratios. My equations are formal and derived.

Let's produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s causal chain proceeds from a discrete, objective observable—the puck crossing the blue line [PAGE 2]—to a marked entry event (carry, dump, or miscellaneous) [PAGE 2], then to shots and goals per offensive-zone possession [PAGE 1], and finally to zone-specific performance scores that purport to isolate offensive, defensive, and neutral-zone talent [PAGE 3]. The first multi-hop inference is that because offensive skill can prolong possession and thereby suppress opponent shots, raw per-game defensive statistics are confounded [PAGE 1]; the remedy is to condition on entries, i.e., to estimate λκ = E[shots | entry type κ] for κ ∈ {carry, dump} [PAGE 2, Table 1]. The second hop is the discovery that λcarry ≈ 0.55 versus λdump ≈ 0.24 shots·entry⁻¹ for Philadelphia entries-for, a greater-than-twofold gap that holds across Flyers, Wild, Capitals, Sabres, and rest-of-league subsets [PAGE 2, Table 1; PABE 1 abstract]. This shifts the explanatory burden upstream: if entry method dominates offensive-zone conversion, then the variable that matters most is which team secures which entry type in the neutral zone.

The gray-zone audit begins with scorer variability. The authors acknowledge that while the blue-line crossing is discrete, the carry/dump boundary is occasionally ambiguous, and dump-and-change plays were explicitly excluded, introducing subjectivity [PAGE 2]. Observer agreement exceeds 85% [PAGE 2], but the dominant discrepancy is omission—one observer records an entry the other missed [PAGE 2]. Because shots per entry is a ratio, systematic omission inflates λκ and thereby biases offensive-zone scores upward and defensive-zone scores downward [PAGE 3]. A single observer recorded the bulk of games for each team, so cross-team offensive and defensive zone scores are difficult to compare accurately [PAGE 3]; intra-team comparisons neutralize this bias but sacrifice generalizability [PAGE 3].

The next gray zone is statistical persistence. Split-half (odd/even game) correlations show offensive-zone scores are “essentially completely random” [PAGE 4], while neutral-zone scores are the only metric consistently meaningful at the half-season level [PAGE 3-4]. Defensive-zone scores show weak persistence for Wild defensemen, but the authors caution that with so many correlations computed, false positives are expected [PAGE 4]; the inverse relationship between ice time and defensive-zone score is more plausibly noise than a coaching pathology [PAGE 4]. A rendering artifact on [PAGE 4] leaves the expected-value equation blank in the source text, though the surrounding prose supplies sufficient numerical structure to reconstruct the 34% carry-attempt confidence threshold from Table 3 [PAGE 6]. Further assumptions under test: that failed-carry outcomes in marginal plays are stationary with the observed 14% turnover rate [PAGE 6]; that odd-man rushes (<3% of entries) do not materially confound the carry/dump contrast [PAGE 6]; and that Capitals-specific expected-value estimates generalize league-wide [PAGE 6]. Finally, the conclusion that shot-differential talent resides almost entirely in the neutral zone depends on treating the 5-on-5 entry process as representative of all game states; score effects, fatigue across a 60-minute clock, and special-teams entries are outside the recorded frame [PAGE 1-2].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let N_entries denote the total count of recorded zone entries over the tracked sample (330 games; full seasons for Philadelphia and Minnesota, half-seasons for Washington and Buffalo, ~7–10 games for others [PAGE 2]). Each entry e_i carries a mark M(e_i) ∈ {carry, dump, misc} and an associated shot count S(e_i) ∈ ℕ₀ extracted from play-by-play over the ensuing offensive-zone possession [PAGE 1-2]. The conditional shot rate for entry type κ is

\[
\lambda_\kappa \;=\; \mathbb{E}\!\left[S \mid M=\kappa\right], \qquad \kappa \in \{\text{carry}, \text{dump}, \text{misc}\},
\]

with units shots·entry⁻¹. Table 1 reports λcarry ≈ 0.55 and λdump ≈ 0.24 for Philadelphia entries-for, λcarry ≈ 0.58 and λdump ≈ 0.26 for Minnesota entries-for, and analogous values for Washington, Buffalo, and the rest-of-league subset; every subset shows λcarry > 2·λdump at 5-on-5 [PAGE 2]. Each table entry rests on at least 3,000 5-on-5 entries [PAGE 2].

The possession fraction for a team or player-shift cohort is

\[
\phi \;=\; \frac{N_{\text{carry}}}{N_{\text{carry}} + N_{\text{dump}}} \in [0,1],
\]

dimensionless. The team’s expected shots per entry, given its own entry mix, is

\[
\overline{s}_{\text{team}} \;=\; \phi\,\lambda_{\text{carry}} + (1-\phi)\,\lambda_{\text{dump}}.
\]

The offensive-zone score is a deviation of this quantity from the league-average counterpart \overline{s}^{*}_{\text{league}} computed under the same entry mix [PAGE 3]; units are shots·entry⁻¹. The defensive-zone score applies the same operator to opponent entries allowed, with prefix O denoting results allowed to opponents [PAGE 3]. The neutral-zone score is a function of the entry differential and the share of entries gained with possession versus allowed to opponents; reported values for teams with ≥40 tracked games are Flyers 51.1%, Sabres 50.6%, Capitals 49.3%, Wild 45.7% [PAGE 3], while offensive and defensive zone scores cluster narrowly between 48.8% and 51.0% [PAGE 3].

Split-half reliability is quantified by the Pearson correlation

\[
\rho \;=\; \operatorname{corr}(X_{\text{odd}}, X_{\text{even}}),
\]

dimensionless, assessed against a 95% significance threshold for the number of data points [PAGE 4, Table 2]. Neutral-zone score correlations fall in the 0.5–0.7 range; offensive-zone scores are near zero [PAGE 4].

From Table 3 (Capitals games [PAGE 6]), the expected net-shot value of a carry attempt with success probability p is reconstructed as

\[
V_{\text{carry}}(p) \;=\; p\,(0.50) + (1-p)(-0.08),
\]

where 0.50 net shots is the successful-carry outcome and -0.08 is the failed-carry outcome [PAGE 6]. Comparing to the dump-and-chase baseline V_dumpchase = 0.12 [PAGE 6], the indifference condition yields

\[
p^{*} \;=\; \frac{0.12 - (-0.08)}{0.50 - (-0.08)} \;=\; \frac{0.20}{0.58} \;\approx\; 0.345,
\]

matching the text’s statement that only ~34% confidence of success is needed [PAGE 6]. A higher-skill shooting scenario (9% team shooting, 7% opponent suppression) lowers the threshold to 26%, while a 7% team faces a 44% threshold [PAGE 6].

Singularity and breakdown: λκ is undefined when N_entries(κ) → 0 (division by zero); shots-per-entry ratios become unstable when scorer omission rates are non-negligible [PAGE 2-3]. Half-season samples (< ~40 tracked games) render offensive-zone scores noise-dominated [PAGE 3-4]. The decision-curve analysis assumes linear additivity of shots across the entry and subsequent possession, ignores score-state and time-on-clock conditioning, and extrapolates Capitals-only turnover outcomes to marginal league-wide plays [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in the lineage of shot-differential as the primary driver of NHL outcomes, citing work on even-strength shooting percentage and outshooting [PAGE 1, references [1-3]]. It extends the “possession metrics” tradition—often operationalized as Corsi- or Fenwick-adjacent shot attempt differentials—by identifying the mechanism: teams achieve superior shot differential not by generating more shots per offensive-zone possession, but by controlling the neutral zone to obtain more entries and, crucially, more entries with possession [PAGE 4]. This is a retrocausal repositioning of causality: offensive-zone shot suppression or generation appears random at the single-season level [PAGE 4], so the upstream neutral-zone entry process is the actual talent carrier.

Multi-week traps embedded in this genealogy include (1) the small-sample trap, where half-season defensive-zone score persistence for Wild defensemen is a likely false positive under multiple-comparison inflation [PAGE 4]; (2) the scorer-omission trap, where omitted entries artificially raise shots per entry and distort cross-team zone scores [PAGE 3]; (3) the conservative-coaching trap, where dump-in is treated as safe despite Table 3 showing failed carry attempts produce fewer shots against than dump-and-chase [PAGE 6]; and (4) the ice-time trap, where coaches equate average time on ice with defensive competence even though the data show an inverse, likely spurious relationship with defensive-zone score [PAGE 4]. The 14% carry-attempt turnover rate [PAGE 6] and the sub-3% odd-man rush frequency [PAGE 6] act as boundary conditions: the carry advantage is robust on average but may erode in marginal, well-defended situations where turnover probability rises. Thus the historical arc moves from “shots win games” to “entries win shots” to “neutral-zone entry composition wins entries,” with each step exposing a new small-sample or observer-bias trap.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis-habit regression predicts that coaches, under pressure (protecting a late lead or facing a forecheck), regress to the dump-in because the traditional failure mode—turnover at the blue line leading to an immediate chance against—feels more costly than conceding possession after a dump [PAGE 6]. The recursive theory of mind enters at the blue line: the offense chooses carry vs. dump based on its belief about defensive pressure; the defense chooses its gap based on its belief about the offense’s likelihood to carry. If the offense overestimates p, it turns the puck over at a rate above the observed 14% [PAGE 6]; if the defense overcommits to the carry, it opens lanes for the dump-and-recover game. The paper’s decision curve explicitly models this recursion: the carry/dump indifference threshold falls from 34% to 26% when the offense expects superior shooting (9% vs. 7%) [PAGE 6], implying that skill asymmetry alters the opponent’s best response. Conversely, a less-skilled team facing a 7% shooting opponent needs 44% confidence before carrying becomes worthwhile [PAGE 6].

The clock layer operates through line changes: dump-and-change plays are accompanied by four offensive players leaving within five seconds [PAGE 2], so the dump is not merely an offensive choice but a personnel-management choice. Late-game clock management may therefore select for dump-change even when expected shots favor the carry, because the value of a fresh defensive unit outweighs the 0.12–0.42 net-shot differential [PAGE 2, Table 3]. Over a multi-week horizon, however, the recursive equilibrium favors teams that consistently win the neutral zone, because single-game noise swamps offensive-zone talent but neutral-zone entry differentials persist [PAGE 4]. The trap is to read one game’s dump-in success as strategic validation; the counter-trap is to persist with carries after a high-visibility turnover, allowing the defense to recalibrate its blue-line aggression and depress p below the indifference threshold.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NHL games occur indoors on standardized ice sheets, so meteorological weather is a null veto; however, rink-specific microclimate (ice temperature, resurfacing frequency, board glass reflectivity, ambient lighting) can alter puck bounce and stickhandling fidelity at the blue line. These are not recorded in the zone-entry protocol, which treats the blue-line crossing as a discrete, objective event [PAGE 2]. Biomechanical layer: carrying the puck through the neutral zone depends on skating speed, edge work, stickhandling under duress, and visual scanning; fatigue over a 45–60 second shift degrades fine motor control and may raise the carry-attempt turnover probability above the 14% sample baseline [PAGE 6]. Veto conditions: (i) scorer omission rate >15% invalidates λκ estimates because shots-per-entry ratios are omission-sensitive [PAGE 2-3]; (ii) sample size <40 tracked games invalidates neutral-zone score reliability claims [PAGE 3]; (iii) score-state extremes (blowouts) change entry strategy and are excluded from the 5-on-5 frame, so the decision curve cannot be applied to non-5-on-5 states [PAGE 6]; (iv) if a team cannot exit its own zone, neutral-zone metrics are moot because no offensive-zone entries are generated. The conclusion that neutral-zone play drives shot differential is veto-proof only under the assumption that entry recording is consistent (>85% observer agreement [PAGE 2]) and that failed-carry outcomes in marginal plays are not systematically worse than the observed average of -0.08 net shots [PAGE 6].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (scorer integrity veto): In a new tracked sample, if two independent observers record the same games and the omission rate exceeds 15% while observer agreement on entry type remains >85%, then the predicted split-half correlation for offensive-zone score must collapse below 0.2 and the neutral-zone score correlation must fall below 0.4. Verification: compute ρodd/even for OZS and NZS [PAGE 4 Table 2 structure]. Veto trigger: if reliability stays high despite >15% omission, the omission-bias model is falsified.

Scenario 2 (carry-attempt advantage veto): If a team voluntarily raises its carry-attempt probability p above the 34% indifference threshold on well-defended neutral-zone entries, but its net shots per entry over the subsequent 20 games does not exceed the dump-and-chase baseline of 0.12 [PAGE 6], then the carry advantage is context-bound rather than general. Verification: compare Vcarry(p) to 0.12 using Table 3 payoffs [PAGE 6]. Veto trigger: net shots ≤ 0.12 at p > 0.34 invalidates the universal carry-preference claim.

Scenario 3 (defensive-zone talent veto): If a defenseman is anointed as a defensive specialist based on traditional metrics (high ice time, defensive-zone faceoff deployment) but has a low neutral-zone involvement—defined as a small fraction of team entries sent while on ice [PAGE 5]—and his team’s defensive-zone score shows no split-half persistence above ρ = 0.2 across a full season, then defensive-zone shot suppression is not a repeatable individual skill. Verification: reproduce Table 2 defensive-zone score correlations over 82-game equivalents [PAGE 4]. Veto trigger: ρ > 0.5 for defensive-zone score would resurrect individual defensive talent; persistence at noise level confirms the null.
</RLVR_COUNTERFACTUAL_VETOES>