import { useLoaderData } from "react-router-dom";
import ExtraDetail from "../../components/Extra/ExtraDetail";
const ExtraDetailPage = () => {
  const details = useLoaderData();
  return <ExtraDetail details={details} />;
};

export default ExtraDetailPage;

export async function extraDetailLoader({ params }) {
  const id = params.extraId;

  const response = await fetch(
    `https://hurstinfodatabase-default-rtdb.firebaseio.com/Extras/${id}.json`,
  );

  if (response.ok) {
    return response;
  }
}
