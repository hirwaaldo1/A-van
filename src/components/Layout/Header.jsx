import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../services/api";
import { auth } from "../../config/database";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [user]);
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

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
          <img src="/assets/avatar-icon.png" className="login-icon" />
        </Link>
        {user && (
          <button
            onClick={() => {
              logout(navigate);
            }}
          >
            X
          </button>
        )}
      </nav>
    </header>
  );
}
