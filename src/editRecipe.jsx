import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoaderData } from "react-router-dom";
import { getRecipe, editRecipe } from "./recipes-api";

export function loader({ params }) {
  const recipe = getRecipe(params.recipeId);
  return { recipe };
}

export default function EditRecipe() {
  const { recipe } = useLoaderData();
  const ingredientsList = recipe.ingredients;
  const stepsList = recipe.steps;
  const [extraIngredients, setExtraIngredients] = useState([{ name: "" }]);
  const [extraSteps, setExtraSteps] = useState([{ name: "" }]);
  let navigate = useNavigate();

  const addIngredient = () => {
    let newIngredient = { name: "" };
    setExtraIngredients([...extraIngredients, newIngredient]);
  };
  const addStep = () => {
    let newStep = { name: "" };
    setExtraSteps([...extraSteps, newStep]);
  };

  function _editRecipe(formData) {
    const editedName = formData.get("recipeName");
    const editedIngredients = formData.getAll("recipeIngredient");
    const editedIngredientsComplete = editedIngredients
      .filter((ingredient) => ingredient.length >= 1)
      .map((ingredient, id) => ({
        id: id,
        name: ingredient,
      }));
    const editedSteps = formData.getAll("recipeStep");
    const editedStepsComplete = editedSteps
      .filter((step) => step.length >= 1)
      .map((step, id) => ({
        id: id,
        name: step,
      }));
    console.log(editedName, editedIngredientsComplete, editedStepsComplete);

    editRecipe(
      recipe.index,
      editedName,
      editedIngredientsComplete,
      editedStepsComplete
    );

    navigate(`/recipes/` + recipe.index);
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
        <div>
          Complete to add an ingredient:
          {extraIngredients.map((input, index) => {
            return (
              <div key={index}>
                <input
                  type="text"
                  name="recipeIngredient"
                  id="recipeIngredient"
                  defaultValue={input.name}
                />
              </div>
            );
          })}
          <button type="button" onClick={addIngredient}>
            Add another Ingredient
          </button>
        </div>
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
        <div>
          Complete to add a step:
          {extraSteps.map((input, index) => {
            return (
              <div key={index}>
                <input
                  type="text"
                  name="recipeStep"
                  id="recipeStep"
                  defaultValue={input.name}
                />
              </div>
            );
          })}
          <button type="button" onClick={addStep}>
            Add another Step
          </button>
        </div>
        <div className="submit-container">
          <button type="submit">Update it!</button>
        </div>
      </form>
    </div>
  );
}
