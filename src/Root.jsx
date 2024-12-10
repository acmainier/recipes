
import { Outlet, Link } from "react-router-dom";
import data from "./recipes.json";

export default function Root() {
    //const randomRecipeId = (Math.floor(Math.random() * data.length));
     return (
    <>
      <div id="sidebar">
        <h1>My recipes</h1>
        {/* <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div> */}
        <nav>
          <ul>
            {data.map((item) => {
              return (
                <li key={item.index}>
                  <Link to={`recipes/` + item.index}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
          <Link to={`recipes/` + (Math.floor(Math.random() * data.length))} reloadDocument>Random recipe?</Link>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
