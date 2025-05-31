import React, { useState } from "react";

const DUMMY_PRODUCTS = [
  // ... (Giữ nguyên hoặc thêm nhiều sản phẩm để test phân trang)
  {
    id: 1,
    name: "Tất nam cao cấp",
    desc: "Chất liệu cotton thoáng khí, bền, mềm mại cho mọi hoạt động.",
    price: "49,000₫",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Tất nữ thời trang",
    desc: "Màu sắc trẻ trung, co giãn tốt, cực kỳ êm ái.",
    price: "55,000₫",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Tất thể thao",
    desc: "Thấm hút mồ hôi, ôm chân, phù hợp tập luyện và vận động.",
    price: "69,000₫",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Tất cổ ngắn unisex",
    desc: "Thiết kế cổ thấp trẻ trung, phù hợp mọi giới tính.",
    price: "42,000₫",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Tất len cao cấp",
    desc: "Giữ ấm hoàn hảo, mềm mại cho mùa đông.",
    price: "89,000₫",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLm72-_ooPLp3eVNzX0dCJ9vWwDrha8to_zQ&s",
  },
  {
    id: 6,
    name: "Tất trẻ em dễ thương",
    desc: "Nhiều họa tiết ngộ nghĩnh, an toàn cho da bé.",
    price: "39,000₫",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  // Thêm nhiều sản phẩm nữa để test phân trang (ví dụ 12-24 sản phẩm)
  {
    id: 7,
    name: "Tất lười thể thao",
    desc: "Cực kỳ gọn nhẹ, không lộ tất khi đi giày.",
    price: "45,000₫",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLm72-_ooPLp3eVNzX0dCJ9vWwDrha8to_zQ&s",
  },
  {
    id: 8,
    name: "Tất đi giày da",
    desc: "Chất liệu cao cấp, không trơn trượt.",
    price: "60,000₫",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLm72-_ooPLp3eVNzX0dCJ9vWwDrha8to_zQ&s",
  },
  {
    id: 9,
    name: "Tất ngắn họa tiết",
    desc: "Sắc màu trẻ trung, năng động cho mùa hè.",
    price: "48,000₫",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    name: "Tất dài giữ nhiệt",
    desc: "Giữ ấm tuyệt đối cho mùa đông giá lạnh.",
    price: "92,000₫",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 11,
    name: "Tất dệt kim cao cấp",
    desc: "Thiết kế sang trọng, lịch lãm.",
    price: "105,000₫",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 12,
    name: "Tất thể thao trẻ em",
    desc: "Thấm hút tốt, thiết kế dễ thương.",
    price: "42,000₫",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
];

const PRODUCTS_PER_PAGE = 10;

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(DUMMY_PRODUCTS.length / PRODUCTS_PER_PAGE);

  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIdx = startIdx + PRODUCTS_PER_PAGE;
  const visibleProducts = DUMMY_PRODUCTS.slice(startIdx, endIdx);

  // Tạo danh sách số trang cho pagination
  const pageNumbers = [];
  for (let i = 1; i <= maxPage; i++) {
    pageNumbers.push(i);
  }

  // Scroll lên đầu lưới khi đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  return (
    <div className="products-page">
      <h1 className="products-title">Danh sách sản phẩm</h1>
      <div className="products-grid">
        {visibleProducts.map((prod) => (
          <div className="product-card" key={prod.id}>
            <div className="product-image-wrap">
              <img src={prod.img} alt={prod.name} />
            </div>
            <h2 className="product-name">{prod.name}</h2>
            <div className="product-desc">{prod.desc}</div>
            <div className="product-bottom">
              <span className="product-price">{prod.price}</span>
              <div></div>
              <button className="btn-buy">Thêm vào giỏ</button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="pagination">
        <button
          className="page-btn"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &laquo;
        </button>
        {pageNumbers.map((num) => (
          <button
            key={num}
            className={`page-btn${num === currentPage ? " active" : ""}`}
            onClick={() => handlePageChange(num)}
          >
            {num}
          </button>
        ))}
        <button
          className="page-btn"
          disabled={currentPage === maxPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Product;