import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PhotoAlbum from "./components/PhotoAlbum/PhotoAlbum";
import TicketBookingSystem from "./components/TicketBookingSystem/TicketBookingSystem";
import Dashboard from "./components/Dashboard/Dashboard";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import Accordion from "./components/Accordion/Accordion";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import Filter from "./components/Filter/Filter";
import Ratings from "./components/Ratings/Ratings";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMoreProducts from "./components/LoadMoreProducts/LoadMoreProducts";
import TreeView from "./components/TreeView/TreeView";
import QRCodeGenerator from "./components/QRCodeGenerator/QRCodeGenerator";
import Theme from "./components/Theme/Theme";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import Tabs from "./components/Tabs/Tabs";
import Modal from "./components/Modal/Modal";
import GithubProfileFinder from "./components/GithubProfileFinder/GithubProfileFinder";
import SearchSuggestions from "./components/SearchSuggestions/SearchSuggestions";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import ListTransfer from "./components/ListTransfer/ListTransfer";

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
  {
    path: "/image-slider",
    element: <ImageSlider />,
  },
  {
    path: "/products",
    element: <LoadMoreProducts />,
  },
  {
    path: "/tree-view",
    element: <TreeView />,
  },
  {
    path: "/qr-code",
    element: <QRCodeGenerator />,
  },
  {
    path: "/theme",
    element: <Theme />,
  },
  {
    path: "/scroll-indicator",
    element: <ScrollIndicator />,
  },
  {
    path: "/tabs",
    element: <Tabs />,
  },
  {
    path: "/modal",
    element: <Modal />,
  },
  {
    path: "/github-profile-finder",
    element: <GithubProfileFinder />,
  },
  {
    path: "/search-suggestions",
    element: <SearchSuggestions />,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />,
  },
  {
    path: "/list-transfer",
    element: <ListTransfer />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
