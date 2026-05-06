import { ImgHTMLAttributes } from 'react';

/**
 * EventImage
 *
 * Cover photo of the event location, optionally added by the event creator.
 * Sits at the TOP of the EventCard, above the tag row — the standard
 * "cover image" position used by feed-driven apps like Airbnb, Eventbrite,
 * and Meetup. The photo introduces the event before any text does.
 *
 * Design decisions:
 *
 * - Aspect ratio is fixed at 21:9 (cinematic). Locations are landscapes —
 *   parks, courts, cafés, viewpoints. Cinematic framing reads as "establishing
 *   shot" and matches how outdoor and indoor venues are best photographed.
 *   It also keeps cards from being dominated by the image: the photo sets
 *   the scene, but the title and quorum status remain the focus.
 *
 * - The image extends to the EDGES of the card (no padding around it).
 *   We achieve this with negative margins (-mx and -mt) that pull the image
 *   into the card's padding. This is the "magazine cover" treatment, and it
 *   only works because the card has a parent (`overflow-hidden` on the Card
 *   ensures the image's rounded top corners stay clipped to the card shape).
 *
 * - Border radius: top corners match the card's radius-md (12px), bottom
 *   corners are square — the photo flows directly into the card content.
 *
 * - When no `src` is provided, the component renders nothing. Cards without
 *   photos compact gracefully — no grey placeholder. Empty boxes in an
 *   infinite feed read as broken, not minimal. This also gives photo events
 *   a natural visual advantage, fairly rewarding creators who invest effort
 *   in their event listing.
 *
 * - `loading="lazy"` because event feeds are long. `object-cover` so photos
 *   fill the frame regardless of original ratio.
 */

interface EventImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
}

export function EventImage({ src, alt, className = '', ...props }: EventImageProps) {
  // Render nothing when no photo — see file-level docstring for rationale.
  if (!src) return null;

  return (
    <div
      className={`
        relative w-full overflow-hidden
        bg-surface-sunken
        ${className}
      `}
      style={{ aspectRatio: '21 / 9' }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        {...props}
      />
    </div>
  );
}
