import { Link, useLoaderData } from "react-router-dom";
import classes from "./TopicsPage.module.css";

const TopicsPage = () => {
  const topics = useLoaderData();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Mistgrove Lore</h1>
      <p className={classes.subtitle}>Select a Topic</p>
      <ul className={classes.list}>
        {topics
          .filter((topic) => topic.id !== "feedback")
          .map((topic) => (
            <li key={topic.id} className={classes.card}>
              <Link to={`/${topic.id}`}>{topic.id}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TopicsPage;
export async function topicsLoader() {
  const response = await fetch(
    "https://hurstinfodatabase-default-rtdb.firebaseio.com/.json",
  );
  const data = await response.json();
  if (response.ok) {
    return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
  }
}
