import React from "react";
import "./recipe.css";

function Ingredients({ ingredients }) {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Method({ steps }) {
  return (
    <div>
      <h2>Method</h2>
      <div className="container my-grid">
        <ol>
          {steps.map((step, i) => (
            <li key={step.id} className="my-card">
              {step.name}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

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
