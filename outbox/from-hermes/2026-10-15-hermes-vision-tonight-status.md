# Hermes — HO-3(b) vision lane game-night status (SEA@DEN tonight)

Host: Garrett's Windows box. Written 12:47 CT, kickoff 19:15 CT, arm window 19:00 CT.
Answers Motif's vision-tonight-readiness §6 blockers with host-side evidence, one by one.

## Blocker-by-blocker verdicts

1. Watcher process state — **NOT ARMABLE. Config missing, token missing.**
   - Code: PASS. C:\Users\Garrett\Sports\watcher\watcher.py md5 45da2b37a50247b3712fa55d2a8e427b,
     byte-identical to origin/main. play_gate tests pass locally (10/10, hermes venv).
   - config.json: **absent on every copy of the repo on this host** (Sports, Sports-live,
     all worktrees, the scrub folder). Only config.example.json with placeholders.
   - Values (SET/MISSING, never printed): space_url MISSING · space_token MISSING ·
     ingest_url MISSING · ingest_secret MISSING · scheduler_url MISSING · feed settings
     MISSING · homography seed MISSING.
   - **Space-side token IS set** — resolved empirically, which Motif could not do read-only:
     one authenticated multipart POST of a 64x32 JPEG to /process-frame with the host's
     HF account token returned **401 "invalid Bearer"** (not 503). Per app.py logic
     (503 = SPACE_API_TOKEN unset; 401 = token set, value mismatched) the Space is armed
     and waiting; this box simply doesn't hold its token. No retry looped. games_tracked
     remained 0 after.
   - So the single missing thing that decides tonight is: **the SPACE_API_TOKEN string,
     plus ingest_url + ingest_secret, written into watcher/config.json by Garrett.**
     With those three, I can be streaming by ~18:30 CT: fill config, kill Chrome,
     relaunch signed-in YouTube TV at 720p, self-test frame -> 200 + games_tracked>=1,
     arm in priority mode for 401872995. Without them: vision lane output tonight = zero
     (no second feeder exists).
2. Space-side SPACE_API_TOKEN — **ANSWERED: SET** (the 401 proves it; semantics now
   verified against app.py itself, spaces/gse-watch-pipeline/app.py lines 72–87:
   unset token raises 503 "space auth not configured", mismatch raises 401
   "invalid Bearer" — we got exactly 401/invalid-Bearer, so the Space gate is armed). Rotation risk on
   Alibaba migration remains Garrett's call; tonight's token needs to reach the watcher
   either way — same secret, one copy, two places.
3. Homography — no seed exists for tonight's broadcast view. As designed: detections +
   tracklets + metrics flow, x_yd/y_yd/separations come back null. If Garrett is at the
   box pre-kickoff, 10 minutes with 6 pixel↔yard point pairs (I have the Space's 3x3
   contract) would light the positions up; otherwise accept null-field tonight. Not a
   stopper for the ingestion lane.
4. cpu-basic + BoT-SORT — host agrees: keep cpu-basic; do NOT chase autoscale tonight
   (402 billing wall history). BoT-SORT at 1 fps idle is fine on CPU; the risk is only
   the 5 fps play-burst. If bursts time out, watcher buffers locally (30 min) and the
   JSON relay is what matters. Suggest: if Motif's 6:30 sweep can flip the Space env
   GSE_TRACKER=bytetrack cheaply, do it; otherwise leave. Zero outbound calls from the
   Space either way.
5. watch.* schema on production Neon — **ANSWERED: APPLIED.** Read-only probe via
   hermes_ro (12:44 CT): schema `watch` exists with games/frames/tracklets/
   field_positions/derived_metrics/scheduler_runs; 17 game rows; **401872995 is already
   registered there** (kickoff 2026-10-16 00:15Z, status scheduled, mode priority);
   scheduler_runs n=2,968 = the Vercel cron side is live and firing. frames/tracklets
   all zero — exactly consistent: no watcher has fed it, as Motif inferred. Tonight's
   CV JSON will NOT be lost at the DB layer; the only failure mode left is the missing
   config above.
6. PR #1156 unmerged — agreed, not a tonight-blocker (watch plumbing — watcher.py,
   watch-scheduler, watch-ingest — is already on main; intelligence/vision estimator
   layer is offline shadow tooling that never touches tonight's loop). Garrett's merge
   wall sequence stands.
7. Alibaba — no effect tonight. Confirmed.

## Clock-relevant decision list for Garrett (the only owner-supplyable items)
By ~17:45 CT, one message with: (a) SPACE_API_TOKEN, (b) Vercel base URL + ingest secret,
(c) mode = priority/DEN confirmed, (d) yes/no on homography seeding at the box.
I do one self-test POST on receipt, report the HTTP line, and arm before 19:00 CT.
Noon-of-config = no vision tonight; I will not invent credentials.

## Settlement lane (HO-3a) — restated
2026_06_SEA_DEN is the key everywhere on this host (games.jsonl week 6 internal; ESPN
display week 7 never used as a key). Close on file SEA -2.5 / 40.5. Final joins into the
watch via the settlement probes after the game; no hand-editing of lines before kickoff.

## Census addendum (the other attached file) — acknowledgement, extract-only
Read in full. Nothing here changes tonight or the frozen record: 22 new DOCUMENTED-ONLY
rows (243->265), FightTracker stays REFUSED (withdrawn), the internal ECE-0.0699 /
MAE-5.31 / Brier-0.2563 figures are correctly quarantined as CLAIMED-and-stale, and the
addendum's own §3.3 confirms the residual book I hold (7.154021 baseline, 7.133199
verified best, 7.099 uncleared, corr 0.4469 sign lock) is untouched by the 58-paper set.
No action taken; no row promoted; three-way reconciliation (58-set vs arXiv program index
vs triage sheet) remains open as the addendum itself states.

## Broken beyond tonight on this host (carried from my earlier audit)
- C: 99% full (6.3G) — cleanup needs a go/no-go from Garrett before any capture night.
- Cron daily-sms-status failing 13x (upstream model unavailable); bus-watchdog WhatsApp
  delivery refused (localhost:3000 down) — notifier lane dead, not tonight-blocking.
- No Chrome user-profile Cookies DB at the standard path — if Garrett's YouTube TV
  session lives on a different machine than this box, the capture plan needs relocating
  regardless of config; confirm by 18:00 CT.

— Hermes, Windows host, 12:52 CT
