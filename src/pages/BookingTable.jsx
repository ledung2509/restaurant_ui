import React, { useState } from "react";
import "/src/assets/style/bookingtable.css";

export default function BookingTable() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    people: 2,
    note: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Xử lý gửi form đặt bàn
    alert(`Đặt bàn thành công!\nXin cảm ơn ${form.name}!`);
  };

  return (
    <div className="booking-bg">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2 className="booking-title">Đặt bàn nhà hàng</h2>
        <div className="booking-fields">
          <div className="booking-field">
            <label>Họ và tên</label>
            <input
              type="text"
              name="name"
              placeholder="Nhập họ tên"
              value={form.name}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>
          <div className="booking-field">
            <label>Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              placeholder="Nhập số điện thoại"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="0[0-9]{9,10}"
            />
          </div>
          <div className="booking-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Nhập email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="booking-row">
            <div className="booking-field">
              <label>Ngày</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="booking-field">
              <label>Giờ</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="booking-field">
              <label>Số người</label>
              <select
                name="people"
                value={form.people}
                onChange={handleChange}
                required
              >
                {[...Array(12).keys()].map(i =>
                  <option key={i + 1} value={i + 1}>{i + 1} người</option>
                )}
              </select>
            </div>
          </div>
          <div className="booking-field booking-note">
            <label>Ghi chú (nếu có)</label>
            <textarea
              name="note"
              placeholder="Yêu cầu đặc biệt (nếu có)..."
              value={form.note}
              onChange={handleChange}
              rows={2}
            />
          </div>
        </div>
        <button className="booking-btn" type="submit">
          Đặt bàn
        </button>
      </form>
    </div>
  );
}