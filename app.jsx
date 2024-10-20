import React from "react";
import Recipe from "./Recipe";
import data from "./recipes.json";

export default function App() {
  const { title, ingredients, steps } = data[0];
  console.log(title, ingredients, steps)
  return <Recipe title={title} ingredients={ingredients} steps={steps} />;
}
