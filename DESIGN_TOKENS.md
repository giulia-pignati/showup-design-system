# Design Tokens

This document explains *why* each token exists and *when* to use it. The values themselves live in `tailwind.config.js` and `src/lib/tokens.ts` — this file gives them meaning.

## Color philosophy

ShowUp uses a deliberately small palette. The discipline is the design.

### Surface colors

The base surface is **`#FAF8F3`** (warm off-white) rather than pure white. This is the single most defining color choice in the system — it gives every screen a calm, paper-like quality that pure white cannot. Pure white reads as clinical, app-like, transactional. Off-white reads as considered, editorial, human.

Three surface tones, used in order of elevation:

| Token            | Value     | Use                                           |
|------------------|-----------|-----------------------------------------------|
| `surface`        | `#FAF8F3` | Page backgrounds. The default canvas.         |
| `surface-raised` | `#FFFFFF` | Cards, inputs, modals. Anything elevated.     |
| `surface-sunken` | `#F2EFE8` | Inset areas, dividers, subtle separation.     |

### Ink (text)

Never use pure black (`#000000`) for text. The defining ink color is `#1A1A1A` — near-black with a warm undertone that sits comfortably on the off-white surface.

| Token           | Value     | Use                                       |
|-----------------|-----------|-------------------------------------------|
| `ink`           | `#1A1A1A` | Primary text, headings, important UI.     |
| `ink-secondary` | `#4A4A4A` | Body copy, descriptions, paragraph text.  |
| `ink-tertiary`  | `#7A7A7A` | Captions, metadata, helper text.          |
| `ink-muted`     | `#A8A8A8` | Placeholders, disabled states.            |

### The accent: `#D1F471`

This is the only saturated color in the system, and its usage is **strictly constrained**. The accent represents the central mechanic of ShowUp: confirmation. Quorum reached. Event happening. You're going.

**Rules for the accent:**

- ✅ `Badge` with `variant="confirmed"` (e.g. "Quorum reached")
- ✅ `QuorumIndicator` fill bar when status is `reached`
- ✅ Subtle focus rings (`shadow-focus`, accent at 40% opacity)
- ✅ Small detail accents — a 4px dot beside an active item, a single underline mark
- ✅ Text selection (`::selection`)

- ❌ Primary buttons (those use ink black)
- ❌ Generic success states ("Settings saved" — use neutral ink)
- ❌ Decorative backgrounds, gradients, or large filled areas
- ❌ Brand logo or name styling
- ❌ Anywhere the meaning isn't specifically "confirmation/quorum/momentum"

**Why so strict?** The accent only feels meaningful when it's rare. If every button, link, and highlight uses it, users stop noticing — and the quorum-reached moment, which is the entire point of the product, loses its emotional weight.

A soft tint (`accent-soft` = `#E8FAB8`) exists for cases where a hint of warmth is needed in a larger area — onboarding success illustrations, completed state backgrounds. Use it even more sparingly than the main accent.

## Typography

### The pairing

ShowUp pairs a contemporary serif (**Fraunces**) for display with a clean sans-serif (**Inter**) for body. This is the second most defining choice in the system. The serif gives every heading editorial gravity; the sans keeps body copy calm and readable.

If you ever consider changing one of these fonts, consider the entire identity — the contrast between them *is* the brand voice.

### Type scale

| Token       | Size      | Use                                          |
|-------------|-----------|----------------------------------------------|
| `caption`   | 12px      | Metadata, timestamps, micro-copy.            |
| `small`     | 14px      | Helper text, secondary info.                 |
| `body`      | 16px      | Default body copy, inputs, buttons.          |
| `lead`      | 18px      | Lead paragraphs, intro copy.                 |
| `h4`        | 20px      | Cluster labels, small group headings.        |
| `h3`        | 24px      | Subsections, event card titles.              |
| `h2`        | 32px      | Section titles within a page.                |
| `h1`        | 44px      | Page titles.                                 |
| `display`   | 60px      | Hero moments only — landing, onboarding.     |

Headings use weight `600` (semibold) by default. The Fraunces serif has delicate strokes that can read lighter than they are on warm off-white surfaces — semibold gives titles the visual weight they need to anchor a layout. Avoid `700` (bold) — it crosses into heavy territory and breaks the calm editorial tone.

## Spacing

The system uses a **4px base unit**. All padding, margin, and gap values should be multiples of 4. The most common values: 4, 8, 12, 16, 24, 32, 48, 64.

Avoid arbitrary values like `padding: 13px`. If a layout needs an in-between size, the layout itself is probably misaligned.

## Border radius

Conservative scale. Soft but not bubbly.

| Token   | Value | Use                              |
|---------|-------|----------------------------------|
| `sm`    | 4px   | Tags, badges, small chips.       |
| `base`  | 8px   | Inputs, buttons, small cards.    |
| `md`    | 12px  | Cards, modals, larger surfaces.  |
| `lg`    | 16px  | Sheets, full-screen panels.      |
| `full`  | round | Pills, avatars, the focus dot.   |

## Shadows

Shadows are paper-soft. Never harsh, never floating-modal style.

| Token    | Use                                             |
|----------|-------------------------------------------------|
| `subtle` | Almost-flat surfaces with just a hint of depth. |
| `card`   | Default elevation for cards.                    |
| `raised` | Hover states for interactive cards, popovers.   |
| `focus`  | Accent-tinted focus ring on inputs/buttons.     |

## What's NOT in this system

Documenting absences is as important as documenting presences:

- **No purple gradients.** No gradients at all by default — surfaces are flat.
- **No icon library specified yet.** When chosen, prefer line-based icons (Lucide, Phosphor Light) over filled — they match the doodle illustration style.
- **No dark mode tokens yet.** ShowUp launches in a single warm light theme. Dark mode will require its own intentional design pass, not an automatic invert.
- **No multiple accent colors.** One accent. That's the whole point.
