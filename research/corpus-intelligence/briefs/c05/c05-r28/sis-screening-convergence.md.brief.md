# reasoning/sis-screening-convergence.md
## What it is (1-2 sentences)
A methods note on Sure Independence Screening (SIS) convergence for the symbolic-regression (SISSO/MOVE-37) program: how to choose the screening count k, why correlation floors fail on correlated pairs like yardline vs. distance, how multiple residuals recover correlated terms, and when to stop adding dimension — anchored to MOVE-37's measured AUC bars (identity 0.604, booster 0.627).
## Key metrics/methods (formulas where given, else "not specified")
SIS score: w_j = corr(phi_j, r_{n-1}); subspace S_n = k features with largest |w_j|; then l_0 combinatorial search inside S_n. Compressed-sensing starting guess from the 2018 paper: k ~ exp(#P / (kappa * n)), kappa in [1,10] — larger dimension forces SMALLER k (l_0 is combinatorial). Convergence protocol: fit n=1 at k in {200,500,1000}; record winning expression + residual; fit n=2 at same k values, one residual then ten residuals; converged = selected expressions + holdout residual do not move when k doubles. Multi-residual: SISSO++ scores each feature as max_i corr(phi, r^(i)) over the best r residuals — 50 residuals recovered a two-term toy that a single residual needed k>400 to see. Stop rule: next dimension's holdout gain inside SE of the last, or new descriptor is an operator costume of the last (e.g., sin(yardline) after yardline). TorchSISSO default k=20 flagged as a materials-lab default that silently misses distance (yardline vs distance is the canonical correlated pair). MOVE-37 bars: smooth two-feature identity AUC 0.604; booster AUC 0.627 — a SISSO model under 0.604 is not converged, it is under the identity.
## Data sources named
MOVE-37 program measurements (AUC 0.604 identity, 0.627 booster); TorchSISSO; SISSO++.
## Findings (numbers and facts, not vibes)
- k is a COUNT (nf_sis / n_sis), not a threshold — a correlation floor |w| > tau is optional and usually worse here because it drops the weaker of correlated pairs (yardline/yards-to-go) even when it is the orthogonal piece the residual needs.
- Convergence is operational: the plateau where doubling k no longer moves the expression or holdout residual IS the threshold.
- One residual + small k is how a correlated second term dies; the documented toy result: single residual needed k>400, fifty residuals recovered it.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: this is symbolic-regression methodology for the discovery lane (MOVE-37) — governs how feature constructions are searched without missing correlated pairs.
- TRUST-SIGNAL: the anti-underfitting honesty rule — a model below the measured identity AUC (0.604) is not converged; convergence must be demonstrated by plateau, not by looking finished.
- SCHEME: yardline vs. distance is the canonical correlated-context pair in drive/situational modeling.
## Engine-actionable? (yes/no + one-line what)
Yes — it sets the exact SIS protocol (k-sweep {200,500,1000}, multi-residual, plateau convergence, 0.604 AUC floor) that any SISSO/MOVE-37 feature search must follow before a discovered expression counts as a candidate part.
