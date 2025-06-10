import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BookingTable from "../pages/BookingTable";
import ProductDetails from "../pages/ProductDetails";
import Profile from "../pages/Profile";

const AppRoutes = () => (
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/cart" element={<Cart />} />
    {/* Bạn có thể thêm các route khác ở đây */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/booking" element={<BookingTable />} />
    <Route path="/products/:id" element={<ProductDetails />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
);

export default AppRoutes;