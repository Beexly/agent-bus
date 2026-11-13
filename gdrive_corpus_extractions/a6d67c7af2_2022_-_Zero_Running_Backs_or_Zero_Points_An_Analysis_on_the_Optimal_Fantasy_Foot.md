---
source: "2022 - Zero Running Backs or Zero Points An Analysis on the Optimal Fantasy Football Draft Strategy - Heller et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2022"
pages: 21
model: baidu/ernie-5.5-flash-preview:free
words: 7083
---

<NATIVE_REASONING>
We need answer user's request. Need produce final with >=1000 words exact XML sections. Need obey strict invariants: zero betting lines. Zero toy equations: but user requests formal LaTeX equations, assumptions, exact singularity/breakdown regimes. We can provide equations from source? Source has model: rnorm(n, mean, sd), ADP mean SD, snake draft, 12 teams 14 players, simulations 100 simulations, 12 experiments? 10 years, 2,016,000 picks. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need not invent fake ratios. We can formalize stochastic simulation. Need ensure no fake ratios like Force/Fatigue. We can state assumptions and equations in SI/information/probability units. Maybe equations for simulation: ADP_i ~ Normal(mu_i, sigma_i^2), draft value etc. But source doesn't define exact formula for fantasy points total? We can present generic expected FPT maybe. Need be careful not to invent source equations not present? They ask SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX, units, page citations, breakdown. We can cite [PAGE 12] rnorm(n, mean, sd). We can formulate formal equations derived from text. Need >=400 words THINK_TRACE. Other sections likely need enough to total >1000. Need exact XML tags. Could include markdown? Probably okay but XML sections. Need no betting lines. Need maybe discuss crisis habit regression etc. The source is fantasy football draft strategy. Need adapt to GSE+GSI Frontier Reasoning Foundry style. Need maybe produce deep analysis of paper. Need multi-week traps: ADP data, normality assumption, hand-cleaned data, missing years, no waiver/trades, injury assumption from blog not model? Multi-week traps: if extrapolating conclusion beyond draft-time only. Need recursive theory of mind: crisis habit regression vs counter-trap vs clock. Could discuss user/owner panic drafting RBs due to perceived scarcity/injury, regression to draft recommendations, counterfactual counter-trap: wide receiver stacking, but timing? clock maybe season weeks, ADP convergence. Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. Source not about physical weather except injury. We can state veto layers: injury risk claim from [PAGE 7] quote: top RB miss 0.86 more games than top WR over three-year average. But not formal enough? Use as source claim. Weather veto? Need physical/biomechanical/weather veto proof. We can say no weather data in source; weather layer can veto outdoor passing/rushing game environments but not in model; exact singularity when extreme weather depresses all offensive output, invalidating position differential. Biomechanical veto: running back cumulative carries/contact load injury hazard, but source cites injury frequency [PAGE 3] [PAGE 7]. Need not invent ratios. Can formulate hazard? Maybe generic not toy. But if formal equation for injury? Could be λ(t) hazard, expected games missed E[G] integral survival. Source gives average extra games missed 0.86. We can define E[G_RB - G_WR] = 0.86 games/season [PAGE 7]. But careful: source quote says top 30 RB likely to miss 0.86 more games per season than top 30 WR. Units: games/season. That's okay.

RLVR counterfactual vetoes: Need 3 verifiable RLVR veto scenarios + predictions. Could be reinforcement learning verifiable rules? Need create vetoes with predictions. For example: 1) if top RB ADP not inflated relative to WR and year-to-year distribution stable, zero-RB expected FPT <= standard; prediction: zero-RB underperforms in simulation. 2) if ADP normality assumption violated due to hand-cleaned data, predictions unstable; veto any claim of optimality. 3) if actual league includes waiver/trades/injured reserve, draft-only model vetoes. Need verifiable. Maybe with source. Need no betting.

Need maybe mention exact counts: 12 team draft 14 players in snake draft [PAGE 10]. 12 Picks 14 Rounds 100 Simulations 12 Experiments 10 Years = 2,016,000 Picks [PAGE 15]. Check math: 12*14=168 picks per draft; 100 sim = 16,800; 12 experiments = 201,600; 10 years = 2,016,000 yes.

Need final over 1000 words. Need count? Let's aim ~1800-2500 words. Sections exact:
<THINK_TRACE> ... </THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ... </SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ... </RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND> ... </RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION> ... </CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES>

Need no betting lines. Avoid words spread/total? The invariant says never mention spreads, totals, moneylines, or odds. But source uses FPT total. Is "total" allowed? It says spreads, totals, moneylines, or odds. It may mean betting lines; but to be safe avoid "total"? But FPT = fantasy points total in source. Need maybe quote FPT = fantasy points total? That includes total. But strict says never mention totals? It says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. Could interpret any betting totals, but safer avoid word "totals"? But source says FPT = fantasy points total. We can use "fantasy points sum" or "final season points". But citing quote maybe includes total? We can avoid quoting that. Need not mention betting. Also avoid "odds"? We can avoid. "likely" okay? Not betting odds. Avoid "moneyline" etc. Need no spreads. Use "difference" not spread.

Need formal LaTeX equations. Need units. We can write:
Let P_{t,p} be simulated pick for season t, pick p. For player i in position k: ADP_{i,k,t} ~ N(μ_{i,k,t}, σ_{i,k,t}^2) (games? ADP is draft pick number, dimensionless rank unit; but can say pick-index unit). Source says rnorm(n, mean, sd) [PAGE 12], ADP acting as mean and SD generate random draft position [PAGE 10]. We can define draft order from random draws. Fantasy points FPT_{i,k,t} maybe observed or drawn? Source says ADP, SD, and average fantasy points tables combined [PAGE 10]. We can define expected points E[FPT_{i,k,t}] from historical average, variance unknown. We can define team score S_{team,t} = sum_{i∈roster} FPT_{i,t}. Roster composition depends on strategy. Standard picks top available by ADP? Zero-RB skips RB until round 6. Snake draft: pick sequence. Need formal snake sequence maybe. Let round r, pick index p, team index b = ((p-1) mod 2N) if odd else reverse. N=12, R=14. Picks total 168. Simulation count M = 100*12*10=12000 drafts? 2,016,000 picks. Equations.

Need singularity/breakdown regimes: normality assumption with bounded ADP? ADP truncated [1,168]? ADP cannot exceed 168; normal can produce negative or >168. Breakdown when σ large, mean near boundary, negative probabilities, misranking. Also no waiver/trades; if in-season changes large, draft-only model singular. If injury hazard high or schedule/weather shocks, roster points decouple from draft ADP. If year-to-year distribution of RBs changes, strategy effectiveness non-identifiable. Also sample sizes: 10 years, 12 experiments maybe limited. Need exact singularity: when top RB injury delta 0.86 games [PAGE 7] leads expected lost FPT > upside from late RBs? But cannot quantify without RB FPT per game? Could state threshold: let ΔG=0.86 games/season; let average fantasy points per game for replacement RB be \bar f_RB (points/game). Expected lost points = ΔG * \bar f_RB. Zero-RB advantage requires positional upside from WR/TE/QB minus replacement value exceed lost RB points plus variance. Need not invent numeric. Could formulate inequality.

Need cite exact [PAGE N] markers and verbatim quotes. Need include quotes from source. We can quote [PAGE 3]: "Running backs are the most susceptible players to injury… so is it even worth to draft them early?" and "Let others pick off the ‘top’ RBs in the first five rounds". [PAGE 6] hypothesis: "The Zero-RB draft strategy will prove to be more effective than the conventional draft strategy." [PAGE 7] APEX quote: “Our three-year average tells us that a top 30 running back is likely to miss 0.86 more games per season than a top 30 wide receiver.” and “Considering wide receivers are scoring more points than running backs, come at a cheaper price, and are less likely to get injured, I think it’s a very good idea to take wide receivers early. This is the best way to give your fantasy football team a weekly advantage.” [PAGE 10] "According to various “limits,” all 12 team draft 14 players in a snake draft." and "ADP (acting as the mean) and SD are used to generate a random draft position." [PAGE 12] rnorm(n, mean, sd). [PAGE 15] counts. [PAGE 19] conclusion: "From our data, the Zero - RB doesn’t work optimally and it is suggested that the Fantasy Football draft process is based primarily on luck" and bullets. [PAGE 20] limitations: quotes. Need exact verbatim. Need be careful punctuation. Use quotes.

Need word count. Let's draft. Need THINK_TRACE >=400 words. Could be ~600. Others ~200 each. Total >1000. Ensure no betting lines. Avoid "odds", "spread", "total", "moneyline". But "FPT" maybe full form? We can call FPT fantasy points sum. But source defines FPT as fantasy points total. Could avoid defining? Need maybe use FPT without expanding? But if quote includes total? We can avoid quote that includes total. The user included definitions but we can ignore. Need not mention betting. Also "12Experiments" maybe not experiments? okay.

Need maybe mention "PPR data" but not necessary.

Let's plan content.

THINK_TRACE:
- Parse paper: hypothesis Zero-RB beats standard. Method simulation. Data ADP, SD, average points. Snake draft. Simulation count. Outcome: Zero-RB not optimal; luck. Need multi-hop: ADP as mean plus SD random draw approximates draft board; sorting by points; comparing team sums. Gray zones: source pages 11-18 are mostly charts no text, so inference from model process. Injury argument from blog not integrated? Need check: data includes points and ADP; not explicit injury simulation. Zero-RB definition implies skip RBs first five rounds [PAGE 3]. But model limits? Not specified. Standard maybe common subjective drafting? Need say the code-level strategy assignment not fully spelled out in provided text; we reconstruct. Multi-week traps: assuming season-long outcome from draft-only, ignoring waivers/trades [PAGE 20], missing 2012-2013 [PAGE 20], hand cleaning [PAGE 20]. The normality assumption may distort ADP [PAGE 20]. The conclusion is conditional on years and variance. Need >=400 words. We'll write long.

SOURCE_OPERATORS_AND_EQUATIONS:
- State source operators: rnorm(n, mean, sd) [PAGE 12], ADP mean, SD random draft position [PAGE 10], snake draft [PAGE 10], simulation counts [PAGE 15], conclusion [PAGE 19].
- Equations:
1) ADP distribution: A_{i,t} ~ N(μ_{i,t}, σ_{i,t}^2), i player, t season. Units: draft pick index (dimensionless position rank, bounded 1 to N*T = 168). Assumptions: independent normal, truncated to feasible draft positions. Breakdown: σ large, mean near boundaries, non-normal multi-modal due to hand cleaning.
2) Draft realization: For draft d, pick p, choose available player maximizing priority. For strategy s: Standard priority maybe earliest ADP? Zero-RB: P^{Zero-RB}_{p} = ... if round <=5 and position RB then exclude; after round 6 include. Need formula:
Roster_{team,d} = ...
Maybe define selection set:
Available_{d,p} = all players not selected.
For standard: argmax_{i∈Available} μ_i or realized A_i? Source uses ADP and SD generate random draft position; maybe selection based on simulated draft position. Could define order by simulated ADP. But careful not invent. We can state if model uses ADP as draft slot, realized ADP A_i determines availability; strategy constraints impose filters.
Let A_{i,d} ~ N(μ_i, σ_i^2). Sort ascending A. Standard selects in ascending A. Zero-RB: for pick number p≤? first five rounds = picks 1-60? Snake 12 teams 5 rounds = 60 picks. Exclude RB if p≤60; allow otherwise. Quote [PAGE 3] "Starting around the 6th round".
3) Team score: S_{team,t,d} = Σ_{i∈roster} F_{i,t}, F_{i,t} fantasy points sum (PPR). Units: fantasy points. Expected: E[S] = Σ E[F]. Variance due to ADP simulation and player point variation. If independent, Var(S)=Σ Var(F)+ covariance terms.
4) Simulation count: Picks = N_teams*N_rounds*N_sim*N_exp*N_years = 12*14*100*12*10=2,016,000 [PAGE 15].
5) Strategy comparison: Δ = mean(S_ZeroRB) - mean(S_Standard). Conclusion if Δ≤0 not optimal. Source says Zero-RB doesn't work optimally [PAGE 19].
6) Injury adjustment: source claim top RB missing 0.86 more games [PAGE 7]. Let ΔG=0.86 games/season. Expected lost fantasy points for top RB relative to top WR: ΔL = ΔG * \bar f_{RB,game} maybe minus replacement. But not source model? State as external claim, not incorporated unless code does. Breakdown if ΔG>0 and variance high.
Need cite [PAGE 7].
Need state units: ADP pick-number, SD pick-number standard deviation, FPT points, years seasons, sim dimensionless.

RETROCAUSAL_GENEALOGY:
- Historical lineage: zero-running-back strategy from fantasy football community, moneyball concept, injury risk, positional scarcity. Paper lineage: ADP data, simulation, snake draft, Occam's razor. Multi-week traps: using only draft outcome to infer season; ADP from one year may not predict next; hand cleaning; missing years; no waiver/trade. "Retro-causal genealogy" maybe trace how conclusion depends on data vintage, injury reports, rule changes. Need formal? Could mention path dependence: ADP mean derived from historical drafts; if public crowd wrong, model inherits bias. Multi-week traps: early season waiver fills, midseason trades, injury replacement. If extrapolate beyond draft, trap.

RECURSIVE_THEORY_OF_MIND:
- Model owner behavior. Crisis habit regression: owners panic when top RBs gone, draft based on name recognition [PAGE 3], computer recommended, auto draft. Counter-trap: zero-RB intentionally cedes early RB to obtain WR/TE/QB. But if everyone counter-traps, ADP shifts, making WR expensive and RB values late; advantage disappears. Clock: snake draft rounds, season weeks. Time horizons: draft clock, weekly lineup clock. Recursive beliefs: I think others think RBs injury-prone; if enough believe, they avoid RBs; if not, they still draft RBs. Source conclusion luck suggests behavior not dominant. Need discuss no betting.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical/weather veto proof. Need "proof" maybe logical. Physical/biomechanical: RB carries/contact risk. Source quotes injury susceptibility [PAGE 3], top RB miss 0.86 more games [PAGE 7]. If physical hazard high, early RB downside increases. But source model maybe doesn't explicitly simulate injuries? It uses average FPT historical, injury realized in FPT. If injury risk included in FPT, then model captures; if not, veto. Weather: source no weather layer; outdoor game script, wind/rain can suppress passing and rushing; if weather shock dominates, positional draft strategy vetoed because points variance from environment not ADP. Singularity: extreme weather or rule changes causing zero points? Need not mention "zero points"? It's okay? Maybe zero points not betting. Exact singularity when weather-driven production falls below replacement threshold or variance exceeds draft-edge. Also venue dome vs outdoor. Need maybe say no weather data in [PAGE 20] limitations, so any weather veto is outside source; but if actual league uses weather, strategy may be invalidated. Need formal: Veto condition: Cov(F_{i,t}, W_t) large; if Var(W_t) dominates Var(draft strategy), then Δ strategy not identifiable. Define W_t environmental shock. If |E[ΔS | W_t]| < sqrt(Var(ΔS|W_t)) then veto.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions. RLVR maybe reinforcement learning verifiable reasoning. Need scenarios with predictions. Could be:
1. ADP-boundary veto: if mean ADP near pick 168 and σ > 10 picks, normal simulation yields invalid picks; prediction: reconstructed ADP distribution has negative or >168 draws; zero-RB/standard comparison fails. Verifiable by inspecting simulation logs.
2. Strategy-constraint ambiguity veto: if code doesn't enforce first-five-round RB ban [PAGE 3], then Zero-RB not actually simulated; prediction: team rosters with RB selected in rounds 1-5 appear in Zero-RB arms; veto.
3. Temporal extrapolation veto: if model uses pre-season ADP only and no waiver/trade [PAGE 20], then prediction: season outcomes correlate with in-season roster changes; counterfactual standard vs zero-RB difference vanishes after adding waiver/trade. Verifiable by comparing draft-only score to actual final scores with replacement.
Need maybe include predictions: e.g. if top RB FPT concentration high in a year, Zero-RB underperforms; if WR/TE/QB depth high and RB drop-off steep after top 30, Zero-RB improves. Source conclusion says larger discrepancies between top RBs and lesser RBs effect Zero-RB effectiveness [PAGE 19]. Need verifiable: measure Gini? But no fake ratios? Can use variance or interquartile range of RB points. Not toy. Could define dispersion D_RB = standard deviation of FPT among top 30 RBs; if D_RB large, Zero-RB vetoed. Prediction: years with high D_RB have lower Δ Zero-RB. That's okay. Need maybe "verifiable" with data.

Need ensure no forbidden words: "total" maybe avoid. Check final for "total"? User source includes "FPT = fantasy points total" but we don't need quote. Avoid "total" entirely. Use "sum", "season aggregate", "season points". Also avoid "odds" even in "odds"? Not use. Avoid "spread" use "difference", "dispersion". "moneyline" no.

Need include exact XML sections. Maybe within XML can have markdown. Need final only. Need check word count. Let's compose.

Potential issue: Strict invariant ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. We can provide formal equations. But some equations may be considered invented if not source? But allowed to formalize. Need say derived, not source-verbatim. Need cite source for rnorm. Need not use fake ratios. Equations with expected score okay.

Need mention SI/information/probability units. Fantasy points aren't SI, but we can state units: points, draft-pick index, seasons, simulations dimensionless. For information/probability units maybe entropy? Could include Shannon entropy of draft order? But not necessary? They ask SI/information/probability units. We can include probability units (dimensionless probabilities), maybe entropy in bits if define strategy uncertainty. But avoid toy. Could add: H(A) = -Σ p log2 p bits for ADP uncertainty? But maybe unnecessary. Could include to satisfy. Formal equation for entropy of ADP distribution? But not source. We can say information units: log-probability in nats/bits; simulation uses pseudo-random numbers with seed state in bits. But maybe overkill. Need exact singularity/breakdown. Good.

Let's draft in final. Need word count. I'll write robustly.

Need ensure no betting lines. Check words: "line" maybe avoid. "draft line"? no. "spread" no. "total" no. "odds" no.

Let's draft sections.

THINK_TRACE:
Need >=400 words. I'll write ~700.

SOURCE_OPERATORS_AND_EQUATIONS:
Need maybe long. Include equations.

Let's ensure quotes exact:
[PAGE 3] "Running backs are the most susceptible players to injury… so is it even worth to draft them early?" yes. Also "Let others pick off the ‘top’ RBs in the first five rounds" with curly quotes? We can quote exactly. "Starting around the 6th round, draft the leftover RBs".
[PAGE 6] "The Zero-RB draft strategy will prove to be more effective than the conventional draft strategy."
[PAGE 7] quotes exact with curly apostrophe? Use as source. Need maybe preserve.
[PAGE 10] "ADP (acting as the mean) and SD are used to generate a random draft position." and "According to various “limits,” all 12 team draft 14 players in a snake draft."
[PAGE 12] rnorm(n, mean, sd)
[PAGE 15] "12 Picks 14 Rounds 100 Simulations 12 Experiments 10 Years = 2,016,000 Picks" maybe as line. Use quote maybe not exact punctuation? We'll quote: "12 Picks / 14 Rounds / 100 Simulations / 12 Experiments / 10 Years / = 2,016,000 Picks"? Source has line breaks. Better quote as text: [PAGE 15] "12 Picks 14 Rounds 100 Simulations 12 Experiments 10 Years = 2,016,000 Picks". Is that verbatim? It is combined. Could say page states the arithmetic. Maybe avoid exact quote if uncertain. But need citations. We can cite [PAGE 15] for counts without quote? User says when source pages are provided, cite exact markers and verbatim quotes. Need include verbatim for claims. For counts, can quote the lines: [PAGE 15] "12 Picks" "14 Rounds" "100 Simulations" "12 Experiments" "10 Years" "= 2,016,000 Picks". Maybe too fragmented. We can quote: [PAGE 15] "12 Picks 14 Rounds 100 Simulations 12 Experiments 10 Years = 2,016,000 Picks". Should be okay.
[PAGE 19] "From our data, the Zero - RB doesn’t work optimally and it is suggested that the Fantasy Football draft process is based primarily on luck" and "Year to year distribution of the running backs determines which draft strategy will be the most viable" "Larger discrepancies between top RBs and lesser RBs effect the Zero-RB draft strategy effectiveness" "Random year to year variation in player productivity changes outcomes".
[PAGE 20] quotes: "Excluded years 2012 and 2013 due to a lack of data for player ADPs" "Used Occam's razor for draft with assigning normal curves to players" "Elimination of positions in real life leagues like kickers" "Did not have real life data from Sleeper, ESPN, etc to ensure normality in ADP distribution" "Trades and FAAB/Waiver Wire not accounted for" "Data was converted to a .csv and cleaned by hand so room for data errors".

Need use exact [PAGE N] markers. Good.

Need final no analysis. Ensure tags exactly. Could include equations inside. Let's compose. Need check forbidden words. I'll scan mentally.

Potential word "total" might appear in "final season total points" from source? Avoid. In THINK_TRACE maybe "season aggregate". In equations maybe "season aggregate". Good.

Potential "spread" maybe "dispersion" not spread. "difference" okay.

Need maybe mention "FPT" without expansion. If define FPT as fantasy points sum, okay. But source says FPT. Use FPT units fantasy points. Good.

Let's write. Need final length maybe 2600 words. Good.

Double-check equations:
A_{i,t} = simulated ADP. Use normal: A_{i,t} = μ_{i,t} + σ_{i,t} Z_{i,t}, Z~N(0,1). Units: pick number. Truncate to [1, N R] = [1,168]. Source: ADP mean and SD. If not truncated, breakdown.

Selection:
For draft d, pick n, team τ(n). Let X_{i,d} = availability. Standard: select argmin_{available} A_{i,d}. Zero-RB: if round(n) ≤ 5, exclude i with position RB; else same. Need round(n) = ceil(n/12) in first half? Snake: round r = ceil(n/N). Since 12 picks per round. Good.
Roster: R_{τ,d} = union over picks assigned to team τ.
Score: S_{τ,d,t} = Σ_{i∈R} F_{i,t}. F in fantasy points. Expected and variance. If covariance due to team stacking? Include covariance.
Simulation count: M = 12*14*100*12*10 = 2,016,000 picks. Actually picks per draft? N_teams*N_rounds = 168. Then times simulations/experiments/years = 168*12000=2,016,000.
Strategy difference: Δ_d,t = S^0 - S^std. Mean over reps. If Δbar ≤ 0, zero-RB not optimal. Source conclusion.
Injury: ΔG = 0.86 games/season [PAGE 7]. Expected point loss L = ΔG * f̄_RB per game. If early RB advantage U_RB compared to WR replacement? Need not define ratio. Veto if L > U. But U not source. Formal condition.
Breakdown regimes: normality, boundary, strategy constraint, temporal closure, missing positions.

Need mention "Occam's razor" quote [PAGE 20]. Good.

RETROCAUSAL_GENEALOGY: Need maybe not too many equations. Fine.

RECURSIVE_THEORY_OF_MIND: no equations maybe.

CROSS_LAYER_VETO_ADJUDICATION: include proof. Use environmental shock W_t. Veto condition: if Var(W_t) > Var(strategy effect) or covariance. Need not use betting.

RLVR: 3 scenarios. Need predictions. Good.

Let's ensure no "odds" accidentally. "based primarily on luck" okay. "likely" in quote includes "likely" but not odds. It's source quote. Is "likely" considered odds? Probably not. But strict says never mention odds. Quote includes likely but not odds. Okay.

Need avoid "line" in "timeline"? Could be okay? But "line" maybe not. Use "sequence" instead of timeline? "lineage" contains line? It's okay? Invariant likely about betting lines, but to be safe avoid word line. Use "lineage" in section name? It is required <RETROCAUSAL_GENEALOGY>. That's okay. Avoid "deadline". Use "clock". "first five rounds". Good.

Need no "spread". Use "dispersion".

Now final. Ensure word count: Let's approximate. THINK_TRACE 650, source 700, retro 250, ToM 300, veto 300, RLVR 400 = 2600. Good.

Let's write final with exact XML.
</NATIVE_REASONING>

<THINK_TRACE>
The source study asks whether a Zero Running Back draft approach can outperform a more conventional approach in fantasy football. The supplied pages identify the research question, the strategy definitions, the simulation design, and the final inference. The central hypothesis is stated directly: “The Zero-RB draft strategy will prove to be more effective than the conventional draft strategy.” [PAGE 6] The authors motivate the hypothesis through injury susceptibility and positional value: “Running backs are the most susceptible players to injury… so is it even worth to draft them early?” [PAGE 3]. They also cite an external claim that a top running back misses more games than a top wide receiver: “Our three-year average tells us that a top 30 running back is likely to miss 0.86 more games per season than a top 30 wide receiver.” [PAGE 7]

The methodological core is a stochastic draft simulation. The authors combine ADP, standard deviation, and fantasy point information [PAGE 10]. They state that “ADP (acting as the mean) and SD are used to generate a random draft position.” [PAGE 10] The simulated draw operation is written as “rnorm(n, mean, sd)” [PAGE 12]. The draft is a snake draft with 12 teams and 14 rounds: “According to various “limits,” all 12 team draft 14 players in a snake draft.” [PAGE 10]. The scale is large: “12 Picks 14 Rounds 100 Simulations 12 Experiments 10 Years = 2,016,000 Picks” [PAGE 15].

The inference is not that Zero Running Back is universally superior. Instead, the paper concludes that the strategy does not perform optimally under the simulated conditions: “From our data, the Zero - RB doesn’t work optimally and it is suggested that the Fantasy Football draft process is based primarily on luck” [PAGE 19]. The authors then qualify the result by saying that year-to-year running back distribution matters: “Year to year distribution of the running backs determines which draft strategy will be the most viable” [PAGE 19]. They also state that “Larger discrepancies between top RBs and lesser RBs effect the Zero-RB draft strategy effectiveness” [PAGE 19], and that “Random year to year variation in player productivity changes outcomes” [PAGE 19].

A careful gray-zone audit reveals several inferential layers. First, the model treats ADP as a random variable with a mean and standard deviation. That means the draft outcome is not deterministic; it depends on realized draws. Second, the model uses historical fantasy point information as the outcome layer, but the provided pages do not fully specify whether injury risk is explicitly simulated as a separate process or only embedded in observed fantasy point history. Third, the strategy definition depends on timing: the Zero Running Back approach is described as loading up on other positions early and then taking running backs later: “Let others pick off the ‘top’ RBs in the first five rounds” and “Starting around the 6th round, draft the leftover RBs” [PAGE 3]. If the simulation code does not enforce that timing exactly, the strategy label may not match the strategy logic.

The paper also contains explicit limitations that constrain the conclusion: “Excluded years 2012 and 2013 due to a lack of data for player ADPs” [PAGE 20], “Used Occam's razor for draft with assigning normal curves to players” [PAGE 20], and “Trades and FAAB/Waiver Wire not accounted for” [PAGE 20]. These limitations matter because a draft-only model cannot fully represent season-long roster construction. If in-season replacement is important, then the draft-stage comparison is only a partial test. Likewise, the statement “Data was converted to a .csv and cleaned by hand so room for data errors” [PAGE 20] introduces data-quality uncertainty. The final conclusion should therefore be read as a simulation-based result, not as a universal law of fantasy football roster construction.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source provides a simulation operator rather than a closed-form analytic proof. The explicit stochastic operator is:

\[
\texttt{rnorm}(n, \mu, \sigma)
\]

[PAGE 12]

This corresponds to drawing \(n\) values from a normal distribution with mean \(\mu\) and standard deviation \(\sigma\). The authors apply this to ADP: “ADP (acting as the mean) and SD are used to generate a random draft position.” [PAGE 10]

A formal reconstruction of the draft simulation is as follows. Let \(i\) index a player, \(t\) index a season, and \(k\) index a position group. Let \(A_{i,t}\) be the simulated ADP value for player \(i\) in season \(t\). The source’s normal-draw assumption can be written as:

\[
A_{i,t} = \mu_{i,t} + \sigma_{i,t} Z_{i,t}, 
\qquad Z_{i,t} \sim \mathcal{N}(0,1)
\]

Units: \(A_{i,t}\) is measured in draft-pick index units. \(\mu_{i,t}\) is the mean ADP in draft-pick index units. \(\sigma_{i,t}\) is the standard deviation of ADP in the same units. \(Z_{i,t}\) is a dimensionless standard normal random variable.

Because ADP is a ranked draft position, the feasible support is bounded. In a 12-team, 14-round snake draft, the maximum number of picks is:

\[
N_{\text{picks}} = N_{\text{teams}} \times N_{\text{rounds}}
= 12 \times 14 = 168
\]

Thus a truncated support is:

\[
A_{i,t} \in [1, 168]
\]

The source does not explicitly state that truncation is enforced, but the feasibility constraint is implied by the draft structure: “all 12 team draft 14 players in a snake draft.” [PAGE 10]

Let \(F_{i,t}\) be the fantasy point realization for player \(i\) in season \(t\). The source uses PPR data and fantasy point information [PAGE 2], [PAGE 10]. The team score for team \(q\), draft realization \(d\), and season \(t\) can be written as:

\[
S_{q,d,t} = \sum_{i \in R_{q,d}} F_{i,t}
\]

where \(R_{q,d}\) is the roster selected by team \(q\) in draft realization \(d\). Units: \(S_{q,d,t}\) is measured in fantasy points. \(F_{i,t}\) is also measured in fantasy points.

For a standard draft priority, one minimal formalization is:

\[
i_{p,d}^{\text{Standard}} =
\arg\min_{i \in \mathcal{A}_{p,d}} A_{i,d}
\]

where \(p\) is the pick number, \(\mathcal{A}_{p,d}\) is the set of available players at pick \(p\) in draft \(d\), and the minimum simulated ADP corresponds to earlier selection. This is a formal reconstruction of the idea that earlier ADP values indicate earlier draft priority.

For the Zero Running Back strategy, the source says to let others take top running backs in the first five rounds and then draft running backs later: “Let others pick off the ‘top’ RBs in the first five rounds” [PAGE 3] and “Starting around the 6th round, draft the leftover RBs” [PAGE 3]. Let \(r(p)\) be the round number associated with pick \(p\):

\[
r(p) = \left\lceil \frac{p}{12} \right\rceil
\]

Then a formal Zero Running Back constraint is:

\[
i_{p,d}^{\text{Zero-RB}} =
\begin{cases}
\arg\min_{i \in \mathcal{A}_{p,d} \setminus \text{RB}} A_{i,d}, & r(p) \le 5 \\
\arg\min_{i \in \mathcal{A}_{p,d}} A_{i,d}, & r(p) \ge 6
\end{cases}
\]

This equation captures the timing logic described in the source. If the first five rounds are picks 1 through 60, then the Zero Running Back constraint bans running back selection during picks 1 through 60 and permits running back selection from pick 61 onward.

The expected season score for a team under strategy \(s\) is:

\[
\mathbb{E}[S_{q,d,t}^{(s)}] =
\sum_{i \in R_{q,d}^{(s)}} \mathbb{E}[F_{i,t}]
\]

Units: fantasy points. If player outcomes are treated as independent, the variance is:

\[
\operatorname{Var}\left(S_{q,d,t}^{(s)}\right)
=
\sum_{i \in R_{q,d}^{(s)}} \operatorname{Var}(F_{i,t})
+
2 \sum_{i<j} \operatorname{Cov}(F_{i,t}, F_{j,t})
\]

The covariance term matters because rosters are not independent: a team that stacks one position may inherit correlated injury or scoring shocks.

The strategy comparison can be expressed as:

\[
\Delta_{d,t} =
S_{q,d,t}^{\text{Zero-RB}} - S_{q,d,t}^{\text{Standard}}
\]

The population-level simulated difference is:

\[
\overline{\Delta} =
\frac{1}{M}
\sum_{d=1}^{M} \Delta_{d,t}
\]

The source’s conclusion follows if \(\overline{\Delta} \le 0\) or if the distribution of \(\Delta\) is not stably favorable to Zero Running Back. The paper states: “From our data, the Zero - RB doesn’t work optimally” [PAGE 19].

The source also includes an injury-related claim. It quotes: “Our three-year average tells us that a top 30 running back is likely to miss 0.86 more games per season than a top 30 wide receiver.” [PAGE 7] Let:

\[
\Delta G = 0.86 \ \text{games per season}
\]

Then the expected fantasy point loss associated with the extra missed games, conditional on a per-game fantasy production value \(\bar{f}_{\text{RB}}\), is:

\[
\Delta L = \Delta G \times \bar{f}_{\text{RB}}
\]

Units: fantasy points per season if \(\bar{f}_{\text{RB}}\) is fantasy points per game. This equation is not explicitly presented in the source as a model equation, but it is the formal translation of the quoted injury claim. The breakdown regime occurs if the upside from taking wide receivers, tight ends, or quarterbacks early is smaller than \(\Delta L\) plus the replacement cost of waiting to select running backs.

Exact singularity and breakdown regimes are as follows:

1. Normal-boundary breakdown. If \(\mu_{i,t}\) is near 1 or 168 and \(\sigma_{i,t}\) is large, the untruncated normal distribution produces invalid ADP values below 1 or above 168. This violates the finite draft support.

2. Strategy enforcement breakdown. If the simulation does not enforce the first-five-round running back ban, the “Zero-RB” label does not correspond to the strategy described in [PAGE 3].

3. Temporal closure breakdown. If trades and waiver wire are omitted, as stated in “Trades and FAAB/Waiver Wire not accounted for” [PAGE 20], the model cannot represent roster recovery after draft day.

4. Data cleaning breakdown. If ADP values are manually cleaned, as stated in “Data was converted to a .csv and cleaned by hand so room for data errors” [PAGE 20], the normality assumption may be unstable.

5. Year-composition breakdown. If the year-to-year distribution of running back quality is highly skewed, the strategy comparison becomes year-dependent. This matches the source statement: “Year to year distribution of the running backs determines which draft strategy will be the most viable” [PAGE 19].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The retro-causal genealogy of this study begins with the historical fantasy football habit of treating running backs as premium assets. The source explains that many owners struggle because they “Draft what is computer recommended,” “Auto draft,” “Draft based on subjective bias like name recognition,” and “Draft teams with players that are susceptible to injuries during the season” [PAGE 3]. The Zero Running Back strategy is a counter-tradition: it rejects early running back selection and instead builds around other positions.

The scientific lineage can be traced through three layers. First, there is the ADP layer: average draft position functions as a crowd estimate of player value. Second, there is the simulation layer: the authors use normal draws to model uncertainty around ADP. Third, there is the outcome layer: historical fantasy point data are used to evaluate roster outcomes. The paper’s use of “Occam's razor for draft with assigning normal curves to players” [PAGE 20] shows that the authors knowingly chose a simple probabilistic approximation rather than a more detailed draft-market model.

A multi-week trap arises because the paper’s evidence is strongest at the draft-stage level but weaker at the season-long roster-management level. The source says “Trades and FAAB/Waiver Wire not accounted for” [PAGE 20]. If a fantasy manager can repair a roster after the draft, then the long-run value of draft-day running back scarcity may differ from the simulated result. Another multi-week trap is injury timing. The source cites injury susceptibility and missed games [PAGE 3], [PAGE 7], but the simulation outcome depends on whether injuries are already embedded in historical fantasy point data or whether they would need to be modeled separately.

A further genealogy trap is the exclusion of years: “Excluded years 2012 and 2013 due to a lack of data for player ADPs” [PAGE 20]. If those years contained different running back value distributions, the conclusion may be sensitive to the remaining sample. The final statement that the process is “based primarily on luck” [PAGE 19] should therefore be read as a conditional genealogical inference: under the chosen data, the chosen normal ADP approximation, and the chosen snake-draft simulation, the Zero Running Back strategy did not produce a stable advantage.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind layer asks what different fantasy managers believe other managers will do. The source identifies common failure modes: owners draft by computer recommendation, auto-draft, name recognition, or injury fear [PAGE 3]. In a crisis habit regression, owners who fear running back injury may overcorrect by avoiding running backs entirely, even when the price or value context has changed. The Zero Running Back strategy is a deliberate counter-trap: it accepts weaker draft-day running back positioning in exchange for presumed value at other positions.

However, recursive beliefs can destabilize the strategy. If enough managers believe wide receivers are superior early assets, wide receiver ADP may rise, reducing the surplus available to Zero Running Back managers. If enough managers believe running backs are injury-prone, running back ADP may fall, increasing the value of waiting. The source’s simulation does not explicitly model adaptive ADP feedback; it treats ADP as an input mean with a standard deviation [PAGE 10]. Therefore, the strategy’s real-world performance may depend on whether the market has already priced in the injury concern.

The clock layer has two clocks. The first is the draft clock: snake-draft round order determines when running backs become available. The source’s Zero Running Back definition depends on the first five rounds and the sixth round [PAGE 3]. The second clock is the season clock: injuries, replacement players, and roster changes occur after the draft. The source says trades and waiver wire are not accounted for [PAGE 20], so the season clock is truncated in the model.

A counter-trap manager might reason as follows: if the market overvalues early wide receivers because of Zero Running Back popularity, then waiting on wide receivers may become less profitable. Conversely, if the market undervalues running backs because of injury fear, then waiting may become more profitable. The source’s conclusion that outcomes depend on “Random year to year variation in player productivity” [PAGE 19] supports the view that the correct strategy is not fixed across all years. It is conditional on the realized distribution of player performance and the behavior of the drafting crowd.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto adjudication separates the model into draft-market layer, biomechanical injury layer, environmental weather layer, and season-management layer.

At the draft-market layer, the source provides the strongest evidence. ADP is used as the mean, SD is used to generate random draft position, and the simulation is repeated across many picks [PAGE 10], [PAGE 12], [PAGE 15]. The source concludes that Zero Running Back does not work optimally in the simulated environment [PAGE 19]. This layer is internally supported because the paper explicitly reports the simulation scale and the final inference.

At the biomechanical injury layer, the source provides external motivation but not necessarily a full formal injury model. It states: “Running backs are the most susceptible players to injury… so is it even worth to draft them early?” [PAGE 3]. It also quotes: “Our three-year average tells us that a top 30 running back is likely to miss 0.86 more games per season than a top 30 wide receiver.” [PAGE 7] The biomechanical veto condition is therefore conditional. If running back injury risk raises the expected lost fantasy points above the advantage gained by waiting, the Zero Running Back strategy should improve. If injury risk is already reflected in fantasy point history and ADP, the marginal veto may be small.

A formal veto condition can be written as:

\[
\Delta L_{\text{injury}} > U_{\text{positional}}
\]

where \(\Delta L_{\text{injury}}\) is expected lost fantasy points from extra running back missed games and \(U_{\text{positional}}\) is the surplus value obtained by drafting other positions earlier. Using the source’s quoted injury difference:

\[
\Delta L_{\text{injury}} =
0.86 \times \bar{f}_{\text{RB}}
\]

Units: fantasy points per season. If \(\Delta L_{\text{injury}}\) exceeds the positional surplus, the injury layer vetoes the standard early-running-back approach. If it does not, the injury layer does not veto the standard approach.

At the weather layer, the source provides no weather data. The limitations do not mention weather, venue, wind, precipitation, or domes. Therefore, any weather veto is external to the source. A weather veto condition can be written with an environmental shock \(W_t\):

\[
S_{q,d,t}^{\text{weather}} =
S_{q,d,t} + \epsilon_{q,d,t}(W_t)
\]

If \(\operatorname{Var}(\epsilon_{q,d,t}(W_t))\) is large relative to the difference between strategies, then weather vetoes the draft-strategy comparison because environmental variance dominates roster-construction variance. In exact singularity terms, if weather-driven scoring collapses toward replacement-level production, the draft-stage advantage of either strategy becomes indeterminate.

At the season-management layer, the source explicitly says “Trades and FAAB/Waiver Wire not accounted for” [PAGE 20]. This creates a veto against overextending the draft-stage conclusion to full-season outcomes. If a manager can replace injured players through waiver wire or trades, then the season-long effect of early running back injury risk may be smaller than the draft-stage model suggests.

The cross-layer proof is therefore conditional: the draft-market layer supports the conclusion that Zero Running Back did not perform optimally in the simulation. The injury layer may support the motivation for the strategy but does not prove season-long superiority. The weather layer is absent and can veto the strategy comparison if environmental variance dominates. The season-management layer vetoes any claim that the draft simulation fully determines final season outcomes.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following are three verifiable reinforcement-learning-style veto scenarios. Each veto is stated as a testable condition with a prediction.

Veto 1: ADP normality veto. The source says the authors “Used Occam's razor for draft with assigning normal curves to players” [PAGE 20] and that they did not have external data “to ensure normality in ADP distribution” [PAGE 20]. The veto condition is: if the ADP distribution is materially non-normal, especially near the first or last pick boundaries, the normal simulation may misrepresent draft order. Prediction: if simulated ADP values frequently fall below 1 or above 168, the draft model is invalid. Verifiable test: inspect simulation outputs for invalid ADP draws. If invalid draws are common, veto the strategy comparison.

Veto 2: Zero-RB enforcement veto. The source defines Zero Running Back as allowing others to take top running backs in the first five rounds and then drafting running backs later [PAGE 3]. The veto condition is: if the simulated Zero Running Back rosters contain running backs selected in the first five rounds, the strategy was not correctly enforced. Prediction: a correctly enforced Zero Running Back simulation should show no running back selections in rounds 1 through 5 for Zero Running Back teams, or only a narrowly defined exception explicitly documented by the authors. Verifiable test: audit rosters by round. If running backs appear early in Zero Running Back rosters, veto the result.

Veto 3: Season-management omission veto. The source states that “Trades and FAAB/Waiver Wire not accounted for” [PAGE 20]. The veto condition is: if the research question is about full-season fantasy outcomes, but the model only represents draft-day rosters, then the model omits a major causal channel. Prediction: if actual league data with waiver wire and trades are added, the difference between Zero Running Back and standard draft strategies should shrink or change sign relative to the draft-only simulation. Verifiable test: compare draft-only simulated scores to post-draft managed roster outcomes. If post-draft management materially changes the ranking of strategies, veto the draft-only conclusion as a full-season conclusion.

A fourth optional veto, consistent with the source’s own caveat, is the running-back dispersion veto. The source says “Larger discrepancies between top RBs and lesser RBs effect the Zero-RB draft strategy effectiveness” [PAGE 19]. A verifiable condition is: define running back dispersion as the standard deviation or interquartile range of fantasy points among top running backs in a given year. Prediction: years with high running back dispersion should show weaker Zero Running Back performance because waiting creates a larger drop-off after the top tier. Verifiable test: correlate year-level running back dispersion with the simulated difference between Zero Running Back and standard strategy. If high dispersion predicts poorer Zero Running Back performance, the veto is supported.

These vetoes are consistent with the source’s final position. The paper does not claim that Zero Running Back is always invalid. It says: “Year to year distribution of the running backs determines which draft strategy will be the most viable” [PAGE 19]. Therefore, the most defensible interpretation is that Zero Running Back is not a universal solution. It is a conditional strategy whose value depends on draft-market uncertainty, injury realizations, running back dispersion, and the degree to which the simulation captures the full season environment.
</RLVR_COUNTERFACTUAL_VETOES>