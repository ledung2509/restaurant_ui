import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/src/assets/style/user/productDetail.css";

const sampleProduct = {
  id: 1,
  name: "Tất nam cao cấp",
  imgList: [
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&h=600&q=80",
    // Có thể thêm nhiều ảnh vào đây
  ],
  price: 49000,
  description:
    "Tất nam cao cấp, chất liệu cotton thoáng khí, co giãn tốt, phù hợp mọi hoạt động hàng ngày.",
  stock: 25,
  category: "Phụ kiện",
  rating: 4.7,
};

function ProductDetail({ product = sampleProduct }) {
  const [mainImg, setMainImg] = useState(product.imgList[0]);

  return (
    <div className="product-detail-bg">
      <div className="product-detail-container">
        <Link to="/products" className="product-detail-back">
          &larr; Quay lại
        </Link>
        <div className="product-detail-main">
          <div className="product-detail-image-section">
            <img
              src={mainImg}
              alt={product.name}
              className="product-detail-main-img"
            />
            <div className="product-detail-thumbnails">
              {product.imgList.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  className={`product-detail-thumb${
                    img === mainImg ? " active" : ""
                  }`}
                  onClick={() => setMainImg(img)}
                />
              ))}
            </div>
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-title">{product.name}</h1>
            <div className="product-detail-meta">
              <span className="product-detail-category">{product.category}</span>
              <span className="product-detail-rating">
                <svg
                  height="16"
                  viewBox="0 0 20 20"
                  width="16"
                  fill="#ffbe00"
                  style={{ marginRight: 4 }}
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
                {product.rating}
              </span>
              <span
                className={`product-detail-stock ${
                  product.stock > 0 ? "in-stock" : "out-stock"
                }`}
              >
                {product.stock > 0 ? `Còn ${product.stock} SP` : "Hết hàng"}
              </span>
            </div>
            <div className="product-detail-price">
              {product.price.toLocaleString()}{" "}
              <span className="product-detail-currency">đ</span>
            </div>
            <div className="product-detail-desc">
              <h4>Mô tả sản phẩm</h4>
              <p>{product.description}</p>
            </div>
            <div className="product-detail-actions">
              <button
                className="btn-add-cart"
                disabled={product.stock === 0}
                onClick={() => alert("Đã thêm vào giỏ hàng!")}
              >
                Thêm vào giỏ hàng
              </button>
              <button className="btn-buy-now" disabled={product.stock === 0}>
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;