# The Dubai Mall Sales Deck

A browser-based, non-linear sales deck for The Dubai Mall. The experience is designed as a high-end pitch tool for prospective tenants, sponsors, and event partners, with a cinematic hero, chapter navigation, and expandable modules for events, sponsorship, and leasing.

## Tech Stack

- React 18
- TypeScript
- Vite
- Plain CSS for the visual system and motion

## What It Does

- Tells the property story without a presenter
- Puts video at the center of the experience
- Lets the viewer jump between chapters in any order
- Expands into modular paths for events, sponsorship, and leasing
- Works as a standalone link or as a screen-shared sales deck

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (GitHub Pages)

This repository includes a GitHub Actions workflow to deploy automatically to GitHub Pages on every push to `main`.

1. Open your repo settings on GitHub.
2. Go to `Settings -> Pages`.
3. Set source to `GitHub Actions`.
4. Push to `main` (or run the workflow manually).

Expected live URL format:

`https://mohitjain1708.github.io/website/`

## Design Decisions

- Used a dark luxury palette with gold and aqua accents to match the property positioning.
- Kept the layout non-linear with sticky chapter navigation and quick chapter jumps.
- Built the deck as a modular content model so deeper pages can be added later without rewriting the core UI.
- Used remote public video sources plus generated SVG posters to keep the initial implementation fast and visually rich.

## AI Use

- AI was used to accelerate positioning, structure, and copy refinement for the deck narrative.
- AI-assisted prompting guided the visual system, module hierarchy, and the ATS-ready summary below.
- The implementation keeps the final output polished and professional rather than obviously templated.

## Public Sources

- The Dubai Mall official site: About Dubai Mall, Entertainment, and Exhibition Center pages.
- Public contact and leasing pathways from the official site.

## ATS-Friendly Resume Bullets

- Built a responsive, browser-based interactive sales deck for a global retail destination using React, TypeScript, and Vite.
- Designed a non-linear storytelling interface with video-led hero content, sticky chapter navigation, and expandable business modules.
- Translated public property data into a premium commercial narrative tailored for retail leasing, sponsorship, and event bookings.
- Structured the codebase for future expansion into dedicated module pages without redesigning the core experience.
- Delivered a performance-conscious visual system with lazy-loaded media, reusable content models, and documented setup flow.

## Suggested Write-Up Angle

If you include the optional submission write-up, use this structure:

1. Why you chose The Dubai Mall and what makes it commercially unique.
2. How the non-linear deck improves the sales conversation compared with a static slide deck.
3. Where AI helped speed up research, copy refinement, and visual direction.
4. What you would add next: deeper venue pages, richer asset sourcing, and analytics.

## Submission Checklist

- Live URL deployed and verified
- GitHub repository public and readable
- README includes stack, setup, and deployment instructions
- Optional write-up included in [docs/submission-writeup.md](docs/submission-writeup.md)
- Source references and AI usage documented