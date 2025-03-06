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
      <div id="sidebar" className="top-menu">
        <div className="header">
          <img
            className="logo"
            src="/logo.png"
            alt="Menu logo to go back to default page"
          />

          <h1>My recipes</h1>
        </div>

        {
          <div className="container">
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

        <nav className="nav-container">
          <ul>
            {recipes.map((item) => {
              return (
                <li className="recipe-selection" key={item.index}>
                  <Link to={`recipes/` + item.index}>{item.title}</Link>
                  <button
                    className="recipe-selection-btn"
                    type="button"
                    onClick={() => {
                      navigate(`recipes/editRecipe/` + item.index);
                    }}
                  >
                    Edit?
                  </button>
                  <button
                    className="recipe-selection-btn"
                    type="button"
                    onClick={() => {
                      navigate(`recipes/deleteRecipe/` + item.index);
                    }}
                  >
                    Delete?
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
