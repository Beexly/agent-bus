---
source: "2026 - Context-adjusted Player Evaluation for Twenty20 Cricket - Bandyopadhyay.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 32
model: deepseek/deepseek-v4.1-flash-1017
words: 6390
---

<NATIVE_REASONING>
We need answer user's prompt: They provided source text pages 32 of paper. Need produce structured response with exact XML sections, >=1000 words, THINK_TRACE >=400 words, formal equations, page citations, quotes, zero betting lines. Need analyze paper. Need likely task? User only DRIVE SOURCE + pages. System says GSE + GSI Frontier Reasoning Foundry. Need infer they want deep analysis, maybe identify traps, gray-zone audit, source operators, retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes. Need not mention betting. We need be careful: no betting lines or odds. We can mention sports analytics but avoid betting. Need formal LaTeX equations and units, page citations exact markers [PAGE N] and verbatim quotes when source pages provided. Need cite exact PAGE markers and quotes. Need include equations from source. Need cover: RAE, Poisson MLE, shrinkage, DAR, Bellman, hazard, Impact. Also gray-zone audit: limitations, potential traps, confounders, data tier, line/length exogeneity, mRAE for bowlers fail, centering. Need "multi-week traps" historically maybe context-blind metrics, era inflation, phase artifacts, survivor/longevity, proprietary systems. Need "crisis habit regression vs counter-trap vs clock" perhaps interpret as recursive theory of mind about analyst/coach decisions under crisis: reverting to raw averages/SR/econ vs counter-trap using context-adjusted metrics vs clock/time horizon. Need avoid betting. Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. We can discuss physical constraints: delivery line/length, ball-tracking coverage, weather/rain interruptions, DLS, match state, biomechanics of bowling, fatigue? But avoid inventing fake ratios. We can say the model's baseline-only fields omit biomechanical load, weather, pitch moisture, injury, fatigue; these are vetoes for causal attribution not metric arithmetic. Need "proof" maybe demonstrate no layer violates invariants: state variables m,w,i,j, phase, innings; weather affects via DLS/interruptions not modeled, so veto on cross-match comparisons; physical: line/length coverage only 33.9% legal, 16.5% stroke, so mRAE cannot be universal. Need RLVR counterfactual vetoes: 3 verifiable scenarios with predictions. Must be "verifiable RLVR veto scenarios + predictions." Could design counterfactual tests: (1) shuffle/replace xDAR hazard with player-specific hazard would break mean-zero; prediction DAR mean deviates. (2) applying mRAE to bowlers should degrade rank and reward control bowlers negatively; prediction Spearman lower, Rashid/Bhuvi fall. (3) remove era factor should inflate old-era batters? Need verify. Another: use raw realDAR without xDAR yields role scale gap (batting mean -193, bowling +225, ratio 8.6). Veto if centered restores overlap. These are in source. Need maybe "RLVR" = reinforcement learning with verifiable rewards? We can frame as verifiable counterfactual tests with expected observable outcomes, maybe pass/fail. Need exact page citations.

Need structure exact XML. Need >=1000 words. We should be thorough but not overly huge. Desired oververbosity 5. Need exact XML tags as requested. Must include all sections. We can include PAGE citations. Need quote exact phrases. Use [PAGE 1 of 32] etc. Need verbatim quotes. Need not be too many quotes. Need include formal equations with units and assumptions/singularities. Need mention units: runs per legal delivery, runs, probability per legal ball, dimensionless multipliers, variance units runs^2, κ equivalent deliveries, τ² dimensionless? Actually γ multipliers dimensionless; Var(r) runs²; µ0² runs²; τ² dimensionless, κ = Var(r)/(µ0² τ²) -> dimensionless? Wait Var(r) runs²/(µ0² runs²) = dimensionless, divided by τ² dimensionless -> dimensionless, interpreted equivalent count. Good. Need singularity/breakdown regimes: κ denominator τ_f²→0 => κ→∞ (all shrunk to 1); µ0≈1.24 not zero. Poisson MLE γc requires denominator sum eb >0; if cell empty nc=0, ratio undefined; shrinkage with κ handles. Bellman recursion requires finite state, h∈[0,1], probabilities sum 1; boundary V(0)=0, V(m,0)=0; if M0=0 singular trivial. DAR centering requires E[W_b|s_b]=h̄; violation if player-specific hazard used or state omitted. Impact comparability requires both residuals mean-zero; if realDAR uncentered, scale gap. mRAE exogeneity: if line/length is bowler's skill, conditioning on own line/length subtracts skill; for batter, delivery exogenous assumption; if batter influences line/length, confounded. Need cite [PAGE 5-6] for line/length; [PAGE 8] for κ; [PAGE 10-13] for Bellman/DAR; [PAGE 17] for centering restore; [PAGE 27-31] for mRAE.

Need maybe "retrocausal genealogy": historical lineage Duckworth-Lewis 1998, Clarke 1988, Preston & Thomas 2000, Lindsey 1963, Davis et al. 2015, Decroos 2019, Cervone 2016, Cricinfo Smart Stats proprietary. "Retrocausal" means how later metric reinterprets earlier constructs: RAE as Poisson residual of context; DAR as martingale residual from survival analysis (Barlow & Prentice 1988, Therneau 1990). Multi-week traps: phase artifact, era inflation, wicket count inflation, small-sample ratios, proprietary opacity, line/length coverage uneven, mRAE bowler trap, cumulative longevity. Need quote.

Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock. Interpret: Under pressure, analysts/coaches regress to raw strike rate/economy/average; counter-trap is over-adjusting to context and mistaking model outputs for truth; clock is temporal horizon: per-ball vs cumulative, season vs career, era. Need maybe describe recursive beliefs: player knows evaluator uses metric, changes behavior; bowler adjusts line/length to batter; batter forces loose deliveries; model treats context exogenous. Need mention [PAGE 21] limitations: "bowlers adjust line and length to specific batters; a batter who forces bowlers into uncomfortable areas may carry a slightly deflated \hat μ(x_b)" and "structural model of bowler strategy". Also [PAGE 31] "treating the delivery as exogenous ignores the batter’s own hand in it". Need avoid betting. This is sports analytics, okay.

Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. We can define layers: data layer, statistical layer, biomechanical layer, environmental/weather layer, decision layer. Need show veto conditions. Physical: legal delivery counts, ball-tracking coverage. Biomechanical: no biomechanical load variables; cannot infer injury/fatigue; line/length is outcome of bowling skill; conditioning on it for bowler invalid. Weather: rain/DLS interruptions; model doesn't condition on weather or required run rate; second innings only innings-specific, not live RRR [PAGE 21]. Venue factor 3-year bucket proxies pitch but not weather. Veto: if match shortened by weather, m,w,M0 assumptions break (M0=120 fixed) and DLS not modeled; c(s) and hazards invalid. Need cite [PAGE 10] M0=120; [PAGE 4] data date range; [PAGE 21] limitations. Need "proof" maybe demonstrate with invariants: For any valid comparison, all compared deliveries must share same M0 and state definition; weather-shortened matches violate M0=120, so cross-match Impact is inadmissible unless recomputed with actual balls remaining; paper's state uses m legal balls remain, M0=120, phase deterministic φ(M0-m); if M0≠120 then phase mapping and value table mis-specified. That's a strong veto. Also biomechanical: mRAE for bowlers violates exogeneity invariant; source shows Rashid Khan +0.170→+0.118, Bhuvneshwar +0.178→+0.117, Narine +0.168→+0.099, Santner +0.139→+0.078 [PAGE 29]. Use as proof.

Need "RLVR counterfactual vetoes" with 3 verifiable scenarios + predictions. Need maybe "RLVR" means "Reinforcement Learning from Verifiable Rewards" but we can present as counterfactual tests with pass/fail. Need include predictions tied to source numbers. Example:
1. Remove xDAR centering: set DAR=realDAR. Prediction: IPL batting mean -193, bowling +225, ratio 8.6:1 [PAGE 17]; common-origin overlap fails. Verifiable by recomputing means.
2. Replace league hazard h̄φ,e with player-specific η_i in xDAR: Proposition 2 null E[W|s]=h̄ violated; DAR mean not zero and survival credit absorbed into player expectation; prediction mean DAR shifts away from zero and rank correlations with raw wickets rise; no source exact number but verifiable. Maybe better use source's exact: "Conditioning \bar h on richer state... moving baseline closer to player and diluting skill signal" [PAGE 22]. Prediction: mean-zero property only under league hazard; player-specific hazard yields nonzero mean; compute E[DAR]. 
3. Apply mRAE to bowlers: Prediction: Spearman rank correlation drops from 0.97 batter? For bowlers source says "degrades markedly (Spearman 0.83)" [PAGE 29], and Rashid/Bhuvi etc. fall [PAGE 29]; Harshal Patel jumps pRank 19 to mRank 5 [PAGE 30]. Verifiable. 
Could include fourth? They ask 3. Need "3 verifiable RLVR veto scenarios + predictions." Use exact.

Need ensure no betting lines: avoid "odds", "spread", "moneyline", "bet". We can mention "auction valuation" from paper, not betting. Fine.

Need answer in XML sections exactly. Could include an opening? The user wants exact XML sections. We can start with `<THINK_TRACE>`. Need all sections. Need >=1000 words total. We'll write maybe 2500-3500 words. Need not include markdown? XML tags. We can use LaTeX inside. Need cite exact [PAGE N of 32] markers. Use verbatim quotes in quotes. Need not quote too much. Need include exact page markers like [PAGE 1 of 32]. The source text uses "--- [PAGE 1 of 32] ---". We can cite [PAGE 1 of 32]. Good.

Need formulate equations:
- RAE: \(RAE_b = r_b - \hat\mu(x_b)\), \(RAE_i = n_i^{-1}\sum_{b:i} RAE_b\), \(RAE_i^{total} = \sum_{b:i} RAE_b\). Units: runs per legal delivery for rate; runs for total. [PAGE 9]
- \(\mu(x_b)=\mu_0\prod_f \gamma_{c_f(b)}^{(f)}\), \(\mu_0=1.2425\) runs/legal ball [PAGE 14].
- Poisson MLE: \(\hat\gamma_c = \sum_{b\in c} r_b / \sum_{b\in c} e_b\). Assumption \(r_b|x_b\sim Poisson(\mu_b)\), \(\log\mu_b=\log e_b+\log\gamma_{c(b)}\). Breakdown denominator zero; empty cell; overdispersion? Actually Poisson assumption contradicted by Var(r)/µ0≈2.08 [PAGE 8], but they use Poisson for multiplier and empirical variance for shrinkage. Need mention quasi-likelihood: Poisson MLE is ratio; overdispersion affects uncertainty not point estimate. Singularity if \(\sum e_b\to0\). [PAGE 7-8]
- Shrinkage: \(\gamma_c^{(f)} = \omega_c \hat\gamma_c + (1-\omega_c)\), \(\omega_c=n_c/(n_c+\kappa_f)\); \(\kappa_f=Var(r)/(\mu_0^2\tau_f^2)\). Units: κ equivalent deliveries; τ² dimensionless; Var(r) runs². Breakdown τ²→0 => κ→∞ and γ→1; n_c=0 => γ=1; τ² large => κ→0. [PAGE 8]
- Bellman: \(V_e(m,w,i,j)=h_{i,\phi,e} V_e(m-1,w-1,\iota(w),j)+(1-h_{i,\phi,e})\sum_{r\in R}\pi_{r|i,\phi,e}[r+V_e(m-1,w,i',j')]\). Boundaries \(V_e(0,w,i,j)=0\), \(V_e(m,0,i,j)=0\). Units runs. Assumptions: finite acyclic state, h∈[0,1], π sums to 1, M0=120. Breakdown if M0 not 120 or weather shortened; h out of range; empty tiers. [PAGE 10-11]
- Wicket cost: \(c(s)=[V_e(m,w,i,j)-V_e(m-1,w-1,\iota(w),j)+\delta_i^{fresh}]_+\), \(\delta^{fresh}=(1-f(E))\mu\min(E,E_{max})\), \(E=(1-(1-\eta_i)^{s_i})/\eta_i\)? Wait source: "E = {1 −(1 −ηi)sim}/ηi" likely \(E=\{1-(1-\eta_i)^{s_i}\}/\eta_i\)? Actually it says "sim" maybe \(s_i\) strike share? It says "geometric survival expectation of balls the dismissed batter would have faced (from his hazard η_i and strike share s_i), δfresh = (1 −f(E)) µ min(E, Emax)." The formula in text: E = {1 −(1 −ηi)sim}/ηi maybe \(E = \{1-(1-\eta_i)^{s_i}\}/\eta_i\)? Hmm. Need not reproduce exact if ambiguous. But can state as source: \(E=\{1-(1-\eta_i)^{s_i}\}/\eta_i\) with strike share \(s_i\) clipped [0.25,0.75]. But if exponent is \(s_i\)? It says "sim" not clear. Maybe \(s_i m\)? Wait "from his hazard ηi and strike share si" and "E = {1 −(1 −ηi)sim}/ηi" perhaps \(s_i m\)? Let's inspect: E = {1 −(1 −ηi)sim}/ηi. The variable "sim" might be "s_i m" but no m in context? It might be \(s_i\) times? Hmm. Better avoid exact E formula or quote as in text with caveat. We can use \(\delta^{fresh}=(1-f(E))\mu\min(E,E_{\max})\) and say E is geometric survival expectation from \(\eta_i\) and strike share \(s_i\); cite. That's enough.
- realDAR, xDAR, DAR: \(\mathrm{realDAR}^{bat}_i=\sum_{b\in D_i}c(s_b)\), \(\mathrm{xDAR}^{bat}_i=\sum_{b\in F_i}\bar h_{\phi_b,e_b}c(s_b)\), \(DAR^{bat}_i=\sum_{b\in F_i}(W_b-\bar h_{\phi_b,e_b})c(s_b)\). Units runs. Centering assumption \(E[W_b|s_b]=\bar h_{\phi_b,e_b}\); breakdown if hazard misspecified, if state omitted, if player-specific. [PAGE 12-13]
- Impact: \(\Omega_i^{(Bat)}=\sum_{b\in F_i}RAE_b-DAR_i^{bat}\), \(\Omega_i^{(Bowl)}=-\sum_{b\in B_i}RAE_b+DAR_i^{bowl}\). Units runs. Mean-zero if both residuals mean-zero. Breakdown if realDAR used directly; source shows mean -193 vs +225 and ratio 8.6 [PAGE 17]. [PAGE 13-14]
- mRAE: \(\tilde\mu(x_b)=\mu(x_b)\gamma^{len}(\phi,\ell(b))\gamma^{lin}(\phi,\lambda(b))\); \(mRAE_b=r_b-\tilde\mu(x_b)\). Assumptions: line/length known pre-outcome; batter delivery exogenous; for bowler own line/length endogenous. Breakdown for bowler: source Spearman 0.83 and Rashid etc. [PAGE 29-31]
Need maybe mention "line and length coverage 33.9%, 29.5%" [PAGE 28]. Good.

Need source operators: perhaps "operators" as mathematical operators: residual operator \(R\), backfitting operator \(B_f\), shrinkage operator \(S_{\kappa}\), Bellman operator \(T_e\), hazard compensator operator \(A\), centering operator \(C\), Impact assembly operator. We can present.

Need "gray-zone audit" in THINK_TRACE: Need discuss what is robust and what is not. Need multi-hop derivation: from context expectation to Poisson MLE to backfitting to shrinkage; from value function to wicket cost to martingale residual to Impact; from mRAE to exogeneity fail. Need audit: overdispersion, Poisson vs empirical variance, shrinkage proxy, opposition factor co-fit, no own factor, phase weights, league hazard coarse, cumulative longevity, cross-competition baseline, weather/DLS, run-outs, non-striker, tiers. Need mention "no tuning constant" but fixed hyperparameters κµ=60, κη=40, κπ=200, Emax=6, Q=6, venue window 3 years [PAGE 24]. So "no hand-set weights" but there are fixed hyperparameters; gray zone: they are fixed, not tuned. Need maybe flag "no tuning constant left to set" vs Table S1 fixed constants. This is a gray-zone audit: claim "there is no tuning constant left to set" [PAGE 3] but Table S1 lists fixed hyperparameters. Not necessarily contradiction; hyperparameters are fixed, not weights. Need note.

Need "RETROCAUSAL_GENEALOGY": historical lineage and multi-week traps. Use exact references: Duckworth-Lewis 1998, Clarke 1988, Preston and Thomas 2000, Lindsey 1963, Davis et al. 2015a/b, Decroos et al. 2019, Cervone et al. 2016, Barlow and Prentice 1988, Therneau et al. 1990. Need explain retrocausal: current paper reframes earlier run expectancy as a value function under observed play; earlier optimal DP becomes descriptive Bellman expectation; earlier survival residuals become wicket pricing. Multi-week traps: phase artifacts over weeks? "multi-week traps" maybe scouting/selection over tournament weeks: small samples, role changes, era, venue buckets, opposition quality, line/length coverage. Need articulate.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. We can frame three archetypes:
- Crisis habit regression: under pressure, decision-maker reverts to raw SR/econ/average; ignores context. Prediction: selection favors high raw SR in death overs? But no betting. Use team selection/auction. 
- Counter-trap: over-trusting context-adjusted metric; treating RAE as causal skill, ignoring that μ(x) is cohort expectation and opponent factor; or applying mRAE to bowlers; or using cumulative Impact as pure quality. 
- Clock: time horizon matters: per-ball rate vs cumulative, season vs career, era factor, longevity. Need recursive ToM: players anticipate evaluator; bowlers adjust line/length; batter forces loose balls; model exogeneity; evaluator must model player's model of evaluator. Need cite [PAGE 21] and [PAGE 31]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need maybe table-like. We can state:
- Physical/data layer: legal delivery, M0=120, ball-tracking coverage; if M0≠120 due to weather, value function and phase mapping break. Veto cross-match Impact for shortened matches unless re-solved with actual M0. Cite [PAGE 10] and [PAGE 4].
- Biomechanical layer: mRAE for bowler conditions on own line/length, which is skill; source proves wrong direction. Veto any bowler mRAE leaderboard. Cite [PAGE 29-31]. Also no biomechanical load/injury variables; cannot attribute fatigue. 
- Weather/environment layer: venue factor ground×3-year bucket proxies pitch, not weather; second innings only innings-specific not live RRR; rain/DLS not modeled. Veto claims about weather causality. Cite [PAGE 21] and [PAGE 5] factor table.
- Statistical layer: Poisson MLE with overdispersion; point estimate okay, uncertainty understated; shrinkage handles thin cells. Veto if treating Poisson SE as exact. Cite [PAGE 8].
- Decision layer: no betting; selection/auction. Veto if using cumulative Impact without per-ball rate; longevity-aware. Cite [PAGE 22].
Need "proof" maybe use invariants and source numbers.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. We'll write concise but verifiable.

Need exact XML sections. Need not include `<SOURCE_OPERATORS_AND_EQUATIONS>` etc. exact. Need ensure total >=1000 words. We'll produce maybe 3000 words. Need no markdown outside XML? Fine.

Need be careful with quote accuracy. Use verbatim quotes from source. Need cite exact page. Quotes:
- [PAGE 1] "a reproducible framework for evaluating individual batting and bowling performances in Twenty20 (T20) cricket on one interpretable scale of runs above expectation"
- [PAGE 7] "The cell-c log-likelihood contribution..." maybe not.
- [PAGE 8] "Var(r)/µ0 ≈2.08" and "a Poisson variance would understate the noise and leave thin cells over-trusted."
- [PAGE 12] "Every state is priced on its own terms" and "no global ‘runs per wicket’ constant enters anywhere."
- [PAGE 13] "a wicket remains a transfer of expected runs between the sides."
- [PAGE 17] "batting Impact now averages +144 ... bowling Impact −15" maybe exact. Source says "batting Impact now averages +144 (median +87, maximum 1022) and bowling Impact −15 (median −34, maximum 924)" [PAGE 17]. Good.
- [PAGE 22] "a durable accumulator can top the cumulative board on sustained competence while the per-ball rate isolates peak quality"
- [PAGE 29] "Applied to bowlers, conditioning on their own line and length degrades the ranking markedly (Spearman 0.83) and moves it in the wrong direction."
- [PAGE 31] "treating the delivery as exogenous ignores the batter’s own hand in it"
Need not overquote.

Need maybe mention "PAGE 3" quote "there is no tuning constant left to set" and Table S1. Good.

Need not mention "betting" at all. Avoid "odds". Use "selection, auction valuation" as paper.

Need perhaps answer "DRIVE SOURCE" as if they want "frontier reasoning" not summary. We'll produce deep audit.

Let's draft.

Need exact XML tags. Start:

<THINK_TRACE>
... >=400 words. We'll write ~600 words. Include multi-hop derivation and gray-zone audit. Use citations. Then other sections.

Need ensure no invalid XML due to `<` in equations? We have `<` in LaTeX? XML tags could be confused. But user expects XML sections; content can contain `<`? It might break XML. Better avoid raw `<` in text; use `\lt` or words. Use `\le`, `\ge`, but `<` appears in math? We can use `\lt` to avoid. But LaTeX equations often use `<`. To be safe, use `\lt` or `\leq`. Use `\to`. Avoid ampersand? Use "and". Use `>`? That's okay? In XML text, `>` okay, `<` not. Use `\lt` for less than. Use `&`? Avoid. Use `\hat` etc. Need escape? We can use `&lt;` if needed. Better write equations with `\lt`? LaTeX doesn't know `\lt` unless define; but text okay. Hmm. XML parser may accept `\lt` as text. But formal LaTeX would prefer `<`. Since this is output not parsed? The prompt has XML tags; likely they expect content. I can use `\lt` and `\gt` to avoid. But LaTeX `\lt` is not standard. Could use `\mathrel{<}`? Contains `<`. Hmm. The final answer isn't necessarily parsed as XML; but to be safe, use Unicode "<" maybe still problematic. I can use "less than" in prose. In equations, use `\le` or `\ge`; for strict less, use `\prec`? Better use `\lt`? Actually in LaTeX, `\lt` is not defined by default, but many renderers? We can use `\mathrel{<}`. But raw `<` in XML is issue. Use `&lt;` entity; but inside LaTeX it may render as `<`? The final answer may not render. We can use `&lt;` in equations? It is text. Hmm. I'll avoid strict inequalities mostly; use `\le`, `\ge`, `\to`. For "less than", say "below". For ranges like \(0 \le h \le 1\). Good. For \(n_c=0\), no `<`. For \(M_0=120\). Good. For "less than 10%" use words. Avoid raw `<`.

Need include `\sum_{b\in c} e_b` no issue. `\bar h_{\phi_b,e_b}` no issue. `\Omega_i^{(Bat)}` no issue. `\tilde\mu`. Good.

Need maybe use `\mathrm{realDAR}`. Good.

Need maybe use `\mu_0=1.2425` runs per legal delivery. Good.

Need maybe cite page markers with brackets. Good.

Need ensure "PAGE 1 of 32" exact? They said exact [PAGE N] markers; source has [PAGE 1 of 32]. Use [PAGE 1 of 32]. Good.

Need maybe quote "no global ‘runs per wicket’ constant enters anywhere" exact? Source: "so no global ‘runs per wicket’ constant enters anywhere." [PAGE 12]. Good.

Need "cross-layer veto proof" maybe include "Proof sketch: if \(M_0\ne120\) due to weather, the phase map \(\phi(M_0-m)\) and \(V_e\) table are evaluated off their estimated support; thus any Impact from such a match is not comparable to a full 120-ball match." Good.

Need "RLVR" maybe define "verifiable reward" as recomputation. Use "Veto test 1". Good.

Need "RETROCAUSAL_GENEALOGY" include "multi-week traps" explicitly. Maybe "Multi-week trap" means over a 3-6 week tournament, small-sample leaderboards; use per-ball vs cumulative; shrinkage; mRAE coverage. We'll mention.

Need "RECURSIVE_THEORY_OF_MIND" maybe include "crisis habit regression" exactly. We'll structure as three modes. Need "counter-trap" and "clock" exact. We'll bold? XML no markdown? We can use plain text. Fine.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe include "physical/biomechanical/weather veto proof" exact. We'll write.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios. We can include "Prediction" and "Pass/fail criterion". Need be verifiable: recompute from paper's data/code. Good.

Potential issue: The paper's page 17 says "batting Impact now averages +144 ... bowling Impact −15". But earlier says "centered aggregate of (17)-(18)". Good.

Need maybe mention "role comparability restored" and "scale gap 8.6 to 1". Good.

Need maybe mention "xDAR uses league hazard \(\bar h_{\phi,e}\)" [PAGE 12]. Good.

Need maybe mention "Proposition 2 mean-zero martingale residual" [PAGE 13]. Good.

Need "Proposition 1" [PAGE 7]. Good.

Need maybe mention "Empirical Bayes shrinkage \(\kappa_f\)" [PAGE 8]. Good.

Need "No betting lines" - yes.

Let's write final with XML sections. Need not wrap in root. The prompt wants exact sections; we can output them sequentially. Ensure no extraneous. Need perhaps include blank lines. Good.

Need ensure >=1000 words. We'll write ~3200 words. Let's draft carefully.

Potential equation for \(\delta^{fresh}\) uses \(\mu\) ambiguous. We'll say "the source writes \(\delta^{fresh}=(1-f(E))\mu\min(E,E_{\max})\)" with \(E\) the geometric survival expectation from \(\eta_i\) and strike share \(s_i\). Good.

Need "units" for each equation. We'll list.

Need "singularity/breakdown regimes" for each equation. We'll include after equations. Good.

Need "source operators" maybe "Operators" list:
- \(R_b=r_b-\hat\mu(x_b)\) residual operator.
- \(B_f\) backfitting block update.
- \(S_{\kappa}\) shrinkage.
- \(T_e\) Bellman expectation operator.
- \(A_i\) compensator.
- \(C_i\) centering operator \(realDAR - xDAR\).
- \(\Omega\) Impact.
We can write.

Need "verbatim quotes" maybe use quotes. Good.

Need perhaps mention "overdispersion Var(r)/µ0≈2.08" exact. [PAGE 8]. Good.

Need "mRAE line/length coverage 33.9/29.5" [PAGE 28]. Good.

Need "mRAE bowler Spearman 0.83" [PAGE 29]. Good.

Need "Harshal Patel jumps from pRank 19 to mRank 5" [PAGE 30]. Good.

Need "Rashid Khan slides from pRank 6 to mRank 14 and Bhuvneshwar Kumar from pRank 4 to mRank 15" [PAGE 30]. Good.

Need "Among batters, pRAE and mRAE correlate 0.984 Spearman 0.97" [PAGE 29]. Good.

Need "RLVR scenario 1: uncentered DAR" source numbers [PAGE 17]. Good.

Need "RLVR scenario 2: player-specific hazard" source [PAGE 22] says dilution. Prediction: mean DAR not zero. We can say recompute \(E[DAR]\); under null it should be 0, player-specific should deviate. Good.

Need "RLVR scenario 3: bowler mRAE" source [PAGE 29-30]. Good.

Need maybe "weather veto" no source exact quote? [PAGE 10] M0=120; [PAGE 21] second-innings only innings, not live required run rate. Good.

Need "biomechanical veto" no source data; source's line/length as skill. Good.

Need "physical veto" ball-tracking coverage. Good.

Need "crisis habit regression vs counter-trap vs clock" maybe no source exact, but analytical. Good.

Need maybe mention "No betting lines" not include. Fine.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source builds a two-primitive player-evaluation system. The first primitive is a ball-level residual: \(RAE_b=r_b-\hat\mu(x_b)\), where \(r_b\) is runs off the bat and \(\hat\mu(x_b)\) is a contextual cohort expectation. The multi-hop derivation runs from the multiplicative expectation model [PAGE 5 of 32] to the cell-ratio estimator, which the paper identifies as a conditional Poisson maximum-likelihood multiplier [PAGE 7 of 32], then to iterated backfitting and empirical-Bayes shrinkage [PAGE 8 of 32], then to the symmetric opposition overlay [PAGE 9 of 32]. The second primitive is more delicate: the paper solves a batting-side value function by backward dynamic programming under observed play, not optimal play [PAGE 10 of 32], prices a wicket as the drop in that value function [PAGE 12 of 32], and then centers realised wicket cost against a hazard-weighted expectation so that the wicket ledger becomes a mean-zero martingale residual [PAGE 13 of 32]. The final Impact is \(\sum RAE-DAR\) for batters and \(-\sum RAE+DAR\) for bowlers [PAGE 13 of 32].

The gray-zone audit has several pressure points. First, the Poisson MLE is a point-estimation device, but the data are over-dispersed: the paper reports “Var(r)/µ0 ≈2.08” and says “a Poisson variance would understate the noise and leave thin cells over-trusted” [PAGE 8 of 32]. Thus the ratio estimate is robust, but Poisson standard errors are not automatically exact. Second, the shrinkage pseudo-count \(\kappa_f\) is data-estimated, yet fixed hyperparameters remain: \(Q=6\), \(M_0=120\), \(E_{\max}=6\), \(\kappa_\mu=60\), \(\kappa_\eta=40\), \(\kappa_\pi=200\) [PAGE 24 of 32]. The claim “there is no tuning constant left to set” [PAGE 3 of 32] should be read as no hand-set role-weight or wicket-to-run exchange rate, not as no fixed constants anywhere. Third, the wicket cost is state-dependent and the paper is explicit: “no global ‘runs per wicket’ constant enters anywhere” [PAGE 12 of 32]. That is a strength, but it means any implementation error in state definition, strike rotation, incoming-batter tier, or hazard baseline propagates directly into DAR. Fourth, centering is the pivotal move: without \(xDAR\), the paper shows batting Impact averages \(-193\) runs while bowling Impact averages \(+225\), with a leading-bowler-to-leading-batter ratio of roughly \(8.6:1\) [PAGE 17 of 32]. With centering, the two roles occupy a common range [PAGE 17 of 32]. Fifth, the tracked-ball extension \(mRAE\) is asymmetric: for batters it is defensible, with \(pRAE\) and \(mRAE\) per-ball rates correlating \(0.984\) and Spearman \(0.97\) [PAGE 29 of 32]; for bowlers it fails directionally because conditioning on a bowler’s own line and length subtracts his skill, producing Spearman \(0.83\) and moving elite control bowlers downward [PAGE 29 of 32]. Sixth, the model treats delivery context as exogenous, but the conclusion admits “bowlers adjust line and length to specific batters” and “a batter who forces bowlers into uncomfortable areas may carry a slightly deflated \(\hat\mu(x_b)\)” [PAGE 21 of 32]. That is a causal-identification gray zone, not an arithmetic bug. Finally, cumulative Impact is longevity-aware: “a durable accumulator can top the cumulative board on sustained competence while the per-ball rate isolates peak quality” [PAGE 22 of 32]. The correct audit conclusion is therefore conditional: the framework is internally coherent and reproducible on its stated baseline fields, but it does not license universal cross-competition, weather-shortened, biomechanical, or bowler-\(mRAE\) claims without additional assumptions.</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s central operators are: the residual operator \(R_b=r_b-\hat\mu(x_b)\); the backfitting block operator \(B_f\) that updates one factor’s multipliers; the shrinkage operator \(S_{\kappa_f}\); the Bellman expectation operator \(T_e\); the hazard-compensator operator \(A_i=\sum_b \bar h_{\phi_b,e_b}c(s_b)\); the centering operator \(C_i=\mathrm{realDAR}_i-\mathrm{xDAR}_i\); and the Impact assembly operator \(\Omega\). The model’s base rate is \(\mu_0=1.2425\) runs per legal delivery [PAGE 14 of 32]. The contextual expectation is
\[
\mu(x_b)=\mu_0\prod_f \gamma^{(f)}_{c_f(b)},\qquad
\log\mu(x_b)=\log\mu_0+\sum_f\log\gamma^{(f)}_{c_f(b)} .
\]
Here \(\mu(x_b)\) has units of runs per legal delivery; each \(\gamma^{(f)}_{c}\) is dimensionless. The factors are scenario, era, wicket, bowler type, venue, and opposition [PAGE 5 of 32]. The per-cell estimator is
\[
\hat\gamma_c^{(f)}=\frac{\sum_{b\in c}r_b}{\sum_{b\in c}e_b},
\]
derived under \(r_b\mid x_b\sim\mathrm{Poisson}(\mu_b)\) with \(\log\mu_b=\log e_b+\log\gamma_{c(b)}\) [PAGE 7 of 32]. Units: numerator runs, denominator runs, ratio dimensionless. Breakdown regimes: an empty cell has denominator zero; a cell with no exposure is undefined and must be shrunk; the Poisson variance assumption is not exact because runs are over-dispersed [PAGE 8 of 32]. The shrinkage rule is
\[
\gamma_c^{(f)}=\omega_c\hat\gamma_c^{(f)}+(1-\omega_c)1,\qquad
\omega_c=\frac{n_c}{n_c+\kappa_f},\qquad
\kappa_f=\frac{\mathrm{Var}(r)}{\mu_0^2\tau_f^2}.
\]
Here \(n_c\) is deliveries, \(\kappa_f\) is an equivalent prior-delivery count, \(\tau_f^2\) is the between-cell variance of true multipliers, and \(\mathrm{Var}(r)\) is in runs squared [PAGE 8 of 32]. Breakdown: as \(\tau_f^2\to0\), \(\kappa_f\to\infty\) and every cell is pulled to 1; as \(n_c\to0\), \(\gamma_c\to1\); large \(\tau_f^2\) leaves strong cells close to raw ratios. The player-level RAE is
\[
RAE_b=r_b-\hat\mu(x_b),\qquad
RAE_i=\frac{1}{n_i}\sum_{b:i}RAE_b,\qquad
RAE_i^{\mathrm{total}}=\sum_{b:i}RAE_b,
\]
with \(RAE_i\) in runs per legal ball and \(RAE_i^{\mathrm{total}}\) in runs [PAGE 9 of 32]. The paper states the residual is centered: mean ball-level batter residual \(-0.0001\) runs against \(\mu_0=1.2425\), standard deviation \(1.588\) [PAGE 16 of 32].

The wicket-value operator is the Bellman expectation recursion
\[
V_e(m,w,i,j)=h_{i,\phi,e}V_e(m-1,w-1,\iota(w),j)
+(1-h_{i,\phi,e})\sum_{r\in R}\pi_{r\mid i,\phi,e}
\left[r+V_e(m-1,w,i',j')\right],
\]
with boundaries \(V_e(0,w,i,j)=0\) and \(V_e(m,0,i,j)=0\) [PAGE 10 of 32]. Units: \(V_e\) is runs; \(m\) is legal balls remaining; \(w\) is wickets in hand; \(i,j\) are batter quality tiers; \(h_{i,\phi,e}\) is a dismissal probability per legal ball; \(\pi\) is a probability mass over runs. Assumptions: finite acyclic state ordered by \(m\), \(0\le h\le1\), \(\sum_r\pi_{r\mid i,\phi,e}=1\), and \(M_0=120\) legal balls for a full T20 innings [PAGE 10 of 32]. Breakdown: if weather or interruption changes \(M_0\), the phase map \(\phi(M_0-m)\) and the solved value table are off-support; if \(h\) or \(\pi\) are estimated from too-thin cells without shrinkage, the recursion is unstable. The per-ball wicket cost is
\[
c(s)=\left[V_e(m,w,i,j)-V_e(m-1,w-1,\iota(w),j)+\delta_i^{\mathrm{fresh}}\right]_+,
\]
where the source writes \(\delta^{\mathrm{fresh}}=(1-f(E))\mu\min(E,E_{\max})\), with \(E\) the geometric survival expectation from the dismissed batter’s hazard \(\eta_i\) and strike share \(s_i\) [PAGE 12 of 32]. Units: runs. The source reports that across 147,797 bowler-credited dismissals the mean \(c(s)\) is \(2.65\) runs, median \(2.56\), 90th percentile \(5.34\), with a tail to about \(15\) runs [PAGE 16 of 32]. The realised and expected aggregates are
\[
\mathrm{realDAR}^{\mathrm{bat}}_i=\sum_{b\in D_i}c(s_b),\qquad
\mathrm{xDAR}^{\mathrm{bat}}_i=\sum_{b\in F_i}\bar h_{\phi_b,e_b}c(s_b),
\]
\[
DAR^{\mathrm{bat}}_i=\mathrm{realDAR}^{\mathrm{bat}}_i-\mathrm{xDAR}^{\mathrm{bat}}_i
=\sum_{b\in F_i}\left(W_b-\bar h_{\phi_b,e_b}\right)c(s_b),
\]
and symmetrically for bowlers [PAGE 12 of 32]. Units: runs. Proposition 2 requires \(E[W_b\mid s_b]=\bar h_{\phi_b,e_b}\); then \(E[DAR_i]=0\) [PAGE 13 of 32]. Breakdown: if \(\bar h\) is replaced by a player-specific hazard, or if the conditioning state omits a variable that predicts dismissal, the mean-zero property is lost and the “survival credit” is absorbed into the baseline rather than exposed as skill. Impact is
\[
\Omega_i^{(\mathrm{Bat})}=\sum_{b\in F_i}RAE_b-DAR_i^{\mathrm{bat}},\qquad
\Omega_i^{(\mathrm{Bowl})}=-\sum_{b\in B_i}RAE_b+DAR_i^{\mathrm{bowl}},
\]
in runs [PAGE 13 of 32]. The paper’s proof of comparability is empirical: uncentered \(\sum RAE\mp\mathrm{realDAR}\) gives batting mean \(-193\) and bowling mean \(+225\) with an \(8.6:1\) leader ratio; centered \(\sum RAE\mp DAR\) gives batting mean \(+144\) and bowling mean \(-15\) [PAGE 17 of 32]. The tracked extension is
\[
\tilde\mu(x_b)=\mu(x_b)\gamma^{\mathrm{len}}(\phi,\ell(b))\gamma^{\mathrm{lin}}(\phi,\lambda(b)),\qquad
mRAE_b=r_b-\tilde\mu(x_b).
\]
It is valid for batters because the delivery is treated as exogenous context; it is invalid for bowlers because their own line and length is the skill being measured [PAGE 29 of 32]. The source’s proof is directional: bowler rankings degrade markedly under \(mRAE\) with Spearman \(0.83\), and Rashid Khan moves from \(+0.170\) to \(+0.118\) runs saved per ball, Bhuvneshwar Kumar from \(+0.178\) to \(+0.117\), Sunil Narine from \(+0.168\) to \(+0.099\), and Mitchell Santner from \(+0.139\) to \(+0.078\) [PAGE 29 of 32]. Harshal Patel jumps from \(pRank\) 19 to \(mRank\) 5, while Rashid Khan slides from \(pRank\) 6 to \(mRank\) 14 and Bhuvneshwar Kumar from \(pRank\) 4 to \(mRank\) 15 [PAGE 30 of 32]. That is the cleanest formal breakdown regime in the paper.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is retrocausal in the precise sense that later evaluation metrics reinterpret earlier game-state constructs. The run-expectancy idea descends from Lindsey’s baseball work and from Duckworth-Lewis resource tables, which are value functions of overs and wickets [PAGE 2 of 32]. Clarke and Preston-Thomas used dynamic programming to prescribe optimal scoring or batting strategy; this paper keeps the Bellman machinery but switches from optimality to expectation under observed play [PAGE 10 of 32]. Davis et al. built a T20 simulator and an expected run differential; the present framework replaces simulation with a transparent per-ball residual and a separately priced wicket ledger [PAGE 2 of 32]. The wicket-pricing move is genealogically survival-analysis: Barlow and Prentice and Therneau et al. supply martingale residuals, and the paper converts “observed dismissals minus compensator” into a run-weighted wicket residual [PAGE 13 of 32]. In football and basketball, VAEP and expected possession value price actions by expected scoring change; the T20 analogue is RAE plus DAR on a runs scale [PAGE 3 of 32]. The multi-week traps are therefore historical and procedural: a short tournament window makes raw strike rate, economy, and wicket totals look decisive; phase artifacts make death-over scoring look like skill rather than context; era inflation flatters recent run-scoring; and proprietary “impact” systems are opaque enough that their rankings cannot be audited [PAGE 2 of 32]. The paper’s countermeasures are era factors, phase-innings scenario factors, exact wicket-count conditioning, venue buckets, opposition multipliers, and empirical-Bayes shrinkage [PAGE 5 of 32 and PAGE 8 of 32]. A further multi-week trap is the tracked-data trap: line and length are available for only 33.9% of legal deliveries overall and 29.5% for line, so an \(mRAE\)-based leaderboard would silently change its sample by competition [PAGE 28 of 32]. The retrospective lesson is that context adjustment must be designed before the leaderboard, not patched after it.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive decision problem has three modes. Crisis habit regression is the reversion to raw averages, strike rate, economy, or wicket count when a tournament is under way and sample sizes are small. The paper explicitly warns that conventional measures “aggregate over this heterogeneity and are systematically confounded by it” [PAGE 2 of 32]. A coach or analyst who regresses to raw strike rate in a four-week window will over-reward death-over hitting and under-reward middle-over accumulation, because the scenario multiplier is \(1.188\) and \(1.132\) in death overs versus \(0.959\) and \(0.999\) in the powerplay [PAGE 15 of 32]. The counter-trap is over-trusting the adjusted metric as causal truth. RAE is a residual against a cohort expectation, not a structural estimate of a player’s latent ability; the opposition factor is co-fit, but the paper admits that bowlers adjust to batters and that a batter who forces loose deliveries may have a deflated expectation [PAGE 21 of 32]. The second counter-trap is applying \(mRAE\) to bowlers: that conditions on the bowler’s own line and length and therefore explains away the skill, as the Rashid Khan and Bhuvneshwar Kumar reversals show [PAGE 29 of 32]. The clock is the time-horizon discipline: per-ball rate answers peak quality; cumulative Impact answers sustained contribution; season Impact answers within-season value; era factor answers cross-era comparison [PAGE 9 of 32 and PAGE 22 of 32]. Recursive theory of mind matters because players anticipate evaluators. A bowler who knows wickets are priced may bowl for a lower-value dismissal rather than a higher-value one; a batter who knows survival is credited may optimize occupation; a selector who knows cumulative Impact is longevity-aware may prefer volume over rate. The paper’s design answer is to keep both rate and total, to center the wicket ledger, and to state that “the two are meant to be read together” [PAGE 22 of 32]. The residual risk is strategic response: the metric is descriptive under observed play, not a mechanism-design proof that players will not change behavior once evaluated by it.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto. The value function is defined with \(M_0=120\) legal balls and phase \(\phi=\phi(M_0-m)\) [PAGE 10 of 32]. If weather, rain, or another interruption shortens an innings, the phase map and the solved \(V_e\) table are evaluated off their estimated support. Therefore any cross-match Impact comparison involving a shortened match is vetoed unless the value function is re-solved with the actual remaining-ball ceiling and the DLS or target state is explicitly modeled. The paper itself limits the second-innings value function to innings-specific transition models and says a “finer chase state” with live required run rate is a natural refinement [PAGE 21 of 32]. Physical proof: the state \(s=(m,w,i,j)\) has no weather or target variable; two deliveries with the same \(m,w,i,j\) but different required run rate are collapsed, so weather- or chase-induced differences cannot be adjudicated by the current \(V_e\).

Biomechanical layer veto. The baseline model deliberately uses only fields recorded for every delivery and excludes line, length, stroke geometry, and ball-tracking covariates from the headline metric [PAGE 4 of 32]. That is defensible for comparability, but it means biomechanical load, injury, fatigue, and delivery effort are absent. More importantly, the \(mRAE\) extension is vetoed for bowlers because own line and length is the bowler’s skill, not exogenous context. The source’s own evidence is decisive: “Applied to bowlers, conditioning on their own line and length degrades the ranking markedly (Spearman 0.83) and moves it in the wrong direction” [PAGE 29 of 32]. The named reversals — Rashid Khan \(+0.170\to+0.118\), Bhuvneshwar Kumar \(+0.178\to+0.117\), Sunil Narine \(+0.168\to+0.099\), Mitchell Santner \(+0.139\to+0.078\) — are a verifiable biomechanical-skill veto [PAGE 29 of 32]. Therefore no bowler \(mRAE\) leaderboard should be adjudicated as skill without a separate model of delivery difficulty and bowler strategy.

Weather and environment layer veto. The venue factor is “ground, 3-year bucket” and is described as capturing “pitch, via temporal locality” [PAGE 5 of 32]. That is not a weather model. The paper does not condition on temperature, humidity, wind, dew, pitch moisture, or rain; it uses venue and era as proxies. The correct adjudication is that venue multipliers may absorb persistent ground effects but cannot prove weather causality. If a claim says “this bowler is better in humid conditions,” the current framework cannot verify it. The same veto applies to cross-competition comparisons: the paper notes that “cross-competition comparisons inherit a system-wide competition-strength discrepancy” [PAGE 22 of 32]. Statistical layer veto. The Poisson MLE is used for point estimation, but the paper calibrates shrinkage to empirical run variance because runs are over-dispersed [PAGE 8 of 32]. Thus a Poisson standard error should not be treated as exact without a quasi-Poisson or robust correction. Decision layer veto. Cumulative Impact is longevity-aware by construction, so a cumulative leaderboard cannot answer a peak-quality question without the per-ball rate [PAGE 22 of 32]. The veto is not that the metric is wrong; it is that the question must match the aggregation level.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto test 1: remove \(xDAR\) centering. Counterfactual: compute IPL Impact as \(\sum RAE-\mathrm{realDAR}\) for batters and \(-\sum RAE+\mathrm{realDAR}\) for bowlers, exactly the “absolute construction” the paper rejects [PAGE 17 of 32]. Prediction: batting Impact mean near \(-193\) runs, bowling Impact mean near \(+225\), and the leading-bowler-to-leading-batter ratio near \(8.6:1\) [PAGE 17 of 32]. Pass criterion for the centered model: the centered construction gives batting mean \(+144\) and bowling mean \(-15\), with both roles overlapping around the origin [PAGE 17 of 32]. If the centered model does not restore common-origin overlap, the centering claim is vetoed. This is verifiable by recomputing the two means from the released ball-level data and the published \(c(s)\) table.

Veto test 2: replace the league hazard \(\bar h_{\phi,e}\) with a player-specific hazard. Counterfactual: define \(\mathrm{xDAR}_i=\sum_b \eta_i c(s_b)\) instead of \(\sum_b \bar h_{\phi_b,e_b}c(s_b)\). Proposition 2 requires \(E[W_b\mid s_b]=\bar h_{\phi_b,e_b}\) [PAGE 13 of 32]. Prediction: the mean of \(DAR_i\) over qualifying players will no longer be zero, and the survival credit will be absorbed into the player baseline, reducing the separation between durable accumulators and average survivors. The paper itself notes that conditioning \(\bar h\) on richer state “would sharpen the compensator, at the cost of moving the baseline closer to the player and diluting the skill signal it is meant to expose” [PAGE 22 of 32]. Pass criterion: under the league-hazard baseline, aggregate \(DAR\) should be mean-zero by construction; under player-specific hazard, a nonzero mean and weaker rank stability should appear. This is verifiable by a direct mean test and rank-correlation comparison on the released data.

Veto test 3: apply \(mRAE\) to bowlers. Counterfactual: recompute the IPL bowler leaderboard using \(\tilde\mu(x_b)=\mu(x_b)\gamma^{\mathrm{len}}\gamma^{\mathrm{lin}}\), i.e. conditioning on the bowler’s own length and line [PAGE 29 of 32]. Prediction: the ranking will degrade markedly, with Spearman near \(0.83\), and elite control bowlers will fall: Rashid Khan \(+0.170\to+0.118\), Bhuvneshwar Kumar \(+0.178\to+0.117\), Sunil Narine \(+0.168\to+0.099\), Mitchell Santner \(+0.139\to+0.078\) [PAGE 29 of 32]. Harshal Patel should jump from \(pRank\) 19 to \(mRank\) 5, while Rashid Khan should slide from \(pRank\) 6 to \(mRank\) 14 and Bhuvneshwar Kumar from \(pRank\) 4 to \(mRank\) 15 [PAGE 30 of 32]. Pass criterion for the paper’s asymmetry claim: batter \(mRAE\) should remain close to \(pRAE\) with correlation \(0.984\) and Spearman \(0.97\), while bowler \(mRAE\) should move in the wrong direction [PAGE 29 of 32]. If both moved similarly, the “batter-only extension” would be vetoed. These three tests are falsifiable with the published estimators, the released ball-by-ball data, and the reported rank tables.
</RLVR_COUNTERFACTUAL_VETOES>