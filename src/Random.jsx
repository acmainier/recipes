export default function Random({handleRandomRecipeId }) {
    return (
      <button
        type="button"
        className="btn btn-secondary mx-auto"
        onClick={handleRandomRecipeId}
      >
        Random Recipe?
      </button>
    );
  }
  