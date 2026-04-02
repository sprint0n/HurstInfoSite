import { Link } from "react-router-dom";
import classes from "./ExtraList.module.css";
const ExtraList = ({ extras = [] }) => {
  return (
    <ul className={classes.list}>
      {extras.map((extra) => (
        <li key={extra.id} className={classes.card}>
          <Link to={extra.id}>{extra.Name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ExtraList;
