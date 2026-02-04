import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Student Dashboard</h2>
      <div>
        <NavLink to="/" end className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/courses" className="nav-link">
          Courses
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
