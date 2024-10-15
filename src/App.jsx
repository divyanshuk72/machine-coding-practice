import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PhotoAlbum from "./components/PhotoAlbum";
import TicketBookingSystem from "./components/TicketBookingSystem";
import Dashboard from "./components/Dashboard";
import "./App.css";
import TrafficLight from "./components/TrafficLight";
import Accordion from "./components/Accordion";
import RandomColorGenerator from "./components/RandomColorGenerator";
import Filter from "./components/Filter";
import Ratings from "./components/Ratings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/photo-album",
    element: <PhotoAlbum />,
  },
  {
    path: "/ticket-booking",
    element: <TicketBookingSystem />,
  },
  {
    path: "/traffic-light",
    element: <TrafficLight />,
  },
  {
    path: "/accordion",
    element: <Accordion />,
  },
  {
    path: "/random-color-generator",
    element: <RandomColorGenerator />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/ratings",
    element: <Ratings />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
