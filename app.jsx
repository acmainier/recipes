import React, { useState } from "react";
import Recipe from "./Recipe";
import Button from "./button";
import data from "./recipes.json";

function Nav({ data, onRecipeIdChange }) {
  return (
    <div>
      {data.map((item) => {
        function handleRecipeId() {
          onRecipeIdChange(item.index);
        }

        return (
          <Button
            key={item.index}
            title={item.title}
            handleRecipeId={handleRecipeId}
          />
        );
      })}
    </div>
  );
}

export default function App() {
  const [recipeId, setRecipeId] = useState(0);
  console.log({ recipeId });
  const recipe = data[recipeId];
  const { index, title, ingredients, steps } = recipe;

  return (
    <div>
      <Nav data={data} onRecipeIdChange={(id) => setRecipeId(id)} />
      <Recipe title={title} ingredients={ingredients} steps={steps} />
    </div>
  );
}
