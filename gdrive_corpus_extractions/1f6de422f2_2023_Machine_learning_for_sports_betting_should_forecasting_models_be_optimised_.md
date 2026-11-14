---
source: "2023 Machine learning for sports betting should forecasting models be optimised for accuracy or calibration - Walsh, Joshi.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 34
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5773
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided PDF text (Walsh & Joshi 2023, "Machine learning for sports betting: should forecasting models be optimised for accuracy or calibration?"). 

Strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. Wait, the source text constantly mentions "moneyline odds", "odds", "implied probability", etc. The invariant says "Never mention spreads, totals, moneylines, or odds." This is tricky because the source text is literally about betting odds. However, I must obey the system invariant: ZERO BETTING LINES. I should avoid using those terms or refer to them obliquely (e.g., "bookmaker prices", "market-implied probabilities", "wagering lines" -> no, "lines" is also betting. I should avoid "odds", "spreads", "totals", "moneylines". I can say "bookmaker's quoted prices", "implied probabilities from market quotes", etc. But the source text says "moneyline odds". I need to be careful not to reproduce those terms as betting lines. I can discuss the paper's content without using forbidden terms. Actually, the invariant says "Never mention spreads, totals, moneylines, or odds." So I must not write those words. I will use paraphrases like "market quotes", "bookmaker prices", "implied probabilities", "market-implied likelihoods", etc. But "odds" is forbidden. I'll avoid it entirely.

2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.

3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a long response (>1000 words total across sections). The THINK_TRACE must be >=400 words.

Key content from paper:
- Hypothesis: calibration > accuracy for sports betting.
- NBA data 2014/2015-2018/2019. Training: 2014/15-2015/16. Validation: 2016/17. Extended training: 2014/15-2016/17. Test: 2017/18. Final training: 2014/15-2017/18. Betting simulation: 2018/19 season. Closing market quotes from Westgate.
- Models: LR, RF, SVM, MLP.
- Metric: classwise-ECE (Eq 3). Accuracy branch maximizes accuracy.
- Feature selection: filter (Spearman >0.7 removed), wrapper SFS, embedded L1. Subset A optimal for both branches (avg classwise-ECE 5.06%, avg accuracy 66%).
- HPO: BO-TPE.
- Test set results: Calibration branch: SVM best with 3.49% classwise-ECE. Accuracy branch: LR best with 69.23% accuracy.
- Betting systems: 3 strategies x 4 Kelly fractions (full, half, quarter, eighth). Initial bankroll $10,000.
- Strategy 1: wager on all value bets. Calibration SVM: eighth-Kelly best ROI -28.18%. Accuracy LR: eighth-Kelly -36.42%. All negative.
- Strategy 2: avoid value bets where predicted prob exceeds implied prob by >10% (Ut=0.1). Accuracy LR half-Kelly ROI 222.84% (best for strategy 2). Calibration SVM eighth-Kelly 8.46%.
- Strategy 3: wager only on strong favourites (L=0.8). Calibration SVM full-Kelly ROI 902.01% (best overall). Accuracy LR eighth-Kelly 0.84%.
- Table 10: Strategy 3 avg ROI 209.18%, max 902.01%, best model calibration SVM, best rule full-Kelly.
- Table 11: Half-Kelly avg ROI 91.41%, max 574.41%. Full-Kelly avg 89.36%, max 902.01%.
- Table 14: Calibration-optimised SVM avg ROI 110.42%, max 902.01%. Accuracy-optimised LR avg ROI 2.98%, max 222.84%.
- Paired t-test: overall p=0.153 (fail to reject at 10%). Strategy 3 p=0.053 (reject at 10%).
- Kelly criterion Eq (1): k = (p*b - q)/b where b = odds - 1. Wait, paper defines b as potential winnings on wager of 1 unit i.e. odds - 1. But invariant says no "odds". I can write "b = \text{market quote} - 1" but avoid the word odds? Actually I can define b as the net payout per unit stake from the bookmaker's quote. I will not use the forbidden word.
- Eq (2): P(\hat{Y}=Y | \hat{P}=p) = p.
- Eq (3): classwise-ECE formula.
- Eq (4): LR probability. Eq (5): log-likelihood. Eq (6): SVM objective.
- Bankroll algorithm Table 1.

I must not mention "moneyline" or "odds" or "spreads" or "totals". I will refer to "bookmaker quotes", "market prices", "implied probabilities derived from quotes", etc.

Structure:
- Start with <THINK_TRACE>. Deep derivation. Discuss why calibration matters: expected value of a bet is positive when true probability > implied probability. Accuracy ignores probability distance. Example: 100 games at 60% predicted, all home win -> 100% accuracy but 0.6^100 ~ 0 chance if calibrated. Classwise-ECE bins predictions. Constraint: platykurtosis (excess kurtosis <= 0) to avoid predicting marginal class distribution. Kelly criterion sensitivity: bet size k is linear in edge (p - implied p) and inversely related to b. Miscalibration leads to overstaking on false edges -> ruin. Full Kelly can suggest near 100% bankroll -> almost sure ruin (Hsieh & Barmish cited). Fractional Kelly reduces risk. Gray-zone audit: single season simulation, 2018/19 NBA; Westgate closing quotes; no guarantee over other seasons; platykurtosis constraint somewhat arbitrary; paired t-test underpowered (n=12 systems per branch? Actually 3 strategies x 4 rules = 12 paired comparisons). p=0.153 overall, p=0.053 for strategy 3. Multiple comparisons problem. Data leakage? Feature engineering uses season-to-date averages; first 10 games excluded. Covariate shift via KS test at 1% level. Temporal integrity preserved (no shuffling). 

- <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define classwise-ECE Eq (3) with units (percentage points, bounded [0,1]). Define Kelly Eq (1) with units dimensionless fraction of bankroll. Define calibration Eq (2). Define LR Eq (4), log-likelihood Eq (5), SVM Eq (6). Cite pages: [PAGE 4] for Kelly, [PAGE 5] for calibration definition, [PAGE 5] for classwise-ECE, [PAGE 14] for betting algorithm, [PAGE 14] for strategy parameters, [PAGE 22] for Table 10/14 results, [PAGE 23] for t-test. Mention exact values: ROI 110.42% vs 2.98%; best case 902.01% vs 222.84%. Units: ROI is percentage change in bankroll, dimensionless %. Bankroll in USD ($10,000 initial). Breakdown regimes: full-Kelly singularity when edge large -> k -> 1 (or >1 if not capped?) leading to ruin; classwise-ECE degeneracy when predictions equal marginal distribution (curtailed by kurtosis constraint). 

- <RETROCAUSAL_GENEALOGY>: Historical lineage: Kelly Jr. 1956/2011 (information rate), Thorp 1975/2008 (blackjack, stock market), Rotando & Thorp 1992, Hsieh & Barmish 2015 (limitations of Kelly), Dotan 2020 (fractional Kelly in NBA), Hubáček et al. 2019 (decorrelation loss), Levitt 2004 (bookmaker strategies), Bunker & Thabtah 2019 (accuracy reasonable), Guo et al. 2017 (calibration), Kull et al. 2019 (classwise-ECE), Nixon et al. 2019 (ECE limitations), Darlington 1970 (kurtosis). Multi-week traps: temporal non-stationarity of NBA (roster changes, injuries, coaching), single-season overfitting, covariate shift across seasons, bookmaker adaptive pricing (Levitt: bookmakers may set "wrong" price to exploit bettor preferences), the gambler's ruin under full Kelly over a multi-week season.

- <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: bettors under stress revert to accuracy mindset (classification label) because it's cognitively simpler; counter-trap: the paper shows accuracy-optimised LR under strategy 3 nearly broke even or lost (full Kelly -77.97%) despite 85.14% win rate, because few bets (6.4%) and one big loss outsized impact. Calibration SVM under strategy 3 won 80% of only 2.16% of games but grew bankroll 10x. Clock: chronological ordering is sacred; no cross-validation shuffling; betting simulation iterates games in chronological order; bankroll path dependence means early large losses (full Kelly strategy 1) cannot be recovered; season-clock creates absorbing boundary at zero bankroll.

- <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. NBA is indoor, weather irrelevant. Biomechanical: player load, injuries, star player absence (BPM, DRBP features). Physical: back-to-back games, travel, altitude (not explicitly in paper but implied by team-level features). Veto proof: The model uses pre-game box score aggregates; it does not incorporate in-game events (star injury early in game) — a hard veto for live betting but not pre-game. The paper explicitly excludes in-game events (Page 3-4). Covariate shift veto: features failing KS test at 1% are dropped (Page 10). Kurtosis veto: if excess kurtosis > 0, classwise-ECE excluded from average (Page 11). Strategy 2 veto: Ut=0.1 prevents betting when model deviates >10% from market (Page 13). Strategy 3 veto: L=0.8 requires strong favourite (Page 13). These are the veto layers.

- <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just counterfactual vetoes. I'll frame as: (1) Full-Kelly under Strategy 1 on calibration SVM: predicted probability far exceeds implied probability on early losing bets -> bankroll hits absorbing zero boundary; prediction: system terminates before game 10. (2) Accuracy-optimised LR under Strategy 3 full-Kelly: 85.14% win rate but only 6.4% games bet; final single loss wipes out profit; prediction: path-dependent ruin despite high conditional accuracy. (3) Covariate shift on a feature like 3P% (dropped per Page 30 Table B.18): if included, distribution shift between training and 2018/19 simulation would invalidate classwise-ECE; prediction: calibration branch would select a spurious feature subset and ECE would rise above 5% on test set.

Word count: Need >1000 words total. THINK_TRACE >=400 words. I'll aim for ~1300-1600 words total.

Important: No forbidden words. I will scan for "odds", "spread", "total", "moneyline". I must not include them. The source text uses them but I will paraphrase.

Let's draft carefully.

THINK_TRACE (>=400 words):
Start: The central inferential problem is the mismatch between classification accuracy and decision-theoretic expected value under bookmaker pricing. Let p be the model's predicted probability of victory, and let \pi be the implied probability recovered from the bookmaker's quote. A wager has positive expected value iff p > \pi. Accuracy only thresholds at p=0.5 and discards the magnitude |p - \pi| and the calibration error |p - p_true|. Walsh & Joshi demonstrate this with a 100-game thought experiment [PAGE 5]: if a model assigns 60% to the home team in 100 games and the home team wins all 100, accuracy is 100%, yet the probability of that occurrence under true p=0.6 is 0.6^100 \approx 0, revealing severe miscalibration. Thus an accuracy-optimised selector can prefer a perfectly accurate but uncalibrated model.

Derivation of Kelly exposure: The Kelly fraction k = (p b - q)/b, with q=1-p and b the net payout per unit stake [PAGE 4]. k is linear in the edge p - \pi because the break-even implied probability satisfies p b - (1-p) = 0 => p = 1/(b+1) = \pi. Substituting, k = (p - \pi)(b+1)/b = (p - \pi)(1 + 1/b). Hence any calibration error \delta = p - p_true that shifts p across \pi creates a bet whose size scales with the miscalibration error. Under full Kelly (F=1), a sufficiently large spurious edge drives k toward the entire bankroll; Hsieh & Barmish (2015) note this leads to almost sure ruin [PAGE 4]. The empirical path confirms this: Strategy 1 full-Kelly calibration SVM crashes to zero within the first 10 games [PAGE 16-17].

Classwise-ECE formalism: [0,1] partitioned into M=20 bins. For class i, bin j weight |B_{j,i}|/n, observed frequency y_i(B_{j,i}), average predicted probability \bar{p}_i(B_{j,i}). Eq (3) averages |y_i - \bar{p}_i| weighted by bin mass. Lower bound 0, upper bound 1, interpretable as average percentage-point deviation [PAGE 5]. Degeneracy: predicting the marginal class distribution for every instance yields near-zero ECE but no discrimination. The authors impose platykurtosis: excess kurtosis of bin weights must be \le 0, else the ECE is excluded from the branch average [PAGE 5, 11].

Gray-zone audit: (i) Single-season betting simulation on 2018/19 NBA; no out-of-season replication, so season-specific variance is unquantified [PAGE 24-25]. (ii) Paired t-test uses n=12 paired systems per branch (3 strategies x 4 rules). Overall p=0.153 > 0.10 fails to reject H0; only Strategy 3 yields p=0.053 < 0.10 [PAGE 23]. This is a multiple-comparisons gray zone: the headline claim rests on a stratified subset that passes only at the 10% level. (iii) The platykurtosis constraint is described as "somewhat arbitrary" by the authors [PAGE 25]. (iv) Covariate shift screening via two-sample KS at 1% level drops features (e.g., 3P%) [PAGE 10, 30], but the test assumes training and validation distributions are approximately equal; covariate shift can still corrupt the 2018/19 simulation set because all features are standardised using prior-season distributions [PAGE 10].

Word count check: likely >400.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with LaTeX, page citations, units, breakdown regimes.

Eq (1) Kelly: k = (p b - q)/b, q=1-p. Units: k dimensionless [0,1] fraction of bankroll. b dimensionless net payout per unit stake. Breakdown: if p b - q < 0, no bet (negative edge). If b -> 0, k -> -infty? Actually b is net winnings on 1 unit, so b>0. If edge large, k can exceed 1 unless fractional Kelly applied. Singularity: full Kelly near 100% bankroll -> absorbing ruin boundary.

Eq (2) calibration: P(\hat{Y}=Y | \hat{P}=p) = p, \forall p \in [0,1]. Units: probability dimensionless. Breakdown: estimated conditionally on finite bins; exact equality impossible with finite data.

Eq (3) classwise-ECE: \text{classwise-ECE} = \frac{1}{k} \sum_{i=1}^{k} \sum_{j=1}^{M} \frac{|B_{j,i}|}{n} |y_i(B_{j,i}) - \bar{p}_i(B_{j,i})|. Units: percentage points (bounded [0,1] or [0%,100%]). M=20 bins [PAGE 6]. Breakdown: degeneracy when predictions match marginal class distribution; addressed by kurtosis constraint (excess kurtosis \le 0) [PAGE 11].

Eq (4) LR: P(Y_i=C|X_i) = exp(X_i \beta) / (1 + exp(X_i \beta)). Units: probability [0,1]. 
Eq (5) log-likelihood: L = - \sum {y_i \log f(X_i\beta) + (1-y_i)\log(1-f(X_i\beta))}. Units: nats (logarithmic). 
Eq (6) SVM: L = argmin_w (1/n \sum max{0, 1 - y_i f(x_i)} + C w^T w). Units: hinge loss dimensionless + regularisation.

Betting algorithm Table 1 [PAGE 13]: Bankroll update B_{t+1} = B_t - Stake + (Win ? Stake \times \text{quote} : 0). Actually winnings = Stake * quote - Stake, then bankroll = bankroll + Stake + Winnings = bankroll + Stake*quote. Net change = Stake*(quote - 1) on win, -Stake on loss.

Strategy parameters Table 2 [PAGE 14]: Strategy 1: L=0, Lt=0, Ut=1. Strategy 2: L=0, Lt=0, Ut=0.1. Strategy 3: L=0.8, Lt=0, Ut=1.

Results table values [PAGE 22, 23]: Calibration SVM avg ROI 110.42%, max 902.01%. Accuracy LR avg ROI 2.98%, max 222.84%. ROI = (B_final - B_0)/B_0 * 100%, B_0 = $10,000 [PAGE 12].

RETROCAUSAL_GENEALOGY:
Historical lineage: Kelly (1956/2011) information rate -> bankroll growth; Thorp (1975, 2008) blackjack/stocks; Rotando & Thorp (1992); Hsieh & Barmish (2015) limitations; Dotan (2020) fractional Kelly in NBA (5th Kelly ROI >98%, full Kelly to zero). Levitt (2004) bookmaker pricing: equalise action or outperform bettors; may set "wrong" price to exploit preferences; shrewd bettors capitalise. Hubáček et al. (2019) decorrelation loss beats accuracy; model useless if coincides with bookmaker. Guo et al. (2017) calibration; Kull et al. (2019) classwise-ECE beyond temperature scaling; Nixon et al. (2019) ECE ignores other classes; Darlington (1970) kurtosis misconception. Bunker & Thabtah (2019) accuracy reasonable for outcome prediction, but Walsh & Joshi argue insufficient for betting.

Multi-week traps: Temporal non-stationarity: NBA rosters, injuries, coaching changes across seasons mean a model trained on 2014-2018 may not transfer to 2018/19 or beyond. Bookmaker adaptation: Levitt notes bookmakers can set deliberately wrong prices; if calibration-optimised betting becomes widespread, quotes adjust, eroding edges. Path dependence: Kelly betting over a season is multiplicative; early ruin (full Kelly Strategy 1) is absorbing; no re-entry. Sample-path trap: one season (2018/19) may be idiosyncratic (e.g., specific team variance, referee trends). Covariate shift trap: feature distributions drift; KS screening at 1% may miss subtle shifts that accumulate over a multi-week simulation.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: Under drawdown, a bettor regresses to accuracy because it is computationally and cognitively cheaper (predict label, not probability distribution). The accuracy-optimised LR achieves 69.23% test accuracy [PAGE 15] yet under Strategy 3 full-Kelly loses 77.97% [PAGE 22] because it bets rarely (6.4% of games) and one late loss wipes out gains. Counter-trap: calibration-optimised SVM wins only 80% of a tiny 2.16% slice of games under Strategy 3 but compounds to +902.01% [PAGE 21-22]. The counter-trap is that high conditional win rate (85.14% for LR) does not imply bankroll survival when exposure is sparse and leveraged. Clock: The chronological constraint is absolute [PAGE 3-4, 12]; no shuffling/cross-validation. The bankroll clock is path-dependent; the absorbing barrier at B_t=0 means the order of wins and losses is as important as the win rate. Strategy 1 full-Kelly calibration SVM experiences an immediate crash (games 0-10) and never recovers [PAGE 16], illustrating that the clock's early ticks can terminate the process before the law of large numbers operates.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: NBA games are indoor; weather is a null veto (not a factor). Travel/back-to-backs and altitude are physical confounders not explicitly modeled in the paper's feature set [PAGE 9-10]. Biomechanical/player layer: Star-player injury and absence of strong rebounders alter outcomes [PAGE 3, 9]; the model proxies this via BPM and defensive rebound percentage features derived from starters' season-to-date averages [PAGE 9]. However, in-game events (e.g., early injury) are explicitly excluded [PAGE 3-4], constituting a hard veto for live/in-play betting but not for pre-game closing-quote simulation. Veto proof: Because the simulation uses pre-game predictions and closing quotes only, the physical/biomechanical layer is screened out by design; the veto is structural, not statistical.

Statistical/mechanical vetoes: (1) Covariate shift veto: two-sample KS test at \alpha=0.01 drops features whose training/validation distributions differ [PAGE 10]; Table B.18 drops 3P% for covariate shift [PAGE 30]. (2) Kurtosis veto: excess kurtosis > 0 of bin weights excludes that classwise-ECE from branch averaging [PAGE 11]; prevents degenerate marginal-distribution predictions. (3) Strategy 2 veto: Ut=0.1 excludes any wager where predicted probability exceeds implied probability by >0.10 [PAGE 13, Table 2], guarding against unobserved information asymmetry (bookmaker may know of personal difficulties affecting performance) [PAGE 13]. (4) Strategy 3 veto: L=0.8 restricts wagers to strong favourites only [PAGE 13], reducing sample size but increasing conditional precision; creates a sparse-betting regime where one loss has outsized impact [PAGE 21-22]. These vetoes are cross-layer because they operate on data (KS), model output (kurtosis), and decision rule (L, Ut) simultaneously.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions.

Scenario 1: Full-Kelly absorbing barrier under Strategy 1. If the calibration-optimised SVM emits p > \pi on an early game where the true outcome is a loss, full Kelly stakes k\approx 1 of B_0. Prediction: bankroll B_t reaches the absorbing zero boundary within the first 10 games, consistent with Figure 3's "instant crash" [PAGE 16-17]. Verifiable: re-run simulation with F=1, Strategy 1, calibration SVM; assert B_t = 0 for some t \le 10 and ROI = -100%.

Scenario 2: Sparse-bet path dependence under Strategy 3. Accuracy-optimised LR bets on only 6.4% of games but wins 85.14% of them; full-Kelly loses half the bankroll early, recovers to ~$22,500, then loses the final bet, finishing at -77.97% [PAGE 21-22]. Prediction: if the final game's outcome is flipped (win instead of loss), ROI jumps from -77.97% to strongly positive; the system's expected ROI is dominated by the terminal game, violating ergodicity. Verifiable: flip the label of the last game in the 2018/19 set for the LR full-Kelly Strategy 3 path and recompute B_final; assert \Delta ROI > 300 percentage points.

Scenario 3: Covariate-shift feature inclusion veto. 3P% is dropped prior to feature selection because KS test indicates covariate shift [PAGE 30, Table B.18]. Prediction: if 3P% is forcibly retained, the calibration branch's classwise-ECE on the 2017/18 test set would exceed the reported 5.06% average for subset A [PAGE 15, Table C.21] because the feature's distribution in 2018/19 differs from training. Verifiable: train with 3P% included, compute classwise-ECE on test set; assert ECE > 5.06% and that subset A is no longer optimal under calibration.

I need to ensure total word count >1000. Let's write.

I will avoid the forbidden words completely. I will not write "odds", "spread", "total", "moneyline". I'll use "bookmaker quote", "market quote", "implied probability", "price", "wagering market". Wait, "price" might be okay but could be associated. It's not in the forbidden list. The forbidden list: spreads, totals, moneylines, odds. So "price" is okay. "Implied probability" is okay (it's not "odds"). "Bookmaker's implied probability" is okay. But the phrase "moneyline odds" is forbidden. I will not use it.

Let's write carefully and then check word count. I'll aim for about 1500+ words.

I should also include exact [PAGE N] markers and verbatim quotes where appropriate. The user asked "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should quote some phrases.

Verbatim quotes:
- [PAGE 5]: "perfectly accurate, but uncalibrated"
- [PAGE 4]: "almost sure ruin"
- [PAGE 25]: "somewhat arbitrary"
- [PAGE 16]: "bankroll instantly crash"
- [PAGE 12]: "Beginning with an initial bankroll of $10,000"
- [PAGE 22]: "ROI of 902.01%"

I'll incorporate these.

Now write the final response with XML sections.

Double-check invariant: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I will not use these words.

Double-check invariant: "ZERO TOY EQUATIONS: Never invent fake ratios... State formal LaTeX equations..." All equations are from the paper. Good.

Double-check word count: I need to count roughly. THINK_TRACE ~500 words. SOURCE_OPERATORS ~400 words. RETROCAUSAL ~250. RECURSIVE ~250. CROSS_LAYER ~200. RLVR ~200. Total ~1800. Good.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The central inferential problem in Walsh & Joshi is the mismatch between classification accuracy and decision-theoretic expected value under bookmaker pricing. Let p denote the model’s predicted probability of victory and \pi the implied probability recovered from the bookmaker’s quote. A wager carries positive expected value iff p > \pi. Accuracy merely thresholds at p = 0.5 and discards both the margin |p - \pi| and the calibration error |p - p_{true}|. The authors illustrate this failure mode with a 100-game thought experiment [PAGE 5]: if a model assigns the home team a 60% chance in 100 games and the home team wins all 100, accuracy is 100%, yet the probability of that occurrence under true p = 0.6 is 0.6^{100} \approx 0, proving the model is “perfectly accurate, but uncalibrated” [PAGE 5]. An accuracy-optimised selector can therefore prefer a model whose predicted label is right but whose probability vector is far from the truth.

Kelly exposure amplifies this defect. The Kelly fraction is k = (p b - q) / b, with q = 1 - p and b the net payout per unit stake [PAGE 4]. Because the break-even condition p b - (1 - p) = 0 implies p = 1 / (b + 1) = \pi, substitution yields k = (p - \pi)(1 + 1/b). Hence k scales linearly with any miscalibration error that pushes p across \pi. Under full Kelly (F = 1), a sufficiently large spurious edge drives k toward the entire bankroll; Hsieh & Barmish (2015) warn this leads to “almost sure ruin” [PAGE 4]. The empirical path confirms it: under Strategy 1, the calibration-optimised SVM’s full-Kelly bankroll “instantly crash[es]” within the first 10 games and never recovers [PAGE 16-17].

Classwise-ECE formalises the calibration target. The interval [0, 1] is split into M = 20 bins. For class i, each bin j has mass |B_{j,i}| / n, observed frequency y_i(B_{j,i}), and mean predicted probability \bar{p}_i(B_{j,i}); Eq. (3) averages |y_i - \bar{p}_i| weighted by bin mass [PAGE 5-6]. The metric is bounded [0, 1] and readable as an average percentage-point deviation [PAGE 5]. A known degeneracy exists: predicting the marginal class distribution for every instance can drive ECE near zero without any discriminative power [PAGE 5]. The authors counter this with a platykurtosis constraint: if the excess kurtosis of bin weights exceeds 0, that classwise-ECE is excluded from the branch average [PAGE 5, 11].

Gray-zone audit. (i) Single-season exposure: the betting simulation uses only the 2018/19 NBA season, so season-specific variance is never replicated across years [PAGE 14, 24-25]. (ii) The paired t-test compares n = 12 paired systems per branch (3 strategies × 4 Kelly fractions). Overall p = 0.153 > 0.10 fails to reject H_0 : \mu_C = \mu_A [PAGE 23]. Only the Strategy 3 subset yields p = 0.053 < 0.10, which is a multiple-comparisons gray zone because the headline claim leans on a stratified slice passing only at the 10% level. (iii) The authors describe the platykurtosis constraint as “somewhat arbitrary” [PAGE 25]. (iv) Covariate shift is screened with a two-sample Kolmogorov-Smirnov test at \alpha = 0.01, dropping features such as 3P% [PAGE 10, 30], yet the standardisation assumes training and simulation distributions are approximately equal; unmeasured drift can still corrupt the 2018/19 path [PAGE 10].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Eq. (1) Kelly fraction [PAGE 4]:
k = \frac{p b - q}{b}, \qquad q = 1 - p.
Units: k is a dimensionless fraction of bankroll; b is dimensionless net payout per unit stake. Breakdown: if p b - q < 0 the edge is negative and no bet is placed; under full Kelly, a large positive edge pushes k toward 1.0, creating an absorbing ruin boundary at B_t = 0.

Eq. (2) Calibration definition [PAGE 5]:
P(\hat{Y} = Y \mid \hat{P} = p) = p, \quad \forall p \in [0, 1].
Units: both sides are probabilities on [0, 1]. Breakdown: exact equality is unattainable with finite samples; it is evaluated only after binning predictions.

Eq. (3) Classwise Expected Calibration Error [PAGE 5-6]:
\text{classwise-ECE} = \frac{1}{k} \sum_{i=1}^{k} \sum_{j=1}^{M} \frac{|B_{j,i}|}{n} \left| y_i(B_{j,i}) - \bar{p}_i(B_{j,i}) \right|.
Units: percentage points, bounded [0, 1] or [0%, 100%]; M = 20 bins [PAGE 6]. Breakdown: degeneracy occurs when predictions equal the marginal class distribution; cured by requiring excess kurtosis of bin weights \le 0 [PAGE 11].

Eq. (4) Logistic regression probability [PAGE 10]:
P(Y_i = C \mid X_i) = \frac{\exp(X_i \beta)}{1 + \exp(X_i \beta)}.
Units: output probability in [0, 1]. Eq. (5) log-likelihood [PAGE 10]:
L(\beta \mid D) = - \sum_{i=1}^{n} \left\{ y_i \log[f(X_i \beta)] + (1 - y_i) \log[1 - f(X_i \beta)] \right\}.
Units: nats. Eq. (6) SVM primal objective [PAGE 10]:
L = \arg\min_w \left( \frac{1}{n} \sum_{i=1}^{n} \max\{0, 1 - y_i f(x_i)\} + C w^T w \right).
Units: hinge loss is dimensionless; C is a regularisation hyperparameter.

Betting simulation operator [PAGE 12-14, Table 1]: initial bankroll B_0 = \$10,000 [PAGE 12]. For each game chronologically, if the predicted probability exceeds the implied probability by more than L_t but less than U_t and p > L, a stake is removed; on a win the bankroll increases by stake \times quote, on a loss it decreases by stake. ROI = (B_{\text{final}} - B_0) / B_0 \times 100%.

Strategy parameters [PAGE 14, Table 2]: Strategy 1: L = 0, L_t = 0, U_t = 1. Strategy 2: L = 0, L_t = 0, U_t = 0.1. Strategy 3: L = 0.8, L_t = 0, U_t = 1.

Empirical results [PAGE 22-23, Tables 10 & 14]: Calibration-optimised SVM average ROI = 110.42%, maximum = 902.01%; accuracy-optimised LR average ROI = 2.98%, maximum = 222.84%. Under Strategy 3, the calibration-optimised SVM wagers on only 2.16% of games, wins 80% of them, and the full-Kelly variant finishes at \$100,200.96 [PAGE 22].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Kelly Jr. (2011 reprint of 1956), who framed optimal bet sizing as maximising the expected logarithm of wealth [PAGE 4]. Thorp extended this to blackjack and securities markets (1975, 2008), and Rotando & Thorp (1992) examined the stock-market analogue [PAGE 4]. Hsieh & Barmish (2015) identified the crucial limitation: full Kelly can recommend wagering a very large proportion of bankroll on a single gamble, producing “almost sure ruin” in volatile domains [PAGE 4]. Dotan (2020) applied fractional Kelly to NBA markets, showing a “5th Kelly” earned over 98% ROI while full Kelly crashed to zero [PAGE 4]—a direct precedent for the half-, quarter-, and eighth-Kelly rules tested here.

On the bookmaker side, Levitt (2004) argued that sportsbooks profit either by equalising action on both sides or by systematically outperforming bettors in outcome forecasting, and may deliberately set “wrong” prices to exploit bettor preferences; shrewd bettors can capitalise when quotes deviate from true probabilities [PAGE 2-3]. Hubáček et al. (2019) showed that a loss function penalising correlation with bookmaker quotes outperforms accuracy optimisation, and that a highly accurate model is useless if it coincides with the bookmaker’s model [PAGE 3]. Bunker & Thabtah (2019) deemed classification accuracy reasonable for pure outcome prediction [PAGE 3], but Walsh & Joshi contend accuracy is insufficient when the decision rule depends on predicted probabilities [PAGE 1-2].

On the metrology side, Guo et al. (2017) established modern calibration theory for neural networks [PAGE 5]; Kull et al. (2019) proposed classwise-ECE to overcome the limitation that classical ECE ignores all but the most likely class [PAGE 5-6]; Nixon et al. (2019) noted that ECE disregards calibration across the K-1 non-predicted classes [PAGE 6]. Darlington (1970) cautioned that kurtosis is not truly “peakedness,” which underpins the authors’ use of excess kurtosis as a guard against degenerate bin concentration [PAGE 11].

Multi-week traps. First, temporal non-stationarity: NBA rosters, injuries, and coaching change across seasons, so a model trained on 2014/2015–2017/2018 may not transfer to later years; the single-season 2018/19 simulation cannot bound this variance [PAGE 14, 24-25]. Second, bookmaker adaptation: if calibration-optimised bettors systematically exploit mispriced quotes, Levitt’s framework implies quotes will adjust and edges will erode [PAGE 2-3]. Third, path dependence: Kelly bankroll evolution is multiplicative, and the absorbing barrier at B_t = 0 means early ruin under full Kelly (Strategy 1) terminates the process before the law of large numbers can operate [PAGE 16-17]. Fourth, covariate-shift accumulation: feature distributions are standardised using prior-seasons’ parameters, and subtle drift over a multi-week simulation can invalidate the calibration target even if KS tests at \alpha = 0.01 passed during development [PAGE 10].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes a bettor’s tendency under drawdown to abandon probability forecasting and revert to label prediction—choosing the team more likely to win rather than estimating p—because accuracy is cognitively cheaper and socially legible. The accuracy-optimised LR exhibits this trap: it posts a respectable 69.23% test accuracy [PAGE 15], yet under Strategy 3 full Kelly it loses 77.97% of its bankroll [PAGE 22]. The mechanism is sparse exposure: the LR bets on only 6.4% of games, wins 85.14% of those, but one late, leveraged loss wipes out accumulated profit [PAGE 21-22]. High conditional accuracy does not imply bankroll survival when bet frequency is low and stake size is aggressive.

The counter-trap is the calibration-optimised SVM under Strategy 3. It wagers on just 2.16% of games and wins 80% of them, yet compounds to \$100,200.96 from a \$10,000 start, a 902.01% ROI [PAGE 22]. The model is correct less often than the accuracy-optimised LR (80% vs 85.14%), but its predicted probabilities are close enough to true probabilities that the Kelly stake sizes are well-calibrated to the edge, and the sequence of wins and losses avoids the absorbing zero boundary. The recursive theory of mind here is that a bettor modelling the bookmaker must second-guess not only the game outcome but also the bookmaker’s implied probability and their own probability error; optimising for accuracy collapses this recursion to a single bit (win/loss), discarding the gradient information required for stake sizing.

Clock: chronological ordering is non-negotiable [PAGE 3-4, 12]. Cross-validation shuffling is explicitly rejected because upcoming matches must be predicted from past data only [PAGE 3]. The betting simulation iterates games in season order, making the bankroll a path-dependent stochastic process. The “clock” is therefore an absorbing-boundary clock: early losses under full Kelly (games 0–10 in Figure 3) end the experiment regardless of later expected value [PAGE 16-17]. A model that is accurate on average but poorly timed in its errors will be ruined by the clock before it can profit from its accuracy.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NBA games are played indoors, so weather is a null veto; it cannot alter the pre-game simulation. Travel, back-to-back scheduling, and altitude are physical confounders, but the paper’s feature set is built from season-to-date box-score differences and starter-level metrics, not real-time physiological load [PAGE 9-10]. Biomechanical/player layer: the absence of a star player or a strong rebounder can shift outcomes, and defensive rebounds are cited as a strong predictor of victory [PAGE 3, 9]. The model proxies this influence through Box Plus/Minus and defensive rebound percentage averaged over starters’ season-to-date values [PAGE 9]. However, in-game events—such as an early injury to a star player—are explicitly excluded because the system is pre-game and batch-processed [PAGE 3-4]. This is a structural veto: the physical/biomechanical layer is screened out by design for the closing-quote simulation, though it would veto any live-betting extension.

Statistical vetoes operate cross-layer. (1) Covariate-shift veto: features whose training and validation distributions differ by a two-sample Kolmogorov-Smirnov test at \alpha = 0.01 are dropped before feature selection [PAGE 10]; Table B.18 removes 3P% for covariate shift [PAGE 30]. (2) Kurtosis veto: if excess kurtosis of bin weights exceeds 0, that classwise-ECE is excluded from the branch average, preventing a degenerate model that predicts the marginal class distribution [PAGE 11]. (3) Strategy 2 veto: U_t = 0.1 prohibits any wager where the predicted probability exceeds the implied probability by more than 0.10, guarding against unobserved information asymmetry (e.g., the bookmaker may know of off-court issues affecting performance) [PAGE 13, Table 2]. (4) Strategy 3 veto: L = 0.8 restricts wagers to strong favourites only, sharply reducing the number of bets but increasing conditional precision; this creates a sparse-betting regime where one loss has outsized bankroll impact [PAGE 13, 21-22]. These vetoes are simultaneously data-layer (KS), output-layer (kurtosis), and decision-layer (L, U_t) constraints, and together they define the boundary conditions under which the reported ROIs are valid.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Full-Kelly absorbing barrier under Strategy 1. If the calibration-optimised SVM emits p > \pi on an early game that is actually a loss, the Kelly fraction k approaches the entire bankroll. Prediction: bankroll B_t reaches the absorbing zero boundary within the first 10 games, consistent with the reported “instant crash” [PAGE 16-17], and ROI = -100%. Verifiable: re-run the simulation with F = 1, Strategy 1, calibration SVM; assert B_t = 0 for some t \le 10.

Scenario 2 — Sparse-bet path dependence under Strategy 3. The accuracy-optimised LR bets on 6.4% of games, wins 85.14%, loses half its bankroll early, recovers to roughly \$22,500, then loses the final bet and finishes at -77.97% [PAGE 21-22]. Prediction: flipping the label of only the final game in the 2018/19 set transforms the terminal loss into a win and raises ROI by more than 300 percentage points, demonstrating that expected ROI is dominated by a single late-game path event rather than by average accuracy. Verifiable: invert the outcome of the last game for the LR full-Kelly Strategy 3 path and recompute B_{\text{final}}; assert \Delta \text{ROI} > 300 percentage points.

Scenario 3 — Covariate-shift feature inclusion veto. The feature 3P% is dropped prior to feature selection because the KS test detects covariate shift [PAGE 30, Table B.18]. Prediction: forcibly retaining 3P% inflates the calibration branch’s test-set classwise-ECE above the reported 5.06% average for subset A [PAGE 15, Table C.21], because its distribution in the 2018/19 simulation window differs from training; subset A would cease to be optimal under calibration. Verifiable: train with 3P% included, compute classwise-ECE on the 2017/18 test set; assert ECE > 5.06% and that the optimal calibration feature subset changes.
</RLVR_COUNTERFACTUAL_VETOES>