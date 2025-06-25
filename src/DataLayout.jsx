import React from "react";
import { Outlet } from "react-router";

export default function DataLayout() {
  return (
    <div>
      <div>
        <h1>This is Header</h1>
      </div>
      <div>
        <Outlet />
      </div>
      <div> This is Footer</div>
    </div>
  );
}
