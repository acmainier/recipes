import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root, { loader as rootLoader } from "./Root";
import ErrorPage from "./error-page";

import RecipePage, { loader as recipeLoader } from "./RecipePage";
import NewRecipe from "./newRecipe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/recipes/:recipeId",
        loader: recipeLoader,
        element: <RecipePage />,
      },
      {
        path: "/recipes/newRecipe",
        element: <NewRecipe />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
