---
source: "arxiv_2504.02019v2.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 20
model: deepseek/deepseek-v4.1-flash-1017
words: 7134
---

<NATIVE_REASONING>
We need answer to user. Need infer task? They provided DRIVE SOURCE, pages, source text, and strict invariants. Likely want us to analyze this paper using required XML sections, >=1000 words, formal equations, page citations, no betting lines (irrelevant), no toy equations. Need produce exact XML sections. Need satisfy: THINK_TRACE >=400 words deep multi-hop derivation & gray-zone audit. SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX units page citations breakdown. RETROCAUSAL_GENEALOGY historical/scientific lineage & multi-week traps. RECURSIVE_THEORY_OF_MIND crisis habit regression vs counter-trap vs clock. CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions. This is weird: source is ML paper, but sections mention crisis habit regression, physical/biomechanical/weather veto, RLVR. Need adapt: no betting, no sports maybe. Need use source as drive. We must analyze paper's propositions, algorithms, empirical claims. Cross-layer veto adjudication: physical/biomechanical/weather veto proof? Since no such layers in paper, must state not applicable and adjudicate with equivalent computational/physical resource constraints? Need be careful: "Physical/biomechanical/weather veto proof." We need prove veto? Could say no biomechanical/weather data in source; cross-layer vetoes are non-identifiable and thus vetoed. But "proof" maybe formal show no evidence. Need map to source's computational layer. Could discuss physical constraints: budget T number of ν evaluations; model inference bottleneck [PAGE 3]. Weather/biomechanical absent; cannot invoke. Need not fabricate.

Need include citations exact [PAGE N] and verbatim quotes. Need quote exact text. We have pages. Need use formal LaTeX equations with units, assumptions, exact singularity/breakdown regimes. Need cite page markers. Need maybe mention Proposition 5.2, Theorem 4.1, CMCS. Need equations with page citations. Need state units: Shapley value units are value function worth units (e.g., accuracy or R^2 or prediction value), variance units squared worth, MSE units squared worth, ρ inclusion-exclusion error in worth units, probabilities dimensionless. Budget T in calls/evaluations (count). M rounds dimensionless. Budget efficiency n/(n+1) observations per call. Sample variance etc.

Need maybe do multi-hop derivation:
- Cooperative game: ν: P(N)->R, ν(∅)=0 [PAGE 3].
- Shapley value Eq (1): weighted marginal contributions.
- Approx-all MSE Eq(2).
- top-k eligible Eq(3), ψbin Eq(4), ψrat Eq(5), inclusion-exclusion Eq(6)(7), PAC Eq(8).
- Equifrequent sampler definition Eq(9), estimates Eq(10), expected MSE Eq(11).
- Theorem 4.1 lower bound with σ_{i,j}^2 = V[∆i(S_i^m)-∆j(S_j^m)].
- Decomposition Eq(12): σ_{i,j}^2 = σ_i^2 + σ_j^2 -2Cov. To minimize variance of difference, maximize covariance. So antithetic sampling.
- CMCS extended marginal contribution Def 5.1: ∆'_i(S)=ν(S∪{i})−ν(S\{i}). Eq(13), Eq(14) uses n+1 calls for n estimates, efficiency n/(n+1). Sampling distribution Eq(15) P(S)=1/((n+1) binom(n,|S|)). Proposition 5.2 representation. Algorithm 1, M=floor(T/(n+1)). MSE Eq(16).
- Proposition 5.3 covariance formula. Example simple game covariance = 1/(n+1)-1/n^2 >0 for n≥2 (page 7).
- Greedy CMCS selection: pair prob Eq(17) \hat p_{i,j}=Φ(√M_{i,j} δ̂_{i,j}/σ̂_{i,j})? Wait paper Eq(17) on page 8: \hat p_{i,j} := Φ( sqrt(M_{i,j}) \hatδ_{i,j} / \hatσ_{i,j} ) maybe sign? Need exact from text: "ˆpi,j := Φ p Mi,j ˆδi,j ˆσi,j !" It is unclear sqrt M times δ / sigma. In Appendix A.3: P(φ_i < φ_j)=Φ(√M (ˆφ_j−ˆφ_i)/σ_{i,j}). Since δ̂_{i,j}= mean(∆'_j−∆'_i) = φ_j estimate - φ_i estimate? If \hatδ_{i,j}:=\frac{1}{M_{i,j}}\sum [∆'_j−∆'_i] = \hatφ_j-\hatφ_i. Then Φ(√M δ/σ) gives P(φ_i<φ_j). Yes Eq(17) positive δ. In Algorithm 3 line 6: \hat p_{i,j} ← Φ(√M (-Σ_{i,j}) / sqrt(σ̂²))? Wait Σ is sum (∆i-∆j), so -Σ/sqrt = (∆j−∆i). The paper maybe typo? Need not dwell. Use exact.

- Greedy selection probability Eq(18) = (p-pmin)/(pmax-pmin). Edge case if pmax=pmin, select all players [PAGE 16-17]. Breakdown: denominator zero; handled by all pairs equally probable -> select all players. Need mention.

- Warm-up Mmin; if M_{i,j} >= Mmin all pairs? [PAGE 17]. Need mention.

Empirical results:
- Figure 2: independent -> same length -> identical -> CMCS improves error, sample reuse almost doubles budget efficiency; greedy halves at high T [PAGE 10].
- Figure 3 MSE vs inclusion-exclusion: best approximate-all not necessarily best top-k; CMCS less favorable MSE but competitive top-k; CMCS significantly outperforms ApproShapley in ρ despite similar budget [PAGE 10].
- Figure 4/5 local/global; Greedy CMCS stable; CMCS@K best PAC Table1 [PAGE 11-12].
Need cite quotes.

Need answer must include "ZERO BETTING LINES" so do not mention sports betting. Fine.

Need "RECURSIVE_THEORY_OF_MIND Crisis habit regression vs counter-trap vs clock." This section likely from generic prompt for sports betting prediction; here need adapt: "crisis habit regression" = fallback to approximate-all baseline? counter-trap = top-k tailored algorithms? clock = budget T. Need address recursive theory of mind: how practitioners/algorithm designers model each other? Perhaps "crisis habit regression" as reverting to MSE-optimized ApproShapley under uncertainty; "counter-trap" as choosing algorithm based on wrong metric; "clock" as fixed budget and PAC stopping. Need discuss multi-agent: algorithm A, evaluator, adversary? We can frame "designer's theory of mind" about practitioners. We need satisfy XML section.

Need "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." Since source has no physical/biomechanical/weather variables. Need provide proof of absence and veto: The paper's cross-layer is computational budget/evaluation access. We can formalize: Let physical/biomechanical/weather evidence E_p. Source provides no operator mapping to E_p. Any claim requiring E_p has likelihood ratio 1 and posterior unchanged; thus veto. Also "physical" inference bottleneck: ν evaluation as inference of complex models [PAGE 3], so physical compute matters. Weather none. Biomechanics none. Need maybe state "cannot adjudicate sports injury/weather; no such variables appear; any such layer is vetoed by missing identification."

Need "RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions." RLVR = reinforcement learning with verifiable rewards? Need provide 3 scenarios with predictions. Since no betting lines, make scenarios about ML experiments and metrics. Must be verifiable: e.g., Scenario 1: If we replace CMCS identical-coalition with independent sampling under same budget, predicted ρ_inc+exc increases for ImageNet local n=14 k=3 T=1500. Use Figure 2/4. Need formulate counterfactual veto: reject hypothesis if prediction fails. Need 3: 
1. Antithetic correlation causality: on simple game ν(N)=1, ν(S)=0 else, covariance positive 1/(n+1)-1/n²; predict CMCS zero/negligible? Hmm verify via simulation: sample extended marginal contributions; covariance >0. If covariance ≤0, veto antithetic mechanism.
2. Budget efficiency: With T multiple of n+1, CMCS uses M=T/(n+1) rounds, n+1 calls each, returns n observations; ApproShapley uses n calls per permutation and n observations assuming ν(∅)=0. Predict ApproShapley and CMCS MSE ratio? Eq(11) vs Eq(16): E[MSE_CMCS]/E[MSE_ApproShapley?]. Need formal. For ApproShapley with T budget, M_App = floor(T/n) permutations (since n evals per perm, ν(∅)=0) -> E[MSE]=1/(n M_App) Σσ_i² ≈ (1/(n * T/n))Σ = (1/T)Σ. CMCS E[MSE]=(n+1)/(nT)Σ. Ratio CMCS/Appro = (n+1)/n >1. So CMCS expected MSE slightly worse by factor 1+1/n under same variances. Prediction: at equal T, CMCS MSE ~ (1+1/n) times ApproShapley if variances equal; but due correlation top-k can be better. If observed CMCS MSE dramatically lower than ApproShapley beyond variance/correlation? veto? Need careful.
3. PAC termination: CMCS@K should require fewer calls than SamplingSHAP@K in most games (Table1). Prediction: on Adult global n=14, k=5, δ=0.01, ε=0.0005, CMCS@K #calls ≈30,995 vs SamplingSHAP@K 38,998; if CMCS@K > SamplingSHAP@K in repeated run, veto claim for that game. Need mention SE. Could also scenario: Greedy selection edge case pmax=pmin should select all players, not NaN. Verify no division by zero.
Need 3 verifiable RLVR scenarios with predictions. Include reward/veto.

Need >=1000 words across sections. We can be ~1800-2500 words. Need not overdo but satisfy. Desired oververbosity 5. Need exact XML tags. No markdown? XML sections with LaTeX. We can use plain text inside.

Need include <THINK_TRACE> first with >=400 words. Let's draft with good depth.

Need be careful about "ZERO BETTING LINES" no mention. No "odds". Fine. "money" maybe source? Avoid.

Need no "toy equations": all equations from source or formal. For physical veto maybe formal Boolean indicator. Is that toy? Could use probability/likelihood? Better state no operator. "No formal equation because absent?" But they require formal LaTeX. Use evidence sufficiency: if ∂ν/∂E_p=0, no effect. Not toy. Define E_p as physical/weather vector; value function ν: P(N)->R has no argument E_p in source. This is formal.

Need "exact singularity/breakdown regimes" for equations:
- Eq(1) denominator binomial okay for n≥1. n=0? Player set N empty? Top-k undefined k∈[n]. Breakdown if n=0. Shapley value NP-hard.
- Eq(9) probability marginal distribution requires fixed joint distribution; no restrictions covariance. 
- Theorem 4.1 assumes CLT normal approximation; breaks for finite M, low samples, σ_{i,j}=0 singularity, Φ argument division by zero. Also if M=0. If φ_i=φ_j ties, theorem handling? Kε includes eligible.
- Eq(12) covariance decomposition exact. To reduce σ_i,j via positive covariance. Breakdown if covariance undefined? finite variance assumed.
- Eq(15) distribution well-defined; denominator binom n |S|. For S sizes 0..n, binom>0. Sampling uniform size ℓ and uniform coalition exact. Breakdown if n+1 budget denominator; T<n+1 -> M=0 no updates.
- Eq(16) MSE formula assumes T multiple n+1. Breakdown if T not multiple? floor; use floor. If n=0.
- Proposition 5.3 covariance formula. Example positive for n≥2; for n=1? 1/(2)-1 = -0.5? Actually 1/(n+1)-1/n² = 1/2 -1 = -0.5 for n=1; strictly positive for n≥2. At n=2: 1/3-1/4=1/12 >0.
- Eq(17) \hat p uses \hatσ_i,j; breakdown if \hatσ=0 or M_i,j<2, normal tail invalid; warm-up Mmin=30. If p max = min, Equation (18) denominator zero; Algorithm 3 handles by all players P=N? Need quote: "If all pairs are equally probable, select all players as it is not reasonable to be selective" [PAGE 16], and Algorithm 3 line 7 only if min != max. Good.
- Inclusion-exclusion error: if φ_k*? For k=n? N\K empty, etc. Top-k k∈[n]; k=n then all eligible, inclusion-exclusion maybe inf over empty conditions? Breakdown. Paper doesn't discuss. We can mention k in [n], k=n trivial; k=0 not allowed. 
- PAC Eq(8): assumes normal estimates and self-termination; if confidence intervals never non-overlap may run unlimited; breakdown for heavy-tailed, dependent samples? CMCS@K uses CLT. 
- Greedy CMCS pair probability uses CLT and joint appearances; if players not selected together M_i,j low; variance estimate unstable when M_i,j≤1 denominator.

Need cite exact page markers and verbatim quotes. We can quote short phrases:
[PAGE 1] "top-k identification problem" and "estimation quality for the approximate-all problem does not necessarily transfer to top-k identification and vice versa."
[PAGE 3] "ν : P(N) → R" quote? Exact from page: "a value function ν : P(N) →R". Good.
[PAGE 3] "The empty set has no worth, i.e. ν(∅) = 0."
[PAGE 3] "its exact calculation is provably NP-hard (Deng & Papadimitriou, 1994)".
[PAGE 4] "E[MSE] = 1 nM X i∈N σ2 i" (format).
[PAGE 4] "E[ψbin( ˆK)] turns out to be the probability that A flawlessly solves the top-k identification problem."
[PAGE 4] "an unbiased equifrequent player-wise independent sampler" quote.
[PAGE 5] "σ2 i,j = σ2 i +σ2 j −2Cov..." and "Leveraging the impact of covariance ... is generally known as antithetic sampling"
[PAGE 5] "Instead of separately evaluating ν(S) and ν(S ∪{i}) ... evaluations can be reused"
[PAGE 6] "budget-efficiency of n n+1 sampled observations per call. In comparison, drawing marginal contributions separately yields a budget-efficiency of 1/2."
[PAGE 7] "positivity" etc.
[PAGE 8] "We probabilistically include pairs in Q(m) depending on their ˆp-value."
[PAGE 10] "The biggest leap in performance is caused by reusing the evaluated worth ν(S(m)) ... almost doubles the budget-efficiency"
[PAGE 10] "CMCS significantly outperforms ApproShapley in terms of ρinc+exc despite the almost identical budget usage."
[PAGE 11-12 Table1] CMCS@K best.
[PAGE 12] Table 1 values. Need quote exact? "CMCS@K shows the best results in nearly every game by some margin" [PAGE 11].
[PAGE 16] "If all pairs are equally probable, select all players as it is not reasonable to be selective."
[PAGE 17] "In practice, we precompute and cache ν(∅) and ν(N) in the beginning." Good.

Need formal units:
- ν(S) in "worth units W"; since examples accuracy (dimensionless [0,1]) or R² or prediction value. But generally W.
- Shapley φ_i in W.
- MSE in W².
- ρ in W.
- σ² in W².
- covariance W².
- σ in W.
- M, M_i,j, T count dimension N (call it evaluations).
- p dimensionless.
- ψ in [0,1] dimensionless.
- Theorem bound probability dimensionless.

Need "source operators and equations" maybe include all formal.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage:
- Shapley 1953 axiomatic value; NP-hard Deng & Papadimitriou 1994.
- ApproShapley Castro et al. 2009 sampling permutations.
- variance reduction: stratification, antithetic sampling Illés & Kerényi 2019; Mitchell et al. 2022; control variates Goldwasser & Hooker 2024.
- top-k: Narayanam & Narahari 2008; Kolpaczki et al. 2021 Shapley bandits; BUS, Gap-E, SAR, SHAP@K Kariyappa et al. 2024.
- CMCS extends sample reuse and antithetic. Multi-week traps: 
  1. MSE trap: using MSE as proxy for top-k, but Figure3 shows inconsistent [PAGE 10].
  2. Budget accounting trap: comparing MSE without accounting ν(∅)=0 and sample reuse; ApproShapley budget efficiency 1 vs CMCS n/(n+1) [PAGE 10].
  3. Correlation trap: positive covariance not guaranteed for all games; only simple game proof; general covariance can be negative. Need not assume.
  4. PAC vs fixed budget mismatch: CMCS@K best PAC but Greedy for fixed budgets [PAGE11].
  5. Warm-up length tradeoff future work [PAGE11].
Need "multi-week traps" perhaps "multi-week" from prompt; we can say over multiple weeks, teams may regress to MSE, misread dependency, etc. Keep formal.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under uncertainty, practitioner reverts to familiar approximate-all/MSE and ApproShapley/KernelSHAP. Source warns against [PAGE10]. 
- Counter-trap: If one overcorrects to top-k, may use CMCS for MSE (bad) or Greedy when PAC guarantees needed (wrong). Source: Greedy fixed budgets, CMCS@K PAC [PAGE11]. Also top-k identification rewards correlated samples but approximate-all doesn't; don't transplant.
- Clock: fixed budget T and PAC stopping time; CMCS M=floor(T/(n+1)); warm-up consumes (n+1)Mmin [PAGE9]; Table1 #calls. Theory of mind: designer models evaluator's metric and budget. Need mention "recursive": algorithm predicts evaluator selects by top-k; evaluator predicts algorithm's PAC; both share CLT assumption; if sample selection depends on estimates, normal approximation and independence assumptions break; SAR not viable due to dependence [PAGE8]. Good.
Need maybe "crisis habit regression" phrase can be in section.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. 
- Source layer: computational/model inference as bottleneck [PAGE3] "access to ν poses a common bottleneck, by performing inference of complex models or re-training on large data".
- No physical/biomechanical/weather variables in source. The value function ν(S) maps feature subsets; for local ImageNet/NLP etc no biomechanics/weather. Any physical veto claim requires operator ∂ν/∂E_p. If zero/no measurement, veto. 
- Physical compute: T is a hard cap; if T < n+1, CMCS M=0 returns tie arbitrary; veto any claim of learning. If T < (n+1)Mmin, Greedy warm-up not complete, pair estimates invalid; must remain CMCS. Need exact. This is cross-layer physical resource veto.
- Biomechanical: absent; cannot use. Weather: absent; cannot use. Need "proof": define E_bio, E_weather not in N, not in ν. The source's datasets are Adult, Bank Marketing, Bike Sharing, Diabetes, German Credit, Titanic, Wine; local Adult, ImageNet, NLP Sentiment [PAGE9]. No biomechanical/weather columns. Thus posterior of any such effect given source is prior; veto.
- Maybe "physical" could be GPU time and inference calls. We can mention "physical layer veto" with T.
- Need maybe "weather" in Bike Sharing? Dataset bike sharing may correlate with weather but source does not include weather variables, only feature subsets; no explicit weather. Need be precise: "Bike Sharing" dataset may have weather-derived features? In paper, only dataset name, no feature list. We cannot claim no weather features? It says global games use feature subsets; Bike Sharing dataset likely includes weather features but not specified. The source text does not identify weather variables. We should say "weather is not an explicit variable in the source's formal operators; even if latent in a dataset, no weather operator is defined." Good.
- "biomechanical" none.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. Need make "verifiable" via code/replication. Mention repository link [PAGE9] "All code can be found at https://github.com/timnielen/top-k-shapley". Good. Scenarios:
1. Covariance sign test on simple game: for N with n≥2, ν(N)=1, ν(S)=0 otherwise. CMCS draws S per Eq(15), computes ∆'_i. Prediction Cov = 1/(n+1)-1/n² >0 [PAGE7]; for n=4 = 1/5-1/16=0.2-0.0625=0.1375. If empirical covariance not >0 beyond MC SE with M large, veto Proposition 5.3 mechanism. Need include prediction numeric. For n=4, covariance 0.1375 W² if ν in W. Good.
2. MSE ratio test: Same game, same variances, T multiple n+1 and T multiple n. Prediction E[MSE_CMCS]/E[MSE_ApproShapley] = (n+1)/n under equal σ² and ApproShapley with ν(∅)=0. For n=14, ratio=15/14≈1.0714. If CMCS MSE is not ≈7.14% higher in approximate-all (within MC error) for a game with equal marginal variances? Hmm equal variances assumption. Better use simple game? For simple game, σ_i² maybe equal; could compute. But ApproShapley samples permutations; CMCS samples same coalition; both unbiased. Eq(11) and Eq(16). For same game, σ_i² for ApproShapley and CMCS? Wait Eq(11) σ_i² defined for player-wise independent sampler; Eq(16) uses σ_i² but for CMCS the marginal contributions distribution? They use σ_i² maybe variance under CMCS? In Eq(16) they say for CMCS expected MSE = (n+1)/(nT)Σσ_i². But σ_i² defined for player i's marginal contributions in Eq(11), but for CMCS extended marginal contributions distribution differs. They may have same? Actually CMCS is unbiased equifrequent player-wise independent sampler with marginal distribution Eq(9), so variance of ∆'_i(S) under Eq(15) equals? The marginal distribution of S_i? They claim it is unbiased equifrequent with marginal distribution Eq(9). Thus variance of ∆'_i(S(m)) under joint distribution equals variance under marginal distribution Eq(9)? Since marginal distribution of ∆'_i? Yes, if marginal distribution of S_i (the coalition in extended contribution) maps to Eq(9), variance same as ApproShapley's marginal contribution variance? Let's check: CMCS ∆'_i(S) with S~Eq(15). The marginal distribution of ∆'_i? For i∈S use S\{i}, for i∉S use S. The induced distribution on T=S\{i} (if i∈S) or T=S (if i∉S) is 1/((n+1) binom(n, |T|+1)) + 1/((n+1) binom(n, |T|)) = 1/(n binom(n-1, |T|)). Yes same as Eq(9). So variance is same σ_i². Good. ApproShapley also same marginal distribution, variance σ_i² per marginal contribution. So ratio formula valid under same σ_i². Great. Use n=14 ratio 1.0714. Prediction: ApproShapley slightly lower MSE. If observed CMCS MSE lower than ApproShapley beyond variance? But source Figure3 shows CMCS less favorable MSE, likely consistent. Good.
3. PAC call-count test: Adult global n=14, k=5, δ=0.01, ε=0.0005; predict CMCS@K average #calls ≈30,995 < SamplingSHAP@K 38,998 [PAGE12]. If in a 200-run replication CMCS@K mean calls ≥ SamplingSHAP@K (within SE), veto the PAC superiority claim for that game. Need mention SE 673 vs 1247. Good.
Maybe scenario 4 for Greedy edge case pmax=pmin selecting all players. But need exactly 3. Could combine edge case in scenario 2? Better include 3 scenarios with verifiable predictions; maybe scenario 1 covariance, scenario 2 budget/MSE, scenario 3 PAC. Need mention warm-up edge case in breakdown.

Need "RLVR" maybe "reinforcement learning with verifiable rewards" but not source. We can frame as "verifiable reward veto tests." No issue.

Need structure:
<THINK_TRACE>
... >=400 words. Include multi-hop derivation and gray-zone audit. Mention page citations. Need not include every equation there, but derive. We can be ~700 words.
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
... formal LaTeX, units, page citations, breakdown. ~700 words.
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
... ~400 words.
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
... ~400 words.
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
... ~400 words.
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
... 3 scenarios ~500 words.
</RLVR_COUNTERFACTUAL_VETOES>
Total >2500. Good.

Need ensure ">=1,000-word depth across exact XML sections" yes.

Need no markdown? XML only. We can use LaTeX inside. Use \(...\)? In XML raw, okay. Avoid `<` in text? Use \le, not <, to avoid XML parser. Use `\leq`. Use `\phi`. Use `\hat`. Need escape ampersands? Avoid & or use \&? In XML, ampersand must be escaped. We have citations "Deng \& Papadimitriou". Use `\&` maybe okay text. But raw XML with `&` is invalid; use `\&` displays? In LaTeX, `\&` is ampersand. In XML text, backslash ampersand okay. But strict XML not needed? Better use "Deng and Papadimitriou" no ampersand. Avoid `&` entirely. Use "and". Use `<`? Avoid. Use `>`? XML text can contain > but okay; avoid if possible. Use `\leq`, `\geq`. Use `\in`. Good.

Need include exact page markers [PAGE N]. Use verbatim quotes in quotation marks. Need not overquote.

Need mention "no betting lines" not relevant, but no odds.

Let's draft carefully.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" needs "source operators" maybe operators like ∆, ∆', Φ, E, Cov, Var. We can present.

Let's write.

Need ensure section titles exact:
<THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
All closed. No extra sections? Fine.

Let's draft content.

THINK_TRACE:
We need deep derivation:
1. Formal problem: game (N,ν), ν:P(N)->R, ν(∅)=0. Shapley φ_i Eq(1). NP-hard.
2. Approx all vs top-k: MSE vs eligible set and inclusion-exclusion. Quote "subtle but significant difference" [PAGE 3]. Top-k only cares ordering/partition; MSE punishes all coordinate errors. 
3. Equifrequent sampler: M rounds, n coalitions per round. Estimates. E[MSE] formula. Theorem 4.1 lower bound depends on σ_i,j² = Var(∆i−∆j). Decomposition. This is multi-hop: reduce top-k error to pairwise tail probabilities of differences; differences have variance σ_i²+σ_j²−2Cov; increase covariance reduces variance; antithetic sampling.
4. CMCS: extended marginal contribution reuses ν(S) across n players; n+1 calls per round; sampling distribution Eq(15); Proposition 5.2 ensures unbiasedness; MSE penalty factor (n+1)/n vs ApproShapley. But top-k benefits from covariance, not MSE.
5. Greedy: pair error probability, selection probabilities, warm-up. 
6. Gray-zone audit: CLT normal approx finite M; dependence induced by pair selection; SAR invalid due to independence assumption [PAGE8]; σ=0 singularities; pmax=pmin; k=n trivial; top-k ties; benchmark metric inconsistency. 
Need mention "multi-week traps" maybe later.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with numbering and units. Use \begin{aligned}? Fine. Need cite pages. Could be long. Include equations from pages. Need maybe exact quotes for equations not necessary but cite page.
Use notation W for worth units, C for evaluation calls. 
Eq(1), Eq(2), Eq(3)-(8), Eq(9)-(16), Def5.1, Prop5.2, Prop5.3, Eq(17)-(18).
Breakdown regimes after each or grouped. Need mention "n+1 denominator" etc.

RETROCAUSAL_GENEALOGY:
Lineage and traps. Include page citations. 
- Shapley 1953 uniqueness; NP-hard; sampling ApproShapley; variance reduction antithetic; top-k bandits; SHAP@K PAC. 
- CMCS retrocausally combines sample reuse, antithetic, bandit selection. 
- Multi-week traps: metric drift (MSE proxy), budget accounting illusion, correlation overgeneralization, PAC vs fixed budget, warm-up/exploration horizon. 
Need phrase "multi-week" explicitly.

RECURSIVE_THEORY_OF_MIND:
This section weird. Need discuss crisis habit regression vs counter-trap vs clock. 
- Crisis habit regression: under pressure/noisy results, agents revert to familiar MSE/ApproShapley/KernelSHAP; source says not necessarily transfer [PAGE10]. 
- Counter-trap: overfitting to top-k; using CMCS for approximate-all or Greedy for PAC; source says Greedy better fixed budgets, CMCS@K PAC [PAGE11]. 
- Clock: budget T and PAC stopping. CMCS M=floor(T/(n+1)); warm-up (n+1)Mmin; PAC termination. Theory of mind: algorithm models evaluator's top-k; evaluator models algorithm's confidence; recursive if selection depends on estimates causing dependence and CLT breakdown; warm-up mitigates. 
Need mention "recursive" maybe nested beliefs: designer believes practitioner will select on reported top-k; practitioner believes algorithm's confidence intervals valid; both require normal estimates and joint sample counts. If one actor changes sampling adaptively, the other's guarantee invalid unless joint M_i,j tracked. Good.

CROSS_LAYER_VETO_ADJUDICATION:
Formal proof of veto for physical/biomechanical/weather:
- Source operator is ν(S) on feature coalition, not physiological state. 
- Let E_bio, E_weather not in domain. Since ν does not depend on them in formal definition, ∂ν/∂E=0; no identification. Any claim requiring them is vetoed. 
- Physical/computational layer: T calls is bottleneck; if T < n+1, M=0; if T < (n+1)Mmin, warm-up incomplete; Greedy pair estimates invalid; veto. 
- Weather: no explicit weather vector; Bike Sharing dataset only named; no weather operator. If latent, still not measured in source. 
- Biomechanical: no such layer. 
- Also "physical inference" quote [PAGE3] "access to ν poses a common bottleneck, by performing inference of complex models or re-training on large data". This supports compute-layer veto. 
Need "proof" use implications.

RLVR_COUNTERFACTUAL_VETOES:
Detailed 3 scenarios. Each with hypothesis, test, prediction, veto. Include equations and page citations. Use repository. 
Scenario 1: covariance sign test on simple game. Define n=4, ν(N)=1, ν(S)=0. Prediction Cov=0.1375 W². With M=10^5 rounds, sample Cov; 95% CI maybe. Veto if estimated Cov ≤0. 
Scenario 2: MSE ratio test for approximate-all. n=14, T multiple 210? T=1470? n+1=15, n=14; T multiple of 210. Use T=1470? 1470/15=98, /14=105. Prediction ratio CMCS/ApproShapley = 15/14 ≈1.0714 under equal variance and ν(∅)=0. Use same game/dataset. Veto if ratio not within e.g. ±0.02? But source Figure3 shows CMCS less favorable, but not exact. Need maybe use simple game where variances known? Could compute. But prediction is theoretical. Good.
Scenario 3: PAC call counts. Use Adult global Table1. Prediction CMCS@K 30,995 ± SE 673 < SamplingSHAP@K 38,998 ± 1,247. If repeated 200 runs mean CMCS@K ≥ SamplingSHAP@K or difference not positive beyond combined SE, veto. 
Maybe include edge case scenario as part of scenario 2? Need "verifiable RLVR veto scenarios" exactly 3. Good.

Need "ZERO TOY EQUATIONS": The covariance simple game equation is from paper. MSE ratio derived from paper equations, not toy. Good.

Need mention "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." In SOURCE section, include units. In other sections, okay.

Potential issue: "SI/information/probability units" They want units. We use W (worth units), C (calls), W², dimensionless. Maybe "SI" not applicable; state no SI physical units because ν is abstract real-valued worth; if ν is accuracy or R², dimensionless; if prediction value, model output units. Good.

Need cite exact [PAGE N] markers. We can include multiple.

Need avoid "betting lines" and "odds" entirely. No mention.

Need maybe say "No betting lines are relevant or used." Not necessary; maybe violates? Better not mention.

Let's now compose final. Ensure XML valid: no raw `&`, no `<` in text. Use `\leq` not `≤`? Unicode okay. Use `\phi`. Use `\hat{\phi}`. Use `\operatorname{Cov}`. Use `\mathbb{E}`. Use `\mathbb{R}`. Use `\mathcal{P}(N)`. Good.

Need ensure ">=1000 words" maybe count. Our final will be long enough.

Let's produce. 

</NATIVE_REASONING>

<THINK_TRACE>
The source is an ML-methods paper, not a physical or betting document. The central multi-hop derivation is: identify the top-k players in a cooperative game by sampling marginal contributions, then show that top-k error depends on pairwise differences, whose variance is reduced by positive covariance, then design an antithetic sampler whose joint sampling distribution creates that covariance while reusing coalition evaluations. The first hop is formal. A cooperative game is \((N,\nu)\), with \(\nu:\mathcal{P}(N)\to\mathbb{R}\) and \(\nu(\varnothing)=0\) [PAGE 3]. The Shapley value is the weighted sum of marginal contributions \(\Delta_i(S)=\nu(S\cup\{i\})-\nu(S)\) [PAGE 3, Eq. 1]. Exact computation is NP-hard and exponentially large, so the paper studies fixed-budget estimation with \(T\) calls to \(\nu\) [PAGE 3]. The second hop is the distinction between approximating all Shapley values and identifying the top-k. The approximate-all objective minimizes expected MSE, \(\mathbb{E}[\mathrm{MSE}]=\frac{1}{n}\sum_i\mathbb{E}[(\phi_i-\hat{\phi}_i)^2]\) [PAGE 3, Eq. 2], which punishes every coordinate error. Top-k identification instead returns \(\hat K\subseteq N\), \(|\hat K|=k\), and judges it by eligibility, binary precision, ratio precision, and inclusion-exclusion error [PAGE 4, Eqs. 3-7]. The paper states the difference is “subtle but significant” [PAGE 3]. The key consequence is that coordinate errors can be large while the top-k partition remains correct, so a sampler can be worse in MSE yet better at top-k. The third hop is Theorem 4.1. For an unbiased equifrequent player-wise independent sampler, the probability of an inclusion-exclusion error at most \(\varepsilon\) is bounded below by a sum over eligible coalitions \(K\in K_\varepsilon\) of \(1-\sum_{i\in K,j\notin K}\Phi(\sqrt{M}(\phi_j-\phi_i)/\sigma_{i,j})\) [PAGE 5]. The bound depends on \(\sigma_{i,j}^2=\operatorname{Var}(\Delta_i(S_i^{(m)})-\Delta_j(S_j^{(m)}))\), not directly on each player’s variance. The variance decomposition is exact: \(\sigma_{i,j}^2=\sigma_i^2+\sigma_j^2-2\operatorname{Cov}(\Delta_i(S_i^{(m)}),\Delta_j(S_j^{(m)}))\) [PAGE 5, Eq. 12]. Therefore, for fixed marginal variances, increasing covariance lowers \(\sigma_{i,j}^2\), raises the normal tail probability, and improves the lower bound. This is the formal reason top-k identification rewards correlated observations, whereas approximate-all does not. The fourth hop is CMCS. Instead of drawing each \(\Delta_i(S)\) separately, CMCS draws one coalition \(S^{(m)}\subseteq N\) and computes extended marginal contributions \(\Delta'_i(S)=\nu(S\cup\{i\})-\nu(S\setminus\{i\})\) for all players [PAGE 5, Definition 5.1]. This reuses the value \(\nu(S^{(m)})\), so one round costs \(n+1\) calls and yields \(n\) observations, a budget efficiency of \(n/(n+1)\), versus \(1/2\) for separate marginal contributions [PAGE 6]. The sampling distribution is \(P(S^{(m)}=S)=1/[(n+1)\binom{n}{|S|}]\) [PAGE 6, Eq. 15]. Proposition 5.2 proves unbiasedness: \(\phi_i=\sum_{S\subseteq N}\Delta'_i(S)/[(n+1)\binom{n}{|S|}]\) [PAGE 6]. The MSE penalty is \(\mathbb{E}[\mathrm{MSE}]=(n+1)/(nT)\sum_i\sigma_i^2\) when \(T\) is a multiple of \(n+1\) [PAGE 7, Eq. 16], slightly worse than ApproShapley’s \((1/T)\sum_i\sigma_i^2\) under the same marginal variances, but the top-k metric can still improve because the sampled differences are more comparable. The fifth hop is Greedy CMCS. It estimates pairwise mispartition probabilities \(\hat p_{i,j}=\Phi(\sqrt{M_{i,j}}\hat\delta_{i,j}/\hat\sigma_{i,j})\) [PAGE 8, Eq. 17], selects pairs with probability \((\hat p_{i,j}-\hat p_{\min})/(\hat p_{\max}-\hat p_{\min})\) [PAGE 8, Eq. 18], and updates all players in the induced subgraph [PAGE 9]. The gray-zone audit is critical. Theorem 4.1 assumes approximate normality from the CLT; finite \(M\), low-sample regimes, and adaptive pair selection break the independent-sampler premise. The paper explicitly notes that SAR is not viable because it assumes independent observations [PAGE 8], and it adds a warm-up of \(M_{\min}\) CMCS rounds to avoid using normal approximations for low sample counts [PAGE 9]. Singularities occur at \(\hat\sigma_{i,j}=0\), \(M=0\), \(M_{i,j}\leq 1\), and \(\hat p_{\max}=\hat p_{\min}\); Algorithm 3 handles the last by selecting all players when all pairs are equally probable [PAGE 16-17]. Also, \(k=n\) makes top-k trivial and collapses the outside set \(N\setminus\hat K\), so pairwise inclusion-exclusion logic must be guarded. The paper’s own empirical audit shows that “estimation quality for the approximate-all problem does not necessarily transfer to top-k identification and vice versa” [PAGE 1], and that CMCS is less favorable in MSE but competitive in top-k [PAGE 10]. Thus the correct causal chain is: top-k metric -> pairwise difference variance -> covariance -> antithetic joint sampling -> sample reuse plus adaptive selection; the incorrect chain is: lower MSE -> better top-k.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source uses abstract worth units, denoted \(W\). Because \(\nu:\mathcal{P}(N)\to\mathbb{R}\) maps feature coalitions to a real-valued worth [PAGE 3], \(W\) is dimensionless if \(\nu\) is accuracy or \(R^2\), or is the model-output unit if \(\nu\) is a prediction value. The Shapley value \(\phi_i\) has units \(W\); variances and covariances have units \(W^2\); MSE has units \(W^2\); inclusion-exclusion error \(\rho_{\mathrm{inc+exc}}\) has units \(W\); probabilities and precisions are dimensionless in \([0,1]\); \(T\), \(M\), and \(M_{i,j}\) are call counts or sample counts in evaluations.

The base Shapley operator is
\[
\phi_i=\sum_{S\subseteq N\setminus\{i\}}\frac{1}{n\binom{n-1}{|S|}}\left[\nu(S\cup\{i\})-\nu(S)\right],
\]
with \(\Delta_i(S):=\nu(S\cup\{i\})-\nu(S)\) [PAGE 3, Eq. 1]. Assumptions: finite \(N=\{1,\dots,n\}\), \(\nu(\varnothing)=0\), no structural restriction on \(\nu\). Breakdown: exact evaluation requires \(2^n\) coalition values and is NP-hard in general [PAGE 3]. For \(n=0\) the top-k problem is undefined; for \(k=n\) the outside set is empty.

The approximate-all objective is
\[
\mathbb{E}[\mathrm{MSE}]=\frac{1}{n}\sum_{i\in N}\mathbb{E}[(\phi_i-\hat{\phi}_i)^2],
\]
in \(W^2\) [PAGE 3, Eq. 2]. Top-k eligibility is
\[
\sum_{i\in K}\phi_i=\max_{S\subseteq N:|S|=k}\sum_{i\in S}\phi_i,
\]
with \(E_k\) the set of eligible \(K\) [PAGE 4, Eq. 3]. Binary precision is
\[
\psi_{\mathrm{bin}}(\hat K)=\begin{cases}1,&\hat K\in E_k,\\0,&\text{otherwise},\end{cases}
\]
and ratio precision is
\[
\psi_{\mathrm{rat}}(\hat K)=\frac{1}{k}\max_{K\in E_k}|K\cap\hat K|,
\]
both dimensionless [PAGE 4, Eqs. 4-5]. The inclusion-exclusion error is
\[
\rho_{\mathrm{inc+exc}}=\inf\{\varepsilon\in\mathbb{R}_{\geq0}:\forall i\in\hat K,\ \phi_i\geq\phi_{k^*}-\varepsilon;\ \forall j\in N\setminus\hat K,\ \phi_j\leq\phi_{k^*}+\varepsilon\},
\]
in \(W\), where \(\phi_{k^*}=\min_{K\in E_k}\min_{i\in K}\phi_i\) [PAGE 4, Eqs. 6-7]. The PAC condition is
\[
P(\rho_{\mathrm{inc+exc}}(\hat K)\leq\varepsilon)\geq1-\delta,
\]
dimensionless probability [PAGE 4, Eq. 8]. Breakdown: if \(k=n\), \(N\setminus\hat K=\varnothing\), so the exclusion condition is vacuous; if Shapley values tie, \(E_k\) can contain multiple eligible coalitions.

For an unbiased equifrequent player-wise independent sampler, each round \(m\) draws \(S_i^{(m)}\) with marginal distribution
\[
P(S_i^{(m)}=S)=\frac{1}{n\binom{n-1}{|S|}},
\]
and estimates
\[
\hat\phi_i=\frac{1}{M}\sum_{m=1}^{M}\Delta_i(S_i^{(m)}),
\]
so \(\mathbb{E}[\hat\phi_i]=\phi_i\) [PAGE 4, Eqs. 9-10]. The expected MSE is
\[
\mathbb{E}[\mathrm{MSE}]=\frac{1}{nM}\sum_{i\in N}\sigma_i^2,
\]
in \(W^2\), with \(\sigma_i^2=\operatorname{Var}[\Delta_i(S_i^{(m)})]\) [PAGE 4, Eq. 11]. Breakdown: \(M=0\) gives no estimate; finite-variance assumption is required.

Theorem 4.1 gives the top-k probability lower bound
\[
P(\hat K\in K_\varepsilon)\geq\sum_{K\in K_\varepsilon}\left[1-\sum_{i\in K}\sum_{j\in N\setminus K}\Phi\left(\frac{\sqrt{M}(\phi_j-\phi_i)}{\sigma_{i,j}}\right)\right],
\]
where \(\sigma_{i,j}^2=\operatorname{Var}[\Delta_i(S_i^{(m)})-\Delta_j(S_j^{(m)})]\) and \(\Phi\) is the standard normal CDF [PAGE 5]. The normal approximation assumes finite \(M\) is large enough for the CLT; \(\sigma_{i,j}=0\) is a singular case; heavy tails or dependent adaptive sampling invalidate the bound. The variance decomposition is
\[
\sigma_{i,j}^2=\sigma_i^2+\sigma_j^2-2\operatorname{Cov}\left(\Delta_i(S_i^{(m)}),\Delta_j(S_j^{(m)})\right),
\]
in \(W^2\) [PAGE 5, Eq. 12]. Positive covariance is beneficial; negative covariance is harmful. The paper identifies this as antithetic sampling [PAGE 5].

CMCS uses the extended marginal contribution
\[
\Delta'_i(S)=\nu(S\cup\{i\})-\nu(S\setminus\{i\}),
\]
with \(\Delta'_i(S)=\Delta_i(S\setminus\{i\})\) for \(i\in S\) and \(\Delta'_i(S)=\Delta_i(S)\) for \(i\notin S\) [PAGE 5, Definition 5.1]. The estimator is
\[
\hat\phi_i=\frac{1}{M}\sum_{m=1}^{M}\Delta'_i(S^{(m)}),
\]
with sampling distribution
\[
P(S^{(m)}=S)=\frac{1}{(n+1)\binom{n}{|S|}}
\]
[PAGE 6, Eqs. 13-15]. Proposition 5.2 gives the equivalent Shapley representation
\[
\phi_i=\sum_{S\subseteq N}\frac{1}{(n+1)\binom{n}{|S|}}\Delta'_i(S),
\]
so unbiasedness holds [PAGE 6]. One round costs \(n+1\) calls and yields \(n\) observations; the budget efficiency is \(n/(n+1)\) [PAGE 6]. The expected MSE is
\[
\mathbb{E}[\mathrm{MSE}]=\frac{n+1}{nT}\sum_{i\in N}\sigma_i^2
\]
when \(T\) is a multiple of \(n+1\) [PAGE 7, Eq. 16]. Breakdown: if \(T<n+1\), then \(M=\lfloor T/(n+1)\rfloor=0\) and no estimate is updated; if \(T\) is not a multiple of \(n+1\), the floor leaves residual budget.

Proposition 5.3 states
\[
\operatorname{Cov}(\Delta'_i(S^{(m)}),\Delta'_j(S^{(m)}))=
\frac{1}{n+1}\sum_{S\subseteq N\setminus\{i\}}\Delta_i(S)\left(\frac{\Delta'_j(S)}{\binom{n}{|S|}}+\frac{\Delta'_j(S\cup\{i\})}{\binom{n}{|S|+1}}\right)-\phi_i\phi_j,
\]
in \(W^2\) [PAGE 7]. For the simple game \(\nu(N)=1\), \(\nu(S)=0\) for \(S\neq N\), the covariance is \(1/(n+1)-1/n^2\), strictly positive for \(n\geq2\) [PAGE 7]. This is a proof only for that game class; general games can have negative covariance.

Greedy CMCS estimates
\[
\hat p_{i,j}=\Phi\left(\frac{\sqrt{M_{i,j}}\hat\delta_{i,j}}{\hat\sigma_{i,j}}\right),
\]
where \(\hat\delta_{i,j}\) is the mean difference of extended marginal contributions over rounds where both \(i\) and \(j\) were selected, and \(\hat\sigma_{i,j}\) is the sample estimate of \(\sigma_{i,j}\) [PAGE 8, Eq. 17]. Selection probability is
\[
P((i,j)\in Q^{(m)})=\frac{\hat p_{i,j}-\hat p_{\min}}{\hat p_{\max}-\hat p_{\min}}
\]
for \(i\in\hat K\), \(j\in N\setminus\hat K\) [PAGE 8, Eq. 18]. Breakdown: if \(\hat p_{\max}=\hat p_{\min}\), the denominator is zero; Algorithm 3 avoids division by zero and selects all players when all pairs are equally probable [PAGE 16-17]. If \(M_{i,j}\leq1\), the variance estimate is undefined or unstable. The warm-up of \(M_{\min}\) CMCS rounds consumes \((n+1)M_{\min}\) calls [PAGE 9]; if \(T<(n+1)M_{\min}\), the normal-approximation phase is not reached.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is explicit. The Shapley value inherits its axiomatic justification from Shapley’s 1953 fair-division solution, satisfying symmetry, linearity, efficiency, and dummy player [PAGE 3]. The computational lineage is Deng and Papadimitriou’s NP-hardness result for exact Shapley computation without structural assumptions [PAGE 3]. The sampling lineage is ApproShapley, which samples permutations and marginal contributions [PAGE 2]. The variance-reduction lineage includes stratification, antithetic sampling, and control variates [PAGE 2]. The top-k lineage starts with Narayanam and Narahari returning highest estimates and with Kolpaczki et al. linking top-k Shapley identification to multi-armed bandits [PAGE 2]. The bandit lineage includes Gap-E, BUS, SAR, and SHAP@K [PAGE 2]. CMCS is retrocausally positioned as a synthesis: it borrows the correlated-observation insight from antithetic sampling, the sample-reuse insight from permutation-based marginal contributions, and the selective-sampling insight from bandit top-k identification [PAGE 5-8]. The paper’s empirical genealogy is also explicit: independent sampling, same-length sampling, identical-coalition sampling, CMCS, Greedy CMCS, and CMCS@K form a stepwise ablation [PAGE 10, Figure 2]. The largest single improvement comes from reusing \(\nu(S^{(m)})\), which “almost doubles the budget-efficiency” [PAGE 10]. The multi-week traps are as follows. Trap one is metric regression: a team that has optimized MSE for weeks may assume the best MSE method is the best top-k method, but the paper shows the ordering changes and that CMCS is less favorable in MSE while competitive in top-k [PAGE 10]. Trap two is budget-accounting illusion: ApproShapley has budget efficiency near 1 when \(\nu(\varnothing)=0\), while CMCS has \(n/(n+1)\), so a naive comparison can misattribute CMCS’s top-k gain to sample efficiency alone; the paper states CMCS “significantly outperforms ApproShapley in terms of \(\rho_{\mathrm{inc+exc}}\) despite the almost identical budget usage” [PAGE 10]. Trap three is correlation overgeneralization: the simple-game covariance is positive for \(n\geq2\) [PAGE 7], but the general covariance formula can be negative for arbitrary games, so a multi-week project that assumes universal positive covariance is not licensed. Trap four is PAC-versus-fixed-budget drift: Greedy CMCS is better suited for fixed budgets, while CMCS@K is clearly favorable in the PAC setting [PAGE 11]. Trap five is warm-up horizon: the warm-up length \(M_{\min}\) is left as future work because it trades exploration against exploitation [PAGE 11]; a team that fixes \(M_{\min}\) for weeks without revalidating may over-spend budget or use unstable normal approximations.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when the evaluator’s metric is uncertain. The familiar habit is to report MSE, use ApproShapley or KernelSHAP, and assume that lower MSE implies better top-k. The source directly contradicts that habit: “estimation quality for the approximate-all problem does not necessarily transfer to top-k identification and vice versa” [PAGE 1]. In a crisis, the agent regresses to the approximate-all problem because its loss is smooth and well understood, but the top-k problem’s loss is a partition error and inclusion-exclusion error, so the regression is a metric mismatch, not a conservative choice. The counter-trap is overcorrection: an agent that learns “top-k is different” may then use CMCS for approximate-all reporting, or use Greedy CMCS when the evaluator demands PAC guarantees. The source separates these: CMCS is less favorable in MSE [PAGE 10], Greedy CMCS is better for fixed budgets, and CMCS@K is the algorithm of choice for PAC-learning [PAGE 11]. The clock is the budget and stopping time. CMCS runs \(M=\lfloor T/(n+1)\rfloor\) rounds [PAGE 6]. Greedy CMCS first spends \((n+1)M_{\min}\) calls on warm-up, then spends the remaining \(T\) on adaptive pair sampling [PAGE 9]. PAC methods terminate when the confidence intervals separate \(\hat K\) from \(N\setminus\hat K\) [PAGE 7, PAGE 11]. Recursive theory of mind enters because the algorithm’s selection criterion models the evaluator’s likely top-k partition, while the evaluator models the algorithm’s confidence intervals as valid. The recursion is stable only if both parties track the same joint sample counts \(M_{i,j}\). If the algorithm adaptively selects pairs based on \(\hat p_{i,j}\), then the simple independent-sampler CLT used in Theorem 4.1 no longer applies globally; the paper’s Greedy CMCS responds by using joint counts \(M_{i,j}\) and joint difference estimates \(\hat\delta_{i,j}\) rather than the marginal estimates \(\hat\phi_i-\hat\phi_j\) [PAGE 8]. The paper also notes that SAR is not viable because it assumes independent observations to derive phase lengths [PAGE 8]. Thus the recursive trap is: the evaluator believes the reported confidence intervals; the algorithm believes its adaptive selection is harmless; but the adaptive selection changes the dependence structure. The counter-trap is not to abandon adaptivity but to use warm-up, joint counts, and explicit pairwise variance estimates. The clock is unforgiving: if \(T<(n+1)M_{\min}\), the adaptive phase never starts; if PAC intervals never separate, the run does not self-terminate. A disciplined agent therefore states the metric first, then the budget, then the algorithm, not the reverse.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source’s only cross-layer operator is computational: access to \(\nu\) is a bottleneck because it can require “performing inference of complex models or re-training on large data” [PAGE 3]. The physical resource veto is therefore exact in call units: if \(T<n+1\), CMCS has \(M=\lfloor T/(n+1)\rfloor=0\) and cannot update any estimate [PAGE 6]. If \(T<(n+1)M_{\min}\), Greedy CMCS cannot complete its warm-up and its pairwise normal approximations are not licensed [PAGE 9]. If \(M_{i,j}\leq1\), the sample variance \(\hat\sigma_{i,j}^2\) is undefined or unstable, so the pair probability \(\hat p_{i,j}\) cannot be trusted [PAGE 8, PAGE 16]. These are hard computational-layer vetoes: any claim of reliable top-k identification under those budgets is vetoed by the source’s own algorithm structure.

Biomechanical veto: the formal object is \(\nu:\mathcal{P}(N)\to\mathbb{R}\), where \(N\) is a feature-player set [PAGE 3]. There is no biomechanical state variable, no joint-load variable, no physiological measurement operator, and no mapping from biomechanics to \(\nu(S)\). If a claim requires a biomechanical effect, it must identify a measurable coordinate \(E_{\mathrm{bio}}\) and a nonzero partial influence \(\partial\nu(S)/\partial E_{\mathrm{bio}}\). The source provides neither. Therefore the biomechanical layer is not identified; the likelihood of the claim given the source equals its prior, and the claim is vetoed as unsupported. This is not a judgment that biomechanics is irrelevant in general; it is a proof of absence from this source.

Weather veto: the source names datasets including Adult, Bank Marketing, Bike Sharing, Diabetes, German Credit, Titanic, and Wine for global games, and Adult, ImageNet, and NLP Sentiment for local games [PAGE 9]. It does not define a weather vector, weather operator, or weather-conditioned value function. Even if a dataset such as Bike Sharing could contain weather-derived features, the source’s formal \(\nu(S)\) is over feature coalitions, not over weather states. Thus any weather-layer claim requires an explicit feature-to-weather mapping and an estimated effect on \(\nu(S)\); neither is present. The weather layer is vetoed for the same identification reason: no operator, no measured \(E_{\mathrm{weather}}\), no estimable partial effect.

The admissible cross-layer statement is therefore narrow and provable: physical compute enters only through \(T\); the model-inference cost enters only through calls to \(\nu\); the statistical layer enters through \(M\), \(M_{i,j}\), \(\hat\sigma_{i,j}\), and \(\Phi\); and the decision layer enters through \(k\), \(\rho_{\mathrm{inc+exc}}\), and the PAC pair \((\varepsilon,\delta)\). Any claim that imports biomechanical or weather causality into the paper’s results is cross-layer vetoed unless it supplies a new operator and new measurements. The paper’s empirical layer is already sufficiently constrained by \(T\), \(M_{\min}\), and the normal-approximation assumptions; adding unmeasured physical layers would be an over-identification violation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: covariance-sign reward test. Use the paper’s simple game with \(n=4\), \(\nu(N)=1\), and \(\nu(S)=0\) for every \(S\neq N\) [PAGE 7]. Draw \(S^{(m)}\) from \(P(S)=1/[(n+1)\binom{n}{|S|}]\) and compute \(\Delta'_i(S)\) for all \(i\). Proposition 5.3 predicts \(\operatorname{Cov}(\Delta'_i(S^{(m)}),\Delta'_j(S^{(m)}))=1/(n+1)-1/n^2\). For \(n=4\), this is \(1/5-1/16=0.1375\) in \(W^2\). With \(M=10^5\) rounds and a fixed random seed, compute the sample covariance and its Monte Carlo standard error. Prediction: the sample covariance is positive and within a few standard errors of \(0.1375\). Veto rule: if the sample covariance is nonpositive or statistically incompatible with \(0.1375\), the proposed antithetic mechanism is vetoed for this game class; do not claim Proposition 5.3 support. This is verifiable by the public code repository [PAGE 9].

Scenario 2: MSE-ratio budget test. Use a game and budget with \(T\) a multiple of both \(n\) and \(n+1\). For \(n=14\), choose \(T=1470\), so ApproShapley uses \(T/n=105\) permutations under the paper’s \(\nu(\varnothing)=0\) accounting, while CMCS uses \(T/(n+1)=98\) rounds and \(n+1=15\) calls per round [PAGE 6, PAGE 10]. Under equal marginal variances and the paper’s equations, the predicted approximate-all MSE ratio is
\[
\frac{\mathbb{E}[\mathrm{MSE}_{\mathrm{CMCS}}]}{\mathbb{E}[\mathrm{MSE}_{\mathrm{ApproShapley}}]}=\frac{n+1}{n}=\frac{15}{14}\approx1.0714.
\]
Prediction: CMCS is about \(7.14\%\) worse in MSE, not better, when the only change is the sampling scheme and the marginal variances match. Veto rule: if a replication reports CMCS MSE substantially below ApproShapley MSE on this controlled game, the claimed causal source is misattributed; the difference must come from variance differences or implementation changes, not from the paper’s budget-efficiency formula. This test also vetoes the common but false inference “CMCS must dominate ApproShapley in approximate-all because it reuses samples.”

Scenario 3: PAC call-count test. Use the Adult global game with \(n=14\), \(k=5\), \(\delta=0.01\), and \(\varepsilon=0.0005\), as in Table 1 [PAGE 12]. The table reports SamplingSHAP@K at \(38{,}998\) calls with standard error \(1{,}247\), and CMCS@K at \(30{,}995\) calls with standard error \(673\). Prediction: in a 200-run replication, CMCS@K’s mean call count is lower than SamplingSHAP@K’s by roughly \(8{,}003\) calls, and the difference is positive beyond the combined standard error. Veto rule: if CMCS@K’s mean call count is greater than or equal to SamplingSHAP@K’s on that game, or if the difference is not positive within combined uncertainty, the PAC-superiority claim is vetoed for that game. This is a directly verifiable reward signal: terminate at the paper’s stopping condition, count calls to \(\nu\), and compare means. A second edge-case reward is embedded: if \(\hat p_{\max}=\hat p_{\min}\), Algorithm 3 must select all players rather than divide by zero [PAGE 16-17]; a NaN or empty selection in that regime vetoes the implementation. These three tests are counterfactual: each specifies a measurable outcome that would falsify the corresponding mechanism, not merely a narrative preference.
</RLVR_COUNTERFACTUAL_VETOES>