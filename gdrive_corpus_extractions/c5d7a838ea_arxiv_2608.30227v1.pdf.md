---
source: "arxiv_2608.30227v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3482
---

<NATIVE_REASONING>
The user wants a deep technical analysis of the ELASTIC paper provided. I need to produce five XML sections with specific content:

1. THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown, exact singularity/breakdown regimes.
3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
- >= 1,000-word depth across sections.

I need to be careful not to invent fake ratios. I should use the actual equations from the paper (Eq 1-14, Eq 2-9, etc.) and cite pages.

Let me draft each section.

Section 1: THINK_TRACE (>=400 words). Deep multi-hop derivation. Need to trace how event-timestamp error propagates through synchronization to downstream GNN predictions. Discuss gray zones: virtual termination events, candidate frame clipping thresholds, NP-hardness of global alignment? Actually NW is O(mn) per episode, not NP-hard. Gray zone: the choice of g_c=0 and g_e=0 makes the alignment score-driven, but sensitivity analysis shows candidate gap penalty degrades accuracy in both directions. Also gray zone: 0.5 score threshold rejects low confidence. Multi-hop: tracking at 25 FPS => 0.04s resolution. MD 1.697 frames = 0.068s. W2 tolerance 2 frames = 0.08s. The paper says annotators agree within 2 frames for 99.3% of events. So ground truth itself has ambiguity. That's a gray zone: the ceiling of synchronization accuracy is bounded by inter-annotator variance.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS. List formal LaTeX equations from paper:
- Eq (1): order constraint 1 <= t_start_1 <= ... <= t_end_M <= T. Units: frame indices dimensionless integers.
- Eq (2): clipped linear mapping f(x; x0, x1). Units depend on feature.
- Eq (3): s_BA = f(a(t_c); 0, 30 m/s^2). Unit: acceleration m/s^2.
- Eq (4): s_PBD = 1 - f(d(t_c,p); 0, 3 m). Unit: distance m.
- Eq (5): s^-_KD = f(max d; 0, 3 m).
- Eq (6): s^+_KD = f(max d; 0, 3 m).
- Eq (7): s^-_PBDS = 1 - f(v^-; 0, 7 m/s). Unit: slope m/s.
- Eq (8): s^+_PBDS = f(v^+; -7 m/s, 0).
- Eq (9): s_OD = 1 - f(min_{q in O(p)} d(t_c,q); 0, 3 m).
- Eq (10-12): weighted sum with lambdas = 0.25 each, score in [0,1].
- Eq (13): vanilla NW recurrence.
- Eq (14): extended NW with down-match, r <= 0, r=-0.1 default.
- Eq (1) order constraint is a partial order / chain constraint.

Breakdown: candidate frame selection discards pairs with player-ball distance > 3 m or ball height > 4 m (Page 3). Singularity/breakdown regimes: if player-ball distance threshold is too tight (1 m) coverage drops to 94.0% total (Table 3, Page 6). If height threshold < 3 m loses aerial touches. Candidate gap penalty g_c != 0 degrades accuracy (Table 5, Page 8). Repeat penalty r=0 over-merges; r<=-0.3 blocks legitimate merges. Score threshold < 0.5 rejected (Page 5, Section 2.5).

Need to cite [PAGE N] markers and verbatim quotes. I can quote short fragments.

Section 3: RETROCAUSAL_GENEALOGY. Historical lineage: Needleman-Wunsch 1970 bioinformatics [17], adapted to soccer by Oonk et al. [18,19], Biermann et al. [4] learning-based sliding window, Anzer et al. [1] distance-based, Van Roy et al. [29] ETSY. ELASTIC adds event-location-agnostic trajectory-only scoring, virtual termination events (control/out/goal), repeat-augmented NW. Multi-week traps: In a multi-week season, set-piece accuracy collapses to 38.7% if lambda_PBDS=0 (Table 4, Page 7), meaning weekly set-piece heavy fixtures would systematically misalign corner kicks/free kicks if pre-slope feature is downweighted. Also minor events (tackle/dispossessed) MD 3.873 frames in annotation (Table 1, Page 5) shows high human disagreement, a recurring trap in congested match periods.

Section 4: RECURSIVE_THEORY_OF_MIND. Crisis habit regression: When synchronization fails (score < 0.5 rejected), downstream GNNs receive unsynchronized snapshots. Next action prediction accuracy drops from 0.6863 (ELASTIC-NW) to 0.5796 (Unsynced) (Table 7, Page 9). Counter-trap: ELASTIC-Greedy propagates early errors (84.1% vs 96.5% W2 event starts, Page 7). Clock: 25 FPS = 0.04s resolution; W2 = 0.08s tolerance; annotator MD 0.521 frames = 0.0208s (Table 1, Page 5). The "clock" is the frame grid itself; sub-frame events are aliased.

Section 5: CROSS_LAYER_VETO_ADJUDICATION. Physical veto: player-ball distance > 3 m or ball height > 4 m discarded (Page 3). Biomechanical: PBDS slope thresholds +/- 7 m/s over h=0.2s (Page 4). Weather: not explicitly in paper, but trajectory noise inflates measured PBD; tight 1m threshold discards true touches due to noise (Page 6). This is a sensor-noise veto, not weather per se. I should be careful not to invent weather effects not in paper. I can say "No explicit weather/atmospheric layer appears in the source; the closest physical veto is trajectory-noise-induced PBD inflation..." That's honest.

Section 6: RLVR_COUNTERFACTUAL_VETOES. Three verifiable veto scenarios:
1. If lambda_PBDS is set to 0 for set-piece outgoing events, predicted W2 accuracy collapses from 97.9% to 38.7% (Table 4, Page 7). Verifiable by retraining/evaluating with lambda_PBDS=0 on set pieces. Prediction: set-piece synchronization failure rate > 60%.
2. If candidate frame PBD threshold is tightened from 3 m to 1 m, total W2 coverage drops from 98.4% to 94.0% and accuracy from 95.2% to 89.4% (Table 3, Page 6). Verifiable by re-running candidate extraction. Prediction: >4% of ground-truth events lose all valid candidates.
3. If repeat penalty r is set to 0 instead of -0.1, one-touch control-pass sequences over-merge (Table 5, Page 8: total W2 drops from 95.2% to 94.0%). Verifiable by ablating r. Prediction: consecutive event pairs with true temporal coincidence < 1 frame will be assigned separate frames, inflating MD.

I need to ensure total word count >= 1000 words. Let's aim for roughly 200-250 words per section minimum, with THINK_TRACE being longest.

Also strict invariant: no betting lines. I won't mention any odds.

Let's write carefully with [PAGE N] citations.

I must not invent equations not in paper. I'll stick to the paper's equations.

Let's draft.

THINK_TRACE:
Start with the order constraint Eq (1). Explain partial order chain. Multi-hop: tracking at 25 FPS gives x_t every 0.04s [PAGE 2]. Event sequence E length M. Episode batching reduces O(MT) to O(K M' T') [PAGE 2]. Candidate frames sparse subset [PAGE 3]. Pairwise score matrix weighted sum Eq 10-12 [PAGE 4-5]. NW alignment O(mn) per episode. Traceback yields start/end. Postprocessing 0.5 threshold [PAGE 5]. Downstream GNN: unsynchronized accuracy 0.5796 vs ELASTIC-NW 0.6863 [PAGE 9]. Gray zone: ground truth itself is median of 3 annotators; annotators agree within 2 frames for 99.3% of events [PAGE 5]. So synchronization cannot be more precise than inter-annotator variance; W2=2 frames is effectively the noise floor. Another gray zone: virtual termination events are inserted conditionally [PAGE 2-3]; if the original event stream mislabels possession changes, the control/out/goal insertion inherits that error. Another gray zone: g_c=0 and g_e=0 mean alignment is purely score-driven, but sensitivity shows g_c != 0 degrades accuracy both directions [PAGE 8 Table 5], indicating a knife-edge penalty design.

Need >=400 words here.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with LaTeX. Units. Cite pages. Breakdown regimes.

RETROCAUSAL_GENEALOGY:
Lineage: Needleman-Wunsch 1970 [PAGE 5 ref 17], Oonk DataBallPy [PAGE 1 ref 18,19], Biermann [PAGE 1 ref 4], Anzer [PAGE 1 ref 1], Van Roy ETSY [PAGE 1 ref 29]. ELASTIC's novelty: location-agnostic, virtual terminations, repeat-augmented NW. Multi-week traps: set-piece lambda_PBDS collapse [PAGE 7 Table 4], minor event annotation disagreement MD 3.873 frames [PAGE 5 Table 1].

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: When synchronizer outputs low confidence (<0.5), downstream model gets distorted snapshots [PAGE 5 Section 2.5, PAGE 9 Section 4]. Counter-trap: Greedy matching propagates early errors [PAGE 7]. Clock: 25 FPS, 0.04s, W2 0.08s, MD 0.0208s annotator [PAGE 2, PAGE 5].

CROSS_LAYER_VETO_ADJUDICATION:
Physical: d > 3m or height > 4m discarded [PAGE 3]. Biomechanical: PBDS h=0.2s, bounds +/-7 m/s [PAGE 4]. Weather: not in source; nearest is trajectory noise inflating PBD [PAGE 6]. Veto proof: these thresholds define the feasible region; outside it, s(e,c)=0 hard constraint if p_e not in P_c [PAGE 4].

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios with predictions.

Word count check. I'll write substantial paragraphs.

Let's ensure I don't use fake ratios. All equations are from the paper. Units are SI or frames (dimensionless count). Good.

Citations: [PAGE 1] through [PAGE 11] as appropriate. Verbatim quotes: I'll include short quoted phrases like "Event-Location-AgnoSTIC synchronizer" or "repeat-augmented" Needleman-Wunsch.

Let's compose final output.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain begins with the order constraint in Eq. (1), which enforces a strict temporal chain 1 ≤ t_start_1 ≤ ... ≤ t_end_M ≤ T across all M events in an episode, where T is the total number of tracking snapshots [PAGE 2]. Because tracking data arrive at 10 or 25 FPS, the native temporal quantum is 0.1 s or 0.04 s respectively [PAGE 2], so every inferred timestamp is aliased to this frame grid before any algorithmic error is introduced. The paper mitigates the quadratic O(MT) cost of aligning the full event sequence E with the full tracking sequence X by splitting matches into K ≈ 100 in-play episodes and aligning each independently, reducing complexity to O(K M' T') where M' ≪ M and T' ≪ T [PAGE 2]. This batching is valid only if episode boundaries (dead-ball frames) are correctly identified; a mis-segmented episode would force events across a dead-ball boundary into the same DP table, violating the physical assumption that play is continuous within an episode.

The candidate-frame stage extracts a sparse set C = {(t_c, P_c)} from three physically motivated conditions: (a) local minima of player-ball distance, (b) local minima of ball-to-boundary distance, and (c) local maxima of ball acceleration [PAGE 3]. Pairs are discarded if player-ball distance exceeds 3 m or ball height exceeds 4 m, on the grounds that such configurations cannot represent a feasible touch [PAGE 3]. The pairwise score s(e,c) is a weighted sum of four or five clipped-linear feature scores, each mapped through f(x; x0, x1) to [0,1], with hard constraint p_e ∈ P_c [PAGE 4-5]. All feature weights are fixed at λ = 0.25, so the total score remains bounded in [0,1] [PAGE 5].

The alignment uses a repeat-augmented Needleman-Wunsch recurrence (Eq. 14) with four moves: diag-match, right-gap, down-gap, and down-match. The down-match move permits two consecutive events to share one candidate frame at cost r = −0.1, modeling one-touch actions or tackle/dispossessed pairs that describe a single ball contest [PAGE 5-6]. Gap penalties g_c = 0 and g_e = 0 make the alignment purely score-driven [PAGE 6]. Traceback from (m,n) to (0,0) yields the optimal order-preserving assignment [PAGE 6]. Postprocessing rejects matches with s(e,c) < 0.5 and unifies dispossessed-tackle pairs [PAGE 5].

Gray-zone audit: (1) The ground truth itself is the median of three annotators; annotator agreement is within two frames (0.08 s) for 99.3% of events, with mean pairwise difference MD = 0.521 frames (0.0208 s) [PAGE 5, Table 1]. Thus W2 = 2 frames is effectively the measurement-noise floor, not a precision target; any synchronizer cannot be meaningfully more accurate than inter-annotator variance. (2) Virtual termination events (control, out, goal) are inserted conditionally based on event categories and player identity [PAGE 2-3]; if the source event stream mislabels a possession change, the inserted control event inherits that upstream error before alignment ever begins. (3) Setting g_c = 0 and g_e = 0 places the entire burden of discrimination on the feature scores, yet Table 5 shows accuracy degrades in both directions when g_c ≠ 0, indicating a knife-edge penalty design with no robust slack region [PAGE 8]. (4) The 0.5 rejection threshold leaves low-confidence events empty rather than contaminating downstream analyses, but this creates a selection bias: difficult events (e.g., minor events with annotation MD = 3.873 frames [PAGE 5]) are systematically removed from the synchronized set, inflating apparent accuracy on the retained subset.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Order constraint (Eq. 1, [PAGE 2]):
1 ≤ t_start_1 ≤ ⋯ ≤ t_start_i ≤ t_end_i ≤ t_start_{i+1} ≤ ⋯ ≤ t_end_M ≤ T.
Units: frame indices (dimensionless integers); T = total snapshots per episode. This is a hard partial-order chain over event timestamps.

Clipped linear mapping (Eq. 2, [PAGE 4]):
f(x; x0, x1) = {0 if x ≤ x0; 1 if x ≥ x1; (x − x0)/(x1 − x0) if x0 < x < x1}.
Units: output dimensionless score in [0,1]; x units depend on feature.

Ball acceleration score (Eq. 3, [PAGE 4]):
s_BA(t_c) = f(a(t_c); 0, 30 m/s²). Unit: m/s². Saturation at 30 m/s².

Player-ball distance score (Eq. 4, [PAGE 4]):
s_PBD(t_c, p) = 1 − f(d(t_c, p); 0, 3 m). Unit: m.

Pre-kick / post-kick distance scores (Eqs. 5–6, [PAGE 4]):
s^−_KD = f(max_{t−c ≤ t ≤ t_c} d(t, p); 0, 3 m); s^+_KD = f(max_{t_c ≤ t ≤ t+c} d(t, p); 0, 3 m). Unit: m.

PBD slope scores (Eqs. 7–8, [PAGE 4]):
v^−(t,p) = [d(t,p) − d(t−h,p)]/h, v^+(t,p) = [d(t+h,p) − d(t,p)]/h, h = 0.2 s. Units: m/s.
s^−_PBDS = 1 − f(v^−; 0, 7 m/s); s^+_PBDS = f(v^+; −7 m/s, 0).

Opponent distance score (Eq. 9, [PAGE 4]):
s_OD = 1 − f(min_{q ∈ O(p)} d(t_c, q); 0, 3 m). Unit: m.

Category-weighted total scores (Eqs. 10–12, [PAGE 5]):
Outgoing: s = λ_BA s_BA + λ_PBD s_PBD + λ_KD s^+_KD + λ_PBDS s^−_PBDS.
Incoming: s = λ_BA s_BA + λ_PBD s_PBD + λ_KD s^−_KD + λ_PBDS s^+_PBDS.
Minor: s = λ_BA s_BA + λ_PBD s_PBD + λ_KD s_KD + λ_OD s_OD.
All λ = 0.25, so s(e,c) ∈ [0,1]. Hard constraint: s(e,c) = 0 if p_e ∉ P_c [PAGE 5].

Vanilla NW recurrence (Eq. 13, [PAGE 5]):
F_{i,j} = max{F_{i−1,j−1} + s(e_i,c_j), F_{i,j−1} + g_c, F_{i−1,j} + g_e}.

Repeat-augmented NW (Eq. 14, [PAGE 6]):
F_{i,j} = max{diag-match, right-gap, down-gap, F_{i−1,j} + s(e_i,c_j) + r}, with r = −0.1 default, r ≤ 0.

Breakdown / singularity regimes:
• Candidate infeasibility: d > 3 m or ball height > 4 m ⇒ pair discarded [PAGE 3]. At a 1 m distance threshold, total W2 coverage collapses to 94.0% and accuracy to 89.4% [PAGE 6, Table 3].
• Height threshold below 3 m loses aerial touches; coverage < 95% [PAGE 6].
• Score rejection: s(e,c) < 0.5 ⇒ unsynchronized [PAGE 5].
• Penalty singularity: g_c ≠ 0 degrades accuracy in both directions (negative forces spurious matches; positive rewards discarding true candidates); r = 0 over-merges consecutive events; r ≤ −0.3 blocks legitimate one-touch merges [PAGE 8, Table 5].
• Order-preservation violation: if candidate grouping by frame index is omitted, simultaneous candidates receive arbitrary order, conflicting with co-occurring events [PAGE 3].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage traces from the Needleman-Wunsch algorithm (1970), originally developed for amino-acid and DNA sequence alignment in bioinformatics [PAGE 5, ref. 17], to its first soccer adaptation by Oonk et al. via DataBallPy, which aligns events to all in-play frames without candidate selection [PAGE 1, refs. 18–19]. Parallel rule-based and learning lines include Anzer et al.'s distance-based shot synchronization [PAGE 1, ref. 1], Biermann et al.'s sliding-window classifier requiring ground-truth labels [PAGE 1, ref. 4], and Van Roy et al.'s ETSY rule-based synchronizer minimizing summed player-ball-annotated-location distances [PAGE 1, ref. 29]. ELASTIC departs from this genealogy in three historically novel ways: (i) it is event-location-agnostic, reasoning purely over trajectories rather than human-annotated coordinates; (ii) it recovers event endings by inserting virtual termination events (control, out, goal) between consecutive events, thereby detecting ball receptions that prior methods left unsynchronized [PAGE 2–3]; and (iii) it extends NW with a down-match move to collapse temporally coincident events such as one-touch control-pass sequences into a single frame [PAGE 6].

Multi-week traps embedded in this lineage: set-piece outgoing accuracy collapses from 97.9% to 38.7% when λ_PBDS is disabled, because set pieces launch the ball from rest and spurious candidates near the true frame are indistinguishable except by pre-slope [PAGE 7, Table 4]. Across a congested fixture list, any weekly pipeline that down-weights or ablates the PBDS term would systematically misalign corners, free kicks, and kick-offs. Separately, Table 1 shows minor events (tackle, dispossessed) carry the highest annotator disagreement (MD = 3.873 frames), implying that during high-intensity match periods the ground-truth clock itself is fuzzy, and any synchronizer claiming sub-frame precision on minor events is overfitting annotator noise [PAGE 5].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When ELASTIC's pairwise score falls below 0.5, the match is marked unsynchronized and withheld from downstream models [PAGE 5]. The downstream cost of failing to synchronize is visible in Table 7: unsynchronized data yields next-action prediction accuracy of 0.5796 and pass-success Brier score of 0.1013, whereas ELASTIC-NW raises accuracy to 0.6863 and lowers Brier to 0.0899 [PAGE 9]. A regressed system—one that defaults to unsynchronized snapshots or to a greedy local matcher—re-feeds the GNN with player-ball configurations displaced by several frames, placing defenders and attackers at wrong coordinates relative to the ball.

Counter-trap: ELASTIC-Greedy shares ELASTIC's candidate extraction and scoring but replaces global NW alignment with chronological greedy assignment. Greedy matching propagates early errors to later events, dropping event-start W2 accuracy from 96.5% to 84.1%, with the largest gap on minor events (87.9% vs. 62.3%) [PAGE 7]. The recursive theory of mind here is that a downstream model "believes" the snapshot it receives; if the synchronization layer makes a locally optimal but globally inconsistent choice, the model's counterfactual reasoning about pass options and possession intervals is conditioned on a hallucinated game state.

Clock: The physical clock is the tracking frame grid. At 25 FPS the quantum is 0.04 s [PAGE 2]; the primary metric W2 corresponds to a two-frame, 0.08 s tolerance [PAGE 6]; annotator median ground truth has mean pairwise difference of 0.521 frames (0.0208 s) [PAGE 5]. Because sub-frame event moments are aliased to this grid, the synchronizer cannot resolve actions separated by less than one frame; the "clock" therefore imposes a hard information-theoretic ceiling on temporal resolution that no alignment algorithm can break.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto layer: Any (frame, player) pair with player-ball distance > 3 m or ball height > 4 m is discarded before alignment, because such states cannot represent a physically feasible touch [PAGE 3]. This is a hard feasibility constraint: outside this region the event-candidate score is undefined rather than merely low.

Biomechanical veto layer: The PBD slope is computed over h = 0.2 s with hard clipping bounds at ±7 m/s [PAGE 4]. A positive pre-slope (ball already moving away) penalizes outgoing events; a negative post-slope (ball still approaching) penalizes incoming events [PAGE 4, Eqs. 7–8]. These bounds encode the biomechanical expectation that a touch produces a V-shaped PBD valley; candidates that violate the valley shape are vetoed by low feature scores rather than admitted to the DP table.

Weather/environmental layer: The source text does not model weather, wind, or atmospheric drag explicitly; the closest environmental veto is trajectory-noise-induced inflation of measured player-ball distance, which motivates the 3 m (rather than 1 m) distance threshold [PAGE 6]. Tightening the threshold to 1 m discards legitimate touches whose measured distance is inflated by sensor noise, collapsing total W2 coverage from 98.4% to 94.0% [PAGE 6, Table 3]. Thus the veto boundary is set where measurement noise intersects physical plausibility, not where atmospheric conditions enter.

Adjudication: The hard constraint p_e ∈ P_c (acting player must be in the candidate's player set) overrides all feature scores, setting s(e,c) = 0 regardless of acceleration or slope [PAGE 5]. The final veto is the postprocessing score threshold of 0.5, below which matches are rejected as unsynchronized rather than contaminating downstream analytics [PAGE 5]. These vetoes compose: a candidate must be physically close, aerodynamically plausible, biomechanically consistent with a touch, spatially associated with the correct player, and score above 0.5 after global alignment.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (PBDS ablation on set pieces): Verifiable test—set λ_PBDS = 0 while holding other weights at 0.25 and re-evaluate set-piece outgoing W2 accuracy. Source evidence: Table 4 reports set-piece accuracy falling from 97.9% to 38.7% [PAGE 7]. Prediction: set-piece W2 accuracy drops below 40%, implying >60% of corners, free kicks, and kick-offs would be misaligned beyond the two-frame tolerance in a production pipeline.

Scenario 2 (Distance-threshold tightening): Verifiable test—reduce the player-ball distance feasibility threshold from 3 m to 1 m and re-run candidate extraction. Source evidence: Table 3 shows total W2 coverage falling from 98.4% to 94.0% and end-to-end accuracy from 95.2% to 89.4% [PAGE 6]. Prediction: more than 4% of ground-truth events lose all physically valid candidates, creating unrecoverable synchronization holes regardless of alignment quality.

Scenario 3 (Repeat-penalty removal): Verifiable test—set repeat penalty r = 0 instead of −0.1 and re-run the NW alignment. Source evidence: Table 5 shows total W2 accuracy falling from 95.2% to 94.0%, with the mechanism that r = 0 over-merges consecutive events into a single frame [PAGE 8]. Prediction: temporally coincident one-touch control-pass pairs will be assigned separate frames, inflating mean absolute difference and breaking possession-interval reconstruction for events separated by less than one frame.
</RLVR_COUNTERFACTUAL_VETOES>