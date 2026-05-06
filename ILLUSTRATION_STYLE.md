# Illustration Style

> Status: **documented, not yet produced.** This file describes the intended doodle illustration style so that when illustrations are commissioned or generated later, they remain consistent with the rest of the system.

## Reference

The visual reference for ShowUp's illustration style comes from the doodle illustrations at [LP5.AI](https://www.lp5.ai/white-paper) — small, hand-drawn, line-based vignettes used as section markers in long-form content. They are decorative but never noisy: they add humanity without taking attention away from the type.

## Stylistic principles

1. **Line-based, not filled.** Illustrations are drawn with a single consistent stroke (1.5–2px on a typical 64px illustration). No solid shapes, no gradients, no shading — just clean lines.

2. **Slightly imperfect, intentionally so.** The line should feel hand-drawn rather than machine-perfect. Subtle wobble, slight thickness variation, occasional gaps where two lines meet. The goal: a person made this in a notebook, not a logo template.

3. **Geometric simplicity.** Shapes are abstracted to their essence. A coffee cup is a trapezoid with a handle. A tennis racket is a circle on a stick with criss-cross lines. A hike is a triangle (mountain) with a curve (path) and a small dot (person).

4. **Black ink on the warm surface.** Default stroke color is `#1A1A1A` (the system's primary `ink`). On dark backgrounds, switch to `#FAF8F3` (surface). Never use the accent color in illustrations — illustrations are tonal accents, not chromatic ones.

5. **Small. Always small.** Illustrations sit at 48–96px in most contexts. They are vignettes, not centerpieces. The exception is empty-state illustrations, which can scale to 120–160px.

## Where illustrations are used

- **Empty states.** "No events yet" — a tiny doodle of an empty calendar.
- **Section dividers in onboarding.** Each step gets a small vignette that hints at the topic.
- **Success moments.** When an event reaches quorum, a small celebratory vignette (still line-only) appears alongside the confirmation.
- **Category iconography.** Each event category (Hiking, Tennis, Coffee, etc.) has a doodle-style icon that lives somewhere between an illustration and an icon.

## Where illustrations are NOT used

- ❌ Inside cards on the main feed (would compete with content)
- ❌ As decoration on buttons or form elements
- ❌ As background patterns or repeated motifs
- ❌ For brand identity (the wordmark stands alone)

## Producing them later

When the time comes to produce these:

- **Tools:** Procreate or hand-drawn-and-traced in Figma/Illustrator. AI generators tend to over-produce — if using Midjourney/DALL-E, ask explicitly for "single-weight line drawing, no fill, no shading, hand-drawn imperfect line."
- **Format:** SVG with stroke set as `currentColor` so they inherit ink color from CSS context.
- **Naming:** Store under `src/illustrations/` with descriptive names: `empty-events.svg`, `quorum-reached.svg`, `category-hiking.svg`, etc.
- **Prompt template (if AI-generating):**
  > "A single-line hand-drawn doodle of [subject], black ink on white, 1.5px consistent stroke weight, slightly imperfect, no fill, no shading, no color, simple geometric forms, 64px tall, in the style of editorial paper marginalia."

## Reference checklist before shipping any illustration

- [ ] Single weight line, no fill
- [ ] Stroke uses `currentColor` (inherits from parent text color)
- [ ] Reads at 48px (test the smallest expected size first)
- [ ] Hand-drawn quality, not vector-perfect
- [ ] No accent color used
- [ ] Conceptually simple — one clear subject, no clutter
