import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

const AppRoutes = () => (
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/cart" element={<Cart />} />
    {/* Bạn có thể thêm các route khác ở đây */}
  </Routes>
);

export default AppRoutes;