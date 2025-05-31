import React from "react";

const cartItems = [
  // Ví dụ dữ liệu, bạn thay bằng dữ liệu thực tế từ state/store
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
    img: "https://images.unsplash.com/photo-1517363898873-fafc2070293c?auto=format&fit=facearea&w=300&h=300&q=80",
    price: 55000,
    quantity: 1,
  },
];

export default function Cart() {
  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Giỏ hàng của bạn</h2>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-info">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-actions">
                <span className="cart-item-price">
                  {item.price.toLocaleString()}đ
                </span>
                <div className="cart-item-quantity">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
                <span className="cart-item-total">
                  {(item.price * item.quantity).toLocaleString()}đ
                </span>
              </div>
            </div>
            <button className="cart-item-remove">✕</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div>
          <span className="cart-summary-label">Tổng cộng:</span>
          <span className="cart-summary-total">
            {getTotal().toLocaleString()}đ
          </span>
        </div>
        <button className="cart-checkout-btn">Thanh toán</button>
      </div>
    </div>
  );
}