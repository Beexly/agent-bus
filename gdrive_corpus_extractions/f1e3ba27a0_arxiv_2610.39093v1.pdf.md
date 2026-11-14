---
source: "arxiv_2610.39093v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 51
model: deepseek/deepseek-v4.1-flash-1017
words: 8560
---

<NATIVE_REASONING>
We need answer user asks specific format with XML sections, depth >=1000 words, exact page citations and verbatim quotes. Need analyze source. Need likely derive "gray-zone audit", operators equations etc. Need understand task? They gave source and interface. Need respond with those sections. No explicit question beyond role. We need produce forensic synthesis. Need obey no betting lines. Need no fake ratios. Need formal LaTeX equations SI/information/probability units, assumptions, breakdown singularity. Cite [PAGE N] markers and verbatim quotes. Need >=1000 words across exact sections. Should include multi-hop derivation, gray-zone audit. Need "source operators and equations" likely extract operators/conformance formulas. Need "retrocausal genealogy", "recursive theory of mind", "cross-layer veto adjudication", "RLVR counterfactual vetoes" with 3 scenarios.

We must ground tightly in source. Need formal equations, units, assumptions, breakdown regimes. Since paper empirical SE not physics. We can express conformance metrics as probabilities/counts, information, time, etc. Avoid fake ratios like Force/Fatigue. Use real ratios like conditional failure fraction deviating/taken-on defined in paper [PAGE 16? Figure 3]. Need state exact equations with units. Use counts dimensionless, time ms/s, information bits maybe log2 of macro states. Need assumptions and singularities: denominator zero cells no taken-on; M12 semiotic label strength; I01 timing threshold; X parser partial tree; fuzz discovery bound. Need cite exact [PAGE N] markers and verbatim quotes. Need include quotes. Could quote short phrases.

Need cover all sections. Need likely word count 1000+ maybe 1800. Desired oververbosity 5. Need be rigorous but concise. Need use exact XML tags. No markdown? XML sections. Inside can use LaTeX. Need maybe all sections in order.

Let's map source key facts and pages:
P1 abstract: 108 req; six open-source clients eight configs; 69 vectors; Node.js five browsers three engines; 78 findings, 3-21 must-level deviations; none Wrapper-following OSS fills required macros in Wrapper request; IMA does; timeout uncaught process; pod completion miscredit fixed 5.3.0; jsdom vs browsers.
P2 pod example, downloads.
P3 RQs, study design, contributions.
P4 duties: Wrappers, errors, macros required, XML, pods, verification icons, media.
P9 catalog 108, strengths must 58, should39, may2, obs9; Table2.
P10 verdicts, G1-G4.
P12 timing thresholds.
P14 validity checks Table4.
P15 Table4b audits.
P16 Table5 verdicts.
P17 Figure 3.
P17-18 findings details.
P19 robustness.
P22 RQ2 XML parser table.
P24 RQ3 macro grid.
P25 error grid, fuzz.
P26 RQ4.
P27 implications.
P28-29 reporting.
P31-37 appendix catalog.
P37-46 findings.
Need exact quotes. We can quote exact phrases from source. Need page marker exact. Use [PAGE 17] for M12? Page 17 has quote "None of the five Wrapper-following open-source clients replaces [CACHEBUSTING] or [TIMESTAMP] in a Wrapper’s VASTAdTagURI (M12, must)." Good. P1 abstract quote "None of the tested open-source clients that follow redirect (Wrapper) chains fills the required macros in a Wrapper’s request" yes. P18 Shaka pod. P19 timeout quote. P22 XML parser quote "the verdict follows the XML parser the library uses in that runtime". P24 Table7. P25 fuzz. P26 sweep. Need maybe page 4 for macros "The list marks five as required". Great.

Need formal equations. We can define:
Let C_{r,c,l} ∈ {0,1} conformance indicator (1 conforms, 0 deviates) if taken on. Or conditional failure fraction:
F_{g,k} = N_dev(g,k)/N_taken(g,k), dimensionless, with 0≤F≤1, defined only N_taken>0. Source [PAGE 16? Figure 3 caption] "A conditional failure fraction: the share of the cells a client takes on that deviate." Singularity at N_taken=0; rendered as no cell taken on. Good.
Total must deviations M_k = Σ_r m_r (1 - C_{r,k}) over graded must taken. Dimensionless count.
Macro replacement coverage Q_m = |{u ∈ U_m: v(u) ≠ literal, empty, absent}| / |U_m| maybe from Table 7. But source counts 0/50 request macros; 40 tracking. Need avoid fake. We can define R_req(k)=n_replaced/50; source Table 7 "requests 0 / 50" [PAGE 24]. Singularity none. The macro grid uses 50 request macros; 40 tracking pixels 4.3 set. Values: vast-client-js 6 value,34 -1/-2,0 literal,5 4.x, requests 0/50; video ad 2,0,38,5,0/50. We can define entropy:
H_m = -Σ p_i log2 p_i bits over outcomes {value, -1/-2, literal} for 40 tracking macros; maximum log2 3 = 1.585 bits. But need source? Derived from Table 7. Could be okay. Need not overdo. Maybe express conformance divergence as information. Need "information/probability units". Use bits. But only if not fake. Derived from counts. Good.

Timing:
ΔI01 = t_start - t_iconview? Paper: icon view precedes start by X ms; tolerance 50ms. Define signed lead L = t_start - t_view? If view before start, t_view < t_start, so L=t_start - t_view positive. Conforms if L≤50 ms? Actually I01 must not precede start by more than 50 ms. Source "An icon’s view request must not precede the start request by more than 50 ms" [PAGE 12]. So L = t_start - t_view ms, conform if 0? If after start, negative? Let's define lead L = t_start - t_view, positive if view precedes start. Conformance if L ≤ 50 ms (and if view after start, L negative okay). But source says must not precede start by more than 50ms. Good. Singularity: verdict at threshold; I01 on Linux Chromium straddles 36-68, 6/20 beyond. On macOS WebKit 51-58 all beyond. This is breakdown regime. Need mention "50 ms tolerance falls inside Linux Chromium spread" [PAGE 12].
Pod ordering tolerance 50ms: P03 condition t_complete(ad_i) + 50ms < t_impression(ad_{i+1}); source "pod ad’s completion must arrive before the next ad’s impression, with 50 ms of tolerance" [PAGE 12].
Timeout:
T_body? vast-client-js header timeout T_h, body no timeout. Slow-load limit = 3T_client+5s. Source P13 "slow-load limit of three times the client’s timeout plus 5 s (11 s)" and P19 stalled body nine hops in 54s. We can formalize total wait W = Σ_{h=1}^{H} (T_h? Actually body stalls unbounded) with no timeout. If body timeout absent, W→∞; breakdown: process hangs/slow load. Need mention.
Fuzz bound: "root cause with a per-case rate above 0.35 percent would have shown with 95 percent probability" [PAGE 26]. We can derive detection probability 1-(1-p)^n ≥0.95 with n=858? Need check: rounds 3-5 858 cases not seen before added none. p ≈ 0.0035. 1-(1-p)^858 ≈ 1-e^-3.003 ≈0.950. Good. Formal. Assumes independent. Nice.
Chao1 estimate 15.0 classes, 95% interval 12.4-37.3 vs 12 observed. [PAGE 25-26]. Could define. But don't need too much.

Need "gray-zone audit" include issues:
- Macro M12 strength rests on macro list Required label and §6.1 responsibility, not modal verb. Sensitivity: if M12 should, must deviations 83→76. If all macro reqs should 83→63. [PAGE 21].
- I01 timing threshold borderline; Linux Chromium 36-68, 6/20 beyond, reference 90/122; macOS Chromium 11-12 etc. So verdict run-dependent. [PAGE 12,20-21,23].
- Delegation cells: vast-client-js/vastlint-client harness as integrator; conforming cells upper bound. [PAGE 20,29].
- Rule G2 and G4 attribution. rmp-vast inherits vast-client-js, attributed under vast-client-js. [PAGE 19? Rule G4 P10; P46 note].
- XML parser W11 verdict runtime-specific: video-ad-sdk conforms under jsdom/Firefox, deviates Blink/WebKit; iab-vast-loader reverse. [PAGE 22-23].
- Robustness outside spec R01; C4 stalled body; C3 VPAID MP4 unhandled rejection. [PAGE 19,25].
- Fuzz bound weak: single generator, 5 rounds, root causes; 3 classes occur 1 each, none exactly 2; Chao1 15.0 vs 12. [PAGE 25].
- Version sweep old dependencies Oct 2026; bounds not exact. [PAGE 29].
- No human second rater. [PAGE 29-30].
- IMA archived one config, telemetry local; black-box. [PAGE 20,29].
Need citations.

Need "retrocausal genealogy": historical/scientific lineage and multi-week traps. "Retrocausal" means trace how later findings reveal earlier latent defects, version sweep, issue reports. Need mention:
- M12 issue reported 2019 (hwde, Doca) before study; present all swept releases 3.3.0-6.5.0 etc. [PAGE 6,26-27].
- Timeout reported as browser error issue #510, PR #514 during study, author PR #515; no reply. [PAGE 28-29].
- Pod order: vast-client-js sorted root pods from 6.2.0; video-ad-sdk sorted through 2.7.2, 3.0.0 rewrite introduced comparator returning 0. [PAGE 26-27].
- Shaka 5.3.0 fixes P03 and seven macro/tracking deviations, adds regression unknown macros replaced -1. [PAGE 18].
- Version sweep old behavior: M12 all 9; video-ad-sdk 502 code, Wrapper ClickThrough, cache-buster length, LIMITADTRACKING, percentage-progress all 9. [PAGE 27].
- Multi-week traps: tests under jsdom pass but browsers fail; the paper says "A test suite that runs only under jsdom... cannot see a class of defects" [PAGE 3? P1? Let's find exact. P3 contributions item 3: "A test suite that runs only under jsdom, as those of vast-client-js and video-ad-sdk do, therefore cannot see a class of defects (Section 5.2)." [PAGE 3]. Good.
- IAB schema empty 4.3, validation uses 4.2; ordered sequence issue. [PAGE 9,28].
Need "multi-week traps" maybe long-term retrocausal traps: reliance on shared code; library delegation; archived IMA config changes. We can frame as traps for future audit: don't infer current IMA from archive; don't assume jsdom verdict; don't assume macro list static (4.3 set 50 of 59, new DSA/GPP macros). [PAGE 9]. Good.

Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock. Need interpret. Need discuss maintainers/integrators/ad servers' beliefs. Crisis habit regression: when a defect not visible on screen, maintainers regress to habits: only test common path, jsdom, playback success. Counter-trap: integrator assumes library handles duties or majority vote; but clients share code and delegate; need check API and defaults. Clock: version sweep and release timing, Shaka 5.3.0 released day of reference; IMA archived config; timing thresholds clock. Need cite. Use ToM: maintainers know that ad plays, ad servers know counts mismatch, integrators assume. The paper: "A plausible reason these deviations persist... most of them do not break playback." [PAGE 27-28]. "the party that would notice runs neither the library nor its tests." [PAGE 28]. Great. "A conformance claim about a player built on one of these libraries depends on which duties its integrator wrote" [PAGE 28]. "A majority vote would hide a defect two clients share" [PAGE 5]. This fits counter-trap. "clock" Shaka 5.3.0 released day of reference runs; not in Fig3/Appendix B. [PAGE 16]. IMA live runs can load different code; archived. [PAGE 20]. Timing I01 clock. Good.

Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. In this context no physical/biomechanical/weather? We must adjudicate source's cross-layer vetoes: runtime XML parser, media codecs, engine timing, network. Need state no biomechanical/weather variables in source; such vetoes not admissible. But cross-layer veto adjudication: physical layer? Could mention media codec support (Linux WebKit FLV, Chromium no AAC) and network stall. "weather" not present; don't invent. Need maybe use "physical/biomechanical/weather veto proof" as required section; for this corpus, the physical layer is browser engine/media stack; biomechanical is human user actions? But no human participants. Weather absent. We can say "No weather or biomechanical variable appears in the source; any such veto would be out-of-distribution and rejected. The only cross-layer vetoes with evidence are XML parser, codec/media support, engine timing, run-to-run timing, and network stall." Need support. Cross-layer veto: W11 parser decides; S01 Linux WebKit reports FLV playable; S02 Chromium no AAC; T05-07 rmp-vast macOS WebKit durationchange NaN/Infinity; I01 timing. Need cite. For "proof" define veto matrix: verdict changes only if layer attribute. Use Table 6 [PAGE 22-23]. Need mention "Between Node.js and browsers ... agree in 393 of 396" [PAGE 22]. "open-source browser configurations differ from Chromium in 5 Firefox and 3 Linux WebKit" [PAGE 22]. Need quote "The XML parser matters most." [PAGE 22]. Great.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need propose counterfactual vetoes that are checkable. Must tie to source. We can say each scenario has a testable prediction and a veto if prediction fails. Need no betting lines. Need ensure "RLVR" maybe they expect "Reinforcement Learning from Verifiable Rewards counterfactual vetoes". We can frame as: Scenario 1: patch M12 macro replacement in a Wrapper request; prediction: Table 7 requests count changes from 0/50 to 50/50 for CACHEBUSTING/TIMESTAMP? Actually only two required but grid all request macros. If patch only required macros, would replace 2 of 50? Need not overclaim. Better prediction: Wrapper VASTAdTagURI no longer contains literal [CACHEBUSTING] or [TIMESTAMP]; M12 cell conforms. Veto if literal brackets remain or values malformed (CACHEBUSTING not 8-digit integer). Source M01 required random 8-digit integer [PAGE 4,34]. Cite. This is verifiable via network log.
Scenario 2: Bound body read by same timeout in vast-client-js; prediction no uncaught exception and no 54s nine-hop stalled chain; R01/C4 disappear; process survives. Source P19, P29 patch. Veto if uncaught exception or body wait >3T+5s. Cite.
Scenario 3: Run test suite in Blink/WebKit in addition to jsdom for W11; prediction video-ad-sdk fails W11 in Blink/WebKit while iab-vast-loader fails under Node.js/Firefox; jsdom-only verdict is not stable. Veto if verdict same across all runtimes for both. Source Table 6 P22-23. Need maybe include I01? Could be scenario for Shaka P03? But three enough.
Need "predictions" precise. Use exact counts? For scenario 1, Table 7 says no Node.js client replaces any request macro; after patch M12 should at least replace two; but "requests 0/50" table counts all request macros. Prediction if complete patch all request macros? Source recommendations "replace [CACHEBUSTING] and [TIMESTAMP] in every Wrapper request" [PAGE 28]. So prediction: literal count of required macros in Wrapper URI = 0; M12 conforms. Veto: any literal or malformed [CACHEBUSTING]/[TIMESTAMP]. Good.
Scenario 2: patch PR #515; prediction under Node.js 20,22,24 crash count 0/49 fault runs vs 49/49; stalled body wait bounded. Source P19, P29. Veto if any crash or wait exceeds bound. Good.
Scenario 3: Use Shaka 5.3.0 P03 fix? Prediction pod completion each ad credited to itself; P03 conforms. Source P18. Veto if completion of ad i goes to i+1. This is strong verifiable. But to include runtime? The section is RLVR, could use three distinct. Need maybe scenario 3 about XML parser because cross-layer. But P03 is clear. Need 3. Maybe include 4? User says 3 verifiable scenarios. Exactly 3. Choose M12, R01/C4, W11 parser. All tied to recommendations and cross-layer. Predictions and veto.
Need no betting lines. Fine.

Need ensure word count >=1000. We'll write perhaps 1800-2500 words. XML tags exactly. Need use `<THINK_TRACE>` etc. Need include citations [PAGE N] and quotes. Need "verbatim quotes" within each? At least source section. We can quote. Need exact page markers. Be careful quotes exact. We can quote short phrases from source. Need not all sections quote? Invariants say when source pages provided, cite exact [PAGE N] markers and verbatim quotes. We'll include quotes in all sections. Ensure page numbers from provided text. Good.

Need formulate equations in LaTeX. Let's design:

In SOURCE_OPERATORS:
Define cells:
\[
\Omega = \{(r,k,\ell): r\in\mathcal R, k\in\mathcal K, \ell\in\{\text{Node},\text{browser}\}\}
\]
Actually cell is one requirement on one client config in one runtime [PAGE 10]. Verdict \(V_{r,k,\ell}\in\{\text{conforms},\text{deviates},\text{delegated},\text{n/a}\}\). Taken set \(T_{k,\ell}=\{r: V_{r,k,\ell}\notin\{\text{delegated},n/a\}\}\). Conditional failure fraction:
\[
\Phi_{g,k,\ell} = \frac{\sum_{r\in g\cap T_{k,\ell}} \mathbf 1[V_{r,k,\ell}=\text{deviates}]}{|g\cap T_{k,\ell}|}
\]
dimensionless. Defined only denominator>0; at 0 "no cell taken on" [PAGE 16-17]. Must-level count:
\[
D^{\mathrm{must}}_{k,\ell} = \sum_{r\in T_{k,\ell}} \mathbf 1[V=\text{deviates}]\mathbf 1[\mathrm{strength}(r)=\text{must}]
\]
unit count. Table 5 values: vast-client-js Node 3 must etc. [PAGE 16].
Macro replacement:
\[
\rho_{\mathrm{req}}(k)=\frac{|\{m\in\mathcal M_{50}: \mathrm{replaced}_k(m)=1\}|}{50}
\]
dimensionless; from Table7 requests 0/50 for all Node clients [PAGE 24]. Tracking pixel outcome entropy:
\[
H_k=-\sum_{x\in\{\text{value},-1/-2,\text{literal}\}} p_{k,x}\log_2 p_{k,x}\ \mathrm{bits}
\]
with \(p=n_x/40\). For vast-client-js n=(6,34,0) gives H = -(6/40 log2 6/40 +34/40 log2 34/40) = calculate? Let's compute: 0.15 log2 0.15 = 0.15*(-2.737)= -0.4106; 0.85 log2 .85 = .85*(-0.2345)= -0.1993; sum negatives -> H=0.610 bits. Wait include literal 0 term. Good. For video-ad-sdk n=(2,0,38): p=0.05,0.95: H= -(.05*-4.3219 + .95*-0.074)=0.216+0.0703=0.286 bits. Nice. But maybe unnecessary. Need information units. We can include as illustration; not fake? It's derived. Need mention not source metric but formal audit. Might be okay. Keep maybe one entropy equation. Need not overcomplicate.

Timing:
\[
L_{\mathrm{I01}}=t_{\mathrm{start}}-t_{\mathrm{iconView}}\ \mathrm{ms},\quad \mathrm{conform}\iff L_{\mathrm{I01}}\le 50\ \mathrm{ms}
\]
Actually if icon view after start, L negative; okay. But if view before by 36, L=36. Good. Source threshold 50ms [PAGE 12]. "view preceded start by 11 to 12 ms" [PAGE 22? Table6]. Good.
Pod:
\[
\mathrm{P03\ conform}\iff t_{\mathrm{complete}}(a_i) < t_{\mathrm{impression}}(a_{i+1}) - 50\mathrm{ms}? 
\]
Wait "completion must arrive before next ad’s impression, with 50 ms of tolerance." If complete before next impression, \(t_c < t_i\). Tolerance 50ms might allow complete up to 50ms after? "with 50 ms of tolerance" likely allow ordering within 50ms. Define \(|?\) Maybe use \(t_c(a_i) \le t_i(a_{i+1}) + 50\mathrm{ms}\). But source says "a pod ad’s completion must arrive before the next ad’s impression, with 50 ms of tolerance." Could be tolerance for timestamp measurement. Define \(t_c \le t_i + 50\) ms. But if completion after by <50 it's accepted. Good. Need not overdo.

Network timeout:
\[
T_{\mathrm{slow}} = 3T_{\mathrm{client}}+5\mathrm{s}
\]
source [PAGE 13]. Stalled body total wait \(W_H = \sum_{j=1}^{H} (\Delta t_{\mathrm{body},j})\) unbounded if no body timeout; breakdown \(W_H\to\infty\) or > T_slow. Source nine stalled hops in 54 s [PAGE 19]. Good.
Fuzz detection:
\[
P_{\mathrm{detect}}=1-(1-p)^n \ge 0.95,\quad n=858
\]
for p=0.0035 gives 0.950. Source [PAGE 26]. Assumptions independence, generator-specific. Good.
Maybe include "Chao1" not equation? Could include \(\hat S_{\mathrm{Chao1}}=S_{\mathrm{obs}}+f_1^2/(2f_2)\) but source only estimate. Need not.

Need "singularity/breakdown regimes" list:
- \(\Phi\) undefined at denominator 0; rendered no cell taken.
- \(\rho\) no denominator issue 50, but verifier "requests 0/50" exact.
- Timing threshold \(L=50\) ms breakdown; I01.
- XML parser partial tree: W11 branch changes with parser; no universal verdict. Breakdown when parser returns parsererror root vs partial tree.
- Body timeout absent: W_H unbounded.
- Fuzz bound p small, independence; not proof exhaustion; Chao1 15.0 vs 12 observed.
- Macro list commit 99d5d51; 59 macros, 50 graded; new 4.x/DSA macros not in 4.3 set. Breakdown if list changes. [PAGE 9].
- Strength label sensitivity: M12 must; if should, counts 83→76; if all macros should 83→63. [PAGE 21].
Maybe include in source section.

Need "THINK_TRACE" >=400 words. We'll write 500-ish. Multi-hop derivation:
Step 1: source defines conformance as player duties from VAST 4.3 and macro list; 108 req; 58 must etc. Step 2: observed behavior network log. Step 3: findings vs cells; one cause can produce multiple cells; not independent. Step 4: deviations cluster on cross-party counting: macros, error codes, pods, progress, verification. Step 5: runtime parser. Step 6: robustness outside spec. Step 7: history. Audit gray zone: M12 strength, I01 threshold, G2/G4, delegation, fuzz bound, IMA archive, no human rater. Need quote. Good.

Need "RETROCAUSAL_GENEALOGY" maybe 300 words. Need "multi-week traps" phrase. Could include "weeks" maybe "multi-week" not necessarily source. Use "multi-release traps". Need mention issue history.

Need "RECURSIVE_THEORY_OF_MIND" 300 words. Crisis habit regression, counter-trap, clock. Need cite.

Need "CROSS_LAYER_VETO_ADJUDICATION" 300 words. Need "physical/biomechanical/weather veto proof." We'll explicitly state no biomechanical/weather variables in corpus, so rejected; physical=media/network. Maybe "biomechanical" as user actions? There are user actions (pause, mute) but not biomechanical measurement; no human participants. Source "The study uses no human participants" [PAGE 31]. Great. Weather absent. Cross-layer vetoes evidence: XML parser, media support, engine timing, network. Use table. "The XML parser matters most" quote. "Linux WebKit build reports FLV as playable" quote. "Playwright Chromium build has no AAC decoder" quote. "macOS WebKit" rmp-vast no progress. "IMA I01" timing. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. Need exact predictions and veto. Good.

Need no "betting lines" obviously. Avoid sports. No odds. Good.

Need maybe not mention "retrocausal" unsupported? Fine.

Need cite [PAGE] exact. We can use [PAGE 1] etc. Verbatim quotes exact. Let's gather exact quotes:
P1: "None of the tested open-source clients that follow redirect (Wrapper) chains fills the required macros in a Wrapper’s request" exact. "One library’s timeout throws an exception no caller can catch, ending a Node.js process." exact.
P2: "The total number of completions is right, but the first ad is never credited, the second is credited early and the third twice" exact.
P3: "A test suite that runs only under jsdom, as those of vast-client-js and video-ad-sdk do, therefore cannot see a class of defects" exact? Source: "A test suite that runs only under jsdom, as those of vast-client-js and video-ad-sdk do, therefore cannot see a class of defects (Section 5.2)." yes.
P4: "The list marks five as required" exact? "The list marks five as required: [TIMESTAMP] (ISO 8601), [CACHEBUSTING] (a random 8-digit integer), [ERRORCODE], [LIMITADTRACKING] (whether the user has limited ad tracking) and [REASON]." Good.
P9: "The 50 whose introduction version is 4.2 or earlier are the graded set (the “4.3 set”)." exact. Good.
P10: "A cell is one requirement on one client configuration in one runtime." exact.
P12: "An icon’s view request must not precede the start request by more than 50 ms" exact. "a pod ad’s completion must arrive before the next ad’s impression, with 50 ms of tolerance" exact.
P13: "a slow-load limit of three times the client’s timeout plus 5 s (11 s)" exact.
P15: Table4b; "40 cells confirmed, 4 harness issues resolved, 2 borderline" exact maybe. Need not quote.
P16: Table5 counts. Could quote "Shaka Player 5.2.12 Chromium 35 conforms 21 must 8 should 0 obs 0 delegated 44 n/a 15 findings"? Not necessary. Use counts from table in prose with cite.
P17: "None of the five Wrapper-following open-source clients replaces [CACHEBUSTING] or [TIMESTAMP] in a Wrapper’s VASTAdTagURI (M12, must)." exact. Good.
P18: "Shaka credits each pod ad’s completion request to the next ad" exact. "Shaka 5.3.0, released on the day of the reference runs, fixes the completion crediting (P03) and seven macro and tracking deviations" exact. Good.
P19: "On timeout, its URL handler aborts the request and throws inside the timer callback, outside the request’s promise." exact. "With a 2 s timeout and a 6 s stall, the ad arrived after the stall ended, and a self-referencing Wrapper ran nine stalled hops in 54 s." exact.
P20: "IMA is proprietary, runs in browsers only and loads server-assigned configuration, so two live runs can load different code." exact. "IMA fills [CACHEBUSTING] and [TIMESTAMP] in a Wrapper’s VASTAdTagURI (M12)" exact.
P22: "The XML parser matters most." exact. "Between Node.js and the browsers, the four configurations that run in both layers agree in 393 of the 396 cells" exact.
P23: "video-ad-sdk conforms under jsdom and in Firefox and deviates in every tested Blink and WebKit browser, and iab-vast-loader does the reverse" exact? It says answer RQ2: "On it, video-ad-sdk conforms under jsdom and in Firefox and deviates in every tested Blink and WebKit browser, and iab-vast-loader does the reverse" yes. Good.
P23: "The Linux WebKit build reports FLV as playable" exact. "The Playwright Chromium build has no AAC decoder" exact.
P24: "No Node.js client replaces any request macro, of either set, in either XML form" exact.
P25: "the campaign ran 5 rounds ... found 12 failure classes from 9 root causes" exact? "The campaign ran 5 rounds (289, 291, 290, 283 and 289 cases; 1,442 in all, of which 1,437 were unique) and found 12 failure classes from 9 root causes". Good.
P26: "The last new root cause appeared at unique case 360, and rounds 3 to 5 (858 cases not seen before) added none." exact. "a root cause with a per-case rate above 0.35 percent would have shown with 95 percent probability" exact. "M12 deviates in every swept release of the four swept clients" exact. P26.
P27: "The explanation applies to the tracking defects: each produces a request that looks normal, or a missing request that nobody notices, and the party that would notice runs neither the library nor its tests." exact? P27-28: "The explanation applies to the tracking defects: each produces a request that looks normal, or a missing request that nobody notices, and the party that would notice runs neither the library nor its tests." Yes page 27-28? Page 27 bottom? It starts on P27 "A plausible reason..." and continues P28? Actually P27 has paragraph, P28 starts "five Wrappers..."? Let's check page 27: line "The explanation applies to the tracking defects: each produces a request that looks normal, or a missing request that nobody notices, and the party that would notice runs neither the library nor its tests. It does not apply..." It is on PAGE 27? Source page 27 includes up to "five Wrappers (W03) or a valid document rejected as a whole (X05, X06). The study does not test this explanation..." Wait PAGE 27 text: 
"6. Discussion
6.1 What the deviations cost
...
A plausible reason these deviations persist across releases (Section 5.4) is that most of them do not break playback. The explanation applies to the tracking defects: each produces a request that looks normal, or a missing request that nobody notices, and the party that would notice runs neither the library nor its tests. It does not apply to the deviations a viewer can see, such as a rejected chain of five Wrappers (W03) or a valid document rejected as a whole (X05, X06). The study does not test this explanation, but it is consistent with the sweep and with the maintainers’ issue trackers, where several of these defects were reported years ago (Section 3)."
Yes PAGE 27. Good.
P28: "replace [CACHEBUSTING] and [TIMESTAMP] in every Wrapper request;" exact. "bound both the headers and the body of a request by the same timeout, and reject rather than throw when it expires" exact. "sort pods after every Wrapper hop, not only at the root" exact. "run the test suite in at least one Blink or WebKit browser as well as under jsdom" exact.
P28: "A conformance claim about a player built on one of these libraries depends on which duties its integrator wrote" exact.
P29: "Under the patched build the crash and the stalled-body wait disappear in every reproduction" exact. "No human second rater has reviewed the catalog or the verdicts" exact P29? It says P29 "No human second rater has reviewed the catalog or the verdicts, and that is the main remaining gap." Yes.
P31: "The study uses no human participants and no production data." exact.
P34: M01 etc in Appendix A. Good.

Need maybe use "PAGE 9" for catalog counts? Table2 on page 9: Total 108 58 39 2 9. Good.
Need "PAGE 16" for Table5 counts. Good.

Need write in XML. Need not use markdown headings inside? We can use paragraphs. But equations with \[ \] okay. Need exact XML tags and no unescaped &? Quotes contain &amp;? In XML text, ampersand must be escaped if using XML. The user wants XML sections; we should escape `&` as `&amp;` in text to be valid. But if we quote `&amp;`, need escape to `&amp;amp;`? Hmm. We can avoid ampersand or use `&amp;` carefully. Since output is text not parsed? But XML tags strict. Could write `&amp;` for literal ampersand. But if quote exact "&amp;" from source, should write `&amp;amp;` to render `&amp;`? In XML, `&amp;amp;` becomes `&amp;`. But we're not necessarily parsed. To be safe, avoid exact quote with ampersand or write "ampersand entity". But source quote often includes [CACHEBUSTING] no ampersand. Good. Avoid `&` unescaped. In equations, use `\land` not &. Use "and". Good.
Need include quotes with apostrophes okay. Use "Wrapper’s" curly apostrophe okay. Use en dash okay. XML okay. Need escape `<` in LaTeX? Equations have `<` maybe must escape? In XML text, `<` must be escaped. We can avoid `<` or use `\le`, `\ge` in equations. In prose avoid "<". Use "less than". Good. Use `>`? okay. But `<` not. Need not use `<` symbols. In equations use `\le`, `\ge`. Good. Use `\to` etc. Good.
Need use `[PAGE 1]` markers not XML issue. Good.
Need no unescaped `&`. Avoid "R&D". Good.

Need perhaps mention "SI/information/probability units" in source section: counts dimensionless, ms, s, bits, probability. Good.

Let's draft.

Potential issue: user might expect "gray-zone audit" maybe no direct question. Our response should be synthesis. Good.

Need ensure >=1000 words. We'll produce ~2500. Need not exceed too much. Desired oververbosity 5. We'll be thorough.

Let's outline final:

<THINK_TRACE>
Paragraph 1: define derivation from source: 108 req, 58 must etc. Quote P9 and P10. Step chain.
Paragraph 2: network log as oracle; cells vs findings; non-independence; Table5 counts. Quote P17 M12. Analyze deviation cluster.
Paragraph 3: runtime and robustness; parser; timeout; pod. Quote P1, P22.
Paragraph 4: gray-zone audit: M12 strength, I01, G2/G4, delegation, fuzz bounds, IMA archive, no human. Quotes P21 sensitivity? Need cite P21: "If M12 were graded should, the total would fall to 76" exact. P12 I01 threshold. P25 fuzz. P29 no human. P20 IMA.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal equations and units, citations, breakdown. Include definitions. Quotes. Maybe 600 words.
Need "formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes." We'll include equations with labels. Good.

<RETROCAUSAL_GENEALOGY>
Historical lineage: VAST 4.3, macro list commit, sweep, issue reports, Shaka 5.3.0, IMA archive. Multi-release traps. Quotes P6, P26, P18. ~350 words.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. ~400 words. Use quotes P27, P28, P5 majority, P16 Shaka day, P20 IMA. Good.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. State no biomech/weather; physical/media/network. Quote P31 no human. Table6. XML parser quote. Codec quotes. Timing quote. Adjudicate. ~400 words.

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios with predictions and veto. ~450 words. Ensure exactly 3. Use numbered S1-S3. Good.

Need maybe "RLVR" phrase. Good.

Let's ensure no betting lines. Good.

Need quote exact "The XML parser matters most." cite [PAGE 22]. Good.

Need be careful with "video-ad-sdk conforms under jsdom and in Firefox and deviates in every tested Blink and WebKit browser, and iab-vast-loader does the reverse" exact. Good.

Need use "required macros" not all request macros in M12? Source M12 specifically [CACHEBUSTING] and [TIMESTAMP]. Good.

Need possible issue: In SOURCE equations, define \(\Phi\) as conditional failure fraction but source Figure 3 caption says "Rate (deviating / taken on)" and "A conditional failure fraction". Good. Use [PAGE 16-17]. Great.

Need "singularity/breakdown regimes" include denominator zero. Good.

Need "information" entropy maybe optional. It adds formal units. We can include but need not use too many. Maybe include one info equation for macro grid. It is derived from Table7, not source metric. Label "audit-derived" to avoid pretending. Good.
Calculate H for vast-client-js: \(p=(6/40,34/40,0)\). H = 0.610 bits. For video-ad-sdk \(p=(2/40,0,38/40)\) H=0.286 bits. Could mention. But "source operators" maybe formal. Fine.
Need "probability units" for fuzz detection. Good.

Need "SI" units: ms, s, bits, dimensionless. Good.

Need "exact singularity" for timing threshold: \(L_{\mathrm{I01}}=50\) ms is boundary; source says 50ms tolerance; Linux Chromium 36-68ms, 6/20 beyond; macOS WebKit 51-58 all beyond. Good. That is exact.
Need "XML parser singularity": parsererror root vs partial tree; no scalar. Good.

Need "G4" attribution: rmp-vast cells attributed to vast-client-js. Source Page 10 rule G4 and Page 16 note. Quote? "When rmp-vast deviates on a path inside its bundled vast-client-js, the finding is reported under vast-client-js" exact [PAGE 10]. Good.

Need "strength sensitivity": quote "If M12 were graded should, the total would fall to 76" [PAGE 21]. Good.

Need "fuzz bound": exact quote "a root cause with a per-case rate above 0.35 percent would have shown with 95 percent probability" [PAGE 26]. Good.

Need "Chao1": quote "bias-corrected Chao1 estimate ... is 15.0 classes (95 percent interval 12.4 to 37.3) against 12 observed" [PAGE 25-26]. Good.

Need "IMA archive" quote P20. Good.

Need "No human second rater" P29. Good.

Need "multi-week traps" maybe phrase "multi-release trap." User says "multi-week traps" in section description. We can mention "multi-week audit trap" e.g., jsdom-only pass can persist for weeks/months. Not necessary exact. But include "multi-week" word? We can say "The multi-week trap is not a claim from the paper..." Hmm. Better: "The multi-week trap in this corpus is a test-harness trap: a jsdom-only suite can stay green for many releases while browsers fail." This is inference. We can label as audit inference. Good.

Need "crisis habit regression" phrase. We'll define: under crisis (counts disagree) maintainers regress to playback-success habit. Use source quote. "Counter-trap": integrator assumes library handles or majority vote; source says majority vote would hide defect two clients share. "Clock": release timing and timing thresholds. Good.

Need "cross-layer veto" maybe "biomechanical" user actions? Source has pause/resume/mute/skip user actions but no biomechanical measurement. We can say "The only 'biomechanical' surface is scripted user action; no human biomechanics are measured, so a biomechanical veto is inadmissible." Good.

Need "weather" absent. Good.

Need "physical" network and media stack. Good.

Need "proof": not mathematical proof, but evidence. Use "veto proof" as condition: if a cell changes across layer and source attributes to layer, veto global verdict. Good.

Need no "force/fatigue" fake ratios. Good.

Let's write. Need keep XML tags exactly. Use no `<` unescaped. In equations, use `\le` not `<`. But LaTeX has `\le`. Good. Use `\sum`. Good. Use `\mathbf{1}`. Good. Use `\mathrm`. Good. Use `\in`. Good.
Need in prose "0/50" okay. "3 to 21" okay. "83 to 76" okay.
Need "must-level" with hyphen. Good.

Potential issue: Use `&` in "M & M"? Avoid. No ampersands. Good.
Need "VASTAdTagURI" no ampersand. Good.
Need "&amp;" quote? Avoid. But in retrocausal, mention "ampersand entity" not exact. Good.

Let's produce final with sections. Ensure word count. Let's estimate: THINK 550, SOURCE 850, RETRO 450, RECURSIVE 450, CROSS 450, RLVR 550 = 3300. Fine. Need not too long but okay.

Need maybe "source operators and equations" first quote P9 catalog. Good.

Let's formulate source equations carefully:

\[
V_{r,k,\ell}\in\{\mathrm{conforms},\mathrm{deviates},\mathrm{delegated},\mathrm{n/a}\}
\]
\[
T_{k,\ell}=\{r:V_{r,k,\ell}\notin\{\mathrm{delegated},\mathrm{n/a}\}\}
\]
\[
\Phi_{g,k,\ell}=\frac{\sum_{r\in g\cap T_{k,\ell}}\mathbf{1}[V_{r,k,\ell}=\mathrm{deviates}]}{|g\cap T_{k,\ell}|}
\]
Assumption: cells are not independent; \(\Phi\) descriptive. Singularity \(|g\cap T|=0\). Source Figure 3 "A hatched cell with a dash means the client takes on no cell of that group" [PAGE 17]. Good.
\[
D^{\mathrm{must}}_{k,\ell}=\sum_{r\in T_{k,\ell}}\mathbf{1}[V=\mathrm{deviates}]\mathbf{1}[\mathrm{strength}(r)=\mathrm{must}]
\]
unit: count. Table 5: Shaka 21 must etc. Cite P16.
\[
\rho_{\mathrm{req}}(k)=\frac{|\{m\in\mathcal M_{50}:\mathrm{replaced}_k(m)=1\}|}{50}
\]
Assumption: Table7 request macros set; source says "No Node.js client replaces any request macro, of either set, in either XML form" [PAGE 24]. For all tested Node clients \(\rho=0\).
Entropy:
\[
H_k=-\sum_{x\in\{v,-1/-2,\ell\}}p_{k,x}\log_2 p_{k,x}\ \mathrm{bits},\quad p_{k,x}=n_{k,x}/40
\]
Assumption 40 tracking-pixel macros in 4.3 set. Values from Table7. Not a source metric; audit-derived. Good.
Timing:
\[
L_{\mathrm{I01}}=t_{\mathrm{start}}-t_{\mathrm{iconView}}\ \mathrm{ms}
\]
\[
\mathrm{I01\ conforms}\iff L_{\mathrm{I01}}\le 50\ \mathrm{ms}
\]
But if view after start, \(L\) negative, conforms. Good. Source [PAGE 12].
Pod:
\[
\mathrm{P03}(i)\ \mathrm{conforms}\iff t_{\mathrm{complete}}(a_i)\le t_{\mathrm{impression}}(a_{i+1})+50\ \mathrm{ms}
\]
Actually if complete before next impression, \(t_c < t_i\); plus tolerance. Good. Source [PAGE 12]. Break: Shaka credits next ad [PAGE 18].
Slow:
\[
T_{\mathrm{slow}}=3T_{\mathrm{client}}+5\ \mathrm{s}
\]
Source. Body wait:
\[
W_H=\sum_{j=1}^{H}\Delta t_{\mathrm{body},j}
\]
If no timeout \(W_H\to\infty\), breakdown \(W_H>T_{\mathrm{slow}}\). Source nine hops 54s [PAGE 19].
Fuzz:
\[
P_{\mathrm{detect}}=1-(1-p)^n\ge0.95,\quad n=858
\]
At \(p=0.0035\), \(P\approx0.950\). Assumes independent cases; generator-specific. Source [PAGE 26].
Need maybe "information/probability units" done.

Need "singularities/breakdown regimes" bullet list:
- \(|g\cap T|=0\) no fraction.
- \(L_{\mathrm{I01}}=50\) threshold; I01 run-dependent.
- XML parser branch no universal verdict.
- \(W_H\) unbounded no body timer.
- Macro list version change; 50 of 59.
- Strength label M12; sensitivity.
- Fuzz no exhaustion proof; Chao1.
Good.

Need citations for each. Good.

Now final.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation starts with the paper’s own unit of analysis: “A cell is one requirement on one client configuration in one runtime” [PAGE 10]. The catalog has 108 requirements, split by strength into 58 must, 39 should, 2 may, and 9 robustness observations [PAGE 9]. The first multi-hop inference is therefore that headline conformance counts cannot be compared across clients unless one first conditions on the duties each client actually takes on. The paper makes this explicit: a verdict is “delegated” where documentation leaves a duty to the integrator and “n/a” where the duty is optional, not implemented, not drivable, or dependent on another already-failed requirement [PAGE 10]. This is why the reported rates in Figure 3 are “a conditional failure fraction: the share of the cells a client takes on that deviate,” not a ranking [PAGE 16].

The second hop is from cells to findings. One cause can generate several deviating cells, so the paper reports both. For example, video-ad-sdk’s 16 must-level cells in Chromium come from 12 findings [PAGE 15]. This matters for any audit because counting cells as independent would overstate causal multiplicity. The third hop is the substantive cluster: the deviations concentrate where other companies count or diagnose ads, not on ordinary playback. The paper states that “None of the five Wrapper-following open-source clients replaces [CACHEBUSTING] or [TIMESTAMP] in a Wrapper’s VASTAdTagURI (M12, must)” [PAGE 17]. The archived IMA 3.794.0 configuration does fill them [PAGE 20], so the duty is implementable. This is not a cosmetic defect: a downstream ad server sees literal brackets where it expected a cache buster and time.

The fourth hop is runtime dependence. The XML parser of the runtime decides W11: “video-ad-sdk conforms under jsdom and in Firefox and deviates in every tested Blink and WebKit browser, and iab-vast-loader does the reverse” [PAGE 23]. Hence a jsdom-only suite can stay green while browsers fail; the paper says such a suite “cannot see a class of defects” [PAGE 3]. The fifth hop is robustness outside the specification. vast-client-js’s timeout “throws inside the timer callback, outside the request’s promise” [PAGE 19], ending a Node.js process; a stalled body also defeats the timeout, with “nine stalled hops in 54 s” [PAGE 19]. The sixth hop is historical: M12 “deviates in every swept release of the four swept clients” [PAGE 26], while Shaka 5.3.0 fixes P03 and seven macro/tracking deviations but adds a regression where unknown macros become −1 [PAGE 18].

Gray-zone audit. First, M12’s must label rests on the macro list’s Required label and §6.1’s responsibility sentence rather than a modal verb in the VAST 4.3 text. The sensitivity analysis says: “If M12 were graded should, the total would fall to 76” from 83 must-level deviations [PAGE 21]. Second, I01 is threshold-sensitive: the 50 ms tolerance “falls inside the Linux Chromium spread (36 to 68 ms; beyond it in 6 of 20 runs)” [PAGE 12], so its verdict is run-dependent. Third, G2 and G4 suppress double-counting: rmp-vast deviations inside bundled vast-client-js are reported under vast-client-js, while rmp-vast’s cell still records the deviation [PAGE 10]. Fourth, delegated cells are an upper bound: the harness acts as a careful integrator, so “a conforming cell measures whether correct behavior is possible through the documented API” [PAGE 29]. Fifth, fuzzing does not prove exhaustion: the Chao1 estimate is “15.0 classes (95 percent interval 12.4 to 37.3) against 12 observed” [PAGE 25], and the 0.35 percent detection bound is generator-specific [PAGE 26]. Sixth, IMA is an archived black-box configuration; “two live runs can load different code” [PAGE 20]. Seventh, no human second rater reviewed the catalog or verdicts [PAGE 29]. These are the audit’s real limits.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines the verdict space per cell as
\[
V_{r,k,\ell}\in\{\mathrm{conforms},\mathrm{deviates},\mathrm{delegated},\mathrm{n/a}\},
\]
where \(r\) is a requirement, \(k\) a client configuration, and \(\ell\) a runtime layer [PAGE 10]. The taken-on set is
\[
T_{k,\ell}=\{r:V_{r,k,\ell}\notin\{\mathrm{delegated},\mathrm{n/a}\}\}.
\]
The conditional failure fraction for duty group \(g\) is
\[
\Phi_{g,k,\ell}
=
\frac{
\sum_{r\in g\cap T_{k,\ell}}
\mathbf{1}[V_{r,k,\ell}=\mathrm{deviates}]
}{
|g\cap T_{k,\ell}|
},
\]
which is dimensionless and lies in \([0,1]\). This is exactly the paper’s “conditional failure fraction: the share of the cells a client takes on that deviate” [PAGE 16]. Its singularity is \(|g\cap T_{k,\ell}|=0\); the source renders that as “a hatched cell with a dash means the client takes on no cell of that group” [PAGE 17]. The fraction is descriptive, not causal, because cells are not independent [PAGE 15].

The must-level deviation count is
\[
D^{\mathrm{must}}_{k,\ell}
=
\sum_{r\in T_{k,\ell}}
\mathbf{1}[V_{r,k,\ell}=\mathrm{deviates}]
\mathbf{1}[\mathrm{strength}(r)=\mathrm{must}],
\]
in units of requirements. Table 5 gives examples: vast-client-js 6.5.0 under Node.js has 3 must-level deviating cells, while Shaka Player 5.2.12 in Chromium has 21 [PAGE 16]. The catalog totals are 108 requirements, with 58 must, 39 should, 2 may, and 9 observations [PAGE 9].

For the macro grid, define
\[
\rho_{\mathrm{req}}(k)
=
\frac{
|\{m\in\mathcal M_{50}:\mathrm{replaced}_k(m)=1\}|
}{
50
},
\]
where \(\mathcal M_{50}\) is the 50-macro request set and “50” is the denominator used in Table 7. This is dimensionless. The source reports “requests 0 / 50” for every tested Node.js client and states: “No Node.js client replaces any request macro, of either set, in either XML form” [PAGE 24]. The 50-macro set is version-dependent: the macro list at commit 99d5d51 has 59 macros, and “The 50 whose introduction version is 4.2 or earlier are the graded set (the “4.3 set”)” [PAGE 9]. The breakdown regime is a macro-list change or a different commit; new 4.x and DSA macros fall outside the 4.3 set.

An audit-derived information measure for the 40 tracking-pixel macros of the 4.3 set is
\[
H_k
=
-\sum_{x\in\{v,-1/-2,\ell\}}
p_{k,x}\log_2 p_{k,x}
\quad \mathrm{bits},
\qquad
p_{k,x}=\frac{n_{k,x}}{40},
\]
where \(v\) is a filled value, \(-1/-2\) is the unknown/withheld state, and \(\ell\) is a literal macro. This is not a source metric, but it is computable from Table 7. For vast-client-js, \((n_v,n_{-1/-2},n_\ell)=(6,34,0)\), giving \(H\approx0.610\) bits; for video-ad-sdk and vastlint-client, \((2,0,38)\), giving \(H\approx0.286\) bits [PAGE 24]. The unit is bits; the assumption is that the three outcome classes are exhaustive for that table.

The I01 timing operator is
\[
L_{\mathrm{I01}}
=
t_{\mathrm{start}}-t_{\mathrm{iconView}}
\quad \mathrm{ms},
\]
with conformance when
\[
L_{\mathrm{I01}}\le 50\ \mathrm{ms}.
\]
The source states: “An icon’s view request must not precede the start request by more than 50 ms” [PAGE 12]. The boundary is exact; the observed Linux Chromium spread is 36 to 68 ms with 6 of 20 runs beyond tolerance, while macOS WebKit gives 51 to 58 ms in all 10 runs [PAGE 20-21]. This is a true singularity regime: the verdict flips at the 50 ms threshold.

The pod-credit operator is
\[
\mathrm{P03}(i)\ \mathrm{conforms}
\iff
t_{\mathrm{complete}}(a_i)
\le
t_{\mathrm{impression}}(a_{i+1})
+50\ \mathrm{ms},
\]
because a pod ad’s completion must arrive before the next ad’s impression “with 50 ms of tolerance” [PAGE 12]. Shaka 5.2.12 violates this by making the next ad current before firing complete, so “Shaka credits each pod ad’s completion request to the next ad” [PAGE 18]. Shaka 5.3.0 fixes P03 [PAGE 18].

The slow-load bound is
\[
T_{\mathrm{slow}}=3T_{\mathrm{client}}+5\ \mathrm{s},
\]
as specified in the fuzzing harness [PAGE 13]. For a stalled body with no body timer, total wait is
\[
W_H=\sum_{j=1}^{H}\Delta t_{\mathrm{body},j},
\]
and the breakdown regime is \(W_H>T_{\mathrm{slow}}\) or \(W_H\to\infty\). The source reports “nine stalled hops in 54 s” with a 2 s client timeout [PAGE 19]. The fuzz-detection probability is
\[
P_{\mathrm{detect}}=1-(1-p)^n\ge0.95,
\qquad n=858,
\]
which gives \(P_{\mathrm{detect}}\approx0.950\) at \(p=0.0035\). This is the source’s “per-case rate above 0.35 percent would have shown with 95 percent probability” [PAGE 26], under the assumption of independent cases and only for this generator’s seeds and operators.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The retrocausal lineage is visible in the version sweep and issue history. The macro defect is not new: “M12 deviates in every swept release of the four swept clients” [PAGE 26], and the paper notes that missing macro replacement in Wrapper requests “had been raised for vast-client-js and iab-vast-loader” in 2019 [PAGE 6]. The later empirical result therefore reveals a latent, long-persisting defect rather than a fresh regression. Similarly, vast-client-js reports 301 for a malformed Wrapper target in all 9 swept releases, and video-ad-sdk’s 502 code, Wrapper ClickThrough, cache-buster length, LIMITADTRACKING and percentage-progress deviations are present in all 9 of its releases [PAGE 27].

The sweep also shows two directions of retrocausal change. vast-client-js sorted root pods from 6.2.0, while video-ad-sdk sorted them through 2.7.2 and its 3.0.0 rewrite introduced the comparator that always returns 0 [PAGE 26]. Thus a later “modernization” introduced a pod-order deviation. In the opposite direction, Shaka Player 5.3.0, “released on the day of the reference runs,” fixes P03 and seven macro/tracking deviations but adds a regression where unknown macros are replaced with −1 [PAGE 18]. The clock matters: the paper’s reference tables mostly report 5.2.12, while 5.3.0 is separately noted, so a reader who assumes one Shaka version can misdate the findings.

The scientific genealogy runs from specification-derived oracles and RFC-directed differential testing to this study’s network-log oracle [PAGE 5]. The paper explicitly places its method beside RFCcert and log-file analysis, and it uses disagreement only to triage mutated documents because “A majority vote would hide a defect two clients share” [PAGE 5]. That is the key retrocausal trap: later agreement among clients is not evidence of correctness if the clients share code or share a blind spot.

The multi-week audit trap is the jsdom-only green suite. The paper states that a suite running only under jsdom “cannot see a class of defects” [PAGE 3], and the runtime table shows W11 verdicts flipping between jsdom, Blink, Gecko and WebKit [PAGE 22-23]. A project could therefore pass its own tests for many releases while failing in the browsers its users actually run. A second multi-week trap is the archived IMA configuration: because IMA “loads server-assigned configuration, so two live runs can load different code” [PAGE 20], a later run cannot be assumed to reproduce the archived 3.794.0 results. A third trap is the static macro list: the graded 4.3 set is 50 of 59 macros at commit 99d5d51 [PAGE 9], so future macro additions can silently move the target.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. The paper offers a precise mechanism for persistence: “A plausible reason these deviations persist across releases (Section 5.4) is that most of them do not break playback” [PAGE 27]. In a crisis over disagreeing counts, maintainers regress to the habit that playback succeeded, so a missing or malformed tracking request looks like success. The source sharpens this: “each produces a request that looks normal, or a missing request that nobody notices, and the party that would notice runs neither the library nor its tests” [PAGE 27]. That is a theory-of-mind failure across organizational boundaries: the library maintainer sees playback; the ad server sees counts; neither sees the other’s evidence.

Counter-trap. An integrator’s natural counter-trap is to assume the library handles the duty, or to trust majority agreement among clients. The paper blocks both. First, delegated duties are real: “A conformance claim about a player built on one of these libraries depends on which duties its integrator wrote” [PAGE 28]. Second, agreement is not an oracle: “A majority vote would hide a defect two clients share” [PAGE 5]. Third, a real integration can do worse than the documented API: rmp-vast overrides allowMultipleAds and never falls back to stand-alone ads that vast-client-js keeps in reserve [PAGE 20]. The counter-trap is therefore to infer “library conforms” from “my player plays.” The source’s answer is to check the duty split, the API reachability, and the defaults.

Clock. The clock appears in three places. First, release timing: Shaka 5.3.0 was “released on the day of the reference runs” [PAGE 16], so the finding set is version-stamped. Second, run-to-run timing: IMA’s I01 icon view precedes start by 36 to 68 ms on Linux Chromium, with 6 of 20 runs beyond the 50 ms tolerance [PAGE 20-21], so the verdict is partly a clock verdict. Third, the fuzzing campaign’s discovery clock: “The last new root cause appeared at unique case 360, and rounds 3 to 5 (858 cases not seen before) added none” [PAGE 26], but the Chao1 estimate cautions that classes may remain unseen. The recursive model is thus: maintainers update beliefs on playback success; integrators update on library reputation; auditors must update on network evidence and version clocks, not on either party’s confidence.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
No weather variable and no biomechanical measurement appear in this corpus. The paper states: “The study uses no human participants and no production data” [PAGE 31]. Therefore a weather veto or a biomechanical veto would be out-of-distribution and inadmissible. The admissible cross-layer vetoes are physical in the computing sense: XML parser behavior, media codec support, engine timing, run-to-run timing, and network stall. Each has direct evidence.

XML parser veto. The source says: “The XML parser of the runtime decides one requirement” [PAGE 23]. W11 is the proof case: video-ad-sdk conforms under jsdom and Firefox but deviates in Blink and WebKit; iab-vast-loader does the reverse [PAGE 23]. The mechanism is parser-error handling: jsdom/Gecko return a parsererror root, while Blink/WebKit return a partial tree with a parsererror element; iab-vast-parser checks for it and video-ad-sdk does not [PAGE 23]. This is a layer veto: a global W11 verdict without naming the runtime is invalid.

Media-codec veto. S01 and S02 are decided by the browser build. “The Linux WebKit build reports FLV as playable,” so video-ad-sdk chooses FLV, fails, and reports undefined then 402; other browsers skip it [PAGE 23]. “The Playwright Chromium build has no AAC decoder,” so rmp-vast reports 401 for the optional audio ad without starting it; Chrome, Firefox, WebKit and Safari play it [PAGE 23]. These are physical media-stack vetoes, not library-only verdicts.

Engine-timing veto. rmp-vast fires no progress tracker in macOS WebKit but does in other browsers, because it builds progress offsets once on the first durationchange and only if the duration is finite; an early NaN or Infinity duration leaves the list empty [PAGE 24]. The paper reports this as “an rmp-vast defect that one engine exposes” [PAGE 24]. This is a cross-layer veto with a precise mechanism, not a generic “browser bug.”

Run-to-run and network vetoes. IMA’s I01 is the one cell whose verdict depends on the run: Linux Chromium 36 to 68 ms, 6 of 20 beyond tolerance; Linux Firefox 54 to 111 ms, 20 of 20 beyond; Linux WebKit 165 to 237 ms, 20 of 20 beyond; macOS WebKit 51 to 58 ms, 10 of 10 beyond [PAGE 20-21]. This is a timing veto at the 50 ms boundary. Network stall is a separate veto: vast-client-js clears its timer when headers arrive and reads the body with no timeout, so a stalled body is waited on at every hop; “nine stalled hops in 54 s” [PAGE 19]. The network layer can therefore veto a claim that a client timeout bounds the request.

Adjudication rule. A verdict is globally valid only if the layer variable is named and the source’s attribution is preserved. Otherwise the verdict is vetoed to “layer-specific.” The paper’s own stability data support this: between Node.js and browsers the four shared configurations agree in 393 of 396 cells, and “The XML parser matters most” [PAGE 22]. That is a strong but bounded cross-layer claim, not a universal one.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
S1. Macro replacement counterfactual. Intervention: replace [CACHEBUSTING] and [TIMESTAMP] in every Wrapper VASTAdTagURI before the request, following the paper’s maintainer recommendation [PAGE 28]. Verifiable prediction: the M12 cell flips from deviate to conform for every Wrapper-following open-source client; the wire log contains no literal [CACHEBUSTING] or [TIMESTAMP] in a Wrapper request, and [CACHEBUSTING] is an 8-digit integer as required by the macro list [PAGE 4]. Veto: any literal bracket remains, or the cache buster is not an 8-digit integer, or M12 still deviates. This veto is directly checkable from the same network-log oracle used in the study.

S2. Timeout-body counterfactual. Intervention: bound both headers and body by the same timeout and reject rather than throw on expiry, matching the author’s patched build and pull request [PAGE 28-29]. Verifiable prediction: under Node.js 20, 22 and 24, the 49 fault runs that previously crashed in 49 of 49 should crash 0 of 49; the stalled-body wait should be bounded, and the nine-hop 54 s case should disappear [PAGE 19]. Veto: any uncaught exception, any process exit, or any body wait beyond the configured bound. The paper already states: “Under the patched build the crash and the stalled-body wait disappear in every reproduction” [PAGE 29], so the prediction is falsifiable against a fresh reproduction.

S3. Runtime-conformance counterfactual. Intervention: run the same W11 vector in jsdom, Blink and WebKit instead of only jsdom. Verifiable prediction: video-ad-sdk conforms under jsdom and Firefox but deviates in Chromium and WebKit; iab-vast-loader shows the reverse, deviating under jsdom and Firefox while conforming in Blink and WebKit [PAGE 23]. Veto: if both clients give the same W11 verdict in all four runtimes, or if the parsererror mechanism is not observable, the runtime-veto hypothesis is falsified. This is a high-value RLVR test because it directly challenges the jsdom-only habit and uses an exact, repeatable network-log outcome rather than a subjective code review.
</RLVR_COUNTERFACTUAL_VETOES>