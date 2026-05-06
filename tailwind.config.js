/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // ─── Surface (backgrounds) ─────────────────────────────────────
        // Warm off-white inspired by editorial paper stock. Avoid pure
        // white (#FFFFFF) for primary surfaces — it feels clinical and
        // breaks the calm tone of the brand.
        surface: {
          DEFAULT: '#FAF8F3',  // page background
          raised:  '#FFFFFF',  // cards, inputs, elevated surfaces
          sunken:  '#F2EFE8',  // subtle inset areas, code blocks, dividers
        },

        // ─── Ink (text) ────────────────────────────────────────────────
        // Near-black with warm undertone. Never use pure black (#000000).
        ink: {
          DEFAULT:   '#1A1A1A',  // primary text, headings
          secondary: '#4A4A4A',  // body copy, descriptions
          tertiary:  '#7A7A7A',  // captions, metadata, helper text
          muted:     '#A8A8A8',  // disabled states, placeholders
        },

        // ─── Border ────────────────────────────────────────────────────
        border: {
          DEFAULT: '#E5E1D8',  // standard borders
          strong:  '#C9C4B8',  // emphasised borders, focused inputs
          subtle:  '#EFEBE2',  // divider lines, very soft separation
        },

        // ─── Accent ────────────────────────────────────────────────────
        // RESERVED USAGE: only for confirmation, success, and quorum-
        // reached states. Never use for primary CTAs, decoration, or
        // general highlighting. If everything is highlighted, nothing is.
        //
        // Approved uses:
        //   • Quorum reached badge
        //   • Event confirmed indicator
        //   • Success toasts
        //   • Active progress fill in QuorumIndicator
        //   • Small detail accents (1–2px dots, underline marks)
        accent: {
          DEFAULT: '#D1F471',  // the lime accent
          ink:     '#1A1A1A',  // text color when placed ON accent (always dark)
          soft:    '#E8FAB8',  // very subtle accent tint for backgrounds
        },

        // ─── Semantic states ───────────────────────────────────────────
        // Note: success is intentionally NOT the accent color. Accent is
        // reserved for ShowUp's specific quorum/confirmation moments.
        // Generic success (e.g. "settings saved") uses neutral ink.
        danger: {
          DEFAULT: '#C5443B',  // errors, destructive actions
          soft:    '#FAEEED',  // error message backgrounds
        },
        warning: {
          DEFAULT: '#B8862E',  // warnings, "this event needs more people"
          soft:    '#F8F1E0',
        },
      },

      fontFamily: {
        // Display: editorial serif for headings, hero copy, section titles.
        // Fraunces is a free, modern serif with personality. Falls back to
        // system serifs that share its warmth.
        display: [
          'Fraunces',
          'Charter',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'serif',
        ],
        // Body: clean, neutral sans-serif. Inter is a safe, readable choice
        // — but with the strong serif display, it adds quiet contrast.
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        // Mono: for tags, codes, event IDs, timestamps in metadata.
        mono: [
          '"JetBrains Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },

      fontSize: {
        // Editorial type scale — 1.25 ratio (major third), tuned for
        // calm hierarchy rather than aggressive contrast.
        'caption': ['0.75rem',  { lineHeight: '1.1rem',  letterSpacing: '0.01em' }],
        'small':   ['0.875rem', { lineHeight: '1.35rem' }],
        'body':    ['1rem',     { lineHeight: '1.6rem'  }],
        'lead':    ['1.125rem', { lineHeight: '1.75rem' }],
        'h4':      ['1.25rem',  { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        'h3':      ['1.5rem',   { lineHeight: '2rem',    letterSpacing: '-0.015em' }],
        'h2':      ['2rem',     { lineHeight: '2.4rem',  letterSpacing: '-0.02em' }],
        'h1':      ['2.75rem',  { lineHeight: '3.1rem',  letterSpacing: '-0.025em' }],
        'display': ['3.75rem',  { lineHeight: '4rem',    letterSpacing: '-0.03em' }],
      },

      fontWeight: {
        // Use sparingly — most UI sits at 400 (regular) or 500 (medium).
        // 600+ reserved for headings and emphasis moments.
        normal:   '400',
        medium:   '500',
        semibold: '600',
        bold:     '700',
      },

      borderRadius: {
        // Conservative radius scale — soft but not bubbly.
        none: '0',
        sm:   '4px',   // tags, badges
        DEFAULT: '8px', // inputs, buttons, small cards
        md:   '12px',  // cards, modals
        lg:   '16px',  // large surfaces, sheets
        full: '9999px', // pills, avatars, the QuorumIndicator dot
      },

      spacing: {
        // 4px base unit. Most spacing should land on multiples of 4.
        // Avoid arbitrary values — pick from this scale.
        '0.5': '2px',
        '1':   '4px',
        '2':   '8px',
        '3':   '12px',
        '4':   '16px',
        '5':   '20px',
        '6':   '24px',
        '8':   '32px',
        '10':  '40px',
        '12':  '48px',
        '16':  '64px',
        '20':  '80px',
        '24':  '96px',
        '32':  '128px',
      },

      boxShadow: {
        // Soft, paper-like shadows. Never harsh or floating-modal style.
        'subtle': '0 1px 2px rgba(26, 26, 26, 0.04)',
        'card':   '0 2px 8px rgba(26, 26, 26, 0.06)',
        'raised': '0 4px 16px rgba(26, 26, 26, 0.08)',
        'focus':  '0 0 0 3px rgba(209, 244, 113, 0.4)', // accent-tinted focus ring
      },

      transitionDuration: {
        DEFAULT: '180ms',
        slow:    '320ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
