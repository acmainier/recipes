import { useState } from "react";
import { useRevalidator } from "react-router-dom";
import { createRecipe } from "./recipes-api";

export default function NewRecipe() {
  const [inputIngredients, setInputIngredients] = useState([{ name: "" }]);
  const [inputSteps, setInputSteps] = useState([{ name: "" }]);
  const revalidator = useRevalidator();

  function addRecipe(formData) {
    const formName = formData.get("recipeName");
    const formIngredients = formData.getAll("recipeIngredient");
    const formIngredientsComplete = formIngredients
      .filter((ingredient) => ingredient.length >= 1)
      .map((ingredient, id) => ({
        id: (id + 1) * 100,
        name: ingredient,
      }));
    const formSteps = formData.getAll("recipeStep");
    const formStepsComplete = formSteps
      .filter((step) => step.length >= 1)
      .map((step, id) => ({
        id: (id + 1) * 100,
        name: step,
      }));

    console.log(formName, formIngredientsComplete, formStepsComplete);
    createRecipe(formName, formIngredientsComplete, formStepsComplete);
    revalidator.revalidate();
  }

  const addIngredient = () => {
    let newIngredient = { name: "" };
    setInputIngredients([...inputIngredients, newIngredient]);
  };

  const addStep = () => {
    let newStep = { name: "" };
    setInputSteps([...inputSteps, newStep]);
  };

  const cancelRecipe = () => {
    document.getElementById("newRecipeForm").reset();
    setInputIngredients([{ name: "" }]);
    setInputSteps([{ name: "" }]);
  };

  return (
    <div>
      <form id="newRecipeForm" action={addRecipe}>
        <label htmlFor="recipeName">Recipe name</label>
        <input type="text" name="recipeName" id="recipeName" /> <br />
        <label htmlFor="recipeIngredient">Ingredients</label>
        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>
        {inputIngredients.map((input, index) => {
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
        <label htmlFor="recipeStep">Steps</label>
        <button type="button" onClick={addStep}>
          Add Step
        </button>
        {inputSteps.map((input, index) => {
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
        <p>
          <button type="submit">Save it!</button>
          <button type="button" onClick={cancelRecipe}>
            Start over
          </button>
        </p>
      </form>
    </div>
  );
}
