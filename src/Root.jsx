import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { useNavigate } from "react-router";
// import { createRecipe } from "./recipes-api";

// export function loader() {
// return { recipes: getAllRecipes() };
//}

export async function loader() {
  const response = await fetch("http://localhost:3000/recipes", {
    method: "GET",
  });
  const allRecipes = await response.json();
  return { allRecipes };
}

/* export async function action(...args) {
  console.log("action", ...args);
  const recipe = await createRecipe();
  return { recipe };
} */

export default function Root() {
  const { allRecipes } = useLoaderData();
  let navigate = useNavigate();

  return (
    <>
      <div id="sidebar" className="top-menu">
        <div className="header">
          <a href="/recipes/defaultPage">
            <img
              className="logo"
              src="/logo.png"
              alt="Menu logo to go back to default page"
            />
          </a>
          <a href="/recipes/defaultPage">
            <h1>My recipes</h1>
          </a>
        </div>

        {
          <div className="container">
            <Form method="post">
              <button
                type="button"
                onClick={() => {
                  navigate(`recipes/new`);
                }}
              >
                New recipe
              </button>
            </Form>
            <button
              type="button"
              onClick={() => {
                const randIndex = Math.floor(Math.random() * allRecipes.length);
                const randId = allRecipes[randIndex].id;
                navigate(`recipes/` + randId);
              }}
            >
              Random recipe?
            </button>
          </div>
        }

        <nav className="nav-container">
          <ul>
            {allRecipes.map((item) => {
              return (
                <li className="recipe-selection" key={item.id}>
                  <Link to={`recipes/` + item.id}>{item.name}</Link>
                  <button
                    className="recipe-selection-btn"
                    type="button"
                    onClick={() => {
                      navigate(`recipes/update/` + item.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="recipe-selection-btn"
                    type="button"
                    onClick={() => {
                      navigate(`recipes/delete/` + item.id);
                    }}
                  >
                    Delete
                  </button>
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
