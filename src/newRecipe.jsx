import { createRecipe } from "./recipes-api";

export default function NewRecipe() {
  function display(formData) {
    const formName = formData.get("recipeName");
    const formIngredients = formData.getAll("recipeIngredient");

    const formIngredientsComplete = formIngredients.map((ingredient, id) => ({
      id: (id + 1) * 100,
      name: ingredient,
    }));

    const formSteps = formData.getAll("recipeStep");

    const formStepsComplete = formSteps.map((step, id) => ({
id: (id +1) * 100,
name: step,
    }));

    console.log(formName, formIngredientsComplete, formStepsComplete);
    createRecipe(formName, formIngredientsComplete, formStepsComplete);
  }

  return (
    <div>
      <form action={display}>
        <label htmlFor="recipeName">Recipe name</label>
        <input type="text" name="recipeName" id="recipeName" /> <br />
        <label htmlFor="recipeIngredient">Ingredients</label>
        <input type="text" name="recipeIngredient" id="recipeIngredient" />
        <br />
        <button type="button">Add Ingredient</button>
        <label htmlFor="recipeStep">Steps</label>
        <input type="text" name="recipeStep" id="recipeStep" />
        <p>
          <button type="submit">Save it!</button>
          <button type="button">start over</button>
        </p>
      </form>
    </div>
  );
}
