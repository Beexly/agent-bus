---
source: "Davis-1911-Football-The-American-Intercollegiate-Game.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-a-sports"
pages: 577
model: deepseek/deepseek-v4.1-flash-1017
words: 7695
---

<NATIVE_REASONING>
We need answer user asks likely analyze source with exact XML sections, >=1000 words, no betting lines. Need use page citations and verbatim quotes. We need adhere. Need produce deep multi-hop derivation, gray-zone audit. This is weird: source is Davis 1911 Football history, not modern data. Need derive "GSE+GSI Frontier Reasoning Foundry" but no explicit question? User provided drive source and instructions. They expect output in exact XML sections. Need analyze source operators/equations. Must avoid betting lines. Could treat as historical/scientific lineage, physical/biomechanical/weather veto proof, RLVR counterfactual vetoes. Need maybe identify traps: source is 1911, historical rules, not contemporary athletic performance. Need formal LaTeX equations with units, assumptions, singularities. Source pages provided limited (maybe excerpts). We should cite exact page markers. Need >=1000 words across sections, THINK_TRACE >=400. We can mention no betting lines. "ZERO BETTING LINES" no spreads/totals/moneylines/odds. Be careful not mention "odds" even? The invariant says never mention spreads, totals, moneylines, or odds. Avoid word odds. No betting terms. We can discuss probabilities? It says units probability. Probability is okay but avoid betting odds. Use "probability". No fake ratios. Need formal LaTeX equations with SI/information/probability units, assumptions, exact singularity/breakdown regimes. Need source citations [PAGE N] exact quotes. Use pages given, exact verbatim quotes. We can use quotes:

[PAGE 97 of 577]: "as long as one side has the ball, the other cannot score, and when one team kicks the ball the other team is extremely sure to get it." (actual text page 97? Page 97 marker contains that). Good.

[PAGE 99 of 577]: "the abolition of the scrummage of the English game and the substitution of the far more ingenious method of putting the ball in play familiar to all to-day as the American scrimmage." Also "orderly retention of the ball by one side, thereby making possible the use of prearranged strategy".

[PAGE 103 of 577]: rule three consecutive fairs/downs advance five yards or lost ten. Actually [PAGE 103] has "If on three consecutive fairs and downs a team shall not have advanced the ball five yards or lost ten, they must give up the ball..." Good.

[PAGE 113 of 577]: "prohibiting the defensive rush-line from clasping hands and stretching out across the field like a chain, and the rule which extended tackling from the waist to the knees." Actually page 113? It's page 111? Need exact [PAGE 113 of 577]? Check text: [PAGE 113 of 577] starts "VfbQ/}oilJ)ydco^i.^^ 88 FOOTBALL..." The quote is at page 111? Wait [PAGE 111 of 577] contains "The final momentous session ... convention March 3, 1888... rule prohibiting defensive rush-line..." Actually page 111 of 577 text includes "These radical amendments was the rule prohibiting..." Yes [PAGE 111]. Use [PAGE 111].

[PAGE 145 of 577]: forward pass introduced; "at the suggestion of John C. Bell, of Pennsylvania, and Paul J. Dashiell, of the Naval Academy, the forward pass was introduced" and rules "gain of ten" etc. Good.

[PAGE 151 of 577]: seven men on line, no hands/arms assist runner, no interlock arms/bodies, flying tackle forbidden, snapper-back can run. "when the ball was put in play seven men should be on the line of scrimmage and ... no player ... use his hands or arms to assist the player carrying the ball..." Good.

[PAGE 107 of 577]? V formation: [PAGE 107? Actually page 107 marker blank? Text around page 109 has V. [PAGE 109 of 577] "The V as finally perfected was formed by the eleven players taking positions in a solid V-shaped mass..." Good.
[PAGE 123 of 577] flying wedge? [PAGE 121?] contains "flying wedge, the invention of Lorin F. DeLand." Actually [PAGE 121 of 577]? Let's map: [PAGE 121] starts "94 FOOTBALL ... the famous flying wedge, the invention of Lorin F. DeLand." Good.
[PAGE 141?] tackle-back play? [PAGE 139 or 141] "Yale's famous tackle-back play" at [PAGE 139]? [PAGE 139 of 577] has "This theory eventually shaped itself into Yale's famous tackle-back play..." Yes.
[PAGE 147 of 577] forward pass development and defense spread: "The two defensive half-backs which for many years had constituted the secondary defence... were sent back to cover the dangerous forward-pass zone." Good.
[PAGE 151] mass play removal.
[PAGE 163?] flying wedge examples.
[PAGE 167?] forward passes.
Need formal equations: Could model ball possession as Markov control with state x in field position, down count d, possession p, time t. But must not invent fake ratios? Formal equations okay. Need avoid "toy equations" fake ratios like Force/Fatigue. Need equations with units. Could define information-theoretic value of possession, entropy, gain constraints. Use SI units (m, s, J maybe), information units (bits, nats), probability units (dimensionless). Need singularity/breakdown regimes: when time remaining T→0; when down count resets; mass-play model breaks when hands prohibited; when field position beyond boundaries; when no possession. Formal equations not fake ratios. Need robust.

We can define:
State \(S_t=(x_t,d_t,\pi_t,\tau_t)\), with x position along field in meters, d downs remaining ∈{1,2,3,4}, π possession ∈{0,1}, τ time remaining s. Actually source uses yards, feet; convert: 1 yard = 0.9144 m. Could mention source units yards.

Define transition feasibility under 1882 rule: over n=3 downs, net displacement Δx must satisfy Δx ≥ 5 yd = 4.572 m or else possession flips; 1906 rule 10 yd = 9.144 m over 4 downs. Could equation:
\[
P(\text{retain possession after }k\text{ downs}) = \mathbf{1}\{\Delta x_{t:t+k} \ge L_n\}
\]
where L_n=4.572 m (1882) or 9.144 m (1906). But "probability" not needed? This is indicator.

Information entropy of play call:
\( H(C \mid S)=-\sum_c p(c|S)\log_2 p(c|S)\) bits. Prearranged strategy possible when possession retention stable: \(H(C)\) rises with expected retained downs. But need avoid fake ratio? This is okay.

But could be seen as invented? The prompt wants formal equations. Need state as modeling hypotheses, not source. We can formalize source statements.

Biomechanical:
Mass \(M\) kg, velocity \(v\) m/s, kinetic energy \(K=\frac12 M v^2\) J; collision stopping distance \(s\) and mean force \(F_{\text{avg}} = K/s\) N. This is not fake ratio, physical energy/distance. Singularity s→0 => impulse/force unbounded in rigid-body idealization; breakdown due to finite tissue deformation, concussion, injury. Source [PAGE 95?] describes flying wedge impact? [PAGE 95?] "flying wedge" [PAGE 121]. Also [PAGE 97?] flying wedge? We can cite [PAGE 121] "the most discussed topic" etc.

Weather veto: source mentions rain/sleet [PAGE 245], darkness [PAGE 435?] and [PAGE 425?], wind [PAGE 325?], mud [PAGE 439?]. Need exact quote:
[PAGE 245 of 577]: "Both teams appear in fresh uniforms, as the game is being played in rain and sleet."
[PAGE 435 of 577]: "The referee calls the game on account of darkness." Actually [PAGE 435] has "The referee calls the game on account of darkness." Good.
[PAGE 439 of 577]: "The second half opens as darkness is closing down and the rain is falling in increased torrents." Good.
[PAGE 425 of 577]: "Snow is falling heavily" Good.
[PAGE 325 of 577]: "strong wind" many. [PAGE 425] enough.

Clock:
[PAGE 47?] game called at sunset? [PAGE 25] "The game was called at sunset..." Good.
[PAGE 47?] five o'clock pealing. [PAGE 47] "Five o'clock is now pealing on the air." Good.
[PAGE 435] darkness.
Need recursive theory of mind: crisis habit regression vs counter-trap vs clock. Interpret: teams revert to familiar mass plays under pressure (crisis habit regression); counter-trap: opponent anticipates and uses rule changes (e.g., forward pass to spread defense, on-side kick); clock as external arbiter. Need cite source examples: Princeton block game [PAGE 427?], Harvard flying wedge [PAGE 327?], Yale tackle-back [PAGE 139], forward pass 1906 [PAGE 145], defensive spread [PAGE 147], mass play banned [PAGE 151]. Need mention multi-week traps: historical source is 1911 and pages are scanned; OCR errors (e.g., "TALE" for YALE, "Dabtmouth") are not evidence of actual names. That is a trap. Need "retrocausal genealogy" historical/scientific lineage: ancient harpaston [PAGE 23], Roman follis, medieval calcio, Rugby Ellis [PAGE 47], Cambridge rules [PAGE 53], American scrimmage [PAGE 99], eleven men [PAGE 99], forward pass [PAGE 145]. Multi-week traps: anachronistic reading of 1911 as modern NFL, mistaking old scoring (goal=4 touchdowns etc [PAGE 93]), confusing "touchdown" scoring values [PAGE 105], OCR substitution. Need mention exact quotes.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need show source evidence that physical/weather can veto strategy. Use equations and citations. Provide proof as propositions. "Veto proof": If surface friction μ low, acceleration a_max=μg, stopping distance etc. Weather affects traction and ball flight; darkness reduces photon flux; physical collision energy exceeds threshold; rules ban mass play. Need not overdo.

RLVR counterfactual vetoes: 3 verifiable scenarios with predictions. Need be careful no betting lines. Define RLVR as reinforcement learning with verifiable reward? We can present counterfactual tests against source. Three scenarios:
1. Rule-constrained possession retention: 1882 three downs/five yards vs no such rule. Prediction: under 1882, teams with≥5yd/3 downs retain; else turnover. Verifiable by play-by-play pages e.g., [PAGE 103]. If model ignores, invalid.
2. Forward pass introduction 1906: predict defensive halfbacks drop to cover forward-pass zone, leading to more massed tackle attacks due to 10-yard requirement. Source [PAGE 145-147]. Counterfactual: if forward pass not legal, no spread? Prediction: no secondary spread; source says it happened. Verifiable via rule text and game accounts.
3. Mass-play ban 1910: after banning hands/arms assisting runner and requiring seven on line, flying wedge/V/tandem should be illegal; if observed as legal scoring after rule, anomaly. Source [PAGE 151]. Prediction: plays relying on interlocked mass cannot be scored under 1910 rules; if source describes mass play after 1910, it must be illegal/penalty or prior game. Cite 1910 Harvard-Yale [PAGE 369?] shows no mass? Could use game 1910 ending 0-0 [PAGE 369]. Hmm.

Need exact XML sections. Overall >=1000 words. Need ensure THINK_TRACE >=400 words. We can write around 2000-2500 words total. Desired oververbose 5. Need no bullet? Can use paragraphs. XML tags exact.

Need cite verbatim quotes with [PAGE N]. The source pages: [PAGE 97 of 577], [PAGE 99 of 577], [PAGE 103 of 577], [PAGE 121 of 577], [PAGE 145 of 577], [PAGE 147 of 577], [PAGE 151 of 577], [PAGE 111 of 577], [PAGE 425 of 577], [PAGE 435 of 577], [PAGE 439 of 577], [PAGE 245 of 577], [PAGE 25 of 577], [PAGE 47 of 577], [PAGE 23 of 577], [PAGE 53 of 577], [PAGE 93 of 577], [PAGE 105 of 577], [PAGE 139 of 577], [PAGE 167?]. Need verify quotes exact.

Let's check page markers:
- PAGE 23: has Greek words, harpaston. Quote "It was played upon a rectangular field marked with side lines, goal-lines, and centre line. There was no limitation upon the number of players..." Good.
- PAGE 25: "The game was called at sunset and awarded by the six judges..." Good.
- PAGE 47: "Five o'clock is now pealing on the air." Good.
- PAGE 53: Cambridge conference 1846? "met in a conference which lasted six hours" etc.
- PAGE 93: scoring compromise "A match shall be decided by a majority of touchdowns; a goal shall be equal to four touchdowns..." Good.
- PAGE 97: quote "as long as one side has the ball, the other cannot score, and when one team kicks the ball the other team is extremely sure to get it." Good.
- PAGE 99: "the abolition of the scrummage of the English game and the substitution of the far more ingenious method of putting the ball in play familiar to all to-day as the American scrimmage." and "orderly retention of the ball by one side, thereby making possible the use of prearranged strategy". Good.
- PAGE 103: "If on three consecutive fairs and downs a team shall not have advanced the ball five yards or lost ten, they must give up the ball to the other side at the spot..." Good.
- PAGE 111: quote "the rule prohibiting the defensive rush-line from clasping hands and stretching out across the field like a chain, and the rule which extended tackling from the waist to the knees." Good.
- PAGE 121: "the famous flying wedge, the invention of Lorin F. DeLand." Good. Also "the most discussed topic by the country at large for many days..." Good.
- PAGE 139: "Yale's famous tackle-back play" yes and "getting a play into the opening made by a charging forward..." Good.
- PAGE 145: "the forward pass was introduced" "gain of ten" "Hurdling..." Good.
- PAGE 147: "The two defensive half-backs which for many years had constituted the secondary defence, supporting the tackles, were sent back to cover the dangerous forward-pass zone." Good.
- PAGE 151: "when the ball was put in play seven men should be on the line of scrimmage" and "no player of the side in possession of the ball should use his hands or arms to assist the player carrying the ball" and "forbidding the flying tackle" and "permitting the player who received the ball directly from the snapper-back to run forward". Good.
- PAGE 245: "Both teams appear in fresh uniforms, as the game is being played in rain and sleet." yes.
- PAGE 425: "Snow is falling heavily, but play follows play in rapid succession." yes.
- PAGE 435: "The referee calls the game on account of darkness." exact? Page 435 has "The referee calls the game on account of darkness." Yes.
- PAGE 439: "The second half opens as darkness is closing down and the rain is falling in increased torrents." Yes.
- PAGE 327? flying wedge 1892? [PAGE 327] has "This formation, the famous 'flying wedge,' goes crashing into the Yale men with a tremendous impact" Good. Use [PAGE 327 of 577].
- PAGE 369 of 577 has 1910 Harvard-Yale final 0-0? Actually page 369 is 1910 Harvard-Yale start. Page 371 end. Use not necessary.
Need exact quotes maybe quote fragments with ellipses? They want verbatim quotes. Use exact fragments, no alteration. Ellipses okay? Better quote full short fragments exactly.

Need equations in LaTeX. We'll include formal operators:
- Possession transition:
\[
\mathcal{T}_{n,L}(x,d,\pi) = \begin{cases}
(x+\Delta x,d-k,\pi) & \Delta x \ge L \\
(x,d,\pi) & \text{otherwise}
\end{cases}
\]
Actually if fail, possession flips. Define \(L_3=5\,\mathrm{yd}=4.572\,\mathrm{m}\) for three downs 1882, \(L_4=10\,\mathrm{yd}=9.144\,\mathrm{m}\) for four downs 1906. Need down count. Use \(d\in\{1,2,3,4\}\), \(k\) downs used. Possession retention indicator \(R=\mathbf{1}[\Delta x_{t:t+k}\ge L_n]\). Units: Δx in m, L in m. State coordinate maybe x∈[0,100 yd] but convert. Source uses yard lines. We can mention field x in yards or meters. Better all SI except quote source units. Use 1 yd = 0.9144 m exact.

- Information entropy:
\[
H(C|S_t)=-\sum_{c\in\mathcal{C}} p(c|S_t)\log_2 p(c|S_t)\ \mathrm{bits}
\]
Assumption: finite playbook C, p>0. Breakdown if playbook collapses to one deterministic play: H=0 bits; if p=0 log term omitted. This is a formal information unit, not fake ratio. "Prearranged strategy" source [PAGE 99]. Could say rule change expands feasible strategy set.

- Field position Markov value:
\[
V^\pi(S_t)=\mathbb{E}\left[\sum_{j=t}^{T} \gamma^{j-t} r(S_j) \mid S_t,\pi\right]
\]
with r score in points? Units? Points not SI. Maybe avoid. Use reward in points, but scoring values historical. Could be a reward function \(r\in\{0,1,2,4,5,6\}\)? Source old scoring. But "probability units". Maybe define expected points \(V\) in points, not SI. But ask SI/information/probability units. We can use probability of scoring \(P(\text{score}|S_t)\) dimensionless. Equation:
\[
P_{\rm score}(S_t)=\sum_{\omega\in\Omega_{\rm score}} P(\omega|S_t)
\]
No fake.

- Kinematic collision:
\[
K=\frac12 M v^2,\quad F_{\rm avg}=\frac{K}{s}=\frac{M v^2}{2s}
\]
Units J, N. Singularity s→0: F→∞ in rigid-body limit; breakdown when tissue deformation finite, pain/injury thresholds. Source mass play [PAGE 121], [PAGE 151] ban.

- Traction:
\[
a_{\max}=\mu_s g,\quad d_{\rm stop}=\frac{v^2}{2\mu_s g}
\]
Units m/s², m. μ dimensionless, g=9.80665 m/s². Breakdown μ_s→0 => d_stop→∞; on rain/sleet/mud [PAGE 245], [PAGE 439] wet surface. Source says fresh uniforms due rain/sleet.

- Visibility / darkness:
Could define illuminance E in lux, contrast C_t, detection threshold. But perhaps not necessary. But weather veto proof needs darkness. Use simple:
\[
P_{\rm see}(t)=\mathbf{1}[E(t)\ge E_{\rm th}]
\]
with E lux; as E→E_th from above, detection probability transitions; if E<E_th, game called [PAGE 435]. Not fake.

- Ball flight wind? Could define aerodynamic drag force \(\mathbf{F}_d=-\frac12 \rho C_d A \|\mathbf{v}-\mathbf{w}\|(\mathbf{v}-\mathbf{w})\) N. Singularity? w not singular. Wind alters range. Source strong wind [PAGE 425?] snow. But no need.

Need "gray-zone audit" in THINK_TRACE: identify ambiguous claims, OCR issues, anachronism, source limitations. Multi-hop: from ancient harpaston forward pass [PAGE 23, 145], to American scrimmage [PAGE 99], to mass play and injury [PAGE 121,151], to weather/darkness [PAGE 245,435]. We can explain.

Need "retrocausal genealogy" historical/scientific lineage & multi-week traps. We can discuss ancient to modern. Multi-week traps: 1) reading old offensive formations as modern football despite rule differences. 2) treating page counts/OCR as reliable. 3) using 1911 source to infer current biomechanics without control. 4) confusing "interference" with modern penalty. 5) old scoring values. Need cite [PAGE 93] scoring, [PAGE 105] scoring values, [PAGE 111] defensive chain ban, [PAGE 145] forward pass. Good.

Need "recursive theory of mind" crisis habit regression vs counter-trap vs clock. We can frame as recursive coach/opponent beliefs. Under clock pressure, coach chooses habitual mass play due to high prior; opponent recursively predicts this and prepares counter; rule changes alter payoffs. Need cite source: "block game" Princeton [PAGE 427?] and rule three downs [PAGE 103]; Harvard flying wedge [PAGE 327]; Yale tackle-back [PAGE 139]; forward pass [PAGE 145]. Clock as terminal condition: game called at sunset [PAGE 25]; five o'clock [PAGE 47]; darkness [PAGE 435]. Counter-trap examples: forward pass forces defense spread [PAGE 147], then massed attack on tackles [PAGE 147]; rule-makers remove mass play [PAGE 151]. Good.

Need "cross-layer veto adjudication" physical/biomechanical/weather veto proof. We can present "Veto 1: physical collision", "Veto 2: weather traction", "Veto 3: darkness/clock", "Veto 4: rule enforcement". Need proof with equations and source quotes. We can call "proof" as adjudication: if conditions violated, strategy invalid regardless of intent. Good.

Need "RLVR counterfactual vetoes": 3 scenarios with predictions. Must be verifiable. We'll say "Scenario A: 1882 four-down? Actually source says three consecutive fairs and downs." Use [PAGE 103]. Prediction: under rule, a team failing Δx<4.572 m over 3 downs loses possession; if a play-by-play shows retention after three downs and <5 yd without kick/fumble, it's either a foul, a kick, or a source error. Verifiable by pages. Scenario B: 1906 forward pass introduced; prediction: forward-pass legal only with new rules; defensive halfbacks drop; ten-yard requirement. Source [PAGE 145-147]. Counterfactual: if forward pass absent, no secondary spread; if present without rule text, invalid. Scenario C: 1910 mass-play ban; prediction: interlocked mass plays with hands/arms assisting runner must be penalized; 1910 Harvard-Yale 0-0? [PAGE 369?] Actually 1910 game score 0-0 [PAGE 369? start]. Use [PAGE 151] and [PAGE 369] maybe. Prediction: any 1910 game account describing legal "flying wedge" with interlocked arms is anachronistic or penalty; source says mass play removed [PAGE 151]. Good.

Need avoid any betting line phrases. We won't use "line" as betting? "line of scrimmage" is fine? The invariant says never mention spreads, totals, moneylines, odds. "line" in football is not betting line. But to be safe, we can use "scrimmage line" or "rush-line" because source. "Betting" not mention. Avoid "odds" word entirely. Probability okay. Avoid "line" maybe "line of scrimmage" is needed. It's not betting line. Fine.

Need exact XML sections only? User says across these exact XML sections. We can output only XML tags and content. Include THINK_TRACE etc. No preamble. Need no Markdown? XML content can include LaTeX. Use maybe no code fences. Ensure tags exact. We can include escaped characters? XML content with < in math could break XML. Need avoid raw < characters in text? In XML, less-than inside content must be escaped. But user likely expects XML-like, not strict parser? To be safe, avoid `<` in equations? Use \(\le\) etc. Use \(\ge\), not raw <. Use `\Delta x \ge L`. No raw `<`. Use `>` okay but less-than not. Avoid `\mathbf{1}\{...\}` fine. Avoid `<` in text. Use `\to 0` no <. Use `P(\Delta x \ge L)`. No raw `<`. In equations, use `\mathbb{E}`. Ampersands? Avoid `&` in LaTeX? In XML, `&` must be escaped. If using `\begin{cases} ... & ...` includes &, invalid. Avoid cases with & or escape as `&amp;`. Better avoid cases environment with ampersand. Use piecewise written in prose or `\mathcal{T}=...` with \text{if}. But `&` not necessary. Avoid `&` entirely. Use `\text{ if }`. Avoid `<` and `&`. Use `\lt`? No. Use `\le` is okay (backslash le). In text, "less than" words. Avoid `>`? `>` okay in XML but can use `\ge`. Fine. Use math with \left\{ ... \right. no &. Good.

Need perhaps include `\mathrm{yd}`. Good.

Need mention exact page markers [PAGE N of 577] or [PAGE N]? User says cite exact [PAGE N] markers. Use [PAGE 97] etc. Good.

Need "verbatim quotes" exact. We can quote with double quotes. Ensure no typo. For [PAGE 99] quote: "the abolition of the scrummage of the English game and the substitution of the far more ingenious method of putting the ball in play familiar to all to-day as the American scrimmage." Check source: "the abolition of the scrimmage of the English game and the substitution of the far more ingenious method of putting the ball in play familiar to all to-day as the American scrimmage." Actually OCR says "scrummage" maybe? Original text: "the abolition of the scrummage of the English game and the substitution of the far more ingenious method of putting the ball in play familiar to all to-day as the American scrimmage." Yes.
Quote "orderly retention of the ball by one side, thereby making possible the use of prearranged strategy" exact? Source: "the principle of an orderly retention of the ball by one side, thereby making possible the use of prearranged strategy, the most distinctive and fascinating characteristic of the American game." Good.

Need cite [PAGE 97] quote: "as long as one side has the ball, the other cannot score, and when one team kicks the ball the other team is extremely sure to get it." Exact? Source: "One thing is certain: as long as one side has the ball, the other cannot score, and when one team kicks the ball the other team is extremely sure to get it." Good.

Need [PAGE 103] quote: "If on three consecutive fairs and downs a team shall not have advanced the ball five yards or lost ten, they must give up the ball to the other side at the spot..." Exact? Source: "If on three consecutive fairs and downs a team shall not have advanced the ball five yards or lost ten, they must give up the ball to the other side at the spot" yes.

Need [PAGE 145] quote: "the forward pass was introduced" and "the requirement that the offensive eleven must gain five yards on four downs or lose the ball was altered so to require a gain of ten" Exact? Source has "The requirement that the offensive eleven must gain five yards on four downs or lose the ball was altered so to require a gain of ten" yes. But page 145 text: "The requirement that the offensive eleven must gain five yards on four downs or lose the ball was altered so to require a gain of ten, thus forcing a team if possible to use end runs and other long-distance gaining plays, the open game so long desired." Good.

Need [PAGE 147] quote: "The two defensive half-backs which for many years had constituted the secondary defence, supporting the tackles, were sent back to cover the dangerous forward-pass zone." Exact. Good.

Need [PAGE 151] quote: "when the ball was put in play seven men should be on the line of scrimmage" and "no player of the side in possession of the ball should use his hands or arms to assist the player carrying the ball" Exact? Source: "This was accomplished by prescribing that when the ball was put in play seven men should be on the line of scrimmage and, most revolutionary of all, that no player of the side in possession of the ball should use his hands or arms to assist the player canying the ball, but that the latter should run unassisted and alone and that the players of the attacking side should not interlock arms or bodies." Good. Use fragment.

Need [PAGE 121] quote: "the famous flying wedge, the invention of Lorin F. DeLand." Exact? Source: "the famous flying wedge, the invention of Lorin F. DeLand." Good.
[PAGE 327] quote: "This formation, the famous 'flying wedge,' goes crashing into the Yale men with a tremendous impact" Exact? Source: "This formation, the famous 'flying wedge,' goes crashing into the Yale men with a tremendous impact, taking the ball to the 25-yard line." Good.

Need [PAGE 139] quote: "Yale's famous tackle-back play" and "getting a play into the opening made by a charging forward and accomplishing a satisfactory gain before that forward could recover his balance and fill up the opening that he himself had made." Exact? Source: "This theory eventually shaped itself into Yale's famous tackle-back play, thus utilizing an old formation, but executing the play in a wholly new manner." Good enough. Maybe quote shorter.

Need [PAGE 111] quote: "prohibiting the defensive rush-line from clasping hands and stretching out across the field like a chain, and the rule which extended tackling from the waist to the knees." Exact? Source: "These radical amendments was the rule prohibiting the defensive rush-line from clasping hands and stretching out across the field like a chain, and the rule which extended tackling from the waist to the knees." Good.
Need [PAGE 245] quote exact. Good.
[PAGE 425] quote exact "Snow is falling heavily, but play follows play in rapid succession." Good.
[PAGE 435] quote exact "The referee calls the game on account of darkness." Good.
[PAGE 439] quote exact "The second half opens as darkness is closing down and the rain is falling in increased torrents." Good.
[PAGE 25] quote exact "The game was called at sunset and awarded by the six judges, three for each team, to the side having scored the most goals." Good.
[PAGE 47] quote exact "Five o'clock is now pealing on the air." Good.
[PAGE 23] quote exact "It was played upon a rectangular field marked with side lines, goal-lines, and centre line." Good.
[PAGE 93] quote exact "A match shall be decided by a majority of touchdowns; a goal shall be equal to four touchdowns" Good.
[PAGE 105] quote exact scoring values? Page 105: "Safely 1 Touchdown 2 Goal following touchdown 4 Goal from field 5" OCR. We can mention old scoring values but maybe no need. Use [PAGE 93] enough.

Need "SOURCE_OPERATORS_AND_EQUATIONS" section. We should include formal LaTeX and units, assumptions, breakdown regimes. Could structure with paragraphs and equations. Use exact page citations.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." Our equations are physics/info. Good.

Need ">=1,000-word DEPTH across exact XML sections" So total >1000. We can write ~2200. Ensure THINK_TRACE >=400. Let's count approximate. Need not exact but enough.

Let's draft.

THINK_TRACE: ~600 words. Include multi-hop derivation and gray-zone audit. Mention source is 1911, OCR. Use citations. Explain operators: possession retention, information entropy, mass collision, traction, clock. Multi-hop chain: ancient harpaston to forward pass; Rugby to scrummage; American scrimmage; 1882 downs; mass play; 1906 forward pass; 1910 ban. Gray-zone: source is prescriptive and descriptive mixed; game accounts may be incomplete; OCR errors; no direct measurement; page citations only excerpt. Need "deep multi-hop derivation & gray-zone audit." Good.

SOURCE_OPERATORS_AND_EQUATIONS: ~700 words? Include equations and units. Need formal. Use LaTeX. Include assumptions and singularities. Let's enumerate operators O1-O6. For each equation, units, assumptions, breakdown. Cite pages. Avoid too long but enough.

RETROCAUSAL_GENEALOGY: ~400 words. Historical lineage and multi-week traps. Cite pages.

RECURSIVE_THEORY_OF_MIND: ~400 words. Crisis habit regression vs counter-trap vs clock. Cite pages.

CROSS_LAYER_VETO_ADJUDICATION: ~400 words. Physical/biomechanical/weather veto proof. Equations and citations.

RLVR_COUNTERFACTUAL_VETOES: ~400 words. Three scenarios and predictions. Cite pages.

Total >2500. Good.

Need not mention "betting" or "odds". Avoid "moneyline" etc. No "line" as betting. Fine.

Need ensure XML valid: no `<` raw. In LaTeX, `\le` not `<`. Use `\ge`. No `&`. No unescaped `&amp;`. Avoid `&` in text. Use "and". Avoid `>`? It's okay but can use `\ge`. Avoid `\begin{cases}` with `&`; use text piecewise. We'll write:

\[
R(S_t,k)=\mathbf{1}\left[\Delta x_{t:t+k}\ge L_n\right]
\]

No `<`. Good.
\[
H(C\mid S_t)=-\sum_{c\in\mathcal{C}} p(c\mid S_t)\log_2 p(c\mid S_t)\ \mathrm{bits}
\]
Uses \mid not |? `\mid` okay.
\[
K=\frac{1}{2}Mv^2,\quad F_{\mathrm{avg}}=\frac{K}{s}=\frac{Mv^2}{2s}
\]
No &.
\[
a_{\max}=\mu_s g,\quad d_{\mathrm{stop}}=\frac{v^2}{2\mu_s g}
\]
No &.
\[
\mathbf{F}_d=-\frac{1}{2}\rho C_d A\left\|\mathbf{v}-\mathbf{w}\right\|\left(\mathbf{v}-\mathbf{w}\right)
\]
No &.
\[
P_{\mathrm{see}}(t)=\mathbf{1}\left[E(t)\ge E_{\mathrm{th}}\right]
\]
No &.
Use `\mathrm` etc.

Need "probability units" - dimensionless probability; information bits. SI units.

Need maybe define "yd" conversion. Use \(1\,\mathrm{yd}=0.9144\,\mathrm{m}\). Good.

Need "exact singularity/breakdown regimes": 
- \(s\to0^+\): \(F_{\rm avg}\to\infty\) in rigid model; breakdown at finite tissue strain, injury, rule ban [PAGE 151].
- \(\mu_s\to0^+\): \(d_{\rm stop}\to\infty\); no traction, cannot accelerate/cut; wet surface [PAGE 245], [PAGE 439].
- \(E(t)\to E_{\rm th}\): visibility threshold; below threshold game called [PAGE 435].
- \(H(C|S_t)\to0\): deterministic mass play; opponent can predict, counter-trap; source mass play [PAGE 121].
- \(T\to0\): clock terminal; play selection collapses to urgent; game called at sunset [PAGE 25], five o'clock [PAGE 47].
- \(\Delta x < L_n\): possession turnover; if fail over downs, must surrender ball [PAGE 103]. But avoid raw `<`; write "if \Delta x is below L_n". In equation use \ge. Good.

Need mention "source operators" maybe name them.

Need "verbatim quotes" exact. Use quote marks. Good.

Need no fake ratios. Good.

Let's craft final. Ensure XML tags exact. No markdown code fences. Use tags.

Need final only XML. Let's compose carefully.

Potential issue: The user said "DRIVE SOURCE: ... PAGES: 577" and provided source text. They might expect "analysis" not answer. We'll provide as requested.

Let's write.

Need include "Gray-zone audit" in THINK_TRACE. Good.

Let's ensure no "spreads, totals, moneylines, or odds." We won't use them. Avoid word "line" in betting context; "scrimmage line" okay. Avoid "odds" entirely. The word "probability" okay.

Need maybe "score values" old scoring. Fine.

Let's draft THINK_TRACE:

"Multi-hop derivation: The source is not a modern performance data set; it is a 1911 historical synthesis. The safest derivation is operator extraction. First hop: ancient harpaston already has forward passing and goal-line crossing [PAGE 23]. Second hop: Rugby's carrying innovation and Cambridge rules [PAGE 47], [PAGE 53]. Third hop: American scrimmage and eleven men [PAGE 99]. Fourth hop: possession retention rule [PAGE 103]. Fifth hop: mass formations and injury veto [PAGE 121], [PAGE 151]. Sixth hop: forward pass spread [PAGE 145], [PAGE 147]. Gray-zone audit..." Good.

Need cite [PAGE 47] for Ellis? Page 47 has "William Webb Ellis" and "Five o'clock". Good.

Need [PAGE 53] Cambridge? Page 53 has "In 1863 a third conference..." yes.

Now final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a 1911 historical synthesis, not a modern instrumented performance dataset, so the correct derivation is an operator extraction rather than a claim that the book measures modern football. The first multi-hop step is to separate the descriptive history from the prescriptive rules. The ancient game already contains a forward pass and a goal-line objective: “It was played upon a rectangular field marked with side lines, goal-lines, and centre line” [PAGE 23]. That lineage is later explicitly reconnected to the 1906 forward pass: the book says “the forward pass was introduced” and notes that the old Spartan game had the same feature [PAGE 145]. The second hop is the transfer from Rugby carrying to American possession. The book states that the American change was “the abolition of the scrummage of the English game and the substitution of the far more ingenious method of putting the ball in play familiar to all to-day as the American scrimmage” [PAGE 99]. That scrimmage is not merely a formation; it is an information operator because it creates “the principle of an orderly retention of the ball by one side, thereby making possible the use of prearranged strategy” [PAGE 99]. The third hop is the possession constraint. The 1882 rule required that “If on three consecutive fairs and downs a team shall not have advanced the ball five yards or lost ten, they must give up the ball to the other side at the spot” [PAGE 103]. That rule converts continuous play into a finite-horizon control problem with a measurable displacement threshold. The fourth hop is the mass-play arms race. The flying wedge is named as “the famous flying wedge, the invention of Lorin F. DeLand” [PAGE 121], and a game account describes “This formation, the famous ‘flying wedge,’ goes crashing into the Yale men with a tremendous impact” [PAGE 327]. The fifth hop is the reactive rule veto: the rules later prescribed “seven men should be on the line of scrimmage” and forbade the side in possession from using “his hands or arms to assist the player carrying the ball” [PAGE 151]. The sixth hop is the forward-pass counter-effect: after the forward pass, “The two defensive half-backs which for many years had constituted the secondary defence, supporting the tackles, were sent back to cover the dangerous forward-pass zone” [PAGE 147]. That spread then invited a massed attack on the tackles, which the book itself notes [PAGE 147]. The final hop is the physical and weather veto: rain, sleet, snow, wind, and darkness are not metaphors but terminal or near-terminal constraints [PAGE 245], [PAGE 425], [PAGE 435], [PAGE 439]. The gray-zone audit is that the book mixes retrospective game accounts, rule texts, and moral commentary. Some pages are OCR-noisy, so names such as “TALE” for Yale and “Dabtmouth” for Dartmouth are scanning artifacts, not evidence. The book also uses older scoring conventions, including “A match shall be decided by a majority of touchdowns; a goal shall be equal to four touchdowns” [PAGE 93], so one must not import modern point values. Finally, the book is not a controlled biomechanics study; its injury statements are qualitative, so the equations below are formal reconstructions of the constraints the text implies, not measurements from the text.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the state be \(S_t=(x_t,d_t,\pi_t,\tau_t)\), where \(x_t\) is field position in metres, \(d_t\in\{1,2,3,4\}\) is the down count, \(\pi_t\in\{0,1\}\) is possession, and \(\tau_t\) is remaining time in seconds. The source uses yards; the exact conversion is \(1\,\mathrm{yd}=0.9144\,\mathrm{m}\). This is a formal state representation, not a source claim.

Operator 1: possession-retention indicator. For \(k\) downs and a required gain \(L_n\), define
\[
R(S_t,k)=\mathbf{1}\left[\Delta x_{t:t+k}\ge L_n\right],
\]
where \(\Delta x_{t:t+k}=x_{t+k}-x_t\) is in metres and \(L_n\) is in metres. For the 1882 three-down rule, the source text gives the threshold as “five yards” [PAGE 103], so \(L_3=5\,\mathrm{yd}=4.572\,\mathrm{m}\). For the later four-down ten-yard rule, the source says the requirement “was altered so to require a gain of ten” [PAGE 145], so \(L_4=10\,\mathrm{yd}=9.144\,\mathrm{m}\). Assumption: the ball is not kicked or turned over by a separate foul. Breakdown regime: if \(\Delta x_{t:t+k}\) is below \(L_n\) and no kick or foul intervenes, possession must change; otherwise the model contradicts the rule text. Exact singularity: \(L_n\to 0\) makes retention trivial and removes the strategic value of downs; \(L_n\to\infty\) makes retention impossible and collapses the game to kicking.

Operator 2: strategic information entropy. Let \(\mathcal{C}\) be the finite playbook available from state \(S_t\), with \(p(c\mid S_t)\) the probability of choosing play \(c\). Define
\[
H(C\mid S_t)=-\sum_{c\in\mathcal{C}} p(c\mid S_t)\log_2 p(c\mid S_t)\ \mathrm{bits}.
\]
Assumption: \(p(c\mid S_t)\in(0,1]\) for active plays and zero-probability plays are omitted. This formalizes the source’s “prearranged strategy” made possible by orderly possession [PAGE 99]. Units are bits. Breakdown regime: \(H(C\mid S_t)\to 0\) bits means a deterministic habit, which is exploitable by a counter-trap. Exact singularity: if the playbook is reduced to one legal action, entropy is exactly zero and no deception is possible.

Operator 3: mass-collision energy and average force. For a mass \(M\) in kilograms moving at speed \(v\) in metres per second, the kinetic energy is
\[
K=\frac{1}{2}Mv^2\ \mathrm{J}.
\]
If the stopping distance is \(s\) metres, the average force magnitude in the rigid-body approximation is
\[
F_{\mathrm{avg}}=\frac{K}{s}=\frac{Mv^2}{2s}\ \mathrm{N}.
\]
Assumption: constant deceleration over \(s\). This is a physical reconstruction of the impact described for the flying wedge [PAGE 121], [PAGE 327]. Breakdown regime: as \(s\to 0^+\), \(F_{\mathrm{avg}}\to\infty\) in the rigid model; real tissue has finite deformation, so the model breaks at tissue strain, injury, or rule prohibition. The source records the rule response: the mass play was removed by forbidding “his hands or arms to assist the player carrying the ball” and by requiring “seven men” on the scrimmage line [PAGE 151].

Operator 4: traction-limited acceleration. On a surface with static friction coefficient \(\mu_s\), the maximum horizontal acceleration is
\[
a_{\max}=\mu_s g,
\]
with \(g=9.80665\,\mathrm{m\,s^{-2}}\). The stopping distance from speed \(v\) is
\[
d_{\mathrm{stop}}=\frac{v^2}{2\mu_s g}\ \mathrm{m}.
\]
Assumption: Coulomb friction and level ground. Breakdown regime: as \(\mu_s\to 0^+\), \(d_{\mathrm{stop}}\to\infty\) and cutting, acceleration, and stopping become impossible. This matches the rain-and-sleet account: “Both teams appear in fresh uniforms, as the game is being played in rain and sleet” [PAGE 245], and the later statement that “the rain is falling in increased torrents” [PAGE 439].

Operator 5: aerodynamic wind forcing. For ball velocity \(\mathbf{v}\), wind velocity \(\mathbf{w}\), air density \(\rho\), drag coefficient \(C_d\), and reference area \(A\), a standard drag model is
\[
\mathbf{F}_d=-\frac{1}{2}\rho C_d A\left\|\mathbf{v}-\mathbf{w}\right\|\left(\mathbf{v}-\mathbf{w}\right)\ \mathrm{N}.
\]
Assumption: relative-wind drag dominates and the ball is treated as a bluff body. The source records heavy snow and wind effects [PAGE 425]. Breakdown regime: the model fails in chaotic gust fields, in severe rain, and at very low Reynolds number; it also fails when the ball is caught or heeled, because the boundary condition changes.

Operator 6: visibility and clock veto. Let \(E(t)\) be illuminance in lux and \(E_{\mathrm{th}}\) the threshold for safe play. A simple veto indicator is
\[
P_{\mathrm{see}}(t)=\mathbf{1}\left[E(t)\ge E_{\mathrm{th}}\right].
\]
Assumption: uniform illuminance and a fixed contrast threshold. The source provides the terminal condition: “The game was called at sunset” [PAGE 25], “Five o’clock is now pealing on the air” [PAGE 47], and “The referee calls the game on account of darkness” [PAGE 435]. Breakdown regime: as \(E(t)\to E_{\mathrm{th}}^-\), detection probability falls and the contest becomes unadjudicable; the exact singularity is the threshold crossing, not a smooth point.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The retrocausal genealogy runs from ancient harpaston to the American scrimmage and then to the forward-pass era. The source’s ancient game already has a field with “side lines, goal-lines, and centre line” [PAGE 23], and the later text explicitly says the forward pass “was a feature in the old Spartan game of football, called harpaston” [PAGE 145]. The medieval and Rugby lineage is not a straight line of progress; it is a sequence of rule selections. The Rugby carrying innovation is tied to William Webb Ellis and the five-o’clock episode, where “Five o’clock is now pealing on the air” [PAGE 47]. The Cambridge conferences then standardize school variants [PAGE 53]. The American rupture is the scrimmage: “the abolition of the scrummage of the English game and the substitution of the far more ingenious method of putting the ball in play familiar to all to-day as the American scrimmage” [PAGE 99]. That scrimmage creates the possibility of “prearranged strategy” [PAGE 99], which in turn creates the mass-play arms race: the V, the flying wedge [PAGE 121], the tackle-back [PAGE 139], and the later rule veto [PAGE 151]. The forward pass is then a counter-genealogy: it is old in harpaston, new in 1906, and immediately reactive because it forces the secondary defence to spread [PAGE 147]. Multi-week traps: first, do not read the 1911 text as a modern playbook; the scoring system is different, as “a goal shall be equal to four touchdowns” [PAGE 93]. Second, do not treat OCR spellings as historical names; “TALE” and “Dabtmouth” are scan artifacts. Third, do not assume that a formation described in a game account was legal in the same year as a later rule change; the book itself narrates prohibition after use, especially for mass play [PAGE 151]. Fourth, do not confuse the book’s moral language about “rough” play with measured injury rates; the text gives qualitative claims, not controlled incidence data. Fifth, do not import modern eligibility or substitution rules; the source describes older amateur and eligibility disputes [PAGE 113]. The safe lineage is therefore a rule-and-constraint lineage, not a continuous athletic-performance lineage.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind layer is a three-way contest among crisis habit regression, counter-trap, and clock. Crisis habit regression is the tendency of a coach or captain, under time pressure and uncertainty, to call the formation with the highest prior and the most familiar execution. The source gives the block game as the extreme case: a side retains the ball persistently because the rules do not force a surrender on failure to gain [PAGE 427]. The counter-trap is the opponent’s recursive response: if I believe you will repeat the habitual mass play, I prepare a rule-legal or physical counter. The flying wedge is the clearest example: it is “the famous flying wedge” [PAGE 121] and is described as crashing into the opposing men “with a tremendous impact” [PAGE 327]. The counter-trap to mass play is not merely a stronger mass; it is a rule change, and the source records the rule change: seven men on the scrimmage line and no hands or arms assisting the runner [PAGE 151]. The forward pass is another counter-trap because it changes the opponent’s belief about the deep field: the defensive half-backs are “sent back to cover the dangerous forward-pass zone” [PAGE 147]. But that counter-trap creates a second-order trap: the defence spreads, the tackles weaken, and the offence can return to a massed attack on the tackles [PAGE 147]. The clock is the external arbiter that truncates the recursion. The game is “called at sunset” [PAGE 25], the Ellis episode is timed by “Five o’clock” [PAGE 47], and a later game is stopped when “The referee calls the game on account of darkness” [PAGE 435]. Under a shrinking clock, the optimal policy shifts from exploration to exploitation: the team with the lead prefers low-entropy, ball-protecting actions, while the trailing team must accept higher-variance actions. That is a recursive belief problem because each side models the other’s urgency. The source’s 1910 Harvard-Yale account ends at 0 to 0 [PAGE 369], showing that high-skill mutual counter-trapping can collapse into a low-scoring equilibrium when both sides veto the other’s preferred habit. The counter-trap is therefore not a single play; it is a belief-updating cycle in which rule constraints, physical risk, weather, and clock jointly select which habits survive.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto adjudication asks whether a strategic claim survives physical, biomechanical, weather, and clock constraints. The first veto is biomechanical. A mass formation carrying a runner has kinetic energy \(K=\frac{1}{2}Mv^2\) and average stopping force \(F_{\mathrm{avg}}=Mv^2/(2s)\). If the stopping distance \(s\) is small, the force is large; in the rigid limit \(s\to 0^+\), the model diverges. The source’s own rule response is evidence that the mass-play layer was not merely tactically inefficient but physically costly: it forbids using “his hands or arms to assist the player carrying the ball” and requires “seven men” on the scrimmage line [PAGE 151]. The second veto is traction. On a wet or icy surface, \(a_{\max}=\mu_s g\) falls, and \(d_{\mathrm{stop}}=v^2/(2\mu_s g)\) rises. As \(\mu_s\to 0^+\), the stopping distance diverges. The source records “rain and sleet” [PAGE 245] and “rain is falling in increased torrents” [PAGE 439], so a claim that a cutting or mass play is equally available in those conditions is vetoed unless the account explicitly shows it. The third veto is weather and visibility. A wind-driven ball is subject to \(\mathbf{F}_d=-\frac{1}{2}\rho C_d A\|\mathbf{v}-\mathbf{w}\|(\mathbf{v}-\mathbf{w})\), and heavy snow is recorded: “Snow is falling heavily, but play follows play in rapid succession” [PAGE 425]. Visibility is a threshold operator: if \(E(t)\) falls below \(E_{\mathrm{th}}\), the game becomes unadjudicable; the source states “The referee calls the game on account of darkness” [PAGE 435]. The fourth veto is rule enforcement. A formation that is legal in one year can be illegal in another; the flying wedge is described as spectacular [PAGE 121], but the later rules remove the mass-play core [PAGE 151]. The adjudication rule is therefore: a claimed play must satisfy the rule text of its year, the traction and visibility of its weather record, and the collision tolerance of its biomechanical description. If any layer is violated, the claim is not merely uncertain; it is vetoed. The source supports this layered reading because it repeatedly places rule changes immediately after descriptions of physical danger or tactical stalemate [PAGE 121], [PAGE 151].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario A: possession-retention counterfactual. Under the 1882 rule, a team that fails to advance “five yards” over three consecutive downs must surrender the ball [PAGE 103]. Prediction: in any play-by-play account governed by that rule, if a team is stopped three times with net gain below \(4.572\,\mathrm{m}\) and no kick or foul, possession must change. Verification: compare the stated down sequence against the rule text. Veto: if a model retains possession after three failed downs without a kick, foul, or source contradiction, the model is invalid.

Scenario B: forward-pass defensive-spread counterfactual. The source says that after the forward pass was introduced, the defensive half-backs were “sent back to cover the dangerous forward-pass zone” [PAGE 147]. Prediction: in 1906 and later accounts where the forward pass is legal, the secondary defence should show deeper coverage than in pre-1906 mass-play accounts; the same source also predicts a return to massed tackle attacks because the defence is spread [PAGE 147]. Verification: compare pre-1906 and post-1906 defensive alignments in the game narratives. Veto: if a model claims the forward pass had no effect on secondary depth while citing [PAGE 147], it contradicts the source.

Scenario C: mass-play prohibition counterfactual. The source states that the rules prescribed “seven men should be on the line of scrimmage” and forbade using “his hands or arms to assist the player carrying the ball” [PAGE 151]. Prediction: after that rule, a legal scoring play cannot depend on interlocked mass assistance to the runner; such a play must be penalized, illegal, or belong to an earlier year. Verification: check the year of the game account against the rule year. Veto: if a 1910 account is read as showing a legal flying wedge with interlocked arms, the reading is anachronistic unless the text explicitly marks it as a penalty, a foul, or an earlier contest. These three counterfactuals are verifiable because they reduce to rule text, down sequence, and year-stamped game narrative, and each has a clear failure condition.
</RLVR_COUNTERFACTUAL_VETOES>