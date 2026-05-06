import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Badge } from '@/components/Badge';
import { Heading } from '@/components/Heading';
import { QuorumIndicator } from '@/components/QuorumIndicator';
import { EventImage } from '@/components/EventImage';

/**
 * Example page · Discover feed
 *
 * Demonstrates how the components compose into real ShowUp UI. Canonical
 * reference for layout, spacing, and tone.
 *
 * Card composition order (top to bottom):
 *   1. Cover image  (optional, flush with card edges, 21:9 cinematic ratio)
 *   2. Tag row      (category + status badges)
 *   3. Title        (Heading h3)
 *   4. Metadata     (date · time · location)
 *   5. QuorumIndicator
 *
 * The accent color appears exactly twice on this page:
 *   1. The `confirmed` Badge on the first event card
 *   2. The progress bar on the QuorumIndicator that has reached quorum
 */

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* ─── Page header ─────────────────────────────────────────── */}
        <header className="mb-12">
          <Heading level="h1" className="mb-3">
            Discover events
          </Heading>
          <p className="text-lead text-ink-secondary">
            Activities happening near you this week. Confirm to help reach quorum.
          </p>
        </header>

        {/* ─── Search ──────────────────────────────────────────────── */}
        <div className="mb-10">
          <Input
            placeholder="Search activities, locations, or dates"
            aria-label="Search"
          />
        </div>

        {/* ─── Event feed ──────────────────────────────────────────── */}
        <section className="flex flex-col gap-4">

          {/* Event 1 — quorum reached, with cover photo */}
          <Card
            interactive
            coverImage={
              <EventImage
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200"
                alt="Lighthouse Park trail with Pacific Ocean view"
              />
            }
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="neutral">Hiking</Badge>
                <Badge variant="confirmed">Quorum reached</Badge>
              </div>

              <div>
                <Heading level="h3" className="mb-1">
                  Sunday morning at Lighthouse Park
                </Heading>
                <p className="text-small text-ink-tertiary">
                  Sunday · 9:00 AM · West Vancouver
                </p>
              </div>

              <QuorumIndicator current={6} minimum={4} />
            </div>
          </Card>

          {/* Event 2 — building, with cover photo */}
          <Card
            interactive
            coverImage={
              <EventImage
                src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200"
                alt="Tennis court at Stanley Park"
              />
            }
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="neutral">Tennis</Badge>
                <Badge variant="pending">Building quorum</Badge>
              </div>

              <div>
                <Heading level="h3" className="mb-1">
                  Doubles at Stanley Park courts
                </Heading>
                <p className="text-small text-ink-tertiary">
                  Saturday · 2:00 PM · Stanley Park
                </p>
              </div>

              <QuorumIndicator current={2} minimum={4} />
            </div>
          </Card>

          {/* Event 3 — building, NO cover photo (creator skipped it).
              The card stays clean and compact without a placeholder image. */}
          <Card interactive>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="neutral">Coffee</Badge>
                <Badge variant="pending">Building quorum</Badge>
              </div>

              <div>
                <Heading level="h3" className="mb-1">
                  Slow Saturday at Revolver
                </Heading>
                <p className="text-small text-ink-tertiary">
                  Saturday · 10:30 AM · Gastown
                </p>
              </div>

              <QuorumIndicator current={1} minimum={3} />
            </div>
          </Card>

        </section>

        {/* ─── Footer CTA ──────────────────────────────────────────── */}
        <div className="mt-16 flex items-center gap-3">
          <Button variant="primary">Create event</Button>
          <Button variant="ghost">View my events</Button>
        </div>
      </div>
    </main>
  );
}
