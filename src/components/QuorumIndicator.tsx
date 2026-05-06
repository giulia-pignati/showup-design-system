/**
 * QuorumIndicator
 *
 * The signature component of the ShowUp design system. Visualises the
 * core mechanic of the product: progress toward minimum-quorum confirmation.
 *
 * Three states:
 * - building:  Some confirmations, but quorum not yet reached.
 *              Bar fills with ink-secondary (neutral grey).
 *
 * - reached:   Minimum quorum hit. THIS is the moment the accent color
 *              earns its place — the bar fills with accent (#D1F471) and
 *              the text reads "Confirmed". This should feel like a small
 *              celebration without being loud.
 *
 * - failed:    Event window closed without reaching quorum.
 *              Bar shows danger-soft fill, text reads "Did not reach quorum".
 *
 * Visual: a thin progress bar (4px height) with the count beneath it.
 * Type for the count uses mono — gives the numbers a quiet, factual feel.
 */

interface QuorumIndicatorProps {
  current: number;
  minimum: number;
  status?: 'building' | 'reached' | 'failed';
  className?: string;
}

export function QuorumIndicator({
  current,
  minimum,
  status,
  className = '',
}: QuorumIndicatorProps) {
  // Auto-derive status if not explicitly passed.
  const resolvedStatus =
    status ?? (current >= minimum ? 'reached' : 'building');

  const percentage = Math.min((current / minimum) * 100, 100);

  const fillColor = {
    building: 'bg-ink-secondary',
    reached:  'bg-accent',
    failed:   'bg-danger',
  }[resolvedStatus];

  const label = {
    building: `${minimum - current} more needed`,
    reached:  'Confirmed · happening',
    failed:   'Did not reach quorum',
  }[resolvedStatus];

  const labelColor = {
    building: 'text-ink-tertiary',
    reached:  'text-ink',
    failed:   'text-danger',
  }[resolvedStatus];

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="h-1 w-full bg-surface-sunken rounded-full overflow-hidden">
        <div
          className={`h-full ${fillColor} transition-all duration-slow rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex items-center justify-between text-caption">
        <span className="font-mono text-ink-secondary">
          {current} / {minimum}
        </span>
        <span className={`font-medium ${labelColor}`}>{label}</span>
      </div>
    </div>
  );
}
