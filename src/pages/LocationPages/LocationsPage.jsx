import { useLoaderData } from "react-router-dom";
import LocationList from "../../components/Locations/LocationList";
import classes from "./LocationsPage.module.css";

const LocationsPage = () => {
  const locations = useLoaderData();
  return (
    <div className={classes.pageWrapper}>
      <h1 className={classes.heading}>Locations</h1>
      <LocationList locations={locations} />
    </div>
  );
};
export default LocationsPage;

export async function locationsLoader() {
  const response = await fetch(
    "https://hurstinfodatabase-default-rtdb.firebaseio.com/Locations.json",
  );
  const data = await response.json();
  const locations = [];
  for (const key in data) {
    locations.push({ id: key, ...data[key] });
  }
  if (response.ok) {
    return locations;
  }
}
