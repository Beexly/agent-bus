---
source: "openalex_W3092918295.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 14
model: deepseek/deepseek-v4.1-flash-1017
words: 6372
---

<NATIVE_REASONING>
We need answer to user. They provided source text and prompt requiring analysis under exact XML sections, >=1000 words. But source is IEEE paper on ARENA RAN forecasting football events. The prompt seems oriented to sports betting? "ZERO BETTING LINES", "Crisis habit regression vs counter-trap vs clock", "weather veto", "RLVR counterfactual vetoes", "retrocausal genealogy". We must not mention betting lines/odds. We need use source only? "DRIVE SOURCE" and pages. Need cite exact [PAGE N] markers and verbatim quotes. Need formal LaTeX, units, assumptions, singularity/breakdown. Need deep THINK_TRACE >=400 words. Need all sections. Need no betting lines. We can frame as RAN capacity forecasting and event dynamics, not gambling. Need fulfill exact XML. Need maybe discuss "crisis habit regression vs counter-trap vs clock" in context of network operations during mass events: crisis habit regression = operator falls back to CoW/CoLT; counter-trap = overprovisioning or stale forecasting; clock = event timeline / epoch. "Retrocausal genealogy" historical/scientific lineage and multi-week traps. Cross-layer veto: physical/biomechanical/weather veto proof. Need apply to stadium RAN: physical veto (PRB saturation, band 1800 MHz saturates >250 users), biomechanical (crowd mobility/arrival/departure, break-time data avalanche), weather (not in source; must say absent/no proof, veto cannot be adjudicated from source). Need maybe identify "weather" not covered, so veto proof absent; no false claims. "RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions." RLVR = Reinforcement Learning from Verifiable Rewards? We can define counterfactual vetoes with predictions using paper metrics. Need be precise.

Need maybe critique source: model-free deep learning, BCO formulation, equations. Need formal LaTeX with units. Need cite exact page markers and verbatim quotes. Need include units: bits, seconds, PRBs, bits/s, users, attempts/sec, MHz, ms, km^2, epochs T, etc. Need singularity/breakdown regimes: saturation at 250 users, PRB >100%, 1800 MHz saturation, linearity breakdown for DL above 250 active UEs, correlation sign inversion Active UEs-DL Volume, max absolute error 0.505, ARIMA weak, etc. Need all sections with enough depth. Desired oververbosity 5 but user asks >=1000 words. Need output only XML? Likely yes. We should include exact sections. Need ensure no odds/spreads/moneylines. Mention "no betting lines" not necessary maybe but avoid. Need no toy equations. We can include equations from source and derived formal ones. Need maybe use \begin{equation} etc. Need "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We can include all. Need "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We should quote exact phrases. Need all sections. Need at least 1000 words. THINK_TRACE >=400. Let's plan.

We need answer with XML tags exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need maybe no markdown? XML can contain markdown-ish. Fine.

Need discuss "DRIVE SOURCE" maybe first line? Could include.

Need include word count? No.

Need ensure "ZERO BETTING LINES" no mention. Avoid words odds, spread, moneyline. "betting" maybe not. Fine.

Need "ZERO TOY EQUATIONS": no fake ratios. We can state only paper equations and derived formal equations with units. Avoid "Force/Fatigue". We can use definitions. Need avoid inventing fake ratio? We use Δ factor from paper Eq. 12. That's source. We can derive saturation ratio? Paper has peak-to-average ratio. That's source metric. We can formalize utilization \rho. That's okay, not toy. Need unitless. Need explicit assumptions. Need singularity: when \tilde U_b =0? Eq 12 has division by \tilde U_b, singularity if zero. Need mention. Paper says number of users required to saturate resources. If zero, undefined. Good. Another singularity: \rho=1 saturation, PRB allocation >100%, queue stability condition equality. Also BCO stochastic gradient step with ϵ perturb; if ϵ→0 estimator variance etc. Need mention exact breakdown regimes from source: 1800-MHz band saturates when users >250; average throughput per user decreases up to 50x; active UEs up to 600 per minute vs regular; correlation Active UEs-DL Volume goes negative during match; ARIMA max abs error 0.505; underutilized base stations poor regardless settings; CNN-LSTM best J=200 Φ=64; ARENA η=64 μ=128; dropout 0.2; learning rate 10^-4; 60/40 split. Need cite pages.

Need maybe include quotes:
PAGE 4: "The event is scheduled to start at 19.30h and finish at 21.15h." and "two volume peaks at around 18h and at around 21.30h" and "third peak, concomitant with the break of the event" and "strongly linear relationship" "Such linearity is broken during the event for downlink traffic." Good.
PAGE 5: "the 1800-MHz band saturates when the number of users grows over 250" and "average throughput capacity per user decreases up to 50 times." "ranging up to 600 active UEs minute" (weird unit, likely active UEs per 15 min? Quote exact). "over 10 times higher than those during a regular day."
PAGE 6: "the considered eNB saturates its physical resources (PRBs) during most part of the game distorting the underlying relationship between the features" and "negative value for the couple “Active UEs-DL Volume.”"
PAGE 7: Eq 1 QoS. "the model capturing the behavior of τeu is not known a priori and so is qe b’s." "long-term base station serving rate must be greater or equal to the long-term data arrival rate."
PAGE 8: BCO problem Eq 4-5. "trivial solution ... infinitely large amount of spectrum" and cost.
PAGE 10: ARIMA "maximum absolute error of 0.505"; "CNN-LSTM model with J = 200 and Φ = 64 provides best performances"; "temporal information alone is not enough".
PAGE 11: "η = 64 and μ = 128 settings" and "underutilized in regular days ... biased estimations" and Eq 12.
PAGE 12: "2 hours before a real event" "keeping the amount of time wherein extra capacity is required (PRB allocation above 100%) limited, thereby minimizing the incurred cost."
Need cite exact page markers.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage: LTE PRACH/RACH, 3GPP TS 36.331 [23], LSTM Hochreiter & Schmidhuber 1997 [29], ConvLSTM Shi et al. 2015 [31], CNN-LSTM Ma et al. 2017 [30], ARIMA [33], BCO [26]-[28], universal approximation Cybenko [37], DeepCog [21], network slicing [5], Super Bowl [8], crowded events [9]. Multi-week traps: seasonality, event rarity, walk-forward retraining, context drift, underutilized cells, correlation inversion, queue stability long-term. Need mention "retrocausal" as historical dependence: future event schedule influences proactive allocation; the operator uses past weeks to forecast future; model-free because rare events. Multi-week traps: holiday/seasonal drift, team ranking attendance, event schedule, break-time peak, pre/post arrival. Need cite pages.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Define:
- Crisis habit regression: operator's habitual response to congestion is CoWs/CoLTs/small cells/network slicing (source says rudimentary, costly, slow). Under event stress, regression to this habit; but ARENA argues forecast instead. 
- Counter-trap: overprovisioning (infinite spectrum trivial solution) and/or stale LSTM/ARIMA forecasting underestimates peaks; if operator reacts by adding capacity after observed congestion, feedback loop. Also "counter-trap" could be trusting model when underutilized eNB biased. 
- Clock: event clock (19:30-21:15, pre 3h, post 2h, break peak), 15-min epochs, forecast horizon 2h, RACH 10ms access occasions, 128 attempts/s over 10MHz. Need recursive ToM: operator models attendees, attendees model network availability (postpone uploads), network models demand; recursive. Habit regression vs counter-trap vs clock: The clock provides verifiable timing; crisis habit regression ignores clock; counter-trap is false model of user behavior. Need mention "attendees postpone upload/download due to congestion" [PAGE 3] and break avalanche. Use quotes.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. For this paper:
Physical layer: PRB saturation, 1800MHz band >250 users, PRB utilization >100% extra capacity, queue stability, throughput per user 50x drop. Veto proof: if \rho_b^e ≥1, QoS constraint cannot be met without extra PRBs/CoW/slicing. 
Biomechanical: crowd arrival/departure, pre-event 18h peak, post 21:30 peak, break peak, 25,097 attendees, 30,000 capacity, 600 active UEs. Veto: if attendee flow produces demand beyond cell capacity, model must allocate; but no biomechanical sensor data. 
Weather: not in source. No weather variables, no meteorological measurement. Therefore weather veto cannot be proven from provided pages; must be declared unadjudicated/absent. Need not invent. The prompt says "Physical/biomechanical/weather veto proof." We can say physical and biomechanical have source evidence; weather has no source evidence and thus veto is not admissible from this drive. That is rigorous. Maybe "weather veto proof" means prove whether weather can veto. We can state no weather feature appears; thus any weather-veto claim would be unsupported. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR: reinforcement learning with verifiable reward? We can frame as counterfactual tests with verifiable outcomes from source metrics. Each scenario: intervention, verifier metric, prediction, veto condition. Need 3. 
1. No-context LSTM vs ARENA context: at event window, no-context temporal model underestimates active users; verifier: max absolute error; prediction: ARIMA max abs error 0.505 and LSTM deteriorates; veto if ARENA fails to reduce peak underestimation vs context. But need specific RLVR. 
2. Extra PRB allocation via Eq 12 with Δ scaling vs static capacity: if predicted \bar U_b > \tilde U_b, allocate PRBs; prediction: keeps PRB allocation above 100% limited and preserves QoS; veto if allocated PRB remains >100% for extended event or QoS below regular. 
3. Underutilized eNB model trust: for low-load cells, forecasts biased regardless hyperparams; prediction: poor max error; veto if controller trusts forecast without fallback / allocates incorrectly. 
Could also include weather veto scenario: no weather data in source, so RLVR cannot verify; veto scenario is "claim weather-driven demand" fails because no feature. But need 3 verifiable. Maybe include RACH congestion? The paper focuses downlink; but RACH is physical veto. However ARENA doesn't address RACH. RLVR scenario: if congestion is uplink RACH collision rather than downlink PRB, ARENA's PRB forecast cannot verify QoE; veto if RACH attempts exceed 128/s. That's source-based. Good. Need predictions. 
Need "3 verifiable RLVR veto scenarios + predictions" with exact predictions using source numbers. Need not mention betting. Good.

Need ensure all sections >=1000 words total. Let's write thorough. Need "THINK_TRACE" >=400 words. Let's draft.

Need be careful: "SOURCE TEXT" has page markers. Use [PAGE 4] etc. The exact quote should be verbatim. We can use quotation marks. Ensure not too many but enough. Need citations.

Need formal equations. Let's formulate.

In SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- QoS: \(q_b^e = \frac{\sum_{u\in U_b^e} r_u^e}{\sum_{u\in U_b^e} \tau_u^e}\) [PAGE 7, Eq. 1], units bits/s (since bits / seconds). Actually numerator bits, denominator seconds, so bits/s. \(r_u^e\) bits, \(\tau_u^e\) seconds. Good.
- Queue stability: \(\sum_{e\in E}\sum_{u\in U_b^e}(r_u^e-\zeta_u^e(c_b^e))\le 0\) [PAGE 7, Eq. 2]. Units bits per epoch? Sum over epochs and users; if per user bits, sum mismatched; but we can say as in source, summand is bits, condition dimensionless after normalization? Better: state source presents it; dimensionally \(r\) bits and \(\zeta\) throughput? Wait \(\zeta_u^e\) average throughput over epoch (bits/s), so \(r_u^e-\zeta_u^e(c_b^e)\) has mismatched units unless \(r_u^e\) is volume per epoch and \(\zeta\) integrated over T. Source likely omitted T. Need be rigorous: to make units consistent, multiply \(\zeta_u^e(c_b^e) T\): \(\sum_e\sum_u (r_u^e - \zeta_u^e(c_b^e) T)\le0\) bits. But source Eq 2 lacks T. We can note source writes Eq 2; dimensional consistency requires implicit epoch duration T, so formal restatement uses \(T\). This is a gray-zone audit. Good.
- QoS threshold: \(\sum_e(\Gamma_b^e - q_b^e(c_b^e))\le0\) [PAGE 7, Eq. 3], units bits/s.
- BCO objective: \(\min_{\vec c\in \mathbb{R}_+^{B\times E}} \sum_e\sum_b \delta^e(c_b^e)\) [PAGE 8, Eq. 4], cost units operator cost (monetary or abstract). Cost function Eq 5: \(\delta^e(c_b^e)=0\) if \(c_b^e\le1\), \(\alpha (c_b^e)^\beta\) if \(>1\). Units: if c measured in PRBs or normalized capacity; \(\alpha\) cost per PRB^β; \(\beta\) dimensionless. Need state.
- Online Lagrangian Eq 6; projected update Eq 8; dual Eq 9; bandit one-point gradient Eq 10-11. Include.
- ARENA Δ: \(\Delta_b^e = \bar U_b^e / \tilde U_b\), \(\vec c_b = \bar{\vec c}_b \cdot \Delta_b^T\) [PAGE 11 Eq 12]. Wait source: \(\Delta_b^e = \bar U_b^e / \tilde U_b\) and \(\vec c_b = \bar{\vec c}_b \cdot \Delta_b^T\). Units: dimensionless. Singularity if \(\tilde U_b=0\). \(\Delta^T\) vector of scaling factors? Need define. 
- PRB utilization \(\rho_b^e = c_b^e/\bar c_b^{max}\) maybe. But this is derived; use as formal metric. The source mentions PRB allocation above 100%. We can define \(\rho_b^e = \frac{n_{\mathrm{PRB},b}^e}{n_{\mathrm{PRB},b}^{\max}}\) dimensionless. Saturation \(\rho=1\). Not toy. 
- RACH offered load: "128 attempts/second over 10 MHz bandwidth" [PAGE 3]. With 10ms occasions. Formal \(\lambda_{\mathrm{RACH}} \le 128\, \mathrm{s^{-1}}\) for 10 MHz. Breakdown if \(\lambda_{\mathrm{RACH}}>128\). Good.
- Throughput per user drop up to 50x. Use ratio? Source says "decreases up to 50 times." We can state as factor, not equation.

Need "singularity/breakdown regimes": 
1. \(\tilde U_b\to0\) in Eq 12: division undefined; no scaling factor; fallback needed.
2. PRB saturation \(\rho_b^e\ge1\): QoS constraint infeasible without extra capacity; source says 1800 MHz saturates >250 users.
3. Queue stability equality: if long-term arrival > service, queues unbounded; latency breakdown.
4. RACH \(\lambda>128\) attempts/s/10MHz: random access collision/backoff; but paper focuses downlink.
5. Underutilized eNB: model bias, no reliable forecast.
6. Correlation inversion: Active UEs-DL Volume negative during event; linear model invalid.
7. ARIMA nonstationarity: max abs error 0.505 normalized; not reliable during event.
8. Event horizon: predictions 2h before event; if horizon too short/long? Source says set 2h before. Breakdown if event context unavailable.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe include "Assumptions" list. Good.

Need "THINK_TRACE": Deep multi-hop derivation & gray-zone audit. Need at least 400 words. We can discuss:
- Paper's causal chain: mass event -> crowd arrival -> active UEs -> PRB utilization -> per-user throughput -> QoS. ARENA predicts active users and PRB, then scales capacity.
- Multi-hop: (i) event schedule known; (ii) attendance context; (iii) network monitoring; (iv) LSTM/CNN-LSTM active user forecast; (v) DNN per eNB maps context+history to PRB; (vi) scaling Δ to allocate extra; (vii) BCO objective formalizes cost vs QoS. 
- Gray zones: source is single event primary but says 10 others no relevant differences [PAGE 4]; 15-min aggregation; privacy; no weather; RACH not modeled; downlink focus; underutilized cells poor; ARIMA baseline; no live validation? Fig 12 validation against real events. 
- Audit contradictions: "model-free" but BCO convex assumptions; "convex with respect to spectrum" assumed not proven; cost function has discontinuity at c=1? It is continuous at 1 if α? Actually at c=1, 0; for c>1, α(c)^β; if α,β not zero, discontinuity at 1+. But source says captures no extra cost if ≤1, additional cost if >1. This is a threshold discontinuity; gradient undefined at c=1. Need mention singularity/breakdown. That's an important gray zone. Good.
- Eq 12 uses \(\Delta^T\) and division by \tilde U_b; if \tilde U_b zero. 
- The QoS metric \(q_b^e\) uses effective downlink time; not directly observed? Source says can get estimates at end of epoch. Need mention.
- Need "multi-hop derivation" maybe derive from event to cost: \(N_{\mathrm{att}}\) -> \(U_b^e\) -> \(c_b^e\) -> \(\delta^e(c_b^e)\) -> QoS. 
- We must not mention betting. Fine.

Need "RETROCAUSAL_GENEALOGY": Maybe 200-300 words. Discuss lineage: LTE RACH/RRC, traffic forecasting, deep learning, BCO. "Retrocausal" in the sense that future event schedule and expected attendance are known before event and shape current allocation, while the model is trained on past. Multi-week traps: weekly periodicity, seasonality, event rarity, holiday, team ranking, weather (absent), underutilized cells. "Multi-week traps" maybe from sports betting? But we can interpret as multi-week forecasting traps over football season. Good. Need cite pages. 
Need "historical/scientific lineage": reference [23] 3GPP, [29] LSTM, [31] ConvLSTM, [30] CNN-LSTM, [26]-[28] online convex/bandit, [37] universal approximation, [21] DeepCog, [8] Super Bowl, [9] crowded events. Good.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need maybe 200-300 words. Use "operator's theory of mind about attendees" etc. "Crisis habit regression" = operator falls back to CoWs/CoLTs/network slicing under congestion [PAGE 3], despite cost/slow. "Counter-trap" = overprovisioning or model over-trust; "clock" = event timeline and 15-min epochs; RACH 10ms. Need mention "attendees postpone upload/download" [PAGE 3] means their behavior reacts to network, recursive. ARENA is counter-trap if it assumes passive users. Need quote. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. We can use bullet-like. Need maybe 200-300 words. Physical: PRB and band saturation. Biomechanical: crowd density and movement. Weather: no data, so veto not proven. Need "proof" language: "Adjudication: sustained." Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. Need maybe 250-350 words. Use formal predictions. 
Scenario 1: Contextless temporal predictor vs ARENA under event. Verifier: normalized max absolute error on event window; source ARIMA 0.505 [PAGE 10]; LSTM underestimates activity peaks [PAGE 10]. Prediction: contextless model fails to capture break-time peak and pre/post peaks [PAGE 4]; veto if it does not reduce peak underestimation. 
Scenario 2: Eq 12 scaling with \tilde U_b >0 vs static PRB. Verifier: fraction of event epochs with PRB allocation >100% and QoS ratio. Prediction: green line follows active users and limits time above 100% [PAGE 12]; if \tilde U_b=0, veto/undefined. 
Scenario 3: RACH vs downlink PRB. Verifier: RACH attempt rate >128/s/10MHz [PAGE 3]. Prediction: ARENA's PRB forecast cannot fix uplink access collision; veto if QoE degradation persists despite PRB allocation. Alternatively underutilized eNB model bias. Need 3 verifiable. Maybe include underutilized eNB scenario as third; RACH as fourth? User says 3. We can include 3 exactly, one can be underutilized. But maybe include RACH because cross-layer. We can make three: (1) contextless temporal forecast, (2) Eq 12 scaling, (3) underutilized eNB or RACH. Need "verifiable RLVR veto scenarios" likely expects scenario/action/verifier/veto prediction. We can include 3 with clear. Could include RACH as third and mention underutilized in source operators. Hmm.

Need ensure "RLVR" defined. "Reinforcement Learning from Verifiable Rewards" maybe. We can say "RLVR-style counterfactual veto" not actual RL training. Use verifier metrics. Fine.

Need not overdo. But need >=1000 words. We'll produce maybe 2500 words. Need exact XML. Let's write.

Need careful with XML special characters: Use \(...\) inside text is fine. But XML ampersands? Avoid raw & or escape as &amp;. We can use "and" instead of &. Use < and >? In LaTeX, \(\le\) etc okay. But raw < in text could break XML. Avoid raw <. Use "less than" or \(\le\). Need no raw ampersands. Use "RAN and QoS". Use quotes. Good.

Need include [PAGE N] markers. Good.

Need mention "verbatim quotes". Use exact quotes from source. Need ensure quotes are exact. Let's gather exact phrases:
PAGE 1: "Mass events represent one of the most challenging scenarios for mobile networks because, although their date and time are usually known in advance, the actual demand for resources is difficult to predict due to its dependency on many different factors." Exact? Yes.
PAGE 4: "The event is scheduled to start at 19.30h and finish at 21.15h." Exact.
PAGE 4: "two volume peaks at around 18h and at around 21.30h" Exact? It says "This is evidenced by two volume peaks at around 18h and at around 21.30h." Good.
PAGE 4: "third peak, concomitant with the break of the event" Exact.
PAGE 4: "Such linearity is broken during the event for downlink traffic." Exact.
PAGE 5: "the 1800-MHz band saturates when the number of users grows over 250" Exact.
PAGE 5: "average throughput capacity per user decreases up to 50 times" Exact? "the average throughput capacity per user decreases up to 50 times." Good.
PAGE 6: "the considered eNB saturates its physical resources (PRBs) during most part of the game distorting the underlying relationship between the features" Exact.
PAGE 6: "negative value for the couple “Active UEs-DL Volume.”" Exact with curly quotes maybe. Fine.
PAGE 7: "the model capturing the behavior of τeu is not known a priori and so is qe b’s." Might be formatting. Use simpler quote: "the model capturing the behavior of τeu is not known a priori" (exact substring). Good.
PAGE 8: "trivial solution to satisfy all user requirements, i.e., to keep the QoS at reasonable levels, is to provide an infinitely large amount of spectrum." Exact.
PAGE 10: "maximum absolute error of 0.505" Exact.
PAGE 10: "temporal information alone is not enough to accurately predict the mobile traffic activity in the stadium during public events." Exact.
PAGE 11: "underutilized in regular days" exact? "Such considered base stations are generally underutilized in regular days." Good.
PAGE 11: "η = 64 and μ = 128 settings" exact? "Empirically, we have identified the best performance with η = 64 and μ = 128 settings." Good.
PAGE 12: "keeping the amount of time wherein extra capacity is required (PRB allocation above 100%) limited" Exact.
PAGE 3: "128 attempts/second over 10 MHz bandwidth" exact.
PAGE 3: "often postpone the upload (or download) of their photos and videos on social media due to network congestion." Exact? It says "often postpone the upload (or download) of their photos and videos on social media due to network congestion." Good.
Need cite exact page markers.

Need "formal LaTeX equations, units, page citations, breakdown." We can include "Assumption A1" etc. Need maybe not too many equations. Good.

Potential issue: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We won't. Use "probability" maybe okay. No "odds". Good.

Need maybe mention "no betting" not needed.

Need "THINK_TRACE" not visible? It will be visible. Fine.

Let's draft final with XML. Need ensure no raw & in text. Use "and" always. Use "RAN and QoS". Avoid "P&L". Good.

Need include "DRIVE SOURCE" maybe inside THINK_TRACE first: "Drive source ...". Fine.

Need word count. Let's write detailed.

Need maybe include "SOURCE_OPERATORS_AND_EQUATIONS" with equations. Use \( \) and \[ \] maybe. XML doesn't care. But raw `<` not. Use \(\le\). Fine.

Let's compose:

<THINK_TRACE>
Drive source... The multi-hop derivation...
Paragraphs:
1. Paper's causal chain.
2. Formal mapping event context to capacity.
3. Gray-zone audit: concurrency, aggregation, single-event but 10 others, downlink focus, convexity assumption, cost discontinuity at c=1, Eq12 singularity, underutilized cells, weather absence, RACH.
4. Retrocausal/operator behavior maybe.
Need >=400 words. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
List equations. Need mention units.
- Eq1 QoS.
- Eq2 queue stability with implicit T.
- Eq3 QoS threshold.
- Eq4 BCO.
- Eq5 cost.
- Eq6 Lagrangian.
- Eq7-8 projected update.
- Eq9 dual.
- Eq10-11 bandit.
- Eq12 scaling.
- RACH constraint.
- PRB utilization.
Assumptions and breakdown.
Good.

<RETROCAUSAL_GENEALOGY>
Discuss lineage and traps. Good.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, clock. Good.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, weather. Good.

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios. Good.

Need mention "weather veto proof" not in paper. We can say "Adjudication: not proven; no meteorological variable appears in provided pages; any weather veto would be an unsourced injection." This is rigorous.

Need maybe include "biomechanical" as crowd density and movement; source says 25,097 attendees, 30,000 capacity, active UEs 600 per minute, peaks at 18h, 21:30, break. Good.

Need "physical" as PRB and frequency band. Good.

Need "crisis habit regression" exact phrase? Not in paper. We define.

Need "counter-trap" perhaps "counter-trap is the over-trust in the model or overprovisioning." Good.

Need "clock" event clock. Good.

Need "RLVR" use "verifiable reward" but not actual training. Good.

Need "predictions" specific. Good.

Let's ensure 1000 words. We'll write ~2500. Good.

Need maybe no markdown headings? XML tags are headings. Fine.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
Drive source: /GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs/openalex_W3092918295.pdf, 14 pages. The paper’s causal chain is multi-hop: a scheduled football event changes human attendance behavior; attendance changes the number of RRC_CONNECTED users per sector; active users and event context change downlink PRB utilization; PRB utilization changes per-user effective downlink time and hence QoS; QoS and cost jointly determine the operator’s proactive spectrum allocation. The paper states the core difficulty plainly: “Mass events represent one of the most challenging scenarios for mobile networks because, although their date and time are usually known in advance, the actual demand for resources is difficult to predict due to its dependency on many different factors” [PAGE 1]. The derivation is therefore not a single regression from attendees to load. It is a composition of event-clock effects, crowd arrival and departure, service mix, sector-level capacity, and operator cost.

The event clock is explicit: “The event is scheduled to start at 19.30h and finish at 21.15h” [PAGE 4]. The paper observes “two volume peaks at around 18h and at around 21.30h” plus a “third peak, concomitant with the break of the event” [PAGE 4]. That gives at least three demand regimes: pre-arrival, in-event halves, break-time avalanche, and post-event egress. The network KPI chain is also explicit: active users rise to “600 active UEs minute” and are “over 10 times higher than those during a regular day” [PAGE 5]. Then “the 1800-MHz band saturates when the number of users grows over 250” [PAGE 5], and “the average throughput capacity per user decreases up to 50 times” [PAGE 5]. Thus the gray-zone is not whether demand rises, but where the linear active-user-to-volume relation fails: “Such linearity is broken during the event for downlink traffic” [PAGE 4].

A second multi-hop path is model-based. ARENA first forecasts active users with LSTM, CNN-LSTM, and ConvLSTM variants; it selects CNN-LSTM with \(J=200\) and \(\Phi=64\) [PAGE 10]. It then trains a per-base-station deep network on contextual information and historical monitoring data, and finally scales predicted PRB demand by \(\Delta_b^e=\bar U_b^e/\tilde U_b\) [PAGE 11]. The BCO layer formalizes the cost-versus-QoS tradeoff, but the source assumes, rather than proves, convexity of \(\zeta_u^e(c_b^e)\) and \(q_b^e(c_b^e)\) with respect to PRBs. That is a gray-zone: the optimization is mathematically clean only under the stated convexity and feasibility assumptions.

The audit finds several breakdown regimes. First, Eq. (12) is singular if \(\tilde U_b=0\), i.e., if the regular-day saturation user count is zero or unavailable. Second, the cost function in Eq. (5) has a threshold at \(c_b^e=1\): zero cost below or at one, \(\alpha(c_b^e)^\beta\) above one, so the gradient is undefined exactly at the threshold unless a subgradient or smoothing is specified. Third, PRB saturation at \(\rho_b^e\ge1\) makes the QoS constraint infeasible without extra capacity; the paper states that PRB allocation above 100% indicates extra capacity [PAGE 12]. Fourth, the paper notes that some base stations are “generally underutilized in regular days,” causing “biased estimations” even under significant event load [PAGE 11]. Fifth, ARIMA is weak under nonstationarity, with “maximum absolute error of 0.505” [PAGE 10]. Sixth, the paper focuses on downlink data demand, not the uplink random-access bottleneck; it separately notes “128 attempts/second over 10 MHz bandwidth” for RACH [PAGE 3]. Seventh, no weather variable appears in the provided pages, so any weather-driven veto cannot be adjudicated from this source. Finally, the primary analysis is one event, although the authors state they “exhaustively evaluated other 10 different matches finding no relevant performance differences” [PAGE 4]. The model is therefore credible within this operator and stadium context, but not a universal law.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units, with page citations and breakdown regimes.

1. QoS operator. The paper defines the per-base-station QoS metric as
\[
q_b^e=\frac{\sum_{u\in U_b^e} r_u^e}{\sum_{u\in U_b^e}\tau_u^e},\qquad \forall b\in\mathcal B,
\]
where \(r_u^e\) is served traffic volume in bits, \(\tau_u^e\) is effective downlink time in seconds, and \(q_b^e\) therefore has units of bits per second. This is Eq. (1) [PAGE 7]. The paper states that \(\tau_u^e\) “depends on the spectrum capacity covering the event and on the contextual data around the event,” and that “the model capturing the behavior of \(\tau_u^e\) is not known a priori” [PAGE 7]. Assumption: the numerator and denominator are aggregated over the same epoch and user set \(U_b^e\). Breakdown: if \(\sum_u \tau_u^e\to0\), \(q_b^e\) is undefined or unbounded; if the epoch is too short, estimates are noisy.

2. Queue-stability constraint. The source writes
\[
\sum_{e\in\mathcal E}\sum_{u\in U_b^e}\left(r_u^e-\zeta_u^e(c_b^e)\right)\le0,\qquad \forall b\in\mathcal B,
\]
as Eq. (2) [PAGE 7], where \(\zeta_u^e(c_b^e)\) is average throughput over epoch \(e\). Dimensionally, \(r_u^e\) is bits while \(\zeta_u^e\) is bits per second; a formal unit-consistent restatement requires an implicit epoch duration \(T\):
\[
\sum_{e\in\mathcal E}\sum_{u\in U_b^e}\left(r_u^e-\zeta_u^e(c_b^e)T\right)\le0,
\]
with \(T\) in seconds. Assumption: long-term service rate dominates long-term arrival rate; the paper explicitly says “the long-term base station serving rate must be greater or equal to the long-term data arrival rate” [PAGE 7]. Breakdown: if long-term arrivals exceed long-term service, queues grow without bound and latency collapses.

3. QoS-threshold constraint. The paper gives
\[
\sum_{e\in\mathcal E}\left(\Gamma_b^e-q_b^e(c_b^e)\right)\le0,\qquad \forall b\in\mathcal B,
\]
as Eq. (3) [PAGE 7], with \(\Gamma_b^e\) and \(q_b^e\) in bits per second. Assumption: the aggregate over epochs can enforce a per-base-station QoS target. Breakdown: if \(\Gamma_b^e\) exceeds achievable \(q_b^e\) at every feasible \(c_b^e\), the feasible set is empty.

4. BCO objective. The optimization is
\[
\min_{\vec c\in\mathbb R_+^{B\times E}}\sum_{e\in\mathcal E}\sum_{b\in\mathcal B}\delta^e(c_b^e)
\]
subject to the queue, QoS, and nonnegativity constraints, as Eq. (4) [PAGE 8]. The cost function is
\[
\delta^e(c_b^e)=
\begin{cases}
0, & c_b^e\le1,\\
\alpha\left(c_b^e\right)^\beta, & c_b^e>1,
\end{cases}
\]
as Eq. (5) [PAGE 8]. Units: \(c_b^e\) is a PRB or normalized spectrum-capacity decision variable; \(\alpha\) carries cost per PRB\(^\beta\); \(\beta\) is dimensionless. The paper notes the trivial but unacceptable solution: “to provide an infinitely large amount of spectrum” [PAGE 8]. Breakdown: the cost is discontinuous in slope at \(c_b^e=1\) unless \(\alpha\) and \(\beta\) are chosen to smooth it; the gradient is not classically defined at the threshold.

5. Online Lagrangian and projected updates. Eq. (6) defines
\[
L^e(\vec c^e,\vec\lambda):=\delta^e(\vec x)+\vec\lambda^T\vec g^e(\vec x),
\]
where \(\vec g^e(\vec c^e)=\sum_{e\in\mathcal E}(\Gamma^e-\vec q^e(\vec c^e)+\vec r^e-\vec\zeta^e(\vec c^e))\) [PAGE 8]. Eq. (8) gives the projected primal update
\[
\vec c^{e+1}=P_{\mathcal C}\left(\vec c^e-\sigma\nabla_{\vec x}L^e(\vec c^e,\vec\lambda^e)\right),
\]
with \(\sigma\) a predefined constant and \(P_{\mathcal C}\) the Euclidean projector [PAGE 8]. Eq. (9) gives the dual update
\[
\vec\lambda^{e+1}=\left[\vec\lambda^e+\mu\left(\vec g^e(\vec c^e)+\nabla^T\vec g^e(\vec c^e)\right)\left(\vec c^{e+1}-\vec c^e\right)\right]_+,
\]
with step size \(\mu>0\) [PAGE 8]. Eq. (10) and Eq. (11) replace exact gradients with one-point bandit estimates \(\hat\nabla_1 f(\vec x)=\frac{d}{\epsilon}f(\vec x+\epsilon\vec u)\vec u\) [PAGE 8]. Breakdown: as \(\epsilon\to0\), variance of the one-point estimator diverges; if \(\epsilon\) is too large, the perturbation leaves the feasible set. The source handles this by projecting onto \((1-\epsilon)\mathcal C\) [PAGE 8].

6. ARENA scaling operator. The paper defines
\[
\Delta_b^e=\frac{\bar U_b^e}{\tilde U_b},
\qquad
\vec c_b=\bar{\vec c}_b\cdot\Delta_b^T,\qquad \forall b\in\mathcal B,
\]
as Eq. (12) [PAGE 11]. \(\bar U_b^e\) is predicted active users in epoch \(e\); \(\tilde U_b\) is the number of users required to saturate base station \(b\) under regular-day behavior; both are user counts, so \(\Delta_b^e\) is dimensionless. Singularity: if \(\tilde U_b=0\), the scaling factor is undefined. Breakdown: if \(\tilde U_b\) is estimated from an underutilized cell, the ratio is biased; the paper warns that underutilized cells yield “biased estimations” [PAGE 11].

7. PRB saturation indicator. The source refers to “PRB allocation above 100%” [PAGE 12]. Formally, let
\[
\rho_b^e=\frac{n_{\mathrm{PRB},b}^e}{n_{\mathrm{PRB},b}^{\max}},
\]
where \(n_{\mathrm{PRB},b}^e\) is the number of PRBs allocated in epoch \(e\) and \(n_{\mathrm{PRB},b}^{\max}\) is the baseline maximum; \(\rho_b^e\) is dimensionless. Then \(\rho_b^e\ge1\) is the saturation regime. The paper states “the 1800-MHz band saturates when the number of users grows over 250” [PAGE 5].

8. RACH load constraint. The paper states a typical setup offers “128 attempts/second over 10 MHz bandwidth” with periodic random access occasions every 10 ms [PAGE 3]. Formal verifier:
\[
\lambda_{\mathrm{RACH}}\le128\ \mathrm{s^{-1}}\quad\text{for }10\ \mathrm{MHz}.
\]
Breakdown: if \(\lambda_{\mathrm{RACH}}>128\ \mathrm{s^{-1}}\), contention, preamble collision, exponential backoff, and access delay become the dominant bottleneck, which is outside ARENA’s downlink PRB forecast.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is visible in the paper’s references. The LTE access layer descends from 3GPP TS 36.331 RRC specification [PAGE 13], including RRC_IDLE and RRC_CONNECTED behavior, PRACH preamble selection, random access response, and contention resolution [PAGE 3]. The forecasting lineage descends from LSTM recurrent networks [29], CNN-LSTM traffic-as-image models [30], and ConvLSTM nowcasting [31], all cited on [PAGE 13]. The optimization lineage descends from online convex optimization and bandit gradient estimation [26]-[28] [PAGE 13], and the neural approximation lineage descends from Cybenko’s universal approximation theorem [37] [PAGE 13]. Earlier mass-event evidence is inherited from Super Bowl traffic analysis [8] and crowded-event QoE work [9] [PAGE 2]. The paper also inherits the network-slicing and capacity-leasing frame from slice overbooking and reinforcement-learning slice brokering [5], [25] [PAGE 2], [PAGE 13].

The retrocausal structure is that future event metadata—date, expected attendance, match schedule—is known before the event and is used to condition current capacity allocation. The paper says mass events are “planned with months or weeks ahead” [PAGE 1], yet operators remain “unable to adapt timely and appropriately” [PAGE 1]. Thus the genealogy is not purely backward-looking: future schedule information reaches backward into present PRB provisioning through forecasting. Multi-week traps follow from this. First, weekly periodicity can dominate training and hide rare event signatures. Second, seasonality and team ranking affect attendance and service mix; the paper says demand depends on “the ranking of the matching teams” [PAGE 1]. Third, event rarity makes each event different, so a model trained on regular weeks underestimates the break-time peak and the pre/post crowd peaks [PAGE 4]. Fourth, the walk-forward setup retrains as new observations arrive [PAGE 10], which can propagate a bad event week into later forecasts. Fifth, underutilized cells produce biased capacity estimates regardless of hyperparameters [PAGE 11]. Sixth, the paper’s own validation uses a 2-hour pre-event forecasting horizon [PAGE 12]; a longer horizon may capture schedule effects but dilute event-specific context. The historical lesson is that mass-event forecasting is a rare-event transfer problem, not a stationary time-series problem.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive system has three agents: the operator, the attendees, and the network model. The operator’s crisis habit regression is the fallback to “nomadic cells, such as Cells on Wheels (CoWs) or Cells on Light Trucks (CoLTs), or fixed small cells” [PAGE 3], which the paper calls “rather rudimentary” and “overly costly” [PAGE 1]. Under congestion, the habitual response is to add physical capacity after the fact; the paper argues this is “incapable of adapting to different traffic patterns” [PAGE 3]. The counter-trap is the opposite failure: over-trusting a forecast or overprovisioning spectrum. The paper explicitly rejects the trivial solution of “an infinitely large amount of spectrum” [PAGE 8], and it shows that temporal-only models underestimate activity peaks during events [PAGE 10]. A second counter-trap is trusting a per-cell model when the cell is underutilized in regular days, producing “biased estimations” [PAGE 11].

The clock is the strongest verifiable anchor. The event runs from 19.30h to 21.15h [PAGE 4]; demand peaks near 18h, near 21.30h, and at the break [PAGE 4]; the paper sets the forecast horizon to 2 hours before the event [PAGE 12]; and the RACH clock runs on 10 ms access occasions [PAGE 3]. The recursive theory of mind is that attendees know the network is congested and change behavior: they “often postpone the upload (or download) of their photos and videos on social media due to network congestion” [PAGE 3]. That means observed demand is not exogenous; it is a response to perceived QoS. If the operator forecasts from censored demand, it can under-allocate precisely when users would have uploaded more if capacity existed. The counter-trap is to interpret the post-congestion lull as low demand rather than suppressed demand. The clock resolves this only partially: the break-time and post-event peaks are scheduled, so they can be anticipated, but the magnitude depends on the crowd and service mix. Crisis habit regression ignores the clock; the counter-trap overfits the model to the clock; ARENA’s best case is clock-conditioned but context-corrected.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto. The physical layer can veto any forecast that ignores PRB saturation. The paper reports that “the 1800-MHz band saturates when the number of users grows over 250” [PAGE 5], and that “the average throughput capacity per user decreases up to 50 times” [PAGE 5]. In formal terms, if \(\rho_b^e\ge1\), the QoS constraint cannot be satisfied without additional PRBs, carrier aggregation, small cells, or slice leasing. The physical veto is therefore sustained: a forecast that predicts active users but not PRB saturation is insufficient. The paper’s own remedy is to estimate extra spectrum and keep “PRB allocation above 100%” limited [PAGE 12], which confirms that saturation is the operative veto.

Biomechanical veto. The biomechanical layer is crowd motion and density. The paper reports 25,097 attendees for the analyzed match [PAGE 4] and a stadium capacity of almost 30,000 people [PAGE 1], [PAGE 3]. It identifies pre-arrival, break-time, and egress peaks [PAGE 4], and active users up to “600 active UEs minute” [PAGE 5]. The biomechanical veto is sustained in the sense that attendance flow creates demand surges that no downlink scheduler can remove; it can only be buffered or capacity-augmented. However, the paper does not provide a biomechanical sensor model, so the veto is proven only at the aggregate level, not at the level of individual crowd trajectories.

Weather veto. The provided pages contain no meteorological variable, no temperature, rain, wind, or weather-controlled attendance model. The paper’s contextual inputs are “expected number of attendees, type of the event, etc.” [PAGE 10], and the analysis focuses on network measurements and event context. Therefore a weather veto is not proven by this source. Adjudication: weather cannot be admitted as a verified cross-layer veto from the provided pages; any claim that weather caused a demand shift would be an unsourced injection. The correct proof status is “unadjudicated due to missing source evidence,” not “false.”
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR-style counterfactual veto 1: contextless temporal forecasting under event conditions. Intervention: train only on time series without event context; compare against ARENA’s context-aware CNN-LSTM plus per-cell network. Verifier: normalized maximum absolute error on the event window and peak underestimation at the break-time peak. Source prediction: ARIMA reaches “maximum absolute error of 0.505” [PAGE 10], and the paper states “temporal information alone is not enough to accurately predict the mobile traffic activity in the stadium during public events” [PAGE 10]. Veto condition: if the contextless model matches or beats the context-aware model on the break-time peak and pre/post peaks, the context operator is not needed. Predicted outcome: veto fails; contextless models underestimate event peaks.

RLVR counterfactual veto 2: Eq. (12) scaling with a valid regular-day saturation count. Intervention: allocate \(\vec c_b=\bar{\vec c}_b\cdot\Delta_b^T\) when \(\tilde U_b>0\); compare against static PRB allocation. Verifier: fraction of event epochs with \(\rho_b^e>1\) and per-user QoS relative to regular-day QoS. Source prediction: the recommended PRB allocation “follows the dynamics of the active users” and keeps “PRB allocation above 100%” limited [PAGE 12]. Veto condition: if Eq. (12) leaves \(\rho_b^e>1\) for most of the event or fails to preserve QoS, the scaling operator is vetoed. Predicted outcome: Eq. (12) reduces the duration of over-100% PRB allocation relative to static allocation, but it is undefined and must be vetoed if \(\tilde U_b=0\).

RLVR counterfactual veto 3: uplink RACH bottleneck versus downlink PRB forecast. Intervention: apply ARENA’s downlink PRB allocation during an event where access attempts exceed the RACH capacity. Verifier: \(\lambda_{\mathrm{RACH}}>128\ \mathrm{s^{-1}}\) over 10 MHz [PAGE 3], plus access delay and collision rate. Source prediction: the paper explicitly separates the uplink random-access problem from the downlink data-demand problem [PAGE 3]. Veto condition: if QoS degradation persists despite sufficient downlink PRBs and PRB allocation above 100% is not the binding constraint, then ARENA’s downlink forecast is not a sufficient control action. Predicted outcome: RACH overload vetoes the claim that downlink PRB scaling alone restores QoS; an additional access-layer intervention is required.
</RLVR_COUNTERFACTUAL_VETOES>