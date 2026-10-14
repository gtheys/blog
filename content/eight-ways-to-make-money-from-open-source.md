+++
title = "The 8 Ways to Make Money from Open Source (Ranked by How Long They'll Survive AI)"
date = 2026-10-13
slug = "eight-ways-to-make-money-from-open-source"
description = "A tour of the monetization model landscape, each model scored on whether it survives agents that can rebuild anything."
tags = ["playbook", "ai-era"]

[taxonomies]
tags = ["playbook", "ai-era"]

[extra]
header_image = "img/eight-ways.jpg"
+++

There are exactly eight ways people make money from open source. Some of them are about to get much harder. Some were never about the code to begin with — and those are the ones that will outlive the current shift.

Here is the full landscape, ranked by how well each model survives a world where any competent developer with an agent can rebuild your product in a weekend.

## 1. Selling support and operations

The Red Hat model. Nobody ever paid Red Hat for Linux — Linux was free. They paid for accountability: someone to call, someone to escalate to, someone the auditors can put on a slide.

Agents can generate code. They cannot be on the hook at 3am when your deployment eats itself. **Survives AI untouched.**

## 2. Hosting and managed services

Uptime is a track record, not a feature. An agent can generate a Supabase clone in a weekend. It cannot generate five years of 99.99% uptime history, a SOC2 report, or a security team that has handled a real breach.

**Survives AI — arguably gets stronger.**

## 3. Sponsorships

Sponsors fund humans and track records, not repos. Nobody sponsors a codebase. The donation button on a maintainer profile converts because of years of visible, verifiable work.

**Survives AI untouched.**

## 4. Selling the whole product to enterprises (governance, not features)

The quiet winner. SSO, audit logs, RBAC — companies pay for these not because the code is hard, but because their compliance regime requires someone accountable to provide them. "My agent built our own SSO" does not survive a SOC2 audit.

**Survives AI — the compliance surface is the product.**

## 5. Grants and foundations

NLnet, Sovereign Tech Fund, Open Collective fiscal hosting. Grant bodies fund public goods and stewardship — a category agents cannot fabricate.

**Survives AI.**

## 6. Paid work and bounties

Algora-style issue bounties. Works, but watch the new failure mode: agent-generated low-effort bounty claims flooding your queue. Viable with screening.

**Survives AI with friction.**

## 7. Open core with feature gates

The paid tier exists because the features took months to build. But a clone doesn't care about your months. Feature-gating weakens badly when generation is free — gate on operations and governance instead, or lose the tier.

**Weakened by AI.**

## 8. Dual licensing and license fees

The "pay or we get copied" threat only worked when copying was expensive. It isn't anymore. Selling legal certainty still works for compliance-driven corporates — but as a threat, it's hollow.

**Most weakened by AI.**

## The pattern

Every model that survives is selling something that is *not the code*: accountability, uptime, a track record, a compliance surface, stewardship. Every model that dies is selling the code itself.

That is not a coincidence. It is the whole thesis of this blog: code is free now. Someone who will still be fixing it in three years is not — and that asymmetry is the business model.

Before you pick a model, check how projects already running it score on maintenance health over at the [open source scorecards](https://scorecards.monetize-oss.com/). The winners of the AI era will be the projects that are still alive in three years.
