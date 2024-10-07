import React from "react";
import ReactDOM from "react-dom/client";
import BrokerCatalog from "./pages/broker_catalog";
import Searcher from "./pages/zip_code_searcher";
import Home from "./pages/home";
import ErrorPage from "./pages/error";
import LanginPage from "./pages/langin_page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LanginPage />,
      },
      {
        path: "/brokercatalog",
        element: <BrokerCatalog />,
      },
      {
        path: "/zipcodesearcher",
        element: <Searcher />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
