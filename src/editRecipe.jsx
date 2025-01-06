import { useLoaderData, useRevalidator } from "react-router-dom";
import { getRecipe, editRecipe } from "./recipes-api";

export function loader({ params }) {
  const recipe = getRecipe(params.recipeId);
  return { recipe };
}

export default function EditRecipe() {
  const { recipe } = useLoaderData();
  const ingredientsList = recipe.ingredients;
  const stepsList = recipe.steps;
  const revalidator = useRevalidator();

  function _editRecipe(formData) {
    const editedName = formData.get("recipeName");
    const editedIngredients = formData.getAll("recipeIngredient");
    const editedSteps = formData.getAll("recipeStep");
    console.log(editedName, editedIngredients, editedSteps);

    editRecipe(recipe.index, editedName, editedIngredients, editedSteps);
    revalidator.revalidate();
  }

  return (
    <div key={recipe.index}>
      <form id="editRecipeForm" action={_editRecipe}>
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
        <button type="submit">Update it!</button>
      </form>
    </div>
  );
}
