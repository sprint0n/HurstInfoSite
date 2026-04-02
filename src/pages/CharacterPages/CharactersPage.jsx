import { useLoaderData } from "react-router-dom";
import CharacterList from "../../components/Characters/CharacterList";
import classes from "./CharactersPage.module.css";

const CharactersPage = () => {
  const characters = useLoaderData();

  return (
    <div className={classes.pageWrapper}>
      <h1 className={classes.heading}>Characters</h1>
      <CharacterList characters={characters} />
    </div>
  );
};

export default CharactersPage;

export async function characterLoader() {
  const response = await fetch(
    "https://hurstinfodatabase-default-rtdb.firebaseio.com/Characters.json",
  );
  const data = await response.json();
  if (response.ok) {
    return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
  }
}
