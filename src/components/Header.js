import React from 'react';
import './styles/Header.css'; // CSS 파일을 따로 생성하여 스타일링

function Header() {
  return (
    <header className="header-container">
      <h1 className="header-title">AllerMe</h1>
      <div className="header-icons">
        <i className="fas fa-map-marker-alt"></i> {/* 지도 아이콘 */}
        <i className="fas fa-bell"></i> {/* 알림 아이콘 */}
      </div>
    </header>
  );
}

export default Header;
