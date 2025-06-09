import React, { useState } from "react";

const initialCartItems = [
  {
    id: 1,
    name: "Tất nam cao cấp",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=300&h=300&q=80",
    price: 49000,
    quantity: 2,
  },
  {
    id: 2,
    name: "Tất nữ thời trang",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=300&h=300&q=80",
    price: 55000,
    quantity: 1,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Tăng số lượng
  const handleIncrease = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Giảm số lượng (tối thiểu là 1)
  const handleDecrease = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Xóa sản phẩm khỏi giỏ
  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-simple-container">
      <h2>Giỏ hàng</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tên SP</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} alt={item.name} className="cart-img" />
              </td>
              <td>{item.name}</td>
              <td>{item.price.toLocaleString()}đ</td>
              <td>
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span className="cart-qty">{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </td>
              <td style={{ color: "#e74c3c", fontWeight: 600 }}>
                {(item.price * item.quantity).toLocaleString()}đ
              </td>
              <td>
                <button
                  className="cart-remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total-row">
        <span style={{ fontWeight: 500 }}>Tổng cộng:</span>
        <span style={{ color: "#e67e22", fontWeight: 700, fontSize: "1.1rem" }}>
          {getTotal().toLocaleString()}đ
        </span>
        <button className="cart-checkout-btn">Thanh toán</button>
      </div>
    </div>
  );
}