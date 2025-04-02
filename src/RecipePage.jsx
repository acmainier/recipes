import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

//export function loader({ params }) {
//  const recipe = getRecipe(params.id);
//  return { recipe };
//}

export async function loader({ params }) {
  const response = await fetch(`http://localhost:3000/recipes/${params.id}`, {
    method: "GET",
  });
  const recipe = await response.json();
  return { recipe };
}

export default function RecipePage() {
  const { recipe } = useLoaderData();
  return (
    <Recipe
      name={recipe.name}
      ingredients={recipe.ingredients}
      steps={recipe.steps}
    />
  );
}
