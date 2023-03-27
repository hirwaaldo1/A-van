import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink to="." style={() => activeStyles}>
          Dashboard
        </NavLink>

        <NavLink to="income" style={() => activeStyles}>
          Income
        </NavLink>

        <NavLink to="vans" style={() => activeStyles}>
          Vans
        </NavLink>

        <NavLink to="reviews" style={() => activeStyles}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
