import WatcherFile from "../assets/TheWatcherInherits.pdf";
import DemonFile from "../assets/HurstSylvaDemonAttack.pdf";
import classes from "./ShortStoriesPage.module.css";
const ShortStoriesPage = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.storyRow}>
          <h4>The Watcher Inherits</h4>
          <a
            href={WatcherFile}
            className={classes.downloadLink}
            target="_blank"
          >
            Read the Story!
          </a>
        </div>
        <div className={classes.storyRow}>
          <h4>A Brush with Demons</h4>
          <a href={DemonFile} className={classes.downloadLink} target="_blank">
            Read the Story!
          </a>
        </div>
      </div>
    </>
  );
};

export default ShortStoriesPage;
