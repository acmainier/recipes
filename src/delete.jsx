import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import { useNavigate, useRevalidator } from "react-router";

export async function loader({ params }) {
  const response = await fetch(`http://localhost:3000/recipes/${params.id}`, {
    method: "GET",
  });
  const recipe = await response.json();
  return { recipe };
}

export default function DeleteRecipe() {
  const deletingRecipe = useLoaderData();
  let navigate = useNavigate();
  const revalidator = useRevalidator();

  async function deletion() {
    const response = await fetch(
      `http://localhost:3000/recipes/delete/${deletingRecipe.recipe.id}`,
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      }
    );
    if (response.ok) {
      window.confirm("All done!");
      revalidator.revalidate();
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
