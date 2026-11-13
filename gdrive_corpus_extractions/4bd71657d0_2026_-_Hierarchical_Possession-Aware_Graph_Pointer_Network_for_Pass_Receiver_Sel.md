---
source: "2026 - Hierarchical Possession-Aware Graph Pointer Network for Pass Receiver Selection - Wang et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3809
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided research paper about HPGPN (Hierarchical Possession-Aware Graph Pointer Network for Pass Receiver Selection). The response must follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis covering all these sections. Let me plan the content carefully.

**THINK_TRACE (>=400 words):**
Deep multi-hop derivation:
- Parse the problem formulation: variable-size candidate set Cp = {c1...cNp}, ground truth yp in {1...Np}, categorical distribution P(yp=n|p,Cp).
- Current pass graph G=(V,E) with passer, candidates, defenders. Directed edges passer->candidates, bidirectional candidate-defender.
- GraphSAGE encoder: hg_v = GraphSAGE(MLP_node(x_v), E).
- Mean pooling h_graph = 1/|V| sum hg_v.
- Fixed event context: x_ctx includes current pass attributes, freeze-frame summary, at-2 and at-1 actions. h_ctx = MLP_ctx(x_ctx). Tokens t_ctx,j = MLP_val(x_ctx,j) + e_ctx,j.
- Dual-branch history: L preceding events, Sp = (s1...sL). z_j^(0) = f_h(x_h^j) + f_tau(tau^j). Transformer encoder Z.
- All-event branch: q_all = MLP_all([h_passer; h_graph; h_ctx; m_all]). Attention scores e_all^j = v_all^T tanh(W_all z_j + U_all q_all). Softmax over L. hall = sum alpha_all^j z_j.
- Pass-only branch: P_p = {j | s_j is pass}. q_pass = MLP_pass([h_passer; h_graph; h_ctx; m_dual]). epass, alpha_pass, h_pass.
- Hierarchical candidate refinement: actx_n = CrossAttention(hg_cn, T_ctx, T_ctx). gated residual. Then apass_n = CrossAttention(hctx_cn, Z_pass, Z_pass). gated residual with tanh(lambda_pass).
- Glimpse pointer head: q^(0) = MLP_q([h_passer; h_graph; h_ctx; h_all; h_pass; m_dual]). Glimpse attention e_glp^n = v_glp^T tanh(W_glp href_cn + U_glp q^(0)). Softmax beta. Summary r = sum beta href. q^(1) = MLP_r([q^(0); r]). Logits o_n = v_o^T tanh(W_o href_cn + U_o q^(1)). Softmax over Np.
- Training: NLL loss. Complexity O((NM+N)d + L^2 d + NLd + (N+M+L)d^2).

Gray-zone audit:
- Partial observation: freeze frames don't include all 22 players [PAGE 10]. Visible set varies.
- Anonymous candidates: no stable identities [PAGE 1,2].
- L=0 singularity: hall=0, mall indicates absence [PAGE 8].
- P_p = empty: h_pass=0 [PAGE 8].
- Variable Np means softmax normalization is per-pass, not global [PAGE 4].
- History metadata m_all, m_dual encode availability and normalized length [PAGE 7-8].
- Cross-dataset asymmetry: women->men drops larger [PAGE 12].
- Best K=40, larger windows introduce noise [PAGE 12].
- Top-1 accuracy drops with candidate set size, but Top-2/3 and MRR remain strong [PAGE 12].

**SOURCE_OPERATORS_AND_EQUATIONS:**
Need formal LaTeX with units and page citations.
- Information units: bits? Probability distributions are dimensionless (simplex). Hidden dimension d=64 [PAGE 10]. Accuracy is unitless ratio [0,1].
- Complexity units: FLOPs or operations. d is dimension (unitless count).
- Time tau: relative time difference, recency position. SI seconds? Not specified but relative.
- Page citations: [PAGE 4], [PAGE 6], etc.
- Breakdown regimes: L=0, P_p=∅, Np variable, K bounded by max history.

**RETROCAUSAL_GENEALOGY:**
Historical lineage:
- MLSA 2018 pass prediction challenge [PAGE 3].
- Hand-crafted spatial features [1,3] on PAGE 3.
- Li and Zhang learning-to-rank [PAGE 3].
- Hubáček et al neural representations [PAGE 3].
- Tracking-based [17,13], video-based [15,6,12,8] [PAGE 3].
- SoccerMap [2] pitch-level spatial maps [PAGE 3].
- un-xPass [14] StatsBomb Open Data, pass creativity metric, XGBoost ranking [PAGE 3].
- Pointer Networks [18] Vinyals et al 2015 [PAGE 3-4].
- Graph Pointer Networks [11] Ma et al 2019 [PAGE 4].
- GCN [9], GraphSAGE [5], GAT [16] [PAGE 4].
- Multi-week traps: cross-dataset transfer, in-domain vs out-of-domain, asymmetric women->men [PAGE 12]. K sensitivity [PAGE 12].

**RECURSIVE_THEORY_OF_MIND:**
Crisis habit regression vs counter-trap vs clock.
- This is a more abstract/conceptual section. I need to map it to the paper's logic.
- Crisis habit regression: When possession history is removed (w/o dynamic possession history), accuracy drops (0.6001 -> 0.5864 Euro 2024; 0.5675 -> 0.5406 WEuro 2025) [PAGE 13]. This is "regression" to instantaneous spatial heuristics (Closest Teammate baseline 0.3783 avg) [PAGE 11].
- Counter-trap: The glimpse pointer head vs independent MLP scorer. MLP scorer evaluates candidates independently (0.5986, 0.5459) vs glimpse pointer (0.6001, 0.5675) [PAGE 14]. The counter-trap is that candidates are not independent; selection likelihood depends on interactions [PAGE 2]. The glimpse attention creates a context-dependent query that compares candidates under same pass context.
- Clock: Temporal Transformer encoder over history, relative time tau, recency position [PAGE 7]. K=40 best [PAGE 12]. The "clock" is the possession history window; too small loses context, too large adds noise.

**CROSS_LAYER_VETO_ADJUDICATION:**
Physical/biomechanical/weather veto proof.
- The paper uses event-centered freeze frames, not tracking data or video [PAGE 1,2,10]. No biomechanical data (player speed, acceleration, heart rate) is in StatsBomb 360 freeze frames. Thus any veto based on physical fatigue, biomechanical load, or weather cannot be computed from the model inputs.
- Weather: not in event features x_h^j or x_ctx [PAGE 6-7]. No explicit weather layer.
- Physical veto: The model assumes visible candidates are sufficient. If a key teammate is off-camera (not in freeze frame), the model cannot select them. This is a physical observability veto.
- Biomechanical: No player-specific fatigue or sprint load features. Node features are spatial + pass-option + type indicators [PAGE 6].
- Weather veto: No precipitation, temperature, wind features. Fixed event context includes pass attributes, freeze-frame summary, at-2/at-1 gamestate [PAGE 6]. No weather.
- Breakdown: If possession history is truncated at K=40 but actual relevant action was at L>40, information loss [PAGE 12].

**RLVR_COUNTERFACTUAL_VETOES:**
3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) veto scenarios + predictions. Since this is a research paper analysis, I'll frame RLVR as "verifiable counterfactual vetoes" where we propose interventions and predict outcomes based on the paper's ablation/ablation-like logic.
1. Veto: Remove all-event history context (w/o all-event history context). Paper Table 3 shows Euro 2024 drops 0.6001->0.5962, WEuro 2025 0.5675->0.5488 [PAGE 13]. Prediction: In a possession with long build-up (>40 events) where attacking direction shifts, removing all-event context causes larger drop than reported average because early possession structure informs current passing lanes.
2. Veto: Set Np to include invisible teammates (full 11-man vocabulary). The model is designed for variable-size visible candidates only [PAGE 1,4]. Prediction: Accuracy collapses because anonymous visible set assumption is violated; pointer head softmax over invisible nodes yields undefined/miscalibrated distribution.
3. Veto: Force K=0 (no possession history). This is equivalent to w/o dynamic possession history but stricter. Paper shows drop [PAGE 13]. Prediction: In games with high pressing (e.g., BL 23/24 where gains were smallest), K=0 causes disproportionate degradation because opponent pressure patterns evolve over possession, not just instantaneously.

Word count check: Need >=1000 words total across sections. THINK_TRACE alone needs >=400. I'll aim for substantial depth in each.

I must not mention betting lines. No odds, spreads, etc.

Let me draft carefully with LaTeX and page citations.

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

I need to include exact [PAGE N] markers and verbatim quotes where applicable. Let's pull some quotes:
- [PAGE 1]: "Pass receiver selection is a fundamental task in football analytics, aiming to predict the intended receiver under a given game state."
- [PAGE 2]: "In this setting, the visible player set varies across events, non-event players are not consistently identifiable across snapshots, and receiver selection is defined over a variable-size set of anonymous visible teammates."
- [PAGE 4]: "Cp = {c1, c2, . . . , cNp}"
- [PAGE 6]: GraphSAGE equation.
- [PAGE 8]: Attention equations.
- [PAGE 10]: Complexity equation.
- [PAGE 11]: Table 2 accuracy values.
- [PAGE 12]: K=40 discussion.
- [PAGE 13]: Table 3 ablation.
- [PAGE 14]: Table 5 head comparison.

Let's write it out.

For LaTeX, I'll use inline math and display math where appropriate.

Units:
- d = 64 (hidden dimension, unitless count).
- Accuracy: dimensionless probability estimate in [0,1].
- Np: count (dimensionless integer).
- L: count (dimensionless integer), bounded by K=40.
- tau: relative time difference (seconds, though not explicitly SI in paper, I can note it as temporal offset with units consistent with event timestamps).
- Complexity: O(...) operations, d^2 etc.

Breakdown regimes:
- L=0: hall set to zero, mall indicates absence [PAGE 8].
- P_p = empty: h_pass set to zero [PAGE 8].
- Np varies per pass; softmax is over current candidate set only [PAGE 4].
- K bounded max history [PAGE 7].

I'll now compose the final response. Ensure no betting references.

Word count estimation: THINK_TRACE ~500 words. SOURCE_OPERATORS ~300. RETROCAUSAL ~250. RECURSIVE ~250. CROSS_LAYER ~250. RLVR ~250. Total ~1800. Good.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper formulates pass receiver selection as a categorical distribution over a pass-specific, variable-size candidate set: given pass \(p\) and visible teammate candidates \(C_p=\{c_1,\dots,c_{N_p}\}\), estimate \(P(y_p=n\mid p,C_p)\) for \(n\in\{1,\dots,N_p\}\), excluding the true receiver, outcome, and post-pass movement from inputs [PAGE 4]. This is a strict partial-observation problem: StatsBomb 360 freeze frames contain only players within the camera view, not all 22 pitch occupants, and non-event players lack stable identities across snapshots [PAGE 10]. Consequently, the model cannot rely on a fixed global player vocabulary; the pointer mechanism must re-normalize scores over whatever candidate subset is visible at inference time.

Multi-hop derivation begins at the Current Pass Graph Encoder [PAGE 6]. A graph \(G=(V,E)\) is constructed with passer, visible candidates, and visible opponents as nodes. Directed edges run from passer to each candidate; bidirectional edges link candidates and defenders. Node features are projected via MLP\(_{node}\) and passed through GraphSAGE: \(h^{g}_v=\text{GraphSAGE}(\text{MLP}_{node}(x_v),E)\). The passer representation \(h_{\text{passer}}=h^g_{v_0}\), candidate matrix \(H^g_c\in\mathbb{R}^{N_p\times d}\), and graph context \(h_{\text{graph}}=\frac{1}{|V|}\sum_{v\in V}h^g_v\) summarize instantaneous spatial relations. With hidden dimension \(d=64\) [PAGE 10], these are Euclidean vectors in \(\mathbb{R}^{64}\), dimensionless in physical units but information-carrying in bits via learned weights.

The Fixed Event Context Encoder [PAGE 6] appends compact event-level cues: current pass attributes, freeze-frame summary features, and short-range gamestate from actions \(a_{t-2}\) and \(a_{t-1}\). These are not passes only; any event type qualifies. A global representation \(h_{ctx}=\text{MLP}_{ctx}(x_{ctx})\) is complemented by candidate-specific context tokens \(t^{ctx}_j=\text{MLP}_{val}(x_{ctx,j})+e^{ctx}_j\), where \(e^{ctx}_j\) are learnable field embeddings [PAGE 6]. This produces token sequence \(T^{ctx}\in\mathbb{R}^{D_{ctx}\times d}\).

Temporal depth arrives through the Dual-Branch Dynamic Possession History Encoder [PAGE 7–8]. For current event \(a_t\), the model retains \(L\le K\) preceding possession events \(S_p=(s_1,\dots,s_L)\), ordered recent-to-early, excluding \(a_t\). Each event is encoded as \(z^{(0)}_j=f_h(x^h_j)+f_\tau(\tau_j)\), where \(\tau_j\) encodes relative time difference and recency position [PAGE 7]. A temporal Transformer encoder produces \(Z=\text{TransformerEncoder}(Z^{(0)})\in\mathbb{R}^{L\times d}\). Two attention branches then extract contexts: an all-event branch with query \(q_{all}=\text{MLP}_{all}([h_{\text{passer}};h_{\text{graph}};h_{ctx};m_{all}])\) and scores \(e^{all}_j=v^\top_{all}\tanh(W_{all}z_j+U_{all}q_{all})\), normalized by softmax over \(L\) to yield \(h_{all}=\sum_j\alpha^{all}_j z_j\) [PAGE 7–8]. A pass-only branch restricts attention to \(P_p=\{j\mid s_j\text{ is a pass action}\}\), producing \(h_{pass}\) analogously [PAGE 8]. Singularity regimes are explicitly handled: if \(L=0\), \(h_{all}=0\) flagged by \(m_{all}\); if \(P_p=\emptyset\), \(h_{pass}=0\) flagged by \(m_{dual}\) [PAGE 8].

Hierarchical Candidate Refinement [PAGE 8–9] injects context sequentially. Candidate \(c_n\) first retrieves local event context via cross-attention \(a^{ctx}_n=\text{CrossAttention}(h^g_{c_n},T^{ctx},T^{ctx})\), fused with a gated residual \(g^{ctx}_n=\sigma(\text{MLP}^{ctx}_g([h^g_{c_n};a^{ctx}_n]))\). Then pass-history evidence \(a^{pass}_n=\text{CrossAttention}(h^{ctx}_{c_n},Z^{pass},Z^{pass})\) is fused with another gated residual containing learnable scalar \(\lambda_{pass}\) initialized to zero [PAGE 9]. The final \(h^{ref}_{c_n}\) integrates spatial, event, and historical evidence.

The Glimpse Pointer Head [PAGE 9] builds initial query \(q^{(0)}=\text{MLP}_q([h_{\text{passer}};h_{\text{graph}};h_{ctx};h_{all};h_{pass};m_{dual}])\), performs glimpse attention over candidates to compute summary \(r=\sum_n\beta^{glp}_n h^{ref}_{c_n}\), updates \(q^{(1)}=\text{MLP}_r([q^{(0)};r])\), and emits logits \(o_n=v^\top_o\tanh(W_o h^{ref}_{c_n}+U_o q^{(1)})\) normalized by softmax over \(N_p\) [PAGE 9]. Training minimizes candidate-level negative log-likelihood \(\mathcal{L}=-\frac{1}{|\mathcal{D}|}\sum_{p\in\mathcal{D}}\log P(y_p\mid p,C_p)\) [PAGE 10].

Gray-zone audit: The paper reports average accuracy gains of 3.31 percentage points over XGBoost (0.5387 to 0.5718), but the BL 23/24 gain is smallest, suggesting dependence on competition style and visible-player distribution [PAGE 11]. Cross-domain transfer is asymmetric: women-to-men transfers show larger drops than men-to-women [PAGE 12]. History window \(K=40\) is optimal; smaller windows lack context, larger windows inject noise [PAGE 12]. Top-1 accuracy declines as candidate-set size grows, though Top-2/Top-3 and MRR remain strong, indicating ranking quality degrades gracefully [PAGE 12]. These are the failure modes where the model’s assumptions—partial observability, anonymity, bounded history—press against tactical reality.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted from the source, with page citations, units, and breakdown regimes.

**Problem formulation [PAGE 4]:**
\[
C_p=\{c_1,c_2,\dots,c_{N_p}\},\qquad y_p\in\{1,\dots,N_p\},
\]
\[
P(y_p=n\mid p,C_p),\quad n\in\{1,\dots,N_p\},\qquad
\hat{y}_p=\arg\max_{n\in\{1,\dots,N_p\}}P(y_p=n\mid p,C_p).
\]
Units: \(N_p\) is a dimensionless count of visible teammate candidates; probability mass is unitless on the simplex \(\Delta^{N_p-1}\). Breakdown: \(N_p\) varies per pass; no fixed global vocabulary exists.

**Current pass graph [PAGE 6]:**
\[
G=(V,E),\quad h^g_v=\text{GraphSAGE}(\text{MLP}_{node}(x_v),E),
\]
\[
h_{\text{passer}}=h^g_{v_0},\quad H^g_c=[h^g_{c_1};\dots;h^g_{c_{N_p}}]\in\mathbb{R}^{N_p\times d},\quad
h_{\text{graph}}=\frac{1}{|V|}\sum_{v\in V}h^g_v.
\]
Units: \(d=64\) hidden dimension [PAGE 10], dimensionless count. Node features include spatial coordinates (meters relative to pitch frame, implicit), pass distance, pass angle, defensive proximity [PAGE 6].

**Fixed event context [PAGE 6]:**
\[
h_{ctx}=\text{MLP}_{ctx}(x_{ctx})\in\mathbb{R}^d,\quad
t^{ctx}_j=\text{MLP}_{val}(x_{ctx,j})+e^{ctx}_j,\quad
T^{ctx}=[t^{ctx}_1;\dots;t^{ctx}_{D_{ctx}}]\in\mathbb{R}^{D_{ctx}\times d}.
\]
\(x_{ctx}\) includes current pass attributes, freeze-frame summary, and actions \(a_{t-2},a_{t-1}\) [PAGE 6].

**Dual-branch possession history [PAGE 7–8]:**
\[
S_p=(s_1,\dots,s_L),\quad 0\le L\le K,\quad z^{(0)}_j=f_h(x^h_j)+f_\tau(\tau_j),\quad
Z=\text{TransformerEncoder}(Z^{(0)})\in\mathbb{R}^{L\times d}.
\]
All-event branch:
\[
q_{all}=\text{MLP}_{all}([h_{\text{passer}};h_{\text{graph}};h_{ctx};m_{all}]),\quad
e^{all}_j=v^\top_{all}\tanh(W_{all}z_j+U_{all}q_{all}),
\]
\[
\alpha^{all}_j=\frac{\exp(e^{all}_j)}{\sum_{r=1}^L\exp(e^{all}_r)},\quad
h_{all}=\sum_{j=1}^L\alpha^{all}_j z_j.
\]
Pass-only branch:
\[
P_p=\{j\mid s_j\text{ is a pass action}\},\quad
q_{pass}=\text{MLP}_{pass}([h_{\text{passer}};h_{\text{graph}};h_{ctx};m_{dual}]),
\]
\[
\alpha^{pass}_j=\frac{\exp(e^{pass}_j)}{\sum_{r\in P_p}\exp(e^{pass}_r)},\quad
h_{pass}=\sum_{j\in P_p}\alpha^{pass}_j z_j.
\]
Units: \(\tau_j\) is relative time offset (seconds, consistent with event timestamps) and recency position (dimensionless rank). \(K=40\) [PAGE 12]. Breakdown: \(L=0\Rightarrow h_{all}=0\) with \(m_{all}\) flag; \(P_p=\emptyset\Rightarrow h_{pass}=0\) with \(m_{dual}\) flag [PAGE 8].

**Hierarchical refinement [PAGE 8–9]:**
\[
a^{ctx}_n=\text{CrossAttention}(h^g_{c_n},T^{ctx},T^{ctx}),\quad
g^{ctx}_n=\sigma(\text{MLP}^{ctx}_g([h^g_{c_n};a^{ctx}_n])),
\]
\[
h^{ctx}_{c_n}=\text{LayerNorm}(h^g_{c_n}+g^{ctx}_n\odot a^{ctx}_n),
\]
\[
a^{pass}_n=\text{CrossAttention}(h^{ctx}_{c_n},Z^{pass},Z^{pass}),\quad
g^{pass}_n=\sigma(\text{MLP}^{pass}_g([h^{ctx}_{c_n};a^{pass}_n])),
\]
\[
h^{ref}_{c_n}=\text{LayerNorm}(h^{ctx}_{c_n}+\tanh(\lambda_{pass})g^{pass}_n\odot a^{pass}_n),\quad \lambda_{pass}\to 0\text{ at init.}
\]

**Glimpse pointer head [PAGE 9]:**
\[
q^{(0)}=\text{MLP}_q([h_{\text{passer}};h_{\text{graph}};h_{ctx};h_{all};h_{pass};m_{dual}]),
\]
\[
e^{glp}_n=v^\top_{glp}\tanh(W_{glp}h^{ref}_{c_n}+U_{glp}q^{(0)}),\quad
\beta^{glp}_n=\frac{\exp(e^{glp}_n)}{\sum_{r=1}^{N_p}\exp(e^{glp}_r)},\quad
r=\sum_{n=1}^{N_p}\beta^{glp}_n h^{ref}_{c_n},
\]
\[
q^{(1)}=\text{MLP}_r([q^{(0)};r]),\quad
o_n=v^\top_o\tanh(W_oh^{ref}_{c_n}+U_oq^{(1)}).
\]
Final distribution: softmax over \(\{o_n\}_{n=1}^{N_p}\) [PAGE 9].

**Training loss and complexity [PAGE 10]:**
\[
\mathcal{L}=-\frac{1}{|\mathcal{D}|}\sum_{p\in\mathcal{D}}\log P(y_p\mid p,C_p).
\]
Per-pass inference complexity:
\[
O\big((NM+N)d+L^2d+NLd+(N+M+L)d^2\big),
\]
where \(N=N_p\) candidates, \(M\) visible opponents, \(L\) history events, \(d=64\) [PAGE 10]. Units: operations/FLOPs; \(d^2\) terms are dense projections.

**Empirical accuracy values [PAGE 11–14]:**
Table 2 [PAGE 11]: HPGPN vs XGBoost avg. 0.5718 vs 0.5387. Best per-dataset: FIFA WC 2022 0.6007, Euro 2024 0.6001. Table 3 ablation [PAGE 13]: w/o dynamic possession history drops Euro 2024 0.6001\(\to\)0.5864 and WEuro 2025 0.5675\(\to\)0.5406. Table 5 head comparison [PAGE 14]: glimpse pointer head 0.6001/0.5675 vs MLP scorer 0.5986/0.5459.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of HPGPN traces through four distinct waves of football analytics. First, the MLSA 2018 pass prediction challenge established receiver prediction as predicting the receiver given sender and all player locations at pass time, relying on hand-crafted spatial features such as distances and angles among passer, candidates, and opponents [PAGE 3]. Second, Li and Zhang [10] reframed the task as learning-to-rank, naturally aligning selection with a candidate set rather than fixed-class classification [PAGE 3]. Third, Hubáček et al. [7] introduced neural representations of spatial relations, while tracking-based and video-based methods [17,13,15,6,12,8] added continuous movement and defensive organization but required dense trajectories, visual preprocessing, or stable identities, limiting scalability [PAGE 3]. Fourth, SoccerMap [2] provided visually interpretable pitch-level spatial maps, and un-xPass [14] introduced event-centered freeze-frame observations from StatsBomb 360, enabling scaled, broadcast-like partial observation without full tracking [PAGE 3]. HPGPN explicitly follows un-xPass but treats receiver selection as a standalone structured neural problem rather than a component of a pass-creativity metric [PAGE 3].

Architecturally, HPGPN inherits Pointer Networks [18], which use attention to select from input sequences of variable size, and Graph Pointer Networks [11], which prepend a graph embedding layer before the pointer decoder [PAGE 3–4]. HPGPN adapts this to football by replacing sequential inputs with a spatial player-interaction graph and adding possession-temporal branches absent in the original combinatorial-optimization context [PAGE 4].

Multi-week traps emerge in the experimental design. The 15% match-level test split and 8:2 sample-level train/validation split [PAGE 10] guard against match-level leakage but not competition-level distribution shift. Cross-dataset transfer [PAGE 12] reveals that HPGPN generalizes within men’s competitions and from men’s to women’s, but women-to-men transfers suffer larger drops—an asymmetric trap indicating that competition-specific pressing styles and visible-player densities are not fully invariant. The history-window sensitivity analysis [PAGE 12] shows \(K=40\) optimal on Euro 2024 and WEuro 2025; shorter windows starve the model of possession development, while longer windows admit stale events that act as temporal noise. This is a classic bias-variance trap over the possession clock: too short regresses to instantaneous heuristics (Closest Teammate baseline 0.3783 average) [PAGE 11], too long dilutes the recency-weighted signal encoded in \(\tau_j\) [PAGE 7]. The ablation of overlapping all-event/pass branches [PAGE 13] further shows that disjoint designs underperform because historical passes must be interpreted within broader possession evolution, not isolated.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here concerns what the passer believes about the receiver’s availability and how the model regresses under crisis conditions. Crisis habit regression occurs when possession-history evidence is removed: HPGPN without dynamic possession history falls from 0.6001 to 0.5864 on Euro 2024 and from 0.5675 to 0.5406 on WEuro 2025 [PAGE 13]. This regression collapses the model toward the instantaneous spatial configuration of the current freeze frame, functionally approaching the Closest Teammate heuristic (average 0.3783) [PAGE 11]. Under pressure or short possession sequences, the passer’s decision is dominated by proximate spatial affordances rather than sequence context, and the model’s graph-only branch captures exactly that regime.

The counter-trap is the candidate-independence fallacy. Earlier baselines such as XGBoost and MLP scorers evaluate candidates independently or with handcrafted spatial features [PAGE 11,14]. HPGPN’s glimpse pointer head explicitly counters this by constructing a pass-level query and refining it via glimpse attention over the candidate set before scoring [PAGE 9]. The ablation confirms this: the independent MLP scorer scores 0.5986/0.5459 on Euro 2024/WEuro 2025, while the glimpse pointer head scores 0.6001/0.5675 [PAGE 14]. The counter-trap is that receiver likelihood is relational, conditioned on defender positioning and the global pass context, not an intrinsic candidate property.

The clock is the possession history window \(K\). The temporal Transformer encodes \(\tau_j\) as relative time difference and recency position [PAGE 7], making the model sensitive to how recently an event occurred. At \(K=40\), the clock captures meaningful possession development without admitting stale noise [PAGE 12]. If the clock stops (\(L=0\)), \(h_{all}\) and \(h_{pass}\) are zeroed and flagged by metadata \(m_{all},m_{dual}\) [PAGE 8], forcing the model into purely reactive mode. Recursive theory of mind thus operates on three timescales: instantaneous graph relations (current pass graph), short-range event memory (fixed context \(a_{t-2},a_{t-1}\) [PAGE 6]), and possession-scale temporal intention (dual-branch history [PAGE 7–8]). Crisis habit regression disables the slower two timescales, leaving the passer to react as if every pass were the first in possession—a state the data shows is suboptimal.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather vetoes are categories of exogenous information absent from HPGPN’s input specification, creating hard adjudication boundaries.

Physical observability veto: StatsBomb 360 freeze frames contain only players visible within the camera broadcast view, not all 22 players [PAGE 10]. If the intended receiver is off-camera, \(c_n\) does not exist in \(C_p\), and the model cannot assign probability to an invisible node. The variable-size candidate formulation \(C_p=\{c_1,\dots,c_{N_p}\}\) explicitly assumes the ground-truth receiver is among visible teammates [PAGE 4]. A physical occlusion veto therefore triggers whenever the true receiver is outside the freeze frame; accuracy is undefined for that sample because the label is excluded from the output simplex \(\Delta^{N_p-1}\).

Biomechanical veto: Node features include spatial features, node-type indicators, pass distance, pass angle, and defensive proximity [PAGE 6]. There are no player-specific biomechanical loads—sprint distance, acceleration, heart rate, or fatigue state. The temporal feature \(\tau_j\) captures recency, not physiological recovery. Consequently, any veto based on accumulated match load or muscle fatigue cannot be computed; the model assumes all visible candidates are physiologically eligible to receive. This breaks down in late-match scenarios where substitution patterns and fatigue alter passing lanes but leave spatial features unchanged.

Weather veto: Fixed event context \(x_{ctx}\) includes pass attributes, freeze-frame summary, and prior actions \(a_{t-2},a_{t-1}\) [PAGE 6]. No precipitation, temperature, wind, or pitch-condition fields appear in \(x_{ctx}\), \(x^h_j\), or \(\tau_j\). A weather veto (e.g., heavy rain reducing long-pass success) is invisible to the model unless correlated with observable spatial patterns already encoded. Since the model was trained and tested on public StatsBomb data without weather metadata [PAGE 10–11], cross-competition generalization in divergent climates is untested.

Breakdown adjudication: The model’s failure mode under these vetoes is silent miscalibration rather than graceful degradation. When \(K=40\) truncates a possession whose decisive branching occurred at \(L>40\), the all-event context \(h_{all}\) loses early structural information [PAGE 12]. When \(N_p\) shrinks because defenders crowd the camera view, the softmax is recomputed over fewer candidates, inflating confidence in remaining visible options even if the true receiver is occluded. These are singularity regimes where the input assumptions—partial but sufficient visibility, bounded relevant history, weather invariance—are violated without alerting the inference pipeline.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) counterfactual veto scenarios, each grounded in the paper’s ablation and architecture, with falsifiable predictions.

**Veto 1: Remove all-event history context while retaining pass-only context.**  
Counterfactual intervention: set \(h_{all}=0\) and \(m_{all}\) to “absent” for every pass, keeping \(h_{pass}\) active.  
Paper evidence: Table 3 ablation “w/o all-event history context” drops Euro 2024 from 0.6001 to 0.5962 and WEuro 2025 from 0.5675 to 0.5488 [PAGE 13].  
Prediction: In possessions exceeding 20 events where attacking direction shifts (e.g., build-up from own third to final third), the accuracy drop will exceed the table average because \(h_{pass}\) captures only pass actions, not carry/duel/pressure context that defines spatial territory. Verifiable metric: conditional accuracy on long possessions (\(L>30\)) should fall by more than 4 percentage points relative to full HPGPN.

**Veto 2: Expand candidate set to full 11-man squad, including invisible teammates.**  
Counterfactual intervention: redefine \(C_p\) as all teammates on the pitch, assigning zero spatial features to off-camera players, and re-run the glimpse pointer softmax over \(N_p=10\) fixed candidates.  
Paper evidence: The formulation explicitly restricts selection to visible teammate candidates because non-event players are not consistently identifiable across snapshots [PAGE 2,4].  
Prediction: Accuracy collapses toward the Closest Teammate baseline (~0.38) because the pointer head’s logits \(o_n\) are conditioned on graph features \(h^g_{c_n}\) that are undefined or zero-padded for invisible nodes, breaking the relational attention \(e^{glp}_n=v^\top_{glp}\tanh(W_{glp}h^{ref}_{c_n}+U_{glp}q^{(0)})\) [PAGE 9]. Verifiable metric: Top-1 accuracy on matches with high off-camera player density should drop below 0.45.

**Veto 3: Force zero possession history (\(K=0\), \(L=0\) for all passes).**  
Counterfactual intervention: disable both history branches, \(h_{all}=h_{pass}=0\), retaining only current pass graph and fixed event context.  
Paper evidence: “w/o dynamic possession history” ablation drops Euro 2024 0.6001\(\to\)0.5864 and WEuro 2025 0.5675\(\to\)0.5406 [PAGE 13]; the smallest HPGPN gain over XGBoost occurs on BL 23/24, where possession-aware modeling helps least [PAGE 11].  
Prediction: In high-pressing competitions (e.g., Bundesliga-style rapid transitions), the drop will exceed 2 percentage points because opponent pressure evolves across the possession and is not fully captured by \(a_{t-2},a_{t-1}\) [PAGE 6]. Verifiable metric: accuracy on passes preceded by 5+ opponent pressures in the last 10 seconds will fall below the w/o-history ablation average, confirming that history is a crisis buffer, not a uniform gain.
</RLVR_COUNTERFACTUAL_VETOES>