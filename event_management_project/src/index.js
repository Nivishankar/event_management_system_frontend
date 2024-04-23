import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import DJPage from './pages/DJPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MusicPage from './pages/MusicPage';
import StandupPage from './pages/StandupPage';
import WorkshopPage from './pages/WorkshopPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "djparty",
    element: <DJPage/>,
  },

  {
    path: "music",
    element: <MusicPage/>,
  },

  {
    path: "standup",
    element: <StandupPage/>,
  },

  {
    path: "workshop",
    element: <WorkshopPage/>,
  },

  {
    path: "/login",
    element: <LoginPage/>,
  },

  {
    path: "register",
    element: <RegisterPage/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);


