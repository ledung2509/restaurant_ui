import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => setMenuOpen((open) => !open);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={handleCloseMenu}>
          DP
        </Link>
      </div>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={handleCloseMenu}>Trang chủ</Link>
        <Link to="/products" onClick={handleCloseMenu}>Sản phẩm</Link>
        <Link to="/booking" onClick={handleCloseMenu}>Đặt bàn</Link>
        <Link to="/cart" onClick={handleCloseMenu}>Giỏ hàng</Link>
        <Link to="/register" onClick={handleCloseMenu}>Đăng ký</Link>
        <Link to="/login" onClick={handleCloseMenu}>Đăng nhập</Link>
      </nav>
      <button className="menu-toggle" onClick={handleToggle} aria-label="Mở menu">
        ☰
      </button>
      {/* Overlay khi mở menu mobile */}
      {menuOpen && <div className="menu-overlay" onClick={handleCloseMenu}></div>}
    </header>
  );
};

export default Header;