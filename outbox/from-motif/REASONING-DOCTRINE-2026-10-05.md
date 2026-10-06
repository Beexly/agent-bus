# THE REASONING DOCTRINE

**Garrett, 2026-10-05. For every agent in the fleet. Read this before you touch the engine.**

## The correction

Every agent — Motif, Grok, Claude, all of us — has been framing the mission as a math war: beat the closing line with a better equation. That was never the mission. The close is the sharpest number on earth. No formula outguns it, none ever will, and chasing that is how you burn years on nothing.

The mission: **build a brain that understands football better than the market does, and reasons from that understanding with all the data underneath.**

The close is a number. The brain is a judgment. The number sees Chiefs -4.5. The judgment sees the situation the number hasn't priced — and that's the entire game.

## Where the edge actually lives

The market is brutally efficient at absorbing *numbers*. Every public stat is in the line within minutes. What the line cannot absorb is *understanding* — and understanding lives in five places:

**1. Situations the models don't read.** A model sees "3 days rest." The brain sees a Thursday game after a physical divisional overtime loss, with a 38-year-old quarterback, traveling east, in 20mph wind — and knows the vertical passing game is dead and the total is 2 points too high. Published literature puts situational spots at **1–3 points of mispricing** when they fire (rest: Entine & Small 2008; coast-mismatch: Smith et al., SLEEP 2013; wind/totals: multiple). The models know the variables. They don't read the situation.

**2. Timing.** The close is sharp at kickoff. The path to the close is not. Beat-reporter news, practice participation, a limited Wednesday turning into a DNP Thursday — a brain that reads the news cycle and reasons about what it means *before the market moves* bets a soft number, not the close. Worth **1–2% CLV per bet**, measured, standard sharp practice. The dossier's bitemporal warning is exactly this: a perfect model on a leaked injury report is a false edge; a fast brain on fresh news is a real one.

**3. Correlation — the biggest structural hole.** Same-game parlays are priced as roughly-independent legs with a fixed correlation haircut. Books hold **15–30%** on SGPs because the pricing is wrong, not because bettors are dumb. A brain that actually models joint spread-total dependence (the copula hole — empty on arXiv, measurable on our closes) eats the mispriced combos. This is the highest-EV-per-dollar lane in the corpus and it's barely contested.

**4. Coverage.** A human sharp deeply reasons about 3–5 games a week. There are 16 games, hundreds of props per game, 272 games a season. The market is sharpest where sharp attention concentrates (primetime, playoffs) and softest where it doesn't (props, obscure markets, early-week lines). The brain doesn't get tired. It reads every game like it's the Super Bowl. The edge here is unmeasured but structural — softness follows inattention, always.

**5. Knowing when to pass.** An honest uncertainty estimate that says "I don't know, sit this out" is edge. Passing a -5% EV bet is worth +5% versus betting it. The conformal machinery (CQR, AgACI, equalized coverage) isn't there to make picks win more — it's there to keep the brain from betting its own ignorance. Defense is profit.

## What the equations are for

**School, not ammo.** Nothing in the corpus is trying to out-predict the line. Each family teaches the brain something it uses when it reasons:

- Dixon-Coles / Skellam → how scores depend on each other (structure, not the soccer cells)
- Conformal family → how to say "I don't know" with a number attached
- Tennis surface Elo → the *operator* of regime-splitting, which becomes dome/wind/turf splits
- James-Stein → shrinkage as a habit of mind for small samples
- Hawkes (as a failed fit) → what *doesn't* cluster, which is information too
- The 31 empty searches → labeled holes: no paper means build the table, not "nothing there"

Ingest **every signal under the sun**. The brain decides what's relevant per situation. Ingestion is indiscriminate; reasoning is selective. That was always the total-signal doctrine — this is its justification.

## How we know it's working

Not "did μ beat the close." The measurements that matter:

- **CLV on bets actually placed** — are we beating the number we bet into?
- **Calibration of uncertainty** — when the brain says 70%, does it happen 70%?
- **Line-move prediction** — do the brain's situational reads anticipate where the line goes?
- **Pass discipline** — is the no-bet rate higher where the interval is wide?

A brain that grades well on all four understands the game better than the market. That's the win condition. There is no other.

## What each agent does with this

- **Researchers (Grok, corpus):** hunt situations, not formulas. Every paper gets read for "what does this teach the brain about how the world works," not "does this beat the line."
- **Builders (Jules, coding agent, Hermes):** wire the signals, all of them. Build the warehouse (as-of everything), the reasoning surfaces, the uncertainty wrappers. Never wire a coefficient from another sport onto an NFL head.
- **QC (Motif):** every claim gets checked against the four measurements above. A beautiful equation with no situational read is trivia. A situational read with no measurement is a story.

---
*Supersedes the "beat the close" framing everywhere it appears. The close is the starting point. Understanding is the edge.*

---

## Canonical situational archetypes (Garrett's examples, 2026-10-05)

The abstract doctrine above is nothing without worked examples. These are the standard. Every agent should be able to run this process on any game.

**1. The atmosphere spot.** Falcons at Saints, MNF, Oct 5 2026. A numbers model says Atlanta +1.5 — the power ratings say the Falcons are marginally better and 1.5 is value. The brain says: it's New Orleans' *first home game of the year*, Monday night, Superdome. That building at night is one of the loudest environments in sports. Generic home field (~1.5–2 pts) is already in the line — the line says Saints -1.5, i.e. roughly pick'em on neutral. But *this* home field, *tonight*, is not generic. Crowd noise kills cadence, forces silent counts, disrupts checks and audibles — it taxes the road offense's communication, which is exactly where young quarterbacks and complex schemes break. The situational read doesn't just disagree with Atlanta +1.5; it points the other way. The model never asked what night it was.

**2. The layered revenge.** Brian Flores vs Miami. Surface narrative: fired coach faces old team. That's the level every content farm stops at. The brain stacks three layers: (a) *emotional* — not just fired, he filed a racial discrimination lawsuit over it, which is personal in a way a normal firing isn't; (b) *schematic* — Flores runs an elite blitz-heavy defense, the exact worst matchup for a quarterback who processes slowly; (c) *personnel* — that quarterback is Malik Willis, who has been bad. Any one layer is a narrative. All three stacked is a game plan: Miami might not score. (Garrett's honesty note, which is the ethos: Ollie Gordon ran well that day — one piece broke differently. The process was still right. Results don't grade the process; the process grades itself.)

**3. The logistical disruption.** A player stuck in traffic, a flight delayed, three hours of sleep. This is the level of signal the models will never touch — it's not in any feed, it's in beat-reporter tweets and local news. The brain's job: a team lined at -7.5 on power ratings might be -3.5 after you account for the fact that half the defense slept in an airport. The number is the starting point. The situation is the adjustment. *Everything* goes through the process — if it can affect the game, it's a signal, and the brain weighs it.

**The rule these teach:** the process is the product. Ingest everything — the lawsuit, the crowd, the delayed flight, the wind, the revenge, the rookie making his second road start. Reason over all of it. Adjust the number. Then bet, pass, or size accordingly. A pick that wins without this process is luck. A process that runs on everything wins over time.

---

## The stack (Garrett, 2026-10-05)

The system has layers, in this order:

**Layer 1 — the number everyone sees.** The market line. The spread, the total — 46.5/47.5, Saints -1.5. It's the consensus, the sharpest public number in existence. We start here, not from zero. If the base number is already liked before context, that's the foundation. Respect it.

**Layer 2 — the reasoning overlay.** The hyper-intelligent situational, contextual, emotional, logistical reasoning goes ON TOP of the base number. Everything the line doesn't know: the atmosphere, the revenge layers, the delayed flight, the second start, the 11 days off, the three starters out. This is where the brain earns.

**Output — the machine.** Base number + reasoning overlay = the smartest, most accurate prediction and probability machine. Not a better formula than the close. The close, *plus* understanding.

**Ingestion rule.** Feed it everything — the datasets, the equations, all of it — even the pieces that don't matter in this moment. They are part of the bigger picture and HAVE to be added. The brain can't reason with a concept it was never taught. A dormant equation is not a wasted equation; it's a loaded one.

**Testing rule.** Test way later down the line. Ingestion is not gated by testing. Don't slow the feed to validate each piece as it arrives — the corpus comes first, the bake-offs come when the brain is educated enough to run them.

---

## The learning loop (Garrett, 2026-10-05)

Testing is not a phase at the end. **We test as we go** — continuously, at every grain:

**Game by game.** Every game is a test case. The brain's pregame read gets graded against what actually happened.

**Play by play.** Every snap is a test case. Down, distance, formation, game state — the brain's expectation gets graded against the result.

**Pre-play by pre-play.** Before every play, the brain states what it expects. Then the play happens. Then the grade. This is the tightest feedback loop in the system — predict, observe, update, repeat. It's how judgment is built: thousands of micro-predictions, each one scored.

**Interviews and coaches.** What a coach says Tuesday gets tested against what happens Sunday. "We're going to establish the run" is a testable claim — did they? Coach-speak becomes a signal with a measured honesty rate. Player interviews, press conferences, beat-reporter notes — all of it goes through the same loop: stated, observed, graded.

**The rule, complete:** ingest everything, always — and test everything, always. Ingestion is never gated by testing, and testing never waits for ingestion to finish. The formal bake-offs (does a candidate beat the bar) come later. The learning loop (predict → observe → grade) runs from the first snap. A brain that grades itself play by play doesn't need to be told when it's wrong. It knows.
