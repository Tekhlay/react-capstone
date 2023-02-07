import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Nav;
