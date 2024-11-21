export default function Button({ title, handleRecipeId }) {
  return (
    <button
      type="button"
      className="btn btn-primary mx-auto"
      onClick={handleRecipeId}
    >
      {title}
    </button>
  );
}
