import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Customer from "./Customer.jsx";
import Product from "./Product.jsx";
import Seller from "./Seller.jsx";
import Data from "./Data.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/data">
          <Route index element={<Data />} />
          <Route path="customers" element={<Customer />} />
          <Route path="products" element={<Product />} />
          <Route path="sellers" element={<Seller />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
