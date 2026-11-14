---
source: "2018 - An Open-Sourced Optical Tracking and Advanced eSports Analytics Platform for League of Legends - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2018"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3527
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about eSports analytics for League of Legends, using strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful about:
- No betting lines whatsoever. No spreads, totals, moneylines, odds.
- No toy equations like "Force / Fatigue". Use formal LaTeX equations with units and assumptions.
- Cite page markers [PAGE N] where relevant. The source has page numbers at bottom: 1-16.
- Total depth >= 1000 words across sections. THINK_TRACE alone >= 400 words.

Let me structure the response.

First, I'll plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Discuss:
- The paper's methodology: optical tracking via spectator mode minimap using OpenCV, Python/Go, direct hooks, network traffic.
- Win probability model: logistic regression with features (kills, towers, monsters per minute), random minute sampling to break autocorrelation, logistic regression formula.
- Individual performance contribution: tier-based percentile transformation, smart kills/worthless deaths defined by Δ win probability.
- Logistic regression bundles: Table 3 estimates, negative coefficients (survivability, vision, etc.) explained by passivity vs aggressiveness or multicollinearity. Correlation Table 4: biggest negative -0.75 between vision denial and gold.
- Role-specific regressions Table 5 and isolated correlations Table 6.
- Fast and frugal tree: 3 metrics, 80% accuracy (text says 80 then later 87, need to note inconsistency/gray zone).
- Gray zones: "Unknown Authors" anonymity, privacy footnote but tracking public spectating, patch instability across millions of games but focusing on ~150k from latest patch, logistic regression log odds notation ambiguity in text (log(P(class=k|x)) ∝ x·θ^(k) is sloppy; softmax vs binary logit), FFT accuracy discrepancy (80% vs 87%), multicollinearity claims vs correlation matrix (0.51 max positive, -0.75 max negative is actually substantial), open-sourced promise vs unknown status.
- No betting lines.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
- Logistic regression: logit(p) = β₀ + Σβᵢxᵢ; p = 1/(1 + exp(-(β₀ + Σβᵢxᵢ))). Units: dimensionless probability [0,1]. Features: counts per minute (min⁻¹), percentile ranks [0,100] or [0,1].
- Win probability model: features {Red Kills, Blue Kills, Red Towers, Blue Towers, Red Monsters, Blue Monsters} at minute-resolution; target Y ∈ {0,1}. Random minute sampling to induce independence: X_game ~ Uniform{1..T_game}.
- Worthless death: ΔWP = WP(t+1) - WP(t) ≤ 0 following death. Smart kill: ΔWP > 0 following kill.
- Bundles regression: Table 3 estimates with z-stats. Negative coefficients interpretation.
- Multicollinearity: correlation matrix Table 4; vision denial vs gold ρ = -0.75.
- Role-specific: Table 5 z-stats; Table 6 isolated correlations (Pearson or point-biserial? likely correlation of bundle percentile with win/loss).
- FFT: decision tree with 3 metrics; accuracy claims.
- Page citations: [PAGE 1], [PAGE 2], etc. Must cite exact page markers and verbatim quotes where source pages are provided. Since I have the full text, I can reference pages.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: optical tracking in traditional sports (basketball references [2] Maheswaran 2012, [3] Cervone 2014), Duch et al. 2010 PLoS ONE quantifying individual performance in team activity, Wolfram logistic regression reference, FFTrees R package Phillips 2016.
- Multi-week traps: LoL patches every few weeks (Page 3) change network encoding and gameplay; corpus spans several patches, footnote 2 focuses on ~150,000 games from latest patch (~century of NBA seasons). Model decay risk: patch shifts invalidate θ coefficients; retraining cadence must match patch cycle (biweekly/monthly). Optical tracking breaks on UI changes/patch notes. Spectator delay 3 minutes.
- eSports as petri dish for traditional sports analytics: millions of games daily vs sparse traditional sports data.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: players tilt after death; play aggressively; die again. Paper's tilt proxy: time dead by player over preceding 3 minutes / total time dead by team. Figure 7. This is a recursive loop: death → emotional turmoil → suboptimal play → death.
- Counter-trap: using advanced stats to break the loop: identify worthless deaths, lack of vision, unfavorable fights; smart kills as corrective action; map coverage/time management as escape valve when both fail (FFT).
- Clock: three-minute spectator delay; cooldowns tracked continuously; in-game cellphone app estimation requires fast inference; minute-resolution win probability; early/mid/late game phases (0-10, 10-20, 20+).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Since eSports is digital, physical/biomechanical/weather vetoes are null/set to zero, but must be addressed as veto layers.
- Physical layer: no weather, no biomechanical load, no turf/altitude. Veto proof: environmental variance σ_env = 0.
- Biomechanical layer: no physical fatigue, but cognitive fatigue/tilt exists (APM decay, reaction time). Not modeled in paper. Veto condition: if human reaction time > game tick rate or cognitive load exceeds threshold, veto individual performance attribution.
- Network/client layer: GPU requirement for spectator client, three-minute delay, encoded bidirectional traffic, patch-induced protocol changes every few weeks.
- The paper's claims are veto-proof only within the closed digital loop; they fail under patch drift or client-side obfuscation.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios. Need 3 scenarios with predictions.
1. Patch change veto: If a LoL patch alters map geometry or champion abilities between training and inference, the logistic regression coefficients θ from Table 3 become invalid. Prediction: win probability calibration error (Brier score) increases by >15% within 72 hours of patch deployment unless retrained.
2. Spectator client obstruction veto: If Riot encrypts or obfuscates the spectator minimap/UI such that OpenCV contour detection fails on champion overlaps (noted difficulty on Page 3), the optical tracking pipeline returns null locations. Prediction: data completeness drops below 90% of champion-seconds; downstream win probability model cannot be computed for affected games.
3. Role misclassification veto: If the Appendix role-detection algorithm fails (e.g., role swaps, invades), and a support is mislabeled as ADC, the role-specific logistic regression (Table 5) applies incorrect coefficient vector. Prediction: individual contribution attribution error; the sign of survivability coefficient may flip incorrectly for misclassified roles, causing false "passivity" diagnosis.

Need to ensure no betting language. Avoid "odds", "spread", "moneyline", "total". Use "win probability", "probability", "likelihood".

Word count: Need >= 1000 words total across sections. THINK_TRACE >= 400. I'll write substantial content.

Let me draft carefully.

Page citations: The source text shows page numbers 1 through 16 at bottoms. I'll cite [PAGE N] appropriately.

Verbatim quotes: I should include some short quotes with page citations.

Let's write.

THINK_TRACE (>=400 words):

Start: The paper proposes an open-source optical tracking platform for LoL...
Multi-hop derivation: spectator mode -> minimap -> OpenCV -> locations -> features -> win probability -> smart kills/worthless deaths -> bundles -> logistic regression -> role-specific -> FFT.
Gray zones:
1. Anonymity: "Unknown Authors" and redacted acknowledgments limit reproducibility audit despite open-source promise.
2. Privacy footnote: "There are no privacy concerns here: we only track games that allow public spectating" [PAGE 1] — but continuous tracking of location, health, mana, cooldowns without user knowledge raises gray-zone consent issues even if public spectating.
3. Patch instability: Patches every few weeks [PAGE 3] change encoded network traffic; corpus spans several patches yet Section 3.2 restricts to ~150,000 games from latest patch [PAGE 6], creating a sample-selection boundary where model coefficients may not generalize across patches.
4. Statistical notation: The text states log(P(class=k|x)) ∝ x·θ^(k) [PAGE 5], which is an incomplete softmax/logit specification; for binary win/loss this reduces to logit(p) but the proportionality rather than equality and missing intercept in the displayed relation introduces implementation ambiguity.
5. FFT accuracy inconsistency: Section 4.2.2 states FFT "makes the correct prediction about 80 percent of the time" then later "correctly predicts victory 87 percent of the time" [PAGE 14] — unreconciled discrepancy.
6. Multicollinearity: Table 4 shows ρ = -0.75 between vision denial and gold [PAGE 12], which is substantial despite the authors claiming "very few exhibit substantial multicollinearity"; negative marginal coefficients (survivability -0.0229, vision -0.0088) may be suppression effects rather than true passivity.
7. Role detection: Appendix algorithm assumes fixed meta roles; lane swaps or invades could break early-minion heuristics [PAGE 16].

That should be 400+ words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
Include equations with \begin{equation} etc. Units. Page citations. Quotes.

RETROCAUSAL_GENEALOGY: Lineage and traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (tilt loop), counter-trap (FFT/smart kills), clock (3-min delay, minute resolution, patch cycle).

CROSS_LAYER_VETO_ADJUDICATION: Veto layers. Digital null set for weather/biomechanical/physical, but network/client vetoes active.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.

Let's make sure total words exceed 1000. I'll write generously.

Need to avoid toy equations. No Force/Fatigue. All equations formal.

Let's write now.

Check: "ZERO BETTING LINES" — I must not say "odds" except maybe in statistical "odds ratio"? Better avoid even "odds" to be safe. Use probability, logit, log-odds? Log-odds might be borderline but it's a formal statistical term, not a betting line. I'll use "logit" and "log probability" but avoid "odds" in betting sense. The invariant says never mention spreads, totals, moneylines, or odds. "Odds" as in betting odds is prohibited. Log-odds is technical; to be safe I'll say "logit" and avoid the word "odds" entirely where possible, or use "log-odds (logit)" sparingly? Better avoid the word "odds" completely. Use "win probability p", "logit(p)".

Also avoid "betting", "wager", "line".

Let's draft.

Word count estimate: THINK_TRACE ~500, SOURCE_OPERATORS ~400, others ~200 each = ~1500 total. Good.

Citations: Use [PAGE 1], [PAGE 3], [PAGE 5], [PAGE 6], [PAGE 12], [PAGE 14], [PAGE 16].

Verbatim quotes: include exact text from source.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper derives its central causal claim through a six-hop pipeline: (1) spectator-mode client captures the game state; (2) OpenCV computer vision parses the minimap and UI bubbles to recover champion locations, health, mana, cooldowns, damage events, and vision at sub-second resolution [PAGE 3]; (3) these continuous observations are aggregated into per-minute feature rows consisting of kills, towers, and large monsters for each team [PAGE 5]; (4) a logistic-regression win-probability model is trained on one randomly sampled minute per game to break the high intra-game autocorrelation of consecutive rows [PAGE 5]; (5) individual events are re-labeled as smart kills or worthless deaths according to whether the in-game win probability increased or decreased immediately after the event [PAGE 6]; and (6) tier-normalized percentiles of ten advanced stat bundles are regressed against team victory to isolate marginal contributions [PAGE 11].

Gray-zone audit reveals multiple stability risks. First, the authors are listed as “Unknown Authors” and the acknowledgments are redacted [PAGE 1], which weakens reproducibility despite the promise of open-source code and data. Second, the privacy footnote asserts “There are no privacy concerns here: we only track games that allow public spectating” [PAGE 1], yet the system records location, health, mana, and cooldowns continuously without player knowledge, creating a consent gray zone even within public spectating. Third, patch non-stationarity: LoL patches occur approximately every few weeks and alter the highly encoded bidirectional network traffic [PAGE 3], while the corpus spans several patches; Section 3.2 therefore restricts analysis to roughly 150,000 games from the latest patch [PAGE 6], implying that model coefficients trained on one patch may decay within weeks of the next deployment. Fourth, the statistical notation on [PAGE 5] gives log(P(class = k|x)) ∝ x·θ^(k) as a proportionality rather than a fully specified logit or softmax, omitting an explicit intercept and link function, which introduces implementation ambiguity for replication. Fifth, the fast-and-frugal tree section reports “about 80 percent” accuracy and later “87 percent” without reconciliation [PAGE 14]. Sixth, Table 4 reports a correlation of -0.75 between vision denial and gold [PAGE 12], which is substantial multicollinearity despite the authors’ claim that very few features exhibit substantial multicollinearity; the negative marginal coefficients for survivability (-0.0229), vision (-0.0088), vision denial (-0.0018), carry focus (-0.0035), and laning (-0.0023) [PAGE 11] may therefore reflect suppression effects rather than genuine passivity penalties. Seventh, the Appendix role-detection algorithm relies on early-minion heuristics that can break under lane swaps, early invades, or role-swap agreements [PAGE 16], threatening the role-specific regressions in Table 5 [PAGE 12]. None of these issues invalidate the core insight—that team-relevant filtering of individual actions sharpens the individual-to-team win-probability relationship—but they bound the regimes in which the estimates are trustworthy.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(Y_i \in \{0,1\}\) denote team victory for observation \(i\), and let \(\mathbf{x}_i\) be the feature vector. The in-game win-probability model uses features at minute resolution: red and blue kills, towers, and large monsters killed [PAGE 5]. To address within-game serial correlation, one minute is drawn uniformly at random from each game: \(t^* \sim \mathrm{Uniform}\{1,\dots,T_{\text{game}}\}\), yielding millions of approximately independent rows [PAGE 5]. The fitted model is a binary logistic regression:

\[
\operatorname{logit}\bigl(p_i\bigr) = \log\!\left(\frac{p_i}{1-p_i}\right) = \beta_0 + \sum_{j=1}^{n}\beta_j x_{ij}, \qquad
p_i = \frac{1}{1+\exp\!\left(-\left(\beta_0+\sum_{j=1}^{n}\beta_j x_{ij}\right)\right)},
\]

where \(p_i = P(Y_i=1 \mid \mathbf{x}_i)\) is dimensionless and bounded in \([0,1]\); \(x_{ij}\) are counts per minute (\(\mathrm{min}^{-1}\)) or tier-normalized percentiles in \([0,100]\); parameters are estimated by stochastic gradient descent minimizing the binomial deviance [PAGE 5].

Event-level metric refinement [PAGE 6]: let \(WP(t)\) be the win probability immediately before an event and \(WP(t+1)\) immediately after. A death is worthless iff \(\Delta WP \le 0\) following the death; a kill is smart iff \(\Delta WP > 0\) following the kill.

Bundle-level regression [PAGE 11]:

\[
y = \frac{1}{1+\exp\!\left(-\left(\beta_0+\beta_1 f_1+\cdots+\beta_{10} f_{10}\right)\right)},
\]

with estimates reported in Table 3: Favorable Fights \(\hat\beta = 0.0378^{***}\) (\(z=99.90\)); Deaths \(\hat\beta = 0.0595^{***}\) (\(z=127.85\)); Time Management \(\hat\beta = 0.0499^{***}\) (\(z=102.87\)); Gold \(\hat\beta = 0.0058^{***}\) (\(z=19.30\)); Survivability \(\hat\beta = -0.0229^{***}\) (\(z=-55.90\)); Vision \(\hat\beta = -0.0088^{***}\) (\(z=-23.63\)); Carry Focus \(\hat\beta = -0.0035^{***}\) (\(z=-13.70\)); Laning \(\hat\beta = -0.0023^{***}\) (\(z=-4.68\)); Vision Denial \(\hat\beta = -0.0018^{***}\) (\(z=-8.26\)); Abilities \(\hat\beta = 0.0007^{*}\) (\(z=2.21\)). All coefficients are dimensionless per percentile point. The breakdown regime is patch transition: because the spectator protocol and gameplay balance change every few weeks [PAGE 3], \(\boldsymbol{\beta}\) estimated on patch \(c\) is not guaranteed to transport to patch \(c+1\) without recalibration.

Pairwise correlation breakdown [PAGE 12]: the largest positive correlation is \(\rho = 0.51\) between carry focus and favorable fights; the largest negative correlation is \(\rho = -0.75\) between vision denial and gold. The latter is a substantial collinearity regime under which individual marginal coefficients are statistically identified but economically fragile. Role-specific z-statistics [PAGE 12] show favorable fights, deaths, vision, time management, and survivability are significant across all five roles, while laning matters for laners (top, mid, ADC) and abilities matter for non-laners.

The fast-and-frugal tree [PAGE 14] uses three advanced metrics with a reported cross-validation accuracy of approximately 80%, later restated as 87%; the unreconciled discrepancy places the predictive regime between \(0.80\) and \(0.87\) until the discrepancy is resolved.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage descends from traditional-sports optical tracking: basketball rebound deconstruction [PAGE 1, ref. 2] and the POINTWISE real-time decision-valuation framework [PAGE 1, ref. 3], both MIT Sloan papers, which established that raw location data must be semantically parsed into actions before it predicts outcomes. The individual-contribution question echoes Duch et al. (2010), which quantified individual soccer performance in team activity via network-flow centrality [PAGE 1, ref. 6]. The logistic-regression implementation follows standard machine-learning references [PAGE 5, ref. 5], and the fast-and-frugal tree draws on Phillips (2016) FFTrees [PAGE 14, ref. 7]. The eSports-specific inversion is that, unlike the NBA’s 1,230 games per season, LoL produces millions of games daily, allowing the authors to treat roughly 150,000 games from one patch as “the equivalent of more than a full century of NBA seasons” [PAGE 6].

Multi-week traps center on patch cadence. Riot deploys balance patches approximately every few weeks, each of which can significantly alter champion abilities, item economics, and map mechanics [PAGE 3, PAGE 6]. Because the spectator-client traffic is “highly encoded, difficult to decipher, and subject to change with every patch” [PAGE 3], the OpenCV minimap parser and the client-hook extractor have bounded functional lifetimes: a UI re-layout or minimap-skin change breaks contour detection, and a protocol change breaks network interception. The fourth, unfinished approach—direct network-traffic interpretation without the game client [PAGE 3, PAGE 4]—is motivated by GPU cost but is the most patch-fragile because it depends on reverse-engineered encryption that rotates with each patch. Thus any production deployment must couple model retraining to the patch calendar; a model frozen for more than one patch cycle enters a breakdown regime where win-probability calibration drifts as feature distributions shift (e.g., new jungle monster values alter the “monsters killed” coefficients) and as optical parsers fail on new champion skins.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: the paper identifies “tilt” as a recursive emotional loop in which a player dies in lane, returns immediately, over-aggresses, and dies again [PAGE 9]. The proxy is the player’s time dead over the preceding three minutes divided by the team’s total time dead over the same window [PAGE 9], a within-game clock that measures how quickly a local catastrophe propagates into global self-sabotage. The theory-of-mind implication is that an individual’s recent death history conditions their subsequent decision policy: post-death aggression raises the probability of worthless deaths and unfavorable fights.

Counter-trap: the advanced-stat framework breaks the recursion by re-weighting outcomes. Worthless deaths and smart kills are conditioned on \(\Delta WP\), so a death that secures an inhibitor is not coded as a failure, and a chase-kill that sacrifices an objective is not coded as success [PAGE 6]. The fast-and-frugal tree supplies the escape hierarchy: first avoid below-average worthless-death percentiles; second, if deaths are contained, seek above-average smart-kill percentiles; third, if both fail, rely on above-average map coverage/time management [PAGE 14]. This is the counter-trap to tilt: when mechanical recovery is impossible, spatial presence (roaming, map pressure) substitutes for fight impact.

Clock: three nested time regimes govern the system. The spectator delay is three minutes [PAGE 3], which prevents real-time cheating but imposes a latency floor on any live in-game win-probability application. The model itself runs at minute granularity rather than per-second to reduce noise and enable cellphone-app inference [PAGE 5]. The patch clock operates on a multi-week scale [PAGE 3], which dominates model staleness: statistical significance (\(p < 0.0001\)) on ~150,000 games from one patch [PAGE 11] does not imply validity across patches.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: weather, altitude, turf, and atmospheric conditions are null sets in eSports; \(\sigma_{\text{env}} = 0\). No physical veto applies.

Biomechanical layer: there is no physical fatigue, load management, or injury report. However, cognitive fatigue and tilt operate as pseudo-biomechanical vetoes: prolonged play degrades reaction speed and decision quality, and the tilt proxy [PAGE 9] shows that death clustering induces suboptimal subsequent play. The paper does not model APM decay or reaction-time thresholds, so the veto condition is: if estimated cognitive load or time-since-last-break exceeds an unmodeled threshold, individual-performance attribution is vetoed because the observed \(\Delta WP\) may reflect fatigue rather than strategic choice.

Network/client layer: the active veto regime. The spectator client requires an expensive GPU [PAGE 4]; cloud instances auto-scale but remain compute-bound. The bidirectional traffic is encoded and patch-volatile [PAGE 3], and the minimap parser struggles with champion overlaps and visually confusing information [PAGE 3]. Veto conditions: (i) if OpenCV contour detection fails on a frame because of champion occlusion, champion-seconds are lost and the per-second data stream [PAGE 4] has gaps; (ii) if the three-minute spectator delay [PAGE 3] is removed or shortened by Riot, the anti-cheat rationale collapses and the data-access model changes; (iii) if direct network-traffic interpretation [PAGE 4] remains unfinished, GPU-dependent spectator-mode instances are the only scalable path, capping throughput. Weather and biomechanical vetoes are provably absent; the binding vetoes are digital-protocol and compute-layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Patch-induced coefficient drift. Counterfactual: a balance patch changes turret plating values and dragon buffs between training and inference. Prediction: the logistic-regression win-probability model, trained on “Red Towers, Blue Towers, Red Monsters, Blue Monsters” per minute [PAGE 5], suffers calibration decay; Brier score increases by more than 15% within 72 hours of patch deployment unless the model is retrained on post-patch games, because tower and monster features change semantic value under the new patch.

Scenario 2 — Optical-parser occlusion failure. Counterfactual: a new champion release introduces visual effects that overlap with minimap icons, breaking the OpenCV contour pipeline noted as difficult due to “champion overlaps and various other visually confusing information” [PAGE 3]. Prediction: tracked location completeness falls below 90% of champion-seconds for affected games; the in-game win-probability model cannot compute location-conditioned features, and downstream smart-kill/worthless-death labels [PAGE 6] become undefined for team fights occurring during occlusion windows.

Scenario 3 — Role-misclassification coefficient misapplication. Counterfactual: the Appendix role algorithm mislabels a support as ADC because of an early lane swap or level-6 timing anomaly [PAGE 16]. Prediction: role-specific logistic regression applies the ADC coefficient vector to a support player; since carry focus is significant for ADC (\(z=-9\)) but not top lane, and survivability is negative across roles [PAGE 12], the misclassified player receives an incorrect individual-contribution score, producing a false diagnosis of “passivity” or “over-aggression” and corrupting the fast-and-frugal tree’s death-first decision rule [PAGE 14].
</RLVR_COUNTERFACTUAL_VETOES>