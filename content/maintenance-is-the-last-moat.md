+++
title = "Maintenance Is the Last Moat"
date = 2026-10-14
slug = "maintenance-is-the-last-moat"
description = "Generation is free. Survival is a grind measured in years. That asymmetry is the business model."
tags = ["essays", "maintenance"]

[taxonomies]
tags = ["essays", "maintenance"]
+++

Every abandoned project now gets ten eager clones within a week.

None of those clones will be patched either. The people who generated them were solving for "exists", not "stays alive". And that gap — between generated and maintained — is where the entire economics of open source now lives.

## The xkcd problem, amplified

You know the comic: a critical piece of infrastructure everyone depends on, maintained by one unpaid person in Nebraska. AI made that problem worse, not better. Agents make it trivial to *start* projects. They do nothing to make it easier to *sustain* them. Sustaining is issue triage, security response, the exploding volume of AI-generated spam issues, dependency upgrades nobody notices until they break, and the slow accumulation of trust.

That work doesn't show up in a README. It shows up in a maintenance history — commit cadence through holidays, response time to security reports, whether the project survived its maintainer's new job.

## Verifiable maintenance as an asset

Here is the shift: maintenance used to be a cost center you mentioned apologetically in your README. Now it is the closest thing to a moat you can actually build.

When a clone of your project exists — and one will — buyers and adopters will pick between you and the clone on exactly one question: *which one will still be here in three years?* A public, verifiable maintenance history answers that. A feature list does not.

This is the question my [open source scorecards](https://scorecards.monetize-oss.com/) project tries to measure: not stars, not hype, but whether the project shows the signs of life that predict survival.

## What this means if you maintain something

Stop asking what feature you can charge for. Features are clonable in days. Start building the record that proves you are the one who stays: respond to security reports fast and publicly, publish your roadmap misses along with your hits, keep the changelog honest for years.

Then monetize the position, not the code: support, hosting, enterprise governance, sponsorships. Every one of those converts better the longer your maintenance record gets.

The clone has your code. It will never have your Tuesday — or your three-year changelog.
