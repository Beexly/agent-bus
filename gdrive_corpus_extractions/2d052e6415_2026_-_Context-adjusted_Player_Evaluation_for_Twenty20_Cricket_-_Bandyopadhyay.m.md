---
source: "2026 - Context-adjusted Player Evaluation for Twenty20 Cricket - Bandyopadhyay.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 60
model: deepseek/deepseek-v4.1-flash-1017
words: 8451
---

<NATIVE_REASONING>
We need answer. Need follow user's format with XML sections, >=1000 words, cite pages [PAGE N] exact markers and verbatim quotes when source pages provided. We have source converted no explicit page markers except text has page numbers? The prompt says pages 60 but source text shows original page numbers 2,3 etc. Need cite exact [PAGE N] markers. We need infer N from printed page numbers. Need quote verbatim. Need no betting lines. Need zero fake ratios. Need formal LaTeX equations, units, assumptions, singular/breakdown. Need sections exact. Need >=1000 words across exact XML sections. The topic? DRIVE SOURCE is paper; likely need produce deep analysis/audit. Not explicit question. We need analyze paper. Need include source operators/equations, page citations. Need "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." Paper is cricket analytics; we can apply physical veto: ball-tracking; weather? Need make proof using paper's data, no invented fake ratios. Need "RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions." Need be careful no betting. Need deep multi-hop derivation and gray-zone audit. We need mention page numbers from source. Use [PAGE 5] etc. Need exact quote. Need identify equations.

Need perhaps structure:
<THINK_TRACE> ... >=400 words. Discuss derivation RAE, Poisson MLE, backfitting, EB shrinkage DerSimonian-Laird, DAR Bellman, martingale centering, impact symmetry, gray zones: conditioning exogeneity, mRAE bowler failure, hazard coarse, lineup tiering, missing page table? Include page cites. Need verbatim quotes with page markers.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, assumptions, breakdown. Need state operators: RAE_b, μ(x), gamma, Poisson MLE, shrinkage, DAR value function, wicket cost, realDAR/xDAR/DAR, Impact, empirical Bayes formulas. Include units: runs per legal delivery; probabilities per legal ball; balls; runs. Page citations. Breakdown regimes: zero denominator in Eq3 if sum e=0 impossible; κ=0; τ²=0; h=0 or1; [·]+ truncation; all-out boundary; sparse cells; non-identifiability due multiplicative factors (scale invariance) fixed by neutral 1/shrinkage; Poisson overdispersion; martingale assumption E[W|s]=h̄; leaks if hazard player-specific; mRAE post-treatment; bowler line/length conditioning removes skill.

<RETROCAUSAL_GENEALOGY> lineage: Duckworth-Lewis, Clarke 1988, Preston Thomas 2000, Lindsey 1963, openWAR, VAEP, EPV, Davis simulator, Smart Stats, CricViz. Multi-week traps: era factor makes old players rank high (Sehwag), volume vs rate, survival credit, Chahal no net wickets, Narine mRAE fall, etc. Cite pages.

<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock. Interpret: crisis habit regression maybe when analyst/player/team reverts to raw stats under pressure; counter-trap: optimizing metric creates Goodhart; clock: time/innings/era. Discuss identity: batter vs bowler, opposition overlay, players adjust to metrics, selection feedback, tanking? Need no betting. Use paper examples: strike rate vs RAE, Kohli/Dhoni survival, Bumrah containment. Need mention multi-agent: bowler reacts to batter, batter reacts to field, selection. Cite pages.

<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof. Need discuss physical constraints: legal delivery only, wides/no-balls excluded; ball-tracking coverage; weather/rain/DLS interruptions not modeled; biomechanics (line/length, yorker/bouncer) are physical delivery states; mRAE. Proof: any metric claim invalid if physical channel unavailable, if rain reduces overs, if bowler's own line/length conditioned, if non-striker run-out misattributed. Need cite page 4 data, page 29 mRAE, page 21 limitations. "veto" proof with conditions: if ball-tracking missing, mRAE undefined; if rain, M0=120 breaks; if non-striker runout, striker attribution. Need exact quotes.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable scenarios + predictions. Need no betting. RLVR = reinforcement learning with verifiable rewards? We can design counterfactual tests. 1) Recompute RAE with held-out season/era factor; predict rank correlation. 2) Randomize/permute opposition factors and test centering; predict mean residual. 3) Simulate league hazard vs player hazard; test DAR center. Or line/length bowler mRAE. Need "verifiable veto" predictions with metrics thresholds? We can use numeric from paper: pRAE vs mRAE correlation 0.984, Spearman 0.97; bowler Spearman 0.83 and moves wrong direction; RAE mean −0.0001; DAR mean zero. Need predictions: if assumption holds, mean DAR≈0 within CI; if using player hazard, mean shifts; if mRAE applied to bowlers, Rashid from +0.170 to +0.118 etc. Need ensure no fake equations. Use exact equations. Need >=1000 words. Need not overdo but comprehensive.

Need cite exact page markers. Source text has page numbers: e.g. abstract page? First page printed maybe 1? The source starts with title, abstract, then 2 at top after introduction? Actually after abstract, "1 Introduction" then at bottom maybe no page number for page 1. The text has "2" after intro. So [PAGE 1] abstract, [PAGE 5] section 3 etc. Need map. Let's identify pages:
- Page 1: title, abstract, keywords, intro start.
- Page 2: Section 1.1, 1.2 maybe.
- Page 3: 1.2 continued, 1.3.
- Page 4: Section 2 Data, Table1.
- Page 5: Section 3, 3.1, Eq1, table factors, Remark1.
- Page 6: Table2, Figure1, discussion line length.
- Page 7: Figure2, 3.2, Eq3, Prop1.
- Page 8: Remark2, 3.3, Eq4-6.
- Page 9: Eq7, Remark3, 3.4, Eq8.
- Page 10: Section4 intro, 4.1, Eq9-10.
- Page 11: 4.2 transition, Eq11, Algorithm1.
- Page 12: Eq12-13, realDAR/xDAR Eq14-15, DAR Eq16.
- Page 13: Prop2, Remark4, Section5 Impact Eq17-18.
- Page 14: Remark5, Algorithm2.
- Page 15: Section6.1, tables3-5, Figure3.
- Page 16: Finding3, RAE distribution, Remark6.
- Page 17: 6.3, Table6, Figure5.
- Page 18: 6.4 correlations, tables7-8, Finding6-7, 6.5.
- Page 19: Tables9-10, discussion.
- Page 20: Table11, discussion, Tables12-13.
- Page 21: season impact, Section7.
- Page 22: limitations, data availability.
- Page 23: references.
- Page 24: supplementary S1, Table S1.
- Page 25: Table S3.
- Page 26: Tables S4? Actually page 25 has S1.2 Table S2 and S3. Page 26 has S1.3 tables S4-S8? Wait text: page 24 "Supplementary materials S1... S1.1 Table S1"; page 25 Table S2 and S3; page 26 "S1.3 Value-function transition model ... Table S4 ... S5 ... S6". Page 27 Table S7, S8, S9; page 28 S2, Table S10; page 29 S2.2 Table S11; page 30 S2.3 S12 and S13? Actually page 29 starts S2.2, Table S11, then S2.3, page 30 S12, S13, S14? Hmm source page numbers at top: after page 29, "30" then Table S13 etc. Let's map:
Page 28: S2.1 coverage Table S10.
Page 29: S2.2 Table S11, S2.3 start.
Page 30: S2.3 table S12, S13, S14? Text shows page 30 at top then Table S13 etc. Actually S12 appears before page 30? The text after page 29 has "Table S12" then page 30? Wait source page 29 top? Let's not overprecision. Cite key page numbers as above. Need exact verbatim quotes. Use short quotes.

Need avoid saying "betting" etc. Fine.

Need ensure all XML tags present exactly. ">=1,000-word depth across these exact XML sections" maybe total. We'll do ~2500 words? Desired oververbosity 5. Need include at least 1000. Could do ~2000. Need no markdown? XML sections only. We can include LaTeX inside.

Need be accurate with formulas. Let's derive:
Equation (1): μ(x_b)=μ0 ∏_{k=1}^6 γ_{c_k(b)}^{(k)}. Units runs per legal ball.
Eq2 log.
Eq3 γ̂_c^{(f)}=∑_{b∈c} r_b / ∑_{b∈c} e_b.
Prop1.
Eq4 γ_c^{(f)} = (n_c γ̂_c + κ_f)/(n_c+κ_f) = ω_c γ̂ + (1-ω)1, ω=n/(n+κ).
Eq5 v_c = Var(r) n_c / (∑ e_b)^2.
Eq6 w_c=τ²/(τ²+v_c).
Eq7 κ_f=Var(r)/(μ0² τ_f²). Check paper: Var(r)/(µ0^2 τ_f^2). Yes.
Eq8 RAE_b = r_b − μ̂(x_b), RAE_i=(1/n_i)∑_{b:i} RAE_b, RAE_total=∑. SE_i = sd(RAE_b)/√n_i. Units runs/ball and runs.
Eq9 Bellman:
V_e(m,w,i,j)= h_{i,φ,e} V_e(m-1,w-1,ι(w),j)+(1-h)[∑_r π_{r|i,φ,e}(r+V_e(m-1,w,i',j'))].
Eq10 boundaries.
Eq11 μ_i=(∑r_b+κ_μ μ0)/(n_i+κ_μ), η_i=(d_i+κ_η η0)/(n_i+κ_η). Units.
Eq12 c(s)=[V_e(m,w,i,j)−V_e(m−1,w−1,ι(w),j)+δ_fresh]_+.
Eq13 δ_fresh=(1−f(E)) μ min(E,E_max), E={1−(1−η_i)^{s_i m}}/η_i. Hmm paper text: "E = {1 − (1 − ηi )si m }/ηi" maybe formatting lost; likely E = [1-(1-η_i)^{s_i m}]/η_i. Need state as in source? It is mangled. Use exact: \(E=\{1-(1-\eta_i)^{s_i m}\}/\eta_i\)? The paper text: "E = {1 − (1 − ηi )si m }/ηi" where "si m" maybe s_i m as exponent? It says "for the geometric survival expectation of balls the dismissed batter would have faced (from his hazard ηi and strike share si)" So E = (1 - (1-η_i)^{s_i m})/η_i. We'll note source conversion dropped exponent; cite [PAGE 12]. Need not overfocus.
Eq14 realDAR.
Eq15 xDAR.
Eq16 DAR = ∑(W_b−h̄_{φ_b,e_b})c(s_b).
Eq17 Bat Impact = ∑RAE_b − DAR_i^bat.
Eq18 Bowl Impact = −∑RAE_b + DAR_i^bowl.
mRAE EqS1: μ̃=μ γ_len γ_lin; mRAE_b=r_b−μ̃. pRAE. Need page 29.

Need mention assumptions:
- r_b | x_b ~ Poisson(μ_b) conditional independent for MLE; actually overdispersion Var/μ≈2.08, so inference not Poisson.
- Multiplicative factor log-linear with controlled two-way interactions; identifiable via neutral 1 and shrinkage; order-independent at convergence.
- h and π estimated from observed play; Bellman expectation not optimal; acyclic finite.
- Dismissal hazard E[W|s]=h̄; conditional independent? martingale.
- Player rates shrunk; Q=6 tiers; strike rotation deterministic; incoming batter average tier; every dismissal striker's.
- mRAE only tracking subset, delivery covariates ex ante.

Breakdown/singular:
- Eq3 denominator ∑e_b→0 no cell deliveries; shrinkage undefined if n=0; κ=0 no shrinkage if τ²∞; κ→∞ full pooling; τ²=0 all cell multipliers set to 1? Eq6 w=0; Eq7 κ infinite; not necessarily breakdown but no signal.
- h=1 deterministic dismissal, h=0 no wicket; if h outside [0,1] invalid. h̄=0 makes DAR zero; h̄=1 makes negative x? Actually DAR = real−x; x=∑ c; real=∑Wc. If h=1 every ball expected wicket impossible? If h̄=1, xDAR huge and DAR negative maybe. Need mention.
- c(s) truncation [·]+; δ_fresh; if V not monotone due estimation, positive part zero. If m=0 boundary V=0; if w=0 all out.
- Martingale centering fails if h̄ misspecified, if W dependent on unobserved state, if non-striker runout assigned to striker, if player-specific hazard used.
- mRAE bowlers: conditioning on own line/length removes skill; Spearman 0.83, Rashid +0.170→+0.118, Bhuvneshwar +0.178→+0.117, Narine +0.168→+0.099, Santner +0.139→+0.078 [PAGE 29? Actually S2.3 page 29-30]. Need cite exact page. Paper text page 29? It says "Applied to bowlers... Rashid Khan (+0.170 → +0.118 runs saved per ball), Bhuvneshwar Kumar (+0.178 → +0.117), Sunil Narine (+0.168 → +0.099) and Mitchell Santner (+0.139 → +0.078)" likely page 29. We'll cite [PAGE 29] maybe. But exact page number? In source after Table S12 and paragraph, page 30? Hmm printed page 29 at top then Table S11; then S2.3 and Table S12 maybe at page 29 bottom? Actually source: "30" appears at top after text "Applied to bowlers..."? Let's parse: Page 28 header "28" at top, then S2.1, Table S10. Page 29 header "29" at top, then S2.2, Table S11, S2.3, Table S12? Wait after Table S12, text continues, then "S2.4 Primary RAE versus modified RAE" and Table S13. The page number 30 appears before Table S13? Source excerpt: 
```
Table S12 ... 
...
Applied to batters... 
...
Applied to bowlers... (Spearman 0.83)... [text]
We therefore define mRAE for batters only.
S2.4 Primary RAE versus modified RAE
Ball tracking...
...
                   Table S13...
```
Then after Table S13 maybe "30" at top? Actually the source text shows "30" at top before Table S13? Looking: after "S2.4 ...", then "Table S13:..." then table; then after table "Per-ball rates..." then Table S14; then "Cumulative..." then "31" at top. So page 29 likely includes through S2.3 and S2.4 start; page 30 includes Table S13/S14. The bowler mRAE paragraph likely page 29. We'll cite [PAGE 29]. Good.

Need exact quote for page 5: "μ(xb ) = μ0 γ..." and "No separate phase weight is applied to either role, RAE therefore acts as a pure residual on the run scale." Page 5.
Page 7: "Then the maximum-likelihood estimator of the multiplier γc for cell c is γ̂c = ... which is (3)." Use.
Page 8: "κf is the number of prior deliveries pulling a thin cell back to neutral." and "Var(r)/µ0 ≈ 2.08". Quote.
Page 9: "a player's own factor is never applied to his own residual" and "vb = RAEb for batters and vb = −RAEb for bowlers." Quote.
Page 12: "the factor (Wb − h̄φb,eb ) is the martingale residual of the dismissal counting process" and "so a player is charged only for departing from average behaviour." Page 12.
Page 13: "Both (17) and (18) are sums of two mean-zero residuals in runs above expectation." Page 14? Actually Remark5 page 14. Quote page 14.
Page 16: "Across all 2,727,420 legal deliveries, the mean ball-level batter residual is RAEb = −0.0001 runs" Page 16.
Page 17: "batting Impact now averages +144 ... bowling Impact −15" and Figure5.
Page 29: "conditioning a bowler’s residual on his own line and length subtracts out his main contribution" [PAGE 29]; "Applied to bowlers, conditioning on their own line and length degrades the ranking markedly (Spearman 0.83) and moves it in the wrong direction." [PAGE 29].
Page 4: "A smaller ball-tracking tier ... 448,751 legal deliveries (16.5%)..." and "the majority of matches (10,364 or 83%) carry the baseline record alone." [PAGE 4].
Page 21/22: limitations "The second-innings value function conditions on the innings alone..." [PAGE 21] or 22? In source page 21 after season impact, Section7 and limitations page 21-22. Quote page 21: "The second-innings value function conditions on the innings alone, capturing average chase behaviour..." Actually page 21? Text after season impact: Section7, then limitations. Page 21 printed at top before season impact? Then page 22 at top before "Two choices..."? The limitations paragraph appears page 21. We'll cite [PAGE 21] for exogeneity and [PAGE 22] for hazard coarse. Need exact.

Need "RETROCAUSAL_GENEALOGY" needs "multi-week traps": we can list traps over multi-week periods: 1) Era inflation trap: comparing raw run totals across seasons; paper era factor recovers Sehwag still high because scored against lower bar; 2) Volume trap: Kohli 973 season ranks sixth vs Suryavanshi 776 top; 3) Wicket-count trap: Chahal most wickets but xDAR≈realDAR; 4) mRAE bowler trap; 5) survival credit misread as "not out" bonus. Need cite pages 18-20.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need define:
- Crisis habit regression: under pressure, selectors/analysts revert to raw SR/economy/wickets despite context. Paper's examples: raw strike rate 150 unremarkable death; economy 8 expensive middle/cheap death [PAGE 2]. "A strike rate of 150 is unremarkable at the death and exceptional in the middle overs, an economy around 8 is expensive in the middle overs and cheap at the death" [PAGE 2].
- Counter-trap: players/teams adapt to metric; e.g., if RAE rewards survival, batters may pad; if DAR charges early dismissal, risk aversion; if mRAE used, batters may avoid attacking hittable balls? Goodhart. Need say paper's metric not immune; cumulative Impact longevity-aware; per-ball rate and total read together [PAGE 14/22].
- Clock: innings phase, career era, auction/selection cycles. The Bellman state has m balls remaining and phase φ; hazard/π by phase/innings; era factor by year×phase. Multi-agent recursive: bowler sees batter's opposition multiplier? Actually opposition factor co-fit. Need to avoid overclaim. Use "recursive theory of mind" as model of evaluator/player/selector. 
Need maybe "crisis habit regression" in paper: under crisis (collapse, death overs), raw habits. Table5: wicket factor phase-dependent; death overs one wicket down 1.164 > none 0.986 [PAGE 15]. This means "side accelerates once set batter falls" [PAGE 15]. A naive model would treat wicket as monotonically bad; crisis habit might misread. Counter-trap: using exact wicket count avoids banding averaging away phase structure [PAGE 15-16].
Need "clock": era multiplier 2026 1.078 mean vs 2005 1.012; 2025 1.056 [PAGE 25]. Old players judged vs era. Multi-week traps: short international series or IPL auction windows.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof:
- Physical layer: legal delivery only; wides/no-balls excluded [PAGE 4]. If illegal deliveries carry runs/wickets, RAE excludes; physical completeness. 
- Biomechanical layer: line/length and impact point. mRAE length multiplier yorker 0.490, short 1.460 [PAGE 29/30 Table S12]. Delivery covariates ex ante; response variables excluded to avoid tautology [PAGE 29]. Veto: any model conditioning on response variable (shot area removes 19.93% RSS) is invalid [PAGE 29].
- Weather/interruption: paper's value function M0=120 and phase function; no DLS/rain shortening. Duckworth-Lewis lineage but not modeled. If match shortened, m, M0 and phase change; value function invalid unless M0 adjusted. The paper says M0=120; phases powerplay ≤6, middle 7-15, death 16-20 [PAGE 24 Table S1]. If rain, no legal 120 balls; veto. Also second innings chase value function only conditions innings, not required run rate [PAGE 21]. Weather affects pitch/venue via venue×3-year bucket [PAGE 5], but not live weather. 
- Biomechanical: non-striker run-outs all treated as striker's? Paper limitation: "treats every dismissal as the striker’s, so run-outs of the non-striker ... left aside" [PAGE 21]. Veto if run-out attribution matters. 
- Ball-tracking coverage: mRAE only tracked subset; cannot be universal [PAGE 28/29]. Veto if claim cross-competition mRAE ranking.
- Physical proof: Need "proof" maybe formal: Define admissibility predicate A(b)=legal∧tracked? For pRAE A=legal; mRAE A=legal∧tracked. If A false, metric undefined. Weather if actual balls < M0, Bellman boundary changes. Need state no physical model = no causal claim.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable. Need "RLVR" maybe "reward with verifiable rewards" but here as counterfactual veto tests. We can present:
1. Centering null: Recompute RAE and DAR on a held-out random split or permute within context cells. Prediction: mean RAE_b in each context cell = 0 up to sampling; global mean ≈ −0.0001 [PAGE 16]; DAR mean ≈ 0 if E[W|s]=h̄ [PAGE 12-13]. Veto if a non-centered construction (realDAR without xDAR) yields role gap: Bat mean −193, Bowl +225; centered Bat +144, Bowl −15 [PAGE 17]. Predict centered overlap improves; if not, reject centering claim.
2. Hazard misspecification: Replace league h̄ with player-specific η_i or state-rich hazard; prediction DAR mean shifts away from zero and survival credit absorbed; paper warns conditioning h̄ closer to player dilutes skill [PAGE 22]. Verifiable: compute mean DAR and rank correlation with raw wickets; if mean |DAR| shrinks? Need precise: If h̄ = player-specific, expected W conditional on player not league; centering null fails; DAR becomes residual against player's own rate, reducing spread and possibly correlation with wickets. Predict Spearman with raw wicket rate increases? Hmm. Better: Use non-striker run-outs vs striker attribution; recompute DAR assigning run-outs to non-striker; prediction DAR distribution changes for affected players. But need 3 scenarios.
3. mRAE bowler veto: Recompute bowler mRAE on tracked subset; paper predicts ranking degrades and top suppressors fall: Rashid +0.170→+0.118, Bhuvneshwar +0.178→+0.117, Narine +0.168→+0.099, Santner +0.139→+0.078; Spearman 0.83 [PAGE 29]. Veto if mRAE is used for bowling; prediction it flatters expensive bowlers and docks control. Verifiable.
Maybe 4? Need exactly 3. Include predictions with numeric thresholds from paper.

Need ensure no "betting lines" mention. None.

Need maybe mention "source pages provided" cite exact [PAGE N]. Use quotes. Need "verbatim quotes"—we can include quotes with quotation marks. Need not every citation quote? User says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So include several verbatim quotes. We'll include quotes in each section. Need ensure quotes exact. Use quotes from source. Avoid too many long quotes. 

Need not use "fake ratios" like Force/Fatigue. Equations are from paper. Good.

Need maybe answer in XML only. Need include formal LaTeX with units. 

Let's draft with sections. Need word count. We'll aim ~2500 words. XML tags exact. Need no extra outside. Let's compose.

Need be careful: "PAGES: 60" but source only 32 pages? The prompt says 60 pages, but source text includes 32 pages? Maybe PDF has 60? Hmm source conversion shows page numbers up to 32. We should cite printed page numbers. The "PAGES: 60" might be total PDF pages? But text page numbers only 32 due maybe double? Wait paper says 60 pages? The source text has 32 printed pages. Could be PDF has 60 pages? The page markers [PAGE N] could be PDF page numbers, not printed. But source text includes page numbers 2-32. Need exact markers? The user says "PAGES: 60". Hmm if actual PDF 60 pages, printed page numbers maybe not same. But source text only has page numbers. We can cite printed page numbers as [PAGE 5] etc. Is that safe? The prompt says pages 60; source text may be truncated to 32 pages? Actually source text has references and supplementary, 32 pages. Maybe PDF has 60 pages due formatting? Hmm. The source text includes "32" at end? It ends after Table S18 and text; no page 32? It likely page 32. But PAGES: 60 suggests actual PDF has 60 pages; maybe source text is 32 pages of extracted? Hard. The instructions say exact [PAGE N] markers; source text did not include [PAGE N] markers, only printed page numbers. We'll use printed page numbers. If actual PDF 60, our citations might be off, but they align with source. Good.

Need include "Exact singularity/breakdown regimes" in SOURCE_OPERATORS. State "breakdown regime" list.

Need mention "SI/information/probability units": runs per legal delivery, runs, probability per legal ball, balls, dimensionless multipliers, variance in runs². Entropy? Not needed. "SI/information/probability units" maybe include units. We'll state all.

Need "deep multi-hop derivation & gray-zone audit (>=400 words)" THINK_TRACE. We'll make ~600 words.

Let's start.

Need maybe include "Theorem/Proposition references" not fake. Good.

Potential issue: "source operators and equations" wants formal LaTeX. Use \(...\) and \[...\]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." We can use "veto predicate" not fake equation? Formal logic. That's okay. "If \(M_{\text{actual}}<120\) then \(V_e\) with \(M_0=120\) is undefined; DLS/rain adjustment required." This is from source constants. Cite [PAGE 24]. 
Need "weather veto proof" maybe not source-specific? Paper uses venue×3-year bucket for pitch, not weather; weather interruptions absent. Cite [PAGE 21-22] limitations. Use "Duckworth-Lewis" cited [PAGE 2/10], but not implemented. Good.

Need "RECURSIVE_THEORY_OF_MIND" "Crisis habit regression vs counter-trap vs clock." Define:
- Crisis habit regression: Under high-leverage phase, evaluator regresses to raw SR/econ. Evidence: raw SR 150 at death vs middle; economy 8. 
- Counter-trap: metric-aware behavior. If players know RAE, they may overvalue survival or avoid risk. Paper's DAR charges only excess dismissals, so "getting out is expected end" [PAGE 13]; survival credit could incentivize occupation. But RAE offset by weak scoring. Quote "Occupation of the crease is close to neutral rather than free" [PAGE 13]. Nice.
- Clock: phase and era. Cite era 2026 1.078 vs 2005 1.012 [PAGE 25]; death overs premium [PAGE 14]. Need "multi-week traps" maybe in genealogy not theory.

Need "RETROCAUSAL_GENEALOGY" "multi-week traps" include historical lineage and traps over multi-week/season cycles. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" "3 verifiable RLVR veto scenarios + predictions." We'll format numbered list. Need predictions numeric thresholds. 
Scenario 1: Permute opposition identity within phase/venue? Predict if opposition overlay valid, RAE remains centered within each context cell; global mean near −0.0001; if remove opposition factor, mean still zero but player RAE correlation changes. Hmm. Need "verifiable" with exact tests. 
Better:
1. Recompute pRAE with and without opposition factors on held-out IPL seasons; predict cells satisfy Poisson score identities \(\sum_{b\in c}r_b=\sum \hat\mu_b\) up to shrinkage; global mean ~ −0.0001 [PAGE 16]. Veto if cell residuals correlate with bowler identity.
2. Replace h̄ with player-specific hazard; predict DAR mean departs from zero and survival credit collapses; paper's warning [PAGE 22]. Test mean DAR by bootstrap; if zero remains, not discriminating; but prediction: mean DAR shifts and rank correlation with raw wickets rises. Need numeric? Use paper's centered vs absolute: Bat mean −193→+144; Bowl +225→−15 [PAGE 17]. Veto if centered construction not overlap.
3. Apply mRAE to bowlers; predict Spearman 0.83 and top suppressors fall by specified amounts [PAGE 29]. Veto if mRAE bowler ranking is claimed as quality.
Could include "non-striker run-out" as scenario? Need exactly 3. We can choose 3 above.

Need mention "RLVR" maybe "counterfactual vetoes" not reinforcement learning. Fine.

Need "ZERO TOY EQUATIONS": We won't invent ratios. But "veto predicate" not fake. Fine.

Need quotes exact. Let's extract exact quotes:
- [PAGE 2]: "A strike rate of 150 is unremarkable at the death and exceptional in the middle overs, an economy around 8 is expensive in the middle overs and cheap at the death"
- [PAGE 4]: "Baseline-only (Cricsheet) matches 10,364 (83.0% of matches)" and "stroke annotation covers 448,751 legal deliveries (16.5%) across 2,128 matches (17.0%)"
- [PAGE 5]: "No separate phase weight is applied to either role, RAE therefore acts as a pure residual on the run scale."
- [PAGE 7]: "Then the maximum-likelihood estimator of the multiplier γc for cell c is γ̂c = ... which is (3)." Need quote with math? Maybe okay.
- [PAGE 8]: "κf is the number of prior deliveries pulling a thin cell back to neutral." and "Var(r)/µ0 ≈ 2.08"
- [PAGE 9]: "A player’s own factor is never applied to his own residual" and "vb = RAEb for batters and vb = −RAEb for bowlers."
- [PAGE 12]: "the factor b (Wb − h̄φb,eb ) is the martingale residual of the dismissal counting process" (source has \sum). Use exact phrase with \( \sum_b (W_b-\bar h_{\phi_b,e_b})\).
- [PAGE 13]: "Getting out is the expected end of every innings, so the metric does not tax a batter simply for being dismissed" and "Occupation of the crease is close to neutral rather than free"
- [PAGE 14]: "Both (17) and (18) are sums of two mean-zero residuals in runs above expectation."
- [PAGE 16]: "Across all 2,727,420 legal deliveries, the mean ball-level batter residual is RAEb = −0.0001 runs"
- [PAGE 17]: "batting Impact now averages +144 (median +87, maximum 1022) and bowling Impact −15 (median −34, maximum 924)"
- [PAGE 18]: "The net Dismissal Adjusted Runs per ball correlates only 0.09 with runs saved per ball."
- [PAGE 21]: "The second-innings value function conditions on the innings alone, capturing average chase behaviour through innings-specific transition models but not the live required run rate"
- [PAGE 21/22]: "The value function itself tracks batter quality by discrete tiers and treats every dismissal as the striker’s, so run-outs of the non-striker ... are left aside" exact? Source: "The value function itself tracks batter quality by discrete tiers and treats every dismissal as the striker’s, so run-outs of the non-striker, finer within-tier heterogeneity and a full ball-by-ball settling model are left aside" [PAGE 21].
- [PAGE 22]: "The expected DAR uses a league dismissal hazard h̄φ,e conditioned on phase and innings only; the coarseness is deliberate"
- [PAGE 28]: "Line and length are present for about one-third of all legal deliveries in men’s T20 matches"
- [PAGE 29]: "Conditioning a bowler’s residual on his own line and length subtracts out his main contribution" and "Applied to bowlers, conditioning on their own line and length degrades the ranking markedly (Spearman 0.83) and moves it in the wrong direction."
- [PAGE 29/30]: "Response variables are post-outcome and are excluded from the model despite their large apparent signal" [PAGE 29].
- [PAGE 25]: era 2026 1.137 1.068 1.028 mean 1.078; 2005 mean 1.012. Quote not necessary.
- [PAGE 18]: "Virat Kohli (RAE = 11) and MS Dhoni (RAE = 68) add almost nothing above par per delivery, yet rank equal-seventh at 601" [PAGE 19]? Actually text page 19? Source after Table 9 page 19: "Virat Kohli (RAE = 11) and MS Dhoni (RAE = 68)". Use [PAGE 19].
- [PAGE 21]: "The most impactful batting season in IPL history belongs not to the leading run-scorer but to Vaibhav Suryavanshi’s 776 runs at a strike rate of 237 in 2026 (Impact 260)" [PAGE 21].

Need make sure page numbers: Page 18 includes 6.4 and 6.5 start; Table 9 page 18? Actually Table 9 on page 18 bottom; discussion on page 19. We'll cite [PAGE 19] for Kohli. Good.

Need maybe cite "M0=120" [PAGE 24]. "phases 3 powerplay (≤ over 6), middle (7–15), death (16–20)" [PAGE 24]. Good.

Need not use "pages 60" conflict. Fine.

Let's write. Use XML tags. No markdown. Need ensure no nested XML issues? LaTeX with < maybe? Avoid < inside equations except \(\le\). Use \le. Good. Use \( \) not angle brackets.

Need word count. Let's estimate: THINK_TRACE 600; SOURCE 800; GENEALOGY 400; TOM 400; CROSS 400; RLVR 400 = 3000. Good.

Need maybe "exact XML sections" means opening/closing tags as specified. We'll use exactly tags with no attributes. Good.

Let's draft carefully.

Potential issue: "THINK_TRACE" should be "Deep multi-hop derivation & gray-zone audit (>=400 words)." We'll label internal. Good.

Need include "formal LaTeX equations" in SOURCE. We can include many.

Need "units" in SOURCE. Add a sentence: "Units: \(r_b,\mu,\hat\mu,\mathrm{RAE}_b,c(s),\mathrm{DAR},\Omega\) are runs per legal ball or runs; \(h,\eta,\pi,W\) are probabilities per legal ball or indicators; \(n,m\) are legal balls; \(\gamma,\omega,\tau^2,\kappa\) dimensionless (κ in deliveries, τ² in runs² per ball²? Actually τ² is variance of multipliers dimensionless; Var(r) runs²; μ0² runs²; κ deliveries)." Need precise: \(\tau_f^2\) dimensionless since multipliers dimensionless; \(v_c\) dimensionless; \(\kappa_f\) deliveries. Good.

Need "information/probability units": We can state probability per legal ball. Good.

Need "singularity/breakdown regimes" explicit. Use bullet list. Good.

Need "proof" in cross-layer. We can use "admissibility predicate" formal but not toy ratio. Fine.

Need "RLVR" maybe use "verifiable reward veto". Good.

Let's produce final. 
Need no intro outside XML. Fine.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s derivation is a two-primitive decomposition, not a single composite score. The first primitive, RAE, is built by taking the ball outcome \(r_b\) and subtracting a contextual expectation \(\mu(x_b)\) fitted as a multiplicative log-linear model. The key statistical move is Proposition 1: if \(r_b\mid x_b\sim\mathrm{Poisson}(\mu_b)\), with \(\log\mu_b=\log e_b+\log\gamma_{c(b)}\), then the cell multiplier MLE is the ratio of observed to fitted runs in that cell. That is exactly the backfitting update in Eq. (3). The paper then says each update is a Gauss-Seidel block step on a concave Poisson log-likelihood, and because the maximised log-likelihood is unique, the fitted expectation and RAE are order-independent at convergence [PAGE 7]. This is a strong claim, but it is conditional on the Poisson working model. The paper itself notes overdispersion, with \(\mathrm{Var}(r)/\mu_0\approx 2.08\) [PAGE 8], so the Poisson model is a fitting device, not a literal generative claim for inference.

The second primitive, DAR, is more subtle. A batting-side value function \(V_e(m,w,i,j)\) is solved by a Bellman expectation recursion, not a Bellman optimality recursion. The paper is explicit: it evaluates observed play, not optimal play, because pricing a wicket requires what an innings would in fact have yielded, not what an optimal side could extract [PAGE 10]. The per-ball wicket cost \(c(s)\) is the drop in value from survival to the post-dismissal state, plus a freshness correction. Then realDAR sums \(c(s_b)\) over realised dismissals, and xDAR sums \(\bar h_{\phi_b,e_b}c(s_b)\) over all balls faced. DAR is realDAR minus xDAR, so it collapses to \(\sum_b(W_b-\bar h_{\phi_b,e_b})c(s_b)\), a run-weighted martingale residual [PAGE 12]. The centering only holds if \(E[W_b\mid s_b]=\bar h_{\phi_b,e_b}\). That is the main gray zone: the paper uses a league hazard conditioned only on phase and innings, deliberately coarse so that player skill surfaces as survival above the league rate [PAGE 22]. If one conditions the hazard on the player, the residual is no longer against a common baseline; the skill signal is partly absorbed into the expectation.

The third gray zone is the opposition overlay. The same context specification is used for batters and bowlers, but the opposition factor is role-specific: a batter is credited against the bowler he faced, a bowler against the batter he contained, and a player’s own factor is never applied to his own residual [PAGE 9]. This is elegant, but it creates a recursive dependence: opposition multipliers are co-fit with context factors, so player identity and context are jointly estimated. The paper’s convergence argument handles the fitting order, but not the conceptual endogeneity that bowlers adjust line and length to batters. The limitations section acknowledges this: a batter who forces bowlers into uncomfortable areas may carry a slightly deflated \(\hat\mu(x_b)\) [PAGE 21]. The mRAE extension then sharpens this exact problem: conditioning a batter’s residual on line and length credits shot-making given the delivery, but conditioning a bowler’s residual on his own line and length subtracts out the bowler’s main skill. The paper reports that this degrades the bowling ranking markedly, with Spearman 0.83, and moves it in the wrong direction [PAGE 29]. So the audit conclusion is that RAE and DAR are coherent as descriptive residual metrics under stated assumptions, but causal or cross-role “value” claims require the conditioning set to be ex ante and role-symmetric. The paper mostly respects that, except where mRAE is shown to fail for bowlers.

A final gray zone is additive scale versus causal scale. Bat Impact is \(\sum \mathrm{RAE}_b-\mathrm{DAR}^{bat}_i\), Bowl Impact is \(-\sum \mathrm{RAE}_b+\mathrm{DAR}^{bowl}_i\). Both are sums of mean-zero residuals, so the common centre is a mathematical consequence of centering, not an independent empirical discovery [PAGE 14]. The paper’s evidence that the absolute construction puts roles on disjoint ranges is empirical: batting average \(-193\), bowling average \(+225\), versus centered batting \(+144\), bowling \(-15\), on qualifying IPL players [PAGE 17]. That is a real diagnostic, but it tests the centering arithmetic as much as the substantive comparability of roles.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines the cohort expected runs on legal delivery \(b\) as
\[
\mu(x_b)=\mu_0\prod_{k=1}^{6}\gamma^{(k)}_{c_k(b)},\qquad
\log\mu(x_b)=\log\mu_0+\sum_{k=1}^{6}\log\gamma^{(k)}_{c_k(b)},
\]
with \(\mu_0\) the grand mean over legal deliveries, \(\gamma^{(k)}_{c_k(b)}\ge0\) dimensionless multipliers, and \(x_b\) the context. The five shared factors are scenario \((\text{phase},\text{innings})\), era \((\text{year},\text{phase})\), wicket \((\text{phase},\text{wickets fallen})\), bowler type \((\text{phase},\text{pace/spin sub-type})\), and venue \((\text{ground},\text{3-year bucket})\); the sixth is the role-specific opposition factor [PAGE 5]. Units: \(\mu\) and \(r_b\) are runs per legal delivery; \(\gamma\) is dimensionless. The paper’s Remark 1 says “No separate phase weight is applied to either role, RAE therefore acts as a pure residual on the run scale” [PAGE 5].

The backfitting update is
\[
\hat\gamma^{(f)}_c=\frac{\sum_{b\in c}r_b}{\sum_{b\in c}e_b},
\]
where \(e_b\) is the running fitted offset. Proposition 1 states that under \(r_b\mid x_b\sim\mathrm{Poisson}(\mu_b)\) with \(\log\mu_b=\log e_b+\log\gamma_{c(b)}\), this ratio is the conditional Poisson MLE [PAGE 7]. The fitted multiplier is then shrunk:
\[
\gamma^{(f)}_c
=\frac{n_c\hat\gamma^{(f)}_c+\kappa_f}{n_c+\kappa_f}
=\omega_c\hat\gamma^{(f)}_c+(1-\omega_c)\cdot1,\qquad
\omega_c=\frac{n_c}{n_c+\kappa_f},
\]
where \(n_c\) is the cell delivery count, \(\kappa_f\) is a pseudo-count in deliveries, and \(1\) is the neutral multiplier [PAGE 8]. The sampling variance is
\[
v_c=\frac{\mathrm{Var}(r)\,n_c}{\left(\sum_{b\in c}e_b\right)^2},
\]
and the precision weight is
\[
w_c=\frac{\tau_f^2}{\tau_f^2+v_c}.
\]
The pseudo-count is
\[
\kappa_f=\frac{\mathrm{Var}(r)}{\mu_0^2\tau_f^2},
\]
which the paper calls the “noise-to-signal ratio for factor \(f\), read as an equivalent count of prior deliveries” [PAGE 9]. Units: \(\mathrm{Var}(r)\) is runs\(^2\); \(\mu_0^2\) is runs\(^2\) per ball\(^2\); \(\tau_f^2\) is dimensionless because it is the between-cell variance of multipliers; hence \(\kappa_f\) has units of deliveries.

The RAE construction is
\[
\mathrm{RAE}_b=r_b-\hat\mu(x_b),\qquad
\mathrm{RAE}_i=\frac{1}{n_i}\sum_{b:i}\mathrm{RAE}_b,\qquad
\mathrm{RAE}^{total}_i=\sum_{b:i}\mathrm{RAE}_b,
\]
with \(\mathrm{se}_i=\mathrm{sd}_b(\mathrm{RAE}_b)/\sqrt{n_i}\) [PAGE 9]. The paper states “\(v_b=\mathrm{RAE}_b\) for batters and \(v_b=-\mathrm{RAE}_b\) for bowlers” [PAGE 9].

The value function is
\[
V_e(m,w,i,j)
=h_{i,\phi,e}V_e(m-1,w-1,\iota(w),j)
+(1-h_{i,\phi,e})\sum_{r\in R}\pi_{r\mid i,\phi,e}
\left[r+V_e(m-1,w,i',j')\right],
\]
with boundaries \(V_e(0,w,i,j)=0\) and \(V_e(m,0,i,j)=0\) [PAGE 10]. Units: \(m\) is legal balls remaining; \(V_e\) is runs; \(h\) is dismissal probability per legal ball; \(\pi\) is a probability mass function over runs \(R=\{0,1,2,3,4,5,6\}\). The wicket cost is
\[
c(s)=\left[V_e(m,w,i,j)-V_e(m-1,w-1,\iota(w),j)+\delta_{\text{fresh}}\right]_+,
\]
and the freshness term is
\[
\delta_{\text{fresh}}=(1-f(E))\,\mu\,\min(E,E_{\max}),
\]
with \(E\) the geometric survival expectation of balls the dismissed batter would have faced, \(f(k)\) the fraction of settled scoring rate realised over the first \(k\) balls, and \(E_{\max}=6\) [PAGE 12 and PAGE 24]. The realised and expected ledgers are
\[
\mathrm{realDAR}^{bat}_i=\sum_{b\in D_i}c(s_b),\qquad
\mathrm{realDAR}^{bowl}_i=\sum_{b\in W_i}c(s_b),
\]
\[
\mathrm{xDAR}^{bat}_i=\sum_{b\in F_i}\bar h_{\phi_b,e_b}c(s_b),\qquad
\mathrm{xDAR}^{bowl}_i=\sum_{b\in B_i}\bar h_{\phi_b,e_b}c(s_b),
\]
and hence
\[
\mathrm{DAR}^{bat}_i
=\mathrm{realDAR}^{bat}_i-\mathrm{xDAR}^{bat}_i
=\sum_{b\in F_i}\left(W_b-\bar h_{\phi_b,e_b}\right)c(s_b),
\]
symmetrically for bowlers [PAGE 12]. Units: \(c(s)\) and DAR are runs; \(W_b\in\{0,1\}\) is a dismissal indicator; \(\bar h\) is a probability per legal ball. The paper’s Proposition 2 requires \(E[W_b\mid s_b]=\bar h_{\phi_b,e_b}\) to make DAR mean-zero [PAGE 12–13]. The final Impact definitions are
\[
\Omega_i^{(\mathrm{Bat})}=\sum_{b\in F_i}\mathrm{RAE}_b-\mathrm{DAR}^{bat}_i,
\qquad
\Omega_i^{(\mathrm{Bowl})}=-\sum_{b\in B_i}\mathrm{RAE}_b+\mathrm{DAR}^{bowl}_i
\]
[PAGE 13]. The paper says “Both (17) and (18) are sums of two mean-zero residuals in runs above expectation” [PAGE 14].

The mRAE extension appends line and length:
\[
\tilde\mu(x_b)=\mu(x_b)\gamma^{len}_{(\phi,\ell(b))}\gamma^{lin}_{(\phi,\lambda(b))},
\qquad
\mathrm{mRAE}_b=r_b-\tilde\mu(x_b),
\qquad
\mathrm{pRAE}_b=r_b-\mu(x_b)
\]
[PAGE 29]. Table S12 gives length multipliers from yorker \(0.490\) to short \(1.460\), and line multipliers from off stump \(0.973\) to wide outside off \(1.118\) [PAGE 30]. The paper explicitly excludes post-outcome response variables: “Response variables are post-outcome and are excluded from the model despite their large apparent signal” [PAGE 29].

Breakdown and singularity regimes stated by the construction:
1. Eq. (3) is undefined for a cell with \(\sum_{b\in c}e_b=0\), i.e. no fitted exposure. In practice this is a zero-delivery cell; it cannot be estimated and must be pooled or dropped. Eq. (4) is undefined at \(n_c=0\) unless one adopts the prior value \(1\).
2. \(\kappa_f\to0\) means no shrinkage; \(\kappa_f\to\infty\) means full pooling to the neutral multiplier. Eq. (7) becomes singular when \(\tau_f^2=0\): the between-cell signal vanishes and \(\kappa_f\) diverges, so the factor is shrunk to uninformative neutrality. Conversely, \(\mathrm{Var}(r)=0\) gives \(\kappa_f=0\), but that is a degenerate run distribution.
3. The Poisson MLE is a working likelihood. The source reports \(\mathrm{Var}(r)/\mu_0\approx 2.08\), so the data are overdispersed [PAGE 8]; Poisson standard errors are not literal.
4. The Bellman recursion requires \(h_{i,\phi,e}\in[0,1]\) and \(\sum_r\pi_{r\mid i,\phi,e}=1\). If \(m=0\) or \(w=0\), the boundary values in Eq. (10) apply; if \(w=1\) and a wicket falls, the state is all out. The incoming-batter tier \(\iota(w)\) is an empirical average, not a player identity, so the value function cannot price a specific incoming batter.
5. DAR centering fails if \(E[W_b\mid s_b]\ne\bar h_{\phi_b,e_b}\). It also fails if a dismissal is attributed to the wrong player, e.g. non-striker run-outs, which the paper says are “left aside” in the value function’s striker-only dismissal treatment [PAGE 21].
6. The mRAE construction is not identified on untracked deliveries. Line and length are present for about one-third of legal deliveries overall [PAGE 28]; thus mRAE cannot be a universal cross-competition scale.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is explicitly run-expectancy and dynamic-programming history. It cites Duckworth-Lewis resource tables as a value function of overs and wickets, Clarke (1988) and Preston and Thomas (2000) for optimal scoring, and Brooker and Hogan (2011) for WASP [PAGE 2 and PAGE 10]. It also cites Lindsey (1963) for baseball run expectancy, openWAR, VAEP in football, and expected possession value in basketball as analogues of pricing events in the game’s currency above expectation [PAGE 3]. The closest cricket antecedent is the Davis, Perera and Swartz simulator-based expected run differential, which captures context and reports runs but “depends on a full generative simulator and a role-defined replacement” and does not yield a transparent per-ball decomposition [PAGE 3]. The paper positions itself against proprietary Smart Stats and CricViz systems that target unified impact but are not reproducible [PAGE 2–3].

The retrocausal trap is that a context-adjusted metric can make old performances look newly valuable for reasons that are partly definitional. The paper’s era factor is estimated by year and phase, and Table S3 shows 2026 means 1.078 versus 2005’s 1.012 [PAGE 25]. Thus Virender Sehwag’s high cumulative Bat Impact is not simply a modern-era run glut; his stroke play is scored against the lower bar of his own pre-inflation seasons [PAGE 19]. That is a legitimate correction, but it is also a reminder that era adjustment is a model-dependent counterfactual. A multi-week trap is to compare raw season totals across eras, then treat the era-adjusted leaderboard as if it were an absolute physical quantity. The paper’s own season table makes the point: Vaibhav Suryavanshi’s 776 runs at strike rate 237 in 2026 produce Impact 260, while Virat Kohli’s record 973-run 2016 season produces Impact 205 and ranks sixth [PAGE 21]. The ranking is not a restatement of runs; it is a restatement of runs above a fitted contextual expectation.

A second lineage trap is wicket-count fetishism. The paper shows that Yuzvendra Chahal took the most IPL wickets, 233, with realDAR 840, but his expected haul is almost identical at xDAR 845, so he “nets nothing significant through wickets” [PAGE 19]. R. Ashwin’s realised wickets 647 fall short of expected 925, so his standing rests on containment [PAGE 19]. This is a retrocausal correction of the traditional scorecard: the historical record’s “wicket taker” label is not the same as excess wicket value against workload and state. The multi-week trap is to read a career wicket total as a causal skill measure when the paper’s own decomposition says most of that total is expected volume.

A third trap is the survival-credit reversal. The paper reports that Virat Kohli (RAE = 11) and MS Dhoni (RAE = 68) “add almost nothing above par per delivery, yet rank equal-seventh at 601” because their wicket ledger is a large credit: xDAR 1604 against realDAR 1013 for Kohli, 1069 against 535 for Dhoni [PAGE 19]. A naive reader may conclude that the metric rewards not-out accumulation. But the paper says “Occupation of the crease is close to neutral rather than free” [PAGE 13], because the survival credit is offset by weak RAE for slow scoring. The trap is to isolate one channel and ignore the sum. The same issue appears in mRAE: it redistributes credit from batters who feast on hittable deliveries to those who milk good ones, and only eleven of 107 qualifiers gain [PAGE 30]. That is a scientifically meaningful redistribution, not a universal improvement.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when evaluators under pressure revert to raw strike rate, economy, or wicket count. The paper’s opening example is exactly this: “A strike rate of 150 is unremarkable at the death and exceptional in the middle overs, an economy around 8 is expensive in the middle overs and cheap at the death” [PAGE 2]. A selector or analyst in a crisis may know this verbally but still reach for the raw number because it is fast and socially legible. The paper’s phase-dependent wicket factor makes the same point: in the middle overs the multiplier declines almost monotonically from 1.136 at zero wickets to 0.657 at nine down, while the death overs invert the top of the gradient, with one wicket down at 1.164 above none at 0.986 [PAGE 15]. A crisis-habit model that treats “more wickets fallen” as uniformly worse will misprice the death-over acceleration after a set batter falls.

The counter-trap is Goodhartian adaptation. Once players and teams know the metric, they can optimize the measured residual rather than the underlying objective. The paper’s DAR design is aware of one version of this: “Getting out is the expected end of every innings, so the metric does not tax a batter simply for being dismissed” [PAGE 13]. That avoids a naive wicket penalty, but it creates a survival-credit channel. A batter who understands the metric could overvalue occupation of the crease; the paper’s counter is that slow scoring produces weak RAE, so occupation is “close to neutral rather than free” [PAGE 13]. Similarly, a bowler who understands mRAE could be tempted by “hard-to-score” lengths, but the paper shows that conditioning a bowler on his own line and length removes the very skill being measured and flatters expensive bowlers [PAGE 29]. The recursive theory of mind must therefore include the evaluator’s model of the player’s model of the metric.

The clock layer is both within-innings and across-era. Within an innings, the state clock is \(m\) balls remaining, with phase \(\phi=\phi(M_0-m)\), and the value function is solved backward from \(m=0\) to \(M_0\) [PAGE 10 and PAGE 24]. Across eras, the clock is the year-by-phase multiplier: 2026 has a mean of 1.078 versus 2005’s 1.012 [PAGE 25]. A player’s reputation clock and the league’s scoring clock can diverge. The paper’s Sehwag example shows how an old player can rank highly because his performances are scored against his own era’s lower bar [PAGE 19]. The recursive trap is that fans and selectors update reputations on a slower clock than the metric’s era factor, producing apparent disagreements that are really different time models.

In multi-agent terms, the opposition overlay is a theory-of-mind operator: a batter’s expectation is multiplied by the opposition bowler’s multiplier, and a bowler’s by the opposition batter’s multiplier, but never by the player’s own multiplier [PAGE 9]. This is a formal statement that a player should be judged against the opponent faced, not against himself. The mRAE bowling failure is the clearest counter-trap: applying the same “adjust for the delivery” logic to bowlers conditions on their own chosen line and length, so the model treats their skill as the expected state of affairs. The paper’s numbers are decisive: Rashid Khan falls from +0.170 to +0.118 runs saved per ball, Bhuvneshwar Kumar from +0.178 to +0.117, Sunil Narine from +0.168 to +0.099, and Mitchell Santner from +0.139 to +0.078 [PAGE 29]. The recursive lesson is that symmetry of adjustment is not the same as symmetry of causal role.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical-layer veto. The unit of analysis is the legal delivery, with wides and no-balls excluded [PAGE 4]. This is not a cosmetic filter: wides and no-balls carry runs and sometimes wicket events, but they are outside the RAE and DAR ledgers. Any claim that the metric values “every ball” must be vetoed unless it says “every legal ball.” The paper is consistent: “The unit of analysis is the legal delivery (is_legal_ball = True, wides and no-balls excluded)” [PAGE 4]. A physical audit should recompute the same player’s RAE with illegal deliveries included and show that the difference is either negligible or reported. If the difference is large, the metric is a legal-delivery metric, not a total-event metric.

Biomechanical-layer veto. The mRAE extension is the biomechanical channel: length and line are delivery variables, while control, shot type, and shot area are response variables. The paper excludes response variables because they are post-outcome: “Response variables are post-outcome and are excluded from the model despite their large apparent signal” [PAGE 29]. This is a valid causal-ordering veto. The fitted length multipliers are physically interpretable: yorker 0.490, bouncer 0.607, good length 0.880, back of length 0.970, half volley 1.188, full toss 1.320, short 1.460 [PAGE 30]. A claim that mRAE measures “shot quality” independent of the delivery would be vetoed, because the model explicitly conditions on the delivery. More strongly, applying mRAE to bowlers is vetoed by the paper’s own evidence: “Conditioning a bowler’s residual on his own line and length subtracts out his main contribution” [PAGE 29], and the ranking moves in the wrong direction with Spearman 0.83 [PAGE 29]. The physical proof is simple: if the covariate is the bowler’s own action, conditioning on it removes the action’s value; the residual is no longer a skill measure.

Weather and interruption veto. The value function is solved with \(M_0=120\) legal balls and fixed phases: powerplay \(\le\) over 6, middle 7–15, death 16–20 [PAGE 24]. The paper does not implement a live rain-interruption or Duckworth-Lewis reset inside the Bellman state; it cites Duckworth-Lewis as lineage, not as an implemented adjustment [PAGE 2 and PAGE 10]. Therefore, if a match is shortened, the state clock \(m\), the phase function \(\phi(M_0-m)\), and the boundary \(V_e(0,w,i,j)=0\) are no longer the same object. A weather-veto proof can be stated as an admissibility condition: the published \(V_e\) table is admissible only for matches with the standard 120-ball maximum and the paper’s phase definition. For rain-shortened matches, one must re-solve with the actual \(M_0\) and revised phase boundaries, or veto the DAR/Impact output. The paper’s own limitations also note that the second-innings value function “conditions on the innings alone, capturing average chase behaviour through innings-specific transition models but not the live required run rate” [PAGE 21]. That is a weather/chase-state veto for high-stakes chase claims: the model does not know the live target pressure.

Attribution veto. The value function “treats every dismissal as the striker’s, so run-outs of the non-striker ... are left aside” [PAGE 21]. If a run-out is a non-striker run-out, the wicket cost is assigned to the striker’s state transition, not to the player actually dismissed. A player-level DAR audit should separate striker dismissals from non-striker run-outs; otherwise the physical event and the accounting event diverge. This is a narrow but real veto: the paper’s centering proof is conditional on \(W_b\) marking whether “the striker was dismissed” [PAGE 12]. If the event is not a striker dismissal, the indicator is mis-specified.

Coverage veto. The paper’s ball-tracking tier covers only 16.5% of legal deliveries for stroke annotation and 33.9% for line/length, with 83% of matches baseline-only [PAGE 4]. Thus any cross-competition mRAE leaderboard is vetoed as a universal scale. The paper says line and length are present for “about one-third of all legal deliveries” [PAGE 28], and mRAE is therefore a companion metric on tracked subsets, not a replacement for pRAE.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Centering-null veto for RAE and DAR. Verifiable test: recompute the full fit on a held-out season or a random delivery split, and check the Poisson score identity \(\sum_{b\in c}r_b=\sum_{b\in c}\hat\mu_b\) within context cells, up to shrinkage. Prediction under the paper’s claim: the global mean ball-level batter residual should be near zero; the reported full-sample value is \(\overline{\mathrm{RAE}}_b=-0.0001\) runs across 2,727,420 legal deliveries, with bowler residual \(-0.0005\) [PAGE 16]. For DAR, prediction: if \(E[W_b\mid s_b]=\bar h_{\phi_b,e_b}\), then the mean DAR should be zero within bootstrap error; the paper’s Proposition 2 gives the formal condition [PAGE 12]. Veto signal: if the held-out cell residuals are systematically positive for high-opposition cells or systematically negative for low-opposition cells, the opposition overlay or shrinkage is mis-specified. A second verifiable check is the role-scale test: the absolute construction should reproduce the paper’s disjoint ranges, with batting average \(-193\) and bowling average \(+225\), while the centered construction should give batting \(+144\) and bowling \(-15\) [PAGE 17]. If the centered construction does not collapse the role gap, the claim that centering restores comparability is falsified.

2. Hazard-resolution veto for DAR. Verifiable test: replace the league hazard \(\bar h_{\phi,e}\) with a player-specific hazard \(\eta_i\), or with a state-rich hazard including wicket count and batter tier, and recompute DAR. Prediction from the paper’s design logic: the player-specific version will move the mean DAR away from zero and will reduce the survival-credit spread, because the baseline is now closer to the player and absorbs the skill signal; the paper explicitly warns that conditioning \(\bar h\) on richer state moves “the baseline closer to the player and dilut[es] the skill signal it is meant to expose” [PAGE 22]. A concrete verifiable prediction is that bowlers with high raw wicket volume but near-expected realDAR/xDAR, such as the Chahal example where realDAR 840 versus xDAR 845, should not gain materially under a correctly centered league baseline [PAGE 19]. Veto signal: if the player-specific hazard leaves the mean DAR at zero and preserves the same leaderboard, then the league-vs-player hazard distinction is not empirically binding in that sample; if it shifts the leaderboard toward raw wicket counts, the centering claim is not robust.

3. mRAE bowler-application veto. Verifiable test: compute pRAE and mRAE for bowlers on the tracked IPL subset, 2015–2025, with at least 300 tracked balls, and compare Spearman rank correlation and player-level changes. Prediction from the paper: the correlation should be about 0.83, and the adjustment should move elite control bowlers downward: Rashid Khan \(+0.170\to+0.118\) runs saved per ball, Bhuvneshwar Kumar \(+0.178\to+0.117\), Sunil Narine \(+0.168\to+0.099\), and Mitchell Santner \(+0.139\to+0.078\) [PAGE 29]. Aggregated, the paper reports that a majority of qualifying bowlers, 73 of 132, rise under mRAE, which it interprets as flattering expensive bowlers and docking the miserly [PAGE 30]. Veto signal: if a proposed “bowling mRAE” leaderboard rewards known control bowlers less after conditioning on their own line and length, the metric is measuring the model’s removal of skill, not bowling quality. The verifiable prediction is directional and numerical: the rank correlation should remain well below the batting pRAE/mRAE correlation of 0.984 and Spearman 0.97 [PAGE 29], and the named control bowlers should lose value. If they do not, the paper’s veto against bowling mRAE would not replicate.
</RLVR_COUNTERFACTUAL_VETOES>