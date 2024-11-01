import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import
import './styles/Header.css'; // CSS 파일을 따로 생성하여 스타일링

function Header() {
    const navigate = useNavigate(); // navigate 함수 사용
  
    const handleMapClick = () => {
      navigate('/map'); 
    };
    const handleBellClick = () => {
        navigate('/noti'); 
    };
    const handleWeatherClick = () => {
        navigate('/weather'); 
    };
    const handleTitleClick = () => {
        navigate('/'); 
    };

    return (
        <header className="header-container">
            <h1 className="header-title" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
                AllerMe
            </h1>
            <div className="header-icons">
                <i className="fas fa-cloud" onClick={handleWeatherClick}></i>
                <i className="fas fa-map" onClick={handleMapClick}></i> {/* 지도할지 마커할지 고민 map-marker-alt 아이콘 */}
                <i className="fas fa-bell" onClick={handleBellClick}></i> {/* 알림 아이콘 */}
            </div>
        </header>
    );
}

export default Header;
