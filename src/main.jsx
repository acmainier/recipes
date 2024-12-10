import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./Root";
import ErrorPage from "./error-page";

import RecipePage, { loader as recipeLoader } from "./RecipePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/recipes/:recipeId",
        element: <RecipePage />,
        loader: recipeLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
