import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";
import App from "./App";
import Mountains from "./pages/Mountains";
// import MountainsForms from "./pages/MountainsForms";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Mountains />,
        loader: async () => {
          const mountains = await connexion.get(
            `${import.meta.env.VITE_API_URL}/api/mountains`
          );
          return mountains.data;
        },
      },
      /** One Piece of Puzzle, don't forget to uncomment line 9 */
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
