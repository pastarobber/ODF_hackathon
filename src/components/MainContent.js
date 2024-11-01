import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './styles/MainContent.css';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function MainContent() {
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState(null); // 사용자 위치 상태

  useEffect(() => {
    // 사용자 위치 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude }); // 사용자 위치 업데이트
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

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
          {userLocation ? (
            <Map
              center={userLocation} // 사용자 위치를 중심으로 설정
              style={{ width: '100%', height: '100%' }}
              level={3}
            >
              <MapMarker
                position={userLocation} // 사용자 위치에 마커 추가
                title={"현재 위치"}
              />
            </Map>
          ) : (
            <p>Loading map...</p> // 위치를 가져오기 전 로딩 메시지
          )}
        </div>

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
