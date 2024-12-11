import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import { getRecipe } from "./recipes-api";

export function loader({ params }) {
  const recipe = getRecipe(params.recipeId);
  return { recipe };
}

export default function RecipePage() {
  const { recipe } = useLoaderData();
  return (
    <Recipe
      title={recipe.title}
      ingredients={recipe.ingredients}
      steps={recipe.steps}
    />
  );
}
