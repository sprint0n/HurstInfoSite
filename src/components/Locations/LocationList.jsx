import { Link } from "react-router-dom";
import classes from "./LocationList.module.css";
const LocationList = ({ locations = [] }) => {
  return (
    <ul className={classes.list}>
      {locations.map((location) => (
        <li key={location.id} className={classes.card}>
          <Link to={location.id}>{location.Name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LocationList;
