---
source: "2014 - Win at Home and Draw Away Automatic Formation Analysis Highlighting the Differences in Home and Away Team Behaviors - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2014"
pages: 7
model: baidu/ernie-5.5-flash-preview:free
words: 10274
---

<NATIVE_REASONING>
We need answer user's request. Need produce >=1000-word depth with exact XML sections. Need follow strict invariants: no betting lines. No toy equations; formal LaTeX, units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need likely discuss the paper. Need include equations for EM formation detection? Need infer formalization. Need deep multi-hop derivation. Need gray-zone audit. Need retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes. User says DRIVE SOURCE and pages. We need likely answer as frontier reasoning foundry. Need ensure zero betting lines: avoid odds, spreads, moneylines. Even if source mentions win/draw, that's not betting lines? We can mention outcomes but no betting odds. Avoid words like betting? It says never mention spreads, totals, moneylines, or odds. We can mention win/draw as result not odds? Safer avoid betting context. Could say match outcome. Need >=1000 words across exact XML sections. Need cite exact [PAGE N] and verbatim quotes. Need likely quote short snippets? Verbatim quotes maybe need exact. Need not too long? We can quote phrases. Need ensure XML sections exactly? User specified sections: <THINK_TRACE>...</THINK_TRACE> etc. Need include all. Could include no other outside? likely only these. Need at least 1000 words total. Need deep. Let's analyze content.

Source paper: 2014 MIT Sloan Research Paper Competition "Win at Home and Draw Away": Automatic Formation Analysis Highlighting Differences in Home and Away Team Behaviors. Authors Bialkowski et al. Disney Research. Abstract: formations and manner. Prozone season top-tier league. Home advantage. Same formation but position higher at home. Away conservative. First automatic formation detection.

Pages:
Page1: intro, tactical history, home advantage references. Page2: Figure 1, question. Each game > million data points (22 players at 10 fps). EM method. Section 2 re-explore home advantage. Previous Opta EPL ball tracking. Prozone season.
Page3: table: Points 1.61 vs 1.10 p<0.001, Goals 1.57 vs 1.21, shots on target 6.48 vs 5.21, not on target 8.94 vs 6.97, shooting accuracy 41.7 vs 42.4 p .5046, passes 451 vs 436 p .1483, occupancy final third 14.1 vs 11.8 p<.001, team x-centroid -1.79 m vs -4.90 m p<.001, team y-centroid .064 vs -.047 p .4397. Dataset 20 teams home/away, players 10 fps and ball events. Team IDs A-T. Section3: formation roles; normalized translation removed centroid goalkeeper excluded; characterized by mean and covariances of role positions about centroid. Dynamic swapping. EM with Hungarian.
Page4: Figure 4; static ordering overlap; dynamic ordering. EM: assign initial roles based on mean positions. Use Hungarian to update role each frame, calculate error previous and updated, iterate convergence.
Page5: Figure 5 mean formations home red away blue normalized attack left-to-right. Most same formation slight variation. 4-4-2 dominant; teams B and T variation; A,F,P,R minor midfield; team T back three consistent. Section 4 Formation style. Page5 Figure 6 zoomed area. Figure7 mean position when in possession and opponent possession, red home blue away ellipses.
Page6: centroid behavior in possession and opponent possession, disregarding stoppage around 50%. Nearly all teams more forward home than away both attack and defend. Explains possession final third. Defending higher regains possession higher. Downside space behind, counter attack. Home expend less energy. Figure 8 distance ran home vs away: away covered more overall; home run more in attack exploiting area, away more in defense. Section5 match summarization sliding 5-min window, Figure9. Page7 summary and future.

Need construct formal equations. We can derive formation representation:
Let pitch coordinates x in [-52.5,52.5]? Standard soccer pitch length 105 m, width 68. In paper team x-centroid negative? Attack left-to-right? Need choose coordinate: x along length, maybe origin center, positive attacking direction? Table x-centroid home -1.79, away -4.90. If attacking left-to-right, positive x maybe forward? But home less negative = more advanced. Need state assumption. Use SI units meters. y across width. For team j at frame t, outfield players i=1..10 (GK excluded for centroid? Page3 says normalized for translation removed centroid of position of formation so centered on halfway line - goal-keeper excluded. But tracking includes GK? roles includes GK. Need formal:
p_{j,i,t} = (x_{j,i,t}, y_{j,i,t}) ∈ R^2. Let R_j set of k=11 roles. For each frame t, translation normalized subtract centroid c_{j,t} = (1/10) sum_{i=1}^{10} p_{j,i,t} (outfield). Then normalized q = p-c. Role assignment a_{t}: players -> roles. EM latent role labels z_{i,t}. Gaussian role means μ_r and covariance Σ_r. Objective: maximize likelihood or minimize assignment cost. Hungarian solves assignment: min_{π∈S} Σ_i ||q_{i,t} - μ_{π(i)}||^2_{Σ?}. Could use Mahalanobis. EM update responsibilities. Since hard assignments via Hungarian. Need exact breakdown: singular covariance when role cluster collinear or insufficient frames, Hungarian non-identifiability when equal cost, convergence failure due to role swaps. Need include units: meters, frames, Hz, m/s. Data 10 fps: Δt = 0.1 s.

Home advantage metrics: occupancy final third O_f = time in final third / total in-play time. final third defined x > x_third? Need assumption. Team x-centroid average c_x = mean over frames of outfield centroid. Higher (less negative if attack direction positive) means advanced. P-values. Need formal hypothesis: H0: μ_home = μ_away for each metric; test statistic maybe paired/unpaired? Paper uses p-values. Could state p-value as probability under null. Need no toy equation. Need maybe define effect size. But need not invent data.

EM derivation:
Complete-data log-likelihood: L(μ,Σ,Z)=Σ_t Σ_i log N(q_{i,t}; μ_{z_{i,t}}, Σ_{z_{z,t}}) + constraints one-to-one assignment. E-step: compute costs C_{i,r,t}= (q_{i,t}-μ_r)^T Σ_r^{-1}(q_{i,t}-μ_r) + log|Σ_r|. But assignment one-to-one: solve π_t^* = argmin_{π} Σ_i C_{i,π(i),t}. M-step: μ_r = average of assigned q; Σ_r = covariance. Iterate until assignment changes less than threshold or log-likelihood improvement < ε. Need mention Hungarian complexity O(n^3) for n=11? For each frame maybe n=11 or 10. If including GK, n=11; centroid excludes GK but role assignment includes. Complexity per frame O(R^3) = O(11^3) ~ 1331, season million frames? >1 million per game, 380? 20 teams? Need estimate. Page2 says each game > million data points (22 players at 10 fps). Actually 90 min =5400s*10=54000 frames*22=1.188 million. For season 380 matches? 20 teams double round robin 380 matches? Could mention. Computation: 54k frames/match * O(10^3) operations. But careful not overstate. Need breakdown regimes: if frames T insufficient relative to roles, covariance singular. If role distribution symmetric causing permutation ambiguity, label switching; if team uses unmodeled role (e.g. back three), fixed number of roles may misassign; if player substitution, identity vs role noise. Need include.

Retro-causal genealogy: historical line from Wilson Inverting Pyramid, formations evolution, Catenaccio, Total Football, Tiki-Taka, Lobanovskyi. Also home advantage literature: Scorecasting referee effects, The Numbers Game debunk corners. Source's previous paper Lucey et al. KDD 2013 assessing strategy using spatiotemporal data. Method lineage: Hungarian algorithm 1955, EM, CVPR 2013 adversarial team behaviors, player roles. Need multi-week traps: could be pitfalls in building pipeline: using absolute positions vs relative, ignoring role swaps, including goalkeeper in centroid, not normalizing attack direction, mixing stoppages, small sample. Need maybe "multi-week traps" as temporal data pitfalls: season-level aggregation, red/blue attack normalization, sliding windows, in-possession vs out-of-possession. Need keep within section.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need interpret: under crisis (late game) teams may regress to habit (away deep, home press) but counter-trap: coaches adapt, opponent exposes space, clock. Need formal: policy π_t = f(state, score, time). If crisis triggers home high press, but fatigue and space behind may cause counter. Need use paper: home higher when in and out possession, away deeper, away run more. Could discuss belief hierarchy: coach believes opponent will sit deep; opponent believes home will push; second-order: away invites pressure to counter. Clock: 5-min sliding window; late game maybe time effects. Need not invent data but can propose predictions. Need cite [PAGE 6] etc.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need show no veto? Or possible veto if high pressing increases energy but data says away run more overall, home less energy? Wait paper says home team expend less energy due to advanced positions? It says home team will expend less energy. Figure8 away teams covered more distance overall. Need physical proof: high block reduces distance? But pressing high may require more sprints? The paper says away cover more, especially defense. We can derive distance integral D = ∫ ||v_{j,i}(t)|| dt. Home higher centroid but lower distance indicates positioning reduces total travel; however high press can increase high-speed running. Weather: if heat/wet, high press may fail. Need veto proof: If ambient wet-bulb temperature exceeds threshold causing heat strain, high pressing cannot be sustained; but source does not provide weather. So as cross-layer veto, no veto from provided data because no weather/biomechanical measurements. But need "proof" maybe formal condition for veto: If home advantage disappears under high temperature or high wind, or if distance/energy contradicts. But source has distance data. Need mention no weather variables; cannot adjudicate fully. Could present conditional veto: Physical veto would require that high home centroid is infeasible given sprint distance; however [PAGE 6] states home less energy and away more distance, so no physical veto in dataset. Weather veto absent. Need exact quote. 

RLVR counterfactual vetoes: Need 3 verifiable RLVR veto scenarios + predictions. RLVR? Reinforcement learning from verifiable rewards? Or perhaps RLVR as reward learning? Need define. Need produce three scenarios where counterfactual would veto thesis. Must be verifiable with data. Example:
1. If formations actually differ at home (e.g., extra striker) then explanation "same formation executed differently" vetoed. Prediction: role assignment would show different number of strikers; source says most same [PAGE 5]. Need verify by counting roles.
2. If home centroid advancement disappears when controlling for possession or score, then global trend not style. Need predict regression: home-centroid difference after controlling occupancy and match state becomes non-significant. Source does not provide controlled regression. Could be counterfactual.
3. If away teams cover less distance or equal and home not less, energy explanation vetoed; but source says away covered more [PAGE 6]. Need maybe test.
Or if sliding-window formation shows teams change formation systematically home/away, veto. Or if in opponent possession home not more forward, veto. Need three verifiable. Need predictions: what data would confirm/refute. Need avoid betting.

Need >=1000 words. We can write ~2500 words. Need ensure XML sections. Could include LaTeX equations. Need no fake ratio. Formal equations okay. Need cite page markers. Need verbatim quotes. Need perhaps include exact quotes like "the position of the formation of teams at home is significantly higher up the field" [PAGE 1], "most of the teams tend to play the same formation" [PAGE 5], "nearly all teams are more forward at home than they are away" [PAGE 6], "away teams (blue-line) covered more distance than the home team (red-line)" [PAGE 6], "we disregarded the times when the ball was out for a stoppage, which is amazingly around 50% of the time" [PAGE 6]. Need exact from source. Need be careful with quote: source page 1 abstract: "the position of the formation of teams at home is significantly higher up the field compared to when they play away." Page 5: "most of the teams tend to play the same formation with only a slight variation occurring in some of the positions." Page6: "nearly all teams are more forward at home than they are away, both when they attack and when they defend." "the away teams (blue-line) covered more distance than the home team (red-line)." "the home team will expend less energy." Good.

Need ensure no betting words: avoid "odds", "spread", "total", "moneyline". Could mention "points" from table okay. Avoid "odds". The phrase "win at home and draw away" is title; not betting. OK. Could mention "draw" as result. Not betting lines.

Need formal LaTeX. Let's draft sections.

<THINK_TRACE> >=400 words. Deep multi-hop derivation and gray-zone audit. Need mention source, variables, derivation, assumptions, gray zones. Include equations maybe brief. Need cite pages. We'll write ~600 words.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown. Need detailed. Include definitions: coordinate frame, centroid, normalized formation, EM objective, Hungarian assignment, likelihood, update, distance, occupancy, final third, p-values. Breakdown regimes: singular covariance, permutation ambiguity, role-count mismatch, substitution, stoppage, frame aliasing, weather absent. Need exact page citations.

<RETROCAUSAL_GENEALOGY> historical/scientific lineage and multi-week traps. ~400 words. Include Wilson, Catenaccio, Total Football, Tiki-Taka, Hungarian, EM, previous paper. Multi-week traps: data pipeline weeks: anonymization, attack normalization, stoppage filtering, possession labeling, role assignment convergence. Need maybe mention "retro-causal" as how past tactics constrain current inference. 

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock. Need formal: agents model each other. Home coach high block, away counter. Use paper's findings. Predictions. Need mention sliding window and stoppage 50%. Could include game-theoretic matrix? Avoid fake ratios. Formal maybe utility U_h = σ_goal - c_energy - c_vulnerability. But not toy equation? Need formal with assumptions. Could include differential game? Need keep formal. Need no toy ratios.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Need prove no veto given source? Include conditions. Cite page 6 distance/energy. Weather absent. 

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable scenarios + predictions. Need define RLVR maybe verifiable reward? Could say each veto is a falsifiable counterfactual with measurement protocol. Need include predictions. 

Need total >=1000 words. Could be 3000. Ensure XML tags not broken. Need maybe no markdown? It's okay but final should be XML sections. Could include equations in LaTeX. Need not include XML declaration. 

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." So if we propose equations for utility, ensure formal and assumptions. Avoid ratio like Force/Fatigue. Use SI units. Use probability units for p-values. Information units for log-likelihood nats. Need specify units: coordinates m, time s, frame index dimensionless, velocity m/s, distance m, occupancy dimensionless proportion or percent, p-value probability [0,1], log-likelihood nats (natural log) or bits if log2. Need exact breakdown regimes: covariance determinant zero, assignment ties, non-identifiability, frame rate Nyquist? Could mention.

Need cite exact [PAGE N] markers. Maybe [PAGE 3] for table. Use exact quotes. Need maybe quote table values. Good.

Let's design formal equations.

Coordinate:
Let pitch frame e_x forward (attacking left-to-right after normalization), e_y lateral. Position p_{i,t} ∈ R^2 m. For team j, match m, frame t. t ∈ {1,...,T_m}, Δt=0.1 s from 10 fps [PAGE 3]. GK excluded from formation centroid [PAGE 3]. Outfield set O of 10. Centroid:
c_{j,t} = (1/10) Σ_{i∈O} p_{j,i,t}.
Normalized:
\tilde p_{j,i,t} = R_θ p_{j,i,t} - c_{j,t} (maybe after coordinate orientation). R_θ rotates attack direction. Translation removed [PAGE 3].

Formation parameters: role set r=1..R (R=11? including GK; outfield R=10? Paper roles include GK but centroid excluded. For formation maybe all 11 roles. We can state R=11 with GK handled separately, or R=10 for centroid. Need consistent. Let roles R=11; but normalized outfield for covariance exclude GK. Could define role set for outfield K=10. Paper's role example includes GK: R = {goal-keeper,...}. But normalized translation removed centroid goal-keeper excluded. For formation mean/covariance perhaps all players? Figure3? It says formation represented using mean and covariances of player positions about team centroid. It doesn't specify GK excluded for all; but translation centroid excludes GK. We'll state outfield roles K=10 for centroid and covariance; goalkeeper can be included as separate role after de-meaning or excluded. Need avoid contradiction.

Mean and covariance for role r:
μ_r = E[q_{i,t} | z_{i,t}=r], Σ_r = Cov[q | z=r], q = \tilde p. Units μ m, Σ m^2.

EM latent z_{i,t} ∈ {1,...,K}; one-to-one per frame: π_t: O→R. Complete log-likelihood (natural log):
ℓ(Θ;Z,Q) = Σ_t Σ_i [ -1/2 (q_{i,t}-μ_{z_i})^T Σ_{z_i}^{-1}(q_{i,t}-μ_{z_i}) - 1/2 log|2πΣ_{z_i}| ], units nats, plus assignment constraints. But if hard assignments, objective min cost.

E-step assignment cost:
C_{i,r,t} = (q_{i,t}-μ_r)^T Σ_r^{-1}(q_{i,t}-μ_r) + log|Σ_r| (ignoring constants). π_t^* = argmin_{π∈S_K} Σ_i C_{i,π(i),t}. Hungarian algorithm solves linear assignment [PAGE 4], complexity O(K^3) per frame [not from source but algorithm; cite Hungarian [PAGE 7 ref 9? source page4]. Could cite [PAGE 4] for Hungarian.

M-step:
μ_r^{new} = (1/N_r) Σ_t Σ_i 1{π_t^*(i)=r} q_{i,t}; Σ_r^{new} = (1/N_r) Σ_t Σ_i 1{...}(q-μ)(q-μ)^T. If using responsibilities, soft EM; but paper hard EM. Need mention convergence when assignment error e_t = |π_t^{new} Δ π_t^{old}|? Error between previous and updated assignments [PAGE 4]. Stop if Σ_t ||π_t^{new} - π_t^{old}||_0 < τ or likelihood improvement < ε. Need define.

Home metrics:
c_{x,j}^{H/A} = (1/T) Σ_t x-centroid. Table [PAGE 3]. Occupancy final third:
O_{j} = (Σ_t 1{x_{j,centroid,t} > x_{FT}} Δt)/(Σ_t 1{ball in play} Δt). Need define x_FT = 35.0 m if pitch 105 m? final third begins at +35 m from center if attack positive. But paper not explicit. We can state assumption: standard 105 m pitch, final third x > +35 m; if coordinate centered. Units dimensionless proportion; source reports 14.1% vs 11.8% [PAGE 3]. If team centroid x coordinate with attack left-to-right, home -1.79 vs away -4.90 indicates home less negative/more advanced [PAGE 3]. Need if coordinate negative? The table says team x-centroid -1.79 m home, -4.90 m away. If attack left-to-right maybe positive? But home -1.79 closer to zero than -4.90, so more advanced toward center/opponent if negative is defensive? Need state sign convention: in source, attacking left-to-right and home mean position more forward; thus larger (less negative) x denotes forward. Could define x positive toward opponent goal after normalization? But table negative means team centroid behind halfway line on average. Maybe coordinate origin at team's own half? Hmm. We can just use relative: x_home > x_away with difference 3.11 m. If positive direction is attack, difference = 3.11 m forward. Source says home teams more advanced [PAGE 3]. We'll state orientation chosen so larger x is more advanced; numeric values from table imply Δx = 3.11 m.

Distance:
D_{j,state} = Σ_i Σ_t ||p_{j,i,t+1}-p_{j,i,t}|| (with Δt=0.1 s); units m. Or integrate speed: D = Σ ||v|| Δt. State-specific: neutral, in possession, opponent possession [PAGE 6 Fig8]. Source says away covered more overall, home more attack, away more defense [PAGE 6].

Breakdown regimes:
- Σ_r singular if N_r ≤ 2 or collinear positions; determinant |Σ_r|=0 -> inverse undefined. Need regularize or discard.
- Hungarian tie: multiple π with equal cost -> label switching; EM may oscillate. Need deterministic tie-break or soft responsibilities.
- Role count mismatch: if home uses extra striker, fixed K=10/11 fails; source says mostly same formation [PAGE 5], but teams B/T/A/F/P/R variations. Need adaptive roles or model selection.
- Stoppages: if not removed, formation centroid biased; source removes out of play ~50% [PAGE 6].
- Frame rate: 10 fps adequate for tracking but high-speed events maybe alias; not from source. Could say breakdown if role swap duration <0.1 s.
- Coordinate rotation: incorrect attack direction flips sign, cancels home advantage.
- Multiple seasons? source one season; generalization not proven.

Need maybe include information units: log-likelihood nats. p-values probability. Entropy of role assignment? Could define assignment entropy H_t = -Σ_i log? Not necessary. But requirement says SI/information/probability units. We'll include units. Maybe include mutual information between home/away and formation? Could formalize: I(A;Y) where A home/away, Y formation centroid. Units bits if log2. But not from source. Could use to test difference. But maybe too invented. We can define as optional. Need no toy. Could say if quantifying discriminative formation features, use information gain I(C;R) in bits. But not necessary.

SOURCE_OPERATORS... need include exact page citations and quotes. We'll include quotes in text. Need maybe cite [PAGE 1] abstract: "the position of the formation of teams at home is significantly higher up the field compared to when they play away." [PAGE 1]. [PAGE 3] table values. [PAGE 4] EM. [PAGE 5] same formation. [PAGE 6] more forward and distance. [PAGE 7] summary.

RETROCAUSAL_GENEALOGY: Need mention "retro-causal" maybe lineage constrains interpretation: Wilson's historical formations show tactics evolve due to rules; Catenaccio away conservative? Total football high press? Tiki-taka possession. Source cites [PAGE 1]. Also Scorecasting home advantage referees [PAGE 1]; The Numbers Game debunk beliefs [PAGE 1]. Method lineage: Hungarian [PAGE 4], EM, previous KDD [PAGE 2] and CVPR [PAGE 4]. Multi-week traps: In building season analysis, weeks spent on data cleaning, attack normalization, role convergence, possession labeling, stoppage removal. Could mention "multi-week" explicitly: weeks to label? The source says expert human label prohibitive [PAGE 2]. Need maybe traps: (1) assuming starting lineup = formation; (2) aggregating whole match hides temporal dynamics; (3) using identity ordering causes overlap [PAGE 4]; (4) not separating in/out of possession [PAGE 5-6]; (5) ignoring 50% stoppage [PAGE 6]. Good.

RECURSIVE_THEORY_OF_MIND: Need crisis habit regression vs counter-trap vs clock. Use game theory. Let s_t = (score, time, ball location, possession). Home policy P_H(s), away P_A(s). Habit regression: under crisis (losing late at home) home increases h_t = centroid x; away may maintain low block. Counter-trap: away exploits space behind high line; home may drop. Clock: as time τ→T, risk tolerance changes; stoppage ~50% affects effective clock. Source: away conservative, home higher. Need derive: If home believes away will sit deep, best response is high block to compress final third. Away believes home will commit, best response is low block + counter. Recursive ToM: coach models opponent coach modeling own coach. Crisis habit regression: late game, teams revert to rehearsed roles due to fatigue/stress; formation role assignment may show 4-1-4-1/4-2-3-1 [PAGE 6]. Counter-trap: if opponent detects high line, they target channel; veto if home high line yields high danger conceded. Clock: sliding 5-min window [PAGE 6] captures dynamic; last 5 min broadcast possession [PAGE 6]. Need maybe formal: value function V_h(s) = E[points | policy], but points outcome not betting. Could include expected points. Source table points 1.61 vs 1.10 [PAGE 3]. Use as utility? Need formal: U = points (3/1/0) [PAGE 3], energy cost c D (m), vulnerability v(space). But avoid ratio. We can write U_H(π)=E[Points] - λ D_H - γ C_H, with λ cost per meter? λ units points/m. Need specify if we introduce. But could be considered toy? If formal with assumptions, okay. But maybe avoid over-equation. However recursive ToM can be qualitative with formal state variables. Need include no fake ratio. If include λ, γ, state they are model parameters not estimated from source.

CROSS_LAYER_VETO_ADJUDICATION: Need physical/biomechanical/weather veto proof. We need "veto proof" maybe show a condition under which cross-layer veto would override stylistic conclusion. Physical: if home high line requires more high-speed running than away, but source says away more distance and home less energy [PAGE 6]. Let's formalize: D_A > D_H overall [PAGE 6]. If physical veto requires D_H > D_A plus high-speed > threshold, not met. Biomechanical: if fatigue from home pressing causes late collapse, would need GPS high-speed/sprint counts, not in source. Weather: no weather data. Could say veto not adjudicable from source; conditional veto: if wet-bulb globe temperature > safety threshold (e.g., 28°C? Need not specify exact? Could state league heat policy). But if invent threshold maybe okay? Need avoid toy? It's a physical threshold from sports science but not source. Could say without recorded weather, no weather veto can be proven; the source's tracking-only data cannot falsify heat effects. Need cite no weather in source? We can say source provides only Prozone tracking and ball events [PAGE 3], no weather variables. That's a fact.

Need maybe prove "physical veto proof": If home advancement is an artifact of coordinate normalization, cross-layer physical layer would veto? Hmm.

RLVR_COUNTERFACTUAL_VETOES: Need 3 verifiable RLVR veto scenarios + predictions. Need define RLVR: maybe "reinforcement learning from verifiable rewards"? Could say "verifiable counterfactual vetoes are tests where a predicted signal in the source's data can be checked by replaying the Prozone tracking." Need three:
1. Formation-change veto: If home/away differences are due to different formation (extra striker) rather than execution, then role-count counterfactual holds. Prediction: Count striker roles per 5-min window. Source expects no systematic home extra striker because "most of the teams tend to play the same formation" [PAGE 5]. If data show home striker count > away by ≥1 in many matches, veto style explanation.
2. Possession-controlled centroid veto: If home x-centroid remains higher after conditioning on possession and match state, style effect survives; if difference disappears, veto. Prediction: Regress c_x on home indicator, in-possession indicator, score state, team fixed effects. Source has home advantage in final-third possession [PAGE 3], so effect likely remains but must test. If β_home ≈0, veto.
3. Distance/energy veto: If home teams expend less energy and away cover more distance, energy explanation holds. If high home line requires more distance/high-speed running and causes fatigue-related decline, veto. Prediction: Compare D_H vs D_A by state and final 15 min; source already shows away total distance greater and home less energy [PAGE 6]. If D_H > D_A in final 15 or sprint count high, veto. Need maybe third about in-opponent possession: If home not more forward when opponent possesses, then home advantage not global pressing. Source says home more forward both in and opponent possession [PAGE 6]. Counterfactual: If in opponent possession centroid home <= away, veto. That might be better than distance. Need 3 distinct. Could include formation-change, possession-controlled, opponent-possession. But distance also relevant. Need "RLVR" maybe reward verification. Let's choose:
- Counterfactual A: Different formation veto (roles). 
- Counterfactual B: In/opponent possession asymmetry veto. If home forward only in possession but not out, then not global style; source says both. Prediction: separate centroids; if out-of-possession difference not significant, veto.
- Counterfactual C: Stoppage/clock confound veto. If removing stoppages eliminates home/away centroid difference, then due to stoppage context. Source already disregards stoppages ~50% [PAGE 6]. Prediction: compare with/without stoppage; if effect vanishes, veto. Or distance energy veto. Need 3 verifiable. Maybe include distance as one, stoppage as one, formation as one. But need RLVR scenarios + predictions. Let's do:
1. Formation-structure veto: home/away role distribution different. Verify by counting roles; prediction no systematic difference.
2. State-confound veto: home centroid advantage disappears after controlling for possession, score, stoppage, and opponent possession. Verify with regression; prediction remains positive.
3. Energetic/biomechanical veto: home high line causes greater high-speed running and late-game drop-off; verify with distance/sprint data; source shows away total distance more and home less energy, so no veto under source; prediction home high-speed not greater and late drop not worse. Need maybe weather? Could mention not in source.

Need final word count. Let's estimate. Each section maybe:
THINK_TRACE 650 words.
SOURCE_OPERATORS 900.
RETROCAUSAL 450.
RECURSIVE 500.
CROSS_LAYER 450.
RLVR 600. Total 3550. Fine.

Need ensure no accidental betting terms: "odds" avoid. "spread" avoid. "total" maybe "total distance" is okay? It says never mention totals? It says spreads, totals, moneylines, or odds. "total distance" might trigger? It's not betting total but word total. To be safe avoid "total" as noun? Could say "overall distance" not total. "aggregate". Avoid "totals". "points" okay. "moneylines" no. "odds" no. "spread" no. "bet" no. "betting" no. "moneyline" no.

Need exact XML. Could include LaTeX within. Need maybe escape? Not necessary. But final answer plain text with tags.

Need think about source quotes exact. Let's list exact quotes to use:
[PAGE 1]: "the position of the formation of teams at home is significantly higher up the field compared to when they play away." Good.
[PAGE 1] also "coaches aim to win their home games and draw their away games"? Page7 says. Could quote page7.
[PAGE 2]: "As each game has more than a million data points (i.e., all 22 players at 10 frames-per-second), having an expert human label formations across an entire season is prohibitive and so requires an automatic solution." Good.
[PAGE 3] table: "Occupancy in final third" values. "Team x-centroid" -1.79 m vs -4.90 m. Could quote.
[PAGE 3]: "the location of every player at 10 frames-per-second as well as the ball events." Good.
[PAGE 4]: "we first assign initial player role based on the mean positions of the players. We then use the Hungarian algorithm [9] to update the role of each player in every frame and calculate the error between the previous and updated assignments" Good.
[PAGE 5]: "most of the teams tend to play the same formation with only a slight variation occurring in some of the positions." Good.
[PAGE 6]: "nearly all teams are more forward at home than they are away, both when they attack and when they defend." Good.
[PAGE 6]: "the away teams (blue-line) covered more distance than the home team (red-line)." Good.
[PAGE 6]: "the home team will expend less energy." Good.
[PAGE 6]: "we disregarded the times when the ball was out for a stoppage, which is amazingly around 50% of the time" Good.
[PAGE 6]: "Using our formation detection approach, we can dynamically see how the match is played quickly over the half by using a sliding window of 5 minutes" Good.
[PAGE 7]: "coaches aim to win their home games and draw their away games." Good.

Need maybe quote "The most dominant formation appears to be a 4-4-2" [PAGE 5]. Could use.

Need avoid overclaim: source cannot disclose league/teams [PAGE 3]. Generalization limited.

Need maybe include "first to be developed" [PAGE 1/7]. Could mention.

Let's craft each section carefully.

THINK_TRACE: Start with claim: paper identifies home/away behavioral asymmetry not formation structure. Multi-hop: (1) prior ball tracking shows home possession forward-third [PAGE 2]; (2) tracking table confirms home x-centroid more advanced [PAGE 3]; (3) formation detection via EM separates structure from execution; (4) results show same formation, different execution [PAGE 5-6]; (5) distance supports lower home energy, away higher running [PAGE 6]. Gray zones: anonymized league, no weather, role swaps, possession definition, stoppage, EM assumptions, sign conventions, sample one season. Need include derivation. At least 400 words.

SOURCE_OPERATORS: formal. Need be detailed. Maybe split into equations.

Let's write:
Let match m, team j. Frame t. p. coordinate. Use 
\mathbf{p}_{j,i,t}=(x_{j,i,t},y_{j,i,t})\in\mathbb{R}^2\,\mathrm{m}.
Time step \Delta t=0.1 s [PAGE 3]. Outfield set O, |O|=10. Centroid:
\mathbf{c}_{j,t}=\frac{1}{10}\sum_{i\in O}\mathbf{p}_{j,i,t}. (1)
Translation normalization:
\mathbf{q}_{j,i,t}=\mathbf{R}(\theta_j)\mathbf{p}_{j,i,t}-\mathbf{R}(\theta_j)\mathbf{c}_{j,t}. (2)
Units m. θ_j aligns attack to positive x; source normalizes teams attacking left-to-right [PAGE 5].

Role latent:
z_{i,t}∈{1,...,K}; K=10 outfield roles (or 11 including GK separate). Formation parameters μ_r ∈ R^2 m, Σ_r ∈ R^{2x2} m^2.
Gaussian likelihood:
p(q|z=r)= (2π)^{-1}|Σ_r|^{-1/2} exp(-1/2(...)). log units nats.
Assignment cost:
C_{i,r,t}=... + log|Σ_r|.
π_t^*=argmin_{π∈S_K} Σ_i C_{i,π(i),t}. Hungarian. Convergence:
E^{(n)} = Σ_t d_H(π_t^{(n)}, π_t^{(n-1)}), stop when E^{(n)}≤τ or Δℓ<ε. d_H can be Hamming distance (number of players reassigned), dimensionless. Source says calculate error previous/updated [PAGE 4].

M-step equations.

Home metrics:
X_{j}^{H} = mean c_x home; X^A. Source table [PAGE 3].
ΔX = X^H-X^A = 3.11 m if larger is advanced. Need cite table: -1.79 - (-4.90)=3.11.
Occupancy:
O_{j}^{H/A} = \frac{\sum_t 1[x_{c,j,t}>x_{ft}]1[b_{j,t}=1]\Delta t}{\sum_t 1[b_{j,t}=1]\Delta t}. Dimensionless. x_ft = 35 m from center for 105m pitch (assumption). Source reports 14.1% vs 11.8% [PAGE 3].

Distance:
D_{j,s}=Σ_i Σ_t 1[state=s] ||p_{i,t+1}-p_{i,t}||. units m. States neutral, attack, defense [PAGE 6]. Source quote.

Breakdown regimes:
1. Covariance singular: |Σ_r|=0 if N_r<3 or points collinear; inverse nonexistent. Use regularization or reject.
2. Assignment degeneracy: equal costs -> Hungarian tie; label switching; need tie-break.
3. Role count misspecification: if formation changes (team T back three) fixed K fails [PAGE 5].
4. Stoppage inclusion: if stoppages not removed, centroid and occupancy biased; source removes ~50% [PAGE 6].
5. Frame aliasing: if role swaps faster than 0.1s, misassigned; data at 10 fps [PAGE 3].
6. Sign/rotation error: flipping x sign can make home appear deeper; attack normalization required [PAGE 5].
7. Statistical breakdown: p-values assume independent matches? Season repeated measures; if clustering ignored, p-values optimistic. Need mention.

Need ensure not too long? Fine.

RETROCAUSAL_GENEALOGY: Need maybe 400 words. Include historical tactics and scientific lineage. Multi-week traps. Could say "retro-causal genealogy" means current inference is constrained by prior artifacts. Use [PAGE 1] quote about Wilson, Catenaccio, Total Football, Tiki-Taka. Then home advantage [PAGE 1] Scorecasting, The Numbers Game. Method: Hungarian 1955 [PAGE 7 ref9], EM, CVPR 2013 [PAGE 4], previous KDD [PAGE 2]. Multi-week traps: data anonymization, attack normalization, possession labels, stoppage, role swaps. Need maybe mention "weeks" not source? It's okay as reasoning. Could phrase "a multi-week audit would..." Not claim source.

RECURSIVE_THEORY_OF_MIND: Need maybe formal. Let's write:
Define match state s_t = (τ, y, x_b, u_t, score). τ effective clock after stoppage; y score differential; u possession. Home policy π_H maps s to formation offset h_t = E[x_c | home, s]. Away π_A. Habit regression: under crisis (τ→end, score unfavorable), policy reverts to trained default h_H^0, h_A^0. Counter-trap: away sets h_A low to induce home high line; if home detects, adjusts. Recursive beliefs: B_H(π_A), B_A(π_H). Equilibrium h* solves h_H = argmax U_H(h; B_H(h_A)), h_A = argmax U_A(h; B_A(h_H)). Source supports: home higher both in/out possession [PAGE 6], away deeper and more defensive running [PAGE 6]. Crisis regression could mean home continues high press despite counter space; counter-trap exploits; clock with sliding window reveals shifts [PAGE 6]. Need mention stoppages effective clock ~50% out of play [PAGE 6]. Predictions: late neutral windows show away even deeper if leading; if home trails, high line may persist; if counter goal probability rises, home drops. Avoid betting. Need not mention odds.

CROSS_LAYER_VETO_ADJUDICATION: Need formal proof. Maybe define layers: physical (coordinates/distance), biomechanical (load/fatigue), environmental (weather). Veto if layer predicts opposite sign or infeasibility. Physical veto proof: If home centroid higher but distance greater and speed above capacity, veto. Source data: away covered more distance, home less energy [PAGE 6]. Therefore no physical/biomechanical veto from source; instead physical layer corroborates lower home energy. But high press can have high-speed running; source not provide sprint. Biomechanical veto conditional: if home high-speed distance > away in final 15 and leads to performance decline, then veto. Weather veto: no weather variables in source; cannot prove. If weather data show extreme heat/wind and home advantage disappears, veto. Need exact proof structure:
Let H effect E_H = X^H - X^A >0. Physical veto V_phys occurs if E_H>0 and D_H>D_A + δ_D or high-speed > threshold causing capacity violation. Source gives D_A>D_H overall [PAGE 6], so V_phys false in source. Biomechanical veto V_bio if fatigue index F_H > F_A in late windows; no direct measure, but distance suggests not. Weather V_wx requires W covariate; absent. Therefore cross-layer adjudication: no veto from available layers; only possible future veto if new data contradict distance or reveal extreme conditions. Need mention standard pitch 105x68? Could include. Need maybe quote "the home team will expend less energy" [PAGE 6].

RLVR_COUNTERFACTUAL_VETOES: Need define. Maybe "verifiable counterfactual vetoes (RLVR) are reward checks on the paper's central claim." Need three with prediction and verification protocol.
1. Formation-structure veto. Claim: same formation. Veto if role histogram differs. Prediction: home/away striker/midfielder counts not systematically different; only minor variations [PAGE 5]. Verify by per-match role counts, mixed-effects logistic. If home extra striker >0 in majority, veto.
2. Possession-state veto. Claim: home higher both in and out of possession. Veto if out-of-possession centroid difference zero. Prediction: both states show positive Δx; if only in-possession positive, veto. Verify by separate EM centroids conditioned on possession; source quote.
3. Stoppage/clock/distance-energy veto. Claim: home less energy, away more distance; style not due to stoppages. Veto if removing stoppages changes effect or home high-speed/fatigue worse. Prediction: stoppage removal preserves effect; away distance greater; home not fatigued. Verify with filtered frames, distance by state and last 15 min. Source quotes.

Need maybe include "RLVR" as "reinforcement learning with verifiable reward"? Could say "For an RLVR-style evaluator, reward is not market language; it is a verifiable data predicate." Avoid betting. Need no odds.

Need final word count. Let's draft fully. Need ensure >=1000. We can count roughly. But likely >2500. Need maybe no bullet lists? XML can contain paragraphs and equations. Fine.

Potential issue: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." If I write "overall distance" okay. Avoid "total". In equations, use "D_{j,s}" not total. Avoid "totals". In source quote "amount of distance" okay. Avoid "moneyline". Good.

Need maybe mention "points" table but not betting. Fine.

Need ensure no fake equations. The EM equations are standard. The utility in recursive maybe optional. If include, specify parameters. Maybe avoid utility equation to be safe? But formal ToM can be state and policies without utility. But requirement wants formal LaTeX in source operators. We have enough.

Need maybe include "SI/information/probability units" in source operators. We have m, s, nats, probability. Good.

Need exact page citations. Use [PAGE N] throughout.

Let's write final with tags. Need no extra commentary. Ensure XML tags exactly. Could include line breaks. Need maybe escape < in LaTeX? e.g. x > x_ft in XML text might be interpreted? It's plain text, okay but if strict XML maybe > okay in text. < in inequalities could be problematic if parser? We can use &gt; or avoid. Use words or LaTeX with 	extgreaterthan? In XML, unescaped < is bad. Since sections are XML-like, better avoid raw <. Use LaTeX \gt? But still has >? Actually > is allowed in XML content? Only < and & need escaping. > okay but often okay. We can use \geq? No <. For final third, use x_{c,j,t} 	ext{ exceeds } x_{ft}. Avoid <. In text, use "greater than". For p-value <0.001, source has <; if quoting exact, need include. XML might not like <. Could escape as &lt;0.001. But verbatim quote? If exact quote includes <, maybe use &lt; in XML? The requirement says verbatim quotes; if we escape, not verbatim? Maybe plain text not parsed. To be safe, avoid quoting p-value with <? We can quote table without p-value. But source has p<0.001. Could write "p-value reported below 0.001" not quote. If quote exact "p-value <0.001" maybe use "p-value &lt;0.001" but not verbatim. Maybe not include that quote. Use quotes without <. Good.

Need exact quote: "the position of the formation of teams at home is significantly higher up the field compared to when they play away." No <. Good.
"nearly all teams are more forward at home than they are away, both when they attack and when they defend." Good.
"the away teams (blue-line) covered more distance than the home team (red-line)." Good.
"we disregarded the times when the ball was out for a stoppage, which is amazingly around 50% of the time" Good.
"most of the teams tend to play the same formation with only a slight variation occurring in some of the positions." Good.
"the home team will expend less energy." Good.
"coaches aim to win their home games and draw their away games." Good.

Need avoid "total". In quote "whole season"? okay.

Need maybe include "draw" not betting. Fine.

Let's compose final. Ensure sections. Need word count. Let's start.

Potential issue: The user requested ">= 1,000-WORD DEPTH across these exact XML sections". Need each section? Maybe total. We'll make long. Need maybe no markdown headings outside. Good.

Let's draft final now.
</NATIVE_REASONING>

<THINK_TRACE>
The central inferential chain in the source is not merely “home teams perform better”; it is a separation of two competing explanations for home advantage: structural formation choice versus behavioral execution of the same structure. The authors first establish that a prior ball-tracking analysis found home teams with greater forward-third possession, more shots, and more goals despite similar shooting proficiency [PAGE 1]. In the present Prozone season, they replicate the pattern with player tracking: home teams have higher points, goals, shots, final-third occupancy, and a more advanced mean x-centroid, while shooting accuracy and pass volume are not materially different [PAGE 3]. The critical next hop is methodological: because formations are dynamic and players swap roles, a static identity ordering fails; the authors therefore infer role assignments frame-by-frame using an Expectation-Maximization loop coupled to the Hungarian assignment algorithm [PAGE 4]. This allows them to ask whether the home/away difference is caused by a different formation, such as one striker versus two, or by the same formation being executed at a different vertical position [PAGE 2]. The answer given by the paper is the latter: “most of the teams tend to play the same formation with only a slight variation occurring in some of the positions” [PAGE 5], but “nearly all teams are more forward at home than they are away, both when they attack and when they defend” [PAGE 6]. The final empirical bridge is energetic: away teams cover more distance, especially defensively, while the authors state that “the home team will expend less energy” [PAGE 6].

A rigorous derivation must treat the formation not as a literal list of jersey positions but as a latent spatial distribution. Let each tracked outfield player have a position in meters at frame t, with the league data sampled at 10 frames per second [PAGE 3]. The team centroid is the mean outfield position after removing translation, as specified in the method: the formation is normalized by subtracting the centroid, with goalkeeper excluded for that centroid calculation [PAGE 3]. This is crucial because a formation is a relative arrangement, not an absolute coordinate cluster. If the team centroid is shifted upward the field while the relative geometry remains stable, the paper interprets that as a higher defensive line, more advanced midfield block, or more aggressive pressing structure. The reported team x-centroid values, -1.79 m for home and -4.90 m for away, imply a home advantage of 3.11 m toward the attacking direction under the paper’s sign convention [PAGE 3]. That is not a huge raw displacement, but because it is averaged across an entire season and accompanied by large changes in final-third occupancy, from 14.1% to 11.8%, it is probabilistically strong in the paper’s table [PAGE 3].

The gray zones are equally important. First, the dataset is anonymized and proprietary; the league and teams cannot be identified [PAGE 3], so external validity is limited to a top-tier professional league in one season. Second, the EM formation model depends on assumptions about role count, covariance stability, and convergence. If a team unexpectedly uses a back three, as team T is said to have done, a fixed role model may strain unless the representation can absorb that variation [PAGE 5]. Third, possession and stoppage definitions matter. The authors explicitly remove stoppage periods, noting they comprise “around 50% of the time” [PAGE 6]; if stoppages were retained, formation centroids could be contaminated by set pieces, goal kicks, or ball-chasing. Fourth, the inference that home teams “expend less energy” is supported by distance covered, but distance is a scalar kinematic proxy, not a full biomechanical load measure. It does not directly measure acceleration, deceleration, high-speed running, or heart-rate cost. Fifth, role assignment error can create artificial formation similarity or difference. If the Hungarian assignment swaps roles due to near-identical covariance ellipses, the mean formation may be overly smooth; if it locks onto a local assignment, it may underrepresent tactical variation. Sixth, the paper’s language about “win at home and draw away” is interpretive: the tracking evidence supports more advanced home positioning and more conservative away positioning, but it does not prove coach intention except as a parsimonious strategic explanation [PAGE 7].

Thus the strongest version of the source’s claim is: in this anonymized top-tier season, teams largely preserve formation shape across venues but shift the formation’s spatial altitude upward at home, both in and out of possession, and this behavioral shift aligns with greater final-third occupancy and lower home distance burden. The weakest version is: the exact causal mechanism is proven to be coach strategy rather than referee effects, crowd effects, fixture congestion, opponent quality, score effects, or measurement artifact. The source itself points to referee effects in prior literature [PAGE 1], but its tracking evidence does not directly model referees. Therefore the paper is strongest as a spatiotemporal description of behavioral asymmetry, and weaker as a full causal account of home advantage.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a match for team \(j\) be sampled at frame index \(t\), with player \(i\) tracked position
\[
\mathbf{p}_{j,i,t} = (x_{j,i,t}, y_{j,i,t}) \in \mathbb{R}^2 \quad \text{in meters}.
\]
The source states that the data consist of “the location of every player at 10 frames-per-second as well as the ball events” [PAGE 3]. Therefore the frame interval is
\[
\Delta t = 0.1 \ \text{s}.
\]
Let \(O\) be the set of outfield players used for formation centroid calculation, with \(|O|=10\), because the method normalizes translation by removing the centroid and explicitly excludes the goalkeeper from that centroid operation [PAGE 3]. The team centroid at frame \(t\) is
\[
\mathbf{c}_{j,t} = \frac{1}{10}\sum_{i \in O} \mathbf{p}_{j,i,t}.
\]
Its components are in meters. The translation-normalized player vector is
\[
\mathbf{q}_{j,i,t} = \mathbf{R}(\theta_j)\mathbf{p}_{j,i,t} - \mathbf{R}(\theta_j)\mathbf{c}_{j,t},
\]
where \(\mathbf{R}(\theta_j)\) is a rotation aligning team \(j\) to attack in the positive \(x\)-direction. The source normalizes teams to attack from left to right when comparing home and away formations [PAGE 5]. The normalized vector \(\mathbf{q}_{j,i,t}\) has units of meters and represents relative position within the formation.

The formation is modeled as a mixture or assignment of spatial roles. Let \(z_{i,t} \in \{1,\dots,K\}\) be the latent role of player \(i\) at frame \(t\). For each role \(r\), define mean position
\[
\boldsymbol{\mu}_r \in \mathbb{R}^2 \quad \text{in meters},
\]
and covariance matrix
\[
\boldsymbol{\Sigma}_r \in \mathbb{R}^{2 \times 2} \quad \text{in square meters}.
\]
Under a Gaussian role model,
\[
p(\mathbf{q}_{j,i,t}\mid z_{i,t}=r)
=
\frac{1}{2\pi |\boldsymbol{\Sigma}_r|^{1/2}}
\exp\left[
-\frac{1}{2}
(\mathbf{q}_{j,i,t}-\boldsymbol{\mu}_r)^\top
\boldsymbol{\Sigma}_r^{-1}
(\mathbf{q}_{j,i,t}-\boldsymbol{\mu}_r)
\right].
\]
The corresponding negative log-density, up to additive constants, gives the assignment cost
\[
C_{i,r,t}
=
(\mathbf{q}_{j,i,t}-\boldsymbol{\mu}_r)^\top
\boldsymbol{\Sigma}_r^{-1}
(\mathbf{q}_{j,i,t}-\boldsymbol{\mu}_r)
+
\log |\boldsymbol{\Sigma}_r|.
\]
The first term is a squared Mahalanobis distance with units of dimensionless quadratic form because \(\boldsymbol{\Sigma}_r^{-1}\) has units \(\text{m}^{-2}\) and the displacement has units \(\text{m}\). The second term is the logarithm of a determinant with units \(\text{m}^4\); strictly, a unit reference area should be included to make the logarithm dimensionless, for example \(\log(|\boldsymbol{\Sigma}_r|/A_0^4)\), where \(A_0\) is a reference area in \(\text{m}^2\). This unit-reference issue does not affect assignment ordering if \(A_0\) is constant.

Because each frame must assign players to distinct roles, the assignment problem is
\[
\pi_t^*
=
\arg\min_{\pi \in S_K}
\sum_{i=1}^{K} C_{i,\pi(i),t},
\]
where \(S_K\) is the set of one-to-one assignments of players to roles. The source states: “We then use the Hungarian algorithm [9] to update the role of each player in every frame and calculate the error between the previous and updated assignments” [PAGE 4]. The Hungarian algorithm solves this linear assignment problem exactly for a finite cost matrix. Its computational complexity is polynomial in the number of roles, conventionally \(O(K^3)\) per frame. With \(K\) around 10 or 11, this is tractable, but across an entire season with more than one million player-frame records per match [PAGE 2], the computational load is still substantial.

The EM iteration can be written as follows. Initialization uses mean player positions:
\[
z_{i,t}^{(0)} = \text{initial role based on mean position}
\]
as described in the source [PAGE 4]. For iteration \(n\):

1. Assignment step:
\[
\pi_t^{(n)}
=
\arg\min_{\pi \in S_K}
\sum_i C_{i,\pi(i),t}^{(n-1)}.
\]

2. Update step:
\[
\boldsymbol{\mu}_r^{(n)}
=
\frac{1}{N_r^{(n)}}
\sum_{t}\sum_{i}
\mathbf{1}\{\pi_t^{(n)}(i)=r\}
\mathbf{q}_{j,i,t},
\]
\[
\boldsymbol{\Sigma}_r^{(n)}
=
\frac{1}{N_r^{(n)}}
\sum_{t}\sum_{i}
\mathbf{1}\{\pi_t^{(n)}(i)=r\}
(\mathbf{q}_{j,i,t}-\boldsymbol{\mu}_r^{(n)})
(\mathbf{q}_{j,i,t}-\boldsymbol{\mu}_r^{(n)})^\top,
\]
where
\[
N_r^{(n)} = \sum_t \sum_i \mathbf{1}\{\pi_t^{(n)}(i)=r\}.
\]
The assignment error used for convergence can be formalized as a Hamming distance between assignments:
\[
E^{(n)} = \sum_t d_H(\pi_t^{(n)}, \pi_t^{(n-1)}),
\]
where \(d_H\) counts players whose role label changes. Convergence occurs when \(E^{(n)}\) falls below a tolerance \(\tau\), or when the complete-data log-likelihood improvement falls below \(\epsilon\). The complete-data log-likelihood, in natural units of nats, is
\[
\ell
=
\sum_t \sum_i
\left[
-\frac{1}{2}
(\mathbf{q}_{i,t}-\boldsymbol{\mu}_{z_{i,t}})^\top
\boldsymbol{\Sigma}_{z_{i,t}}^{-1}
(\mathbf{q}_{i,t}-\boldsymbol{\mu}_{z_{i,t}})
-
\frac{1}{2}\log |2\pi \boldsymbol{\Sigma}_{z_{i,t}}|
\right].
\]

The home-advantage centroid operator is
\[
X_j^{H} = \frac{1}{T_j^{H}} \sum_{t \in H_j} x_{c,j,t},
\]
\[
X_j^{A} = \frac{1}{T_j^{A}} \sum_{t \in A_j} x_{c,j,t},
\]
where \(x_{c,j,t}\) is the \(x\)-component of the team centroid after attack-direction normalization. The source reports team x-centroid means of \(-1.79\) m for home and \(-4.90\) m for away [PAGE 3]. Under the paper’s attacking orientation, the home-away difference is
\[
\Delta X = X^{H} - X^{A} = (-1.79) - (-4.90) = 3.11 \ \text{m}.
\]
This is a spatial displacement in meters, not a probability. The paper interprets this as home teams being more advanced [PAGE 3].

Final-third occupancy can be written as a time proportion:
\[
O_j^{S}
=
\frac{
\sum_t
\mathbf{1}\{x_{c,j,t} > x_{\text{final}}\}
\mathbf{1}\{\text{ball in play}\}
\Delta t
}{
\sum_t
\mathbf{1}\{\text{ball in play}\}
\Delta t
},
\]
where \(S \in \{H,A\}\) denotes home or away. \(O_j^S\) is dimensionless if expressed as a fraction, or percentage if multiplied by 100. For a standard 105 m pitch with origin at midfield and positive direction toward the opponent goal, \(x_{\text{final}} = 35\) m. The source reports occupancy in the final third as 14.1% at home and 11.8% away [PAGE 3].

Distance covered can be defined as
\[
D_{j,s}
=
\sum_i \sum_t
\mathbf{1}\{\text{state}_t=s\}
\left\|
\mathbf{p}_{j,i,t+1} - \mathbf{p}_{j,i,t}
\right\|,
\]
with \(D_{j,s}\) in meters. The state \(s\) may be neutral, attacking possession, or defending against possession, matching the source’s state-dependent distance plots [PAGE 6]. The source states: “the away teams (blue-line) covered more distance than the home team (red-line)” [PAGE 6]. It also says home teams “will expend less energy” [PAGE 6].

Breakdown regimes are explicit:

1. Covariance singularity. If \(N_r \leq 2\), or if assigned positions are collinear, then \(\boldsymbol{\Sigma}_r\) may be singular and \(|\boldsymbol{\Sigma}_r|=0\). Then \(\boldsymbol{\Sigma}_r^{-1}\) does not exist, and the Gaussian cost is undefined. Regularization or rejection of poorly populated roles is required.

2. Assignment degeneracy. If two or more assignments have identical cost, the Hungarian solution is non-unique. This can cause label switching across iterations, making role identities unstable. A deterministic tie-breaking rule or soft responsibilities are needed.

3. Role-count misspecification. If the true tactical structure includes an extra striker, an extra midfielder, or a back three, a fixed \(K\) may misassign players. The source notes team T’s back-three variation [PAGE 5], which is a concrete breakdown case for overly rigid formation models.

4. Stoppage contamination. If stoppages are not removed, the centroid and occupancy metrics are biased by dead-ball positioning. The source explicitly removes stoppage time, which is “amazingly around 50% of the time” [PAGE 6].

5. Temporal aliasing. At 10 frames per second, very rapid role swaps shorter than 0.1 s cannot be resolved. This is not fatal for season-level formation means but can affect frame-level assignment.

6. Coordinate rotation failure. If attack direction is mis-specified, the sign of \(\Delta X\) can invert, falsely making home teams appear deeper. The source’s left-to-right normalization is essential [PAGE 5].

7. Statistical clustering. The table presents p-values by match-level means [PAGE 3], but repeated observations within teams across a season may require hierarchical modeling. If team-level clustering is ignored, p-values may overstate precision.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of this paper is deliberately retro-causal: older tactical history constrains how modern tracking data should be interpreted. The source begins with Jonathan Wilson’s historical account of formations, noting that England’s 1872 shape resembled a 1-2-7 and Scotland’s a 2-2-6 [PAGE 1]. It then traces tactical evolution through rule changes and professionalism, citing “Catenaccio” as a defensive, counter-attacking Italian tradition and “Total-Football” as a Dutch, fluid, high-coordination tradition later connected to “Tiki-Taka” and Barcelona’s 4-3-3 [PAGE 1]. This genealogy matters because the paper’s central finding—that teams keep formation shape but shift its vertical position—only makes sense against a historical background where formations are not merely static diagrams but dynamic control policies. Catenaccio implies sitting deep and absorbing pressure; Total-Football implies squeezing space and circulating possession. The paper’s away-team conservatism and home-team advancement echo this old tactical dichotomy in a quantitative tracking format.

A second genealogical layer is the literature on home advantage. The source references Scorecasting, which argues that home advantage exists across professional sports and suggests referee bias may contribute through favorable critical calls [PAGE 1]. It also references The Numbers Game to show that popular soccer beliefs can be false, such as the idea that scoring makes a team more vulnerable immediately afterward or that corners strongly cause goals [PAGE 1]. This creates a retro-causal audit frame: before accepting “home teams play higher,” one must ask whether the effect is merely a scoring artifact, a referee artifact, a rest artifact, or a tracking artifact. The paper’s own design tries to isolate the tracking explanation by using player and ball tracking from Prozone rather than relying only on event statistics [PAGE 2].

A third lineage is algorithmic. The method depends on the Hungarian algorithm, attributed to Kuhn in 1955 [PAGE 7], and on EM-style iterative assignment. The source says the method is similar to prior work on representing adversarial team behaviors using player roles [PAGE 4]. The authors also build on their earlier spatiotemporal strategy paper, where home teams had more forward-third possession even when shooting and passing proficiency were similar [PAGE 2]. Thus the current paper is not a standalone anomaly; it is the second step in a research program: first show that home teams occupy advanced zones more often, then explain that occupation through formation execution.

Multi-week traps in this lineage are practical and conceptual. A first trap is treating the starting lineup as the formation. The source explicitly warns that players swap roles, causing overlap if a static ordering is used [PAGE 4]. A second trap is aggregating the entire match without separating in-possession and out-of-possession states. If one only computes a whole-match centroid, one may miss whether the home shift occurs while attacking, defending, or both. The paper avoids this by plotting mean formation position when the team is in possession and when the opposition is in possession [PAGE 5]. A third trap is ignoring stoppages. The source notes that stoppage time is around half the clock and should be disregarded for formation style analysis [PAGE 6]. A fourth trap is failing to normalize attack direction. If one team attacks left-to-right and another right-to-left without rotation, the home/away comparison becomes meaningless. The source normalizes all teams to attack left-to-right [PAGE 5]. A fifth trap is over-reading a single formation label. The authors show that most teams play similar formations, but some vary midfield structure or even use a back three [PAGE 5]. Therefore the retro-causal lesson is that formation analysis must preserve both shape and altitude, and must audit the data pipeline for identity, stoppage, possession, and orientation errors before assigning strategic meaning.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The paper’s findings can be interpreted through a recursive theory of mind in which each coaching staff models the opponent’s model of its own behavior. Let the match state be
\[
s_t = (\tau_t, \Delta \text{score}_t, x_{\text{ball},t}, u_t, \text{stoppage}_t),
\]
where \(\tau_t\) is effective time remaining after removing stoppages, \(\Delta \text{score}_t\) is score differential, \(x_{\text{ball},t}\) is ball position, and \(u_t\) denotes possession state. The home formation policy produces an expected centroid height
\[
h_H(s_t) = \mathbb{E}[x_{c,t} \mid \text{home}, s_t],
\]
and the away policy produces
\[
h_A(s_t) = \mathbb{E}[x_{c,t} \mid \text{away}, s_t].
\]
The source’s empirical claim is that \(h_H(s_t) > h_A(s_t)\) for both attacking and defending states, since “nearly all teams are more forward at home than they are away, both when they attack and when they defend” [PAGE 6].

Habit regression occurs when a crisis state forces a team back to its most rehearsed default. If the home team is late in a match and needs a result, its trained habit may be to push the line higher, compress the opponent, and force turnovers in advanced areas. The source’s match-summarization example shows role-level movement, such as a midfielder moving forward to aid attack before a goal [PAGE 6]. Under crisis regression, the home team’s policy becomes less exploratory and more stereotyped: the formation remains recognizable, but its centroid moves upward. The away team’s habit may be to sit deeper, protect central space, and rely on counterattacks. The source supports this broad asymmetry by saying teams sat deeper away and were more advanced at home [PAGE 7].

Counter-trap behavior occurs when the away team deliberately invites the home team to push higher, then attacks the space behind the defensive line. The source acknowledges this risk: the downside of defending higher is that “they leave more space exposed behind the defensive line which allows teams to be hit on the counter attack” [PAGE 6]. In recursive terms, the away coach believes the home coach believes that higher positioning will produce more advanced possession. The away team then sets a lower block to make the home advance less profitable. If the home team detects this, it may slow the line, switch to a more conservative build-up, or use a holding midfielder to protect transitions. The source notes minor midfield variations, such as one holding midfielder versus two, or one striker versus two [PAGE 5], which are exactly the levers a coach might use to counter a trap.

The clock modifies the recursion. Because the source removes stoppage periods, the effective clock is not wall-clock time but in-play time [PAGE 6]. The authors also use a sliding 5-minute window to visualize how formation and location evolve within a half [PAGE 6]. This means that a late-game shift can be detected even if the final whole-match average looks stable. If the away team is leading, its optimal counter-trap may be to defend even deeper, reduce distance, and force the home team to sustain inefficient pressure. If the home team is trailing, its crisis habit may be to raise the line despite counter-risk. If the score is level, both teams may hedge: home keeps a moderately high block, away stays compact but not extremely deep.

A recursive equilibrium is not assumed by the source, but it can be expressed as mutual best responses:
\[
h_H^* = \arg\max_{h_H} U_H(h_H; b_A(h_H)),
\]
\[
h_A^* = \arg\max_{h_A} U_A(h_A; b_H(h_A)),
\]
where \(b_A(h_H)\) is the away team’s belief about the home line, and \(b_H(h_A)\) is the home team’s belief about the away block. The utility may include expected points, territorial control, transition risk, and energy cost. The source’s evidence that home teams cover less distance and away teams cover more suggests that the home policy may be energetically efficient if it wins the ball higher, while the away policy may be energetically costly because it defends deeper and runs more [PAGE 6]. However, if the counter-trap succeeds, the home team’s expected points can fall despite higher territorial position, because the away team converts compact defending into high-value transitions. The recursive theory of mind therefore predicts that home advantage should be strongest when the home team can press without excessive counter-exposure, and weakest when the away team is disciplined enough to absorb pressure and exploit space behind the line.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto occurs when a physical, biomechanical, or environmental layer contradicts the tactical interpretation produced by the tracking layer. The tactical layer says: home teams play the same formation but higher up the field, and away teams sit deeper [PAGE 1], [PAGE 7]. The physical layer must check whether that interpretation is compatible with movement cost, field geometry, and player capacity.

The primary physical observable is distance covered. Define
\[
D_{j,s} = \sum_i \sum_t \mathbf{1}\{\text{state}_t=s\}
\|\mathbf{p}_{j,i,t+1}-\mathbf{p}_{j,i,t}\|,
\]
with units of meters. The source reports that “the away teams (blue-line) covered more distance than the home team (red-line)” [PAGE 6]. It also says that home teams tended to run more in attack because they exploit more area, but the discrepancy is smaller than the distance away teams cover in defense [PAGE 6]. This is important: if the home high-line interpretation required home teams to run substantially more than away teams, the distance layer might veto the claim that home teams expend less energy. But the source’s distance layer points in the opposite direction: away teams cover more distance overall, and home teams are said to expend less energy [PAGE 6]. Therefore, based on the provided source data, there is no physical-distance veto against the home-advance interpretation.

A biomechanical veto would require evidence that home high positioning causes excessive high-speed running, repeated sprint exposure, or late-match fatigue that undermines the tactical benefit. The source does not provide sprint counts, acceleration/deceleration counts, heart rate, or player-load metrics. It provides only distance covered [PAGE 6]. Thus a full biomechanical veto cannot be proven from the source. The appropriate adjudication is conditional: if additional data showed that home teams had greater high-speed running in the final 15 minutes and that this was associated with collapse in defensive line integrity, then the “home teams expend less energy” claim would be vetoed. But under the source’s own distance evidence, the biomechanical layer is at least consistent with the paper’s interpretation.

An environmental veto would require weather or pitch-surface variables: heat, humidity, wind, rain, or turf quality. The source does not include such variables. It uses player tracking and ball events from Prozone [PAGE 3], but does not report weather covariates. Therefore no weather veto can be adjudicated from the supplied text. A future study could test whether home high-line behavior disappears under extreme heat or wet conditions. If it did, that would suggest the tactical layer is contingent on environmental capacity. But absent those data, the weather layer is non-probative.

A geometric veto can also be considered. The final-third occupancy metric depends on pitch coordinates and stoppage filtering. If the pitch coordinate system were reversed, the home advantage in x-centroid would vanish or invert. The source avoids this by normalizing teams to attack from left to right [PAGE 5]. The final-third occupancy values, 14.1% home versus 11.8% away, are consistent with the x-centroid result: home teams are more advanced [PAGE 3]. Therefore the geometric layer corroborates rather than vetoes the tactical claim.

The strongest cross-layer conclusion is therefore: the physical and geometric layers provided by the source do not veto the claim that home teams execute a more advanced formation. The distance layer actually supports the authors’ assertion that home teams expend less energy [PAGE 6]. The unresolved layers are high-intensity running and environmental stress, which would require additional tracking-derived load metrics or weather data. If those future layers showed that home pressing is unsustainable, they would veto the simplistic energy advantage claim. But they do not overturn the core tracking finding that home formations are spatially higher than away formations.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
For a verifiable reward-style evaluation, the paper’s central claim can be tested by counterfactual predicates that can be checked against the tracking data. The claim is not about market language; it is