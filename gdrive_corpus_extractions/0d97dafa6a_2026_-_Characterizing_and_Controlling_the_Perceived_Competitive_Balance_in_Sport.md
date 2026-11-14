---
source: "2026 - Characterizing and Controlling the Perceived Competitive Balance in Sports Leagues - Vaz-de-Melo et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2026"
pages: 27
model: deepseek/deepseek-v4.1-flash-1017
words: 7778
---

<NATIVE_REASONING>
We need answer as GSE+GSI Frontier Reasoning Foundry. Need adhere exact XML sections, >=1000 words, no betting lines (avoid spreads/totals/moneylines/odds? Source mentions odds and betting markets. Invariant says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. We can mention betting-market accuracy? "odds" prohibited. Need avoid word odds? likely never mention odds. We can refer to "market-implied favorite accuracy" or "betting-market accuracy" maybe "betting" itself is okay? Invariant specifically betting lines: no spreads/totals/moneylines/odds. To be safe, avoid "odds", "betting lines", "moneyline", "spread", "totals", "over/under". Can mention paper's "market favorite accuracy" but source says betting markets/odds. We can cite exact [PAGE N] markers and verbatim quotes. Need page markers. The source text has page numbers at bottom: pages 1-29? Provided PAGES: 27 but text has 29? Need cite exact [PAGE N] markers. We can use [PAGE 3] etc. Need quotes verbatim. Must quote source exact. Need source operators equations in LaTeX with units, assumptions, singularities/breakdown regimes. Need discuss paper's metrics: null model, probabilities P_h, P_d, P_a; X_i,t sum points; variance; quantile q_t; τ observed; normalized τ%; expected τ^RR; schedule tensor S; iMWM; constraints; weights (rank squared difference); Bradley-Terry. Need include formal equations with SI/information/probability units? Competitive balance metrics dimensionless; probabilities dimensionless; time rounds. We can state units: points, rounds, dimensionless indices; information units maybe nats? But paper doesn't use information. Invariant demands SI/information/probability units. We can annotate: probabilities dimensionless in [0,1], points in league points (not SI), rounds in matchdays, variance points^2, normalized τ% dimensionless percentage. For equations, use formal LaTeX. Need exact singularity/breakdown regimes: α=0 or 1; K finite MC error; no permutations; ties/draws; odd teams bye; degeneracy in matching weights when rankings equal; schedule constraints infeasible; all teams equal yields no τ? Actually if no τ, set duration T; variance zero? q_t; α significance; P_d zero sports; Bradley-Terry binary no draws; double round robin constraints; final V same across permutations; expected τ depends on uniform RR assumption. Need source citations with PAGE markers and verbatim quotes. Need quote exact lines. Need ensure quotes from source text exact. We can quote short phrases with [PAGE N]. Need page numbers. Let's map approximate page numbers from text.

The source text begins page 1 at intro. Page 2: contributions section start? Actually bottom page 1 after first para? Let's identify:
- Page 1: Title, Intro first paragraphs, ends "The problem, however, is that different" then "1".
- Page 2: "metrics capture..." contributions, Figure 1 description, bottom "2".
- Page 3: contributions continued, "Thus, our first contribution..." etc, bottom "3".
- Page 4: Dataset, Probabilistic Metric 4.1 Null Model, bottom "4".
- Page 5: Null model continued, 4.2 observed turning point, bottom "5".
- Page 6: formulas, bottom "6".
- Page 7: Figure 2, results soccer etc, bottom "7".
- Page 8: 4.3 expected turning point, Sada Cruzeiro, bottom "8".
- Page 9: expected turning point formulas, bottom "9".
- Page 10: 4.4 Betting Markets, Figure 3, bottom "10".
- Page 11: 4.5 observed vs expected, Figure 4, bottom "11".
- Page 12: controlling competitive balance 5.1 formulation, bottom "12".
- Page 13: constraints, bottom "13".
- Page 14: 5.2 iMWM, bottom "14".
- Page 15: algorithm and weighting, bottom "15".
- Page 16: 5.3 Results, Figure 5, bottom "16".
- Page 17: Table 1, bottom "17".
- Page 18: 5.4 practical scenarios, bottom "18".
- Page 19: conclusion, bottom "19".
- Page 20-24: references, page 20 begins references, page 24 ends.
- Page 25: Appendix Synthetic Validation, bottom "25".
- Page 26: controlling, bottom "26".
- Page 27: General Controlling Formulation, bottom "27".
- Page 28: All Tournaments Results Table 2, bottom "28".
- Page 29: blank? bottom "29".

But PAGES: 27 maybe mismatch; still cite [PAGE 25] etc? User says PAGES: 27. But source text has page 29. Use page markers from source. Need maybe only up to 27? But table 2 page 28. We can cite [PAGE 17] for Table 1. For appendix general controlling [PAGE 27]. Ok.

Need construct six XML sections. Must meet >=1000 words. Deep multi-hop derivation in THINK_TRACE >=400 words. Need "gray-zone audit". We can discuss at least 1000 total, but likely more. Need exact XML tags. Avoid markdown outside? We can output only XML sections. Need no betting lines. Ensure no mention "odds" anywhere. Avoid "moneylines", "spreads", "totals", "betting lines". Source quotes may contain "odds" if verbatim. If quote source with "odds", violates? Invariants say never mention odds. So don't quote that part. Can quote "betting market" maybe okay? Hmm "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." "Betting market" is not a line but could be okay. But to be safe, avoid "betting" entirely? We need cite 4.4 validation. We can say "market-favorite accuracy" without quoting 4.4? But source has section "Betting Markets" and quote "accuracy of the betting market". If we mention "betting market" maybe not prohibited, but "odds" definitely. Avoid odds. Could quote "we validate our proposed expected turning point" and "there is a notable negative correlation" without betting. But need source operators? Maybe cite [PAGE 10] "We validate our proposed expected turning point" and "there is a notable negative correlation across all four sports". That's verbatim? Source: "We validate our proposed expected turning point ^ by evaluating its correlation with the predictability of the tournaments in our dataset." We can quote small exact. But need mention market? Maybe "predictability validation" enough.

Need "no toy equations": Use paper equations. We can include equations we derive from paper with assumptions. Not invent fake ratios. We can use formal LaTeX. Need units. Need exact singularities/breakdown regimes. Good.

Need discuss "retrocausal genealogy": historical/scientific lineage & multi-week traps. Need mention Rottenberg, Neale, Fort & Quirk, Bradley-Terry, round-robin scheduling, max-weight matching. Multi-week traps: schedule order can create artificial early divergence; Sada Cruzeiro; reversal heuristic; temporally confounding "turning point" not final standings; "yesterday" model; mid-season rank drift; broadcast tradeoffs. Need no betting.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need interpret: fans/teams organizers recursively model perceived balance. Crisis habit regression = reverting to conventional final-standings dispersion metrics; counter-trap = optimizing τ via schedule can make attractive matches early or stakeless late; clock = temporal τ and tournament clock. Need discuss.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need tie to sports? This is weird for sports league paper. Need prove physical/biomechanical/weather veto doesn't invalidate? We need "Physical/biomechanical/weather veto proof." Interpret as cross-layer constraints that could veto schedule manipulation. Need discuss travel, recovery, home advantage, weather, venue, calendar, biomechanical load. Paper only uses schedule order with same matches; cross-layer veto: if reordering increases travel burden, recovery asymmetry, weather, then schedule not feasible or alters outcomes. Need adjudicate: paper's mathematical schedule assumes outcomes fixed and only order changes; physical layer can veto because travel/rest changes performance, injury, weather. Need show proof: if schedule reordering violates rest/travel constraints, then match outcomes are not invariant; the null model probabilities may shift; "same observed match results" assumption breaks. Need maybe formal veto condition: for any permutation M, if rest_i,m < R_min or travel distance > D_max or weather-induced P_h/P_a change, then τ(S) not identifiable. We can state cross-layer veto is external to paper; paper's [PAGE 8] "we simply assume that all non-round-robin schedules can never happen" and [PAGE 12] "the results of these matches are recorded in the tournament data" supports fixed outcomes. Physical veto: schedule feasibility constraints omitted. Weather veto: P_h,P_d,P_a empirical frequencies may not be stationary. Biomechanical: injury/fatigue changes skill distribution. Need proof by contradiction: Suppose schedule reordering changes only order and keeps outcomes; if physical load changes, same outcomes not preserved; then τ estimate is counterfactual but not causal. We can declare "veto proof" requiring constraints.

RLVR counterfactual vetoes: 3 verifiable RLVR veto scenarios + predictions. Need verifiable scenarios. RLVR = reinforcement learning with verifiable rewards? Need propose counterfactual tests that could veto causal claims. 3 scenarios:
1. Permutation invariance test: For a fixed season, randomly permute all match outcomes across legal DRR schedules while preserving observed results; if τ distribution overlaps observed CI and iMWM maximizer fails to increase τ under held-out schedules, then schedule-control claim vetoed. Prediction: for seasons with <8 teams or <50 matches excluded, expected τ^RR high variance; iMWM success < threshold.
2. Rank oracle leakage test: Replace oracle final rankings with pre-season/yesterday rankings and freeze first half; if τ increase disappears when ranks are noisy beyond a threshold, then contribution depends on unavailable future information. Prediction: success rate drops from 95.7% to 69.4% [PAGE 17], so verifiable threshold; if below 69.4 or no significant, veto practical claim.
3. Physical/rest perturbation test: Replay schedule with rest/travel constraints; if reordered schedule changes home-away probabilities or injury load, then fixed-outcome τ optimization invalid. Prediction: teams with <3 rest days show altered P_h/P_a; τ_max decrease; cross-layer veto.
Need "verifiable" with metrics and thresholds. Avoid betting.

Need answer sufficiently detailed. Need maybe mention "source pages provided, cite exact [PAGE N] markers and verbatim quotes." Use quotes. Need ensure quotes are exact. Let's collect exact verbatim quotes with page numbers:

- [PAGE 1]: "A round-robin sports league is a format in which every team competes against each other, and the winner is the one that accrues the highest number of points throughout its duration." Exact.
- [PAGE 1]: "competitive balance, which refers to a well-balanced distribution of sporting talent across teams"
- [PAGE 2]: "normalized metrics enhance the ability to compare competitive balance across various sports and leagues, their values, particularly intermediate ones, are not very informative and hard to interpret." exact? Source: "Although widely used, normalized metrics enhance the ability to compare competitive balance across various sports and leagues, their values, particularly intermediate ones, are not very informative and hard to interpret." We can quote portion.
- [PAGE 3]: "the matchday τ and the fraction of matchdays occurring before τ are intuitive and interpretable measures of competitive balance." Source exact: "Thus, our first contribution is to show that both the matchday τ and the fraction of matchdays occurring before τ are intuitive and interpretable measures of competitive balance." Good.
- [PAGE 3]: "we introduce the ^ estimator, τ which represents the expected turning point of a tournament." formatting weird. Better quote "This coefficient is independent of the schedule and therefore provides a more reliable measure of competitive balance" exact.
- [PAGE 4]: "we compare the observed skill imbalance in the real tournament to those generated by a null model that replicates the characteristics of the tournament" exact.
- [PAGE 5]: "If a tournament has no τ, it is regarded as perfectly balanced throughout its entire duration, and the coefficient value is equivalent to the duration of the tournament." exact.
- [PAGE 6]: "We define the observed turning point 𝜏 as the first moment the observed imbalance 𝒱 becomes at least as large as 𝑞 and stays as such until the end of the tournament" exact.
- [PAGE 7]: "Soccer leagues are the most balanced ones" exact? Source: "Soccer leagues are the most balanced ones: the ones that present, on average, the highest turning point values." Good. Also "For basketball, τ = 32. 6%, for volleyball, τ = 29. 6%, and handball, τ = 27. 4%." exact.
- [PAGE 8]: "the likelihood of Sada Cruzeiro winning all five matches was only 3.9% if all teams were equally matched, yet they won them." exact? Source: "the likelihood of Sada Cruzeiro winning all five matches was only 3.9% if all teams were equally matched, yet they won them." yes.
- [PAGE 9]: "we simply assume that all non-round-robin schedules can never happen and that all round-robin schedules are equally likely." exact.
- [PAGE 12]: "the results of these matches are recorded in the tournament data" exact? Source: "because they are the direct projection of the underlying skill distribution in the real world, i.e., the results of these matches are recorded in the tournament data." Good.
- [PAGE 13]: constraints? "Equation 15 limits the number of times each team can play in a round t to 1." exact. "Equation 16 divides the tournament into two turns" etc.
- [PAGE 14]: "we propose a greedy approach that matches teams with the greatest skill discrepancy in each round" exact.
- [PAGE 15]: "we define the discrepancy 𝑤𝑟 , 𝑟 as the squared difference between their ranks" exact? Source: "Specifically, we define the discrepancy 𝑤𝑟 , 𝑟 as the squared difference between their ranks:" Good.
- [PAGE 17]: Table 1 numbers exact: ✔ ✔ 95.7% 33.3% 6.3%; ✔ blank 86.1% 22.2% 10.1%; blank ✔ 69.4% 22.9% 10.4%; blank blank 64.3% 18.7% 10.8%. Use.
- [PAGE 16]: "at least 96% of the seasons considered experienced a strict increase in their perceived competitive balance." exact.
- [PAGE 26]: "our heuristics consistently outperform random schedules" exact. "raising the maximizer median to 90% (15% increase) and reducing the minimizer’s to 20% (50% decrease)." exact.
- [PAGE 25]: Bradley-Terry equation: "the probability of team 𝑖 defeating team 𝑗 depends exclusively on their skill levels and 𝑝 𝑝 , calculated as 𝑝 / (𝑝 + 𝑝 )." exact? Source has "calculated as 𝑝 / (𝑝 + 𝑝 )." Good. Also "Bradley-Terry framework assumes binary outcomes (win/lose) and excludes the possibility of draws." exact.
- [PAGE 6]: "(1 𝛼)-quantile" etc. Need maybe not exact.

Need formal equations. Let's write:

For team i up to round t:
X_{i,t} = sum_{j=1}^t x_{i,j}, x_{i,j} ∈ {0,1,3} (or {0,1,3} in soccer; basketball/volleyball draws impossible, points scheme? Paper says 3/1/0). Actually paper says three outcomes 3 points win, 1 draw, 0 loss. But for basketball/volleyball draws impossible; still points? They use 3/1/0? It says "three possible outcomes: 3 points for a win, 1 point for a draw, and 0 points for a loss." Good.

Null model: For simulation k, at round t, V_t^{(k)} = Var_i(X_{i,t}^{(k)}) = (1/n) Σ (X_{i,t}^{(k)} - \bar X_t^{(k)})^2. Units: points^2. Expected μ_t = (1/K) Σ_k V_t^{(k)}. Quantile q_t = inf{ v : F_t(v) ≥ 1-α }, where F_t(v)= (1/K) Σ_k 1[V_t^{(k)} ≤ v]. α ∈ (0,1) dimensionless; q_t points^2. Observed V_t = Var_i(X_{i,t}). τ = min{ t : V_s ≥ q_s ∀ s≥t }, with τ=T if none. Normalized τ% = 100 τ/T. Expected τ^RR = E[𝒯 | M0, M ∈ G M0^{RR}] = (1/|G|) Σ_{M∈G} τ(M), approximated by K sample. Note schedule dependence.

Scheduling: S ∈ {0,1}^{T×n×n}; S_{tij}=1 if ordered match (i,j) at round t. X_{i,t}(S)= Σ_{s≤t} Σ_{j≠i} [S_{sij} x_i(i,j) + S_{sji} x_i(j,i)]? Need careful: x_i(i,j) points team i earned in match against j playing home; x_i(j,i) points team i earned against j away. Paper notation: let x_i(i,j) and x_i(j,i) represent points team i earned in its matches against i? Source: "let 𝑥 (𝑖, 𝑗) and 𝑥 (𝑗, 𝑖) represent the points team 𝑖 earned in its 𝑖 matches against , respectively, playing as home and as away." OCR messy. We can write:
X_{i,t}(S)=Σ_{j≠i}Σ_{s=1}^{t} [S_{sij} a_{ij} + S_{sji} a_{ij}^{away}], where a_{ij}=points i earns home vs j, a_{ij}^{away}=points i earns away vs j, fixed from real data.
V_t(S)= (1/n)Σ_i (X_{i,t}(S)-\bar X_t(S))^2.
S* = argmax_{S∈F} max{ t : V_s(S) ≥ Q_{1-α}[V_s(S)] ∀ s≥? } Actually paper: S* maximizes duration for which its standings dispersion remains within quantile envelope. Need write:
τ(S) = min{ t : V_s(S) ≥ q_s(S) ∀ s≥t } (or T if none). S* = argmax_{S∈F} τ(S). τ* = max_{S∈F} τ(S).
But quantile envelope depends on S? In paper Q_{1-α}[V_t(S)] maybe null model with same schedule S. We can denote q_s(S) from null simulations using schedule S. Feasible set F constraints:
S_{tii}=0 ∀t,i (13)
Σ_t S_{tij}=1 and Σ_t S_{tji}=1? For each ordered pair? Actually double round robin: each team plays every other exactly once at home and once away. So for unordered pair {i,j}, Σ_t (S_{tij}+S_{tji})=2? Paper Eq 14: each team will play against all others exactly once at home and once away. For ordered (i,j), Σ_t S_{tij}=1 for i≠j. That implies exactly once i home vs j. Then total S_{tij}+S_{tji}=2 over t. We can write both: Σ_t S_{tij}=1 ∀i≠j; maybe enough.
Σ_j (S_{tij}+S_{tji}) ≤ 1 ∀t,i (15) limits one game per round.
Divide into two turns: for first half? Eq 16: teams face each other once before facing any other team again. We can state: ∃ split T/2 such that for each ordered pair? Need not exact. Paper: "Equation 16 divides the tournament into two turns, forcing teams to face each other once before facing any other team again." We can write: S_{tij}=0 for t in second turn unless S_{t'ij}=1? Hmm not necessary, mention.

iMWM: graph G_t=(N,E_t); weight w(r_i,r_j) = (i-j)^2? Source: "squared difference between their ranks" likely w(r_i,r_j)=(i-j)^2. Max-weight matching A_t = argmax_{M⊆E_t} Σ_{(i,j)∈M} w(r_i,r_j), no duplicate nodes. S'_t = A_t ⊙ U where U strictly upper triangular. Then reverse for maximizer. Need note singularities: equal ranks => weight zero, matching degeneracy; odd n => bye; infeasible constraints; T odd; α quantile ties; K finite; no τ; variance zero if n=1; P_d=0; BT no draws; schedule permutation explosion.

Need THINK_TRACE >=400 words. We can write ~600. Need "multi-hop derivation & gray-zone audit." Discuss derivation from paper: From final standings to temporal curve. Step 1 define points process. Step 2 null model. Step 3 quantile envelope. Step 4 τ. Step 5 expected τ over permutations. Step 6 schedule optimization. Step 7 iMWM. Gray-zone: paper's causal claim about perceived balance; not actual skill; "perceived" via variance; "perceived" not measured by fans. It uses variance as "competitive imbalance" (paper: green markers depict expected variance of points distribution termed competitive imbalance). The mapping from variance to perception is an assumption. Gray zone: schedule changes order but outcomes fixed; "perceived balance" inferred, not surveyed. "betting market" validation? Avoid odds. We can say "market-favorite accuracy" but maybe no. Need mention "predictability" only. The paper's validation: expected τ negative correlation with predictability accuracy? Actually higher τ more balanced, lower market accuracy. We can cite "there is a notable negative correlation across all four sports" [PAGE 10]. Avoid odds.

Need "multi-week traps": mid-season rank estimates; yesterday model. Use table. "the yesterday model" is simple. Use [PAGE 17]. Mention "oracle" uses final rankings; practical use must forecast. This is a multi-week trap: rank drift over season; early strong/falter. Source: [PAGE 16] "some teams started the season strong but faltered towards the end." exact. Good.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need explain:
- Crisis habit regression: When audience interest drops, organizers regress to normalized dispersion metrics (Gini/HHI) and final tables, ignoring stochastic null. Paper says normalized metrics not informative [PAGE 2]. This habit can misdiagnose.
- Counter-trap: If organizers optimize τ schedule to appear balanced, fans/teams may learn and adjust expectations; broadcasters want marquee matches late, but τ-maximizer puts most balanced games early; τ-maxmin sacrifices balance to save thrilling matches. Recursive: fans anticipate stakeless late games, teams may tank? Paper cites stakeless [PAGE 1] and [PAGE 18]. Need avoid betting.
- Clock: τ is a clock (matchday of divergence); expected τ normalizes schedule. The clock is endogenous: schedule design shifts perceived clock; recursive beliefs can shift. Need mention "perceived competitive balance" not objective. Good.

CROSS_LAYER_VETO_ADJUDICATION: Need "Physical/biomechanical/weather veto proof." We can write a proof:
Veto condition: Let B be set of feasible schedules under physical constraints: rest days R_{i,t}≥R_min (e.g., 72h), travel distance D_{i,t}≤D_max, weather risk W_t≤W_max. If S* violates B, then S* invalid. If reordering changes outcomes, the fixed-outcome assumption (x_i(i,j) fixed) fails. Proof: Suppose S* increases τ by reordering. If physical load modifies x_i(i,j) or P_h,P_d,P_a, then V_t(S*) is not equal to V_t computed from observed outcomes; the null model distribution changes; τ(S*) is not the same functional. Therefore claim "only order changes" is false under cross-layer coupling. Paper itself assumes "all non-round-robin schedules can never happen" [PAGE 9] and outcomes recorded [PAGE 12]. It doesn't include travel/rest/weather constraints except Eq 15 one game per round. Weather: stationary P_h/P_d/P_a assumption; if weather changes home advantage, null model invalid. Biomechanical: injuries/fatigue alter skill; rank oracle leakage. Provide adjudication: schedule control is conditionally valid within paper's closed world (fixed results, well-ordered round robin, one game per round); any cross-layer veto demands constraints or sensitivity analysis. We can say "veto proof status: not satisfied by paper as written for operational deployment; satisfied for mathematical existence under fixed outcomes." Need be precise.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable scenarios + predictions. Need include thresholds and verifiable. Use current table numbers. We need not mention betting. We can use "market-favorite accuracy" maybe not. Use "predictability accuracy" no odds. But RLVR scenario 1 could use expected τ^RR distribution; scenario 2 rank leakage; scenario 3 physical rest. Need include predictions:
1. Permutation Monte Carlo: For seasons with n≥15, sample K=10,000 legal DRR permutations. If 95% CI of τ^RR contains observed τ for >X%, then iMWM schedule effect is not distinguishable. Prediction: for soccer τ% mean 45.9 vs basketball 32.6 etc [PAGE 7]; effect size larger for imbalanced seasons. If randomized legal schedule median τ improvement <5% while oracle iMWM claims >20%, veto causal schedule claim.
2. Oracle leakage: Use "yesterday" ranks. Table 1 predicts success 69.4% and avg increase 22.9% for mirrored? Wait table: Oracle? ✔ Mirrored? ✔ 95.7/33.3; Oracle ✔ blank 86.1/22.2; Oracle blank Mirrored ✔ 69.4/22.9; blank blank 64.3/18.7. The "yesterday" model success 69.4 when mirrored. If actual pre-season ranks produce <64.3% or avg increase <18.7, veto practical. Prediction: rank noise reduces success by 26.3 percentage points (95.7-69.4) and avg increase by 10.4 points (33.3-22.9). Need exact? 95.7-69.4=26.3; 33.3-22.9=10.4. Good. But "mirrored" both? Yes.
3. Physical rest perturbation: impose ≥72h rest and travel; if reoptimized schedule S* violates ≥5% of team-round rest constraints or weather changes P_h by >2 percentage points, then fixed-outcome τ invalid. Prediction: iMWM will place top-vs-bottom early but may force travel; τ_max drops. Need "verifiable" by schedule audit. Good.

Need mention "source operators and equations" with page citations. We should use [PAGE N] markers. Need exact quotes. We can quote with quotation marks and page. Ensure not too many quotes with "odds". Avoid. Need "betting" maybe no. Could include [PAGE 10] quote "there is a notable negative correlation across all four sports" but not context? Source: "As shown in Figure 3, there is a notable negative correlation across all four sports between the expected turning point ^ and the accuracy of the betting market" contains "betting market". We can quote only "there is a notable negative correlation across all four sports" and cite [PAGE 10]. That's exact substring. Fine.

Need be careful with "zero betting lines" in final. Do not mention "betting", "odds", "spread", "totals", "moneyline", "line". But "linear model" contains "line"? It says never mention betting lines; "linear" not a betting line. But avoid "line" maybe okay. "deadline"? no. I can avoid "betting" entirely. Section 4.4 is about market favorite accuracy; we can call "market predictability validation" but not "betting". Is "market" okay? Yes. Avoid "odds". Good.

Need no "toy equations" like Force/Fatigue. We use paper equations. Good.

Need include "SI/information/probability units": In SOURCE_OPERATORS, add a "Units ledger": X points; V points^2; μ points^2; q points^2; τ matchdays; τ% percent dimensionless; probabilities dimensionless [0,1]; schedule tensor dimensionless Boolean; α dimensionless. Information: entropy? We can state no information-theoretic unit is used in source; if desired, log-loss of null model would be nats, but not in paper. But invariant demands information units. We can mention "information units: none in the source's equations; the log-loss extension would be nats, but it is not part of the paper." Is that okay? It says state formal LaTeX equations, SI/information/probability units. We can include a note: "The paper's CB metrics are dimensionless probability/points quantities; no SI unit is invoked. For the Bradley-Terry probability, use dimensionless probability; for log-likelihood validation, nats." This satisfies. Need not invent toy. Good.

Need maybe mention "LaTeX equations" with exact notation. Use \(...\) or \[...\]. Good.

Need perhaps include "PAGE 25" quote for Bradley-Terry. Good.

Need produce XML only. No preamble. Ensure all tags present. Use CDATA? Not necessary. XML with LaTeX has `<`? Must escape `<` in text. In XML, LaTeX inequalities `<` need escape as `&lt;`. Need careful. We can use `\le` not `<`. Avoid raw `<` and `&`. Use `\leq`, `\geq`, `\in`, `\forall`. Avoid ampersands. Use `&lt;` if needed but better avoid. In equations, `<` could break XML. Use `\lt`? LaTeX `\lt` not standard; use `\leq` or `\geq`. For set notation `{ }` okay. Avoid `&` in text. Use "and" not ampersand. Use `%` okay? In XML text, `%` fine. Use `^` fine. Use `_` fine. Quotes okay. Need no raw `&`. In LaTeX `\text{...}`. Use `\left` etc. Good.

Need maybe include exact page markers [PAGE 17] inside text. Good.

Need make sections with exact names. Let's draft.

Need total word count >1000. We'll write robustly ~2500 words. Desired oververbosity 5. Need not too huge but enough. Ensure THINK_TRACE >=400. We'll make ~650. Other sections ~300 each.

Let's formulate.

Potential issue: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." In SOURCE_OPERATORS I might mention "market-favorite accuracy" but no odds. In RETROCAUSAL_GENEALOGY, "Rottenberg, Neale, Fort and Quirk" okay. In RLVR, "market" maybe okay. Avoid "betting" word entirely? It's not a line, but could be flagged. I'll avoid "betting" and "odds" completely. Use "market predictability" maybe. Source says betting site in dataset; do not mention. Use "sports data archive" no. Good.

Need quote [PAGE 10] "there is a notable negative correlation across all four sports" exact. It doesn't mention betting. Good.

Need quote [PAGE 1] "competitive balance, which refers to a well-balanced distribution of sporting talent across teams" exact? It includes comma. Fine.

Need quote [PAGE 2] "their values, particularly intermediate ones, are not very informative and hard to interpret." exact substring. Good.

Need quote [PAGE 3] "the matchday τ and the fraction of matchdays occurring before τ are intuitive and interpretable measures of competitive balance." exact? Source: "Thus, our first contribution is to show that both the matchday τ and the fraction of matchdays occurring before τ are intuitive and interpretable measures of competitive balance." Yes.

Need quote [PAGE 5] exact with "If a tournament has no τ, it is regarded as perfectly balanced throughout its entire duration, and the coefficient value is equivalent to the duration of the tournament." Good.

Need quote [PAGE 6] exact with "We define the observed turning point 𝜏 as the first moment the observed imbalance 𝒱 becomes at least as large as 𝑞 and stays as such until the end of the tournament" The source has line break; exact enough. We can use Greek τ instead of 𝜏? Verbatim quote should match? Use exact Unicode maybe. But okay. Use "observed turning point" etc. Maybe quote less: "the first moment the observed imbalance ... becomes at least as large as ... and stays as such until the end of the tournament" not exact. Need exact quotes. Use original with unicode? We'll use "We define the observed turning point τ as the first moment the observed imbalance V becomes at least as large as q and stays as such until the end of the tournament" but not verbatim. Better not mark as quote? Cite with paraphrase. The invariant says cite exact [PAGE N] markers and verbatim quotes. Need some verbatim quotes. We have many. For equations, cite pages not quote. Good.

Need mention "expected turning point" quote [PAGE 3] "This coefficient is independent of the schedule and therefore provides a more reliable measure of competitive balance" exact. Good.

Need "Sada Cruzeiro" quote [PAGE 8]. Good.

Need "we simply assume that all non-round-robin schedules can never happen and that all round-robin schedules are equally likely." exact [PAGE 9]. Good.

Need "the results of these matches are recorded in the tournament data" [PAGE 12]. Good.

Need "we propose a greedy approach that matches teams with the greatest skill discrepancy in each round" [PAGE 14]. exact.

Need "we define the discrepancy w(r_i, r_j) as the squared difference between their ranks" [PAGE 15]. Source formatting: "we define the discrepancy 𝑤𝑟 , 𝑟 as the squared difference between their ranks:" It might not include subscript. We can quote "the squared difference between their ranks" exact. Fine.

Need "at least 96% of the seasons considered experienced a strict increase in their perceived competitive balance." [PAGE 16] exact? Source: "For all eight graphs, at least 96% of the seasons considered experienced a strict increase in their perceived competitive balance." Good.

Need table [PAGE 17]. Good.

Need [PAGE 25] "Bradley-Terry framework assumes binary outcomes (win/lose) and excludes the possibility of draws." exact? Source: "Note that the Bradley-Terry framework assumes binary outcomes (win/lose) and excludes the possibility of draws." Good.

Need [PAGE 26] "our heuristics consistently outperform random schedules" exact. Good.

Need "crisis habit regression" explanation. Good.

Need maybe mention "weather" as cross-layer. Good.

Need check XML validity: Use `\mathcal{F}` etc. Ampersand? In LaTeX align environment, `&` would break XML. Avoid align with `&`. Use separate equations. No raw `&`. Avoid `&&`. Good. Avoid `\begin{array}` with `&`. Use simple. Use `\sum` etc.

Need no `&` in text. The word "and" instead. Use `%` in "tau%" fine. Need escape `>`? In XML text, `>` okay. `<` not. Use `\leq` instead of `<`. What about `\in (0,1)` okay. `[0,1]` okay. `{0,1}` okay. Use `\mathbb{R}`. Good.

Need "PAGE 17" table numbers with ✔? Unicode checkmark okay. But XML okay. Use "check" maybe. Fine.

Let's write.

Need include "SOURCE_OPERATORS_AND_EQUATIONS" with equations. Use \[ \] inside XML? Fine. Need no `<` inside. Use `\tau(S)` etc.

Let's formulate units ledger:
- \(X_{i,t}\): league points (paper uses 3-1-0; not SI).
- \(x_{i,j}\): league points.
- \(V_t\), \(\mu_t\), \(q_t\): points squared.
- \(\tau\), \(T\): matchdays/rounds (count).
- \(\tau_{\%}\): percent, dimensionless.
- \(P_h,P_d,P_a\): probability, dimensionless in [0,1].
- \(\alpha\): probability level dimensionless.
- \(S\): Boolean tensor dimensionless.
- \(w\): rank squared difference, dimensionless rank^2 (or points? ranks).
- BT \(p_i/(p_i+p_j)\): probability dimensionless.
- Information: no entropy in paper; if log-loss, nats. But don't overdo.

Need breakdown regimes:
1. \(n=1\) or \(T=0\): variance undefined/zero.
2. \(\alpha=0\): q_t = max V_t^{(k)}? Actually (1-α)-quantile at α=0 gives max; at α=1 gives min. If α=1, q_t=min, envelope too loose? Actually (1-1)=0 quantile min. τ may be T. At α=0, q_t max, τ may be early. Need note.
3. K finite: MC error; q_t unstable if K small; tail quantile if α near 0 or 1.
4. No τ: set T, normalized 100%.
5. \(P_d=0\): draw probability zero; fine for basketball/volleyball; BT excludes draws.
6. \(P_h=P_d=P_a=1/3\)? In soccer? Null model still has home advantage. If all teams equal but home advantage, \(P_h\) may not equal \(P_a\). Not singular.
7. Permutation set huge; sample K; if sample not uniform over RR permutations, expected τ biased.
8. iMWM: equal ranks => zero weights; max-weight matching nonunique; odd n => bye; constraints infeasible if T too small; double round robin two-turn constraint may conflict.
9. Reversal heuristic not guaranteed maximizer; source says "no guarantee" [PAGE 14]. Good.
10. Physical/weather nonstationarity.

Need maybe include "exact singularity/breakdown regimes" in SOURCE section.

Now final. Ensure >=1000 words. Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s multi-hop logic begins by rejecting a snapshot-only view of competitive balance. The paper defines a round-robin league as one where “every team competes against each other, and the winner is the one that accrues the highest number of points throughout its duration” [PAGE 1]. From there it treats the points vector at each round as a stochastic process rather than a final table. The first derivation hop is: team \(i\)’s points up to round \(t\) are \(X_{i,t}=\sum_{s=1}^{t}x_{i,s}\), with \(x_{i,s}\in\{0,1,3\}\). The second hop constructs a null model by simulating the same schedule \(S\) but assigning outcomes by the empirical probabilities \(P_h,P_d,P_a\), thereby capturing “the point-distribution variability in tournaments where all teams share an identical skill level” [PAGE 4]. The third hop computes a dispersion functional, usually variance \(V_t=\operatorname{Var}_i(X_{i,t})\), and builds a one-sided \((1-\alpha)\)-quantile envelope \(q_t\) from \(K\) null simulations. The fourth hop defines the observed turning point as the first round after which the real \(V_t\) stays above \(q_t\) until the end; if no such round exists, the source states that “If a tournament has no τ, it is regarded as perfectly balanced throughout its entire duration, and the coefficient value is equivalent to the duration of the tournament” [PAGE 5]. The fifth hop normalizes \(\tau\) by \(T\) to produce \(\tau_{\%}\). The sixth hop recognizes schedule dependence and defines the expected turning point by averaging \(\tau\) over round-robin permutations of the observed match results; the paper explicitly assumes “that all non-round-robin schedules can never happen and that all round-robin schedules are equally likely” [PAGE 9]. The seventh hop turns this into a schedule-control problem: choose a feasible double-round-robin tensor \(S\) maximizing the duration \(V_t(S)\) remains inside its null envelope. The eighth hop solves that with a greedy max-weight matching heuristic, iMWM, where “we propose a greedy approach that matches teams with the greatest skill discrepancy in each round” [PAGE 14]. The ninth hop reverses the \(\tau\)-minimizer to approximate a \(\tau\)-maximizer, while admitting “There is no guarantee that reversing the minimizer schedule necessarily converts it into a maximizer one” [PAGE 14].

The gray-zone audit has several layers. First, the object is “perceived” competitive balance, but the measurement is a variance quantile envelope, not fan perception. The paper’s own language moves between “expected variance of the points distribution (termed competitive imbalance)” [PAGE 2] and “perceived competitive balance.” That mapping is an assumption, not an empirically identified perceptual equation. Second, the null model preserves home advantage and schedule but removes team skill; it therefore tests whether the real standings are unusually dispersed relative to a home-advantage-only league. It does not identify true skill parameters. Third, the observed \(\tau\) is order-dependent by construction; the expected \(\tau\) uses a uniform distribution over round-robin permutations, which is a modeling convention, not an observed scheduling policy. Fourth, the schedule-control claim keeps all match results fixed: the paper says the points are “recorded in the tournament data” [PAGE 12]. That is a valid mathematical counterfactual if reordering cannot change outcomes; it is not a causal claim if travel, rest, injuries, weather, or tactics alter outcomes. Fifth, practical use requires rank forecasts. The paper uses an oracle based on final rankings and a “yesterday” model based on prior-season rankings; the gap between 95.7 percent success under the oracle and 69.4 percent under the yesterday model [PAGE 17] is exactly the multi-week forecasting trap. Sixth, the paper notes that some seasons’ real schedules beat the oracle schedule because “some teams started the season strong but faltered towards the end” [PAGE 16]. That is a rank-drift warning: a mid-season scheduler cannot know final rank. Seventh, the trade-off with broadcast value is acknowledged: the \(\tau\)-maximizer may place the most attractive matches too early, so the paper proposes a \(\tau\)-maxmin hybrid [PAGE 18]. Eighth, the quantile threshold has finite-simulation error and tail instability when \(\alpha\) is near 0 or 1. Ninth, the empirical null uses stationary outcome frequencies; if weather or schedule congestion changes those frequencies, the null envelope is mis-specified. Tenth, the tensor formulation is feasible only under explicit constraints; the double-round-robin constraints are not universal, and the appendix relaxes them for formats such as the NBA [PAGE 27].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s core process is the points path \(X_{i,t}=\sum_{s=1}^{t}x_{i,s}\), where \(x_{i,s}\in\{0,1,3\}\) in the paper’s points system: 3 for a win, 1 for a draw, 0 for a loss [PAGE 4]. For a real tournament \(C\) and schedule \(S\), the null model simulates \(K\) balanced leagues, yielding \(V_t^{(k)}\) for simulation \(k\) at round \(t\). The expected null imbalance is
\[
\mu_t=\frac{1}{K}\sum_{k=1}^{K}V_t^{(k)},\qquad V_t^{(k)}=\frac{1}{n}\sum_{i=1}^{n}\left(X_{i,t}^{(k)}-\bar X_t^{(k)}\right)^2 .
\]
The \((1-\alpha)\)-quantile envelope is
\[
q_t=\inf\left\{v:\;F_t(v)\geq 1-\alpha\right\},\qquad 
F_t(v)=\frac{1}{K}\sum_{k=1}^{K}\mathbf{1}\left[V_t^{(k)}\leq v\right],
\]
where \(\alpha\in(0,1)\) is dimensionless, \(V_t\) and \(q_t\) are in points squared, \(X_{i,t}\) is in league points, and \(t\) is a matchday count. The observed turning point is
\[
\tau=\min\left\{t:\;V_s\geq q_s\ \forall s\geq t\right\},
\]
with \(\tau=T\) if no such \(t\) exists, and the normalized value is
\[
\tau_{\%}=100\,\frac{\tau}{T}.
\]
The paper states that “If a tournament has no τ, it is regarded as perfectly balanced throughout its entire duration, and the coefficient value is equivalent to the duration of the tournament” [PAGE 5]. The expected turning point conditions on the observed results \(M_0\) and averages over round-robin permutations:
\[
\tau^{RR}=\mathbb{E}\left[\mathcal{T}\mid M_0,\;M\in\mathcal{G}^{RR}_{M_0}\right]
=\frac{1}{|\mathcal{G}^{RR}_{M_0}|}\sum_{M\in\mathcal{G}^{RR}_{M_0}}\tau(M),
\]
approximated by a sample of \(K\) round-robin permutations. The paper justifies this by “we simply assume that all non-round-robin schedules can never happen and that all round-robin schedules are equally likely” [PAGE 9]. The schedule tensor is \(S\in\{0,1\}^{T\times n\times n}\), with \(S_{tij}=1\) if ordered match \((i,j)\) occurs at round \(t\). For fixed observed points \(x_i(i,j)\) and \(x_i(j,i)\), the scheduled points and imbalance are
\[
X_{i,t}(S)=\sum_{j\neq i}\sum_{s=1}^{t}\left[S_{sij}x_i(i,j)+S_{sji}x_i(j,i)\right],
\qquad
V_t(S)=\frac{1}{n}\sum_{i=1}^{n}\left(X_{i,t}(S)-\bar X_t(S)\right)^2 .
\]
The optimization is
\[
S^{*}=\arg\max_{S\in\mathcal{F}}\tau(S),\qquad 
\tau(S)=\min\left\{t:\;V_s(S)\geq q_s(S)\ \forall s\geq t\right\},
\]
where \(\mathcal{F}\) contains the double-round-robin constraints: no self-match, each ordered pair once at home and once away, at most one match per team per round, and two turns such that teams face each other once before facing any team again [PAGE 13]. The paper states “Equation 15 limits the number of times each team can play in a round t to 1” [PAGE 13]. The iMWM graph is \(G_t=(N,E_t)\), with weight
\[
w(r_i,r_j)=(i-j)^2,
\]
which the paper describes as “the squared difference between their ranks” [PAGE 15]. A maximum-weight matching \(A_t\) is chosen in \(G_t\); then \(S'_t=A_t\odot U\), where \(U\) is strictly upper triangular, forcing the higher-ranked team at home for the minimizer; the maximizer reverses the schedule and home-away status [PAGE 14]. The appendix’s Bradley-Terry validation uses
\[
\Pr(i\text{ beats }j)=\frac{p_i}{p_i+p_j},
\]
with dimensionless skill \(p_i\), and the paper notes that “the Bradley-Terry framework assumes binary outcomes (win/lose) and excludes the possibility of draws” [PAGE 25].

Breakdown and singularity regimes: \(n=1\) or \(T=0\) makes the variance and normalized \(\tau\) undefined; \(\alpha\to 0\) drives \(q_t\) to the maximum simulated imbalance, making divergence easy and \(\tau\) small, while \(\alpha\to 1\) drives \(q_t\) to the minimum and can make \(\tau=T\); finite \(K\) creates Monte Carlo error and unstable extreme quantiles; if the true tournament never diverges, \(\tau=T\) and \(\tau_{\%}=100\) percent; if \(P_d=0\), draw probability vanishes and the model reduces to binary win-loss for basketball and volleyball; if all ranks are equal, \(w(r_i,r_j)=0\) and the max-weight matching is degenerate; odd \(n\) forces byes, so the strict one-match-per-round double-round-robin constraints become infeasible; the permutation set \(\mathcal{G}^{RR}_{M_0}\) has factorial growth, so the expected \(\tau\) is sample-approximated; and the reversal heuristic is not guaranteed optimal [PAGE 14]. The source uses no SI unit; its native units are league points, points squared, matchdays, and dimensionless probabilities. If an information-theoretic extension were used, log-loss would be in nats, but the paper’s operators themselves are probability and points operators, not entropy operators.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The genealogy runs from the uncertainty-of-outcome tradition through the stochastic-process correction. Rottenberg, Neale, Fort and Quirk, and related literature are cited for the proposition that balanced talent distribution supports league viability, while predictable outcomes can reduce engagement [PAGE 1]. The paper’s retrocausal move is to reinterpret the old final-standings dispersion program as a snapshot that misses the path. It says normalized metrics “are not very informative and hard to interpret” at intermediate values [PAGE 2], and it replaces the snapshot with a temporal null-model envelope. The Bradley-Terry lineage supplies the synthetic validation: team strength \(p_i\) generates pair probabilities \(p_i/(p_i+p_j)\), and the most imbalanced synthetic example gives a weak team a 10 percent chance against a strong team [PAGE 25]. The scheduling lineage runs through round-robin scheduling and maximum-weight matching; the paper cites the round-robin survey and solves a max-weight matching per round [PAGE 14]. The multi-week traps are explicit. First, the observed \(\tau\) is schedule-sensitive, as in the 2013/2014 Brazilian Superliga case where Sada Cruzeiro played five matches while others played two, producing \(\tau=4\) [PAGE 8]. Second, the expected \(\tau\) removes schedule noise but relies on uniform round-robin permutations, which is a strong counterfactual. Third, practical implementation needs a forecast of team strength; the oracle uses final rankings, while the yesterday model uses prior-season rankings, and the success rate falls from 95.7 percent to 69.4 percent [PAGE 17]. That is a multi-week forecasting trap: early-season rank estimates can be stale or noisy. Fourth, the schedule-control program has a broadcast trade-off: maximizing early perceived balance may put the most attractive matches early, so the \(\tau\)-maxmin alternative sacrifices some balance to reserve compelling matches for the end [PAGE 18]. Fifth, the paper acknowledges that real schedules may already create faster separation than expected, and it speculates that organizers may be “deliberately or not” using schedules that favor rapid distinction between good and bad teams [PAGE 9]. The historical lesson is that competitive-balance measurement has moved from static inequality to stochastic temporal inference, but the new metric’s causal use depends on schedule invariance, fixed outcomes, and accurate rank prediction.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when league organizers, facing falling engagement, revert to normalized final-standings dispersion measures because they are familiar. The paper warns that such metrics “are not very informative and hard to interpret” at intermediate values [PAGE 2]. That habit is a regression because it treats a stochastic league as a deterministic table and ignores the null-model envelope. The counter-trap is the recursive belief that schedule manipulation can reliably manufacture perceived balance without changing audience beliefs. If fans and broadcasters learn that the early schedule is engineered to look tight, they may discount early results; if the late schedule becomes a \(\tau\)-minimizer, the most consequential matches may occur early, and late matches may become “stakeless” for some participants, which the paper links to effort and fairness concerns [PAGE 1]. The \(\tau\)-maxmin compromise is itself a recursive-theory-of-mind solution: it models broadcaster and fan preferences for late drama while preserving some early balance [PAGE 18]. The clock is the matchday index \(t\): \(\tau\) is literally a clock of divergence, and \(\tau_{\%}\) is a normalized clock. The recursive trap is that the clock is endogenous. If organizers choose \(S\) to delay divergence, the observed clock moves; if they choose \(S\) to accelerate divergence, loss-averse fans may prefer more consequential games, but mid-table fans may disengage earlier. The paper’s own metrics encode this tension: observed \(\tau\) preserves the real schedule, while expected \(\tau\) standardizes the clock and makes cross-league comparison possible [PAGE 3]. A second-order mind is required because teams also anticipate schedules: a strong team placed away against weak teams early may win less often than the oracle assumes, and a weak team given home advantage against strong teams may appear more balanced. Thus the counter-trap is overfitting the schedule to a rank list that is itself a belief. The safe interpretation is conditional: within the paper’s fixed-outcome, round-robin, one-match-per-round world, schedule control shifts the perceived clock; outside that world, the recursive beliefs of fans, broadcasters, and teams can veto the intended effect.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto test asks whether physical, biomechanical, or weather layers invalidate the paper’s schedule-control claim. The paper’s mathematical world holds match results fixed: “the results of these matches are recorded in the tournament data” [PAGE 12]. It also excludes non-round-robin schedules by assumption [PAGE 9]. That is sufficient for an existence proof inside the model: if \(S\) changes only the order of fixed outcomes, then \(X_{i,t}(S)\), \(V_t(S)\), and \(\tau(S)\) are well-defined. But the physical layer can veto operational validity. Biomechanical load is the clearest case: reordering matches changes rest days, travel distance, recovery time, injury risk, and fatigue. If a \(\tau\)-maximizer places the best teams at home against the worst teams early, it may also create congested travel or short-rest sequences. Then the fixed point values \(x_i(i,j)\) are no longer invariant, because the same nominal match can produce different performance. The null probabilities \(P_h,P_d,P_a\) are empirical frequencies; if rest and travel change them, the envelope \(q_t\) is mis-specified. Weather is a second veto: rain, heat, wind, altitude, and indoor-versus-outdoor conditions can change scoring rates and home advantage. The paper’s null model assumes stationary outcome probabilities estimated from the real tournament, so a weather shock violates exchangeability across rounds. The physical feasibility set \(\mathcal{F}\) in the paper contains only match-count and round constraints, not minimum rest, maximum travel, or weather-risk constraints. Therefore the proof status is bifurcated: the mathematical schedule-control theorem is valid under the paper’s closed-world assumptions; the operational claim is not proved unless physical constraints are added. A formal veto condition is: if for any team-round the reordered schedule violates \(R_{i,t}\geq R_{\min}\) or \(D_{i,t}\geq D_{\max}\), or if the weather-induced change in \(P_h\) exceeds a pre-specified tolerance, then the optimized \(\tau(S)\) is not identifiable from the observed fixed outcomes. The adjudication is that physical and weather layers do not refute the paper’s internal result, but they veto unqualified deployment; the correct engineering response is constrained scheduling with rest, travel, and weather sensitivity analysis.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: permutation-envelope stress test. For each season with at least 15 teams, sample \(K=10{,}000\) legal round-robin permutations of the observed match results, compute the 95 percent interval of \(\tau^{RR}\), and compare the iMWM \(\tau\)-maximizer against a random legal schedule. Verifiable veto: if the iMWM median improvement over random legal schedules is below 5 percent while the oracle claim is above 20 percent, or if the observed \(\tau\) lies inside the permutation interval for more than 95 percent of seasons, then the schedule-control effect is not distinguishable from permutation noise. Prediction: the effect should be largest in imbalanced leagues and weakest in already balanced soccer leagues, whose mean is \(\tau_{\%}=45.9\) percent versus basketball \(32.6\) percent, volleyball \(29.6\) percent, and handball \(27.4\) percent [PAGE 7]. Scenario 2: oracle-leakage veto. Replace the oracle final rankings with only prior-season or pre-matchday rankings and freeze the scheduler before the season. Verifiable veto: if the success rate falls below the yesterday-model benchmark of 69.4 percent or the average increase falls below 22.9 percent for the mirrored double-round-robin setting [PAGE 17], then the practical claim depends on future information and is vetoed as a deployable control. Prediction: the oracle-to-yesterday drop should be at least the observed 26.3 percentage-point success gap and 10.4 percentage-point average-increase gap. Scenario 3: physical-rest and weather-perturbation veto. Audit every iMWM schedule for minimum rest, travel distance, and weather exposure; then re-estimate \(P_h,P_d,P_a\) on congested versus rested matches. Verifiable veto: if more than 5 percent of team-rounds violate the pre-specified rest threshold, or if the home-win probability shifts by more than 2 percentage points under the reordered schedule, then the fixed-outcome assumption fails and the \(\tau\) improvement cannot be attributed to scheduling alone. Prediction: the \(\tau\)-maximizer will show larger rest and travel variance than a random legal schedule, and the measured \(\tau\) gain will shrink after physical constraints are imposed. A fourth verifiable check, nested in the third, is to rerun the synthetic Bradley-Terry appendix with draws excluded and with a 50 percent home boost; the paper already reports that its heuristic raises the maximizer median to 90 percent in the most balanced synthetic case [PAGE 26]. If that synthetic gain disappears when rest constraints are added, the cross-layer veto is confirmed.
</RLVR_COUNTERFACTUAL_VETOES>