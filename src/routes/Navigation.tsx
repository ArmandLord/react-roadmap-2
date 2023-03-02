import { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";

const Navigation = () => {
  console.log(routes);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src="https://picsum.photos/200" alt="Logo" />
            {routes.map(({ to, name }) => (
              <ul key={to}>
                <li>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              </ul>
            ))}
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />}></Route>
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} />}></Route>
            {/* <Route path="/*" element={<h1>404</h1>}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
