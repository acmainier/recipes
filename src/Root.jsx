import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { useNavigate } from "react-router";
import { getAllRecipes, createRecipe } from "./recipes-api";

export function loader() {
  return { recipes: getAllRecipes() };
}

export async function action() {
  const recipe = await createRecipe();
  return { recipe };
}

export default function Root() {
  const { recipes } = useLoaderData();
  let navigate = useNavigate();
  return (
    <>
      <div id="sidebar">
        <h1>My recipes</h1>
        {
          <div>
            <Form method="post">
            <button
              type="button"
              onClick={() => {
                navigate(`recipes/newRecipe`);
              }}
            >
              New
            </button>
            </Form>
            <button
              type="button"
              onClick={() => {
                navigate(
                  `recipes/` + Math.floor(Math.random() * recipes.length)
                );
              }}
            >
              Random recipe?
            </button>
          </div>
        }
        <nav>
          <ul>
            {recipes.map((item) => {
              return (
                <li key={item.index}>
                  <Link to={`recipes/` + item.index}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
