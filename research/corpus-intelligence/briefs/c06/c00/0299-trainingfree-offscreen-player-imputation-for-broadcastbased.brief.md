# arxiv-program/research/2026-09-21/arxiv-deep/0299-trainingfree-offscreen-player-imputation-for-broadcastbased.md
## What it is (1-2 sentences)
Deep read of Choi (2026, arXiv:2607.11548): training-free, online, causal imputation of off-screen players for broadcast-based spatial football analytics, with a simulated-viewport benchmark over full-pitch tracking. Verdict in file: ADAPT — port the B4 role-anchored centroid voting method and the simulated-viewport benchmark protocol into GSE broadcast-tracking work (NGS-replacement lane); reject the soccer pitch-control application itself.
## Key metrics/methods (formulas where given, else "not specified")
- B4 role-anchored centroid voting: ĉ(t) = (1/|V_t|) Σ_{i∈V_t} (p_i(t) − off_i(t⁻)); off_i(t) ← EMA[p_i(t) − ĉ(t)] (EMA weight 0.1/step); players propose the full-team centroid from position minus role offset; <3 voters → B2 fallback; no stored offset → B1.
- Ladder: B0 ignore; B1 last-seen with decay w = e^{−Δt/τ}, τ=8 s; B2 formation anchor (visible-centroid + stored offset); B5 fixed template; B3 = B2 + EMA offsets + velocity extrapolation blended with e^{−Δt/1.5s}.
- SCI = Δ_own + Δ_opp (space-creation index on pitch-control share of attacking third): ≥+12 space creation, +4..+12 weak progression, <+4 dead possession.
## Data sources named
Metrica Sports open sample (3 matches, 22 players + ball at 25 fps; evaluated at 5 fps; first 45 min each); simulated broadcast viewport (ball-following pan α=0.06, widths W ∈ {36,44,52,60} m); games 1–2 for development, game 3 held out. Code + benchmark: https://github.com/nowayfootball/offscreen-impute.
## Findings (numbers and facts, not vibes)
- At W=44 m (~14.6–15.0 of 22 visible): B0 hidden-zone MAE 26.9/25.6/25.1 pp, control-share error 13.4/12.5/11.1 pp → B4: hidden MAE 13.3/12.2/13.8, share 4.7/4.5/4.7, position 11.6/10.0/9.7 m (best position error in all three matches; B0-vs-B4 CIs never overlap).
- B5 fixed template is the clearest negative result (position 22.7/20.7/21.9 m — worse than any dynamic anchor); B3E worst position error of dynamic variants (15.7/15.2/16.3 m).
- Occlusion stratification (B4 median position error): ≤2 s: 3.3–3.7 m; 2–9.6 s: 7.2–8.9 m; >9.6 s: 15.6–16.9 m; 50–57% of hidden (frame, player) samples lie beyond 9.6 s.
- Held-out game 3: B2/B3V edge B4 on share error by 0.3 pp (4.4 vs 4.7), 95% CI [−0.4,+1.3] — unresolved at this sample size.
- Broadcast case study (n=2 windows, no ground truth): imputation moves SCI by 15.6–17.2 points, flipping verdict classes ("dead junk" → "weak progression") — a sensitivity result, not an accuracy claim.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the simulated-viewport benchmark protocol (simulate broadcast camera over full tracking, score decision-relevant metrics, stratify by occlusion duration) is directly reusable for the GSE NGS-replacement spec's blind spot (off-screen players); B4 with formation/personnel-package anchors suits NFL's set-piece structure better than soccer's.
## Engine-actionable? (yes/no + one-line what)
yes — replicate the benchmark on public NFL tracking with decision-relevant NFL metrics (box-count error, receiver-separation-at-throw for hidden players); adopt B4 or a learned variant only if it cuts decision-metric error to ≤50% of the ignore policy on held-out weeks.
