import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";
import App from "./App";
import Montains from "./pages/Montains";

const router = createBrowserRouter([
  /** One Piece of Puzzle, don't forget to uncomment line 6,7,8  */
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Montains />,
        loader: async () => {
          const montains = await connexion.get(
            `${import.meta.env.VITE_API_URL}/api/mountains`
          );
          return montains.data;
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
