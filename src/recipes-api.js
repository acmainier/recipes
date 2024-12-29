import data from "./recipes.json";

export function getAllRecipes() {
  return data;
}

export function getRecipe(id) {
  return data[id];
}

export function createRecipe(title, ingredients, steps) {
  let maxIndex = -1;
  data.forEach((recipe) => {
    if (recipe.index > maxIndex) {
      maxIndex = recipe.index;
    }
  });

  const newRecipe = {
    index: maxIndex + 1,
    title,
    ingredients,
    steps,
  };

  data.push(newRecipe);

  return newRecipe.index;
}

export function editRecipe(id, title, ingredients, steps) {
data.forEach((recipe) => {
  if (recipe.index === id) {
recipe.title = title,
recipe.ingredients = ingredients,
recipe.steps = steps;
  }
});
}