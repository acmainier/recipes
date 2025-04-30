import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root, { loader as rootLoader, action as rootAction } from "./Root";
import ErrorPage from "./error-page";
import DefaultPage from "./default";
import RecipePage, { loader as recipeLoader } from "./RecipePage";
import NewRecipe, { addRecipeAction } from "./new";
import EditRecipe, { loader as editRecipeLoader } from "./update";
import DeleteRecipe, { loader as deleteRecipeLoader } from "./delete";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/recipes/defaultPage",
        element: <DefaultPage />,
      },
      {
        path: "/recipes/:id",
        loader: recipeLoader,
        element: <RecipePage />,
      },
      {
        path: "/recipes/new",
        element: <NewRecipe />,
        action: async ({ request }) => {
          const formData = await request.formData();
          return addRecipeAction(formData);
        },
      },
      {
        path: "/recipes/update/:id",
        loader: editRecipeLoader,
        element: <EditRecipe />,
      },
      {
        path: "recipes/delete/:id",
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
