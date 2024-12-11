import { Outlet, Link, Form, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router";
import { getAllRecipes } from "./recipes-api";

export function loader() {
  return { recipes: getAllRecipes() };
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
              <button type="submit">New</button>
            </Form>
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

          <button
            type="button"
            onClick={() => {
              navigate(`recipes/` + Math.floor(Math.random() * recipes.length));
            }}
          >
            random recipe?
          </button>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
