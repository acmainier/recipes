import React, { useState } from "react";
import Recipe from "./Recipe";
import data from "./recipes.json";

export default function App() {
  const [recipeId, setRecipeId] = useState(0);
  const recipe = data[recipeId];
  const { title, ingredients, steps } = recipe;
  return (
    <div>
      <div className="d-grid gap-3 d-md-block">
        {data.map((item) => (
          <button
            type="button"
            className="btn btn-secondary mx-auto"
            key={item.index}
            onClick={() => {
              setRecipeId(item.index);
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
      <Recipe title={title} ingredients={ingredients} steps={steps} />
    </div>
  );
}
