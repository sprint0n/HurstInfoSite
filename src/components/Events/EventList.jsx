import { Link } from "react-router-dom";
import classes from "./EventList.module.css";
const EventList = ({ events = [] }) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <li key={event.id} className={classes.card}>
          <Link to={event.id}>{event.ID.replace("sprinton.hurst.", "")}</Link>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
