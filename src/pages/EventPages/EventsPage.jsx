import { useLoaderData } from "react-router-dom";
import EventList from "../../components/Events/EventList";
import classes from "./EventsPage.module.css";

const EventsPage = () => {
  const events = useLoaderData();
  return (
    <div className={classes.pageWrapper}>
      <h1 className={classes.heading}>Events</h1>
      <EventList events={events} />
    </div>
  );
};
export default EventsPage;

export async function eventsLoader() {
  const response = await fetch(
    "https://hurstinfodatabase-default-rtdb.firebaseio.com/Events.json",
  );
  const data = await response.json();
  const events = [];
  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }
  if (response.ok) {
    return events;
  }
}
