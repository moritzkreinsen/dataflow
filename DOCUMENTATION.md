# Dataflow Documentation

## Overview

Dataflow turns uploaded tabular data into editable visualisations. A project is
identified by an unguessable URL instead of an account. Anyone holding that URL
can view and edit the project, so it should be treated like a private editing
link and stored somewhere safe.

The application is available in German and English. On the start page it uses
the browser language; projects retain their selected language.

## Workflow

### 1. Data

Import CSV, TSV, or a JSON array of objects by dropping a file, selecting a
file, or pasting its contents. The first CSV/TSV row becomes the column header.
Dataflow detects decimal commas as well as decimal points and maps likely
category, numeric, latitude, longitude, and label columns automatically.

The preview includes a compact data table. Re-importing data updates the
project configuration while retaining the project link.

### Password protection

Projects can be encrypted from the Data tab. The password must be entered
twice. Encryption is performed in the browser using AES-GCM with a key derived
through PBKDF2. The server stores salt, IV, derivation parameters, and
ciphertext, but not the password or plain data. To remove password protection,
the current password must be provided once.

An encrypted project still exposes its non-data presentation settings and its
project URL. Encryption protects stored data at rest; it does not turn the URL
into an access-control system and does not protect a browser where the user has
already decrypted the project.

## Visualisations

The Visualize tab only presents options that fit the selected visualisation.

### Charts

Available chart types are columns, horizontal bars, lines, areas, dot plots,
scatter plots, pie/donut charts, dual-axis charts, waterfalls, heatmaps, and
metric cards. Depending on the chart type, Dataflow supports aggregation,
sorting, grouping, stacked and 100% stacked series, smoothed lines, markers,
legends, grids, values, and a second Y-axis.

Axis titles can be taken from the source columns or written freely. Category
labels are thinned and rotated automatically where required. Value labels use a
collision-aware layout: the default avoids collisions, while the optional
"all values" mode tries alternate locations before omitting impossible labels.
This keeps dense graphics readable without hiding data points from tooltips.

### Maps

Dataflow includes a bundled world-country basemap and supports three map types:

- **Symbol map:** latitude/longitude coordinates with an optional numeric size.
- **Locator map:** consistently sized geographic markers.
- **Choropleth map:** country names or ISO-M49 values joined to a numeric column.

For symbol and locator maps, choose marker shape, labels, grouping of nearby
markers, style, zoom, center, and automatic fitting to the supplied points.
For choropleths, choose aggregation and a sequential or diverging color scale.
All map types can show an optional legend title and a concise annotation.

Country names for choropleths must match the English country names in the
bundled geometry, or use ISO-M49 numeric codes. The world geometry is sourced
from Natural Earth and is included locally, so maps do not require a third
party map API or visitor tracking.

### Tables

Tables support visible-column selection, row limits, initial sorting, reader
search, pagination, sortable headers, fixed first column, compact spacing, and
first-row highlighting. Numeric cells can be rendered as a color scale or as
in-cell bars. Alignment can be automatic, left, centered, or right.

Search and header sorting work in the rendered project, not merely in the
editor. Table state is stored with the project so the view stays consistent
when the project link is opened again.

## Annotation and design

Use the Annotate tab for title, description, source, byline, palette,
background, text color, typography, and dimensions. Dataflow includes named
color themes and an "Own" theme for individual color choices.

Typography can use a system font, a hosted web-font stylesheet URL, or an
uploaded font file. Uploaded font data is stored inside the project so a
published project remains portable. Use only font files and hosted stylesheets
you are entitled to distribute.

## Publishing and exports

The Publish tab provides the project link, a small text-file download containing
the URL, an embed snippet, and SVG/PNG exports. Embeds are read-only previews;
the full project URL remains the editing link.

PNG export rasterises the entire visualisation stage so title, description,
chart, legend, source, and byline retain their relative layout. SVG export is
available for SVG-based charts and maps.

## Storage and deployment

Each project is a JSON file. By default it is stored beneath `storage/projects`.
For a hosted instance, configure `app/local.php` with an absolute `project_dir`
outside the Git checkout and, ideally, outside the public web root. The PHP
process must be allowed to create and write that directory.

This separation is important for updates: application files can be refreshed
with `git pull --ff-only` without touching existing projects, including
encrypted payloads. Details and the one-time legacy migration are in
[DEPLOYMENT.md](DEPLOYMENT.md).

## Privacy and indexing

Dataflow ships with a site-wide `robots.txt` disallow rule and matching
`noindex`, `nofollow`, `noarchive`, and `nosnippet` response metadata. These
instructions request that compliant crawlers do not index the application; they
do not replace server access controls for a public host.

No analytics, user account, or external mapping service is required by the
application. The hosting provider and the web server can still log requests as
part of normal server operation.

## Updating

Before updating, verify that `app/local.php` points to the persistent project
directory. Then update the tracked application files:

```sh
git pull --ff-only
```

Keep backups of the persistent project directory. A project URL is not
recoverable from the application interface if it is lost.

## Technical layout

- `index.php`: browser shell, project URL routing, no-index headers
- `api.php`: JSON project create, load, and save API
- `app/project_store.php`: token validation, project storage, migration
- `assets/js/app.js`: editor, rendering, encryption, export, localisation
- `assets/css/app.css`: responsive editor and presentation styles
- `assets/data/world-countries.geojson`: locally bundled country geometry

The project uses plain PHP, JavaScript, CSS, and browser WebCrypto. There is no
database, package manager, compilation step, or external API dependency.
