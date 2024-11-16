import React from "react";
import "./recipe.css";
import Ingredients from "./ingredients";
import Method from "./method";

export default function Recipe({ title, ingredients, steps }) {
  return (
    <div>
      <h1>{title}</h1>
      <Ingredients ingredients={ingredients} />
      <Method steps={steps} />
    </div>
  );
}
