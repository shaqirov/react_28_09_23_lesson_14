import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <ul>
      <li>
        <NavLink to="/" className="link">
          Main Page
        </NavLink>
      </li>
      <li>
        <NavLink to="/users" className="link">
          Users Page
        </NavLink>
      </li>
      <li>
        <NavLink to="/posts" className="link">
          Posts Page
        </NavLink>
      </li>
    </ul>
  );
}
