import React from "react";
import { useParams } from "react-router";

export default function ProductDetail() {
  const params = useParams();

  return (
    <div>
      <h1>ProductDetail {params.id}</h1>
      <p>Welcome to the ProductDetail Page</p>
    </div>
  );
}
