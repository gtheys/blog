+++
title = "Why Nobody Will Pay for Code Anymore"
date = 2026-10-10
slug = "why-nobody-will-pay-for-code-anymore"
description = "Code was priced on scarcity that no longer exists. The moat left is the person who is still there."
tags = ["essays", "ai-era"]

[taxonomies]
tags = ["essays", "ai-era"]

[extra]
header_image = "img/nobody-pays-for-code.jpg"
+++

A few weeks ago I watched an agent rebuild a closed-source SaaS tool as an open-source clone. Over a weekend. Not because anyone asked it to — someone on the internet complained about the pricing, an agent session spun up, and by Monday there was a working alternative with a README, CI, and a MIT license.

I have been writing software for 25+ years. I have sold software. And that weekend broke something in my head that I don't think gets repaired.

Here is the thing: we priced software on scarcity that no longer exists. Code was expensive because writing it took senior humans a long time. That input cost is collapsing, and with it the output price. When any competent developer with an agent can rebuild your product in a weekend, "buy my code" stops being a pitch. It becomes a museum exhibit.

## What dies

Feature-gated open core is the first casualty. The paid tier exists because the features took months to build — but a clone doesn't care about your months. Dual licensing weakens next: the "pay or we get copied" threat only worked when copying was expensive. And source-available licenses built to stop cloud providers wrapping your repo? The cloud provider doesn't need your repo anymore. It can rebuild you from screenshots.

None of this is a licensing problem. The license was never the moat — it was a fence painted around a moat that used to be there.

## What hardens

Look at what people actually paid for in the last decade of open source, and notice it was almost never the code.

Sponsorships. Red Hat didn't get to $1B selling Linux — you can download Linux for free, and always could. They sold accountability: someone to call, someone to escalate to, someone your auditors can put on a slide. Sponsors fund maintainers, not repos. Nobody sponsors a codebase.

Hosting. Uptime is a track record, not a feature. Your agent can generate a Supabase clone in a weekend — it cannot generate five years of 99.99% uptime history, a SOC2 report, or a security team that has actually handled a breach at 3am.

And the quiet one: maintenance itself. Generation is a one-shot event. Survival is a grind measured in years. Every abandoned project now gets ten eager clones within a week — and none of those clones will be patched either, because the people who generated them were solving for "exists", not "stays alive".

## The uncomfortable summary

Code is free. Someone who will still be fixing it in three years is not.

That asymmetry is the entire business model now. If you maintain open source, your money is not in the code — it is in being the person who is still there. Verifiable maintenance history, the thing my [scorecards project](https://scorecards.monetize-oss.com/) tries to measure, is the closest thing left to a moat you can actually build.

So if you are sitting on an open source project wondering how to monetize it: stop asking what feature you can charge for. Ask who would miss you if you stopped showing up. That answer is your product.

The clone has your code. It will never have your Tuesday.
