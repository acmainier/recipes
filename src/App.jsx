import { useState } from "react";
import Recipe from "./Recipe";
import Nav from "./Nav";
import data from "./recipes.json";


export default function App() {
  const [recipeId, setRecipeId] = useState(0);
  console.log({ recipeId });
  const recipe = data[recipeId];
  const {title, ingredients, steps } = recipe;

  return (
    <div>
      <Nav data={data} onRecipeIdChange={(id) => setRecipeId(id)} />
      <Recipe title={title} ingredients={ingredients} steps={steps} />
    </div>
  );
}
