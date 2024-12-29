import { useLoaderData } from "react-router-dom";
import { getRecipe } from "./recipes-api";

export function loader({ params }) {
  const recipe = getRecipe(params.recipeId);
  return { recipe };
}

export default function EditRecipe() {
  const { recipe } = useLoaderData();
  const ingredientsList = recipe.ingredients;
  const stepsList = recipe.steps;
  return (
    <div key={recipe.index}>
      <form id="editRecipeForm">
        <label htmlFor="recipeName">Recipe name</label>
        <input
          type="text"
          name="recipeName"
          id="recipeName"
          defaultValue={recipe.title}
        />
        <br />
        <label htmlFor="recipeIngredient">Ingredients</label>
        {ingredientsList.map((ingredient) => {
          return (
            <div key={ingredient.id}>
              <input
                type="text"
                name="recipeIngredient"
                id="recipeIngredient"
                defaultValue={ingredient.name}
              />
            </div>
          );
        })}
        <label htmlFor="recipeStep">Steps</label>
        {stepsList.map((step) => {
          return (
            <div key={step.id}>
              <input
                type="text"
                name="recipeStep"
                id="recipeStep"
                defaultValue={step.name}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}
