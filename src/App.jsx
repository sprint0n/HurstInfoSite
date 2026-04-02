import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import TopicsPage, { topicsLoader } from "./pages/TopicsPage";
import CharactersPage, {
  characterLoader,
} from "./pages/CharacterPages/CharactersPage";
import ExtrasPage, { extrasLoader } from "./pages/ExtraPages/ExtrasPage";
import ExtraDetailPage, {
  extraDetailLoader,
} from "./pages/ExtraPages/ExtraDetailPage";
import ItemsPage, { itemsLoader } from "./pages/ItemPages/ItemsPage";
import ItemDetailPage, {
  itemDetailLoader,
} from "./pages/ItemPages/ItemDetailPage";
import LocationsPage, {
  locationsLoader,
} from "./pages/LocationPages/LocationsPage";
import LocationDetailPage, {
  locationDetailLoader,
} from "./pages/LocationPages/LocationDetailPage";
import FeedbackFormPage from "./pages/FeedbackFormPage";
import MistgroveHistoryPage from "./pages/MistgroveHistoryPage";
import EventsPage, { eventsLoader } from "./pages/EventPages/EventsPage";
import EventDetailPage, {
  eventDetailLoader,
} from "./pages/EventPages/EventDetailPage";
import CharacterDetailPage, {
  characterDetailLoader,
} from "./pages/CharacterPages/CharacterDetailPage";
import { feedbackFormPosted } from "./components/FeedbackForm";
import ShortStoriesPage from "./pages/ShortStoriesPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <TopicsPage />, loader: topicsLoader },
      {
        path: "Characters",
        children: [
          { index: true, element: <CharactersPage />, loader: characterLoader },
          {
            path: ":characterName",
            element: <CharacterDetailPage />,
            loader: characterDetailLoader,
          },
        ],
      },
      {
        path: "Events",
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ":eventId",
            element: <EventDetailPage />,
            loader: eventDetailLoader,
          },
        ],
      },
      {
        path: "Extras",
        children: [
          { index: true, element: <ExtrasPage />, loader: extrasLoader },
          {
            path: ":extraId",
            element: <ExtraDetailPage />,
            loader: extraDetailLoader,
          },
        ],
      },
      {
        path: "Items",
        children: [
          { index: true, element: <ItemsPage />, loader: itemsLoader },
          {
            path: ":itemId",
            element: <ItemDetailPage />,
            loader: itemDetailLoader,
          },
        ],
      },
      {
        path: "Locations",
        children: [
          { index: true, element: <LocationsPage />, loader: locationsLoader },
          {
            path: ":locationId",
            element: <LocationDetailPage />,
            loader: locationDetailLoader,
          },
        ],
      },
      {
        path: "Feedback",
        element: <FeedbackFormPage />,
        loader: topicsLoader,
        action: feedbackFormPosted,
      },
      {
        path: "History",
        element: <MistgroveHistoryPage />,
      },
      {
        path: "Stories",
        element: <ShortStoriesPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
