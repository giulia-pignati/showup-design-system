import { HTMLAttributes } from 'react';

/**
 * Badge
 *
 * Small status indicators. THIS is where the accent color (`#D1F471`)
 * has its primary moment — but only in the `confirmed` variant.
 *
 * Variants:
 * - confirmed:  ACCENT background with dark text. Use for "Quorum reached",
 *               "Event confirmed", "You're going". This is the only component
 *               in the entire system that uses accent as a fill.
 *
 * - pending:    Neutral. "Waiting for confirmation", "X more needed".
 *
 * - cancelled:  Soft danger tint. "Event cancelled", "Did not reach quorum".
 *
 * - neutral:    Plain tag styling. Used for category labels (Hiking, Coffee,
 *               Tennis), location tags, time labels.
 */

type BadgeVariant = 'confirmed' | 'pending' | 'cancelled' | 'neutral';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  confirmed: 'bg-accent text-accent-ink',
  pending:   'bg-surface-sunken text-ink-secondary border border-border',
  cancelled: 'bg-danger-soft text-danger',
  neutral:   'bg-transparent text-ink-secondary border border-border',
};

export function Badge({ variant = 'neutral', className = '', ...props }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        px-2.5 h-6
        text-caption font-medium
        rounded-sm
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    />
  );
}
