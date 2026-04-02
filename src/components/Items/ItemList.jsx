import { Link } from "react-router-dom";
import classes from "./ItemList.module.css";
const ItemList = ({ items = [] }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <li key={item.id} className={classes.card}>
          <Link to={item.id}>{item.Name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
