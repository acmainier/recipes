import React from "react";
import "./recipe.css";
import Ingredients from "./ingredients";
import Method from "./method";

export default function Recipe({ title, ingredients, steps }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <div>
          <Ingredients ingredients={ingredients} />
        </div>
        <div>
          <Method steps={steps} />
        </div>
      </div>
    </div>
  );
}
