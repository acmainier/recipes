import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import { useNavigate } from "react-router";
import { getRecipe, deleteRecipeApi } from "./recipes-api";

export function loader({ params }) {
  const recipe = getRecipe(params.recipeId);
  return { recipe };
}

export default function DeleteRecipe() {
  const { recipe } = useLoaderData();
  let navigate = useNavigate();
  const deletionConfirmation = () => {
    window.confirm("Are you sure?") && deleteRecipeApi(recipe.index);
    navigate(`/recipes/defaultPage`);
  };

  return (
    <div>
      <button onClick={deletionConfirmation}>
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
