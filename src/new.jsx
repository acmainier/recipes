import { useState } from "react";
import { useNavigate } from "react-router";

export default function NewRecipe() {
  const [inputIngredients, setInputIngredients] = useState([{ name: "" }]);
  const [inputSteps, setInputSteps] = useState([{ name: "" }]);

  let navigate = useNavigate();

  async function addRecipe(formData) {
    const formName = formData.get("recipeName");
    const formIngredients = formData.getAll("recipeIngredient");
    const formIngredientsComplete = formIngredients
      .filter((ingredient) => ingredient.length >= 1)
      .map((ingredient) => ({
        name: ingredient,
      }));
    const formSteps = formData.getAll("recipeStep");
    const formStepsComplete = formSteps
      .filter((step) => step.length >= 1)
      .map((step) => ({
        name: step,
      }));

    const response = await fetch("http://localhost:3000/recipes/new", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: formName,
        ingredients: formIngredientsComplete,
        steps: formStepsComplete,
      }),
    });
    if (response.ok) {
      const id = await response.json();
      navigate(`/recipes/` + id);
    } else {
      alert("Something went wrong");
    }
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
        <div>
          Complete to add an Ingredient:
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
          <button type="button" onClick={addIngredient}>
            Add another Ingredient
          </button>
        </div>
        <label htmlFor="recipeStep">Steps</label>
        <div>
          Complete to add a step:
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
          <button type="button" onClick={addStep}>
            Add another Step
          </button>
        </div>
        <div className="submit-container">
          <button type="submit">Save it!</button>
          <button type="button" onClick={cancelRecipe}>
            Start over
          </button>
        </div>
      </form>
    </div>
  );
}
