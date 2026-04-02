import { useLoaderData } from "react-router-dom";
import ItemDetail from "../../components/Items/ItemDetail";
const ItemDetailPage = () => {
  const details = useLoaderData();
  return <ItemDetail details={details} />;
};

export default ItemDetailPage;

export async function itemDetailLoader({ params }) {
  const id = params.itemId;

  const response = await fetch(
    `https://hurstinfodatabase-default-rtdb.firebaseio.com/Items/${id}.json`,
  );

  if (response.ok) {
    return response;
  }
}
