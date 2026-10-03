# ROUND 2: THE GAUNTLET (2026-09-14, Motif architect)

Round 1 is done. It was competent. Competent doesn't make money. This is
round 2, and the standard is different: **every build ships at 9.2/10 or it
doesn't ship at all.** Anything below 9.2 stays internal — that is the
standing rule, no exceptions, no "good enough for now."

## Autonomy protocol (unchanged)

No questions, no stopping between builds, no stalling on failures. One
ferry at the very end — all bundles, one handoff. You already know the
model: Garrett forwards to Motif, Motif lands it in the repo.

## The gauntlet (this is the entire job)

For each of the 6 builds, in order:

1. **Name what world-class looks like.** Three real websites or products
   this build should be measured against. Not vibes — names.
2. **Score the current build 1–10** against the rubric below. Be brutal.
   If you'd defend it to a paying customer, prove it in the score.
3. **List every defect as a specific, fixable item.** "Could be better" is
   not a defect. "The headline is generic, the CTA is below the fold on
   mobile, the pricing section has no objection handling" is.
4. **Fix them all.** Then re-score.
5. **If a build can't reach 9.2 in three fix rounds, rebuild it from
   scratch.** Polishing a 7 does not produce a 9.2.
6. Log the scores, the defects, and the fixes in the build README. The log
   is the proof of work.

## Rubric (100 points, divide by 10)

- **Visual supremacy, 40.** Typography with intent, spacing rhythm, color
  with a point of view, real imagery, motion that serves the story. A
  stranger should feel something in the first three seconds.
- **Conversion, 30.** Headline earns the scroll. One clear CTA above the
  fold. Objections answered before they're asked. Proof everywhere a claim
  appears. Upsells at the moment of delight, never before.
- **Craft, 20.** Mobile-first, not mobile-tolerated. Every state works:
  empty, error, loading, success. Forms validate. Nothing 404s, nothing
  overlaps, nothing janks.
- **Weight, 10.** Loads fast. No dependency that doesn't earn its bytes.

## Banned (instant fail, fix on sight)

Lorem ipsum or any placeholder text. "Stunning," "cutting-edge,"
"revolutionary," or any adjective doing the job a fact should do.
Purple-blue gradients. Cookie-cutter hero (centered headline, two buttons,
three cards). Fake testimonials, fake stats, fake logos — if it isn't real,
it isn't there. Stock-looking AI imagery with melted hands, warped text,
or dead eyes.

## Per-build hard upgrades (minimum — exceed these)

1. **Kit sales page.** The current page tells; make it *show*. An
   interactive before/after of a real sample-site transformation. The $350
   offer must feel underpriced by the time they reach the CTA. DM-KIT path
   frictionless.
2. **SignPreview.** The mockup is the product. Type-exact lettering on a
   photoreal storefront must make a shop owner see THEIR shop. The embed +
   setup flow must be installable by a non-technical owner in under five
   minutes, docs included. $150 upsell at peak delight.
3. **Vow & Post.** These are design products. The templates themselves
   must be beautiful enough that a bride screenshots them. Four products,
   print proofs, Etsy titles/tags/descriptions ready to list the day the
   account connects. Never the words "AI wedding signs" anywhere.
4. **Seating-chart planner.** Must feel like a toy, not a form.
   Tap-to-seat, drag, delight. Email gate before the finished chart, Vow &
   Post upsell after.
5. **Quote calculator.** A business owner enters storefront dimensions and
   gets sizing, materials, and a ballpark that feels *considered*, not
   random. Email gate before the number. SignPreview/Kit upsell after.
   Every figure labeled estimate, never a bid.
6. **Outreach kit.** Day 0/3/7 sequences that a Houston shop owner would
   actually reply to — sharp, short, human. Three partnership one-pagers
   (sign shops, wedding planners, venues). Lead scoring that reflects how
   a sale actually happens. Drafts only; nothing sends.

## Fallback rules

Fallbacks are allowed only after the real attempt demonstrably failed, and
the attempt must be logged. "No live image API" is not a conclusion, it's
a first try — try harder: generated stills, canvas compositing, CSS
scenes. Every fallback in the final manifest names what was attempted
first.

## Done means

- Six builds, each scoring ≥9.2, with the score log in its README.
- Fresh zips + one master bundle + manifest, same naming pattern as round 1.
- Final summary: one line per build with its score, every download link,
  approvals needed to go live, failures attempted before fallback.
- Then stop. One ferry.
