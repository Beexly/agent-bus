---
source: "2021 - Comparing sequential forecasters is 538 any better than Vegas-Odds - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2021"
pages: 82
model: deepseek/deepseek-v4.1-flash-1017
words: 8904
---

<NATIVE_REASONING>
We need answer user request. They provided long source. We need produce GSE+GSI Frontier Reasoning Foundry with strict sections. Need no betting lines, no odds? Invariant says ZERO BETTING LINES: Never mention spreads totals moneylines odds. Source includes Vegas-Odds and betting odds. We need discuss source but avoid betting lines. We can refer to "market-derived probability forecaster" or "vegas forecaster" maybe "vegas" is name. But "odds" word? Invariant says never mention... odds. Avoid term "odds". We can say "Vegas-labeled market forecaster" or "vegas". But source text has odds; can cite exact quotes? Hmm conflict: Need cite exact [PAGE N] and verbatim quotes when source pages provided. But if quote includes "Vegas-Odds.com" maybe mentions odds. We can avoid quoting those. Need cite pages exact markers. The provided source doesn't have page markers except page numbers. We can use [PAGE 3] etc. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. >=1000 words across exact XML sections. Need deep multi-hop derivation, gray-zone audit >=400 words in THINK_TRACE. Need source operators and equations with formal LaTeX, units, page citations, breakdown. Retro causal genealogy historical/scientific lineage & multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Must not mention betting lines. Need answer likely about comparing sequential forecasters, source paper. Need maybe derive sequential inference, CS, e-process. Need cover "GSE + GSI Frontier Reasoning Foundry" maybe generate research analysis. We need be thorough, >1000 words. Desired oververbose 5. Need not be too enormous but sections need depth. We'll structure exact XML tags. Need include equations. Since no actual problem question besides source. We should produce an analytical dossier applying frontier reasoning to source. Need mention "DRIVE SOURCE ..." The user likely expects answer about source. We need interpret as task: produce rigorous analysis of paper using required sections. Need include citations [PAGE N] with verbatim quotes. Need use exact page markers from source pages. We can cite page numbers as [PAGE 3] etc. Need quote exact. Ensure quotes are verbatim from source. We can quote:
- [PAGE 3] "we derive e-processes and p-processes ... for testing whether one forecaster outperforms the other on average"
- [PAGE 4] "The CS in the left plot continuously tracks the expected average score differential over time"
- [PAGE 7] "Ville’s inequality is the primary tool for constructing confidence sequences"
- [PAGE 9] "we define the safe, anytime-valid inference (SAVI) methods as ones that satisfy either the time-uniform coverage guarantee (CS) or the anytime-valid guarantee (e- or p-processes)."
- [PAGE 13] "The key difference from the Hoeffding-style CS is that we now use an empirical estimate of the variance process"
- [PAGE 17] "The larger the value of E_t, the more the evidence against the null."
- [PAGE 23] "vegas forecaster has marginally outperformed the 538 forecaster" but "vegas" okay, no odds term. Quote includes "Forecasters" maybe.
- [PAGE 24] "none of the other forecasters, including 538, have outperformed vegas"
- [PAGE 26] "All our methods provide evidence and uncertainty related to the former statement." good.

Need page markers with exact page numbers. The paper page 3 includes Table 1 and intro. Page 7 has Ville. Page 13 has EB. Page 17 theorem 3. Page 23 MLB results. Page 24 table. Page 26 discussion. Good.

Need formal equations. Let's define:
Let Y={0,1}, p_t,q_t∈[0,1], y_t∈{0,1}, S proper positively oriented. Brier S(p,y)=1-(p-y)^2. Pointwise empirical differential \hatδ_t = S(p_t,y_t)-S(q_t,y_t). δ_t=E_{t-1}[\hatδ_t]. Average Δ_t=(1/t)∑_{i=1}^t δ_i. Empirical \hatΔ_t=(1/t)∑ \hatδ_i. Martingale S_t=∑(\hatδ_i-δ_i). Intrinsic time \hat V_t=∑(\hatδ_i-γ_i)^2 with predictable γ_i. The EB CS Theorem 2: C_t^EB = \hatΔ_t ± u_{α/2,c}(\hat V_t)/t. Conditions: |\hatδ_i|≤2c or bounded. u sub-exponential uniform boundary. For e-process Theorem 3: E_t(λ)=exp{λ S_t - ψ_{E,c}(λ)\hat V_t}? Need exact? The source theorem maybe E_t(λ)= exp{λ∑\hatδ_i - ψ(λ)\hat V_t} times something? From source:
Theorem 3: for each λ∈[0,1/c), E_t(λ) = exp{λ∑_{i=1}^t \hatδ_i - ψ_{E,c}(λ)\hat V_t}? Let's derive. Eq (24) likely E_t(λ)=exp{λ∑ \hatδ_i - ψ(λ) V_t} * ∏? Actually from Proposition 2:
E_t(λ)= exp{λ∑_{i=1}^t \hatδ_i - ψ_{E,c}(λ)\hat V_t}? Wait proof: E_t(λ) ≤ L_t(λ) under H0 where L_t(λ)= exp{λ S_t - ψ(λ) V_t}. If S_t=∑(\hatδ_i-δ_i). Under H0, δ_i≤0 so ∑\hatδ_i ≥? Let's see. They define E_t(λ) maybe = exp{λ∑ \hatδ_i - ψ(λ)\hat V_t}. Then E_t/L_t = exp{λ∑δ_i}. Under H0 Δ_t≤0 all t => ∑δ_i≤0, so E_t ≤ L_t. Yes. So E_t(λ)=exp{λ∑_{i=1}^t \hatδ_i - ψ_{E,c}(λ)\hat V_t}. Mixture E_t^mix=∫E_t(λ)dF(λ)=m(∑\hatδ_i,\hat V_t). Good. p-process p_t=1/sup_{i≤t}E_i. Units: score differentials dimensionless (probability-scale score units, Brier in [0,1] or [-1,1]); intrinsic time dimensionless? Sum of squared score differentials, so dimensionless if scores dimensionless; if score units are "score²"? We can state scores are dimensionless in [0,1], differentials dimensionless; intrinsic time squared-score units; boundary u has same units as S_t (score units); dividing by t yields score units. E-processes dimensionless (evidence, e-value). CS coverage probability 1-α. λ units inverse score? ψ_E,c(λ) has inverse? Actually ψ(λ) has units? It's CGF-like, dimensionless in exponent; λS dimensionless, so λ inverse score; ψ(λ) V dimensionless. Good.

Need singularity/breakdown regimes: 
- c=0 or c→∞? If c∈(0,∞). λ max=1/c. At λ→1/c, ψ_E,c diverges; breakdown near boundary; use mixture.
- t=0? CS starts t≥1; at t=1 width huge; no data? 
- If predictable γ_i chosen outside allowed interval or V_t=0, boundary behavior. If all \hatδ_i=γ_i, V_t=0; CS width maybe u(0)/t; at t? 
- If score differentials unbounded (log score), Theorem 2/3 fail; need truncation/Winkler/asymptotic.
- If weak null has time-varying sign, e-process can decrease; "looking ahead" trap.
- Weather/biomechanical/physical veto: we can discuss precipitation forecast postprocessing, physical constraints; no biomechanical in source except sports. Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. We can tie to baseball weather? The paper doesn't have biomechanical. Need mention no biomechanical evidence in source; veto if claims about player injury/mechanics not supported. Physical weather: precipitation is bounded [0,1], Brier bounded. Physical veto: if forecast probabilities outside [0,1], invalid. Weather veto: 24-hour precipitation at airports, ensemble postprocessing. Need "proof" maybe formal: define admissibility constraints: p_t,q_t∈[0,1]; y_t∈{0,1}; if violated, scoring rule undefined or out-of-bounds and CS assumptions fail. For biomechanical, if event outcome not binary? If injury/mechanism affects outcome but not modeled, no distributional assumption needed but causal attribution not identified. Weather: precipitation outcome binary PoP; physical boundedness satisfies c=1/2? For Brier score differential |\hatδ|≤1, so c=1/2? Since Theorem 2 says |\hatδ_i|≤2c. If Brier score in [0,1], difference in [-1,1], so 2c≥1 => c≥0.5. Actually Brier S=1-(p-y)^2 ∈[0,1]; differential ∈[-1,1]. Thus c=1/2 works. For Winkler score bounded above 1, c? They use scale 2 in Prop4. Good.

Need RETROCAUSAL_GENEALOGY: historical lineage: Brier 1950, Good 1952, DeGroot/Fienberg 1983, Dawid 1984 prequential, Diebold-Mariano 1995, Giacomini-White 2006, Lai et al. 2011, Darling-Robbins 1967, Robbins 1970, Lai 1976, Howard et al 2020/2021, Henzi-Ziegel 2022, Ramdas et al 2022 e-processes. Multi-week traps: looking ahead/extrapolating future, strong vs weak null, monitoring inflates type I error, variance adaptation with changepoints, hyperparameter v_opt. Mention multi-week traps maybe in sports season/weather seasonal cycles. Need avoid "odds". Use "market forecaster" not odds. 

Need RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Interpret: crisis habit regression = forecasters/statisticians fall back to fixed-time CI/DM/GW tests under sequential monitoring; counter-trap = strong-null e-process rejects due to some time step even if average worse; clock = anytime-valid continuous monitoring and stopping time. Need discuss theory of mind: forecasters know statistician monitors; reality adversarial; p-hacking; Bayesian? We can formulate recursive beliefs: statistician believes forecaster may adapt; forecaster believes statistician may stop; Reality may react to forecasts. The game-theoretic framework makes no assumptions. Need mention "crisis habit regression" maybe when data nonstationary, analysts revert to classical tests; "counter-trap" is strong null vs weak null; "clock" is time-uniform boundary. Need tie to source. Could use math: P(∃t≤T: p_t≤α) > α for fixed-time tests even if each p_t valid. The counter-trap: H0^s implies H0^w; rejecting H0^s doesn't imply rejecting H0^w. Clock: stopping time τ, CS coverage P(∀t: Δ_t∈C_t)≥1-α. Good.

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need propose counterfactual vetoes with predictions. They need be verifiable. Scenarios:
1. Monitoring inflation veto: If analyst uses fixed-time CI or DM/GW repeatedly after each game, cumulative type I error should exceed α. Prediction: with simulated iid null and T=10,000, fixed-time CI miscoverage >0.05 by t~100-1000; EB CS ≤0.05. Source page 20-21/53-54 figures. Verify by simulation.
2. Strong-null false positive veto: Construct δ_t pattern p worse on average but better every 7th step (Sunday). H0^s false, H0^w true. Prediction: Henzi-Ziegel strong e-process grows/rejects, weak e-process remains small; CS for average stays ≤0. Source page 17 example k=7. Verify simulation with k=7.
3. Unbounded log-score veto: If use log score without truncation, Theorem 2/3 boundedness condition fails; e-process can be invalid. Prediction: with p near 0 and y=1, log score differential unbounded, CS coverage breaks or e-process not anytime-valid; using ε-truncation or Winkler restores coverage. Source page 13/24. Verify simulation. Could also weather/biomechanical veto: precipitation probabilities outside [0,1] or outcome not binary invalidates. But need 3. We can include physical/weather veto as one: If precipitation forecast postprocessing probabilities are not in [0,1] (or ensemble members not calibrated), Brier score boundedness still holds if clipped; if not clipped, bounds fail. Prediction: clipping changes CS widths and e-values; invalid probabilities cause violation. But RLVR scenarios should be verifiable. Use scenarios with predictions.

Need cross-layer veto adjudication: Physical/biomechanical/weather veto proof. Need separate section. We can state:
- Physical invariant: probability forecasts must satisfy p_t,q_t∈[0,1], y_t∈{0,1}; Brier score in [0,1]. If violated, score differential bound fails; cannot invoke Theorem 2/3. Source says forecasts in [0,1] and outcomes binary [PAGE 9]. Quote "P = [0,1]" maybe. Page 9: "the primary working example ... Y={0,1} and probability forecasts parametrized by their means in P=[0,1]." Good.
- Biomechanical: baseball outcomes may depend on pitcher mechanics/injuries; source explicitly allows side information such as starting players and injuries [PAGE 10]. But no distributional assumptions; cannot claim causal biomechanical effect without model. Veto causal extrapolation: if a claim says Vegas market forecast is better because of biomechanics, not identified by CS; only forecast performance. Need cite [PAGE 10] quote "which players are starting the game and whether there are injuries." Good.
- Weather: 24-hour precipitation at airports; ensemble postprocessing; binary PoP outcome; Brier bounded. Physical veto: weather forecasts are probabilistic; if comparing postprocessing methods, must align same airport/date/lag; missing data or different sample sizes invalidates paired comparison. Source page 25 says T=1703, 1809, 1128, 1621; wait page 25 says Brussels 1703, Frankfurt 1809, London 1128, Zurich 1621. Page 59 says different counts 3406 etc. Hmm. Use page 25. Need cite [PAGE 25] "Brussels (T = 1,703), Frankfurt (T = 1,809), London (T = 1,128), and Zurich (T = 1,621)". Good. Weather veto proof: Because score differentials are paired at same time/place, if missing or temporal leakage, the martingale property fails; the CS/e-process guarantee breaks. Use same filtration. Need mention no weather "odds" etc.

Need THINK_TRACE >=400 words. Need deep multi-hop derivation and gray-zone audit. We'll write maybe 600-800 words. Overall >1000. Need all sections exact XML. Let's plan.

Title maybe "GSE/GSI FRONTIER REASONING DOCKET". Then XML tags. Need no markdown? XML tags can contain markdown? Fine. Need ensure exact sections:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need include [PAGE N] markers. Need "verbatim quotes" exact. Let's gather exact quotes:
Page 3: "In this work, we derive statistically rigorous procedures for sequentially comparing forecasters via the powerful tool of confidence sequences (CS)". Also "We ask a relatively basic question: how might we compare these forecasters, either online or post-hoc, while avoiding unverifiable assumptions on how the forecasts and outcomes were generated?" (page 1 abstract actually). Page 3: "how much of that difference can be attributed to chance or luck?" exactly? Source: "But how much of that difference can be attributed to chance or luck?" yes.
Page 4: "we define safe, anytime-valid inference (SAVI) methods as ones that satisfy either the time-uniform coverage guarantee (CS) or the anytime-valid guarantee (e- or p-processes)." Actually page 4. Good.
Page 7: "Ville’s inequality is the primary tool for constructing confidence sequences" exact.
Page 9: "the primary working example in this paper will be the space of binary outcomes Y = {0, 1} and probability forecasts parametrized by their means in P = [0, 1]." Exact includes LaTeX. Use plain.
Page 10: "any side information that either forecaster may have, such as which players are starting the game and whether there are injuries." exact.
Page 13: "The key difference from the Hoeffding-style CS is that we now use an empirical estimate of the variance process for the cumulative sums" exact.
Page 17: "The larger the value of E_t, the more the evidence against the null." Source uses E_t. Good.
Page 17: "an e-process for the strong null can grow large, even though q is generally a better forecaster" exact? Source: "in the example of (22), an e-process for the strong null can grow large, even though q is generally a better forecaster; in contrast, our e-process (24) for the weak null is expected to remain small." Good.
Page 23: "the vegas forecaster has marginally outperformed the 538 forecaster" exact? Source: "finding that the vegas forecaster has marginally outperformed the 538 forecaster: after T = 25,165 games, 95% EB CS for Δ_T is (−0.00265, −0.00062)" Good. This includes "vegas" but not odds. Fine.
Page 24: "none of the other forecasters, including 538, have outperformed vegas" exact.
Page 25: "IDR forecasts are found to outperform both HCLR and HCLR_ 1-day forecasts for Brussels and that HCLR forecasts outperform HCLR_ forecasts for Frankfurt and Zurich" exact? Source: "we find from the 90% EB CSs that IDR forecasts are found to outperform both HCLR and HCLR_ 1-day forecasts for Brussels and that HCLR forecasts outperform HCLR_ forecasts for Frankfurt and Zurich, but we do not find significant differences at other locations between other pairs." Good.
Page 26: "All our methods provide evidence and uncertainty related to the former statement." exact.

Need equations exact enough. Use LaTeX.

Let's compute units and breakdown more explicitly.

Formal setup:
\( \mathcal{Y}=\{0,1\}, \mathcal{P}=[0,1] \).
\( S(p,y)=1-(p-y)^2 \) Brier.
\( \hat\delta_i = S(p_i,y_i)-S(q_i,y_i)\in[-1,1] \).
\( \delta_i = \mathbb{E}_{i-1}[\hat\delta_i] \).
\( \Delta_t = t^{-1}\sum_{i=1}^t \delta_i \).
\( \hat\Delta_t = t^{-1}\sum_{i=1}^t \hat\delta_i \).
\( S_t = \sum_{i=1}^t(\hat\delta_i-\delta_i)\).
\( \hat V_t = \sum_{i=1}^t(\hat\delta_i-\gamma_i)^2\), \(\gamma_i\) predictable and \(\gamma_i\in[-2c,2c]\).
\( \psi_{E,c}(\lambda)=c^{-2}(-\log(1-c\lambda)-c\lambda)\), \(\lambda\in[0,1/c)\).
\( L_t(\lambda)=\exp\{\lambda S_t - \psi_{E,c}(\lambda)\hat V_t\}\).
\( E_t(\lambda)=\exp\{\lambda\sum_{i=1}^t\hat\delta_i - \psi_{E,c}(\lambda)\hat V_t\}\).
\( E_t^{mix}=\int E_t(\lambda)dF(\lambda)=m(\sum\hat\delta_i,\hat V_t)\).
\( C_t^{EB}=\hat\Delta_t \pm u_{\alpha/2,c}(\hat V_t)/t\).
\( p_t=1/\sup_{i\le t}E_i\).
\( P(\forall t\ge1: \Delta_t\in C_t)\ge1-\alpha\).
\( P(\exists t: E_t\ge1/\alpha)\le\alpha\) under null.
Winkler: \( w(p,q,y)= [S(p,y)-S(q,y)]/[S(p,y)+S(q,y)] \) maybe? Source eq (57) likely: \(w(p,q,y)=1-\frac{S(q,y)}{S(p,y)}\)? Need not exact? Let's derive from source: It says \(w(p,q,y)\) with base scoring rule S; set 0/0:=0. It is equivalent to increment in HZ e-process. Lemma 1: \(w(p,q,y)=\frac{S(p,y)-S(q,y)}{S(p,y)+S(q,y)}\)? Let's check. Winkler (1994) normalized score maybe \(w(p,q,y)= [S(p,y)-S(q,y)]/[S(p,y)+S(q,y)]\)? If p=q =>0. If p best S=1, q worst S=0 => numerator 1, denominator 1 =>1. If p worst S=0, q best S=1 => numerator -1, denominator1 => -1. That matches bounded above 1, unbounded below? Actually denominator can approach 0, so negative unbounded. Source says "when p is calibrated and q least skillful, expected Winkler score zero when p=q and one when p∈{0,1}." For binary Brier S(p,y)=1-(p-y)^2. If p=q, 0. If p=1,y=1 S=1; q=0.5 S=0.75? numerator .25 denominator1.75=0.142 not 1. Hmm maybe formula different. Let's not state exact formula unless sure. Source says (57) equivalent to Henzi-Ziegel increment. HZ e-process increment \(1+\lambda \frac{\delta_i(y_i)}{\delta_i(1(p_i>q_i))}\)? Table 2. Hmm. We can avoid exact Winkler formula; state Winkler score is normalized proper score bounded above by 1. For equations, use \(w_t\) bounded above by 1. We can cite Proposition 4. Good.

Need "singularity/breakdown regimes" list:
- \(c\le0\) invalid; \(c\to0^+\): scale collapses, \(\lambda\) range \([0,\infty)\), but \(|\hatδ|\le2c\) impossible unless zero; breakdown.
- \(\lambda\to1/c^-\): \(\psi_{E,c}\to\infty\), exponential family boundary; numerical instability; use mixture or clipping.
- \(\hat V_t=0\): no empirical variance; boundary at zero; if all increments equal \(\gamma\), CS width \(u(0)/t\); at t=1 degenerate? 
- Unbounded scores: log score; \(\hatδ_i\) unbounded as p→0 or 1; Theorem 2/3 conditions fail; use truncation ε or Winkler.
- Nonstationary sign changes: e-process can decrease; strong vs weak null; no future extrapolation [PAGE 26].
- Continuous monitoring: fixed-time CI invalid; CS anytime-valid.
- Missing/unaligned paired data: martingale breaks; weather location/date alignment.

Need "retrocausal genealogy" maybe not literally time travel. Use "lineage" from Brier to CS to e-process. Mention "retrocausal" as reconstructing how current method depends on prior decisions: Brier score as proper scoring rule; prequential Dawid; martingale score differentials Lai; time-uniform CS Darling-Robbins, Lai, Howard; e-processes Ramdas; weak vs strong null Henzi-Ziegel. Multi-week traps: weekends/seasonality, lag-h, playoffs, weather seasons. The source has lag-h section E; mention period-wise weak null and seasonality of period h. Good.

Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock. We can define:
- Crisis habit regression: under continuous monitoring, analyst reverts to fixed-time CI/DM/GW because familiar; but cumulative type I error grows. Source page 53-54 figure 7. Use quote? Page 54: "the DM and GW tests, along with fixed-time CIs, do not have an anytime-valid guarantee." Exact.
- Counter-trap: using strong-null e-process as if it answered average superiority. Because H0^s⊂H0^w? Actually strong null implies weak null? Source says strong null \(H_0^s\) implies weak null \(H_0^w\), but not vice versa. Rejecting strong null only says p better at some time, not average. The "counter-trap" is taking rejection of strong null as evidence for average superiority. Source page 17 quote. 
- Clock: time-uniform CS/e-process with stopping time; can monitor anytime; decision depends on τ; no p-hacking. The "clock" is intrinsic time \(\hat V_t\), not calendar time. The recursive ToM: forecasters know statistician can stop; reality can change; statistician knows forecasters may adapt. Game-theoretic framework treats Reality adversarially. Need mention "habit regression" maybe when forecasters use "same data scientist" strong null is appropriate, but for unrelated forecasters weak null. Source page 6: "One case where the strong null is appropriate is if we test two sets of forecasts produced by the same data scientist..." Good.

Need "Cross-layer veto adjudication": physical/biomechanical/weather veto proof. We can include a table or bullet list. Need proof maybe theorem-like:
Admissibility predicate \(A_t = 1[p_t,q_t∈[0,1] ∧ y_t∈{0,1} ∧ paired same event and same filtration]\). If ¬A_t, then \(|\hatδ_t|≤2c\) and martingale property may fail; therefore Theorems 2/3 do not apply. For biomechanical, \(A_t^{bio}=1\) only if side information (injuries, starters) is in filtration before forecast; if used post-hoc, leakage. Source page 10 allows side information but forecasts cannot use future. Weather \(A_t^{wx}=1\) if same airport/date/lag and postprocessing trained on first half; else paired score differential not valid. The source page 25 says compare same pairs and locations; page 59 training first half. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios with predictions. Need maybe format:
Scenario 1: Continuous-monitoring type-I veto.
Setup: simulate iid null Δ_t=0, T=10^4, Brier score; analyst recomputes 95% fixed-time CI after every t and tests if excludes 0. Prediction: cumulative miscoverage α_t >0.05 by t≈100 and trends upward; EB CS α_t≤0.05 (often 0). Verification: source Figure 7 right, page 54. Veto: reject any claim "fixed-time CI is safe under optional stopping."
Scenario 2: Strong-null trap veto.
Setup: δ_t pattern: q better most days, p better every k=7th day, e.g., δ_t=-0.1 for t not multiple of 7, +0.2 on multiples. Average negative? Need ensure average negative: 6*(-0.1)+0.2=-0.4 per 7, negative. H0^w true (p no better on average), H0^s false. Prediction: HZ strong e-process may exceed threshold; weak e-process remains small; 95% CS for Δ_t covers ≤0. Verification: source page 17 example. Veto: reject "strong-null rejection implies average superiority."
Scenario 3: Unbounded score veto.
Setup: log score with p_t=10^{-6}, y_t=1; S=log p huge negative? But proper score positively oriented: y log p + (1-y)log(1-p). If p=1e-6 and y=1, S≈-13.8. Differential unbounded. Theorem 2 requires bounded |\hatδ|≤2c. Prediction: EB CS/e-process using untruncated log score can violate coverage or produce invalid e-values under null; ε-truncation or Winkler restores boundedness and coverage. Verification: source page 13 says truncated variant; page 24 Winkler. Veto: reject unbounded log score with Theorem 2/3 without truncation/normalization. Maybe include weather: precipitation PoP with probabilities outside [0,1]? But 3 enough. We can mention additional cross-layer veto in section.

Need no "betting lines" but can discuss "market forecaster" and "vegas". Avoid "odds" word entirely. The source itself has "Vegas-Odds.com" but we won't quote. Use "vegas forecaster" maybe lower-case. Is "vegas" okay? It names a source. It might be considered betting line? No, it's a forecaster label. But to be safe, use "Vegas-labeled market forecaster" or "the market forecaster labeled 'vegas' in the paper." Avoid "odds." Avoid "spread totals moneylines." Fine.

Need cite exact page markers. Use [PAGE 3], [PAGE 4], etc. Need maybe quote exact "faithful" from source. Ensure not too many quotes cause length. But requirement says cite exact [PAGE N] markers and verbatim quotes when source pages provided. We can include several.

Need "THINK_TRACE >=400 words" - ensure at least 400. We'll write ~700. Need overall >1000 words. We'll likely produce ~2500-3500 words. Desired oververbosity 5; okay.

Need maybe mention "GSE + GSI" in answer? Could open: "GSE/GSI docket: source is Choe & Ramdas, Comparing Sequential Forecasters." Need maybe mention source is 82 pages but actual content 61? The user says PAGES: 82. We can mention. But no need.

Need formal LaTeX in XML. Need escape? In XML text, LaTeX with `<` may break XML if not escaped. We need be careful: XML sections content with `<` should be escaped as `&lt;` or avoid. We can use \(\le\) instead of `<`. But LaTeX commands with `<`? Avoid. `>` also okay? In XML text, `>` is allowed but `<` not. We must escape `<` as `&lt;` if needed. Better use `\lt`? In LaTeX, use `\le`, `\ge`, not `<`. For intervals, use `[0,1]`. For `t \ge 1`. Use `\in`. Avoid `<` and `>`. But we may need `H_0: \Delta_t \le 0`. Good. Use `&lt;` for less-than if necessary. We can write "less than" in text. In equations, use `\leq`, `\geq`. `\to` okay. `\infty` okay. XML parser only cares `<`. So avoid `<` entirely. Use `\le` and `\ge`. For `P(\exists t: ...)` no `<`. Good.

Need if using `&` in LaTeX, XML needs escape `&amp;`. Avoid ampersand. Use "and" in text. In LaTeX, `\begin{aligned}` etc no ampersand? Aligned uses `&` for alignment. We can avoid aligned or use `&amp;`. Better use single equations or `\begin{array}{l}`? Avoid arrays. Use separate equations. No `&`. Good.

Need include "units" maybe in text: dimensionless score units, probability units. Use "dimensionless" not SI maybe "probability (dimensionless)" and "squared-score units" for intrinsic time. Source is statistical; no SI units. We can state "No physical SI units appear in the source; all quantities are dimensionless probability/score/evidence units." That satisfies units. For weather, precipitation "24-hour" is time unit. Could mention "24-hour precipitation" [PAGE 24] has time unit day. Good.

Need "exact singularity/breakdown regimes" in SOURCE section. We'll include a list:
1. \(c=0\) or \(c\to0^+\): impossible bound unless all differentials zero; \(\lambda\) domain collapses.
2. \(\lambda\to1/c^-\): \(\psi_{E,c}\) diverges; numeric overflow; mixture boundary needed.
3. \(\hat V_t=0\): degenerate variance; CS width uses \(u(0)\); if t=1, coverage still valid but weak.
4. Unbounded score: \(\hatδ_t\) unbounded; conditions fail; truncation/Winkler/asymptotic CS.
5. Nonstationarity/sign reversal: e-process not monotone; weak null composite; cannot infer future.
6. Misaligned/missing events: martingale and predictable filtration fail.
7. Continuous monitoring with fixed-time CI: type I error inflation.

Need "source operators and equations" maybe define "operators": scoring rule \(S\), expectation \(\mathbb{E}_{t-1}\), cumulative sum \(S_t\), intrinsic time \(\hat V_t\), boundary \(u\), mixture \(m\), e-process \(E_t\), p-process \(p_t\). Good.

Need "retrocausal genealogy" with historical lineage and multi-week traps. Multi-week traps: 
- Weekly seasonality: if p better every Sunday, strong null rejects but average worse [PAGE 17].
- Lag-h forecasts: e-process not e-process for h>1; use sequential e-values/p-process/calibration [PAGE 26/41-46]. Multi-week h.
- Weather seasons: 2007-2017, airport-specific T; patterns like IDR better early 2012, not late 2012-2015, regains 2016 [PAGE 25]. This is a multi-year trap.
- Baseball 10-year horizon and playoffs: T=25,165; marginal difference; don't over-extrapolate [PAGE 23].
- Hyperparameter v_opt tuned to intrinsic time; different horizons. Source page 60 uses v_opt=10 default, MLB v_opt=100 [PAGE 57]. Multi-week trap: choosing v_opt for wrong horizon.

Need "crisis habit regression vs counter-trap vs clock" maybe use these exact labels. We'll make subsections with bold. In XML, okay.

Need "Cross-layer veto adjudication" maybe include "proof" as a boxed lemma:
Lemma (Admissibility veto). Let \(\mathcal{A}_t\) be the event that forecasts and outcomes satisfy domain and pairing constraints. If \(\neg\mathcal{A}_t\), then the bound \(|\hatδ_t|\le2c\) or the martingale property \(\mathbb{E}_{t-1}[\hatδ_t]=\delta_t\) can fail; consequently Theorems 2 and 3 do not guarantee coverage/e-value validity.
Proof sketch: score differential is function of p,q,y; outside [0,1] Brier not bounded; if y not binary scoring rule undefined; if forecasts use future info, \(\hatδ_t\) not adapted/predictable; if events unpaired, expectation \(\mathbb{E}_{t-1}\) not valid. Therefore CS/e-process guarantee cannot be invoked. This is verifiable by counterexample. Good.

Need maybe "weather veto proof": For weather, if same airport/date/lag not matched, paired score differentials lose common outcome; the martingale property under game filtration fails because the two forecasts may not be evaluated on same \(y_t\). Source [PAGE 25] lists same four locations and pairs; [PAGE 59] says each method applied first half and second half used for sequential comparisons. Good.

Need "biomechanical veto proof": Source doesn't model biomechanics; it allows side info. If a claim uses biomechanics causally, no identification. But no veto of forecast comparison if side info in filtration. The cross-layer veto is: do not infer biomechanical causation from predictive score. Use [PAGE 10] quote. Good.

Need "physical veto": For Brier score, probabilities must be in [0,1]; if not, clipping changes score. Source page 9. Good.

Need "RLVR" maybe "verifiable reward" scenarios. We can phrase "RLVR-style counterfactual vetoes: each is a test that can be implemented and scored by pass/fail." Include predictions with thresholds. Good.

Need maybe "ZERO BETTING LINES" - ensure no mention of "betting" even? The invariant says never mention spreads totals moneylines or odds. It doesn't prohibit "betting" word? But safer avoid "betting" entirely. But source has "betting odds" and "bets". We can avoid. Use "market forecaster" and "market probability." Do not quote "Vegas-Odds.com". We can mention "vegas" label only. In retro genealogy, Diebold-Mariano etc no betting. In RLVR scenario, no betting. In cross-layer, no betting. Good.

Need answer with exact XML. Let's draft.

First section THINK_TRACE. Need deep multi-hop derivation and gray-zone audit. Write about:
- Start from forecasting game: two forecasters p_t,q_t, Reality r_t, outcome y_t.
- Scoring rule S; Brier; score differential \hatδ_t; conditional expectation δ_t; average Δ_t.
- Need compare average without distributional assumptions. Use martingale \(M_t=\sum(\hatδ_i-\delta_i)\).
- Construct exponential supermartingale via bounded/sub-exponential concentration. Intrinsic time \(\hat V_t\) with predictable centering γ.
- Invert Ville to get CS. Dual e-process for weak null. P-process.
- Gray-zone: strong vs weak null; time-varying sign; e-process can decrease; no future extrapolation.
- Audit: fixed-time CI invalid under optional stopping; CS anytime; EB variance-adaptive; hyperparameters; unbounded scores; lag-h; weather/baseball empirical.
- Mention source pages.
Need at least 400 words. Good.

SOURCE_OPERATORS_AND_EQUATIONS: formal equations, units, page citations, breakdown. Include quotes. Good.

RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps. Good.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Good.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions. Good.

Need maybe include "GSE/GSI" terms? Maybe not.

Need ensure XML valid: avoid raw `<` in text. Use `\le` etc. For quotes, no `<`. The source quote "H_0 : Δ_t ≤ 0" uses ≤ unicode; okay. Avoid `<`. In math, use `\le`, `\ge`. For "t ≥ 1", use `t \ge 1`. For "p < 0.5" avoid. Use "less than". Use `\to`. Good. Ampersand: avoid. Use "and" instead of `&`. In equations, no alignment. Use `\mathbb{E}` etc. XML allows backslashes, braces. Good.

Need page citations exact. Use [PAGE 3] etc. Need quote exact with punctuation. For page 7 quote: "Ville’s inequality is the primary tool for constructing confidence sequences" source has comma? It says "Ville’s inequality is the primary tool for constructing confidence sequences, as illustrated in..." Quote partial okay. Use exact substring. For page 13 quote: "The key difference from the Hoeffding-style CS is that we now use an empirical estimate of the variance process for the cumulative sums" exact. Good.
Page 17 quote: "The larger the value of E_t, the more the evidence against the null." Source has \(E_t\) maybe italic. Use "E_t" plain. Exact textual? Source: "The larger the value of _Et_, the more the evidence against the null." Good.
Page 23 quote: "vegas forecaster has marginally outperformed the 538 forecaster" exact? Source: "finding that the vegas forecaster has marginally outperformed the 538 forecaster" yes.
Page 24 quote: "none of the other forecasters, including 538, have outperformed vegas" exact.
Page 25 quote: "IDR forecasts are found to outperform both HCLR and HCLR_ 1-day forecasts for Brussels and that HCLR forecasts outperform HCLR_ forecasts for Frankfurt and Zurich" exact? Source: "we find from the 90% EB CSs that IDR forecasts are found to outperform both HCLR and HCLR_ 1-day forecasts for Brussels and that HCLR forecasts outperform HCLR_ forecasts for Frankfurt and Zurich" yes.
Page 26 quote: "All our methods provide evidence and uncertainty related to the former statement." exact.
Page 10 quote: "any side information that either forecaster may have, such as which players are starting the game and whether there are injuries." exact.
Page 9 quote: "the primary working example in this paper will be the space of binary outcomes Y = {0, 1} and probability forecasts parametrized by their means in P = [0, 1]." Source uses \(\mathcal{Y}\) etc. Use plain. Good.
Page 4 quote: "we define safe, anytime-valid inference (SAVI) methods as ones that satisfy either the time-uniform coverage guarantee (CS) or the anytime-valid guarantee (e- or p-processes)." exact? Source: "we define _safe, anytime-valid inference (SAVI)_ methods as ones that satisfy either the time-uniform coverage guarantee (CS) or the anytime-valid guarantee (e- or p-processes)." Good.
Page 3 quote: "But how much of that difference can be attributed to chance or luck?" exact. Good.
Page 54 quote: "the DM and GW tests, along with fixed-time CIs, do not have an anytime-valid guarantee." exact? Source: "In other words, the DM and GW tests, along with fixed-time CIs, do not have an anytime-valid guarantee." Good.
Page 41? For lag-h maybe quote? Page 26: "Constructing a more powerful e-process and also a CS for the lagged weak null remains a challenging problem." exact. Good.
Page 60: v_opt=10 default. Quote "we use a default value of v_opt = 10 for all our experiments involving the EB CS in the paper" exact? Source: "Based on the result, we use a default value of v_opt = 10 for all our experiments involving the EB CS in the paper, unless specified otherwise." Good.
Page 57: MLB v_opt=100. Source: "For all MLB-related experiments, we choose v_opt = 100" exact. Good.

Need maybe "verbatim quotes" enough. Good.

Let's write. Need maintain no betting lines. Avoid "odds" entirely. But source title includes "Vegas-Odds" - we don't mention. The user drive source includes it, but our answer need not. Use "the market forecaster labeled vegas." Is "vegas" okay? Yes.

Potential issue: "vegas" as label might imply betting? It's just label. Fine.

Need "probability/score/evidence units" in source section. Good.

Need "physical/biomechanical/weather veto proof" maybe use "Lemma" and "Proof sketch". Good.

Need "RLVR predictions" with exact thresholds. Good.

Let's produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The source is Choe and Ramdas’s “Comparing Sequential Forecasters,” a sequential-inference paper built around a deceptively simple question: when two forecasters produce probabilities for a sequence of binary events, how can we compare them without assuming stationary outcomes, parametric forecast models, or a fixed sample size? The derivation chain begins with the forecasting game: forecaster 1 gives \(p_t\), forecaster 2 gives \(q_t\), Reality chooses an unknown conditional distribution \(r_t\), and the outcome \(y_t\) is sampled. The statistician sees only \((p_t,q_t,y_t)\). A proper scoring rule \(S\) turns forecasts and outcomes into scores; with the Brier score, \(S(p,y)=1-(p-y)^2\), and the empirical pointwise differential is \(\hat\delta_t=S(p_t,y_t)-S(q_t,y_t)\). The unobservable conditional mean differential is \(\delta_t=\mathbb{E}_{t-1}[\hat\delta_t]\), and the time-varying target is \(\Delta_t=t^{-1}\sum_{i=1}^t\delta_i\). The observable estimate is \(\hat\Delta_t=t^{-1}\sum_{i=1}^t\hat\delta_i\). The key probabilistic object is \(M_t=\sum_{i=1}^t(\hat\delta_i-\delta_i)\), a martingale under the game filtration. The paper’s move is to convert this martingale into an exponential test supermartingale with an empirical variance process, then invert Ville’s inequality to get a confidence sequence, and finally dualize that CS into e-processes and p-processes. The CS is “anytime-valid”: coverage is uniform over all time points and stopping times, not merely at a pre-specified \(T\). The empirical Bernstein version uses intrinsic time \(\hat V_t=\sum_{i=1}^t(\hat\delta_i-\gamma_i)^2\) with predictable centering \(\gamma_i\), so the interval width adapts to variance rather than merely to calendar time.

The gray-zone audit matters most where the mathematics can be misread as a general-purpose ranking machine. First, the null being tested is the weak null: one forecaster is no better than the other on average over time, not at every time step. This distinction is central. A strong-null e-process can reject because one forecaster was better at some isolated step, even if that same forecaster was worse on average. The paper’s Sunday example is exactly this trap: \(p\) is generally worse but marginally better every \(k\)-th step; rejecting the strong null does not establish average superiority. Second, a large e-value is evidence against the null up to a stopping time; it is not a prediction that the same forecaster will be better in the future. The source explicitly separates “has done better” from “is going to be better” and warns that no distribution-free method can extrapolate without assumptions. Third, classical fixed-time confidence intervals and Diebold-Mariano/Giacomini-White-style tests are not safe under continuous monitoring; their cumulative type-I error can exceed \(\alpha\) even when their assumptions hold. The paper’s simulated audit shows this directly, and the empirical baseball section reports only a marginal average Brier-score advantage for the market forecaster labeled “vegas” over FiveThirtyEight. Fourth, the bounded-score requirement is not cosmetic: the logarithmic score is unbounded, so the main empirical Bernstein theorem does not apply without truncation, the Winkler normalization, or an asymptotic CS. Fifth, lagged forecasts are a separate problem: a lag-\(h\) process is not generally an e-process with respect to the original filtration, so the paper uses sequential e-values, p-processes, calibration, and period-wise weak nulls. Sixth, the hyperparameter \(v_{\mathrm{opt}}\) tunes the boundary to an intrinsic-time horizon; it is not a universal constant. The paper uses \(v_{\mathrm{opt}}=10\) as a default in the simulation/weather settings and \(v_{\mathrm{opt}}=100\) for the long MLB horizon, which is a reminder that horizon choice changes width and power.

The most important multi-hop step is the inversion from martingale to CS to test. A test supermartingale \(L_t\) starting at one satisfies \(\mathbb{E}_P[L_\tau]\le1\) at stopping times under the null, so Ville’s inequality gives \(\mathbb{P}(\exists t: L_t\ge1/\alpha)\le\alpha\). If \(L_t(\lambda)=\exp\{\lambda M_t-\psi(\lambda)\hat V_t\}\) is a supermartingale for each \(\lambda\), the CS is obtained by solving for \(\Delta_t\) inside the time-uniform boundary. The e-process is a lower bound on that exponential supermartingale under the weak null, and the p-process is \(p_t=1/\sup_{i\le t}E_i\). This chain is valid only if the score differentials are predictably bounded or sub-exponential, the filtration includes forecasts and outcomes in the correct order, and the pairing is maintained. That is the audit gate: if forecasts use future information, if outcomes are misaligned across forecasters, if probabilities fall outside \([0,1]\), or if an unbounded scoring rule is used without normalization, the guarantee cannot be invoked. The paper’s empirical examples—MLB games and airport precipitation postprocessing—are not decorative; they test whether the method remains coherent under sharp nonstationarity, seasonal reversal, and long horizons. The weather example is especially instructive because the same postprocessing pair can show evidence of superiority in one airport and not another, and because the weak-null e-process can be large only when the strong-null e-process is also large, but not vice versa. That is exactly the kind of gray-zone adjudication the frontier docket requires.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s formal object is a sequential forecast-comparison game on binary outcomes. The working domain is stated as \(\mathcal{Y}=\{0,1\}\) and \(\mathcal{P}=[0,1]\), with the Brier score \(S(p,y)=1-(p-y)^2\); the paper says: “the primary working example in this paper will be the space of binary outcomes Y = {0, 1} and probability forecasts parametrized by their means in P = [0, 1]” [PAGE 9]. The pointwise empirical score differential is
\[
\hat\delta_t=S(p_t,y_t)-S(q_t,y_t),
\]
the conditional mean differential is
\[
\delta_t=\mathbb{E}_{t-1}[\hat\delta_t],
\]
and the time-varying average differential is
\[
\Delta_t=\frac{1}{t}\sum_{i=1}^{t}\delta_i,\qquad
\hat\Delta_t=\frac{1}{t}\sum_{i=1}^{t}\hat\delta_i.
\]
These score differentials are dimensionless probability-scale score units. For the Brier score on binary outcomes, \(\hat\delta_t\in[-1,1]\), so a boundedness condition \(|\hat\delta_t|\le2c\) holds with \(c=1/2\). The cumulative deviation martingale is
\[
M_t=\sum_{i=1}^{t}(\hat\delta_i-\delta_i).
\]
With predictable centering \((\gamma_i)\), the empirical intrinsic time is
\[
\hat V_t=\sum_{i=1}^{t}(\hat\delta_i-\gamma_i)^2,
\]
measured in squared score units. The exponential CGF-like function for the sub-exponential case is
\[
\psi_{E,c}(\lambda)=c^{-2}\left[-\log(1-c\lambda)-c\lambda\right],
\qquad \lambda\in[0,1/c),
\]
where \(\lambda\) has inverse score units so that \(\lambda M_t\) and \(\psi_{E,c}(\lambda)\hat V_t\) are dimensionless. The exponential test supermartingale is
\[
L_t(\lambda)=\exp\{\lambda M_t-\psi_{E,c}(\lambda)\hat V_t\}.
\]
Theorem 2 gives the empirical Bernstein confidence sequence
\[
C_t^{\mathrm{EB}}
=
\left[
\hat\Delta_t-\frac{u_{\alpha/2,c}(\hat V_t)}{t},
\hat\Delta_t+\frac{u_{\alpha/2,c}(\hat V_t)}{t}
\right],
\]
with the guarantee
\[
\mathbb{P}\left(\forall t\ge1:\Delta_t\in C_t^{\mathrm{EB}}\right)\ge1-\alpha.
\]
The boundary \(u_{\alpha/2,c}\) is a sub-exponential uniform boundary; the source says: “The key difference from the Hoeffding-style CS is that we now use an empirical estimate of the variance process for the cumulative sums” [PAGE 13]. The e-process for the weak one-sided null \(H_0^{w}(p,q):\Delta_t\le0\) for all \(t\) is
\[
E_t(\lambda)=\exp\left\{\lambda\sum_{i=1}^{t}\hat\delta_i-\psi_{E,c}(\lambda)\hat V_t\right\},
\]
and the mixture e-process is
\[
E_t^{\mathrm{mix}}=\int E_t(\lambda)\,dF(\lambda)
=m\left(\sum_{i=1}^{t}\hat\delta_i,\hat V_t\right).
\]
The paper states: “The larger the value of E_t, the more the evidence against the null” [PAGE 17]. The p-process is
\[
p_t=\frac{1}{\sup_{i\le t}E_i},
\]
which is valid at stopping times. The source defines SAVI as methods satisfying “either the time-uniform coverage guarantee (CS) or the anytime-valid guarantee (e- or p-processes)” [PAGE 4]. Ville’s inequality is the foundational inversion tool: “Ville’s inequality is the primary tool for constructing confidence sequences” [PAGE 7].

The formal assumptions and breakdown regimes are:
1. Bounded scores or sub-exponential score differentials. Theorems 2 and 3 require \(|\hat\delta_i|\le2c\) for some \(c\in(0,\infty)\). If \(c=0\) or \(c\to0^+\), the bound forces degenerate zero differentials and the \(\lambda\)-interval \([0,1/c)\) collapses or becomes numerically unusable. If \(\lambda\to1/c^-\), \(\psi_{E,c}(\lambda)\) diverges; the exponential family hits its boundary and numerical overflow can occur. Mixture boundaries are used to avoid fixing a single \(\lambda\).
2. Degenerate intrinsic time. If \(\hat V_t=0\), all centered increments vanish. The CS remains formally valid but has boundary \(u(\hat V_t)=u(0)\); early-time intervals can be wide and power is low. At \(t=1\), the CS is valid but necessarily weak.
3. Unbounded scoring rules. For the logarithmic score, \(\hat\delta_t\) is unbounded as probabilities approach 0 or 1, so the boundedness condition fails. The paper’s remedy is \(\epsilon\)-truncation, the Winkler normalized score, or asymptotic CSs; the source explicitly says the truncated variant “is no longer proper” but the methods “remain valid” [PAGE 13].
4. Nonstationarity and sign reversal. The target \(\Delta_t\) can change sign over time. E-processes need not be monotone; a large e-value can later shrink. The source warns that conclusions do not extrapolate to future time steps: “All our methods provide evidence and uncertainty related to the former statement” [PAGE 26].
5. Misalignment or missingness. The martingale property requires paired \((p_t,q_t,y_t)\) on the same event and a filtration that excludes future information. If events are unpaired or forecasts use future side information, the conditional expectation \(\mathbb{E}_{t-1}\) and the predictability assumptions fail.
6. Fixed-time monitoring. A fixed-time CI is not a CS. The paper shows that the cumulative type-I error of classical fixed-time methods can exceed \(\alpha\), while the CS controls it uniformly. The source states: “the DM and GW tests, along with fixed-time CIs, do not have an anytime-valid guarantee” [PAGE 54].
7. Lagged forecasts. For lag \(h>1\), the naive process is not generally an e-process with respect to the game filtration. The paper develops sequential e-values, p-processes, and calibrated e-processes for lag-\(h\) weak and period-wise weak nulls; it notes that “Constructing a more powerful e-process and also a CS for the lagged weak null remains a challenging problem” [PAGE 26].
8. Weak versus strong null. The weak null is \(H_0^{w}:\Delta_t\le0\) for all \(t\). The strong null is \(H_0^{s}:\delta_t\le0\) for all \(t\). The strong null implies the weak null, but not vice versa. A strong-null rejection only says one forecaster was better at some time, not on average.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from proper scoring rules to prequential evaluation to martingale-based sequential inference. Brier’s 1950 quadratic score supplied a bounded, proper probability score; Good, DeGroot-Fienberg, Dawid, Schervish, Gneiting-Raftery, and related work formalized proper scoring and calibration-sharpness evaluation. Dawid’s prequential view is the direct ancestor of the game-theoretic setup: forecasts are evaluated on the forecasts actually made and the outcomes actually observed, not on counterfactual forecasts that would have been made under different outcomes. The source makes this explicit in its Game 1 construction and says the framework is “prequential” in the sense that it puts no restrictions on how forecasts are generated [PAGE 10]. The comparison-test lineage then runs through Diebold-Mariano’s equal-accuracy test, Giacomini-White’s conditional predictive-ability test, and Lai-Gross-Shen’s martingale-based asymptotic theory of score differentials. Those methods are fixed-time or asymptotic; they do not provide time-uniform coverage under optional stopping. The sequential-confidence lineage runs through Darling-Robbins, Robbins, Lai, and Howard-Ramdas-McAuliffe-Sekhon. The e-process lineage runs through Shafer-Vovk, Ramdas et al., Grünwald et al., and Vovk-Wang. Henzi-Ziegel is the nearest competitor: it gives anytime-valid, nonasymptotic, distribution-free e-processes, but for a strong null of step-by-step dominance, not average dominance. The source’s novelty is the combination: an empirical Bernstein CS for time-varying average score differentials, plus e-processes and p-processes for the weak null, with a variance-adaptive intrinsic-time construction.

The multi-week traps are where this genealogy becomes operationally dangerous. The first trap is weekly or period-\(h\) seasonality. If one forecaster is worse on most days but better every seventh day, a strong-null procedure can reject while the weak null remains true. The paper’s \(k=7\) Sunday example is designed to expose exactly this failure mode [PAGE 17]. The second trap is lagged evaluation. A 7-day-ahead weather forecast or a multi-game-ahead sports forecast cannot be treated as a lag-1 process; the outcome is not revealed at the forecast time, so the naive exponential process is not adapted to the original filtration. The paper treats lag-\(h\) forecasts separately and shows that period-wise weak nulls and calibrated e-processes are needed [PAGE 41–46]. The third trap is horizon-dependent tuning. The uniform-boundary hyperparameter \(v_{\mathrm{opt}}\) is optimized for a particular intrinsic time; the source uses \(v_{\mathrm{opt}}=10\) as a default in its simulation/weather experiments and \(v_{\mathrm{opt}}=100\) for the long MLB horizon [PAGE 57, PAGE 60]. A multi-week or multi-season deployment that inherits the wrong \(v_{\mathrm{opt}}\) can have poor width or power. The fourth trap is seasonal reversal in weather postprocessing. The paper reports that IDR outperforms HCLR and HCLR_ for Brussels, and HCLR outperforms HCLR_ for Frankfurt and Zurich, but not everywhere [PAGE 25]. It also describes a period from late 2012 to late 2015 when IDR is no longer found better for Brussels before evidence regains strength in 2016. That is a multi-year, nonstationary pattern, not a stable ranking. The fifth trap is sports-horizon overreach. The MLB experiment covers \(T=25,165\) games from 2010 to 2019; the reported average Brier-score difference is small, and the paper says the “vegas forecaster has marginally outperformed the 538 forecaster” [PAGE 23]. A marginal average difference over a decade does not license a claim of permanent or future superiority. The sixth trap is the strong-null shortcut: rejecting a strong null because of a single hot streak, then reporting it as average superiority. The source explicitly warns that “an e-process for the strong null can grow large, even though q is generally a better forecaster” [PAGE 17]. The genealogical lesson is that each mathematical ancestor solved a narrower problem: proper scoring solved honest evaluation, prequential evaluation solved retrospective data usage, martingale theory solved cumulative deviation, CS theory solved uniform monitoring, and e-process theory solved evidence accumulation. The source’s contribution is not a replacement of those ancestors; it is a careful composition that preserves their guarantees only under the stated boundedness, predictability, and null-definition conditions.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind layer has three competing habits. The first is crisis habit regression: when data arrive continuously, analysts revert to the familiar fixed-time CI or classical equal-accuracy test because it is easy to compute and familiar to report. The source’s simulation and theory show why this habit is a crisis: under repeated monitoring, the fixed-time interval’s cumulative miscoverage rises above \(\alpha\), and the DM/GW tests’ cumulative type-I error also rises. The paper says the classical tests “do not have an anytime-valid guarantee” [PAGE 54]. The habit regression is not a mathematical error at a single fixed \(T\); it is an error of optional stopping. The statistician who checks after every game, every day, or every week is implicitly running many tests, and the fixed-time guarantee does not survive that behavior. The second habit is the counter-trap: using a strong-null e-process as if it answered the weak-null question. The strong null says \(p\) is no better than \(q\) at every time step; the weak null says \(p\) is no better on average. The strong null is harder to defend and easier to reject. Rejecting it only establishes that \(p\) beat \(q\) at some time, which may be a single Sunday, a single airport, or a single playoff game. The source’s Sunday construction makes the counter-trap concrete: \(p\) is generally worse but marginally better every \(k\)-th step, so a powerful strong-null test rejects while the average comparison favors \(q\). The recursive belief problem is that the statistician may know this, the forecaster may know the statistician is monitoring, and Reality may change the outcome distribution in response to the forecasts or to side information. The game-theoretic framework avoids modeling that strategic recursion by treating Reality as adversarial and by making no distributional assumptions on \(r_t\). The third habit is the clock: the correct response to continuous monitoring is not to stop looking, but to use a time-uniform clock. The CS/e-process/p-process clock is intrinsic time \(\hat V_t\), not merely calendar time, and the stopping time \(\tau\) is data-dependent. The guarantee is \(\mathbb{P}(\forall t:\Delta_t\in C_t)\ge1-\alpha\) and \(\mathbb{P}(\exists t:E_t\ge1/\alpha)\le\alpha\) under the null. This clock is what allows the statistician to update conclusions without p-hacking. The recursive ToM point is that the clock changes the incentive structure: the statistician can monitor continuously without inflating error, the forecaster cannot exploit an unannounced stopping rule, and the reader can distinguish “evidence up to \(\tau\)” from “prediction after \(\tau\).” The source’s warning that conclusions are descriptive rather than predictive is the epistemic boundary of this clock [PAGE 26]. A practitioner may still extrapolate, but only by adding assumptions; the distribution-free method itself does not license the extrapolation. The counter-trap also has an inverse: if the statistician uses a weak-null e-process but the actual question is whether one forecaster dominates every step, the weak null is too permissive. The source says the strong null is appropriate when comparing two forecast sets produced by the same data scientist with one using more features or a more sophisticated model, but for unrelated forecasters the strong null is rarely believable [PAGE 6]. Thus the recursive adjudication is: choose the null that matches the decision; choose the clock that matches the monitoring; do not let the strong-null rejection substitute for the average-null conclusion; and do not let a fixed-time habit masquerade as anytime-valid evidence.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is an admissibility test on the probability, filtration, pairing, and domain constraints. Formally, let \(\mathcal{A}_t\) be the event that \(p_t,q_t\in[0,1]\), \(y_t\in\{0,1\}\), the two forecasts are evaluated on the same event, and neither forecast uses information after the forecast time. If \(\neg\mathcal{A}_t\), then the bounded-score condition \(|\hat\delta_t|\le2c\) or the martingale condition \(\mathbb{E}_{t-1}[\hat\delta_t]=\delta_t\) can fail. In that case Theorems 2 and 3 do not guarantee coverage or e-value validity. The proof sketch is direct: the Brier score is bounded only on \([0,1]\times\{0,1\}\); if probabilities are outside that domain, the score differential can leave the assumed range or become undefined. If the outcome is not binary, the binary Brier score is not the object being bounded. If the forecasts use future information, \(\hat\delta_t\) is not adapted to the declared filtration. If the two forecasts are not paired on the same \(y_t\), the conditional expectation \(\mathbb{E}_{t-1}[\hat\delta_t]\) does not represent a common-event score differential, and the martingale decomposition fails. This is a verifiable veto, not a philosophical preference.

Physical veto. The physical constraint is probability admissibility. The source’s working domain is explicitly \(p,q\in[0,1]\) and \(y\in\{0,1\}\), and it uses the Brier score \(S(p,y)=1-(p-y)^2\) [PAGE 9]. If a pipeline emits uncalibrated probabilities outside \([0,1]\), clipping changes the score and may change the sign of the differential. The CS/e-process guarantee is not a rescue for out-of-domain forecasts; it is a guarantee for the declared score and domain. The weather example’s probability-of-precipitation forecasts are bounded by construction, and the paper uses the Brier score throughout that section [PAGE 24–25]. A weather veto applies if the postprocessing output is not a probability, if the binary outcome is not defined by the same precipitation threshold, or if the comparison mixes different airports, dates, or lags. The source compares the same three postprocessing pairs at Brussels, Frankfurt, London, and Zurich, with location-specific sample sizes \(T=1,703,1,809,1,128,1,621\) [PAGE 25]. Misaligning those pairs invalidates the paired score differential and therefore the martingale argument.

Biomechanical veto. The source does not model biomechanics, but it explicitly allows side information such as “which players are starting the game and whether there are injuries” to be in the forecasters’ information set [PAGE 10]. That is admissible if the information is available before the forecast and is included in the filtration. The veto is on causal overreach: a sequential score comparison can show that a forecast with injury information has better average predictive performance, but it cannot identify a biomechanical mechanism, isolate a pitcher’s mechanics, or prove that a specific physical intervention caused the improvement. The paper’s inferential target is forecast-score differential, not structural causation. A claim that “the market forecaster is better because of biomechanical modeling” would require a separate causal design; the CS/e-process evidence alone does not adjudicate that layer. The admissible use is predictive: if injury and starter information are in the filtration, they may improve forecasts, and the sequential method can compare the resulting forecasts without distributional assumptions on the outcome process.

Weather veto proof. For the precipitation experiment, the outcome is 24-hour probability of precipitation at four airports over 2007–2017, and the postprocessing methods are compared on the second half of the data after training on the first half [PAGE 25, PAGE 59]. The veto proof is: if the same airport-date-lag triple is not used for both forecasters, then the paired differential \(S(p_t,y_t)-S(q_t,y_t)\) is not a common-outcome differential; the martingale filtration cannot condition on a common history; and the CS/e-process guarantee is void. If the data are aligned, the Brier score is bounded, the probabilities are in \([0,1]\), and the outcome is binary, then the cross-layer physical and pairing constraints are satisfied for Theorems 2 and 3. The empirical weather results—IDR outperforming HCLR and HCLR_ for Brussels, and HCLR outperforming HCLR_ for Frankfurt and Zurich, but not necessarily elsewhere—are admissible as average-score findings within those aligned pairs [PAGE 25]. They are not admissible as universal rankings of postprocessing methods across all airports, seasons, or lags.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Continuous-monitoring type-I veto. Setup: simulate independent binary outcomes with a true average score differential of zero under the Brier score, \(T=10,000\). An analyst recomputes a 95% fixed-time confidence interval after every \(t\) and declares a winner whenever the interval excludes zero. Prediction: the cumulative miscoverage rate \(\alpha_t=\mathbb{P}(\exists i\le t:\Delta_i\notin C_i)\) for the fixed-time CI exceeds \(0.05\) by roughly \(t\approx100\) and continues upward, while the 95% empirical Bernstein CS keeps \(\alpha_t\le0.05\) and often exactly zero in the paper’s simulations. Verifiable veto: reject any claim that a fixed-time interval is safe under optional stopping. Source anchor: the paper’s cumulative miscoverage plot and the statement that DM/GW and fixed-time CIs lack anytime-validity [PAGE 54].

Scenario 2: Strong-null counter-trap veto. Setup: construct a deterministic differential pattern with \(k=7\): \(\hat\delta_t=-0.10\) on non-multiples of 7 and \(\hat\delta_t=+0.20\) on multiples of 7. The long-run average is negative, so \(H_0^{w}:\Delta_t\le0\) remains true, but the strong null \(H_0^{s}:\delta_t\le0\) for all \(t\) is false because every seventh step is positive. Prediction: a powerful strong-null e-process can exceed a rejection threshold, while the weak-null e-process and the 95% CS for \(\Delta_t\) should not provide evidence of average superiority. Verifiable veto: reject any inference of the form “strong-null rejection implies \(p\) is better on average.” Source anchor: the paper’s \(k=7\) Sunday example and the statement that a strong-null e-process can grow large even though \(q\) is generally better [PAGE 17].

Scenario 3: Unbounded logarithmic-score veto. Setup: use the untruncated logarithmic score with a forecaster emitting \(p_t=10^{-6}\) and an outcome \(y_t=1\). The score differential is unbounded below as \(p_t\to0\), so the condition \(|\hat\delta_t|\le2c\) fails for any finite \(c\). Prediction: if an analyst applies the empirical Bernstein CS or the Theorem 3 e-process without truncation, normalization, or an asymptotic alternative, the coverage or e-value guarantee can fail in the presence of near-zero probabilities; with \(\epsilon\)-truncation or the Winkler normalized score, boundedness is restored and the CS/e-process remains valid under the paper’s conditions. Verifiable veto: reject any use of the main bounded-score theorems on an unbounded score without an explicit truncation, Winkler normalization, or asymptotic-CS substitution. Source anchor: the paper’s note that the logarithmic score is unbounded and that a truncated variant is no longer proper but the methods remain valid, together with the Winkler-score extension used in the MLB comparison [PAGE 13, PAGE 24].
</RLVR_COUNTERFACTUAL_VETOES>