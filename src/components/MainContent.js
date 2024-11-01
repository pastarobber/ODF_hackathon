import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './styles/MainContent.css';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function MainContent() {
  const navigate = useNavigate();

  const handleMiniMapClick = () => {
    navigate('/map');
  };

  const handleLogoutClick = () => {
    navigate('/login');
  };

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="info-box">
          <h2>나의 정보</h2>
          <p>이름: 홍길동</p>
          <p>나이: 30세</p>
          <p>알레르기 질환: 비염</p>
        </div>

        <div
          className="mini-map"
          style={{ width: '385px', height: '340px', cursor: 'pointer' }}
          onClick={handleMiniMapClick}
        >
          <Map
            center={{ lat: 33.450701, lng: 126.570667 }}
            style={{ width: '100%', height: '100%' }}
            level={3}
          >
            <MapMarker
              position={{ lat: 33.450701, lng: 126.570667 }}
              title={"현재 위치"}
            />
          </Map>
        </div>

        {/* 로그아웃 텍스트 및 밑줄 */}
        <div className="logout-section">
          <hr className="logout-line" />
          <p className="logout-text" onClick={handleLogoutClick}>
            로그아웃
          </p>
        </div>
      </div>
    </>
  );
}

export default MainContent;
