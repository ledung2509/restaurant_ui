import React, { useState } from "react";
import "/src/assets/style/authForm.css";
import { Link } from "react-router-dom";

export default function Register({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Xử lý đăng ký tại đây
    alert(`Đăng ký với email: ${email}, tên: ${fullname}, số điện thoại: ${phone}`);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Đăng ký</h2>
        <div className="auth-field">
          <label>Họ và tên</label>
          <input
            type="text"
            placeholder="Nhập họ và tên"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="auth-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="auth-field">
          <label>Mật khẩu</label>
          <input
            type="password"
            placeholder="Tạo mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="auth-field">
          <label>Số điện thoại</label>
          <input
            type="phone"
            placeholder="Nhập số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button className="auth-btn" type="submit">
          Đăng ký
        </button>
        <p className="auth-switch">
          Đã có tài khoản?{" "}
          <Link to="/login" className="auth-link">
            Đăng nhập
          </Link>
        </p>
      </form>
    </div>
  );
}
