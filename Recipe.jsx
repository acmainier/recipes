import React from "react";
import "./recipe.css";

export default function Recipe({ title, ingredients, steps }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <div>
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((ingredient) => (
              //  ingredient  = { "id": 100, "name": "100g pancetta" },
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
          <h2>Method</h2>
          <div className="container my-grid">
            <div >
              <ol>
                {steps.map((step, i) => (
                  <li key={step.id} className="my-card"> {step.name}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
