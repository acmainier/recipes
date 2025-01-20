import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import { getRecipe, deleteRecipeApi } from "./recipes-api";

export function loader({ params }) {
  const recipe = getRecipe(params.recipeId);
  return { recipe };
}

export default function DeleteRecipe() {
  const { recipe } = useLoaderData();
deleteRecipeApi(recipe.index);

  return (
    <Recipe
      title={recipe.title}
      ingredients={recipe.ingredients}
      steps={recipe.steps}
    />
  );
}
