import React from "react";
import Recipe from "./Recipe";
import data from "./recipes.json";

export default function App() {
  const recipe = data[0];
  const { title, ingredients, steps } = recipe;
  console.log(title, ingredients, steps)
  return <Recipe title={title} ingredients={ingredients} steps={steps} />;
}
