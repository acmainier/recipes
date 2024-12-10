import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import data from "./recipes.json";

export function loader({ params }) {
  const recipe = data[params.recipeId];
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
