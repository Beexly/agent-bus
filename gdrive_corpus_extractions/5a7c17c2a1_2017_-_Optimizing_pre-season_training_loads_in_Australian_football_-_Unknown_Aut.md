---
source: "2017 - Optimizing pre-season training loads in Australian football - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2017"
pages: 2
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3807
---

<NATIVE_REASONING>
The user wants me to analyze a source document about optimizing pre-season training loads in Australian football. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important notes:
- The source text appears to be from a single PDF page (PAGES: 2 mentioned by user, but only one block of text provided). I need to cite [PAGE 1] or [PAGE 2] as appropriate, but since I only have one text block, I should be careful. The user says PAGES: 2, meaning the source is 2 pages. But the text provided seems to be the full text perhaps extracted. I'll cite [PAGE 1] for the visible content since I cannot verify page 2 separately, but I should note that the source is a 2-page conference paper. Actually, looking at the text, it seems like a poster or abstract with figures referenced. I will cite [PAGE 1] for the content shown, and note limitations. Wait, the user said PAGES: 2. I should probably cite [PAGE 1] and [PAGE 2] where relevant, but since I only have one continuous text, I'll attribute the equations and content to [PAGE 1] (and note that [PAGE 2] contains figures referenced but not fully transcribed in the provided text). Actually, to be safe and accurate, I will cite [PAGE 1] for all the text since that's what's provided. I must not fabricate page numbers for content I haven't seen. However, the user might expect [PAGE 1] and [PAGE 2] markers. Since the text block doesn't have page breaks, I'll cite [PAGE 1] for the main text and note [PAGE 2] contains figures Fig 1 and Fig 2 as referenced in text. But I shouldn't invent content. Let me just use [PAGE 1] for all extracted content since that's what's in the source text provided.

Wait, looking carefully at the source text: It seems like a poster abstract. The text includes equations. I need to state formal LaTeX equations, SI units, assumptions, breakdown regimes.

Key equations from source:
- Decision variables: w_i = training load on day i; i ∈ {1,2,...,125}
- Constraints:
  1. 0 ≤ w_i ≤ 50,000 (daily max/min)
  2. Acute:chronic workload ratio: r_i = (Σ_{j=i-6}^{i-1} w_j / 6) / (Σ_{j=i-24}^{i-1} w_j / 24); 0.6 < r_i < 1.3 (Gabbett 2016, Carey 2016)
  3. Maximum cumulative workload rolling 21 days: C_i = Σ_{j=i-21}^{i-1} w_j; C_i < 73,721 (Colby 2014)
- Objective A: Maximize total 'safe' training volume: f_A(w) = Σ_{i=1}^{125} w_i
- Objective B: Banister impulse-response model: p_i = p_0 + k_1 Σ_{j=1}^{i-1} w_j e^{-(i-j)/t_1} - k_2 Σ_{j=1}^{i-1} w_j e^{-(i-j)/t_2}; f_B(w) = p_125; k1=1, k2=2, t1=45, t2=11 (Morton 1990)
- Initialization: normal distribution μ, σ_distance = 3 km, 1 km; μ, σ_sprint = 30 m, 10 m/s (wait, text says "30 m, 10 m sprint" - likely sprint distance mean 30m, std 10m? Or speed? Text: "𝜇, 𝜎 = 30 m, 10 m sprint" - ambiguous but I'll report as given).
- Results: μ_total distance = 314-411 km; μ_sprint distance = 2.7-8.9 km (units km for both? sprint distance 2.7-8.9 km seems odd but that's what text says).
- Off-season chronic loads: 14 km/week distance and 150 m/week SD (sprint distance?).

Units: w_i likely in meters or km? Constraint 0 ≤ w_i ≤ 50,000 - if meters, 50 km/day is huge. If arbitrary units? The cumulative 21-day limit 73,721 suggests units are meters (73.7 km over 21 days ≈ 3.5 km/day average). Daily max 50,000 m = 50 km/day is very high but as a bound it's loose. Sprint distance in meters. I need to be careful about units. The text says total distance 314-411 km over 125 days (~2.5-3.3 km/day). Sprint distance 2.7-8.9 km total? That seems low for sprint. Maybe sprint distance is in some other unit or it's high-speed running. I'll report as stated.

Breakdown regimes / singularities:
- ACWR constraint requires i > 24 (needs 24 days of history). For i ≤ 24, the chronic denominator is undefined or requires initialization. This is a cold-start singularity.
- Banister model requires j from 1 to i-1; at i=1, sums are empty, p_1 = p_0.
- fmincon SQP with tolerances 10^-6; non-convexity possible due to nonlinear constraints? Actually constraints are linear (sums) except ACWR is a ratio of sums which is nonlinear (fractional). The feasible region may be non-convex due to ratio constraint 0.6 < r_i < 1.3.
- If chronic load approaches zero, r_i → ∞ (division by near-zero), singularity.
- C_i < 73,721 is a hard cap; if off-season chronic load is high, less 'safe' training room.

Now for the XML sections:

1. THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive relationships between constraints, objectives, discuss trade-offs, gray zones (e.g., ACWR window lengths 6 vs 24 days are arbitrary but cited from Gabbett/Carey; the Banister parameters k1=1,k2=2,t1=45,t2=11 from Morton 1990 are not necessarily calibrated to AFL; the initialization from normal distribution may not reflect individual variability; the 125-day horizon is specific to pre-season length; the 'safe' training volume objective ignores performance explicitly; etc.). Multi-hop: constraint 3 caps cumulative load; constraint 2 caps rate of change; objective A pushes volume up until constraints bind; objective B introduces taper via Banister fatigue/decay. Gray-zone audit: the ratio constraint uses fixed windows; if w_j = 0 for early days, division by zero; the model assumes load is the only injury determinant; no interaction between distance and sprint load in constraints (they are separate decision variables? Actually text says "We considered total training distance and sprint running distance" but decision variables w_i defined as training load on day i; results show separate columns for distance and SD. Possibly w_i is vector [distance, sprint] but equations scalar. I'll flag this under-specification as gray zone.)

2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. I'll write out all equations in LaTeX, cite [PAGE 1], list SI units (m, km, s, dimensionless ratios), assumptions, exact breakdown regimes (i ≤ 24 cold start, w_chronic ≈ 0 singularity, fmincon convergence tolerance 10^-6, SQP local optimum).

3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Trace Banister 1975 → Morton 1990 → Carey 2016/Gabbett 2016 → this paper. Multi-week traps: ACWR 6:24 day window (approx 1 week acute : 4 weeks chronic), rolling 21-day cumulative cap, 125-day pre-season. Discuss how looking backward (acute/chronic) creates a retrocausal dependency: today's load is constrained by past 24 days, and performance target on day 125 depends on entire history via convolution. Multi-week trap: if you front-load to hit performance peak, you violate cumulative cap; if you stay safe, you may underprepare.

4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret: crisis habit regression = when injury risk increases, staff regress to conservative low-load habits (under-training). Counter-trap = overcompensating by increasing load too quickly after a crisis, violating ACWR. Clock = the 125-day fixed horizon and day-of-first-match peak constraint creates temporal pressure; as clock approaches match day, temptation to spike load (tapering incorrectly). Recursive theory of mind: coaches model players' responses, players model coaches' intentions, leading to second-guessing of load prescriptions.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical veto: hard constraint C_i < 73,721 and 0 ≤ w_i ≤ 50,000 are absolute; cannot be violated. Biomechanical veto: sprint load (SD) not explicitly constrained in the equations shown, only total distance; high-speed running injury risk (Colby 2014, Gabbett 2016) implies a missing biomechanical layer. Weather veto: not in source; Australian football pre-season (summer) heat could affect load tolerance but model doesn't include temperature/humidity; thus model is not weather-proof. Adjudication: physical constraints override performance objective; biomechanical gaps require external veto; weather absent = model breakdown in extreme conditions.

6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I'll create 3 counterfactual scenarios that are verifiable:
   - Scenario 1: Set w_j = 0 for j < 25; verify ACWR denominator → 0; prediction: model crashes or returns NaN; veto: initialize chronic load > 0 (off-season 14 km/week).
   - Scenario 2: Force C_i ≥ 73,722 for any i; prediction: fmincon SQP returns infeasible or hits bound; veto: constraint active, solver must reduce w_i.
   - Scenario 3: Set off-season chronic load to 0 km/week then run Objective B; prediction: Banister performance p_125 cannot reach peak because no fitness base; ACWR explodes; veto: model invalid below minimum chronic threshold.
   Each with verifiable pass/fail and predicted outcome.

Word count: Need >= 1,000 words total across sections. THINK_TRACE alone >= 400 words. I'll aim for ~150-200 words per other section to exceed 1000 total.

No betting lines. No toy equations. Use real equations from source.

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

I must include [PAGE 1] citations. Since source is 2 pages but text is one block, I'll cite [PAGE 1] and mention figures on [PAGE 2] as referenced in text without claiming to see them. Actually the text references Fig 1 and Fig 2; those might be on page 2. I can say "Figures 1–2 are referenced on [PAGE 1] and appear on [PAGE 2] per document structure, but only the caption text is transcribed here." That's honest.

Let's write.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include verbatim quotes where useful. I'll quote key phrases.

Verbatim quotes:
- "Training load prescription in team sport athletes is a balance between performance improvement and injury risk reduction" [PAGE 1]
- "Ratio of short term (acute) to long term (chronic) loads" [PAGE 1]
- "0.6 < r < 1.3 (Gabbett 2016, Carey 2016)" [PAGE 1]
- "C_i < 73,721 (Colby 2014)" [PAGE 1]
- "k1 = 1, k2 = 2, t1 = 45, t2 = 11 (Morton 1990)" [PAGE 1]
- "Default step and function convergence tolerances (10^-6)" [PAGE 1]

Now write the content. Need to ensure no betting content.

Let's compose THINK_TRACE first (~500 words).

Then SOURCE_OPERATORS_AND_EQUATIONS (~250 words).

Then RETROCAUSAL_GENEALOGY (~200 words).

Then RECURSIVE_THEORY_OF_MIND (~180 words).

Then CROSS_LAYER_VETO_ADJUDICATION (~180 words).

Then RLVR_COUNTERFACTUAL_VETOES (~200 words).

Total > 1500 likely. Good.

Let's write in final channel.
</NATIVE_REASONING>

<THINK_TRACE>
The paper formulates pre-season training as a constrained nonlinear optimization over a 125-day horizon (i ∈ {1,…,125}) [PAGE 1]. The decision variable w_i represents daily training load; the text separately discusses total distance and sprint distance (SD), though the displayed scalar equations do not explicitly index a load modality, creating a gray zone in whether w_i is a vector [distance_i, sprint_i] or two independent scalar problems solved in parallel [PAGE 1]. Three constraint layers interact multiplicatively in feasible-space shrinkage. First, the box constraint 0 ≤ w_i ≤ 50,000 imposes a hard daily ceiling [PAGE 1]. If units are metres, 50 km/day is physiologically extreme for Australian football, suggesting the bound is a numerical guardrail rather than a biological limit; if units are arbitrary normalized load, the absence of a unit declaration breaks SI traceability [PAGE 1]. Second, the acute:chronic workload ratio (ACWR) r_i = (Σ_{j=i−6}^{i−1} w_j / 6) / (Σ_{j=i−24}^{i−1} w_j / 24) must remain in (0.6, 1.3) [PAGE 1]. This 6-day acute window over a 24-day chronic window is approximately a 1:4 ratio, consistent with Gabbett and Carey [PAGE 1], but it introduces a cold-start singularity for i ≤ 24: the chronic denominator sums non-existent pre-day-1 loads, so the model either requires off-season initialization or is undefined [PAGE 1]. If chronic load approaches zero, r_i → ∞, producing a division-by-near-zero breakdown that the SQP solver may treat as infeasible [PAGE 1]. Third, the rolling 21-day cumulative cap C_i = Σ_{j=i−21}^{i−1} w_j < 73,721 [PAGE 1] is a hard upper bound on fatigue accumulation; with a 125-day horizon, the average daily load compatible with this cap is roughly 3,510 m/day (73,721 / 21), yet the reported optimal total-distance range of 314–411 km over 125 days implies roughly 2.5–3.3 km/day [PAGE 1], comfortably below the cap but revealing that Objective A (“maximise safe volume”) will drive loads upward until either C_i or r_i binds [PAGE 1].

Objective A uses f_A(w) = Σ_{i=1}^{125} w_i, a linear volume objective [PAGE 1]. Because constraints are active, the optimizer prescribes frequent moderate loads with low variation (Fig 2a,c) [PAGE 1]. Objective B substitutes a Banister impulse-response performance model p_i = p_0 + k_1 Σ w_j e^{−(i−j)/t_1} − k_2 Σ w_j e^{−(i−j)/t_2}, with k_1=1, k_2=2, t_1=45, t_2=11 [Morton 1990] [PAGE 1], and maximises p_125 at first match [PAGE 1]. The dual exponential kernels encode fitness (t_1=45 days, slow decay) and fatigue (t_2=11 days, fast decay) [PAGE 1]. This produces a pre-competition taper and greater day-to-day variation (Fig 2b,d) [PAGE 1]. Gray-zone audit: the Banister parameters are imported from running/morton literature, not re-identified on AFL cohorts, so the peak-day projection may be mis-calibrated for football-specific intermittent sprint demands [PAGE 1]; the initialization w_i ~ N(μ=3 km, σ=1 km) for distance and N(μ=30 m, σ=10 m) for sprint [PAGE 1] ignores player position heterogeneity (midfielders vs. key position players), meaning “individualised” plans may still converge toward population means under SQP; and fmincon with SQP at tolerance 10^-6 only guarantees a local optimum, so the reported plans are solver-dependent rather than globally optimal [PAGE 1]. Finally, no constraint explicitly couples total distance to sprint distance; if both are optimized separately, the model permits high total distance with zero sprint exposure or vice versa, despite evidence that maximal-velocity bouts carry independent injury risk (Colby 2014; Gabbett 2016) [PAGE 1]. This omission is a biomechanical gray zone that can produce “safe” by the ACWR metric yet hazardous in high-speed running exposure.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All formal operators and equations below are extracted verbatim in substance from [PAGE 1]; page [PAGE 2] contains Figures 1–2 referenced in the text but their pixel content is not transcribed in the provided source.

Decision variable:
w_i = training load on day i, i ∈ {1, 2, …, 125} [PAGE 1]

Constraint 1 (daily box):
0 ≤ w_i ≤ 50,000 [PAGE 1]
Unit: unspecified in text; inferred as metres for distance (50 km/day ceiling) or metres for sprint distance. Breakdown: if w_i is modality-agnostic, the unit is dimensionless load and not SI-traceable.

Constraint 2 (ACWR / relative load progression):
r_i = (Σ_{j=i−6}^{i−1} w_j / 6) / (Σ_{j=i−24}^{i−1} w_j / 24) [PAGE 1]
0.6 < r_i < 1.3 [PAGE 1] (Gabbett 2016; Carey 2016)
Unit: dimensionless ratio. Assumption: acute window = 6 days, chronic window = 24 days. Singularity/breakdown: for i ≤ 24 the chronic sum indexes j < 1, requiring off-season initialization; if Σ_{j=i−24}^{i−1} w_j → 0, r_i → ∞ (division by zero) [PAGE 1].

Constraint 3 (rolling 21-day cumulative load):
C_i = Σ_{j=i−21}^{i−1} w_j [PAGE 1]
C_i < 73,721 [PAGE 1] (Colby 2014)
Unit: metres if w_i is distance; equivalent to a 21-day hard cap of ~73.7 km, or ~3.51 km/day mean. Breakdown: binding cap reduces feasible safe volume; if off-season chronic load is already high, little headroom remains for in-season loading.

Objective A (maximise safe training volume):
f_A(w) = Σ_{i=1}^{125} w_i [PAGE 1]
Unit: metres (or sprint metres). Resulting reported optimum: total distance μ = 314–411 km over 125 days [PAGE 1].

Objective B (maximise projected performance on day 125):
p_i = p_0 + k_1 Σ_{j=1}^{i−1} w_j e^{−(i−j)/t_1} − k_2 Σ_{j=1}^{i−1} w_j e^{−(i−j)/t_2} [PAGE 1]
f_B(w) = p_125 [PAGE 1]
Parameters: k_1 = 1, k_2 = 2, t_1 = 45, t_2 = 11 [Morton 1990] [PAGE 1]
Unit: p_i is a projected performance level (dimensionless index); t_1, t_2 in days; k_1, k_2 gain coefficients (dimensionless per unit load). Breakdown: at i=1 the sums are empty, so p_1 = p_0; model is linear in w_i but embedded in a nonlinear solver due to Constraint 2’s ratio.

Solver & initialization:
MATLAB fmincon, sequential quadratic programming (SQP), default step and function convergence tolerance 10^-6 [PAGE 1]. Initialization by random sampling from normal distributions: distance μ, σ = 3 km, 1 km; sprint μ, σ = 30 m, 10 m [PAGE 1]. Reported comparable professional AFL ranges: total distance = 314–411 km; sprint distance = 2.7–8.9 km [PAGE 1]. Off-season chronic loads in figures: 14 km/week distance and 150 m/week SD [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is explicitly retrocausal: today’s admissible load w_i is legally constrained by the preceding 6 and 24 days through r_i, and by the preceding 21 days through C_i [PAGE 1]. This creates a backward-looking dependency graph in which day i cannot be planned without the full state of days i−24 through i−1. The genealogy runs Banister et al. (1975) systems model → Morton et al. (1990) running performance impulse-response → Carey et al. (2016) and Gabbett (2016) acute:chronic workload injury epidemiology in Australian football → this 2017 NESSIS optimization layer [PAGE 1]. Each layer imports parameters trained in one context (track running, team-sport injury surveillance) and redeploys them in a constrained optimizer for AFL pre-season, a cross-domain transfer risk.

Multi-week traps are embedded in the temporal architecture. The ACWR 6:24 day split enforces a quasi-weekly acute block against a monthly chronic base; a player returning after a 2-week illness enters day i with a near-zero chronic denominator, so any resumption violates r_i > 1.3 unless the off-season chronic load (14 km/week distance, 150 m/week SD) is artificially preserved [PAGE 1]. The 21-day rolling cap C_i < 73,721 creates a sliding fatigue ledger: a heavy week in days i−21 to i−14 consumes budget that cannot be replenished until those days exit the window, generating a multi-week debt trap [PAGE 1]. The 125-day horizon fixes the “clock” to first match; Objective B demands p_125 be maximal, which via the Banister kernel requires accumulated fitness (slow t_1=45 decay) while suppressing recent fatigue (fast t_2=11 decay), forcing a taper whose exact timing is solver-sensitive and not biomechanically verified for football [PAGE 1]. Finally, Objective A’s “maximise safe volume” can trap staff into loading up to the constraint boundary, mistaking constraint-satisfaction for optimality, while Objective B’s performance peak may require volumes that Objective A would deem excessive—a multi-week misalignment between safety and readiness [PAGE 1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression occurs when injury incidence rises and coaching staff regress to conservative, low-variance loading (frequent moderate sessions), effectively over-weighting Objective A and under-weighting Objective B [PAGE 1]. This is a first-order belief: “if we reduce load, injuries fall.” The counter-trap is the reactive over-correction: after a low-load crisis block, staff spike w_i to recover lost fitness, driving r_i above 1.3 and C_i toward 73,721, thereby inducing the very injury pattern they sought to avoid [PAGE 1]. This second-order belief—“we must catch up”—violates the ACWR constraint and is a classic recursive misread of the player’s adaptive state.

The clock introduces a third-order temporal theory of mind: as day 125 (first match) approaches, staff model the player as needing a peak, and the player models the coach as likely to spike load near selection, creating mutual pressure to deviate from the smooth taper prescribed by Objective B [PAGE 1]. The Banister model assumes the athlete’s p_i responds deterministically to the history of w_j, but in recursive theory-of-mind terms, the athlete’s actual readiness depends on their anticipation of upcoming load, sleep, and psychosocial stress—none of which are state variables in the optimizer [PAGE 1]. Thus the model’s p_125 target is a counterfactual performance level under a presumed load path; if the coaching staff regress to crisis habits or over-correct, the realized p_125 diverges from f_B(w). The exact singularity is at i=125: p_125 depends on all previous w_j, so a single late-cycle load error cannot be undone within the horizon, making the terminal constraint non-recoverable [PAGE 1].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto (hard, non-negotiable): Constraint 1 (0 ≤ w_i ≤ 50,000) and Constraint 3 (C_i < 73,721) are absolute bounds; the SQP solver will reject any candidate violating them, so physical load ceilings adjudicate before performance considerations [PAGE 1]. Biomechanical veto (missing/partial): the equations constrain total load w_i but do not explicitly bound sprint-distance modality or maximal-velocity exposure, despite Colby (2014) and Gabbett (2016) identifying high-speed running and high cumulative running loads as injury drivers [PAGE 1]. A plan can satisfy r_i and C_i while prescribing dangerous sprint volume; therefore an external biomechanical veto layer is required to cap sprint SD independently. Weather veto (absent): the model contains no temperature, humidity, or firm-ground parameters; Australian football pre-season occurs in summer heat, yet heat load is not a decision variable or constraint, so the optimizer is not weather-proof and will overprescribe under thermal stress [PAGE 1]. Adjudication order: physical vetoes (box and cumulative caps) override Objective A and B; biomechanical vetoes (sprint/high-speed caps) must be added as missing constraints before the plan reaches the field; weather vetoes require a separate environmental modifier because the source model lacks that layer entirely [PAGE 1]. Without these added vetoes, the formalism is sound but incomplete for real-world deployment.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with pass/fail criteria and predictions:

Scenario 1 — Cold-start ACWR singularity. Set w_j = 0 for all j < 25 and attempt to evaluate r_25 using the source formula. Verifiable pass/fail: the chronic denominator Σ_{j=1}^{24} w_j equals zero; r_25 is undefined (division by zero). Prediction: the optimizer returns NaN or infeasible unless off-season chronic loads (14 km/week distance, 150 m/week SD) are preloaded; veto triggers and forces initialization w_j > 0 for j ≤ 0 [PAGE 1].

Scenario 2 — Cumulative cap breach. Force C_i = 73,722 for any i ∈ {22,…,125} by assigning w_j such that the 21-day sum exceeds the cap by 1 unit. Verifiable pass/fail: constraint C_i < 73,721 is violated by exactly 1 m. Prediction: fmincon SQP marks the point infeasible and drives w_i down until C_i ≤ 73,721; the hard cap acts as an absolute veto on rolling fatigue regardless of Objective A’s volume pressure [PAGE 1].

Scenario 3 — Zero off-season base with Objective B. Set off-season chronic distance to 0 km/week (instead of 14 km/week) and run Objective B to maximize p_125. Verifiable pass/fail: chronic load state at i=1 is zero; Banister fitness term accumulates from no base. Prediction: p_125 cannot reach a competitive peak because the slow kernel (t_1=45) has no prior fitness to decay from, and any attempt to ramp w_i rapidly violates r_i < 1.3; veto: model invalid below minimum chronic threshold, confirming that pre-season plans require nonzero off-season loading [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>