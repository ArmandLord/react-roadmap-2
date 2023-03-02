import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src="https://picsum.photos/200" alt="Logo" />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="about" element={<h1>about</h1>}></Route>
          <Route path="users" element={<h1>users</h1>}></Route>
          <Route path="/" element={<h1>Home</h1>}></Route>
          {/* <Route path="/*" element={<h1>404</h1>}></Route> */}
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
