import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "/src/assets/style/user/layout.css";

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="app-layout">
      <main className="main-content">{children}</main>
    </div>
    <Footer />
  </div>
);

export default Layout;
