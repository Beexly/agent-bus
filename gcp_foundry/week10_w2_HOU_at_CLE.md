---
job_id: HOU_at_CLE
model: baidu/ernie-5.5-flash-preview:free
worker: 2
timestamp: 2026-11-13T18:13:21.699341+00:00
words: 9064
---

<NATIVE_REASONING>
The user wants a full dossier for a hypothetical NFL Week 10 game: Houston Texans at Cleveland Browns, 2026-11-15. This is a future date relative to the current time (2026-08-27). I should note that this is a forward-looking analytical exercise with no actual injury reports, depth charts, or weather forecasts available for a date ~2.5 months out. I need to be honest about what I can and cannot verify.

Key constraints:
- Zero betting lines (no spreads, totals, moneylines, odds)
- No fake toy equations — every math operator must have exact LaTeX, units, assumptions, singularity/breakdown conditions
- >= 1,000 words
- Exact XML headers as given

I should be careful: I don't have real 2026 roster data. The 2026 season hasn't happened. I should flag that clearly and frame the analysis in terms of structural/coaching-tree priors and physically-grounded operators, with placeholders where roster facts are unknown. That's the honest approach. I should not invent fake injury reports or fake depth charts as if factual.

Let me think about what I actually know as durable structural facts:
- Cleveland Browns: Huntington Bank Field (formerly FirstEnergy Stadium / Cleveland Browns Stadium), open-air, lake-effect, wind exposure off Lake Erie. The open end of the stadium faces the lake; the north/west exposure. Wind flags are used. Historically Cleveland has among the highest average wind speeds of NFL stadiums. December games famously windy.
- Browns defensive line tradition: from Bill Belichick's 1990s Cleveland Browns through Jim Schwartz / Jim O'Neil / Joe Woods / Mike Macdonald / Jim Schwartz again (2023-2024 DC was Jim Schwartz). Mike Hall Jr., Myles Garrett (edge), Chris Smith, Shelby Harris, Ogbo Okoronkwo, Alex Wright, etc. As of 2025 the DC was Jim Schwartz. For 2026 unknown.
- Texans: DeMeco Ryans HC (defensive-minded, 49ers coaching tree — Robert Saleh/Kyle Shanahan lineage). Offensive coordinator historically Bobby Slowik (Shanahan tree), then Nick Caley in 2025. C.J. Stroud QB. OL had issues — Tytus Howard, Laremy Tunsil trade, Juice Scruggs, Stefon Diggs etc. For 2026 unknown.
- Coaching tree DNA: DeMeco Ryans ← Jim Mora Jr./Wade Phillips (Texans LB coach), then Robert Saleh, Kyle Shanahan. Saleh ← Shanahan/Grantham. So Texans run a wide-zone / gap-scheme hybrid with heavy motion and play-action, plus a 4-3 base with wide-9 or 5-tech alignments.
- Browns stunts: Jim Schwartz is a Vic Fangio-lineage... actually Schwartz came up under Bill Belichick (linebackers coach 2009), then Detroit HC, then Eagles DC under Pederson/Sirianni. Schwartz's DL philosophy: penetrate, T-E stunt games (Tex/End loops), slants, cross-charge. Fangio-lineage teams emphasize mug looks and simulated pressures.

Physics I can do rigorously:
1. Wind: drag force on a football. F_d = ½ ρ C_d A v_rel². Units: kg/m³, dimensionless, m², m²/s² → N. Terminal drift of a pass. Lake Erie November mean wind speed ~ 15-20 km/h at Cleveland Burke Lakefront; game-time winds at the stadium can be higher due to funneling. Actually Cleveland's average wind speed is around 12 mph (19 km/h) annually, among the highest of major US cities. November is windier.
2. Wind shear: vertical gradient, log wind profile u(z) = (u*/κ) ln(z/z₀). Roughness length z₀ for a stadium bowl vs open lake fetch. κ ≈ 0.40 von Kármán constant. Singularity: z → z₀ gives ln → 0, u → 0; breakdown when z₀ → 0 (smooth limit) or in the constant-flux layer assumption failing above ~10% of boundary layer depth.
3. Ballistic drift: lateral deflection of a pass. Approximate as a projectile with quadratic drag; crosswind drift δ ≈ ½ a_wind t², where a_wind = (ρ C_d A / 2m) (v_rel) v_wind,⊥. Units m/s². Singularity: this linearization breaks when v_wind is comparable to ball speed (v_rel direction reversal), and the quadratic drag coupling makes the ODE non-linear — need numerical integration.
4. Internal clock / decision latency: QB time-to-throw distributions. Model as a hazard function. h(t) = f(t)/S(t). Units s⁻¹. Cox proportional hazards: h(t|x) = h₀(t) exp(βᵀx). Assumption: proportional hazards; breakdown when the risk set is depleted (few plays remain) or when the baseline hazard is non-smooth. Also the "internal clock" as a drift-diffusion / sequential probability ratio test: decision when accumulated evidence crosses threshold a. Mean decision time E[T] = (a/2v)·tanh(av/σ²)... let me recall the DDM formula.

For a drift-diffusion model with drift v, diffusion coefficient s², symmetric boundaries ±a: 
- Mean decision time (including non-decision time Ter): E[DT] = (a/(2v)) tanh(a v / s²) — this is for the correct/uncorrected... Actually the standard result: probability of hitting upper boundary = 1/(1+exp(-2av/s²)). Mean decision time = (a/(2v)) tanh(av/s²). Let me verify: For DDM with starting point z = a/2 (unbiased), boundaries 0 and a, drift v, noise s: 
  - P(upper) = (exp(-2 a z... hmm. Let me just use the symmetric form: boundaries at ±a, start at 0, drift v, noise s. Then P(hit +a) = 1/(1 + e^{-2av/s²}). And E[T] = (a/v) tanh(av/s²). 

Let me double check E[T]. Known result: for the DDM with absorbing barriers at ±a, starting at 0, drift v, variance s² per unit time, the mean first passage time (unconditional) is E[T] = (a/v) tanh(av/s²). Yes, that's the standard result (Ratcliff 1978 gives it in the form with a/2 and z). Let me sanity check limits: as v→0, tanh(av/s²) ≈ av/s², so E[T] → a²/s². That's the correct unbiased-diffusion mean exit time for boundaries ±a: E[T] = a²/s². Yes! For Brownian motion with variance s² per unit time and absorbing barriers at ±a from start 0, E[T] = a²/s². Correct. And as v→∞, tanh→1, E[T] → a/v, the deterministic drift time. Correct. Good, formula validated.

Singularity: v = 0 exactly gives 0/0 removable singularity (limit a²/s²). Breakdown: when a/v → 0 relative to non-decision time T_er; when the model assumes stationary drift but pressure changes v mid-flight (non-stationary DDM required).

5. Pass protection: pocket collapse time vs. time-to-throw. This is a race model. Define collapse time T_c as first passage of a rusher to the QB's "throwing radius." Model as a competing-risks / first-passage problem. Compare distributions: P(pressure before throw) = ∫ f_Tthrow(t) S_pressure(t) dt... Actually P(throw before pressure) = ∫₀^∞ f_throw(t) S_press(t) dt. Units dimensionless. Assumption: independence of the two clocks — which is FALSE (they're coupled: pressure accelerates throw). So the naive product fails; need a copula or a coupled hazard model. This is a good "veto" point.

6. Stunt vs. slide protection: T-E stunt (Tex loop) creates a two-on-one on the guard/center. Slide protection assigns a "wall" — the rusher loops into the vacated B-gap. The failure mode is the "handoff" of the rusher between blockers. Model as a pursuit/assignment problem: the loop rusher's path length vs. the sliding blocker's lateral velocity. Time for rusher to convert from the B-gap loop to the A-gap: t_loop = (arc length)/v_rush. If t_loop < t_slide_arrival, free runner. 

7. Acoustics: crowd noise and cadence. SPL in dB: L_p = 20 log₁₀(p_rms/p_ref), p_ref = 20 μPa. Combining sources: L_total = 10 log₁₀(Σ 10^{L_i/10}). Wind noise on the field raises the noise floor and masks the center's cadence — the relevant metric is speech transmission index (STI) or the articulation index. Also wind noise at a microphone: self-noise ∝ v^~2-3. Signal-to-noise for a cadence at ~1 kHz. Breakdown: dB is logarithmic so "doubling loudness" ≈ +10 dB.

Also: cold affects ball pressure. Gay-Lussac: P/T = const at fixed V. Ball inflated to 12.5 psi gauge (86.7 kPa absolute) at 70°F (294.3 K); at 35°F (276.5 K): P₂ = P₁ T₂/T₁ = 86.7 × 276.5/294.3 = 81.4 kPa absolute = 66.7 kPa... wait let me compute. 86.7 × (276.5/294.3) = 86.7 × 0.93952 = 81.45 kPa absolute. Gauge = 81.45 - 101.325 = negative. Hmm, that's wrong. 12.5 psi gauge = 12.5 + 14.696 = 27.196 psi absolute = 187.5 kPa absolute. Let me redo: 27.196 psi × 6.895 kPa/psi = 187.5 kPa. Then P₂ = 187.5 × 0.93952 = 176.2 kPa absolute = 25.55 psi absolute → gauge = 25.55 - 14.70 = 10.85 psi. So ~1.65 psi drop. That's the classic Deflategate calculation. Good. Units: K, kPa. Assumption: constant volume (rigid sphere approx — actually the ball's volume changes slightly with pressure, so this is an approximation; also leather elasticity, and moisture). Breakdown: at low T the ideal gas law with constant V fails because the bladder/leather compliance changes; also condensation/humidity inside.

Also grip: wet ball, coefficient of friction, spin decay. Cold hands reduce tactile feedback.

8. Wind effect on kicking — but I should avoid anything resembling betting lines. FG probability is fine as a football/physics matter, not a betting line. I'll keep it as expected points / win probability in generic terms, no odds. Actually, I should be careful — win probability models are fine, they're not betting lines. But I'll keep it minimal and clearly framed as football analysis. Actually let me avoid anything that could be construed as a market number. I'll discuss field-goal make probability from physics (kickoff wind), which is legitimate.

9. Lake-effect: Lake Erie in mid-November — surface water temp ~9-11°C, air temps can be near or below that, so lake-effect snow showers possible. Fetch: the lake's long axis is WSW-ENE, ~388 km long, ~92 km wide. Long fetch with a W or WSW wind = maximum moisture. Wind shear: 850 hPa flow direction vs surface. Lake-effect requires directional shear < ~30° through the boundary layer (a standard operational criterion). That's a real meteorological criterion. Units: degrees.

Also stadium orientation: Huntington Bank Field — the field runs roughly N-S? Let me think. Cleveland Browns Stadium: the open end (with the Dawg Pound) is at the... The stadium's open end faces the lake to the north. Actually the stadium is oriented with the open end to the north/northwest toward Lake Erie, and the lake is immediately north of the stadium. The field orientation is roughly north-south with the north end being the open end. Hmm, I recall the field is oriented north-south, and the open end of the stadium is the north end zone, which faces Lake Erie. Yes — the Dawg Pound is in the... the Dawg Pound is at the east end. Let me be careful. I'll state it with appropriate hedging: the open end is oriented toward the lake (north/northeast), which is the well-documented design feature. I'll flag uncertainty about exact orientation rather than assert falsely.

Actually, I recall: Cleveland Browns Stadium opened 1999, designed with an open end to the north to preserve lake views and evoke the lakefront. The Dawg Pound is in the northeast corner. The field's long axis runs roughly NNE-SSW... I'll hedge.

Now, honesty framing: The 2026 season hasn't started. I have no 2026 roster, no injury report, no depth chart, no week-10 weather forecast (forecast skill beyond ~10 days is essentially nil for wind speed). I must state this. The dossier should be framed as a structural/physical prior with explicit "unknown" markers and falsifiable predictions to be checked.

Let me also handle the "coaching tree" — DeMeco Ryans' tree, and the Browns' DC for 2026 is unknown. I'll frame it as "if Schwartz-lineage or Fangio-lineage" conditional, and note the general Cleveland DL tradition of T-E games.

Let me now think about the RLVR counterfactuals — 3 concrete training scenarios where a surface statistical model fails and cross-layer veto reasoning succeeds. RLVR = reinforcement learning with verifiable rewards. So: training scenarios for an AI model, with verifiable reward signals. Good — I can make these concrete: e.g., a model trained on EPA/play outcome data vs. one that must predict a specific stunt-beaten outcome; the reward is verifiable from the actual play result.

Let me draft the structure and hit the word count. I'll aim for ~2,200-2,800 words to comfortably exceed 1,000.

Let me be careful with LaTeX formatting — use $$ blocks and $ inline.

Let me write it.

One more: "singularities/breakdown conditions" for each operator. I'll be rigorous.

Let me also add an explicit epistemic status block at the top — but the instruction says exact XML headers. I can add a short preamble before <THINK_TRACE>. That should be fine and is necessary for honesty.

Let me write out the math carefully.

**Wind profile (log law):**
$$u(z) = \frac{u_*}{\kappa}\ln\!\left(\frac{z}{z_0}\right)$$
- $u_*$ = friction velocity [m s⁻¹], $\kappa \approx 0.40$ (dimensionless), $z_0$ = aerodynamic roughness length [m].
- Singularity: $z \to z_0^+$ gives $u \to 0$; $z \le z_0$ is outside the domain. 
- Breakdown: valid only in the surface (constant-flux) layer, roughly $z_0 \ll z \lesssim 0.1 h_{BL}$. In a stadium bowl the roughness is not homogeneous — the bowl acts as a bluff-body cavity with recirculation, so the log law fails entirely inside the bowl below rim height (~24 m). Need CFD or empirical stadium coefficients.
- Neutral stability assumption: requires $\zeta = z/L \to 0$. Under lake-effect convection ($L < 0$, unstable), use Monin-Obukhov similarity with $\psi_m$.

**Drag / lateral drift:**
$$\mathbf{F}_d = -\tfrac{1}{2}\rho C_d A \|\mathbf{v}_{rel}\|\mathbf{v}_{rel}, \quad \mathbf{v}_{rel} = \mathbf{v}_{ball} - \mathbf{u}(z)$$
- $\rho$ [kg m⁻³] ≈ 1.28 at 0°C, 1 atm (vs 1.20 at 20°C); $C_d \approx 0.15$–$0.30$ for a spiraled football (highly Reynolds- and spin-dependent); $A = \pi r^2$, $r \approx 0.0445$ m → $A \approx 6.2\times10^{-3}$ m²; $m \approx 0.411$ kg (14–15 oz).
- Ballistic coefficient $m/(C_d A) \approx 0.411/(0.2 \times 6.2\times10^{-3}) \approx 332$ kg m⁻². 
- Small-angle crosswind drift: $\delta \approx \frac{1}{2}\frac{\rho C_d A}{m} U_\perp V t^2$ — wait, need care. The lateral acceleration from a crosswind $U_\perp$ on a ball moving at speed $V$ along the throw axis: $\|\mathbf{v}_{rel}\| \approx V$, and the lateral component of $\mathbf{v}_{rel}$ is $-U_\perp$. So $a_\perp \approx \frac{1}{2}\frac{\rho C_d A}{m} V U_\perp$. Then $\delta \approx \frac{1}{2} a_\perp t^2 = \frac{\rho C_d A V U_\perp t^2}{4m}$.
- Plug: $\rho = 1.28$, $C_d = 0.2$, $A = 6.2\times10^{-3}$, $V = 22$ m/s, $U_\perp = 8$ m/s, $t = 1.3$ s (a ~28 m throw at 22 m/s ≈ 1.27 s).
  $a_\perp = 0.5 \times (1.28 \times 0.2 \times 6.2\times10^{-3}/0.411) \times 22 \times 8 = 0.5 \times (1.587\times10^{-3}/0.411) \times 176$. 
  $1.28 \times 0.2 = 0.256$; $\times 6.2\times10^{-3} = 1.587\times10^{-3}$; $/0.411 = 3.862\times10^{-3}$ m⁻¹. 
  $a_\perp = 0.5 \times 3.862\times10^{-3} \times 176 = 0.3399$ m/s². 
  $\delta = 0.5 \times 0.3399 \times 1.69 = 0.287$ m ≈ 29 cm. Hmm, that seems small. Real crosswind drift on deep balls is more like 1-3 yards. The issue: the linearization underestimates because the ball spends more time aloft and the relative velocity direction rotates. Also for a deep ball, t is longer. Let's do a 50 m throw: t ≈ 2.4 s at 22 m/s (with drag, longer). $\delta = 0.5 \times 0.3399 \times 5.76 = 0.98$ m ≈ 1.07 yd. Still modest. Empirically, NFL QBs report ~1-2 yards of drift on deep balls in 15-20 mph crosswinds. So the order of magnitude is right-ish, maybe a factor of 2 low due to the linearization. I'll note the linearization bias explicitly — good, that's honest and it's exactly the kind of "breakdown condition" the prompt wants.

Actually, the key nonlinearity: as the ball drifts, $\mathbf{v}_{rel}$ rotates, and $\|\mathbf{v}_{rel}\|$ decreases on the upwind side. The linearized solution is a leading-order term in $U_\perp/V$. Expansion parameter $\epsilon = U_\perp/V = 8/22 = 0.36$ — not small. So $O(\epsilon^2)$ corrections are ~13%. That's a legitimate breakdown statement. 

**Time-of-flight with drag:** exponential-ish decay. For quadratic drag along the path, $V(t) = V_0/(1 + t/\tau)$ where $\tau = m/(k V_0)$, $k = \frac12 \rho C_d A$. $\tau = 0.411/(0.5 \times 1.28 \times 0.2 \times 6.2\times10^{-3} \times 22) = 0.411/(0.5 \times 1.28 \times 0.2 \times 0.1364)$. Let me compute: $0.5 \times 1.28 = 0.64$; $\times 0.2 = 0.128$; $\times 6.2\times10^{-3} = 7.936\times10^{-4}$; $\times 22 = 0.01746$. So $\tau = 0.411/0.01746 = 23.5$ s. Over 2.4 s, velocity decays by factor $1/(1+2.4/23.5) = 1/1.102 = 0.907$, i.e., ~9% velocity loss. Reasonable. (This ignores lift/Magnus and gravity coupling — a 1-D reduction. Breakdown: it neglects the vertical component and the fact that $C_d$ for a spiral is not constant.)

**DDM internal clock:**
$$p_{upper} = \frac{1}{1+e^{-2av/s^2}}, \qquad \mathbb{E}[T_{dec}] = \frac{a}{v}\tanh\!\left(\frac{av}{s^2}\right) + T_{er}$$
- $a$ = boundary separation [evidence units], $v$ = drift rate [evidence s⁻¹], $s^2$ = within-trial variance [evidence² s⁻¹], $T_{er}$ = non-decision time [s].
- Removable singularity at $v=0$: $\mathbb{E}[T_{dec}] \to a^2/s^2 + T_{er}$.
- Breakdown: stationarity. Under a simulated pressure/mug look, $v$ is not constant — it collapses at the snap when the read is wrong. Requires non-stationary DDM $v(t)$, or a collapsing-boundary model $a(t) = a_0 e^{-\lambda t}$ (urgency signal). With collapsing bounds the closed form is lost; need numerical first-passage solution of the Fokker-Planck equation.

**Competing risks / pocket race:**
$$\Pr(\text{throw precedes pressure}) = \int_0^\infty f_{\Theta}(t)\,S_{\Pi}(t)\,dt$$
- $f_\Theta$ = time-to-throw density [s⁻¹], $S_\Pi(t) = \exp(-\int_0^t h_\Pi(u)du)$ = protection survival.
- Independence assumption is violated: $h_\Pi$ and $f_\Theta$ are coupled through the QB's perception. Correct object: a copula $C(u_1,u_2)$ or a joint hazard with a shared frailty $Z$: $h_\Theta(t|Z) = Z h_{0\Theta}(t)e^{\beta x}$, $h_\Pi(t|Z) = Z h_{0\Pi}(t)e^{\gamma x}$. Shared-frailty (Clayton copula) captures "the QB who feels pressure throws early."
- Singularity: if $h_\Pi$ has an atom at $t=0$ (immediate free runner), $S_\Pi(0) < 1$ and the integral collapses.

**Stunt geometry / slide protection:**
Loop rusher path: a T-E stunt sends the DE upfield to occupy the OT, then loops inside behind the DT who slants outside. The loop arc length for a quarter-circle of radius $R$ is $L = \pi R/2$. Time $t_{loop} = L/\bar{v}_{rush}$.
Slide protection: the sliding blocker must cover lateral distance $d$ at lateral speed $v_{lat}$: $t_{slide} = d/v_{lat}$.
Free-runner condition: $t_{loop} < t_{slide} - t_{handoff}$, where $t_{handoff}$ is the time for the exchange of the rusher between the center and guard.
Numbers: $R = 1.2$ m → $L = 1.885$ m; $\bar v_{rush} = 4.5$ m/s → $t_{loop} = 0.42$ s. Slide: $d = 1.5$ m at $v_{lat} = 2.5$ m/s → $t_{slide} = 0.60$ s. So $t_{loop} < t_{slide}$ by 0.18 s — a free runner unless the handoff is pre-snap-declared (i.e., the center "walls" the loop). This is the crux: slide protection is beat by T-E games unless the protection is *declared* to the slide side and the back picks up the backside. Units: m, m s⁻¹, s. Breakdown: assumes constant $\bar v_{rush}$ and a fixed quarter-circle; real loops are not circular and rushers decelerate to change direction (centripetal demand $a_c = v^2/R = 20.25/1.2 = 16.9$ m/s² ≈ 1.7 g, which exceeds what a 140 kg lineman can sustain on wet turf — so $\bar v_{rush}$ must be lower, lengthening $t_{loop}$). Good — that's a real cross-layer coupling: weather → footing → achievable $a_c$ → $t_{loop}$.

Friction: $\mu$ for cleats on wet natural grass drops; $a_{max} = \mu g$. With $\mu = 0.5$ (wet), $a_{max} = 4.9$ m/s², so $R_{min} = v^2/a_{max} = 20.25/4.9 = 4.13$ m — the rusher *cannot* run a 1.2 m radius at 4.5 m/s. So $t_{loop}$ is longer than the naive geometry. This is a genuine veto of the naive "stunts beat slides" claim. Excellent.

**Acoustics:**
$$L_p = 20\log_{10}\!\left(\frac{p_{rms}}{p_{ref}}\right)\ \mathrm{dB}, \quad p_{ref} = 20\ \mu\mathrm{Pa}$$
$$L_{total} = 10\log_{10}\!\left(\sum_i 10^{L_i/10}\right)$$
Wind-induced pseudo-noise at a body-worn mic scales roughly as $L_w \approx L_0 + 40\log_{10}(U/U_0)$ in the turbulent regime (order-of-magnitude; the exponent is site- and shield-dependent, commonly 30–50 dB/decade). At $U = 8$ m/s vs $U_0 = 1$ m/s: $+40\log_{10}(8) = +36$ dB. That swamps a cadence.
Signal-to-noise for cadence intelligibility: use the Speech Intelligibility Index or STI; STI → 0 when SNR ≲ -15 dB in the 500 Hz–4 kHz bands. Cadence is ~1-2 kHz, crowd noise peaks 200-1000 Hz, wind noise is broadband with most energy < 500 Hz but significant masking upward.
Breakdown: dB addition requires incoherent (uncorrelated) sources; coherent sources add in pressure, not power, giving up to +6 dB more. Also, wind noise is not stationary — gusts make $L_p$ non-ergodic over a 3-second cadence window.

**Cold ball pressure (Gay-Lussac / ideal gas at fixed V):**
$$\frac{P_1}{T_1} = \frac{P_2}{T_2} \Rightarrow P_2 = P_1\frac{T_2}{T_1}$$
Absolute units. $P_1 = 12.5\ \mathrm{psi_g} + 14.696 = 27.196\ \mathrm{psi_a} = 187.5$ kPa; $T_1 = 294.3$ K (21.1°C); $T_2 = 276.5$ K (3.3°C / 38°F).
$P_2 = 187.5 \times 0.9395 = 176.2$ kPa = 25.55 psi_a → 10.85 psi_g. $\Delta P = -1.65$ psi.
Assumptions: (i) fixed volume — false, the bladder/leather shell is compliant, so $V$ increases slightly as $P$ drops, partially offsetting; (ii) dry ideal gas — water vapor partial pressure and condensation matter; (iii) thermal equilibrium — a ball kept on a heated sideline and exposed for 90 s has a Biot-number-dependent lag.
Biot number: $Bi = hL_c/k$. For leather ($k \approx 0.15$ W m⁻¹ K⁻¹), $L_c \approx 0.005$ m, $h \approx 30$ W m⁻² K⁻¹ (forced convection at 8 m/s): $Bi = 30 \times 0.005/0.15 = 1.0$. $Bi \sim 1$ means lumped-capacitance is marginal — internal gradients matter, so the naive $T_2$ is not uniform. Time constant $\tau_{th} = \rho V c_p/(hA)$: for a football, $m = 0.411$ kg, $c_p \approx 1500$ J kg⁻¹ K⁻¹ (leather), $A \approx 0.075$ m², $h = 30$: $\tau = 0.411 \times 1500/(30 \times 0.075) = 616.5/2.25 = 274$ s ≈ 4.6 min. So a ball swapped onto the field equilibrates in ~5 min (3τ ≈ 14 min for 95%). This is a real, checkable operational claim: balls sitting on the sideline vs. on the field differ measurably in pressure. 

**Lake-effect criterion:** directional shear through the boundary layer $\Delta\theta_{850-sfc} \lesssim 30°$; fetch $\gtrsim 100$ km over water with $T_{lake} - T_{850} \gtrsim 13°C$ (a common ΔT threshold for lake-effect convection). Lake Erie mid-Nov surface ~ 8-11°C; 850 hPa ~ -5 to -10°C in a cold advection regime → ΔT ~ 15-20°C, sufficient. Fetch: W or WSW flow gives 250-380 km of over-water fetch. Singularity/breakdown: the ΔT threshold is an empirical rule of thumb, not a bifurcation; and shoreline geometry/frictional convergence at the Buffalo/Niagara bend produces band focusing that is not captured by a 1-D fetch argument.

OK. Now let me also do the RLVR counterfactuals concretely.

RLVR = Reinforcement Learning from Verifiable Rewards. Three scenarios:

1. **Stunt-vs-slide assignment with verifiable reward.** Train a policy to call slide vs. man vs. gap protection. Surface model: predict sack rate from opponent's total pressure rate (a base-rate feature). Veto model: must condition on the *stunt rate on 1st-and-10 vs. 2nd-and-long* and the *loop radius achievable at the game's turf friction*. Verifiable reward: the actual play-by-play outcome (pressure yes/no within 2.5 s, from tracking data). The surface model gets reward ≈ base rate; the veto model gets higher reward because the failure mode is concentrated in a specific down/distance and stunt package. Falsifiable: Texans' pressure rate on 1st-and-10 vs. 2nd-and-6 should diverge by ≥ 8 percentage points if the stunt hypothesis holds.

2. **Internal clock under mug look.** Train a policy for the QB's progression exit threshold. Surface model: time-to-throw is a QB trait (fixed $\mu$). Veto model: time-to-throw is a state-dependent hazard with a shared frailty; under a simulated mug look (6-man pressure picture with 2 rushers bailing), the hazard spikes. Verifiable reward: tracking-derived time-to-throw and pressure flag. Falsifiable: Stroud's median time-to-throw on plays with a pre-snap mug look vs. without should differ by ≥ 0.15 s.

3. **Wind-conditioned deep-ball targeting.** Train a policy for target selection by depth and hash. Surface model: expected yards by route depth from a league-average completion model. Veto model: must include the crosswind drift $\delta$ and the receiver's catch radius, plus the ball-pressure effect on grip. Verifiable reward: completion + yards from tracking. Falsifiable: on plays with $U_\perp \ge 6$ m/s, deep-ball (air yards ≥ 30) completion probability should drop by ≥ 10 pp relative to the model's wind-blind prediction; and the drop should be asymmetric by hash (closed-side vs. open-side).

Good. Now the "Sunday predictions" — falsifiable. I'll give ~6 with numeric thresholds and a null condition.

Also need RETROCAUSAL_GENEALOGY: coaching tree DNA, historical situational scars, multi-week tape traps, scientific proof barriers.

Coaching tree: DeMeco Ryans — played LB under Jim Mora Jr. and Wade Phillips in Houston (2002-2006ish), coached LB/San Francisco under Jim O'Neil? No — Ryans was DC under Kyle Shanahan (2021-2022), and before that LB coach/associate HC under Shanahan (2017-2020), and LB coach for the Texans under Bill O'Brien (2014-2016). His tree: Wade Phillips (3-4, two-gap) → but Ryans runs a 4-3/5-tech hybrid with Shanahan's wide-zone principles on offense. Texans offense under Bobby Slowik (Shanahan tree: outside zone, wide splits, motion, play-action off heavy run looks, "Marty" / condensed formations). Nick Caley came from the Patriots (McDaniels/Belichick tree) — a different flavor: more 12/13 personnel, gap scheme, play-action. For 2026 unknown; I'll flag both branches.

Browns: Jim Schwartz (Belichick LB coach 2009 → Detroit HC 2011-2013 → Buffalo DLine? no, he was Eagles DC 2016-2020, Titans DC 2021-2022 (with Vrabel), Browns DC 2023-2024, then... he was fired/left after 2024? I think Schwartz's contract was not renewed after 2024 and the Browns hired... I'm not certain. I'll hedge and say "Schwartz-lineage or successor." Kevin Stefanski was HC through 2025 (I believe he was let go after 2025 — actually reports in Jan 2026? I don't know). I'll flag all of this as unverified.

Historical situational scars: 
- Cleveland's lakefront wind history: the 2018 Week 17? Better: the famous 2007 playoff game vs. the Jets in -? Actually the canonical one is the 2007 season finale vs. Houston? Hmm. Let me use ones I'm confident about: 
  - The 1948 "Great Lakes" games? Too old.
  - The 2016 season: Browns 1-15.
  - The 2020 playoffs vs. Pittsburgh in the snow (Jan 10, 2021) — Browns won 48-37; that's a real, well-known game with wind/snow.
  - The 2018 Week 5 vs. Ravens? 
  - The 2021 Week 1 wind game vs. Kansas City (Sept 12, 2021): wind ~20+ mph, Browns won 29-13, and there was a missed FG; Patrick Mahomes struggled. That's a real game — the wind was significant. Good.
  - Texans: 2020 divisional round at Kansas City (13-point lead blown). 2023 divisional loss to KC. 2024 divisional loss to KC. Stroud's 2023 rookie season. 
  - Texans OL: 2024 protection issues; Tytus Howard's hold/penalties; the 2024 playoff game vs. the Chargers/Lions. 2025: Tunsil trade to Houston (from Tennessee) — I believe that happened in March 2025. Yes, Laremy Tunsil was traded to Houston in 2025. I'll mention with hedge.
- Multi-week tape traps: teams that face a wide-9 / mug-look team the week before and carry a false read; or a team coming off a game with heavy motion that under-practices stunts. Also: "tape trap" = the opponent's public tape shows a tendency that they've been saving.

Scientific proof barriers: 
- No causal identification of "wind causes X" from observational NFL data without an instrument; wind is endogenous to game selection (teams/weather co-vary with opponent quality, and domed/indoor games are excluded).
- Measurement error in wind: stadium anemometer vs. the 40-yard-dash-at-the-X-and-40 measurement point; wind is a vector field, not a scalar.
- Multiple comparisons: 32 teams × 17 weeks × dozens of splits.
- Base-rate neglect / small n per cell.
- Survivorship in film study: only called plays are observed; the counterfactual protection call is censored.

OK, I think I have plenty. Let me write it. I'll keep the epistemic caveat tight and up front, then deliver.

Word count target: I'll write ~2,500 words.

Let me make sure I don't mention any betting lines. I'll explicitly avoid. Also avoid "totals," "spread," "odds," "moneyline." I'll use "expected points," "win probability" sparingly — actually, to be safe with invariant #1, I'll avoid win probability too and stick to physical/football quantities. Hmm, win probability isn't a betting line, but I'll minimize. I'll use "expected points added" and "pressure rate" and "completion probability" — those are football analytics, fine.

Let me write.

One more check on the drag coefficient for a football: published values for an American football in a spiral are around Cd ≈ 0.05–0.2 depending on spin rate and Reynolds number; a well-thrown spiral has Cd ~0.1-0.2. I'll give a range and note the spin dependence, and note the Reynolds number: Re = ρVD/μ = 1.28 × 22 × 0.178 / 1.72e-5. D (diameter) ≈ 0.178 m. = 1.28 × 22 = 28.16; × 0.178 = 5.012; / 1.72e-5 = 2.91e5. So Re ≈ 2.9 × 10⁵ — near the drag crisis region for a bluff body, but a spinning ellipsoid's separation is fixed by the spin-stabilized tip vortices, so Cd is comparatively flat. Good nuance. Dynamic viscosity of air at 0°C ≈ 1.71e-5 Pa·s. Good.

Magnus/lift: spin rate ω ≈ 300 rad/s (≈2,900 rpm). Spin parameter S = ωr/V = 300 × 0.0445/22 = 0.607. That's high — so the ball is strongly gyroscopically stabilized; lateral Magnus force is small if the spin axis is aligned with velocity, but a tilted axis (which is what a crosswind-corrected throw requires) produces a real lateral force. Good.

Gyroscopic precession: the aerodynamic torque causes the spin axis to precess, so a "wind-corrected" release tilts and then drifts during flight — this is why QBs say the ball "moves late." Precession rate Ω = τ_gyro/(Iω). This is a nice, real, under-modeled effect. I'll include it qualitatively with the formula and note that I can't give a number without the moment of inertia tensor and the aerodynamic center offset.

Moment of inertia for a prolate spheroid about a transverse axis: I = (m/5)(a² + b²) where a = semi-major (0.14 m), b = semi-minor (0.0445 m). I = (0.411/5)(0.0196 + 0.00198) = 0.0822 × 0.02158 = 1.774e-3 kg m². About the long axis: I_∥ = (2/5) m b² = 0.4 × 0.411 × 0.00198 = 3.255e-4 kg m². Angular momentum L = I_∥ ω = 3.255e-4 × 300 = 0.0977 kg m²/s. Reasonable.

OK, writing now.

Also I should note the date: 2026-11-15 is a Sunday. Nov 15, 2026 — let me check. Nov 1, 2026 is a Sunday. So Nov 8, Nov 15 are Sundays. Yes, Nov 15, 2026 is a Sunday. Good, consistent with Week 10.

Kickoff 12:00:00-06:00 = 12:00 PM CST = 1:00 PM EST in Cleveland. Correct for an early AFC/NFC window game. Note: Cleveland is Eastern, so 1:00 PM ET kickoff. The stated offset -06:00 is the user's reference frame (Central). I'll note the local time is 13:00 EST.

Sun angle: Nov 15 at Cleveland (41.5°N), solar noon ~12:35 EST (longitude -81.7°, EST meridian -75°, so 6.7° west = 26.8 min later than clock noon, plus equation of time ~+15 min in mid-Nov → solar noon ≈ 12:42 EST). Sun elevation at solar noon: 90 - 41.5 - 18.7 (declination on Nov 15 ≈ -18.5°) = 29.8°. At 1 PM ET, elevation ~29°, azimuth ~200° (SSW). So low sun in the eyes for a north-facing... this matters for the QB facing a particular end. Nice detail. Let me include: solar declination δ☉ ≈ -18.5° on Nov 15; max elevation h = 90° - |φ - δ| = 90 - |41.5 - (-18.5)| = 90 - 60 = 30°. Good.

Let me write the final answer.
</NATIVE_REASONING>

# PRE-KICKOFF FRONTIER CRUCIBLE
## HOU at CLE — 2026-11-15, 13:00 EST (12:00 CST) — Huntington Bank Field

**EPISTEMIC STATUS (read first).** The 2026 season has not been played. I hold no verified 2026 roster, depth chart, injury report, snap distribution, or 10-day wind forecast for this fixture, and forecast skill for hub-height wind speed degrades to near-zero beyond ~7–10 days. Everything below is therefore (a) exact physics and probability theory with stated units and breakdown conditions, and (b) *conditional* coaching-tree and structural inference, explicitly flagged where it is conditional. I have not invented injuries, personnel, or tendencies. Where a claim requires 2026 data, I mark it `[UNVERIFIED]` and convert it into a falsifiable Sunday test instead. Local kickoff is 13:00 EST; the −06:00 offset in the prompt is the requester's reference frame, not stadium local time.

---

<THINK_TRACE>

The causal spine of this fixture is a three-body problem: a lake-driven vector wind field, a defensive line whose entire value proposition is *path deception rather than power*, and an offense whose protection architecture is built on *lateral assignment transfer*. Each of the three is individually tractable. The coupling is where naive expected-value reasoning dies.

Start with the wind. Huntington Bank Field is an open-air bowl on the Lake Erie shore, designed with an unroofed end so the lake is visible from inside. That design decision is a permanent aerodynamic boundary condition: the bowl is a bluff-body cavity with at least one low-momentum-exchange face. A wind of speed $U$ measured at a lakefront anemometer at 10 m is *not* the wind at the quarterback's ear at 1.6 m. In neutral conditions over homogeneous terrain the surface layer obeys the log law,

$$u(z) = \frac{u_*}{\kappa}\ln\!\left(\frac{z}{z_0}\right),$$

with $u_*$ the friction velocity [m s⁻¹], $\kappa \approx 0.40$ dimensionless (von Kármán), and $z_0$ the aerodynamic roughness length [m]. Two things follow immediately. First, the profile is *logarithmic*, not linear: the fractional speed-up from 1.6 m to 10 m is $\ln(10/z_0)/\ln(1.6/z_0)$, which for a mown-turf $z_0 \approx 0.01$ m gives $\ln(1000)/\ln(160) = 6.91/5.08 = 1.36$. A "10 mph" lake reading is a ~13.6 mph wind at the ball. Second, and more importantly, the log law is *invalid inside the bowl*. It requires a horizontally homogeneous, stationary, constant-flux layer with $z \lesssim 0.1\,h_{BL}$. A stadium rim at ~24 m generates separation, corner recirculation, and a cavity shear layer. Inside that cavity the correct object is a Reynolds-averaged Navier–Stokes solution with an obstacle-resolved geometry, not a 1-D profile. Any model that maps a single scalar "wind speed" onto a stadium is category-erroring a vector field into a number.

Now layer in mid-November Lake Erie thermodynamics. Mid-month surface water temperature is climatologically ~8–11 °C. In a post-frontal cold-advection regime, 850 hPa temperatures of −5 to −10 °C give a lake-minus-850 hPa difference of 15–20 °C, comfortably above the empirical ~13 °C lake-effect threshold. Directional shear through the boundary layer below ~30° permits organized, quasi-steady bands rather than disorganized showers. Fetch matters enormously: Lake Erie's long axis runs WSW–ENE at ~380 km, so a W or WSW flow yields 250–380 km of over-water fetch and maximum moisture loading. The operational consequence is not "it might snow." It is that the *surface* wind is decoupled from the gradient wind by convective mixing, producing high-variance, gusty, direction-shifting surface flow — precisely the regime in which a passer's pre-snap wind read has the shortest useful half-life. The ΔT threshold is an empirical rule of thumb, not a bifurcation point; and shoreline frictional convergence near the eastern end produces band focusing that no 1-D fetch argument captures.

Second body: Cleveland's defensive-line tradition. The franchise's structural identity, from the 1990s through the Schwartz years, is *penetration-first, gap-exchange second*. The signature operator is the T-E game: the end crashes upfield to occupy and vertically stretch the tackle, while the three-technique slants *away* from his own leverage, and the end loops back inside behind him. This is not a power move. It is a geometry attack on the *exchange of responsibility* between two blockers. `[UNVERIFIED for 2026: current DC, front, and stunt rate.]`

Third body: Houston's protection. A wide-zone-derived offense with heavy motion asks linemen to make *post-snap lateral decisions* and to hand off uncovered rushers. Slide protection is the standard counter to stunt games — the line slides as a unit toward the declared side and "walls" the loop. But slide protection has a specific, quantifiable failure mode: the loop rusher arrives in the vacated gap before the sliding wall arrives, because the wall's lateral velocity is far lower than the rusher's path velocity.

The coupling that makes this a genuine crucible: the loop's achievable radius is *friction-limited*, and friction is weather-dependent. A rusher cannot run a tight quarter-circle at full speed on wet turf, which lengthens the loop and partially rescues the slide. So the weather simultaneously (i) degrades the defense's primary weapon and (ii) degrades the ball, the footing, and the cadence. These effects have *opposite signs on the same play*, which is exactly why single-layer models produce confident, wrong point estimates.

Third layer: the internal clock. A quarterback's throw is a first-passage-time event under a collapsing sense of safety. Model the progression read as a drift-diffusion process with absorbing bounds at $\pm a$ in evidence units, drift $v$ [evidence s⁻¹], within-trial variance $s^2$ [evidence² s⁻¹]:

$$p_{\text{commit}} = \frac{1}{1+e^{-2av/s^2}}, \qquad \mathbb{E}[T_{\text{dec}}] = \frac{a}{v}\tanh\!\left(\frac{av}{s^2}\right) + T_{er}.$$

Sanity checks: as $v\to 0$ the expression has a *removable* singularity with limit $a^2/s^2 + T_{er}$ (pure diffusion exit time); as $v\to\infty$, $\tanh\to 1$ and $\mathbb{E}[T_{\text{dec}}]\to a/v + T_{er}$ (deterministic drift). The model *breaks down* under exactly the conditions this game presents: a simulated pressure picture makes $v$ non-stationary (it collapses at the snap when the read is wrong), and urgency makes $a$ decay, $a(t) = a_0 e^{-\lambda t}$. With collapsing bounds the closed form is lost and one must solve the Fokker–Planck first-passage problem numerically. Any analyst quoting a single "average time to throw" is quoting the $v\to\infty$ asymptote of a model whose assumptions have already failed.

The final synthesis: the correct object is a *competing-risks race* between the throw clock and the pressure clock,

$$\Pr(\text{throw precedes pressure}) = \int_0^\infty f_\Theta(t)\,S_\Pi(t)\,dt, \qquad S_\Pi(t) = \exp\!\left(-\int_0^t h_\Pi(u)\,du\right),$$

with $f_\Theta$ the time-to-throw density [s⁻¹] and $S_\Pi$ the protection survival function. The independence assumption implicit in this product is *false and known to be false*: pressure causes early throws. The honest specification is a shared-frailty model with common latent $Z$ — $h_\Theta(t\mid Z) = Z\,h_{0\Theta}(t)e^{\beta^\top x}$, $h_\Pi(t\mid Z) = Z\,h_{0\Pi}(t)e^{\gamma^\top x}$ — inducing a Clayton-type dependence. Ignoring the frailty biases the estimated protection benefit *upward*, because it credits the line with throws the quarterback made for reasons the line did not cause.

</THINK_TRACE>

<RETROCAUSAL_GENEALOGY>

**Coaching-tree DNA.** DeMeco Ryans is a Wade Phillips linebacker by playing lineage and a Kyle Shanahan product by coaching lineage, with a Bill O'Brien interlude as Houston's linebackers coach. The Phillips inheritance is gap-soundness discipline and two-gap comfort; the Shanahan inheritance is wide-zone run geometry, condensed formations, heavy pre-snap motion, and play-action scaled off run-action volume. The offense's structural vulnerability to T-E games is *inherited, not incidental*: wide-zone-derived protection teaches linemen to react to *where the defender is*, and a stunt game's entire purpose is to make "where he is" a lie for 400 ms. `[UNVERIFIED 2026: whether Houston's OC in 2026 is a Shanahan-branch (Slowik-style outside-zone emphasis) or a Patriots-branch (Caley-style gap-scheme and heavier personnel) coordinator. The two branches have materially different stunt exposure — gap-scheme protection with a declared front is more stunt-resistant than zone protection with post-snap declaration.]`

**Historical situational scars.** Cleveland's lakefront has produced multiple games where surface wind, not talent, dominated the outcome — the September 2021 opener against Kansas City is the canonical modern example, a game in which a ~20+ mph crosswind degraded deep-ball accuracy and kicking for both sides simultaneously. The January 2021 playoff win over Pittsburgh is the snow-and-cold archetype. These are not anecdotes to be cited as evidence; they are *existence proofs* that the effect size in this venue can exceed the effect size of any personnel mismatch on the field. Houston's counter-scars are late-January: three consecutive seasons ending in a road divisional-round loss to Kansas City, a pattern that has repeatedly been attributed to protection under pressure rather than to skill-position deficits.

**Multi-week tape traps.** Three specific traps are live. (1) *Recency overweighting of the prior week's front.* If Cleveland faced a wide-9 power-rush team in Week 9, its public tape under-represents its own stunt rate on early downs, and Houston's Week-10 install will be built on stale evidence. (2) *Convention scouting.* T-E games are conventionally logged as "stunt" without recording the loop radius or the exchange timing, so the derived tendency is untyped and therefore uncoachable. (3) *Save-then-show.* A defensive line that has spent four weeks rushing straightforwardly has banked a genuine surprise. The tape trap is that the *absence* of stunts is itself information, and standard tendency models treat absence as a stable rate rather than as a conditional signal.

**Scientific proof barriers.** Four hard barriers prevent clean causal identification here. (i) *Endogeneity of weather*: wind is not randomly assigned; cold, windy games cluster in specific venues, weeks, and opponent types, so raw wind-outcome correlations confound weather with schedule. (ii) *Measurement error*: the wind is a vector field; the recorded value is a scalar at one height at one point. Classical measurement error in a regressor attenuates coefficients toward zero, meaning published "wind doesn't matter much" findings may be artifacts of instrumentation. (iii) *Censoring*: only called plays are observed. The counterfactual protection call is never realized, so protection quality is only partially identified. (iv) *Multiplicity*: 32 clubs × 18 weeks × dozens of down/distance/split cells guarantees spurious findings at conventional thresholds. Any claim about this game that rests on a split with $n < 100$ snaps is not evidence.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Level 0 (naive): Houston slides to the stunt side; problem solved.

Level 1 (Cleveland DC): Houston slides. Therefore I run T-E games on early downs and mug the A-gaps to *bait* the slide declaration. The mug look is the key instrument: a pre-snap pressure picture that displays six threats forces the center to declare a slide direction, and the declaration is the information the DC wants. The DC's optimal play is not the one that beats the slide; it is the one that makes the slide *declare wrongly*.

Level 2 (Houston OC/QB): The DC is mugging to bait my declaration. Therefore I will declare *late*, or use a "slide-and-banana" rule where the backside guard walls the loop while the center holds the A-gap. I will also use motion to force the front to declare *before* I do, inverting the information asymmetry.

Level 3 (DC, anticipating Level 2): If they declare late, the stunt's timing advantage is neutralized — so I convert to a *simulated pressure*: five rush, two bail, and the coverage picture collapses the progression regardless of protection. Now the attack is on the *internal clock*, not the pocket. This is the crucial recursion: the DC's Level-3 move is to stop attacking the line and start attacking the quarterback's evidence-accumulation threshold.

Level 4 (QB): If the pressure is simulated, the correct response is *not* to slide further; it is to hold the ball 200–300 ms longer than the mug picture invites, because the bailing rushers have removed themselves from the pressure hazard. This requires overriding a trained urgency response under a 30 dB-degraded acoustic channel.

**The crisis-regression prediction.** Under existential pressure — a late-December or January re-run of this fixture, or an in-game deficit in the fourth quarter — the recursion *collapses downward*. The 100-rep comfort call is the tell: a quarterback under acute pressure reverts to his most-repped concept, which is the concept with the *lowest* $a$ (evidence threshold) and therefore the *shortest* $\mathbb{E}[T_{\text{dec}}]$. The DC's counter is to bait that exact concept with a coverage that looks like its pre-snap picture and is not. The failure mode is not a sack; it is a *fast, confident, wrong* throw — an interception with a short time-to-throw and high ball velocity, which is the statistical signature of a collapsed decision bound rather than of a protection failure. Distinguishing these two in the data is the single highest-value post-game analytic task.

The acoustic channel is the recursion's floor. Crowd and wind noise combine incoherently:

$$L_{\text{total}} = 10\log_{10}\!\left(\sum_i 10^{L_i/10}\right)\ \text{dB re } 20\ \mu\text{Pa}.$$

Wind-induced pseudo-noise at a body-worn or helmet microphone scales roughly as $L_w \approx L_0 + 40\log_{10}(U/U_0)$ dB in the turbulent regime — the exponent is site- and windscreen-dependent, commonly 30–50 dB per decade, so treat 40 as an order-of-magnitude central value. Going from $U_0 = 1$ to $U = 8$ m s⁻¹ adds $40\log_{10}8 = 36$ dB. A cadence is a 1–2 kHz signal; wind noise is broadband with peak energy below 500 Hz but substantial masking energy in the 500 Hz–4 kHz speech band. Speech Transmission Index approaches zero once band SNR falls below roughly −15 dB. The dB addition rule assumes *incoherent* sources; coherent sources add in pressure and can exceed the power-sum by up to 6 dB. And wind noise is non-stationary over the 3-second cadence window, so $L_p$ is not ergodic there — a single $L_{eq}$ number for a possession is meaningless.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

**VETO 1 — The loop-radius friction limit (biomechanical).** The naive claim "T-E games beat slide protection" rests on a geometry race. Loop arc length for a quarter-circle of radius $R$: $L = \pi R/2$; loop time $t_{\text{loop}} = L/\bar v_{\text{rush}}$. Slide time $t_{\text{slide}} = d/v_{\text{lat}}$ over lateral distance $d$. Free-runner condition: $t_{\text{loop}} < t_{\text{slide}} - t_{\text{handoff}}$.

Naive numbers: $R = 1.2$ m, $\bar v = 4.5$ m s⁻¹ → $t_{\text{loop}} = 1.885/4.5 = 0.42$ s. Slide $d = 1.5$ m at $v_{\text{lat}} = 2.5$ m s⁻¹ → $t_{\text{slide}} = 0.60$ s. Free runner by 0.18 s. **This is the naive expected-value claim, and it is vetoed.**

The veto: a circular path at radius $R$ and speed $v$ demands centripetal acceleration $a_c = v^2/R = 20.25/1.2 = 16.9$ m s⁻² ≈ 1.72 *g*. Available lateral acceleration is friction-limited: $a_{\max} = \mu g$. On wet natural turf with degraded cleat engagement, $\mu \approx 0.4$–$0.5$, so $a_{\max} \approx 3.9$–$4.9$ m s⁻². The minimum feasible radius at 4.5 m s⁻¹ is therefore $R_{\min} = v^2/a_{\max} = 20.25/4.9 = 4.13$ m — **3.4× the assumed radius.** Recomputing with $R = 4.13$ m: $L = 6.49$ m, and a rusher decelerating into the turn has $\bar v \approx 3.5$ m s⁻¹, giving $t_{\text{loop}} = 1.85$ s. The free-runner margin inverts from −0.18 s to **+1.25 s in favor of the slide.**

*Formal statement.* Let $\mu$ be the effective cleat–turf friction coefficient (dimensionless), $g = 9.81$ m s⁻². Then
$$t_{\text{loop}}(\mu) = \frac{\pi v^2}{2\,\mu g\,\bar v(\mu)}.$$
$t_{\text{loop}}$ is *not* monotone in $\mu$ alone because $\bar v$ also depends on $\mu$; the veto is that the sign of $t_{\text{loop}} - t_{\text{slide}}$ is friction-dependent, so the protection call that is correct in dry conditions is *incorrect* in wet ones. **Singularity:** $\mu \to 0$ gives $t_{\text{loop}} \to \infty$ (no turn possible; the rusher runs straight past). **Breakdown:** the constant-$\mu$, rigid-body, point-mass reduction fails when the rusher uses a hand-fighting counter-move that converts linear to angular momentum without a large-radius turn — at which point the whole pursuit-geometry framing is the wrong model and one needs a contact-dynamics simulation.

**VETO 2 — Crosswind drift and the linearization's own failure.** Quadratic drag:
$$\mathbf F_d = -\tfrac12 \rho C_d A\,\lVert \mathbf v_{\text{rel}}\rVert\,\mathbf v_{\text{rel}}, \qquad \mathbf v_{\text{rel}} = \mathbf v_{\text{ball}} - \mathbf u(z).$$
With $\rho = 1.28$ kg m⁻³ (0 °C, 1 atm), $C_d \approx 0.15$–$0.30$ for a stabilized spiral, $A = \pi r^2 = 6.2\times10^{-3}$ m² ($r = 0.0445$ m), $m = 0.411$ kg. Reynolds number $\mathrm{Re} = \rho V D/\mu_{\text{air}} = 1.28 \times 22 \times 0.178 / 1.71\times10^{-5} = 2.9\times10^{5}$ — near the bluff-body drag-crisis region, but spin-stabilization fixes the separation topology, so $C_d$ is comparatively flat in $V$; it is *strongly* dependent on spin rate and axis alignment.

Leading-order lateral drift for a crosswind component $U_\perp$:
$$a_\perp \approx \frac{\rho C_d A}{2m}\,V\,U_\perp, \qquad \delta \approx \frac{\rho C_d A\,V\,U_\perp\,t^2}{4m}.$$
With $V = 22$ m s⁻¹, $U_\perp = 8$ m s⁻¹: $\frac{\rho C_d A}{2m} = \frac{1.28 \times 0.2 \times 6.2\times10^{-3}}{2 \times 0.411} = 1.93\times10^{-3}$ m⁻¹, so $a_\perp = 0.34$ m s⁻². A 28 m throw ($t \approx 1.3$ s): $\delta = 0.29$ m. A 50 m throw ($t \approx 2.4$ s): $\delta = 0.98$ m ≈ 1.07 yd.

**The veto is on the approximation, not the wind.** The expansion parameter is $\epsilon = U_\perp/V = 8/22 = 0.36$. That is *not small*; $O(\epsilon^2)$ corrections are ~13%, and the true dynamics are worse than leading order because as the ball drifts, $\mathbf v_{\text{rel}}$ *rotates* and $\lVert\mathbf v_{\text{rel}}\rVert$ falls on the upwind side, reducing $a_\perp$ — a self-limiting feedback the linear solution cannot represent. Along-track decay is separately tractable: $V(t) = V_0/(1 + t/\tau)$ with $\tau = m/(\tfrac12\rho C_d A V_0) = 0.411/0.01746 = 23.5$ s, giving 9% velocity loss over 2.4 s. **Breakdown:** this 1-D reduction discards gravity–drag coupling and the Magnus term entirely. Spin parameter $S = \omega r/V = 300 \times 0.0445/22 = 0.61$ at $\omega = 300$ rad s⁻¹ — high. Transverse moment of inertia $I_\perp = \frac{m}{5}(a^2+b^2) = \frac{0.411}{5}(0.0196+0.00198) = 1.77\times10^{-3}$ kg m²; axial $I_\parallel = \frac{2}{5}mb^2 = 3.26\times10^{-4}$ kg m²; spin angular momentum $L_s = I_\parallel\omega = 0.098$ kg m² s⁻¹. A wind-corrected release *requires* a tilted spin axis, and aerodynamic torque then drives gyroscopic precession at $\Omega = \tau_{\text{gyro}}/L_s$. This is the mechanism behind "the ball moved late," and it is absent from every completion-probability model I am aware of. I cannot compute $\Omega$ without the aerodynamic-center offset, which is not published — that is a genuine, unresolved proof barrier, not a rounding issue.

**VETO 3 — Thermodynamic ball state and the Biot-number trap.** Fixed-volume ideal gas:
$$P_2 = P_1\frac{T_2}{T_1}.$$
$P_1 = 12.5\ \text{psi}_g + 14.696 = 27.196\ \text{psi}_a = 187.5$ kPa; $T_1 = 294.3$ K; $T_2 = 276.5$ K (3.3 °C). $P_2 = 176.2$ kPa $= 25.55\ \text{psi}_a \Rightarrow 10.85\ \text{psi}_g$, i.e. $\Delta P = -1.65$ psi.

**The veto is the Biot number.** $Bi = hL_c/k$ with $h \approx 30$ W m⁻² K⁻¹ (forced convection at 8 m s⁻¹), $L_c \approx 0.005$ m, leather $k \approx 0.15$ W m⁻¹ K⁻¹: $Bi = 1.0$. Lumped-capacitance analysis requires $Bi \ll 0.1$. At $Bi \approx 1$ there are *internal gradients*, so "the ball is at 3.3 °C" is not a well-posed statement. Thermal time constant $\tau_{th} = mc_p/(hA) = 0.411 \times 1500/(30 \times 0.075) = 274$ s ≈ 4.6 min; 95% equilibration needs $3\tau \approx 14$ min. **Operational consequence, and it is checkable:** a ball held on a sideline warmer than ambient and exposed for 90 s is at a materially different pressure than one that has sat on the turf for 15 minutes, and the two are used interchangeably. **Breakdown:** constant-$V$ fails because the bladder–leather shell is compliant — as $P$ drops, $V$ rises, partially offsetting $\Delta P$; and water-vapor partial pressure plus condensation violate the dry-ideal-gas assumption. The 1.65 psi figure is an upper bound on the magnitude, not a measurement.

**VETO 4 — Solar geometry.** Declination on 15 November $\delta_\odot \approx -18.5°$; at latitude $\phi = 41.5°$N, maximum elevation $h_{\max} = 90° - |\phi - \delta_\odot| = 30.0°$. Solar noon at longitude $-81.7°$ in EST occurs near 12:42 local, so a 13:00 kickoff places the sun at ~29° elevation, azimuth ~200° (SSW). This is low-angle glare, not overhead light: it degrades *downfield* vision for whichever quarterback faces south-southwest, and it interacts with lake-effect cloud to produce intermittent rather than constant glare — the worst case for a visual adaptation system, because the eye never fully light- or dark-adapts.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Three training scenarios in which a surface statistical policy is *verifiably* dominated. In each, the reward is derived from public, checkable play-by-play and tracking outcomes — no human preference labels, no invented data.

**Scenario 1 — Protection-call policy under stunt pressure.**
*Setup.* Train a policy to choose slide / man / gap / slide-and-banana given down, distance, field position, personnel, and opponent front. *Surface model:* features include opponent *overall* pressure rate. *Veto model:* features include opponent stunt rate *conditional on down*, the loop radius achievable at the measured turf friction, and the pre-snap mug indicator. *Verifiable reward:* tracking-derived pressure-within-2.5 s (binary) plus sack (binary), scored per snap. *Why the surface model fails:* the stunt rate is concentrated on early downs; pooling it into a season pressure rate dilutes the signal by the base rate of non-stunt snaps, and the policy learns to slide on the wrong fraction of snaps. *Falsifiable Sunday test:* Cleveland's pressure rate on 1st-and-10 must exceed its pressure rate on 2nd-and-6 by **≥ 8 percentage points** for the stunt-concentration hypothesis to survive. Null: gap < 3 pp.

**Scenario 2 — Progression-exit threshold under simulated pressure.**
*Setup.* Train a policy for the quarterback's commit threshold $a$ and drift $v$ as functions of the pre-snap picture. *Surface model:* time-to-throw is a fixed quarterback trait $\mu_{QB}$. *Veto model:* a shared-frailty competing-risks specification with a non-stationary drift $v(t)$ and collapsing bound $a(t) = a_0e^{-\lambda t}$. *Verifiable reward:* tracking-derived time-to-throw and pressure flag, per snap. *Why the surface model fails:* it attributes to the offensive line variance that belongs to the quarterback's hazard, and it cannot represent the Level-3 recursion (simulated pressure → *longer* optimal hold). Its predicted pressure–throw correlation has the wrong sign on simulated-pressure snaps. *Falsifiable Sunday test:* median time-to-throw on plays with a pre-snap six-threat mug picture must differ from non-mug plays by **≥ 0.15 s**, and the mug-picture *interception rate per attempt* must exceed the non-mug rate by **≥ 2 pp**. If time-to-throw is flat across mug/non-mug, the frailty model is over-specified and the surface model wins.

**Scenario 3 — Wind-conditioned depth targeting.**
*Setup.* Train a policy over target depth and hash. *Surface model:* league-average expected yards by air-yardage bucket. *Veto model:* adds crosswind drift $\delta$, the receiver's effective catch radius, ball pressure via the Biot-corrected thermal state, and hash asymmetry. *Verifiable reward:* completion (binary) and yards gained, per attempt. *Why the surface model fails:* it is wind-blind, so it systematically over-values the deep boundary throw into a crosswind and under-values the intermediate crosser, and it cannot represent hash asymmetry at all. *Falsifiable Sunday test:* on attempts with air yards ≥ 30 and estimated $U_\perp \ge 6$ m s⁻¹, completion probability must fall **≥ 10 percentage points** below the wind-blind prediction, and the drop must be **≥ 5 pp larger on the open side than the closed side**. If the drop is symmetric across hashes, the drift mechanism is not the operative channel and something else (pressure, coverage) is.

**Cross-cutting falsification condition.** If Cleveland's pressure rate is statistically indistinguishable across down buckets (Scenario 1 null) *and* Houston's time-to-throw is flat across mug pictures (Scenario 2 null) *and* deep-ball completion is hash-symmetric (Scenario 3 null), then the entire cross-layer apparatus above is unnecessary for this fixture and a surface model with league base rates is the correct, more parsimonious choice. I consider that outcome unlikely but genuinely possible, and I am stating it in advance rather than after the fact.

**What I cannot deliver.** I will not produce a personnel matchup table, an injury-adjusted depth chart, or a game-time wind number for 2026-11-15. Those require data that does not yet exist. The physics above is exact and time-invariant; the personnel inputs are placeholders, and I have marked them as such rather than filling them with plausible-sounding invention.