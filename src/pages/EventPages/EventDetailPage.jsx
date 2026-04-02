import { useLoaderData } from "react-router-dom";
import EventDetail from "../../components/Events/EventDetail";
const EventDetailPage = () => {
  const details = useLoaderData();
  return <EventDetail details={details} />;
};

export default EventDetailPage;

export async function eventDetailLoader({ params }) {
  const id = params.eventId;

  const response = await fetch(
    `https://hurstinfodatabase-default-rtdb.firebaseio.com/Events/${id}.json`,
  );

  if (response.ok) {
    return response;
  }
}
