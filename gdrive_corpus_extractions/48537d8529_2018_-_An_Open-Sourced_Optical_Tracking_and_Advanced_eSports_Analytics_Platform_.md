---
source: "2018 - An Open-Sourced Optical Tracking and Advanced eSports Analytics Platform for League of Legends - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2018"
pages: 16
model: deepseek/deepseek-v4.1-flash-1017
words: 9346
---

<NATIVE_REASONING>
We need answer user asks? They gave drive source, pages, source text. Need produce analysis in exact XML sections with invariants. Need infer task likely want deep derivation audit of paper? They didn't explicitly ask question, but system says GSE+GSI Frontier Reasoning Foundry with sections. Need respond with all XML sections, >=1000 words, no betting lines, no toy equations, cite [PAGE N] and verbatim quotes where source pages provided. Need formal LaTeX equations, SI/information/probability units, assumptions, singularities/breakdown regimes. Need deep multi-hop derivation & gray-zone audit >=400 words. Need source operators/equations, retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes 3 scenarios predictions.

Need focus on paper. Need derive from paper. No betting lines. Avoid any mention spreads/totals/moneylines/odds. We can mention no wagering. Need not make fake ratios. Formal equations. Need cite exact PAGE markers and verbatim quotes. Need word count >1000. Desired oververbosity 5 but requirements high. Need ensure XML well-formed? They specified tags. Need include sections exactly. We can include citations.

Need deeply analyze the paper: open-sourced optical tracking and advanced esports analytics platform for LoL. Key contributions: data extraction via minimap computer vision, client hooks, network traffic; per-second data; win probability logistic regression using kills, towers, monsters per minute; worthless deaths/smart kills defined by win prob change; advanced stats; individual performance vs team win probability; logistic regression bundles; fast frugal tree; role detection pseudocode.

Need answer likely an evaluation? Maybe need provide "frontier reasoning foundry" output. We need produce rigorous derivation, gray-zone audit.

Need mention source operators and equations. Formal LaTeX equations with units. Define:
- Spectator minute-resolution state vector x_t = (K_R,K_B,T_R,T_B,M_R,M_B) with counts (dimensionless). y∈{0,1}. Logistic model P(y=1|x_t)=σ(β0+β^T x_t), σ(z)=1/(1+e^{-z}). Units: probability dimensionless; β for counts has logit per count, intercept logit. The paper says log(P(class=k|x)) ∝ x·θ(k) and loss ∑ -log(Pθ(class=y_i|x_i)); cite PAGE 5. Need say exact logistic regression implementation standard [5]. 
- Win probability model trained on random minute per game, independent rows assumption. Breakdown: random-minute sampling removes within-game autocorrelation but sacrifices temporal dynamics; state at minute t not Markov sufficient; random minute biases minute distribution? Actually sampling uniformly random minute from each game creates one row per game with minute distribution uniform across game lengths? Need audit. Consecutive rows correlated; they "chose a random minute from each game" leaving millions of independent rows. But if random minute uniformly over minutes, distribution weighted by game length. Still rows independent across games? Rows from same game not, only one per game. But they are not identically distributed across minute? Could include minute as feature? Their row includes Minutes Elapsed as feature? The training row includes Minutes Elapsed as first field, then red kills etc. But in features listed? "These features are: ... red and blue team’s kills, towers, and large monsters killed. We also chose to look at each incremental minute..." Training rows include Minutes Elapsed. It may or may not be feature. Need be careful. They list row with Minutes Elapsed. The paragraph says features are kills towers monsters; but row includes minutes. Formal model maybe includes minutes elapsed. Better define x_t includes m and counts if model uses it? The quote: "These features are: the red and the blue team’s kills, towers, and large monsters killed. We also chose to look at each incremental minute rather than every second. Our training set thus includes rows like this: Minutes Elapsed, Red Kills..." Ambiguous. We can state minutes elapsed is part of row and likely feature or indexing; if not feature, conditional model at t. Need note ambiguity gray-zone.

- Smart kills/worthless deaths: Let ΔW_e = W(t_e^+)-W(t_e^-) in probability units. Smart kill if event by team and ΔW_e >0? Paper says "smart kill one that did [increase your team's win probability]" and worthless death one that did not increase your team’s win probability. Need define for death: if death event ΔW ≤0? Actually "worthless death one that did not increase your team's win probability" (for your team) implies after death your win prob not increase. Need sign convention. For kill, smart if ΔW>0. For death, worthless if ΔW≤0? But "did not increase" means ΔW≤0. However death can increase win probability? If death baits? Need caveat. The paper's wording: "worthless death one that did not increase your team’s win probability and a smart kill one that did." So event-centered. Need use ΔW. Note singularity: if W model noisy, threshold at 0 unstable near p=0.5; classification sensitive. Also "smart kills and worthless deaths" mutually? They treat kill/death separate. Need mention exact event timing windows not specified in paper; breakdown if Δt not defined. This is a gray-zone.

- Team fights: engagement continuous sequence champion-on-champion damage until few seconds no damage; include champions within certain small range; concatenate. Formal: engagement E = maximal interval [a,b] such that damage events occur with gaps ≤τ_g; expand set C(E)= {c | ∃c'∈C(E), ||pos_c(t)-pos_c'(t)|| ≤ r} maybe transitive closure. Need define threshold r, τ_g. Units: map coordinates or fraction of map; paper says "certain small range"; "within one-tenth of width/height" for near in role detection. Need cite PAGE 7 and PAGE 16. Breakdown: overlap, fog-of-war, damage attribution, team fights ambiguous; no exact r/τ_g given.

- Vision: union of regions of vision granted by living wards with radius at each moment for each team. Formal A_team(t)=∪_{w∈W_team(t)} Disk(x_w,r_w(t)) ∩ M. Percentage = area(A)/area(M). Units m² if map scaled to SI, or fraction dimensionless. Paper says "using their specific radius at each moment" [PAGE 9]. Breakdown: ward radius occlusion by terrain not modeled? They use union of circles, not line-of-sight occlusion. The paper says vision granted and denied in fog of war; but method visualizes union of regions. Need gray-zone: if terrain blocks vision, disk union overestimates; if ward radius changes with terrain, not captured. Good.

- Time management: partition each player's activity at any moment into types. Formal assignment a_i(t) ∈ {wasted, transition, laning, ...}; useful percent = (1/T)∫ 1[a_i(t)∈U] dt, units dimensionless. Paper "partition each player's activity ... one of several types" [PAGE 10]. Breakdown: no listed categories, no ontology; subjective.

- Individual performance percentile: For tier r, metric M, percentile P_{r,M}(x)=F_{r,M}(x) maybe with tie handling. Then win probability averaged within integer percentile: \hat W_{r,M}(p)= (1/N_p)∑ 1[Y_i=1] for p exact integer. Units probability dimensionless. Paper says "percentiles relative to tier"; "accumulate average win/loss percentages within each integer percentile" [PAGE 6]. Breakdown: coarse bins, selection, survivorship, patch mixing. They focused ~150,000 latest patch for section; footnote 2.

- Logistic regression bundle model: \hat y = 1/(1+e^{-(β0+∑ β_i f_i)}) where f_i are bundle percentiles; estimates in Table 3. Need cite PAGE 12. Units: logit; β_i logit per percentile? Actually if f_i percentile 0-100, β per percentile. z-stat. Need mention highly significant but not causal; negative marginal coefficients due to conditioning/multicollinearity/passivity. Table 4 correlations. 
- Fast frugal tree: 3 metrics, 80% correct? Paper says "makes the correct prediction about 80 percent of the time despite only using three metrics" and "FFT correctly predicts victory 87 percent of the time." Ambiguity: accuracy vs victory prediction. Need audit. We can formalize decision tree as mapping g: features→{0,1}; accuracy = (1/N)∑1[g(x_i)=y_i]; victory recall = TP/(TP+FN). Paper's two numbers not reconciled; breakdown if class imbalance or metric distinction. Need cite PAGE 14.

- Role detection pseudocode: formal algorithm: jungler = argmax early neutral minions; support = argmin overall early minions among remaining; mid = argmax early minions near center; ADC = argmax frequency near support in first 10 min; top = remaining. Need cite PAGE 16. Units: counts, time, distance threshold one-tenth width/height. Breakdown: swaps, nonstandard lanes, duplicate/role ambiguity, early minions level 2-6. Need mention if no remaining champion? Exactly 5 per team; if ties? need tie-breaking.

- Data acquisition methods: computer vision live tracking using spectator mode (Python/Go), direct hooks, network traffic incomplete. Cloud Windows GPU. Patch changes every few weeks. Page 3-4. Breakdown: GPU cost; patch vulnerability; no privacy concerns only public spectating; 3-minute delay. Need mention "invisibly, remotely, and live, all without any impact on the user, or even their knowledge" [PAGE 1] with privacy caveat. Need cite.

Need also "RETROCAUSAL_GENEALOGY": Historical/scientific lineage & multi-week traps. Need lineage: optical tracking in sports from MIT Sloan papers [2] Maheswaran 2012 rebound; [3] Cervone 2014 POINTWISE; [6] Duch 2010 PLoS ONE quantifying individual player performance; [8]/[7] Phillips FFTrees. eSports analytics: Riot API boxscore limits; open-source optical tracking; LoL ranks ELO; patches. Multi-week traps: patch cycles every few weeks invalidate CV/hook/network parsers and models; model drift; distribution shift; role meta changes; open-source release versioning; API changes; spectating delay; GPU cloud cost; privacy/public spectating. Need "retrocausal genealogy" maybe interpret: How past decisions (Riot API, spectator mode, optical tracking in NBA) cause future analytics; traps that emerge over multi-week horizons. Need formal? Could include drift equation? Need no fake ratios. Can state data-generating distribution P_patch; model trained on patch p has expected performance on p' = E[loss] under P_{p'}; if TV distance between P_p and P_{p'} large, breakdown. Not toy ratio, formal probability divergence. Need use units bits/nats for KL? That's okay. Define KL divergence D_KL(P||Q) in nats or bits; if > threshold then recalibration. But avoid inventing thresholds? Can say exact breakdown when support changes (new champion/ability/item) makes feature undefined, not a continuous ratio. Good.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Need relate to player tilt analysis and behavior. Need interpret "crisis habit regression" as tilt: after death returns aggressive and dies repeatedly; paper's tilt proxy: time dead in preceding 3 min / total team dead time; highlight deaths and team fights; example player died favorable then balanced then three unfavorable [PAGE 10]. Counter-trap: teaching player to avoid bad fights/don't die/waste time, but if opponents model this, they may bait/force; recursive ToM: player models opponent model; fast frugal tree advice "don't die for no reason; if you do, try for smart kills; if can't, roam and map coverage" [PAGE 14]. Clock: in-game time, 3-minute delay, patch cycles, cooldowns, death timers, win probability temporal. Need formal ToM? Could model player action a_t = π(h_t, b_t, \hatπ_{-i}) where belief about opponent. But avoid fake equations? It's formal. Need not overdo. Need mention "tilt proxy" equation: T_i(t)=D_i(t-3min,t)/∑_{j∈team}D_j(t-3min,t) if denominator >0; units dimensionless. But paper says "dividing it by total time spent dead by anyone on his team over same period" [PAGE 10]. This is a ratio but not fake; it's from paper. Need define denominator zero breakdown (no team deaths → undefined). Good. Need "counter-trap": If players optimize to minimize worthless deaths, they may become passive; logistic regression negative survivability marginal suggests passivity can hurt; counter-trap is overfitting advice. Need mention recursive ToM: advanced stats condition on team fight context; opponents adapt; metric becomes gameable if public. Clock: time management and death timers; multi-week patch.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Since eSports, physical/biomechanical/weather layers are largely absent; but there are physical infrastructure/network/GPU/client/hardware layers. Need adjudicate veto: If optical tracking depends on display rendering, GPU, network latency, spectator delay; physical hardware/network veto can invalidate data. Biomechanical: player input device, ergonomics, fatigue, reaction time; not measured. Weather: power/network outages; not in paper. Need proof of veto: define necessary conditions for valid observation: client renders minimap at resolution sufficient; frame rate; network stability; cloud GPU availability; patch compatibility. If violated, observations missing/biased; no amount of ML fixes. Need cite pages 3-4: cloud servers Windows GPU; network architecture highly encoded; patches every few weeks. Also page 1 "invisibly, remotely, and live" and public spectating. Need mention no physical/biomechanical/weather variables in source; thus any claim about them is out-of-sample and vetoed. But need "proof": data collection operator O maps rendered pixels to state; if render/update rate below Nyquist for champion movement, location aliasing; if network delay >? no exact threshold; breakdown. Use formal: sampling interval Δt_s; champion velocity v; spatial displacement vΔt_s; if > map cell/minimap resolution, aliasing. Units m/s if scaled; pixels. If frame drops, positions missed. Weather veto: power/network outages cause missing not at random; selection bias. Biomechanical: not tracked; cannot attribute performance to biomechanics; only in-game actions. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning from verifiable rewards? Need construct counterfactual veto scenarios: conditions under which paper's claims would be falsified/validated by verifiable outcomes. Need include predictions. Need avoid betting. Scenarios:
1. Patch-drift veto: Train win-prob model on patch p, evaluate on p+1 with new champion/item. Prediction: calibration slope/intercept and Brier score degrade beyond pre-registered tolerance; smart-kill labels near zero delta become unstable. Verifiable by held-out patch. Veto if calibration fails.
2. Random-minute sampling independence veto: Compare random-minute model vs full time-series/clustered CV. Prediction: random-minute sampling underestimates temporal autocorrelation, yields overconfident z-stats; cluster-robust SE increase; if coefficient signs remain but significance drops, causal/individual claims vetoed. Verifiable.
3. Optical tracking measurement-validity veto: Compare CV minimap-derived positions/events to direct client hooks/ground truth on same games. Prediction: champion overlap and fog cause false negatives; if position error > one minimap cell or event F1 below threshold, advanced stats (team fights, vision) invalid. Verifiable via direct hooks. 
4. Could use FFT ambiguity: pre-register accuracy vs victory recall; if 80% accuracy is majority-class baseline due to class imbalance, veto. But need 3 scenarios exactly? "3 verifiable RLVR veto scenarios" likely exactly 3. We can include 3. Need predictions. Good.

Need ensure >=1000 words. Need maybe 2500 words? Desired oververbosity 5 but requirements heavy. We need deliver compact but deep. Need cite exact [PAGE N] markers and verbatim quotes. Need avoid too many quotes? Use exact. Need quote with punctuation. We can quote phrases. Need make sure quotes are verbatim. We can include several.

Need "THINK_TRACE" >=400 words. It should be deep multi-hop derivation & gray-zone audit. We can include equations? It says deep multi-hop derivation & gray-zone audit. Need maybe 500-600 words. Must be inside XML. Need not reveal hidden chain-of-thought? System asks THINK_TRACE. We can provide a concise reasoning trace, not private chain-of-thought? We need comply. We can present "audit trace" with high-level steps, not hidden. Need be careful not to produce actual private chain-of-thought? There's no explicit policy in prompt, but as AI we can provide reasoning summary. The section is called THINK_TRACE, so include a structured reasoning trace. Avoid too much uncensored. It's fine.

Need exact XML sections. We can write:

<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
...

Need ensure no extra text outside? Maybe include all. Use one response with XML. Need not wrap in code block? Probably plain XML.

Need mention "ZERO BETTING LINES": no odds etc. Avoid words "odds", "bet", "wager", "moneyline", "spread", "total". Avoid even "betting". The system says never mention spreads, totals, moneylines, or odds. We can say "no wagering concepts" maybe mentions wagering? Better avoid. Do not mention "odds". Do not use "total" in betting sense? The word total appears in source (total damage, total gold). The invariant says never mention totals as betting lines. Using "total gold" is source metric, not betting line? Could be okay but to be safe, use "aggregate gold" or "cumulative gold" instead of "total gold". Avoid "spread" maybe "distribution" okay. Avoid "moneyline" obviously. Avoid "bet". Good.

Need "ZERO TOY EQUATIONS": Need formal equations with units and assumptions. We can include equations. Avoid fake ratios like Force/Fatigue. Use paper equations and derived formalizations. Use LaTeX. Need state units. For logistic: P dimensionless; z logit dimensionless; β logit per count; counts dimensionless. For KL: nats. For area: m² if map scaled, or fraction. For time: seconds. For distance: map units or fraction. For percentile: dimensionless 0-100. For correlation: dimensionless [-1,1]. For z-statistic dimensionless. For accuracy: probability dimensionless. For F1: dimensionless. Good.

Need "exact singularity/breakdown regimes": For each equation, state when undefined. E.g. logistic p=0 or 1 log loss infinite; perfect separation; denominator zero in tilt; no team deaths; empty engagement; ward radius zero; percentile ties; patch support changes; class imbalance; missing data; GPU/network. Good.

Need "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Need include quotes with [PAGE N]. Need exact quotes. Let's collect quotes.

From PAGE 1:
- "Being digital, eSports should have vast quantities of data, but sometimes they do not."
- "We track every champion’s location multiple times every second."
- "We track everything, continuously."
- "And we do it invisibly, remotely, and live, all without any impact on the user, or even their knowledge"
- "There are no privacy concerns here: we only track games that allow public spectating."
- "All current LoL analytics from amateurs to pros rely on this rudimentary API data."

PAGE 2:
- "We tracked and analyzed millions of games of LoL using our new methodology for extracting high-frequency and high-fidelity eSports data."
- "Worthless deaths are ones that do not increase your team’s win probability. Smart kills are ones that do increase your team’s win probability."
- "the relation between individual performance and team performance is virtually a straight line."

PAGE 3:
- "To avoid cheating, Riot broadcasts spectated games on a three-minute delay."
- "Patches happen regularly in LoL, approximately every few weeks."
- "This bidirectional network traffic is highly encoded, difficult to decipher, and subject to change with every patch."

PAGE 4:
- "The quintessential approach our eSports optical data tracking software takes is to visually process that minimap and infer all the locations it implicitly shows."
- "The cloud instance needs an expensive graphics processing unit (GPU) for the game client to function; hence the motivation for the fourth approach."

PAGE 5:
- "Our first important analytics contribution is in calculating in-game win probability using a machine learning model."
- "These features are: the red and the blue team’s kills, towers, and large monsters killed. We also chose to look at each incremental minute rather than every second."
- "we chose a random minute from each game, leaving us with millions of independent rows."
- "Notably absent from our model is the total gold for each team." (contains total; okay quote. But invariant? It's a quote about total gold. It's not betting line. Should be okay? Maybe avoid? We can quote but "total" in context. The invariant says never mention totals; maybe safer not to quote that phrase. But exact quote includes "total gold" not betting. I'd avoid to be safe.)
- "The machine learning model we used was logistic regression."
- "log⁡(𝑃⁡(class = 𝑘|𝑥)) ∝𝑥. 𝜃(𝑘)" exact? The source has weird. We can quote just "The machine learning model we used was logistic regression" and cite.

PAGE 6:
- "Within each tier, we can compute the percentiles for the metric in question."
- "This kills number will be replaced by its percentile, meaning, he did better than what portion of all players in his tier across all games in our dataset."
- "we accumulate average win/loss percentages within each integer percentile"
- "our corpus of millions of games spanned several LoL patches, each of which can significantly affect gameplay. Hence, we focused on the ~150,000 games from the latest patch"

PAGE 7:
- "an engagement is a continuous sequence of champion-on-champion damage until a few seconds elapse with no damage."
- "we track the damaged champion and the one who dealt the damage, and include in the team fight any champions within a certain small range of any champion already deemed to be in the engagement."
- "Thus, engagements get concatenated together as champions join or leave a team fight, either by dying or retreating."

PAGE 8:
- "In eSports, on the contrary, we are blessed not only with raw location information, but the actions as well."
- "One immediate benefit of our approach is better detection of which champion played which role"

PAGE 9:
- "we can also compute the union of all the regions of vision granted by still-living wards using their specific radius at each moment in time for each team."
- "Figure 5 shows this visualization"

PAGE 10:
- "We can proxy for tilt by calculating the time spent dead by the player over the preceding three minutes and dividing it by the total time spent dead by anyone on his team over the same period."
- "notice the player first died in a favorable and then a balanced team fight, before taking three unfavorable fights in a row."

PAGE 11:
- "The OVERALL metric does well."
- "it includes several bundles that do very poorly at explaining a team’s win probability: laning, carry focus, vision denial, and vision."
- "An individual’s performance in these four bundles seems to be irrelevant to a team’s win probability."

PAGE 12:
- "We fit a standard logit model on the ten stat bundles percentiles and a constant term."
- Table 3 values.
- "All the estimates are highly significant at the 𝑝< 0.0001 level except for Abilities"
- "Surprisingly, several of the bundles have negative marginal contributions, including survivability."

PAGE 13:
- "Very few exhibit substantial multicollinearity."
- "The biggest positive correlation is 0.51 between carry focus and favorable fights."
- "The biggest negative correlation is -0.75 between vision denial and gold."
- "fight good fights, don’t die, and don’t waste time."

PAGE 14:
- "It makes the correct prediction about 80 percent of the time despite only using three metrics."
- "the FFT correctly predicts victory 87 percent of the time."
- "if your bad death percentile was below average ... then you likely lost."
- "don’t die for no reason; if you do, try for some smart kills; if you can’t do that either, at least roam and have decent map coverage."

PAGE 15:
- "when standard individual actions of performance within a game are filtered for broader impact, the new adjusted summary statistics correlate almost perfectly to team performance."

PAGE 16:
- "The Riot API reports what Riot assumes are the roles of each person. Their results are sometimes incorrect"
- "The jungler is the champion who killed the most early minions that were neutral jungle minions."
- "Of the remaining four champions: the support is the one who killed the fewest overall early minions."
- "Of the remaining three champions: the mid is the one who killed the most early minions near the map’s center."
- "Of the remaining two champions: the ADC is the one who was most frequently near the support during the first ten minutes of gameplay, where near is defined as being within one-tenth of the width or height of the map."
- "The remaining champion is the top."

Need include exact [PAGE N] after quotes. Need not overquote.

Need "RETROCAUSAL_GENEALOGY": mention references [2],[3],[6],[7]/[8] from paper. The paper cites Maheswaran et al. 2012 "Deconstructing the rebound with optical tracking data" [PAGE 15 refs]. Cervone et al. 2014 POINTWISE [PAGE 15 refs]. Duch et al. 2010 PLoS ONE [PAGE 15 refs]. Phillips FFTrees [PAGE 15 refs]. Need cite pages 15. The paper says "Physical sports have been revolutionized in the past few years by similar optical tracking data for players (c.f. [2], [3])" [PAGE 1]. Need lineage: from NBA optical tracking to LoL minimap CV; Riot API boxscore to rich per-second data; logistic regression to win probability; FFT to interpretable rules. Multi-week traps: patch drift. Need maybe mention "retrocausal" as future open-source release will retroactively enable reanalysis? Hmm.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Since source is eSports, say physical/biomechanical/weather layers are not in source; eSports still has hardware/network/environment. Need proof: Data validity requires client rendering, GPU, network, patch. If weather/power outage, missing data not at random. Biomechanical variables like fatigue not measured; cannot claim individual performance is pure skill. Need veto proof: any inference about physical/biomechanical/weather from this paper is out-of-scope; only in-game state is observed. But for eSports, physical layer includes GPU/network; not weather except infrastructure. Need cite PAGE 3-4 quotes. Need "veto adjudication" maybe decide which claims survive. Claims about advanced stats vs win probability survive conditional on valid tracking and patch. Claims about "individual contribution" are associational, not causal; physical/biomechanical/weather veto not addressed. Need mention "No privacy concerns" is conditional on public spectating [PAGE 1]; if not public, privacy veto.

Need "RLVR_COUNTERFACTUAL_VETOES": Need 3 verifiable scenarios. Use RLVR maybe "reward-verifiable" evaluation. We can phrase as "counterfactual vetoes with verifiable outcomes." Need predictions. Avoid fake thresholds? We can use pre-registered tolerances but not exact? Need be verifiable. We can say "veto if ..." with precise criteria? The prompt asks 3 verifiable RLVR veto scenarios + predictions. We can include measurable predictions: e.g., Brier score increase, calibration slope outside [0.8,1.2], F1 drop, confidence interval. Are these invented ratios? They are evaluation metrics, not fake. Need formal definitions. Units. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS": Might be long. Need include all formal LaTeX. Need maybe use "Operator" names: optical observation operator O, event label operator ΔW, team-fight closure operator, vision union operator, percentile operator, logistic bundle operator, FFT classifier, role assignment operator. Need define units and breakdown. This section can be ~700 words. Need be careful XML escaping? LaTeX with < >? Use \le, \ge. Avoid raw &? Use & in text? XML needs escape ampersand; better avoid ampersands or use &amp;. But the prompt likely not strict XML parsing? Still, to be safe use "and" not &. Use < in math? Use \lt or \leq. Avoid raw < in text. Use LaTeX \le. Need escape ampersand if any. Use no raw &. Use "PAGE" citations in brackets.

Need word count. Let's plan response.

Start:

<THINK_TRACE>
I audit the paper as a data-generation and inference pipeline, not as a set of isolated claims. Step 1: source extraction. ... [PAGE 4] quote. Step 2: state construction ... per-second vector. Step 3: labels ... ΔW. Step 4: aggregation ... percentiles. Step 5: regression ... logistic. Step 6: interpretability ... FFT. Gray zones: random-minute independence, logistic negative coefficients, FFT 80 vs 87 ambiguity, event timing windows, team fight thresholds, vision union ignores occlusion, role detection tie handling, patch drift, privacy. Need >=400 words. Include multi-hop. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal equations. Need maybe use display math. Use \begin{aligned}? Fine. Need not parse? Plain LaTeX.

Operators:
1. Observation operator: O: screen frames → state. Define s_i(t)=[x_i(t),y_i(t),h_i(t),m_i(t),...]. Units. Cite quotes. Breakdown: overlapping champions, fog, frame drops, GPU/network.
2. Win probability: P(y=1 | s(t)) = σ(β0 + β_K K_R + ... + β_M M_B + β_t t). Units. Loss L(β)= -∑ log Pθ(y_i|x_i). Breakdown p=0/1, perfect separation, random-minute sampling.
3. Event delta: ΔW_e = W(t_e^+) - W(t_e^-); smart kill if ΔW>0; worthless death if ΔW≤0. Units probability. Breakdown threshold near zero; event window unspecified.
4. Team fight closure: E = maximal interval with gaps ≤τ_g; C(E)=transitive closure of champions within radius r of C(E). Units seconds, map units. Breakdown no damage, false damage, overlap.
5. Vision union: V_team(t)=∪ Disk(x_w,r_w)∩Map; fraction = area(V)/area(Map). Units fraction or m². Breakdown terrain occlusion, missing wards, radius changes.
6. Percentile and win curve: P_{r,m}(x)=F_{r,m}(x); \bar Y_{r,m}(p)= (1/N_p)∑ 1[Y_i=1]. Units dimensionless/probability. Breakdown ties, small N_p, patch mixing.
7. Bundle logistic: P(y=1|f)=σ(β0+∑ β_i f_i); Table 3. Units logit; z dimensionless. Breakdown multicollinearity, negative coefficients, confounding.
8. FFT: g(x) decision tree; Acc = (1/N)∑1[g(x_i)=y_i]; Recall_win = TP/(TP+FN). Units probability. Breakdown class imbalance; paper's 80 vs 87 distinction.
9. Role assignment: operator R. Define J=argmax N_neutral; S=argmin N_early among remaining; M=argmax N_center; A=argmax f_near(support); T=remaining. Units counts, seconds, map fraction. Breakdown ties, swaps, no support.
Need mention exact quotes and citations. Good.

<RETROCAUSAL_GENEALOGY>
Lineage. Quotes. Multi-week traps. Need maybe 200-300 words.

<RECURSIVE_THEORY_OF_MIND>
Tilt equation. Counter-trap. Clock. Need 200-300 words.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather. 200-300 words.

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios. 300 words.

Need total >1000. Fine.

Need ensure no mention of betting lines. Avoid "total" except maybe in quote? Avoid "total time spent dead" quote? It contains "total". The invariant says never mention totals; but source quote includes "total time". Hmm. To be safe, paraphrase: "dividing it by the time spent dead by anyone on his team" but then not verbatim. Need quote exact? We can quote shorter: "time spent dead by the player over the preceding three minutes" [PAGE 10] avoiding "total". Good. Avoid "total gold" quote. Avoid "total damage" maybe not. Use "aggregate" instead. In equations, use "sum" not total. Good. Avoid "spread" word except "distribution"? The invariant says spreads as betting lines; "distribution" okay. Avoid "moneyline". Avoid "odds". Good.

Need maybe mention "win probability" not betting. Fine.

Need "zero toy equations": We should explicitly label assumptions and units. Avoid invented ratios. The tilt proxy is paper's ratio; okay. The vision fraction is paper's area ratio; okay. The percentile is paper's. The logistic is paper's. Good.

Need maybe include "source pages provided" exact [PAGE N] markers. We do.

Need "verbatim quotes" in each section? At least in source operators and think trace. Good.

Need ensure "THINK_TRACE" >=400 words. Let's draft with word count. Need maybe not overdo. We'll write around 600 words.

Potential issue: XML with LaTeX containing "<" or "&" must be escaped. We'll avoid raw < and &. Use \le. Use \cup, \sum. Use \mathbb{1}. Use \Delta. Ampersand none. Use "and" not &.

Need perhaps use "SI/information/probability units". Include units for KL: nats or bits. In retrocausal genealogy, define D_KL(P_p||P_q) in nats. Good.

Need maybe use "probability units" as dimensionless. Good.

Need "exact singularity/breakdown regimes" explicit. We'll use "Breakdown:" in each operator.

Need "Crisis habit regression vs counter-trap vs clock": We'll structure bullets. "Crisis habit regression" = tilt. "Counter-trap" = metric gaming/passivity. "Clock" = time management, death timers, 3-minute delay, patch cycles. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. We can say: The paper does not measure physical/biomechanical/weather layers; therefore any claim requiring them is vetoed. But eSports has physical substrate: GPU, network, client rendering. Need proof by necessary condition: If frame sampling interval Δt_s and minimap cell size δ, champion displacement v Δt_s > δ causes aliasing; if network outage causes missing frames, observation operator O is undefined on missing support; if patch changes map/ward radius, previous coordinate/radius mappings invalid. Then advanced stats that depend on positions (team fights, vision, time management) are invalid. Biomechanical: fatigue/ergonomics not observed; cannot attribute tilt to physiology; only in-game death sequences. Weather: power/network outages produce missing-not-at-random; if correlated with player/region, selection bias. Need cite PAGE 3-4. Good.

Need maybe mention "weather" not in paper. Good.

Need "RLVR" likely means "Reinforcement Learning with Verifiable Rewards". We can say "RLVR-style verification" not overexplain. Use "counterfactual veto" as if claims must survive a verifiable test. Good.

Need not include "I" too much. Fine.

Let's craft final. Need maybe 2500 words. Let's write with precise equations.

Need ensure ">= 1,000-word depth across these exact XML sections" means total? It says across sections. We'll exceed.

Let's begin.

Potential concern: They ask "DRIVE SOURCE: ..." maybe they expect answer in exact XML sections. We'll comply.

Need include no markdown code fences? Plain XML.

Let's draft carefully.

<THINK_TRACE>
The audit trace begins ... 
</THINK_TRACE>

Need cite [PAGE 1], [PAGE 4], etc. Quotes exact. Use curly apostrophes? Source has curly. We can use straight? Verbatim maybe exact with curly? We can copy exact. Fine.

Let's write.

Need maybe mention equations in THINK_TRACE? It's okay.

Potential issue: "THINK_TRACE" deep multi-hop derivation. We can include "Step 1 ... Step 2 ..." and "gray-zone audit". Good.

Let's produce final with all sections. Ensure no "odds" word. Use "win probability". No betting. No "spread". No "total" as betting. Avoid "total" entirely? We can use "aggregate", "cumulative", "sum". Quote "time spent dead by the player" avoids total. The source quote "The OVERALL metric does well." no total. Good.

Need avoid "moneyline". Fine.

Need maybe mention "The paper says 'we chose a random minute from each game, leaving us with millions of independent rows.'" This quote has no total. Good.

Need "The paper says 'These features are: the red and the blue team’s kills, towers, and large monsters killed.'" Good.

Need "Brier score" formal? If include, define Brier = (1/N)∑(p_i-y_i)^2, units probability^2. Good. In RLVR, use Brier. Good.

Need "calibration slope" maybe no formula. Fine.

Need "F1" define? F1=2PR/(P+R). This is a ratio but valid metric. Units dimensionless. Good.

Need "TV distance" maybe use KL. Fine.

Need "D_KL(P||Q)" in nats. Good.

Need "no fake ratios": F1 is standard. Tilt ratio is paper. Vision fraction is paper. Good.

Need "exact singularity/breakdown": For F1 denominator P+R=0. For Brier no issue. For logistic p=0/1. For percentile N_p=0. For tilt denominator zero. Good.

Need "SI/information/probability units": Include "nats", "bits", "dimensionless". Good.

Need maybe "map units" not SI. Say "map fraction or metres after calibration". Good.

Need "probability units" for win probability. Good.

Need "logit per count" for β. Good.

Let's write final. 
Need maybe include "PAGE 15 References" for lineage. Good.

Double-check quote exactness:
PAGE 1: "Being digital, eSports should have vast quantities of data, but sometimes they do not." exact. "We track every champion’s location multiple times every second." exact? Source: "Among other things, we track every champion’s location multiple times every second." We can quote fragment. Good. "There are no privacy concerns here: we only track games that allow public spectating." exact. 
PAGE 3: "Patches happen regularly in LoL, approximately every few weeks." exact. "This bidirectional network traffic is highly encoded, difficult to decipher, and subject to change with every patch." exact. "To avoid cheating, Riot broadcasts spectated games on a three-minute delay." exact.
PAGE 4: "The quintessential approach our eSports optical data tracking software takes is to visually process that minimap and infer all the locations it implicitly shows." exact. "The cloud instance needs an expensive graphics processing unit (GPU) for the game client to function; hence the motivation for the fourth approach." exact.
PAGE 5: "we chose a random minute from each game, leaving us with millions of independent rows." exact. "The machine learning model we used was logistic regression." exact. 
PAGE 6: "we accumulate average win/loss percentages within each integer percentile" exact? Source: "Now we accumulate average win/loss percentages within each integer percentile (e.g. 3rd percentile, 27th percentile, and so on)" yes.
PAGE 7: "an engagement is a continuous sequence of champion-on-champion damage until a few seconds elapse with no damage." exact. "we track the damaged champion and the one who dealt the damage, and include in the team fight any champions within a certain small range of any champion already deemed to be in the engagement." exact. 
PAGE 9: "we can also compute the union of all the regions of vision granted by still-living wards using their specific radius at each moment in time for each team." exact.
PAGE 10: "We can proxy for tilt by calculating the time spent dead by the player over the preceding three minutes" exact? Source: "We can proxy for tilt by calculating the time spent dead by the player over the preceding three minutes and dividing it by the total time spent dead by anyone on his team over the same period." We can quote first part, it ends at three minutes but original continues. A quote can be fragment. Good.
PAGE 12: "All the estimates are highly significant at the 𝑝< 0.0001 level except for Abilities" exact? Source has "All the estimates are highly significant at the 𝑝< 0.0001 level except for Abilities, which has a 𝑝-value of 0.03." Good.
PAGE 13: "fight good fights, don’t die, and don’t waste time." exact.
PAGE 14: "It makes the correct prediction about 80 percent of the time despite only using three metrics." exact. "the FFT correctly predicts victory 87 percent of the time." exact. "don’t die for no reason; if you do, try for some smart kills; if you can’t do that either, at least roam and have decent map coverage." exact.
PAGE 16: exact. Good.

Need include quotes maybe in SOURCE section. Good.

Need maybe include "Table 3" values: β constant 0.2132, favorable 0.0378, deaths 0.0595, vision -0.0088, vision denial -0.0018, carry focus -0.0035, time management 0.0499, survivability -0.0229, laning -0.0023, gold 0.0058, abilities 0.0007. We can include in equation? Maybe list. Good.

Need "source operators and equations" formal. We'll use \operatorname{logit} maybe. Fine.

Need "z-statistic" units dimensionless. Good.

Need "model with p=0 or p=1" log loss infinite. Good.

Need "multicollinearity" cite Table 4 correlations. Good.

Need "FFT ambiguity" in think trace and source. Good.

Need "role detection" equation. Good.

Need "CROSS_LAYER" proof. Good.

Need "RLVR" scenarios. Good.

Let's write final now.
</NATIVE_REASONING>

<THINK_TRACE>
The audit trace follows the paper as a five-stage pipeline: (1) observation extraction, (2) per-second state construction, (3) event definition and labeling, (4) aggregation to percentile and bundle metrics, and (5) predictive and interpretable modeling. Stage 1 is not a video-capture claim; it is a rendering-dependent observation claim. The authors state: “The quintessential approach our eSports optical data tracking software takes is to visually process that minimap and infer all the locations it implicitly shows” [PAGE 4]. That means the observation operator is a mapping from rendered minimap pixels to champion coordinates, health, mana, cooldowns, items, and similar state variables. The paper also says “We track every champion’s location multiple times every second” [PAGE 1], but the exact frame rate, pixel-to-map calibration, overlap-resolution rule, and missing-frame policy are not reported. Those omissions are the first gray-zone: every downstream team-fight, vision, time-management, and role claim inherits the minimap detector’s false positives and false negatives.

Stage 2 builds a state vector. The paper lists game state, resources, statistics, damage, and location fields in Table 1 [PAGE 4], including champion health, mana, cooldowns, items, wards, damage dealt and received, and “X Location and Y Location; Velocity and Acceleration; Stealth Status” [PAGE 4]. Formally, I treat this as \(s_i(t)=[x_i(t),y_i(t),h_i(t),m_i(t),c_i(t),\ldots]\), with position in map units or metres after calibration, health and mana in game units, and cooldowns in seconds. The paper does not give an explicit measurement model or error covariance, so any later regression is implicitly a plug-in regression using noisy covariates.

Stage 3 defines the distinctive labels. The authors state: “Worthless deaths are ones that do not increase your team’s win probability. Smart kills are ones that do increase your team’s win probability” [PAGE 2]. This requires an event-time win-probability differential. If \(W(t)=P(\text{win at time }t)\), then for event \(e\) the label is \(\Delta W_e=W(t_e^+)-W(t_e^-)\). A smart kill is a kill with \(\Delta W_e>0\); a worthless death is a death with \(\Delta W_e\le 0\) under the paper’s wording. But the paper does not specify the pre/post window, smoothing rule, or whether the same fitted win-probability model is used for labeling and evaluation. That is a second gray-zone: near \(W=0.5\), small model noise can flip a label; near \(W=0\) or \(W=1\), the logit scale compresses deltas and makes “smart” versus “worthless” unstable.

Stage 4 aggregates individual metrics by tier percentile. The paper says “Within each tier, we can compute the percentiles for the metric in question” and “we accumulate average win/loss percentages within each integer percentile” [PAGE 6]. This is an empirical conditional win-probability curve: for tier \(r\), metric \(m\), percentile bin \(p\), the ordinate is the sample mean of the binary win indicator. The gray-zone is that the curve is associational. It does not identify a causal effect of a kill or death, because the percentile is computed within tier and the outcome is the team outcome; role, champion, patch, and teammate quality are not jointly randomized.

Stage 5 fits logistic regressions on ten stat bundles. The paper reports “We fit a standard logit model on the ten stat bundles percentiles and a constant term” [PAGE 12], with coefficients such as deaths \(0.0595\), favorable fights \(0.0378\), time management \(0.0499\), and survivability \(-0.0229\) [PAGE 12]. The authors note “All the estimates are highly significant at the \(p<0.0001\) level except for Abilities” [PAGE 12] and “Surprisingly, several of the bundles have negative marginal contributions, including survivability” [PAGE 12]. The two explanations they give are passivity and multicollinearity; Table 4 shows the largest positive correlation is \(0.51\) between carry focus and favorable fights and the largest negative correlation is \(-0.75\) between vision denial and gold [PAGE 13]. The gray-zone is that significance is not causal identification, and the negative marginal signs are conditional effects after controlling for the other bundles, not isolated effects.

The fast-and-frugal tree is the interpretability check. The paper says “It makes the correct prediction about 80 percent of the time despite only using three metrics” [PAGE 14], but also “the FFT correctly predicts victory 87 percent of the time” [PAGE 14]. Those two numbers are not reconciled in the source. One may be overall accuracy and the other victory-class recall, or one may refer to a different split; the paper does not say. That ambiguity is a gray-zone because class imbalance can make 80 percent accuracy compatible with poor victory recall. The final rule is: “don’t die for no reason; if you do, try for some smart kills; if you can’t do that either, at least roam and have decent map coverage” [PAGE 14]. The audit therefore treats the FFT as a useful descriptive rule, not as a validated causal policy.

Other gray-zones: team fights require an engagement threshold “until a few seconds elapse with no damage” and inclusion “within a certain small range” [PAGE 7], but neither threshold nor range is numerically fixed. Vision is computed as a union of ward regions “using their specific radius at each moment in time” [PAGE 9], which ignores terrain occlusion unless the map model handles it. Role detection is algorithmic but tie-broken by “The remaining champion is the top” [PAGE 16], which assumes exactly five roles and no swap ambiguity. Finally, patch drift is explicit: “Patches happen regularly in LoL, approximately every few weeks” [PAGE 3], and the authors restricted one analysis to “the ~150,000 games from the latest patch” because patches “can significantly affect gameplay” [PAGE 6]. That is the dominant multi-week trap.

<SOURCE_OPERATORS_AND_EQUATIONS>
1. Optical observation operator. Let \(F_t\) be the rendered frame at time \(t\), and let \(O\) be the detector mapping \(F_t\) to state \(s_i(t)\). The paper’s own description is: “The quintessential approach our eSports optical data tracking software takes is to visually process that minimap and infer all the locations it implicitly shows” [PAGE 4]. Units: position in map units or metres after calibration; health/mana in game units; cooldowns in seconds; confidence scores dimensionless. Assumption: the minimap is rendered at sufficient resolution and frame rate. Breakdown regimes: champion overlap, fog-of-war ambiguity, missing frames, GPU/network interruption, patch changes to minimap icons or map geometry. Exact singularity: if the detector assigns zero or multiple identities to the same champion, \(O\) is not a function and the state vector is undefined.

2. In-game win-probability model. The paper says “The machine learning model we used was logistic regression” [PAGE 5] and lists features as “the red and the blue team’s kills, towers, and large monsters killed” [PAGE 5]. A formal version is
\[
P(y=1\mid x_t)=\sigma\!\left(\beta_0+\beta_K K_R+\beta_K' K_B+\beta_T T_R+\beta_T' T_B+\beta_M M_R+\beta_M' M_B+\beta_t t\right),
\]
with \(\sigma(z)=1/(1+e^{-z})\). Units: \(P\) is dimensionless probability; \(z\) is a logit, dimensionless; \(K,T,M\) are counts, dimensionless; \(t\) is minutes; each \(\beta\) is a logit per count or per minute. The fitted loss is
\[
L(\beta)=-\sum_{i=1}^{n}\log P_\theta(y_i\mid x_i),
\]
which is in nats if natural log is used. Assumptions: independent rows after random-minute sampling; stable feature meaning across games; correct outcome labels. Breakdown: \(P_\theta(y_i\mid x_i)=0\) for the realized class makes the log loss infinite; perfect separation can make coefficient estimates diverge; the paper’s random-minute rule “we chose a random minute from each game, leaving us with millions of independent rows” [PAGE 5] removes within-game row correlation but also discards temporal path information. Exact singularity: if a feature is constant within a patch or perfectly predicts the outcome, the Hessian can be singular.

3. Smart-kill and worthless-death operator. Define
\[
\Delta W_e=W(t_e^+)-W(t_e^-).
\]
Units: probability. The paper’s wording is “Worthless deaths are ones that do not increase your team’s win probability. Smart kills are ones that do increase your team’s win probability” [PAGE 2]. Assumption: \(W\) is a calibrated event-time win probability and the pre/post window is stable. Breakdown: near \(W=0\) or \(W=1\), the probability scale compresses; near threshold \(0\), noise flips labels; the paper does not specify the event window, so a death followed by a return kill can be labeled differently under different windows. Exact singularity: if \(t_e^+=t_e^-\), \(\Delta W_e=0\) and the event is unclassifiable under a strict positive-kill rule.

4. Team-fight engagement operator. The paper defines “an engagement is a continuous sequence of champion-on-champion damage until a few seconds elapse with no damage” and says “we track the damaged champion and the one who dealt the damage, and include in the team fight any champions within a certain small range of any champion already deemed to be in the engagement” [PAGE 7]. Formally, let \(E=[a,b]\) be a maximal damage interval with gaps \(\le \tau_g\), and let \(C(E)\) be the transitive closure of champions within radius \(r\) of any champion already in \(C(E)\). Units: \(\tau_g\) in seconds; \(r\) in map units or metres. Assumption: damage events are correctly attributed and positions are synchronized. Breakdown: missing damage events split one fight into two; false damage merges two fights; overlap and fog cause position errors. Exact singularity: if no damage event occurs, \(E=\varnothing\); if \(r=0\), only exactly co-located champions join.

5. Vision-union operator. The paper states it can “compute the union of all the regions of vision granted by still-living wards using their specific radius at each moment in time for each team” [PAGE 9]. Formal:
\[
V_{\text{team}}(t)=\left(\bigcup_{w\in W_{\text{team}}(t)} D(x_w(t),r_w(t))\right)\cap \mathcal{M},
\]
where \(D\) is a disk, \(x_w\) is ward position, \(r_w\) is radius, and \(\mathcal{M}\) is the map region. Units: area in \(m^2\) after calibration, or fraction of map area, dimensionless. Assumption: circular visibility and no terrain occlusion beyond the map mask. Breakdown: terrain walls, brush, elevation, or line-of-sight blocking make the disk union an overestimate; missing ward timers make it an underestimate. Exact singularity: if \(r_w=0\) or \(W_{\text{team}}(t)=\varnothing\), the union is empty.

6. Percentile and individual-performance curve. The paper replaces a metric by “its percentile, meaning, he did better than what portion of all players in his tier across all games in our dataset” [PAGE 6]. Let \(F_{r,m}\) be the empirical CDF of metric \(m\) in tier \(r\), so \(p_{i}=F_{r,m}(m_i)\). Then
\[
\bar Y_{r,m}(p)=\frac{1}{N_p}\sum_{i:p_i=p}\mathbf{1}[Y_i=1].
\]
Units: \(p\) is dimensionless percentile; \(\bar Y\) is probability. Assumption: tiers are comparable and patch effects are controlled. Breakdown: \(N_p=0\) for sparse percentiles; ties require a tie-breaking rule; patch mixing changes \(F_{r,m}\). Exact singularity: if every player in a tier has the same metric value, the percentile is degenerate.

7. Bundle logistic regression. The paper reports
\[
\hat y=\frac{1}{1+e^{-(\beta_0+\beta_1 f_1+\cdots+\beta_{10}f_{10})}},
\]
with \(f_i\) the ten bundle percentiles [PAGE 12]. Units: \(f_i\) dimensionless percentile; \(\beta_i\) logit per percentile; \(z\)-statistics dimensionless. Table 3 gives estimates such as deaths \(0.0595\) with \(z=127.85\), favorable fights \(0.0378\) with \(z=99.90\), time management \(0.0499\) with \(z=102.87\), and survivability \(-0.0229\) with \(z=-55.90\) [PAGE 12]. Assumption: additive logit effects and approximate independence of bundles. Breakdown: multicollinearity changes marginal signs; omitted role or champion effects confound; the paper itself notes “Very few exhibit substantial multicollinearity” [PAGE 13] but the largest correlation is still \(0.51\) and the largest negative is \(-0.75\) [PAGE 13]. Exact singularity: perfect collinearity makes the design matrix rank-deficient.

8. Fast-and-frugal tree. Let \(g(x)\in\{0,1\}\) be the tree’s victory prediction. Overall accuracy is
\[
\mathrm{Acc}=\frac{1}{N}\sum_{i=1}^{N}\mathbf{1}[g(x_i)=y_i],
\]
and victory recall is
\[
\mathrm{Recall}_{1}=\frac{TP}{TP+FN}.
\]
Both are dimensionless probabilities. The paper says “It makes the correct prediction about 80 percent of the time despite only using three metrics” and “the FFT correctly predicts victory 87 percent of the time” [PAGE 14]. Assumption: the reported numbers refer to the same held-out distribution. Breakdown: if the two numbers refer to different metrics or splits, the tree’s performance is ambiguous; class imbalance can make accuracy misleading. Exact singularity: \(\mathrm{Recall}_1\) is undefined when \(TP+FN=0\), and \(\mathrm{Acc}\) is undefined when \(N=0\).

9. Role-assignment operator. The appendix gives a deterministic sequence: “The jungler is the champion who killed the most early minions that were neutral jungle minions” [PAGE 16]; “the support is the one who killed the fewest overall early minions” [PAGE 16]; “the mid is the one who killed the most early minions near the map’s center” [PAGE 16]; “the ADC is the one who was most frequently near the support during the first ten minutes of gameplay, where near is defined as being within one-tenth of the width or height of the map” [PAGE 16]; “The remaining champion is the top” [PAGE 16]. Units: minion counts dimensionless; time in seconds; “near” as a map-fraction distance, dimensionless. Assumption: exactly five champions per team and no role swap. Breakdown: ties, nonstandard lanes, jungler without Smite, lane swaps, and duplicate “near” counts. Exact singularity: if two champions tie for the max or min, the rule is undefined without a tie-breaker.

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is explicitly physical-sports optical tracking carried into eSports. The authors write that “Physical sports have been revolutionized in the past few years by similar optical tracking data for players (c.f. [2], [3])” [PAGE 1] and cite Maheswaran et al. 2012 on rebounds and Cervone et al. 2014 on POINTWISE [PAGE 15]. They also cite Duch et al. 2010 on individual player performance [PAGE 15] and Phillips’ FFTrees implementation [PAGE 15]. The genealogy is therefore: NBA optical tracking → event inference from player and ball coordinates → individual valuation and win-probability modeling → the LoL adaptation, where the “optical” signal is the game client’s minimap rather than a physical camera. The paper claims eSports has an advantage because “we are blessed not only with raw location information, but the actions as well” [PAGE 8], so the chain from pixels to actions is shorter than in basketball.

A retrocausal reading is that the future open-source release will materially change what prior LoL API-only analytics could have claimed. The paper says all code and data “will soon be made available and open sourced” [PAGE 3], and the conclusion repeats that “The code for our entire process will soon be open sourced” [PAGE 15]. That release would retroactively enable reanalysis of old games, but only for games whose client version, map geometry, ward radius, and champion icons are reconstructible. The multi-week trap is patch drift: “Patches happen regularly in LoL, approximately every few weeks” [PAGE 3], and the bidirectional traffic is “subject to change with every patch” [PAGE 3]. Formally, if \(P_p\) is the game distribution on patch \(p\), a model trained on \(P_p\) has expected loss on \(P_q\) that depends on \(D_{\mathrm{KL}}(P_p\parallel P_q)\) in nats; if a new champion or item changes the support of the feature space, the old feature map is not merely shifted but undefined. The authors acknowledge this by focusing on “the ~150,000 games from the latest patch” [PAGE 6]. The historical trap is therefore not a single model decay but a versioned data-contract problem: detector, coordinate system, ward radius, role meta, and win-probability calibration must all be revalidated together.

<RECURSIVE_THEORY_OF_MIND>
The crisis-habit regression in this paper is tilt. The authors write: “We can proxy for tilt by calculating the time spent dead by the player over the preceding three minutes” [PAGE 10] and divide by teammates’ dead time over the same window. Let
\[
T_i(t)=\frac{D_i(t-3\,\mathrm{min},t)}{\sum_{j\in \text{team}}D_j(t-3\,\mathrm{min},t)}
\]
when the denominator is positive; \(D\) is seconds, so \(T_i\) is dimensionless. The paper’s example is behavioral: “notice the player first died in a favorable and then a balanced team fight, before taking three unfavorable fights in a row” [PAGE 10]. The recursive theory-of-mind point is that tilt is not just an internal emotion; it is a policy regression after a loss. The player updates a belief about the opponent’s weakness, over-weights the last death, and repeats an aggressive action. The counter-trap is that the paper’s advice can be gamed or over-learned. The FFT rule says “don’t die for no reason; if you do, try for some smart kills; if you can’t do that either, at least roam and have decent map coverage” [PAGE 14]. If players optimize only for low worthless deaths, they can become passive; the logistic regression’s negative survivability marginal [PAGE 12] is a warning that conditioning on all bundles can reward aggression even when a single survivability metric looks good. The clock layer is also recursive: death timers, cooldowns, the three-minute spectator delay [PAGE 3], and the patch cycle all change the value of an action. A player who models the opponent’s model may bait a “smart kill” attempt; the evaluator who models the player must therefore use event-time win-probability deltas, not raw kill counts. The correct counter-trap is to treat the FFT as a prior for review, not a policy to maximize, and to re-estimate the tilt window and team-fight context after each patch.

<CROSS_LAYER_VETO_ADJUDICATION>
The paper is eSports, so the physical, biomechanical, and weather layers are not direct measured variables. That absence is itself a veto: any claim that a player’s performance is caused by biomechanics, fatigue, ergonomics, or weather is outside the source’s observational support. The paper tracks in-client state and actions, not human physiology. What does survive is a narrower physical-substrate veto proof. The data pipeline requires a rendered client, a GPU, and network continuity: “The cloud instance needs an expensive graphics processing unit (GPU) for the game client to function” [PAGE 4], and the network traffic is “highly encoded, difficult to decipher, and subject to change with every patch” [PAGE 3]. If the frame-sampling interval is \(\Delta t_s\) and the minimap cell size is \(\delta\), a champion moving at speed \(v\) displaces \(v\Delta t_s\) between samples; when \(v\Delta t_s>\delta\), the position aliases and team-fight/vision/time-management features are corrupted. If a network or power interruption removes frames, the observation operator is undefined on the missing support, and missingness can be non-random by region or hardware. Biomechanical veto: the paper has no input-device, reaction-time, fatigue, or ergonomic channel, so it cannot adjudicate whether a “worthless death” is a decision error or a motor/hardware failure. Weather veto: weather is not measured; only its infrastructure proxy, such as outage or latency, could enter, and then only as a missing-data or latency covariate. The privacy condition is also conditional: “There are no privacy concerns here: we only track games that allow public spectating” [PAGE 1]. If spectating is not public, the privacy veto applies. Thus the valid claims are conditional on public spectating, stable client/patch, adequate GPU/network, and calibrated minimap detection; the invalid claims are any strong causal attribution to physical or environmental layers.

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Patch-drift calibration veto. Train the win-probability model on patch \(p\) and evaluate on patch \(q\) with a new champion or item that changes feature support. Verifiable prediction: the calibration curve will shift, the Brier score
\[
\mathrm{Brier}=\frac{1}{N}\sum_{i=1}^{N}(p_i-y_i)^2
\]
in probability-squared units will increase relative to within-patch cross-validation, and smart-kill/worthless-death labels near \(\Delta W_e\approx 0\) will become unstable. Veto rule: if the pre-registered calibration slope leaves its acceptable interval or if the new patch’s feature support is undefined, the old model and its derived labels are vetoed for that patch. The paper’s own patch warning supports this: patches “can significantly affect gameplay” [PAGE 6].

Scenario 2: Random-minute independence veto. Compare the paper’s random-minute logistic model [PAGE 5] against a clustered or time-series model that keeps all minutes and uses game-level cluster-robust standard errors. Verifiable prediction: coefficient signs may persist, but the \(z\)-statistics will shrink because the random-minute design removes within-game correlation rather than modeling it. Veto rule: if the individual-bundle significance claimed in Table 3 [PAGE 12] does not survive game-level clustering, the strong marginal-significance claim is vetoed, even if the descriptive win-probability curve remains useful. This scenario is verifiable because the same games can be re-split by game ID.

Scenario 3: Optical-tracking measurement-validity veto. On a sample of public spectated games, run the minimap detector and the direct client hook in parallel. Verifiable prediction: champion overlap, brush, and fog will produce position false negatives and team-fight boundary errors; event-level \(F_1\)
\[
F_1=\frac{2PR}{P+R}
\]
in dimensionless units will be lower for team-fight participation and vision than for gross position. Veto rule: if position error exceeds one minimap cell or if team-fight/vision event \(F_1\) falls below the pre-registered acceptance level, the advanced stats that depend on those events are vetoed as measurement-valid, even if the win-probability regression still predicts. This follows the paper’s reliance on visual minimap processing [PAGE 4] and its own warning that the minimap is “the most challenging and most rewarding” [PAGE 4]. A fourth, optional audit would separate the FFT’s “80 percent” and “87 percent” claims [PAGE 14] into accuracy and victory recall; if the 80 percent figure is near the majority-class baseline, the FFT’s policy interpretation is vetoed.