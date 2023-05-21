import React from "react";
import "../Style/Nav.css";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink to="/" activeClassName="active" exact={true}>
            Home
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/list" activeClassName="active">
            List
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/cart" activeClassName="active">
            Cart
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/create" activeClassName="active">
            Create
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
