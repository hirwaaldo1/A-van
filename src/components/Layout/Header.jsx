import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate();
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  function logOut() {
    localStorage.removeItem("loggedin");
    navigation("/");
  }
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img
            src="/assets/avatar-icon.png"
            className="login-icon"
            alt="login icon"
          />
        </Link>
        {localStorage.getItem("loggedin") && (
          <button onClick={logOut}>X</button>
        )}
      </nav>
    </header>
  );
}
