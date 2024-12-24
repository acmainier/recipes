import { useLoaderData } from "react-router-dom";
import { getRecipe } from "./recipes-api";

export function loader({ params }) {
    const recipe = getRecipe(params.recipeId);
    return { recipe };
  }

export default function EditRecipe() {
    const { recipe } = useLoaderData();
    return (
        <div>
            Form to edit {recipe.title} here
        </div>
    );
}