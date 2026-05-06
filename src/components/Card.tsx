import { HTMLAttributes, ReactNode, forwardRef } from 'react';

/**
 * Card
 *
 * The primary container for content blocks: event cards on the discover feed,
 * detail panels, info sections. Cards sit on the warm `surface` background
 * and use the brighter `surface-raised` (white) to gently elevate.
 *
 * Padding sizes (applied to the content area, not to the cover image):
 * - compact:  16px — for dense lists
 * - default:  24px — most cases (event cards, settings)
 * - spacious: 32px — featured content, empty states with illustrations
 *
 * Cover images:
 * - Pass an EventImage (or any ReactNode) via the `coverImage` prop and it
 *   renders flush with the top edges of the card, ignoring the content
 *   padding. The card uses `overflow-hidden` so the image's top corners
 *   are clipped to the card's rounded shape.
 *
 * Cards use shadow-card by default, never shadow-raised. The raised shadow
 * is reserved for floating modals/popovers.
 */

type CardPadding = 'compact' | 'default' | 'spacious';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: CardPadding;
  interactive?: boolean;       // adds hover state for clickable event cards
  coverImage?: ReactNode;      // optional flush-top image (EventImage)
}

const paddingStyles: Record<CardPadding, string> = {
  compact:  'p-4',
  default:  'p-6',
  spacious: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      padding = 'default',
      interactive = false,
      coverImage,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`
          bg-surface-raised
          border border-border
          rounded-md
          shadow-card
          overflow-hidden
          ${interactive ? 'cursor-pointer transition-shadow duration-DEFAULT hover:shadow-raised' : ''}
          ${className}
        `}
        {...props}
      >
        {coverImage}
        <div className={paddingStyles[padding]}>{children}</div>
      </div>
    );
  }
);

Card.displayName = 'Card';
