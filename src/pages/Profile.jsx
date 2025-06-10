import React, { useState } from "react";
import "/src/assets/style/user/profile.css";

const mockUser = {
  avatar: "https://i.pravatar.cc/150?img=68",
  name: "Nguyễn Văn A",
  email: "nguyenvana@gmail.com",
  phone: "0912345678",
  address: "123 Đường ABC, Quận 1, TP.HCM",
  memberSince: "2023-02-12",
};

function Profile() {
  const [user] = useState(mockUser);

  return (
    <div className="profile-bg">
      <div className="profile-card">
        <div className="profile-avatar-section">
          <img className="profile-avatar" src={user.avatar} alt={user.name} />
          <div className="profile-name">{user.name}</div>
          <div className="profile-email">{user.email}</div>
        </div>
        <div className="profile-info-section">
          <div className="profile-info-row">
            <span className="profile-info-label">Số điện thoại:</span>
            <span>{user.phone}</span>
          </div>
          <div className="profile-info-row">
            <span className="profile-info-label">Địa chỉ:</span>
            <span>{user.address}</span>
          </div>
          <div className="profile-info-row">
            <span className="profile-info-label">Thành viên từ:</span>
            <span>{user.memberSince}</span>
          </div>
        </div>
        <div className="profile-actions">
          <button className="profile-btn">Chỉnh sửa thông tin</button>
          <button className="profile-btn profile-btn-logout">Đăng xuất</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;