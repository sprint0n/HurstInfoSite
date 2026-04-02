import { Link } from "react-router-dom";
import classes from "./ExtraDetail.module.css";

const ExtraDetail = ({ details }) => {
  return (
    <div className={classes.container}>
      <div className={classes.entryCard}>
        <header className={classes.header}>
          <h1>{details.Name}</h1>
        </header>

        <div className={classes.content}>
          <p className={classes.description}>{details.Description}</p>
        </div>

        <footer className={classes.footer}>
          <Link to="/Extras" className={classes.backBtn}>
            Return to Extras
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default ExtraDetail;
