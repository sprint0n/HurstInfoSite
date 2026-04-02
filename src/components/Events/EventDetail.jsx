import { Link } from "react-router-dom";
import classes from "./EventDetail.module.css";

const EventDetail = ({ details }) => {
  return (
    <div className={classes.container}>
      <div className={classes.parchment}>
        <span className={classes.eventId}>
          Event Id: {details.ID.replace("sprinton.hurst.", "")}
        </span>
        <h2 className={classes.title}>Event</h2>

        <div className={classes.meta}>
          <p>
            <strong>Location:</strong> {details.Location}
          </p>
          <p>
            <strong>Involved:</strong> {details.Characters}
          </p>
        </div>

        <div className={classes.content}>
          <h4>Prerequisites</h4>
          <p>{details.Requirements}</p>

          <h4>The Event</h4>
          <p className={classes.description}>{details.Description}</p>

          <h4>Aftermath</h4>
          <p>{details.AfterEffects}</p>
        </div>

        <Link to="/Events" className={classes.backLink}>
          Back to Events
        </Link>
      </div>
    </div>
  );
};
export default EventDetail;
