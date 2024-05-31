import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import OrganizerPage from "./pages/OrganizerPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MusicPage from "./pages/MusicPage";
import StandupPage from "./pages/StandupPage";
import WorkshopPage from "./pages/WorkshopPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TicketForm from "./components/TicketForm";
import EventForm from "./components/EventForm";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  // {
  //   path: "djparty",
  //   element: <DJPage/>,
  // },

  {
    path: "music",
    element: <MusicPage />,
  },

  {
    path: "standup",
    element: <StandupPage />,
  },

  {
    path: "workshop",
    element: <WorkshopPage />,
  },

  {
    path: "login",
    element: <LoginPage />,
  },

  {
    path: "register",
    element: <RegisterPage />,
  },

  {
    path: "organizer",
    element: <OrganizerPage />,
  },

  {
    path: "event",
    element: <EventForm />,
  },

  {
    path: "ticket",
    element: <TicketForm />,
  },
]);

axios.defaults.baseURL = "http://localhost:8080/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
