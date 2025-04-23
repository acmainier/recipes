import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import { useNavigate } from "react-router";
//import { getRecipe, deleteRecipeApi } from "./recipes-api";

//export function loader({ params }) {
//  const recipe = getRecipe(params.id);
//  return { recipe };
//}

export async function loader({ params }) {
  const response = await fetch(`http://localhost:3000/recipes/${params.id}`, {
    method: "GET",
  });
  const recipe = await response.json();
  console.log(recipe);
  return { recipe };
}

//export default function DeleteRecipe() {
//  const { recipe } = useLoaderData();
//  let navigate = useNavigate();
//  const deletionConfirmation = () => {
//    window.confirm("Are you sure?") && deleteRecipeApi(recipe.id);
//    navigate(`/recipes/defaultPage`);
//  };

export default function DeleteRecipe() {
  const deletingRecipe = useLoaderData();
  console.log(deletingRecipe.recipe.id);
  let navigate = useNavigate();

  async function deletion() {
    const response = await fetch(
      `http://localhost:3000/recipes/delete/${deletingRecipe.recipe.id}`,
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      }
    );
    await response.json();
    if (response.ok) {
      window.confirm("All done!");
      navigate(`/recipes/defaultPage`);
    } else {
      alert("Something went wrong here");
    }
  }

  return (
    <div>
      <button onClick={deletion}>You want to delete this recipe?</button>
      <Recipe
        title={deletingRecipe.recipe.name}
        ingredients={deletingRecipe.recipe.ingredients}
        steps={deletingRecipe.recipe.steps}
      />
    </div>
  );
}
