---
source: "2017 - Modeling NCAA tournament bracket pool multiple entry strategy - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2017"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6563
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on a single-source PDF about NCAA tournament bracket pool multiple entry strategy. They require strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-word depth across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

I need to avoid saying "spreads" etc. The source text mentions "Sagarin Predictor spreads" but I must not mention spreads. I can refer to them as "Sagarin Predictor values" or "game outcome probabilities derived from Sagarin Predictor metric" but avoid the word spread? The invariant says never mention spreads, totals, moneylines, or odds. So I must not repeat those words. I can paraphrase as "point differential estimates" maybe but careful not to say "spreads". Actually "Sagarin Predictor spreads" is in the text. I should not quote that phrase directly if it contains "spreads"? The invariant says never mention spreads. I think quoting the source might violate if I include the word "spreads". Better to paraphrase: "Sagarin Predictor-derived point differentials" — but "point differentials" might be okay? It's not "spreads" per se. Or just "Sagarin Predictor metric". I'll avoid the word entirely.

Also "normal distribution with a standard deviation of 11" — units? Points? It's implied points but I can say "game score differential units". But avoid "spreads". The standard deviation is 11 (points presumably). I can say "11 points" — that's fine, not a betting line.

Need formal LaTeX equations. I can formulate:
- ROI definition: $ROI = \frac{W - C}{C}$ where W is winnings, C is cost.
- Markov model transition probability: $P(W_{ij}) = \Phi\left(\frac{\mu_{ij}}{\sigma}\right)$ where $\mu_{ij}$ is Sagarin-derived expected differential, $\sigma=11$.
- Expected ROI estimator: $\widehat{ROI}_e = \frac{1}{N}\sum_{s=1}^N ROI_e^{(s)}$.
- Hill climb update: $b_{k+1} = b_k + \eta \nabla_b \widehat{ROI}$ restricted to rounds 4-6.
- Internal vs backtest bias: $\Delta = 72\% - 53\% = 19$ percentage points? Wait text says 72% vs 53%, a 26% bias. Actually (72-53)/72 = 26.4% relative bias. Or difference is 19 percentage points. Need to be precise. The text says "a 26% bias". I'll discuss both absolute difference (19 pp) and relative bias.

Units: ROI dimensionless (percentage), dollars ($), standard deviation $396, p-value 0.032.

Citations: [PAGE 1] since only one page.

Breakdown regimes: tie-breaking assumption, donut party fee drag, local favorite over-betting (Connecticut), internal estimate overconfidence due to perfect model assumption, optimization limited to last three rounds.

Retrocausal genealogy: lineage from Metrick 1996, Breiter & Carlin 1997, Kaplan & Garstka 2001, Clair & Letscher 2007, Niemi et al. 2008, Null 2016. Multi-week traps: iterative optimization across entries assumes previous entries fixed, but in real pool opponent entries change after betting closes? Actually entries are fixed after close, but pick distribution available before close is used as proxy. Trap: using ESPN/Yahoo distribution as surrogate for local pool opponent model introduces distribution shift. Hometown effect (Connecticut) creates correlated failure mode.

Recursive theory of mind: crisis habit regression — under pressure, players revert to chalk favorites; counter-trap — optimized contrarian entries exploit over-backed favorites; clock — only last three rounds optimized due to compute, early rounds default lower seed, creating vulnerability if early upsets correlate with late-round outcomes (non-independence).

Cross-layer veto adjudication: physical (none, it's a simulation), biomechanical (key player absences not modeled), weather (not applicable to indoor basketball? Could mention tournament site conditions but source doesn't). Need to present veto proof: veto conditions under which model breaks down. E.g., if hometown bias > threshold, ROI turns negative; if tie-breaking favors total score guess rather than split, variance increases; if donut party fee (7-8%) deducted, ROI decreases by that fraction.

RLVR counterfactual vetoes: 3 verifiable scenarios:
1. Local favorite wins and is >X% over-backed -> ROI negative (source says two negative years were when Connecticut won; worst year total loss). Prediction: if Connecticut-like team wins with >? opponent saturation, optimized entries lose 100% fees.
2. Tie-breaking rule changed from prize split to closest total score guess -> std dev increases, mean unchanged, p-value may exceed 0.05. Prediction: back-tested significance (p=0.032) fails under real tie-break.
3. Donut party fee (7-8%) deducted from prize pool -> ROI multiplied by ~0.93. Prediction: 53% becomes ~44.5%, still positive but closer to zero; internal 72% becomes ~67%.

Need >=1000 words total across sections. THINK_TRACE >=400 words. Others can be substantial.

Need to ensure no mention of "spreads", "totals", "moneylines", "odds". I will scan carefully. The source text uses "spreads" but I won't reproduce it. I can say "Sagarin Predictor-derived expected margin". Also avoid "betting odds". Use "win probabilities".

Let's draft.

Structure:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
- Start from problem: single-entry strategies explored, multiple entries not analyzed.
- Simulation architecture: 10,000 sims per year, 200 opponent entries, training set.
- Outcome model: Markov chain over tournament bracket, win probs from Sagarin Predictor metric, normal noise sigma=11.
- Opponent model: advancement probabilities from ESPN/Yahoo pick distribution pre-close (Clair & Letscher 2007).
- Objective: average ROI over training set, nearest-neighbor hill climb, only rounds 4-6 optimized (quarterfinals onward? Actually last three rounds: regional finals, Final Four, championship). Lower seed default elsewhere.
- Sequential entry: entry k+1 optimized assuming entries 1..k played; 100 entries added to 200 opponents = 300 total.
- Backtest: 2008-2017, 10 years, real pool ~200 opponents (178-241), scoring 1,2,4,8,16,32, $5 entry, 4 prizes 40/30/20/10.
- Results: avg ROI $263 or 53% of $500 capital; std $396; one-tailed t p=0.032.
- Failure modes: local favorite (UConn) wins -> negative years because hometown over-betting; worst year total loss. Bias: internal sim estimate 72% vs backtest 53%, 26% relative overestimate due to perfect model assumption.
- Gray zones: tie-breaking assumption (split vs closest total score guess) reduces std dev in backtest; donut party 7-8% not removed inflates ROI; using ESPN/Yahoo distribution as proxy for local opponent pool may misestimate local contrarian value; optimization restricted to last three rounds ignores early-round information; Markov model assumes conditional independence of game outcomes given seed/metric, ignoring player absences, momentum, etc.
- Derive formal relationship between ROI variance, entry count, and opponent correlation. If entries are highly correlated (all avoid UConn), variance doesn't scale down with 1/sqrt(100). Instead effective sample size is lower. This explains high std dev ($396) relative to mean ($263).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, citations, breakdown.
- Define probability space: Let $\mathcal{T}$ be tournament bracket, $\mathcal{G}$ set of 63 games. For game $g$ between seeds $i,j$, win probability $p_{ij} = \Phi(\Delta_{ij}/\sigma)$ where $\Delta_{ij}$ is Sagarin Predictor expected differential, $\sigma=11$ points. [PAGE 1] (paraphrase Sagarin Predictor spreads -> avoid word).
- Markov transition: bracket outcome probability $P(\mathcal{B}) = \prod_{g \in \mathcal{G}} p_{g}^{1[g\text{ realized}]} (1-p_g)^{1[\text{otherwise}]}$ subject to bracket consistency constraints.
- Opponent advancement probability $q_r$ from Clair & Letscher (2007) method using pick distribution $D$ from ESPN/Yahoo. [PAGE 1]
- ROI estimator: $\widehat{\mathrm{ROI}}_e = \frac{1}{S}\sum_{s=1}^S \frac{R_e^{(s)} - C}{C}$ where $R_e^{(s)}$ is prize winnings for entry $e$ in simulation $s$, $C=\$500$ total entry fees for 100 entries. [PAGE 1]
- Hill climb: $e_{k+1} = \mathcal{H}(e_k, \{e_1,\dots,e_k\}; \text{scores } 1,2,4,8,16,32)$ over rounds $r \in \{4,5,6\}$. [PAGE 1]
- T-test: $t = \frac{\bar{x}}{s/\sqrt{10}}$, $p = P(T_9 > t) = 0.032$ one-tailed. [PAGE 1]
- Bias decomposition: $\mathrm{Bias}_{\mathrm{rel}} = \frac{72\% - 53\%}{72\%} \approx 0.26$. Absolute gap: 19 percentage points. [PAGE 1]
- Hometown effect: over-betting parameter $\beta_{\text{home}} > 0$ for local team; if local team wins, expected prize share $\propto 1/(1 + \beta_{\text{home}} N_{\text{opp}})$, reducing ROI. [PAGE 1 + Null 2016 citation logic]
- Breakdown regimes: (i) tie-break switches to closest championship total score guess $\Rightarrow \sigma_{\mathrm{ROI}}^{\text{real}} > \sigma_{\mathrm{ROI}}^{\text{backtest}}$, mean unbiased; (ii) 7-8% fee drag $\Rightarrow \mathrm{ROI}_{\text{net}} \approx \mathrm{ROI}_{\text{gross}} \times (1 - 0.075)$; (iii) perfect model assumption $\Rightarrow \widehat{\mathrm{ROI}}_{\text{internal}}$ overestimates by $\sim 26\%$ relative; (iv) local favorite championship win with high saturation $\Rightarrow$ ROI can be $-100\%$.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Metrick 1996: single entry, betting market futures for championship, opponent model from actual pool brackets, observed "hometown" effect. [PAGE 1]
- Breiter & Carlin 1997: Chance article, betting line spreads for first round (I cannot say spreads; I can say "first-round game outcome estimates"). Use opponent model? They used similar.
- Kaplan & Garstka 2001: Manage Sci, office pool.
- Clair & Letscher 2007: Oper Res, ENORM function, ESPN/Yahoo large contests, advancement probabilities from pick distribution. Current paper replaces ENORM with Monte Carlo estimation. [PAGE 1]
- Niemi et al. 2008: contrarian strategies, tournament outcome models similar, opponent model from pool brackets (not available pre-close).
- Null 2016: CBS article, hometown bias real, extends to state/region. [PAGE 1]
- Lineage: from single-entry equilibrium to multiple-entry portfolio; from actual pool brackets to pre-close public pick distributions; from ENORM deterministic to Monte Carlo stochastic.
- Multi-week traps: (a) using ESPN/Yahoo distribution as proxy for local office pool ignores geographic correlation and hometown effect; (b) sequential optimization assumes static opponent set, but in real multi-week bracket culture, entries may be observed or copied; (c) internal validation set generated from same model as training, causing overfitting/optimism bias (72% vs 53%); (d) restricting optimization to late rounds assumes early-round outcomes are exogenous, but early upsets alter path dependence and opponent elimination, changing late-round value.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pool pressure, participants regress to chalk (higher seeds, local favorite). This is the "hometown" effect amplified in crisis (Final Four). Opponent entries cluster on local champion, creating negative expected value for chalk but positive contrarian value.
- Counter-trap: optimized entries deliberately avoid over-backed local favorite in later rounds, capturing 32-point championship multiplier when favorite loses, and minimizing shared prize when favorite wins (but then lose to mass of chalk entries). This is a second-order theory of mind: model opponents modeling the tournament.
- Clock: computational clock limits optimization to last three rounds; early rounds fixed to lower seed. This creates a temporal asymmetry: if early-round upsets are non-random and correlated with team quality, the fixed early bracket misallocates points. Also betting/entry clock: pick distribution available before close is stale relative to late-breaking injury/absence info.
- Interaction: crisis habit regression makes the counter-trap profitable in expectation, but the clock (3-round optimization) caps the extraction. When local favorite wins (crisis realized), the regression defeats the counter-trap; ROI collapses to total loss in worst year.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: NCAA tournament games are indoor, climate-controlled; no weather veto applicable to outcome model. [Source doesn't mention weather, so veto proof: null set, model is agnostic.]
- Biomechanical/player availability layer: source suggests improving outcome model with info about absences of key players relative to season. Veto condition: if a key player is absent in tournament but model assumes season-average Sagarin metric, win probabilities $p_{ij}$ are biased. This is a structural break. Formal veto: $\exists$ player $p$ with absence indicator $A_p=1$ such that $\left|\Delta_{ij}^{\text{season}} - \Delta_{ij}^{\text{tournament}}\right| > \tau$ where $\tau$ is model tolerance; then Markov chain transition probabilities invalid.
- Information layer: tie-break rule (closest total score guess vs split) and donut party fee are institutional vetoes. Veto condition: tie-break not modeled $\Rightarrow$ variance understated; fee not removed $\Rightarrow$ mean overstated by $\approx 7.5\%$.
- Opponent distribution layer: ESPN/Yahoo pick distribution used as surrogate for local pool. Veto if local pool hometown bias $\beta_{\text{local}}$ differs from national distribution by more than threshold $\epsilon$. Then contrarian optimization targets wrong over-backed teams.
- Veto adjudication summary: back-test passes statistical screen ($p=0.032$) but fails robustness screen under (i) real tie-break, (ii) fee drag, (iii) local favorite win. Therefore deploy only with hedge (futures bet on local favorite) or restricted entry count when hometown bias is high.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 scenarios. Make them verifiable (falsifiable).
Scenario 1: Local favorite championship veto. Condition: In a given year, a local team (e.g., Connecticut) is over-backed relative to ESPN/Yahoo distribution and wins the tournament. Prediction: The 100-entry optimized portfolio suffers negative ROI; worst-case total loss of $500 entry fees. Verifiability: track years where local favorite wins; check if optimized entries lose money. Source already confirms two negative years were Connecticut wins, worst year total loss. [PAGE 1]
Scenario 2: Tie-break rule variance veto. Condition: Real pool breaks ties by closest championship total score guess rather than dividing prize money. Prediction: Standard deviation of returns increases above backtest $396; one-tailed t-test p-value rises above 0.05, nullifying statistical significance. Verifiability: re-run backtest with winner-take-all tie-break by total-score guess; observe $\sigma$ and $p$. Source states assumption of prize division reduces std dev relative to real pool. [PAGE 1]
Scenario 3: Model-perfection optimism veto. Condition: Internal simulation estimate used ex-ante without backtest haircut. Prediction: Ex-ante expected ROI of 72% overstates realized backtest ROI by at least the observed 19 percentage points (or ~26% relative); if deployed relying solely on internal estimate, capital allocation will be oversized by factor $\approx 72/53 \approx 1.36$. Verifiability: compare internal 10,000-sim estimate to out-of-sample backtest across years; measure gap. Source reports internal average 72% vs backtest 53%. [PAGE 1]

Need to ensure total words >=1000. Let's estimate. THINK_TRACE needs >=400 words alone. Others can be 150-200 each. Should be fine.

I need to avoid saying "spreads" anywhere. Check source text quotes: if I quote "Sagarin Predictor spreads" I violate. I will not quote that exact phrase. I'll say "Sagarin Predictor metric". Also avoid "betting line spreads". Avoid "odds". Avoid "totals" except maybe "total championship score guess" is in source; "totals" as a betting term is banned? The invariant says "totals" as a betting line. The phrase "total championship score guess" might be okay but to be safe, I can say "combined championship score guess" or just "championship score guess". I'll avoid "totals" as a standalone betting term.

Also avoid "moneylines". Fine.

Check for "odds": don't use.

Check for "spreads": don't use.

Check for "totals": I might say "total score" but avoid "totals" as betting term. Should be fine.

Now produce the XML sections exactly.

Need to include [PAGE 1] citations and verbatim quotes where appropriate. Since only one page, all citations [PAGE 1].

Verbatim quotes: I can quote short phrases like "hometown effect", "ENORM function", "one-tailed t-test p-value is 0.032", etc. Need to ensure I don't quote banned words. The source has "spreads" but I won't quote that phrase.

Let's write carefully.

Word count check: I'll aim for THINK_TRACE ~500 words, others ~150-250 each. Total should exceed 1000.

Let's draft content.

THINK_TRACE:

The source article addresses a gap in the statistical literature: single-entry NCAA bracket pool strategies have been studied since Metrick (1996), but multiple-entry portfolio strategies have not. The authors construct a Monte Carlo training pipeline in which each year’s tournament outcome and the field of roughly 200 opponent entries are simulated 10,000 times. The tournament outcome model is a Markov chain over the 63-game bracket. For each possible game, a win probability is computed from the Sagarin Predictor metric by assuming a normal error term with standard deviation equal to 11 points. Opponent entries are generated from the pre-close pick distribution of the ESPN or Yahoo contest using the advancement-probability method of Clair and Letscher (2007). The objective for any candidate entry is its average return on investment across the simulated training set, optimized by a nearest-neighbor hill climb that modifies only the last three rounds; all earlier games default to the lower seed.

Entries are added sequentially. Entry k+1 is optimized assuming entries 1 through k have already been played, producing a portfolio of 100 optimized entries that is then added to the 200 simulated opponent sheets. The method is back-tested on ten years (2008–2017) from a real pool with 178–241 opponents, a $5 entry fee, scoring of 1, 2, 4, 8, 16, 32 across rounds 1 through 6, and prizes of 40/30/20/10 percent. The observed average ROI is $263, or 53 percent of the $500 exposed capital, with a standard deviation of $396 and a one-tailed t-test p-value of 0.032.

Gray-zone audit reveals several structural vulnerabilities. Two of the ten years produced negative returns, and both occurred when the local favorite, Connecticut, won the tournament; the worst year was a total loss of all entry fees. The authors attribute this to the “hometown” effect: local teams are over-backed relative to the national ESPN/Yahoo pick distributions, a bias documented by Metrick (1996) and Null (2016) that intensifies for higher seeds. When the local favorite wins, the optimized contrarian portfolio competes against a large mass of opponent sheets that selected that team as champion and earned the full 32-point championship multiplier. Merely correcting for hometown bias reduces exposure to the home team and therefore lowers ROI precisely in the states of the world where the home team triumphs.

Two modeling assumptions further degrade external validity. First, ties are resolved in the back-test by dividing prize money, whereas the real pool awards ties to the closest championship score guess; this understates return variance while leaving the mean unbiased. Second, 7 to 8 percent of pooled fees fund a post-tournament donut party and are not removed from the reported ROIs, inflating mean returns. An internal validation set of 10,000 new simulations yields an average ROI of 72 percent, implying a relative optimism bias of about 26 percent compared with the 53 percent back-test. This gap arises because the internal estimate treats the tournament-outcome and opponent models as perfectly accurate. The audit concludes that the method identifies genuine profit opportunities arising from non-equilibrium opponent behavior, but only after adjusting for tie-break rules, fee drag, local favorite saturation, and model uncertainty.

Word count: probably around 450-500. Good.

SOURCE_OPERATORS_AND_EQUATIONS:

Define the probability space. Let $\mathcal{G}$ denote the set of 63 tournament games and let $\mathcal{B}$ be a valid bracket outcome. For each game $g$ between team $i$ and team $j$, the win probability is modeled as

$$p_{ij} = \Phi\left(\frac{\Delta_{ij}}{\sigma}\right), \qquad \sigma = 11\ \text{points},$$

where $\Delta_{ij}$ is the Sagarin Predictor-derived expected score differential for team $i$ against team $j$, $\Phi$ is the standard normal CDF, and the unit of $\Delta_{ij}$ is points. [PAGE 1] The full bracket likelihood under the Markov assumption is

$$P(\mathcal{B}) = \prod_{g \in \mathcal{G}} p_{g}^{\mathbf{1}[g \in \mathcal{B}]} \bigl(1 - p_{g}\bigr)^{\mathbf{1}[g \notin \mathcal{B}]},$$

subject to bracket-consistency constraints (a team cannot advance without winning its predecessor). [PAGE 1]

Opponent advancement probabilities are derived from the public pick distribution $D$ using the Clair–Letscher (2007) method, producing a field of 200 synthetic opponent entries for each simulated year. [PAGE 1]

The ROI estimator for entry $e$ over $S = 10{,}000$ simulations is

$$\widehat{\mathrm{ROI}}_e = \frac{1}{S} \sum_{s=1}^{S} \frac{R_e^{(s)} - C}{C},$$

where $R_e^{(s)}$ is the prize money won by entry $e$ in simulation $s$, $C = \$5 \times 100 = \$500$ is the total exposed capital, and ROI is dimensionless (reported as a percentage). [PAGE 1]

Sequential hill-climb optimization is restricted to rounds $r \in \{4,5,6\}$:

$$e_{k+1} = \operatorname{HillClimb}\left(e_k,\{e_1,\dots,e_k\};\text{scores } 1,2,4,8,16,32\right), \quad k=1,\dots,100.$$

[PAGE 1]

Back-test inference uses the one-tailed statistic

$$t = \frac{\bar{x}}{s / \sqrt{10}}, \qquad p = P(T_{9} > t) = 0.032,$$

with $\bar{x} = \$263$, $s = \$396$, and $n=10$ years. [PAGE 1]

Optimism bias is quantified as

$$\mathrm{Bias}_{\mathrm{rel}} = \frac{72\% - 53\%}{72\%} \approx 0.26, \qquad \Delta_{\mathrm{abs}} = 19\ \text{percentage points}.$$

[PAGE 1]

Breakdown regimes. (i) Tie-break veto: replacing prize-splitting with closest-championship-score-guess tie-breaking increases $\sigma_{\mathrm{ROI}}$ above the back-test value while leaving $\mu_{\mathrm{ROI}}$ unchanged; the real-pool p-value may therefore exceed 0.05. (ii) Fee-drag veto: removing the 7–8 percent donut-party allocation scales ROI by approximately $1 - 0.075 = 0.925$. (iii) Perfect-model veto: internal estimates assume zero specification error; any deviation in the Sagarin-based win probabilities or in the opponent pick distribution invalidates the 72 percent ex-ante figure. (iv) Hometown saturation veto: if a local team wins and its opponent-sheet ownership share exceeds the model’s implied equilibrium, ROI can fall to $-100\%$, as observed in the worst back-test year. [PAGE 1]

Need to verify units: sigma = 11 points. Is "points" a betting line? No, it's score differential. Good.

RETROCAUSAL_GENEALOGY:

The paper sits in a lineage extending from Metrick (1996), who modeled single-entry behavior using championship-game futures and actual pool brackets and identified the “hometown” effect, through Breiter and Carlin (1997), Kaplan and Garstka (2001), Clair and Letscher (2007), and Niemi et al. (2008). Clair and Letscher introduced the ENORM function for optimal bracket construction in large ESPN and Yahoo contests; the present study replaces ENORM with Monte Carlo estimation and extends the analysis to sequential multiple entries in a local office pool. [PAGE 1] Null (2016) later confirmed that hometown bias is real and can extend to an entire state or region, with intensity increasing for higher seeds. [PAGE 1]

The methodological genealogy reveals three multi-week traps. First, opponent modeling: Metrick (1996) and Niemi et al. (2008) relied on entries from the pools being analyzed, which are unavailable before betting closes; substituting the ESPN/Yahoo pick distribution introduces a geographic distribution shift because local pools exhibit hometown over-betting that national contests do not fully capture. Second, temporal optimization: limiting the hill climb to the last three rounds assumes early-round outcomes are exogenous and that lower seeds should always win there; in reality, early upsets propagate path-dependence through the bracket and alter the value of late-round picks. Third, validation optimism: generating both the training set and the test set from the same assumed model produces an internal ROI estimate of 72 percent that overshoots the back-tested 53 percent by roughly 26 percent relative, a classic overfitting trap that worsens when the model is deployed ex-ante without a haircut. [PAGE 1]

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression describes the tendency of pool participants, under the pressure of the Final Four and championship game, to revert to chalk favorites and to overweight the local team. This is the hometown effect operating under stress: opponent sheets cluster on Connecticut as champion, inflating the ownership share of the 32-point championship multiplier. [PAGE 1]

The counter-trap is the optimized portfolio’s second-order response: by deliberately under-weighting the over-backed local favorite in rounds 4–6, the entry captures contrarian value when the favorite loses and minimizes prize sharing when the favorite wins. The strategy profits when opponent behavior deviates from financial equilibrium, which the paper identifies as the core source of opportunity. [PAGE 1]

The clock constraint binds the counter-trap. Because only the last three rounds are optimized, early-round brackets are fixed to lower-seed defaults. If early upsets are non-random—for example, if key-player absences or travel fatigue generate systematic first-round surprises—the fixed early bracket misallocates points and erodes the late-round contrarian edge. Moreover, the pick distribution used to simulate opponents is available before entries close, but late-breaking roster information arrives after that clock has run out, creating an information asymmetry between the model and the realized tournament. [PAGE 1]

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: tournament games are played indoors under climate-controlled conditions; the source contains no weather-dependent outcome terms, so no meteorological veto applies to the Markov game model. [PAGE 1]

Biomechanical / player-availability layer: the authors explicitly propose improving the outcome model with information about absences of key players relative to the season. A formal veto condition is

$$\exists p \in \text{players}: \ A_p = 1 \quad\text{and}\quad \left|\Delta_{ij}^{\text{season}} - \Delta_{ij}^{\text{tournament}}(A)\right| > \tau,$$

where $A_p$ is an absence indicator, $\Delta$ denotes the Sagarin Predictor-derived expected differential, and $\tau$ is the model’s tolerance for specification error. If this condition holds, the transition probabilities $p_{ij}$ are biased and the bracket likelihood is invalid. [PAGE 1]

Institutional layer: two vetoes are documented. Tie-breaking in the real pool uses the closest championship score guess, whereas the back-test splits ties; this understates $\sigma_{\mathrm{ROI}}$ while keeping the mean unbiased, threatening the p-value of 0.032. The 7–8 percent donut-party fee is omitted from reported ROIs; removing it multiplies mean ROI by approximately $0.925$. [PAGE 1]

Opponent-distribution layer: using ESPN/Yahoo pick distributions as a surrogate for the local pool is vetoed whenever hometown bias $\beta_{\text{local}}$ differs from the national distribution by more than the model’s error tolerance; under that condition the contrarian optimization targets the wrong over-backed teams. [PAGE 1]

Adjudication: the back-test passes a nominal statistical screen ($p=0.032$) but fails robustness under real tie-breaking, fee drag, and local-favorite championship wins. Deployment should therefore require either a hedge on the local favorite in the futures market or a reduced entry count when hometown saturation is high. [PAGE 1]

RLVR_COUNTERFACTUAL_VETOES:

Scenario 1 — Local-favorite championship veto. Condition: In a given tournament year, a local team (e.g., Connecticut) is over-backed relative to the ESPN/Yahoo pick distribution and wins the championship. Verifiable prediction: the 100-entry optimized portfolio records negative ROI for that year; in the worst case the ROI is $-100\%$, representing total loss of the $500 entry fees. The source confirms this pattern: two of the ten back-test years were negative, both were Connecticut championship years, and the worst year was a complete loss. [PAGE 1]

Scenario 2 — Tie-break variance veto. Condition: The real pool breaks ties by the closest championship score guess instead of dividing prize money. Verifiable prediction: the standard deviation of returns exceeds the back-test value of $396, the one-tailed t-test p-value rises above 0.05, and the nominal statistical significance of the strategy disappears. The source states that assuming prize division “has the effect of somewhat reducing the standard deviation of returns in this back-test relative to the real pool.” [PAGE 1]

Scenario 3 — Model-perfection optimism veto. Condition: An operator deploys the method ex-ante using only the internal 10,000-simulation ROI estimate without applying the back-test haircut. Verifiable prediction: expected ROI is overstated by approximately 19 percentage points in absolute terms (72 percent internal vs. 53 percent back-test), or about 26 percent relative; capital allocation based on the internal figure will be oversized by a factor of roughly $72/53 \approx 1.36$. The gap is attributable to the internal simulations’ assumption of perfect accuracy for both the tournament-outcome and opponent models. [PAGE 1]

Need to check total word count. Let's roughly count:
THINK_TRACE: ~470 words.
SOURCE_OPERATORS: ~350 words.
RETROCAUSAL: ~220 words.
RECURSIVE: ~200 words.
CROSS_LAYER: ~280 words.
RLVR: ~250 words.
Total ~1770 words. Good.

Now ensure no banned words. Scan:
- "spreads": I used "Sagarin Predictor metric", "expected score differential", "Sagarin Predictor-derived expected differential". Did not use "spreads". Good.
- "totals": I used "championship score guess", not "totals" as betting. Did I use "totals"? "total championship score guess" appears? I wrote "closest championship score guess". Good. I didn't say "totals".
- "moneylines": none.
- "odds": none.

Check verbatim quotes: "hometown effect" is quoted. "ENORM function" quoted. "one-tailed t-test p-value is 0.032" — I paraphrased slightly but included exact value. Maybe include exact quote? It's fine.

Need to cite [PAGE 1] frequently. I did.

Need exact XML section names. Yes.

One concern: "betting closes" appears in source and I might repeat "betting closes". Is "betting" banned? The invariant says zero betting lines: never mention spreads, totals, moneylines, or odds. "Betting" itself is not banned, but "betting closes" is okay. However "betting market futures" — I didn't mention futures market except in cross-layer I said "hedge on the local favorite in the futures (sports betting) market". The source mentions futures market. Is "futures" a betting line? Not explicitly banned but close. I can say "hedging instrument on the local favorite" instead. But it's okay? The invariant says zero betting lines, specifically spreads, totals, moneylines, odds. Futures is a type of bet but not listed. To be safe, I can keep "futures market" since it's in source and not one of the banned four. But maybe avoid "sports betting" phrase. I'll say "hedging position on the local favorite" instead of futures market. Actually source says "hedging bet on the local favorite in the futures (sports betting) market". I can paraphrase: "hedging position on the local favorite". I'll adjust cross-layer to avoid "futures".

Also "bankroll" not banned. Fine.

Check "standard deviation of 11 (similar to methods of Breiter and Carlin 1997)" — source says spreads. I paraphrased to expected score differential. Good.

Now final output. Must be only the XML sections, no extra text outside? The user asked for those exact XML sections. I'll provide exactly those tags.

Let's assemble final.
</NATIVE_REASONING>

<THINK_TRACE>
The source article addresses a gap in the statistical literature: single-entry NCAA bracket pool strategies have been studied since Metrick (1996), but multiple-entry portfolio strategies have not. The authors construct a Monte Carlo training pipeline in which each year’s tournament outcome and the field of roughly 200 opponent entries are simulated 10,000 times. The tournament outcome model is a Markov chain over the 63-game bracket. For each possible game, a win probability is computed from the Sagarin Predictor metric by assuming a normal error term with standard deviation equal to 11 points. Opponent entries are generated from the pre-close pick distribution of the ESPN or Yahoo contest using the advancement-probability method of Clair and Letscher (2007). The objective for any candidate entry is its average return on investment across the simulated training set, optimized by a nearest-neighbor hill climb that modifies only the last three rounds; all earlier games default to the lower seed.

Entries are added sequentially. Entry k+1 is optimized assuming entries 1 through k have already been played, producing a portfolio of 100 optimized entries that is then added to the 200 simulated opponent sheets. The method is back-tested on ten years (2008–2017) from a real pool with 178–241 opponents, a $5 entry fee, scoring of 1, 2, 4, 8, 16, 32 across rounds 1 through 6, and prizes of 40/30/20/10 percent. The observed average ROI is $263, or 53 percent of the $500 exposed capital, with a standard deviation of $396 and a one-tailed t-test p-value of 0.032.

Gray-zone audit reveals several structural vulnerabilities. Two of the ten years produced negative returns, and both occurred when the local favorite, Connecticut, won the tournament; the worst year was a total loss of all entry fees. The authors attribute this to the “hometown” effect: local teams are over-backed relative to the national ESPN/Yahoo pick distributions, a bias documented by Metrick (1996) and Null (2016) that intensifies for higher seeds. When the local favorite wins, the optimized contrarian portfolio competes against a large mass of opponent sheets that selected that team as champion and earned the full 32-point championship multiplier. Merely correcting for hometown bias reduces exposure to the home team and therefore lowers ROI precisely in the states of the world where the home team triumphs.

Two modeling assumptions further degrade external validity. First, ties are resolved in the back-test by dividing prize money, whereas the real pool awards ties to the closest championship score guess; this understates return variance while leaving the mean unbiased. Second, 7 to 8 percent of pooled fees fund a post-tournament donut party and are not removed from the reported ROIs, inflating mean returns. An internal validation set of 10,000 new simulations yields an average ROI of 72 percent, implying a relative optimism bias of about 26 percent compared with the 53 percent back-test. This gap arises because the internal estimate treats the tournament-outcome and opponent models as perfectly accurate. The audit concludes that the method identifies genuine profit opportunities arising from non-equilibrium opponent behavior, but only after adjusting for tie-break rules, fee drag, local favorite saturation, and model uncertainty.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define the probability space. Let $\mathcal{G}$ denote the set of 63 tournament games and let $\mathcal{B}$ be a valid bracket outcome. For each game $g$ between team $i$ and team $j$, the win probability is modeled as

$$p_{ij} = \Phi\left(\frac{\Delta_{ij}}{\sigma}\right), \qquad \sigma = 11\ \text{points},$$

where $\Delta_{ij}$ is the Sagarin Predictor-derived expected score differential for team $i$ against team $j$, $\Phi$ is the standard normal CDF, and the unit of $\Delta_{ij}$ is points. [PAGE 1] The full bracket likelihood under the Markov assumption is

$$P(\mathcal{B}) = \prod_{g \in \mathcal{G}} p_{g}^{\mathbf{1}[g \in \mathcal{B}]} \bigl(1 - p_{g}\bigr)^{\mathbf{1}[g \notin \mathcal{B}]},$$

subject to bracket-consistency constraints (a team cannot advance without winning its predecessor). [PAGE 1]

Opponent advancement probabilities are derived from the public pick distribution $D$ using the Clair–Letscher (2007) method, producing a field of 200 synthetic opponent entries for each simulated year. [PAGE 1]

The ROI estimator for entry $e$ over $S = 10{,}000$ simulations is

$$\widehat{\mathrm{ROI}}_e = \frac{1}{S} \sum_{s=1}^{S} \frac{R_e^{(s)} - C}{C},$$

where $R_e^{(s)}$ is the prize money won by entry $e$ in simulation $s$, $C = \$5 \times 100 = \$500$ is the total exposed capital, and ROI is dimensionless (reported as a percentage). [PAGE 1]

Sequential hill-climb optimization is restricted to rounds $r \in \{4,5,6\}$:

$$e_{k+1} = \operatorname{HillClimb}\left(e_k,\{e_1,\dots,e_k\};\text{scores } 1,2,4,8,16,32\right), \quad k=1,\dots,100.$$

[PAGE 1]

Back-test inference uses the one-tailed statistic

$$t = \frac{\bar{x}}{s / \sqrt{10}}, \qquad p = P(T_{9} > t) = 0.032,$$

with $\bar{x} = \$263$, $s = \$396$, and $n=10$ years. [PAGE 1]

Optimism bias is quantified as

$$\mathrm{Bias}_{\mathrm{rel}} = \frac{72\% - 53\%}{72\%} \approx 0.26, \qquad \Delta_{\mathrm{abs}} = 19\ \text{percentage points}.$$

[PAGE 1]

Breakdown regimes. (i) Tie-break veto: replacing prize-splitting with closest-championship-score-guess tie-breaking increases $\sigma_{\mathrm{ROI}}$ above the back-test value while leaving $\mu_{\mathrm{ROI}}$ unchanged; the real-pool p-value may therefore exceed 0.05. (ii) Fee-drag veto: removing the 7–8 percent donut-party allocation scales ROI by approximately $1 - 0.075 = 0.925$. (iii) Perfect-model veto: internal estimates assume zero specification error; any deviation in the Sagarin-based win probabilities or in the opponent pick distribution invalidates the 72 percent ex-ante figure. (iv) Hometown saturation veto: if a local team wins and its opponent-sheet ownership share exceeds the model’s implied equilibrium, ROI can fall to $-100\%$, as observed in the worst back-test year. [PAGE 1]
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage extending from Metrick (1996), who modeled single-entry behavior using championship-game futures and actual pool brackets and identified the “hometown” effect, through Breiter and Carlin (1997), Kaplan and Garstka (2001), Clair and Letscher (2007), and Niemi et al. (2008). Clair and Letscher introduced the ENORM function for optimal bracket construction in large ESPN and Yahoo contests; the present study replaces ENORM with Monte Carlo estimation and extends the analysis to sequential multiple entries in a local office pool. [PAGE 1] Null (2016) later confirmed that hometown bias is real and can extend to an entire state or region, with intensity increasing for higher seeds. [PAGE 1]

The methodological genealogy reveals three multi-week traps. First, opponent modeling: Metrick (1996) and Niemi et al. (2008) relied on entries from the pools being analyzed, which are unavailable before entries close; substituting the ESPN/Yahoo pick distribution introduces a geographic distribution shift because local pools exhibit hometown over-betting that national contests do not fully capture. Second, temporal optimization: limiting the hill climb to the last three rounds assumes early-round outcomes are exogenous and that lower seeds should always win there; in reality, early upsets propagate path-dependence through the bracket and alter the value of late-round picks. Third, validation optimism: generating both the training set and the test set from the same assumed model produces an internal ROI estimate of 72 percent that overshoots the back-tested 53 percent by roughly 26 percent relative, a classic overfitting trap that worsens when the model is deployed ex-ante without a haircut. [PAGE 1]
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of pool participants, under the pressure of the Final Four and championship game, to revert to chalk favorites and to overweight the local team. This is the hometown effect operating under stress: opponent sheets cluster on Connecticut as champion, inflating the ownership share of the 32-point championship multiplier. [PAGE 1]

The counter-trap is the optimized portfolio’s second-order response: by deliberately under-weighting the over-backed local favorite in rounds 4–6, the entry captures contrarian value when the favorite loses and minimizes prize sharing when the favorite wins. The strategy profits when opponent behavior deviates from financial equilibrium, which the paper identifies as the core source of opportunity. [PAGE 1]

The clock constraint binds the counter-trap. Because only the last three rounds are optimized, early-round brackets are fixed to lower-seed defaults. If early upsets are non-random—for example, if key-player absences or travel effects generate systematic first-round surprises—the fixed early bracket misallocates points and erodes the late-round contrarian edge. Moreover, the pick distribution used to simulate opponents is available before entries close, but late-breaking roster information arrives after that clock has run out, creating an information asymmetry between the model and the realized tournament. [PAGE 1]
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: tournament games are played indoors under climate-controlled conditions; the source contains no weather-dependent outcome terms, so no meteorological veto applies to the Markov game model. [PAGE 1]

Biomechanical / player-availability layer: the authors explicitly propose improving the outcome model with information about absences of key players relative to the season. A formal veto condition is

$$\exists p \in \text{players}: \ A_p = 1 \quad\text{and}\quad \left|\Delta_{ij}^{\text{season}} - \Delta_{ij}^{\text{tournament}}(A)\right| > \tau,$$

where $A_p$ is an absence indicator, $\Delta$ denotes the Sagarin Predictor-derived expected differential, and $\tau$ is the model’s tolerance for specification error. If this condition holds, the transition probabilities $p_{ij}$ are biased and the bracket likelihood is invalid. [PAGE 1]

Institutional layer: two vetoes are documented. Tie-breaking in the real pool uses the closest championship score guess, whereas the back-test splits ties; this understates $\sigma_{\mathrm{ROI}}$ while keeping the mean unbiased, threatening the p-value of 0.032. The 7–8 percent donut-party fee is omitted from reported ROIs; removing it multiplies mean ROI by approximately $0.925$. [PAGE 1]

Opponent-distribution layer: using ESPN/Yahoo pick distributions as a surrogate for the local pool is vetoed whenever hometown bias $\beta_{\text{local}}$ differs from the national distribution by more than the model’s error tolerance; under that condition the contrarian optimization targets the wrong over-backed teams. [PAGE 1]

Adjudication: the back-test passes a nominal statistical screen ($p=0.032$) but fails robustness under real tie-breaking, fee drag, and local-favorite championship wins. Deployment should therefore require either a hedge on the local favorite or a reduced entry count when hometown saturation is high. [PAGE 1]
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Local-favorite championship veto. Condition: In a given tournament year, a local team (e.g., Connecticut) is over-backed relative to the ESPN/Yahoo pick distribution and wins the championship. Verifiable prediction: the 100-entry optimized portfolio records negative ROI for that year; in the worst case the ROI is $-100\%$, representing total loss of the $500 entry fees. The source confirms this pattern: two of the ten back-test years were negative, both were Connecticut championship years, and the worst year was a complete loss. [PAGE 1]

Scenario 2 — Tie-break variance veto. Condition: The real pool breaks ties by the closest championship score guess instead of dividing prize money. Verifiable prediction: the standard deviation of returns exceeds the back-test value of $396, the one-tailed t-test p-value rises above 0.05, and the nominal statistical significance of the strategy disappears. The source states that assuming prize division “has the effect of somewhat reducing the standard deviation of returns in this back-test relative to the real pool.” [PAGE 1]

Scenario 3 — Model-perfection optimism veto. Condition: An operator deploys the method ex-ante using only the internal 10,000-simulation ROI estimate without applying the back-test haircut. Verifiable prediction: expected ROI is overstated by approximately 19 percentage points in absolute terms (72 percent internal vs. 53 percent back-test), or about 26 percent relative; capital allocation based on the internal figure will be oversized by a factor of roughly $72/53 \approx 1.36$. The gap is attributable to the internal simulations’ assumption of perfect accuracy for both the tournament-outcome and opponent models. [PAGE 1]
</RLVR_COUNTERFACTUAL_VETOES>