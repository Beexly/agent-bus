# arxiv-program/research/2026-09-21/arxiv-deep/1500-the-optimal-betting-wealth-growth-rate.md
## What it is (1-2 sentences)
An assumption-free characterization of the maximal asymptotic Kelly growth rate as the inf-KL rate to the bipolar of the null class (Theorem 3.5), with the KLinf identity restored under weak lower semicontinuity/weak compactness (Theorem 4.1), and a counterexample where KLinf > 0 but every e-process grows at rate ≤ 0. Gives GSE the information-theoretic ceiling on growth as a function of edge separation and quantifies the growth lost to model-class uncertainty (the inf-KL vs KLinf gap).
## Key metrics/methods (formulas where given, else "not specified")
- Polar/bipolar: S° = valid e-variables; S°° = "effective null" (TV-closed convex enlargement of S)
- inf-KL: a_n(Q,P) = inf_{R∈(Pⁿ)°°} KL(Qⁿ‖R), superadditive ⇒ d_inf-KL = lim (1/n)a_n exists (Fekete)
- Theorem 3.5: sup over wealth processes of limsup (1/n)E_Q[log W_n] = d_inf-KL; achieved by repeating near-optimal m-block e-variable
- Theorem 4.1: if inf_{P∈P} KL(R‖P) is weakly l.s.c. at Q ⇒ lim (1/n)·inf-KL(Qⁿ,Pⁿ) = KLinf(Q,P); (1/n)·inf-KL ≤ KLinf always
- Composite Q: d_rob = limsup (1/n)·sup_{E∈(Pⁿ)°} inf_{Q∈Q} E[log E]; d_rob ≤ d_wc, equality for finite Q or sub-exponential covering; test supermartingales suffice on block filtrations (Sec 7)
- Power-one testing ⟺ positive rate (Theorem 3.14); binary KL D(p‖q) = p log(p/q) + (1−p) log((1−p)/(1−q))
## Data sources named
None (pure theory; analytic counterexamples, e.g. Prop. 5.4)
## Findings (numbers and facts, not vibes)
- d_inf-KL ≤ KLinf always, strict in general; Prop. 5.4 counterexample is the headline warning (KLinf>0, achievable rate 0)
- All results asymptotic (n→∞); i.i.d. assumed (sports outcomes aren't); bipolar uncomputable in practice; no finite-sample e-variable construction algorithm; no prescription for choosing P
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: sizing theory — translate the bipolar gap into a principled Kelly haircut: edge D(p̂‖q) per bet, null class P = distributions consistent with calibration-error bars, gap becomes a fractional-Kelly multiplier derived from uncertainty-class width rather than an arbitrary 0.25/0.5; block (weekly-slate) sizing mirroring blockwise test supermartingales
## Engine-actionable? (yes/no + one-line what)
Yes — implement uncertainty-haircut Kelly (~1 week: Kelly fraction × shrinkage from calibration-error width); gate: on 2024 test achieves ≥90% of full Kelly's log-growth with ≤70% of max drawdown; reject if indistinguishable from fixed 0.25 fraction.
