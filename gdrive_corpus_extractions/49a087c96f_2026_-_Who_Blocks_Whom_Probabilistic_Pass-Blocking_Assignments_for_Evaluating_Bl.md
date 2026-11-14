---
source: "2026 - Who Blocks Whom Probabilistic Pass-Blocking Assignments for Evaluating Blockers and Pass Rushers in American Football - Brahme et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 42
model: deepseek/deepseek-v4.1-flash-1017
words: 8135
---

<NATIVE_REASONING>
We need answer user. Need produce GSE + GSI Frontier Reasoning Foundry format exact XML sections, >=1000 words depth, zero betting lines (no spreads/totals/moneylines/odds). Need analyze source. Need cite [PAGE N] markers and verbatim quotes when source pages provided. They gave PAGES:42 but source text has page numbers? Need cite exact [PAGE N] markers likely page numbers from source. Need use exact quotes. Need formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Need not mention betting. Need sections:
<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit.
<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.
Need total >=1000 words across these exact XML sections. Need likely answer as XML. No betting. Need identify this is research paper about HMM pass blocking. Need perhaps derive model. Need cite pages with exact quotes. Need page citations. Source text page numbers are visible: 1,2,3,... 30? It says PAGES:42 but text from PDF extraction likely 30 pages? We'll cite [PAGE 4], etc based printed page numbers. Need exact verbatim quotes. Need no fake ratios. We can state equations from paper. Need units: coordinates in yards (yd), time s, frames 10 Hz, STRAIN units? STRAIN = -v/d: (yd/s)/yd = s^-1, per second. Acceleration central diff yd/s^2. Orientation radians. Emission covariance σ_D^2 in yd^2. Entropy normalized dimensionless? Attention effective blockers dimensionless count. Pocket control probability dimensionless. Space generation gain? In paper Table 12 SGG dimensionless? Q_k space maybe yd^2? Eq 5 sum over grid w V Δa. V dimensionless exp(-||p-QB||/λ), w dimensionless, Δa yd^2, so Q yd^2. SGG maybe yd^2? They say credit fraction of value-weighted space, so yd^2. But Table 12 SGG values 1.129 likely normalized? Paper doesn't specify units. Need careful. We can note SGG units inherited from Q and possibly normalized; paper lists no unit. Need cite. Need breakdown regimes: HMM singularities, disengagement, small n_i, ρ boundaries, β separation, EM local optima, Kalman smoothing, STRAIN singularity d→0, hazard logit, cbg elbow, uniform orientation, initial ν. Need gray-zone audit. Need maybe discuss causal claims associational, not betting.

Need include "zero betting lines" no mention. The paper mentions "adjusted plus-minus" not betting line. Fine.

Need structure exact XML. Need maybe include citations with exact quotes. Use [PAGE N] and quote. Need not overdo but enough. Must ensure quotes exact from text. Need quote around HMM, STRAIN, transition, plus-minus, validation, limitations. Need derive multi-hop: tracking -> Kalman -> STRAIN -> HMM -> assignment -> metrics -> validation. Need audit gray zones: assignment vs actual blocking, disengaged state ambiguity, missed block, associational, scheme normalization, sample sizes, smoothing, model identifiability, multiple testing? Need not mention betting.

Need maybe title. The answer should only XML sections. Could include preamble? User asked exact XML sections; best output only the five sections. Must include >=1000 words. Need count maybe around 1800-2500 words. Need satisfy THINK_TRACE >=400 words. Need include all sections.

Need ensure no "odds" word? Invariant says never mention spreads, totals, moneylines, or odds. Avoid words "odds". "probability" okay. Avoid "bet". "plus-minus" okay. Do not say "betting". "expected" okay. "hazard" okay. "win" in paper? We can quote "won" maybe okay? It says "won his matchup"; not betting. Fine.

Need use LaTeX formal equations. In XML, backslashes fine. Need avoid malformed XML? Use `&`? We can avoid ampersands or escape. In quotes, use "pass-block / pass-rush" not ampersand. Avoid `<` `>` in text except tags. But equations may have `<`? Use `\le`, `\to`, `\in`. Avoid raw `<`. Need if quoting "≥" use unicode ≥. Fine. Need escape `&` if any. Use "and" not ampersand. Use `\text{yd}`. Need avoid unescaped `&` in LaTeX align? Use `\begin{aligned}` no ampersand? align requires & but in XML, ampersand must be `&amp;`. Better use separate display equations or `\begin{array}{l}`? Array needs & too. Use `\begin{aligned}` with `&amp;` in XML. That is okay. But simpler use separate `\[...\]` equations no alignment. Need avoid `<` in text. Use `\le`.

Need cite [PAGE 3] etc. Need exact quotes. Let's extract exact quotes:

Page 3: "We use the player tracking data provided by the 2023 NFL Big Data Bowl" and "at a frequency of 10 Hz (i.e., 10 frames per second)." Page 3 also STRAIN definition. Quote: "Let dijt be the Euclidean distance between rusher j and the quarterback at frame t of play i, and let vijt = ddijt /dt be its rate of change." And equation. Need exact quote: "STRAINijt = − vijt / dijt" maybe formatting. We'll quote.

Page 4: model core assumption: "the pass-blocker maintain their position such that they are between their pass-rusher assignment and their quarterback." Quote. Equation emission. Page 4 orientation. Page 5 transitions. Quote: "Lineman may also "stunt" (feint as if they are going towards a rusher, then recover back to their original assignment), which also constitutes a change in assignment." Page 5 initial distribution. Page 6 Table 1. Page 7 attention and entropy. Quote: "we define “attention” as the sum of the assignment probabilities assigned to a rusher at a given time-step". Page 8 disengagement and survival. Quote: "we take the time from the snap to the first time beaten by a rusher as a survival outcome, right-censored at the throw". Page 9 continuous model. Quote: "We take the one-frame change in STRAIN as the response". Page 12 external validation quote: "our smoothed assignment places a mean of 0.77 of its engaged probability mass on exactly that rusher and the model’s most-assigned rusher agrees with PFF’s designation on 87.5% of blocker-plays." Page 15 limitations quote: "our continuous time model is a step in the right direction; however, it is nonetheless an associational estimate." Good.

Need derive HMM evidence: emission bivariate normal plus von Mises. Formal:
I_{tbj} ∈ {1,...,n_i+1}; engaged j≤n_i:
O_{tb}|I_{tbj}=1 ~ N_2(γ_r^(g) R_{tj}+γ_q^(g) Q_t, σ_D^{2(g)} I_2), γ_r+γ_q=1.
Orientation p(η_{tb}|I_{tbj}=1)= exp{κ cos(η_{tb}-η_{tj}-π)}/(2π I_0(κ)).
Transition:
P(I_{tbj}=1|I_{t-1,bj}=1)=ρ_b
P(I_{tbj}=1|I_{t-1,bj'}=1)= (1-ρ_b-p_fail,b)/(n_i-1)
P(I_{tb,n_i+1}=1|...)=p_fail,b
P(dis|dis)=ρ_null
P(engage j|dis)= (1-ρ_null)/n_i.
Initial P. Need mention β. Softmax.
STRAIN units. Continuous model:
ΔSTRAIN_{ijt} ~ N( μ+R_j^Δ+Q_{q_i}^Δ( q_i - \sum_b B_b^Δ θ(b,j,t,i) )+ φ STRAIN_{ijt}, σ_Δ^2 )
Wait equation in source: `∆STRAINijt ∼ N µ + Rj∆ + Q∆ qi − ∑ Bb∆ θ(b,j,t,i) + ϕ STRAINijt , σ∆2 .` Need parse: mean = μ + R_j^Δ + Q_{q_i}^Δ - sum_b B_b^Δ θ + φ STRAIN. The extracted text has `Q∆ qi −` likely Q_{q_i}^Δ − sum. Not Q times ( ... ). Need formal accurate: 
\[
\Delta \mathrm{STRAIN}_{ijt} \sim \mathcal N\left(\mu + R_j^\Delta + Q_{q_i}^\Delta - \sum_{b\in X_i} B_b^\Delta \theta(b,j,t,i) + \phi\, \mathrm{STRAIN}_{ijt},\ \sigma_\Delta^2\right).
\]
Need not invent. Good.

Play-level:
y_{ij}=max_t STRAIN_{ijt}
y_{ij} ~ N( μ + R_j - ∑_b B_b θ(b,j,i)+ Q_{q_i}+O_{o_i}+D_{d_i}+D_{n_i}+Q_{t_i}+OF_i+DC_i+γ^T s_i, σ_y^2 )
Need maybe no random intercept notation. Fine.

Pocket control:
PC(p,t)=logit^{-1}(∑_{b∈B_t} I_b(p,t)-∑_{j∈R_t} I_j(p,t))
Q_k(t)=∑_{p∈D_t} w_k(p,t)V(p) Δa, V(p)=e^{-||p-QB_t||/λ}, λ=3 yd. Units. SGG:
W_b(i'→i)=θ(b,i';t)(1-θ(b,i';t+w))θ(b,i;t+w)(1-θ(b,i;t)).
SGG_i += ∑_b∑_{i'≠i} W_b(i'→i)(Q_{i'}(t+w)-Q_{i'}(t)).
Need cite page 11-12.

Need mention variance units. Attention effective blockers n_eff(j,t)=∑_b θ(b,j,t) dimensionless count. Entropy normalized. Block-failure survival RMST seconds, beat rate probability per block. Hazard logistic:
logit h_{b,t}=α+g1 \tilde t+g2 \tilde t^2+β_opp R_{j(b)}+u_b
with \tilde t standardized frames; u_b frailty. Units: h probability per frame, α log-odds, β_opp per unit standardized R. Need cite page 8.

Need mention Kalman smoothing equations maybe. State space:
θ_t=[z_t,\dot z_t,\ddot z_t]^T, θ_t=Gθ_{t-1}+j_t, G=...; y_t=[1,0,0]θ_t+ε_t, W=q ...; δ=0.1 s, q=1 yd^2/s^5, σ_p^2=10^-3 yd^2. Page 17. Need cite. This is source operator. Need mention breakdown: q units? q spectral density yd^2/s^5 yields W units? Fine.

Need "source operators and equations" maybe include sources. Need cite exact [PAGE N] markers. Use quotes. Need not preserve equation formatting.

Need "retrocausal genealogy": historical/scientific lineage and multi-week traps. Need discuss lineage: Franks et al. 2015 basketball defensive matchup HMM; Kalman 1960; Macdonald 2012 adjusted plus-minus; Nguyen et al. 2023 STRAIN; Fernández and Bornn 2018 space control; PFF charting; materials science strain rate; Big Data Bowl. Multi-week traps: eight-week sample, early-season roster/scheme variation, opponent quality, attrition, partial pooling, temporal leakage. Need no betting. "multi-week traps" maybe don't mention weekly lines. Use research traps: using future frames in filtered vs smoothed, right-censoring at throw, sample sizes, opponent adjustments, early season. Need cite pages. Maybe "retrocausal genealogy" should trace how later metrics retroactively shape earlier constructs? The source says adapts HMM. Need historical/scientific lineage and multi-week traps. Need "retrocausal" maybe discuss that later validation with PFF cannot be used to tune assignment? Need mention circularity: HMM assignments used to define attention, plus-minus, SGG; validation with PFF independent charting. But if one tunes cbg/κ on one week and evaluates on same eight weeks, leakage. Multi-week traps: first eight weeks only, no season holdout; model fit per position group; no temporal split. Good.

Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock. Hmm This is GSE/GSI framing. Need interpret: recursive theory of mind in sports? Need discuss model's recursive beliefs: blocker assignment latent state, blocker's belief? Crisis habit regression = when model under pressure, reverts to prior/sticky assignment (ρ high) or disengaged; counter-trap = opponent exploits predictable assignment; clock = time-to-throw horizon and survival. Need relate to HMM: high ρ for tackles = habit, low for backs. "counter-trap" maybe stunts/pass-offs designed to induce switch; model uses transition probability and pre-snap prior. "clock" = right-censoring at throw, RMST near 4s. Need mention recursive theory-of-mind: assignment is not observable intention, only geometric emission; model infers blocker's "responsibility" from position/orientation. Recursive: rusher's attention depends on blockers' beliefs; blocker entropy; coordinator schemes. Need avoid over-anthropomorphizing. Need mention "crisis habit regression" as under stress, blocker may revert to assignment stickiness or fail; "counter-trap" as stunts; "clock" as time-to-throw and hazard. Need cite pages 4-8. Need 200+ words.

Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. This paper has no weather/biomechanical data. Need adjudicate: tracking only position/orientation, no force, mass, leverage, fatigue, weather. Veto proof: metrics cannot support biomechanical causation or weather effects; must be vetoed if claims exceed tracking kinematics. Need mention physical layer: STRAIN uses Euclidean distance and velocity, not force; acceleration central difference; no contact/pressure sensors; no weather. "Veto" scenarios: if field surface/weather alters traction, tracking derivative changes; model has no covariates. Need mention player height/weight only in attribute priors, not biomechanics. Need cite page 9, page 9? "linear function of player attributes z = [position, height, weight]" page 9. Need "weather veto proof" no weather variables in source; cannot adjudicate weather. Need say any claim that a blocker's "hold rating" reflects strength/leverage independent of scheme/opponent is vetoed. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" three verifiable RLVR veto scenarios + predictions. Need design 3 counterfactual tests that would falsify/veto. Must be verifiable. RLVR = reinforcement learning with verifiable rewards? Need propose scenarios: (1) Temporal holdout/permutation: if HMM assignments are genuine, on held-out weeks PFF agreement remains ≥? Predictions. (2) Null disengaged/permutation: shuffle rusher identities within play; attention and entropy metrics should collapse; if not, veto. (3) STRAIN singularity/contact: add defender crossing to QB side; if B_b^Δ predicts pressure beyond PFF? Need specific predictions with thresholds. Need 3 verifiable veto scenarios + predictions. Must not be betting. Need include metrics, thresholds. "Veto if..." predictions.

Need total >=1000 words. Need maybe 2200 words. The THINK_TRACE must >=400. We'll make it ~600. All sections combined ~2500. Need exact XML. Avoid unescaped ampersands in text. In quotes, "PFF" no amp. Use "and" instead of &.

Need include "PAGES: 42" maybe no. Need exact [PAGE N] markers. Should cite page numbers as source printed. Use [PAGE 1], [PAGE 3], etc. Need maybe exact quotes with typographic quotes. That's okay.

Need be careful XML: special characters like `≤`, `≥`, `→`, `∈`, `×` okay. `&` only if raw. Avoid ampersand in "R&D". Use "and". Need if LaTeX contains `&` none. Need if quote contains `&` none. Need if text contains `<` no. Use `\le` instead. Good. Use `\text{...}` with underscores okay. Use `$`? Within XML text, `$` okay. But formal LaTeX should be display. Need not use `&` alignment. Use `\[ ... \]`. In XML, backslashes okay. Use `\mathrm{STRAIN}`. Good.

Need mention "SI units" explicitly. STRAIN s^{-1}; coordinates yd; velocity yd/s; acceleration yd/s^2; time s; orientation radians; variance yd^2; RMST s; hazard per frame; attention dimensionless count; entropy dimensionless normalized; PC dimensionless probability; Q yd^2. Good.

Need "assumptions" explicitly. We'll list.

Need "singularity/breakdown regimes" explicitly. Include:
- STRAIN diverges as d→0; central difference can amplify noise if d small; near-QB contact not modeled. Since STRAIN = -v/d, |STRAIN|→∞ as d→0 at fixed v; physically contact/sack breaks model.
- Bivariate normal emission with isotropic covariance; if σ_D^2→0, likelihood degenerates and assignments become deterministic; if σ_D^2 too large, disengaged/background absorbs. Model fixes Stage 1 then Stage 2 for identifiability. If n_i=1, switch probability denominator n_i-1 undefined/zero; transition formula singular for single rusher. Important! In transition formula `(1-ρ-pfail)/(n_i-1)`, if n_i=1, division by zero. This is a formal singularity. The paper doesn't mention? It says n_i number of rushers, likely >1 in pass plays but could be 1. Need note as breakdown. Good.
- ρ_b, p_fail,b Dirichlet with α; if ρ→1 and p_fail→0, no switches; if ρ→0 etc. 
- von Mises κ fixed =1; not estimated; if κ wrong orientation evidence misweights.
- cbg fixed by elbow; if background density equal emission, disengaged probability non-identifiable; Stage 2 holds Θ1 fixed for identification.
- Conditional logit β nonidentifiable if features separated; soft-label multinomial logistic needs regularization/Newton; complete separation can drive coefficients.
- EM local optima; 15 iterations fixed; no convergence guarantee.
- Kalman smoothing: q and σ_p fixed; model misspecification; smoothing uses future frames, but continuous model uses filtered posterior to avoid leakage. Good.
- Right-censoring at throw: RMST near play horizon; low event counts; estimates unstable for min 40 blocks.
- Opponent adjustment uses posterior mean R_j as covariate, not full uncertainty; measurement error attenuation.
- SGG uses product of probabilities and window w; if w too long, events overlap; if θ near 0/1, product unstable; no unit defined.

Need "gray-zone audit" in THINK_TRACE. Good.

Need "source operators and equations" include quotes. Maybe quote "The core assumption of our model..." with [PAGE 4]. Good.

Need "retrocausal genealogy": Include exact quotes:
[PAGE 2] "Franks et al. (2015) used a Hidden Markov Model (HMM) to assign each defensive player to offensive players in professional basketball."
[PAGE 3] "closely related to the concept of strain rate in materials science (Callister and Rethwisch, 2018)."
[PAGE 12] "independently hand-charted pass-block / pass-rush data from Pro Football Focus provides an external check." Need exact? Text: "the independently hand-charted pass-block / pass-rush data from Pro Football Focus provides an external check." Yes.
[PAGE 15] "it is nonetheless an associational estimate." Good.
Multi-week traps: "first eight weeks of the 2021 season" [PAGE 3], "Fit to the first eight weeks of the 2021 NFL season" [PAGE 1]. No temporal holdout. "one week of data" for cbg [PAGE 18]. "The value of cbg is chosen by identifying the elbow ... on one week of data" [PAGE 18]. This is a leakage/tuning trap. Good.

Need "recursive theory of mind": cite [PAGE 4] "we expect a blocker to be facing their assignment as well as in between the assignment and the quarterback." [PAGE 5] "an elite tackle anchored on an edge rusher rarely switches, whereas an interior lineman routinely passes off twists and stunts." Good. Use "crisis habit regression" as high ρ and p_fail. "Counter-trap" stunts. "Clock" right-censored at throw and RMST. Good.

Need "cross-layer veto adjudication": cite [PAGE 3] 10 Hz, [PAGE 8] geometry + STRAIN, [PAGE 9] attributes. "No force, contact, weather" is not in source but we can say source contains no such covariates. Veto proof: any biomechanical/weather claim is underdetermined. Need maybe "physical layer" includes mass? The model uses height/weight only as attributes in priors [PAGE 9]. "Biomechanical layer" no joint angles, force plates, leverage. "Weather layer" no temperature/wind/surface. So veto.

Need "RLVR counterfactual vetoes": Need 3 scenarios with predictions. Maybe:
1. Held-out week temporal generalization: fit on weeks 1-6, evaluate weeks 7-8. Veto if PFF top-assignment agreement drops more than 10 percentage points from 87.5% or engaged mass <0.67. Prediction: if valid, agreement remains 80-88%, engaged mass 0.70-0.80. This is verifiable.
2. Identity permutation null: within each play, randomly permute rusher labels or rotate orientation by π, preserve positions. Recompute attention/entropy. Veto if observed attention top-rusher ranking not separated from null (e.g., top attention > 95th percentile of null). Prediction: real top attention ~1.5 [PAGE 7], null ~1.0; entropy real top vs bottom separation.
3. Disengaged-state ablation and contact censoring: If p_fail captures shedding, removing disengaged state should degrade PFF assignment and beat-rate correlations; adding an oracle contact/sack flag should absorb variance. Veto if disengaged ablation improves or if beat rate correlation with PFF pressures collapses under contact censoring. Prediction: ρ_null near 1 [PAGE 6] and p_fail interior ~0.01-0.02, backs ~0.55-0.58; ablation reduces agreement below 80%; contact-censored beat rate stays positive ~0.17? Need precise. Or 3. STRAIN singularity stress test: inject small synthetic jitter near QB; if B_b^Δ ranking unstable, veto causal claims. Prediction: rankings remain stable if d > 2 yd, fail if d < 0.5 yd. But verifiable? We can use tracking noise. Good.
Need "RLVR" verifiable reward: each scenario has pass/fail threshold and predicted outcome. Good.

Need maybe no mention "betting lines". Good.

Need maybe answer should not be overly long? Desired 5. But user demands depth. We'll produce ~2500 words. Need ensure every section included exact tags. Use no markdown? XML sections with tags. Could include plain text inside. Need maybe use paragraphs. Need not include code fences. Need ensure XML valid-ish. Use escaped `&amp;` if needed. Avoid unescaped `&` entirely. There may be apostrophes in quotes okay. Use `\` in LaTeX okay. Need if use `%` no. Use `#`? no. Use `$` okay. Need if use `_` okay. Need if use `^` okay.

Let's draft carefully.

Need include "THINK_TRACE" with deep multi-hop derivation and gray-zone audit >=400 words. I'll write ~650 words. Include chain: raw tracking at 10Hz -> Kalman smoothed state -> central-difference STRAIN -> HMM latent assignment -> metrics -> validation. Need mention equations not full? Section operator has equations. In THINK_TRACE can describe.

Need mention "multi-hop": 
1. Observation model: RFID positions noisy; smoothing with constant acceleration Kalman; derivative.
2. Emission: blocker on segment rusher-QB; orientation opposite rusher; product density.
3. Transition: sticky ρ, switch, disengage p_fail, re-engage 1-ρ_null. Pre-snap conditional logit.
4. EM: Stage1 engaged-only estimates γ, σ_D^2, β, ρ_b; Stage2 restores disengaged for p_fail, ρ_null. Holds Θ1 fixed for identification. 
5. Metrics: attention, entropy, RMST, BR, continuous plus-minus, pocket control, SGG. 
6. Validation: PFF. 
Gray zones: latent assignment vs actual blocking, "merely in right place" quote [PAGE 15]. Disengaged conflates beaten, won, release [PAGE 7-8]. Single-rusher singularity n_i=1. STRAIN d→0. Pre-snap features. Causal associational. Early season. Good.

Need "source operators and equations" maybe list. Need cite exact page. We'll include a quote for each cluster.

Need "Retrocausal genealogy": mention Franks 2015 basketball; HMM; Kalman 1960; STRAIN 2023; materials science; adjusted plus-minus Macdonald; Fernández-Bornn; PFF. Multi-week traps. Maybe 300 words.

Need "Recursive theory of mind": 250 words. "Crisis habit regression vs counter-trap vs clock." Need define:
- Recursive belief: model infers blocker's assignment from observable geometry, not intention. It recursively conditions on rusher attention, which depends on blockers' assignment beliefs. 
- Crisis habit regression: high ρ and high ρ_null mean under pressure, system "regresses" to prior/sticky state; low p_fail for linemen. But for RB/WR p_fail high, release. 
- Counter-trap: stunts/twists are designed to induce switch; if model's ρ_b too high, it misses stunt; if too low, over-switches. Entropy identifies blockers who pass off. 
- Clock: time-to-throw censoring; RMST near 4s; hazard dwell g1>0; as clock advances, failure hazard rises. 
Need cite [PAGE 5] quote elite tackle; [PAGE 7] disengagement; [PAGE 8] dwell. Good.

Need "Cross-layer veto adjudication": 300 words. Physical: no force/mass; STRAIN is kinematic; height/weight only priors. Biomechanical: no joint/contact; orientation only. Weather: no environmental covariates. Veto claims: can't infer strength, fatigue, traction, wind. Use "veto proof" as formal: if a claim requires variable not in model, model cannot adjudicate; veto. Need cite [PAGE 3] "speed, acceleration, orientation" data; [PAGE 9] attributes; [PAGE 15] "direction of velocity carry complementary signal" future. Good.

Need "RLVR counterfactual vetoes": 3 scenarios with predictions. Need maybe include "RLVR" acronym? We can say "verifiable reward veto". Need no betting. Good.

Potential issue: "zero betting lines" - I must not mention "lines" as in betting. I can say "offensive line" though? Invariant says "Never mention spreads, totals, moneylines, or odds." "offensive line" is not betting line. Fine. Avoid "line" alone? It's okay. But maybe "line of scrimmage" in source? We can avoid. "offensive line" okay. No "moneyline". Good.

Need exact quotes with page markers:
- [PAGE 3]: "at a frequency of 10 Hz (i.e., 10 frames per second)." 
- [PAGE 4]: "the pass-blocker maintain their position such that they are between their pass-rusher assignment and their quarterback." Note grammar "maintain" exact. 
- [PAGE 4]: "we expect a blocker to be facing their assignment as well as in between the assignment and the quarterback." 
- [PAGE 5]: "an elite tackle anchored on an edge rusher rarely switches, whereas an interior lineman routinely passes off twists and stunts."
- [PAGE 7]: "we define “attention” as the sum of the assignment probabilities assigned to a rusher at a given time-step"
- [PAGE 8]: "we take the time from the snap to the first time beaten by a rusher as a survival outcome, right-censored at the throw"
- [PAGE 9]: "We take the one-frame change in STRAIN as the response"
- [PAGE 12]: "our smoothed assignment places a mean of 0.77 of its engaged probability mass on exactly that rusher and the model’s most-assigned rusher agrees with PFF’s designation on 87.5% of blocker-plays."
- [PAGE 15]: "it is nonetheless an associational estimate."
- [PAGE 18]: "The value of cbg is chosen by identifying the elbow of the implied mean disengaged probability curve (about 8% of blocker-frames) on one week of data." 
- [PAGE 19]: "Stage 2 then holds Θ̂1 fixed, restores the disengaged state, and fits Θ2 by EM on the full (ni + 1)-state model." Maybe exact.
- [PAGE 20]: "the per-blocker M-step is then closed form"? Actually page 20. Use not necessary.
- [PAGE 22] convergence. Not needed.

Need maybe page numbers in source text: Page 1 title, Page 2, Page 3 data, Page 4 model, Page 5 transitions, Page 6 Table 1, Page 7 attention, Page 8 disengagement, Page 9 continuous, Page 10 Figure, Page 11 pocket, Page 12 validation, Page 15 discussion, Page 16 appendices, Page 17 Kalman, Page 18 HMM, Page 19 EM, Page 20, Page 21, Page 22. Good.

Need "SI/information/probability units" include information entropy? Normalized entropy dimensionless; attention dimensionless; probabilities dimensionless; logit coefficients log-odds; RMST seconds; hazard per frame. Good.

Need "exact singularity/breakdown regimes" include formal. Use `n_i=1` in transition; `d_{ijt}\to 0`; `σ_D^2\to0`; `κ` fixed; `c_bg` nonidentifiable; `β` separation; EM local. Good.

Need "no toy equations" avoid invented ratios. We use source equations. For attention normalization, we can describe but not invent. We may mention front-normalized attention but not equation? Source says normalized within play-frame. That's okay. Don't invent "Force/Fatigue". Good.

Need "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." We must not say "proof" as mathematical proof; say adjudication. Fine.

Need maybe mention "American football" not soccer. Good.

Need final answer only XML. Let's compose.

Need ensure <THINK_TRACE> etc. no extra tags? We can include paragraphs. Need maybe escape `&` if any. I will avoid `&` entirely. Use "and". In quotes, "pass-block / pass-rush" no amp. Good.

Need ensure `\theta` etc. no XML issues. Backslash okay. Curly braces okay. `[` `]` okay. `_` okay. `^` okay. `\sim` okay. `\mathcal{N}` okay. `\Delta` okay. `\sum` okay. `\in` okay. `\le` okay. `\to` okay. `\infty` okay. `\mathrm` okay. `\left` `\right` okay. `\mid` okay. `\logit` maybe define `\operatorname{logit}`. Good.

Need if equations contain `\begin{bmatrix}` with `&`? Avoid. Use separate matrices maybe:
\[
G=\begin{bmatrix}1 & \delta & \frac12\delta^2\\...\end{bmatrix}
\]
This has `&`, must escape `&amp;`. I can instead write `G=\begin{bmatrix}1, \delta, \frac12\delta^2; 0,1,\delta;0,0,1\end{bmatrix}`? Not standard. Better use `&amp;` inside. XML allows `&amp;`. We can include `&amp;` in LaTeX; it will render as & with proper XML. But in answer not parsed? It's XML, yes. Use `&amp;`. Need if final display shows `&amp;`? It's okay. But maybe simpler omit G matrix. We can state scalar dynamics. No `&`. Good.

Need no raw `>`? We might write "greater than" instead of `>`. Use `\ge`. No `<`. Good.

Let's write.

Need word count. I'll aim:
THINK_TRACE ~700
SOURCE ~800
RETRO ~350
RECURSIVE ~300
CROSS ~300
RLVR ~400
Total ~2850. Fine. Desired oververbosity 5; okay.

Need maybe "THINK_TRACE" deep multi-hop derivation. Let's ensure >=400. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include all key equations. Ensure formal. Use exact quotes. Let's draft section carefully.

Potential issue: In continuous model equation, source text has `Q∆ qi −` maybe the extracted equation is `Q^Δ_{q_i} - ...` yes. We'll use. Need not include `q_i` as index? Good.

Potential issue: Play-level model equation includes `D_{n_i}` down, `Q_{t_i}` quarter, `OF_i`, `DC_i`; quarterback `Q_{q_i}`. Good. Use `O_{o_i}`, `D_{d_i}`. Good.

Potential issue: STRAIN equation uses `d_{ijt}` not `d_{ijt}/dt`; velocity `v_{ijt}=d d_{ijt}/dt`. Good.

Potential issue: `σ_D^{2(g)}` notation. Good.

Potential issue: `P(I_{0bj}=1)= (1-\nu) \frac{\exp\{\beta^{(g(b))\top}X_{0bj}\}}{\sum_{j'\le n_i}\exp\{\beta^{(g(b))\top}X_{0bj'}\}}` for j≤n_i and disengaged ν. Good.

Need maybe mention "orientation concentration κ=1 fixed" [PAGE 4]. Good.

Need "initial distribution omitting play subscript" exact. Good.

Need "Stage 1 and Stage 2" cite [PAGE 19]. Good.

Need "Kalman" cite [PAGE 17]. Good.

Need "pocket control" cite [PAGE 11]. Good.

Need "SGG" cite [PAGE 12]. Good.

Need "external validation" cite [PAGE 12]. Good.

Need "limitations" cite [PAGE 15]. Good.

Need "retrocausal genealogy": Use exact quotes:
[PAGE 2] "Franks et al. (2015) used a Hidden Markov Model (HMM) to assign each defensive player to offensive players in professional basketball."
[PAGE 3] "closely related to the concept of strain rate in materials science (Callister and Rethwisch, 2018)."
[PAGE 12] "the independently hand-charted pass-block / pass-rush data from Pro Football Focus provides an external check."
[PAGE 15] "it is nonetheless an associational estimate."
Need exact "independently hand-charted" text? Source: "the independently hand-charted pass-block / pass-rush data from Pro Football Focus provides an external check." yes.

Multi-week traps: first eight weeks [PAGE 1 or 3], one week for cbg [PAGE 18]. No held-out season. Need mention "Week 1-8 only" and "Fit to the first eight weeks of the 2021 NFL season" [PAGE 1]. Good.

Need "recursive theory of mind": cite [PAGE 4] quote; [PAGE 5] quote; [PAGE 7] disengaged; [PAGE 8] dwell. Need "crisis habit regression" maybe phrase "under crisis, the inferred policy regresses to high-stickiness prior for linemen and high-failure prior for backs". Good.

Need "cross-layer veto": cite [PAGE 3] "speed, acceleration, orientation" data. [PAGE 9] "linear function of player attributes z = [position, height, weight]". [PAGE 15] "a blocker’s direction of velocity carry complementary signal." Actually quote: "We rely primarily on positioning, yet a blocker’s direction of velocity carry complementary signal." Good. Weather absent. Need "veto proof" maybe "A cross-layer claim is vetoed when its necessary variable is absent from the source and cannot be identified from the HMM." Good.

Need "RLVR counterfactual vetoes": Need predictions with thresholds. Use "Prediction P1..." etc. Good. No betting.

Need ensure no "odds" word. Avoid "odds". "log-odds" may contain "odds"! Invariant says never mention odds. Better avoid "log-odds". Use "logit scale" instead. Good. Avoid "betting". Avoid "spread". "spread" could appear? Avoid "spread" entirely. "totals" avoid. "moneyline" no. "odds" no. Use "probability". Good. In equation logit is okay? "logit" contains not odds. Fine.

Need no "line" maybe "offensive line" unavoidable? User source says offensive linemen. "offensive line" is not betting but might be flagged? Invariant says "Never mention spreads, totals, moneylines, or odds." "line" alone not banned. But "betting lines" in rule. Use "offensive linemen" instead of "line". Good. Avoid "line of scrimmage" maybe not needed. Good.

Need no "spread" in "spread that mass". The source has "spreads that mass" page 7. Avoid quote with spread? Use "distributes". Good. Avoid word "spread" in our text. Good.

Need no "total" maybe "total probability" in transition. "total" not banned? Rule says totals (betting). But "total probability" could be fine. Yet to be safe avoid "total probability"; use "remaining probability mass". Good.

Need no "odds" in "log-odds"; avoid. Use "logit".

Need final. Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
The source builds a multi-hop inferential chain from raw tracking geometry to player-evaluation metrics, and the audit must keep each hop separate. First, the NFL Next Gen Stats feed returns spatial coordinates for all 22 players and the football “at a frequency of 10 Hz (i.e., 10 frames per second)” [PAGE 3]. Raw RFID positions are noisy, so the authors smooth each coordinate with a constant-acceleration Kalman filter, using reported speed, acceleration magnitude, and motion direction only to seed the initial state [PAGE 17]. The latent state is position, velocity, and acceleration; position is the only observation; jerk is white noise with fixed spectral density. This matters because later operators differentiate position, so unfiltered noise would dominate the derivative. Second, the smoothed trajectory is converted into STRAIN, a kinematic pressure proxy: the negative ratio of rusher-quarterback closing velocity to rusher-quarterback distance [PAGE 3]. STRAIN has units of inverse seconds, and its central-difference implementation is a numerical choice that changes high-frequency behavior. Third, STRAIN and geometry feed the hidden Markov model: the latent state is the blocker’s assignment identity, the emission is a bivariate normal for blocker position along the rusher-quarterback segment plus a von Mises orientation term, and the transition encodes stay, switch, disengage, and re-engage probabilities [PAGE 4-5]. Fourth, the assignment posterior becomes a modeling artifact for attention, normalized assignment entropy, block-shedding survival, continuous-time plus-minus, pocket space control, and space-generation gain [PAGE 7-12]. Fifth, independent Pro Football Focus charting is used as an external check, not as a training target [PAGE 12].

The gray-zone audit is where the method must be handled carefully. The latent assignment is inferred from position and orientation, not from contact, force, or intention. The authors themselves warn that they “do not fully separate a blocker who is actively impeding a rusher from one who merely happens to be in the right place (i.e. a missed block while nominally ‘assigned’)” [PAGE 15]. Thus a high assignment probability is not proof of effective blocking. The disengaged state is another gray zone: it can mean the blocker was beaten, won the rep by driving the rusher away, or simply released with no rusher to engage [PAGE 7-8]. The model uses geometric features and STRAIN to classify these cases, but the classification is still an inferential layer. A third gray zone is formal singular behavior. The switch probability uses a denominator \(n_i-1\); if a play has a single rusher, the symmetric switch branch is undefined unless handled separately. STRAIN diverges as rusher-quarterback distance goes to zero, exactly the contact and sack regime. The emission variance cannot be allowed to collapse to zero without making assignments deterministic. The background level \(c_{\text{bg}}\) and the emission variance can both explain poorly fitting frames, so the authors hold the first-stage parameters fixed in the second stage “since this allows the model to be identified” [PAGE 19]. A fourth gray zone is temporal leakage: the continuous-time model deliberately uses the filtered assignment posterior because its response looks one frame ahead [PAGE 9], but the HMM smoother and the one-week tuning of \(c_{\text{bg}}\) [PAGE 18] still create a risk that evaluation on the same eight weeks is not a clean temporal holdout. A fifth gray zone is causal language: the continuous-time blocker effect is explicitly “an associational estimate” [PAGE 15]. Any claim that it measures strength, leverage, fatigue, coaching, or weather resistance is outside the source operators. The audit therefore separates descriptive assignment recovery, predictive correlation with charting, and causal/biomechanical interpretation. The first can be checked against PFF; the second can be checked with held-out weeks and permutation nulls; the third must be vetoed unless additional physical, biomechanical, or environmental layers are supplied.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source is explicit about its observation scale and coordinate units. It uses tracking data from the 2023 NFL Big Data Bowl, with all 22 players and the football at 10 Hz, and it indexes plays by \(i\), rushers by \(j\), blockers by \(b\), and frames by \(t\) [PAGE 3]. Field coordinates are in yards, time in seconds, velocity in yards per second, acceleration in yards per second squared, and orientation in radians. The STRAIN operator is
\[
\mathrm{STRAIN}_{ijt}=-\frac{v_{ijt}}{d_{ijt}},
\]
where \(d_{ijt}\) is the Euclidean rusher-quarterback distance and \(v_{ijt}=dd_{ijt}/dt\) is its rate of change [PAGE 3]. Its SI unit is \(\mathrm{s}^{-1}\). The authors state that STRAIN is “closely related to the concept of strain rate in materials science” [PAGE 3]. They replace a forward difference with a second-order central difference and likewise approximate closing acceleration by a second-order central difference [PAGE 3]. The singularity is exact: for fixed nonzero \(v_{ijt}\), \(\mathrm{STRAIN}_{ijt}\to\pm\infty\) as \(d_{ijt}\to 0\). Near contact, the kinematic proxy no longer represents pressure; it represents a denominator approaching zero.

The Kalman smoother is a constant-acceleration state-space model. For one coordinate, the latent state is \(\theta_t=(z_t,\dot z_t,\ddot z_t)^\top\), the transition is \(\theta_t=G\theta_{t-1}+j_t\), and the observation is \(y_t=z_t+\varepsilon_t\) with \(\varepsilon_t\sim\mathcal N(0,\sigma_p^2)\) [PAGE 17]. The frame interval is \(\delta=0.1\,\mathrm{s}\), the process spectral density is \(q=1\,\mathrm{yd}^2/\mathrm{s}^5\), and the observation variance is \(\sigma_p^2=10^{-3}\,\mathrm{yd}^2\) [PAGE 17]. The position variance is therefore in square yards, and the jerk input has units consistent with yards and seconds. The breakdown regime is model misspecification: the filter assumes constant acceleration plus white jerk, so sharp contact, falls, and nonlinear cuts are smoothed as if they were noise.

For the HMM, the latent state is \(I_{tbj}\in\{1,\dots,n_i+1\}\), where \(j\le n_i\) are engaged rushers and \(n_i+1\) is disengaged [PAGE 18]. The core assumption is quoted verbatim: “the pass-blocker maintain their position such that they are between their pass-rusher assignment and their quarterback” [PAGE 4]. The engaged positional emission is
\[
O_{tb}\mid I_{tbj}=1 \sim \mathcal N_2\!\left(\gamma_r^{(g)}R_{tj}+\gamma_q^{(g)}Q_t,\ \sigma_D^{2(g)}I_2\right),
\]
with \(\gamma_r+\gamma_q=1\), so the mean lies on the rusher-quarterback segment and \(\sigma_D^{2(g)}\) has units of \(\mathrm{yd}^2\) [PAGE 4 and PAGE 18]. The orientation emission is
\[
p(\eta_{tb}\mid I_{tbj}=1)=
\frac{\exp\{\kappa\cos(\eta_{tb}-\eta_{tj}-\pi)\}}{2\pi I_0(\kappa)},
\]
with \(\kappa=1\) fixed, and the density is maximized when the blocker faces opposite the rusher [PAGE 4]. The source explains the joint emission in plain language: “we expect a blocker to be facing their assignment as well as in between the assignment and the quarterback” [PAGE 4]. The breakdown regimes are \(\sigma_D^2\to 0\), which makes assignments deterministic and unstable, and \(\sigma_D^2\) too large relative to \(c_{\text{bg}}\), which lets the disengaged background absorb engaged frames.

The transition structure is
\[
P(I_{tbj}=1\mid I_{t-1,bj}=1)=\rho_b,
\]
\[
P(I_{tbj}=1\mid I_{t-1,bj'}=1)=\frac{1-\rho_b-p_{\text{fail},b}}{n_i-1},
\quad j\ne j'\le n_i,
\]
\[
P(I_{tb,n_i+1}=1\mid I_{t-1,bj}=1)=p_{\text{fail},b},
\]
\[
P(I_{tb,n_i+1}=1\mid I_{t-1,b,n_i+1}=1)=\rho_{\text{null}},
\]
\[
P(I_{tbj}=1\mid I_{t-1,b,n_i+1}=1)=\frac{1-\rho_{\text{null}}}{n_i}
\]
[PAGE 18]. The formal singularity is \(n_i=1\) in the switch branch. The source’s qualitative interpretation is that “an elite tackle anchored on an edge rusher rarely switches, whereas an interior lineman routinely passes off twists and stunts” [PAGE 5]. The initial distribution is a conditional-logit prior over rushers plus fixed disengaged mass \(\nu=0.05\) [PAGE 18]. Soft-label multinomial-logistic estimation has a separation breakdown: if pre-snap features perfectly separate assignments, the coefficients can diverge without regularization or early stopping.

The estimation is two-stage. Stage 1 fits the engaged-only model by EM and estimates emission weights, variance, matchup prior, and per-blocker stickiness. Stage 2 “holds \(\hat\Theta_1\) fixed, restores the disengaged state, and fits \(\Theta_2\) by EM on the full \((n_i+1)\)-state model” [PAGE 19]. The per-blocker Stage-2 updates are closed form:
\[
\hat\rho_b=\frac{S_b+\alpha_1}{S_b+W_b+F_b+\alpha_0},
\qquad
\hat p_{\text{fail},b}=\frac{F_b+\alpha_3}{S_b+W_b+F_b+\alpha_0},
\]
with \(\alpha_0=\alpha_1+\alpha_2+\alpha_3\) [PAGE 20]. Here \(S_b\) is expected stay count, \(W_b\) expected switch count, and \(F_b\) expected engaged-to-disengaged count; these are dimensionless expected transition counts. The breakdown regimes are EM local optima, fixed iteration counts, and prior dominance when \(S_b+W_b+F_b\) is small.

The attention metric is
\[
n_{\text{eff}}(j,t)=\sum_b \theta(b,j,t),
\]
where \(\theta(b,j,t)\) is the assignment probability; it is a dimensionless effective blocker count [PAGE 7]. The source defines attention verbatim as “the sum of the assignment probabilities assigned to a rusher at a given time-step” [PAGE 7]. Normalized assignment entropy is dimensionless and is normalized by the log of the number of rushers in the front [PAGE 7]. The block-shedding survival outcome is the time from snap to first beaten event, “right-censored at the throw” [PAGE 8], so restricted mean survival time RMST has units of seconds and beat rate \(BR\) is a per-block probability. The opponent-adjusted hazard is
\[
\operatorname{logit} h_{b,t}
=\alpha+g_1\tilde t+g_2\tilde t^2+\beta_{\text{opp}}R_{j(b)}+u_b,
\]
where \(\tilde t\) is standardized frames since engagement, \(R_j\) is the engaged rusher’s peak-STRAIN plus-minus effect, and \(u_b\) is a regularized per-blocker frailty [PAGE 8]. The hazard is per frame; \(\beta_{\text{opp}}\) is on the logit scale per standardized rusher-quality unit. The source reports that the dwell coefficient is positive and the opponent coefficient is positive [PAGE 8]. Breakdown occurs when events are sparse, when right-censoring dominates, and when the posterior-mean opponent covariate is used as if it were measured without error.

The continuous-time plus-minus model takes “the one-frame change in STRAIN as the response” [PAGE 9]:
\[
\Delta\mathrm{STRAIN}_{ijt}
\sim \mathcal N\!\left(
\mu+R_j^\Delta+Q_{q_i}^\Delta
-\sum_{b\in X_i}B_b^\Delta\theta(b,j,t,i)
+\phi\,\mathrm{STRAIN}_{ijt},\ \sigma_\Delta^2
\right).
\]
The response has units of \(\mathrm{s}^{-1}\) per frame; \(B_b^\Delta\) is per unit of assignment, and \(\phi\) is dimensionless. The source reports \(\hat\phi=-0.059\), meaning mild mean reversion [PAGE 9]. The play-level model for peak STRAIN is
\[
y_{ij}=\max_t \mathrm{STRAIN}_{ijt},
\]
\[
y_{ij}\sim\mathcal N\!\left(
\mu+R_j-\sum_{b\in X_i}B_b\theta(b,j,i)
+Q_{q_i}+O_{o_i}+D_{d_i}+D_{n_i}+Q_{t_i}+OF_i+DC_i+\gamma^\top s_i,\ \sigma_y^2
\right)
\]
[PAGE 21-22]. Here \(R_j\) and \(B_b\) are in \(\mathrm{s}^{-1}\), and the intercepts are random effects. The source shrinks rusher, blocker, and quarterback effects around “a linear function of player attributes \(z=[\text{position},\text{height},\text{weight}]\)” [PAGE 9 and PAGE 22]. That is the only place body size enters; it is an archetype prior, not a biomechanical force model.

Pocket control is a probability field:
\[
PC(p,t)=\operatorname{logit}^{-1}\!\left(
\sum_{b\in B_t}I_b(p,t)-\sum_{j\in R_t}I_j(p,t)
\right),
\]
with \(I_k(p,t)\in(0,1]\) a bivariate influence and \(PC(p,t)\) dimensionless [PAGE 11]. Value weighting is
\[
V(p)=e^{-\|p-QB_t\|/\lambda},\qquad \lambda=3\,\mathrm{yd},
\]
and owned-space quality is
\[
Q_k(t)=\sum_{p\in D_t}w_k(p,t)V(p)\Delta a,
\]
where \(w_k\) is control share, \(\Delta a\) is grid area in \(\mathrm{yd}^2\), and \(Q_k\) therefore has units of \(\mathrm{yd}^2\) [PAGE 11-12]. The space-generation weight is
\[
W_b(i'\to i)=
\theta(b,i';t)\left(1-\theta(b,i';t+w)\right)
\theta(b,i;t+w)\left(1-\theta(b,i;t)\right),
\]
and the gain is
\[
SGG_i\mathrel{+}=
\sum_b\sum_{i'\ne i}W_b(i'\to i)\left(Q_{i'}(t+w)-Q_{i'}(t)\right)
\]
[PAGE 12]. \(W_b\) is dimensionless; \(SGG\) inherits the space-quality unit, though the source’s table does not state an explicit unit. Breakdown occurs when the window \(w\) is long enough to overlap multiple events, when assignment probabilities are near 0 or 1, and when the grid partition changes the integral.

External validation is not a training operator. The source reports that “our smoothed assignment places a mean of 0.77 of its engaged probability mass on exactly that rusher and the model’s most-assigned rusher agrees with PFF’s designation on 87.5% of blocker-plays” [PAGE 12]. It also reports rusher-side correlations of \(R_j^\Delta\) with PFF pressure rate of \(0.57\) and sack rate of \(0.46\), and a blocker-side \(B_b^\Delta\) correlation of \(0.32\) with pressures allowed [PAGE 14]. The limitation is explicit: “it is nonetheless an associational estimate” [PAGE 15].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is layered. The immediate ancestor is the basketball defensive-matchup HMM of Franks et al. (2015); the source says, “Franks et al. (2015) used a Hidden Markov Model (HMM) to assign each defensive player to offensive players in professional basketball” [PAGE 2]. The football adaptation changes the emission geometry from basketball spacing to pass-protection geometry: the blocker should lie on the rusher-quarterback segment and face opposite the rusher [PAGE 4]. A second ancestor is the Kalman filter lineage from Kalman (1960), used here to smooth noisy tracking coordinates and to recover velocity and acceleration for differentiation [PAGE 17]. A third ancestor is adjusted plus-minus in sports analytics, specifically Macdonald (2012), which the authors extend from all-or-nothing stints to partial, continuous blocking credit [PAGE 1 and PAGE 2]. A fourth ancestor is STRAIN from Nguyen et al. (2023), which is itself analogized to materials-science strain rate [PAGE 3]. A fifth ancestor is space-control modeling from Fernández and Bornn (2018), adapted from soccer to the pass-protection pocket [PAGE 11]. The validation layer is independent PFF charting, which the authors describe as “independently hand-charted pass-block / pass-rush data from Pro Football Focus” [PAGE 12].

Retrocausally, later metrics shape how earlier operators are read. Attention is not just a summary of \(\theta\); it becomes a claim about how much interference a rusher commands [PAGE 7]. Assignment entropy is not just a dispersion measure; it becomes a claim about scheme role, with tackles at low entropy and interior linemen at high entropy [PAGE 7]. STRAIN is not just a derivative; it becomes a pressure proxy that feeds survival, plus-minus, and space models. This is legitimate only if the later validation is held out and if the earlier tuning is not contaminated by the later evaluation. The multi-week traps are therefore serious. The sample is “the first eight weeks of the 2021 NFL season” [PAGE 1 and PAGE 3]; there is no full-season or next-season holdout reported. The background level \(c_{\text{bg}}\) is chosen “on one week of data” [PAGE 18]. The continuous-time model uses a filtered posterior to avoid looking one frame ahead [PAGE 9], but the HMM smoother itself uses future frames within each play. Opponent adjustment uses a posterior-mean rusher effect as a covariate [PAGE 8], which can attenuate or distort coefficients. The eight-week window also mixes early-season scheme installation, roster turnover, and opponent composition. A retrocausal audit must ask whether the reported rankings would survive a strict week-1-to-week-6 fit with week-7-to-week-8 evaluation, and whether the one-week \(c_{\text{bg}}\) choice was made without peeking at the validation weeks. The genealogy therefore supports the model as a descriptive and predictive instrument, not as a causal or biomechanical one.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The model is a recursive inference device in a limited, formal sense. It does not represent a blocker’s conscious belief; it represents an observer’s conditional belief about which rusher the blocker is responsible for, given position, orientation, pre-snap alignment, and transition history [PAGE 4-5]. That belief is recursively updated because the assignment at frame \(t\) depends on the assignment at \(t-1\), and the pre-snap prior depends on alignment and formation [PAGE 5]. The observer’s belief about a rusher’s attention then depends on beliefs about every blocker’s assignment, so attention is a second-order summary of first-order assignment beliefs [PAGE 7]. This is the recursive layer: rusher value is not inferred from the rusher alone but from the distribution of blocker beliefs around him.

“Crisis habit regression” appears as high stickiness under pressure. For tackles, guards, and centers, \(\rho\) is approximately \(0.97\) to \(0.98\), and \(p_{\text{fail}}\) is approximately \(0.01\) to \(0.02\) [PAGE 6]. The model therefore expects interior and edge protectors to remain with the same rusher unless a structured event occurs. The qualitative claim is that “an elite tackle anchored on an edge rusher rarely switches, whereas an interior lineman routinely passes off twists and stunts” [PAGE 5]. In crisis, the inferred policy regresses toward the sticky prior: a blocker who is losing may still be assigned to the same rusher until the disengaged state absorbs the frame. The counter-trap is the stunt, twist, or pass-off designed to make the blocker’s assignment belief wrong. The model encodes this through the switch branch and through per-blocker \(\rho_b\), partially pooled toward the position group [PAGE 5]. If \(\rho_b\) is too high, the model misses the counter-trap; if too low, it over-switches and assigns credit to the wrong blocker. Assignment entropy is the diagnostic: low entropy means a blocker concentrates responsibility on one rusher, while high entropy means responsibility is distributed across several [PAGE 7].

The clock is the play horizon and the throw. Block-shedding survival is right-censored at the throw, and RMST sits near the roughly four-second play horizon for most blocks [PAGE 8]. The hazard model includes a dwell term, and the positive \(g_1\) coefficient means blocks fail more readily the longer they are asked to last [PAGE 8]. The recursive theory-of-mind reading is therefore: assignment belief is sticky, counter-traps are attempts to force a belief update, and the clock determines whether the observer ever sees the failure. A model that ignores the clock will over-credit late wins and under-credit early losses. A model that ignores the counter-trap will confuse a well-executed pass-off with a missed assignment. A model that ignores the recursive attention layer will treat a double-team as two independent blockers rather than as a coordinated belief shift that frees a teammate.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer in the source is kinematic, not force-based. The tracking feed supplies position, speed, acceleration, and orientation [PAGE 3]; the Kalman filter infers position, velocity, and acceleration from noisy position observations [PAGE 17]; STRAIN is a ratio of closing velocity to distance [PAGE 3]. There is no contact force, pressure sensor, joint angle, center-of-mass estimate, leverage measurement, fatigue state, or surface traction variable in the model. Height and weight enter only through the attribute vector \(z=[\text{position},\text{height},\text{weight}]\), which shrinks player effects toward positional and size archetypes [PAGE 9 and PAGE 22]. That is a prior, not a biomechanical mechanism. Therefore a claim that \(B_b^\Delta\) measures raw strength, anchor force, or leverage independent of scheme is vetoed at the cross-layer boundary. The model can say that a blocker’s engagement decelerates the rusher’s STRAIN, but it cannot say why in muscular or mechanical terms.

The biomechanical layer is also underdetermined. Orientation is modeled with a von Mises density centered opposite the rusher [PAGE 4], but orientation is a heading, not a measure of knee bend, hip torque, hand placement, or balance. The authors explicitly note that “a blocker’s direction of velocity carry complementary signal” and that they rely primarily on positioning [PAGE 15]. The disengaged state conflates being beaten, winning the rep, and releasing [PAGE 7-8]. Thus a biomechanical claim that a blocker “won” a rep because of superior force production is vetoed unless an independent biomechanical measurement is added. The model’s own survival and plus-minus outputs are associational [PAGE 15].

The weather layer is absent. The source contains no temperature, wind, precipitation, field surface, or footing covariates. Weather could alter traction, closing speed, and the Kalman-smoothed derivatives, but the model has no operator to identify it. A weather-based explanation of a blocker’s rating is therefore vetoed by missing-variable adjudication. The same veto applies to claims about crowd noise, travel, injury, or fatigue: none are in the source’s state space. The cross-layer verdict is that the paper is valid as a tracking-geometry and probabilistic-assignment study, valid as an associational evaluation instrument against PFF charting, and invalid as a physical, biomechanical, or weather-causal proof. Any claim that exceeds the observed layers must be rejected rather than filled in by intuition.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1: temporal holdout on PFF assignment agreement. Fit the HMM on weeks 1 through 6 and evaluate on weeks 7 and 8 without refitting \(\beta\), \(\sigma_D^2\), \(\rho_b\), \(p_{\text{fail},b}\), or \(c_{\text{bg}}\). The verifiable reward is the PFF top-assignment agreement and engaged probability mass. If the model is stable, agreement should remain in the low-to-mid 80% range, close to the reported 87.5%, and engaged mass should remain near 0.77 [PAGE 12]. Prediction: a valid model retains at least 80% top-assignment agreement and at least 0.70 engaged mass on the holdout. Veto if agreement falls below 75% or engaged mass falls below 0.65, because that would show the reported fit is driven by within-sample tuning rather than a stable assignment operator.

Veto scenario 2: within-play rusher-label permutation null. Permute rusher identities within each play while preserving blocker positions, quarterback position, and orientation. Recompute attention, normalized entropy, and the continuous-time rusher effect. The real attention leaders are reported at about 1.5 times the average rusher, while the bottom group is near 0.7 to 0.8 [PAGE 7 and PAGE 24]. Prediction: real top-rusher attention should exceed the 95th percentile of the permutation null, and real low-entropy tackles should separate from real high-entropy interior blockers. Veto if the observed attention ranking is inside the permutation null’s central 90% interval or if the entropy separation disappears, because that would mean the HMM is not extracting rusher-specific assignment structure beyond geometry and play context.

Veto scenario 3: disengaged-state ablation and contact censoring. Remove the disengaged state, refit the engaged-only model, and compare PFF agreement, beat-rate correlation, and plus-minus stability. The reported disengaged persistence is near-absorbing, \(\rho_{\text{null}}\approx 0.97\) to \(1.00\), and \(p_{\text{fail}}\) is near 0.01 to 0.02 for interior protectors but 0.55 to 0.58 for backs and receivers [PAGE 6]. Prediction: removing the disengaged state should reduce PFF agreement below 80% and should weaken the oriented beat-rate correlation with pressures allowed, which is reported at 0.17 [PAGE 14]. Veto if the ablation improves agreement or if the beat-rate correlation becomes stronger without the disengaged state. A second check within this scenario is contact censoring: censor frames once the rusher is within a small radius of the quarterback or once the ball is thrown. Prediction: the rusher \(R_j^\Delta\) correlation with PFF pressure rate should remain positive but attenuate, because STRAIN’s denominator is approaching its singular regime. Veto if the correlation grows sharply under contact censoring, since that would indicate the original signal was an artifact of near-zero distances rather than persistent pass-rush pressure.
</RLVR_COUNTERFACTUAL_VETOES>