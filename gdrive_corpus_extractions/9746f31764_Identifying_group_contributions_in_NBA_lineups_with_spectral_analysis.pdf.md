---
source: "Identifying group contributions in NBA lineups with spectral analysis.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 35
model: deepseek/deepseek-v4.1-flash-1017
words: 8199
---

<NATIVE_REASONING>
We need answer user request. They provided source paper. Need produce GSE+GSI frontier reasoning foundry with strict invariants. Need XML sections exact. >=1000 words depth, THINK_TRACE >=400 words. No betting lines/odds. Need not mention spreads etc. Need formal LaTeX equations, units, assumptions, singularities/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need deep multi-hop derivation & gray-zone audit. Need source operators and equations, page citations, breakdown. Retrocausal genealogy historical/scientific lineage & multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need likely analyze paper's methodology. Need not produce betting. "DRIVE SOURCE" maybe they expect use source to derive. Need include exact quotes. Need avoid toy equations. Need formal equations with units/information/probability units. Need mention no betting. Need perhaps create critique/audit of spectral analysis. We can frame as research audit, not sports prediction betting.

Need be comprehensive. Need ensure page citations exact. Need verbatim quotes. Need no fake ratios. We can use actual equations from paper: inner product Eq (1), decomposition Eq (2), action Eq (4), projection inner product Mallows, ridge regression Eq, norm decomposition, correlations from page 23, bootstrap. Need units: plus-minus points? The paper defines PM as points-per-possession times possessions => points. SCLP "spectral contribution per log possession"; log possession dimensionless if log of count? Actually log(possessions) dimensionless if count normalized; units of SCLP points/log(possessions count). We can state. Need assumptions: 15-player roster restriction, no substitutions within stint, lineup function aggregation, orthogonal decomposition, S15 action, Maslen eigenbasis J(15,5), raw PM, opponent quality ignored, garbage time not removed, log normalization heuristic, bootstrap sampling plays. Breakdown regimes: low possession, p>>N, multicollinearity, non-orthogonal W_i, dimensions, interpretation limitation, cross-team/effect-space noncomparability, null mass dimension effect, bootstrap instability, random perm null, non-model-based but projection choices, eigenbasis nonuniqueness? Need mention irreducible decomposition is unique but individual group attribution via Mallows depends on chosen interpretable vector and norms; SCLP not comparable across effect spaces or teams due to norms [PAGE 16-17]. Singularities: log possessions when possessions=0 or 1? They restrict group with at least 150/200; SCLP log possession: log(1)=0 denominator, undefined for 0; log count dimensionless; normalization can blow up for low possession (< e? Actually log(poss) for poss=1 zero; poss<1 impossible integer? poss=0 undefined). Also 15 choose 5=3003 dimension; V1=14 despite 15 players; V5 dim 1638 < 3003 groups; orthogonality leads group effects not directly attributable; Mallows projection is "weighted cosine similarity" [PAGE 7]. Need formulate.

Need maybe discuss "GSE + GSI Frontier Reasoning Foundry" likely wants adversarial audit. We can produce XML only. Need include sections.

Need count words >=1000. We'll write around 3000 words. Need ensure THINK_TRACE >=400. Need include exact page markers and quotes. Need citations [PAGE 1 of 35], etc. User says cite exact [PAGE N] markers. We'll use [PAGE 5 of 35], [PAGE 6 of 35], etc.

Need include "verbatim quotes". Use quotes exact from source. Ensure not paraphrase inside quotes. Need maybe quote key lines:
- [PAGE 1] abstract: "decomposes the team success signal into components that are naturally understood as the contributions of player groups of a given size: individuals, pairs, triples, fours, and full five-player lineups." 
- [PAGE 4] "f(L) = pmL" and "We call f the team success function."
- [PAGE 5] inner product Eq (1): "⟨g, h⟩= 1/|X| ∑ g(x)h(x)." Maybe exact.
- [PAGE 5] "L(X) = V0 ⊕V1 ⊕V2 ⊕V3 ⊕V4 ⊕V5."
- [PAGE 6] "the largest eigenvalue is simple and is associated with the one-dimensional mean space; the second largest eigenvalue is associated with the first-order space, etc."
- [PAGE 6] "the decomposition in (2) is orthogonal ... group effects are independent."
- [PAGE 7] "project both φg and f onto V3 and take the inner product of the projections"
- [PAGE 7] "resulting inner product is a weighted cosine similarity"
- [PAGE 11] "normalize the spectral contribution by the log of possessions played by each group. We call the result spectral contribution per log possession (SCLP)."
- [PAGE 17] "SCLP values are not directly comparable across teams" and "not directly comparable across effect spaces"
- [PAGE 19] "while V0 and W0 are both one-dimensional, for i ≥1 the dimensions of the Wi are strictly larger than those of their Vi counterparts."
- [PAGE 22] correlation values and null distribution.
- [PAGE 20] bootstrap.

Need "formal LaTeX equations, SI/information/probability units". For each equation, state units. Need maybe define:
Let X = {L ⊂ P: |L|=5}, |P|=15. f: X→R, units points (plus-minus points; signed). Inner product:
⟨g,h⟩ = (1/|X|) ∑_{x∈X} g(x) h(x)
If g,h in points, units points^2? Inner product has units (points)^2 if g,h both points; normalized average doesn't change units. But if functions are indicator? We can state "signed points^2 for f-with-f, dimensionless for indicator-indicator, points for indicator-f." Actually inner product of indicator (dimensionless) and f (points) = points. Good.

Projection: f_i = pr_{V_i} f. Norm squared ||f||^2 = ||f_0||^2+...+||f_5||^2, units points^2. Mass fraction m_i=||f_i||^2/||f||^2 dimensionless probability-like (fraction of L2 mass). But not probability unless normalized; call dimensionless proportion.

Mallows group score:
s_g = ⟨pr_{V_k}(φ_g), pr_{V_k}(f)⟩. φ_g indicator dimensionless; f points; s_g points. If normalized by ||pr φ_g|| ||pr f|| gives weighted cosine dimensionless. Need mention SCLP = s_g / log(Poss_g). Possessions are count; log count dimensionless if using natural log of count; s_g points, so SCLP has points/log(count). However paper uses log possessions as normalizer. Need state log(0) undefined, log(1)=0 singular. They avoid by thresholds (>=200, >=150, >=100, >=80).

Ridge:
argmin_β {||y-Xβ||^2 + λ∑β_i^2}. y points, X dimensionless binary, β points? Penalty λ β^2; λ units? If λ dimensionless, okay. Need note no intercept penalty.

Bootstrap correlation:
Pearson r dimensionless [-1,1]; examples r=0.953, 0.688, 0.73, 0.73; plus-minus means/standard deviations points. Need quote [PAGE 21-22].

Need discuss "gray-zone audit" perhaps identify hidden assumptions and possible traps:
1. Aggregated raw PM over lineup, no opponent quality, no garbage-time devaluation [PAGE 24].
2. 15-player roster restriction and play-by-play filtering could create selection bias [PAGE 3-4].
3. f(L) only for lineups with possessions; many lineups zero/low; raw minus plus. Low-possession lineups noisy; SCLP normalization heuristic [PAGE 11].
4. Orthogonality is mathematical, not causal. It separates variance under S15 decomposition but not physical causation. The paper says non-model-based but projection basis and threshold choices are analytic decisions; "not a model-based approach" [PAGE 3], but Mallows method and SCLP normalization are modeling choices.
5. Mallows method group score depends on interpretable vector φg and norm; cross-team/effect-space incomparability [PAGE 16-17].
6. Group effect spaces have dimensions smaller than number of natural groups, so exact unique group-specific decomposition impossible (Table 1 [PAGE 7]). Need mention non-identifiability/gauge freedom.
7. Ridge non-orthogonal, p>>N, multicollinearity [PAGE 16-18], shrinkage not orthogonal; cannot claim pure group effect.
8. Stability bootstrap only sample plays; no model for opponent/weather etc. Weather not relevant indoor basketball? But cross-layer veto requires physical/biomechanical/weather veto proof. Need discuss weather veto: NBA indoor arena, weather impacts travel/rest? Paper does not include weather; any weather claim is unsupported; physical/biomechanical constraints can veto lineup synergy generalization: fatigue, injury, minutes, positional constraints, matchups, scheme, coaching. Need state no biomechanical/weather variables in source, so any such inference is vetoed. But user asks "Cross-layer veto adjudication: Physical/biomechanical/weather veto proof." Need include a section with proof of veto: source data lacks physical load, biomechanical tracking, weather; cannot infer those from spectral decomposition. Need maybe say if one attempted to use SCLP as causal physical effect, veto by missing variables and ecological fallacy. Need not mention betting.

Need "Retrocausal genealogy": lineage from Fourier analysis, representation theory, Diaconis 1988, symmetric group, Johnson graph J(15,5), Maslen et al. 2003, spectral analysis of Supreme Court, genetic epistasis, social choice, NBA analytics. Multi-week traps: treating group SCLP as stable over weeks despite bootstrap instability, ignoring schedule/opponent and rotation changes, overfitting top triple, cross-team comparisons, interpreting negative pair as bench problem, ignoring lineup co-occurrence and minutes. Need cite pages. "Retrocausal" maybe examine how later metrics (RPM/BPM/WAR) influence interpretation; paper says Green ordering agrees with ESPN RPM; BPM/WAR rank Curry higher [PAGE 11]. Need discuss reverse inference: SCLP based on outscoring like RPM [PAGE 11]. Need mention historical lineage.

Need "Recursive theory of mind": crisis habit regression vs counter-trap vs clock. This is unusual. Need interpret: recursive theory of mind in sports analytics: coach/player/analyst beliefs about beliefs, strategic adaptation; crisis habit regression (team reverts to iso/hero ball under stress), counter-trap (opponent anticipates and counters), clock (late-game/possession clock changes). Need tie to source? Paper doesn't discuss in-game strategy or ToM. Need explicitly say source provides no recursive ToM operators; any such inference is outside source. Need use formal? We can discuss as audit: SCLP is aggregate over season; cannot detect within-game recursive adaptation; bootstrap does not model opponents reacting; no clock covariates; no crisis habit regression parameter. Counter-trap: if lineup synergy is discovered, opponents adjust; SCLP static. Clock: late-clock possessions and garbage time confound. Need include no fake equations? Could state no formal ToM equation from source; avoid inventing fake ratio. But can state if one wanted, need state variables and units; but not derive. Keep audit.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need provide 3 counterfactual veto scenarios with predictions. Need be verifiable: e.g., 
1. Possession-threshold sensitivity veto: recompute SCLP with thresholds (>=50 vs >=200) and require top triples stable. Prediction: many low-possession groups change rank; if claim "Barbosa–Speights is fourth best pure pair" [PAGE 12] with 983 poss should be robust? Actually they use >=200. We can say if threshold <100, ranks unstable; if using >=500 maybe top GSW pairs remain? Hmm need verifiable predictions. Need design experiments with checks. 
2. Opponent-quality/garbage-time adjustment veto: reweight possessions by opponent strength and exclude garbage time; if SCLP signs change beyond bootstrap CI, veto causal claim. Prediction: top GSW Green–Curry–Thompson remains positive due large margin; weaker pairs like Bogut–Iguodala may shift. Need exact.
3. Cross-team comparability veto: normalize by norm and dimension; test if SCLP rankings across teams are invariant under orthogonal basis rotations? The spectral decomposition is unique per effect space? Actually irreducible spaces unique, but Mallows vector norms and team success norms differ; paper says not comparable across teams/effect spaces. Prediction: cross-team raw SCLP rankings not invariant to team-specific scaling; only within-team within-effect-space rankings valid.
Could include 4th: bootstrap sign stability veto: for Sullinger–Smart pair, SCLP negative in 90.6% bootstrap, plus-minus negative in 32.4% [PAGE 22]; prediction if new season sample does not reproduce negative in >=80% bootstrap, reject "ineffective pure pair". Good. Need "3 verifiable RLVR veto scenarios + predictions" exactly maybe three.

Need no betting lines: avoid "bet", "odds", "spread", "moneyline", "total", "line". The source has "lineups", "line" not betting. But strict zero betting lines: Never mention spreads, totals, moneylines, odds. We can mention "lineup" okay. Avoid "over/under". Avoid "betting". Need maybe not say "bet" at all. Fine.

Need structure exact XML sections:
<THINK_TRACE>...
<SOURCE_OPERATORS_AND_EQUATIONS>...
<RETROCAUSAL_GENEALOGY>...
<RECURSIVE_THEORY_OF_MIND>...
<CROSS_LAYER_VETO_ADJUDICATION>...
<RLVR_COUNTERFACTUAL_VETOES>...
Need ensure >=1000 words. We can include all. Need maybe include "word count" not necessary. Need answer as XML only? User asks "You are ..." likely output XML sections. We'll output exactly those sections with content. Need no extra preamble maybe.

Need be careful with citations [PAGE N] markers. We'll use [PAGE 4 of 35] etc. They asked exact [PAGE N] markers maybe [PAGE 4 of 35]. Good.

Let's draft in detail.

First THINK_TRACE: >=400 words. Deep multi-hop derivation and gray-zone audit. We can write ~800 words. Include chain: source defines f on X lineups; X size 3003; S15 action; L(X) decomposition; inner product; Johnson graph J(15,5) eigenvalues map to V0..V5; projections; Mallows group scores; SCLP normalization; ridge comparison; stability bootstrap; norm importance. Gray-zone audit: identify assumptions, singularities, non-identifiability, cross-space incomparability, causal overreach, low possession, opponent quality, garbage time, physical weather absent. Need include exact quotes. Maybe in THINK_TRACE include quotes as audit. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Need define notation. Include equations:
X = { L ⊂ P : |L|=5 }, P roster 15.
f: X→R, f(L)=pm_L [PAGE 4]
pm_L = ∑_{stints s of L} (Pts_L(s)/Poss_L(s) - Pts_M(s)/Poss_M(s)) Poss_L(s). Actually paper example: (6/3 - 3/2)3 = 1.5. Need formulate. Units points. General:
pm_L = ∑_s (p_{L,s}/n_{L,s} - p_{M,s}/n_{M,s}) n_{L,s}
where p points, n possessions. This is points. For M similar with n_M. Quote [PAGE 4].
Inner product Eq (1) [PAGE 5].
Decomposition Eq (2) [PAGE 5].
Dimension table: |V0|=1, |V1|=14, |V2|=90, |V3|=350, |V4|=910, |V5|=1638; counts groups 15,105,455,1365,3003 [PAGE 7].
Action Eq (4) [PAGE 8].
Projection f_i = pr_{V_i} f; f = ∑ f_i.
Mallows score s_g = ⟨pr_{V_k}(φ_g), pr_{V_k}(f)⟩ = ⟨pr_{V_k}(φ_g), f_k⟩ [PAGE 7].
SCLP: S_g = s_g / log(Poss_g) [PAGE 11]. Units points/log(count). Singularity log(Poss)=0 at Poss=1; undefined at 0; threshold used.
Norm decomposition: ||f||^2 = ∑ ||f_i||^2 [PAGE 22]. Mass fraction m_i = ||f_i||^2 / ||f||^2 dimensionless. Null expected m_i ≈ dim(V_i)/dim L(X) = dim/3003? Table 13 null: 0, .005, .03, .117, .303, .545. Let's verify dimensions: 1/3003=0.000333 (round .000), 14/3003=0.00466 (.005), 90/3003=0.02997 (.03), 350/3003=0.11655 (.117), 910/3003=0.3030 (.303), 1638/3003=0.5454 (.545). Good. Include.
Ridge: argmin. Eq (8) yhat = X_L β. W_i non-orthogonal. Dimensions W_i > V_i [PAGE 19]. 
Pearson r examples: r=0.953 for Thomas–Bradley–Crowder; r=0.688; Sullinger–Smart SCLP negative 90.6% while PM negative 32.4% [PAGE 21-22]; Bradley–Smart negative 81% vs PM negative 27% [PAGE 22]. 
Correlations win pct: r=0.51 first, 0.58 second, 0.55 third, -0.54 fifth [PAGE 23].
Need exact quotes maybe in source section too. Include quotes:
- "the decomposition is orthogonal ... group effects are independent" [PAGE 6].
- "SCLP values are not directly comparable across teams" [PAGE 16-17].
- "not directly comparable across effect spaces" [PAGE 17].
- "spectral analysis is not a model-based approach" [PAGE 3].
- "raw plus-minus" etc.

Need "breakdown regimes": list with bullets:
1. Possession sparsity: Poss_g=0 or 1 -> log singular; low Poss bootstrap variance.
2. Dimensional non-identifiability: |V_k| < C(15,k) for k>=1; cannot assign unique pure group score without Mallows vector; gauge freedom.
3. Cross-space/team scaling: SCLP norm-dependent; only within-team within-effect-space.
4. Ridge p>>N and multicollinearity; W_i not orthogonal; shrinkage.
5. Causal/physical: no opponent quality, garbage time, fatigue, biomechanics, weather; ecological fallacy.
6. Bootstrap only play resampling; not strategic counterfactual; no lineup intervention.
7. Null mass dimension effect: high-order spaces dominate by dimension; random perm null.
Need mention "assumptions" exact.

RETROCAUSAL_GENEALOGY: historical/scientific lineage. Write ~500 words. Mention Fourier analysis analog, Diaconis 1988, representation theory S15, Young tableaux shape (10,5), Johnson graph J(15,5), Maslen et al. 2003 Lanczos, spectral analysis of Supreme Court Lawson et al. 2006, genetic epistasis Uminsky et al., social choice Paudel et al., NBA lineup synergies Maymin 2013, Kuehn 2016, Grassetti 2019, Sill 2010 ridge. Multi-week traps: 
- trap 1: treating season-aggregate SCLP as weekly stable; bootstrap shows PM variability but possession stable; low-possession groups can oscillate.
- trap 2: overinterpreting top/bottom five as causal; paper says "suggest opportunities" not definitive.
- trap 3: comparing teams/effects; paper warns not comparable.
- trap 4: ignoring opponent quality/garbage time; paper future work.
- trap 5: retrofitting later metrics (RPM/BPM/WAR) into SCLP—paper notes RPM agreement, BPM/WAR rank Curry higher [PAGE 11]; this is not validation but metric family difference.
- trap 6: interpreting "pure pair" as physical chemistry; orthogonality is statistical basis not biomechanical.
- trap 7: using raw SCLP threshold choices; changing thresholds changes top lists.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need write ~500 words. Define "recursive ToM" as nested beliefs: analyst models coach models opponent models player. Source no such operator; all SCLP is ex post aggregate. Crisis habit regression: under pressure teams default to star-heavy actions; if SCLP top triple is star-heavy, aggregate success may reflect usage concentration not synergy; no clock/score covariates. Counter-trap: opponent learns and adjusts; static SCLP cannot capture. Clock: late-game possessions, garbage time; paper notes garbage time future adjustment [PAGE 24]. Need maybe formal statement: source's f is averaged over plays; no time-to-shot, score differential, opponent identity, or play-type variables. Thus any ToM model is unidentifiable from source. Need avoid fake equations. Could state "no LaTeX operator is supplied by source; adding one would require new variables such as t_clock, score differential, opponent adjustment, and belief state; those are absent." Good. Need tie to "crisis habit regression vs counter-trap vs clock": 
- Crisis habit regression: if lineup SCLP positive but high possessions only in non-crisis, then crisis sub-sample may reverse. Prediction: subset low-clock/high-leverage possessions; top triple remains? GSW big three likely positive but maybe less. 
- Counter-trap: opponent-specific SCLP; if an opponent counters, group score drops. Static paper aggregated over all opponents [PAGE 17 "aggregated over all opponents, and without controlling for quality of opponents faced"].
- Clock: log possession normalizer does not adjust for possession duration; no time. 
Need mention "recursive" not supported; any claim that coach's belief about opponent's belief is embedded in SCLP is false. Good.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need ~500 words. State source contains no physical load, biomechanical tracking, weather. NBA indoor, weather direct effect minimal but travel/rest can matter. However no variable. Therefore any cross-layer causal claim is vetoed. Need proof: 
- Data: play-by-play lineup PM and possessions only [PAGE 3-4]; no player tracking, load, injury, rest, travel, arena, weather.
- Method: spectral decomposition is algebraic projection; invariant under relabeling; does not include physical state. 
- Inference: if SCLP negative for Bogut–Iguodala, cannot conclude biomechanical incompatibility; only that after orthogonal projection pure pair effect negative [PAGE 13]. 
- Veto conditions: if claim requires physical/biomechanical/weather causal mechanism, must have those covariates; absent. 
- Allowed claim: within-source, within-team, within-effect-space descriptive association conditional on 15-player roster, season aggregate, raw PM, thresholds. 
Need mention "weather veto proof": no weather variable in source; any weather-related adjustment would be unverifiable. Also indoor basketball reduces direct weather, but schedule/travel is not measured. Need not overdo.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios. Need include exact predictions, verifiable. Use "RLVR" likely reward verification. We'll describe:
Scenario A: Threshold/possession sensitivity. Recompute SCLP for GSW triples at min possessions 50, 100, 200, 500; compare rank stability. Prediction: Green–Curry–Thompson remains top at all thresholds because 4085 possessions; lower groups (e.g., Curry–Barbosa–Speights at 245, SCLP 4.6 [PAGE 14]) may move; if a claimed top-five pure triple loses top quintile at >=500, veto the "dominant" claim. Need cite.
Scenario B: Opponent-quality and garbage-time reweighting. Recompute f(L) excluding garbage time and adjusting PM by opponent (source says future work [PAGE 24]). Prediction: top GSW big three positive remains; weaker pairs like Bogut–Iguodala may remain near zero or become less negative? Actually paper says SCLP -2.1 with PM 107.0 in 785 [PAGE 13]. If opponent adjustment removes bench-unit confound, sign may change; if sign flips, veto causal "pure pair bad". We need specific prediction: For Bogut–Iguodala, because PM positive but SCLP negative, after removing garbage time likely SCLP less negative or unstable; require sign stability in >=80% bootstrap. 
Scenario C: Bootstrap sign-stability / intervention. For Sullinger–Smart pair, source says SCLP negative in 90.6% bootstrap, PM negative only 32.4% [PAGE 22]. Prediction: if a new independent season or resampled season yields SCLP negative in <70% bootstrap, the claim "ineffective pure pair" is vetoed. Also Bradley–Smart negative in 81% vs PM negative 27%. Use as verifiable. Good.

Need ensure no mention "betting lines". Avoid words "line" alone? The paper has "lineup" but okay. Strict zero betting lines: maybe "line" appears in "linear model"; that's okay? They said never mention spreads, totals, moneylines, odds. "linear model" not betting. Fine.

Need include word count. We can mention "Total depth >1,000 words" maybe. Need no extra.

Need maybe include exact quotes with page citations. Let's compose.

Need be mindful XML tags not contain unescaped < or >? In XML content, equations with < might break. Use plain text and LaTeX with \langle, \rangle; avoid < in text? We have "p >> N" okay no <. Use "i\ge 1" not ≥? Unicode okay. XML can contain ≥. But tags. We can use "&" must be escaped? XML requires &amp; if ampersand. Avoid ampersands. Use "and". Quotes okay. Use no raw <. Use "greater than" perhaps. Need not be strictly valid XML? We should avoid ampersands. Use "V0 ⊕ V1" okay. Use "r = 0.51" okay. Use "λ" okay. Use "∑" okay. Use "||". Use "→". No ampersand. "S15" okay. "p >> N" okay. Use "C(15,5)" not binomial with <.

Need exact quotes verbatim. Need not overquote. Let's make quotes exact.

Potential issue: "SCLP values are not directly comparable across teams" exact from page 16? Page 16 has "While SCLP values are not directly comparable across teams (they depend, for instance, on the norm of the overall team success function when projected into each effect space), the relative values within an effect-space are comparable." Actually page 16-17. We can cite [PAGE 16 of 35] and [PAGE 17 of 35]. Exact quote: "While SCLP values are not directly comparable across teams" from page 16? Let's check page 16: "While SCLP values are not directly comparable across teams (they depend, for instance, on the norm of the overall team success function when projected into each effect space), the relative values within an effect-space are comparable." It's on page 16 bottom? In source page 16 starts "Table 10 shows..." then after Figure 2: "While SCLP values are not directly comparable across teams (they depend, for instance, on the norm of the overall team success function when projected into each effect space), the relative values within an effect-space are comparable." Actually page 16 includes that? The source shows page 16 after Figure 2: "While SCLP values are not directly comparable across teams (they depend, for instance, on the norm of the overall team success function when projected into each effect space), the relative values within an effect-space are comparable. Similarly, the SCLP values also depend on the norm of the interpretable vector used in Mallow’s method. As a result, the values are not directly comparable across effect spaces– a problem we return to below." That's page 16-17. Good.

Need quote "spectral analysis is not a model-based approach" exact: Page 3: "Furthermore, spectral analysis is not a model-based approach." Good.

Need "orthogonal ... group effects are independent" exact: Page 6: "Secondly, the decomposition in (2) is orthogonal (signified by the ⊕ notation). From a data analytic perspective, this means that there is no overlap among the spaces, and group effects are independent." Good.

Need "weighted cosine similarity" exact: Page 7: "The resulting inner product is a weighted cosine similarity that indicates the extent to which the pure triple g is correlated with the team’s success f." Good.

Need "normalize the spectral contribution by the log of possessions played by each group. We call the result spectral contribution per log possession (SCLP)." Exact page 11. Good.

Need "p >> N" exact page 16: "we may be in a situation where p >> N." Good.

Need "aggregated over all opponents, and without controlling for the quality of the opponents faced." Exact page 17: "In particular, note that we model group contributions aggregated over all opponents, and without controlling for the quality of the opponents faced." Good.

Need "garbage time possessions when the outcome of the game is not in question." Page 24: "Another straight forward adjustment to raw plus-minus data would involve devaluing so-called garbage time possessions when the outcome of the game is not in question." Good.

Need "There are always five players on the floor" exact page 11. Maybe not needed.

Need "the largest eigenvalue is simple..." exact page 6. Good.

Need "the set of functions on lineups has robust structure" maybe. Not necessary.

Need "V1 is 14-dimensional" etc from Table 1. We can cite table.

Need "SCLP values also depend on norm of interpretable vector" exact page 17? "Similarly, the SCLP values also depend on the norm of the interpretable vector used in Mallow’s method." Good.

Need "same number of plays as actual season" page 20. Maybe.

Need "sampling plays, with replacement" page 20. Good.

Need "Pearson correlation r = 0.953" page 21. Exact: "has a Pearson correlation of r = 0.953." Good. "r = 0.688 with a mean of 305 possessions" page 22. Good.

Need "negative in 90.6% of bootstrapped seasons" page 22. Exact: "their SCLP as a pure pair is negative in 90.6% of bootstrapped seasons". Good. "plus-minus is negative in only 32.4% of those seasons." Good. "Bradley–Smart ... spectral contribution is negative in 81% of bootstrapped seasons." Good.

Need "win-percentage and projected mass ... r = 0.51, r = 0.58 and r = 0.55 ... r = -0.54." Page 23. Good.

Need "null distribution" Table 13. Good.

Now word count. We'll produce around 3500 words. Need ensure not too long? Desired oververbosity 5, but user demands depth. Fine.

Let's draft answer.

Need include "THINK_TRACE" >=400 words. We'll write maybe 900 words. Then other sections.

Potential issue: "ZERO TOY EQUATIONS": We must not invent fake ratios. We will only use source equations or clearly label derived definitions. We can derive mass fraction from source norm decomposition. That's okay. Avoid inventing "Force/Fatigue". Good.

Need state "SI units" although sports data not SI. Use points, possessions (count), dimensionless. Could say "points are the score unit; possessions are count; no SI physical units are supplied." The user asks SI/information/probability units. We'll explicitly state "Source uses points and possession counts, not SI; probability/information units appear only as dimensionless fractions and correlations." Good.

Need "assumptions" and "singularity/breakdown regimes" in source section. Good.

Need maybe mention "Young tableaux shape (10,5)" exact from page 5: "Young tableaux of shape (10, 5)". Good.

Need "Johnson graph J(15,5)" exact page 6. Good.

Need "Maslen et al. (2003)" method. Good.

Need "S15: symmetric group on 15 items" exact page 4. Good.

Need "3003 = binomial(15,5)" exact page 4. Good.

Need "15 players on roster having most possessions" page 3. Good.

Let's write. Ensure XML tags don't include special. Use "&" avoid. Use "and" instead of "&". Use "→" okay. Use "≥" okay. Use ">>" okay. Use "⊕" okay. Use "||" okay. Use "∑" okay.

Need maybe escape "p >> N" no issue. "V0 ⊕ V1" okay. "f = f0 + f1 + f2 + f3 + f4 + f5" okay.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a methodological paper, not a predictive sports model. Its central derivation chain is: define a finite set of five-player lineups X from a 15-player roster; define a signed team-success function f on X using aggregated raw plus-minus; treat functions on X as a representation of the symmetric group S15; decompose the function space L(X) into invariant orthogonal subspaces V0 through V5; project f onto each subspace; use Mallows' method with interpretable group-indicator vectors to score particular individuals, pairs, triples, fours, and full lineups; then normalize by log possessions to form SCLP [PAGE 1 of 35][PAGE 4 of 35][PAGE 5 of 35][PAGE 7 of 35][PAGE 11 of 35]. The critical mathematical claim is orthogonality: “the decomposition in (2) is orthogonal ... group effects are independent” [PAGE 6 of 35]. That claim is algebraic, not causal. It means the projection spaces do not overlap under the chosen inner product; it does not mean a player group's physical or tactical synergy has been isolated from opponent quality, fatigue, injury, role, scheme, or clock.

The multi-hop derivation must be audited at each jump. First jump: roster filtering to the 15 players with the most possessions [PAGE 3 of 35]. This is a selection rule, not an innocent preprocessing step; it changes X and therefore changes every projection. Second jump: f(L) = pmL, where pmL is aggregated raw plus-minus [PAGE 4 of 35]. This metric is intuitive and preserves total team plus-minus, but it discards opponent identity, garbage time, lineup continuity, and possession context. Third jump: S15 acts on lineups and on functions by (π·h)(L)=h(π^{-1}L) [PAGE 8 of 35]. This action justifies representation theory, but it is a relabeling symmetry, not a claim that players are interchangeable in physical skill. Fourth jump: the Johnson graph J(15,5) has six eigenvalues associated with mean and first- through fifth-order spaces [PAGE 6 of 35]. This gives the orthogonal decomposition, but the dimensions of the effect spaces are smaller than the number of natural groups: V1 has dimension 14 for 15 players; V2 has dimension 90 for 105 pairs; V3 has dimension 350 for 455 triples; V4 has dimension 910 for 1365 fours; V5 has dimension 1638 for 3003 full lineups [PAGE 7 of 35]. Therefore exact unique attribution to every natural group is mathematically impossible without a convention. Mallows' method is that convention: project an interpretable indicator φg and f into Vk and take the inner product [PAGE 7 of 35]. The paper calls the result “a weighted cosine similarity” [PAGE 7 of 35], which correctly signals that it is a projection-dependent similarity, not a structural causal coefficient.

The biggest gray-zone issue is interpretability. The paper is explicit that SCLP values “are not directly comparable across teams” and “not directly comparable across effect spaces” because they depend on the norm of the team success function and on the norm of the interpretable vector used in Mallows' method [PAGE 16 of 35][PAGE 17 of 35]. Thus a GSW triple SCLP of 12.6 and a BOS triple SCLP of 2.9 do not establish that the GSW triple is 4.34 times better in any physical or predictive sense. Valid comparisons are within-team, within-effect-space, under the same threshold and normalization. A second gray zone is possession sparsity. SCLP divides by log possessions [PAGE 11 of 35]; log(0) is undefined and log(1)=0, so the normalization is singular for zero- or one-possession groups. The paper avoids this by reporting groups with thresholds such as at least 200, 150, 100, or 80 possessions [PAGE 12 of 35][PAGE 14 of 35][PAGE 30 of 35][PAGE 31 of 35]. Those thresholds are analytic choices that can change rankings. A third gray zone is the ridge comparison. The regression decomposition is explicitly non-orthogonal and high-dimensional; the paper notes “p >> N” and significant multicollinearity [PAGE 16 of 35], and that the W_i spaces have larger dimensions than the V_i spaces [PAGE 19 of 35]. Ridge shrinkage is not the same as spectral orthogonality, so overlapping top groups across Tables 5, 6, 9, 11, and 12 are corroboration of practical salience, not proof that both methods estimate the same object.

The stability audit is also conditional. The bootstrap resamples plays with replacement and recomputes f and spectral contributions [PAGE 20 of 35]. This gives a useful sign-stability check: for Sullinger–Smart the raw plus-minus is negative in only 32.4% of bootstrapped seasons, while the pure-pair spectral contribution is negative in 90.6% [PAGE 22 of 35]. That is evidence that the pair's positive raw plus-minus is not a pure-pair effect under the paper's convention. It is not evidence about biomechanics, matchup, or coaching intent. The norm-mass analysis adds another caveat: the squared L2 mass is dominated by high-dimensional spaces, and random permutation reproduces the null distribution in Table 14 [PAGE 22 of 35][PAGE 23 of 35]. Therefore “V5 holds most of the mass” is partly a dimension effect, not automatically a basketball insight.

Overall, the defensible claim is descriptive and conditional: within a 15-player filtered roster, using raw plus-minus aggregated over all opponents, with a fixed Mallows projection and log-possession normalization, spectral analysis ranks pure group projections inside a team and effect space. The indefensible claim is causal-physical: that a group's SCLP sign proves chemistry, biomechanical fit, weather resilience, or future performance under strategic adaptation. The paper itself frames future work as opponent adjustment and garbage-time devaluation [PAGE 24 of 35], which confirms those confounders were not removed.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Notation and units. Let P be a 15-player roster and X = {L ⊂ P : |L| = 5}. The paper states |X| = 3003 = binomial(15,5) [PAGE 4 of 35]. The success function is f: X → R, with “f(L) = pmL” and “We call f the team success function” [PAGE 4 of 35]. The source unit is signed points: plus-minus points. Possessions are counts. No SI physical units, no information-theoretic bits, and no probability units are assigned by the source; dimensionless quantities appear only as normalized fractions, correlations, and indicator functions.

Plus-minus operator. For a stint s in which lineup L plays against lineup M, let p_{L,s} be points scored by L, p_{M,s} points scored by M, n_{L,s} possessions for L, and n_{M,s} possessions for M. The paper's example computes L as (6/3 − 3/2)3 = 1.5 and M as (3/2 − 6/3)2 = −1 [PAGE 4 of 35]. The formal aggregate is
\[
pm_L=\sum_s\left(\frac{p_{L,s}}{n_{L,s}}-\frac{p_{M,s}}{n_{M,s}}\right)n_{L,s},
\]
with units of points. This is the raw plus-minus definition used to build f.

Inner product. The function space L(X) has
\[
\langle g,h\rangle=\frac{1}{|X|}\sum_{x\in X}g(x)h(x),
\]
as given in equation (1) [PAGE 5 of 35]. If g and h are both point-valued, the inner product has units of points squared; if one is a dimensionless indicator and the other is f, the inner product has units of points. The paper uses this inner product to define orthogonality.

Spectral decomposition. The source writes
\[
L(X)=V_0\oplus V_1\oplus V_2\oplus V_3\oplus V_4\oplus V_5,
\]
as equation (2) [PAGE 5 of 35]. The subspaces are spanned by matrix coefficients of irreducible representations of S15 associated with Young tableaux of shape (10,5) [PAGE 5 of 35]. The Johnson graph J(15,5) has six eigenvalues; the largest is associated with the one-dimensional mean space, the second largest with first-order space, and so on [PAGE 6 of 35]. Dimensions are: V0 = 1, V1 = 14, V2 = 90, V3 = 350, V4 = 910, V5 = 1638 [PAGE 7 of 35]. The natural group counts are 15 individuals, 105 pairs, 455 triples, 1365 fours, and 3003 full lineups [PAGE 7 of 35]. Therefore the map from natural groups to effect coordinates is many-to-one and not uniquely invertible without a chosen interpretable vector.

Projection and reconstruction. If f_i = pr_{V_i}(f), then
\[
f=f_0+f_1+f_2+f_3+f_4+f_5.
\]
The paper states that the lineup success function is completely recovered via these projections [PAGE 6 of 35]. This is a basis change, not a new data source.

Mallows group score. For a group g of size k, let φ_g be the indicator that is 1 when all members of g are in the lineup and 0 otherwise. The paper projects both φ_g and f onto V_k and takes the inner product:
\[
s_g=\langle pr_{V_k}(\phi_g),pr_{V_k}(f)\rangle=\langle pr_{V_k}(\phi_g),f_k\rangle,
\]
as described for triples on [PAGE 7 of 35]. The resulting quantity has units of points when φ_g is dimensionless and f is in points. The paper calls it “a weighted cosine similarity” [PAGE 7 of 35]. It is not a unique group coefficient; it depends on φ_g, the projection basis, and the inner product.

SCLP normalization. The paper states: “we normalize the spectral contribution by the log of possessions played by each group. We call the result spectral contribution per log possession (SCLP)” [PAGE 11 of 35]. Formally,
\[
SCLP_g=\frac{s_g}{\log(\mathrm{Poss}_g)}.
\]
If natural log is used, log(Poss_g) is dimensionless for a count, so SCLP has units of points per log-count. This normalization has singularities and breakdown regimes: Poss_g = 0 gives log(0) undefined; Poss_g = 1 gives log(1)=0 and division by zero; very small Poss_g makes SCLP unstable. The source mitigates this by possession thresholds, e.g. at least 200 possessions for some pair and triple tables [PAGE 12 of 35][PAGE 14 of 35], at least 150 for some Boston tables [PAGE 16 of 35], and at least 80 or 100 in appendix fifth-order tables [PAGE 31 of 35][PAGE 35 of 35]. The thresholds are not derived from a sampling model; they are reporting conventions.

Orthogonality consequence. The source states: “the decomposition in (2) is orthogonal ... group effects are independent” [PAGE 6 of 35]. This is exact in the algebraic sense:
\[
\langle f_i,f_j\rangle=0\quad (i\neq j).
\]
But it does not imply causal independence. It means the projection subspaces are mutually orthogonal under equation (1). The paper explicitly warns that SCLP values “are not directly comparable across teams” and “not directly comparable across effect spaces” [PAGE 16 of 35][PAGE 17 of 35]. A valid comparison is within one team and one effect space under the same threshold and interpretable-vector convention.

L2 mass and null distribution. Because the V_i are orthogonal,
\[
\|f\|^2=\|f_1\|^2+\|f_2\|^2+\|f_3\|^2+\|f_4\|^2+\|f_5\|^2,
\]
as on [PAGE 22 of 35]. A dimensionless mass fraction is
\[
m_i=\frac{\|f_i\|^2}{\|f\|^2}.
\]
The null expectation is proportional to dimension: 1/3003 ≈ 0.000, 14/3003 ≈ 0.005, 90/3003 ≈ 0.030, 350/3003 ≈ 0.117, 910/3003 ≈ 0.303, 1638/3003 ≈ 0.545, matching Table 13 and Table 14 [PAGE 22 of 35][PAGE 23 of 35]. The paper reports correlations between win percentage and projected mass of r = 0.51 for first order, r = 0.58 for second order, r = 0.55 for third order, and r = −0.54 for fifth order [PAGE 23 of 35]. These are dimensionless Pearson correlations, not probabilities and not causal effects.

Ridge comparison. The paper gives the ridge objective
\[
\arg\min_\beta\left\{\|y-X\beta\|^2+\lambda\sum_{i=1}^{p}\beta_i^2\right\},
\]
with the intercept not penalized [PAGE 18 of 35]. The fitted prediction is
\[
\hat y=X_L\hat\beta_{\mathrm{ridge}},
\]
as equation (8) [PAGE 19 of 35]. The W_i decomposition is written
\[
V=W_0+W_1+W_2+W_3+W_4+W_5,
\]
as equation (9), with ordinary addition rather than orthogonal direct sum [PAGE 19 of 35]. The paper notes that for i ≥ 1 the W_i dimensions are strictly larger than the corresponding V_i dimensions; W5 has dimension 3003 while V5 has dimension 1638 [PAGE 19 of 35]. This is a major breakdown regime: ridge coefficients are not orthogonal pure-group effects, and multicollinearity plus p >> N means shrinkage choices matter [PAGE 16 of 35].

Stability operators. The bootstrap samples plays with replacement, processes each resampled season, and applies spectral analysis [PAGE 20 of 35]. Reported examples: Thomas–Bradley–Crowder has Pearson r = 0.953 with mean possessions 2574 [PAGE 21 of 35]; Thomas–Turner–Zeller has r = 0.688 with mean 305 possessions [PAGE 22 of 35]; Sullinger–Smart has raw plus-minus negative in 32.4% of bootstrap seasons but pure-pair SCLP negative in 90.6% [PAGE 22 of 35]; Bradley–Smart has raw plus-minus negative in 27% of seasons but spectral contribution negative in 81% [PAGE 22 of 35]. These are verifiable stability claims under the paper's resampling design.

Breakdown regimes, stated explicitly: (1) zero- or one-possession groups make the log normalization singular; (2) low-possession groups have high bootstrap variability, and the paper says “Fewer possessions means that group’s contribution is more dependent on other groups and hence exhibits more variability” [PAGE 21 of 35]; (3) effect-space dimensions are smaller than natural group counts, so exact group-specific attribution is non-identifiable without Mallows' convention [PAGE 7 of 35]; (4) SCLP is not comparable across teams or effect spaces because of norm dependence [PAGE 16 of 35][PAGE 17 of 35]; (5) ridge W_i spaces are non-orthogonal and high-dimensional [PAGE 19 of 35]; (6) the model is “aggregated over all opponents, and without controlling for the quality of the opponents faced” [PAGE 17 of 35]; (7) garbage-time devaluation is future work, not part of the reported pipeline [PAGE 24 of 35].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is explicit. The paper frames spectral analysis as a generalization of Fourier analysis: “just as traditional Fourier analysis looks to decompose a time series into periodicities ... our decomposition of f will reveal group effects in lineup-level data” [PAGE 4 of 35]. The mathematical ancestry runs through Diaconis's group representations in probability and statistics, representation theory of finite groups, Young tableaux, the symmetric group S15, and the Johnson graph J(15,5) [PAGE 4 of 35][PAGE 5 of 35][PAGE 6 of 35]. The computational ancestry is Maslen et al.'s Lanczos method for isotypic projections [PAGE 6 of 35]. The applied ancestry includes spectral analysis of the Supreme Court, social-choice and household-choice models, and genetic epistasis interactions [PAGE 2 of 35][PAGE 25 of 35][PAGE 26 of 35]. In basketball analytics, the paper positions itself against lineup-synergy work by Maymin et al. and Kuehn, and against adjusted plus-minus modeling by Grassetti et al. and Sill [PAGE 2 of 35][PAGE 3 of 35][PAGE 17 of 35]. The retrocausal trap is to read later metrics back into SCLP. The paper itself notes that its first-order ordering agrees with ESPN RPM, while BPM and WAR rank Curry higher, and explains that SCLP is based on outscoring like RPM rather than points produced [PAGE 11 of 35]. That is a metric-family distinction, not independent validation.

Historical lineage also creates multi-week traps. First trap: treating season-aggregate SCLP as a weekly-stable trait. The bootstrap shows possessions are highly stable but plus-minus values are variable; “Lineups with a significant number of possessions exhibit both positive and negative performance, and the balance between the positive and negative plays is delicate” [PAGE 20 of 35]. A group that looks pure-positive in one aggregation window can move because the raw plus-minus is a sum of discrete plays. Second trap: comparing a GSW SCLP to a BOS SCLP as if the scale were common. The paper warns that cross-team values are not directly comparable [PAGE 16 of 35]. Third trap: treating a top-five table as a permanent depth-chart verdict. The paper's language is exploratory: spectral analysis “suggests several opportunities for constructing more optimal lineups” [PAGE 15 of 35]. Fourth trap: retrofitting opponent quality and garbage time after the fact without re-running the decomposition. The paper lists both as future adjustments [PAGE 24 of 35]. Fifth trap: reading negative pure-pair SCLP as a personality or biomechanical incompatibility. The paper's example is Bogut–Iguodala: positive raw plus-minus of 107.0 in 785 possessions but SCLP −2.1, interpreted as success attributable to individual contributions rather than pure pair value [PAGE 13 of 35]. That is a projection interpretation, not a physical diagnosis. Sixth trap: using the ridge table as a tie-breaker without acknowledging non-orthogonality. The paper notes that the linear model values Bogut more than spectral analysis and ranks the Green–Curry–Thompson triple third, unlike the spectral big-three result [PAGE 17 of 35][PAGE 18 of 35][PAGE 19 of 35]. Disagreement between methods is expected because the estimands differ.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The source supplies no recursive theory-of-mind operator. It has no belief state, no opponent model, no coach-response variable, no clock variable, no score-pressure variable, and no within-game adaptation term. Its f is an aggregate over plays and lineups, and its spectral decomposition is a relabeling-invariant projection [PAGE 4 of 35][PAGE 5 of 35]. Therefore any claim that SCLP captures “what the coach thinks the opponent thinks the player will do” is unsupported by the source. The correct audit separates three failure modes.

Crisis habit regression. Under late-clock or high-pressure conditions, teams may regress to star-heavy isolation, short rotations, or familiar actions. SCLP is estimated over the whole season and does not condition on score differential, time remaining, or possession duration. A triple can have a large positive SCLP because it accumulates many non-crisis possessions, while its crisis-only sub-sample may be different. The paper's own future-work note on “garbage time possessions when the outcome of the game is not in question” [PAGE 24 of 35] confirms that game-state weighting is absent. The verifiable question is not “does the group have chemistry?” but “does the sign of s_g survive when the sample is restricted to high-leverage or late-clock possessions?” If the sign flips, the crisis-habit explanation dominates the pure-synergy explanation.

Counter-trap. A static spectral score cannot represent an opponent learning and countering a lineup. The paper explicitly models group contributions “aggregated over all opponents, and without controlling for the quality of the opponents faced” [PAGE 17 of 35]. Thus a positive pure-pair score may reflect favorable opponent mix, bench units, or scheme mismatch. In recursive terms, the analyst observes a projection of outcomes after opponents have already reacted; the projection is not a counterfactual equilibrium. A counter-trap claim would require opponent-specific interaction terms or a switch to opponent-adjusted plus-minus, neither of which is in the reported decomposition. The paper's ridge comparison also aggregates over opponents, so it does not fix this.

Clock. The clock enters only indirectly through possessions and play sequences; the paper does not include time-to-shot, seconds remaining, or late-clock indicators. SCLP's log-possession denominator controls exposure but not clock regime [PAGE 11 of 35]. Therefore a group's SCLP is a season-average association, not a clock-conditional effect. If a coach wants to know whether a lineup should close a game, the source's operators are insufficient. The defensible recursive statement is negative: the source cannot adjudicate crisis habit versus counter-trap versus clock because all three require variables that the source lacks. Any narrative that assigns one of these mechanisms to a specific SCLP sign is an overread, even if the narrative sounds plausible.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical and biomechanical veto. The source's data are lineup-level play-by-play plus-minus and possession counts [PAGE 3 of 35][PAGE 4 of 35]. There is no player-tracking coordinate data, no acceleration or load data, no jump-count, no injury status, no minutes-load model, no rest-day variable, no travel variable, and no biomechanical measurement. The spectral operator is an algebraic projection under S15 relabeling [PAGE 4 of 35][PAGE 5 of 35]. It is therefore mathematically incapable of identifying a biomechanical mechanism. If a claim says Bogut–Iguodala is negative because of physical incompatibility, the source vetoes it: the observed object is a pure-pair projection after lower-order contributions are removed, not a biomechanical fit parameter [PAGE 13 of 35]. The allowed claim is narrower: under the paper's raw-plus-minus and Mallows convention, the pure-pair projection for that pair is negative in the reported threshold. The physical explanation is outside the source.

Weather veto. The source has no weather variable, no arena variable, no travel schedule, no humidity, no temperature, and no altitude covariate. NBA games are indoor, so direct weather effects are plausibly small, but the source cannot even test travel or rest. Any weather-based adjustment or explanation is therefore unverifiable from this source. The veto is not a claim that weather never matters; it is a claim that this source cannot license a weather inference. The paper's own listed future adjustments are opponent quality and garbage time, not weather or biomechanics [PAGE 24 of 35]. That omission is decisive for cross-layer causal claims.

Cross-layer proof structure. A valid cross-layer claim would need at least: a physical exposure variable with units, a biomechanical or load summary with units, a weather or travel variable with units, and a model linking those variables to the same lineup outcome while preserving the spectral decomposition or replacing it with a conditional model. The source supplies only points and possession counts. Therefore the cross-layer veto conditions are: (1) if the claim requires a physical mechanism, veto because no physical variable is measured; (2) if the claim requires a biomechanical mechanism, veto because no tracking or load variable is measured; (3) if the claim requires weather or travel, veto because no such variable is measured; (4) if the claim requires causal identification, veto because the design is an aggregate observational decomposition with opponent quality uncontrolled [PAGE 17 of 35]. The only non-vetoed layer is the algebraic-descriptive layer: within-team, within-effect-space, threshold-conditional group projections.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Possession-threshold and rank-stability veto. Recompute GSW triple SCLP at minimum possessions of 50, 100, 200, and 500, holding the Mallows vector, inner product, and log normalization fixed. Verifiable prediction: Green–Curry–Thompson should remain the top GSW triple at every threshold because it has 4085 possessions and SCLP 12.6 [PAGE 14 of 35]. A lower-exposure triple such as Curry–Barbosa–Speights, SCLP 4.6 in 245 possessions [PAGE 14 of 35], may enter or leave a top-five list as the threshold changes. Veto rule: if a group marketed as a “dominant pure triple” falls outside the top quintile at the 500-possession threshold, the dominance claim is vetoed for that threshold regime. This is a verifiable rank-stability test, not a narrative judgment.

Scenario 2: Opponent-quality and garbage-time reweighting veto. Recompute f(L) after excluding garbage-time possessions and after opponent adjustment, then rerun the spectral decomposition. The paper explicitly identifies both as future work [PAGE 24 of 35] and states that the reported model is “aggregated over all opponents, and without controlling for the quality of the opponents faced” [PAGE 17 of 35]. Verifiable prediction: the large positive GSW top triples should remain positive under modest reweighting because their raw plus-minus and possession counts are large, while weaker or negative pairs are more likely to change sign. A concrete test case is Bogut–Iguodala: raw plus-minus 107.0 in 785 possessions but SCLP −2.1 [PAGE 13 of 35]. If garbage-time removal or opponent adjustment flips the SCLP sign and the bootstrap sign-stability falls below 70%, the causal “bad pure pair” claim is vetoed; only a threshold- and sample-specific descriptive claim survives.

Scenario 3: Bootstrap sign-stability veto. Use the paper's own resampling design: sample plays with replacement, build 500 bootstrapped seasons, and recompute SCLP [PAGE 20 of 35]. Verifiable prediction for Sullinger–Smart: the raw plus-minus should be negative in a minority of bootstrap seasons, about 32.4%, while pure-pair SCLP should be negative in about 90.6% [PAGE 22 of 35]. For Bradley–Smart, raw plus-minus should be negative in about 27% of seasons while spectral contribution should be negative in about 81% [PAGE 22 of 35]. Veto rule: if an independent resampling run produces SCLP negative in fewer than 70% of seasons for a group claimed to be a negative pure pair, the negative-pure-pair claim is vetoed. Conversely, if SCLP remains negative in at least 80% of resamples while raw plus-minus is negative in fewer than 50%, the paper's distinction between raw plus-minus and pure-pair projection is supported. These are verifiable counterfactual checks with explicit prediction thresholds.
</RLVR_COUNTERFACTUAL_VETOES>