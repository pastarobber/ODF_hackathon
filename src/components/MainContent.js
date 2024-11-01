import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import
import Header from './Header';
import './styles/MainContent.css'; // CSS 파일을 import
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function MainContent() {
  const navigate = useNavigate(); // navigate 함수 사용

  const handleMiniMapClick = () => {
    navigate('/map'); // '/map' 경로로 이동
  };

  return (
    <>
      <Header />
      <div className="main-content"> {/* 메인 콘텐츠 영역 */}
        {/* 나의 정보 박스 */}
        <div className="info-box">
          <h2>나의 정보</h2>
          <p>이름: 홍길동</p>
          <p>나이: 30세</p>
          <p>알레르기 질환: 비염</p>
        </div>

        {/* 미니맵 박스 */}
        <div
          className="mini-map"
          style={{ width: '385px', height: '340px', cursor: 'pointer' }} // 미니맵 크기 설정 및 커서 포인터 추가
          onClick={handleMiniMapClick} // 클릭 시 페이지 이동 처리
        >
          <Map
            center={{ lat: 33.450701, lng: 126.570667 }} // 초기 중심 좌표 (예: 제주도)
            style={{ width: '100%', height: '100%' }} // 크기 설정
            level={3} // 확대 레벨
          >
            <MapMarker
              position={{ lat: 33.450701, lng: 126.570667 }} // 마커 위치
              title={"현재 위치"}
            />
          </Map>
        </div>
      </div>
    </>
  );
}

export default MainContent;
