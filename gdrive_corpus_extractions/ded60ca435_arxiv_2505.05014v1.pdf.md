---
source: "arxiv_2505.05014v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 21
model: deepseek/deepseek-v4.1-flash-1017
words: 6428
---

<NATIVE_REASONING>
We need answer. Need produce GSE/GSI Frontier Reasoning Foundry answer with exact XML sections, >=1000 words. But user provides source paper, not a sports/betting event. They mention drive source arxiv. Need analyze paper. Invariants: zero betting lines. Need formal equations units page citations verbatim quotes. Need deep multi-hop derivation & gray-zone audit >=400. Need sections exactly. Need perhaps no betting. We need infer task? They didn't ask specific question besides source. We should produce analysis of paper, sample complexity, operators/equations, genealogy, theory of mind, cross-layer veto, RLVR counterfactual vetoes. This is meta. Need fit all sections.

Need be careful: "Crisis habit regression vs counter-trap vs clock", "Physical/biomechanical/weather veto proof" seem sports-betting oriented, but paper is theoretical. We must adapt: no odds. Cross-layer veto can be mathematical/physical? Need "physical/biomechanical/weather veto proof" maybe irrelevant; we can say no biomechanical/weather layer applies; mathematical/statistical vetoes. Zero betting lines. Need cite PAGE markers exact quotes. Need include equations in LaTeX, units, assumptions, singularities/breakdown. Need >=1000 words depth across sections. Desired oververbosity 5. We can produce ~1800 words. Need cite [PAGE N] exact quotes. Use exact from source.

Need likely include source operators: sample complexity O(φ(A)^2 / max{α^2, π_min^2} log(n/δ)); lower bounds Ω(1/α^2 log 1/δ), Ω(φ(A)^2 log 1/δ), for n 5..19; condition 1 rank n-1, x^T A=0 with sum nonzero; Theorem 1 Kaplansky; Theorem 2 Pfaffians; Algorithm 1; Lemma 13 threshold epsilon < x_min/φ(B); φ(A) = max_j max_i |(1^T A_j^{-1} - π)_i|; π^T = e_j^T A_j^{-1}; vertices v_j^T = π^T - ε(1^T A_j^{-1} - π^T); ϵ-Nash polytope P_A(ε) = {x∈S_n | x^T A ≥ -ε 1^T}; Theorem 6 3x3 sample complexity Θ(1/Δ^2 log 1/δ) with Δ=min(|a|,|b|,|c|); Q(n,κ,s) bad example; det(Qk)=κ^n((n-4)(s/κ)^2+4|s|/κ), φ(Q) ≃2^{n-8}/|s|; Proposition 32 φ(Q) ≤ (4n^2+1)/(3|s|); Lemma 24 Q non-redundant if 0<s<2κ, otherwise redundant; Lemma 25 rank(Q)=n-1 unless s∈{0,2κ}; singularities s=0, s=2κ, φ→∞ as s→0; even n impossible; rank breakdown rank≠n-1; π_min positive.

Need "source operators and equations" formal LaTeX with units. Units: sample complexity is expected number of rounds (dimensionless count; or rounds). Payoff entries in [-1,1] dimensionless (normalized utility difference). Error α margin dimensionless probability mass? α is strategy coordinate margin, dimensionless. δ probability dimensionless. φ(A) dimensionless? A entries dimensionless, inverse entries? 1^T A_j^{-1} - π has dimensionless? A inverse of payoff matrix has inverse utility units? If entries normalized dimensionless, inverse dimensionless; π dimensionless. But could mention all normalized. Sub-Gaussian variance ≤1 (aij units squared? X in same units, variance dimensionless if payoff normalized). Need formal.

Need "retrocausal genealogy" historical/scientific lineage and multi-week traps. Paper lineage: von Neumann-Morgenstern game theory, Kaplansky 1945/1995, dueling bandits Yue & Joachims 2009, Yue et al 2012, SAVAGE Urvoy 2013, Zoghi 2014, Maiti 2023 etc. Multi-week traps: even n always redundant; treating empirical support as truth; φ instability near det zero; non-adaptivity/simultaneous sampling; gap upper/lower; 3x3 affine link vs n≥5 inverse; α-redundant threshold vs exact nonredundant; rank assumption almost sure only asymptotic q→∞.

Need "recursive theory of mind: crisis habit regression vs counter-trap vs clock." Adapt to algorithm's decision process. Habit regression: learner continues sequential sampling all pairs uniformly; counter-trap: trusting empirical π_min > 0 and concluding nonredundant prematurely; clock: stopping thresholds T = ceil(2U^2/α^2 log(2n^2/δ))+1, later t>... Need explain rational player model: Nash equilibrium; if all strategies positive. Theory of mind: learner models adversary/column player's rational mixed strategy; recursion: reason about rational player's support and own estimate. Counter-trap: overinterpreting estimated positive π as all moves indispensable. Clock: sample thresholds (a) and (b)/(d).

Need "Cross-layer veto adjudication: Physical/biomechanical/weather veto proof." Since no physical event, state mathematical vetoes: skew-symmetry, odd n, rank n-1, sum π ≠0, bounded entries, subgaussian. Physical/biomechanical/weather not applicable; veto proof = no such layer can override theorem. Maybe "weather" metaphor: stochastic duel noise. We need provide proof. Could mention any non-mathematical layer has no evidence or variables; the only cross-layer veto is mathematical consistency. Need maybe include "Physical/biomechanical/weather veto proof" section title exact. We can state: For this corpus, no biomechanical or weather data exist; attempting to inject them is a category error. The paper's admitted layer is two-player zero-sum symmetric game. The veto conditions are as above. We can give logical proof: If n even -> determinant zero -> rank ≤ n-2? Actually skew-symmetric odd? For even n determinant zero, rank ≤ n-1 but Kaplansky says complete mixed only odd. More precise: nonsingular skew-symmetric requires even dimension, but complete mixed requires rank n−1; for even n rank n−1 odd number? Wait rank of skew-symmetric is even, so rank n−1 for even n is odd impossible? Let's check: n even, n−1 odd, rank of skew-symmetric is even, so cannot rank n−1. Thus impossible. Page 3: "A is completely mixed ... only when n is odd... determinant of any k × k skew-symmetric matrix is zero for any even k." Hmm determinant of even skew-symmetric zero, so full rank impossible; but rank n−1 maybe? If n even, n−1 odd; rank of skew-symmetric is even, so impossible. We can mention.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. Need make scenarios with predictions testable. RLVR = reinforcement learning with verifiable rewards? We need 3 verifiable counterfactual vetoes. Could be:
1. Even-n veto test: generate random skew-symmetric A for n=4 and run Algorithm 1; predict it must not conclude nonredundant; if implementation claims nonredundant, fail. More precise: algorithm is for odd n; for n=4 skip or output redundant. Prediction: any valid classifier should output redundant; mathematical theorem.
2. Rank/singular test: set Q(n,κ,s) at s=0 or s=2κ; predict rank < n−1 and redundancy; Algorithm should not declare nonredundant. If it does due to numerical inverse, numerical regularization violation.
3. φ blow-up threshold: take Q(n,κ,s) with s→0; predict estimated φ grows ~2^{n-8}/|s| and sample complexity explodes; any claim of fixed small U invalid. Test: s=κ/n? Wait Proposition 32 φ ≤ (4n^2+1)/(3|s|). For n=5, s=κ/n small. Need prediction. Or 3x3 sign test: Q+ vs Q− differ one entry; sample complexity Δ=min(|a|,|b|,|c|); if Δ→0 lower bound grows; a test with Δ=0 should be ambiguous/redundant. Need 3 scenarios.

Need "THINK_TRACE" ≥400 words. We can write 500-600. Need not reveal chain-of-thought? The user requested think trace. Policy? We can provide concise reasoning, not hidden chain-of-thought? We should not provide private chain-of-thought, but can provide "derivation audit" summary. They require XML section THINK_TRACE "Deep multi-hop derivation & gray-zone audit". We can write a transparent derivation, not internal hidden. Need satisfy. We can label as "audit trace (not private chain-of-thought)". But XML exact? The section should be <THINK_TRACE>... We can include summarized reasoning steps. That's allowed. Need not mention "cannot". Good.

Need exact citations. Let's collect verbatim quotes from source with page numbers.

Important exact quotes:
PAGE 1 abstract: "we provide upper and lower bounds of the sample complexity of the identification problem in terms of the determinant of A and a solution of x⊤A = 0⊤where A is an n × n pay-off matrix that every duel follows." Could quote exact with superscript. 
PAGE 1: "any variant of Jan-ken with four items ... contains at least one useless item, which is never selected by a rational player."
PAGE 2: "A two-player zero-sum game is symmetric if A is skew-symmetric, i.e., A⊤= −A holds, which is the target of this paper."
PAGE 3: "A is completely mixed (i.e., non-redundant) only when n is odd. When n is odd, A is non-redundant if and only if rank(A) = n −1 and x⊤A = 0⊤has a solution x > 0."
PAGE 3: "We give an upper bound of the sample complexity O(φ(A)2 max{α2,π2 min} log n δ )" Need exact: "We give an upper bound of the sample complexity O ( φ(A)2 max{α2,π2 min} log n δ ) of an (α, δ)-PAC algo- rithm..." cite.
PAGE 3: "We also give lower bounds Ω ( 1 α2 log 1 δ ) for any n and Ω ( φ(A)2 log 1 δ ) for each n = 5, 7, . . . , 19"
PAGE 4 Condition 1 exact: "A ∈[−1, 1]n×n for an odd n ≥3 is skew-symmetric, satisfies rank(A) = n −1 and has a solution of x⊤A = 0⊤such that Pn i=1 xi̸ = 0."
PAGE 4 Condition 2: "the result Xij of a dual follows 1-sub-Gaussian with mean aij. All results are mutually independent."
PAGE 5 Theorem 6: "The sample complexity is Θ( 1 ∆2 log 1 δ ) where ∆= min{|a|, |b|, |c|}."
PAGE 6 Lemma 8: "π⊤= e⊤ j A−1 j (2)".
PAGE 6 Lemma 9: "v⊤ j = π⊤−ϵ(1⊤A−1 j −π⊤) (3)".
PAGE 6/7 Algorithm 1 lines. Page 7: "T ←⌈2U 2 α2 log 2n2 δ ⌉+ 1;" exact.
PAGE 7: "φ(A) = max j∈[n]max i∈[n] (1⊤A−1 j −π) i , (5)".
PAGE 7: "Intuitively, φ(A) gets large if det(Aj) is close to 0 for some j"
PAGE 8 Theorem 10 exact: "Suppose A ∈[−1, 1]n×n satisfies Condition 1, and suppose that we can assume that φ(A) ≤U. Then, Algorithm 1 correctly concludes about the nonredundancy of A with probability at least 1 −δ. The sample complexity of Algorithm 1 is O ( U 2 max{α2,π2 min} log n δ ) ."
PAGE 9 Theorems 18/19 exact.
PAGE 10 "Filling the gap between upper and lower bounds is a future work." "This paper employed sequential sampling of duels following the work of Maiti et al. [23]. Adaptive sampling of duels is a future work."
PAGE 16 Q definition and det. "det(Qk) = κn ( (n −4) ( s κ )2 + 4 |s| κ ) , and φ(Q) ≃2n−8 |s| asymptotic to |s| →0" exact.
PAGE 16 Lemma 24: "Q is non-redundant if 0 < s < 2κ, otherwise redundant."
PAGE 16 Lemma 25: "rank(Q) = n −1 unless s ∈{0, 2κ}."
PAGE 21 Proposition 33: "πmin ≥s 5κ". And "φ(A)2 term of the lower bound is not replaced with a function of 1/π2 min."
Need maybe "πmin ≥1/5n" page 21.

Need maybe include "Theorem 5 Hoeffding" and "Bretagnolle–Huber" for lower bound. Could cite page 5 and 14.

Need "formal LaTeX, units, assumptions, breakdown regimes." We can create table-like.

Need no sports/betting references. Avoid odds, moneyline etc. We can use "duel" but paper uses duel; okay. "Betting" prohibited? It says zero betting lines; no odds. We can mention no wagering. Avoid "bet". Use "duel".

Need answer structure exact XML:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need total >=1000 words. Let's draft ~2200 words.

Need "source operators" maybe define mathematical operators:
- Skew-symmetric matrix A; rank; nullspace; Nash equilibrium π.
- A_j matrix replacing jth column with 1; inverse.
- ε-Nash polytope P_A(ε).
- φ(A) operator.
- sample complexity N(α,δ;A).
- Algorithm 1 thresholds.

Write formal equations:

Let \(A=(a_{ij})\in[-1,1]^{n\times n}\), \(n\) odd, \(A^\top=-A\), rank\(A=n-1\), and \(\exists x\) with \(x^\top A=0^\top\), \(\sum_i x_i\ne0\). Normalize \(\pi_i=x_i/\sum_l x_l\), \(\pi\in S_n\). Define \(A_j\) by replacing column j with \(\mathbf1\). Lemma 7 ensures \(A_j\) nonsingular. Lemma 8: \(\pi^\top=e_j^\top A_j^{-1}\). φ:
\[
\varphi(A)=\max_{j\in[n]}\max_{i\in[n]}\left|\left(\mathbf1^\top A_j^{-1}-\pi^\top\right)_i\right|.
\]
ε-Nash:
\[
P_A(\epsilon)=\{x\in S_n: x^\top A\ge -\epsilon \mathbf1^\top\}.
\]
Vertices:
\[
v_j^\top = \pi^\top-\epsilon(\mathbf1^\top A_j^{-1}-\pi^\top).
\]
Algorithm thresholds:
\[
T=\left\lceil \frac{2U^2}{\alpha^2}\log\frac{2n^2}{\delta}\right\rceil+1.
\]
Conclusion (a) if \(t> \frac{2\varphi(\hat A)^2}{\hat\pi_{\min}^2}\log\frac{2n^2}{\delta}\) and \(\hat\pi_{\min}>0\). (b) if \(t> \frac{2\varphi(\hat A)^2}{\alpha^2}\log...\) then ε=α/φ(hatA), check v. (c/d) with ε=α/U.
Sample complexity upper:
\[
O\left(\frac{U^2}{\max\{\alpha^2,\pi_{\min}^2\}}\log\frac{n}{\delta}\right)
\]
Need check theorem says log n/δ, but abstract says log n/δ? Actually algorithm log 2n^2/δ. Theorem 10 says log n/δ (maybe n/δ). We can quote.

Lower:
\[
\mathbb E[\tau]\ge \frac{1}{2\alpha^2}\log\frac{5}{12\delta}
\]
and
\[
\mathbb E[\tau]=\Omega(\varphi(A)^2\log(1/\delta))
\]
for n=5,7,...,19, giving
\[
\Omega(\max\{1/\alpha^2,\varphi(A)^2\}\log(1/\delta)).
\]
3x3:
\[
\Theta(\Delta^{-2}\log(1/\delta)),\quad \Delta=\min\{|a|,|b|,|c|\}.
\]
Q:
\[
q_{ij}=...
\]
Maybe not need full matrix; include det and φ.

Assumptions and breakdown:
- \(n\) odd; even n impossible because skew-symmetric determinant even zero / rank constraints. Breakdown if n even.
- rank n−1; if rank < n−1, \(A_j^{-1}\) may fail. Page 3 "rank(A)=n−1". Page 5 Condition 1. Singularity \(s=0,2κ\) in Q; det(Qk) zero? Actually Lemma 25 rank(Q)=n−1 unless s∈{0,2κ}; at those, rank not n−1. φ blow-up as s→0. Lemma 24 threshold s=2κ. 
- \(\sum_i x_i\ne0\) needed for \(A_j^{-1}\) and normalization; if zero, Lemma 7 fails.
- entries bounded; sub-Gaussian 1. If heavy tails, Hoeffding breakdown.
- α>0, δ>0; if α→0, 1/α² diverges. If π_min→0, upper bound diverges; lower bound in Q not expressed by 1/π_min².
- φ(A) unbounded near det(A_j)=0; requires known U. If U too small, theorem assumption violated. 
- lower bound n 5..19 only; not all n. Gap.

Need maybe mention "units": sample complexity rounds \(N\). Entries \(a_{ij}\) are utility differences normalized to dimensionless; variance at most 1 in squared payoff units. α and δ are dimensionless probabilities. φ dimensionless under normalized payoffs. Time \(t\) integer rounds. \(T\) rounds. The log terms dimensionless (n,δ). Maybe no SI units. State no SI units because normalized game.

Need "gray-zone audit": discuss exact nonredundant vs α-redundant; algorithm can conclude α-redundant, not exact redundant. The "non-redundant" conclusion has probability; α-redundant is margin. The gray zone between π_min>0 but <α. The algorithm's conclusion (a) if \hat π_min>0; (b) if no vertex in S_n^α. The exact boundary π_min=0/α not decidable at finite samples; lower bounds. Also lower bound uses Q with only one entry noisy and s=α; "deterministic unless (i,j)=(1,n)" page 17. It constructs near-indistinguishable Q+ and Q−. Good.

Need "RETROCAUSAL_GENEALOGY": historical lineage. "Retrocausal" means how future algorithm design traces back to earlier concepts. Use "lineage". Multi-week traps: 
- Kaplan sky 1945/1995: theorem and 50-year later Pfaffian; trap: treating non-redundancy as support check only; need rank and positive null vector.
- Dueling bandits 2009; most transitive/Condorcet/Copeland assumptions; trap: importing transitive champion logic into nontransitive relation (no strongest arm).
- Maiti et al. 2023: 2x2 zero-sum; trap: assuming m×n or PSNE sample complexity transfers; paper incomparable.
- Q example: trap: κ controls scale but φ depends on |s|, not κ; if you tune κ only, singularity remains. Page 16 "almost independent of κ, interestingly" exact? It says "which is almost independent of κ, interestingly." Good.
- Lower bound only n≤19; trap: extrapolate to all n.

Need "RECURSIVE_THEORY_OF_MIND": Need tie to rational player. Define nested reasoning:
Level 0 learner observes X_ij.
Level 1 estimates A.
Level 2 computes π = Nash equilibrium of estimated game, models both players rational.
Level 3 checks whether π is completely mixed (all moves indispensable), and whether ε-Nash polytope lies in S_n^++. 
Habit regression: learner may overfit to empirical positive \hat π_min and declare nonredundant; this is "crisis habit regression" because exact support inference from finite sample is unstable when true π_min small. Counter-trap: if it sees any zero or negative \hat π_i, it may prematurely declare redundant; but α-redundant is weaker. The correct counter is Lemma 13's margin ε < x_min/φ(B); needs \hat π_min/φ(\hat A) small enough. Clock: thresholds \(t>2φ(\hat A)^2/\hat π_{\min}^2 \log...\) and \(t>2φ(\hat A)^2/α^2 \log...\), plus \(T\). Need maybe "clock" is sample clock, not wall clock.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Since paper is abstract, no physical. But maybe we can frame "cross-layer" as game-theoretic vs statistical vs computational. Provide adjudication:
- Layer 1 game theory: nonredundancy theorem; veto if n even or rank wrong.
- Layer 2 statistical: sub-Gaussian/Hoeffding concentration; veto if noise violates; confidence δ.
- Layer 3 optimization/numerical: matrix inversion; veto if det(A_j) near zero; φ blow-up.
- Layer 4 physical/biomechanical/weather: no variables in paper; no empirical dataset; any claim from weather/biomechanics is non-identifiable and must be vetoed. We can state "no physical/biomechanical/weather veto can be proven from this source because no such measurements exist; the only admissible veto is mathematical." But user demands "Physical/biomechanical/weather veto proof." We can say "Veto proof: absent measurable physical layer, physical/weather claims are rejected; mathematical constraints dominate." Need perhaps include proof by contradiction: Suppose a biomechanical/weather factor changes sample complexity; but Algorithm 1's sample complexity is a function of A, α, δ, U only (Theorem 10); no such variables appear; therefore no identifiable effect. That is a formal model-selection veto. Weather could affect duel outcomes if the duel were physical, but Condition 2 fixes iid sub-Gaussian with mean aij; any weather-induced dependence violates independence. So cross-layer veto: if weather creates correlated outcomes, Condition 2 fails; rebuild model, don't patch algorithm. This is good.

Need "RLVR_COUNTERFACTUAL_VETOES": three scenarios with predictions. Must "verifiable RLVR veto scenarios + predictions." We can phrase as reinforcement learning with verifiable rewards? We'll define test with verifiable output. Use exact math to check.

Scenario 1: even-n invariant. Use random skew-symmetric A with n=4; ask model/algorithm whether nonredundant. Prediction: always "redundant/not non-redundant" because Theorem 1. Verifiable reward: 1 iff output is redundant; any "nonredundant" is veto. Cite page 3. 
Scenario 2: Q(n,κ,s) threshold. Set n=5, κ=0.1, s=0.3κ (0<s<2κ) vs s=2κ. Prediction: first nonredundant, second redundant (Lemma 24); rank(Q)=n−1 unless s∈{0,2κ}; at s=2κ rank breaks. If algorithm returns nonredundant at s=2κ, veto. Also at s→0 φ ~2^{n-8}/|s|; predicted sample threshold grows. 
Scenario 3: 3x3 sign consistency. Choose A with a,b,c same sign vs one sign opposite. Prediction: same sign nonredundant; otherwise redundant; sample complexity Θ(Δ^{-2} log 1/δ) with Δ=min. If Δ→0, both labels become statistically indistinguishable below lower bound; an algorithm claiming certainty with fewer than ~1/(2Δ²) log(5/(12δ)) samples fails. Verifiable: run many trials; success probability must be ≥1−δ; if not, veto. Could also test π_min lower bound in Q: n=5, s=κ/5 gives π_min ≥s/5κ =1/25? Wait π_min ≥ s/(5κ) = (κ/5)/(5κ)=1/25. Good. Prediction: if estimated π_min far below 1/25 for Q(n,κ,κ/n), numerical/algorithm error or violation. That's a fourth maybe. Need exactly 3. Use three.

Need mention "counterfactual" means in RLVR, compare policy with and without mathematical veto. We can give prediction in table maybe.

Need no odds. Fine.

Need ">=1,000-word depth" likely all sections sum. We'll produce ~2400 words.

Need be precise with LaTeX. Use \(\operatorname{rank}\), \(\mathbf{1}\). Ensure XML escaping? We can use `<` inside XML? Avoid raw `<` in text? In XML, `<` must be escaped if strict. We can use `&lt;` for less-than. But user likely parses. Since sections are XML, we should escape `<` and `&`? We can write \( \epsilon < x_{\min}/\varphi(B) \) contains `<`, which is invalid XML. Need escape as `&lt;`. Also `>` can remain? In XML text, `>` okay. But `&` must be `&amp;`. Use `&lt;` for < in equations. For \( \pi \in S_n^{++}\), no issue. For \(A^\top=-A\), no issue. For quotes with `x > 0` no issue. For `s ∈{0, 2κ}` no. For `O(...)` no. Use `&lt;` for less than. Also `\le` no raw <. For ≤ use `\le`. For < use `&lt;` or `\lt`. We can use `\lt` LaTeX? In text, `&lt;`. Need not escape `>`? XML allows >. Ampersand in LaTeX? `\&`? Avoid. Use "and". Use `\mathbf{1}` no &. Good.

Need exact quotes with [PAGE N]. Quotes may include `<`? Avoid quote with <. Use exact quote maybe with "only when n is odd". Fine. Use curly quotes? okay. Verbatim quotes need exact. We can use quotation marks. Ensure not too many. Need cite exact [PAGE 3]. Good.

Let's draft.

Potential issue: "PAGES: 21" all source. Need cite exact page markers. We'll do many.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe include a table of operator, equation, units, assumptions, breakdown. In XML can use HTML table? Fine. But no need. Use paragraphs.

Let's write THINK_TRACE ~650 words. It needs "Deep multi-hop derivation & gray-zone audit (>=400 words)." We'll write 5 steps. Mention "I do not expose hidden chain-of-thought; this is an auditable derivation summary." But maybe not necessary; could be seen as refusing. We can simply present derivation. It is not hidden chain-of-thought? It's math. Fine.

Let's compute Q det formula carefully: Page 16 says "det(Qk) = κn ((n −4)(s/κ)^2 + 4 |s|/κ)"? Actually quote: "det(Qk) = κn  (n −4) ( s κ )2 + 4 |s| κ , and φ(Q) ≃2n−8 |s| asymptotic to |s| →0" The source has "det(Qk) = κn ( (n −4)(s/κ)^2 + 4 |s|/κ )" maybe no absolute on first? It says "4 |s|/κ". We'll write exactly with \(4|s|/\kappa\). But note dimension: det has units κ^n times dimensionless bracket; okay.

At s=2κ, Q is redundant by Lemma 24; rank(Q) not n−1 by Lemma 25; φ? s=2κ not near zero, but rank fails. At s=0, rank fails and φ blow-up as s→0. Good.

Need mention "Theorem 2 Pfaffians" maybe in genealogy or operators. Page 3 quote: "A is completely mixed if and only if the principle Pfaffians p1, . . . , pn of A are all nonzero and alternate in sign." It spells "principle" in source (should principal). We can quote exact with [PAGE 3]. Good.

Need "Kaplansky [15, 16]" lineage. "After 50 years" page 3 exact: "After 50 years, he in [16] gave a proof..." We can quote. Good.

Need "Maiti et al." page 3/4. "This paper focuses on the non-redundancy of games for three or more moves, and our result is incomparable with [23]." [PAGE 4]. Good.

Need "upper/lower gap" [PAGE 10]. Good.

Need "no strongest item" page 1/2. Good.

Need "n=3 easy, mainly odd n≥5" page 3. Quote? "In fact, the case of n = 3 is easy, and we are mainly involved in the case of odd n ≥5." [PAGE 3]. Good.

Need "δ-PAC" and "α-redundant" [PAGE 8]. Quote "We say A is α-redundant if A does not have any Nash equilibrium π satisfying π ∈Sα n." [PAGE 8]. Good.

Need "sample complexity is number of rounds" [PAGE 3]: "We refer to the number of rounds required for the decision as sample complexity." Good.

Need "Theorem 10" exact with U. Good.

Need "Lemma 13 threshold" exact: "ϵ < xmin φ(B)" [PAGE 8]. We'll use.

Need "Lemma 17" threshold: t ≥ 2/ϵ² log(2n²/δ). [PAGE 9]. Good.

Need "Algorithm 1 T" [PAGE 7]. Good.

Need "Theorem 18 lower" [PAGE 9]. Good.

Need "Theorem 19" [PAGE 9]. Good.

Need "Proposition 32" [PAGE 20]. Good.

Need "Proposition 33" [PAGE 21]. Good.

Need "Bretagnolle-Huber" [PAGE 14]. Good.

Need "Hoeffding" [PAGE 5]. Good.

Need "RLVR" might expect "verifiable rewards" not "Reinforcement Learning from Verifiable Rewards". We can define.

Need "CROSS_LAYER_VETO_ADJUDICATION" phrase "Physical/biomechanical/weather veto proof." We need include exact phrase? We can use it. "Proof" maybe with logical entailment. We'll state "Veto proof (model-identifiability):" and list. 
- Physical: none in source. Any physical variable must enter A or X distribution. If it changes means, it is part of A; if it adds variance, it must satisfy Condition 2. If it introduces correlated noise, Condition 2 fails. 
- Biomechanical: similar; no biomechanical terms appear; cannot override. 
- Weather: if weather affects duel outcome independently per pair and bounded, it is absorbed in sub-Gaussian; if correlated, independence fails. 
- Cross-layer: game-theoretic veto (n odd, rank n−1) outranks statistical; statistical veto (δ confidence) outranks numerical; numerical inversion veto if φ large. 
This addresses.

Need "retrocausal genealogy" historical/scientific lineage & multi-week traps. "Multi-week traps" maybe for a research sprint. We can list "week 1 trap..." etc. We'll mention "multi-week research traps" not sports. 
- Week 1: infer from Jan-ken only; trap: n=3 gives affine relation; n≥5 inverse relation. 
- Week 2: use empirical support; trap: α-redundant vs exact. 
- Week 3: tune κ; trap: φ depends on s. 
- Week 4: extrapolate lower bound beyond n=19. 
Good.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. We'll explicitly label three. 
- Crisis habit regression: naive support test. 
- Counter-trap: overcorrection using α threshold. 
- Clock: sample thresholds. 
Maybe "recursive" levels: Level 0 observations, Level 1 estimate A, Level 2 estimate π, Level 3 estimate learner's own confidence and whether support is robust. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios. Each with prediction and verification. Use "Veto 1", "Veto 2", "Veto 3". Mention "counterfactual" compare policy with/without veto. Good.

Need word count. Let's draft with enough detail.

Need not mention "betting". Avoid "odds" entirely. "Payoff" is okay (game theory). "Duel" okay. "Win-lose" okay. "Wager" avoid.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
This is an auditable derivation summary, not hidden chain-of-thought. The paper’s target object is not a transitive ranking problem but a two-player zero-sum symmetric game represented by a skew-symmetric payoff matrix \(A\in[-1,1]^{n\times n}\). The first multi-hop inference is: skew-symmetry implies \(A^\top=-A\); for even \(n\), the determinant of a skew-symmetric matrix is zero, and complete mixedness is impossible for even \(n\), as stated in Theorem 1 [PAGE 3]. Therefore the identification problem is non-vacuous only for odd \(n\). The second hop is Kaplansky’s characterization: \(A\) is non-redundant exactly when \(\operatorname{rank}(A)=n-1\) and \(x^\top A=0^\top\) has a strictly positive solution \(x>0\) [PAGE 3]. After normalization by \(\sum_i x_i\), this solution becomes the unique Nash equilibrium \(\pi\), so “all moves are indispensable” means every coordinate of \(\pi\) is positive.

The third hop is computational. The paper replaces the \(j\)-th column of \(A\) with the all-ones column to form \(A_j\), and Lemma 8 gives \(\pi^\top=e_j^\top A_j^{-1}\) [PAGE 6]. This is the bridge between game-theoretic support and linear-algebraic inversion. The paper then defines
\[
\varphi(A)=\max_{j\in[n]}\max_{i\in[n]}\left|\left(\mathbf{1}^\top A_j^{-1}-\pi^\top\right)_i\right|,
\]
which measures the sensitivity of the \(\epsilon\)-Nash polytope vertices to inversion [PAGE 7]. The gray-zone audit begins here: \(\varphi(A)\) is not a cosmetic constant. If some \(\det(A_j)\) is near zero, \(A_j^{-1}\) is numerically and statistically unstable, and \(\varphi(A)\) becomes large. The paper explicitly says, “Intuitively, \(\varphi(A)\) gets large if \(\det(A_j)\) is close to \(0\) for some \(j\)” [PAGE 7].

The fourth hop is the algorithm. Algorithm 1 samples every unordered pair \(\{i,j\}\) repeatedly, estimates \(\hat A\), computes \(\hat\pi=e_1^\top\hat A_1^{-1}\), computes \(\varphi(\hat A)\), and uses thresholds:
\[
T=\left\lceil \frac{2U^2}{\alpha^2}\log\frac{2n^2}{\delta}\right\rceil+1,
\]
from [PAGE 7], with stopping rules involving
\[
t>\frac{2\varphi(\hat A)^2}{\hat\pi_{\min}^2}\log\frac{2n^2}{\delta}
\]
and
\[
t>\frac{2\varphi(\hat A)^2}{\alpha^2}\log\frac{2n^2}{\delta}.
\]
The proof depends on Hoeffding concentration [PAGE 5], Lemma 17 [PAGE 9], and the \(\epsilon\)-Nash polytope geometry in Lemmas 9, 13, 14, 15, and 16 [PAGES 6–9]. The upper bound in Theorem 10 is
\[
O\left(\frac{U^2}{\max\{\alpha^2,\pi_{\min}^2\}}\log\frac{n}{\delta}\right)
\]
under the assumption \(\varphi(A)\le U\) [PAGE 8].

The fifth hop is the lower-bound construction. The paper builds \(Q(n,\kappa,s)\), whose determinant and \(\varphi\) behavior isolate a single near-zero entry \(s\): it states
\[
\det(Q_k)=\kappa^n\left((n-4)\left(\frac{s}{\kappa}\right)^2+\frac{4|s|}{\kappa}\right),
\]
and
\[
\varphi(Q)\simeq \frac{2^{n-8}}{|s|}
\]
as \(s\to0\), “almost independent of \(\kappa\), interestingly” [PAGE 16]. Lemma 24 says \(Q\) is non-redundant if \(0<s<2\kappa\), otherwise redundant [PAGE 16]; Lemma 25 says \(\operatorname{rank}(Q)=n-1\) unless \(s\in\{0,2\kappa\}\) [PAGE 16]. Thus the singular/breakdown regimes are explicit: \(s=0\) and \(s=2\kappa\) destroy the rank condition, and \(s\to0\) makes \(\varphi(Q)\) diverge. The gray zone is the interval where \(\pi_{\min}>0\) but small, or where the algorithm can only certify \(\alpha\)-redundancy rather than exact redundancy; the paper defines \(\alpha\)-redundancy on [PAGE 8]. The upper and lower bounds do not meet; the paper says, “Filling the gap between upper and lower bounds is a future work” [PAGE 10].

Overall, the derivation is a chain: skew-symmetry \(\rightarrow\) odd \(n\) \(\rightarrow\) rank \(n-1\) and positive null vector \(\rightarrow\) \(\pi=e_j^\top A_j^{-1}\) \(\rightarrow\) \(\varphi(A)\) inversion sensitivity \(\rightarrow\) \(\epsilon\)-Nash polytope vertex checks \(\rightarrow\) PAC sample complexity. The audit must reject any inference that skips the rank/null-vector condition, treats \(\hat\pi_{\min}>0\) as exact nonredundancy, or treats \(\varphi(A)\) as scale-invariant in \(s\).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Formal setting and units.** The sample complexity is a round count \(N\) (dimensionless integer rounds), as the paper defines: “We refer to the number of rounds required for the decision as sample complexity” [PAGE 3]. Payoff entries are normalized to \(a_{ij}\in[-1,1]\), so they are dimensionless utility differences; the duel result \(X_{ij}\) is 1-sub-Gaussian with mean \(a_{ij}\) and variance at most \(1\) in squared payoff units. The margin \(\alpha\in(0,1/n]\) is a strategy-coordinate threshold and is dimensionless; \(\delta\in(0,1)\) is a failure probability, also dimensionless. \(\varphi(A)\) is dimensionless under this normalization because it is built from entries of \(A_j^{-1}\) and \(\pi\).

**Core operator.** Let \(A\in[-1,1]^{n\times n}\) be skew-symmetric for odd \(n\ge3\), with \(\operatorname{rank}(A)=n-1\), and let \(x^\top A=0^\top\) with \(\sum_i x_i\ne0\). After normalization,
\[
\pi_i=\frac{x_i}{\sum_{l=1}^n x_l},\qquad \pi\in S_n,\qquad \pi^\top A=0^\top.
\]
The paper’s Condition 1 states: “\(A\in[-1,1]^{n\times n}\) for an odd \(n\ge3\) is skew-symmetric, satisfies \(\operatorname{rank}(A)=n-1\) and has a solution of \(x^\top A=0^\top\) such that \(\sum_{i=1}^n x_i\ne0\)” [PAGE 4]. Condition 2 states: “the result \(X_{ij}\) of a dual follows 1-sub-Gaussian with mean \(a_{ij}\). All results are mutually independent” [PAGE 4].

**Inversion operator.** For each \(j\), let \(A_j\) be \(A\) with column \(j\) replaced by \(\mathbf{1}\). Lemma 8 gives
\[
\pi^\top=e_j^\top A_j^{-1}.
\]
[PAGE 6]. This requires \(A_j\) nonsingular, which Lemma 7 ties to \(\operatorname{rank}(A)=n-1\) and \(\sum_i x_i\ne0\) [PAGE 6].

**Sensitivity operator.**
\[
\varphi(A)=\max_{j\in[n]}\max_{i\in[n]}\left|\left(\mathbf{1}^\top A_j^{-1}-\pi^\top\right)_i\right|.
\]
[PAGE 7]. The paper says, “Intuitively, \(\varphi(A)\) gets large if \(\det(A_j)\) is close to \(0\) for some \(j\)” [PAGE 7].

**\(\epsilon\)-Nash polytope.** With \(S_n=\{x\in\mathbb R^n:\sum_i x_i=1\}\) and \(S_n^+=\{x\in S_n:x\ge0\}\),
\[
P_A(\epsilon)=\{x\in S_n:x^\top A\ge-\epsilon\mathbf{1}^\top\}.
\]
[PAGE 4]. Lemma 9 gives vertices
\[
v_j^\top=\pi^\top-\epsilon\left(\mathbf{1}^\top A_j^{-1}-\pi^\top\right),
\]
so \(P_A(\epsilon)=\operatorname{conv}\{v_1,\dots,v_n\}\) [PAGE 6]. The key margin lemma is: if \(x\in S_n^{++}\) and
\[
\epsilon&lt;\frac{x_{\min}}{\varphi(B)},
\]
then \(P_B(\epsilon)\subseteq S_n^{++}\) [PAGE 8]. This is the precise gray-zone threshold: the support conclusion is stable only when the estimation error is smaller than the minimum Nash mass divided by inversion sensitivity.

**Algorithm thresholds.** Algorithm 1 uses
\[
T=\left\lceil\frac{2U^2}{\alpha^2}\log\frac{2n^2}{\delta}\right\rceil+1
\]
[PAGE 7]. It concludes nonredundant when
\[
t>\frac{2\varphi(\hat A)^2}{\hat\pi_{\min}^2}\log\frac{2n^2}{\delta}
\quad\text{and}\quad
\hat\pi_{\min}>0
\]
[PAGE 7]. It checks \(\alpha\)-redundancy when
\[
t>\frac{2\varphi(\hat A)^2}{\alpha^2}\log\frac{2n^2}{\delta},
\]
setting \(\epsilon=\alpha/\varphi(\hat A)\), and checks the final case with \(\epsilon=\alpha/U\) [PAGE 7]. Lemma 17 gives the concentration threshold: if
\[
t\ge\frac{2}{\epsilon^2}\log\frac{2n^2}{\delta},
\]
then with probability at least \(1-\delta\), \(|\hat a_{ij}^{(t)}-a_{ij}|&lt;\epsilon\) for all pairs [PAGE 9].

**Upper bound.** Theorem 10 states: “Suppose \(A\in[-1,1]^{n\times n}\) satisfies Condition 1, and suppose that we can assume that \(\varphi(A)\le U\). Then, Algorithm 1 correctly concludes about the nonredundancy of \(A\) with probability at least \(1-\delta\). The sample complexity of Algorithm 1 is \(O(U^2/\max\{\alpha^2,\pi_{\min}^2\}\log(n/\delta))\)” [PAGE 8].

**Lower bounds.** Theorem 18 gives
\[
\mathbb E[\tau]\ge\frac{1}{2\alpha^2}\log\frac{5}{12\delta}
\]
[PAGE 9], and Theorem 19 gives
\[
\mathbb E[\tau]=\Omega\left(\varphi(A)^2\log\frac{1}{\delta}\right)
\]
for each \(n=5,7,\dots,19\) [PAGE 9]. Together they yield
\[
\Omega\left(\max\left\{\frac{1}{\alpha^2},\varphi(A)^2\right\}\log\frac{1}{\delta}\right)
\]
for those \(n\) [PAGE 9]. For \(n=3\), Theorem 6 gives
\[
\Theta\left(\frac{1}{\Delta^2}\log\frac{1}{\delta}\right),
\qquad
\Delta=\min\{|a|,|b|,|c|\}.
\]
[PAGE 5].

**Singularities and breakdown regimes.** (i) Even \(n\): complete mixedness is impossible; Theorem 1 says \(A\) is completely mixed “only when \(n\) is odd” [PAGE 3]. (ii) Rank breakdown: if \(\operatorname{rank}(A)\ne n-1\), the \(A_j^{-1}\) construction and Lemma 8 fail. The \(Q(n,\kappa,s)\) example has \(\operatorname{rank}(Q)=n-1\) “unless \(s\in\{0,2\kappa\}\)” [PAGE 16]. (iii) Inversion breakdown: \(\varphi(A)\to\infty\) as \(\det(A_j)\to0\); the paper notes \(\varphi(Q)\simeq 2^{n-8}/|s|\) as \(s\to0\) [PAGE 16]. (iv) Margin breakdown: \(\alpha\to0\) causes \(1/\alpha^2\to\infty\); \(\pi_{\min}\to0\) causes the upper bound to diverge. (v) Noise breakdown: if \(X_{ij}\) loses 1-sub-Gaussianity or independence, Theorem 5 and Lemma 17 no longer justify the PAC guarantee [PAGE 5, PAGE 9]. (vi) Lower-bound scope: the \(\varphi(A)^2\) lower bound is proved for \(n=5,7,\dots,19\), not all \(n\) [PAGE 9].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is unusually clear. The game-theoretic root is von Neumann–Morgenstern, cited as [35] [PAGE 11], and the nonredundancy root is Kaplansky 1945 [15] and 1995 [16]. The paper says, “After 50 years, he in [16] gave a proof of the following theorem which characterizes skew-symmetric \(A\) being non-redundant in terms of the principal Pfaffians of \(A\)” [PAGE 3]. That retrocausal chain matters: the 1945 theorem gives the rank/null-vector characterization, while the 1995 Pfaffian theorem gives the alternating-sign condition and the proportional strategy \(p=(p_1,-p_2,\dots,(-1)^{n-1}p_n)\) [PAGE 3]. A modern learner that only checks empirical support is therefore reaching back to a weaker, incomplete version of the 1945–1995 result.

The dueling-bandit lineage is Yue–Joachims 2009 [37] and Yue et al. 2012 [38], followed by SAVAGE [34], relative upper confidence bound [40], and Copeland dueling bandits [41]. Most of that lineage assumes transitivity, a total/partial order, or at least a Condorcet/Copeland champion [PAGE 1]. The paper’s retrocausal move is to remove that champion assumption and ask whether all moves are indispensable in a nontransitive relation. Jan-ken is the minimal example: no strongest item [PAGE 2]. The four-item extension is the first trap: any four-item Jan-ken variant contains a useless item “unless allowing a tie-break between distinct \(i,j\)” [PAGE 2]. Thus, a researcher who tests only \(n=3\) and \(n=4\) may falsely infer that “no champion” is the same as “no redundancy.” The paper’s theorem says the opposite: even \(n\) is always redundant, and odd \(n\ge5\) requires the rank and positive-null-vector conditions.

The Maiti et al. lineage on zero-sum matrix games is also pivotal. The paper says, “This paper focuses on the non-redundancy of games for three or more moves, and our result is incomparable with [23]” [PAGE 4]. That incomparability is a multi-week research trap: one cannot import a \(2\times2\) zero-sum or pure-strategy-Nash sample-complexity bound into the nontransitive support-identification problem. The objects are different: [23] studies \(\epsilon\)-Nash equilibrium identification, while this paper studies whether the whole support is indispensable.

The \(Q(n,\kappa,s)\) construction is a retrocausal warning about scale tuning. The determinant formula contains \((s/\kappa)^2\) and \(4|s|/\kappa\), and \(\varphi(Q)\simeq 2^{n-8}/|s|\) is “almost independent of \(\kappa\), interestingly” [PAGE 16]. A multi-week trap is to tune \(\kappa\) while leaving \(s\) near zero. The singularity is controlled by \(s\), not by \(\kappa\) alone. Lemma 24’s threshold \(0<s<2\kappa\) and Lemma 25’s rank exception \(s\in\{0,2\kappa\}\) are the exact algebraic boundaries [PAGE 16]. Another trap is extrapolating the lower bound beyond \(n=19\); the theorem explicitly covers \(n=5,7,\dots,19\) [PAGE 9]. A final trap is treating the upper and lower bounds as matching: the paper states, “Filling the gap between upper and lower bounds is a future work” [PAGE 10].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive model has three levels. Level 0 is the learner’s observation stream \(X_{ij}\). Level 1 is the learner’s estimate \(\hat A\). Level 2 is the learner’s model of both players as rational: it computes \(\hat\pi\) as the Nash equilibrium of \(\hat A\), so it is reasoning about what a rational row player and a rational column player would select. Level 3 is the learner’s model of its own inference: it asks whether the estimated equilibrium is robustly completely mixed, not merely positive in the sample. This is the theory-of-mind recursion: “I believe the game is \(A\); I believe rational players use \(\pi\); I believe my estimate \(\hat\pi\) is close enough to \(\pi\) to decide support.”

**Crisis habit regression.** The habitual failure is to collapse Level 3 into a naïve support test: if \(\hat\pi_i>0\) for all \(i\), conclude nonredundant. That is a crisis habit because it ignores the inversion sensitivity \(\varphi(\hat A)\) and the sample clock. The paper’s conclusion (a) is guarded by both \(t>2\varphi(\hat A)^2/\hat\pi_{\min}^2\log(2n^2/\delta)\) and \(\hat\pi_{\min}>0\) [PAGE 7]. The habit regression is especially dangerous when the true \(\pi_{\min}\) is small but positive: the empirical sign can flip before the confidence threshold is reached.

**Counter-trap.** The overcorrection is to declare redundancy whenever any \(\hat\pi_i\) is near zero, or to treat \(\alpha\)-redundancy as exact redundancy. The paper defines \(\alpha\)-redundancy as “\(A\) does not have any Nash equilibrium \(\pi\) satisfying \(\pi\in S_n^\alpha\)” [PAGE 8]. That is a margin statement, not an exact support statement. The counter-trap is therefore to use the \(\alpha\)-check outside its guarantee. Lemma 15 supports the \(\alpha\)-redundancy conclusion only when the estimation error is below \(\alpha/\varphi(\hat A)\) [PAGE 9], and Lemma 13 requires \(\epsilon&lt;x_{\min}/\varphi(B)\) for the polytope to lie inside \(S_n^{++}\) [PAGE 8].

**Clock.** The clock is the sample-count threshold, not wall-clock time. The algorithm’s outer clock is \(T=\lceil 2U^2/\alpha^2\log(2n^2/\delta)\rceil+1\) [PAGE 7]. The inner clocks are the two inequalities above. The lower bound clock is \(\mathbb E[\tau]\ge(1/(2\alpha^2))\log(5/(12\delta))\) [PAGE 9], with the additional \(\Omega(\varphi(A)^2\log(1/\delta))\) term for \(n=5,\dots,19\) [PAGE 9]. The recursive lesson is that the learner must reason about its own stopping time: a decision made before the clock is a guess, and a decision made after the clock but with large \(\varphi(\hat A)\) can still be numerically unstable.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Physical/biomechanical/weather veto proof.** The source contains no physical, biomechanical, or weather variables, no sensor measurements, and no environmental covariates. Its admitted layers are: (1) game-theoretic structure \(A^\top=-A\), odd \(n\), \(\operatorname{rank}(A)=n-1\), and a positive null vector [PAGE 3, PAGE 4]; (2) statistical noise \(X_{ij}\) 1-sub-Gaussian and independent [PAGE 4]; and (3) numerical inversion through \(A_j^{-1}\) and \(\varphi(A)\) [PAGE 7]. Therefore any claim that a physical, biomechanical, or weather factor changes the sample complexity must enter one of those layers. If it changes the mean duel outcome, it is already part of \(A\). If it adds bounded independent noise, it is absorbed by the 1-sub-Gaussian condition. If it creates correlated outcomes across pairs or rounds, Condition 2’s independence fails, and the Hoeffding/Lemma 17 guarantee no longer applies [PAGE 5, PAGE 9]. That is the cross-layer veto: the paper cannot be patched by adding weather or biomechanics post hoc; the model must be rebuilt and the PAC guarantee re-proved.

**Adjudication order.** First, the game-theoretic veto: even \(n\) is impossible for complete mixedness, and odd \(n\) requires rank \(n-1\) [PAGE 3]. Second, the algebraic veto: \(\sum_i x_i\ne0\) is required for \(A_j^{-1}\) and for the normalization of \(\pi\) [PAGE 4, PAGE 6]. Third, the numerical veto: if \(\det(A_j)\) is near zero, \(\varphi(A)\) is large and the vertex formula \(v_j^\top=\pi^\top-\epsilon(\mathbf1^\top A_j^{-1}-\pi^\top)\) is ill-conditioned [PAGE 6, PAGE 7]. Fourth, the statistical veto: if \(t\) is below \(2\epsilon^{-2}\log(2n^2/\delta)\), the uniform error bound is not certified [PAGE 9]. Fifth, the lower-bound veto: for \(n=5,\dots,19\), no algorithm can beat \(\Omega(\max\{1/\alpha^2,\varphi(A)^2\}\log(1/\delta))\) [PAGE 9]. A physical or weather story that predicts faster identification must contradict one of these five layers; absent such a contradiction, it is non-identifiable and should be rejected.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**RLVR setup.** Treat the algorithm or model as a policy producing a label “nonredundant” or “redundant” for a verifiable game instance. The reward is 1 only if the label matches the mathematical ground truth and the stated PAC/margin conditions; otherwise the run is vetoed. The counterfactual is: compare a policy with the mathematical veto to the same policy without it.

**Veto 1: even-\(n\) impossibility.** Generate a random skew-symmetric \(A\in[-1,1]^{4\times4}\). Prediction: any valid policy must output “redundant” or “not nonredundant,” never “nonredundant.” This is verifiable from Theorem 1: complete mixedness occurs “only when \(n\) is odd” [PAGE 3]. A policy that declares nonredundant for \(n=4\) is vetoed regardless of its confidence. Counterfactual prediction: removing the parity veto increases false nonredundant labels on even-\(n\) instances from near zero to a positive rate.

**Veto 2: \(Q(n,\kappa,s)\) singularity and rank boundary.** Take \(n=5\), \(\kappa=0.1\). The verifiable labels are: if \(0<s<2\kappa\), \(Q\) is nonredundant; otherwise it is redundant [PAGE 16]. Also \(\operatorname{rank}(Q)=n-1\) unless \(s\in\{0,2\kappa\}\) [PAGE 16]. Prediction: at \(s=0\) and \(s=2\kappa\), a correct policy must not declare nonredundant; at \(s=0.05\kappa\), it may declare nonredundant only after a sample clock consistent with \(\varphi(Q)\simeq2^{n-8}/|s|\) [PAGE 16]. A policy that returns “nonredundant” at \(s=2\kappa\), or that returns it at \(s=0.05\kappa\) with a small fixed sample count, is vetoed. Counterfactual prediction: removing the \(\varphi\)-based clock causes early false nonredundant conclusions as \(s\to0\).

**Veto 3: \(3\times3\) sign-consistency and \(\Delta^{-2}\) clock.** For
\[
A=\begin{pmatrix}0&a&-b\\-a&0&c\\b&-c&0\end{pmatrix},
\]
Theorem 6 gives sample complexity \(\Theta(\Delta^{-2}\log(1/\delta))\) with \(\Delta=\min\{|a|,|b|,|c|\}\) [PAGE 5]. Prediction: if \(a,b,c\) have the same sign, the instance is nonredundant; if one sign differs, it is redundant. If \(\Delta\) is halved, the required sample count must grow by roughly a factor of four up to logarithmic terms. A policy that keeps the same sample budget after halving \(\Delta\), or that certifies a sign pattern when \(\Delta\to0\), is vetoed. Counterfactual prediction: without the \(\Delta^{-2}\) clock, success probability falls below \(1-\delta\) on near-tie sign patterns, which is directly measurable across repeated trials.
</RLVR_COUNTERFACTUAL_VETOES>