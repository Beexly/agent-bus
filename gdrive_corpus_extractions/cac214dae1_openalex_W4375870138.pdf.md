---
source: "openalex_W4375870138.pdf"
folder: "/GSE-Ultra-30TB-Vault/deep-corpus-2026-11-04/pdfs"
pages: 148
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5470
---

<NATIVE_REASONING>
The user wants me to analyze a mathematical source PDF (a memoir on Bellman Functions on Simple Non-Convex Domains in the Plane by Ivanisvili, Stolyarov, Vasyunin, Zatitskii) and produce a response following strict invariants.

The invariants are:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The user provided pages 1-148 of the source text. The task is essentially to read/process the document and produce a structured analysis in these exact XML sections. There's no specific question about sports or betting; it's a math text. I need to make sure I don't mention betting lines. I need to include formal LaTeX equations from the source, cite pages, and produce >=1000 words total across sections.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. I should discuss the mathematical content: Bellman functions, locally concave functions on non-convex domains, the domain D" = clos „0 n „", Bellman function definition B".x; f/ = sup average under constraints, BMO case, Ap classes, Monge-Ampère equation, forces, tails, evolution of Bellman candidates, optimizers/delivery curves, failure of technical conditions (2.1.7), (2.1.8), cases (A), (B), (C) at infinity. Gray-zone audit: where assumptions break down, e.g., when torsion T changes sign, essential roots, when force becomes zero, when integrals diverge leading to B = +∞. This needs >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations with page citations. I should pull key equations:
- Page 10-11: Definition of Bellman function (1.1.1): B`.xI f/ = sup{⟨f ´/⟩I | ⟨´⟩I = x; ´ 2 A`.I/}.
- Page 11: BMO domain ` D {x | x2^1 ≤ x2 ≤ x2^1 + 1}, „0 = {x2^1 < x2}, „" = {x2^1 + "2 < x2}.
- Page 11: John-Nirenberg BMO2 norm equivalence.
- Page 12: Formula (1.1.3): B`".x I e^t/ = 1 - sqrt(x2^1 - x2 + "2) / " exp(x1 - " + sqrt(x2^1 - x2 + "2)) for x 2 `", " < 1.
- Page 13: Ap1;p2;Q domain (1.1.4).
- Page 14: A1 domain (1.1.5): `{x | e^{x1} ≤ x2 ≤ Q e^{x1}}`.
- Page 20: Definition (2.1.9): B".x I f/ = sup{⟨f ´/⟩I | ⟨´⟩I = x; ´ 2 A`".I/}.
- Page 22: Domain definition (2.1.4): `"` = union over t of T".t/.
- Page 25: Tangency equation (2.1.3).
- Page 26: Torsion T.t/ determinant (2.1.10).
- Page 26-27: K definition (2.1.11): 2 = g0^2/g0^1, 3 = f0/g0^1, K = 0^3 0^2.
- Page 26: Relation (2.1.12): T = K0 (g0^1)^3 (0^2)^2.
- Page 27: Conditions (2.1.13), (2.1.14) summability at infinities.
- Page 28: Local concavity definition, set F`;f, B`;f = inf.
- Page 29: Homogeneous Monge-Ampère: B_{x1x1} B_{x2x2} - B_{x1x2}^2 = 0.
- Page 34: Fence representation (3.2.2), (3.2.3).
- Page 39: Standard candidates conditions.
- Page 41: Cup equation (3.4.2).
- Page 44: Differentials (3.5.1), (3.5.2).
- Page 44: Force function (3.6.1): F_I = (2 - )/0^2 * ˇ0^2.
- Page 47: Right/left force functions (3.6.4), (3.6.5).
- Page 57: Force ODE (3.6.6): F' = K0 - 0^2/(2 - ) F.
- Page 71: Simple graph definition.
- Page 82-84: Balance equation (4.1.6), Lemma 4.1.4.
- Page 93: Non-degeneracy force condition 4.4.1.
- Page 94: Leaf-root condition 4.4.3.
- Page 102-103: Optimizer for tangent domains, equation (5.2.3).
- Page 105: Proposition 5.2.5 etc.
- Page 117-118: Case (A), (B), (C) at -infinity.
- Page 122: Table 5.2 conditions at -infinity for B = +∞.
- Page 124: Table 5.3 conditions at +infinity.

Units: Since it's pure mathematics (harmonic analysis, PDE), units are dimensionless; domain in R^2, Lebesgue measure, no SI units. I should state that explicitly: all quantities are dimensionless real variables; measures are Lebesgue; no physical units.

Breakdown regimes: When (2.1.13) or (2.1.14) fail, B = +∞ everywhere except fixed boundary (Main result #2, page 31). When technical conditions (2.1.7), (2.1.8) fail, optimizers may not exist, only optimizing sequences (page 31-32). Singularities at essential roots of T where torsion changes sign.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Burkholder functions [4], [29]; Bellman function method monographs [33], [58]; John-Nirenberg inequality [46]; Muckenhoupt weights [54], [53]; Gehring classes [7]; moment method [19,20,25]; differential geometry/convex hull bitangent planes; Chebyshev systems TC-systems [25]; four vertex theorem [9]; previous work [15], [17] "Bellman function for extremal problems in BMO II: Evolution"; locally concave functions theory [52]; Hrušˇcev A1 norm [12]. Multi-week traps: long evolution of foliation as parameter " increases; critical points where graph changes; infinitely many critical points possible (oscillating birdie, [17] p.123); essentially critical points finite; collapse of trolleybuses/multicups; disintegration of multitrolleybuses/multibirdies; balance equation root uniqueness.

<RECURSIVE_THEORY_OF_MIND>: This section is about "Crisis habit regression vs counter-trap vs clock." I need to interpret this in the context of the mathematical text. "Crisis habit regression" could refer to the breakdown of standard candidates when forces vanish or when tails collapse; regression to optimizing sequences when optimizers don't exist. "Counter-trap" could refer to the monotonicity of forces and tails as a counter-mechanism to degeneration; the leaf-root condition and non-degeneracy force condition as guards against traps. "Clock" refers to the evolution parameter " (epsilon) acting as a clock; as " increases, forces decrease (grow in absolute value), tails grow; critical points are clock events. I need to write this as a recursive theory of mind: how the mathematical object "thinks" about its own construction, how the proof regresses to base cases (small "), then iterates forward, with traps at collisions and counter-traps via gluing formulas (3.8.1)-(3.8.13). I should keep it grounded but use the requested framing.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since this is pure math, there are no physical/biomechanical/weather factors. I must state explicitly that no physical, biomechanical, or weather vetoes apply because the domain is abstract R^2 harmonic analysis; the only "vetoes" are mathematical: failure of summability conditions (2.1.13)/(2.1.14), failure of technical conditions (2.1.7)/(2.1.8), vanishing of differentials DL/DR at essential roots, torsion sign changes causing cup origins, force non-positivity constraints. I should frame them as formal veto conditions with exact regimes.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I need to invent 3 counterfactual scenarios where the theorem/construction is vetoed, and give predictions. Since this is math, "RLVR" might mean "verifiable veto scenarios". I'll frame them as:
1. Veto: Condition (2.1.13) fails at -∞ while (2.1.7) holds. Prediction: B(x; f) = +∞ for all x in domain interior (Proposition 5.2.6, page 118).
2. Veto: Technical condition (2.1.7) fails (integral of  diverges) while (2.1.13) holds. Prediction: No true optimizer exists; only optimizing sequences ‘n (Theorem 5.4.2, page 120).
3. Veto: Torsion T has an essential root interval where sign doesn't change (violating Condition 2.1.11 finiteness). Prediction: Combinatorial structure of convex hull boundary becomes extremely complicated; standard candidate construction may fail; need different methods (page 16-17 discussion).
Each with page citations and exact equations.

I need to ensure total word count >= 1000 across sections. Let me write generously.

Also strict invariant: ZERO BETTING LINES. I will not mention any betting terms.

ZERO TOY EQUATIONS: No invented fake ratios. All equations from source with page citations.

Let me draft.

Structure:
- <THINK_TRACE> ... </THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS> ... </SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY> ... </RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND> ... </RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION> ... </CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES>

I need to include exact [PAGE N] markers and verbatim quotes where appropriate. Since I have the source text, I can quote.

Let's start writing.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
I'll discuss:
1. The core object: Bellman function B`" (x; f) defined as supremum of integral averages over admissible functions ` taking values on fixed boundary @fixed`" with average x. Domain `"` = clos „0 n „" where „0, „" are nested unbounded convex epigraphs of convex functions. (Page 10-11, 22).
2. Two main classes: BMO (parabolic strip) and Ap classes (Muckenhoupt). BMO case gives John-Nirenberg sharp constants via explicit Bellman function (1.1.3). Ap1;p2 and A1 via domains (1.1.4), (1.1.5).
3. Geometric characterization: Bellman function is pointwise minimal locally concave function majorizing boundary data f on @fixed`. (Page 15). This leads to homogeneous Monge-Ampère equation det D^2 B = 0 almost everywhere.
4. Construction via foliations: extremal segments (chords/tangents) and linearity domains (angles, trolleybuses, birdies, multicups, etc.). Cup equation (3.4.2) determines chords where boundary curve, its derivative, and second derivative are coplanar with the chord vector.
5. Forces and tails: force function F_I = (2 - )/0^2 * ˇ0^2 (page 44). Forces are non-positive; right/left forces extended to tails via ODE F' = K0 - (0^2/(2-)) F (page 57). Monotonicity: as " increases, forces decrease in absolute value? Actually text says "forces decrease (grow in absolute value) as " grows" (page 71). Wait: "the main law that rules the evolution of the foliation is 'the forces decrease (grow in absolute value) as " grows'". This means they become more negative. Tails grow.
6. Gray zones / breakdown:
   - Summability conditions (2.1.13), (2.1.14) at ±∞. If fail but technical conditions hold, B = +∞ everywhere off boundary (page 118, Proposition 5.2.6).
   - Technical conditions (2.1.7), (2.1.8) involving integrals of . If fail, optimizers may not exist, only optimizing sequences (page 31-32, Theorem 5.4.2).
   - Essential roots of torsion measure T where sign changes; cups originate at ci (page 17, Proposition 3.5.9). If T doesn't change sign regularly, convex hull boundary combinatorics can be extremely complicated (page 16).
   - Vanishing differentials DL=0 or DR=0 lead to fictitious vertices of type 3, long chords, and require special gluing (page 42, Lemma 4.2.1, Corollary 4.2.3).
   - Balance equation FR = FL has unique root under strict monotonicity (Lemma 4.1.4). If forces degenerate, angles can collide with chords, changing graph topology (critical points).
7. Multi-hop chain: local candidate -> gluing via C^1 concatenation (Proposition 3.1.2) -> global graph -> evolution in " -> optimizer construction via delivery curves -> verification B = B". Failure at any link (non-C^1 gluing, force sign violation, divergence of integrals) collapses the chain.

Word count: aim for ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with page citations. Include units note: dimensionless, Lebesgue measure, no SI units. Breakdown regimes.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage.
- Burkholder [4], [29]; Bellman functions as Burkholder functions (page 10).
- Monographs [33], [58] (Osekowski). John-Nirenberg [46].
- Muckenhoupt Ap [54], [53], Gehring [7], Hrušˇcev A1 [12].
- Moment method [19,20,25], Chebyshev/TC-systems [25], four vertex theorem [9].
- Locally concave functions [52], [62].
- Direct predecessor: [15], [17] "Bellman function for extremal problems in BMO II: Evolution" (page 8, 147 ref [17]).
- Multi-week traps: parameter " evolution is like a multi-stage clock; cups grow, trolleybuses shrink, multitrolleybuses/multibirdies disintegrate (page 71). Critical points can be infinite (oscillating birdie, [17] p.123, page 92 remark). Essentially critical points finite. Collisions require re-gluing via formulas (3.8.1)-(3.8.13) (page 71-74). Leaf-root condition restricts fictitious vertices to essential roots ci (page 94). If Condition 2.1.11 violated (infinite essential roots), characterization of B = +∞ becomes more involved (page 123 remark).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: When standard optimizer fails (conditions (2.1.7)/(2.1.8) fail), the proof regresses to optimizing sequences ‘n (Theorem 5.4.2). This is a "habit regression" from true optimizers to approximating sequences.
- Counter-trap: The monotonicity of forces and tails acts as a counter-trap against degeneration. As " increases, forces become more negative, tails enlarge (Corollary 4.2.7). The leaf-root condition and non-degeneracy force condition prevent the graph from entering illegal configurations.
- Clock: The parameter " (epsilon) is the clock. Starting from small " (simple picture, Theorem 4.1.2), induction steps move forward in time. Local evolution theorems (Propositions 4.3.1-4.3.13) are transition rules. Critical points are clock events where graph topology changes; essentially critical points are finite.
- Recursive structure: The construction is recursive: small " base case -> induction forward -> limit at critical points -> modify graph via (3.8.1) formulas -> continue. The "mind" of the proof regresses to local lemmas (balance equation, force ODE) and then recurs forward.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- State explicitly: The source is pure harmonic analysis/PDE on R^2. There are no physical, biomechanical, or weather variables. Therefore no physical vetoes apply.
- Mathematical vetoes (formal):
  1. Summability veto: If (2.1.13) fails and (2.1.7) holds => B = +∞ off boundary (Prop 5.2.6, page 118).
  2. Summability veto: If (2.1.14) fails and (2.1.8) holds => B = +∞ off boundary (Prop 5.2.8, page 120).
  3. Technical veto: If (2.1.7) or (2.1.8) fail => no optimizer, only optimizing sequences (Theorem 5.4.2, page 120; Theorem 5.4.21, page 128).
  4. Force sign veto: Standard candidates require ˇ0^2 < 0 (right tangents) or > 0 (left tangents) (Prop 3.3.3, 3.3.5, page 37-38). Violation => no standard candidate.
  5. Cup differential veto: DL < 0 and DR < 0 required for standard chordal candidate (Prop 3.4.2, page 40). Vanishing => fictitious vertex type 3 (page 67).
  6. Torsion veto: Condition 2.1.11 requires finitely many essential roots; violation => combinatorial complexity of convex hull boundary becomes extreme (page 16).
- Each veto has exact regime and page citation.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
Scenario 1: Veto condition: (2.1.13) fails at -∞ while (2.1.7) holds. Equation: ∫_{-∞}^v f0() exp(-∫_^v R) d = -∞ (page 27, (2.1.13)). Prediction: B(x; f) = +∞ for all x ∈ ` n @fixed` (Proposition 5.2.6, page 118). Verifiable by constructing test function ‘ such that average f(') = +∞.
Scenario 2: Veto condition: Technical condition (2.1.7) fails, i.e., (1+|wR - g|) exp(-∫_{t0}^t R) does not tend to 0 as t→-∞ (page 23, (2.1.7)), but (2.1.13) holds. Prediction: No true optimizer exists at interior points; only an optimizing sequence ‘n (Theorem 5.4.2, page 120). The proof constructs ‘n via truncated domains [v_C^n, v] with tangent chords (page 120, eq 5.4.1).
Scenario 3: Veto condition: Torsion measure T has infinitely many essential roots or fails to change sign finitely (violating Condition 2.1.11, page 26). Prediction: The boundary of the convex hull of the moment curve can have extremely complicated combinatorial structure; the standard foliation algorithm may not terminate or may require new geometric tools (page 16-17). The finite-root induction in Chapters 3-4 breaks down.
Each with exact page and equation references.

I need to ensure total words >= 1000. Let's write carefully.

Also, I must not use any toy equations like Force/Fatigue. All equations are from source.

Let's produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a 148-page mathematical memoir on Bellman functions for integral functionals on non-convex planar domains. The core derivation proceeds in multiple hops. First, the authors define the admissible class A`".I/ of summable functions `' : I → @fixed`" whose subinterval averages remain in `"` = clos „0 n „", where „0 and „" are nested strictly convex unbounded epigraphs in R² (pages 10–11, 22–24). The Bellman function B`".xI f/ is the supremum of ⟨f ´/⟩I subject to ⟨´⟩I = x (page 24, eq. 2.1.9). Its domain coincides exactly with `"` (Proposition 2.1.8, page 24), and on the fixed boundary it interpolates the data: B`".g.t/I f/ = f.t/ (Proposition 2.1.9, page 25).

Second, the geometric reformulation identifies B`";f as the pointwise infimum of all locally concave functions majorizing f on @fixed`" (page 18–19, Definition 2.2.1). Locally concave functions satisfy the homogeneous degenerate Monge–Ampère equation det D²B = Bₓ₁ₓ₁Bₓ₂ₓ₂ − Bₓ₁ₓ₂² = 0 almost everywhere (page 29). This forces the Hessian to be rank-deficient: at each interior point there is a nonzero vector along which B is affine, generating extremal segments (chords or tangents) and linearity domains (angles, trolleybuses, birdies, multicups, etc.) (page 19, Theorem 2.2.3).

Third, the local construction uses fences (families of segments S.t/ = [g.t/; w.t/]) foliating subdomains. On a fence, a C¹ function affine on each segment with constant gradient is represented by eqs. (3.2.2)–(3.2.3) (pages 34–35), where the gradient component ˇ₂ solves a first-order linear ODE involving the slope difference ₂ −  and the torsion-related quantity K (page 26–27, eqs. 2.1.11–2.1.12). Concavity reduces to a sign condition on ˇ₀₂: for right tangents ˇ₀₂ ≤ 0, for left tangents ˇ₀₂ ≥ 0 (Propositions 3.3.3, 3.3.5, pages 37–38).

Fourth, chordal domains are governed by the cup equation (3.4.2, page 41), which says that the vectors ˙₀.t/, ˙₀.s/, and ˙.s/ − ˙.t/ are coplanar. Sufficient concavity is (t − s) det[˙₀.t/; ˙₀.s/; ˙₀₀.t/] > 0 (Proposition 3.4.2, page 40). Cups originate where torsion changes sign from + to − (Proposition 3.5.9, page 38–39), which is possible only at essential roots cᵢ of the signed torsion measure T (page 17, Definition 2.1.13).

Fifth, the global evolution is driven by the force function F_I = (₂ − )/(₀₂) · ˇ₀₂ (page 44, eq. 3.6.1), which is always non-positive (Remark 3.6.3). Forces extend to right/left tails via eqs. (3.6.4)–(3.6.5) (pages 46–47) and satisfy F′ = K₀ − (₀₂/(₂ − ))F (page 57, eq. 3.6.6). The master law is: as the parameter " increases, forces decrease (grow in absolute value) and tails strictly grow (page 71, Section 4.2.2). Consequently cups/multicups grow, trolleybuses shrink, and multitrolleybuses/birdies/multibirdies disintegrate (Propositions 4.3.1–4.3.13, pages 82–102).

Gray-zone audit: (1) Summability breakdown. Conditions (2.1.13)–(2.1.14) (page 27) guarantee finiteness at ±∞. If (2.1.13) fails while (2.1.7) holds, B ≡ +∞ off the fixed boundary (Proposition 5.2.6, page 118). (2) Technical breakdown. If (2.1.7) or (2.1.8) fail, true optimizers may cease to exist; one obtains only optimizing sequences ‘ₙ (page 31–32, Theorem 5.4.2 page 120). (3) Torsion breakdown. Condition 2.1.11 requires finitely many essential roots of T. Without it, the convex hull boundary combinatorics become extremely complicated (page 16–17), and the finite induction over figures collapses. (4) Force-sign breakdown. Standard candidates require strict inequalities ˇ₀₂ < 0 (right) or > 0 (left); vanishing differentials D_L or D_R create fictitious vertices of type 3 and require re-gluing via formulas (3.8.1)–(3.8.13) (pages 42, 67, 71–74). (5) Balance-equation breakdown. The root of F_R = F_L is unique only under strict monotonicity (Lemma 4.1.4, page 74); degeneracy lets angles collide with chord endpoints, changing the graph topology at critical points (page 92, Remark 4.3.14). The multi-hop chain—local candidate → C¹ gluing (Proposition 3.1.2, page 33) → admissible graph → evolution in " → delivery-curve optimizers (Section 5.2) → verification B = B`" (Theorem 5.3.2, page 118)—fails at any one of these links.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All quantities are dimensionless real variables on subsets of R²; measures are Lebesgue measure |E| with no SI units; averages are normalized by 1/|E|. No physical units appear.

Key formal operators and equations from the source:

1. Bellman definition (page 24, eq. 2.1.9):
B`".xI f/ def = sup { ⟨f ´/⟩I | ⟨´⟩I = x ; ´ ∈ A`".I/ } .

2. BMO parabolic-strip domain (page 11):
` D { x ∈ R² | x₂¹ ≤ x₂ ≤ x₂¹ + 1 } ,
„0 = { x₂¹ < x₂ } ,
„" = { x₂¹ + "² < x₂ } ,
`" = { x | x₂¹ ≤ x₂ ≤ x₂¹ + "² } (eq. 1.1.2, page 12).

3. Sharp John–Nirenberg Bellman expression (page 12, eq. 1.1.3):
B`".x I eᵗ/ = 1 − (√(x₂¹ − x₂ + "²) / ") exp( x₁ − " + √(x₂¹ − x₂ + "²) ) ,
x ∈ `", " < 1 .

4. Muckenhoupt–Gehring domain (page 13–14, eqs. 1.1.4–1.1.5):
`p₁,p₂;Q = { x | x₁,x₂ > 0 ; x₂^(1/p₂) ≤ x₁^(1/p₁) ≤ Q x₂^(1/p₂) } ,
`₁,₁;Q = { x | eˣ¹ ≤ x₂ ≤ Q eˣ¹ } .

5. Tangency equation defining left/right tangency points (page 20–21, eq. 2.1.3):
(g₂.t;0/ − g₂.s;"/) g₀¹.s;"/ − (g₁.t;0/ − g₁.s;"/) g₀².s;"/ = 0 .

6. Torsion determinant (page 26, eq. 2.1.10):
T.t/ = det [ ˙₀.t/ ; ˙₀₀.t/ ; ˙₀₀₀.t/ ] ,
where ˙.t/ = (g.t/; f.t/) ∈ R³ .

7. Slope and torsion auxiliary functions (page 26–27, eq. 2.1.11):
₂ = g₀²/g₀¹ ,
₃ = f₀/g₀¹ ,
K = ₀₃ ₀₂ ,
and T = K₀ (g₀¹)³ (₀₂)² (eq. 2.1.12) .

8. Summability conditions at ±∞ (page 27, eqs. 2.1.13–2.1.14):
∫₋∞ᵛ f₀./ exp( −∫ᵛ R.s;"/ ds ) d > −1 ,
∫ᵛ⁺∞ f₀./ exp( ∫ᵛ L.s;"/ ds ) d < +∞ .

9. Local concavity and Monge–Ampère (page 28–29):
B`";f .x/ = inf_{G ∈ F`;f} G.x/ ,
F`;f = { G locally concave on ` ; G|_{@fixed`} ≥ f } .
Homogeneous Monge–Ampère: Bₓ₁ₓ₁ Bₓ₂ₓ₂ − Bₓ₁ₓ₂² = 0 a.e. (page 29).

10. Fence representation (page 34–35, eqs. 3.2.2–3.2.3):
B.x/ = f.t/ + (x₁ − g₁.t/) [ ₃.t/ + (.t/ − ₂.t/) ˇ₂.t/ ] ,
ˇ₂.t/ = exp( −∫ᵗᵗ₀ ₀₂/(₂ − ) ) [ ∫ᵗᵗ₀ exp(∫ᵗ₀ ₀₂/(₂ − )) ₀₃./(₂./ − ./) d + ˇ₂.t₀/ ] .

11. Cup equation for chordal domains (page 41, eq. 3.4.2):
det [ ˙₀.t/ ; ˙₀.s/ ; ˙.s/ − ˙.t/ ] = 0 .

12. Differentials and force function (page 44, eqs. 3.5.1; page 44, eq. 3.6.1):
D_L.s;t/ = det[ ˙₀.s/ ; ˙₀.t/ ; ˙₀₀.s/ ] det[ g₀.s/ ; g₀.t/ ] ,
D_R.s;t/ = det[ ˙₀.t/ ; ˙₀.s/ ; ˙₀₀.t/ ] det[ g₀.t/ ; g₀.s/ ] ,
F_I = (₂ − )/(₀₂) · ˇ₀₂ . (Force is always ≤ 0, Remark 3.6.3.)

13. Force ODE on tails (page 57, eq. 3.6.6):
F′ = K₀ − (₀₂ / (₂ − )) F ,
with F = F_R or F_L ; right/left force extensions eqs. (3.6.4)–(3.6.5), pages 46–47.

14. Balance equation and root uniqueness (page 74–75, eq. 4.1.6; Lemma 4.1.4):
F_R.u; aₖ;bₖ/ = F_L.u; aₖ₊₁;bₖ₊₁/ ,
(F_R − F_L)′ > 0 on the tail intersection ⇒ unique root u = uₖ₊₁ .

15. Global evolution law (page 71, Section 4.2.2; Corollary 4.2.7):
As " increases, forces decrease (grow in absolute value); tails strictly enlarge. Cups/multicups grow, trolleybuses shrink, multitrolleybuses/birdies/multibirdies disintegrate (Propositions 4.3.1–4.3.13, pages 82–102).

16. Non-degeneracy force condition (page 93, Condition 4.4.1):
For every tangent-domain edge, its parameter interval lies inside the corresponding force tail.

17. Leaf-root condition (page 94, Condition 4.4.3):
All non-single-point arcs of multifigures coincide with solid roots cᵢ; fictitious vertices of types 2, 3, 5 are anchored at single-point roots cᵢ.

18. Optimizer/delivery curve (page 99–100, eq. 5.1.1–5.1.2):
˙./ = ⟨´⟩[ˡ;] ,
˙./ + ( − ˡ) ˙₀./ = ´./ .
Tangent-domain optimizer ODE (page 102–103, eq. 5.2.3):
log(t − ˡ)/(l₁ − ˡ) = ∫_{u₁}^{u.t} .v/ dv .

19. Breakdown at −∞, cases (A),(B),(C) (pages 119–120; Table 5.2 page 122):
(A) ∫₋∞ᵛ  converges and f.₋∞/ = +∞ ⇒ B ≡ +∞ off boundary (Prop. 5.4.10, page 121).
(B) ∫₋∞ᵛ  = +∞, #₁.₋∞/ > 0, ₃.₋∞/ = −1 ⇒ B ≡ +∞ (Prop. 5.4.12, page 124).
(C) ∫₋∞ᵛ  = +∞, #₁.₋∞/ = 0, #₂.₋∞/ ≠ 0, K.₋∞/ = +∞ ⇒ B ≡ +∞ (Prop. 5.4.17, page 126).
#₁./ = (g₁./ − w₁./) exp(−∫ᵛ ) ,
#₂./ = (g₂./ − w₂./) exp(−∫ᵛ ) (eqs. 5.4.5–5.4.6, page 119).

Breakdown regimes: If (2.1.13) fails but (2.1.7) holds, B(x;f) = +∞ for all x ∈ ` n @fixed` (Proposition 5.2.6, page 118). If (2.1.7) or (2.1.8) fail, no true optimizer exists; only optimizing sequences ‘ₙ (Theorem 5.4.2, page 120; Theorem 5.4.21, page 128). If T has infinitely many essential roots, the combinatorial structure of convex-hull boundary becomes extremely complicated and the finite-figure induction fails (pages 16–17).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The memoir sits in a multi-decade lineage of harmonic analysis and probability. The Bellman function and its probabilistic counterpart, the Burkholder function, are identified as the same object (page 10), with foundations in Burkholder's groundbreaking papers [4] and [29] and monographs [33] and [58] (Osekowski). The BMO case connects directly to the John–Nirenberg inequality [46], and the explicit Bellman function (1.1.3) on the parabolic strip yields sharp integral-form John–Nirenberg constants (page 12), traceable to Slavin–Vasyunin [41] and earlier work [17]. The Muckenhoupt A_p classes enter through the A_{p₁,p₂} domain (1.1.4), generalizing the first sharp Bellman functions for Muckenhoupt weights in [53] and [54]; the Gehring class case corresponds to p₁ = 1 and was treated in [7]; the limiting A₁ case with Hrušˇcev's norm uses domain (1.1.5) and originates in [53], [12], [34]. The moment-method interpretation, where the boundary curve is lifted to R³ and the maximum is the upper boundary of its convex hull, draws on classical references [19, 20, 25], including Chebyshev/TC-system conditions (1.1.6)–(1.1.7) and the four-vertex theorem [9]. The theory of locally concave functions as minimal concave solutions of the degenerate Monge–Ampère equation builds on [52] and [62], with regularity results from [5] and [10]. The immediate intellectual predecessor is the authors' [15] and the first evolution memoir [17] ("Bellman function for extremal problems in BMO II: Evolution," Mem. Amer. Math. Soc. 255, 2018), referenced repeatedly as the template for Chapters 3–4 (pages 8, 147).

Multi-week traps are structural to the evolution algorithm. The parameter " acts as a continuous time variable: starting from sufficiently small " where the foliation is simple (Theorem 4.1.2, page 82), the proof inducts forward in " using local evolution theorems (Propositions 4.3.1–4.3.13, pages 82–102). Traps occur at collisions: cups can run into long chords, angles can flip trolleybus direction, and multitrolleybuses/multibirdies can disintegrate or oscillate. The memoir warns that infinitely many critical points are possible—the "oscillating birdie" example in [17, p. 123] is cited on page 92 (Remark 4.3.14), where j."/ may have infinitely many jumps on a bounded interval. However, under Condition 2.1.11 (finite essential roots), only finitely many essentially critical points alter the graph `fixed` essentially (page 96, Theorem 4.4.8 proof sketch). The leaf-root condition (4.4.3, page 94) and non-degeneracy force condition (4.4.1, page 93) are the genealogical safeguards that prevent the foliation graph from entering illegal configurations inherited from [17]. When technical conditions (2.1.7)–(2.1.8) fail, the chain regresses from true optimizers to optimizing sequences (Theorem 5.4.2, page 120), echoing the earlier BMO-only treatment in [17, Lemma 6.1.4] cited on page 123.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When the analytic habitat of a true optimizer collapses—specifically when technical conditions (2.1.7) or (2.1.8) fail so that no optimizer 'ₓ exists at interior points—the proof does not abort; it regresses to a lower-grade habit, the optimizing sequence. Theorem 5.4.2 (page 120) constructs non-decreasing test functions ‘ₙ for x ∈ `R.`−∞;v/` such that h‘ₙi → B(x), and Theorem 5.4.21 (page 128) gives the symmetric left-tail version. This is crisis habit regression: the agent abandons the exact fixed point (optimizer) and settles for a convergent approximating sequence, preserving the value B(x) in the limit.

Counter-trap: The primary counter-trap against degeneration is the monotonicity of forces and tails. As " increases, forces strictly decrease (grow in absolute value) and tails strictly enlarge (Corollary 4.2.7, page 78; Section 4.2.2, pages 77–79). This monotonicity is enforced by the force ODE F′ = K₀ − (₀₂/(₂ − ))F (page 57, eq. 3.6.6) together with the sign constraint F < 0 and the geometric sign of ₂ −  (Remark 3.6.15, page 57). The leaf-root condition (4.4.3, page 94) and non-degeneracy force condition (4.4.1, page 93) act as secondary counter-traps: they forbid fictitious vertices from drifting away from essential roots cᵢ and forbid tangent-domain edges from escaping their force tails, thereby preventing the foliation graph from entering a topologically illegal state.

Clock: The evolution parameter " is the clock. The recursion begins at the base case " ≪ 1 with a simple graph (Theorem 4.1.2, page 82: cups, multicups, angles, tangent domains only). At each tick, local induction steps (Propositions 4.3.1–4.3.13, pages 82–102) advance " slightly: cups grow, trolleybuses shrink, angles wander via the balance-equation root (Proposition 4.3.12, page 93), and unstable multitrolleybuses/multibirdies disintegrate. When figures collide, the clock triggers a graph rewrite using formulas (3.8.1)–(3.8.13) (pages 71–74): "angle + long chord = trolleybus," "birdie = angle + trolleybus," etc. If the collision produces a non-smooth but admissible graph, evolution resumes from it (page 96). The recursion is thus self-similar: each local step re-uses the same propositions (Table 4.2, page 95) on perturbed numerical parameters, and the global proof (Theorem 4.4.8, page 96) is a limit passage over these clock ticks, modifying the graph only at finitely many essentially critical points under Condition 2.1.11.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof: The source is pure harmonic analysis and PDE on planar domains; all variables are dimensionless real coordinates (x₁,x₂), time parameters t, and Lebesgue measures. There are no physical, biomechanical, or weather variables in the model, so no physical vetoes can be raised or adjudicated.

Mathematical vetoes (formal regimes with exact citations):

1. Summability veto at −∞. If condition (2.1.13) fails while (2.1.7) holds, then B(x;f) = +∞ for every x ∈ ` n @fixed`. Page 118, Proposition 5.2.6. Verbal trigger: the constructed test function ‘ yields hf.’/i = +∞.

2. Summability veto at +∞. If condition (2.1.14) fails while (2.1.8) holds, then B(x;f) = +∞ for every x ∈ ` n @fixed`. Page 120, Proposition 5.2.8.

3. Technical-veto / optimizer absence. If (2.1.7) fails at −∞ (equivalently (1+|w_R − g|) exp(−∫_{t₀}^t _R) does not tend to 0 as t → −∞, page 23, eq. 2.1.7), then no true optimizer exists at interior points; only an optimizing sequence ‘ₙ is available. Page 120, Theorem 5.4.2; symmetric case at +∞, page 128, Theorem 5.4.21.

4. Force-sign veto for tangent domains. A standard candidate on a right tangent domain requires ˇ₀₂ < 0; on a left tangent domain ˇ₀₂ > 0 (strict in the interior). Pages 37–38, Propositions 3.3.3–3.3.7; page 38, Definition 3.3.8. Violation ⇒ no Bellman candidate on that tangent domain.

5. Cup-differential veto for chordal domains. A standard chordal candidate requires (t−s) det[˙₀.t/;˙₀.s/;˙₀₀.t/] > 0, equivalently D_L < 0 and D_R < 0. Page 40, Proposition 3.4.2; page 42, Definition 3.4.4. If D_L = 0 or D_R = 0, the chord becomes a fictitious vertex of type 3 (long chord) and cannot be glued as a standard candidate without special handling. Page 67, Section 3.8.2.

6. Torsion/root veto. Condition 2.1.11 (page 26) demands finitely many essential roots of the torsion measure T. If T has infinitely many essential roots or fails the finite-monotonicity condition on K, the boundary of the convex hull of the moment curve becomes "extremely complicated" (page 16), and the finite-figure induction in Chapters 3–4 breaks down; the characterization of B ≡ +∞ becomes "more involved" (page 123, Remark 5.4.22).

Each veto is exact, regime-specific, and derived from the source; none invokes physical or sensory domains.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with page-anchored predictions:

Veto Scenario 1 — Summability divergence at −∞.
Veto condition: (2.1.7) holds, but (2.1.13) fails:
∫₋∞ᵛ f₀./ exp( −∫ᵛ _R.s;"/ ds ) d = −1 for some (equivalently every) v ∈ R.
Source: page 27, eq. (2.1.13); page 118, Proposition 5.2.6.
Prediction: B(x; f) = +∞ for all x ∈ ` n @fixed`. The proof constructs a test function ‘ on a finite interval such that ⟨f ’/⟩ = +∞ by letting the delivery curve run to −∞ where the exponential weight is summable but f₀ is not integrable against it. Verifiable by direct substitution into (5.2.26)–(5.2.27), pages 117–118.

Veto Scenario 2 — Technical condition failure with preserved summability.
Veto condition: (2.1.13) holds, but (2.1.7) fails, i.e.
(1 + |w_R.t/ − g.t/|) exp( −∫_{t₀}^t _R.s;/ ds ) does not tend to 0 as t → −∞.
Source: page 23, eq. (2.1.7); page 120, Theorem 5.4.2.
Prediction: No true optimizer ‘ₓ exists at any interior point x ∈ `R.`−∞;v/` n @fixed`. Instead there exists a sequence of non-decreasing test functions ‘ₙ with h‘ₙi = x and hf.’ₙ/i → B(x). The construction truncates the domain using chords [g.v₋ₙ/; g.v₊ₙ/] tangent to @fixed`, with v₊ₙ → −∞, and defines ‘ₙ piecewise by eq. (5.4.1), page 120. The sequence is an optimizing sequence but not an optimizer.

Veto Scenario 3 — Torsion regularity collapse.
Veto condition: Condition 2.1.11 is violated; K is not piecewise monotone with finitely many monotonicity intervals, so the torsion measure T has infinitely many essential roots or sign changes.
Source: page 26, Definition 2.1.13 and Condition 2.1.11; pages 16–17; page 123, Remark 5.4.22.
Prediction: The combinatorial structure of the boundary of the convex hull of the lifted curve ˙ becomes "extremely complicated" (page 16), and the standard-foliation algorithm based on finitely many cups, angles, trolleybuses, and birdies cannot be executed as stated. The finite induction over essentially critical points (Theorem 4.4.8, page 96) breaks down; one must resort to the more involved machinery of [17, Lemma 6.1.4] to characterize when B is infinite. Verifiable by constructing a curve g whose torsion oscillates infinitely often near −∞, producing infinitely many cup origins cᵢ and obstructing the simple-picture base case of Theorem 4.1.2.
</RLVR_COUNTERFACTUAL_VETOES>