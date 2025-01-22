import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root, { loader as rootLoader, action as rootAction } from "./Root";
import ErrorPage from "./error-page";
import DefaultPage from "./default";
import RecipePage, { loader as recipeLoader } from "./RecipePage";
import NewRecipe from "./newRecipe";
import EditRecipe, { loader as editRecipeLoader } from "./editRecipe";
import DeleteRecipe, { loader as deleteRecipeLoader } from "./deleteRecipe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <Root />,
    errorElement: <ErrorPage />,
    action: rootAction,
    children: [
      {
        path: "/recipes/defaultPage",
        element: <DefaultPage />,
      },
      {
        path: "/recipes/:recipeId",
        loader: recipeLoader,
        element: <RecipePage />,
      },
      {
        path: "/recipes/newRecipe",
        element: <NewRecipe />,
      },
      {
        path: "/recipes/editRecipe/:recipeId",
        loader: editRecipeLoader,
        element: <EditRecipe />,
      },
      {
        path: "recipes/deleteRecipe/:recipeId",
        loader: deleteRecipeLoader,
        element: <DeleteRecipe />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
