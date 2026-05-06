# ShowUp Design System

> A calm, editorial design system for **ShowUp** — a social events app with quorum mechanics. People create one-off activities (hiking, tennis, coffee, anything), and events only happen if a minimum number of participants confirm.

## Brand positioning

ShowUp is **neutral by design**. It is not dating. It is not friendship-building. It is a coordination tool for people who want to do the same thing on the same day. The visual language reflects that: warm but reserved, editorial but approachable, with a single accent color reserved for moments of confirmation and momentum.

## Aesthetic direction

The system draws inspiration from contemporary editorial design — research papers, long-form publications, and quiet productivity tools. The look is:

- **Warm neutral** rather than stark white
- **Serif display + clean sans body** for an editorial, considered feel
- **Generous whitespace** with confident typographic hierarchy
- **Hand-drawn doodle illustrations** as small accents (line-art style, never decorative noise)
- **One accent color** (`#D1F471`) reserved exclusively for high-signal moments: quorum reached, event confirmed, success states

## What's in this repo

```
src/
├── styles/
│   └── globals.css         # CSS variables, base typography, fonts
├── components/
│   ├── Button.tsx          # Primary, secondary, ghost variants
│   ├── Card.tsx            # Event cards, content containers
│   ├── Input.tsx           # Text inputs with label patterns
│   ├── Badge.tsx           # Status indicators (uses accent color)
│   ├── Heading.tsx         # Display + body heading variants
│   ├── EventImage.tsx      # Optional event cover photo (21:9 cinematic)
│   └── QuorumIndicator.tsx # Domain-specific component
├── app/
│   └── page.tsx            # Example page showing components in use
└── lib/
    └── tokens.ts           # Design tokens exported as TS constants

tailwind.config.js          # Full token system as Tailwind theme
DESIGN_TOKENS.md            # Detailed token documentation
BRAND_VOICE.md              # Voice & copy — UI vs marketing registers
ILLUSTRATION_STYLE.md       # Doodle illustration guidelines (for later)
```

## How to use this with Claude Design

This repo is structured to be parsed by Claude Design. When you connect it as your design system source, Claude will read:

1. `tailwind.config.js` — to learn the color, type, and spacing tokens
2. `src/components/` — to learn the component patterns and naming
3. `src/app/page.tsx` — to see how components compose into real UI
4. The Markdown docs — to understand intent and constraints:
   - `DESIGN_TOKENS.md` — visual system reference
   - `BRAND_VOICE.md` — copy and voice rules (UI vs marketing)
   - `ILLUSTRATION_STYLE.md` — illustration guidelines

When you then ask Claude to design new screens for ShowUp, it will use this vocabulary automatically.

## Quick principles

1. **One accent color, used rarely.** `#D1F471` is reserved for confirmation moments. If everything is highlighted, nothing is.
2. **Type does the heavy lifting.** Hierarchy comes from font weight and scale, not from color or boxes.
3. **Warm neutrals over pure white.** The base background is off-white (`#FAF8F3`), giving the interface a paper-like calm.
4. **Doodles are accents, not decoration.** Used sparingly to add humanity to empty states, success moments, and section headers.
5. **Borders are soft.** Radius is consistent at 8px for inputs/cards, 12px for larger surfaces. No sharp corners, no overly rounded blobs.
