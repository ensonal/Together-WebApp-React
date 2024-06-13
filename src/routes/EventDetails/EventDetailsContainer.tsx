import { UserEvent } from "../../api/models/UserEvent";
import { EventInfoCard } from "./components/EventInfoCard";
import { EventImageCard } from "./components/EventImageCard";
import { GuestListCard } from "./components/GuestListCard";
import { EventDetailsCard } from "./components/EventDetailsCard";
import { EventMapViewCard } from "./components/EventMapViewCard";

export function EventDetailsContainer({ event }: { event: UserEvent }) {
  return (
    <div className="d-flex flex-column gap-3 mb-2">
      <div className="d-flex flex-row h-100 gap-3" style={{ width: "100%" }}>
        <EventImageCard event={event} />
        <EventInfoCard userEvent={event} />
      </div>
      <div
        className="d-flex flex-row h-100 w-100 gap-3"
        style={{ width: "100%" }}
      >
        <EventDetailsCard detail={event.description} />
      </div>
      <div
        className="d-flex flex-row h-100 w-100 gap-3"
      >
        <GuestListCard guests={event.guests} />
        <EventMapViewCard event={event} />
      </div>
    </div>
  );
}
