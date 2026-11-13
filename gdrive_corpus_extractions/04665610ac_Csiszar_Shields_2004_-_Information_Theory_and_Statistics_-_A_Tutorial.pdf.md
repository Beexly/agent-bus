---
source: "Csiszar & Shields (2004) - Information Theory and Statistics - A Tutorial.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-d-models"
pages: 116
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5469
---

<NATIVE_REASONING>
The user is asking me to provide a comprehensive analysis of the provided PDF (Csiszár & Shields, 2004 - Information Theory and Statistics: A Tutorial) following a very specific format with strict invariants.

 Let me break down what's needed:

 1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
 2. ZERO TOY EQUATIONS: No fake ratios. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
 3. >= 1,000-WORD DEPTH across exact XML sections:
    - <THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit
    - <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown
    - <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps
    - <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock
    - <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof
    - <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions

 Wait, the user says "PAGES: 116" and provided the full text. I need to analyze this source text deeply.

 Let me plan the response:

 THINK_TRACE: Multi-hop derivation of how I-divergence connects large deviations, hypothesis testing, I-projections, exponential families, iterative algorithms, universal coding, redundancy bounds, and MDL. Audit gray zones like finite alphabet restriction, singularity/breakdown regimes (D(P||Q)=∞ when support issues), non-convexity in EM, MDL counterexample (Example 8.4).

 SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the text: entropy H(P) = -Σ P(a) log P(a) [PAGE 10], I-divergence D(P||Q) = Σ P(a) log P(a)/Q(a) [PAGE 11], log-sum inequality [PAGE 11], Kraft inequality [PAGE 12], Sanov's theorem [PAGE 19-20], Stein's lemma [PAGE 22-23], I-projection Pythagorean identity [PAGE 30-31], EM algorithm [PAGE 59-60], redundancy R(xn) = L(xn) + log P(xn) [PAGE 65], channel capacity/I-radius duality [PAGE 79-83], MDL [PAGE 110-111]. Need units (bits, nats depending on log base; here base 2 so bits), singularity regimes (Q(a)=0 with P(a)>0 gives +∞, boundary of exponential family where MLE doesn't exist if S(L)≠A [PAGE 32-33]).

 RETROCAUSAL_GENEALOGY: Shannon 1948 [PAGE 44/113], Kullback-Leibler 1951 [PAGE 115], Sanov 1957 [PAGE 114], Wald 1947 sequential tests [PAGE 115], Csiszár & Körner [15], Cover & Thomas [8], Rissanen MDL [36,39], BIC Schwarz [43], context weighting Willems et al [50]. Multi-week traps: iterative scaling convergence assumptions, EM local optima, MDL consistency failure in Example 8.4.

 RECURSIVE_THEORY_OF_MIND: This is a meta-cognitive section about crisis habit regression vs counter-trap vs clock. I need to interpret this in the context of statistical inference and model selection. "Crisis habit regression" = falling back to maximum likelihood when model misspecified. "Counter-trap" = MDL penalty / regularization. "Clock" = sample size n and redundancy growth rates (log n terms).

 CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This seems like a domain translation - perhaps treating information-theoretic assumptions as physical constraints. Veto conditions: finite alphabet assumption breaks for continuous spaces; singularity when supports don't match; non-compact parameter spaces break I-centroid uniqueness; EM gets stuck in local optima when Q not convex [PAGE 61].

 RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios with predictions.
 1. Veto: If true process P is not in closure of convex set Π, D(Π||P)=0 boundary case causes Type 2 error not to vanish [PAGE 24-25]. Prediction: hypothesis test fails to reject boundary alternatives.
 2. Veto: EM algorithm with non-convex Q gets stuck at local optimum; D(P^T||Q^T_k) may not approach Dmin [PAGE 61]. Prediction: mixture weight estimation converges to suboptimal weights.
 3. Veto: MDL consistency fails when L(m)=o(m) for i.i.d. uniform process, order estimator diverges [PAGE 104-105]. Prediction: MDL selects infinite order for i.i.d. uniform data.

 I must ensure >= 1,000 words total across sections. Each section needs substantial depth.

 Let me draft carefully, ensuring no betting lines, no toy equations, proper LaTeX, page citations, verbatim quotes where appropriate.

 Let me check the page numbering in the source. The PDF pages are labeled [PAGE 1] through [PAGE 116]. The printed page numbers are 417-528. I should cite [PAGE N] as given in the XML-like markers.

 Let me verify some key quotes and page locations:
 - Page 10: entropy definition H(P) = - Σ P(a) log P(a). Base two logarithms. 0 log 0 = 0.
 - Page 11: I(X∧Y) = H(X) - H(X|Y). D(P||Q) = Σ P(a) log P(a)/Q(a). Log-sum inequality.
 - Page 12: Lemma 1.1 Kraft inequality. Theorem 1.1 Shannon noiseless coding E(L) ≥ H(P).
 - Page 17-18: Types, empirical distribution, Lemma 2.2 bounds on type class size.
 - Page 18-19: Lemma 2.3 connecting types and probability: P^n(T^n_Q) ≈ 2^{-nD(Q||P)}.
 - Page 19: Corollary 2.1, Sanov's theorem setup.
 - Page 19-20: Theorem 2.1 Sanov's Theorem: -1/n log Prob(̂Pn ∈ Π) → D(Π||P).
 - Page 20-21: Example 2.1 large deviations via exponential family tilting.
 - Page 22: Theorem 2.2, Stein's lemma setup.
 - Page 23: Remark 2.2 lumping property.
 - Page 24-25: Theorem 2.3 hypothesis testing critical region, asymptotic optimality.
 - Page 26-27: Sequential tests, SPRT, Wald's identity.
 - Page 28-29: I-projection definition, Theorem 3.1 support and inequality.
 - Page 30: Theorem 3.2 Pythagorean identity for linear families.
 - Page 32: Remark 3.1 form of I-projection on support subset.
 - Page 32-33: Theorem 3.3 MLE equals I-projection onto linear family of sufficient statistics.
 - Page 35-36: f-divergence definition, examples χ², Hellinger, variational.
 - Page 36-37: Lemma 4.1 lumping property, convexity.
 - Page 37: Theorem 4.1 asymptotic equivalence to χ² divergence.
 - Page 39: Lemma 4.2 transitivity of projections unique to I-divergence.
 - Page 40-41: Theorem 4.2 χ² limiting distribution for contingency table test statistics.
 - Page 45-46: Outlier detection via Pythagorean decomposition.
 - Page 47-49: Iterative scaling, Theorem 5.1 convergence to I-projection onto intersection.
 - Page 50-51: Generalized iterative scaling Theorem 5.2.
 - Page 52-55: Alternating divergence minimization Theorem 5.3, three-points/four-points properties, Corollary 5.1.
 - Page 56-57: Decomposition of mixtures, portfolio optimization (Cover's algorithm).
 - Page 59-61: EM algorithm as alternating divergence minimization, local optima warning.
 - Page 64-66: Universal coding redundancy definition, Theorem 6.1 pointwise redundancy bound.
 - Page 66-68: Two-stage codes, redundancy ~ (|A|-1)/2 log n.
 - Page 68: Theorem 6.2 NML distribution minimizes worst-case max redundancy.
 - Page 69-71: Krichevsky-Trofimov estimator for i.i.d., Theorem 6.3 bound.
 - Page 71-72: Theorem 6.4 R*_n = (k-1)/2 log n + O(1).
 - Page 72-75: Markov chains order m, redundancy ~ k(k-1)m/2 log n.
 - Page 75-77: Context weighting, mixture processes, Theorem 6.6 weak universality for stationary processes.
 - Page 78-79: Redundancy bounds, I-radius and channel capacity.
 - Page 79-81: Lemma 7.1, Theorem 7.1 sup D(Pθ||Q) ≥ I(ν), equality iff capacity achieving.
 - Page 81-82: Lemma 7.2 capacity achieving distribution on finite subset size ≤ |A|.
 - Page 82-83: Corollary 7.1 existence of unique I-centroid. Theorem 7.2 I-radius = channel capacity.
 - Page 83-85: Theorem 7.3 lower bound on capacity via estimation error.
 - Page 85-87: Theorem 7.4 lower bound R_n ≥ k/2 log n - K.
 - Page 87-90: Theorem 7.5 optimality for i.i.d. and Markov classes.
 - Page 90-92: Theorem 8.1 mutual singularity ⇒ redundancy → ∞.
 - Page 92-94: Lemma 8.1 divergence rate, Theorem 8.2 sublinear redundancy growth for mixtures.
 - Page 95-97: Example 8.3 no strongly universal codes for ergodic processes.
 - Page 97-98: Lemma 8.2 code generated by list, mixture comparison.
 - Page 99-101: MDL principle, equivalence to Bayesian inference with priors 2^{-L(γ)}.
 - Page 100-101: NML codes, penalized ML, BIC penalty (1/2) k_γ log n.
 - Page 101-102: Theorem 8.3 consistency of MDL for mutually singular processes.
 - Page 102-103: Theorem 8.4 parametric classes, MDL order estimation consistency.
 - Page 103-105: Example 8.4 counterexample to MDL consistency, i.i.d. uniform, order estimator diverges.
 - Page 105-108: Appendix process concepts, ergodic theorem, entropy theorem.
 - Page 108-111: Historical notes.
 - Page 111-116: References.

 I need to weave these into the required sections.

 Let me think about the depth requirement: >= 1,000 words across sections. THINK_TRACE alone >= 400 words.

 Let me start writing.

 Structure:
 1. THINK_TRACE: Deep multi-hop derivation + gray-zone audit.
    - Derive Sanov from types → large deviations exponent → hypothesis testing critical region → Stein's lemma → I-projection Pythagorean identity → MLE as reverse I-projection → EM as alternating minimization → universal coding redundancy → NML → channel capacity/I-radius duality → MDL consistency and its breakdown.
    - Gray zones: finite alphabet restriction (page 8 preface), D(P||Q)=∞ singularity when Q(a)=0, P(a)>0 (page 11), boundary of exponential family where MLE doesn't exist (page 32-33), non-convex Q in EM causing local optima (page 61), MDL counterexample Example 8.4 (page 103-105).

 2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX blocks with page citations, units (bits since log base 2), assumptions, breakdown regimes.

 3. RETROCAUSAL_GENEALOGY: Lineage Shannon → Kullback-Leibler → Sanov → Wald → Csiszár → Cover/Thomas → Rissanen → Barron → Shtarkov. Multi-week traps: convergence rates in n vs log n, the (|A|-1)/2 log n penalty, context switching in mixture models.

 4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression = MLE overfitting when model class misspecified; counter-trap = MDL penalty / I-divergence regularization; clock = sample size n governing redundancy growth (log n / n). How the statistician's "mind" regresses to empirical risk minimization under sample-size pressure.

 5. CROSS_LAYER_VETO_ADJUDICATION: Physical layer (finite alphabet assumption fails for continuous alphabets without measure theory, page 8), biomechanical layer (iterative algorithm convergence requires compactness/support conditions, pages 48-55), weather layer (external distributional shift / non-stationarity breaks ergodic assumptions, pages 95-97). Veto proof: if support condition S(P) ⊄ S(Q) then D(P||Q)=∞ (page 11), test breaks.

 6. RLVR_COUNTERFACTUAL_VETOES: Three scenarios with formal veto conditions and predictions.

 Let me write this now, ensuring I meet word count. I'll need to be verbose but precise.

 Important: No betting lines. No toy equations like Force/Fatigue. All equations must be from the source or formally derived from it with proper units.

 Let me draft the content.

 THINK_TRACE (aiming ~500 words):

 Start with the combinatorial type method (Lemma 2.1, page 17) as the root. Multi-hop: types → empirical distributions → Sanov's theorem (page 19-20) → exponential tilting to compute large deviations exponents (page 20-21) → hypothesis testing critical region based on inf D(̂P||P) (page 24) → Stein's lemma and optimal error exponents D(P1||P2) (page 22-23) → I-projection as geometric minimization (page 28-30) → Pythagorean identity (page 30) → MLE as reverse I-projection onto linear family of sufficient statistics (page 32-33) → f-divergence generalization and χ² asymptotics for contingency tables (page 35-41) → iterative scaling and EM as alternating divergence minimization (page 47-61) → universal coding redundancy and NML (page 64-71) → minimax redundancy = channel capacity / I-radius (page 78-83) → MDL as penalized ML with BIC-type penalty (page 99-101) → consistency conditions and counterexamples (page 101-105).

 Gray-zone audit:
 1. Finite alphabet restriction explicitly excludes Gaussian dichotomy and general Sanov (page 8 preface). Breakdown: continuous alphabets require measure-theoretic tools not developed here.
 2. D(P||Q) = +∞ if P(a)>0 and Q(a)=0 (page 11). Singularity: supports must match or I-divergence explodes; this vetoes absolute continuity assumptions.
 3. MLE nonexistence on boundary of exponential family when S(L) ≠ A (page 32-33). The I-projection exists in closure but not in family; counter-trap is to use cl(E).
 4. EM local optima when Q non-convex (page 61). No global convergence guarantee; multiple restarts required.
 5. MDL consistency failure Example 8.4: i.i.d. uniform process with true order 0 but L(m)=o(m) causes order estimate → ∞ (page 103-105). The clock (sample size) does not save MDL when model description cost grows too slowly.

 SOURCE_OPERATORS_AND_EQUATIONS: List equations with page refs.

 RETROCAUSAL_GENEALOGY: Cite historical notes pages 108-112. Shannon 1948 [ref 44], Kullback-Leibler 1951 [ref 33], Sanov 1957 [ref 42], Wald 1947 [ref 49], Csiszár & Körner [15], Cover & Thomas [8], Rissanen [36,39], Schwarz BIC [43], Barron [3], Shtarkov [46], Willems context weighting [50].

 Multi-week traps: The gap between weak universality (expected redundancy per symbol → 0) and strong universality (max redundancy per symbol → 0) fails for class of all stationary/ergodic processes (Example 8.3, page 96-97). Over weeks of data, stationary-but-non-Markov processes can accumulate unbounded max redundancy. Also, context weighting requires calculating conditional probabilities of mixture; practicality issue noted page 77.

 RECURSIVE_THEORY_OF_MIND: This section is abstract. I'll interpret: The statistician under sample-size pressure regresses to MLE (crisis habit regression) because it minimizes description length of data given model without paying model complexity cost. The counter-trap is MDL's two-part code L(γ) + L_γ(x^n) (page 100). The clock is n: as n grows, the (1/2) k_γ log n penalty (BIC, page 100) dominates overfitting, but if L(m)=o(m) too slowly, the clock never rings (Example 8.4, page 104). Habit regression vs counter-trap is resolved asymptotically only when penalty grows at least logarithmically in model complexity.

 CROSS_LAYER_VETO_ADJUDICATION:
 - Physical layer: Alphabet finiteness (page 8). Continuous spaces break type class combinatorics.
 - Biomechanical layer: Convexity/compactness for I-projection uniqueness (page 29, page 54). If Π not closed or Q not convex, alternating minimization may not converge to global min (Theorem 5.3 conditions page 52-53).
 - Weather layer: Non-stationarity / distribution shift. Ergodic theorem requires stationarity (Appendix page 108). If process drifts, redundancy per symbol does not vanish (Theorem 8.2 assumptions page 93-94).
 Veto proof: If ∃a with P(a)>0, Q(a)=0 then D(P||Q)=+∞ (page 11), so any code based on Q has infinite redundancy for sequences containing a (page 64-65 definition). This is an absolute veto.

 RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
 1. Veto: Boundary alternative in hypothesis testing. Condition: P2 ∈ closure(Π) \ Π, so D(Π||P2)=0 (page 24-25). Prediction: Type 2 error probability does not go to zero; test cannot distinguish P2 from Π asymptotically.
 2. Veto: EM with non-convex feasible set. Condition: Q not convex/compact (page 61). Prediction: Q_k converges to local optimum; D(̂P^T||Q_k^T) stalls above Dmin; mixture weights misestimated.
 3. Veto: MDL order estimation with sublinear description cost. Condition: true P i.i.d. uniform, L(m)=o(m) (page 103-105). Prediction: ̂m(x^n) → ∞ a.s.; MDL selects spurious higher-order Markov structure forever.

 Let me now write the final output with proper XML tags. I need to ensure total words >= 1000. I'll write generously.

 I need to include verbatim quotes where citing pages. I'll include a few key quotes.

 Let me write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds as a multi-hop chain rooted in the combinatorial method of types (Section 2.1, [PAGE 17–19]). Lemma 2.1 bounds the number of n-types by the stars-and-bars coefficient \(\binom{n+|A|-1}{|A|-1}\), and Lemma 2.2 sandwiches the type-class cardinality as \(\binom{n+|A|-1}{|A|-1}^{-1}2^{nH(P)} \le |T^n_P| \le 2^{nH(P)}\) ([PAGE 17]). Lemma 2.3 then couples the empirical type \(Q\) with the underlying i.i.d. law \(P^n\): for \(x_1^n \in T^n_Q\), \(P^n(x_1^n)/Q^n(x_1^n)=2^{-nD(Q\|P)}\), yielding \(P^n(T^n_Q)\asymp 2^{-nD(Q\|P)}\) up to polynomial factors ([PAGE 18]). Corollary 2.1 converts this into a large-deviation bound for the empirical distribution \(\hat P_n\): \(\mathrm{Prob}(D(\hat P_n\|P)\ge\delta)\le \binom{n+|A|-1}{|A|-1}2^{-n\delta}\) ([PAGE 19]). Sanov’s theorem (Theorem 2.1, [PAGE 19–20]) upgrades this to the exact exponential rate \(-\frac1n\log\mathrm{Prob}(\hat P_n\in\Pi)\to D(\Pi\|P)\) for closed convex \(\Pi\), with the exponent realized by an exponentially tilted member \(Q^*\in\mathrm{cl}(\Pi)\) of the form \(Q^*(a)=cP(a)2^{t^*f(a)}\) ([PAGE 20–21]).

Hypothesis testing (Section 2.2, [PAGE 22–27]) inherits this geometry: the critical region \(C_n=\{x_1^n:\inf_{P\in\Pi}D(\hat P_{x_1^n}\|P)\ge\delta_n\}\) achieves type-1 error \(\epsilon_n\to0\) and type-2 error decaying at rate \(D(\Pi\|P_2)\) for every \(P_2\notin\Pi\) (Theorem 2.3, [PAGE 24]). Stein’s lemma identifies the binary-optimal exponent as \(D(P_1\|P_2)\) (Theorem 2.2, [PAGE 22]); sequential probability ratio tests match this exponent while equalizing expected sample sizes under both hypotheses ([PAGE 26–27]).

Section 3 reinterprets \(D(P\|Q)\) as nonsymmetric squared Euclidean distance. The I-projection \(P^*=\arg\min_{P\in\Pi}D(P\|Q)\) onto a closed convex set satisfies the support identity \(S(P^*)=S(\Pi)\) and the fundamental inequality \(D(P\|Q)\ge D(P\|P^*)+D(P^*\|Q)\) (Theorem 3.1, [PAGE 28–29]). For linear families \(L\), this strengthens to the Pythagorean identity \(D(P\|Q)=D(P\|P^*)+D(P^*\|Q)\) for all \(P\in L\) (Theorem 3.2, [PAGE 30–31]), and the projection has the exponential-family form \(P^*(a)=cQ(a)\exp(\sum_i\theta_i f_i(a))\) on \(S(L)\) ([PAGE 32, Remark 3.1]). Lemma 3.1 ([PAGE 32]) shows maximum likelihood estimation is a “reverse I-projection”: \(\widehat{\mathrm{MLE}}=\arg\min_{P\in\Pi}D(\hat P\|P)\). When \(\Pi\) is an exponential family \(E\), the MLE is the I-projection of \(Q\) onto the linear family \(L\) of sufficient-statistic constraints, provided \(S(L)=A\); otherwise the MLE fails to exist and one must pass to \(\mathrm{cl}(E)\) (Theorem 3.3, [PAGE 32–33]).

Section 4 extends \(D\) to \(f\)-divergences ([PAGE 35]), with \(\chi^2\), Hellinger, and variational distance as special cases ([PAGE 35–36]). Theorem 4.1 gives the local quadratic equivalence \(D_f(P\|Q)\sim\frac{f''(1)}{2}\chi^2(P,Q)\) as \(P\to Q\) ([PAGE 37]), and Corollary 4.1 evaluates constrained minima over linear families ([PAGE 37–38]). Lemma 4.2 proves that transitivity of I-projections (properties (i)–(ii), [PAGE 39]) characterizes information divergence among all \(f\)-divergences. Theorem 4.2 ([PAGE 40–41]) establishes the likelihood-ratio test statistic \(2n\log e\,D(\hat P_n\|P_n^*)\overset{d}{\to}\chi^2_{|A|-1-k}\) for contingency-table goodness of fit, with asymptotic independence of the lack-of-fit and model-fit components. Outlier detection ([PAGE 45–46]) exploits the Pythagorean decomposition to isolate cells whose removal collapses \(D(\hat P\|P^*)\).

Section 5 converts projection geometry into algorithms. Iterative scaling cyclically projects onto marginal constraint families \(L_i\); Theorem 5.1 ([PAGE 48–49]) proves convergence to the I-projection onto \(L=\cap_i L_i\) via the identity \(D(P\|Q)=D(P\|P_N)+\sum_{n=1}^N D(P_n\|P_{n-1})\). Generalized iterative scaling (Theorem 5.2, [PAGE 50–51]) handles general linear constraints through weighted geometric updates \(b_{n+1}(a)=b_n(a)\prod_i(\alpha_i/\beta_{n,i})^{f_i(a)}\). Section 5.2 frames alternating divergence minimization between convex sets via three-points and four-points properties (Theorem 5.3, [PAGE 52–53]); Corollary 5.1 ([PAGE 54–55]) gives a stopping criterion based on \(\delta(P_\infty\|P_n)-\delta(P_\infty\|P_{n+1})\). Example 5.1 ([PAGE 56–57]) derives Cover’s portfolio algorithm as a special case of mixture-weight iteration. The EM algorithm (Section 5.3, [PAGE 59–61]) is revealed as alternating minimization where the E-step computes \(P_k=\mathbb{E}_{Q_{k-1}}(\hat P_n|y_1^n)\), which minimizes \(D(P\|Q_{k-1})\) subject to the image constraint \(PT=\hat P_n^T\), and the M-step projects back onto \(Q\). Convergence to the global MLE is guaranteed only for convex compact \(Q\) started from maximal support ([PAGE 60–61]); with non-convex \(Q\), the iteration stalls at local optima ([PAGE 61]).

Sections 6–8 lift these results to universal coding and MDL. Redundancy is defined as \(R(x_1^n)=L(x_1^n)+\log P(x_1^n)\) ([PAGE 64–65]); Theorem 6.1 bounds pointwise redundancy below by \(-c_n\) eventually almost surely for \(\sum n2^{-c_n}<\infty\) ([PAGE 64–65]). Two-stage codes achieve worst-case redundancy \(\sim\frac{|A|-1}{2}\log n\) for typical types and \((|A|-1)\log n\) for constant sequences ([PAGE 66–67]). Theorem 6.2 ([PAGE 68]) proves the normalized maximum likelihood distribution \(Q_n=\mathrm{NML}_n\) minimizes worst-case maximum redundancy, with \(R_n^*=\log\sum_{x_1^n}P_{\mathrm{ML}}(x_1^n)\). The Krichevsky–Trofimov arithmetic code ([PAGE 69–71], equation (6.5)) attains \(R_C^*\le\frac{k-1}{2}\log n+O(1)\) for i.i.d. processes, and Theorem 6.4 ([PAGE 71–72]) confirms \(R_n^*=\frac{k-1}{2}\log n+O(1)\); order-\(m\) Markov classes incur \(\frac{k(k-1)m}{2}\log n\) ([PAGE 72–75]). Theorem 6.6 ([PAGE 75–77]) extends weak universality to all ergodic stationary processes via mixtures of Markov coding processes.

Section 7 identifies the minimax expected redundancy \(R_n=\min_{Q_n}\sup_{P\in\mathcal P}D(P_n\|Q_n)\) with the I-radius of the marginal class, which equals channel capacity (Theorem 7.2, [PAGE 82–83]); Lemma 7.1 ([PAGE 79]) and Theorem 7.1 ([PAGE 79–81]) establish \(\sup_\theta D(P_\theta\|Q)\ge I(\nu)\), with equality iff \(\nu\) is capacity-achieving and \(Q=Q_\nu\). Theorem 7.3 ([PAGE 83–85]) lower-bounds capacity by \(\frac{k}{2}\log\frac{k}{2\pi e\epsilon}+\log\lambda(\Theta)\) when an estimator achieves mean-square error \(\epsilon\), and Theorem 7.4 ([PAGE 88–89]) converts this into \(R_n\ge\frac{k}{2}\log n-K\) for estimable parametric classes. Theorem 7.5 ([PAGE 89–90]) proves order-\(\frac{k-1}{2}\log n\) optimality for i.i.d. and \(\frac{(k-1)km}{2}\log n\) for \(m\)-th order Markov classes.

Section 8 connects redundancy to MDL. Theorem 8.1 ([PAGE 90–92]) shows that if \(P\) and \(Q\) are mutually singular, \(Q\)-code redundancy relative to \(P\) diverges almost surely. Theorem 8.2 ([PAGE 93–94]) gives sublinear redundancy per symbol for mixture codes when the true process is well approximated by mixture components. Example 8.3 ([PAGE 96–97]) proves no strongly universal codes exist for the class of all ergodic processes: \(R_n\ge n\log|A|-\log n\). The MDL principle ([PAGE 99–101]) selects the model minimizing \(L(\gamma)+L_\gamma(x_1^n)\); with Bayesian mixture codes this is equivalent to maximizing posterior probability with prior \(2^{-L(\gamma)}\), and with NML codes it becomes penalized ML with penalty \(R_n(\gamma)\). Remark 8.2 ([PAGE 100]) derives the BIC penalty \(\frac12 k_\gamma\log n\) asymptotically. Theorems 8.3–8.4 ([PAGE 101–103]) prove MDL consistency for mutually singular and essentially disjoint parametric classes. Example 8.4 ([PAGE 103–105]) provides the crucial counterexample: for an i.i.d. uniform process (true order \(m^*=0\)), if the description cost \(L(m)=o(m)\), then MDL selects \(m\to\infty\) almost surely, violating consistency.

Gray-zone audit: (1) The entire tutorial is restricted to finite alphabets ([PAGE 8, Preface]); continuous distributions require measure-theoretic machinery not developed here, so all type-class and Sanov arguments break down without discrete support. (2) \(D(P\|Q)=+\infty\) whenever \(P(a)>0\) and \(Q(a)=0\) ([PAGE 11]); this support mismatch is an absolute singularity that invalidates any coding or testing distribution \(Q\) failing to dominate \(P\). (3) MLE existence fails on the boundary of an exponential family when \(S(L)\neq A\) ([PAGE 32–33]); one must enlarge the feasible set to \(\mathrm{cl}(E)\). (4) EM convergence to the global optimum requires convex compact \(Q\) and maximal-support initialization ([PAGE 60–61]); non-convex model classes trap the iteration locally. (5) MDL consistency can fail even for the simplest true process when the model-description clock \(L(m)\) grows too slowly ([PAGE 103–105]); sample size \(n\) alone does not rescue the criterion.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All logarithms are base 2, so information units are bits; \(0\log0:=0\) ([PAGE 10]). Entropy:
\[
H(P)=-\sum_{a\in A}P(a)\log P(a)\quad\text{[bits]}.
\]
Mutual information:
\[
I(X\wedge Y)=H(X)-H(X|Y)=H(X)+H(Y)-H(X,Y).
\]
Information divergence (Kullback–Leibler relative entropy):
\[
D(P\|Q)=\sum_{a\in A}P(a)\log\frac{P(a)}{Q(a)},\qquad D(P\|Q)\ge0,\;D(P\|Q)=0\iff P=Q,
\]
with \(D(P\|Q)=+\infty\) if \(\exists a:P(a)>0,Q(a)=0\) ([PAGE 11]). Log-sum inequality:
\[
\sum_{i=1}^t p_i\log\frac{p_i}{q_i}\ge\Big(\sum_{i=1}^t p_i\Big)\log\frac{\sum_{i=1}^t p_i}{\sum_{i=1}^t q_i}.
\]
Kraft inequality for prefix codes \(L:A\to\mathbb N\):
\[
\sum_{a\in A}2^{-L(a)}\le1,\qquad \mathbb E_P[L]\ge H(P),
\]
with Shannon code \(L(a)=\lceil-\log P(a)\rceil\) achieving \(\mathbb E[L]<H(P)+1\) ([PAGE 12]).

Types: \(\hat P(a)=\frac1n|\{i:x_i=a\}|\); number of \(n\)-types \(\binom{n+|A|-1}{|A|-1}\) ([PAGE 17]); type-class size \(\binom{n+|A|-1}{|A|-1}^{-1}2^{nH(P)}\le|T^n_P|\le2^{nH(P)}\) ([PAGE 17]). Sanov type bound (Lemma 2.3, [PAGE 18]):
\[
P^n(T^n_Q)\asymp 2^{-nD(Q\|P)},\qquad\text{more precisely }\binom{n+|A|-1}{|A|-1}^{-1}2^{-nD(Q\|P)}\le P^n(T^n_Q)\le2^{-nD(Q\|P)}.
\]
Corollary 2.1 ([PAGE 19]):
\[
\mathrm{Prob}\big(D(\hat P_n\|P)\ge\delta\big)\le\binom{n+|A|-1}{|A|-1}2^{-n\delta}.
\]
Sanov’s theorem (Theorem 2.1, [PAGE 19–20]):
\[
-\frac1n\log\mathrm{Prob}(\hat P_n\in\Pi)\to D(\Pi\|P):=\inf_{Q\in\Pi}D(Q\|P).
\]
Large-deviation exponent via exponential tilting \(Q^*(a)=cP(a)2^{t^*f(a)}\) ([PAGE 20–21]):
\[
D(\Pi\|P)=D(Q^*\|P)=\log c^*+t^*\alpha=\max_{t\ge0}\Big\{-\log\sum_aP(a)2^{tf(a)}+t\alpha\Big\}.
\]
Hypothesis-testing critical region (Theorem 2.3, [PAGE 24]):
\[
C_n=\Big\{x_1^n:\inf_{P\in\Pi}D(\hat P_{x_1^n}\|P)\ge\delta_n\Big\},\quad\delta_n=\frac{|A|\log n}{n},
\]
with type-2 exponent \(D(\Pi\|P_2)\). Stein’s lemma exponent ([PAGE 22–23]): \(-\frac1n\log P_2^n(B_n)\to-D(P_1\|P_2)\).

I-projection onto closed convex \(\Pi\):
\[
P^*=\arg\min_{P\in\Pi}D(P\|Q),\qquad S(P^*)=S(\Pi),
\]
\[
D(P\|Q)\ge D(P\|P^*)+D(P^*\|Q)\quad\forall P\in\Pi\quad\text{[Theorem 3.1, PAGE 28–29]}.
\]
Pythagorean identity for linear family \(L=\{P:\sum_aP(a)f_i(a)=\alpha_i\}\) ([PAGE 30–31, Theorem 3.2]):
\[
D(P\|Q)=D(P\|P^*)+D(P^*\|Q)\quad\forall P\in L.
\]
Exponential-family form of projection ([PAGE 32, Remark 3.1]):
\[
P^*(a)=\begin{cases}cQ(a)\exp\big(\sum_{i=1}^k\theta_if_i(a)\big),&a\in S(L)\\0,&a\notin S(L)\end{cases}.
\]
MLE as reverse I-projection (Lemma 3.1, [PAGE 32]; Theorem 3.3, [PAGE 32–33]):
\[
\widehat P_{\mathrm{MLE}}=\arg\min_{P\in\Pi}D(\hat P\|P),
\]
and if \(\Pi=E=\{P(a)=c(\theta)Q(a)e^{\sum_i\theta_if_i(a)}\}\), then \(\widehat P_{\mathrm{MLE}}=P^*\), the I-projection of \(Q\) onto \(L=\{P:\sum_aP(a)f_i(a)=\frac1n\sum_{j=1}^nf_i(x_j)\}\), provided \(S(L)=A\); otherwise MLE does not exist in \(E\), but \(P^*\in\mathrm{cl}(E)\) is the minimizer over \(\mathrm{cl}(E)\).

\(f\)-divergence ([PAGE 35]):
\[
D_f(P\|Q)=\sum_aQ(a)f\Big(\frac{P(a)}{Q(a)}\Big),\quad f(1)=0,\;f\text{ convex}.
\]
Examples: \(f(t)=t\log t\Rightarrow D_f=D(P\|Q)\); \(f(t)=(t-1)^2\Rightarrow D_f=\chi^2(P,Q)=\sum_a\frac{(P(a)-Q(a))^2}{Q(a)}\); \(f(t)=-\log t\Rightarrow D_f=D(Q\|P)\) ([PAGE 35–36]). Lumping property (Lemma 4.1, [PAGE 36]): \(D_f(P\|Q)\ge D_f(P^B\|Q^B)\). Local quadratic approximation (Theorem 4.1, [PAGE 37]):
\[
D_f(P\|Q)\sim\frac{f''(1)}{2}\chi^2(P,Q)\quad\text{as }P\to Q.
\]
Contingency-table test statistic (Theorem 4.2, [PAGE 40–41]):
\[
2n\log e\,D(\hat P_n\|P_n^*)\overset{d}{\to}\chi^2_{|A|-1-k},\qquad
2n\log e\,D(\hat P_n\|Q)\sim\chi^2_{|A|-1},\quad
2n\log e\,D(P_n^*\|Q)\sim\chi^2_k,
\]
asymptotically independent.

Iterative scaling convergence (Theorem 5.1, [PAGE 48–49]): cyclic projections \(P_{n+1}=\Pi_{L_{n+1}}(P_n)\) satisfy \(P_n\to P^*=\Pi_L(Q)\) for \(L=\cap_iL_i\neq\emptyset\). Generalized iterative scaling (Theorem 5.2, [PAGE 50–51]):
\[
b_{n+1}(a)=b_n(a)\prod_{i=1}^k\Big(\frac{\alpha_i}{\beta_{n,i}}\Big)^{f_i(a)},\qquad \beta_{n,i}=\sum_a b_n(a)f_i(a),
\]
with \(f_i(a)\ge0,\sum_i f_i(a)=1\), converging to \(P^*\). Alternating minimization (Theorem 5.3, [PAGE 52–53]) requires three-points \(\delta(P,P^*(Q))+D(P^*(Q),Q)\le D(P,Q)\) and four-points \(D(P',Q')+\delta(P',P)\ge D(P',Q^*(P))\) properties.

EM algorithm ([PAGE 59–61]): E-step \(P_k=\mathbb E_{Q_{k-1}}(\hat P_n|y_1^n)\), given by
\[
P_k(a)=\hat P_n^T(Ta)\frac{Q_{k-1}(a)}{Q_{k-1}^T(Ta)},
\]
which minimizes \(D(P\|Q_{k-1})\) subject to \(PT=\hat P_n^T\); M-step sets \(Q_k=\arg\min_{Q\in\mathcal Q}D(P_k\|Q)\). Monotonicity:
\[
D(P_1\|Q_0)\ge D(P_1\|Q_1)\ge D(P_2\|Q_1)\ge\cdots.
\]
Global convergence to MLE only for convex compact \(\mathcal Q\) with maximal-support start; non-convex \(\mathcal Q\) yields local optima ([PAGE 60–61]).

Universal-coding redundancy ([PAGE 64–65]):
\[
R(x_1^n)=L(x_1^n)+\log P(x_1^n),\qquad \mathbb E_P[R]=\mathbb E_P[L]-H(P_n).
\]
Theorem 6.1 ([PAGE 64–65]): \(R(x_1^n)\ge-c_n\) eventually a.s. for \(\sum n2^{-c_n}<\infty\). NML distribution (Theorem 6.2, [PAGE 68]):
\[
P_{\mathrm{ML}}(x_1^n)=\sup_{P\in\mathcal P}P(x_1^n),\qquad
\mathrm{NML}_n(x_1^n)=\frac{P_{\mathrm{ML}}(x_1^n)}{\sum_{x_1^n}P_{\mathrm{ML}}(x_1^n)},\qquad
R_n^*=\log\sum_{x_1^n}P_{\mathrm{ML}}(x_1^n).
\]
Krichevsky–Trofimov coding process ([PAGE 69–70], equation (6.5)):
\[
Q(x_1^n)=\prod_{t=1}^n\frac{n(x_t|x_{t-1}^1)+\frac12}{t-1+\frac{k}{2}}
=\prod_{i=1}^k\frac{(n_i-\frac12)(n_i-\frac32)\cdots\frac12}{(n-1+\frac{k}{2})(n-2+\frac{k}{2})\cdots\frac{k}{2}},
\]
achieving \(R_C^*\le\frac{k-1}{2}\log n+O(1)\) ([PAGE 70], equation (6.6)) and \(R_n^*=\frac{k-1}{2}\log n+O(1)\) ([PAGE 71–72, Theorem 6.4]). Order-\(m\) Markov class penalty \(\frac{k(k-1)m}{2}\log n\) ([PAGE 72–75]).

I-radius and channel capacity ([PAGE 78–83]): I-radius \(\min_Q\sup_{P\in\Pi}D(P\|Q)\); I-centroid \(Q^*\) unique minimizer (Corollary 7.1, [PAGE 82]). Lemma 7.1 ([PAGE 79]):
\[
\int D(P_\theta\|Q)\,\nu(d\theta)=I(\nu)+D(Q_\nu\|Q),\qquad Q_\nu(a)=\int P_\theta(a)\,\nu(d\theta).
\]
Theorem 7.1 ([PAGE 79–81]): \(\sup_\theta D(P_\theta\|Q)\ge I(\nu)\), equality iff \(\nu\) capacity-achieving and \(Q=Q_\nu\). Theorem 7.2 ([PAGE 82–83]): I-radius equals channel capacity \(\sup_\nu I(\nu)\). Lower bound via estimation (Theorem 7.3, [PAGE 83–85]): if \(\mathbb E_\theta\|\theta-\hat\theta\|^2\le\epsilon\) and \(\lambda(\Theta)<\infty\),
\[
I(\nu_{\mathrm{unif}})\ge\frac{k}{2}\log\frac{k}{2\pi e\epsilon}+\log\lambda(\Theta).
\]
Theorem 7.4 ([PAGE 88–89]): \(R_n\ge\frac{k}{2}\log n-K\) for parametric classes with estimators \(\mathbb E_\theta\|\theta-\hat\theta_n\|^2\le c(\theta)/n\).

MDL ([PAGE 99–101]): minimize \(L(\gamma)+L_\gamma(x_1^n)\). With mixture codes \(Q_\gamma=\int P_\vartheta\nu_\gamma(d\vartheta)\), equivalent to Bayesian MAP with prior \(2^{-L(\gamma)}\). With NML codes, penalized ML with penalty
\[
R_n(\gamma)=L(\gamma)+\log\sum_{a_1^n}P_{\mathrm{ML}}^{(\gamma)}(a_1^n).
\]
Remark 8.2 ([PAGE 100]): asymptotic penalty \(\frac12 k_\gamma\log n\) (BIC). Theorems 8.3–8.4 ([PAGE 101–103]): consistency for mutually singular / essentially disjoint classes. Counterexample ([PAGE 103–105]): i.i.d. uniform \(P\), true order \(m^*=0\), but \(L(m)=o(m)\) implies \(\hat m(x_1^n)\to\infty\) a.s.

Breakdown/singularity regimes: \(D(P\|Q)=+\infty\) if \(\operatorname{supp}P\not\subseteq\operatorname{supp}Q\) ([PAGE 11]); MLE nonexistent when \(S(L)\neq A\) ([PAGE 32–33]); EM local optima for non-convex \(\mathcal Q\) ([PAGE 61]); no strongly universal codes for all ergodic processes (\(R_n\ge n\log|A|-\log n\)) ([PAGE 96–97]); MDL inconsistency when \(L(m)=o(m)\) ([PAGE 103–105]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage is explicit in the Historical Notes ([PAGE 108–112]). Shannon’s 1948 “A mathematical theory of communication” [ref 44] created entropy, conditional entropy, and mutual information; Theorem 1.1 (noiseless coding) is essentially Shannon’s. Kullback and Leibler [33, 1951] introduced information divergence as an information measure; Wald [49, 1947] used it implicitly in sequential analysis. Sanov [42, 1957] originated the combinatorial large-deviation approach, later systematized as the method of types in Csiszár and Körner [15]. Stein’s lemma appears in Chernoff [6, 1952], attributed to C. Stein; Wald’s sequential testing [49] underlies Section 2.2. I-divergence geometry and projections were systematized by Csiszár [12, 1975] and Čencov [5], with the closure of exponential families treated in Csiszár and Matúš [16]. f-divergences were introduced by Csiszár [10, 11] and independently Ali and Silvey [1]; Lemma 4.2’s characterization of I-divergence within f-divergences appears in Csiszár [14]. Iterative scaling traces to Kruithof [31, 1937] for contingency tables, with its I-divergence interpretation in Ireland and Kullback [28], and the convergence proof via Theorem 5.1 is Csiszár [12, 13]; generalized iterative scaling is Darroch and Ratcliff [19]. The EM algorithm is Dempster, Laird, and Rubin [23, 1977]. Universal coding begins with Fitingof [25] (attributing the idea to Kolmogorov), Davisson [20], Barron [3, Theorem 6.1], and Shtarkov [46, Theorem 6.2]; the Krichevsky–Trofimov coding process [30] and the Davisson–McEliece–Pursley–Wallace analysis [22] underpin Section 6.2. The redundancy–channel-capacity duality follows Davisson and Leon–Garcia [21], with Topsøe [47] behind Lemma 7.1. Rissanen [36, 39] proposed MDL; Schwarz [43] introduced BIC; Finesso [24] and Csiszár and Shields [17] proved BIC Markov-order consistency, and Example 8.4’s MDL counterexample is drawn from [17]. Context weighting and twice-universal codes come from Ryabko [41] and Willems, Shtarkov, and Tjalkens [50].

Multi-week traps emerge across timescales. Over weeks of data, the distinction between weak universality (expected redundancy per symbol \(\to0\)) and strong universality (maximum redundancy per symbol \(\to0\)) collapses for the class of all stationary/ergodic processes: Example 8.3 ([PAGE 96–97]) shows \(R_n\ge n\log|A|-\log n\), so no fixed code can uniformly control worst-case redundancy as \(n\) grows; any “reasonable” Markov-order-\(m\) code will eventually be overrun by a stationary process with long-range memory. The \((|A|-1)/2\log n\) minimax penalty means that even with perfect model specification, the description-length clock accumulates a logarithmic tax that must be paid before parameter estimation error vanishes. In iterative procedures, the convergence of generalized iterative scaling ([PAGE 50–51]) and EM ([PAGE 59–61]) is asymptotic in iteration count, not finite-time; with non-convex feasible sets, weeks of computation can still terminate at a local optimum, and the four-points/three-points conditions of Theorem 5.3 ([PAGE 52–53]) are the only certificate that the alternating recursion is descending toward \(D_{\min}\). Finally, MDL’s BIC-style \(\frac12k_\gamma\log n\) penalty ([PAGE 100]) assumes the model-description cost grows at least logarithmically in complexity; Example 8.4 ([PAGE 103–105]) demonstrates that if \(L(m)=o(m)\), the penalty never becomes large enough to stop the order estimator from diverging, so the clock never rings and consistency fails permanently.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The statistician’s recursive reasoning under sample pressure can be decomposed into three layers: crisis habit regression, counter-trap, and clock. Crisis habit regression is the tendency, when the model class \(\Pi\) is misspecified or the sample size \(n\) is small, to fall back to pure maximum likelihood \(\arg\min_{P\in\Pi}D(\hat P\|P)\) ([PAGE 32, Lemma 3.1]) because it requires no description of model complexity and minimizes the immediate data-fit term. This is the default mode: treat the empirical distribution \(\hat P_n\) as truth and project it onto the feasible family, ignoring the cost of specifying the family itself.

The counter-trap is the information-geometric correction supplied by MDL and I-projection duality. Rather than accepting \(D(\hat P\|P)\) alone, the decision-maker minimizes \(D(\hat P\|P^*)+D(P^*\|Q)\) via the Pythagorean decomposition ([PAGE 30–31]), paying the explicit code cost \(L(\gamma)\) to describe the model plus \(L_\gamma(x_1^n)\) to describe the data given the model ([PAGE 99–101]). The counter-trap activates precisely when crisis habit regression would overfit: the penalty \(R_n(\gamma)\) (or its BIC asymptotic \(\frac12 k_\gamma\log n\), [PAGE 100]) grows with model dimension \(k_\gamma\), so spurious parameters are rejected unless they reduce divergence faster than the penalty grows.

The clock is the sample-size variable \(n\) governing redundancy asymptotics. Sanov’s exponent \(D(\Pi\|P)\) ([PAGE 19–20]) and the hypothesis-testing type-2 exponent \(D(\Pi\|P_2)\) ([PAGE 24]) are exponential in \(n\); the minimax redundancy scales as \(\frac{d}{2}\log n\) ([PAGE 78–90]); and the EM objective decreases monotonically in iteration count but only converges to the global limit under convexity ([PAGE 60–61]). The recursion is stable only if the clock advances faster than the habit-regression impulse: Theorem 8.4’s consistency ([PAGE 101–103]) holds because \(\frac12 k_\gamma\log n\) eventually dominates overfitting gains, but Example 8.4 ([PAGE 103–105]) shows the failure mode—when \(L(m)=o(m)\), the clock never advances sufficiently to counteract the regression toward higher-order Markov structure, and \(\hat m\to\infty\) almost surely even though the true process is i.i.d. uniform. Thus the recursive theory of mind here is: habit regression dominates at finite \(n\); the counter-trap of penalized description length asserts itself as \(n\to\infty\); and the clock \(n\) determines whether the counter-trap wins before the data are exhausted.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The tutorial’s entire combinatorial and large-deviation machinery assumes a finite alphabet \(A\) ([PAGE 8, Preface; PAGE 10]). If the physical measurement space is continuous (e.g., Gaussian analog signals), type classes, Lemma 2.2’s cardinality bounds, and Sanov’s finite-alphabet form are inapplicable without measure-theoretic extension; the tutorial explicitly excludes “the information theoretic proof of the dichotomy theorem for Gaussian measures” ([PAGE 8]). Veto: any system operating over uncountable alphabets cannot directly apply the type-class method.

Biomechanical layer: Iterative algorithms require convex, compact feasible sets and support matching. Theorem 3.1’s I-projection uniqueness requires \(D(P\|Q)\) strictly convex in \(P\), which holds when \(Q(a)>0\) for all \(a\in A\) ([PAGE 28–29]). If \(Q(a)=0\) while \(P(a)>0\), then \(D(P\|Q)=+\infty\) ([PAGE 11]), an absolute divergence singularity that vetoes any coding distribution \(Q\) failing to dominate the true process \(P\). The alternating minimization of Theorem 5.3 ([PAGE 52–53]) and Corollary 5.1 ([PAGE 54–55]) converges to \(D_{\min}\) only under three-points/four-points properties and maximal-support initialization; if \(S(P)\not\subseteq S(Q)\), the minimization is ill-posed ([PAGE 54, Corollary 5.1 conditions]).

Weather layer: Non-stationarity and distribution shift. The ergodic and entropy theorems in the Appendix ([PAGE 108–109]) and Theorem 8.2’s sublinear-redundancy result ([PAGE 93–94]) require stationarity or ergodic approximation by Markov mixture components. If the environment drifts (non-stationary process), the divergence rate \(\frac1nD(P_n\|Q_n)\) need not converge, pointwise redundancy per symbol does not vanish, and weakly universal arithmetic codes lose their guarantee. Example 8.3 ([PAGE 96–97]) proves that even among ergodic processes, no strongly universal code exists, so an adversarial or slowly drifting stationary process can force unbounded worst-case redundancy.

Veto proof (cross-layer): Suppose a coding or testing distribution \(Q\) is deployed. If there exists \(a\in A\) such that \(P(a)>0\) and \(Q(a)=0\), then by definition \(D(P\|Q)=+\infty\) ([PAGE 11]), and the redundancy function \(R(x_1^n)=L(x_1^n)+\log P(x_1^n)\) for any code based on \(Q\) incurs infinite pointwise redundancy on any sequence containing \(a\) ([PAGE 64–65]). This is a hard veto independent of algorithmic details: support mismatch invalidates the information-geometric projection, the hypothesis-testing exponent, and the universal-coding bound simultaneously. The only remedy is to enlarge \(Q\)’s support or restrict the observation space to \(S(Q)\), effectively changing the physical alphabet.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Hypothesis-testing boundary veto). Veto condition: the true alternative \(P_2\) lies in the closure of the null class but not in the class itself, \(P_2\in\overline\Pi\setminus\Pi\), so \(D(\Pi\|P_2)=0\) ([PAGE 24–25]). Under the critical region of Theorem 2.3, the type-2 error probability need not go to zero because the assumption that \(\Pi\) is closed (which guarantees \(D(\Pi\|P_2)>0\) for \(P_2\notin\Pi\)) fails. Verifiable prediction: for any sequence of tests with type-1 error \(\le\epsilon\), \(\liminf\frac1n\log P_2^n(A_n-C_n)\ge0\), i.e., the type-2 error does not decay exponentially; the test cannot distinguish \(P_2\) from \(\Pi\) asymptotically.

Scenario 2 (EM local-optimum veto). Veto condition: the feasible set \(\mathcal Q\) of distributions is non-convex, so Corollary 5.1’s global-convergence guarantee does not apply ([PAGE 60–61]). The EM iteration produces \(D(\hat P_n^T\|Q_k^T)\) non-increasing but possibly converging to a value strictly above \(D_{\min}=\min_{Q\in\mathcal Q}D(\hat P_n^T\|Q^T)\). Verifiable prediction: starting from two different maximal-support initializations \(Q_0\) and \(Q_0'\), the EM iterates \(Q_k\) and \(Q_k'\) converge to distinct fixed points with different mixture weights, and the achieved divergence \(D(P_k\|Q_{k-1})\) stalls above the global minimum; multiple restarts are required and no single run certifies global optimality.

Scenario 3 (MDL order-divergence veto). Veto condition: the true process \(P\) is i.i.d. uniform on \(A=\{1,\dots,k\}\) (true Markov order \(m^*=0\)), and the model-description cost satisfies \(L(m)=o(m)\) ([PAGE 103–105]). Example 8.4 proves that then \(L(0)-\log Q(0)(x_1^n)>\inf_{m>0}[L(m)-\log Q(m)(x_1^n)]\) eventually almost surely, so the MDL order estimator \(\hat m(x_1^n)\to\infty\) a.s. Verifiable prediction: for an i.i.d. uniform source, as \(n\) grows, MDL will select Markov orders \(m\to\infty\) without bound, fitting spurious higher-order structure that does not exist; consistency fails despite the true model being in the class, because the description-cost clock grows too slowly to penalize the extra parameters.
</RLVR_COUNTERFACTUAL_VETOES>