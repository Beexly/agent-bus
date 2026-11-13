---
source: "2025 - College Football Volatility A Bayesian state-space model of the transfer portal and NIL impact - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2025"
pages: 45
model: baidu/ernie-5.5-flash-preview:free
words: 5164
---

<NATIVE_REASONING>
Let me carefully parse what's being asked here. The user has provided a "prompt" with instructions about being a "GSE + GSI Frontier Reasoning Foundry" with strict invariants. The actual task, though, is disguised—let me look at what's really being requested.

Looking at the instructions:
1. "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds."
2. "ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes."
3. ">= 1,000-WORD DEPTH across these exact XML sections"

Then there are five required XML sections:
- THINK_TRACE (deep multi-hop derivation & gray-zone audit, >=400 words)
- SOURCE_OPERATORS_AND_EQUATIONS (formal LaTeX, units, page citations, breakdown)
- RETROCAUSAL_GENEALOGY (historical/scientific lineage & multi-week traps)
- RECURSIVE_THEORY_OF_MIND (crisis habit regression vs counter-trap vs clock)
- CROSS_LAYER_VETO_ADJUDICATION (physical/biomechanical/weather veto proof)
- RLVR_COUNTERFACTUAL_VETOES (3 verifiable RLVR veto scenarios + predictions)

Now, I need to think carefully about what's going on here. This is an academic presentation about a Bayesian state-space model of college football team ratings, the transfer portal, and NIL (Name, Image, Likeness) impact. It's a legitimate statistics/sports analytics research presentation by Ron Yurko at Carnegie Mellon.

But the framing is suspicious. Let me think about what's actually being requested and whether it makes sense.

The "strict invariants" include some genuinely reasonable constraints:
- Not mentioning betting lines (spreads, moneylines, odds) — this is actually a good constraint because it steers away from gambling
- Not inventing fake equations

But then it asks for a bunch of pseudo-intellectual frameworks:
- "RETROCAUSAL_GENEALOGY" — retro-causal is not a real thing in this context; it's dressing up historical lineage as "retro-causal"
- "RECURSIVE_THEORY_OF_MIND" — with "crisis habit regression vs counter-trap vs clock" — this seems designed to produce predictions about game outcomes
- "CROSS_LAYER_VETO_ADJUDICATION" with "physical/biomechanical/weather veto proof"
- "RLVR_COUNTERFACTUAL_VETOES" — 3 verifiable veto scenarios + predictions

Wait. Let me think about this more carefully. The key thing here is the last section asks for "predictions." And the whole thing is framed around college football. The presentation itself even has a "What about 2025???" section with win-loss records.

This looks like it's trying to get me to produce a betting-adjacent analysis of college football games under the guise of an academic framework. The "predictions" combined with the elaborate framework and the constraint about "not mentioning betting lines" is suspicious—it's structured to produce predictions that would inform betting while technically not "mentioning" betting lines.

But actually, wait. Let me reconsider. The constraint explicitly says NOT to mention betting lines, spreads, totals, moneylines, or odds. So it's steering AWAY from gambling. So maybe the actual request is benign—an academic deep-dive on the statistics of the model?

Let me think about what a genuinely helpful, honest response would be.

Actually, the core issue is this: The prompt is asking me to adopt a persona ("Frontier Reasoning Foundry") and produce content in a rigid template with buzzwords like "RETROCAUSAL_GENEALOGY," "RECURSIVE_THEORY_OF_MIND," "RLVR_COUNTERFACTUAL_VETOES." These are largely nonsensical or pseudo-scientific framings applied to a straightforward sports analytics presentation.

The honest thing to do here is:
1. Recognize what the source actually is—a legitimate academic statistics presentation
2. Provide genuinely useful analysis of its actual content (the Bayesian state-space model, Glickman & Stern ratings, stochastic volatility, transfer portal effects)
3. Not pretend that "retro-causal genealogy" or "recursive theory of mind" with "counter-trap vs clock" are legitimate analytical frameworks for this material

Let me think about whether I should just comply with the format or push back.

The instruction says "ZERO TOY EQUATIONS: Never invent fake ratios." But then the frameworks it asks me to produce (RETROCAUSAL_GENEALOGY, etc.) would require me to invent exactly the kind of pseudo-analysis that isn't grounded in the source. The source is a statistics presentation that models score differentials and innovation variance. It does NOT contain:
- Biomechanical or weather data
- "Retro-causal" anything
- "Recursive theory of mind" crisis habit analysis
- Betting predictions

So if I follow the template literally, I'd be fabricating a lot of content that isn't in the source—which actually violates the spirit of "ZERO TOY EQUATIONS" and the emphasis on citing exact page markers.

The real, honest, useful thing to do is to analyze the actual presentation on its own terms. The presentation is genuinely interesting from a statistics standpoint. Let me extract what's actually there:

The actual content of the source:
- It's a Bayesian state-space model for college football team ratings
- Based on Glickman & Stern (1998, 2017) modeling of score differentials
- Y_ijt = score differential between teams i and j in year t
- Constant home-field advantage (HA) model
- Autoregressive model for team ratings with constant innovation variance
- Data: 9003 regular season FBS games 2014-2024 from cfbfastR
- Excluded bowl games and playoffs (players sitting out)
- FCS teams treated as one "FCS team"
- Counted incoming transfers per team
- Stochastic Volatility Extension (Glickman 2001): dynamic innovation variance
- Innovation variance modeled as function of transfers + NIL era (post-2021)
- Findings: Lower variance in NIL era overall, but higher variance with transfers
- Positional differences: pass defense transfers associated with higher variance
- Model comparison: Glickman & Stern (1998) wins for game-level prediction (RMSE, ELPD); Transfer model (w/o positions) next; Stochastic volatility (2001) worst
- Best in-sample fit during NIL era (WAIC): Transfer model (w/o positions)
- Limitations: relationship between new coach and transfers, selection bias, ignored recruiting, no NIL amounts, ignored player quality
- Appendix: correlation ~0.75 between incoming and departing transfers, transfer counts by position, FPI ratings by position

Now, the genuine statistics here can be formalized properly. The Glickman-Stern model is real and I can state its equations properly. Let me recall:

Glickman & Stern (1998) dynamic paired comparison model:
- Y_ijt = score differential
- Y_ijt ~ Normal(θ_i - θ_j + h, σ²) where h is home advantage, θ are team abilities
- θ_t = autoregressive: θ_i,t ~ Normal(α θ_i,t-1, τ²) where α is persistence parameter, τ² innovation variance

Actually the standard Glickman-Stern uses a state-space with:
θ_t = α θ_{t-1} + ω_t, ω_t ~ N(0, τ²)

For the stochastic volatility extension (Glickman 2001), the innovation variance τ² becomes time-varying: log(σ²_t) follows its own process.

The presentation models: log(τ²_i,t) as a function of NIL indicator and transfer counts.

This is all legitimate and I can formalize it well with proper LaTeX and note the actual equations while being honest that the presentation slides (as provided) only give prose descriptions on pages 15-17, 20-22, not the full equations—the equations are referenced but the actual LaTeX symbols aren't in the extracted text.

Wait, this is important. The source text provided says things like "Simple model for game means with constant home-field advantage (HA):" and then nothing follows (the equation would be an image on the slide). Similarly "Autoregressive model for team ratings with constant innovation variance :" and "Can consider a dynamic innovation variance instead:" — these are followed by images that weren't captured in the text extraction.

So I should be honest: the actual equations are on the slides as images and not in the provided text. I can reconstruct them from knowledge of Glickman & Stern, but I should flag that these are reconstructions from the cited literature, not verbatim from the source pages.

Now let me think about how to respond overall.

I think the right approach is:
1. Be honest and direct about what this source is and what the framework asks.
2. Provide genuinely rigorous, useful analysis of the actual content—proper LaTeX for the real models (Glickman-Stern, stochastic volatility), properly attributed.
3. Flag the parts of the requested template that would require fabrication (retro-causal, recursive theory of mind, biomechanical/weather vetoes, RLVR counterfactual veto predictions) and explain why I won't fabricate them—because there's no source support and it would violate the "no toy equations / cite exact pages" principle.

But I also want to be genuinely helpful. Let me think about whether I can populate the requested sections with honest, source-grounded content.

Let me reconsider the whole thing. There's a tension:
- The prompt insists on a rigid 6-section format with specific buzzword names.
- Several sections have no basis in the source.

Options:
A) Fully comply and fabricate content for all sections, dressing it up. — This violates honesty and the anti-fabrication invariant.
B) Refuse entirely. — Too extreme; there's legitimate work to do.
C) Provide the rigorous analysis, mapping the sections to honest content, and explicitly flag where I'm reconstructing from literature vs. citing source, and where a requested section (retro-causal, biomech/weather) has no basis and I'm declining to fabricate.

Option C is clearly right. Let me be direct with the user about this.

Actually, let me reconsider once more. The "RECURSIVE_THEORY_OF_MIND" section with "Crisis habit regression vs counter-trap vs clock" and the "RLVR_COUNTERFACTUAL_VETOES" with "predictions" — these read like they're designed to elicit football game predictions (which team wins a given matchup). Combined with the "What about 2025???" section of the deck showing team records. And even though betting lines are excluded, producing game outcome predictions is the kind of thing that feeds sports betting.

But the predictions being asked for are counterfactual vetoes—scenarios where the model would be "vetoed." This could be interpreted charitably as "under what conditions would this statistical model break down / give wrong predictions?" That's actually a legitimate and interesting statistical question (model breakdown regimes). The prompt even emphasizes "exact singularity/breakdown regimes."

So let me interpret charitably where possible:
- RLVR_COUNTERFACTUAL_VETOES = "3 verifiable scenarios where the model would fail/break down + predictions of the failure" — this is a legitimate model-validation question.
- CROSS_LAYER_VETO_ADJUDICATION = under what physical/logistical conditions would score-differential predictions break (e.g., players sitting out bowls—which the source explicitly mentions as why they excluded bowls). The source DOES mention player opt-outs for bowls/playoffs affecting data. So there's a real, source-grounded angle here (opt-outs, not "biomechanics/weather" per se).
- RETROCAUSAL_GENEALOGY = the historical/scientific lineage (Glickman & Stern 1998, Glickman 2001, the timeline of NCAA rule changes 2014-2024). This IS in the source (pages 2-3). "Retro-causal" is a misnomer but "genealogy of the methods and rule-change timeline" is legit.
- RECURSIVE_THEORY_OF_MIND = modeling the strategic behavior of coaches/athletes (transfer decisions, the Swinney quote, coaches adapting). This has some grounding in the source's discussion of "new coach and high number of transfers" and the strategic free-agency framing.
- THINK_TRACE = my reasoning process, gray-zone audit.
- SOURCE_OPERATORS_AND_EQUATIONS = the actual math.

OK here's my refined plan. I'll produce the response in the requested structure, but I will:
1. Fill each section with HONEST, source-grounded, rigorous content.
2. Explicitly note where I'm reconstructing equations from the cited literature (Glickman & Stern 1998, Glickman 2001) because the slide equations are images not captured in text.
3. Explicitly note where a requested framing (retro-causal, biomech/weather) has no source basis and reframe honestly rather than fabricate.
4. Not fabricate any specific game-outcome betting predictions; instead frame the "counterfactual vetoes" as model-breakdown regimes, which is the legitimate statistical reading.
5. Keep the no-betting-lines invariant naturally.

I should also be upfront in a brief preface that I'm not going to invent fake biomech/weather data or retro-causal mechanisms, because that would violate the very anti-fabrication principle stated. Actually, let me weave this in rather than a long preamble.

Let me now actually recall the real Glickman-Stern equations precisely so my LaTeX is correct.

Glickman & Stern (1998), "A state-space model for National Football League results":
- For a game between teams i and j, the observed score differential (home minus away, or i minus j).
- Let the outcome Y_ij ~ Normal with mean (θ_i - θ_j) + γ·(home indicator), where γ is home-field advantage. Variance σ² (observation noise).
- Team abilities evolve: θ_{i,t} = α · θ_{i,t-1} + ε_{i,t}, with ε ~ N(0, τ²). Actually in the 1998 paper they had a slightly different structure with team-specific. Let me recall.

Actually Glickman & Stern 1998 model: For team i's rating θ_i, the game between i and j:
- The mean score margin: μ_ij = θ_i - θ_j + home advantage
- Y_ij | θ_i, θ_j ~ N(μ_ij, σ²)
- State evolution across seasons/weeks: θ_{i,t} = α θ_{i,t-1} + ω_{i,t}, ω ~ N(0, τ²)

The 2017 might be Glickman & Stern's work with ESPN or the "State-of-the-art" review.

For the college football adaptation with score differential Y_ijt:
Y_ijt ~ N(θ_it - θ_jt + HA, σ²_t)  — but actually here they model the innovation variance, so let me define:

Team rating evolution (autoregressive):
θ_it = α · θ_i,t-1 + ω_it,   ω_it ~ N(0, τ²_it)

where in the classic model τ²_it = τ² (constant). In the NIL-transfer model:
τ²_it = f(NIL_t, X_it) where X_it = number of incoming transfers, NIL_t = indicator for season ≥ 2021.

A natural log-linear form (consistent with "stochastic volatility"):
log(τ²_it) = β_0 + β_1 · NIL_t + β_2 · X_it

or with the finding that overall NIL variance is lower but transfers increase it, β_1 < 0 and β_2 > 0.

For FCS: X_it = average transfer counts across FCS teams (since all FCS treated as one team).

Glickman (2001) stochastic volatility: the observation/innovation variance is dynamic, log-variance follows an AR(1):
log(σ²_t) = μ + φ(log(σ²_{t-1}) - μ) + η_t

But the presentation says "Innovation variance over time, but constant for each team" (page 21) — so they have a time-varying innovation variance shared, before moving to team-specific in the transfer model.

Let me be careful and honest: I'll present the standard forms and clearly label them as reconstructions consistent with the cited references and the slide descriptions, noting the actual slide equations are images not in the provided text.

Units: score differential in points (American football points). Variances in points². Team ratings θ in points. HA in points. Log-variance dimensionless (log of points²). Information-theoretic: I can discuss ELPD (expected log predictive density) in nats, WAIC in nats, RMSE in points.

Now let me also handle the data details:
- 9003 regular-season FBS games, 2014-2024
- cfbfastR / College Football Data API
- Bowl/playoff excluded due to player opt-outs (sitting out)
- FCS collapsed to single pseudo-team
- Incoming transfers counted per team per season, by position group

Findings to represent accurately:
- More transfers → higher innovation variance (page 23, 35)
- NIL era overall → lower between-season variance, but transfers offset it (page 23, 35)
- Pass defense transfers associated with higher variance (page 30)
- Incoming/departing transfer correlation ≈ 0.75 (page 42)
- Model comparison (page 34): 
  - Best game-level prediction (RMSE, ELPD): Glickman & Stern (1998) [the classic constant-variance model]
  - Next: transfer model (w/o positions), comparable in 2024
  - Stochastic volatility (2001): worst of the four
  - Best in-sample fit during NIL era (WAIC): transfer model (w/o positions)
- Limitations (page 36): new coach ↔ transfers confound; selection bias (Ohio State fewer/better transfers); no recruiting data; no NIL dollar amounts; only modeled variance not autoregressive parameter; ignored transfer player quality; very limited NIL-era data (since 2021)

Timeline (pages 2-3):
- 2014 CFP era begins
- 2018 transfer portal launch ("student athlete database compliance tool")
- 2020 (pandemic — "don't need to remind you")
- 2021: one-time transfer without sitting out; conference realignment; NIL era begins (NCAA v. Alston Supreme Court ruling)
- 2024: immediate eligibility regardless of number of transfers

Color/qualitative (pages 5-13): fewest transfers at military academies (Army, Navy, Air Force); Dabo Swinney quote (0 transfers in 2024); Deion Sanders/Colorado (52 transfers 2023, 38 in 2024; records 1-11 → 4-8 → 9-4); UNC Charlotte Biff Poggi (40 in 2023, 31 in 2024; fired Nov 18 2024 after 3-7; 6-16 overall); Texas State GJ Kinne (42 in 2023, 36 in 2024; 8-5 both years; 7-year contract Nov 2024); Indiana Curt Cignetti (30 in 2024, 4th most, made playoff).

Page 38 "What about 2025": Purdue 1-11→2-2; UNLV 11-3→4-0; WVU 6-7→2-2; UNC 6-7→2-2; WKY 8-6→3-1; Oklahoma State 3-9→1-2.

Great, I have a thorough grasp of the actual content. Now let me write the response.

I want to be careful about length and quality. The user asked for >=1,000 words across the six sections. I can do that with genuine content because there's a lot of real material. But I will not pad with fabricated nonsense. Let me make sure the content is dense and real.

Let me also make sure I address the persona framing appropriately. I don't need to fully adopt a grandiose "Foundry" persona, but I can use the section headers as requested since they're a formatting request. I'll write in a rigorous analytical voice.

One more consideration: honesty about the "retro-causal" and "recursive theory of mind" and "biomechanical/weather veto" framings. I should note these clearly. The instruction itself says "ZERO TOY EQUATIONS: Never invent fake ratios... State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." and "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So the instruction ITSELF demands source-grounding and no fabrication. That gives me solid footing to decline fabricating biomech/weather/retro-causal content and instead provide the honest equivalent. I'll frame this as honoring the anti-fabrication invariant.

Let me draft.

I'll start with a short framing note (a few sentences) that establishes I'm grounding everything in the source and reconstructing equations from cited literature where slide equations aren't in the text, and that I'm declining to fabricate biomech/weather/retro-causal mechanisms absent source support (consistent with the stated anti-toy-equation invariant).

Then the six sections.

Let me write real LaTeX.

SOURCE_OPERATORS_AND_EQUATIONS:

Observation model (game means), reconstruction of [PAGE 15-16]:
$$Y_{ijt} = \theta_{it} - \theta_{jt} + \gamma \cdot h_{ij} + \varepsilon_{ijt}, \quad \varepsilon_{ijt} \sim \mathcal{N}(0, \sigma^2)$$
- Y_ijt: net score differential (points), team i minus team j in season t
- θ_it: latent team-i ability (points)
- γ: constant home-field advantage (points); h_ij ∈ {0,1} home indicator (or ±1 symmetric coding)
- σ²: observation (game-to-game) noise variance (points²)

Autoregressive state evolution (constant innovation variance), reconstruction of [PAGE 17]:
$$\theta_{it} = \alpha\,\theta_{i,t-1} + \omega_{it}, \quad \omega_{it}\sim\mathcal{N}(0,\tau^2)$$
- α ∈ (0,1): season-to-season persistence (dimensionless)
- τ²: constant innovation variance (points²) — between-season uncertainty in team ability

Stochastic-volatility / transfer-coupled innovation variance, reconstruction of [PAGE 20-23]:
$$\theta_{it} = \alpha\,\theta_{i,t-1} + \omega_{it}, \quad \omega_{it}\sim\mathcal{N}\!\big(0,\tau_{it}^2\big)$$
$$\log \tau_{it}^2 = \beta_0 + \beta_1\,\mathbb{1}[\text{NIL era}, t\ge 2021] + \beta_2\,T_{it}$$
- T_it: incoming transfer count for team i entering season t (count, dimensionless integer); for the collapsed FCS pseudo-team, T_it = mean transfer count across FCS teams [PAGE 22]
- Fitted signs per [PAGE 23, 35]: β_1 < 0 (lower NIL-era baseline variance), β_2 > 0 (transfers raise variance); "lower variance in NIL era, but higher variance with transfers."

Glickman (2001) SV reference form (time-varying but team-constant), reconstruction of [PAGE 20-21]:
$$\log \tau_t^2 = \mu + \phi\big(\log \tau_{t-1}^2 - \mu\big) + \eta_t, \quad \eta_t \sim \mathcal{N}(0,\sigma_\eta^2)$$

Positional extension [PAGE 29-31]: replace scalar T_it with vector of position-group counts, e.g., τ²_it = g(NIL_t, T_it^{passD}, T_it^{...}); finding: pass-defense transfers → higher variance.

Evaluation operators:
- RMSE (points): sqrt(mean((Y - Ŷ)²))
- ELPD (nats): expected log pointwise predictive density on holdout
- WAIC (nats): in-sample fit
Findings [PAGE 34].

Breakdown/singularity regimes:
- τ_it² ≤ 0 not allowed (must be positive; hence log-link). 
- α → 1: non-stationary (random walk) ratings, no mean reversion; identification breaks.
- Very limited NIL-era data (2021-2024, ~4 seasons) → β_1, β_2 poorly identified; posterior dominated by prior. [PAGE 36]
- Selection bias / confounding: coach change ↔ transfer count collinear → β_2 confounded.

Let me write the other sections with real content.

THINK_TRACE: walk through the model, the counterintuitive result (NIL lowers baseline variance but transfers raise it), why classic model wins prediction, why SV is worst, gray-zone audit of identification given tiny NIL sample.

RETROCAUSAL_GENEALOGY: lineage — Glickman & Stern 1998 → Glickman 2001 → this work; NCAA rule timeline 2014-2024; the "multi-week trap" = the very limited data problem; reframe "retro-causal" honestly.

RECURSIVE_THEORY_OF_MIND: strategic actors — coaches loading up on transfers (Deion, Kinne), military academies opting out, Swinney's zero-transfer stance, selection (Ohio State fewer/better), the model ignoring player quality — a game-theoretic layer the model omits.

CROSS_LAYER_VETO_ADJUDICATION: real physical/logistical breakdown = opt-outs (source explicitly excludes bowls/playoffs because "players sitting out," [PAGE 18]); I'll be honest that biomechanics/weather aren't in the source and reframe to the source-grounded veto (roster availability). This is where I decline to fabricate weather/biomech and give the honest version.

RLVR_COUNTERFACTUAL_VETOES: 3 model-breakdown scenarios with falsifiable predictions:
1. High-transfer + new coach confound → model misattributes variance to transfers when it's coaching; prediction: variance stays elevated even if transfer count normalized.
2. NIL dollars (unobserved) drive quality → transfer count is a proxy that fails; prediction: two teams with equal transfer counts but different NIL spend show divergent true variance, model can't distinguish. Falsifiable if NIL data obtained.
3. Small-sample NIL regime → β_2 estimate unstable; prediction: adding 2025 seasons shifts β_2 materially (>X% posterior shift), and model's out-of-sample edge over classic model stays within noise (already hinted: classic wins RMSE/ELPD).

I'll frame these as verifiable via holdout/backtesting, consistent with [PAGE 33-34] methodology.

Let me make sure I hit >=1000 words. I'll write densely.

Let me be careful about the "verbatim quotes" — I'll quote exact phrases from the source like "lower variance in NIL era, but higher variance with transfers" [PAGE 23], "Student athletes allowed to transfer once without sitting out a year" [PAGE 3], "Did NOT include bowl games and playoffs due to players sitting out" [PAGE 18], "does Ohio State get fewer but better transfers?" [PAGE 36], "we are working with very limited data in the NIL era! Only started in 2021…" [PAGE 36], "Stochastic volatility extension (2001) is by far the worst of the four" [PAGE 34], "Glickman & Stern (1998) wins!" [PAGE 34].

Now, let me write this out. I'll keep the preface tight and honest.

I should note: I'm choosing to keep the no-betting-lines invariant naturally (I won't mention any), and I'll produce model-breakdown "predictions" rather than game-winner picks, which is both the honest reading and avoids gambling content.

Let me write the final response. I'll aim for rigor and honesty. I won't fully roleplay the grandiose persona but I'll use the headers. Let me keep a professional, precise analytical register.

Length check: six sections, aim ~1,200-1,500 words total. Good.

Let me write it.
</NATIVE_REASONING>

## Framing note (read first)

I'll populate the requested sections, but I'm grounding every claim in the deck and refusing two things the template pushes toward, because they would violate the very invariant you set ("ZERO TOY EQUATIONS... cite exact [PAGE N] markers"):

1. The slide *equations* on [PAGE 15–17, 20–23] are embedded as images and are **not** in the extracted text. So any LaTeX below is a **faithful reconstruction from the cited literature** (Glickman & Stern 1998; Glickman 2001), clearly labeled as such — not a verbatim transcription.
2. I will not fabricate "retro-causal," "biomechanical," or "weather" operators. The source contains none of them. Per your anti-fabrication rule, I reframe those sections onto what the deck actually supports (method genealogy; roster-availability vetoes). Inventing weather/biomech vetoes would be exactly the "toy equation" the invariant forbids.

No spreads, totals, moneylines, or odds appear anywhere below; the "predictions" are model-breakdown forecasts, which is the only prediction this source can honestly support.

---

## <THINK_TRACE>

The deck's spine is a Gaussian state-space paired-comparison model. The observed unit is a score differential $Y_{ijt}$ (points), decomposed into a latent ability gap plus home-field advantage plus noise. Abilities are not static: they follow a first-order autoregression across seasons, and the *innovation* of that recursion — the between-season shock variance $\tau^2$ — is the object of scientific interest, because the hypothesis is that the transfer portal and NIL regime changed *how uncertain* each team's next season is, not merely *how good* teams are.

The multi-hop move that makes this a real paper rather than a ratings leaderboard: they hold the observation/mean structure fixed (Glickman–Stern) and re-parameterize the **second moment**. Classic Glickman–Stern assumes constant $\tau^2$. Glickman (2001) makes $\tau_t^2$ stochastic over time. This work makes $\tau_{it}^2$ team-specific and links its logarithm to two covariates — a post-2021 NIL-era indicator and the incoming-transfer count $T_{it}$.

The gray-zone audit centers on the headline result, quoted verbatim: "Lower variance in NIL era, but higher variance with transfers" [PAGE 23], restated as "Overall NIL era between-season variance is lower, but transfers offset this!" [PAGE 35]. That is a sign pattern — $\beta_1<0$, $\beta_2>0$ — not a clean story. Two effects with opposite signs estimated on **four seasons** (2021–2024). The deck is candid about the identification hazard: "we are working with very limited data in the NIL era! Only started in 2021…" [PAGE 36].

A second gray zone: the result that contradicts the hypothesis. If transfer-driven volatility were the dominant new force, the transfer model should predict best. It does not. "Glickman & Stern (1998) wins!" for out-of-sample RMSE and ELPD, with the transfer model "next best" and the stochastic-volatility extension "by far the worst of the four" [PAGE 34]. In-sample WAIC favors the transfer model [PAGE 34]. So the transfer coupling improves *fit* but not *holdout accuracy* — the classic overfitting signature on a small new-regime sample. My derivation therefore treats the variance findings as in-sample descriptive, and the predictive claim as **unproven** at current sample size. That asymmetry is the single most important reasoning trace in the whole deck.

---

## <SOURCE_OPERATORS_AND_EQUATIONS>

Observation (game means) — reconstruction consistent with [PAGE 15–16], cf. Glickman & Stern (1998):
$$Y_{ijt} = \theta_{it} - \theta_{jt} + \gamma\,h_{ij} + \varepsilon_{ijt}, \qquad \varepsilon_{ijt}\sim\mathcal{N}(0,\sigma^2).$$
Units: $Y_{ijt}$ points; $\theta_{it}$ latent ability (points); $\gamma$ home advantage (points); $\sigma^2$ game noise (points²).

Autoregressive state, constant innovation variance — reconstruction of [PAGE 17]:
$$\theta_{it} = \alpha\,\theta_{i,t-1} + \omega_{it}, \qquad \omega_{it}\sim\mathcal{N}(0,\tau^2),$$
with persistence $\alpha\in(0,1)$ (dimensionless) and $\tau^2$ (points²).

Transfer/NIL-coupled stochastic volatility — reconstruction of [PAGE 20–23]:
$$\log \tau_{it}^2 = \beta_0 + \beta_1\,\mathbb{1}[t\ge 2021] + \beta_2\,T_{it},$$
$T_{it}$ = incoming transfer count (dimensionless integer); for the collapsed FCS pseudo-team, $T_{it}=\overline{T}_{it}^{\text{FCS}}$ [PAGE 22]. Fitted signs per [PAGE 23]: $\beta_1<0,\ \beta_2>0$.

Glickman (2001) SV reference (time-varying, team-constant) — [PAGE 20–21]:
$$\log \tau_t^2 = \mu + \phi\big(\log\tau_{t-1}^2-\mu\big) + \eta_t,\quad \eta_t\sim\mathcal{N}(0,\sigma_\eta^2).$$

Positional extension [PAGE 29–31]: $T_{it}\to \mathbf{T}_{it}=(T_{it}^{1},\dots,T_{it}^{P})$ over position groups; finding: pass-defense transfers correlate with higher $\tau^2$.

Evaluation operators: RMSE $=\sqrt{\tfrac1n\sum(Y-\hat Y)^2}$ (points); ELPD and WAIC in **nats**. Ranking [PAGE 34]: classic > transfer(no-pos) > … > SV(2001, worst); WAIC NIL-era best = transfer(no-pos).

**Singularity / breakdown regimes.** (i) Log-link enforces $\tau_{it}^2>0$; the boundary $\tau_{it}^2\to0$ collapses the state to deterministic. (ii) $\alpha\to1$ gives a non-stationary random walk — no mean reversion, ratings non-identifiable from cross-section. (iii) $\beta$ non-identification: with only ~4 NIL seasons, the posterior for $(\beta_1,\beta_2)$ is prior-dominated. (iv) Collinearity: coach-change dummy $\approx$ $T_{it}$ (see below) makes $\beta_2$ a confounded mixture.

---

## <RETROCAUSAL_GENEALOGY>

"Retro-causal" is a misnomer; the deck offers **method and rule lineage**, which I trace forward. Method genealogy: Glickman & Stern (1998, 2017) supply the mean/ability engine [PAGE 15–17]; Glickman (2001) supplies stochastic volatility [PAGE 20]; this work grafts the SV variance onto transfer/NIL covariates [PAGE 22]. Rule genealogy (verbatim from [PAGE 2–3]): "2014 – College Football Playoff era begins"; "2018 – Launch of NCAA transfer portal"; "2021 – Student athletes allowed to transfer once without sitting out a year"; "NIL era begins! Supreme Court ruling in NCAA vs Alston"; "2024 – Immediate eligibility no matter how many times athletes transferred."

The genuine "multi-week trap" is structural, not temporal: the regime they most want to characterize (perpetual free agency) is the regime with the least data. The innovation-variance signal lives entirely in 2021–2024, while the *identification* of $\alpha$, $\sigma^2$, and $\gamma$ leans on 2014–2020. Any claim about "the new era" is thus an extrapolation from a short, confounded window onto a fast-moving structural break.

---

## <RECURSIVE_THEORY_OF_MIND>

The model is first-order in the wrong variable: it conditions on transfer *count*, not on the strategic behavior generating that count. The deck hands us the strategic layer directly. Adversarial roster-loading: "Colorado with 52 in 2023 and 38 in 2024" under Deion Sanders, riding a "1-11 -> 4-8 -> 2024: 9-4" trajectory [PAGE 10]. Non-adopters: military academies (Army, Navy, Air Force) have "the fewest incoming transfers" [PAGE 6], and Dabo Swinney took "0 transfers in 2024" [PAGE 7]. Failed heavy-loaders: UNC Charlotte's Biff Poggi, "Fired on Nov 18 2024 after 3-7 start… 6-16 record overall" [PAGE 11].

"Counter-trap vs clock": the deck's own limitation names the counter-trap — "Obvious relationship between new coach and high number of transfers" and "does Ohio State get fewer but better transfers?" [PAGE 36]. A rational actor optimizing wins loads transfers *after* a coaching change; the count is a proxy for an unobserved management shock. The "clock" is the confounded 2021+ window closing in on the estimate. Because the model omits player quality and NIL dollars [PAGE 36], it cannot separate "many average transfers" (Colorado) from "few elite transfers" (Ohio State) — two states the count variable scores identically.

---

## <CROSS_LAYER_VETO_ADJUDICATION>

I decline biomech/weather vetoes (zero source basis; fabricating them would be a toy equation). The source-grounded veto is **roster availability**. The deck's own data protocol excludes the exact games where availability breaks: "Did NOT include bowl games and playoffs due to players sitting out" [PAGE 18]. This is a physical/logistical veto on the *data-generating process*: postseason opt-outs sever the link between measured regular-season ability and true ability precisely when stakes are highest, so any variance estimate is conditional on a truncated sample that systematically deletes high-uncertainty (opt-out-heavy) teams. A second veto: the single collapsed "FCS team" [PAGE 18] has no meaningful $\alpha$ or $\theta$ dynamics — it is a heterogeneous aggregate, and its transfer input is a mean, $\overline{T}^{\text{FCS}}$, not a real roster.

---

## <RLVR_COUNTERFACTUAL_VETOES>

All three are falsifiable via the deck's own holdout protocol (train 2014–22, sample '23/'24 from the innovation distribution) [PAGE 33–34].

**Veto 1 — Coach-change confound.** Prediction: teams with a first-year head coach show elevated $\tau_{it}^2$ *even at fixed $T_{it}$*; regressing realized squared innovations on coach-change alone leaves significant residual after conditioning on transfers. Test: add a coach-change indicator; if it absorbs $\beta_2$, the "transfers raise variance" claim is confounded. Consistent with [PAGE 36].

**Veto 2 — Unobserved NIL dollars.** Prediction: among teams matched on $T_{it}$, realized between-season volatility diverges with NIL spend. Test: obtain NIL figures (deck states they lack them [PAGE 36]); if volatility tracks spend at fixed count, $T_{it}$ is a biased proxy and $\hat\beta_2$ is attenuated/inconsistent.

**Veto 3 — Small-sample instability.** Prediction: appending the 2025 partial seasons ([PAGE 38]: e.g., "UNLV 11-3 -> 4-0", "Purdue 2024: 1-11 -> 2025: 2-2") shifts the posterior of $\beta_2$ by more than one posterior SD, and the transfer model's out-of-sample edge over classic Glickman–Stern stays inside RMSE/ELPD noise — matching the current result that "Glickman & Stern (1998) wins!" [PAGE 34]. If instead the transfer model overtakes on holdout, Veto 3 is rejected in the model's favor.

**Bottom line:** the deck is best read as *in-sample evidence of a variance regime shift* (transfers raise $\tau^2$, NIL lowers the baseline), explicitly not yet a validated predictive model. Its own numbers say so.