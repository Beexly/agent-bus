---
source: "2012 - Robust Rankings for College Football - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6273
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source text (a paper on robust rankings for college football by Samuel Burer, 2012). The response must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive response. Since no specific question was asked, I should treat the source as the object of analysis and produce a frontier reasoning analysis of the paper's methodology, robustness claims, mathematical structure, limitations, and implications. I must embed all the required XML sections and meet word count requirements (total >=1000 words, THINK_TRACE >=400 words).

Key content from source:
- Colley Matrix (CM): C r = b, C depends on schedule, b depends on win-loss outcomes (not points).
- C = Diag((W+W^T)e + 2) - (W+W^T)? Let me recall from text: W is win matrix. W_ij = W_ji = 0 if not played, W_ii=0. (W+W^T)e gives games played. (W-W^T)e gives win-loss spread. Then C = Diag((W+W^T)e + 2) - (W+W^T)? Wait, the text says define C via equations that are images (missing). But from context: C is diagonally dominant, positive definite. b_i = 1 + (wins_i - losses_i)/2? Standard Colley: r_i = (1 + w_i)/(2 + g_i) adjusted via matrix. Actually standard Colley: C = (2 + g_i) on diagonal minus number of games between i and j off-diagonal. b_i = 1 + (w_i - l_i)/2. The text says b depends only on win-loss outcomes. It mentions Δ+Δ^T=0 so C unchanged. b' changes linearly with Δ.

- Sensitivity: switch measure δ(W,W') = ||π - π'||_1 restricted to T (top t=25). L=1: mean=5.1, median=4, min=0, max=20, stdev=4.9. L=2: mean=6.5, median=4, max=28, stdev=6.3.
- Robust method CM+: MINLP, p=2 norm. Γ parameter (number of switched inconsequential games to protect against). C unchanged under perturbation. b' = b + something linear in Δ.
- Optimization: min_r max_{Δ∈D(Γ)} ||Cr - b'||_2. Transform to min max squared norm. Introduce t. Constraints for each Δ̄. Cutting-plane / constraint generation: solve restricted QP, then subproblem over Δ to find violated constraint. Solve time < 1 minute for instances.
- Γ=0 => CM rankings. Γ ≥ N (total inconsequential games) => completely insensitive to any switches.
- Experiments: Γ=5, L=1,2. CM+ histograms: L=1 mean=1.8 median=0 max=10 stdev=2.4. L=2 mean=2.5 median=2 max=14 stdev=2.8. Much lower than CM.
- Bubble plot: most bubbles below x=y line.
- 2008 season: top-3 stable across Γ=0..10. Each team moves at most 2 positions. Ranks stabilize for Γ≥7.
- Data: 2006-2011 regular seasons, FBS focus, n=195 in 2010 (120 FBS + 75 outside), 772 games involving at least one FBS team out of 3,960 total.

Page numbers: The source text includes page markers 1 through 20 (the footer says "1 Submission...", "2 ...", etc. up to 20). I should cite [PAGE N] where relevant. The images (figures/tables) are described on pages 7-8 (Figure 1), page 9 (Table 1), page 11-12 (Figure 2), page 15 (Figure 3), page 16 (Figure 4), page 17 (Figure 5). I need to be careful: the text says page numbers in the footers. I can cite approximate pages based on the text flow.

Structure of response:
- THINK_TRACE: Deep multi-hop derivation. Discuss the mathematical derivation from CM to CM+, the sensitivity metric, the robust optimization reformulation, the cutting-plane algorithm, breakdown regimes (Γ=0, Γ≥N, NP-hard appearance but tractable in practice, p=∞ ambiguity vs p=2 uniqueness), gray-zone audits (definition of inconsequential, choice of ω=0.3, t=25, non-stochastic vs stochastic, omitted games not handled, data handling of non-FBS teams). Must be >=400 words.
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations. Define W, C, b, r, π, T, B, I, D, D(L), Δ, switch measure δ, CM+ MINLP, constraint generation subproblem. Units: dimensionless ratings, ranks are ordinal integers, computation time in seconds/minutes on Intel Core 2 Quad 2.4 GHz, 4 GB RAM, CPLEX 12.2, Matlab R2010b. Page citations: [PAGE 3] for CM system, [PAGE 5-6] for sensitivity definitions, [PAGE 10-11] for robust optimization, [PAGE 7-8] for Figure 1 stats, [PAGE 16] for Figure 4 stats, [PAGE 12] for Figure 2 observations, [PAGE 1] for BCS context, [PAGE 2] for LSU/Boise State example. Breakdown regimes: Γ=0 degenerates to CM; Γ≥N yields complete insensitivity but N can be large making constraint enumeration intractable; p=∞ led to alternative optima/ambiguity (footnote on page 10); C invertible because diagonally dominant positive definite; if Γ is too large relative to N, computation time can be hours.
- RETROCAUSAL_GENEALOGY: Lineage from Colley Matrix (2002), Keener (1993 Perron-Frobenius), Massey thesis, Govan/Langville/Meyer (2009 offense-defense), Chartier et al. (2011 sensitivity/stability), robust optimization (Ben-Tal et al. 2009, Bertsimas & Sim 2004 price of robustness), El Ghaoui & Lebret (1997 robust least squares), BCS history (1998), 1990 split national champion, 2010 LSU/Boise State glitch. Multi-week traps: weekly recalculation, Γ conservatism vs stability, omitted FCS games vs switched outcomes, top-25 focus vs full FBS ranking.
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression (when rankings are questioned, do we revert to CM Γ=0 or human polls?), counter-trap (adversarial switching of inconsequential games to manipulate top-25), clock (weekly recalculation cadence, <1 minute compute time, season-long vs bowl selection timing). How a ranking authority might regress to familiar CM under pressure, or how a counter-trap could exploit Γ mis-specification.
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This is a bit odd for a sports ranking paper, but I can interpret "veto proof" as layers that invalidate or constrain the model: physical layer (game outcomes are discrete, no ties, 12-game season, FBS vs FCS competitive asymmetry), biomechanical layer (not directly applicable but player availability/injuries not modeled), weather layer (not modeled, win-loss only ignores margin and conditions). Veto conditions: omitted games (data integrity), non-FBS opponents, point margin ignored (so close games treated same as blowouts), Γ user subjectivity. The model is vetoed if data omission occurs (as in 2010 LSU/Boise State), because the paper explicitly does not handle omissions.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning via Verifiable Rewards? Or just "counterfactual vetoes") scenarios + predictions. I should frame them as verifiable counterfactual experiments:
  1. Veto: Re-run 2007 season with Marshall-Rice switched but set Γ=0 vs Γ=5. Prediction: CM δ=20 (max), CM+ δ≤10 (likely much lower, median 0).
  2. Veto: Set Γ ≥ N (all inconsequential games) for 2008 season. Prediction: rankings identical to Γ=10 and completely insensitive to any L switches (π=π'), per paper's claim on page 14.
  3. Veto: Change ω from 0.3 to 0.5 (more games deemed inconsequential) for 2010 season including FCS omission. Prediction: N increases, CM+ sensitivity decreases further but compute time grows; however omitted FCS game still not protected because paper excludes omissions.

I must avoid betting lines entirely. No spreads, totals, moneylines, odds. I can mention rankings, BCS scores, win percentages.

Word count: Need >=1000 words total. THINK_TRACE >=400 words. I'll aim for roughly 1500-2000 words total to be safe.

Let's draft carefully.

LaTeX equations:
- Win matrix W ∈ ℝ^{n×n}, W_ij = 1 if i beat j? Actually text says W_ij = W_ji = 0 if not played, W_ii=0. It implies entries count wins? The text says "(W+W^T)e" gives total games, "(W-W^T)e" gives win-loss spread. So W_ij is number of times i beat j? Or indicator. Let's formalize based on text: W_ij ∈ {0,1,...} perhaps counts wins of i over j. Since (W+W^T) encodes number of times i and j played, W_ij + W_ji = games between i and j. And (W-W^T)e_i = wins_i - losses_i.
- C = Diag((W+W^T)e + 2) - (W+W^T)? The text images are missing but standard Colley: C_ii = 2 + g_i, C_ij = -g_ij. I'll state it as given by the paper's definition (1)-(2), noting C depends only on schedule.
- b_i = 1 + (w_i - l_i)/2? Standard Colley. The text says b depends only on win-loss outcomes. I'll write b = 1/2 * e + 1/2 * (W - W^T) e? Let's derive: For Colley, b_i = 1 + (w_i - l_i)/2. Since (W-W^T)e_i = w_i - l_i, then b = e + 0.5 (W-W^T) e? Wait standard is (1 + (w-l)/2). Yes. So b_i = 1 + 0.5[(W-W^T)e]_i.
- System: C r = b, r = C^{-1} b.
- Perturbation: W' = W + Δ, Δ ∈ D. Conditions: Δ_ij = Δ_ji = 0 for (i,j) ∉ I; Δ_ij + Δ_ji = 0 for (i,j) ∈ I; -W_ij ≤ Δ_ij ≤ W_ji.
- D(L) = {Δ ∈ D : Σ_{i<j} |Δ_ij| ≤ L}.
- Switch measure: δ(W,W') = Σ_{i∈T} |π_i - π'_i| where π is ranking permutation. Actually text says 1-norm of sub-vector indexed by T of difference π - π'. Since π is a permutation vector (rankings), δ = ||π_T - π'_T||_1.
- CM+ problem: min_r max_{Δ∈D(Γ)} || C r - b(Δ) ||_2^2 (or norm). Text says p=2, minimize max squared norm. Since C unchanged, b' = b + linear term in Δ.
- Introduce t: constraints C r - b(Δ̄) ≤ t * 1? Actually norm squared constraints. The text says rewrite inner maximization using explicit linear constraints in (r,t). For squared 2-norm, it's quadratic, not linear, but they say strictly convex quadratic program. Maybe they linearize via epigraph of squared norm? Or they use norm not squared. I'll state as in paper: min t s.t. ||Cr - b(Δ̄)||_2 ≤ t for all Δ̄ ∈ D(Γ), which is a convex QCQP / SOCP, but paper calls it strictly convex quadratic program. I'll follow paper's wording.
- Cutting-plane: solve restricted master, then subproblem max_{Δ∈D(Γ)} ||Cr - b(Δ)||_2. If positive, add constraint.
- Complexity: |D(Γ)| = Σ_{γ=0}^Γ binom(N, γ). N total inconsequential games.

Page citations: I need to map content to page numbers. The text has footers numbered 1-20. I'll cite:
- [PAGE 1]: BCS description, 1998 implementation, top-2 bowl.
- [PAGE 2]: LSU/Boise State 2010 glitch quote.
- [PAGE 3]: CM method definition, Cr=b.
- [PAGE 4-5]: Data description, 2006-2011, n=195 in 2010.
- [PAGE 6-7]: Sensitivity definitions T, B, I, D, switch measure δ.
- [PAGE 7-8]: Figure 1 stats (L=1 mean=5.1 max=20; L=2 mean=6.5 max=28).
- [PAGE 9]: Table 1 Marshall-Rice example δ=20.
- [PAGE 10-11]: Robust MINLP, p=2, footnote about p=∞ ambiguity, computation <1 minute.
- [PAGE 12]: Figure 2, Γ=0..10, top-3 stable, max 2 position moves, stabilize Γ≥7.
- [PAGE 14]: Γ=0 as sensitive as CM; Γ≥N completely insensitive.
- [PAGE 16]: Figure 4 stats for Γ=5 (L=1 mean=1.8 max=10; L=2 mean=2.5 max=14).
- [PAGE 17]: Figure 5 bubble plot, most bubbles below x=y.

I need to ensure I don't hallucinate page numbers too specifically, but the text footers are clear enough. I'll use them.

Now, the sections:

<THINK_TRACE>
Deep multi-hop derivation:
Start from Colley Matrix: C depends only on schedule (games played), b depends only on W (win/loss). Because C is schedule-only, any perturbation Δ that flips outcomes leaves C unchanged (Δ+Δ^T=0). This is a crucial structural property: the geometry of the ranking system is fixed by the schedule; only the right-hand side b moves. This means sensitivity is entirely a function of how b changes propagate through C^{-1}. Since r = C^{-1}b, dr = C^{-1} db. The switch measure δ then captures the L1 displacement of the top-25 ordinal ranks under these perturbations.

Gray-zone audit: The paper defines inconsequential games as those between teams with winning percentage < ω = 0.3. This threshold is arbitrary but adjustable. Top t=25. The paper excludes omitted games (data errors) and only handles switched outcomes. It does not model point margins, so a 1-point win and 50-point win are identical. It is non-stochastic: no distribution over which games switch, just a worst-case budget Γ. This is robust optimization à la Bertsimas & Sim, not Bayesian. The gray zone: Γ is user-specified conservatism; there is no a priori optimal Γ. If Γ=0, identical to CM (no robustness). If Γ≥N (all inconsequential games), complete insensitivity but potentially over-conservative and computationally expensive because |D(Γ)| grows combinatorially. The paper uses constraint generation to avoid enumerating all |D(Γ)| constraints, solving a sequence of QPs and a subproblem over Δ. Compute time <1 minute on Intel Core 2 Quad 2.4GHz, 4GB RAM, CPLEX 12.2, Matlab R2010b. Larger N and Γ can take hours. Breakdown: p=∞ version had alternative optima causing ranking ambiguity (footnote [PAGE 10]); p=2 chosen for uniqueness. If data has omitted games, the model offers no protection (explicit limitation). Non-FBS teams are included in n but removed before sorting FBS rankings, which differs from Colley's preprocessing [PAGE 5].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX block:
Let [n] = {1,...,n}. W ∈ ℝ^{n×n}, W_ij = W_ji = 0 if i,j not played, W_ii=0. W_ij + W_ji = number of games between i and j. (W+W^T)e = games played vector g. (W-W^T)e = win-loss spread vector s.
C = Diag(g + 2e) - (W+W^T) (standard Colley form as implied by text's diagonally dominant positive definite matrix; exact entrywise definition given in paper's eq. (1)-(2), [PAGE 3]).
b = e + 0.5 (W - W^T) e (units: rating points, dimensionless).
System: C r = b, r = C^{-1} b ∈ ℝ^n. C symmetric positive definite (diagonally dominant), so unique solution [PAGE 3].
Ranking permutation π: sort r descending; π_i = rank of team i. Top-t set T = {i : π_i ≤ t}, t=25. Bottom set B = {i : win%_i < ω}, ω=0.3 [PAGE 6].
Inconsequential set I = {(i,j) : i<j, i,j ∈ B, i and j played} [PAGE 6].
Perturbation set D = {Δ : Δ_ij = Δ_ji = 0 ∀(i,j)∉I; Δ_ij + Δ_ji = 0 ∀(i,j)∈I; -W_ij ≤ Δ_ij ≤ W_ji ∀(i,j)∈I} [PAGE 6-7].
Budgeted set D(L) = {Δ ∈ D : Σ_{i<j} |Δ_ij| ≤ L}, L ∈ ℤ_{≥0} [PAGE 7].
Cardinality: |D(L)| = Σ_{ℓ=0}^L binom(N, ℓ), N = Σ_{(i,j)∈I} (W_ij + W_ji) total inconsequential games [PAGE 7].
Switch measure: δ(W, W') = || (π - π')_T ||_1 = Σ_{i∈T} |π_i - π'_i|, dimensionless ordinal units [PAGE 7].
CM+ robust problem: min_{r∈ℝ^n} max_{Δ∈D(Γ)} || C r - b(W+Δ) ||_2^2 [PAGE 10-11]. Because Δ+Δ^T=0, C(W+Δ)=C(W)=C [PAGE 10]. b changes linearly: b(W+Δ) = b(W) + 0.5 (Δ - Δ^T) e = b(W) + Δ e (since Δ antisymmetric on support) [PAGE 10].
Epigraph form: min t s.t. || C r - b(Δ̄) ||_2 ≤ t ∀ Δ̄ ∈ D(Γ). Strictly convex QP with unique solution [PAGE 11].
Constraint generation: master over subset; subproblem max_{Δ∈D(Γ)} || C r̄ - b(Δ) ||_2. If optimal value > 0, add violated constraint; else (r̄, t̄) optimal [PAGE 11].
Empirical units: computation < 60 seconds on Intel Core 2 Quad 2.4 GHz, 4 GB RAM, Linux, CPLEX 12.2, MATLAB R2010b [PAGE 11].
Histogram stats [PAGE 7-8]: CM L=1: mean δ=5.1, median=4, min=0, max=20, stdev=4.9. CM L=2: mean=6.5, median=4, max=28, stdev=6.3. CM+ Γ=5 [PAGE 16]: L=1 mean=1.8, median=0, max=10, stdev=2.4. L=2 mean=2.5, median=2, max=14, stdev=2.8.
Breakdown regimes: Γ=0 ⇒ CM+ ≡ CM (max sensitivity) [PAGE 14]. Γ ≥ N ⇒ π invariant to any Δ ∈ D(L) for any L, because scenario set identical [PAGE 14]. p=∞ formulation produced multiple alternative optima and ranking ambiguity, motivating switch to p=2 [PAGE 10 footnote]. Omitted games are outside scope; accidental data omission (e.g., 2010 FCS playoff game) can still swap LSU/Boise State in BCS [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage: College football rankings pre-1998 relied on human polls (AP). 1990 split national champion showed poll disagreement [PAGE 1]. BCS since 1998 combines polls and computer rankings; top-2 play for national title [PAGE 1]. Colley Matrix (CM) is one of six BCS computer rankings, the only one fully published [PAGE 3], [PAGE 6]. Scientific antecedents: Keener (1993) Perron-Frobenius ranking [PAGE 20 ref 17], Massey thesis (statistical models) [PAGE 20 ref 18], Govan/Langville/Meyer (2009) offense-defense [PAGE 20 ref 14], Chartier et al. (2011) sensitivity/stability under perfect-season perturbations [PAGE 3]. Robust optimization lineage: Ben-Tal, El Ghaoui, Nemirovski (2009) [PAGE 3 ref 7], Bertsimas & Sim (2004) price of robustness [PAGE 3 ref 8], El Ghaoui & Lebret (1997) robust least squares [PAGE 20 ref 13].
Multi-week traps: The BCS calculates rankings weekly; a single switched inconsequential game near season end can reorder top-10 (LSU/Boise State 2010) [PAGE 2]. The trap is that teams near the cutoff (ranks 9-11) have ratings separated by O(10^{-3}) in BCS score, so a single game flip propagates through C^{-1} and changes bowl eligibility. Another trap: because CM ignores margin of victory, close games between weak teams count equally as dominant wins, creating hidden leverage. The paper's robustness is retro-causal in the sense that it imagines past games could have gone differently and asks whether today's top-25 would survive; it does not forecast future games, only audits historical ranking stability.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When a ranking crisis erupts (e.g., 2010 LSU/Boise State omission), administrators and pollsters tend to regress to familiar, transparent methods—human polls or unmodified CM—because they are auditable, even if less robust. The paper's CM+ requires trusting a MINLP and a user-chosen Γ, which introduces opacity; under pressure, a decision-maker may revert to Γ=0 (plain CM) or override the computer entirely. This is a habit regression to the status quo ante.
Counter-trap: An adversary aware of Γ could target the Γ most influential inconsequential games to maximize rank displacement. Because CM+ protects against up to Γ switches but not necessarily the worst combination beyond that, a counter-trap is to switch L > Γ games or to switch games involving teams just outside B (winning percentage slightly above ω) so they are not classified inconsequential yet still affect strength-of-schedule through C. However C is schedule-only, so flipping outcomes does not change C; the counter-trap must operate through b.
Clock: Rankings are recalculated about once per week; compute time <1 minute makes CM+ feasible within this clock [PAGE 11]. But bowl selection occurs immediately after the regular season; there is no time for iterative stakeholder negotiation over Γ. The clock also creates a stability trap: early-season Γ choices may not remain appropriate as N (number of inconsequential games) grows or shrinks week to week. Figure 2 shows ranks stabilize for Γ ≥ 7 in 2008, suggesting a hysteresis point where additional conservatism yields no further reordering [PAGE 12].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The model assumes no ties, exactly one winner per game, and a fixed schedule of roughly 12 FBS games per team [PAGE 1]. It does not incorporate weather, venue, injuries, or player availability; win-loss is the sole observable. If a game is canceled or postponed (physical layer disruption), C and b are undefined for that pairing unless imputed.
Biomechanical layer: Not modeled. Individual athlete fatigue, recovery, or biomechanical stress are absent because the unit of analysis is the team-season aggregate. This is a veto if one argues that team strength is a latent physiological state not captured by binary outcomes.
Weather layer: Not modeled. A team winning in a blizzard receives identical b contribution to a team winning in dome conditions. Since margin of victory is excluded [PAGE 3], even dominant vs narrow wins are equated.
Veto conditions: (1) Data omission: the paper explicitly does not handle omitted games [PAGE 3]; the 2010 LSU/Boise State case shows an omitted FCS playoff game can swap top-10 order, which CM+ cannot prevent because omission is not a switched outcome in D [PAGE 2]. (2) ω and t misspecification: if a team with winning percentage 0.31 is actually inconsequential but excluded from B, its games are not protected. (3) Γ exhaustion: if more than Γ inconsequential games are misreported, robustness guarantee collapses. (4) Non-FBS data handling: the paper rates all n teams including non-FBS opponents then deletes them before sorting, differing from Colley's preprocessing [PAGE 5]; this can alter b and r for FBS teams relative to official Colley rankings, introducing a veto if official BCS data diverges.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: 2007 season, Marshall–Rice switch (both <30% win percentage). Set Γ=0 (plain CM) vs Γ=5 (CM+). Verification: Table 1 shows CM δ=20 [PAGE 9], the worst-case max for L=1 [PAGE 8]. Prediction: CM+ with Γ=5 will produce δ ≤ 10, and given Figure 4 median=0, most likely δ=0 or 2 for this specific switch. The veto triggers if CM+ δ > 10, falsifying the claimed robustness improvement for this instance.
Scenario 2: 2008 season, Γ ≥ N. Let N be total inconsequential games in 2008. Set Γ = N (or larger). Verification: Paper claims π = π' for any W' = W + Δ because the scenario set b' is identical [PAGE 14]. Prediction: The top-25 ranking will be identical for Γ=N and Γ=N+1, and will not change under any L ∈ {1,2} switches. The veto triggers if any single inconsequential switch alters a top-25 rank at Γ=N, contradicting the theoretical insensitivity claim.
Scenario 3: 2010 season, ω changed from 0.3 to 0.5, including the omitted Appalachian State–Western Illinois FCS game in I. Verification: Raising ω increases N and expands D(Γ). Prediction: Mean switch measure for L=1 will drop below CM+ Γ=5 baseline of 1.8 (likely toward 1.0–1.2), but compute time will increase superlinearly because |D(Γ)| grows combinatorially in N [PAGE 11]. Crucially, because the paper excludes omitted games [PAGE 3], the veto triggers if the omitted FCS game is actually missing from W: CM+ cannot protect against it, and LSU/Boise State-style reordering remains possible regardless of Γ.
</RLVR_COUNTERFACTUAL_VETOES>

Now I need to assemble. Ensure total word count >=1000. THINK_TRACE >=400 words. Let's estimate: THINK_TRACE maybe ~450. SOURCE_OPERATORS maybe ~350. RETROCAUSAL ~250. RECURSIVE ~250. CROSS_LAYER ~250. RLVR ~250. Total ~1800. Good.

I must not mention betting lines. Check: no spreads, totals, moneylines, odds. I mention "BCS score", "rankings", "win percentages". Fine.

Check toy equations: I am using formal LaTeX from the paper, not inventing fake ratios. I should avoid making up new equations not in paper. I can present standard Colley form but note it's implied. It's fine.

Cite exact [PAGE N] markers. I have them.

Use verbatim quotes where useful. I can include a short quote from page 2 about LSU/Boise State. Let's include one.

Let's write it out fully.

One thing: The source text uses page footers 1-20. I'll reference them as [PAGE N].

I need to ensure I don't exceed any policy. The content is about sports ranking math, no betting advice. Fine.

Let's draft the final response with all XML sections exactly as specified.

Make sure to include verbatim quotes from source where appropriate. For example:
[PAGE 2] quote: "The final BCS ratings show LSU ranked 10th and Boise State 11th. But ...Wes Colley’s final rankings, as submitted to the BCS, were incorrect. The Appalachian State-Western Illinois FCS playoff game was missing from his data set..."
Also page 3: "our goal is to devise a ranking system whose top rankings are stable even if a 'far away,' inconsequential game happens to have a different outcome."

Let's write.

Word count check: I will write generously.

Final output should contain only the XML sections and the text within them? The user asked for the sections. I'll provide exactly those sections.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation begins with the Colley Matrix (CM) structural identity that the paper exploits repeatedly: for a schedule of games among n teams, the matrix C depends only on which teams played, while the right-hand side b depends only on the win-loss outcomes encoded in W [PAGE 3]. Because any outcome switch Δ satisfies Δ + Δ^T = 0 on the inconsequential support, the perturbation cancels out of C; the schedule geometry is invariant [PAGE 10]. Therefore r = C^{-1}b means that all sensitivity flows through the linear map C^{-1} applied to changes in b. The switch measure δ(W,W') = ||(π − π')_T||_1 then measures the ordinal L1 displacement of the top t = 25 teams under these perturbations [PAGE 7].

A gray-zone audit reveals several fragile assumptions. First, “inconsequential” is defined by winning percentage ω = 0.3 and top-set size t = 25; both are user-tunable with no a priori optimum [PAGE 6]. Second, the method explicitly excludes omitted games, treating only switched outcomes as admissible perturbations [PAGE 3]. This is consequential because the motivating 2010 LSU/Boise State BCS crisis was caused by a missing Appalachian State–Western Illinois FCS playoff game, not a switched result [PAGE 2]. Third, the approach is non-stochastic: no distribution over which inconsequential games switch is assumed, only a budget Γ of possible switches [PAGE 4]. This places it in the robust-optimization tradition of Bertsimas & Sim (2004) and Ben-Tal et al. (2009), not in Bayesian ranking [PAGE 3]. Fourth, Γ itself has no best ex ante value; Γ = 0 reproduces CM exactly, while Γ ≥ N (all inconsequential games) yields complete insensitivity but potentially prohibitive combinatorial growth in |D(Γ)| = Σ_{ℓ=0}^{Γ} binom(N,ℓ) [PAGE 14]. The paper avoids full enumeration via a cutting-plane method: solve a restricted strictly convex quadratic program, then solve a subproblem over Δ to find a violated constraint, repeating until no violation exists [PAGE 11]. Compute time is under one minute on an Intel Core 2 Quad 2.4 GHz, 4 GB RAM, CPLEX 12.2, MATLAB R2010b, though larger N and Γ can require hours [PAGE 11]. A breakdown regime exists for p = ∞: the first version produced multiple alternative optima and ranking ambiguity, motivating the switch to p = 2 for uniqueness [PAGE 10 footnote]. Another breakdown is data integrity: if an FCS game is omitted from W entirely, CM+ offers no protection because omission is outside D [PAGE 2]. Finally, the paper’s handling of non-FBS teams—rating all n teams then deleting non-FBS entries before sorting—differs from Colley’s own preprocessing and can shift FBS ratings relative to official Colley outputs [PAGE 5].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let [n] = {1,...,n}. Define the win matrix W ∈ ℝ^{n×n} such that W_ij = W_ji = 0 if teams i and j did not play, W_ii = 0, and W_ij + W_ji equals the number of games between i and j [PAGE 3]. Let e be the all-ones vector. Then (W + W^T)e is the games-played vector g, and (W − W^T)e is the win-loss spread vector s [PAGE 3].

The Colley matrix is defined by the paper’s equations (1)–(2) as C = Diag(g + 2e) − (W + W^T) (implied by the statement that C is diagonally dominant and positive definite, with entries depending only on schedule) [PAGE 3]. The ratings vector r ∈ ℝ^n is the unique solution of
C r = b,  r = C^{-1}b,
where b depends only on win-loss outcomes; in standard Colley form b_i = 1 + ½[(W − W^T)e]_i, measured in dimensionless rating points [PAGE 3].

Rankings are obtained by sorting r descending to produce a permutation π of [n], where π_i is the rank of team i [PAGE 3]. Define the top set T = {i : π_i ≤ t} with t = 25, and the bottom set B = {i : win%_i < ω} with ω = 0.3 [PAGE 6]. The inconsequential game set is
I = {(i,j) : i < j, i ∈ B, j ∈ B, i and j played} [PAGE 6].

Admissible perturbations W' = W + Δ satisfy Δ ∈ D, where
Δ_ij = Δ_ji = 0 for (i,j) ∉ I,
Δ_ij + Δ_ji = 0 for (i,j) ∈ I,
−W_ij ≤ Δ_ij ≤ W_ji for (i,j) ∈ I [PAGE 6–7].
For an integer budget L ≥ 0,
D(L) = {Δ ∈ D : Σ_{i<j} |Δ_ij| ≤ L},
and |D(L)| = Σ_{ℓ=0}^{L} binom(N,ℓ), where N = Σ_{(i,j)∈I} (W_ij + W_ji) is the total number of inconsequential games [PAGE 7].

The switch measure, in dimensionless ordinal units, is
δ(W,W') = ||(π − π')_T||_1 = Σ_{i∈T} |π_i − π'_i|,
where π' is the ranking induced by W' [PAGE 7].

Empirical switch-measure statistics [PAGE 7–8]:
CM, L = 1: mean δ = 5.1, median = 4, min = 0, max = 20, stdev = 4.9.
CM, L = 2: mean δ = 6.5, median = 4, max = 28, stdev = 6.3.

The robust Colley Matrix Plus (CM+) formulation uses user-specified Γ ≥ 0 and solves [PAGE 10–11]:
min_{r} max_{Δ∈D(Γ)} || C r − b(W + Δ) ||_2^2.
Because Δ + Δ^T = 0, C(W + Δ) = C(W) = C, so only b shifts linearly: b(W+Δ) = b(W) + ½(Δ − Δ^T)e [PAGE 10]. The epigraph reformulation introduces t and imposes one convex constraint per Δ̄ ∈ D(Γ):
min t  subject to  || C r − b(Δ̄) ||_2 ≤ t  ∀ Δ̄ ∈ D(Γ),
yielding a strictly convex quadratic program with a unique solution [PAGE 11].

Constraint-generation subproblem [PAGE 11]: given approximate (r̄, t̄), solve
max_{Δ∈D(Γ)} || C r̄ − b(Δ) ||_2.
If optimal value > 0, add the violated constraint; otherwise (r̄, t̄) is optimal. Computation requires less than one minute on Intel Core 2 Quad 2.4 GHz, 4 GB RAM, Linux, CPLEX 12.2, MATLAB R2010b; larger N and Γ may take minutes to hours [PAGE 11].

CM+ empirical statistics with Γ = 5 [PAGE 16]:
L = 1: mean δ = 1.8, median = 0, max = 10, stdev = 2.4.
L = 2: mean δ = 2.5, median = 2, max = 14, stdev = 2.8.

Breakdown regimes: Γ = 0 ⇒ CM+ ≡ CM (no robustness) [PAGE 14]; Γ ≥ N ⇒ π invariant to any Δ ∈ D(L) because the scenario set b' is identical [PAGE 14]; p = ∞ introduced alternative optima and ambiguity [PAGE 10]; omitted games are unhandled [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage that begins with pre-1998 college football, when human polls such as the AP determined bowl matchups and the national champion, producing split titles such as the 1990 season disagreement [PAGE 1]. The BCS was implemented in 1998 to combine human polls and computer rankings into a BCS score, matching the top two teams for a national-championship game [PAGE 1]. The Colley Matrix is one of six BCS computer rankings and the only one fully published in open literature, making it the systematic target of this study [PAGE 3, PAGE 6].

Scientific antecedents include Keener’s Perron-Frobenius approach to football ranking (1993) [PAGE 20 ref 17], Massey’s statistical rating models [PAGE 20 ref 18], Govan, Langville, and Meyer’s offense-defense method (2009) [PAGE 20 ref 14], and Chartier et al.’s sensitivity and stability analysis of ranking vectors (2011), which examined a hypothetical “perfect” season and a real-world instability example [PAGE 3]. The robust optimization layer draws on Ben-Tal, El Ghaoui, and Nemirovski (2009), Bertsimas and Sim’s “price of robustness” (2004), and El Ghaoui and Lebret’s robust least squares (1997) [PAGE 3, PAGE 20 refs 7, 8, 13].

A multi-week trap is embedded in the BCS calendar: rankings are computed weekly, and near season end the separation between rank 10 and rank 11 can be on the order of 0.0063 in BCS score, so a single data error or outcome flip can reorder bowl eligibility [PAGE 2]. The motivating quotation illustrates this trap: “LSU and Boise State are so close in the overall BCS rankings (.0063) that this one error switches the order. Boise State should be 10th in the overall BCS rankings and LSU should be No. 11” [PAGE 2]. Because CM ignores margin of victory, close games between weak teams carry the same leverage as dominant victories, creating hidden sensitivity in the b vector that propagates through C^{-1}. The paper’s robustness is retro-causal: it asks whether today’s top 25 would have survived had inconsequential past games gone differently, rather than forecasting future outcomes. It explicitly does not protect against omitted games, which remains a latent trap whenever data ingestion fails [PAGE 3].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
When a ranking crisis occurs—such as the 2010 LSU/Boise State swap caused by a missing FCS playoff game—administrators tend to regress to familiar, auditable methods: human polls or the unmodified Colley Matrix, because they are transparent and politically defensible [PAGE 2]. Adopting CM+ requires trusting a mixed-integer nonlinear program and a user-chosen conservatism parameter Γ, which introduces opacity; under pressure, a decision-maker may regress to Γ = 0 (plain CM) or override the computer ranking entirely. This habit regression undermines the very robustness the method is designed to provide.

A counter-trap arises from the structure of D(Γ). CM+ protects against up to Γ switched inconsequential games, but not against L > Γ switches, nor against games involving teams just above the ω = 0.3 threshold who are excluded from B yet still influence strength of schedule through C [PAGE 6]. Because C depends only on the schedule and is invariant to outcome flips [PAGE 10], an adversary cannot attack the geometry directly; the counter-trap must operate through b by switching outcomes near the boundary of B or by manipulating which games are classified inconsequential via ω. If Γ is set too low relative to the actual number of data errors, the robust guarantee collapses.

The clock imposes a practical constraint: rankings are recalculated roughly once per week, and CM+ solves in under one minute, so computation is not the bottleneck [PAGE 11]. However, bowl selection occurs immediately after the regular season, leaving no window for iterative stakeholder negotiation over Γ. Figure 2 shows that for the 2008 season team ranks move by at most two positions across Γ = 0,...,10 and stabilize for 7 ≤ Γ ≤ 10 [PAGE 12], indicating a hysteresis point beyond which additional conservatism yields no reordering. A crisis-driven choice of Γ made in week 12 may not match the optimal Γ for bowl selection in week 14, creating a temporal mismatch between model calibration and decision time.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The model assumes no ties, exactly one winner per game, and approximately 12 regular-season games per FBS team [PAGE 1]. It does not incorporate weather, venue, injuries, or player availability; win-loss is the sole observable. A canceled or postponed game leaves C and b undefined for that pairing unless imputed, which the paper does not address.

Biomechanical layer: Not modeled. Individual athlete fatigue, recovery, or biomechanical stress are absent because the unit of analysis is the team-season aggregate. If team strength is a latent physiological state, binary outcomes are an insufficient measurement layer, constituting a veto for any claim that CM+ captures true team quality rather than observed win-loss history.

Weather layer: Not modeled. A team winning in severe weather receives identical b contribution to a team winning in controlled conditions. Because margin of victory is excluded [PAGE 3], narrow wins and blowouts are equated, removing a potential noise filter that could otherwise downweight fluke outcomes.

Veto conditions: (1) Data omission is the most explicit veto: the paper states it does not handle omitted games, since accidental omission can be prevented by careful data handling [PAGE 3]. The 2010 LSU/Boise State case demonstrates that a missing FCS playoff game can swap top-10 order, which CM+ cannot prevent because omission is outside the perturbation set D [PAGE 2]. (2) Threshold misspecification: if a team with winning percentage 0.31 is substantively inconsequential but excluded from B because ω = 0.3, its games are unprotected [PAGE 6]. (3) Γ exhaustion: if more than Γ inconsequential games are misreported, the robustness guarantee no longer applies [PAGE 14]. (4) Non-FBS data handling: the paper rates all n teams including non-FBS opponents then deletes them before sorting FBS rankings, differing from Colley’s own preprocessing [PAGE 5]; if official BCS data diverges from this handling, the resulting FBS rankings may be vetoed by discrepancy with the published Colley Matrix.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: 2007 season, Marshall–Rice switch (both below 30% win percentage). Run Γ = 0 (plain CM) versus Γ = 5 (CM+). Verification target: Table 1 records CM δ = 20 for this exact switch, which matches the L = 1 worst-case maximum [PAGE 8, PAGE 9]. Prediction: CM+ with Γ = 5 will yield δ ≤ 10, and given Figure 4’s median of 0, this specific switch will most likely produce δ = 0 or 2 [PAGE 16]. Veto trigger: if CM+ produces δ > 10 on this instance, the claimed robustness improvement is falsified for the paper’s own illustrative worst case.

Scenario 2: 2008 season, Γ ≥ N where N is the total number of inconsequential games. Verification target: the paper claims that when Γ ≥ N, the scenario set b' is identical for W and any W' = W + Δ, so π = π' and rankings are completely insensitive to any number of switches [PAGE 14]. Prediction: at Γ = N and Γ = N + 1, the top-25 ranking will be identical and will not change under L ∈ {1,2} switches [PAGE 12]. Veto trigger: if any single inconsequential switch alters a top-25 rank at Γ = N, the theoretical insensitivity claim is contradicted.

Scenario 3: 2010 season, change ω from 0.3 to 0.5 and attempt to include the omitted Appalachian State–Western Illinois FCS game in I. Verification target: raising ω increases N and expands D(Γ), so |D(Γ)| grows combinatorially and solve time increases [PAGE 7, PAGE 11]. Prediction: mean switch measure for L = 1 will drop below the CM+ Γ = 5 baseline of 1.8 (likely toward 1.0–1.2), but compute time will grow superlinearly [PAGE 16]. Crucially, because the paper excludes omitted games [PAGE 3], the veto triggers if the omitted FCS game is absent from W: CM+ cannot protect against it, and an LSU/Boise State-style reordering remains possible regardless of Γ.
</RLVR_COUNTERFACTUAL_VETOES>