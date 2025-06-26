import React from "react";
import { NavLink, Outlet } from "react-router";
import "./data.css";

export default function DataLayout() {
  return (
    <div>
      <div>
        <h1>This is Header</h1>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/data/products">Products </NavLink>
          </li>
          <li>
            <NavLink to="/data/sellers">Sellers</NavLink>
          </li>
          <li>
            <NavLink to="/data/customers">Customers</NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: "/data/products",
                search: "?category=shoes",
                hash: "#top",
              }}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
      <div> This is Footer</div>
    </div>
  );
}
