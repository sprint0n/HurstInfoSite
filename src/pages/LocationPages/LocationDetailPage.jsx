import { useLoaderData } from "react-router-dom";
import LocationDetail from "../../components/Locations/LocationDetail";
const LocationDetailPage = () => {
  const details = useLoaderData();
  return <LocationDetail details={details} />;
};

export default LocationDetailPage;

export async function locationDetailLoader({ params }) {
  const id = params.locationId;

  const response = await fetch(
    `https://hurstinfodatabase-default-rtdb.firebaseio.com/Locations/${id}.json`,
  );

  if (response.ok) {
    return response;
  }
}
