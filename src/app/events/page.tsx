import { PageHeader } from "@/components/page-header";
import EventList from "@/components/events/event-list";
import { events } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events"
        description="From competitive hackathons to insightful seminars, explore the events that define the TechAthon experience."
      />
      <AnimatedSection className="container pb-16 md:pb-24">
        <EventList events={events} />
      </AnimatedSection>
    </>
  );
}
