import React, { useState } from "react";
import Recipe from "./Recipe";
import data from "./recipes.json";

export default function App() {
  const [recipeId, setRecipeId] = useState(0);
  const recipe = data[recipeId];
  const { title, ingredients, steps } = recipe;
  return (
    <div>
      <div>
        {data.map((item) => (
          <button
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
