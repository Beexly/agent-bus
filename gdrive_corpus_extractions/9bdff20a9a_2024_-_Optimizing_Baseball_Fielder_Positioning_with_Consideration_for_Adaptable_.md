---
source: "2024 - Optimizing Baseball Fielder Positioning with Consideration for Adaptable Hitters - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2024"
pages: 26
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5428
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided paper: "Optimizing Baseball Fielder Positioning with Consideration for Adaptable Hitters" (MIT SSAC 2024). They provided the full source text across 26 pages.

Constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use real equations from the paper (1)-(18), cite pages. Must be >= 1000 words total across sections.

Let's plan each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. Discuss:
- Bayesian hierarchical model for p(h), p(v|h), p(s|v). Chain rule factorization (Eq 5, p4).
- Conditional independence assumption s ⟂ h | v (p4). Grounds: Figures 2 and 3.
- Out models: ground ball logistic regression Eq 9 (p11), non-ground ball Eq 10 (p14). Sigmoid. Units: a° is angle difference (degrees), tb is seconds (depth/feet divided by exit speed ft/s), δ_t is seconds (hang time minus distance/27 ft/s).
- Combined f via law of total probability Eq 11 (p15).
- wOBA model Eq 12 (p15) with weights 0.883, 1.244, 1.569, 2.004 (2023). Objective Eq 2 (p1).
- Game theoretic extension: zero-sum sequential game Eq 3a/3b (outs) and Eq 4a/4b (runs/wOBA) (p2). Minimax.
- Shift constraints: projected SGD (p17). Conditions: 1B within 40 ft of first; infielders within 95 ft of rubber; two on either side of second base (spray angle relative to second base? Actually p17 says third baseman/shortstop spray angles >0 projected to 0; second baseman <0 projected to 0).
- Gray zones: ADVI vs NUTS (p7, p8, p9). Public vs proprietary data discrepancy (p18). The shift-beater dominance result (p21) vs bunt equilibrium (p23). The paper admits public out models mislearn depth-bunt relationship (p24), requiring proprietary Rangers model.
- Multi-hop: how spray angle affects launch angle conditional (Eq 7c p8), how launch angle bins affect exit speed gamma (Eq 8c p9), how these feed into sampled batted balls for SGD Eq 13/14 (p16), then into game equilibrium Eq 15/16 (p19).

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. Need to reproduce equations accurately with page cites.
- Eq (1) p1: p* ∈ argmax_{p∈P} E_{b~d}[f(b,p)]
- Eq (2) p1: p* ∈ argmin E[(1-f(b,p))·f_woba(b)]
- Eq (5) p4: p(h,v,s) = p(h)p(v|h)p(s|v)
- Eq (9) p11: f_gb(b,p) = σ(-2.78 -0.15 a° + 5.87 tb -1.32 tb^5)
- Eq (10) p14: f_¬gb(b,p) = σ(-2.17 + 1.5 δ_t)
- Eq (11) p15: f(b,p) = f_gb(b,p) 𝟙_gb(b) + f_¬gb(b,p)(1-𝟙_gb(b))
- Eq (12) p15: f_woba(b) = w_1B p(1B|b) + ... weights.
- Eq (13) p16: sample average approximation.
- Eq (15a/b) p19: minimax outs.
- Eq (16a/b) p19: minimax wOBA.
- Eq (17) p20: Chas McCormick equilibrium.
- Eq (18) p22: Carlos Santana bunt vs swing.
- Units: h,v in degrees (spray -55 to 55 deg, launch angle v categories ground v≤10, line drive 10<v≤25, fly 25<v≤50, pop 50<v per p3), s in ft/s (implied by exit speed; transformed z = s_max - s p8), tb in seconds (depth ft / exit speed ft/s p11), δ_t in seconds (hang time s - distance ft / 27 ft/s p14), positions in feet relative to home plate / pitching rubber / bases (p17).
- Assumptions: Tropicana Field only p14 (dome, consistent atmosphere); no runners on base p11; 2023 data only to avoid shifts p11; standard outfield alignment p12; infield dirt within 95 ft p32 ref; shift ban constraints p17.
- Breakdown/singularity: sigmoid saturation when |logit| large; ADVI approximate posterior may underestimate variance; NUTS sampling; conditional independence s ⟂ h | v may fail if pull vs oppo changes exit speed for same launch angle (Fig 3 suggests okay but not proven); small sample batters borrow from hierarchy (p4).

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Carleton [13] (2016) shift doesn't work; Easton & Becker [15] integer programming; Gerlica et al [16] k-means outfield; Harris et al [17] Swing shift; Powers [28] probability distribution over batted-ball trajectories; Lewis & Bailey [23] spray charts; Model [25] hitting around shift; Tango, Lichtman, Dolphin [30] The Book (2007) quote about bunting to keep defense from playing all the way back (p23). References [29] wOBA runs affine relationship. [4] MLB shift ban rule. [3] Baseball Savant average starting positions. [19] Alan Nathan trajectory calculator.
- Multi-week traps: Over a multi-week series, a hitter observing repeated shifting may adapt (sequential game). The paper's static distribution (Section 2) assumes hitter doesn't adapt (p2 critic). If defense commits to a fixed p* for a week, batter can learn d* from Eq 3b/4b, causing exploitability. The shift-ban itself (2023) is a regulatory trap: intended to raise offense, but paper suggests encouraging shifting + bunting might raise BA more (p25 conclusion). Retrocausal: defense positioning influences future batter approach, which influences the distribution the defense optimized against originally—feedback loop.
- Historical shift ban context: 2023 rule requires four infielders in dirt, two on either side of second base (p1, p17). Prior to 2023 any fair territory positioning with 1B near first (p17).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This section should model the strategic recursion: Defense thinks batter will pull → shifts → batter anticipates shift and bunts/goes oppo → defense anticipates that and plays shallower/less shifted → batter reverts to pull (crisis habit regression) → etc.
- Use the paper's examples: McCormick pull dominates oppo (p21) so equilibrium collapses to pull defense; Santana/Gallo bunt threat is credible against extreme shift (blue defense BA 0.453/0.574 on bunts) forcing third baseman shallower; equilibrium BA improves for batter by swinging away (0.272 vs 0.268 for Santana; 0.226 vs 0.223 for Gallo) because defense over-adjusts to bunt threat.
- Crisis habit regression: Under pressure (crisis: extreme shift), hitter reverts to habitual pull swing rather than executing oppo/bunt. Paper finds McCormick's pull dominates even when defense plays for oppo (p21). So the batter's "adaptive" option may not be executed under crisis; habit regression means d* = d_pull.
- Counter-trap: Defense sets a trap (extreme shift) expecting pull; batter counter-traps by bunting (Santana/Gallo). Defense's counter-counter-trap is equilibrium positioning slightly shallower at 3B (p23).
- Clock: The sequential game has defense move first, batter observes and responds (p2). The "clock" is the order of moves and the time for batter to recognize alignment. If clock is too short (pitch clock? not in paper; but conceptually), batter cannot adapt, so static optimization Eq 1/2 applies. If clock allows observation, Eq 3/4 applies. The paper assumes batter observes positioning before choosing d (p2). Multi-week: repeated play allows learning of the equilibrium; single at-bat may not.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: Tropicana Field dome assumption (p14) excludes atmospheric variation; Coors Field caveat p14. Ballpark dimensions from [14] p16 to remove foul/HR samples.
- Biomechanical layer: fielder sprint speed fixed at 27 ft/s MLB average (p14); infielder within 95 ft of rubber (p17); 1B within 40 ft of first (p17); ground ball out requires throw to first vs non-ground catch (p10). Ball time to fielder tb = depth / exit speed assumes no deceleration (p11).
- Weather veto: Dome = consistent conditions p14; outdoor parks would require refitting XGBoost hang time/landing models p14. Wind, humidity, air density affect hang time and landing (Alan Nathan calculator p12/13), so model is vetoed for non-dome unless recalibrated.
- Adjudication: Which vetoes bind? Tropicana assumption is binding for all numerical results (p14). The projected SGD constraints bind at optimization boundary p17. Proprietary Rangers model needed because public model failed to learn depth-bunt relationship (p24), a data-layer veto that overrode public-model results.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Likely wants counterfactual veto scenarios that can be verified. Provide 3 scenarios with predictions.
1. Weather/atmosphere veto: If game moved from Tropicana Field to Coors Field (high altitude, lower air density) without refitting XGBoost hang-time/landing-distance model, predicted hang times are biased low (less drag → longer hang time, farther carry). The out model f_¬gb using δ_t would systematically underestimate catch probability for deep fly balls. Verification: Compare model-predicted hang time vs Statcast-measured at Coors; expected systematic negative bias in δ_t (predicted fielder arrives later relative to ball). Prediction: f_¬gb overestimates hits for fly balls at Coors; optimal positioning would place outfielders too shallow.
2. Bunt depth model veto (public vs proprietary): Public out model mislearned depth-likelihood for bunts (p24), causing third baseman to remain too deep in equilibrium vs Santana (equilibrium BA 0.272 but bunt against equilibrium still advantageous, though not quantified fully). With proprietary Rangers model vs Gallo, third baseman depth "looks more reasonable" p24. Verification: Holdout bunt plays with fielder start coordinates; test calibration of f_gb for bunt-type ground balls (low exit speed ~34 ft/s p22, launch angle near 0). Prediction: public model assigns too low out probability to shallow third baseman vs bunt; optimizer underweights shallow positioning; counterfactual veto removes deep-equilibrium for bunt-prone lefties.
3. Conditional independence violation veto: Assumption s ⟂ h | v (p4). If true joint has exit speed depending on spray angle within launch-angle bin (e.g., pulled balls hit harder than oppo balls at same launch angle), then sampled batted ball distribution p(h,v,s) is misspecified. Verification: Fit p(s|v,h) nonparametrically on Statcast 2018-2022; perform conditional independence test (e.g., KS test of s distribution within fixed v bin across h<0 vs h>0). Prediction: If violated, Eq 5 factorization biases batter-specific distributions; optimizer positions fielders using wrong spray-exit speed joint, leading to suboptimal angle difference a° and tb in Eq 9. Expected outs objective overestimated by margin equal to mutual information I(s;h|v) in nats/bits.

Need to ensure no betting lines. No mention of odds, spreads, moneylines, totals. Avoid words like "odds" except in log odds context from paper? The paper mentions "log odds" in figure 9 p12. That's fine, it's not betting. But avoid "odds" in betting sense. The user said zero betting lines: never mention spreads, totals, moneylines, or odds. I should probably avoid the word "odds" entirely to be safe, or only use "log-odds" as in paper? Better to avoid "odds" completely or use "logit" instead. I will say "logit" instead of log odds where needed, but since the paper uses "log odds" I can cite it but maybe rephrase. Safer to avoid the word "odds" entirely. I'll use "logit" or "log-odds (logit)"? Hmm, "log odds" contains "odds". The instruction says never mention spreads, totals, moneylines, or odds. I will not use the word "odds" at all. Use "logit" or "sigmoid input".

Word count: Need >=1000 words across sections. I'll aim for ~1500-1800 words total to be safe.

Need to cite exact [PAGE N] markers and verbatim quotes where source pages are provided. I have page numbers 1-26. I will cite like [PAGE 1], [PAGE 4], etc.

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

I must ensure formal LaTeX equations are correct.

Let's write.

THINK_TRACE content (~500 words):
- Start with hierarchical factorization. Chain rule p(h,v,s)=p(h)p(v|h)p(s|h,v) then conditional independence s ⟂ h | v reduces to p(s|v) [PAGE 4]. This is a strong structural assumption justified by Figures 2 and 3 [PAGE 4-5].
- Spray angle transformed to [0,1] via beta mixture [PAGE 5-6]. Hierarchical priors ADVI [PAGE 6-7].
- Launch angle conditional on spray sign (pull vs oppo) normal with empirical priors N([5.1,21],[5.2,5.7]) and sigma Gamma [PAGE 7-8].
- Exit speed transformed z = s_max - s to right-skew; gamma per launch-angle bin (ground, line drive, fly, pop-up) [PAGE 8-9].
- These distributions generate samples b for the out model.
- Ground ball out model: logistic regression on a° (min absolute angle difference) and t_b (depth / exit speed) [PAGE 11], Eq 9. Non-ground ball: delta_t = hang_time - distance / 27 ft/s [PAGE 14], Eq 10.
- Combined via law of total probability Eq 11 [PAGE 15]. wOBA Eq 12 [PAGE 15] with weights [PAGE 15].
- Optimization: projected SGD on Eq 13/14 [PAGE 16]. Constraints [PAGE 17].
- Game extension Eq 15/16 [PAGE 19]. Batter observes p and picks d from D to minimize outs / maximize wOBA.
- Gray zones: ADVI vs NUTS approximation [PAGE 7-9]; public vs proprietary out model discrepancy [PAGE 18]; public model mislearned bunt-depth relationship requiring Rangers data [PAGE 24]; conditional independence may fail if pull/oppo exit speeds differ within launch bin [PAGE 4-5]; Tropicana-only atmospheric assumption [PAGE 14]; shift-ban constraints [PAGE 17].
- Multi-hop: p(h) → p(v|h) → p(s|v) → sampled b → f(b,p) → gradient → p* → batter observes p* → d* → new f expectation → equilibrium. This is the core derivation chain.

SOURCE_OPERATORS_AND_EQUATIONS (~450 words):
List equations with pages and units.

RETROCAUSAL_GENEALOGY (~250 words):
- Cite Carleton [13] skepticism [PAGE 1-2]. Easton & Becker [15] discrete space [PAGE 1]. Harris et al [17] spatial [PAGE 1]. Powers [28] joint distribution [PAGE 2]. Tango et al [30] quote about bunting [PAGE 23]. MLB shift ban [4] [PAGE 1]. 2023 rule constraints [PAGE 17].
- Multi-week traps: fixed p over weeks allows batter to learn d* [PAGE 2]. Retrocausal feedback: defense's p changes batter's d, invalidating original p(h,v,s) estimation [PAGE 2]. Shift ban as regulatory trap: paper concludes encouraging shifts + bunting may raise BA more than ban [PAGE 25].

RECURSIVE_THEORY_OF_MIND (~300 words):
- Levels: Defense L0 assumes static d. Batter L1 observes p and switches d. Defense L2 anticipates d* and plays equilibrium.
- Crisis habit regression: McCormick pull dominates oppo even when defense plays for oppo [PAGE 21]. Under pressure, hitter reverts to pull habit; d* = d_pull.
- Counter-trap: Extreme shift (blue) invites bunt; Santana bunt BA vs blue 0.453, Gallo 0.574 [PAGE 23-24]. Defense counter-traps by moving 3B shallower [PAGE 23]. Equilibrium BA for batter swinging away improves vs static shift (Santana 0.272 vs 0.268; Gallo 0.226 vs 0.223) [PAGE 23-25].
- Clock: Sequential move structure [PAGE 2]. If batter cannot observe p before swing (short clock), static Eq 1/2 applies. If observation allowed, Eq 3/4 minimax applies. Multi-week clock: repeated exposure lets batter converge to d*.

CROSS_LAYER_VETO_ADJUDICATION (~250 words):
- Atmospheric: Tropicana dome only [PAGE 14]; Coors caveat [PAGE 14]. Veto: outdoor/refit required.
- Biomechanical: 27 ft/s sprint speed [PAGE 14]; 95 ft rubber [PAGE 17]; 40 ft first base [PAGE 17]; no deceleration assumption for t_b [PAGE 11].
- Physical/ballpark: Trop dimensions [PAGE 16]; remove foul/HR [PAGE 16].
- Data layer: public average starting positions vs proprietary Rangers [PAGE 18, 24]. Public model mislearned bunt depth [PAGE 24].
- Adjudication: Tropicana assumption binds all numeric results [PAGE 14]. Projected SGD constraints bind at boundary [PAGE 17]. Proprietary model overrides public for bunt equilibria [PAGE 24].

RLVR_COUNTERFACTUAL_VETOES (~250 words):
Three verifiable veto scenarios + predictions. No fake ratios. Use mutual information I(s;h|v) maybe but that's information theory, not a toy ratio. It's fine. Just don't invent Force/Fatigue.

1. Atmosphere veto (Coors): prediction bias in delta_t; outfielders too shallow.
2. Bunt-depth public model veto: prediction public model underestimates shallow 3B out prob on bunts; equilibrium too deep.
3. Conditional independence violation: test I(s;h|v)>0; prediction factorization biases Eq 9 inputs a° and t_b.

Need to keep total words high. Let's write fully.

Check for banned words: "odds" - I'll avoid. "spreads", "totals", "moneylines" - not mentioned. "betting" - not mentioned.

Let's ensure verbatim quotes where useful. I'll quote a few short phrases with page citations.

Now draft final.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain begins with the joint density factorization on [PAGE 4]: the authors apply the chain rule to write p(h,v,s) = p(h)p(v|h)p(s|h,v), then impose the conditional-independence assumption that exit speed s is independent of spray angle h given launch angle v, reducing the expression to p(h,v,s) = p(h)p(v|h)p(s|v) [PAGE 4, Eq. (5)]. This is justified empirically by Figures 2 and 3 [PAGE 4-5], which show exit-speed distributions varying across launch-angle bins but not across pulled-versus-oppo spray partitions within a bin. The hierarchy then proceeds in three layers. First, horizontal spray angle h is shifted and scaled to [0,1] and modeled as a two-component beta mixture, with posterior inference via ADVI [PAGE 5-7]. Second, because launch angle depends on spray angle, separate normal distributions are fitted for pull (h<0) and oppo (h≥0) regimes, with hyperpriors drawn from empirical histograms: launch-angle mean prior N([5.1,21], [5.2,5.7]) and standard-deviation prior Gamma(α=[137.9,76.8], β=[5.4,2.9]) [PAGE 7-8, Eq. (7)]. Third, exit speed is left-skewed, so the authors define z = s_max − s to induce right skew and fit a separate gamma distribution per launch-angle bin—ground ball (v≤10), line drive (10<v≤25), fly ball (25<v≤50), pop-up (50<v)—using NUTS sampling [PAGE 8-9, Eq. (8)]. These layers generate batter-specific trajectory samples b that feed the out model.

The out model f is piecewise. For ground balls, logistic regression on the minimum absolute spray-angle difference a° and the "ball time to fielder" t_b (infielder depth in feet divided by exit speed, assuming no deceleration) yields Eq. (9) on [PAGE 11]: f_gb(b,p) = σ(−2.78 − 0.15a° + 5.87t_b − 1.32t_b^5). For non-ground balls, the model relies on hang time and landing spot estimated with Alan Nathan’s trajectory calculator at Tropicana Field [PAGE 12-13], then logistic regression on δ_t = hang_time − (distance / 27 ft/s), where 27 ft/s is the MLB average sprint speed [PAGE 14, Eq. (10)]: f_¬gb(b,p) = σ(−2.17 + 1.5δ_t). The combined model uses the law of total probability [PAGE 15, Eq. (11)]: f(b,p) = f_gb(b,p)𝟙_gb(b) + f_¬gb(b,p)(1 − 𝟙_gb(b)), because ground-ball status is known exactly, so p(b=gb) ∈ {0,1}. Expected wOBA uses hit-type probabilities from a classifier conditioned on non-out outcomes, with 2023 weights w_1B=0.883, w_2B=1.244, w_3B=1.569, w_HR=2.004 [PAGE 15, Eq. (12)].

Optimization approximates Eqs. (1) and (2) [PAGE 1] by sample-average objectives (13) and (14) [PAGE 16] solved with projected mini-batch stochastic gradient descent. Admissible positioning P is constrained by the 2023 MLB shift ban: first baseman within 40 feet of first base, all infielders within 95 feet of the pitching rubber, and two infielders on either side of second base enforced by projection [PAGE 17]. The adaptive-hitter extension formulates a zero-sum sequential game: defense picks p first, batter observes p and picks d from a set 𝒟 to minimize expected outs or maximize expected wOBA [PAGE 2, Eqs. (3)-(4)]; sample-average minimax forms appear in Eqs. (15)-(16) [PAGE 19].

Gray-zone audit. (i) ADVI provides approximate posteriors for spray-angle parameters while NUTS is used for launch-angle and exit-speed parameters [PAGE 7-9], mixing inference paradigms. (ii) The public-data out model trained on average starting positions produces an expected batting average of 0.319 versus an actual 0.293 on test plays, revealing systematic miscalibration [PAGE 18]; proprietary Texas Rangers data corrects this to 0.292 expected versus 0.293 actual [PAGE 18]. (iii) The public model explicitly "did not appropriately learn the relationship between depth and out likelihood" for bunts, forcing reliance on proprietary data for the bunt equilibrium [PAGE 24]. (iv) The conditional-independence s ⟂ h | v may fail if pulled and opposite-field balls at the same launch angle have systematically different exit speeds, which would bias Eq. (5) and all downstream gradients. (v) All numerical results condition on Tropicana Field because its dome offers consistent atmosphere; the authors note the process could be refit for Coors Field but do not do so [PAGE 14]. (vi) The game-theoretic model assumes the batter observes the defense’s positioning before selecting d [PAGE 2]; if that observation window is shorter than a pitch, the static objectives (1)-(2) apply instead of the minimax forms (3)-(4).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and equations extracted verbatim from the source:

[PAGE 1, Eq. (1)] Expected-outs static objective:
\[
p^* \in \underset{p \in P}{\arg\max}\; \mathbb{E}_{b\sim d}\big[f(b,p)\big],
\]
where f maps batted-ball trajectory b and positioning strategy p to out probability. Units: probability (dimensionless, [0,1]).

[PAGE 1, Eq. (2)] Expected-runs static objective:
\[
p^* \in \underset{p \in P}{\arg\min}\; \mathbb{E}_{b\sim d}\big[(1 - f(b,p)) \cdot f_{\text{woba}}(b)\big],
\]
with f_woba giving expected wOBA conditional on non-out. wOBA relates to runs by an affine relationship [PAGE 1, citing reference 29].

[PAGE 4, Eq. (5)] Joint-trajectory factorization under conditional independence s ⟂ h | v:
\[
p(h,v,s) = p(h)\,p(v\mid h)\,p(s\mid h,v) = p(h)\,p(v\mid h)\,p(s\mid v).
\]
Units: h and v in degrees; s in ft/s (Statcast exit speed). Spray angle domain restricted to [−55°, 55°] after scaling/shifting to [0,1] for beta support [PAGE 5].

[PAGE 6-7, Eqs. (6a)-(6i)] Spray-angle hierarchical priors (ADVI):
\[
a_1 \sim \text{Gamma}(\mu=[4,6],\,\sigma=[10,10]),\quad
\pi_4 \sim \text{Dirichlet}(a_1),\quad
\alpha_4 \sim \text{Gamma}(\mu=\mu_2,\,\sigma=\sigma_2),\quad
\beta_4 \sim \text{Gamma}(\mu=\mu_3,\,\sigma=\sigma_3),
\]
\[
h_i \sim \pi_{i1}\cdot\text{Beta}(\alpha_{i1},\beta_{i1}) + \pi_{i2}\cdot\text{Beta}(\alpha_{i2},\beta_{i2}).
\]
Mixture weights from point estimates \pi_L=[0.4,0.6], \alpha_L=[3,3], \beta_Q=[9,2] [PAGE 5].

[PAGE 8, Eqs. (7a)-(7c)] Launch-angle hierarchical model (NUTS):
\[
\mu_i \sim \mathcal{N}([5.1,21],\,[5.2,5.7]),\quad
\sigma_i \sim \text{Gamma}(\alpha=[137.9,76.8],\,\beta=[5.4,2.9]),
\]
\[
v_i\mid h_i \sim
\begin{cases}
\mathcal{N}(\mu_{i1},\sigma_{i1}) & h_i<0 \text{ (pulled)}\\
\mathcal{N}(\mu_{i2},\sigma_{i2}) & h_i\ge 0 \text{ (oppo)}
\end{cases}.
\]

[PAGE 9, Eqs. (8a)-(8c)] Exit-speed hierarchical model after transform z = s_max − s:
\[
\alpha_i \sim \text{Gamma}(\mu=[6.0,6.9,9.1,16.7],\,\sigma=[1.5,2.4,3.2,6.1]),
\]
\[
1/\beta_i \sim \text{Gamma}(\mu=[6.4,4.6,4.0,2.6],\,\sigma=[1.6,1.4,1.3,0.8]),
\]
\[
z_i\mid v_i \sim \text{Gamma}(\alpha_{ij},\beta_{ij}),\quad j\in\{1,2,3,4\}\text{ mapped to ground, line drive, fly, pop-up.}
\]

[PAGE 11, Eq. (9)] Ground-ball out model:
\[
f_{\text{gb}}(b,p) = \sigma\!\big(-2.78 - 0.15\,a^\circ + 5.87\,t_b - 1.32\,t_b^{5}\big),
\]
where a° is minimum absolute spray-angle difference (degrees) between batted ball and infielder starting positions; t_b is fielder depth (ft) divided by exit speed (ft/s), giving seconds. No deceleration assumed [PAGE 11].

[PAGE 14, Eq. (10)] Non-ground-ball out model:
\[
f_{\neg\text{gb}}(b,p) = \sigma(-2.17 + 1.5\,\delta_t),
\]
where \delta_t = hang time (s) − (landing distance (ft) / 27 ft/s), in seconds. Positive \delta_t implies fielder arrives before ball lands [PAGE 14].

[PAGE 15, Eq. (11)] Combined out model via law of total probability:
\[
f(b,p) = f_{\text{gb}}(b,p)\,\mathbb{1}_{\text{gb}}(b) + f_{\neg\text{gb}}(b,p)\,(1 - \mathbb{1}_{\text{gb}}(b)).
\]

[PAGE 15, Eq. (12)] Expected wOBA:
\[
f_{\text{woba}}(b) = 0.883\,p(\text{1B}\mid b) + 1.244\,p(\text{2B}\mid b) + 1.569\,p(\text{3B}\mid b) + 2.004\,p(\text{HR}\mid b),
\]
weights from 2023 [PAGE 15, citing reference 6].

[PAGE 16, Eqs. (13)-(14)] Sample-average approximations for optimization:
\[
p^* \in \underset{p \in P}{\arg\max}\; \frac{1}{N}\sum_{j=1}^{N} f(b_j,p),\qquad
p^* \in \underset{p \in P}{\arg\min}\; \frac{1}{N}\sum_{j=1}^{N} (1 - f(b_j,p))\,f_{\text{woba}}(b_j).
\]

[PAGE 17] Projected-SGD admissibility constraints: (1) first baseman within 40 ft of first base; (2) every infielder within 95 ft of pitching rubber; (3) two infielders on either side of second base, enforced by projecting spray angles to 0° as needed.

[PAGE 19, Eqs. (15a)-(15b)] Outs minimax equilibrium:
\[
p^* \in \underset{p \in P}{\arg\max}\; \underset{d \in \mathcal{D}}{\min}\; \mathbb{E}_{b\sim d}[f(b,p)],\qquad
d^* \in \underset{d \in \mathcal{D}}{\arg\min}\; \underset{p \in P}{\max}\; \mathbb{E}_{b\sim d}[f(b,p)].
\]

[PAGE 19, Eqs. (16a)-(16b)] Runs/wOBA minimax equilibrium:
\[
p^* \in \underset{p \in P}{\arg\min}\; \underset{d \in \mathcal{D}}{\max}\; \mathbb{E}_{b\sim d}[(1 - f(b,p))\,f_{\text{woba}}(b)],\qquad
d^* \in \underset{d \in \mathcal{D}}{\arg\max}\; \underset{p \in P}{\min}\; \mathbb{E}_{b\sim d}[(1 - f(b,p))\,f_{\text{woba}}(b)].
\]

[PAGE 20, Eq. (17)] Chas McCormick shift-beater equilibrium over 𝒟={d_oppo, d_pull}:
\[
p^* \in \underset{p \in P}{\arg\max}\; \underset{d \in \{d_{\text{oppo}}, d_{\text{pull}}\}}{\min}\; \frac{1}{N}\sum_{j=1}^{N} f(b_j,p).
\]

[PAGE 22, Eq. (18)] Carlos Santana bunt-versus-swing equilibrium over 𝒟={d_bunt, d_swing}:
\[
p^* \in \underset{p \in P}{\arg\max}\; \underset{d \in \{d_{\text{bunt}}, d_{\text{swing}}\}}{\min}\; \frac{1}{N}\sum_{j=1}^{N} f(b_j,p).
\]

Breakdown and singularity regimes: sigmoid saturation when |logit| is large makes gradients vanish [PAGE 11-14]; ADVI posterior approximation may understate tail risk for low-volume hitters [PAGE 7]; the s ⟂ h | v assumption is untested within launch bins and fails if pull/oppo exit-speed distributions differ at fixed v [PAGE 4-5]; all atmospheric results bind to Tropicana Field because outfield hang-time/landing XGBoost models were trained on dome data [PAGE 12-14]; public starting-position data mislearns bunt depth, requiring proprietary Rangers data to avoid an invalid shallow-third-baseman equilibrium [PAGE 24].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with skepticism about shifting. Carleton [13] is cited directly as the source of the concern that "hitters can observe the positions of their opponents, and adaptable hitters may change their approach at the plate in response" [PAGE 1-2]. Earlier optimization work is classified into two camps: discrete-positioning integer programming and simulation [15] and spatial optimization methods [16,17,26,27] [PAGE 1]. The authors distinguish themselves by using a continuous admissible set P and by optimizing expected outs or expected wOBA rather than pure spatial coverage [PAGE 1]. The joint-distribution methodology descends from Powers’s work toward a probability distribution over batted-ball trajectories [28] and spray-chart shifting systems [23,25] [PAGE 2]. The wOBA-to-runs conversion relies on the affine relationship documented by Slowinski [29] [PAGE 1].

The retrocausal structure is central: the defense selects p, which becomes an observable input into the batter’s problem, meaning the very distribution d used to estimate p is itself a function of p. This creates a feedback loop absent from static models [PAGE 2]. If a defense commits to a fixed p* across a multi-week series, the batter has repeated opportunities to estimate the best response d* from Eqs. (3b) or (4b), turning the defense’s originally optimal position into an exploitable pattern [PAGE 2, 19]. The paper’s shift-beater analysis (Josh Bell, Josh Rojas, Chas McCormick, Adam Frazier, Tyler O’Neill) identifies hitters who already exhibit this retrocausal response in 2021-2022 data by comparing spray means under shifted versus non-shifted alignments [PAGE 20].

A major multi-week trap is the 2023 MLB shift ban itself [4], which required four infielders in the dirt with two on either side of second base [PAGE 17]. The authors conclude that if the ban’s goal was to raise league batting average, "a better way to achieve that goal may have been to encourage shifting while also encouraging pull-heavy hitters to practice and start implementing some opposite field bunts" [PAGE 25]. This is a retrocausal policy prescription: defensive positioning induces batter adaptation, which changes the run environment, which then alters the value of the positioning rule. The lineage closes with Tango, Lichtman, and Dolphin’s The Book [30], quoted on [PAGE 23]: "The batting team must sometimes attempt a [bunt] to keep the defense from playing all the way back." The paper frames its bunt-equilibrium results as empirical support for that game-theoretic claim.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Level 0 (static defense): The defense assumes the batter’s historical trajectory distribution d is fixed and solves Eq. (1) or (2) [PAGE 1]. This ignores that the batter can see p before deciding how to hit [PAGE 2].

Level 1 (adaptive batter): The batter observes p and selects d ∈ 𝒟 to minimize outs or maximize wOBA against that specific p, as in Eqs. (3b), (4b), (15b), (16b) [PAGE 2, 19]. In the McCormick case, the paper finds the pull strategy dominates the oppo strategy: regardless of whether the defense plays the blue (pull-oriented) or orange (oppo-oriented) alignment, McCormick’s expected batting average is lower under his pull strategy [PAGE 21]. This is crisis habit regression: under pressure from a shift, the hitter regresses to his habitual pull approach rather than executing the opposite-field adjustment, so d* = d_pull and the equilibrium defense collapses to the pull-optimal blue positioning [PAGE 21].

Level 2 (counter-trap defense): Against extreme shifts, the credible batter action is not oppo hitting but bunting into the vacated third-base side. For Carlos Santana (left-handed), bunting against the blue shifted defense yields an expected batting average of 0.453, versus 0.268 swinging away against that same defense [PAGE 23]. For Joey Gallo, bunting against the blue defense yields 0.574 versus 0.223 swinging away [PAGE 24]. The defense’s counter-trap is to move the third baseman shallower and closer to the third-baseline in the equilibrium, sacrificing some pull-side coverage to reduce bunt success [PAGE 23]. The resulting equilibrium makes swinging away more attractive for the batter than against the original shift: Santana’s equilibrium expected average is 0.272 (swinging away) versus 0.268 against the static blue defense; Gallo’s is 0.226 versus 0.223 [PAGE 23-25]. The willingness to bunt, even if rarely executed, forces the defense into a positioning regime where the batter’s habitual swing produces more hits.

Clock structure: The game is explicitly sequential with the defense moving first and the batter observing [PAGE 2]. If the batter cannot observe positioning before the pitch—i.e., the decision clock is shorter than the recognition window—the static objectives (1)-(2) govern. If observation is allowed, the minimax objectives (3)-(4) govern [PAGE 2]. Over a multi-week series, repeated exposure lets the batter converge to the equilibrium response d*, eroding any first-mover advantage the defense derived from static optimization [PAGE 2, 19-20].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Atmospheric layer (veto): All hang-time and landing-distance XGBoost models were trained exclusively on batted balls hit in Tropicana Field, chosen because it is a dome with consistent atmospheric conditions [PAGE 12-13]. The authors explicitly state the models "may be less predictive in a more extreme atmosphere like Coors Field in Denver" and that the process would need to be refit for other ballparks [PAGE 14]. Any application outside a climate-controlled dome is vetoed unless the trajectory models are recalibrated to local air density, temperature, and wind.

Biomechanical layer (veto): Fielder mobility is fixed at 27 ft/s, the MLB average sprint speed [PAGE 14]. Ground-ball "ball time to fielder" t_b divides infielder depth by exit speed with the explicit assumption of no deceleration [PAGE 11]. Positioning is constrained by hard physical boundaries: first baseman within 40 ft of first base; all infielders within 95 ft of the pitching rubber; two infielders on either side of second base [PAGE 17]. These constraints bind the optimizer at the boundary via projected gradient descent [PAGE 17].

Physical/ballpark layer (veto): Tropicana Field outfield dimensions from [14] are used to exclude foul balls and home runs from the optimization sample [PAGE 16]. Results are therefore park-specific; a ballpark with shorter foul territory or different fence distances changes the admissible batted-ball support.

Data layer (veto/adjudication): Publicly available average starting positions from Baseball Savant produce a materially biased expected batting average (0.319 expected vs 0.293 actual) on 2023 test plays [PAGE 18]. Proprietary Texas Rangers data including true fielder starting positions corrects the bias (0.292 expected vs 0.293 actual) [PAGE 18]. Most critically, the public model "did not appropriately learn the relationship between depth and out likelihood" for bunts, so the bunt equilibrium against Carlos Santana is considered unreliable and is recomputed with the Rangers model for Joey Gallo [PAGE 24]. Adjudication hierarchy: the Tropicana atmospheric assumption binds all numerical outputs [PAGE 14]; the projected-SGD constraints bind the feasible set [PAGE 17]; and the proprietary-data correction overrides the public model whenever fielder depth interacts with low-exit-speed batted balls such as bunts [PAGE 24].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions. No synthetic ratios are invented; all quantities are information-theoretic, physical, or probabilistic.

Veto 1 — Atmospheric transposition (Coors Field): Move the optimization from Tropicana Field to Coors Field without refitting the XGBoost hang-time/landing-distance models. Lower air density at altitude increases drag distance and hang time relative to the dome-trained model. Verification: compare model-predicted hang time against Statcast-measured hang time for Coors Field fly balls in a holdout set; compute the signed error in \delta_t = hang_time − distance/27 ft/s. Prediction: the dome-trained model systematically underpredicts hang time at Coors, producing negative bias in \delta_t; Eq. (10) then underestimates catch probability for deep fly balls, and the optimizer positions outfielders too shallow relative to the true optimum. Expected outs under the deployed p* fall below the model’s own counterfactual estimate.

Veto 2 — Bunt-depth public-model failure: Re-run the Santana/Gallo bunt equilibrium using only the public average-starting-position out model. Verification: on holdout bunt plays with known fielder start coordinates, regress realized out probability against third-baseman depth for exit speeds near 34 ft/s and launch angles near 0° (the bunt distribution parameters from [PAGE 22]). Prediction: the public model assigns insufficient marginal value to reducing third-baseman depth because it mislearns the depth-likelihood relationship [PAGE 24]; consequently the vetoed equilibrium keeps the third baseman deeper than the proprietary-model equilibrium, and the batter’s bunt expected batting average against the vetoed defense exceeds 0.272 (Santana’s proprietary-model equilibrium value).

Veto 3 — Conditional-independence breakdown: Test the core factorization assumption s ⟂ h | v used in Eq. (5) [PAGE 4]. Verification: on Statcast 2018-2022 data, within narrow launch-angle bins (e.g., line drives 10°<v≤25°), compare the empirical exit-speed distribution for pulled balls (h<0) against opposite-field balls (h≥0) using a two-sample Kolmogorov-Smirnov test; compute mutual information I(s;h|v). Prediction: if I(s;h|v) > 0 in bits and the KS test rejects equality, the factorization p(s|v) is misspecified; sampled trajectories drawn from the flawed joint will bias both a° and t_b in Eq. (9), causing the gradient in Eq. (13) to misweight pull-side versus oppo-side positioning and lowering realized expected outs relative to a model that uses p(s|v,h).
</RLVR_COUNTERFACTUAL_VETOES>