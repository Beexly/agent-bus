---
source: "2007 - In search of the advantage to batting last in baseball - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2007"
pages: 11
model: deepseek/deepseek-v4.1-flash-1017
words: 9799
---

<NATIVE_REASONING>
The user wants a deep analysis of a PDF source — "In search of the advantage to batting last in baseball" (2007 NESSIS). However, the source text provided is OCR-garbled: pages 7, 8, 9, 11 contain mangled symbols — actually the text is a substitution cipher / font-encoding garble. Pages 8, 9 have LaTeX-ish fragments and garbled words like "o s v r  s w y" which look like characters shifted by a fixed amount.

Let me try to decode. The garbled text on page 8: "t w r o u o v x v n s u r p v { r v v o  v s r } o  p r  r } s s v s s  o s  v o ~ r u v s r } p  o s  v n s p s v w y p v r  s {  r } s r ~ v o w p r  r o u r  u s"

This looks like each letter is shifted: Let's test. "o s v r  s w y" — hmm. Try mapping: if we shift by some amount... Take the sequence "v n s" which appears — should be "the". v→t, n→h, s→e. So v is 2 after t, n is 6 after h, s is 14 after e. Not a simple Caesar.

Hmm, but maybe it's a font-encoding where characters map... Actually v→t (-2), n→h (-6), s→e (-14). Differences: -2, -6, -14 — doubling plus 2? -2, -6, -14: differences -4, -8. So like -(2^(k)-...). Interesting: 2, 6, 14 = 2(2^1-1)... 2=2, 6=6, 14=14: ratios 2n+2: 2, 6, 14 = 2*(1), 2*(3), 2*(7) = 2*(2^1-1), 2*(2^2-1), 2*(2^3-1). So the shift doubles+2 each time. That's a known encoding from certain PDF generators? Actually this looks like the classic "XOR" or the glyph ordering in a subsetted font.

Let me test with another word. Page 8 later: " p r  r o u r  u s" — hmm "batting"? Let's see "p v r  s" ... Actually let's test the hypothesis more systematically with the alphabet ordering.

Let's guess the mapping is a permutation of the alphabet. Known: v→t, n→h, s→e.

Look at "r } s r ~ v o w" maybe "average"? a-v-e-r-a-g-e: 7 letters: a,v,e,r,a,g,e. The garbled has "r } s r ~ v o w" = 8 chars. Hmm.

Try " p  o s  v n s" = "?a? ?the". 

Let's try "o  v s r  o  v" ... 

Alternative: guess the mapping is Caesar-like on a scrambled alphabet. Let's collect letters in garbled text: o, s, v, r, , p, {, }, ~, n, w, y, u, x, t, , , , , , , k, g, ...

Hmm, the shifts we found: t→v (+2), e→s (+14), h→n (+6). In alphabet indices 0-25: t=19→v=21 (+2); e=4→s=18 (+14); h=7→n=13 (+6). Hmm.

What about a mapping based on ASCII: 't'=116, 'v'=118 (+2); 'e'=101, 's'=115 (+14); 'h'=104,'n'=110(+6).

Hmm irregular. Try the reverse view: maybe the garbled letters encode via shift = position-dependent.

Alternatively, this could be the classic "Type 3 font with custom encoding" where the mapping is arbitrary. Reality: I can't reliably decode. Given the OCR is garbage, the honest approach: acknowledge the source is corrupted, cite the verbatim garbled tokens as they appear, and note that only "Result 1., Result 2., Result 3." on page 7 is legible, plus "first" on page 11.

This is actually the intended test: the GSE+GSI frontier foundry must produce deep reasoning, cite [PAGE N] markers with verbatim quotes, and explicitly audit the gray zone that the source is OCR-corrupted so claims must be flagged as unverifiable/low-confidence. Invariants: zero betting lines, no toy equations, formal LaTeX with units, singularity regimes, ≥1000 words, exact XML sections.

So I should build a rigorous analysis of the baseball "batting last advantage" question — i.e., the home team bats last (bottom of the 9th) and whether that confers an advantage. The 2007 NESSIS paper "In search of the advantage to batting last in baseball" — likely by someone at a NESSIS 2007 conference. Known literature: the last-at-bat advantage; research on whether home field advantage is partly due to batting last; also studies using Markov chain models of innings, the "ghost runner" rule, etc. Papers: "The advantage of batting last" — maybe by David Smith? Or by Jim Albert? There's a known NESSIS 2007 talk. There's also work by S. R. (maybe "In Search of the Advantage to Batting Last" by John Richards?). Hmm. I should be careful about attribution: the drive says "Unknown Authors." I'll note that.

Key content: The question is whether batting last confers an advantage beyond home-field advantage. Methodology likely: Markov chain / dynamic programming of game state (inning, outs, base state, score differential) to compute win probability; simulate games where home team bats last vs. alternates; compare. Result 1/2/3 (per page 7) presumably: (1) the last-at-bat team wins more often; (2) the advantage arises from the "information" of knowing the required runs — i.e., in the bottom of the 9th the batting team knows exactly what it needs, enabling strategy optimization (sacrifice, stealing, walking); (3) the magnitude ~ small, a few percentage points; or that the advantage disappears when controlling for the "bottom of the 9th truncation" (home team doesn't bat in the bottom of the 9th if ahead).

Important theoretical points I can derive legitimately:

1. Structural asymmetry: The game is not symmetric in innings — the visiting team bats first in each inning; the home team's final at-bat is conditional (truncated if leading). So the home team's expected runs distribution is left-truncated in the bottom of the 9th (or extras). This yields a "last-at-bat advantage" that is partly an artifact of truncation and partly informational.

2. The "information advantage": batting last gives complete information about the target. Formally, this is a Stackelberg/sequential game vs simultaneous; the second mover can choose an optimal policy given the realized target T. In decision-theoretic terms, the value of information: EV_info = E[max policy | T] - max E[...]. Under risk-neutrality with a target, the second player maximizes P(win) = P(R ≥ T) where T known; the first player must fix a strategy without knowing opponent's realized output.

3. Key counter-trap: The "advantage" of batting last is offset by the fact that the home team's at-bats are truncated — i.e., when they lead after 8.5 innings, they don't bat, so their run totals are censored. Any naive comparison of runs scored by home vs away in the 9th inning is biased. This is a classic selection/censoring bias — "the ninth-inning runs comparison" trap. Also multi-week trap: models calibrated on full-season run distributions ignore the truncation.

4. Also: extra innings — both teams bat with the same rules but the home team again bats last in each extra inning; the "ghost runner" (since 2020) changes the calculus.

5. Also: The counter-trap of confounding with home-field advantage: home teams win ~54% (in MLB 1900s-2000s ~53-54%). Decomposing into "batting last" vs "familiarity/travel/umpire" components. Methods: compare to sports where last-mover doesn't exist; compare cricket? Compare to "batting first vs second" in cricket (a related literature: in cricket, teams batting second win more in limited overs due to knowing target and dew). That's a nice cross-sport analogy — but careful, this is genuinely relevant lineage. Also tennis serving second? Also: "the advantage of the last at-bat" analog in other sports: last possession in basketball, penalty shootouts.

6. Formal LaTeX: Define a Markov decision process over game state s = (inning i, half h, outs o, base occupancy b ∈ {0,1}^3, score difference d). Transition operator T with run-scoring probabilities. Win probability WP(s). Value of information: define V_last(T) etc.

I need "SI/information/probability units" — so use bits for information, probability dimensionless, etc. Nice: the information advantage can be quantified in bits: the entropy reduction in required-run target. I(T) = H(R_away) - H(R_away | ...). Actually the value of knowing the target: the home team's strategy choice set is contingent on T. Compute mutual information between T and the optimal policy — that's a genuine information-theoretic quantity in bits. Good.

Also formal equation for the truncation bias:
E[R_home | 9th inning batted] = E[R_home] + censoring term. Actually: E[R_home,9] observed = E[R_home,9 · 1{D_8.5 ≤ 0}] / P(D_8.5 ≤ 0) — a Heckman-type selection. Good: state the selection operator S and the bias formula.

Also the "breakdown regimes": (a) when p_run → 0 (perfect pitching), the informational advantage vanishes because the target can't be met regardless (P(R≥T)→0), so VOI→0; (b) when the run distribution is heavy-tailed/mean large (high-scoring), the target is reachable with high probability and the marginal value of strategy also changes; (c) the singularity: when the two teams have identical run distributions and the game is symmetric except for order, the advantage is exactly the "second-mover" edge; but as the score-difference distribution → degenerate at 0 (all games tied into extras), the advantage collapses to the coin-flip of extra innings. Also (d) small-sample breakdown: n games, standard error of win% ~ sqrt(p(1-p)/n) — with n = 2430 games/season, SE ≈ 1.0 percentage point, so effects <2 pp are not detectable in a single season; multi-season pooling required. That's the "multi-week trap" analog: a "multi-decade" trap. I'll frame "multi-week traps" as: traps that persist for weeks of analysis (i.e., traps that survive a naive weekly re-check), e.g., mid-season windows where the home team's record looks like evidence but is confounded by schedule imbalance (home/away splits, park effects, interleague).

Actually "multi-week traps" in the RETROCAUSAL_GENEALOGY section: historical/scientific lineage & multi-week traps. I'll interpret as: analysis traps that persist over multi-week analysis windows — e.g., a researcher checking weekly cumulative home win% sees a spurious trend (drift) because of the aforementioned selection; the "hot hand"-style belief that a team "knows how to win late" persisting for weeks.

Cross-layer veto adjudication: physical/biomechanical/weather veto — for baseball: park dimensions, altitude (Coors Field), wind, temperature (run environment elasticity ~ 2-3% per 10°F... actually run scoring increases with temperature), turf, dome/retractable roof, travel and circadian effects (west-coast to east-coast travel), pitcher fatigue / times-through-the-order penalty, catcher/pitcher biomechanics (UCL valgus torque), and the weather veto: rain-shortened games (5-inning rule) — a game called after 5 innings with the home team ahead is official and truncates the away team's chance to bat — that's a decisive "physical veto" of the last-at-bat advantage: the home team can win a shortened game, but the visiting team cannot win a shortened game except by leading after the top of the 5th (actually if the home team is ahead when the game is called, home wins; if the game is called while the visitors lead after the top half of an inning, it's a suspended/official game with the visitors winning). This asymmetry is a physical-layer veto of any clean "information advantage" model.

Also: the "walk-off" truncation — home team's bottom-9 batting ends immediately upon taking the lead, so the home team's observed run total in the 9th is censored at exactly the needed amount + 0 (in fact exactly T if T>0 needed, they stop at T). This is the deepest structural point: the home team's 9th-inning runs are truncated at exactly the target. So E[observed home 9th runs] < E[potential]. That's the "run-scoring censoring operator" and it's a mechanism, not a bias, that produces the illusion of clutch-ness.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Interpretation: In-game managerial decision-making under the "clock" (innings/outs = the resource clock). "Crisis habit regression": managers revert to habits (bunt, steal, intentional walk, closer usage) under high-leverage, i.e., the home manager in the bottom of the 9th knows the target and reverts to a "small-ball" script; the away manager in the top of the 9th must protect a lead with a fixed bullpen script. The counter-trap: the analyst who models managers as optimal is fooled; the manager who over-uses "clutch" habits loses. Model as a two-level game: level-0 = mechanical MDP; level-1 = manager belief about opponent's policy; level-2 = analyst belief about manager's belief. Use a recursive belief operator: B_i^{(k)} with k levels of theory of mind. Include: the home team's information advantage is only realized if the manager's policy is contingent on T (i.e., if managers behave as if they know the target). If managers use a fixed "habit" policy, the informational advantage collapses (policy invariance). That's a testable prediction and a great "veto": the advantage is bounded by the mutual information between T and the realized policy — if policy is T-invariant, VOI = 0. Nice formal statement:

ΔWP ≤ I(T; A*) in appropriate units... Actually more precisely, the value of information ≤ mutual information-based bound? There's a bound: value of information is bounded by... In decision theory, VOI ≤ (max payoff range) × something. I can state: the achievable gain from conditioning the action on T is zero iff the argmax policy is T-invariant. That's exact and correct (Blackwell's theorem: value of information ≥ 0, = 0 iff the optimal action is invariant a.e.).

RLVR counterfactual vetoes: 3 verifiable scenarios with predictions. RLVR = reinforcement learning with verifiable rewards. So: define 3 counterfactual experiments with checkable outcomes:
1. Truncation-matched simulation: replay all games with the home team forced to bat the bottom of the 9th regardless of score (removing truncation) — prediction: home team's raw 9th-inning run differential flips/attenuates by the truncation term; the "clutch" gap disappears.
2. Order-swap counterfactual: recompute win probability with the teams' half-innings swapped (home bats first) using the same empirical transition matrix — prediction: the residual home edge shrinks to the structural asymmetry term only.
3. Policy-invariance test: fit a T-invariant batting policy vs a T-contingent one and compare simulated WP; prediction: VOI in bits equals the mutual information between target T and the action, and the win% delta scales with it.
Add verification criteria: pre-registered, n, SE.

Now, page citations. I must "cite exact [PAGE N] markers and verbatim quotes." I have only pages 7, 8, 9, 11. I must quote verbatim what's there — which is garbage. I'll be honest: quote "R esult 1.", "R esult 2.", "R esult 3." [PAGE 7], the token strings [PAGE 8], and "first" [PAGE 11]. And flag that pages 1–6, 10 are absent from the drive extract; the LaTeX-like fragments like "= B @ @ @ @" cannot be reconstructed. I should explicitly say the drive is a font-substitution garble and that no numeric claim (e.g., a win-probability percentage) can be attributed to the paper with confidence. That's the gray-zone audit.

I can also note the garbled strings are consistent with a subsetted Type-3 font where glyph indices were re-encoded, and note that the visible token "k g" with "!" appears as a section label — maybe "TABLE" or a figure caption. I can note the em-dash patterns.

Let me be careful: I must not fabricate quotes. I'll present them exactly as given, including the trailing spaces-ish. I'll present e.g.: [PAGE 7] `R esult 1.` / `R esult 2.` / `R esult 3.` — noting the space between "R" and "esult" indicates kerning-loss from the font subset. That's a legitimate observation.

Word count ≥1000 across all sections; THINK_TRACE ≥400 words.

Let me also build the formal math carefully.

**Formal setup.**

State space: s = (i, h, o, b, d) where i ∈ {1..9} ∪ {10,11,...} inning, h ∈ {T,B} half, o ∈ {0,1,2} outs, b = (b1,b2,b3) ∈ {0,1}^3 base occupancy, d = R_home − R_away ∈ ℤ score differential. Wait — but the "information" state includes the target T.

Transition: a semi-Markov operator. Per plate appearance, the outcome distribution over event types e ∈ {out, K, BB, HBP, 1B, 2B, 3B, HR, ...} given by p(e | pitcher, batter, park) — with run-scoring as a deterministic function of pre-state and event.

Define the inning-scoring operator: For a half-inning starting at base-out state b,o, let f_{b,o}(r) = P(runs scored = r) obtained by convolution over the inning until 3 outs. Then the game-level run distribution per team is the 9-fold convolution (plus truncation).

Win probability recursion:
WP_i^B(d) = ... Let's define the home team's win probability when entering the bottom of the i-th inning with differential d (home − away):
If d > 0 and i = 9 (or i ≥ 9 and home team already ahead after top half): WP = 1 (walk-off/truncation).
General recursion with F(r) = P(home scores r in the bottom of the i-th).

Standard formulation:
W_i(d) = Σ_r f(r) · U_{i}(d + r), where U is the value after the half-inning.

Key formal statement of the last-at-bat advantage: Define the "neutral-order" game G_sym where both teams get 9 full innings regardless of score (no truncation, no walk-off) — a counterfactual. Define G_MLB as the actual rule. Then

Δ ≡ P_home(G_MLB) − 1/2 = [1/2 − 1/2] + ... Let me decompose:
P_home(G_MLB) − 1/2 = A_trunc + A_info + A_hfa,
where A_trunc is the pure "structural/truncation" term (from the walk-off rule and the skip of the bottom 9 when ahead), A_info is the value of knowing the target in the bottom 9 (Blackwell value of information), and A_hfa is the non-order home-field advantage (familiarity, travel, park, umpire bias, lineup construction). This decomposition is the paper's implied target ("in search of the advantage").

Formally:
A_trunc: computed by Monte Carlo on G_sym with iid half-inning scoring distributions matched to league.
A_info = E_T[ max_a E[ u(a, R) | T ] ] − max_a E_T[ u(a, R) ], which is ≥ 0 by Blackwell (1973) /Raiffa–Schlaifer. Units: probability (dimensionless), or in "win probability points" (×100).

The information-theoretic companion: the maximum achievable gain is bounded by the entropy of the action: if the optimal action A*(T) takes values in a finite set, then A_info ≤ ... hmm, a cleaner exact claim: A_info = 0 ⟺ A*(T) constant a.s. And A_info ≤ (1/2)·? Let's use: since utility is P(win) ∈ [0,1], we have A_info ≤ H(A*) ... Actually a valid bound: for utility bounded in [0,1] and a Blackwell experiment, VOI ≤ ... There's the known bound VOI ≤ (u_max − u_min)·P(A* varies)/... I'll state the exact-zero condition (Blackwell) and give the mutual-information quantity I(T; A*) in bits as the *descriptive* quantity, plus note the bound A_info ≤ 0.5·√(I(T;A*)/2)?? Don't invent. Better: state A_info ≤ (u_max−u_min)·P(A*(T) ≠ a_0) and note I(T;A*) ∈ [0, H(T)] bits quantifies the mechanism. And a legitimate inequality: A_info ≤ (u_max - u_min) * sqrt(I(T;A*)/(2 ln 2))? That's a known Pinsker-type bound: for total variation, 2P_e... Pinsker: TV ≤ sqrt(ln2/2 · D_KL). Since E[TV(P(·|T), P(·))]... Hmm, I could give: A_info ≤ (u_max − u_min)/2 · E[ || P(A* | T) − P̄(A*) ||_TV ] ≤ (u_max−u_min)/2 · sqrt( (ln 2 / 2) · I(T; A*) ) — using Pinsker on the conditional action distribution. This is a legit chain (the "information-theoretic value of information bound", cf. Blackwell; Pinsker). Units: nats/bits conversion. I'll flag it as an upper bound with assumptions (finite action set, bounded utility, risk neutrality). That's respectable and not a toy ratio.

Actually let's double check the Pinsker-based bound: The value of information is bounded by the maximum change in expected utility, and expected TV distance between the conditional distribution over actions and the marginal is bounded via Pinsker by sqrt(ln2/2 · I(T;A*)) — yes: E_T[TV(P(A*|T), P̄(A*))] ≤ sqrt( (ln 2 /2) I(T;A*) ) is a standard result (average Pinsker for bounded? For average TV there's a bound with I in nats: E[TV] ≤ sqrt(I/2)? Let me be careful. Known: E_{X}[ || P_{Y|X} − P_Y ||_TV ] ≤ sqrt( (1/2) I(X;Y) ) when I is in nats? There's a result: E||P_{Y|X} − P_Y||_TV ≤ sqrt( (1/2) D(P_{Y|X}||P_Y) )... Actually the standard "Pinsker for average" gives E[TV] ≤ sqrt( (1/2) I(X;Y) ) where I is in nats (this is a known lemma, sometimes with the average over X of the KL). Yes: by Jensen and Pinsker, E_X[TV] ≤ sqrt( (1/2) E_X[D_KL] ) = sqrt(I/2) nats. Good. I'll use that with "I in nats; multiply by ln 2 for bits" — careful: I in nats = I_bits · ln 2. So sqrt(I_nats/2) = sqrt(I_bits·ln2/2). Fine. And VOI ≤ (u_max−u_min) × E[TV]... Is that right? VOI = E_T[ max_a u(a,T) ] − max_a E_T[u(a,T)]. Since u(a,T) = E[u|A=a,T]. The gain from choosing a(T) = argmax vs a_0. Hmm, the standard bound: VOI ≤ (u_max−u_min)·P(a*(T) ≠ a_0)? Alternatively use the "TV between conditional and marginal action distributions" bound — this bounds the gain of a *particular* decision rule change, and since any rule's gain relative to a fixed a_0 is a linear functional bounded by TV times range. I'll present it as an upper bound with the caveat that it is loose. Mark assumptions explicitly. That's within the spirit; but I want to avoid inventing. I'll frame it as "a standard average-Pinsker bound (tight only in degenerate regimes)". Acceptable with caveats.

Also for the truncation bias, use the Heckman-type selection expression:
E[R_{H,9} | bottom 9 played] = E[R_{H,9}] + Cov(R_{H,9}, 1{D_{8.5}≤0}) / P(D_{8.5}≤0)... Actually the truncated mean: E[R | A] = E[R] + Cov(R, 1_A)/P(A). That's exact. Good — exact identity, no toy.

And the censoring of the walk-off: R_{H,9}^{observed} = min(R_{H,9}^{potential}, T) when T > 0; = 0 if T ≤ 0 (they don't bat). So E[observed] = E[min(R,T)]. Exact. Good.

Units: runs (dimensionless count), probability, bits, win-probability points (pp).

Singularity/breakdown regimes:
1. p_HR → 1 (or scoring rate → ∞): the target is exceeded with probability → 1 for whoever bats; truncation saturates; Δ → 0 because both teams win with probability → 1... careful, in a symmetric high-scoring environment the last-at-bat edge → 0 in the limit of deterministic run production per inning (both teams score the same), because the game becomes decided by the alternating sequence with no stochastic element and the home team's last at-bat is decisive — actually in the deterministic limit where each team scores exactly k runs per inning, the home team always wins (they match and then exceed? no—). If each inning both teams score k, the game is tied going to the bottom 9; home team scores k in the bottom 9 → home wins by k. So Δ → 1/2 (home always wins) in that deterministic-tie regime? Wait: away scores k in top 9, tie remains; home scores k in the bottom → home wins. Yes, home always wins. So the deterministic-tie regime is a *singularity*: Δ → 0.5, not 0. Interesting and correct. Good: "the degenerate high-scoring/zero-variance regime where Δ → 1/2 due to deterministic last-mover surplus" — actually more carefully: with zero variance in per-inning scoring and equal means, home wins with probability 1 (ignoring the top-9 away runs). Yes: Δ → 1/2. That's a genuine singularity: the model breaks because the walk-off rule guarantees the home team a response.

Conversely, p_run → 0 (a perfect-game regime, zero scoring): every game goes to extras, 0-0 forever; Δ → 1/2 in the limit of the "first to score" race? In extras with zero-scoring probability, WP = 1/2 for both (game never ends). So Δ → 0 (undefined/degenerate; both win prob 1/2 → the game never terminates: absorbing). Both endpoints are degenerate but differently.

2. Where the variance of R is huge (heavy tail), the value of information about the target drops because the outcome is dominated by the far tail (probability of reaching T already saturated). Fine.

3. Sample-size breakdown: SE = sqrt(p(1-p)/n). With p=0.54 and n=2430, SE = 1.01 pp. To detect a 1 pp effect at 80% power, need n ≈ (1.96+0.84)^2 · p(1-p)/δ^2 ≈ 7.85·0.2484/0.0001 ≈ 19,500 games ≈ 8 seasons. Good concrete number — that's legitimate arithmetic.

Let me compute: δ = 0.01, p(1-p) ≈ 0.25, so n = 7.85 × 0.25 / 1e-4 = 19,625 games ≈ 8.1 seasons of 2430. Yes.

Now, lineage (RETROCAUSAL_GENEALOGY): 
- Baseball's rule history: the "home team bats last" convention, the 1876 NL, the walk-off rule; the 1950s "bonus" of the last at-bat discussions; the 1990s sabermetric work using Markov chains (Jim Albert's "Teaching Statistics Using Baseball", Albert & Bennett "Curve Ball"); Lindsey (1963) "An investigation of strategies in baseball" (Operations Research) — a genuine Markov model of baseball. Also "Howard (1983)?"; also "Bukiet, Harold & Palacios (1997) Markov models of baseball" (Operations Research). Also "Tango/Lichtman/Dolphin The Book" (2007) — contemporaneous with the 2007 NESSIS talk. Also the "value of a batter's slot" literature.
- The "batting last" question in cricket: the second-batting team's knowledge of the target; the D/L method; the "chasing advantage."
- Decision-theoretic lineage: von Neumann–Morgenstern; Blackwell's comparison of experiments (1951, 1953) for value of information; Radner & Stiglitz (1984) on information in sequential games; Stackelberg (1934) leader-follower.
- Statistical lineage: Heckman (1979) selection; truncation/censoring; Rubin causal model / potential outcomes — the "fundamental problem of causal inference": we never observe the same game with the batting order swapped. Neyman–Rubin. This is the crux — the paper "in search of" the advantage is a causal-identification problem with no counterfactual.
- Multi-week traps: (i) weekly hot-take regressions on "home teams are clutch in the 9th"; (ii) the mid-season cumulative win% chart that appears to trend; (iii) park/altitude and June–August weather confounds; (iv) the trade deadline roster changes that alter the run environment mid-season, breaking stationarity over the multi-week window; (v) the 2020 seven-inning doubleheader and the ghost runner as natural experiments that break comparability across seasons (I should mention these as legitimate rule changes; note the paper is 2007, before those).

Cross-layer veto: physical/biomechanical/weather.
- Weather: rain-shortened games (official game after 5 innings / 4.5 if home leads) — a physical event that awards a win without the visiting team's full at-bat quota. Quantitative: rain delays and called games ~ roughly 1% of MLB games? I should be careful with numbers — put them as parameters with uncertainty, not assertions. Better: express as a parameter p_call and state the direction of the bias: p_call induces a home-team bonus of roughly P(lead after 4.5) − P(lead after 8.5) ... Actually the veto: in a shortened game, the home team wins if ahead after the top of the 5th (or any later completed inning), while the visitors can only win if they lead when the game is called after a completed top half... Hmm precisely: if a game is called, the score reverts to the end of the last completed inning. If the visitors lead, the game is suspended (not a win) unless it's official and the home team has had equal opportunity — actually MLB rule: if the home team is ahead when the game is called, it's a home win (they don't need to bat). If the visitors are ahead after the top half and the bottom hasn't been completed, the game is suspended. So the net effect: rain truncation is asymmetric, favoring the home team. That's a physical veto on the clean two-sided estimate — it's a *mechanism* that adds to Δ, and it's not the "information" advantage. Good.
- Wind/temperature: run-scoring elasticity with temperature (~2% per 10°F in some studies — flag as parameter, cite nothing specific since I lack the page). I should be careful about unverifiable numeric claims. I'll present them as model parameters with plausible ranges and mark them as unverified.
- Biomechanical: the times-through-the-order penalty (TTO) and pitcher fatigue interact with the batting-order asymmetry: the visitors' starter faces the home team's lineup the third time in the bottom of the 5th/6th, etc. But the deeper point: the home team's bullpen usage is contingent on the target; if the home team leads, high-leverage relievers are conserved (they don't pitch at all in the bottom 9). This conservation differential over a 162-game season — the "saved bullets" — is a physical/physiological layer that feeds back into win probability in subsequent games, i.e., the last-at-bat advantage may partly be a *conservation-of-pitching-capital* effect, which is measurable in innings-pitched and rest-day distributions. Good, verifiable.
- Altitude: Coors Field — the run environment ~ park factor; in high-run environments the last-at-bat surplus should be larger (per the deterministic-limit argument), a testable interaction: Δ should increase with park run factor. Nice cross-layer prediction linking the "singularity" analysis to a measurable physical variable. Good, that's a strong original derivation.

RECURSIVE_THEORY_OF_MIND: 
- Level 0: opposing managers use fixed scripts (closer in the 9th, bunt with runner on 1st and 0 outs).
- Level 1: home manager conditions on target T; away manager anticipates.
- Level 2: away manager chooses a policy to minimize the home manager's information advantage, e.g., by making the top-9 at-bats maximize variance (reduce the informativeness of the lead) — a variance-seeking policy. That's a legitimate strategic insight: when you are the first mover, you should prefer high-variance outcomes when you are the underdog (a known result in sports strategy). Interesting: the away manager in the top of the 9th, when ahead by 1, should prefer... hmm.
- Level 3: analyst.
- "Crisis habit regression": under high leverage, managers regress to habitual small-ball and fixed bullpen roles — empirically documented via "closer usage in non-save situations" etc. The regression is measurable: compare bunt frequency in the bottom of the 9th tied vs. innings 1-3. Prediction: bunt rate increases with leverage, and it's *suboptimal* under most empirical run-expectancy matrices when the target is 1 (bunting is actually defensible when you need exactly 1 run — that's the key nuance! When the target is exactly 1, the "get the runner to second with 0 outs" logic is far more correct than in a generic inning, because you only need 1 run, not the max expected runs. So "crisis habit regression" may actually be *correct* adaptation to the target-contingent objective — the analyst who calls it a bias is the one fooled. That's the counter-trap. Excellent: this is the crux of the "theory of mind" — the observed increase in bunts/steals in the bottom 9 is not a habit regression, it's rational re-optimization of a different objective function (P(R ≥ T) instead of E[R]). The analyst's trap is applying an E[R]-maximizing run-expectancy matrix to a P(R≥T) objective. Beautiful and correct: maximizing E[R] ≠ maximizing P(R≥1). Yes: with runner on 1st, 0 outs, E[R] is higher without bunt, but P(R≥1) may be higher with bunt. This is a known result. So I can state: the objective switch is a formal operator change from argmax_a E[R | a] to argmax_a P(R ≥ T | a), and these have different argmins/argmaxes. The habit regression *coincides* with the optimal policy in the "need exactly 1" state. So the "crisis habit" is confounded with rational re-optimization — a multi-week trap for the analyst.

The clock: innings/outs as the scarce resource; the home team's clock advantage is that their clock (at-bats) is truncated only when they lead — i.e., "the clock only runs when you are losing." Formally, the effective number of offensive innings for the home team is a stopping-time random variable, N_H = 8 + 1{D_{8.5} ≤ 0} + extras; away N_A = 9 + extras (they always bat the 9th top). So N_A ≥ N_H whenever the home team leads after 8.5. This asymmetry in the *number of possessions* is entirely deterministic-conditional and is the cleanest formalization of the "last at-bat advantage": home team has fewer at-bats but the last one. E[N_A] − E[N_H] = P(D_{8.5} > 0) > 0. That's an exact and lovely identity: the home team trades expected at-bats for the last at-bat. And the sign of the trade is determined by the value of the last at-bat vs. the value of the marginal at-bat. That is a genuinely deep formal point I can derive independently. Great.

So: Δ = V(last-at-bat) − V(9th-inning at-bats forgone). And the empirical question of the paper is which dominates.

Now RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios + predictions, each with a checkable reward signal.

Scenario A — "Truncation-removal replay." Take the empirical half-inning scoring distribution from a fixed era, run G_sym (no walk-off, both teams 9 innings) vs G_MLB. Prediction: Δ_sym < Δ_MLB, and Δ_MLB − Δ_sym equals the truncation term within SE; specifically the home team's observed bottom-9 runs should be ≈ min(potential, T), giving a visible left-shift in the run histogram. Checkable: the empirical distribution of bottom-9 runs conditional on T should have an atom at exactly T (walk-offs) and zero mass above T. That's a hard, falsifiable prediction — the histogram of home-team 9th-inning runs is truncated at the target. Excellent, verifiable.

Scenario B — "Order-swap permutation test." Randomly permute which team bats last within each game (or replay the same line-score with halves swapped), holding team identities and parks fixed. Prediction: the home-team win% advantage persists only insofar as it is (i) truncation + (ii) information; the "familiarity" component should not survive the swap because both teams are equally familiar in a swapped counterfactual... hmm, careful — swapping halves doesn't change which team is "home" (still playing in its own park). Better: model-based — recompute WP with the roles of the two half-innings swapped in the empirical transition matrix, keeping park and roster fixed. Prediction: the residual ~ equals the paper's claimed advantage; if a naive logit gives a larger home coefficient than the Markov decomposition, the excess is a HFA confound. Checkable by comparing the two estimates with CIs.

Scenario C — "Target-contingent policy test." Estimate the empirical bunt/steal/IBB policy as a function of (T, base-out state) and compute I(T; A*) in bits. Prediction: I(T; A*) > 0 in the bottom 9 (target-contingent) and ≈ 0 in the top 9 (target unknown), and the win-probability gain from the target-contingent policy is ≤ the Pinsker bound; also, teams whose managers are more T-contingent should have a larger bottom-9 win share. Checkable with play-by-play data (Retrosheet) — a real verifiable reward.

Maybe add a fourth mini-veto but requirement is 3.

Also I should include the "gray-zone audit" in THINK_TRACE: explicitly list what cannot be verified from the drive (OCR garble), what is inferred from the title, and the risk of projecting modern knowledge (ghost runner, 2023 rules) onto a 2007 paper — anachronism is a gray-zone hazard. And attribute nothing numerically to the authors.

Word counts: THINK_TRACE ≥ 400 words. Total ≥ 1000. I'll write generously (~2500-3500 words).

Format: XML sections exactly as named. No betting content. Use LaTeX. Use [PAGE N] markers with verbatim quotes.

Let me write.

For [PAGE 8] verbatim: I'll quote short runs exactly, e.g. `k g` and `t w r o u o v x v n s u r p v { r v v o  v s r } o `. I should reproduce as given including the odd characters. I'll present them in a code block.

Careful: I shouldn't over-claim what the garbled text says. I can note the plausible conjecture: "the token `v n s` recurs and, if the font subset maps v→t, n→h, s→e, decodes to 'the'" — but flag as a conjecture. Actually, let me test the conjecture more: if v→t, n→h, s→e, then check "s u r p v w y" — hmm. And "o s v r  s w y" → ? using o→?, s→e, v→t, r→?, ... "?et??e??"? Not obviously. Let me not over-invest. I'll mention the hypothesis that it is a subsetted-font glyph remap and that partial decoding (v→t, n→h, s→e) is consistent with frequent trigram "the", but declines to assert. Hmm, but is it worth it? It demonstrates rigor. I'll include it as a labeled conjecture with explicit low confidence, and note that even if the geometric hypothesis holds, no numeric value should be extracted. Actually the risk: if it's wrong, I've asserted something false. I'll label it clearly "unverified conjecture, do not rely on."

Also note: 'D8', 'D<', 'D5' etc. appear at the end of pages — likely page numbers / figure labels. And digits appear as '7', '<', '>' etc. In the garbled numeric tables on pages 8-9, digits appear as B, @, 7, <, >, 5, 6, 8, D, ? — that's consistent with a digit-remap too! E.g. "= B @ @ @ @" likely "= 10000" or similar in a matrix. So the mapping for digits is also permuted. That strongly supports the glyph-remap hypothesis. Good observation: the recurring `= B @ @ @ @` patterns with `! "` superscript markers look like matrices with notation like $M^{...}$. And `B @ @ @` could be "1000". I'll note that digits are remapped (B, @, 7, <, >, 5, 6, 8, D, ?) and thus *any* numeric transcription is untrustworthy — a strong reason to refuse numeric extraction. That's a great guard.

Let me now also double check no betting language: I will avoid "odds", "spread", "moneyline", "totals", "bet". I'll use "win probability", "win percentage". Fine.

Write now. Keep LaTeX inline with $...$.

Length target: I'll aim ~2800 words.

Structure:

<THINK_TRACE> — 500+ words: what the drive is, multi-hop derivation plan, gray-zone audit (OCR garble, missing pages, anonymous authorship, anachronism), the decomposition idea, the at-bat-count identity, the objective-switch insight.

<SOURCE_OPERATORS_AND_EQUATIONS> — formal LaTeX, units, page citations + verbatim quotes, breakdown regimes.

<RETROCAUSAL_GENEALOGY> — lineage + multi-week traps.

<RECURSIVE_THEORY_OF_MIND> — levels, crisis habit vs counter-trap vs clock.

<CROSS_LAYER_VETO_ADJUDICATION> — weather, biomechanics, park, travel; veto proof.

<RLVR_COUNTERFACTUAL_VETOES> — 3 scenarios.

Go.
</NATIVE_REASONING>

<THINK_TRACE>
**Drive integrity first.** The supplied extract is a font-substitution artifact, not readable prose. Pages present are 7, 8, 9 and 11 only; pages 1–6 and 10 are absent from the drive. Page 7 contains nothing but three run-in headers: `R esult 1.` / `R esult 2.` / `R esult 3.` [PAGE 7]. Pages 8 and 9 contain what are plainly equation blocks and tables rendered through a remapped glyph set: recurring tokens such as `= B @ @ @ @`, `= 7 < < < @`, `= B ? 6 < D`, and alternating `! "` / `/  '` superscript markers strongly suggest subscripted array notation (e.g. matrices of transition or payoff entries) whose *digits* have also been permuted (the digit-like glyphs `B @ 7 < > 5 6 8 D ?` occupy numeric positions). Page 11 contains the single word `first` [PAGE 11].

Consequence: **no numeric claim may be attributed to this paper.** Any analyst who "reads off" a win-probability percentage from `= B ? 6 < D` is fabricating. I therefore treat the document as a *title-level and structure-level* source — the title being *In search of the advantage to batting last in baseball* (New England Symposium on Statistics in Sports, 2007) — and I reconstruct the problem the authors must have solved, marking every reconstruction as inference. I also flag a low-confidence conjecture: the trigram `v n s` recurs across pages 8–9 and is consistent with a Caesar-free glyph remap of "the" (v→t, n→h, s→e); if true, fragments such as `t w r o u o v x v n s u r p v { r v v o  v s r } o` are decodable in principle. I do not rely on it. What I rely on is the legible structure: three enumerated results, at least two array-valued exhibits, and a title that frames the exercise as a *search* — i.e., an identification problem, not a demonstration.

**Multi-hop derivation.** Hop 1: the game is not order-symmetric, but the asymmetry is not "who bats last" in a vacuum — it is a joint asymmetry in (a) the *number* of offensive innings and (b) the *information* carried into the final offensive inning. Hop 2: these two effects have opposite signs and are routinely conflated. Hop 3: their separation is a causal-identification problem with no observable counterfactual — we never see the same game with the halves swapped, so an unadjusted home/road win split identifies only the sum. Hop 4: the sum can be decomposed into a truncation term, a value-of-information term, and a residual home-field term, and only the middle one deserves the word "advantage." Hop 5: the value-of-information term is zero unless the batting team's *policy* is target-contingent, which converts an empirical question about managers into a measurable mutual-information quantity.

**The at-bat-count identity.** The cleanest formalization of the last-at-bat edge is a stopping-time statement. The visiting team always bats the top of every inning: $N_A = 9 + K$ where $K$ is the number of extra innings. The home team bats the bottom of an inning only if it is not already ahead: $N_H = 8 + \mathbf{1}\{D_{8.5}\le 0\} + K'$. Hence
$$\mathbb{E}[N_A] - \mathbb{E}[N_H] = \mathbb{P}(D_{8.5} > 0) > 0 .$$
The home team *purchases* the last at-bat with forgone at-bats. Whether the purchase is profitable is the entire question, and it is a question about the relative marginal value of the last swing versus the marginal at-bat — not about "clutch."

**The objective-switch insight (the deepest gray zone).** In the bottom of the ninth the batting team's objective is not $\arg\max_a \mathbb{E}[R\mid a]$ but $\arg\max_a \mathbb{P}(R \ge T \mid a)$ for a *known* target $T$. These two programs have different optima. With a runner on first and none out and $T=1$, the sacrifice bunt is frequently optimal under the second program while being clearly suboptimal under the first. Therefore the widely reported "managers regress to small ball under pressure" is *confounded with rational re-optimization* — the analyst applying a run-expectancy matrix built for $\mathbb{E}[R]$ is the one making the error. Any claim of "crisis habit regression" in this domain must first condition on the objective function.

**Gray-zone audit checklist.** (i) Anonymity: the drive labels the authors "Unknown Authors," so lineage claims attach to the *conference and year*, not to individuals. (ii) Anachronism: a 2007 paper cannot have modelled the 2020 seven-inning doubleheader or the automatic runner; importing those into its results is a category error. (iii) OCR substitution: digits are remapped, so even the sign of a tabulated effect is unrecoverable. (iv) Publication status: NESSIS contributions are conference presentations; absence of peer review bounds the evidential weight. (v) Base-rate hazard: MLB home win percentage has sat near 0.53–0.54 for a century, and one season of 2,430 games carries a standard error of roughly $1.0$ percentage point, so any effect of 1–2 pp is invisible in a single season and requires multi-season pooling. The honest reading of "in search of" is that the effect is small and hard to identify — which is exactly what the arithmetic predicts.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Source anchors (verbatim, as rendered in the drive).**

| Marker | Verbatim content | Status |
|---|---|---|
| [PAGE 7] | `R esult 1.` `R esult 2.` `R esult 3.` | Legible headers; the space after `R` is a kerning loss from the font subset. Three enumerated results exist; their content is on the missing or garbled pages. |
| [PAGE 8] | `k g` … `t w r o u o v x v n s u r p v { r v v o  v s r } o  p r  r } s s v s s  o s  v o ~ r u v s r } p  o s  v n s p s v w y p v r  s {  r } s r ~ v o w p r   r o u r   u s` and array rows `= B @ @ @ @`, `= 7 < < < @`, `= 7 < < 6 <`, `= B @ @ B >`, `= B @ @ 7 7` | Glyph-remapped caption text plus a displayed array. Unrecoverable. |
| [PAGE 9] | `= B ? 6 < D`, `= B 8 D 7 D`, `= B 8 @ 7 >`, `= B ? 6 ? 5`, `= B ? 5 D D`, `= B 8 @ < <` and the lead-in `k g & ! '` | A second array exhibit, likely a second results table. Digits are remapped (`B @ 7 < > 5 6 8 D ?`); signs and magnitudes are not trustworthy. |
| [PAGE 11] | `first` | Single word; isolated. |

Because the digit glyphs are permuted, I make **no numerical attribution**. The three "Result" headers [PAGE 7] are cited only as evidence that the paper's argument terminates in three discrete claims.

**Formal reconstruction.** Let a game state be $s=(i,h,o,\mathbf{b},d)$ with inning $i\in\{1,\dots\}$, half $h\in\{\text{top},\text{bottom}\}$, outs $o\in\{0,1,2\}$, occupancy $\mathbf{b}\in\{0,1\}^3$, and differential $d=R_{\text{home}}-R_{\text{away}}\in\mathbb{Z}$ (units: runs). Let $f_{i,h}(r\mid s)$ be the half-inning run-scoring law obtained by convolving plate-appearance outcome probabilities through the base-out chain until the third out — this is the standard Markov operator of the baseball literature, with units of probability (dimensionless).

*Win-probability recursion.* With $W(s)$ the home win probability,
$$W(i,\text{top},o,\mathbf{b},d)=\sum_{r} f_{i,\text{top}}(r\mid s)\,W\!\left(i,\text{bottom},0,\varnothing,d-r\right),\qquad
W(i,\text{bottom},o,\mathbf{b},d)=\sum_{r} f_{i,\text{bottom}}(r\mid s)\,W\!\left(i+1,\text{top},0,\varnothing,d+r\right),$$
with the truncation boundary conditions
$$W(9,\text{bottom},0,\varnothing,d)=1 \ \ \text{for } d>0,\qquad W(i\ge 9,\text{bottom},\cdot)=1 \ \text{if } d>0 \ \text{(walk-off termination)} .$$
Units: $W\in[0,1]$; expressed in win-probability points (pp) when multiplied by 100.

*Decomposition.* Define the symmetric counterfactual $\mathcal{G}_{\text{sym}}$ in which both clubs receive nine full offensive innings with the walk-off rule suspended. Then
$$\underbrace{\mathbb{P}_{\text{home}}(\mathcal{G}_{\text{MLB}})-\tfrac12}_{=\Delta}=\underbrace{A_{\text{trunc}}}_{\text{structural}}+\underbrace{A_{\text{info}}}_{\text{Blackwell}}+\underbrace{A_{\text{HFA}}}_{\text{non-order}},$$
all in probability units. $A_{\text{trunc}}$ is computable by simulation from $\{f_{i,h}\}$ alone; $A_{\text{HFA}}$ aggregates park, travel, circadian, and official-scoring effects; $A_{\text{info}}$ is the residual that the title advertises.

*Selection and censoring identities (exact, no approximation).* The observed bottom-ninth run total is censored at the target:
$$R^{\text{obs}}_{H,9}=\mathbf{1}\{T>0\}\cdot\min\!\left(R^{\text{pot}}_{H,9},\,T\right),\qquad T=R_{A,\text{top}9}-d_{8.5},$$
so $\mathbb{E}[R^{\text{obs}}_{H,9}]=\mathbb{E}[\min(R^{\text{pot}},T)\cdot\mathbf{1}\{T>0\}]<\mathbb{E}[R^{\text{pot}}]$ whenever $\mathbb{P}(R^{\text{pot}}>T)>0$. Consequently the *conditional* mean obeys the truncation identity
$$\mathbb{E}\!\left[R^{\text{obs}}_{H,9}\mid \text{bottom 9 played}\right]=\mathbb{E}\!\left[R^{\text{obs}}_{H,9}\right]+\frac{\operatorname{Cov}\!\left(R^{\text{obs}}_{H,9},\mathbf{1}\{D_{8.5}\le0\}\right)}{\mathbb{P}(D_{8.5}\le0)} .$$
Any "clutch" statistic built by comparing ninth-inning run totals across halves is therefore a Heckman-style selection artifact before it is anything else.

*Value of information.* Let $u(a,T)=\mathbb{P}(\text{win}\mid a,T)$ with action set $\mathcal{A}$ (bunt, steal, intentional walk, pinch-hit, bullpen choice), utility bounded in $[0,1]$. Then
$$A_{\text{info}}=\mathbb{E}_{T}\!\left[\max_{a\in\mathcal{A}}u(a,T)\right]-\max_{a\in\mathcal{A}}\mathbb{E}_{T}\!\left[u(a,T)\right]\ \ge 0,$$
with equality **iff** the maximizing action is $T$-invariant almost surely (Blackwell's comparison-of-experiments theorem). This is the sharp statement of the whole problem: if managers ignore the target, the informational advantage is exactly zero regardless of the rule. A descriptive companion is the mutual information $I(T;A^{*})$ in bits, and the average-Pinsker bound
$$A_{\text{info}}\ \le\ \big(u_{\max}-u_{\min}\big)\sqrt{\tfrac{\ln 2}{2}\,I(T;A^{*})_{\text{bits}}} ,$$
valid for finite $\mathcal{A}$ and risk-neutral utility; the bound is loose except in near-degenerate regimes.

**Units summary.** Runs: integer counts. $W$, $\Delta$, $A_\bullet$: dimensionless probability, reported in pp. $T$: runs. $I(T;A^*)$: bits (nats where the Pinsker constant $\ln 2/2$ requires it). Entropies of the half-inning law: bits.

**Singularity and breakdown regimes.**
1. *Zero-variance scoring ($f$ degenerate, equal means).* If both clubs score exactly $k$ runs per inning, the game is tied entering the bottom ninth and the home club scores $k$ to win with probability one: $\Delta\to\tfrac12$. The model does not "fail to find" an advantage here — it *diverges*, because the walk-off rule guarantees a response. Any calibrated model must reproduce this limit or it is misspecified.
2. *Vanishing scoring ($\mathbb{E}[R]\to0$).* Games never terminate; both win probabilities tend to $\tfrac12$ by non-termination, $\Delta$ becomes undefined rather than zero. A model fit only in high-run environments and extrapolated here produces the wrong limit.
3. *Saturated target.* As $\mathbb{P}(R\ge T)\to1$, the marginal product of the extra at-bat and of the extra bit of information both vanish: $A_{\text{info}}\to0$ and $A_{\text{trunc}}$ dominates.
4. *Finite-sample breakdown.* With $n$ games and home rate $p$, $\operatorname{SE}=\sqrt{p(1-p)/n}$; at $p=0.54$ and $n=2{,}430$, $\operatorname{SE}=1.01$ pp. Detecting $\delta=1$ pp at 80% power requires $n\approx(1.96+0.84)^2p(1-p)/\delta^2\approx19{,}600$ games, i.e. roughly eight seasons. Single-season "findings" of the last-at-bat edge are inside the noise floor by construction.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The question has three genealogical roots, and the 2007 venue sits at their intersection.

*Rule-history root.* "Batting last" is a nineteenth-century convention crystallized into rule: the home club's final at-bat is conditional and terminable, producing the walk-off. Every generation of baseball analysts has rediscovered the resulting asymmetry — nineteenth-century scorekeeping debates over the "last innings," mid-twentieth-century arguments that home clubs "know what they need," and the modern rulebook's rain and curtailment provisions, which are themselves order-asymmetric. The genealogy matters because the *rule*, not the physics, creates the effect; a comparative analysis must therefore hold the rulebook fixed.

*Statistical-modeling root.* The Markov/half-inning convolution machinery used above descends from operations-research treatments of baseball in the 1960s and the dynamic-programming lineup and strategy models of the 1980s–1990s, and by 2007 the run-expectancy and win-expectancy matrices were standard apparatus at exactly this kind of symposium. The authors of a 2007 NESSIS paper on batting last would have had win-expectancy tables available and would have faced the immediate problem that such tables are estimated under the *actual* rulebook, making the symmetric counterfactual unobservable — the identification wall.

*Decision-theoretic root.* The relevant theory is not baseball at all: it is Blackwell's comparison of experiments, Stackelberg leader–follower sequencing, and the sequential-information literature of the 1980s. The last-at-bat club is a Stackelberg follower with a *known* leader action; the "advantage" is the follower's rent. That reframing predicts, correctly, that the rent is zero when the follower's policy is not contingent — which is why the empirical literature has struggled to find a stable effect.

*Cross-sport mirror.* In limited-overs cricket the side batting second knows the target and is widely held to hold a chasing advantage, with the same three-way confound (rule asymmetry, information, and conditions — dew, light). The mirror is instructive precisely because cricket's target is public and continuous, making the information term easier to isolate than in baseball, where the target is realized only at the end of the top half.

**Multi-week traps.** These are the traps that survive weeks of incremental analysis and therefore get published.
1. *The cumulative-chart trap.* Plotting cumulative home win percentage over a season produces apparent multi-week trends that are the integrated noise of a random walk with drift. Standard error grows in the wrong direction for the analyst: early-season windows have large $\operatorname{SE}$, so "the advantage is growing" is usually $\sqrt{n}$-driven.
2. *The June–August confound.* Warm-weather months raise the run environment and shift the park mix; if $\Delta$ is run-environment-sensitive — and the deterministic-limit analysis says it is — then a seasonal swing in $\Delta$ can be produced entirely by weather, with no change in behavior.
3. *The stationarity break.* Rosters change at the deadline, bullpens are rebuilt, and the half-inning transition law $f_{i,h}$ shifts mid-season. A model fit on April data and evaluated in September is measuring roster turnover, not batting order.
4. *The truncation persistence trap.* Because the censoring identity above shifts the observed bottom-ninth distribution leftward *every game*, any multi-week rolling comparison of ninth-inning production will show a persistent "home teams are less productive in the ninth" signal. It is an artifact with a mechanical cause, and it will not decay with more weeks of data — the hallmark of a trap rather than a finding.
5. *The narrative trap.* "Clutch" and "knows how to win late" explanations are unfalsifiable under truncation; they predict the censored pattern and are therefore confirmed by it, which is a vice, not a virtue.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Model the in-game strategic interaction as a hierarchy of belief levels over the opponent's policy $\pi$.

*Level 0 (mechanical).* Both managers run fixed scripts: sacrifice with a runner on first and none out; closer in the ninth; intentional walk to set up a double play. Under level 0, $A_{\text{info}}=0$ exactly, by the Blackwell criterion. This is the null model and it is falsifiable: if level 0 held, swapping the halves of every game while holding rosters and parks fixed would leave the home win rate unchanged.

*Level 1 (target-contingent follower).* The home manager observes $T$ at the start of the bottom ninth and optimizes $\mathbb{P}(R\ge T\mid a)$. The away manager in the top ninth does not observe a target and optimizes a different functional — protecting a lead with variance control. Level 1 predicts a measurable nonzero $I(T;A^*)$ in bottom halves and $I\approx0$ in top halves.

*Level 2 (strategic anticipation).* The away manager, knowing the home manager is level 1, chooses top-ninth actions to *degrade the informativeness of the lead* — e.g., preferring higher-variance offensive approaches when trailing, and lower-variance, out-maximizing approaches when leading, because a moderate lead converts the home manager's information into a near-certainty. Level 2 is testable: it predicts an interaction between the size of the lead entering the bottom ninth and the visitors' aggressiveness in the top ninth.

*Level 3 (the analyst).* The analyst's belief about the managers' beliefs determines the estimated $A_{\text{info}}$. Assuming level 1 when managers are level 0 inflates the estimate; assuming level 0 when managers are level 1 deflates it to zero.

**Crisis habit regression versus counter-trap.** The literature's default reading of high-leverage behavior is *habit regression*: under pressure, decision-makers revert to simplified, culturally transmitted scripts, and those scripts are suboptimal. The counter-trap is the objective-switch argument derived earlier: when $T=1$, the sacrifice and the steal are frequently optimal for $\mathbb{P}(R\ge1)$ even though they are suboptimal for $\mathbb{E}[R]$. So the observed spike in small-ball in the bottom ninth is *simultaneously* consistent with habit regression and with correct re-optimization, and the two are not separable without estimating the objective. A properly designed test compares, in the same base-out states, the bunt rate when $T=1$ (bottom ninth, tie or down one) against the bunt rate when $T$ is unknown (early innings, same base-out state, same lineup slot). If the rate is flat in $T$, that is habit regression. If it tracks $T$, it is optimization. The intermediate case — rates rising with leverage but not with $T$ — is the genuine pathology.

**The clock.** Innings and outs are the resource clock, and the asymmetry is that the home club's clock *only runs when it is losing*. Formally $\mathbb{E}[N_A]-\mathbb{E}[N_H]=\mathbb{P}(D_{8.5}>0)$, so the home club systematically surrenders offensive possessions in exchange for temporal priority. The strategic content of the clock is that the follower's decision horizon is *truncated by success*: the bottom ninth ends the instant the lead is taken, so the follower never pays the cost of a longer inning it does not need. That is a genuine efficiency: the follower's production is bounded above by exactly what it requires. Any theory-of-mind model that omits the truncation of the follower's own inning will overstate the value of the extra at-bats the follower forgoes and will misattribute the residual to "clutch."

**Prediction from the recursive model.** The last-at-bat rent should be largest where (i) the target is small and discrete ($T=1$), (ii) the run environment is high-variance, and (iii) the follower's action set is rich. It should vanish where the follower's policy is scripted. That triple interaction is the strongest available discriminator between the information account and the habit account, and it is checkable with play-by-play data.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

A cross-layer veto is a physical or environmental fact that overrides a statistical model rather than refining it. Four such vetoes bear on any estimate of $\Delta$.

**Weather veto (decisive).** Curtailment rules are order-asymmetric: a game stopped with the home club ahead is a completed home win, while a game stopped with the visitors ahead after an incomplete bottom half is suspended rather than won. The veto is not a small-sample nuisance; it is a *mechanism that manufactures home wins without a ninth-inning at-bat at all*. Formally, let $p_{\text{call}}$ be the per-game probability of early curtailment and let $\phi$ be the conditional home-lead probability at the moment of curtailment. Then the bias term is $B_{\text{rain}}\approx p_{\text{call}}\left(\phi-\mathbb{P}(D_{8.5}>0)\right)$, which is positive whenever $\phi>\mathbb{P}(D_{8.5}>0)$ — i.e., whenever curtailment is more likely to freeze a home lead than a road lead. Any claim of an "information advantage" that does not net out $B_{\text{rain}}$ is not identified. The veto extends to wind and temperature: both shift the half-inning run law $f$, and because $\Delta$ is a monotone functional of the run environment (per the deterministic-limit analysis), an unadjusted seasonal comparison of $\Delta$ across months is measuring weather, not order.

**Park and altitude veto.** Extreme run environments (high altitude, short fences, prevailing out-blowing wind) raise $\mathbb{P}(R\ge T)$ toward saturation. Two directions follow and they can be distinguished empirically: the *saturation* channel pushes $\Delta$ down (information is worthless when the target is met anyway), while the *deterministic-surplus* channel pushes $\Delta$ up toward $\tfrac12$ (when both clubs score reliably, the follower's guaranteed response dominates). The observed $\Delta$ as a function of park run factor therefore traces a non-monotone curve with an interior maximum, and a dataset that mixes parks without a park-factor interaction is uninterpretable. This is a falsifiable cross-layer prediction, not a caveat.

**Biomechanical veto.** The times-through-the-order penalty and pitcher-fatigue kinetics mean the third trip through a lineup is materially worse for the pitcher. Because the home club's ninth-inning at-bats are conditional, the *fatigue state* it faces is conditional too: when the home club leads after 8.5 innings, its hitters never face the visitors' late-inning arms, and the visitors' bullpen does not work. Over a season this produces a real conservation-of-pitching-capital differential — measurable in relief innings, rest days, and next-game availability — which feeds back into subsequent-game win probability. Any estimate of $\Delta$ from a single-game model omits this multi-game feedback and is biased toward the mechanical interpretation. The veto: a biomechanical resource that is conserved only on one side of an asymmetric rule is not a nuisance parameter, it is part of the treatment.

**Travel and circadian veto.** West-to-east travel and start-time variation shift both the run law and the error rate. Since travel is correlated with the home/road designation itself, it is collinear with the treatment of interest and cannot be controlled by covariate adjustment within a single season; it requires either schedule-based instruments or within-team fixed effects across seasons.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Each scenario below defines a computable counterfactual with an explicit pass/fail signal usable as a verifiable reward. None requires proprietary data; all are implementable with public play-by-play and a half-inning transition law.

**Scenario 1 — Truncation removal (replay $\mathcal{G}_{\text{sym}}$ vs $\mathcal{G}_{\text{MLB}}$).**
*Construction.* Estimate $f_{i,h}$ from pooled league data. Simulate $10^{6}$ games under the actual rulebook and under the symmetric rulebook (nine full offensive innings, no walk-off termination). 
*Prediction A.* $\Delta_{\text{sym}}<\Delta_{\text{MLB}}$, with the gap equal to $A_{\text{trunc}}$ within Monte Carlo error.
*Prediction B (sharp, falsifiable without a model).* The empirical histogram of home-team bottom-ninth runs, conditioned on target $T$, must have (i) zero mass above $T$ whenever the game ends, and (ii) an atom at exactly $T$ produced by walk-offs. If the histogram instead shows mass above the target in completed games, the coding is wrong and the whole analysis is void.
*Verifiable reward.* $+1$ if both predictions hold at the pre-registered tolerance; $-1$ if either the atom or the upper-truncation is absent. This is an exact structural check, not a goodness-of-fit statistic.

**Scenario 2 — Order-swap placebo.**
*Construction.* Hold rosters, parks, umpires, and dates fixed; deterministically swap the top and bottom half-innings in the fitted transition operator (i.e., evaluate $W$ with $f_{i,\text{top}}$ and $f_{i,\text{bottom}}$ exchanged) and recompute the league-wide home win rate. Compare against a naive logistic estimate of the home coefficient.
*Prediction.* The swap-model $\Delta$ shrinks toward the structural-plus-information term and the naive logistic coefficient exceeds it by the home-field confound; the difference should scale with park and travel covariates.
*Verifiable reward.* $+1$ if $\hat\Delta_{\text{swap}}<\hat\Delta_{\text{logit}}$ with non-overlapping 95