# arxiv-program/research/2026-09-21/arxiv-deep/1148-consistent-multiclass-reject-option.md
## What it is (1-2 sentences)
Deep read of arXiv:1505.04137 (Ramaswamy, Tewari, Agarwal 2015, "Consistent Algorithms for Multiclass Classification with a Reject Option"). Proves consistency of three convex surrogates for n-class classification with an abstain action at cost alpha, including the new BEP surrogate that needs only ceil(log2 n) dimensions instead of n; verdict ADAPT as the machinery for abstention over multi-outcome markets (TD-scorer boards, exact-score bands).
## Key metrics/methods (formulas where given, else "not specified")
- abstain(alpha) loss: 1 if t != y (t != n+1), alpha if t = n+1, 0 if t = y. Bayes rule: h*(x) = argmax_y p_x(y) if max p >= 1-alpha else abstain; meaningful alpha in [0,(n-1)/n]; paper focuses alpha=1/2.
- Three consistent surrogates (alpha=1/2): (a) Crammer-Singer psi^CS(y,u) = (max_{j!=y} u_j - u_y + 1)_+, pred = argmax if u_(1) - u_(2) > tau_CS else abstain; (b) OVA hinge psi^OVA(y,u) = sum_i [1(y=i)(1-u_i)_+ + 1(y!=i)(1+u_i)_+]; (c) BEP: encode class y as d=ceil(log2 n)-bit code B(y) in {+-1}^d; psi^BEP(y,u) = (max_j (-B_j(y)*u_j) + 1)_+; pred = abstain if min_j |u_j| <= tau else B^{-1}(sign(u)).
- Excess risk bounds: er^l_D[pred o f] - er^{l,*}_D <= (er^psi_D[f] - er^{psi,*}_D)/(2min(tau,1-tau)) (BEP/CS) and /(2(1-|tau_OVA|)) (OVA) - linear calibration => consistency.
- CC-dimension of abstain loss <= ceil(log2 n), vs >= n-1 for standard n-class (surprising result).
- Generalized surrogates consistent for any alpha in [0,1/2] (Theorem 3); n=2 reduces to (generalized) hinge.
- BEP optimization: block coordinate ascent on dual with O(d) per-iteration l1-ball projections (Duchi et al. 2008).
- Assumptions: i.i.d. data; tau tuned by CV; alpha > 1/2 never Bayes-optimal to abstain.
## Data sources named
Synthetic: 8 classes in R^2, 12,800 train / 10,000 test; class prototypes ~ N(0,I_2), instances = prototype + 0.65*N(0,I_2). UCI: satimage (4,435/2,000, 36 feats, 6 classes), yeast (1,000/484, 8, 10), letter (16,000/4,000, 16, 26), vehicle (700/146, 18, 4), image (2,000/310, 19, 7), covertype (15,120/565,892, 54, 7). Gaussian-kernel RKHS; 10-fold CV; rejection fixed at 0%/20%/40% via tau. No code released; OVA/CS via Joachims' SVM-light.
## Findings (numbers and facts, not vibes)
- Error % at reject 0% / 20% / 40% (CS | OVA | BEP): satimage 10.25/8.3/8.15 -> 5.6/2.5/2.4 -> 2.9/0.9/0.6; yeast 44.4/38.8/42.7 -> 34.5/26/29.7 -> 24/17/19.8; letter 4.8/2.8/4.6 -> 1.4/0.1/0.6 -> 0.4/0/0.1; vehicle 31.5/17.1/20.5 -> 24.6/8.2/13 -> 16.4/5.5/6.1; image 5.8/5.1/4.2 -> 2.2/1.6/1.6 -> 0.6/0.6/0.3; covertype 32.2/28.1/29.4 -> 23.6/19.3/20.4 -> 16.3/11.7/12.8.
- BEP ~= OVA accuracy, both beat CS; BEP fastest: letter train 9,608s (CS) / 1,055s (OVA) / 313s (BEP); covertype 47,974s / 23,709s / 6,786s. BEP weak with linear function class (needs kernel).
- Learning curves: all three approach Bayes risk at intermediate tau; degenerate tau (0/1) never abstains, performs poorly.
- Limitations: consistency is asymptotic; log(n) advantage is computational not statistical; tau still tuned post-hoc; alpha <= 1/2 for the piecewise-linear surrogates; no GSE-domain validation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: abstention machinery for multi-outcome betting markets; alpha-as-abstain-cost formalism as principled alternative to fixed edge thresholds (set alpha from staking economics); complements binary pick-abstention (brief 1146).
## Engine-actionable? (yes/no + one-line what)
Yes — prototype multi-outcome abstention on anytime-TD-scorer (13 classes + abstain, alpha ~= 0.2-0.3 from economics) vs fixed-threshold baseline on 2023-2024 ROI, ~1 week; ADOPT only if surrogate abstention beats fixed-threshold ROI by >=2 points at matched abstention rates (>=2 rates), BEP and OVA agree on >=80% of abstain decisions, and abstain rate doesn't collapse on any team/season slice.
