import { HTMLAttributes, ElementType } from 'react';

/**
 * Heading
 *
 * The display serif (Fraunces) does the work here. Headings are the
 * single most important visual element of the brand — the editorial
 * tone comes from generous serif type at confident sizes.
 *
 * Levels map to semantic HTML by default but can be overridden via `as`.
 * Always use the smallest level that fits the visual hierarchy of the
 * screen, not the page outline.
 *
 * - display: Hero moments only. Landing page, onboarding welcome.
 * - h1:      Page titles ("Discover events", "Your events").
 * - h2:      Section titles within a page.
 * - h3:      Subsection / event card titles.
 * - h4:      Small group headings, labels above clusters.
 */

type HeadingLevel = 'display' | 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: ElementType;
}

const levelStyles: Record<HeadingLevel, string> = {
  // All headings use semibold (600) by default. The Fraunces serif has
  // delicate strokes that can appear lighter than they are at 500/medium,
  // especially on warm off-white backgrounds. Semibold gives the editorial
  // type the visual weight it needs without crossing into "bold/heavy"
  // territory that would break the calm tone.
  display: 'text-display font-semibold',
  h1:      'text-h1      font-semibold',
  h2:      'text-h2      font-semibold',
  h3:      'text-h3      font-semibold',
  h4:      'text-h4      font-semibold',
};

const defaultTag: Record<HeadingLevel, ElementType> = {
  display: 'h1',
  h1:      'h1',
  h2:      'h2',
  h3:      'h3',
  h4:      'h4',
};

export function Heading({
  level = 'h2',
  as,
  className = '',
  ...props
}: HeadingProps) {
  const Tag = as || defaultTag[level];

  return (
    <Tag
      className={`
        font-display text-ink
        ${levelStyles[level]}
        ${className}
      `}
      {...props}
    />
  );
}
