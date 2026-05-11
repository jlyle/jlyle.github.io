# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

This is a **Claude Design handoff bundle** — static HTML/CSS/JS prototypes for **JumpyMouse**, a resume-writing service targeting IT professionals. The goal is to implement these designs in a real production stack. Match the visual output pixel-perfectly; don't replicate the prototype's internal structure unless it fits the target stack.

## Design overview

The prototype is a multi-page marketing site with these pages:

| File | Purpose |
|---|---|
| `index.html` | Homepage — hero, logo strip, services overview, process steps, before/after tab widget, testimonials, big CTA |
| `pricing.html` | Tiered pricing (Essentials / Core / Pro / Elite), add-ons, FAQ |
| `samples.html` | Resume sample gallery |
| `about.html` | About the founder |
| `blog.html` | Resources/blog listing |
| `contact.html` | Contact form |
| `order.html` | Order/intake flow |
| `account.html` | Sign in |

## Shared shell

`partials.js` renders the nav and footer into `#nav-mount` and `#footer-mount` placeholder divs via `window.renderShell(activePage)`. Every page calls `renderShell('<filename>.html')` at the bottom of the body. When porting, this becomes a shared layout component.

The nav includes a **light/dark theme toggle** that persists via `localStorage` under the key `jm-theme`. The `data-theme` attribute on `<html>` drives all dark-mode overrides.

## Design system (`styles.css`)

All tokens are CSS custom properties on `:root`, overridden by `[data-theme="dark"]`:

- **Colors**: `--navy-900` (primary dark), `--coral` / `--coral-2` (accent), `--paper` / `--paper-2` (light backgrounds), `--ink` / `--ink-2` / `--muted` (text hierarchy), `--line` (borders), `--card` / `--card-line` (card surfaces)
- **Fonts**: Geist (body, sans-serif), Newsreader (headings/serif display, applied via `.serif` class), JetBrains Mono (monospace labels, applied via `.mono` class) — all loaded from Google Fonts
- **Layout**: `.wrap` constrains to `--maxw: 1200px` with `28px` side padding; `.grid-2/3/4` utility classes collapse to single column at 900px
- **Breakpoint**: `max-width: 900px` is the single shared mobile breakpoint; nav links hide, multi-col grids collapse to 1 col
- **Buttons**: `.btn` base + modifiers `.btn-coral`, `.btn-primary`, `.btn-ghost`; sizes `.btn-sm`, `.btn-lg`
- **Badges/chips**: `.badge`, `.badge-vet` (navy bg), `.badge-coral`, `.chip` (mono font)
- **Sections**: `section { padding: 80px 0 }`, `section.tight { padding: 48px 0 }`

Page-specific styles are written inline in `<style>` blocks within each HTML file.

## Interactive widgets

- **Before/After tabs** (`index.html`): tab buttons with `data-tab` attribute switch content in `#ba-before` / `#ba-after` divs; active tab gets `.active` class
- **Theme toggle**: `toggleTheme()` in `partials.js` flips `data-theme` and updates the SVG icon inline

## Brand identity

- **Name**: JumpyMouse (stylized "JumpyMouse Resume Co.")
- **Wordmark**: "JM" monogram in a navy square with a coral dot, next to "JumpyMouse" in Newsreader serif
- **Accent color**: coral `#d96a4a` used for CTAs, section-title rules inside resume previews, and italic emphasis in headings
- **Positioning**: veteran-owned (Navy), founded by a 25-year Red Hat engineering/hiring veteran, targeting IT professionals (SREs, cloud architects, security engineers, etc.)
- **Key CTAs**: "Start a resume" → `order.html`; "See samples" → `samples.html`; "Book a free intro call"
