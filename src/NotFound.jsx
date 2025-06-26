import React from "react";
import { useParams } from "react-router";

export default function NotFound() {
  const params = useParams();

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist. : {params["*"]}</p>
    </div>
  );
}
