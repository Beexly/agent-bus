---
source: "arxiv_2008.07725v2.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 13
model: baidu/ernie-5.5-flash-preview:free
words: 8202
---

<NATIVE_REASONING>
We need answer to user. They provided instruction: "DRIVE SOURCE: ... PAGES: 13 SOURCE TEXT: ..." They likely expect us to produce a deep reasoning analysis in exact XML sections, >=1000 words, with zero betting lines, zero toy equations, formal LaTeX, SI/info/probability units, assumptions, singularities/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need not use external data. Need likely analyze the SoDA paper and maybe "Frontier Reasoning Foundry" style. Need produce final only with XML sections? They requested exact XML sections:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Need total >=1000 words across sections. THINK_TRACE >=400 words. Need no betting lines. No fake ratios. Need formal equations, units, assumptions, singularities. Need cite exact [PAGE N] markers and verbatim quotes. Since source provided, cite page numbers and quotes. Need maybe not mention source if not needed? But should.

Need think about content. The paper: SoDA: Multi-Object Tracking with Soft Data Association. Key equations:
Attention measurement encoding: z_i^o = sum_j softmax(Q_i K_j^T / sqrt(d_k)) V_i, j detections in previous L_enc frames [PAGE 4]. Relative time encoding: A_{i,j}=Q_i K_j^T + Q_i R_{i-j}^T + u K_j^T + v R_{i-j}^T [PAGE 4]. LayerNorm(F(z_i)+z_i) [PAGE 3]. Association softmax: p(d_i|T)= exp(z_i^{dT} z_T) / (exp(z_occ^T z_T)+ sum_j exp(z_j^{dT} z_T)) [PAGE 4]. Loss: L(T)= -y_{T,o} log p(o|T) - sum_i y_{T,i} log p(d_i|T) [PAGE 4]. Social force Eq 5: f_i = sum_j F0 exp(-||p_i-p_j||/R) · ∇(p_i-p_j) [PAGE 13]. Simulation position update p_{t+1}=p_t+v_t, velocities normal, etc. Need formal units: d_k dimensionless? Embeddings real-valued, softmax probabilities dimensionless, logits inner products dimensionless if normalized? Need assumptions. Breakdown regimes: when L_enc too large marginal, N_enc >3 unstable; when detector noisy high p_drop, occlusion state benefits; when identity embeddings collapse due identical appearances; when occlusion state probability exceeds detection probability; when hard association abandoned but association still argmax softmax. Need maybe singularities: softmax denominator zero impossible? If exp underflow? Temperature? If zT=0? Relative encoding learned R_k requires L_enc finite; if L_enc > support, R undefined? N_enc >3 convergence issues. Need info theory: attention as mutual information proxy? Avoid toy ratios. Can state attention weight distribution p(j|i)=softmax(logits_j) and entropy H=-sum p log p bits, etc. But not fake ratio. Need units: positions in [0,1] normalized image coordinates [PAGE 5], time frames, velocities in normalized units/frame, force maybe normalized? Social force units arbitrary in simulation. Measurements x_i=(x1,y1,x2,y2) normalized [0,1] [PAGE 5, PAGE 11]. Batch size 16, SGD lr 1e-3 momentum 0.9, frames 32 [PAGE 5]. dk=64 [PAGE 5]. L_enc=5, N_enc=2 [PAGE 6]. Tlost U=2, P=5 [PAGE 5].

Need maybe evaluate if any issue: paper has page 13 social force equation uses ∇(pi-pj) as unit vector? It says unit vector. Equation has dot? f_i = sum_j F0 e^{-||pi-pj||/R} · ∇(pi-pj). Should be vector maybe gradient of distance. We can formalize as f_i = sum_j F0 exp(-r_ij/R) \hat{n}_{ij}, with r_ij=||p_i-p_j|| in normalized spatial units, \hat n unit vector. But source writes ∇(p_i-p_j). Need not correct? We can state in SI-like normalized units.

Need maybe "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. This is not sports, but can adapt: physical/biomechanical/weather veto for MOT? Need proof that certain tracking claims are vetoed by physics/weather? Could formulate: for autonomous driving, occlusions and detector noise are physical constraints; weather (rain, glare) can increase false negatives; SoDA cannot create information absent; if detector misses all detections for > T_lost, track killed; if occlusion too long beyond learned context, no recovery. Need "veto proof" maybe derive necessary condition for track persistence: p(o|T) > max_i p(d_i|T) and track age < T_lost^P; if physical occlusion duration exceeds allowed context window or embedding drift, no recovery. Weather: if detector FN rate high, information-theoretic channel capacity insufficient; no algorithm can recover identity beyond priors. Need formal. Maybe include a proof: Let detection process be Bernoulli with drop probability p_drop; probability of no detection for L consecutive frames = p_drop^L (if independent). Track survival requires at least one associated detection within T_lost frames. If p_drop^T_lost high, termination. But this is from paper's p_drop. Could compute for p_drop=0.4, T_lost=5, survival probability 1 - 0.4^5? Wait no associated detection in T_lost? If track killed if no associated detection in consecutive T_lost frames. If occlusion leads to no detection, probability of surviving exactly? Need not assert independent because paper simulates independent drops. For p_drop=0.4, probability of at least one detection in 5 frames = 1 - 0.4^5 = 0.98976? But if each frame drop independent. This is formal but not toy equation? It's probability. Need careful: In controlled ablation, they drop consecutive boxes Ndrop ~ U(1,5) for every 10 frames with probability pdrop [PAGE 6]. Not simple independent. But can use bound.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR maybe reinforcement learning verifiable rewards? Need create scenarios that can verify if method fails. Maybe:
1. Controlled Waymo p_drop=0.4, N_enc>3: paper says unstable; prediction: training validation MOTA lower or convergence fails. Verify from Table 2? Actually table shows Occ gain at pdrop 0.4, but N_enc >3 unstable from page 6. Need scenario: set N_enc=4, L_enc=20; prediction convergence stalls / MOTA not exceed 92.8? Source Table 3 N_enc=3 L_enc=20 MOTA 92.8; but they found N_enc>3 often unstable. Verifiable.
2. Occlusion state false positives: high precision occlusion at p_drop 0.3/0.4; if threshold changed to high recall, FP occlusion increases FN. Prediction from Table 2(b): precision high 91.9/93.3; recall lower 60.1/64.2. Verify if model class with lower threshold has higher FN.
3. Social force context: Np=10 with AE improves MOTA from IOU 86.6 to ours 93.3 (with Occ? Table 8: ours AE+Occ 93.3, without? 87.3). Prediction: removing AE degrades MOTA and IDS worsens; verifiable Table 8. Or weather/detector: if input detections all false positives, track can't track; but maybe need RLVR counterfactual vetoes.

Need ensure no "spreads, totals, moneylines, or odds". Avoid words like spread? They said zero betting lines: Never mention spreads, totals, moneylines, or odds. We can avoid "spread" entirely? But "spatiotemporal" okay. Avoid "odds". Need not mention betting. "totals" maybe as word? Avoid. "total"? Could use "sum". But "zero betting lines" probably no betting terms. Avoid "line" maybe? It says never mention spreads, totals, moneylines, or odds. We can not use those exact terms. "Total" might be okay but safer avoid? Use "aggregate", "sum". Avoid "line" as phrase? "threshold" okay. "prediction" okay.

Need >=1000 words. Let's plan sections.

THINK_TRACE >=400 words. Need deep multi-hop derivation and gray-zone audit. We can discuss how paper replaces hard assignment with soft association, derivation of softmax association, attention encoding, occlusion state, track management. Multi-hop: detection -> embedding -> self-attention across temporal window -> track embedding -> attention association -> occlusion class -> track management. Gray zones: attention weights are not calibrated probabilities unless trained; occlusion state high precision but low recall; hard assignment at inference still argmax, so soft only in feature encoding; track embedding is latest associated detection not aggregated? Page 4 says track embedding simply embedding of latest associated detection. That creates vulnerability if latest associated detection is wrong. Need mention. Also relative time encoding learned R, sinusoidal non-convergence. Need cite pages. Need maybe include quotes.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Include equations from paper. Need maybe define variables. Cite quotes. Need breakdown regimes. Could be long.

RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps. Trace from SORT, DeepSORT, transformer, Transformer-XL, social force model, FAMNet virtual candidates. Multi-week traps: assuming hard association okay; tuning threshold; using appearance only; using recurrent state error accumulation; using sinusoidal positions non-convergence; using large N_enc causing instability; ignoring large-scale data. Cite pages. Need maybe mention [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 6], [PAGE 13].

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need model mental simulation: tracker under occlusion crisis may regress to constant velocity or last-detection bias; SoDA counter-trap: explicit occlusion state and context; clock: temporal window L_enc, future L_future, T_lost. Need maybe formalize recursive expectation: track T expects detection distribution; if p_occ > p_det, choose occlusion; if multiple tracks compete, assignment resolves. Need cite page 5. Could mention habits: thresholding similarity, buffer-and-recover [PAGE 3]. Counter-trap: learn occlusion embedding. Clock: frame rate 10 Hz, 32 frames training [PAGE 5], L_enc=5 [PAGE 6], future 2/5 [PAGE 6].

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need proof. Use detection channel. Let M_t detection indicator. If M_t=0 for all t in interval, no update. If detector false negative rate due weather exceeds survival bound. Formal: track kill if no associated detection for T_lost frames. If occlusion/absence duration D > T_lost^P, veto. If p_abs > 1 - (T_lost)^{-1/D}? Let's derive: Probability of at least one detection in T frames under iid drop p: 1-p^T. Survival require not all dropped for T_lost: if p^{T_lost} > survival threshold. But track management kills after consecutive Tlost without detection. If occlusion deterministic length D, if D >= Tlost^P then track killed unless re-identified? Actually if no associated detection for Tlost consecutive frames, killed. So if D >= Tlost^P, veto. For promoted track Tlost=5 [PAGE 5]. With Waymo pdrop=0.4 [PAGE 8], probability of 5 consecutive drops = 0.4^5=0.01024 under independent approximation. But actual drops are consecutive Ndrop U(1,5) with pdrop every 10 frames [PAGE 6], so long occlusions can happen. Weather: if detector FN increases pdrop toward 1, information rate goes to zero. Use channel capacity: I(X;T) ≤ H(M) etc. If detection process has no detections, identity info only prior. Need not invent. Biomechanical? For pedestrians in MOT17, motion constraints; but maybe physical veto: impossible accelerations. Could state constant velocity baseline fails when actual acceleration violates CV beyond prediction covariance; IOU tracker poor in controlled Waymo [PAGE 6, Table 1]. Need cite: IOU and Center perform poorly as constant velocity motion models fail during occlusions [PAGE 6]. Weather: rain/fog/lens flare not directly in paper but physical. Need be careful: source doesn't mention weather except maybe autonomous driving scenes. We can reason as external physical constraint but not cite? It asks physical/biomechanical/weather veto proof. We can derive general proof using paper's detection drop model. Weather increases p_drop. Could say if weather-induced false negative probability p_w causes p_eff > p* where (p_eff)^{T_lost} > epsilon, track termination. Need maybe define epsilon survival tolerance.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions. Need verifiable. Use tables. Scenario 1: N_enc=4, L_enc=10 vs N_enc=2; source says N_enc>3 unstable, Table 3 only up to 3. Prediction: validation MOTA lower or non-convergence. Verifiable by reproducing controlled environment pdrop=0.3. Scenario 2: Disable occlusion state at pdrop=0.4; prediction MOTA lower than with Occ; Table 2 gain w/ Occ 4.8 at pdrop 0.4, Table 2(b) precision high. Scenario 3: Social force Np=10 remove AE; prediction MOTA drops and IDS increases; Table 8: IOU 86.6, Learned 88.0, Ours without? AE? Ours w/o AE? Table shows Ours 87.5 (no AE?), with AE+Occ 93.3. Need exact rows: Table 8: Method AE Occ MOTA IDS FP FN. IOU 86.6 14.6k; Learned 88.0 12.6k; Ours? row: Ours maybe no check? MOTA 87.5 IDS 13.8k; then check AE? 93.4 IDS 7.1k; Ours? check AE only? 87.3; AE+Occ 93.3. Need cite.

Need maintain XML well-formed. Use LaTeX inside text. Need escape? In final plain text. XML tags. Could include math with backslashes. Need not escape < except tags. But if use < in math like [t - L_enc, t], okay within text? XML parser might treat? Better avoid raw < in math except tags? In XML, content can contain < only if escaped. We can use \lt or words. Need avoid less-than symbols. Use \leq? In XML text, backslash okay. Use Unicode ≤ maybe okay. Avoid <. Use &lt;? Could use words: less than. For math, use \leq maybe rendered as text. The final may not be parsed strictly, but to be safe avoid raw < and >. Use \lt, \gt or "below". For equations with arrows, okay. Use LaTeX inline. Need no raw &? & in XML needs escape if strict. Use "and" instead of &. For equations with alignment, use no &. Maybe use \\[ ... \\]. But & not needed.

Need word count. Let's draft with robust detail. Need ensure each section enough. Total >1000. Let's aim 1800-2500 words.

Potential issue: user says "DRIVE SOURCE" maybe expects to "drive" source, maybe need output only analysis. We can do.

Need include exact [PAGE N] markers and verbatim quotes. Need quote exact. Could quote short phrases. Need exact page citations. For page 4 equation, quote: "where the logits are the attention values between the track embeddings and the detection embeddings." Need exact. For page 4: "our method explicitly reasons about occlusions by attending to a separate occlusion state" is page 4? Actually figure caption page 4? It says Figure 3 caption page 4. Quote: "Our method explicitly reasons about occlusions by attending to a separate occlusion state." [PAGE 4]. Page 6: "we choose Lenc = 5 and Nenc = 2 in all remaining experiments." [PAGE 6]. Page 6: "with Nenc > 3, we observe that it takes the model much longer to converge" exact? Text: "However, with Nenc > 3, we observe that it takes the model much longer to converge, while with Nenc = 3, it takes the model only a few epochs. In fact, we found that Nenc > 3 often resulted in unstable states in our experiments." Need quote maybe. Avoid > raw? It appears in quote. If XML, > is okay in text? > is allowed, < is not. > okay. But maybe safe? It's okay. Use quotes with >. Could use "Nenc > 3". > not forbidden. The raw < only issue. But we can avoid.

Need cite Table values: Table 2 (a) pdrop 0.4 Gain w/ Occ 4.8 [PAGE 8]. Table 2 (b) precision 91.9/93.3 [PAGE 8]. Table 3 Nenc/Lenc [PAGE 8]. Table 4 future info [PAGE 8]. Table 8 social force [PAGE 13].

Need formal units. For equations:
- Detection measurement x_i=(x_1,y_1,x_2,y_2) normalized to [0,1] by camera width and height [PAGE 5]. Units: normalized image units (NIU), dimensionless fraction of image dimension.
- time index t in frames; frame interval Δt=0.1 s for Waymo 10 frames per second [PAGE 5]. L_enc=5 frames = 0.5 s. Future L_future=2 frames =0.2 s [PAGE 6?]. Waymo sequences 20 s, 10 fps [PAGE 5].
- d_k=64 [PAGE 5], embeddings in real-valued feature space with dimension 64. LayerNorm normalizes each feature vector to zero mean/unit variance? But not exact. We can state assumptions.
- attention logits are dot products; if embeddings normalized or scale, logits dimensionless; softmax yields probability distribution over candidate set of size N_cand+1, sum to 1 [PAGE 4].
- loss cross entropy in nats if natural log, bits if log base 2. Paper likely uses natural log; units nats per track. Could state if log base e. Cross-entropy loss L(T) dimensionless information penalty measured in nats if natural log. Need exact? Use formal.
- Social force: F0 base force magnitude, R tolerance radius; positions normalized; velocity v_i in NIU/frame; force arbitrary simulation units; equation from page 13.

Breakdown regimes:
1. Softmax denominator: if all logits equal, uniform; occlusion probability = 1/(M+1). If M large, baseline occlusion prior decays. Need formal: if zT orthogonal to all z_d and z_occ? Not necessary. If z_occ embedding dominates, false occlusion.
2. Attention measurement encoding: j over detections in previous L_enc frames [PAGE 4]. If L_enc too small, insufficient context; too large, marginal improvements and compute complexity [PAGE 6]. N_enc >3 unstable [PAGE 6].
3. Relative encoding: learned R_k for k in [-L_enc,L_enc]; if relative time difference outside range? The encoding may not generalize; they limit window.
4. Track management: T_lost^U=2, T_lost^P=5 [PAGE 5]; if occlusion longer than 5 frames without association, promoted track killed, unless future info? Online no future. With future L_future, can delay association but deployment latency.
5. Data association at inference: argmax p(d_j|T); if two tracks compete, assignment uses Hungarian/greedy [PAGE 5]; if detections identical, ambiguity.

Need THINK_TRACE maybe include derivations:
Start with detection set D_t. Measurement embedding z0. Self-attention: q,k,v. For each i, attention weight α_{ij}=softmax(A_{ij}/sqrt(d_k)? Actually equation 1 includes scaling. Relative encoding modifies A. Then z^N. Association: track embedding z_T is latest associated detection embedding. Probability with occlusion class. Loss. Inference. Then track management. Then discuss gray zones: The method relaxes hard association in encoding, but final association is still discrete argmax; hard errors can still occur if argmax wrong. The occlusion state is a pseudo-class; high precision means conservative occlusion, may sacrifice recall. The learned motion is implicit; no explicit covariance/uncertainty; cannot guarantee physical plausibility. Large-scale data helps [PAGE 6] but domain shift can hurt, e.g. MOT17 varying camera/frame/resolution [PAGE 8]. Need mention.

Need RETROCAUSAL_GENEALOGY: maybe include lineage:
- tracking-by-detection [PAGE 1]
- hard association error propagation [PAGE 2]
- multi-hypothesis and thresholds [PAGE 2]
- SORT track management [PAGE 5]
- DeepSORT max similarity [PAGE 2]
- recurrence methods bad states [PAGE 2-3]
- attention/Transformer [PAGE 3-4]
- Transformer-XL relative encoding [PAGE 4]
- FAMNet virtual candidates [PAGE 3]
- social force model [PAGE 13]
Multi-week traps: overfitting thresholds; recurrence collapse; appearance ambiguity; sinusoidal non-convergence; too many layers; small dataset (MOT17) mismatch. Need maybe mention "multi-week" as engineering traps over development cycles.

RECURSIVE_THEORY_OF_MIND: Need maybe formal recursive belief. Let track T have belief over next detection location. In crisis (occlusion), naive habit regresses to last detection or constant velocity; if competing detection near, ID switch. SoDA counter-trap: maintain latent embedding and occlusion class; if p_occ > p_det, do not update position? Actually track state embedding? It maintains state embedding for future association [PAGE 4]. Clock: L_enc=5, L_future=2/5, T_lost. Need discuss online vs delayed. Need maybe mention training sequence 32 frames random start [PAGE 5]. Crisis habit regression vs counter-trap vs clock: maybe table? Use paragraphs.

CROSS_LAYER_VETO_ADJUDICATION: Need proof. Let's create formal theorem style.
Define detection process: At frame t, true object state x_t. Detector outputs D_t. For a target, association indicator a_t=1 if detection assigned. If no detection due occlusion/weather, a_t=0. Track kill if consecutive zeros >= T_lost^P. Therefore necessary condition for track survival through interval [t_1,t_2]: maximum zero-run length z_max < T_lost^P. If physical occlusion duration D_occ >= T_lost^P, veto. If detector false negative probability q_t, probability of zero-run length L under independence is ∏ q_t ≤ q_max^L. For target survival over T_lost, require q_max^{T_lost} small relative to acceptable termination risk. With p_drop=0.4 and T_lost=5, q^5=0.01024 under independence; but simulated drops are consecutive Ndrop U(1,5), so long runs possible [PAGE 6]. Weather increases q; as q→1, information rate H(1-q)+... goes to 0. Actually binary entropy H_b(q) = -q log q -(1-q)log(1-q). If q→1, H_b→0. The channel from true identity to detection output vanishes. No tracker can recover identity without external priors. Physical motion veto: constant velocity fails when acceleration exceeds model; paper states IOU and Center perform poorly because constant velocity fails during occlusions [PAGE 6]. So any tracker relying only on CV/IOU vetoed in interactive scenes. Biomechanical for pedestrians? Could mention MOT17 pedestrians have non-holonomic? But not necessary. Need weather: rain/snow/fog/glare not in paper but physical. Use p_drop as proxy. Need cite page 6 for pdrop simulation, page 5 for Tlost. Need maybe quote "A track will be killed in the system if there is no associated detection in consecutive Tlost frames." [PAGE 5]. Good.

RLVR_COUNTERFACTUAL_VETOES: Need 3 verifiable scenarios + predictions. Maybe as bullet list.
Scenario A: Over-depth encoding. Intervention: set N_enc=4, L_enc=10 in controlled Waymo p_drop=0.3. Prediction: convergence slower/unstable and MOTA not exceed N_enc=3 (92.7) or N_enc=2 (92.2?) Table 3: Lenc=10: Nenc1 91.6, Nenc2 92.2, Nenc3 92.7. Source says Nenc>3 unstable. Verifiable: if reproduced. Need cite [PAGE 6], [PAGE 8 Table 3].
Scenario B: Occlusion state removed under high drop. Intervention: p_drop=0.4, compare w/ Occ vs w/o Occ. Prediction: MOTA gain from Occ positive ~4.8 and precision > recall. Table 2: Gain w/ Occ 4.8 at 0.4; Table 2(b) precision 91.9/93.3, recall 57.9/64.2. Verifiable. If occlusion state removed, false associations increase? Need prediction.
Scenario C: Context ablation in social force Np=10. Intervention: remove attention measurement encoding. Prediction: MOTA falls from 93.3/93.4 to 87.3/87.5 and IDS rises from ~7.1k to 14.1k. Table 8. Verifiable. Or future info: with L_future=0 MOTA 92.5 vs L_future=2 93.3, IDS 24.5k vs 22.0k [PAGE 8 Table 4]. But social force stronger.

Need maybe include "RLVR" as reinforcement learning verifiable rewards? We can define: counterfactual veto is a test that if reward model or policy claims soft association universally beneficial, these interventions can verify limits. Need not overdo.

Need ensure no prohibited terms. Let's scan for "spread", "total", "odds". Avoid "total" maybe. Use "aggregate". Avoid "line" maybe except "lines"? The user says never mention spreads, totals, moneylines, or odds. Could "baseline" okay. "online" okay. "tracking-by-detection" okay. "line" in "timeline"? Avoid. "outline"? okay? Maybe avoid "line" entirely? Could be hard. But exact terms likely betting terms. We can use "sequence" not "line". Avoid "totals" as noun. Avoid "total" maybe use "overall". But "total" not betting? Better avoid. "odds" avoid. "spread" avoid. "moneylines" avoid.

Need word count. Let's draft in final. Need maybe include headings exactly. The final can start with <THINK_TRACE>. Ensure all sections present. No extra commentary. Need maybe no markdown? XML-like. Fine.

Let's draft each section with details.

Potential issue with XML tags containing content with unescaped ampersands. Avoid &. Use "and". Use LaTeX with &? Avoid align. Use equations with no alignment. Use \begin{equation}? Could include &? No. Use simple.

Need maybe use Unicode arrows? okay. But XML maybe okay. Use LaTeX like $...$.

Let's compose.

THINK_TRACE: Need >=400 words. I'll write ~650 words. Include derivation and gray-zone audit. Cite pages. Need quotes.

Draft:
"The causal chain begins with raw detection measurements..." mention [PAGE 1] tracking-by-detection. Then measurement embedding [PAGE 3]. Attention equation [PAGE 4]. Soft association. Occlusion. Track management. Gray zones: final argmax, latest detection, threshold absent but learned occlusion precision, domain shift. Need quotes: "collapse multiple data association hypotheses into a single mode" [PAGE 2]. "unrecoverable states" [PAGE 2/8?]. "track embedding zT is simply the embedding of the latest associated detection" [PAGE 4]. "If p(o|T) > p(d_i|T), the track will be marked as “occluded”" [PAGE 5]. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Need formal. Use bullet-like paragraphs. Include equations.
Equation 1: measurement embedding? z^0 = FC etc [PAGE 3]. Attention: z_i^o = sum_j softmax(Q_i K_j^T/sqrt(d_k)) V_i. Need note source equation has V_i not V_j? Actually equation: z_i^o = sum_j softmax(Q_i K_j^T sqrt(dk)) V_i. It seems V_i constant over j? In standard attention should V_j. Source text says "updated by using a weighted sum of past measurements" but equation uses V_i maybe typo. Need handle carefully: quote equation as source: z_i^o = sum_j softmax(...) V_i. But if V_i outside sum, it's weird. Could note formalization: source writes V_i; interpreted as value features from context j after linear transform, consistent with "weighted sum of past measurements" [PAGE 4]. Need avoid inventing? We can state: The paper writes V_i, while textual description implies context values; for units, weights dimensionless. Hmm. Need exact? Could quote. But if we formalize as V_j, might be seen as altering. Maybe present both: source operator as printed: V_i; operational intent: V_j. Need not overcomplicate. Use "source operator (as printed)".

Relative time equation: A_{i,j}=... with R_k. LayerNorm: z^o=LayerNorm(F(z^i)+z^i). Association probability. Loss. Track management. Simulation equations. Social force. Units and breakdown.

Need include page citations. Could have many [PAGE X].

RETROCAUSAL_GENEALOGY: ~300 words.

RECURSIVE_THEORY_OF_MIND: ~300 words.

CROSS_LAYER_VETO_ADJUDICATION: ~400 words with proof.

RLVR_COUNTERFACTUAL_VETOES: ~350 words. Total maybe 2300.

Need ensure no raw < in equations. Use \lt if needed. For intervals [t - L_enc, t] okay. For "Nenc > 3" uses > okay. For "p(o|T) > p(d_i|T)" uses > okay. For "less than" avoid. For "dk" no. For "z_i^o = sum_j softmax(...)" no.

Need maybe mention "SI/information/probability units". We can explicitly state: positions in normalized image units, time in frames/seconds, logits dimensionless, probabilities dimensionless, cross-entropy nats, attention entropy bits. Good.

Need avoid "total". Use "aggregate".

Let's think about exact quotes. Need verbatim. Use quotes:
- [PAGE 1] "tracking-by-detection" maybe exact? It says "In the commonly used “tracking-by-detection” paradigm". Could quote.
- [PAGE 2] "collapses multiple data association hypotheses into a single mode" exact.
- [PAGE 2] "unrecoverable states" maybe page 2: "may lead to unrecoverable states." Yes.
- [PAGE 3] "break up the causality between spatiotemporal information aggregation and data association." exact? Page 3: "we propose to break up the causality between spatiotemporal information aggregation and data association." Good.
- [PAGE 4] "where the logits are the attention values between the track embeddings and the detection embeddings." exact.
- [PAGE 4] "the track embedding zT is simply the embedding of the latest associated detection of a trajectory." exact.
- [PAGE 5] "A track will be killed in the system if there is no associated detection in consecutive Tlost frames." exact.
- [PAGE 6] "we choose Lenc = 5 and Nenc = 2 in all remaining experiments." exact.
- [PAGE 6] "Nenc > 3 often resulted in unstable states in our experiments." exact? Text: "In fact, we found that Nenc > 3 often resulted in unstable states in our experiments." yes.
- [PAGE 8] maybe "the explicit occlusion reasoning becomes more beneficial as the rate of occlusions increases." caption exact? Table 2 caption: "The results in (a) suggest that the explicit occlusion reasoning becomes more beneficial as the rate of occlusions increases." Good.
- [PAGE 13] social force equation. Quote maybe "the particles movements are now depending on each other". Not exact? Use no need.

Need maybe include [PAGE 11] for architecture: input measurement x_i=(x1,y1,x2,y2), normalized? Page 11 says bounding box coordinates. Page 5 says normalized to [0,1]. Use both.

Potential problem: The user says ">= 1,000-WORD DEPTH across these exact XML sections" and THINK_TRACE >=400. Need final word count. Let's estimate: THINK_TRACE 700, SOURCE 700, RETRO 350, ToM 350, VETO 500, RLVR 400 = 3000. Good.

Need not include any other text. Let's craft carefully.

Need avoid "line" maybe in "decision line"? no. "baseline" okay? It contains line? It's okay? They said zero betting lines, not word line. But baseline is technical. Fine.

Let's write.

Check for prohibited: "spread" none. "totals" none. "odds" none. "moneylines" none. "total" maybe? Avoid. I might use "aggregate" not total. "overall" okay. "sum" okay.

Need maybe mention "probability" units. Good.

Let's draft final.

Potential issue: XML content with LaTeX backslashes may be okay. Use no &. Use no <. If need "less than" use "below". For quote with "Nenc > 3" okay. For equation with \lt? maybe.

Let's produce final. Ensure all tags closed. Need maybe line breaks. Good.

Double-check THINK_TRACE word count. I'll write lengthy.

THINK_TRACE draft:
The derivation chain... [many sentences]. Need >=400. I'll ensure.

Let's compose in final.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain begins with the paper’s framing that multi-object tracking is a “tracking-by-detection” problem, where a tracker must fuse detections into consistent object tracks [PAGE 1]. The central failure mode identified by the authors is that conventional methods “collapse multiple data association hypotheses into a single mode,” which can propagate an incorrect association into later frames and create what the authors describe as “unrecoverable states” [PAGE 2]. SoDA’s countermeasure is to delay commitment: detections are embedded, contextualized through attention, and only then used to form soft association probabilities. The multi-hop causal chain is therefore: raw box measurement → learned measurement embedding → self-attention over a temporal window → contextual detection embedding → track-to-detection attention logits → softmax association distribution with an explicit occlusion class → discrete track-management decision.

The first hop is representation learning. A detection measurement \(x_{t,i}\) is mapped by a feed-forward network to a measurement embedding \(z^0_{t,i}\) [PAGE 3]. In the controlled Waymo experiments, the measurement is the bounding box \((x_1,y_1,x_2,y_2)\), normalized to \([0,1]\) by camera width and height [PAGE 5], and the network architecture uses fully connected layers followed by layer normalization [PAGE 11]. This normalization matters: if the input coordinates have heterogeneous scale, the learned embedding geometry and attention logits become poorly conditioned. The paper implicitly assumes that normalized coordinates are sufficient to encode position, extent, and some coarse motion cues.

The second hop is attention measurement encoding. Each detection embedding is updated by self-attention over detections from previous \(L_{\text{enc}}\) frames [PAGE 4]. The formal operator is a scaled dot-product attention update, followed by layer normalization and a feed-forward sublayer [PAGE 3][PAGE 4]. This means a detection representation is no longer isolated; it becomes a function of other detections in the scene. In information terms, the embedding \(z^N_{t,i}\) becomes a learned sufficient statistic for downstream association only if training has shaped it to retain identity-discriminative spatiotemporal dependencies. If two objects have nearly identical motion and appearance, the attention representation may become ambiguous, and the softmax association distribution will have high entropy.

The third hop is soft association. Instead of assigning each detection to exactly one track before updating the track representation, the model computes a categorical distribution over all candidate detections plus an occlusion state. The paper states that “the logits are the attention values between the track embeddings and the detection embeddings” [PAGE 4]. This is the key probabilistic move: the model replaces a hard discrete assignment with a normalized probability vector. In units, the logits are dot products in a learned embedding space; if embeddings are not explicitly normalized, the logits are not automatically bounded, so softmax temperature is implicit. The resulting probabilities are dimensionless and sum to one across the candidate set, including occlusion.

The fourth hop is occlusion reasoning. The authors introduce a learned occlusion embedding \(z_{\text{occ}}\) and define an occlusion probability. During inference, “if \(p(o|T) > p(d_i|T)\), the track will be marked as ‘occluded’ and does not associate with any detection” [PAGE 5]. This is not a threshold on geometric similarity; it is a learned class decision inside the association distribution. The ablation evidence supports this: explicit occlusion reasoning yields large gains under high simulated drop probability, with the paper noting that “the explicit occlusion reasoning becomes more beneficial as the rate of occlusions increases” [PAGE 8]. At drop probability 0.4, the gain with occlusion reasoning is 4.8 MOTA points [PAGE 8], while the occlusion classifier operates with high precision rather than high recall [PAGE 8].

The gray-zone audit reveals several non-obvious failure boundaries. First, the method is soft during encoding but still discrete during final association: “each track will associate with the detection \(d_i\), \(i = \arg\max_j p(d_j|t)\)” [PAGE 5]. Thus a catastrophic wrong argmax can still occur if the contextual embedding is misleading. Second, the track embedding is “simply the embedding of the latest associated detection of a trajectory” [PAGE 4]. This creates a vulnerability: if the latest association is wrong, the track query for subsequent frames may be corrupted, even though earlier context could have been informative. Third, the occlusion state is optimized for high precision; this protects against false association but may increase missed detections when the model is uncertain. Fourth, the architecture has a practical stability boundary: the authors report that “Nenc > 3 often resulted in unstable states in our experiments” [PAGE 6], so deeper encoding is not automatically better. Fifth, large-scale data dependence is explicit: the learning curves suggest the method benefits most from modern large-scale datasets [PAGE 6], but on heterogeneous small benchmarks such as MOT17 the same learned association prior may transfer poorly because “the camera view, the frame rate, and the image resolution vary substantially across sequences” [PAGE 8]. The resulting gray zone is that SoDA is best understood as a context-sensitive probabilistic associator with strong assumptions about temporal locality, learned occlusion priors, and sufficiently informative detections.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source provides several formal operators. First, the measurement embedding operator is defined implicitly: for a new detection at time \(t\) with raw measurement \(x_{t,i}\), a feed-forward network computes \(z^0_{t,i}\), followed by attention measurement encoding layers [PAGE 3]. In the Waymo setup, the measurement is normalized to \([0,1]\) with camera width and height [PAGE 5], and the network architecture uses bounding box coordinates \((x_1,y_1,x_2,y_2)\) as input unless appearance features are used [PAGE 11]. The normalized spatial unit is dimensionless fractional image coordinate. If \(W\) and \(H\) are camera width and height in pixels, then \(x_1/W, y_1/H, x_2/W, y_2/H\) are dimensionless. Time is measured in frames; Waymo sequences are labeled at 10 frames per second [PAGE 5], so one frame corresponds to \(0.1\) s.

The core attention update is given as
\[
z^o_i = \sum_j \operatorname{softmax}\left(\frac{Q_i K_j^\top}{\sqrt{d_k}}\right) V_i,
\]
where \(Q_i = W_q z_i\), \(K_i = W_k z_i\), and \(V_i = W_v z_i\), with embedding size \(d_k\), and \(j\) indexes detections in previous \(L_{\text{enc}}\) frames [PAGE 4]. In the printed equation the value term appears as \(V_i\); the surrounding text states that each embedding is updated by a weighted sum of past measurements [PAGE 4]. Operationally, the attention weights are dimensionless nonnegative numbers that sum to one over the candidate index set. The logits have the units of the learned embedding inner product; if embeddings are not explicitly normalized, the softmax temperature is implicit. The model uses \(d_k = 64\) for fully connected layers [PAGE 5].

The relative-time operator is
\[
A_{i,j} = Q_i K_j^\top + Q_i R_{i-j}^\top + u K_j^\top + v R_{i-j}^\top,
\]
where \(R_k \in \mathbb{R}^{d_k}\), \(k \in [-L_{\text{enc}}, L_{\text{enc}}]\), is a learned relative attention feature, and \(u, v \in \mathbb{R}^{d_k}\) are bias terms [PAGE 4]. The authors state that they directly learn \(R_k\) because sinusoidal positional encoding “often leads to non-convergence,” whereas directly learning \(R_k\) yields superior performance [PAGE 4]. The breakdown regime is clear: relative-time features are only defined for offsets inside the learned window. If the temporal offset exceeds \([-L_{\text{enc}}, L_{\text{enc}}]\), the learned relative representation is outside its training support unless extrapolation is explicitly learned.

The layer normalization and residual operator is
\[
z^o = \operatorname{LayerNorm}(F(z^i) + z^i),
\]
where \(F\) is either the self-attention sublayer or the point-wise feed-forward sublayer [PAGE 3]. This operator assumes residual stability; if the residual magnitude grows beyond normalization capacity, training instability can occur. The paper reports such instability when the number of encoding layers is too large: “with \(N_{\text{enc}} > 3\), we observe that it takes the model much longer to converge,” and “Nenc > 3 often resulted in unstable states in our experiments” [PAGE 6]. The selected operating point is “we choose \(L_{\text{enc}} = 5\) and \(N_{\text{enc}} = 2\) in all remaining experiments” [PAGE 6].

The association operator is a softmax over detections and an occlusion class:
\[
p(d_i|T) = \frac{\exp(z_i^{d\top} z_T)}{\exp(z_{\text{occ}}^\top z_T) + \sum_j \exp(z_j^{d\top} z_T)}.
\]
The paper states that “the logits are the attention values between the track embeddings and the detection embeddings” [PAGE 4]. The denominator includes the occlusion term, so the distribution is over \(M+1\) classes when there are \(M\) detections. The probability units are dimensionless. If all logits are equal and there are \(M\) detections, the occlusion probability is \(1/(M+1)\). If \(z_{\text{occ}}\) has systematically larger inner product with \(z_T\) than all detections, the track is classified as occluded; during inference this occurs when \(p(o|T) > p(d_i|T)\) for the best detection [PAGE 5].

The training operator is cross-entropy association loss:
\[
L(T) = -y_{T,o}\log p(o|T) - \sum_i y_{T,i}\log p(d_i|T),
\]
where \(y_{T,i}=1\) if track \(T\) and detection \(d_i\) share identity, otherwise zero, and \(y_{T,o}=1\) only when all \(y_{T,i}=0\) [PAGE 4]. If natural logarithms are used, the loss is measured in nats per track; if base-2 logarithms are used, the unit is bits per track. The loss assumes that ground-truth identity labels or simulated association labels are available for training. In the controlled ablation, detections are ground-truth labels with simulated drops [PAGE 6].

Track management is a discrete survival operator. The paper states: “A track will be killed in the system if there is no associated detection in consecutive \(T_{\text{lost}}^P\) frames” [PAGE 5]. The implementation uses \(T_{\text{lost}}^U = 2\) for unpromoted tracks and \(T_{\text{lost}}^P = 5\) for promoted tracks [PAGE 5]. This creates a temporal cutoff in frame units. At Waymo’s 10 Hz labeling rate, five frames correspond to 0.5 s. If no associated detection occurs for five consecutive frames, the promoted track is terminated, unless the system is operating in a delayed-association mode.

The simulation operators are also formal. Positions update as
\[
p_{t+1} = p_t + v_t,
\]
with initial positions uniform in \([0,1]^2\) and velocities drawn from a normal distribution [PAGE 11]. Measurement noise is added as \(d = p + n_d\), \(n_d \sim \mathcal{N}(0,0.05)\) [PAGE 12]. The social force operator is
\[
f_i = \sum_j F_0 e^{-\|p_i-p_j\|/R} \cdot \nabla(p_i-p_j),
\]
where \(j\) indexes other particles, \(F_0\) is base force magnitude, \(R\) is tolerance radius, and the gradient term acts as a directional unit vector from \(j\) to \(i\) [PAGE 13]. The positional units are normalized simulation coordinates; force units are arbitrary simulation units because no physical unit calibration is provided. The breakdown regime is that if interparticle distance approaches zero, the exponential term approaches \(F_0\) but the direction becomes unstable; if distances greatly exceed \(R\), interactions vanish and context modeling loses utility.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of SoDA is a reaction against error-prone hard association in tracking-by-detection systems. Classical online trackers such as SORT rely on simple motion prediction and assignment, while appearance-based extensions such as DeepSORT compute similarity between detections and track histories [PAGE 2]. The paper argues that these approaches often assume “their track state estimates updated by only the hard-associated detections capture all information relevant for subsequent tracking decisions,” and that this assumption is suboptimal because it discards unselected candidates and ignores association errors [PAGE 2]. This is the historical hinge: the field moved from pairwise similarity, to recurrent aggregation, to attention-based contextual aggregation.

Multi-hypothesis tracking and thresholded candidates were earlier partial remedies. The authors note that such methods require complex heuristics and hyper-parameter tuning and may overfit scenes [PAGE 2]. SoDA’s retro-causal move is to replace those heuristics with a learned latent association distribution. The paper explicitly says it wants to “break up the causality between spatiotemporal information aggregation and data association” [PAGE 3]. In genealogy terms, this separates representation learning from discrete assignment, allowing the representation to be trained without committing to a single trajectory history.

The attention lineage is also explicit. The authors formulate tracking as a sequence-to-sequence problem inspired by natural language processing and Transformer networks [PAGE 2][PAGE 3]. They adopt the Transformer structure with self-attention and point-wise feed-forward sublayers, but modify relative position encoding using Transformer-XL-style learned relative features [PAGE 4]. The paper notes that sinusoidal positional encoding often caused non-convergence, so learned relative features were used instead [PAGE 4]. This is a multi-week trap: adopting a positional encoding because it is standard can silently destabilize training when the temporal context is short and the learned attention must discriminate relative frame offsets.

Another lineage branch is occlusion reasoning. Prior methods use buffer-and-recover mechanisms, extrapolation, or appearance re-identification after a similarity threshold indicates occlusion [PAGE 3]. FAMNet uses virtual candidates, but the paper states that FAMNet chooses virtual candidate locations by heuristics, whereas SoDA learns the occlusion embedding without hand-crafted rules [PAGE 3]. The genealogy therefore runs from explicit motion models, to heuristic occlusion buffers, to learned occlusion classes. The trap is that a learned occlusion class can become overly conservative: if the training distribution has many prolonged occlusions, the model may predict occlusion too readily and reduce recall.

A third lineage is large-scale data dependence. The paper’s learning curves indicate that the method benefits most from large datasets [PAGE 6]. This is historically important because earlier MOT benchmarks are small and heterogeneous. The paper warns that MOT17 has varying camera view, frame rate, and image resolution across sequences [PAGE 8]. The multi-week trap is assuming that a context model trained on one large autonomous-driving corpus will transfer without degradation to pedestrian sequences with different motion statistics, occlusion patterns, and detector behavior.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive mental model of SoDA is that each track maintains a latent belief about which future detection, if any, should be associated with it. In crisis conditions, such as occlusion or detector false negatives, a naive tracker habitually regresses to the last associated detection or a constant-velocity prediction. The paper criticizes this because “an erroneous data association can cause the internal representation to end up in a bad state, which the method may not be able to recover from” [PAGE 2]. The recursive habit is: last detection → motion extrapolation → nearest candidate → hard assignment. If the nearest candidate is another object, identity switch occurs. If no candidate is close enough, the track may die or remain stale.

SoDA’s counter-trap is to model the crisis explicitly. Instead of forcing the track to choose a detection when uncertain, the track can choose the occlusion class. The paper states that the model “explicitly reasons about occlusions by attending to a separate occlusion state” [PAGE 4]. The recursive update becomes: contextual embedding → compare track embedding against detection embeddings and occlusion embedding → if best detection wins, associate; if occlusion wins, preserve latent state and wait. This is a recursive theory of mind because the track’s next query depends on its belief about whether it is visible, occluded, or facing a false negative. The track does not merely ask “where is the nearest box?”; it asks “which hypothesis explains the current detection set best, including the possibility that I am not detected?”

The clock layer is equally important. The model’s effective memory is bounded by \(L_{\text{enc}}\), selected as 5 frames [PAGE 6]. At 10 Hz, this is 0.5 s of past context. The future-information experiments show that delaying association by \(L_{\text{future}} = 2\) or \(5\) frames improves performance, with \(L_{\text{future}}=2\) yielding MOTA 93.3 versus 92.5 for no delay, and lower identity switches [PAGE 8]. This implies that the recursive belief is improved by a short forward clock, but only if deployment latency permits delayed association. The survival clock is \(T_{\text{lost}}^P=5\) frames for promoted tracks [PAGE 5]. If occlusion lasts longer than this without association, the track is killed. Thus the theory of mind is bounded by three clocks: encoding clock \(L_{\text{enc}}\), optional future clock \(L_{\text{future}}\), and survival clock \(T_{\text{lost}}\).

A counter-trap against SoDA would be to assume that soft association removes discrete failure. It does not. At inference, the final decision is still \(\arg\max_j p(d_j|T)\) unless occlusion wins [PAGE 5]. The recursive risk is that the model’s learned occlusion prior becomes a self-fulfilling habit: if it predicts occlusion in ambiguous crowds, it avoids false association but may also stop updating true detections. The empirical mitigation is that the occlusion classifier operates at high precision: at drop probability 0.3, precision is 91.9 with attention measurement encoding, and at drop probability 0.4, precision is 93.3 with the occlusion-enabled variant [PAGE 8]. This supports a conservative crisis policy, but it also means recall is lower, so some true detections may be missed by the association process when the occlusion class dominates.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto proof can be constructed from the paper’s detection, occlusion, and track-management operators. Let \(a_t \in \{0,1\}\) indicate whether a track receives an associated detection at frame \(t\). The track-management rule states that a promoted track is killed if there is no associated detection in consecutive \(T_{\text{lost}}^P\) frames [PAGE 5]. With the reported implementation, \(T_{\text{lost}}^P=5\) [PAGE 5]. Therefore, a necessary condition for a promoted track to survive an interval is that the maximum consecutive run of \(a_t=0\) must be strictly below five frames. If a physical occlusion, weather-induced detector failure, or false-negative burst produces a run of five or more frames without association, the online tracker vetoes continued identity maintenance.

Formally, let \(D_{\text{occ}}\) be the duration in frames of a visibility outage. If
\[
D_{\text{occ}} \ge T_{\text{lost}}^P,
\]
then an online promoted track is terminated under the paper’s rule. This is not a soft probabilistic failure; it is a hard survival veto. The controlled experiments emulate such outages by dropping consecutive bounding boxes. The paper states that it simulates occlusions and missed detections by randomly dropping \(N_{\text{drop}} \sim U(1,5)\) consecutive bounding boxes for every 10 frames with probability \(p_{\text{drop}}\) [PAGE 6]. Because the maximum drop length in that simulation is 5, a drop event can exactly exhaust the promoted-track survival budget.

For stochastic detector failures, define \(q_t = \Pr(a_t=0)\), the probability that a true object is not associated at frame \(t\). Under an independent approximation, the probability of a zero-run of length \(L\) is approximately
\[
\Pr(L \text{ consecutive misses}) \le q_{\max}^L,
\]
where \(q_{\max}\) is an upper bound on the per-frame miss probability. The survival condition against random extinction over a window of \(T_{\text{lost}}^P\) frames requires that the probability of five consecutive misses be acceptably small. With \(q=0.4\), the independent approximation gives \(0.4^5 = 0.01024\), but the paper’s actual drop process uses consecutive drops of up to five frames [PAGE 6], so the effective risk of long outages is higher than a simple independent model would suggest. This is a physical veto: weather, glare, dense occlusion, or detector failure can increase \(q_t\) and force the zero-run distribution toward the survival boundary.

An information-theoretic veto follows. Let \(X\) be the latent object state and \(Y_t\) the detector output at frame \(t\). The mutual information \(I(X;Y_t)\) bounds how much identity information can be extracted from that frame. If weather or occlusion drives the detector false-negative probability toward one, then \(Y_t\) becomes almost deterministic and uninformative. In binary terms, the entropy of the detection indicator is
\[
H_b(q) = -q\log q - (1-q)\log(1-q).
\]
As \(q \to 1\), \(H_b(q) \to 0\). The channel from object state to detection output collapses. No association module, including SoDA, can recover identity information that was never observed. The model can only rely on prior motion or learned context, and if the observation channel is silent for longer than the survival clock, the track is vetoed.

A biomechanical veto also applies to motion-only baselines. The paper reports that IOU and Center trackers perform poorly in the controlled Waymo environment because “their constant velocity motion models fail to accurately predict the motion of objects during occlusions” [PAGE 6]. If actual acceleration or interaction forces violate the assumed motion model beyond the tracker’s uncertainty envelope, nearest-neighbor or intersection-over-union association will choose the wrong detection. SoDA reduces this veto by learning context, but it does not remove physical motion constraints: if a track’s latent embedding is driven by implausible detections, the model can still be misled. Thus the adjudication is: SoDA relaxes association commitment, but it cannot override detector silence, occlusion duration beyond \(T_{\text{lost}}^P\), or a collapsed observation channel caused by severe weather or detector failure.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios can be constructed directly from the paper’s reported operators and ablations.

Scenario 1: Over-deep encoding instability. Intervention: in the controlled Waymo environment with simulated drop probability \(p_{\text{drop}}=0.3\), increase encoding layers beyond the stable regime while keeping the encoding window moderate, for example \(N_{\text{enc}}=4\) and \(L_{\text{enc}}=10\). The paper’s selected operating point is \(L_{\text{enc}}=5\), \(N_{\text{enc}}=2\) [PAGE 6], and it reports that “Nenc > 3 often resulted in unstable states in our experiments” [PAGE 6]. Verifiable prediction: compared with \(N_{\text{enc}}=2\) or \(N_{\text{enc}}=3\), the deeper model will show slower convergence, unstable training, or no MOTA improvement beyond the stable table values. The source table reports MOTA 92.2 for \(L_{\text{enc}}=10, N_{\text{enc}}=2\) and 92.7 for \(L_{\text{enc}}=10, N_{\text{enc}}=3\) [PAGE 8]. If an experiment claims a large monotonic gain from \(N_{\text{enc}}=4\) without addressing instability, it is vetoed by the source’s reported breakdown regime.

Scenario 2: Occlusion-state ablation under high missed-detection probability. Intervention: compare the model with and without explicit occlusion reasoning at high drop probability, especially \(p_{\text{drop}}=0.4\). The paper reports that the gain with occlusion reasoning increases with occlusion rate: at \(p_{\text{drop}}=0.0\), the gain is -0.5 MOTA; at 0.1, 2.0; at 0.2, 2.5; at 0.3, 3.6; at 0.4, 4.8 [PAGE 8]. Verifiable prediction: removing the occlusion state at \(p_{\text{drop}}=0.4\) should reduce MOTA relative to the full model and should increase false associations or identity switches, because the model must either force an association or rely on weaker motion-only reasoning. The occlusion classification table also predicts a precision-recall trade-off: at \(p_{\text{drop}}=0.4\), the occlusion-enabled variant has precision 93.3 but recall 64.2 [PAGE 8]. If a counterfactual claims that a lower-threshold occlusion predictor improves MOTA without increasing false positives or missed detections, it is vetoed by the reported precision-oriented behavior.

Scenario 3: Context ablation under social forces. Intervention: remove attention measurement encoding in the synthetic social-force environment with \(N_p=10\) particles. The paper reports that with social forces, the IOU tracker achieves MOTA 86.6 and 14.6k identity switches, the learned baseline achieves 88.0 and 12.6k, while the proposed method with attention measurement encoding and occlusion reasoning reaches 93.3 or 93.4 MOTA and about 7.1k identity switches [PAGE 13]. Verifiable prediction: removing attention measurement encoding should reduce MOTA and increase identity switches because particles interact through repulsive forces and their motion depends on neighboring particles. The paper states that social forces make particle movements depend on each other, so “the state of the other particles would be an important information for reliably tracking a particle” [PAGE 13]. If a counterfactual claims that context encoding provides little benefit in dense interactive motion, it is vetoed by this table.

These counterfactual vetoes are verifiable because they rely on explicit interventions, explicit metrics, and reported operating regimes. They also define the boundary of the paper’s claim: soft data association improves tracking when detections are informative enough and when the temporal context is within the learned stability window, but it does not remove hard survival limits imposed by track management, detector failure, or physical interaction complexity.
</RLVR_COUNTERFACTUAL_VETOES>