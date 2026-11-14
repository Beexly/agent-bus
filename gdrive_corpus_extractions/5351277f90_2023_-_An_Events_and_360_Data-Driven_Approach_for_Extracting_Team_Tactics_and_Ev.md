---
source: "2023 - An Events and 360 Data-Driven Approach for Extracting Team Tactics and Evaluating Performance in Football - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2023"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3589
---

<NATIVE_REASONING>
The user wants a deep analytical output based on the provided source paper (Yeung & Bunker, 2023). I must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful: "odds" in the context of betting lines is prohibited. But probability (e.g., expected goals probability) is fine as it's not a betting line. I must avoid saying "odds" in a betting sense. I can mention probabilities but not betting odds.

Word count: >= 1,000 words total across sections. THINK_TRACE alone >=400 words.

Structure:
- THINK_TRACE: Deep derivation, gray-zone audit. Discuss how the paper's methodology chains together: PrefixSpan support thresholds, NMSTPP-360 architecture, HPUS formulation, data split and look-ahead bias, temporal point process assumptions, breakdown regimes (interevent time max(1,...), missing 360 features zero-imputation, own-goal exclusion, 45-minute cutoff). Multi-hop: raw events -> categorised actions -> zoned sequences -> PrefixSpan patterns -> NMSTPP expected action distribution -> HAS -> HPUS -> HPUS ratio -> correlation with xG/ranking. Gray zones: zone numbering 1-20 via Juego de posición but Figure 1 only shows 3 macro zones; HPUS formula seems truncated (E(Zone)E(Action|Zone)/E(Interevent time) but weights are arbitrary 0,5,10; exponential accumulation formula for HPUS missing in text; HAS max 10 min 0 but no saturation function specified; support threshold approx 30% but table shows 25% for opponent-wing, 43% own-half; class weights fine-tuned on validation set risks leakage if not careful; NMSTPP predicts sequence sequentially but uses previous output as input - exposure bias; radar plot compares only Man City, Arsenal, average; mean shift bandwidth not specified).
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from paper, units (seconds, zone index 1-20, probabilities dimensionless), page citations [PAGE N], breakdown of loss function, HAS formula, HPUS formula (reconstruct carefully from text, note missing exponential accumulation exact form), NMSTPP-360 loss: L = 10*RMSE + CEL_zone + CEL_action. HAS = E(Zone)E(Action|Zone)/E(Interevent time). E(Zone) = 0 P(Area1)+5 P(Area2)+10 P(Area3). E(Action|Zone) = 0 P(Possession end)+5 P(Dribble,Pass)+10 P(Cross,Shot). E(Interevent time) = max(1, Interevent time). HPUS accumulates HAS exponentially focused on concluding actions. HPUS_hat matches HPUS if shot/cross else 0. HPUS ratio = sum HPUS_hat / sum HPUS. Validation table values. Dataset split 80/10/10 sorted by date. 360 features: 5*22=110 features, zero-imputation. Interevent time range 0-60 s.
- RETROCAUSAL_GENEALOGY: Lineage from Palacios-Huerta minimax, game theory, robotics (Liu et al. 2021), Gréhaigne et al. 1999 tactics, Plakias et al. 2023 review, VAEP Decroos et al. 2019, OBV, xT, Seq2Event Simpson et al. 2022, PrefixSpan Pei et al. 2004, Transformer Vaswani 2017, mean shift Fukunaga & Hostetler 1975. Multi-week traps: look-ahead bias avoided by date sorting but season split uses 2021/2022 second half for training and 2022/2023 for application - temporal drift across summer transfer windows, managerial changes, pre-season friendlies not included; own-goal exclusion removes rare events but also removes information about defensive errors; 45-minute cutoff discards stoppage time and extra time (not applicable in league anyway) but ignores end-of-half urgency; HPUS correlation with ranking -0.67 (negative because lower rank number is better) but correlation does not imply causation; retro-causal trap: using end-of-season ranking to validate mid-season metrics can create circularity if tactics adapt based on standing.
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Teams under crisis (relegation battle) regress to high-frequency own-half based tactics (43% support) because risk aversion; counter-trap: opponent-wing based tactics have high HPUS but low HPUS_hat, meaning teams generate wing pressure but fail to convert - opponents can set a trap by overloading wings knowing conversion is inefficient; clock: interevent time modeled 0-60s but end-of-game clock management not explicitly in NMSTPP (no score state or time remaining feature), so model cannot predict time-wasting or urgency in final minutes. HPUS focuses on concluding actions to avoid overemphasizing numerous actions, but this creates a "recency bias" in possession valuation. Crisis habit: Manchester City's defensive capability shown by opponents' high HPUS but low HPUS_hat - opponents create chances but can't finish, suggesting City's press forces low-value actions late in possession.
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. The model uses event and 360 data but no weather, pitch condition, player load, or biomechanical data. Veto layers: physical (player fatigue not modeled; interevent time only captures temporal spacing, not metabolic cost), biomechanical (no player skeleton or joint load; dribble vs pass categorization ignores pressing intensity), weather (no rain/wind/temperature; zone probabilities may shift under adverse conditions but NMSTPP-360 has no weather node). However, the paper claims 360 features improve zone/action prediction; veto: if 360 data missing (broadcast doesn't capture all 22 players), zero-imputation introduces bias because absent players are indistinguishable from off-camera players at origin (0,0) potentially. Interevent time max(1, ...) singularity prevents division by zero but imposes a floor that distorts rapid sequences (e.g., rebound shots within <1s). HPUS area segmentation in Supplementary Figure 2 not shown; exact area boundaries unknown, creating a spatial boundary veto.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual vetoes that could invalidate the paper's claims if tested.
  1. Veto: Re-run PrefixSpan on 2022/2023 only (not 2021/2022 second half) and compare extracted tactics frequencies. Prediction: own-half based support drops below 43% because 2022/2023 had more direct football; if support shifts, the 30% threshold claim is season-contingent.
  2. Veto: Ablate 360 features but keep Transformer context length; measure zone CEL on cold-weather matches (Nov-Feb) vs warm months. Prediction: NMSTPP-360 advantage over NMSTPP shrinks or reverses in adverse weather because off-ball coordinates are less predictive under wind/rain, violating the claim that 360 always improves zone prediction.
  3. Veto: Compute HPUS ratio for teams with >50% own-half frequency but low xG; if a team has high HPUS but low actual shot conversion, HPUS ratio is decoupled from xG. Prediction: for relegation-bound teams, HPUS ratio correlates weakly with xG (|r|<0.3), breaking the claim that HPUS reveals offensive ability universally.
  
Word count target: Need >1000 words total. THINK_TRACE ~450. SOURCE_OPERATORS_AND_EQUATIONS ~300. Others ~200 each. Should be fine.

I need to cite page markers. The text has page numbers in bold like **1**, **2**, etc. I should reference [PAGE 5] for Table 1, [PAGE 8] for HAS formula, [PAGE 11] for Table 3, [PAGE 14] for EPL application correlations, etc.

No betting lines. Avoid "odds". Use "probability", "likelihood", "expected value".

Let's write carefully.

I will ensure LaTeX is formal. Use \mathcal{L}, \mathbb{E}, etc.

Check for exact verbatim quotes? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include a few verbatim quotes with page markers.

Let's draft.

THINK_TRACE section: deep multi-hop derivation.
- Hop 1: Raw StatsBomb events -> Table 1 categorisation. Percentages from train set. Pass 48.06%, Dribble 42.39%, Possession End 8.30%, Cross 1.58%, Shot 1.25% [PAGE 5].
- Hop 2: Zone segmentation. Pitch divided into own-half, opponent-wing, opponent-central. But NMSTPP uses 20 zones via Juego de posición [PAGE 7]. Discrepancy: Figure 1 macro zones vs 20 zones.
- Hop 3: PrefixSpan support ~0.3 but Table 2 shows 25% and 43% [PAGE 10]. Gray zone: support threshold not uniformly applied.
- Hop 4: NMSTPP-360 input t-1 to t-40, Transformer encoder, three sequential networks predicting time, zone, action. Loss: 10*RMSE + CEL + CEL [PAGE 7-8].
- Hop 5: HAS formula [PAGE 8]. HPUS accumulates exponentially, focus on concluding actions. Exact accumulation formula missing from text (gray zone).
- Hop 6: HPUS_hat zero if no shot/cross [PAGE 8]. HPUS ratio [PAGE 8].
- Hop 7: Validation: NMSTPP-360 total loss 3.01 vs 3.11; zone CEL 1.59 vs 1.66; action CEL 0.68 vs 0.70; interevent RMSE unchanged 0.07 [PAGE 11].
- Hop 8: EPL 2022/2023: HPUS_hat corr with xG 0.87, goals 0.78, ranking -0.67 [PAGE 14]. Man City vs Arsenal radar.
- Gray-zone audit: class weights fine-tuned on validation set [PAGE 12] could leak test information if validation used for hyperparameter tuning and then reported on same set; look-ahead bias prevented by date sorting [PAGE 9]; own-goal exclusion [PAGE 9]; interevent time floor max(1,...) [PAGE 8] creates singularity avoidance but biases rapid events; missing 360 players zero-imputed [PAGE 7] conflates absence with origin.

Need >=400 words here.

SOURCE_OPERATORS_AND_EQUATIONS: formal equations, units, citations, breakdown.

RETROCAUSAL_GENEALOGY: lineage and multi-week traps.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let's ensure no "odds" word. I will not use it.

Word count check: I'll aim for ~1300 words total.

Write now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper chains raw event streams into tactical inference through five hops: (1) StatsBomb events are collapsed into five action categories using Table 1 [PAGE 5], where Pass retains 48.06% of train-set mass, Dribble 42.39%, Possession End 8.30%, Cross 1.58%, and Shot 1.25%; Half Start is forced into Pass for modeling convenience despite always being followed by a pass in the source data. (2) Possessions are rendered as two parallel sequences—action tags and zone tags. Zone segmentation is specified at two resolutions: the macro-pitch split into own-half, opponent-wing, and opponent-central [PAGE 6, Figure 1], and the NMSTPP’s 20-zone Juego de posición grid [PAGE 7]. This resolution mismatch is a gray zone: PrefixSpan operates on whatever zone alphabet is fed to it, yet the paper does not state whether the 20-zone or 3-zone alphabet drives Table 2’s pattern extraction. (3) PrefixSpan [PAGE 10] extracts recurrent subsequences with support near 0.3, but Table 2 reports “opponent-wing” at 25% and “own-half” at 43%, violating the stated approximate 30% floor; the support threshold is therefore not a hard constraint but a descriptive band, weakening the claim that exactly five tactics are canonical. (4) The NMSTPP-360 model consumes events t−1 to t−40 through a Transformer encoder [PAGE 7], then passes the condensed vector to three sequentially coupled networks that forecast interevent time, zone, and action, where each network’s output conditions the next. This autoregressive chaining introduces exposure bias: errors in predicted time propagate into zone and action distributions, but the paper reports only aggregate CEL/RMSE, not conditional error cascades. (5) Valuation collapses expected events into HAS = E(Zone)·E(Action|Zone)/E(Interevent time) [PAGE 8], where E(Zone) weights areas 1–3 as 0/5/10 and E(Action|Zone) weights possession end/dribble/pass/cross/shot as 0/5/5/10/10. These weights are arbitrary integers with no derivation from utility theory; HAS is bounded [0,10] but the saturation function is unspecified. HPUS accumulates HAS exponentially with “heightened focus on the concluding actions” [PAGE 8], yet the exact exponential accumulation formula is absent from the text, making the score non-reproducible from the manuscript alone. HPUŜ is defined to equal HPUS only when a possession terminates in a shot or cross, otherwise zero [PAGE 8], which imposes a hard outcome veto that discards valuable build-up possessions ending in progressive passes. The HPUS ratio = ΣHPUŜ / ΣHPUS [PAGE 8] thus measures conversion efficiency of attacking potential, not raw chance creation.

Gray-zone audit: the train/validation/test split is 80/10/10 sorted by match date to prevent look-ahead bias [PAGE 9], which is sound, but the model is trained exclusively on the second half of 2021/2022 and then applied to 2022/2023 [PAGE 9], imposing a cross-season distributional shift across transfer windows and managerial changes that is never tested. Own-goal matches are excluded [PAGE 9] to avoid infrequent occurrences, yet this removes high-entropy defensive-error events precisely when tactical transition is most informative. Interevent time is floored at max(1, t) [PAGE 8] to prevent division by zero, but this creates a singularity regime where sub-second sequences (rebounds, deflections) are artificially dilated, biasing HAS upward for slow possessions and downward for chaotic scrambles. Missing 360 players are zero-imputed [PAGE 7], conflating “player not in frame” with “player at coordinate origin,” which can inflate spatial attention in the Transformer when broadcast coverage omits off-ball actors. Class weights in the cross-entropy loss are fine-tuned on the validation set [PAGE 12], risking indirect leakage if validation performance drives architectural choices that are then reported on the same split. Finally, the correlation between HPUŜ and final ranking is −0.67 [PAGE 14]; because lower numeric rank denotes better performance, the negative sign is expected, but the paper does not disentangle whether HPUŜ causes success or merely reflects the fact that better teams take more shots and crosses in dangerous zones.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units:

Let a possession P = {e₁,…,eₙ} where each event eᵢ = (τᵢ, zᵢ, aᵢ, Fᵢ). τᵢ ∈ [0,60] s is interevent time [PAGE 7]; zᵢ ∈ {1,…,20} is the Juego de posición zone index [PAGE 7]; aᵢ ∈ {Pass, Dribble, PossessionEnd, Cross, Shot} is the categorical action from Table 1 [PAGE 5]; Fᵢ ∈ ℝ¹¹⁰ is the zero-imputed StatsBomb 360 feature vector (5 features × 22 players, absent players = 0) [PAGE 7].

NMSTPP-360 input window: X = {e_{t−40},…,e_{t−1}} encoded by Transformer encoder into latent vector hₜ [PAGE 7]. Three sequential prediction heads:
τ̂ₜ = f_time(hₜ), ẑₜ = f_zone(hₜ, τ̂ₜ), âₜ = f_action(hₜ, τ̂ₜ, ẑₜ) [PAGE 7].

Loss function [PAGE 8]:
\[
\mathcal{L} = 10 \cdot \operatorname{RMSE}(\tau, \hat{\tau}) + \operatorname{CEL}(z, \hat{z}) + \operatorname{CEL}(a, \hat{a})
\]
Units: RMSE in seconds; CEL dimensionless (nats). Empirical factor 10 on RMSE balances scales [PAGE 8]. Validation results [PAGE 11, Table 3]: NMSTPP-360 total loss 3.01 vs NMSTPP 3.11; Δ total = −0.09; zone CEL 1.59 vs 1.66 (Δ −0.07); action CEL 0.68 vs 0.70 (Δ −0.02); interevent RMSE unchanged at 0.07 s.

Holistic Action Score [PAGE 8]:
\[
\operatorname{HAS} = \frac{\mathbb{E}(\text{Zone}) \cdot \mathbb{E}(\text{Action}\mid\text{Zone})}{\mathbb{E}(\text{Interevent time})}
\]
\[
\mathbb{E}(\text{Zone}) = 0\cdot P(\text{Area }1) + 5\cdot P(\text{Area }2) + 10\cdot P(\text{Area }3)
\]
\[
\mathbb{E}(\text{Action}\mid\text{Zone}) = 0\cdot P(\text{Possession end}) + 5\cdot P(\text{Dribble, Pass}) + 10\cdot P(\text{Cross, Shot})
\]
\[
\mathbb{E}(\text{Interevent time}) = \max(1, \text{Interevent time}) \quad \text{[s]}
\]
HAS ∈ [0,10], dimensionless. Denominator floor at 1 s creates a singularity-avoidance regime but distorts sub-second interevent dynamics.

HPUS accumulation over n actions is described as exponential with terminal focus [PAGE 8], but the closed form is not printed; this is a reproducibility breakdown. HPUŜ [PAGE 8]:
\[
\widehat{\operatorname{HPUS}} =
\begin{cases}
\operatorname{HPUS}, & \text{if possession contains shot or cross} \\
0, & \text{otherwise}
\end{cases}
\]
HPUS ratio [PAGE 8]:
\[
R = \frac{\sum \widehat{\operatorname{HPUS}}}{\sum \operatorname{HPUS}}
\]
Dimensionless conversion ratio. EPL 2022/2023 correlations [PAGE 14]: corr(HPUŜ, xG) = 0.87; corr(HPUŜ, goals) = 0.78; corr(HPUŜ, final rank) = −0.67.

PrefixSpan support [PAGE 10]: N = 12,812 sequences; Pass Based [pass]*7 at 30%; Dribble Based [dribble]*7 at 32%; Alternating [pass,dribble]*5 / [dribble,pass]*5 at 31%/30%; Opponent-Wing [opponent-wing]*5 at 25%; Own-Half [own-half]*5 at 43%.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from game-theoretic minimax in professional sport (Palacios-Huerta, 2003) [PAGE 19] and multi-agent cooperation in robotics (Liu et al., 2021) [PAGE 19], through foundational tactical theory (Gréhaigne et al., 1999) [PAGE 20], into modern event-based valuation (xG, xT, VAEP, OBV) [PAGE 4], and finally to sequential language modeling of soccer (Seq2Event, Simpson et al., 2022) [PAGE 21]. The paper inherits PrefixSpan from data-mining literature (Pei et al., 2004) [PAGE 20] and the Transformer architecture from Vaswani et al. (2017) [PAGE 20], while mean shift clustering traces to Fukunaga & Hostetler (1975) [PAGE 20].

Multi-week traps: Because training data are restricted to the second half of 2021/2022 [PAGE 9], any tactical shift occurring during the 2022 summer transfer window—new signings, managerial appointments, or preseason system changes—is invisible to the model. Applying the extracted tactics to 2022/2023 [PAGE 14] assumes temporal stationarity of possession grammar across a full off-cycle, a strong retro-causal assumption: the model treats end-of-season EPL ranking as an exogenous label, yet teams that finish high may have adapted their tactics in response to their own table position, creating a feedback loop where HPUŜ both reflects and reinforces final standing. A second trap lies in the 45-minute half cutoff [PAGE 9]; stoppage-time urgency and end-of-half game-state management are excluded, so the model cannot capture clock-driven tactical regression (e.g., protecting a lead in injury time). Third, own-goal exclusion [PAGE 9] removes the highest-variance defensive transitions, biasing the extracted “own-half based” tactic (43% support) toward conservative retention rather than desperation clearances. Finally, the radar plot compares only Manchester City, Arsenal, and the league average [PAGE 14], which overfits the narrative to two dominant teams and ignores mid-table and relegation-cluster dynamics where HPUS conversion behavior likely differs structurally.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Teams in relegation battles regress toward high-frequency “own-half based” possessions (43% league-wide support, Table 2 [PAGE 10]) because risk aversion suppresses progressive zone entries. Under pressure, the PrefixSpan pattern [own-half]*5 becomes a default attractor, even when HPUS for that zone is low, producing a recursive loop: low-HA possessions reinforce conservative habits, which further depress attacking conversion.

Counter-trap: “Opponent-wing based” tactics show high HPUS but comparable HPUŜ to other tactics [PAGE 15], meaning wing-heavy possession generates attacking potential but fails to convert into shots or crosses. An opposing manager can set a counter-trap by inviting wing overloads, knowing that the wide structure inflates HPUS while the terminal conversion rate (HPUŜ/HPUS) remains suppressed. Manchester City’s defensive profile exemplifies this: their opponents created more HPUS opportunities but converted fewer into actual attacks than Arsenal’s opponents [PAGE 15], indicating that City’s pressure forces wide, low-HPUŜ sequences and wastes the opponent’s attacking clock.

Clock: The NMSTPP models interevent time in [0,60] s [PAGE 7] but contains no explicit match-clock state (minute, score differential, time remaining). Therefore the model cannot distinguish a 20-second build-up in the 10th minute from one in the 89th minute of a one-goal game. HAS’s denominator max(1, interevent time) [PAGE 8] penalizes rapid sequences regardless of game-state urgency, so late-game clock management—time-wasting, hurried direct balls, or goalkeeper delay—is invisible to the valuation. This creates a recursive blind spot: the model evaluates possession quality as if every minute carries identical tactical weight, causing it to undervalue clock-aware crisis behaviors and overvalue structurally identical actions performed under different temporal pressures.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: Player fatigue, sprint load, and accumulated minutes are absent; interevent time captures temporal spacing only, not metabolic cost. A dribble in the 88th minute by a fatigued winger is encoded identically to one in the 10th minute, so biomechanical degradation cannot veto a false-positive tactical pattern.

Biomechanical layer veto: The 360 features record (x,y) coordinates and binary goalkeeper/actor/teammate flags [PAGE 7], but no joint angles, velocity vectors, or pressing intensity. “Dribble” aggregates Carry, Duel, Dribble, and 50/50 [PAGE 5], erasing the biomechanical distinction between a protected carry and a contested duel. Consequently, the NMSTPP action head may predict “dribble” with high confidence while missing the physical contest outcome that determines whether possession survives.

Weather layer veto: No rain, wind, temperature, or pitch-condition covariates enter the model. Under adverse weather, cross and shot success rates typically decline and pass lengths shorten; since HPUS weights Cross and Shot at maximum 10 in E(Action|Zone) [PAGE 8], the score systematically overvalues terminal actions in poor conditions where their expected yield is lower. The 360-coordinate augmentation improves zone/action prediction in aggregate [PAGE 11], but zero-imputation for absent players [PAGE 7] means that when broadcast coverage drops off-ball actors due to camera angle or weather-related obstructions, the model substitutes origin coordinates, injecting spatial noise that the Transformer may misread as tactical positioning.

Singularity regime: max(1, interevent time) [PAGE 8] produces a hard floor at 1 s; any possession containing sub-second events (deflections, rebound shots, goalkeeper parries) has its E(Interevent time) inflated, deflating HAS. This is an exact breakdown regime where the HPUS valuation is mathematically discontinuous relative to the physical clock.

Verdict: The model is not veto-proof. The missing physical, biomechanical, and weather layers constitute cross-layer vetoes that can invalidate HPUS-based comparisons between matches played under different environmental or game-state conditions. The only partial mitigation is the 360 feature’s off-ball context, which captures relative spacing but not the physical constraints governing that spacing.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 (Tactic stability): Re-run PrefixSpan on the full 2022/2023 season only, rather than on the second half of 2021/2022 used for training [PAGE 9], and test whether “own-half based” remains at ≥43% support. If the 2022/2023 support falls below 30%, the five-tactic taxonomy is season-contingent and the EPL application in Section 4.2 [PAGE 14–17] inherits a shifted pattern alphabet. Prediction: support for [own-half]*5 drops below 30% because 2022/2023 featured more direct transitions among mid-table clubs, invalidating the frequency table used for mean shift clustering.

Veto scenario 2 (360 feature weather interaction): Ablate StatsBomb 360 inputs and compare zone CEL for matches in November–February (cold/wet) versus March–May (warm/dry). The paper claims 360 features universally improve zone prediction (CEL 1.59 vs 1.66) [PAGE 11]. If the CEL advantage disappears or reverses in cold-weather matches, off-ball coordinates are not robust to atmospheric drag on ball flight and player positioning, and the NMSTPP-360 validation is not transportable across seasons with differing climate distributions. Prediction: NMSTPP-360’s zone CEL advantage narrows to <0.02 in sub-10°C matches.

Veto scenario 3 (HPUS conversion decoupling): Compute HPUŜ and actual xG for all teams stratified by >50% own-half frequency. The paper asserts HPUŜ correlates with xG at 0.87 [PAGE 14]. If relegation-zone teams exhibit high HPUS but near-zero xG (|corr(HPUŜ, xG)| < 0.3 within the low-frequency stratum), then HPUŜ measures possession volume rather than offensive quality, and the claim that HPUŜ reveals “offensive ability” fails for low-block teams. Prediction: for bottom-six teams, HPUŜ correlates weakly with xG (r ≈ 0.15), exposing HPUŜ as a possession-activity metric rather than a pure attack-conversion metric.
</RLVR_COUNTERFACTUAL_VETOES>