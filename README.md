# Monetize OSS blog

Source for https://blog.monetize-oss.com — static site built with
[Zola](https://www.getzola.org/) and deployed to GitHub Pages via
`.github/workflows/deploy.yml`.

## Writing a post

Create `content/<slug>.md`:

    +++
    title = "Post title"
    date = 2026-10-14
    description = "One-line summary for the index and social cards."
    tags = ["essays"]

    [taxonomies]
    tags = ["essays"]
    +++

    Body in markdown. Posts render twice weekly; newsletter editions
    are cross-posted here.

Then `zola build` to check locally, commit, push to `main`. Deploy is
automatic. Custom domain via the `CNAME` file.
