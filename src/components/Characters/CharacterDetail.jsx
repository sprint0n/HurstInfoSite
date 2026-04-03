import { Link } from "react-router-dom";
import classes from "./CharacterDetail.module.css";
import Shopkeepers from "../../assets/Shopkeepers.png";
import HurstIcon from "../../assets/HurstIcon.png";
import WardIcon from "../../assets/WardIcon.png";
import SylvaIcon from "../../assets/SylvaIcon.png";
import HurstPortraits from "../../assets/HurstPortraits.png";
import WardPortraits from "../../assets/WardPortraits.png";
import SylvaPortraits from "../../assets/SylvaPortraits.png";
import HurstWalkCycle from "../../assets/HurstWalkCycle.gif";
import WardWalkCycle from "../../assets/WardWalkCycle.gif";
import SylvaWalkCycle from "../../assets/SylvaWalkCycle.gif";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CharacterDetail = ({ data }) => {
  const charactersWithImages = ["Hurst", "Ward", "Sylva"];

  const characterIcons = {
    Hurst: HurstIcon,
    Sylva: SylvaIcon,
    Ward: WardIcon,
  };
  const characterPortraits = {
    Hurst: HurstPortraits,
    Sylva: SylvaPortraits,
    Ward: WardPortraits,
  };
  const characterWalkCycle = {
    Hurst: HurstWalkCycle,
    Sylva: SylvaWalkCycle,
    Ward: WardWalkCycle,
  };

  const relationships = data.Relationships
    ? Object.entries(data.Relationships)
    : [];

  const hasSchedule = DAYS.some((day) => data[day]);

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>{data.id}</h1>
        <Link to="/Characters" className={classes.backLink}>
          ← Back to Characters
        </Link>
      </header>

      <div className={classes.contentGrid}>
        <div className={classes.textSection}>
          <section className={classes.detailBlock}>
            <h4>Appearance</h4>
            <p>
              <strong>Physical:</strong> {data.Physical}
            </p>
            <p>
              <strong>Clothing:</strong> {data.Clothing}
            </p>
          </section>

          <section className={classes.detailBlock}>
            <h4>Lifestyle</h4>
            <p>
              <strong>Hobbies:</strong> {data.Hobbies}
            </p>
            <p>
              <strong>Likes:</strong> {data.Likes}
            </p>
            <p>
              <strong>Dislikes:</strong> {data.Dislikes}
            </p>
          </section>

          {relationships.length > 0 && (
            <section className={classes.detailBlock}>
              <h4>Relationships</h4>
              <ul className={classes.relationshipList}>
                {relationships.map(([name, relation]) => (
                  <li key={name}>
                    <strong>{name}:</strong> {relation.replace(/^"|"$/g, "")}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {hasSchedule && (
            <section className={classes.detailBlock}>
              <h4>Schedule</h4>
              <ul className={classes.scheduleList}>
                {DAYS.map((day) =>
                  data[day] ? (
                    <li key={day}>
                      <strong>{day}</strong>
                      <span>{data[day]}</span>
                    </li>
                  ) : null,
                )}
              </ul>
            </section>
          )}
        </div>

        <div className={classes.imageSection}>
          {charactersWithImages.includes(data.id) ? (
            <>
              <h3>Gallery</h3>
              <div className={classes.imageWrapper}>
                <label>Default Portrait</label>
                <img
                  src={characterIcons[data.id]}
                  alt={`${data.id} icon`}
                  className={classes.iconImg}
                />
              </div>
              <div className={classes.imageWrapper}>
                <label>Portraits</label>
                <img
                  src={characterPortraits[data.id]}
                  alt={`${data.id} portrait`}
                  className={classes.portraitImg}
                />
              </div>
              <div className={classes.imageWrapper}>
                <label>Walk Cycle</label>
                <img
                  src={characterWalkCycle[data.id]}
                  alt={`${data.id} walk cycle`}
                  className={classes.walkImg}
                />
              </div>
            </>
          ) : (
            <div className={classes.shopkeeperNote}>
              <p>{data.id} has become a part of the Shopkeepers.</p>
              <img
                src={Shopkeepers}
                alt="The collective shopkeepers"
                className={classes.portraitImg}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
