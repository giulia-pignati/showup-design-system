/**
 * Design tokens exported as TypeScript constants.
 * 
 * Mirrors the values in `tailwind.config.js` so non-Tailwind code
 * (charts, animations, third-party components) can reference the
 * same source of truth.
 */

export const colors = {
  surface:        '#FAF8F3',
  surfaceRaised:  '#FFFFFF',
  surfaceSunken:  '#F2EFE8',

  ink:           '#1A1A1A',
  inkSecondary:  '#4A4A4A',
  inkTertiary:   '#7A7A7A',
  inkMuted:      '#A8A8A8',

  border:        '#E5E1D8',
  borderStrong:  '#C9C4B8',
  borderSubtle:  '#EFEBE2',

  accent:        '#D1F471',
  accentInk:     '#1A1A1A',
  accentSoft:    '#E8FAB8',

  danger:        '#C5443B',
  dangerSoft:    '#FAEEED',
  warning:       '#B8862E',
  warningSoft:   '#F8F1E0',
} as const;

export const fonts = {
  display: 'Fraunces, Charter, Georgia, Cambria, "Times New Roman", serif',
  sans:    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  mono:    '"JetBrains Mono", Menlo, Monaco, Consolas, monospace',
} as const;

export const radius = {
  sm:   '4px',
  base: '8px',
  md:   '12px',
  lg:   '16px',
  full: '9999px',
} as const;

export const shadows = {
  subtle: '0 1px 2px rgba(26, 26, 26, 0.04)',
  card:   '0 2px 8px rgba(26, 26, 26, 0.06)',
  raised: '0 4px 16px rgba(26, 26, 26, 0.08)',
  focus:  '0 0 0 3px rgba(209, 244, 113, 0.4)',
} as const;
