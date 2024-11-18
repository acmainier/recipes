export default function Ingredients({ ingredients }) {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul className="list-group list-group-flush">
        {ingredients.map((ingredient) => (
          <li className="list-group-item" key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
}
