---
source: "2026 - Graph-to-Grid (G2G) Continuous-Coordinate Feature Painting for Soccer Pass Surfaces - G nay et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 72
model: deepseek/deepseek-v4.1-flash-1017
words: 8938
---

<NATIVE_REASONING>
The user is asking me to produce a deep analysis of a research paper on Graph-to-Grid (G2G) feature painting for soccer pass surfaces. The document is a machine-converted paper (no equations/tables preserved from PDF). I need to:

1. Follow the STRICT INVARIANTS:
   - No betting lines (spreads, totals, moneylines, odds)
   - No toy equations; formal LaTeX with SI/information/probability units, assumptions, exact singularity/breakdown regimes
   - Cite exact [PAGE N] markers and verbatim quotes when source pages provided
   - >= 1,000 words across exact XML sections
   - <THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit
   - <SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown
   - <RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps
   - <RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock
   - <CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof
   - <RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions

Let me note the page numbers. The source is 39 pages visible (covering pages 1-39 of the 72-page paper). The text includes many page markers. Let me identify key page numbers:

- Page 1: Abstract, Introduction, section 1.1 start
- Page 2: Table 1 (interface effect at a glance), section 1.2, 1.3
- Page 3: Contributions end, Section 2 Related work start
- Page 4: Related work continues
- Page 5: Data, Section 3.1, Fig 1
- Page 6: 3.2 Tracking-grounded endpoints
- Page 7: 3.3 Targets, Eq 1, Eq 2, Section 4 Method
- Page 8: 4.2, 4.3 splatting (Eq 3)
- Page 9: Eq 3 continued, 4.4 relational encoder (Eq 4), 4.5 estimands
- Page 10: Table 2 arms, 4.6, Section 5 protocol
- Page 11: 5.2, 5.3, 5.4 paired inference
- Page 12: sign-flip inference, 5.5 pre-specified studies
- Page 13: pre-specified studies continued, Table 3 studies
- Page 14: Table 3 continued, results start
- Page 15: Results, 6.1 cross-validation, Fig 3
- Page 16: Table 4, 5, 6
- Page 17: Table 7, 6.2 external replication start
- Page 18: external replication, Table 8
- Page 19: Table 9, 6.2 continued
- Page 20: Table 10, 6.3
- Page 21: Table 11, 6.4
- Page 22: Table 12, 6.4.2
- Page 23: Table 13
- Page 24: 6.5 raster controls
- Page 25: Table 14, 6.5 continued
- Page 26: Table 15, 16
- Page 27: 6.6 interface alternatives
- Page 28: Table 17, 18
- Page 29: 6.7 probes
- Page 30: 6.7.1, 6.7.2
- Page 31: 6.8, 6.9, 6.10, 6.11
- Page 32: Fig 5, Limitations start
- Page 33: Limitations continue
- Page 34: Limitations continue, Conclusion start
- Page 35: Conclusion, Statements
- Page 36-39: References

So the source covers pages 1-39 (of the 72 total, but only these are provided). I should cite [PAGE N] where N is the visible page number.

Key verbatim quotes I can cite:
- "Painting improves selection likelihood over the same core fed rasters alone by about a quarter of a nat" [PAGE 1]
- "The full front end improves selection negative log-likelihood (NLL) over the same core by 0.251 nats in eight-fold cross-validation over all 64 World Cup matches, 0.292 nats under per-arm learning-rate selection over five seeds, and 0.239 nats after retraining on seven external German league matches" [PAGE 2]
- "Painting the nine raw node features with no encoder carries three quarters of it" [PAGE 1]
- "the learned encoder and message passing add a smaller, resolved increment" [PAGE 1]
- "Frozen across the provider boundary the likelihood advantage is lost; injected tracking error compresses it." [PAGE 1]
- "These results concern observed-endpoint prediction, not calibrated evaluation of hypothetical passes." [PAGE 1]
- "in 'selection' denotes prediction of the observed endpoint" [PAGE 1]
- "Completion and value are supervised at that endpoint; their values at unchosen locations are model extrapolations, not validated counterfactuals." [PAGE 1]
- "Bilinear scatter-add is established machinery, and its differentiability is inherited." [PAGE 2]
- "The sharpest probe is quantisation: every player and the ball is snapped to the centre of its ≈1 m grid cell, a 105/104 = 1.0096 m by 1.0 m lattice" [PAGE 30]
- "It costs G2G +0.127 nats (5.2446 → 5.3713) and arm D +0.071" [PAGE 30]
- "the G2G family is more noise-sensitive than the raster controls: by 𝜎 = 1 m G2G has lost 1.61 nats of selection NLL against the original's 1.09" [PAGE 30]
- "its selection lead stays positive in every draw at every level of independent noise" [PAGE 33]
- "has compressed to a small fraction of its noise-free size by one metre of per-coordinate error" [PAGE 33-34]
- "The G2G arm opened the test set twice." [PAGE 33]
- "The shipped three-arm comparison is retrospective." [PAGE 33]
- "No calibration-error comparison in any study survives correction." [PAGE 33]
- "No arm beats a constant-zero predictor on EPV MAE" [PAGE 33]
- "The external replication is seven matches from one other provider, with the value heads unscored and an estimated event–frame alignment" [PAGE 34]
- "Its endpoints are 91.2% receiver captures against 0.21% on the World Cup" [PAGE 34]
- G2G params: 700,353 PP/PS, 702,753 PE [PAGE 10, Table 2]
- Arm C: 654,899 PP/PS [PAGE 10]
- Arm D: 684,479 [PAGE 10]
- Arm Draw: 676,499 [PAGE 10]
- Original SoccerMap: 274,251 [PAGE 10]
- Wide SoccerMap: 698,573 [PAGE 10]
- Graph branch marginal cost: 45,454 parameters = 16,654 projector + 28,800 first conv [PAGE 10]
- 6.9% increase over SoccerMap-v2 [PAGE 10]

Now let me structure the formal equations. The paper's key equations:

Equation (1) — Pass value reward:
$$r = \left[1 - \prod_{s \in S_{own}}(1 - x_s)\right] - \left[1 - \prod_{s \in S_{opp}}(1 - x_s)\right] \in [-1, 1]$$

Equation (2) — Combined EPV surface:
$$\hat{V}(k) = \hat{p}(k)\hat{v}_{succ}(k) + (1 - \hat{p}(k))\hat{v}_{miss}(k)$$

Equation (3) — Bilinear splat:
$$S_g[c, y, x] = \sum_{i \in g}\sum_{a,b \in \{0,1\}} w_{ab}(\delta_i, \epsilon_i) \mathbb{1}[x = \bar{u}_i + a]\mathbb{1}[y = \bar{v}_i + b]\, e_i[c]$$
$$w_{ab}(\delta, \epsilon) = \delta^a(1-\delta)^{1-a}\epsilon^b(1-\epsilon)^{1-b}$$

Coordinate mapping:
$$u_i = \text{clip}(W x_i/105 - 1/2, 0, W-1), \quad v_i = \text{clip}(H y_i/68 - 1/2, 0, H-1)$$
with W=104, H=68.

Equation (4) — Graph attention:
$$\alpha_{ij} = \text{softmax}_{j \in \mathcal{N}(i)}\left(\frac{\langle q_i, k_j\rangle}{\sqrt{32}} + b(e_{ij})\right)$$

Other important quantities:
- 7,072 cells (104 × 68), ~1 m cells
- Selection NLL: factor of e^d in probability
- 0.251 nats → factor of about 1.29 (e^0.251 ≈ 1.2854)
- Parameter counts
- Learning rates: PP 10^-4, PS 10^-5, PE 10^-6
- Noise model: N(0, σ²) per component, velocity error amplitude σ√2
- Selection lead compression: +0.52 at σ=0 → +0.090±0.025 at 1m → +0.53 at 4m
- Correlated noise: +0.200±0.013 at 1m (ρ=0.9), +0.032±0.020 at 2m

Now let me think about the "gray-zone audit" — the paper has several acknowledged limitations:
1. Retrospective shipped comparison (controls not externally timestamped before first G2G evaluation) [PAGE 33]
2. G2G opened test set twice (first aborted by integrity failure; discarded cycle was better on completion and EPV, shipped cycle leads only on selection NLL by a few thousandths of a nat) [PAGE 33]
3. Attribution ladder first run post hoc (single-seed form ran after test set opened; two findings withdrawn) [PAGE 33]
4. Replications reuse holdout (don't cure adaptivity; Dwork et al. 2015 holdout reuse) [PAGE 33]
5. Intervals don't cover all variation (one seed per CV fold; match resampling doesn't model recurring teams or overlapping CV training sets) [PAGE 33]
6. Sign-flip test assumes sign-exchangeability [PAGE 33]
7. Multiplicity controlled within each study's family, not across 13 studies [PAGE 33]
8. Tuning removes ~a third of margin [PAGE 33]
9. Calibration unresolved (no calibration-error comparison survives; 2/3 of predictions in top bin) [PAGE 33]
10. Value metric-dependent (no arm beats constant zero on MAE) [PAGE 33]
11. Measurement error sets a floor; G2G more sensitive [PAGE 33-34]
12. Secondary comparisons each confound something [PAGE 34]
13. External study: 7 matches, one provider, 91.2% receiver captures vs 0.21% WC; post-hoc stratification shows external margin concentrated in capture stratum [PAGE 20, 34]
14. Target semantics: selection target is observed next-event, not intent [PAGE 34]
15. Value target is model-generated XGBoost xG [PAGE 34]
16. No blinded human audit [PAGE 34]

Now the "gray-zone audit" in THINK_TRACE should be about these issues — deep multi-hop derivation of what the paper actually establishes vs. what it doesn't.

Let me think about the "cross-layer veto adjudication" — the paper is about soccer pass surfaces. Physical/biomechanical/weather vetoes don't really apply directly, but I can reason about:
- Tracking error as a "physical" veto (provider-dependent error several meters; G2G degrades faster)
- The quantisation probe (cell-snap) as a physical lattice veto
- The label rule (capture vs next-event) as a "ground truth" veto — 91.2% capture on external
- Weather: broadcast tracking quality varies with conditions (not discussed but implied)
- Biomechanics: velocity features zeroed → +1.29 nats; team swap → AUC 0.18

Actually, the "cross-layer veto" section is framed as "Physical/biomechanical/weather veto proof." For a soccer analytics paper, I should interpret this as: what physical/measurement/environmental factors could veto the claimed effect? Tracking error, provider shift, label rule, cell resolution, player-out-of-frame. I can adjudicate each.

Let me now write the sections. I need >= 1,000 words total across the XML sections, with THINK_TRACE >= 400 words.

Let me draft.

<THINK_TRACE> — deep multi-hop derivation & gray-zone audit, >= 400 words.

I'll trace:
1. The claim chain: abstract claim → RQ1 → RQ2 → evidence hierarchy
2. The nats arithmetic: 0.251 nats = factor 1.29 on one cell of 7,072; contrast with null gap (−2.6 nats) → interface effect ~1/10 of distance to null
3. The attribution ladder: 0.186/0.251 = 74.1% raw painting; 0.065 remaining = 25.9%
4. The tuning shrinkage: 0.292 tuned; margin against capacity-matched control from "about half a nat" to "a third"
5. Provider boundary: frozen → +0.079 (loss), retrained → −0.239 (recovered)
6. Noise sensitivity: G2G loses 1.61 nats at σ=1m vs original 1.09; lead compresses to +0.090±0.025; correlated noise non-monotone
7. Gray-zone audits: retrospective shipped, two openings, post-hoc ladder, holdout reuse, seed coverage, calibration unresolved, value metric-dependence, external stratum confounding
8. What survives: raw painting robust, learned increment small/resolved only in large studies, transfer requires retraining

Let me write it fully.

Now let me write all sections carefully with page citations and verbatim quotes.

For <SOURCE_OPERATORS_AND_EQUATIONS>, I need formal LaTeX, units, page citations, breakdown. I'll present:
- Eq (1) value reward with units (signed xG balance, dimensionless in [-1,1])
- Eq (2) EPV surface composition
- Eq (3) bilinear splat with coordinate mapping
- Eq (4) graph attention
- Selection NLL definition and nat conversion
- Noise model
- Parameter counts and marginal cost
- Singularity/breakdown regimes: u_i/v_i clipping at boundary (kinks at cell boundaries — paper says "differentiable in them almost everywhere, with kinks at cell boundaries"), coincident nodes summing, masked nodes zero, upper neighbors clipped.

Let me be precise about the coordinate mapping: 
$$u_i = \text{clip}\left(\frac{W x_i}{105} - \frac{1}{2}, 0, W-1\right), \quad v_i = \text{clip}\left(\frac{H y_i}{68} - \frac{1}{2}, 0, H-1\right)$$
W = 104, H = 68, pitch 105 × 68 m. Cell size ≈ 105/104 ≈ 1.0096 m by 1.0 m. Good.

Splat Eq (3):
$$S_g[c,y,x] = \sum_{i \in g}\sum_{a,b \in \{0,1\}} w_{ab}(\delta_i,\epsilon_i)\,\mathbb{1}[x = \bar{u}_i + a]\,\mathbb{1}[y = \bar{v}_i + b]\,e_i[c]$$

where $(\bar{u}_i, \bar{v}_i) = (\lfloor u_i\rfloor, \lfloor v_i\rfloor)$, $(\delta_i, \epsilon_i) = (u_i - \bar{u}_i, v_i - \bar{v}_i)$.

$$w_{ab}(\delta,\epsilon) = \delta^a (1-\delta)^{1-a}\,\epsilon^b (1-\epsilon)^{1-b}$$

Units: $e_i \in \mathbb{R}^{12}$ dimensionless embedding; $S_g \in \mathbb{R}^{12 \times 68 \times 104}$; weights dimensionless and sum to one per node.

Attention Eq (4):
$$\alpha_{ij} = \text{softmax}_{j\in\mathcal{N}(i)}\left(\frac{\langle q_i, k_j\rangle}{\sqrt{32}} + b(e_{ij})\right)$$
with $\sqrt{32}$ = sqrt of hidden width 32.

Eq (1):
$$r = \left[1 - \prod_{s\in S_{own}}(1 - x_s)\right] - \left[1 - \prod_{s\in S_{opp}}(1 - x_s)\right] \in [-1,1]$$
x_s clipped at 0.999, 15-second windows.

Eq (2):
$$\hat{V}(k) = \hat{p}(k)\hat{v}_{succ}(k) + (1-\hat{p}(k))\hat{v}_{miss}(k)$$

Selection NLL: standard cross-entropy over 7,072-way softmax; Δ in nats → ratio $e^\Delta$. 0.251 nats → 1.286.

Breakdown regimes:
1. Boundary clipping: u_i = 0 or W-1 → weights concentrate; positional resolution sacrificed in outer half-cell strips [PAGE 8]
2. Cell-boundary kinks: non-differentiable at δ=0, ε=0 (measure-zero but affect gradient flow)
3. Coincident nodes: contributions accumulate; weights still sum to one
4. Masked nodes: zero contribution
5. Node count: output scales with node count (permutation-invariant within group, but not normalized by count) — fixed at 22 players + ball
6. Noise: i.i.d. Gaussian per component, velocity error σ√2
7. Quantisation: snap to cell centre, 1.0096 × 1.0 m lattice

For <RETROCAUSAL_GENEALOGY>, historical/scientific lineage & multi-week traps. Lineage:
- SoccerMap (Fernández & Bornn 2021) → EPV (Fernández et al. 2021) → un-xPass (Robberechts et al. 2023) → Overmeer et al. 2025 (U-Net) 
- Outside sport: VoxelNet (Zhou & Tuzel 2018), PointPillars (Lang et al. 2019), PointNet (Qi et al. 2017), Deep Sets (Zaheer et al. 2017), SPLATNet (Su et al. 2018), Lift-Splat-Shoot (Philion & Fidler 2020), GraphCast (Lam et al. 2023), spatial transformers (Jaderberg 2015), soft rasterisers (Kato 2018, Liu 2019), bilateral grid (Chen 2007), softmax splatting (Niklaus & Liu 2020), differentiable surface splatting (Yifan 2019)
- Graph: GCN for soccer (Stöckl 2021), TacticAI (Wang 2024), Rahimian 2026, Hubáček 2019
- Bilinear sampling differentiability
- Multi-week traps: (a) holdout reuse eroding guarantees (Dwork 2015) — 13 studies on same 8 matches; (b) provider boundary — frozen transfer fails; (c) tracking error floor; (d) calibration away from endpoints unestablished; (e) value metric-dependence; (f) replaying the original single-seed ladder post hoc.

For <RECURSIVE_THEORY_OF_MIND>, crisis habit regression vs counter-trap vs clock. This is framed as a modeling-of-modeler exercise. I'll interpret: how would a modeler under pressure regress to habitual moves (bin to raster, add parameters, reach for attention), and what counter-traps does this paper's design set (pre-specified commitments, hash locks, max-T over Holm, raw-painting ablation), and what is the "clock" (the amortization schedule of evidence — 64-fold CV vs 8-match holdout, 5 seeds vs 3). I'll treat "crisis habit regression" as the tendency to reach for familiar expensive machinery when the honest answer is a simpler interface.

For <CROSS_LAYER_VETO_ADJUDICATION>, physical/biomechanical/weather veto proof. I'll adjudicate:
- Physical: tracking error several meters provider-dependent (Crang 2026, Mills 2026); G2G more sensitive (1.61 nats at σ=1m); quantisation +0.127 nats
- Biomechanical: zeroing velocities +1.29 nats; team swap AUC 0.18; ball node drop +0.101 nats; edge permutation +0.0006 nats
- Weather/environmental: broadcast tracking quality, frozen scenes, blackouts, inter-frame gaps (the quality gates in Sec 3.1); provider smoothing has no causal filtering guarantee
- Veto: none of these veto the World Cup claim outright, but they bound external validity; the capture-rule veto on external corpus (91.2% capture) is the sharpest.

For <RLVR_COUNTERFACTUAL_VETOES>, 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards. I need to construct 3 counterfactual scenarios where the paper's claims would be falsified/verified under a reward structure that can be checked. Let me construct:

1. Veto scenario: Re-run the 8-fold CV with the raw-painting arm's node features permuted (shuffle raw features across players within group). Prediction: selection NLL gap Draw−C collapses to near zero (< 0.02 nats) if the gain is truly the write of own features at own position, not just added channels. This is verifiable from locked data.

2. Veto scenario: Snap to cell centres at training time (not inference) and retrain both Draw and C. Prediction: the Draw−C gap compresses toward the Dnearest−D gap (~+0.084 nats in the wrong direction, i.e., Draw would need sub-cell to keep the gap). Actually the paper already has Dnearest−D = +0.084 (nearest loses). A training-time quantisation counterfactual: Draw trained with snapped coords should lose most of its gap. Verifiable.

3. Veto scenario: Re-score the external corpus with a next-event-only endpoint rule (drop capture-only rows) and retrain. Prediction from the paper's post-hoc stratification (Sec 6.2): G2G−C turns from −0.266 on capture to +0.102 on next-event, so the external margin would shrink to near zero or reverse. Verifiable.

Alternatively:
- Veto 3: Provider-boundary frozen transfer with a third provider. Prediction: frozen ordering loss replicates; retrained ordering recovers. 

Let me pick 3 strongest, with explicit predictions and verifiability.

Scenario 1: Feature-permutation ablation on Draw. If the interface gain is "own features at own position," permuting features across nodes within group should destroy it. Prediction: Δ(Draw_perm − C) ∈ [−0.03, +0.03] nats, i.e., within noise of null, vs. the observed −0.186. Verifiable: retrain 8 folds, locked scoring.

Scenario 2: Training-time cell quantisation of the graph inputs for both painted arms and both raster arms. If sub-cell placement is the mechanism, training-time quantisation should collapse Draw−C to roughly the Dnearest−D territory. Prediction: Draw_quant − C ∈ [−0.02, +0.05] rather than −0.186. Verifiable: published quantisation already gives inference-time +0.127 for G2G; training-time should be larger.

Scenario 3: Endpoint-rule swap on external corpus. Prediction: restricting to next-event rows (282 rows) reverses the sign (+0.102 observed post hoc), so a next-event-only external corpus would not show the −0.239 G2G−C margin; it would be near zero or positive. Verifiable from existing locked rows, though small N.

I think these are good.

Let me now also make sure I don't violate invariant 1 (no betting lines). I won't mention spreads/totals/moneylines/odds.

Invariant 2: no toy equations, formal LaTeX, SI/information/probability units, assumptions, exact singularity/breakdown regimes, cite exact [PAGE N] and verbatim quotes. I'll do this.

Let me count words as I write. Need >= 1,000 total. THINK_TRACE >= 400.

Let me write now.

---

Draft <THINK_TRACE>:

I'll trace the evidential chain from the abstract's claim to the specific locked comparisons, then audit the gray zones.

Multi-hop derivation:

Hop 1 — The claim. "Painting improves selection likelihood over the same core fed rasters alone by about a quarter of a nat" [PAGE 1]. The unit is nats of negative log-likelihood on a 7,072-way softmax (104 × 68 ≈ 1 m cells) [PAGE 7]. A reduction of d nats is a multiplicative factor e^d on the geometric-mean probability assigned to the observed endpoint [PAGE 15]. So 0.251 nats = e^0.251 ≈ 1.286, i.e., "some 29% more probability on the observed destination than arm C does" [PAGE 15].

Hop 2 — The comparison core. Arm C is SoccerMap-v2, 654,899 PP/PS parameters; G2G is 700,353, a 45,454-parameter marginal (16,654 projector + 28,800 first-conv widening), 6.9% over C [PAGE 10]. The wide control is 698,573, within 0.25% of G2G [PAGE 10] — so the parameter-matched comparison rules out pure capacity. The wide→C→D→G2G ladder isolates core, interface, message passing in that order [PAGE 10].

Hop 3 — The three primary checks. (a) 8-fold CV over 64 matches: −0.251 [−0.263, −0.239], 64/64 [PAGE 16, Table 6]. (b) Per-arm LR tuning, 5 seeds, cap 200: −0.292 [−0.338, −0.245], 8/8 [PAGE 21, Table 10]. (c) External retraining on 7 Bundesliga/2. Bundesliga matches: −0.239 [−0.285, −0.197], 7/7 [PAGE 19, Table 8]. Tuning shrinks the matched-budget margin "from about half a nat to a third" [PAGE 21], consistent with Supplement S5.5 showing the shared recipe favoured G2G on validation [PAGE 21].

Hop 4 — The attribution. Draw (raw 9 node features, no encoder, 676,499 params) gets −0.186 [−0.199, −0.172] in CV [PAGE 17, Table 7] and −0.225 [−0.256, −0.195] tuned [PAGE 22, Table 11]; the learned increment G2G−Draw is −0.065 [−0.078, −0.052] CV and −0.067 [−0.088, −0.045] tuned. So 0.186/0.251 = 74.1% raw painting, ~26% learned. External retraining: Draw−C −0.178, G2G−Draw −0.061 [PAGE 20, Table 9], same three-quarter share. The holdout Study 1 (3 seeds) cannot separate raw from learned (raw−learned +0.005 [−0.049, +0.064] [PAGE 24, Table 13]) — the CV/tuned studies are what resolve it.

Hop 5 — Mechanism probes. Inference-time quantisation (snap to cell centres, 1.0096 × 1.0 m) costs G2G +0.127 nats, D +0.071, raster arms ≤ 0.0012 [PAGE 30] — only splatting arms are lattice-sensitive. Nearest-cell painting costs D +0.084 and G2G +0.093 nats [PAGE 24, Table 13] — roughly half the package's −0.1705. Sub-cell offset raster recovers only a quarter of the gap (Coffsets−C −0.044 [PAGE 25, Table 14]); a 4× finer raster doesn't help selection and worsens localisation (Chalf−C −0.047 [−0.106, +0.001], argmax +0.93 m [PAGE 26, Table 15]). Attention painter is worse than no painting (Dattn−C +0.235 tuned [PAGE 28, Table 18]); raster-free SetOnly is worse than the raster core (SetOnly−C +0.219 tuned [PAGE 28, Table 18]).

Hop 6 — Transfer and noise. Frozen across provider: G2G−C +0.079 [+0.036, +0.121] (likelihood lost, localisation kept) [PAGE 18, Table 8]; Draw−C +0.030 [−0.021, +0.084] (null) [PAGE 19, Table 9]. Under i.i.d. Gaussian noise σ=1 m: G2G loses 1.61 nats vs original 1.09 [PAGE 30]; lead compresses from +0.52 to +0.090 ± 0.025 [PAGE 30]. Correlated ρ=0.9: +0.200 ± 0.013 at 1 m but +0.032 ± 0.020 at 2 m, one of ten draws negative against wide [PAGE 30].

Gray-zone audit:
- Shipped comparison is retrospective; controls not externally timestamped before first G2G evaluation [PAGE 33].
- G2G opened test set twice; discarded cycle was better on completion/EPV, shipped cycle leads only on selection NLL by a few thousandths of a nat [PAGE 33].
- Attribution ladder first run post hoc; two single-seed findings withdrawn [PAGE 33].
- Replications reuse holdout; Dwork et al. 2015 holdout-reuse erosion not cured [PAGE 33].
- One seed per CV fold → no training-seed uncertainty in CV intervals [PAGE 33].
- Sign-flip assumes sign-exchangeability under joint null [PAGE 33].
- Multiplicity controlled within study, not across the 13-study sequence [PAGE 33].
- Calibration unresolved; no calibration-error comparison survives; ~2/3 of predictions in top bin [PAGE 33].
- Value: no arm beats constant-zero on MAE [PAGE 33]; wide control wins sign metrics [PAGE 31, 33].
- External: 7 matches, one provider, 91.2% capture vs 0.21% WC; post-hoc stratum shows margin concentrated in capture (G2G−C −0.266 capture vs +0.102 next-event) [PAGE 20].
- Target is observed next-event, not intent [PAGE 34].
- No blinded human audit [PAGE 34].
- Provider smoothing has no causal filtering guarantee [PAGE 34].

What survives: raw painting is robust across cores (original splat −0.295 [PAGE 25, Table 14]; U-Net Uraw−Uraster −0.242 [PAGE 26, Table 16]), the learned increment is real but small and only resolved in large studies, and frozen transfer requires retraining.

That's a good THINK_TRACE, well over 400 words.

Now let me write the final response.

I should be careful with the "verbatim quotes" — I'll include short exact quotes in quotation marks with page numbers.

Let me count approximate words for THINK_TRACE... I'll aim for ~700-800 words there.

Let me write the whole thing now.

For the cross-layer veto, I want to structure as an adjudication table-ish prose:
- Veto 1 (physical/measurement): tracking error. Verdict: does not veto in-distribution claim; compresses but preserves sign under independent noise; correlated noise non-monotone; bounds deployment.
- Veto 2 (biomechanical/feature): velocity zeroing +1.29 nats; team swap AUC 0.18; ball drop +0.101; edge perm +0.0006. Verdict: the surface depends on identity and velocity, not explicit edges; this is a feature-dependence audit, not a veto of the interface.
- Veto 3 (environmental/provider): frozen transfer fails on likelihood (+0.079), recovers only with retraining (−0.239). Verdict: provider is a hard veto on zero-shot likelihood, not on retrained ordering.
- Veto 4 (label-rule/environmental): external corpus 91.2% capture; margin concentrated there. Verdict: conditional veto on the external replication; WC corpus (98.9% next-event) is the counter-evidence.
- Veto 5 (resolution/lattice): quantisation +0.127; finer raster no help. Verdict: the lattice is not a substitute; supports rather than vetoes.
- Veto 6 (weather/broadcast quality): quality gates (blackouts, frozen scenes, inter-frame gaps, impossible speeds) [PAGE 6]. Verdict: admission is outcome-blind by rule but not in effect (completion 83.8/85.3/81.9%) [PAGE 6].

Good.

Now write the final answer with all sections. Let me aim for clarity and precision, keep it dense but readable.

One more check on units: NLL in nats (natural log). Probability mass dimensionless. Argmax distance in metres. Cell size ~1.0096 m × 1.0 m. Pitch 105 × 68 m. 7,072 cells. Latency in ms. Parameter counts dimensionless.

I'll now produce the response.
</NATIVE_REASONING>

<THINK_TRACE>
The evidential chain runs from a compressed abstract claim to a nested set of locked, pre-specified comparisons, and every hop must be audited because the paper's own limitations section supplies most of the audit.

Hop 1 — the claim and its unit. The headline is that painting improves selection likelihood "by about a quarter of a nat" over the same core fed rasters alone [PAGE 1]. The unit is nats of negative log-likelihood on a 7,072-way softmax over a 104 × 68 grid of ≈1 m cells [PAGE 7]. A reduction of d nats is a factor e^d on the geometric-mean probability assigned to the observed endpoint, so 0.251 nats = e^0.251 ≈ 1.286, which the paper glosses as "some 29% more probability on the observed destination than arm C does" [PAGE 15]. This is a relative statement about one cell of a 7,072-cell surface, not a downstream decision.

Hop 2 — the comparison core and the parameter confound. Arm C is SoccerMap-v2 at 654,899 PP/PS parameters; G2G is 700,353, a marginal 45,454 parameters (16,654 projector + 28,800 first-convolution widening), 6.9% over C and 6.5% of the final model [PAGE 10]. The wide control is 698,573, within 0.25% of G2G, so "no advantage of G2G can be attributed to parameter count alone" [PAGE 10]. The ladder wide → C → D → G2G isolates core, interface, and message passing in that order.

Hop 3 — three primary checks, not independent. (a) Eight-fold CV over all 64 matches: G2G−C = −0.251 [−0.263, −0.239], ahead 64/64 [PAGE 16, Table 6]. (b) Per-arm learning-rate selection, five seeds, cap 200: −0.292 [−0.338, −0.245], 8/8 [PAGE 21, Table 10]. (c) External retraining on seven Bundesliga/2. Bundesliga matches: −0.239 [−0.285, −0.197], 7/7 [PAGE 19, Table 8]. Tuning shrinks the matched-budget selection margin "from about half a nat to a third" [PAGE 21], consistent with Supplement S5.5 showing the shared recipe had favoured G2G on validation — so the tuned number is the one that survives the objection, and the CV number the one that survives the small-sample objection.

Hop 4 — attribution. Draw (nine raw node features, no encoder, 676,499 parameters) earns −0.186 [−0.199, −0.172] in CV [PAGE 17, Table 7] and −0.225 [−0.256, −0.195] tuned [PAGE 22, Table 11]; the learned increment G2G−Draw is −0.065 [−0.078, −0.052] CV and −0.067 [−0.088, −0.045] tuned. So 0.186/0.251 = 74.1% raw painting, ~26% learned content. The external corpus reproduces the share: Draw−C −0.178 and G2G−Draw −0.061 [PAGE 20, Table 9]. Crucially, the three-seed holdout Study 1 cannot separate raw from learned (raw−learned +0.005 [−0.049, +0.064] [PAGE 24, Table 13]) — the larger studies are what resolve it, and the holdout's failure to reject is explicitly "not evidence of equivalence" [PAGE 24].

Hop 5 — mechanism probes. Inference-time quantisation to cell centres (a 105/104 = 1.0096 m by 1.0 m lattice) costs G2G +0.127 nats and D +0.071, while "every raster-only arm moves by at most 0.0012 nats" [PAGE 30] — only splatting arms are lattice-sensitive. Nearest-cell painting costs D +0.084 and G2G +0.093 nats [PAGE 24, Table 13], roughly half the package's −0.1705. A sub-cell offset raster recovers only a quarter of the gap (Coffsets−C −0.044 [PAGE 25, Table 14]); a 4× finer raster shows no resolved selection gain and worsens localisation (Chalf−C −0.047 [−0.106, +0.001], argmax +0.93 m [PAGE 26, Table 15]). A learned attention painter is worse than no painting tuned (Dattn−C +0.235 [PAGE 28, Table 18]); a raster-free set decoder is worse than the raster core (SetOnly−C +0.219 tuned [PAGE 28, Table 18]).

Hop 6 — transfer and noise. Frozen across the provider boundary, G2G−C = +0.079 [+0.036, +0.121]: likelihood lost, localisation kept [PAGE 18, Table 8]; Draw−C = +0.030 [−0.021, +0.084], a null [PAGE 19, Table 9]. Under i.i.d. Gaussian per-component noise at σ = 1 m, G2G has lost 1.61 nats against the original control's 1.09 [PAGE 30]; its lead compresses from +0.52 to +0.090 ± 0.025 [PAGE 30], and under ρ = 0.9 correlated noise the curve is non-monotone (+0.200 ± 0.013 at 1 m, +0.032 ± 0.020 at 2 m, one of ten draws negative against wide).

Gray-zone audit. The shipped three-arm comparison is retrospective: "the controls were not externally timestamped before the first G2G evaluation" [PAGE 33]. The G2G arm opened the test set twice; the first was aborted by an integrity failure, and the discarded cycle was the better draw on completion and EPV, the shipped cycle leading "only on calibrated selection NLL, by a few thousandths of a nat against control gaps of half a nat or more" [PAGE 33] — selection toward a favourable draw is implausible but not excluded. The attribution ladder was first run post hoc; two single-seed findings were withdrawn [PAGE 33]. The pre-specified replications reuse the same eight-match holdout and therefore do not cure adaptivity in the Dwork et al. (2015) sense [PAGE 33]. One seed per CV fold means the CV intervals do not estimate training-seed uncertainty [PAGE 33]. The sign-flip test assumes sign-exchangeability under the joint null [PAGE 33]. Multiplicity is controlled within each study's family, not across the 13-study adaptive sequence [PAGE 33]. Calibration is unresolved: no calibration-error comparison in any study survives correction, and about two-thirds of every arm's calibrated completion predictions fall in the single top bin [PAGE 33]. Value is metric-dependent: "no arm beats constant zero on MAE" [PAGE 33], and the wide control exceeds G2G on imbalance-aware sign metrics [PAGE 31]. The external study is seven matches from one provider with 91.2% receiver-capture endpoints against 0.21% on the World Cup, and a post-hoc stratification shows G2G−C at −0.266 on the capture stratum but +0.102 on the 282 next-event rows [PAGE 20]. The targets are observed next-event endpoints, not passer intent, and no blinded human audit exists [PAGE 34].

What survives: the write pays on three cores (original splat −0.295 [PAGE 25, Table 14]; U-Net Uraw−Uraster −0.242 [PAGE 26, Table 16]); the learned increment is real but small and resolved only where N is large; zero-shot likelihood transfer fails and retraining restores it; and the recomputable core of the claim is raw bilinear painting of a player's own features at that player's continuous position.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All formal objects below are transcribed from the machine conversion; the original PDF should be consulted for typeset equations, tables and figures. Units: probabilities dimensionless on [0,1]; NLL in nats (natural log); positions in metres; cell indices dimensionless; latencies in milliseconds; parameter counts dimensionless.

**Target construction.** The pass-value reward is a signed 15-second expected-goal balance over shots by each team within 15 s of the pass, with per-shot xG x_s clipped at 0.999 [PAGE 7]:

$$r = \left[1-\prod_{s\in S_{\mathrm{own}}}(1-x_s)\right] - \left[1-\prod_{s\in S_{\mathrm{opp}}}(1-x_s)\right]\in[-1,1] \qquad (1)$$

The combined EPV surface at cell k is the outcome-gated mixture [PAGE 7]:

$$\hat V(k)=\hat p(k)\,\hat v_{\mathrm{succ}}(k)+\bigl(1-\hat p(k)\bigr)\,\hat v_{\mathrm{miss}}(k) \qquad (2)$$

with $\hat v = 2\sigma(z)-1$ mapping the sigmoid of each outcome-conditioned head back onto the signed [−1, 1] scale. Everything is supervised at the single observed endpoint cell $k^\ast\in\{1,\dots,7072\}$; PP is binary cross-entropy at $k^\ast$, PS is a 7,072-way softmax with $k^\ast$ as class target, PE-succ and PE-miss regress $\tilde r=(r+1)/2$ under MSE at $k^\ast$ [PAGE 7].

**Grid geometry.** Pitch is 105 × 68 m mapped to W = 104, H = 68 cells, ≈1 m cells, 7,072 cells [PAGE 7]. Cell-centre coordinates of node i at physical position $(x_i,y_i)$ are [PAGE 8–9]:

$$u_i=\operatorname{clip}\!\left(\frac{W x_i}{105}-\tfrac12,\,0,\,W-1\right),\qquad v_i=\operatorname{clip}\!\left(\frac{H y_i}{68}-\tfrac12,\,0,\,H-1\right)$$

with $(\bar u_i,\bar v_i)=(\lfloor u_i\rfloor,\lfloor v_i\rfloor)$ and sub-cell fractions $(\delta_i,\epsilon_i)=(u_i-\bar u_i,\,v_i-\bar v_i)$. The physical cell size is 105/104 ≈ 1.0096 m in x and 1.0 m in y; the quantisation probe targets exactly this lattice [PAGE 30].

**The splat operator.** For each of three groups $g\in\{\text{attackers},\text{defenders},\text{ball}\}$ the painted channel block $S_g\in\mathbb R^{12\times 68\times 104}$ is [PAGE 8, Eq. (3)]:

$$S_g[c,y,x]=\sum_{i\in g}\ \sum_{a,b\in\{0,1\}} w_{ab}(\delta_i,\epsilon_i)\,\mathbb 1[x=\bar u_i+a]\,\mathbb 1[y=\bar v_i+b]\,e_i[c] \qquad (3)$$

$$w_{ab}(\delta,\epsilon)=\delta^{a}(1-\delta)^{1-a}\,\epsilon^{b}(1-\epsilon)^{1-b}$$

This is bilinear weights over the four surrounding cell centres, accumulated by scatter-add, 3 × 12 = 36 channels in all [PAGE 9]. The operator is linear in the embeddings $e_i\in\mathbb R^{12}$; its Jacobian with respect to $e_i$ is the weight pattern itself, so endpoint supervision backpropagates through the grid into whatever network produced $e_i$ [PAGE 9]. With a per-node MLP as the producing network, the front end is arm D; with the nine raw node features in place of the embedding, it is Draw, which fits no front-end parameter [PAGE 9]. Rewards in Eq. (1) are dimensionless; the splat weights are dimensionless and sum to one per node; the channels carry the units of the embedding (formally dimensionless).

**The relational encoder.** Snapshot becomes a fully connected graph over up to 23 nodes with eight directed edge features of pairwise geometry; two residual message-passing blocks of hidden width 32 follow the Battaglia et al. (2018) formalism [PAGE 9]. Attention logits are scaled dot-product content similarity plus an edge-geometry MLP bias $b$ [PAGE 9, Eq. (4)]:

$$\alpha_{ij}=\operatorname*{softmax}_{j\in\mathcal N(i)}\!\left(\frac{\langle q_i,k_j\rangle}{\sqrt{32}}+b(e_{ij})\right) \qquad (4)$$

Messages $m_{ij}=\mathrm{MLP}_m([h_j;e_{ij}])$ aggregate as $a_i=\sum_j\alpha_{ij}m_{ij}$ under a residual layer-normed update; a linear layer emits the 12-dimensional embedding per node that the splat paints [PAGE 9]. The √32 is the square root of the hidden width.

**Assumptions and exact breakdown / singularity regimes.**

1. *Boundary clipping.* $u_i$ or $v_i$ saturates at 0 or W−1 for positions in the outer half-cell strips; "the upper neighbours are clipped to the last valid indices" and "clipping sacrifices positional resolution in the outer half-cell strips" [PAGE 8]. The weights still sum to one and coincident boundary contributions accumulate [PAGE 8].

2. *Cell-boundary kinks.* "Positions are inputs here, and the map is differentiable in them almost everywhere, with kinks at cell boundaries" [PAGE 9]. The map is non-smooth where δ or ε crosses 0/1; gradient flow through positions is piecewise linear.

3. *Coincident nodes.* When two nodes of one group fall in the same cell, contributions add rather than average; the operator is permutation-invariant within a group and its output scales with the node count (fixed here at 22 players plus the ball, up to players out of frame) [PAGE 9]. Masked nodes contribute zero.

4. *Feature-dependence regime.* Permuting edge features moves selection NLL by +0.0006 nats; dropping the ball node costs +0.101 nats; zeroing velocities costs +1.29 nats; swapping team labels drives completion AUC to 0.18, "below chance" [PAGE 30]. The surface is dominated by team identity and velocity, almost not at all by the explicit edge channel.

5. *Lattice-sensitivity regime.* Inference-time cell-centre snapping costs G2G +0.127 nats (5.2446 → 5.3713) and arm D +0.071, removing 0.0247 and 0.0186 of probability mass within 5 m, while every raster-only arm moves by ≤0.0012 nats [PAGE 30]. Only splatting arms are lattice-sensitive.

6. *Noise regime.* The perturbation is i.i.d. per-frame Gaussian, $\mathcal N(0,\sigma^2)$ per position component, with an independent velocity error of amplitude $\sigma\sqrt2$ (the amount a one-second finite difference of two independently perturbed frames carries); a temporally correlated AR(1) variant has lag-one correlation 0.9 or 0.5 [PAGE 30]. The $\sigma$ is additional per-coordinate error added to measurements that already carry unknown error, and targets are held fixed; it cannot be converted into expected advantage at a reported provider RMSE [PAGE 33–34].

7. *Selection NLL scaling.* $\Delta$ nats on a 7,072-way softmax is the geometric-mean log-odds shift on the observed cell; $e^{\Delta}$ is the multiplicative probability ratio (e^0.251 ≈ 1.286, "some 29% more probability" [PAGE 15]).

**Compute accounting (post-hoc audited).** At batch size one, arm C is 2.800 ms per forward pass, Draw 4.127 ms, G2G 6.559 ms; amortised over batch 32 they cost 0.087, 0.128, 0.201 ms per pass [PAGE 31]. The counted-FLOP advantage over the wide control does not translate into lower measured latency "because FLOP counting omits some scatter and indexing work" [PAGE 31].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage splits into three strands, and the paper's contribution is defined by what sits at their intersection.

*Soccer strand.* SoccerMap (Fernández and Bornn, 2021) established the three-scale fully convolutional surface trained by single-pixel supervision and is the architectural ancestor and control [PAGE 4, PAGE 10]. The EPV framework of Fernández et al. (2021) supplies the completion/selection/value decomposition the three heads instantiate [PAGE 4, PAGE 7]. Later work varies the design: Overmeer et al. (2025) introduce a U-Net-inspired architecture with three-level encoder and attention-gated skips plus a risk/reward split and expert-paired benchmark; the paper's SoccerMap-v2 modernises every block with residual GroupNorm/GELU, squeeze-and-excitation, dilated bottleneck and a top-down pyramid path [PAGE 7], and Study 13 reproduces the interface effect on a canonical three-level 2-D U-Net rather than on Overmeer's system [PAGE 26, Table 16]. Robberechts et al. (2023) reuse SoccerMap-style components for creativity scoring; Pei et al. (2024) feed two seconds of tracking coordinates to a transformer with separate cross-entropy along each pitch axis; Spearman et al. (2017) and Spearman (2018) specify pass probability and pitch control from continuous positions and velocities without a neural network [PAGE 4]. None of them paints learned per-player features at continuous coordinates for a CNN to read — the cell this paper occupies.

*Graph strand.* Stöckl et al. (2021) apply graph convolution to expected receiver/pass/threat; Rahimian et al. (2026) use temporal graph networks for reception against defensive structure; Hubáček et al. (2019) use pairwise spatial relations; TacticAI (Wang et al., 2024) applies geometric deep learning to corner kicks with graph-level and per-player predictions [PAGE 4]. All emit distributions over players or events rather than training a per-cell loss.

*Entity-to-grid strand (outside sport).* VoxelNet (Zhou and Tuzel, 2018) and PointPillars (Lang et al., 2019) encode LiDAR points with a per-point PointNet (Qi et al., 2017) — the pooled-set construction Deep Sets (Zaheer et al., 2017) formalises — and scatter into voxels or pillars; Lift-Splat-Shoot (Philion and Fidler, 2020) assigns every point to its nearest pillar before sum pooling, "so sub-cell position is discarded at the write" [PAGE 5]; SPLATNet (Su et al., 2018) distributes each point over surrounding lattice vertices with barycentric weights [PAGE 4–5]. GraphCast (Lam et al., 2023) passes messages between a latitude–longitude grid and a mesh graph, "a learned transfer between the two representations where ours is a fixed write at measured coordinates" [PAGE 5]. Differentiable bilinear sampling was established by spatial transformer networks (Jaderberg et al., 2015); soft rasterisers (Kato et al., 2018; Liu et al., 2019) do the transpose direction; the bilateral grid (Chen et al., 2007) and softmax splatting (Niklaus and Liu, 2020) and differentiable surface splatting (Yifan et al., 2019) already use fractional-weight splatting [PAGE 5]. The paper is explicit that "the nearest-versus-interpolated question has been raised inside the pillar literature in the opposite, gather direction (Wang et al., 2020)" [PAGE 5] — i.e., the operator is old; its measurement in this domain is new. The "G2G" label itself is disclaimed: "Graph-to-Grid is our name for the family of models studied here, not an established term, and the words are already in use elsewhere" — Lyu et al. (2023) for laying graphs out on a 2-D grid, Jin and Li (2023) for recoding physiological graph features as a 2-D array, both for CNNs [PAGE 5].

*Multi-week traps.* Four are load-bearing. (i) *Holdout reuse.* Dwork et al. (2015) formalise how sequential holdout reuse erodes guarantees; the paper admits "no reusable-holdout mechanism of the kind Dwork et al. (2015) develop was used" [PAGE 33]. Thirteen studies on the same eight matches cannot be read prospectively across the sequence. (ii) *Provider shift.* Broadcast tracking carries provider-dependent position error reaching several metres (Crang et al., 2026; Mills et al., 2026) [PAGE 5, PAGE 33]; frozen transfer loses the likelihood advantage (+0.079 [PAGE 18, Table 8]) and only retraining restores it (−0.239 [PAGE 19, Table 8]) — a lesson that any deployment on a new provider requires refit, not the shipped checkpoint. (iii) *Target semantics.* The selection target is the observed next-event endpoint, not the passer's intent; for incomplete passes the intended target is unobserved (Robberechts et al., 2023; Anzer and Bauer, 2022) [PAGE 34]; the value target is a model-generated XGBoost xG fitted on StatsBomb open data, carrying estimation error of the kind van Arem et al. (2026) quantify [PAGE 34]. (iv) *Calibration drift away from endpoints.* Since every head is supervised at one cell, surfaces elsewhere are network extrapolations, and "calibration away from them is not established" [PAGE 9–10, PAGE 33].

The retrocausal reading is that the paper's real ancestor is not any soccer model but the pillar/voxel splat family — and its contribution is to price, on a single core and a single corpus, what that family's established operator is worth when the entities are players whose own features and sub-cell position carry the signal.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Framed as a model of the modelling community under evidential pressure: what does a team reach for when a reviewer presses, and what counter-traps does the paper's protocol set?

*Crisis habit regression.* Under competitive pressure the habitual moves in dense-prediction soccer are (a) raise capacity — thicken the raster core, widen the channel counts, add a second stream; (b) add attention — replace the fixed write with a learned kernel so the architecture can "discover" the locality; (c) raise resolution — move to 0.5 m cells to "recover" the position that binning discards; (d) escalate the encoder — stack message passing until the per-player representation is rich enough to "explain" the effect. Each of these moves is a regression to a familiar and publishable apparatus, and each is directly tested in this paper and found insufficient. Widening the raster core to within 0.6% of G2G's parameter count moves selection NLL by "about a hundredth of a nat… a null contrast" [PAGE 24]. A learned attention painter tuned at its own learning rate is +0.235 nats *worse than no painting at all* against tuned arm C, and +0.527 behind tuned G2G [PAGE 28, Table 18]; "the painter has to learn the locality that the splat has by construction, and at this recipe it does not" [PAGE 27]. A 4× finer raster produces no resolved selection gain and lands its argmax nearly a metre farther (Chalf−C +0.93 m [PAGE 26, Table 15]) — "given four times as many cells to put its mass in, a raster core spreads it" [PAGE 26]. And a raster-free set decoder tuned and converged remains "about half a nat behind tuned G2G and a fifth of a nat behind tuned arm C… with the same node features, the same parameter count and its own learning rate" [PAGE 29]. The regressions are priced, not merely argued against.

*Counter-traps.* The paper sets four. First, *the capacity trap*: the wide control exists precisely so that no G2G advantage can be attributed to parameter count [PAGE 10], and a parameter-matched raster arm (Cmatched) is included in Study 3 [PAGE 24, Table 13]. Second, *the core trap*: the interface is reproduced on the original SoccerMap (originalsplat − original = −0.295 [PAGE 25, Table 14]) and on a canonical U-Net (Uraw − Uraster = −0.242 [PAGE 26, Table 16]) so the effect is not tied to SoccerMap-v2. Third, *the recipe trap*: the tuned, converged five-seed comparison removes the shared-recipe advantage and still leaves −0.292 nats [PAGE 21, Table 10], with every evaluated head early-stopped inside the 200-epoch cap, so the cap is not binding. Fourth, *the selection trap*: the pre-specified commitments are hashed before any run of each study, the checkpoints are locked before any test opening, and the analysis engine refuses to run under code drift [PAGE 12]; Study 12's two parts have separate commitments signed before any run of each part [PAGE 13].

*The clock.* The evidence is stratified by amortisation schedule. The eight-match holdout is the shortest clock and the one on which the smallest effects cannot be resolved: in Study 1 the message-passing increment is "−0.0515 nats… an estimate whose nominal interval excludes zero but whose per-seed spread is as large as the effect" [PAGE 22], and raw-feature vs learned embedding is a null with an interval "as wide as the learned increment that the cross-validation resolves" [PAGE 24]. The 64-match CV and the five-seed tuned comparison are the longer clock, and there the learned increment resolves (−0.065 and −0.067 [PAGE 17, 22]). The seven-match external retraining is a third clock at a different provider, where retraining restores the ordering and zero-shot does not [PAGE 18–19]. A model of the reader's temptation is therefore: read the holdout numbers as if they were the long-clock numbers, and over-claim the learned content; the paper's pre-specified structure is what forbids that move. The reciprocal temptation is to read the 0.251 nats as a property of the *operator* rather than of the *interface* — and the attribution ladder, with raw painting at three quarters of the gain, is the counter-trap.

*What the recursive model predicts about the next study.* Given the un-resolved items (frozen transfer, capture-rule confounding, calibration), the natural next move under pressure — add more attention, add more resolution, add more parameters — is exactly the move the existing evidence predicts will fail. The predicted successful next move is the boring one: raw bilinear painting on a fixed provider, with a next-event-only endpoint rule on the external corpus and an independent blinded endpoint audit.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Each layer is a candidate veto on the claim; the verdict is stated with the exact evidence and the residual exposure.

*Layer 1 — physical measurement (tracking error).* Broadcast-derived positions carry provider-dependent error reaching several metres (Crang et al., 2026; Mills et al., 2026) [PAGE 5, PAGE 33]. Under i.i.d. Gaussian per-component perturbation at σ = 1 m, G2G has lost 1.61 nats of selection NLL against the original control's 1.09 [PAGE 30]; its lead over the nearest control compresses from +0.52 nats at σ = 0 to +0.090 ± 0.025 at 1 m (worst draw +0.050) before re-widening to +0.53 at 4 m [PAGE 30]. Under correlated AR(1) error at ρ = 0.9 the curve is non-monotone (+0.200 ± 0.013 at 1 m, +0.032 ± 0.020 at 2 m, one of ten draws negative against the wide control) [PAGE 30]. On completion from σ = 2 m the ordering is within draw-to-draw noise (−0.007 ± 0.008) and arm D beats G2G in 10 of 10 draws (−0.0112 ± 0.0029) [PAGE 30]. **Verdict:** the sign of the selection advantage survives every draw at every level of independent noise and against arm C at every level and correlation [PAGE 30, PAGE 33], so the physical layer does not veto the in-distribution claim; it does bound deployment at a provider whose extra per-coordinate error approaches one metre, and it makes the completion branch non-separating. The paper is explicit that "these experiments measure sensitivity to the specified extra noise, not recovery of true player positions" and cannot be converted into an expected advantage at a reported RMSE [PAGE 34].

*Layer 2 — biomechanical / feature-content.* Knockouts on the frozen shipped checkpoints: permuting the explicit pairwise edge features changes selection NLL by +0.0006 nats ("the shipped model draws almost nothing from the explicit pairwise edge channel at test time" [PAGE 30]); dropping the ball node costs +0.101 nats; zeroing velocities costs +1.29 nats; swapping team labels drives completion AUC to 0.18, below chance [PAGE 30]. **Verdict:** the surface is dominated by team identity and velocity; the interface's value is not in the edge channel, and the probe is consistent with the small message-passing increment (−0.042 nats under the nearest decoder [PAGE 24, Table 13]). This is a feature-dependence audit, not a veto — but it rules out an explanation of the gain as "graph relational content."

*Layer 3 — environmental / provider shift.* Frozen across the boundary from PFF FC World Cup to IDSSE Bundesliga, G2G is level with both SoccerMap controls and *behind arm C in every one of the seven matches* on selection NLL (+0.079 [+0.036, +0.121], 0/7, adjusted p = 0.016 [PAGE 18, Table 8]); localisation is kept (mass < 5 m +0.007 [PAGE 18]). The raw-feature painter is numerically ahead of G2G in the frozen probe (+0.048 [+0.023, +0.070], adjusted p = 0.062 [PAGE 19, Table 9]) but the contrast does not clear the study's adjusted max-T threshold. **Verdict:** the provider boundary is a hardening veto on zero-shot likelihood transfer; it is not a veto on the retrained ordering, which returns (−0.239 [−0.285, −0.197], 7/7 [PAGE 19, Table 8]). The deployment recommendation follows directly: "Frozen across a provider boundary, the ordering reverses… only retraining restores the interface effect" [PAGE 35].

*Layer 4 — label-rule / environmental semantics.* The external corpus resolves endpoints differently: 91.2% receiver capture and 6.6% next-event, against 98.9% next-event and 0.21% capture on the World Cup [PAGE 20, PAGE 34]. The capture rule returns the first frame at which the ball is within 1 m of the annotated receiver, so an external endpoint lies within about one grid cell of a tracked player by construction — "a label a front end that writes player features at continuous coordinates might exploit" [PAGE 20]. The post-hoc re-scoring shows the effect carried by the capture stratum (G2G−C −0.266 [−0.323, −0.216] in all seven matches), while on the 282 next-event rows the point estimate turns round to +0.102 with an interval spanning zero, and on the 91 boundary rows it is −0.128 [−0.452, +0.278] [PAGE 20]. **Verdict:** this is the sharpest conditional veto in the paper — it attaches to the external replication, not to the World Cup claim, whose labels are almost entirely next-event, "which is what shows the effect does not require that rule" [PAGE 20, PAGE 34]. The strata are also confounded with pass type and completion rate, so the stratification is descriptive, not causal [PAGE 20].

*Layer 5 — lattice / resolution.* The quantisation probe is the only selection row of the noise table in which G2G is not the leading arm, and it loses that lead to the other splatting arm, not to any raster control [PAGE 30]. A 4× finer raster does not substitute (Chalf−C −0.047 [−0.106, +0.001]; localisation worsens [PAGE 26, Table 15]), and sub-cell offset raster recovers only about a quarter of the painted package's gain [PAGE 25, Table 14]. **Verdict:** resolution is not a substitute for the write under this architecture; the finer raster halves every convolution's receptive field, so the study "rules out resolution as a substitute for the write under that architecture, not resolution in general" [PAGE 26].

*Layer 6 — weather / broadcast quality.* Quality gates flag illegal roster sizes, observational blackouts, provider dead time, frozen scenes, inter-frame gaps and impossible speeds, and a pass snapshot is admitted only under joint constraints on event–frame latency, roster completeness at the snapshot and at the 1 s-earlier finite-difference frame, actor–ball distance and tracking-run continuity [PAGE 6]. Admission is outcome-blind by rule but not in effect: completion rates are 83.8%, 85.3% and 81.9% in train/validation/test, and 6.6%, 5.9%, 7.4% of passes carry nonzero value labels [PAGE 6]. **Verdict:** the gates are a selection mechanism that the study does not audit for outcome dependence; this is a residual threat, not an established veto. The external corpus's estimated event–frame alignment is a second such exposure [PAGE 18].

*Overall.* No single layer vetoes the World Cup claim outright; the intersecting residual is: any deployment on a new provider with per-coordinate error near 1 m, with a capture-style endpoint annotation, or with an overlapping CV training-fold design, should expect the selection margin to compress toward zero on frozen checkpoints, and should refit and re-validate rather than reuse the shipped pipeline.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three counterfactual scenarios are stated so that a verifiable reward (retrained arms, locked scoring code, committed bootstrap draws) can return a clear accept/reject signal, together with the prediction each should test. All three reuse the paper's locked corpora, split signature and evaluation engine; none requires new raw data.

**Veto 1 — feature-permutation ablation of the raw painter.** Take Draw's nine raw node features and, at training time in each of the eight CV folds, permute feature vectors across nodes within each group (attackers, defenders, ball) while leaving positions, group assignments and channel count intact. If the mechanism is "a player's own features written at that player's own position," the gain should collapse to the null. **Prediction:** $\Delta(\text{Draw}_{\mathrm{perm}}-C)$ on selection NLL lies in [−0.03, +0.03] nats, against the observed −0.186 [−0.199, −0.172] [PAGE 17, Table 7] — i.e., the three-quarter attribution disappears and the interface effect is confirmed to be about feature-position pairing, not about the extra 27 channels. **Reward:** sign and magnitude of the pooled eight-fold selection-NLL difference; pass iff |Δ| < 0.03 nats and the 95% 64-cluster bootstrap interval excludes −0.186.

**Veto 2 — training-time cell quantisation of the graph inputs.** The paper already has an inference-time quantisation probe (+0.127 nats for G2G, +0.071 for D, ≤0.0012 for raster arms [PAGE 30]) and a trained nearest-cell ablation (nearest − bilinear: +0.084 for D, +0.093 for G2G [PAGE 24, Table 13]). The stronger counterfactual is to *train* both painted arms with coordinates snapped to the 1.0096 m × 1.0 m lattice, holding everything else fixed, and score on the un-snapped test rows. If sub-cell placement is roughly half the package's gain, training quantisation should remove most of it. **Prediction:** $\Delta(\text{Draw}_{\mathrm{trainquant}}-C)$ falls to roughly the Dnearest−D territory (+0.02 to +0.05 nats) rather than −0.186, and $\Delta(\text{G2G}_{\mathrm{trainquant}}-C)$ falls to a similar band rather than −0.251; the residual after training quantisation is what bilinear interpolation at write time — rather than sub-cell position itself — contributes, and should be positive and small. **Reward:** pooled selection-NLL difference under the committed 64-cluster bootstrap; pass iff the trained-quantisation gap is strictly smaller in magnitude than the observed bilinear gap and the paper's claim that roughly half the package is placement survives.

**Veto 3 — endpoint-rule swap on the external corpus.** The external study's 4,241 passes are 91.2% receiver-capture and 6.6% next-event; the post-hoc stratification already shows G2G−C at −0.266 in the capture stratum and +0.102 (interval spanning zero) on the 282 next-event rows [PAGE 20]. Restrict the external corpus to next-event rows only, retrain all four arms in seven leave-one-match-out folds, and score against the locked Part B rows of C and G2G. **Pred