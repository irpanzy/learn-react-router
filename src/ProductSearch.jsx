import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function ProductSearch() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  function handleSearch() {
    if (search) {
      navigate({
        pathname: "/data/products/search",
        search: `?search=${search}`,
      });
    } else {
      navigate({
        pathname: "/data/products",
      });
    }
  }
  return (
    <div>
      <h1>Search Product</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p>Search Query: {searchParams.get("search")}</p>
    </div>
  );
}
