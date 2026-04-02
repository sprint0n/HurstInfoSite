import { Link } from "react-router-dom";
import Mistgrove from "../../assets/Mistgrove Outskirts.png";
import HurstsClearing from "../../assets/Hurst's Clearing.png";
import classes from "./LocationDetail.module.css";

const LocationDetail = ({ details }) => {
  const images = {
    "Mistgrove Outskirts": Mistgrove,
    "Hurst's Clearing": HurstsClearing,
  };

  return (
    <div className={classes.container}>
      <div className={classes.mapWrapper}>
        <img
          src={images[details.Name]}
          alt="Area Map"
          className={classes.mapImage}
        />
        <div className={classes.overlay}>
          <h1>{details.Name}</h1>
        </div>
      </div>

      <div className={classes.contentGrid}>
        <div className={classes.textSection}>
          <section className={classes.infoBlock}>
            <h4>Discovery & Access</h4>
            <p>{details.Access}</p>
          </section>

          <section className={classes.infoBlock}>
            <h4>Area Description</h4>
            <p>{details.Description}</p>
          </section>

          <Link to="/Locations" className={classes.backBtn}>
            Return to Map Index
          </Link>
        </div>

        <div className={classes.imageSection}>
          <div className={classes.imageCard}>
            <h5>Area Preview</h5>
            <img
              src={images[details.Name]}
              alt={`${details.Name} full view`}
              className={classes.sideImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
