import { useLoaderData } from "react-router-dom";
import ItemList from "../../components/Items/ItemList";
const ItemsPage = () => {
  const items = useLoaderData();
  return (
    <section>
      <h1>Items:</h1>
      <ItemList items={items} />
    </section>
  );
};

export default ItemsPage;

export async function itemsLoader() {
  const response = await fetch(
    "https://hurstinfodatabase-default-rtdb.firebaseio.com/Items.json",
  );
  const data = await response.json();

  const items = [];
  for (const key in data) {
    items.push({ id: key, ...data[key] });
  }
  if (response.ok) {
    return items;
  }
}
