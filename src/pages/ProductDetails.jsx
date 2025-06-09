import React from "react";
import "/src/assets/style/productDetail.css";

export default function ProductDetails() {
  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
        <p>Thông tin chi tiết về sản phẩm sẽ được hiển thị ở đây.</p>
        <p>Bạn có thể thêm mô tả, hình ảnh, giá cả và các thông tin khác liên quan đến sản phẩm.</p>
        <p>Ví dụ: Đây là một sản phẩm tuyệt vời với nhiều tính năng nổi bật.</p>    
        <p>Giá: 1.000.000đ</p>
        <p>Hình ảnh sản phẩm: <img src="https://via.placeholder.com/150" alt="Product" /></p>
        <p>Để mua sản phẩm này, vui lòng thêm vào giỏ hàng hoặc liên hệ với chúng tôi để biết thêm chi tiết.</p>
        <p>Cảm ơn bạn đã quan tâm đến sản phẩm của chúng tôi!</p>
        <p>Liên hệ: <a href="mailto:support@example.com">support@example.com</a></p>
        <p>Điện thoại: <a href="tel:+123456789">+123 456 789</a></p>
        <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
        <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn!</p>
        <p>Chúc bạn có một ngày tốt lành!</p>
        <p>Trân trọng,</p>
        <p>Đội ngũ hỗ trợ khách hàng</p>
        <p>ÔNG BÁN TẤT</p>
        <p>© {new Date().getFullYear()} ÔNG BÁN TẤT. Đã đăng ký bản quyền.</p>
        <p>Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn.</p>
        <p>Để biết thêm chi tiết, vui lòng xem chính sách bảo mật của chúng tôi.</p>
    </div>
  );
}