# arxiv-program/research/2026-09-21/arxiv-deep/1152-selective-prediction-reduces-automation-bias.md
## What it is (1-2 sentences)
Deep-read ledger of Jabbour et al. 2508.07617 (behavioral experiment: 259 clinicians diagnosing acute respiratory failure under Clinician Alone vs Clinician+AI vs Clinician+Selective Prediction where the AI explicitly announces abstention). Verdict: ADAPT as an operational/UX finding for GSE's public-pick operation — announcing abstention is not behaviorally neutral; it shifts the audience's error pattern toward false negatives (missed +EV plays), so abstention must be framed or silenced by design.
## Key metrics/methods (formulas where given, else "not specified")
- No ML model proposed (behavioral study); analysis via mixed-effects models (patient, label, participant random effects), condition fixed effect, α = 0.05
- Treatment accuracy, false positive rate, false negative rate on the inaccurate subset; diagnostic accuracy (Appendix H.3); perceived difficulty 1–4 Likert
- Oracle-with-noise deferral: withholds all incorrect predictions plus enough correct ones that p = 0.11 of withheld predictions are correct
## Data sources named
- 45 real ARF patient cases (Aug–Nov 2017, single academic center; ground truth by ≥4 physicians thresholded at 2.5); 259 clinicians (125 +AI, 134 +Selective Prediction), 9 US states, median 5 years practice; pre-registered at osf.io/m7avk; proprietary clinical vignettes, no code/data link
## Findings (numbers and facts, not vibes)
- Treatment accuracy on the inaccurate subset: Clinician Alone 62% (47–75) → +AI 50% (36–65), p < 0.001 (automation bias) → +Selective Prediction 55% (40–69), partial recovery, not significant vs Alone
- False positive rate: Alone 40% (18–67) → +AI 55% (28–79), p < 0.05 → +Selective 41% (19–68), back to baseline
- False negative rate: Alone 31% (22–42) → +AI 41% (31–53), p < 0.05 → **+Selective 42% (31–53), p < 0.05 — stays elevated**: clinicians undertreat when told the AI abstains
- Subgroups (exploratory, underpowered): APPs (n=66) −18 pp accuracy under +AI vs −10 pp physicians (n=191); selective recovers +13 pp (APPs) vs +2 pp (physicians); AI-naive (n=181) −12 pp under +AI, only +3 pp recovery, FNR +13 pp under selective; AI-experienced (n=78) −9 pp, full +9 pp recovery, FNR only +2 pp
- Perceived difficulty: 1.17 Alone → 1.20 +AI → 1.27 selective — abstention makes cases feel harder
- File's GSE application: X-copy framing rule — never present "no play" as bare deferral; template: "No edge today on [game] — model sees it as a coin flip, not a fade. Passing is the +EV move."; silent-vs-announced abstention A/B on low-stakes slates tracking reply sentiment and fade-trading; the AI-naive subgroup maps to GSE's casual followers
- Gate in the file: keep the copy rule iff a 4-week A/B shows no negative-sentiment spike on framed no-play posts; reject any claim about effect magnitudes (12 pp swings do not transfer to bettors)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL (indirect: how public communications shape audience trust/decisions is the trust-signal adjacency); OTHER (public-pick operations / X copy policy). No QB behavior, coaching, OL, or scheme content.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the framed-abstention X copy rule ("coin flip, not a fade; passing is the +EV move") plus a silent-vs-announced no-play A/B tracking reply sentiment and fade behavior, since announcing abstention shifts followers toward missing +EV plays.
