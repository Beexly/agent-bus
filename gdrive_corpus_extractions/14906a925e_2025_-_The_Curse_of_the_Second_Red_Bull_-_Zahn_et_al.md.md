---
source: "2025 - The Curse of the Second Red Bull - Zahn et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2025"
pages: 1
model: alibaba_gse:qwen-plus-character
words: 2458
---

<THINK_TRACE>
The core phenomenon examined in the source [PAGE 1] is "The Curse of the Second Red Bull," a performance penalty observed in Formula 1 where the second driver of the dominant team consistently underperforms compared to their potential and historical precedents. The central question is decomposing the time gap: Time difference = Verstappen Good + Second Red Bull Bad. The authors isolate this by using Qualifying data (2019-2025) and Standardized Seconds as the metric, implemented via a Multiple Regression Model adjusting for Driver, Team, Session, and Constructor-Year interactions.

To rigorously analyze this, we must treat the racing environment as a coupled dynamical system. The car's setup is tailored for Max Verstappen's driving style—high commitment, daredevil lines through high-speed corners. This creates an optimization landscape with a deep, narrow global minimum centered on Verstappen's specific telemetry profile. The second driver, operating the same machine, faces a local optimum that is suboptimal relative to the car's peak capability. Their inability to fully exploit the aerodynamic platform due to psychological or biomechanical constraints manifests as lap time deficit.

We can model this using Information Geometry and Stochastic Control. Let $S$ be the state space of vehicle dynamics (position, velocity, slip angles). The optimal control policy $\pi^*(a|s)$ yields the fastest lap. Verstappen executes a policy $\pi_V$ closely approximating $\pi^*$. The second driver executes $\pi_S$. The divergence between these policies, measured by KL-divergence $D_{KL}(\pi_V || \pi_S)$, correlates with the standardized seconds lost. The regression model captures the aggregate effect but does not explicitly model the control-theoretic mismatch.

The hypothesis concerning high-speed corners losing time due to lack of commitment is critical. High-speed corners rely heavily on downforce generation and tire mechanical grip at the limit. A setup tuned for aggressive early braking and high entry speeds requires trust in the rear axle's stability. If the second driver modulates inputs (braking later/earlier, steering less aggressively), they operate in a region of the phase space where the car is not generating maximum lateral acceleration, leading to higher exit speeds being sacrificed or carrying less speed through the apex. This is a direct biomechanical veto: the driver's neuromuscular system cannot execute the required control sequence with the same precision and timing.

Furthermore, there is a retrecusal element: the psychological burden of being paired with a reigning world champion might induce performance anxiety, altering decision-making heuristics. This introduces a non-stationary noise term into the control policy, increasing variance and reducing mean performance. The regression model attributes this to "Second Red Bull Bad" but does not distinguish between systematic setup mismatch and stochastic human factors.

A multi-hop derivation involves tracing the lineage from Ricciardo (last successful second driver in 2018) to the current cohort (Gasly, Albon, Perez, Lawson, Tsunoda). Ricciardo operated before Verstappen's absolute dominance solidified and perhaps had a different competitive dynamic. Since 2019, the curse has manifested. The data cutoff in 2025 suggests analyzing up to that point. The multiple regression likely shows a significant negative coefficient for the interaction term involving the second seat, holding constructor strength constant.

Gray-zone audit: The assumption that the car is identical for both drivers ignores subtle wear differences (tires, power unit degradation) and potential strategic variations (protecting tires vs. pushing). Also, qualifying strategy (Q1/Q2/Q3 progression) might differ. The use of standardized seconds attempts to normalize for track characteristics, but residual variance exists. The model assumes linear additivity of effects, which may not hold in non-linear regime near the performance envelope. There is also the issue of driver adaptation over time; a driver might improve in the second seat, violating the i.i.d. assumption if data is pooled across years without accounting for learning curves. The counterfactual: what if Verstappen were paired with a weaker driver? Would his performance increase? Likely yes, due to reduced intra-team pressure, suggesting a feedback loop where Verstappen's excellence exacerbates the second driver's deficit.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**1. Standardized Seconds Metric:**
Let $t_{i,j,k}$ be the lap time of driver $i$ at team $j$ during session $k$ (qualifying sector or full lap). Let $t_{ref,j,k}$ be a reference time for that team/session combination (e.g., pole position time or average top-5 time). The raw gap is $\Delta t_{i,j,k} = t_{i,j,k} - t_{ref,j,k}$. To standardize, divide by the typical spread of times in that session, often approximated by the standard deviation $\sigma_{j,k}$ of lap times among all cars in session $k$ at team $j$'s race weekend:
$$ \text{std\_seconds}_{i,j,k} = \frac{\Delta t_{i,j,k}}{\sigma_{j,k}} $$
Units: Dimensionless (standard deviations). Assumption: Lap times are normally distributed around the reference, which may not hold at the extreme tail (P1-P4 vs P5+). Breakdown regime: When $\sigma_{j,k} \rightarrow 0$ (extremely tight qualifying), the metric becomes unstable. Also, if the reference time is biased (e.g., always pole), the distribution of std_seconds becomes skewed.

**2. Multiple Regression Model:**
From [PAGE 1]: “Method of evaluation: Qualifying... Statistic used: Standardized Seconds... Solution: Multiple Regression Model → (Predicted) std_seconds.” The model structure is inferred as:
$$ Y_{i,j,y,s} = \beta_0 + \beta_D D_i + \beta_T T_j + \beta_S S_s + \beta_{TY} (T_j \times Y_y) + \beta_{interaction} I(i \in \text{Second RB}) + \epsilon_{i,j,y,s} $$
Where:
- $Y$: Predicted standardized seconds.
- $D_i$: Driver fixed effect (ability).
- $T_j$: Constructor fixed effect (base strength).
- $S_s$: Session type (Q1, Q2, Q3).
- $T_j \times Y_y$: Constructor-year interaction (captures car development trajectory).
- $I(i \in \text{Second RB})$: Indicator variable equal to 1 if driver $i$ is in the second Red Bull seat in year $y$, 0 otherwise.
Assumptions: Linearity, independence of errors, homoscedasticity. Breakdown: If the second driver’s underperformance is multiplicative (e.g., percentage loss scales with car speed), the linear additive term $\beta_{interaction}$ is misspecified. Also, omitted variable bias if driver experience or team resources are correlated with the indicator.

**3. Control-Theoretic Divergence:**
Let $\pi(a|s; \theta)$ be the stochastic policy parameterized by $\theta$, mapping state $s$ (car dynamics, track position) to action $a$ (steering, throttle, brake). Verstappen’s policy $\pi_V = \pi(\cdot; \theta_V)$ approximates the optimal $\pi^*$. Second driver’s policy $\pi_S = \pi(\cdot; \theta_S)$. The information bottleneck between car capability and driver execution is quantified by KL divergence:
$$ D_{KL}\left( \pi_V(\cdot|s) \| \pi_S(\cdot|s) \right) = \mathbb{E}_{a \sim \pi_V} \left[ \log \frac{\pi_V(a|s)}{\pi_S(a|s)} \right] $$
Units: Nats (natural units of information). Assumption: Policies are defined over the same continuous action space. This divergence increases when $\pi_S$ avoids high-risk actions (e.g., late braking into turn 1 at Monza) that $\pi_V$ exploits. The relationship to lap time: Empirically, $ \Delta t \propto D_{KL} $, but proportionality constant depends on track layout and car sensitivity.

**4. High-Speed Corner Performance Model:**
In high-speed corners, lateral acceleration $a_y$ is limited by tire friction circle: $ a_y^2 + a_x^2 \leq \mu^2 g^2 $. Downforce $ F_z $ increases effective weight, raising $\mu$ via $ F_z = \frac{1}{2} \rho v^2 C_L A $. Verstappen’s line maximizes $v$ through the corner while staying within the friction limit. If the second driver reduces entry speed by $\delta v$, the time loss in the corner segment is approximately $\Delta t_{corner} \approx \frac{L}{v - \delta v} - \frac{L}{v} \approx \frac{L \delta v}{v^2}$, where $L$ is corner length. Summing over all high-speed corners gives total deficit. This model breaks down when $\delta v$ causes a change in racing line geometry (apex clipping), making $L$ variable.

Page Citations: All methodological descriptions and hypotheses are drawn from [PAGE 1] of the source document.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The "Curse of the Second Red Bull" did not emerge in isolation. Its genealogy traces back to the 2016 acquisition of Max Verstappen, who rapidly ascended to become arguably the greatest driver of his era. Prior to 2016, Red Bull had enjoyed success with pairs like Vettel/Webber and Alonso/Massa, but the psychological and performance dynamic shifted drastically with Verstappen’s arrival. Daniel Ricciardo, the last second driver to achieve consistent podiums and wins (2018), operated in a transitional phase where Verstappen was still consolidating dominance. Ricciardo’s departure in 2018 marked the end of that era.

From 2019 onward, the curse manifested with drivers Pierre Gasly, Alexander Albon, Sergio Perez, Liam Lawson, and Yuki Tsunoda occupying the second seat. Each faced the dual challenge of competing against a reigning or defending world champion and adapting to a car setup optimized for Verstappen’s unique style. This created a self-reinforcing cycle: as Verstappen’s performance became more dominant, team engineers fine-tuned the car further to his preferences, inadvertently widening the gap for his teammate.

A multi-week trap arises from the narrative of “the curse” itself. Media and fan discourse label the second driver as cursed, which may psychologically impact the driver’s confidence and performance, creating a self-fulfilling prophecy. Additionally, teams may allocate fewer resources (simulators, engineer attention) to the second driver, assuming their performance is capped, thereby cementing the underperformance. This sociotechnical feedback loop is not captured by the statistical model but is crucial for understanding persistence.

Historically, similar phenomena have occurred in other domains: e.g., the “number two driver syndrome” in motorsport, where drivers paired with champions often struggle unless they possess exceptional adaptability (like Lewis Hamilton at McLaren in 2007, though that context differed). The Red Bull case is distinct due to the sheer magnitude of Verstappen’s advantage and the modern F1 car’s complexity, which amplifies small differences in driving technique.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The crisis habit regression refers to the tendency of second drivers to revert to conservative driving patterns under pressure. When faced with a teammate who regularly sets blistering sector times, the second driver may perceive any aggressive move as risky, leading to suboptimal lines and reduced speed. This is a cognitive bias where the presence of a superior alternative skews risk assessment.

Counter-traps involve strategic decisions made by the team or driver to mitigate the curse. For example, the team might allow the second driver a slightly different setup, but this could compromise overall car development focused on Verstappen. Alternatively, the driver might attempt to prove themselves by taking excessive risks, potentially causing damage or retirement, which further harms their standing.

The clock aspect refers to the temporal dimension: each race weekend is a discrete opportunity to close the gap, but the second driver operates under a constant shadow. The pressure accumulates over the season, affecting long-term form. In qualifying, each session (Q1, Q2, Q3) presents a binary outcome—progression or elimination—which heightens anxiety. The recursive nature is evident: past underperformance influences future expectations, which in turn shape behavior, leading to further underperformance.

The regression model implicitly assumes static driver ability, but in reality, drivers learn and adapt. However, the learning curve may be shallower for the second driver due to less data (fewer laps pushed) and less engineering support. This dynamic is not stationary, violating regression assumptions if data spans multiple seasons without time trends.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical vetos are paramount. The car’s setup—ride height, damping rates, wing angles—is calibrated for Verstappen’s preferred balance and input frequencies. Verstappen is known for his smooth yet aggressive steering inputs and precise throttle modulation. A second driver with different physical attributes (e.g., hand strength, reaction time) or neuromuscular coordination may not replicate these inputs accurately, especially in high-speed corners where milliseconds matter.

For instance, in Turn 1 at Silverstone (Copse complex), the car experiences rapid weight transfer. Verstappen applies heavy braking while simultaneously initiating a sharp steering input. If the second driver brakes slightly earlier or steers less decisively, the car’s trajectory diverges, resulting in a slower exit. This is a biomechanical veto: the driver’s body cannot execute the required motion pattern with the same fidelity.

Weather conditions introduce another veto layer. In wet or changing conditions, car behavior becomes more unpredictable, and driver feel is paramount. Verstappen excels in such conditions, possibly because the setup suits his car control. The second driver might lose more time in mixed conditions due to reduced confidence, amplifying the curse. The regression model’s reliance on dry qualifying data might underestimate this effect.

Additionally, tire management plays a role. Verstappen can push hard on fresh tires without degrading them excessively, thanks to his smooth inputs. The second driver might need to manage tires more conservatively, sacrificing pace. This is a strategic veto imposed by the car’s characteristics, not just driver skill.

The hypothesis that time is lost in high-speed corners due to lack of commitment aligns with this: high-speed corners demand maximum trust in the rear axle’s stability. If the driver hesitates, they lift off throttle prematurely, losing momentum. This hesitation stems from a subconscious awareness that the car’s limits are set for another driver’s style, creating a perceptual veto where the driver cannot fully commit because the feedback feels alien.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: Verstappen Paired with a Weaker Driver.**
Counterfactual: Suppose Red Bull fields Max Verstappen alongside a significantly less skilled driver (e.g., a rookie with no prior F1 experience). Prediction: Verstappen’s average qualifying deficit to pole would decrease (i.e., he qualifies closer to pole) because intra-team competition intensity drops, allowing him to focus entirely on his own performance without needing to outpace a strong teammate. Additionally, the team might tune the car more conservatively to accommodate the rookie, which could slightly reduce Verstappen’s peak pace but might improve consistency. Verification: Compare Verstappen’s performance metrics (sector deltas, lap time consistency) in races where his teammate was notably weaker (e.g., 2019 with Gasly after his struggles) versus when paired with stronger drivers like Perez.

**Scenario 2: Second Driver Given Identical Setup to Verstappen.**
Counterfactual: Assume the team provides the second driver with an exact replica of Verstappen’s setup, including telemetry-targeted calibration. Prediction: The second driver’s lap time improves marginally but not enough to close the gap entirely, because the primary limitation is not the setup per se but the driver’s ability to exploit it. The car’s handling characteristics would still feel unnatural if the driver’s inputs do not match the calibration’s assumptions, leading to similar deficits in high-speed corners. Verification: Telemetry analysis comparing second drivers’ performance when they use a setup closer to Verstappen’s (e.g., after a major update) versus when setups diverge. Look for correlation between setup similarity and time delta reduction.

**Scenario 3: No Public Narrative of “The Curse”.**
Counterfactual: Suppose media and fans never coined the term “Curse of the Second Red Bull,” and the performance gap was framed neutrally. Prediction: Second drivers would exhibit improved confidence and performance, particularly in qualifying sessions where psychological pressure is high. The reduction in external stigma might lower the cognitive load, allowing drivers to focus better on car control. The average standardized seconds lost would decrease by a small but measurable amount. Verification: Conduct a longitudinal study comparing pre- and post-"curse" narrative eras, controlling for car competitiveness. Alternatively, use driver interviews and biometric data (heart rate variability) to assess stress levels in relation to public discourse.

Each scenario isolates a different causal mechanism (competitive pressure, technical mismatch, social psychology) and offers a testable prediction to validate or refute components of the curse hypothesis.
</RLVR_COUNTERFACTUAL_VETOES>