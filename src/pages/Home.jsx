import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span role="img" aria-label="wave">👋</span> Chào mừng đến với <span className="brand">DP</span>
          </h1>
          <p>
            Trải nghiệm các sản phẩm chất lượng, ưu đãi tuyệt vời và dịch vụ thân thiện! <br />
            Đặt bàn, mua sắm và tận hưởng ngay hôm nay!
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Khám phá sản phẩm</Link>
            <Link to="/booking" className="btn btn-outline">Đặt bàn ngay</Link>
          </div>
        </div>
        <div className="hero-img">
          <img src="https://media.istockphoto.com/id/1337288994/vector/welcome-home.jpg?s=612x612&w=0&k=20&c=goR_DsRhUrSI35NHpymLNkl8zZSYhWISbvhl_7dAps8=" alt="Banner Home" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Tại sao chọn chúng tôi?</h2>
        <div className="features-list">
          <div className="feature-card">
            <span role="img" aria-label="star" className="feature-icon">🌟</span>
            <h3>Sản phẩm chất lượng</h3>
            <p>Chúng tôi cam kết mang đến những sản phẩm tốt nhất, an toàn và hợp xu hướng.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="service" className="feature-icon">🤝</span>
            <h3>Phục vụ tận tâm</h3>
            <p>Đội ngũ chăm sóc khách hàng chuyên nghiệp, sẵn sàng hỗ trợ 24/7.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="deal" className="feature-icon">💸</span>
            <h3>Ưu đãi hấp dẫn</h3>
            <p>Nhiều chương trình khuyến mãi, giảm giá và quà tặng mỗi ngày.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Bạn đã sẵn sàng trải nghiệm chưa?</h2>
        <Link to="/register" className="btn btn-cta">Đăng ký thành viên ngay</Link>
      </section>
    </div>
  );
};

export default Home;