# media/audio-voice-policy.md
## What it is (1-2 sentences)
Binding doctrine on all uses of audio and voice in Sports OS media — operator-recorded narration, AI-generated voice synthesis, background music, and audio branding. Source: Prompt 4 Final Wave; binding on all agents and operators.
## Key metrics/methods (formulas where given, else "not specified")
- Claim-governance table applied to spoken claims: "Our model is confident on [team]" must carry confidence-score context (not a guarantee); "Win rate of X%" requires ≥30 settled picks + defined window + model version; "Sharp money is on [team]" FORBIDDEN without Tier 1/2 backing; "This is a lock" PERMANENTLY FORBIDDEN; injury claims must be Tier 1 or labeled "Unconfirmed"; "For entertainment purposes only" REQUIRED whenever pick content is narrated.
- AI-generated voice conditionally approved (methodology explainers, Model Journal audio, pick provenance walkthroughs, Almanac companion audio) with visible disclosure ("AI-narrated content"), never buried. Synthetic athlete/coach/broadcaster voice permanently forbidden.
- Music: commercial-use license only (CC0, CC BY with attribution, licensed stock libraries like Artlist/Epidemic Sound/Musicbed, or original operator compositions); copyrighted commercial music, CC BY-NC in commercial context, and broadcast audio signatures all forbidden.
- Operator voice is approved and default-preferred; the operator's personal name must not surface in public media.
## Data sources named
No external data sources; internal cross-references: media-studio-workflow.md, video-brief-pipeline.md, media-automation-risk-policy.md, claim-governance.md, compliance-scanner rules (`apps/web/lib/compliance-scanner/rules.ts`).
## Findings (numbers and facts, not vibes)
- Garrett's personal name must not surface in public media (consistent with brand-safety rules).
- Approval gates: operator per piece for AI voice; owner for adding AI voice tools, audio branding, investor-facing narration.
- Codex audit requirements include P1 reporting of any unapproved AI voice tool and any narration script with forbidden vocabulary.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: media/brand-safety doctrine; the ≥30-settled-pick win-rate rule and sharp-money ban are the same claim-governance numbers the pick pipeline must honor publicly.
## Engine-actionable? (yes/no + one-line what)
No — audio/media compliance doctrine; no model or metric for the engine.
