---
source: "2023 - Aiming for Competitive Balance Designing Fair Handicap Systems for Darts using a Markov Decision Process Framework - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 36
model: deepseek/deepseek-v4.1-flash-1017
words: 7322
---

<NATIVE_REASONING>
We need answer user. Need produce GSE/GSI Frontier Reasoning Foundry. Need obey invariants. Source is slides. Need sections exact XML, >=1000 words total, THINK_TRACE >=400. Zero betting lines: avoid spreads/totals/moneylines/odds. But source discusses win probabilities; can mention probability? Invariant says never mention spreads totals moneylines odds. "odds" word avoid. Probability is allowed? Need not use betting lines. Use probability units. Need formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need include quotes verbatim. Need discuss MDP, fairness, dynamic credits, hand-start, competitive balance, computational complexity, skill epsilon, Gaussian, credits. Need be careful not to invent equations not in source. But can formalize from slides. Need distinguish source-stated vs inference. Need cite pages. Need mention no source for exact equations, so mark inferred formalization. Need "source operators and equations" formal LaTeX with units and page citations, breakdown. Need ret causal genealogy historical/scientific lineage and multi-week traps. Need recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions.

Need maybe mention source page has no weather/biomechanics; darts indoor. Need say cross-layer veto: physical/biomechanical/weather not in source, but can veto modeling assumptions if dart release mechanics, fatigue, airflow. Need prove via bounds? We can state null/veto conditions. Need no betting.

Need satisfy >=1,000 words. We can make ~2,500 words. Need exact XML tags. Need maybe include all sections. Need not include meta. Need not mention "I". Need "GSE + GSI Frontier Reasoning Foundry" maybe opening? Probably just sections.

Need ensure THINK_TRACE >=400 words. Need deep multi-hop derivation & gray-zone audit. Include page citations and quotes inside? Could include. The source operators section needs formal LaTeX and page citations. Need exact page markers format [PAGE 1], [PAGE 16] etc. Exact quotes. Need quote from page: "Competitive balance occurs when two players have an equal number of expected throws to check out." [PAGE 16]. Another: "Fairness occurs when two players have an equal probability of winning" [PAGE 33]. The slides have typo "equal probability" maybe not exact? Page 33: "Fairness occurs when two players have an equal probability of winning" yes. Page 34: "Existing head-start handicap approaches are not fair" etc. Page 29: "Dynamic credit handicap finds the number of credits where the weaker player and stronger player have the same expected number of turns starting from a score of 501". Page 30: "Stronger and weaker players have ~equal probability of winning". Page 3: "Handicap systems create competitive balance between mismatched players". Page 16: "There exists a unique number of credits that gives a weaker player the needed advantage to check out with equal or less expected throws compared to a stronger player". Need exact quote with line breaks? Use verbatim in quotes. Good.

Need formal equations. MDP state s = (r,c) where r remaining score in {0,...,501}, c credits in {0,...,9}. Action a in A_throw ∪ A_credit. A_throw 729 targets, A_credit 62 possible board regions hit with perfect execution. Transition p(s'|s,a). For throw uncertain outcome using professional skill model N(mu, Sigma), credit deterministic. Skill levels epsilon: N(mu, epsilon Sigma), epsilon=1 strongest, epsilon>1 weaker. Value function expected throws to check out using policy. Bellman equation: V(s) = min_a [1 + sum_{s'} p(s'|s,a) V(s')]? Need if cost per throw. Credits deterministic? If credit action consumes credit? Need include assumption: V(s)=min_a { c(s,a) + sum p V(s') }, c=1 for throw; credit may cost 0? Source doesn't specify exact. Need say exact credit transition rules not given in extracted slides; formalization is inferential. Don't invent too much. Could write generic Bellman: V^\pi(s)=E^\pi[sum_{t=0}^{T-1} 1 | s0=s], V(s)=min_{a∈A} {1 + ∑ p(s'|s,a)V(s')} with terminal V(0)=0 and appropriate bust/check-out absorbing states. But credit action maybe not throw; if it does not consume a throw, cost 0. Need mark assumptions. Units: V in throws (dimensionless count; or "throws", not SI; information units bits for state space? Could say state-space complexity log2. Page 33 says ~2 million states, ~2 billion states, <1 minute, 17 hours, high RAM. Memory? Can compute log2 2e6 ≈20.93 bits; 2e9 ≈30.90 bits for enumeration. But that's abstract. Need SI units? Invariant says "SI/information/probability units" not necessarily SI for all. Use probability p ∈ [0,1] dimensionless; V in throws (count). Execution error multiplier dimensionless; covariance Sigma entries in mm^2 or board-coordinate squared if dart landing coordinates. Need source image no coordinate units. State-space enumeration bits. Runtime seconds. RAM? not specified; say high RAM unspecified. Use probability as dimensionless.

Need exact singularity/breakdown regimes. For MDP:
- If epsilon→∞, variance/covariance becomes unbounded? If N(mu, epsilon Sigma), as epsilon→∞, execution error covariance degenerates to high variance, policy value maybe dominated by uniform-ish misses. But not exact.
- If Sigma singular (rank-deficient) then no smoothing in null directions; transition probabilities can be degenerate/undefined if density requires inverse. Break down of Gaussian model. If epsilon=0, deterministic perfect execution (Sigma zero) all shots hit target; credit/throw distinction collapses? epsilon=1 strongest; epsilon>1 weaker. 
- If credits cap 9 insufficient, fairness impossible within c∈{0,...,9}; theorem says unique credits maybe but cap can bind. If no optimal head-start exists (p34). 
- Two-player state explosion ~2 billion states; Bellman solve complexity O(|S||A|) or O(|S|^2|A|) if dense; breakdown due memory/time. Need exact: ~2 million states single MDP, ~2 billion states system of MDPs; if product state space N1×N2 maybe ~ (2e6)^2 = 4e12? But source says ~2 billion. Wait page 33: one-player ~2 million states; two-player ~2 billion states. But product of 2M x 2M = 4e12, not 2e9. Maybe two-player "system of MDPs" with reduced states? Need cite. Could note source states ~2 billion; naive product would be ~4×10^12, a discrepancy/gray zone. Important gray-zone audit! Source says one-player ~2 million; two-player ~2 billion. A naive Cartesian product of single-player states would be ~(2×10^6)^2 = 4×10^12, not ~2×10^9. This is a gray-zone inconsistency. Need flag. Could be because two-player model only tracks turns/credits? But source says "System of MDPs" not product. Need mention exact source quote. Great.

Need "retrocausal genealogy" historical/scientific lineage & multi-week traps. Discuss MDP lineage Bellman 1957? Source references Bertsekas & Tsitsiklis; Chan & Singal 2016 tennis handicap; Haugh & Wang 2022 darts zero-sum; Chan et al 2022 tennis intention/execution; professional skill model. Need no need exact historical. But can say lineage: dynamic programming -> MDP -> handicap systems -> darts. Multi-week traps: overfitting to single-point expected throws; ignoring turn structure (players alternate every 3 throws) [PAGE 17 footnote]; treating fairness as expected throws only vs win probability [PAGE 33]; using head-start when imbalance at endgame [PAGE 20/34]; assuming Gaussian independent throws; ignoring credit cap; confusing deterministic credit with actual perfect execution; computational scaling; simulation 10,000 matches variance. Need "retrocausal" maybe trace future counterfactual back to assumptions. We can phrase.

Need "recursive theory of mind" crisis habit regression vs counter-trap vs clock. This is a weird GSE/GSI term. Need interpret: crisis habit regression (players/coaches revert to heuristic head-start habit under pressure), counter-trap (exploiting opponent's expected policy, e.g. opponent knows handicap), clock (turn/time/throw clock: alternating every 3 throws; credit timing). Need discuss in darts context. Maybe model player beliefs about opponent's skill epsilon and credit allocation. Recursive ToM: player 1 models player 2's policy, etc. Need state dynamic credits can be public; if hidden, deception. Crisis habit regression: when under mismatch, weaker player may abandon optimal checkout strategy and chase bullseye, regress to heuristic. Counter-trap: stronger player may alter aim to deny checkout? In darts not zero-sum simultaneous? Haugh & Wang dynamic zero-sum. Clock: turn structure every 3 throws, credits consumed? Need mention "turn feature (players alternate every 3 throws)" [PAGE 17]. Need discuss if dynamic credit alters distribution [PAGE 32] and can equalize win probability [PAGE 30]. Need caution: no empirical human behavior data in slides; ToM discussion is inferential and should be vetoed if no behavioral data.

Need "cross-layer veto adjudication" physical/biomechanical/weather veto proof. Need define veto: any layer that invalidates Markov/Gaussian assumptions. Physical: board dimensions, dart flight, release point; if covariance changes by stance/fatigue, N(mu, epsilon Sigma) not stationary. Biomechanical: shoulder/elbow tremor, fatigue over turns; covariance may increase with throw count, violating time-homogeneous MDP; if epsilon multiplier not constant across targets, skill model invalid. Weather: indoor darts; airflow/HVAC, humidity, temperature can change flight; source has no weather data; if significant, transition probabilities p(s'|s,a) nonstationary. Veto proof: If conditions change p, policy/value invalid. Need maybe show formal: if p_t(s'|s,a) ≠ p(s'|s,a), Bellman fixed point V not valid; handicap credits c* may not equalize expectations. Need exact proof sketch: For equal expected throws, Eπ_w[T | c*] = Eπ_s[T]. If transitions shift by Δp, then ΔE = ∑ sensitivity * Δp; unless zero sensitivity, equality breaks. Since value is a positive weighted sum of transition probabilities, generic nonzero perturbation breaks equality. But need not overdo. Need mention "weather veto not applicable under controlled indoor conditions absent evidence; default veto is 'not proven' rather than affirmative." The invariant asks "Physical/biomechanical/weather veto proof." Maybe provide proof of veto conditions. Need say no source evidence for weather; outdoor darts would break model. Physical/biomechanical: source only references professional skill model and Gaussian; no biomechanical calibration. Thus model may be a phenomenological skill model, not causal. Cross-layer veto adjudication: accept for model-conditional fairness; veto for deployment if covariance instability. Need formal.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need create 3 scenarios where a reward/verifier would veto model claims. Must be verifiable. Predictions. Need no betting lines. Avoid "odds". Scenarios:
1. Empirical calibration test: Holdout throws from same player across sessions; test p(s'|s,a) calibration. Veto if expected calibration error > threshold or likelihood ratio rejects Gaussian covariance stationarity. Prediction: if epsilon multiplier is misspecified, predicted checkout-throw distribution diverges; dynamic credit c* over/under estimates. Need exact prediction: e.g., if actual covariance has target-dependent scale, c* estimated from single ε will fail equal expected throws by >1 throw. Verifiable with simulation/field data.
2. Turn-structure ablation: Compare simplified one-player model vs full alternating every 3 throws. Veto if credit c* from simplified model yields win probability not within tolerance of 0.5 in 10,000 simulated matches. Prediction: simplified c* leaves one side >55% or <45% for ε≥? Need not give betting. Win probability is not betting. Use probability. But source says ~equal. Need prediction: if ignoring turn feature, c* shifts and win probability deviates >0.05. Verifiable via simulation.
3. Credit cap/unique theorem stress: For ε in range, search c∈{0,...,9}; veto unique-credit theorem if no c equalizes expected throws within tolerance or multiple c; or if optimized head-start leaves stronger <50% [PAGE 24] and dynamic credit not within. Prediction: for large ε, cap binds; c*=9 insufficient; equalization fails. Verifiable by enumerating MDP.
Maybe also include policy exploit: counterfactual opponent policy changes; if dynamic credit public and opponent adjusts, fairness fails. But need 3.

Need ensure XML sections exact. The user wants exact XML sections. We can include all tags. Need not include bullet outside. Need total >=1000 words. Let's draft.

Need be mindful of "zero betting lines: Never mention spreads, totals, moneylines, or odds." Avoid word "odds" anywhere. The source uses "win probabilities" not odds. I should not say "odds". Avoid "moneyline" etc. No betting. Use "probability". Good.

Need "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." Include equations in LaTeX. Need maybe number them. Use \[
...
\]. Include units. Need "SI/information/probability units" perhaps:
- s=(r,c), r∈{0,...,501} score points (dimensionless count), c∈{0,...,9} credits (count).
- p(s'|s,a)∈[0,1] dimensionless probability.
- V∈\mathbb{R}_{\ge0} throws (count).
- Sigma covariance in mm^2 if coordinates in mm; epsilon dimensionless.
- State space entropy H ≤ log2 |S| bits; source sizes.
- Runtime seconds.
Good.

Need "exact singularity/breakdown regimes": 
1. Gaussian covariance singular: det Σ=0 or ε=0. If Σ singular, density not defined; transition probabilities need regularization.
2. ε→∞ or εΣ large relative to board region spacing: all targets become nearly indistinguishable; policy flat; value tends to high; credit benefit saturates. Exact threshold not in source; define when standard deviation √(ε σ_max) exceeds angular/linear target spacing Δ. If √(ε λ_max(Σ)) ≫ Δ, Gaussian mass not localized.
3. Credit cap c_max=9 binds: if c* >9 no feasible equalization.
4. Two-player state count ~2 billion; memory/time breakdown; source says 17h high RAM.
5. No optimal head-start may exist [PAGE 34].
6. Turn feature excluded in simple model may break fairness [PAGE 17].
Need cite.

Need quote exact. Need "verbatim quotes" maybe in each section. Use quotes with [PAGE N]. Need ensure quotes are exact. Page 16: "Value function is the expected number of throws  for a player to check out when using a given policy." There are two spaces; okay. Definition 2 exact: "Competitive balance occurs when two players have an equal number of expected throws to check out." Page 16. Definition 1: "The weaker player has a higher expected throws to check out when starting from a score of 501 (with no credits)." Theorem 2: "There exists a unique number of credits that gives a weaker player the needed advantage to check out with equal or less expected throws compared to a stronger player". Page 29: "Dynamic credit handicap finds the number of credits where the weaker player and stronger player have the same expected number of turns starting from a score of 501". Page 33: "Fairness occurs when two players have an equal probability of winning" and "Competitive balance occurs when two players have an equal expected number of throws to check out". Page 34: "Existing head-start handicap approaches are not fair" and "Main imbalance occurs at the end of the game and cannot be mitigated by a head-start". Page 20: "Main imbalance at end of game" and "Stronger player could dominate across all scores (head-start could never balance competition)". Page 3: "Handicap systems create competitive balance between mismatched players". Page 9: "𝐴!"#$% contains 729 targets on the board that a player may aim for" and "𝐴&#'()! contains the 62 possible board regions that a player may “hit” with perfect execution". The extracted text has weird encoding. Need exact? We can quote "contains 729 targets" and "contains the 62 possible board regions" maybe not exact full due encoding. "729 targets" and "62 possible board regions" are exact phrases. Page 11: "Use professional player’s skill model*" and "Hit desired board region with certainty". Page 14: "Different skill levels are modelled using an execution error multiplier 𝝐" and "𝝐= 𝟏" "Weaker Players 𝝐> 𝟏". Page 17 footnote: "Solved a more complex model formulation which includes the turn feature of the game (i.e., players alternate every 3 throws)." Exact. Page 24: "Stronger player wins less than 50% of the time using this handicap". Page 30: "Stronger and weaker players have ~equal probability of winning". Page 32: "Dynamic credits reshape the distribution to equalize win probability". Page 33: "~ 2 million states" "~ 2 billion states" "Takes < 1 minute to solve, regular RAM sufficient" "Takes 17 hours to solve, high RAM required". Good.

Need maybe mention author? Page 1: Rachael Walker joint with Craig Fernandes and Timothy Chan. No need.

Need maybe address "Unknown Authors" in drive but source page gives authors. Could mention source page 1 names. No need.

Need "GSE + GSI Frontier Reasoning Foundry" maybe no invocation. Could begin with `<THINK_TRACE>`.

Need produce high-quality, rigorous, no fluff. Let's plan sections:

1. THINK_TRACE (≥400 words): Deep multi-hop derivation & gray-zone audit. Describe problem: darts 501, double checkout, bust. MDP formulation: state (score, credits), actions, transitions, costs. Skill model Gaussian with epsilon. Competitive balance vs fairness distinction. Derive from expected throws to win probability. Need turn structure every 3 throws. Head-start vs dynamic credit. Audit gray zones: (a) source lacks exact Bellman/transition equations; formalization inferred; (b) two-player state count vs naive product discrepancy; (c) "unique credits" theorem but cap and no head-start possibility; (d) simulation 10,000 matches but no CI; (e) fairness definition changes between pages 16 and 33; (f) Gaussian covariance target-independent assumption; no biomechanics. Include quotes. Need >=400 words. This alone can be ~700.

2. SOURCE_OPERATORS_AND_EQUATIONS: List formal equations. Include page citations. Assumptions. Units. Breakdown regimes. Need maybe a table? In XML prose. Use LaTeX. Need not too long but thorough.

3. RETROCAUSAL_GENEALOGY: lineage and multi-week traps. Need mention historical/scientific lineage: Bellman dynamic programming -> MDP; Chan and Singal 2016 tennis credit handicap; Haugh and Wang 2022 darts dynamic zero-sum; Chan et al 2022 tennis intention vs execution; Bertsekas & Tsitsiklis. Multi-week traps over weeks: model drift, calibration, policy exploitation, computational scaling, fairness criterion drift. Include quotes.

4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need define three modes:
- crisis habit regression: under mismatch, players/coaches regress to heuristic head-start or "aim bullseye" despite optimal policy; model predicts endgame imbalance [PAGE 20]; if humans do this, dynamic credit may not realize equal win probability.
- counter-trap: stronger player models weaker player's policy and selects actions to deny checkout or manipulate credit; recursive beliefs about epsilon. If both use optimal policies, dynamic credit can equalize [PAGE 30]; if strategic adaptation, fairness is not stationary. Need mention Haugh & Wang dynamic zero-sum [PAGE 36].
- clock: turn structure every 3 throws [PAGE 17]; credits timing; time pressure; source footnote. Recursive ToM with clock: player anticipates credit usage at endgame; if credit is public, opponent can adjust; if hidden, information asymmetry. Need caution no behavioral data in slides.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Formal veto conditions:
- Physical: dart board geometry/target spacing; if covariance scale > target spacing, action set degenerates.
- Biomechanical: fatigue/tremor nonstationarity; if Σ_t ≠ Σ, p_t not stationary, Bellman value not valid.
- Weather: HVAC/humidity; indoor default low risk but if airflow affects flight, p_t varies. Veto if measured calibration drift or covariance heterogeneity. Proof sketch: equality E_w[T|c*]=E_s[T] depends on transition kernel; perturb p→p+δp, expected value changes by δV = (I-γP)^{-1} δP V; generic δ gives nonzero, breaking equality. Need mention γ? In stochastic shortest path no discount, but can use absorbing MDP; formal. Maybe use linear sensitivity. If p changes by δ, c* may not equalize. Need exact proof? We can state "A sufficiency veto proof: if p is nonstationary, the Bellman operator changes; the fixed point V* changes; credits c* solving equality for old kernel is not guaranteed for new kernel unless equality condition invariant under δp, which is non-generic." That's acceptable.

6. RLVR_COUNTERFACTUAL_VETOES: 3 scenarios. Need predictions. Use verifiable rewards. Ensure no betting. Scenario 1: Calibration holdout. Veto if ECE > 0.03 or likelihood ratio p<0.01? Use p-value. Prediction. Scenario 2: Turn-structure ablation. Veto if win probability deviation >0.05 from 0.5 in 10,000 simulated matches. Prediction. Scenario 3: Credit cap and uniqueness. Veto if for ε in grid no c∈{0,...,9} achieves expected-throw difference ≤0.5 throws or multiple c; or if dynamic credit equalizes expected throws but win probability deviates >0.05. Prediction. Maybe include scenario 4? Need exactly 3. Good.

Need ensure "RLVR" maybe "verifiable reward" but no mention betting. Fine.

Need total word count. We can estimate. Need at least 1000 words. Our draft likely 2500. Need keep sections clear.

Need maybe use "probability units" not "odds". Avoid "win odds". Good.

Need no "betting" word? The invariant says zero betting lines, never mention spreads/totals/moneylines/odds. It doesn't forbid "betting" but better avoid entirely. Use "match outcome probability". Avoid "wager". Good.

Need "source pages provided, cite exact [PAGE N] markers and verbatim quotes." We should include quotes in every section? At least some. Good.

Need "formal LaTeX equations" with assumptions. Need "exact singularity/breakdown regimes." Need maybe include "assumption: extracted slides do not supply exact credit transition rule; formalization marked with \dagger." Good. Need not pretend exact. Use "inferred from [PAGE 7]–[PAGE 13]".

Potential issue: The user says "DRIVE SOURCE: ... Unknown Authors.pdf" but source page shows authors. We can cite page 1. No problem.

Need maybe mention "GSE + GSI" not necessary.

Let's draft carefully.

Potential equations:

State:
\[
s=(r,c)\in S,\quad r\in\{0,\dots,501\},\ c\in\{0,\dots,9\}.
\]
Units: r points (count), c credits (count). [PAGE 7]

Action:
\[
A=A_{\text{throw}}\cup A_{\text{credit}},\quad |A_{\text{throw}}|=729,\ |A_{\text{credit}}|=62.
\]
[PAGE 9] Note source labels A_aim? It says A_throw? Actual text: 𝐴= 𝐴!"#$% ∪𝐴&#'()! likely A_aim? Need not use exact label? Source page 9: "𝐴!"#$% contains 729 targets..." and "𝐴&#'()! contains the 62 possible board regions..." The labels mangled. Use A_throw and A_credit? But credit in page 11 is 𝒂∈𝑨𝒄𝒓𝒆𝒅𝒊𝒕; throw is A_throw. Action set includes A_aim? Let's infer: A = A_target ∪ A_region? Page 9 "A_aim contains 729 targets" and "A_hit contains 62 possible board regions". Page 11 "a ∈ A_credit" deterministic; "a ∈ A_throw" uncertain. Hmm there are 3 action types? Source page 9: A = A_aim ∪ A_hit? A_aim targets, A_hit regions? Page 11: A_credit deterministic, A_throw uncertain. Maybe A_throw is same as A_aim? Need avoid exact labels. Write:
\[
A=A_{\text{target}}\cup A_{\text{region}},\quad |A_{\text{target}}|=729,\quad |A_{\text{region}}|=62,
\]
with \(A_{\text{credit}}\) deterministic and \(A_{\text{throw}}\) uncertain as in [PAGE 11]. But this could confuse. Simpler: source states union of 729 aim targets and 62 hit regions; separately, credit actions are deterministic and throw actions uncertain. Use generic a∈A. Good.

Transition:
\[
p(s'\mid s,a)=\Pr(S_{t+1}=s'\mid S_t=s,A_t=a)\in[0,1],\quad \sum_{s'}p(s'\mid s,a)=1.
\]
[PAGE 10-11]

Gaussian skill:
\[
X\sim\mathcal N(\mu,\Sigma),\quad X_w\sim\mathcal N(\mu,\epsilon\Sigma),\quad \epsilon=1 \text{ strongest},\ \epsilon>1 \text{ weaker}.
\]
[PAGE 11,14] If coordinates in mm, μ mm, Σ mm², ε dimensionless.

Bellman:
\[
V^\pi(s)=\mathbb E^\pi\left[\sum_{t=0}^{T-1}1\,\middle|\,S_0=s\right],\quad V(s)=\min_{a\in A}\left\{1+\sum_{s'}p(s'\mid s,a)V(s')\right\}
\]
with V(0)=0? Actually if r=0 terminal checkout. Bust absorbing with cost? Need mention terminal/bust boundary inferred. For credit action cost maybe 0; but generic. Mark \dagger. Units: throws. This is expected number of throws. [PAGE 16]

Competitive balance:
\[
\mathbb E_{\pi_w}[T\mid r_0=501,c=0] > \mathbb E_{\pi_s}[T\mid r_0=501,c=0]
\]
[PAGE 16 Definition 1].
Balance:
\[
\mathbb E_{\pi_w}[T\mid r_0=501,c=c^*] = \mathbb E_{\pi_s}[T\mid r_0=501,c=0].
\]
[PAGE 16 Definition 2, PAGE 29].
Fairness:
\[
\Pr(\text{weaker wins}\mid c=c^*) = \Pr(\text{stronger wins}\mid c=c^*) = 1/2
\]
or approximately equal. [PAGE 33, 30]. Note source says "equal probability of winning" not necessarily 1/2 if draws? Darts no draws? Maybe. Use equality; if no ties, sum=1. Good.

Head-start optimized:
\[
h^*=\arg\min_{h\in \mathbb N} \left|\Pr(\text{stronger wins}\mid h)-1/2\right|
\]
[PAGE 22,24]. But source says optimized head-start leaves stronger at disadvantage [PAGE 24]. Good.

Dynamic credit:
\[
c^*=\min\{c\in\{0,\dots,9\}: \mathbb E_{\pi_w}[T\mid r_0=501,c]\le \mathbb E_{\pi_s}[T\mid r_0=501,0]\}
\]
from Theorem 2. [PAGE 16,29]. Good.

State space:
\[
|S|\approx 2\times 10^6 \text{ single player};\quad |S_{\text{two}}|\approx 2\times 10^9 \text{ system}.
\]
Information units:
\[
\log_2(2\times 10^6)\approx 20.93\text{ bits},\quad \log_2(2\times 10^9)\approx 30.90\text{ bits}.
\]
But these are just enumeration labels. Runtime <60 s vs 17 h. [PAGE 33]. Note naive product (2e6)^2 = 4e12 states, ~41.86 bits, not 2e9; gray-zone.

Breakdown:
- If \(\det\Sigma=0\) or \(\epsilon=0\): Gaussian density singular; transition kernel undefined without regularization. 
- If \(\sqrt{\epsilon\lambda_{\max}(\Sigma)}\gg \Delta\) where Δ is target spacing: Gaussian mass spread across adjacent regions; action distinction blurred; policy flat. Exact threshold not in source.
- If \(c^*\notin\{0,\dots,9\}\): cap binds; no feasible credit. 
- If no h satisfies fairness: source says "Still possible that no optimal head-start exists" [PAGE 34].
- If turn feature omitted: source footnote says more complex model includes "players alternate every 3 throws" [PAGE 17]; simplified model may misestimate win probability.
- If \(p_t\) nonstationary: Bellman fixed point invalid.

Need quote exact "Still possible that no optimal head-start exists" [PAGE 34]. Good.

Need "retrocausal genealogy" word count. Include lineage and traps.

Need "recursive theory of mind" maybe include equations? Not necessary, but can. Could define belief \(\hat\epsilon_{-i}\), policy \(\pi_i(a\mid s,\hat\epsilon_{-i},\hat c)\). But avoid overcomplicate. Mention "recursive" in prose.

Need "cross-layer veto" proof. Use equations:
Let \(P\) be transition matrix. Expected hitting time \(V=(I-P_\pi)^{-1}\mathbf1\) for absorbing chain. If \(P\mapsto P+\Delta P\), then \(V\mapsto V+\Delta V\) where \(\Delta V=(I-P_\pi)^{-1}\Delta P V+\cdots\). For generic ΔP, equality \(V_w(c^*)=V_s(0)\) breaks. This is proof. Need mention units. Good.

Need RLVR scenarios with predictions:
Scenario A: "Held-out calibration veto": Given player, estimate \(p(s'|s,a)\) on training; on held-out throws, compute negative log-likelihood and calibration error. Veto if 95% bootstrap CI of mean checkout-throw difference between predicted and observed exceeds 0.5 throws or ECE >0.05. Prediction: if true covariance is nonstationary, dynamic credit overestimates weaker benefit and win probability deviates >0.05. Verifiable.
Scenario B: "Turn-feature ablation veto": Solve one-player simplified MDP and full turn-feature MDP; simulate 10,000 matches using each c*. Veto if |win probability - 0.5| > 0.05 for simplified but full within 0.02. Prediction: ignoring alternating every 3 throws [PAGE 17] shifts c* by at least one credit for ε≥5.
Scenario C: "Credit-cap/uniqueness stress veto": Enumerate ε grid and c∈0..9; compute expected throws and simulated win probability. Veto if no c gives expected-throw equality within 0.5 throws or multiple c; or if expected-throws equality holds but win probability deviates >0.05. Prediction: at high ε, c*=9 cap binds and equality fails. Sources: Theorem 2 unique credits [PAGE 16], cap {0,...,9} [PAGE 7], fairness win probability [PAGE 33]. Good.

Need maybe mention "RLVR" reward verifier: "The verifier is a simulation/empirical harness, not a betting line." Avoid betting word? It says betting line; but invariant says never mention betting lines. If I say "not a betting line" that mentions betting lines, violating? Better avoid "betting". Say "verifier is a simulation/empirical harness." Good.

Need ensure no "odds" string. Check final for "odds". Avoid "goodness" contains "odds"? "goodness-of-fit" has "odds"? It has "goodness" no. "odds" substring in "goods"? no. Avoid "odds". The word "periods"? no. Good.

Need maybe mention "win probability" many times. Allowed.

Need not mention "spreads" etc. Avoid "spread" even in "spread across" maybe invariant says never mention spreads. "spread" could trigger? It says never mention spreads, totals, moneylines, or odds. Avoid "spread" word. Use "dispersed" or "distributed". Avoid "totals" word? "total" maybe in "total variation". Avoid "total" maybe not necessary. Avoid "moneyline". Avoid "odds". Good. Use "probability" instead.

Need maybe avoid "fairness occurs when two players have an equal probability of winning" quote includes "probability" fine.

Need maybe avoid "win odds". Fine.

Need "PAGE N" exact. Use [PAGE 16]. Good.

Need maybe include "verbatim quotes" with ellipses? If quote partial, okay. Use exact fragments. For page 29 exact: "Dynamic credit handicap finds the number of credits where the weaker player and stronger player have the same expected number of turns starting from a score of 501" no period? Source has period. Good.

Need maybe include "professional player’s skill model" exact with apostrophe. Good.

Need "SI/information/probability units". We can explicitly state: "All probabilities are dimensionless in [0,1]; expected throws are counts; covariance entries are board-coordinate squared (mm² if coordinates are mm); entropy in bits; runtimes in seconds; credits are dimensionless counts." Good.

Need final answer only XML sections. Let's write with careful word choice. Need not include markdown? XML tags and LaTeX. Fine.

Need ensure THINK_TRACE is >=400 words. Let's count roughly. We'll make it ~800. Good.

Potential issue: The XML sections include LaTeX with `<` and `>`? Avoid raw `<` in text? XML tags could be broken if using `<` in math? Use `\le` instead of `<`. Use `>`? In XML text, `>` is okay, `<` not. Avoid `<` raw. Use `\le`, `\ge`, `\ll`, `\gg`. Good. Ampersands? Avoid raw `&`; use `\&`? In LaTeX text, `\&` okay. But XML doesn't parse `&` unless escaped. Avoid ampersands or use `\text{and}`. Use "and". Good. Need no raw `<` in text. Use `\in`, `\le`. Good. The tag names contain underscores? XML tag names can include underscores. Fine. Need no `&` in tags. Good.

Need avoid `>` raw? It's allowed in XML text. But fine.

Need use `\mathbb{R}_{\ge 0}` includes `>`? `\ge` no. Good.

Need maybe use `\mid` not `|`? `|` okay. Fine.

Need quote "players alternate every 3 throws" includes no `<`. Fine.

Need "~" okay.

Need "PAGE 33" quote "~ 2 million states" okay.

Need maybe use `\dagger` okay.

Need "N(\mu,\Sigma)" okay.

Need "ε" maybe use `\epsilon`. Good.

Need "A_{\text{throw}}" okay.

Need "p(s'\mid s,a)" okay.

Need "S_{\text{two}}" okay.

Need "10^6" okay. In XML text, `^` okay.

Need "mm²" okay.

Need maybe "±" okay. Unicode okay. But can use LaTeX. Fine.

Need "0.05" okay.

Let's compose final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a 36-page slide deck for a Markov Decision Process (MDP) handicap design for darts. The primitive game rule is fixed: two players start at 501, race to zero, must “check out” by hitting a double and landing exactly on zero, and can “bust” when no checkout is possible [PAGE 2]. The modeling object is a state \(s=(r,c)\), where \(r\in\{0,\dots,501\}\) is remaining score and \(c\in\{0,\dots,9\}\) is remaining credits [PAGE 7]. Actions include aiming targets and perfect-execution board regions; the deck says there are 729 targets and 62 possible board regions [PAGE 9]. Transition probabilities are \(p(s'\mid s,a)\); throw actions are uncertain and use a professional skill model, while credit actions are deterministic “hit desired board region with certainty” [PAGE 11]. Skill heterogeneity is modeled by an execution-error multiplier \(\epsilon\): \(\epsilon=1\) is the strongest player, and \(\epsilon>1\) weaker players use \(\mathcal N(\mu,\epsilon\Sigma)\) rather than \(\mathcal N(\mu,\Sigma)\) [PAGE 14].

The first derivation chain is: define the value function as expected throws to checkout under a policy [PAGE 16]; define competitive balance as equal expected throws for the two players [PAGE 16]; show the weaker player has higher expected throws from 501 with no credits [PAGE 16]; then find a credit count that gives the weaker player “equal or less expected throws” [PAGE 16]. This is a one-player MDP alignment problem, solved by changing the weaker player’s initial credit state until expected throws match. The deck then distinguishes this from fairness: “Competitive balance occurs when two players have an equal number of expected throws to check out” [PAGE 16], while “Fairness occurs when two players have an equal probability of winning” [PAGE 33]. That distinction is the central gray zone. Equal expected throws is not logically equivalent to equal match-win probability unless the full distributions and turn structure are aligned. The deck itself moves from a one-player model with “~ 2 million states” to a two-player model with “~ 2 billion states” and says the latter “Takes 17 hours to solve, high RAM required” [PAGE 33]. The one-player model is a tractable proxy; the two-player model is the fairness object. The source says dynamic credits “reshape the distribution to equalize win probability” [PAGE 32] and that stronger and weaker players have “~equal probability of winning” [PAGE 30], but the exact two-player transition and credit-consumption equations are not fully printed in the extracted slides. Any formal Bellman equation below is therefore a source-anchored reconstruction, not a verbatim slide equation.

A second gray zone is the head-start handicap. The deck says existing darts handicaps use heuristics to give the weaker player a head start [PAGE 3], but the main imbalance is at the end of the game [PAGE 20]. The stronger player “could dominate across all scores (head-start could never balance competition)” [PAGE 20]. The optimized head-start is possible [PAGE 22], but after 10,000 simulated matches the stronger player “wins less than 50% of the time using this handicap” [PAGE 24]. The conclusion says heuristic head-start leaves the weaker player disadvantaged, optimized head-start leaves the stronger player disadvantaged, and “Still possible that no optimal head-start exists” [PAGE 34]. Thus the deck’s own argument is that head-start is structurally inadequate, while dynamic credits are “Guaranteed to always have a value that can balance competition” [PAGE 34]. That guarantee is conditional on the MDP, the credit cap, and the equality criterion; it is not a universal physical guarantee.

A third gray zone is computational accounting. The source states “~ 2 million states” for the one-player model and “~ 2 billion states” for the two-player model [PAGE 33]. A naive Cartesian product of two \(2\times10^6\)-state player models would be about \(4\times10^{12}\) states, not \(2\times10^9\). This is a genuine discrepancy or an implicit reduction: perhaps the two-player model tracks only turn/credit/score summaries, or “system of MDPs” means coupled subproblems rather than a full product [PAGE 33]. Any reproduction must audit this. The deck also notes that results use “a more complex model formulation which includes the turn feature of the game (i.e., players alternate every 3 throws)” [PAGE 17]. If a simplified one-player model ignores that turn feature, the credit chosen by expected-throw equality may not equalize match-win probability. That is a testable veto, not a rhetorical objection.

Finally, the source is a modeling paper, not a biomechanics or weather paper. The Gaussian skill model is a phenomenological execution model; no calibration residuals, covariance stationarity tests, fatigue covariates, or indoor-airflow measurements appear in the slides. The cross-layer audit must therefore say: the MDP is valid conditional on stationary \(p(s'\mid s,a)\) and a calibrated \(\epsilon\)-scaled covariance; it is vetoed for deployment if observed throw kernels drift by target, time, fatigue, or environment. The rest of this response formalizes those conditions and gives counterfactual checks.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s state is
\[
s=(r,c)\in S,\qquad r\in\{0,\dots,501\},\quad c\in\{0,\dots,9\},
\]
where \(r\) is remaining score in points (a dimensionless count) and \(c\) is remaining credits (a dimensionless count) [PAGE 7]. The action set is described as containing 729 targets and 62 possible board regions [PAGE 9], with credit actions deterministic and throw actions uncertain [PAGE 11]. A generic transition probability is
\[
p(s'\mid s,a)=\Pr(S_{t+1}=s'\mid S_t=s,A_t=a)\in[0,1],\qquad \sum_{s'\in S}p(s'\mid s,a)=1,
\]
with probabilities dimensionless [PAGE 10]. The professional skill model is
\[
X\sim\mathcal N(\mu,\Sigma),\qquad X_{\text{weak}}\sim\mathcal N(\mu,\epsilon\Sigma),
\]
where \(\epsilon=1\) is the strongest player and \(\epsilon>1\) is weaker [PAGE 11, PAGE 14]. If dart-landing coordinates are measured in millimetres, then \(\mu\) has units of mm, \(\Sigma\) has units of mm\(^2\), and \(\epsilon\) is dimensionless.

The value function is the expected number of throws to checkout under a policy [PAGE 16]:
\[
V^\pi(s)=\mathbb E^\pi\!\left[\sum_{t=0}^{T-1}1\,\middle|\,S_0=s\right],
\]
so \(V\) has units of throws (a count). A source-anchored Bellman reconstruction is
\[
V(s)=\min_{a\in A}\left\{c(s,a)+\sum_{s'\in S}p(s'\mid s,a)V(s')\right\},
\]
with terminal checkout \(V(0)=0\), bust handled as an absorbing boundary, and \(c(s,a)=1\) for a throw action; credit-action cost is not explicitly printed in the extracted slides, so the exact credit cost is an assumption to audit. The deck’s Definition 1 is: “The weaker player has a higher expected throws to check out when starting from a score of 501 (with no credits)” [PAGE 16]. Definition 2 is: “Competitive balance occurs when two players have an equal number of expected throws to check out” [PAGE 16]. Formally, competitive balance at credit \(c^*\) is
\[
\mathbb E_{\pi_w}[T\mid r_0=501,c=c^*]
=
\mathbb E_{\pi_s}[T\mid r_0=501,c=0],
\]
which matches the dynamic-credit statement: “Dynamic credit handicap finds the number of credits where the weaker player and stronger player have the same expected number of turns starting from a score of 501” [PAGE 29]. Fairness is a different equality:
\[
\Pr(\text{weaker wins}\mid c=c^*)
=
\Pr(\text{stronger wins}\mid c=c^*),
\]
because the deck says “Fairness occurs when two players have an equal probability of winning” [PAGE 33]. If no ties are assumed, both probabilities equal \(1/2\). The optimized head-start benchmark is
\[
h^*=\arg\min_{h\in\mathbb N}\left|\Pr(\text{stronger wins}\mid h)-\frac12\right|,
\]
but the source reports that this leaves the stronger player “less than 50% of the time” [PAGE 24].

Information and runtime units: the deck reports “~ 2 million states” and “~ 2 billion states” [PAGE 33]. As enumeration labels, these correspond to roughly
\[
\log_2(2\times10^6)\approx 20.93\text{ bits},\qquad
\log_2(2\times10^9)\approx 30.90\text{ bits}.
\]
The reported solve times are “Takes < 1 minute” for the one-player model and “Takes 17 hours” for the two-player model, with “regular RAM sufficient” versus “high RAM required” [PAGE 33]. Exact singularity and breakdown regimes are: (i) \(\det\Sigma=0\) or \(\epsilon=0\), where the Gaussian density is singular or degenerate and transition probabilities require regularization; (ii) \(\sqrt{\epsilon\lambda_{\max}(\Sigma)}\gg\Delta\), where \(\Delta\) is target-region spacing, so Gaussian mass is dispersed across adjacent regions and the action distinction collapses; (iii) \(c^*\notin\{0,\dots,9\}\), so the credit cap binds; (iv) no head-start \(h\) satisfies the fairness criterion, which the deck admits is possible [PAGE 34]; (v) omission of the turn feature, since the source says the more complex model includes “players alternate every 3 throws” [PAGE 17]; and (vi) nonstationary \(p_t(s'\mid s,a)\), which invalidates a single Bellman fixed point.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is dynamic programming and MDPs feeding into sports handicap design. The deck cites Chan and Singal’s “A markov decision process-based handicap system for tennis” [PAGE 36], which supplies the credit-handicap idea: deterministically choose the outcome of a single “throw” [PAGE 4]. It cites Haugh and Wang’s “Play like the pros? solving the game of darts as a dynamic zero-sum game” [PAGE 36], which supplies the professional skill model and the strategic darts lineage [PAGE 11]. It cites Chan, Fearing, Fernandes, and Kovalchik on “untangling intention versus execution in tennis” [PAGE 36], which is the ancestry of the \(\epsilon\)-scaled execution-error multiplier [PAGE 14]. Bertsekas and Tsitsiklis supply the probability/MDP foundations [PAGE 36]. Retrocausally, the present darts handicap is a descendant of tennis handicap MDPs, professional darts zero-sum modeling, and intention-versus-execution decomposition; the novelty is applying dynamic credits to darts while comparing head-start, optimized head-start, and credit-based balance.

The multi-week traps are not single-equation errors; they are drift errors that appear after repeated calibration and deployment. Trap one: criterion drift. A team may optimize expected throws because it is tractable, then claim fairness because win probability looks close in simulation. The deck itself separates “equal number of expected throws” [PAGE 16] from “equal probability of winning” [PAGE 33]. Over weeks, small distributional mismatches can accumulate into match-win probability bias even when expected throws match. Trap two: endgame drift. Head-start handicaps are tempting because they are simple, but the source says the “Main imbalance at end of game” and that a head-start “could never balance competition” [PAGE 20]. A weekly heuristic that gives points at the start may look fair in casual play while leaving the endgame checkout advantage untouched. Trap three: model-drift. The Gaussian skill model is stationary by construction; human throwing covariance can change with fatigue, pressure, and practice. If \(\Sigma\) changes across sessions, the fitted \(\epsilon\) is not a stable skill coordinate, and the credit recommendation drifts. Trap four: computational drift. The one-player model is fast, but the two-player fairness object is far larger [PAGE 33]; repeated re-solving may force approximations that silently change the equality being tested. Trap five: simulation drift. The deck uses 10,000 simulated matches [PAGE 23]; repeated 10,000-match experiments have Monte Carlo error, so a reported “~equal probability” [PAGE 30] needs confidence bounds and repeatability checks. Trap six: policy drift. Dynamic credits reshape the distribution [PAGE 32], but if players change policy after receiving credits, the original optimal policy is no longer the behavioral policy. The lineage therefore warns that a handicap is a mechanism, not a one-time calibration.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Recursive theory of mind enters because darts is alternating, strategic, and credit-dependent. The deck’s full model includes “players alternate every 3 throws” [PAGE 17], so each player’s belief about the opponent’s \(\epsilon\), checkout policy, and credit use affects timing. A player models the opponent’s likely checkout attempt; the opponent models that model; credits alter the endgame distribution [PAGE 32]. In that recursion, three failure modes matter. First, crisis habit regression: under mismatch or pressure, a weaker player may abandon the computed policy and regress to a simple heuristic, such as chasing a familiar target or overusing a credit early. The MDP policy is optimal only if executed; the deck’s policy is a model object, not a guarantee of human compliance. If regression occurs, the equalized expected-throws condition [PAGE 16] no longer describes behavior, and the equal-win-probability claim [PAGE 33] is unverified. Second, counter-trap: the stronger player may anticipate the weaker player’s credit policy and choose a policy that denies checkout or forces bust risk. The source cites a dynamic zero-sum darts model [PAGE 36], so strategic interaction is plausible; if both players optimize against each other rather than against a fixed environment, the handicap’s transition kernel is endogenous. A credit system that is public can be countered; a hidden credit system creates information asymmetry and recursive deception. Third, clock: the turn structure every 3 throws [PAGE 17] creates a timing clock. A credit used now changes the distribution of turns remaining; a player who models the opponent’s clock may delay or accelerate checkout attempts. The recursive belief state is therefore not just score and credits but also beliefs about the opponent’s remaining turns and credit reserve. The deck’s simulations show “~equal probability of winning” under its policy assumptions [PAGE 30], but no human belief-updating data are reported. The correct adjudication is: use the MDP as a normative clock, test whether humans regress or counter-trap, and veto fairness claims when observed policies deviate from the assumed optimal policies.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is a sufficiency test: the MDP handicap is accepted only if the physical, biomechanical, and environmental layers preserve the transition kernel \(p(s'\mid s,a)\). Physical layer: darts is played on a fixed board with finite target regions. If the Gaussian landing covariance is so large relative to target spacing that the chance of hitting the intended region is nearly independent of the aim target, the action set’s 729 targets and 62 regions [PAGE 9] lose discriminating power; the policy becomes nearly flat and credits cannot reliably shape checkout distributions. This is a physical resolution veto, not a mathematical error. Biomechanical layer: the model uses a single \(\epsilon\)-scaled covariance \(\mathcal N(\mu,\epsilon\Sigma)\) [PAGE 14]. If fatigue, tremor, stance, or release variability makes \(\Sigma_t\) time-varying or target-dependent, then \(p_t(s'\mid s,a)\neq p(s'\mid s,a)\). For an absorbing Markov chain with transition matrix \(P_\pi\), the expected hitting time solves \(V=(I-P_\pi)^{-1}\mathbf 1\). If \(P_\pi\mapsto P_\pi+\Delta P\), then generically
\[
V\mapsto V+(I-P_\pi)^{-1}\Delta P\,V+\cdots,
\]
so the equality \(V_w(c^*)=V_s(0)\) that defines competitive balance [PAGE 16] is not invariant under a generic \(\Delta P\). A biomechanical drift therefore vetoes the claim that a fixed \(c^*\) remains fair. Weather layer: the source provides no weather or airflow data and darts is typically indoor. The correct adjudication is not to assert a weather effect but to set a veto condition: if humidity, temperature, or ventilation measurably changes flight or release, then the stationary \(p(s'\mid s,a)\) assumption fails. The proof is the same sensitivity argument: a nontrivial \(\Delta P\) changes the value function, and unless the equality is exactly preserved, the credit balance breaks. Under controlled indoor conditions with calibrated residuals, the veto is not triggered; under uncontrolled conditions, the model is descriptive only. The deck’s own caveats support conditional acceptance: head-start can fail structurally [PAGE 34], and the two-player model is computationally demanding [PAGE 33]. Thus the cross-layer proof is: no stationary kernel, no fixed-credit fairness guarantee.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Held-out transition-calibration veto. Train the Gaussian skill model and the credit policy on one session; on a held-out session, estimate \(p(s'\mid s,a)\) and compute calibration error and negative log-likelihood. Veto the handicap if the 95% bootstrap interval for the mean checkout-throw difference between predicted and observed exceeds 0.5 throws, or if expected calibration error exceeds 0.05. Prediction: if the true covariance is target-dependent or session-dependent, the fitted \(\epsilon\) will overstate the weaker player’s benefit, and the dynamic credit \(c^*\) will produce match-win probability deviation greater than 0.05 from equality, despite matching expected throws on the training session [PAGE 16, PAGE 33].

Scenario 2 — Turn-feature ablation veto. Solve two policies: one from the simplified one-player MDP and one from the more complex model that includes “players alternate every 3 throws” [PAGE 17]. Simulate 10,000 matches for each \(c^*\) as in [PAGE 23]. Veto the simplified policy if its simulated match-win probability departs from equality by more than 0.05 while the turn-feature policy is within 0.02. Prediction: for \(\epsilon\ge 5\), ignoring the alternating-turn clock will shift \(c^*\) by at least one credit in a substantial fraction of player pairs, because the endgame checkout timing changes the value of a credit.

Scenario 3 — Credit-cap and uniqueness stress veto. Enumerate \(\epsilon\) on a grid and \(c\in\{0,\dots,9\}\) [PAGE 7]. Compute expected throws and simulate match outcomes. Veto the guarantee if no \(c\) achieves expected-throw equality within 0.5 throws, or if multiple \(c\) values satisfy equality, or if expected-throw equality holds but match-win probability deviates by more than 0.05. Prediction: at large \(\epsilon\), the cap \(c=9\) binds, so equalization fails; at small \(\epsilon\), multiple credits may satisfy the expected-throw tolerance, weakening the “unique number of credits” claim [PAGE 16]. This scenario directly tests the source’s guarantee language [PAGE 34] against the finite credit domain and the fairness definition [PAGE 33].
</RLVR_COUNTERFACTUAL_VETOES>