import { useLoaderData } from "react-router-dom";
import ExtraList from "../../components/Extra/ExtraList";
import classes from "./ExtrasPage.module.css";

const ExtrasPage = () => {
  const extras = useLoaderData();
  return (
    <div className={classes.pageWrapper}>
      <h1 className={classes.heading}>Extras</h1>
      <ExtraList extras={extras} />
    </div>
  );
};
export default ExtrasPage;

export async function extrasLoader() {
  const response = await fetch(
    "https://hurstinfodatabase-default-rtdb.firebaseio.com/Extras.json",
  );
  const data = await response.json();
  const Extras = [];
  for (const key in data) {
    Extras.push({ id: key, ...data[key] });
  }
  if (response.ok) {
    return Extras;
  }
}
