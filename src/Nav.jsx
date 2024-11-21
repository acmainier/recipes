import Button from "./Button";
import Random from "./Random";

export default function Nav({ data, onRecipeIdChange }) {
  function handleRandomRecipeId() {
    onRecipeIdChange(Math.floor(Math.random() * data.length));
  }
  return (
    <div className="d-inline-flex gap-1">
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
      <Random handleRandomRecipeId={handleRandomRecipeId} />
    </div>
  );
}
