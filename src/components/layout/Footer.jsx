import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <div className="footer-logo">
          <span role="img" aria-label="logo">🧦</span> DP
        </div>
        <div className="footer-desc">
          Mang phong cách & chất lượng đến mọi bước chân!
        </div>
      </div>
      <div className="footer-links">
        <div>
          <h4>Liên kết</h4>
          <Link to="/">Trang chủ</Link>
          <Link to="/products">Sản phẩm</Link>
          <Link to="/booking">Đặt bàn</Link>
          <Link to="/cart">Giỏ hàng</Link>
        </div>
        <div>
          <h4>Hỗ trợ</h4>
          <Link to="/about">Giới thiệu</Link>
          <Link to="/register">Đăng ký</Link>
          <Link to="/login">Đăng nhập</Link>
        </div>
      </div>
      <div className="footer-contact">
        <h4>Kết nối</h4>
        <div className="footer-social">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="mailto:support@ongbantat.com" aria-label="Email">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="tel:0123456789" aria-label="Phone">
            <i className="fas fa-phone"></i> 0123 456 789
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      © {new Date().getFullYear()} ÔNG BÁN TẤT. Đã đăng ký bản quyền.
    </div>
  </footer>
);

export default Footer;