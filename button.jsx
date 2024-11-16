import React from "react";

export default function Button({ index, title, handleRecipeId }) {
  return (
    <button
      type="button"
      className="btn btn-primary mx-auto"
      key={index}
      onClick={handleRecipeId}
    >
      {title}
    </button>
  );
}
