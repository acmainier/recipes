import Button from "./Button";

export default function Nav({ data, onRecipeIdChange }) {
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
