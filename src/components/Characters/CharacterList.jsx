import { Link } from "react-router-dom";
import classes from "./CharacterList.module.css";

const CharacterList = ({ characters }) => {
  return (
    <ul className={classes.list}>
      {characters.map((char) => (
        <li key={char.id} className={classes.card}>
          <Link key={char.id} to={`${char.id}`}>
            {char.id}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
