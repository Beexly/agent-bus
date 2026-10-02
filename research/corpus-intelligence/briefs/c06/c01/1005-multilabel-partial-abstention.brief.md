# arxiv-program/research/2026-09-21/arxiv-deep/1005-multilabel-partial-abstention.md
## What it is (1-2 sentences)
A framework for multi-label classification with *partial abstention*: the model predicts only the labels it's certain enough about and abstains on the rest, under a generalized loss = original loss on predicted labels plus an abstention penalty. For decomposable losses (e.g. Hamming), the risk-minimizing rule is closed-form and O(m log m): sort labels by uncertainty u_i = 2·min(p_i, 1−p_i) and pick the optimal prediction size d by thresholding.
## Key metrics/methods (formulas where given, else "not specified")
- u_i = 2·min(p_i,1−p_i) (per-label uncertainty)
- L(y,ŷ) = ℓ(y_D,ŷ_D) + f(|A(ŷ)|); linear case L = ℓ + |A|·c, c∈[0,1]; concave f_2(a)=(a·m·c)/(m+a)
- Hamming risk-minimizer: d = |{i : min(p_i,1−p_i) ≤ c}| (pure threshold rule)
- Rank loss: optimal predicted set = top-d by p_i under label independence; F-measure generalized F_G with O(m³) maximizer
- Validation: 10-fold CV on six MULAN benchmarks (cal500, emotions, scene, yeast, mediamill, nus-wide); competitors share same BR+logistic-regression probabilities
## Data sources named
MULAN repository (cal500 502×68×174; emotions 593×72×6; scene 2407×294×6; yeast 2417×103×14; mediamill 43907×120×101; nus-wide 269648×128×81); base learner binary relevance + sklearn logistic regression
## Findings (numbers and facts, not vibes)
- Partial-abstention Hamming loss "often much lower" than both full prediction and full abstention across datasets (results are figure curves only — no numeric tables extracted; numbers not specified)
- As penalty c rises, loss rises and abstention rate falls; SEP converges to full-prediction performance at c=0.5, PAR at c=1 (sanity check: never abstain at max penalty)
- No significance tests reported; no exact loss values quotable
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: pick-pipeline mechanics — closed-form slate publish filter (publish the d most certain games, skip the rest), tuned to the marginal revenue cost of volume; concave-penalty variant matches board economics (first skipped game costs more than the tenth)
## Engine-actionable? (yes/no + one-line what)
Yes — sort slate games by uncertainty u_i, publish top-d via threshold d=|{i:min(p_i,1−p_i)≤c}| with c tuned on a prior season; ADOPT gate in file: ≥+2.0 pp hit rate vs publish-all, Wilcoxon p<0.05 over 18 weekly slates.
