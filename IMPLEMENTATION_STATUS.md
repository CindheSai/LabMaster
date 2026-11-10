# LabMaster — Implementation Status

Living record of the rebuild: what was changed, what was verified, and what
remains limited. Updated as work completed.

**Deliverable:** `release/LabMaster/` (double-click `index.html`) plus
`release/labmaster-standalone.zip`. Source of truth: `standalone/` (template,
CSS, JS, data) bundled by `scripts/build-standalone.mjs`.

---

## 1. Completed phases

| Phase | Scope | Status |
| --- | --- | --- |
| 1 | Repository audit (React app, standalone app, data, PDFs, scripts) | Complete |
| 2 | Educational content preservation — 4 subjects, 39 practicals, original IDs | Complete, asserted |
| 3 | Design system and alignment consistency | Complete, measured |
| 4 | Application shell: sidebar, header, breadcrumbs, mobile drawer | Complete |
| 5 | Dashboard with live statistics and continue-learning | Complete |
| 6 | Subject pages with filters and syllabus-order sorting | Complete |
| 7 | Practical detail pages (aim → viva → notes → prev/next) | Complete |
| 8 | Code viewer: highlighting, line numbers, copy, download, font size | Complete |
| 9 | Content accuracy pass on aims, steps, outputs, viva answers | Complete |
| 10 | Five known programming defects corrected | Complete, asserted |
| 11 | Global search (Ctrl/Cmd+K, live results, keyboard navigation) | Complete, asserted |
| 12 | Progress, bookmarks, notes, export/import, reset flows | Complete, asserted |
| 13 | PDF resource centre with relative paths | Complete, asserted |
| 14 | Responsive layout 360–1920 px | Complete, measured |
| 15 | Functionality audit of interactive controls | Complete |
| 16 | Standalone `file://` build (single HTML, no server) | Complete, asserted |
| 17 | Performance and security review | Complete |
| 18 | Code quality: modular standalone modules, typed React source | Complete |
| 19 | Automated checks (content, features, alignment) | Complete |
| 20 | Pixel-level alignment QC | Complete, 0 defects |
| 21 | Delivery: docs, ZIP, GitHub sync, live host | Complete |

---

## 2. Defects fixed in this pass

1. **Search dialog geometry** — the overlay was nested *inside* the dialog, so the
   dim layer never covered the viewport and the panel rendered pinned to the
   top-left corner (~706 px off-centre at 1366 px). Restructured to the same
   `backdrop > hit-layer + panel` pattern used by the confirm dialogs; the panel
   is now centred and click-away closes it.
2. **Sidebar width drift** — the sidebar could be squeezed by long content,
   shifting the whole content column between routes. Width is now pinned
   (`width`/`min-width`/`max-width`/`flex-basis`) in both expanded and collapsed
   states.
3. **Content-column drift on the dashboard** — the only route short enough to
   omit a scrollbar shifted 15 px relative to other pages. The scrollbar gutter is
   now reserved on the real scroll container (`body`), so every route shares one
   content column.
4. **Header chip overflow (19 routes at 360 px)** — the trailing card-header chip
   was compressed to 14 px while needing 39 px, pushing labels past the card edge.
   It now keeps its intrinsic width while the title wraps.
5. **Settings theme cards overflow** — theme descriptions inherited
   `white-space: nowrap` from the generic button rule. They now wrap inside the
   card.
6. **Calculator `eval()` flag** — verified the shipped program uses an AST
   allowlist parser (`safe_eval`); the only `eval(` occurrence is inside a
   docstring. The content check was corrected to inspect executable code only.

---

## 3. Verification performed

| Check | Command | Result |
| --- | --- | --- |
| TypeScript + production build | `npm run lint`, `npm run build` | Clean |
| Alignment audit (14 routes × 8 viewports) | `node scripts/audit-alignment.mjs` | 112 checks, 0 defects |
| Content integrity | `node scripts/verify-content.mjs` | PASS — 39 IDs, 168 viva, 4 PDFs, 5 fixes |
| Feature verification on `file://` | `node scripts/verify-features.mjs` | PASS — 35 assertions |
| Dependency advisories | shared security scan | 291 packages, 0 high/critical |

Feature assertions cover: dashboard statistics, `Ctrl+K` overlay, panel centring,
live search results, `Enter` navigation, `Escape` close, completion toggle and
reload persistence, bookmark toggle and Bookmarks page listing, note persistence,
theme switch and persistence, next-practical navigation, code viewer copy/download,
four relative PDF paths resolving next to `index.html`, and zero console errors.

---

## 4. Known limitations (by design, not defects)

- **No server-side execution.** A `file://` page cannot run PHP, MySQL or Python.
  Expected outputs are labelled as expected, browser demos run in a sandboxed
  iframe, and local run instructions are provided for the rest. No simulation is
  presented as a real execution.
- **Storage is per browser and per copy of the folder.** Progress, bookmarks and
  notes live in `localStorage`; they do not sync between browsers, computers or
  separately extracted copies. Export/import JSON is the supported way to move
  data.
- **PDF preview** depends on the browser's built-in PDF viewer; Open and Download
  always work from the relative `resources/` paths.
- **Hosted deployment** is for development and testing on the AppJet Free plan
  (1 GB RAM, 1 vCPU). For large production traffic, deploy the same branch on
  qoddi.com.
