import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import { getRecipe, deleteRecipeApi } from "./recipes-api";

export function loader({ params }) {
  const recipe = getRecipe(params.recipeId);
  return { recipe };
}

export default function DeleteRecipe() {
  const { recipe } = useLoaderData();

  return (
    <div>
      <button
        onClick={() => {
          window.confirm("Are you sure?") && deleteRecipeApi(recipe.index);
        }}
      >
        You want to delete this recipe?
      </button>
      <Recipe
        title={recipe.title}
        ingredients={recipe.ingredients}
        steps={recipe.steps}
      />
    </div>
  );
}
