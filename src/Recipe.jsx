import {
  Form,
} from "react-router-dom";

import "./Recipe.css";
import Ingredients from "./Ingredients";
import Method from "./Method";

export default function Recipe({ title, ingredients, steps }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <Ingredients ingredients={ingredients} />
        <Method steps={steps} />
      </div>
      <div>
        <Form action="edit">
          <button type="submit">Edit</button>
        </Form>
        <Form
          method="post"
          action="destroy"
          onSubmit={(event) => {
            if (!confirm("Please confirm you want to delete this record.")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit">Delete</button>
        </Form>
      </div>
    </div>
  );
}
