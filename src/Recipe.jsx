import "./Recipe.css";
import Ingredients from "./Ingredients";
import Method from "./Method";

export default function Recipe({ name, ingredients, steps }) {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <Ingredients ingredients={ingredients} />
        <Method steps={steps} />
      </div>
      <div></div>
    </div>
  );
}
