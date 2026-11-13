---
source: "2023 - Testing styles of play using triad census distribution an application to men s football - Palazzo et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2023"
pages: 27
model: deepseek/deepseek-v4.1-flash-1017
words: 5412
---

<NATIVE_REASONING>
We need answer user. Need comply format exact XML sections, >=1000 words. Need use source page citations verbatim quotes. No betting lines. Need "DRIVE SOURCE" maybe asks analysis. Need produce deep multi-hop derivation, gray-zone audit. Need include source operators/equations formal LaTeX units page citations breakdown. Retrocausal genealogy. Recursive theory of mind. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios predictions. Need no spreads totals moneylines odds. Need be careful not mention betting. Source is sports analytics paper. Need cite pages exact [PAGE N] markers and verbatim quotes. We can discuss triad census, passing networks, DM test, U|MAN. Need >=1000 words total, THINK_TRACE >=400 words. Other sections reasonably detailed. Need answer likely target: extract research claims, equations, methods, limitations, potential application. Need not invent. Need maybe address "gray-zone audit" with finite-sample, structural zeros, unweighted triads, no event context, no weather/biomechanical layer in source. Need be explicit "not in source" for veto layers. Need formal equations exact from paper with LaTeX and units. Need mention counts (unit: triads per network, n=11, total 165 triads, 55 dyads). Equation 5 tau, Eq 6 omnibus, Eq7 OSDM, Eq8 Sigma, Eq12/13 DM density, Eq9-11 moments, Eq14-15 mean variance. Need define probabilities p(eta), p_h. Need cite pages. Need quote exact:
- Abstract: "Summary statistics of football matches such as final score, possession and percentage of completed passes are not satisfyingly informative about style of play seen on the pitch." [PAGE 1]
- "Our aim is twofold..." [PAGE 2].
- Passing network G triple... [PAGE 3].
- "values on main diagonal ... null since ... player cannot pass ... to himself" [PAGE 3].
- total triads constrained to 165 [PAGE 8].
- U|MAN definition [PAGE 5].
- tau2max χ2 df rank Σ [PAGE 5].
- OSDM Eq7/8 [PAGE 6].
- aggregation property [PAGE 6].
- data 288 matches 576 networks [PAGE 7].
- mean passes 386 median 370 [PAGE 7].
- correlations mutual 0.77 etc [PAGE 7].
- Table 4 maybe most frequent triads "300", "210", "201", "111D" [PAGE 8].
- rejection rates Table 6 [PAGE 15].
- OSDM results T1/T2/T3 [PAGE 16 or 17].
- conclusion T3 around 70% "300" and "210" [PAGE 17].
- limitations weighted triad future [PAGE 17].
- Appendix C size at n=6 0.0766 [PAGE 18, Table 8].
Need not overlong but >=1000 words. Desired oververbosity 5. Need section headings exact XML. Need maybe include "Units and assumptions". Need no fake ratios. Need formal. Need zero betting lines. Need "source operators" maybe operational definitions. Need "retrocausal genealogy" historical/scientific lineage multi-week traps. Need "recursive theory of mind" crisis habit regression vs counter-trap vs clock. Need tailor to sports analytics/coaching rather than betting. "Clock" maybe game clock? Need interpret: crisis habit regression vs counter-trap vs clock. Need discuss team behavior under pressure/regression to habitual passing triadic profile vs opponent counter-trap vs time/score/clock effects. But source doesn't include clock. Need label as extrapolation/gray-zone. Need cross-layer veto physical/biomechanical/weather: source has no biomech/weather; veto proof means if applying model operationally, physical/weather variables could invalidate; need state not in source. Need "RLVR counterfactual vetoes" 3 verifiable scenarios with predictions. RLVR = reinforcement learning from verifiable rewards? Need create 3 testable counterfactual veto scenarios, predictions, no betting. Need be verifiable: e.g., alter network threshold? Need predictions using paper's equations. Need avoid inventing fake ratios. We can propose computational audits:
1. Structural-zero veto: if n<11 or incomplete lineup, triad total not 165; OSDM not applicable; prediction tau and DM df changes.
2. Overdispersion θ→0: DM collapses to multinomial, OSDM overrejects; prediction size > nominal, use θ estimates.
3. Directionality/weighted omission veto: if pass direction enforced or weighted strengths change, triad census cannot distinguish same unweighted isomorphism; two networks with same unweighted triads but different pass volumes yield identical T; prediction no discrimination. Need specific verifiable predictions.
Need include source citations. Need mention "no betting lines" maybe not.

Need answer likely as analysis of paper. Need be precise about equations. Let's plan.

Start with maybe title "SOURCE-GROUNDED ANALYSIS". Use exact XML sections. Need total word count maybe 1800-2500. THINK_TRACE >=400. Need "Deep multi-hop derivation & gray-zone audit (>=400 words)." We can write ~600 words. Other sections ~200-400 each. Total >1000. Need include verbatim quotes. Need cite page markers. Good.

Need be cautious: The source uses "U|MAN" with vertical bar; in text maybe "U|MAN". Use that. Need define "MAN" mutual/asymmetric/null. Triad labels 003 to 300 digits count mutual, asymmetric, null. "300" fully connected. Wait triad label convention: three digits represent number of mutual, asymmetric, null links. For "300", 3 mutual? But fully connected in directed triad has 3 mutual dyads = 6 arcs. They call fully connected triad "300". Good.

Need formal equations:
- p(η) = 1/C(n,k) sum_K p_K(η) Eq3
- p_h(η,ν)=1/[...] sum_{|K∩L|=h} p_{K,L}(η,ν) Eq4
- τ_η = (T_η - E(T_η))/sqrt(Var(T_η)) Eq5
- τ^2_max = (T-μ)' Σ^{-1} (T-μ) Eq6, asympt χ²_rank(Σ)
- X_obs = (\hat π - π0)^T Σ^+ (\hat π - π0) Eq7
- Σ = 1/x_{0,·}^2 [ \hat θ (Σ_j x_{0,j}^2 - x_{0,·}) + x_{0,·}] (diag(π0)-π0π0^T) Eq8
- DM density Eq13 maybe include. 
- E(X)=x0 π; Var(X)=x0(diagπ - ππ^T)(1+ θ(x0-1)) Eq14-15.
- Moments Eq9-11 maybe include E Var Cov. Need maybe not all due length. But section asks formal LaTeX. Include enough.

Units: T_eta counts triads per passing network; x0 total triads = C(11,3)=165 per team-match; x_{0,j} sample total; π probabilities dimensionless; θ overdispersion dimensionless; τ standardized dimensionless; τ² χ² no units; passes count; networks count. N=576 networks, 288 matches. Cite [PAGE 7], [PAGE 8], [PAGE 18].

Breakdown regimes:
- n=11 fixed, loops disallowed; if lineup changes or not 11, C(n,3) changes and structural zeros.
- Sparse networks; low-frequency triad classes and structural zeros (003 etc). Page 8.
- U|MAN null depends on MAN counts; τ² max conservative finite samples; rank mode 13; p-values. Page 5, 15.
- OSDM requires DM family, nonindependent counts, small g; Monte Carlo empirical size 0.0766 for n=6 at α=0.05 [PAGE 18]. Need mention.
- Weighted triads absent; cannot account pass volume/length/position/effectiveness [PAGE 17].
- Causality not established: paper says "could be linked" etc. Need no causal claims.

Need "RETROCAUSAL_GENEALOGY": Historical/scientific lineage: Davis & Leinhardt 1967 triad census; Holland & Leinhardt 1976/1978 U|MAN moments/omnibus; Wasserman & Faust 1994; Faust 2006/2010; DM Mosimann 1962, Brier 1980, Koehler & Wilson 1986, La Rosa et al. 2012 OSDM; football passing networks Grund 2012; Diquigiovanni & Scarpa 2019; Ievoli et al. 2021. Multi-week traps: treating triad counts as independent, ignoring composition/man totals, pooling across seasons/teams, overinterpreting cluster centroids as causal "styles", ignoring structural zeros, finite-sample overrejection, unweighted pass networks unable to distinguish volumes, using OSDM with small g and no adjustment. Need "multi-week traps" maybe experiments over weeks? We can describe "if run across a multi-week tournament, drift and opponent adaptation can masquerade as style". Need no betting.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Interpret:
- Crisis habit regression: under pressure team reverts to habitual triadic profile (e.g., T3 for elite possession teams with many 300/210, or T2 Eastern teams with 120 asymmetric) as coach/players recursively model opponent intent. Paper says triads may be similar to random graphs when opponent breaks schemes [PAGE 16]. Need cite "when opponent is able to break playing schemes..." [PAGE 16].
- Counter-trap: opponent intentionally cedes/forces certain triads (e.g., isolates player, forces low-connection 012/102) to lure into predictable pass triangles; model must distinguish imposed opponent structure from team style. Source tests structural equivalence to reference, not opponent-adjusted.
- Clock: time/score state not in source; triad census whole-match aggregated, no temporal partition. Therefore "clock" is a missing variable; if late-game urgency changes triads, a whole-match census averages it. Need cite data are per match/team, no within-match windows [PAGE 7/8]. Need say "recursive theory of mind" requires nesting: team's intent -> opponent's counter-intent -> observed triads; source only observes final network. Prediction: If counter-trap, OSDM fails/rejects team's reference more in matches vs strong opponents; if habit regression, similarity to reference persists despite opponent. Verifiable via pre-registered within-match windows.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Source has no biomechanical, weather, pitch, fatigue, player tracking except mentions wearable/tracking in methodology [PAGE 2]. Need cite "new technologies such as image analysis, wearable devices, multiple-camera player trackers and drone-based analysis" [PAGE 2] but not used. Need prove veto: any operational inference from triad census can be vetoed by lower-layer constraints: injury/lineup changes reduce n or role constraints; weather/pitch affects pass completion and direction; biomechanical fatigue alters pass lengths/volumes; source unweighted and no covariates, so these are confounders. The "proof" is not empirical; it's validity boundary: if lower-layer variables change the data-generating process of arcs and weights, the U|MAN null and DM reference are no longer sufficient. Need propose cross-layer veto rule: do not interpret style difference if physical layer changes pass count/direction or lineup; require same n=11, no structural zero, same match conditions, θ stable. Cite Table 2 passes mean 386 SD 134 [PAGE 7] and correlation passes with mutual dyads 0.77 [PAGE 7] shows physical/volume layer is entangled.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need make verifiable predictions. "RLVR" maybe "Reinforcement Learning with Verifiable Rewards" but here likely a rubric. We can define each veto as a test that if fails, model claim invalid. Need 3:
1. Loop/lineup structural-zero veto: Relabel/reconstruct networks with same 11 players but permute labels; triad census invariant; if pipeline outputs different T or OSDM p-value, fail. Prediction: permutation tests should match exactly or within numerical tolerance; if not, coding bug. This verifies U|MAN invariance under permutations [PAGE 5]. Good.
2. Overdispersion collapse veto: Simulate counts from DM with θ=0.01 vs θ→0 (multinomial) at n=6, m=16, x0=165; OSDM nominal α=0.05. Prediction: empirical size at n=6 near 0.0766 for θ=0.01 [PAGE 18]; if θ=0, OSDM should approximate multinomial and may overreject; if procedure claims nominal size, it is vetoed. Need cite Table 8.
3. Weighted/unweighted equivalence veto: Construct two passing networks with identical unweighted directed adjacency and identical triad census but different pass weights (e.g., one with 1 pass per arc, another with many). Prediction: triad census and OSDM identical; any claim that method distinguishes pass volume/style is vetoed. Cite paper's future work "weighted triad approach" [PAGE 17]. This is verifiable and strong.

Need maybe include "no betting lines" not mention.

Need structure exact XML. We can include all sections. Need ensure word count. Let's draft with quotes. Need use [PAGE N] exact. Verbatim quotes in quotation marks. Avoid too many quotes but include exact. Need cite exact pages where quote appears. Need verify quotes:
Page 1: "Summary statistics of football matches such as final score, possession and percentage of completed passes are not satisfyingly informative about style of play seen on the pitch." Yes.
Page 2: "Our aim is twofold: we want to study the triadic distribution in football passing networks using the resulting information to test if it significantly deviates from a random scenario." Yes exact? Text has "Our aim is twofold: we want to study the triadic distribution in football passing networks using the resulting information to test if it signiﬁcantly deviates from a random scenario." Use [sic] maybe.
Page 3: "A passing network G is defined as the ordered triple ... consisting of a set of 11 first team players..." Use quote. Also "values on the main diagonal in Table 1 are constrained to be null since we assume that a player cannot pass the ball to himself." Page 3.
Page 5: "U|MAN random digraph is the probability distribution on the set of all digraphs with n agents considering fixed and discrete values of mutual, asymmetric and null arcs present in the network." Page 5.
Page 5: "τ2 max asymptotically follows a χ2 distribution with degrees of freedom equal to the rank of Σ." Page 5.
Page 6: "we redesign the testing procedure in Equation (7) to triad census analysis" page 6. "aggregation property ... allows for a flexible re-parametrization" page 6. Could quote.
Page 7: "288 matches and 576 passing networks" page 7. "mean of passes for each team in a match was about 386 passes (median equal to 370)" page 7.
Page 8: "the total number of triads for each team (n = 11 players) in each match was constrained to 165, i.e., (n 3)." Page 8.
Page 8: "the most frequent triads were as follows: “300” (fully connected), which also presented the highest variability; “210”; “201” and “111D”." Page 8.
Page 15: Table 6: "2016–2019 46% 10% 38% 8% 27% 7%" maybe no quote. Need cite table. Could state Table 6 reports conventional rejection rates 46%, 38%, 27% at 0.1/0.05/0.01 and Bonferroni 10%, 8%, 7% [PAGE 15]. That's data not verbatim quote. Fine.
Page 16: "when the opponent is able to break the playing schemes, when players are not particularly skilful with respect to the opponents, or in the absence of influential players having a key role in sorting passes." Page 16. Need exact? Text: "The reasons for this might lie in several causes, e.g., when the opponent is able to break the playing schemes, when players are not particularly skilful with respect to the opponents, or in the absence of inﬂuential players having a key role in sorting passes." [PAGE 16]. Good.
Page 17: "One in particular (T3) was related to the highly tactical and technical teams, able to reach around 70 % of two types of more connected triads (“300” and “210”)." Page 17. Good.
Page 17: "the next step would be the development of a weighted triad approach to take into account the different degrees of connections between players involved in a match." Page 17. Good.
Page 18 Table 8: "n m=16 6 0.0766" but not quote. State Table 8 reports empirical size 0.0766 at n=6, m=16, α=0.05 [PAGE 18].
Page 2: "new technologies such as image analysis, wearable devices, multiple-camera player trackers and drone-based analysis of training sessions" [PAGE 2]. Good.

Need "source operators" maybe define operator T, tau, Xobs. Need use "information units"? The prompt says "SI/information/probability units". Sports paper not SI except counts. We can state all variables are dimensionless/counts; no SI physical units are in source except "passes" and "matches". Need not invent. For equations, state units: T_eta count of triads; p dimensionless probability; τ dimensionless; Xobs dimensionless χ²; θ dimensionless; x0 count. Good.

Need maybe "exact singularity/breakdown regimes":
- C(n,3) = 0 for n<3; source n=11 so not singular.
- Σ singular due linear dependence; pseudo-inverse; rank ≤16, mode 13. If rank deficient, use ΓD^-1Γ'. 
- DM θ=0 boundary: DM approaches multinomial; if θ=0, variance formula collapses; test may overreject.
- π_i = 0 or structural zeros cause Moore-Penrose and aggregated classes needed; "collapse subset of isomorphism classes into one containing the sum" [PAGE 6].
- OSDM requires n samples g small; empirical size n=6 0.0766 > 0.05.
- U|MAN assumes fixed MAN; if MAN not fixed, null invalid.
- loops disallowed; if self-passes or missing players, n not 11, total triad count not 165.

Need ensure final answer not too much. But desired 5. Need maybe 1800 words. Let's write.

Potential issue: "Never mention spreads, totals, moneylines, or odds." Need avoid "odds" word? They said never mention. I should not mention any betting terms at all. I can avoid "odds". Do not use "totals" even as "total passes"? Wait "totals" is a betting line term but also source uses "total number of passes". Invariant says never mention spreads, totals, moneylines, or odds. But source equation uses total counts x0. If I say "total passes" maybe violates literal "totals"? To be safe, avoid word "totals" as a standalone? But "total number of passes" is not betting line. However strict says never mention "totals"; maybe avoid "totals" entirely. Use "sum of passes" or "aggregate passes". But equations x0 total counts. I can say "x_{0,\cdot} is the sum of all counts" not "total". Avoid "odds" completely. Avoid "spread" perhaps not. Good.

Need avoid "moneyline". Fine. Use "score" okay? Not betting. "final score" quote from source is fine? It includes final score, not betting. The invariant says zero betting lines, final score not a line. Good.

Need not use "total" maybe but "total counts" from source. Hmm. We can use "aggregate count" to avoid. But quote "total number of triads" from source is verbatim; is that problematic? It's not betting. The invariant likely means betting totals, not word total. But to be safe, I can still use "aggregate number of triads" and not quote that phrase. But equation x0 is sum. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" include "weather veto proof" maybe not possible due no weather. State veto proof = boundary condition. Use "not identified" not "proof" maybe.

Need make final only answer, no meta. Let's draft.

Need check word count. THINK_TRACE maybe ~650. Source section ~600. Retrocausal ~250. Recursive ~300. Cross ~300. RLVR ~350. Total ~2450. Good.

Need ">=1,000-word depth across exact XML sections" okay.

Need include "exact singularity/breakdown regimes" in source section. Good.

Need mention "formal LaTeX equations, units, page citations". Use LaTeX.

Need use [PAGE N] markers exactly. Good.

Let's compose carefully.

Potential issue: "DRIVE SOURCE" likely expects "derive operational insights". We'll answer as source-grounded audit.

Need no mention "betting" even to say no betting lines? Avoid. Good.

Need maybe include "style of play" from paper. Good.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s core inferential move is multi-hop: raw same-team pass events become a directed, weighted adjacency matrix \(P=(p_{i,j})\); loops are disallowed; the matrix is dichotomized into present/absent arcs; every 3-player subset is classified into one of 16 directed triad isomorphism classes; the 16-count vector \(T=(T_1,\dots,T_{16})\) is compared first to a conditional U|MAN random-digraph null and then to Dirichlet-Multinomial reference profiles. The first hop is structural: the paper defines a passing network as an ordered triple with 11 players and pass counts as weights, then states that diagonal values are “constrained to be null since we assume that a player cannot pass the ball to himself” [PAGE 3]. The second hop is combinatorial: for \(n=11\), every team-match has \(\binom{11}{3}=165\) triads, which the paper explicitly notes: “the total number of triads for each team (n = 11 players) in each match was constrained to 165” [PAGE 8]. The third hop is probabilistic: under U|MAN, mutual/asymmetric/null arc counts are fixed, and the vector \(T\) is approximated multivariate normal, enabling \(\tau_\eta\) standardized departures and the omnibus \(\tau^2_{\max}\) statistic [PAGE 5]. The fourth hop is comparative: because the omnibus test lacks flexible alternatives, the authors “redesign the testing procedure in Equation (7) to triad census analysis” using a one-sample Dirichlet-Multinomial test [PAGE 6]. The fifth hop is interpretive: k-means centroids from correspondence analysis are turned into reference triadic profiles \(T1\)–\(T4\), and OSDM tests whether teams are structurally equivalent to those profiles or to reference teams [PAGE 10, PAGE 16].

The gray-zone audit begins with what the model does not observe. The source uses unweighted triads, even though the adjacency matrix is weighted by completed passes; the authors explicitly say the next step “would be the development of a weighted triad approach to take into account the different degrees of connections between players involved in a match” [PAGE 17]. Therefore identical unweighted adjacency matrices with very different pass volumes yield identical triad census vectors. This is not a minor limitation; it is an equivalence class. The method can distinguish presence/absence/direction patterns but not intensity, pass length, pitch location, pressure, or effectiveness. A second gray zone is the null. U|MAN fixes mutual, asymmetric, and null arc counts, so the inference is conditional on those counts; the paper defines U|MAN as “the probability distribution on the set of all digraphs with n agents considering fixed and discrete values of mutual, asymmetric and null arcs present in the network” [PAGE 5]. If lineup changes, injury, red cards, or missing pass data alter the arc-count composition, the null’s conditioning set changes. A third gray zone is finite-sample behavior. The paper reports Monte Carlo size for OSDM: at \(n=6\), \(m=16\), nominal \(\alpha=0.05\), empirical size is \(0.0766\) in Table 8 [PAGE 18]. That means small-sample OSDM can over-reject; the football application has exactly six group-stage matches per team per season, so this is not hypothetical. A fourth gray zone is singularity. The 16 triad counts are linearly dependent, so \(\Sigma\) is not full rank; the paper uses a pseudo-inverse \(\Sigma^{-1}=\Gamma D^{-1}\Gamma'\) and states that \(\tau^2_{\max}\) “asymptotically follows a \(\chi^2\) distribution with degrees of freedom equal to the rank of \(\Sigma\)” [PAGE 5]. The empirical mode of the rank is 13 [PAGE 15], so the effective dimension is 13, not 16. A fifth gray zone is structural zeros and low-frequency classes: the paper notes “some triad counts can be constrained to zero in particular conditions” and recommends collapsing low-frequency or structural-zero classes via the DM aggregation property [PAGE 6, PAGE 8]. A sixth gray zone is causal language. The paper’s interpretation is associational and comparative; it says rejection reasons “can be significantly vary” and “could be linked” to direction and pitch position [PAGE 8, PAGE 15]. It does not identify opponent-adjusted causal effects. A seventh gray zone is temporal aggregation. The data are team-match networks over 288 matches and 576 networks [PAGE 7]; the triad census is whole-match, so within-match phases, score state, fatigue, and clock effects are averaged out. Any “style” claim is therefore a match-level summary, not a phase-level mechanism.

The deepest multi-hop trap is reification of cluster centroids. Correspondence analysis explains 38.4% on dimension 1 and 22.9% on dimension 2, with three factors at 67.6% under Kaiser criterion [PAGE 10]. The k-means centroids \(T1\)–\(T4\) are reconstructed from that reduced space, not from a generative tactical model. The OSDM test then treats those centroids as null hypotheses. That is a useful exploratory-to-confirmatory bridge, but it is not a proof that four styles exist. The paper frames \(T3\) as “highly tactical and technical teams, able to reach around 70 % of two types of more connected triads (“300” and “210”)” [PAGE 17], but this is an interpretation of a centroid, not a causal classification. The audit therefore requires: preserve \(n=11\), check structural zeros, estimate \(\theta\), report rank-adjusted degrees of freedom, avoid unweighted intensity claims, and use permutation or simulation checks before treating any profile as a stable style.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Operational objects and units.** A team passing network is \(G=(\mathcal{V},\mathcal{E},\mathcal{W})\), where \(\mathcal{V}\) is the set of 11 first-team players, \(\mathcal{E}\subseteq\mathcal{V}\times\mathcal{V}\) is the set of directed pass relations, and \(\mathcal{W}\) is the set of pass counts; the paper states that the weights are “the number of passes occurred during the match” [PAGE 3]. The adjacency matrix is \(P=(p_{i,j})\), with \(p_{i,j}=\omega(a_{i,j})\) if an arc exists and \(0\) otherwise [PAGE 3]. Units: vertices are players; arcs are directed pass relations; weights are completed passes; \(T_\eta\) is a count of triads; \(p(\eta)\) and \(\pi_i\) are dimensionless probabilities; \(\theta\) is a dimensionless overdispersion parameter; \(\tau_\eta\), \(\tau^2_{\max}\), and \(X_{\mathrm{obs}}\) are dimensionless test statistics. There are no SI physical units in the source’s inferential layer; passes, matches, and networks are count units.

**Triad census.** For \(n\) nodes and \(k=3\), the 16 isomorphism classes are indexed by \(\eta\). The paper defines
\[
p_K(\eta)=P(K\in\eta),\qquad
p_{K,L}(\eta,\nu)=P(K\in\eta\cap L\in\nu),
\]
and averages over all subgraphs:
\[
p(\eta)=\frac{1}{\binom{n}{k}}\sum_K p_K(\eta),
\]
\[
p_h(\eta,\nu)=\frac{1}{\binom{n}{k}\binom{n-k}{k-j}\binom{k}{j}}
\sum_{|K\cap L|=h}p_{K,L}(\eta,\nu),
\]
with \(0\le h\le k-1\) [PAGE 4]. Under U|MAN, label permutation invariance gives \(p(\eta)=p(\nu)\) in the simplified notation and \(p_{K,L}(\eta,\nu)=p_h(\eta,\nu)\) with \(h=|K\cap L|\) [PAGE 5]. U|MAN is the conditional random digraph with fixed mutual, asymmetric, and null arc counts [PAGE 5]. The standardized departure is
\[
\tau_\eta=\frac{T_\eta-\mathbb{E}(T_\eta)}
{\sqrt{\operatorname{Var}(T_\eta)}},
\]
and the omnibus statistic is
\[
\tau^2_{\max}
=(T-\mu)'\Sigma^{-1}(T-\mu),
\]
where \(\Sigma^{-1}\) is the pseudo-inverse obtained from \(\Sigma^{-1}=\Gamma D^{-1}\Gamma'\), with \(D^{-1}=\operatorname{diag}(1/\lambda_1,\dots,1/\lambda_p,0,\dots,0)\) and \(p=\operatorname{rank}(\Sigma)\le 16\); asymptotically \(\tau^2_{\max}\sim\chi^2_{\operatorname{rank}(\Sigma)}\) [PAGE 5]. The paper reports a modal rank of 13 for the football triad-census matrix, so the null \(\chi^2\) has 13 effective degrees of freedom [PAGE 15]. The U|MAN moments are given in Appendix A as
\[
\mathbb{E}(T_\eta)=\binom{n}{3}p(\eta),
\]
\[
\operatorname{Var}(T_\eta)
=\binom{n}{3}p(\eta)(1-p(\eta))
+\binom{n}{3}^{(2)}\frac{n+7}{n-2}
[p_0(\eta,\eta)-p_2(\eta)]
+3\binom{n}{3}(n-3)[p_2(\eta,\eta)-p_2(\eta)],
\]
\[
\operatorname{Cov}(T_\eta,T_\nu)
=-\binom{n}{3}p(\eta)p(\nu)
+\binom{n}{3}^{(2)}\frac{n+7}{n-2}
[p_0(\eta,\nu)-p(\eta)p(\nu)]
+3\binom{n}{3}(n-3)[p_2(\eta,\nu)-p(\eta)p(\nu)],
\]
where \(\binom{n}{3}^{(2)}\) is the descending factorial \(\binom{n}{3}(\binom{n}{3}-1)\) [PAGE 17].

**OSDM test.** The one-sample Dirichlet-Multinomial statistic is
\[
X_{\mathrm{obs}}
=(\hat{\boldsymbol{\pi}}-\boldsymbol{\pi}_0)^\top
\Sigma^{+}
(\hat{\boldsymbol{\pi}}-\boldsymbol{\pi}_0),
\]
with
\[
\Sigma=
\frac{1}{x_{0,\cdot}^2}
\left[
\hat{\theta}\left(\sum_{j=1}^{g}x_{0,j}^2-x_{0,\cdot}\right)
+x_{0,\cdot}
\right]
\left(\operatorname{diag}(\boldsymbol{\pi}_0)
-\boldsymbol{\pi}_0\boldsymbol{\pi}_0^\top\right),
\]
and \((\cdot)^+\) the Moore–Penrose generalized inverse [PAGE 6]. Here \(x_{0,\cdot}\) is the sum of all counts over all samples, \(x_{0,j}\) is the sum for sample \(j\), and \(g\) is the number of samples; \(X_{\mathrm{obs}}\) asymptotically converges to \(\chi^2\) with degrees of freedom equal to the rank of \((\operatorname{diag}(\boldsymbol{\pi}_0)-\boldsymbol{\pi}_0\boldsymbol{\pi}_0^\top)^+\) [PAGE 6]. The DM density under the \((\boldsymbol{\pi},\theta)\) parametrization is
\[
P(X=x\mid\pi_1,\dots,\pi_m,\theta)
=\frac{x_0!}{x_1!\cdots x_m!}
\cdot
\frac{\prod_{i=1}^{m}\prod_{j=1}^{x_i}
[\pi_i(1-\theta)+(j-1)\theta]}
{\prod_{j=1}^{x_0}[(1-\theta)+(j-1)\theta]},
\]
with \(0\le\pi_i\le1\), \(\theta\ge0\), and \(\sum_i\pi_i=1\) [PAGE 17]. The mean and variance are
\[
\mathbb{E}(X)=x_0\boldsymbol{\pi},
\]
\[
\operatorname{Var}(X)
=x_0(\operatorname{diag}(\boldsymbol{\pi})
-\boldsymbol{\pi}\boldsymbol{\pi}^\top)
(1+\theta(x_0-1)).
\]
The paper notes that as \(\theta\to0\), the DM approaches the multinomial; the Beta-Binomial is the \(m=2\) special case [PAGE 6]. The aggregation property allows disjoint modality subsets to be collapsed into a summed DM class, which is why low-frequency or structural-zero triad classes can be pooled [PAGE 6].

**Breakdown and singularity regimes.** First, \(n=11\) and loop prohibition are load-bearing: if \(n\neq11\), \(\binom{n}{3}\neq165\), and the fixed count constraint breaks. Second, \(\Sigma\) is singular because the 16 triad counts are linearly dependent; the pseudo-inverse and rank-adjusted \(\chi^2\) are mandatory [PAGE 5]. Third, \(\theta=0\) is a boundary where DM collapses toward multinomial; small-sample OSDM then has no guaranteed nominal size. Table 8 reports empirical size \(0.0766\) at \(n=6\), \(m=16\), \(\alpha=0.05\), so the small-\(g\) regime is anti-conservative [PAGE 18]. Fourth, structural zeros and very low counts make \(\hat{\pi}_i\) unstable and can make the covariance matrix rank-deficient; the aggregation property is the paper’s remedy [PAGE 6, PAGE 8]. Fifth, U|MAN is conditional on fixed MAN counts; if the data-generating process changes those counts, the null is no longer the stated conditional random structure [PAGE 5]. Sixth, the method is unweighted: it cannot separate two networks with the same directed adjacency but different pass volumes, because the weighted information is discarded before triad classification; the authors identify a weighted triad extension as future work [PAGE 17].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is clear from the source’s own citations. Triad census enters via Davis and Leinhardt (1967), is formalized probabilistically by Holland and Leinhardt (1976, 1978), and is synthesized in Wasserman and Faust (1994) and Faust (2006, 2010) [PAGE 4, PAGE 26]. The U|MAN null and the \(\tau^2_{\max}\) omnibus test are direct descendants of Holland and Leinhardt’s conditional random-digraph program [PAGE 5]. The Dirichlet-Multinomial branch descends from Mosimann (1962), Brier (1980), Koehler and Wilson (1986), and La Rosa et al. (2012); the paper says the OSDM test was developed for grouped count data and that “to the best of our knowledge there are no applications to triad census analysis” [PAGE 6]. The football branch descends from passing-network work such as Grund (2012), Diquigiovanni and Scarpa (2019), and Ievoli, Gardini, and Palazzo (2021a, 2021b) [PAGE 1, PAGE 2]. The retrocausal trap is treating later cluster labels as if they were prior tactical categories. \(T1\)–\(T4\) are reconstructed from CA and k-means on this dataset; the paper’s own language is “reconstructed Triad census of k-means based centroids” [PAGE 10]. A multi-week tournament creates several traps: (i) pooling seasons can hide opponent adaptation; (ii) repeated testing across teams and seasons inflates false positives unless Bonferroni or another correction is used—the paper reports conventional rejection rates of 46%, 38%, and 27% at 0.1, 0.05, and 0.01, but Bonferroni rates of 10%, 8%, and 7% [PAGE 15]; (iii) small \(g=6\) per team-season makes OSDM size distortion material [PAGE 18]; (iv) unweighted triads can make a high-volume possession team and a low-volume team look equivalent if their directed presence patterns match; (v) cluster centroids can drift across seasons, so a “style” label fitted in one season may not be structurally equivalent in the next. The correct genealogy is therefore: triad-census combinatorics → conditional U|MAN inference → DM overdispersion correction → football passing-network application. Each arrow adds assumptions; none should be treated as a causal identification strategy.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
In a crisis, a team can regress to its habitual triadic profile: elite possession sides may still produce many “300” and “210” triads, while low-connection sides may default to “012” and “102” patterns. The paper’s \(T3\) interpretation is exactly this: “highly tactical and technical teams, able to reach around 70 % of two types of more connected triads (“300” and “210”)” [PAGE 17]. But the opponent is also modeling the team. A counter-trap is when the opponent deliberately denies the central triangle, forces play wide, or isolates a distributor, producing more sparse or asymmetric triads than the team’s reference profile. The paper acknowledges this class of explanation: rejection of randomness can occur “when the opponent is able to break the playing schemes, when players are not particularly skilful with respect to the opponents, or in the absence of influential players having a key role in sorting passes” [PAGE 16]. The recursive structure is therefore team intent → opponent counter-intent → observed pass network. The source observes only the third layer. A “clock” layer is also missing: the census is computed per team-match, not per phase, so score state, late-game urgency, and fatigue are averaged. The paper’s data are “288 matches and 576 passing networks” [PAGE 7], but no within-match time windows are modeled. The practical audit is: if a team’s OSDM similarity to \(T3\) persists across opponents, that supports habit regression; if similarity collapses specifically against opponents that force low-connection triads, that supports counter-trap; if similarity changes only late in matches, that supports a clock/state effect. Because the source has no clock variable, any clock interpretation is an extrapolation, not a finding.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source contains no weather, pitch, biomechanical, or fatigue covariates. It mentions that “new technologies such as image analysis, wearable devices, multiple-camera player trackers and drone-based analysis of training sessions” are changing data collection [PAGE 2], but the empirical analysis uses pass networks only. The veto proof is therefore a validity-boundary proof, not an empirical weather model. Lower-layer physical constraints can veto a triadic “style” inference in four ways. First, lineup and availability veto: the null and the count space depend on \(n=11\); if a player is sent off, injured, or replaced in a way that changes the effective network, \(\binom{n}{3}\) is no longer 165, and the U|MAN conditioning set changes. Second, pass-volume veto: the paper reports a mean of “about 386 passes (median equal to 370)” and a large positive correlation between passes and mutual dyads, \(0.77\) [PAGE 7]. That means physical/technical pass volume is entangled with triad structure; a “style” difference may be a volume difference. Third, weather and pitch veto: rain, wind, or poor surface can reduce completion and change directionality, which changes arcs before triad classification. The source cannot separate this from tactical choice. Fourth, biomechanical/fatigue veto: pass length, pressure, and movement constraints alter which triangles are feasible; the unweighted census discards those intensities. A defensible adjudication rule is: do not interpret a triad-profile difference as style if the physical layer changes the arc set or the pass-weight distribution; require same \(n\), same structural-zero regime, stable \(\theta\), and a weighted or covariate-adjusted sensitivity check. The source itself supports this caution by calling for weighted triads “to take into account the different degrees of connections between players involved in a match” [PAGE 17].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto 1 — Label-permutation invariance.** Verifiable test: take a passing network, randomly permute player labels, recompute the 16 triad counts, and compare \(T\) and OSDM \(X_{\mathrm{obs}}\). Prediction: \(T\) must be identical up to numerical tolerance because U|MAN is invariant under permutations and the paper states that “changing the node’ labels of a triad does not change the probability of belonging to an isomorphism class” [PAGE 5]. If the pipeline changes counts or p-values under relabeling, the implementation is vetoed.

**Veto 2 — Overdispersion-collapse size check.** Verifiable test: simulate \(m=16\), \(x_0=165\), \(g=6\) counts from a DM with \(\theta=0.01\) and from a near-multinomial \(\theta\to0\); run OSDM at \(\alpha=0.05\) and compare empirical rejection. Prediction: at \(g=6\), the \(\theta=0.01\) DM case should approximate the paper’s reported size \(0.0766\) [PAGE 18]; the near-multinomial boundary should not be claimed to have exact nominal size. If a procedure reports nominal 0.05 under both regimes, it is vetoed.

**Veto 3 — Unweighted-equivalence check.** Verifiable test: construct two networks with identical directed presence/absence matrices but different pass weights, e.g., one pass per arc versus many passes per arc; compute \(T\) and OSDM. Prediction: both outputs must be identical because the triad census is unweighted; any claim that the method distinguishes pass volume, pass length, or intensity is vetoed. This prediction follows directly from the paper’s own limitation and future-work statement that a “weighted triad approach” is still needed [PAGE 17].
</RLVR_COUNTERFACTUAL_VETOES>