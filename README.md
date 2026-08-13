# sarahalyahya.me

Plain HTML/CSS/JS, no build step. Deployed via GitHub Pages.

## Structure

```
index.html              the archive index (filterable list)
about.html               not built yet
CNAME                    custom domain for GitHub Pages
css/style.css            everything — shared across all pages
js/main.js               filters + status bar hover, safe to include everywhere
images/                  shared image assets
projects/
  return-to-sender.html  full worked example — duplicate this for new entries
  ...                    the other 9 index entries link here but aren't built yet
```

## Adding a new project page

1. Duplicate `projects/return-to-sender.html`, rename it to match the entry's slug.
2. Update: `<title>`, catalog number, tag(s), title, meta line, hero image, body
   paragraphs, exhibitions list, and the two pager links at the bottom (point them
   at whichever entries are chronologically adjacent).
3. In `index.html`, the entry's `href` already points at `projects/<slug>.html` —
   nothing to change there once the file exists.

## The tagging system

Every entry has two different things and they're not the same:

- `data-categories` — space-separated, used for filtering. An entry can have more
  than one (e.g. `"collaborations practical-work"`), and it'll show up under both
  filters. This also drives which colored pills render in `.entry-topline` — add
  a `<span class="entry-tag" data-cat="...">` for each category you want shown.
- `data-primary` — exactly one category, used for the accent color (crop-marks,
  title hover, links). Pick whichever category feels most central to the piece.
  This is a judgment call per entry, not automatic.

Four categories, four colors, set in `css/style.css` under `:root`:

| category | color | var |
|---|---|---|
| practical-work | cyan | `--cyan` |
| writing | amber | `--amber` |
| workshops | magenta | `--magenta` |
| collaborations | violet | `--violet` |

## Catalog numbers

`SA·YY·NN` — your initials, two-digit year, sequence within that year. They're
chronological and cosmetic; nothing in the code parses or depends on them, so
feel free to renumber by hand as entries get added or reordered.

## Deploying

Settings → Pages → source = `main` branch, `/` root. Custom domain field should
already pick up the `CNAME` file in this repo. DNS at your registrar: four GitHub
A-records (apex) or a CNAME record (if using `www`), then enable "Enforce HTTPS"
once it resolves.
