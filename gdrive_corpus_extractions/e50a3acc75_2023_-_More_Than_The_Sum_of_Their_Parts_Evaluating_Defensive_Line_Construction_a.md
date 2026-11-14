---
source: "2023 - More Than The Sum of Their Parts Evaluating Defensive Line Construction and Deployment - Shah et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2023"
pages: 9
model: deepseek/deepseek-v4.1-flash-1017
words: 6277
---

<NATIVE_REASONING>
We need answer with exact XML sections, >=1000 words total, THINK_TRACE >=400. Need no betting lines/odds. Need use source citations [PAGE N] and verbatim quotes. Topic: defensive line construction/deployment paper. Need deep derivation, gray-zone audit, formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Retrocausal genealogy historical/scientific lineage & multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Must be careful: source not sports betting; but GSE/GSI frontier? Need answer as research analysis. No spreads etc. Zero betting lines. Need maybe discuss model operators. Need cite exact [PAGE N] markers and verbatim quotes. Need formal equations. Need "units" SI/information/probability. Equations from paper: PashRushPPS = Pass Rush Total Points/(Pass Rush Snaps+70). RunDefPPS = Run Defense Total Points/(Run Defense Snaps+70). EPAoP residual. Mixture density p(y|x,l). Probability constraint Pr[EPAoP < t | l, G_i] < δ. Optimal lineup max E[EPAoP | l, G_i]. Weights w_i = S_i^2 / Σ_j S_j^2. Player score p_{j,s} = Σ_i w_i(α_i p_{j,p} + (1-α_i)p_{j,r}) 1(G_i ∈ G'_{p_j,c}). LP constraints. Need units: points/snap, probability dimensionless, EPA points, variance points^2, weights dimensionless. Snap prior 70 snaps dimensionless count. Need note pass rush total points units points; denominator snaps. "PashRushPPS" typo? Page 3 says "PashRushPPS (Pass Rush Points Per Snap)" and "Pash Rush Total Points Pass Rush Snaps+70" due formatting: \frac{Pass Rush Total Points}{Pass Rush Snaps+70}. Need quote exact. Cite [PAGE 3]. Need maybe mention "noise-adjusted" prior.

Need craft detailed sections. Need satisfy sections exact XML. Need include >=1000 words. We can write ~1800-2500. Need avoid "odds", "spread", "moneyline", "betting". Use "score" but not betting lines. Need not mention wagering. Fine.

Need maybe phrase "GSE + GSI" maybe use "gray-zone audit" "counterfactual vetoes". Need define terms. Ensure no fake ratios. Formal LaTeX. For source operators and equations. Need include page citations and verbatim quotes. Need exact quotes from source: Page 2: "the value of a given defensive line unit is more than the sum of the individual players". Page 3 metric quote. Page 3 "PashRushPPS ... computed as Pash Rush Total Points Pass Rush Snaps+70". Page 5 constraints: "we will require that we play at least three defensive linemen, and at least one lineman from C0 or C1". Page 6 "Pr[EPAoP < t|l, Gi] < δ". Page 6 weight equation. Page 6 LP. Page 8 result. Page 9 benefits. Need cite exact. Need not overquote huge. Verbatim in quotes. Good.

Need deep multi-hop derivation. Think trace: articulate model pipeline, assumptions, hidden failure modes. Discuss clustering as quantization, MDN conditional distribution, scheme selection as robust optimization under chance constraint, LP player selection, deployment sorting by situational score. Gray-zone audit: cluster stability; combine data stale; player attribution error; MDN calibration; chance constraint threshold t and delta arbitrary; situational weights variance; "terrible play" defined EPAoP < t; the model uses residual after RF; opponent adjustments absent; no tracking; limited one season; roster constraints. Singularity/breakdown regimes: denominator snaps+70 never singular but small snaps shrink to prior; if δ→0 infeasible; if t very low constraint trivial; if |M| combinatorial explosion; if cluster multiset empty or not enough players; if MDN density p(y|x,l) misspecified; if S_i=0 weights undefined; if all S_j=0; if α_i binary; LP integrality; salary/roster infeasible; deployment ties. Need state exact singularity/breakdown regimes.

Retrocausal genealogy: historical lineage: Sabermetrics/analytics, EPA, player tracking, NFL combine, clustering, mixture density networks (Bishop 1994), random forests, linear programming, robust/chance-constrained optimization, scheme-first vs player-first. Multi-week traps: one-season overfit, combine proxies, cluster leakage, residual confounding, "optimal" lineup not causal, salary cap data errors, rookie deals artificial, missing opponent quality, deployment not actual. Need mention weeks? "multi-week traps" likely from prompt: historical/scientific lineage & multi-week traps. We can list traps as longitudinal evaluation issues: week-to-week variance, roster attrition, opponent adaptation, data drift, contract changes. Need not betting.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need interpret: if opponents/coaches adapt, model's deployment becomes predictable; crisis habit regression (fall back to base 4-3/3-4 under pressure) vs counter-trap (bait model into exploitable line archetype) vs clock (situational context/time remaining/score). Need link to paper scenarios: third and long redzone, second and short middle. Need argue model should include opponent beliefs and counterfactuals. Use nested beliefs: model believes p(y|x,l); opponent believes model's l; model should choose robust l against opponent best response. Need formal? Could include game-theoretic minimax: l* = argmax_l min_{o∈O} E[EPAoP | l, x, o]. But no source? It's our extension. State extension not source. Units points. Need be clear.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need prove that scheme choices can be vetoed by physical constraints: player mass/inertia, force, acceleration, ground reaction, turf, weather. Formal: available force F = m a? Need avoid toy equations. Use Newtonian biomechanics: F_net = m a, impulse J=∫F dt = Δp; traction limit F_t ≤ μ_s N; power P=F·v; fatigue? Avoid fake ratios. Units N, kg m/s^2, impulse N·s, pressure Pa, etc. Weather: rain reduces μ, wind affects drag F_d = 0.5 ρ C_d A v^2 (N). Cold turf stiffness. Need "veto proof": if required lateral acceleration a_req > μ_s g (neglect aero), player cannot execute edge rush/contain; if C0 (lighter interior 294 lb) vs C1 (316 lb) etc. Need source table values [PAGE 4]. Use these as physical proxies. Weather/turf can veto "get quicker" C4 edge deployment if traction insufficient. Need proof via inequality. Need mention not fake ratios. Use exact equations with assumptions. Need maybe "physical/biomechanical/weather veto proof" as a formal conditional impossibility: If required traction exceeds available, all schemes needing that acceleration have zero feasible probability; thus model's conditional distribution p(y|x,l) should truncate or chance constraint fails. Cite page 4 table cluster weights/40 times. Need note 40-yard dash is proxy, not force measurement. Use unit conversions? 294 lb = 133.4 kg, 316 lb = 143.3 kg, 254 lb = 115.2 kg, 266 lb = 120.7 kg. 4.68 s 40 yd = 36.576 m; avg speed 7.82 m/s but not acceleration. Could include. Need avoid overcalculations? Fine.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement learning with verifiable rewards? We can present scenarios as counterfactual tests that veto model claims if prediction fails. Need 3 verifiable scenarios with predictions. Need no betting. Example:
1. Cluster stability veto: Recompute K-means with different seeds/distance on same 2022 data; predict at least one cluster reassigns >10% of players or archetype {C0,C0,C3,C4,C4,C4} changes. Verify via adjusted Rand index and lineup multiset. If ARI >0.9 and same multiset, model's robustness claim survives; else veto.
2. Chance-constraint calibration veto: On held-out 2023 plays for each Gi,l, estimate Pr[EPAoP<t] with Bayesian interval; predict some selected l_i,o violates δ=0.1 due to MDN miscalibration or sample size. Verify empirical violation rate. If >0.1 with CI, veto.
3. Physical traction veto: For wet/turf games, track player acceleration or use RFID; predict C4-heavy edge deployment yields lower pressure rate or higher EPAoP than C0/C1-heavy when μ reduced. Verify with tracking data. If no degradation, physical veto not active. Need "RLVR" maybe reward: reward = 1 if prediction verified. Include predictions and thresholds.

Need ensure >=1000 words. We'll write long. Need include exact XML sections. No markdown? XML tags. Inside text can have LaTeX. Fine.

Need maybe mention "ZERO BETTING LINES" no mention. Avoid "odds" entirely? The word "odds" not use. "probability" okay. "score buckets" okay. No "bet". Good.

Need "ZERO TOY EQUATIONS" — So don't invent fake ratios. But can include formal LaTeX equations from source and extensions. For extensions, state assumptions and breakdown. Avoid arbitrary ratios like "Force/Fatigue". We can include Newtonian equations; these are formal physics, not toy. For game-theoretic extension, formal minimax with units points. Fine. Need no fake ratios. Maybe avoid "situational score" ratio? It's from paper equation; fine.

Need "source pages provided cite exact [PAGE N] markers and verbatim quotes." We must include quotes. Use quotes in sections. Need exact quotes. Let's ensure quotes verbatim with punctuation. Page 3 quote: "PashRushPPS (Pass Rush Points Per Snap): Noise-adjusted per-snap pass rush effectiveness metric, computed as Pash Rush Total Points Pass Rush Snaps+70 ." The PDF extraction has line break: "computed as Pash Rush Total Points
Pass Rush Snaps+70 ." We can quote with slash? Verbatim maybe: "computed as Pash Rush Total Points Pass Rush Snaps+70" but that loses fraction. Better quote exact text as provided? They want exact [PAGE N] markers and verbatim quotes. We can quote: "PashRushPPS (Pass Rush Points Per Snap): Noise-adjusted per-snap pass rush effectiveness metric" [PAGE 3]. And "RunDefPPS (Run Defense Points Per Snap): Noise-adjusted per-snap run defense effectiveness metric" [PAGE 3]. For equation, present LaTeX and cite. Quote "we add 70 snaps of “average” play as a prior in order to discount extreme performances observed over small windows and reward players who performed efficiently across a large number of snaps." [PAGE 3]. Good.

Page 4 table quote maybe "C0 was primarly made up of lighter, faster, interior linemen." [PAGE 4] (typo primarly) exact. "C1 was primarly made up of larger, slower (generally run-stopping) interior defensive linemen." [PAGE 4]. Good.
Page 5 quote: "we will require that we play at least three defensive linemen, and at least one lineman from C0 or C1" [PAGE 5].
Page 6 quote: "Define Li,j = {l ∈Lj| Pr[EPAoP < t|l, Gi] < δ}" [PAGE 6]. Exact maybe includes subscript. We can quote. "Define the optimal lineup li,j = maxLi,j E[EPAoP|l, Gi]" [PAGE 6].
Page 6 weight quote: "wi = S2 i P S2 j" but formatting. We can quote "Let Si be the observed standard deviation of EPA on all plays in situation Gi. Then, wi =..." [PAGE 6].
Page 8 result quote: "The result of the scheme selection model was {C0, C0, C3, C4, C4, C4}." [PAGE 8].
Page 9 quote: "It captures the additional value generated by having certain combinations of players working together on the field at once." [PAGE 9]. Good.

Need maybe mention "PAGE 1" abstract quote "more than the sum of the individual players" is page 2 actually. Page 2 says "the value of a given defensive line unit is more than the sum of the individual players". Use [PAGE 2]. Page 1 title/abstract. Good.

Need structure:
<THINK_TRACE> ... >=400 words. Multi-hop derivation. Include perhaps numbered hops: H1 data -> H2 clustering -> H3 EPAoP -> H4 MDN -> H5 scheme optimization -> H6 LP -> H7 deployment. Gray-zone audit. Mention hidden assumptions and singularities. Cite.
<SOURCE_OPERATORS_AND_EQUATIONS> formal equations. List with units and citations. Include assumptions and exact singularity/breakdown regimes. Maybe table-like list. Need include all main equations. Use LaTeX. Include probability. Include LP. Need not overlong but detailed.
<RETROCAUSAL_GENEALOGY> lineage and traps.
<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock. Include formal extension minimax and nested beliefs.
<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof. Include equations and inequalities. Use cluster table. Cite page 4.
<RLVR_COUNTERFACTUAL_VETOES> 3 scenarios.

Need ensure total >=1000. Let's draft ~2500 words maybe. Need careful XML not malformed. Use &? Avoid raw ampersand? XML text with & must be escaped? Usually not strict? We should avoid ampersand. Use "and". Use < in text? Must escape as &lt; if in XML. But equations contain <, >. We need escape `<` as `&lt;` and `>` maybe not necessary but can. In XML content, raw < would be interpreted as tag. We need escape all less-than signs. Use `&lt;`. Also `&` in LaTeX? Avoid `&` unless escaped. Use \le instead of < maybe okay? `<` still. Use `\lt`? LaTeX `\lt` not standard? Use `&lt;` in text. In equations, use `\Pr[\mathrm{EPAoP} &lt; t \mid l, G_i] &lt; \delta`. Need escape ampersand if matrix? Avoid. Use `\mid`. For `\sum_j` no &. Good. For `\le` no <. For `\ge` no >. For `\rightarrow` okay. For `\in` okay. For `\cdot` okay. For `\{` okay. For `\}` okay. For `%` okay. But `%` in LaTeX comment? In XML no issue. But in text `%` okay. Need not use `<` except escaped. Use `&lt;`. For `>` raw maybe okay but XML parser may accept? `>` is allowed in text. But for symmetry use `&gt;` maybe. In equations, `&gt;`? If within text, okay. But in LaTeX equation, `&gt;` would render as >? In plain XML content, entity resolves. Fine. But if we write `\Pr[...] &lt; \delta` it is text. Good.

Need avoid raw `&` in "P & L" etc. Use "and". Avoid `&` in equations. Fine.

Need use exact XML tags. Could include <THINK_TRACE> text with line breaks. Fine.

Need not mention "GSE + GSI" maybe no.

Let's plan detailed content.

THINK_TRACE (>=400 words):
- Start: The paper's claim is scheme-first defensive line valuation. Multi-hop derivation: raw SIS charting gives players on field, technique, outcomes; combine data gives physical attributes; K-means quantizes player types C0-C4; random forest predicts EPA from game state and formations; residual EPAoP = observed - predicted; MDN models p(y|x,l) where l is multiset of clusters; scheme selection enumerates valid multisets with constraints (at least 3 DL, at least one C0/C1) and chance constraint Pr[EPAoP<t|l,G_i]<δ; chooses l_i,j maximizing E; weights situations by variance; player LP matches clusters and maximizes weighted pass/run scores; deployment sorts by situational score.
- Gray-zone audit: The model is conditional, not causal. EPAoP residual may still carry player quality and opponent quality; cluster labels are coarse; MDN may be miscalibrated; chance constraint threshold t and δ are policy parameters not estimated; one-season 2022 data; combine stale; no tracking; "terrible play" operationalization; salary cap and rookie constraints. Need mention exact singularity regimes: denominator snaps+70 avoids zero but small samples shrink to prior; if δ=0 infeasible; if |M| grows combinatorially; if S_i=0 weights undefined; if no valid lineup; if LP infeasible; if enough players? Good.
- Maybe "the optimal multiset result {C0,C0,C3,C4,C4,C4} is a point estimate, not a stable law." Quote page 8. Good.

SOURCE_OPERATORS_AND_EQUATIONS:
- Data and metrics:
  \[
  \mathrm{PassRushPPS}_j = \frac{\mathrm{PassRushTotalPoints}_j}{\mathrm{PassRushSnaps}_j + 70}.
  \]
  Units: points/snap; +70 snaps prior. Quote page 3.
  \[
  \mathrm{RunDefPPS}_j = \frac{\mathrm{RunDefTotalPoints}_j}{\mathrm{RunDefSnaps}_j + 70}.
  \]
- EPAoP:
  Fit RF \(f(x)\) to predict EPA; \(y = \mathrm{EPA} - \hat{\mathrm{EPA}}\). Units points.
- MDN:
  \(p(y\mid x,l)\) probability density per point (units points^{-1}); conditional distribution. Assumption: density model correctly specified; line archetype l is multiset of cluster labels.
- Chance constraint and optimal lineup:
  \(L_{i,j} = \{l\in L_j \mid \Pr[\mathrm{EPAoP}&lt;t \mid l,G_i] &lt; \delta\}\). Units: t points, δ dimensionless probability.
  \(l_{i,j} = \arg\max_{l\in L_{i,j}} \mathbb{E}[\mathrm{EPAoP}\mid l,G_i]\). Units points.
- Situation weights:
  \(w_i = S_i^2 / \sum_j S_j^2\). \(S_i\) standard deviation of EPA in points; \(S_i^2\) points^2; weights dimensionless sum 1.
- Player situational score:
  \(p_{j,s} = \sum_i w_i [\alpha_i p_{j,p} + (1-\alpha_i)p_{j,r}] \mathbf{1}(G_i\in G'_{p_j,c})\). \(p_{j,p}, p_{j,r}\) points/snap; α_i dimensionless pass fraction; \(p_{j,s}\) points/snap.
- LP:
  maximize \(\sum_j p_{j,s} x_j\) subject to \(\sum_j x_j = n\), \(\sum_j p_{j,\$}x_j \le D\), \(\sum_j p_{j,b}x_j \le B\), \(x_j\in\{0,1\}\). Units: p_{j,s} points/snap; objective points/snap times players? Actually sum of scores across players, not normalized; units points/snap but number of players dimensionless. Cost dollars; D dollars; B roster condition units depending p_{j,b}. Need state.
- Assumptions: K-means Euclidean? Paper says K-means, physical attributes and PPS and technique proportions; no distance specified. Cluster table. Breakdown regimes exact: 70 prior finite; if snaps=0 score = total/70; if total points also 0 then zero; denominator never zero. δ=0 or L empty; t≤min support etc. S_i=0 all equal; |M| combinatorial; MDN density zero; α_i=0/1; LP infeasible; roster constraints inconsistent; player pool lacks multiset. Good.

Need maybe include constraints from page 5: at least 3 DL, at least one C0 or C1. Cite. Good.

RETROCAUSAL_GENEALOGY:
- Lineage: NFL analytics from play-by-play EPA, Sabermetrics, player tracking; combine data; unsupervised clustering; mixture density networks (Bishop); random forests; chance-constrained optimization; LP for roster construction. The paper's retrocausal genealogy: it inherits player-attribution tradition (SIS Total Points) but flips selection: scheme -> clusters -> players. It also inherits "moneyball" surplus value but redefines unit-of-analysis. Need mention "more than sum" (page 2).
- Multi-week traps: one-season 2022-23 data; week-to-week variance; opponent adaptation; injuries; contract/cap changes; combine stale; cluster drift across seasons; MDN nonstationarity; the model's "optimal" lineup may be an in-sample optimum. Verification over multiple weeks/seasons needed. Mention "multi-week traps" as longitudinal: early-season vs late-season, weather weeks, divisional opponents, playoff adjustment. Good.

RECURSIVE_THEORY_OF_MIND:
- Opponent coaches model your deployment. The paper's deployment rule is deterministic given α_i and player scores; if predictable, opponent can counter. Define nested beliefs: model M believes p(y|x,l); opponent O believes M will choose l; opponent chooses counter-scheme o. Model should choose \(l^* = \arg\max_l \min_{o\in O(l)} \mathbb{E}[\mathrm{EPAoP}\mid x,l,o]\). Units points. This is extension. 
- Crisis habit regression: under stress (third-and-long redzone, backed up, two-minute), coaches revert to base 4-3/3-4 despite model recommendation; paper notes "Often times in this situation defenses line up in a base 4-3" [PAGE 5] and "Often times in this situation defenses line up in a base 3-4" [PAGE 5]. That's habit regression. The model says get quicker C0/C4; counter-trap: opponent baits by showing pass/screen then runs? Or uses play-action? Need articulate. Clock: score/time and play clock influence risk; model's weights by EPA variance not clock. Need include "crisis habit regression vs counter-trap vs clock" exactly. 
- Counter-trap: offense can induce model to deploy C4 edge players then attack with quick runs/screens or max protect; because p(y|x,l) is conditional on average opponent, not adversarial. Need update with opponent-specific distribution. 
- Clock: two-minute/end-half changes pass probability α_i and variance; model uses static α_i; should condition on clock. Need mention. 
- Formal: \(l_{\text{robust}} = \arg\max_{l} \min_{q\in \Delta(O)} \mathbb{E}_{o\sim q}[\mathrm{EPAoP}\mid x,l,o]\). Maybe too much.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical veto proof. Need formal. Let player mass m, required acceleration a_req for lateral rush/contain, available traction \(F_{\text{trac}} = \mu_s N\), N normal force \(N=mg\) on level turf. Feasible if \(m a_{\text{req}} \le \mu_s m g\), i.e., \(a_{\text{req}}\le \mu_s g\). Units m/s^2; μ dimensionless. If wet/turf μ_s=0.3, g=9.81, max a=2.94 m/s^2. For sharp cut at radius r and speed v, a=v^2/r; feasibility v^2/r ≤ μ_s g. This is formal. Weather: wind drag \(F_d = \frac12 \rho C_d A v^2\); units N. Rain reduces μ; cold increases turf stiffness and shoe compliance; heat affects fatigue. Biomechanics: impulse \(J=\int F dt = \Delta p\); player with larger mass has larger inertia, but C0/C1 table weights. Need cite table: C0 weight 294 lb, C1 316 lb, C2 266 lb, C3 254 lb, C4 255 lb; 40 times C0 4.98, C1 5.13, C2 4.72, C3 4.72, C4 4.68 [PAGE 4]. The model's "get quicker" C0/C4 may be vetoed if a_req exceeds μ_s g. Need "proof": If \(\mu_s g &lt; v^2/r\), no nonzero-speed path with radius r is feasible; any scheme requiring such path has zero probability under physical dynamics, so the MDN's p(y|x,l) should assign zero or be recalibrated. This is a veto. Also if player mass and force capability insufficient: \(F_{\text{prop}} &lt; m a_{\text{req}}\); propulsive force from ground. Weather: if \(F_d\) changes ball flight? Defensive line not ball flight, but wind affects balance and screen? Use rain/turf. 
- Need adjudication: physical veto overrides statistical expectation if feasibility set empty. Cross-layer: scheme selection must include feasibility constraint \(a_{\text{req}}(l,x,\text{weather}) \le \mu_s g\) and \(F_{\text{prop}}\ge m a_{\text{req}}\). If violated, set \(\Pr[\mathrm{EPAoP}&lt;t|l,G_i]=1\) or remove l. Good. 
- Mention no tracking data in paper [PAGE 8] limitation; physical veto cannot be verified from paper alone; needs tracking. Cite page 8 "tracking data" quote. Good.

RLVR_COUNTERFACTUAL_VETOES:
Need define RLVR as "reward with verifiable outcomes" maybe. Three scenarios:
1. Cluster/lineup stability veto. Prediction: Re-running K-means with multiple seeds/alternative distances on same features will change at least one player's cluster and may change optimal multiset. Verification: adjusted Rand index (ARI), multiset equality. Veto if ARI < 0.85 or multiset differs. Cite page 4 table. This is verifiable. 
2. Chance-constraint calibration veto. Prediction: On held-out 2023 plays or cross-validation, selected lineups will exceed δ=0.1 for t=-0.5 in at least one situation because MDN/RF miscalibration and finite sample. Verification: empirical \(\hat\Pr[\mathrm{EPAoP}&lt;t|l_i,o,G_i]\) with Clopper-Pearson upper bound > δ. Veto if upper bound > δ; if below, model survives. Need cite page 6 constraint. 
3. Physical traction/weather veto. Prediction: In wet/turf or cold games, C4-heavy edge lineups will have lower pressure rate or worse EPAoP than in dry conditions, and C0/C1-heavy lineups will be less affected; because \(\mu_s\) drop reduces feasible acceleration. Verification: tracking data or pressure rate; difference-in-differences. Veto if no degradation. Need no betting. 
Maybe 4? Need exactly 3. Include predictions and thresholds. Need state "RLVR reward = 1 if prediction verified, 0 otherwise." Good.

Need ensure no betting lines. Fine.

Need maybe include "unit" for MDN density: probability per point. "p(y|x,l)" is density; under continuous y, units points^{-1}. For discrete? MDN outputs mixture of Gaussians, density. Good.

Need mention "PashRushPPS" typo from paper. Use exact metric names. For equations, use \(\mathrm{PassRushPPS}\). Good.

Need maybe include "PAGE 4 table" quote exact "C0 was primarly made up of lighter, faster, interior linemen." It says "primarly" typo. We can quote. Also "C1 was primarly made up of larger, slower (generally run-stopping) interior defensive linemen." Good. "C4 was made up of faster, lighter players who fit the profile of OLBs in 3-4 schemes." [PAGE 4]. Good.

Need no raw `<` in XML. Let's compose carefully. Use `&lt;` and `&gt;` where needed. Use `\le` no issue. Use `\ge` no issue. Use `\mid` no issue. Use `\mathbb{E}`. Use `\Pr`. Use `\Delta`. Use `\mu_s`. Use `\rho`. Use `\cdot`. Use `\frac`. Use `\sum`. Need no `&` alignment. Good.

Need possibly escape `<` in text "EPAoP < t" as `EPAoP &lt; t`. Good.

Need section content maybe with bullet lists. XML tags can contain lists. Fine.

Need word count. Let's draft.

Potential issue: "PashRushPPS" vs "PassRushPPS" in source. The source says "PashRushPPS" (typo) in metric heading and "Pash Rush Total Points". I can note exact source typo: "PashRushPPS (Pass Rush Points Per Snap)". Then use formal \(\mathrm{PassRushPPS}\) for clarity. Fine.

Need cite exact quote for page 3: "We use a per-snap effectiveness metric in order to standardize for opportunity across players, as we don’t want our results to be biased by (potentially erroneous) deployment decisions." [PAGE 3]. Good. That's a good quote. Use.

Need quote page 6 constraint. Exact: "Define Li,j = {l ∈Lj| Pr[EPAoP < t|l, Gi] < δ} (That is all lineups that meet the probability constraint)." We can quote. Use [PAGE 6]. Good.

Need quote page 6 weight: "Let Si be the observed standard deviation of EPA on all plays in situation Gi. Then, wi = ..." We'll quote. Good.

Need quote page 7 LP? Maybe not needed. Use equation.

Need quote page 9 benefits. Good.

Need maybe mention "SIS Total Points" page 2. Quote "SIS’s calculated Total Points for each defensive lineman" [PAGE 2]. Good.

Need mention "no opponent adjustments" page 9. Quote "we might implement opponent-adjustments into the attribution and deployment models." [PAGE 9]. Good.

Need "tracking data" page 8 quote: "The model could be improved by training the attribution model on higher fidelity data (eg. tracking data)." [PAGE 8]. Good.

Need "combine data stale" page 8 quote: "more accurate testing data would improve our understanding of the play of linemen who have changed physically since the combine" [PAGE 8]. Good.

Now write final. Need be careful XML. Could include LaTeX with `&lt;` inside. For `\Pr[\mathrm{EPAoP} &lt; t \mid l, G_i] &lt; \delta` okay. For `\mathbf{1}(G_i \in G'_{p_j,c})`. For `p_{j,\$}`? In LaTeX, `\$` works. In XML, `$` okay. Use `p_{j,\mathrm{cost}}` maybe. Fine.

Need maybe include "units: points per snap" etc.

Let's produce. Ensure no raw ampersand. Use "and" instead of `&`. In LaTeX, `\mid` not `|`? Use `\mid`. Good.

Need maybe include `p(y\mid x,l)` density units. Good.

Need final only answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s multi-hop derivation starts from a deceptively simple claim: a defensive line’s value is not fully captured by summing individual player scores. The authors quote this directly: “the value of a given defensive line unit is more than the sum of the individual players” [PAGE 2]. The first hop is therefore a change in the unit of analysis: from player-first attribution to scheme-first evaluation. Raw inputs include SIS charting data for 2022–2023 NFL plays, which records which defensive linemen were on the field, their technique, and play outcomes, plus open-source combine data for height, weight, and 40-yard dash [PAGE 2–3]. The second hop is quantization: K-means clustering assigns each lineman to one of five player clusters, C0–C4, using physical attributes, PassRushPPS, RunDefPPS, and technique proportions [PAGE 3–4]. The paper describes C0 as “lighter, faster, interior linemen” and C1 as “larger, slower (generally run-stopping) interior defensive linemen” [PAGE 4]. The third hop is outcome residualization: a random forest predicts EPA from game state and formation/personnel, and EPAoP is the residual between observed and predicted EPA [PAGE 3]. The fourth hop is conditional density modeling: a Mixture Density Network estimates \(p(y\mid x,l)\), the distribution of EPAoP given game-state vector \(x\) and line archetype \(l\), where \(l\) is a multiset of cluster labels [PAGE 3–4]. The fifth hop is scheme selection under a chance constraint: for each game situation \(G_i\), the model keeps lineups satisfying \(\Pr[\mathrm{EPAoP}&lt;t\mid l,G_i]&lt;\delta\), then maximizes expected EPAoP [PAGE 6]. The sixth hop is player selection by linear program: choose \(n\) players matching the optimal cluster multiset while maximizing a weighted pass-rush/run-defense situational score under salary and roster constraints [PAGE 6–7]. The seventh hop is deployment: within a situation, play surplus cluster players in decreasing order of \(\alpha_i p_{j,p}+(1-\alpha_i)p_{j,r}\) [PAGE 7].

The gray-zone audit is where the derivation becomes fragile. EPAoP is a residual, not a causal effect; it may still contain opponent quality, player quality, coaching, and noise. The clustering is intentionally coarse: the paper concedes “alternative clustering methods and distance functions could/should certainly be pursued” [PAGE 4]. The chance constraint depends on two policy parameters, \(t\) and \(\delta\), which define “terrible play” and tolerable risk; these are not estimated from a loss function. The MDN density may be miscalibrated in sparse game states, especially because the model uses one season of data. The player-selection LP is deterministic given the cluster multiset and scores, but the scores themselves inherit attribution error and the 70-snap prior. The paper’s own example yields the multiset \(\{C0,C0,C3,C4,C4,C4\}\) [PAGE 8], but that is an in-sample point estimate, not a stable physical law. Break-down regimes include: \(\delta=0\) making the feasible set empty; sparse situations with few plays making the empirical chance constraint unreliable; \(S_i=0\) making situation weights undefined; cluster multisets with too few eligible players making the LP infeasible; and MDN density collapse or misspecification in rare states. The model is modular, but modularity does not remove the need for out-of-sample, opponent-adjusted, and physically feasible validation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines two per-snap effectiveness metrics. The paper writes “PashRushPPS (Pass Rush Points Per Snap): Noise-adjusted per-snap pass rush effectiveness metric” [PAGE 3]. Formally, with the source’s 70-snap prior:

\[
\mathrm{PassRushPPS}_j=\frac{\mathrm{PassRushTotalPoints}_j}{\mathrm{PassRushSnaps}_j+70}.
\]

Units: points per snap. The denominator is snaps plus a dimensionless count of 70 prior snaps. The source justifies this: “we add 70 snaps of ‘average’ play as a prior in order to discount extreme performances observed over small windows and reward players who performed efficiently across a large number of snaps” [PAGE 3]. Similarly:

\[
\mathrm{RunDefPPS}_j=\frac{\mathrm{RunDefTotalPoints}_j}{\mathrm{RunDefSnaps}_j+70}.
\]

Units: points per snap. The paper also states: “We use a per-snap effectiveness metric in order to standardize for opportunity across players, as we don’t want our results to be biased by (potentially erroneous) deployment decisions” [PAGE 3].

EPAoP is defined through a random forest regression:

\[
\hat{\mathrm{EPA}}_i=f(x_i),\qquad \mathrm{EPAoP}_i=\mathrm{EPA}_i-\hat{\mathrm{EPA}}_i.
\]

Units: points. \(x_i\) encodes game state and offensive/defensive formation plus personnel. The MDN outputs:

\[
p(y\mid x,l),
\]

where \(y=\mathrm{EPAoP}\), \(x\) is game state, and \(l\) is a line archetype. If \(y\) is continuous, \(p(y\mid x,l)\) has units of probability per point, i.e., points\(^{-1}\). The source describes the output as “the probability distribution for EPAoP conditioned on x and l” [PAGE 4].

The scheme-selection operator is a chance-constrained maximization. For multiset \(M_j\) and situation \(G_i\), the source writes: “Define Li,j = {l ∈Lj| Pr[EPAoP &lt; t|l, Gi] &lt; δ}” [PAGE 6]. Formally:

\[
L_{i,j}=\{l\in L_j:\Pr[\mathrm{EPAoP}&lt;t\mid l,G_i]&lt;\delta\},
\]

with \(t\) in points and \(\delta\in[0,1]\) dimensionless. The optimal lineup is:

\[
l_{i,j}=\arg\max_{l\in L_{i,j}}\mathbb{E}[\mathrm{EPAoP}\mid l,G_i],
\]

with expected value in points. The source states: “Define the optimal lineup li,j = maxLi,j E[EPAoP|l, Gi]” [PAGE 6]. The model also imposes realism constraints: “we will require that we play at least three defensive linemen, and at least one lineman from C0 or C1” [PAGE 5].

Situation importance is:

\[
w_i=\frac{S_i^2}{\sum_j S_j^2},
\]

where \(S_i\) is the observed standard deviation of EPA in situation \(G_i\). Units: \(S_i^2\) is points\(^2\), and \(w_i\) is dimensionless with \(\sum_i w_i=1\). The source says: “Let Si be the observed standard deviation of EPA on all plays in situation Gi. Then, wi = …” [PAGE 6].

The player situational score is:

\[
p_{j,s}=\sum_i w_i\left[\alpha_i p_{j,p}+(1-\alpha_i)p_{j,r}\right]\mathbf{1}(G_i\in G'_{p_j,c}),
\]

where \(p_{j,p}\) and \(p_{j,r}\) are PassRushPPS and RunDefPPS in points per snap, \(\alpha_i\) is the observed passing-play percentage in situation \(G_i\) and is dimensionless, and the indicator is dimensionless. Thus \(p_{j,s}\) is in points per snap. The LP is:

\[
\max_{x}\sum_j p_{j,s}x_j
\]

subject to

\[
\sum_j x_j=n,\qquad
\sum_j p_{j,\mathrm{cost}}x_j\le D,\qquad
\sum_j p_{j,b}x_j\le B,\qquad
x_j\in\{0,1\}\ \forall j.
\]

Here \(n\) is a player count, \(p_{j,\mathrm{cost}}\) and \(D\) are dollars, and \(p_{j,b}\) and \(B\) carry whatever units the additional roster condition uses. The objective is a sum of points-per-snap scores over selected players, so its units are points per snap times a dimensionless count.

Assumptions and exact breakdown regimes: the \(+70\) prior prevents a zero denominator, but with very few snaps the metric is shrunk toward the prior and can mask true ability; if \(\delta=0\), the chance-constrained feasible set can be empty; if \(t\) is below the lower support of EPAoP, the constraint becomes trivial; if \(S_i=0\) for all situations, \(w_i\) is undefined; if the required cluster multiset has insufficient eligible players under salary/roster constraints, the LP is infeasible; if the MDN assigns near-zero density in a sparse state, \(p(y\mid x,l)\) is unreliable; and if \(|G|\) or \(|M|\) grows, naive enumeration becomes combinatorially expensive. The source itself notes higher-fidelity data and more seasons would improve the model [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s scientific lineage runs through several traditions. First, play-by-play EPA and SIS Total Points inherit the sabermetric and NFL analytics practice of valuing outcomes in points and yards rather than raw counting stats. The source uses “SIS’s calculated Total Points for each defensive lineman” [PAGE 2]. Second, the use of combine height, weight, and 40-yard dash descends from athletic-testing and player-profiling traditions, but the paper itself warns that “more accurate testing data would improve our understanding of the play of linemen who have changed physically since the combine” [PAGE 8]. Third, K-means clustering descends from unsupervised quantization and archetype discovery; the paper treats clusters as a “solid foundation for categorizing defensive linemen beyond simply their positional tags” [PAGE 4]. Fourth, random forests and mixture density networks descend from conditional prediction and density estimation; the MDN specifically models the full conditional distribution rather than only a mean. Fifth, the chance-constrained scheme selection and LP player selection descend from operations research: robust optimization, knapsack-like roster construction, and constrained resource allocation under salary cap.

Retrocausally, the paper reverses the usual analytics pipeline. Traditional player-first valuation asks “who is good?” and then selects high-value players. This paper asks “which scheme do we want?” and then selects players who enable that scheme. That reversal is its genealogical break: player attribution becomes a prior rather than the final objective. The paper’s conclusion states that the method “captures the additional value generated by having certain combinations of players working together on the field at once” [PAGE 9].

Multi-week traps are substantial. A one-season 2022–2023 fit can confuse week-specific opponent quality with player or scheme value. Early-season cluster assignments may drift as player roles change; late-season injuries and weather alter the physical feasibility of edge-rush schemes; contract and rookie-deal assumptions change the LP’s feasible set; and opponent adaptation can make a previously optimal deployment predictable. The paper’s own limitation section points toward opponent adjustments, tracking data, and more seasons [PAGE 8–9]. A multi-week evaluation should therefore test cluster stability, chance-constraint calibration, and deployment performance across weeks, weather conditions, and opponent types rather than treating the single-season optimum as a stable causal rule.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The model as written is a belief about outcomes, not a belief about opponents’ beliefs. It estimates \(p(y\mid x,l)\), but an opposing coach can form a belief about which \(l\) the model will choose and then select a counter-scheme. If deployment is deterministic, the opponent can exploit it. A recursive extension would treat the model’s choice as a game:

\[
l^{\ast}=\arg\max_{l}\min_{o\in O(l)}\mathbb{E}[\mathrm{EPAoP}\mid x,l,o],
\]

where \(o\) is an opponent response and the expectation is in points. This is not in the paper; it is a necessary extension if the model is used adversarially.

Three failure modes matter. First, crisis habit regression: under pressure, coaches revert to familiar base fronts even when the model recommends a different cluster mix. The paper notes that in third-and-long redzone situations, defenses “often” line up in a base 4-3, and in second-and-short middle-of-field situations, defenses “often” line up in a base 3-4 [PAGE 5]. That is habit regression: the clock and stress push decision-makers back to prior schemes. The model’s “get quicker” C0/C4 recommendation for third-and-long is exactly the kind of recommendation that a crisis habit can veto.

Second, counter-trap: the offense can bait the model into a deployment and then attack the resulting weakness. For example, if the model loads C4 edge players for pass rush, a quick screen, draw, or max-protection shot can punish over-commitment. The model’s conditional distribution is estimated against average opponents, not against an opponent who knows the model. A counter-trap requires updating \(p(y\mid x,l)\) to \(p(y\mid x,l,o)\) and then solving the minimax problem above.

Third, clock: the model weights situations by EPA variance \(w_i=S_i^2/\sum_j S_j^2\), but clock, score, and timeouts change risk preferences and passing probabilities. A two-minute situation is not merely a game-state bucket; it is a recursive belief state in which the opponent knows the defense knows the clock. The static \(\alpha_i\) pass fraction should be conditioned on clock and score, and the chance constraint should be time-dependent. Without this, the model can recommend a scheme that is statistically optimal in expectation but strategically dominated by an opponent who understands the clock.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical and biomechanical constraints can veto a statistically optimal scheme. Let a player have mass \(m\), required lateral acceleration \(a_{\mathrm{req}}\), and available traction \(F_{\mathrm{trac}}=\mu_s N\). On level turf, \(N=mg\), so the no-slip feasibility condition is:

\[
m a_{\mathrm{req}}\le \mu_s m g
\quad\Longrightarrow\quad
a_{\mathrm{req}}\le \mu_s g.
\]

Units: \(m\) in kg, \(a_{\mathrm{req}}\) in m/s\(^2\), \(F_{\mathrm{trac}}\) in N, \(\mu_s\) dimensionless, \(g=9.81\) m/s\(^2\). For a cut at speed \(v\) and radius \(r\), \(a_{\mathrm{req}}=v^2/r\). Thus if \(v^2/r&gt;\mu_s g\), the required path is physically infeasible regardless of the model’s expected EPAoP. Rain, poor turf, or cold-weather shoe compliance can reduce \(\mu_s\); wind adds a drag force \(F_d=\frac12\rho C_d A v^2\) in N, which further perturbs balance and acceleration.

The paper’s cluster table gives physical proxies: C0 average weight 294 lb with 40-yard dash 4.98 s; C1 316 lb and 5.13 s; C2 266 lb and 4.72 s; C3 254 lb and 4.72 s; C4 255 lb and 4.68 s [PAGE 4]. The model’s “get quicker” recommendation for third-and-long uses C0 and C4 [PAGE 5]. But a C4 edge rush on a wet field may require a lateral acceleration that exceeds \(\mu_s g\). If so, the scheme is vetoed: the physically feasible set is empty, and the MDN should assign zero probability or be truncated. The correct adjudication is to add a feasibility constraint to the scheme-selection problem:

\[
a_{\mathrm{req}}(l,x,\text{weather})\le \mu_s g,
\qquad
F_{\mathrm{prop}}\ge m a_{\mathrm{req}},
\]

where \(F_{\mathrm{prop}}\) is the player’s propulsive ground force in N. If either inequality fails, the lineup should be removed before the chance constraint is evaluated. The paper lacks tracking data, so this veto cannot be fully tested from the source alone; the authors themselves call for “higher fidelity data (eg. tracking data)” [PAGE 8]. Cross-layer adjudication therefore says: statistical expectation cannot override an empty physical feasible set.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR here means reinforcement-style verification with a binary reward: 1 if the pre-registered prediction is confirmed, 0 if falsified. Three verifiable veto scenarios follow.

Scenario 1: Cluster and lineup stability veto. Prediction: re-running K-means with multiple random seeds and at least two alternative distance definitions on the same features will change at least one player’s cluster assignment and may change the optimal multiset from \(\{C0,C0,C3,C4,C4,C4\}\) [PAGE 8]. Verification: compute adjusted Rand index across clusterings and check whether the selected multiset is identical. Veto rule: if adjusted Rand index \(&lt;0.85\) or the multiset changes, the claim that the scheme is stable is vetoed; if both remain stable, the model survives this test.

Scenario 2: Chance-constraint calibration veto. Prediction: on held-out plays, at least one selected lineup \(l_{i,o}\) will have empirical \(\Pr[\mathrm{EPAoP}&lt;t\mid l_{i,o},G_i]\) exceeding \(\delta=0.1\) for \(t=-0.5\), because the MDN and random forest are fit in-sample and sparse situations are under-sampled. Verification: estimate the empirical violation rate with a one-sided binomial upper confidence bound. Veto rule: if the upper bound exceeds \(\delta\), the chance-constraint claim is vetoed for that situation; if it remains below \(\delta\) across situations, the calibration claim survives.

Scenario 3: Physical traction and weather veto. Prediction: in wet-turf or cold-weather games, C4-heavy edge lineups will show lower pressure rates or worse EPAoP than in dry conditions, while C0/C1-heavy interior lineups will be less degraded, because reduced \(\mu_s\) lowers the feasible lateral acceleration \(a_{\mathrm{req}}\le\mu_s g\). Verification: use tracking data or play-chart pressure rates and compare dry versus wet/cold conditions with a difference-in-differences estimate. Veto rule: if C4-heavy lineups show no degradation and no feasibility effect, the physical-veto claim is falsified; if degradation appears specifically in the predicted direction, the cross-layer veto is verified. These three tests are direct, pre-registerable, and independent of any betting market or line.
</RLVR_COUNTERFACTUAL_VETOES>