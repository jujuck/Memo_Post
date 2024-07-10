import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";
import App from "./App";
import Mountains from "./pages/Mountains";

const router = createBrowserRouter([
  /** One Piece of Puzzle, don't forget to uncomment line 6,7,8  */
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
