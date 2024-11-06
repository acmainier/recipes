import React from "react";

export default function Ingredients({ ingredients }) {
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
