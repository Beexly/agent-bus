---
source: "2023 - Learning Contextual Event Embeddings to Predict Player Performance in the MLB - Heaton et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2023"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4366
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper "Learning Contextual Event Embeddings to Predict Player Performance in the MLB" by Heaton et al. (2023 MIT SSAC). I need to produce output with exact XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
- >= 1,000-WORD DEPTH across sections.

I need to be careful: The source text is provided inline. I should cite page markers like [PAGE 1], [PAGE 2], etc. based on the PDF page numbers visible in the text (1-16, though the text shows pages 1-14 explicitly, with references on 14). Actually the text shows page numbers 1 through 14 in the footer. The user says PAGES: 16 but the text ends at 14. I will cite what's visible: [PAGE 1] through [PAGE 14].

Let me plan content:

THINK_TRACE (>=400 words):
- Multi-hop derivation: The paper argues sports analytics is in "bag-of-events" era analogous to NLP bag-of-words. Proposes contextual embeddings via transformer.
- Data pipeline: 1995-2021 season stats, 2015-2021 play-by-play. 15,743 games, 1.2M PA, 4.6M pitches, 2,229 batters, 1,884 pitchers [PAGE 5 Table 1].
- Model: Transformer with MHA. Pre-train via Masked Gamestate Modeling (MGM), adapting BERT MLM, mask 15% of vectors [PAGE 7]. Player embeddings prepended, attention mask manipulated so player embeddings only attend to events where player was involved [PAGE 7].
- Fine-tuning: 4-step process [PAGE 8]. Sequence of N=10 games. Predict strikeouts, hits, walks for pitcher and batter.
- Results: Table 2 [PAGE 9] shows pitcher strikeout MSE 5.37, MAE 1.85, R^2 0.21; batter strikeout MSE 0.43, MAE 0.57, R^2 0.06, etc. Pitcher better than batter because pitcher participates in every event (~9x more ABs) [PAGE 9].
- Comparison to sportsbooks Table 3 [PAGE 10]: Ours # predictions 4,856 vs Book 3 3,239. MAE pitcher strikeouts 1.85 (tied second best with asterisk), R^2 0.21 (tied second best). Batter has-hit longest streak 16 vs 17 best.
- Gray-zone audit: The paper compares to sportsbooks but avoids disclosing their methods [PAGE 2]. "binary batter has-hit" formulation differs: model predicts hit against starting pitcher only, books predict hit in entire game (easier) [PAGE 10]. This is an apples-to-oranges comparison masked as competitive. Also new players/rookies singularity: no MLB events, nothing to base predictions on [PAGE 10]. Small context window (10 games) vs decades used by books [PAGE 13]. The R^2 values are low (0.21 max), meaning ~79% variance unexplained for pitcher strikeouts. The claim "competitive" relies on MAE/R^2 proximity but ignores calibration, sharpness, and proper scoring rules. Also only 6 years training data vs decades.
- Need to mention no betting lines (spreads, totals, moneylines, odds) — I will not mention them.

SOURCE_OPERATORS_AND_EQUATIONS:
- Formal LaTeX for BABIP, FPCT, ERA, SLG, OBP, OPS, WAR, linear weights [PAGES 3-4]. I should reproduce them properly in LaTeX.
- Transformer equations: MHA, attention mechanism. The paper doesn't give explicit LaTeX for attention but describes it. I can state standard transformer attention: $\text{Attention}(Q,K,V) = \text{softmax}(\frac{QK^T}{\sqrt{d_k}})V$. But must avoid toy equations; this is standard architecture, not invented. Cite [PAGE 6].
- MGM: mask 15% of vectors [PAGE 7].
- Fine-tuning linear projection layer [PAGE 8].
- Metrics: MSE, MAE, R^2 definitions. R^2 = 1 - SS_res/SS_tot. Units: strikeouts count (dimensionless integer), hits count, walks count. MAE in strikeouts per game. MSE in (strikeouts)^2.
- Breakdown regimes: R^2 near 0 (0.02-0.21) indicates breakdown of explanatory power; batter context <10 games singularity [PAGE 10]; rookie cold-start singularity [PAGE 10]; 10-game window vs career-long breakdown [PAGE 13].

RETROCAUSAL_GENEALOGY:
- Lineage: Harris 1954 distributional structure [PAGE 14 ref 13] -> bag-of-words [PAGE 1] -> BERT MLM [PAGE 7 ref 10] -> Vaswani et al. 2017 Attention is All You Need [PAGE 6 ref 9] -> Heaton & Mitra 2021 prior work [PAGE 5 ref 8, PAGE 14 ref 8] -> this paper.
- Related work: Soto Valero 2016 ~59% accuracy [PAGE 2], Silver & Huffman 2021 log5 outperform [PAGE 3], Bailey et al. 2017 Statcast + PECOTA [PAGE 4], Elfrink 2018 XGBoost 56% [PAGE 4].
- Multi-week traps: The 10-game window is a short-term trap; batters have sparse participation (every 9th AB) causing effective context collapse [PAGE 9-10]. Over a multi-week horizon, rookies and injured returnees create cold-start failures. The model cannot recover sequence from counts (information-theoretic irreversibility) [PAGE 4].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under pressure, analysts revert to counting stats (bag-of-events) because they are interpretable and stable. The paper explicitly notes this regression [PAGE 1-2].
- Counter-trap: Contextual embeddings appear to solve it but may overfit to transient game-state noise (outs, base occupancy) rather than stable skill. The embedding visualizations show striations for outs and base occupancy [PAGE 11-12], which could be situational noise mistaken for skill.
- Clock: The 10-game recency window acts as a clock; it decays older skill information. Pitchers have dense observations (every pitch), batters sparse (~1/9). This creates an asymmetric temporal resolution. Predictions are myopic to the last 10 games, ignoring longer-term aging curves.
- Theory of mind: The model assumes the player embedding captures "how the player performed in this context" [PAGE 7], but attention masks restrict player embeddings to only events where they were involved, potentially ignoring cross-player strategic adaptation (e.g., pitcher-batter matchup history beyond raw events).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical veto: Baseball physics — pitch speed, rotation, location, exit velocity, launch angle, distance from Statcast [PAGE 6]. These are included but <5% of numerals are sabermetrics [PAGE 6]. However, the model does not model biomechanical fatigue, pitch velocity decay across a start, or weather (wind, temperature, humidity) affecting flight. No explicit physical layer veto; absence of biomechanical state is a veto gap.
- Biomechanical veto: Pitcher participation every event vs batter every 9th AB [PAGE 9] creates differential fatigue exposure not modeled. No pitch count, innings pitched fatigue, or injury status inputs mentioned.
- Weather veto: No weather variables in data presentation [PAGE 6]. Gamestate delta includes base occupancy, count, outs, score but not atmospheric conditions.
- Adjudication: The veto layers are not formally adjudicated; the model assumes stationarity of context embeddings across weather/biomechanical regimes. Breakdown when a pitcher faces high heat/humidity or a batter faces extreme wind — embeddings may conflate skill with environmental noise.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR (Reinforcement Learning via Verifiable Rewards?) counterfactual veto scenarios + predictions. RLVR likely means we propose verifiable counterfactuals that would veto the model's predictions.
1. Rookie/cold-start veto: If a starting pitcher has zero prior MLB starts, model outputs null/nothing [PAGE 10]. Counterfactual: Introduce a rookie pitcher; veto prediction because embedding is undefined. Prediction: MAE/R^2 degrade to baseline (mean strikeouts) for cold-start subset.
2. Batter sparse-context veto: If a batter started in fewer than 10 team games, effective context collapses [PAGE 10 Figure 5]. Counterfactual: Filter to games where batter had <5 games of context; prediction: R^2 for batter hits drops below 0.04 (current Table 2) toward 0, MAE increases.
3. Weather/environmental regime shift veto: No weather inputs [PAGE 6]. Counterfactual: Games with extreme wind (outfield wind >15 mph) or temperature <40°F; prediction: model's pitcher strikeout MAE degrades by >10% relative to Table 3 because embeddings cannot disentangle environmental movement from skill.

I must ensure word count >= 1000 across sections. Let me write robustly.

Also strict: no betting lines. I will not mention spreads, totals, moneylines, odds. I can mention "sportsbooks" and "projections" but not odds. The paper itself mentions "betting lines" in abstract, but I should avoid repeating those exact terms as per instruction. I'll refer to "major sportsbooks" and "projections" without saying lines/odds.

Citations: Use [PAGE N] inline.

Let's draft.

THINK_TRACE: I'll write around 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX blocks.

RETROCAUSAL_GENEALOGY: ~250 words.

RECURSIVE_THEORY_OF_MIND: ~250 words.

CROSS_LAYER_VETO_ADJUDICATION: ~250 words.

RLVR_COUNTERFACTUAL_VETOES: ~250 words.

Total should exceed 1000 words.

Need to be careful with verbatim quotes: "bag-of-events" era [PAGE 1], "contextual embeddings" [PAGE 1], etc. Use exact quotes with page markers.

Let's write.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I have pages 1-14 visible. I'll cite accordingly.

Let's compose carefully.

Check for any fake ratios: I won't invent Force/Fatigue. I will mention "roughly 9x as many ABs" which is from the paper [PAGE 9], not invented. I'll cite it.

LaTeX equations:
BABIP: $\text{BABIP} = \frac{H - HR}{AB - HR - K + SF}$
FPCT: $\text{FPCT} = \frac{PO + A}{PO + A + E}$
ERA: $\text{ERA} = \frac{9 \cdot ER}{IP}$ (paper says Equation 3 but text doesn't show formula explicitly, just label; I'll state standard form carefully? The source text for Eq 3 is missing the actual formula in the markdown but label says Equation 3 to compute ERA where ER earned runs and IP innings pitched. I can write $\text{ERA} = \frac{ER}{IP} \times 9$ as standard, noting it's the conventional form consistent with the paper's label [PAGE 3]. But to avoid inventing, maybe I can just reference it. However the instruction says state formal equations. I'll write standard ERA formula and attribute to [PAGE 3] label.
SLG: $\text{SLG} = \frac{1B + 2\cdot2B + 3\cdot3B + 4\cdot HR}{AB}$
OBP: $\text{OBP} = \frac{H + BB + HBP}{AB + BB + HBP + SF}$
OPS: $\text{OPS} = \text{OBP} + \text{SLG}$
WAR numerator: $\text{RunsCreated} = \text{BattingRuns} + \text{FieldingRuns} + \text{BaserunningRuns}$; $\text{WAR} = \frac{\text{RunsCreated} + \text{PositionAdjustment} + \text{LeagueAdjustment} + \text{ReplacementAdjustment}}{\text{RunsPerWin}}$ [PAGE 4].
Linear weights: $RS = \sum_{n=1}^{N} \alpha_{event_n} C_{event_n}$ [PAGE 4].
Transformer attention: $\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$ [PAGE 6].
MGM: randomly mask 15% of vectors [PAGE 7].
MSE: $\text{MSE} = \frac{1}{M}\sum_{i=1}^{M}(y_i - \hat{y}_i)^2$; MAE: $\frac{1}{M}\sum |y_i - \hat{y}_i|$; $R^2 = 1 - \frac{\sum(y_i-\hat{y}_i)^2}{\sum(y_i-\bar{y})^2}$.
Fine-tuning linear projection: $\hat{L} = W_{\text{proj}} e_{\text{player}} + b$ [PAGE 8].

Units: strikeouts/hits/walks are dimensionless counts per game. MAE in count units. MSE in count^2. R^2 dimensionless [0,1] though can be negative.

Breakdown regimes: R^2 < 0.1 indicates near-singular explanatory failure for batters (0.02-0.06) [PAGE 9]. Cold-start for new pitchers [PAGE 10]. Batter context <10 games [PAGE 10].

Now write final output with XML tags exactly. No markdown outside? I'll use the XML tags as containers.

Make sure not to use the forbidden betting terms. I'll avoid "spread", "total", "moneyline", "odds", "line". I will use "projection" or "prediction".

Let's draft now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper positions contemporary baseball analytics in a "bag-of-events" era, directly paralleling the pre-BERT "bag-of-words" era in computational linguistics [PAGE 1]. The core multi-hop derivation is: (1) discrete event counts destroy sequential and contextual information because counts are many-to-one mappings from event sequences to summary statistics [PAGE 4]; (2) transformers, via multi-head attention (MHA), can recover contextual relationships among ordered event vectors [PAGE 6]; (3) therefore, pre-training a transformer with Masked Gamestate Modeling (MGM)—adapted from BERT's Masked Language Modeling—on 15% randomly masked event vectors should force the model to learn instantaneous gamestate structure (e.g., strikeouts require two strikes, innings end at three outs) [PAGE 7]; (4) prepending player embeddings with an attention mask constrained to each player's involved events yields player-specific contextual representations [PAGE 7]; (5) fine-tuning a linear projection layer on these embeddings predicts single-game strikeouts, hits, and walks [PAGE 8].

Data scope and breakdown: The dataset spans 1995–2021 season summaries plus 2015–2021 play-by-play, comprising 15,743 games, 1.2M plate appearances (PAs), 4.6M pitches, 2,229 batters, and 1,884 pitchers [PAGE 5, Table 1]. Pre-training uses only six years of data and 10-game context windows [PAGE 13]. This creates an immediate gray zone: the authors compare against sportsbooks that "leverage decades of data describing the entirety of a player’s career" while their own model is restricted to a 10-game MLB-only window [PAGE 13]. The asymmetry is not merely rhetorical; it is structural.

Results gray zone: Table 2 shows pitcher strikeout prediction achieves R² = 0.21, MAE = 1.85, MSE = 5.37, whereas batter strikeout R² collapses to 0.06 [PAGE 9]. The authors attribute the gap to pitchers participating in roughly 9x as many at-bats as batters over 10 games, because batters only appear every 9th team at-bat [PAGE 9]. This is a valid observation, but it also reveals an information-density asymmetry: pitcher embeddings are dense observations of nearly every game event, while batter embeddings are sparse, noisy projections of team batting contexts [PAGE 9–10]. The paper acknowledges batter predictions often rest on significantly fewer than 10 games of effective context [PAGE 10], which is a singularity regime for the batter branch.

Comparison gray zone: Table 3 reports pitcher strikeout MAE = 1.85 and R² = 0.21 for "Ours," statistically tied for second-best among books [PAGE 10]. However, the batter has-hit task is formulated differently: the model predicts a hit against the starting pitcher only, whereas books predict a hit anywhere in the full game, which the authors admit is "arguable an easier task" because batters have at least as many at-bats against the full game as against the starter [PAGE 10]. This is a framed asymmetry presented as competitiveness. The claim of "50% more predictions" (4,856 vs. 3,239 closest book) measures coverage, not accuracy [PAGE 10]. The maximum R² of 0.21 means approximately 79% of strikeout variance remains unexplained; "competitive" therefore describes proximity to other imperfect projections, not strong explanatory power.

Cold-start singularity: If a starting pitcher has no prior MLB start, the model has "nothing" to base predictions on [PAGE 10]. Rookies and injured returnees therefore fall outside the model's support entirely. This is a hard breakdown regime not remedied by more context because no in-game MLB event sequence exists for the player.

Embedding interpretation: Visualizations of singles and strikeouts show the model disentangles outs, base occupancy, and leverage implicitly [PAGE 11–12]. This supports the contextual embedding claim, but it also means the model may encode transient game-state noise (e.g., a bases-loaded strikeout in a blowout) as player skill unless the attention mechanism robustly separates situation from actor. The paper offers no formal identifiability proof that player embeddings isolate skill from leverage context.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, page citations, and breakdown regimes.

Counting-statistic operators from Related Work [PAGE 3–4]:
\[
\text{BABIP} = \frac{H - HR}{AB - HR - K + SF}
\]
where \(H\) = hits, \(HR\) = home runs, \(AB\) = at-bats, \(K\) = strikeouts, \(SF\) = sacrifice flies. Unit: dimensionless rate.

\[
\text{FPCT} = \frac{PO + A}{PO + A + E}
\]
where \(PO\) = putouts, \(A\) = assists, \(E\) = errors. Unit: dimensionless probability.

\[
\text{ERA} = \frac{9 \cdot ER}{IP}
\]
conventional form consistent with the paper's Equation 3 label [PAGE 3], where \(ER\) = earned runs and \(IP\) = innings pitched. Unit: earned runs per 9 innings.

\[
\text{SLG} = \frac{1B + 2\cdot 2B + 3\cdot 3B + 4\cdot HR}{AB}
\]
[PAGE 4]. Unit: bases per at-bat.

\[
\text{OBP} = \frac{H + BB + HBP}{AB + BB + HBP + SF}
\]
[PAGE 4]. Unit: dimensionless probability of reaching base per plate appearance.

\[
\text{OPS} = \text{OBP} + \text{SLG}
\]
[PAGE 4]. Unit: dimensionless composite.

WAR linear-weights chain [PAGE 4]:
\[
\text{RunsCreated} = \text{BattingRuns} + \text{FieldingRuns} + \text{BaserunningRuns}
\]
\[
\text{WAR} = \frac{\text{RunsCreated} + \text{PositionAdjustment} + \text{LeagueAdjustment} + \text{ReplacementAdjustment}}{\text{RunsPerWin}}
\]
\[
RS = \sum_{n=1}^{N} \alpha_{event_n} C_{event_n}
\]
\[
\text{RunsCreated}_i = \sum_{n=1}^{N} \alpha_{event_n} C_{event_n, i}
\]
All are derived from event counts \(C\), confirming the "bag-of-events" critique [PAGE 4].

Transformer attention operator [PAGE 6]:
\[
\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^{T}}{\sqrt{d_k}}\right)V
\]
Each vector corresponds to a thrown pitch rather than a word token [PAGE 6]. Multi-head attention selectively weights context vectors per updated vector.

Masked Gamestate Modeling (MGM) [PAGE 7]:
Randomly mask 15% of event vectors in the sequence; model predicts missing gamestate and event. This is a denoising auto-encoder objective over sequential baseball events.

Player-embedding attention constraint [PAGE 7]:
Player embeddings may attend only to events in which the corresponding player participated. Formally, the attention mask \(\mathbf{M}\) enforces \(\mathbf{M}_{p,e} = 0\) unless player \(p\) is involved in event \(e\).

Fine-tuning prediction head [PAGE 8]:
\[
\hat{L} = W_{\text{proj}} \, e_{\text{player}} + b
\]
where \(e_{\text{player}}\) is the embedding from the previous \(N=10\) games and \(\hat{L}\) predicts strikeouts, hits, or walks. Unit: expected count per game.

Evaluation metrics [PAGE 9–10]:
\[
\text{MSE} = \frac{1}{M}\sum_{i=1}^{M}(y_i - \hat{y}_i)^2, \quad \text{unit: count}^2
\]
\[
\text{MAE} = \frac{1}{M}\sum_{i=1}^{M}|y_i - \hat{y}_i|, \quad \text{unit: count}
\]
\[
R^2 = 1 - \frac{\sum_{i=1}^{M}(y_i - \hat{y}_i)^2}{\sum_{i=1}^{M}(y_i - \bar{y})^2}, \quad \text{unit: dimensionless}
\]

Breakdown / singularity regimes:
• Batter \(R^2 \in \{0.06, 0.04, 0.02\}\) for strikeouts, hits, walks [PAGE 9]: near-singular explanatory failure; roughly 94–98% of variance unexplained.
• Pitcher \(R^2 = 0.21\) maximum [PAGE 9]: weak-to-moderate linear association; 79% variance unexplained.
• Cold-start: pitcher with zero prior MLB starts yields undefined embedding [PAGE 10]; prediction is null, not a low-confidence estimate.
• Batter context collapse: effective context often \(<10\) games because batters start sporadically [PAGE 10, Figure 5]; embeddings are estimated from team-level batting sequences rather than individual at-bats.
• Temporal stationarity assumption: 6 years of training data and 10-game windows [PAGE 13] assume player skill is static over that window; aging, injury, and mechanical drift are not modeled.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week trap analysis.

Lineage. The paper explicitly roots its methodology in Harris (1954) distributional structure [PAGE 14, Ref. 13], the intellectual ancestor of bag-of-words representations [PAGE 1]. It then traces the NLP transformation from static counting to contextual embeddings via BERT's Masked Language Modeling [PAGE 7, Ref. 10] and the transformer architecture of Vaswani et al. (2017) [PAGE 6, Ref. 9]. The immediate baseball precursor is Heaton & Mitra (2021), "Using Machine Learning to Describe How Players Impact the Game in the MLB" [PAGE 5, Ref. 8; PAGE 14], which constructed the dataset extended here to 2020–2021 play-by-play [PAGE 5]. Related academic work includes Soto Valero (2016) team outcome prediction at ~59% accuracy using BABIP, FPCT, ERA, SLG, OBP, OPS [PAGE 2]; Silver & Huffman (2021) plate-appearance prediction outperforming log5 via "batter_historical" and "pitcher_historical" count-derived features [PAGE 3]; Bailey et al. (2017) Statcast augmentation of PECOTA [PAGE 4]; and Elfrink (2018) XGBoost game-outcome prediction [PAGE 4]. None of these leverage temporal event order for future performance prediction [PAGE 4].

Multi-week traps. The 10-game context window is a short-horizon memory trap. Over multi-week horizons, three failure modes compound. First, batter observability is sparse: a starter participates in roughly every 9th team at-bat, so a 10-game window may contain very few direct batter events, forcing the model to infer individual skill from team batting sequences [PAGE 9–10]. Second, pitcher observability is dense but myopic: the model sees every pitch in the last 10 starts but discards career-long trajectory, aging curves, and mechanical changes encoded in decades of data that sportsbooks allegedly use [PAGE 13]. Third, the cold-start boundary is absolute: rookies and pitchers without prior MLB starts have zero event history, so no amount of sequence modeling within the 10-game window can recover their embeddings [PAGE 10]. These are not hyperparameter-tunable issues; they are support-boundary violations of the model's data manifold. The minor-league extension proposed in the conclusion [PAGE 13] acknowledges this trap but remains unimplemented.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and temporal clock analysis.

Crisis habit regression. Under uncertainty, analysts habitually regress to interpretable counting statistics because counts are stable, auditable, and deeply institutionalized in baseball record-keeping since 1975 [PAGE 1–2]. The paper identifies this regression explicitly: WAR, BABIP, FPCT, ERA, SLG, OBP, and OPS are all ultimately linear combinations of event counts, collapsing distinct physical situations into identical scalar summaries [PAGE 2–4]. The crisis is that two physically different events—a dribbler beaten out versus a deep fly held to a single—are treated identically by WAR [PAGE 4]. The proposed remedy is contextual embedding, which recovers situation-sensitive representations.

Counter-trap. The contextual embedding approach may itself be a counter-trap: it replaces transparent count regression with opaque high-dimensional embeddings that can conflate player skill with transient game-state leverage. The embedding visualizations show strong structure by outs and base occupancy [PAGE 11–12], meaning the model learns "leverage" implicitly. Unless the attention mechanism perfectly factorizes actor skill from situation, a strikeout in a high-leverage bases-loaded jam and a strikeout in a blowout may produce nearby embeddings, causing the model to credit or blame the pitcher for context he did not control. There is no identifiability proof or disentanglement loss presented to verify that player embeddings isolate stable skill from situational noise. The model therefore risks learning a context-conditioned average rather than a player-specific performance prior.

Recursive theory of mind. The fine-tuning step assumes the model can form a theory of mind about the opposing starting pitcher and batter: it embeds how each player performed in recent contexts and projects that forward into a head-to-head matchup [PAGE 8]. However, the player-embedding attention mask restricts each embedding to events where that player was involved [PAGE 7]. This prevents cross-player strategic adaptation signals—for example, how a pitcher adjusts to a specific batter's historical tendencies beyond raw event counts—from flowing into the embedding. The model thus has a first-order theory of the player's own recent context, but no higher-order model of the opponent's adaptive response within the game.

Clock. The 10-game recency window functions as a decaying clock: older performances are dropped from the context sequence entirely, not down-weighted [PAGE 8–9]. For pitchers, this is less catastrophic because they appear in every event of their starts; for batters, the clock is brutal because sparse participation means the effective clock often reads far fewer than 10 games [PAGE 10]. There is no multi-timescale memory (e.g., a 365-day moving average as used by Silver & Huffman [PAGE 3]), so the model cannot separate a slump from a true talent shift within the window.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto layers; adjudication status.

Physical veto layer. Statcast inputs include pitch speed, rotation, location, exit velocity, launch angle, and distance [PAGE 6]. These are physical observables, but the text states sabermetric inputs account for "roughly less than 5% of the numerals in each vector," implying the bulk of each event vector is gamestate delta, pitch type, and event type [PAGE 6]. No veto mechanism is described for physical extremes: a pitch's movement profile under high humidity, wind-aided fly balls, or temperature-dependent ball flight are not explicitly modeled. The gamestate delta tracks base occupancy, ball-strike count, outs, and score [PAGE 6], but omits atmospheric state. Veto status: absent. Breakdown regime: games with extreme wind or temperature where environmental variance exceeds player-skill variance; embeddings may misattribute wind-assisted outcomes to batter/pitcher skill.

Biomechanical veto layer. The dense-versus-sparse participation asymmetry [PAGE 9] maps directly onto biomechanical load: pitchers throw every pitch in their starts and accumulate fatigue, velocity decay, and injury risk across the 10-game window; batters accumulate far fewer high-intensity events. No pitch count, innings-pitched trajectory, fatigue state, or injury indicator is listed among model inputs [PAGE 6]. Veto status: absent. Breakdown regime: a starting pitcher on short rest or returning from the injured list; the model has no biomechanical state variable to penalize or adjust for reduced stuff, so strikeout projections will overestimate late-game performance.

Weather veto layer. Weather variables are not mentioned in Data Presentation [PAGE 6] or Dataset [PAGE 5]. Temperature, humidity, wind direction, and precipitation affect pitch movement, batted-ball distance, and fielder positioning. Veto status: absent. Breakdown regime: outdoor games in extreme weather; because weather is not in the input vector, the model cannot condition embeddings on it and will conflate weather-driven outcomes with player performance.

Adjudication. No formal cross-layer veto adjudication exists in the paper. The architecture assumes stationarity: that event embeddings learned under average conditions transfer to all physical, biomechanical, and weather regimes. The breakdown singularity occurs whenever a regime shift (extreme weather, pitcher fatigue, batter injury) dominates the signal, because the model lacks layer-specific gating or veto variables to suppress predictions. The safest adjudication rule would be to abstain from prediction when any input modality lies outside the training distribution, but the paper defines no such abstention protocol.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios and predictions. RLVR here denotes verifiable counterfactual conditions that, if triggered, should veto the model's output as unreliable.

Veto Scenario 1 — Rookie / Cold-Start Pitcher Singularity.
Condition: A starting pitcher has zero prior MLB starts, so the model has no event sequence to embed [PAGE 10]. Verifiable check: Query the model for this pitcher's single-game strikeout prediction; correct output is null / undefined because the embedding cannot be constructed. Prediction: If the system is forced to emit a scalar (e.g., by imputing league-average embeddings), MAE on this subset will converge to the mean strikeout rate (~1.8–2.0 strikeouts per game) and R² will collapse to approximately 0, matching the lower bound of Table 2 rather than the reported 0.21.

Veto Scenario 2 — Batter Effective-Context Collapse.
Condition: Filter the 2021 test set to games where the starting batter appeared in fewer than 5 of his team's previous 10 games, a regime the paper acknowledges is common [PAGE 10, Figure 5]. Verifiable check: Compute batter hit/ strikeout MAE and R² on this filtered subset only. Prediction: Batter hit R² will fall below the reported 0.04 [PAGE 9], approaching 0, and MAE will rise above 0.57, because the embedding is estimated from team batting contexts rather than direct batter events. This verifies the sparse-participation breakdown.

Veto Scenario 3 — Environmental Regime Shift (Weather / Wind).
Condition: Identify games with extreme environmental conditions not represented in the input vector (e.g., outfield wind speed above a threshold, temperature below freezing) [PAGE 6; no weather inputs]. Verifiable check: Compare pitcher strikeout MAE on normal games versus extreme-environment games using the same 2021 test set and the same trained weights. Prediction: MAE in extreme-environment games will exceed the reported 1.85 [PAGE 9–10, Table 3] by more than 10% relative, because embeddings cannot disentangle wind- or temperature-driven batted-ball and pitch-movement outcomes from player skill. If MAE does not degrade, it implies the model inadvertently learned weather proxies; if it degrades as predicted, the absence of a weather veto layer is confirmed.
</RLVR_COUNTERFACTUAL_VETOES>