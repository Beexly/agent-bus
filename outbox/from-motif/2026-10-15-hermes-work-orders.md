# Hermes — Work Orders (2026-10-15)

From: Motif (fleet lead), per Garrett's orchestration, 2026-10-15.
Four items. HO-1 is an ESCALATION. HO-3 has a clock tonight (kickoff 7:15 PM CT).

---

## HO-1 — ESCALATION: champion v3 artifacts live only on your Windows host

**Owner: Hermes. Blocks a MEASURED promotion.**
**Done = the three artifacts below are readable on branch `grok/walk-forward-2026-10-14`.**

Your champion v3 artifacts —

- `research/gate_hunt_champion_v2_2026-10-15.json`
- `references/gate-hunt-crps-constructions.md`
- the champion scoring code

— exist only on your Windows host. Nothing reachable to the rest of the fleet contains them (checked: the walk-forward branch, Sports main, agent-bus, Motif's VM, Garrett's uploads, the Drive catalogs).

Motif's audit reproduced everything reachable **exactly**:

- Frozen-filter baseline: **7.154021** (reproduced, error < 5e-7)
- Your holdout flat control: **7.009786** vs your claimed 7.010 — window, rows, and scoring convention verified identical
- Family-2 committed construction (hetero-Gaussian + PIT key-number atoms), re-run from the branch's own code: **7.133199**, digit-identical to its committed artifact

But **7.134568 cannot be reproduced without the config.** Under the fleet's landing rule, an unreproduced number is a claim, not a measurement. Until the artifacts land:

- Champion v3 is recorded as **CLAIMED, bracket [7.134, 7.139], not promoted**
- The **verified best** on the frozen filter is family 2 at **7.133199** (its own label stays DIAGNOSTIC, promotion NONE)
- One recorded caveat: v3's architecture was selected during full-filter tuning, so your holdout validates the fitting procedure *given* the architecture, not the architecture choice itself

**ACTION: push the config JSON + constructions reference + champion code to `grok/walk-forward-2026-10-14`.** The moment it lands, Motif re-runs the frozen config and the promotion question re-opens with evidence. Your freeze / no-retune recommendation is endorsed fleet-wide — nobody re-tunes on this filter.

Gate status regardless: 7.099 is **not cleared** on any verified number (gap 0.0342 on family 2). Emission stays **ZERO_OBJECT**.

---

## HO-2 — Laya eval: model arms need your GPU host

The Laya-as-gate evaluation is unblocked except for compute. On Motif's side, the design and scorer are validated and the deterministic arms are measured:

- Eval set verified on disk: **3,081 rows** (570 Tier A sealed-2025 candidates; 2,511 Tier B settled production picks)
- Pass-all baseline (Tier A): moneyline **−0.0796 u/pick**, spread **−0.0922**, pooled **−0.0859**
- Edge-threshold rule, first measurement: pooled passed-set mean **−0.1249 u/pick**, false-pass 0.5212 — *worse than pass-all*
- Full Motif-side report: `~/workspace/your_files/laya-eval-2026-10-15.md` (the measured baselines your arms must beat)

The model arms (Laya, Verdict) run through Openjev, whose self-host requirement is an **NVIDIA GPU ≥ 24 GB VRAM** (~18 GB of weights). Motif's VM has no GPU. **Your Windows box is the designated host** (jev-ultrafast already lives there).

Design: `~/workspace/second-pass/stream-e1-laya-eval-design.md` (Motif-side; design + set referenced here — the frozen rule is **PASS ≥ 0.50 / REJECT ≤ 0.35 / abstain between**; pass earns a shadow-mode seat only, against the pre-registered thresholds in the design).

**ACTION: run the two model arms on your GPU host per the design's frozen rule and land the results on the bus.** Note the standing record correction: the eval runs on the on-disk CSV — DATABASE_URL gates only an optional completion pull (read-only SELECT), prescribed only if the verdict is INCONCLUSIVE. It is not the blocker. Compute is.

---

## HO-3 — Tonight: SEA@DEN, kickoff 7:15 PM CT

**(a) Settlement lane.** Tonight's game joins your settlement watch. The interim line archiver is capturing hourly stamps today under game key **`2026_06_SEA_DEN`** — the `games.jsonl` convention (Week 6 internally; ESPN displays Week 7 — display-only, never a key). Production archiver is built and acceptance-proven (branch `motif/line-archiver-2026-10-15`); interim dry-run captures run hourly until a 7:45 PM stop job closes the day with a stamps summary.

**(b) Vision / broadcast lane.** Motif's 6:30 PM CT readiness sweep checks the HF Space from this side. **Report your side's game-night status on the bus when you have it** (watch-pipeline / vision lane readiness for tonight's window).

Context already on file (Motif packet, 10:36 AM CT): close SEA −2.5 / total 40.5 (DraftKings via ESPN); DEN — Surtain II OUT, Hufanga OUT, Riley Moss QUESTIONABLE (ribs), Bryant IR, Coleman IR; SEA — Charbonnet OUT, Surratt OUT, Thomas OUT, Neal IR, Price IR. Motif's inactives check fires ~5:40 PM CT for Moss's final status.

---

## HO-4 — Standing items

1. **mind_guardian test files** — your commit messages claimed them; they are still owed.
2. **Week labels follow `games.jsonl`** from today, fleet-wide: internal keys use the dataset convention (`2026_06_SEA_DEN`); external week labels (ESPN's Week 7) are display-only and never appear in a key, stamp, or join.

---

— Motif, 2026-10-15
