---
source: "2026 - Credit Attribution in Timestamped Soccer Networks Using Multivariate Hawkes Processes - Kornberg et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 12
model: deepseek/deepseek-v4.1-flash-1017
words: 10168
---

<NATIVE_REASONING>
We need answer to user. Need produce structured XML sections exact, >=1000 words total, deep. Need no betting lines/odds. They mention DRIVE SOURCE but probably want analysis of paper? Need infer task. They provided paper and system prompt for GSE + GSI Frontier Reasoning Foundry. Need output sections. No explicit question, but likely they want "analyze source" using sections. Need satisfy invariants: zero betting lines, zero toy equations, formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes, cite [PAGE N] verbatim quotes. Need >=1000 words across exact XML sections. Need include THINK_TRACE >=400 words. Other sections.

Need be careful: "GSE + GSI Frontier Reasoning Foundry" maybe threat? But just need provide research synthesis. Need not mention betting. Could discuss soccer analytics paper. Need "Crisis habit regression vs counter-trap vs clock" weird. "Physical/biomechanical/weather veto proof" not applicable maybe address model-veto proof. "RLVR counterfactual vetoes" 3 verifiable scenarios predictions. Need include source operators/equations with LaTeX, units, page citations, breakdown. Need exact quotes from source pages. Need use [PAGE N]. Need cite exact verbatim quotes. Need formal equations. Need identify singularity/breakdown regimes: Hawkes stability spectral radius; α smoothing ensures largest eigenvalue less than one; NLL; β units; z responsibilities; xGI. Need note dimensionality M ~100 pairs plus goal pairs? Need exact page quotes: Page 3 conditional intensity; Page 4 responsibility Eq 1; Page 6 β=0.2; 98% after 20 sec; Page 7 smoothing; Page 8 xGI; Page 9 table; Page 10 top; Page 11 limitations.

Need ensure sections exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need maybe include "GSE/GSI" framing? Can say source-grounded extraction (GSE) and generative source inference (GSI). But not too overdone. Need no betting. Need no "spreads totals moneylines odds" even negated? System says never mention. Must avoid words spreads/totals/moneylines/odds entirely. Don't mention betting. Ensure not include "odds" substring? Avoid "odds". Use "probabilities", "likelihoods". Avoid "moneyline". Fine.

Need within THINK_TRACE >=400 words. Could be ~600. Need total >=1000; with all sections likely 2000. Desired oververbosity 5, but requirements huge. Need robust.

Need consider "DRIVE SOURCE" maybe they expect "Source operators and equations" from paper. We'll produce scholarly analysis of paper's model. "Retrocausal genealogy" historical/scientific lineage & multi-week traps: talk self-exciting point process, Hawkes lineage, xA/xGChain, FeatHawkes/Baouan, MULCH, multi-touch attribution advertising, smoothing. Multi-week traps: overfit to top-100 pairs, β manual, team aggregation, leakage across halves? Need mention.

"Recursive theory of mind: Crisis habit regression vs counter-trap vs clock." Could interpret as recursive modeling of analyst/model behavior: model recursion and human attribution loops. Need adapt to paper: recursive credit attribution can cause "credit inflation" where xGI redistributes xG but totals conserved? Need "crisis habit regression": reverting to last-touch xA under uncertainty; "counter-trap": treating smoothed α as real influence; "clock": timestamp alignment and β timescale. Need write section.

"Cross-layer veto adjudication: Physical/biomechanical/weather veto proof." Since soccer context, could discuss physical constraints: pass timestamps, fatigue, weather not modeled, biomechanics of shot xG; veto proof means conditions under which model attribution invalidated. Need state no physical/biomechanical/weather variables in model; cannot veto attribution solely via model; external layers can veto if timestamp alignment, stoppage, set pieces, possession breaks. Need mention paper only pass/shot timestamps and xG. But section title says physical/biomechanical/weather veto proof. Need include "veto" as invalidation proofs: weather/pitch alters pass speed/decay; biomechanical shot quality not in event data; physical fatigue changes baseline μ and excitation α. The model does not include these as covariates, so any claim that xGI is causal physical credit is unproven. Need exact conditions: if weather reduces pass speed and changes time gaps, β fixed 0.2 invalid; if shot xG already includes defensive pressure/location, xGI inherits; if player pair identity swaps positions, α not invariant. Need "proof" in formal sense: no covariates, so observational equivalence; cannot identify physical cause. We can state "veto condition" not mathematical proof.

"RLVR_COUNTERFACTUAL_VETOES" Need 3 verifiable RLVR veto scenarios + predictions. RLVR maybe reinforcement learning with verifiable rewards? Need create scenarios where a counterfactual test would veto model. Each must be verifiable: e.g., swap two passes' timestamps, recompute z and xGI; if MHP vs TD baseline yields near-identical responsibility ordering under timestamp-only perturbation, then α not contributing; prediction. Another: hold α fixed, permute sender-receiver pair labels within same time gaps; if xGI rankings unchanged, model not using pair-specific α. Another: set β=0.1 and 0.5 and check top xGI; if rankings stable? Actually prediction maybe top players remain? Need "veto scenarios" that if occur, invalidate claim. Need include predictions (expected outcomes under paper's claim). Need 3.

Need cite exact pages and quotes. Need use exact [PAGE N] markers. Need verbatim quotes in quotes. Need ensure quotes are exactly from text. Let's pick quotes:

Page 1: "we use multivariate Hawkes processes (MHPs) to model timestamped sequences of passes and shots, which form continuous-time networks." Exact. Page 1 also "MHPs provide a branching mechanism where an event (a pass or shot) can be generated as a child of a previous event". Good.

Page 3: conditional intensity equation text: "λi(t|Ht) = µi + ..." We can quote "A Hawkes process [9] is a self-exciting TPP where the occurrence of an event may influence the occurrence of additional events shortly thereafter." Page 3. Exact. "The influence then decays over time according to a kernel function that is typically chosen to be an exponential function βe−β(t)." Page 3.

Page 4: "An MHP can be used to compute the probability that an event l is the parent of event k, often called the responsibility of event l for event k:" Exact. Page 4. And "αij denotes the normalized jump size such that the product αijβ corresponds to the increase in the intensity of variable i triggered by an event in variable j." Page 4. Good.

Page 5: "We add 600 seconds to the times of all events in the second half to avoid the overlap with stoppage time events in the first half." Exact. Page 5. "we only select the 100 most frequent pairs, which represent the most common and consistent passing interactions for each team." Page 5. Good.

Page 6: "we choose the decay parameter β = 0.2. With this choice, about 98% of the influence of a pass on a future pass is gone after 20 seconds." Exact. Page 6. Also "The model learns a full excitation matrix α, where entry αij captures how a pass between sender-receiver pair j influences a pass between sender-receiver pair i in the near future." Page 6.

Page 7: smoothing quote: "we smooth the estimated α by taking a convex combination of the MLE and a scaled all-ones matrix:" exact. Page 7. "The 0.5/M scaling is used to ensure the largest eigenvalue of the scaled all-ones is less than one, ensuring a stable MHP." Page 7. "The smoothing makes the effective floor of the matrix ≈0.001" Page 7. Exact (approx symbol maybe okay). Good.

Page 8: xGI equation quote "xGIls = ..." Actually text: "xGI distributes the expected goal (xG) value of a shot, which is part of the StatsBomb data [15], among all players who contributed to the attacking sequence:" and equation. Quote "xGI distributes the expected goal (xG) value of a shot ... among all players who contributed to the attacking sequence" exact but with ellipsis? Need verbatim quotes exact, can quote shorter "xGI distributes the expected goal (xG) value of a shot" page 8. Good. Also "This allows players who initiate or advance dangerous plays, but do not provide the final pass, to receive credit for their involvement." Page 8 exact.

Page 9: "the penultimate pass (Su´arez →Neymar) has the higher αij value than the final pass (Neymar →Munir)." Page 9 exact. Maybe accent. We can avoid. "Notice that the differences in shot responsibilities depend both on the αij value and the time gaps between passes." Page 8? Actually page 8 text says this. Page 9 table. Good. "TD model’s responsibilities between the two shots are very similar, as it considers only the time gaps between the passes and the shot" Page 9. Good.

Page 10: "Barcelona has the highest mean αij value of 0.0050, while Levante UD has one of the lowest at 0.0040." Page 10 exact. Good.

Page 11: "Another limitation of our analysis is the manual selection of β." Page 11 exact. "Different β values will result in a different α matrix, and in turn, different shot responsibilities." Page 11 exact. Good.

Need formal LaTeX equations. We can restate:

Conditional intensity:
\[
\lambda_i(t\mid \mathcal H_t)=\mu_i+\sum_{j=1}^{d}\sum_{t_l\in T_j: t_l<t}\alpha_{ij}\beta e^{-\beta(t-t_l)}
\]
Units: t seconds (s); λ_i(t|H) in s^{-1} (events per second); μ_i s^{-1}; α_ij dimensionless (assuming β s^{-1}); β s^{-1}; kernel βe^{-β Δt} s^{-1}. Need note αijβ product s^{-1}. Good.

Responsibility:
\[
z_{kl} = \frac{\alpha_{v(k)v(l)}\beta e^{-\beta(t_k-t_l)}}{\mu_{v(k)}+\sum_{t_{l'}<t_k}\alpha_{v(k)v(l')}\beta e^{-\beta(t_k-t_{l'})}},\quad 0<l<k
\]
and baseline:
\[
z_{k0} = \frac{\mu_{v(k)}}{\mu_{v(k)}+\sum ...}
\]
Unitless probability; sum over l=0..k-1 z_kl = 1? Need check if equation includes all prior events? They only examine 6 preceding passes for shots; but full denominator over all previous events. For a shot, z for prior passes plus baseline. For each event k, responsibilities over all l including 0 sum to 1 if denominator includes all prior events; they compute only top 6. Need mention truncated 6-pass window means reported z sum <1 unless renormalized? They don't say renormalized; table baseline plus six responsibilities maybe sums? Example Table 1a: 0.329+0.268+0.136+0.086+0.020+0.011+0.150 = 1.000? Let's sum: 0.329+0.268=0.597; +0.136=0.733; +0.086=0.819; +0.020=0.839; +0.011=0.850; +0.150=1.000. Interesting yes exactly because denominator maybe only 6? Wait if denominator includes all prior events, the six plus baseline sum less than 1. Table sums 1.000. Maybe they compute responsibilities among six preceding plus baseline? But equation denominator over all t_l'<t_k. However likely only those six are in the model? Hmm no, all events in match. But Table shows exactly 1.000 maybe rounding and six+baseline. Could be they renormalize? Not stated. Need be precise: In source, Eq (1) denominator sums over all prior events, but analysis examines six preceding passes. If only six are included, reported responsibilities must be interpreted as a truncated/renormalized view or coincidental. The table sums: 1a MHP 0.329+0.268+0.136+0.086+0.020+0.011+0.150=1.000 exactly; 1b 0.649+0.075+0.031+0.018+0.003+0.029+0.195=1.000. So they likely include only six plus baseline in denominator? Wait text: "For each shot, we examine the 6 preceding passes and calculate the probability that each pass contributed to the shot, along with the probability that the shot occurred independently of any pass, i.e., l = 0 in (1)." Equation denominator over all past events but if all past events included, baseline z depends on all. To sum to 1 with six, they must have restricted event set to six preceding passes. But Eq denominator says all t_l'<t_k. Could be the MHP training sequence per half only has 100 pairs but still many. Let's not accuse; mention "the reported six-pass tables plus baseline sum to unity in the displayed cases, but the text does not explicitly state renormalization; this is an audit point." This is good gray-zone audit. Need exact singularity/breakdown regimes. Great.

xGI:
\[
\mathrm{xGI}_{l_s}=\sum_{k=1}^{m} (\mathrm{xG})_k z_{kl}
\]
Units: xG is probability or expected goals in goals per shot, dimensionless/expected goals; z dimensionless; sum over shots gives expected goals attributable to sender l_s. Need note xGI is in expected-goal units, not "goals" actual; additive over players? For each shot, sum_l z_kl =1 including baseline; baseline credit not assigned to player; xGI sums over player passes excluding baseline, so total xGI across players ≤ sum xG. Good. Need mention if z truncated, total not conserved. This is important.

Smoothing:
\[
\alpha=(1-\epsilon)\alpha^{\mathrm{MLE}}+\epsilon\left(\frac{0.5}{M}\right)\mathbf{1}\mathbf{1}^\top
\]
or scaled all-ones matrix. Need note all-ones dimension M×M? Source says "scaled all-ones matrix" and "0.5/M". If M total number pairs. But then α entries? Need units dimensionless. Stability: spectral radius ρ(α)<1 for exponential Hawkes with normalized kernel? Need note exact stability condition for linear Hawkes: ρ(α)<1 if kernel integrates to 1 (βe^{-βt} integrates to 1). Here α normalized jump size. Need breakdown: if ρ(α)≥1, nonstationary explosive intensity; smoothing ensures largest eigenvalue of scaled all-ones less than one? Actually for all-ones matrix J of size M, eigenvalues: M and 0; scaled 0.5/M J has largest eigenvalue 0.5. Convex combination with α_MLE may still have spectral radius >1 if α_MLE large, unless α_MLE stable and ε? Actually (1-ε)α_MLE + ε 0.5/M J; spectral radius ≤ (1-ε)ρ(α_MLE)+ε 0.5. If ρ(α_MLE)<1, <0.7*1+0.15=0.85 <1. So stable if MLE stable. But if MLE unstable, smoothing may still not fix. Source says ensures stable MHP for scaled all-ones but not entire combination? It says "The 0.5/M scaling is used to ensure the largest eigenvalue of the scaled all-ones is less than one, ensuring a stable MHP." We can note this only ensures the smoothing component's spectral radius 0.5, not necessarily the convex combination unless α_MLE is stable; so stability condition is ρ((1−ε)α_MLE+ε(0.5/M)11^T)<1. Good.

Responsibility equation singularity: denominator zero if μ_i=0 and no prior excitation (or all α zero). Since μ baseline nonnegative; if μ=0 and no events before, no event should occur; but if event observed, denominator >0. If denominator near zero, z unstable. Need exact breakdown: μ_i→0 and prior excitation sum→0; or β→0? β=0 invalid. β large changes kernel. M=0 division by zero in smoothing. 0.5/M singular if M=0. Also if α_MLE all zeros and M finite okay. If pair not top-100, α floor ≈0.001. Need mention.

Need discuss data preprocessing: "separately for each half and team", "600 seconds", top 100 pairs. Multi-week traps: using 100 pairs excludes rare but important line-breaking passes; α smoothing floor may assign equal credit to nonobserved; β fixed at 0.2 (98% after 20s) not learned; training per match? Wait paper says "fit MHP on total 17,645 pass and shot events" for Barcelona? They combine all matches in season and store each half separately. They then "fit MHP on a total of 17,645 pass and shot events." Could be across matches? Need read: "After constructing data frames for each half, we combine events from all matches in a season and store each half separately." Then "We train ... 70/15/15 split." So MHP trained across halves? They mention "shot responsibilities for each individual match" using entire α matrix. So α estimated from training split of season, applied to matches. Need "multi-week traps": leakage if random split by event rather than match/half; temporal nonstationarity across season; player pair set changes due transfers/injuries; team-level model not player-level. Need be careful not assert if paper says 70/15/15 train/validation/test split but not grouping. They store each half separately and arrays across season; split likely across halves? The paper doesn't specify grouped by match. Audit: random split by half could leak team style; but α is season-level, so not per-match prediction. We can note ambiguity.

Need "CROSS_LAYER_VETO_ADJUDICATION" with physical/biomechanical/weather veto proof. Need formal proof maybe:
- Model state variables: pass/shot timestamps and sender-receiver IDs; xG as scalar; no covariates for weather, pitch, fatigue, biomechanics, defensive pressure except xG.
- Therefore conditional intensity λ_i(t|H_t) is invariant under transformations of unmodeled physical variables that leave event times and pair labels unchanged. If two physical states produce same timestamped event sequence but different causal mechanisms, the likelihood and z are identical. This is an observational equivalence/non-identifiability proof. Thus any physical causal claim is vetoed. Good. Need include exact: "The model does not assign responsibility solely based on the time gap..." page 7? Actually page 7 text: "Importantly, the model does not assign responsibility solely based on the time gap between a pass and a shot." Page 7. Good quote. But physical variables not included. Need "weather veto" if rain changes pass speed; if timestamps still same, model sees same. If rain changes timestamps, then β fixed may misattribute because timescale shifts. Need "biomechanical veto": shot xG incorporates location/pressure but not shooter body orientation; xGI inherits xG, so any shot quality physical info is compressed into xG. Need "physical veto proof": no biomechanical terms in equations; no weather covariates; no player fatigue state. So cross-layer claims require external validation; model alone cannot adjudicate. Good.

Need "RECURSIVE_THEORY_OF_MIND" with "Crisis habit regression vs counter-trap vs clock." Need interpret:
- Recursive theory of mind: modeler/analyst recursively attributes credit to prior passes; players/coaches anticipate credit metrics and adapt behavior; metric becomes target (Goodhart). "Crisis habit regression" = under uncertainty, analysts and models regress to last-touch/assist (traditional xA) because it is legible; the paper's xGI is a counter to that but smoothing 30% uniform also a habit regression? "Counter-trap" = using xGI as causal proof, over-attributing to high-α pairs; recursive loop where players seek high-xGI passes; "clock" = time alignment/timestamp window and β set the credit horizon; 20 seconds, 6 passes; second-half offset 600s. Need discuss "recursive theory of mind" as multi-agent: defender anticipates pass; model's parent responsibility is a Bayesian posterior over hidden branching; if players adapt, α nonstationary; counterfactual self-awareness. Need "crisis habit regression vs counter-trap vs clock" explicitly. Maybe:
  - Crisis habit regression: When xGI disagrees with assist counts under small samples, stakeholders fall back to last-touch assists. The paper's own top-100 filter and floor smoothing are a statistical habit regression: unobserved pairs get uniform floor, which is conservative but can hide rare high-value passes.
  - Counter-trap: Treating α as intentional "influence" rather than conditional temporal association; a high α can reflect tactical recurrence, not causal credit. Recursive trap: players/coaches optimize for xGI; α changes; model breaks.
  - Clock: β=0.2 gives 98% decay after 20s; six-pass window. If actual buildup longer than clock, xGI truncates; if clock offset/stoppage, misalignment. The "clock" is the adjudicator of responsibility. Good.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Talk:
- Hawkes (1971) self-exciting point process lineage; Ozaki? exponential kernel; branching representation; ETAS seismology; network Hawkes; MULCH.
- Sports analytics lineage: xG, xA, xGChain/xGBuildup, Opta xA, FeatHawkes, Baouan threat indices, basketball continuous-time network models, Grieshop.
- Multi-touch attribution from online advertising (last-touch vs multi-touch) [13,20]; this paper maps advertising credit to soccer passes. Good.
- Multi-week traps: (i) β manual fixed; (ii) top-100 pairs chosen by frequency; rare but decisive passes excluded; (iii) season-level α nonstationary across weeks; transfers, injuries, opponent strength; (iv) split ambiguity and event leakage; (v) xG provider differences; (vi) multiplicity of passes and baseline shots (set pieces) not assigned; (vii) player pair dimensions swap when positions change; (viii) smoothing floor can make all unmodeled pairs equal; (ix) interpreting α as causal. Need emphasize multi-week (season) traps: form changes, team tactics, schedule congestion, weather over weeks. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS": detailed. Need include assumptions and breakdown. We can include bullets:
- Variables and units.
- Conditional intensity.
- Branching/responsibility.
- Stability and smoothing.
- xGI.
- Estimation and NLL.
- Breakdown regimes.

Need cite exact page markers for each. Need exact quotes. Need no fake ratios. Equations are from source. We can mention "NLL" not define fully? Could define:
\[
\ell(\theta)=\sum_{k}\log \lambda_{v(k)}(t_k\mid H_{t_k})-\sum_i\int_0^T \lambda_i(t\mid H_t)\,dt
\]
Actually log-likelihood for MHP. Need if we include, ensure correct. Source says "negative log-likelihood (NLL)" but doesn't give equation. We can present standard form as analytic operator, not fake. Need units: log-likelihood dimensionless; integral term dimensionless? λ dt dimensionless. Good. But maybe not necessary. Could include because "formal LaTeX equations" enough. But "source operators and equations" can include all source equations. Need not overdo.

Need ensure "exact singularity/breakdown regimes": 
1. M=0 in smoothing -> division by zero. But M total number sender-receiver pairs; M≥100 if model nonempty, so not practical unless empty. 
2. Denominator in z: if μ_i + sum = 0, undefined; if μ_i=0, no spontaneous events; z_k0=0; if all prior excitation zero and event observed, contradiction. Near-zero denominator -> numerical instability and responsibility concentrated.
3. ρ(α)≥1 -> explosive/nonstationary Hawkes; branching process supercritical; responsibilities no longer sum to 1? Actually if unstable, intensity blows up; MLE invalid. Smoothing supposed to ensure stable but only if α_MLE stable.
4. β=0 or β→∞: kernel not normalized/invalid; β=0 no decay; β→∞ Dirac; fixed β=0.2 not learned; mismatch to actual time scale.
5. Top-100 truncation and floor: α_ij = minimum for excluded pairs; not identifiable; zero vs floor.
6. xGI sum not conserved if only 6 passes or baseline credit excluded; if z truncated and not renormalized, total credited < xG; if table sums to 1, it includes baseline and six. Need mention.
7. Nonstationarity: α, μ assumed constant across halves/season; if tactics/weather/fatigue change, model misspecified.
8. Timestamp offsets: 600s added; if halves have different stoppage, cross-half events not modeled; no overlap. But "separately for each half" so no cross-half influence. Good.

Need maybe mention "PAGE 3" quote exactly: "A Hawkes process [9] is a self-exciting TPP where the occurrence of an event may influence the occurrence of additional events shortly thereafter." Good.

Need maybe mention "PAGE 4" quote: "αij denotes the normalized jump size such that the product αijβ corresponds to the increase in the intensity of variable i triggered by an event in variable j." Exact. Good.

Need "PAGE 7" quote: "The 0.5/M scaling is used to ensure the largest eigenvalue of the scaled all-ones is less than one, ensuring a stable MHP." Exact. Good.

Need "PAGE 8" quote: "This allows players who initiate or advance dangerous plays, but do not provide the final pass, to receive credit for their involvement." Exact. Good.

Need "PAGE 11" quote: "Another limitation of our analysis is the manual selection of β." Exact. Good.

Need no citations outside? We can cite [PAGE N] only. Good.

Need maybe avoid "expected goals (xG) is probability" more precisely xG is estimated probability of goal per shot, in [0,1], often interpreted expected goals. Source: "assigns each shot a value between 0 and 1, representing the likelihood that a shot will result in a goal" Page 2. Good quote. Use that.

Need mention "xGI" not "expected goal involvements" maybe. Good.

Need "GSE + GSI Frontier Reasoning Foundry" maybe need "foundry" style? Not necessary.

Need answer no preamble? Could start directly XML. Need ensure exact XML tags. No markdown maybe okay. Use inside tags.

Need word count >=1000. We'll produce ~2500. Need not too verbose but enough.

Need watch XML validity: Ampersands? Use "and" not &. Less-than signs in text? Use `$<$`? In XML, `<` can break. Avoid raw "<" in text; use `\lt` in LaTeX or words. But XML tags themselves. In LaTeX equations, use `\lt` instead of `<`? If inside XML, `<` raw is problematic. Need escape as `&lt;` or avoid. Since output is text, XML parser might treat `<` as tag. Need use `&lt;` in equations? But then LaTeX not rendered. Could avoid less-than in equations by using `\rho(\alpha)\ge 1` no `<`. For intervals use `[0,1]`; for "l<k" use `0&lt;l&lt;k`? But raw `<` inside equation could be problematic. Since user will read, but XML strict? Better use `0<l<k`? It may be interpreted as tag; but in plain response, not parsed? To be safe, use `0 \lt l \lt k` in LaTeX. For XML text, avoid raw `<` and `&`. Use "less than" in words. Ampersand in "Kornberg & Xu"? Avoid; use "and". Use "≈" okay. Use `→` okay. Use `≤` okay. Avoid `&` entirely. Avoid `<` raw. Good. Use `\lt` in LaTeX. Use `\gt` if needed. Use `&lt;`? No. Good.

Need if quote contains "70/15/15" no issue. Quote contains "0.5/M" okay. Quote contains "98%" okay. Quote contains "≈0.001" okay. Good.

Need if quote contains "βe−β(t)" no issue. Use unicode minus? okay.

Need exact quotes: If I include "The 0.5/M scaling is used to ensure the largest eigenvalue of the scaled all-ones is less than one, ensuring a stable MHP." Contains "less than" not <. Good. Good.

Need quote "we choose the decay parameter β = 0.2. With this choice, about 98% of the influence of a pass on a future pass is gone after 20 seconds." Exact. Good.

Need "we only select the 100 most frequent pairs, which represent the most common and consistent passing interactions for each team." Exact. Good.

Need "We add 600 seconds to the times of all events in the second half to avoid the overlap with stoppage time events in the first half." Exact. Good.

Need "xGI distributes the expected goal (xG) value of a shot" exact. Good.

Need "the model does not assign responsibility solely based on the time gap between a pass and a shot." Page 7 exact. Good.

Need "Barcelona has the highest mean αij value of 0.0050, while Levante UD has one of the lowest at 0.0040." Page 10 exact. Good.

Need "Different β values will result in a different α matrix, and in turn, different shot responsibilities." Page 11 exact. Good.

Need "Notice that the differences in shot responsibilities depend both on the αij value and the time gaps between passes." Page 8 exact? Let's verify page 8: "Notice that the differences in shot responsibilities depend both on the αij value and the time gaps between passes. For the shot in Table 1a, the responsibilities are distributed relatively" yes page 8. Good.

Need "For each shot, we examine the 6 preceding passes and calculate the probability that each pass contributed to the shot, along with the probability that the shot occurred independently of any pass" Page 7 exact. Good. This helps audit truncation. Include.

Need "An MHP can be used to compute the probability that an event l is the parent of event k, often called the responsibility of event l for event k" Page 4 exact. Good.

Need "The model learns a full excitation matrix α, where entry αij captures how a pass between sender-receiver pair j influences a pass between sender-receiver pair i in the near future." Page 6 exact. Good.

Need "we smooth the estimated α by taking a convex combination of the MLE and a scaled all-ones matrix" Page 7 exact. Good.

Need "The smoothing makes the effective floor of the matrix ≈0.001" Page 7 exact. Good.

Need "We use Optuna [1] to select optimal penalty hyperparameters, which we compare using negative log-likelihood (NLL) on validation data." Page 6 exact. Good.

Need "we evaluate several regularization techniques to prevent overfitting: ℓ1, ℓ2, and nuclear norm." Page 6 exact. Good.

Need "the unregularized model achieving the lowest value. Thus, we select the unregularized MHP model, which is the maximum-likelihood estimate (MLE)." Page 6 exact? Text: "We find that the different penalty configurations have only small effects on the test NLL, with the unregularized model achieving the lowest value. Thus, we select the unregularized MHP model, which is the maximum-likelihood estimate (MLE)." Page 6. Good.

Need maybe mention "We train for 1,000 epochs, beyond which the NLL plateaus." Page 6. Good.

Need "The shot responsibility values form the basis of a new metric we propose called expected goal involvements (xGI)" Page 8 exact. Good.

Need "the probability that the shot occurred independently of any pass, i.e., l = 0 in (1)." Page 7 exact. Good.

Need "Independently created or spontaneous shots are often a result of free kicks and penalty kicks, where there is a large time gap between passes and the shot." Page 7 exact. Good.

Need "the model does not assign responsibility solely based on the time gap between a pass and a shot." Page 7 exact. Good.

Need "Barcelona shows overall stronger influences between players compared to Levante UD." Page 10 exact. Good.

Need "Levante UD’s network has more players on the periphery with only weak influences." Page 11 exact. Good.

Need "Barcelona’s network has a stronger core" Page 10? Page 10 ends "Barcelona’s network has a stronger" and page 11 "core". We can quote page 11 "core, while Levante UD’s network has more players on the periphery with only weak influences." Not necessary.

Need "Top 5 La Liga players by average xGI per game" etc. Could mention Neymar top xGI per game 0.457, Messi 0.376. Page 10. Good.

Need "17,645 pass and shot events" Page 8? Actually page 8: "we fit the MHP on a total of 17,645 pass and shot events." Good.

Need "100 most frequent passing pairs" Page 10 figure. Good.

Need maybe mention "600 seconds" page 5. Good.

Need formal "units" section:
- \(t\): seconds (s), because timestamps in seconds and β=0.2 s^{-1}. Check source uses time 10:00 etc; β=0.2. They say "after 20 seconds" with β=0.2, indeed 0.2 s^{-1} * 20 s =4, e^{-4}=0.0183, 98.17% gone. Good.
- \(\mu_i\): s^{-1}.
- \(\alpha_{ij}\): dimensionless normalized jump size; product αβ in s^{-1}.
- \(z_{kl}\): probability, dimensionless.
- xG: expected goals per shot, dimensionless but in goal units.
- xGI: expected goals credited, goal units.
- M: count of sender-receiver pairs, dimensionless integer.
- \(\epsilon=0.3\): dimensionless mixing weight.
- NLL: dimensionless per event? Negative log-likelihood in nats; normalized by number events gives nats/event. Good.

Need assumptions:
- Events are conditionally Poisson with intensity; exponential kernel; constant α, μ, β across training; no unobserved covariates; pass/shot labels and times correct; top-100 pairs capture relevant structure; xG is valid shot value; all credit flows from passes to shot; no defense/weather; stable ρ<1; events within half only; second-half offset.
Need breakdown regimes:
- supercritical, denominator zero, M=0, β invalid, truncation, nonstationarity, timestamp errors, top-100 exclusion, smoothing floor, missing baseline credit.
Need "exact singularity/breakdown regimes" maybe in section.

Need "RETROCAUSAL_GENEALOGY" maybe include "retrocausal" as credit backwards from shot to passes; genealogy of multi-touch attribution. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe mention "crisis habit regression vs counter-trap vs clock" with headings. Need ensure those exact phrases. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe use "veto proof" formal. Need maybe include "physical/biomechanical/weather" explicitly. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios. Need make verifiable and predictions. Use bullet list. Each scenario includes intervention, verifier, prediction under paper's claim, veto if. Need no betting. Good.

Need maybe include "RLVR" as "reinforcement learning with verifiable rewards" but not necessary. Could say "Verifiable reward checks". Good.

Need maybe mention "counterfactual veto" not "betting". Good.

Need no "odds" word. Check text for "odds" substring in "periods"? No. Avoid "good" no. "odds" appears in "goods"? Avoid. Fine.

Need no "spread" word? Avoid. "spread" maybe not. Use "distributed". Avoid "totals" maybe no. "moneyline" no. Fine.

Need no "bet" substring? Avoid "better"? It's okay? "better" contains "bet" but not betting line. System says zero betting lines, not zero substring. But to be safe avoid "better" maybe use "improved". Avoid "bet". Good.

Need no "line" as betting? Can use "lineage", "deadline"? okay. But "line" maybe not. Fine.

Need final answer only XML. Need ensure sections exact. Could include markdown inside XML? Fine. Need not wrap in code block? Probably plain text. If code block, XML tags still visible but okay. Better direct.

Need manage length. We'll write ~2200 words. Need THINK_TRACE >=400. Let's draft.

Need in THINK_TRACE include multi-hop derivation and gray-zone audit. It can be ~700 words. Need mention source operators. Let's write:

<THINK_TRACE>
The source is not a generic network paper; its central operator is a conditional intensity... The derivation chain: event history -> intensity -> branching probability -> shot responsibility -> xGI. Multi-hop: A pass l contributes to shot k only through the denominator and numerator; α_ij learned from co-occurrence in training; smoothing adds floor; β sets clock; xGI weights by xG. Thus three independent levers: α, β, xG. Audit: Page 3 quote... Page 4 quote... Page 6 quote... Page 7 quote... Page 8 quote... The gray-zone issue is causality vs temporal association. The model calls z "probability that event l is the parent" but it is a model-based branch probability under MHP, not a counterfactual causal effect. Another gray zone: 6 preceding passes vs denominator all prior events; if not renormalized, sum not conserved; tables sum to 1.0 in displayed examples, which is an audit flag. Another: top-100 pairs; excluded pairs get floor; smoothing not neutral. Another: β manual. Another: random split unspecified; season-level α may leak. Another: team vs player pair dimension; α_ij captures pair-to-pair, not player quality. Another: shots include goal node; shots terminal; baseline captures set pieces. Another: no physical covariates. Need mention "not betting". Good.

Need SOURCE_OPERATORS_AND_EQUATIONS with equations and quotes. We need be precise with equation notation. Use `\mathcal{H}_t`. Need avoid raw `<`; use `\lt`. Need if I write "0<l<k" avoid; use `0\lt l\lt k`. Good. In text, "less than" instead of <. Good.

Need equations in LaTeX. Good.

Potential issue: Eq for z_k0 as source: denominator includes μ + sum over t_l'<t_k. For l=0 numerator μ. Good. For l>0 numerator α β exp. Good.

Need if I write "sum_{l=0}^{k-1} z_{kl}=1" okay. No `<`.

Need smoothing equation: Use `\mathbf{1}\mathbf{1}^{\top}`. Good.

Need stability: \(\rho(\alpha)\lt 1\). Use `\lt`. Good.

Need xGI: \(\mathrm{xGI}_{l_s} = \sum_{k=1}^{m} (\mathrm{xG})_k z_{kl}\). Good.

Need NLL maybe:
\[
\mathcal L(\theta)=-\sum_{k=1}^{N}\log \lambda_{v(k)}(t_k\mid \mathcal H_{t_k})+\sum_{i=1}^{d}\int_0^T \lambda_i(t\mid \mathcal H_t)\,dt
\]
Wait sign: negative log-likelihood = -sum log λ + sum integral. Good. Units: nats. Need not cite exact because source only says NLL. Fine. But "source operators" maybe include as standard estimator. Mark "standard MHP NLL used implicitly". Good.

Need "Assumptions" and "Breakdown" in same section. Good.

Need "Retrocausal genealogy" include "Hawkes 1971" not source? It cites [9] Laub et al. Good. "ETAS seismology" maybe outside source but lineage. Fine. Need not cite page. But if mention source, cite [PAGE 3] for Hawkes. Good.

Need "multi-week traps" maybe bullet list. Good.

Need "Recursive theory of mind" section. Need not too long but include exact phrases. Good.

Need "Cross-layer veto" section. Need formal proof. Include "Veto condition 1: unmodeled covariate equivalence." Good.

Need "RLVR" scenarios:
1. Timestamp-shuffle veto: Take a test half, preserve pair labels and xG but shuffle timestamps within pass sequence? If MHP responsibilities and xGI rankings match TD baseline under shuffling, then α not adding. Prediction: Paper's claim predicts MHP z differs from TD and top xGI changes; if not, veto. Need verifiable via Spearman? We can say compute total variation between z vectors and top-k overlap. Good. No betting. Good.
2. Pair-label permutation veto: Permute sender-receiver pair labels among events with same timing and xG; retain α. If xGI and responsibility rankings are invariant, model not using pair-specific α; if they change, supports. Prediction: Paper claims pair-specific α matters, so xGI should change significantly. Veto if near zero change. Good.
3. β sensitivity veto: Refit/recompute with β=0.1,0.2,0.5 as source says possible; check top-5 xGI and shot responsibility ordering. Prediction: If conclusions robust, top players should remain; if not, xGI is clock artifact. The paper's own limitation says different β yields different α and responsibilities. Veto if top-5 xGI changes materially or sign reversals. Good.
Maybe also top-100 inclusion: add 101-200 pairs; if xGI rankings unchanged? Actually paper claims top-100 okay; if rare pairs change top players, veto. That's a fourth; but only need 3. Could include as third instead of β? RLVR should be verifiable. I can include three and mention optional. Need exactly 3. Use scenarios above. Need predictions.

Need "verifiable reward" maybe each has metric. Good.

Need no mention "betting" anywhere. Fine.

Need no "spreads totals moneylines odds". Check final. Use "distribution" not "spread". Good.

Need maybe "credit attribution" not "attribution odds". Good.

Need ensure "zero toy equations": We only use source equations and standard NLL. No fake ratios. Good.

Need "SI/information/probability units": include units. Good.

Need "exact singularity/breakdown regimes": explicit. Good.

Need "source pages provided, cite exact [PAGE N] markers and verbatim quotes": include many. Good.

Need ">=1,000-word depth across exact XML sections": yes.

Potential issue: "Source text" includes "arXiv:2610.12775v1 [cs.SI] 8 Oct 2026" future? Not relevant.

Need maybe mention "PAGE 12 references" no.

Need maybe "GSE" "GSI" in opening? Could include inside THINK_TRACE: "GSE extraction..." Not required.

Need produce final. Let's compose carefully.

Need check XML sections no `&` characters. Avoid "Kornberg & Xu". Avoid "R&D". Avoid `&lt;`. I can use "and". Avoid raw `&` in equations? None. Good.

Need if quote has `αij` okay. Quote with "Su´arez" okay. Use unicode. Good.

Need if quote has "e−β(t)" okay. Good.

Need if quote has "≈" okay. Good.

Need if quote has "β = 0.2" okay. Good.

Need if quote has "70/15/15" okay. Good.

Need if quote has "0.5/M" okay. Good.

Need if quote has "xG" okay.

Need if quote has "l = 0" okay.

Need if quote has "6 preceding passes" okay.

Need if quote has "100 most frequent pairs" okay.

Need if quote has "17,645" okay.

Need if quote has "top 100" okay.

Need if quote has "MULCH" okay.

Need if quote has "FeatHawkes" okay.

Need if quote has "xGChain" okay.

Need if quote has "expected goal involvements (xGI)" okay.

Need if quote has "last-touch attribution" okay.

Need if quote has "multi-touch attribution" okay.

Need if quote has "descendant matrix D = α(I −α)−1" okay. Could include. Need no `<`. Fine.

Need "exact singularity" for D? Source mentions descendant matrix in prior work. Could mention if used, D singular at spectral radius 1. But this paper uses branching responsibilities. Maybe include in genealogy: descendant matrix D = α(I−α)^{-1} requires (I−α) invertible; breakdown if eigenvalue 1. But this paper not using D. Good.

Need "SOURCE_OPERATORS" include "In prior MHP soccer work, D=..." maybe not necessary. But equations from source include D page 4. We can mention as lineage. Good.

Need "CROSS_LAYER" include "physical/biomechanical/weather veto proof" maybe quote "expected goals (xG) is a metric that assigns each shot a value between 0 and 1, representing the likelihood that a shot will result in a goal based on factors such as shot location and defensive pressure" Page 2. Good. This shows xG already includes some physical factors but not weather. Use quote. Good.

Need "biomechanical" not in source; we can say absent. Good.

Need "weather" absent. Good.

Need "proof": Use "observational equivalence lemma" not fake. We can state:
If two physical states \(S_1,S_2\) induce identical \((t_k,v(k),xG_k)\) records, then \(\lambda_i(t|H_t)\), \(z_{kl}\), and xGI are identical because equations depend only on those records. Therefore model cannot adjudicate between physical mechanisms. This is a valid proof of non-identifiability under unmodeled covariates. Good.

Need "physical veto" if weather changes event times, it enters only through times; fixed β may mis-scale. Good.

Need "biomechanical veto" if shot xG is fixed per shot, xGI cannot distinguish shooter biomechanics beyond xG. Good.

Need "weather veto" if rain reduces pass speed, observed time gaps increase, z shifts to later passes; model interprets as lower influence, not weather. Good.

Need "cross-layer veto adjudication" maybe "veto proof" with conditions:
- V1: if external physical measurement changes and event records unchanged, model outputs unchanged -> physical claim vetoed.
- V2: if external covariate predicts residual in z/xGI after controlling for timestamps and pairs, model is misspecified.
- V3: if weather/fatigue changes β or α, constant-parameter assumption false. Good.

Need "RECURSIVE_THEORY_OF_MIND" mention "clock" as β and 6-pass and 600s. Good.

Need maybe "crisis habit regression" phrase: define as "under model uncertainty, stakeholders regress to last-touch assist logic". "Counter-trap" define as "metric becomes target; players and coaches adapt; α nonstationary; xGI overfit to historical pair frequencies". "Clock" define as "β=0.2 and 6-pass horizon adjudicate credit; if buildup outside clock, no credit". Good.

Need final answer. Need ensure word count. Let's write ~3000 words. But desired oververbosity 5; okay.

Need not include "I". Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central operator is a conditional intensity for a multivariate Hawkes process (MHP), not a generic passing-network centrality. The multi-hop derivation runs: event history → conditional intensity → branching probability → shot responsibility → expected goal involvements. First, a pass or shot is represented as a timestamped event in a sender-receiver pair dimension. Second, the MHP learns an excitation matrix \(\alpha\), baseline rates \(\mu\), and a fixed decay \(\beta\). Third, the responsibility equation converts the intensity into a normalized parent probability for each prior event. Fourth, those responsibilities are multiplied by the shot’s xG value and summed over shots to produce xGI. The audit question is whether each hop is identified by the source or is an assumption.

The paper is explicit on the first hop. On [PAGE 3], it states: “A Hawkes process [9] is a self-exciting TPP where the occurrence of an event may influence the occurrence of additional events shortly thereafter.” On [PAGE 4], it states: “An MHP can be used to compute the probability that an event l is the parent of event k, often called the responsibility of event l for event k”. On [PAGE 6], it states: “The model learns a full excitation matrix α, where entry αij captures how a pass between sender-receiver pair j influences a pass between sender-receiver pair i in the near future.” These are source-backed operators. The gray-zone is the word “parent”: the equation gives a model-based branching probability under an assumed exponential Hawkes law; it does not prove counterfactual causation from pass to shot. A high \(\alpha_{ij}\) can reflect tactical recurrence, possession structure, opponent weakness, or data sparsity rather than an isolated causal contribution.

The second gray-zone is temporal truncation. On [PAGE 7], the paper states: “For each shot, we examine the 6 preceding passes and calculate the probability that each pass contributed to the shot, along with the probability that the shot occurred independently of any pass”. But the responsibility equation on [PAGE 4] has a denominator over all prior events \(t_{l'}\lt t_k\). If the analysis truly retains only six passes, then the reported responsibilities are either a truncated view or an implicitly renormalized view. The displayed tables on [PAGE 9] sum to unity including the spontaneous-shot baseline, which is an audit flag: the text does not explicitly state renormalization. This matters because xGI conservation depends on whether the baseline and omitted passes are included. If omitted passes are not represented, then the sum of player xGI is not equal to the sum of shot xG; if they are renormalized into six passes, then the six-pass window becomes a stronger modeling assumption than the equation alone suggests.

The third gray-zone is the fixed clock. On [PAGE 6], the paper states: “we choose the decay parameter β = 0.2. With this choice, about 98% of the influence of a pass on a future pass is gone after 20 seconds.” That fixes the effective credit horizon. On [PAGE 11], the paper admits: “Another limitation of our analysis is the manual selection of β.” and “Different β values will result in a different α matrix, and in turn, different shot responsibilities.” Thus the derivation is conditional on a manually chosen time scale. A long buildup that takes more than twenty seconds is not merely down-weighted; it is structurally near-invisible relative to the baseline. The “clock” is therefore not a neutral preprocessing detail; it is a substantive attribution prior.

The fourth gray-zone is the top-100 pair filter. On [PAGE 5], the paper states: “we only select the 100 most frequent pairs, which represent the most common and consistent passing interactions for each team.” On [PAGE 7], smoothing is added because “αij = 0 if sender-receiver pair j never occurs shortly before a sender-receiver pair i in the training data.” The smoothed matrix has a floor near 0.001, so rare or unmodeled pairs are not literally zero, but they are pushed toward a uniform prior. This is a statistical habit regression: under sparse pair data, the model falls back to a small uniform value rather than estimating pair-specific influence. The source is candid about this, but the consequence is that rare line-breaking passes, set-piece routines, and unusual combinations can be systematically undercredited.

The fifth gray-zone is team-season aggregation. The paper fits a season-level MHP and applies the same \(\alpha\) to individual matches. On [PAGE 8], it reports fitting “on a total of 17,645 pass and shot events.” On [PAGE 10], it reports team-level mean \(\alpha_{ij}\): “Barcelona has the highest mean αij value of 0.0050, while Levante UD has one of the lowest at 0.0040.” That is a useful descriptive contrast, but it also reveals a nonstationarity problem: a single season-level excitation matrix averages over formations, injuries, opponent adjustments, weather, and tactical phases. The model has no week-specific state. A multi-week audit should therefore ask whether the estimated \(\alpha\) is stable across blocks of matches; if it is not, the xGI attribution is a season-average artifact rather than a stable player trait.

The sixth gray-zone is physical and biomechanical absence. The MHP equations contain no weather covariate, no fatigue state, no pitch condition, no defensive pressure beyond what is already compressed into xG, and no biomechanical shot-quality term. On [PAGE 2], xG is described as “a metric that assigns each shot a value between 0 and 1, representing the likelihood that a shot will result in a goal based on factors such as shot location and defensive pressure.” That means xGI inherits xG’s omissions. If a shot’s xG already encodes location and pressure, xGI cannot separately credit the passer for creating a better biomechanical shooting posture. If rain slows passes, the observed time gaps change, and the fixed \(\beta\) will interpret the slower sequence as weaker temporal influence. The model can still rank passes under its own assumptions, but it cannot adjudicate physical causation without external validation.

The final audit point is the evaluation split. The paper reports a “70/15/15 train/validation/test split” on [PAGE 6] and uses NLL on validation data, but the text does not fully specify whether the split is grouped by match, by half, or by event. Because the object is a season-level \(\alpha\), random event-level splitting could leak within-match passing structure into validation. This does not invalidate the descriptive xGI ranking, but it weakens any claim that the model generalizes to unseen teams or future weeks. The correct audit stance is: the source supports a conditional, model-based credit allocation under a fixed exponential kernel, top-100 pair restriction, and season-level parameterization; it does not support a universal causal claim about player value.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines an exponential multivariate Hawkes process over \(d\) dimensions, where each dimension is a sender-receiver pair. The conditional intensity is given on [PAGE 3] and [PAGE 4] as

\[
\lambda_i(t\mid \mathcal H_t)
=
\mu_i
+
\sum_{j=1}^{d}
\sum_{t_l\in T_j:\, t_l\lt t}
\alpha_{ij}\beta e^{-\beta(t-t_l)}.
\]

Here \(t\) and \(t_l\) are in seconds; \(\lambda_i(t\mid\mathcal H_t)\) is in \(\mathrm{s}^{-1}\); \(\mu_i\) is a baseline rate in \(\mathrm{s}^{-1}\); \(\beta\) is a decay rate in \(\mathrm{s}^{-1}\); and \(\alpha_{ij}\) is a dimensionless normalized jump size. The source states on [PAGE 4]: “αij denotes the normalized jump size such that the product αijβ corresponds to the increase in the intensity of variable i triggered by an event in variable j.” Thus \(\alpha_{ij}\beta\) has units of \(\mathrm{s}^{-1}\). The kernel \(\beta e^{-\beta(t-t_l)}\) integrates to one over positive time, so the branching interpretation requires the stability condition \(\rho(\alpha)\lt 1\), where \(\rho\) is the spectral radius. If \(\rho(\alpha)\ge 1\), the linear Hawkes process is supercritical and the intensity does not have a stable stationary mean; responsibilities and xGI become ill-defined as long-run credit allocation.

The responsibility of prior event \(l\) for event \(k\) is given on [PAGE 4] as

\[
z_{kl}
=
\frac{
\alpha_{v(k)v(l)}\beta e^{-\beta(t_k-t_l)}
}{
\mu_{v(k)}
+
\sum_{t_{l'}\lt t_k}
\alpha_{v(k)v(l')}\beta e^{-\beta(t_k-t_{l'})}
},
\qquad 0\lt l\lt k,
\]

with the baseline or spontaneous-event responsibility

\[
z_{k0}
=
\frac{
\mu_{v(k)}
}{
\mu_{v(k)}
+
\sum_{t_{l'}\lt t_k}
\alpha_{v(k)v(l')}\beta e^{-\beta(t_k-t_{l'})}
}.
\]

The \(z_{kl}\) are dimensionless probabilities under the model. The source describes them as “the probability that an event l is the parent of event k” on [PAGE 4]. The exact singularity regime is a zero denominator: if \(\mu_{v(k)}=0\) and no prior excitation is present, then \(z_{kl}\) is undefined; if the denominator is near zero while an event is observed, the responsibilities become numerically unstable and concentrate on whichever small term remains. A second breakdown is truncation: the equation’s denominator is over all prior events, but the analysis on [PAGE 7] says “we examine the 6 preceding passes.” If the six-pass subset is not renormalized, then the reported \(z_{kl}\) do not sum to one over the omitted history. The displayed [PAGE 9] tables include a spontaneous-shot baseline and six pass responsibilities that sum to unity in the shown cases, which is a useful audit clue but not a full specification of the truncation rule.

The smoothing operator is given on [PAGE 7]:

\[
\alpha
=
(1-\epsilon)\alpha^{\mathrm{MLE}}
+
\epsilon\left(\frac{0.5}{M}\right)\mathbf{1}\mathbf{1}^{\top},
\]

where \(M\) is the total number of sender-receiver pairs and \(\epsilon=0.3\). The source states: “The 0.5/M scaling is used to ensure the largest eigenvalue of the scaled all-ones is less than one, ensuring a stable MHP.” and “The smoothing makes the effective floor of the matrix ≈0.001.” The \(M=0\) case is a division-by-zero singularity, though it is not practical when the model contains 100 pairs. More importantly, the all-ones component has spectral radius \(0.5\), but the convex combination is stable only if \(\rho((1-\epsilon)\alpha^{\mathrm{MLE}}+\epsilon(0.5/M)\mathbf{1}\mathbf{1}^{\top})\lt 1\). If the unregularized MLE is already unstable, the smoothing component alone does not prove stability of the combined matrix.

The xGI operator is given on [PAGE 8]:

\[
\mathrm{xGI}_{l_s}
=
\sum_{k=1}^{m}
(\mathrm{xG})_k\, z_{kl},
\]

where \(m\) is the number of shots in a game and \(l_s\) is the sender of pass \(l\). The xG value is a shot-level expected-goal quantity in goal units, commonly interpreted as a probability between zero and one. The \(z_{kl}\) are dimensionless, so xGI is in expected-goal units. The source says on [PAGE 8]: “xGI distributes the expected goal (xG) value of a shot” and “This allows players who initiate or advance dangerous plays, but do not provide the final pass, to receive credit for their involvement.” The conservation caveat is exact: for each shot, the sum over all parents plus the baseline is one under the full model. If the baseline is excluded from player credit, or if only six passes are retained without renormalization, then the sum of player xGI is not equal to the sum of shot xG. That is not a small bookkeeping detail; it determines whether xGI is an additive decomposition or a truncated ranking score.

The estimation operator is the standard MHP negative log-likelihood. The source reports that regularization choices were compared “using negative log-likelihood (NLL) on validation data” on [PAGE 6], and that “the unregularized model achieving the lowest value. Thus, we select the unregularized MHP model, which is the maximum-likelihood estimate (MLE).” In standard form,

\[
\mathcal L(\theta)
=
-\sum_{k=1}^{N}
\log \lambda_{v(k)}(t_k\mid\mathcal H_{t_k})
+
\sum_{i=1}^{d}
\int_0^T
\lambda_i(t\mid\mathcal H_t)\,dt,
\]

which is measured in nats; normalizing by \(N\) gives nats per event. The source’s fixed \(\beta=0.2\) means the kernel has decay time \(1/\beta=5\) seconds and the source’s own statement that “about 98% of the influence of a pass on a future pass is gone after 20 seconds” on [PAGE 6] follows from \(e^{-0.2\cdot 20}=e^{-4}\approx 0.0183\).

Assumptions: constant \(\alpha,\mu,\beta\) over the training window; correct event timestamps and sender-receiver labels; shots are terminal events to a goal node; top-100 pairs capture the relevant passing structure; xG is a valid shot-level value; and unmodeled physical covariates do not alter the event-generating process. Breakdown regimes: \(\rho(\alpha)\ge 1\); zero or near-zero responsibility denominator; \(M=0\) in smoothing; \(\beta=0\) or an invalid kernel normalization; severe timestamp misalignment; exclusion of decisive rare pairs; nonstationary tactics or player availability across weeks; and interpretation of model-based parent probabilities as counterfactual causal effects.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is the self-exciting point-process tradition descending from Hawkes, where past events raise the intensity of future events through a decaying kernel. The source cites this lineage on [PAGE 3]: “A Hawkes process [9] is a self-exciting TPP where the occurrence of an event may influence the occurrence of additional events shortly thereafter.” The exponential kernel is the tractable branching form: each event can be viewed as producing offspring whose expected count is controlled by \(\alpha\). In seismology, neuroscience, and social-event modeling, this branching representation is used to separate background rate from triggered activity. The soccer adaptation here is to replace generic event types with sender-receiver pair dimensions, so the branching matrix becomes a passing-network influence matrix.

The sports-analytics genealogy is equally important. Traditional credit is last-touch: the shooter gets the goal and the final passer gets the assist. The paper summarizes the problem on [PAGE 2]: xA “allows the player who passed the ball to the shooter to still receive credit for creating a goal scoring opportunity regardless of the outcome of the shot. However, no credit is passed further back, to the players who made the passes leading up to the final pass.” The next step in the lineage is xGChain, which assigns the shot’s xG to all players in the possession. The paper criticizes that approach on [PAGE 3]: “A downside is that a player who makes the first pass in a long passing sequence receives equal credit to the player who makes the last pass”. The MHP approach is a retrocausal refinement: instead of equal credit to all possession participants, it moves credit backward from the shot through a learned branching chain, weighting by both time gap and pair-specific excitation.

A second lineage is multi-touch attribution in online advertising. The paper explicitly maps last-touch attribution to assists and multi-touch attribution to distributing credit across prior events. Prior MHP soccer work, FeatHawkes and Baouan et al., used player dimensions and the branching matrix for last-touch credit and the descendant matrix \(D=\alpha(I-\alpha)^{-1}\) for multi-touch credit. That descendant operator has its own singularity at eigenvalue one of \(\alpha\): if \(I-\alpha\) is not invertible, the indirect-credit sum diverges. The present paper avoids \(D\) by making the sender-receiver pair the dimension and using the responsibility equation directly. That is a genuine architectural shift: pair-level dimensions preserve passing-network structure, while player-level dimensions preserve individual identity. The trade-off is that pair-level \(\alpha_{ij}\) is not a player-quality parameter; it is a relational excitation parameter.

Multi-week traps follow from that genealogy. First, a season-level \(\alpha\) averages over tactical phases; a team that changes formation after a mid-season injury may have a nonstationary excitation matrix. Second, the top-100 frequency filter is a frequency prior, not a tactical prior: a rare but decisive progressive pass can be excluded because it is rare, not because it is unimportant. Third, the fixed \(\beta=0.2\) encodes a five-second decay scale and a twenty-second near-extinction horizon; slower build-ups and stoppage-time sequences are structurally discounted. Fourth, the 600-second second-half offset on [PAGE 5] prevents first-half stoppage overlap but does not model within-half stoppage or added time; timestamp alignment remains a preprocessing assumption. Fifth, xG provider differences and shot-type heterogeneity can propagate directly into xGI, because xGI is a linear reweighting of xG. Sixth, the 70/15/15 split is not described as grouped by match or half, so an event-level split could leak within-match passing patterns into validation. Seventh, the smoothing floor is a uniform prior that can make unmodeled pairs look equally plausible; that is statistically conservative but tactically blunt. Eighth, the model assumes shots are terminal; rebounds, deflections, and second shots are not modeled as a continuing chain, so the credit window ends at the first shot event.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive problem is that credit metrics change behavior. A player or coach who knows that xGI rewards being the sender in high-\(\alpha\) pairs may adapt passing choices toward those pairs. That adaptation changes the future \(\alpha\), which changes future xGI. The model is therefore not a fixed observer of a fixed system; it is a feedback loop. The paper’s own design choices create three distinct recursive failure modes: crisis habit regression, counter-trap, and clock.

Crisis habit regression occurs when uncertainty about the model causes stakeholders to fall back to the legible last-touch statistic. Under small samples, a player with few high-\(\alpha\) sequences may have unstable xGI; the assist count is simpler and more familiar. The paper’s smoothing rule is itself a statistical habit regression: when a pair is unobserved, the model retreats to a uniform floor near 0.001 on [PAGE 7]. That is defensible as a prior, but it means the model’s answer in sparse regions is a habit, not an estimate. In a crisis, analysts will regress to xA or assists unless the uncertainty of xGI is reported alongside the point estimate.

Counter-trap occurs when the metric becomes a target and the model’s branching interpretation is mistaken for causal proof. A high \(\alpha_{ij}\) means that pair \(j\) has historically preceded pair \(i\) more often than the baseline and time decay would predict. It does not mean that forcing the ball through pair \(j\) will cause a better shot. If coaches optimize for xGI by overusing historically high-\(\alpha\) pairs, opponents can adjust, and the historical \(\alpha\) becomes stale. The counter-trap is especially acute because the paper’s top-100 filter selects frequent pairs: the model is most confident precisely where the team is most predictable. A recursive opponent can exploit that predictability.

Clock refers to the temporal adjudication built into the model. The fixed \(\beta=0.2\) and the six-pass inspection window define the credit horizon. A pass outside the clock is not credited, even if it is tactically decisive. A pass inside the clock is credited partly because it is recent, not only because it is influential. The second-half 600-second offset on [PAGE 5] is another clock: it prevents cross-half overlap but does not resolve stoppage-time ambiguity within a half. In recursive terms, the clock determines which prior actions are visible to the model and therefore which actions players are rewarded for repeating. If the clock is too short, slow build-up play is undervalued; if it is too long, irrelevant early passes receive floor credit. The source acknowledges the clock sensitivity on [PAGE 11]: “Different β values will result in a different α matrix, and in turn, different shot responsibilities.”

A recursive theory of mind should therefore distinguish three layers: the model’s posterior over parent events, the analyst’s posterior over model validity, and the player’s posterior over what the analyst will reward. The paper provides the first layer formally, the second layer only through limitations, and the third layer not at all. That asymmetry is the main recursive risk: xGI can look like a causal credit score even though it is a conditional branching score under a fixed clock, a top-100 filter, and a season-average excitation matrix.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto question is whether physical, biomechanical, or weather evidence can invalidate the model’s attribution. The formal answer is yes, through observational equivalence. The MHP likelihood and responsibility equations depend only on event times, sender-receiver pair labels, the learned \(\alpha,\mu,\beta\), and the shot xG. If two physical states produce the same timestamped event records and the same xG values, then \(\lambda_i(t\mid\mathcal H_t)\), \(z_{kl}\), and xGI are identical. Therefore the model cannot adjudicate between two different physical mechanisms that generate the same records. This is not a speculative objection; it follows directly from the absence of physical covariates in the equations on [PAGE 3] and [PAGE 4].

Weather veto: rain, heat, wind, and pitch condition can change pass speed, touch frequency, and shot quality. If weather changes the observed time gaps, the fixed \(\beta=0.2\) will rescale the apparent influence of passes. The model will attribute the change to pair-specific \(\alpha\) or to time decay, not to weather. A cross-layer veto is triggered if an external weather covariate predicts residuals in \(z_{kl}\) or xGI after controlling for timestamp gaps and pair identity. In that case, the constant-parameter assumption is false, and the attribution is confounded by an omitted environmental layer. If weather changes the event records but not the xG, the model still sees a different sequence, but it has no way to separate “weather made the pass slower” from “the pair is less influential.”

Biomechanical veto: xG already compresses shot location and defensive pressure into a scalar, as described on [PAGE 2]: xG represents “the likelihood that a shot will result in a goal based on factors such as shot location and defensive pressure.” It does not contain shooter body orientation, balance, fatigue, or ball spin. xGI inherits that compression. A passer who creates a clean biomechanical shooting posture may receive no extra credit beyond the shot’s xG. A cross-layer veto is triggered if biomechanical tracking data explain shot outcomes beyond xG and beyond the pass sequence. In that case, xGI is not a complete credit decomposition; it is a pass-network decomposition of an already-compressed shot value.

Physical fatigue veto: the model has no player-level fatigue state, minutes played, sprint load, or injury status. If fatigue changes baseline rates \(\mu_i\) or excitation \(\alpha_{ij}\) across a match or across weeks, the season-level matrix is misspecified. The paper’s team-level comparison on [PAGE 10] — “Barcelona has the highest mean αij value of 0.0050, while Levante UD has one of the lowest at 0.0040” — is a descriptive average, not a fatigue-controlled estimate. A cross-layer veto is triggered if within-match time blocks show systematic drift in \(\alpha\) or \(\mu\) that coincides with physical load. The model would then be averaging over a nonstationary physical process.

The adjudication rule is therefore: the MHP can allocate credit conditional on the recorded event sequence, but it cannot prove physical causation. Physical, biomechanical, or weather evidence can veto a causal interpretation if it changes the event records, changes xG, or predicts residuals in the model’s responsibilities. It cannot veto the model’s internal ranking unless the ranking is claimed to be causally complete. The source’s own limitation language supports this narrower reading: the model is a branching-probability attribution, not a controlled experiment.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual checks can veto the claim that the MHP’s learned \(\alpha\) adds meaningful attribution beyond time decay and pair frequency. Each check produces a measurable statistic and a prediction under the paper’s claim.

1. Timestamp-shuffle veto. Take a held-out half, preserve the sender-receiver pair labels and shot xG values, but shuffle the timestamps within each passing sequence while keeping the same multiset of time gaps. Recompute \(