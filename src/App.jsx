import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PhotoAlbum from "./components/PhotoAlbum";
import TicketBookingSystem from "./components/TicketBookingSystem";
import Dashboard from "./components/Dashboard";
import "./App.css";
import TrafficLight from "./components/TrafficLight";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
