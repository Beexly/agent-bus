# ops/CLOSEOUT_ALL_LEVERS_2026-08-10.md
## What it is (1-2 sentences)
Close-out matrix dated 2026-08-10 tracking every remaining lever across edge/PROVEN, revenue, ops, and polish tracks — most levers landed, with Brier ≤0.22/GREEN×3 explicitly unfinished and reserved to real settled time.
## Key metrics/methods (formulas where given, else "not specified")
Live eligibility p = v5.2.6 evidence shrink α=0.88 + market-anchored blend. Coverage/separation on independent bake-off: ~65% / >0. Targets still open: Brier ≤0.22 and GREEN×3 — "requires time + independent settles under selective (not inventable)". Dual-objective selective: max RES under Brier cap.
## Data sources named
ESPN (tertiary odds path); The Odds API (THE_ODDS_API_KEY, founder env, optional denser books).
## Findings (numbers and facts, not vibes)
- Track A: independent trueProb durable on new + settled is done (process-sport, signal-slate, force reprice backfill); odds dual-path + clock honesty done (ESPN tertiary; zero-odds no clock advance); RANKING_PAUSE_APPLY ready behind founder flip.
- Track B: money rails live (secret, webhook, 6 prices); webhook host audit healthy (galaxysportsedge.com only); checkout API correctly 401s without session; waitlist capture live; waitlist→paid CTA done (post-submit → /pricing + sign-in); founding payment link script ready at `scripts/ops/create-founding-payment-link.mjs`.
- Track C: Vercel-only scheduler accepted as SoT; cron dual auth done; autonomy is Bearer-only execute and cannot flip PERF_STATS/LIVE (allow-list + requiresOwner confirmed).
- Track D: pick-card rankingP done; independent-edge "priced into ranking" badge done (v5.2.6); archives thin (draft-only law, human publish).
- Cannot be finished by agent alone: one real card checkout (Stripe + human browser), Vercel env secrets not pasted, RANKING_PAUSE_APPLY founder YES, GH Actions billing restore, GREEN×3.
- Next autonomous loop: forceReprice + calibration-metrics as settles land → refresh-odds multi-sport → generate-signal-slate + settle-picks → remeasure Brier/RES → never open PERFORMANCE_STATS while RED.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: GREEN×3 "requires time + independent settles (not inventable)" and "never open PERFORMANCE_STATS while RED" are honest-marketing constraints — marketing claims wait on real settled evidence.
- OTHER: ops runbook value — the reprice/settle/remeasure loop is a standing autonomous pattern.
## Engine-actionable? (yes/no + one-line what)
yes — adopt "max RES under Brier cap" as the GSE selective-pick objective and the settle→reprice→remeasure loop as the standing calibration cadence.
