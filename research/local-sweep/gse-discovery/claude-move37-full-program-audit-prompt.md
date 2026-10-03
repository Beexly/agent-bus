# CLAUDE REVIEW PROMPT — MOVE-37 full-program audit (paste-ready)
# Paste into Claude. Give it access to Beexly/Sports, branch docs/move37-research-corpus
# (read-only). If it cannot reach the repo, paste the files listed below instead.

---

You are an INDEPENDENT AUDITOR. A small team is running a "machine discovery"
program on NFL data, hunting for mathematical structures the betting market has
missed. Your job is to attack it: find the holes, the weak gates, the defects,
and the claims that do not survive contact with the program's own rules. Be
adversarial. The program's standing rule is "trust no claims, even your own" —
and that includes the architect's.

## THE SETUP
- **DeepSeek** = theorist. It has NO code-execution environment: its numeric
  claims are protocols and predictions, not observations. Treat every DeepSeek
  number as UNVERIFIED until executed elsewhere.
- **Minis** = grout crew (DeepSeek V4.1 Flash on a phone, via OpenRouter). It has
  code execution and runs the test batteries. Its numbers are Minis-reported
  until independently rerun.
- **Motif** = architect/QC (me). I write the specs, the gates, and the verdicts.
  Audit my work hardest.
- Standing rules: every theory must beat a simple baseline; nulls, failures,
  and falsifications are preserved, never buried; nothing is a discovery before
  local execution + adversarial validation; no placeholders, no invented papers,
  no invented numbers.

## READ (branch docs/move37-research-corpus, docs/research/move37/)
1. `minis-overnight-compounding-grout-prompt.md` (v3 — the grout spec)
2. `minis-overnight-deep-report-2026-09-14.md` (13-compound game-level battery)
3. `minis-props-followup-prompt.md` (props-space lab: L1→L3→L2→L5)
4. `repair-03-lab-report.md` (IRL killed, W8 killed, T3/T7/T9/W5–W7 verdicts)
5. `contextual-compounding-factor-universe.md` (46-candidate universe)
6. `deepseek-move37-navier-stokes-method-brief.md`
7. `deepseek-phase6-navier-stokes-translation-02.md` — KNOWN DEFECTIVE: condensed,
   not verbatim; REPAIR-03 §7 corrupted (W1/W2/W4 rows merged, W4's −0.031
   misattached to W1)

## KNOWN STATE (verify, don't assume)
- Overnight battery: 13 compounds, 0/13 passed the tool-gain gate at game level.
  Architect's verdict: the game-level branch is dead — the closing line absorbs
  every public pre-kickoff compound. Program pivoted to props space.
- L1 (cold/wind × passing exposure) stage 1: Minis reports a KILL on two
  pre-registered lines — interaction coefficient c = +0.082 with pre-registered
  sign negative (sign flip); ΔLL ≈ 0.0001 vs 0.002 nats/attempt threshold.
- L2/L3 are data-blocked in the Minis environment (no player_stats, no real
  snap_counts).
- Minis substituted efficient-score permutation for 1,000 refits as a DISCLOSED
  deviation (environment throttles repeated fits, ~6s each).
- Known citation defect: the report says "Beilock & Gray (2011)" — actual first
  author is DeCaro.

## YOUR SEVEN CHARGES
1. **Gate integrity.** The v3 system (gates R, 5a–5f, 6; claim tiers; honesty
   check; killing-gate records) — does it actually constrain the grout crew, or
   does it have escape hatches? Name the three weakest gates and how you would
   exploit each.
2. **L1 kill assessment.** Is the L1 kill legitimate, or could a specification
   error (e.g., a sign convention on the interaction term, weather coding, or
   play-action labeling) explain the sign flip? What is the single check you
   would run first?
3. **Deviation audit.** Does the efficient-score permutation substitution preserve
   the null's meaning, or does it weaken the gate below usefulness? Under what
   conditions would you reject results produced this way?
4. **Data blockers.** Are L2/L3 truly blocked, or should the nflverse downloads
   contain player_stats and snap_counts? What is the cheapest unblock?
5. **Discovery check.** Does anything in the corpus constitute a real, verified
   discovery by the program's own standards? Name it, or state "none" with the
   reason each candidate fails.
6. **Defect hunt.** Confirm or extend the known defect list (translation
   condensation, §7 corruption, DeCaro citation). Find three more defects we missed —
   in code, citations, arithmetic, or logic.
7. **Fix list.** Ordered cheapest-first. Each item: the fix, the falsification it
   enables, and what it costs (compute, data, or time).

## DELIVERABLE
A written audit, one section per charge: verdict, evidence (file + line or
commit), and the fix list. Audit only — no new research, no code. If a claim in
this prompt is wrong, say so; the prompt is not authoritative, the evidence is.
