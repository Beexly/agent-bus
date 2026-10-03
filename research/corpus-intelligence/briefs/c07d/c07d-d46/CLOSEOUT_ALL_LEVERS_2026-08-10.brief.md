# ops/CLOSEOUT_ALL_LEVERS_2026-08-10.md

## What it is (1-2 sentences)
Dated 2026-08-10 close-out matrix across four tracks (edge/PROVEN, revenue, ops, polish) recording which levers were done, which were not, and exactly what still required the founder's hand — with integrity constraints (no invented PROVEN, no maps applied, RANKING_PAUSE_APPLY off).

## Key metrics/methods (formulas where given, else "not specified")
- Coverage / separation on the independent bake-off: **~65% / >0** (coverage ~65%, separation > 0).
- Live eligibility version: **v5.2.6** with evidence shrink **α=0.88** + market-anchored blend.
- Calibration target: **Brier ≤ 0.22** plus **GREEN×3** (three consecutive green calibration checks); status as of 2026-08-10: **Not yet** — attributed to "sample + selective + pause discipline".
- Dual-objective selective: "max RES under Brier cap" — done.
- Odds dual-path: ESPN as tertiary source; "zero-odds no clock advance" rule — done.
- Continuous re-run of calibration via cron.
- No formulas for α=0.88 application or the GREEN×3 gate are restated in this file ("not specified" for the equations).

## Data sources named
- ESPN (odds tertiary source).
- THE_ODDS_API_KEY (optional denser books; founder env).
- Stripe (card checkout, session + human browser).
- Vercel scheduler (SoT for cron).
- GitHub Actions (minutes/external billing).

## Findings (numbers and facts, not vibes)
Track A — edge/PROVEN:
1. Independent trueProb made durable on new + settled picks — Done (via process-sport, signal-slate, force reprice backfill).
2. Coverage/separation on independent bake-off: ~65% / >0.
3. Live eligibility at v5.2.6: evidence shrink α=0.88 + market-anchored blend.
4. Dual-objective selective (max RES under Brier cap) — Done.
5. Odds dual-path + clock honesty — Done (ESPN tertiary; zero-odds no clock advance).
6. Calibration re-run — continuous via cron.
7. Brier ≤ 0.22 / GREEN×3 — Not yet; reasons stated: sample size, selective discipline, pause discipline.
8. RANKING_PAUSE_APPLY — Ready, awaiting founder flip.
9. THE_ODDS_API_KEY — founder env, optional for denser books.

Track B — revenue:
10. Money rails (secret, webhook, 6 prices) — Live.
11. Webhook host audit — Healthy (galaxysportsedge.com only).
12. Checkout API returns auth 401 without session — correct behavior.
13. Waitlist capture — Live; waitlist → paid CTA — Done (post-submit → /pricing + sign-in).
14. Founding Payment Link script — Ready (`scripts/ops/create-founding-payment-link.mjs`).
15. Real card charge — founder-only.

Track C — ops:
16. Vercel-only scheduler as source of truth — accepted + documented on External Cron workflow.
17. Cron dual auth — Done. Autonomy Bearer-only execute — Done.
18. Autonomy cannot flip PERF_STATS/LIVE — confirmed (allow-list + requiresOwner).
19. Env examples for close-out flags — Done (.env.example + production.example).
20. GitHub Actions minutes — external/billing (founder).

Track D — polish:
21. Pick-card rankingP — Done. Independent edge "priced into ranking" badge — Done (v5.2.6).
22. Content generate-drafts — Live (daily + weekly drafts).
23. Archives (podcast/newsletter) — thin; draft-only law; human publishes.
24. Product boards honesty map — Done. Brand motion / Higgsfield — founder approval.

Cannot be finished by agent alone (founder items):
25. Card checkout once (Stripe session + human browser).
26. Vercel env secrets not pasted (`THE_ODDS_API_KEY` if denser books wanted).
27. `RANKING_PAUSE_APPLY=true` requires explicit YES.
28. GitHub Actions billing restore.
29. GREEN×3 requires time + independent settles under selective — "not inventable".

Next autonomous loop (no gate flips): forceReprice + calibration-metrics as settles land → refresh-odds multi-sport (ESPN) → generate-signal-slate + settle-picks → remeasure Brier/RES chasing ≤0.22 then GREEN×3 → never open PERFORMANCE_STATS while RED.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — This is an ops/gating snapshot, not a behavioral study. It serves the calibration/sizing program: the file pins the exact calibration bar (Brier ≤ 0.22, GREEN×3, α=0.88 evidence shrink, market-anchored blend at v5.2.6) that every signal lane — QB-behavioral profiles, coaching tendencies, OL, trust-target intake — must clear before touching the public board. Mechanism: because PERFORMANCE_STATS stays dark while RED and RANKING_PAUSE_APPLY needs a founder YES, no amount of model improvement in any lane self-unlocks display; the pipeline is evidence-gated, not effort-gated.
- TRUST-SIGNAL — "Independent trueProb durable on new + settled" plus coverage ~65% / separation > 0 on the independent bake-off is the honest-coverage doctrine: the engine tracks what fraction of its universe it can price independently, which is the mechanism by which trust-target intake can be audited (if independent coverage is only 65%, 35% of the board is market-following).
- No CONTRADICTION found with the calibration stack file (consistent: Brier/ECE gating, no invented PROVEN). UNCERTAIN: "separation > 0" is a floor claim with no magnitude — a separation of epsilon clears it; the actual separation value is not given.

## Engine-actionable? (yes/no + one-line what)
Yes — one line: treat Brier ≤ 0.22 + GREEN×3 + α=0.88 shrink as the hard quantitative unlock bar in every calibration/sizing spec, and never open public stats while RED.

### Referenced files, papers, datasets
- `scripts/ops/create-founding-payment-link.mjs`
- `.env.example`, production env example (referenced by description)
- No papers or datasets named.
