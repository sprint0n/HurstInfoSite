import { useLoaderData, useParams } from "react-router-dom";
import CharacterDetail from "../../components/Characters/CharacterDetail";
const CharacterDetailPage = () => {
  const params = useParams();
  const data = useLoaderData();
  const characterData = { ...data, id: params.characterName };
  return <CharacterDetail data={characterData} />;
};

export default CharacterDetailPage;

export async function characterDetailLoader({ request, params }) {
  const name = params.characterName;
  const response = await fetch(
    `https://hurstinfodatabase-default-rtdb.firebaseio.com/Characters/${name}.json`,
  );

  return response;
}
