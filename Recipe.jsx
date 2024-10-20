import React from "react";

export default function Recipe({ title, ingredients, steps }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <div>
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h2>Method</h2>
          {steps.map((step, i) => (
            <div key={step}>
              <h3>Step {i + 1}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
