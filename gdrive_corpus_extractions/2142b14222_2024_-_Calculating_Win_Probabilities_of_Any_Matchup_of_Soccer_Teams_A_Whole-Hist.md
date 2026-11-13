---
source: "2024 - Calculating Win Probabilities of Any Matchup of Soccer Teams A Whole-History Rating Approach for the Wharton High School Data Science Compet - Seung et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2024"
pages: 9
model: deepseek/deepseek-v4.1-flash-1017
words: 8240
---

<NATIVE_REASONING>
We need answer to user. Need produce deep multi-hop derivation, gray-zone audit, XML sections exactly. Need zero betting lines. Need source citations exact [PAGE N] and verbatim quotes. Need >=1000 words across exact sections. Need formal LaTeX, units, assumptions, singularity/breakdown regimes. Need likely analyze paper: WHR soccer win probabilities. Need be careful no odds, spreads, totals, moneylines. We can mention probabilities only. Need not provide betting lines. Need source operators/equations: from pages. But source text has equations missing? Page 4 says probability equation given by blank. Page 5 equation missing. Need reconstruct? Must not invent fake ratios. We can state equation is omitted/unrendered in provided source and cite page. We can formalize Bradley-Terry probability with r_i, r_j, h, c, b as described. Need avoid inventing exact expression? We can derive from description: P(i wins) = 1/(1 + b^{c(r_j - r_i - h?)}?) Need infer. Let's parse source: "where ri and rj are ratings... h home field advantage constant, which gives home team boosted amount rating points, c optimal rating-to-odds conversion—that is, fitting how much, e.g., a 50-point rating difference translates to win probability, and b is base for Bradley-Terry model." Equation omitted. We can define general form: P(i beats j) = [b^{c(r_i + h I_i - r_j)}] / [b^{c(r_i + h I_i - r_j)} + 1] or logistic. But source text uses b as base. Need not invent? We can mark reconstruction "as the source describes, a Bradley-Terry form..." but exact equation not visible. We can write formal LaTeX with explicit assumption and note exact rendering absent. Need cite [PAGE 4] quote. Page 4 quote: "The probability of team i winning against team j is given by:" then blank. Also parameters quote. Page 5 quote: "Rating points were then adjusted using the equation below." blank. Need mention absent. But we can reconstruct adjustment equation based on described components. Need careful.

Need include RETROCAUSAL_GENEALOGY: historical/scientific lineage: Elo, Bradley-Terry, Coulom WHR, Bayesian inference, xG. Multi-week traps: chronological single-pass, order dependence, home-field constant, missing timeline, xG limitations, neutral site, optimization overfit, data leakage, random split. Need mention traps spanning weeks? "multi-week traps" maybe analysis traps: treating constant strength as dynamic, using sequence, using home-field in knockout, using xG as actual score, using RMSE as probability calibration, etc. We can describe "multi-week modeling traps" not betting.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Need interpret: crisis habit regression = under pressure revert to Elo single-pass, win-loss, home-field universal. Counter-trap = use neutral-site h=0, WHR multi-pass, Bayesian posterior. Clock = temporal order/timeline absence and neutral-site stage. Need explain. Use theory of mind? Maybe "recursive theory of mind" about modeler/team/opponent. Need satisfy.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need show cross-layer constraints veto certain claims: xG not biomechanical; weather/randomness; travel timezone; home advantage. Need proof via source: penalty kicks 126:53, negative correlation distance traveled [PAGE 3], time zone >3 hours increased goal differential [PAGE 8]. Need "veto proof" for physical/biomechanical/weather: no biomechanical data; cannot infer injury; fictional league constant strength; weather only random mention; no weather variables; home-field as rating points not physical. Need state vetoes.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need design counterfactual tests with predictions that would veto model claims if observed. Need include verifiable. Examples:
1 Shuffle game order: WHR predictions invariant; single-pass Elo not. If WHR RMSE changes materially under permutation, veto order-independence claim.
2 Set h=0 in knockout neutral site; if predictions improve with h>0, veto neutral-site assumption/h handling.
3 Replace xG with score outcome or xG difference with sign; if RMSE same/lower, veto xG value.
4 Train/test random split vs chronological? But no timeline. Need 3. Use RLVR? Maybe "Reinforcement Learning with Verifiable Rewards" counterfactual vetoes. Need phrase "RLVR" perhaps not standard? We can say verifiable reward criteria. Need predictions numeric? Need maybe "predicted RMSE threshold". Need avoid betting. We can specify predicted outcomes: e.g., under 1,000 random permutations WHR RMSE varies < ±0.01, Elo varies >0.1; if not, veto. Under h=0 knockout RMSE lower/equal; if h=32.3 improves by >0.02, veto. Under xG ablation, RMSE increases by at least some threshold; if not, veto. Need be careful not invent exact numbers from paper. Can set explicit test thresholds as experimental design, not source claims. Need say thresholds are pre-registered veto criteria, not paper results. That's okay.

Need include THINK_TRACE >=400 words. Overall >=1000 words. Need maybe 2500-3500 words. Desired oververbose 5. Need no betting lines. Need mention no spreads/totals/moneylines/odds. Avoid "odds" maybe source uses "rating-to-odds conversion" quote; but invariant says never mention odds? It says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. But source has "rating-to-odds conversion". Need cite verbatim? We can quote "rating-to-odds conversion" but that mentions odds. Hmm strict invariant says never mention odds. But source quote includes "rating-to-odds conversion". We need cite exact quotes. Conflict. We can avoid quoting phrase? But need exact page citations and verbatim quotes. We can quote other phrases without "odds". But parameter c described as "rating-to-odds conversion" exact. Could avoid quoting that phrase, but mention c as "rating-to-probability conversion" maybe not exact. But source says "c is the optimal rating-to-odds conversion". To comply with zero odds, don't mention. Maybe use "rating-to-probability conversion constant" as paraphrase. But need exact quote? We can quote "home field advantage constant" etc. Need not quote all. We can say source labels c as a conversion constant [PAGE 4] without exact phrase. Avoid "odds" entirely. Ensure no "moneyline" etc. Good.

Need mention "win probabilities" not betting. We can mention "probability" and "RMSE". Fine.

Need formal LaTeX. Let's structure.

Need likely include equations:
Bradley-Terry:
Let R_i, R_j ∈ ℝ rating points; H ∈ ℝ rating-point home boost; I_i=1 if i home else 0; γ = ln b * c? Better define λ = c ln b >0 per rating point. Then
P_{ij} = σ(λ (R_i - R_j + H(I_i - I_j? or H I_i?))). Need home field for home team only. If i home, P = σ(λ(R_i + H - R_j)). If neutral H=0. If j home, P = σ(λ(R_i - R_j - H)). General: P_{ij}=σ(λ(R_i - R_j + H(I_i - I_j))) with I_i=1 if home, I_j=1 if home? Since one home, I_i-I_j ∈ {+1,-1,0}. Good. Source says h gives home team boosted amount of rating points. This formalization is standard BT. Need note source's exact printed equation absent; this is the minimal BT form consistent with described parameters. Units: R, H in rating points (dimensionless arbitrary). λ in inverse rating points. c? Source c rating-to-probability conversion. b base. We can set λ = c ln b. Then b,c dimensionless? c inverse rating points? Actually if b base dimensionless, c maybe 1/rating? Need not overcomplicate. State c has units rating-point^{-1} if b dimensionless and λ = c ln b. H in rating points. P dimensionless probability [0,1].

Adjustment equation:
ΔR_i = k (e_i - s_i) * d (xG_i - xG_j)? Source says "adjusts rating (ri) based on difference between expected probability (si) and actual outcome (ei), further weighted by expected goals difference. d scaling factor for expected goals difference; k overall adjustment factor." Need formalize:
R_i ← R_i + k [e_i - s_i] [1 + d (xG_i - xG_j)]? Or R_i ← R_i + k (e_i - s_i) d (xG_i - xG_j)? The source says d scaling factor for xG difference, k overall adjustment factor. It might be Δr_i = k(e_i - s_i) * d(xG1-xG2). But if xG diff zero, no update? But draws? Hmm. We need not specify exact if source equation missing. Could write general:
ΔR_i = k g(e_i, s_i) \cdot q_d(ΔxG)
where source says g is (e_i - s_i) and q_d is xG-difference weighted. But exact composition absent. Need cite missing. Maybe write "the source does not render the equation; the described dependencies imply a generic update..." Then define a family:
R_i^{(t+1)} = R_i^{(t)} + k (e_i - s_i) [1 + d (xG_i - xG_j)] 
or with sign. Need be transparent: "I use [1 + dΔxG] to avoid zeroing updates when xG difference is zero; the paper's printed equation is absent, so this is an audit envelope, not a verbatim reconstruction." But user asked formal equations with source pages. We can include "if we take the literal multiplicative reading ΔR_i = k(e_i-s_i)d(xG_i-xG_j), then a zero xG difference yields zero update except no; singularity: d=0 or xG equal kills update. The source's wording 'further weighted by' supports multiplicative; but exact is omitted." Need avoid fake. Could present two forms? We can state: "Let U_i denote source update; its exact algebraic form is not visible. The described variables force a function U_i = U(k,d,e_i-s_i,xG_i-xG_j; ...). A natural minimal family is..." That's formal and honest. Need include breakdown regimes: d=0 or xG equal under pure multiplicative -> no rating update; extreme xG diff -> unbounded; k large -> oscillation; b=1 or c=0 -> P=0.5; H huge -> saturation. b>0, b≠1 for nondegenerate. λ>0. P near 0/1 saturates -> logit. RMSE units? RMSE of outcome? They say compared predictions to actual outcomes decided by xG. RMSE .346. If predictions probabilities vs outcomes? RMSE dimensionless in probability units. If xG difference? Need note ambiguous. Page 6 quote "RMSE by comparing our predictions to the actual outcomes of those games decided by expected goals" and RMSE .346. If actual outcomes binary/draw? RMSE probability units. We can state dimensionless probability-scale if target in {0,0.5,1}; if target is xG, units goals. Source ambiguous. Good gray-zone.

Need Bayesian equation:
P(R_i | G_{1:t}) ∝ P(G_{1:t}|R_i) P(R_i), with Bradley-Terry likelihood. Source equation P(Rating | Game Result)=P(Game Result | Rating)×P(Rating) [PAGE 5]. Need note missing normalization; proper Bayes uses proportional normalization. This is a formal correction. Need cite. Newton's method for MAP. Multi-pass propagation. Need mention global network recalculation.

Need derive order independence: If likelihood is product over games and no time-varying strength, joint posterior invariant under permutation. But WHR iterative algorithm is order-dependent if not converged; multi-pass approximates fixed point. Need gray-zone: source claims "order-independent" [PAGE 2, PAGE 3, PAGE 8] but algorithm initializes 1500 and iterates after every game; finite passes can depend on order. Need audit. Good.

Need cite exact [PAGE N] markers with verbatim quotes. Need include at least several. Let's list quotes:
PAGE 1: "Traditional win-loss metrics have many limitations, like failing to account for the strength of schedule, margin of victory, and home-field advantage." And "Using a dataset of 476 NSL games, we implemented a multi-pass system for iterative rating adjustments and employed Bayesian inference to develop probability distributions for team ratings."
PAGE 2: "The model was optimized using Nelder-Mead optimization, achieving a root mean square error (RMSE) of 0.346 when tested against a held-out dataset." "significant home-field advantage constant of 32.3 rating points". "each team’s strength of performance remained constant throughout the season" (PAGE 2). "All Knockout Round games are played at a neutral site (no home-field advantage)".
PAGE 3: "Penalty kicks were awarded to home teams at a disproportionate ratio of 126:53." "We found a strong negative correlation with distance traveled to match and match results." "single-pass" quote: "classic Elo system operates on a 'single-pass' basis, adjusting ratings after each match only once." "swings of up to 430 rating points per team".
PAGE 4: "We employed the Bradley-Terry model to calculate expected win probabilities based on current team ratings." "The probability of team i winning against team j is given by:" (equation omitted). "h is the home field advantage constant, which gives the home team a boosted amount of rating points, c is the optimal rating-to-odds conversion" - avoid odds. Maybe quote partial: "h is the home field advantage constant, which gives the home team a boosted amount of rating points" and "b is the base for our Bradley-Terry model" [PAGE 4]. Avoid c exact. "The data was randomly split into a training set (80%, 380 games) and a test set (20%, 96 games) using Python." Good.
PAGE 5: "Rating points were then adjusted using the equation below." (equation omitted). "d - A scaling factor for the expected goals difference." "k - An overall adjustment factor." "The model implements a multi-pass system that iteratively adjusts ratings for all teams after each match." "Initialize all teams with a base rating of 1500 points." "P(Rating | Game Result) = P(Game Result | Rating) × P(Rating)" [PAGE 5]. "Newton’s method" quote.
PAGE 6: "we calculated the RMSE by comparing our predictions to the actual outcomes of those games decided by expected goals." "Nelder-Mead optimization" variables. "RMSE of .346" maybe.
PAGE 7: "home-field advantage constant of 32.317 means that an additional 32.317 rating points are given to the home team before any win probabilities are calculated." "If two teams were 1500-rated, this would translate to a 56.5% win probability". "set to 0 for the knockout games where they were played at a neutral site."
PAGE 8: "independence from game order" "expected goals" "larger time zone differences for away teams, especially above three hours, significantly increased goal differential in favor of the home team." "dynamic factor in calculating home-field advantage." "Fail to account for the ability of elite playmakers..." Good.

Need no betting lines. Mention "win probability" okay.

Need "cross-layer veto adjudication" with physical/biomechanical/weather. Use source:
- Physical: travel timezone effect, distance traveled negative correlation; but no physical/biomechanical variables, no player injury; constant strength. So veto any claim WHR measures biomechanics.
- Weather: paper mentions "unusual weather conditions" as random factors [PAGE 2], but no weather covariates in model. So weather-mediated claims are vetoed; only residual RMSE includes unexplained variance.
- Biomechanical: xG is shot-location/angle/historical averages [PAGE 3], not biomechanics. Elite player ability missing [PAGE 8]. So biomechanical veto.
- Home-field: penalty ratio 126:53 and travel; but h constant across all games and contexts [PAGE 8]; dynamic H needed. Veto universal H in neutral and all contexts.
Need "proof" maybe logical: Model variables don't include physical state; identifiability impossible. Need state "cross-layer veto" conditions.

Need "Recursive theory of mind" perhaps:
- Crisis habit regression: under uncertainty, modeler reverts to simple single-pass Elo, raw win-loss, universal home advantage. The paper explicitly shows classic Elo swings up to 430 points [PAGE 3].
- Counter-trap: precommit to whole-history joint posterior, neutral h=0 in knockout, xG as performance signal with xG ablation, and travel/timezone interaction if adding dynamic H.
- Clock: the dataset lacks explicit timeline [PAGE 3] and team strength constant [PAGE 2]; "clock" is not chronological time but iterative convergence clock. Need ensure no premature convergence. In neutral knockout, set H=0 [PAGE 7]. Use convergence criterion.
- Recursive ToM: opponent model, modeler model, evaluator model. Team i's expected win probability is belief about opponent rating; Bayesian posterior is belief about own rating given all games; evaluator belief about model generalization. Need avoid double-counting. Good.

Need RLVR counterfactual vetoes. Need 3 scenarios. Let's design carefully:
1. Permutation invariance RLVR: For each of M random permutations of the 476 games, train WHR to convergence with same optimized parameters, evaluate held-out likelihood/RMSE. Prediction: if order-independent claim true, RMSE variance ≤ ε (e.g., ≤0.005) and mean within 0.01 of canonical. Veto if any materially different? Since finite convergence, maybe. Need exact threshold. Also compare single-pass Elo: expected RMSE spread >0.05 and rating swings up to 430. Veto WHR order-independence if spread exceeds 0.02. This is verifiable.
2. Neutral-site h veto: Evaluate knockout/neutral subset with H=0 vs H=32.317. Prediction: H=0 equal or better (lower RMSE/log loss) for neutral-site games; if H>0 improves by >0.01, veto neutral-site assumption. But source says all knockout neutral, no data? The dataset includes group and maybe knockout? They trained on 476 NSL games; maybe includes group? Hmm. Use held-out neutral-site games if present; otherwise synthetic? Need verifiable: "held-out neutral-site games" if dataset contains. If none, veto cannot be tested. Need mention limitation. Could design cross-validation with H learned separately for home/neutral. Prediction: estimated H_neutral ≈0 within CI; if H_neutral significantly >0, veto. Good.
3. xG ablation veto: Replace xG difference weight d with d=0 (outcome-only WHR) or replace xG with actual goals. Prediction: xG model has lower held-out RMSE/log loss than outcome-only by at least δ (e.g., 0.01). If no improvement or worse, veto claim xG adds predictive value. Need note source says RMSE .346; no ablation reported. Veto if ΔRMSE <0.005. This is verifiable.
Maybe fourth? User asks 3. Need include predictions. Use "RLVR reward = 1 if prediction holds else 0". Good.

Need "multi-week traps" in RETROCAUSAL_GENEALOGY. We can say "lineage: Bradley-Terry 1952? source Firth 2005; Coulom 2008; Elo; xG Stats Perform 2012." Source references. Need cite [PAGE 9] references. Could mention Coulom 2008 WHR. "Retrocausal genealogy" means trace ideas backward and traps that emerge over weeks. Need include "Coulom's WHR (2008)" from reference [PAGE 9]. "Firth (2005) Bradley-Terry Models in R" [PAGE 9]. "Stats Perform (2012)" xG [PAGE 9]. "Elo" not reference but paper. Need maybe mention "Bradley-Terry model" [PAGE 4]. "Bayesian inference" [PAGE 5]. "Nelder-Mead" [PAGE 6]. "Newton's method" [PAGE 5]. Good.

Need exact XML sections. Must include all sections exactly. Could add no additional sections? The user says "across these exact XML sections". We should use exactly those tags. No markdown? We can include text inside tags. Need ensure each section has content. We can use LaTeX. Need maybe include all text without markdown headings outside? We can start with <THINK_TRACE> etc. We need include "DRIVE SOURCE" maybe cite. Need not mention betting. Good.

Need word count >=1000. We'll produce ~3500 words. Need check no forbidden terms: "spreads", "totals", "moneylines", "odds". Avoid "odds" completely. But source uses "rating-to-odds conversion"; don't use. Avoid "betting" maybe okay? Better avoid. Avoid "line" as betting? Use "boundary" etc. "ZERO BETTING LINES" no need mention. Avoid "moneyline". Good.

Need be careful with "over/under"? don't mention.

Need equations in LaTeX. Need cite exact [PAGE N] markers. Need include verbatim quotes. Need quote with quotation marks. We can quote exact phrases. Ensure quotes are verbatim from source. Need not overdo.

Potential issue: The source text says "The probability of team i winning against team j is given by:" then blank. In our formalization, we should not claim exact equation from source. Use "Because the displayed equation is not present in the provided text..." This is important. But user asked source operators and equations. We can mark "reconstructed envelope." Need maybe "This is not a verbatim source equation." Good.

Need "singularity/breakdown regimes" exact:
- λ=0 or c=0 or b=1: P=1/2, no rating discrimination.
- λ→∞: P→1 for positive rating diff, →0 negative; step function, infinite confidence, no gradient, Bayesian posterior degenerates.
- H→∞: home team probability →1 regardless of ratings; home advantage dominates; identifiability of H and ratings confounded.
- k→∞ or d→∞: rating updates unbounded/oscillatory; multi-pass may diverge.
- d=0 or ΔxG=0 under multiplicative update: no xG weighting; if entire update proportional to ΔxG, zero update.
- b≤0 invalid for base; b=1 degenerate. Need b>0, b≠1.
- RMSE lower bound: randomness; .346 not zero. If RMSE units probability, max? no.
- Bayesian posterior normalization: source equation lacks normalizing constant; if ignored, probabilities don't integrate to 1. Need mention.
- Multi-pass convergence: no convergence criterion in source; finite passes may not reach fixed point; order dependence residual.
- Data random split not chronological; no timeline; cannot validate temporal generalization. This is a trap.
- Home H constant vs travel timezone; dynamic H.
- xG as cumulative? Source says "difference in cumulative expected goals" [PAGE 4? Actually "difference in cumulative expected goals between teams" Page 5]. xG is not actual goals; strategy effects.

Need "THINK_TRACE" >=400 words. We can write ~700 words. Multi-hop derivation: from Elo to WHR, Bradley-Terry to Bayesian, update to optimization, validation, cross-layer. Gray-zone audit. Need include citations in THINK_TRACE? It's okay. Need maybe include exact quotes there? Could.

Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX, units, page citations, breakdown. Need include source quotes. We can write subsections within tag? XML tags can contain text with LaTeX. We can use paragraphs. No nested XML? Fine.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Use citations. Need mention "Retrocausal" maybe not literal time travel. Good.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need include "crisis habit regression" term. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need include "veto proof". Good.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. Need include each. Good.

Potential issue: The user likely expects "GSE + GSI Frontier Reasoning Foundry" maybe want analysis of source. We can be academic. No need mention "I". Use "The audit...". 

Let's draft in detail.

Start THINK_TRACE. Need >=400 words. I'll write 600-700. Include derivation:
1. Define target: P(i beats j | ratings, H, neutral). 
2. Single-pass Elo failure due to order; source shows forward/backward swings 430 points [PAGE 3].
3. WHR as joint Bayesian rating: likelihood product over games; no time-varying strength due fictional league [PAGE 2]; order-independent at converged optimum.
4. Bradley-Terry operator maps rating difference to probability. Source says h constant [PAGE 4].
5. Update uses e_i and s_i and xG diff with k,d [PAGE 5]; missing printed equation.
6. Multi-pass propagation through graph; Newton MAP; Nelder-Mead optimize parameters; RMSE .346 [PAGE 6].
7. Gray-zone audit: finite passes, random split, xG strategy, H constant, neutral H=0, missing equations, Bayesian normalization, RMSE ambiguity. 
Need include exact quotes. Good.

SOURCE_OPERATORS_AND_EQUATIONS: 
- Notation table maybe. 
- Equation (1) BT. Use H I_i. Need mention if i home: H; if j home: -H; neutral 0. Let z_i = R_i + H I_i - (R_j + H I_j) maybe. Define P_ij = σ(λ z). λ=c ln b? If b is base. Need use source parameters. Let's write:
Let R_i,R_j∈ℝ in rating points; H∈ℝ rating points; I_i=1 if i home, 0 otherwise; I_j similarly; neutral I_i=I_j=0. Source's Bradley-Terry description implies
P_{ij}=σ(λ[R_i-R_j+H(I_i-I_j)]), σ(z)=1/(1+e^{-z}), λ>0.
If b is base, λ=c ln b. But source says c "rating-to-odds conversion" not quote. We can say "source's c converts rating-point differences to probability scale; I denote λ the positive conversion coefficient; when a base b is used, λ=c ln b with b>0, b≠1." This is a formalization. Is it too invented? It's standard. Mark as "minimal reconstruction." Good.
- Adjustment equation generic:
Let U_i^{(t)} be source update. Source describes variables e_i,s_i,ΔxG,d,k. A minimal multiplicative envelope consistent with "further weighted by" is
R_i^{(t+1)} = R_i^{(t)} + k (e_i - s_i)[1 + d (xG_i - xG_j)] 
or if literal multiplicative: R_i ← R_i + k(e_i-s_i)d ΔxG. Need avoid ambiguity. We can present both as "the printed equation is absent; two readings are possible." This is rigorous. But maybe too much. Need include "Source text: 'Rating points were then adjusted using the equation below.' then equation omitted [PAGE 5]." Then "The variables force U_i = F(k,d,e_i-s_i,ΔxG;...) but not exact F. I therefore write the audit envelope..." Good. Maybe use additive xG weighting to avoid zeroing: 
R_i←R_i + k(e_i-s_i)(1+dΔxG). 
But if d=0, reduces to outcome-only. That seems plausible. Need state not source verbatim. Good.
- Bayesian:
P(R_i|G_{1:t}) = [P(G_{1:t}|R_i)P(R_i)]/[∫...]. Source writes without denominator [PAGE 5]. Need cite.
- Newton MAP: R_i^*=argmax log posterior; update R←R - [Hessian]^{-1} gradient. Maybe not needed but formal.
- Optimization:
θ=(H,d,c,b,k_divisor) [PAGE 6]. RMSE = sqrt(1/N Σ (ŷ - y)^2) in probability units if y∈{0,0.5,1}. Source says RMSE .346 [PAGE 2/6].
- Breakdown regimes list. 
Need mention units: rating points arbitrary, H rating points, λ inverse rating points, k? k dimensionless if e,s dimensionless and xG weighting dimensionless; d inverse goals if xG in goals; xG difference in goals. If additive 1+dΔxG: d has goals^{-1}. If pure multiplicative, k d? Units. Need state assumptions. Good.

RETROCAUSAL_GENEALOGY: Need historical lineage:
- Bradley-Terry paired-comparison model → Elo single-pass heuristic → Coulom 2008 WHR Bayesian whole-history → this paper. Cite [PAGE 9] references. 
- xG lineage Stats Perform 2012 [PAGE 9], source says "historical averages of shot outcomes" [PAGE 3] and missing elite playmakers [PAGE 8].
- Bayesian inference and Newton/Nelder-Mead.
Multi-week traps:
Week 1 trap: use win-loss and goal differential; source says flaws [PAGE 2].
Week 2 trap: use classic Elo forward/backward; 430 point swing [PAGE 3].
Week 3 trap: ignore home-field; penalty 126:53 and travel correlation [PAGE 3].
Week 4 trap: treat home-field constant as universal; timezone >3 hours [PAGE 8].
Week 5 trap: treat xG as ground truth; strategy and elite players [PAGE 8].
Week 6 trap: random split vs no timeline; cannot validate temporal drift; team strength constant [PAGE 2].
Week 7 trap: optimize many parameters on 96 held-out games; overfit risk; Nelder-Mead local optima.
Need include "retrocausal" genealogy: current model's assumptions can be traced to past choices; failures are inherited. Good.

RECURSIVE_THEORY_OF_MIND: Need include:
- Modeler's crisis habit regression: under pressure, revert to single-pass Elo / win-loss / universal H. Counter-trap: pre-register joint WHR, neutral H=0, xG ablation, convergence diagnostics.
- Recursive belief: team i's belief about j; model's posterior belief about R_i; evaluator's belief about model. Use "clock" as iterative convergence and neutral-site stage; not chronological. 
- Need mention "crisis habit regression vs counter-trap vs clock" explicitly.
- Maybe "opponent model" in Bayesian: P(R_i|G) depends on beliefs about opponents; if opponents' ratings miscalibrated, posterior shifts. 
- "clock" = time zone/travel? Actually source time zone differences. Include both iterative clock and travel clock: time zone >3 hours [PAGE 8]. 
- Need say "when crisis hits (RMSE stuck), habit regression to Elo is tempting; counter-trap is to check WHR fixed point, H=0 neutral, and xG ablation; clock means use convergence criterion and stage-specific H, not game order." Good.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: travel distance/timezone; penalty ratio 126:53; source says negative correlation with distance traveled [PAGE 3] and >3h timezone [PAGE 8]. But model H constant; no physical variables; veto any claim that H is biomechanical proof. 
- Biomechanical: xG uses shot distance, angle, player skill? Source says "factoring in variables such as distance from goal, shot angle, and player skill" [PAGE 3]. But limitations: "Fail to account for the ability of elite playmakers who are better shooters or goalies" [PAGE 8]. No biomechanical load/injury data; fictional league constant strength [PAGE 2]. Veto claims about fatigue/injury/biomechanics.
- Weather: source mentions "unusual weather conditions" as random factors [PAGE 2], but no weather covariates; cannot estimate weather effect. Veto. 
- Cross-layer proof: If a claimed effect is not in model input, it is either absorbed in residual RMSE or confounded with H/R. No identifiability. Good. 
- Need "physical/biomechanical/weather veto proof" maybe show formal: Let X_weather omitted. Then P(y|R,H) = ∫ P(y|R,H,X)P(X)dX; without X, H estimates average. If X correlated with home/travel, H biased. Veto causal attribution. Good. Use LaTeX.

RLVR_COUNTERFACTUAL_VETOES:
Need define RLVR reward. Three scenarios:
1. Order-permutation invariance. 
- Procedure: sample M=1,000 permutations of 476 games; for each train WHR to fixed convergence with same θ; compute held-out RMSE. 
- Prediction: WHR RMSE standard deviation ≤0.005 and |mean - canonical|≤0.01; single-pass Elo >0.05. Veto if WHR spread >0.02. 
- Verifiable: code can compute.
2. Neutral-site H=0.
- Procedure: split games into home/neutral; fit H_home and H_neutral separately or evaluate held-out neutral with H=0 vs H=32.317. 
- Prediction: H_neutral 95% CI includes 0 and RMSE(H=0) ≤ RMSE(H=32.317)+0.005. Veto if H_neutral >0 significantly or H>0 improves >0.01. 
3. xG ablation.
- Procedure: compare WHR with d>0 vs d=0 (outcome-only) and actual goals difference. 
- Prediction: xG model reduces held-out RMSE/log score by ≥0.01 over outcome-only. Veto if Δ<0.005 or sign reverses. 
Maybe include "if source's RMSE .346 is probability-scale, .01 is ~3% relative." Good.
Need maybe mention "RLVR reward = 1 if all pre-registered conditions pass, 0 otherwise." Good.

Need ensure no betting lines. Use "win probability" and "outcome". Fine. Avoid "odds" word. Need check "rating-to-odds" not used. Good.

Potential issue: exact quote "rating-to-odds conversion" omitted. We can say "the source labels c as a conversion constant" not quote. Good.

Need "PAGE 4" quote: "h is the home field advantage constant, which gives the home team a boosted amount of rating points" exact? Source: "h is the home field advantage constant, which gives the home team a boosted amount of rating points, c is the optimal rating-to-odds conversion—that is..." If we quote partial with comma? We can quote exactly "h is the home field advantage constant, which gives the home team a boosted amount of rating points" (without comma? Source has comma after points. If we end quote before comma, okay). Then "b is the base for our Bradley-Terry model" exact? Source: "and b is the base for our Bradley-Terry model." Yes.
Need quote "The probability of team i winning against team j is given by:" exact. Good.
Page 5 quote "d - A scaling factor for the expected goals difference." exact? Source uses "d - A scaling factor for the expected goals difference." Yes.
"k - An overall adjustment factor." exact.
"Initialize all teams with a base rating of 1500 points." exact.
"P(Rating | Game Result) = P(Game Result | Rating) × P(Rating)" exact? Source has bold? Text: "𝑃(Rating | Game Result) = 𝑃(Game Result | Rating) × 𝑃(Rating)". We can use plain. Good.
Page 6 quote "RMSE by comparing our predictions to the actual outcomes of those games decided by expected goals." Source: "we calculated the RMSE by comparing our predictions to the actual outcomes of those games decided by expected goals." Good.
Page 7 quote "home-field advantage constant of 32.317 means that an additional 32.317 rating points are given to the home team before any win probabilities are calculated." Exact? Source: "The result of the home-field advantage constant of 32.317 means that an additional 32.317 rating points are given to the home team before any win probabilities are calculated." Good.
Page 8 quote "independence from game order" exact? Source: "The model has independence from game order". Good.
"larger time zone differences for away teams, especially above three hours, significantly increased goal differential in favor of the home team." exact. Good.

Need maybe mention "RMSE 0.346" quote. Page 2: "achieving a root mean square error (RMSE) of 0.346 when tested against a held-out dataset." Good.

Need answer length. Let's produce. Need ensure XML tags exact. Use no markdown headings outside. Could use paragraphs inside tags. Use LaTeX. Need maybe escape? XML tags with ampersand? Avoid raw & in text? Use "and". LaTeX has \&? Not needed. Use > in text? Avoid. In XML, "<" in text could break. LaTeX uses "<" maybe. Need avoid raw < and > inside XML? We can use \lt or words. But XML tag content with LaTeX like \(P \in [0,1]\) no < >. Use \le. Avoid "≥"? Unicode okay. Avoid raw ampersand. Fine. Use \(...\) with backslashes. No issue. But using "&" in LaTeX align? Avoid. Use equation environments? No. Just inline. Use \( \). Good.

Need be careful XML parser: text containing "P(Rating | Game Result) = ..." okay. Use "×" okay. No raw `<`. Use "P_{ij}" etc. Good.

Need maybe include "λ" unicode? Fine. Or \lambda. Use LaTeX.

Need ">=400 words" in THINK_TRACE. We'll write long.

Let's draft final. Need not include word count. Ensure no forbidden words. Let's write.

Potential issue: "zero betting lines" maybe "line" appears in "lineage" not betting. Fine. "spread" appears? Avoid word "spread" except maybe "uncertainty spread" not betting? Better avoid. "totals" avoid. "odds" avoid. Good.

Need "RLVR" maybe define "reinforcement learning with verifiable rewards" but not mention betting. Good.

Need "formal LaTeX equations" with units. Good.

Let's compose final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a tournament paper, so the first audit move is to separate what is measured from what is inferred. The measured object is a set of 476 fictional North American Soccer League games with match outcomes, expected goals, home/away status, and auxiliary event counts [PAGE 4]. The paper’s target is not a single point prediction; it is a win probability for any matchup, with home-field advantage active in the group stage and set to zero at the neutral-site knockout stage. The source states: “All Knockout Round games are played at a neutral site (no home-field advantage)” [PAGE 2]. That single structural fact immediately vetoes any model that carries a positive home-field parameter into knockout probability calculations.

The second move is to trace the failure mode that motivated the method. A classic Elo system is single-pass and therefore order-sensitive. The authors tested exactly this: processing games forward versus backward produced “swings of up to 430 rating points per team” on a base of 1500 [PAGE 3]. This is not a cosmetic issue. If team strength is constant across the fictional season—and the source explicitly says “each team’s strength of performance remained constant throughout the season” [PAGE 2]—then a chronological single-pass update injects a spurious time variable. The WHR solution is to replace sequential updating with a whole-history, joint Bayesian rating: every game informs every connected team, and the rating vector is re-estimated after each match in a multi-pass loop [PAGE 5]. At convergence, the likelihood is a product over games, so a permutation of the game file should not change the maximum a posteriori rating vector. That is the formal content of the paper’s claim of “independence from game order” [PAGE 8].

The third move is the probability operator. The paper uses a Bradley-Terry model: “We employed the Bradley-Terry model to calculate expected win probabilities based on current team ratings” [PAGE 4]. The displayed equation is not rendered in the provided text—there is only “The probability of team i winning against team j is given by:” followed by a blank [PAGE 4]—so a faithful audit must mark the exact algebraic form as absent. What is recoverable is the parameter description: \(r_i\) and \(r_j\) are ratings, \(h\) is a home-field rating-point boost, \(c\) is a rating-to-probability conversion constant, and \(b\) is the Bradley-Terry base [PAGE 4]. The minimal non-degenerate reconstruction is a logistic/Bradley-Terry link, written below with an explicit home indicator. This is not a verbatim source equation; it is the smallest formal envelope consistent with the source’s parameter list and with the reported result that a 32.317-point home boost at equal 1500 ratings yields a 56.5% home win probability [PAGE 7].

The fourth move is the rating update. The source says: “Rating points were then adjusted using the equation below” [PAGE 5], but the equation is again absent. The listed ingredients are \(s_i\), the expected win probability; \(e_i\), the actual outcome coded as 0, 0.5, or 1; \((xG_1-xG_2)\), the cumulative expected-goals difference; \(d\), a scaling factor for that difference; and \(k\), an overall adjustment factor [PAGE 5]. The paper says the update is “further weighted by the expected goals difference” [PAGE 5]. That wording forces a product or an additive weighting, but it does not uniquely determine the algebra. The audit therefore keeps two readings open and flags the zero-xG-degeneracy: if the update is purely multiplicative in \((xG_i-xG_j)\), then equal xG produces zero update even when the result differs from expectation. That is a real breakdown regime, not a rhetorical one.

The fifth move is the Bayesian layer. The source writes \(P(\text{Rating}\mid\text{Game Result})=P(\text{Game Result}\mid\text{Rating})\times P(\text{Rating})\) [PAGE 5]. Formally, this omits the normalizing denominator; without normalization the posterior is not a probability density. The paper then uses Newton’s method to find the rating that maximizes the posterior [PAGE 5] and Nelder-Mead to optimize five parameters against held-out RMSE [PAGE 6]. The reported RMSE is 0.346 [PAGE 2], but the source says it compares predictions to “actual outcomes of those games decided by expected goals” [PAGE 6]. That phrase is ambiguous: if the target is the ternary outcome \(\{0,0.5,1\}\), RMSE is dimensionless on a probability scale; if the target is xG difference, RMSE is in goals. The audit must not silently choose one.

The gray-zone audit is therefore concentrated on six items: (i) missing printed equations; (ii) finite-pass order dependence despite the theoretical order-independence claim; (iii) Bayesian normalization; (iv) xG as a proxy that excludes elite shooter/goalkeeper effects and score-state strategy [PAGE 8]; (v) a constant home-field parameter that is contradicted by the paper’s own travel-time-zone finding above three hours [PAGE 8]; and (vi) random train/test splitting in a league with no stated timeline, which tests interpolation but not temporal drift. These are not minor caveats; they determine which claims are identifiable and which are only plausible.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(R_i,R_j\in\mathbb{R}\) be team ratings in arbitrary rating points. Let \(H\in\mathbb{R}\) be the home-field rating-point constant. Let \(I_i=1\) if team \(i\) is home and \(I_i=0\) otherwise; likewise \(I_j\). For a neutral site, \(I_i=I_j=0\). The source describes a Bradley-Terry probability operator with parameters \(r_i,r_j,h,c,b\): “The probability of team i winning against team j is given by:” [PAGE 4], with “\(h\) is the home field advantage constant, which gives the home team a boosted amount of rating points” and “\(b\) is the base for our Bradley-Terry model” [PAGE 4]. Because the displayed equation is absent in the provided text, the following is the minimal logistic reconstruction, not a verbatim transcription:

\[
P_{ij}=\sigma\!\left(\lambda\left[R_i-R_j+H(I_i-I_j)\right]\right),
\qquad
\sigma(z)=\frac{1}{1+e^{-z}},
\qquad
\lambda>0.
\]

Here \(P_{ij}\in[0,1]\) is dimensionless; \(R_i,R_j,H\) are in rating points; \(\lambda\) is in inverse rating points. If the source’s base \(b\) is used, one may set \(\lambda=c\ln b\), with \(b>0\), \(b\neq 1\), and \(c\) the positive conversion coefficient. The audit must regard the exact \(c,b\) mapping as unverified because the printed operator is missing.

The source’s rating update is also missing its displayed equation. The text states only: “Rating points were then adjusted using the equation below” [PAGE 5], then lists \(s_i\), \(e_i\), \((xG_1-xG_2)\), \(d\), and \(k\) [PAGE 5]. A minimal audit envelope consistent with “further weighted by the expected goals difference” is

\[
R_i^{(t+1)}
=
R_i^{(t)}
+
k\left(e_i-s_i^{(t)}\right)
\left[1+d\left(xG_i-xG_j\right)\right],
\]

where \(e_i\in\{0,0.5,1\}\) is dimensionless, \(s_i\in[0,1]\) is dimensionless, \(xG_i-xG_j\) is in goals, \(d\) has units of inverse goals, and \(k\) is dimensionless under this additive weighting. A literal multiplicative alternative is

\[
R_i^{(t+1)}
=
R_i^{(t)}
+
k\left(e_i-s_i^{(t)}\right)d\left(xG_i-xG_j\right),
\]

which has different breakdown behavior. The source does not resolve which form was used. This is a formal identifiability gap, not a reason to invent a third equation.

The Bayesian posterior is written by the source as

\[
P(\text{Rating}\mid\text{Game Result})
=
P(\text{Game Result}\mid\text{Rating})
\times
P(\text{Rating})
\quad\text{[PAGE 5]}.
\]

Formally, the normalized version is

\[
P(R_i\mid G_{1:t})
=
\frac{P(G_{1:t}\mid R_i)P(R_i)}
{\int P(G_{1:t}\mid R_i')P(R_i')\,dR_i'}.
\]

The source’s Newton step finds the maximum a posteriori rating:

\[
R_i^{*}=\arg\max_{R_i}\left[\log P(G_{1:t}\mid R_i)+\log P(R_i)\right]
\quad\text{[PAGE 5]}.
\]

The optimization vector is described as the home-field constant, the xG-difference weighting, the rating-to-probability conversion constant, the win-probability base, and the ratings-update divisor [PAGE 6]. The reported fit is “a root mean square error (RMSE) of 0.346 when tested against a held-out dataset” [PAGE 2]. If the held-out target is the ternary outcome, the RMSE is dimensionless probability error; if the target is xG difference, it is in goals. The source does not settle the unit, so the audit treats 0.346 as scale-ambiguous.

Singularity and breakdown regimes are exact and important. First, if \(\lambda=0\), or \(c=0\), or \(b=1\), then \(P_{ij}=1/2\) for every matchup; the rating system has no discriminative power. Second, if \(\lambda\to\infty\), the logistic saturates into a step function; tiny rating differences map to probabilities near 0 or 1, gradients vanish, and the Bayesian posterior becomes degenerate. Third, if \(H\to\infty\), the home indicator dominates all ratings; home and rating effects become confounded. Fourth, if \(k\to\infty\) or \(d\to\infty\), the multi-pass iteration can oscillate or diverge; there is no convergence criterion stated in the source. Fifth, under the literal multiplicative update, \(d=0\) or \(xG_i=xG_j\) kills the update entirely. Sixth, the source’s Bayesian expression lacks a visible normalizer [PAGE 5]; using it as written would not yield a normalized posterior. Seventh, the paper’s constant \(H\) is internally stressed by its own finding that “larger time zone differences for away teams, especially above three hours, significantly increased goal differential in favor of the home team” [PAGE 8]; a single \(H\) cannot represent that heterogeneity without an interaction term.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is clear from the reference list and the method text. The Bradley-Terry paired-comparison model supplies the probability link; the source cites Firth’s treatment of Bradley-Terry models [PAGE 9] and states its own use directly [PAGE 4]. Elo supplies the single-pass rating-update habit, but the paper explicitly rejects that habit because it is order-dependent: “The classic Elo system operates on a ‘single-pass’ basis, adjusting ratings after each match only once” [PAGE 3]. Coulom’s Whole-History Rating is the corrective ancestor: the source cites Coulom’s 2008 Bayesian rating system for players of time-varying strength [PAGE 9] and adapts it to a constant-strength fictional soccer league [PAGE 2]. Expected goals enter through the Stats Perform tradition of assessing goalscorers [PAGE 9], with the paper’s own justification that xG is derived from “historical averages of shot outcomes” [PAGE 3]. Bayesian inference and Newton’s method form the estimation layer [PAGE 5], while Nelder-Mead supplies the outer parameter search [PAGE 6].

The retrocausal lesson is that current assumptions inherit earlier modeling choices. The paper’s strongest assumption is that the fictional league has constant team strength [PAGE 2]. That assumption is what licenses a whole-history likelihood rather than a time-varying rating. But it also creates a trap: a random 80/20 split [PAGE 4] can validate interpolation across matchups, not temporal generalization, because there is no stated timeline. A modeler who forgets this may overclaim that the ratings would forecast future seasons or injury-driven form.

Multi-week traps are identifiable. Week 1 trap: use win-loss record or goal differential as the target. The source opens by rejecting both because they ignore strength of schedule, margin of victory, and home-field advantage [PAGE 1], and because goal differential is “heavily influenced by random factors or ‘lucky’ outcomes” [PAGE 2]. Week 2 trap: use classic Elo forward or backward. The source’s own experiment produced swings of up to 430 rating points [PAGE 3]. Week 3 trap: ignore home-field. The paper reports a disproportionate penalty-kick ratio of 126:53 for home teams and a negative correlation with distance traveled [PAGE 3]. Week 4 trap: treat the 32.317 home constant as universal. The paper’s own time-zone finding above three hours contradicts universality [PAGE 8]. Week 5 trap: treat xG as ground truth. The paper admits xG “fail[s] to account for the ability of elite playmakers who are better shooters or goalies” and fails to quantify score-state strategy [PAGE 8]. Week 6 trap: optimize five parameters on a 96-game held-out set and treat the resulting RMSE as a universal law. Nelder-Mead is a local search; the source does not report multiple restarts or confidence intervals for the fitted parameters. Week 7 trap: carry home-field into neutral-site knockout games. The source explicitly sets the constant to zero there [PAGE 7]. Each trap is a regression to an earlier, simpler habit; each counter-trap is a pre-registered invariance or ablation test.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when the modeler is under pressure to produce a simple answer. The habit is to fall back to single-pass Elo, raw win-loss, or one universal home-field boost. The paper’s evidence against that habit is direct: forward-versus-backward Elo processing caused rating swings up to 430 points [PAGE 3], and the paper’s own limitations section admits that the 32.3-point home constant generalizes across all games and contexts [PAGE 8]. In a crisis, the temptation is to say “home teams always get \(H\)” and “the last games matter more”; both are exactly what the WHR construction is designed to avoid.

The counter-trap is procedural, not rhetorical. Pre-register the invariance tests: permute the game file, require the converged WHR ratings to remain stable; set \(H=0\) for neutral-site games, as the paper does [PAGE 7]; compare xG-weighted updates against outcome-only updates; and report convergence diagnostics for the multi-pass loop. The recursive theory-of-mind point is that three beliefs are being estimated simultaneously: team \(i\)’s belief about team \(j\) (the matchup probability), the modeler’s posterior belief about team \(i\)’s rating (the Bayesian distribution), and the evaluator’s belief about whether the modeler’s validation actually tests the claimed invariance. If the evaluator sees only a single RMSE of 0.346 [PAGE 2], they cannot distinguish a genuinely order-independent fit from a lucky finite-pass path.

The “clock” has two meanings here. The first is the iterative clock: the multi-pass system initializes all teams at 1500 [PAGE 5] and repeatedly recalculates ratings for teams connected to the current game [PAGE 5]. Without a stopping rule, the clock can stop too early, leaving residual order dependence. The second is the travel clock: the paper finds that time-zone differences above three hours increased goal differential in favor of the home team [PAGE 8]. That is a physical-clock effect that a constant \(H\) cannot represent. The counter-trap is to separate stage (group versus neutral knockout) from travel burden (time zones) and to test an interaction term rather than letting one constant absorb both.

The recursive failure mode is double-counting. If team \(i\)’s rating is updated because it beat a strong team, and the strong team’s rating is also updated because it lost to team \(i\), the multi-pass loop can amplify the same result unless the joint likelihood is optimized to a fixed point. The paper’s Bayesian framing is the right counter-trap: the posterior over all ratings should be evaluated jointly, not as a sequence of local apologies. The source’s Newton step and repeated rating-point allocation [PAGE 5] are an approximation to that joint fixed point; the audit should demand convergence evidence, not just a final table.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer vetoes any claim that the WHR rating is a biomechanical or fatigue measurement. The model inputs are match outcomes, xG, home/away status, and auxiliary event counts [PAGE 4]; there is no player-load, injury, sprint, or biomechanical variable. The fictional league even fixes team strength across the season [PAGE 2]. Therefore a claim such as “the rating captures fatigue” is not identifiable from this model. The paper does report a physical proxy—distance traveled—and states: “We found a strong negative correlation with distance traveled to match and match results” [PAGE 3]. That is a correlation at the travel layer, not a biomechanical mechanism. It cannot be promoted to a causal biomechanical claim without player-level data.

The biomechanical layer is further vetoed by the xG construction. The paper says xG factors in “distance from goal, shot angle, and player skill” [PAGE 3], but its limitations section says xG fails “to account for the ability of elite playmakers who are better shooters or goalies” [PAGE 8]. That is an explicit admission that the shot-quality proxy is not a full biomechanical or skill model. A model that uses xG cannot simultaneously claim to measure elite shooting biomechanics. The correct interpretation is narrower: xG is a historical-average shot-quality proxy, and any residual elite-player effect is left in the error term.

The weather layer is also vetoed as an explanatory variable. The paper mentions “unusual weather conditions” only as a source of random variation [PAGE 2], and no weather covariate appears in the model description [PAGE 4]. Formally, if weather \(W\) is omitted, the estimated home effect obeys

\[
P(y\mid R,H)=\int P(y\mid R,H,W)\,P(W\mid R,H)\,dW.
\]

Unless \(W\) is independent of home status and travel, the fitted \(H\) is an average over weather and travel conditions, not a weather effect. The paper’s own travel-time-zone finding [PAGE 8] shows that \(H\) is not context-invariant, so the omission is material.

The cross-layer veto proof is therefore simple: an effect that is not an input cannot be identified as a separate causal layer. Travel distance and time zone are present as reported correlations [PAGE 3, PAGE 8]; biomechanical load and weather are absent. The model may still predict well, but its parameters cannot adjudicate among physical, biomechanical, and weather mechanisms. Any such adjudication would require new variables and a new identifiability argument.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Define the RLVR reward as a binary verifier: a claim receives reward 1 only if the pre-registered counterfactual prediction holds on held-out data; otherwise it receives 0. Three veto scenarios follow.

Veto 1: order-permutation invariance. Procedure: take the 476-game dataset, generate \(M=1{,}000\) random permutations of the game order, and for each permutation train the WHR multi-pass system to a fixed convergence criterion with the same optimized parameter vector. Evaluate held-out RMSE and the rating vector. Prediction: if the paper’s “independence from game order” claim [PAGE 8] is true at convergence, the WHR held-out RMSE standard deviation should be at most 0.005 and the mean should differ from the canonical order by at most 0.01; a single-pass Elo control should show a much larger dispersion, consistent with the reported 430-point swings [PAGE 3]. Veto: if WHR RMSE dispersion exceeds 0.02 or the rating vector changes by more than 30 rating points under permutation, the order-independence claim is rejected for the implemented finite-pass algorithm.

Veto 2: neutral-site home-field zero. Procedure: fit \(H_{\text{home}}\) on home games and \(H_{\text{neutral}}\) on neutral-site games, or evaluate held-out neutral-site games twice—once with \(H=0\) and once with \(H=32.317\). Prediction: the neutral-site estimate should have a 95% interval containing zero, and RMSE at \(H=0\) should be no worse than RMSE at \(H=32.317\) by more than 0.005. This follows the paper’s own statement that the constant “was set to 0 for the knockout games where they were played at a neutral site” [PAGE 7]. Veto: if \(H_{\text{neutral}}\) is significantly positive or if \(H=32.317\) improves neutral-site RMSE by more than 0.01, the neutral-site assumption is contradicted.

Veto 3: xG ablation. Procedure: compare the xG-weighted WHR against an outcome-only WHR with \(d=0\), and against a model using actual goals instead of xG. Prediction: the xG-weighted model should reduce held-out RMSE or log score by at least 0.01 relative to outcome-only, because the paper claims xG links rating adjustments to “measurable performance indicators rather than solely to outcomes like wins and losses” [PAGE 4]. Veto: if the xG model’s improvement is less than 0.005, or if actual-goals difference outperforms xG, the claim that xG adds predictive value is rejected. This is verifiable directly from the held-out split and does not require any new data collection.
</RLVR_COUNTERFACTUAL_VETOES>