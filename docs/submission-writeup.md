# Submission Write-Up

## Project Intent

This project is built as a browser-based sales deck for The Dubai Mall, designed to replace fragmented pitch workflows where sales teams jump between static files, links, and verbal explanation. The experience is intended to work in two modes:

- as a live, screen-shared sales narrative
- as a standalone self-guided link for decision makers

The central product decision was to make the deck act like a commercial tool, not a marketing microsite.

## Why The Dubai Mall

The Dubai Mall offers the strongest mixed-use narrative among mega-mall properties:

- retail scale (1,200+ outlets)
- luxury positioning via Fashion Avenue
- destination entertainment (Aquarium, ice rink, cinema, family attractions)
- dedicated event infrastructure (Dubai Mall Exhibition Center)

This makes it ideal for a single platform that serves leasing, sponsorship, and event-booking conversations.

## Product Thinking and UX Strategy

The deck is built around non-linear navigation and buyer intent:

- sticky chapter navigation for free exploration
- video-first hero storytelling
- buyer-path switching (leasing, sponsorship, events)
- expandable modules for deeper sales conversations
- commercial simulator for live projection during calls

The simulator converts abstract selling points into dynamic, on-call outputs and a prefilled inquiry flow.

## Technical Decisions

- React + TypeScript + Vite for fast iteration and clean maintainability
- lightweight architecture and minimal dependency surface
- data-driven content model (`content.ts`) for easy expansion
- modular components in a single app shell
- GitHub Pages workflow for deployability and review

## AI Usage

AI was used as an acceleration layer for:

- narrative shaping and story structure
- copy refinement for business clarity
- visual direction and interaction ideation
- drafting documentation and resume bullets

Final implementation choices, interaction behavior, and technical decisions were manually curated.

## What I Would Improve With More Time

- replace placeholder media with licensed official clips and compressed variants
- add analytics (chapter engagement, CTA clicks, path selection rates)
- add route-level module pages for events/sponsorship/leasing
- run full Lighthouse and optimize to consistent 90+ on desktop and tablet
- build a lightweight CMS config for non-technical sales teams

## Outcome

The final output is a deployable, interactive sales deck that better mirrors how commercial teams actually sell high-value mixed-use destinations: quickly, visually, and with actionable pathways.