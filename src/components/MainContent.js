import React from 'react';
import Header from './Header';
import Map from '../components/Map';
import './styles/MainContent.css'; // CSS 파일을 import

function MainContent() {
  return (
    <>
      <Header />
      <div className="main-content"> {/* 메인 콘텐츠 영역 */}
        {/* 나의 정보 박스 */}
        <div className="info-box">
          <h2>나의 정보</h2>
          <p>이름: 홍길동</p>
          <p>나이: 30세</p>
          <p>직업: 소프트웨어 개발자</p>
        </div>

        {/* 미니맵 박스 */}
        <div className="mini-map">
          <Map/>
        </div>
      </div>
    </>
  );
}

export default MainContent;
