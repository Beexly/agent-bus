---
source: "2022 - Winning duels in VALORANT, a visualization of optimal positioning - DeRover.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2022"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4214
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source paper: "Winning Fights in VALORANT: A Predictive Analytics Approach" by DeRover et al. (MIT Sloan 2022). They want me to act as GSE + GSI Frontier Reasoning Foundry and follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

The source text appears to be pages 1-14 of a PDF but the user says PAGES: 10. Wait, they say PAGES: 10 but the text shows page markers 1-14? Actually looking at the text, there are page numbers interspersed: "1", "2", "3", "4", "5", "6", "7", "8", "10", "11", "12", "13", "14". It seems like page 9 is missing or it's just the text extraction. I should cite page markers based on the visible page numbers in the text. The user says PAGES: 10 maybe meaning 10 pages provided? But the text goes to page 14. I'll cite using the page numbers visible in the source text markers like [PAGE 4], [PAGE 6], etc.

Key content from paper:
- Binary classification: Won = {0,1}
- Features: pgun, egun, parmor, earmor, pagent, eagent, atkNumGun, defNumGuns, atkAlive, defAlive, roundTime, isPlanted, sitePlanted, spikeBPS, atkWonLast, defWonLast, roundNumber, roundHalf, mapName, isAtk, px,py,ex,ey
- Model evaluation: Brier Score = (1/N) * sum((p_i - o_i)^2). Lower is better.
- Models: Random Forest, XGBoost, LightGBM, Hyperplane Trees.
- Results: XGBoost best, Validation Brier 0.231, Test 0.228.
- Wins Above Expected (WAE): (1/N) * sum(o_i - p_i). p_i in [0,1], o_i in {0,1}.
- KDA = kills/deaths.
- Correlation between tournaments: KDR 0.172, ADR 0.185, WAE 0.234.
- Phantom vs Vandal advantage table by map/side.
- Optimal positioning heatmaps, but model cannot predict when/where fights occur, only winner given state.

I need to write formal LaTeX equations, not toy equations. So Brier Score, WAE, maybe logistic link, conditional probability P(Won=1 | X). Units: probability dimensionless [0,1], time in seconds, positions in map coordinate units (pixels? unspecified), gun price in in-game credits (dimensionless currency), armor {0,1,2} categorical ordinal.

Singularity/breakdown regimes: model cannot predict fight occurrence (when/where), only outcome conditional on engagement. Spatial model may not know walls (y=10 example). Game updates (patches) change costs/abilities causing distribution shift. Train Aug-Sep 2021, test Oct, evaluate daily in December - non-stationarity. Small sample for specific agent/weapon matchups (nitr0 sheriff 37% vs expected 31%). Hyperplane trees slow, license restrictions. SHAP force plots for interpretability.

I need to avoid betting lines entirely. No mention of odds, spreads, etc.

Word count: >=1000 words total across sections, with THINK_TRACE >=400 words.

Let's structure:

<THINK_TRACE>
Deep multi-hop derivation:
- Start from binary outcome Y ∈ {0,1}.
- Feature vector X includes economic (pgun, egun), tactical (atkAlive, defAlive, isPlanted, spikeBPS), spatial (px,py,ex,ey), agent identities.
- Model estimates p̂(x) = P(Y=1 | X=x) using tree ensembles.
- Brier Score decomposition: reliability, resolution, uncertainty. Mention Brier Score = E[(p̂ - Y)^2] = Var(Y) - ... but keep formal.
- Wins Above Expected: WAE = (1/N) Σ (y_i - p̂_i). This is a proper scoring rule residual, mean calibration error per fight.
- Gray-zone audit: The paper claims WAE correlation 0.234 vs KDR 0.172 across tournaments. This is a between-tournament stability metric, not within-tournament predictive validity. It measures rank-order persistence of player quality, but confounded by team effects, map pool, opponent strength. Non-stationarity from patches (Aug-Sep train, Oct test, Dec daily eval). Spatial ignorance: tree splits on px,py but doesn't know walls; hyperplane trees can split diagonally to approximate geometry but slow/licensed. Counterfactual gun swap (Phantom vs Vandal) assumes ceteris paribus feature change, but player behavior adapts to weapon (recoil pattern, fire rate), so p̂(y | do(gun=Vandal)) ≠ p̂(y | X_gun=Vandal) due to unobserved confounder: player style/positioning. This is a causal identifiability gap.
- Also mention that model predicts winner conditional on fight occurring, not fight occurrence. This is a truncation/selection bias: observed fights are not random; they result from positioning decisions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define:
- Outcome: Y_i ∈ {0,1}, Y_i=1 iff player i wins gunfight (kill), 0 iff dies [PAGE 4].
- Predicted probability: p̂_i ∈ [0,1] [PAGE 7].
- Brier Score: BS = (1/N) Σ_{i=1}^N (p̂_i - y_i)^2 [PAGE 6]. Units: squared probability (dimensionless^2). Ideal 0.
- Wins Above Expected: WAE = (1/N) Σ_{i=1}^N (y_i - p̂_i) [PAGE 7]. Units: expected fights (dimensionless count). Positive = overperformance.
- KDA = N_kills / N_deaths [PAGE 7].
- Conditional model: p̂(x) = P(Y=1 | mapName, isAtk, px,py,ex,ey, pgun, egun, parmor, earmor, pagent, eagent, atkNumGun, defNumGuns, atkAlive, defAlive, roundTime, isPlanted, sitePlanted, spikeBPS, atkWonLast, defWonLast, roundNumber, roundHalf) [PAGE 4].
- Phantom vs Vandal counterfactual: Δ_map,side = p̂(x | gun=Phantom) - p̂(x | gun=Vandal) [PAGE 10].
- Breakdown regimes: (1) Fight occurrence not modeled (selection bias) [PAGE 11]; (2) Wall geometry ignored by axis-aligned trees; hyperplane trees can split diagonally but slow/license [PAGE 6]; (3) Distribution shift across patches (Aug-Sep vs Oct vs Dec) [PAGE 5]; (4) Small-n cells for specific agent/weapon matchups (e.g., nitr0 Sheriff $800 vs $2900, 37% vs 31% expected) [PAGE 8].
Citations: [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 10], [PAGE 11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: xComp +/- in NFL [PAGE 1] -> expected completion probability. WAE analogous. Brier Score [PAGE 6] from weather forecasting proper scoring rules. SHAP [PAGE 9] from game theory Shapley values (1953) adapted to ML interpretability. Random Forests (Breiman 2001) [PAGE 6], XGBoost (Chen & Guestrin 2016) [PAGE 6], LightGBM (Ke et al. 2017) [PAGE 6], Optimal Hyperplane Trees (Bertsimas & Dunn) [PAGE 6]. Multi-week traps: Train Aug-Sep 2021, validate Challenger Playoffs, test VCT NA Last Chance Qualifier Oct, then daily eval in December Champions [PAGE 5]. Patch non-stationarity: weapon cost adjustments between windows invalidate static hyperparameters. Meta shifts (new agents/maps) require retraining. The "multi-week trap" is assuming August-September stationarity persists into October-December despite Riot updates.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under pressure (e.g., low atkAlive/defAlive, spike planted, late roundTime), players revert to habitual positions/weapons rather than optimal Bayesian response. The model conditions on observed state but not on the player's latent policy under stress. Counter-trap: Opponents observe a player's WAE profile and exploit known weaknesses (e.g., Hiko vs Operator -0.099 WAE) by forcing Operator duels. Clock: roundTime and spikeBPS create time pressure; as spikeBPS → 4 or 8 (near detonation), defenders must retake, attackers can stall, shifting optimal positioning. The model includes roundTime and spikeBPS as features but does not model the recursive belief: "I know they know I am low on armor, so they will peek me." This is a level-k reasoning gap. The universal training across player base averages out individual crisis habits, so player-specific deviations (nitr0 Sheriff strength, Hiko Operator weakness) are residuals captured by WAE but not exploited prospectively by the base model.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Map coordinates px,py,ex,ey are 2D float positions on a rendered map; walls at y=10 not explicitly encoded [PAGE 6]. Axis-aligned tree splits cannot represent diagonal walls without fragmentation; hyperplane trees can but are slow [PAGE 6]. Biomechanical layer: Human reaction time, crosshair placement, movement accuracy (counter-strafing) not in data; gun price is proxy for lethality but not skill expression [PAGE 4]. Weather layer: Not applicable (indoor esports, no meteorological variables); network latency/jitter acts as environmental noise but absent from features. Veto proof: The model is valid only conditional on an engagement having occurred; it cannot veto a bad position before the fight because it does not predict when/where fights occur [PAGE 11]. Any coaching advice derived from WAE must be gated by a separate fight-occurrence model (in development [PAGE 11]).
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios:
1. Patch-induced feature drift veto: If Riot changes weapon prices between training (Aug-Sep) and test (Oct), the pgun/egun feature distribution shifts. Prediction: Brier Score on test will degrade relative to validation (observed 0.231 vs 0.228? actually test 0.228, but daily Dec eval may show degradation). Veto condition: |BS_test - BS_val| > 0.015 triggers retraining.
2. Spatial wall occlusion veto: On Ascent defense, if a tree split isolates px/y across a wall (y=10) but the model lacks wall feature, it may assign high win probability to a player shooting through a wall. Prediction: Calibration plot will show systematic miscalibration for fights near wall coordinates; Brier Score residual spikes in those bins. Veto condition: Local calibration error > 0.05 in wall-adjacent bins.
3. Counterfactual gun swap behavioral veto: Changing pgun from Vandal to Phantom in SHAP/counterfactual assumes identical positioning. Prediction: If a player known to play long angles switches to Phantom (close-corner favored), their realized win rate will not match model's counterfactual because they do not adjust positioning. Veto condition: Realized win rate difference between actual Phantom games and counterfactual-predicted Phantom games exceeds 2 standard errors of the WAE estimate.
Each includes verification method and predicted failure mode.
</RLVR_COUNTERFACTUAL_VETOES>

Need to ensure >=1000 words total. Let's estimate. THINK_TRACE needs >=400 words. Other sections need to be substantial. I'll aim for ~150-250 words each for the other 5 sections, totaling ~1000+ words.

Check for betting lines: none.
Check for toy equations: none. Use formal LaTeX.
Check citations: Use [PAGE N] format. Need verbatim quotes? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes from the source with page markers. Let's integrate a few short verbatim quotes.

Verbatim quotes:
- Page 4: "Won|{0,1}|1 if player won the gunfight (a kill), 0 if lost (died)"
- Page 6: "Brier Score = ..." but the text is garbled. I can quote: "All four of the models above are able to predict probability. To evaluate the accuracy of these probabilities, we use a metric known as the Brier Score [20]". Page 6.
- Page 7: "Wins Above Expected = ..." garbled but I can quote conceptually or use the description: "If the model predicts a p_i of 0.3 and the player wins the fight they gain 0.7 towards their wins above expected, and if they lose -0.3 is added to their sum." Page 7.
- Page 11: "One weakness of the model is that it is unable to predict when or where a fight would occur. Only once we know when and where, it is able to predict the winner." Page 11.
- Page 6: "Random Forests have performed particularly well in other Esports classification tasks". Page 6.

I need to be careful with LaTeX formatting. Use proper math mode.

Let's draft carefully.

Total words check: I'll write generously.

Also note: The user says "PAGES: 10" but source has page numbers up to 14. I'll cite whatever page numbers appear in the text: [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 10], [PAGE 11]. Maybe also [PAGE 1], [PAGE 2]. That's fine.

Let's write.

THINK_TRACE section: Must be >=400 words. I'll write ~500 words.

Detailed derivation:
Let \mathcal{X} be the feature space. \mathbf{x}_i = (mapName_i, isAtk_i, px_i, py_i, ex_i, ey_i, pgun_i, egun_i, parmor_i, earmor_i, pagent_i, eagent_i, atkNumGun_i, defNumGuns_i, atkAlive_i, defAlive_i, roundTime_i, isPlanted_i, sitePlanted_i, spikeBPS_i, atkWonLast_i, defWonLast_i, roundNumber_i, roundHalf_i). Y_i ∈ {0,1}.

Model family \mathcal{M} = {Random Forest, XGBoost, LightGBM, Hyperplane Trees}. Each m ∈ \mathcal{M} outputs \hat{p}_m(\mathbf{x}) = P_m(Y=1 | \mathbf{x}).

Brier Score: BS_m = N^{-1} Σ (\hat{p}_m(\mathbf{x}_i) - y_i)^2. Since y_i ∈ {0,1}, BS = reliability - resolution + uncertainty (Murphy decomposition). Lower BS means sharper and calibrated probabilities.

WAE: WAE_j = N_j^{-1} Σ_{i∈j} (y_i - \hat{p}_i). This is an empirical estimate of E[Y - \hat{p}|player j]. It is a first-moment calibration residual.

Gray zones:
1. Selection bias: Data only includes fights that occurred. \mathbf{x} is post-treatment of positioning. P(Y|X) is not P(Y|do(X)). Positioning affects both X and Y. Model cannot predict fight occurrence [PAGE 11].
2. Ceteris paribus counterfactual: Swapping pgun from Vandal to Phantom while holding all else fixed ignores that players choose positions based on gun [PAGE 10]. The operator difference is not a causal treatment effect.
3. Non-stationarity: Train Aug-Sep, test Oct, daily Dec. Patches change costs/abilities. Distribution shift.
4. Spatial reasoning: Axis-aligned splits cannot represent walls without many splits; hyperplane trees diagonal but slow [PAGE 6]. Map geometry y=10 wall example.
5. Small sample: nitr0 Sheriff 37% vs expected 31%, but based on limited fights [PAGE 8]. Hiko Operator 40% vs expected 49% [PAGE 8].

I'll write this out.

SOURCE_OPERATORS_AND_EQUATIONS: Formal definitions with units.
- Y: binary, dimensionless.
- \hat{p}: probability, unitless [0,1].
- BS: squared probability, unitless [0,1], ideal 0.
- WAE: expected fights won minus expected, unitless count.
- roundTime: seconds (s).
- px,py,ex,ey: map coordinate units (unspecified in source, likely pixels or arbitrary units), dimensionless spatial index.
- pgun, egun: in-game credits (dimensionless currency).
- parmor, earmor: ordinal armor tier {0,1,2}.
- spikeBPS: beep code {-1,1,2,4,8}, dimensionless proximity index.
- atkAlive, defAlive: count [0,5].
Breakdown regimes enumerated.

RETROCAUSAL_GENEALOGY: Lineage from NFL xComp, Brier score from meteorology, SHAP from Shapley, tree ensembles. Multi-week traps: patch non-stationarity across Aug-Sep-Oct-Dec.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap (exploiting Hiko Operator weakness), clock (roundTime/spikeBPS time pressure). Level-k reasoning gap.

CROSS_LAYER_VETO_ADJUDICATION: Physical (map coords, walls), Biomechanical (reaction time absent), Weather (N/A but network latency as environmental noise). Veto proof: model cannot predict when/where fights occur.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with predictions.

I will ensure no betting terms. Words like "odds" must not appear. "Probability" is fine. "Expected" is fine. Avoid "moneyline", "spread", "total".

Let's compose the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The target of analysis is a binary gunfight outcome \(Y_i \in \{0,1\}\), where \(Y_i=1\) denotes a kill (fight won) and \(Y_i=0\) denotes death (fight lost), for each observed engagement \(i\) [PAGE 4]. The feature vector \(\mathbf{x}_i\) mixes economic, tactical, spatial, and identity variables: map side \(isAtk_i\), player and enemy coordinates \((px_i, py_i)\) and \((ex_i, ey_i)\), weapon prices \(pgun_i, egun_i\), armor tiers \(parmor_i, earmor_i \in \{0,1,2\}\), agent identities \(pagent_i, eagent_i\), team expensive-gun counts \(atkNumGun_i, defNumGuns_i\), alive counts \(atkAlive_i, defAlive_i \in [0,5]\), round clock \(roundTime_i\) in seconds, spike state \(isPlanted_i, sitePlanted_i, spikeBPS_i\), prior-round results \(atkWonLast_i, defWonLast_i\), and round/half indices [PAGE 4]. The estimand is the conditional win probability \(\hat{p}(\mathbf{x}) = P(Y=1 \mid \mathbf{x})\), produced by tree ensembles (Random Forest, XGBoost, LightGBM, Hyperplane Trees) [PAGE 6].

Derivation proceeds through proper scoring. The Brier Score is \(BS = N^{-1} \sum_{i=1}^N (\hat{p}_i - y_i)^2\), with units of squared probability (dimensionless, ideal 0) [PAGE 6]. Because \(y_i \in \{0,1\}\), this penalizes both miscalibration and lack of sharpness. Wins Above Expected (WAE) for player \(j\) over \(N_j\) fights is \(WAE_j = N_j^{-1} \sum_{i \in j} (y_i - \hat{p}_i)\) [PAGE 7]. This is the empirical first-moment calibration residual: an estimate of \(E[Y - \hat{p} \mid \text{player } j]\), measured in expected fights (dimensionless count). A positive WAE means the player wins more difficult fights than the generic model anticipates.

Gray-zone audit reveals five structural limits. First, selection bias: the dataset contains only fights that already occurred, so \(\mathbf{x}\) is post-treatment relative to positioning; the model estimates \(P(Y \mid \mathbf{X}=\mathbf{x})\), not \(P(Y \mid do(\mathbf{X}=\mathbf{x}))\), and explicitly cannot predict when or where a fight occurs [PAGE 11]. Second, counterfactual fragility: the Phantom/Vandal analysis swaps \(pgun\) while holding all other features fixed, but players choose positions contingent on weapon, so the estimated advantage is associative, not causal [PAGE 10]. Third, non-stationarity: training spans August–September 2021, validation the Challenger Playoffs, testing the October VCT NA Last Chance Qualifier, with daily evaluation planned for December Champions [PAGE 5]; Riot patches altering weapon costs or agent abilities between windows induce distribution shift. Fourth, spatial ignorance: axis-aligned trees cannot represent a wall at \(y=10\) without many fragmented splits; hyperplane trees can split diagonally to encode map geometry but are slow and license-restricted [PAGE 6]. Fifth, small-cell instability: player-specific claims such as nitr0 winning 37% of Sheriff-versus-premium fights against a 31% model expectation, or Hiko’s 40% versus 49% expected against the Operator, rest on limited engagement counts [PAGE 8], making WAE residuals noisy for rare matchups.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units:

- Outcome: \(Y_i \in \{0,1\}\), binary, dimensionless; \(Y_i=1\) iff the analyzed player wins the gunfight (kill), \(0\) iff lost (died) [PAGE 4].
- Prediction: \(\hat{p}_i \in [0,1]\), unitless probability of winning [PAGE 7].
- Brier Score: 
\[
BS = \frac{1}{N}\sum_{i=1}^{N}(\hat{p}_i - y_i)^2
\]
units: squared probability (dimensionless\(^2\)); lower is better, 0 ideal [PAGE 6].
- Wins Above Expected:
\[
WAE_j = \frac{1}{N_j}\sum_{i \in j}(y_i - \hat{p}_i)
\]
units: expected fights (dimensionless count); positive = overperformance relative to generic model [PAGE 7].
- KDA: \(\text{KDA}_j = N^{\text{kills}}_j / N^{\text{deaths}}_j\), dimensionless ratio [PAGE 7].
- Conditional model:
\[
\hat{p}(\mathbf{x}) = P\bigl(Y=1 \mid \text{mapName}, isAtk, px, py, ex, ey, pgun, egun, parmor, earmor, pagent, eagent, atkNumGun, defNumGuns, atkAlive, defAlive, roundTime, isPlanted, sitePlanted, spikeBPS, atkWonLast, defWonLast, roundNumber, roundHalf\bigr)
\]
[PAGE 4].
- Phantom/Vandal counterfactual contrast:
\[
\Delta_{\text{map,side}} = \hat{p}(\mathbf{x} \mid gun=\text{Phantom}) - \hat{p}(\mathbf{x} \mid gun=\text{Vandal})
\]
[PAGE 10].

Feature units: \(roundTime\) in seconds (s); \(px,py,ex,ey\) in map coordinate units (source does not specify pixels vs. meters; treated as dimensionless spatial index); \(pgun, egun\) in in-game credits (dimensionless currency); \(parmor, earmor\) ordinal \(\{0,1,2\}\); \(spikeBPS \in \{-1,1,2,4,8\}\) dimensionless proximity code; \(atkAlive, defAlive\) integer counts \([0,5]\) [PAGE 4].

Singularity / breakdown regimes: (1) Fight-occurrence truncation: model valid only conditional on an engagement; cannot veto a pre-fight position because it does not model when or where fights happen [PAGE 11]. (2) Wall geometry: axis-aligned partitions fail to encode diagonal or arbitrary wall topology at coordinates such as \(y=10\); hyperplane trees mitigate but introduce training latency and licensing constraints [PAGE 6]. (3) Patch non-statationarity: train window August–September 2021 versus test October and daily December evaluation; weapon cost or agent updates invalidate fixed hyperparameters [PAGE 5]. (4) Rare-matchup sparsity: nitr0 Sheriff (\( \$800 \)) versus premium (\( \$2900 \)) fights at 37% realized vs. 31% expected; Hiko versus Operator at 40% realized vs. 49% expected—small denominators inflate WAE variance [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s genealogy connects to three distinct intellectual lineages. First, Wins Above Expected is a direct analog of the NFL’s Completion Percentage Above Expected (xComp +/-), cited as the motivational template for context-adjusted player evaluation [PAGE 1]. Both constructs isolate individual contribution by subtracting a situation-normalized expectation from a binary outcome. Second, the Brier Score descends from meteorological forecast verification, a proper scoring rule for probability assessment [PAGE 6], repurposed here to rank tree ensembles not by accuracy of hard labels but by the quality of predicted probabilities. Third, interpretability relies on Shapley force plots, importing Lloyd Shapley’s cooperative game-theoretic value allocation into feature attribution for individual kills [PAGE 9]. The algorithmic stack—Random Forests (Breiman, 2001), XGBoost (Chen & Guestrin, 2016), LightGBM (Ke et al., 2017), and Optimal Hyperplane Trees (Bertsimas & Dunn)—traces the escalating trade-off between partition axis alignment and geometric flexibility in esports classification [PAGE 6].

The multi-week trap is temporal non-stationarity masked as cross-tournament generalization. The authors train on August–September 2021 Challengers, validate on the Challenger Playoffs, and test on the October VCT NA Last Chance Qualifier, then propose daily evaluation during December Champions [PAGE 5]. This assumes the August–September joint distribution \(P(\mathbf{X},Y)\) remains sufficiently stable across patches, agent rotations, and map pool changes. In VALORANT, Riot updates weapon costs, agent abilities, and map geometry intra-season, so a model tuned in September may face a shifted feature distribution in October and December. The between-tournament correlation table—KDR 0.172, ADR 0.185, WAE 0.234 [PAGE 8]—measures rank-order persistence of players, not predictive stability of the environment; a higher correlation for WAE does not immunize it from patch-induced drift. The multi-week trap is therefore the assumption that a generic player model trained in late summer remains valid for December without recalibration, especially when “small adjustments to the in-game costs of some weapons” are explicitly cited as accuracy threats [PAGE 5].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of players under pressure to revert to overlearned positions and weapons rather than executing the Bayesian-optimal response implied by the model state. The feature vector includes \(atkAlive, defAlive, roundTime, isPlanted, spikeBPS\), which encode crisis intensity, but the model treats these as static covariates and does not represent the player’s latent policy under stress. A defender with \(earmor=0\) and \(spikeBPS=8\) is forced into a retake; an attacker with \(atkAlive=1\) faces a clock. The model averages these crisis responses across the entire player base, so individual crisis habits are absorbed into WAE residuals rather than modeled prospectively.

Counter-trap exploitation operates at the recursive level: opponents can observe a player’s WAE profile and deliberately engineer unfavorable matchups. Hiko’s documented weakness against the \( \$4700 \) Operator—40% realized win rate versus 49% expected, \(WAE=-0.099\) [PAGE 8]—creates an exploitable pattern: an opposing team can force Operator duels to punish his regression. Conversely, nitr0’s Sheriff strength (37% vs. 31% expected, \(WAE=0.059\)) invites opponents to avoid low-economy duels against him [PAGE 8]. The base model is trained universally across the player base, so it outputs a generic probability; it does not update its belief recursively as an opponent learns to target a specific player’s weakness.

The clock layer is \(roundTime\) combined with \(spikeBPS \in \{-1,1,2,4,8\}\), where more beeps indicate proximity to detonation and attacker advantage [PAGE 4]. As \(roundTime\) advances and \(spikeBPS\) rises, the feasible action space shrinks: defenders must leave safe angles to retake, attackers can stall. The model conditions on these variables but contains no level-\(k\) reasoning term such as “I know they know I am low on armor, so they will peek me now.” This recursive gap means WAE identifies who performs well in crises but does not predict when a rational opponent will manufacture that crisis.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The data model treats \(px,py,ex,ey\) as floats in a 2D map space [PAGE 4], but it does not explicitly encode wall topology. The authors note that plotted kills and deaths on Ascent reveal wall locations visually, yet the model “may not know that a wall exists at \(y=10\)” [PAGE 6]. Axis-aligned tree splits can only approximate such geometry with many orthogonal cuts; hyperplane trees can split diagonally to respect map geometry but are slow to train and carry license restrictions [PAGE 6]. A physical veto therefore applies: any positional recommendation derived from raw \(px,py\) splits must be checked against an explicit wall/line-of-sight layer, or the model may assign high win probability to a player shooting through cover.

Biomechanical layer: Human reaction time, crosshair placement, movement accuracy (e.g., counter-strafing), and agent hitbox differences are absent from the feature set. Weapon price \(pgun, egun\) is used as a proxy for lethality with the assumption that “higher priced weapons are almost always better” [PAGE 4], but price does not capture recoil control, fire rate, or player mechanical skill. The model therefore cannot adjudicate whether a low-probability kill resulted from superior positioning or biomechanical outperformance; WAE conflates these.

Weather layer: Not applicable in the meteorological sense—VALORANT is an indoor esports title with no atmospheric variables. The closest environmental noise is network latency/jitter and tick-rate variance, which are not recorded in the API features [PAGE 4] and thus function as unobserved environmental confounders.

Veto proof: The paper states explicitly, “One weakness of the model is that it is unable to predict when or where a fight would occur. Only once we know when and where, it is able to predict the winner” [PAGE 11]. This is a hard boundary: the model cannot veto a player’s decision to take a bad fight because it only scores fights after they happen. Coaching advice from WAE or Phantom/Vandal location maps must therefore be gated by a separate fight-occurrence model (noted as in development [PAGE 11]) before any prescriptive layer is applied.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Patch-induced feature drift. Condition: Riot changes weapon prices or ability costs between the August–September training window and the October test window. Prediction: The out-of-sample Brier Score will deteriorate relative to validation (observed validation 0.231; test 0.228 for XGBoost [PAGE 7], but daily December evaluation may expose larger drift). Verifiable rule: If \(|BS_{\text{test}} - BS_{\text{val}}| > 0.015\), veto deployment and retrain; failure mode is stale price features misranking gun-fight win probabilities.

Veto Scenario 2 — Spatial wall occlusion. Condition: On Ascent defense, an engagement occurs adjacent to a wall coordinate such as \(y=10\) where axis-aligned tree splits cannot represent line-of-sight occlusion [PAGE 6]. Prediction: Calibration residuals will spike in wall-adjacent spatial bins; the model will systematically overestimate win probability for players with no valid line of fire. Verifiable rule: If local calibration error in wall-proximity bins exceeds 0.05 absolute probability difference, veto the spatial heatmap for coaching; failure mode is prescribing positions that are geometrically impossible.

Veto Scenario 3 — Counterfactual gun-swap behavioral invariance. Condition: The Phantom/Vandal analysis swaps \(pgun\) while holding position fixed, assuming ceteris paribus [PAGE 10]. Prediction: Players who habitually play long angles with a Vandal will not realize the model’s Phantom counterfactual win rate if switched to Phantom, because they will not reposition to close corners. Verifiable rule: If the difference between realized Phantom win rate and counterfactual-predicted Phantom win rate exceeds two standard errors of the player-level WAE estimate, veto the gun-swap recommendation; failure mode is treating an associative feature effect as a causal treatment effect.
</RLVR_COUNTERFACTUAL_VETOES>