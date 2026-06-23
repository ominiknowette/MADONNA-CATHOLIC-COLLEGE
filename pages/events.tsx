import StudentLayout from "../src/component/Product/StudentLayout";
import EventCard from "../src/component/Product/EventCard";
import { portalEvents } from "../src/lib/data";

export default function EventsPage() {
  return (
    <StudentLayout active="Events">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {portalEvents.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </StudentLayout>
  );
}