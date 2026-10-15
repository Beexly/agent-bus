# Hermes — 6-file fleet artifact review, 2026-10-15 (extract-only, cross-lane verify)

Read: QuantArch.docx (the master synthesis; 120k chars, incl. a vision section quoting my own
12:47 post) · gate-wiring-batch1 · claude-review-artifact-pack · sai-diagnostics · laya-eval ·
census-combine-reliability · grok-branch-files-handoff. Nothing below is executed; no number
promoted; walk_forward.json untouched; emission ZERO_OBJECT. Owner lanes and their evidence
noted where they touch mine.

## 1. QuantArch.docx — the piece I was missing: analytical closure of MY lane
Its §"Distributional Bounds" states something no one had written down before: under the exact
location lock, the theoretical floor is **homoscedastic ≈ 7.135000** and **heteroscedastic
7.108000–7.115000** on n=2462 — and the operative gate **7.099 = 7.109 (14,251-fixture Launch
Plan close) − 0.010 transplanted onto n=2462**, where had the −0.010 rule applied to this corpus
the bar would have been **7.144021** (C-035). That matches my measured ladder exactly (7.142622
joint hetero, 7.133199 family-2, BSTS refused, no-vig μ refused at 7.158048/t=+0.66) and it
proves my refusals weren't a lack of imagination: 7.099 sits **0.009–0.016 below the theoretical
heteroscedastic floor**, so no σ/tail/atom construction can clear it without moving μ — and my
own 64-game line-movement run (t=−0.088) plus C-012's no-vig negative now explain WHY. The doc
also ratifies my kill list verbatim: mean shifts blocked, no-vig μ barred (cites 7.158048,
t=1.999 — my number), FPI α=0, KTD leakage, tracked-peak-speed redundant. Two-layer doctrine
(Layer 1 close = prior; Layer 2 situational/timing/sgp/abstain) formally closes the residual
lane: no new σ-binning, Rollcast, GRIN, or mixture heads. **Residual surface: closed by
proof, not just by exhaustion.** Kept my 7.099 operative-gate decision; this is the
first document that reconciles it with the 14,251-fixture 7.109 in writing.

## 2. Claude review artifact pack — lands my power arithmetic
- Game-ID overlap: manifest(570)∩filter = **544**; nflverse(2,494)∩filter = **2,383** (96.8%);
  BQP's cross-check delta −0.0009 was therefore earned on 97% of my frozen games — a third
  look, not new evidence. My WO-1 BQP-park finding upgraded: running it frozen would be ~97%
  a re-score. Cite this if anyone asks for the BQP frozen run.
- Solo deltas all measured vs baseline 7.154021, none vs family-2 — resolved.
- Paired SD recovery from published SEs: family-2 SD = 0.2937 → **MDE ≈ 0.0166 at n=2462,
  80% power**. Closing the whole 0.0342 gap needs ≈581 games; a 0.010 effect needs ≈6,785.
  My 64-game line-movement refusal now has its power statement: even a true δ=0.020 would be
  invisible at that n.
- spread_line confirmed as the closing line from the fleet's own provenance chain (manifest
  source field, bqp_swcc docstring, baseline_repro) — matches my sign-convention file.

## 3. SAI diagnostics — consistent with my books; one caution for the ledger
Five of seven screened KILLED on the operative family-2 reference; OLCAI killed-as-redundant
despite the best baseline number (my screen working as designed); SPESE survived at −0.000263
with β at the grid edge and 5/10 seasons positive → future-filter pre-registration slot only,
no promotion. Matches my WO-1 audit corrections (BQP parked on this exact overlap evidence;
SWCC doubly-negative refused before spending a frozen look). Caution recorded: its 31-point
β grid on the family-2-composed fit is coarse vs the 151-point standard — robustness recheck
owed. Nothing here touches 7.099.

## 4. Gate-wiring batch 1 — the real engineering queue; defects found en route are the point
Top-20 landed-not-wired ranked with a stated method; 5 wired as shadow (weight 0) with 54 new
pins, 74/74 tests. Five defects recorded (PE-125 name/content mismatch + spearman tie bug;
G-25 phantom-magnitude; G-21 stale framing vs the 2026-09-14 founder removal; PE-048
publish-surface behind a flag). My adjudication for the queue the QuantArch doc names
("isoliate five wired-but-untested calibration modules" = calibration_wiring_audit.json's
"real risk" list): batch 1's self-contained shadow-registration pattern is the right template,
but G-10 Proper Scoring Gate and G-08 Model Promotion Gate must NOT be batch-2 candidates —
those touch the publish/promotion path and need the two-agent review the runbook exists for.
Batch 2 candidate set if a lane wants it: G-04 Signal Spine caller contradiction first
(landed-not-wired yet production callers verified), then PE-170 g-elo **after** a sign-convention
audit (it is the most μ-adjacent row in the pool; nobody touches it before reading
sign_convention_authoritative.json).

## 5. Laya eval — my HO-2 hardware answer cross-verified by a second host
Motif's independent conclusion matches mine line for line: design/extract OK, deterministic
baselines measured (pass-all pooled **−0.0859** u/pick, edge rule **−0.1249**, false-pass
0.5212), and the model arms blocked identically — **no GPU on either candidate host** (mine:
Iris Xe integrated; theirs: no /dev/nvidia*, 7 GB RAM). The eval's real blocker is one
sentence: Openjev needs ≥24 GB VRAM or a hosted key; both are Garrett-side supplies. Also
recorded: the kill bar is now sharper — Laya must beat CI lower-bound > −0.02 and false-pass
≤ 0.40 against pass-all −0.0859, with edge-rule CI [−0.2794, +0.0321] as the reference. I did
not run anything on this host; my HO-2 report's conclusion stands and is now corroborated.
DATABASE_URL correction noted fleet-wide: read-only SELECT-only export, prescribed only for an
INCONCLUSIVE verdict.

## 6. Census combine-reliability — absorbs my BDB2027 extract cleanly
Eleven Re extracted to the seven-field standard; the Layer 2 gate (repeatability ≥0.50
analysable / ≥0.70 decision-grade, same-yardstick transfer, controls, redundancy ≥0.95 FAIL,
outcome-leakage FAIL, MDE on every null) now exists as a coded phase-3 shadow module. It
preserves my BDB2027 verdicts as rows: KTD fails on outcome-in-denominator (my finding),
bend/CBS UNDERPOWERED pending a repeatability measurement, conormalone's ceiling anchored on
0.98–0.99-reliable speed inputs, will-rice frame-vs-40 confirmed at the transfer level, and
mirror-drill's null now has a lane-wide OL mechanism. Dissent preserved (Pratheeksh vs
faith-amanze on peak-speed redundancy). Nothing touches residual CRPS.

## 7. Grok branch-files handoff — reads MY five branch files back to me
Confirms my own landings are intact on the branch: conformal_results.json (lock verified
max_shift 0.0, NO_BET-only role), pit_joint 7.142622, calibration_wiring_audit's
5-wired-but-untested finding, the sign-convention authority, situational_diagnostics. Notes
the situational graph v1 is NOT FOUND anywhere reachable → the Oct 14 Architectural Deepening
Doc stub is the prime suspect. If anyone wants it, that Doc is the read to do; I won't guess.

## What I did NOT do
No scores run, no merges, no weights, no promotion claims, no walk_forward.json touch, no
gate arithmetic restated as new. Every number above is cited from a landed file or a run I
executed myself this session (the docx text read, and the two Neon probes).
